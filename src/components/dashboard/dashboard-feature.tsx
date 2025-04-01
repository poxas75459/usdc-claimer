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
    "2QKbfJ9A7xGZyPojD3WEBLR57aZdan2CurVSMYduYhrGZ63mJaTRhQNWdkDFbXTSouiPNyYVBYreUzEbqUnXP8Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BWYMDMxQZUBSjUoFKsoZUohEFQrGBMp8iKrUaMNhLPXMCjyJNBdTBs8pM2ivCyTKoSMkeWj35DvTR5hgF4TC7wS",
  "key1": "3cfFoXqwNWpdaoaERziGmv9PB5VWCYVuMZHhAUdKSFE6RrGjeQ6ZCb4HHcn4feE695PyVZv2WUnMoezdqDPNSWqH",
  "key2": "4U5Dh7UYzjqckZ6Khvyn7BiiyxfTrsnsQ3J3AFiMmtD7MqqdKPoyvSxNAr4TBTFgzTX6Bumfd8zXU7sNhG43xXUu",
  "key3": "wQwcY9qQLctiC9t6VJPyfncXJ9jiVSbKAvN4EWLqxzG3XzFZNLnxq2NfPfDrU7n5ktSLWKnAThKZf7QUS1pwH6a",
  "key4": "4kaDNR6DJUL8D7gGkxHWg1SSLsb4xHHWfE79mFeVP5hdixTuQwUGKycebkHoUdrf3pXzZrjnMpeZRgHGXyxeJQYQ",
  "key5": "41M35yGcLdDt9F7mQGcah9ovQEFzu3vVzzJrKebt5gXLsjR594M3mCWDkFgWnEEn6PYx6vtCYsQvCbumnp5XiRbq",
  "key6": "44V1u3BPQQbBGQQjWdHwB3YQpznh9MjcPQvf4ChMiofPWRLCe3JzYFFcp1yPRaAXHVFy8KcAx2J7WaAVKKiyZkPu",
  "key7": "53FSYGnbeNPAbnJsWmyu7W8g7hYEbqA5PR6ooyVu8Cx98esBhHcJNwNPNXrsE3L8egtrKbNax7jp8NbYy6ofdwkZ",
  "key8": "3nVQvCGarfKrBCbMR8zgKcQ5v8gNN7PEeioxUfoaCZ1K8HYvXzX5DDstXjZdXXf4rPtDSse3VTq7GuwF5y1krZ8X",
  "key9": "3S88nZvvW1FvirENRXF7JUiU9ya2QixS7ezm2EZQcEAPP1LtsjjtoqQRPxRH5TDmXvJm6VyBQr4unkbiTjSzGBc6",
  "key10": "5JqjbMePrDU32uJoFUMFcK4xVQ6eRN6MNLYzmXkuggjfRtGHncoLvzXt8Fv9q1uhQT9jhkYUwmBQcALy5y2KJmkR",
  "key11": "Nrzps17RBZGoKJbjn4yjCDGuyVrfP9UwcLHkbJ2N4gCkRP4X5TNtFJxnU86GyBswoS8gwq2auyzrn8yZZDFs3MQ",
  "key12": "5f949N2wdoyaseAvybR6idVv8zZdPQswsMBvs5ByAJayPNXhWZs9vzSDGFtezRAGVj7yesivcRmH8dB1BMw2qVJu",
  "key13": "1BLsZ4NzMuPmSjfBNkcgnGJzBRiueT4bEuU1jaB1e6eYA1L1jsFsmgDh2bcBqHnoXoQXJMvVHcGZC93Hox2t69z",
  "key14": "65EjwkKTKu4fY4JTEnLiTLbnCXcSG9HW4gBNwywjQnX3uRymLJzMTDC11AoV6R7tdqS5Byma8M9iq1N1AUqXHZZd",
  "key15": "5H3PH4HV9DL6ts3drA7Uj8ovET6DBZANp4MmJuaK2zgv4vrS7PjJ3hNabADqvmysywkFPBjbUorvLT5HRMkZMk76",
  "key16": "5sKUkgYkA3knWeh8rTMC8wkGvPvYLsK442VojM3ixTia4inxSJKYAQW5PMsqFga62AgrxwEULCVrBskN6Wcegbvn",
  "key17": "kPAYBNY9Z9KninJAok1bfAe5B6WSkNoxkS3H6XLnXw8NipjrBobwH7uRCThDW8km1nfuZtJQcGxGhYznqHhYR2y",
  "key18": "7ihgAgDrS9sbBwGGXPnWRGS5TuAZ4nLrYiEcLDmz1Bs2FgJpmVPkpQiZwXGEhm1S9ctVhsJngg6vAt8UPbZzgQm",
  "key19": "4sBjhYM52qyHT3agFuL2uophWGjDE4Fh8Nyrzfm9kfefh5QF1us9H4obao1A8EExJKj39evTDE61tVJgaQVAMEn7",
  "key20": "2oqMwV2YFoYJE9Shu2Tg12nA7jzCz4smsbiB6W54p14XwLGfEMfd6by1dBFY3tEPtfVGHMzQoKsHDBrmNDzhikji",
  "key21": "2mZPCz1oqcvFep1vX5qhTuXvr3p5smEtM9KHFbMdAwDQ4gyWpKWRctVgnayhLqNiAx3tmVTtmBF1meWvSf9V63U3",
  "key22": "2kgUz8vwxQ8LDVdqJd9M5YVcubRNon5fs4gxmD4ta4x5PKr6k4q5mE5T2irEHLRKEtUrLWBFtgu1yugCJHT7AZQS",
  "key23": "381eorTqD9Nnxenag1jgQWmfKy6nHo33Zh6m3wpcHnCzWfFLtH6Xg1iRAk5gezXShgyas4Wpagoh9pY5W9GE5PxZ",
  "key24": "3bw2UaMZ2HqW9q3hokuaH5ZD2fePProKibsm2WtK6BA6dJTpBNgem564iKQWRa96rmf9TaXcgVczeraRvhZQciDb",
  "key25": "5HsvThbnZ6WMMuEz2n8MWJCgdkzVUVSLDVPJ4rCuGGgqaCdUPos9QXt8aNcqdEi8BcnQy5go5D5g1KobJuXqBqRd",
  "key26": "2AjoU1gD9BrEd5vNsHrRSTCXpXB4J8Rg5AEgXSKr1wEiJSFeam97trjczzftkHijFVKSCg45nVZXpkyxnWsNcHD6",
  "key27": "3NhKhYLXGiYd6gaJBabxc2Gv5GstDEJv1A3UugCs4qgxYsERvTrq3XMp3113mcZz4vAUvmQK2EU9k4L7BGeMWBTy",
  "key28": "2FAuHj1rRUUe3xQDpBPPFLfwc1sfGjTdPbXa8hWLxEuVuk4YV8mkLH8XNfuZthB74XsdJwXzR7EyjFZU39zsmSma",
  "key29": "G7qj3ttXoWzN3fbWRyfngWFAEhCxR8Hq5dZygk3FaxDXosKGAtqb6mt6hTfQmTG9A6uajD4jVTJn7ZSn2Cx7avd",
  "key30": "3geJFXKLnCwPDdZsPgrWEDn3u3CSkv5FBz3L1vPuzd7AkYabeaNseWyNnUa5TSufurYyxdEAAA1UdUPr4CH9VVAh",
  "key31": "4u8KegARTz9UxNsY2X89wdULNcZUn94EYQC4g3EBUVY5zyb9iqQTWEE5aqQSc72qboPehvaXTvg2Wn8sLgJAY2hA",
  "key32": "qx6wseo6sVbyRsmFcjrfSqoWcUx2sdEMgEvdbCqdedZHEP81Ym2Xmaueze83P2kL29WqnMhFycsnmndUqvhKNR6",
  "key33": "5fuSLUoz675h8e6Fo8xTYHvMtGryUourazu1hba6AKL2QDCaxQBxdNxfSjbunANAuySswWUb6UXmgvt7ujNTEUZZ",
  "key34": "3bUxg9sKXXb5GDdeocK9AhQXyyHPnPyAuNR3griVzRnZmo3t8rCrcC2bramMbUNjtJZxZxykdW7AmCDCubUz2ujN"
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
