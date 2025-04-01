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
    "3z4yue4PD6mEwyFwa6y8D7gVZsNAmw5eYYyov4McJfNLZEjAM8jW7khjxgLq99PEB6rp3zqnWsNE3o3GmTkky8UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Svoi5FgZaCrPGwLCau54r4tjFvH6vLNHdF5y21z2Smm3zhYLrztCFoBnN1jVz8Sqpc9e41yS9tGRiXBAFgAdYis",
  "key1": "3ep7W4KRw3eogY2o3c5MrEzsyKA3Hjewivp5zZ4PkYufv794mVHkn4vsUFiXtXZu4Tm3FQdHeGhsjpcyeXCU1KnV",
  "key2": "3UCoL3zsPd3v9e7MHDrbY2eBe5r2N75Jo7rKazqMZVnk8HFgkjfPXeBy6JkE5RX3nTfgTVASLmJ1YRsmwmDu1mLU",
  "key3": "3Kec5Svgr7yQ84FLZ8SRUxPci8LiYJkr1nG2ycKm48TxsYnxQSjPgmAkEoyaXDpts7ovt2t8Gw15Nwzd3kUaHXmj",
  "key4": "MiWKrkaEJfSJVzEvSG468bZ4CbDZahGXsKFmPb8f5MEJBHkMY6zuVJQwmmLwNFTMBDgVfYP9M1H5JWhBSqVXRd5",
  "key5": "1TXf7nqr3RK24HWJTuzhsMpBXJ357q47q7hyWqNXFAnV4kq6z5ZEBNSiTrS2LqWGUjpgQsaeqVVLZmZtZmdb1y2",
  "key6": "46iZeRk4KBtZieuZmSvnPfEHsVAhEKgA5aZpTMnsuoJKuNtvR524NgdJvGonmpJr2mvT3pNCXaLne9zGWFGPaA78",
  "key7": "3eXW6i3PHPaZwre3UNokAkAqBrSCecYgmftzk5eepNS51xpJEZofH9vvXLA3uxHjrdodP89ujMVoPynSjX4xCiWm",
  "key8": "5KQXQc5tkkFQpm5ogndGTmWHeqjP8nB6bdgwwNyUEeuXq1K2hyDWpFCE6p3UQqy3j4orKhtPbi6CUi695ua18DVH",
  "key9": "3sRSrC2LCviF76fLJS616wsg6NXLrDk8PJk33sugyKDK7Czrm2BqnsXVzMu76RfP7uqUVa3CwoNJ6nBnB8er8VD",
  "key10": "zW7HzsHmKwuoBUZ6TELfDmjmk34u17ZYZtowhjUSEjG28f38APydLTevwwaPhpvzdQiY4PxHUJvsosL2bddkpCA",
  "key11": "333xfiXur9CogKcHwnbbyaYk7VAiPV56HBQSUXH6NK5ZCQDRepN5nAmQFGEph657eqct6GsY3Zq5CyTY2rEdD24g",
  "key12": "38VD5xp8Ar11iCVf8GwvBMkHR5b7MMyg1cwzdd4Va8BD5PFyf1ZxbxoWRzZH9k16EHzfVwCqN1Jnxfnj5uK6wd5J",
  "key13": "BUU2Qnnwg9CvzZH9YaeRiLE8qrfrEYq5fNhbqjAZBvwK473kHkUE7hGFtmrkYm1BehB2P5uPgeNXC1qnrwHnJps",
  "key14": "5vDAngH5ENduYFkQrWGHusdAQWSb6cZue9vPXx9A4qNwTJNmH9cPbAci43qzZJW2kCZLn1GtNLXLZ5HUFpkF3BWT",
  "key15": "61vjq92L2XrCcvygHiU2U7uHmESatH7Rg6eciaPuYz3UA6z7zp9xYEpmMDcX6rQNjPKRaW89pWzryzDNNHTt4WgU",
  "key16": "5GiF6Q9QPA6qUZW79P8VkL4Ep8DgQ7Jn1FKTzAwHJ5M3PU3RfMDMXKijriBFSWRnkFY5dJ8L7BKGeJJZCEvXwG4k",
  "key17": "5ugSMJPSx7xf5UQ9x2qF94MDmGjgNyecy7pNGKw2uCY3MLTt3wsYih2zeEfedCNeZjyFmq6jEF8iTWDstvNzBXNy",
  "key18": "2EqJtTBt2cv3yMsXqCw97XC6ZgAG6Xpq8rjqnB59k1UB8wDdVg9T5JJ8bxnVPEcXmZggAKA5YrtYC1m62VJUSgSj",
  "key19": "27SpEDarGvsrNpV1SKvkUz35tsqTCHH4Q5nRMXgAazK4wNw5eqvzQEmvGcU2ij7ZQhnEV1AG2Ar49jWFv437bJj4",
  "key20": "oqqs5DyGrLv2YQXkK2aFZWoLJfr9xZz39PN16aDM6Z53La7TSLcEohimteh4Yhico5MoQGau4ZdMjsvKtTZ4cvJ",
  "key21": "2SE5CiDMfrsAq6pmGkjBPVPZ5SZXHSkkb6tryhhgSgVTm9umW2UtqRh92iWtnX8pA7c7Y7CKWbDM2MVT86jtwJs9",
  "key22": "3kVHQs6ix56bYhMchGC6BYZaXVamnrB53sHNAH1EyDMQsRFwtsZrrUWm5ffZ3SUyBg3TZre3UxVozC8spQHMLeA1",
  "key23": "42uRCBTE5dBqZNSqgGu8fRiS8KvfUzZ1t5wBvZLVzvkNAiKwUijWjg2YTdoTuKRLF4JMbnXwW6yyprGbCUjzMGqC",
  "key24": "KebceL8VinzUTxXNxtTxZLYmJyM5xUA1rqdH3RjdRL6u1JSXAPzcjQ9mywfG9U3NV8JxsmrtsVKhjwcJwsEyNj1",
  "key25": "5QJ2vAfx9jGPoFTeSvgkwPRhdAGfQMfcdTQoPCoe1NAE3EZkGZi47pGy8qiJsovNym3oywfeJG4sAcSMEauscPcP",
  "key26": "5VR9iopjXuCH7QbVNJFExt4z3NZR9Qkp3JDoZZJ9ejQCz5v4Pbd5ijHAYwanRwe56Yj2ZYFgfaY35QynbhkGvcKd",
  "key27": "4GNNMz9n1EbGB9UhtVJBPDax4CmQjX1DLvw5cnw9Hnh3hscyDQaKEGgkAgeEgVzUHxJJ2ZxrLrb8h4LPYpQsGsJx",
  "key28": "Xb7te4pkew8j2p89dh6EpiU36QDRraze4uB2AYEPUPVP3imhTyQXkUXvkYKBDCX69k59fj8DuESV4SGiaKUkvva",
  "key29": "3LtkxT8xfzYjos4UVWMdxoGFBrxDecH6WHSygaKyqPokxww9ttdFMREKvUVy7KXQfEtXmVjCcUMN4TdALXnpeE7K",
  "key30": "378RPnqAfkNSsXgSxgFLD9jout7EZEhaLoqF3sR5P3DHv4E2BQukjq2BFMYs3uMUjgJW8Z8pb2jtaLCynN61UjGb",
  "key31": "3s6uQ2xU8PPxtt18QYaTKmtzveGAwcUaGs8bn9jyBTGwcQmYwz66ew99hZef2ZCxF6bWZSW2ogzTv5apFTo3Sc5E",
  "key32": "3Cyva88ofTbd8CCuns3i1ByZvoDF8je6Ct4ymwGZsF1U5WgzWWJGJ4nQq6BZRzd3jxrQwuTt7W24VaMEe6B5yYWc",
  "key33": "3UYpQo56E8dkTN9Zd5XLRpwXuL4i6FQpN8BAPRW3sjGVtgG2WZ7PgPdwzeRuCz1G5H5z2WiaTdTYwxywaoUT5tDV",
  "key34": "ky6wEkhu6TikCYMdCem8EFYtBWQwZJqfGA5b6zUUGM6GttJs4jJfJVhzmAAUYtpuRmBRMHJziiHggVcjNxh9TDV",
  "key35": "4gnsqdtvJiPDAG2xwTDkyVfhog3qQotixDnSCC8aG9eC6R1qcCsfymeZ3z7XU81e7Gn2L34HBwSL4zFt4A34toGA",
  "key36": "4jTRB1xv2w81sjTcgEpuzzLhBb4MiJQAgWKTzw3ZzzWMRghJHNgj6Hic8tjWJJHsckV2p115NAbviA6Eukhocv2h",
  "key37": "2qVQUv4JG8dMzfHsSPvXhYYLGz7iAiqkXnRzSzDuUrwTtgCPJZq7y9sn9DRr9cQpNmVo7nYiFE7q27HH4Rk1Lvfs",
  "key38": "42CiD7KxNYBprjRQt7Wp2JvdYKy3v1mLPGjYePXHUt4bao22oQv3VrMySWr2mVmdaBPKd9DGk26oZPf4zcb9j5Je",
  "key39": "3FQom1YjfzzpU3Y5MAJSVApxhHivvpePLVfLBmzRfhNJkkjvd5LR5rVrm16XLRgi7px9naspgG7o9NJsrXuh9rdE",
  "key40": "2aK8ZGF7EKgd8kU7kU4sePTPJ5NQRrf25QxCgH4WfHrd4NG4odYrCVxmdYebDJhTSyW9AqkFBDXmB31VpAepfySz",
  "key41": "36Y6BhGueg81yjRKz52nMD4WE9ikt2XjutJA3oUiqpiJqTWMpo9G6ij2vsgAWj5Unkt8SSuJy3iPoZ13zKnC4Wbb"
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
