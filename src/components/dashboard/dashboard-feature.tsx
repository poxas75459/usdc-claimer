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
    "P8knzvjBLaBvn3hyvQdGwFmkPQDMKYGVgAd4FR7tCwxJXu4THoBct6tVh8MuM7J2cGdHqmoYRqzYRhciGtKdmF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCUzA2xgqBk7eRi73bTkDZQn3TXNvePe4R2bC7wgNrYNH6oDr2mifNmSTs7zpkguKRnyf8Pm68Nsxee3Uqp9Pet",
  "key1": "FcoN7avsjNgniWV8W75ZbJ3ZkQBRVpf8CsDW56wQ9pcMh7W9Q9UtyAvViZnLRbgSrwDhFvb9ZvpRdAYyqVSUzBi",
  "key2": "3ZH76o3oPTDAKV7L3Nbt6GFRfAzN4NfEpmXr4JTnzxni4MtVdBcKBMQKZcSe57oPDENMmCPbkJSgsfeE1ExqavHx",
  "key3": "5dK1S6hK7ybfc9tJ672XrpRYBRdBiUARNFnALdzsm22xkFmr6LnWrF9H6GaofoUiZivA68v5zKsA33JZGiEdv5sv",
  "key4": "2c5ZNudKwwzkv8BEKjznqC2Gzzjxz5dej7ZLtLfPfjfEaBYmrdwfXkB4TA1aixCHkb9fgLtG3ZRyvNQuMrtX8PVY",
  "key5": "5DqhfrwQCTMWpmCUv9eL8ac4kCt93BbNPg3kP1MTKVcEVCRuVAVozx3ZSpT2AzqC9LKjhqoixemtrX5SfQtVNUeS",
  "key6": "4egK3BVPhk9q1ezbFD3jsXHpjLXHJa5gfLZksXfo9cUnh96vGimYjGyYptm2Qr3Pv8PdUN7T7Kj6BZgBbic7Cao5",
  "key7": "24hyMMPD1oKJy4Euy6GB7j71CoKiXXoEC3nBt2Vx4GHMcK5JaU4wjZ4eVHSRuMmEo83pfE8w8v5pqiXDQ1gRnfrj",
  "key8": "4qRrXnAsuA5Cgf3UsdANzf9Ftn1FuvJpuBWMMKwRBkKaCBvSzEnaUdPfDvf99oTvCB3h83W9MmwR2j7dfef1EvZq",
  "key9": "4daTQ3vJvUF1ZxumZ2mKsRxvsuzpFCAZfeboM1AjFJLKqQLPp7Qye4fZXQ7NsZrrKtFkjRHrYEZW2MAx4zwJ3X31",
  "key10": "4ehRnuv175ZkAtbmJA85uHsNQnnx6hvm8vNKjXQdok2ErZrNFf1rLoUVutFM8jyyWzigCtf9zBZdb9J7ByhXAQYc",
  "key11": "5zynPBY281oikM5gUkACwJUqEJNcQqYrUBe52MZo9i2QdEJo6hk9VjgxfHXoExFhWeZ6WRFbvag8Q2s9zavq52DE",
  "key12": "4hs6PcBAhd9hG6z9RwgL7RPMknJ1h7LXAWyfchkCV9B3hngVh3jLoKAkxCcWmEX1dPmcvTFRGDoUzDdRonpSutJk",
  "key13": "3btFtdjPEA6TDNL7HTAq3qQiY2yoce6beBJGryJcaa6fBHRCnNVjsHkMKXSv13Qzt9F5hMKY6oLZ6URHJDqvBBmW",
  "key14": "67pJ32bCSMsjyxMdk6fpDD4s9nJs2Z4hmF6GZTPvdbhv64PMS5iob7y9TbQzTmQNtPz88WVAkJKXo29xvW6sgcmJ",
  "key15": "2uzqesrcAF2Fx6sSxaqzxxtoPNH9dM15FLuLAK1SZaDnw8BdG6pwMa5YVVGFz5MZ4qGkcjEfxApJ64PeFVYkB6QV",
  "key16": "4dQsKTXxLdgDbEjCMS79qopae5WeMo7LvhKERAoQYKu6jwZLrfzR2N3FLPf3hfG3MRtRUqhMRMseasKoyyAp5NUz",
  "key17": "2hW5SedP6uPVsrS7LH1Va8M5utsnyzPwk8NpZwHGwsRv33KJceHYjgUjFLciBykRTeuwdsu3MX5hw6wGZwkp4aoi",
  "key18": "4jTBocAhLJP3tAT9SQUR9fqXnLCb1Hb3ZhRURBjZBHg8NerGZ6XkrnutQACSfpgntfgNPr2XkEEp6o9UAGVtuyR9",
  "key19": "3Z1yucyh7JZUpMNvc4RwApHtP6czfWex8F29R5DUXtEu1K6h9wwzqcUtAPC4k7LwMCEhugMZtwVWVFguzihGhxtc",
  "key20": "66TdeXqVg4g7HYxJ7ePqPWANYNAvyuz2JY4kk2ha2pVLe6NFhiKQrEMiFtMpv2VmZNfVFCSDMsZoS2v4BHGowVJc",
  "key21": "2kP1CVCEboHsLr5dJ7WHb3Hun5dwLkFoB24CjvURiZDVDbnXLnkyMrbLZcWsbxtbu76oHXu6ekkyuTJ8yF7ABHid",
  "key22": "43MmQsfSbze22AkVxUCHMnsC8X31pQAnkXyX7JPAUL8ez1C24rZjwG8j4DX5FGPWUBwe79pJVaKhdDja78BpPFtL",
  "key23": "4MiEMfPrLGKNmuN4bubxc4NKP67vev9VgHTaiKqpBby5Hg2ejk9XSfzb2hTLszimdUvJEhiLoonpmrwkDTuoV1SQ",
  "key24": "3bSSqFa8t1BfB487pSuud8RB7HWPWCQoraVYyqVghZBqXFBMW5yLhhqDUwTJcK96Bz16ds7jkNErugXatsFYLUMA",
  "key25": "3cfaMQ781eLbJVYmFk7JXgLvWnQkiKG8fzufV4GDqaih4y1wPcQFCyugcvh46Zds1KUJ19cx6WGeNu697Z5gR28E",
  "key26": "UCqEx8Mik4KgudMvvzNP8TuXY2cB9yUEicTnCvwCmoo3A9K8vJHZycMMS34odMLWLGxJZJ7mEV5hHdBiw2B3ZFr",
  "key27": "3uwfBwnYrqA1pRMqB4M6wypCuJz34HZxdWbFJa5iur91fZDncVJuTFCPe18SzZBW4yvsfRCXW9XBrRcDkxoffcPQ",
  "key28": "5Zx5hTmFPnbufgaRhr6SAPz17czysK7pTruNRsZTwjqekuT2faQAt7hhid6KMM2jcb6vsFAWnZuDM5uVbz8XT2qm",
  "key29": "4MCGa3jNci6Nwmh5vw1QWVdpQemHcG4RQN3K5s9v1J4HsdZmmeSYCweetSKzenbtjEeMv2UWLD1tHEe4arKoj7Nr",
  "key30": "t8yBQWTetxhngRS2dM1vvfmCeL75r3JQdySwzYaCecQsFzLU8DPnBXywh2EuwN5E5bkgffxWSGDC5DtcxjZXSVu",
  "key31": "46Ds4RQsGi5tseKw8UnfgS6a7wNhMTXsadBuVdMEYjFoR5vmGv3c12pDjErdn2DdRHHYg3Cq7WxLTuDW1RTTcSZY",
  "key32": "kT4rKi9HEEsdyfgZoXVcmy8PVa8BEY5S4VyN9R6J1FjaBAYppC55u1s77M84XUruQqCdyaxtNJXj1pCnmjftDxx",
  "key33": "3J25Bi2WFCogBmjER3H94HdaudCKG3uuejmucTXkn6eB585ofZQEvQcqjbfu4jxspSWvaecikTBUZBd3ZHupALv2",
  "key34": "4ErLzba9AuWe7TkaowWZff6h7H8SFt7kiupegf3i2RboHbjmpTXsEsoZipJDUbpF3qoiZjhoJ3RDTfqbqEM3D3D1",
  "key35": "QW4zphcnopJidvkbvcpnCXs5DNDcC3H356e238bHg5y6RZKU9w39qz8ckoqdiRdHUmZiefM2kKHdCFCdMPFCAGq",
  "key36": "38ZLy8ZLGYoyqFpgQUviqsA6hdCicRCA3S72oeM17mycsqyNAWjHkX8YhcVLj8ZDiKkvUQuA82guid8PYhYjowNT",
  "key37": "4YFEUkmtr17jfXUMa4TTBTADT8hQY7syueuiFMYhTXcyiMPime8xn18ioUxxkLs4JfNqqNNgvQ9gEGNgWCKMffZU",
  "key38": "3JH2BnyzBpaRERJbV7sQEUmmqKhrzdGNjsMbHgyh5hQhTGUC2Pf6s1MFQpZFv5r2moG6JAa98kYKELCYFCrTzVA6",
  "key39": "4fZSvV8ExYTnc7RFachJ6S2JmUtGBhY7zGVE6SsTisxV7QvDTfY9mnmLFDdYFmeYjPxw96qdsKWRfDRnn6PcPUse",
  "key40": "4fGsChaEx7ULyfDuGYN5nb43KTiQrLjwNS3ov4a6uwmSUeR8pvVLMtpgJ7WPyJ1wyVFicJb5LMHyeHP9ySxoy4Yu",
  "key41": "4faHKv9zDUe9qMjZYHFfxU7tUrhGrzBPrymQrHSszetgZ7kxRwgCGXyVo7xbT6rDrru6Br5zn6FjvA5n8u11w9TU",
  "key42": "47pumnWb5dp1TGi8pDuwmKsCugKHzQ4hqwihMGtN6Z3h5qHZ3B9BDJsWrUYmm2ri6hsjKaPaWwzfDAtF3nvWJP7J",
  "key43": "5Z3qXVuz8aQdJeKbXtUtNeCPxp3YMPXWSbTgsgTMo18e3qhTpf2N5T7nmW69jxfFQ1rAVTU3nCe7xRkjFGvrSmcm",
  "key44": "gi9nJsezNJJdgn5Em9bgwThD1zAp7CHtANM7xjLsZGV2ssYwMJEPBiAYCjh6ReAeMYzMC6mAErp3Z9nGFYFvM26",
  "key45": "KvvaMxe2hYLXhXmeFmw6GC7zkfeYSaKBK7noBqepfWiYyzRXpBuhETTiNRFancoY6jcu2cRoet6mnb3Mh4cWF16",
  "key46": "3kwny7B5WhSYivkRChPsjn5xMdePKWUM8fyWcpEX9kj4fJvTgt1vEneL2axzHdohHEZznABnpfYrnfE4LJAytgPE",
  "key47": "3HPd3YZPfo37RL8uA5JVgnLcMLqtjgJMWWYkbiSPZn4dUfgEhPNiZ1tyDmd7NTKFShCTgFyDaqUFygCoXZR4nJag",
  "key48": "5hxfr6b5viHsunBHU2Rs1URqMTdoVLoZ5xUhGSr3a8ikTp9MM4x75ZEVkbS3V4BngGZpxGvPdkSdKWjvnVjrpkqM",
  "key49": "1txJYVefvuiY4Xu6NQomPuhmcdLfxYFy86kB9MSyPDcodhThQq1rncgPHX7ypaWyvYzpvrRh13spK6K6QrgmxAE"
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
