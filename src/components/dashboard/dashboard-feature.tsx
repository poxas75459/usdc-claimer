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
    "5MdawYVKCcT1JTcQy8FMAgozokzM62toJoUHSC9pxTWFvTf4EHBKHJDf8nfsTnAWnA1NGxx7jnRUDZ4uarnfw9Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6e3vvQLkycLGRZZzw1UC78aeqvJftdKdYGNMFewh4PwtK3KWMXbBR3KM5wPHrkbmxjokhewAAmy1Nn2aQKZDoL",
  "key1": "3xydemAYzdBPFsetkgcd1UuEyNmYhb9mgjnTaNd1QWystzLsHgnvdDkCBmSQQGTACmzXBXADYyhz1wjHqHnMwqYm",
  "key2": "4PdYzAHJHJNb4rS76p23Q9Ph9DPMTH2Ux8Eymc3oLr7LBqQDNzDYT9oVppny6xgMZTiJ19JWodgm6tKCbB7L3y6r",
  "key3": "DYPA2tPVBxQZrXRvnX5tz3qFXKEjPPbTMurQ7DV1BBwg8h11VPAiVsainv5h86b7JAR8tuKHB1CXTh2hzGKzphy",
  "key4": "5h4qUeVrMKdhejAQhQwuBDd6dyVHV6N78Fpova2ZZ17uoF8W9xetoene7aQS1s7FkEJB3qb4iQBkFtiVi5Jfn1q7",
  "key5": "3zU4PYF7VkVwYd1fNQj4BRnz6Zh5CqEV8uGiQYsaEAv6nXoXXonTEfavvsY4D6hjHm7EgLgBUCusjHDivWMejw1f",
  "key6": "31Gke6gTd3NPa9DTV7nCfXLwGX7X4kBYzbKxZdzkPERPL6H41R6dRVQS5uZvR5n1KJuunmLmSXVxfSTnWhTg2Ssx",
  "key7": "2gM9g1mAzL5yrFzTKtTxmQWGdG9Qc4g2M2atZgQVSGrCkfnS7oVwSbGBhEFq3FWRcgom3k71bYaX7kUXH4gEJtba",
  "key8": "2AVAKpSiWL3TMJ1m9pdg87nKXxTekREWKDkQha3f4TSSyYMFgwd9wEd6DxmB6wRE2i3351Mwb3a3DpT3HbWAERz1",
  "key9": "4KYbkJFzWveoABz5tM1cpFeCQ718vgvMkqvHCyAbJGyFjjtyYPK2SbgPVYFzhEnvCpkWEkLHrpQC29DFd2cg7VWE",
  "key10": "5V9gxjyXHEC7YXQD1aw57UpJa9oyHarD6CmC1BhGiyi32BYkE5be5SHNvCHSmNs1T24HiZkwxmSMBMN4e51Ty2Sq",
  "key11": "wjATLAeqrE9H9aAwmpDpAyo2ZbvnFMDPoVBBaMEWAqsXdZ5Rrkmqz7PQwfpefFEDico8cdrwhdT73Zgqm2QPRS3",
  "key12": "5H6vJUhHJAsNpMW4wqpNx89vo6hSwzzVVP2geHz1C9bzi2GXuTBh6gBtv9wVhVkoYZkH5xiNHsXnFucinEkMf2PZ",
  "key13": "3XUh7PshMKjMrDNoZKTSt999ry992GBwAVLCkHsFUAcpPiD1AdXHbpWJv4w4kDf2ySG1PQAGZumFJZWSNYbHDxY6",
  "key14": "37S2UqgWZyYtYskbB9XFDbPYcBWiZS1LpbfioD6pkh8XFCUf9oNMa7h2M47YcQfQEz9JesqyH86Q27wAKwGypfKx",
  "key15": "4C6Ed8wJxKDzHRUV8iHC4MaK5g1dws34oeyHBWBYU7Tib2HSAeBZ22gJBUgb64x873s4aKDCKJqu9C8C1gkWdP9L",
  "key16": "5eTzb7XqgMsUa5ZdZdGLR41q6BUJge9Nji8XshAgUnCCfQhUfZrX3nbz64AFkEUYHnnRSkNLeVbtpjaYx9NLWixo",
  "key17": "5FdCPLS3hVQgsjT6mmp6BK8NcpvTe17xY3vo95yESsDxmwam99DcauoooZGm7uSQwUTazDvKLSQqDx7aqD4vXap2",
  "key18": "4JEHJS7g8z22CmdnEtZ3aToKpEgKYDgBhtsAwvNj23WBAG8g45xiHtBpUJL6nHvXKxRRurh6kNPnLsGEVvut3cPj",
  "key19": "ajbN3oLytmZD8byW1ok1GUGEHVCiDPrzpx6dbJnk8L12UD8BgE3mbVAoid8xyNvsj2A3C3AW93nyFqKS22SWusB",
  "key20": "zoz81LNY3yt7bu7GxqHLhB5T6EqXewTHbHsFwSZALoPutX1zPgAU3n6STQUz7sJ3Rww5iFwjpwHs7a5YfYGtgYJ",
  "key21": "4Y57Z8YHWAZaFz5jVXyfcFnpDnjhMApZjLdyqteLREoSXvwUC7Yv9hWKAsDPA7E52QaMLvVH9PaHjXLpXv8BGMnD",
  "key22": "85tRiAmSYj5cwdQ7KRK2QKa9a3FuXq5fz2TZzuhcxCMkXmTzh66wnTF6kCyKYmJa8FiGXew6eAF7RHX7XP7BC8h",
  "key23": "48wY21gohMEWLVj5yBv1DHHytEfYRJyvvFbdjRZ9GjZVfXYLz8Dyua4mNFugpCrEpWdc7yJg43Mzw9YnbR1yDH7w",
  "key24": "3NXbpqnne76CoPiZUAmroMHNj4n7TocDpvQ9y6TmfJPdiGxiaskSdAKLieK5LHhhHoVEbZ1MbvY42YPyShNZfjdt",
  "key25": "Uk1Ns2iN9CUXfrqCjTHwFwVCyb6kUVuJmeb3dDFxBD6zU2ZxrHa9MkomYxnGDmNaDdaPbAtwGaoqYgffCgvgkUL",
  "key26": "aVb1BfbJk2rCmSHQtucJhtvkLi1jhGgUb6kjbL1abXrKzv3NNc7VzoMubRA22hk5SKR941XsecuKBBYr4HVTCLP",
  "key27": "SJmSbrrogKGEFLQ57QNGHBiBDoQG2mnVQqEZxz6cbptr8AQ6b29yAnKXneQ6TWt35eL1eQbuQLEEZgWfqA1uyHz",
  "key28": "3LDyLzhcRWGCMMDTgNnABpyohWFUw81UMUaWNU2TJMTKZvwXnCvBp4brVoPxS2WnQZswonvJ9uXnYStrpSYCmP1w",
  "key29": "3G19mEADrSo6PZcgtKbJ9ijDG3K3Y73HJxEnjjphxoiFiomwZbgd99e3zpmFpDCNFGTBCyv3gmNnA1qBHe13Rooq",
  "key30": "4oqnDhtGaC9dRs1EYEfGEE2dTCVBVNak84A9BF6ZYuWgnpJ6qRTfbefHCDmzb4KPKFJkC6cCU6ABGquTftVx1M3J",
  "key31": "3JQXJfr9ixuTf1hsPsWChZcK4At2frty3t3JpTN2RMDVDoMs9nwL5BKRbp7eRsXk6zEwyMAL2HkziMcumTfqWhLb",
  "key32": "5Yf5t1jvwSHtJWupaKJbrkeU8i3vTjLQsJYvfAg4jFzZGhAHuZEgTQKqPGcp2YSfRBTckFgBGh62pAWKC9FQbejR",
  "key33": "2AZYbAUQMWCBxBFHzodstg12FcW1CCdt5CXojAxEYSvoxw73SiZrs1HqLXe7s3iFm6y5Sh4eVAbvoJopJtw8ns4m",
  "key34": "L1MEeKkxMPecbpxWxFC3qDy8DeZoAVbD3oMdvRsDvvwWV5qgWqQ7u1VgMtrusVnzPsjCxB6mNk7u2xCPBZQNYdr",
  "key35": "5oyBosBh2P1Lj7JCae6UgR3u7nybSpog86h9dBYiJsBg17ePjVGTTj3mREZa79EL6N4JHR9SpetawKCGa5MwS1ZJ",
  "key36": "2WMN47bzehhwHSoxb9xV2YSdNxX2qMZ4a3NGwWw7xW54fceJCJARMGpby31wXEBiPk3LmqBQvMKduomS7QurvC88",
  "key37": "2XBtXHzNvzFAS3kLn3JkTim6dNm4kizQEuyYqeKwCfq8YR5LgNLpHZGxypHTnD5wFeJNQWaKj2khPv4LjuxHj6Yk",
  "key38": "23xXmvPj8rP7wYjWGNMMx1RQQpYBZRSteoQ87ZAG1LaW7WSyouZgmEtmu3n19QLM77eABvXAzTeb7NfuaqqnDvd6",
  "key39": "9azA1rack3VfXDuUVZWt3VStY3KkNpjwR38qYZq4a9vj2ABDeuf1GPQCrgDbL3AUuYq1FgBKTWzUSjpYLmweR7G",
  "key40": "5uCoY7ijYZWXfSyri1yqrS6xutjxTtcfzvQ51Ckat78635Si9gZyg3cSL9bohAVtqQ2syEmMszG3N65exf5emNTN"
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
