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
    "5BPULiRpDFB6HPhaqPTygf1QJQw8FTUmRspQ7We2nHbnAJqnBHdtCSgajzzVQhwqfPF7ksW42JD5Npf3sqkozQzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVFqYUNkMRRjqqdXSpFQcN5Fh5DGcS52juzWLjkrV2MgfNnFDbHYMLRLWBPuVhG1r8KB6hJWsyt1fhoAMpm2U9",
  "key1": "4cxeRyFbLv8SzGwFkAQXJ968Qpr81r39fB9P6nu9AiwzJnsbJw4qfPQ9pFiVQQV4uZCax4cPWpuk1jJiaZLQAwEs",
  "key2": "5ZB3VXX4aFDtGRiYMsSGqbL5RxqDocs13kcB7bAsy1gyi2UwWdFaWNSvpUUJ5vNYU9apU7tB2yicC2cqyTNjy91h",
  "key3": "NVBAqGuYUVSH3kyEGNgMgRCedYbMePVAYR27bj8tVx3VosKBrANTFxodoeeXEoqnp75yCnZBvYfFG9r484ddeSL",
  "key4": "5dfg998JobE8uYo6ga1AK7DpxUQTN4ThVgpEAefrXKrsT9GF9hdknpzGrpTfbCsYaX4zDHh5Yys3vRbAYEo3No6B",
  "key5": "N8W8DZgDMovA34umEZTHxuSns66RoVCpKjvbQe3np5xotqfDpv514ch1GAJt83rTAAfe9pyFf1iUwENyGtshzWe",
  "key6": "4WNuKkj6AxosFK6ArUTTqBiQ2z3ttVSFuPxox1BePQp5hvkbnuqPkTw2Rg6SvC8Mc3hsyJLJSb1ux3bYwJSi6SU9",
  "key7": "3RJ58quJwLtMVHPa1Df3Z4a4FhWYiS2emDziqQxdVxBoHctBtBf3SnM5wU42xnwyRqutW7VPdHjVtXnbvyfm2sCh",
  "key8": "2XVdPaNt5ofRxcCjMTNW2pUrejh9bfZwR2bD6kcryfUxxoYB8GFbpLHZMVXqzNE52SEumE9zosr69arBAhDjjhTW",
  "key9": "4Ledo6EjjZJyRaiXYeLg2vEGkZwbytHURW9khpmGEJjtohKeaygpf6a94QCYKiZBDy1wSxJ3HVg6jjhDuR45nCDh",
  "key10": "5CDuLmcKoUiQHt4UiPP97rBghn7ozhN8ig4RdfLzu9jwxskB5HQJhesFh1tL4MDZvGoP49MovWWmV2t7s8jwtUka",
  "key11": "3M9EtrUGmdFnYixhEFuDiGdEn911QEVvhwKmg6d8cy7YNpJCG75fhTrSYxWJVi9kPH4Pt6q28APG18jg6REQ5imt",
  "key12": "33ydfhanuaJNUKtGXpFH26W3gkxHqbrvB1gwdDbKZW1jG636tvvY6onGHTBoUHJqNXyGWcgQG8TN52RLke9WNFMu",
  "key13": "365qhVK1G3wX9TyEA6n2KmM5qPkLCaQm1hzkfFzpMpg3u9V5xXqyfNg5zVjZeFPirY1HAczVaJbAdQFDE8mDS6tz",
  "key14": "4jYyjZ3YZVFVVopa1v9CYSezf7aKpPe9jpNCc7r4MavJFtQpcFuaV8hHu7FqXX2DinmdU3XUdMUC6qvAR6kSoAbR",
  "key15": "4N21BNhManeG1TbCJfSH6ojZrEneBdyZMv8bxoEuyYNi8hVcjYM9pZrH3SXaPegYrVzMJZ4NntUfhfNDd92UPfL",
  "key16": "34DoHdZjZ2wnVyKzaTsp5pJomHm6Z5r6U9Mdo8APQ1ecTvDCd1NGeEL8DTUe4dTvkhvixuYAbcPX7dF6ysdFVBSb",
  "key17": "652ouYThJx4jknqsV79XTWw6HnSFf5fWh8d7qMD8xrsFc4wy7TZx1ATw3cWNcAadP2b9KsEXgMDrZhueLBUtsVeR",
  "key18": "44UDM1wXzG4oGWaCiQTr2BCHvpUiFKiwjQiEjJUPJMbReaDgy1NXQKadx58makTNzty12exnEKMUUzSyio9HepkF",
  "key19": "4y1YFLptBR7FXYh3gwoeT1EwSUgMRabn7M4zAk5SoxwotbyewEAunRRC7ToP7SbHNpa7JZeuryeYVB6VXgXmkkFz",
  "key20": "2ckBsRaNuyuEdriJJRouqz6aHursrmzQxVEsuy1pHvxBEspkuu2f2gdvombkgJRZbpkXKoeD6uckcLSgcd7W8LMf",
  "key21": "4pPnMeAYNft1HnFUdtGGmZcUx3QDq8XfPp6fUDCMV9hdvQk4LAJ1rau9gJu6Nxnn6GXWjmQQ567rN2iREUUvzCFb",
  "key22": "5zhbatz56hALeNzFVcAZeYa7QTwD4nSWaLBN1Zk4JBKeaat7qtRMB7r9QHVg1JY5JEhaWtw2FCvLszmKagqSphcT",
  "key23": "2jPgyGiMffDWu6SmNhVVKyb3eL1vXQNTvxZEYPHHrfwHwbaQ235WUFezK86DP6j59WughMX99nC3PESJasgvBoj2",
  "key24": "5MeWb4rU2AosSc8nMe4egRqesYPUEUj7RQhuX9ZHozct3CjN1sjVBu3twuiQQSvSumQyNvXPitWfnojkdQExpZ4D",
  "key25": "2XK3aFL3wyJDvMaeUBxmuNQh9RbSNJsUUebuQPdjZP2h2TrRnPHeUf8F6qNFprGaMZTSmqzEEpXtXb5TKyPusCXg",
  "key26": "5hzP1RY7KmZ1yXqbaKukkPDwiz52QkFKy9q9HeSeaNnQonUsATCKJPZsvVkv66gTtcmP2qQ8V3eTFSYTCYxv898N",
  "key27": "3X11jkThby8QAuCHcP6tZc3NqGCbqTWLh4T7fif2uJoxyrXECENRqgwFXnWojHPtJvmWcAECfx4zAzPdkXBnHGEi",
  "key28": "4AyZUhNEnYYwwN7Svy8PJuuucVrTQXrLEwDrK79cC6kJmpyzynhHszLiEimnvh5LSvx6is4MMpH8rGUnGUSfo8TL",
  "key29": "3f5xwDL7hWcNpwtPjR23yTGS269FwVP6qPc2j1fj5V6dCVmGaVLobMUgVeWXRGPXZ57zhuA7vL8ym1UPPMXg4d8a",
  "key30": "4ng2tuERpCEqEQbgjg8qLfbV6CMizWW4x94KiBPLPDZyFfocFTvAL1LqUZbeBRHBJ64BDfd2XareRX69RPvZbvWh",
  "key31": "wFVJi88T8xiZifSXXN4qpVASdYTr9V3Q8qdNse1VKKSj3ZD5SPeXZ6uPKo8U9dFzE8aq2geZYrZ3nfzec6D6FcH",
  "key32": "5fr3xzQKQV3c1QNvjHHC2Atru3ELcBKZynRPgHEQjjtHA5TiopQtJDLscotHUnKuXvjXLNGgXVNAXS9RYwfaWYLr",
  "key33": "5ENNwhG7QgXES2RpNYzQG6HF69PvkYmRsVtLjAGfb9WeztNzAS7Qt8RhtXpVcRR4PoVaoViijaBZn34seHYw7LKz",
  "key34": "5NPQhiwkCv9TFuAgNhNFysfBTY8EKfi76bbkofRJySseAtaS7cNP9XFRA327jyAPvtokDkmFd7Bz6XifkJnXmHag",
  "key35": "3NxMuCNa7YUgpDxDE7MRHqgLJYZCMSxMqcYeu1fVdXFPc515LbE8j6DL6hA3jxggwZh639Xc3FWTvDeXS33u4Fp4",
  "key36": "j1G961LFoBdW5PVXxR9iEXuoRgHaUp8oD8DyAiMjPzeZMb942wteme8yUckLGYawY6LQorw2FmqAviHdGs5KYXr",
  "key37": "3e7Trm7v2knbxg1cQH45yQzvGuARFae2jg13PNSw8tc2jqJ6KUygCyEMzaR5uaAk1S92oSP3oztJ5xq35jF8i5RT",
  "key38": "9hYBfvATvTGbaQFgENme5PfTfxWYrs2PKWdh2RPYoGYAfh4hiFJfV5MAgbEehsTYrcmPXhu9fUuJQh4GEJPb2Gi",
  "key39": "ngN6Ysrh6haZRKX2x8E6r6xSgjkT4jT3Jm74BLS47ae1USaqhN2JFPjoudLzj9p2yGxwrPzf6KjBvSYkNhCpzkL",
  "key40": "5q4zYdXDhZ18X2CQvZKxeZoLyyoFsBUg1n48MQdgFw9Ww78UGXmEdKQxv6bicfrdWZJB1u6mzmkVR1d1nzPcYz3m",
  "key41": "6ZETjKYdoscDDnS3Ye2MRGezDeDcGavktda3jeWcoorSWNDh2sSrExiBPcBrC3edj33dR7ShK6A6CZ6m5XeNXak",
  "key42": "3Pfm3qgwGyHiqfoQ3f3KSL4FEtnCi3uHmPusvQLGD5kMb1XHD3VQMZAMhEQcgjsPg67pgx1VgvWCcq3Z3QKABobt",
  "key43": "3CcNHurFRp9jTeVaB2kpu74cX99SJKCHHso1wAZShU4Qozkzb63y2VWBSgW4scVYkew9iSamJJPuDKKCPbMe1F2B",
  "key44": "3kdRFFcuB5yvw1XpJmxjAWEFcY6aunvdyxeqvFEmmzFAVyrg8bNZzNwhBivj55ripHNwLcTtS4uQJB1A942UdgTH",
  "key45": "jSEje4A8RdPXHMGo64qFCQbMDcSwRqqxgM6LRQnYTRzikAL6x6gYvcDUU46BFrHq4oh6CKGsEWCbYjBFEsWnnZG",
  "key46": "2jbT2U9T6V13bgsSrituduueRfxGVXAChTwGcTrqp95BuZa2omQyoabGPtszS8RFS53gTSwXPk3LK5uqt2Jtc2xt"
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
