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
    "65YRyezKfeSrit5Efxj5xKVq4zzS8mih6RbqzibBz2GB4w5wzQsTYgrrDdhP2cEK1D5pSmv4jobEogKT5o97cAar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cA1aErUC8H1WTsA1atLC7TtS7nSr2xEa4M9wCg2AbLtPDxFHHwgzMxeuaH9NzXREY5WWqhaepAWvTfbW6ybjSg6",
  "key1": "62fGJRmbnK2ytWCrgMoXrZuoBVD8LokAXt9NHDzZn8536xY2u6CgozTqwYw2SWLpAz6c21xkpKcF8X8bsiuk23iR",
  "key2": "4JcAtsGF7m9annnncqNAxMN5Jfode8u66AnH8yCjUxkgMb1V8k2WNLY45TfCddQiUArJxApkhmkbcs1WjTvJMe3f",
  "key3": "2VbaJNZfmToUwZWkeZppsz9UGJdbVjDkCgEfeesVYDCMp2menyK5g2BNb9b1UbkDGYy4SKqT8rq2uVcAdxjpZVe8",
  "key4": "2QZanaWgfr7FQtqbXC9NW5sBydJyxJ32bs5rPge7c6fzocwER4LvHRWeMBnHAKFM5AQSmu875YRvXioEjPMtkkLB",
  "key5": "47kTbCrJUKoUEiYLV7ztbbZ9wyRXsovojRPVUyxyKcTNzZBoKxYBpKdtE6FcKtYqFvaA74dXQSnVRkaM1tKANNjq",
  "key6": "3P9Yc8dRZuN6itUsNj9KtMhMV61uz9CpeQ4J22JpHaM3tHyTy1PaErFm4tmTTiYxFcAGc3SxMpN1ZPDjXbK9Kinj",
  "key7": "G7eWToFFEHEYA9QBW4P5RBKECoVbRroUrKnWSsDUKe6Ab5FzsaKt3xaKaxNoQMMpWYY3XKuAKvcGKPGWyTnTotA",
  "key8": "3ZzbvNG9QS69uu3XXkPadoYuihP2V57kVo15E6cPTX6tZDACBxj5wAS5NbGtNPUuUu3n4RGAGexbyrZLN3QiFiCg",
  "key9": "3VA59F7S6REz265FQA8dLszHepxEgAL5yxM43b6S79nGS4tYqYEMiWeGe3V4Ne2aX2efKp8uno9hCsAna1Q1xmvS",
  "key10": "5GKiHAByweySHj6F3GXAPpH8H3w8Nkr5hNqTdbm4qFooiVMrqUXZTQ9B3f11fZdjFfwbXyxQRE3qBEoBBBo5q9CD",
  "key11": "3FQhshSawFwRjBLYyzWpt1THk4AsgdEuRfgKEQPyVmeAbnHpuoYeQ2Mv3yAuDsZkdyf8NitsMMJXym4DEEExyZCe",
  "key12": "24xESSiaoVAKXtYtrFwFqMF26XSrWVWr61yuEN88rDiZgcUxVfmiKxexoM77mXVLUQkT1nyxJz11Q1nDybZQHrpd",
  "key13": "2fKhTDQRmBaN4biyByxWY27nBfXRgBsyK7cDtLGpFdiPUXnU4aLh9oU7K3UJanQ2VzY4VcebMmnm6wYTAZGmEb9u",
  "key14": "4Lh7aeEvmYTBR5nwYhVediaR9rZjzarT8tCyNksfbUUFRi6EQ9GgeTn7zBaSmiaHq1t8YVqULJqxksFSEbPTDFpU",
  "key15": "4v7C7CDecQVBq1K1xqodpujAvJvgqf8oXB1NtkZhHuQwrGkvjg6sMcMk5U7LxU7xTJi45oaTBBpiTctq7qNp7sna",
  "key16": "2JY6j6biuxhqCQatfMjQt1Ku3QvwYwuhJvrS6J2shgb9mGfGw8eUXchVgHdduzS5UEsowCJJBmBSMHU51rhhcVHM",
  "key17": "3AcboyDrcq1e5hxwV1x7TDd45cRMBLNHNENLS5kzDjMf1NUp5RzHPngA3MSWjz9DX1r2ThXTuEDjmgXMUz8BFPh9",
  "key18": "5nxUZH2sAKFiU2KzQ9F6UtAA6dbcwTfFdwKmM6ZHVRNzt5h2zr9WM5xeC8x9sPvZ5AT3q5YmiCJnYyyuk5iDMhqf",
  "key19": "4P3r2NkGYLo25C1v3aLSWepgWqYcn1s25ozjX7YGrbE62bvXgvMLUJ5WykKUzgwer1tLExNfr9MbA5QG62kGgdot",
  "key20": "KdstNrPEdkRJetfg682yui8nKTVciy83WGNdEs6c3Qu3u78YSy7xu9sHwySQEuE8fCKswC9orpy5TNYfs8UCNWr",
  "key21": "4oHuZgn3VVGSQQ2rRv9uqQLFdbdFAZt3roTkiusWYpx3oe5crYwCTx3NLjRGUx94byxC64agmPkGnLKiUUHX8wDt",
  "key22": "5GcTdHaLC5YoncwD8hnhkrFHeed4X7mEynRrUGBmYCMWTz76GKie7NjajPjELydDq5G99426AoGHYdCgMM5uRqs5",
  "key23": "4GzGGt1h3qf4ZMXu11VrWBDwNMKtpmr9pfyhaUpsrNuknDp7m1eDXX19cXsMPAG5A5ie4JzdWwaH44bramifh6mV",
  "key24": "veAVfdGSw1HvMWsUPRSbpUKTwTPtcP2qqSCdYjL3zejbtxbNA4jov1e3Y9sxUVrHmZ8nEzJqBDyEcEnwxS7EeQ9",
  "key25": "4QwBHLK5UG2f7V7gXB9vPDzqpZrd8nXn7SjNRFWw3sPBdaopuR3kx3sEwUTCy2tLmb1ThY4Xmwgvv6AkLfYu4XAz",
  "key26": "39YsMvqWpxuSWvBpVLUA7Z6nt1RD4sRU5sVUHtwTxF1LtbRLFWpbRxBf51yraBCeye2ojJTVkapdhJUJKeUaKh9a",
  "key27": "33tcAAyE3BL1MTJnfZ767mW9GquJfXzKbRoWRSJSPL5qm5HrPjavaFKJpyYR2jVWxjtQDauxCx6zKH6bDmE1yDjF",
  "key28": "3QTNzkbp1goXz97xdmWrYSSWicDDBqYRKoGr8jViNVx3KFSqxwW1CuVyY4PhxKM2DhwSnyRvduapRPJCb9nchchm"
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
