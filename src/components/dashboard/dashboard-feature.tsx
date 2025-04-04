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
    "4hHLY7BJRdZqPeKNTH8FmDJpqyXzYnS4ph2wZohuGpx17hbVSxmeCheYxLCNTmg8HUAvwsMDSLy2tdc2ed28Jm56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SzYUFZUBW9k8JbRrpU5KexsEWu6mCLrChXsY5mRs5PvHXHzjYZMKfskA4JMUxy4pQ8bvC4a24GSVJwq5ThucAm5",
  "key1": "2pxd8YFm9eJBXBukKRHY4244u4PKUVH8VpL2U3zYvCauVHcYgbfp5wMoFasxRchV2z4cmJhJoyfhZk16QGjKnLgT",
  "key2": "xA5L7ArV1WwtDoUFeQCBHQbEAo1tpqAXW4zXf3F8k75RrgvtYLVbTWbqtScDwijPqaV3o8N4ECdatHGuVToba58",
  "key3": "4bCZ9934AWYEsEZT4ptGNcicJfBaHdnXWvDK8CqnZap3RF8fWLcjLqRPDbDBNY1d2cDfyNUnFzg4fWXUgWfnzh9D",
  "key4": "4bVupp4bRs2fpM76U836iDUHapwAuH6TV6AhvLoTyhEQigf7k922oyX7b84qhEQ7eS89CWoSVRe3jaqARFv9961z",
  "key5": "3JuJEPCvGUXC6Jf1Pdqi7UQYxmk5jKxJ2kY8Y1pQafu3shv95akwXk8BwkmVtrt8F5mda6qG7Zo9c4otH2oiFQHH",
  "key6": "41HaoNG5fVgpo8xTiT4Y3L51FCrQyLLFCfemxWVZh4cM9Ywdv6BHQiBa8tEcRgcrZvRpLVszmVFMJfyZRxVVfiUE",
  "key7": "5zd3y9NY93pGHA6NGhHaRNx9vazEANA4LDpQrcTEjGW6LqqeMzqZM9L654khrXRXQwReQ3F8EJXdjPpYt58meD9V",
  "key8": "4RkykKZSM67Q6TVy6zzM1mQ1inJFqtfCyxk587mqCyuxEBZ7m2MDQa58ArJHWkiGK1Sbo4UzWhHeD1JPrsz18cDd",
  "key9": "26fW6o8QA3B1zTAyogM8isudr9BBTUd3WFoKapGY8h3Kd7pGNn5gtpqWBsRspKusDTN7rA37NoRApFmLhRvnPJJZ",
  "key10": "4UVSQnxR8PjY7W47QK4wa2Z6Ehm1vFWu5imGqc5PCA7yrTJPT1c42YuNCNVfSKJWYTBVwWg9c4HX71zHYrcHKUnp",
  "key11": "4TVZ4v2wbUeCDfMrJmfN5oiLV5FaZi6JioyyHvHAQdeiwVhvg8Qss712uVAvhLAbs4pdpaemXsDqgQu5zgfDTrvX",
  "key12": "4GGCurJn4aFfCkxqhFNxdGpzCk8FekfighaGoTrmbwnGsw5SJGuTYLaW4kmZbkmtcDD3Ea151SqhDm4AW9Dqxzas",
  "key13": "22emocE1A9b5qmiPnVz1hnuAYELp3uuJxHVTswWsvA8TEEjQJrXMx924Ep423taPtDXrqbECYSwiUnz7zVSyWWXT",
  "key14": "3XAY8mpbqszn9SqxknSmmEFwG5WzuKv5X9nxT8kfzVMKcmXdp2EmKwf8GKecrWpd5TB4PvRJDMA33aKZz2Sh1ZTJ",
  "key15": "49XYjwYhTrTXK4emVMDTjaPt8CMqFuPtMG9RbWEZeqAA3o4VKMf5BsQu17q9rhSH618Y5Y4pxLLkxH6ysPK3XwBH",
  "key16": "5ZsZB3F4JGWXqhCeheWvRPzrPLB5pCKbat84Sn9DLp5TfyHXaR3A4st7HN6gYPt75wyJD41oinh4XRFvNpBFizLt",
  "key17": "Q5UYdJUkmqrqdSGBjJASXYFWJvm3m5CA9iPTD7ALwnyx8BGHBAoguy6F6i7eW2woTK5A2q3JHQRGEpUkXnGGbkr",
  "key18": "QjzGNutyS3p8Kr6WxZE7MWf7Qb9sJGVX7vLsKsqneu2mKzuSUABBMh5hDFhxPbiRHBkcqMRgLjutcjeaVfhBjth",
  "key19": "FJxBaLfa4wQoWdFBTVc5mf1tvdzP3HNrCCtHT2fVVCoYtZbPcwQSvxSpNn7PZHN7hUS4cXKgu4RbodQgGmPXbgC",
  "key20": "2CBsijp8RBVuNW9PV6SmZf8bSfiHQLihNZb4WgkPzCuhVeNo8GjSbMf8EMst7nSKqDnfYuGMNQGU2vNLc2yoWD7N",
  "key21": "3VJqrZTw7Bbj9WizLhueCD6v6jzqxzcUoNsFm2Az7SQJUVERP1MUWZ345UUUYhaGsz9eUjsjD6bhGKBhXaYeqF4B",
  "key22": "5zNG8J5PnmDJukJZC8NaRPkKSdPJxBPR7vVpftc7RepGHntHvHZozuMJmvZE5oa29s6ZDwwU8eGtAyc4totrWzah",
  "key23": "4NtFMyJif8ZHU3Eew4wR9bobtE3y1Ra7hSaaJMEVrTT4mfECBPbP2WmKTtqMYQTGj3poDkfBncktJTrzmJYGGipQ",
  "key24": "5M2d177dRPKrgKwYioSXNGWitdGZ3qw2L6smSjzhvc119huU4FMRbgGLJmrS9nKP7oUmTjFikLwKAuwXhJD1xpof",
  "key25": "4NkvdXksUTqNYwtJCqeyzKT7XQDBvtp5VGbJFDygReEJr1JmEFYeFjWWEdCzsYXu2fuQdZ813vgp53KNib19RatG",
  "key26": "5T9NhDrUkzbxtjikodTnGYHXfUenxBS7GdSE9RR8ez2oD4hhvtMtoJ6Jycxpb3XRuFoAqcHSzio6VMBj8dzRC7RW",
  "key27": "5RoBpe1bGa7Rq9hKPvC2CWt7YAyzTmzrrxmkrRttgWKcgtLaLaGqDJg4hnhvyxHGhGMCoh1BpdKhBFn7duksHyKo",
  "key28": "3ZRpUrSNhTuoBcLawJkuWBNPYRSgCLxSQrTKmm6QauQRHLAbDFrmx6pyE6qpoaHiUWHmshueZoUiASch88hNMeZi",
  "key29": "2C42MXpfBzpk8Wa2Uj8kmLgZtAiSXhax27ZKMgJhULGzjgDTfqVjC95Z4yfEYf11iSqQcr1nvaAyNzF3vgmEqFRx",
  "key30": "anbgjSrTnKAJPYGquySuMn78sowTRmB6MM2Jo6KSWUWbG6kWCXjCepsD9SERzkTLN3jWEXcmfs76Xj1f4bBGbxr",
  "key31": "49mMyXCBq1bqEY2nUwMSTrTh7EfLS9P6NvptSjuk7nyiqoMC4MqaQ2pdXwrVqM7KLKuXQUq4zNxJ759rgQmvdjmk",
  "key32": "3wFK6HczWUoBQ1VerKi4bxyQ89awU62uZwthHDTPVzXwk7Hn9YnX6f2x4pKeaPs2m2YhZppSPVht9TeU6yLd34mk",
  "key33": "3w9oDneR8NERDERPrhiM7jg3QuqwSSzc2sWv6M1L9dDKnumHQ8BtMjT6LtN1pLEPcy1Nfau5tysQ7zUGs3M4vJe6",
  "key34": "3AvAdnq8u4UqUReubHjUwt384i5oUH1aqEL6gowFtCWmG22PgLC53AmJfGtVKVvtVFqdf4786GA13jqC3GyYyv97",
  "key35": "4YbPzXxP776fCrUDyDKsdGRR2paq1QZbqr8qociDrKUpEK8jtcRvcCuNBVCHmvG1EPGJM7nHmNBZuGp5SnsxaVrY",
  "key36": "3XY3jQQFcf86dgeuBfNbEV6EFe9xLnLSJZCz9gNk1memvuzopgNkSmoZi3GPCX2YmM4knX49qWRbrrBdNLtsW8KP",
  "key37": "5viKriBQXXVJtTNnraCCQxH95tUqcZi5TtJexWCNnkpcFx4Qa2mwbG3Kqbi4DHvxp7WZKpLjFhzDcLZQHUpqC4kr",
  "key38": "5nrUhy8q3NjX4PdvJEd9tAsZnfPL9t1mizi1PaJ81ZJNsgssN9XFfBLPzzZVQZDYphFqKcitoKhdAvto2Eus1amy",
  "key39": "4UaEqo7Wcq9Kpzew73wmdG4hXbMjui59dEThDhqLzP7v3VNxWxCHrVx5ED7azkTzWeaiepRGA4k5HtAZ8AmaDcpX",
  "key40": "mXGehixtnLtszQWHBBtsWRnc4YUcVPinf67jEHjsEYq6JSdSEFPLSmq9eAGgArAeckJL1pMRcMmpbJaCAQxsVAh"
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
