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
    "4K8SJqehajUwbMGYEtcD7D1T6BabU5J64oq17NQmbVKQjPYJn4yn6VjaQ5X835JLpWPD63NmM4LiU4U9REK7pEHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nqwSzC8NsCXPyCawkWa3tXHhVrLjrqAj33uhwKCXSCtt2DkcZKnuqhCTSrfYHVNB2s7fs1JCGERgaoSQ9K7RYmL",
  "key1": "2aEVXknB4LhWv1N2VwiJwGe5eMGRNjbCbhANUcWkGEjTyEzKMpr7hMq2o4SxqwkgVFGumHjcLSJqqNPL2QZK11EJ",
  "key2": "4Hpyn7UP5KQGHdjiqrsxsWUu3JWiQAuSsRLrauQwgk8rnD6UUxj4BtdpBaqRjUbjzv27vR4v26ZHngojiJdNFi9E",
  "key3": "2xDTv9Ty8xLPNsW9sQfrAhT8LHC32j4YSS8xgTGXfHVYNM9GYZywXRwcopSkUVxNsQKg6kEnHQEv7GxFJqj7tck1",
  "key4": "33o8Hx5fJMtB7Pjzfmhut5jetYRP7BdMjgz8eNNguuhSZpbiZrXayPbDjxJxYQT9P61VxBgTBtav1t7jh9itgbbR",
  "key5": "5nFKgxqQAEswkQyqTaJ4qQjjmUNJkom9iEtRMRkNDwGxnR3u9fxgzra2zZu8Mj9w7EcasWDjdMf5ipH8XMxAm445",
  "key6": "2Dah4Sip7WFMgVVEhSMCAZywC43wFT9VQ5dPdDf1a3Vjwt7jW4m4qKA7tzwTwg83oRFnonsjYty6XN7QA64RJ7mX",
  "key7": "2t6kMqe7gMcUyaVM6eDwMwoizWKxqrPh8ui4VwAToLgDkiGM4SQorfgPye65gvDNTkQdAgcpSLSRkUXuXVwLiC4a",
  "key8": "2osW7GsyGwRyPwvfGwuYgeag2MhNrkrHNBpzrByXmESFEJZNB8pmkX1XFYhurmBQWKyWJhJELUbZbbxN5ycXo3xb",
  "key9": "4x7s1yvzp1VijmnG84ceQDwzKJVYN7W5nWSedT6p6F2yVidfBkpMr78aHeBvbFrRQHFJhNCqmWTbtwKjnzYnX61H",
  "key10": "MpygPru3gFpa1eqNAqdif6qkXszgaKGNjtLTu9t5DQBTTGq3XqkutimvAhd1qNHLQGfQ1EzX1bJ6351fVBqRTjs",
  "key11": "QqD3E6WDqRWNK2aoA2Eky2r5jHvj1MVeqg9FMs473Sna9BHhJFRkuB32VsEKKhsXBoPUjJ4HvvQ4SWAGDC64W9T",
  "key12": "2tV5pvzbnmK43yCWyVnH3tRcXoWWe9MsEbzZ6VQctYjBFqcEKqtwdSjbAu1PRGCDmVVZnorUbs8e7UB1u8d7xikS",
  "key13": "67JcPB2wgrogvaRgjmhzwHKKubk6m8CeGMyaMCnDmH4aUC5Jo3B39o2WahbNMtEK875VeaDj5j8u6spAf8o2P3Fw",
  "key14": "3ALc5X7d9xqifDDVNg54f7nQwvmRfzc3dDbcFGCrTDBTBu3jumjYGPir7umFgHHcB4t3Yd4zZ4rYanBFQGsWjbLz",
  "key15": "5jZE2fPdW5n5NhMNxHbvTFfUPtgKWRZLpsUC2HRgoioz8uc4WHd7QTktw8Wugr5Ap5p3XzV42XzgpWKHzpg5uMGc",
  "key16": "4ULSXEUHLyJY2qKzCYuryVoVqt8dgEus8UQ4MRJV7u8D8kyNbdFivbuXTgiuP1Ggqn3vGzhd1AdyknXF6yAS25xR",
  "key17": "5Cz4pQhamBJ5Bmxeb3ojnC5UBMNcvPRw5fZT8csKFxNBNa2HTGdHH1SCYxTTUkfyxh6pFb5muLTax6DfeRyZGViu",
  "key18": "4VQtJbRVvpt63Ybdj657AcdyvJzLPcDoDMLKcwDWyyxrspj6tNGfAjXKUSr7h3CiYgPJLaCbUdVqAiTCbSthViri",
  "key19": "5nDv3r519vbPviYmzrJXPdtxvHuuoNxJvTBhmLsVdqWHUqQUSB8p9empsvRP7dGWuE1kpmChGAJ4PvPcE9LvVW7M",
  "key20": "3kMgzFaUGtLkwbmcJNr12MHm1agjvNkAeUi7gbCE7jMLQwZwu46HUaPxt1KTLnUSqPD7oYXQmECKgSXNF6qJq6LJ",
  "key21": "2g3je7huip8MRg6rN1E1VFMHBH67nAoNCtGJcjkFLZbLQ76aBUYcCEwAVjAcNVhnMuhhwTHKebXpUyWQ9ZMK8r34",
  "key22": "3PDFKsEkBiYUTWVnZgWWro1JAx9YMzY1gPf2ScuWauw64f8ycDubBCAtjPMY4UtRhQDBnaM9r5AJdyWzYPxqiGBr",
  "key23": "CcHxPfhY6wPiuJchxt2zhtccw1etcu16uoKxJaZGhYXiPaQiqn1XALeY2jfQzUR5gzVfWZ27EpmER74uuz6i7Jp",
  "key24": "2atiguqfqduqgfXrcDytD2N1aM5VNwu6oamvwyicMfmLzi4gMfKMjFcdC5w7DwPQsGffXhQjf2iKZsaur8hdGXPr",
  "key25": "35PNodMGifGVnRqJ5yi9vzy15aBTbBBpuw9mtjAf9uFSP7gHU3fT6LuTkCq8HHH7t4fHkD4cNtKwrH8S4Cc8kQBe",
  "key26": "4NuTr7RMa8wTtmbBR6RMeeUSRtW6oaGC7djNeivJ1pSx3HxJcmhtZ6gvJUsKZTPfc7n2qWe5ubNoiMBXGEVRJPmf",
  "key27": "3LvosQkL1MAwxSuUsPBuCB1SrheddXaSBZ5KMSBmYodJ7nncrCurGcHh94FJXFpqcMQKPSMEX72ET8QDiFb3Av9A",
  "key28": "41D1WhHPB3HYHWsz8UaYuBw8T9d6aF3CM7P3KkU4hp7ADMDjNWuxdVBYk4BfAW1UmPRdkyK7ULjrDyAfr92LSGHj"
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
