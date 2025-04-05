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
    "4w9nT7LxcZXbhDPifGuCz6eueKHhCEdtCToAn9q7w2yB3bSoaiBHbTUwT4mJVHUCkSVdxAFS1r1KJn67xnYKi6QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dRuGdZ39mvtn9QQQwpHTfefDRWpFpJtVSW6UVxUsdom9dZkSY7n9p2VFgDdS4ZEPPFrA2qSakf22HQzRcPi9vn",
  "key1": "2zRPHYi5dg59TsTJSfWEEq5hTw7ZTWtMF6HavYHSbWvpWAzGswkjYQs8VcfXvXAPM57L1WPMwXWDkBucYp1SabGn",
  "key2": "4JyxNjYqcRYNMunSQ9gEEDc9BXQHuxc2YSLExpmzADj5yAJWzpKJ5TqDK14y12VbG1UZiA2QPLRThKSy4WXEDAVQ",
  "key3": "5v1dwxBSQ8PDFdJfDd9karLGnozhpHPFFVQZ5KxfPwHJZgCTn8jkrTNbjymPRqnjUh1ixHKnHqrsAavLKX6FLDfW",
  "key4": "yqKM1gdkjK6SwsFFmvSdZ6auJhNJDa3E3Mte9mTGSFc4Pp7hE2iAik3p79rDWwnvKajpJaBjRVYf81unZJKg9j5",
  "key5": "23xLXffh5X64t7axWAZWadx261hdywNp1qfzZSmCoQfAu6PwEBXt6dM16VC67UWyC6YaH2seHzMZjPmSQDFS1hiR",
  "key6": "26DcJw5VWjmrc35JmPhKiGFg45czDUCFUJNwh3J124ro35EmGeH9pHzPZAtXbXVncJrub7UEhx4Ycas343k9Qm9R",
  "key7": "3qkLwX8E15SgeMKdssvPH7h8AGJ6TCwaiq8Uc5gEvQ8JT2L7zwT7BH1mveT81iXbWfgQUw48RTE6gkWBhhtqn8z5",
  "key8": "4hf9F9tdVkYpiUL6VZCt1hzYgToxLCG1y9tUAfLa5fycsbMsysPLE1J51LnRGMePo1NmKhXZtS67w1BavQMC73JB",
  "key9": "2taBJ63xeJpzy3U3me26EHwyLAUfKDSN3kTTpsZz3xrMif4Pi9ScTb3xEVfvrurV7JpWpGZ5kzee1ccjJ9AQsi3D",
  "key10": "4kEvfZG8LByd5zjctcVD1jkreNZaLBZD1o5Y5jhJCCWeF2aToWS7Ch3o86bJWj79KwgiNqX9qRC4tZu7hwjBL3M9",
  "key11": "21ZyV2LMmH8tfXnQXFKGcPNmk9YPCLEZ6Uiq88dencZrbHzYAMe1AYUVCXEKKPJ92KD8f5ZcCNMkAqnMciTFeRRo",
  "key12": "3zsr8QUPVETGtUKpuXEkytWMaArh48ZAFvLB1umErws6z9314yvL25SzQAa1RQ6a2nz7QJSHhgdzncjTMLehdzLM",
  "key13": "yFc3CmkQgGFi4mUbkyWdVEWaBxVBwN8TZMwCujiBftsprZ8yG1Au5U82voordmgP91bxYDuFEs6H48KmXecnDW8",
  "key14": "q8xYXxqUbvf6Q5zrCMQaTsWnbTb5UPPeYWKho4ZDofc2ZGofvmtsxTjW1TZoTB5TizNwkZffgiEenFvYrcsFo4v",
  "key15": "LauJYQbpfCCjwFYSc764hWp7LzSgqfe6LSv9ZWP5NTrwY8FN4eK74MXAXPnPuF1KNsL4X5jW5Qz4yspkKZq3HCU",
  "key16": "FW3A45Ja4WC6sPyFCm4xnttbhUQofKew6agxmaSQVEhvfwaoRzAhenFin5MgPcR5nHaXg27s5uE2fo8rqpUK5td",
  "key17": "4D4GU5HuNdVF1jRA4ViYKGdXjvHs8K42fYr5zeC53CdzGFDSnGRZw3kLNUguJmeNWkBDwM4qeLfNLqTbihXAihop",
  "key18": "3uP1fajL71PYYprvE2ZsGTaAs7jJTEZgKwcgYsycVzb3aZC1LU3iosdq375S1e58DjxQP1KxL195NVY6pCUoVVBS",
  "key19": "9rg5S983ASzf1s9HdbWaWXzsYnqLqo6c7bK3y5MDpgAL6vwKLtQuV9aomfXaUrQSDSPabjySMaVSpPrxyGF2qn1",
  "key20": "3cyQaLDZtsvf69d3a1FtdR9GWrQ7ty5Jmtc8ZooJM8iH4bjjLse6QEaUotumCUGoqaiEAmLNHyopc7ZsAxDTQvFV",
  "key21": "RoFsu19P2Tf2FwY25njdSFfi27KCBBGtxWXz839hh7buqiuQoRPNQfxxMatDwrTorMkDkaQaeCL4LXXDEbj3382",
  "key22": "2tCyB7xcxYsywaFJNpZ6ywQgwHf1mfQvGxcrDsHiV5wqBRLvLxuGNTwdm6uvwmNGN8JvNBTcTxcwcSg8XAcv3GcU",
  "key23": "3BdzUGuexoHFCGb3CeXdRkYjvZv8DLaQ6bor6TzFzeBUaxLm7sPaxUUAH3zFT5oQwyG3nbqkyu5fhRorDF3y24uQ",
  "key24": "5w5ywd7QNG4sb5zpeqFPsUVzMbUeuzDVFcjzFLGoKfoNEUdK9zzbQ5zajgczZdGG5FLbSmqcMGtWL7ca9H7sDsxM",
  "key25": "MGnKQH2xQEahQnvrBYkLwv49ZWLZsUpd1EqQGyV98ZfB9yvAnXrNXa6MDGvVrjQVNEjZQo2jXJEdjRpxJTcbG84",
  "key26": "5NR2BT3Pejaef7viwXbwuaB3Z23tpfXsB3EUzgvStGdiZMXauNkqDvarbn7t2sU1dszLwY6Vu8DrwHnXnnBfaAxT",
  "key27": "51oUr4bvvZVp2UvTwPZJ8JE8VSLeQxu5A6jJquqNgncbNogXZYs3u4kgAvVJrc9XuMtRoiWJ8XWG6ZZ5c8w9Q8Qu",
  "key28": "2Gsh4uyo2FcUV1Bx8xky3iRSmQbZw1srgkkgyP82SeRnAp2BoiWBeoMyr5mRGpCEZTgceQqwY6U6gyvc1xujJGXD",
  "key29": "32Soe217dU5t8BDezKGhHvL2ZTdtL2sd6LBrQqH78T6vWHCWMEK3jgkpPo7YHhhYUPeqMypoprFsLWXThdY5smBh"
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
