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
    "AFyeGmT6P2JVg5YmBUStB6ReZdmNkFi4FUo4ctwF5U9URaGNQVbwEcUFzqVHgPPkw7pjDeY85qmhqu4HhTXvKcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6296Hw7qZ3RT9E2SPrDJz9Vd4PqkXCfWLWnSAyXgNB7k9aiz45j7y5PK65nqhDPM5kum41uUXYh3Rzg5Br5y7u1j",
  "key1": "2FnHgpmYeDEFy9Sfv3kNy1pPxEN58bdnL2atXYE1sY1EgV37jhBJtvAwpj9kNNqmxxDNKJUYxqtxxH5xgLAeF97w",
  "key2": "5wnrjA1Qs2BprP9zDSUHVS4f2ihMR2J5Zhufc4ALfoZeBfjgsZHYRtNygd1JByVkguXV3ch7SMomzhR3MdzHkwZ2",
  "key3": "3QgLZhPvacUwxp7TEgehgMgaj2ZT8ahUsMbcYWmEXPDspqivZUKYUZGZwo6WfPzeMyPpGHGrQHCpfF5ugkabnryy",
  "key4": "5cWP8xmuM1XWy2kbrqiSnuSEveVymQfrg9uFhDKNPBryjYGHcQBddwmksTS52o1Y9xm13oRAiH7XHA7HEXJLZFKb",
  "key5": "3XnfPLHPytnGXYKTuuJVh5qd26QBvm7ABNUMtWqLiv5fSqJej9LuBJDk5HqbA3oRC4PBf26U5N22XB2nXjf4T9fv",
  "key6": "4KgPrYfiJ68WThdELkXR337HYsg8Jp7UTwjgLWHad32cPiEmgVgv7eKM8rPFLQGM65tMThRZcjqhprxjhdQr8KsY",
  "key7": "5iyQyYw81a5hJQH4uy1LLcMRTkCPBqCfmmyfEiASpDFQvoHV5c3cAsp3ydjr86V4pTqemhLHKpAFFEvhMFbgVaX7",
  "key8": "2rr4eeSkxKyCcTE2PZNCiYasd5Cy7SyPanAfC17mFu3CUn1x3ksVSxXkCKhKxcrmLBg9k6dDTBu8dn3HEQWpceMb",
  "key9": "46o2sZd525nejnq8z1eYyAc1PJq6PB28ZkB4vR2n2sLTgHgz4Bw5Y45FwnL454A7HtbQGDjSyjWUHu1BJMFqaWTB",
  "key10": "H5PUuyfgn7E49tpuKxHBR5Y6YT34cMJ4468qRcQXNhaP5FBtCY4FrYPY37PYvzym9sX2UX5WzLdcQgDb8WFtJJS",
  "key11": "5CohoyU2W79ccWVMycUnBgqbd66u9HM1yDJcNvR4TnzFG5LQPNhqJCFBmWxY7ghH16TZQD4zRnURA3VKdc2ej9KT",
  "key12": "3Bb8Z5EN3gWu3AyC96fvdebW7dSGUvS5PhenTUsx8YSWKkoQCatLSf2teX5MnTYnS3W4KcKhBHxw5WnfMMFLXFp4",
  "key13": "3iDLkDVhBLqR7bHZrCyFsnqKzKeSSkjtiYrPEYNSAFC2rgDmKE9Zky5vZXYgcpjjSnoxG95oRqTak5k38obDQigY",
  "key14": "5Doxyk4Nj3JNCpLE5i5pfVWRrNeq4bzpsUhKxDuWumn72gWU1iQYLc2b2o5XB3mZfkCv5ZnUGszHk2pwEtjLT7Ds",
  "key15": "JudiT3iDW74BxhSwU7JeYkuHv5srwZgGxf5mcoqHUUe27Du3KqxeLbMdt34yhi1DCFdkurg77LwpvAXZkGLNR5a",
  "key16": "5XHzpC5JmRrmLu5wW6BUTy3YxdQYL4Dyp1k2GKbHvAafNRNBhG4GobHwkp2hS2efHVQbc1e2asjNPLvTLdT94Umd",
  "key17": "5ZGtYtgSwqk5gYKbx1jBvchscgGWzto2CDbxx51nQJqha4H6L5ooopthdBr7hELBqqVBvCpphqaNYvbnq9F7SaSQ",
  "key18": "38obPS2E5jwaXXbKfMXzLjGBGxcouz8mRkeuqV8YkAw4xycjWUuQpn6t4wwHSGHYXh8RimBQDYbmH7ApxpQUG6AK",
  "key19": "5aigzVfxWKw4F6F2M7wFdNBC8rrALihpgzoGmSYLgKUFG3MoKxTWeSz5k1BEyaoGqaJpXfLTNYjd33KsYhVPpxwa",
  "key20": "5CBN2vqDYRTmitEaMMfpu4sAwpK6vYN8Dn2jfCUEyqNoT1HpReeezvhZVyt8vZrBt2VTAfMh5UrH3sVeA52FzSVT",
  "key21": "4BchQwpsvRmAKYsNwA7siuKDvtqsGWFaXKK8s42n3cQBcmbpodEb4L9iy7N9ntPWCQvB85EuWLm5zCPNeojXAQ1F",
  "key22": "HTVKiPvJq7i68gwVe8MP6NMzqUXV6mjXUXLPMAoVQaPMwkF74G5ShXLmnCMzC9qM9V94qsWKhZhA1P374wDyYdv",
  "key23": "4YBMTJwGXh5J7u7Sa1QK1nrzAGsmxnpsMtvmqrcdZUhhPSvsD78keKuxuVHPYmzhkiTnQwfTjsrUQVPvmaAWu7Y3",
  "key24": "4yqer7YQ2kpZo9V7yENq2dsteBFfNoXp48WvBaj5T7qaa5XtKkj8K6sxBqvnvm3SHfkw45EbkkziUyRKffMvgTCo",
  "key25": "36Y3kt9am1FA7sS9tk7UvTcWo1mF1cVHswTqGM4JjTxrDrHRWpQUHYJsPsnx53kvb3go1ifXpB2vpj1xamo3EBzr",
  "key26": "3rKQ6MgXCJafkyS9j9HdDKaKpWe1mjDtaq5axeEL5MwEVGT6gjEXEUXnDx4AQbCDdPNr6BjCGX4ZkjXezYiNtGm9",
  "key27": "TotQBwUnok5aHPWYB4QjAC7uLkfN8C6Sms7EUKzirWqDSaBAuhN5zFaTq2USPTZrBoUnX4rySYkzkN29xkRZ7np",
  "key28": "3e5X8xXJsGPFrGmxJfwJThMpnnSEQAJe7qHWc9ReCMiYJqYMneprgDtmUnV3E2b7Yi5aToXB8s9r6J24rwt1Tgnj",
  "key29": "67hYjodu7ucSKqe5oek52L57arp5YGbnEefJ6YH2S53REyWfBg6uchnebEtUdRQiBqaVGmisGpdt4Q3emZqQgMF2",
  "key30": "5E7vQR5Pm4LxhMvv6Xw4RdNN3Anunuvp2ZruFqZ6tkBnXJRT3aRHeCPCZpPFcWuHeeZdgEbtSSaiarJXtoy44aSw",
  "key31": "5NMWEoqhgiJ1ana1MBZXz1ZMdKUaNoPnGDkTwCVRXY2zZ3L1hnSmMdCVXSNLp3rhkUFwNLW9cTB7XioS68dGBRhH",
  "key32": "4mdMbWM3A8uyajnNdiYTjR1UiQDYTanfJT2ir7CwNgzcjx7BJw1LT9QtBdHCRuDCBA3FduSsZgZpgq4qrdnRw7s8",
  "key33": "44CRrCDhxKHXw9WhpMt962qusDkgVYVSuM27zHt89gfZ9xSPt8ftacgLwVQVGQsDrqVobBRfRvxy77QK7WSBf4eQ",
  "key34": "4q7gTfnr8r4vMtXemaW2y44yG9QsVXUC6izF68rpCnyqGWM9ByDxveh88SfpHihXdZ2ZLMt18o9qV8JLa1zLtqc",
  "key35": "2hPHshB6JvmLz3Euba5YFv1TGfNjHZmAAq1koNyYiXS6ZVReCVY5c2VvR4pNjbEhQQR43dQftZRUwveiC4zuBjb8",
  "key36": "43fUaRuFbSFwgKmvBgzLPX5uxZytbfrDigDTLhaepEq7HTnucSpnPFM1TLMkRfopyjGWsLAgprqc8GaTQxnor7CZ",
  "key37": "5hquBSyHRN6nxbPRN6Lv3b763AnsKWJzoMV132VLJhSoKQ8AJkXYodzV9Z6nhoXG7LKHERepEs9JmPbUD5eK48Nb",
  "key38": "51aetXN77jADvzHdurHhGegmkb8JbDh3EvVk3V6J2SRjdJBBTYwVzRKKiKb8QGzLdxC2iwp7g2M4aCeBZa23ii3x",
  "key39": "3JqXErF5qhKhuTjxAanyQZz5adfpyZask2ffAnj6Uy6bdE9WKSdp3nGxTEgGQ1NKcPk2TneGJxx15T7eepvqMTE",
  "key40": "2pj4KHxh93FacymMLNN8rHDGreB4PHUZzVv8CGzbnnaDbsuLKnnXRekgTPCtXDKJy3s9sTjeMo5fcTonsgf2uGyM",
  "key41": "qpyX99t5rjJYRNvuC7oUHCQavhkbzQa3KN8bLnJRvPwcridPzKxx3vb8taxuUn4svVHmxtvFaCpSEUsxMsnbQSh",
  "key42": "5qkXkYsm3KDFVkBPonZdWXHyKMAwye9xHatA9dkVyGFxEHnuwvQgCkVeb472aDDYDYz4LzysxAyfFPmZNYUf3Nm3",
  "key43": "4EcDBA5nmWmLfgaK3AwYgtcFiCtoH8RpaZjYRneECXrXhgics6ECMJVCDAAtu3CseT1KiwSaTEvjPPePEz79Aem7"
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
