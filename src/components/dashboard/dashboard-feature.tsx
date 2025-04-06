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
    "378RsbeKuzQeV8R68zazb73M9YzezKW4SVi1PFZzoJ98zBnCC123nesHFisWovUVenciAxxLGmJVMW3vZdUhZDWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhybLSTHzQ5pTbvMmRvJ7eri15vPBpofYemT4jfNrQfKxSXmCS86Uo3kmH6KgT9TFMpuw8yZ1Yc3TWTxJ4c6t3U",
  "key1": "626nEkSUDJqyWGa8jvaYT96zfSSpZsvR2PeGM8q4zybq64yhoB81L9MjKdfWJ5VfPLbpPLqnKuQm7q7HT4FoAauf",
  "key2": "3xNSLL8EAhoRTNM3QeZfvzyhjFA3rpCebUEJRkaWrwWxWtkX9uepo8YnFXhDX1rGtmYhjUESf4UJRBHxiZ3AV1tr",
  "key3": "xGfdBezHEDDGs4XPtXEW3Dss6zMvMEAEWsoSVnkrRi4GTPUG26vPdrvozecWSNVmFjQaGsb2eFGSrnoMrirsKTQ",
  "key4": "5FBa4cXQyMGDaWoSnVF5mN1ihfxx8rmmFwXoNUn1bvhjBjn18Y2bAZCiT4KKhXn1oWsKqRrVMiJa6RXqim5T4TZm",
  "key5": "4fSjXdNK2b9XExcNcNAC8CqZfY7qBWi9ENX7thS6mUatZbMPmqChk2VJFzUCFoueVzW6CTAm3wSADb1wmpbchZZ",
  "key6": "3W4MrcQFU51ebLpidbNxjndwbEWHz1L4CPN4Ymx3wP4UsGKLZBTgvV3sAzU27U15kCrEcF26LdvdPJF5N4Sii6jZ",
  "key7": "51xFnJLDT1UdaB72y4Un1nbDHCpCtR9a6iSZg8rHDnVPq6Y5MxHesZdZzNUewfGtT1ZwCX23ajkJUW1yYqDb4gL1",
  "key8": "5z1TJg2PkAcdRrnGGsLxVWFMYGd4dUBPjsEWB2WYn8KKw3Raxj4DrPpnkUjtoXWwaTSquwgFhUftWb5fdq5VK8AA",
  "key9": "3ytzL5Fj4fUoExuWaPPZUf23moU1khy6xshgvKHKfp2wFY1B2G9WN7ggtjToJ9mzonA9BiNgBp5n15LrL3AndBqT",
  "key10": "3CvU8sJ1uJ2y68P5HPEbmCQkSFWWZEG15Y1oFP4y8kz34mtyFH1Kgx98aF5NxheL2u1pAdcX1SkgUSsjB8Z2SJm3",
  "key11": "365CgFaaNNmJQbjog22Xihf9LGezFBKXadEXxXQc28TK99j2iKQoRaPxobxgjD94K5kgBppR8uZVuPsFHXxvk2FP",
  "key12": "29EnA5oipCtBDwundbwfbncXURJAi5ap7ijVPoi7tnXE2YPCvJH21KCfhyWHLtqyyXfF5uV3zpiro2yFCsEAzmV6",
  "key13": "62Ev9GVRm8QxeTEZ6GTg7uNj6U3hKjXuyMURZrVRQbDxaxiiKGhcD8h9jtTz5WXuXhj8WPWeMvvZgSsoyyQHwzKb",
  "key14": "3S6UhKSwFSrSagxLtWpzpUTW8huq1LBhC9vwC8nutftVnCsZ4HutFqLYUhK8e9Yorf8BiSkvivRY8owyrSYqkvoo",
  "key15": "5DWiDZKYhUEwvu5pjZB3g6k7d43sU5xaArC6qfxjRupPY9WTuB76mEfmwBxCRA7DUPYPCqeJtQDkb4eSc98ccqLt",
  "key16": "58uGYgBth1Lrz1LpfN5kfhA83PXyYBWxkmqcidGbxTZ8AwQAiqKi5aLCc7PrEaprANkLc2Hy253BLJoe3D7dxiY3",
  "key17": "4fornJRCr65mHDKDyZMhHm4MyP6MURu4okNm6k6DDaeKYSYcuHhKSAMZepej3B7Myr19JGGAp3yijMFuMF2dNGyf",
  "key18": "4WCyTTobqKxs8uN3rTNosaG35wY57GoRcdRSeP1xTqYRoRKNxrF3bRKPYwiyxm93Ts2C8cAJ6LkG9sKjUcmaakjy",
  "key19": "4koQiyWM6xhkMRAeTTGTsfE2ynNBke5MPefiYtXGpHnnjZUq1EFddUAVjkpFDAfBnu5HzWMvp2rjJUrtKtMrXuV3",
  "key20": "3RFaRDhapEUcS86wr7hBx76gimHMhaKpHBFY65urabP3FUXN6h8Zqk7VmUxgkBp1yj9sehAzPBXUVn8Nr5Knrq31",
  "key21": "4fPnJjA6CL9dF7d1eoWK1mM4SCnZB4vzyLRrrxVPsiGX5d63Mezs8fVoc1anhHTEpFrZzfPFP4EdG7xeJeHeZGKi",
  "key22": "5Jiwh6yfdaTifjMG2cHD8kWP1x6RBEaRhKMqbPf1VTnccJu7hvCWjPU3BQNMUfZ4JU1XwXequRTWy49EidTKunpZ",
  "key23": "442r8HRrN8MeNZvsVoDy4Uxjvxmp8NTEBVLruJ1LsVzYNmadLe5SXBDToDbg4oB4zrxekThnMEVgcoPQ5535vyTM",
  "key24": "2evchC2EWgyZvbpSPwnKcxAbVTM5F35GXY4FbzDbcjfgUPhhRKhXpwHgXe48L2EnNzm8dsPzBLGbtaGbhbHm3JB2",
  "key25": "2S4HuqR9yQgVNgCLdKG1G8ycMkRnrJxpveaWyPVY6Wt3wbXDXd4bWo8zqLKsp95Cc4D2hoyXSbThShvtLbUaMWun",
  "key26": "3kfH3Zer9ZeGrqHgMikpBooFPCSmkSNr4cgD9CKiWuoBQ3itHF6Qb7xVGticx1amFBTVcybcqomtsY2yoSUE3m9f",
  "key27": "yFJrUwSAUJLbAMEbsjEmWeNzUJe5f4GJvjmR46kDQQ67C2abnykiwy75TU4Z4eWhg8Z6eA3uuHPZtgWcwzvDNgE",
  "key28": "4fbyvPVZmrtgWMYYesN2idHGPYZ5q3myc82hQEBqdkTjcQzVYU9EYKZde73qm5LjMiCvD1tJvTxhAqmp5y2GeDtn",
  "key29": "YpB5XBDCqCjqWxmheMXy75A7tZZ5HHr1LKkpJGdFgXVT19LvY4EjAd7BLVrnokimgQaL4gp3Gr831chGprmsLCC",
  "key30": "tU8PPY7nGbawsPttQkwo2XNBA68S4ZG1rgf91pP2nFSikLi13rzg7KK86mgHvCV64UNbYwQNBMWAMVHgFd1FCRR",
  "key31": "5nhB15yZ57k4u1T7x2YjH1VyAfCUZ63KLhioJCmcCfAzjjwJUZRmP794DUS6jNVPDSdLVAmmC1NW6JxpzNKG2nxY",
  "key32": "1SoFkzo7aGQ4GK7txgduwBxNBc38PJLsVUsiouxXCBcuYCVir78KxnF3SAbk53JmgG6QjEdzxLVe6d2iAhzWtHf",
  "key33": "2eBPMkxMYoNtiDRe4WxVbe52PwdsDd1FW7dSJaCGFYnKCU6eEbDTUFSMHATpaBKtT1yctr3jF1iuFP3BQf8cEqAH",
  "key34": "4bgzQC7f1qdJxxQy4eGX8i7mzJVAG4yzxG7fNh6zcjR87DGoDYcdfCT49fmCdnR3WUu3c9nb97ZhJyHCpv2ivL5q",
  "key35": "2jhwnWGHUxM5eKyjWCSLyF5frSKiPzL16dbSvAEmEHG8UjdJWCify7FXRDUDU9mAAjmW1gjga6Sc9Q88dV8vbaDL",
  "key36": "kgN9jwPFLCc2JiSQrPKiqbSnLJPBH4LSee91osx6GkUp5hC7sjLUTt1bc96efPJgsLt88nCN2g8Ycj3sDnLN3Yh",
  "key37": "3sLrTPvXo5zYdakN2eTDr8sucVuziunRqp1w4vM8pTRcrfWEaQdnepM9ptzWT6nx28z8PTJmSDihN6ocVS1jDwyC",
  "key38": "4qhpxYbzketN6JA9zBzU3BYZbiV4ch6AxfroNMGfdLuohH4LcMbtfndBPrcbpDtNSpd9BhMyU1ajNihUMxHk2WX6"
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
