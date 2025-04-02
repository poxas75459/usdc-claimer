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
    "2LeMWJ3ro99EHo8Gtk3h2rBsddiZpKfYev2rKjttzdTzBSi6FitB6mVhioV2nD9icM8CKq7UwgPcTL5UUiCuYBFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJVv6A1brYyUPKZi27S8kUnF9kEo1YHnHrwD4j7cJpDvAwFrzjw9VTbJR4SUQNSTRLiEZ37DTFNVsEWj9kp2eCG",
  "key1": "2iwcZLsKYbLQHjn9gHNtCSpJX9bCdWjhnX4jnJt4C5eb9iMEM6v4JNy2WgbBjfmeskkPbgqNDGt5eD46y5nXfagj",
  "key2": "REYBvhogPuejsMUYdzX1rmr4kofXtjkK8cg5cyNrE3Lcb4TxNr9MvdYnBDkzQGyuw9y7sUtWSV3c2nq8drhmhNB",
  "key3": "2RDUwSkbMJAz67DtkQNbdRguzcDDntsccA8U9QLs4Mm2B91xwvQvDMwU9hY58L5dLYL3xkKjJtTbA1syiH92UWkm",
  "key4": "2HJN1gRajEw5TUrqaao9YrYfWaYe1wbbGSCGSdkHWnFKq2JTtyVUpcUK58N9cAwg8A5pQiwdzHxFfo1s51SmGjW3",
  "key5": "2viJRKabjRRuQsasX7qWKtGUUZnksH2GmCFXZdqTJTS5cfUiZtTcYD6KvRh7odZDqsGogtzyeLfvDPc8hLAtj2RV",
  "key6": "3aiMigScwDYLvWSfemawaqB7zDXd3QuYmiSwyaaCNrKBucFDuSfgRGCu6CcGEVySm25GDJjwSh4T4RMJi2bVBJZN",
  "key7": "n85kRdbjvtfuk2gYJofNxYUh77bggoGRQoLJeAuHgYac2AvKq42iZndMYF2UEAzwGuwthj4MJPBEJcbq93BQtHL",
  "key8": "1rC46UFcNhobbuLHUyT5EXDkN645A7HVa2KYLs7pTRrvvpbzWcUQXSECvf4YUG8WRtqko7VScbyjptJ82eQSEJi",
  "key9": "2xrt6Pinv2czDH6QrGuyLwQ18o9GEyDcingkxEcy8fd7bhrXNqKCyDJcR7nxrK6AXfY1iDcCyDvjcbcmCzdPtQjZ",
  "key10": "5JizULxZGEKpPSfTqyvrwXBXyec8eGvZt4PyHedYziNLEFZsSJjbvBhKN9gNWJdkZXqDWGdS8dvwN6AxTGsqChyX",
  "key11": "2cTaQb4zz4cfJ7v9UVzQpJyRM3umvWPNbxo6eNVpaJ3dV1tY21QHv1vgk8t621RXAfqDA1MWHLNrM1Zihws8Xjdy",
  "key12": "LGgtPYYu1yNhLKDtVhH9iBvhQsNK54HBV8DKR9EvmS53ePYLodg3cYCj7BEGNk5Kwg2XwDEQ8LBoeewQCYoiQrN",
  "key13": "EV7NHQ8D8jhc9YmV3NvNzZmZcVhJ3SKiJwePkCMwpJiGDsX6t4s3optGCF6Vc8bmPzNvXH1RgisK4sq3giiS27G",
  "key14": "4qPv8QJhitnGH12JozQcoDKXMBnb7j3jsHWp3d8H4TauPWyr4wTp5YBmLgfaZPQ8R3z2KLGR9KtNnGMTo7iarWsr",
  "key15": "LYo2H4U6ANHXQTePjMZGXgavYcTuPBeqFL2D2izGEowmQ3aQgw9PNtovUMJcyZkuCbQtUvAQbUnww3BtAKXdFjU",
  "key16": "5c7ZWtJGZSNoR1AzyWxqHpbvtiC4hec4stoaKAYdDzipTCuKnpvQKyxJqfyHrqZUMdpXsdNVXGGYFZ8GubqZjTN1",
  "key17": "3PzYLaL96z8p5h5iEzyz3Nbt2en3sMUdzhATyYuo8VxkbCdtg624WEXPi3QUAcKQ4RnHabFm5F85Zg5CTfP5845a",
  "key18": "5B6DbdUAD3LFChJrd4SFk9d28NdZhTpNT1Pnd3vNmBnfb7cdBELD4eQfLMUCbiE52T1GVBBdu45nWb8R58vkiQGG",
  "key19": "2GpQTtUXqBEVunEjbMuX2dx2KgGSUUeB542wAK7hognTnffNuK2rDCngX3SdihFr8R3K6XtaVynoq6oBPNWPkkEF",
  "key20": "cErBQcXS3qncaXGFjPtEVJmbD3gaAufmpz8muuEQiAdRr9433TqJXeGq5kqwPvz32mTTMgCHJNLGt9fy5KoXVDj",
  "key21": "3CiLug8cfKpkCbGaSQ5mWgYXqMRD3X1CV3HAvq3d4HRaMUDpyhi54Ws7kAqbMknvQ57ub66J4azFKTnUXFD7Kv7u",
  "key22": "4XExsS9Vnp6MkZFJgK4Vfic2viyRhftcdX3pUebsrr9dhw3WXPnPZfpbB5bKtskQBa7TncA4uvKi5jdpvXpSQYhD",
  "key23": "5RFDVicXesQBy4XQSpxo4ggakbw5JyqccWsUYyavSwB8fyrW9JWTAv7eur9izhtjDibHJkLvzoLETmJscNt3NT5x",
  "key24": "LY6xPcwurQiJSNzWT4pNBciQ71sPoXgEg47RxxJVgbbw3noDqS4SCngAxbkUQjwMfqaGokSpqL7Ji3P2zjguHTd",
  "key25": "3n3TyPmY4yydufP1metWafgYjVWeAzDgkdaG31s1e3Fy6MHKWVyaRtQQAWnxynNLuU31wT6k6dWusmWKLaVD9usC",
  "key26": "57DJrKSvu86eB84sAZLr6yF4hmKVNEdXdD53ZeT7saibSpoujEfY1813ncAorVhbCcr8qWvkG2fA222x9JBuD6wJ",
  "key27": "2BE6NGptqV5fsy6qWksvTtaKUHnQPxMqsfeUC1J5oy7h2YdrHhH4UBxNs41VCv4CNCQFgy6NsVc1spJ4UKFpcJgs",
  "key28": "5NovmExzPkAFFcWAh1f2e5j91gM7UD54XadE6gotGRcjpXhvSjZo4LCp8YfkHG1s8V5spfRbZMoaHQDdJAoeFXbP",
  "key29": "28LnXAgnqmFSuDSkQPtxCq3XvFrSpLjvu6FYbKsPn2G9ZYu1wWcts86b4uafs3P1AUfcFxf2qhumw6eqT6SHgW5C",
  "key30": "53ztT7ZbEzy2WUwuHEQMkS51nweu9ZiGzFNa6Ksz7Jdhbi8U1yyPGRqHEa5qdiMXygyDAzZ81JCK7sZ7CC5K5mqc",
  "key31": "eZgLMfEf2w6zhoAxMKvNhzdPm2wz7YgXrnRt4S2S3Fesx8h8kp4ADMZ1aSwXWhjXRPgUDPnyAbXR6j1RvcwZY8n",
  "key32": "3ehPf7fRuQbcsKzd3UiuEtD4KwnS1Ku15t2QLhMHXJKd2hyNYKUsbyZeDc13scuatXmqSNcTUvXi9KANMiXUNdwH",
  "key33": "5BHZDKvDUuddMqgTdSxUkiPpUvDvXRifQszPDryqaL7uxK2Z1FKrEAYWMGvWio3HrbaTdP3D7vrSseqPKtV5ydpQ",
  "key34": "5GXWz7aq2T9KeMqQQQTdy8VNcQQuEdmpsqhkFLi8UgzUfKZFh9ZWMLnff3snJhS9SbRorinUw5BdxFr7Ucxj8KgC",
  "key35": "dJDS89YtgxtLcvEK4thvAZHPNetfw6oYMquePyDV8uTupicuUuwKEfgNNBVGQtMiaYmfLbCfJ6GJKXZAXbJ2Dp2",
  "key36": "625SdR6MXKE6WMiPo3aPmiXQPTRdtRpu893wEuiHVx8VaLsHKXoNSPeD5zvJ87WNhJaQCKJm29SJuoYmvctc6TiF",
  "key37": "2mGvVxE2n6BNYux3PRURaecMqtc22psYMNzQVcvNbE9Xew8dcQK4xffvYxVXhcubYJkAE8YraYhBChnYCNP6je7B",
  "key38": "2Hw13qHZHJyprCvsVyYCe41fKwgNXXKrtfyG3SWRPQ9kRA1BzfsMY3YVmp2Bzz7wu9CjgQoxZa7PYnJgvNstcMUs",
  "key39": "3uVpADANRnMxsCqpDt1HfqnUVg1y2YmZ9DKFVqLFeLZMryMtFBfxAjwbd3QZSTyGQEbbvDbEejA3DV58YPFyw5C8",
  "key40": "cTN5ASyfAD9YFPyxJniQ2fMtnpyZPhukLgi2VQaL4qpsUTct9sfir5UCykmvB6w2ypjNcS2P2dyuQ32pmwyd14E",
  "key41": "4RvfgAyxZ5oGcpHoDTC6tu1uvGcw9ZU7VLuxXvaSi1qFStdgMEG3f2jHiY8G4mBGV7KG5DfHsFAGtW6jSuwVz9np",
  "key42": "3UWiC3uqAQFUVQ1ZhA3oEzJmrw1gEGtLC6jJ8F6RbRFujR1g8vy5hxxqxPu4wor6jovBkpevfWer97ZRvJqKzBV6",
  "key43": "5uCkN4wWPKrLA8LUnX4SbQoBhxKcPWvjY2HCrF76VoA2hY4NcptfszyZ7QPyzmaSpVQVNzcFRH3UadJs28g2kkLP",
  "key44": "417uRNVkLqqVWzErwYa6jirKo9jBnxvcGEMN4bosdiNQGezBacje3CxodeXyVTwErJgLR62tLM7fbFrnAwU39PCv",
  "key45": "3t397WC7bPvo6A6U5A7j8gjic5beNDtnyjeFc27DTMN7yrjEJvLpxcW5e3diXPVt9h6FkcFGPQwUTFz6KUjAj824"
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
