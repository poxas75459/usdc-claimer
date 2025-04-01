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
    "mGJpFSfR9yeBJnqZdJGDRsNy4nq5H6JjNV1tLeojv4pWs1nMAWgx4fjMCAHRnAHrzhX6oGhmogssbWJ3Qe4WCp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jay4GtfHPHNzUgtwrb36z7c7XJGVapgjibLbR4niBwYh6VjcKaNPyvcn6nC8tJXEPxg3icumhFaYmyetdRGusgf",
  "key1": "657MeKAQSABi6qgSdNjqJu8tjDckiD85GMT7VfZjKQ6fQJKGvfYQwVEv2dQihVGq4eCfxrpjSh6FfVSz6gKhxMyd",
  "key2": "2wNGZo1f3qxB7ejtFUWamT1SYqsz4YfKGAAHxFmJ9njAvKkHAKQrKfnF5eRf3WBMh8xMSS3BhX3wtCaywwhRNThL",
  "key3": "2GoK42o2jDoevD4MbeHSkK4Rk2YLdm5a67cMzuamFagJ7QTWahDaWZ4Jwy1NV6tWkjEegrLPXFUewzf5NnZN1fKG",
  "key4": "8Xd3r6wGx9YeSk7R3AFESnuc3xhuNVTf1bsFLyYtKRc8HkPuJSFAC6EwUS6xau53VBDQDRPGLbaPcUfMELGfFbH",
  "key5": "3XBBo6nKScuQaZvoezRgndmXauMERTum2MVUgoaQD8LePHd5M7QAxL4XQXQNf1svQTTfrH6J3ZpZrG6VDvjRRUMh",
  "key6": "wWXyvcXuCnwoVwzT6JrM9tM9LSRoXnaoAA8c9QHnpZqYACJEbVigrqXywNk4oSMqLUcVCEZGEAFMjTy4XRFzkm9",
  "key7": "JzgU5VKPG1GPDm9yQFG8kPDVZ8QBzXVrG3b41dc4BbLz7jaUnKJvKNbLXmHyjV2e9SGZRScFmC8t9sZeUcNz3Lh",
  "key8": "2JNpbwxu6vJWRuF9F9PPUkWfychAD5ohCnNxQpMxyEq9Cvb2cAb8LVLCHPv3Xi8yeSjJg4xMGezZH2zUSwnfVW2h",
  "key9": "5gw5dbUgkpjrAK3stYM9C3XP364FfzLXepA5whgQaWTJ9czeRXH6Abgjy23jY8AG9fktf36nEJPiC9F4w8aL8jvs",
  "key10": "4H2BPRnwiQq6vXXY3nu6Dk3n8Em9ZVmH2sUSvcj3ZCVKq8k9xZrVDoBSgZZZ2yvkaTmi5DVmL6oFHDjmqAQYGiSn",
  "key11": "CGg5uw4bUxYgxt4Usp5GbkvLLPGBt8bhPXtMaKcQHo2PudwLNYP4yziu2gXM6QgyecwB8ipc6NzEKtSMo4TrPmL",
  "key12": "3WTgLUnGPA111dtviEetN9qTLQ3SLqdnSaCCkELVWvipUHwN3UmqjxbZm6AX7HFfxMvmPRsX73BvVSY5frqFh7Z9",
  "key13": "BWShCb3J4kE2Gpggitp5RWeBT7cjR4Dd8ghyQX7onF9YQVUy85NCfZydcsp1PmASLNjzqKiWYEcLvtgiWSZUgAd",
  "key14": "3ucpMqCjcFUpWPZiFLSeM87C52fTKP12sT4uXhzYdWzvRnVpq9dR5f8MjGYvCb9HQNbgLGs1GJa9U6XacidYC3W7",
  "key15": "4svQNb3onUzshQG7kypsNwna8vGbKc4UmoyLuksxhdYoZoYT32E4gjN4jGurier2rDbyi1tkxxRjQk4sy5zCMiQA",
  "key16": "2aGjXo4V5GWf69WG7Dypamx5dccgGcRDTDbAaFhfiEQxKYzzTUZogp7DXHamqFoV9qyM2jXdkLb6pzYVzXQ5J8mL",
  "key17": "2Wj6VYzqsbZytBvKSFuK13dKvEDJsitoy5Uzoz2X72euhVDv9wztmULedHPEBdpEjcWuVPBmtvuus5jAu8T2Boay",
  "key18": "5NXmE2WYTLqrUop1hGf5hEopxxcQQpy1RQJhpqjzPh9bdyk4g5ac3WVELNJ836ijEic8rktJGfMyvSCAFJ2asCnZ",
  "key19": "3PKLJAzKZUAf3av9N5wMQzUmXQYsFkSJXo9JHX5FaHmhqNkpxDM8wuYsdh7u1YmGQGYXSrYzFbnGPQK1gPAmz7BD",
  "key20": "5pJ8wQ3gvTJHmL8JeHSUC4JdoBCs5vCnwA8dXpEp4cP3Ys4vCrUr53D2R6VDA94LchPKgrkHah14VbN7aa5YnWod",
  "key21": "3vyEvFFcK4YYfGKiq5fcBMVVHxUbNUPaB4q47YtJw1Abay8tbPVHFLQsY8evX4yktEep3JhEwpNkwedbg43LTVei",
  "key22": "TA7YEBF6Wi9zwT5t3eY9BNBdeCVbxPsK6bJe14VBcgmgikzPJntqEEqhK1KgUtVmDjN6Mspshb2wCVpzb8Ubtw3",
  "key23": "8nLUN8dSFgh1JJ7ez6LN5MCQk14FCwjB4gKHgU2sumRULJUYnZfHsKLoAPiG9aVyvWXwdEcs8QHsCbqDh8zs6A8",
  "key24": "2DtLkTg4y4SzcSQB2LKEV3HB3drTBjMcWZmjYzh5A7ADAsaiKs7akC3jW535r2EZ8tRAG4CsecL6yTCibJpy3FWa",
  "key25": "4moKJwFtZmAyuuKiM68jJKBAHPUxhmoPgyA7Jr719omU6XeZh6cbScx3gWprybxugEGSwnpTmkiwF3T7eFgDYBaf",
  "key26": "fzYnAhZpmcHqd14or2UQtJ7Yx4Hx7UfACpZvDCTL3EvVxkiF8oRaVkbMkote7KeGdRFvYBW8uQq5PnvVjhdR9AZ",
  "key27": "HjQaiGwPjMdF6Dy35neQyjieuvHtbjMgSPwMebc3i9bKH2ab8beKCeH9ksrspZCT3zvsXc7ZB31mzZpqUiEzVYW",
  "key28": "615jowmz3D7dMTPHE3DHGJnYMrc5ZTJpwtcchwCAUgktnzDFApTYEWYGnifEJXSFCbDYwV7VHX4fEd7kDajqGvin",
  "key29": "4cYu4kWLLsbKLnK62VXU2dTNwvqr4bWKucP7BQ3aYKSDATd6eYMsDe2ndDseTY748cyY4N5iqVmAaHNeo92toyav",
  "key30": "3KWEXURicCuK9SZQqy8nBZZkN1Wtyk2WoWYPwtav8aHDPvcZdPa6vdLw4KgYZF5oJLxtWbCD9KiFDywu5NnGJvnj",
  "key31": "3iQkw6usvKvhYUMo5JwtVcBG4BYqpUpNpK7DUAzBx8EvUgs9xr48kFa2UNrpQ1sa9Tkp5iDbNMi7uhbPDivDCdG9"
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
