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
    "52hM1GfQd4jr3fcVB4NWhBddmK8rJf7yXegybnM5z6wNyk2yng6xBFrthts3UmT9vjoAf6WJGoZAphRNSsdapub9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wUHJPAc5MHerLPo8Rkjm8cETtuu1YtAnBhbWKED4sWxhTChkA5DKWKYLt1Usn5QyVf2YX67Lcrh47skkcjMah18",
  "key1": "5beUH6ikMXFMcjqYZfQSWqrF3J1oi5Amd6tAKa2oHvjYatu4vaMSkciT3S6DgN4S4ve9tcATNQYjFZZkEdBg6qun",
  "key2": "3V2JWtGhKdGECGHLhtP9d6518vyVk3uYrS72w58h6tnvxeShRNaZ1ovdkWSe5te3h43ZyZTqBjUNVNzCDb9RnrYs",
  "key3": "3YtUTaWYDSaGRMxV3YV7GSuJtamG8aEvXQe8n2MiYaFEBvhcFxWcdJFvLtxWxe1eCjcprtu4E65n9yVnKJeAhU3Q",
  "key4": "2EHAQvcFcMdieBDgxKfch2N8pQPAtnPHzz51bAsVRMKEVPCGhuezpr5RpPZVcjU5BXJD2rUcU25eFdTvYE23z34B",
  "key5": "396Y4cHQxvSdtr1TPPkX6zubcYJQbWDANmFAuxmAEg4GoNJjXJSzXKRtiptRy1BuFzUMx1T5qQNLn7CWvLQpPmYz",
  "key6": "3shDbuGuL4LJ5iH56Uc8ns8JTfV7y6huftiRAXLTs3EbLgcVw7jNqqLXxsfpnhhtpm4vzovvqyzG2P8tz13QGpUK",
  "key7": "4vr4EgxoiRPrGtiKiFMujYuQdgt4FrMiDVThVsC3FUHi3rcXtMnqgvQp3k4QV4YG762gwSiPV6is2dwcCX6PX1Ua",
  "key8": "3bvomwacdWDjx77pumDQPDcbHfmQ4oUwMhcNd195kq8KeS3K1WMHvoMrjvffeCwYj71Gj6FevrBYnaMthsxTXuYP",
  "key9": "4ArbwLwPE3xPejUTEWZpcpNRwnfEePF24725V7ZuBKfk3tVmF7GGeAoSMcDq49ocuZsk3s4B19g1oS46URksMmHV",
  "key10": "5wd2QUhnkqrEdfTfMwZfzAX1EtADwAv9Cvws7nPJpduJYi5ER29boPb9agSX6MvAeXcAFM4ZcnX7yH5dCYjZbF2",
  "key11": "WzpoPPB2NZztBKhodT2AfXbv8xr9WFUP2H5cHQoTTSbTUKPkJXBfVQ3Psjs4X7a4wTBjQYENcdGNYpEtq1vevoA",
  "key12": "2dCsxKYXNvDRpxvtNDhe71AGS9jVMgHbHSx5FGP8Kkhy2f591VSyXhhdLTebqvYGfqy59FL8qfFTGvHZBKJBUSWe",
  "key13": "3B1diQRPKL7gt1GHp7tVJDvdNoGGNLDtCSCeyRQBE497pev4HQRRTUaTJj9sVDY5DHgLu5tsuxwmXXZRfCNSVC2A",
  "key14": "2juBqzBCTsMNHSDDpcJH4kEQivk34q1kzRJgPb8fkFp5SThKTjynFk3yTR3nVRgG4pMPUdrFyJKgstogsNRE7hDE",
  "key15": "5sCwEzCoQS3wMEvbdm44EoHS7g2ygHFMfWEFR9MMYaQY46wY8ar5rFbjxbdVA27Y1AeP7u7YmcSYpenQppk2Sr18",
  "key16": "2RqsNAMguz4UVpsRPoTEmyKTUwifS8xdPTGnG3fywsfhwnrurrTq7VHdZFyRJSq3xvkK1S9C6bZ3aneSy8P2k3i1",
  "key17": "5eYrmhy3AQFJyWgosDCexvCGTJF2AMJesyWL1t5kYcD8aS9AjL8yystM2QGjzKGAkEzJvoYjjj1Gux84XKQKxZF9",
  "key18": "4roeyzxe6mmfraVqt1ZEbZAbafryDghKhdUtguX1qyriNzEDGT1tc8fsxuPXBSC12KHYu2mWLVRRgmSsTsb7kCZU",
  "key19": "72j2EtPz6uAhG5JiUWDYWudD69WhKAyB7MqFJURVjYXX72BaL3tJrXQ41htbGtvnpW2FXxLFfdTpLZrpQJrHuAr",
  "key20": "2STa4RjChnoP7X8kgMzJmrtqfZAmZHAYuXijBcftt3WVWnW5XWnWkPCvMyZxG6wFFMExRuaegzE9mDXH8VyVUKPL",
  "key21": "3Z4h5bVGe3kD6kdUvfB9stkh2LktukiJUGSW46UiJ6rog7eUtR2uqb8zWCzZARoJZB9wRLTo8RbkCsrnCAwdXojA",
  "key22": "6XbYsZ7GNyFneXKnNvryEYyf7SmqBtq6hA5wkNYQXybNsJMs2hgNMLMav8iX7AeHxkWsag46gJk3ZYK3hNxhLBW",
  "key23": "5X6bSBmS3PdQ2hmTbYq4MQf55E7hyxQs23zbEZyNh8arsJv2j6gVxfY4Ux587PPU8QoDNrDbyw4hp8Ayeh6Gcmxz",
  "key24": "3No7FVyoPD8fuSKaHJJveKcptrALBoV8wuhtSwXwadYzsJd3cBR4AFeZX2Lw21Y2jB4XhUzid7LybQL7CUA6GFTP",
  "key25": "3XwHppZVoDNVPUjWpVZRFLQh8gZVdJzJutD57U1Zfk8U9zguiREPiTsrsGCGoj9LeAXb7MPL5VppMLaZsQXQvSYj",
  "key26": "2czTuh7CFTTMFkrkwCqYewhuN3oPLBuBeb9zJZProtsPeqVtgiytsYWPAxu3aHaW1cN7mLH3cTLfagyMw3YM6XbN",
  "key27": "DwLg5f5yLMUWUmiy9vYciaw6PzGBaqRu5v3aThRQXFJFZPHoiFMvxXbfSt15ANL9FFySEQSG1aVTu5eM6EAsrJv",
  "key28": "42USfi7pxapAnMZVQHgNMYrJjtb4wQnZkPQVLQaCo1fAAvBc2ameQYZRtqz4ezmK5zJUhnR1D5P4vPCfmh7GhuSi"
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
