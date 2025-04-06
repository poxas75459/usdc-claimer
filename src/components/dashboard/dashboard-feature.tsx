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
    "3FLYvqcoxZ6UzQyXYDFPTU9qZaGURLbGuBmEhHSqPxP4nvuycA3VArcEGTGwHPT4RcmHktWHXvxQniXiZHKgBzm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rk5nwPcbw12VKERhSAn3dvbrunfnPdPXcG6t6rVuuP1APNSe2EbMLMafsiKaN4Hg9p9VHpHWRSiXh3nRjsErGxB",
  "key1": "5BEQappTVaG7uGaPaw7ZWT9ytYcebeFVXZjDoAiBzFWo6GC8GqFwc7McvjCDkSBoui9nvtC5UNWsBsrgbEGasCFo",
  "key2": "cGiACHPk4gYR5tZH7fMKiuDkdZ8ndKNAWGPenGK67boSU6MaXrZnmP7HyiDarjDsVACvrYJ4GUUVrEndQiujieE",
  "key3": "57MtSJ9j4hysY1wSroLnh5qk1Mekww3j8mscwYCHcz8NoC1i2fmd2MYkDNXebrSfMLxHAruhjT68igFkh9kE1THb",
  "key4": "5SJbaFUuDsacHfViFTNDjaDsnecyHjHmZcjxY5fCqJ3vFpNRtJNonW4F8ihsS4Z2bpcD8j14GVvLkyGQ7vQJKRgy",
  "key5": "5Sv6jkRFESPqp5q58xAKyB3dmPKJqzZSWV3i3t5Y5xQ9CHq47aFT7dQnFUFterfbqtjLxz9BtrMP86gTowkvMCTe",
  "key6": "3fy3Pz3UaxR1UG8ncJF9zWbk51wCyQxzrEALUb8vwop5HvFmCc146khU6anmDa4xZRUwfGwN4hrq38NZsH849BNU",
  "key7": "2xVR4BWFykwtF4mZ6sME1m5h676DTopehqp9Zxv1AGczPGECXKeoDyDYahP75E9VegK7cD97smZiFrU3g1fmazHk",
  "key8": "5aLpBZrEpcwYHijCeu7Xvabn5vc3f3qHYR5uQD7qwbnXwGNXprsEqiUYWTCc4m7pUa8RYKgGTPXxqYoMMZhiDE69",
  "key9": "26vpna7VnWxbwtLE7AkpjrNdieHmfUwkBCsAhAaRsmMFdBXArSNNZKPMnRTbhHgvcxG77wB7uXbwNnQ1MfBd973g",
  "key10": "HhQQ58KmjHWrMvp1xCS7ejhUkuE2zbEduZ6ie8miH72pSkwtEbE1HoF3Fn7gx1iKh541K8peEFJCb1ZGtoz1Gds",
  "key11": "631TAPCKrBKopvjy9Gt7NrQqPJhkgL8DBLSiNcJa12K5QyNWTr6hYbjypvWccmz1XQhd1WWMryBa5SrdUqnoRDHe",
  "key12": "M9K3iF8fHSAsTGnHteUkkEuqvqdBBd4dY14oaZE4M7ycRktFDj5wB16xWkF83Co1EKzYr2cyNonQA6Np8KaKLMZ",
  "key13": "oEKe7T21ZyGXyv1ruSG7zZkoQ5PbP7gSGcxZm9atE2yex2W89ks39topbJ89pcDZmobwGeocctsW9c4L3yWNyB1",
  "key14": "4yZRoPUccMEenKV99Lt26G5BgFt8kW5Y2bufVYJURBn44BMr7dor1ZKCZgyaH2gkqh52UafNbXhjYzUXTKNYeqYb",
  "key15": "5AfrmJeteK3BdsTEN2aVmjUrsuqBn1JcjtLnJy6234r8qSFMgGj6ei1NkyLswL4ELuKVeTg4ZJvk4dN4gnmePiSn",
  "key16": "24NAR9ycC1k7PZfMWVi6Fszi8aKFjkjWMfu2ptWxvegoe1A5Gfhxdgp2ZESY4gwrQrBHyLEqPgwADHytcRPoewc2",
  "key17": "4mjWhcMPyCPRyuHWr14iHvkQ3eUtnLac7GRTEiojqMFvuPurS35qFrCmhsgFair5Jndx7Fa2cGHzN3KndYxhzfdY",
  "key18": "41vrFLrcAKyoCtrf4d6gxCFRoKctzL5mnaj2sSn5BpD59CcSBQDukhsVambQ1sUNoiG2FaAMVEi3EtREJsbszeC6",
  "key19": "5X12e4JZmNJRS1VYSUw6bwx9zoJFRVJHg1sBkrZBsAkn6VUjmi5DewvDKGGEDCVpzs71S9nRwbMNEfgQQxG2PFeM",
  "key20": "44YPHXn44tWGdizCqvWRazLaHxoLWVNJPCmAzSFkoyfULCX67HsoVG7GudfuzptpPVGe4wTvzippTHc234tYXSFo",
  "key21": "5YAN5QbfxFotH7LTm37YAJW9eUYzEQpEmfSEYj7c4RE6nnWPw9k4sK4Cg6crtyfYzztUwUE5iQHFNRe7RQEzA6iy",
  "key22": "3W1GBk4BBYjyy2NYjofffGu4Lx2mB4fV1XUd5cmS9R4WZt6EYnzqbDf8qtBSK9xdahJicxNDSxuGA1ioCZDyaHHy",
  "key23": "2gGqq6wEo8SuT1U6dDJAe9EwtShzeYRmjx56chzx3UinE44fdpfTxJHrtVHeYcMhgiRaxkkRXydV55Xg5ZYK82vo",
  "key24": "3pKpeQGAQFvWhZ6LgDhh7GcDNcFfwq2tswZ6nGUH3j6e3ziUSrSAdskBdPnQiVxVeQn4oq9dbBFajBJHbQtHAi67",
  "key25": "434xnwuAqmDSTDeRXAj7s2LNffV1Dm1MFhyZc6FZcjKUJuoducAThr1DixqfC3iNQ3eXR9cRwJKwcFTMYcXYd3Cn",
  "key26": "4MDBc5V5khWK9X65AkJYC3Z9amNymdnFFi7DgcMS5GFYZLYScNwCfYCALyP5SainHaLhchJNtU48h383aXqGukrT",
  "key27": "2saAevi5kvan1BTUtLxqnLTeXpkEnFb2mYe4CmKZqWCGvGvPSjDkADB77Hqh3vGhh8AkVSybT9TVi5FigPKCu4SE",
  "key28": "33ujmD1GV66PPRJVbGUV6N736hFScHkUfCDzxVQVKnU559WKXkkdas4yjbT6mhMx3EdL9343SYyamg6accRgTeTv",
  "key29": "kFEMALEuHdwnbpJ3R2PaPUVqsB3JQYSfdkEu3BbZfjct4gnV3EUrY6QDooZtAAhQTC2XY4FUS5M6QiFDN1422GQ",
  "key30": "55ggiSujGLMSZPvsa4MjSPPdamaTMQbKwq2My5MgrRaXprWA4wZXywdWUcCXnAPwsTM95vCUCLAfuqawECTLTE75",
  "key31": "dwdgQwJjV8gMgKyVMp2oMVaxir5CbhjzjbhHMMGycWJR8p1F71hfVRygvNuJ5GAwyWzALHYxBMgHrL2TEDW12xB",
  "key32": "38mgkWfDioLByHCCHZMU3twoJPYg5v9aKXTQRZZBQew4AcJaKqf4TWJwqzYX6XBJ7hDA4NNSouEifhf3Y2WMHm47",
  "key33": "27ycS5hJPhX6egwud8g5qTkE9fzBh1xoMEMy4Tmyzy18UxY4Q2VQ4A3B7W69PLEzzMwRhKjJ4Crx2xbpM57MkJW9",
  "key34": "3vSqobipNBj6sXogKT4kqbcByp9iiya1fsZFCMFnZioMs8C3nKGxQ1g5Ecxp5NYoDJPmuX5F8FUn2BaN9iNdKdVU",
  "key35": "3ZBXwot1dL4yHg1UgA9s97tbrzKjyTt8Lv8CetJcaVDVt4ptnFhropzUGmz9VGU6ekaW8z7EoshrdeFZHoKDScQ4",
  "key36": "u5RoV2ji9W9pAP5pF3iEy6jL8qWPPUaZsSScpfpxLjujTRfeR5c5B9ijEVxquMXSy1ZaCXtYTVTGqcr46xFm5si",
  "key37": "2tYYye73cuwa3QaKiszbyhodPFB2g2cbeb5QeKBrM17NRDJHXfwVDg9RorUwcUwDMkUVny4GWgvx7S42fS7wXq95"
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
