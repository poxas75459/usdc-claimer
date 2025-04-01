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
    "57MgEYRgTG445q6F8eArfd7RbRnFbRQXQScYoB1GjSDMLYPiTC9fmJVty6P5ksesuVi3TPUEHzu6V3gNktatRAiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vG7ncpmZBhfw3f3w9ohKys8ZXh5Y9rEfKBGf2GDyHfmE7mhfxgCS3WY4pQf2cR1FZ9kzVUWczWQ3MEPXyxjjuP5",
  "key1": "43yNrUiTBQ1kmVJUYNneJFy3mZXC6WNqEJeTaoarYit33jjDkxc34MAotn4yjoGfg8DHTpky2AuDNrVpYGGVRGGL",
  "key2": "4WJFRSMKgmGG49KKPH6HsD5iWcjQMqtN6Pcc1hKRLVB8jgmLdgqZnen53o7PiEJFGLqbm8NcGNPmCNY2DuavhfJJ",
  "key3": "58i7WGrn1hDaHrKHiWSZJPEwk7Z9oHqkNT5nBQ9yC7p4wgL6jT8kKgYHhHdt6cwLsw289JUPckMiYnxxghuALbRg",
  "key4": "33GzLQsXsSvC6rtDcaseHfTqH2ZjQNMAg94dMc7LDRWeF5sQj2gSFfKJDGPXueJ1N7FXLnciY66BqGdpmBWspWUe",
  "key5": "5F6z5YPsKp3tD52nLhNLYo7Q6XpoVxjWith1YjLRXrot4ssubFyuuBHcsJJEDa1DRQoWV3kjwxSrQyyAjxuhQsLV",
  "key6": "5sSsTS39gdYhVyGSxwPprqZpyQRiZ3e3Yi3z9xjPVoT2MxDqNfrEeXTuuPTMyCZ3ZeE5rrTvCy3VC5KfwPYDU9Vt",
  "key7": "4H5q2y9kt22F9TG5e5UMcVoSo77wUarxbyWpYzqJxBoSDEcYCe9JooBEx4PKZvGvtQRJZ3DLTLf3mCVc5ExvKjva",
  "key8": "3ZbkHCmkQQM8cWctM3SZrFriu8jc9AjHxd4Fuz4Pg8QPHTHbkvvzupKqsUsGQnRkuoGEZaLxKbs7aRG66SH6YTVy",
  "key9": "5pBaLdXb4yM1cCn8Q3G3uMzeWsu6NuMNkhCBc9SprBbnnWzK3EPqDiFtJD5VeB3iyQcaDzGsYEfbKSnm9rcLzWQe",
  "key10": "31eN8d9bC5eR2aeCN8UCFnm9Z6eWG1JjDeXB4DVSFpz4BxVxRVzvq4Uz3KLoCHJurqwwiCcNAweYe3beYCiXsKvm",
  "key11": "CTdERUCfjin8YtPrw1m4G4BDs3bQJL72cztGkADzBe4mvzfVdSUgkwogqn4vAhNTpR5ka8e5DBXNEWU5xrBXT2d",
  "key12": "4GHXVU2WfdyyPJLeXJ3MsLkWivcKsLpsEYfWpcQ3eBAE9kuY2iUwhaXVjzCg2R4QJvn2fySc2RDDbLDR51kRyWj9",
  "key13": "5PxkrEBzwxPjzQYSQ7s6YmiZv7qrqtk579Vi3NtJm8GMsdNCr9XZpW8bcH8Noj9HVSMoReaZcNDQRxgFMvqtTbCK",
  "key14": "s36MHatHRFEGC3QYWoLbLgSro88z8GBQF9rAcWmn5oXtvSxZ94M2jJTiiAAyxaotwV1epniknXLJko1EByBBHuM",
  "key15": "ZRzNaiLZjnPqqHmJPPmML7oaQKia94sMVdpfgHjwGdxt8avhLaR6iBWxb383ZWnMGBzuYyPzSHQy2w94EChrMGt",
  "key16": "2JCBQ1MJv1fry32XqPCjPfHaQW8q1qLF1AAPXDy2PxzZVYhCJsUkJHH7rqyDWb7QdaWACvhGRvkJyGZ77FdA5dDf",
  "key17": "49ihytL9CQ1Detn7ThFHcpp69j2W7ZpjEZkw6tvMvvJaePj5i3JikfqMj1nfdYTSkzqtQEhSQFSgAheQE4AXjeiW",
  "key18": "2EZDwCbhdXCeSfECpF4V9wPExxpWbLqbmvVPdPgRvUBZTqJrRnRrLLDWQGSnaYG1KqNxjQyfB8HdkWq3xk8hi9xf",
  "key19": "2E8Ju4ceFaRxxxm6kKuRcW1YnKs4NRCFK18CqyhnPpFyg4cjRE6F11DGAi7auNdTq2Zb15TFYg5ssRixkeGV4TBH",
  "key20": "2eXU4hEMXXeNWiJGy3wCobMtWPwcSV78ZMQotJW27oSxEnHuCUCzYdN6RuqAZY3hm6hHpK4FSviuWgqWPoLV2LnL",
  "key21": "2vdD72Zhi4gYbxmfwJ3Ho928YrqDK6nJ5EET1S1YesRvTkKkYLF5KbteMcW3qvoFyqsQdWSiEA4DhyZD1tTBZLmU",
  "key22": "5QPHDDNCVc9k1DLRY13Y84cPGtaH6NbzEKvnXBJQPRF6YcCqUD59y3VoxANt5DUZ9vNNJ3TyqvsG2jBRNnewtL7d",
  "key23": "4gML8iE5gw7pCCLwvXemtnTz6ME2kGov67YXE8DAxJKLFX5znXESQmi1Tfi8ryb5qcUu6WU1iATyZjNZKFtvxkva",
  "key24": "4CNivzeYK5AdRTpCvL6GhmKF53RRfp3Ti7HUnuN1vVKzdHToyaJTp9qfohiXq1XqFaDsFbs6sRgZhPMtEy1tER3q",
  "key25": "5QdnZNe4oH6uYCzSFBQTddECjeT22V8KmtLhNZKKzpjxQ9Fru3FXs9Uo7kpJ4Fa9eenwkdLc8i4xRAKXGaoEx6zb",
  "key26": "57bQ1MBVtA9rhDTSvr69d33FYSWCTx9XDaA2i9TH4neSbNAL6QFr9VkZ9E1wDvEMfKNdMfDbv7NUojN5XP7irQEf",
  "key27": "2m8Mqp9SwqsNiWPuS3ETBPrdnvCeLaHirser9vV2Sj34whu9ssTfBTGhTcPg6JE1GHMXuvSHALSGEwcW7Q1BhX6B",
  "key28": "4sMhsdtfeCjqMp6kUKhoEf56UUqAyAy9QHz1scRRejurC4thHuE8phpdXMvfDNATKiyUycGWcxZwuETu262xqZSv",
  "key29": "5VvqL6U9BFUrbNsrD4i7FqZgWXurjYSTvKJTgHnfGWQ7KnXbY5DH58a6PVdssGk9gZm74fJEGGaFxcdM1jF6BaK9",
  "key30": "31bGZducAP4jbto43hR5ktsgotopkeJhKpdehaTWTHesQnpPLSd1XcCx18zKuXr6UaFTwtzeaJt1BduCt9omyPE7",
  "key31": "4RTkLGvCpSnj6vKuaLGcqG1zMcuBGhzutMeuYi1jiyg95ScNF8HRBtZ8ynHPB6FVT77qntiJMLjUzCxM3NjpWj8a"
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
