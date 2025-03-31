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
    "3xkWkVDdWSeJd788u1qT5t9x61J3P2HCdRAZHK3WUpeS2MXAi72673MwxgvpPBqYGKbNG3MVJQ8gStDJMViW11JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47duABt1qpfWf2L4beq49tSsqsd3EvdVcLa5NGU1Va4e4oBbRn6CwNh8jRSpdpGgityRcu1w2zbVgw4QECs8AAof",
  "key1": "5mnj2WCeAgcvzU2WpW7Rv79DvqsFKs7PyUknKAyToLGgvkZNtkZBGpJhkyWqY6HiWY1Guaq5WUvLvZ2awCZSH59y",
  "key2": "EUs8tTMxjExByLnJAwppA1TYCcPZmTDfSZinH7iAquzMeVjznnoYqJgrV4HgSRi1aZJ3VXkybw1L7VghBkQeK3X",
  "key3": "4332Zo6VXGFmcybCW942m7E1R1YkHtwrhaEcBxjPiAGwhom5DJcJeE46YkNdWzT3AARGsgnPu8tAZNEe9QiTsEvu",
  "key4": "2Sa5hCKh6DRK4fHDfZWbw3GDdGBbmLJ4qbFm19dpdHNHQipRwgHCLS3wfWCv2ZgZnszYLnxxf3fPhoMguCJ48hTW",
  "key5": "4CFCFUXsXM529wMyjGNFEnaWH1U5FPUXSt16TKpFbNDbuyZtGQVfP75qwPzyHM88F7LVtxJ1KuqeRSJsuAfKBgsW",
  "key6": "38D9vSH2J3AxxaLEs5m6s2B9rPpcXfpg2ts19vcGASKxZdnhai3WJCiiQTVZGnkp5MpQ7YTQFLQg3kY9cYbqTuXX",
  "key7": "3ZqHXzaUBiyohDER9kFMQMLqLwMGNVJfaHUynzFK5Z3bcmSuCRxLsew1U88g6GCYuQqqLzohTDgtTSJJAedTzJJ9",
  "key8": "4uMpzYKtrDHnBH7p7gGUpDqSR6vij7d1fpLetZGC3nyTE3mTevkL7FUvptYyTTA6wMjdk81QE2CJQBumWCc7VbfG",
  "key9": "3toULFVSm3amNDod63F4jhnWafLq5vUMvQciJGJq5tGmrXBpHwNbxvW1mgozyjtbRaVKsDuzkZUBdCcpX97T67Po",
  "key10": "3vF6cyEeJQqZEStTV7SQHXS8Zpt2WUnhmLmw1dofxcYDovZyBL211y8SqUwPWhnDELbmpeU2AtLMZN9J5pTDh1W5",
  "key11": "5q2CkuJ6xt1JDjdGNZP6j9dLvngFyesR82bXdJnf4RN81WCHB3jrKYYYQhJ7YuQCpYiLMF5uNQ3ZvZUf2QujmhF",
  "key12": "22ggQbdwr97SQTbLFWEPBP1KFwhbxtxQTbANwVXLnDRshkh6kMhiXa3E8bX2k7yBSauDxfPpyReQt7YHF12GRy9i",
  "key13": "5kdmCWbKD6u1NKeckDzCrGgrQd4pagUnTVzGgcDVh6jm5ymxZJ7RYSsaeVhnffvaKLQFRfxxs78reLEvdLZs7e6y",
  "key14": "4UPnQmziDZhWrD5wB5h7JWmHdmBxrFHmYYnEYqjHfFMcp8b8jWDaQ7796zyGMpHcX5aGELpKqCEgys1R46vukEk6",
  "key15": "kL4wytGbd7ZmhgJq1H1dYQcyTMsunRXNXi7DLvchVMTkv7cpbJSvxxgHbCH981gwa15TrGgALEzu5iyHHp6p6AU",
  "key16": "23doJyrfWi6ph59SxmoZCW5aQ44xKnVxFvZyGbPyipskgfYjh9WATeCZQyWG7eUVuXrbo9YsUmf6jHiP96b9vJsB",
  "key17": "3s1e1ZG8MGNKn5TpmLsZKvN1ep5aH5ygpskpppL8yEHxX9haJMjBDQN8YeGoFAEAA8kEqY45BcA1Pr1NgaBT3QJA",
  "key18": "3nHPkwau4abnyBpYCiXs1NjqBBR6VZ4ZsCLNB4sFUJA3WtLZ8bfZioCa8gbH4b7VvwKYUHd67oYCv55TXPCNCSf",
  "key19": "28ALTPkBYFdc16g9vgXuyB5AuD7BeK4QtVuXj9NE8od8vDFXAAg3nquiocd7PrSqmm41YTnjEMPhzV9ZpeuhiDTa",
  "key20": "5BNH6ktya3dAPQFa9VvSSUWbp7qJXLJH5uXEp7w8GjiqGhmTHaYP76Jgp1w4FypG53W3xBsPYRCiX1KyNatKnuLs",
  "key21": "5uk8EYrASyfyUa1qWrDP3fRHHTHFmF3CNFmREbu9FMNumdWCtw9RbDEvRPwCXwrwhX16tgzo2edY6aJJbmTYeKju",
  "key22": "38v1Njc2sZnTruQbRqE7gD8stJ2D71sKvY4M7guCcxbowARGKCzTBLwKdgNVWpsZhYwSLLYUatdFvLhVEFvDvziV",
  "key23": "5rVsnEsZEGLyPGZ6GL62aQCi9cDfUiXcdbYQHHe2E8JYvn1SvKYC5yWKuuextFkdoJfDKXFa7pssS5UqfhZe7qZP",
  "key24": "2xEQiTJMYfm63MJRmWDK9zb9Hxzpxz7iUx55NAA43shoeeawTQ5UXYjyKiW1YLDr8RBAXijaymiMW8Tec3bdXhfu",
  "key25": "QALHt6SH9HQr1C62wx9ArRGn6MQZy9qo8K5ocduMZhtDJReUjv3hZKEgDkmSaRuKEoT4N6nqUAPvPPdz7d2UNbW",
  "key26": "5KPG88icPFhh3ewp1pq46MDzDtz4YocCQRo8RxEnifNbQP5rkNZCG5GQt18unUa2W55Hr2n9CjVx1hY6wQMAEkFz",
  "key27": "2L58gMVdmWdAQA7vjTTP3kqUk8SmEhm6sRFu4RzyB2xjGP1GCnckQYzeH1uBgh7Hd4mcXwqC14pgmY4mV7NBrS8g",
  "key28": "TN2L4rVVE8os1jZrmL8fqSxBTu1DFSiEGxrWpDMJZUPLLqdvf1G9ffeZiR9snU7SUTdBvB4pJwQsyfvVSmW9RUs",
  "key29": "3k4Tw2XQMfuNaATzQTaiQzBqnLHksCe34hWq7hxvAbsiXbSm5CxpqJTYgoTTfM5cC5rTn1ScmrSrea34FF3SgvTM"
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
