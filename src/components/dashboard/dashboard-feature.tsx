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
    "5JZyujYjA1Tq6ogamV9Xo9uNaBxjFseemZxyuSYfcwBpdgztmnfd7f2g4uwFKUFwt9HjHxaA5BxJpyrowbYAVHwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nr1z2v1E4shZ1o5TB8diDASVv8AHZWcsuUV8gidU1MtmJWs8FbhSrBmtwhKYS6Vbn6K5fGUaYiieQXHQVDpEHQz",
  "key1": "2F1S5C2UN3dyKod69HedqE4Z1GxW59oZqVrxN5sJ8nDz9YLFnGxjkSBiXyGuyQ844uE5DfDPmbYsisv1EqJpEDSq",
  "key2": "3HCYsrFNCmCwPk41RWYPiQ3xVRvjrAeKyXZqe4TN9dCS56nRzZtE7fNbAfQB2f4pFtz8CLrPiwPk1yioo9V7Bwor",
  "key3": "3fdr6hM6bYemwfS7J1HwKEwS1Dg3oov6GunLPrw3pkdoHb33Ctu4Yei84gwsDENVyrGGPhLa4RVVD6CDie4EsQvP",
  "key4": "4LSf9msbTkT1kXqZ8rvYK3os8VZx6JKHsCkegzZzytcfd96KoTiXYH7s4fUKpJtZ2tohGf2EMkZ9cQgaQ6WAmuJn",
  "key5": "4xXsYamLKhUejpRuBLBZUQZzAF28aam5TuKGbk37fqnF3GKV4K8ammRBHTTw9otNeJfkgbKRwRQs4UxdeLio1q3w",
  "key6": "5rowLcWy6NMJrzCsUsunX3geDvdW65CAa1v3CRv4JxVwMExaj8hRxB8RhPCL555Qwhq9nmDbffZ3pU1xWT2NiW6p",
  "key7": "5wQmHM53dzPq31d6QvM5M7UeRuEn8wMvNSNCLvViwnKPBNTxFuXTDKnGnaPJNeP1z19JQEcNZzHwih3LBdeZg4ub",
  "key8": "NhsQCaRhVUVvivL8SLHic7fuxPQ5v3d9uXovZzXRSYtUEDvxwVPS8ABKmnx8QtWxX18QcbhxvdrM8vB5Tbvt6s7",
  "key9": "57i63omi1fsDfeuMQSnJ8gr2i3nixAmpEmKEZyaktjMmiNxjrBdgyL6dxCQEJxjAfUREGa63yXnDtTyVVFRDdV9B",
  "key10": "2mgcpVetdxbSXHDu3KrUKTw8nMbDVJTXzDQLp8eGScRy65AbvmjDdr56ZacRS5swan1Ck89X9DKbWhoinrgFmYCx",
  "key11": "4WdW6t5XTxoaJdgbDZL5J1XsxuCbJqVaevK9GJjZ1oquk7fEPuxM24XvaSzb7Qk3H83YqreayTukAjvDXkWhio7H",
  "key12": "fH4JfLsayd4jXBHS9uWnwkDuM75jQHe8wSwAeJK7T8eD6j9Pao2Az3aAFNYavPGWq2KqT47TSgnbCC9EABQELh2",
  "key13": "5BNKqszcEdipYpEMvk6CsW88JTFHFxrtyg4up7HFFM1Y1HFB3oiSjhvJzGEMnHEdmjVyGcWrh3Z6vC7tHRGd43Nt",
  "key14": "2AT9DZijaZLFsy2LhoBhVvtGiPMB3DUYpzXoR8qNsnX8xRAZ5hJZMEG6xr9LXzPZSJAUnmvDnCk6y8nwR9G1qS8F",
  "key15": "4FbxUF7KYe83YqNVedsGEq9zE7x6ZUecnriY78oMxGbjxja78sBQHQAsrRz7mDWi1bAcbw2Vb9uoDFaX1JfBgrbW",
  "key16": "2EjQDi6VpQVyZ2KPn84QQBvipidftYXTfm9uTDYPkQKcy69Cq2XX3ZATFn26oAYBy3pnGJJLupU2cmRmxMGhZqET",
  "key17": "3fcjZz3rEngcUGzGgkrjQLWmfeD5cPLTXq2ff9cjceqZ5qVsx8C3oj9d76QeN2DGGZDWA5Qwh7vhfWQC6Rp889By",
  "key18": "66tMj6XWCZ321LRHo1fu4Drdx883e8ZtMmfeMD3sFLP5qzTVKeUyYKDMZie3JRfSzSHTcGGqbjkXUyTLNCuerXMx",
  "key19": "25VMT37z6kQWXz5eSwTp4kgVbmJZEEHzCKsYWvdZPLYahhV83aFm4viAeP2qqGTQYUrs5Vun1mgxeGnKHpGYCMkW",
  "key20": "4GeqRcdcqb7gkV274gGZtvQFN5rfLD3N4wLGnWiNMMe9PFm49jsFZZRknYZiWwqCAsDPpztt7nx5CuANTy5RtJHr",
  "key21": "2oZT6G5bKNyHfyKucs1sUZtxwGE9Zi1a8AMgBGj9J9VxHHVW2aCSKCPHR6JrfmYd87XavceVcR4mYdqobpWQ4Uid",
  "key22": "4sPtUr7hkoQKYYQzaq6ArTuRmPyD3PfabWjFvV4hecy8FHUd5xZcdYtFnQoZHAn2sAUZc1Rm4vVw1ec9CFFrqDDG",
  "key23": "3cDm2oYmFd9DH5uNDR6KT82ASLbTeK6TvbdiuFfqvaffNTPcPygefQEGip66KMnkzRhdUdCpLP94x4qxQ8seSgu7",
  "key24": "4BfY6fPA52xeNdymuFSbrN36qwajTW4wkW29g2mbyj6d2U15d2ZoktYSHG6amc3J38eD8S89icigc9jfPYaEE6Ws",
  "key25": "55jWZf73yjPJSsrf5UFjTBa77RNzuNjicZ7Dnxus3pgMmdLvgjMX6qtTUUcSegPiZjr8NsBASBN7TtnCdVBdEpgE",
  "key26": "4mHiBSo4y8AoQQQXMaYLFhPpoSZZNxCarKt6ULkiCnWMDkFt9VHFa3PZfHWV69E2M6o9fqEySVCzicj3wEnq9WVA",
  "key27": "ysWpi7XiF39Mr8EktpQasb9Xck19BUevxz9oXaNsiXeGtK8bjhnxRm9KyvmYTjVUasZJCHrmAGvqPgccJKiB3jL",
  "key28": "3xWv8SkhsLGZBCTuQQRZpfPuYe2WTqT9tgaPVmPyL29P3wdYoYBBa3pUd6sDAH7ChSzrPptQJkq3ZmyiiRTjfDyQ",
  "key29": "4bZRK4WFZAm5mrEheVEDtUuqjxsS23vksJJH1L86bSVdRTft4RyeEx32tYuiqVaunPN21Kv49jiXWqc8sL9i4KpF",
  "key30": "2ciBjVJfC2Fvid5h7AcnurfSJJXHab9yVCZj5KLJELaqefhL4p4Fb3weVxjMdzygnQ2tWBd9Zq3tuH3Wb4arC3ER",
  "key31": "XjhV1U3Ao6xaHRjEtrU5mb3feXVZ6xovyU4L8vgcyeWhNbWTU1gXVpbYiR5wqVbovFg5eN4oFwJijroEgfD2L6T",
  "key32": "5dcR9zyPhfTCjhDtgRvq4YMcNviKUUUesXrz5FjLrk7yPdviws7ehBpTicHwffFCgzEYMVtqqhsBSsLrjTjNvk5g",
  "key33": "5CpyAZ4xusLGhszTg4Jo9QyKgQMQepLUW3Njb7FibGz7qsKB1UPeBaYoG6d9rWK1T6ac8JdzCHvzm9XdBAAVz7s6",
  "key34": "kaMSuLSPyNQYpZcz9kwm5mFDsr6oXLcbTzYn2VtRrwqbnsyKL8RAuRAvssnLBvGi7DVoHQEQe6hzTWshQkJQ54d"
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
