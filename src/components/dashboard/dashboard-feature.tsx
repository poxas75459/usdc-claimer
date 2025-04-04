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
    "vvBXSEj57soCQ7wbYCEMAVJbUE2REvcCJcLmShp7t8wiEpt8eHRKRSgfvTLfZyu3d2d4qCZr5VRDLZ915iYj3Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oUBrLbJxenJwnWXQqpPUGpS4BGYhASnTRNMdsZUpAHGxBEhK6ubc97N26ABYwhawoQZGu2SupdirnBYKssc8G7x",
  "key1": "2FU2GViYvd5zSqxymunf4Pw3S1HuKVeymCZ94WcbYNqTiVMNVaLzfTViFeYAXFcxrcb5w4T25UyZWsWZ27vGLrAA",
  "key2": "3vCxrNuPP5QCf1ckAmr5AGb6gdwB74FjX7Mt9SAbqQUxHKBtgwU3fyUET9KqohabavFyXF29zTZZaZ9fKi3igeJu",
  "key3": "5UmqpPAs3NZHkt2RwJKn8thjGhDiKDRUYs7xFSJnHUtwvGtDJVx3ffQFFGjNBo2H6Qr54SzGCHi8ZBZ2U9rSVse3",
  "key4": "5UDHEoZcdPyPpGP5FMBKDMpYVbnLCZH13SyeZ5RFapEfRB6dLfioPUBymjZuZK2esGGRFnp1m1tHZxDZUJD6fWAb",
  "key5": "5cEx6vdR8uK2JaYxGumdpeeHp3uYDVL1pb6wWV1dxFe7vC9TnwujWKXAar79dtvfBqrzCG37JSdSb9YJV6eZMKzg",
  "key6": "4Ms2reCBk6m31g8czLGgZ4jEyCGw4NLX2Hgvu5oJSjofdUuxJJ6zMWpSbNpF6cWVVuMryTaysa7rF8uiVEtA2eNA",
  "key7": "3htKqmJmA8CVumar1iBvD1nBYumvbqjGXMxcvHxa1XpJ6Cun6cNvCP1Hs82e92ZBLg2yncb7HZn5eWEBHvZJ984f",
  "key8": "h4URq4UBRwu3qkZ2RFVA4ksxxKd4r8Cp6FpZsZsJ3mX5cFR31ZcTF1PW4X5NcYdKGiwgPTfxMGa5MBxcEhQiW7x",
  "key9": "R7gC9JLMRYwBBcf7cvT1TwoMwkFefGNmqTBWbyDRSBsRTUwhniqW5cYvqC5MYuF6WNqm8WAa4htDKvbPJSDTkDJ",
  "key10": "5rbF9MHk44Ujps1x1i7QqfYHTj9QjaQ2xBnp8DpGwKGLMNH3t9hfCyuZzZjLwe77TvJF1BELXNgn38MV2qcTCyqt",
  "key11": "27n3Q1uRoAYpWWauDup5Xioq5xJXjLpyHRJchz7XuGGgsmQF2S9r5H5NGAB2WvMuSkhHZpP5NH5x4KpYQMevg1Xq",
  "key12": "5tc3ZYyLKPAYJsPLvyvCht1hkCZAQzvxfP1zYWpZS3Fu66nGT2DcBGs6FbiWLoYkuAe9TfwFkrL58V4rbFfxq6G4",
  "key13": "5yVTcRTubeD5YdVxKothahi1DrpNj8k13Ks6PAcpMuXqZxArW5woDbqkyoAsQqexovXrpEGANff5D1tdT4Xs7m2o",
  "key14": "4DqxbvUg9jbbhJFnvmFLneR2YMm6FsAedobtquqATqyjUqoqSiDSdfSqTNbMcErELsZvASnH7eF2uzAwMwkcdsz7",
  "key15": "3dMbcUHNSUddGzgEhuPiWiUnXRtAyu1FJXe1Sj8BpY44NXWhR4ibqnvVGp2C7JrTKSQ2hxmk4784BLexUpziE4DZ",
  "key16": "3Xrnomm9fPAwrM2Svy3x8fNWsLJY1WRaAk1SnsGTES2ewtsQDMMqg8ZiJf8i3zFGVbyE3YKHwxwxMt8q1MA33SKF",
  "key17": "2NgKF2vCQZT2fV2VB5f3jB7NNLPjfYbzaMMGdAtyBwUEYEgSEBTiafNXXMjZsVNQcdda1uh2R7VjtVFoNXEud73a",
  "key18": "3KZPXDcREt3UXnpsQ4qkNNJDQqyb2dSUwn1JhzyBi9BqdF5KeuMs7grCmof7DhAzH9VMt2roRGt7ohsbbc3uB3jH",
  "key19": "5CEyCRww2RHcocXv1gjNDAt9mLxToGneVrZcb1Hf7QunEMV7EjTyrTVrZwAinKRL9h6c6Gm31tefpt5wSsh2jpP7",
  "key20": "3Fdn4r6saivHG54t8E1MnpMV5kt8qTGKd9Gs2v6PFkmhoesBQBhPiQygNjzzdMVF92pfBitzauQKRABANGmcLfbJ",
  "key21": "5cRfX5uA81PGYmKrkVNvaSSqJ28zAKuS1HApa8tDDbezTtxoiog9R9ndiRUQGe1PQZtjfDc7gKa6M81SEMiaVu4Q",
  "key22": "2XojuJUq2xyjGdrSnFHCJeeM99u2eVThdsiLXhZ3nftjTaMPhvf1fKDm1QzPGKZxjijdd6H6mvjpajSHobUA1jB9",
  "key23": "2CvhPVPkNM4wwngGw58MGXBWgPfZJAeqkL4QHTvwk2XPegAv5VMhx9faLjxzBv86RRGGLpeWx4JhiUnQ2XUL83kE",
  "key24": "5yG6eB34H9iFZQ5Ny9isjkqyxJ4N9NLSYjBrLWE1hys8aPc44pEUB5yQqhCeH2pK6V4z5nbWovMmb5naH64QXNbx",
  "key25": "64RmEknopeHBXyx4yyUa5HUQSb35QDEFBdaDd49cwRGKv4gebsRFjYTuwVPHho36CA7amSNZmGqSrbQKKLV797Uo",
  "key26": "5P3B9KUrLoADTPtq4mBdehPcsSUhLV7GBmcviWpQYpRjvPqpm44vS3DQRuYJCtu2rpfWdsSKq1B2QvhyRL35HgdJ",
  "key27": "c4cj4ivnuLNjpbWZ8ykn3D2v758TJptt9uR98doHsGKQLi34E9KDbWQzYNYNNK5KZqBGudRF7raCD9a3MvGmcUZ",
  "key28": "3KcrRhANcpaqrWKxAp2mEc4LBFiVK1R68ctrpJJfk9Du4A7ey1mSDJWgd7WtXc9gUJa8SiKaEsZmVLNCVQbADz3v",
  "key29": "3fPgnZR4G1AiEpCNpZjGhBc1aZxexfKrgwHaEneS9WQrJiowy3wL5M7VymDin8d2UfC83So7qxjno3QezNw2yjut",
  "key30": "5F8QG584Z85cTEp1etsM2L31cNdornwHA5fPmVXCbGqEZkEGLFPFWBXenqY54SSNtibXjBWB2b7bX2t1BwoUsjqo",
  "key31": "2nisPxibnF421kgKsVeRziyweKBgWrBTuTKCaZ8Y5JCbL28bqZ4LAmmUcMPNKaBJswXSpWLM2w8Hy6DUJuxyKdiv",
  "key32": "5Nc2GsWo6MaCVNVRpKDzv9d6XDpNtaRZJ2wu84jzbxB1q8JEDwLZRbNjo3RU8GJTDJrZN4h2KNj6jcT1ZsnQaPAY",
  "key33": "27YXJXqh31kexEEVY9sQpGbSHbn4eYT7BLcqkQyjFpyDhMnS89ternRsGbaS3uqakwqyoEhpDm8TUuUswJo2e2sa",
  "key34": "YJZ4UcFKfJaS1Y1jZwbT5PsUPuutiry84Wv16ugRQ3ZNsS5yvNxp2LPG5sPEKm8W6mTBtiX7J7z89aL4BHL79qA",
  "key35": "2whR32ncvv34LhH34BTC2dEns3bPuxeecg7XnKbawCiP8j3bWwtKNaK2sCCQPxGL16AMc6D6AY279wUQSYQkp7fm",
  "key36": "3jNwRQuWjxE2AYF71q3i2Vp1a6D3MgDDasnZW7yCrUghy1hkk8RJTL6ELGdXQcabco1XDc7XtsiodioCDkjVgU9q",
  "key37": "3KfMgAF4y6c9BkBmkEpzWQqJmjrFcp7hGv1Rr8vf8JuEAMtzARQUwZ1jMX7vvxcVknVTWgKChp6FD7TAQwqBR16w",
  "key38": "2dSyamBYTLEqVygweZx3di7e7JwHH1AEivzgXvSHWE73gMA8huFWya57N3uJH3Wx79N3HyuADAG7GzuJxo7gBENc",
  "key39": "4cKUGYxh3HRrqUkJiEvMYW6nanP5HATpMJmbZLBEEpYRxiSyU6d3rCCgmh7LfQBRiLE6nBrH7XkEWMWgKzi95jAm",
  "key40": "2gTH7hxJF7xFLKBXpkj9chJ4iZRkHk8Zm4AzqHh7rBMraxHxK8Vo768UAucoE2nn5KqehsWmfwNJv2FxNbHqEWsP",
  "key41": "3tcyGC5vA5pRoM8vfWrB29CthtaT8E8jYk6VogQBbhSYhoRGXopiwsCEqTraiKcdeNaNTCk7KztDnwCHBU2zJ8jD",
  "key42": "3LajhjBtMpx5WP8NNHEJNsP1iGQ2RShTc2xragDy1XKb4Jm7bX22Tg9SByAPjP7n5HhfVFJMM1KHz7mK53gkzoTP",
  "key43": "2Kd6ZW6sMdY1TCfmdFdfBTB4WnDU6oZ6bRrwVjuwhRQ2c9817TX117sqtPoRM6wkczfMUJp5RJCVeHG62TaQt7b5",
  "key44": "aCmY96ZJmyWvSsz11J6eWa6FRu28dWfzG36Xy6BuXuv8Ef52N8sRsWkR7Ywc5Rh5CTBS8AeYj4gBmS8AbSLdts5"
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
