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
    "4d97AzyoZoBYG4hQMz84fB9Xug9m4DhkEQe4qSPitqjoxp2fvq8rAHoeuyjfLNzUjWqihj8BtffvccxAXhyoAP6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVBqtVZHpjafzSm2ap5WCvaoBzt3UaEMcXLhxUwBvnXb4AeLKvo1RpAYuAJx6WKpjyiTEqoUupXxvqQWiJ8CJkT",
  "key1": "3GsfbQXJ4oD1JHgUpQysXS3DeSEbBWPERPukPg88BGr3CAvxXTdy5BZpPV9ULfwex21y7PqWkn6DYQntuLRz5vPg",
  "key2": "2gaRV94P2qiq6MWrBgMjRAVPZ9aFrG9D7Ftg7CF6jwUoY2Dr5ssN4GiDcBVrXdaZYkjctPkqWGeTv7rDL9JAs5V",
  "key3": "5JeRFAFxS3uJ2QpCzWfhwLy8t8Uhs2Dn2wEMGZYZqeo967wBoMbtRnBa3ALHGaQ5AUtk5DRfTmDfz2ATag5FyjNg",
  "key4": "tPLq7YB7q1VZwoi1bCrCwpXn1pkp79i7ZGXvDdZtTeJ6mUCE6PVn8S39Y55XGTLUSSELE6ajfePqS7xexXwzTJ6",
  "key5": "25baemy8Cq613ZcEZVgUjUb6RysdR3fZFPwZ39jjEqHEdsUa9N8n4bdiKd5cw1QnscTQggXqGmsMc6tzRDPLNpPU",
  "key6": "4zUUQm5YVugX9acujnvwpdKWJPVeQej9SJgvZtjXyEydmrc6uvp9hWgQ2ofiQYD4pS1ieHFgrKJzz8jR5tYnQGvV",
  "key7": "5QSi6U6E56JyaDatseHv5Ka59xscfpECYwCg7SpQRGnudjaNJz7fSfEi6nCSNLhPiAiqVKuTRHFdpLvSwTHhgJC6",
  "key8": "5R5ESeEqm2twPpqTb4YZKgXKYDw3sTBcJ4FJbEuG3zWcYuHQrWHXFoLPxJEyEZyHHHNVmTTP5fCp9ezH71kDV9jP",
  "key9": "52HoQBfdojKgyHcaigLaVRXSqDVfztAbaSanfudLBkt8FKTJRLwCAkvVds7WHCQkvrcfxymdSWm7gtibhA7EiS3D",
  "key10": "5ocPDR9NnuUzuQutthug3A272A3WnKAzrT5CYDmRxRe8yM1MYkbEtm7K6JmbL2AWRpRFEBNHSXT1WHcuhVjaH2xs",
  "key11": "GKTF7iiNMXEcN8rr8PwbZQE2ZkesiCPNsp75dFpLEqy7k24axapTRNz7fH99ynoGmWJWNZKLfBSvYGwqRoS9aNa",
  "key12": "M6oEnHz9gbWuKx1QwFA64Lh3A9Pb8fw4FMstjUPB7Qy3FbEV5HoiUZfiCvdLgPNmmQRG83rX7HzcxKhPqBCGS43",
  "key13": "JFarvx6Utu4k7jr4J4Bnb6vYkkFaqqPHX8PcNwMBiZ8ihik3w1GEZ1tdgokp6M65sYkeLEABtZngHTgCMHcTjtr",
  "key14": "2Jq6zchzwmHwNpqfPCWf676JgstC6aebGz36dEHgNNdAyvXNVWixmnq7Ev2oVhnBB37wHnuRgP9fPV5HybuR8Xrh",
  "key15": "fDEhdkYYYAzmiPZW7iU82SiwD6s81hutek4fkiUWmLGV3Huq7dwNVvYdvhd9db4NgCqdrT8jEd4MX5cH6zxQvVi",
  "key16": "4ZZBSNou3DyFysxDoGyjxFahXdfRPkC4hMrAErmxqpbRpBwoDGUbgEFjMdGssGv2XBfXVLynfXBQMQHVCm41TncU",
  "key17": "EhoKUm6BvjKxzi8fZUjY9B5W5retDQuMTnbiwPJoAr5vez11qDjb54Db5FqN6VnufeJvJM34MBmhj6e2RRebJog",
  "key18": "2fxPQp29mCxv6PC97p5buLX1SRfHd5DFt6SLkxnJBjkreuepdWRcC9MVW7xKVfWDGNSKUkQ6rq7GuqERbNDYgtTH",
  "key19": "sYhjtojiBZk3o4dzcV2ZY5UHp3SHFJDnxC3fKuDdUwEBLhG8NCKAQHVxfJCxgT77KYai8Z2AjEJJiEP3kLfjdz8",
  "key20": "3JM4X6V2W1ARygMQxTGtAyDbMy2hSKgPjsn4CCCx9jD3iApS4T1UNAxVCibsXTNnhyBYsYaHHcic3aLexTSrB4YM",
  "key21": "2JrzZshqVLq3AGsLBPT6GQR9KsjnnouxWRm1mDv8YMuHrLR12qrm4NEi3GsWc6uRTsjVee77XeQGd8wwtBtvD23h",
  "key22": "2xHvyVDFWxaUW3u2wnoAaC85chE14QTfnN8BhQQDKkjc2coRCSnuhLY3g55aVae2nqTJ8V4pF31fA6Y2MniuggAg",
  "key23": "4hUxYTHMLhCUxAVezSA8YjeVKjQWSDafuTxGFEXJvHFZ9jUwKSZs1MGk8JW1Ehy8yoYczNMgExZyuvsxQKdQ7ivd",
  "key24": "54n7z9y5GzCcfmU5yZvs96W2GAkKJR1N55bR7uZVAF1ap3B9wDpp4bABb4W77q5aj1ZT4khr2JryDH84Bro23g79",
  "key25": "2YkBVFS6ubpDqprtox8EXNqHD5J2h7WA7oavVLegqwiLkrbuuoEB9xUBij4wex6M5gYXkvhDuZXYGuYDcmFoUaxi",
  "key26": "4L3e9ogQMWEQXFiV8M7bByELrXsgzApPtaCPKPCk2apgh2pkMcRQRQEwzdNMcYuEYbgMRfXXWmSfLvkfAcKt4A7b",
  "key27": "1nozBs5rCMFnWTcvWUR5AoEHUvRSmWJ7AnXjwtqySYpXEm9Hc1jWNSiefHzfK9FtCoWSWpA4HZTYBKaUCrPzwjz",
  "key28": "23c46hbdeTXUFyDKmbLdshKcFFVdwsuocNNXTJjyfdsDUKkk6mmTxbtjPrtzU2VwaKiWEpnLSQbLnDWXB41ZUrAa",
  "key29": "3rUFzJkNqRYpDeKeqsbf3kwswpc1KAh6LCkZvbq3D6fAdZo3P2fVHsXpbWyQgMrDu6KxBVTBsezseHNz8qC2AQcD",
  "key30": "44ASmd7Hhardjo1QryvbQz7unFWttU42oi72B3LwSYR39uE1pgDfPoHvR7aUvvYBGMSNE2GGGBEqmVgTkq23Sb6C",
  "key31": "4hjftLGFMZEZvka7neuB2vqLB9LVCuQHiMbN6Wy2VUCqdwXmsX3sgUGaZbFs7gvZsbz29g49rqixRkxQaQ8cA9nq",
  "key32": "3FaDN6vVWe2v9Vh87JBKNkYB3LWKug5Am2D6DgHpvK8CjVDZCfT8DpQDZCMo7w93M1vmtsxfGppVtPZa6cgYnjGn",
  "key33": "YJjjQe553pmF3HxYHHEZrfqpqkCRWwezezZfendnd5RXmkkaBLhQ3LdGe13yjeAh25PSXWdukaxxXiqAX6ji9Mp"
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
