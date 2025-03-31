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
    "4MmogdpqifCWr5RuGkGZYPPj4gykUnzKgQpwRfaB7dLcqGdHpQv457JchbWk8VwT2uYJthTY1ECwy3kQrbtggiSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmfH2Qhgn3DzQNUPd6dQ4zcVj48EaaRsVgBxjLkh5gx5Cc5RYzw6C5AFJ7xL5NWrKFJs84WFi5YkyAUiJmvtTaK",
  "key1": "47MvE5EjvcdWNGActAJZAC3pywx6QtWYWmU5WDWmtiHW8gCG1D9YwRuBAkDRo4QK2k9XTTdE2te6SDSKzj4ZGgC9",
  "key2": "5u3KLRmsxM7UtssQeFTjemy2S9L3y9hRkQ4jnXdTKVomTLNYA4ZQ5EwdsrJp5jTSGepYS6nowGYq78Ft3Ph3D5zf",
  "key3": "2yvVeTiz5NAXWuR9W5zgN3HYGJzBGQHo8mafywk9nCFztAeH6Sdrm4Tp385yD2H9HYNnTsh8ajLDyEjjtqWhqhjK",
  "key4": "2nBF8QMvEpPMTSBhYWeM4rH3eRRJRKaDUZTgziE7PsMDT5PVEzBW4cSF5yYAAAQSpkuSr934u2M5UaQHTxqnbD8x",
  "key5": "63UDrDTqTzqhdfoH5rj1QtX3xiSCjsTxoymQHkQ1brJLMcdGDqd9xkptA6EJmH9L3CxcTRvLL6fg8ATpiU44LVEu",
  "key6": "cXptc2x85tBsbrcEW2DUwwTfkzNezmyXb3BPxwZ31ghRqVqq7WYLVQP26kicaZkeQcnn4iy1ueWAzCGqMJ8kYng",
  "key7": "2tob6P11uEBR2raZtPfDAmsN8k58hUzx75x3Pc9H6MuJaye9KphocwhJTgficVkUKRTCbu1UxF5Bfrny1ytQA8GX",
  "key8": "2pNkFgAnLR3HSmaoeoXMKPGYTcTdzPnHd1sF58an1nK4vqxgLXMQFT5NwakPUmAPSeZR3Ed4qmS6qhzRWtQ3WMKq",
  "key9": "eGkTsAzhvMmtckWpiX8V7se28brNsixtsBPgGG97Mo9tVvuhjMhBV2UfNekdE9FfCcaHdg1vFDX64W5a2veAs11",
  "key10": "33v19KA3Ne9KEE2HmMZF2po6zuwgBDt8n1RHWsJgePbEyAVuKsbHUU7FKGXbHuC4NQEipDRzwDGwyhkn2otRa77Y",
  "key11": "zUWorMKgo3MwLSDzLyGENPEAfeMfU4aarLm219fnQd36xTnPyD8U9Xh7brPGVizLNyzWPFzFfbe27iWCBqZJfmU",
  "key12": "5ADkrabDURe3Kc8YiBmnQNxLoFpCohxyPWp6u1Ae36AWG1yF7baRcwiP9YmehcKriJcgTpKbRoAfB2u16wkr4ovC",
  "key13": "3hprrkeJyp7QTPGsDJBKghpkJoVGozcu16GTnrkTV2UU8y5xMKcnVHdS13qa2rrgRAPdrq7r8o5yt528VJCXhqZi",
  "key14": "5RJXAPUFMEu26GRePqgtQTvXkXp9j1mHGNoBfM2k4Wigt4HorgmPY3ZSsstTXLGEXUR1Eu1s8u2xEcqMcZeT8nf8",
  "key15": "2cpZoX9vuFmrbGEJwZoqFadQBiXxu67mN9zrpHZG76YVdk1vJ3DUsg9i85237LoWcBwZTVKJEsXvJSzw9cgLRFMN",
  "key16": "4zPE28mccW7fLKMadW3U1RX2fuh3m2Gbn6kXgxyPrULr5SHJf81pZw9c3xX9k7wwkYtr8Wyf3Amhvob73pJyuWYw",
  "key17": "3eBemAxSpMDoGHxhp5AN22yJTAERSY4HiamCztqJy5y3diTaXUBxpai6dG7zgyUZx1GcswLRjJ5H4newmrXfPRUr",
  "key18": "YmcWqoSA48i9VQdpPJ4ddAbYGXwKu9GaVXKPZcMHf4d38wPymsmqxLnTGsnwSGMLK9X5jRutbykfMX4ijeumP2d",
  "key19": "X3wK7avgvVh7jnwrHx3yt9sQVwQj4diYCD5yFqyAirVjJDmhiinqJ6btM3Hr7fmua2KjhcUALtpNn9y6WLXqyJ1",
  "key20": "5EwgAkcja7QcmmVST7kc8BEud1zR5F1WX1LgTowQT1FAWFdsR9n19ovUfqtHJcpiPS1Lt3ZD2NXXnPstRrAJsc27",
  "key21": "528vUwpXEydwEzQxYxmLPMC8o1yqWUFduocz7VN8TMQUCSWo2qnYGyMQG1PqxZcdXbYS19XxJN5ZWkfdiqdHrQCg",
  "key22": "1251VYxS5sgxAXHgopr3sFxPLhtu2cz2qyucYGpcLFj19dYK7cRV3iMvVPCcFwJJdv6wqxjgtE6RmTV59oJZL6yZ",
  "key23": "5LnmeuKent1BadT8aS4BHkEeoSFdxb7W56MXMDuhpbebn3epSoLB8m1S4Z2fiotgSdwaxbyG1GgjxaWzrPn7NvaA",
  "key24": "Wz8SX9fS2AJHnd7k2k2gpx1Zo5udiUE9aVXcwL8gLkKKYxsc1x9uzy9BCeZzAdj5BJVf4Ch1b3b3NipTjJYcEB9",
  "key25": "2EcSybVCTAG56zCpmRPB5y7e1tEnVJri6a33bv9RA9iA1nf8b9taCwkwaXsRtFnXxfrGfxAoYPJw4KdPqqswnVmQ",
  "key26": "5J3jA6eibkybCnSrSQAsGVc5Nrz4jLYg81Y1iDW6HHRYuvFgsh9iSpaq3eNJQDwgjnkNTs5SPtjLT1tCo554pW2x",
  "key27": "5dkkS1LmpocjAN8BEo5R94MV6extv76iGBDHDRaTwaSbtRLSU8KpUizdwEBHWnyeJo1UvrHwbkjYyPYKSYVpuSft",
  "key28": "5qwWVa6SH8hvg1eByv4uhNk7qNpvNUDDXvM32x28V4gR2v6A9PJvhckNvM4mMcv2C73A2BDRqvUfMze5AK67yqBY",
  "key29": "5xpcxbRL6mbtZyNf8WnisWSTFnTnPfsBsM6WUSLPMAmVwNXqspZxs1NxWmuDouT8tqY3M3DJtRqvDZn14JjjaFM8",
  "key30": "XoBraZ5AGo1oajywnY3UyKy6obDUsRppRywfLLUbNwiqweouNTeYFT5iYi61kD9eSF3ZRTwvWjRf5k1E8rrUrFx"
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
