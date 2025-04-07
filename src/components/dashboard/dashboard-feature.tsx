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
    "39MKKUsU4DELa6s7cyCBrFVPA2Z8vfBQcYpgp8Q2ZvT6gHf51jDGHaYSWy32oRpssRBoRgeW4dr2FyrY34h9fZrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuNJWvMRCZVwzgB1kqR8nzCXP98MHG3DYEmoSMUxbso1Pr6hnDhtga3gw7EiAoyMy2mLaZtatkCvjMp1QBvZwA8",
  "key1": "23YksN5WDRtjrvKEJmWbFDT3gFnCmPkWvM9RzVQJwFKxayLu1ARQYXP5dzPxx3r3GywmLevVgm4NtiHp9t6GULYX",
  "key2": "cn9ozRr7wLAzBTP6Ts9wcvjUV29jx6pH4ZeQDLtp216GpxYp18oXry5GQxAtpUKwMmi6vY7oqt278aRTfQ7PgfG",
  "key3": "5F7RFzZUsLL4JogV5aAFM2tbVresYNKDgDe488jCiH8uUdHfQz7UGuSmZ4Do3Nq4jvQzaKJAoqCyBmLwuJfyVKD7",
  "key4": "2mdjN6QeLGF6JvAf5Kb9qhR6ctpNuMFU5xXXmHDLXo53PL9Wm5Uz6SmVEWMxm9scV7hNY2GvbM7KmYmCSPS4BHes",
  "key5": "3XNNX6XkRbNVW9fWjkbV4x4ngR8LW4twCu4Bpj1N9kUHUQV5q3PSJJBHUt8sMCCHtvLd5cBSMUhExwVBmjnqa6Az",
  "key6": "212REHdfRz4y4YbD1KCq5BfzLCTxTVyGfBC6f1srcFZztm8g5E14eo7WoLfXGQSWVXvp5Pg5YwMG313GmSov7NUK",
  "key7": "34aTBwwBWi3DkGKxX8JQMtt3vh1xT1cEcAk2PKUC3M9DNeRRaDjcQf52H1vhzDZbNG1qhmfqnT7T1CQ9gpn9Q4vD",
  "key8": "3pTvhYinymca13bj8sCnQ5F4qFmne9DchCwBkwzx7iRTYbaUB1v5XotELtaapFGTEqRcxwUrtA1AVDqCMWxbSV37",
  "key9": "z1JdSJDHzkT6jf6xpsuS3phmdfE7dakZf1x4oHn4oVwiijNcy72Xxbq5EN5VUhwBSe1N1QBfjFp1GVencJ1WgnF",
  "key10": "5RrzaSMQCghCq2WQJTQvZaKpSnDwWgLkCApd4DDkbGMWnoAyEPpyveJfCqs7PhBJz8eEDAgQRhDJF7DRRwgXJzQT",
  "key11": "4UfXHRUWatf3EyT3LwZ47aax25ELSdFcCrLqnm3nPSEeshTmjRtr1WJpFHBGZJH74qZ6BekDcWkmSTeRPpR34ZhV",
  "key12": "2zFAmyKWR2ZFUQM11VxTX3jjoPxfk2vCAc5dYJTQjqmsdaupnKhWRospeA2kmVZjbomQtWiyp7cU9DWXU9Bkkbjn",
  "key13": "5Q5spcvXsUeRRsVsTZFrsuPRYL2GcKhuimmavDBwYmwSnHLAScBYLtwUTdmUWt84VJsvDwnDmfPjTYkRkMnw2ggG",
  "key14": "8zcDAXgyfusV77Qzokb96N8uG1n1PtKfr1RArcUJeD9FXBFBNHaN1nZt38oSJ8Soezq6ubRnpZnNY8jjvoQgQHj",
  "key15": "SZTzaZo2uVGzPfzMnjEStjbnDqskqZBoZWgjZ5JSWRfHqruSWimvJXHsLXRi489qKf4u7ZcnvQu9ix4kueWzYVv",
  "key16": "2P5TG55SDWoVHaTPUz97dEBTVhHopVnLdVVrLaEsfiDFc7Y3uSH49gMKnNpWRrKDroibyoKgNjjJs2qpUNuqSVKq",
  "key17": "3JZrZbPpArgJMVfzJPm6Vub9stRwnwHTHhbQqgMnmFnMw9JoWAEEmmPajddd83Ut7rbNQMpLJ6TVofYVK8xMxxxj",
  "key18": "9o8fzn81BXMocFKvGyqrvvNCveixaQmuiQKGcjqrbeNMmwGD1iMhpC3Teap31yQeYLiT3Yt34qTCJ9fFucZR7xm",
  "key19": "coCybNczn4XJsLeLWwtbKrM2ivkNE5Rw7FrLZ9Zr2SKh7FJYAfypzmENnY62dqBt1PHMTLNnWXSJvQycdNNPLEm",
  "key20": "5pVbL9xoQUw8jW5ievA3yjw6qc6Ui9QA2KnjtejfiyKd7gut8A2wHf6Drr1iiLsjRbMVHXfLT3MhCLysVLQAQrcW",
  "key21": "VvSrZcevkW1KGqxBhA3yqy1DkV6xUgaRiurhzM35FTGkAkPm43bWBVsbSyLFXTeimMinWarHLB2DRJ5cNKbeLqR",
  "key22": "4Gr7zhGQMJd9hGWqUgiQQAMxdbjRc2BwbuQdeS932SVCbwrsy5H9PGVPpFeebSmBCQBG5vWj4ceMJrtYZ9pifTKv",
  "key23": "5ktq2tVwcCDjdQP9coRnJX19Ta3HPZmSiFo2kCjMXMWovBxzBDuYgMrb74dHNyVsoYfDT8wJnF55W7tJLuNuEsd6",
  "key24": "4tEvscV9WAPJdj9ckNynWRkBA3WX7HdgPbPHAQPxg3stA8EuDirxpwRNs2pdTn2ymAbRKYHHsUFwM6Fdmzvd8Vwn",
  "key25": "3qQrn2SGykb1QB53pvzdGbJhcy2iKzSgpLneDSKT5GFY9PvWU7zLjDuCMgQ5aTxvKyDRki8En3U5yrjtegjUCksD"
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
