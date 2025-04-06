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
    "5jNvWXDDXjQnz4CzADFuXMa7y9nCA3jjbDFYopEbK9zyxwkncbEcDVRHpgvWDiYeWiEmX8oTv5BWxRpqUMYAJYT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "utSG15eCSj25dupkozZ1fLdkhejXhzwZmrjbJRG9WBicKfBSLW9pSaBnGwEswt94TPros3KzKs4bUcRppXrywKX",
  "key1": "2pjA6a3nPst1YfmrBXThuojhXqaS7AojKWwmQe8gtm8oa9XtsRGgWX247J92ALk9t1hVvSs6S3kpHLShe2kcrQNE",
  "key2": "4hX7RsixwkvFCSWLz67UjWesFkL5ubiQnQJYkFqcnWMmFwV7yRsQXSPf6K9FHYK8p1r1M8MMz57K3Fz5ejJMps9x",
  "key3": "3KwfV6vXbyfBemGsrPUpDH3VjgT2FLp5X3Vndf1futAi28rkwYpZVz2Z6yEwLMJ2Ue1Eetz4xD1FVpQjCJ6seJZ2",
  "key4": "j68C3TaXxkceSFzr9gum1N4Py1biAVVQpz3wSWTshJrQj6Up5ADfWLm3nZN7MpbhXfQP9rL1jgTFtQDABYGuTSg",
  "key5": "5HjB7ERBAShEa3WWmpWa5rTRAB8TFH4f6apt6bw2o6mDxNd9MEM2Nr2Qo6GRBLGRBgGXukiMKjjb2BmL4kYBiRAd",
  "key6": "4S7uQkCY5bVgm71ae7qtTnM7MyR6gBa3wzthoFPqui4C3exdoPaZD2RF4xBAJoquYEc1z2U5bkGL7QJPRuQLXP1Q",
  "key7": "mTB1Eryqr3WQbcFjucMs7J2BomhJtrQt3tuwaLy6XPR7DK7jzCndWQZKew73f8GpqhnXNcTJ1DJqqEvd8bqSos5",
  "key8": "5k1p7ht5pDz9anDiXzRfCTt2g52j6hfpY7cUqrMBDCMDRAUoPaM2yi76pCP5aHkWiKVQ52vRRDuhYyFsGdcWKjYr",
  "key9": "3jUeWjQ6DieA2tGiv2EVBhcnitxY7e442JEmabj5zsR22dzGfG4vFBhroMQQAQARdv8FkmATctYuhtZYfXpvvCYe",
  "key10": "4y2wTsuBVwz2e7XYUUgEJ4RY4UFvXn6axjTXFMiPpYfe1fzNAxiXK2LfBAmoWxujYUCwe6sFNMrohUnyTC8EFRPH",
  "key11": "LtQx6zQYpSuJuSWUJGsFtXxmsRQEz5hJVNiqE36Nn2zqQjAZMyhWrba9GxxAHvVUqtMvjgpYrFFkZXXLP2bDPqH",
  "key12": "3SR3JdjzLyB3oSvViLWKvFV62kDb8WZy8rbaGqC6w1koGTpsx8YToyeCUzs6o7v4HABFivccS7JMmn1DhrL3Jcxx",
  "key13": "25edjD71fWUGcpeSnD6XhoXKymyD41cyikYeA76JqAfHk5ucQmDrTSZuhFM5ejG5hgokLpWPQgAAjCqoPuMvLatP",
  "key14": "ZgeFahKEvtybos2df9rjJ1dyrxM7Km86gsPa5s3FmLXGNKsQJoGKRHjLhgFgE1jWpc8xAWf1DBpY69tXZxubom8",
  "key15": "5YugH4E6NeJBsZJPxGekfD5eWQ2AQsat9iFXPTAzZjkqadC1Bo7QpooMnEQaACgoUKmuDvUqVqPWAfFRmtEZkmxX",
  "key16": "4W5e3WheBZ4wZiE7KuRMnFDYULaJHPwjAgcEKU7B7tyjBDVaieJDSUjqYJP9GwBaCgZutsZJxdUMDSQgEfJcZ5Bh",
  "key17": "2d9yJCZSoFtovbHGsiP9e6JhFG8xTuE1iys9iVZCafU3BQGyVk2zaoaRYZ73FJPUupW5EA7tDb7vuQ4PQTgDqvEp",
  "key18": "67L8ZoWSU9CEB6aCPfzPxFA7yUny3FB7u4ektY7SpZtL5MDTsEUKZm7p9YnAFWNPcsXp5uTBXvGFtKSzto9j8W4n",
  "key19": "2BBSHgvsm8986YkqbCA78kmbjjLWbteqEVEzU3LwUigDrLVLZ7fQ3ziZzK2AHwWiHMWVHpyQH3ZJFj7dHCcShK1E",
  "key20": "2U3TdvGKJvFKzNZjzFxGZojrNieS8tijeyVjLv3xfueebS3Pb4WCRSbJCK2UHJDZAK7DZjcTQDu4583FCKw8TJjv",
  "key21": "35ATH3oTMoUPZKaV6RwSjjLv1TUGZ7brR8MeXAHCyPnzzfBYzPTHx2fEKsjoGBpaaZvNvkEkNjuehU8HgiecYvX2",
  "key22": "3DmJVJZctbmtB6Bitduh6EGfPBCUNbA1PsbNji9GKNJWVUyvCvy9EbuTxUUZ4kP2TPb1Ue4CrCDgAKmCffTaEkPC",
  "key23": "wvvuB9bo7GXAeCsXiCmHCxTZjy61jsWz6oEBqnxq9XspG51pNBYiRfd9JTCUDmhdYeyaRcGvFcL25TEAvgXCr4e",
  "key24": "4pV2Me66E4kMXv45BZnnctuLRsmWtJ2u9dMR9fSJsVwcvwm5PiuwuLLhDJ8GcA61yfgiN12JFjZHs3FzsvMxXsLP",
  "key25": "3Xt4PQ3L3ugLGUeZ4r7JYkWc43jqmCLqSxQGtscvWaRw8EkXprQoL2fZ8hdaPvjVgCDgFrPfySGLMHvifw7bi8z1",
  "key26": "3SQRacy6n2trr76hTqJfr8Bfz9HbUQGtu2pNp1JmAkPjwUkaLt9sUAsZvkrzfBfXzJXnq9bRtiiQhAr26LLjLspN",
  "key27": "1hTgRgVT7DciHCKRqhEJddaUpUzhcMbEoAQ7xRxz7h7vXZAfvesbasL5K3gEr8QV2CnKdv2epv7mCG1hH3ubF3G",
  "key28": "3J5ayWiuwgvbRJfUZXsCJqH5aKYnh1ynF1WvDjPdM1rS2gVYPobSE9jHC5yBiV6F9yiAm9cWbkTVZSiiBkBoJg9i",
  "key29": "33D829NygtidjV1tWkXGkvbH4erBqUtscQPuP9TFYzdcjMJ8o2X2BrTTDqAo65vLGqkCHf4piBQbhLcfqizCg6yL",
  "key30": "4cdE93s7rJe1UHeRKyEd26yPxPLhATnP82UKumc1xD4JTFodsrtBuQzAT5GSBV6Jd6sZwpVAGZyV8byHWA7BsGak",
  "key31": "3iuKVLmBeWpPTvRUEbhwzajhZ4ZjsxcbqbMdEjZXAT1PzWTdtcDewPrAWnG3AE2BrrPddG4A4MjuJ6KL6MNCDeaR",
  "key32": "2o3fnQhdBTU5nWhwGt5XjtcECzYdHs5vGpMaK8sD4cdhTs2eePs1QB6uBUU7nULwhXoQtxWke1My2J2wbBvYRvmu",
  "key33": "2t8FMqGoyD9z6NNVw6zRVKi2WRGADwsNAGWNgD8KQ5CEyr3tTLkvSLfg5YZMv7kYDFFcYdYB79jAUHi38WBPaBNS",
  "key34": "322MDvssz2pfCpJX6BdwEWzxtZVUSb6LB19VhAs1qZpHpfaJsd4HPiXYtzddT5SfcRLM6KBJAh2xMVochk6hy3QN",
  "key35": "3LrSSzqB5D6kvMwh2NLMjRZ4bosR1ZWNm7NcfZTQfZKLBe2vfSVLZq6Jfyjuygp43DRAiYVBoLXPKiudb9T1f2mx",
  "key36": "5tFLvKskYeAZ9P61jExVjfviRJLcQoz28seGqADSyHRwPfqSCLyMxFFMEgBtvdNva41TA3StqvE4KPuFMfXhaf46",
  "key37": "oy4LdTZ1CyXgwQ2RFt7GsF2tAy8ggbhyf8znNtxfTFMQPds4cHuf1oEDRLHxaTfsuNskpJQkfuqaQ7GQS3svxPy",
  "key38": "4rm3xfgKhDpXbntbPyynFcFyvRJ6afk7uF3yA17aBZxpWV4qdV52tZ8oj9k5YqbAFNYwL77JVS7BbXfCm7RtXQU7",
  "key39": "3gv54NyNbyzpkcaxVno5wRw92EEtV7riZEudSNdU6GVg1oaJAZ5q5SE4Vewbx7fPaJZseeizYGXVdN4WLNt6ek2C",
  "key40": "58v2ndFSLviHZ8y2eQwTmsNPtHxE1p6pakQFiNzsVsJWukMiAr2YU8XGB3TRRGSMfhaQjiwcwXRbyA4ydTSgKRkv",
  "key41": "5r9ri5QvCnF11HWDUfgyCWw8HJiBdtPDJFxYCYDLSnfPAe5CVf1SpfKQHQv7ZLfaU5smvSmBFLhq2eUX7osVEfdT"
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
