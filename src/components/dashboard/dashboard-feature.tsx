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
    "36iHHXtZok481ZmyBaJK7d2bqtX4cxTgHZ5tNXJu2DDbhAeC1KRFjT81MVxNbGDtHq3kgWz3pb7UsRGshQdTzqud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvU74EagVkxk2z4EvVMBod5MKxcNWpSVB8tEtdDYnE2XtVtrWL9G15Q9xjkmbf7tJPrwLJbsHbR3xthrEDq65mU",
  "key1": "3ZctZ7czj2roBYQ6ee21kR9saLYXMtHfGK9Gi5hBnRzgTjRAVVqf5Cz1ZwysKnq3b8QbuXh2RxEXzexhRnAbXsD4",
  "key2": "3Q2xprbX5CDuViwG4t9AHD9mMiBRqAYz1oHPT4AYpGDbSoo7yKW6mHzLSM9FbNbiyBMCVbuiV3MjcgCsYxNG7ToA",
  "key3": "556p7U7FUu53EinHxz8kEgmpBugCzhG4LX6atEbVnpcbKqLfdqU3JNvMA1dDBW1CEP7prbZvTMujZVbNV1vAhmSK",
  "key4": "3BAz5ePNNdM3YKJnmnzXpuPBW12BfogbTBbx2n5LdbLFSqx68aV41qroNvSLo4nVkMJGtdDsCpZ4W7BzhuhZN3qm",
  "key5": "3FbHngJtVkjTuGa5wgj4LEHVPgTw96M7arWaaXJWk4ExufGJjZweZShxMgHX9WcdLg8vfYgaAvtd6pBbtZGs24By",
  "key6": "2joyotM5zsZRNDnJhzBafRDktMSycx7hLiPygMh13eGKTLj74UEXLgigSEyqp8xusZ4ifn3HaS5SZQrjfAFAJT2j",
  "key7": "nVmJ64d7VFzDR4Xvg44d3VTcVV8kh6NYanDwZEiS1qyyhxZcfAgo4WF8WrbBhLAgoWUttPcYo74HdicQxua1skc",
  "key8": "eWv6BuamFPEcYVnpToxydzdvt3nRBCQDAHwGy39g5u6v4wdijy2JqWbxBU8CahSHQwhP9KwmqkWDpyZxbpZKgtj",
  "key9": "7rvFfmdMbkKr6s9WVS4KPkTMSUpn6dFyUbNbMZvy6RVZzmqypwsaCQGpft38FbxJE1a6nq5eqJjbfj7unqFwQ97",
  "key10": "29CiXhKfWjy8mSDoxNsynLcWm3RWs12nFR8v6NAFwyToL4obiqQRKejm84G3FdzG4D9xfNbPJkxn88Zn18m4xJBR",
  "key11": "2EMw7CUxVpQt5meH86inz6RM1gt25hP3sbtmxmnyzXk39yNb3chmHUHnuWa5ozRcbKE8tvecgNzmHbfz4hnJPxiP",
  "key12": "3JsChpzWY6SrmtjNfvqJDJMZ6w4mjAt7akGgzM931bMqymsTESEEa2vhXgRpx4Jt5pxEYSTocLwDpr3C4oBDgKkA",
  "key13": "4Nz6CStAmBTaK1kWC83FQTRDP8Hv3diqDgXpwwH2muo4pbYp8d2cJBGwJRGsPYGzKRGZtnv3bKnuxCi6mN8Nn1hq",
  "key14": "5eU91QuCN6qsZx9rssFh6vKHfXvQqqnBRiqgZVgXEG5bqLQ9zzrqfQjvC1dxNVeM9Wv9o67mdxRR7GLstMF5Frq4",
  "key15": "5kA7BPerbhGeMx5zYtZ366QYzASdabtcoujUNNjAeCV3W3nteo8uQuYUNGTWco5bJS4HXzJ3V9c1NiQHB6EMK7Qk",
  "key16": "4xHbZKf7GXLojUDabYdjse3vo4qE9KjNwzXyDAxxKWxXkQPHnUYaQprYfTNHThjsXo6157VYqY1hkR5YtMNhHtLe",
  "key17": "2dvyDGM2RBpWKyv5UXc2AusTSrHu9hm3VuS7qxYp3TEU17mB5hVz1cXXMp1BHxCJFGFuqVaoaMKhBcaNy1nqA5bq",
  "key18": "2wUjJPSkMds9N5hKdZedzPpPoawb5txJ8CaoJmdka5jCfUJF8GEnSqz15dTZgGAfJP5HTFNyWjcswjjgjX99YThv",
  "key19": "QS322eX85RJo5jHZz3UUn8g1af1hYjj17QbiN7ygqCuTcorKMsaAMFrFNxgNehzg2YXLmRxi4PBjPoq2wo6jgqE",
  "key20": "3KZJNmDuuTh3JNbizXczZuSPYdjucRhCxHwMtULgQUiCyC8ERPNtb7JUJhL9L6yr22MRZL3cSBk9ABeF8FFkzYdj",
  "key21": "5tWgsMP4y3j6BtYoepXuo1XyPekD69WYUtQ8G7NXWYiqgEyv1abKw9jUCFApQVbrJMU2P5jhsLmKwKbmXPdk54bJ",
  "key22": "5Zsg9t4jDTnLppYLNDn6ZAKYx6VQkRqPC932Rbsa8ZzPLzWPaG2AV68iE99cES7QDCb6omTtRztMSg9Rnk2zNKqF",
  "key23": "hgBBnhJGaK1mMoJ2qV4peJss7mz1aGV2boafDHPgY4e4XGjw9JFDCGoJvmXYQdbJJ67Trcdvxinbb2fqWyW8HYZ",
  "key24": "4GE2U6PHsNHSgXGph3k2mHacXjSKaePQUaUHALYTFQdqR2uPQT4Ecy39hMF2uCEatRQdxqefzLunNyM2rj9Szs6b",
  "key25": "2t8bMX4EkpDNbzrPzT1SMTT8be9Ft9GqLgLtrsgkDRKUzPT3ugWycoikEXkZUcAEpWu7uFjcnWWrWSsdN7TrDbBT",
  "key26": "2nYxqNGPn6kcsr67xQzqQ1HtTqjSe4jHkUFGwgHJkqaUieAwpbdxc7x9bZJE5qM1XXYMQEgReGieNef8kAppqjqU"
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
