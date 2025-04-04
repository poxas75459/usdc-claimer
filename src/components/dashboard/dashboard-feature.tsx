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
    "3EycYeX6uzvvcjnF7MS8M7cEAXEFxYuMy2B7iKNzFHUvEBNiJUFojrCVKmyXZ8HevcGBNUuDVdkyJtm8jU4WdBHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XaC2M9emorV9nXQdd7p1AdjZ4Q6pXj7qcgg2TseTFokhdZwLSmZP5G9hRwy8ao7TKN1FVnswhGjFgmiG6CwwGsT",
  "key1": "58xEh6YRJgeRoQLXjomWjkyXsA1EVUCFSYPTSTie5tXzN2JPsv65KCX29dqcVEChhw6wEyhdpx3G7oAozdh5WPnR",
  "key2": "61dTFt25y1Vy5GiSjm6RzYonNdna2d8oBjK8oRXwpAZFEM6NWBtfrHhxMmtCNNYYXvJzAAEWr9PPQwawEyHBUSBy",
  "key3": "65y2jRgTF9n6W6PLdjpHMrj7RBr1tGFwBVbfopzw25KqH4TXfnouViRubraiGNcrjkKTETJG6655XcPxHZLjGAqm",
  "key4": "43KhcoNVUtvB4nKsYj6Es7ZzB47dQ6kwgV6JJGG2MCEzz36QwXCdk2U3FHoLukSWKB9Q6dQzsgHax5eXqspiuhoc",
  "key5": "65XQHbdpaypPA8GuKmgnG9bnCQze3kASbTpQPaEBYqLsGQEruXgnzM7XddP3ftRuNX5XJcFXtpwZ5cerGJ1xYzEo",
  "key6": "3sT9dLfuyoFYrUEa58xmjohEdtX6PjdeV4jhaft4gAXBeNmHTaSujnWPvyP5erkPDmdw8YvZFDnLu32pH3e3he4G",
  "key7": "4xn5QkZovQjcKscLLEH7WcKRuzPvonvTjuMjpWkMszifiooh9BDqGckBFsaYQq2EAXED9DyMQUSpUhFkjvmRuebi",
  "key8": "4FfqZwUP3TggKoFe9Ayqso5gr2cNMHg32QMyCQzNtuEDvLFXUyt7wbmUN3csED25koivbRPgFxu3DvPCaJbNjHkp",
  "key9": "3nk1E8bDgP1m19fU7fhgoECkt2v4BFoNG3A8iyd7FWq6gLwvtbP1a4tZZotzC9ZDgTt6fHgN3hH5Cufa2gcYA2UL",
  "key10": "4RZLRuuoXPFSz7wmgogkrac9sfqZuGCKVW8fdzc23EwG9Dedfn3ora8xMrV2ycbdSEUgETNJ2jjQ7gLhPTjqGHXt",
  "key11": "44abo7R7YiZZU23obhH6QqYu8eqLGdLK5gQTTkoRUa9MbsrQQ7LP9EeKCzYy9iFqtnJNvm4hvAzoh6Xt6ScAaH6C",
  "key12": "2R5mNq6SUqmZt8o73Q2ef9vSQFzDtdiCGH26VeHdt8YZWegApmuN2eZHyFBk2fHWYq8uTYAC4pArpMKsNAyNKvQU",
  "key13": "2SkbSZs6Bhc1fhtAXgB8S1Fwu9hBgL1pMT6sq3wHbvBozyMTPakxekmt7iVq8TYiAhxdAUtdMxHNEuzbxnY9FG1b",
  "key14": "2e6PAwR1rSn9qkxqe6iK1knQ1776bSM9j29p7FsYiNokRU8F27a16XRsuvERscH3XE8KSurBgDVdhsncuWYg2BxQ",
  "key15": "3xTJCc5Rp8pMK4b9C67gUtogkYn96pJWjM8oEDAZLNyQvk4m8S99EcPnJqzEbXGiaRdTMp6MitZUA9DjgQ3BgqVf",
  "key16": "3uENXewjHRRN7yPEXWpf2pogeFs8L9GxBLFCmv3kwNukdpdFmA8whi5GEQq6DKBvvcrjYNReDAB57cZ7TZyTakFM",
  "key17": "5VKYMypxpzTTBE8ogAXW9aRMNff8U37XpdTgNhzw1pCkXBoB464heusJD6J6RgyEQDYm7oVrBTpuh72iWNk6FDdp",
  "key18": "3DuRp28su8X7sdDefwWv33npL3eK7DpxGtWoasuN6KYsuGSXE28JvNmaJYHf1KETYA11xH9RcmdiLh6GSpXGPeJq",
  "key19": "4DLnGdX43ccmCRiuiUjLfCdnf4CoZPgsTEjQix9TvPYJutNAvarGv6Xu1HdW8VrixM8wgMKDhxhSfMV2k5VhMzNB",
  "key20": "5WQMbdA75GYPaJmUa4QPfnSFWfBKwz1TCZnRGa5DBHYgGzAdkKzVJmvTesYqQ5F1JXUutHtaZXffLGqBHsyyQN8M",
  "key21": "3vWj1dVVzLhSHiqEVNhan68xnShZa1gfqeidU1nLTR5jviMLzDHDARe7Cs3rQCcMNEUNFzJZQedr72tpT9SiPMR2",
  "key22": "4B4vtdbkCcEoACCZC6rDUVxrUaAUASAgb9PRwrYTjYVHW173dACwQdxGUoNvHRN5BRgkFbncgmSUqavsA7wcXqxi",
  "key23": "64sPXmA5Q2FrDXZmJreEBXHXkmTzgAQem42jHkSNZpfggnSmDtikkGfDpfvV7Mb69bqX64Kf1vMe4G4FZsRDQJCd",
  "key24": "41YFM6vdYJycpKWFTzKMnkyDQLXiZu2oerSEzvYwHm75SwgeqM2TUXUWpuuubioehGYJ3WQywrcjUm96m9kybpJW",
  "key25": "33hBvnwBd93W6PdbDoJShiCHPEQvJkMpJKva7XHiBkPM1tpsgXpijosas7CSE7584ugmNVYwgd4Zv8dXnGADsqJk",
  "key26": "3oMe9hiYoZLxrweukbphBHme5DTTyXdLKiqCjXEznDMTTkb1Q9giyXNX4iVFBsDYytRcbkVUTFtdDzG1ePVxbgmq",
  "key27": "3wsLM6yq3fxBPVt93g1zpYuQMHvxEK9w88NJsnQdALnYmaL9LBJRwqDzN3PopQWwpxhDwXnfiV933nEmCX8WFwMs",
  "key28": "4cRPLH32jnyp7t39PfuBCsGX3JwzxZF33K1bfDt3Sa4DkFJyM1eZQ3pjw3whYSGgLXAgC1MaiiGVbXdjywztTcW",
  "key29": "3unPxsbY7TCvXaTeaN7w1KAHB92jsgsvkUfx4KpqNohpaSn8a47yCTWkHRqS7nUX4sXUZBZUKoG5zNpTxsbsLzX5",
  "key30": "4yn9cHCQoe2tL1fs7aVubEGdMPJeUeS36R57he14C8RDszvsXULhjXiM3a512A1ETyndjUJfwt4RsnUwp6xvAMTN",
  "key31": "428ZP8EV5wZBLJh2awaethym2bDZ6npLqPPPAwWeXUsRvC7aUUdodmFkrXFZST4uSbXAirZLET12HsvuGzzqMfFH",
  "key32": "JQ7cdHaJTn6qE84oPUQJihUTT5fLDN7XpXWq9vVtVoDZibW7JAQoJEFvTm5gDPtGVe9p7ntJBGQ3prubwpf84ba",
  "key33": "PEjo5kAvcLuMFvK8RsxwZf2oprBjNVMxqfga8BQvmhAb3hyB6DaPpw3Fv7uJy2iEQybMkWzN985bchZsviUvZMn",
  "key34": "2xxrnor4vu54WBFGxXmQsfRh4M7UxcR6rrsez7cKm8wdFqbdkHonmRyJPbbFKk95MYWJ7que9cMiLpgMuAppKFRe",
  "key35": "5uHLPqUwJsgpMuJn9zdFeY8npKkw3EtgX1PEHBE4EhAjSbj9eXJnkvnpqvP3gWsXJ2rswEDCUTakmqnNiYS4tjt1",
  "key36": "rfabMeS96csqRxbkx8BrNp247fuG4SsXDmPBym9gg5kTb1H8P17MMEToFqmTbNJQeivfxPcsqEenaYt6Dw3v2Nj",
  "key37": "7PbGajdVoNDFspYE5L3gDGrLS1HfqurRocV72fMuxJ24c6qavJHBzN6n8LCDBjhicWSgzZ9tcfjYUhkRMjFvhvE",
  "key38": "2ozHcMQQpHjrZrEQxqSVj48Gw9TaNWRW79Rfz8k1T9XbFynt8x5gZMbPaTh1Cqb2sDk9H4NZVbTCoWW3hbYkqph5",
  "key39": "2cvnuUTuBg93euz5d5gfUtxyhtbnfbeyqvBKUtge6Qy71JhjimaSzDCkkdS3qQmFHr8siEMDtoume1LYKgpbNjJi",
  "key40": "3sfRvVGNt49kqGdE1C6sgQqFySNrP5sdEw4G1fBgcGbqumYojR6131CGDrCtoybSLafSJXbTZ5FUohU9k2kFbD3v",
  "key41": "4iKFGuLAHem2RrviPYjyQ66NM9nTeYGSWo45j7YE5hz8EzUmjmXrtoC7gSYKJouK7vxu9E4Bq3g8TAxiWeHLKGPj",
  "key42": "2xrkD4QUNqfb712kea9Mrae54D4daAUsRJScyMUD6mA4ZrtumT4HNTfM8j8cz45VRPjxaHtp9h5DPx3cR5QYUgZT",
  "key43": "4tD41bXZn6VoGuw2QYJZX7JccNkw2KJaAazhE2MtZaVDmdahdk8JRRtdo8qmsk9s5fmHqpbeRZE2S7VHowEE2Mf4",
  "key44": "5yzFf92cqZFthTgFNRxagXqs2ERMSZphaRwYMPYp61LGshprjtSX3Xgx55wExTHYzHzSqjSNsBaG8M8WwehF9ez3",
  "key45": "5edAhrZVHuSmSG8rVwhWULQwXVJoUBEx784nnDgvfv9B7tX4vnSwzBzBXyCvK4aMMLQpWai4p5ABaNsTAsjnqSjB",
  "key46": "PzYD6ycjoTFqVjhgdKTJNXSTgGeEnkAHPNTyrnKQ2i8JmxeJmDUrpdSApwNMBG2GFVQ9f2N5MFLdEvswqMRYuaP",
  "key47": "f92VF9p9a7tFYtTTCsDEB9X1mnu1M9zaqHbM6FJbLbEU4Y5kCDWbr2zBJXBaHXtstg2h4eCHFT5meXEKL5CEVVd"
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
