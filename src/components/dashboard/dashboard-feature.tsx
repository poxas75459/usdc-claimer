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
    "ALMnkg7FMcwRMQ1GfsxLYkBnwE8whynJLknQDgcCajKBESmN2pXGHdpyW8xCvvEoyY5k2LcYLFXeBkvD5BkSi5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtRqLnsXtEx1N9CA7cyQsaws8KaCyLwuMmyowiAJ7kdnkgzsbBswd2hfqXEBuxwK75oPn39V1Vpi6pmKauegxux",
  "key1": "48ktbtnCKBfRG9qX1xpZEvfrfoco62uFyHak91D3UXfR77oyNu6ofFw8Td5iEMrAj17skmeVwTaMvy12D46wNSAB",
  "key2": "2xUxjgh5RoMdE3X8qgrwzywwwkmVzZ2haV4MZyTwCe1cov62ETS9TbA3asHg5SDiSEetuzRW7rb8FQrHSwFE9WkG",
  "key3": "3L999Qf5FMioFVaRbemW29E7A6SSx8wkqqoLzS4Nu8qyHAX9JP8JmED1pTdKKh2ED31vKwfHB5XqcHR3bm3okWB1",
  "key4": "5AWj4iKoNGg6SYr89qKejKHhgsNMNYqpJw4wCaGjhJvY7txXKJRSQrgYGhb7CqypFUjCtbACCmHYLcKYEDNNUtEF",
  "key5": "2yuSY2CzwhvRKVCTQNudniuLAP6xsP5QaGLqvKgE3rWUZJ6reyZBKjQLTYrhbYz6AZxMzRSd54nC7FAk4Jr5s99x",
  "key6": "4UD2AewiJxwNviciNuc1Jea8ufZMigE83xi8ZzMZRacKJ3ivmEegFGMQ8AhA7pZwPmfqVse7cZMNvW2QYLnZAQ2N",
  "key7": "2fBC9wQX6t1fq3oHbAbZDzTAPgvAxds9TFbUCJbADU1U1acgFToTQLKSxXFpVJ2Tit9DrMpVYk7bsd4mshNbWnCX",
  "key8": "4zcGWe3SVPC3GudiTNuHqgSWTSGv8mca4emkF99nAHWo9WTC7syCeEtyNGqVzKXQfxJtFbNnYF9YxQTHsnUPDxXj",
  "key9": "4ksUJq2rc5WKjSt3gvKopvy9ZXiSt3WSABdKWU5AfuiTVCtYZ6XkqCJ8BzzwXPwkXDL53iNn26hUCXQrJwWXQ8Yy",
  "key10": "2LKFGSvmb7zWR5PP6hYtqWqZgU7S6J15FGtHUjiVurpwsBTFmfrPdHQuWA2YiUaqNTNFYDYCvvYg6eC5Fy75k5KG",
  "key11": "RdgjXsYQLTdaB9QTYmeNUP2ExpxKKvfTi8VTowKcRvauJBgigLMtBakATgizZQ1hZjWfx8LQpa97KsEh4ovNHTQ",
  "key12": "2UUnoaRkoMGcunLCTEE4owQdLFUutgSjN83pSEdmFpT9xVAwM1oz4UdBjdqX8FHmST2JTwMdhd3s9iLpvGbiXKW7",
  "key13": "2Y5mKchYqVC6jRaS1s1PSYaRAsZmQp7ikcado5ECSF2ycskizc6DEtWpbxaHsA3Z2q4hFRD8QNEcE9o7FLWEwZSE",
  "key14": "2jeJ5qX6uyQ1nQ5eF73doZYqy7tvMnyh4ZvB4k6aZ6EkKTKPrXPGGM33qVhZW1Sd79XAojfi89EtUq14mHbMZo7M",
  "key15": "4mwuQEEUqEjGQdmvsfbpMn7rESNEQewEy3KY4dL4FmetEBHenMqoEGX6vE139FzePpuBFKdpJuf5rMcRnnueqeJF",
  "key16": "2iUhjQt2pwEMSwCpxwUhf9cKFizPN7EPmud8oHZyiRz6Gm92oXZsZcgYCbKhcrAmNmW7PMNv7u7vsSvasGNo65ZU",
  "key17": "5rf3WJmib3meRZWxuuASq9tUq8PKP5dV8B5nm2WTLKnLL8D7E7ADSnVcgsxtCCKYCe3KDsWRxahgdFzYpYVkiLGc",
  "key18": "Dp1aADek6uDfdDubeCLyMM9Hu77a9PNVFKnMBjgik4dRjKpyMnYZpCiUes5BirVszTkuLxmbRU3kHNny9auHBB7",
  "key19": "434fbqrFaujsDh7nXYZm58viByot8bs14nJ7RMUKgcwRAZCq59j1xPshTXcSbRe6Vf65m8G2D5pM32LaVY4hCkf7",
  "key20": "3jRsjHfTkKZDBJF2gwYvq7ibq6tE5N8GUiyg1wq8MnnHDwn6ZQu5SxtXH74RHM59vNJLWkj9Zy5Ufzvbnq2Ycgzp",
  "key21": "63jUGWVgv3sdp12BUNAcLHJ4ry2hZ6YingYQS1KxcPBdrXLUyLRt2gmkwabLwQmRAivmTZaW4skb6FdLViY9VgYB",
  "key22": "5D2hmk7jdZJcMbREM3qEU8d6PojY9VoaDFVBUjAa8Efqh5E4tVT4bmeoCaMnTvSNwsLmXRM7dujTmCszE1q3u8n1",
  "key23": "2CCYJMPcYrZb9uWsAWZM8GFdx7Jo9K2UCGEi9zsKwssumYrW7mF29bvYJh9wk5643e5YegzYfbnjuPKs26k8yqVN",
  "key24": "4VXc279eokJZ2AHc147yeWenuPYxsmMjsVjvZvcK84L5Sw4Nw6dPY6TRz2bFU1ZfV693BpVUgkgtyMwSQ1raGqYt",
  "key25": "3nE68PsEs7iwbWHH4FzkS1ctZrb85sE5gXcVBEbHEwMKd83T6TzQGqc8GgkW38vayDjvXrsMwgB17RQxgyhYwudV",
  "key26": "3pDoSBvkq7KCJU6b5c5DnW8fJRUdfP8BdtYJWr4vLpJ7MEHmehYz8YnqELBryDiLsvZ2yE9oSG2qR5zyypQExkeh",
  "key27": "3upKmwvtkqpDTnj4vxK28XXEczEo9rQYTthj41zHr51p16qrHTh2uRNLy5qdJKy1oo4K2mguzmkDm5ZtMBoWZkUy"
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
