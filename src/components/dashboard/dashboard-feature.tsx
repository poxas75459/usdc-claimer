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
    "hEWxjVREhoqtqdAWM7gF3iMwq4UKUTmXxsotWiKXSrfN4JbsAn2fwNYRJtQFnxL6NucBRrouVJJya9VQd71pnme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HcxEr3JiXmgKw9FBfFxpFrmwiPTr2a8NZ3uJGLjZAxTLxmYbJq9M1qYPdRSPKZAMBnmzazeVxcrAwKoLbsEBety",
  "key1": "38W5gQ1cmiohxtutC8G5XDTBgb5qPJ6ntteXVigavtscRVfSmHZiRZE2xU2p9AoCPaDoy8KC3nAJYLQTB7PuBNP4",
  "key2": "42R8StNrzSkjZDj8jT4e56RwK9MvoBQcCzAtA7Rmhr7pVNfFhQ8ZsrkKqUi4QBu2vcoHybniXhgpy7UXQzFsoTxY",
  "key3": "4ovdS9g66UTXzACthiuRMWoJp2omKc7xmmU3tfR5fsArA6HX5c37tsjSeMwk3vajjoZJ614Am5fezi9bWWyE7unN",
  "key4": "31K3mkB57B7oP3o9XJKv5Wj3cntiSCyJoh7j5V2mPCfc5jw79a18JFauZ2h8dgvXysYhBHpK5CvAQa9C9j3cxncN",
  "key5": "EHKG9zJApxzdwrtZ6a1dSCxiuDW3gtTcZNvsrFGCtN6mTATAN9qfvVf5uU3hV34SUyo653Be5pgG8xxyx9aqgM1",
  "key6": "4WTBKnnYHtKyYbPaxu8FFJ1EBuTEp9Mden5hLhR2Go6rY9YtFfi7vifPJ4EBuPTjUqSisJGev1PahJ3NKNwEzUih",
  "key7": "27akWNy4dNYY1PcAPnMCgF2KdBr2qGFH7YH8K86UFrPaW6MHjcQFEuufX2E5nNQTiaYMr1uGNeu9ERTT1VtSfr3M",
  "key8": "4egZ2qcmtowb9iLqweeTxQnBv2e7Fq8QUxakZREv3UMTup6qxxHrBk2bvK3ZbQdzNKjqufdeu1WTYDxqazaeMWDT",
  "key9": "2AmL6WrEMjumzmiLdHmL9JfEw2PKMTH3d9xutNoSNb5Lhkw4Q6otFnQVr69oPeCR9x6KVBf97mGtCEGkGxNQU9uH",
  "key10": "4TQFAivcbuyf97zF5sNgMix8qKyaDfKJnFz9djqzX6fxcTyfZznFUG3q7kmDS9eUG5h6rZoZm1PBP57A6rCkNkk3",
  "key11": "4yV6Bamq6bftrkHRHAoMEqNjMbYVfkS5jfnEpxsRRZUmMM37GmF3TJ3nAVeAen74NZUTgaicpYqCx3QdUHbn1wZv",
  "key12": "4uLijDvgmXtWuMA9m6KxP8TDWAkMP24ALn7j4LipfySoB5FhrZBKSogJfuV4sntmDTG9iA9faEVSWDbxzGtrrntW",
  "key13": "43ARFSwaMBNn6P1wezhJvf7X9aMJwV2PA5Ej15hJXugQ4NwnaH6cRfntMNFmGTA9JgpSKdDNp8dRWn1hN1tKieKG",
  "key14": "3oY7QkbtfTDN24V1wGbCGi5NejSoN1zwBZuznWEAU244vTPgeV44JjRP6TeFSGAceqodqS6SYTEJWSj8ZzTp5HEi",
  "key15": "64eSYVFM9bWDb5uYw5BVsdKi678SHQmrNFo7DSCHa7cwQEjQwUHxKv1RNiHYHCbsUKyjXCwXujFZ9Tsazgjsvk2P",
  "key16": "4VUeBpUX3RZpX7iTyWao65L5KWVgBcmwVGJYQJ29tMnTVALsVrumZtt4gtku1ekCQaKozzPEmmt428McxAtQisgD",
  "key17": "CAgxYTXBys8LxBPvZnNFKJ9WVxxGHxmKBt2Ru78MaFuan4GDiPi8RRySdi8u4XypjQwe72gWdA3H2zwJyV4f1Uz",
  "key18": "4enbKL5txEWySu7MEuWWpF8hVZAimKyeCLJTKtAX1xxt9uKBfnc42mpeBRBTdJPzbpGZZGHdLNwuNfFo4g6vu9c7",
  "key19": "8ndkcmkqVCsEwtJz9FURsaMW6M7fHWGsSJJV5Tf9AyPiAWbmNjAADWtEJGYUDtBJBtgQxjoiJaMwdBoSDuMe2qa",
  "key20": "3fQUWA15u7GF69QCCJMCu4evLpF21zY28gkuMcGHPXfHKbn9W8rpmnzRafA5aSEv3Ly896iaWZiuLA1ZrsBzShK6",
  "key21": "4qdedz6vT3hq4y3vE4vtpE1i1iDqVoLNgPKh946nqogh3PBGtoFraXvaRTFisYPYx6u88HseW6fNRhpbNVLVwZfr",
  "key22": "bq3ttGrfw51uEPdty7Kazwg742F6i9gqVw9yjoNiJz58sfbrRgmBCoYjJrSZEiTeyach26MXdtQ9qT6DCEp49Q2",
  "key23": "5rtjCexy7CJBcaUn1aE7vsxpSXx3T6UYMvE5pfE1WfxeH9uZGAdTT5xNXQ4FfCULRrpJEAMMEWgwhY8VMUDpEYTF",
  "key24": "FZKSfQjNkdYhbJYs8eVZQkUHYCuYMokeYGbo8xczNNXFZBYYPa9opwLMEpEorb5EEkS95XwGNE33RkHEfWe3gvu",
  "key25": "3g7F6whNzz24s7eoJpfdQ9Uwraa64cuX3Zv1SAiq3SrLfxpSrY2riJiR2uw474Rc8VJ69UskAwMntLwinWtJSKkU",
  "key26": "5sAfytXoMMBjkm12aChW3r4xc6tipDHAaji1RJiY7QedEzLYyMdjqMVCkVjMPyKJtZy31sk7i2uh6f5HLt8i2PT5",
  "key27": "LBkwTHvkM8Uq4PW48xC1KBjKN5vDQMd12sexzEHGu3GqtXffGwrfDetHqjBAut6LZKKeD9PDqNAuZtnyp3ooyC4",
  "key28": "3bHVwWp6fQKkVUbkBvCJ5L3L6419E5gkPyZMxkAwFu2e26yniB9bLCpYsgyS9C54c4pw3GwhGo4f9vjKjYBLFQiy",
  "key29": "4ufRNyT59AiewHhmZmCcdcqSXoJWoQerh1xaa6XwVjVV61mSyssCFxyGijqb8BeWsQmjCmFrp95JgopnvoryVggc",
  "key30": "5c7ubpmfze6YVbNWDEHgtX69PvxebZYkSLPbZXSkKk4S4WFz8i4qbuY2px6LTLR4rdPJpBH8ctRZ6yvj348Wbv5E",
  "key31": "e54YVMc57H26Nspk6uS4R7mwccN8kWWNpg3AJvV1JQMfGydJ9W9nRSWXBxUHq6bTue1UwX2bbfmZa7ohZ4T3pF6",
  "key32": "vvmxirAa2hbbJKUCA17EYfVSPSdynDiL7mqpBkdB8ZNcL2s8fWeB45gHUx1irExYbYGjnE4CzRMYuUJ4Y5cCU18",
  "key33": "Mxa67D2iMtzNgzTCELKkadxJKduLHSoTicDSoYGUvFwWkKNUzUay1c3NYyFpDi6PwBxqBrQYUvanrrR7jqt7Ggz",
  "key34": "4yva4ZrqSauroED3A53RUQj9M62TobfNwE1ajCodHQkqhgqHvLR81eo4JUsZjHhw4pPzyEeJceNtPTLSAjfKSJHr",
  "key35": "3V5HVUviCpqpt7rmpVSLo2t3CqGFvXqsnUJsSCifcUL9F71STreWvHuwuNnzcaGdNgJpUofUupu6f5ph7bzXz4on"
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
