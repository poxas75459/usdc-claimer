/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4LQdNiCv5sPEWAWSk4hFqCjgkb6gfMX2dBt5jyhh1epbKVqE6FVhH6FtBGBfQD11M4nTs1MnX3xXMKQ35HqzMQ8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VxipCD8zRzfYCR9SKAHjuRHtnXCxb1Qikh8vHURyYAuQgbp6utu9JBsHQFej9DQEoh8ydhEJKRBc1M4LR51eS49",
  "key1": "3eYrDpzZRDRAc9wftMhg8kQBBzE47PT2t7TgCH2i8FMnCNgyxqqb3arEHkUaehmgUEea7unrFSEuhZek95CEk37o",
  "key2": "62qGZquGqp2GuKSyB4q3L53nJS9XqDQhneGDcqyG1dPhNmjRTTg3SR4oRwzcfQrNL6hkzbkQcwbTtq1pWjEzcTBg",
  "key3": "4P5APV6ERhm6Kb7wT5Q9WtaHEo621wKsXXSFts8J1ZMJgs5FzibBU2N9fq74GD1AVtPx7KfsGcoDn4iQ4TUSa6fa",
  "key4": "dAyjuquqf22Wci6LDkCDghfj8RE2cL7D7pPQp1NMLo4HwiUBjUpGcW6BLKgcXcFAzkJEYd5Gi4Q95iAm9sRpFts",
  "key5": "4dDPzHLtf89b6dgCdu9FKsFqqsJfoGk8fME7kQ7DVMvcWLTL5JVXUj2oSZyqrQQsHozsFzLRkFeoGYF5NZkCQx8A",
  "key6": "5w52FZjDGyMs2LfSjbiSpVDTgneigPkMAYH8q8TDHcdz1csWFe1Gtn81rJq6x7e29YHqyfV3MhRex8BAxh7KSQ7S",
  "key7": "3AoQmqPuQV33eNN8m72iG89bEfDV1a7DzY2VgeDv8CMSeVotfaAfwQhh4G7XPRVBWyXsrj9nDnzbZnrBGnyS1Cod",
  "key8": "3ZsDYwbr4rhvcSKug8W7bfGCePkjNXMPBPZ8Gu6oMwqa2eJZ7R8U3GrFj3q7QBiCg828iVbh8xsJTEBxNzfHaWdv",
  "key9": "5bSZT7seUhVXZ7VjkmMoJorAafnn4HqbAuBmdVmz3w8zNJtjBZt3wd9FnnyZgKURtDe6NJ7iNU52fWgg1RkZce7w",
  "key10": "61u9jFREE8UBzJLTUh7EBE92nezBChEasy1ieVSg5Q3NmzSWJsHHuaxXTfEKpoTWWVv5rnQdmSBV772zEufXABKF",
  "key11": "61AACwK5BDsmi8x7qLWGDvKR8QgcqBesy2azoR8o5Y9YCYYB2LNKBFY2DxKLuqqeCjzwEG5zpf7Sz388kcbLDd8B",
  "key12": "379bmyXGQHvTyo2nruqRuWugJYaaGbZ1mXWgNh59cHXFbwEEoueobXpQaV7gbum5DD2LTHFhtV2LsDf5jwkKXseb",
  "key13": "bi4c8t19FU2M4vCnQ3rupmZXsEhW4rqKNshMUUwkcDWFoUrpNmYSGNm3WysRHYj1zcn9h83w4jQJKMFqRQnpv6N",
  "key14": "QfCjJvSQDbAezfe1pwv6jnYJkF7id3wwmLQQBXx2aUTpRdNhw3xAuajPW5Xe3wnmqXWZciKaA1oYTMk8pLRfp9q",
  "key15": "2JsfcDYTVmv7CvJvJ1uDBWPaGj57hMYxhE9VTopUVmqCAJhZAsHK2dSATfXSo5fBSSPoNd8QMzjn77hChJ8UtmpU",
  "key16": "2bySCaoeW3u1ah5WrVQAJ8rExTwspbpnQs3Axmq3Q2UaqnWY3FcHWEidjzY7yR3XL62Ghncko5M5gNox4znLYXZV",
  "key17": "Vc7zZmzNHTBYQQ51zPaabX2Mpc6a6YTrGJquopUifz9y8FWST46xVaUj5iC2P1V6AE4zS6sSNKL6vBTLDSCJErv",
  "key18": "7VK9eNJSkaiNf1irkhjzLZjNMErF83heSNPuegUtayvs97gmBRcPhA1VCc9fRQ2XCstZMrTGYFp4qwtpCFyE72W",
  "key19": "4r8BsXqGzb4YCzzHVLfQUdJFnKSzKbYHSYd9gJZDSXfQgWL3PW9f3xCLpYoy58C1FnaVKY5ymSMAcMC3v16fuNDZ",
  "key20": "2DCpKybBf47shANaD9cPH3pdozAoBDvhPzh23b196NcVaXE2p5awQGXuFKfKoHYK8Nb1mMGi3B9atoytbnQgbZZ2",
  "key21": "67oD5RsgZuPAPXo4m4EPewL16TjpnhRfBYyDGi4RVhN6vayyynJVhda6pZt6FcSBxzXAZ9FKe2agggqmdmiHJ6GA",
  "key22": "4e6eDNJ4ubt6WkFfadjsdFrSL3XysYtBsnvfVHYKc6zJ4E1PsXfjifdFHxA5JjE4cy5qoz4jHHTLuHuKxDC92YJW",
  "key23": "WLiJV8h3pQTMYcuHti8YKdyLpRkkmuaxz8bkeaYR4YqkZuuFeZBGxwEG1DVPbdtegbaUmQ8qzSCsA87XYaEpBwz",
  "key24": "5Mov7e3HvQXA3VFezd7nq49VK6HkaADxfZNdPByYhrwuA99bYnoVHncaftxaebf92jyRKBkaFWhTSLQypKUWQwat",
  "key25": "5bSu56L3iDy8LfkawifARTyG8eRUTkp91DrSLhJreh7wPceqqtt4GC5LqGYK934FZcnvV9pvXJ4aP7mMWn3C8pG5",
  "key26": "28sbu5VS4iuLFyZxLpNWHyZqg4izzhM64WqF3YBEP8JRXXfUMYB8RWmgE2xjtc2hKhnWEj5AqMsgmpXXXqxVoHGb",
  "key27": "4hCUNKwsdCxi1bVLvWgJfwMAYJw14bPfEyppFBhgiJyHCV9WbsPa9QJEwBYShFu9Vnv2XFbn8bhFH3R3AdKdwctd",
  "key28": "3jb8oueCj9gKpxC9gE4XAJJtQbLwvmz5gfwEK7Crhmk8HRHiAWLu9HTFWvr5bmVZMSJz2Gb9HEwN8YDashvznXpi",
  "key29": "5V6myc8pW3UvwibJXFUFgdu1KrrrMs8wiRs8EU3fnYfBkddKfU61QyZeeZYxRLSaSK77jWWh5sBAzYVuATWqDknu",
  "key30": "4yF5nHBn5L996RGmpStQ43B16qbRwtFojtx8JmY9duN4Li9qnUDTMwex9QwUnWGEbQcezrcUgwFxGaN8zHURuF2M",
  "key31": "4XQGbBwRfJgBLeJ82Nn6jbh3c2E6cadsYBc9SpcJQnBmMs4jQ8Fp92BmodkB8T1hH5DMxYDVx65vrcfqbQeLjXLA"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
