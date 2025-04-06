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
    "URuzRd8vdhPQh9VVPa1X17LEyth4ZyLwSBYR8mN67TgUZLYZ1rjYa5TrDLv9r71wkBGkE4G6L6Tp3Y3hoMehYSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sV3pBnx47k1YCa6gCG4cwtgKrPXh5enAc6HLdVX2n3LpuBHWguXCyMCW5DyJJT2rh4hKY6kCNpA4kZ6nRjRftpN",
  "key1": "35o6SMJdxhwWyiZd4M8iTHzjkgUQaA2BRRGrsP43Zmqhz2dqzFT2Gp5pAd7MdPSYKSQmQfW8rFufQsRd61i1KKZY",
  "key2": "bgS7ri4vR5B1b3oU28znBgzJdZzNNmPsirgSoFJfJCbmr486nWfwxuXSLsoM3qGqebtu54t4Mpai6nBTND5L7a5",
  "key3": "41ydx3pswVURGJefVoi92z5kSxa2ZncaWuWvo2NiaY8CG9APrWPck72is6LGPq2HumVW34J3QfPzFZZwuSzM9jC1",
  "key4": "3sURAWjPasiSEdNLxwkUkQLZqCwgzT5ykrTqKjB5wk4dz5RWp5uYAp2RQgnXXwvNKQBbmfSZne4PDTBftmdqgxi",
  "key5": "3h7syZQtGwuUxKzyo9XSnsRK4T6em2sKftG9GEs3kXNDgLPt6hMMzkkW9cmi6WS2GoHFbeGvD2Qu8zRyPP96STdt",
  "key6": "4g1p4epYXESqjoxPBHzqmcQqK5d7KdoXXvqa9n4ecBjYC5LYJ645KB3NxmJjYiiPN9NGdTxEpzBZM8tNY9LnRsqH",
  "key7": "2y4yXJh5m9veRiWTAxJeHrCC4uvE3oX1eeRCtAFAeiRb9WyyFCzjC9sQhUntQ8Ue9yG52R9gzxiWAyyQBTVtjUcW",
  "key8": "43eM4GRjMYDK4ZnNuJz7QxcuQTJkAusBFCT93kJFePGBnYK5omNVEFrjYxqGofbf4bWUDq1eg3ubB2Ldz7bs8S9Q",
  "key9": "2e7gfbYeAAoFJHTLHMoyEMc9srX3w5gs9TCP75bbz97LVCjDabanYv9USnhsBnFkgSYkdUXoPuL3fgcu7gbyvydB",
  "key10": "4vYZfyG37oUjxXPNioptrXPt3vny6TnmsDZGcDfXMpeTNH4E1D8Y8oFzkLao8hUh7Ddtai9zrUvA3d6DySB3NTdF",
  "key11": "5NGVVJkR75BX3hyfyR42GD2ahok1r5E8Fce3TzWXbx2sFmmbQEKVKiBAeivzqM45M1wFVHrU2LpybaefymhkthPP",
  "key12": "46TJvr75wiASxVqn6Q9gGUuLJqUwY6nJfmiK5yJuGFiQ5v61ExwNaSj2BQc3KLUYVXmicgmF7NfmiKoFeJGPBaB5",
  "key13": "673H6tc5hmeCYtmNW1G5DpPXYsPNuUsVrd68gHi17Mnftu6M2ZL4bJdq1L3ZBDADQGYKXRMGaTqKGThDeWoXPXJM",
  "key14": "2GmtAg5b4mWz1eswCWL4SgJJvgdfRtDiv9xFuhxCaxhmFK37EV56Cqc9qKyRw7Nb6UVHaAxkk8hQavqSDkwh6dRh",
  "key15": "5CCP3uy6BsBUyK85uYmXYu61eM3wmTX7PTWjBdJi3cCmgqa9g93MtrXArcWasUPChWUEUdFo6odfReXfoAFkcs7t",
  "key16": "4MdZUvh433yNotEFb5nQbm5Az4yFVyWYA5PjP7KBLuhQrfkkUoeg6jvvAw2Lwz9VSNVcHpXrs85qteaaT9LYRhkL",
  "key17": "5L522FJit3Bp3rJhvYyao1hPAL4bu33UimPnQumiiHfSCpoM3htYZBZ64SnoKigx9gueKGpuXFzDAdjnrHDkr6q",
  "key18": "NQu2Js3nFQm34Y4VJcH27rs5RNjD3rM4Fmn339f5UeEoWNWAd66dE2mBhTZXrdkkUkHwVyWhzJSXjPkcHSJG4uK",
  "key19": "4B6r1RExefySjQMM1z9fjPwsMn8qKjAq3uj4i7XsroWuviwSokRhkvtkadfuKBMxycEaTFST43Z3ykHqys3XPu4u",
  "key20": "5fxPxzXpgoYoB6JxEsQrRsYSGA9hdkBepR8LwTKmZ4Agg6V4oHRRtCy6kBwn1XDA2JqiTEvFfWkRx9Bc2eJVXvrf",
  "key21": "62x8kbqWf7vqty1Azu5n5SK7XSTnKY9kPsM5PugeHy5TnXs8rkXr68yzwLW9CMqTHiw1yrTPLDCCnNZR3V57ag9f",
  "key22": "2mqfJAcbpjRs5D45zXdnttvaMe2X7qroxyfY4g4C2CazDgDKmi4s479wJje8nMYf2QWrvt9g8UcDfEcqytZ89Xz1",
  "key23": "5Qq7uCdLDgmNfePUaUgpwp4uNS5Cez7vThKz99qMoXPNCzTj1ouKqXWvJ472ZuXBpyE2wrHXGb7dqpS22KRN8QTm",
  "key24": "4C8YZHgj5DgoaqSQnnPBJA2xsRbmWwmJPS7qS3AC5fZjPf9NmprSEvnQv2cecatgyw1oJF7yyMxfPratKvD9AUAN",
  "key25": "5oWJnHvviVqqGp95rpmtJGR7vhxo9hy1sH7tWrXcNgw4QY7pg51MskoMVxsPEsEqBQ5nDeE4gNEvxNqxKaxrpiUR"
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
