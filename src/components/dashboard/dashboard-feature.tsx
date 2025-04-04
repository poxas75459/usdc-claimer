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
    "5T7oQwrfWCkdbt5x3MLSTvXZLyfCTXv3z43uihhXbEHnAEzCSpwbiTKxXtLdsLbwrHBUNJyKZwfvzARTr3g3G7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZHgGVvFavnVXfvACn7TpaZdU48zvEYpPiK5766x3x4Uug947jEdN6fd9TKiVJFeroz3y9vJxJ3K1bMwZ54hBoW",
  "key1": "3HD6hxEVhY9VBb4RWD2JGrtjKAN2kLkey9GzDRMm3kye1RB1MuuhAdPhftSPYjiu46THKo5nH2w4UG9mFMtp5nWB",
  "key2": "2376qGkq94xiKtdbjYT2AUoW8nbDgkVdHet5FMRrJKC4FYnVLHfYWmf35nzsC4wGekDyJAcesX8ZtFNX3vUvRfpr",
  "key3": "22A9m6F6usnHpznV9SUjhQp4D64QVmfPiogWojhZwKNHTyvyRevRd6nn7eR8EVhPBmYZTRm1d4ocVev6RYG4mMh6",
  "key4": "2hHDGx4Y3SfURZcEiHL5zn79rwwPM45MYuVDvY37BTkfrGEieYP59BTMeEpEHNGK4Jw6d2hGiDu1ycW8Ehijwxfi",
  "key5": "63ZQzfkVCqr3ZJqnYAHiKBcdTjabNT31G3LShhsszkQHBgPztHPXPSmvDjPTJdnP8ZeEKH7sVHKeuFvYCYkNZLSD",
  "key6": "2KkKfxs9qZGipG4MTern5GY5ZR3hn2w9UZKs3HNAQtvTgLKr8S6QPJMSxhw8yYVPS8qZ12qCXMhHGAhnJPWyUydM",
  "key7": "tUDRWj1rEvAfbgwnHxnRdVwpYr82sMhhpS42HWRbNWxTaGfgZzNdNSLzhBPF7kbh8gJy9qvu7ZvhmNH9DYLqNCW",
  "key8": "uy82S1pLYiSS5x2CJRcv4HZUksKvekpamsVyC8tt3fduF51vLugNntdM533TzLcNFHQXfRYcdi2XwWrGd24AtPq",
  "key9": "2evbJfrykQMLqEVYfSM5YN1dxLQgj6iM5VejmrAvNL6bCuQBsxQt4JBBheJzhDwW5FjY5Rx2aPjU3YN3g9k8zNhU",
  "key10": "3dLTNWRzagxS1xucK1dowz7isYW1L3PRepKfPfNybSupEaTbsMajM96fb2gNpcCUXtKLbM8g2B1yei65XT6ttQu9",
  "key11": "4xe8DHKuJXGBzuommtBuTKnQ46LkgqBJiAtW1y23L2GPiC2u1Fg7NSxB9W5STyHLop75SSNFxJkG8gdoKWJWQReF",
  "key12": "2RBdbK5nqjroVhzM2oY95SJXTqKzvAfTHoEbpp6QQVQUxeqcoXAX33w5Xxx9iFKxJFgeRTgrnTuH4FGfyomfTN3w",
  "key13": "4jbE1CoM4oXZiP12Mr4zFU8845qywwEeyZtmmJPPQ8ESZ4rsWAz8mhVdfKrpm7AVUseEADrHzas1epAUXPJMZ1sc",
  "key14": "D1j1utfiS3T1WrYUULwnVNkB79aNgtLQ4mZsxG2tBVrBqddxGmsWbXNteK2PYMNZF7vPk1ocBWqbWjpiY8Dz6Bd",
  "key15": "66NjiqbXhSPuqQ22NChb4wMZKGUvKrnh32v7KaazGuav4u22rGc3osf9nvB8TAFNvjBFAez3maGuFmQZaAJEY75z",
  "key16": "Z3HbwxmmmiCk38M8aZDwtAHSdFfTktgyoh95ovjrkmFoisyhS4Lnxzrz2hwEMNkQ68ddY4bx4nhjGnwjh1k8Yrw",
  "key17": "3heCgTFXRH9CwJQUj95NteHBSJSY6fXReXZPrso1sFDbYF8bEDGsM5nEZgyN54AcwgBD7fZB4ppWpycnCTdTJpb4",
  "key18": "4Ys1jXiomKnAHq1ywpvYXfsQWy9atdarSyQnuQYZVxjQqqaeqCjPyEtML5oJ2ETW3rm8SWFqW4GJGNCPJfTriFNm",
  "key19": "2Vy9gpQJUXJmxfocsUycXSS7fWRhVat2zLzwAZRLvPPY9Ccx3zw6G8oHNxsk8agTHv83X5wrQER6wiE5411CCznW",
  "key20": "21PA8yGkZMRRQ2quYP2sSRubWL7LWpm8SMwEMLR5jJ6SGt5nsZA8rHPWH4TyHAU6EUNdnUCwZ4tyHakvT1ubAjGj",
  "key21": "3eCBKw9LFQT98Co4DT9m49C6xL53XdHYec22EDf4uiCy9z5wrZ8cmnn85uSB6pKFXntosSDwGdjVMXg9NhqqGWv",
  "key22": "4d12ThHfGqyjWLfJroUd6fDhsyGAkjTTYpkysL9XqJ13RR6jtCJNgHB2uCWYtoqwymMQXfdZhf9T6x7gLPkHiH9i",
  "key23": "2kJe6MLtN47A9PdsUQyEGAhBzHKsmTMZUMf3wH6uADJkB8CCFKzEdTFYCexguuASyR8G7nt51xsAUxHJSQYVtq3U",
  "key24": "GxJTop9ugatUR1yYcgbrQFQ6tSxA3uEN9su7jC3LfdTYU9YCmqYkhTzAA2gQq7WDgFu5pqbqRfzByNCXsWnMMWh",
  "key25": "4wrLanZ2o43nUWPLqRArsHg5NR8xbpzPMs1PtNH4RmXDyD63s3Buno7XZ6R14JP9aYaCnVvJPgKU7roerUDZzMXp",
  "key26": "5Vqy4bHCikJFbMPE7r9qsBFRbCHXAiV8oxBCeUV5mohD9xokpS2kJbNMdJ9kDGHTQ17Ebg9FMhE8TuuvuRZyx8vS",
  "key27": "54LKRH1XoKkFdc6yn8yC9pDL3X6pk2qd3FkjFcSHWMuPsjbho9o5hJXvwUziumEndmjg1tsDqPUhvP5Fxs8SUJhc",
  "key28": "22xakNrVLNMHyDG9Xkk7pJ9AovLmkdrh1pcke8sQSZeS18MWs3GvGYXr9YHVfrMUKiwEec9cDnkDQntRLTvBAuBb",
  "key29": "252eHyVmzZNfdJDqG87Ggfv9s2gv8TgULoonpMb71DAi8GXFMY7eG3qmdrdfN3s6Yq4Z1jxLjHWK5JbAjEBbbyBQ",
  "key30": "8K9cXZoRBALJu9miCCzpxub5qLpVe2MiPYbeX19raQRfuR1k8K8NEsAS4u9FGFDG9jLuiYi8uWZJvU836DsrmmT",
  "key31": "3YmQJCUBtboLY9fmwSYaGAxrWMmBNCTG4kBJ8Wdu6yLZctPD97DqxyJSbz8xTXhAvtMBS7cmdMq6tS8PbSJxYR81",
  "key32": "RuPke2fpUSeVmDoWBT6495kbVoZbL5XtNGLjPvaWQfRUQhQTPHy36nbAniMiFwAbiFth5fsGdfzxEdQFoJd9nvX",
  "key33": "H8naT6ZHJKZLZbobxisJ5iZTYr8cer7Feyd9LeJWJ5LvQNMUKzCu6fkuPAxW8y6j8acFnrcyW54Nggf6Ao4fKen",
  "key34": "5o65oNxBPHa87sa5M22wcJVyGrxnMRkTSAQCL7wme9GoDe8si7GXbu8ZuJqMXpRgQvqhpsyDLPULDqP7bARExMcj",
  "key35": "5S7YWEwqJDMzYio2uVmKDQ67AgtheG6PzjDhzAYi1WN48byBCogeuHC3oNyxhnKk54F8qPnM4xVtjpLreWogkJzc",
  "key36": "5hmuogoPjVA5B8Hp595UBtB7givmwYmJ5dbzJhGDCACW8ov4ezgQ8vwRzQDMNBs9xgtbMgUewWTGZLGFV1Qn6ExD",
  "key37": "5pZiuimyabNvwmVWbtNgYm6epsKnoF5LreVsvz22ZPrxebWKP3uYVG8pCaXXMxL2adzvFC9WwnARBh4bSuGovVdA",
  "key38": "2MsKxVJvBgLhyXtaXzBcJfsjDkPGXzsqCGRTajwKLduK23vz1aJ6Ea8XX7AquUDxkojj9TnG3KTq3G7jJENCq5ES",
  "key39": "31C1JhJhwAvmvrRkRBq1D6r6K11UCwb6FfUN3QFoqZpuhfLqSjM9XSRxfkTebNCBF1kfXNrhZHKUkmxBdUDpugtc",
  "key40": "57xpZuQsaerWThw4ZptEWUCdf6dPc2TDFov2bjXgSLnii3YroJSGffoXb9YUvMi9fnxHJhst4UPFPWmqYvaDXErn",
  "key41": "yTM6AhgyWaDunFY9pwhyt2kZ3kQxniwk38dszc3AB1RofBjQZKxHHf1o4Y4aqn5zJBkdYt5p8BdTMUvzpsjrZEP",
  "key42": "NwPxB8Mturs4MjKr6aB8tA3uicM6JAKsWXuZVDAdDLhHghekTDojELtEYzMMr3VdLMPnXYGL1P9deoG9JMntcmk"
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
