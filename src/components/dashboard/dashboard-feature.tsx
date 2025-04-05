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
    "4xcARZ9b1zWvnwAPmFK6y4pcPx74Eg2fE2PXFiEs91GPHpqpTci5MX7jmPto6Bdo97bPeSC5EqrZRNy5h7uonuNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsZYnS9eStUpC4iFSJBADPeZ6SnmTPbyGLBzhonP5Q6FE1rVGXHWjd9pygdysYZXbcHSZ5AW8YwNNpAfpTWPAsG",
  "key1": "44vK9kFDRizPNQ2TkSFLXag4Rf8Jb1EshzeMStguf1C3C6FKxV4aCJP3uL97WKJRagUuhRvnrv9NMaRsXTgN6BmG",
  "key2": "4dSkApfTrHBXq2t2EjaxEuFTUv7TmLT7UUPHjAJGXy3wBKnrxqyhgJ7yTMdqDNNVukwd4qG8NutsYhb64qWh6HgT",
  "key3": "3HhiaHBQCeaXxJrfs6UUGUGyKGFKq1udMWZDwP3N3Bv1weYh8Vf3aX9hCrMGtdX8PmyL4bed73KY8i9xh9wiaqnv",
  "key4": "8aEhaAAtgRFA7tZZGLbevixjkebsM5FFh2RTL8xkFSuuqkRgKB13poJ8gFxVR1WTHuo7pGTBfFD5Cwg7HNqQTRM",
  "key5": "5JQkFcbhEDp9LZfoY7rtcpifkHeMD5cDDVf3mqJe3ij7oGui6YJF4i8vkMgurXmwdpuVJUPYVBfb9nPpNCAKwEp",
  "key6": "26KFC51VGp6j6VJeUgvrfQuABdmjL5uvQiFWkPpqLY8m5i39UtdPT35Nuu7xdNxZKJz2bWyo2RtmupHch5gd9LVE",
  "key7": "4h6bkWVampqfwb8Nzb9spxYQWFp5GLzVC2mGhUaUCMorEqmZtTTGX1Ycbh1bHwu1iHbcPBmfdMLkgPBtpqLrjgk7",
  "key8": "5kDj8edYHZNm7PMRkMmRP4yrSZeDz7mt9jc1gZFn1NhHfKxCiHJgXB7GbV73o3fWuFVxbnXh1rZnuzKoF2jpH576",
  "key9": "5wKanaHtTQRW8oJ9fb2KZwy5rbcfniQCE6HErU2AYKysqYwiyeRHd1LkxtYzu9vZ6RFUhzSS58TArmD9zWp5jKWQ",
  "key10": "3SY8BBuVWDYSgzMoa7gg8f4kuo9HbhvjrW5M1dtKXektUR7E2WSgDEVuxHUoreU4qvbikjGvWg6aDpYPD4ZzFe29",
  "key11": "2TJ6KSZgmDtTpbxaJyaGtqServLmZ2DK3W4VkCTVKUjJvDqcTiLT3fzEkzDkPTbA7MqHRMDJeNaYpqyYXrYU8qeD",
  "key12": "47dpkmJ9RyxvtedKicaCsMDWxrt757mdm5VfBrWS1qksDNqH9yhoahWCpJoDdojy7iXSNGjF7nTXxaSriuJ9Qso2",
  "key13": "4XeA7jaX5m5mjnfzZucr3x5nczDSHcLGfBphzZ7Ly8N8KRj5HFJuzDmmzYpr6dsibWFPsma3apVgRvXPviz7zLci",
  "key14": "4XfExcC5Esct6yzbAM5kNvbbLoLYdpiyLHr94oC9iygpF2mPmVTT6vviVMAX5Q7FkNV1DWdcm7syf1kj1pPFt1jf",
  "key15": "5gt4QYU4Ni8cZKpn82qJYwHuCpQfP8fp2zuxq9Mq5HJU8UK1wQhqCccJRR4KUKT7ZrSmc6NZUmVqKtLipf27vcp6",
  "key16": "3on2RN7njEFa6m4bjy8QAWe958vLRCfjWj2ybjdgosiDVgRUXmGZ2gpUdPEeYHEBWb5sZVo2TsYjEwVHuE2X6AdG",
  "key17": "4jp1GKPN7FdrxyGbeLTbabjNxzayfcPdVr6mSv8uFRfh5LnTEduhLVPQbZtAb9r5urg8KAA526auxYhwRTZ59zq9",
  "key18": "rwyxDm3UTYmLyqinFo9QZUT9ydFt2qzELuzvDbR4J9PkcxQATLBczqTPoVMxWbMMyeiaq1pZYusvP8Z1BTMd3rs",
  "key19": "2LMA1x4uoDrEiWgxVg8tMi8wQJERKj8oSHuY7ZZqWFxzcJW3vgzYereedjZvdqSwJBfFkgqmvqtNVkb8eqQPdd5x",
  "key20": "2sXvFSSA2UsEwbMUGsz8u9iVBTd6S2eN5VtPG35F34uZuyfiiim5gSyoN1CxBsqmLrvsmymVNUhk4jMPCUQGLStT",
  "key21": "58cE2kRsVYDtDpN5wmiHBfo9hXCB1ZbLQJ45FqY6po7RJuMjMN9C4iKHP3TkuZFUvjAPfHKmfaGyyqUUTgc4KDG4",
  "key22": "2d6eQgdqu34EHTKtZQwuZQZfYs3oFHjsBMKtUGwqLEMQ89UbW99DqUJzxFirpa17MuV9UxKxn4uaf2Nb4GhVRJC3",
  "key23": "4VfMxFyH3v6xPnPTsmdjHzoyPYY1RCUGS9J8pjLJ81X8nJAYymHA5f8BSVvMcsHe8cCBkc1YsAu3nrjk2b9hWAVY",
  "key24": "5LktFgwvokJJXCRDehWJ4Gwhhaa5fCCvJ7WXLDngReff7Ma4NrcytQd6nzSdCd5EGrTM4q9Zr4g74AVLFEzgAaG1",
  "key25": "47wF7eutYhrLnvv63nCyBGPQnfkTKfpSFSpujZdn6NgH4j54x5iWJUq6FGPyiRR3sEqEsUyTyKFDVxx3CN2iEu8c",
  "key26": "5tAsKueccYApjXk8kriV7RTAtnyvD6ES462HGJSZxyhDSx2cH93VKu6sKNFAR1FqQ6M6nsFvw5i8hK9LoYtD4Sgv",
  "key27": "2PKrvEwTG8oi9xmKfuojKzWgP4eACXkg4Jt5k5ZXsfyY9yMGJ1GozTUep8yUs3gvYPszsEBcBhQt44R4wPFy84NF",
  "key28": "2Af234aF2Lvz9ojABkx9urruz229us3Umci4iki6qtQu6s79c9sGyyApLPE2P9qdVaYdGZy88BNJX9r5NB3H5Y4T",
  "key29": "2L7Xy4HKujhz14SMQRMLMdDJizHF9HQU51cVyN62qjsNuh9YLaXHtdnfMaKvUcQay4Mr6yEjkhZPS8UThB2f3LPt",
  "key30": "bGuBrsPfXRgCtRJ9PYop3VFJSSq7hnBXrK7kHiViuYBiRwXYeS7244fbddHipoduurUQLfzCWHTD51dUZeet8Qd",
  "key31": "2Jcf5AXFg3kS8WNYMhkFka5b7hdzjL3eMMfXLmbwSAGXQxYxtxi42CkTib1CWnS41GQZqkoL3UePpcTeVMa1BYKa",
  "key32": "3wgypbfMh9WXn715G3GLjxg3AdicWSx3qP8uKZyFJrecNgsH1qWHHNx9qEvPUwQ8LFDxMuAQWgSETJebnGBxVT16",
  "key33": "3eYSztAgYXa6d5VnKupN1oSY4HHPkFv1bHewqcp7F3NC7cdCgtWqJSSGPkqmiGefoSBtko7TVAQC27ieLgLiC6ek",
  "key34": "2T81fTzxNcX3crczGUjXiaUPSi8MA2XuwmgJfJmMJSpwuHEP2g1AfxtMY73d4Y5wh4B7HVtneMaW3uEsKpZp1SsN",
  "key35": "7LnoBaPrQ2BbHoriQdYgZyZotLNXgVJEYxU4rHLVaq1UZJ73RH6eagp65BHNt7Rz7HxPVRjkk2GetN18FT2Kjpz",
  "key36": "beQf7JGANochEruxN4yjR8Ke73XgboHkqycPoGpCxrfdVuRDD7s6yA7pHKmm6G4hKx2bpuWRR7tgMgbx1ru37Se",
  "key37": "2U8M8o9gvTnPoftspv7X2BXsjHbW2DLiPYDNiMWKz66BvYxDAxTNAqKNbATqCgUpHG21FrmWt28N7AX5AXEdv3yh",
  "key38": "2Q97dqzsx68xhmNrsPFPuUjMQZqSWLRC41oMnKfggSy2x7XyKiSHDpRbSZgyXme5c9P8bUZ6ExeAysP13Dtozysk"
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
