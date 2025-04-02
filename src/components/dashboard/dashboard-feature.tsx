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
    "34m9FgNSh2aL1AA6qSqzyWb38qhgYw4fBKXk1ht5oFAgX8ZYAV2NYzgMNoSkJoqnUowVt5m6WtRjtMH1fUqfH3kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YTk3MdP3b7G5Y1hANutvDhFXox8RMDg4u77sUrFq2ah9azYhaX8WHWrsGkvHX6aLNYTZQtm7L5uccV6eD6uKNTs",
  "key1": "5dttnDTxXzrD9exuNhPBxcvSysdYBPyCXHnSTCYuY2XrrjztJocdp7hrgRgcbbi5yawwEFAiEiXqwHKH7g7xQaRS",
  "key2": "rPZDPNGbqzNo3Vy7EURHFyS2MFYhSH2iQMojr2LB2u2N7bG3cQbdA2QHjHWx2vTyTrQwrerm8CFMefKVoaVtpGL",
  "key3": "61Fet7NDXEsU8pYTe65vwK47CYuLRgBnr81fCBitpnYTXxxnS2CE7nYVTPPj6R64QD91c32xzxPbAhqB38bYDxEp",
  "key4": "4kRLWhcRkU2bevnwrdKpE4DnWNh27ZLaKfeWkdxWBeu3Nfu2yF1U5P5fF9YAAjSgpttVuKRCKS42akZ6hmvjoTiy",
  "key5": "35nc3aoXiQsQSwkFVpzSiwgtarKZ3b3Dhd6wBt7grSJzmrraKd5BDDdAa18Jzimcp3pD821fsgxLSGJWe8tcT6XX",
  "key6": "4fBfgLyrfNQWTbCUDx6KeE1yqV9Dj8JtGTnMg5cRcgN6TcNMNAS8FMi6ppkmNUq5QjmSrGAqCA7KmzRFC7NMgLuQ",
  "key7": "GYffKeiWbuepEMfyMjkRdWNXFimSE8JXPDvPRDw4TSWLrgSYjY3phCoRE9vT93k2nqvxw6fAtuv3q4obpaN413b",
  "key8": "2V6iwUYW83B7LZRYn5En98BP5auX5mdSGfLqmC5TWXvNgPoycCkc5rVR451rrAwh6Qkthz48BMsiAAwkNjG5prBK",
  "key9": "wyBMfQw5etsXLAoPUDtyuTNSbc23Q6qT2vmPre63A2zshTNMyZV5cDNTPcdjMNv7xd8oaLVZmLKqmap9R8z6HyL",
  "key10": "3cACcYXLeKL5MDM6FCjPZUHcXaSg8PBaZBaB2tnTkMpTako13UxTQUKoFnVyShScJaqX2TcMMiNiJyGwwWyKMXSA",
  "key11": "5CagTbdX2oJMumZrKqUJuFRf2f7jgL3CghV65ZzzMjMp6NZqLpr3cyGNM5HHVtocrN8bStdWzkDxaSk18YKYGQDs",
  "key12": "3w2UeyGx4gE5iu1S6WATWE1sU3hsNdX6jhdtu5GTAbyDqcXzP1TnkaXUjHD4r8qC2hHghk4GpHrPR1uL73b6DL8Y",
  "key13": "3zLsbyWbFW8bhE1SM5EXw9W11AGfG4Qsx8fKr7nRS5Vq9iey1F2CFc44fEVLMqRKTBnTUtQNZtmb6Qp77tqrtJxR",
  "key14": "3b4z1yrHgUFpDH28Q5w95mcLgsvbU5jVpCRzyErcz2LM7NsCx9L4XLCck1pSpx2WLT1Ms1SsmZXeGVZz1K3aTu3m",
  "key15": "eZrGBZWip3SyMjrLRwyzmxhNieDaFLgw8NEYantu776ChmL6Jh1Z2iaKTkfx9hjx6GBeuxnvjZmPsCSw1pinTsN",
  "key16": "6nsY3b4s3RS1juGikiVBxJJN4GYMGnsGwn1Aa8Rx2syBCv8yfwweoeqbpnmJBf6JQioUF9zwdVSQk6L7K7bCfi3",
  "key17": "6jtLhKJsZZ6S4US3SB3F13iyfwu3UtHnv8M3onywcbuzShA8TnLbgJ5LTfPpcHuW267Bz4SbPN6zNwcWZG5cYFE",
  "key18": "3ZGmkghRnpdrNaMf1vDeEwS6cEb15FKhe4TbrcWLyVvbSL2izWGFjrhB6shGeWFEY91seLachHygqp8QTgTXS6rN",
  "key19": "v47XPWCSymgb2Qk6srpXwzTqfD9DyWSMBZtrDfazhGadrtCDJ9ZCfMRPCMDD4UwfCM1UDJ85rqx2ADtvuQG8zH1",
  "key20": "cyfmiAkNV12YMz8y1gemtjkE9U9Xt2iDRECyTgiH13LfrPqe1nUJz5ka3tD2L8Ui6RyRs3E6rq8yk9yD7cLcymH",
  "key21": "5wdgn81BqbzcdepmBwcAoFa9o1rC6kZxN5ZWAwC8VAQxFJSpjQRXwQ7gLzQ9cAKybVMo8gxibH6hi6BmAvWiEvzk",
  "key22": "4pPXEmEpBwA9kRDxmqJXnsMmsi2V8MSHr1UJkmP1wwaLLL1WYGpXA99KAXBd7mTz1YCkdyYMyaDheuQkpgpvwxep",
  "key23": "53qyQBAVEXq2xnHaeC4JYvQJibqGHnEznjRMeJVyTEPs64r2mtBHddHLEZQxcbPAFTeriHSscA3PFfXJUp56jGu4",
  "key24": "3yPvjqNgQ6gAr1HTGUDAkfV8XXRaHTyw468JwXCkKiaYA2sqcfJ7H5uu9MDrEXkJZVRUtp8nCejbq537VMyFLTRo",
  "key25": "88c9fUv2wvveamZ6DNZj7FEJg4At25zP4hjWhpQGAnL5GWwz4F9AFkMFP6WapbSJV5ZiUVuu67PibckvA7yjbTQ",
  "key26": "5R6cfSoBMQY1LMVLeAJkWdWsv5E8raSA5G7sN4Wf9N64cdXWjiJpc1n5mrmRDU8V8Vr166AQZEcmj5MhiLU5FfqE",
  "key27": "5KboJciCCdnirXXvwUc7YyAqVuC7st273xPhoPeockTHLGwSepopQfosWEWecQr9uY5a57fjsjjBuZyPtDVVCPZE",
  "key28": "1Lypvh9Vdm1voCHGagXLT281J8Vt6mXA9KPScbdwMxDDyRnEpGe5R6npWgDPJHcubUAafk4XbT8ULfboZPDubpD",
  "key29": "2nBoouSaeQBGJ7V8n6DeWSviRnPFEiE9Bn8Ddwa6iKmYqUrssNPZ7y7fa78i8PxEkL38Efkp8w9P3CMzJ3uWCbvW",
  "key30": "2qk8KBPL1dtR9h8eL6hQyMzx2Ep2fKpaRchmWQTSuUh5gQcRaedWngYtZGeUZpA8TGzAELfrTwitC2e8G1kyxnBG",
  "key31": "427AatALQFRXSrS9bqxAWbGBtZkBVuHwmSqeujcTaXCbj2MJyjinmTkLYdiwuvU8KDwH7LMthksEVx8jdQ37rBiM",
  "key32": "4gVdTQ2aD17v4Pof2i82HgmRDLyVULcGgWN1NzUxDe5K9jGHFW57RMbEwuuuTJF1gHrbvYwL2iKqcCkRhQFCsXi7",
  "key33": "53xRknUFFaaiAAsb8eJvMQJQ1xCWYYR1bAA616w79TArqNX8EHc8ZesnGmoeeFWyXxYYM4X5twynVs8iPYWPUc5n",
  "key34": "67LeZWeKqsN7j5MdYxuefS1spryqMBz7fjBE6zRfJWCYDbbaeT1aSitZBRzdi8QL4ALtPt8cBE2j4dENJvWqfGJ4"
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
