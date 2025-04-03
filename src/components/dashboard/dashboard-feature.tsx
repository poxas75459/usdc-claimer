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
    "Lmo7Lfx5YWTLTNoDPF14L4LKLpa7aSP7MNNxpT4GcQsF5AfPCt3juWjGhePyh8FnhMVSrKAENjoTUGzFMNcK6j2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkzZxtnRmZrigAg14xo9W59PW9vcS4jgREy1wRHapfVNpNmBnFYEpZikYeEA9Fo2qigPeY2qbKbUMKZ82xKk7dC",
  "key1": "NDCLw7VYCjjr14QRqjpkhcqDKx175Ykuxb4fHxoR2kJiwpso5P9sVMMaJprKg79Q614p1RUHsAM3Kda9QU4wC2o",
  "key2": "2jjbDcKnJtnRhZjVceJ9YiPavEdxTF8ze4cParNZq8V3dDsMwfz3e2p8et9qFNoL3EvRCUFXmsEb3GJcFp7jNfCL",
  "key3": "4UsA6CgDbUZbZFN8LviuzEGEXAEtGT1QYMdya4AkRCAjjHRsZA15nxi2imC2NqrzMEyge76A6D7zb9ShKzLTxFRa",
  "key4": "2xSd9FAvpTnNx34wPVWDiuHfh8BqvRvJtaWX2h3s7f3Jg4qC5mHNwnRxdAt7q4CXdYKSuHvoLXXoPdvog36XwEdP",
  "key5": "awfzMuTif9m4yhxQn3irN4BcTYmPVFcRhfTRtnqxsjpDn5nQ9jzySXoGnqsczmPAdLGcbgfmWNHbEbXr3dR6LQz",
  "key6": "127e7YhG2CjPvWWafKXjHo5AnSyW6ZnW6xW8WnAuY8i98rrBfCiKTnZzof2XQNWSD6qAGFkxKdZmwoJmsaWUffN8",
  "key7": "5bDs4PHYXZqb8SGCwhYS96cWS1ZZSSKZTRUhCMGiKBHsg2ywcewfdCusfeU1f3FDYVAzwdiMoew9vaLUjpDKzxsx",
  "key8": "2LZ8GZjdE5qe3WoBAXxMQsVFGJoXGuQNqfAR3461T3jg5e79x5M6QS62bgEgJExv49ufaHPjPBWbreTmSKUVJFwH",
  "key9": "47brbMb3shXN9ES5JdQPgkSUqLC9LAS844a9tMJYD8RyF4ngmGyasKJzPEiRwRVRLhNdDUDbJ5S9ezrwUPQuHuGw",
  "key10": "3U6tXD89QMB86ZcphF9WYnhXT2T3v2dRV9cqpzCBwXVA52rA3cMJketDuGZdFHNiQYcJgSEX7BviM2NatxYu89wP",
  "key11": "3cvXxJSjz7n1fvM53TjGCcLr2YKvSZ1xh9b7DJgdxCU193TJALVcgJybXerq5Co5eVmpFNS9KUB7f7EdiVD7D1Wc",
  "key12": "4HaQAwj7QAeXR8kYYKQR4NmhPKHdSuU4CYzS7K7y6SzCf3cCuysD3DRxCAbYJipy6AtSvrDS8SjxzEZtqLu94xjG",
  "key13": "4dEu1PB5QHGt46zvokaVHFphnBWzN9iQnAfgeD9k9LzHxBT4hWYKPEMa5xkw67yCJwqNW6Pe2cgYZJK2CYuHGiiV",
  "key14": "2LZjZYkzWjaiCNtfU9e6kCt2d6fs2GY2h9m6J9PNwoYvDYZjM6nHNFvbkXJz3LtpdS9XmvAKF1zQeGEz3EVQPK4Y",
  "key15": "2CdgD1gNaCGgogVe17YLVVEejrxUSRSa6Fj6orEhfnzxFA6STJmttci5j79QBMGQEfTV54uwKcBghTtyBxYzvhwU",
  "key16": "4bsXkNKGFxnLKKvBJiR5XmXSwBh1V9vL5G1uENFyp5QLu1ZQFEPcnyu6xsb7GeHQwM9yJmLRqXx5Sp3M4vHiqnYM",
  "key17": "4baxggKcVqnetWAEcT5j1Kez43yp1c4LTtBB1PYfPP84JtSh6NTc7GYDoUR3J5vY7xQgPqW48EVsBPwPWKyns7HP",
  "key18": "4w5f7nc3gRFZ1aCvwBRsPxpH6igxxTeAAUmPYVvq63AidZbzBPZ5CEi3rbLMWczaqnJb2SwcoTuoMjW7DHhnRR5T",
  "key19": "2EcJ9bJHBjmawjHQPx8GU69Z1CBa9NSrTNBBX9iwmxMrEv4f2Q65JiHDf525DzHF48ZzgGCmM3n4E4zGF5E1Khk9",
  "key20": "5GZ8XpdpMsXnFJ6SCkxEMBpFpaUFJb8XLNfc2412eX3giGW3geh1URWqvEXAKUMzHKUt5SJ31mCRvuzbe1BhLmqi",
  "key21": "2uSAVrkFidfd1bkfK1ZAJZRUYco45Dgn2kKYUpK1Ge5nu9yKd94BhXFKL4mDHQaEqcBtoNX1iBbqzcLtWxKPnixr",
  "key22": "3ANtk2VmsyG25Z53azqx44NRUqys9HefTeKz22kWachqL2FGa7j2DtGNkr3tsTA2bdo5MDBDUVXu9s44XBQf23M",
  "key23": "fkSHAV1kdUokTyQ5p4kBqJQnyHKSkV8BGvpkeEnvrAkGzzs7MdXnLnt7c9keWRLgakXdjnDzQkrsUivJd6rS9bQ",
  "key24": "Ycjdzf6QdpUhPmX2xcC37gcpbJN7mEZ2gtoacgx2PT4XaLi6U58mU19FruonWJviQtKVccNSNWjJ5VweuY6fNdN",
  "key25": "3jsBiAGdv8J5ZH7sPnkSBKWvdpeu3YbJ7fW7HtchCePXTHutTg54MjM4CiZs1Jbe3F4pRtW8gzmNYrsdbFAKVBtE",
  "key26": "5zVK6AxZMV9bkJhDYGRgAEKBL9wQuxgsDexbLp3HaEKrDqZSuMJHwi99K2ZPAiGpmKqiaAg6VCo4CsZRoVBhGhQH",
  "key27": "4hTWkiXDeA1EdDyX5ZyEBd9sRXKezyVpMZUnwtYkseVtjRnujSed5PBRLZcaCV7Pi2vCjPj7tzKaPjNjMVp6zLhn",
  "key28": "649x1c7sLtDG7sjomsYfqbhHHC6XpmN6uh6A1E6iJtikypjwa3ZuAZbp7ymLXGU4LpSqVV34jYcvfSnPW4gR2U2j",
  "key29": "4cBcj75CpdU6RPZxt2WAph3XGeVoQ2bS1LMyawnTBy7qc8qVJcJK3cV7UHJf7c53fgzTdHzDwNR9t8B6iDHcBcCo",
  "key30": "2rkthT7A34tcUissRMCcie2ZPmkC75wBEsz8Hf3FksnJDKo64tx37t6WfsLevXpCoptEcrhzexcBPA7y7aKLXATG",
  "key31": "61Nsabhe9tGyqqJwpqkkw1uFr1FuSyc5r76Ua1WTCD4J4vJK3JDkxfPfXrinzaFd2N9C6WLVrkM5mkZBWujwBwDr",
  "key32": "5BbHGWSYyKAaNMZAWLpUpvYiEjA3Hgm94j6c98xqCQPzGk2G5K1ju5b3Vik3cv8yWwKdShVcagV94jrjAUsnJrEn",
  "key33": "3m2s2kfsfyxuGTNL4AkRHxzaVZCwqA48YLu1QX53bC8vewCFaDXtUuUNKmqFejsxEdQ4YS858oeLDgMjzDVEWP96",
  "key34": "61kZDAapczSzRNKSU23URoQ3WzxKF8NQmYz7xVnFVTMZfPzAmtKnsMAr7isCFFtGCRLNBmHJn7TiDnQdHu481H1V",
  "key35": "4NqzKNmoHfYdrHzcq32sm4qfLAjY3w6WN2US26pUmgPT9oNcDjhTwX5kK6cTrJs3jVVXP9pRDuLdV9bYgu4xnvFF",
  "key36": "2suCcHe3Uv8V3Youhzi2s4eCQ1HVdNbMd5qAXPYYhKivKvWtK5g1LUZyygjjnkkDVjoPqXeoTc4UwoE6zND4PT7Z",
  "key37": "4ysHJedP4EWumNt5NBp2aZPtgMUmuLcXX3imw4raKGN3ae6ELQWa7TUWkg9L48GrsbAXkD3XAFZfh2uPthsGo6tU",
  "key38": "3sJRUqEP4chDR9KpFgJqbyjeCRnLESykkdh5Uut94f5TmgZAb6AcQqNzU9LRJxo2b6iipV6pvzv1uQbhWUkC7uJX",
  "key39": "3zafF5AwwC8zB6tFA7SxddHMjJknpUDJzamBei43tTSF3m2DWP75s8A8mqDcvXzkTE8fo46HQwRSHn37pTThU4pd",
  "key40": "29kMqxdPSztW2RSN5oeB3WGiZ4aWo3o7v4j2ZpfeSCjw8PMWLYc4jH2cXpajn8EaKN3QZ3AjoU9dKNomzjoyMAcR",
  "key41": "5URbmK6GzoV18nT1BLfVbCCsAmcQCNgV1XBCz8kL2F3o8mUy7aETvphRPRRSGnXCTnVXU3rBvC1ZxNUNyTucMFAs",
  "key42": "RL57DDVcyeksFq9USGAsC2dYrRYN9wTt743zqAsQ1xugqxjvLSgyfNxaNjjG9ce98JXQUSvqqKEYz96VfD8rxJT",
  "key43": "63ebxtaqC8NFhg5ui3NmYznFHcbTnQmLYsn7AGwRLPoufFaLncbUXYDos5o9Cd9Gq5RYcTspxUnyX5KMt7f3LHAb",
  "key44": "2tbnGNfCCnn8Li3iUvazn98cJE99HBQvA39AxYQUPPWJPHwnoCpLM25XjRnZAm7WAo3GCU5gVB7XQU15U1Tm2fvw",
  "key45": "4oq71MLXr14A78ibaFLkYHqrfH5zYJoyfFBskiz5t9EenprDyTCR13NXVAmy6DzX1gcp3RYrD9QyvkbW7xcnkRBs",
  "key46": "5ZgTeX8cEuSSiXWWXiFbnhfP1Cxht22XEqjiybeU4qV7A3YdLci6etr6shcQxwQoU1HQBADJo1fWnvvN2tLzB6Mk",
  "key47": "4jDJsFTs1EWiHu1Bem9Qa2iAjvoXyoxnuzjfA8UWQsxJKUKh8YekNAJx3fQCSA9ywJB2NJoMabUqwTe5fQi1UH1o",
  "key48": "CwbKaVwZYgsJnFQph9MXxht4UMa6nznpt5Pr2X1PUGmUbVnCnr2A2dkZFtSJmWH5VoGQmrPoV5C7rygemDfN3zw",
  "key49": "2XVDEqzGiEYAcDn1dgjeJRwEAyHXChFaX6UMt7obhGSNmNJR7q6Qrz4ZukPh5kZJszkm67UFdaNy4kaDJjciHff6"
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
