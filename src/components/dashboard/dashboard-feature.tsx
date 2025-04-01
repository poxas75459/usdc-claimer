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
    "4D5wJKFgGTUbxRRzVNgvxK5C6hRYj1J2NbEZ5S7kkE6ekey85d1sDQtLoRz1cgoXArpWnJdhHLYT5XYDp7jW29ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yf8P8FiB8oStrQ1ADK4abZuerzwVEy1qJRUi1ELxn9CvLkpmX7Hi9End3x5G4eBA99tsv5Ux6v6f1aQ2gEgZdu4",
  "key1": "5wZVpmiLYLSAv4zNFhhBJ2UXqhMCCCV6NMkRj7hds3WvewA66srS6KjzgvvSv1NQFPZDNXdPUdcqULPghG28M6Rj",
  "key2": "xFPSvmAJkkK4UadvcySu23LdWxre9Mg61X3Vmo4SVeDiENNLaLjSQGKnqBX5VnMdRKu1Ze6DKdCy4oHUE8vuEBL",
  "key3": "xRtLvkaprAsNXMg4uRgKTidM5HPtXJiLp4cC6frKWTuRePEL436Atr72t9HYxQLcKbeSUThgsn6wdGLUJRAj7tn",
  "key4": "4WqFAKHXTankN18Ei7HAij4fxK42nSmgD2H4kLJspdEPkDjQDK4Y8aBzhM7SpG3KKUaSTNHxSe6U2WW6KZ7rYFhA",
  "key5": "m7eNWT4M2T9k7WcWbx8hEQjj8Hr8uCp8jVnmFKjRXk6uU525St6mzWxKe1Vvm9JDHnf9cGmWM2EzdyJraEFvskk",
  "key6": "2Ut52p8qpRdnd25DJumkXQTXqoPo7yPaJoFXZijMWjDpVLDKnQebFJk7uzgCbfosaTiZKUX43PZVnui5EnUfv5kF",
  "key7": "2wjantue2de6ainZgHS4MDvE4m9ZKSNb9ruv1awGba8ot2CEX3XvDMDQEAuUhHA5r2PYocXXdqi1fxrMwbb6cvd4",
  "key8": "4G8KBLdFQKaFqjP2PfYWKNfYzvr2mEjjUsQVYUT7HL38nstxHvoHnHgipKVE38bxNMHKK7oqhVSrMwAwxqw4FSDh",
  "key9": "22Wai8Th7VynweqPELC4U6VMupftwzr7HLGG2sq2dTgM3P5x6BnjVw8RAr9ZAGAewUnmKoY9VVTfQRpQALW2wRHL",
  "key10": "35eDyhKMmLriRHy8osW6K6qunpkNVnkTwQoUbZeTPMQrte5mJnN9QwZLQy4STcmgatwe1FfesRYsYGQd1mgvA7Ut",
  "key11": "3L7oRjoWKNhgNnvephnMzkKeg4u2XaDT7RyZmuZnPt5387FXiieApEJkuVe9dbsFYY6cAFMqHQShXoRUHubGpBZv",
  "key12": "HnfUtm7KhJmpp8fAi3GSZAEWrkscuF7GApJH2pqVahWfCqSbNnFfjyoYmojMWYA7b81ikwxDE9NU6CfmW4RFRn8",
  "key13": "6PBmtGd8NbnvwBqvUm9msLrVmihDUhcXfgf2De7easK4tW9bQuTaraLzZGULTePEocTrrdtyxhFjMbZrfwqMNH1",
  "key14": "pi1Na9w8QAYooePXTMjVa5B844yi26EcVfGAwDyAAXAd4msZ2tqLRhxA242nmCLKyMB8uP1Hnb84zvmiCizho76",
  "key15": "3mK7eDsfzdAe6rVHSisbTgBtttnugWbW2MrxjPxSCPgjnQ9igc12QwgeTQwWnRZX6xMchqxSPk7JCs1ZMDhPW7kR",
  "key16": "4ptz2gwabGwcCuR99AVF6iy71jBAuBhj2V37qWaUjCXSewZaTCeakMDpLRkdMhcFABYENDob3cojqJMx7fUdJR8P",
  "key17": "3o4xUaeDFo4peLADQkrEbKE8qAXcngQ67rsga65vqTNUjNKjWzUEAcnGJTotmr7XqD2XHe5QsuU9vnCEfwqMR8ok",
  "key18": "3YXXGT7i9A7S6WujB5Xs3XXT4RFhE1yibQEsq9utmuCLQQjudGR49iVEWUZdrxv4HCW6M2C1m23wPY7exjewmPuT",
  "key19": "5VoYXdqf79MnqEMtPoXNhesX5ZTFNunHxUKgDqXznkea1ucF4CM5HnRUa7j72AAsnnjA6UHskjc1asqhzfq97HjF",
  "key20": "4GNMAyaUM4BxevQwtpPjgdcwDADtWNECKAWdcAXJ4zThmARWZRgFkQRVVFZoJ7kWThFozP6bjAYQZjGvXorDV5R6",
  "key21": "5JJWWSKVCw4TCRWaJnZ9zAjm2zk8vMjHxuNjReaZ4ke9umDoGPzX3nR3DDJMiWbPhmX4RmDnjuFHRCcHhL958rje",
  "key22": "4JL7i1GSyaSxFgaPWzCo61qnvp2GoYHK1j96u7tg9x9n2QiQFSGfEx3vXYvFW79NhCEsEQpWkBCHX9his5gWXPpB",
  "key23": "3DxQha67gPPAthC3fxgCmJidn9L8vVNexGnZUoTexibMwV9d4eDTQVD2irWLP4QundMvMqMxovnPAMWzjDmZKrQ7",
  "key24": "5tUJ19PRdU9H6yqpUYbYfEdWrZiK1apgEdyJr49fsrq4nvBTUJ59MQecScpHT2aVxq8APkhjLTvznXJuxVaJpCAP",
  "key25": "2NwD45snx6L35aKwrkSuxd7WjsAMYnCiHGCc1XH7vDW9ujwTQVu7t2UohqHogLjgPiMmaHqvh145uXjNFSWhoYdb",
  "key26": "5Bz1HcMLEKLrxH71aiAwdmLwBzEkCcb92hqjvedocKN6zeGpvz7DfWHbRWTF4FfW78rzpgDHyTeQ83U1Q3p7VRzf",
  "key27": "2Ao5jAgB44enshzr9QS5YvvZs3VjjnhzaNmYLx64ZPAtgzJtFNhb2jiCKENqeLi9FMxBep6xmD3uGPWMR2y14vqR",
  "key28": "X4kfe3LzcBNeVJkao19PCiNeQCDNQ9rVM7qeoXJym77nqgQK6TGiNcXa6MAUnSRsAkB8vPHXCL5vyr7oFpZ2B8H",
  "key29": "5Nf6aGn8yfaux4vdx9cNRLnAKqDrjooz52geM5i2jFadBKtpPg6Shv1n6Q1Dw4DZ8J2VcRXVP4w4FJdbYv77ookC",
  "key30": "345si7c4D7VBnYG71r1fdr5RnUo47adKuoC5gR2Jh5WKrfVZTyzHjv1GUq4veBA9VDSfykkXyu1e3viJc5jhPsrP",
  "key31": "26UC8xqh641HuYQ7FywSm4myKp4fgZCkbgggsZt4Ff3PQFAq91hXYuemVWgngFoiYhnLRAP6ar8UgLF8h5r3Qfzj",
  "key32": "5MiXfRkjxgZZFe4zayVD3GJdUuChjzS2Y7Nq9cjxUkHr1Z7x2m2UgB3PmN3YsCcU7ykD25hQXFVvSvE6UMELvSCt",
  "key33": "2pZ3pdH9D7ZBSLMpnSGVJaXiyu46ybaSVKYsmmFzM2KRtKGxdssXFxRos296Zg1uaKyVpoB31STKdmydvXnXPYAX",
  "key34": "3ygc3rJJmCE98LToM5mnvL1wcV7EiZS8rQwiec3JJGysVuJ1SdCWSXgvQbxHpijxyBaRoAS1NTaXrzkSLSGxnbhd",
  "key35": "2K6WEhjurytPGLHx4FZBVd132A1XNg4mVhsgGGkyKFyc9ciXe3auJQeFDYMDAbVFpvkf479QhM1UyRnYpKVaNBhi",
  "key36": "Yrj7eREcHSZN83kNqNKSg9SZKHgbXFwDtBtDXk2xd1tE6eq25arxEnXtx8Tw5LzmZMzBjqDqiRbjMis6Ziz6rCL",
  "key37": "3Ripfv3rrdykRX4zSrRWXjjfno17TgdTEF7fcLQDxBmkN5YUP5GuDtVfcDbvFjAnZZxfjnLEaQ8qLbAAX76dbXrg",
  "key38": "MpbdJnYbrF4Q7weucWNMHaT1fB1hmd9BEuQErj72wFfbgkkUBaXiSkdBctUUwU2FBdEwrvV5KUCrWBvfxSQmChS",
  "key39": "T7o8QNSPXTRxaGXKcJdnU3qzrjYnJqJN6EdsfJfRYFCmoMpABt3Ur4LZtsoppK1DGBfqhhFy5omjiWwR6tR9AGw",
  "key40": "25riFnsiYS97hZGXK7mSrd13tWgbVvem76v6RF5y3xwDq8qKEYWJ7Uygc9zQd19HVhqMEtqHvdwzVGo5aRHx6Ug8"
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
