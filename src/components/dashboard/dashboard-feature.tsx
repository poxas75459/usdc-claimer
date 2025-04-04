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
    "36nsG72WFLSFwTaMeTqggcMxggAZJeHRtC2Vo5WNmm1nTxnbhCKRuF2RMRAzU6xCjFj1hjoMn2meC8Qav76we1hG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lm8JXyi2RQQR4byP4Te2uJoRSY9ZrpaTntY8rZnikTa54fVkV87gnLpuUJEpPTuaoy39quiQ8mhELeNpTU1cowU",
  "key1": "3FXy873hBotBzgcFWYXPB1FF5zTezAJTw84fS5vhueowj7RYM1E3jfLw54febXCTZSdkwogXF87UrNeMYm2Ppxbu",
  "key2": "V6uwDkoLcUcxaPUPDwr62hge1vyfHL3CfWtm34uVvseNeNFdkUGMYvRhNv6U1dUiCpTejDkSQf2T1oAK8xALt72",
  "key3": "J4UKkPEk3WyBCkdAskqrqFokuha2mFgP18FNGar7jJ2xNaEQizfu2hEqxe8mZmx8U9iUbTFa5BR5i6vVPnXUpbe",
  "key4": "54LZbJGyo7bEQWdmFmtaZPChY9UEoH2H8Xaz6oAAzBAHca3fDRX1opskSnUKiXsgsytp5NEGWH7GSsrQi6Da3fdr",
  "key5": "5CBBNPBAmzU6aXZMEGAxY8NREL8gJQMSg47r1jr653EZCqnTr7W1yBFoojdFmeNvnSXHSBHMz7PkjfBsXgUVdRfo",
  "key6": "2UjftktTVqR9NLbB6a9cSg7mY77kCr4d9yyFLSxNg5P8Hd21StAWHKHbdPyEzxrufbwRFqsbbQQHgzEEVHJ3NeTE",
  "key7": "4Akqes6KVie1xLnvnXSLk9vBFoTVMsbJf9AbnXwL3K9o5HT4KBUMFZ1BfATPaFb6r63t2B735JqXrwYqWKAxqDkN",
  "key8": "2YuSNctPVv6HFik5r8FPiavBnJHQFnRH6NMijUgpdfSJef4mUdwNXbAQJBetseJ6ttf8vFVSwUYk7ZWLfWrV29GH",
  "key9": "4KFNti8d3YUg3WfTYraunaY99PJBBPY1H22Ap5pmtwghLY138VuheomCkDhTpHyJVxrkiXVXBAF9iDpRaa1nv3Fi",
  "key10": "fu6ct6QGNcZ7yesCUQ4Jn13wSLx9Fy7HCoxGJuSao5B64uYK2oBX53zFeQ72TzoissuKcLWgn3Q6LNWXgAtwd59",
  "key11": "4T3kRXxZpLiwiPewR8eertqoJwryS3ZyPZcw9jhv3bGPB6HC9m8G4HWxZ9iWHzwXhrH3KfvMgTWPBpj2eqth34tM",
  "key12": "4ptAWsELTt5SsaYKJzVRDuSUF8oDHmsN3CPdYXY2AEMBPbk9Sq7waq7c9dtXh2TAHU8VkHwRCHxQMQHRi3cUCf3h",
  "key13": "63tW3pBBNBMR5UKmmY9htyxDeGDMYMAtLTDUwvX3xFM7R6bNj8b2GqjGBaE4kq6wEbk7FzAWQzE7Ct5EMm8CW3BT",
  "key14": "56bffACLsd3gJWk97aVMRmVcixK9B52134wtyCYuo7eWzJjngfuYabH8zkHkBy547YYFk7nWMN9whqUWYPoe1mjg",
  "key15": "GuJoUr1fSBpEjkGjJaWnHAbPbE4dTfBYUGH7B9poqzamevzCDFjdmacSruZGihBz3XWFkBDMeVpKKLqhcDDMC8X",
  "key16": "25gPrAMhAiLjMkz6WgqaAFdPYgzpmHqgp44mH6GTL3e1kZHY3xTGaUaa5etAUQUaD8uaeVvvmKSynLyeBMZtwPg8",
  "key17": "3sNbiRTNQZs762Gm7LrD4EgALrEzkHUzf7tu7fbe3BqMSSWeBxur9izFxmp78ot56NXD9cU9QEyzYZb74gRwmjnM",
  "key18": "4LPHsCPudKFFqDtrcDoofETjBv4BFzvjVXGdHUSzeLnMtwypv7FJ7CGQe1m3bF8MzkHkC2MxKUyWFGfCFQbL7kR7",
  "key19": "3TJYo9qMkpT2RNJbupABAQ9bKm5RQ2vMJFRZnZqq3MXFx8YtajvUHqpPhJB2kHtzESUKzY3vKCQYvJvdxihquZci",
  "key20": "3mH5Zib3iXqQPnxZ7h7kDw88hHd1z1BBoPPLfw3jHuUzgzNvEJJQSCNpQrCjqKLfYsKPGgQeFnvoqCLfpzr8Ztsx",
  "key21": "5NDrw2NzE2qHyxP7vHFFDW6ecFLCQBBzPSG1NxkoCVN3Zazgrahy8eW7hdzEGuzZT485D3y28Bd9oExBfV5tWgMT",
  "key22": "2SK2AFzt5FPTacPugDNBCuH4wxeZgYJVXEkbhK8CMaS2bWUoRU3qJTh87NiMWSnFD4u3rDH5HafwbXHFSBS78c6s",
  "key23": "xtmEDSpbseAm3pPDVRiYxkEVVPSZcUHuYMHNJFwjKM9hXJ6xq97GF6MEBFjeR4JPgAnhGmFaR1Pwm7JZ6cHxR4d",
  "key24": "3iZ7FCYnaS3Ya9ZEXPZVt6FQpFPUCPVdSp5ZBiJUQgu2rnK6s9mX1SSEFesWRPqRXQUWD6DNeLntBrpv3zSXMWmH",
  "key25": "k8vQY6yjUcqLwoXDp4h5UvLs5qMjPkZBf9kt6NyAUtLP9vJrUw6BvjPoBoYoKkDYjeNKzBbVqiGsBdoL2aTYk8H",
  "key26": "3KY1vQpuBjB2EsKsVJ4DLGCqp3haFm1ZK8nNhkRqh8XG3bNFzd3DpDThkVMsyzcepXkDTdRn4PtkmSEYnnfS8buS",
  "key27": "4hhHecMCp5a8MpQgh7tvAbkoAkW8KAz4L4FwZLPZU7ZGUW6dGcHPW3kFMAbEWiGse41FCo4iDjYwLFimwkQUZi57",
  "key28": "5Dk8spN5E4sMnqkxrWmLpb54zYYVt4x9RhNJ8VAHULEgwuPUXJU5aZBMiAbE9EjQ8w3Q9ujf2wVaAqJQM78k1xq3",
  "key29": "fjh11U3V7QarQ7xzLTNQBLHwrLFjBCQ37aRS1Bnmt5FZ7mk4TBC7a7H4ZZW6ZZUkTSHU8Fmitv2E6cejK711cJb",
  "key30": "337f1FMzq6VxSCQqJstKHSwLkNNtbBdyXhniaSyVqcWEBrN9etzuhnhwSQvGvU7DTi1QjAjmkP7nWLmJpfp8n3n",
  "key31": "4sK6dbfm6nmmCLtAu1RUwygegMRSDKUt3uKXr7xnz1zQ4oopheU2BDCBu6orCVdzXCgqy2onntTuzP8dCBksBS4M",
  "key32": "zp7aRiqnT1HsvwE2mYDEYYBhYK6GMT1x6JeT5Z31t3TxAqf8PcJkvFK1FD8NMsDpojzMFRk2sXLzNtcdr1K5dKi",
  "key33": "27st67YSRLxqZW8ocRyKvsgWY14FeMNRpL1abmjdPN6Ho6bE3vsXnWFk3hc6qdMnm2ZL6W5pGdoMiKzhVDf4unjc",
  "key34": "2M1J2JRoXiPu7B5PMskWLXhDGQDYx3mDvxwV9JSZCwC1Rwo9meQE3jF4BjBU3ztuma53BoYeKRrU5MHHWuecN9FP",
  "key35": "4d9QofyeLcXqWBugyDmnVN8hDbMbaFEz6GF7M8GBsN6G9HDa4o6ktAu2Nt22fJiCMdpiRiVY5mqWnQHPvUhENKBL",
  "key36": "38PYFyXt6aodz8DgYw1WH37UG957VCLgWgoN2MMEdcMXwJnDhQk5sudQUkeD9MnRWjTcHpaRiVVqM22yBsUUCumw",
  "key37": "3bPipt9o9gatFEGYShrxG9gSCg6sdprduYYGBCTt3rrf6qk43rnwpTk4qKwAtDdzsepZLPy1hhJfMqkLtidwvWYr",
  "key38": "4JyL8iWoUFo8uvDXPvBJrbVydTzqMPGGu55ohS3XzXhmaPkcGLE1dEVh4LScwxLn8ssL6ZL1GKtpajhudNzSs6WK",
  "key39": "64rdZufyDyup1Tm565qBJngfcD1jk6B5xbQdjqzprgFVPxhSD9JtmYiekqhiTqq558v3PrikFYmQkEUVh91R5kEx",
  "key40": "GQZEcnwgSmnFATUsMnsoCwUMKRk6HofY5SmvjSH1dXfP37rquQLDTs259uoK4G7mXFJyfrC7kwrNtDbti18EePa",
  "key41": "4tuFYXJGXuEFGYmt6SLaK9UrVJvsyJFv5AUJQc8s6Gvh29hbcuvodX6ewd6R1nc8YYzXvmidkJvWMC2JMTV7pF9G",
  "key42": "YpDvSMqkvikUygErhT6iEsCQWwct3rBKFPm4T4tEfmmjjCPEokDK4j4WTFJTGFEP1QvjWBxFWmAVnegV6NkwKJf",
  "key43": "3pGFcdaCBHSpztnExmw3XwbD5NXvFDxL8oswvVycs4aaW4itnhjkh6YFQgxpaXpsue1TZqejgTL13x41v85BBFvq",
  "key44": "5PznC8FNFSksQiVgcRrEkjmoyXw62x4V7F3gqKtfya6WqLjQF8JkPCY8XAaogmgphrkvooiFHzsJWi1T9XViV7SM"
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
