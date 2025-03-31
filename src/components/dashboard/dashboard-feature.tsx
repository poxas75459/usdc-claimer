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
    "2MYbhqHVyu5sa9Pvcx8Sm947RQznv8S8DFPcSGn9TTUjEJvyCqLqagka5YrW1LPrHjmv7QL2oqrKduN7KkL7UXrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MedM4EN8qo7bcfWqqgJTGVPRvHAztPuk4DZWzdWzE8QWHwLDhVajdUK2qzSsjdWHy8MBYvcpBr3XsSMGnFuX1dh",
  "key1": "2Zkpv8siy7q4vNjHBSSYwPEFBBC8KShx3r53YNj2P3f8yHE5cTDfeCx1gXPLFhZcovfS8Kat6izh21zYkh8ia23w",
  "key2": "3Rmeu9UHrYfq5Es9bzdPg4obuDVJYPRwJYgvuHoHsjzJWnMZpDGdxftwnC2nkpnvd92uwbkjuG3hLHJQPeY1DTjU",
  "key3": "5hC8UrW8Q8ze8D9F1Q6Z4RRbZd5rkwrmMxg9aEq87QfLyCtAZpM9FyGyXDh6mc4GLpe8JkaRmmaMDRu3keJtfTxs",
  "key4": "4w8oGWrYExQL4giMuZNEAkGc1wCi9Myk9jk7ef7PzKYXivUZnKzufYNfQ5cj5Rkhfd9arv8nRix5kv6M49Pq1Ntt",
  "key5": "3ykm2RGFt2SiGqD4UQCtKBTYUhxWVZU6iAFF3ExFXsH5NSYUTNySiZiDTUVW3nf764ca2nckAkX5YvR6ZTGKdMuC",
  "key6": "2iKTgQdjpMhDCDvsTMgyU8qx191NUGLXFpKia5ntoddg5wNpSGRSvJqaLWjVcyKtEzYRnRvHbb9L2h6R642ax4Jp",
  "key7": "2yZ2km5B9k4FLMo6fUusLPqxB59Dq7GHbEYcpXMRzWRQdk8usDZcfkDFBiwEi1JvWgR4b4aZSvx1KoPCXXdRjY2C",
  "key8": "4EWSTxywBtwDeZVLPKFzT83j7Ev6E5RP1atmzd7SfYqdhs9CWQzv7LV9Hx7Rg3D9KFxvq2pCLybsLxERv86Mp7z8",
  "key9": "5ZeyRReKVJBBCJF6QJpUuJ7ukUyxp76NWUU1112R1PMAtgDEpDWN3UbFqnxh1HWNgGrbLDJ8MFCm6V77csv2YhuN",
  "key10": "QabTehqDmtMsC524Rh4CUvwjLSwqHr3fXJBVY7XwdDDeL2CUSMLmrPNpUUztPeBLpcGNQ6ywizwaEhsgAjnHJmn",
  "key11": "Xsnae5HNxmGCHYGjutGcn5ekoQXM3yuTeeqdjy18FuVbSowDdhyn4M3jKr2sxKeYz4ZUVntjL1NHJmVu1VPQ8tc",
  "key12": "5bBKjB6txzsAzNmsQeMjXWTStbAKVhcfYKgee8hfB6V12Xe7hi99gFtujKuVYy4MQWzbUF3GppoKuxu4cYNzthdy",
  "key13": "3rMZgp2xmV1o8ar2qqWaYKvh76p8UgeXGBBCeYFPy58do1g4K78BiznWbLWPmVBVAkwoZZ1jUZ51GR8xDR46NVK5",
  "key14": "2USL36VS2NztWSrWtF1zTwrQSUjS59A4evJjq7gKqDkmXjBxKWcD1sEbKocLUq8f6uMcvXtHC9XmuJY19HhPhyHa",
  "key15": "4zEpeXo79mFgC9i5TyceXTQpzNbjat3zbYUhqELcpvNmxGgFsyxEDhXuukqF3rSYFaVdqURd3PTzPCcvagyCohKe",
  "key16": "5eAR8XTr7T2U9sRfZoGVtiweBRNNL3XBitGv1nXEPXCvBtivL6V6LaV3zFGw4bvGoJQQeT6cinqg8PeceFPBdMxv",
  "key17": "5VgyD1bEih3k2TBWgiQ2GNn97aSvdxBUg7YuTsFSwH2Qk5sPpJteYxX9SG2YebP1Fzmrw1VCRgJCjmhNdgXkUoT8",
  "key18": "3D8nkH16ZMndCxdRfz4ix6RSJusUdLcS3JvErBR2gF8znqEvTeyJtUezPNjRjLJ8GaQKiMiWKccpJ7eWS1i2g6Vs",
  "key19": "MHCMhXQc6MbgSoYywuE2AwbQtJQV845v71hm3YUE9ZJyANFYhwtzz6qa1PbEMbVGNyqioUX3e1yG1KGmKtnsc6P",
  "key20": "5HgBBR2VwgPMht4vsZTofUpA75E4iWf9yeT4UD7v2JX2nEgKXkeMA19b73ic6v64z4ggU1SiPcbEGbZMN2daECso",
  "key21": "5Bz3z4ciLokrbNnSS7tcBnZLZwSp9z5hdqoUJM35UUjBR99qTrkbjKyax4USPgrncAt9ZAkcziQQZhRbGrLtawjR",
  "key22": "4aLiPvwriaZrRD57tUsy13QqaPXhW9DRutzz8zbh2p9Mk5Tgqqe3bw4jkHZMx815aACGvcjfhkCJJ1pxa3i5gAQU",
  "key23": "8TbYPKXcBgeWAuEkKdjznHMSfuSse86Edk3N6MX6U4yRwyuMJTnR1Ca8GCCLrigA8Cwj6SgtwGUhK8sQPd1SuRE",
  "key24": "4EjEiHGvi6xTgTVWwNXMxzqeVsetTQnBbveUzrNSaiLN6kx3TjFV9NZ6uBwjuAxSvuVjtKKjEnXAboVbDUbWeX4d",
  "key25": "4XLFsGjFxTGdoHHzmyfdVTTyfbsnuqLJzkt1DtBaX7CGQk8RtLie6jLAG1gZJsNRh25HiSqDStFBnQvg2UisY4f3",
  "key26": "3asiEAAoK5KJMZ87L95nzQA4SqwFshmsibhw2jadP2W8LCKXCbEvJFtQPvRhBiSHvV1iNRN6a2GZCX1V4vTkv9R5",
  "key27": "4r4Sg8BQDUcuBr7cK7KQZ63foyDFZgwznFRWuaohXQhRqcBk8ceMqAQL2qTnKnxnuSNhNcW6CYnySBB1WY2BQXmV",
  "key28": "5x4o8osRj22TXCK5xXNfgGDp6NsZ5wdCxVmJvXgrQJmc7C3Mc5TvmBCsMszZbLUj6qSjtEqjEBaDnvjPc4Zw3JHD",
  "key29": "59xZ3w8cQkjZjCh8mK6gL8TodECpQayRSbkGLau9zQowXQRqebSW4vUhGhSKTNvvTVoUsQMpDhPww4TQC3KdLVgF",
  "key30": "2rAPKpzAgmtrCfoeBsB8cvMSY2qyCqBWcRM23EKVtYzXrQsmuYGPEEb3ScdCwgsUaQ8x7wBU35ratLKRsXABGJVQ",
  "key31": "zm8s5PRtvgRaV5nve2XkW87BhUGLDn8BzeKYLyFQUip19g6xbp56TW2jZseeNDcCgZ7nu9gyGBtbKGHYxEn1mxh",
  "key32": "4uUx9EL9ZsSbDJ8W5YZraY4yjKLCUYfgTSeEfowaXc5MzyDCNPsHdN6iEUySHjTv9QjUU5YxMRsDMPxchHknc2Fd",
  "key33": "67b99d6UeqYeXSruykpVphHQxQCQC2Za6opxcc2QqJAiPJqeAYcSxGaxEu3zKe9R3uZyegcYLW76c8q3NJ37evtk",
  "key34": "yTJHHnfbQGVjnQHDLY1AdjWrGmTJGgKVA9cVSs31CKszLVZrbeo8uqeiKaxipiDT3dFMjnTn2rvzCnBHmP6XsD3",
  "key35": "c9rGQVcneuSns1RBe1xX1hvPvwiShMpocP2SPZ6opNZ6cUWAiAw2dp3WWoo81oocxifBkQdPh85D57mrWsmK1Jr",
  "key36": "wXtXWCnaH1RVYeAdCXquFx9DYnoXDHqVvqML9vP8WQivUgQdWqyKb7CFYjkjYceBBm5PD4HaR3r5DyMhLRJFohm"
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
