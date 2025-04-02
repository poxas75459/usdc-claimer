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
    "3fe8ZR2YT43B36WRvboSARXEutoyp5Exxxoy6ToFcETvj6zMq4ddWsKGhtSvsGX4VZCYK8wGDnqZd41TTxMWu8gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28nnPEYUYuCURKHEEHCVAtwPaYN8EvbvDtMW1azEvPBqgSi5zKrPZUaQwTCzGwhDzncUiegnwQzmXsXtPS3Av1Hm",
  "key1": "3Bo2Je1eKHuArvvpP1x9cNayaWQYQhyFezmem8H7MJvK1qLqHDHF7W3T6BpfYhrmYk7jB3cNtXuW2XcheSRU2BhZ",
  "key2": "4r3dCXmrEgAetwEyBjNSM3NDVQpd6oYUmRYm2ijrpDXYjgjSgU2NZyzKWHHWJwR4mKYvC192ojutihkuKetREymo",
  "key3": "5Uv9cmFzB336viHQxP9FrD8N2eju88tXY8srk1auxxLRRZtCVArGCZ6g2Xy7hXuZ4yUbPanHkNCS9pKP5jc8QrcC",
  "key4": "3b5BSJpa1GTJByiYK5Am6yzF5cLkS3PyKwKF4tQkxEV9vgEaf549CgWsZTL1BoHM5TjUSiqk81AFGoYYgKgjvRCQ",
  "key5": "5jAKXamxs1jGBz773xD2fNjsU8CAqkLyiq8MZuGC2JjSfjNrnJwYUYKsp8ZLK9BjHe2iWwrXKbDDXcFRWPAvFrc5",
  "key6": "5uVwg5VRfuDCB55Y5oJr5LuXuH7c557LVL29NvGPykSAwqeU6R3RE8BYYJ1jKGMZaGsT1SN4wxc27MFYCpzepuGo",
  "key7": "NzTRA9UTKhC2DvjAH9RkgJXXLA8jVUy29q2xZqVKQzd8wRD6oByngZXEpVCxWhQEXako9PnLqJw23TkFS2vCzKt",
  "key8": "5g9HZz9ijvFnHvUqAKS7Dn9v7itpuamJUxJ31X2e3ZCRMmVkp9vsTfkBXxz3HJn65vnJgkwwE3LGRCHB7QWkGL89",
  "key9": "4cMa9ocd99NmWqWmNNZrAhWAZM3U7GaST4rWYTukzcmZGfeas3axQ3LmjWPoGjzLq1pjEVmfk7piZVhBLP57c2c",
  "key10": "55xocnPJfFjNmQeSPg9Gg5mc65pwz2n22HtvMTujhRguPdRAgys32u1Hzw76eLmbZAQBmiT3eU49gx5jbAo3pkKc",
  "key11": "mbEm9qh1tVBECBLp8zXtWvvaj7omiX6XHLxnSL4dEGSTPLPMHS62qHuU8yQKEMyWxQgwiwCMDqekm8PWKmJnNNr",
  "key12": "358RA58ykcB14jcouiTdXh2hqeeNcv1QFqNocBQfxpnK9TXETcqwwpiKEx8839Ljxw3eMrtJMVbKvUYDm2D6cURT",
  "key13": "2GFhe8JpWp3dzJVuHhy5fNkHnuq9Bb4u6NxtAKVsuJCTgRBjWM1X8XByeGNdxReGZArVjYcS1SEmtbw5URgzhxpi",
  "key14": "42nadfxqc2RJBVF6tusUjh2dT1wV4JVgrGqQ3Wb2QqPZfNayKG5VDFsdd98MsnWJeDc4S1ZA8cFyuLvYY5qnvbDD",
  "key15": "2raHK9y3NybLVbEAFopiuGAmCD2ytzKdWhNNvW3pkEDjAJSaUbTYSJfLrTK9XWBhH3ynerJmiQQB1pDiQ89mdRSA",
  "key16": "4PFMJ4GPnvFqJGkAWpe4urEUdkr19NNytR41wgiUKUpNqVFAubaBc4nu7LU4yqN25HdBWqSJSn3C2LozZ7w4QHce",
  "key17": "4FisVzQ87TVsQHgFTKFyxLhVFuozoBLNSjQvbM75BqLSQLAoWVjsDDFt6X3BwQSSKxWv9WdeEA5jX5uFLRwm5Pzx",
  "key18": "3dUN9ESWfEeh5CNwMgbRJARvQZat1pQpr97ELFkbGbzda6wFvZdhTJGUfBuwGSyNGDvLLWejBWjGgvh9w1WoxBFs",
  "key19": "4cVzQaoKWEmPjL1H9yuu9GbHL4bgK9QbiBcmgZp1wkKie76bdvam7GXZe9iFoSkvdim9kF35FZQHPvuNfekZSiEo",
  "key20": "3oFYg69fNKS5L6WCLJEAEW4yZppAXBxMXygTsbpnmAJBsdVC5FaYSXqo7YxBSDk7hP6bQjskHfqhU69NGfMYjF5z",
  "key21": "RuqgSaU313B3H6fg9SXczw6DwZNdcGRcR1xiQ6mvsN2RkCN2jVQo2TkdVn3w3wtUE8tAwkMmxV5FekqX5dyUH6i",
  "key22": "583Kahn3X7dLoQBF4ssvXhUugMUAvK5njSSXx1caH4FQNEhjgSJKFPscK9NgA68SbsRVdFrVvVCR2e6tLcGKfUP2",
  "key23": "2tDhGmLTopBk1Tsbhiug3tXtPtuzpzPGTbA7EWhzj6D4aCURHj3onfcV1GaChwub8o8jDVvrvnUHvM3iu3LXyv2D",
  "key24": "4z4VKb8MyH71f3VhiTYbhBbF6URF3Yad8Yw1Bw9UuQWv7XtSqVwymK95RJCBzN87ReCWyzH93AgFBhmZzsdNQLDi"
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
