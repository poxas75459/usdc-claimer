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
    "66SDA7262A9YRYBbHriaiRDUwNTqwBQLmH94u9Z1EMBcfURaRpE1SdFgKUMdF4xbLDocp8QYFgRF9C2o8aPyuW9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52zWthhQJaAxsQgwfD4snUUtPj196YuxEt3Yq3wbcyA4cGNudbVUtzqwEmjJEZTuBJNEJzcqZEzYgpUM1JFZbENW",
  "key1": "4RzmuM7hPzhTttwiKBHUtXvxN4JGX7rigeHogYNUxh6NfYkeXNQZ8szBgAh2WLjph4uNyJHYF27Q9tViCS9VTVJt",
  "key2": "3xvnLhv4wnYb8vEjbHe3j4LnBteeQVM2X6zA65FLGSeTtZCZEspkunSrv7mMabqTF7WpNUnohcn7GWQLTPzsnRoQ",
  "key3": "4j2jTrVPr2SW4pPL9PztHMynicyYBSXgEGq8SLmYnV2sdfd2suirY91RThZ6vj2z6TbtiwAYUuQgCFW4xzbGCyUw",
  "key4": "57huzKWXCtDNoSLzgc21BDrYB4tQCAUvuyMgxabjhHsbzCDLWZg57pN5UbgLAR83PYi5tZkRxaUa4yBtT7EHFizh",
  "key5": "537iGfNmrmjFyzkqWzprtyYEMX7fXtRwXjrfTBHTbqac5jxQw7VpgSBCxCdWNnZGHJbBTQ4W1eyuUPrsh58thw3g",
  "key6": "BTKUGAoUbLP6bqQagBmMvY62RGwbY8zkhP9hVciT2uzwqgFkGMDpJH34kq44augnj4Vcpzw5pRCipJJii3wE6RK",
  "key7": "5Vwq2wEgG1CfdRT4BFerysj96R36tHdRJJEJfrhGgE1gsJPo9o1Ki8LuMJdVFkr9Wzuh7CsBorp97ADJSSTfd1Xc",
  "key8": "3UqpbzFVGHN3yX3p7cJfWAX41wkqeQN1b82mgG4tA8TjEPx7pSkRp6vc4DrUf5gxTRyxHjmoYMb1eMbyEvEcNPse",
  "key9": "3eMr4sXvP9iW88HJ2MgS9tm2oBEDt31oo5PR3FNduYhVZxre7HsxXKAzoQVLZPrUTZ2KV4WwVNeRZmvxG9gYMN8b",
  "key10": "KudyHWromHTsKRmSo2wj7bJBDMt3L8WCjZ5gNYq9fLvE2id4GX5LvDMgRTjevy5Z27SEWJ6YNSJZBYZAiPQ4yJZ",
  "key11": "4kcK4pqhTY1egypPsPLGfvJ8P9iFgYSP5kHM3RBdo2Ku5XUXNZyQfECKUXipYjSKQpcvZMhB5XBwLGKY268b2h54",
  "key12": "4ebu3SpchFpLvDcM83PAMRBpAzDjZGoEdJHQrspDcwRLHnPWSDnUM9x5SYz3qLaqB9rd92vXXADtyjwkDs5a5p8m",
  "key13": "4GuiAhmojXHavs81cUVCBAHLqUzj4XhpCiYc27GriHbMwYWt2hWM9A8crU54M113iAw6CpjhJHFtb5APWagmZ3XF",
  "key14": "bvBPysfnxnGjLk29xHrKYLmWAiQXZSE1RF8WDAB82K7CNp1KrBtKBfzUTVhRcfhuYqKne4eiSU45R9VWZy4uv6g",
  "key15": "3HLE4S5kkxfrdgY7BcNzKRu85DLZKGY5vSR4XDgfGZ92fuYXjWraxw5STuH4JhTifeUBR5ZS8zapqFMnNBjgAkeX",
  "key16": "2RE8vX7RVpHhkrkkUEDHM3dGk4X77iQR3nW1wLSdFWUhBumBGD7gyQX78NwCiaktuGjnYGZz1AMFpUw2Sc66WvPc",
  "key17": "5y9wAWRZFrcTvqEv4bgVYZxqD2VPXcnfkThXriDKYEdbnaqG7GTgceTY1WLeq3kZSuWeVkdrPY8y9wfkcgQutmn2",
  "key18": "VGR1qwTjj5oZdPCKHkz7L7BeBfeW32TxuoKnG9r2peTKg3mQVqYGqimJJ2q4npeHyTpy6LxEt43SjV9dzRcqo5T",
  "key19": "4zZZtsZ8PmrwVvWTPS76tq1CMiZbfgVADWQyJ99F5B8KnFpDJu4UJWLhVqfLMsj5vBZVHk8Sag8DSRQ3J3X4gP8E",
  "key20": "a64HWtKsGtBFiL7G4qrmyK921ouB1VWSko2oeBV7gywumcdj8fFV5PZWAd3B9AweMdikqF2iyEFkTgkoRD674oy",
  "key21": "2tHLr5b8ueuTunqPttZAA5k8Ji6F2qzejsBb3Yr9vF2LXjwoTkjWsGAUxF6rcUdZztKY1VmtLcgzXrJwdZZrSKwf",
  "key22": "5K7Uazz6vqMhBLTe3JMso74GeNRjcERn9JDQ3YtndwpajhFewPPXRfyyGQJTtte3ZWGpTqiheiyvmquzpb4BZbYU",
  "key23": "4zuJPnUdh8UDRcShwUJVGuqdu8pbvM5zwsFk7LaFdKvDpVVVkBDhN4wSvumBmLGxaMTAAwrN7ZZ6iXa9uC23rXp6",
  "key24": "5LjyK457ufj1bxida5SRFMzcjWe2SuyrDRgcBwHC8eMPMLToRuKFCZwqsNnKyrMg9gqmUUxanwZ2btNMGnkoNxt2",
  "key25": "5hcznjUt3STtEfbc5BmKFkVCpkWUmDtLLhwT7v8bKfo9Tyn3juzDxzuRegrfAmfXQoYL2G7qboN8zW6CbbnqtG4F",
  "key26": "3TiPTKsKPxWf6JLxoTxgUaXZH2ch1bcnfJQGWRasAMeStbuSh1WAGcbskQxP2Xvo1TQ3ToeBUB3tzUXsHWWSvFUi",
  "key27": "2pKrKbffvFHZjJCxCRPSLLdqiDSBGJiEdrLMGBRZEHG1DW8eaF1UaWoWEW7QSLTrfFpFsksJrCTR6chtySm59haP",
  "key28": "2G4VQo7ZsRL9vKcHTyioPEVjVewfQNVh3fLWjVLKB2RejJ585bEz15pCv2XxS4G6bxeLP5TQ6a5u96QGAY2sTMUa",
  "key29": "4ksKxUepiktSe7q1RbZmf7U2wyUz3a27VJFaMmzQZJLkFT8SXd8dfVWe5MuMa5c5FACMMtzvzF2eme7EZ75puG2M",
  "key30": "3UbhC3z7hCdKVNRM7Ht2bRguXvEW7AqJbqFhqLjZizXZqHM5S9xyT4AR4BDDz3HnjdAdoKSYAX1DtLWhTUBAeWTA",
  "key31": "5GqizS1GpuAWxfFxqWFZSqitR2zTWXDB96bG94aMKhCkiEuK9YEtZ8pg1Y9bxb6xkgSacQvuQ8KkCSaaHy6yXU5J",
  "key32": "65cZCQvvTEE722WvaTokxMumbqHbdK41vXCxC2i4CUxYgdnywcZSP5uheYBDhhbv2BP6WDjtyKAsQJSU8CjkNmxL",
  "key33": "3NeSavynS3twG1U2AzPPxwREwnw5JFRib1Up9pTzZHCy6sMEJgp9hiH3Z8Q6H5vLLgRuqUj6wQRY6PdsB5BU4tTL",
  "key34": "64Z6t1GTcJbohY1ibwzhMmBySJXRC35hMTHD6MXc4i9486y6vokzUqpnbM7ruL2yopxagvwwe18dusvZ5Niw3Z84",
  "key35": "ftKVaTTVJcvHPmGJ1Eb8yKCbPuEPjkcjXSUhJYzLrCCji6uJKCtmpLUwqKBtCfoMFy3QAAaMD8FTKCqyVmWwvJd",
  "key36": "3nSux8baTG3EuLhYCN42wgABU58aBJ9JUKUQbZz5XRuJNJNvX7edWJ4Z1Ba7u5vFRZrjSyjdZG5b1V45ocarhoHb",
  "key37": "4K4jh7AaYrg6FhvgMhSmk26762wtBgyd6n4ThrJDN1K5JRYBwX2mPE3jyEyBHqHrTrHS8dUsaDRpCWkaJYqxgvy1",
  "key38": "3vzWeGHjV5Fxhbf9XKGxswLf1iwAk7ZdtPvTa9knmACinPpT2sh81ADo2iiAZ8VprcPC4nMfdR3sJnGErXimq4ZP",
  "key39": "e7QNUE4qqoM9EKuHrkytCQVvfDJJtYUxvoztGR2zrKffU2pjwfC9Ym1wn8vrKzfMu27zX959k28pUyA5hWRfHRd",
  "key40": "5qdV68wKK9dxtfaHCq9rYZ5V1mkHMbxa83e5nbGtrmDjRABTx9rCerrjw6bcTXmSn8nwYwVLfp5jwyPPuDvhAq2h"
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
