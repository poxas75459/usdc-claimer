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
    "2E62D8k2CESWDt6oiQMFLq9w5LLHLrrw1fYPNhWdRB6gY4k84fVtQmooY1qg8jS8b5boC13W6GED8fkss2wFNYSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5Kubje86Q26DYNesPNjMBx76ZvfDJaoe1UNx4UNMGn13WS25te5aWAabkapLGUCftDtDfJof5MpXwo8W7vCjy6",
  "key1": "4JyH91zN9nYCg7crAKmv212mKF89WTtNJbCxS8CSZB49MDJzTtYT1a4sDDRPxCGDYrUKpUXYxmaLhFN8Qpm3tLve",
  "key2": "2gkhmqCsthB4P5kSVcAteh89CUySayoNm7kHbmbwY2XkEhLuMLtqEPJhu2GwghBNR9bAevH4UbHzEFpG48B7XnPf",
  "key3": "4WpynCzGyX4q8UaQvkyXgM3Cc1BXuv49LbQPUGDmxxuDajMxxzJNgZaTcDuVKcqBzgEudhkNwMSfUqxUg5DKovJy",
  "key4": "4jm6oCNqyx24tD79LcX4kNWzh1qwbZudbMwrbnFP3PEz9nkYjpV5akxMrKeUGxsUqmqhfjxNa5MK6xvh5jFBjuis",
  "key5": "3EkSZHvn1h7KLdaJF9u7meCXU8yameQusw6sHQVwDksHbZ2d8YUuphXoqrBSzuTwJd5kAgx8CvbRG7sReDAadjqu",
  "key6": "5U7ikYnDibtFxWrYQmmTZ4pmYWAFq3u6TcjAE7aGEcsMv64WDRj3rKkzc4iKgdohJNuXF2zhnP6ytJR1pNSVWteN",
  "key7": "2co7kfESvPcjwJJnL8cSzB8ss8Yca2NBawNiA7UnzpQPD3d1GvSNXiRb1vHkE8VvCVGa6jPvjw2JqgdUAuyvs1p6",
  "key8": "2B3CECYNzmVfr1zQ6AzFHvevbdvikCp8WgxVZHs4AZPyKiM5d3j48aSUbMkoGjedj6QvQDFjgR2ByTv2Q223eEU8",
  "key9": "4DdC3NFG8qRH2PVqGPUkF4CniHKbJBBbYwiMxpL19bxuQPKQ4JynFJAtNQKBWXVBuHovmftP4kmN3FJX6mr1W9ZL",
  "key10": "5UExUY2caJwuDhKwp3v1zt5c71VnatYijsiTyKPG9aHnrkFJaZLsq2pe3bDhXPPwznyKdYPQyJKR6NckRNmaJ53R",
  "key11": "3kbK1r6ssV87T1rPb4FqkqRM5jmNiYwwcz3vdQMz3LUx6ru8LNTeGhbNDcHxYbngXf9JwDW62kxeVhhajpiKYRy1",
  "key12": "5zS53PP8GjuknvXCgzPiFDSSxeULnh5buacsYrkQTWxue6CdEVTFJJqbGhdp3ZEvYTSadujdJJMCk53NAwBVTMcy",
  "key13": "361pkKSR5coVCY4tC3VFvxWNKbsNb7wApsjXX7QJkzhkG4KHYw1b9xzALoLAsR1QXoDrxXNw9pyzfJSrEQTra1io",
  "key14": "vzeeXNtTj9SrEAhWN3v5pSXU68SiNrFtffQf6WrvUGkjeXMWh9sMMCTZRZi4hzWWxX4Jdd4Tfb9y4fi8HU8Yk2r",
  "key15": "3bxsm6Rz5RjJEqg3DoC2rWLL4RpaUDgEcCKtW55rDm3Rd5CVqZrDvMx2c2KuioAAE8t5K6v2uCRHUN6J3HG2vUhb",
  "key16": "2S11MZirgTPsVfkLd2d7RgssngFwwhSa7YLRi1qNJJn3uuebqLCTCSsg6vz932dGUk4pXES2EXyvqfsL7hACCYFg",
  "key17": "2fTNP5yHqCPpw5gdTYCV3dRy98cYcJrCKru7DtG8UH2Nw3T7eGPwrB9vwpQbUsz7nWDwbNaHX3ge3MieLYm3Ro2C",
  "key18": "5x96zKdW7agiULqDicmkcmUppvAxaV94FwNkWnX52trMMsYREaFcfvG318hm7He3bJzNQoUnyDvocwG19jXuFRur",
  "key19": "3iLm2vMqnuoHKHQNaWF5bSaFFHTQXkHExtrYtkqqXVwxSwVGkBdE5XbLtRCjoh5Qj9TDzLkKMbKVMX7P9BrHvXcY",
  "key20": "2oC3z3TpWdJrWRcn3UUdbBo2pti4xwKQqZdnyqAdoMzP6n4dGC1T5FeX1wBxdShKkQjeJfNE51q74uzjSjej6ACt",
  "key21": "5SiHBhkWmk9wUTnmvDBDGwPe8c7qxaBYgfnXuxVViTfMRDhh2ERbJuRaJ2fnfcCkqswa3ggoGExRUu4FipBiGvGi",
  "key22": "238jnTeKPpvYMYpYWLQ56vc4i8qEarDJW1oXjpu2uz41dzUcX7iTi8GkMZs72YPbbzoLSb2XTUdXVdK5SwcqCru8",
  "key23": "4cYW9Kn3EMV1sHMawbyce18dRegtTX27YabdN6SpwcNXpXgp7cmCpGYkhzuDRLWn75EnMq7THED9HiYQP1epnDtF",
  "key24": "2c5zKcbtD8TL2VxrfDCrfWh7UzVfUJiZQRdgNVdw168PMxkGd1CpYoGTqiu8N2vgWYQU7XQWGHAiPP71Nz6wxWUt",
  "key25": "2Xz6zQS5mckoTrPqkGYxiH13GadAywdeTwD7gGRH3FSNjwTweYafVu1ZiHoGhLj46GtGTw1yRX3XNVFxcYtyP1ih",
  "key26": "4aB7CVdiqpj3ProRR9FszUZcNvmRuhCVxBcXuX6nhmG34PLBfEvzWcZRxv6EhdYPeFj1ie45SwRrWGqAX2bu8X81",
  "key27": "5StwaULKbntfgMajXPH7VmnaEm79vMGzXrCQSsxSdcjmP1gFEfa5FLj3x6LV8rHsK8wroQesYxPkbPcWqcg14bcr",
  "key28": "3R4uZjaZziAFfxDZCHLgUo6HWTktox9Jxo6iPFyf3uHQDZmoi4e5tMJmvq55ur4jcxdNzpEHd2jY2TDog5uQmASb",
  "key29": "5ThqiutNg4X62dmkE2UZoHjQXEvP7E2CQjphLndpPg1kMwN4ui5VBCWc5RxNSyqrMpFC3NBJesF1H1bASJNiENCm",
  "key30": "2QEjbMhbBav4oi1A9RfXCMYbHZT6Fy65afM79CkNLnVmqd4Xp3EkjnXtSGvB6MhJCweQbD9SVq3jyefvFjNDUY6e",
  "key31": "dyAMgqJTkEB5oTsjSdwDD7XNxrkPyPSV5YeNe9hqzCTfhapv7BPy1eA3BAGwHqh2fzQKzAPT3oq1x2tbNo5stZw",
  "key32": "65jexnbnVPF4qx12D1An37Ag27FueZzyNipciPFsbX5MtesRrGLNsnWamqhY59aTqkaTy2JUmrwSiSa6Epi7q5vk",
  "key33": "2bvXXgmkz1Dm7dvqjfeM75oHBdCaPmrB696NeCoLoYYUP94esY45f95yhnCn242tV2D9B8L7nsv53NdKrcrPm6Qv",
  "key34": "2MVucS6DqPjcrjoz5AVHZWQxzqP2QYT5DY9fYgvvcnJAH9RaibeUZY4dUXcmzTEhjWBEWvqf2DBR83paxUv1RZJT",
  "key35": "4xD1PPr8ZdKqKEUDQ8SCWdYuVyMH9nJneBM2hi9qQUmbdXWvQSf96J9sbu5AMvQ8VMSzu3DxBzDubRZsee52CXQ6",
  "key36": "57HffPgutrjHhFnD8n1reERiSWVUWm3MqQdPYKGzi2kAw9t2VNxZPrG8Bh7i8phP1gq6CUfLYG2Eiy7Htk1Tw9pD",
  "key37": "3u1u5sTQXgAG4aJsSQYacwqZFDKMg4Mnxn9psjq6k1EnGPCfW1mrJxBQvNo3HyjGRyFgh4ZxGijYbHafye5zCaNg",
  "key38": "5Mjtt927b3RzDYmX14v1AU8LBiBT9dmMGdoCSF18FnmJ11cyjDk1L52BSPnHB9njfzxrMwCbU1zN5RUVBApza2yc"
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
