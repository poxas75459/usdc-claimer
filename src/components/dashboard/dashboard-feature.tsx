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
    "2tseqqKE3NMuvwwj1qyQbEFKWAjLt4yQSfhw976NoTa8HF9T6UyyqsY5T8TgsdbccinTJULKysBqDXF3GXfwjV1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDyZvBnMEfBs7HattCpkgBjCHJ18bZUru3f7YajfKRB4HfAvQNZEykUEgrczfMK7oumnjf3WRejVqpSLvDnYuiY",
  "key1": "42aoB7hkutvC28p8dSJYfJLJVaAFZj1ADutfy4sHtx9MbNiLvgdayqzog1B8QQcGTnh7rCkygDQ1ipxKNJvT5dnJ",
  "key2": "dTkXXeXmML3jaE9g6rGN6bqcDcBEwt79Yp6WixHRdUgkhUV5dotQmnJ6yjN2ooRTktvY7bmPhwqdQGjg2qqmpyx",
  "key3": "5DkVxSQPcPzBmdSpLFXUGr58KMfq3R437uHM5T8s5n7fxf8vKM8GJi8WREWhtC8pqMFf3BU93fcnhDTkwq8CrzuE",
  "key4": "5ZfLq1D7RLK3FS2d9BUAdXiGWMoY5Juqq2cmS3igjwV9oS6egD4hvhyDrGXq8gp3x9BaxahE8Xsxa6TmkTjwtVmQ",
  "key5": "5qBaWs6SxScYKmrkLbqvKEZZ2C5rrLCCdN4xJGiu3ztPsrqPe5ZWfuW1JBmEvnuHcWMQztnRnE5zLB1F7Vdu1oQ6",
  "key6": "2fi7w2LuswxmjMwb2sDbJUGHSVn7fAte2VnzEsWizBLXMe8rVqkbijE2WxmnSs2svKibDxfj2Wupkbjpnvu7bjq7",
  "key7": "3bNzbQh4A2nZRSN4FU3koHR59QnPx4CDh8qH95QjuwmnVxgRTzpMRdngRxVabBPe2PSWb5MGcz3bf15kN5a3GrrN",
  "key8": "thY85HKZrNqcmYYUhrNAagzrfEdteeiHFgKcUx8UkEL4heFyrwbRJ2aGZvPMjxdP6TSDmcnRYe244qiQW9pXcf8",
  "key9": "3qSVyuyLHGGbuXkRurRRJbcrgezNhn6ppLmij3rdpca9buuoHWpCcWpw1RXXqMjzzBWj6fyqDP3gMqKvix8z1X2P",
  "key10": "4pHtbnsgRCqtdPYgq4qMunBcfAp4nAUmsTNLLuSuYEWBo6Wbv5LCQmodV2VZ57BGfQAaHwKZb2vJ4RuPmFMun19X",
  "key11": "4CtuQqVy214gdYWaj1FBSJJL4BoUAFN1QegbD5Tg3pryiwGvFRkr3zMWkVJRiHvsGFNTqRWuSjRE7e1VyGNfWMjz",
  "key12": "5WGQC9dHhAcfSPfompRXqMnpuQwxuXrdHT9uzuAKLqkXP5wq3njJvBtssdHCL8q7DPprxBXfxExMVu3o8E9FF343",
  "key13": "4Ca6DfihWWRXscx4Fd913sCUXNEh7YgkiUGiJhJxu7jaqb2sZWTkSL87m7Vkc4kRX22M5Tzug7RybrrdsNcCdEKP",
  "key14": "3Mg9Xd2z5nGqybCDbqhdxrjR58xLaUegsh4Wj7h4x9Y11H95BR4x2vYXpQyDfwchQRbVYH5mzzy2zYQpXa1tqiQN",
  "key15": "itcduZp4e7kKvW14FhKcT96HikELfPk9UHZHPvGsAH9jqxQXgVqgTGyukrSxSei4pPpvW6usnk4SMGWH4FfQy6g",
  "key16": "3q8Lp6YXzcXDKbdNfzZ4cxisvQkoM2TsMeGE7HJwfuKa9szT6PDxtfBxczE4uwcDRSJxhusMmQ3ZiR2Dk3RYvhpr",
  "key17": "4pojEDHxHPYbw1yFpQWrgBkD7yJ3fYYjUTFX65oXXxcFxZGF3eeoWqy8YJ4CAFghzAa6xwwNQWdzuodX257uo5t8",
  "key18": "457mLnRatvZeWioVswAuEmS9FgtTK18msKmoTbg9S6tY9rBFyA6QGhcwnPY9hLmo5sGobo4tu8s6SmhKeWemzkJi",
  "key19": "48rh6hd2cBep8XTby14rv6nemFL1BSjEiiF57RTpL3zasAjbr1AWd554RSmCYYaQiT8uV5LFzMeQz4C1osoCMrYg",
  "key20": "45dCvXVyfPp4KEd4f2hfndPjftnBjVgAhdXYEdHHNPyrL1hXrnKyYJZGz4hD8N9vUWxcYvDpxYgcaAvvTYLJK3Bu",
  "key21": "3YibFN4jYnmEMJQ8kCteJ8Y53ei2VuZ1zyfmVAgNtnm2h3yWRDw1wMyu5swMJrFhuDj7kySeyjCU7mXb58eHcwq2",
  "key22": "5oSvCATzWg2sJusYv9dVSgyPSpCUkTCBD7qhkacSmpgLe262rk7NN9YyYXnTBgQGxMisK2VLSpn3BVvPmNYszi7K",
  "key23": "41rzP3REty7hfbi6dBVmSxgCzfyBkvacJoHmq5M3vFwgzvK4jKq6XGv1KM9VgMNabL6sz6JMowMUBa7wNPprLqep",
  "key24": "2po4qAE5WfY4tQT7uJNQH97GodbyR5BHzv7SkFxEPrtcD6of2hJBdfu2H8xN8rx1h7wnjoR82xDSitX3V4K32Q7e",
  "key25": "3D9ofmgSwRCtNWoUqMYdU5GVqftibuzHaBCyTbfRQW12bHcvsnTTSdnH4VXAiFZcf6DQDzMskur8nZyL5suMcWQz",
  "key26": "4xdPYCJrEUQQ1mbUoDiKBUm5RFCPx64cREAgrUcG8thyXxxLmnAj3KJEG8U9iNVed3FRCAyXS229fa8p48BRHSsw",
  "key27": "ChN8dCQuQAuf5r5RCqu927N2FkECVxyptKgMXMkDtgpeZvETUSGbMzDLNj9bNwZzsh33SqTiTn3mxseeE7NehYx",
  "key28": "4XJGzZkKDngrM2M6KYqUPnPUQQPrmVUG5YFhGZABp5rXiuD3NTZ4qE5e84MrdRh1eh9pUFyhhoh1PN9iA9DYHsFt",
  "key29": "5neug5EPsMPYcV6sYYdG1qcwiQG6uWY54CUcgahDbzw8EV9BTwzFBCGbX4WdmxeZWjiXn97W6nJAQcVZMQi7M487",
  "key30": "5kWpaxLGobMpQ9EVYuHgNqm5Nv4VgP1xXXpXCEk4xDULdPBWoadUQzuCwchHdJ27dvQhvqcp3ooH9eSPznTdBbni",
  "key31": "2ybeLfMKSmgobNJmtQCVE9wuBvLH7nk2Z3LfE7Li5df33hA2VwhoeEGimxyVqgsAaS2hViFWvPCkdoa2BZmx9zLQ",
  "key32": "8ubmW5QZ8drbKqocL7nQyaFwUyTmFjvfWkMSp81u1XvTDw6xB6V8iB2ReyFrL6LnnRMnry36wuecFzgX6U1CYbB",
  "key33": "oPpFGzjcaqFRAF4tAZEaBa5MYjpHFtxN7XVPMt3MRu1S6hAYH291Sf8g5YQDeKwhqc2SHHsfSWRzKK2Q1N6N6Jo",
  "key34": "59Sk6MTt1abjWhxEHpz1kB5VXSetYmjyDNynwAzoZsA7apGJJ4beGuAqNa3gAg5uFWPVja9QvsBpGJywf7XEwbiP",
  "key35": "2DudafMscybodyU94NT6mEfr5JM3sWDJzSVUQQhcQa5LF5AVKTnF6DJjq96ke4nuwzJTK4N6tqfftGbUXeJopqb2",
  "key36": "3a2Bv55xuTCGGEP9XtHGBxtHMe9HHX5EVSnuLu3TwWgv9A3YPoSAPNVEV782P8HxGyiCFBE8DFH23fxojyhwNoS9",
  "key37": "2aGF3HaGpFV6W85JPnJQpoPUftf7auupckpE4wJSydC7qS4Na9AQkfJUgiQVUqNJv7qCftcU9YFdZsvTtkcawtXV",
  "key38": "4oo2bAV5tWZz4R3bHsWcG6ny5nf7B1iU3wnrhRuCc8xTSmUeM71jpRZm1sYSXiiAat6qWB9RsmqoxknL9p3er4R",
  "key39": "5W6tktYM7BVK7YyUBUGkhgBmCsLAERg8RqMkW5dgvLNsMAnqkirWVn9xvYPQjM1mRkL6wHDb2mZ5YyAw9HvqauMy",
  "key40": "2CMGr8m94xbwHuQG3pxMghuLHW4KaP67TZYLd17Fe8LpLaBqR4G7PJUQUtzBJDzwG9mj3s2yJy9W1LZGNnqD9bUf",
  "key41": "3xAPeMHnnprqmuksAzVNHs13fwvqQniECHiErQtqnjzbPqm6Bjj1QSXatMpVt3iwwkrkLK8Ash35cGHMk1UzBaTg",
  "key42": "YewWAepHDEDdeXqr33UMJpLce1nKbEHVvaToGeEWpFFzUn9ZVyqZfmi1h4gij2yfSgvTqzktduKCjgMsK2gj3PW"
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
