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
    "2VWBJgXV2SZiCFyNoa6GqM1kaV3tKSgJEoeaGnmBAjBRhb5CzseEUeLyEYxs5wRAYG55NjhPYPtk2NnsbE2bCrEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPW4y1qEkth11C8KjppsLXyEa5PiquwkzoPnbzGoco8g77PNruG6z2wkbEtZ2knuPi8JyKB9w5BvJQUdGJpBu8e",
  "key1": "3jg6ScKCjKE2kyNBbsQPh7dXzXENpfVLb9MAdxt6RQyLe3KovzdzNcGW18YVCoiPLQG2Bq7hMHds3MhCg9PkoH1G",
  "key2": "3pP9T1EebY8qcLhJiNmmhWHKUkWpZ1Vz3RswV1s2VwNJvwJagunFYRkgW4WT5CQNbTSLRcUDM9d4FYXeqtPChZY9",
  "key3": "3TXPgnPRztz8jcscTBFgXomKmiCZsW7ZPwFxo9F4Xwz9rdWcxSyb9QcMEcfEgs4XUYn1sjpMThr1bjzvnD4csiPc",
  "key4": "63PjLJz6sjFts8YeSXNkRJSAqCCRGVwaU1o73ttEfif5uvEQeKxJ2cf5KjhbSGFLjDxAFgRon3vLDXgAQYeHyoYs",
  "key5": "3HDDtTtbaae7kZmVF72pEnz5sFq4yf8pzNmJDbfBAmD6ihZwWn8kw4pV5iC6RfPTunvK4nmFQkkD1reKehBA7Rx",
  "key6": "4TMqnvPsTpEwfXLv8VPQhBbTDpYXFh2ptruXHyth3x57wnbM3Vqs4UbD9r2HZ8ECg3Nw1No63qRciLx8weTngEy1",
  "key7": "6u4RhjDnFxqhTnXd8MTWzRwRiXKYdgk3ycjVzidn7zsyqMXTC5aih2F2efHLhonv3vN9pkzw6ardtNhecsrfBe1",
  "key8": "57JoodAwpvUzgDJ4jsToiNtTwh3RQkd9o1b7pvRMJ4m6rdTieHLvzxPYf9hiUkx7AW2io7KGpf8AdKfqmG9vfg3o",
  "key9": "4jtzCNvZnJi6J6ETRgFu4CiBS5xDsyfwiwF1bUoNVYoFEaBPjNKLVbkGe9eSidBfHVd2ZL6aFU3iShVXAsdRbQSz",
  "key10": "AGmTA421MZFpvkdSQYomdZywKQT8BG3tWwEYw7rW63wCAc8HPkpyQZgouANBcrWsd2Pn3z4MKL7iC2T8cxLsygS",
  "key11": "3BYSPPHyHUoBZvp7Rtx5DLHDZyNdppFmPoroUzJqcqAQqYUtXu8XCXJ9yAL6hTcD2zkoHN2jxHvKnJxxVdM1efyj",
  "key12": "3vHKRDkGmcv12KP2YDEKkLCW47X3kDqZ96Wt748Z3V6pQDGyTeNDWzoqPxpfwDAyNWzkdz7NRJAaRdMMcb9wLuNP",
  "key13": "61pD2SKPo2sypna178gnGx9SgUFvvmZktAeHVSjTMPVZMa97cdrTa8SVQoLJgEEDEsH4bHZdmraFfZFLgRnEzshd",
  "key14": "4c5gwgiPxCDtfuh6zqfhW33GBmtgvQjNs3iyXNxpmBe5ksPHzmPyMg5WDYKCoiu9x4JHTmBYWXAvzRfrnobZZza9",
  "key15": "4MyjP5ZJnGn4ZuykTVUM7aazX2vyLED8C3yyKvJt1KsVf76Kb3i1nT7N5HDxaegduHMjaN84qRm3ViXKd2BWsMCi",
  "key16": "4o1d9qpk7pDNiCpHWq1eytwxKZBaif912jZBBKZNsit59uC48HMVgP5nk7pBNosDkjJnvPuCuwThaS59d2K238PU",
  "key17": "4jPnka323BU9MiUuHWXAsvA4miwCeuMwcBRvQU9SAcTXvKgRAXkFwaJ9pFX8Mx2gC959Sjo7PkhwXbdPWtxQNphH",
  "key18": "2Tay4GNuCezYU6tbmsTUBC89bhK1asWwiK7T3XYrjH4e47JdwayVZMKRih3NJakkcUcghh7tD4bMXryMi2dxh43x",
  "key19": "zjC9sutP9e4FjcmUqidCcPbJYDxodcNcHSb53bq8t5udKybnwmay2uzGCBrjr6mAoh9XZ6rywmeKWCctLEJ5SNQ",
  "key20": "4xcU3ZJZGbVfzKTzuUJpGRL1jcPAZhiCyGeP1y1mTRHqQZc9bxXg5r431wo6F75maERKeax4amEyMtkky5VXVRFk",
  "key21": "3TT28VAwVr4z6qvq86xN97Eeog8oeib45epCF6pxAuYPrgvMNNWKVwuJVBRNiokaKmBPnHc3RcKdZfAetMbirtkf",
  "key22": "2WiEueb1t95v1vCF3vgQ4HNYp8iCnDp4Ph6rnZey4ZhbPMJFRgtK3ppkPGCh9eWMc2zVRe8rxZg18h7PNTBYwCdC",
  "key23": "4U1axBe77MkM2M3theSbHtyxbQ18Prb4zdZMLrYCN5oFzwSgdncftZ9z9BxAomuucXhR1MCvWN8ZSU4P3eNkZRVe",
  "key24": "3Vd9djKAim9MY1tVccsK89ZWdmzS3tLVKVd1xk114aZrHrykRRwRPjaAgV67M9kaukFBQX6SKoteq3FpYshusDyD",
  "key25": "4A4U5cSm4FfNQ7kkULS99fFgs4WKhzTFVhgazQrmJ4zHbMQHJFgFkCNMrbQ7J2N5MqqYo1Apt7Rdq2haNoo9tJwK",
  "key26": "4QUMk4f99sDSoAUfyqg9M7Em17iPj675NGors2Wg6qZW9kbYYQc4hkDqSkLVp9o8DKuAsSVjS225YgKFwUB3RDhT",
  "key27": "N8LCsmkYdj1W73NLndZU6QaDwC51FrenMa4f94p5Zq9HcoJspEQTZ2KeMfemrTNs8p6h9HQf8N1VKmYa8DjQ8D5",
  "key28": "Ve9Ne5JfYG45dWEq221ofYrKTJ53otgML4yVZihwpckfmihcvKQzDgiCqnJVpAWqavcQqpuWGB3AAfASJB4eEt8",
  "key29": "5DHWxYsJL27yLSCg5D5BNZevZpLRnXtvmf4Q5LFtfbYeHcTkLkCRfHtxVkNHeTjqDRXEtYRhwnjRJKVruSTabPet",
  "key30": "4XdENWYVnBameY9Sqorv8FtyXsHXxHHiRZwY8e4eBcxxqZ8ydxos7mycrCbbGt68J8B2bsUCq4rUqfnXzajsf8Lz",
  "key31": "vQF1rofE3JmD8PD5JUT9UssMgYr7SHXi2obJqkmTgGTDEVcxvwCygH1vjDnE3hzqiHDVNR4Zj1eDvaMkM3EZ7jn",
  "key32": "4n2CsVi56tUwvFGvHxnAqFoSQM9Bu3GLUGsfGPnQB8MWYyzSryiQknbt3r4qUUgj4hqG9PmmFfQjYQf9u5E6AqHL",
  "key33": "4NiHaRsZQ7HrRycby8Z9oWq3JiToNNUCbHVKPt8ozeyUq6LzHXRTJXww7tw8FR1RQs7GNCWTqT95knT9yXfbC9az",
  "key34": "ZooRByf57KFGagiq1H6WnfbE1PMPvQvHCRJ5LjcNtkVKtNaFDmKdECcrC7VnBj9Ag2x2zTUXzWGv3gN8xAWaL9j",
  "key35": "4FVjkh84BtaQQJAtvVN8HB7qdedpp2Y9q2oSyh6qzXrY2QMWFGFK3TGLqL61GwvhUQ18rJkwSyTMYHzn1J8EPNxi",
  "key36": "4kcdRhLAD8QG76gpsipdCnA51xWtKB15KwiQfaTRwZwiA8Y4v2APDPmeqDAat2fZziA6oMzd6V1LQgZBhuWbbCCG",
  "key37": "s3opnPLMEmneDqEquYu4BpawSDJpAKiWZ7eMSn7o5riiRJF2QKsGRcF882JzRW2jJdustbKaLsCKbxhyyWfoKPh",
  "key38": "3P4dw4zLTeaA93etognnjZFtXsAbytnwq2AFa81rHD4e6Mpn7nupET1RaNY8o39L2eAamLX6hqLQkDYCUHxBsBeL",
  "key39": "66TrU7jQcbPFYEqrNwLByJFWooZHCQ5j9wE2TgHoiLfYKU1xPUeyPNuyeLhBDyP5c4nrE2Txxt6ZiwA4XtGtVeZW"
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
