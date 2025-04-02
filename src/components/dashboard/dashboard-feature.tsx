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
    "4L2WNm2QV9uKfiAcu3QViDJDYmDCnKSfeam3oeFijj5S6S5x9dTCs92fYGtkmGaDztdykR5nEmMTFbNn5zTNFTzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gm7aYj4Lj217kdjGNDk62Vh2LabXVM6GiQNKGjwDVWc9hoFwkzNNt4pCTKKxcYzg9ey6vpYiB62bPu4jeAP46s4",
  "key1": "Afqte4CZQXf88totn6i7TQinZjdMMJYnSMdFYuSZdQYLTvZNjA37JA9eZWZqjAhLv8fdDLsxZ3MnXRsJcUA677v",
  "key2": "jDFHrJtB5yikfeix6XhATPCYaAPWvms8DTcToPS5wvB71uDNubnJ88rmig7wobW9SLzhE5Rh5mJxdMTQFuN6W4C",
  "key3": "4onf6LkDzL2aBBUH9v2aM2RFTRjL68EotorCPW9BwfsfmzBJbPH75UVQfkmc1JU78KQVduJauxwLaWE8dg8ihrnM",
  "key4": "5TpQ7sb6hLi3FYy4LgKqcDkfUwb3MYUKEZd5RpfMvJJzy1pUZ5yThfAXek2nYbzQMJPqgZ23br94M2AzixcjLvYs",
  "key5": "3f6tMPuRdH3w2qHtgTjeNPXj47HLLgUtMQhkxDgvj44pDTHJ5HdwV1z96dLpMKuruQkXuqGrfWx8gYnz19EydRb1",
  "key6": "31xyo29Tsx96395JmbMPtgKZD3pkWCCtgFN59m127bFNmFib6DeuhxhFisLeVTuuRMUkM3YC8dPZRLCCC83hoiCk",
  "key7": "2WgDXRH5QLL9pd66CJFbzbVETZDfTqeBEjSUuXH2sL4P9zA3P8CK5WGSjLHqqwCjczE2p3Qn9uxocGpWRJUmSahe",
  "key8": "5L7FevXPEXeCHrXNCPkALA6khCmGPsfmpjvooh8VVdFdmzEvy5dEjDRjyPMywJGoD6sQ7XaBwsVziufkcBSVDuns",
  "key9": "3x5cjtBjP4uJKKyjD6cYxP5X9M9tr2n6qTBNquN73ekcnaXfHWKFFTyydZHkaBcR5PYGb377dpDoQTPXV2QuwBU7",
  "key10": "2gfBiMd9bWAXVzoj7aweAZe2j7y6CAGcEUegGsnRccReaZj5G5uDBsRFJm6WGGHPXb4Wcw4p8UEzLwssvJiNoiXc",
  "key11": "5usdLd9d6tzTTJyfQ4zCYDZ5wLrPTapLimn49MvTod8hH1o4iVz9KhdvsMG73hbVQM4iqZhY46uapN7PwUHpisFN",
  "key12": "36LYR5u9a2sSrBnv37XijCXQXVWFuNQiY5zcFrcNYbDLgwn23vrMSyFMVC151mWrHTL3SufnRFuA1AZUFvuFBdof",
  "key13": "4FZBPPeGVFoxP7tUPV8RA4k8gPuY6MyCxiTpfHHd32YWw6fFPTkQ6EsycjoN4jdsuoBeKCsTh8h5BpgG5MdBfmx6",
  "key14": "52UhDegctADpsLXUqD8bJDeu1NoXzaJ6gEXCZZgQn3n3Y5A2k8tVpzEUdxfy5PdpoeDaDhfGfYaDHMD3qkxN8Pf8",
  "key15": "5jPJHWZ3Xr5hWCVnMtiGHqkrV79YgMKYhjQcPvjhvMiLD83eaALimFyvR9DJH2R4J1h7ghyw2eT8XzpwmRqFCjCo",
  "key16": "42eivoGsvsBBfnPviB61FWejC8hyjiwtbeQ6ppyQhdvCncsrKyCBtkdRUS5JYuDnsxHDxFtPkXuM8XpYgPYbZ4tE",
  "key17": "3XH8LuEVDtPWAvn8Ab1R2d2LASfVxRv3XMBSa7GVSK6a1zmfAaad2E5ABgcnaa3yetF4jesXznkSoWUrj3NuNYsu",
  "key18": "4VDR4orEbueaDEkq1e5JieKbWbwLBBB1DyHngp76XzFurQ87SgRwoFvsCJLTYmzPBCE6UL9gGpRoNVaHXyLCD7Ve",
  "key19": "4rR84EPqtQ9Wq7vgze2hqBZ9LGfXDbJiBP9oz6ZecYtFF5wXcmuEBEq9fq4iiniaHfKKjf9uJF7zmR4xbWZn1F9L",
  "key20": "3rTN9dgbcVyQSuky4uyCu4k3cjwBYsGYFQmWcXq6mYnk95SU4CTFup8zX79pUbENrkJtdN9ypFvZRJ4AjvJrLbHL",
  "key21": "2zd8fsXriThzMw6AJBCqfBNUP3E3sMrFv8y1do6stbD3jdmAPE97Xrg3c2HwGqG2NZmneuXc5QwPf42sAHfEoZLs",
  "key22": "ZDqQ3QXAwimeVmT9Ej9pjZe7FxGJkejRbpowNjdYW2twKusb9459RKiCBgeReUuf72RDiD5iWs3DWGJZ2J9EbwC",
  "key23": "2Eg5teaDw8GzJrhubtRhTCdJKoVkPv6u4Bum9wGTWnRc4MVrvL2drnSt4krmmSsxWV53SBhqk2qY7sJ9x4RGCJjP",
  "key24": "SEnx8BFpF6D1trkw7ETdFrHEbxfQv9AoEXDmiGPoR7yemFT9xswadALsCW1zTuoG8S7Uz3XqJfQshnoGBE6ugvu",
  "key25": "F8wfh5MXQoi8tPjABxgDzcShgz3LouRezDWAMbU2CsvnPpZr32MrL6xqN74YnBUdBzSLb9Biz1TuVDvrSiBJi6U",
  "key26": "QxDThLgPo5KCSR15KMpRxmdiYoQXLnbxukbAWbAfCPP1nQPfTeRmoRSkFGt5M41H9Goz5ZhnvZDW6ssLXwWJrUN",
  "key27": "5bCnLgvXjdKWJTKrUksYpfqJnjB6TaQHovC6N7sz7h3T7NDZ7ANDgoESixnAf75zSccMZwh2BALEUUUCFN9oTcEB",
  "key28": "4sfEwbdEjwRmfj3ZcSWDpTqMV1d6f1TkXJM9UVB5SDRMsUsgPAKMGvzinTsAi9VMX7k6NktdFfy7hm4qWjMMWeDi",
  "key29": "47hyFT4RXNuhEKPtafpGMbz6cYZ3dtqKpkcq1LTJgZ2AhNprMfWZKS6v2CB9JUmd64n3RYCmkywSpm9kCsJ31iSv",
  "key30": "32bkurVNnUSdN86EWnC6Bzeb9Zhze4NfgDALsQA3Mefwm3BTwKNPXDsr3syx3tmbUMfuob8RcLLtgi1PDM8rQdkb",
  "key31": "2R9R9KQvYfRv9d7ZvoqTdMSyWvLBKP1nPUN8eEC92eMWALg1VmqccpW25cxRJAjTqYXCjYmoKTfyZT1E1eCrGUYD",
  "key32": "45wrKngab2VKm48v8xeCxWpYRZ7pdiJ46W6Mpqj1yMXdBq4vp4amnFCFXyXY8YZPW8k2vkzQUc7B3qiQfXDNH4iy",
  "key33": "3DGsP9MwKK8DJdv4EKWZLRr1Xz5Anad3wqCHbDSG38YdGbH3bFJZm6XajQRkUdtMTBqaed8iUmsto4f2Vhak2Zds",
  "key34": "51NNtfJWxo7zjZYmkKPwhxpycPkAv8zzJ6D9WZyTUQQoXCYHGnohE8ptmwryiD7PS8E6gsVAbgtVqdBp6uzXxuja",
  "key35": "23LyG5nZnXYbreknbRaQ9WzmzP8eo2BSYgDKCRQVQK8erGqt1bRqpuup491LV3Ni1upuaspTX9Ja7DkfvDWczyau",
  "key36": "Hhbw3m6ZmxdVk1P3FEnqnuMy9WyP5RyEtyCYqEJni3FoMPKfXAWFSCLxjQC2pMkst7mqNov78ktpLgEgkS6PAFp",
  "key37": "28qRtfSNrNGP2bB3YPKpFHzWkp3waZgJG6qftd6xSjrrhhseR1iaABuBUeEGfveW4nAfgi5hpiZJKzKmpYeaEN5E"
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
