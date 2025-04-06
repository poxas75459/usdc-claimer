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
    "5zu488quo31iFbxj3PqtsKuJhedT5fAaY3oz1DgsW8b4LRAgFSbjLrNAa7QRh4oBmxATdYfvSbsvBYNShHLxxeBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJ9WNQSMcY16JbdhPFiVBNsrVdr7c6KZ46jG8dcyAoeU6ACWLCZ9NUN8G7nhLVqhaiMovXmDefZTHhZpauaXeQQ",
  "key1": "5fa2XtREF5rRcLyQhMRBAvrLLYtdpg8LUzup8YK6G9q6iJF8S4gvKyUgh5amYnKvNUU1QWzEtawt8gGvdtSsn4Gb",
  "key2": "2Ez9RWYTQ3udrEG5x2FftRqNpkMxELs8zVxRRmPzEKNkRwWZQVa1VeNuoyqi5pjFhvH5p96KbtoTCjsQEpn9dL7e",
  "key3": "4reBBQJrguf8oC49K6xQPKMxoRNcAfwX6xTTDX1qERPD1G16PmcTxRwqLt3BdGWoWFgTiZeZC9K18z82A16rye6F",
  "key4": "5fQqgQ8EaUYMWf5JvGWgppgZne1fXs1zNapESDYP7QoR8WzENhutN6cFHAoxXjDYv6dr2sG9semM6kHedjv5henV",
  "key5": "4AvQYWJ8EGddjGTCTFm3qktfENgtt514FTvffK2Nmx7ToutSbv3RF41UjMoJ2qaJCRd3DfsWrMAFURzjFJiz3KaU",
  "key6": "64pXWK6qrLTstgoDTdm7AGtRvYraAfru5AiYDUtrQYmGkAo1EssrGZdRQaDgbHNt7qM5MWMUiMuWiwUS5mCX3Ppz",
  "key7": "4xzACghXrVD9SajHYuHLS9SK12xt6pXj2362m6Mqr5QhbgTENsBgMzzd7DwisndyzUTTocvB5vRTtGwM7zeUP6i4",
  "key8": "5a2b9FcncfttcdRFNJL1wFGkxPMNSN9sMQVUD2upavgvYzWnHgTHwqKcqjKDqSMmEu27NrbQdCatmkStEqU7sWXG",
  "key9": "Q1ziyTjtxNr3e5L3pDKg9WLDio16uNFp2heipUVhdQALJkmS3n2UFnt9hrATsKvTMaZpwTBq4Y2hAkdkoqTYS3T",
  "key10": "51GBbvYzhCcyyuwzPxd23fW3WLJ6rXUyG4FeELxZ1oEaDADZn94zVCeoMTa1qy3SQtWw6V7gb38twBp8GGCrQSxs",
  "key11": "kPgGxky3AxjjVV58a89A78e9BZzWr9dJXv8tBVcRYbTRfCLHvk1j6wWAsS2sdrPJf4npGRbseQKyu5YnfxC9ctT",
  "key12": "4Rh9FohQX9wv1F13gi2cdUmXFXPsbXnnPAJeHZhM7qBDZG6MMK37UYNeue3XBTsatqhDWs42RNXWyr5HkWw5SFg8",
  "key13": "BCRWWoZQieQh6wD6JdSj7V1vZaYcQHDvJXq5MzWriAhitGoQiosrLPTnv899NuC6Z3du8bgYPazZpTnnxHSuSBS",
  "key14": "4uKBnPA3QTx8zNts34t5v1yKixvF7qELo1QwRwL1s8CQTvRfYs63Hp3qvoTqLPPbTCzigLxSyLwCYUJJoEWHGh1m",
  "key15": "5gaj7bkZ1kvJ2F36stDN2JWTQSJsWUtVLBxLRcpJxrz1Xrx6nEnQARDJLPmpyiZc7y45vie3QwNr7R9hDgTrjH9L",
  "key16": "5mXZM7oG4h5hgSQkHMSHxoLx5ivbRqQh4i5P4upKSxzVbZUqfh3GKVC49aQzkmiWtbvEe3dogDBpLXyYSscddFfS",
  "key17": "zUgBwpx5QzETZowaUND18dnmKMRazzmyRigSrfp216WB7eqJiKzVjbWYkKQ7u2HBixHmiogbXrTdinWF9i6hNXS",
  "key18": "37hPvkRjLuizhrQDYaincb9podFqkPL73ke4ay82bm5LtuxA4hFQ5mDGWrWYPqsuvrZykMxDb9vE9coCQM2miBu",
  "key19": "5sQyaumm1qKriZcbSfD85CL9qR2eKZ3Gj1fjZJzWugpSR9d8rC16XcWDezSSpBSLFdCwu8Hn6io6EDLMjKMf3498",
  "key20": "4bajruwupuQEVfSimWFaXF4awduFV7iV28tbXDiQBvw4WWLUTMqtftjoDbw1cRgvfo3bGDwrgrzSBtNMe1UkBQ9e",
  "key21": "2NEx1K3gcCEuUf7nnja9cWfQUTtYJTqSbmWCtZGD6bJCMhxRKooMSvt9bzYXswSwxTeTaZ6Rr7RcHDXz5j25TjVr",
  "key22": "38XHPhFfC8GENHmu6yVftxDnioSG2GHRuWgVmm8PzVVc5Aejiud4eG6FyofeZfz7CqgZPZJr4narf2MvPjDBVTvB",
  "key23": "38psXtCkv4znBcKMWgA1hZy3SKbFu2nzVbwifaPb11yA7ZpzyQbGBj9mQkPHtngMUuppEgCtVcyL3uq7VLnJmxAP",
  "key24": "rE6sPdWEY19ZwRhfyxxAQxFw1zZpGExVNAubW3eK1dQw2WWMWY34eYqesdRTujYyMYsSmXHtauszm6ZugqFFJkQ",
  "key25": "4SBKhgv2Y5vL1GWBdfsYwo8gG8YFKzswJCgKeo9Jw6btugeXWydh43kEHr8J1bVaCpFonJjA5rFFDJ7payrn3pgD",
  "key26": "5HjSinLARcrAcRW6u3o8vEGphHHXPNQnxoQQdACwq5YWJ7gpdBzs1xnc9s2ir2PNRawP1hj7P8iZJ8VB8i3jkbYJ",
  "key27": "4SRznVxqSgCeuM6L9ByTiDmrrPEU68atJWxmVqsLyGxHYjAQRkyqcBetMmxcNDswo5NuVEDGExpjupEM6c4MCgGm",
  "key28": "5YvpvtBNNXxDFsigLxEiKzFeubEFuwKK7FkQz6pLFEWMy4KbAutAudENE5JiCjRuJP8afrJ5NAdJGw5eQpBBQquj",
  "key29": "dmt1njMrwHwdAV2WTMTJnwDaLAskDcfYonqNP1VJgNTWvbqakGfQ4jJZfDvVz1cbpwSW3H2cF3NGmAdCJRX9m1A"
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
