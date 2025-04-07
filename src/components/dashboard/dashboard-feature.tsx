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
    "3oZg2xzWXhdujuxNAX386e6fANsPZiVAmVTaZEJuB5Pc9iiCU4THz5uuHXcmUKNJHLFPohs4VazKjpMjCnNsoKZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8kkNmTu8WRRapSZFoEWHhhDCfzNJWuWg3QhFc94Fb3UMovWqfAXvT2teBkwquugfXuzUjgmMHg4X1FbRu6xS27",
  "key1": "3ZqkbfphDBL4RbuokJyL5PWm1i7RTyRDm7k5pDQbQ6Am5i7Cnzry9ccZApSrTFbTqW28R6FKcBqNBbvLdwWVqxcN",
  "key2": "kQrXZ9VQDvVc8QvCKWaNhG9C8ypd1kFT1GakqbDDPbwb7qMQJJ3b7byFRUtcTr2MEkNWNY5zt7DTFMRshs7YVrt",
  "key3": "523LHJTNoqMcipNV178fBxAReRYDDDuzGig8kzSvdJq9p7BqZWvchRKtRwizU26Fvh1Zdf5jGpFGf6EdgyRtpWC4",
  "key4": "hYo1gXWreTznNHiP171FJkzwN78ArwCdmy8KEkvnaqKAj6Cn2umoDRsECsJU94QZHeTfQaNAn6x1MqyvdYUHaK1",
  "key5": "4HfM2AKy4UNZpVVZkLR7PZQFixhoJh8dcRwi1ms6eNTo21XkFYMHxXZsNDu1JGWyabD7fea7JzdM1b629RSNfX9a",
  "key6": "3oTBYHfSrgZNm1hJNiRM62k88VHmTQUfRkNY5bc1g8rFL32rr2JpeN6mY8RpUHT4Wk81UST9ddoKRfvPqNr13BiN",
  "key7": "LKoFFddYU2grzVqXasor9W2PNQrDGtrRaWvVkWgFhcRfLwYzbvrspGa9VtC2jp8YmngJjWdx2yXCPbJsKYfQoVi",
  "key8": "659EGEyXMDK7ttQWGxy8zEo8jSQGX6zHzNgXErSyo8ZwquSqVFbyKv3y1rrbrgkw62fgrQtjob7JRVggSgHkVRoQ",
  "key9": "3obih6WkJ6toY4yEjrfr4Gj3NjsgaLhew8LE9atSEB19ZNsV77yEJVJcoMcgKVY4v86bEeneePQgsmadX46TLfjR",
  "key10": "JzhfqmBDgRcqqDUeoTLTpHQnm6g9re6YqrMv7FHZTQUzUPD4ngU6CVvkeSS2T4HJP38FnVcDLRrzQ51tGF6FU3p",
  "key11": "2pBkw6DSenRGFDr6RbWxsqfjQgPYpSYbau4LTpFh27FHxt3aYfSNM6JEeiH3toDVXt8nNz6mAKVGzemqWyccNpEf",
  "key12": "5VXtw52TtRwg8Gakzp24JzxzUJ6wkidr5SUHbpSmVSVpwpwrzmFJJ5vAKZbZ1pHzWL9LGSB3uYh1sEoDHhYNHdDk",
  "key13": "3hsJ8hdkKSPWmqxFvkqoXZgvCCcgVhrYzAZyPjE2WJ2vP1p1stgiVHYJPcMeVMhSku8vWZxGMQEcxqZPHHCHmW93",
  "key14": "2Up1qbqXMHdnHksAB7CungLmtJ5toFbC5CnYTVb3C9qH4mF1rgLStvWFdo86vypQZKF18k5pNgtyrt8HjZ1HWHXC",
  "key15": "t8ZCLKTwrQrMwnJCj2V7UaGejUuJRJV6aQ27d8m7yGxo2Ma91JR5DmXSqzoXZEe6UVUVTBeRUQubdEqxyy7DC8v",
  "key16": "3jmBQQCRQV9SDDij4YBCeF8whMm6Aq8Bh6v9X4a1xkqyuSNL7BTRvBTGcuf13EvgkYDZN5T1xDYbn6RmougpNUN6",
  "key17": "5LmuoHV7mPeXWV1aBV27ncXXLNBfC2HQGbZaDVkQVzjwxijcc7igzzh7XUzkUnBym7EuFFyd2QL1K54cQHsqyKSo",
  "key18": "ZnDwKQHUgW2oHrhDTVrTGZNKcyDqsaYcwsq6w3GwBaBAf92gZyrLiCS2jg9PEC2F4TFRETxm4ihueJ7SE8tXRgw",
  "key19": "577oYNWuwLHZSVQnHmEiysQBZRGx5k2WDNafn7th5TKftQ33q7HNPGE6XpoUrkYtLfEHTuEep79rcfZz4PP96mHZ",
  "key20": "eUVe61ZdRB6bpvHDveRRQTb3K6ZCRQ3fHgkrbuQgTxH7R7uBauuMaWKwjMM1eu9SB2McqXqhptCtCvP4uFguHfs",
  "key21": "3na8ikBj6kDJTatdk479kf6mdapc2pP4pihRuxMQWWGKToUBS35HXdUmVVm7wPL4PFKkjds1hVkyVoD6Zpinwkn1",
  "key22": "3fmJiqEScJPdNeiJmsVbiaeG3MpQKZZNZ4neqAmufePXBhWKj6vYiCBoNbax7QnZ6gtP5BxCo4CgGej78L6TzLK4",
  "key23": "2655Bb91unBY3iFLeNssToiUbVidPVubf9yWHoXjedX1bAX7DPp8sTxtZdJABK8xF915RVyZtxVVMBBN6EBKd9V9",
  "key24": "4ZAQjLz2SpXoXTHYDCqeCkDbaPLhMbWwiP2ZqPKeZGsunoFUfUSubtTQo8W4xQHrZ9RKfqdUnfiK5aDsH84WLVtJ",
  "key25": "3wEE7ZD2AqGFFA7ueBYPUnoUFdKjtJkKaZt9ujC1QxaJLfrETjryXvwGtYt8y5qEZzBwm6L2R7o6UuXiVu7SsXYR",
  "key26": "avtL4KBYnYRvt2AzM6BUuFyBURyyLMKwjiSHzDVUkoUsefqUgEWm7giyaMVGnHpc4PPPFLnqUdw2wMbHs3nWXkn",
  "key27": "3YZkWu4q2AgXddYs6W3hJ1S8mgXz8at7PVqmR9sga3aQNcZYsaRjQPuVdr3wzWA4W5tqofdNJDPqs4NNYyDTXTTW",
  "key28": "3kM19dgdFDFU8Tyyowxm25Sp1Vx6y5tToWafn6LdxHNTz7vHN12fZDg1USK3pSfeMzfbatCVkLvAvY4buAC7sa95",
  "key29": "41Nrcro8EF1XZrEFtKAX3xDEDXT9G9XyJyQuioPN5gx3gMNn1Wkr3hCgamrVS9xPYhxs464tEhJTh4iY6ZWr61Ga",
  "key30": "4LyqCMJCFGZf8Qmsi7CT6U2Dc4eFuDAiXBd6jYWTrLGmg3cRAejgSDugjn53pRrYgt5sPf9xPQM2hoVvqY2EedWt",
  "key31": "5nNmSUQaAWfoAz2K1NbZiowNj7VevigYzZpSJqYyBeJMPbGZL5zWHD4Xh9M754SKL5shChyTFvKnKzgQYgs5dFn4",
  "key32": "mEJ3bU6yiXhwQeqqSKAuyNJvjotc9yTE3iY6bBRW5Kc8cEnhyaVKjqt9DNmLKspnMupWejKcsGCw26pqWzcrMVV",
  "key33": "Whaak3UrhtAD2GjFTWaRdxizcwSBHbkyppVfnm6pw8Y4wtemUK39zmD79SNW8wcDVxuzpBwGo68U1z8qA8fE8h7",
  "key34": "4wgVNj2DpNRd1ykUftcM7fJ7TtPmsKuQv6KVTL35oWwa2MBeBMioeBYCRDsa5uzdeBqvPaNob7wwrN4GeMMtHPtJ",
  "key35": "3EX3YVQVF79x7BbZWcWwvNGUnHrNTu5Z8FDYRobghPPLVUN4pR3MfaZ93isyyj9YbaqU6PWyV8ySZ93D8mxyJPQ7",
  "key36": "2cnUtw3TTLJzT6agfFoked4ZzKDTyDs9JCgxpfjDsgipRMsb1UxKphK3fyThFM826am9jNa5SFBKnLziM2AMKXDP",
  "key37": "m5nQ1QBifBv4EosUF8pBabs7H8SrVFJHGszPBeeeZWDpFgUPdraXgqnUw3MYaHLUB34BfZQon75vZDudsjhodkp",
  "key38": "5D1WTRYSmnrk2rFahrxQcnZLt78PSzUqiNFGLAPQQB73ZYqbnKiH7trz4fFzLCBmUe9LbsSxaGw4brGjX7dhNcBt",
  "key39": "5NCFzKTF58d4RpVNAmsCxDK3UvcwWajUJyaj7qMm7jZDzU2DSHPvDuCzibYN6K5P3ar4ci3ddrP5XQ1pTWwR5oZe"
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
