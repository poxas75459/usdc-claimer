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
    "5xJ8FLAsuXseek9fW3NE8GtiSDWUuDUCQcXiM9otCCGx6vK9PgyAQShgQUcjZjsZFoVHJhwzLChuY8DTGuysGtDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BBCYzn2GFYVpJJSrV4gGTtdUB3q1UTpHQNEiKPXFfyLWA5EdEytRsSvNKtVFPxdP7DuZxaLcVuZ5Qu8jaHD2NG4",
  "key1": "451ScNd8nXJKrQWEopAUbm3Bht2kjwHMy1bvgeC2AYGhTUiydQh9S9sBjoemWjkw3yUmEbJzHx3JJguvfCrtmkEr",
  "key2": "4FadW6V1MaMCJXepHCLaJQ9QjM9AEKFrqqkDC6NtRDT3VyN7XEcG28MzNLbjCRn5UKD8VetUK9VW9Sc2QYBwHfEZ",
  "key3": "nBNfHibvjue4ajzqHfxBooqL9zLvnuupy2JgNARHM8dBY7B2G7Q5TXw7aR6KDF84QyhoDYnjyAu2nz9kiqJNrhq",
  "key4": "41VHa8EYwoTTUwgbVb7KqRzVamm2EatCqreoYTs9W28f53vZWLTfz74kRTNystGyzD7KC6MYyob1k78iuE2L5h4R",
  "key5": "PPWFcgbeXkJD2qjtkWjRBySrTK8fiC3n9Y2gz4jv2QPpvY7moPgsKrxfntke8agfhQ8k7gFhPL6JEwdRGqZEe1s",
  "key6": "3AzRZZ7QQJgEnFNuURrhVJNe7Rcfj3zrZGisFAMj1EZMAgmj97s8PYLB8b3tB5j4XBiDnrFT8C3A93eL3vkK1pJ7",
  "key7": "2nBZ3uqbcrLEe7JsvBexKQmTSxJYJ54kyGoPEaPJH8DszGQuXkaP6UL81F6FWLPKHuYXtPYuW4J21wLRyhRQG49n",
  "key8": "52u9ZrVRJh1fbemYiRDjVFKGwfSLwd1PC1ZxVzhAXxeqPXYFYvnBgcNYVVL3sSq4qmhgV2kVjBhXcYKRb7K2S3bH",
  "key9": "3J8dC8wjjfcGag6TPNkxndBkYehrouktreH2HTyfbCPogZqyf3C7afGx8xGJkAEqhiugx6fix2GXjeRmJjiqy8UN",
  "key10": "4MqUhEgWu9hR3CuNmBCZCt6ecSfJpBQAWet4n8qrSm1KuSUdi3fcuycLJwmVGHzUC1uGGH7Qvg2iFAVygMRdfZQs",
  "key11": "5xBHdgQL4whx4upi2UdC7wRzxX6TKfBK6xpA2MgiBzfUxzQYxH7vxTTX2gLVmMZdrakG42Qk2UPxLHk5C5eFzrAH",
  "key12": "5zXmnSzj3ybJaN4xQgJLnqHFTn8zgf8q1LMBnBYYi2xA3hixvAVZVs2MV9FvJ2VVmocpB9UDZuUC3wTYs5xTYhKu",
  "key13": "mwfPbUNRJVMLZV4imAAzRzow8TyoKP7FSqGUourgoZTfxCA17GFr2sthUnogEa3vxMnT9Ej74i6G8c4nNxM5FxC",
  "key14": "2YZNW5sAzkBJLLxHdQmSneBXLMxNS4pWLPWQxRJR2z2MERBmFuLbMw2pdQaKXdUwzm2BsArD1CeS4XHbMR67M8dx",
  "key15": "amZ6UiNBffv3tQnQMhXEg9yqHFgJchyZ7Mrwgh1AmAYCQU7Yag11A6CZ5P9vbfT6nAqDEhvB11TKkdBDLJHunfe",
  "key16": "2A2kyzhzn82RB5uMbMP7qZxiV1suDZ9tL2reXSGRd8U1csZNkEQAhRYQLt2raegQhnxomYua5evL4xVDxXiR2UAd",
  "key17": "4T1ca7W5i5KNsTMRmwSqo65uTgcGBVYV3cohPrvzbuW5ovcocuzEa87Y68jUrVTYUXz9scXUPfUiDR6DqsxShKNz",
  "key18": "3Q7qKivqpLhfYtUyGZM25v6KntNU7cjqKnhVXr6DjfN9DpQ3ApHrhfLjAeBEh52qnZDU3NPRCRyhNu5o1UvfFnXZ",
  "key19": "YkrtSrBPLmoUQ6NCQMJR56CQutfzeVecnTPbQfyNM6Wbxm6Gcp3xM4j2nXApWb2ZhAGAszzt9VLnDE7VVw5KVMq",
  "key20": "5hT95cng4hjFDzGjhjNddrWrjcMB4xdh34rHNRRtF2KMLYb7enpDgCZks7JCFNgpWJDitpCMN2VesY7J83UaE3if",
  "key21": "25ARCsbtX2QQDcyEPpLhnQguJdcVHS9BNf8whRcsXg4jDFgaCphJzS5r4XSV9rs4ACRqEy6WmoR34z8UQygYxMyU",
  "key22": "JhKo7S2WsuKdvXjATNE1vMNgZgNg7hThoom33CGRTSAnvL42wpGH6ULjCfvpdvsApdAAUFndDMkPhyS3mkh7eJ4",
  "key23": "4RhRvEd6q9mrhr2GBat5ke48736UG6CKkoGTfasvnu9JwmtNPXfCT5UuPTAte5raEPnhPPeYJsvF1CUpS3PoFyWZ",
  "key24": "uyWr4TM4qdzT4iiAN9aQRchc2bNBqM7Dg4phmDn2sXwh3VxPcdCZisSnbqkLcdZWTCuFWXBbF2m7FAuNbn5AveX",
  "key25": "yBCfsoxvFTKrLFQamMgadzCNycuJjcD1VFSdyEf2PGmEaP2ehaqo8PUyTCQ5jPj86FWLm73Nhf6o9rSjrqAox7f",
  "key26": "5nES5q7BCMeHmNMjHnLgfkSyDqdU1TXqFj2YAEpACL91WPPBzAWABLyEmpYDeEMSTz13HVoRPFCiJ6xSKAUG8Bp2",
  "key27": "2goXtHdN39Rog32amJGMpAoBTQB9nB5WfZuDt9zrRcZwupYGA44d4eKU3faTZiSDfw97Ebbh2z5k3EUijdirQ5U5",
  "key28": "5Th68kt4AZKpAoH7vUUphQQmWKMW9ZZSiWoANTcUdZMwRyoav1FwLAiN41hALuLAtBi9nYBrHJj31F5VAKYBJs9R",
  "key29": "BTWHf2qn9r2uoa96YCcUtxEwNx21ALhkBNzAyfyvUFzEfAaN7fTQys4fmZgDrpns7YJPvFZ1LgkgAd8kRqDy3MM",
  "key30": "1XtGXFELZ3zXZtmQpxYizkSBiXnLyvMmpGaLCw3v5NmMDUf8DwebDWWXkzuVQCDRAYBsYK4qNjGN8CK8xrgodZ9",
  "key31": "34syV9MhCJ1zav9cCreW44uEHecm88hfo7PNRkGXcQAJmrEVyGr7tVrnsiNNzEQ8WuuqfgmPaTxwq5G5dXA7WWa7",
  "key32": "3YzMo12LUoXwpGxqyG6qEWrBuv3Ke9r1ea5FnqjmEzA6TbFmavEeUfvZU4yLnpvK4jm8LQpEzEYvZicuuqvYckoU",
  "key33": "XT5T1NHMXgqA8M4k2hEzwKYsTMF3t4rsZEBYatPBHJRt89g9MwMSyBWUWXJTJzxpt8qjRsB49QdSxGYpEDbDETh",
  "key34": "2v94x2DDfDYiHC9QQy1UAyEZGDjo6xoMJhqbYYMQs8v661oL6pMW2VCqL5mpc7igDjZaViiffP8Asa5Sq7YPehAj"
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
