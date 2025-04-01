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
    "b5tFJA68wcvDZqs8LcpWo14F877xiecskb8bpAsX8u1xQKCaivLPCBM8AvYieYBoFB81EyzaPrB6pDnmjDovndy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NqoyhqM4RpBbXNBK2zwR3pZoJqtVhWH2B4w5diBzL2JNWgZnm3eJXmXZG9ifGRKfKKTVTLFaAkwtes8X9Pe12jk",
  "key1": "5h2xGUkzDPr7xpauq3SgQEnk6SHsEYp55oZV6aA9kp5ejFZcqrDFD3qKtmjFU3pBdkt866SyXYA7o6Pbv4SoQyMn",
  "key2": "39egPo7pFgnffirsG51AXU5uunf8vJcsUjZxcZbAzxnJiXXzqFugJ16P686vNypKwj7givpXn8kVnenCF9xcnJdY",
  "key3": "5KdshkTrauxxmhaKdeLr6F2aiGDs21dBb7YwuFKiyzZDEzSPFUMgqySBjXJRVNPNRD2cpBxgtezxmWfv7L2gTq4J",
  "key4": "3UKVw6FmHaSxT4GpDhaZEj9Bfr9GaU9AUhaUGsSvGMH2DGowSpB33Q5R3MXZ6X4pT74yDGJMGvVRKQZSzJmCD4GU",
  "key5": "2zime3P3NQWuNzVEaKh9vRSjBmj5RxUxZdKwhueNRzDxZx4ckrWDr7yePhgCRsWg7PL3t9JLnwnSyZCqBLvvLYLc",
  "key6": "LKc7gxxQRhn7F6QCtL5Z5Ajah1nvaFaZ7MGJWFdWYDaiGmkQTHtw7NbNFL7skeKHUBsazhuoaw7URTFP51Sh7Nx",
  "key7": "4je7iFfHv5ebtpRsRTmGxchBiTL5MiV4W92ie3pZdZwqKZNM7y37cDCQ5wRKWDC3gAophbVgGmDCN7cKPPEA1Mq4",
  "key8": "2sE5S5an3TjEqwCSGe6hYS6o4jax22BnvAMz4fKEVMssFDsuodbS6F1D2rfWDqfp8A52dJcfdnUYBboQ8UcfWoxJ",
  "key9": "4BV2WKTAFjouuuKsacr9xMtz1y3q7p59rHTp88HPfEdH8XA6GfuVhzfrHiUGc8vdMDPyYJHuSTidVvMPgArpDRXV",
  "key10": "4sZxumP45J5REBPkPv3HnRJMoaPMUJbf5Zzkv8Lw3WiuoWTAc31tTrdh3SC7vkeswdrpfAarW8TC1sZbiG7YeHGV",
  "key11": "3621QPZa3V8Q3DjXEESkkVaWDjTPmUxF6MmMENHpn29gk1vsabMbf8o14yfVJFAwArAh5qxL1wWgUNy1LJD14ym5",
  "key12": "4bfoF9ypBUNSmoRfGZAsouQyJS5PCRfTNJJYtLuf1y8byFHsgB8kN2AHCZcLNsXDt4LPVWYqrdaDXyUbuoBFPw8J",
  "key13": "3Gm8iSAagMXcbTmqYLqzCUAbTL5ywWJMRX5ZU8LWnnua757ZAjQWoKC1wiog3PLF8MXqx6yPrHt46TiHE4u8fQiP",
  "key14": "5J8UTt9zkRzppB165S6uutnPCiE1GcgjB7qCgG5zxCUfapYzNLKQcYo4BTZnhMZDBhJqZHnRViE9jmudgBrN5riV",
  "key15": "4PYqeRQXNeMa2TJu6hpXEmp8Dws4aPPJeujqzy6LqmRE9wsyWzzJWCDtkoTtA5vg6Uh93kMHBKqohRTxxWyRaGtF",
  "key16": "3RJ62eQMbTjMMibsfypfgoX7cLxS44PnCAKPEhNrSX566KawZRF5Qg92VbCj2eJUem3vVsk3p6xfcNMTGWXMjZer",
  "key17": "1eUL78JDaBvRFsKWGhq35huBvzYHGhg5rSVSdcbcPT5eWEVzAdQuY9ZvorufJiqa5fPAVcVZ211AXzNGqdKjoFy",
  "key18": "kZGnhpXF7UegP1cwQ17HoUDwBBpVMLL4Zsyx7mZ5BnbxnHavW7woTwJmKthARyxCCrwdQJJ1kifpWBmHpUc74WR",
  "key19": "4KK6GNGHR4XhWt5dBWPNdo6qvdeXFnixB44qKLTMC641NAJF243XnVTbuXXBob1eZAbbFMDvp9NVD91f9R4AhGAA",
  "key20": "36wKUsD4RH36bAR8rTiB8ys7xLfUQbVfHwnjMSt4sd92r5zfE3w1FtAi3vRLfS5s4q5NUrmRa9wp8hjt3jw5dgZq",
  "key21": "24gUcuE5Wnhi1iydBiZeTBWVvRYw85gdd24sSUu4ioTSqEsZiyXKqQjK3vPaTh2duvbvsgrz5f5uJKXfa7b5ccKY",
  "key22": "Vdqj77PrG1YfGrS6FxBoaAAFwmqeqp5wUkhDLwBMZFsxifmq581ddaaSx1p6AFRvoajS8fSTgh8q7EvFxQQ4gZd",
  "key23": "47ZMZdeyKk8FxsxERzpRae8hbJ9eAx4oLhmbGuXKPmftrkuZkAJAFfUKVKgffrDzDSDVt81uK6WPi6bVXrnphMYM",
  "key24": "kFkajarhKKDdgseXbZ2zpfVZR5AfVk2JKYux4joBnyC6zTUDFLQzbY8mEKHBKpcnTiPJQgjPQvnntedWRa7PsU9",
  "key25": "kkZ7ru5U3xmsZx5ektoiSJ1NNVxB2KxZMSypi5uQP4RhmKpigeGsCN5tdp2mqfDF7kg6SJuJT9pdgFRdUNx4Xds",
  "key26": "h1z6Nbd5GrcgyMw3geavohqC1BofiLf3Q5KkT2v3s5o2ZxUak5nB5afcgAtcEus2CrfxTbw9E4Jnpm3QKaUdYna",
  "key27": "5aX8kvVoYdxR8Q1YPdazUTmf6LEdc7qhCDh6vy8ugaxQoMKmjYhyNaTygb9fBmeiLeF83r1ypeHtH9v6tftVAiEo",
  "key28": "3n9y1v79LVxFrva3sG3uPck8ykeyuLEKWdADGxkzCHVEAFAKRjA1kJwG6F57R2y7utTnW5p7jNEnyyLbcNubBsiC",
  "key29": "3EqF475hSEbxgCHrHqTuZB7qcUpUptLsJRroykhAhtVCHbKRFJ1yBASjFofoQxEVsiLZX7PcTuvEATvobgBEq5bG",
  "key30": "3tQLVzmT2NbiSjJrtuy8qqe65QE8nGELqGBHSUXgj3S1ud448apM97nWMLyjnmS6eryFsnaHV7X2KokKECjnzo1u",
  "key31": "2qZUBuxHiX8xc3pVx9Xthed356k5esn72QxF3nL8e353TgxgxPUeAa6PW2eefmrGRBidqqWFa9h59UVGqbrJm6zd"
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
