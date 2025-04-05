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
    "rJQKREzEPH1L4xY8vzZjcAPYK1qE2LECMN8FNPGvgwy775vLvJcjvXcU8oCCpFNuioQmHvunLMy9MPFQYkaEDjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "518ZNHhb1QGSYZiCAjuf851xPLUQKfY455FcLtCyPiHUPT6AS56L7FbqQSzHmboToTEA3qwXinYrgB71SD5R93VC",
  "key1": "3wugA3Zhh34jzWdqca9Vbnirds7DThEpWDUsbmtUJTJccniZqQkNzbchK7GUebqVFXr4hyzoLP9RyR4yAibC9QZD",
  "key2": "2cKa6K27eVkguHDSkpXVMqcFGz8wR8SJP1jGMarzWCG7jTXPkpshnRdu2diCrYE68mBjfKpmoRJgDfjquLLVp9X6",
  "key3": "1VQKfNLfzFhtz8R95K5Dn2J9iRv4MuT2DuFuVxD8DvxJGvYE7g5BzM3mskjMR4BXnNi6CkKMLcw1mCXn4WeXUXu",
  "key4": "2xrRstJF1nZ6s39JDNS2MxYS6Q2vMfxF2sanD6Sy3yaWkh5nAVYDqh6ctCfxg6hUow2A6JXkcusx4rjmPRTYygi1",
  "key5": "3LubMTEcWjFobtNRs4qb7v86LhRjn93RfxAq9e46zZbroGNjTrSY1cXi9NdkYY3wB5XYViMGik193NvyK9yc826D",
  "key6": "5veD9CV5TWXVVte7H6hAhe2c3DFBa7RbBZQTYzs98o4oam8zhcBLc7CjsJEz1R2Gy6hhtU5sfdHFWCFU4dkb3LT1",
  "key7": "3ZdQsW9dm5SjRwTLPer6sBs1eEcm32Fiv3XhXjBa5Zo5Ewu3aJ48VNhqp2ov21BnrooN2FsNLnSJ9o1SbGK6Y9p3",
  "key8": "647Xrk7oBB3bQ5BH9Zj7GVWwgLEhTNaNSz2x772GQXMqkVbCvEu2PPCuYFjAPpXgSmU6dQXb3Q9bqsipBQrSbX1Q",
  "key9": "2DsnpENN7PeR6Nx5Yt5tmXB7Uj5zqZNfpruxLprGUmpuAbw52SRgVb2j6qUXtvr8sxcD5U6rpMpyJW6M2ixX4EER",
  "key10": "3HsFkaeyJUm8yCkg5XnTq5XvbuCT6uSvF4v27RNUKqCCFRrENrQ8J8ceWQEGkRU1iifXGsAdGUQ9hCsXKxKHHVeE",
  "key11": "2pZqVnKYw3tMSs3SCrGQ6wg7ZidD6e1bdzr7izYa9XNTznqqGTnLa81hcpPHNVL5Ew2kKHzCvv1HRwfvTyo1em1L",
  "key12": "t8jy5PWyBioXYiDkYvh6curBAuKPQhE1p14k8hmkn3u1AqCfeBrvJRgbkEuznrSpE9FSCqx38AA37Fm3HZEaA3m",
  "key13": "2MUkEZnvanZoGD9m1ZGRQvWiK23Nx56MLSvAiznpXR4gDx189ko9MRbzHj584RBfv2xLHTrRqbTtz4FXnn1fD21Q",
  "key14": "5LohAr3JvD4s4dwfWbu53yh9St4LjMwBH5rWykDaVLQxC8RTh3L3w349r57EwzmuVwxySRxuAmkVGSKi9PNfcXoS",
  "key15": "4AfvUGX57ttmEMQgsfomJZAKuzfWEmDmauTDpTxTUXYTqQUZaBztwbY9WVFRh2tQUVGLDqeMyeBxBp2gBUmHM8Sb",
  "key16": "3m5FhqkjcpEnHo6ZpcG6Qe6EKrNYH2bRq9ALaPRRpP8uoAuUaaZgJCyzh3duGH4ykxejuNnbuxhpAbNVMoNfNvsM",
  "key17": "586KTMb55AsiB8DrFqG7UfXmKCfMRk43Rzfc1E2d3zmR1ebHZK3ujge9Z92afxBLvBERUVx1Ha23bWW7xcwiACHM",
  "key18": "5dGz5ZHdXtmrZeaZFBNmnvpZuQrU25FwGBHb6AwniDzUvfMD5o6QCpgSsq6fTaMWmx98ckHUUjs5qNYVHwC1U6Xe",
  "key19": "95zW1p64R4H7BuAb6up5RWzDmwUa4CmLSQq52q2A947YQQKsqzWHBio5yd4NxdQJMx3kPuo7YyiMEjdJD6LG424",
  "key20": "3YxhxVTwNkTTHVVbVWszWtXrh42ansDdiGKqCjVxYphQPWvUthPSJqrwz9b9mb9buYD6oiGgzDr3Tb6gKnjA6JBK",
  "key21": "5U6V9jXstATr1WZTSHW7aR5kzj4n6PDmmvxvXoCAPVgVMdmcLKfC3E9tzfEx3aqazfSQGx6mUQTGeYanjkqWuVUs",
  "key22": "53pEZDG5M9HadvKT67iBPXAK4e9BFoqduWiqBPTaaBh1ABiDYPErVn72X65dYuhBRERZJdHVd22yNWUfpbkwcH9E",
  "key23": "5ihGthHTX6iEEXjktW1mm5q6WtTXN6CiAxkjN3Nvsn5tL1fpAFdoieU3VAqfzEUCrvf2qDx1hhwwQp9FjutQf6t8",
  "key24": "48gq19x92rBZaa8AP6grFbec49rd9qS9PP6hrSAhjLxhbVuYAzFTtSCr83c5n8vwH8LxQhTJJaDxzf8bxpduKQzQ",
  "key25": "2fQ5n62iUGhWWHKvRttkd8Mmv2wPhmpd3WcnWvGJ6GXWUMzNrVfLHYHugbYHkTP7bHMXQsZHtmXNHB5qPck9raAg",
  "key26": "3JGkUHJCvUYDAm8eRyRwpe6irrYEoHUPBgKNvDoxbtNdUaUBBiXDyD7QJjVxuYsxcji19aLwxWkEFhz2AVyF3jau",
  "key27": "6378fb1T2weUPNxXLh4u5ydVPDVFZQp4783SgnYLvieEaJpiqAM9mqpNY5ZE6E81PmEbuPytrmyVmKuQs6u7RgRX",
  "key28": "5Sbaw8dC1AqD47ZAgK7WGRNjsnoGPUFnNPy5WmqE2po53R2nUC8oBKcrQAeyLqdsBKCTYCMWVbx8UePTXvGDVRLZ",
  "key29": "BG718w9857ur14KgWkoDZSDu4mdHcvWdZafwA5cnddHMY3bRWQF1sAdocqXSfoTSGLkRTgn6fJhkDp1nwvBjnhX",
  "key30": "3CHs12YBAGpMswbu3KdmKgY8bs3ppmsyEg5wYBV2xVo8D5A5kZqz2GMEaddjnnN6eRd9EwQNQFBtbYFz29DDRyqM",
  "key31": "2FMuKPAZwcoDC7zoasRveENx6aXCYLvxtTp7MpcJoaVRGAtGiJ8SMXMPvJqgpE77eNStRj2X7mphQwjZtwcVdDvL",
  "key32": "3b5mUS2GMMEfGn2FZHFSS6nEyPoWd795ppY4uoaran9ueMWBogUmc8AJrVQvQX33JSiXrhktExD9KuATUfXYC1mK",
  "key33": "5tdZaYFE95rXx8x9DQf58cM43QqmDEDfBhc4LSr51AgUmqp2NkEiiWUz8tZYoJvUJCNQacuXHgpPSXk2gjsEsSsB",
  "key34": "5o1M5Ex975PpawaDyhBmWLsHdCypjgY1cvnacFbXedTzneJxvaUZknHhfH9pHCPq8GBKA5nvaexKDt3fs7qyvPmC",
  "key35": "5FKtpgWhif2oY1QxPn2UHcRvNm9AutMR1Fw2uWEGfv81rQiVJjfKAMx8q6aH7HuCBgEd4Emr1mdo1RjnxskZUVoK",
  "key36": "224BxF1YLubmocNvkSNBTai7VEBizHc7ftYJbkeqKMt7BPzkMyEAEgFYgqDupcr2Y4q9RgiorLhZ4Jd1xqv9tuSZ",
  "key37": "Ki3pfza48hPW7fbC9rrrAzbHL8Zo4SMN6nJKzn9fX4Atnvn5vhxLFgGKPobHcJjvWpr46fV7XQJB82m5ECAkWS2",
  "key38": "5aarEHd2uLft8BYmUmJcjMUzzXaVcyrK45GfSPvLb6kaA62CYbsmYtqNyxAAf4gZzvT67js9aU7QdDpbtqJS6YkA",
  "key39": "2ifQGgjyHWZc8tfmbwxxGjBuFNJQVJWVpBZpHNi4bdCn9iP5bXJD1JgitvTvdwGqk4DSSVA3G7A3AAPEgnMrN55a",
  "key40": "4yb6zwCquAuMTme2PmtyoUeAiWB7NC8RMf2TTFdHj9G9cv3iTwdcmFcdo7vxQH2WBRJ6BhvbvSwb6ogRcEbR79Mq",
  "key41": "zqm8VAtFDxFQyrXVXrHTsjbBiheSHsNf9FSknuqUNFCcKdr8pyWC8NyKaC7xMx8Qins4yDq3jg9sLfuzZH2MRS5",
  "key42": "5RsvTxBYoiT6KCioJbFwySZ6Zya9KVgbTrvJwSH6BPxCPZFWu7MGrzb3HujD1T6k5NTvRFKroo8z3TkpoH2S5RJj",
  "key43": "HyV8uDU3SoaetEJv9UzqU5pz5h4eD5fYw1PrA6UGRhBKbc2yPai5c5gaTZ4iAZaPmaZwhMRy7UuxY6oBurugQsk",
  "key44": "4VcNNzT6UiTqXQeGuDxMZcycXy2PKENbrSk2GqgtcYXCaTah8uuJPza7kvgaToh9p1ofTq7rK8dPGXyG6voeC2w7",
  "key45": "nqbwgsd8tphC5buwwhU59iSdjbv2NYhNj5LUDF925tiUxbMeRju9cjvmehN6oysckmR4hxiSw1f9C4TYakFFtzT",
  "key46": "2EbJ91b7jYnpVCjjmqBSj78iqgaR95Ffc3WsJPUnyD5A4kEzLYVWCdQTzM8dsocMXS2SCV97LddUDH7pT1em1Gdc",
  "key47": "5jGUp68R4eAVkimkq64Ki4rk8NKgzcW3qViPnTLbSGr13B8pK2tLqSuCEChKqaArWVCWQRaEJMgT4u6swTxBmfWd"
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
