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
    "65AQVpqf62pJLXSsZebouWYR8vk6Rxn2dYHzcfByMEQCRF5z6KZnWPNHyp3Fx3tSXpQT1gLcRvSRkFbbmBwLouZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bj55NJVvkLxMP9i84kqV3hwRgce8pd11yDGhJfgJN2ZVWamsbEetd6xBneTD26UH4ahxXBSvizqoFABXXto4kND",
  "key1": "x7HAFqG7DnVKfdz9pnkrzofUGkEpeyH6BXoeaPaWbASfvVkByVQdbmZRzQnH3bowvgJ7N7qbNProgiG5pbAU5wQ",
  "key2": "5bVGyXSDtqHVcF7msx1QQH9pxwP78i5gcNhHCrD5Gc1CPTCpKR2VP9rwwCdg9RsJQs4fKUdBPrTWuSC1BmK1HPSU",
  "key3": "es2rJw8t3SSjjKLDLpfaiUZ8upuh3GGEQ323uChj5iUZV5RCJhrqUrGzgr2BEQ91gTg1dgT9v1rPFcsM5zPtuse",
  "key4": "2WFuqLhMxiracfKv26tRuH9Jr2AHzv57KUvARwP9noeo18cC32Fsux3GXJBGPpBGyeP415rAbtQonJF447z2v5E1",
  "key5": "5PYTEvBLnqSJEmcqzNQnvpmJ9QjMjKo1Nw56ya9WujPHcZAPjFuzzLrgLP7Wop7n4MQmoHzCTcG7Y2pVFqPkJUND",
  "key6": "2A1cAQbmNp4nskuBopj53vkekMLwCWgCYLJXhDH8cxTHYdHk1f6cxXmzUxZwELjWhGgFjJLyWo9iu3xac6hhYHCh",
  "key7": "2FDFBXAQsqGujp4HrLGQ6V5JcU5K93TwMQxLY8dFvekx6kVmBSuNZVyazyeHzcK5gC6To1fDtBhhr8zaLTuPf5oC",
  "key8": "53RLRGrfHVVYJJEbxADD1mkxzcNwXufDnfafQ2Pzhg9rJLcXFoAk7MV1h5QxG4Gp3G7df16iAwPyLT7tXfhdewsL",
  "key9": "3BF7kq3C8mvFCgUatS5Y9G6HckBMAjKbm493jBESBV2Qzo9ac7oWpN61yfrNjX5ypy9Cfb7u1tZmvjLfcW7VviB6",
  "key10": "2rwxYBpxCFda6XuLQgW5JCFNTvkhkFbTuxzNQQxfgb4zq8oirhW4vtUq6BRMLJ3EyUBEDjpN4KZ2jAozSA34oPV3",
  "key11": "4sj2uccf23D1yoEUmVF2VWiiwCvYMiVPWaNskt76Sr23hCwzjo9vRuUov8rCejPTEKQZMKDAyWz8a2dZAtS5sEmR",
  "key12": "25HgwzVG5tzmCBQHioztaebzYMGq4xXGf4UtmpNHjj3ieWorHJGZ6dUMLNX43pKeC88ktPQHffsUiX2LmtPFTSMJ",
  "key13": "3pPMQ3brK1biKmNkGBQEggDLDxrNB1C24sVdL9RBXpYcMeYfTM9Lt9mkqVrNwhV3Eb2Vn5uxq1ehGi4NdQtEHi1A",
  "key14": "5kXFNXLiYFCLXQjAAP683s39nKPvBVFzja8ftVUHVftAjfcXrX1qQKGEMKsk6YWfi71tZ3WYSH5vVgQHR9r2PMp5",
  "key15": "5H9bK62dT3DoAgwAybQiQZcR56epMvgAgnzbXecye8fmAsK8PQHZN2dDRnq2J4tzdiLzTfWMNyXym6TmZkmHpFBo",
  "key16": "3AUxkcwyBTHzmoZFjkK3vV1UQvoVpL7gH6Rv46Ye1SnW19pUTZgvBn4vqeorJPuwBzL24q7f7NB9nX1iKbjLk8EX",
  "key17": "K59ygAjguDCxoqzyt5cWQYVSd2FmsEfKvDiCbqZjk9n3SGhNHBokAZCgVXctVXz8VYHTEiRJ8rj8q6prjfFdKL4",
  "key18": "4Rhf4HHEfuhRHYvCrMB29VznvEsANHmLqF5X63ZqTwtKNVoVyf5z5w19GNCdDZ4WiC4aVVTHhAV7r232sRZYDtfi",
  "key19": "2j69YaoqmVW5TGqLnr5db7LGDzXRoYUbAiCQDLWMKEHZZsdfGnQ5XWjy9hQsLy56PyMGgHZzgS8JxAknbL5RiT7d",
  "key20": "3MQymw4vZkYEWNPLv7sqz7oriX5sP85t7DnZAcW1kH9FRpuSgiDrF7WD4NgL49m6zAzPDCAfQ63jMyheSMYzPfLG",
  "key21": "4CoMQtJw4698BTAz6z8k9n29UG58MobF3eBqxqywzZYL5XZ4ZeCWLn6QrJwCVs5pTBznsmUQZoC9JQt56w781i1C",
  "key22": "41XmvuME4f8vaedrMEysyF8pJDSSTC16f2FbM9qD995TGqRa7zKbTgBfd9hrxLZeYh8f6WuL3ygoHJty6FrpVoo2",
  "key23": "5sTrJbQVvJRVee3cGQV1DRq4eP3JJmz9WaXyx5GvsAkWcjMujjcrhT9ApVRoCi5dckUkfLGoMQ7j4Rm8ZHCFNvAD",
  "key24": "3Ee4drb7gzTh6KpdJM4ThSv5ZeUy8bKLXUfsWShJVtrnVzgEarmQciHkiErQgrvCxbdhRsqzvaMaAoanzipFgQ2J",
  "key25": "4BxkRwjRGFCUQRiZtVnDqDZ4HjPECo9SRJFCgVbuHxpUb5XXjWRENMF79SqeijCm1Rx9MYEXJi8qVV9tuAFgBDiT",
  "key26": "rBVNKzaJFEYpyaDK83Z6DL4ACF1ize8VngMVwbELdBQoF54MZ4M98fVXmQjWJajgiYr57inMA3xucYGWLSriZvu",
  "key27": "3LQFeKfyr7gibtsErK7u3qsuF6hgCBZLbhpXNxAvyCSVmj1da9ZQSUZeZDAjqJnH2PhHijVdTqpzPDaaHuY3AL18",
  "key28": "2tXEyMEsGFWfCYghmqsdxz9keZqrnePogTafp8tcxPn2ce6AzcVPtTMXSdHeRCEdfB9LqTUb6u8PsCp8wKfPWnjq",
  "key29": "2msUKjfTd3DVM7V9WbddZqNHsiVTUptDic4vLzJdJNM32xScUCr5VExYtKQyk8XTMmkn2ygZ7AdTG8b8xtdF6ZA5",
  "key30": "48AB76JHwaJVUyp5L18XRKCZUoH5TbvuvAcrU1DgqauAXkSp9szoVVTn2r1SJ2a491eUhrFhLT2cJRrUDmCffncZ",
  "key31": "3uyVmp3ufGV6CebMmEKyZxNgx9eWyWtrom2pCbFpYD5vVW8vmuvPgSN7whLAwoBE6m6Je9Q3u2FFat5GgZZLSRAW",
  "key32": "2qaRnA88TitHvaF4FacnhDz45KCKnMCqGvVZv6DgjzBnG1nq7ZMeZ1A4Jqm7RfxNovWU23spRezL3aYKMo9m9BeZ",
  "key33": "64Uo6xSCNdRrfRbWFxUmDy81F3i4ZdELT798qE674w1uMNfwEShRJ4V4SX8d4npC7W2q1dH5JJvLA9UfGNZ3aug2",
  "key34": "BMq3kTLCv3VjNtGaMuvCsRmsmeWQoHUSGMEEfE3NNAoTesAhDnPwL6fGFa9nByT9DdY4uhHxXBVe6687bJb1hYu",
  "key35": "2KvCvYZZsr3Q1fFgobbSjAQZFmq7MNWbo54o1NYiX4MLB7cT9354WgbURX4etmti1dTaAX1761t3kgfPyM9iXf3m",
  "key36": "2zwG918hSXW7oXebLZ1R5LATgJWGrF4V1DekbbAGUAcpJzFp7L6pEF776eqQsqiDFJQVdfHgwrvANftD78qY345z",
  "key37": "3bYDD5NGhsaHCiB9Q7H5FX3p7c4B7RMAv99cdkfUp7ve4gFrYzBfnrk8WFoWBVmbNEScnJcYAi5HJzxhyumz2BAH",
  "key38": "5U4PevDNUi2rtwGSggYupVHjwcRJ1uWfCDTj4caYB6hmmxVo3frLhSE3SwPEVRZ5gAT5g5m8cQoRhDB27M1eSnPy",
  "key39": "67SrgQmHrC9mRVWqUS6DVTD9C5MdqubjF5UmoGnTQNr8rUycryCeQaUNRXdUeBiGpu6NqATW5MnmcwJEfxJUEbtL",
  "key40": "5RYnk2qiNosp4oyowq7ppc4rdoCYRckPkCUgt3eQht5Wn6mKeV9sJiTcS789bBgiHfY5d7f5eHMyhzs1Jy24N81w",
  "key41": "EuBQyMioYmeAUzqSAwEzJUav5T4Gbbds25dKzuJC7y7Xm4SZcmjmwPS1eTum8XTR4ZMEJqeeinxzhMwV75Lqukp",
  "key42": "AM9qhtcmFjCY4QdM6P39PBFLJHnWg5UKmNEFKYPHEm58cx8DF8kJDfKrdoh5Er4Y9E6AFJpVk16jMRkWmZ11gX3",
  "key43": "2q8fTqvKqPmPJnFyMg7VDWUcvy5gemNVCemFGku2BjgJP6xgBRkiWXTNQCLUvdUDDQcFs4bmT5xKRjSZCtuAXtL8",
  "key44": "2tp5n62Cn7ZGcx2eFLbuUBPCuDjreryWNVwKZ9LgyrtX9Uc6V4njCCrBXSnVHrm2R2WsUGErnisNczA81rR8c9uS",
  "key45": "3hzRbyCPPiKHECtDKS3Z8PBQVXXP2G97tp9BehrhcN3q6yz9meSg3ZXekzwM5mA2pYmudMJ2oHCa1BV7fRcMeCcE",
  "key46": "525q4q89M8Xtw6sTAfv38tkCV4LcB4ZVpxa4W6SyETsyGcLu7YxcXjNzDAtrby746v44BNrJNXqJ12yBdjGXL2m4",
  "key47": "4tz38aTANRmLJz6BhinsAJcTVcJ3PkMWKiY81LxNVXouoCTmg2LgiudXhKnWxzogXjoG9FdL5bwSSVEHn36mfNnn"
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
