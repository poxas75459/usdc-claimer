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
    "3Rfa3tFubuRAjbuQi2cqwfXPnETfSnUjVjnbFepHVJjTnw4ZUDVJ6PMR9CifisZiRivf85cQ6nKRFGJv4p9e7oSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQZYRgBeQeHYV5FaaNPnKuGMZQp3G6uacaMnGV9wfsfY6Cz1gCuFUGL373L9E4DGwRg43zK895x14qpy2gaza49",
  "key1": "2gUkJVeGCwSMCQfTBa4VyzdyJCwPLL3Kvc5GsY9bcetPM7oAFJqkUAHEo4aXZDyRqPYfc5hzrkYdxKkppGg1mZpr",
  "key2": "25DceUbfyjBzLP5G8WDnBj4AxZPtTgT4FAqykfGrH33whQKdTRAZpRUnwWpGqMrrUrBNjXD2iSckDndfYV622jbL",
  "key3": "2yC2tVYFrgtNj8toagLksaYvG8waz8j1aAzSg8JNk2PtjcM3PyC8bCgFQznNujz5i8NVRiBMQ2m5EkUkheWdENpN",
  "key4": "5WxcMVe5CQYQHXBvMzHbxyvkBMaTkrnCgd3LC73NMUVXTPe4i67p6Z4Lm8rGMZ8yrV3FLsB7Gu4pj2xUytxPy2xb",
  "key5": "5tt9M7P64ptZW7zRSrD9yidpTKMdpebzmwiGARGrugiUVuVi7oYqosjinQPLkhFbnwHvKty6qWXpX8egu5jKkznM",
  "key6": "55WtxT3WLAN3HQJHvkSszQwCG8di3U7Q7nAt9Q7Z4zqL1c6z4o7ztuqGPbWzkndvbZYJWUt6kdr7fenDv8MjcZzF",
  "key7": "3RCJX3a8PNyTkCuq6pHrK9t7mLtDL1RkbBoqR94qWyPqdqWFEjVRXGXpsDeJ1qidSst9jXUch1QGSCXapMWSQopR",
  "key8": "4evenunVYwVUw4B76Arknor5DpfUHxWzKEgKoVHV8foXG3c4qfGyhptk1MhRqzxiSdSFBoVZHP7aWwoYorV6vEJc",
  "key9": "2xDnXbhS6kWYXs8LoUJpD4A9K4khRxaMtLQdbi4QmLyXXUqHuZuFRsZoeqT8ngzN6asYA44RqftCftMrRvhBwzoy",
  "key10": "3B3ogMEH3jAWsnAXVuEEw5MqAi7pn2wB4gbKZHk4Y1w8AxZEYx9Tq8vStJT6fHLegJ73AwkREk9Va45rK67pvjyq",
  "key11": "5QWgzETuHdRKBKWqJEVnX8zhzhjPBXBNgpqfPtNp2diwxLGe1T8kAyaRdx7cc3wbkfDXkJcVdvXZB2b8BKQXfSiy",
  "key12": "3P7swb7tYSr96r8uiNQ651HyhDXDGGxgRPA4aw5KiwzBEPCfeNWNsEkqzSWXz7VW3jrgZzG9seXL2jSrdS7L8cFb",
  "key13": "2ykD6LGaTHwKZjnFgXgGt4otr7c1Y1Mekvf312xUR56oKZ9AZ3tfeFnhM2DVzesbu3pNfSM3T74QfJJMdxEmvyc8",
  "key14": "3ydjyNmreEqftArVD8tkTPfjSL4SbjAYZZ97Fw8xEx7PMYkzdRxjshxAQ4Sx4R5b94LLA9zGYcrje3fh1aTGXZdR",
  "key15": "5RAAsetF8tfhnYQ9CaZACjA61phUSY4odXJodDQB5nVE3WjfdTroiBzNzb3HpgoMwjaPz1x7aw92wiwwLj9AfxvE",
  "key16": "3RrYdzSjoFH4d9h7uq7ykXKTtvkXRdfjTYnP3MLvS21HjPVo18Dg1g3qsEU2cLCVztTazefhx61jGT2KTze8HYQh",
  "key17": "3Tg2BbvBRyFWrgYAPSmJMNAPrw5ch2GMjKjTUhgrkDego367wmP8wABwTEMUfpRM8Z5Q1p15oE9QJRHzaGRwXQJd",
  "key18": "22bDsJu1pVW5YnGJyS82YWTA8pvp82L2ZvfnRLnEmtPBBgCZczrSi4J2rqYEixdbRQor1osHo7PEYz82apMaBr3F",
  "key19": "241RhUz7RGsCZ1D2qK12mYmPJ7ujG38u8BwuNS4m2muE7R18vrUvrp2tck7A2s8xxFXubM4T7s1DfKsPxp6Qmt1e",
  "key20": "pNQe9rHGA5KzVHiXoRBEq4qNdAdEZbYQLRJzhSTWQUzTtWKViiqCij8oKddybkYmqSJN291vn2MBnwDGYcqhfJ5",
  "key21": "4qKoeYSRTqNPUsdG6bFeSx4BUKUZrwoGtyMQBBR3GiTu1jVq3rMxxbu553EVX4PemTm78YmjfixKmsXm7bVACJpA",
  "key22": "3hsZHAatMcYNRuxmM3oV7ZHTUrDbM4BPKcjxQMGgvx7eYv1vs4dhC8E8fcTx739e2ddgshJGzLsm7V1i6j76JWM4",
  "key23": "4B321MaGSk4BgzqFiB9ZZWa9RvtevwN4GPahddxqFYjeBGp8c3RaR2ED9sadeVvo4n9LgazfMgiBmGquTzErVZCs",
  "key24": "3KpeFYdcUuwBd1oh72A4eGQrS4BjedwyoSEgNDPZUGB1fniM6iZjd8MBSfj6DQtxcM8wjhHeHCiWPP3xuTYRE9R3",
  "key25": "62iyR5PFm2z3mdcex2zri7jwEYDbL1GLN8U4sXGLbF6iAnMLEncLhJChMBfqCa7HfnF53C2aq8iZnEfBJpGeuxSi",
  "key26": "5b3zJ3trmaFykAhbXFV9Mo6UXFYwzVhEH1gA9vs6afA6gd4qpLHhNJfYrPGLRFbu4iPebrkoGYmU91btSxG84DHD",
  "key27": "2kRwX1WEkLHyuaFR9a5xQtZyEAyUgSmGhQ9P4mQYkSVdPh2ebtfctFgJG4r5Z2ij1pae9bmfx55eEsSermYqEt7Y",
  "key28": "5pJscxCmsAyaDJwdVdsRcpJL9ScN2wvzpSshvdoPqkYcxjh8K7SNuudfcgm4exZpC1Y9h8jyTmmh4xP9qkB1rLT3",
  "key29": "yHk8kQkWREQoG6a9ubJaXSNXP7WykWyBzPLktzksmkWpGqVxgkyHNccTgx1bVUFq7JrAAX8nB7HRm6dfqNLcb8k",
  "key30": "39RkBctyBxtkrACEkyXfnypxWEWS3CbRYXv5GH2Fmajm4TNWw2VKPxqrrH7tUQB7iu6DjQx4N1bk2stCbpWW6uKJ",
  "key31": "3XRS9h8QH9PqSGnXkCcUX4voMi9TqjhybexeD2fDKaogh2BjzpBnGXUW1cXVtqHanwdUrKuR5FWdGohRmg3UVXA6",
  "key32": "3S5UAzdjgpNHp398nSuSN6fqSg1dANwYCyy4JSSmrVVTYK5HDiZG1SxU8B7c9iHQULbR9veEqy7pPQvEyhiAuTza",
  "key33": "2cukgixVWvtGtg3EyDsTGQgpGChfZHU4YLmftPQ76V9Y6mBCUZVqTzAsXMyxjUGska6uyPBgMAW9kvUYMXCE16aL",
  "key34": "2n5LYEng7rekaht4LgGygDcMZXLkBuvC8Mbjqgy17gsrVreT8GitqUto3nq4gvjzLdMNYJSo7yU1jH2oLrzbcCM",
  "key35": "2mgr8MCYpZyfWmB2gqKLQEES1eUPVQto6VEY1TfTRidRiShDmq4h7PiZ8k96A8H578xYi8BEcARMkHuVsJA2MnNf",
  "key36": "5HEh32tceeeZ1N6uFHPbmRGbyQUAeN7qFWq6MVfRmXJmYktAXNxg1n5j7Xy2G3bU9WFwaZ2GYeJxRGK6cq1dt2Ep",
  "key37": "3ZCLua3ynwADccYTiULvc9qSSqn9Nfj68hdYScqCi1mgkquox9AzhwhjuUF89gDxiNYgmt7f2kEp1QKn2DfK7FtS",
  "key38": "TMosChw8XRdExCH6cQ3EWU2FYiJDk8BiMpgnWitGFseYsA5mUmMgwvGoXRirZ7XjHfKaesDn5WV4B92ctFr1Zgk",
  "key39": "2YFW1Qk79qX8qZjZheSRNE2tWa2sAdpqrepJUn1EFVZmKArzgXjhQA1eWQuF125k6kBzoY6gKdozG3bxbT95ebsL"
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
