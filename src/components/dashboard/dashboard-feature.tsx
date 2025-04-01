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
    "4CVwLBG9DHHRsYkre8F5i3K3b63o5ncmMzAh5szs5KenvaDYQhmNmAvQD3PtVLMnZRqsmNCUf7pm1qApdsxuqXvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euorJfhHY5BaVLNSC55A7n53uh9rsz4Bfc5YMJBwCAs8QyzMNjVDndHuECuU8t1eAK3XxnpiPisRsqytBajz2Ly",
  "key1": "2LvMwmYQNSvfEN4YqZLvvDfUMECnCSWMGoT2NydBtUeaYcDDdzrnmhfJR3d376hkuAHc6MAjtp2LTQ5deKvnzMBc",
  "key2": "5uNZprj3pPRsYYiMsGV2c4Y1d33T9NimWJ1HeHquv3CjSQM4749o8rrwTXdAKh1usWfzijHiTiV5pJjAmj681py9",
  "key3": "AYqBn8thHkVeqz7u9UcVEUhWWxdRWZzPN4xT1jdkbM4kqVaZ6aWcfevddoKWpsGL5XDiCjeNW6qbvAoMs6tcewZ",
  "key4": "2dLTgmLXBMffKR78BhCbDPPkJrUTXA58k8E9xPyNU8TroqT3XYjPUibhHfPUNxypbBydbxoQSwdCnAxyjGTDUuRR",
  "key5": "EmoYzpu1Xp72nkfm8mTK8MQ7vFKVPFtQq6SbL1NsZPUwgm8ejoUPSCby3iY64MoygeFMKGj4tUWwDoLieHvU6RC",
  "key6": "DrnG6xxD5GeLZmGGdc6iVTkgdmDq89nuE1qHuMNDVM93bhSvhujBcGg8urpVXD1zq7yruhXkmMqofRwZK8YgUwr",
  "key7": "4mtd9BRPmPBVHPTSBiNd29h2UiD7tWjL1hcZEBeBjs1XZmh3THEqoJw7v3Ygh6AtS1fqCzeZxV5nZJ93WPMG4RRw",
  "key8": "TVZqbibWp93Kz5TmV4AjPjPYQvPKJFsdGJNMSmcQFYk9hVKnAoCZsAAYfyqnW1J9i1pS1B49UQLQpvUVCJmxA2k",
  "key9": "3fP3hd4nRbC6zj7aAjQKtB3tfF4jrg2JcKE3JSjFxozk9NVkmqnmLeYsMdEbTjWptvbEns9CEFk9ueAZShTBXtvq",
  "key10": "5jPva4fXg5Aywdb9oRmLEC66qXhvs3vmXDJwRU9NFZMuBFtUhBMRjgQqYFxishaMK28QMQWKTR5mQvfEfU4a6Dx3",
  "key11": "5JDYNsuTBHoEE8iEnkV31gRPbMKoq3wUqWjXz4ckDkd3yYDzRZdM5GYXxzp3k24JGzRKMbW6aht8GtxgaP5mTQQe",
  "key12": "3jcZBuM2qsN4q1jUbXZgCHhAsrDtqJmSYub1VXAeZn7Z9mySwNh8nm9jNCnbCKeoJw2iR6boZt4DYnLpVpJtJ2Y4",
  "key13": "3d7KLggYzxyjtr8JqBavBE1a13r3kYGqbu6KvCk3KmuA6XDW6Wp1huBAizMz5WM6xzDEdRWkeCe7tPXVzPSfSSs3",
  "key14": "2VD6X1mJ2Ag9Mduq88aDDkAUZqcWfnd6hwgxavptunhCSjmbTm83ouCAZA6v6cCQPWfVejmyvViVvyTmEGj5dZqx",
  "key15": "2qKjJU4tEVfMvG4ttnscR4NJpxz54EnBzU7Xw993eqsJgFL2N2agFKWdVNcxYqvQPBZFmqj9cAoeq5xCoZvXouss",
  "key16": "xdKnn3xcws6x4a1nghETNXZSeoozbzAq1Uza745PVD36b52RGMPL2X3gZoNqmT9YfP9t2u7GWtGWz1SDGabKYDe",
  "key17": "3s7jniLo8WhjgYXTPqnXS4VFCrLAKtqLpWERC2ZFVgakqrfVNmGMjPqfr1huArnd9a6rVxhmMwRVEannkqTn9zaC",
  "key18": "3kyc2e1HsXWQg9To8D6LS5GhciPCfGXbF2PAGkbU1w7jizwayxPgxBqwkXQUiB9HUEWtERDSA9XgifBzfWShKax6",
  "key19": "66vcS4MfE5AP5CEq1gj9JJTgqHMuY7jmbH6CSh97TnJiw3RJvav3CbgDQ1pGmnxo3k1tpmc959TE3baQCQCJnEqi",
  "key20": "P2a7XeTb4zV5etzk3bgqhNbfbB7goov1pq7uWpVBaHbHdwtRufXB9UvvZAPPNCJACt2SQBni9Cck31qEmGQfdWK",
  "key21": "4mgJah5kprDDWNHKZpVSXZkSibkJoBkmyx5BRWNg63QQGDt9WYP6tUvouzqYqzNFvXJx5YgMPZud7u8BDXe2BVuy",
  "key22": "2tkst4DWzXzzoKnJVrwfhmRKK4Nmgswz1TQdSxM1gEEnbSgAyP9TwHQcevTdMtRWKbFfmKda6BAMZFWAftQVmBYD",
  "key23": "4DBr9DHho7fnbyXRpRtSPURCGcn5DGk5masa5piUPTbxHnnugwH9AMP863rSeZ5i4oUzGLE8GDGFH55eWxsyRnw3",
  "key24": "55sbqyjP3uwvFgzomrMFQUsaAF6uCiKbHgDh3oAYmqaemUeLFiMjXh58Cmcyi1rhFGwQEASHmBvtZwAxiBx9R31F",
  "key25": "2RMW4nHm6m429xHMqYNgmQUFFG1TM2pxsRUPohhBF9nZNd3vwoARM6LhgrvyE6xfAdxNzSvSx4fKgH8PtbFaeNcn",
  "key26": "5QgwqbuLYYgR7zJ6TazmzLMhWSis84xgjQB2Lt7UJxAjw8qavDHhQ9VRWrpi3ybPRpSzirzt1H3bhvLBdvSUPKX5",
  "key27": "3cPsLtnzDooxNpbQpqtnsoV2stuohavgQFpLqbfdEnbArg3NB1D7iHr76ShHBaPVGfmZpwjVbm5PNDLYGfAHdJ84",
  "key28": "3pSAzsdjmbgK3cDNt1aadwzodg4aVBLJpkozt5Fi5yqQDPkKLT9unj1JBr5MLPJEa8LbZn7EoAJhoazinyQrBf1v",
  "key29": "4HG2dt7nkJt9d5tauVjXxRP4rfcqWW2pqH9C1s7fAGG3kJV7V9qiJaNykX3f8UPRci8Co1EH2W8nSihU2sHdTrh",
  "key30": "ZKe6R4DtQQagkdXcGRb2PXmXC8wp1zUwsxuHKaEfn4gVsNfswFBQJEqDzemjXfN3AJs9EmPqpP9qQ57XMYyQPuV",
  "key31": "ACzFqiMvd9Gf6CBYsmUTztmVdMxMw8j2ky5gdR62L4b6mkYEhdXQYd2JrjFyskQHUPhX6JbNo6R2M1GPMMLshhK",
  "key32": "5R4cezZXRpdjdnCC4JspzhjXSawGtLvWErCsV1chsEufaVFRjRRxXrGqBxqegvBnUDSpK1S5ZKwRXRsaqyKnfUAD",
  "key33": "4TyHRUT4734hE4UQjFkece3YWYGCkFWrv7NpnB3W8i7tXzgnrK5KpGLPtZwDj6E9UcidWARVPSF2ao5ExhXJtqqe",
  "key34": "32RVXik4tFUuUAMufCid9GB9eDVtRmRjgMMMERAW8jQRXE7kXLkbHpWNWGVZVjoSrw9UUNT1JwpAgf9vsSgueCCT"
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
