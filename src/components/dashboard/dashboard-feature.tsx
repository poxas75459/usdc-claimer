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
    "tewKsy1DUkFWT4h1B4ou8Gbx3xPA9E2jr7B9yZcu5omoB1CFkP9SsHgpbpMDDyNzx17a5SYGiUe5gxed8YiLtfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KPtzWBtaY6j4s269eHACfhyhDGXmjLktBM2HLsbLQUzcrxaZrjkKDyc8Mr6pAAs5CuGFnB3aLrNequt7fCxV4mL",
  "key1": "3dXSPvmVWzUiFPo7fcFvwpPBwdurz7Dxd8e3NFtEqaioopaWuUBXJMLCSrgHUuHyQEr8d41HkPkht1xKCd9kTQiT",
  "key2": "PJToGz4wZAwyhHhLK8CHmyNemzUssRJqTga2hSfeeHVqvmBFgu9qgeK7bNL7Zoan8q9aC5YCaVoVnnwvwsXCYV7",
  "key3": "5sd26DcRQig1BAMA7D2rV6xNbHguCyX9Q1tCRyMPwX18BQcMwWxeKdzuYd7fexRsktE3XR3Z9DBpPg6eavXayjD9",
  "key4": "5ds6CbgdZPL2sxgM1pe87q5gWF4C1yxuCPbH7FKf5MH8JMuA1SxPoCNJtqyHLuPiGDw1yTdNYrizNKP5mFZ6H4Hf",
  "key5": "5QhmfcwshyijzhvuWh3qgDuU5eFfwPDHAm563BJcEz17eyjF2ZDARf6Pta3xssTTggoxkHX8v4J9EJVdp4im7vrx",
  "key6": "3A4dPzCZgQXEAxxQF6acQcZEWyzqaQZSURuaPAnPm5jcu6FpZTfCA7nAPzitqzeMrbTYm2oEtTjUWqgqGy8M9D3h",
  "key7": "3RrVtj8dfAzZWdE1tGg6pt85LpcGWpmk12a7fJHx7wNZXVgW96cjAoKKWCepAf9dedfHiYLDGg5gL2Wnoj6tQRQq",
  "key8": "26bXcRPLy5QT7d5GmVtAg8jPwkis3WUyxAyYQcDJL1J2G7g6SuNLVL4VsLgZjrybPPx2c4d2TsM2EHCCtdbeM6cB",
  "key9": "5GvWvKzLZ6LPbZ2Y5uJpPvBSLmX8zYju2S8GV4MnKaArMXwmjWcuwQzPxXXzByH8h748tvHmJpkkS5doBpWwNNYC",
  "key10": "4Pquf4kqpuE8WrvZi4YyeBSAuf4gr5PanAJBsEywZEkoEtFFu4udeaf9AKLwoCXX5X2mLRumGmQkKse7BKhv5CGT",
  "key11": "3B7wwBaoygYpw2wGW3F6GkDeCjEynMbZR2dzWuAbQJePNcKRa2BrBXxYqq4sMqAUxBf6TYEiJ7GmWSGASG3m1La9",
  "key12": "5HZXCe9MxjnsiiSok9B7kbrTjisphyjA8V4Ui32NptWasY6pHj6cGwteVDuTNVj7GgQM2kAWe22zF9ByqcPs2KKK",
  "key13": "6N4DsuivJ97w8P9JA342DHvogSPZDAiyeaxVkyKXSviBc4z7SCPx7TQiWXAmHK4nrysLf2Tx8gaSN3sbeN2bGGB",
  "key14": "3SNUvJNY7tXbPRtuQP22rH8ekwkBTc1KCVHmVuXfsA1oNTFuKcPixVUKhR8PsjXd9vW7BGFr7yvp92wuUo8pzk8c",
  "key15": "3SKuMzPbhgSGLPCqaLgPhYQsW8tHUzJrHkB9xFHSHMyhKvNCL84fMtru51rUadt2soqgkCcoveimx2pq6bHtrCi7",
  "key16": "5JWnB8d3YUKfZGf4sxzf69dLRUSv2aTQvzEBA57ccQfRjtedqSy8UEcGezDLTvGC1dqtTsroDFwF4E3DzxXeUyFN",
  "key17": "2ZwcSZM5upCbnzsdaBrEraK6MtukbxB6kTAGCY9ocewmEyWfXEFDfSve2PHm2hqfvh7q8ck4DNRPtnXtZWibTCXi",
  "key18": "4J5nvxKyM3QTWtFFHjmMRFWFhwVb9svfesXRdc9MGVfZb4cfWdj2BniQwEa3R9XU5mrruZgWQUzDzwd21AzoiVTB",
  "key19": "65kj8BWSUx4hag3sjHtnqYJtMGk9F9hsaqP1EDzM7Fk8SDvNyvsAxZ95GyWDrZHG783NzZu5ybkmmbwpPWgQVTBG",
  "key20": "4yUn1da7VqFHYNtm1dfKLRbgveNfBfCyNVovJZPmVQ4T6uakQHKncFwsZLbrovHZf9VeLSmZ5r9JmRbXuuyT8NgK",
  "key21": "5j6mE2bHQP1jsvyqpMWVVBtKHs8CDfEKUfbeVRLZ6gq8AJbvoRP597CaTPKQQ6GsgXy9qYXvnvbMbSmTnXjjGVJE",
  "key22": "4Rp5QmWY7EhUJKGFhFLyfH7VVw5TrbCNYnTbqNFdBHEFxgDcekJYziMQbn5UydoiAvXGQesY5TqWRbdg1rA4aEqC",
  "key23": "kRUUybuAUb5pgp5oqpeh9KbYM1HEQpZ6px6694KLosVckc2BHNr1X5CPZ2ZQ1yHPfhXe8aRLzBwrXX5qDXa3qfd",
  "key24": "57xgGgPcDvRz2kntPzVLPB2rFKLsccCcDq7dGW6cd2mkZzZ5T5veWgKjsfQFqRHZZoyeML3rqjJ9ETGThELykAE7",
  "key25": "3FSfunkv3vntjD7i68qqcWKRYM73zNhUaRM4TcdZkR6gCyQiHaZ9t6cUxn7pUosReKPMKPdoQiVfTyX27L1gk93d",
  "key26": "21sVyKMKAgZRmz7T8mLACqoYXVBHcexxuVGaNHR5poHqD8fG6JboZMMUfWKKEudSxBwAZSoC1sf8ZeProqn9PGmj",
  "key27": "3SgL5zgastepf8qtsU1eTxCSS72KBDscxsdABd1p6wnvTNa6M2A1XUmXZVwuf8MC1fXbywmZfaF6pK1DrtHgrKZG",
  "key28": "EbK1xwRSLHuHkxYWfcNfGn1WzkQUsFAF23VWfVnPHsfKCqCuMh6vx2GtYvBcZ7SKDaPpE3hTAQYGqQCfqdxsq7y",
  "key29": "3YEobUrhiwWUG6S1N3wagzsfZgBs8GRCKt7r4q1DwpKruVjsNyTHwSYmX6X9jiEKbxMTZvKFbopw98ADfuCXv5zQ",
  "key30": "5tsCbvWs1TTdgYkRpgonbd7PX79n2o75u4JdMUhwRC9GqP1kcE47zPNUWLuo4dssV7tWhfxN7cN27vpkrE9bCjcA",
  "key31": "3PGdHkja4TwzWHQK3AHCKEBNuxPA9oQq2JjJMpiu7GdsVWxEinecP49C76Y88gewiTxcYJTJiUgDaQQ9tvqhRG7p",
  "key32": "3t3msrFyRRe36TKCKk1hPd9qFwre2Sx1H5NtHADQ2EDGra5fWHRNb2jAXKEgqhsNigDstNbrFYedMSacQw39tTCW",
  "key33": "4pt3VWVAduUHg4or2s5LYR1sFC7gu6u6mayRQwhQUv3Bjx8tkSVCJsLCY1Jx8Gstp2RePp3ARDSLy1KyXtvr846E",
  "key34": "upCnguJyKJhXwPke7Cp9ev882VFTfJgYZDJaTAvCZsWPLmqZtvTwVTfTuYSKhpZxooQ1Y42bhiThEekRU41mjch",
  "key35": "4pEYkDdpxdmuMTVhAGowi5YMaH9ca7S8qnFqAyJEWSFQgA8XbtDjmMYEsQ6qrJXKZd2TDsDTNxMX2CYzPnwicM77",
  "key36": "4e2fwwLdGnaY3h5iSjVYU8f82nAY3vp4AEDxauB48X5yKTfwGUxKJBjDMhSAnEp9SdaQZtQbPakf6rHSAnHD832c",
  "key37": "3yWdUcSs2iEB2JPPtLjhGfko7JTw8WCM9d6see7HRLQFFFCiGRrNJwEZTAigq62U6pqvqrnWtRfaoYDMbBhogJEG",
  "key38": "5WqBBfviMRXFJEmbmEb4dZZECaWKj9dgNyR2pwv7GZ1knUapJLvgtxjUZQdMpViEU3NBo4PacAaoNJqbtPKfLsY9",
  "key39": "4xaGeWNdhwvm6k7stwCHVx8E5Eocf48zhqGYWDd6V9oW4DAh7XX8EDBjA1PYXxbQhDyL6SVg9SNXTu8Z9ywrGZTu",
  "key40": "2FpLK6KRNvkA5S3Vozw86ZrzgaABXjv7FqGiMwongFXVh8WyCJ53mpE5GsCjMdNUm6HmLq6Wva4fx8cyjuEtKVwv",
  "key41": "2mWS1YRyZyKfUJcuW9jMz37LMFXPURNGXQUT3v7FHfPbMiuKJ4UhDd5GtTdFVhhVJxvAhpCbDvKN1v1Pspf41b8k",
  "key42": "35w97evELKW53xDuuh3169p7j6fg9D7Lg4tALAeiA6LyCBfThrYo2oGmCcGSsYzZpnqGkmeaxn84AsFYJpEn5b3v"
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
