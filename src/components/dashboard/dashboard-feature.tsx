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
    "zuQX3Pc23WAFuNGT5AuhogajYxP3YaFVHvE9XSfRLnXnZDx8ABZjFkpGAXjHrHN1Dfn2Yda6W5mMSSvotpJvwwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27NuvezYHKZi4bTyhdWt1EpQEtSP7pfaYnM3AhHkFvAm57R7EWiM6tviu6Cq8kJDPiDGvX9b3CR6bCHo1GDdiYM2",
  "key1": "5RGsVRETpBjmSC6bFJ34nFcLE2paJksUBVUAHGpzBc8bWzdJkckYPD4kYnZFWwWUYq9agjsmXAZBJGoq6cJpHtJ2",
  "key2": "4nVvNErGRJ4rcf2VQKXQhKepGVR7kyeKD1DvT2egpL4z2NzN7LUwzNuucfgZytNdvruxRJwZGh9wxhckQ1pDKJyR",
  "key3": "3ZbzBhLQQvrRvtcDWCWGtMB1FXB4bx5PNVGTFSXTNDXvP3vCLtt5dmU32LvNcjRLc3Mj8tZGCesakDmz9wyix8XM",
  "key4": "41J1z4gGrVy2aY2rkB2M1Fuqcb1RV4zg5QUBFj2gYX8T6eTPjPLM1zBX7vEE6fncGoQJBqk4xdGrC47hARYfuNHc",
  "key5": "5GsFQMdAqMn99HAMC4kfDJmrzBcHNDeHn2HVqWhxtfo1gGQXVSwP2bCVtsadFL1nV1LfS8DARkFjfUUZdtuVbwK5",
  "key6": "4yvQnf9egURqC94dfbaoTEij5xYAQQwncYpSyQ5ihfhkDmAvksEpqEXnvtrZaGigk1WtMfHFMtTiazG1dtY2HVXW",
  "key7": "RtoZojE9oMfm9XEbzNepWPczFVCCwD3w7JYej3bwZqYj7mRVvySX6aj6zE3mewrZGLPwyn4mopJ7ZAmPz35W3vn",
  "key8": "gCzHnJQpvXdAFJqn1xEdtJVfPzVonoHgeGQ4a6pCWy5wgiCdtPZWaymH9mLtUtPcdDEztULGfNcMy3euoNN8Z3q",
  "key9": "sfAn59S2HyEjtYZZNhL9Pw5Ve6BKYqzut1UAQ76PNhnq2ArQRhqqMvrrLy7nDicJBc8Qgfo6BnzULAsmNkrLyg2",
  "key10": "474KqA3Vozc5AYXMNnRbwiWim91wtVM5CcjEfvgKcKAYaw31EcjGYoWMqeAXhJQE74ekYPqv3upKczGCkjDWWa8R",
  "key11": "5mvYJMTk8QNkvi6gst5aHK4RXNByJEvAUYyoj7DvQUL65z1rVLahCGi6oeo87nk6YTHWGetjrRKcXtR3B1NQWK3U",
  "key12": "4GNvGzG8VpnGCEkucjYT4akrwRq6wkBSZ66WMcVVLw77TWRz9K5dCCZpse6Gg7ohBR7BMsxGvWHNNAipgpRkYgZ",
  "key13": "41Eq9KypoQDmTfxWnUH9CiSiCiFsRfJREybpCxxkBCbotedPePoK4wNphF71C8xYJndXUHAhURM6aysh3cEHR2ip",
  "key14": "2VWCFjxDgAMi3CbH5sc1VdrYnayJXSWo8FZEBWrkgRq9yCFjRCZetE9TdhuJFgtND7cZGSJxy8gLVsGxqVDcA8Lg",
  "key15": "rmSanRr3XgQdsujLqNt1RiFpdbmDFmgQdfmsCBcZpzkVKqUzMSrssAe8k1BRw9cH5mjSjmVxiX96vJ8tRtf1Z4s",
  "key16": "35tbZZYNSMXUSszPHK4zxWoFLD2a7wZiNjJJzgZWFZEiiHiKGi1FtUtPwPTcXmigKh5pYhvkZRK6RUJge9ZDiERd",
  "key17": "2NeLWWVnsSF1f1oa5vPyJ8zzSq8HANcqS9WGtuFqTgj5xeKh1K1D9D3TsBizCMz9dPuq5h8Eu4UvZRtFJ931SVf8",
  "key18": "5cNSx3CBL8pJ2djwcCN9UhUXhhaxJdxGwTEK2SrBnBaA9b3886FKbLyGKf5ZtEtXr4f3RJZNzhKuptwv4ChuEPRJ",
  "key19": "8k5zvYk6j9fmnA9NDDasRHJibpcmiv5j3WCyJAJov1WTjhxnVohGvuqSdMdbSUSTb7iGzA4mrcNaDsNpRJgi9bk",
  "key20": "5q9XjeTXuXrtrRwvuSAGLmYhcgpZ8TyhtERG8qHX2GMwSJfuHyoRnVKn7d5WHSY3WMnGQVQxhbzaoftFe2v5Pmvq",
  "key21": "3uYYtQtbBdDrSFMBMZPt8E9y4Jqp3fuzgCeGLXuPQbW4KSGQdt19g77V5nFNEDSqbEaHERVBcbovJ3GBxFwqE6Qx",
  "key22": "5d4npN3skYrQ4xnQUGgex18NMvGgq6vyzqkjoWZUyb9Krqw6LcSRJ5aiJqrWefNbSowMbzNCmK9QiQCCWj2fwGtT",
  "key23": "2w1RFbvsUubxU9Shvaio9HoxAisH7zvegqWPnnxu99z2SPbGdfNCStnMGufFHGN9dx3uznEAb2EVvo8b7dvy1Wup",
  "key24": "5S1UsVeXcwprxpK2Wz4PPjznxirQL7fmjaZnSBydBaYTcpu6kU5QptWabHZYwEBb6pw4PHfdqKPVHsCiZBnxADee",
  "key25": "2qAc8iFyzDHsjj5usG2ywgJeTX1La2fzwi4FXBkrquYKWkG6kcn3A4oCBapR9FChzR2yPibeFRWFQg77fMU4VHFF",
  "key26": "62ezyjgceaVYuJrrUJi9Km8ZNVwiDF4w6YoTpCcFMBtX2d5E8kEgSVwiU9HWK1rTskbve7vH7A68QT1E72TYTx8i",
  "key27": "zie2aDUxRfSK8F5sqaRjP7ifiZYSgAZCQCovmc1yToutTwPtqqkXuDq9khdzbhRkBHB56HAYqZm4387cBKVk8RJ",
  "key28": "3CdPfmf93m2FWWrd6NRoJRzBBUjVRndMZDCq5cLqbv8YGnh1KFQg4Yc6EnURp2p6NtmpkPcqXU6XwDiWPsiaVquh",
  "key29": "3WFigwbmMraZokLuwVpZCV4rRDqYQeturmCiS1MYHxay9pRPgkCoE3dekBpHvWZDrC8tpev5Y1BDRfPoBb46Zqkf",
  "key30": "3u6qkNcWBK48ogpVy6GuSYUZcTJNswR9h5doqyUnBCWjQP4QiKvY35NiSaEjGLnT4W7wt4uNuW7ya8AU83jKYWpD",
  "key31": "2ajCdMbS6K4Se7R1KzQhTfVGVVDk3Cz32hdXyRFY894dTCMiCjLiZohXgoNHvRD33ptgfFcW3imJTrkJw3WCdBhR",
  "key32": "5RZAj1j9A7gaDn2MpHAm2sdaaFgmTMQ1tiCSHuT5rEZ7XUJTUyaF8QeEZbqhb3UYb8t4oiGikRtgxkNBK6ihv2Mh",
  "key33": "63XzAQUvPeGfYoBU5D7y84qAg762o3nRceZ4efAiUejp8zmhsXH2jGsLmUb8KRGwj4ppmESKpe9R2aoqnD5Q6K7m",
  "key34": "49VWXfVcc6edMy4cvFo8eTUv4CDAZd9iybbuV8mvpAwqhwm52uneLDNjYSEcWb8yb2hMVmuvAioXKEcYGh8k1Ldx",
  "key35": "kjL9JDFh9UwU5ku36beahurefMmw2savQtnKkC47qtLnKeHy6bRX554WurLADjqTnN1sVYmHLDdS7F3NDbDZY9z",
  "key36": "36PNjR8ZaNauHber5nFCGEH8uyS1YhbyMM5xX6KjBdkMRYh5d1EPLK65Ni9kg5Jy5hQBJiFGMUthwZrA1TLeytEs",
  "key37": "qmtPwFhU2LzaVqVzBx1KShoStrdvVkCsRPmJDXGx7tvNDf36vSCm85svpEGrmWXCeSmEzL9g3tnokRKpRfQX78o",
  "key38": "4wdne9zPEVijpjwdQnoUUpws7z2gGVt8owgyx1JetrJhQvGXNrh8LfVSG4P7m2g9M887Ua8aP9Lexz7PzeKFVvgC",
  "key39": "55yvefi4YeToxjyVy59D9ogbnBQhaCJeGkByfoQHGuy2s4LyrMjd8d3c4ynQwp3kFP7DYNFFkr1sNbM7K7kzNmoz",
  "key40": "ATS2zGZuy2GVNuJBdxwMmWwiaxUXBH1V7gjtAGCn3Phu2nyDiUonYKKuoecYFQn2NZom9UqpBnXxz2WGGvYqDGn",
  "key41": "3RucvbKAAr1ro4ueYsRCpKwZZnYGoJmLuXuVzVWUNLqaLhvKYBe3rcUeM3mAKfBzDpRpSB8hfZcAdf3uBVwgGJbn",
  "key42": "2uL8amXBBck86xvWp5ag3G17ZvWaRhy8uetfjJfScepprLt2ocND4NoEyTjKbbFmSjwE636kUAdwkc98mzJ5kgA9",
  "key43": "366n1iKmz7BrCxyLypSUAALeuGENNxZfTaVH3JQ7okDYXQ5UhgW5CfooCdYwiMgkqfbnyeVPLk2mehfb8gBMdfFW",
  "key44": "3eiEtNY8K6HffFghqbRpDDAekmxfievBJGXsqWhnuLWksRDNVSYn1mBfxTZTcAPa7wDM8jn5r9dAxcGHzJ4UpBhY",
  "key45": "4iwZrDVY2RxpQy9Snu3EnWzUrzLcGfyisik454FjooZHgEqeKmooGt72TSK6szcYWQXgLBqpcsPpmhbsyfSsvytQ",
  "key46": "4NjXrvn8moJ1jhom1gdE8v12Ksdnj3w47jwVoxPP6mYQBktBQrisQLZhjShY4i9LFJvGVtPkpRrtfj4tTn7NLwYm",
  "key47": "5T2wAH2ZJGArpzqYoUpnW62CyoWsdXbP4Z9AhtPSdtvBiiZyrwzkCJEW3zmd1r7RAnCESAyurck2aFMLCnKETWsD",
  "key48": "5Kafum1aXmz5QA1e4Hz2vZHUWtQmjK2phAjAPqzZMDWBGpjYyi67L2MbsA5w4NhQ6N2aT6KyQWG4RpNxs34w1WoQ",
  "key49": "5xWrKwHmtmgp33QE8cAxM29WKQ61igEbjEsx4ruHXqyDA9bLVVGf5AEUTiSQGVe2Xg3oexdxEKMEmCM57VuCrFcL"
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
