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
    "4bvH9YCgB6X9HDCxExfSuWXks5GhfLroHcMu7fuucnF2jE7ZHFBXCjAQKvNJryJz6MbJNeMJE6dLuhxEGCpeaaie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MXn4s8M22fzpFutPQWGEYbDZVeSYXaLtJr33yaD5rg7rn1WFZL3jguwSM4sCNgygXSvJiFtUgheVcWWs3bEtjik",
  "key1": "2Hwfrwd4nzd6WcG8FeMjqjJJTkwtM7C6fWA6FKBfDNF1pq3jrU8rqC1kJgjBfoEuYFiZERCochNpcXaFyBxq45wy",
  "key2": "5Fs8usDXvGBsfKs12k7jDoSzk37WHMwRCvfGTZfYx4Fe4fz5TuwntS81oUPtYjPh4tCkA9pbG17JDqjdCUkSLpzR",
  "key3": "iWbfT5kwatYAW6AhJbi6K97nEBxAMzaMkxpra9T2U41zQ8RcPkobdW7naZEHcUdfN8wNwTKaCVk8sttDh1sWPyb",
  "key4": "5rCudaJxW1hU5xMmMRHnYXta3QWH3jE1xsQmEVh6syiTMbnWfj8GDjgtczGyJYc3W2WYHeoHceWQMbzBnrT4G6Lq",
  "key5": "v54NuPBtBSkj8yf89EQWE8ZMQMoUnikwDem8rzyRrX4hn61m7LDwceBDbU16nKGVDzMqECGJaimwYUbnrQ6owkv",
  "key6": "4UfBMjMtsVoQjf4pue1rockPG6oUYoARNQ4YvpspsXU6m1enokmEeodX2rCRKW5ntWC6ur4XWa23YP7sGk1UFaSP",
  "key7": "aUgwfMndwARStvGiysQSZ6c2zv7cBnaJenTZ51kzDJWbhqAArtYC2CkB11gCJHbB6FcyVDHRwjEK7QH4TCXz3Vo",
  "key8": "5pfaNpg6zaGSatoMcJfa8386hqGNJ4rfKsJXgJozg27K49MenoVYgfNMJ2H27AdbW3co9p4BAEP3rwV7T2NHP2xk",
  "key9": "4Kb7UWGQ7xoYhrNYDrkgMruXDpjYogVeD73nVDcfA5YYVq17vy8ihxHLynxPbUxx4jvwKJnrdphzdV6jVQNJFvpd",
  "key10": "3pFaPwhM7dMFy1AUp7vnEGTWRtVuCPCQWUnMgP8Ddc9F6gAkdxiyxbQT8yKaiheVRXndbsMdesj4SUa5M7JREY68",
  "key11": "EbCju51LHcTpSkR8y4XDsp4RyuwGHxdWKi1G5p69PyVgqm17RBGAgpX42eHqXTvFfSHNYVoVXq25MNkV6388uaw",
  "key12": "FftPfyEsckr8fZ8nahTW6DzRaXvYQF3ZxzpU68s4SRdfG5LhEhcFY5vB2h2GDNKMtNwDzHYb4wRUwXVwjFLrLhh",
  "key13": "59Bm7e2B2oTqUi9ssTfzEnX7ouyUz7Vzo4P14TTLCSjQKdk3FeEWHubG5caS72Jf46ETaF5WmF6REkUxBbdWZY73",
  "key14": "5iAv1LixcMQc9hhgWiWQSCSTWnM4ssCGv6ofuAoY8CM4g8Ye5195r1PAnng7XKqdHNvgUebGxXKrjWH8cWeBLvJo",
  "key15": "2z3XY6E7LKhtNfjeErC3nhd9LNsHQBb5PoCsw6owB5DZL9YARWA27XMUz6fLjjrGs46UQL7nemJJWQWm8ptfKPVN",
  "key16": "3eLHhuZ6rusWq1m3BCR2RqA5aWEzcmtPLe5JxBqGgiU34duKZypJ3PkQ6eceDNu2NrRKDm1rLNbrjgvNnZ9Pn9yc",
  "key17": "41YkcjLfRBMDmmGgZNPdNHbSkPiBvpa11u93aWu4YjXjMswGpiTSACauKx5NbEKKnKpe6utgoPdfhPhnk5iwd25E",
  "key18": "5CTVdPBGS7n7W7aU4QszDdpa35Dwhnp9kStzJwxtqoRz7v9aV3nSYWzXUn82WQbYK75BxP6sBbG9GPVTC294rndV",
  "key19": "2XaKXaLKR4LhRttYF3YYo8KKJEhFgWU9JGNCAc3aVc4RAoEPTvk7bMTAWrYXcMUFKjMrqNbCtvaCZ4RGMbVMQYtS",
  "key20": "4YE2d6gRNDNEpaeb1SfbzmBUMURN7391NFDVTRYgKFYQVKMWnxfFesw8uLE4Zmk5kF86WFVKuyArvxjFhfw8GLj1",
  "key21": "ygUVgYE15gFLUpbEHyLVjzEAfwj4SMUcLBoDHZZJsvaJNT62ZsevraNrFze8LUgdYMpVbV6gx2D14Jp3MvvsE1R",
  "key22": "3SqZPPAXzTCHZwQWbs4NYV3D3P4Fv66EwH3JYeYyobAPozBoAfc3EwRgcYH89E6mLPHmJkWiZ6QDEuHxZbhxQVw3",
  "key23": "4MxhwJnPq5fxFGrxyJt38HauvnMBB6sueE6E2wDGwavJS6fYBW4Q4ffATYWuQYXVjisuKoW6AuCtaMLhGstN4KCc",
  "key24": "4SN95mduruUX837hRePJ1CDhgfpRixGAQCh4AG7pvoLJFrzxATb4p17YSPKBuJeBHyL7dJQazXmTrkZHkvogWhnu",
  "key25": "2Thstxkb8SW3aV6MKxzonDNn9yiD1S97oNxNrjNi2DDd84YEMihBoDAiHPhUcdMDxwRSokjTxz2vV9KVU2yLaHud",
  "key26": "2MTm5gwfx43UmvjwzuHucY7ggDZggK47Z1SicT989hnxhMGPCHHETECP24NEePhzxBdGLpvMQnTUpU7YwkN1bFKK",
  "key27": "3kKuAxgYK4v41hLfUsG7zCqZtjeWiW1uktKQc3TFxhsvYXuGAtBHecz9rPwRMQhvBDfPCjskzRknx5GUQdNufNae",
  "key28": "xGzRPrBmFNkmHxgvzcHc3Lpyx1xho6XMcaEgyQpCLJH13CBRAyd271ouijAyXb3c7xeSd3gsNyemkogBYS8nBEn",
  "key29": "2XKFBdNjcu12dmXvCtyviaZteKuMNxCwLJSTSs8dRKrJvurdMAkCEfqyb7W2te6itxssLaWU9orv7j7R5FbAm8Lb",
  "key30": "4HrtJDGPaRJ5gZwJnDoTfb7pj21f8nnJYRBvF2Se7NQK6CsCzaEi6fdys6jRL7b7NxXD6Zbq51KVmZJDNbasotex",
  "key31": "59cCgFVzRjH39nq9CKMDkdwEf58aVTbL4gH1eJoJd3MzzZcCZVqKmWhbpHsyB2Qa7Vg2jUycTfp2fSV3mgjUE2eu",
  "key32": "2aZ4wZfqJoVttdmmRyCYtDq8eqCwfGGC37Gswa52uhap2b1fFGuEQYWMV9JxXwKxhSsFnRAv9WLprXwoJhugnacg",
  "key33": "2Zn2Ndk1VLkxyFT6eHfvn83XokN3FoksEAMn6Tbta8b5U2pGMt7v3L78SjhwxJCfoWaGaXgDxYUGGUnH8S6zWTKB",
  "key34": "4RefWPJrarzDpeE323uvoJPWQBkNjp6kh8njAFw4KuhfAd5Lnv24fPMoRo6BzruzhrVs6SQUoeyFvadMo3f3X4DB"
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
