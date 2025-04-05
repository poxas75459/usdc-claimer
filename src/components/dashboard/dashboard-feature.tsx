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
    "4vrUAX7uqQt7fRLdwBYNAdiaFW7fwSLVUywyeZwUAecFMT5bWxfNB9Wgmgh82eBMLvAyDZW542wce3kybkpnCafe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HMpU7Y9EyYjq5FHFABct7z62DLsAPEoECjkvAWjN2v8D4kiwdskNoFurbjqzYU7WNDcu9g5EiG68NBSV3aWdwE6",
  "key1": "5vQiFgRhxSP9e59MtNr63NTvPkGqkBErQ2QfyrSvu9h7tq27HCkuA2NtN5yg2nhVJziQpwa3V6sdV4vHgEBqZLa2",
  "key2": "3f6KVM7knAWb8qGZ7xGDYXMLoyRU7uiVBHHEf1mgPP4rJYW91GpepMS1S6tDYimYsuNZoNRAYopptMryPXf7y3AN",
  "key3": "5PRz47AF9VtdrYPujVjVycrZw4NQ9c8n9PXGo9To7ZaYyyqw9AZzFCKHGX9txwJuYJqPidaK5jGK1miMqXcUWJC1",
  "key4": "UYupRqKxUQZS42H1SZUc76zUJsUvJ5C9RhpNQvvkPRFpe66FM57CqphDzTrTRFEHrBdTZ6h9ofSFLdiR9hJu4oX",
  "key5": "4eQeFD2z2KjdgryuuPUEfiVy2GUkV1eUrdW8A9wQTZWCmQPZQcZLhdXzAiKsqkWCEv6EyZUGDoZHPG2sZLkf33TE",
  "key6": "4jfKHSgjeu7WJNp9JZG7fqPXRMpUVjyMs4pp8j6YarZ1rr5XWfQxEW661M7fj2pEbtPjavT35yg6Wgj9JicLDUpb",
  "key7": "3A8hRaeaGVsuxN2CfG9cbfDMCBxivBnkt4FR8DXVTtiATDjaUBur2USHeGh8qWaFEVVb3RzaUYr1hVV2uLRZauyr",
  "key8": "7dyvA2p3mSP6GapBUE236Dvd1byV82MPQY88Cev787USW9uBd9FnFai9CGaakNjxG8Tmbc5eWVZC1c3mECmPZ2R",
  "key9": "4xBvQQ3MeXAaP6izq3SibWwiR5VwUt5JJWYhzxKStCb75iQrfGXS3N7MoVfxHYEUTJQvKQBXqg7T4gDvXApSxj8W",
  "key10": "63eiLJNb2xNMM8iyN2LRApza3YM74EYyUV7RheeNN8M5CGuwp8yy6obXwr7N1csG8gUX4Dk4zutPzFzJ2Wj46dJN",
  "key11": "5Cv4S2eKxFHWyweMsvjVAXXMsEmT4BBJ71nLgjSa7ePXVfstTPv97uMZitYddkJokyTQVqBm5Sa3VGuZ8oCkzMBb",
  "key12": "gt8wpW14Y51VQLVwtnwUVaYwfnBwzVj4jqTq3tNRp2wP586TaPXudnCgZ2rniqYcbd9JxQzfsuyqnkk52QT1WvC",
  "key13": "1Z3MYhTvweMjKSDZs6gx8cVriMneN9VusJw5NZPD7S464CKvRDyXL3WzCTBd9uGkRSB98XuccA9RWpgpMcgHKs5",
  "key14": "38kyaNAFbBm8xLRvD2avipRoJp3WmG3fdnWispW3jBo278JQjqPN3KBT2gEFrHCEC4sT1XMc7NHrUFVegm79Wf31",
  "key15": "3LPkedXAFDBSBNGc34Ssfq4xdZbCCXXuWquQDVYodZUcXcFxpefSj7BbLeGM2P9i15qz22Ni27gj6jjpFPZyrHBJ",
  "key16": "2GY3mXgorbv6CcaidFKtVGkFTenUF1VZ6DScorZXK6YhdLzASk8SzC95qG5xF5S1hbQr5qRitadcviYQSLxRPYXs",
  "key17": "3wSHV8xL3bpxPQWnYeTyjoniAmo5tE1ND4yVJecMp6cRmR36Pt99p6F5knA38HUnjwo6x3jm8o5UWkTikT3Wqdhj",
  "key18": "43LM62sBsZXuYCfEEJ5XBsSKDpvJianwfGpUwRDbszFU5tiKphpEsmwsrEetYqYHZ2c1TQVrWLhJyhRi4MUJSoV1",
  "key19": "NUFsyMMXccG54CShDfiJszzG92VKqS7YYwxwA9MEnzwLaDq8c1oNKQyYMQKGJg9fVff6kUWMkHmJFG4VRB3aJ5F",
  "key20": "2L8tzEew4xBuLE7vpSJvYnMz2RocGyjVSvGhY2VpvYwwHHdHKnSPyudZq63dvTX3nKdt2VLrh8CGpFddPQNLrzDb",
  "key21": "g4p2QGsfpvoseJYH5e2D2JNCBQewpKX6ghMDk8WKt18gw4BinR78yabyjj1eGE7nRKLzy7PMiLgaNpjA6NnEiA5",
  "key22": "2tDBfYaMexJY6YrXkG5RzG14xCj7hRAv4aLj9QTicw8ADvpFtwzWCvuxm4JsxcyeSXQa9dZtVHJg8Y7mgnWC4bWi",
  "key23": "2PFsazkAZK2gbhLJiN1FNfpSNsBYkYEkSVTKKbCRrgjzBG8m4wqzM8taCRrBwyYkWknx5XoLiaUx3kKuZrxxKkjX",
  "key24": "362BqNnvDg6XZaivJrPnzimfGwg2yEZQ2wmLJZbcVXnx6qv7Tn1idaaU4YN29MKARYKEqpJPi7Hb7AHrhqXC19JT",
  "key25": "5gjBvHKB6bW2XmtjasRh71YZcHv7EeyLe9tNB4nSJAMXixzA78or92TfkgqkAQJz4fYmAyVD52tHjcSoTFtVU4rZ",
  "key26": "3P6GJQyHmcjzi5THGDVQHLhjyrrNu3diU4oeqJmZAodMMFutjYR4Ra1GdoZ8CYuVfXQSszjEcTGtLcVs22aU5kDW",
  "key27": "6FywQdAXKUwBb7x3VtcdDcw9mbFz3ZDZJSPK1cFy6girEsPDAUN8zU3cNswbGByWSAcRGtmv9RCtxUP1BTU2hWA",
  "key28": "2TyevcNmBfSqySkTqmFguFQrceZEL2yKtg1Z22Kks1p4KTA3wZmKgz6ztNAo5M5nF3XGRwQaDmNfPMQDJYA3s3G6",
  "key29": "4GKa7iZRMuwCgZrg9Fdm29mRM2NDpZ4w6CgcC8uQKYx7VxQjGAFsD3DcfmGGLpqbSnTJoxoifPvE9By4PNrHH3DR",
  "key30": "iz1zer7ggayZTPn8rf6KFgHfSxXVFV5NWE9TjBN4r23qtXmfcAz1iPuLW2WZvdHqFNQwtW5jLrhB8ndwurS4zvT",
  "key31": "3jqtgb3xCVUnoUjmtxHWWYYeVwXmNBxmJt7Utg9WYXRznFEHLa4wQwYo8jx4EXTTfHx8M82D8JBPbYASM9K28BpM",
  "key32": "5Gk9XMjjxK8rpKpRocUx6qX1oyfBGRpo2hcytdH7jUWoWrwWEs2Wsb8ttpM8zozASuRJbZGk9fXL1sZSDw7QL95p",
  "key33": "2FuuLqNMhhVVtTQWfJK4ya4Q5CTBWP5sfKgEGkCP5ugJnq4hJyr92rXx8pNxb8ofoFN3DkgqVueUjaanV2TiZLoM",
  "key34": "2yoZoBrgu1VCD5aY8fvYn1rm4T7vt14hNAohoiS4n5fzqH3u8EH9Q5m2CbCF6qDFjZfGzCSVeCZh6vAVdzAgcvys",
  "key35": "e8yDDKcemH1PQbWvn88YjwLzBHFiRCiEpBrLCXAiy1vr6wwtA2madx5yxPxVAAqtYMnbXPKngCRX4YsWThdsNMh",
  "key36": "sYMpDB89igJikJy5dKwnBUiGBbz4cYXX4LjqTARRf3Vb4b55nViLKfYGanMj1fKJKRUruoQpCiYSsnJ54zKWk53",
  "key37": "5LLidp4B2htwrGqVxfbnDGPfju4fRcYu9LpcGNXvM4d3T5xMFQochhJiKXP7dW5VkLq6BRzATfwm3Dbotu7mE5zZ",
  "key38": "3fABrAamyeJBu9729YAfrezKd4z5FvniS3WmaMtzqfdai3Nj6i9k4Z1ZNrfEqgvCtfCyNuAaRfzFRft7ZAZ3prYz",
  "key39": "2mL3gMcfJKFKcYgyzaBWfuL1viToNDTE4kdymDSs1vD85vfkoUGYuefe5eWLfkeDXDADWzcLBbjJvJSGjUznsdYD",
  "key40": "5EDFjnnrkxDs5rELYtNPb6rRCPDBoP4WdttMjwmthQ3iDX4ya3FAsyGe8SaB1qxXhMiFFjBoGgyZGesjMWEwhKqv",
  "key41": "43PJUNDCrq4JKiTRuVCCAbiHbt4hdcRuom2BgMUHujz9g6iH78aex6S22UyrX9hwiU6xMurkCA9nCnLNnRXN3eZW",
  "key42": "PKirtYnT1M8a1Uy7HWDRuyZKQrDntHJwSTQLNH85Y4MqNVn9ojuEVWVERFbxpHSUbcCwQnSDCk8WbumWT7ZPbYN"
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
