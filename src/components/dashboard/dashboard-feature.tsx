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
    "4XjTKskPpYBf2e2b6f1kBnscrwrgLJhUgb7j4PfgXEBh2RS7Qw4pNm3wdDDcGBLeRWWQMjxhmWCXrUsefoqheB44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7oyFBvaQvptUvb8iJdyBDtKtn7HKTu24bThNY7r5eaz2Jb271bCeH86PZvgotMMGkeLtCW7QY4HHi6iYK8jf8P",
  "key1": "cNVmsjhyN6HD7YT6ZAUkjRmThobkrYYd1dTKfdrD6tmqu3iGYHEq68crVwCmoX3QLiEBaUv5TmqZjv9LgHyYj3J",
  "key2": "4uioCz1CAfZzExGMKBpnRuWVYXRFjUnNr3LouuXJQBhw2rJGZ6FtVuyY3PEb4cEZfQDG74CzsQ9sTBQ3TvZye1NX",
  "key3": "2hfnbBnsU6BJdveVXh8erU9SBJVmCoCAJdLku4beGZM6shYt6YnjpmBErRXzgGcTMvjeJSr88WN47BseAT2Y5a4s",
  "key4": "56a33KwVJyq6kyUwqwF8XWbpAv6X1p5r6yuS4Lg7Rei8oZw9AysMEejdaCwKNpu6qzQ5vy1evGu7CwSMaPFhwYB2",
  "key5": "4mKRizRNuph8diayDCyraaqaDNPPqupreVawCjdzCcPW8mSEJbWgQknUabMEXSbHJrZHYmyDeMuvcA9yaTjccwtM",
  "key6": "4UVAGsCAME5MTbKYGscG7EaQmpqaDxhtisjEsLcbSpapKschohqvMEfhBoopV46abq5J9oDR6i6c9bkw5FTZGyK",
  "key7": "XSRoF1zExgqkqpSjYSwoVGssbf2P8xSr1p2rdn7wxRDfjdGmKiKjqY6Y1ZcU6EWp5RVMmjERdDDW5GpuSJWBpNf",
  "key8": "2ajAAbpazVpHR7vrDCYZcmuzjZ32eE5vfrR2MAXzoVmZKXvEqZK3GgYWtdgMdxGKeZnDmiqPrjnkAqcGBLXbdbba",
  "key9": "2eY9ou9i5ZPdM4U9H14PKYmD8HNegfL37efLgEvcWFqex4W99weVzE6tm1Ex49d8m989bv6oHjm25YbMKzAYFPDv",
  "key10": "dZsmC9j5SmveqGsmuLHdGVjGXPHV1BNopcMgL1YaNVdbKjP2ymhbL6qvFvXCkUD7QCHK2kECUTCp8ChYHNH2TjW",
  "key11": "5ruaZuuN89gsaydAbpUZV9oKpK1cD7v5TZAyb8n55mKTvm138xm39JW9ZWoVVpZT9WrmcLwGoBR1bCrzAMMBKRyf",
  "key12": "2ydqL3spw5Xwte64SBx3pZuqFRExmCLhCLuePAhomfDrEXqjn7ExjaBNpTxYZUXKsbk85eTg2cEzQKidQEUL4Xc1",
  "key13": "udCoYFNcjF47nkfq73Fn92XDusYkZ92FxysXzKXkUbUqX3yWoGoRGe5BUtGgbc6Xyohuc3msbcJntoTX2v4Tm2W",
  "key14": "23vyNQXYucpXyVPxYNUNcFLpFST7Uga4KveJioqWoJ8iDjuVHwfsRLphrW2cjrmyAQRfrwHnG6YaNJ8kZHcR2CLh",
  "key15": "3ERwWqgwa23pMXVmq3BDfDjeFYXBw2J564hFt3cdsCgno6GyHbik7JsoUbZuSsJv3QuMpsRwCJpmjUxeDkYV2DnL",
  "key16": "5tpmL8B2JSwgXv1k3jakPKjiHeNveDqSQEvVh3HpPHfG3GxDDKNRKwFiP2juBModX9wVnhR8zzgAYpCXRY7VW9AL",
  "key17": "33K9kk7tDwkudX7tCCcwF7xPQfoNmgS3vLBqWU79cSJaRevLiQsNRDn8oHBfVxe2XB8tLjqRdx4XKRzv5MA5vRvE",
  "key18": "5qffaJwgfp8HBDbEKbLqe86VS5kDo45wTJhb3XwBxUYkJCQtci1FijLMfghHJvgyKS2VuW2Uqi3ef5YVGwZmA4Mr",
  "key19": "BFt67PNf2p4ZLDYhCpP6k6Ss9Q3bMJtr1zi4iboXr3RXmDYZjWC5aYKZyzrQmGZFWEYz2trsvBJq4u5swaNP53B",
  "key20": "5gFXhkA2pyGcCFqsAFxrHtVCMJ1k1hSUQagthZcXku5AKp5UeremNK78wCMVQrZ64PkKU4fhbhzkJGEekG74q5sV",
  "key21": "2Ewu3K6yRJW4cwRYL36Yc9TFb14FbCa1WqHSzryZaYXJ3vjYoaAoAWYKEiA7XUZ4jVuuF7U9ZHTQyKEw2NhtQ9iZ",
  "key22": "2STpG6XgvLmzBUgUSLZsBCbPcY2r5wMc6Ahi8hrLWiZLjesf9K37Q46wUcaaZdyytkBH2vyAUjoLgQ2y8eyfikws",
  "key23": "57HsfZLTS3FFrrnf6NyQTAnymeMsmATifjcVGbBB14ei3esigtAsHif5LRuZSzRk11yCAGZjenXK9ruWRsda9bED",
  "key24": "3LmmkszZZaZW43UF2zY1vLJxwgUE9rAutzUWSihEianZR5L9qN1DCTuaVfAt83uZiYCZ1FjfoBvkp35WcUuUTMSn",
  "key25": "3L5AvPFNAwoB4VGQc5YsF9UKdKMXH378qQ2bSN7pHSEGZ5Mk7Poqdbwqnoc1t44STPNgokFH9Gk3jB1BiGovdY8D",
  "key26": "5TAFVwhCXMaWL9WUuqioJHz1AZ9YtpfDknQUWB7GLNmzqGQK1K7H4mGFcaBbqrECSr37ye34N7h9UfkQX72kfuRK",
  "key27": "4vn5Wa7bosouwFxRkcPqnKJZWJCF62cRz3oT2QQNiFaXR4zQjNiJko6bJrhRTGeA3Cd34aWbt29Acq2kdiy4BaNa",
  "key28": "2z6mxwi2BTmsq47NwQJ4ZbmMRRqt62Vm8SUFbn6pCh1GrNPN1UGE4b1sWja52LxFaPUDe5BYWrSXpbx8hjP4Vim4",
  "key29": "3yHiD2QYHeohosnuNXysUW489wSrozq6MwWvNSxHvSTgaCAooRNMm4kn49RBx5j231cxcNFVQhTzeZdbVbq2eyC",
  "key30": "3Zb594jDDsUmxbY4dwcJzkPUV9F7cioDZ31DyPQTp7QEAFYubaMBzBdbnMceYKTJpv5Cu1QfcDL97rkQfKMuwjiw",
  "key31": "6VG8fJtaTioogWrJWa8gANgLkPXRsc5Kmb7NyeePPEj5oeHdYqFVoJ8etG9hwyCEfvWhbhdPmDbbugj7b4YPiuJ",
  "key32": "2q6nquHkTyQ72eQRoYbzq2HWZLzam6Fc3UpLhRidocDysMyzLw149jv157wMfkMrCxx6wPxbuvU3xqK5KzGZdR1N",
  "key33": "5Z3Hjq5zMZa2iUdtfuQcit4zNTbmxrUs7pj9xjAQiQisvdtgeLjjQpvRKT4QtxJNYsXnZu4cCgb8mMCvRAmHJnd2",
  "key34": "3craKwrAM8MYFbsHokSWyGkop7KDSUQ258PTHEfaAahS1TdezgKsGroHTsfX2W9oPvKXSQ3eySDY79VSqesLZg34",
  "key35": "5GqKha2hoRxJPA6iKHQAodzvrQrQiaSHK4u36hLDdZytJsSivHNThbewtRgC5SPwvdX8bBVsZzLC9eqbnYSJiEh5",
  "key36": "4t26n31kdez2zi9P9NoPWjh9VCxNPiep29NZRwApwBCX1UENQtuCkC4DCmAi4cZQ64LcAPs7T15eNbDHKLD4uRJ9",
  "key37": "27ESoqAtduew3MdfVGkVxmDFfrfd8YCUue79G653uL2C7CpwkA1J47tWU1mYMTQ46chrAm4nnoTEB9cnoqjcNBLm",
  "key38": "5QqcgUPFiiSvdM9yNDXWBXnjxDnn6MVnUcPJSewWj279qazmCVwj46wBWEdnFmdeT6JNnTPcb4xax7X2epAeQTKw",
  "key39": "3yGqsF4jvd5CRm33vKgc718RQvLEtkkEgRjL3yJUnGKpN13HZnwV8yCjpbaNsj9NoJ7Gjy5z2dTRrgcVqqqUjki9",
  "key40": "2ReZ4UfPQtD8JgGWvM4xUkHe9hd8eDXWgaB5dQeVrtKFDiKB7tGHv2nayqgBStp7s6gewejtGaTtTBa1fLGFjF5Y",
  "key41": "ec5f4JfkZ5baKUGRMLre6BaSRTYe8n9iHctk2Ys3Lb86E4HT7qhyiDZuZAZkBagg8DyGHmB5W3Ae9rDnuhyvMNH",
  "key42": "3swcnYwMv8ucteMEWppcxe4oJPFufpNNeErVsvqc2qxJ3WPatSx4MBWe9wnBd7SqDiy9eJ83r7PgcnTgUVxHjyfC",
  "key43": "i5G8TfPpifqKD1JqtAMuo8J1JndMewhWG1mud31A5RRdW92temCnXXxTZGet2D9uqtboRLA51hzchmnZqJszCuB",
  "key44": "5vKYn8Dusu1K5mPZ87PMoUixR1ZM9erXs9B37nah6gKpeP3LfFd7pX5y8B9GSLgZQcH3dLcNXz81q5sVqfDUDKYM",
  "key45": "uAamcddPkfpgJsD8RHuBNhQHuefAqgEUUNHQzGzEsbKKQkBrRwNkHTBvquLPARVQhk2WHDJ7kWpDzwSVvRC3ZNe",
  "key46": "61cRAasRTDuypztejhZCHJ1RFfsBGRqoD7PkYLc6NEv1Ffku7t3dySM3GAB9pn1aakrv4PKcDXeNMUpJsSmi3NFA",
  "key47": "4LcpN3mNiXVmUbHVeebgzcL8XsjcjJ5ew65GcGoe27qgeperiyp4g7oanRXZBVMp5AGz53gy58hvoR9kSJxzhoh5",
  "key48": "46Myhp88YMjSrxQjP51U9KmxEExkB6oGVYiReiWYc2rPMuGo3JGzWgfVp5z7Ft5C43ti5ryPiD1ika8g6F74K72n",
  "key49": "2LP5napauBszuv2hpS5E8AFjo3NpoEH7v1rKrQqZhmBaPtC92WuEHUHzntb4v34ax4gWhWZEfmcwM2kCzee1NEie"
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
