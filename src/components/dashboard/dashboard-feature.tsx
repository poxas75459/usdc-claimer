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
    "26wxksZpdMJ1TFof5PUq1CfgbVYmKVnPEWddCiPfcstDR4JhN5HNNZ9gd3GfL4Mome7PH82bgqkNrg3tBFCxfRTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkHeTBEVK1PuWKH2D9UvAbre1jAeaNiKM1LjwkbLDaNuBBVsKaL7qsCguskzxF2Qw1m41KjUWcqQJyzAC6aAWtv",
  "key1": "D1zTCosB7kFpSvGANpvnn2Dwx6sGGd12aFg7Rb7WBkugPk9jzT42iArmtFTtwBgdaEdRPxbK9kJMTtssK6djbjn",
  "key2": "4M4vpDdSnEnJWMrSXdXV6aWG2JTP1Xb7T1BHzfA2kBrUHHRysYHBgP45ojvk27HwY8e4GAcmRYTv6cp1N9wvVkwj",
  "key3": "4HLeiqUQg4iFDd91u6jb6hS4ouiF3xgtULYQAkNZPAD2TgZWTvLK7gpC6SZWp1ANNUPvKg8vayC9xATKurwJfG75",
  "key4": "Vf7LocEozErYfZs1pc3qsPM3wV33mGZ4bZTjsF1uqp4hkm8Ldsjs9T1TsqAXypwus4zAVUB1WAikYy3xkkH3CBJ",
  "key5": "4m5eFiJYfnw13pngVCrXfUSqj3z38AgbUWLdXMkzg8ehqEBXGxb8iTcjeDUs8Nsk4UVameHjua2hGLqTSyfpDoF3",
  "key6": "5P5JaxjCjf44XpBa7gEAvCQgYVM16UMwUrvG3UiU5VRZmDe14kjGHNBx7MKeocZmyVHm2oFw1867NUYtwKonErUf",
  "key7": "2PPLGCeDuKEefFuBxFVKJBeKWyti97xapStBxvTg935H97L9WuWwQybgqxkgoeEXbR7KAKBxRMfLRhopPNHscLCh",
  "key8": "4U2XZHPyXNPj9Q4Sk92jYF1mpZ1zy6HfP422Q3DVN3rM3B63SsAbP1pwiT3o6gCz99EgrsNSWpZicwJF2kQzJ2Tb",
  "key9": "41hkE1toqHSDfGSRvPXRaGbqV83ZLg93Xohmb648bCHTUC9r1mE22YUBBPJgLuGberfSgxJyUR6Ys8fDQwoN7sDa",
  "key10": "4RkiWHkZUBeYhfK1umXuNun4i5r8yV5U3zpAQzzBKLj1e2MgioqJXWv8D2wHqSAMtJGM85c3pPw1UwkYiMaYXSHM",
  "key11": "2xY82GMEcdC9EP9q4sTcBERt86JefWZSstnoDF8VNbiCfJjb2AYZbC3dQGSFtzdvik5xzVGqeeycgyNprCgqu7bR",
  "key12": "3oq4sDxndFYCDvSn8Reyke6kQ5VZ3YLzDJytPzHGFCzXoQWk2C6jgJ752NPy89ervz9dAMPXqfENzpEfABanw5T6",
  "key13": "2jQyx4rHso1TGExmMUH9uXUSwwKhxKkU61f1FRUs5ur3a7DYMuQSdQEXfajBBzxZqp9jGkWbTdXeFPoMjEXw5rx2",
  "key14": "2kVzZBtDNmnVRDEjMJFRQGhkWHGZpKxccfURVrmdjvT4mCpVGNNRvk8UinNatJrV2gLEtMCpaFWYyLvK6HUzdsa8",
  "key15": "24edqWp9SzxsMgo45y2uF7MtUGfb461AYDPMYm5aXjaGFS1JDs8EFixCgjBnpXRr9B57LpADXJnQuisofEzEUjEN",
  "key16": "5n3WHEZKLxuEEbHfZ8L4ZZGzRXJ9cznKtueWXDF9zDbb97Y7ZTvmca1DpVBux8gX8kSnLKHGvs3svw3AaWyiRLGK",
  "key17": "mbQtqTtHgooTin39urJCbRR2H9RqhXaqTTNevSMrLbXUWfF2AqQDEnYTXu9KufwqER81HwkFCdWpGs4XhgjrEwF",
  "key18": "5w9xMNft5F9Ee1FEurgMpQ75WMi5u5EDNBVAm5r1eoyvwcXcL44f3KdN2qVgPhiikXiennnfodaoUJkk5DozsNW9",
  "key19": "2YCAedo3pbT1HU1AxyumQNw9WCStUiVBqhTxEc4sQkSsBP942uL74DEtrLHW19LH5bFphUkyzbmp7LJ6ZPrsUdHv",
  "key20": "5qsbvWAAXYrrQ4CfaMnhN2XcmMH6wtejmheUi5rr48RGiNxr7nBvojY53vLDWT2zybz58L2CuyunLpiMijiaheXa",
  "key21": "4CUUSDbUyBFArqRfYbUc2ncZsXtvntbqQL7zh4ZXVs3ajUWseAE3JHJnZF2pptgQB9roDbRxbTPyTqX2SYMMKeWs",
  "key22": "4TSeyomPZUby2jYCAHZ1BjPpNQn5uTqMcarM1qMcDskJqHmUHPghWTGX6kbCC93TgGadjhACSSRsg2tNHiPEGBHD",
  "key23": "2Nk9aSh9QbFFHwQCHzThpQrEU8g3GVbLBa5WQSaNxHDupVtKM1oHcUEcmoSfTaDksB6DnLjzXmaDhwTVPGcxcrCE",
  "key24": "4essnW9Mx24Xsw1MTkKD5idSuHbjWN1AQa32B27JrZrTCp3NRt53GaLyRz7sxPn8XkXeJkgYpBAZ4hk4YYdakwnR",
  "key25": "x2zHmKjkUpsU3KD5SqqAK6btygtEa19E2hrX7hpPf9YamSMHg7SnjkWK1WUQs63ncDSfVsACjuhtvynVstsi5xB",
  "key26": "NU7D6YdzATSuXAEULjmhgr91rK3QghNuoTZXrNtrKLtirYGEmwQM9eH8f7nLYz9BnvtfoqYhKufXrBdVrWcpq4v",
  "key27": "2m57eEaNX36mLxrPzknyturA9kG6ocS7cTpTksqW74eRrEqaTssrSuUVvD6VEFud5r5N8cEnTVYyZqoos9jVfpEm",
  "key28": "5h9c75TkWEiiiVosBReBwZ63HfU8jndyJHthsdZLTQMJp9Z27Yz998kdJUYQiLqP3q35zNGHtb4wdSNpwmUhF7XW",
  "key29": "tpg45faaEYyKKCJKgqGCkGfFPdMQ81y1xE6RbiPuERNk5oKKCuyqGDenTqPqpUEQUxyod8kUkwPg53zUKGjTAkX",
  "key30": "58UxXvLdKVf8HW8J5BLYoLk27ghPxVDqbeFft96zM4iZvaCRJ6r49KirLuLkdWeqGb1yW3AD1yaiEKGsFtyp7dbj",
  "key31": "4VGijhYsjGEEecz6zPGmccxEoJvm7AthkdKLywBvMWwi9rNad36FFT68DJM3ne85iqotPdpo7xezJdT5CRf4vFYA",
  "key32": "3kbcWuEri5xjzWbEWmNTdEFaG7w3PemdQ9UUNWdHtMQAoP9Z5JdZJPY6UZ4hQXCkXxMBXRRuFtg4UKBrL1turQp8",
  "key33": "3RE9gPDdgKfznhvfwQCTBEexGxmSdx2dxyL56wkVtF3W7YgSBYSnP27kMZ1EtaHYYMJauAsZEZRS4EmZre5k72rs",
  "key34": "38f4EYia6tvaY2SFg6vAS5CCeoG5Lm5XRpfcc9FzexPoWbga91DiDSUe9nG2T4qusNLgem5gVEiAymLSTrbqTZD4",
  "key35": "3oXMBQLxpuzC6myuyy8PDG6dWwgjmfnvWQVDiWJ52bSpwdrTeYPCnnevSqKrFwpQqfWH2GAfV6FRGSXjCTkocbb6",
  "key36": "b2EmgWXJrAytS7vyGjU7YgiHP1Fw6bhCEE94zmNcxRNPppG4pxD7HdmYfzeirsFX6NyGqnmY2R2Sc2F8k6GkihP",
  "key37": "4QcmeM78Rx7hSZZxiiQXDrpgGqzQ3uyUuFYJTswPkMv1bF3W7ex3Fpa8XhyUPsHGLFYeC9w4rndr4LovrimwECp9",
  "key38": "TCqngyFkhD36aPpeS5a8Ddz9nqcVVEVHmGXrnyEQq4KGiJCFXKo9C96ixoR8onBJye5VtzUcKGbTt4BabqnxjHy",
  "key39": "4hTCxSygDK24kWFDSQCcsYJq2zU8EEUCTXBbBUsnAznhfzip7ZjM38FJMWYocxGm1zDXQWYoB3vFjp3RcKhinppp",
  "key40": "4ujTi3736j98vW44ecouZaqJ1ieFXM2ezgahLvsoAEfvJfYV3DHbp1Ss7zgv4jcRWCjoeUcVgZPcMEDc4L2cYvfx",
  "key41": "5XpFQQfSWNWvz2T84T8r3eHwhgkb3mDHSzfPSwAXGWvGz8unrEqYiGPnCzm296xEWXeK1aKb5a6ysxiMes8HbFau",
  "key42": "2Fyv3aPRFxpiT6zg6ztd5SCfRRPJqXUgh5rS31Guu3Brvvv61id7d4tEakt2yqeET3tHStpFP3eLNBXBDPoY5195",
  "key43": "3o1sMg5mBViSGKLbuYGXRDzN8caJe3ry7XQzMoXSFbd8zpTFXNSf4yjfaS38baCcZ3kkyZWY7fZqS7nKFJJrjXsu"
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
