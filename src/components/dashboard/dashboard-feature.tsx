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
    "35pQ84UjEkD5wJKkkUTKz7QQMiAUhxgmuzMtMjUQtgJcVHJQsjxveZXDp8UMYif1hfbHZ5Jzam17NTTD6EhAwMTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d3AE1eC6AynyBSzPFG44733oy7YeJ2YfGWLxeTPvLeCGhmpP8he3wQWeVwJQMbLTxRNN5mhsUkMPRG39e61UP6J",
  "key1": "2wLYAgqDENwQHz4hUZSj6W1vikWA4HiCnLwqfc28LSbkaRwJ5xVu6B6mu3Jp5urqdQFyUYzRh6xJMpeEP7yQ98H1",
  "key2": "4ZWQBCz19EM14NQJv2ssknyVCmmHpKnjjwzVLRHtpJAaXMFJ8rLCqXL1MvCURPKmwVtGEZeJvyvMyED7ieGdg8Ng",
  "key3": "6XC2N32iLNJoxPpFpcdyHxV4moRVmTPTyC7acm7dNpGr9tX5F4fdbgDzJkrJdNXFXi7d5hLRimzJKgq9x3rTMBG",
  "key4": "2B8oTK2Z4iykpgSfbQR4i5XnnjAm2nvxYrsYjU3CtQBUYJwYj7cU2AiMhjrEe3qzwZRYY9NXTatjYRQNPw9yAJS5",
  "key5": "Y1gwSTaMBNJPjjxSfemgw8eTg8suG1a4JCj51YAbKfjfMLvQT94ygXZ9Km3Zn1fQ2ARUvzEq8YfvhT2azMxRHrF",
  "key6": "2zfPmRUS3TCr4MWTsKskkHbzsSMTWhCipmvRvJCHMyQJJEBbgTVLJzX5tTEwRryrFEPReNyWx1zRXsCACCgt5NgG",
  "key7": "59UdqgzPS6eCsH4QNpo6e74BcqQLcUeu8aRmjBw9RmFsV89xKJzYHChtFqmZoAhKM8QDfAQiknHiwanJk3P3gh71",
  "key8": "5BGJgw15RHBe2DJC3ZWZZLMDedps1axcVzyUEhNQFSqgvsWWuHupRtUMT9uM9q6QKxkAGrYu1kmH9VAocQsL7dmd",
  "key9": "3441u3cSdcxkUyuWe8rN82xt9PD4nnqGPcdEXARNeV6NfEQQHj6DtDvLazYSSjexCZTnB1i52svrpqL3u8Gy6xZw",
  "key10": "29xuZ8Rt2JiHYysRn5A7MR2mWQSLo3RyzfjDPrBoUdexvCKMKmGAapGD9ALoUesUq2pD3Brg5CESLUa7ua72KydB",
  "key11": "T1fZL6akmTuP3WxvvrzPkwVNGFbaCddkKADWuq6Bo6wpe8oU37vA9c4sVVqTpBS8sLYQo3XGNeyKgRPREGWVEjU",
  "key12": "2B3utfhWK9vmPatzfi68dxMK3rBDHPC265qVnoFQTHmH3Q7o7qzpSUnmWbsrn8Ruf1DyPRA7cP5yEUkfNjMJDcGS",
  "key13": "57yg8q5qmR6T4CE6qbgMe4pJHBvCHx9ecYMdJjiGxFg6Y7VT826BjHvB8RDDwqTNPREs72qGDt4sh9Rp6MaHE7hn",
  "key14": "vHC1PAp4cZ7gwrsEVJtvHvZ1DCASWPYoDAZM9VWFz8pCVvUrZ9isX24W5UYTzzUFaNinM18YCgDbFusHAq8vD9y",
  "key15": "47hWZf41usFRYyAiS9UzYwzH5yaxW8aPN14xcXgoSuUs6taRhYiJzsFJZgzYbMzXHZmxyW4RwhAgaETFc8bxqMdy",
  "key16": "38TyPx1jkYL8dHHtQmMWLp56Cxv7KqKkZ23Ek2H4d17frPkFUKm3aYeLUa7wibUm1RQtvdFakE3i2wk7irk5FRDD",
  "key17": "28tn3R5NMMDR1WYMBFCkc5St9rsU9yQ7KiwCLgY7gcti8TkVKtrcwU5W7HK6q5ZXYh9FpZpWSQj2AeAitTt24nTv",
  "key18": "P336YgQTNshjQzd8K2kfLzpoYo2i3o2Nuj1P6tXs4JyBSrJU6ZopcqQ6X9WQVeE6yeCiEtHgbantBG4p1c2L7pM",
  "key19": "2Fq9F3L45so3Eb3Y7MCHTnoj6tbKtUjxvsqjCYynBfPRnmViNvr4DUesKMMajBeqSMJa3ZvGCFJeUs4jWX79aVTu",
  "key20": "2F1iK6485ceUb9LmZp2emF1EFEmJmbcuAW8p8SodQhDZYedrZNt9aHVBcnmgQJvDFdpXiNpbTHxDgmSit6JQj7ww",
  "key21": "4jRwqPnZkPeT5uWRpBgUN5ZM19RYGGqSHUQXxpV8UGisTkwmVNAMoMmFaRnT7vRdwDTXVzs1ixjBqF6hqFtmWx9B",
  "key22": "4fMP5H46TDnmUMG4WYkeHLpqKKYejjTumWvdwhbP42NH1dFobvcx8SnvZzhNMA74W3jk391juhWD8kdtJAnXwfaL",
  "key23": "3CqbGmN8sS4DfyX1QiTpzTvdqsnVSi5jNoxJyCERPzJasu3hPngXw48Rai638itSUbYGSwn9tkgCzmqh2d4aJmLL",
  "key24": "5p3WBd1YLTRGVGDmNHUqn1LJtb8iR3RNEJUwuGQDTs6mHL1wkP5tMvdfGNBNeZFCKczLNC43fRNKT4Z1hJySSTYZ",
  "key25": "3Lvm1msPirJGJaLgSTrJ3jYLedk336L9irEMAgcuBVwzrFHWwFZQMKG6VfFC7RJMHsE231R4mxpYXoCqVK622RgK",
  "key26": "5HYpTZn8gT9AQwjn8quExukbLwtKavrncBwPLyC8WY29WBvBF8gMUCSz25iNmkht24aa5bo3KNYYxLkZDeMA9p1x",
  "key27": "62KPiqCEfrHiZXqqXbNN3rX1p2vsWukwzFRqk88TNTsrrLdENpmGh184chHY8ADzpN2KLQkpK5b4rcgb7KqCLQvA",
  "key28": "Dfw88c1E1YTAVEKfmJ3d1e942MpdzBvsgj3Pgnc32noD6MRFwn3QUpgwcHCf1iQknn1PdfD9KBBhC2edUf2P3Bv",
  "key29": "3w3GHCrAu9foZoJbNu8x1gq2KkaxYKUo9FCUn6gbED4SpiGQa1v2h2iT2TAQmNGv5FTSBKMbawXRmmNifjG7YPkY",
  "key30": "PyTZadtXpMx1erdKxUv7Ehy4t9SKSeRopKPH1dmwtfrSrHaUJ1j7A9QEXbNqevE1bdeWEFx594FLUymoq1xYhPp",
  "key31": "2Gpxpr5QUmCRk6GjnABU49Zwp8ChbX1uTd9ta6hVYhm65WGhGriPoVwwiGmSGFrDnoqswfT9aVVPZ64VXN658itA",
  "key32": "4PEnSMCdUNTJLwueao1mu6BXZuPBSLHN85bSM7GZtCQNVT8zYnUCUHUmKZJ16hGWqc8Gr8n9sECG9JGgk5xg2dtd",
  "key33": "39BuHgGAyFg1UYKJx3suc9tfm1V9iWoECeqyNRxQUfgL12sZnQKqqjyNEEGDRU14xrnPHZB8dZDQu1Fp2VaaUYKc",
  "key34": "2Ei67w4xcDNLSmWtpFGtYY8AkFJagxVrXBXSCQLzZNdBm7KfDBfFu64Rot2Gcs6sTxQiVADPPpfsyRXZBShRfPtH",
  "key35": "4DPuHxHC9ukrJ1fsvqUAuFoqXJhhWhTHNNY9du5wmGQntjZcghDYxXy4h1McEN2VMzcNMdskntY8kGBcibkFuHsi",
  "key36": "jcQKFrrVJobqbC4zXr7DYQ8poLEBqegV77fYnB1vzsPAboYS8c7JqbZ9VEn9pwyCFcK6YDFuK1CRZmUtBabhsEk",
  "key37": "4NxhsfqpuE3Etari2L9qqnL78gTUzMNY7ntc2quB21BNT2rjDUKWQTsBrfmmfFucrq1R2FKVJh28ysCTUC9HF1vA",
  "key38": "5nUgNp4CuYXKXjpGFexwwYjfgXcJuGxdKSAEwco8ArmeYKWCEjrYTTFHCHwkwk8CYDLAuLREaHoKD5cmMc1yfYe6",
  "key39": "uKiLWjUHjzmi1cJQyHfNcK8B7MrK3sncEFgiLC5FRGsErPjWKVYYNRuEpdGEEz1Q1BowSvfNvxecayaLxFNzk7P",
  "key40": "5jFiVigQdkf2b9f9MevqBk2gqDfciP3a4opAEAVsK9cQwTZMnyXRqxvWHNkntQCuKP5YmwD4wzGS8aiETtZBTgTB",
  "key41": "5veCdqvj3ZNpucAgiQWF7QFUHn2oc7GvruGjfsHTCxFC6dCXMqGfmJSNiZDCwKzednokmK9YothCWagSJEhM4aW5",
  "key42": "5KbdJqPAKrfzMW2uUscBW93DTmJTfZUQLaLWpJLhzposFNUXG3ayx4wdx76mkwwQSWzGcRCr6fi3v6FXEobr1ve6",
  "key43": "Erf19UfEbYAasLKuQ3h4WRnFhdkTw9T89Eq4JgUPFqePUhe2GYAerUzbqAYNYQY4tSCrZ5p9XvXmxCWrpFAEnJk",
  "key44": "3uD1nTJgNte5QLmUVMHWuCoQedc7yDMXMr694AMPG14HSgMA24nejTmGirsHN1eFLF14w8QychusMHaP6sCNNRjL",
  "key45": "1aRuuT8vfRbBnoBvK9um3opZBwRyryVXJj7sBsovHNDc4zHQNPZSTvTWXVGWhMefU56Qz4V3U5EXbMv2ovJXdbP",
  "key46": "54xzchmqo3sNSM7WAwHLVQzGKceW47E7AFf66wejV7MNWBXFACdkMsC9UvbgLxLah5Kefse88NSzQY1z77JmZgjq",
  "key47": "5znRtbzAxrLU72NcHHYU5mTSTtpnBPuSSY2t5JBV2x7nDptKXSQoSEUV5JMXo9aJ4HsnFqsfMEVQKa3mNZXfpLMz",
  "key48": "5taLMqqdGesvc2oco4xdEedPFSNNP9wYtuBGkqW6j5433ZjneVYacLhdqo7yF4KRFkz3ULJq19FiGzNJCrNbVTAu",
  "key49": "DyybGQWzdC7snRppiVL9hza78wUrBEzMGnp6bTvtbcb5tYTjs2F7VciivGFDD44ecJNBFEVtDN7CkBnWgM9BDni"
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
