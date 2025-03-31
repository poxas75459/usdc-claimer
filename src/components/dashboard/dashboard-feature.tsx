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
    "215FUBaSkWi8YT1WnY8hevAuAuX5LYkHfw9wtc4T8PfWTTh5UgGE9uKUwnMNDQWPPc86J1mzUTcSTHfq6MDuKLWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkFrjMGLUvhn84VrXckGA6ejNfJRHYDgVd9k4ccwfuu6mYJEaFeqmamyabeT4h1muTXC8st2NAB7M1cVi5Eh4vS",
  "key1": "5QaqSPQQoDEq6ckza2xB6SjW9yFoteuQRWfxs9AZsEaJ5p7iBbxDAtpAzqhSGUvXT4ZpM9AU9SMuHiyNuvytPH9w",
  "key2": "4rZ4f3QcGHTabkbdYvXZYkfpmb3v1m5KssHbCrH2NhahG7RkrogmPYVuiggbT86LcPQhFofEmjHv6F22QhyKmeHp",
  "key3": "3fETboTrceAdzLG14Yk8aB82D2hUAwPQ2xot1ZMxAeT5u9wc6AZWmdZNvsX6XpyyZrvfVoiRz7Qz6zYKefYrStyG",
  "key4": "4nsN1k2BezSZLvw6xa95NzqeCsHUmTXAdGEuYV1Vo2n6UrLkYwWsVRaNu1vYPnuXuA19RXpnMqWoAtkZKPwqB1vh",
  "key5": "4m1jY69pnzW2gqQBhCuYYzZ47ywMXZR9hUPgWAwg5rDVGMLEzuk44kb5xgWFZnJpghzPwvpyftkNhTLA3u1Bs98",
  "key6": "57uZzqe5uzUYHUGXPiRWeTdHMH2MD4vu9yeVqEU1yhrwHR7DbQqUznKLaZyGgd3jsagyXgg3E1ERWQoX1cVGcF5h",
  "key7": "2Xi23XafxwAeQUJQwhNKZMkJgXvX2UDn35r5XuD1s2NioZTJBzcYiRa9jqqd6KPYujw9CR5LACBR1iH1U5GztpaK",
  "key8": "35xv9nzgWAaUycvDyv4N5wudiuryQrnyLtnh28hLbZWs9AYLsuMZrjVjEuxKBaiRtSfWtP3YhLcTvGqU1t1z4xo4",
  "key9": "4N8i9wbVUDNGKWVVcZnEXjAkh85Bkax7RKeQTGRjHchHpAAmwxc3JvV528cvjYdQ8vxRQ3zW4jmr1FnDjhRC2KWW",
  "key10": "4xRyJ8EfvGpqLBa73G17nftXLiSX3tKHZuLQEixAzmxo88KCGYLSMaDdiargcCH9zCxZViiDWrAoXV2pxLueUptz",
  "key11": "3cZPojRKU5znfcgg5zg8p3FdpZZLcDAd7JBSfg2NMF6kaYS9zA7HgHCfAkmnkKwDTt3DTSx2j5Gdg5iDCyxpsGLg",
  "key12": "mi4KD1PFuJvDzP1EJqxMe4re4U8mdRfUXos8jsXBV4mmbLSXLyFkw51KagpxVCy5HtcfW8BoQyrahX88yTgWRbL",
  "key13": "21H44eFg5UBx9jnT9p5d8KyckZ7aMX8qXh4UB8UDBPbrPFuFCRNsExGGTEQ4het2LuXbNH2C7yv4btfU6WJnBjbv",
  "key14": "zLNXoayuVCr6Q5D1x5r6Pc4HNi12XsZ3mcR74y5HnPZjfg6hqqJFZXRso8KwTKCpsQ99XYA7wo7oWJNZLyULUoT",
  "key15": "27xZZDHgjLGiW8RcwvL67sudqoGWYVzVS8a96NxwVRDdLhwQr7TryhEpikJ6HqsjiXNwh74DC9Vi1bq3329uH64z",
  "key16": "53y3bbiKAtMyDBCBibE9sHuxW4sp8aE9hysqnNMiAt6JSgCFGrAJUQXEmNniWj38jiA3qZcCvXiMeRfmyyauec2J",
  "key17": "2wy8XaQEtbmDPS7Ve9xsLFJ8ouuoBBPQuqRzhFmQHVstHDPkCCE5L8LY4PjNiBBNqP1iFGY7qVQ6Ahi63N3GRtkv",
  "key18": "doRTMnxSmhsNrsu9mZqukKVa8WKziPs6TnVoXazM6tL2Fn1g2TRtjQMziXXcZUEC5rPqpLBHBBzLdLTi8SsNhVN",
  "key19": "2Sx6yUMJ652XwrJMRT7nQvQkenuZnXZJtjzfZxr6rkuAagyskJuREt8M2abymECg3wdzNyPup9fzNQ4rdmkqgy8T",
  "key20": "2Ce9ZtbPwk5ywyfgSatXyXQC4un3W8yMUSKdsF9G4fNCer7D1UnX5dBWbrg2pbG8Fi1wQAyFa1RR3Q7XTHa2Wxfp",
  "key21": "4FtioZ8GGQpDm3bk9HtmKyE3gooF9TbR4chFiAyA8axr6rhQJHDVECFjqUnKywLRK8wQq6G9nbHe7CLDfaQPEv7i",
  "key22": "4QfbsLfyx2UBsXtcgdsbqN2StrkCamCPbzrErrd5kFmMWStfNpN1M5BPtGhmYSR4RVDkJS1XsLrzzgqHRimKVvcY",
  "key23": "2boN4upURfkH88WK34xb6V87ygxJPUK1VMvbcgQsJa7JBXBRmdpvBvor9t1Bzt5SG54BNKf4i6houPRRTf72iegt",
  "key24": "4xEcbcwk3e6SogMWXzCTpbMssJf9mriStVf2DnD5cV5iYLDTDSdVLjTUL2vRL6g94BWc5ScPSavFMMegqvZSLbmc",
  "key25": "58oxniAQ7BFRZxrBk3vM9iJyTwf9Az3CecQs5ASnHHTJkHXQ1eH1LSrVK4XuYKE1rYwARPvJQgPThk5hc9W5J2zo",
  "key26": "22aaoQ53bNtC6yFM1G488DfciCELYZJTEMohxaiB1jDuXMkfS2B8pu5kN7RDmkJYunVfiLbUz3vrXotY9Zq3euDs",
  "key27": "2zhT65VredK5uwo8xqEbB96jTnYRmyaoa7xp6AaHnoHfGN69njRgcVWJ5CUm1ZZhyjwiqjWRbE5g6Rmu1KqycCb5",
  "key28": "4a28cGPxjMKpyo88xgs3weyBXwA73KxyVobuzK6f1YvsLyZ8kdxRWq5SNf1wFsmiLB4aPmRm2Hjuw5ATSxoJDFjE",
  "key29": "bRTDMq5JyvUxkdGTyAnUmsCSzYkMmpD52nPCVDnVqSqaE9DVq4TGZWRwvSDszBThdUzNZRo4BVXgonzei1e1z2E",
  "key30": "2sE2588ADpmCGgDGkYv3m3N4EwjhKYMVZ6RzAfc73FgFkjrY8s36ChRqyMitP2hfvt6bvA3NQdzfmqCA97rM4ghc",
  "key31": "5kd5kxhxPKovSDJpH6kxQhvu1N2fgZCQsdkeqdCRksviA8KQvZDY9bB9h3YZsN4rU5VuyjH1HVLHTcWFJVitsKvE",
  "key32": "3VvxVW3SDkAZVMV9SMBbyg1xAb1F3XvkDoLU5tUo7zGL2DqQYwRa4SDr2AweusEGbCdsBUkpU5PgqvrmuXqSfnPN",
  "key33": "3baGAKPjbfigr2dyNNNKU9swusE87H1DTjRVATgq1VvdXtwQnB4xrXP3SseSNcdUGkrV9P51mpC1AnZHgqyGstFh",
  "key34": "2BW1Y381P7KzM6CMJedKpeNvpsFcMc9f4dXMLUpA91vKpMhduuhgVMxCRruP7PKtNi11eY8osWw8KrdCNnZhfcrW",
  "key35": "yrZL9oPoCWxfrNNYLCDbd7pv7VDXyJq6MWm6ngzh6BfKUaGRhwF66w1SarCbA54miBe4ZiQTExSaCZvbLrxtXeX",
  "key36": "7eN3yB2Lfb6EMfD37xj87NTHL6wMMSibducEc8G1CMkSVYdyVeNinty6ZWQ1spv1NspZjuZaocjQ8GcNFZbaRFB",
  "key37": "2Snk6jnDE5TmT3FyW2McoxBiXsFdRuBQTm6HLVwAjWzx8TQUbXvrBh7SA7n67ucKFJjZyeKvxykPKfuLCzkKyLhr",
  "key38": "LCRsDiLQhTNb5UAPkTap4dyVTR7zL5gUXKxzXFXvCWkyr2R2kXcVuc9f37GoW1B2E4Dq8awi6uf1r44TPAyp8Mx",
  "key39": "2Z3bpoKba2iUwRAGWBpmFr2y9mMmpJSn8uvV4yNHUoibe3998ZTYgPQh2CKKP5HR1NvDJuZTwCgiL5NHW4S6yhfS",
  "key40": "3ynenRut7KjT6wfYMtsZA3wrXYQWh25i6qEEVHhg81YV7dXw8XhP1p7B884pwm49nzb8KwxHPdJX7PrMD8Pqi8QC"
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
