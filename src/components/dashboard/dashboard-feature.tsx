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
    "3PExeZUDf8R4v6wbLjvQqH9ZgeTwgsLdw3o8P21yd1uMa7jWEnpXJg7Ysv8tMZ1xuMrdmu7Jzckq7Fjta8B5Qrg1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Ft9TpDA9uyoVifw1dpYYiTUj2nCdUPAC7QeCq8ibMVt5dkBkttnDQcNNgmGMPmK4beJ2UCRn71DqNpJUttgv2G",
  "key1": "sL78J1uf2GC1pPw95CdR6ZCQ9VSWnsCDgauLGzizpcxYXpWJbV8CofYxcTeRjsfZx9FtsBRZ19x4b5VpGooWrbQ",
  "key2": "34TY9oRJRD433zWVmUyE9jjzaD2ioBtczJnseXnFtAtmVGkBq6Vqpku8iqJDHcnQwRuzpoEBHKFPgncqdMHxXfgc",
  "key3": "5HVX5kKUoiSBRJh7EoeJeUmKJ6imJ7au329YDELYhvgoNfBagM2f5o9cWsbroyms7x8hQEoqB1jHaoZr3wwhc9qj",
  "key4": "3wCKsJ57i33M4hNRg7spU7DboGic9NkSLZ9CLDdDYBdSQ4kGgQwV7zPyomnDETdmSVUCiMe3ZVtJXZuTw8wcXQkn",
  "key5": "3iqaeGH5rck8jdPyNQ9ijd8ff4pNnu6fdu84broJUYeRjmoCWE5zZb7WnXMtdVfXoRVUc4tBw1hyiaV5NZGsvkAX",
  "key6": "5efSSYmWXVJ7c7BM9vSpAyQnvr5ZPzuNkoud6LRou531GdAgJHDdd9a5ww1aNpY4XypEAv4xAjqMgcX6rtT6SN1Z",
  "key7": "CdLQfcEqq6nKW8nap8SdoaXdg1YJLZ15qZ7wAwBwdfnqFiNixHupTJUpad9nJiA864qKeNVYNaqhDYNAPfQ2WoT",
  "key8": "4b9KqBUVq36kxPenUDNaLTeKygDmS7o5mqSLFWZNfdVzK6QSBTqu2XBv7XstqeDPpFLnG5GUzcnqGCtwuDD1NBnN",
  "key9": "WyutC1fQstZuYcv2mvuMkGw63xF7CMDJuC2WRKvgJxT7RQk9y21oe3W5jqt93TuDjboGJjiNYjgWMewyachUy76",
  "key10": "5iAtnFkGHZYeCV5FiaUAttwL1NQaW8ntGntG3yEVU4piPYvYGaoq8AzWQthjzv1FEQ5Eppmjoj2Sr7qzhrQnbvxw",
  "key11": "4gdb5fcjyP4PrAaeupHg1Rgtbkddgno2YuUYyLqdtN1HBGryR31F9aY2yEc3Zx2ozh4ViccbSdvu1qHT8t8jwWu1",
  "key12": "4HRFHKDBaRfXenod5BNDWXwJCJcEcjWjt4Z6WEnTJTxQaEmBbyKTv2ieVWytsV7esA4RwaXSmQ8oQ1pSCT7XXYWe",
  "key13": "ongPzN7KMPVUipghZP8a8D8PgzDDibJoNdCsyc7H8QWzLXuwhRUpJq2MqmSVaBt89tpA79RVsfQjGdU7rQke9yb",
  "key14": "29Mz8pEXinroFEueY1LpgsGwCZUFbCQkJ4MYgTNxeHZxLiBbTAbbF8N5ieGR6gHZuTyrgejbVKJevgX7Gd7DuFU6",
  "key15": "5gNWBfePtKgtCfVLp7Jc7soEhDZzsEcFgsPEY9w8rB7oyxDgFkHh7rrukSLBigw8BLnL8j9ATEwgzrV9UMAonwsz",
  "key16": "EXW7oJUmFHS9EneYR9VXW2yRGCTTUB5dFVsbo5W1UVSCw4tqNnk5qtBBEcVTExiBru9T67oUXickZHw5uEWjZnK",
  "key17": "4BGLWvSXLFNnxrEzLtQiEKv2LwvtpzS6oNd9wqdp8qaBbBTGnZt5n5itLfuVJhGPkG2hnU9K9qLJPccSgX3Qmq6R",
  "key18": "4UL8v5cctHQeyLNpwduJxgutYkYtMTYK125GUSkJZ1Vipek4o6Vax6a84QTkWvQNswYhLA37jdTXKhJ1uUQWTrhc",
  "key19": "4dJNtZYTUP5xGVWFSX2Vc5QRDeJijxGtoVjusyVvou3w7dBWckjapunc55MPysLYNSP1cnbHaE32WGLCumct5nrv",
  "key20": "Q29oDG2SjcdqvooPWWQQzvfuz1VRskDEeoxQi5rGhyGhHPXXfojC7Jb5wA6M6toFQK5CkzHVPfp2HzQZZ6nwMVP",
  "key21": "aVKbWqqGznnSerDU5shSuFPp9ApUEAdzYsPBNWFrS1HzkSKbcvTRBYkXQbj1gib77e5UWG2CkLDS4sxQmtVtMRR",
  "key22": "eXmkCrgCEBM4McsiVvZG73qURrp3bt5t2CvQofRhtLHKk75KYgbt9Jqt2KW6iUcegL8bq5TDFQ1AzsCvDcHRzG5",
  "key23": "4cULBQNF6UBPxgw7f27XBBJHkKQwGZVHvTqeS4uM7V7BgV5XyQyVGor9mkgPmb1ipw5yMqm7t84HKCL4jvuXezwP",
  "key24": "2MSsZX8ndp8eqTkFaneLSSGGZzkPStPLEqLMsa56sNzrD9c7KakvkiozohfXukT6p8PUKDeGkKtDw8b22QnSep57",
  "key25": "4zkdU43cDTWYrATR1vaeQYk9o6iPHAAUJSN9xS85Ro8N5QnQU5XJ7NfN3PmgwrD24n8adqVxKN26gRuuCRxLtUEq",
  "key26": "5HDrv65Ak4KZnwWfB8ceNd5WHkpomMKiuZHfstvtiCenVpxH7RKuvaENnWGttZbJkLjN4sNYg9X7Ssj7RT7ysPmz",
  "key27": "3veDVko3Ls2kBSes3cN2nuzg8eFrdQabaM1GYaDL1LqXFwP2k8Qg7mYpJNLzLMujwgYJUN6nbjNynrozHft92Rdo",
  "key28": "5pz8NykgoXtSTYf7bR9pKAmPzZRGHiGxbWFvGArsNtQd296xsHAGAX25ztha6R9vAXx1H8BWsYV2JAX2XKPvzRWt",
  "key29": "57MM552j4ik6nUDYBMKsATBmDUJadXAN6v69fQyi5uMfYc4sXWFp8W9sm9DGYd1F6NnZFyRcKxeQ3WN4N7xtB7AQ",
  "key30": "V3B4U8DEhUELaPD2wWSiPLkGyFNJTLbWru7ju5wjEoKNtkvEJdA7y1KU3MbNSkYnVhSk4TQk2eEPUTrm8nDDm4g",
  "key31": "5Ux9UCUmfz9msgXftrJmYBLbDb7Z24NivxMym5GY5nSJLJnCHWRKkqvhn1nx5MfuQqoVvX26rrbkepegxMCQyBD7",
  "key32": "632KRZ43kokWm9TVvNtiP52HhD7DF71crZ1iQEWRahjvkXBH64TmmbbTujtYy7u1sF8GTeYhmhi7KGmQmH1mT2ci",
  "key33": "4H9mJG725GRSSyUUQsyGoadEgritLrhZG9TVEPjCPEZQv6SFVthtLX6uVqd2sMHUx63mA9PnPU5qW8h3f8NLrCVL",
  "key34": "3r5CGdLLPkL2oUxrHh8AEJDRRv2qmA7NrmhYy8YmrnSZsXmkQgXAdix77dVteV1JKgHbnt6YJJP5ZcQ8AyWkLhyF",
  "key35": "26ZKVfi7AQRHdQPZwhuEVpviwddE94xtZjdBwbiTjej1LsVjSnmHAocdqHcBaWjB4o2h9fsJqkpKRso1aX1aodho",
  "key36": "47yTBPJXA3KdnqJ4JTgtaCYmtxWaoZkuvBjzjrqYE5BDEk12vh31fGZBfAwcj262GgHi96qfPRtkDGa5dSZe6rre",
  "key37": "4SA1sfkNeE5ZgDhiqvo9GhtdiZz9GBx7tVdvAtXMsmfoAG5sPiE6VocMyqcWNk4rixWmrwJd5npjJUgAyR9kNLh8"
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
