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
    "5nx1yNYTYifmnnmQg7NRHHHzgB8iMfjSpXcKRcXjSzN2TX8Wu7bkuciKEqx6GeuuBmYWNL7zaSmDXuyPzWY2L43z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dFkCsdLWfhN4GxWm9vCJaTvtY8GgAasFxdsejbt6hEMdta8Ea7BWs2G2JhX1bANji5XetFZGrggU11fTcF8WW8F",
  "key1": "WNH18biyh5ZAzGsx4Xd31trAsvJDwm1ZtkFAVEoDrZDcD6Bxvps1pbNsnvxRNZYvec6H3hATYhFxr6h4rLxMurG",
  "key2": "4JwWyNBDNP7qVpnue9jF1ocbitQuLQ7fwWjqgyscL6TRpmqu2QuEuRBnkd3kpSGygNUgJuzmRU4SLr2FMdJ5WMkh",
  "key3": "3AVtb17KHuURX4bSs47Yg9j3o9TibstEFYKvMisNBQoQ9SaJmPgPNFTnYGwDPHdFEESkXZNZqKcesGGzYwmcLvDX",
  "key4": "ktaW9WUVMjiPBApfog7dw6rH26fXhXuJUZzirpdyjZxNTQLBix2p4MYU9C2FfnhVkjCM3YmKZaqV454Y3VeK9iZ",
  "key5": "3o54PT3ZHs5MtKwY4CQM7MgkgbdpNkNpxhhQohMsnYM5oGR7FArd8Aryj5CaSGjf5GsYJfjfb7Twys7fk6vnx5Fd",
  "key6": "3kTZuYfZyQdhyEwBEbG3Rcs6ucua1o9b4Tu83uNtEgWSyzGw4ogP7PnHpXW2wvDZnUAm2BZLBqCwyxsSYGJmfqPz",
  "key7": "2WiAp71igsJFfHxswojjMoc3opzeQxhrVj8BziKA3bAYJ7YBVUk1NGovYXMhEMjti8fjQxX5nLAni1ScmRiBPoGW",
  "key8": "5mqbY8BZpMLweGezSZszpYXco9wf9eAKpMZ9ZLSbH6pYAoz34KJ7C61qJApV3HrPt5btPt4y7t6ioqmKoovq5mKF",
  "key9": "5hpUKAp9Rkasktj9C9J7xGWUYxaZmC41gG2Q7XfnLJyeBvU3ovpvFiwhqiy718Kf4YZkSiz77CN2tARYg2jFAg8L",
  "key10": "yqEVswtHsFZLvrCNiXTzurQyczht3WsoCXP1q9FLiazZV98mnvFiaWfGny82pgjA2v6LVAnpbeVndiss6NZbSC6",
  "key11": "5DJquPM4PxT5Sg3MnMiMa8n9oUeXz2xwV1RupLd5uSepoyzav2GvEF6KY1q67sidYdkvFsDmioqHN4jUhnA27r7U",
  "key12": "4Apu2pNmrDaq1YAe1ShKCLCGEzw9WM17NWQLRxsWCNJ5hAVUamKUrUjAYRdZrq4JfMhviJPsjFLXJtER93TM7Q5n",
  "key13": "5kLPeZxT6B89o5CKwLnewqDjFRtqj75vyM1xGfUQJyjxu7gBDvrrJ5ikVRawETGBDMVGnKYdeWgEKs3oyBtfryvu",
  "key14": "5Ca8EeHfFdt2GYNreJahD9i9Q9ZmRzH7MaawnrifVtN6QBwxgZwwMXu4YNgQCLMFiKNMPx9HhCWBBW2M8eHThVqe",
  "key15": "EjnSUZq1YkV6ve6bEvneDEpQp7tQVcUqqMgx8SYBteF6sgWoXwgf54tXTseqEgPJZ2YaCJJbC3ZT7YMdrm8VQK7",
  "key16": "R3tQoJwfzueq1JXhpfy5SXfwd3SmhY4jAVfsBdyazmAw8Yx5hYmk35ix4vq7oeCe7Mfif6VNYNrnYtmv4EkDbTu",
  "key17": "3LJJ6F51AeaD7VsgRszzfGiq54soKLj1g34ru1mBhJzcCynWDX6Z8NtS6y6uNtvoRWSVXsKprb97vVHEhw9VVsBu",
  "key18": "LiNgR4K6FnR23yRMymnkgxRF87xJwJXky9ELjyFx7CSaQi4Duti4Md9KQX3jMEF1Khkg8e3AwydqQDrYivWYp2E",
  "key19": "4UXZz7wN6b8zuPhJcKdA5dzpKPwRyRtN74uqzXYiSZ2oFxJndG5hj3Vp2KWhvo1wa6P2KYdnfFxyvxi8WRUsZvND",
  "key20": "5ZmE5c4qBjrE4ourx441ibZYVP9vPdsHshqY7z7qk6UVgJSFzF75K7jsnmCaMh81o9YK6hH3pLDKumcPqij2TBxp",
  "key21": "2jwinDB7SwZGCk8UNHL6muMeBti7NjB8ve9wvbojrQ69xTZQa2iWKtt5doYUhNWLeHYrSXdAW449C19J582MY68h",
  "key22": "3FcoSzFgSX3UH3Ked7eyhKx3G1UKuNsrgVu2tNQkqsD6BMHrmu7ZaGafRNNNN2cpXvYZgRuZX4NV3emiQgiUYSTw",
  "key23": "2QMpSoWigNkEWbAWkPuomeWSSogNk48QcBUkNaCv5riwjVdSxDqZQfU8GSB7qim54PsZMrSCXu9ikFge6nFe9HuL",
  "key24": "2nWG8c9qN9bwNDWzsCgrNLU6Voe5jWg5nyaFafMgbrRineNMNqwco8jsLtu5LzX1XDWcvjMuGo7JA9TRZJTZPVgC",
  "key25": "3M9QGwXTUPwe8RH3jz48VroQ24YYynrduaDs12wJRW12tVFwUdygsw8THEnaDGtGV1epJ9LCUcNJn3UWSKei9DKF",
  "key26": "38SyW6q1UoHNNMLTTPfcv6MmwQjAKQzx9d9QZYz6X3yvEUtnzmsXF5aYt1XhKvrZwNTjtvjwBSxiWWsjXxNYqdzM",
  "key27": "3uAi6Qd9qpf82naFdtRGdTUqxcXBG9jFANAFAsMb4PZfDhSRHDBYYDWf6CEAhLgwxK1Th842tNdqrSbhJcouAUy9",
  "key28": "4fMTYawBqXWzFPo4NzH27WkQn5gGAGMLTWRER8sKUwUJcL9aBbZJa3V4xbA2jeo7aGeuibVEk4YMyiYf4bzKvzha",
  "key29": "2kDR8uUx5iuqXjDsTUbULKLfM86JuApdnxU9fqvYsuhokBvcAf7cDAgWgaFYbN4QWDzuqUDfXrbTdqGRDDfMK33z",
  "key30": "5fkvDQLzfi3niS9SULV524wUJkcYPMS7TfJ7HPJ4PjGocmBu2LieJLAtBoYLmUtsashzxe5yR7KUyQTnjpgqJFzW",
  "key31": "2n3WZ9YfHwTG3HhSBmGeHqWr6HeDiPrCYr2AAwCMSUYjrVG4q9ScTt8tDH4XhsPY2nDAXPaqQnpmAabhKQeKjncB",
  "key32": "5wbPH44n3CCzVrUbQQfe3iarFd6gwMKJUNY87ib2dWFnAxUkeEHHoNMVAr42RxcU5nNjRtarYDbtWxKz1RTAKAs",
  "key33": "2yPQ9kvoXxug8hXCPzdMVeLqpiNH6WfNHfmZM2wR1uAjn1VQxP62pEBj9ucEW3hpPXKqomXFspBfFCaicm32SDNv",
  "key34": "BgspkkW4mte2aE8dS6RcAxp2tjuBFWrXATGP96tKagp96qEXHyfzbbkq92gJWwNTeKwZj8hHe6n1iTuqPRiDKDY",
  "key35": "3JFM14v5DZEDd6sEdRPrQ5nvhBDVKREPYGto9TNQMmue3WW7gUqcEGCnweVWqJY2Z1PD7gvg5rznTNb7Dx4mNDbA",
  "key36": "3oFxDaB6geASLgm6pASB69rdvpzVjVuKfGmb8SpQjbfSYFXDYZuXde17Lc5jfvNx6jVnuGuVDBdyGZYQvoSXj7BZ",
  "key37": "4KuP4AtmWqzpYLd5AdNreb4hziviTLCR7aU727rs9J8TVnES3KPSTYDeyk1pAvcCsu3jruzHrRxcB8KQj9LmqY7V",
  "key38": "39vPdaTFDjED9E4x3Z7jFFqivt9NJq4ZLTVEKhut8YqGoZCijdAC7UCR7dyZ6cxPehb2wBecmqSRkZKWkYAPEv8M",
  "key39": "3z3Y1bVgrDqzMpF8ViV71G7UuXhHZuUz1V5zpecuUNNnK5fU9Sne5padeNy2yZpVjTRmkByRSFhoK3kpQ4namiy3",
  "key40": "5zEcZ5wrWw7LeDeWiCFmVFYpg62PVhtCUgKK4EWFkTJ6wUvsncmvSt4d4TZpXCXHFJRAqVq2haMi5EyCp2wqVo7R",
  "key41": "ipkewv6o2jDfmdxuvGFLzkALE5nquDycBTrWoB6xJmWqT2purwBHEaKywzLYma6x4Wek2PjEj4VwtzBij8C39ki",
  "key42": "5dTskjEMFqHEJBbVKu3zG8ztuNHfVgsKnJ4R52htL54Fo5u2jVfbb5RUknjwa5pFCmgeWPdPLsPwYoUkcfRNTz1c",
  "key43": "vFUJZGTMAdK85CVncXARkq3fYdTKDWKtFR9mnP5gjuVavhf6dveE8p7siVJa7UyDiGTHWnq3CQFE6WYmVwWvVH4",
  "key44": "5pZN9bbrQSuN2sHhqgdAY3heaf38R5UVRxnMxN3jGEiLLL9pSQy8EHkiVphcxMRYsJfbbry1NcvdhpjsRtooztgJ",
  "key45": "3LsDrQ6YnJRiPKxNFYruRFuSX2x3LGzEmqfCFyjjNNYpsbsuxDLSFViAqiwLg52VpmMhmJBJVyfFE29JpPNbDz9z",
  "key46": "soHuTQob31UoWXM2ooXE6oygJaqgHf8wPwaGiHGcBaANXdqX3BffL9yDddp7AADhHfCE2kBCd4bT42eMydRG6yF",
  "key47": "4aRLvRTr64aue4FvodisciD3Vwb2pbMxwsp1QzqupAS63nLgfq1Tpdff4w3i9AH9bgiCKSoMnLKzMneSuBSCmbic",
  "key48": "2CSKrDJdLov2X4cZYtX23W4SkesHUUD3rcyX6VVbt6g6JurAkiHLUuhNekvQY4XU4LygUQ3HzEyPEDxd4jiELg5B"
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
