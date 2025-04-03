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
    "65DgAQVs3Q5H5Kj2ikhPUcGtrdQmFgzLHo5uinqLtV4bpjhLCDUNfUiCAbuxuTubJgCSZzvWMYM1jESrGLCLTaWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6awt6gzqurNEraFiG4wr3ujoNi5nhxfBSdGsZaz3yASqAKouT7zpFtNsYtF45CvKJ8SkYzWWZXpq8D4uu4eHch",
  "key1": "4eqcX5iduA6T48ScDsoDeR2AXagifWRp2TpeAV8QtiHNwiiYxA8w4SixuqCJSrSrNr5AhepxSDF6JzQvCFFk8YQ3",
  "key2": "2EbVS1LXGoGwJMprNGhsaKFh7Wt37SAMtjDts7YvaFWLrYGZKrjMvztRqyuFTBLXC6ndVTN7i94DK2fpkXshxagx",
  "key3": "fMZPYi4VEB4sBs9vYbR4DmGtMeNDStzG2c8i8su1Ra7NQmzC8oyaMhsxTgkDP8E6Y2ax1XruKyeTNkXhyKKDYvM",
  "key4": "3WQU7bUfk7e1RmCF5kqwDQPMmLbmVf9Wace6eF8CUAWFwgyzFH7gnZbTK3Ho1Y7qmU7JC6Gfmuhef211vvyMMRGh",
  "key5": "3sfn4XPbaqVxGo2BamwSmQ38TzHeLZsPsoUwDs92K3psH6AqUHiE6gngQUVNTS6nh7wDZRqL7dVNQjkDWKmFTDrE",
  "key6": "48GDfR5GkGvXtwgd5VyA7uBgvTCW6zEojTkGSEhHYNa5QxrybMSudUasviA7qUKKrL197w8iXixp5VsEnVU8m8jX",
  "key7": "337dYA7Lv4Sap8TJf3xmNTtFDgCLbUAbBM1DRjPHuMCzuaRunfAMt84qDiW5fJ1zyfB3maavav1GxdrpMqEYxJdS",
  "key8": "4q6GjLFrB5CSCmGkHzzv4mQYoZyjHr1uYXSEXbpMcZ2EgAPribQgwWVTzwusTyb3d5o8fKUrgL5vAvTknypJ7JH1",
  "key9": "5wP8stg4G8DYW51kq8VzPRuAADdfXFEma5fkfrf9VGVJYUVC4Vg6jh1so5VkgR4jJHD9YjNhy76HnQYhTKqvax9i",
  "key10": "2a6GFjfpZ8miCtqdqyYU673SNQe7bGPTCyQirEYhnqL6PrB7MnJQE7VFJ7ywmKBuRKKoGTj1yptjDju6TThBju3s",
  "key11": "48UjJDV8fg266KWQ74mp5uLovbvPRwZ1Y1WYTiNR6bqSpHgBeffQYpWgB1bcwpb1WkAzWxhFi92KFV6GfxHYFTC7",
  "key12": "3JZjSd5Vm9URwNP8HBdxM1WN4jSqLSbaUexYuAiRGchdP6xPKjL8jpU9TxYAsKn6M1xDP7jphhWRKT24dNNTE2aV",
  "key13": "j3vv24f1GNLQaY9umzLpFqMEpZoZp7jBGnUnHGAdpRXNDQ597LSjXhZvsSaDc4ZXtZpYBgRPSRaAsfTgcvK3zMF",
  "key14": "64XoD1G9MosTSok3yGeyaV8j1EX5h45w9uy2Cdwh2aEDJMdw27HFmKs3qxkQDsUAKnZdxg47jUKMSqmKNSfBEEz",
  "key15": "236sAHj2kw4iAh2Xb5HRQc8neDEF76hgVE5kTrXFYbqShnDc521L2KPSyQ8k8LBDukPniqmXCWiqS29bG5KF6FaF",
  "key16": "2euvYND7imoXnfhv3um1UmecFSGQBShgvL6xptRCRV4XxKU7PepVR7MzFrLX9RVCvruoV2eE6cjhnor5s7N9ggk9",
  "key17": "4bX2M2a2zEn3WyfbqEV4DfnEQmMQm7jmjWtRh8uqU1nhUMxTMB4xrxnRQt7oTAn5EXYDdzCQm9JjsKuWAnk2NrKe",
  "key18": "pjBbizyQn3tvcQ29NgJA44bU49UmSVn7PBVxEGU8xo9PGcZYgbzLmLMtvQK3in3VfwhBTJdhSc2t2bNq2Ch3cMx",
  "key19": "5d1zhqScY4FfH3K2eSuERHDSs3qk66qv3yB6CCTrTVJe4sR7bJZy3e2jGkUCR7XjLdt9vi4yKW29KnGgEign8WFG",
  "key20": "2D8rpBLqYgSvELGyXRby21Jzh4KifuSU3LFmWH5JHegAMe3TqTveLH4HXxBAcWUnEjH86WHwg5Hj51ti6rArFpvB",
  "key21": "2LAm4npsaYxZeDE6oWLK52Qe6G3VD6jGabX574kck4XEVga3on3Q4Cd3YwbiVWcQ8B5pDvgMjRtHzhTngLpcsXv5",
  "key22": "3M3TFcdP3TquUktFYF3nTVFE4tkDaNUzYQCKyocBvEWd5K4XwGFEHQ26DAZHZVTgbULidajoQcD8iPr7ZpFPLbc9",
  "key23": "4Qpcq7LbyYccbEyHZWGTPepa1rUbdW5gWNq754pGYAEAePi3DeN7fo1dnTrMYLvqTDB42DrTvphEGBne3t7kyWss",
  "key24": "kHqoaPkzAuttAEtwZZQwUh2GgT9tfDqPE1uDojnfg6Gq9CrojBEWkXT2yzpCzYSzWAEXomGrzF8i1zrmLMY6QeU",
  "key25": "3u7TEjht7j8o821bKCHyDhwKwVb7fAGd4bagD3UXSuo3YVyBuLwcQecwjXjtteKMzX4eNVRNqTPTWQH7y6i4S42C",
  "key26": "tQFnYnKEg8BM2x52rYvWgHk5qxaYHDjheTVUc5ARFSoQ9rXpdSCP6beZDtdzvMEuGzyHgsJrbTEFFmcKEAtTYF5",
  "key27": "4yQVPFGHBLxmM61nk8Y189EjV3EjSMVQCHewfsoFvdp2MHX1Ndo9XA58zngBfK3LGkozDZ8fza4DKECdCJdizyou",
  "key28": "56u5qeFY5N2e3kHfR8xPGyfiAT96DYDQYPbyHaKyKR8zqae7WJuVNCDULttqznAPpVGWfUsA1yH3EXXYaDJDiS3J",
  "key29": "4YHvsfPCiAeuJrBvVdsVM7sAR5vtDA4Yzx5MSNJR9r5NoJepamutQUCmqhqDaBPadL8j94xkD3fqiiP3VuM6qBLU",
  "key30": "32sx3tjfzUDXmcCdkQyvcvbDCSLW9UwsGfn7AeLXE8PihwqLnqUAHP2x8Usm6mSREJwDcEk17Pu99PXhX6G2Aavb",
  "key31": "2uSUL5M6ATcLkSnxZG7KQbNCJhQi8stJCuNffF9US1E6yaKpeCDtvwEPidZfztg7twKVWK1BmP7AARnwTBnqgNNn",
  "key32": "5haPvPut85aHjixt1d8wNnMs9Wf8QPa1gTkTQ1NBYBy6fU6wW4r9y1ujy57VD1SuyTsP2DQL4YysiieEkuK3cLUG",
  "key33": "28ZDNfqgPPE2apZjdEK1Muro4pHGjpXMwpidiXHCHnkf7Y8eJZj3i7WZnGhSQtKprffdXWToHtco3x7dsVUEGfqh",
  "key34": "Ev1WUSVfYV433DJpP9soRZcbnqsNj2dp4FrNG83tnEnfrdrutDcDauW3EGXgwqbBsZjNVadUvv2umpnyzg5p69D"
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
