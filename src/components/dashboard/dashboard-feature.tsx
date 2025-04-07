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
    "5BgKy6CsLCxYAu2mpFzfFuXhX3CftXnqJbsM7G8DhtSQbvUcdvivp4Fbc6ZgiiBWfMhV6VRDwGRkBxxxa6hfJWzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48pqeud93jGKTfZUFt5F2YugTCpvbrPv2FoXmoWK95DTpSdcrNAyNo23LJkbZxK3TV7kXkjAvrj5KXmBmWKpXUGm",
  "key1": "587RFUtoF2MYd34hHphTqjY6a4uGRQLyXydjJyguLY2kDYggWGiz5Naz7eeCEVmVzpk6qUudAqd2PzYLJi8tHmvc",
  "key2": "2Me7sXKcWndWwDTCBTxEnPVeJAPnQyxohX4Pk6hoN6kUJ9gSFYxzVcrHVxKMBUzoU4mg16W7LUJJLNKsqaT9FY9M",
  "key3": "555iXpzxbSr6DF3mnSTd7rTdYRWNuc1MCGs56N2svR5y5ksTj8PamgocheYSLfoY8BDWdtCHkBaxxxedLAvj12v3",
  "key4": "yjinrtfWQoW6oyECHkaRwzkypXz2qWmQ33YsBto64Gu2DLysqNPNeJgNCtGL8YWhBustg4HB8BHmdKDRVYZu3yw",
  "key5": "5RXfLMpmuLi1D9TEF5cGQiESWo5BLx5z8kYaaWM43G9mhQqeE3A7KGXJmyDJmyfXy7jhTLnfxac99AhgFbV8UVob",
  "key6": "jUDq11hiVuBz9BFR5pzYN5tSFu2abjzoTXMKqLampUESgdPqFwN6Pr4ptkhxgLHGM51dyTSYaEYeHboadECkRun",
  "key7": "2szjkmZrkw7GgDB9y4WQPtx5ByaDes2jrPutPZ34h4HdsJ8Vzxc1Sw9pMiGPkq4wXLT1a2RdmVDxpbbJm77bV1fp",
  "key8": "58QLcKNeRxbhzLsuxRcehn7rgYZtAtkGCVtMow1XH38mkvqABhCFR4EnUuXxR7ZowLJ9Wq9DjaPbYB65dQZHbeQ8",
  "key9": "38QpSNRx7GnkyBbxyRagvjnwgtUXCsm9PfrdS9sQxv2ovfAVDVG4GAuyFTCrNTjC7JXMRMCXzgFQnDc2ei3BCFMD",
  "key10": "Mv8sCyxx4kZC8aMbkWbFLZkevjxkPZeSvpUxtsT48AeeGj1KWSQLwbFVCVHBQq3mXFQ8Q1QjynTUnza1PTVAavR",
  "key11": "3VbuZtqESfxjqUfS34obpkmy8j65GYvyEJsjCR7eweXVKg24Dt2DTRFaVtkorP7Gy5cfBH8Daqi43xxEmiz36xGg",
  "key12": "MxFpqtZneAjQyY81RFyEKr52rUJewHbvU3JwKtP2cyHfBg3APV2wsXqn8QPWFypAe9NJ8v2hkHBeiP2gxVvfweS",
  "key13": "5rfw6G8WRdizhzNpR5yy2i7myhEKf7mWVCTcrHrKtGDGWhK2EGsM7wfHUejSxCn7wFvHeiDZNhtU8h7UJ4yyRga7",
  "key14": "Yyzw8Q7MwZqyKVXHKDZNXujjqfgzD4f39cYMqeJZmLPTaEKZXmjSzKjiD3nSaeg66vs1vDn6bZLQzWmcgYWKCTB",
  "key15": "5aNpU5EzbJSXQKPthHaKwXEyWu8XzvjXvtt1pDTLRXySQGXP6cj5fzesPNQqXRyyvSMNgo16wLVsPxeZygi1mZ5T",
  "key16": "2Er11Mi5mXjXiLQ123FGhJrJSGKhUSMKXaX3qe4ggoQk5HTB9JWDwqHhx5NWFDarJBxNoMjN7B3rwZECKTAkwwjk",
  "key17": "3XdM114ksEndUhBWx4Lfc5dRkd2jhNQmXQe7yvZcEaa5Ev8tXgsifpJzdd3a1JCVs469t2TAFYpUGpe7WJCb5QRV",
  "key18": "4Ft7RaF3u9d6zBwV9jzqq2Zt1N6ff3ankAzeCawY4khBqw1jrNVFxBJj7UToKCQTaESzzbzTd3tpxVKwz7jhZVdP",
  "key19": "5ra9xoXsVXZxEo2kXzy4uVES1uMDkN46cr1TzAnfTC3wpczmyazfXwvjqAfNggGd7GKbmxdBdjGZ1yYrNtYXPUsf",
  "key20": "4qswL9FVGZuYfQAvyDTf5NHSKu1i1XwnEzPwtkSDbAt2d5C87cYUuTHch9m4ToeTMtMkBTXsdbkpZGT6tKKP8HhJ",
  "key21": "61gNbEsT1HGXWMefdMgMEbPGqLMPc4jhZz1gjqXKYntccxuwybnDG1i7DXJ4kfUYSB7N5RBPEwYs4XH3HLseYMSB",
  "key22": "5LeSu8zMoEmv5bLU9Qc3JYYRdx9i7f4Wu7Ei2tPUFJbxFDeWuZ6wV8WNTZbLTfb3Jp6tgWxD5VBUBwsXgpFwBRYX",
  "key23": "3LVUT7Wzh5AHWng5VkuDjYFyYZXv9UeH1TJnr9ucgmJXemiY75CKjEeyBhvsAv8Co1iEEes7vK6pxHjJ4Urq6amg",
  "key24": "2cbyQ4zyzqxuJUAK3tuwTmFvK4j7N3fjrCuR1tzAXEfAdiUrXDFiiZHKF9vhisETvkPxKzHo88Yg4Rxbk7ttbom1",
  "key25": "38VJMHYEfu83YAJNFRx3dLgCb4qs9wQQrjRWZUQ6eZ9GD5KwBNLZPHXmqCV5kNeXBvnQbGoYGkZ8tcSQF7xH4Vf7",
  "key26": "XA1BQWx8eMgfDqxz2tujkB2tTNJefzrgggkNmXw9frUMYfnFRto3Eg22WfuWejhENrKZab8VmXjzXwpVJ1wQU6i",
  "key27": "33tqkHaEKAkiokTwfUMhQDb5efAPDfyRAUwpA788G8vxsuvdowtmr1v8FKVN9Xt6wm3GRh9p5tNKx2YfBA7zJECG",
  "key28": "4K2bQQhNyuX527VCA9hBwqVhD2EzEun8Hh4kDHwm21nsKex8aH7y4W9PvEknHbuKXwdK2apBkTnC77SVfSHRak7T",
  "key29": "5cDHHNRJVS7RtVceRsHexxWJtxE3cgtckjMyaLMwBYwj6NB3w4PhsWAXPgNSa2mnDLUQWzVTfsHEnFXM2gbezG7o",
  "key30": "xn1XxqQHC1hCqtXgi7nRz93FWuMr4ywRsKhcxV2AcyCDZ83YUYGhGVQU2PsWp3A2YKD1nwUkVgMt6ZU2T5ryq22",
  "key31": "25cfoGoixgxmPwf4Y4MEbJxW5UsTMHYGYd1ceoysw1P5igXNmX7pBQLForGrobaA3vv5DouMw8w7qe18gwtvxJKQ",
  "key32": "3fPFwatExmHLssfQsvdhRQzL8G1o1hHpHndd75Egb6aLsE5E3hrfzyiKuFHCMnMR1vfxnbqGghJdcvtbNCB8zDjy",
  "key33": "2DnzEurFgVHjvSgS7DtfazDPns6tK7cyQAk8YpKcA3Zrf3XKCh9aKaMGTFhHJVT9L1i3FJmWRcvtyaaAwjrAX5Kq",
  "key34": "TRrR3hK6FVm2HPLqq47FxuU6gSYVZZjaGYf9ZQP2Mk4kAREqvTiFbfDumPQ73QSk2fh376PVnwhPxGa9Gs4HvbG",
  "key35": "taYSQb3Fo3jgsKUwsVrLAHCTjTemToC89NFfcigB3vZDxawDfJcTsS6Hgu8upscqN3GuQPKsG8fnCAxx4H66pVg",
  "key36": "ScpCz26nPgHJ1CDerWoL8SjR61sT98Ta5dc7LVAgJaUqCQFpmSWhk56dLqftdVHYSWbbjArU1PrUNZ4VG6PCgEN",
  "key37": "2nStzAUubHwLfsmgH33YP3UTHYCrNZcYM9SiLi5AKFavatmwJ6UWJ4c42ruovrjFxseTRcAUgpmoYVyKNmmMku95",
  "key38": "RezXM5nwwXPVBkVtk14gzxoC7Auej4Udcp7rdgzWizXBY2T6KiKsmYeknZdKj1A9B1xWx2vjtEi4Grw4pQ2nY3c",
  "key39": "3VybjdbLJ1F1P5Pi3TXBx5RZ6yzQQcTzURnxz59zvVd6rs9bRBQk9EdzpjonJGqzg3p86kmhVsb254HseUPBnhm3",
  "key40": "5JnXE8EQLLiLzTyV5CBUAKPbtyBbsUna3eooXdEEJh7pdM3nt9KAci8FjHMNihBvuvwLekbn3UtivMNwBh3b7r99",
  "key41": "4sKzAmSkq6Asod2hFaQTCJvjNhSfwoAuZd4oCyCBeP4tEcoME1gnASPcqZsVgu6bYUB9Vg7ZXfrcSNdyZG9JCB94",
  "key42": "65N6UFbK7sq6Tk2knFUMeufpFnMEkQvY4ANcaPsovUFrjiXxQXfYRcPNSuRTw1thpW7w9LnhpfgcU3iAy4CtnUUq",
  "key43": "33HefRTn2wZDzBVsghDJ57kGsetNfVAGUf1M3WbLxP9u2QmCg9ujuXtd846gd5pL3RN4oqbYWxgVhHk4JytmjSVd",
  "key44": "4jveTjsPrsBkKFqHpzXvtMxMrbgtmX299cN51kaoHTEGEPVe2YMXLkeCybBSnq9VwTf5Sm69NCWx14mKJSUqLKjF"
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
