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
    "63zqN4jTBpjw7J5bPTkULnGUEN4WsP2ckatmtDnyQRdzULg2dchz49toXUkasWjbKdvXD3XnwDu9XZ65B1NUbFuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rC4nng93hv677MUmLPoBhs5DbXfttModJox9Dgc8LctG8p4SLmnKNvegH3Jhg37AzBV1UH9UZeU2aSYDmZL5wrs",
  "key1": "54gn6cbPRxzfBLd2qLad5X8poFBT4mXgvtstj7uhT8xbJG7ZeXGtKY32HzC7j8YHkqUzAbfceRroxzkgx3LtAMbA",
  "key2": "cj1yriXC9EtunBbVsMKs2zGrmV3AY42EprYRReqkdAtycY3tPLbBvVFkPygvqNnZG7e4er2LmkpejhqwoTaVETG",
  "key3": "37w1kHyyFQgVVVwPBUdoJaFgwR8xV8HjcSn6FGrfeVx6nEmS7BMBumV3Ep7r1MQXd2wAKUVN6PXA35mHH4BRahiZ",
  "key4": "63jWvN3kgfK55C8VETVTK4nUv7PU7UQXM3qkzQnaaX2rMCv4ZR5Phz13xAqfz2Ef9FF9PjoKT98CvzjzrKGsouy2",
  "key5": "3JeWGzLtXK6bBWZVjyUZYPwLg9rtygFS3pkeqmxdWyTT71aHuJwLX8vmn8FCudV4CAdnbzKYvM8aZ47eFFL2hHBA",
  "key6": "5cPF681ePAsngnhSWiV8gVnxkW87bT7eagiZth5Bf6oT4Xrvn6pXKBjLXDut8vLw1B7gx1u3SY5JeEDPqNPnK2Sa",
  "key7": "2cvmRcHe77HTjgxQpJXzsQNSJbFUdLNUQ69ek5Zaznqn9muyR7Pc34bKbY1of8tDjm7FTabkVHKSuRY5w1zfoGKk",
  "key8": "62VvE8Szk6fPD71E43BKjsyTsFm3CDDyJzixKLR9yJ53K3U29aKSDCQYe82EG8S7asc3neRqoBGkmcNxtYqXVHB5",
  "key9": "2B8J3wjR7ZCTRmiTfXp4Avu7GUrm2Mw2NZBoxCSniYpWdqihntQbxgU26T35sLD2CbUULvQCfFyMZnXViAtZitZs",
  "key10": "2fdTQtMjdjADpvsiPfcGzmRf4MGE6dNpWXUE3vKL2bKrMFZGyvetTHXFvcvbVMw6w4DBEwmEUXwaGQq3ct81fgPH",
  "key11": "92TVrx5hzSPcp3UBPD4QtGrBZvS27N95Fosa34KxsEtHq7koeSZPNDZkfzW7eypaXjuHctNJbYrfiLyyc7Bw2v4",
  "key12": "9FJQAQgmEgLEXkBfANNZSofFtx1shpg1tgSNMJMa8U3R6sjNeUi94HfLthNvy25VBKgoqftMeQNE8oSNoMjyfV7",
  "key13": "2togGQvX779KbKsLBbWoq2dD64pQZsBEisidpQc9DwAieCLXHYJJEtJzd1Ck9bY1mutMwMcRx6g3FQMfxLcWEdWL",
  "key14": "5a6vSvDDqHJhtaScHuFjCGs3kLH8YXknLfExa1NpbdV6hANb1W9pmyca9CKAKMQoJDB75dU8n1uACumNgC7xKsMg",
  "key15": "ZPQrnedt26bpXDKH1w4ByzSaSofvaSa7z2P9Vk5SPM1s3VcQcVi9NrjKZvHqQ6wFHGWW4DKZHG5icE28vzDD8sq",
  "key16": "3cnSxWTKhbNkpEsr19ZqCaCmzVsA8XNKUaWNMu3QRt2NRkt3yttEwjm5PH56kubMa1z2Y4ZJwZBr9ZQ7VcgN6BBs",
  "key17": "2VuasCdJxarVyHpZ4g1pwwY3SUPmmr7T95epjdR6Gr1y3x3fmhNKZ8aj4hEjgjW2MF9sTjfpC9QhtPMXQsjHxHy8",
  "key18": "v83mCRrsNEJdnpzGyjwmE8rbB6FVmJFC3oQBDUujk29GKmDLMUc63vDay7mA9rKU7uMxAF9MMkGE1brriiqC9Cx",
  "key19": "4ZJaw4iE3eac1JuxLb8refACa8X6RF66g9pHJBG7jJ1uLrndKAMwPa1yDZph3dekXE5Kas4UHS2hUWMBgjaEibhw",
  "key20": "5uZc3vFmu3oxn8JyGWEKHy6CLzpcvp9P2STz2xRVPLuJecAVNvsH9RPKBWsaE7nhLgF8v6pRgpGNHJnQaKc586yQ",
  "key21": "5eWfUQcHKinA6dsTLBzqmkmepSnS4wV3hg3WNY6jyZ46TgbpFZFbbEqwzt8kHRS65zU3T5s8ENzdBDsjhE5vFA6c",
  "key22": "dehEEMxwexPXa4RNYz3MmXcWgnEYZuTK5h2n1pPn8eearfkPi7nQsqz3TxJasdNK1gvE485nLmfzwRA86vLVerW",
  "key23": "4hXCfHPatX8GBpj1UWPd69L4YpAeqdAxhwi1Mhcf4nsNZaKYLBPb15tmyCtzxKNtW19pQP1ieMiE6Yvq224vVLSx",
  "key24": "S7WuMSAGFScjVzAUjLHdwFtqX6PjoEi1JSjhRVMtoU42jYghre9WPf1eei9Q47JbVSnCHv68DaBV8mbYUm1ZUws",
  "key25": "3kRU4QuVVEKQTtDTs2cEyf6VhfCN69cD7ULN7N1uZw5DrkFNfSnuDkvjL2oj3HhmoLonZZ1coPyB34NgjZ9rGHsZ",
  "key26": "3RoNfDidq695XPFxAKJxC28QTWcXbeH8SsYi8QvocppWpBjTtVo2J7zustd2LR1BN1ppZDGD7cXfVy6aLWrVmVpD",
  "key27": "4Wegnw2BDGZhpt69cumxruhacHJgC8RpM4d1q8WoZCBtDAyTx7v4BzhwAS7ArbuzHAUyTZcP7nJPsu8Th29pNQ2R",
  "key28": "2uFNaLp7f5mySxDWE3qVpsXU4Hq66XmEBYBscJdCk5AUoxfsnS5znYFJ9xmhSq4jmwcZ7ah5Wqzn68XMRUaMGN8P",
  "key29": "4Kww6hpQCuX2FX4Y2PnwsKrM7vzwZJXSjwymAMvSEGvaoUdhvhtRf2m4AQfGoKrZztChBi4KSZ1byjkHyFMEEwFf",
  "key30": "2mSsmqpgBDRKtQjdF3u7LzD6pzVgseZDAiwJ62b7cXxXZLXduvsFgeti9r5iFeJjBJS5nEpj9LWJ4bMTWZ5J3pxP",
  "key31": "5PcmbTQEGdZpBHditoi2Wk1HSq87ruJTGTY9e4w1jtqNuS3XehsfSkYZDXh19LARZdwofMTjjoMitjigJz6fSAte",
  "key32": "4cjZmCjGJTqRtPP47hauRFP1wBftmXqyuGTF4eWCTK3omq45AbEdfJfaFhwXAo19RS3ZopnUS1gcWbPEyfS7uUmH",
  "key33": "5YGk6Nrgt5bK2Zgv93sCpv5eUAEqfWetZz3aUtPFUFwz7NMpTtz6V3hAVotGGQW2VYYMUR7UnuyAnQfn9k9uS8Nv",
  "key34": "3Dynyxv3o3r2taFuH4tsqLNkVQER3DuSdfZDruHLQNKbHCFBEFy9ZAs5sF3RxH6zMweMYD8HFgSziE7bT6ysXVPu",
  "key35": "Tpm4kNq7PU4oqifj3PsVCiU3PDduJJNcN9EQDZAF4jnHEFnQf98VHJ6wrE43fYtziNj23v6KRYQ8YKkfRV3u6YS",
  "key36": "4RbSCTJCvgxaHSowE9hc3hEEcf84QZRYBcHHiaeHoXkrTbmpGVWT6Y1FpSiDg7D1mqN9ARPKeS4phHsDGPDqSQkg",
  "key37": "xLTjgYtg6vaK1vVhrvPtsYk4HHLjj5AaMrJTPYDhsFzoBsgjBTDK4YtqgHomCTKJEbbukNMLQYVG67EBxUHWXhF",
  "key38": "4oxF2TukGbWPRSJ1rbocST4EzZCHMXxNbbk5JQNjkRvScQpRtmkeY4pAAEmYsLB4GuNry2fqWnDr3bPJnWPNouyZ"
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
