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
    "2X2PhSpkPQvgykrHaHBFLJ9GRoHXpAkb8P1hbyAt6KLLskMzAXiVcSSYdXG2rhmGuBWJim42fZQ83mN5XiCdUJfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LhrbCkywXbHV7cr6PWnZpEmC6S94KxmUu16pvrVxj7wts1y4VXinfyLtQujHTEgxQ899wgjgBcua5JF5TmTM1h5",
  "key1": "3Tb6rd44SAtMHm6umtzPzPhZUu4DJRvufaKmJNt9FoXBMCQkKjTkoFZyKvwQzPtXyv5pPUnrbD6DnmBGtzst5DLh",
  "key2": "55w1dPnYFeba9bK3LMRZ97FUBv2Y1mVUdertpzYYLomvkzN7QH8bwL9zMpeeW393GRGpmLYsrXUBof1E3oPdn58q",
  "key3": "5TY6Yt5fwtJn64Wu5MHyhhdY4ZVFE4v642dKEfuqjTyAGtsbVGudiTLpzwat6n8EYBXoXbsN5MZfFaVHy8WVm9w6",
  "key4": "62ge9ixuxCF8Per4Quj6kAUApAp4tMyAk4hFRbVsCfz1iVFa7Cy8m3A8wscdFk72CXGNKygwL4uhjhGPNpxfPq65",
  "key5": "4FJzCBYSpdv76w4A7r5qftdsaMHyqynDiAttP7QEoPwGBYdWmKDABgcX5RyoZRxBVwvLc9E5xAWkvUocBomGpskr",
  "key6": "2gm9iF5FXsdwoSbeh4QMbopZsJq6qqpFXXueZ1UYaw6eCBxJXo6hhqD5RRbqjhNfXkwDAzJQpeowJhAeqz5X8s8A",
  "key7": "4KgLpXcZWZZBMS3D1rKP4fBncY6YYahH3eFNSWbduF6HcbLTfdh2W36JTLxnFXfoDA3NAUUD6LCvEojWiSNUoriH",
  "key8": "65yMj7Hkd9VgDjuvbw3e8iPGaJsH7Von63YeMHTyY3n4ubbLoVBMBbZo4dYxVi2HLNNASG5rnsMJs6hQe5YMEzhS",
  "key9": "iAVejv6JzBdzB7cLAyASFTvTVRs41Kobt1PKiUwR8xrcwRjEcrKcBuZVsmTYLJb9LXw9mMQDA9B3owAtvCLTXp2",
  "key10": "5o7h6QwGfpNPn1BD91kZv4iaxnF377Y6K4ZDj2H9Yc1S8tYEBiquu5fkKV7nFqjLt7ocyEndsFZPuWfKCcRTs6GR",
  "key11": "242JhPZ3PotAyeP1Uuvx2dWsNC3HCK1paw1NWfwh7ggqFdGVTczK5FqJ9chSCt7cRkhSqwWopHCdPE7ot86RngBZ",
  "key12": "4Jz8Xmq48ziaFweL9cHHMJr9qRDdaTVFuYXKTcNNU7Pspf4oRp5wXEbMjHu4fmfMBuTSw7DtFmRP56r8WSt7GoRj",
  "key13": "5qMUqAQ7J5UsjW9EffTUrWdcpwaCoFggVUMKB5vgVmhHNhePYShM8ZYuCUbVpGxSnQdrv1ez7GvPziWTdqH9iqC2",
  "key14": "5rc5k8SyDxbsf12tT7xnAKAzFenhC6PMJkQTaEnmHpeGkdSKKCcus2biqgQSnZeKpWr2GtnNohtLdV9GTwJzVJXK",
  "key15": "2fZD1tpkF3s5b6XAtGfME2Ye4PMjKUbAEkSKLUKsJk2o2YuypHphHrNm3QTzFVcyVbgQoPp2h3DNjWqnWA35qDbq",
  "key16": "4ZpfrZEhwywHR3UeFyvFXYvF2Z9hB96ecRuyTAAwoZugXsVLKcwXUP33LCpAXnhMCKGsqmE4TnpmsDrkzsyQ8jiY",
  "key17": "fRRiDX7fMaKgKAFv9UvtmPFCMVrzBtCdMPHvBdVKqdnU8S7cArBdQUHHVxCVmdy2jmroQEbj3x1XukzRQKWhbns",
  "key18": "2Xz1egRidXcur5ebvbG9W9MjWUg2GRCxGomVfiqByD4sdkB3qn6GiwnruUXzosLKd5ALgTW5V6NwioADVKC9QwRa",
  "key19": "kJAqKX8z8a5Av8qxaeCJckpZv41enwXrcT1QFGbTL1qzWDoUEDbq6ssjnGnxe4sZwCb7fL6vj8WvgE4TLDy6nQj",
  "key20": "4xpnkYAaCPeGviSCYWKccGVbeQvzuh1XYH9RABBfTk6RDVksMa8zu83ZBRDoirHRHcPrTkmKVLBKZRPq6RZ9USiL",
  "key21": "5wYcwRujBgX5qerrfzUxfWrmHmjhkuZ2d6wPXqkUyxsZZWw16zkKAKw3sZc5FABcfc7CBNgZt5FJafxnLnyDR7PV",
  "key22": "2iRnYtC6ySfHeWghCzie1SiLVLftxtHDQPKVrdonSKy9QmMbJqK96DPE6uaqtfiowZxyz4zAuqW5EeNhMxPVgLRm",
  "key23": "4YERGsgKqRy9ofuYqEKCcHbwimNjUg6g2CVo5VNZHXh6AyzpFFtbatb99qX9TyiBinUZPrPB6LR4PumjR5AAND46",
  "key24": "ntXpsNNUqp2axALhenYojNamyixDGx5q9RyGGeNQxs6uqHt8Xg79WmRrMBSW9muKkWXxWZD9RMW2rUvVeMFsnrR",
  "key25": "5ASsyd2mdrnfAvnYCvNFLbfSe7csfEDqYh2sQozHkkZa59RGPKfpvR9T4oS2UAsxCbaKY5paAPNGisFVJQv7Z6kT",
  "key26": "2AwfQEznFbkvqycQKdMx19r8EAjt7AfTvLYBpqo8SPSK7Y2M1itxAEBPjEn1DojstBendB4Wnn5VjaQyT73VVUoF",
  "key27": "G2XF3d4VriQoGCaqD8b2q9aWmc7RhGrsNexiPn6vEn1okSc2ny314vxukMeDbEz968voiaVDbih8BHpFYAvyURr",
  "key28": "3zUKwcGKuAhtQTL7b9WcxkjT6KPN4fV59VP47ifyrm77spbDnNZKdGY8z2mRhNvNhW4zjZLp8J8VY8PjeMkd2pKS",
  "key29": "4piXRWdhWRSJsb3r1DGzWhvhfsyRAYKQ1tZJiULoXRdm7r8vxoPXKBWaxP6rLnwX6DEz77Y1Cv9Y9yp621KqkdYb",
  "key30": "4zk7YvbCBizfcxySrPmQUxM2NvQ6rbQn4jHpvZBc8f5cbzqkU2UxHQmbkSwjhggYVNsdAmVyVMiaa95AzEVFyPSE",
  "key31": "5Mnuyf19T1XPXvRqKrudAzwMDyDQeDZBmnkETfTJCp1WWYsneSCCbVktNQCBCR6UAZpPsW1Xb7Ptoq3HDFiTuQzC",
  "key32": "5P4vifqiLMvb1N1qFW1sz1NgAEuSJYFDtaF6Q9cgmca1Y2viEgMTqNuWPvku1BZeLN6ceD727ZswegsLFaWLKTds",
  "key33": "44ZFL5mpRoGHTGzkTsKFcuEvP7E4aRuWdtdj31B6PDYEi8Gm6NXTrZ6Sa6HJmwBf6eCwMkAaJGcV6ygwENh1bpzf",
  "key34": "51F1jcM8StjPfWTb6GrgEmh7RwhC6X3eCdGP5qAiFi8GkuHTHS8ZzSqJPR92P9tx936QrqDs8j9RzunV2GN3t6Vp",
  "key35": "39vJDC2yuSAxkbHeQ44gW2DnnMb6s5wx44jRDTDW1HTBwVuZ6mc5iXgYnZcXi6wFvzrK9f21NvPTwRtrYQMPJuZT",
  "key36": "3emJB4yH91UDX42VAC8tzWikwTLPZ7UQhyikWjKz9yYY686nHoRFTAPGsfREch4S3CiWpZwHK7Jzr2Nfmqyc3EiS",
  "key37": "5QFMPbZWVZN8kKRMQ1FFLBft7ca45z7Gn1UG29oVM9dC6PK1zWyja5c9ze1hWr1yfLddkNNJcqQpWUqbxcUxPNb9",
  "key38": "26S1UrjNKdkP8anKLmtqjBC4MpRtWyteY3Ld3QUzAKzLCdvGHBZy5p7veMDr6fU8342P3sZHSYeFbSY4ws6sQR6N",
  "key39": "5exhecAtsoJh5yyD7yBmtfwqev2WvSR3YRasFnX1XGG6BeP3UVMVsevYuLiq7u9f7ZRNfzA94SFoZGfuhSJux48z",
  "key40": "9ZLta3PJuNs9mXhJJE8EcvA6W52ct8bZe8gpWhjHyVFQVMH2BRhGqBQx2yjrWnY9mTh1ePD8UKYPWbdExAoVBq5",
  "key41": "45eETSFzaDUvknrjyRNWh7vakrQiT5J8vw7aH82DCsRKFJj6W5hAq8QRfqwtnhjsDiP8Q2HvD4AAdsLF76WGUByr",
  "key42": "2Xs1wUer3D397F7EooiR9y3ak7yVk7UViUPnWGkgBNyQ7BVDXEgnUbkN1trTqEUQDcbZH7Hb8RYBnXKGu9bi5CbJ",
  "key43": "3CfSxczdj4x4JdNNxgUQjnTUHLHXfRgic3ZYfaF52qvXDig2UhS3TCyGnNez2sD1yg5NsQ4d7WSykbD9UojamKnB",
  "key44": "3xPKuGpehzu8BJ3nHZJDiEWGmUDe8cnMhZtL3BDNgCKVP9Bn5tNLLVTfYUmy2RtxMRVV2dX3p9i6nMegkGyCgpN2",
  "key45": "7n6RaKWy977shiAoHPEzgsZRPhLhnMnvaYzEGHUchnBk51eCFdPk1bx9msCRyCN3ZtT3kDii2zsXmRFK1sXbGAJ",
  "key46": "XcJ7hdMUGpJzkNV12B51BQsLaohJAHWxHjsMWweh5gesrC5CYbipvZsa9Ux36diRdeyamdKQfFWzQ3AL2NPNvUy",
  "key47": "5JSj1GrhjtFvHRcTjqiJHLXDohkNyKJuTE1GyS24zjRZhStdK64mJ49nS7ZuQYCDuHN2RSh1Rj1SdgQfuLDhfmZv"
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
