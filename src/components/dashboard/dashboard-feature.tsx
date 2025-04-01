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
    "8rKxzKtQocVFqwUn7cdgUt74oBVGKEhP4qHsqGruxPXUgvpb1DYYMzcfrS1jMU7CqepUrioxqzik2kXqn7wWcYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWENGAmUsgbpnj3otnuV8tSvrWFfTaheZRyS7mpkNaaJcUpbyiSJht4eY9Xvs8QLxFEBopeQ9UH9mf9epLiDQNX",
  "key1": "CbLWvxJsRNVpqFqec9CMsgoBN8WS726UkBYKcFTBfKoa8iguAByTX67XycXBCFYUzx52DST8YJUSNJ8C9no5Rx2",
  "key2": "L8KyXmUVFf5Diacf3C4KHZrBqAJvNrtKEoUBmzvfC6pjsVVZPa2XxASfBriBQzYYp9Q6rjkvWh8XKXukUQJBPV6",
  "key3": "5UXLK6zNL8Ao8irmmJ57buT9jSpZzWaRu36vH6jbNSWWPvdzYYWoTzQ1vh4xw9FzBPZSCiuS3hngU2SgqVRVvRu9",
  "key4": "2d5u5rkwsMtTVrtQy4qY1AuBsR2RX2cxPje272AZLbEbWx8m8P2atnT8djKtdb5ZQ3t4sKtvY1JB8znr6FpgwuBf",
  "key5": "2x2WwexncjyY7upCNHP7WvMRR2uBo1Wa48F5sXKsWqs3vxybJj6butacviijt54oNnYpzN9Q5ZFNbSFNQPsTR1gH",
  "key6": "3qevNioT5k63vddPSxdoa4FLuTS6ca37YHXoDA8koPDJijVN1hTWe2afP3Q6JbZnjrTyjd9p5iYoWSwe4PV54JU7",
  "key7": "379zmoNnoUd1tWWA17mPwcuYNFFWodFsbhKW4xmkrNdEcfuVaQWkGchdCU7gHJrhYR5GX9dwM3qLt8mR11gDUXC7",
  "key8": "2mU5dxHwgKcAauC3uZD7JXi53HjL2begvjvHtsHLGDBraqSUAEyqWLeBPPZMChdzmmTGzJH5k5g7EDnsDNPxTv2p",
  "key9": "29QM61QfHgEtbv8QxhoPpLpAc7d6izNkfQRs2YCiTDwAU2RGjELGzgbPP1DXNRrdLTqkf7MfESL4NCSy1FXgD5aX",
  "key10": "KLsJu3gBdgvpewZyVALNjAvntT3jGtSVyspxC4sHire6oLxUhLRJWPFScymnTvjZj3mMpZkxKZkNNMk7LKduEDQ",
  "key11": "2mbwjVeWGfembnPmTVP1Ra82r8pUaHoh7FZyP896T9XtVGnpK1GLNd3YGv22MA899rZ9ET9obov4Jo6iEck3xRmF",
  "key12": "2JpcryH9akHhzTDhypRPBVGMmtuseKMMWAigvU4oDhnrBT3ysGhDQ4MFYVpEQXJ2rrroF9AFub95e7ko4J9SfVDw",
  "key13": "2USQU523nx3bfvVKtpNDuCS6REZLQ1zSsybhGryE9bDRM1K2QoGp82C6VWBduf6TeeePBd3t1TcCEkX31kxPERex",
  "key14": "Jz7t9G8rwkAJ3WCmvrherXjGavjNQvyCcZ8G7vsk22haGsYiRLYsGkdwfJPFfTsCNDwar5EbqhLPsaFnvNYaZeZ",
  "key15": "633QketveprWWXDkbgpUV52mAaFowGMZvxe1HYEZKF68bzZfsd3KgquJ7Uhitb7oAATJ95m7Zb6PEsjtrs7y16aM",
  "key16": "4EiTNCf75CrX8JvcaVmu7vHQEsNRNtC3qN6rJ8VBfmRVQ1vk4QRwc9pWdkzBBMFCDb4wNM76Xgm8iZcYuLPcAMRF",
  "key17": "3PZ84H8PtaY45ctHb2mUZvF4SZejXu9buTa78JrSvh2HQy4FfRHASgaSXK4VfWjGnPoF4sxJuRFuJRre3tNVtUkc",
  "key18": "279oJacidY8ZaDpSEESekK3QgL9HzFAspKX5RHqMf3ZXF7sZ3W6A7KbijRMGXKZWyVShL2TxnkViybdaVGtCMsMi",
  "key19": "4NqCReZCLL4QSrHJYFZUKAtUVQSLgWgBQ1ez9djqkcs8hUgboPzVQRpjmc7DWQsdakTJpxmtKGWfut8HpjZaZWJQ",
  "key20": "5UcAfacf8gtcRC72zwRsL6gCFBAjhF48bdtxZK5fBuXqpxprt5kzCVDqdAKsDTyZ21svDWzTv4RFy2VSLo8AFBKg",
  "key21": "52oMBPbYZ67XMTk3jpudxnCLQoGaQenpyBS9sJMm7R7XQ1BmjPkYpeVFnX9q2Dvy9FLtNd7KmxrLbvtcbU6pBqKx",
  "key22": "2zr7w1pSJ6yuiL6B7zZSH5T8cFa2hmkFhTVRsUZQ4NPR6zKq8zgfvZsNtguM1HVh9z2SNBjn4qUPNXWtremEJPGq",
  "key23": "B66bG2aBfRc13xJLETjvb59B4AG3sUqAB9z8MbUAbN3JKLtvhWVFZSzUZUekpD7aPc9iBT1udszsSkTonhqYpmJ",
  "key24": "5Mjq1WAz1188h3Vea8REEdQsFWDD8SgCvUf42c7F35iZKh5KPGFW5iR2bm9cb9AJfdDH3mbC1twhgrZW8V3hJuHr",
  "key25": "2BjrQReAGwR18XiDbcmKvY5rsbxmqGEXvifmd57xNxqbjDcEbTT7aWc9rBWmsmwfzp6zwHtsJywrjpJHm1XqBwtj",
  "key26": "289e7An1F3Aws1tNRpWJE6yhrx8ckSBa9TVQTg4Mg7mrp3AznLYTFG4fFGfM5A1oSNkxaDE6yXnZrtm7FAWCRMuD",
  "key27": "3Z9i4zGoq5g1zMsnabKaJR9kA3yK1yJMHZoUKD8DhTdzt8wTT3simaa6cqykkwA3cpY6Q6SDyR7pPbyA6rb8VvqG",
  "key28": "2rE9g2UiGjfNfVxBURik6oFPuPXbhYBxDYFhY7jqQgf9tEoCQzvX6bzxYjkXP3HqFaQwddEd2ANu1Fb8Qm6KfdXG",
  "key29": "26LqRzT3h9G7j4vMcfuv7VdkZe2zayYBxo1wQK3cVMBMYWozk9diCrLfY8CbULrPxEEzU3emYLVT5B7aDyESqZmW",
  "key30": "2gqxJMBnwjNNjwjPYRp1yCzNuQLTgktLH5hXj9t5iWEjqNCT3Fatfzb4reaby27n2M3mDmk4FztSZE8XtdRub7iN",
  "key31": "3WzZB2L7ZhKvrKGfwxN4qVc647EX82FcZnhSR91nusZVLYrvidGM7pj1faKC8Dg5GLBGj5vLo8zsjNuMaetR9mbg",
  "key32": "2dGig4CKk7HS9mdruahxbG9JGNnSniYP9QJQFNR2GTDePTJqVRVas1DGupTjSzvBBZ37MBLEXAtej7X3MS77x8mP",
  "key33": "4midvnKy5dU4LEhNwYkVAp7wDpcdNGAkATvzhuUUaQhJ4TD1YTjcgsPnociertBwfTN2jzv9irE7NPCotBGusQgY"
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
