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
    "Zum2TCbnwuAoHyN8HR2ZFAZxjWJE7imxCGUBTkeMPwRcQqzZj1K7V3FbyKPTZXnhSbLLw89z9EPC9gTBTTtW455"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "voWSNevmDJYmckur7vNgjwPyEgs8ADukTXY3LsFn6vyQuWNQBkoJTRPUkZ3M4mKGBSRr9mrzUhfctc4MGzYpnYu",
  "key1": "4HjFDpaUbW1aHGMkLTB3wMrC4JkzHMpHieJxUHSmiRZAbzoJ2FPvamC9LWuhGQRFXjTJpDWf1XFUTDiCustt1H5L",
  "key2": "4jnHVuJZQrJH5MPvWQvGgEn3Q2xGsPipBYhFDv1J31p43Q7y5aqU7nWFdrMr69dBAXCCRnQcM9vMfrQAVoDpN6uv",
  "key3": "5pQscxi59wrLH5QtwRM4J4vZJLJ5xGpJzXXPbN4xoMmUiR5qxbK1Uo5RLcAsUYrfs3NadpZPZhQ4bKJ4w5zvXpSD",
  "key4": "3iTVk2kmrK9SVmjTKByDAXcmD8rhnyhJ6iatmJVsXJEMdZsudckqS3MxQxGAmg2TT7oeJX1Mr5qPNQp49UgzyZJw",
  "key5": "C9g4e8TTxdMkHQFTUFRNncs5v3pauUWBkTeMGukSrFQvVjGJgWYguv1pHB5XX45vevRnibQtfprAnTaqX41z4Em",
  "key6": "2NhBqXBWSNzK2SwGtCvH7CeKfBtXvUWaWFDN1qQkR58foGeCeoWngAGPrUe9wXKLduDNRUV6cPjydiTHyuzxt7EU",
  "key7": "gvL1GL5fDktEkzEhKAzJnaESLfJSJ9GExotth6LYN4oc5WJwxXMiFvRv4tgYFBu46Ups4gkPbzGdJs9LPAoKzFb",
  "key8": "2ygiqAK4r1L6ChgE8UomDoAzabj8PvsAB4zQyuEQNeTrtfC2xSNiEhFd1p8y3eumkyNVBrqxTxKVdfyaCgQFdYjD",
  "key9": "chFowWvqEjHSXf3RAeV6yHKtTpaXDYab1BSWG24BXV4DJ8E1H5rMZ2vsyaN9HiwoEqQjL5wJ6P4oQoT1t33syuF",
  "key10": "5Z1ZP4AkZHQbJvyK5gdQ2iA3c3PjRbsRVk5dnQBbsRB6ym1iNPZt8xugrU7hq4brFkAxTrrC7NzKSX9fuRQmnA6J",
  "key11": "4CnJTdTno8qRzsVT5dtkQFppWKyCKSsU9ZsEe21NxbvBUcH7pr1Qd7dbNm1gnevy91KcStiZsHZ2KbPnLW5TJ33c",
  "key12": "2bXgS8HsvQtRDvqoaXQ2uXNoUFuJWw5kndQ8VRpMhFBt5nDyBpyV6hTZ18Fu4Hy8sRCQmSpDjrWJt9qGDvE4Hj1u",
  "key13": "RMvVGnQ9y2GLyiXXB2QdY2kHf5F3AqV9Wfsgeg1HcWnyDjrTry8vguDvuqN3cucCwTX197iVV8GL1iYp3sNSZQw",
  "key14": "2GuCj8ocvqzwxJKPSsKj4Fy6i7UcVCQAE6E5w3FEPBzGhfsdi743N1wL5i2cRomKpuaNfReUvjSRmAUGu8G9ipzL",
  "key15": "AyNvVrDVM4U2gfNUqUaX1EFoXijtFRY12XAT1vCKVUCJXCZWVZ7ZxjnTmkbS82UX1y57B5twRffcFi415WHxvkb",
  "key16": "62a63wXKS61Xw8MeSU3x7GMx49whMzaLFxFjN9arxHFMtWJH6Bviz9bMet6ELrjxWqPKdU24gLbky2SvniWc98Bc",
  "key17": "5AukWcakjR2DbQzzd3BkTi2uCLDaHWyyzVP2fW7rGe3oposMd4BGghAcFoWaXZpjnEPbaV3DvfH2R6nLH7fzWryN",
  "key18": "573rwDp2qrS9VEEPT3BGK1KAgkGcgkeMnHUzUYsYbgHSTv9TDCesgnhmRZCnJ72n47mEZMUN8sxoehku5JdiApAb",
  "key19": "5PcmkoQhhbY6pGG2WNbDeEcEhLDCkaNt3mxfwLGKjQyU1ReYngU7GL3TdY4kzLFGSAk2aeFa9gKKJgYLFJCZpWG6",
  "key20": "5kGmLgMVhsX92Uafg46krumPX3LkmnJhwQDwCUKPoVhnnPvwJb1Avb7abTQiMmbSZgLLVd63XfqUB8e2P4svhQAp",
  "key21": "3dhfygKVUSHeDGTdauhYBcHXXJM5ttHHXeb7DfgkGSCLpokmJuEbCBsLr25R1KauT3eAA6QoQZVKP5wW6sb76PWj",
  "key22": "Lro4uNtXoAaZuHUbXjsDQrT7ZbmY8Rp1XPh3C1S1Qd5Fgnrx3T9eYTiPAwmSU4YaDuQBD4uB8rHiBXrGnvGybtR",
  "key23": "57UXtcYH9a9PQB97imcSLa7EvPhVW9WBNkuZkcPEmxCrGCM4yXTvg3jQxgRUcK85qFckdL3Nx4DLooejD4mZT6RT",
  "key24": "2xF3Ccj6481XcGwesZTvHj4mzN1eC83Ty3Wjt7Ee9pyeE8N5Tz3VeUHYuTTqX39pad78h7bTpvXW4uXrMtEmuNGQ",
  "key25": "3rTEn3Hwat12fcQA6qPNgYtMYVJVfU56yU3yKBNp3GmnriHumfNn9ZGrTYPXNFmZwoDWaLLfnM8AdQzSun6sMsNs",
  "key26": "RsWVyE1LkZx965aAFX4SWzN75w1RRFbUrCUZ4jwzJLbW8gBH2isb6THzH3dhFEHERvy1UBjLuZHLoGzmHmwvBm3",
  "key27": "vmAv3MYTsH7SUnwHGnWsMtWnGQVv3umgECJ7uhyN5e1K3gux26fDzaqDuhTgz1GcxRauMAZZKgLqWj9iHaCn9Yr",
  "key28": "GrTQDEowDRZRQfCctoC96xUFqYXQnzt4uRnLci6UiXLPHK2qfSgaLsm8yyzGTC7e4R8cZw4uXohiSof1qiMFjaa",
  "key29": "4BA2zgmKyD1XMRFaGt8hYUDHCmQQw1A7oCyPiQNJNSkUdWc4crh4CBNsTnmE52kE7hHrjsdoVJmFukJwotokmHyz",
  "key30": "61bdWhE1b4bQPKXvQCUDhD79ypb8yBi9fzM5fd6aJGt4ZAthzfqro4Ct7mfpBeKieVu5ycKGxL1gpB7GX3E2ddeT",
  "key31": "5dTar2jSJLXhwqqRkmxKCkRWAFCozcxTzFqxXoN2Y1S6fV6v46Gp7NDntP8rwgskDkwi5bZ5EAoJ3cG1k2AWWhXw"
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
