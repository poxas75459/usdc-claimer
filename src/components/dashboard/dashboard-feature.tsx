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
    "RvEyDLnwskvvAP7erJCvWkmUS8Sxw2uM1PzFgBbyGhf2JNJvopqh3HYtvNhvnQCAAYng6X1NJiQbssutavY45Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GPdfFmMLSHn2NHNz5DP4v5CyRQHRa6D21KMj53hKidwc8NDewZTRD6xQviwzGyqzirrWnKqDRi1KVwi2TDEwFNM",
  "key1": "3ppw7E8HpQrYMs9t31KbbvDjBEScFHhaM1oS1ybWdxutqKJFuvgd1TiHGTyMBvUnYLEFJDpwhaGNTvJCfoomQCRn",
  "key2": "iMWms8B6tFxLBNmjM6jhaypg4WeNLrZXMMC372DrJANdgyo3h9ve87xrVgiq7UHuZM2jrjTa3tsGorTxM9cV9dJ",
  "key3": "4XrL7kgcaQJckWQUAingGgEsQAvrM4nGWvy8qHVHRzSJtLK4UeSSJzWECkKq7V3mTs8nDjLt9U7aR8EyKFxYfHnt",
  "key4": "2jz6mwS7mUrnYkHT8XMhYJLeuCmRpsUmW5myiuYmg3iKstyeE34auQ3Q9QuFHAREqQJNnWvWnae7yQFYuqK8hVvd",
  "key5": "5ZS5SnZSdS3KDRdXPT8y5WQAdgABKTBPYJ3kj2Qf4aaoC9h8w2ymwtv55DcLM45cGnm4rocGMyrcCyEMJNGqfsnX",
  "key6": "4FBWdPzqobwhAoy39eW439HdWiM2Wx7YEkdEwDfN4oRNxswZambPuQzhrTqZ64U3pjV4Li2mQ8vkA5sGSkLoqrCT",
  "key7": "21zHSXHFUCNsKLyP1UsEe7zUr2xRL9Z2TX9Gw4cWvHVh7zmtcXKS8jaXZzaRBieuWSfNVBW4pK7AvCdNBCCXD6sD",
  "key8": "49D5ye9kTaYFugVVpTxnSXriaFvquWmQkPQRGXKemfXjSi7Pv3yr492etDEDskkwKPMDuRpt1URYJn9rnYJjJgfq",
  "key9": "zrGQkxh9vYbTsFhAqsfB5MRmZ8w3ePUCtv1DV7Gggp63Jc7STpUcP4QJ7KGtvgd8KHdKs5A5EYU8gLJucZB9TaN",
  "key10": "5Kgpts6tMT42UNhmXufmn4CRiaps6J4qrWykcwWqEDjawGUDiDjzg95imsW4YkKAxRHpn82keq6bWZFgz8N78w1p",
  "key11": "2S8rFe6BBqPZnfaWhMBcjMwbgSj8niDx3tgEZJVU33LeRyAVT4uTPyhFQynLXKVuY1G2F2xWrHcTdJnznVRTrJdH",
  "key12": "WRSQFtP2WwQ1CCfUSrCF6bFDuBVAPeSKXGvty6VstYFUUSXdHfLGmb3z1XeZk5KVXPXU3zdgdL5F8mbkawD4Yp1",
  "key13": "5P9bFnnpuaAK8PryrjF7YD6LAzp1MPmUMvSdsMUfuxHFVzepgfyUjDBNsX3Hcif9moWowsMf8K4BVGPyVVqDBGQH",
  "key14": "5FWQ4FTfVAcLkhKHUJa9HcA7GE6QamAyW17dHLGK4JyfSi7qDAPZYkkm7JRUxbCk6fxnMSnPBWYehGnT2QvGxcnr",
  "key15": "eKKDACWFfRgggyFQxikXjqwfQfbBCcAbtUnnL1K6Rjuw9aKq4PkSEaMh7k9vuyVtqXDMwTtKvDQT6hidrLBHhSc",
  "key16": "2Yf58K2DZ5YiYuD1UC2kDpiY8W5yy8Be3j7pfdVdgUaZyKvtfAAtkhgMRe6zhwPtcU19W4p8KmX89toM6DGYYnbP",
  "key17": "uktWsUdWLioKLmgm6ibmCns3ys9Tze8ZUThbVYUaoWP6djpU8MT6129f9L6t1zsMomnGneAV6sXCSGsrFzrJzza",
  "key18": "4KMxK3neaWh75aZC1PCRmaR5ftPbuwih7stcsDk6TXzcHiqKoCoDssVyU71zhfQ5dTTffevw9q6v89s7QpZbYPEf",
  "key19": "4K3HrjRBu3vHZGMYjFbZTREdL3uNpvqKXHXASBvvHjDGzWpEHmHFW6fGRNZRMBJbqCQ8TBGpa6HeYphXo5orUwm6",
  "key20": "3do5s25KeC8kb4FEEgRAF8hSHXGJpeUTHEb9twp8FKEweKxwnVYAKHhbMHprzuVYoZmeuY7gcN5aAsRvbi79MXeZ",
  "key21": "4qSivSzSX4E1YKAh6hV7BKgDJeRdAR8enAj78jTyA9XyMEEZxhw7X3kE4Q5MmubhpZdk9o4FzEtVryXPhy4nj1UZ",
  "key22": "3nztvApyLkcqj4SoLFB8KQGZQnV2eshAMMaFphHyF8wHbwo48PMJBKfNZJUgcFh72R1qVsfk1EhhASeTAybnBgPQ",
  "key23": "5Bfd6PYTxujZ8f8Xsvk37u53RuJa6woJv4Dvww1qZaF1EYAeBFkmVZrBAP3miVXAm9SRQnoLg8Nxiun5UbUXAG9T",
  "key24": "2ipsRYYqpwsb6GDS3uisgbbt5suAdmcjm8rruscMQsNWSh5TrwKkhtNvMBXgP82YbcbPym7qoxxAxGtJMEpmogZj",
  "key25": "3sMSfwXdMbkrfa45bpAxHpAWVafcrmYw7rYPfBioTZHTGzXhC6DoNTCm5wXYP5wn8GB482BhEELtRJcJAPrKrW1d",
  "key26": "2YWCLk68dUqGTaJ1emcUTqPcU9pgpsWi4uUvHCxihd97tQyueFZM5BJbr5KBrhvSJQuTCEP4Z8V15aQmJx5ksLDU",
  "key27": "buRtshreMuaw2BBcMw9aa3X68EEBRDJDJ6bW82m5pwZaiL41sySUhNNdPFLGJ2dioYibv9D4j4XYzStmNGq2MtE"
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
