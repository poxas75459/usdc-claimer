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
    "4pSZMDTU5M6qGR93nZa5RSRdJJcuf1xY5uY9FhPdREXiEfajLPTEPHFYBVvYK9vxRcVdYp8A4A7PURjpds5YDEA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7P1akqkLYjuBrQnamQSNFqdXSBUmxGJEQLnzG4vrsgJcgPAyvewAdj9Bak9kCxnbThfsrRo2kiZzbLJf2f9HTz",
  "key1": "1oS9U5Wbt6Lu6pXxYjXzgF9YjBSz9TX46ckYQtviBAL2VjpBm8G9Rhv8r5HG5jjkj1ox8Kp96w6c9GV1YKLZK4W",
  "key2": "3BNdjqcbYL1Y6n93EVdfvyQHRsX3hLWbkhHPjat5ygqLeBimHYdoMuM64bP7uA9CSSbizwNrtHHGGQSWGTCXab71",
  "key3": "67HQUTinr388Asg6L7g5Hg3JiAT8oxQU7ZmXEv2f4APnqux2jWp2BH6P355akWHKJf79EZ1KdqiS6kLK7vEX9YLc",
  "key4": "4gpmpYUa9VhdsooVyFGcxSDKjxUJrD1q3853TQ4hyMKcK3rHYEtknqTxc7ZFdRPnfECec1AYLpiPmm7KxwGGEpta",
  "key5": "44yP3J3xUvqiNAC66BGLBtjXv3wqr2vgtZM21eFQ7YryMi7HhGm67YDdqWZxRcdFqdeWmRZe5TKTkU6MRDPQGtVW",
  "key6": "5QnCZVZV1mfxuApT7a1XwtTxpkHujgyZTKp3mHYHnokzvLxVu9eCkX4qD3zkkE7ZLsn7L89Nboue2WLFpE12q7Ts",
  "key7": "xQysnq29cFRWmqeNKiCqi5QHRgHRniSaEjbiTv6G6F43Lb1WwdMcXB1Qd54vrotFHztcaTVqvx9uFghzHm9AvrW",
  "key8": "4UveV5bBpK6htXs88YLKQkR9iC8XyfEH7WHuT2dE5GvhjBByJ65s1pWqZV8KZrZYmXZpj7H1r1GnPCdaMZHGFh1p",
  "key9": "3WaEkAUmSfEX6n3bhZu8dkqiCVuqhTtTdEDJnsGXzMMdwvhZjh4Bosqu9eQvEzJZgDHqQCZky3erJaWLo4cNRnUy",
  "key10": "4tdndZbNB8ui3c4FsywkA1eSCmrpJvafzjpNv6aHvcHcoa5iyh7WEorKHzsJMmr6iW5bUmwCt4v5ZFsBh6ZdTqSS",
  "key11": "3KJVLfDT2qbkxDMgCWJc2fffM8Q88KjaXY6NCv2ybKQC51MGNPGLarqT5kU9SB1ub8K3U46Pw8XrjcyCDsfcq5vA",
  "key12": "5fFNzdvJcyRNZT1ha12yhPuXRi9s36MjxqhHiHp86oQK7JqsLYtdjearigc7kQMqkYjxFNUscboB2k4Qm72KTqj6",
  "key13": "4YNNWQbUvLBNHVRSzbM6EW8WXyDtgHFzSsQPz9RdrDKrZ5A9ekccuDnTqUoYCpUNfSQJDgfsZocHMaFJkxySGzA8",
  "key14": "2m98AtMuTPGuExBqkhGCKmdym4NgwjdWxAa94s1LFxvkzKvfkGMBDoRqhSjxZKKazRdFomPNBmCwioZMMvbKsY6M",
  "key15": "3o5sGda3vET1vUv25katGBEjLG2fWgjN9ceEJTnFG9hqYnUE8kyyzMZt34kRQbpvhB4ikY3xYZkx3oN4qqjUe6Am",
  "key16": "5zqx17ENJcfjA8ZmrZN3W7eokCoyqWCN6ftD2p8415ukkuqV2NjoWP54c2JFiKLoDPE1r9JB6mfY4P3qnNLa2ACi",
  "key17": "5Jkuyer36PSpA3axEZUxZ7bSDTWpJD3Wfrk8YQAbGnXh4E5QsdZ1LF1sAjz5ca1QnrE7me16W5UBEKnvnbdAiaHK",
  "key18": "4VgTUhSCwuDJ5BNHH9ei3iS1ETnkJ7qj3bb3FyZoxifvhPtGe8ydzbKdnM4A2gCndrEy1mB7doq8pFTYEivbpzqv",
  "key19": "5WPrgyiqRxqKnFa4Bnwj3D2sTFAE8Bz42jz8ec1Co4X1FPQnDKx4mcRLCeUvw5K42gtmnUoTXtFVeziYvdLZEgE4",
  "key20": "2hHNfqfqKhpVnGe6HUwtwNr2dVrgEAvo3GQUmhGsqRamiU1v6bXsEA9gXAjGVeUTaTn9E51H7UXpHUV6Fg6KSi4v",
  "key21": "4QLWKpEtktRZ2GXQffddYKRxXYbx4TLvN99cx7CCR923Ms2HTCxMemYJEfmKsXyQY7yfXHEfMH9tnNWyhkofLw46",
  "key22": "2TvFCDwh3bunL1TUsesqRrmWwGarrRi9eQCzoo1djRsiULzbSFnyyF1EK5ARvxvFUP7UYpPs6WSN5VM3GC7uk5wp",
  "key23": "JJGZCUE1KoxGiCiHng87Gm7iJVFYZh2wMHZEcvmrT82LshQcYDYY5AfjhzpLhK1BiZghgZXqyuPFQLXJ5UTR6pB",
  "key24": "3U4Q3ztCPQHZQp6daTF9KSSx5PfiTG5yUV2vdp2nA2gRXJxbTWFj8DEVdnFR8bMmkSFc5ievNnJz7eSjYvWr4RP7",
  "key25": "38GwuQrFW19AZsqnCGTAxugvC4FMTCC9YuWEF2CRAjaCiji1WeHYmpmjsrvgV2dxasgjZ9r3HLD7p8b1ba9Twbri",
  "key26": "KvnefwaY1AednsH39BEhuTm9jAD9N4Zfow13iPUrDwVDKETd8CCxHpZaeasCmCiLdaoW4aLEV2pfUtfnK13sW83",
  "key27": "4VKsEnjwYthXmmy91kRzdtYVYbKj14yCsXQbqftCvFH9W1D2CTjSuwprXUdK6ckoF6LXeBt8xBxkC2bcNJKUep3s",
  "key28": "2wTCkFq8ft62xn6nbEn9hZDoxVRtKirvyHSjyCywe8qFZfxyaiRZxKFs7xYbGstKg6GSqERSRPfj5pyJLYSydqZw",
  "key29": "SHucF5rVybKB6WBHUMQzjmYki7NDccRATW2CJN1rv6psG4PKNekNjzuhWvJ4iHFi47VarEckoaLWovjURNkkVTQ",
  "key30": "3EqgjThBjZj5PA5uKqcLb98CTGbcx5Vfu1ggrHv8HuwnAYDqreVQA5Yso1xm2RRX8ssBYxp3dkz6LBwxcxPyErku",
  "key31": "3bBTdTmnSv7F6QWzQVjZr1vCxAwbgYjSFVhaMooevkqS1LRC5iRmynpCNQZdTWh3MbEJm5y1ZWGEZrabr2bcaRWa",
  "key32": "BrzDGkX9PGnfzTskGyJ6ERjA335BZKd3pd1VKUHevetEjvvFrk8vTmk23DGPzuLy5Di8tjxZrxTmJoxu65EUYS1",
  "key33": "5yCgcH6xagnhgGjSFfrERGCfcMH92vKD8gPvQbq3G44gePP6vmKyb2VBzpU1GWTv3W8kRzRN1r6K2nLs3qcgMP4D",
  "key34": "3YshZqpQnz8KpeCCtJ7Aa8AWXLtzMbAZMRXwGPfySkKtYymSQeP6q6VjYNXDyiRSbn3dHxxEkEp3ACKJ3UfjU1kj",
  "key35": "5i7Ms2dp7bDa5gWhQmzEKsd8uzHDBcLscNN9RpZoNFXwj8LF4w76ixEo5gpxnbLAb1fMyfRpSPaQNz6pWR6zwqJm",
  "key36": "5zjw2a41rR8PPUNnQgJ6NDnC7J4tKhDuAYWb9nfQm63EjKuCNjUVtjaDM9QyZxftoHsv9hDzfCkkdpP3dCGvN4H1",
  "key37": "3dU5UfjjXEr25ifnKMzdL9eyJGY39a5bJWNpXsGiXHRcn7sCFTE6wiagjKzQkjYmVxAAeqcUu8NgfztT8vwYQ1mj",
  "key38": "5XWA5PuiB5WKCGEbJ2iK83vpMYjm43RrU2yEBAys4jH2X2yLj4sWHeTRdKNL9xhJx4SEeTjZmmCFppiiuAjf2pug",
  "key39": "3WJx1BomkiyWMwGc3zyF4TLUjgpZ1fVhcEQyb4HHns1otUdjXQAAoeJoBQ9QzFckiokY7jcYZz1Y6xdYZrcZ1UwL",
  "key40": "2Tb2fjtJV61wzojso7e6eGGvoBRTS4QDF3yAMe2V1iaK6uKAhFup8nZTj4WsuiwcUH9H48W6mPuYQWCgzqJc1qSS",
  "key41": "3pcMxiXzBkxGz7g9jGmbT6DwWFCTiUMX5pXQCCRMqh4rMi5bkpeWETxANQRZ6JpYdpMVUMQsRVUMhwEeENoh6JV9",
  "key42": "4Gqc6H7hQcN9iPCX1egFYRxn11o3c3BjQQTZDiokWjqNoeYtYBDF8YopXEyR5xcNop5msbBM5fZvAVNxYNX3osyv",
  "key43": "2pGxU5gc4m2gq8Xf8vSkqAunvfUKBCpQ2UbPDQmepqRN6WAor3wHnqwv8GJM5ibF11EEeeBpxfRURtaan6THc6CT",
  "key44": "2gzxVKJovYsR8WF6KF6P2hH5p9KhTvPbvid4bsMm9Z7CfqgraaFpqATcjqfhV6gjP9VNjZerGu6bP1Rjp73TgHKJ",
  "key45": "Q4qfQrmhrfzUjH2V1SXFXuSusfsUAKCQm7fh2MSbCW9rMqLhCB7bbjf18TZFY9P1agGzHGncUYejMH9KZnkvGTM"
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
