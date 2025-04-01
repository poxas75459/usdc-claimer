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
    "m2y5poydib5KfhmfguhsitNWWFMEtaatp8JcJvZa1Wr1x9dijTxkw5kV7Wgc4HZ8J63ykA3k6Z8oemgAnUvMp37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ViUZgECwMyR4MuoK7MfrKTTrT7KzSm6aTU42EhHFWLrwHrCW7i2T1SgEAJ2qxZVfcVT9oEZBnZxzvGHUwB3dDoR",
  "key1": "32jnBVaqJjMyzCJVeZV2T4eiv7aRSdEGg8eHZiZANdueiysP8h2TUFBsTPDCfNBRQSYv5FWUKzUsPK8YCCCKvf6",
  "key2": "46g37uFJHGvd2jvR84jejAF5aNAQyBxk9KVGA3KUivbPFSPsij7SFG5tradxXpU8MXmkvVeAMTyiv1VNG9x5Zz5f",
  "key3": "42Cp3gG7QGrwXhs7pnAejYEsenc7x4QXcih82wQUJzdS7k2NLpGtrQP6doh6rQfpSi9Tg52k55gDRW8reLb82XJi",
  "key4": "2SNJCHZFz5MhMDAYcvmtXVjroafM47Yh9AsaDYRWtZg2SivJUeqrQDpUaTMT4pGdFEUhVidmKNvJbGYU8jWwLR6X",
  "key5": "4BdUDy7TtNKngsTFNWnJYgqMQuK7ntVQ58279pJaqfjeKvhwbK4erREP2MhW4zwjPJ4tWCKS7M7eZ5gZAT68hZsC",
  "key6": "2P52t4X6Pg6fQ1PZfNV82iCVGB5MAtp1rr95AHmCBmFydSMxmaNW8wm6qMVT9ZGeNJXjWM6kUYbNQnUtKKpPyrpp",
  "key7": "2UFTCh3FYPbPMqUJHgJpDvWrXqs8YYigCzNFi8J88PhgZQH3vVrs4eHFaoDMxqJzDjomGbU1gCHPAramWhS6GLTL",
  "key8": "qzn6yLAYukAbNqKj1xdJ9y1rBiiSwNigDffsR2gXs1X6PSGRkMLuzaqug9d4xEpmo8jj7n9wV3wK7QogAa8Mzw8",
  "key9": "5qtBA4finmk86uFK5RR99yEDDc8t2zaAupsMPGHLmqdMh42RQ7mpmQiLbMxdbPTyyk523xVvZk1iMN1WHzjnLQ31",
  "key10": "3nP2o9qnNbk3JcUUkUFjqXt2Em7z5VsCZCUVDjLdJYuCkUh5EUA9zL12JF6haFFeXNXxETq5PLzrFR2BL8WFr5kw",
  "key11": "2YEKWpgXvn8p1DDqCJm3yc3HqzgF2tLgrerjpiWMZdecMV5Kr39oh5DHEAUYFWkMg89LvzUGoWmGDhk9iyhsS4Yf",
  "key12": "5e9pBRZCKAUe4gXNMG1FSFpYPtDkteWv1J2AtrJbafkZvA6LgLU529gHF9iVPQ2s5ttxMa1wa6oNvAiDEbG2FbJa",
  "key13": "4wnPGjYNGE7PhshYtBrwxZ7jBmFUyAsgEMGK2kbDonpbfXAjpa2n9QZoQHp343MF6qnMKPsHVkFpJYKDHWuLvo5H",
  "key14": "3KaYaD3ar75nJYsnFYgtqzCUW14EvLMHUviyrttcMtaJEi7uxwFu461ntY4CS9vPgrvZ5LA9dR4VCNKn4RXEbZ1s",
  "key15": "4y7mCzKumPhc9WovVcWvs9kGgjKWPzfgM3WjNHEP5vP53mD64FBBqWH21bC5p5kuWUKNjfquz6Qawq7yTR5BpcSp",
  "key16": "WVyMwpP5sSxMPSVqwfggW9B4KWThTGLLcoT8REFg1TTDFaXLerYK22Hg7XNvTiyj1ZcnL81f8VptRJPrU1nxmJW",
  "key17": "3oHoq37WUTE9W2mniynbkZgvArDyJpu2ZsryVhQ2NnRjVFw2Ydeviv9cMzSvnYejsPHLEWM6vMrwxgExYiPrdt81",
  "key18": "4a4Sw3YAqeZbDowE183sBD3ARYpPPWKCLerVzKgkSdCrZtfdakZde99xSj2YNiPYFBLGGQwGvzCv5Vp3Snz5LX6B",
  "key19": "5twsUymtjmGDPKqhFuyt7Eq8VrrsV5S3FLccyGyKLvT1YTrcGRBw7mGxxaimbu4Qudw5Z6aNWcPAtW17T5fteDB7",
  "key20": "uDbXxrM8JBhAHpH51ayvY4C1C7XzKEEK8iCpheiYtVWnncaWnLEzCdGo5v96sdVV9wFdHFTYQQm9zMgaNARfg5L",
  "key21": "4pfuJtWdJ943zKz17xVPzzHvP6yuNUENjLHCUEnfLKb1qvsDz4hY9xnmaGFYKYZe629M7D2E6HCjLRCF5QUK9Agp",
  "key22": "BKPdpU1z3XPqkgFSJozRsSdXxtwDh9cE1yFC8Pgwep6yJcv5kD2NbQUeu5z1DMMXNfKeN6fTKCoZSwgMKbYQnLz",
  "key23": "4ke3ig17GVtJoFZoSZtXEKq5cHydKPGsLSvGcNksLpE9wpQWW6sWzLtsi87aphrw2sUeuLAjzExvK4r5rF7U1dXL",
  "key24": "2ViNAEDevXTsp3FwNA7fVj4XhC4NNXnG1ZiYuiKMMk6iVK2iXoezT97WzqJoMoK7Ma1A37XRp31Fz4yfCLgag1vX",
  "key25": "43iVzWkk244J9ETsH39MmYn5HBW4MPmxrdbESvPQinzyoQL8mUVFdP284R6WUnrj1xa8qJzaAua77Q8JyUjQCEhM",
  "key26": "7VtE7cFmMR22Ve4PjbjrZofkrVSwKLJkfzhfXKoT4mzuRUYdh6EBRQoqR7U69n6LNKUYiPb6sjMobTzdKU9zUBp",
  "key27": "4XYNnW95bVsSRBf2V5AryEbRJD3RoxxP3X4TrdhbNh17GTpVHu1v4HsbHNMQ1SFSWubSskMNbevYKru1znpjwQtY",
  "key28": "7qkDCVUkJCbytuyJcw4TAwiQzZejq98SZxwsppdZLVPBqAPFQbZgUqCxRoxNdGprbN5N8DAwda7ap7gemvotGRj",
  "key29": "2uSWafBYMMcff1iogPhq6LjoHDftQMo6jcSRhmPFFzqKqHeZx3KPjPTr3pw5fvouGyj5p6AjvF5Uj5euTzdEMfSh",
  "key30": "2SZmDWbCQzdf9ZiQPWBSDyb1apc7dvwEzvTPJ7fTTF4V9ahrgKSLZoUQkmwcwm9QZn3o9qEqbUDVQapJ7p1TbUYn",
  "key31": "2QqFiS5eLNn9s1DiGZNZuE7B1vyPCMXgvQNtLFx1vj32aM9DoiyTMhFgqJtE6yjbZ7W3oP5kiH3jTWQxJ4UkjLVk",
  "key32": "3WBAGkaGozQTACPw5Yyara7WsDEnybZsxfFqkC7bGuHxLFe6vUK3Ls66fJwHv87xK5qjdRxjsbZPViUXKuQf3tn9",
  "key33": "2ENzS6BTsPrgspjkF93nbT8LK5qrFx1Sj3q8gkCrZfXucp6iLu2MufMEqGZhbr5xLwr35UNganx8qyPvDMPY6WC5",
  "key34": "5HRVZidqXwuLYBNScFy4a8BCTtd3BzsrZmkoyStLDB8yUoXr6EE4AgiDCpqR71JA8XQGh3a3tokBgQanz21tU2xy",
  "key35": "3TFJaLC5drfRzQkiuNP6KGqFCKfmyduCVaLLSu9XfhpNv8zEYASDD6hoet6U9FsxJzS99egYFzQdVAoLxqfZXYPZ",
  "key36": "xFH1ESJhxUEXeqC71gZWJJqmsCbiHrWP4pRt977q6iekQnwp3R3ZNHyxM9qH1cXraFiNsW8m43PJDf7Pc2Wcyod",
  "key37": "37wSDNRzkrmivb4xhCoY2riZrG4JE93u5ApW72jEX1hNwySyKpeoXVsw5hogD7BVSpuEEL4omZQ8kGxDewX74tu3",
  "key38": "2NXVoBvEhuyxHaKqbp99yzE9W5RMxqEcYTpwwDiaRAwJyWma4CYYqwVhUQjpWdn1tY1iRNNdp9LS9XvgdknJdQMi",
  "key39": "216FxpJ4QZ3wvgppyMWi1WUQUGj1VrUav3xYdsDpfD8h8J95kM3hTJubEhGDGsjtXYchjQDXEra8ygqESR24qfzP"
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
