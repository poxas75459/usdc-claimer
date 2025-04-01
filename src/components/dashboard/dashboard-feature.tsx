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
    "5mb6XtFNkkE7j2ZkuabRHyLD684Wq3ojQadQ2BpYvCcHmNncS6PLb8SKDmwfXJJ5GEHWmv1tRTfjzfFFfTiaeVoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MAjy3p3XoJjxxbj7EMBnB8nGFKCgbtGQgRPGQekSaiEqtdXTXRid9HWWnBYSJohiT17LyrzreEXxkriuJL8mLHC",
  "key1": "4dJ8xxwEdCEzSTxHZiQ5VpEpyXXF1h4tCsKEbuB6U6vHjzvd85PFGBvRUjWicGxngNs3AafNzxGCTk5HL5Hr5Qkm",
  "key2": "3RrPYbxcuRJwVAKqixWzAY1kPnTH75h8BBQx2bu8SEYi6SwJvRiTPobYGN8Q3UGjbj5LEqd4qMhnDDXgcmdPTi2T",
  "key3": "4LGPgJDujRU7ZBGG64fxu5dLrXsrtFgTP8QHoUphCiFZH4z3jVwYGVHMGFuSyJbMip9a4EMfnzGwmLvKiDe8Xn45",
  "key4": "4BuDNhieyX2fVSGSdj3256ubtMCpEHtJPBLWYgWvFkjs45mjqq1Rc2MhyQNM1SiSyjVuroYFcg3BGx31JpgwrXyt",
  "key5": "Q6JK9PtTrJ6GFygLMgCUq8XMh2JWPQXMZSpVweMHVnoBW5892h3kemymiNKvgoHzqP42Ma6FJyM8o2Gega1F1MC",
  "key6": "3huLCHLFHMdYJhEpj1prUqQDaVo5HfHAAoP3yetNwZMPYKB8dUNe5zCpWKKkJtENwKYBtmt2xvqKp1n1RHNBtp9N",
  "key7": "2k1f19PPjBVUDsQ4v8YaFnVqAejs6GRZbevfpv5s7t5G4miLu53esTn9d9673VAdw37tHRVsUzEVnKMVCJYqaUWL",
  "key8": "XaQYwuA8tVZ1mVYtnDJW18HNwxs3w9dfn8ANZZnXpriQzWAhet62j6bv2ivdMNJoD7J2tc2jXW6WqeURWYMPvzJ",
  "key9": "2worBFzCJpNB2Vu1xyZ4jbcWWQPJfp3YT5VFtAQg7z7wurfAsAQKLmfnvcKgBwxEcAqiLi9NcjJTbKFaBkDdYzm5",
  "key10": "5VDSrt6csHz8PH8H9M53JnskbnfeHj75cA1voXUsPaDWsWou6rmXNWALsjB2HezEyT6RVYkxTJkL7ZLBxWWpQQNn",
  "key11": "QwodRqZAdhio8vsHDJ7kxUZuEEbnhUc3Nomoe4TNkvguJVXpGZswqHc3Pxu7QJRovE9NoaXrYpG1rztq6niAqhY",
  "key12": "R7kqbpCC72PmzqxiG6DDRXY5tCmgYRRSi4LeQfz88azYoWGjJmKZzsRto5P6tCdiTquMGTvd56rgjuwbvYMRykr",
  "key13": "35rH59D3ciSuqntAf4MhbJXAt3dsPH4nSQJckiX5Ba4WQVLwc1uGNWpuK1Bh1gcCQE8gwi5z4a2divg84s86qNku",
  "key14": "yuGLUDhd9SWgR3d8NddJ4pj8mg9SBh4ocCsCoJ8e6mgjRF92RF19HooDcuJqV9JzB3mDQUYfJEypyAWQ2MwjYjx",
  "key15": "3LwjsxmymPVBKDXuXAuNXgyJEMxSbe9b2RrMvFRPm5VasbuuivD8JQqGUpKaYW32QCdRkPTqBViWCCKrEGa8BFZx",
  "key16": "62Xoe96xfmnvWDMzdQBhr5cRAmizWDQEy5bkgpkYorSYudh4McafVy8akmf5iSWP3H5eEnFzZfxWYUssx7hiwN6B",
  "key17": "3wT8xjWryhPjm3tPMxrQY1Ms3pH3pUnWWY6MVjeUrfQTKMBUvcyNyfGVbzchdgd3eTWjWu5U5XFM1VFCwXUkTEn6",
  "key18": "2x13dLYp6u8yuLXFyimm8QoJvY6H7L6wBgsjTgWdFP7uVUNpTeKCpNKQti3kGaBg4NVDzgoDFTX2n19HosU5WQty",
  "key19": "278UYnyYYV43tjMHGJqDZ8ypLTjXKpsyeUBLBA4cXXV8M3nQ41oRP7nNS8b9owyS1iqgxVCVobcas1f8YNqZrL7d",
  "key20": "3hyDWM2siqr6Z7DyFDLc8eN55KkUsXcQTXYU8QZAgsYQr5rHgroNPUUsBpWGKTC4EpeYPh2hiPPD9KdSRmrur4UD",
  "key21": "53eVuLscsV5EfqPXP3E4VwmwUgFqH18Jnd2R9q7afNA5v7F69XaVjpNZZYq3MurGGao3Mmmd8FECHhHdub8Jkv4j",
  "key22": "LN9X7NaDrxVi3oasKpjHpqf2V3hJ4Sf2WRHSCEKM6W216uu8mczGm2w97p6H9qsBMMFNiWxxBHxKo5ejmppLoou",
  "key23": "2de6SNjCqQf6VXvoVs6YPvJ1FoF9JRQHpKk3vP9RrBMRDMNxW8vpmf8dq4BQP7sgxEM8JztGbKZCzae5RZ4UHT1Q",
  "key24": "3Lq8rmcw4uAHJ6DQSWto39Vjd4xtuJMxqUyEDMuy8FiV9qcduyteE1e2ZoEePJkZzURemk26KRd8TDxsQdfRxKZU",
  "key25": "5fckVcAnrJVqBM9mupszy3bYsse1GCDBLvUYJeoA5LX92FapdnoqYESXxKAVbDNQboDMrhfsHzxUcdVVkB9HUdk1",
  "key26": "3XaVVwzSNpqmHMTtpkL9XcN8QBCDPByR7qKVVUjx9C7dxjA6izRxi4R3jnhG587PHUm7ukZtPbKv58fhkXkZBFmF",
  "key27": "Pnr8UET42wQj9ExWT9WJvkUoH1aqUv5Ebos4S7anSm61887pXRxKFz4J5Nar6xQgZt4dyVFfp3f9qdGL9D9aMVc",
  "key28": "dCN8esT2JWzmim2xVp5MmMwuSzAbFQkhY9Tmnb8QGiyWuSvdprHDhaUksuietesHWfNkoitPZM12AtFWBZXbd9Y",
  "key29": "59f7uyryXDEmmr7qPfUG4TqSsDbs8SnaWsHo4szC5wyM4U5AfLaxGcDt4XqGCzkzE3YD83SQvQAgaTTdu1XV4i2u",
  "key30": "3kQ4c6UufXyrJRxMX1wry5FQT3AqLgYYf7PKdoHoLShexHXPRXRtregK8DfAMTjBsj7waisB1etZF3aVwf4spyM1",
  "key31": "2c69CUvLVapKr5ehxjXqEF7JRrQ3MBCxTLhsfXufY9rtVGWRPwftnBS5aApHjTsStb5EJcYgqFbupXKZTUJEKoKh",
  "key32": "3nWQDn1LwCFasKMGmnA4FifDiuxgrxKsYUudyc9d7JV9StYVsfLJnwZ5SDapCJTt8iFvCdSpXdQCsHvpvsfG7wm4"
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
