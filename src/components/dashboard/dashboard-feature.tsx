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
    "41jR8PCCRFQtBZotXq4VLg8P3zEPEPqHvmh2DszTuSCJZWUK7ijpJtmgfaTbUDnaTmjqF6U8Dnyr1xdhg1Cughw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rj3nP6KqagufLBvUsjvXcimDecSeuUzFEDKTNNQE7NVLnoYQ51bZt4LDrmHdymiMPFKsYFStnrgQywaXZc5hopN",
  "key1": "4yVLcTRfcgjFMPSX6meZva1fAAztT4eUN7X9FBXC9cxUKXpuz2cpeQ9SFtSgY5YDQfFwswUuEFnSHGH47H6mQp5E",
  "key2": "5JVE9iKFMBvTMXNprtxZVe9qf8jGwswGBgYLuSAXR4LF6En7LQ2fbTxyWpnhWmW7rMZ6ri7qDbxApdbRBXi56s6t",
  "key3": "4BscFDis5d8D36bWiWsG5aky6mTcYpRSKx5de6foQnt85rsLKXsEyHnECSKxdqKkwhSwr1aZ4EyyRm9zTW4257wu",
  "key4": "YEJfG1TY5BrQizAbKVw5Egwm5EZicySw2zp8CJAutVnj9gTmae67duWx4ti7mBjXdQmZZB36MGK7sPCtngcu5d8",
  "key5": "4U8Zxg28FVQBVqoKSgvoyQS8eJX7TL3ahFrZ8s8yBi3CYJGvBeLWcGmXtZJpv1kDX8MfVfDJZdRvNAXMgabUGg3u",
  "key6": "1rUU1JirzyFHAXrQ3QSrGZrEE2Hv3nUXvRirg14QHeoiCMxbKgwoC3hNmSizv5kHDznowFNY3qC4C8kxEBjrinV",
  "key7": "3uaGHYdNMvhr85Udxr7iX4nWPG7J639km69wb9QZipeV6wXh9jB8DoagEVXxndMPdxZp8Fy9s2qrtJueyyiiUDVg",
  "key8": "44f4zH7bXTGBK4617cGXkPvGuVVFBzcH4zsgyFND3kAGWF6EUBTika3nH3j11c1ktWFda1qxBAVfQNT8mkiRysj8",
  "key9": "5rSyf57aJxwYvdTvQWCsqfijsrHGNHAy1YH4cqNACMAFPpaXrB1p3aasoKEeEjDPUSgrLGHnAmen5P79BS7cmvqR",
  "key10": "3jQTe7ajqeFtGunxrQUomcRCCwm4mXyUgwFJFY75CTRAhxxcN5GDjQfZEuHRr4jBsyG8kmGQPVLsGpbrDAL8pJYb",
  "key11": "VD9CiMtGSZxUZYLyQk1mChTPrxSUtbneGhG2LaaxjB4UwNTyvRPiGS4kCYpHj1Yu7bkaktUu98RwZGk4ebSMmzL",
  "key12": "26s79FF7X4HUz784AmBvpmWMhKyv89Azm1kwu6CyTmauXa6tg8towo5FiSuo8aDq6AyNGWvJBbKiqvfGp4dcW1D2",
  "key13": "5HhafbyCu1FboQUTFfkao2GZYS89ZDpG3vMmDxjL5awVaxP7wGPpLoPfgB4f7ekmsUyGeaRhybW6rjMnewvz4pSu",
  "key14": "5x8uBbqoxRyrkhAkH3jf15JBbzLHmGSU2HSxeLhyFpJKptQxLTcyTrCwpoUWi9qeZQLCG5UXR1NC51HAoTJybwBL",
  "key15": "VbyMZYSL39xVnC9ht79ZZhCgWTiZaS5BTugFWwyjcmKt1kvmzXNGufDHRroJNsLNAuAPhLWiHCvKpimXRCNHXB4",
  "key16": "5bq3jGTUXjCKg8gAKsEkRVsbBApgnLbgS7ZHic3qoRxQuqZHGgWnzNCFeH4RvdQLnnHEHmgqZDaZs4JKMA7SJJfx",
  "key17": "i1W6thAKut2aRzUW3BVAdiTxj97oDMt2zHSUjLLLKuyEg41SF6CjtjZox3xXBjv1s7Dk2S33yHpWHYUBX6za3Yr",
  "key18": "2EnzWX9KwrLf7WXQmRBgSFGdHuZqDeZm2Dv6XSEyR4htCsTdDNDJmRt5aYMLXHrmq2ScCvSryKWKVrq58HRduUGZ",
  "key19": "2XZ3rCn9GJAkZgwGxWQ8nnhwtcr2GphWVrFB7oSWBYetubP1DrnqgwZk1FSZZEvy2z33YbESriXPx8LMYX8Fh1Bn",
  "key20": "4c7jaLGV6wQW7TuibARJpip63nbFrQ2jdRvnbsH4rNJoUDPF2yFRJopWESA7y1noFium5jmeB7kWhiThQe7LrZGS",
  "key21": "2UafU4X58ai2N9wNxPezxX4UcKiF6PeAUfcHDVTQhmKKQMzAGSUKArKxiLoPRygaaN6BBYWZy4cpKV3v9atnsf9n",
  "key22": "4QZmgmSmKhuhvrqtAybQZrar171282XXLG6VLPx8W5Cn9UBPrRErnxK8y6SBZgi5uVjYVLqCmjZTzaMoRMnutb5L",
  "key23": "3Fnd5RigRyZvs6rRHnUaaFeVfUTKSeBNENhqa7uzSSNAWVQVQfoZ6nR6qgTSKjqqnsQfEwCdwpPj7n7h2wux7RHE",
  "key24": "sqxGxK9tPGm8xTaN4udTdcwDmn9s2Ug8VUQ1w2KuZ7cAjQK8TvmTQhBbYrykqkvL67Z5y5qXhDfPLFcTxt4KAvd",
  "key25": "4JqKrYq8z9vA2VoA9MGD8HiRf55Yf2eaFtadAGU1corqpQLcwjMotmKA188nE6aUkxniZ8U2Ej6j5o2QW5JE7Mut",
  "key26": "43DAxj8e9WYNa7yCaEMDq1Ek4PmQ6NXQdY2SFEZ2iREPeAQbVgbTVXeC6V9SbTWvfrSDDGABwRWgzqFWp4tPKXFY",
  "key27": "4GNRHshSZPrpWkk2hWNLcLdXEpHF5aJ54skUUH7EqTrVVWfkW9BT9nePWbLHNfYmG7FBi18z4DcMb1RyssZ5dxnJ",
  "key28": "KFtNu1rEmjVxfycKni2Fuz4McnvCMrqCU4LxM6qTs5gHsTZ3R8VFMbMqDy8napYe6RWuXvxFxM7X5xuu8qxsWdq",
  "key29": "21egM8tvUojMvAY4eGgLLBKbiCF8EoNJCgeX8jgxXDW8BB5vRLqYq8LftXripPg59k88Pgq85sRz6hhnP3UVKcmy",
  "key30": "Pq9PzVDE42Z2ZPhy1FP4my2hrBhMdF9dgNhvhANdUZKADipmYCpNxxSsrwgLtsJ31fGqun9UhAzd19grdmR1soP",
  "key31": "3Vc9bt3co7hxDiNpWcEZgCGmkx3hyetYRWZRsrdfDYtxJyF5DWmpJ1krrdX6JXL9Wn78QBXj7avVT7qpXFBAM4NN",
  "key32": "3QwtJnpRvfvdxQxXbYXKqik8vLees5RFM4G4JLKxoQM83GmFXWrvHKkTNBCCBPkNJzZmY7hPkRCKG7htDYoe5tz9",
  "key33": "5iLGpaao2TyuqMwKAExJWBJT1ddFrMqWxCZaMaZio6bRBjuymK4dEE4JeoBfJB8EEwdL7hBJ2naC8BDkZ9mcBBA3",
  "key34": "5yH7jRBH88ve8nhujtGfB5yeDpwPMJ1tJHxK5kSbUqeGMwjBZ84oeQmerGCVUEFySeNZGFDPLKqwW6GQsYSDhKyd",
  "key35": "3cxFVMMc4ERVhUarHi8DCV5yhhaMbnFg4H8msYjcgb5bg6DtEFuqTduSrByfNMxeDxFfGEY59DePFK7CWVVCKjsC",
  "key36": "AjT9XrMBEGqAUXNBKUEikmLFrm6dj1Ro98HHQSLExzfGRMH7XDMEQzGvayuMXBFHgeubqVKFrLpaUbRsbv4mYm2",
  "key37": "bYedR6c9Qg5Qxnh2Lcm5vPSWxidMJ54CVu5bNXziTZ9n1XfEZFXKvXoCoC4eY1ijRcQXAjwyLeNyPbmECN6uGVy"
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
