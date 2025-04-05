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
    "5iPyUkEqNLj8NjiNiUgKd7L3wa7sAxudTZcRCwPwrrW75TqjbgNDYhcjwDhAaBq45g522c3uCFV8PXLzwJBvGxLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f6HvHQFRLCgFM6EiLxusimiyXF1phLwutgkF7wL8p6JWdhv99m3KuLSuS5PQESrzCGbhsLHMcQ8T58e3SBYFRe6",
  "key1": "4ZkgNLRjry9vUjcyiWoQsnu9ABa4qq3xAksKTWYBTUeNLiJZgrZPDTgya8ziRAC2qGG1dSzjJgNCEN7CYWwbnuyb",
  "key2": "2s9c16GKUo2YYaYKVfDVhsYHVhvVccju9K6yvEBZturUYCfurMTysus96qLkwCFezwSQBAvXskzh1ghXTsPWqS59",
  "key3": "diReLoUDEqZxQ8TUDB2u9Ejm58vv2VtzVQoTjkajE9CEToLcjbyA1aFNN3476u54BNVBPCoSGyrR5zi3XN2g2bV",
  "key4": "2ZMX2nRnbgjKLzb6xp7G6ykYu951xpamEQYAEz95DN83MzsFTJtj1k55bHhmTvCrBnAWjZavuopFSaknQL9UC613",
  "key5": "3rAoe6CkSwnpxPwrXdLrJiGENVUPNEJ4ZYhVm7aKoRrTT3A4kB3UqT9LX9rrLAK8NrjnH1GXDJncDpmKBgW7a6Pd",
  "key6": "4tK9Z66gsCrH3ckxhvgGzpJk87cCUy9jWxiWbxRcMDSS96ju5CtEPx4bGRT4jzWcBqFMDyEPozcQ483SQrkSRJ9Y",
  "key7": "5obBN613zpc69pY3h83Kvd8SASJdzG7zjbjvBzDueLMdynwULn69Ar8MLDXzpqDPDfXpfLDh18UXh3s5BVTbNeb4",
  "key8": "4jEhUXcNX4Pzi9bU5U1eLL7SvuvEyU3kRQj6mVFY1y6UxWurVWTR8CCY3qZaM7caB9KSdwtVhq2kyQD3Vbx6mHjk",
  "key9": "3HXsRFoX2KnUi469JFBF1smGPcogA8ZHxJ1HRGT3NhzfmuAYP3fKGPR92N28mCnZB7yhJAV3xPpcma4VLbLmjyvR",
  "key10": "DiHxHGpqH7CG6q5aGmc7E8FfuaqjjvfzvXZNeWcc4Cw1bcmN5XtAt49Ts82wHYKwnBYxKagmpCYE7ArgbnoCHJa",
  "key11": "65otvgLCNxhXcg5nUW5wuLXhUTsDMQjAnwkywvau7sLifur8pavmNwxjH3XcAPVUVZ54ocM9ueK5ugzmCPmBUyeA",
  "key12": "3TPe44igdqcHsQHNfVFazv6d7Z1E7uVHLUgmVsPZEfQyMZumWFJz7o5ifzL7XyoyBRurDcRHSH9xzHnkSbtdf8xL",
  "key13": "xBiAgJECTXXS5s6AVSu3rbmaVLhrJrXB5tMqVahfiVPRkjNhqTCL6As7CEyE1re17GrVFqiwtiffqLcAkBXLzhU",
  "key14": "4fttsbSLASjEMTRNhckAxWX7YUP7jRuRtVP22tH8jqABYMB7dhJEiVaE97B425dVAueohxr9XTMPwJMsYirekVaR",
  "key15": "2ZjSu84vFJ2FnRCw56YeYW28M7gsGz4PaUc5d2myJxPfWDUZedRe8zt6qzcD6a3BuztTRmBfDpdAxWRgAjemHLpC",
  "key16": "3oZqdXzbxQo4cSU3tP1UZ8wV7PvAYAR7sVxZ2t8kJXD6HKjt7L5u5SFv4eXAC9Tk8LbcmEJHqsE8JvehFmeVQFLp",
  "key17": "3rviftK48MAVCEpbtKRqpGs5FjWkikow7qhwF8NDPrCvzdDmew3SUMFNhWZYiYzsDpJmC3Z2MqZnSAxV5wXnA5Yf",
  "key18": "2bYHCHY9MwMaJMVzPUe8H7QhQ7SmEYoM7QG7AUEc3QnqtuURQHW1395EBtFcR54nCMa6ntfbmvzu1tNmu24G5saK",
  "key19": "UBPm1pQSB1CDptjxPgYhPFmwE85WFyxzHCiexv2ujoYetccnDY7jj9WjVs1EJZMC4SyC2Qeh1H152YpAUQ9ufzt",
  "key20": "WCFjS61Un5nnccPTogjeUMdYbaj5M7VaKL4XgW9UCeLFpHrjhk9AN5zdoTHsahesxGGWXmF1yN4mQ4xPFcSUrjs",
  "key21": "5U6Qki5QN8cnnWrDmkLPRrwwZKmie5fs51JjyFNMeXsXnfCDjv23yxehvp6QcajNWS65GqHLhzS5kT8grgURKDNp",
  "key22": "kR7z4UMss8tCMa5RTc7x873i5VRpPKCWnFVnTkHXFqKKfFcoUn3w2rcobi6TbSQ7eESE8Zi9P3AZW1yjwXfLLZu",
  "key23": "5Kqq9Hw3BCjYsCwx6BpBqbCKPq1ernYgx2f7hVvFmqQbDyKSpP6mveh9W1PESD3B4aAmaBVbqBsEJxs1zdei1Lcm",
  "key24": "4H4NKJo85ytCxe9fHiX4THs7AonUobnK2Vq6txA37TtuhatCp3sWT7gCmuQbWjWj8S5Ejcw9HYf66JWoeAZJ6iU8",
  "key25": "2BKfBmppjGf5kL7bMXU99XJryvgGBmYhUEDMk3XaE78sH8qz17tWqgyBiuqBZ19ohKqZGuqx3JXeSrFMp4J2ucfy",
  "key26": "qb4LMGYSZw5pcPPq7vZoFndtgaudpXN6zcjvpukg4QHYXXPVvH621RGVEbz4m9NTAcWWiRPn2dF5N8vBuA7KKCb",
  "key27": "5bXobKKeU2LTqioUTNUz6sm8DXsTsCkmkez9nCQ2axvuf3AdzS9s5QU3LskHe7xKMCiswewqk2kvZK9mNufUHb51",
  "key28": "hKpBJ7rpwjfYSo8PTBdthxn4SVVWdns6aAg2X4hqYaX2V54zuBFxqyskyCdxBfj56D9zxd4uVhbmWe9hMKn9Fgz",
  "key29": "5aPYt4Leu3dp4ZoZLC7LELVHQXhUoXqtfThMwWQar1Ymxs82kKMt8JRpaJeoY8TQacZEdHFFm5xPB7gPdH1sW8gc",
  "key30": "57QZsTM41thX86ZGnNxiRaxdihwccimHUU2RqEF3DpG99N5dAP2FYUvkva9QnqUY46PvqLAFBgNfGFCL5UjzV4ES",
  "key31": "4wBXFC3iY7EKpATnEtcZSLL5bhRYG1PDnK3VZZ5L7sJfa2YDKUWRMT5J6jSA7MDBYwovkECHyaaeut3BdGLjmpLi",
  "key32": "39PqFhN4zQpjBzaLyGNNPFk67T33SWrdqnywZecFv1v1eF8vd4zJdc2KAeYBuBFZnPzgQFX6tqy9Q2uucrb8xJ9N",
  "key33": "2poJ7Vwk61fsR2zNRdQVLYEjKLXVGktDhJZfWwpKwL1Vs2HUrxZP3GryXmeF6iUUbPEoXZGuGWhHvqKuy52bLKpt"
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
