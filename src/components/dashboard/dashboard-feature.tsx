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
    "4byMBsDyhmyJCEm5z5aQMR24ngCztbRBmLar3CAPnSERCsdhAh8ZUSofn3MLE8w58p8Qi5Z946Ji3eRnzUurHJ43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5axtJicW3iXp4JZyvswMszkUQYRbnjNSss3EcGLKziRDmnmU4ymVgAZE1pyWgCdyohzHXtHemS3vuac5HNHCBgLG",
  "key1": "3zYTVgbpQmz5Hv4ZJYq6p4CSbYcH3NJNfQSJ6BmZMon7AqmZqsFEH7PL5oCYR6SD3Rbo2fQau28PqfPtzTj5DrSG",
  "key2": "5EGBJLXd4U7CHK6CMQog4XbFz9brbPhNdoMRrkgKxLATvJjv2MhrV15B2EVqCuoYRbdJLMs8gdGceguCopdVwiba",
  "key3": "3ppkGoZ1HWhnaewKVLEs9niNabQMKPjwBLk2mzxHD8yPBG9SCDPpidZXKpY8947DZ8faELP9QbzBCgsVvp5CsPuY",
  "key4": "3SrDU27YGEFZ6kWHzCKHgw3HXNRBK582BttXfMxdg5ztFjszhwSDt6VjhtbuuZTqoGByTZVNuGozPY6KoD6Tu4bj",
  "key5": "T9DKFWbV9y3HhTsqukEqGdASvMW1Vp6MJarU79wNR8Uian1ubcoPpp3XFRnXVVq15ndxxkeKdW5d5xyYn3DmA81",
  "key6": "4Z4aYhbqWeo9DNWzz9f2yfn6dSFgwitQPjekxv6GHQWyJc5afaGCqcarmkzjwCGi1qVqqw4bJSjmwBPsBR4L4Ccq",
  "key7": "4fXAxfgkECuZvuKgt2sKSRbwSqFgGT66VbrZm2Lij3Wv9DU4CG3qEEnNqWY358y4ebF6PziSoQs9G5ASDhj5RvHv",
  "key8": "61UGh6oNw1N45XnaCNF56rjmVgFvVbSAZMAm7RnR23FMZueebD3DcJ57x3KybNYhWujj9N4cKSVZ5kKtHkCJkBx",
  "key9": "5oj8hudzBa12vx4XQAE3PprKCA6kKdaGci6kPhHttG8KGfh282Kyhh6mp6AX4Lhrr7YHgDps4jfVvkW8s4PQtPzD",
  "key10": "3VxeoatyRsNxbpsw5Ak9cwd6uAuAJwCYencwvG6oYScrQtpQBiyUwwhEpM6UHVBEjPo9MhYfj1MeuDsw4t7fY6Q1",
  "key11": "3NFkNHBtn2ndUmcReHzD9ceYpqUviwb1VU2cneuwapyuhZMVqTGdH6HtFsWXAABZaxfVwEEu9xqznGM1dWMDNU3p",
  "key12": "5z1EsdhNsrV4c3coYT2UmVN9xg8A1aQmWByxRt4fBHz6G5yYYyxEgvx6dJQEVHurJBmLDet6mEMxZN5rvJCfJ8JM",
  "key13": "RJpqkgMHDE3L1rEGPLyKJK5QB2Q3mAiZ787XKdLHyz8QJDY5z6aBtHsHTgNYMUY1So8h5cBvjgCi6uArdwU7Vp4",
  "key14": "5tBpuBHriyiSSyGV4dxE7dPU7kWgDar3F7fFKMnoBibrwu16ubE2w4jj9pifncyBeviwmBFR19EBS3wL7KYYoWjc",
  "key15": "5hMdv31fyyLyqsqPd3zK6turorJ1EJ77tRgmTVCecxRnatkSoE3S64dLE9XJ4WtisM5JoztheS6g2siEHSJGvjyS",
  "key16": "4EWpFJztrSfK4KKRVAPiAUhB6ryh2iT2FMPMvoBb5BwDexPSRcD69PuacXmF9b5zZaJyUfEKSBzdkvy2Tn6kTLHE",
  "key17": "4BdZ7JJ734eS5Nc9ym1kf3j6E7gmiGwezxm1B8j72k7UCwxzUjYwkKeFfNsMSAXAAMNdVMS2Qpfw2hdDpmYWdvqo",
  "key18": "3Sd19vDivXQD9wWMuqayfJNmMscpKEGCU9pNnGEN1QF3EmFh2ddr8tTzJgh3vyqnrgc2aJnF7YU2dfc5a2fWzQpX",
  "key19": "5yme3ZgPBpAp9Fz8S1JagKVyPzLr6yAhdvLcuk7EPUL2kubRaRJvLg7B5o5HQUUupzuMojzb9avpKJ4eN4dJHa2J",
  "key20": "26rVtjLS7RYH4qxx4RAn6WF1VPNSSuQFMS2ZtatfPDsocyiG6uh1wN92FcYQppGtsayzYpdAbaW4r1rUBghCSRJj",
  "key21": "2LdrB2x5yAxMU5H2Si2GVbjJL9MvfqvKRLwG8VgTSBctyYw2P4NJWKyAyjF3gdfCvzQsZM9YTG8SUvKfExQZNLzB",
  "key22": "2dB2FihPvxMs7NnfpWwQycvFSUXGcN8puDZMp2V1ssxewESa2btqefNVzj1HttEWt4CBjXvaBhrtFpvKGVmuneBY",
  "key23": "49gR19uHgvdqiUd4jNvHkwNdX75zGAu7JcCbBRHx9xgwktQ9xhHaYwGPuw4CvarS8mSVr9Nn3oKmbnatd48s7hYg",
  "key24": "4uwjvirkH49srCjC81Ge6RBcQ6txyovGMdDUm9xfJSh7jD7ZeagNkE4HtLTAuXQ2QVNEjhmxs8stZtd4y9g1vs2A",
  "key25": "5PyPiurTAropkKJsjhaa4sdzj7TFvMYkigvoNA3VvXzUN5JKZf6p3kL3EZXy1khoxToBera2RakttgDrzQneuLbP",
  "key26": "5EPrj7EokhFS6tXyEpYhA2fkcSV2WW8GX8vE7Qsx5vFnFC6A7sg6NvE2jVwvQsN6v7X2RWeBdV4Ce3Hjr9HxbQ6p",
  "key27": "5grQwDz53Liga28KV5CFDivaQg5T6CWE52E7gZxqKsrePTof8kGx6yQ3J6gyig8PYDMGzeju78MGJzaJjhfB1sdc",
  "key28": "4xjLWo1bqYUuQ5pDUoB3u9FAxCQeteGPS3zATWW5ojtkfPLmHCLwRfoyENR8w5DBjUZmZnpTmbTRegraUbHC6hUB",
  "key29": "2SqbDGrnNk9nxoYQegf2WFtX7wE7JQqPMhPt5KhbPv8wrHyDTxS6P5BNFHWAmdpNMi8q8o7ysCNSPQdAGUKqn21Z",
  "key30": "3a5qgQXNXLQ9xGDwUFAWETJLAmHMfT3pNFu2GjDQZbgVAPSsoh1CqG7AyypPXKnna4PExkK1JKVCU335FAKBBvkr",
  "key31": "U6ztKiM9yr4NkzW3t5ja3mfKuJBf7bkEbyWuWBrc22VTKcG7vfWUn1629KdiQkHtXfXptSTBYC7j4EKL7FQEeka",
  "key32": "5kGgPmSL8HcJsBPmySE26A9VLq6UGyin4yyLdtvGcaLLVuHUfLPwxPoMDguDnAK1uLvtftKpTkNZihUXzH6UpYRa",
  "key33": "wPp8mUkZgHbEozuZghMzgeNpXGu9Xm1vRZdwJRdv8B61JyY5QvQ7b1PuSD5T5ExpQ51G1JYf5JJdkbJRHD3a7ef",
  "key34": "5SeySyn5Mk8Fd1oApUS87R2RahB9qtHQMSLptwRiXppH23SHDPwz91GDKYF47QBXgw99SVTvLufpqdqPG3DSE1tU",
  "key35": "3ES4mPsezvWCpjbfaChS4a3kFVeBSrQyUoJTn9ULy6T6zeneifzDS9KH7iAZMzngp2AteUkw7xi3ByAjQqaxewhQ",
  "key36": "45oinAyDC2npc8JboCnqKpPpUiNMtM8U4UnMRTwPNxfqt6Da5gwvEA4TYQKWUDxb7YE7DDpLY2prCMzE87UbjgBX",
  "key37": "25g1znFS4mZ4Ych3ZRtQyrotKzfL55UdnPJwFB5WK3qG51bLP5zKZ1RmxDAvaG1HGf4Y9X4MAUYz9ZVAG9EyUGPi",
  "key38": "4bxqQsmDJx3XVTrRnvGxQSWZyeaD7grN7zPpiYFmNB78JMnWodxZYEdeezcQ4eHcyHT1bNgxBQLYs4tezyqHphm3",
  "key39": "4NcSjsqHGYUDoMpfexQ6nwTqwWvK8BbLDcEdz7R3nc6ZSh4gJhxw62ifDh6T1o2Mu1xtjd8cfax3MBYHKdw9RqUQ",
  "key40": "35wKgLqvUSGr8qqiezaHF5eiZqXkK1Zndd1Ycg9zSjT4L9TZb5L2p1qhMcmk2pJXxAfQy9kZavGLhptSKApZPTqw",
  "key41": "KsWdDeLuqWtfS317yV1whbx2TK3hnvo7dmc7oXhsMac2dbRV89CpcSXQPFGk5MQv2zPjE6XZrUeHbMFGVL1je6G",
  "key42": "4XJ1j6Zj2R8eeuRR2JttQGY4T7FsvkSziAKuAZnb3TPkCMULqzLWFqmthdWgS3Rgr3eUgbj4ieZRho1dcBwqsqmQ",
  "key43": "547JqgQVSeqe1vwxbENmaik9yB85JzFbV2BJdCR8yCSVJqvRZULTuq81pRaik98J4ebSFEFrFtqdKcVLaRb63U6y",
  "key44": "28xQ9zBsGJP5bsKiVMw17h4iBRV8Nox7pKcFUGdyq31TjN7RPfvgFD2SPe5fN2LCYRjvgkk1ietinVyaQcGz3R4v",
  "key45": "3zF35KJxSUcLSLFQ6WYZ4sUXPXXQB6aeha8Sz44zUXSGRM7d6NHxrGyJ71g8FqCZJRmot3igbMTNWbiFdaiEYEss",
  "key46": "7eeX9SPysv4zYnzA6CXkM8FsPyT7hmRygVWABoN7kNSGkVUZSohygH9aQLcodocGFqqW4gu2ELHbUoNxcV2uooj",
  "key47": "339MpMZNMmSVzwyxu1SqDm867XbjFSA2LnN79LmqTEPsTWbuCrfb4YBYSb6tQJQuuVhHWGjNqaMDD1j19KuPKAgA",
  "key48": "5uDKJQvxJL6iCVcAS1mV3aeiFEjbKgaWkx3DSz1kgKckAAf1hfWQt3d2UCtZWKhNsGGWfiXc8cvECzFhE8afDNsM"
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
