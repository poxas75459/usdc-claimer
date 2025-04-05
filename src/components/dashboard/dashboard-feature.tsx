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
    "2ZwHuEGDWJL7ChtSfP2vXRr8uwSjY3wNz7twd2sZ5BfDFMXa3554mF2Jfpn7MTTmweifebyeykpVdNe1qGhfUNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A79942v2tNFsDQ2QGxedC8p4gnHTi9a6Vjx6e72Ug4ehUcv42e2XcCkHxEPLT1d2pWMQcXbUq9EieRToyAVaNoS",
  "key1": "2YGwHsY42MAHbvmcNtsSYgq4zSLMWYbnk7jgGYotDxqU5sozqG9cJR98Fr3VDEStSK5tv14eg7cJFvHmemKUi2R1",
  "key2": "457aCKy7uZvw7PcQTrvgdLTzuS18iYHMqcg96pRMMc352UzZ9m5W9abhfdhujzL2J1PrfJBUz7DcQLiXHfzZ5ktV",
  "key3": "269o1z1cKWfjouUxBi2LRQL4HKFyAuLD7mFL4cj7NpzP7D5zejRs7hc6yQb2iyZh5yTjjH6ikJncA41DZkYPy1ro",
  "key4": "4spxRJT4uJKfLdUfoQpcUsXsLzAQ9J3mRe6RHLPieCCpaKCRZMvnABqL49X1cc8vVXQ6kC6i4pzyXKCwJgXEbiiB",
  "key5": "2GhYEsZxPTLXNwGuxK48Gwy1v5BUz1iFR7m7XNaMneyeXC2aZfD26Ym5bqV9ogThaW91yyeC3noV5PxZPETc5cLC",
  "key6": "5ToCToa5RvTrYCuHBSgBZEPpyQnMLbQEWLbL4n5wBm8cbYdQJZrh5f4dbpV5YMm8wvhGNhJRZdiLyYSw9pEzJFGM",
  "key7": "5ZtxERJtyGkA43c15jANmhUjeyM3tnJLoT7okfLLnaAYctbhzqfzNDNUpUAtkXZK9yQmBWx6fMmwMvyvwAKKGyyR",
  "key8": "2K5ympGmchzMgp5PTbKuJ24HGGTgvxwfWTQHFDcyZ8pDiUWsfGYm4hVZyFpc7HGdk6GrRVktu3TLcSCWuEdnEBNj",
  "key9": "p6Aptgrxz2QyBKfPFvJ5wxFsBmB5ETaUeoy5KuTfSMgCEAPrLFesSathRGR1CQC6gc4eDZyGHD9zfFwDD1YTkVR",
  "key10": "5mb1rQ9H12WzERiqZzdnErM5nyrRYhbja9EjL3FenkFBQujhanTgbKvppn4KySMPu7q1STXTmHFq7KFPrgkzAjzq",
  "key11": "31jsStomwE5dXtMLmhyyb8cMc8YRdniRpweJXyWLDLWx5FkWMgkDMHhJU3gU3sAsiAdQXgzpDgFZDUA9Y878B4UQ",
  "key12": "2QKFF2wQBRXRH8zfp8LeWEb68xeMTtq4xJUaava9oZBTvEBm1mJAuHWXzECLPrpq1NBgjVKFijZ9FtqmqTFH3QsN",
  "key13": "aKi7DbasrfTiNkAGCN4txfFaY5b6sHKu43a9Myvhr3TtS2NQX3Ysnnzi5pCxUxLYYPFGaZBrodwDNzXEw3ib37C",
  "key14": "4ijXYBBrYpqJY1Ekf8rApUX58tw1WMivMfDThEvgiNnfN76w6XtybfQhKnJoX3BBmuWEKYqtcAs3c6Lh3fFmYkBr",
  "key15": "4f4tzV8dMdRubwj579o8J67Qep1wCced3rqTXT67Anz8Fj2xsgAamDM4FefZktwiM5cdCuoZwFu3zuy16ugy8PQw",
  "key16": "37qQzpvCwKj2WPtCq4bwZNh9b99sKGGf7HzBkjTz96YhchSroCPDBCiB5rtCkBhoSkwNm3fWpDAUo8qsjiSvWWaD",
  "key17": "449wSsFkctMZMNDWmiyZbnGGXACN7vNpTTyWwPqfsWn98azDoEzRCo4UUrY9SHM4rJYNRW48AqXsPXG6JYpsL5pH",
  "key18": "3jT4EF1vmAwCdLkXjZtsqVt5q4Pw4SnJ2DeruXEZYQnEadUjueLpuNtTtnCBUn9bfEEdsFQchT7G3T2Htf54y35M",
  "key19": "4AkPMR7sJmXggJz5yVLNq3s6QgXDRNCiFUJ8E67s4RvfmvhX1h3pXxvtHDXk5S3JhJ8s6igjMg6RF3mGo6oCoTyY",
  "key20": "517asFjAuv6VzfDJ9gDMSNDE9chRTuM9WahWbiDwXAqWs3tRkSNbcav6AR8EHuu3HwFWb9VTSNLfaTmJqcyL2sCJ",
  "key21": "3DPj4UDXVJUUZFQ2Z7tFnEwm8VVQAvagkoN6TtZog6joENq8oy8LHTVSEtCnsweREKu1pzmSWBTws7BvVpBQShXt",
  "key22": "3VAQdbEQYW1YbKPgek56LYjFxy5FMyenrFqBDXviK9xRo8zBRq8Zvm5raTRCVdTaz1wEbGTYJL8hj6sNQj4ECBXN",
  "key23": "52XXtkE2TeLRa7XdB72QtFYbQstbZSX5ow3HCCuxkC25HVanHDaaQRzVigWjxCxpk9fsK9SGqX86kLaM8RyDPYhX",
  "key24": "5e8n2QR3i59haBngCwTcjHwRMonxuJBd9TnDx8AusbYSW3sQmNMQjufUyPCRq5Vs4FVogZLjZecAxUaMAZhxTiBR",
  "key25": "4vRH9w8VfLpbUbayE1T5bqcZWgvCzmShg9VQfutV7VL6AHiDobzooehWCk5GiDe3SSGcQDoHmFVou9a8CatVFXRV",
  "key26": "38vGrqwHXVuxYHGxHj4ets3zrQR2JA1ZiNKy95LKdYHRvAKRYfHfAzFDFeBN4WmpYbYMvkeEhTKmABsR9PTjXqV1",
  "key27": "6425DM2f5S8wpaxuZiSbxPb6XxdW1U5iCAAUK6MvU7x5hMZNDftE4CwgP6U3MDuTEeUQWEBYN6hTvULyxVkJzeGB",
  "key28": "3Lbw5v5FYP7YYqQ78Qa6a9HfASi2eSBr611egTtvb9GUv781D58tfYgkGoQwgoSorn55YZvHPBPPnAX27S5sJUyk",
  "key29": "3nkm7huFP3UB7Vfzds47CeWK2kk3jaaaqtDDDAJrzHWR9hFj3Z9AyZgtHE4QZoLY8rkknBQmvNvLTJ8Hyo2ASUd2",
  "key30": "393SmDYufPLYduo56Tj9NZsF83i6AEPTC8PiKF9KjsH49P6sSzpAKBAAqFipQRhCnGHpz6iwx1cGCgdwNrZ1EXcN",
  "key31": "3bh6qCDxXByeH7Hesp1J1MHxARMrFfNPtLYzVuDUgnHkAjcG4Jpb8cEpZc2YguR4vKFZrRw6euUrQCW3KXQxUvsP",
  "key32": "277wPowfmzCMZ7q1LyPg5GkCo55WaNGNFHbA4N4SBzBFKp4o1gp728cbbRiDw3xTQLmZnjLQQHCuUo8SxLs6ks7D",
  "key33": "hBSwexPYxRRmS89B9p7zpZc2DTuwLmRcwYWuEGDP4awW33qYXwppjCmFRa1dGn2QswZz5X6Vmxotk6ogSKermEC",
  "key34": "41m1n5EpYRjQiN3D1AiMpDkki5TTRBk818XCTVRrPmbyKHkqkB9HGJXqRWFvLHRmtrNpd69Zk6cY9nuQEjfJGdos"
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
