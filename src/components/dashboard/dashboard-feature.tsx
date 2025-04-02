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
    "5Gz3BRKqCYjFUDNFyyDqcbgJD2TYtEJwehbDVtGiz6TEqvn7Go3QgBhP2EPRoqYxC12wWpaLNppk3KEXpJSnBn34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCVVseqEcAKvqznG6sSoyHCSmbdAqpr7WbVJ8sEpxczaRs8iJUS71o95skf5jYTKxr9BB4MTWFGXGPjGDYyDap5",
  "key1": "gijarUmdg2gz6ayQQ4QvrA4Wcwq928yUgnhPGtCNbxfPqCadJaFmCv8Ktkiv3yDinMurTD4GjEmoyCk1NeG4HPJ",
  "key2": "2upQ6oXTFmzBH8cAnKQjBqwKYBP71KX5U6H3MhQCT9r5Lp8a8PL8KRaFJqjoMRyBJBsVT2E6PfA8TypGYznwBot8",
  "key3": "4mxTePRNNau4oV98vv1X3EHGuyLekUQqJJmEc9kAFWcUCZmMe3upXp8unECA3uS4h66neUHmxBFTFN8eXtY6EPfS",
  "key4": "c6XDeofJsn7Qu77vr2pgBBimogBs3tN7EqpAq1w14Zn9ar3n3XHWcX97zA38qLLRsjfyYi9UAybMQJNmRRCErjv",
  "key5": "5y9uGRBg1xt22zyMERDY7vZjHPZ4vzVi82SEn2V1CF1zT8Mj9EvzEcwViQKn9r7BVCGq4WfN5ZaLypYgP9ZyAWLN",
  "key6": "2yKDty7x9Xkni95jrYfoWaByafa6Q4qm8VBtVddsMX4tMEXdwEHkB7NeooFFscEtMs9wbLyrLM91mA3JQVKs1yiN",
  "key7": "2ocKpiNhqVJTaboPhmA9YdgLgnEwQympMcsiutwjTjckifL48eYm8d4tdcWQUBCPPDCWFySPbzZyXvMNfGtqVzY4",
  "key8": "r84LaL31EKp7376QDCCgjzFVD5eaHtoKCCXUyGR6YCvH1MKbjWAwCa7F3iscEjEiqRXCVu3pENRNHULGqZhjRxd",
  "key9": "4ok9f6JdUYm7XNYgBHShGhf1iPj2uX21Rp8tsNQ14a12HmzVR49Z4qaiAtkAyDLJE8SZztEQKqM4tDW3NA7CQkaf",
  "key10": "RvyBmtciKEF1j17eG8Z69NE99nVWHhQDVzjEXdMhd7Kb22nQW7oLumd5yLPaGaATf66bxJjEw1g9QhRVymhecpo",
  "key11": "29FyDgBZHhv2KXR7dv5T3Dq5i44uubH7gi7hq5nFHUPJqwpNwSaJT4pxfYJDDrFXDfpdqwbgrki7V7jEBFH4g2BM",
  "key12": "uD6SMyshBJbiSmxaJyfcRMejB15iUHiqWauxvf6BoKTSakAxzdYEvyvwPeGrmSsJ3Hxs9Wte6knTyrEwwNUGsFu",
  "key13": "4Mqtjssp64eYXWQWGthovoxJKrHKkeJ1tFC7Sj9UgCXpE6DbgZThCB5wNzWkVJ9u4ps3d78LUuQZKxaofcnBLHCh",
  "key14": "3NLixX9aobbYwasoiW5pof5YGcAzox8ijGoukn2hZ31461qJTC2zZcLeMk6xyESAuuHYMx3sryKFTWV7mK7Lf619",
  "key15": "PHuaRbHzzhweA3WVkqrchfeWu7HaCfLpCZr3AXdg5WiRMAVeevCR4JxugrJCingThVZcgPctFBF9PsCbFAhFb4W",
  "key16": "5VDkx2aQVz8uLDr97Mxb4CCYRJ3e9jp7fsKV7hksBjZ4GX3ehofgJHJ3byQbfrkX2Fdd8Yf84QGEvMoQPcva2s3Y",
  "key17": "49mpVVMgZPyApBj9GVpaJBRwRwqrdajMQhs3A6ZzvX8wX3XT1KnbMKMRSARFFMes8n9SxuisZqM4ymKP59VQSGQF",
  "key18": "3fww2Gx49zhtvRERYWnwxsrSFyJ9Sg6S8TBafWVMPArUe5CJk6J16ft5zAvs9UVCg8B1LyQeQs2uR77oBHc5Vfuu",
  "key19": "5W9Up6YMV4KVGSr8RTX8QKZUaWi3doLcGKMLEawUPug7b6XnnNebK2ajMzKnhz6Tdq8CqzBMFkoxpxP9c1dT8jFF",
  "key20": "5y4Ltz2wB7bErZJCo6bKYsoenwpFJMWuaoybH4dFta8QLE5AoubtDRHH7YqSbXs9aue8St9SiVVW8bSbBdb9SA8s",
  "key21": "2iKGkDhMGBz5bP5u5RMS2m3su492N8YiZ7yJaFAx15nWyZRLkLFh5HYq2K4fzHVYjKXnknZ4u6yWvWPwgF9b9TBn",
  "key22": "2Dj9xThPXnBbxbYsrA8bEQ5eQYhhsq3W23NWtTsvUx2FgP3sevwFvK4kAJnNTsssBvAk1ZjDAotkm1RvBBRooczP",
  "key23": "4AG6QaCZAJJq9hKhyeK96QMTDnLZafJoR7zt9c8zjjnUR3qU3B4YsrvfffRFamxfJo6scZdSuUJTfCTGvteuaVKu",
  "key24": "58vVxsRKqmCzi7iLY6GC52k7qEskPhU2iUZBFxCeq1tvDKRL5jVni2nfMh5Q8e2xjRf7myAkLDAzFTKRhQQPyDFG",
  "key25": "2K23zd3yXPWYSCmYzeUVNH8sgypM12P4Vtz28iA3bQ7kTS2K1LzRLGPpdrPyCxvn3dtrag2ea6hmAooi1dUGL8Wy",
  "key26": "62YoYrsYp61iJ9yruu35P7tj5pzy7iKHcq2KBa5syJukDoS3uL2ZcBs7A7dZ1KLkDvK7Fy5SGVAiaobuKbSdiTMo",
  "key27": "4o1KxxLA4gdAMQtBqJhoBDvKPxk8af6ZaNnFTwsZndjV2iw1p6EYtEYrvASEXLKD3fvUL5Sf6TPh3uRZUaE5PrAu",
  "key28": "QsEWCo1CptNZhn3YfSPLBH7q9RWBEPQ8qEkjmdH3VCmf3nPKvQfJBZFAYMFhuqGH7ZoSz6n7XEuhaT6Xo7kfnx1",
  "key29": "3kNWgWAazPPTS981KJTbb7mm2QSkX2LZ4NUzVDwkR6UgP5KvVB2w2G6X6YDyhKFSj4zhUk8BdwfMQuW7TxXLwZZf",
  "key30": "5C5KaNhv1HdbnTuhNKtLbDBidw8W3G3THKBtjMkvzHptkTiXGytv9KdUU7cYFCVab4GKYHcYSh2G9ddSF1fg8Nrz",
  "key31": "bpYmseEnSk58UUfgDs1QtAMEvbpER28tAozDq2JagkCJ3Lwrm2Jr13LKEcvxaS9bi6NwGUTWtTaLAxoDT8ZUWGu",
  "key32": "4pyt9xzA5cVNh7G3oxWgVzajnaVUGhYY8fX6o4WQpdZKfcBePTx4TVpQQXf61serSqnsyFJPrKE7uxiTtij6TyxF",
  "key33": "2LKYGSMFsfN9YEzkmLBnta4r4LQjweHhk5EidHpXt2H5rsdi7qtpQgXC2B78nPeADTgKquENmPMEhQDiCkkJfEsu",
  "key34": "3CKDhmhFHYFxBJj25H32n66ZYzaB3NFQT9qNwpgR83aZDK6vzMMgW8pX7dU213iBDvRySkmd7htjtWi3KAceVPJV",
  "key35": "4fab7kmHrbmDNHwWWjJwCPDiwAkfo1JLwGExAejHMJEmYtWcnEduzMvxiaZGFXwrqTF9w3SZZstQ5o8JNd9WMBdS",
  "key36": "62Mofm66xBctgiar4GCyaC9V9iaFMQaz6zEjJjgz7ThPvK3Eugexqu5WK7NLWvH3Y3Amf6NpHWTeRY5JD8xPCKbh",
  "key37": "487esTeg16okse9Br1D3mSLWm3p3muDhBc924UpDb9KWPhGp5X6wwSipgQwEfBfKoGiYAYkW57D9VDMPJ6gd4yy5",
  "key38": "51d2Xcp5qvupUA5yvGdVnZkoPjDAqBYU8vZCj8VuCj4QRwfji9297J16asw7sZMAeG46gvygJHhnX2bbATGU9q2L",
  "key39": "2FF7PrXy2WtxxuDgqC6PfopSn7h8u1sqx6AqcVCzTwbe7m8CWQhy2AMcvYNyrFrxEvXbQYyZGeh6HwPoLkzpETwr"
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
