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
    "s5TnW4QciiS2P6yFHz61WvuTZYbZELwW6Hr2Eve6bmXZHngLe5964NPvEUkBpiiwn9TbPbJoSAhd12VJSBib71L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWYC1dKKCJAjTT7yvi1CsGdX3YX6PHFWcXZSzPxz2e8xVT3FALU4VQunEMLYfpyYKYcjCdQqV19yNT5PXVpc96K",
  "key1": "58e9kS5sSzxDG4w2rwoT9vcoUjVh5EkEiTd8m4CEPC1ja3msLyeYgZnBsyxwjwz4XKep2oEkaF4AfNqpkb9gmmtm",
  "key2": "4qK7YbVsy1f1YgemdJWQhPtP4NyBQBJGSLWTBA4qD2QDGCT8QXz5MZ4uCwfe2cRENDC96PdU8drdePiFUV26drGW",
  "key3": "QKX2M2LMwDtLx6JQRPLq4vtGzgmde9HYgXSZGL5ENiMijYQSuD69UzQxCcWeQeVPewGN4o1qd9A2ESW1p7DQELF",
  "key4": "2Vz6U7o3JnPYZvBRoBrCpGTNzThLrR7rNAehhD68aXEmQnPXwqH8vF9JzN4wS1j1e9icLRkAHiWvtPkxUuyPCCu6",
  "key5": "5nbHw7ao9kjSPwHPshu7egT9aeuNt1vACxYFQS8aKwTMZwyjFWfiVmZ9P1Lz4idtM85kCe6h66rgaiKzf8WFAUYs",
  "key6": "315C5tFW9U76czwqh5mgqAxxJ8zsrH5dAFiwtdQ8sQCZi2Mn1oifPhvniXjKvuuE6MSgQxYmCaKzmLQvGTLhprAb",
  "key7": "59sH5thvMGaNGTmzEx5NucPpDLZVUSk3APAnhvfhikd9BYK5uakAi7ZNXEKofPc3or9LqhreWEwLWvPof8u8gZWT",
  "key8": "2TLgA8VZAYjhEwQ1SEwLFywsK4GNmtRBR8Ypd72WK5gr5PYyK4gfq3RRpwpEacfoyHUhvbtrTtrP3qFHy8pMAehx",
  "key9": "6mcowKA2S8FYUvkfGBkXWGbp8uSkxqnoabNCSQAFQ7CCjSw6nJhFxzxYN7Bm7HH5mxFHefTneBEAiW8rNiPvFBR",
  "key10": "MZpJbac4L7j7b5hCD2QipiiWgcr31E6o3SsTjyUVXkhAKZYoZoyVajhVmyLrZ8rmkiEksLfvzRpxGiFLfkgxQ7u",
  "key11": "4wB2R52DMgHzuVDPfuTqEo4E57tcopFA2NVqRtx1PnbLtt6yGSQkHzfWkQv877j1v5UtsPAkCiXhgqsanzAhCzm",
  "key12": "3mwgahoWTM5DSjqy9wgnpUvbXoJNcRJPjZYQuDCBDsEzJoAkSCig93hw4aJm8VcD5cxMW9pafnB4QJtnBkwgQvft",
  "key13": "imkjSt1F822SS6p2oKStC2uFbBBiMKt4e6VPbxeZrCWzDZeCZr5UH8QWGJVpjWV5Sve7TqqhsMCkv5oLBXJ7a6y",
  "key14": "3HaUZZU4i2kkNo7mERJzzQUEnqRWz4xuWtbhcAyVDJPZXB3D3HWffPtjUMMDvpSVU5ajjYPtSypt7KUwxfLsvF4J",
  "key15": "far6r2QtmhUniePtHbHRjApsZxXgYP3FgVHH4g4PwHyerVdeG8W1SJZ84dB6N1rfqv7PPaWQnpxQsGVBSAvJtzV",
  "key16": "5L5t4WxVWs1p7g8ecn8hRyEQ9F5LFKQwWo2Kq7nTDqsVSo6oJ8hceyNt6FGpf1wtZWD2mvH9CJ6sB4BCJ2iXkwKL",
  "key17": "3p8Yo6Qr8wwFLzCvVkS75yvixuJHYpbvVsxnLSLpR5QnXmxBESuH3GhBMs3eiceYw3QeYXWRRXFDKy5DvcKqwndG",
  "key18": "5EDuf4r2wjRYzq9GiWY5Rn3aTfMmFtGVqLyWrXxFKYy6EoopYA3xe6zM7ex5EyGFYJGCDnSvAxyg6MPdsuGfrjnW",
  "key19": "4c3StuQwGCCC6KVwGYqqAtf8bpoHf8jyEAa1WgefRVCkzManYJgHCaTDRnuQbtJ3X9fDJYNkzNWg3Q21iRqyg8RD",
  "key20": "5HXH4ok6veCoTVUTAbWMQSP9NwWMwiHyM5NXVp2GRZKmqR4TFgj2eTVTezRQWqohzJjCQB2QdwXwTHGcfWYDpv77",
  "key21": "2aXJGGL44dubym4kgCEhmXxvtM97DdjVRz97TSxAQrVJ1m9uiWe1VxSNCzxDKryeRurASfDrAgPxmLfSc5vTNgxQ",
  "key22": "4Gf6MVkoE8uDGrzPj7Q8JPZnrjtATXn7PZXZdYEvwiAgpcW7mDiAvnhtdJYvFLZ5Y2e21eppdnJddQvfWCvHj5Ub",
  "key23": "32pkgqKT5Cz6mkBQTdUGukgnENwANbXC6C9cf2A5AfzuEVqSoaUp1nbgVjWDVW8UKzvGRXhPs3a58JaR6JdarKcT",
  "key24": "3vWN5HyxdH3WrtotZhgQbc3ggMNgu4xsvdToNEDacXpggfwZZ3N1d8RWHi7RNymUPzVqS38JBh7eoV7htuuqAD7n",
  "key25": "Rerm272Kj1sNNwtPn7bjepsJTU9onYbAPNhtd15xwTjN7qecNYTSU1DTUz6rd1yNhJQus8LjbM56uXbp7CyJgak",
  "key26": "5UvWzxbg3zfh15j47gNbm8yw5MyX84avUYXrvNwZuPcciUN3JnzKzDrkfa6Po8e8q3CoucTc3WJmRHQUFDvjY2U5",
  "key27": "3Rx2auWhcrkzkXtwUpZ4UmL9s9x6Wu2QSeaW9nSzA1m9hXsHcau4YEXUQnj1jemf2QtKTtBrCNgMgaMjijMPU4Gr",
  "key28": "sqtTYinpsNPWnh2dHTfzhFkpSBH6XZGB19q6BD2YRiFKdr9EQh6WturCo37d9pgiKAQUkJ8Whb4ajjdYY2PM4Xe",
  "key29": "2jxjkQvAhrU5LZtN7DRqoMSygVt1qjx1f6rrSc8qzaP76ZgYoEgtzQMrruJN6eBYXnRX85ANkmVpbnoA95y9y5Wf",
  "key30": "585DukKN2K9ABV7Di96cHqN8U8nm6XrbnAGN9zPxXLFc1Yrsqsdw283wRdJcza26AoS4t94KA1DEtFGiv3jUsRR7",
  "key31": "5nkiUcrzUi9nVQv7CTUVQbKiDfZ6R6Gk1qG2p4cYp46ztTTvuvDzR5szTsYXsadJmvkvKdG1HWiCjsUQRpfMtqnv"
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
