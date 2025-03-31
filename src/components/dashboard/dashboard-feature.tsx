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
    "5WM1NsFNvnVjZzYfruKNtzs98hLFAspyqNGMBooKzG2vqG9CXn8Qqau2jQ6mHTujYCZaZesJj9rd3u9EvYEbeqe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62DYBE6kqPdDJWw9NiQ743bsyukjYJk5f9BW58pLSLmJst7qsaD61gJCfNGSZFyZe2zNFEZiZmFwYKbzqhBgXS1U",
  "key1": "3WT13q1fE2DLfwbRVpcpxo1J6Lbs2bqK7N8RVuRw1YSGbLSZgJxXnGn5kUebyTbaXiN47UEkza7Drr9e4KaXMf1d",
  "key2": "WGVAngpVXmjYBortm9a1kX9ZWc7jwmBdQ8oecvMEsAKZBDc7CnNS9i9Kx3Fn9QD5kif8v3bAxgKV5Xri32oJvGP",
  "key3": "4ssWj4mssibAznJ1TwXgdRDPwMLp7QGCfbcTdofKpayWivqtzkDNt84tMsva3cwbMYWcYtCNsjXqzTTgvASgV3ed",
  "key4": "37kDfBAkyytruzvA3eLF9unW89JFvkaBnhNtjg3ZqLASq9N5k28tmnLWJj6G6jrfJAuUTYnCHjR62MB2uUGinhz7",
  "key5": "5hPLCeDHvxi2s2ruucTzCcoNKT2pm9yuuH8jui3XhZ9qd95BZ5dNPfPmhrFUiyBuJXtFmSSkRrqc7aAsndyPQCyU",
  "key6": "3MKdrstfM7updYvcCZkH7aDxJPp23v6vh5vzZk2Sp7mWQFPMwx5U5VdD6sTY6LfyP5wzcW1M6HBWB2iv1zXZ3dK1",
  "key7": "3oQ8ZVDdUYue77CxzKWcjRTjZqKLQqipgK5HSEg7uNPAivG4NhCfEdRHNWQQXWUPFurS887WkcooF7D8fZsb1uN7",
  "key8": "5U9pm8vAJX3tguZihuDEzGyjUGA2JcquApAi5UiWoavEaRyCyg1cnMQ5R7e5H8GPkBaHW8RdUq1A6viZ35CoDoqQ",
  "key9": "2R5aJEAnTD1wTK11WgVx5m6Y4iL9UHq4rp5v6raiu2KWAapp1uJo3dFPFAEGc4dJ6CVX4wtL1wzNdmRseebGjNio",
  "key10": "dkJvp3a5VmL5HpvXzEY81QkTPp5zeuXGfxnU9emNqDntrksWJkig8oN17xU6W2HsVqh5d5qjkAgwgXZ7smm5BE5",
  "key11": "62qotpqTiQLWedb83JbYg6gNYHPnK3WbqdYVXvoFn4BYDL3YbFNu4k9aHbeoTKr1opHMXFwKk6EJEg69YWyfsjZb",
  "key12": "cV4Cmmobarpp1QgGDYSavBdfhq9m5d9LfwJ8hNWBNj4DC5HEfLq1U7epsH6wxoLYjvi838XKTSLmSyU4CRXNmMn",
  "key13": "2j7sA7DKbGPACBcb5qcsshqCo6QKf9T9o8iwG7dPu8MgdxE5JExKs6ktkGZ78oKQNX5RDqktu9kkyrbnFzzSEHne",
  "key14": "5UKM4Vj39hhTKqc2sA1UYb1rwzhc4xQ8F9UBxpxyoiFuipadhUZuGkftK86PhoGnzDu7mJz9n3QpYCamTiM3CxFw",
  "key15": "5KFeRRida6W3iHEaNhwWgxXYtib1SjxZJV8zbqXa3QP9iotGgeGWuieRHhLcprwbKNuCAtYjXnaEhQ9MKe5rHCJc",
  "key16": "UDn6phFHxJRNqRLR9RLEBjQoi7WfhsdhNarj2QBgq63pvHcyNqgLRyAZTGpcfaJHmaRWmtXmFvb4jtHeiVf4qwn",
  "key17": "4hRKBHBE6BB19Y38aNL6oW8nzHdYH91UMugLYGy5hhcfSKioHLomLDBxc7dccntKEtxfHMRAof7vnKsL3tqAScyJ",
  "key18": "2koEQdUuzKb95UgRagrDwo48cqg5u18ZtKYF52pXxCceiJ4QjffbdSVkxQKHU6JyX9yQABAwRyCr8nFD77frw2P7",
  "key19": "3JZD2v6mJ5NphfqjM8LspTtQr2t4LPLQMQhf6SiSjnSN5YdJ5b29fV36THrdR8uJwntA2zey1oL5AcDQMEWzUfD2",
  "key20": "TAnneBx5oy3xVgyoTAcC2gzMsHGcCVFDxpCbSZs9Re8qDSmSFTKgALxkvBiUgVS2amBe3ZMHKMBR958Wvth5nF1",
  "key21": "24hUC48ZibBF2m2YupFbBxZQYrTvPRsxxEKxB7UoriRJKWEMJPt7ZGvnKiz9woiQaFVi57fcPKQBqD7xgjr2Coog",
  "key22": "4UYYxwk1jjqa7j2s1sfYPFj9LacbNqZ2boqo5FPAPeuC51QpjV1AQtZWiuPhTj4iWxfzeUnZ6Da1yJXLpNX82xw8",
  "key23": "4bqVeGHoyynBLEMyVrV3YSEhmfNXo2DkGB7aQn4SsAZg8AHZ751dpfytisFgz7u1ueNKBeBaU1nJUPBwQYBSgJR4",
  "key24": "3iHDfGD41PNqCyvHSZQsfmYkDg5jCeCtZ5RUTsDXBVBC8owmpbRZ5Py9heBXnt7JjrRb8nD7Q71RKBg25RRKkc9Y",
  "key25": "3Nn84LUTRTiQYAVc4vrrsqwH4qvwHmM9uaZAv17Bu1KPgCpX5MZAMW3fXL833ETeQZCcaoirMbiHFdfhek9xzXPN",
  "key26": "47rmuRFWes4p6aMyaQLmM4u1wpQEudTxUFq8CYWEjY5hrBnqGYCAU7UZGdRor93pzDGgjs5gD1satU2WLAw8yRko",
  "key27": "2j3EL4DHmvSimGQdSGPnad69HiEffzUhWvmhCNoGxjVcUvFMi7ZEy1GXDQPY1tKvzz4Ru14kL3ZRpdTtBFb4GPpE",
  "key28": "43GvXVAibp4J3EHPmtgYFsDtBeoUAMuEBzNBtPz7nfRMdAEr8Z1QKBiyiwjFu69PJ36pjF43ExfKcaGJTaNosrc3",
  "key29": "JCkxEFm7f4Kp6XZXwrkpfQeLndXErmXM4i9mG8UVkAJbcF5JFzhJTZx4SyfZeCLNqFCgE7w2DsEsGe8GKWoUciW",
  "key30": "3XADeggse3gL4s7Q8Eq2GevqMH3pAmSsMM1CKrH1i85qDX5PcR9zdaGAwrYAEKJTkh9v9BXw8M8Gn7EXpGV15yJg",
  "key31": "672WXfV9J7mU2t5fzBxMvrN8pG167LqyQ525aJkomoQDa33SVpBQJTFTekqerir6xMQettYQD1GzykuAUpwGzYY7",
  "key32": "2Ge5ZmBw46aJGhzDvm6podWYeJ5hgvLetbJwXJ47skd46P7cJoKHZAxMyGWjQYCHMFwT9KfVPYjEh1dSJqpPe7DS",
  "key33": "2QW6RTzP3tyq5EAQ1sWa2diY2g1M2CHUDQrc3VNjz6RiVkQdRTsAJ8D79zhrMHVKXRHLH7rkoemSEfq579yYCCZA",
  "key34": "2wXjnougdB2bjdrveSqw8kPDDtr5KksJjum1GWGWCBq9RE4Ai84owmhSMK9uVCk4vF9QCNbASDbixPduHMjkL9j3",
  "key35": "5qPqr8Bc3UPMdKYcrGkjiodorEfPHvnGkxfKDECazuG5P5pYnqdApuzZcudrwugsjLBPQkCWFgoJr5fMVvoL7iw9",
  "key36": "j6HD9Aqh4i4CvRPAb5RJeksLEY3qjrBuyfS88sRhDM6aEP8usPpMr9A8D4dqZu1ayxiNJkykSU3SyZ9rELFZQRB",
  "key37": "3e57jvEks3mz5V37v8oF8PBzEeNyiiM8n9WYtkv9kVLxmnpRfh87q6xWgq2US7M18vhA1rSz6ePqzm8BjsZv91ue",
  "key38": "4tfZsXAnp8Zh1LyqGhhr1YpvzUusSVWgg3LsStneWRY6g9JtTuZsPLnA5QGXD24jep4CYBYGdnKspWWYrbKAHnRJ"
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
