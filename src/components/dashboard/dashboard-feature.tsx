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
    "E9ENjkLpunynfNVcy9JoAeMkjeTQdBDs4PC3xo79LkhLmFzJCq2EcbuTTNNJLbjXh96TQpwaY5UMFJJ5RNoafZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbn8QMoBuqXZqRbunnF8T1TyXxHbr6Zf65mNGyGRtot9nfUiQEx2HRFVhtpWJKu8aoQ4NtVdfL24b9u88unSV24",
  "key1": "2aWSYZaYWimSMxZRJ1uDMkn8EkvYgfShPzXu51ZoCgGHRYL788K8gtZHkicpq7uKZjMwqpTPko4JpwbosDeTvYxj",
  "key2": "4ATj9jK9Ybr3sLp8bQYVmJKvZ4vp25bvN4vwAGGvMMM3Gsz2ndTTH6p842HDtWEyXRo3wXe8G8rrh94W6v8xoTY",
  "key3": "2XNkd8hg5p6pFJVq36J9Cc5qrWLst1SkqN14uitQPWGAfh5LQdtzwwm5tAisJruAKAMMgpGRCwE252grjEZk7Lfy",
  "key4": "5zMU6EAoZBWKUFg4S6y6Byhu6TjusUUnNLGfcJqBwpEwfaEfY3dftM1DRL6pi7VS3FMy7FA34eXRKhGXRZ1ndCi",
  "key5": "5dwtbBPkRy7xFJpHzRhYQdoo1wHBu3KZqkVZEf5ZNvkqqMkhT7wzQfKq6eYpVxxHfc7XNz6RHTiwpjSVRin87DUh",
  "key6": "Un1iw6cEkeVuE9EsnFU7ZqhBfq4frEKQCTJkevAfxeXmwzW5tujihMMdXKxW9KsjfDc6ryjkth4nDmvrZQrjzVv",
  "key7": "2q8SnufQDPyDabpZomNEfM7yXYXRm2yNxJ1ptARsR7AyLy12LBrANw8bz8jPZQDMrozNvhFvJECDWjNiSML5W9yr",
  "key8": "PBcvQuHoteswc2v33Vhr4BpwjJ2hZtdBDVZ7HnVpmWXYiVRx4wFppxJk27dqynwfi2BVdcSJgYCw2Xoed9mFHvT",
  "key9": "4VSAcUYx6L1kVyT2JaMcpZNFEGnA1JLHCcNkjpggTPv2mhk79WiWe7hAhDahRrNHK9FLVZV4vvxrMq92FvagcV58",
  "key10": "3TjSpWPf17VXSXhKAbSJP9rob1eeckpfidg5XsQ1DRfviDfGAkF4f3gDBxvyxo3Q2MPb7PBxJmGRs9jQo3iQxB7s",
  "key11": "64mtBKH7H628UYn8BUTXyWtZTi4JjVNKeAmYD6EccCqgbNSNzTQUuLGXHJX8woes7nQGzgF45gQU6BciSbna6HaV",
  "key12": "3ceCK5eeNMhSJA9r4ErRjruwby6UrA9XweiB4S5HfPZeiVr3nS21jz56LQ7ZU4TGrvqFeLP1YzFRmQKDgsYQzKJL",
  "key13": "5Jj456VRneN8ch3DuJxdJMHMuofm8tCWEw3bHGbDtBGySFnykR9JHGg1zUv15vXY274aaJAMg6LiQGp2SJ2xwbsf",
  "key14": "51xrmSSNxVEKH7b4xjky8MGG9DJ2jLid7qtYX1AR6ZTqJiZe9aoJEGvUaF7ohi5kcsUhYERWQEg4YCoDgjERAxrC",
  "key15": "5991KW5kdAvzt3At4LaDDYQDFU3J5xpJm6hgczmMHYgNvknTAxDmXpgPXJsSFhECb1KXaZtoW6tP2qbqQDnWg54v",
  "key16": "2cUDcTi4AQYCegJB7kftSZgHhvEVB1DY9QzYwLLTpijTqMDTJTqeLteWvVWud3Rib888cGqN7H7X88m2jmY7kDa8",
  "key17": "5w7LTx3KTcHJAkdFk8v5a6ZetiBPUPURkVkT8ujLE3zMHUTHPhPY9LcjUjYf3dp1wSxFofky2n92AXQtK3fds8XZ",
  "key18": "2CHGzUt27TRT95F7LJNLB1LxcCUjokXqVck3j7b9wsF4EkQc754eDS2e8MxqeFnaGPkzAfHX5piVq1esVSXGgcGj",
  "key19": "4jUapwcXCT9fRasSVkcphk2WVXwHCEWmBsBGQ8YbFUcjkye4qgeFhZH8H2xYXEGRtddJ8kFnsCWTkgXp3u9Mn3ah",
  "key20": "2EPNBwH7n7amg9v2GvLFjJuBH2bKEXDh3GeCJ2remGPNbdjNRf4GNGReRZLQsWsvznwxUE8bptx4oztbCTqYPYrh",
  "key21": "Vui5wsRfXZjQWZYGxdQp8vwqqobCG9ricN7bSQmAY2K8ZyLkuFHCNBND61M2H6YAJgvLaHbfTf6oMrt22WVC2sm",
  "key22": "3wyGdf4zwHQ8Pas5ZHupqg6ZiwsHMnHxJpumbZTwGDfPmiyGe5vgiPAUHtRuoZNXW3g7G6hJrdzws8eCbUJTYt4a",
  "key23": "gswpPhbcKTLh6M6dickXaxwLzJRPnCZEhHSe26J5bCBFeZKadm6dsAkkgsNhXSwLEaHMmgcDMQwDakrMSZGq96k",
  "key24": "452m4xTuLbY3EpQbJvTvYA7c7oDaxRWMBomcNLAnMEpwZTRUqxeCE4Y1rnLkfSjG3QLgF5YLi7GXS53hjb84uxfF",
  "key25": "5MgYSDS4bZZCU6rgnvYr3pUfBrawbueE5QKM8EBatrRZrDdDFYKwFaYEYCXvTmitwZN1vUAtQ8yZyBgACXaQaaVS",
  "key26": "2KVXztTGm11dxAeZwkPFozKh8EsNmwK23CrjNoo1h8z8pZ5kcBGcFFSh9qZjbSpR5Sk9JFeTHrJPjLMPnimy5KCL"
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
