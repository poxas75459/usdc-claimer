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
    "3hoh1adS9UJe61vbsUQvnywuAC9fmJPH5jj3wjnR6EraJ6b7BtvUcFq9t4HzJKQkuFzyr96FjSLJSKSYiF1xomza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xHHjLgrEeEQycUejGMjQSdSv4sD4ho7kBUYgtx3oUdBPjDLQUqbFiKyMUg2hzCBsChZUv6vxEWX8XMv5hiXWTZa",
  "key1": "2SXjVtKmGygjGdQxgeWvdpXkv57bmy3VBentWzWTcpbmqY7chrkwfTqF9yMvtK3y5XsPd25UZMLCUaKq8ZuwUuxQ",
  "key2": "41jfNu7nso1ZRwc4C2JZn8g2WTyZkZmVS7aST5HU1ZYZAkVcECqYj4gaRvZq8xVrdFSkr8B6WsLP4Xj9hVRDGgm4",
  "key3": "44PL5QPyULohXnndCSwfFZAQaTSwfEYs7bwfKNs5bjg1fbQD4bxtswdgaMyMj1eQ8anFHxJqo1pXvGdS9GWJTMam",
  "key4": "3NfKCDk9fh5M235uorSznFgRNzF2XTgWP77yzdh8HxMo5oVJukQ8bkujVXejtLTmYbQfQA4oLqYfrdVR2ji3JKbG",
  "key5": "5mL2ghfraLVuwSsQXVkmPfvh7RoPz2A7FpERK2EdB4aKFh3k4SjoaSP55ri8SHDoiexAPX1wrNG7pbsDN9jnduw",
  "key6": "452RUmvCPoTvuvFcdV5dEBAQZK9sGY2j2L24xdEdEotfj852FcicPa14BD5rkZKvGfhLPWdq4riAf2qREWPXUCY3",
  "key7": "4MaSz2HMRzqGgVpcWDQu2C61UMy8iQ5nH8gZTc7JTnRBM5djqe5g3RqmrKuTr77ue7dWCJkjmBPEacYmNHnQ6BSq",
  "key8": "5TjozhvM2QV5VkofxRYEkpJCYynZT924k4ET1m2jcsejGTCSqpAHK6gYkVtDWQ4beT1j5ejEtmRHKwHTmKtCuZuE",
  "key9": "2Q94PGFSrpCDEoRQT5dMgxahdBEtbe9vf85Js6xYDTQgMvo1LsU61yyoVrfatnSSvEymMBZJbP8Bk52NSs5QzahQ",
  "key10": "qYU2EKpWQs12CcaQr4FTtbvbtXsiQyEobsmdxGabE8eFTUbWSxWkTP1cWLeZjYVSC9XRRFjmwZ2LZXsy934BU1u",
  "key11": "3edkdYZdKu5cGeRK7fUhVTCFyKtA6aFwfZvCdFqAQ1XrWdeLTD2xXp6PCLX4TMHzEikUBof2kBT21tAP74pcKpT3",
  "key12": "3FUC7wLnbbPWEVz91ymHCyAsmTdDvtGuSUNZfciMdq37NUVxySmTZH43o1nEf2UNG1jgGfby44uPut3irmoamMJv",
  "key13": "3PmJMzDUZf8QWxLgjXtFqRtYBY9AbCqPYeaayBUHGV5bsfzyDVmcP1pgUEqahpCnLgZiJDwMdkYqTS4rtuAxyUyg",
  "key14": "2BADgsTV15BqDzVUDnM7H5Z8VBJWtQPEDBdXjy45AcTjxd2aoZKHa7y2AC8TpdgBrPvW2QA1Dm3vt8xGCZv4h4V8",
  "key15": "6yvQ9a41eoVUM8nzWogfK9T3bBoxiLhFmbipK1CxMZBmbkBAx9ES8z1gdB3z6jwD1msFV77i8GxkoZDnM83jx1T",
  "key16": "zT3K6bvVZSLVFwa8tv96QewKiLPApaNwCb2UyHmwdfbhUxjdVVXQmSQ8aRpiXUot5u7EAaQPn4WENXCaVJC3yNU",
  "key17": "5mgPq1WpckEgs4kZDSyLnFVkFwkvStr4TTk5JLxQ6EQJGAza8prEYmSCgqx6KELHj3d3D2ZeSgTuiZFHuJBaD6RS",
  "key18": "cd2HQ592WJCcze2kcQLzPJncET3HSCSdDzzzNQGkkpZxtZCXdwyYxEWP8QNgLReJqPD8NNSMuT8y2CiUxv9YDNi",
  "key19": "29xjLLFW1rbcA7WCt9xL8WZsmU6bZfsZ8AczPcAEysSci2Msmb4vzA2oV6ggLAgVS86zLSy4fMWMjm8wxmVgjtKZ",
  "key20": "APeqLmvtsEQDuqsZesUyY7hMeKzbPsCQyGaSzeT2mHfnw92R3Lrj1oB5dvgsmQ9hbFc69pKHXQ4CHy1qvnicz53",
  "key21": "53otwefdN2je9mjTAYUxZp6CzDNiDpKNUxKbnnLcsK6c4yJVmQxxVHqrvQwCfTG1CQv8dCdkEufAew44Jfra8Gd6",
  "key22": "5dw9mirSDvhQeenpLLCZ9itMmLQZCgzyGfz5sQJjHxR9JnWF9R5m8XoCXoe5jncqBmWyXZXGpsjc3fAnoaUQH7P1",
  "key23": "5XBkCPWhZfAssmF2NJMkD9nf4HMHA44VScdRfmUVYnTsYEsPjJcjp11doUfsvrCmVLLC1SY7ZyHk9xtvrupeuUzz",
  "key24": "2vym8RbFaq4iNpPatgRnqasEfi5JE7mFQJNnvKmeN2JvB9B74u4cLv5tvVFkzDA9hwMopkH4D9LkWizHPdEVwCrn",
  "key25": "3DnEfTwXx6FXARsmryGU8v2B6nMqHSVCJGwRVofr55J5QXCVPgvSubuMV1m7zmcPTD2MGs72wRyzmkDSvuy6Jwvz",
  "key26": "3c9AeycD8NUinjco9K6cMc7MifwSvgYSMMw8MrFZG1nrwr3actWFesRForEWKcYVECPNvhLNfo3vAYBScpEBtcS8",
  "key27": "4D2biv4WwRPJLKQh8JJg7co7Z9FK57QNEw32WgbaoPeZKHGAmBAVLUKPYVSqGsfoXWMhiKwDtRTWz4vtdE6Mphbt",
  "key28": "4Z4LFcr4gKPxxW9Ex8qUxzfHfPgCQKgSf7hoUhv3it48uuwedx52PerGJhSakVKX7H7j9b9zwyMZhQkvRKdF1bFJ",
  "key29": "3gnxNS5ybJoEzFqaCgsW5CSF8VCM188RczBD5SZ86o3hBJ4wMFRzCt2xarm6utHStCoy9b7PA9gLyBJyLfe4YFqL"
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
