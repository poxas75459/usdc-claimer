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
    "4pukDnHHsGv3twAFf1XY8bs1ZPCAdD39bmR7T4svCmqZNYnkKXzaGtRdR13bakP8Yja6kRSH5QbjXgY3MtaQqBw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xr6x2gdo5oRZ8qk4sRM7orSCQD78Smzi78Du7nTYKpuqCM1UtUrbXtGFBg8JZtTXp1Z2V1ivQQc1vtdKd3GMto8",
  "key1": "3w3zpEEW3BoZxWpXyhpyWXyvc7W1Hd8aXLAZUSRgx8KAXVBEvAD2zHvoycTiYQKeuwcuVgyhmKt8iQQKsnTdRxaU",
  "key2": "zUxvSXcK2zhrQ9fDc6XCtH2MPQMYmWxKcVXR6egL5M66xGndbH2EDcqpPMQyYr9KV9FySJX8wPqXtp3DUJ9vV5w",
  "key3": "4DqivWCsaG6Y7UgEHwREubt5LtYSkhAgwHUgC6WxR7nV2WAtn9d7ZVjnDx81VhKLs5Pc78PKXNihUB861YY9nrX8",
  "key4": "2m56XoQ7LQpsGV2q5w22PHEyjUfmSxn3h9FBu1HsKYxTtmX861UCTToMRmMCxeW2wDh7pKPe517s6mQhnm26hZ46",
  "key5": "4wuVwcmURm683tGz7HEAFZ2phQApL7ERvyqVwjAFnhRSLGz3ZZffhU6oHzpSpsChYXF7hWe1hMWTss7AHRCo64ZS",
  "key6": "4RWqavCEALGKAmNmCBAjrimBnkwLm6ZqrbhThBUFQFG3q8nLBpkZkoXgS18FFuccUA1XgKWBx3cT3FawAeo2nZH9",
  "key7": "57fFkky2cphpZXmUjamPTa3gc9VXUQPLK7k4ouCCN5ivMQQv5fZ5aiLm6AWzTPHZ5mtFxsLRU75yhS3DPg7evHJH",
  "key8": "2Eur6B8FnaszwCTCn4Wyawhpuch3r8tp4fnznW9qnoXxkANGpXWRLqXMRnM6KTsGMpTJvuCwNEWKpLg5Y2GXn7qu",
  "key9": "4B1EDzXCQ6KHFpJjKssXaYDErwezaSV5eiM8BUZ23CEJ8Wtk6srAPS4eQer2ruarkcsVffz5YUFqPdoHweoLzJuL",
  "key10": "4RBVG3ye1xstWXZWoLfTNz5ve3fyDS7HGdojE8zGaMp1Ydq3ijkQJnNTxkD418RZpaQ3NPmGZ1HQefdLpsN9T7Z5",
  "key11": "b7C8zbsiL6LC9E7PSLGgNKvWDQeD3hkoopKR6AnwCTWqAB4x9pMPLZoMAevFQ4PYJcfNhR2fof69yNV1f3fXEpc",
  "key12": "3Nn7MxGvmNYf1PRmSrtqL7Hg8PoDy8Q1GB8LGgSm9aTAGvjriwY24bRH6JyPBzVJQPdTk7J7wpDvVeNJPjMPWciM",
  "key13": "3Bmo2bzzy1vFwxwhJvJHbeFsMbCaJ4TSvUTCda93nffXNU2TgGdtopjajU9jgVht9RBUWHATFHQUpKB4m6tNsorH",
  "key14": "5WB3PJEuHcJFhgg8eQeMJiB8yQeYu6o2bN46VzQB2njbVNgq7UL1H1FvhvvYpn9cdBe4Hooi1mqGgyLhAZU9FqtD",
  "key15": "2LwPfoxRNLSSquG9RiAvFoPQ6Q6kmAoFf9TFCqmHvqn99RBdYYdGVkmdDs1NyGvUmGvr2XR3tmDChn2wAexeEt6R",
  "key16": "3CxZ3HvNbRZEbthjiZk1M8LnrorXtRv6H3rpVQ31kQFuVYgYJ3iZdGoEG2uXV43inzgGqC5eu3jTMYhWUHkNE6Zt",
  "key17": "5RyGjHry7BMXneiU5XLH5rnySS6AnxZszYjRt86cmANaBtfoPakRDivknc47YbYiezAXgcdxoxYwVwzbzMXQChxL",
  "key18": "4bW2GvdDhuKVeePxfB3JxX519hUU53RdsvwTJg7UMf2gfrvEYiXcwwdUviD3o2AXSxWfZ6or4Q43muphxVxQnd6Y",
  "key19": "3JkZ6E2Hb4aDmJXRWDHmaLm9NxFhRJk9fPkdzGYtj5sQPDaAo79jRbKNpFXTVytGx1Cu2RbN8xMHebjjkznhRXmK",
  "key20": "4PpGZi7ajt8icPoHzHt8Qv3Xsn2gpkfNVn1FicJch2kfjdjWKEMffwxG77WjqyP4bag3payGU4GqU7WbE6GFwwZD",
  "key21": "2YvyAW3tMKYiakEQuRVsq8gB9i2ZgZMarhe94CgCgjcaKdZBg6xDww285UKNWvRzsb7Rv9iLUYaKZUvqFy7BBUa7",
  "key22": "3D6bxupMGDdixAg74DENWy5siLBMWvVE5vAdU3csmh3Kb1Mf9suTvrDRKJAYEEsShrxvt3qqHkyCwSypsLu5QyhX",
  "key23": "4k1DX9nMpmNeuinLqiRow1Sq1w3KNiQXHAsxE955geiH28MdfJyQzLFMxT7fDfP8wDbCMgxtqS6KyBePZMeMhBKY",
  "key24": "3yaXcXmVMkNKu8BVJBcMX6eMaWLaKhFLpphmA12mX17gFCgW3LNJkCLZ3WUUggNJHfmwQtSU6NYUproSjSnnEjfp",
  "key25": "irENx1wTxa3Hwjm9GaU2jNx2Pc2Dk1jga1nXhcz8dzTPszzh4RnVnuTSGqEx6aWhdkBJtDRe7kJpofuz7yGcz9B",
  "key26": "5zQ2EDiV3tiFg4cHonASKQksM6bY9ewuM1d63KK2ApJpQit9k39tFyBvnKAQTZ6PRQKTwkHq4nqNUgzMiqc59Jy4",
  "key27": "5M6oyhjKphnLBkJTvugcB7dECtZWVkYUGuwRKBKjkAfH6TXk5D4bSniZZErsGdn9mtwggWpH5J1XLbAMmX2Na3cm"
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
