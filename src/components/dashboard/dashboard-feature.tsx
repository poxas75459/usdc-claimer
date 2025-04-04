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
    "unHc3HtuBVTXZveCA1vyyTnwgfMvGjwpvonYK8M9xEPDYDFnZKwaLEWtWdiMf4McKeRfFa7wVVnS2Z2qqpwR3R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TsKpCfZEqvAgq2X1X91rPQbnWFGpSK4DE7oxntqCTSYepTU2CU289ZSs85x8vvf2nJm4dRUdrH22Q6swFuoJaA3",
  "key1": "4A6jawUcjWMjSjud8dXCbBppo6mbYtLQBSzsFViiJLYNvUsLbuVvMvNbDub6Ld97qDPAQr4ZqCXRxpdLyXodoyF8",
  "key2": "5tHj9qNGbssqREKVY6X5xYKir23gGrruw4pENRQTvsocwx6JkMD81ieDWJ3L4pjeabKCbiJ5AMLMh1mHms4FYBzo",
  "key3": "skAWj2PFWmSynAbkBUMF9TjN3joFkkL5FzpzSYkys16dXLqmQT5TtDnPqBtMH2xtX8kCrVGQw5jbZtipqsoDK1Y",
  "key4": "4kjnx1QuKFpfRydf9UWsYK7ADJWtqjjeiDkRE1hzCVMELVb4EG7nN6B4VvUcn657EGhfoUrrHieh4dGKQ1GHPKWp",
  "key5": "5mFmdzJKVhNgMCQBNGsHTA7x7rcgvjTepnn2JQNnNtE8eA8aswARgmXvhABVF5dxoL5rSD7EY3i4nNrFgnnheGag",
  "key6": "7zBd2qK4U1mFZP5C3mk2HApETHndb2G1iRqeKUn9VhtGdRexJTpigatmTB59b5gpcKijHNv59mxQp6Eah6LEzdG",
  "key7": "N5ATTpX1wpTFBUoz9ut53R8oeGRi58PzJ9RyHngQCLEf1ujpkKAmJMw2ZUdFYMYfNKhJss1mqmfFpwktS4vxuEj",
  "key8": "i9rEqsQVy9btmfEosQTkVWX8aUwk7ojvGv5Dvi8Etu8D7axrcoLcucDKjy2mcMyYVYyXphk5BcjXpyHjgK7d3mh",
  "key9": "5orWCtvo9aBCdLYpYC5EXEnvrRzMz6P5ESvu3dirZocsZiuRTvjJcQwJ5Uivg2iHZCeCfZPjBuyxNaabX4xH7Snz",
  "key10": "67PJPPn7WWKE9LTKx2i5XrXCzjGpEJfFnrPx5nugehqYBGdZVAEXFr6rVPNxZGMLDdN4TGYfNPNeaCKfZga7Ct1Z",
  "key11": "57xjFTrNZFnDMNRMsbdA7sqEdnyMShgQb8HBgfjYrybccEH9tnLS8RMBBFkjZtUhcNWxtnzv3CEeBnZXFxgqVrPM",
  "key12": "38dnMcStunRTL8kvSyokwUWc3wvpFcupTGo3KVD33DdZFo6LCAcBCH13mC6E86WzyVwf6x3ozFuFhbWJFRoxoMBZ",
  "key13": "5piNTkK9V5nsxZGrAR6vNqdcSw9TzdFU1qmGPPiH7JMzuySnQN1zXVDqShfa7np2HGoxqY22kKxUZXJtwCWy9bTT",
  "key14": "3NErc5Lo7okQMecCb4s3z3jaHfiNzrcKo19dNpMxURGFMBw7frCEJDojfKozH7KBeGuZHdsKkFNap39X6oJdsriv",
  "key15": "3A66P9Fa1pf38HNCJzAd2gwJNeCq8nQHshtYqTpjnsruBKBVchmg86v1oZyVUjCSsoMqoXNTCrkSYojX5Swnwi9L",
  "key16": "4SzxSs8sAg83qRAiCQkifaHgEacQxGxAgRoNyWa6yMkCYSgDD6DmtRhzqypPhJSbhWEPpTqirPwj3LpbqvTWkvqq",
  "key17": "58uNYcHzUTRBav6SpsPvwyecENvnb2miY9qdVnMJ4xwtnWeHq71ouDAjC35a5P3bwbZmaE4uESmUUvrXDYs72Yja",
  "key18": "5A4qjsJZJyKkVYgHQW9YdngF45MNjWQ7yYsba51ZpxNk4RyKsnG8gwokEy21DAb7DUtKPQWc2vqn4tPVk12AqYRw",
  "key19": "et3T1t5b5AAzaU2Hnai3S8zakFhVYgTLTPQ95bNPrRY1My9iNyU91Vt25fxEUzsRGY7xAxQXMooQVm1aX8GGhvw",
  "key20": "2pftWa43VXhUEtcTZE712Gt3tXiaXP1BYsAU4TojUH5NG6rxuX54eCKmyXcyXUa8UCGp6d6o5MesbyFFzGVGjo82",
  "key21": "4P8g5pK2NBaiSMcaRgv5X8U3TJKDimCxYNWKiLx2TvnTHQB1eN5y2wjwEx6rBg5tj4Ks3PWn9bN15enDETta28XW",
  "key22": "5HYyufzbUnqzg1PaWtdv8e98fNF2cN7b61rJ7m3jknssQJKb4YxoHSWqtd8QsQofECb1cUfn1QBM979q4LLn3cVc",
  "key23": "4JvLUGA744uJuH3jW9FZ9zctDjerjzYPCPYDNf6qKxjPsDouaKSBvwSxHKiJxNKtrWGRVxfowFANdyMoKLhRaNLL",
  "key24": "3W3xgHTmSCiMoVxbUALFXjgzCyNPxUUhrVyD3GpieLXZbdLaQ1AnZEqwzS56W24zJPYZ9dRsZUbF7kWkCq5vACXw",
  "key25": "3bgvF7db13jtKDfZZnyUdwwm1EP7vKQUcfZq2Ta7pQyBLAdvXFhCXw5gtYR74JbAQSgqrVxzfbMhTQvjabzmzniv",
  "key26": "5zr1G7rjHuTtKKaokJLKvZHZsVC1dZPJ2w1aJeYjRrnErLgiSWFWKZjT6xXDaBjyeRDwBbDykwonDpHPVCaa41WL",
  "key27": "53LZaC8m5L8vN7vGzg9BSeZH5F643g8xCZjnKML1y8QBjH7jRED8rBqFwx9yosnxvJwfmmgE4vPBtpAfVBoFJQD5",
  "key28": "4UA34AjJCuxaE3FUAzy7VFq6P2KQeBcaPi62hy3E67uwcNqm41zZQBmEcLQQ95d7dYb8bdf5vRFMK4zhRs19bAmg",
  "key29": "5vDLT1t6nUDFSayxXroeWFGd6pJCbkNaUYQRm5id1FLsLEGcdTzbkm8ARYRYSrfahmSy6212cEFSF18QAySpnkHX",
  "key30": "27Ap9uLM6ZpAuyxHJ9AAdjs7mQFN7PxmeEAQjmezkVPg5AcCVYxMFGrn5UXjRnKrQCU5XS1TC13JbZmdU56SmNPp",
  "key31": "3gMJzMyw16A1bGaYPA6k1z4LAMgua7wbe932AEfxta7BaTviqjpyznjaYKaeFZGazcNzDyr6sJfG1TgKQ2ayCNRn",
  "key32": "2t8Y2qZsvxVw1r5yRYoiyEpFrVT2RRBCBdEkycS2bgixrZ3uBEqyYCaK9tUTTUeL3FSWHtk6VWCG9JQ8i9HtPhAB",
  "key33": "64MwLPRj6Lt8jmemr8LxaaPRMzDHdxMSBFbTBqL5S6T6tEastrQmYWJn1gRzKvySJkV4wAxWxXQSnih8Q4JMD79S",
  "key34": "394CDvfd282FvNDcXyGsN1CSeiFDfMhhbDnPNP5w5KbfEDJUswseYcpEVzwP6PfzUN7ZByzEdNkbfodoWQKvPQUQ",
  "key35": "2y36K4oYUKpWAj4jFRStSCM5dFgwGTY7hW5TFX2TZVEKjKfosUGGoSCjXkAjmWGdFJ2QaaDKiZ1aDs6gwXqfG9mS",
  "key36": "64dnwjwxDZm1sBMP8uLKCX5MVTTRALhDi8LSvZBZzAS6KkXEKQoWjN7kEQpwoH58XBtbrM2D7JDuf9z4uTi2rrwv",
  "key37": "3GSrzDP7m3zSebfwcZwaWQjtLm7Hucs9nyhwssjGaCu6is7tPR5vyz5iBagvZUcJNSTtrMtdL52rGTNf2QTtTjgi",
  "key38": "4FaQx5tz3s2k3SxvaVw9m42GyS3EJrC734amGBukHBTa67qqb4Hckza5eRV9fXFjyH8qU7Z2WUagRUUm4fpEaXv3",
  "key39": "58G78KkQAoSDqY94C63nvmszbTfKrth48xp1GHExuJnsJHpQNwGBnHm2rfEB9sPJnGkeJE97kwQkYk3Nq1dq2Cio",
  "key40": "y5Gdj21AufUDHsHQmhDWotDHiivtaKnPRDTfm7u8jMzPPa3ZEM18NZbTXcttwDdabmca5dbLVStPZXSBmi9tnYh",
  "key41": "2upWBVaeGAeg2Taonv46ZPSemiVzhzvvS4XsjHQMn4pXLeq8YtXVZ8hPsp1FSPhM1oekUDhcDJCmTiMard2FbXWQ",
  "key42": "3KHFsNLYh2jFYHVK1WeMSpV2dWFQfiuZTEgYVGv5SN9Ftu2hG2HfJTFcRkdEs4rfgCc4oR9EHK9J7Md41YHJWn29",
  "key43": "jZTsmyySEdpNMDrVQnBH3PAw59t5YcNfdJGyABrZeh4tghbtKFqQz6LKJZ7P8kGctFQ9TiXL4dXGPWLDTq1sD83",
  "key44": "zFm9UFpPPvJpuonav9wekLSADkmDfLaS5RtgRPAY771FLtQCjtg9X7VqHfZgQTevozhvryk1P9buVviMFy3zaVy"
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
