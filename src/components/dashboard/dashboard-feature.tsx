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
    "5vVN7NwHY4Zp2LYMFWJo32ZtUCzScfP4aNsiFvM3KbcR75w3Ngx74UiEn7ubkVJUT5yDx9ZjsHZ87x916JbFHWUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3iGYgp5CBAA9yXSu6of8Y3ZZHQf8qkrtWNeFDkVxwAZASzd7YWceS144X2uS61hJejVMdDo8Ygpkyp89d2hWUW",
  "key1": "9rkMssfusWKRaXWgS7js3oiGVvjQRR5WiEEpQRVBv8EN6cxpwSxR6wYtHotdiuGThoXi3dDNtWPPcd21xLbiPRh",
  "key2": "3je2XEHM5NZ9PZUqLgvYCF4xaWEvF9gGThTUbMWzqcyW26mzGpZQZTJ6WfLQm8FajYAJu8eMKZDoFu5WqsE2u2f2",
  "key3": "3oeh2nQGC4anZsog5wZsZcBX3c6ZDhoxpqX9i27uUQqStktbSKhnUCQRPYkyA6pc9umGxEt1L7eJ29sDL1hLoXkT",
  "key4": "2FBi2EpWND9fzr1Y9gzh9xrr6wt7gfXGN3NaPEbLE4EYSYwh4LRgb4Uqhn8ZgXQXyc1xdNkgwn9yVPX7zXBbMXqn",
  "key5": "3nb8D2TXc8y2mNF53hJmLTeCmhvVSruNdAjNfDPdMSbyZh7rHjxej5DCFnRY9LC7MBaY2Jvu6f1DfgiivRcns3gU",
  "key6": "4sTUP7XKh7fRtoSymCsmWLNqz71u2jLgzbnSpvjVbXYN84a1huKNSgJNnZ2iDuzQ3CuUcNLUbBncsDrme7c8TQVC",
  "key7": "3QM3fx6oSK3Ye1migPHGbfVEDVmFcXo3qwMgFPKvmjvuVc2V4FPKwMzZayDf3Evt2mWh2w8XEyYwMrfp9eGUXdnv",
  "key8": "SJQubyuo9UiDMQrMr8JrGqNSEasApkGVZB1j7PQjihZ3Ua64ForLwbkWvzfYjcvMKsHUmxYrDZQEj6RiwvZsK1A",
  "key9": "5tudgY6baWR175aZtJ1CaKKjBgcvZCZ6W6CEisxCsKM4TauwbFFx3cRk8GAMGxBsnFtaJHAamYSJXNgXHwmHvkuy",
  "key10": "5epaD4xLoqXjJW1pD51C4LaKk8vevej46YtMyENf5rHXk6phAtArEhtLAtFxExQ1oTm6h5dcKdQYoSSE2KUV8m1Q",
  "key11": "gRCgQEDeMYfEkpFSJApSETkQJ5bhSk9qatm6yfuTfhqxD6dS73L5MUqQhyaDXiafYJL3s8Vgm7aKsZXytK27xj3",
  "key12": "24yV5X5dnfMn6FHNnZeWiRRAd9ATiYXN4zF8MiNn6Hs8i4XnRLgDGW6B6Pqj5rF9nzoh2M5Dwkp91ZGoiJiWGXrp",
  "key13": "4mzbE2GgrRU9cKcyEHnFieKnLuhZwRgx2eYjv4Z9PWXemJARyGi1mq661EM7demDHs3VVYvc8DZ8eua5icb7pJ4w",
  "key14": "zv2sBDMgurLpMAMkPgkrDjf3y4LnMSogT5mgnpmpSNqkymUudgA178aJuPq9pW8v9BF1jbHwPDSXx7T3khwU3sy",
  "key15": "2qfSRGh5tvu5S4MKw5Q5dDYXavPdy5WyteyXHRA3QtMn2NSRdk5tJu6HoY1Hr4Sc2y44FTWT2kyFgmA8yPrQkRyy",
  "key16": "3UQ9ADtC8b6AsTrxrx1vsAXesq5rFpjSAbSkT143YfG5gctcHG9gMHaRXsib3GbAbQaMqcuNoHHW56eXwybdevZn",
  "key17": "2BTbZC9jsoDS7jxZy1pxTfbsKjianH2jPENxe2eqgkpjHjK7KojUAGtv1gvjcdP8iaNaqym3938qPbuvuFgmHg3H",
  "key18": "4vG9rPDgndBqJQ3N9iP4nGMvMQ8fCctNdZpkPN1eyc99jRxudcMcgyQKQyLTUfURihe9GT7Lt1AQmff8jhA4kCTG",
  "key19": "61ngf6VN15swtR6kYSZSErTnQ6ip3d6pmrtpjMrQFmKKA1KxUjuYR63WtydpzN4TkwJQDGpHCwdYPV5B4dpb2HfH",
  "key20": "5V9GEZcr2rLF6f19aRS65GUHZycyxpjn2wG8woEZBx7PVd8hZSbGGTmqRaQknp5NTxqb43ad8ynbPiKCs7Cfe6ry",
  "key21": "4eGYyjP3qKbxYqgfTJbdc5Yi7R6WbKQYHBxFdM1MFwbZNbix4QYxAiv6mut3j2zT6TxJQ73yuMRf2NBPS96BFJXo",
  "key22": "2ood1rHnueJjqv8b7UvVPJg1gsZtCxs2M4dxAzup1RFPU8fZ7WoyPNKdGHuDQpP1o95XcABxTP1XhrDHXx3hcg6K",
  "key23": "3GMGZPvX9toPXmRYoj8xtfAVK5sf3hAo4YKx97uv4tiTnSTwsoVpqjhespMaTFFQ63onykmEMt7dU9TRQzjTnAHb",
  "key24": "44wrMnFcBUzjLfGGpxeJuKVEbf53QnG1nYQ7oJXj8i1QcYyoaBjiB1jKr2vTw8PCW6FaEKu6BtyesapV6WKAhyUa",
  "key25": "4P4ia2vfZTPorVjA31b82mQeTkJpzp3Bzg6Qbh1Z7TCQiYMFrbjPWj4Nz3QwhHNsZiXig1e7JtWXDrCkTE8CDMGS"
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
