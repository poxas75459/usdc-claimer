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
    "2dBvCBvJtbcGk911kidiK6mXGb2odwtSsLphcCGXSUQzdnaHXD72WAHdVDHsWf5N8ZJq2GdkELuBTsmc7iTscoB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HaGWQkgKvWN57EsCe7CHNX2n62i7w4zEJesbU3DaGFo1aB87RCKzb6SD8LQFSF2boxXCUAwfwcwHPomKUFv6e7v",
  "key1": "3AR3Uf5RLNC3TFjiF8zEjzzmdVEBdG3L3xYhz64wM9FTc69Gy7WKsra5LbXvvLzP6kNzSkQ1ziSHzmkDqvhvsujG",
  "key2": "5YNT9CAEzW8EQJBSm5piP8onA7e4gD8r65npEFjQLfg12xgvGcJo8o1v6SewNR3q1Vq3uAiShHgM7vKq8anCqnhS",
  "key3": "3WRxvcB7ntGxzUooN7qcqjrxQuNxtz65g4KpqzZmAb5DLVRXBVswm5wnmoCYAVzwKCioNgeDJqMagJxWuF9kWEZR",
  "key4": "3PfG7AGZLFaVws1nKRzCu1xJW5decWAQ7GFyqEAisvQSmTtGZSnDc1uZpufEU4b3iwmxPr6XdV1GWgAmSu4wRVqW",
  "key5": "2A6pt3vUneHEUs2sNvUAV224QGL8ZJgekNRzFdeGUZbds6zVyQHomDFaLyCmNuSH7ftXDpC9pn9wZkhLDiLQexts",
  "key6": "2XbkdxXWhMg2zGqtDvaZ6n5UKJc7FhFzERnEy6xbUTNywugfejZJnYyphBkpuLtNu3RoBLV3EtcMe1aptQTq9gRJ",
  "key7": "bGzB2jYdhptc3K5hy68DwfLLjTqwkRPJSE6QHZNDbN9iA2QL3ob9w8km4pnhsohjMcfHoe9o69dTvnRmETRrdCc",
  "key8": "3TQFKVFCKb7w5gZXwhkcjKb4AW5uwRUueXfahmkbcxwdVz4oCYDYCNXkSZEdzhT4EEGKp7uUDdZm3x3d32qprCt9",
  "key9": "YhCeQg5oZ5BpCcbAYDwZWKGr1UsHDWmj3pEJ6G6h7E3M3BNWcPjb2QhDppdWqQWJ1vdayENhCc5sTcwuAxABLvm",
  "key10": "2be7zG3sjKiDTGfYdQuKtCqJ7aogQGGyNMtZxeLvz13qBjtc9xAPaCQofVoUSAzuDBiYn8mBHFiYVPpRxmg1AHd3",
  "key11": "22fdHA7SAR5iJ6GmTAYpRMt4NYohbzFsqu1Mwei9NnWcG4UnwH1fFZ7M82muJ66CxM9ZxqrYzneLo4Nt9AiyEo9t",
  "key12": "AWnGZxSARhzCEovi8qmXQwujp9Pcy8GfuXTrLZSCqmEc4n3RMnu5L5QAriQW1TpPXx2yZAPYJtMqXBsr9aSJw5K",
  "key13": "4huLkgje1u1LUwtAR5gs3Pz3YRfEfwAQpvvuagjX2CR2fe1Hushq7HS6pFmKHW1ZoNmBtcRDZ3KPfyWYG6JpWC3p",
  "key14": "2ygKK6CEi1jptgzQGpVwmC47h6NJHREBtBJuh4pXdp3c1CS88HczHo5CUTGNYZUMgG3SKjHDPA2cwkwAmDYH7YKn",
  "key15": "3orGwaYxpGVhE2wRBoZDzrV91cmToy1zvN45yEZUQX5VkysUjZyrLVm2uh3BjGDoMQpgkJ8AZw63j88PrWBfggkV",
  "key16": "3SaPjDEWxqjsQQ3nshemr53j1VvfJWyw6FJqKWge8X9fXt3LfULjjFBCzb4313Bvu7qemhpKZhHmx9aa85kpByHE",
  "key17": "5AUeToteVDf4kCFbv44pBs78bRxa7BRq6ekkF9qrDuEZ5TWPGK75yFs6wyQEh8yqj6GSJt9XNfJT73GcyzCnjbjZ",
  "key18": "5WXmKRyXPvD821RDvwB7iF41CFpLZnkqMAFXTHNT7Fcr56bcWERbBzu4gqookqRNKbwTVC8PF5kPeH7rQ4rovR3D",
  "key19": "5gm6iV76y1cRsJWDb2taTtTKssYe4TvpTjRXM3xLM9kke8AyNjX5DJuWtrfk6Gy2UXF8piMe9rDqALWWcXRZi5J8",
  "key20": "2obhdcE1qfdw3W11JW2YA6HDyqvyW1pT9Kyk75NxMuLCxgjEQHdu1CnLmcEUptDoyf1qcjmVXFH24PRAWqJbMCQU",
  "key21": "3FJeFYimWhysThKfFcKDSmipeHwiojxJbN2mESkQ2TW4YS1PAxuecFQCnsBHTxVj6xS3qZe1EZCKzr3sx7ykCjdo",
  "key22": "4Khx7m9sgPTba4qrcGi4zvGN4vaX8usFaDqJeaEMT8JvwmJXDdh6ncmHrzk4EnBATVNEaf1e5LQcu6qEpUcRCSDN",
  "key23": "66bzYyvWpg8mdfyrPkS2WNy4FtVMcfwb9MVkvj13EAgaCobAs6sawbJib9r9F1nGtndo5XFbt2LCE9eVfEsy9bCL",
  "key24": "3SoegabL8CLnnHvN7EsdozLLVQE5oc56ngZRvqgcgwQqsssAo2HDERdjHm8jVLkecyaP8nM1ogKEHruCzGVpw91U",
  "key25": "2Y16mviSCdMg2Mi5vGGPUXcmXz16L4hZm53g4TzHgJ5dCUJKzQhma2cXsMiz25WeGFkXu2BYDefhijKgcXTM7LMD",
  "key26": "3NQXKi3HguDJAm81f58DjW2H9M3M7JN6H2TZkHFw5pN8Ya2PqZQxxUZrj45mErR1eF4WQzcoBNonxojAZ8tdm8YR",
  "key27": "2x2M7dW6nFL4477q7wyfgqigRGNENJK21pgQuPmZ5j1Ay3XZuruKWMuDHA7fHbGSsHxBWjKFXbVzwb78NvoYd1N5",
  "key28": "3bBfFaCirsjLFaR3m3uBKjGaHwc78nedo4DpyDEXQBMeiAp5Qru91AAjEVpqZuiCui7wZuVTK7HXwFphhK48SUQU",
  "key29": "254R8WDN1rTxZ1gJ6pPgFGE3b6pYBMk3QjYz8jdoUJzf3mWQgVhAGMUC8fMEhVjEcXy4t6wk77zsn77aTiZMaam9",
  "key30": "KBApHFW2ZzJGnkWj2YVbczmEWGzEsceqFGeKxtL4tSwjvyP7sNch5D7Cs8Vp7YesPSzAdGyS5CWiK6GgMwRWpbn",
  "key31": "2GukGJUkvRaKd6Bw9qNcb8rLVjxMbQAUhNdGPWyuxKygDwkn22qVTaRApnCARW9CAgtVTcYjguGGRW1QkiZ1wwGc",
  "key32": "2qR6m2u7YJ7A3czhdhfodTTwptQDDCPtXuoexSXEnsHkT1fcknczM7ACwRqJxmDYRJnFmh4xwh45PKwV49FL1q9V",
  "key33": "4nZue8FEASfLA7YGdBsBggoyoNDe8GiGKMtq5TNVks2eNc18BQsS5kHsLeeKQAjrQFtXzjmDEx7JRMEotkv6qWZx",
  "key34": "4ML541ygvz6MyEWf1rrCWPvtKoYnzsaQZMpvXjPgcVRR3Vz4TFdcnqQP4BMCwJsyGhbnKXsj9bMmwfAEB9Ly3KJH",
  "key35": "4r9uFoWfg9nobwRk8eaaLXHHqWnvsV3wgHSuyDBCJJbJBVaKgA6nbGyV74m9gT7a87WhpDoxFMtt28BYaDAtJYPY",
  "key36": "XMKntWg16jqyar3qoqtQuG7WqUjarF5LfycziT1YZD1zWxejDGm26V665yns9GPwiRfMo21eU3hpJkXENZSStZU",
  "key37": "38QiQ2rDmAdWCny8iyGW3vqnUZdnHFdXgZvhBV1sS3rNMhjxeerASeEFC2XvfCGcSUf9GmSDPkEnAQvrt2pseE8H",
  "key38": "yd1uJctwDGBmvsE2ktvfvsVZYWQSARaLY8w6xZW47QZpHk6nuHHS9W1aa6P3meuyLFbNhNA3ZnJyz3yKCNzWz3x",
  "key39": "4VjrxLy1ffiztATvfNd1Nv9iUdC1MDkMxy573bHLewoxQFyU4y4Rn25iR4kR7dzdaafkwHoBsrznasLiR4aad5St",
  "key40": "2mxgwqzhAM7r1JeMRBRK8mkcgfedW578XQT4tmxm7fGTzAZyK8Y9bwnNxgfDTR1TBsKwarEEomHuMXnubWahSd3Q"
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
