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
    "2Z4nug3iDW9KWeRwbuby3ej7jzNw86uT6xpVPFNRmN7cYnXUheJzCyvyBFSpALnWXgNNhagyDgXgf35cAJsgrB6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PS3L7C9neppRYXXNdg656QM4csZ4LfnNiZXhhmZZKKRf1mRV8inydSkBgr3ySwfNbPJY9g3rFS4KGXt8ngAWWXz",
  "key1": "2UjfVcHJUdiXR4Uq962n3eyXiTXd8LoVeLzPT8VVBrtwTqt71q1tbcjE2vwVcKnKM8wh4e7CsCFXfPo6bKt8fbf",
  "key2": "5pWD44C4EeKFCDJB2V6D5vPbbdVYPBe2rxKEHfQLUXHsB2Jy5q5XYXogLEfY6tRiBDobAwa92wGfUXc58oPW7zKA",
  "key3": "2mUkw9sEaCEvg13P2vcW7d9cmprJoS1pYDK5VR2PfPZAnjTjeNprsLD1tweuZxAsxF6vP8JVsgzDTddR7xh22LFn",
  "key4": "4hqVBHNuWhVpUtMycakPcSJSiA9GwzdhQbum87HRdH7Gz4meWkbvDVdTqHJNvsEjuAJco823GMnN1AdfaNPKHqM6",
  "key5": "5ZjwfW7Kkzqjdy65JvDdbpP3oeArPdHGTdZX3fivK7qsmqUWKEHmbRWVkXPKJyLGEQTjJVqcWSTE6vza5jEdPw76",
  "key6": "5JkbFqKhZWWPjPvBkabLxX9ETbdVpWgy8LM8qtiU6jTp5sd8B1C6JbhgcJYA7MtE2jX284cKvSQRnodrmGC8qwfb",
  "key7": "4b3AzhZwBNmkYwmY3ix8KGGF8qgFTbQLwTGVGnkvYswDww1n5sxMv1RezVBbffgUuZVZ4YR4RxW48tubvVYYHMtj",
  "key8": "2DiUX2JKFYSsJiTouoUTCdDediNSw93gFgMesZUGx2MEZg5uE5Ru3aWjS4C7htvvxftJFctLPuEQQwV1NwmYtPy4",
  "key9": "471jvu7TVp8jJh1prNmCG9MNtVqTeoEoeoU2dq8VgyYLLYtgXAP9vQzr2LqzSBALebpJvJ2vj9ViXr1KsoYdaTGz",
  "key10": "ZdPsBi8Jsx4nAtLQ8jgZmLNKpDrJezEVKTh98y2NTMTzB8hjNnWY7uSjZQf92xQMtNvLzXrFtEXAGJgkF3ssitS",
  "key11": "421mYhw6UHqK7gPkpQbYsrKhB6hDKQLD33fM6Wfpbht1sQpTAJtEstpypRbPyxx3iMUm5brmHgAHo2ZQ9TmFkAjb",
  "key12": "9YYaDzQQwV6FviYz76k5Zd2iZJAE2DBXqNEgZD6TNTTMe3E824hH8KQXNchsmKVzQZDyBs6q3tGMCNrJxDthFZP",
  "key13": "4Qjh79v27gZ1TwWbbi27J797xhni4XaPX58vJczf3bkjFkaDdVrijiZJ6SV7sjRTnSF3o9V6S2NtW9wCTz455yVA",
  "key14": "4qUvtcMim3U4h8gnU519pFM6csJYz4hrs61XK1eThbqwRqkFmmZsxHXwmDnY2soeTjRH1cSt7XsmFyqCi3B1UySc",
  "key15": "4RRCTAv28UA5T81DGfLMm86GoMzdCCkaEmm7X2yUsEnqUbXEPGzL9z25JKnaYzdQHihFHSRjFAZMN4GC7oc6r1oK",
  "key16": "41i8NLCJ5hKUMEKCXgkBnq7Z1ubS8KJE2XAJtztK15jJqxkzEQCi3Be9xaAN4C7XQREVCWwLTU9wiVhZNihTxqK1",
  "key17": "2gnzyCqaWus3pHntmqyDHifvZDdg2GTaeVyYStzFRpTQfsBCyyTtYVGU2opep9PoXayaLCxAe4nYYXKEuVQpTg31",
  "key18": "59bxMYs9q4kP6foEfs3eV62nruNnKrzFiRmunwiRXhqSCirxbuBizWZsVGaQXaozZbKnyjCD75ocHTgiFWtVBYXc",
  "key19": "2mYbXtUQXjUqxkDAeCUait2UCTTY9txUf6zDnJn4MWzw3HAdZqDxQHaAqQdNAxjdNjx4vakuobCjgbPTJdaSg8W",
  "key20": "GNjpZU5oQr1c8ZAuQCWueGi8NBMWeBQTZoYCu2nun6UGAkaGyXiVdQXmJhcFUhyrnmHSJMwCywgji8vn4sFaGpn",
  "key21": "47o1twrG74Fwig9rz8Dx62bBWHrdWKg1YpSqrTwXk987YWibUanmqmYWKdaaAD9hsrQggxc75e5iBMfCHZccW8Dr",
  "key22": "5oiWj7sM93W1Nq6gTqb8bkBSH9f9XuCMtfCMjDjDyBNVYepE9aeYW3ceF3sCYtfsGRGk2hiVrUaTMHEBcpJsQKYD",
  "key23": "2NPGbXQc3Kd5DQmdDpC7Q7oHH8EyKNmHE843zvqVSTcoZ1Q5AHUzvY5iCZRPeBtWbQKV8vbKraSCu9su2bamXYDf",
  "key24": "3LZiqsT8pUETBdiL9xTMyZcDoKKgZCJmnTEkd1WkAvUaYQBTJM9JEDmjAit3WnKsvUXJw9R8j14Xj21gwBFZyAD4",
  "key25": "zg9XMp1tergQ2NJ6ocs27J58iEYKiRpm1UAxg8ftpXCVQgWwVuY6aK3R5CowsL14iuKMCC4RtnVwJ2dKbftmFQ9",
  "key26": "zQonLMdFCmQXQVXR6578SLinS9nF57RBU9AZk3ma7HACDLJCLxmPRMGeWa7tGNZ8XN1BP7ZqitwkUZA1ccubqtr",
  "key27": "42L5mh8G15wrKbZp2HetZUA4SnR6rmixPnrR71jo3tkqEAb1MYTniDu23N3cfK9Dw6xgUsGN7AuBzM64WmNH9woZ",
  "key28": "9YnjVCzWuUmdmpd5UnMobtFmzEVw6FnV2prtVR3HGaTFALBopsKbzC6ji1nm5GiWPaCUBM2fEbcFfTQKhHvTZr7",
  "key29": "UXEzXyvQWdXCBu85EVrSivDpA9LVpD3kpEbDE3wrbHjwjByFMALHjASmuEuhstZBKaZNwgbSxgi9TFJbjcR9Yro",
  "key30": "49AkTZb6Rx7bZ6WEextLPBtJNZw1WvpVqo71Zaj1BLT2HrYz4jNJaKSCxhsRhdd4CsMJm5WcWRMy29G2gh8oKCxU",
  "key31": "5VbehegUGwEKScLH3WduuQjQFBNe8UrtHw8qZTwR4fey4vcBcUHL2W586J5eQcXtLoQDaHQwMC96bfHCpNDvCinN",
  "key32": "5ixjMsXPTFTJa86D2fpbygrscLEsWBvxNjKVmMRGsm2JQeXUe4FRBMCVCrkuznJaGqA9DoG3kaqaW8FdJnBEnX65",
  "key33": "upBksMnKd8m8CoNAjXWxAihoQmy8ap8GYPWSd1Vpr5rgFwR45RyPU9mdhP6jVRQFXS8gGnNod3Y39HpoHsZ5aQ4"
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
