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
    "2AXVbaF8XLu3WAB1U6SU8YTdXMY4CUQLtGCq1pert7wVXqZU5zozJCrkNiB6LLsFJ6Uez5Ex17Au1t9DfTGB6pUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxWWdCiw3wzN1XMaCWnWcUvE9WheWEH7xWtSxKTid9rxxd54sUe3Ee6wiEknLu645NXahZQtr3qhX35JoDdX8bK",
  "key1": "2Y1sPewfKafyoCpdNB7P6s4MSHNnyghUe2oCCEiXTTwGeUcH3sCAVMGXYUwHx2uzAUFhiMoyUdWGygSHCBLkNsq6",
  "key2": "2syKJ2rDsEf8KPGARXDLdPoMRuAmuBzBDMLUAjgZgcGPnaoqfox5YE2nJjHpSMaaiBJ6t7rXqwrK9zWgvVpJ2C7F",
  "key3": "N2FDpGA1mfNoWZ3EpnMzGyfjNqtTYPrdVwyUwymU7kvEp9End4w2YrMXJjYk69RMyhmanmvxTwvPMFDLWF7LjoJ",
  "key4": "3bULb6jbxPzEhYypAWTBPKpw5VLs6AbpwTi1YP76fx8j8sQw8UAPaRYyyhSgdkNBYPxgmEfvUo5s51wpEts6PTED",
  "key5": "4PCyro3QNmsqgvTGkzGkXmVD8uHb253dhvuj8o4qt8A3gzXyUT69PD1Roow6CdkbwjKS9NVirXB7L25MNFzSQ8c9",
  "key6": "5RheRVLaaRQ6oiE6AWDiHc3RFW9kJUcenJcK3prdoAKECmE6pto3Yq79KGpJy7vu19WmzFuKW7utLb5Ua2BLvZFo",
  "key7": "2iQeSusEVvkih9wg77ubEFMj8tzEYRZ5jxfzYi8LNfEPWTyz4W1k96efVDcWifmHuvnWmNJf27PTQM4SVwrvNMPs",
  "key8": "3JwqkS4EJnethZZC3Hy6vTP9eQwFxZzxUDUd3bnp6Z8e6gx58Q44NSTdqSFWHeE5BcMbGAaSj9pqWipBNDcjdvAA",
  "key9": "2rkeMdsASN5SBusnogd6ykbS9Z46diLUNRXvQDQJUgDbEP7V6Ygoc4FaYZy3uekdwjYK8b6h9LEChbU9ZNJMZ4PP",
  "key10": "3JUY73xeqf8EsMSQ1QUFUPkBUgeLZdSLqHKi6UCkVLBwoqpHp9gjX9cGG3wK1yoZCtmjySVHetk4CKoTiUdRguHK",
  "key11": "APyAvhTUQ8SAo1DQqVyMwG2JZzTC4zetQthDgF7oRZi3tHs9qSn9x7dMUyqmnp2qY7LNM4ukoLkDsxPNJXYrH9w",
  "key12": "2LwxJZUq8wNaY4AkMgwnNpWyQL4CpbDYjgTvaTv7pYUQG9qMSXgrq2Ps3F1PjRHLzufVAkF59DihHo9h9JLVtdTE",
  "key13": "5cn5Lkb4Cikp8jUSPxwGgrmw8aXiPherufNQiDjn1vJFxJHvbnuQmTxWu1jCt1JHNN6ydZywaEz5Y4Dhc8tSjyz4",
  "key14": "2WsjS2bGZAc8tmR8w9ww4bx7oRBztq7aCkfU32bgZGxvjBLe12iumSsR8Qy677LRoM12W2x6YMZeMyf7yLnu4Zfu",
  "key15": "3DNZ71jCP2LBvHHV9jQ2SVkBvG2SzMC7NVL3DYvTX92JrrS3Nt82VNRuMkFjENPK1iVwTZ8tPn3iHmtMbvZn93zm",
  "key16": "UVqKv7C6vcvyVUeRZEdZtgjYJ9ktE7XCbL1GGcjYkPQ9NNqKYB3iDxCXyJ9BUeyZTU4zPq5ueafLus2gGgCFF1E",
  "key17": "62UG3cQJUZm2AjLMjtUUqeLYpQf5bdbUWniJxJyw5hmnTTWfP3ke5hw3mJG9XSAZevWvbszKsVJ5zpuf66gCdKdC",
  "key18": "oKrn2WRQ2RtrMznfRuqG7JRqzaGaFjGfnYhDQ2PQyYinUjYnABM2GFUkisXt5egcR2hdwkxGGjfYYSzu3cKJ6Ct",
  "key19": "4emGUGv2wh8fGxMwWLNEJNfVhhoGNoiRqoVdamseviP6Acd2HmZzRPQ4UyuVvvbf4GFjP1WHp16AsfmzYVWf8UkT",
  "key20": "GhgsTWxqAUUBCUBRjbaL8pUr3J28rTjHfwPWFEDnaEV8MY3L5KZotPqBesrWgZLYieMhScjJzcnCkuBJu3DsQmp",
  "key21": "2Zk5gfrE3Tj4V4WyvFtPuhQ324w5s9bLDxMoEC9AjXa4RUyB5HbjXbYCzG5i35H1cQytmExKYJuDBzQz2HbnygHT",
  "key22": "2kVPXpk4eNr5XFzPzCN5yfgL44voaMrrn9LHnM9WbRYxzAaRqeQR1uPh4Gfr3WsENrkxStZWTecD4MZUzYiWDZ1P",
  "key23": "qVNjmZvuC7FqdU7yWrj8sCLGAPdzStTDSY3333riVXR85cWPwGaWRmPc52YYRFtqWdGDjSRhGEoN6Tznnuere2h",
  "key24": "2MrC9s9Y1aXzcLcCUbhHt1Agu2P3AySfuAeNNKdCwgL8R1QHZfq5kKgv4wDuM73jdEUQJWiPMSMJJucW384xhGHj",
  "key25": "3L67NqMuyQ6MtMWcEB84kfZ8ZDys14P6G2M7ijhkPKi1WK72QWZvNLG5LCBbrrdBfU6YQua1rX8drYA8G8kEEUGT",
  "key26": "25qQneNj5YaQZgLCe3vEU9QDgLG2gXWH5Wg1nxQ5uMwHyMK3sVf7iWEneMKMNmyKj9SZNh8noShUqrppVDtzMwTe",
  "key27": "3LoNM74xzQemwF1PmFfFqF45U67G9pghwNEq58Yd1gT8TeKufirV2rVpmyVPSHB9JLvsCVo9tNh2nDwbeop4RX3y",
  "key28": "bzmp9Yz6Bhuon7vZiCW6ASC154qJLFq976pcftFCieGiT1gVQJr6NHHyRwLsHvHTR5bnybCF9hFA3uaRbbudErq",
  "key29": "2k9xc8XEpyo6a2PwJmzba711qkdMVCCQx7kkdrxc3pbnr5rNSdW9M13aXDSj4ryEn2KhuVwyjHmoa5Z7Wi65A5ne",
  "key30": "4wVL2LDv8X1jyqm23R7pzxbMXwMbpbwgj29ZNJ9oUgtutuu67EJfQt3PmAoBYPsBsJSZx7NpAdYPU3qPJkgPdtrf",
  "key31": "YinBV6Grjgxfupam2Hc72UKfSuHCLqrQ2oxMZbCPn3TDMerG5P25GCMdkLzHQppmyXpoprVFLVG7nhzoLjxVsyf",
  "key32": "2ACGksCCP4T7XLj5zxnvTZzPo8oDRoCwxz3j96btCTABUpTbLxvZwkfxmAUiAQ72htJtnfwBXqq8TZbVFbFKQKov",
  "key33": "4py4M1P7sofy8L74PRYrmn3WVB1kj7B8ki2UuMaBCqTEr3dehc4YccLrS2DnbQVycNwey5dQxvGoynHAFCNBCozB",
  "key34": "BewKWXNy9QkjWdUQc479mAUZwKucJgho3BptnhvwPGHvTxsSY5WME3qcKm3cVo3CPyqwU6UahTL42heTMzMQD4D",
  "key35": "3JPECnpHNkQrc47JQNeFAH6K6WyhkjwJ6MRTR5C32KJww1SrXWB2a1z7NiyaN5hMaKJQH1cGwsqLiwYThYLRCjBr",
  "key36": "65JNsY4PM6bzmumrwMMgFS5e2KF1LoToqidCcieGwErgY4PaBoiRtWeQW5EUSSBh4xyRPvewxt9YCK5uTeiFJP2M",
  "key37": "4DzdoJRVFFTMhWHbYymAKuKEmEEzRKRzwjLQgNn414grQoaCW5HZCRmhT3m7zSyFVt1ieMha9X6c5t6vT5Ddi5kX",
  "key38": "4hQtkc9hUox5g8joDo8qP1LjpqC9gURJTyw89UakGmv7D4FhdDtdTmn64bEL89cn4KyXCPspqFscE5qjQJs5N38Q",
  "key39": "4obMFU8yVMUgPw5mmBthdhY9SatRempULFamRSL28CgVBVwCxo6bnxjBdJGCnFKBBvVJ33UywJ2hucEiTiowDve2",
  "key40": "2p3FcgFK31Sxs7btLrwpQonYM9eRfExQHoZYnVS3DYVyaSjQK9MQfHYNeP9zy2ge7msmCn3GagdySY2hEgrN7S8a",
  "key41": "5uiwJTb47EWn1ptMZvbbcgmXWp4bGh3x1SDVruNdqYW3Pvux99xJKJE186z91yyTpe4J6V4joeZ5kovopZZUNwfF"
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
