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
    "4Th1S8mWXpB6Fs9SJv7zXRz1E9ayT4vMGBUprcmQKkSyiPh45irQquHRdM3thH2nRYkGeQyprMeLgK4eB2JaDnDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BTWAWbywY8k4254XKTdi85S3SbjZ2wY4n6EF635Q52VT4RvJ1XRcz825qYSfSELiCm1asYHQaupxCDdkvXaRbMU",
  "key1": "MGgKPw5p3hf2AYHDDzpqUbJHJY5qQysGiQsQPopHnJBGq1Zg7GmfWXWAJnS5XgbgRWzSnQSFyWU3Myy88DQTCVc",
  "key2": "2pUdP1b9wmLM5zixFDJh5jdU9XcQPVUyRWs4dyGNLYXMQzZYwQCgRhfNK6yDCyUPkADG4DbrU83m9QxEvztSYnAA",
  "key3": "KEpUbLJ8wG2dtp5kgF8K2MWyBJSNc2UzADcMeFNckGw7DNiQaZCY22khuPqqqsEWFaP3iq9i55hR4AmUXR1QfQP",
  "key4": "3JM6pzqLmeTBKnsfwvEgaZxbBo1aMSBYmNPb6cdFmmSVuranM9TCwnLTN4oNBwkcFueom1PHHkwgg3Ep8VSdKqPH",
  "key5": "5JMhx3wDkY26iiSdt3M1uz9FmNwEzqt3wSP7LW2VXhitoMYq7fDNwikzVGqQ5EWHvWqgo9tZaZCi4YuuYTmRzWBZ",
  "key6": "5g5NnN4b8V2SoxaU5KZFhP2udK3MkpfH2zMSTF62vHLwAvCBMm2kBGDH5snK2PV7NdYd5B8XNXX2ez3C9nXmFAKv",
  "key7": "38nucGgMhfcvKeFXw4CsEUoAT1JCJvEcmSAqKQTbZTdWnKMSfVLAXSFdznWHrzFAM7oFYsQVzNKpU7rGFJ1NT1XQ",
  "key8": "3U7t56W3zmNYZPrxJNCATJn9mBXjZUjMkFcmH7MtvJ35CNELkDQGoSf6Z2dWYeXua4Vigin1YyWtZE66NLc2BaYV",
  "key9": "3ZSTeBJRfJXicHafGqwWg86dxerdMr8vX2BnfQPZDwgZ5isbxJDYkPdwmXRK99HjvpwhStMAa1GLHVPfXvsR113L",
  "key10": "4i1qRGwCMk8qUgGXRakvhKz9g7AxVWfb5fWsoMKwJuYqiLk5d6LgPjuXuhXyttTkHfGmwnfMqKC21SDrTd7p4Pbs",
  "key11": "TUaK2kqtFehHMfzEmvYuWdpyjjg8kSqxworwGu3qP8CcMuiWVDRX7sasypdUjA7t75SjM3dgzU81rmMgz1tEW1U",
  "key12": "2GuFSdwUx9BnbY7Vvu3w5ZfH4KGgGRdG9X2m7ofXMY4aayVUy9q79V2qQmHQhckMMHj325W3hYv9Tfo8cbw4ZMTD",
  "key13": "3fvQUZ9Yn3MZqvCPmdRwX4Fo6xNUCX95Q936xsRS8gB6Z68xcGsYmr69gvtUYsL3BLb7Jd2Es1FdPoH39bxDXjVW",
  "key14": "3zfMrXJw2TLHHfR24H7pP7WG3augwGR1hQcQvJLghYic2qg2DR611w8Z4BNMVJTnYyypejRkjXpJGMRFGx2DRCNz",
  "key15": "b68u6R2fk5YbScpXT3gWRMDxFubE4vZT3zYYwBcs23EU1WmBXtoLsjmVKipQtmHH5pFBHceF4wf5epgQJRSNepn",
  "key16": "2TfJHKsY8Y9VKML699WNzePHKVKqFV4RrFJwe5m8KqRUisrx2j1JFgya7uGEPC2SoycT7KsYm8p9PxaKjxTgtYwX",
  "key17": "V3XuzJdU1Xs3Jou8dfRuNL9zC1yeVfsQBpvn7s1aPMjdz8DqKehAWCb2BvhuhHL8BjubqKLbqCGJogDSVLNCCQm",
  "key18": "BSyAMjSXsKq3AKmXh5y1vWTvdzZMxJyEphA2iQF5mzWekqPuYTrFnYs7qoaoC5NpjsKY2hAZJoWDnvZ4sPwidrP",
  "key19": "34GwDrowwY6FHNg6J4MsWpfzLHWp8wR1uRmPMQc6YwjE7ZYKQGpMjHLJKYT4Dp887jhzcKGRCVa5jGxUTZZUW5hx",
  "key20": "4spQEXWbEBWDK6qpivE9y3wJ9NhXWLBN6hcCgsq7DVnwrUbx1WxRm5J1BVjEAaK18rVumw26DL4fVM9vZBzgQs2H",
  "key21": "oF25xjdGrJQZ5mdECeLoWhhxUzcUqH9feZuPscJw4Q3mPsLjRpH9sXuR8fddh9QcsB5B6JBZnStvwwb7KuJQPUF",
  "key22": "uYRV1XZPu2zWXWqUoudWCdWobgTcB5ABhiSJnykNvCuCnmmaNUpypTaXi6VL1yWkjoUbrWAVW1V6a2aRAEpFfoT",
  "key23": "2r5KHixnrazQSbhTEFkthZ7ZckGvttdrUECpyagfUv7rQSf2woJub3si2Hkr8J1q3e61dD1fMuAL4KjEi1nhcVp5",
  "key24": "2zqEESg6e6wFYwSoy2i3WybCrQtQwFMn3xHc5Pa6DtvKDeJjTcWPQYgeJVt2r9RkE622HLXrBucKUf2ABDBd4HHF",
  "key25": "4G8Xcr4KSqjxDgH6E1c6BwZyKSGETxPo1mSwhDKoKZMZN8UUC8CnEJcBZDeir6zjDw2EoZMXuMsc2CPpZ3ZQKJyv",
  "key26": "424mKMCS9qn5R9TNs98oMwM6PVysVoEyRK9dJ3cZ33YSAWbpkVDRtoRSe14NELDxmSDFZjj5D9xAvF9SwTExchCj",
  "key27": "2GCrabvjqbqQECgAbqVhVzyJLTnFqEbfVmgsW2i8gJh7vz5q7HBUymnKXNUzH3Eoj7NiYUJ1QumHqADZFyGaE6DN",
  "key28": "5zDgFzqp9Bbh8o3SqGUtTpXGyLVh3rmvzg9ZGKLZaVqJ5nJj2XTW2Xn4Z9wDyqp8FRFZgP4bza7yeF6RH1aYBWSN",
  "key29": "2v2XvZtUgda7F7F72geqwJMBUAKPursMKBszErH2TwV7TqpBgot9E73cfRxBuFGHSvNtSz9y51mkBj9UtE7EiEW6",
  "key30": "2fxdGuRHQuuwsSUejVhrP9wkE8YQA3SmxnobkTfYa3xkUadEtQDYRch3MFetiDHjW93Hgj42dn545sSR76RtKW5d",
  "key31": "mLUKiTGkmkjr9xAM8mhKaUiXSXvCxw549jfe16YVjUX94FrrLAc7LZbC2Eu6Y2AN9SDKyzSZn39o7ETtLyHHH7N",
  "key32": "aR6RQn94tKjJEoE37HCj6ouiNai4Uc9sGZtSRwYuwLj5xEeCZydwYdz7JpFUC4EJ4RmP9GsoENAkGfCAvRdXD8K",
  "key33": "5azAdm7E4GMfFNsPfAuCth9YKoMVBtijELATXvjhGmaS5dd7fMjB1YDsc8qS4Af49tnC1H5uKMbP23zYd3XRacQz",
  "key34": "3KG2WVnXsZ5ktZ3rrTvRoe3sB7k8asbmFhaSoKQKrQ2YMqpE2Wy8zKx9iRXkX1zGRXK85BpDBMDFuLz7enmmqjf7",
  "key35": "4HgdGi7DnNrKc4DPQjbXzUEhtGp6PRJYKM2tsnqowYc2tUH4YfFqV32KBLxjAep2JFk9mcFoRoA5dYkoKNmznq8G",
  "key36": "5KtQ8LBnUrCYPm9aqhjL6DD4w4HAPdFjc2rHxpP4fjcZQoYAe44FJZURMTR43f4dbXjJxsHvaNjFXxyP5YU5igFp",
  "key37": "4cUeT3NHv67uRbuMqoUqav11yFE7uEdcqcGDVcKhqDdEcLkPvqHtEZ7Fmpqz8eH5AxGPzGWtQXFUip2nPSuG6EKE",
  "key38": "4Z9cvfSK7iQLXUjubJrZwKgPAdPfDFts4C1zBnXChWjDfCApL9DjkJfLj9nqZousy74jBtWoEmS1boVdcSkhwLHG",
  "key39": "gAcW8reZVkECe7rKbBw6XDA3LBw1A3piHknbhvWEiMiAgTqz2Q8NSBvFoLKJNZh6mGo4SvYkiHMABDShEiRLW4g",
  "key40": "eBUS8FgShiDoQtnBLkzzoLtCpqJYDYMN4sbTsZzR9ug8yi8Ziv1sZcNMp9HK4GPiT8BFYQ7uf2PXeAtBy4mpUUF",
  "key41": "2JcK9af8hgyrTo5wLkFXzaTrMCymWwUFT7Q6TyRPYGWY56AYuYG86GQaTHWyYmgwZD2GtshUPXnUj9vq8gQoVFcQ",
  "key42": "3qDJGfGL3jzDXeZ7a9ozmWYroiagFVVNfNKSWNer4otEjwdsn9EabQe3mB4oKyCv2ZvPNs28EisM3cuafSynKgpZ",
  "key43": "5YhGM5GKCQAwzSK4fR5X65Yn861GHvH3ePPvgNzpZt3fNH4DSjp5jgD97rvHDf2XSBPfv5DK8pFx3TM214fNTxrS",
  "key44": "21QyHu96y7ExuUv4FKHYM8jVT2zBbyRAw6RHBqe51S7C14rF7rpp8QAHMQTCwP27LCniFBsSV7VxtJ2MGxF6yGkg"
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
