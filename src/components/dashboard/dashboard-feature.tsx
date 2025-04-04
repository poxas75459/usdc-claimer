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
    "gQDSXppo6uKvyqXHoGFagRZ8SvjL1Wes5DaKzK8HcafaFJ7PUvFVueUWEjigpkGKzAJ9E4WGUCkCkR1SLiaVX41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GKr9tAvu3kH3Mh7X1bVh2giZusfGa4CK5NAZwZRj8QmpWgULC5XM7FGCzXhGcmN9nGFseuPW1AgpZk4eQKRPe6P",
  "key1": "4FRQunyJgfdRWFJgiywA9mQ18cjsCPpmjB7TM3FS5hidmDGkkvbrF8jek5xuGmVnjmzQ4jFzu1pc1VESfdPr1kyQ",
  "key2": "58UZtk6Qs99rsrYMXwbVGfQdDUwgCaD43JbH7boxNo2oTyYsEmrvVuB6UWZmBHADTqJCV2Qjz3iK8ZtuY19rhifL",
  "key3": "JrZnXkVf6NCG3QEHk6jVq2yUn4YRDrw5YbJFkTX8rp2AofS9y948CNb1qC4grpmYdVBRu8FyAjRTzBzqH4HPQtr",
  "key4": "3Cf1Ho5qzDaRvKw8Mn7t5F1W93aeSr6Vsk9w8ZEFYUGouwNs616GhHJKwDQks4NVjbws2uDCV5wA8At6BBh9VWM6",
  "key5": "42zQkrz5oEP1z8EXFtvMYNtr1cuRHk6ZmZGE48PPRFuiSnp6UtoCFjVftpTAUNAoLK61Js326BNkJkajaUQgPUXt",
  "key6": "4iQPtRCZTV97y3BJ9TnUr876CaTUpBKo1ECriCm69od74MZxC5f5XdmG85SjzPonc7jLzMDJZuUcDfc8bWC63Pgg",
  "key7": "2MZ2NQ5UGzN97j6pTjUQCo2ey74F1zfD5NHQmtFrEuBo9dqk3fSth5hAiafDo3RerAQoP133JnQLeoCoVJtLRM9E",
  "key8": "2VDE87LJHWieyASMLQZpNVLV9w6Tps4Zmo1ndKCsSKc5uQvbwybqwdVHgFJKgYUiFJuv2AouvGF9GnH7yy4LMSnC",
  "key9": "3jQzFMNUmBttP73RLX62bo4rr8mLTNXVsVYaEVsW8hRmfKZwnmpMqPPiLfyUmXgjLBGhn3nPaUWkRBF42FEfXnjm",
  "key10": "5s6bEBXH7sRtY1hWk9f1DetcHpXw6qyuP1QcooXPiw2djtZpXADPnHhGab6c5kT9phpQPFCZdCsXwg4rqVq8qjjn",
  "key11": "2LjzuUSXdbcvmvVfHmuxcsJBmFAuZJzMDsMdCQr73ACUCYt8Y3FHDqKQp4hyLdPGsiHMPHvMV2XJTSRszQCXVkHa",
  "key12": "JmrJxwiUanrpNdWCd44YqnCiNXNGqUqfAg9qchGhdcfnnweGQcCy1kabvyvy932gu78qT1KxMXmmxBh8KPKsL9o",
  "key13": "3TzLTgivAEKXnUrh6nBzabYragVF72vVX1VqgaY7pqX5zjbey32r7J4CePcTh6x3CiwHZZW9tyAxjzdCbZVPyMRA",
  "key14": "PFwmRuURNPsxn5aNdMUgBcUoeGvhKUuZUYusUBwKYGd99Rp14WHsAHEocjN3hYDme36V6pRgCj8zky5mtjumAUb",
  "key15": "21tc9mjCa4LnqTz71k3VibqPvWUUyWYoGxae71ExALR6zzEViG1wbtYJiQ9JwyrZQ8crkD4RgVxqJVuCahJQKZeS",
  "key16": "4yH5Svs962CtD6Gf7TKsY1KaPs3wyGnogfUk7ji8KgYxDWQRRHmayqsEyNZjr9MCi4vJ5EmvqX9iEZQjLxAj1jwV",
  "key17": "ft9UzMF4UYVFU8nmnRMRbFmFFa7e3wbexHcaqoGKtj1FopxKsjJJCEeGM9bWfqGdEnku6qye3tvccm6nEDxyfdX",
  "key18": "nJduuKyYpLbsYFhwTet9N1uHfsbHtLat4d2zWaHvHrxSWLsLQkBweu3AZHYAmAEDfzYUvWP4Sgj9AEggfuqDokj",
  "key19": "452GA1qjz1wyzk8EfrdkjixhhVaZMJoT9A2ScBEqUeYnfBivqNP3JgimsCMai9ajMF6aS5vJgkRaKbX27vWpM2yf",
  "key20": "4zxaiWtJvyBJRRYuPyhkzG9egmzYPh9Gxq5ML6tomj4XNVFbvBPxGsF2EPiahsBiRd59PgMiXv8TFDuxfiKC2MoG",
  "key21": "2MhjfRSQNLmkXdXPusixwP7m5tvfspSLAmHKfGME2qtXsEtsumQbZ4h7CioJuYsCehgnwuyGwHYStq1iYxa9doHH",
  "key22": "534EX8ZZgiWdihJPSuFqGiAyUvatKSQCDKRTbKEqn8uVXzFXcBLnoUePxLZuEJMRpzcQkrmQR3sQGyXm2zXrhniv",
  "key23": "5EarsYTnTmbVk7f913rXtm27awTP82APhUxWoHiyLUSYSjPWE5dFuBgrhCWssAJKNL3p2hEE6KnaD3GJ7PZUY9Xn",
  "key24": "ebGn5nZF37xe7V88h9a98LwT8yeHsJ641HoM6hsavbQoCLmEFZRyt74ogLGmpZfzJALEBZxwz5PguyRsPBqSLr5",
  "key25": "5C4VX8hQJ9uzoVexKNnAMBFUYNSYs5aB3EGTsxnySr4N8zs38qHjqaGcA2FUJiNhqjfyUkoifqAwaGFY6MVSCHtc",
  "key26": "5NEna6nf9nm3sxnwdJiGXqe8vxCViR6YKYDxWJLGDy97Yp7JJsTwxJRM8R9yxr2pdNUM416kgoApimiwB51ecs5b",
  "key27": "yoSWKhio7bKP6vfb2qaPtTrEnkbkVYMp2faDxnBkpkPC6Sr5metXQsedqetZTpVbUdw51MmwcmLAadF669qbnUt",
  "key28": "4Hja9dHJRjHevLFzaFXpJWu1bGYGGsbrwoeqwuSAZAxpWwGV3G61CBfoqujTVxxs4xqWQzWCk2VPJ7ma9pfdznqz",
  "key29": "5WuppdTvyCkWPajCSdkianG91z69EoTDXZ3nHDh75RZ68wETrbsTV2dFcizE27k1eMRbPTrFGxF1rRsKb2dJ5vLj",
  "key30": "5U87QjxmJqKFeM5hWNqsCMstMZ5jRBMZTtJnFjrt7b6frdQoud8QrCwzKCnNDm58cLAAXPJSQ4FGVTxX7urqK9zC",
  "key31": "4aBKxqhX4rg8T65pr4LzPirg3JfjGjF9nNPXyAMHRN3857S8PoGsHsuPTpT6aQm7tWpFswV8mSe67ihcenrkyq2h"
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
