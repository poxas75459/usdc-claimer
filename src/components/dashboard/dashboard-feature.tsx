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
    "38MEgbUuxuNoegAPHAaegUX7VX3MX3XFzvCCn3DShAcus82H3dov6tiu3U6RRZjUVUXnVAVGpk9q6ZKjWvQi1GPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eYQnvUa1bKwnsrCNNN8BE6yxsXUMM1Fr8qqqjgMuAoakTrbTicu9NsTeDVsQEEC4e1afamyD9noZQuiEtV53PAY",
  "key1": "5HXnYajLzGMhbWnoNNUgE5YEeReK1M4y2y5s1MPgdnp8E36HDocdCCmoKiw4JpctLnzYqbbPr75mtmnFos4VDfZz",
  "key2": "wFSh4aksX3KNpKHjaWpfKT2bcg3s3zaqtmoW1FQ8stnMFkFugnZxqt81qVTEWPSXU1VW7ottScz45G9bbj7wy7k",
  "key3": "2Hq2QKpJ8STHadW3ZqLazn1jyhKHQ68zvBE6W4D2ttSkswxnkhyGZfkm71NazRiGYX85jNetXeTKf3BtCj8ktzky",
  "key4": "5Zbzexixxbu2kZ9ywKaxzCSTzZptiecyPjxEPW6v7fQ3QJdwzrV3URmmwgWgHfjw3uDh3TdRzB4BXyL9YEG8h9Xw",
  "key5": "5Bq3sxabtfRSEGTWmADq5EJrx1LKMZ4K99VNjFh4RCbk9BnfrcPhumvBPTTXRWgrkEsaX5g4Niok5PtNQKS8BanA",
  "key6": "222SENcLC5YLpYraMQU1v8UrP1wYLgkYqaZ2KDmHagwDePMs89a1B2QpWKpjBvuMGECXyA6EBqscorthAc2po6fr",
  "key7": "5S31oeNhHwJXNNbzcoLJ6x8DNdLze12JpQUvsNJtGYixjUPr4pPmtMYJWGYSi2yELZ2RyFgd4r3mmqfbE5XLxcBZ",
  "key8": "4HayKz7wmPc21VA4sA3NwzAvdeJfuXsoTBXUWkZiYAr2sqLEyoq8rUno91CCJBTB2kmmWxBAcTe5HpxZGBEtUyuC",
  "key9": "3Sf2LnYB8nnU1ZQyhhYUw6pcfzfkzzoz7LKW2ZfMxpSAMPRofmW9oXMmPCxWXXLZ2Za965Dqtps3dCKBNWePSJYi",
  "key10": "4NBABq39Tbiy4EcH12DQdz9iJKhg4PgK3U9YLNcGbHuVKSpxrjZ8xnUXYvVSHeKpMrwwZDVBtUZSfCkmVSuUubo9",
  "key11": "44LdxJ3r9CceZrdMcFyUqppM9knx5gNHherzXkSgP9qWXoKPusxyrbqEyZriuvKmeWVBEhzXpQ8wJ7Kcvarh2crH",
  "key12": "5PpA5dvwCKjwnhC24p5nLqgmwQgBhSdb1haesQLhJznKA92tBKGsDbzQGS2EyMUQVp45N9NbasqWeSM5qGXXYkat",
  "key13": "k57hHk79cEuKEg7TeiayAdyPTEXEJRTfy1yQhngMdjvd7rzvguen9upAErZfacqiqGuow677m27r7qrHVyWpkQL",
  "key14": "3JV7GTr7NRFedTMctdayxTEsHqrG42Qm9qFtKC6RjsTcxvKT2hsSFSvfSxDehfvmJoVp14AfmWByeBvi5MTbS9pr",
  "key15": "2KN5tDsHNa9jPUe9k9mGUFa86PBFCy6g9wLuvT8ZJF1ssvSXvNT9mh6wcrYr2vdfsVZ1wWGDsivfdLkX6D7wDDHf",
  "key16": "mSeD1tioqpxVE81d2UGe96Ep336ccYqf8cZm3QankTWAVVoZYrHVEkVPWN6r6CygHdujGGerSeHDSAP26zTac3J",
  "key17": "3sxJSN9QGCkgZBU88rWcHFt8VmQLE4oZiNR14shu4k1RKsLgehXhFs4J3MtJDkKRDuGKGzAYCXoyXAGYhEAgsHeT",
  "key18": "3KV65E3AmzszJXkQRovpXJGyWKq4kaS2c4TDY9gn75osgTLutXFwCsicvBffJX7sJURzwfxy5Ubgqfrms4hTYiB9",
  "key19": "3EH5WiQ6YGEXRQnMTTZM5jNpC2wbNB7D8ZXW4zbZunY4TmsgejYWnpFMcZjbVQeSjkj2qAjC3xzpubc7YDSjmmZn",
  "key20": "qpoGvdRGgoQ4vx9qSzJ4hnbuCvwxogN4sotYRUTyMmsSeqrp2kVPfnjS8gmZCrVgoA6XyQcq7jShnX7ekioAphf",
  "key21": "5T3cbxueD7aurfTamLjhPixfVcej2LRY3fE7pdamABFR4HT9ov6RYmQKxwCfSJYHvesXsHUJvzbbq8uAiEaHmxwZ",
  "key22": "2YruHZG24zRVbrj7jyrGKRjd4fiHaHrRFo6ZSp4KrUhhyuoBJx9TgdxXmziFbLsU8y7EH6kJoJfNyAVZ6TpfPqrd",
  "key23": "3TNZiThs2pLrahcZoguZRGPqkSZWFFGs1CVmhu5QbH8ZgchZQ2LKqdyYbrD9Jv3Kp7RjWKBVnNin2pB9gWrH8To3",
  "key24": "3ZBmzB4RRhtfUBDDamH4R3FjLaYVks4a3DwCWLJdXfWUY7b9dAeKjTrV5yy2BeHnzQiYSsoKEyLwkfdFtApDHaTF",
  "key25": "5an5xQqCftSb6MLu88PRGZD31ZuNNVphk35qeD4yzLPSGoCYV5MYV4fStkzYCumiBz8H1ALRxa1LbY3yxmFQ3US2",
  "key26": "3wVCvRsrSuNT4wRydGhSUGmnMP5dv5e8p3Rw4rqkiPVo2D92YZvFvQJZBuZ5BKssVyuct6CAyUWVyryTC2bbLFGi",
  "key27": "4qsqAdPEDSgFYinTQv5Gr6eEN7E7YVm4bQW88V5kjuKUEgQFK3ZwCGn3PASKvgGHzcZ9SmDS186S769wCoe8aWRL"
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
