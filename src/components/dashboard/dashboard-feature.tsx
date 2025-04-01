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
    "8yrs7p7EjVoSmFE9MLw54Ch6dABMB5FucqrbzRKsr4DSkMMoSGhc5ybHypHztXmdouCc5bUEtZgbixvSYP9sXSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vryNVvy6PYMTyYJnc3Uh6WyB4X8RdXqvanwBR4cQwDsBMP1Yd4iUrXdX33JtPgbJPVZv4mpZc8GZ2FF2bzpKfS5",
  "key1": "59AzYhTn9UVwnpSxyGgGCFzhLttSofcgUHoeZxKYFCQ3EWeMJh2JeFmX5c336nuUy2txutmTwSqoq9yZYK88wZbs",
  "key2": "41HsPsQkxi1tMoZAhHWE2FvBza5Vx9UKeVaGVwpAoA3C3Ak6nfkVEavDvMTC3vuxnuFfefeLWaUzp1XS4y2umH6F",
  "key3": "25ebopZTa9kqRgPLdGw4Cv9Tz7P8FbCVAWTnZQ3JbK8hXfDdvKeTXJ2qktCWJ6LTWvCCEJEuUpv9H7wHU7pvS4Qf",
  "key4": "3YPYRZZqM5UUoVJNgcgsuM8YdCMg91tQEewDct6wKJE5MaR5m6YzELaK6C2r8pF4Jrtn8CpqjQk9tneyQJB2HrLG",
  "key5": "2ScasYPXmeJmU1jfmAjyXvSmtg7EvTxSwtuVn7bpQwSt8ZnqysDVVfqcnWmM8ZJhuvYy8G6WS258vT1Mr7sA4mmW",
  "key6": "3jbHHTeUt2QSXbPLFkbAL5eztTZ9frfyHCRnmDSbfpMuXhrvPQXPsqNi94aTcjdrV6nrGEygc5ajyKnmnqApMu6T",
  "key7": "3DFDxehEeGejpzWYS73gRAzsfj3VXT5fjvarF8bUC1hDf9HFsE1yB1J45arcNhDySNypvJuSrmAeMx3W5exa1itA",
  "key8": "4Ucm2pzuydPr6iKyRajKsbUsh7CbHdTu1X9ugdh75ZNwh6dK7ZvDCejurtvGUPzhMVLUbEtgFcXuuFqX5Ckfn9hp",
  "key9": "2Pn3QthcYdA4Z5ZzHeuc5tpngaY1ECEMzQtiJEujpbpyjMvTWKNLnmuTvs58ac41srjbp6GABq3yQJiZAEPvWe9r",
  "key10": "3Uoat6Sz6CyPENxtZaTgJQZt9GU4Yo1NBm55XcqAmWz4UrxSfqVVa5gjTbVY9RTP33d5SRwLb3uxbBwyw71QRxHz",
  "key11": "4NahG5Wj3cQN5qALkXx9waiVojFPXYA8yxdLcmBC4v9srvHMgBq4nFo5NQUyQ3K1YnFsrJJ6ZGc7RgpxFtopt6UP",
  "key12": "2jNPMgKmSKQjfTi7sxw64ng6MvqWa6MmCG6AtvnmPyeCSavAncvaFHXi3GMvBZzhZV4VUvS7mJ7nXSzofpk1iCyz",
  "key13": "4tatKLNGmHahSfXhBkALnA3rpcU1URk7SQbFWoQTv2bNPy4SXaMEBqMoejcoKrnva9FWPVA6E769aneJr711EJek",
  "key14": "orQ4nQjGYpuG2YVPWfEVZMdyDoXLP8PsXrsT2uwxikVGCq8qy4kUvn3Gind7sHhBzCxZSdVRZz6wHmyUQJWeKHv",
  "key15": "42sVEsMPcxbsJ5DF9zEDQXCpMYEkGEXu9yuGa3qp11fqpGYaqFnEWGBGziwH5bfgc2ncXoKqvCmKv9NCb4DjCdo5",
  "key16": "36JZdjU7ucwkrZuaJjWKLwRwiNcBapQ51egQcXAW787dP2P94ZZ1z5PRMaKsAtjshqYQkSK8u1biL9TbvaDHbHvK",
  "key17": "4gdXZUQ5M6JLruJxkfD9qAKTgf16GW4KNSMLHPiF3rnnw4J9a84Ph56Mb9hXTcLd9eWBvgsunn1mqZukg9Yg1TcA",
  "key18": "4teRwTPHtt4B6hFuhnMkZrCbFMcPmwRLvzBmY5uwxpH9ZaQ2BiCpsk3XSHduCvm5Cty4nywrBzTwK1XXHzQUGzmE",
  "key19": "4MJnAZG9YCKMafBCV67rGVh8gtMtmZ5CQW4aLUuaWo7rGQMFLhsX6AyL4BPBzBNcVzitYN57yEzWbDA6VJxzzYQv",
  "key20": "2QD7t1jQvuhxpRbXhiKAu6vwMY5iU341o3r67H7ZwyKuXEPjBr9w5BxeXgtwknqZYMeJ5rkVkoN7QyTFMvyvr7Xd",
  "key21": "2DyMRp5YxCkW5zutkfp8JMvBNfZ3uQ7XbH4Rq5nJYXxMfvWojWuPAoPM6JabrGXvagzKAbEbxNYnLxzD37hTatxn",
  "key22": "5GWddRPJsSuNBpxNPHs1h8AxTh4D59CT9wV9uFRDpwq6x9ms2mShanLyj5CQ1ov4EVZ5akcbKTooy7Aoc9QWrvgo",
  "key23": "4fQf2kuKQKyAJzNdPzbmiETDy8vfw7hjeqYAZmBYRkTP3MEiKgmaFidKcPTvvzTBCWtTorasdbU7ZHKLmRPAtGoq",
  "key24": "frMDE4MjEoiPXSz5qpLWoGVv9xpCe6bdpq62qyL2uUuDJnXdFPzBepvRz38CvRuJfi64yGXV1Uw8BjCQWQR3RH8",
  "key25": "2sdWm7kXNtFM6B9NBiTjQFPqrHGpZh6Lku5fvgLYdJNEV7Us3ErL6RGUeTimR1e6Ff9trTYkkJma4GeDjL3znw7k",
  "key26": "v6tLRYkUkHzcTFt5rtfAWN4yirMKm4dVx3PV8fBZA2aHsWzseVbJmQaXbM8piZw19MeweGtF1JtzzSP55P4XQxh",
  "key27": "4pDEWS63Jg8zPCYmbRbBD78rHWF5xD1QBmbKsV2Cqg9VW2RbvWXyb371SmG2Ak7YiZWHiBUKRLSPyNhKiw8ktwiP",
  "key28": "3cBPfUYwqFbu8Ucnm9a9jR2Ao9Mx3rvfPLtKmvV8mDcPj51h3mRbwtfozYYswRRr4Hfi3gfTefNoAUPd2CLYBxr1",
  "key29": "3k8WmtpvMjTasbeyZxR8apANbTNSeL4Xtnauc1UN4eTeWofNKa16Q9QHSm7hz95JrPwSYuH4ouotL12YaU2rcPGv",
  "key30": "2zBm2bN4TvmarS8w1iZYsL5fNmmK9qwibaWZmAvhTPbBCA6rGrcjDnHHdSHFPSeYynHoYuDnE9qiJGyx5Wj9AXez",
  "key31": "2frJ9qbGTFkB6UffvYennFzvZWsRi7veWyS97RMEKTXUk41qh9ZEZnW96xrEB1vjiCf4mxoafGMUJcJ5sPuW3Y2f",
  "key32": "6zsikWU1viEM4MXjBue35pnNNBKsAiEkcEfvY18Ek31H66fNGs1fpXMwdp9K14k2c1qU3D9NVoNpW5ysYRvZTe6",
  "key33": "2YBRiymNQHEgKNCnUJvQ5E9k4A1iRzm5sDKsaoqFbU697mdaWSoTceYkNbvyRniabZrUwHDkm92xSbfu6u6fzj6B",
  "key34": "3gEzjpHx819wE1GpHqiJeJEKnr62rzBXzTPsMddLboFaVpmthtjmFLXGBj96E4ugRF99nGwzbs54jHDBdq6pYhL",
  "key35": "58cfdi7rSfqdEGEtr8MuAgfjyoL5YsPrgWxuEu7kL719e9zVcgyXQDyBz1bsTUixkjZy338HomJPCvq3E21ScUxz",
  "key36": "5sNfyznEYmhW1NuCcx8t9nZtuVJ429n5K6ZbxxpMM3CXma1CsCp2FpXyLaJx4573PpFWJPWSqbGNQ88KDmqnAt9e",
  "key37": "5TwXijn5hGbdijByWSoVUb5CyfmZ2Cs4b6eCWQeoGQVBt2K1tAUgTeXSCCyK1RoctgD6g9uooda7d2VzavtR2oje",
  "key38": "2H7icMPju9Dh3q9dKYGR337W4cX4teBekSWsj7qiDUWF5W47Aju4NwzrWy7jggscDNqnkfqZjVZ8xXYqDtsacs4y",
  "key39": "4nx8mLUh2EHgphNYvWjAuotnvqwcVrYMHcVDLzpAC7Aa3vbvvxdLcMGWZt2drJnryBcjHWVPqBQCsX9pmYUbnEGh",
  "key40": "5rtKM4c3XCLQFboSGX6badPQJxZUxYERutaqAZ5FkUdTKdhrHfjGXZjZQaYeGmvXobphFsRBibN5dA3H1rvAz9jR",
  "key41": "4jMzfVegNG9WTtYsHDURkQRrMgnB89PqusJiHMpkWuDbKFvuNajC3D4BhbBnW9Aajsgz7otsWDCTa3Gwmydofwcp",
  "key42": "2GBRcFPquLRwJuZVWX5PZUzyCycZQgkjoPYXrFpZufYvqgkan9TZub8XAR8qVDVERuf4RKEfrXefykFdD88xiLBr"
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
