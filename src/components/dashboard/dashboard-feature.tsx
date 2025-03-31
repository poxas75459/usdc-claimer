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
    "2cBbR5hMva1iwwez2cKnfg9W8LeKicNiakDoM3uY9uqNJWNN6fEdGjRTu1uEHR5DyUtMoaUJFBszewS7yfDuNa4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vCHrZ4ihac2grEXGWgosgqfp6F7eUWDSfXcsRwEu56YVkLcoczA6c6EoyHKqa7rCXSB2WMbEAee9fiHRSpbLzyh",
  "key1": "3yrTFMkntCpbQESGD1tq7gfBhpCocsPdaoXt6Ws5e65eeq4Vc9ZuGsi8znbX7tGgmUgcckHJDFvRbVPxNvkKD38o",
  "key2": "4AhRyaJhptzVnjjk5YKJWCpj6rnX9PibRSh9FPDzUp8iUn9WKUEX5REjEGVqAooFwE6SMsBzGzVC93uGuk2aXWZM",
  "key3": "4QiqQary4vn1z6psCrLrnhSFsuR9EYpv1QwRtcwua75x3crvhiUC1AibVQKskvWk69pPAWKfPujrFRAT6b2zgQLJ",
  "key4": "5BH7Yi9QQRTKXbFwtVSVRpRcFsWshEsnFrNyd7WnC6mrfgRuoXoBDkJotiXBd2NMQy3e5eeqjKioQmXcEtyrei6T",
  "key5": "4RRUmh47YsLHSAwgnCuHXLHFHzKJM7gDBA5sVtMnUqRLdks7YMz4o7urTryitxJbekMYbiYFWGHHNYge6zTxdvUg",
  "key6": "ZfNuhtSWip8JLbZTL1xXDXVKvgMwU1yUrCWSx9dKVRJWk59L6WrPYsFYzDKKZhN6XMzUqtNyjhRkuBMoLHnMwrT",
  "key7": "61N4A4qnduAcfRXeEtSa1vYvzFiuhCoQDMZzi992zb1AY6d7NVn2MRztZAQdC8nQuQvdNafcyEzW8pTqzNogzJGD",
  "key8": "3NeYtSiDpFHWwAGLrPjFTMDXKFodryZFVTW17McjVYQr6LVkbERY4jk3L4CZjfeauqYMrK8EYJBLuUNvEo7SNzrb",
  "key9": "h5g9Qb4oHyejNb6M6apvLhdCqqyhxNMVNUi686fVRr16gF4QH2TdMBdzaagpLQpgkQGRTFiVe224J917tXy12GG",
  "key10": "o6Rx5kQDFh5hQZqHZqe51WvJyV3uTNXpkGR4RL2yxjeAQMK5g5FSM3J8Ta7iSGJpomw7d5qtMAH74TqM5YwKRPF",
  "key11": "kZ3ypidja1L3CQtSxmZZ89z7NXHEPs49ibPsVaX531o3AhfN4oV9ZyXtkbJzqZKpG6Qt11vUpz1w7yYqrHe8xQc",
  "key12": "5yHTBeskPSNbNYnLcgxTXKQSLU1SLSD1aSjSWiu9BaSSEismd1mRL2Afr7P8DoptKnW9EqxNnyqkZ8wPy2g8uVH5",
  "key13": "5Bhp2wyLcmNfqshUgxEE8ajR73U1taBy9yYttZEMitt4gF3VximpoywfqtPYgP2KtG4GCesftSj3AyjSo3gNYBGV",
  "key14": "3LT9X9RaJdpPAjMNySkmAe1uD4Pp17q5KA1Sc1wJY6MFeL9LY6T2TRjYQ1aE6TLReTpY2hh5Ap5T4mZQi8CpGTdL",
  "key15": "4JMdRjDsWMWk9zoymuJMwjpf97XxhRZocEPnebF7eYcoWuGhD4ryaCqDhSoDxtK9cFnPhSuaK21SxpU2Zax8U7tN",
  "key16": "3ss6SFyJnkoLGRJZxByjYR6tUWKS64TB148EBvTcor1t5Qt8gxL52xv6zLRXG8Wc1fKh3b4MdiQGiDkCUcbkAGAN",
  "key17": "2rW5KJELUZuy81j3uVqFfkN3X716nTYPpV1ZK3XK3T9FBXD1CYRb7g6MN5cber4aHdJoXSCsMEEQSdAbRxqRcxpg",
  "key18": "4icHoRUyUbt4JrFbU6t3iiJ2QBB2KmxvrcTKUtZDyBMUs6EADkqSimrNkLaQfCCRgmbCYAbp4yfCXq4aXoqzvRig",
  "key19": "T5WcvuVqnegpR7KLgAkJqskJSTHjfY3vjqQWh5X1tGvd18adWNXa4afguXQpPYz9jnCwf4gDQw6vuDFQ5DQSYNN",
  "key20": "3eZzfUiargvxWSXQrBYZFa727De2spKSc8uY71H7NHiRWnDge7PDwqsg6UjVk3jSRKkGBiHLNd51nABWGKAb5n8W",
  "key21": "2Ht64FWek9rPVVyjQhXpXEMS62foLkQNHAC56Baj5qoUBMzyJcCchdsdkSvgDBzG9xwNfq7VhPGuxRB3P21LP1zW",
  "key22": "2YZbHVJtH4PQAieeLCXSYzV2EwXUesCVkJnwSGazuFv5YGM6RH2bmT4yXDBhNVNxUctpPsuQF5oAyhJSjW5kF756",
  "key23": "3nHNF9NxPv8mXsqYRXj1wSYzj3RTYmgHdiABP9DCVa1EPoRq8ER5FFpZZUui6g1HaLQSc2XbZ6DAGSGtsT2E9aAq",
  "key24": "KTDxFHR6CRUHNJCghgQTwEx64k1x9bKAgW2ci3CS1TnAkGTPZS3GyAj6KpqVDUGvEoTSx8dFqcs97jiRfCKhhFS",
  "key25": "3ZYjgVkw2sLtm7uGZxbX94oKf7CYuW9x3j4ffHfd62nKkhH4JzxYreKjzP5wj75YabrP2xbMuaYi337pzZ363B3v",
  "key26": "2CjViwJyXMWxW4nUZhsFvwtTt1AqPmd8JsQqQb3BDZHLxzi8totMUkUbMBx2ALGHKzNnGnbH5efeUWG53a9tnrix",
  "key27": "2UXP3mcuSPDitzB2rfb19jdNrTAyJBAywzHPJMQR6Pvnrs3CvQe4XZPi1N96fmzX6yErZrzsWVqDSeRQnUEJ9FyG",
  "key28": "5FZ87QzCcEUzS1XXtTwEg5uANHJbpNjKRwm7jA6trAJr8qxJtW89R2xJ96MfYkUew8Lvembmt1kfuakGDq64aiLm",
  "key29": "5J9HyqzyYJFqELdWSWqZSXhpgJm88xJggu7RBQ21u2HSNWwy8drBUmTuBQRYas7y5LKTgmVhhXXAakSWJihB7qQf",
  "key30": "2nRGriJkWfUFMNFTENgqkJkasQGeRinWqnWQgSVSY3FHdTAkaQ7KfAP37XVK5QK6y58FBZFCQA4SoVJo2UFVkcMh",
  "key31": "5hVAUn3ZYHzE4aNFwERWxPtFmjE8u9egZjoL6irn4APzXE7XxqhzmjmF6CcVwRCeUM3ymckxzWMZTxjjHbaUzcRa",
  "key32": "Cq1q7aCm4x2jDSBc4KtCFRVw4sYnJd2recYxr4hQWc1mzLiohPtpcm2TA1R2qe5skD6uisY78dGYKb59RxJ8rRV",
  "key33": "5meVQhAPRXhUv1uTnVxqpXwy7h94Q5dYEM71pcipe4wxvYTgScesFmig6JgieT2tNDSAx3ZTg7gJDaYoMoRqMnk4",
  "key34": "WbTVyVxoEyyLGYUxdhLDeRwp2Z1w4AQf8woiBHvVWsSiXUjVCh2vmQ1GKCKaULqjdXssMTxFYTbA5C4FK2YE6Nr",
  "key35": "5BzR4QY1rkx1GYquSin84m1qSMNJRmhbC92qVgVdYy5AZ7DvkbKUAwcfjACK4SnVJmmYok8g9HtkrAmdv54Uu1sJ",
  "key36": "5n4HF6Q3keZZ67kifTqdsRRrB63YfcMGgJ2h1gYwfTMJGhvgfqtYbJChL82PykqLDunYQ3FJxE5T9U6gJfZEPwbm",
  "key37": "4VeKiFZjKnTDnKX9pjMARX8htW8Uhz8mTbVTtqWSMKZhVPjZiSshkuLF24e5RaF6VKgphrNChxkvvcujPwALGifV",
  "key38": "4ZyfG2tFRwwerYnJVRNooFvPTp7gvTCeckKV8UT9qnAFkD72ViLwqPoepybLJf1zcc5dM3ux5GNQ5nYXKN8JR3XD",
  "key39": "4smtuoDXWMpwdg4zcVnip4D4tnzJ7JvbGQquSDH5eeCQ3GBBJFmo85YHKPFWwCekLuhdVCVdADPRsuvUsqXXboUh",
  "key40": "38AgiyW7x4A3vedci4XDuM1kwwsD5Kb2msjZSeeYcY4nDKNme3L8mt3N69AcoJX5uD8Hx2exMNyau8fnCxFfqKVH",
  "key41": "4euRs7ksuz2NNRwxZ5JhUejCYQfGtQDBZ6ktcjBBdfcJnwGhJDWu7rBg1Dj7FGN4xg9D7fsyPd5xsCiKon8SRwU7"
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
