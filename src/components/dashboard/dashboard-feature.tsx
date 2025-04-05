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
    "3UNZKSjCkKq7U3aKTtzTDiuNGDfb1S9YnPgXHXbfvxgBjxkCx77EGobo7gbHn3YrBVXCD4F2SyLd6ckTv2jkAL1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BEsJB6ug36VDLZhCw6hSaXhDLiqUeAz4FkFUoR6ob2B8Y3v8GfWZwxC6kKBzut1BgaFAf77chi2NuHfk2TzfCui",
  "key1": "5ATUrmP21RbdFmZd6QCVPfyWQY8HAASsbvXjY2HKLZvyRVZrEWXsbb9xi1buu9Rx6bYUSSEm99qrVE6aA6YsLi2x",
  "key2": "4XovtqxqdgMPKktUs56zfU6H6Fn2Bb26kBTcAM8MGLiRn4XtnPaTwERgJb7t8E9Jk6QxS4yrC9x2Q2ScFmCyM38G",
  "key3": "3VWKHym6S9YfmkWP9P2NKizoWTTKhHhNr9RdSLgCX9PhFPrjDXYuPLES4GaqgBCn34iaZsT1aKyLuPxYVAQJMr7n",
  "key4": "UwS5V5aq2dKgJiZvqFPfsgovcVsr6gTMFd2ZkLAS2n3NUTjpw8oDjWYFHE6rQ7D3DMNZvoNr2bDosng9rjhZwEe",
  "key5": "3BGfu6VZtt4YE3CMbbzUFZoPqAbjmG5Ry72fx8snf1SpgPXZUzGAdmEJyiNhsCQuMkPmGZZF4RN7nzq3BQpasQvx",
  "key6": "vNo6yUsPf6KqKxnHPCrRPWhTqYp6iZWcyipccW7LsuLSEBDHzRCMG6RV1YqVSUzDu5g8vEeK5neAQ9AP1hQKucF",
  "key7": "nhTLJgRV619Ve8j2rhvJTQCVcpSKT8RW8BcYRuD52PJ2uxgMFiU1C46X1dqQMZp4T1LTmhAY3jbcMcQRctM4RYM",
  "key8": "3QF2p4RcwWBMDnBafJQ2AunrS9dsCP6RCCe7BaK2wvEfWfHxwB31UA9UfSfSsnNGrSyBJ1m2MmN3wvNdpkiTsBAC",
  "key9": "4tRZcnf6YszBCvLzFdYTpxnAwaZn5c2ABMMQiwXG99MCZk7PFXLtPLqRwGq5aVY7dxKfpHVrhMuZsnjjMnoEf3UZ",
  "key10": "5X5dAauw4mmooYBQ13ei5uG2mZudMCpicDwYkAsafR2tngaBudd5Yqhj9Ny7BKt8nWw2pTNJju36DrLMwC46xAZM",
  "key11": "2v2P9qbfnQoxhp7aT7DmZqv7nzzpJc4iohJ2zva65kq9psAXGVSy5NQKbLhQG78JBJooobKAwbJQ32Uv8K4u3Le4",
  "key12": "2kyh4fZFUtneSW4pzaRW5x7ZJxtQNHCtPZhXRRemP2U1Kppkttqm9Tta45NuXnfDLjrBy8N6DpCSTwjib6JwGggx",
  "key13": "3vJuovza4tgAX1ieqtR5d7V3WR9mViqLWNj8wfAZE8kTQb4793ZHdRLw2kjhPqU84WUF6GicW8w2R2Q2BXuavpqz",
  "key14": "2KWKCGKKeEM35gg8fSNgXytSEK8n1iZ7WgQhzYvQiUy8xZoYz2FupuBTzyFLoquMjUB16M3jRdg9kYfgSLKhxHTn",
  "key15": "jWAjjoyPp1iNTorTCaavoEdH3kTJQEnTGpd4uctoUzWv8DQqjbfaTCh3rG1Qrg3BAPuGBCLUnz7fgCPKWXkM4eT",
  "key16": "551cMUtdGt6PLQaM5ZuLK3JSL4FyJVZyHragxM2NC6KaFiQaCBk5EJAX9CArNmAz6waDEn5JPy9z6mVszSXjdnjC",
  "key17": "4ntvz2pwvW1d7mdSSbRzYTsZ7rpz7d3hCByxv5saSDvxA8GCexwmxWtLbCTiKCgFz8R5NtmFDbzZPB9GDwoSc4SF",
  "key18": "5m6YBrwZatQNpJZCSziCQGgeWwUbRx9YRtTsNsBX1s2WnGbfoBnshjhWHgA4wMc2azxiCjbKxLcTLTQVkCgVeqgX",
  "key19": "3fhfsZUcNe9Do4bShNyeU87jPip9hrPSA4nrEb7Z7sYD2i3oBtS5jXsz8K24jB2agQFzrnPyqRK9qnojGBfvcoiw",
  "key20": "5bCYUxCVBy8fYHpCREaNbek4d7TJpHykTNDfmdWvJ93n6xNZqURZg53rKbu6yKqWmFUd3mqLzSoQp94oipfMjbiP",
  "key21": "Z4w3vayfRWmiDmU4HJPLWSDyGMFcguFJP8Q5T7KAUX7GcRqWhK9LQ2MrENgCnmxjY6Hv5Gd8K33heCLMFZjcevx",
  "key22": "3fXdxtkCaj4uiGjTpXVUdD7GhZv4viDvA58aovbHG3wFLS2NWFLGABTx4JMCbNNA8zT9ksRBNNXDq9Ao4Z4fxf6",
  "key23": "4rVK1yB3KUvBfspsX7i54cr7wAX5nJYbbdVpjfAwz8eBPxDVhLc2UqSDBTNeuwLY2N9he2yW3QGosqc3WgrJpXB7",
  "key24": "C7MPq4MKN8kg529qqJ9A4LBTmhzK7jCQQgLHuiGtCrefjHxRoD4PMamW1zZpCdfUWtv2biwCNBhDpVSUmbgqaQG"
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
