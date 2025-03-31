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
    "2JcNoorH2ByLSkakjgnFFc45KfQkW4E2jKDvc7oA33RugCnPSFEinB9yyDcRaVPz4dC63kbN8LN2kKBe51KLpvji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kEq5Pa2x2nEqr7jcyJuCxgdd8fHggB9xZ4Fju3gJa7g39SPHNCBsc2D1mUdd1mGLYi55f9viB7E4cS1FskpmN41",
  "key1": "5NAANuWUxUkzCNmdUCdNNDwuEKTebp2LQqiLKep1akovaxuxmnTnSWtX3YuQbStNQqt1rLWsd7h7LJko7FzPN6Mc",
  "key2": "3K1hx4PM4A7oKRLJSyfk7Rqs4h7UUveAfoPvf8NLoAdYY3ZkTPwg4DNG3LQiadbwa4CaDaDqESj9xmEmJn8z32v3",
  "key3": "y3K2N3LoPqnFWkA36JXoMeb3jeGxWMonV6M7uNddDzYA82NsASmS4NbWsajzoJJghht9JGxvJ38sXEDB6tQpLsS",
  "key4": "3fdcsa7EhRjL8JRQVrzM9moFjoppYeXX5d9atypCs4N5AUgHqqkN9EgEDPKHmBhh2CWAzH2BaCC2bf7iKRGChXuf",
  "key5": "5xZeP5unqo7YFNSMzRYA2jmhqZFrj1QrdZRsbiH4g6eRqXwftwopxoLq7phYeiuXR29GZMcWL9L2vzGf1qqrebZj",
  "key6": "2fViSwhb7MztQHT8AF14p5RpPQAzQR3Kxep6iVQMdy6XvdUiYPVbfFrYGcBUUwgB95pf4YGotdGAdjr4CoMcje3F",
  "key7": "3QBWmGm25owdY8V8ggNNiWj78uKJhDjK9zPEgAaB1D9hJ7AdPp4Ub5HS82bUA5RrrnqB3MMSPELcXQtSJcU8vHGR",
  "key8": "3jq46gcWCDL3wTbN2nZZwb3jReZJMLjMEiuBQLg9jwCnB7geoLbpwUp8DpumfYLkRBhMVxabRDMKaALUv4MzjhYn",
  "key9": "bC3a7N4ayXR1jW2EdjSL79Jmy8UdNoEFWdczYgZT4kix8zcQAheMxWdJZSBfxie4EuVuq9289FMB517geB5GxhU",
  "key10": "4YvD9jJFT45MZX25MPYTAiBg5eEpWnFETHUeQd7exezHGGNuCsm6ETVL7LchkxzyMXCmd8CiR5AsYTEus64YpqCg",
  "key11": "5ciUJZjMikM4rm8J9xT2cFEcq5FeESHnSwDDVMw95xxjeroMHyNtzPbba3wM4bQGZQwSPEXPVrQKFXUy1w1G8mWa",
  "key12": "4CzjeB1DC1eEN9DSfEc3xVHSeJz899YzU1zGE5kCfcUvfMH74G3shbFw1Ee5PXjUqfC9nCAJzF6CzhBwPvEVQQs2",
  "key13": "5mttsAPrmBFpvjB9Yi2sL97kJPnY9sUCcf2TLgYmy5gG11LQnQ9YcVUApr8TVdEfGNEzMyW4XPwXsVaHEzN6AfmP",
  "key14": "4VtX4nEt39J8exfJ8jzXp31YS6yotyv6yiR5ZhFSfsS6HjwsPoUVkfCL4RdcasgPE9hHR3a6b2sf77jeTPP36ejR",
  "key15": "2rVGy7LZRnqdkjAqPokWQku8CrbanoM57KdH6yagoptvnnVPgqpjx5Xnpfsb4DSCf9KjhAdovPa3KrTPDpKw7uyx",
  "key16": "b3KRMexUqEnrcuu9mgasqBVgA6zdndfT5t1PcVZR4J4DnrXXc6J3CAtjGkBoVbaL6Jzd9Sh1aof2PaHEgPYadfE",
  "key17": "CoSu2tjZ4styGAqCDdP4s37u1c7tZWtVi2wKDg1ThcX9XdWtSxUqp1tztrYDXSgzRG8FX4HNXVeMoQLnD4u7YZw",
  "key18": "4LHED9r4zXP7v1odFrxtHQ3UAjJQzpSnPpJkTC4v8mz13vp84qT7T9dva6RvDEhtg4GVdX2FaJ5wS8nGEvd95i9o",
  "key19": "3p1G2rSpeHM6Z6AYEPL1s3FZ1uKQv7rd3Cm2yCnkvFrngmXNaramXv6AAGx1duUgVgNs3VfCB8ZuPey75YWzK8Vn",
  "key20": "5jXrbHvRLTJc4A7kZRLdgi2MjySBWwNfqC91JnD57u6bodGj3WGzuN2sJZBRFuGancFz5HSepN9nzmz7VR1VAfjq",
  "key21": "2MkVusXHkZ4QD2izwgdp9bfpJJNW9A2QkVqKfM4weeXs2xcYLGv7wXHLRnW1HedUuNFJXw3wm4pB2hG2zkVsFirU",
  "key22": "5gaF7dsY8B1ZLNSgNH5cnT9xw51hAH9L9LKgxWuKyqVVUaead1uebQyLZKgcQeugWQwLWnT82YCxYgPnsx61uxij",
  "key23": "5dr6oDMZqFRuSynrjphdKxCYsG7drrTgNy8Ut7Tj1eCQE6nvtrwedfAfA3RSkeBTb8wjMtFJfVFnowKZtcPytK8G",
  "key24": "5TSwusHNKah9Nwx6udVobVRH5WyPRrGWJF3sfPzeaKGzaLrZhhWSP1Z2LZrhnabGsM4t9ndLDE2Gmcb9VbjN5fcx",
  "key25": "5mw8ixpRmM3sgDnK7KgC56sxbsDsA5uZQcb54h5sGawSDUQUYf4dVEfTz7Cjzr9AGFBGWPKhgKRfMbrLJWK5HLuL",
  "key26": "3evV8TRRqzdzsi2NyN3HbayAp1t28fntCUb7W86T6M4div6Tui4gPn1P9vpugDkRSbs7C6HwDiQStyPWYVMKT8rq",
  "key27": "umevwJTA4XAPqVcj9mfSLwt8b63usbnaosfSGujJsSESuB5ECQkZCtAq1DnGU6CeMNQVSphAw4iJFh1DBQ9RH2c",
  "key28": "5k71AJgKS4a7D5a1aXMmrmmshG47uVbnkpd7h9Xv4k5KLqSkQ7U6wnWnyhYmoBX85Guww5sypef9RxriQLx4E9xB",
  "key29": "4qZpK2hXzPAUdxvynGa6Myo7F9adJzsSTiKjkJ7sXLhx1EF8qMFDHyiufn4W5BVuezRaeiH8dHgyggMEuQNyVzJ8",
  "key30": "29KPWAGq1dyZcWJzMdX76GVtjoLMEAJs5jqmUFMaoRem2yMmgiSMESUXZzCtUhKMgxc7hLiD2BfNV3r4vYpKay4b",
  "key31": "5WxMse5jNLXrqS8vL5PT2J3XJewvxpvP2EgTLTAoKrUMCpyWhzz4Dw5QJHnNC5oaocE9ux6e2nFCCthhwhqrQX3n",
  "key32": "3VxcqpZCmFnebmfXr2pcNnBfvp984yR3TNFNm9CsXjnTovcozHd62X5tMnwT4St5g6Wm4R6e5QUeupsRUuKpTtg7",
  "key33": "2dUEy7KCSGPVjctFL2tdaBHHJE3xKXhpqPg7s8z1h3LvnhdPD23WdhTGHxvBXVvboZoR42uTVtvhREp8HtWDV587",
  "key34": "3Q2gXj6aX9GVfnqNdv4G8uuaJQAMDDfYUxXuwAg9xB6XraZXFLFSj5Z7Q41UCgHt5ExJe6ofBDBm7nZVzuNgJaHk",
  "key35": "67o8pXU1Rz5V56Q2wHb23yLD2E4SPZZNijD7AXRTMjKgN4DRPRmMsWddiEB9znHPbggJhMk2XjHSaJ79n5g75Svz",
  "key36": "4LUUWx8Ff29QTi5JYbQUvpt57DTgVbzVW7MQgGviw5SdgS9dTGkQ7QZU51o7XHtNY45LKBo8bNCUDEsCZFP5bvra",
  "key37": "4LN66EGfSBoZC4d4AxyshR9DruXRsBvcJqPbfh8BMa6RCiyTKjGXvYYCdiz7WdzvHmy5GeGVzLvcXo8MmbqvUxE6",
  "key38": "5WXZMZRS1Zke4jPcq4RyCSWgAnpFmkewisRZRCRRSTpJswZamNy8sCBHsRanpjp3u9PgK7sy3XovjUtU8HHXdahS",
  "key39": "z7eFjbdQDd7dswo1PcMPMRsyCa8F29QB3S5jJScoAPjc8iK4UCrPTTjuHPGAVmeM4pcZLPd5GTC3i5PCgY4UPrU",
  "key40": "3KJAeZpYTi4itPj6WZ4kH7uVunKhMdug1GKwax7yZVyfzjhJV95Jbfq1qCMMKax8WaRgH6Hc2mqRSGa9p4k3ufaD",
  "key41": "5sFzaDWVJzhX9akSeE6LWdd1iTKoMCRP6BBNDa8jEkv7Xc8CqbnjkWqvzDD4Y4HVH4S3y38GLEzew6CkW1e9oLCK",
  "key42": "4AxKYinT77dH2WZKRzMpx3d7vhjGMiGwhDRHanCdGhDqwLupi5g1QMJXbPXSjJ5rTDpjXAgBeEG6Cy3FnLBEA9TM",
  "key43": "3fzUgPCvAVKLFUBPP2enU9dSi3SuqHa93RRJj8v1fLBRyKWwQy93NhpqqozyzDRtzkmn88HrtHfkyVMFd7wXzzfj",
  "key44": "aq6SatyLFLWEbcmcSMVbfXjCPnsS2uxeSCae1UpkafjRNnzUpkzgew2yY3nABHShdaNe89Y9cWbzcZ2NaByECSf",
  "key45": "3R7zkFpBMnbao3dQRw97nb8NjFBQQ6vkbWUUGjijPkTT1ssDgmsAZEnTk3cuoiebjjRsVQMySC7HVJvpuodhhcys",
  "key46": "2W7t6foFbaKov4p7sgmVprsBW7myhmCXxtw1ue4NjZy49WUxyH4fSG9Hoiu8ntFUur18iXFm5dEaufS4sJSwq4sx",
  "key47": "3wvymTfxH4ApCCN9uco1CbJXV626qhVKbaYKmp9hgjBKcbYxG46ebMfL9DDBx3zDCZ69HPWvJLENEoES9phLDpXR"
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
