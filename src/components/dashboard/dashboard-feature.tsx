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
    "62Pt82mqcdF2FdJ5Su1VuMDTuvG3P5UWo5M8azCcBo4u4CTPaoYfA6nfoZmwSJgXfJvSTWjubLtinR9bgdtrumNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7nwtmHJERkjJFCESUB8WFnV1KJTsS6Gd9BoCrUkre8JojLw9sb528eiQot1tdvgUHoqncqF1TeJsK4CfXwqdHr",
  "key1": "WVEc5WS5Bi7721yE6heBTK2FsBFchbg41AYN1aro1ohhUwACn9muyf9DpgN9bGowUC7bHDanEVGS47Jk9MjfaXE",
  "key2": "4oyCjKTGiZEV5X8WkQwRSCaLVRaLmh12JNopoWeBC5fLw7oXw7ZBCv8rgVLwPzZCgn6xUc5pDhVqr8Rgaw9hdt69",
  "key3": "5s9MX4vH8RUBzFRreJQa4CgKLzBVnMhbm2mTv7oSAGpC41r3EBu2pp95pcWxHfyCqYJvzGnWzv9ERk4KXWDFjvVn",
  "key4": "2TWQe5tYsfFU8h4SeSsmZ8sjExqWxiSHDLLq8YpnLYbDw3j11bT3cmrVRT1FXmL7kLUzLYC9JjBaNdc5tkfzND3X",
  "key5": "5BwtzMzpx3vEAuTih6tcHyW3ounkVibYs9UQxht3QJJwpo5YcuLx27JJGD6wV1YDyGBbSdu7pPJ8Lxnvxf2CRoav",
  "key6": "wettYyKAM7WjsbzRnj9ZKCsAAqFyEe57A8oWEP7bN7CqNNezcoaLmXr65w4LyoUNXQb33xTtUuXJvVVYVBWxvsD",
  "key7": "5i6RciyKEwJjdLPiPY5dz8hAEkLNwq3TjrPJPBKKek3X2TVc7PJqr7LUMkEPRoMqNuhFJSgEaYfKSSkX1kWuUaQ3",
  "key8": "3ov7FTftKiUwd3JD7LKfN5N5kSt6YsykHSBcx215eTvMbK6qZ6NgXsV82WJpctq3frd68kGVrCtcUYDHinHFdSS3",
  "key9": "4VhzEAibY2Awf5PevHs5uXbvGJmbbGgQxLx73XnvTBKzNgcS8Aj1HNisxDYHcZbL8XX25K2b7NBryMZgXMrqgan5",
  "key10": "4Vt8zJTbnHDXxPYkm3ewXPkZ7UAwwQEsHMerjCVJJkJGhEXysQ2uBjXKJENcnCJc9EdCmx69ZUuGdD5FCSzLBgt4",
  "key11": "2WjjDWdi5zfHLtNwrtqqEkui85Wy7zm2nL2Qkay7n98hLtttPHEz4RMEkAoDFMm1nuYoXWarRCcYW19V7ZFsPNDG",
  "key12": "4Bqez4RE3dCWtQjA6B2nETfgajKRjFdNNQqTmRKHtz6Mh9motYVHQF8V3CfXVkS6aaoJY8BadGtQ1r2uv1Jrnytv",
  "key13": "28pdu78S4oJC4NsR29ZxmAfron765WrzGwhrYrJLPSDBUCvKjfo2RwykhrUNfvc1ETD9ZLWYFcihaBGLTXWc3mq8",
  "key14": "5Dnm61kw4xTdFxKpVyaSW4wFAos6XRUAtyBKKWM2fdCg9CQ8f92fQEHRLCsfA1NvH9ZhfpDZgjWnFb9Y9sS6XQVL",
  "key15": "2wngbLAGFRYGAr6YNVpgn5JuyYaKFaSUS6CrjnSwKdU8V97gdhPH9jgveA9p4WW7FaBrLd9bU1cLAKmE5wX6drYQ",
  "key16": "2LswtmRcToTcuBqRz8mk9vnUQcxLbSC571XLpdMpqXk3iU3SC1swcqesZo9MGQXJb9pCVQhKLf53LX7VCoHDsDC6",
  "key17": "4TqcXNP2CBiWi9Xer2wCiL65NqacGnc8boXnDRRFXjpWZKSnB3uVojHAMsGA5oga3o6qfuT2ikX4qiEUTHyM1DTW",
  "key18": "5x3gKzxNTAtnyXaupowwdk2BzUKSTgyH5d8ZYx9FKtyKu6NHXwjs3nMh7PMvr7Q8xkT7wdd7Fb9UT8jTYBdRLGSS",
  "key19": "2gUy4Yh67BVmf7CSSu72gxmTtBgQWCLWNKcFiV1wv7F2rTcNrHrxrfGF1xgRtbehk6WistggnNHQtTTmnutLMYwN",
  "key20": "4EZQoK1c3424wwVssewDcyg34C19VaLafNfn5UexP6p7Ngn9xdetp7bzeTEb9AhjgAA99yZSEKd7b48dg4DUYocQ",
  "key21": "65tKZGNWyZXLSfxJTx9GYSt2St5ZepxhRqCBLMXWekcLP2pLSH8hc2QA7yLL1xWkjDZwrDY1ZxqCJvDudx9ekDug",
  "key22": "2B2MZPMjYr6RuCMVDZEbwKmqh3fhgLW8uDJqkvfgeQnKZYxeReFDpRnk9wcQ9UCzTwtNbBUUL5CodbCvZnFzbhXX",
  "key23": "2ureHdrtpoHaexcuUxzriUAmdFSV7DL4FskNBogcpnD27FBteLQdhp4EVr7eRAPJn8aSBsbshh7eobbk8xCJQjAN",
  "key24": "81VPbNVtiAvWhjTQmMFFGLvgWDWRZxiaC1wYqiAdQ4SrN9RS8U8t92aWEiZHc8SWeQtc5xPyqi43W4htoJzwWqi"
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
