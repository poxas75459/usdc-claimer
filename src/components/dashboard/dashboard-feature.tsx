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
    "3zovthJM34e3kWqFNW1gf3muNLW9EBmuCnDu6bvnt9jFNz3MpyHRw9ka31n4xG85PNvfqrZ4ShCVnnYWLRjn1a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5EdQj6RcWh5CPZXfTQfg3oCoEbZv2zJpg9zcXQwDwo8Grv3b4c6DUBjW6Unh6BaXmWpHB9uhbqiJPqbX5msSzH",
  "key1": "2umsc6Hi77gxuS397N6Ago3a1TiYoEQDUd8BKCSb7NmiQPK3XDnBWF42QtmKiNebmLgQQS3ZtBMmF5PhCnGMRxWX",
  "key2": "53XPbBTjkPJwu68kApka366WtfBfXcRMBBQzpDzB4PqmyuVbfEqzzz4co3omo1uAeojzBaPBMYRxGjAH2AAkFZJD",
  "key3": "pn1zR8xF2HStz1kKxoY4HEMdZKhtCYkyGB3nB86Puy9pFTDJDpnPeytR3NdA9VLJA4cQSzi7Ry7JPUbpMAT2LHt",
  "key4": "5eTLLnAKSfYQ5EA8kHVHiUoru18pWgtjCc57mbLTTSXcUwX7gu1MxcgKQ8eUDhBx4UNZ5Ls5Liqe2u5eAckrXXTV",
  "key5": "JxVpgzgkjjh2co16smzJ1sAvWGaAWLc6fDGd4P9MoGTKErvKnmd8ecaqgT6ihG5FGRbrRpQZ2Q3LJmjq2MqssYf",
  "key6": "ZjABAscWkaswhAT6J9zuSEqeGqcy88kEGVSdGbsVxrB6RBF8UuiATN7xf9trBpMKgRGbcQGHpFbCEvzzwcayzV8",
  "key7": "3J2KAPA5C97aEGsH2XtHapccpDHEEuo6TChC7oNsJWxiJd6R9kTxYKQPxshmCo2EVddkv26pp44mLcGAMYDjbJrm",
  "key8": "5NmEfejjcYbkujf7ZUJNJYMMALjb51MpCCKQxYgyg66HfG8rSzPdCKr7Sj8wkKJiki34pCSrBQXgXwmiXL3pXwtN",
  "key9": "3z51Y5YoNGLYqkRaTK9X6825sZQhW8gfY2PGKFhYWDuFR4gmBejXS7u4hAXPXttPQFqAFMcYS1tiLf31Rm6Aut8Y",
  "key10": "2yhJHqGDpbfkLJvEsncfFwPymR94dFy61Q12z67tSkExqTwvouCsHPSujjRhUXuotryxQ7zV7GhFUe3ctPVqA4Rr",
  "key11": "46nZRWZaQccK5NuWtUpu3UVEKMywsyYCaAA4Bymxcbh2cvvfnp4igEVGmHUzUUJ6t7pG2J9bLpVFwbo2sA8E9oag",
  "key12": "47KVd5UyMDPNj27weKXecsdZEgpPRQiCxe7MnhJU7FnyQABvDvKrFMrCc2mZCuVxqYtTLBGUZ6UHFkrtq8aetmie",
  "key13": "52B8bQe54r4skiGvNsQVT8yUwKiEgUPQzG2FeTu6KqkPXrHAvaQXiatDE5yeGChgXawUZ2qHz8uQ7jSqxYpvtaAQ",
  "key14": "2xYvP18xeWLurQbCLv6faEQ8orvRLQ2A1LUarsjezrEC3VkSJdd2UhYNkLYYs3666QCCaKw1ZYvj92mGiSzZ4jxq",
  "key15": "4B7eLxcVgmrtTniHqYetHrUztG6sn4n1jdNGefCkDnNTMEj88RMdfRMyiGddYUWQn2wv9Ye9FGFYhtguiC4iUmRE",
  "key16": "32T33EEc3MFjbosfZSYCiBztea1ERbhrombDfxqkM53wuyimzkeYGqPggqpLYacy8dQnhjwasRgNWXgqUVARXPgm",
  "key17": "3tQyNG9C4aueVJrfyZfXZZmPke67rktJr5muWJXRtkarLnXx1NJRrR4zcPVFPcVP1yMAvVBE3yqCR51k6P31vQTx",
  "key18": "2otWznEi45UeLBEuM2oQdwHYCznmYNYmmyb5WZxgcEbRHDqbsV6BwwVpk5XXbAUXTNhAT7FeHYMemhKHwXdf8EwC",
  "key19": "22gBjWZEXZGF98wXvNT2d5rqjMjjcbPFiqDGr7Bw9StDncJaz45dJfDpjPuMnRcpRvRxhnD4zPUMAhzWnLm4V5nH",
  "key20": "4zTs6WXhVWPCTDLrK5nGjDZpFKAyUfEmtz2sKjqGpMLzX6SL8MgJnZdjBsiztkrFEraPt49qgDPk3RU8gxTgVm9T",
  "key21": "4gbjHUJc2M3KrzNeG77mkFGFghzgeHt1dgiBxYdWjuG9rjn3JrU7tc7YXzAzv8bLcmY9PACnadmjVq3okjhx8hqj",
  "key22": "2WcHYd5zeiRjwPWvCXgp7rLdUaYdScxEPwW4J9obmkVdjS8r49iB8gBxVUwBYSVTSmV98MoSieLNdEuhXhpdwrDg",
  "key23": "2LnnPekvqBSwcfZEGHh2EJEj4TDX1TG1aQNH6tbmmeiJNexFeexmteX3Abo6pH65DabqBhVzj9dp48hyiz9nfPto",
  "key24": "4HVLMkgTTfxWje2rqGmutii5Sp3oEyocQhh6YGQ2ArEbCMFt9AhYtThq9yUFda2FYahZbzXPedyDAcCYTN4ViXQn",
  "key25": "5kZuJoPHrumMvp2kWHn6kQoSFT5PAce7zkBiCw9uaKev2fuGMzzBov14t7JbfeJSCYr9X6jYT4pG5UUBY2UPnDdi",
  "key26": "4jnfagXzP6QaCcRgr9KJMGr5hgX4Wnq3xwVyJVp5mnnk4BCNMCFxD8XE8C5gAnzA54P7cSmkSPkP1PaXtNNAo2n5"
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
