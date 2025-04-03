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
    "374E7sGwXP7tJmrKnhMSWLMJyRGLDecnmxR3mac7cE8pyoqNaE52ekCnb8GJienYaywNaKKLcr1wkDeDFWCShBQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wutji3Pyd5PDDfE6zjghsr5kxSMHjTk1ZuBmUSZxDD2N7XWbpNbnymUsk4WYMiZTHon6mPkpASJYVqsCNCV9xit",
  "key1": "5XW61vurkREJpPcv9Lt7eoPZ63SuTzYF2XDn9MhRXAMGkkEqxYvZ5HnyRc2Ym5xWqhHbPdhXTrVfNs75ppEN8BRw",
  "key2": "MVYdVgpppWJz9KGySdaLvum6UW9ZTbNhHHCAqLKjJuXB9LiXGPYj9w6L7xrTpLVUYAEY85jcFbGLxHYzWczzg22",
  "key3": "3rTeehvVx6T8yxgZLErmLGkKfGtUNNhYbX4atCyFCaArqCMMGYyrzHQEeYwRbCSvtCh5j1UgaPFaVjE4AbRUh3gG",
  "key4": "a3HGTYK26WpzWUtWCWPMmNH6rMLjxNgc7dwW3kxrNEfEeStg5LpfMvgTPycdCR1MDtNmVNAeBPJJsXAuFkzTxH1",
  "key5": "2oDwCeG4Qe3pg6r6MhNojWULCDhtGCTcvfdpvSBfgYNs5MREA6BA8UYzmacvmcuMRsF7LRpb6a1YNwWVGYEwsPZR",
  "key6": "s23DsSAsG5KnQgakDLDH1ZTPa24K1oYgNQ3PreHRxBiziex2GhyEucbpP5fLB7NbUcUUbfjUcpDMytcDizGLDoF",
  "key7": "37NBtdMYgPnR9kkDvRQ63jvYarBng9DEcz6DqbH8P56c1LmauaYQn4KnDhj78FTR1ehKuEtFDGsWd52RvrVPZTN8",
  "key8": "2Cr1W7Z3LQs4dtLwD7TQgqPWikh2jTqvTUBxMDrDue5o3crYVXptQ48M7v4GpsEqEhtsnUYBXJxP255YrrjBXAqz",
  "key9": "4pXnWKnwvCtTevfna6DGQ7w9TNUYdstjJwUrMSUJBpwLKrvJWHd1HDMvdbUiEGoUq38vWT4Ct6ssmJZiHUDAwd7C",
  "key10": "3sLX5YCKUAbDnrDhgepztgpQ6P2mYCh7cEFjtL2WbXRzBLEAq45eV47VqfT2DsYUWqDp9PJBwnhE6j5K8iQh3Eq7",
  "key11": "5BWcLHNGvJXicpwKtHAXoCPM8mJNcfzYRTkrswEr5EXvSsmP3mvVjSgW9zRbpiETxcznYHz75UtaEsFpG5JKLyKm",
  "key12": "4sjq39HCukpt65aZNe89C57n1WEq18jxcRfQX2bGwx2PiDgWUZoK1sj1JX9HDupQ7mbsfXvonYvb5sA7zkhGfM63",
  "key13": "4hBLFiRtALAsMoPej2AYvMGwJCGAk3EZUoVkLQCL1rbT3FDeTdqVqdssc4UBDU7e5Bb8EsCoPcMJt4xJ7PAjZ6cx",
  "key14": "5KQDJz8mCnKiZ2dfcJdipHpCdu4Kvk7e5T1E6wt7erEED7PqJWgBxJj4nVwjnQQqYt9wmrZ44aWBWZ7VHDe7zREd",
  "key15": "2eQyyXnAtpMSTLfaCGzQaS7n4oewrjvFky2GdwAabcc1CTyTV2kF3x2NNAkvbGCuF7dSUn8e2UxXus1p1NKXirZG",
  "key16": "2LGZ1xantxhvxUNQAywVpTvFNGzsxHNeoKD3p3gQUgpjNrLhQiEAQ5x8od6mE5QFMRnign3ML1WDwMb6Rrpnm9L9",
  "key17": "3ghDWn2Bm3JAFLjVYv55pq8aLcTshx3PkgFQFFhBXwGVe7nKysmAB78ZcXaSUkBqvxmJkhTwnL9X35RfDzkYaXMj",
  "key18": "4fcjcHHjYN1CqTd3QGcN9xn9y4GVmeHJ39HR6mL6jMeBEqRe6aGoaZweoaAhGBRBGRTSbYs93c75vzSJt841E3QB",
  "key19": "5hMdv3g3jan5icP8ULJCRUbS9KHQqGf4s5XpU49YZ9sfKu4o8TphnV5CYd4o7HvFqrXkBtZb3Z78KZiFJajQuoHU",
  "key20": "4Qtrxf6A7G6HMCCQmEjBb4annz8A4FY8kXEZGFDtXpGqYquQqaGHrt19njJMtP2rha5FjqbTgyxpTwqidmnsfM5w",
  "key21": "4rYP4qFfa7otmPxvsNRMXapaPX93SK81KWf27XUJbN152UJPWe1tYycwTF3m2wJdrJiAJ4aLH9wSc3tsKcGg2erz",
  "key22": "4cBhbirh7yxNoe2c3ZxUzXtwS5XiX1EEXs8CW6LLYoswiiU5duh45q78Prexn3ZRwmGHGCKEB2CXb9m2jfHJebZL",
  "key23": "4Cv33Vi84nKkw4gmNpeNVE2U7mTFrX1Rr3tEJ2yzpGrN5KYH2i46LzDPxY19aDJTJPeQKEY9kKk31Sw4jNGVUorg",
  "key24": "2N1eF1TR5jAkjLbpo9JFUL63tADVm3GCxAKDkLQMTRTTJ84FMUXSiUgZzNcd1aUmuBzFo4ewjhNNUyDG1cumRHH7",
  "key25": "2EvLyoLhsxRKpJVBB4mVE2pi37kFCrAouYWB1uXw2Frw3pSiWSqjR6yWGhBtFHivNhGfuvYmhaVQt2JUKQUDC6pz",
  "key26": "3tyT8dR1EZa98HCeyMDBfPfixi6zHiVnonriwXs6jpAd5F28USX6FiiCGCnh8aTrhXope4FYLrq3qh8sasqEdXjp",
  "key27": "5UcvoyUZrv8eA2RVmW1gZitcaHfTFjwE8jWzjTEKMUbg9YdYa2jviANi6sPaZ8Mutb33cPxmXgYvnidaiq7tviez",
  "key28": "2zL6oBH7QcwsnGxPkg8T7yc4DqnVy5TW2mhnVyopLpUELXyo4kqW7EtofmUN9RyWELcvK6hDYFAQiQigdvtaphK8",
  "key29": "ChUBmPPZfbJ2P4SrFzPUZy2GRzbVQKaqzgc15BBVCuELCBRKXZYXwSTfBpASFWVRtX7QsJQTh8wpXE6bMzKjfW1",
  "key30": "2GbEtdEECEvA4W7P8zKJfnJtXZm1sJTmZEwbdyvSveP2sWKRMY2Y97UUeR9trZeh6gT6XnL4AaV158rnCQu6KP6m",
  "key31": "4ec9fBGAQ5PKPupBM2KNd9yPswksm8JecwqAaTB1cVHspeFrX4QZ9KA5ZAfxchQg6JFRMTya9LEExpR1a5bCeDde",
  "key32": "5UwGgA3PSPWbX7mHTvfoxQw4dRNkGHSdYkXGhr1qseAPummcJDu76HJhwg8EhWonfhwA1ttiM6Fsgu5YHsFA33s1",
  "key33": "64vkmL92MTxEr87iJaEiatV67zpD8sT4F1MGjvkUrPENy3KPHZcihqFo1iLtWDTYjSvbAcwg3b71SPMUpttH8VTq",
  "key34": "2FvPrSGfx6aFx61B6kcpEv9xkrToPRvRNgJmoiWoN8QZV84pvoZ3P98W9WBYQMQ9U2VgmSrP4MSnD1jtvt6yTXoi",
  "key35": "5XEcLfpkKYz2nszCcV7gnLoYgHCoPyji8qK93rG1fQ7WAxvkBLGb9pvD63cThaCXafv9bdNaMTFqXvarboZdRWvt",
  "key36": "4fkQJptu5vSR371UXBFWzun31YPz7ughJWgWknGHgSbxYFKYhmxchomKap6fZ22qzpzAKzvRtnkzgMYnXj9Zk3pu",
  "key37": "5K643NsPe1vTbFbW198VBYho6v9LXxevAmUgn3hAFrZcKD2mNESuwFF6ZZZm7MJTSbKLiqahDSQoXXkqjwERDchf",
  "key38": "4DFU2MrJPDa2Nie4NW9NvxxXwoRitohQ481zyoHQDowgWaurU8k4ptbazo2B1a5b3X2R2F1QSD6BiHLtHoHa1YWG"
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
