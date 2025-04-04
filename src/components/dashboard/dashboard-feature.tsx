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
    "5titJbEb6MuPur6BZ4WuXNexQPoRDfB3j8rfcoaVWPFRUT2eP8igGrc5TGwgxjKjKLYXi1EuBX3S91UDRuRpMn68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ekfLhVwi422sbAjXPmrQ5VE8J1FcyyYxxFotVHr5V1Zzaytxk7iBg2p8L3r1YqFmHpdzA6UAe7WLHSUjqnLr8jQ",
  "key1": "2FbmF18jMK8No42ptiqSUzkZQaqAtPG8PmG8WibdLoLcpJpJEmHHRnJghvrUTJYfeJNdQLcmZNovyY54TKCvxRpi",
  "key2": "4gbfrtScixqGAYpEvWyvnqDp2obZVszpYgfPQxXMqzvZvbTYU78ScjCcau3aD7NFrKzCfCzzqG2viJ4zf3NzRAQV",
  "key3": "Ebk7SY6cT7sQFCKmfbAZ9CRNt7AMjcEmmfqWrv47EpQQsh7b1YnhbFe2Q5C8DCQBfA3jtPciUyfgxRo3Ht4QpSY",
  "key4": "28QWGnUNBUK7Gevu991YfoHNQ7u978GjUE71Yh3X8T435aMWRywJdHb2eLKwauX1NUQQexoqpJvuif979JzUg89f",
  "key5": "5kTkQw948zst5k1m2FgvjRXyqimJqePr989fp2wepAv2yKmd282p7ZZphbBKpNrbDqKE1dFFcHuxxUt957fHKUCX",
  "key6": "3dh9NCAZg5aNtAw221ypL5XA3ySbLzo4vo2qKwdegsaZBSahCT8EcrvqgqAiuCq1kH35NuxhnsyDYDyGr8diwqWN",
  "key7": "5mrbWLUwj1F7SqJMqssUyXRYvrzLpBYX4EtKAFHjZxGw8hExhTz1qqhaJguS48VCb9q2Qzs95mqeffGBn1pzTgjT",
  "key8": "5iGJ4JuMFTbCtKDW2GHKveCpKmAVBGLs55xm3JGPHAdYQxUaLEEHVbP6tLUup5Lf4Pt5arY1ddhWGAFM6kPUxdnx",
  "key9": "vXeVxLbCyJwFmZ6nZUcdFijPdHfaAnzi9MGAkxSW6qcyDj89fs7VJk6uxyzicY39iqo4sX8hYTPMBWPGMR4Vbna",
  "key10": "GSTEDEHHA3tjs7V3gBkGh7CWRbwam3arLTweAr41qPLmWHdkAYNwZfH1ZgBmzAYUYdLZ3qmWpzvY6o35y3kmLpk",
  "key11": "xgr5UKNwXpwtdTLUTdAqUkXsQAB4xeDSwgYvXtGHSB9VjsmbEkDZBnwsFiWcse2db2nd1ahGY59hDf7GACNR1pY",
  "key12": "59T5Xeu5a6po9gE27buMci9aP4M4jeRh5Bk4HSmgRK6Thi794LsmKU9NW3A3uS9yyQbxdGdqHKHLJLBDTKNpzbkh",
  "key13": "5AFoezWPQnXiXDXApoR5vbZ6WRYsGGi14K5zfqb2gb6fRN1TTNuSHw9mFqvwz24HrVtAfNt8kxN35xCzMPzHQqFc",
  "key14": "57YZMkY6mXSdmj9nHzAH1ki8KuXxE7B1EU2VJKuDQPt8tZYFx6t99Ea82bKwALyXnUfK34p1wyx6a1RpzuTUVFho",
  "key15": "5CfPMgRSPcCZLKPwGYcYtLRkAcRDeccginqMgHj5uXjMbHgAqM1tNKbES2jGRwFwi6TvUbdFK7616S64hMwXa75K",
  "key16": "QPu61qStPYBguyaM3Dbg3HX5xH2NWqFvMoEFxQ3AdKwUxJEEvYGwSgapuAd35bDZPKSiGXMaCk1ABvNQVLsfUhD",
  "key17": "3x1uipQcKhpSzoHW6AfQnA6MgzSczufQJ3cad5Q7mPju7YBnwNaYM8RTR5M9puJRNrFzqLjBfYRXHadHSNTsLdDD",
  "key18": "2XvuzD2QzSWWkmE8fMfWEJcubqo7iCXQEN1bBWu3EMUVdfLVKRo24anahrZrNBMqRt551yQPhMf7WKMWdxL5zqb8",
  "key19": "28Bmtu5nF9JjJpm6KipP3HNcUy6khVwrMHbUAb7XiW5D66qNPMLhVjMHCZq3SQHnHoFdF1xCTxVEnsiaDCNWdPyb",
  "key20": "3mby1fP2CfNXXJLY7Z8vGKL6JKyedLj5xDmRftkhyQAU7xQJCjzPY4MVWu99Sb7TMHVUMnAZVwWt7puLrP2zJSmD",
  "key21": "5yMsBRQygTxvH7sZ91BsomtaseVW3e3VADAD2kz3EVajjBXjKL6EUazTG6yNmM2YqTxBKDvZ524S4Wq88LnzLpu1",
  "key22": "5N221PQeTKyG9gfv1GtE1pod3ScXsfTtGF8pX7MtvDTq1FzhcXAVeoEYMnBFAvKNagjG2JEDvxuVJNUTyYMim7UU",
  "key23": "pChincYGccoDum1utEfienUmcudHKskCvKdRmRTc4GebK2PagZWJReUoQjBMMYHE4j5vfZK9ZA1oCsJMuvtW5rv",
  "key24": "4igz2YPU9SFM2v8n1sMF6kedFfChwwq2WjwgP6gVJcrBN5ghEGVXMQ5gFn7T4ppLxT9FWHCKNRNhGXHuBtPTx1Y9",
  "key25": "S4qov6efd2JmH4u654a8RuPDykrUkmKoUkBCSWJz4AD7vjFtePwXuWW2gERgAioLbmbopESLm63VuRttvs8uxXm",
  "key26": "5wSMg6s45nDQiYAmTnEHq7nQk9X97EVDfhTujcbXoDGFTqM1ZfDQNTQ3ETxp6ZEh7rGncYJw4hftCfvdUeMz74Fn",
  "key27": "2aw5tFN35nKAWD5h8vBUP9M8ZA2VU7D1YoCX2ATSzUhpugatxjQjYsAdhfrs7kWXuFwciiUAxCXAMbaZ9PF7ah6g",
  "key28": "2GF7czYd9JkqXEKhxsXZSmMLmVXwrkUBhShBQWEWjv7Gtr2ez2pRjCrAGTa7zmxmBvthEZFGB43nRvCmgGnDTh1Z",
  "key29": "4MQLgv1LnXPW5H1AVwMkJmAmtoXCAEiQCadc2Sy52epprJGY3P2o5esPtgzuakZRknJhk8PdvdPjaLrb331WhiSB",
  "key30": "2Jw2KZc8XZJWusJcHxaZvHBU9D1YJsZMfhRsmGg6CHZPwjCpwMmTQHY6bWkSuaovULTG63fou7wq57KoAubWeSP1",
  "key31": "4oWtRtiQ2uEAwViTmViwjboV4Bk9Ut719Rrs5Ue649ForJn76B4gF5CTsSA9HDZHVQvcSE7iuk6DNkQ4rMJJL46i",
  "key32": "4rb99ozJjBwhY6RLQMDcHVtf8ved5dSHqFRxDARd3esDUGiXVD4ByXvMEUECNdLvfZCafLcpJBn3JqCa5DqDyFzv",
  "key33": "5e7KjRqDjzBVw6vmJLnfZafBNn1GwoV22fXnw9yVkaoDJDmdYBFN6a6p9tmYsmY2a7jxjpcENJEUynSxEkmk65zB",
  "key34": "4y8Sb9y4zhf3VXYSGDnp21maWnT4QEdeMuLRRYTY93snDReBaYEzHQFkWc1QB58hsrgXPBt3ZqK21r8FJYSgpQLy",
  "key35": "3mdjecHXC1C1CbtW1a9LxuewUJ1hGMSgM6N6VF82RNCz1XWiZVEd5w6wS1qASGMWsVAQpEPnNxohx4pLJ474Qcnm",
  "key36": "52xQ8pqfUC3MJz2aoADPaL2PuDD7xk8uC2RtNvPQB4FUwpK9rdK55sdD8mMPFwJwcg6kt3peUafS178zLt7uQGtQ",
  "key37": "3X1WnCqqbX7xd63T7WYvG2q59RvoEDBYXgs94HJjc15jbRUkATk7dqgysKyppX717qEfj6NbwXRrKJvuZfhPrWGy",
  "key38": "3gp8We5YYvouoBjczBirnMyzGixtq2yoqtV7b9pAJGAyhx8GwpkdbqMCicgdmy1ww9dbFXys6QcMxTev3T847K4C",
  "key39": "5ZPdP9w3queMpVeteSCcguZ1u6piKL9YB3u2Jprg2CsdQK8xPk57TBAAKXiu6yiFHXiJFTFHDgtpn8UP5Faj3HGb",
  "key40": "5uruhtE4puT62JUV3E4TUihMrip5fasmMxp9gEpffKcuFCGKq3VxdLGdY2QcFwb9m5ULN4A2KGKNFkANNNqLGwAK",
  "key41": "2VXK1CJokHHSxLXLpTUQtdMSnPt2wo3AsXJ2cRgpGfwrEyKZ1KrZhXi7j4uoKLGuT3om9UfSNeKTrMDFhDZ91nB2",
  "key42": "2JERs5uenAgkMLtSnUXfnXJe5KPsV1SQB2mkD1KQPrBeEZ22FMgADo4vhW3u8SLtwdNLeYnaWj1iMsfUFwzwiYyw",
  "key43": "Hv7tDjqqFtRrDJYRzf8tBwdthC2v8vqi4jzfoo28KnSfuzuDexxEtY8u1vPy8J8Tsz6wekaT355piFvAkuo13HV",
  "key44": "54vGUfaTxMq1ULV8gkCJm9pyzkSTLfNh5wmZnxAYmqCm9rkkMP1Pe7VxWQvzoTijwSdiQ3yexvNXYxEdtqJx3dd8"
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
