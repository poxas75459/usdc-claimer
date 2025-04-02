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
    "8oDXXmqckSSxaof9pm4hpzfQVcMFPFWUPKCyTnqRZAS2x7LuNCAHci4ekDkBmydfbzwB2eiNCfy8oW8KZa5qLkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WLVSDF1tehfZ4enq5BbV7BcMgU4yWT2sLkMdd7wCVtphTDhdqq7JG4FtjWui9p9YZRe17RaTvHZctsLZMq3Jbr",
  "key1": "27Yxdnc44QcWxFFzU1YRJsh1rcJhwdVPBsQKXTU1M4LFd4i9xtRKxSHJqBS96naH5FZaiNYSuoPZakCXPFV82Mg7",
  "key2": "4xw4SkHhBuJx59wb8cMzyXfZyQEdY3pWfD32NUHYvjir1PWFQKuwJyojosB9fwSxp2VuFWhPfedqiXt4U8nApBVr",
  "key3": "4vLGgwXeQSiBdqw5m5JFjjNWJzjst4L6GHQNXJc8PfontJabBgoH9bZATxDkzAvqGEYBE8MY2GUTH33tb8GVGbuo",
  "key4": "XdD6FaAA9YbWLHrcD6b7dM2aZZQ7MHjb313VLtN7sT3J77RXkg78M9A8CkfUnyuiqsaXMc37Bg3iNPNXczuWApH",
  "key5": "4zSd9toeKA9mw3m2ixfSeGTAxEXsGjGT7rmAJGG5Q5ZLzY3EhoRxVVNhrLorPpyqknWgGJciPNfkMcnkWR2LpLFg",
  "key6": "67W9Pzd6hMvMrDRJ6DiCPT9iR5WBFHg6T1JsH4DKDyLoTCUdoXp8SeAsEzwwfC7FPAGSMq7RdGJpHt1A9dhBk2JD",
  "key7": "21SvHNPNpGWJjxH4DapoK9tdLRbn8wr6AG15qDh97CXrXBE82475NcbQqAtbKhYupWqHJ7gMMkULWUXoTVXqxqNB",
  "key8": "3ijvunrpCSBWqMcn6QYzMAMK6q7xDBEoBsio8TCo5A5RcNo87Lu4cusnRRgRhJgMAffmWCzPj8Hgv3eu2MujemK3",
  "key9": "67doPsGESH14kSYYXdBEC7nJ2gwTH4UUvVCmnYrmS3jzfM57qm883HWzgALnFn81kRuH6o6mb7CyKQVojhZEKhej",
  "key10": "5W2cayy2pBdqyGrFD5hykW3CPDcmGGNpDPJBGhER9QF4Z7HRMYqMkzzvLowEcALihXQ7k3FsE5E6UJH4s4KpABwe",
  "key11": "yyjFhwWnA8PVxZ2wRo82FrvLBNFtgPYEcnuzBr1Div67dg7Dih2TKKqjg1zcbQzGyYm6AEBTriSEFbQEQY9RthR",
  "key12": "4szbZWNfQSUwQmE9b9VJeWyuuKsEcAbDSVSq6WtnyVuiVEfLYD7oHpT5ucxYGt5ngNb6kFykPknhUQazdjfwDeCt",
  "key13": "5HcDaXXqyR4ZWskdKs9PUByEx1t6VTvvDJRZNPYiGKH6S8tjDQGkCj2Yk2aeYQaQ7oowXmc8KCLRnVZbuD74jwW4",
  "key14": "5Rkh5qBQZJBc364gwneKioZzCznAkGFFEisM31hGLZ3Ghtv4EhnwDxra4rAi9dkoaaQb3jiJk7j8q4jPAor6atEy",
  "key15": "2hfdsVbTdrVZdQifirX5k5QDWdB434aGaYG3nty71HpLzqpTNj2BJyXYHz6qXKgSnKGAh71CFnigCHcc7WRqcdxn",
  "key16": "HXthRAJVaGy7RbARAHRtkXwYrdYAiBaJxjBD6K4pUB6FyasjTGiJvXfT1VzzRBoVozJpVxFYj9kvq4eekCYg6hq",
  "key17": "H4daMaBEgMULFttejto62bwUXxB9QNHZxKuFBSdAoDxaNz5zuMf2GT5GLRqo5yWupFUbLEXGW6KJv3SKV2gbMWa",
  "key18": "21h6Tu2uory9YjAvF57paUbGMesbMJkBsMPHd5tWkuyZk3JA5Fx7rxXrfPUxPT1LZo5Nto7vPPWnTq4h6oVbxncp",
  "key19": "66jQNP9LZY9m58E9cqSvJbDB31tSfi8yKpY7pRfP37yNL9kn94dkzLuCQV5cxESxB56VvjykU9J1nqjatuyr4KKL",
  "key20": "4gKSGb5SWXREdhExC9fjUXAoArbdjcMn6xrNSTEXyBLfpjVnzpkBZMep8u2JMkonS4j26QCFKXEoz3w6ASNCP3S6",
  "key21": "568wLi3C65jasD6sFzWnRyUMrcbvbKLfSvqWQMfu4yEvwaMtG8HufbZPywsUNdo9T8bwZGGyceTVf7MiCNtXWwKK",
  "key22": "2sm97AyQdiR4Vx6BcAqQJgM4aQj7E3GF6HSbVXZZucTdcYMz8wkY1SNs9og7Eo9rj7BMgNYWXkiJiNrQtxwQgFda",
  "key23": "5u46z3hZiUjxMSAt9gdQRFGk8Rntgc6KHMa1h6WdDCHixRFixJhGiy8TgcLwQqnXWZiaAG3j3agtx8Chwds9vKWZ",
  "key24": "4an3ygPv2fn6Jxw93JKj1qy6SMKBHdADq5T9Vgzka8MKisQi16bLHPedPHcNUWbYFzvC27dq9U1kNmbB3EQVWJof",
  "key25": "55sxPu1FNo3YZQ4kRJNaMk8CkKmAanggdGvQXowjxZvRw2bwSeZvWucpySfkLAuLth2oAREpKi77eVVyJaszFJRs",
  "key26": "4Gf3DqUWNyT2uJAaQbkBcYatFnXJGAYTdnQTwxdE396mnTpcbmbNR9DpXAt6BWXpiucwQvunbYU6cztyjttWJNmF",
  "key27": "3mRGeDitY8m4kUVuk5LMwspjz8zLpXoPGXFqJzMTKMp3p8ZKAtC9hiVGvunMg457AzjknFtDVMfa3CeFZ95JDizt",
  "key28": "4KXzDMNnZQscL74UAiu9wSzF4Qwibh9mUStPNcg9Z83yg9PXfMFwbQL6cq9vTuJfZzFVcs8H69KyJTmZNtAopb2f",
  "key29": "4ZP5bvd2Nz4kV4GW66jch7kFPrF5wKb92DtzckkAcwi7G2PexPW6PoHrKQrJQTxr2X1gnQ8fudxAxSeWkfuiGUb4"
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
