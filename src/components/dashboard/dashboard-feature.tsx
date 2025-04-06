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
    "2TZpmdc6b9bpYdmX6s3VfhiyJyHfRG4tDTJxPLCFC8KMpKQmwLQ5R8FNmzvfArLz96BcPgrBdL3MmX6hbvaTMe3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cV1dAC3JDyQndssoe1eeVwneaCoU8XLPHhBCQrCcSUxq471QUcoxtvW8ZtDyC4QpiDA6GDRjQkKmu9A3xarbMse",
  "key1": "4APxZw3yATWxUG1kVUjbqefeHJKcRBoDBkJ5CJm1x6WWoPCLDPnRYq7DLXZVtrvK7DQK7SkxtW9XZVTY8x8EVSih",
  "key2": "4iWc3KVdCnipFLAyxvcdq4sqKsNdMvDWb85k3tnXSnQg27xH4aJtDS5PPefV7T18NRQVJ4j6gCCQuFDFJnPcdNkJ",
  "key3": "3GbefoPMd3Yr3HFBFWGUaxTR3h4PTwC6Qe9rHC8KM3XrycaTT2vNv2HgNvPF9RsJ7cBBa3UikoDkDBD2y9x18KHW",
  "key4": "2XpeuagbUWXvaZHLLwvKAsbAst7FJRcWXSZq5mXkiUqHLfQtMc5SFqhLQEvATYvXqR84HS72BbzNCD8s6ihYwD67",
  "key5": "4izR6hoXZzAAA5RMKBuD8RK7KmExPSoFyvgo91MmQAL5tpnvKCQ1UnWvWXW5EivGG8bKFsNdZxbEbe7JWmQmUz7d",
  "key6": "H3wPxcJZz2iFzScK866SZc22Hu8HAb5WhDBqM8g7pthGsuA6V4qXtucJHKngoSrZujMpa72r72xT3mGjY7cQb1y",
  "key7": "4LiVKSwpKxRnGb4iqb1vTXcXq4UFc8PgNfEkFt97nQdhuSm3e5PRk5m6xh4zLQvjzAHuGyHbjKWwuMiWNftyQreC",
  "key8": "5GKcvBaPnnmM8RGpr2Fr5SfQJ5CFu27vdAMGqF9v8NpfdmfLNt9GmkTTNJGfRYyNJj529GishEcz6RYMLR1h5tzp",
  "key9": "28odyMoFdFoKBbZ2Wdd127KoSDwTsdaMpK6VLQ6UTwaaJzWrMTZYVsMDmGsodMFxmeUq9Z4ZVSrdFa7mndMkzmMH",
  "key10": "2eiNwnwghsR2eS4twGh3ZoBLNrSrgYCL5jUrbBGfawZ2u2ffPNFG3aXJi5iSoE38ewJqu6hJJaNEZUvjcBPK32b1",
  "key11": "3uduYo35CWNDZVy8e6nu81PXNbdBf8v5cg7JCZx7PxveJyBaCRVHJBfc1xce3SUZwnuVgNv6qy3GdPsiXGtSommy",
  "key12": "3XEgzVwEp6eQahnU2MALhTVTL4fVxLazUEXjhpuA8VuTHnbWkP4gKy3NXrhSK5CuTFQonP2hVYKwe8RR3WryEAKV",
  "key13": "5kkduNP7bL56nbZXzM8Hj6NLEvDKRMHCZSg82uBvqKyVRc2Qi4n4wzGg4EmgHN2xJDSZK4sNZdUjReVrzG8RnGMp",
  "key14": "5rW8h49uyKCYVnTYxgPtUiaF39TwugcdRCUgKF7DxUckJS4ZnNp5Ups8rqzsvo4ruP6pccvyTBkQhw9DLqWi7KBZ",
  "key15": "4Gz2ZWCZzXZQRJBog5tu8qus1TmTTk3m7qLYFy4n1LTbTWz9dqUFp7FVy7oAi5tCfAq98eoh1MbvjYV1LRNZaybM",
  "key16": "5TCJKGKVZeHYufpcYGRDPwUsaqtE4J3gGtQJmmiTPJEZmX7v3JxDDPYLirkJdFdYPfH45CcFrWejdhoZpBeHnUB5",
  "key17": "5wFnSMJDsJv5917ua5S8zGzAvsWn9iuzzwSPANiPovveKBXN7ny7qaLZHrHuaAzyqpWALxERbg9bvgEXYbeVYWPE",
  "key18": "fdZGxFBt5xicwHpo24NMe446aEEiNyUsdYBQHziHNRRX21J6SW3oqnAetVfVkcM68ffs7UMuGcM9GytvaQEBb7m",
  "key19": "2MAerNzFeih4dnGEedn7DYf4MyBh5a91FzEG5dgNGX7K7zd5keSZWVubJDbSaZ5rXLSbb1nFWbsTU3mkNNYrqEGh",
  "key20": "53wRrV8q8aWJsXCo5eTd7kjjp6cs1HfNp5SLsRvLXVECFdbTe82ZBjsk9Z4PNbWR8XVZwj4KbSRZQGBVdFWzhZD9",
  "key21": "5PLzE3sqcHEtBEwGVgftDfcf4Wh8fx8u4h4vqMcshPjM8Jg8au5NRN89iN2GhNtNLmDKF57Q2kf6azrgvHxQp1gH",
  "key22": "5ovwKHsdEuMZqFxZoSm3zs4TJsHzR2DyndkH58XiFKJnjJUhRmneXsKF6mk78iFvv3z161LCzYL5yYBBF2xAfAFW",
  "key23": "4g4g1rezLyw2otZtVpyuDKkZJF9gWqj9s7LoEd6fQjHxLPj5HhtKfMkQL1UWc93JVTHQTT2gLHutbNL5C7K15YAx",
  "key24": "5MfM2eLjvENpK2J8EJ4meRmR44yRujCHrG7EkUQs3QJkGCNCfwZqoKvRdM8CDhjQhAiRAncuiAZSHyGbphwJGCHe",
  "key25": "FWLZrfGAz17sn1puXJe8T2ku4yw6jE4QFfso4MyVAggUN6MxJLMrZw1frFSVTprVARTykN51X1rXctnmaJdPZ4A",
  "key26": "3cTvGo4kFh5qyYM6LsDwgNW5NLmq948puVSLnX2v5iZEDerhh9aRtHzGB7LXxhjy3hfUxmrQf2MGz96Sr3uLUUA",
  "key27": "3mQwjdj3ugLkhjd3H8ci4cZ5wknU6CKhPM66SCycmU8w3wacW4zTmHjmrohFuxE8ngP9GfaU2MZP68CeWvgP9mHh",
  "key28": "3tMisrCPkMnauwVWQDwmqowKmGnLoTyBQLNz27QLdP7NJVoTJ3KQmq9yfKdphmUKsfjv9TaRgAognx4DWrZm7ETn",
  "key29": "59YNhAtRNWUH5t3SCsKLtxNL861UU7HgvDJfqP4Yvj59ZVR9LHi6FmDcFqab1QrjEFZ9c76v39gV4jpGbtUDXHBG",
  "key30": "Wu152CsmJoKHVRFet11fZSsLYbBLs6tLpacHuJH2EzwgZDFbcDxkv5QAmHgETuGXQSeScsG4x1NTdaVzqJanCkt",
  "key31": "3UHqzztx63Hvf8G1Qa4WGQk6KauA3CZXEyH6WgxhJSGo9zH6X4MEJiKr2cbLfQ9ufojxiZAAPgQipfT2TiGq8bSb",
  "key32": "4fcgwUgJhk1xC41fi8DSbFB8G1qCgH4ajjyxLFePkFmQ9P8KLdsNGQffKSbu25Gu5v2fr6DWaeVGzshK5NmRzEpA",
  "key33": "219b883tdjA5dknidugw7Li1jtof8WXPyyMXjHQSW7grbtewbUfBVympaTLNAJrnzYFkq4KVnNZ8tDPBKEdUPLgM",
  "key34": "qdp71qoJvH2AVMyaLLwsU73TcpA5tEgZKQdi7dghesrRG8u1vMyYk2cz3qnMhEjUEQ3SoZwUExZXtMt8fR1QToX"
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
