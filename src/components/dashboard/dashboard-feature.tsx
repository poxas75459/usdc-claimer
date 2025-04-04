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
    "3YUsQLK71YvBZ4FqoDRkQNveWb2Xz8BCsF5s3iXvefkaS34HYENxRzRiVEWsymGnhL6nQJpYrE3BnXbFX4g52Zdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uqaYvHAxSEuyh9v5LCbPfT3ovkLB99PuMSuPeF79MqK9gcFSUrfGfjB1PLbdsGWHi2wNxifanvanxvVAP8dvDKP",
  "key1": "27FWduwhe61vkU9Lhk7tUn8BoMQje4DJgnEoKKNAYDnq98b1WvdRbAQPN4VqKzWoBh5VSyYKKrfLoukuomWcNj7y",
  "key2": "WCA4hFsSvDRmoU3NuNkcjQvPymGmb4WL6CXoQ7iF8bv3qWYvFgkveyadtS8yFJLjWGjQEUGnbdQyVuDWg3RSV21",
  "key3": "4uGyi3grrwWjX5DfEKPQcsr3SHeMGsHi7Pygz5VyrmSmikUcPAzAUSP6DuQKqhfLYAZYqgTptVkyvTXy1jXTf94E",
  "key4": "2qMXVkC1jqynNkdn98ENEMukAVU3H1FkNayNi1aPxap5NQTM8cxcoV9BwYcArAzgUkNMHp6tf1KSxVMXPvjydXzK",
  "key5": "4JZcGxke6RwWnBBGnYDPpyCu9nABCJiw8tgHj7xSYTvkYbvhrktccLkQYMVuUza7zZuv5G6hUjr3fxbW7kXFxFB6",
  "key6": "mTwdMDhB6k7Y8TzozK5L8rkCu3u87RKtN75AHx71xZaDYcPXBV6C88opAr9Qyb4VSvYsXVgDaEatQhDwFTQfUD2",
  "key7": "XnD2UQVoNZSN4DhYeaPvB4nsqgUMpkBU8xTpNq3m5wmGK6WKEDanhawzv4xQwtjhh9KwfELXuhA6jbwo195py3R",
  "key8": "44gt2kZLvQxZQRXLpwDUY6k8hKDTXvLR1z3sDHhuc5Xpf3YBioMQoYLpdpemsApv5WtayVjMbeLM56jXqatZG5SA",
  "key9": "5nmiRyw5Ghsm29D7n7krtVTHbPbKrs5SJPkxTKNgPJzepyUj6HaX9G2AkSPa7946UgSsg1rspW3pjbjyqPogbXfj",
  "key10": "4STSYHKAiZTSwmXLjbQi4C3bowXB6xFLcWHwvMTj69JJk2QLBugCgQTTNo6maB7gUBrkXn9hi8JhnZqkgGXAHT7B",
  "key11": "4knQtAF4fQHxBXAg46yTnAj8tMrGFJxm9kLkMqnfohf79HaByX4ukWV7BfcEjRiNG9QzBitjA5scz54nujFXrv9G",
  "key12": "2E5Q4e9NMYns2b74F9rF3AN4ydG1aHU6AMnyvciop5GbcRrbrkET4Z4BHyi6Nr1bbzu5ViZSYeMDfc7BC2oQ6cRw",
  "key13": "2anEak4S5XQQU7Qqvw54m3M2Ynoej6H5RLWFyxtJGsnWTcLPwg1p9HyoqaHnGkgGyXXpbuLTgTZAB4aaWDJK4ZVL",
  "key14": "391AtBFbA7kRED8AhsSLVbiwN2UWj831s5AiRuMaD8yExTc9tfCd9GneB4ZHxR85CLwzRNqhxUcVt3HWyhwryRhs",
  "key15": "4zgwBowdN8re1nWiUJaMSeJpbEbhCAF7wgZmWm3S3x5TNBszbk9FaAcAkedL4rPRECSvB9jHfLY6yiPAbXQX2QFT",
  "key16": "4R1QRvKoVFU72sAhwxm62j82n71WQ6ZdQeq5CwP3ePmrHyJdRDuU7ynripw7EPDLPz5rWPMAEjgsNzVuHBzFJ1X6",
  "key17": "5hE2NakaKQVGH7r5Trxh6CAHjcZHbJHfPiWu3NwCgwEHELmBxC8S2S83AJrB2xuzXuJ622KB5LccAPtz4kWfMRiM",
  "key18": "5SX3DXHkWsqsYJPBcBWGcA2BoBo3L4W29QhQ1Ng3hmEQvxyF4wk4YB2SUHvKX8vcaiCwGQz9nXc1s46P6HC5KSnz",
  "key19": "2dCCo2aik5MLTAV7iw2yeczNYidSdjfzdJr22miApQJruWmcKhhKeaWoMeNWfCMv84ZC2GiSdg6S2v6JxvixuN5r",
  "key20": "65PTkjMppkFn88Hj5cbGLfrfvufi5Wrrh47a8xbNTqMGSmZ6eghd1Z1VQFwRuWvSi2MNEePXvGF6Ud3RyyM9Lmbj",
  "key21": "65LcQJ5x77iB1EwswGbBw6YcszPMB79M1nazJATVqDcZj1eug5WuDMBj3XeCuhoV4k9yrNCVoDCSfYermCLpAf3B",
  "key22": "4TbTE2ZwSbGJELQ25DpgotvTSKjqSdxStp4adnAfsNuctfgzoGcnh8xDTjeEtV1hgyp7jH1K8em8WheJ9khQyfX6",
  "key23": "2ibVWW5mmu5f1vgw91r4V3Gt3NJEv4eDq7XTk1jskyZZ9WnxC9FVHexfesuoFa1EBWdPQZKgHH6X1VG4zhmNjRyZ",
  "key24": "27K8FyNbpVpoDMor1bwdfjYkV6gptxh3xw43JQUnMs4tuYbJudr6Jbx9ZK2rWQZXE2M3i3dJnfELGhEg1KuUT4N5",
  "key25": "5QdAAgts1etffjXF2XDFEcZj7jw6ibwoR1PSQ2XfFDz2XQs41G6pDM7Eo2bd6teHTtCrnK1HKvJgxY3RCoYiFTpW",
  "key26": "4QA3RpQU6ahuXH8iBsRY2sGfgv2kwEfHzWNLDiNAjoeVbr968q3EjQgaZnwW7VoSwdBjY75TQMYEAnkxc8X3LAPJ",
  "key27": "5N45SqntifEA3pVdrfephio9d1W1K81RzYd5ix93wtKjAGz8rcvszSAeftjhvPmH2FSpxbfY4GzgwD41LQFXBK2J",
  "key28": "5QMb312GEW5ZkLRoSo8F6bY521G711piTHn49AJtAMb3MhjYBCXk46Rm5KMRN9tGDGEDTRts5VTJ4wwSQGdHRFHY",
  "key29": "3TR3PR7ZdvtSkK1q9zhjmicvJoboyENumiBF9eTC9cees4UUaeu5UYxGZeRMQqB9bx646uU8i759Gea3NbyZMGrd",
  "key30": "5SMccZM5ynYSHcW4m5QsMZcbQzDa3U1XLM3oXi3rCLBzoTPTNW1DZPmmPBYDhAscnufGdjUAbUZ4Lt9zm1a8tGwB"
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
