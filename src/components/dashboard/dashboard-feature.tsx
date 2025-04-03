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
    "3ejKdw8PvcKTJhCCp6nCQCefrHojjTfqow6PFQmuphoXNHxFgeqkEwkJxLfRnhcFsCvYQtZJgc2pvzCTimtdxXqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "njrQbPcZQhrnqQBz5DChA524hbH5n52ibgeW9X21MdxwiJYvV5v4UZriQJzxdDHnFbZefsrtJyphVnwzFTD1zfe",
  "key1": "5Lbvwi4oP1j2aFLVrx6jcv4AzgkDEysyxWwRk2puSBkvaF69QQtfSr8wJVUdEjHtNdqSZ6e7pq8xHpAx8AU8wquQ",
  "key2": "36U8unWt2LVzFtpquQjeVmKuee77YmF9PT51UVVhYbFggXXJGESz9W46tcfdgjz8CzZQGL3A3LmD7adx4BtEebwo",
  "key3": "gXn1RVLwcgfcMviB2HDXVAqhSoCsE94QpWd4uMA2cVHTDeNSaqqgceF7K2h7PdX6Grdd4qsmwLLeJqX1itZZF5h",
  "key4": "KB1rnZtNsvHAQCaotTJPhwkajNB9LDq9v1MuTFqVf9QdrPsZ17sVK37FjrrEmU8Qprk4GFCwQb8CteuviXjqn5z",
  "key5": "4v454MvaYFxEbAg1QisWc8jadsqTy6dtmn7Aj61ouY1ifE2U6HWyuWN3bniuUYB5jE7oq4sEVctjb9UZUbb3bqub",
  "key6": "2HpYkCaaTo6aWLRef5F8nnQPYoqLiZHhicLpxBPdbuin3jbea8AFq6dbXb776tGwarpBy3ZfRzcAdbfg29k9dCST",
  "key7": "3Pa7z4grWks3M16C58n7X963WmboUAVAwe9rXAUY6cKgEUWWTLfqLgVgHyEJ2gSFRtvTPShM17zL4gS6AhCnL4y5",
  "key8": "2cAyXVVwvdXR69VDPikkJQBGyqTQRFBXsGLeGjXDriD2w4vuHB7KvDk57aJ7eWx7ETYZoDuKEAS6mcdz11kBzGnq",
  "key9": "3kTiRDwRV8rueFCZt9w2hdLWMDp5qk7N9okHMvFznx6fH613S94cHiNUSQWDxwiYV46aVn8mMSofJdUvvAP7nbbC",
  "key10": "5z1ZBws9wu11LcUrkTVP4JHJ9ePQiH1mEJfB6tQHFxAUqbBpPjWFX4Q8zSxGnBH51aZj2xQ8G74bDhm8UeYU1fa9",
  "key11": "BK1dpqZjcsJhowsLvDANs4MFt863ZTaochusLDZ3wQVTcSeLjPZKRMMCZMydAGW4dWQvJnvAA1y48UTVn5Rcj9D",
  "key12": "2HLC8Zq1BTvpMHzVoCcMVQhycytEbmTv6yStCKgwH1cQPbvJtCtHiibcE3wsLYqDmF1Lfzv1VDtK37MMjh86cT4x",
  "key13": "35anzcAhmK7nMY4UX88fMYcg3goFS3j1Pne6hdJehDyHNeDGe3rWnFkCM1M7isxjCR42UoBQs2pVy7iLNv4eoQYL",
  "key14": "4wWehacZMGY1AWVMGM6qD2n3KLRe95MWZ3B9prrLtpjrgVjTdjMy6z8d4HyBzwSKdykVCvYydmnNVutnFMzYbYEy",
  "key15": "5vqmEM2K2ccJtyq3xCy5EhUXKN4bc61HyQs82SjFkwSQSV1XpHFVcFVCKpxhRgD3ZiSHgZy2kMbfihBKwyx41CXd",
  "key16": "3PTBrGEkbziEiXBFR1fhZH57ZHBhLGegZJmmyFxqXJXsHbJZCw52WNQyUz6y3nyLoVu8CRFYGZWWggTRtmjXkxVs",
  "key17": "4pjEHLSNkAca4GJoQWANpNckY7Cv8sCUDgZH9svGVNY17rT9nP1t56oCaA1EVZDiWH1m583PLPjiU1MFDiybZziS",
  "key18": "rxsgKezs3t4op4p76QCeQtT8xdbW1SJqrPPajAhCYPu2GaqvnZhVDqZrspKooAA2NWVzhToY5eTtScNmCZ3aUWA",
  "key19": "2tFoFQScaydaZRxv4QAR87CWerptGHye5itXKqjpX8cGD65mYeLDa2hqGgLULCArhgnSYxeYvddgNGuovimYTrzQ",
  "key20": "KFQ6ZvMe1nfbRz5Nh6icUpmF9PjiDuQkgdw8zQtV1GMf1YTQguhiEL8QiLjKT9aSPfqPqjdtviCCsdknmUnqWpU",
  "key21": "3i8qZEk2P8zXBanjNhrz8qXgipC5C4nevieGTXeib4HtjgMKDJM12YNisxLKZugdAWyDZbeAeadL1LpojikTAznh",
  "key22": "4fgdXh6gsPTmJwy6grfo9khrgpmnDhpJMR7AiYeF7MuwREjCXdSK7xomYtoTgiEBoiT6UaPYifG2CGWuYFSycE86",
  "key23": "5KfYcK2v3jACYVvcoxvbkbsxCvJMMTK6VdY6hMg8TjF9hSKNYhk3z1NLtJXNNA1Q6uBukjN9bEYFYUirhd2ogSPD",
  "key24": "51ij69LZr3a7cmz3g4ENustkrhk3nnMYYmEPy9ar3YaayfiLkGzrucv9eSFrBrJ2QPBgjWcBghDMq7ndrhSQyLZR",
  "key25": "2m35oSRR9K5UuYqRiAYgZPPBJDR7twSAo7VUn2KyuVZ8ajVFmryQe9pwW5gNNCNkn3PX9ShB63LvVKx7sxySM34A",
  "key26": "4mz6dq8k3xm3UWiWNYVmh6kyAN2jt41SoW48CaqAoQrU955VTJwgY5QQ81Fw4aFJea9DgS4UPFA7kFP5xk8yHcpy",
  "key27": "e7XnNd1B2GMUjUksdBt172ofXnw1mBAKKrV33F5tGhL4K5Uncz4xjMVguZfFdp6z51xZv8XuSZXtxrkaN4vAJbi",
  "key28": "5VRj2yBjy7xVqqS4a1Bmbn9QYGcV4HqFZ2k89qq7QSmp7ZQujDvBaZWJ4oqS3vNN1KdTGbJsdVVq5qAfasb5tEd7",
  "key29": "67G5ZrvTftswVizLrmtewaFRyixKWtVBoS5WofBcM5VJ4owJ6SDiTBZboXhH8u5zTss2XWKZrH8aR3WthoxDrafc",
  "key30": "apgVzurWyuXjt3YCeBx4EMvrYeZb21EJR5KXuj6dGjcjmL4UiNYFNH1W9PTeJ6nyYJckdTjSxjPtTfkZzhmueL3",
  "key31": "411ryoAgTkNoNKR2hvYBCKt2srSPXYUS7n8ANhF34pWmW2H9uEbdarooPVFzBddPXw43nyYVmu6WkF75CDCqneoa",
  "key32": "2nC4xqV6Ne7PYPNgmonFGw84MHGk5D2BJ778pMfTffrhCyxQn9dCoBJhS7ZxPv7EhnL1D77za8fd8isVbWcbU8hs",
  "key33": "2JqBFjj9ozTdveozD8yqrp78DJXHTfRCh3y9mY1sXWpVyzz6g6Dg9iKQkfNWEuwKsUF8mfbP2cCNBkTpJzwwHfnn",
  "key34": "46hTnGrNwWDroWVB53j7wF5VnoGEATHuGe6n9BMyN67hk3CRgzYq54RjcYW724RFuvkxBvhPUF8jRd6HZcEYDc1m",
  "key35": "3JaFaGiSPDubHVAmk9rKFRE3bEUitajYTZDCwMveEJuneoJiE6sQ3A4NaHY2BShAyuTXUPw6zRb37TBsiEAafntV",
  "key36": "3wp6vBUcVgKhcfvhFUfNMnbmLHjbY9Z9UcZsxNwgQF3bdqVXfiove611ewwk8HwZY9H7sSpjxU9B8KjkD1Dq3R2V"
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
