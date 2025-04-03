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
    "4wPpGtXwzZUXBxjLoEVqPSDyS1GgNGo67mq6dRnFqzY7N2ZDueNYUnPZbDbW8MPYMU1YUiGzsnwA55wSrrikdWYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzL9GrbWixwqntAmuk5XL1VhkpjcWXzk562QjG9pjLKPkzHDQT9NaYVziJLP2J2ZJZRFiRkTGAWT45pK6xbQg9v",
  "key1": "KtgYdSNVf717be1kUH1PqpjqGCy4CUaUHtngtH5meo6h5Ca1N8Y7vquS11SAjX1mfcxazQRGggi8vqAdwLSPdN6",
  "key2": "4hL1U7dq4bVsXqH5BjNTJFa7AvGtQ7y2nUxQbjgnkRi52vaqgUiqeExGEXC2Y66h8Ho2jvBZnCJtJUxU13u6VMVC",
  "key3": "5GLbNZQGdDaJJ7ea38ckQ4zvYvuVgwyMhwVFSujUxGLvnZLBAg3CXe9GqusHNasyX4DDEvVW9MvAyASJVb2HwV8c",
  "key4": "2BKagCC9wSVkJb7SMEVbjKrxtDCio9qiR9wM4JhTRx5BWLrBGb2TpmG7yRG5Mu4UW4vdzRwd49GV6LeMVPBwcG1E",
  "key5": "gKjqgxrsQjzNeJ33nJXFYPSkWN9fGYUkV59zprmbUH58DXR4qAa2XZPB1s9g9hw9BtSVuRaoZcBrj9yGPMaiN7M",
  "key6": "4LPE2LL4SMT76RTieV7zaAL2kkuJDA9EY6NCSrYMP6T55T6hreCTdCMj7wkgWgnzG5ZTHarkofodXhF56pehxnzM",
  "key7": "66ssyFZJdFKBP5tid3RvNzf6NUEoanivSohhan1wVaxGbnow7wMrzanKt7MWVj3MYe8vtygNi3ypYMGyKe3eDwNj",
  "key8": "3CpKKBZb21fgSoNJtZtmt3KiXbWD3HR7p9HuaQ16RBH5YSSCBtMk8dJZ1v3qT3r3Yy3STGpKZ4PCWAEFfthx9XcB",
  "key9": "3gmQXEJDdFFydXTJLoV7FgjuLMLufdET3BChY5mHnUaExTGXGZ1gkVecymAYbYUvQP7WZwedhoVWRFUvGntE3Rny",
  "key10": "2EoHsqJqY7dnAiBifSJBL4KKwgAmVKBH9ZQkyBnDjV4upjqGMFZ34byjC36scGSxWQr4ZFckvFa4W3FYwc3p723t",
  "key11": "3v1dUeipucHBddojrNBqj5DHeuWYXuQ5uTuZ4Ah7QrsewnhU85xrw7sAehYExgppig6rGZ5MMFGrpv2eMV5TDjig",
  "key12": "3p4kFuZzK8Ebszqcdb6hnVJPabUUVoATNJaVUtKeuYj6wAZDn87iDLaHwyp942PpjTPBx117kTMddYUkBSsDgjr4",
  "key13": "3Y5q491Q1Xzv1wopT4SoiKJg6kE9rF4Tw5jMyUKUc42yehhszmrZuN8NtdFkSS21v8BFHh727kgNzsfGgXPzwb5x",
  "key14": "3YUCS5YjUqjfwdLJKQJvZM9abRq8LbhLFMJHpAmc7Ajwwp1BrrQnW4mRmkpfQ9XVeQhYGHGGHbtXYpq2G6Ejuc9R",
  "key15": "3wcBdALCwHWkmthkubgyJ7JbL1recGtLtCpi9LqU26Thu58QvdnJoVXKzYMHCGMvMDejnrPUbdegwercM4hTuSa1",
  "key16": "2jKqJ6qiiNyzSwSkPQvhjXwt1DtcppwH7XgA1PSpSw6Z4m6P45Mj7GK18K1zg5mBLY4FaJ71DA32widqRyNDAdGj",
  "key17": "4pJ4x3UMxVY9xSqreGMPWRre73Bd7KYCEmG2Fa3YaxXELrjqvXn9RuhCFsVmpr63tacnZD8JzbvckRFQKejKic5R",
  "key18": "64qwattqR6uFb4fU7dFvUisPtUpAQTYRhohdGmEUkQZ5Mm1jQzzJCyiQXKatuEHJ4bKKgqb6JMc18LxcHggeGdBB",
  "key19": "5jvXEdHXxkMYhH9JvJa6L9qRMjTDU4soJAun6L25utvAte5RFjV3SLrGvJZfVvuyF5DgmKggZTo2MFv4pAKFBM2p",
  "key20": "3pUiLhfdK1qBc4z5S42U6YQLNL27cQspkH6VgePafxiqEA7AjspVRHo2DUD8bfRb6asNEWy9D2H6J717zL1bUfGt",
  "key21": "3Dart2uuPXANT5T9ieGKEk6m9pRjxuczqZCgbdLz2ufAkq6JT7R5enRTdzxhV7rrmr1ZiWxxtfU4HV94uhgUAuA7",
  "key22": "4JXtmuY7t7tU9DqMWNcG1XtwpoYzwbSmxVTGxNRkJh8dYyvRN7k4dacJfXAJkmzg8PLh5fbNUczimg1jN7NNjHcY",
  "key23": "529y6H1BCJWySY5p3qLhtFmDYFHtjfwGsg3SjdCSf6WKaQfMr3SnhyL72DWgWNG85WfyVv9D9aVq9rhMLeS2uED6",
  "key24": "5VfeqE6PPSJSBjDQdkPtuxBRtKJb2KAFJqeFRE7iVjbCKuJafc1x6yawZcLZmjftH8JTgVsxzbRd9YNtzirM5GeY",
  "key25": "2MDpTAoSsEWHW8EK48gGmgKC1aPybqoUnApu7W2bfEqSoLjJitL5PMRT2gC4siLVT3BkzTSjB31hGbhnAqaCdrRf",
  "key26": "4ednuiawdUYbN3iaN89Jjxx5HfJPipsfMSEA1mxJ78AFmh1kVkd8D7DdbXrrXMnmW1mCG6CAis36y6g2RAdXLeBn",
  "key27": "4A7NqF7RFGD46sdRWrYV4h2L2HzdbZ3dF8kjbpDjMNxLS5YArxDcsZs4xArN3WQFFSmcibszXaFmXfxmVUpx4iLA",
  "key28": "4g559y58ADGM9yW4NZ88tKKemjNB5hu9wh8GABuiew5s17PRvGFHmuoGFYDApisjNBXC3xV5QvYHcnBunxedbGFq",
  "key29": "5H6dDYoScrqsAJfoVkNx3SKSjKPMy1QNnKJywqogxzbRrEjuBBQLecvf5CdtajnEBzyAki2KRFavL9hU2vRLAf7W",
  "key30": "TH3mzs41K7U1WEeeq2dcy8TJK8Lc5B6rkZJNqG3yPQXbGD2THiQB1h8wKBgApo8pJRS8LKbov9vQ97FtwKYQHKU",
  "key31": "3CVNKu3G5xb3TgwMPuqnsfgzpmmS7P2Kn8jx2yzPLZF4KTFLFo9J2br2JkhyUi7h6U7cizQ4owFV6SrgheU8Q2rq",
  "key32": "4APBCUAGWMCuwBYMUvBS8eMBV15ZVuR3qBMYKwtymZ32HQZSyqB5s4KKRJpRr8PM3FkL1dCGHm6g1BYNwz55EQws",
  "key33": "52G6iXi3Ku31VGfJJQKEfFiV5CFuYjf4zAaWpJkp8qUsTmR7UtMmsYDAqe8yAKqXu2nqAEP5pH7FjmLcLLbdaP1h",
  "key34": "3ZqJ9nWz8YgicgkKEvzWqmLxTFT7gXXxvS3gv4AvzJLfxv2bM9GeCFNnEcbcNiH46B8bHJPNxHYWiqwwnj2w1s2Z",
  "key35": "5E4sJvEdercnGUuzJ4pF7s5rgsDvGQiK4e9kWxT6vA2pHz7JeQdKFRsXg6bsjf8YuLBtCm8hYyUtCEUTEvc7LAHo",
  "key36": "gGDLum3j47k2JMQWibWziUsmAFyLjMjNCrxToHyBTnXTriksYyEn2B5jJRss7i1xw82fsgazSJXDqG5sVu4P81r",
  "key37": "3XjVLoxPbcwp9VxfF2GL9sU1ohbo2iCV4vHY3yw15d7yLSYdVLiNDTix7Y7sb58PUiMznMCnvjcfRXfddKMVxrAC",
  "key38": "NWvC87btnp8mEJWbpMz8b2aBtorKwkKbq4CnaU8uCcMJxt8Sq6EvRLbJmwHLBzVgRdAnuk2DaSVdoAMKRMGDyP9",
  "key39": "3qx879Hdx9UGgqsyTzv4LoUG8DBr1nvfxAaMjkZjT26e6L3vfW1XRBwffe4a7kT3KJeLBkWY7zX1uWHrzkWjMSq3"
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
