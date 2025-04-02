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
    "4FP3Wr7N7i6qaveCADRcUNV8A4FZ3TL29zGfTEGCyfTFaBxZBid1jGuNaxGP6aK7ge2Ei3p8WH9MuGr3pcegMrDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TG3ef95EBtKU3MJJGfSx6XJyUs4kBqjrjyqCWPbgaSaLuKLDyKNbMnmCMQD6NZPM6itnfSrpEj4cwRejB3MLKqk",
  "key1": "65DZuge6m6qP55ysiiu8MCe6zkwk4AhBtPX5zbN1B3zLBYhrBUW6jeZPRJLVjFFDN8Jc6jPGdDi8Z9H1CcAC1jj8",
  "key2": "3N2qR8FfWMoHzQQpyqm1fcjzSFfpL1FfsLLHtq5piuTkJrXDEuHeVYSH8ZakhsTNZrvejhyJAAXYKuZ4DePAXFfK",
  "key3": "4b4BeK65RfaqLKchuw1mauozp5UwbpP8ZY6BT7Jouvmg8zgSwpQT66pttw9Wn4r6moQkP5eSUTH6BkxYLWHmE755",
  "key4": "2jA7X9nZARvXGrG2rr2AnMvar3GhdJ6Zp68xftzoHwyikySzCfo1dHivSyoxENzaLisVMr8aVyq7hG2m57cmFEPJ",
  "key5": "7711BV8ahnpfVEuKzon16LTTMovxEkxEdPbYWkK4uT2ErWAYqEXXKHBPrn5FVi7i4SN6MfGjUchuwthMxmhn7mi",
  "key6": "3MMcmmquzdvTATA7wQLceBAzCyrx8qauLEbzJ2LtzaT17cgWseHbRZsfhbxNfZJUJ2joTYcnZrJaQK9s9Xfd4CDX",
  "key7": "3zhj3YNisCGPPNtin9p3gBUKzjPi3UgZUrGKwgrDUYEfVH7zi4uWk1TdsFiQMQNiZJaGFUuDQbKEgJ9gYFpTfagZ",
  "key8": "5s421nbg4rKsjc5kwyFPnXRbFQmcbYLBCb5PsqdBK4BiQCVqUXC3DUFnmdLZvY9dFiezr2A8Px5rpPMwULmBbBpr",
  "key9": "q2qTVXp2WseCgTbHBrDbwG9RraPExE1ppmwW5UmUGctzcmqKQZV8XSGYmw2cAfNfKJHGryG6kDiFQGoz654izYc",
  "key10": "3d1PiRDTNCbNjCWRqhDUEjd5CJkQHdtsyqX8j8c3BcWfNuFGQDKfKeuGqt4ZesN7Pq6F8DiQpVpMAArYwyuHqcLn",
  "key11": "51a7tisLTS9EmaxcDfrFqXQtaDmPnKcuiReSUv8jNChD6RbL1tjDgFoCYJD7dnsPudXi95kTTMwp3emnde5S4bqd",
  "key12": "3DnXUZ53Se7Fs2fnbqxbQjT2qoVZhFGGcoc2YjbQHUGbP8PQfq3SWnMaDRc1Gx6Q1NzoM1n7DNCAYEGdMw5FGrYJ",
  "key13": "41DospJvo2MBq7TAqoATe78CtQSUhnerA5sXyzJrqANeReGy3xH2hu6Z2D44GtvAeu6pGkoYwK7wrqE2c8rmAQjc",
  "key14": "2FV2C2UpbGDCMGp66DfP2u4iDXpNEZFzMBp1ZMgHaQfyMhVNvWWmiKwAPxs7Q4vqoCWnu4G3h6dYsm2GHtvrDRei",
  "key15": "5q1tsdWbyFrdHA2xFPpFFanisxASte2T7zsnia6oh4rKJUbLiQAP4pbi5GtGbuzyroJD7ougQg52sJHCYKbjubB2",
  "key16": "3HqbwqVeepxK17o3FwnyskofFtiuNHqsWKXYnwDDNhFh4H5kpySPNknocv8aF8hKCdCDm9Rp93KnyZJnGFvpXCGE",
  "key17": "o1KBSX9YkwtpWVoeF7nGMHpzte4WUhY9P186LYHkyuFFP9PwjBVic4g4FDb5NGCpoY3MmzPZjmpWZJwypmnQJUG",
  "key18": "5c4QGr6YCQwqSS7HThu2qZuhmnwiAizM3QaFEzcXh2k7jVg2NujtUqFScUM38sJNhXcnKGzzGWLape9m6vhAibKK",
  "key19": "3VKMARP47qGFVPo5p16XMPuXH34R8uXxfXcND22p6aXc7Qjw2Ln5BJYPNEPRL4LaA2QqaGf68TqEax2dCPR4R2tZ",
  "key20": "63VodFhsdFPTR9xNJ1WZDrer41VoK7X74wvWADt7u7J5izAokUx8cgJU8kZ9o2AaGidama9Ed18hQ4DedpqKQxhV",
  "key21": "31MRKpmGt3NhNZeKihvSqnBZoL8K8eSiTbxuYCAJQEGSoAaTVJwLjjXQAKTbFQpypAXdeazJfC2fZyKL8jogJyJt",
  "key22": "43vJ4qhK8tMUhCJNGmYo8AiC7kVXo71inhFUGYSn3XmsLJ5oy44zVnPkjGdkVMUTpgM87kB4frDUjGiFfFfPttkf",
  "key23": "27kMHq14hxkpjL7wytZhiAJbZjvNrPMhJpuss4cV7TnsZBjmo2Wc4Te5PCLWVJbSh3vERaMbS2Ptubyq19rSwSJ4",
  "key24": "3fu4cHGT1pNt1sua3xCmEr67K2tRUfN5MZznmudEuKTJvkjAJhz53uWHgA5RvrBXLMeGmxmXP96NYzmAL1a2GHnX",
  "key25": "122UGhXJYDr5VBJXkUhDHpK8SKqCtmtRhxpvuQu5PDLwvS8fg9H4KJbdw6pCgBWUEMxxNJBVUPiscUYhB1mo5cif",
  "key26": "G3fa7joeozs7f7oHoY6kftUsqwWox7dzxTvN1MkGgQ629AemtH7xPQML41aFgpGj1mAygBjdvm2stc2UFgb31Di",
  "key27": "4Z1gLrRVeKw6CEwLUMFYz9CEH3jYm5xQZSsSvqAbyaJiz81Ews59D1ns8hboXsnafqnRtuo1qgCehsPHjPsJT5nJ",
  "key28": "5Pih8Ae3iwDWw6GcEECZkVTipj4EzzrsvifaCJ68dE3ogmowSdRyZGt2HSKwzBdBnGjJTjjkxxMZ6xC97ZjLDk68",
  "key29": "34sotTbzsQJVS2QoDwWsmM9656WaedsBfUcLmSAYvSJG4f1vba8p4KnyRQ6193HcH2FT7Ufg1UDabZUsfcXRyEcG",
  "key30": "2N81wyELtkwYHtJCpoTNGwxPSReqUHc1JmLoxbKJXkLG25nmVW9dH7LoK4YRTKSMr4CpWt3fZcn7ZXRir2M91oMm",
  "key31": "3RzGPhBm1WGLo8NQJgaqzAQ5ZyhTUsAEgivBXjjxh921QXQZcbctqMmrwZHXb4YfVnwBtAcYFMZEmzwdcaZhakBv",
  "key32": "5oym9ocGfc8R8QSiA6g7U8Nii5cJ1wmoqkkUG7kkjY4NqVdeLZf9TFmu5trrYQQcnpjPYsBc5rKn98VvAPrs8Thk",
  "key33": "2npvuCr9vJr74NMCMuPVeE78ZvgjibX9iG1QrBC7PxkE61MNPAyVSBptkPYj9FXCfNpDMQZKTcZbjNZep7ZRcRXM",
  "key34": "5Te6JYgjf4cqRqDA5wgfqGQ4be9GeSv65mvtT8qEFJvuFSiNzauEsLT4oZSXJt6znmyA14nWN42JEefFcpE1Eai1",
  "key35": "5fRcqfg4ZX6voY2wq9JbaDVhXDgkLQxA4wSnKMCA6pie9F548zF7chaWjHS9deD84A2NWdmNLqTFvwPCkCPRdoDk",
  "key36": "2YunCqQ4nf8LpMBZADGratkfBBJJEzWfEjYBWY9CG8zYx1w2T9PkMkhKVk9G3cXby8QgAVoouXezZYidtFQPmqfi",
  "key37": "4rcRurtavGUZ57GwPWUKtMu6JVpjraS7igRr4vvayfHNK2Y1WYQUcHBqhgYVugGKZCzJuZgSzB8Pun5zwxQpRGn5",
  "key38": "3WwGLWG4L38RKbFAQbCFJwgEcUVNFJm5o8dJYESem5LeqB9sgBGKVZ9jqLQf53EYz5ZL3wyqB1CCbTuzQ6hYDEcB",
  "key39": "479Y897oRQdPCpDBRThwweNhwJKrSRg8Kc1MaGKU8qrjtm2rReFtRep1W43hN383PzyVfewF5jcZSCwfDhLbi59H",
  "key40": "2X5mhMfuuzYrZyXkbyH5syGgx3JygDZrbAbWd4Y34B3RwJBsetEBWuLrxyZpYh5jV96MBfCAnU5aFxw2CvzQqTy8",
  "key41": "3ApVBtX2dx5PWZdcMkdo59k43anBxWuiZq3BtqR4FpgJcij7EJyKXsVfcKkqmyLcdDFPbrQFUxv8hj88xr42QcuX",
  "key42": "5bbnU8NWSDhydpUcRAZWrBiAMhWJcm1uc7beEe1YGaZDYeUrfrNUbgXT7BaaCgwVc6cJF1sDLsPvg6fn2KSE2Nkg",
  "key43": "5ozfhavjMRpYx9f5EUkZC87rGd957A2DC4JbXKpngKy4kaU6gTKQWZH2SiuwxPsZDBM5JGtr5cMdk8421turR2de",
  "key44": "5qnNViQoy45JwYoFWbmZhmn5QT4pUE9dco2MfuUZ21koLkNYm4wVBPeUczGyzePjNcPc3pfkdAytWpc8Tm4o9pLS",
  "key45": "4xv11ow1VSAvFmSM1z89GccMNYRbZa6RGaqm9N5ASC1NsCA768BewCuzRyJJBwneQsNT5E7abuvaWXeL3qm3h91x",
  "key46": "22VG5ijjR4tzowUScXA2QeLgU1MHefpscXCLoEfCPoYuYUFeqWzfsiXgmvNsR76HjGjjisYe86ysoEV4LeyRdZ9x",
  "key47": "5NNuBYiqACWySwm4gbPZvQJ2epFHWRV9x8xuLpEo1ikDEK54CgJpzFnsoT9vf2rp8d4XHEwDFr6UTU5jsey9giFv",
  "key48": "3ioeueJJ8sgZoCN75247pa4F8jzwxZCKuiqWB3T6HzScV2yhK95oXbVQ5emKEKui4S53qmp2DXU8jFC83qtXeUN5"
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
