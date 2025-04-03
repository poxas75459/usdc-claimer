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
    "4ybevN5NeT2D6b4xNTMinQVJVhcBPmQMwcgvM1pRF5E1hmntNyhmiseeyNfq7XFoTAZQNg6LKQqcePyuJTK5MavL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQ6kEBbumJ5Gdew64kPDcRwZKuWKAqE6i5MpXckAYupTE7oEAQ68UngxB8bYMLt6qX98J2QoNNMYSfK3QFoX8v7",
  "key1": "4jhDNGHD5bzwhkWDbTK311Q8YSbtQ2ks9qXs1DxYzGGdFpYJdYnCDHdSqDH7gKHM8TGbAd4igCYodhmxoRsbXzfb",
  "key2": "rePNZJxq4e4Q1r1sfvDrvvu2XUHucSAduSDCFF1Y7PvEatmTizZQaPrVU7krD9mPZZVQ8qytFSrSghHU3EDHtv7",
  "key3": "LbNHKNsNQsfmNv2od5LMKnoFWq9bne91yQv99cLy2R9pnKo5kHoEhxeKefNSktmRTSxQ4BpH8TQxzRGz3iUfsae",
  "key4": "34gW1nKx9YceXmSuAWu38dU8cpnjwQgQtRXENEtTNmhPGBC5DWPaKmMpyaPtRVfCkcMANoy2tzJPUB8KG1AURWMX",
  "key5": "5WC7NqYVWdvfMmX6vn3nacMbg5i9NEDYTSHn3AdNaAAFgWQgNSYDpniq3SiSQiaZVhHMZtNaxC89FSFm9GDZn5rz",
  "key6": "4LfbQBC4Akg7Qs5FrArXybtatcko7Ltkx3ctzV7Tbm5GpkDz4NmFnQ1DXB4VDaoytqSYNVvNJHKH8nXgtA5JXfA",
  "key7": "5XoDdEnTLB1ErQCtfEZjrwVTt2g73G22Z9uhTeGvXm2dVF8UL7oEwTzw1mTodJsrGpYNnC7NXG3ck7FtcDzoKCTM",
  "key8": "c3TqHZWgJrADAjyZYKp93DtqK4xKwqAnM4hA6hRh9ZT3ZGPTW17FdBMWaoF7RjpnUiZp6ozAChSNPZADWJMn1mr",
  "key9": "YbzrykhMhBEJ1XQpXdTmvRaZvaVcfxGtJHdm4twzjgAdcNLbYw1L9Z85sT3BzJypurxcZjHEzLsgsW1PiFewMSL",
  "key10": "2LZoq2sVPYePDXSBwgMFviVnn6XV9Nyk9grhd8cCauQvMQTeSTLBWSni3g9Dsv7WKJZT1GPbiCvj2LEZJqb6dngr",
  "key11": "2Fo1bktXjSdHF6oECsNNW2xs8Pif4T8GG8PeRPxiiakTsnQiW49iAt1oZqVGBHFwwSFzyZ1KbWnJ6rGwKwXazrd8",
  "key12": "5HGjcpE7rjgGHuJRBBF4rjXJ9HwBSGqYCiuMm6xKaL8cdcJ3GsqxcWNcUfB1ju7qpwSLFoHruZB2FMNHWFGC2Qdc",
  "key13": "9sjLmVQLZeySN14ZUfnwyq82GaDsF1qfpa5EpwofPnqLT1zabwtVfJuxHSVNKnkF3JTaGtd8JNte3vutpMHc3oH",
  "key14": "ZFnyfUEGGnFmg4czfKQQm18G3m4Mv12rAgExsJWqRxDu9yd8B59TggZzv2h6p9676XS2aPzBbEgG4bDRPVpo61H",
  "key15": "4Qh7ZMoGaAXaR3GKH3DtiiRggt5AxFHvGBqjiugyRHtejH9eGHgePSz6hLQaqxyGzq3MgRHEzX7u2JWWPVsqxo32",
  "key16": "3JyET3tZmWrev5Nh6V1JWE22jPbWeync6pshjjiTpUKAgMBWa3dqvbptwHPkuVxkgZRnvV7Z6ckeceSGPo4eFkus",
  "key17": "3d21Ae9cSZF9jK9xAnfeRWVjQLdKr9ptbqTjuQjy932jSvGaPRtLvA1xvtr1sBjqwdSKCRQZ3vjJPpBwRGzSMBCa",
  "key18": "4A5Rx6aK3BFkKnYMgJs7WbLvWySun8iE9YqgY1ufDJ59GWMHeXZJxchLE6iAzLvZRUK8xzF6y4qPwyMXznPPY2bb",
  "key19": "2bwkLLuZAAj3cXb2G2KrXGNc2kps8JTJorhMVzYHBTx2GDPKN3Z7DVXtZPxEK28RPvoBcjiThjU4dzgpS4ubNACh",
  "key20": "3GNtAuxhb4DozVGPHJ17fPALBF596xx931LBpJocx6y3BmYxaqH22rCF8KYQzGqrnSHvThPC3G3EnezfknN3LFAc",
  "key21": "5bs5vf3V93spinNqQnkCvQUabMA4394refREHGpBvNk9tvW14FRe9F6EUNbwf6YAVvH6tFhdgsV3HD85JjLww8iH",
  "key22": "4TfUpPb6XagvhRojhrMWTRwWvBhfHRApW6KbFqM7Quy6sjxdG3caJ9devwRyen6jTWD1F7wD24NXRU3vjVVmHm4E",
  "key23": "4rT1QqZfckUxy4LzXScrmzccS537o8zutNTUtP5GdJRM32Bt1fDnDABUBwuVNDf9zsCV49qUMJtV1MTW2DFRuA5c",
  "key24": "3Wgc34avzxvvxEwHZNEbzJMTmaurBYUDZ9BJvxnQTBrUHo5KZR8RnczQpy9SuXk4UdGjwUFMrJzY73E1oscqAHLs",
  "key25": "5K8B9frEw31iTN8HT3HaRjhGcCsJqHpNqjtstPFF1ozmfwqAWEN8ZvcpcDmTRpV14fzWe2TvYvRHW8rEfgQT971A",
  "key26": "5aVijA8CsGjizf3GKAi7mo5cjmy1aNPMQ44RXpwvPyFCAmz1PCSkWw9aQ5ePEf4sN7pHGRx1VbCcisdKZBhu2r8h",
  "key27": "2vPeC9Qa8zaUVmHkz1tzLyfg5uhSEuMDsxM9Cw2A9naTGPLvFwXjjbwLEukEJskCHtuTT696AoP1BXvsAr6hUuQA",
  "key28": "5vz4NCpbBMNnb1Xfqceq7bzy2qL6VgEeiTpBvtQfwBtmWjoVUhLMAEXJMvKa1HtAs6pGghpJUj1qHyZ29wpsacNb",
  "key29": "5zogqj3a59Yf97Z6JyTz3PHMQHh4WVn1krj3RBBSXpNdX5BACj4J5CmU9m4yJMSXd8FSLDHoHc52gNrViZJNyTjs",
  "key30": "3JorQxa6giXJuMA53eHjGWakEmqpXQmVzm1jVHiL2tAkBkBVz6e3PJn2EuwPGC7QqWqHPx6How1Ax9zFNsQiuHGz",
  "key31": "4YFUr5MtXGp7tgKoADCm26mUe4UNN1Xc668snYy15HyiyTYe3B82jN6CKdjNdCunWjzuWQn4uc1MXG7LZBGeKC4N",
  "key32": "4MpwbdrBMDhvrnf2j1TcN3MJivXeYBcqwtyDLwva2NyYU4HACz3rM6C8o7ivCeNz7Sfv8rFYpzueKpTJqMB3HPqD",
  "key33": "2Y22zP81ud4c4vhgrvKRYuekvPM3SM53hcRFwgBjZgVbEYPoJYVcAuytd1KdAUBQj94AEsBqnb9XZVA5xfRS1D6c",
  "key34": "2rvi7NQ6oiEasgpPL1e5avNeuNqMhwYsbNxzW2yj2E9QTbL8GWrqddpaXn4y2BR1zjTUKeSeiqqTXuKs9iPrLyDW",
  "key35": "5BTenimRtC3keqRiFPRakkqD2bbU4KZWQwGQZHrTovvrDLWWD3B7WZoG7sREVFpBWVRqdmsKbRtCbGS1eQwHUSUs",
  "key36": "2hL5scCQDnr7pZA8pn8NeR7QHv9oK46Si7FLNgeTpVv71e6BhY6XJkbPcNrgiZd22qxru6pvBpvCUYQNGsQXZFBD",
  "key37": "2THiVNLMxC32WPJx7QNeKzGkys9cVi5hcKrH9yWWa3WhQMQmu7AJNv2GzrFSypWD3cAyw19DU2ftPgLH75Sn8w8W",
  "key38": "BMMD5BUxmCEeW2ifCaZ6LfkcYzCvLCw88wG1L9MUYazqooRDb9W8yqEBk4vYdmzr7qdqk9QeZxUVJfL7hZf4S2d",
  "key39": "a78ophtd6m3akWTDTAWQpoCiNpw1gTHTT6Ja1s2q2z6XXhZyJ2eJ23MokbhxSxtww7h95z4t1gWXn2fq2jydBk5",
  "key40": "3Fg7pNdLeJixDw8iLwbxdSaVuN581FJjShJRAWzA3DUu3Kc2n63AKG8ESuBvcV64F2BoU4ZoDfx2i9QCy9riBYRH",
  "key41": "3qdmWZo7S1kj66BUA23BA1t3zznsySkCKi9BqEbJ8MV7WFcwAiTrTaE3RvzCJyBLKqDSucsRSvAD8JSx8qJGNene",
  "key42": "4iyCVadSGnvQuaqn4yPszvgMvsJt3vWE4fRvkwcdH37gPE9NgBRBxAzm4eKd1nUe2mMypX3MZNedoX5dq179j5HB",
  "key43": "396rXc81EyJBNRq2mSXjJwk3A2p5JzCWicBAGe8hYyZyENiR5aJrXNuPMaymJ5ds2TE5kFBsauWRfCcHNtUJGWVT",
  "key44": "4soNZCKFzdC2HwqJ51EGJ3zsV9XT6M7HocVFrxZ8fExvCZ154w7gKESKdc5Qr9C3q3h9mPTTs3dvLVPo4VFFN5d8",
  "key45": "2TPB2xMK6ifzbeeBMa1fE4ixt1piY1MoA9XTpwKPUFEw93X4YqZqfEGQirEB55jqKifRytjCpxXtHCEQ9LacsTCk",
  "key46": "3VQZJjnN72v2p4hzTU2HHmsMJhS4RXzdPRFUQctbKEDo6hPDMqa2oJNLZxuYJeN4gQm33mfeAR4sprJnLqVB3jPj",
  "key47": "53uJXg1qJQjPV8p3Av379WCpBW2hqCaDfagUccuHB383CzSDJ5Btsj9BELK7vGEEbTNYkq9uhXrddGgCc5CYsS4H",
  "key48": "4RM5ciSafLWBnaMePMtDYQPLyXH7TX8Duk7xyx4SquHxBNRRGe4NwKbsMMMJrr7AqGP7knLGBdHYBf4YM1WuVfUv",
  "key49": "2GQpQoBMDRW66d6TCtH1o7xxMBqcHFgCBBuHFRn7gs9TSwZTGygJzb25TPdA2wD5AzTrhVgydWmiBxroLPayHw3a"
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
