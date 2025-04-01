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
    "YJhQyEES5hZJzKPx9NxKX9o6hzfycJqbhDHgZjLdfg9MRF7KahDGjGBsYseCa9TuHukT9DSzdDbGPnEjU2gmGig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8ysL3cJ9FJD5ELyzkhftmFwecb4JY6AK5k8tKJXwBD1fXbdJ48W6wQgfrkkqKpid7tZQRDkU3rKsWmrGYsUuag",
  "key1": "BfedDCMTxVig6V1qBRAgyUtdVTuL9ZngJf2T6shMtYNHJZFuPtHSrYU3pseRzt7U7B2zpyJUvqUkpyNz5PMozsK",
  "key2": "5pRfHwXMxSJX7wNaBoCatxbFZXtaUSHoc7LpyUnJKvqMB8Grb9MSYLSUg97muqtEhfhNL8yDdNgLmg28UFxZ5SAs",
  "key3": "5KvJ2aVbLzCNPjMpxzaNbzhRvNzonqYsvuv5Szuv2FtjKMGxDYrpuW8Mw5Nkn7YVFBirS1HiK964Hpw2cAJMjJxk",
  "key4": "3vFQALA2RTQE7aUts7FcZK87ZV7fN2wTzijW3FPJt2dVYoxQ6qW4spP4JJHzQVtkAGZvkrqN8SHCWxPbBVTjt4D4",
  "key5": "3HekxBvpgXdYXx1yQmnt5q8rtcU4UPSoMiUU7PGmoQd6jbtRDvE1gByWHhCAXTSZ3ZiYUbZcgTTWFDJo7aoKS4U9",
  "key6": "4eCUMM4W5VKjnqkarF9Y54Ggq9hapDmyDhWsCtiw34sedpNAmyp3ksTqEfyDVMC4d1Vb6G7zbZNYQrk3zoRpvYfq",
  "key7": "yQsKq29D44WNr4C9D6FTSXyhuctE86YW8ejXVsaUnatKmAax5WCr2ooVZ3PNoUh31y6ycdAQM2FcBFL895erYrG",
  "key8": "458NQDBDPwJd2vovxpiAdkqBmUZHJxTqCV1ou3TeAfnJkJ1WLAkBkvjLg2AcLWMp9pxEMEypBYZJWdLnoNNFNWvq",
  "key9": "JfgTiD2Wbw3eamAcTXdX8yYLB6iXxn3V1WiyVyTzYiwba5C5iFjqHuXH5cti9PvpEHEwmtakKFVw8L8TwkkFTaS",
  "key10": "3TjviYsjm3a9yWeSDxNJqo2ARwZ1kPBMDEdYYjcb2zb3itNABpg3fpsUCcZCSc4hDncPZNpJ8LD5rNmhnbiYXVpB",
  "key11": "3aVR3tid77aZ9WNsTr8Y6uiDdvDaGLg6uJ83iVGAAsGLfcfKcTSbfRy7geeVE6Kgn5qdnPxbsCh38hTfSTxyvP52",
  "key12": "qTQ3L7wZz8V5Qw4RS92swyrwhPitawNGmsk9qcBqby937br8PTp6TLDC79vMnePBhDoKzC9FdFwaj6s4bSB81Fx",
  "key13": "2cqeQ1QX8VsDqYRxZFdoyqZ5769R6vXwbjcHfQmQKmAhjpY7wu1ELgnhtRASQH4yNSdxRSKh9vkmHR6egRsJkisE",
  "key14": "2iabmzqM8XeSZHpS6xNST5iydHwhYxPfRar3A2i691WwCMdrM5Sj1Mo1jBYJ6GciqbghrBdqPSasrmwg9dABypd3",
  "key15": "2rzVachCNEdqhYxmSBsR3KN3sNkPUxjh1eAsytRQCX5s1uz72wHVYQ6cGFawUg5MYADWn8rkpGoPdbyP4XdjKfaJ",
  "key16": "4BrjdkYu8YCo8PVRiT1PAtEczY875oV9ZTBFT1KPnwQ75fekbro6kNkdALWk9mQkHGWwCsdhgk51VezPTxfaVuYq",
  "key17": "PuTh25zHJwLot5xQrjX87bCMnWmwGd9pr3n3Npb6CNmbG3S7NYDA6herWRG8WXMtQCF8WaCDCurJ9z2To1WTtjb",
  "key18": "iVNrPTSt89WrcYZc93HxqQJn8NXMswSJJzagudW61bexauDW2g4Yj1csYtKFUbtnWCh2Eokwvs4D2FGhYUujigy",
  "key19": "3RoV58vUCFQ4oeJ2sXwozJpdaDptUsig7FVqoc2TJ7dDd19Bn1Fcze4dgVLqWc9QnoBnqXzeDxm38y3tHLYcYUUJ",
  "key20": "3jurdWXykCu3MQYQrbWLwwk4iuPK9mMnYpGr1zitzZSSMKLPiTr5RukEuJaTwYK6ocd2RxCgDJZqjWwZb3XBt5bp",
  "key21": "5W71xEzs65Ktfotr6mT4Vv5RFPqJXHRb2UJviDugSif3tQ6mQL4P35hwD9u6gYWUZGi5DyanFhsPUAoCqPJgpR8m",
  "key22": "65fGcDHwPGU4tfVocmx5HfLFW8bFNeB9oTQqfLwZZHEAYJpujFXA8rSJsqciA97XW5VaiEZapCyX5vQ6VV6jjWTw",
  "key23": "3PuHMZhSEu57Q1y87v87MyY2he85w2XvUqherELXUtTbP96ZxQoCNCeWdym8mbym35EHHDX2VYziaUYZJ9G6aAYz",
  "key24": "5iV73m4kpgRQm5vTRCp2gEpznSSkSPWzaRybZgWqhKYqq7R5PxdhVRsBkC6bvQdMfQ8NYJqtDrcknseioddKj41F",
  "key25": "4NtufwnBJQFiztd6daPBmtmR2dPJTdQgKxcGAcXjcTfBAYkhXqMPYAFSn6gNbvwg6FURQr3ZGhNXmmvK7gkRdyYj",
  "key26": "4vF2WMLHqWdDFhdL4J84EuT8aG4Zjx3odYiBbWHwYX8PzTE7oLB2gD4uvobkcCkCVDViLuJXDAUpcVZC77qAiPpX",
  "key27": "4KD29dqPgDtMTh5kL6r1JRC9b4M6Ur9v2xb6DsSSUJyRMa3zS9TbBVEoj9hMErdXfPKZYuhwbgm2d4r2dyv9w413",
  "key28": "3xqR6JvgQFtakNyBLR5RBLR9s1LMkq1FZZ7hut3APFewiLftWRnQ8ydUKjekGwGYnuYpauvd2dZRBvZMEAzTQkYB",
  "key29": "4pJH8MnKiL1qsqLThtNzWzmJfQCJDzAeBUyRAVNG1NsE4h5Xmuome8zSHsdAtzthdNvekm7DfVCd8yAPfLGevV8o",
  "key30": "4xzGstU7RjnpopSj3t3fPZxy5wKELufDmoEjAZveG4S7sWTGe2KsrDmi2hFqVJghac7cMAwAgTK5wFfeU5beFysS",
  "key31": "4F7Kk4zqnqUxRWJHBRjHcvo855eTPvqfM5WB9Bm7GjxETC3Q1dtt6A5A9vFoJpWGYWhf2DZFUxzU6BDsE3VpHQgg",
  "key32": "5Ji6kVeKCE9HLLCibRQpuryDDhqEdMJX53UNyKQyKT1MHg8cLq5i1xJZGTozzvLFGVnrk1dUcYMHM96GP63tGSUD",
  "key33": "2ZioBU5oDeWWKSfoDqz2JntXQdB6PN2doeA2pnkybT4RiJbiSUzataYtkov8PiVDrxw5ehyWsyLbAB6qH5yZvB3e",
  "key34": "Kioi1vnYME1nsFyf9QYFDVZL2G7fUR2B9VdNdobZXwWtkbfLh3ngNuioFda8QGMDkWwMsanTCf25J8TXyVKyaQg",
  "key35": "25D5mEg8eodAkLGsPg4juokfpktLdNHrzPJ8ZLgU4ohnpUmvMBhAtbH5es9sK1qAKhGH7EzZKcFLYFvKiWwPXSBB",
  "key36": "2Pfes3tPfaaXGp7qTrCr2ozHrEDnEzBzcaXNWRn1f5rTVm6BxYkLs1duRZgscXGFJnbZ55WnBvSneU9kBMTQRJ2W",
  "key37": "VVg5QhCAaEuYYbHMJqgyh3phoR3kacMBHCGwdgTyvCP83zp2CC5yHCHzAJJURdZH1FW9kBXLeKbnCyjahdGg1hH",
  "key38": "KUTNvb3m7e6fJumP7vDXgBU1bHAsbsKWR2Gg7XdMgXcVtzNQHXZjh3NQRqTKBpaxyNXQhdJmUAgWPtDGdSuvqnF",
  "key39": "5cbodrKYocsbDmtC2GKct4NZmnCPmZQLcewcBnLakwYrsCWP32PD7JCvFpe5jeATMJHBiyqb3eJ3FPTsrdhSfCZy",
  "key40": "226DVTjeiEzgYcfqyfZmx5ZKkMawNxYGVvEFPR8Qe7xDuRsErGazAf7ZkRzHhYqGwQS65NxRkedCmrxwu3Z2mFry",
  "key41": "2A6D6RRpKXxxTVHYfRmxzPhG9aMuZG4sMSjHiPxyTC7CdcNwLY5w7xijD9doYoGC8fjYvA4PcLg2Qeoc3TG7at3f",
  "key42": "3XT68Ue63VRrBYFSC86PFdgMFfQUEcDJWSknt8EZMy4aRUFiJdTHQZTVH1KhkFE59ZjLprV8XohUArrMh2Nffw9o"
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
