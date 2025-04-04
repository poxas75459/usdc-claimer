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
    "3HbgpS8eT9aC14FMhJ8L3Zpf64MtdEhiMoXnmZDj7DKbJFcfMZSvbAZApEpJPqPhnL5JuSCVbifbgAFF7efxZCLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P4u1hzHizdhn4rH4csGeLFyaPwuaZTmvT5GGh2GZGNorP7LzeNEYmocgN8CYEJXwVekXvMDqaWvFbizRmk8mJMh",
  "key1": "3pY1i1Wma7RE5FhU4AZu7r8Z6BcCsh8odYjBuKQSxvNPSCkDDN42SqNkhDtukC76R5m888u8P16p8WDM2ofqpXrs",
  "key2": "ucZircjyKUGNMsJWqR752YkfFyQiWevycGLkAQxMhDQiAS44NK1FBWErUS1iFcEQ76eakf1aULEuxtzKtKCi5BE",
  "key3": "52Tr6NV5KticZjMn6ZHexpUpoWyU63gAE6JuPdqTYdc3qoGfANUtKSxderYT8D4yc3FfgsbNmyysoa3ChCQKpoRq",
  "key4": "2ptBkNoxNm4NKZvcMBkHVXnHKZKWEw5RzHSnVC3jccfKm2nU4qMLqEAKPqe8E8TkkNDYNKJiKQYqJ7w7H9FT7sUX",
  "key5": "577424uRHu1R7B1oYBuJBdSPG9XiAF2TH2MsHbsrc2Awk6rBJZVTXrB7oX5tKgSbq6GPU1EE2XXQbqKQGnh7k3u3",
  "key6": "4QCRJjb7ABF8Q1QUVfzngSzdnkicmafDbfa2g2m8Au7DdLY3cv1zH3P8RdMLevRy1MuU2aZv1AbtSrf2pWgaXmXQ",
  "key7": "2b9hH6QPo6Ur6pMUE7QYcZmSpKcHjsKpSQ785rYPLR7aLLzmWDN9TKehqwaSDaQJ8nwTpYKMSXPJ2JZj9d8DueNU",
  "key8": "53dGvfUvnjRSgpJpyUV7C5HfVQB7yseJboCHCPccSPpDxGw7zGQUQztQMsH2juAvSxB7M1imWQ3Dhak6EYLBnP1Y",
  "key9": "3cACjmjqwa9UzuSHdJKh1KFbqpB1wN6DaiU4WhJtHA5A1jTFisiWPKtkAboZe5EY5S7d5Tcj4xcxorerQZyuyjXr",
  "key10": "5Mw25skg5Eiv7eYMGUFmPkmWEQLUmZDwWpuB5oxPiVGcmgeq5TBeM9bRpWX9x4rVM6KYUkdBPkxqtgZYztB1Bqc2",
  "key11": "84bqcJXQEBAbiZB5qDuP4ZxFjzDmuMYPL9c9JF2jdXmx7B9i1oUvssWsdFFJCexZk9vQkP8s3WwJRBj2MumqgTR",
  "key12": "3iobAfEr4oiiEUyJL7NLizmPoc9GJb2GKBUY3v6Qio9Mpa8cCRroWo7RWepEbcqWiam1V6e3mkwo3pHv724B7MDv",
  "key13": "3pcoGfJka7tsmhBFoJzkroSpaJvtSCK3JNYH8kUQbBzpPtbksjGJthGfx978m71Ehjy188mm8jojb66B53e6jMBj",
  "key14": "3RaXLy2XbpagMnD3GMwfJevTLbK85ixKYGBwJTXZao3iaYbYgsPjsDNqq7sx6TvBzmBttg8jBKY7ozAYcyKKFXbu",
  "key15": "5sBGCMhDQahcBDx6BQJqahk9cmstiTT5eCMpXQvB18bdSBYb1dqNFoLxdPBWdEXoHLQyrYpCnHeezSh7fTGedqmn",
  "key16": "2fdTrYuu8He1ZMLdjJPy1727ULMNTYwepLq8bMz2hvmeFNvBaAHe4KsfrT5mfZasSYXmMx4DYW7Cr8HV88SvHnKv",
  "key17": "4soYsAXynUJdtpQ66XeMVxXZeFTCL12UHcoFFDK9YUsnYxURAcbUVP8NQDbDcWShgGJhV2mHnjV7bRfeqkZC1dpE",
  "key18": "2SUBjzcwHbp6p8EQJBCdVH3Np6by2jdLS5SxEtEZekbeLQ9AzrMepfxTHicGYsU9fK7t4MvyfhjLY9aA7hyvHGih",
  "key19": "y9Gb3VFuHdhVfWAZeqKg537az4KZg297Zcfn3f4bAsC5AoS5aj7HG8hdXWjVpouLupNLFjHgBL3zPMzXScdAqFz",
  "key20": "3KZRLvRDwX6EB5zurDudjASGYybDYGwmR2iz8UKqgULVfBJQVv9stEd39iQCKCeTii3XjvXiJnLdYSMKNPgYzgUh",
  "key21": "396NKkRccfu2KibJt7j62v6Q7YBcsXqPfSLmqRufFcE9948QrjkpzZTB2nsF3QhgLmECwg4yy9iBxE9DR5qGpzA4",
  "key22": "27jrXSmt9yTFXRBe8B9yMiTp14tvqXs4EJMiUAoU6sNhKZzCeXWJX28R6kkdDaNYQWkt6qfaETuGs9YdmNBCzWyg",
  "key23": "2UY5vGsJdmNwM4w5tA3kk6zgmmFZ69w1XTH4zpvZ8VnS5uMkKt3yjXKgbNEjyYHiG7dJgZt9y6FH77VYiDjj5T5U",
  "key24": "4Pfw4T64bqbo7HCCJL2gzeiSowLHdYcQmXybhy2NgSvttXfaF9GeJ1fJedmjMuD1KBPi2BpkFN9tZVWp3UwtkKsX",
  "key25": "31Q7MNgdspPwWdCMgFHybC8nu6E7hEUsDWKN3AjfRZVWMwgvPTqZUA6FCfxX2krc4FZ13tHpHGK8kDcK745UDy6V",
  "key26": "CBcpfb7mEGT553fiZekx3ya1XE6CXpuQTJqQRJSCBeheoG7vU3TufMNGEzDcWsCXjrcEhneafj7x7wqWzm7KibE",
  "key27": "2qoReGgoZmekgkRNSTqy3SJcajKraCptwpPdGbTQPYreVS6muGBTUQCXhBZvtwE44iWt2USAV8MTf6yNtmzJc2Ur",
  "key28": "3kcvupxeW3B7iYsJ5fhtmR2RBQK7G3U51JFfFsDpARLJmjZT6h7yXEiBdg2CoK7JVgi38SvtbnReS5mSVnHUVUWo",
  "key29": "54FK4fWp15vpwWXqdHzbA41B7wfSFiv9p4DtCqDgjX1YFdHAjeVhPh8KBr7dT4i9rj4j3FUUERFnxRjDxcMBML2P",
  "key30": "2Q7hzFa1Hz9YWHjgqKXLfXQsa5tedYX2Pk3gxR99gBh7aSwpFzgYudzMFjtxJysbK5EQ267Smd7FhoDYwxgv5JGy",
  "key31": "4iqxAnFTnz5igGxzV5ymQzT7kA5s4JXid81tUBvBKK2bEAz2uZJ1BRMRFgYLCNjRwuny7xAjsBHtZWAMzZ2wwF1t",
  "key32": "HX6fqj4CUYxzfjKKPMAbfXidFDU1HLrH8u25KUhNEwnMP4WmcKC7uSy6LCGVsYvNHTUETMUpwATJXxgthmemQqq",
  "key33": "67QoPnRgMTyfcdiuXqkxo1nVD3fqN2NnYc1UXLDzynYE79whtGaGqfmUTSwX7hKQV9jMG8YBTwtXEt8fcaNdGRGC",
  "key34": "tKLQvC4Mg3RetUJpnasq8hUZy8986KbEhe5oaaYnCydwHuJnnA1c5XwNQPiNjgti4cBvL1DZorvtSJp7s45bJgK",
  "key35": "VsrFBjhWUHjF5tnFqHpKuQwJpeKx2zLGHVivCpY5ufRFdrZ5CWi3beN6P5CNBGwgvABpbAnsGiHwEywWaiXEshE",
  "key36": "22GyTuQM34s2DTnJDjkxPxrYDW2AhjjfPvnms83RqZN9zqCHNNaNEh6mKgBeGx2JiybXisrfNFdRYVmNB7dn5AUM",
  "key37": "5q9tVxY6FhuFchakaxJE4HQgrFBZrVu3HQYEHh9NrNv1yjLs7U6NWv2ThdBtimymQYbG6eg3aUs7T82DP15j8cFg",
  "key38": "5gabxoNBueNLB4gwCNUFdRvSvjqJpJFKRhBFkqCDQRQU67EscqmNphK74mFzaSUrTsQ6tXfPGYBwLx3s4ZWXgsPt",
  "key39": "57RyVXUb7Ub7pEBdtYDpK6M7iUtnnEDeTTJ1NwnPeVwSmaKZUiFMDfnE6MJeAuZ7xAsRzevrcEj6tNY5jR8F3REw",
  "key40": "SARjvnQUeS4QDj81YtMxNr2W5GcPTfT6UtyrokpijqbuS5mwMBX2EagrHtBiDvCExG6korUXBdUYvymdZRnKvNd",
  "key41": "5RiSkAarwnPuTnqnQdx1oXgpj3ddXktDwAcM5gEBWgLSPLdQnL9hkQqfxgpqvLNjtDbXbnGfbZLam2qWFRp2ZCa4",
  "key42": "3AnipVqXNsYBEpnjDi8m898SBZUT7kJV8vDYCJvoTFG9DWbriLA8qgVa4Tx8gBJ2DjWb8GBGBj24U2tsjTLjFhAS",
  "key43": "5PfyBEEWuhqivEGXXoJkTKEWicyPq1r3iJKPdv34Vs2TwS3mFUNjLRDtZETURRWka3RbRZpjgv51ZpzdwYwsqppM",
  "key44": "4BWvvoyUYVnPHDQJxdpNcy9zj3GLmeQTYuAzZHcv2ATRbX8RDM8paqzFfTzcFFQi8QkDWduDQg5SfG9hZnH6xUDx",
  "key45": "3pSS7arskccmwT7xbnRE9PundPyuZsk2UZ7QTzSxRsmRTiJm9dP33n7T7kh8ECcr5vqqPgY8aKCetc11WLdePUeu",
  "key46": "5qu7g9ZCVJUp64TVUUnERf1ztCajuZH83DozejqyPpKpRCmx8MQrPR7E9DTnKts215N34xZc3QPuEyXu3WC1cLNt",
  "key47": "3fxfQwWVrKSJPP1BUUPhQZdgb86i92MgBKHc2nJ5jp6fgLQzMjY1xneT2od4f8HsajUH4A39hbZCft2ZXmmzupbY",
  "key48": "2n3EJxU5BkD6KGHoH754xsDLBRBR8saEaCNCuJpLzyY8KrHmduvfgLinAUJCEuRtko1uQ5CXZ8qEGsywE7zNxnVw",
  "key49": "9TAznqAzd5t1hr8iQSVEVh1GYe1FPciQz6WuKc3JKgKsFST7naEKaMQBTWFkMWGLuVbEjQ38z9cdKWwHGAZ4cVv"
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
