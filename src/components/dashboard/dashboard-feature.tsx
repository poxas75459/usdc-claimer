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
    "3a52oa2zFDmM5TDCxnSobimcTLAB1D4oktkWhApPkCwYdKbGWHcQKoeSNZeQzWzYho64upGHcc8maLQ1ibFxHqde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3eU926gYMqrGPYtnxJRzxAidS79UuJ1mYAExKodRspvcWJXpqVFZsJ2Uov6p8iaSFtnMfZtjV6JijLQXdPDaH9",
  "key1": "3DiGbaxvts4WV3QUWXZfSGMeeogbfpUcdvRMaVkTdKE4E96tJpDv5uaC5yYJDQTBLxFWhjtXsMX6qXntPb35rtbu",
  "key2": "2wTqJfgEthNnJhgCM8bHiM64EmZyjTD9iJbCa4sbhepmksnkzwewNt8crTYaYGhGwmigaFyE4cRDVHqpkv4WKG7r",
  "key3": "jJ6nS8U1NsahP5UCkEbWBLTGzWfWwEC4MQLZd8Zdmwvnq3zT9AajwLYucibpEUu25vH12TEm4cZo1xrtPdBYwTq",
  "key4": "2Yy59X7qYSxQt5fFYDnLr7gNJfZhAhar58mt1dTts2ekAF2t9u45TRcJutnjEJMH7hfDNSorthWRAr5a7ognALwL",
  "key5": "2JUAegbG9uCJLCGdFtKNW2fsTM3URPDek7nojvBCqpmbviqt7BkwneyM4Y8sMEme6q9fsSjMsC2aFJwBNuw3rGKv",
  "key6": "z8z7hGjAqKdTBgXL4WDbcxjk9yNVuzbzijcAVe7H7P7LkSoJDsEfoJCLMt345bXgCBUbLKdASVK7rdadBKLA3pQ",
  "key7": "529PncfTaq8zuMEV43VEStymEvBUncdHoo6CDQPzuP7ZFkb7UhuXZFdKYZNP8L4BymATCxcYsSkonz8Goi6LDnne",
  "key8": "26KfkcMfabY5PA2cVZS1gPM1TKkEcDeZ7Up86n6CcVMit7D6NT8LQy2i383UZNfBeeKhs1odzoUkRmc1NL1b2iaq",
  "key9": "349xSbLzLzgTCScszWYDrbLWWWAuFF6pubcoFPoZmRnkXrXie5fv2v52tg3K3pWbFwihB174DonwRwan9isCxFLZ",
  "key10": "65VJT8FMj2RjXD5M96R8CdA7ipD51PC6ryTw8ZhAQfAmEWJM3HGsbUwQnXb9d5St9SV7xUQbCWa7qNpYg5expPuw",
  "key11": "5KYScewSuQ6MevAW45GpM38p2wXFwoj9mYfqec8kbNBpovdNumhvmxm4xC4r4TcTvG9tUgcw3ALXxUCWiANEG5N1",
  "key12": "26XnqNeKcBbMy4uMjCCYgfNyhE981TXA6Agn9JvzzsuNEKDEfyKj9hGPMtz5kbDnhgoHc4K5qPpbR4fjFTJFtksL",
  "key13": "5xkqMCwVCAFDgfqVFvJVyk8ji65RCMiT51V2VG72hQ1y1VQSvpb5i4d9d7ScfTmhao2ZhAWp6BCA3u8y9FymBswh",
  "key14": "5kUbMLQWMUYTCoKjDsmFeREgju4o1VXJfvLWt5QFEKi69VmKHFrG1rbJxfc5Q1ySHAiCihtSobaAr76NQn9cdSwL",
  "key15": "3etGCz9SmkbGQ9w5nFtYysbqUXoDAerQgY2VM8a4NMFD6C9PUSzCA3gemusK6BxP5Ke45DJpyLEWjw7RuudXGh7k",
  "key16": "hqh8Y6K8eucSRdx1Zm7ddTLun3EG9KpMx5jH53MfUHjKh65KrqYyu5RuH1bLVDc1oCAnhFkhN3Suw8frGogCwZ1",
  "key17": "3g5X2123m3XSzqqy2kPruREoAu2tBapVLHZ4UfbYt6C7cHd23sgrJZw4cV5FBDvNSZX2oB9Q4qxERA35YreQBbz9",
  "key18": "4m5ss3SAL8yAx1MyXVV9258xenEvBikdRzosnZN5v2HGx3kLzT5FRBFevyqggTrY2c4oSoFEmVYvwob8UkEFzZF3",
  "key19": "5bsv2gEp6AcbdjPpUxHF3RHdkMRXCFuo3Qt8e6HcZ8R1NeNaaxfVwTNA8fiZfbRM3wBNMHTGu2S75pW8yKcSifVX",
  "key20": "3gqVtcckdsakuSvkWiMxNzzcHkfzrM2zNB7jQiEzFeuexjUNY6c5crrXqisrisi8r6EnR8UxfGZUcuUbZfeg3pj3",
  "key21": "3aMmhbJBTXPX2JVCR3Pes7FcYKNxojZCK4jryLJjJLVpSZRKYLt6CrJxjP2hZcw5EX4t2aarBW8t26R6QHtBQRLw",
  "key22": "44nXv2W2KqTgWB3XwXfmDRqfLz8R1T43CFyW8qSihDR25bgUayrJvEtKjGRMhYzFzhzrTTFyyJTQ2XEQCUXoyyrL",
  "key23": "2b65Ft7NN1z98GPJWa18ZftBz4we6HrBNSDQCpb6Zk1s6VtCYzhQUPdW7MhAg7QRHB4i1JTsAc1ei2XotQ8ScsVT",
  "key24": "5ptKUacrNXrMJWc9f3eQtsEHCoDixcKtaUdzo2E9T1JW4vgGEJzcpmvdcWbeBoYQBDUAxGkDnDkU1fL7LYER83S",
  "key25": "fWk7XQJpdytGwoYXvN3hzZ7X4raJ395B9e6XFiSyVTTJxLvmasgAb3o9SsQgVv4yfsTmawF3kgVhocxtyHBs54i",
  "key26": "65axaYwHug7gUcEXj3Vze14UmVgDPi5jJZVB436mdrVycdJQcD7ZZjCmkZW2PMwma7SenfuuzbcKjq4MAyPYMbvu",
  "key27": "sHxy4KcD9o3nXJPdaoJHHEtsErrBiSrHT1ZV2x5zEwCJ2zFHc2SoytRECRPBGLDLuq4WfWSedt5Jcxqu6PEhgaF",
  "key28": "2WUqFUc8B3JYMhHdADUaJC4t523JJmKGEGLn3SG4YDAfG8CHFMzofVViiz8XWkiwtcbavkFKDhyJtbQCTq7P154Q",
  "key29": "8wNPDbzwNrn8pHbNgz4SAK8VYDF7He8gSS1cKb2DgbiQkc4qryWpqFKf2uvn5SZmeLU8n7KYb9owKSVUejNvBT9",
  "key30": "3puBQtc6w6JZ6E387wzoomvGAdfd7Fou1LoDhXK9A8j6vHUZNfnFvU2Xc8pVdijKotGUJGdJJSWaBQRyMsaH5THK",
  "key31": "uSkGLTk48yZq9SrTEKKvMF9YLPrmqHQYDTyWYAZy5HmWjyQ6vsKvubKfhv4CM5dYZPfgLxL1FnYE6sMubjiyFek",
  "key32": "4YP7E3zDd1TpUv1haBL9fn9Xy3sriY32gBJGBuMyGH6uAnyEa64NJ61qSJcD3kvW3yEQnucAGuRUXfsnGnzpyUad",
  "key33": "5JXdPK3czjHYGGJSgKovkA9a1tdYL2SaED2yK6MbPgi1hCFuC7nxrRBH1YQHBPAMzbpq9BbkwWPUCpHwvfwSrP3v",
  "key34": "7Y2MSn8ZXfcWBYiw2eR7nbxpTTJbU6Fch1KkRc9HZTPE3kJaF5iLGUBG9E9boWAn44xvDmLVfYKThF9mq8x3LbC",
  "key35": "3TskVTr4JAoRWUku7bhLASKpo1AfUtVNwZ754UAirTTXALMQnuBcQvKewXVWsrgRBAmL7JWe5kvLZZZe5ZNUi4Co"
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
