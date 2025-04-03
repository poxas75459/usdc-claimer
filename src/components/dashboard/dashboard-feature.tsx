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
    "MUPNw94SGcD8LS8KNfPHCu2z5yejdB9tHhzBMv9HayyQLVkG5skuWDRCDzMqWzvKjKt1oQ3QAKbUcNxxcwi4Fjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xZBCMrZW4VhAVai5DwJuKoejvirZNKqTZGMnCtMepBNLRmXm8P1ysE3xQraMbKZbtPhEmiL12tumvHCqB5mADQL",
  "key1": "3kF88CbWJJpY3ebn888WBTcCmQhGyj7eTqM6oo3AdNtKKwYpgQ2BXtDRuKXvchw7sXAX4yW83kectcLvvVix8BQX",
  "key2": "5qRGr6SALddLc3n74oy3uQAqALUFjoXJ3CJfPhVDJEM8HR9SL7RS3DYKxayiwCpFwTQxDkGdUAQ3LTM8skqsK2S3",
  "key3": "7bXo82ifgeMMw1H4rKfB68D8KH6yCSf8ayRwxGXHT1nihTwATMAYtUpfndm8aEn47cqBzqcWxkELtjJe8ap6Szg",
  "key4": "5oAwWCnnpR5rDAWRpp5dcTh1UA92q8hXUVbZgeS2qb3C2Z6VE4HvZsLKcmbe2MchcZKBBYJzbGTPna23o7iHyP3a",
  "key5": "3P6fHhRCduMU96JvYSPwrumnhJ9RR29aJtp88m5aF2aXe7NkjG8Cd2mga9HKi7L3kwEvFW47YL4ct8EjJokC1KA3",
  "key6": "5EZNRScLYo5LcFJyAVnXeguQ4i5xFDaq1nzGzSZUZ82rzKoyGPHLjEUGQtCLZFtDhQHhrYYpZdhy5Dp6MjoqzYsf",
  "key7": "4W4WxgzcUQeqekHyeVmEDpcB49rCYYLFpyAFbbewgH1tfXaupSyySdR2EeMrdbxTD3bJG8JQS3uwCMhCq1o76Cbu",
  "key8": "66FXDEUxmavmpEGmXkLt8mNqa59txxPv4ZA1GX8HfWej82DBUCmWimAo7dHxzjKKkXzBNJjCmuywRwBo1942Q7G6",
  "key9": "2fxJuiLKGQ7WegYrkCJ1E8ExitPQEdDXjktWPoCVC1MZyAR5J8Qc1LZ2sYh6DibsV5RZ6GFNJPsBovkx2ZWxvM54",
  "key10": "4eMkenFhCPjowPhLbyLAqcyjAFSo5zLmX2vBos7rGxCVbr8ttpmcRXNPgduHViHnA19mNoDorq62YEhLWghqmdDn",
  "key11": "3zTwpKyuVLJCeVsHwUwFf85EVMNcEhtxmi3aEnY5GWm35nArbteZdhDnC4P4vWUxpgUwUQoXRPijx1W41xSWw7PX",
  "key12": "2SAh47dT73Tdc9Q1yCPPHvbsdeg2ntiUDC1MFUNyB3NxWTRf3mih3AY9UqaFhU4Bf7tAEBBtqGishaDQRqpjNp5k",
  "key13": "3HRMwkYyFjdwana8e4J65x88EUhu8ardMm6VHz8ZJq3kMJGNzFgrsaJUvZDYQRZ2rBo3qF54vmZ8XEmCWebGkNC",
  "key14": "3mXUeta66BbfxopVLbiwv2npXwfnoMPsoCbyUvto6VWRfVMhRh8DWZc7de8f9quXAHMqVaGineEQ68H2tCugZAjn",
  "key15": "7A1evCLdtEExsVPWUZGJ6nQamcKReWs8RYeTptegPhVmN57NAG8qGg5yukMXF1qrMufdCv1avfK4WwXwUj94oqk",
  "key16": "4isRgQY54oHg8pYafSmhHt6mwDKH5tnUoha4jmqRAtsoeKdMEHJqNERweTi6MAGCion8KE2DpV6ckhsWKE6LVM6j",
  "key17": "2oUMTTYMS92TqL9bXeHhuRdk1ThYETjYDgCScnEgBETixEBN6kiZHqDh58fpjCRNn3bFCRAAFtaqnby878RwYwH4",
  "key18": "2Skt76j7F6ZASLysnTY2pzuRwReLJs4RPF8p9ymysB7KdvXQ8FMrbL6HL2AEcM96yGbrtVycvdDZtnngKTNN5KYM",
  "key19": "25VzcLqqezQ2B3ppsGs5ryQtomLZ222x6CGyGnyYeG4nVJ6NriiP2zMzimthenL67kXmRUooabqdCXFpgHNfv9po",
  "key20": "5EgwaRJFVLzo3SCw95qxw5sfpcBftmvW1vwMaSLGyBvAQ9m15vcxtyi7M3y244xZ99spRGqyorwyGQrDczKN5U2A",
  "key21": "5rEkndEqxSsrECotJNRbSPhsGLi5U19rfzFxaiUmfZ4o7dcopXQb6jyX8qneD2eELzkuE6EwwvcK7RdQcXAouDZE",
  "key22": "3i4cczN2J1SBKq84vWtnUUz2LX3xh46mmTNPjVx6u8GyNYEyPVJr14pfwiY7XvQw7b592z7RZHqVaTyNwAhDJoGJ",
  "key23": "4giMDbHP6tNQbEcKCth5WcZUyrEYeganoumP6zSfyKsHXWtmnjn3Xd6CdUcxvF5CnUBMk4KbX4Z2HuuYitMBK4bY",
  "key24": "4tjgZZL4qpfjrrLqbDP3CH2aKGbodoqFF4cddwpk3jMYEwQ6pJ7F4dhDUZJsg57JVoFKyLspx47dSWXmEE6NZyu9",
  "key25": "5dty5mPZtHtykMHvmqbrTKdod6fn9Vw2yKTVAbJNWRgqux2edvnbXUjAJeX4Km4DCvRDs8a5TB9oK1UrNnZQiMue",
  "key26": "3yzgaat5P3RDrvkP4cd6BkRb4qLqv2Eux2tkF7T2S4GLgC6o7AqgRwFn4LxXci2UCrhKkqFvZdrmNXfFfoT5DyZB",
  "key27": "5LhsDvmgMsUzPLGtuqjFrDQZW7ggTx4rR2syh8QB1CTYAETmcaLAcqxDTxJQrnYKcLWUNX3d4zMj1a6yKc5FzVBG"
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
