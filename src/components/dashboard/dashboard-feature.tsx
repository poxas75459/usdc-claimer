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
    "4ZiqibmvmFCZcLycrrR6pms2J5irLUmBnCkqYKUQ8jEbN8GG5XaPp9td15FB5tDvPuZCRCsfooJDdxDEYujB2kR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eY12U3VAMTWtTEmcyeZY71Ceaw36efUzrX2tCM1FHbmhdBhgpyttKV8bxKb9S2imZFeoyK16HdN2kQf9WCwYpFm",
  "key1": "5afSBf7JkesQb93qHGxxS8MzH4oExTLgZX5Vm6snVNehcVGyB6tZk1EFrBWZngJhDBymxF7T1AagD9WnzATgbhA6",
  "key2": "2KUw5gaZbLY8Q7TRyqoSsG858oqtEh6kzAw2YAvNmEJdc7ne4cXZAaK5b3uF5eGyeRZUQbSya1kmnBDqyChxRqYq",
  "key3": "3mFFkgiEQ2MWbimhqj8jgRGhkBE64t5AqVe58oG5BjnhM4AD1DYRA59pdspo12kdQTzf6VkPH524NkUuvgQSXhpt",
  "key4": "3jZA7gyqig9WWyHrD5WNKbHAoDhbpP43F6XSUsi6boDkxMYZuw3kfdEQVe46Qv1CYz33v7fKfQ6oScNWJez9Rys6",
  "key5": "2ydJP1ocHQxpXhr8ci1AT3Fc3zNYR4Ke2LN1RYQt24Hx4DJNPe1Nnap6r8JstKkYW34cM8L9Jveho4v34ND96L3",
  "key6": "D77fSuAUhVYwuTUjegintwQU7XXJbah8CxvmANsZBywgs8KCazAQUfWNgLNYVU2nQWrP4AJQGarRL1omcrCdBdC",
  "key7": "5CEcu97hmQhH6fXbiKEHSkVGpvLRrHtJc21xF7cHiLruwNnGp47nbP8KZVCQ4zcV5tWPFM7gdUZVTuuLRFkkgyyT",
  "key8": "4bxaQpDfV7Z8ji9hdp5WQoGfKGmGRvwtRFDyW5twd3zaL8JMV22JNmk2N4y3VDFqvpWhyjMvUBmNA2gDb27wpPTX",
  "key9": "4DkwJSkSoae32ob5EDkjioTEmuMW5hRuTJUhJ1iC4KpEhR81Nq3zbTvfL8Y8yaiiM7YXw9EmeweMJd1kKTEnu66J",
  "key10": "4fLKZQghpWgiC1gokHzWmKqqsLpWtnDc7Jev7eevHnkt67qPF9mKvMcc5CCLikUqBbnLneRTv69sXtdCejqbHzzL",
  "key11": "HGd1zHJ6ZSmpgbP6yKGjwbDZmz4WEzMim2DVD7gMFdK3RtVgzQVc3QrToPa2QULunxLSWKxM4VkwYZwQSrkjmEC",
  "key12": "4iCLCRh98uDiqNH3iFmBWKvPSqYGqo5foxmp8rzscunZ6SrpU3AXtj6cueMC4C1P3sTZd1Qg3CMTQdoaReuECLbJ",
  "key13": "3u7sUxC9QfsTgG84nvtmFMHFLddfrpBCojbyCdL57HSXxGHmjPHEiTCdqf8S4a3iHeTUBUd9PnVioEP8joWyNWrA",
  "key14": "Bsha1cTrGws4gEbnvqQU8NeoEEEdkbXrUfZT5887x9Q9bEmxEo4yQC6ayhB8v5263A6kSbdRAGpr7xYj16GD651",
  "key15": "5sgGgHjSmfZrfeE4zNMExyYNnaYW5RzWcvKg8CZBQnDj2BFo99YTNLaTXsKuQpZxGgknRsYqJ2QHvGa33cy25NUD",
  "key16": "2zJqqpaDXfJZ47g9EfG6vBbjCrfGAh75wLAqJa35hCmfD7gMMJboNpWVWnnzo2Gcra9f8VS25BddjSUnNL12aeYZ",
  "key17": "fpM32p3rBU572trmiH8yzFi7GW3R1g1e1eKmfFQ3occ9zDEjfL1ZcktbqXJq8jiG1j5NTfrthZHK6NV415ChBom",
  "key18": "4iAsCwuXgUMoHiWC8YTamSHeQjvqz9DjPXWaf3Tw1TGa3pSYqUjHLzPCCajp2CN7BbnKkGDZxvSmtTVPZQ5h3kWd",
  "key19": "3Ej1cbSFJe5fCHvAUoVD2V3h8kexVKnhwQbVfbTCF3c7pTdwaTsDGRXZns3THwpbRzAFGstnr4WWq2tW9eMjztki",
  "key20": "2TyQJU5eqJcYwLqhyLThrB3f7DHhUA5ygFmFz1D4ngUQTPpDatRt4bX3TUeSP69iSpXjHxrK3vjTtsiHGjCguuLS",
  "key21": "4pKSd1JsHaijpVHSLn9UeyaNxbKKbxrwX9dMGAwZTVTGcGYhQxfqaRyQ9qKiR7Gxx63RMRTYnuXYYS88Xd2n4dj2",
  "key22": "ZDbwRScJ8VryjPJFJtYCghwNN5wEhrfzFGsdcVV1JPQHgrwFCowtNBmM3Wj5GgZ5f6X6zi52iRHt9TeWqQfMqvR",
  "key23": "4MDYnmka9D9fLREJJV9pb9hTCGLAzPWZfbHkEFudcXirmAB5MJeo8rACBEhEerUBGepd8fS3eP6NAfaC8jvewFem",
  "key24": "2aC8xYEZemLzxVKu3VEpBjhYG6m2N9ovnMRx6TS9kE8jd28fmyvrxV5DsfWG7g6p4beaU88TcnvGmMXYg3nFuTjK",
  "key25": "4uVd24KnuFuRmu3wVPhujaWRuzLJs3kdFuYYU17USNDeot5YTRww99JSngH51Xu1e5FwHrAeSLTBNdDBX6fU8G24",
  "key26": "43r9p3WH3SAWegMkgUq4GufcsoRHDXQgezRwas2KRQdRGXmb6PQDGrY82zbD6JpvkTLbFZDQVCzDeqEuxJUDc9z8",
  "key27": "2PpKh6q4bgWAHv8Zz6dN7mLVHr8JNrsBDPnPKFMtX96KjCjtJ39nCQi4Me7gMpGBJJCyTjvHUmZsdM6KL1dZ5XNi",
  "key28": "22uEytDjkP9ZzaWyL5jj6yUFutbT3Qrz5e5RNpF84o5KkrgdauGpqVq7H1NPAiupAm9ZDfhvCymHvUYhxpMqDsN1",
  "key29": "3LGCSatsPQo2JySbuSrhkPp6LbnB54GHK52qMW68NLH7MeMy2VrHrEG2phByiZ3SaDrK9wAtHW5WntHC9a4Qcsye",
  "key30": "7dLQM7gfhYFUAjuoeGDnB8EXDhhsYVXm6aoeoWTi8eLAkKbTPwkhvEG6A9ejC8ABZS2nWPBfwkyjrcDg7YKzgTb"
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
