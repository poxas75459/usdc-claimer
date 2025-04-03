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
    "4ZkYyqUtH52WqiMAqF6F9yk43ynhgZnqHmHRXDVLKYAe3VgsimLu6VN8stSMN2Xd5P3VwbUujLiri9ugtMW5XW5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qYMGAkMK47bzKWcrWJJ9gGtphfKF1fituqKaKYfoD1xkdrgSfLJNxrLHQkWmrwvUhJX6SMYixFoR2ZWhCspWc1K",
  "key1": "48BA82pvMiprqJmHLwV5hnoraDzVERxGPrh7YzQcaqZNXyCYCqDxiB2FhpsdYjtMDq3htAYZ7nNvjhQFhxrUbVSq",
  "key2": "5FEDYjmDC9TSA1eYARJZEPkjhWes5mAn6VeAakZoVbf7a42MDc9FkZd2rHYRk6dgAC86aAQvdWtbaCqGqFQGYg4F",
  "key3": "2kRTevzivYmypDyy5X86jG7a4fWgSrJyi8pwr16bPmEDYc1mFHagfKjenFetYYjf1PrZhQ9fgesWeJX4BfMbVq4v",
  "key4": "4sieet9g6UXe5opPFpD1phc2RNBXFJgjtxsXfHxV5iujFSW5KqAmPQJZH8FEkSRwDw69TrDDyJ2iwvyZxVsW6W4z",
  "key5": "3oKEhobz15BDXoxfprDPY1B6itETKZh2gHwX5jNQNZYixWdQa1MnRULak14PzCaeVYcbJzLxdi92TS37oe5e83eJ",
  "key6": "xRhYy4hLCZUMt97pZQsxbvq9XpwSstYQjG6sZMEgXULv5ud16ZynJAjpeAByGe8KfXnyy5oB1TnhveNZeYmLGoU",
  "key7": "3VkYBHbjNeS7yZQouHgTqTB75NU7W6h8PWkixJo7by8dXKTvQfgn7maoPXYxNk3ZtAHzQXDRMKXqTSn7txavLezM",
  "key8": "SQpFXfP1TZ1hFy7UsDuiW2bad6i9QJnbVBfs1aMwPtHQu9v7QtTsFpdqtGfKDw5g7c7TZBZrE5NRvJiUActGTji",
  "key9": "5Fcq77dnW8ddHxP8uLG1QxHrYJp1H1jQG8eJLGxJHZPZr3PPgx3xmzjXAUZKqfx3b2oc5R9fKB9Fwcxa4b4TTeka",
  "key10": "22fKzwmRQDj9fuf2uP9gtP3DQyerXLscDrJfQsdD68NQeUPi3YpcsjJsBHuQG5iyK8FsXsZfU5wqnc8FuHWa4f61",
  "key11": "rPJpbeYcxgdyCUn75vGVoK1rtqcymeRdZ6JwE2VwPC1D9gCSLh3mXZsuPjy5TSYygL8Mv3UxG6RdLAsFczrWvtK",
  "key12": "4rp2e5dz6Y7rXSHZSiRmSBZaCU4Hxayuwf1RftQsdL63nkdq62Pk8NAyJ7HViwrAjsLGLME9XpKcqdV1LjmvH1SZ",
  "key13": "4KPT9dPnLsUhacFhk9Bd8wAQTcsxYDqWp88Qk5KWY27BV9ZX5pywid4pH76ypm9LXtEGNyeAaMHDsCwzLvRexvSt",
  "key14": "2Wx2HAqMEvTz8cgEPW2CY8XoSZXeJzDCTYAnRXB6RaKYHbEWN7mqp8JeTtnEctsPJkGbRUuNydHSBg2vQs2oXZjA",
  "key15": "QGTzeLf5PH2FeLfi79pVNY9dCA2TMkQViWz99iyQBpLyFGgZH7xvG4sZUKyWHYmPahLiNHkUqkDJiX2v6WPBRtr",
  "key16": "4NKECJbwnjRbfr5crbZ4Dom2Pa2E9wKVaxXs7N5YqVmUv6z6PVFmZnUpQ7EJEAAfxbgoCGD62sp8YCrW8NiHY4SD",
  "key17": "3TrSSLa6E1C1vH588aJ9FVLNhP2g8yz7dfXRq3e47WjaAZfkuJqudZgmv1gmz48zQ7vh8pfxj2K91N4tvQ1Yx54V",
  "key18": "2HLsGJrYBpiEtZPWKzomDzhULo2pmYuF4usVHCA6bv27RJ5G99Sjbd6XKgE333feed2aUYyCzChUD4HyNsqoPFjR",
  "key19": "4ZwQXp5xVtTLWmPS46SowhJbANbqKco5zxMPqqdhtoED7ZHxPWsPbHZyrJjssBu9G2hGK9tYrjinwm9xwRPL8h4N",
  "key20": "4fqHvUjFn1SmzDKCD9XJcq6nRsN72z3CHJsToh6DKTtPAjvCaRKBmtnHcAqQmntumLAzEM3GDwBHkzoELi34Xmmg",
  "key21": "5LbcGFbfJzBkgSL57QUaxK3pQYu8QPXWZfDZFS2ShxfHSNKu8dFoSxN95w8qy1R46VKtGrnC1sEzfbb6buWF14N",
  "key22": "574zwoXKGEsG6wcAgF4KkoG8SzBBxBmkQaQBSaeKR5U2c6d2GkiNyjtejQaTvPAVo3frbedkbTmPSQuuoXKrx8x6",
  "key23": "5Fz6sVLQ3rC5bjXiuccydiczXBheFX9a78rtNfT3v627ShbV6MPqdb86cF5QFGwaDd4QjkoBvk6Lgca9Tc7jvnxX",
  "key24": "3Q1Ad3JsrHQYgZy9NvJjiK23WwbqF7WSK973AXr9fQctbDoeY5iGdJp5ybxa1qmYiG78GyXmkfi2Qizpmi25KxQD",
  "key25": "5riUtDhcbmChGg5yc2hdYH1H3oPfimRciVTgUxKHw1QGbdm4ymgCiDY9nR8MQMHqY284zeDYQAiC3eQFRp27waeW",
  "key26": "4Jd2Xs4jij5q7HjWfka5TUSwXqYvcSHtpTWzyqxVdSTpBXRUU8CxikEKy78NgqRt6k7LT8YswAzXpZrsc6RwSG3G",
  "key27": "xEJj8nU597ggkaBp3ZyGEST1FbrzjBFYkdvGg4uTX28mXWiKZhh3EStKAWEiSXypwUYnHvdzDPCzog2uFKA3sSo",
  "key28": "mopbVVogDjfSPmUdgtPCkBDHUK8YGwVvn82Yxj7UDnTY7RzXcmSpXYM1CBLdhBzYBV6VGwGakFhWF8SW2poejbC",
  "key29": "3V5NJ7TMDh7KmLG7aE2MfwxJM9PDD92DacHox8JrL3MGjugLTRp5xHaciTaEosMcoSKjAevswYFZCCf1T8B6n6qE"
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
