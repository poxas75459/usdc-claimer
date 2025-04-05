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
    "5gmd9z8CYwosm8g9iuekKtDi1kqHsdi6xwttPSektYUSFNkdfMpYTjUMuHQPz8nVkiPR8QQqxY6gGDtBbA4ptPNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yqTxB976L4TgmC6PmFsdgs4ECvZi6g7LJf4Ghp5jKtD2Z5VyhPthnaAzkBBSGqkzWfkAgtoXe9hRCgH4tkBwPkF",
  "key1": "4oufVfWujUZF93oayzy4VePq7NP8neavSAqf4ZJQFxSMwpg1VQP6bBqGhsGmkoiA3ftZac9y3JKJyur5pUgqs2Ft",
  "key2": "5LJ6MqCdEQtCnjciG5YahsMLauMqnb9odnwmopJBu5HafZt1v1C7TbyAxfarzEraFWcQ6f9dKYV9mUWEGQS3YEaR",
  "key3": "2ZyedGLBTrG1rTk6QMD9DjY1oHvQ2ovna8PKeevb1yxsz1z7QEkLMVA4RfNczaCrJAM32sJC9DfBCC2nPTqv47JV",
  "key4": "3cA6VEQCNV5tFbDMzfgTp5PGNBFx3n6cweG9WtBL8xAUnfMtfyFw2MrN6sumDTEAZ1soEXGhLUgg3yi4v27zrftz",
  "key5": "4mwCeYRfXDociutXXecmsUmNppgmvBuQ6qCPQb1iEtiBczMA9z3GCC1z8mBJmfNbutREASawiytNetQWzrZ7cS6w",
  "key6": "Ev96c63tBhnCH9xtXQ8BR5vwqvv3nH7RYimi9ypKKeJa9gcTZXMHhLK7RXvi5au9yrS1shQDRauteaus9B37x9n",
  "key7": "25EYz8BRyMr7xVkpMWQPYNaAsRrxLKQoaXvTRf9LKzAH12BBwuoMBqRDjXQnaQtTVVZY31ZRifJasojoJmxVgd3Y",
  "key8": "3JKZq5Brd1qTDSXG6tH9VnK6EuopUXfyYgSHf1DT6QdRbPA7ZzJ5cKHn9DoLozRZ74fQrbptyDAwiJK8Mp8b77rS",
  "key9": "2LgsDV8UYRihRVXUz1y7kTQVHJcswty2ag7FkDpWathtTgbuuYhsE7NGLt42kY2UCe62gd1CoPK4Mm7PTVfGCgMV",
  "key10": "eeYFo72A1VBcMkLXH5gzdi2HNMFsSnfFvU6BuuCywfC6Ydacgvx6nk75HrvMyVkRCVjV3H9SJJLTTqdtUYAF8UK",
  "key11": "3NeJtR2MnEmr7YPxaMZQttauVfo4zNmyYtn5UqcRHH23GPhWvPVLcYrK2qa1URR1ar7MgXtEod5TyPUqg9qmCd5c",
  "key12": "26ow1JVDrXqWCAmgnc1Q5LzBtz6eXXfdWQiHEFyPG8FHUvznyZTSqfwR4jkaLiTs1W9Pg383T2f64C77XXhPyzHw",
  "key13": "2Lh1xa2oFuvWqCKLsdmExbWYBsjWoY9aqKLWMhAd5qpxWbybinRNWeT5dH6ZG95WbSEF9v9Su8ULw9FmTfQApxyH",
  "key14": "5uFbkp9vCkmPJbvA1awnLWTRqnKfsx6uQZNQYenG2HNYZdGgx1bB8QFADNSqhYT1BChHZQadEcEuC2Ze5FCwmebA",
  "key15": "2WgS8JLXfukkrJfWjT9Eg24q2Uj1mSaSL27KMkpadeoThNUyWQDXXKRFrm2XnQsZUxhWhs72J17PGzbQkTbmMk4y",
  "key16": "3ChVRjmDrv5ALT62e35Rs3jj7a1neUqnamHRg6CgamBmNwZehVQ2XzYhzyxehXNT55JbAFYd5hw7VC6sTdq2uSuE",
  "key17": "2kNsBq9zKxUzomhdfZbvLPTKsT2GStZrMoiQ5tcXAGxF36HTfrEoZjRfZVt1RP8b391S2MQg1V2DaP36GbYaVEmK",
  "key18": "2A1UcsuJU12nenu1sKDqTm5oa5XL16AKZMcbnQ3nzs3ae3HNJoVnL9o9KmnTh8KyomXbfT7GHZSSzxYadQmQNKXd",
  "key19": "3eSunvrg4233No5bSBk8GXv2VTs5RfwLRzTwRB5VJhZrTzykBGvg6Dq7srNd7tv5mBV4dc87FsgGKA8B44AmLBTa",
  "key20": "2cPYf79Q55s8FQA6qqDDZy936Zuk6oVD3hcMxzn5VA7i5oGd4QMpQZKQ8u4nL9odX7yomkdPoNr6bVjFTcHau7ve",
  "key21": "35rhwNetfTFiAwscS1kvdwaRnWYHuG69SY3ApNLT5D8JPNKPqFEVXh7a5hPrm2aAn5JSjvLCqwdhXitekXtypsHB",
  "key22": "5sec78mH1yJMD94jV5QKmvh1moYFeCqiNb2vKipMERLiMN5FCkWLhpSx7PrjqUGakBCoryMdgcjBrAoaRtVEhEoj",
  "key23": "xc6qxoGpN6vbkNzVnDicbnrvSkxbcruSDq4AW2RixC6qt4M95SaWrq431dN32uuGaL9qQPxkR16aVW5C2dJtC9M",
  "key24": "3yimMW3GgvDDWv72y5N9P8egvxxD6iJtiNvsJbtqm7kjq3hLjiwhXEYppY5v7pA2s7G2zWbQ6o1AwhQM9KnuzE5k",
  "key25": "51uh3fNuqdHL177jUXNTbsXPmW7NPLER4GnTH8STS4PWiqMMAB1QXFXaaMTjpZ3Wed2ppkq6Dz2M69yZ71NogzA",
  "key26": "67UgE6Hdv1XLd1qxMFfywoTr8oBDvMhdcrF5jjSYNCMp6YrrF7vnBynDnyyfHYvCsuv3s5JRKMYHvYSWrvXJn7wk",
  "key27": "4BvyFsDSJ19kEzshPp58f6vohJS5CXPPp3b228drxuSmTuAwUiDSP6nvodJti2gmXMiAVHGRCRKmikXrPnugE9Ph",
  "key28": "8p6GqkeX3fNYu6aJW9MSU5ND3AydRPFfJpsTXZXR7vJ7ys2X2nfJiR4XPL1tiQJWkf7XGra3CPvfxb1vAzYDdXp",
  "key29": "5UAZArcdnjtKWektVi5GBDuAKLeLZi7UkynKaPURzFEmUagPPZ4PxUJtYDbQcexgeqrvAxDoMBSUa9mD5DJ8J3Zc",
  "key30": "2zTX4ZKae8j9BDFLV4w4u2qaSwG2dbGP8cXdkwM6cniaWtUjyaGd9tDGyN4XbhrY9mc977He1fWzHkxLqfDb4xSU",
  "key31": "56tRu8yFa6MaQ7TME7PSyoc4NyYYNaRWmfAufpYK8ta1DwJfkwJUcYwZyW1DZk7jvsgBz48ALpd9g1zWtMPoY5rm",
  "key32": "4Q9Z6mMeY3a4uqyGhAN7UYk4rBu4R6nGQmNVkZd6dUdG8jRMUN8FwhYbVh3KLWBwNvrJB8xnwowrDnJfyYodYHqZ",
  "key33": "UxCMSj1QWu9XNQEzWNLLhjFrGTAfCUeSTtK4L2LnB7fAtKe9Kj8hKQ92kHB55qDfem3hsk6HvuqiF6aDsevMXeA",
  "key34": "5oEJC2Azyp8143q3sffyqNC1tF2ycF7xpQdUEJi4TH3KpXJ8UjorGBjGFtxg1gSegbQRYhzJ3rEhugSL6j5Hayyx",
  "key35": "2o38L5DGcYyaJd8VM62KDY3H5VcGLcvNraaUhnsH52NN2Z8gjnUSUzaMBh6GW4PVw9sPYtxo23upkwMzYTJVuHKG",
  "key36": "2No5gvwxN96gejmaEeVLHLjaFix2hqR8vCQrD24t2UZ3ypeH7jgQhXVjyvhgHumpGoZwBiXsL6EkNSizxy98NVYV",
  "key37": "2tZttkBPeikqZtNmYeuH4VLmJX4X41fnYHgQndVxXPmCvrfhZhqWe8thaVwxxFNibJ59ZTXLu7gE723fAavNXJKb",
  "key38": "3mYWA71yqGX9EZzrFzQSketC8KuvoSJetkWoQit73dAXnBvdqgW12WZkmdE38WA8STp7W5jrGwkeRjbhNDmrt5Er",
  "key39": "3N5thi87phjuHuo5rS3FfyLyhiVen5sjVBp2omLLcyMqSdpJacvzXv2rG1L32wpP27P7eAm3GBRfGEzRGQQL1Dax",
  "key40": "2tAQLcfHgX1FhB4bpTarJ5hvZJpixJcK1Hkt7dQFXuQjjuGNB3YZPQWt3Y9Q8didvLCqeffkQevx3oHpn4t7eeKM",
  "key41": "43J8ry6VU8vKvLDeLe65XmEV1AQstrfiukyKFww2Ktc97aH3duwZzFEAAkkz9W5jS8bMcawLePnPUC8SJQDTpVQa"
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
