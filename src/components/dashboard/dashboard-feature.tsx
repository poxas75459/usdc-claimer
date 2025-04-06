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
    "33S1pWBcEnvy7e764G7GgsJNm3nDigaKFQnJaHQGyQkvenbFV3GEApTS5ayN9N2Gh4Pb2jMVTYGWG9tfr78XenuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FCoDV8zJAGubbzmB6ci8EnbCqFjQfDjQRuNrzd5efUArxbgeXfjZjJFchVbWiKjZTbLmXPtYjtgSVWRTkS1mMiW",
  "key1": "4m4Rs8VspzemN3B8bJQaoB39fzMnXqfqEEu8xWnW6qoX2ydNunSP8Xzt8WdgdiAHephrUNofihXkN9BXoQWVf2Wa",
  "key2": "2pojqiSLUnCysVjx8xC29H9Mrcp1pimcK1VpSiqB9oKTeHtHCXBrUuPqn8sFfqRZEKRwVJqJEg58SUkFoGmhEJpG",
  "key3": "62o9esosTiKrSfVhDvkiyohpunqz9Q8PPypKVybc5EWSNUZccoH3omujNvVjQdgPzqmdfsxR1u5NNqYVV5hhysLe",
  "key4": "5ubFHpTtwJRxJvBN4qLy64xxX5CaAuC3gKNBDx6e1eN8a3ABx1oefXazbBQBJWtpFDAgDQziU3v2SNEaMB9a8Ugx",
  "key5": "7HBxX9rq6xMzUYxVeDV8ZBCJG2jWPHXuuSf29CVLJusKBs8LxbihGqjrXyWviw5NBvyKqYuNWcKZrRx3Ae2L19G",
  "key6": "4p83isxWy4NUWjf7T7MABgiCEhvXh73zTvKwS7k3m35bJgHfdfFU6pNriNU6GbZvoZ5Cec28fB5EBHzBcAH4yBm1",
  "key7": "4jHzzmQsPPsNJXMdC4szQ7DSNZZ8Y8cwbE7Liwdtqkjq2yXjxgMQFzUwtGZweRu5q9XFKQj6Nwup8VTweGFAbEwT",
  "key8": "5kcuQZGg9gyAKz7a1kAgb9CdjadqNfQZ6SDAkbANKMfi7H13Zcp1WzYvLEH2gFYPT7ANC7FTDWm7gBF2QquUw4sJ",
  "key9": "VzbLs8qkbAkNkWeFCUwnzrnQcFyogeZo5uW5SLVkTrraYBVCKuTNADmNsz1S5wAfAwndjHLJ8mnaf1RvjYKKnYc",
  "key10": "4tvcNiT4LQK59vyKG5SeMTU9TxQeMcxsyptoNLtHTFNv7aAA6rtfE4LJwLvCGDTUZJqhRFa9cE9M3XmaHvPDVK4M",
  "key11": "57aqEx19fuUrmciP1QHGtb7qJEmZoRvSj3erobXAbZ1y1C2uNhUpGyEUjtgNJ1bNAY8kGwLUjjZ84vGf82xDvytz",
  "key12": "3o3EfuPMwmjMkM5CYaXhR8iP7Y3DePa2gMyEtdA2CfLqA15yhTJ5f9PMtH21iYCqBcDpyqdjLNX6XuYCjpAq5FB",
  "key13": "9A3ciYEmGrDjhAvDGdpbfSw1pAX5StsgDSnNwJpPDEhMx4vFKoPQhKmmjmYfGQnK8YiAAKUoyCfmuQpZ7UsauNR",
  "key14": "5jrBr5XevyvPMBB9bawExLidCuF3e3vdep4LBs2v4pAtfPGoU5pv6zCqNFemwaAkqduawAPz5NexSTTehoPz5uqu",
  "key15": "5orDyQA2ongmuMsBNASGKPb82UC7Y3mgVHuWZJFXPKXA7mXWrdH38iBBSEFTchnMrgyQiRpYxFiztu96yXawAHQ4",
  "key16": "UC5opduJuYK74uHPDRzzD1vNJLgZZZerPNXFMqhiUdz5e2Y4S6dWPzxDWLCMZuymt1pgTaGrJbBC7F5oBtkKZRi",
  "key17": "32bHAdTaFpmFMF6j7M3EVwJEa2AkzVcksKJnpCdkWP3vPtvrMe86GK3ZcbyHdgaZYwPmVDLGfKqov1hUteSfShJR",
  "key18": "rwRuoxZzAnY2qjRAcuE8p2vKwbhuvazEame3uLJNG8v6CZz9D36EMdEDUSuFvreZybPSxkXRTuVQebbJSEz3cCE",
  "key19": "xLYXfu33Pwkp1TKgoc5S2r92NVNJ4rTtuuAezTfdW29owUem8YZeXHgM6N3AEFYsyu2FnJsQAQXewghRnBfYRs8",
  "key20": "5eYfHPBsTatZDyg7WKCwRWe1NWj1KwMxtwdZKj7nZjpdQd4WSRP57u9Q4kui3xru5SP66qBgNd7wHeXNW5pHNiK4",
  "key21": "4p5hX4tXwggV31NeWuTqgh5rNtvYMH36xay3HKSzkkVijDDwZTWEGarim69XyyaMmhYhW6jSwg4kenpgXHEuq5cV",
  "key22": "5HVgNZNyjQCU15MirWDDrwJCWorUWgq4oj8mgSV94WM1mnmt9DcuoK8vqk2TaAvigZfd4s9nq555mVavr8oXot5Z",
  "key23": "2xLxvWNhKXjK3gpuUCnYpJ8BVxbPpJYyyEtnNAZT4PtAdjb2X6ERZ9sKv2m364wPfA6xo2XrTAAzVP5ycApxWgL5",
  "key24": "2n79N8fjUQhwLyqh3dLkbDXNteFBtR1QtyPCXpLYGaXmxynLBUJMpijeQMTDqYUwAqX3jsubegFE9QWr6k8WzjfU",
  "key25": "2JJCPxNk6ykAxMGFKSU1y475EzCxxNoEt5T8Pb8C3u3ciw921bvjfYyzxbj2WgtvNPjAU6YcoRuTMa6rEor3EqGn",
  "key26": "fAqeQwwWABgQUMLthwBu5Bo4XaHRVex8XLgj48rqQRiyvqEe5sdzHF6riowGVEsvVchKt4zwdzpAm6THuyRtwXC"
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
