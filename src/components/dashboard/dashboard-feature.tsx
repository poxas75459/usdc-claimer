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
    "59EHyhFWx5frTH8QWvBGeNtTJx2hAyq9dgGsUFJ2vtxskcAMKzeehnVS6khyrx6Ei2eqTJQeVXjrdeNbGYgPZkiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVZ8auRGrQYQxJMcGq26P6uD8sPVy8Vaw2DT4iYVXhEXsN852WhJYW3fynTob2STESngGsbGz8BKEcWPEYh6MSU",
  "key1": "yEiNEPsc7tDQHsCcmbL2t4SCUzktqUo3gAYXjwjU2PcKbrkpqPoMWP9yHT2cp68cnjB6XgGDqgvczyAJNcZbj5f",
  "key2": "2ktv7NvoWsurrgnj8s7DUM9B3N4a7AEEtgHBNyHMtNZCfxLsWFyEjj2hUpoYhnxFapN9Z16c51YHnM4mFNPdyCET",
  "key3": "uG7RF8N2agqJTR7jFYnR2HTLQXn8ACJF4Kzr6k9ctJVL9C8KCatPp4BeBny5sLPC7gCjr1KAdap93do2gpwxQ4X",
  "key4": "2JscXLPpXtPyUAR6s4T1XknnxXjLw4LY96VJGxqoZSUkxbKLRLGGPsFXvtyTvN2eVbaggnvUjVYHGaNBzzL8ZpB1",
  "key5": "26dQN791m98yKJYLskeGK6cTBewzhr7oX6vEZvTEy4Fmb7CVvvjDVXCj2d1caaCLYh7uiz3mDa5PD41yjGbUMyAW",
  "key6": "4izHeprhKbYPwnrneby5sFXzCdZ57dkBzLHptwYtZyoK96zEqd37kmo7kApiD8vhbyV6419EoG2tumTExpoTpb5y",
  "key7": "5dYfMuieXA97h6Zzg5x4W4gZKpGQMxpvzVp7WZsxo3Pk2bo1Wsrh5QkHH7tZS7yCtXfqeMa7XMfk3Nx1HbYPitHi",
  "key8": "yXxegy4McBU2N2m5PSw582GrzLFcRoevZmcLbNrKgvaUdq69JseT8dnbh3HYSzZ77exuXwXKjmoVzJBU6cCzQBr",
  "key9": "3UQYA2sEwriH6pq2jqhkSrujRQCgbtQJYveLs57NHx7ZqBZt2MJDrqy9q91hwYKhJQhrPyZjmagL6RGouB6ZTQLc",
  "key10": "WGNe6tSNxuv7bEgU5TUjGNxrvXkaAGZrxJzh3wg97a94XcDTLjRHLorjSSio7xvns4PNDUcot3S3qydT76iUpUo",
  "key11": "3hfmyAGc2t5rdfjSrefhdkdRRkjHNvxPwiu4rm3q4PYHQebnUVrGnAoRBXZTnvSnB8uP1ojxHgHnMdFF6aH9pxQ7",
  "key12": "4aX2yZRCAkcXhnBrir6XZK5qKfmc2fRJvLuw2wpocEkwCAqJTkcJ142hvjpup6iBtsYu4947C6PKZTo7ZzUk8UKX",
  "key13": "58YNHxVu8iTYFji2VRGkQbmxesbs9uRTs7G6fsE2syYyfNzYSgYpSAGSLNwzyafLNXJoRTeV5MMPjKzBGATsbXtT",
  "key14": "sTzfBE4NmYPYqmgVYNNoJ6JCcsY5ikuG9VeWD9kwwVcuBPb2x1Bx69vcnDc15pgswHXDRSDc8ZSCDznTguHGpNM",
  "key15": "apsA6Kr8oamYuWMLPJnefG1wGCRgNB1GKuDSMvLjEq11JXLAv9cuBMrqALT4AQ7Ceg4zKrKdwgVeFCbF92EwB3Z",
  "key16": "29MKeNACuC5VvwYjtXJS5VgsYEFBFmvGfCVeg1d1bMVnUD4d2mGeywKiwm2zTyPT8VeGjJP2wna1S5TJNdHhxPxq",
  "key17": "3NKT8qdDHKVNGSXFjK7zrk1MZJvBViWRwmuvoavVYtBKuiM9datyB5YmmtuPG9JbzgaNdseBxL41CW8yeay6wiNc",
  "key18": "nNiGYdBHEZM1A9dZSvYoRKkXWvcFYXzDEr4aM7DAhQ63YWYXoE8wFQSLRaaCXvpoZcMYiGGu1j38rbuAyo5Pxv5",
  "key19": "5GjQ5DJu21n2K6yStCUCZfZ4rzuHTJTXtxpb75Xw78jmqtTyyKuh19F5Z4Q2WqJD2XEQ9Us36q2JRGuRzaiPWAPb",
  "key20": "4BTTpZjXUc7YG9zDSCog27VCeuLXjdoxqj3cGii17yMuMMWZe2qFkb2BoTivpKrsaWXCdA5BWWsoWMtoQgb5kC5J",
  "key21": "2FAbjLQ2shkPQb1dvuWXE3Nwxt2Rq49VrosHbFFG28YYQbsp31bw9zCxYytS6AVBujMurryCGn3Y4eHwqfphvoXi",
  "key22": "23PNxYMdvtMqhjiAQYST8BTx8w8hcvTWBViZFADfBnBcCLX8g4w6t5cs15ef7PFsf2cx7fpMdsHvpEgdtDZAmJgJ",
  "key23": "3X9ttGmLaAd4zNKTmTgeVK4pUiP6wN2TdmJpexjvrs8F8NM7DfpvnuFVfwCLCS7WX6EuJ8Wiwrzi5FLNKTg1c4ai",
  "key24": "5fxZHWG8yeELFNqnHnaw8kCAmNx1KpaqWkwsY6xCGu6z3xXxfBxET89fd3UfdaQDByWox8uUreLxHFCU2WmPGxaN",
  "key25": "2WhvTxUvnKH8aRW2S54KKA6CQQaFiKChPozFDtPqG6ETp1V7Vtzxp1L1ToWQXkxUqPGKyajguPHdEL5TCiDjkeMb",
  "key26": "4eacgt5ZKiqCCsoY8GbKLwFKnauwXwDpVx3UkBhv2Jf2tdD5CniLXpLKKt94XurwVHtEa8qEpEUNbUrdnBtfrtUf",
  "key27": "5yt8pDmabujutYsEw3YzPVUP4fXAdGicHsBqMHyzC3MiA6DwdrrioYKeT4Xrnn9AWvbVcn9nPbTa6VCy793DCv8P",
  "key28": "5XuV1odhz4JqwtLyeNYcMCHeiG3ZwUZMubXkR9jMXSzKb3GxRmEbLNYCNBaJJDvW4d8WUuAcuadLJCi78Smgay2S",
  "key29": "4ZcKbQsdUvsPS2rZvHMDUriWjy8ETRtqNfDW88aRKHyURBjkYfLP5ZBbp6CzLbVHH9qBuYyYSSUpAcSm2VL4ru9M",
  "key30": "nSUurQf3Vg1hoHd4dmFyc6b6ifjBVG4SWR1UnovduzQTgR5zSg7jCcij1o8XaVauaRt4aJgekkUwzqowBqYMJtV",
  "key31": "4VL1uu2uFJ4znumHdL3gzaPpZLqi1EpxvKi6cJzKZDpe1etFe9G9xD7QygrknJzUD8joyyEhqWmAa9cYMjkmQnQ5",
  "key32": "3bRCw31Ltf44GctJpE3hJQmnHraas5xGUWBUUWDWnaaodskEiP7ggoQuvXdLWejVHQ14qNa1rHBMSDF9sw2g8qdm",
  "key33": "3DyJY4gAnQpo2fs1YyVfBtT4sC7NBFyAuetpGWUxyQMKTpahe3ZERMGw9L7h8iLEHRqyK6wQoeEH8X2tuYqDuJkR",
  "key34": "4fZERgeghDK2xVFJvqJWqKR4JQj4xioN1urJ5D3HzZwYjMAC3WvA1yVsbYrY1CrgwycKR2hH6W9VGRq1YDKdvTpb",
  "key35": "2pWkJZ3F7p4pQpY17Z9q3LLoFwtiGEEYVX9Dt3wV1wmvn4zMvmyxJRY6JwqUEZs1fT3ZUBR3KfdnrCmKBPTL5ZBV",
  "key36": "kXHRo4Ym38BZvgp9eyjg87kTxC19S7q2jMtmTWnk6e8BiziaJ9gFsjRsTi9wMtsrioebp39tcKMPy1caUkvmwYA",
  "key37": "3kyAXpmH7Xg5AQXDGTGU8or9oFccKE2xrxBuX2cYGVWEVJ61RYP2CBmkz9DXVk6KHfMz5MjyUsQdxzp2mzPJXqgY",
  "key38": "3nmBbi6ZPjC71e9UmMHN59HbZ66zGoR14uomm7qXsttFw75CDk4bFJPQjLuwSuMPeNM7SBtPnjWird8DwFRoYErQ",
  "key39": "pTY5Dezq42Ue5hJ5Asi5rwjhZBk4Kutk2bMqxqmuE2jDvXFvnLTqpH1jpAtMVtrpB38EPHZQ6hc8vCN7bXrGWpB",
  "key40": "3iRcUfG9oK4Vg8toTyXrezcvNH3szMCHMKFpRnw2Uok6Cd2o9dnHLJ5LfQYY7mhrn68qzu4ZMSiN86zakJXFPNs2",
  "key41": "DtbnJMkiBwVvK2D4hnCU1nUCvrxsjSuWrroS5njX22qQWNaN1qmimUg2b371y4iTntZpSrjJzgSk8CT4EGhNtqA",
  "key42": "3Ba6wDPe4w5YYFNCAw1hUvJLt3NSK5GTwopAXqT9heYsZyBgfMxy8AtyNatCDfdnjbpj6EDL638CCuc3eaR4ArSL",
  "key43": "2fV1kjvVEDqDSSrUgaT2aHisvNYrLWHJEGtwWz5zzBrVsircmJr6mk3cCQGi66fWWfthc24ENkfEL2XotvZUhUGF",
  "key44": "4tq8XeGN46YinmCME4GXmZKrScPB7Vsg3ycKdYVPWj1EkEpPd9DRuti11sxBPbmq2Z3zEJrK9ZKns9HQpGyfpdXG",
  "key45": "2BW3sLbNvig3DuKfBwvQYPs9NomhLqJgudEvLuYDGzMVWZ2WTeXcVVYePixS66Th895MuppaWuBVg9jj4MpfMAqD"
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
