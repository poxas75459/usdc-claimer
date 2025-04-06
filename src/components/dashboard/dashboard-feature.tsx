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
    "5mEuHS47Pw97Zb8Nr96LV6Sp3SDxZUTDwNVttCzHLCD55Yad1g5gkXBELHzuMJB3cfYmLvDtcdQq17Zkjz7LjR4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eyeTnz3WRPiMFE31M1hCQKMXEX5EdR137ps6dPZoWeZicgGvUw1vjuCuSY6g31iuz3XjG8wHxAVqKrrxrRGHPxC",
  "key1": "1LLgXaTJn1mpXoxGKH1EVLAV7KjDsrfmB2MrXPfW9gNpygQh5xEBWDmXvbraa6foavc7gT6RCJNawecyDpA8Myq",
  "key2": "5jqGqLy9dSFjKEHV9X4Sdfei9etQP41fr3Mdr52M2H85jEpZTQgyLpxx2xpsjNWhTvzdMhSzVijC2dNfb8rLNRwr",
  "key3": "27DTULM7KyR3kDME8QLRmGLiqXi7JAV3UNtEnkNdTquAsqbmZKSCmM3SfA9KJb54ZiaCiidfQbHNaXba7ojuwfrg",
  "key4": "2VAPBzQggWsTNzq6TR4FDJpygHtgQHA9y3F5SSvFSTAGsLXgmtUqzfFtQHt934iugUPxfQi4QguGMVmM3TR2XUun",
  "key5": "44zdaT1NyQJifiV166Kc52bNXiTYF9AMradGSh4yUfEYVj5VgejzNfwHoGhKmwTQScV6NHofGCZQyHoKfzgywfwK",
  "key6": "2Aa9Sw8mhZ4fissRqQJMP6zAb7zkYb5LxnZLpUyD3qoa41bz8LwfyJECa5chhtXzP5GZ3M48LFAreD8QzMwprBKc",
  "key7": "3aAGvx5zRBGgjF97hv7RdGWmbHdEn8USttRRS5S8d8GzWDgzjj3P8yZoMLg8eEJRiFcbkEodyubQfY3cprd6AnMf",
  "key8": "4aPhs7s22fWoQMGojcBtvTyezQsUQForkDyghM6rd5LNXNCiEGF85hPbospZKfHNLdMDiDNu36Qzeo3d7EgXxJY2",
  "key9": "3C9yQbxfxHtLZtXcbcfw5Q9YdNYS3hRzfgRkA2ZJEDK4r1kHXPa8C2BTNoKRVj1s7EmvU6TdCdHV8Mqoti4gbabT",
  "key10": "39ksdnBSrDUZ2YgKypKQj3KsCuqgYCVV6NRBDpUuJ5HeoLx82siJxfZtYVKPxpsYV3wyMrbCKp6eR37JXDfKic9N",
  "key11": "3he14EbF36MkVfqXoKBTUrSMdAHYKHEAP9EvRS5HBx8tRKE4GZQgCN6xPfYdT5pgFh4o5rGgnTibTLymRwyKeNGv",
  "key12": "2ud43J54w33F4fjxecyLrHGk7y7PcChwgHH48WVXp6oMaANo2sLJHUTff2PFjXUeeHJZP9TKGU4YBe4x4Wy7sE1b",
  "key13": "4Lsa2kpq6vf6m4D8qWnHBHf9B2EGZwnQ39q4281NfQCKM8fxi1B7V7yZWUL9nFxH5vBfNS7P2jxRFkkAjMgsSXei",
  "key14": "593mepNz4m5xgAPUkHddWYRmCFNTZ8soGGQnRNFpDpAhHS8Ft2SurLsqJ2as7n1VjH5M6BxPZ3dNWSN38WpcVWDA",
  "key15": "RgYLXS8ery7X2jt6LeWnQBpiWBt38vihWA7Sev7HFzKtca1ZEAUgP9Ky8YenpwjUimDqTsq2m4f7a1J6WaiKp96",
  "key16": "5n26Gzap2d4F1EM31Cq5CDP9mfkjCFJA3as2L5tPQazkWiAhzsKTfEgMhN4BAiRU96TLsYuKH1JCBA5ngQA5pEws",
  "key17": "3KK6NzhM6G4TcFL91MSrU6K4zYMf73tCPG9vwTcUdfWxKYgRKNwLQyFMxNp9CfxiAbfZWDSi7bbYrQ3WcMN16ha8",
  "key18": "UQ4XpwWvNwF7GeCdPYLsYEGMLiMkeobwWLdX2Hnf3hA8P2BHRxfUADmykckEtvQmUUKDo94HMbmbqVnY87fxJFd",
  "key19": "4SZ7yeYAV4xemCHJbEjkb87yKtxGGWRx5CPj3io7F8mcfnMZRUaugoarkmvEZhH7sJBXN4zTniuFs8L6GxCCmJqM",
  "key20": "VHKsRVTYqjY32A11UxHchubEaACwfoeUPdTsswPSmcXTszFMZGMkjo8ZWoUh45QYtAfaKXXa8dMJcbZgXxUucmo",
  "key21": "2giVvh1NnwYJGXovQc43SNapwg6Sz7RvGVT6g64rbuLMJ5otMXHzDKAPonF2m5MMkRnBey2JPPaBzyafwC3Gb6LL",
  "key22": "q4dbvKFYo2LnxWztzAmvr593eZ3VxzoZfZk2SnfChydWwQnwbbNuRVXKedRFZuciHJb1RRbkWawB8CBE59kfSGq",
  "key23": "5TAez8EtDYH9q4rZr4MgCWyfTZcwf9PrPZTB9YTCgZ2Annxb3XRJx2ekmEUwj9UPsVJS9aeYxXnsGaUnPvGJeQ3Y",
  "key24": "evv3o2oWKzyQ4odzD8vNPGmoeqLQBkJJqqGjzY7CoCnvfRhsWW8YCpZEmAALUr44mTSmXmBbgtUeiy5FhTk8t2A",
  "key25": "2V8GyyDiqrzaVZ4KaErbQjYLMAi7fGrNSfMp7ZzrkNGLxAMC54kENtcG6Z4YdEZqa7xRNPfgMjytuvbUFVetZ7yH",
  "key26": "4k1cbj6rQbXJexHJNHmHsRForrLwSxCRFTMcLX2YryE4HcYJxQQPDkYjA16ogD7zWJ81j8Qr37qTz2dko4The2zh",
  "key27": "mMQpiBtJzT4WwA2hM6i7prVUejfPkhfZMqhPu4AKTA6TdcQpLWnvwemrv93GBCC7peUWaRvYDqNbt4oXdusxN1y",
  "key28": "25ey6hQgvPQszdSh8A8TZYJa1ZCDVnvECbPxgo2iPPDkPqr6rbub7YmMPVpMCDRG7F47R3BRKBF6KKpVh9Yb46qr",
  "key29": "2gcdukkNJ8q7JD9Bz3fQ4Y6TnVd4BBqmMVxP75AagzmS7Jnwq6LFDyrx5QMpuMoihurTxdjwFNAyALYWYjeZBeJU",
  "key30": "5RXiD2SBJUZHhAKyPBTTsiyLRTmTHbdPRfQFNLo9fsanvb13PXVyFai33aish3DbKVZgLYLqsFfZqrrpRrumhnUE",
  "key31": "ANtQsaSS6cxFrnpycLXn96ojPWJRVHnvWwUVoFr2qF9MbmJWbcCs8cJ2HZkbJfkxfDFGLAJ4KJxuTmqRcqJR8Wf",
  "key32": "4jZ6c9GJ2U1eLfbdXZv52acgPDWwryben7oURFwEb56mHsNqNXzpaMCb1XQQKEEQp2MYurzkAJSs7ac6kB5irzQY",
  "key33": "42WZyc1nsQigRC72NZeJdbTezGHN1eRi81c1VZY1zERvtWdny5i35jv3tUbYy1ifn2NEb7Ny4P63P7F9fMgyd1QZ",
  "key34": "Kfo4Wdyhh2cY5k3oayEWnGZWpqdT9EsQjymiQYHxpiXXg5DZSnH9mkWpRRnnbiqd2YFSbsL3teh6aERdnPo9M9Y",
  "key35": "5MRdZfscsu2rAcfJ2T2uUdNZyQ98HJEiAxmMty5Bjnd7wqpHhmguRegj3LMMDj1DpBQhmK9xERL6D4paWJEvEAeC",
  "key36": "2Umn56kwWFPJNU3pjjMmoDaUAiVpo8mQ17d4t4b4vJdm3m81VjJZ5Yh7mG3EwN96EbgXPjx3tFhLh7j5PVAYaSx9",
  "key37": "2XT4d9xy9a6wH5jXxFMvKLjFpP9XrjMhPE8kkGko2KK1Q2jPqVMwXXjLFfME2kPCNc17YhmUyb31Vn877V91HRxp"
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
