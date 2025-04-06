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
    "5gA7ktqb9Z85TgGFCHqWYKeF2EbHi7rqkvNtbDkeH2ppJPJmQ1LB9HhNvQaryJ3RYU1YpA6Z2X6NJZgjnDsZWN4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZL8uqQYm1GGXr8Prd73BjrXFi2LdbYBV1u1qQFxbmuVgyyTbLDTxWM3CS3fpZDVphiYZKvNfu2KocHGUc2JgVas",
  "key1": "4TWiXA22v1AqCqNF8JJSxD9rtE9kWDAq8UKmyxdpJcf67pnVCHKt2EfM4BgjjUTSEw15RFwLQ5JiuB3b2LrqMxzj",
  "key2": "3NTTR8CGj1VqJmo91noH74s1oC4PYno1H9u4wCUSCcWjU7ZNZ2UdkVqvhpckBWwChCrTba591uSS5bm7gbt3CWWx",
  "key3": "4R6ThCP3xodjDz8yX4V9q2MyhyeHUrdhL2eUevywZWup6STsp1Z6EYTK5uZpWxHUvExb1dkzhE4ZofJNeBdpq15a",
  "key4": "26GCaJpgAtZf3f1PkhTWzebJwVaJZ9YVjtEScKUmeZXcoyujYE81GZ1oGSQPTY1SMcAosbutmdMXKevp1qPvnw4x",
  "key5": "3X6cmhMLKvdnTZ3MMQUrELw9vmnMBmZAdB2qF9cSD5ZpiNe3oQaYBwvdixEsiXwMbpE1WoQxzykTi9V2NGraBWi1",
  "key6": "5zpZ442pe2xNfg38deiYzpMvsC4yrhoCN8fofRHkwRUiniS9yHRNVQ99mj1FejnZRWwNe7TRS8zjjKecUis2jAzv",
  "key7": "5ezCL275RNeXngCD3yLnBPs5AgpRqgBQVFYSMQY6MhSaVuMpoD5Me1i7x6DoA48qMezgJVd8h41DbhFrWvNmHB12",
  "key8": "3T9rxwp1uWWz5nfUJ1SYzi9AjAo2JddJfyerPwvPSPpCCqbLCtMTz3bcGKX38wvAp2bpjZfdhtW4aVyWRjMBxnds",
  "key9": "4kfm6cJx7W4gAebcfKqQqJEcbo3jrd7yf4fDhvLZ9Q7Nqt8KUauXVvmbCGA156xfsh3PBHXfu3GShhqh8BWdkDC8",
  "key10": "2YM6ttaddt34K8je1MLmsKYKMT25nisSGXC29Ws9BoSPf6ahTKHj3X8y879aC1AMY5kXtTXi91ke8ThJKmFq2fkc",
  "key11": "ZHSBWURa714AmSrhDbmRGXwmzmdhkAT6QJXrA8k4GAjFDHBqaDa28kRj1J5kkddjB9EsoPxWYJ2NqZdsrpKQV3Y",
  "key12": "5PQcyFBdVuCcXhvUizX6QTXhFRiTv3PycRACcvwswMiB23nLEjbxdYejD7YpyqMXt2dyV6FEVTNGQK6KEK1zmdk2",
  "key13": "45RWgKH98r2JjA1BJ259GQ169j9T8DDXAgDS1dDwsckTaMZ3xf4PCPGch3hVgJCKqzxNVuUUQmYS1HNQKV7VaXUn",
  "key14": "5wpP9hud9tasgE4rLvHw2i2A5NwKV5RREdKFXDopLMUsYrFi3YckDSxy6nXY3KD2TAFJLwD46rYuAF3fQcBsRLF",
  "key15": "3u5pE7CZ4KUb61pA8cwLVpXJN1udErkSf984TntvULcqivsgpxqefVcpzKPo9e7Pg9Y1HJjpydhysJy8PZqneFeb",
  "key16": "kM2EWr84VWF8Rdut4WQV4Mj24AePNiymAaE7TY8oQAy5FRQysqhVx5LdnGBCjjt1H4aLW1P6Tpmkfp2J3rrrGmh",
  "key17": "6WLtCwyAR8RzeN7KD6W8TtYSZ6mkumSU9suyiA2GcaWGQxi5E3F98LmpEvL3a9tSqCJWy2n98b5U4KxCQ4FJMMw",
  "key18": "vNYSapELHhwo4jU3sWYDRVUYXP9vQrL5aQY6DnkKrJsYVtid4ZVNvSb7pbiM6JDyMTE9djdaMKNfuPSES2p48gs",
  "key19": "5XmCGHmszCZL16XauRG5wBYp5XHjN6oqCfk1HHoFKfD3tcw6xHfaqreiDJEmiZ39QGJuPvNPdngdx2BzjDCKVHV8",
  "key20": "2GmgXUJPbCt88bD9bLCXnqHSKuwrVyjrHHcMBvSXkcUsJDVpyMGgSxDhoMvePPncBP1uGhVaC2vuJkGnZEQZGzWz",
  "key21": "2ZUM13Kn3v1T8iQVgpEAhP4mjwGMMExMwwGzHcfrYSwV9yNKRgoEU3SqmTqdE4Dn6PtAnBhmaaSxk7FMPgXaTvmh",
  "key22": "5LahmtNXgweMPJhMYVqF8ogRMvmjysH3q93AXFPvkyEkDVpFTHvKSDVA7L9S48GfNgFEwq6vWwsw2cLhwBVru8xo",
  "key23": "7uSu6oX57HBad6Zm6pKNVPFGiHx6jNoNrg43ewk1NRQMLVp6aGJFYWWVEuZQGAi3kjvqcjswCTEFiMp67quAwXU",
  "key24": "JtpnaRw5Np7Ba9LoqyiicZbFn6gEVzitAE9RPUhDSdCUq5bhf7anGSrnLT8kSvCPWMrET2HkALBZpC1FJbDepHZ",
  "key25": "4WBy9Pmdi8UAGsNffnJc7y7MLTD8vU5HrUeERpQ51D9unPXvAZUyF3c8vDJtL8K9W6iBZdisgjSTzer7MggF5A5j",
  "key26": "2tQrZFmLxVFhVpwdeLthTqv3yGGWPs6vh5tWnbCGEVDVuSwMxHkq3Nmh1ksZrhLoRz6NSWEi99sbymQwPjhKyX68",
  "key27": "4CRd5x9iqwtJtzhF8pi91GT3XGxCMwrBQ2dUX7ZRvhNGRuscCGJZr4QKKePRxDryQtrvFPVtx3cmgB5EsNoKXfMM",
  "key28": "4r5Zs2UaXMLkKyc2QQRS4e9TAaK8AZp2ESowFbVntYSjVsjZUUmNHpSkTJ7xMY4FCxVAFTs7NZdtyLtiLhK1Gra4",
  "key29": "fanPC4u62rKqEG9mg2kUSq4fRA5nicxu9wqYpkxDSdDbxp5EKmPr8UB5u6fmdXRPTJHjFh243QkGLtxeqkX2doz",
  "key30": "128D5LU4g3HTNUpbE8RfdiXuQZLfuBYbbAzCdUqSoZtqHkgqLPbcwRzdUnZi6pMJAvh6ppELMJVpF1JhQjLXHExw",
  "key31": "4yWskFgj67K1sgbSp6nvshgDs5wFQFvUrGKmeGejLzFHd985pPVkpQRrXnMrMErrv3E2xzsKYU8KxoYjrBkjyCe8",
  "key32": "2oSnWVCopxDMWAD7XiGgRJP32sH3TJW67WgHjxZHpMhoWwr2rz5CUTnsmP4tK1psvaPGPHbr1JhMa6GPXKY2BvVY",
  "key33": "5YZDmWBKByb3Z8ekrvFiGFasQbiuNN6oyWqDxryJYjJNZu3p7wcPuT6PvkuJyZSjbfMa16XxirZDhxB2v47eG5Hw",
  "key34": "2wsyyjGDnzbwCxLEB8RP4hX47YfRmbnQRadirbkzH91xjqwcnhZeBh2xbNuHP4qUraFiKZ6kBkrgUhTSRBKZquw3",
  "key35": "3AgU3Lc4AtypELecM5eXPpvcngwMtXbv39x5xTMoe4zfDLaqSZy8R2pgK4MviiG1mq8rZm4TcZHtiCrR2J8aaGv",
  "key36": "3k8DPajmyCFgHW91oDXgKYaGJuZcsZPdSy3zhFucmR2McTFTsXBuiwQQRqyNCMugFSfVa5XfM97v3TfFeNAYRr3z",
  "key37": "WdMoDZ3Y4MfwswdJRzysP7Go59t1hYSc7MDb6q7JaBTAEVN4m18KvoQK8Zgum64sAfHzsmNMfnsr5Va9DUWV8ah",
  "key38": "3HJo2eZPNq74ypwHsbx9wSn24dcuGCQCTtLDsvJEZWyJ3uycyndj6Pr4YwLRPppmvMKhibMYx6X8fU7MMi7sedG7",
  "key39": "5EFFjGaCqpWDAwhq6jEjJYFx5iX8Pdh5Mfy1a1gtvQijeBmXsFo24fa6wBrhXvStBdRskmGcnWvrpuCthA4UNZme",
  "key40": "Ccy3hXyDULq1hBRE9w99NzSkTSYbwNpbUsxgt1tRZbpMLVD5gF6LG9ARveMxYv2wMCMAPYCPnmwT6QSTYc7GupX",
  "key41": "2Zi8FdqLu3aVLdH6HRAo8PDrfyTbXo8J6vHTN8uJ84dg7R9eLAcmEzcazYzMkz56mT3sc3yRWuwJVTHotDoUiexp",
  "key42": "5TvUsz7gGGrVwAsR1ea3i76BXA6zSkEmsZjS7Yiwv7ZPcgzqnvwu4ZayvayDobK6ZXrKuNPgsoC3sVvPYEyy1Ltk",
  "key43": "3DkXgeAoFrfT5Fx2uG9pvNU5S8s8yw2xSAE1P1VvoiytYXNyJQ6mb7pKqKw3phfcebWLS4WzMpfLqk8Ri9SwH2zd",
  "key44": "rLQres28hDt2soboXNRMLsZzr8qoSnMDXRWLQQcBpHNUV36wiJGF1nBnsKVHdntQYv89vRG4qCRHi5zNeZQPqtQ",
  "key45": "3w8jUtjBhf2EuKUt4c4Sj3JqPXTUMacMxAZB7c8MhXimmABrwhiGpA5bQAD1rSwUHfvPUA1y9PSvKdAof3E4tkFW",
  "key46": "5r6Z8kWK7sZTU6GqYsoL3HGpT4yHbZLpk7pmoR8Cj2FNEb9bR14MeWA9otASnGwkdHvnEFJZo13NKwj6sUpD1Ruz",
  "key47": "2m8ieHfS1h1Fz9LmpJ3EEXcS3RQSZgtJwG49TmVqyXKPRLqnV2nLoL3eiVcyTTFbH6FT7JPerjgSa9D1mWGR2S5s",
  "key48": "447YMwEU2dcLiQKoY9sw6eHwXgvJsELyF4wgBvHLJ8n2iUCFgXfK3uVVtAaWBb9HMnSiT3vUQo1gBK5FeGDrUMr2"
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
