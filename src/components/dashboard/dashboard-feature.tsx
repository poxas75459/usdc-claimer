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
    "4aHd1UcQPYyUekzqQCDz7q6BwboaKHKpFwiDMAQccuNw16bYFfDK9S47zkKMvuARQNiYfUdvufadN8zvKbFdSGxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ND1qfRDH3uSr9nk6YMRJPE8G6enUW29i81VbZeTXDuqaLeueR2MWKm593TGMyiivYxG5rXeeDsW2ndyF8s2sTaZ",
  "key1": "3HWo6RyxhgS91qXEkXs9vg3MdUhjpRkxexZsQwUg1YNVWzRP9B1YYvVjbn5meJofCrwptMNkKxFBvMj562qMV1Wz",
  "key2": "3V7ugtCN1JnYBdggC18NShJLrxiVjRSfKvoeF4tVXZTTb8csRWy15CVwGhZVWV7fXtgRFGzxp8ncPs5YxWVEdRUT",
  "key3": "62eN2YVDnqfHFW1Q4kQhTwU9Wa2kj4TwovjCj9LbQ9MyMAkjS7AR8wGnV8inCH5i7LMoJNNH6LTKFBrpUqUNHdJh",
  "key4": "4eQTXQoiSapCQMheFeJiZfqBdqR9tj45zXjL3KHPVQCT1AejLkcqCi96fJUZbrfzQgdVoxT99SCXJwsc4hd9QdtY",
  "key5": "4AR46MhuByRGxvSXEeE81sxwaMjdJ4ZyEwCZqBJX4VWNzMRYPpjWZCbUMfuFdVjuiZh57ZUYjSrDvczAeWikX696",
  "key6": "2ssFvBAoVaZMqxuG5rvFDmxjTJQCjBGwP69Q9mm8BuWBpL5Pcd8BLmiiNSLSRpMk1L35SgmKmJ7DC71Jfy3ZBKxm",
  "key7": "3oNG9LbNA6LZ2WdJWazojNdgQhw54oDuxhMusphex31GERwfW8ATrzXJTobKYyhCBhbfkokKGc7f3k6zVZiZ6Yck",
  "key8": "4eTD3USsTQeLqQV7e1NRD7cPvHNXnHPcPKQpN5LJzt95dn8sKh59XpbPssJa8xdZ8eg64D7d91vD5h3qP25pzE59",
  "key9": "3B6cqi3pf2Wd82QT7Ld2hb9V32eduD6ko2rXChA7m9tC9y9q1va1Avw9pCsTaUiwyomYZu57WaTYdY5yzymAcSna",
  "key10": "brZXwgDq9tfLYhHdSL4PSn6TYfhnntwZZ4EjeCaHSfZTjiiQ99uNZ8kpRzZeA8FuLyiqisSn3J8bSYxQhjyAmM3",
  "key11": "2VRN6Cn7wFYuqjCbKPxss6MNPuKMrjpiApwCP8pcXFQx94Xt3QubPP3t96jXdyeyEsx5MAEo5Qk923KeCnY3CudT",
  "key12": "56k5ynxFfozfK7YUJ2eTMWMpDGmmTm8pGirHheTmRtPknBWWDvJ4Uib9GMsCR2ttMaqTKYSDEgEktoCn9fxWMfSP",
  "key13": "3rRb7DiCjMu4rrW6D38TF97A13kay4WwChdr1aUUk8CwuCyrYqLgRbH7EwKCYKGd2XDggngGCqPs6GfJHtnBSs7j",
  "key14": "2smeXPFL7BaWGSWpeyvyg6qcxM7ZVJjJnoJ7MaQkZRZgr1j4Az9wrj5zkoEDfFXq9wRDNMup7iitr3S1UQgMt1Rm",
  "key15": "49sgMw1odJENZCtTb4jr8AJh5rZivCAyonLKrXQGUK4CvztdUG7R57naEvaJzHi6RqbN9EGnutA2tLAtQutJNH1c",
  "key16": "4gWswJBJrEYkXFagZK6T1iH96rBiTKevedXQspWNjNA7Cyq9TyYtNT4p6pktLVGbqLmpK1eEonFM8HKfgyVxGdJg",
  "key17": "219xjVq462dcSa4e14nZyV2zRpVCey7jSw7kSeaCry9Zz2QKMe8KxYzgtbyGB16DCnVqZoYbTVpoJgxHWe6ZQSkf",
  "key18": "35rQkbYCGv822USa1Cy8YfZEsDWeJSzpXX9pVqgS9PiYyogShoMJf3jKqy8DGcEiJtvsK5poLwrBdQCPiiXr8Nqu",
  "key19": "3RCodGHvnGnS1wRv5HXVs4CfJKk4rKLUswz5SRUVvo5GyJotNeczP8ZTguaRhoCQG5cCpuxZzWBaASANs59t7CP5",
  "key20": "58WzNWfaT95C8JbyPUFTNC13f2eULLBa1YsPdTQy85xE63WJeRAXzPSHreNrkRvuUkqJ5Gc6hgafeuKSeBKevBrh",
  "key21": "3T4HU7CMZscFBau62VHoxayLSAikdntLT9Hyb8iKQSJkS9JNSnFPaQ3g5q8ijvocF9ets7Q2C9H4FdAxEw5q7r1E",
  "key22": "5QM6JNNE2aqBq8xz7PRcrDHSL2XxqXBNviNMWpk3Kk4kxQQTrWnP1wXgCp8uip7j9ghsqoiYWZ3Kma4qTGMhhzr7",
  "key23": "2R3D6xsi4DwAh5RsqK6B9BWEvMzgw7pmBkMfjSW7Wcqfvag7HSciV3yU3K3aSJhyer5vywGro5sdS7mmCz3yE5rq",
  "key24": "38NYMcuvyRd3CDGqysqEo22CuVL29r9oqSeHrgX7JZYBznAd6381zd9ZK7WkCQJ3sk7CgUV6ygcK1JwQmYRCLrH1",
  "key25": "cCesisg5t893HRAeaQuNZyVaebqdXBS9ACQa2kQKF7fciMFYziwKSwV2tN5tk4LuDis5rMA6LEVtF2LgASGfjdx",
  "key26": "3SV6Bh2aczqwXhyt4hzxkkBdNy7Gc259PKqpudsegsjPzyfWnVzMn9mABvsHRQDCnQQVcCNmXHtfwLciph1wU4CJ",
  "key27": "28UpPwxSgio8ucYJ8hErHRT9mxUHMTqR7RhJqit6oWJffrXCw26JPTZ4vigsc4o3nBM4jonEYhE8jFYvpVcrbrZG",
  "key28": "2NUsczsaZY6Sr1UBwXXeo67zdk6bP3JEQsU41vCTDs1hNGQcU2z6s33fDtDPYuBXBdZWmBwHuvaS8Xx4VzFryLXs",
  "key29": "2PuAryNAiM82N6w55zvdPTpx67kPNsMRYffTAdomKrykMNksCb4AXiNVSDwAKozeTFtDR6FmYtYuEEMah7Jybnwb",
  "key30": "3XefFiNMMxVw3xE4JUEW8w7gZTTBEjPHvF18XXHkfgk9dfQDFHBegLndQjaMamvUV2QXD17c2ohA3rmFzUdCaFtq",
  "key31": "5e29Uq9KrDMqC4rb4pGxJ2bcFyqSUAmAzdKUGQ4QEFK9zCUnXCf8N2dWjFvGhfAcBjCAoAxXt5z3QZYBFGyJ8nTV",
  "key32": "5dqaa8YYJssuXaC1YEcaHjwRhiHEiBkhpbesaCVEwp2Q6NmrNma9nJb5AiK2tAP7C5egeNME6uSP3Nkd5HctE2wx",
  "key33": "4X7dLCVMaxRw12jN3zqSrzS1SJPD4dt15Fto1oNpEC1nu9CtLqHuaAAaGSjxdZLNAofaDUrfEMgB1DP5KWx7oA25",
  "key34": "3wZAMp6qSEpcDp474NfRWZyH6GUMVyDJW8kvnamwn6MaEQsQZ5g3j97y1ugaCMnhFRijDTk5Pphyah86rSz9c2EB",
  "key35": "23vyspGKBh5N3w7iqAJFYKm6ZBfcTBi974YuZw5MtMvi1CNz4Wuk3zEQdUeh27e7e5WKZ852Xoep4PwiEtY8PxG9",
  "key36": "5EwWTfnLyJKVvfaHxNZdXu3gYCgKH3XPPwsdSRh8j3GTGTLr8nEBNfCktSm35HegEyiLUd6LFiGeHypH4GzXhjD6",
  "key37": "3gpq7fht7PAhJYZBZEtf8tUHzezsyfqZJV3W9LRwj7Qjavb2dG1Y797MxhGhUT5a73T4hDcmzKkmqBq8a63sJhts",
  "key38": "SE2HKNyRsYmh8x97GdmktmwKMmiHWXCfBWacuHZhkDhbFWQ7KcQrBpQNxFWoytsiwgxJRwtnxnbnEZQXwSGyuvw",
  "key39": "39d7soSEJaLjaXoh8VRBFjyTeb5rbQjZ2pwUuZEVMrUiQLBZVQ7uNLBFZLfoE8iNrdXxwfFDkrD6ijwZnSw4Pqc3",
  "key40": "2MvwVvV44583vVHfXyBh3GCqweUTEn9muJw84yRQmdW1kJMQTSzS58ejC9Csopra2TjgBQj8B8T3tfDDW9esh3kF"
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
