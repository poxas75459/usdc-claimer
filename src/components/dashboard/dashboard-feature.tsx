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
    "2BzVYxWXYCNHT5LsSykChKjudJByKxc3MAQk582D48BFWxTUYEo53NCUmbV4pgM1P2GpEoZFF9PRNdgee7GQFooQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fmgB5v1wHSgX71eYQmk541oLtbHZ7kEUoXQe6Qt8HrgePvUc4rZQN6UAN2Q5sqGYLzSHZjitK4z7GKnVTZPSQvT",
  "key1": "5BDtqr9VgKHTUtyPjpLGJQeoaQ1bDRVb8L5WbArQwtXr7vBaBx9CVjuTjeVeUEhmtruvFvk1dhVNNJWGbikrAFRp",
  "key2": "h63VadsXLdYXk2QZLFGrjTYfCTXgCPV5XYwqx8iHWb1wiQbKwZUaUfgNUxAGAy4vPXjRxJw3dRhJEJ8XLF5o15A",
  "key3": "ZrARKSaMCHmKRqf1w8vz78zNadEUaFRAv5VRxJMDpdJZTnguCWBW3A9H6WM2287smUGRbK9MSnu5YaJq5JAqJXq",
  "key4": "3TVxBpsdZNtFrfF7CuNFM1DNJFTpYzhLXCSzjzCVVQEeGPG8x2MxHZQSrTAN6853RXDGpkS15SxvTxv6tuc8imff",
  "key5": "2iDcgz6aviaQ2Dyqmj3riPWsRHzhQeKQrBXpU6Eq6JrBKNCeTRdYz6CAsZa7CztmWKWUmqray7jtRJTCX9rRG9tk",
  "key6": "R6vM6hGPU5WdryqDPtHaBMu9ydb6enjLxeHae5YStnjviFtbhDS2bvfebhsBDkAbenjUKLuHqqbjJcZdScBBwac",
  "key7": "5Errmy2xCK7JUyV2TUSNUKu8XJW8nE2UuRp9Kdi9HrTdb2FcbSHZpT9o79Wv7ApdGBg6WRczL4VXya8z2qBkKZkK",
  "key8": "3PDfRcPpa8NDpdztpGmoiihD8zKSxYNUcy3oqYieGHrbzVgJ7jazfgNhM8kYc3k7RRE9xcDKi2m7eqGjafXtTS5n",
  "key9": "3V5YaJmDG7JHrR8rGLPCmJZzZSjFKwnqm1LfZD8ZBzFYCAgRcqu7edoF4hd7rWsb8MThezGcua7N3kahBV63xsDC",
  "key10": "4iaQiyRk83tYSDaPs1ALAEoXBAV4myCAFejDSHEa1AVBrx8J2BC181jFw6wGCqKt6jeCBq2odubZVZB3TcJYNBKb",
  "key11": "37A6L3Vj8WA7tafJrQAMGvKqoeWM5MSrEV4a5PC4QXZcm3SZvDQK2WvQ73mLrvE9EvtmiZ9mzf5y7mPxmFNztEwg",
  "key12": "4TyKjdZA1yggKrz47WGiKAbmu9tNosDSJvN3pe25gYqaHbvbEa5toCNTaZp5H8F731qpfny247pmYuHaAmaF9e9N",
  "key13": "4LmzZZNywcQFQ4QUb9LXbjVEZ7HhduFB8wvPesHBWgSNvTb2aH7FPkiHBvEynS4h3PDXFK387BzyUZx65HDctUA6",
  "key14": "3319G9QES1SmqSxPvJqoqs8mQ3aHDgFHRCX46vechbLDsRB8Pn2vJiDQ4GvvvDi2wwQJDiZAUT1vYfipL688CM2F",
  "key15": "YfNYs3sMxiQ6QnNhG9c6VnKVfe4FBp3L5GoidU69u8zpFazBZZk9ZPox55NaiqEPY7B5qzfCqtoyFN4xWrd6zXR",
  "key16": "5ycA7YhMcMT7Snn9mdLfGZZufHHg6hLRe5YtCZDNYMW71DvAJvHD9ukCsaZMKND9Jk717eaGVrQp4kjfKN2vetrW",
  "key17": "39y23XywE8vPAeacSjWpN6Kz3PwbYxZEcQCxdBD4uhUvcpaUvHqG5MPbrjhjhna9EghX49duSFwWdKirMbTYYxN8",
  "key18": "3NRpHb4rDaQYqWHXXizhmVB2DuVBGjezk2BuKW86XcvWEJH3m9hbFBJvpxDHjthb8TEYAGp7fhFPAXwkM2agfANn",
  "key19": "3rbiQgA6qMaDEhkcw12aZUJsGMPoV5jgLbCubxSKY8dX6BVTtcqfLptN8DXShmDTcYotVciLkkia6aFcCyyVhByM",
  "key20": "3Evne6kZBf7aTMkE17emWFpu83W2JhTDB8G24japL2JiEqTTDcDNcZ7Swj1Dkrjfzfne5eqRn7WeZKrVg4ALREnF",
  "key21": "4d6VLToLzxWHTCkcxqMpB9XTyBDoKcZ8mzCug7JKdk6TSLYZdNYPrUkYF99j93Gs7XDisGjeUcwskakgzGKMyh62",
  "key22": "2rAFdici3fhAWg4TvS16PSboBNN4Tzb9k52VTnUgjbKXXaRsjGLZaP9cgf4piKerpt2KCpsnPtBWJR7PAdV4fPzb",
  "key23": "5U8PyroEiAmmkqYWJM1Nog1r8oyTr23pFoab6hV9CZwR4ZGaK8gPWjQwmuQB39cAGvgBaZEYM9zhz9XDYeex2Q28",
  "key24": "5AivrtA3RGiSRLzaE9XFVpwfwM2ZctRyQgbgc63iyrhwEg7pKiNDkkR4CcMUtoA8cghDfxNY4EgXXfAw9Fkn9L8v",
  "key25": "2VXhp82JXbeNPPTBW8s6N9fKfofrksbcwSdEzV9QoWPEyszAk3gLGnXpxyv4apuNGxyppa5vpqqNvQE8u4s18GZQ",
  "key26": "3ejgq5sj6n7NLXVvuTsKB4x3uZJEwC4Pozu45mPfp1K7h9nGeZyYaWyBF15pcmQFVJSvCNoQJfzKUaWL3cVj6h1Y",
  "key27": "qPvzuCN959DJhLukNYN8sCyhKPLNHfk64PKcRkoCE3xRx8PeHzCgBVXTQnBNEBkvTNe6tdchjuhjqqkGv4Zfnas",
  "key28": "2A7m5Xn8GKHXRqWZNavp7agPTJwTbqHYbuPhLP6899vTg7hsu7ekiSgwbexXgm6FszUr7D6V5pvgfUyzBgbGfNr6",
  "key29": "4g5P5PZ5pn4xHKLAvqLgyhnKyeMLT4tkdXJaVCRxdezMLrjAFhATkRCkHjaLaFKgShNQTu1V9XxJZDWzh6Jb99DJ",
  "key30": "2tzCRvHEiSQC22AxZvsFXhdfJHYVtfQt6KYRYe9MptYqFi1ToFXJgC9mkCzwSmYiX4mDgcPcgEM2xMorc7Kwp3Bo",
  "key31": "3q6BWJDWf7U1r2N4BQHb3jJVsJixQLuRHQht5k41BUtjHLKwUTFPTopbFzFA3now76LtADAMFJ5gJaxMtNj7LCZ1",
  "key32": "5DnHZbHZY4EvFKBNnGvR1knG6uQrLoSXxr5FyU1UKyRaGKVscNdiy8PzuGX1ZUynV5jK6HMjNgbnmMxMD3doFNpM",
  "key33": "2iVQDFPBVsBfwqSKEazHGRiXcRp5b8SRrRivjh9bnNbGi9ngv6fekjKaxqNWWM6kDRr2Hg5uW6JuyNQhQqeoQBYD",
  "key34": "63UjbaZ2yc6uztT3PhwRjoCaraiCXwxJta7HNj4bUmpCekSMmpY2S2a2nFTadCTLDknE5BLg1hoTDSPkHsDXKVzV",
  "key35": "4yXhTCvepHsLyMWWzkcAPCqPmzvBTACUQp5dwdfPXwkXho7VLAtMZe5BMCTi81CU1BYnzRym6dNMjQHG5xc6w1qo",
  "key36": "5aagvLtEhnTdpA6iKggpJNYerMzXLX5rAToFzwxgyqTTvKeXnxg1H824Fwu5sAeHs2wD4orWNFZ9i2u8vquKc8gG",
  "key37": "61b9NSZRJkQbUFobMQnV2kb668HNPowAnufbBzTX5NUTK2pMi2ov9SPzrdFbZD513YxPbpPQ99uENhrpa6oELQ9v",
  "key38": "5vJqEFeNKuJkPmX46Yhf865ZC6nRo1T6qwVKinRpLN9FNvvv1AQPJ9d2j8TnPn8F6yY4vs5QrQujVEhKw68tfQ17",
  "key39": "5DeZWdtqULuViapd5k1DkftwaK7rTiE8nDmZ52mstSuuTuy1S2ALULqYx4DAGybGDtHsun8gyqGtUx4QPacLeAus",
  "key40": "26SU4rojTRJZwJTbfHLmbdVbRRgKM6ui1jnAwrDNWpKqCE6Yp4jrgUndSmPSEGSxP5wYRjWeoa1zQriJpkHt44oH",
  "key41": "3K9d2kEif2VnmdZqCgZvE2M9NCbdH15itUgzn5zPuwYQPkYmeeD5r8uoro6vvdriVsEP9xVe72Dn1FpavbKn2Sxk",
  "key42": "4LBkrs3PYkGqxaFogEX3yE51gL85BYU7Ap9z1fznmGx9JWqXhpb9TMTBRLEsHpH2f2CSxiwYuZcU5QkdkMkNanhm"
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
