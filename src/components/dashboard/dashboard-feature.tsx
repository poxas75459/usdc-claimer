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
    "2QNSwCDrLYWRYS5jm9Erz7dMRJ6mACoENQBfVhFoPQjwuBTq4D6mLckM7ih9L5kJcygHeQYJpC73bNyZjUgCtrR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2weqoj1jcJZyjJQe1x5HNAgNNfoNMTf8UGFmd74tQAkYduKmFS7eEXbfN5L7VjrDBdmsQ5hFMYqntKfXtrDox5ut",
  "key1": "3W1LGT9xmxYkQJT7j6KmAhB4aUseHpBQaUoQvAjy4rC6yGoZz6bN93iqqutyuXnN1gxpj8hA7xkwE3HR84N7zfmB",
  "key2": "71qygmqBqHRbKPom2aLqiDgQXhnvpGXYsAESwERgVmWCmznFzq3XCFr7matmZpFYd2vy8xoNMhzpMgTW1kRhQy4",
  "key3": "5Fw2DcPNQqEsAtvmLSaymhHhmiJHNASHoxuhQDQbFiyzxJnRf8UZGNttLVhXR46Rve3g7DnFhsw5Fjb4cgiKZCBC",
  "key4": "34LV2wyz2pmtMaaTf1oanqYsL1NDPf1En5aoJNHWHWf6zSzQ5AezvhNjRr9vvR69w6hvbB97twMYdHh4sv67HD8W",
  "key5": "2ZujTpvLUAdvwAoapzkEngTS3FwCmYvUHr9r5YNENb1x17WiD4oSSsnGNqeJtxR2tDzNHk5L9jAumhNHNL64xP3h",
  "key6": "QWEcKvDnwtcsr3WuNNM2wn1ghM4F7K1mHWXHMtqU5ineJkJf6jH1rH9GbxBLVrsSiD5G7mxH2PV64CuFSLVYpNv",
  "key7": "5fZ7SuwYgbi8hS2ipqnH5KMk5o9JY4KBQ69yPFf5k4tvfn1jWG7NsUHtzZLkM9APeZvRNX4kLggc7ndHa3JJKp5f",
  "key8": "m28ttPP5dDFadtPZU4iY6meGVcWx9YC58UrzxZcWG7TLFpBoSyU5hjpgc8NMyQ8i3o1W4p7JaA5fAQ7xVvYGqrv",
  "key9": "xmTq8bwMG4MMKnkusPUx5okm3cWVaXtvFWuKHSva2PT5PcGvFZhHst5G63M9yw5pKJH6JXfCUM9qQyoZEtDQqgd",
  "key10": "2wHcqY2Lbno5oDmRctLQ32QGRxuDL3ZxCrRi7JQvjsXJc5fK8NsMfG8iAH6njNgZjenz8Vc8XCi2vhQYFtRaXhEH",
  "key11": "5vYiHL7iQCofFjxQVRJznrZjUMtqWqyMWo8UYQw9Y98U6z35sZFD3J7LZHozR9Y8JWXaR4qn73WHhesJ2g7tEpfo",
  "key12": "4J5gK9ExyaLRmnt3S7PPsR2XVUnL4LSQy1W7Cb9HbkboGmM8mt74kJgRcrtNW34Ne3AzzrJQTtsGp87XV8DKYArd",
  "key13": "HJSkcXCCGQ2S3koHUsALzQjcxEcsUCj1nSTUexBSRQXiKvf1J7HEs6ycPJHEqZNfLmaoMTFuGNF3dt6uspMotFS",
  "key14": "55qnBSrGrz8GLCRCXGdMab41hUFvBdDN9cX3gbAYyb3mpx2DebgXCsLFkxshj4FAQNhAvghcgaDCEHL6pHa9FKGR",
  "key15": "3dkP7D7FqLnm3xP6vyswF2R2L5igZmAdQMy7bMuWofSA8As2oDdunbyyqaut3mVaT5XV2ybiU3AYydgPzbE71t84",
  "key16": "4GidmuejRfuMuutUnnkMQF4Aj65yRgRWPMcw7hrG5ior9AmDeHSgxzHSatZfRyCzE2pCaefRaqFpCJAHxwmVbpCw",
  "key17": "3dVjyeEqRDQCcMNtJKTeoFd8UCNaNYMq8F7i7NadQk9evfUcuSnY5tAuAx28DgLogQWAhPYkv2rQtVuAuPNqndJq",
  "key18": "3s9hGY2r2fcYKwcaiwtcsLKkvK8vYFwbNbUbG26WtKAhKX6iYkUYdsUFmDnkubzJ7bbdN2uPKoaVkGoHVKZhzTky",
  "key19": "67PqomSDArC1a9ctJmMAL188QdK2sbEfamWncujdDZB9PzAoyxkqZjXP2nXHGU7LzV62TVe9Du5NspzwGVLhTvCB",
  "key20": "5YHuesxHXhUf4VG6ygBSVK6DXsXMCT2LfC6NbTXoY3M2rX6YJucUvuKnbr6UWyofWqtkseQtcfsT2jjuYvcza5eb",
  "key21": "p7mKQnCSnd15NFuet8hxnB9qWDVoPxrwY7Vavbx7gcJJcCXAJ1EKGF4dhyEup4gQNPCQ7bDBvpuvjUFVgz6qy8n",
  "key22": "5KEuu4NUV1w1SRckNzi8KWKrc759xRRxQpSZXgfeiNm1PVV8fe9bquWKGyyj29K6f1upmFYw9hjTpVhxDtMkrjvR",
  "key23": "2DtTXBpXWZUWyamWWDrz287pEq5ERpxPn8c7n35titdoHDjCi1dTr9RUnzm5EBXTpRAc9V9RQ8mcuUnJ6QwuCQkv",
  "key24": "34Eou3WChUWXbSLaTCw9MM1GS8QJxhR5xL3eLsJaVzBKzaFLjwcbXA5Z8SBeYFSPP2aT1EZLkK3tcTRB51UyPkJD",
  "key25": "2xj6m5ibe4QhxuZQmoZ3ZESRGogKvP3Cew1zc4UbJkZJp7DJuVLXH6LTmtpYUt6WDTJqdPpDsH8YW9WYJFJv85RJ",
  "key26": "67Yv6rmFd9ueinwjp8pQoUAamV1psqmSJTi4THbBunp7A6PmtyWp9xzQAKXbyMEqeiKD7mAQvyggMqkobfeV3kjg",
  "key27": "5YiKkjahsnfP9PRmZSCQCRgnt3JvbSdxpd1SiiFeLNxUfzXzQdXvVAZPLdkJxWig9QLfGkpn1Fo2Wsak1jxQZF4r",
  "key28": "3odHi4eVh5xRwd8n7VkFnqCV9R7fudGa2ZQcrkiNke6RQt9J1yZ3YeryPXRsb8k6EnWAxaogsP2uVAuUBMxv24Br",
  "key29": "4SJythAfUibXDd5Axjxh9nCPZ2fEGPKRLqvqcCfFeXFxW5qtJQ4RSYC7fqihhf9JktVRkL4cy8wYRRV1LPjRsnqU",
  "key30": "3yaMttKnXXTAU8xh8vRZrjRm8tpgEJDsomFuf6ACFiGwBW5ACjF6nTnMeU6SFwpWoFLxgLWLbjmYjx1DECLW1U8J",
  "key31": "2k1MZjKYBDfDjaS1LxhGKBJH7TMzZPgF9DQ4p6LwFdHWiC93BQC2odCbg1fwX2FsfZBTicmV5Ch5L8Jc1sbzQwLs",
  "key32": "4wDiSrnWrenPT97pBWnDu3bt7ddEjYD2E1vrcp1QWmkqZ2S44nqb57ZEakWikqvHihqitKxnQrMGkNjNnPrwA7sj",
  "key33": "dLLKeYaUWa1GjKS91rV3vYEztYuhNdfTiNhU7ry1zxnpeBM4Rq4dZUWubxVmgnqKghuS58Jtx6H7DbwGPhcLSw6",
  "key34": "4N75wrP5KzzDgtQvVWfSYg6qViKKrXna5yQ7YSufYHnZWUpTew8r7rdMVSg7M5n3wuzTsgpX1n1yM5aVHpscbmAb",
  "key35": "314wD2GU7nkyDDMbZ9VFvfZaUFQ5NjJBRugisGWVB7oArkkZXZcGWT1bv5vWTXtXEpHotrFKWp2DGLX4naMSnmA",
  "key36": "5V9EEZuMHMZzbvXDJSyGCR9YMUuRfaL9SBJhe24HLUhSCz6gUKkbN5mY7oSxSrjm9XYTb3K4BKp2DNSxzTbuSnzV",
  "key37": "ctbVUoyQSHUsShk9agt63EvswcF5WuJiVpE24Lkr24vAFb9uhe8UTceUH8XkYfkQrJwkUCbr1kNwe17oe9Z8aX7"
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
