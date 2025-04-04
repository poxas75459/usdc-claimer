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
    "3RzACXPQ3t9KePsNMnY8W2aFyYs9TLVrNWJXmmmkdkjzVEywZnax8rWN62Kcv58fmy8LumDVAyjoLySmqdH22b6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHpaSUQbhgeHbNacaVDg2EE5SmaLr1UtP1uWJdCWM9C1BuWHSe2CPahthqZQnjkDZzQ7hmEucHMPFaF7Zz5qbdy",
  "key1": "2sNTxppG2f5MFPf1Tkxm81iVRcuJSaVo6e6TgF1R2Cv77wcpi42uTokuJdQ7cCZJoQdJH5Ggpw4pUzFuxrRJuyL7",
  "key2": "Xi3z5QU6AiAeGSzmPbAtzePvjLDYDBnizoxiokDPkawbN6gRraHpMMGzpzQa6p8rB9Nz8FoPSyr3odfirbogeYb",
  "key3": "5VFofdFZL7KEip2CjisZwpSrricx5cxqFsAMsqsNjUdw6Be3f2BHVfgs5o75j4ve6ZSxv3MpSZnL3Yo81fr8Z8uM",
  "key4": "4gPDxMR7Vv7iPVqJjoGvN7X3xK99iKqJW3AzhqERECWzYnmq1YUvgVnNgKPkxbrKVM8ojVH1xXtM2UYQpKA9ooip",
  "key5": "3n38nYFfpHN4hsi3V53Lj6TrhvP8M4CVjkirop7ZxPVQB7FrZN6s3c47MXHiB3pGK6maJccswpCydyVi4FLCPqMB",
  "key6": "7KfPyJFXyAkXTYbQLo1vRmwxWUf9c2pc9B6wa149pMEAZ86LCS6fqjtLHjNtjP6QtUqgKtyRZ98wVWBV7pNf2yh",
  "key7": "3Z8NJNo7KqZ9XzmW9DVNpiutf1UF1BXctNxQBG2PQDsSHXouSpGqwovQpZwACuzPASeZCLSWWPpqnHKdwoeFCjdQ",
  "key8": "21GkPqbXtHz6Gnr3cgtAp5LuL1o6i3DQhuFDvYPS4Cfm9tgGf2bqzsS5Zc9qBmwZNp6UrqU9Un5TgeMJedQi1zaF",
  "key9": "5LzaWvAwnNr16jqvLmAubuUqp9DNpXn7nK2F2jQDNcT5iRFb2ShztTx5X8M9VaBz3spSweBnw73E2XnUiFp3T3f5",
  "key10": "4HV2jAq6eypUqdRvtFBBUP13cazo2CGW6zobVXfqkAkTHh5MgjxFxcYRUck6RwZMnywEXkusJYpZeTD32BqhrAMK",
  "key11": "4VrcRzwctGWM85sLP14hW9KaoVCyyFpB2u6WD4nYnA1AvPsmwG5UgTYfiAiF5wjaW2wmqgFgVe2V1s77Y9Twrue9",
  "key12": "2RFmu17MKKhSGVNmXYutnPbxY9dW2Psm3mVL8VET7GaiYy7GNCEhDE43Unkea3T1Cf8y6i2UP5ih1LocVZ7Qbwaw",
  "key13": "2LsnsDWYT1jWFTo6C2LKnwYz5NESSNnK6qUkMkGKNpmkx8ihbDVjP5t4jg9k8gc3evy3nbPbFbJGkLMnqCHjb6ZU",
  "key14": "zz4j7mwrPqsD9EK5Um4UMSroq6K7nyqQVXf9AFDYtMhiRkH75qv2DufS7HtqbUWdUEeyyhmMUzhasMFriemr2iB",
  "key15": "3ApQNy2MWKUwkjxHgNEYn1paH9FZnywKZvFNyNfePwnLQY6Gd4YFeekeS4UKzhhkJNyS8suD8eJ89XaDnmEE76iE",
  "key16": "4jCucRj7ryBKT9dYBoPeuzfg3kkW1XEFpikw64JfFpKK9hMWsRaHngaaUasqAF9WM8r4JD18LPtveUSpFpTNb8As",
  "key17": "29L6XA45HMXr5hnFQRyVG11zwWNymUkdDsChjyehKX7U8UFuP22gUL9m7pPrVCQWpCeJ7yHdpsWhP7NyzvPQJzu5",
  "key18": "33WiHgiyoGctFhcr7zfADeF2UxeRtd9Sqx3oTCouJP1KmGPHrCYVwK1k6aEGP9ybjqCQa956xYUpm2VG4jmrVJtS",
  "key19": "2pe876vSycwLGRexYizoeBZjb56FyW5Beaxg4cA1tXzbHAz4bn2KQzhacPDv27X8w4h1i4YeTqwYFKpTB4azrrRt",
  "key20": "4cMubB3TgYqVbrDcN4tUeAGSUu7jroXTpoJ5scDc6BpAg413a76PmjQSsj9bVWYQY8JjAbpnYapsAsA2vkFKqS1q",
  "key21": "3qQWXEQhnk72LPyaBSpvVPzbwDZatx1r8DNobKwokBnNxXmh1M2rZXv5T36R1j1xKysKQKxyTQy1bgMMemKeDRBz",
  "key22": "3oJ8ji4FCgS2aMuGZificFWtNV59r4EhtPosCxA2jj9GQ3fgwx6gnAHuNheYdGN6UK7KePwwbrsX3edPwd6ksKtc",
  "key23": "5M7uVhup1rLjB7efoEkdfJCwW1gh32E5v7j94KnVCjf7xh3UC2xZbFoN9QCiFiD9PGXttUnzhNMJ1ULssoN8PoUV",
  "key24": "3gZPWcW7ZGpuVhAjKPMPwoDAD28S1bjnVxZBsVs9zQS6Aw54dzcg2YVKwrZp6DscWYUy52rCptRrp8UxXByhGddv",
  "key25": "5FTq8VLVZxabTuxqvMnFjZ1azffMxh7GDNEo7c5j8Pmm8HHaiVev88Uth98T18q7s5ePNTYMefnZMkTe9b4bjxzd",
  "key26": "4KgzhA2ZPUNJexdpbHCKo4M5wABkmbRZ5ZRzSg5rn8RfpPyKfuXF58uedWyUKJDXvj6EXd5bMXVHMTaXMtuxqb7a",
  "key27": "4exCeaBcZGiKrunT3KWBbYayGdENjjUjXQ7exjcXY53ta8fp6u1xEDqyjLGn5A8XhA6EFBp3Urw3RVt9bqrzrHmJ",
  "key28": "5ozTTbyQW1ysiEeJqbMBhMDwWeUwLPawF5pPFeZTs6sdHE4FmE9r3po8H5LxSsv9MvqhCfesqCazaEqCCYSF9haQ",
  "key29": "5TsZiCCJGtdBYCKSV13xYBddei7oJ6dhnphayESyJKbkmiZi5U1KQLcuD5bGw9DZrL3t3yShZjMJphPGpu4ZanZS",
  "key30": "3EtYJpgqkEXubZ1Di3DbEZa1UBFgzucmeEg62SsSsiXiduSw9MvFu9SQ3efqQFPJ9wowyFrkGUn3NJHwC9PFM8Z2",
  "key31": "4a3aLGnYUBHdo72Watv3xe4YJx4WtwtFrY6s5Fek3D3d3zzD692RAXBNC5CNbLEocDXBBqrshK1932JZPq1FzCzb",
  "key32": "4Vnkpsj49GsECLAFVyQpkxq9VyzyR3QgRnMNtmjLes8gw3B3EYhjqwVBcAGHQXjw7VGjVm95LP1XV8iHJN7LZkrp",
  "key33": "2tsqRiRZYMbwwFvF4i8YpLttpsFTLEz4Lv9ad8dnHb4BmXfXqr5J5bhLEr2oxXaUA4zfCoHvsXFzmsnUHPeRW68n",
  "key34": "2odiTkTx1eYXWSqW8xSux4xKBPSEm12vmvRzcmUc2arWLdn6bLqhadiJtvTrhbP7vPZ7Ap45zcNK6AtYcnnfSNDu",
  "key35": "2rCERf9fYf2c1uRLpEQYAXSdAVRwoAnzNyd9Fs2tqS6rkZEnyy8egsz3oV5dACQKnpLeZcLuxCaxkuz4RDXhtG3z",
  "key36": "CT9itYdk96pas9b9MH9rwu3fjcpSXbzSSePHEW2VUGsZN7W8dyJZh1idfKCjMxV6QYciwn2G37bbCZ1do1eWe1V",
  "key37": "4eECrFcZZ2c3JGDQGMGoaG2zxirJBxhX9JhnDaLmFsYWUVjhgy1wx8eEcFg2cLwh8pSoUCQ9CZHf2dq6np3TQdTC",
  "key38": "5MYgrXgYCsziGL5MqzWALDzR4ydgL19zEpqM1FvJBXj59JYYF7b9SpHFfx8xqLWdhvTmBEEwUyuAZb7H5SsPQP7d",
  "key39": "43R6pRQh4yWy5DzJPjjedYSkaAw2SoqfYYXxY44RvAVGTNGhfDC8NpPxJsbg6y9ZoNXzMv1tDpmuV473W1EgwEhp",
  "key40": "2sCAqtvCUk72qQjuwgXfqmWtejdntGUCjdfFed7cnyJQHJ8aCcXxmv9wdVcgHVsAwpV4aV8XHP8d4PvQBDJCRJ5v",
  "key41": "47UXdoFvhmUNJXzLn5UWkbB2qPPXTVXKfzm7LyLASrLBs8vVPBq4NYCc1MnF8yfMBig17m5NKfyfkiy8pdhvP35p",
  "key42": "5fgJJ2pBEoJrD8s8rzBezJq5bZyHqzT7rRqfe46cTo3hTEcNJkjL4ZewhtURYM5mXbkcpfP5GN5foQJw61KbDp8w",
  "key43": "5sSSah2ZYBHUo9aUavRDrDrZbGkdpJYVqGX1dpc3f4Dp3b9CQGSqJkxBXLD8EQYDZBVKwJzpEQLpRXepvHGe8QrN",
  "key44": "3G3WH7FUhGg6gj3k9vdq3bAupvXAAC9WkS9mhnELt8LQucoPXg36Bs8XcPCVa3Ux6aQd8xJBSs8pW7fGcPyDFQHj",
  "key45": "2bzxjjqzF4nr4nqnkzLZSiTEQDVWzqrcTYXaEHB7gaCHqnrSFWvk62y95vR1Gdvy8pRjUgLReTJYjgvQ4cU1JFmZ"
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
