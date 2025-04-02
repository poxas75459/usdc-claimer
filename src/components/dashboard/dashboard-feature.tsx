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
    "KATRVn4BrGgyA7tAM8mDS3w6HYBCd5Z7YHCQTJSSQMDKXsmMR8owb91tYYM8WWsqHkgFdqpuP2in98VUUuR22Q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dQJGQEeez39MV6dR2Y9VehLjpTdt78kUGi8GGnJnTNhe7VKe8NpC5JTwv2VDBvQzjChkdMyhU9HUu55WsRpgQ6J",
  "key1": "5r7K2wn2sfrDG26PgUAc2r8AL5rujPc587mRLmhtNPgHBQbEDh9E95qJSEsoa7XMrEuZm8wL2B3UuUhsNXoLEZXS",
  "key2": "5ar8aihn794JyhRHzXB1SQK383HGD7JvJCxnAps6gVAqFmQVW2SDJ9hYRrd5W7xdewEAHMw5VccbdpH3e9AKzdU8",
  "key3": "23YH4T3R4YZsSnDFQ6whSQKPmgKqwxVHD8AtLFHdebG4oTNpbjtAYVXqjxBgVt7jUHRzdK4urHjN2AiEx4eHudmZ",
  "key4": "PTDK7m4jRQEMPqtW1YXv2W3nWPE1sEXD1Tzg2K3Ge8YEunhCoCKgGQamGKA34VqdXRHKCcDx1ytCxjQfaoRAH5f",
  "key5": "3seveDnpJrKMrS4tRybm1smyDydPB6NqYutQbVgvKyMzyuV84ApwE58kUVnzMUDUrrnp4Nwo6hptu44BcwT2Y1yE",
  "key6": "5MvcC9Zae76aaRkUoZxXaeN6QwoqK13k8SfCUZadWH2yDKbyqqKp2qUMyjAGjRoiwqMu6azU6X1kcxZapSuycdyW",
  "key7": "BXWgjzKUKBDYz9PWvhxnydKJijaVhuHRhWrpsBjNBJnCWSpSvDjR5HD3vHrKiBjVBJu8EoRqhk3ohvm7QKpXtwA",
  "key8": "3XtNZr4ydARdF2cCY7jxS6b5B5eFLERNNJorenr7RDvk8Le7gyXEPL6QV9kQGSeHPXWphhEQeHGeneoHxGUvCEvW",
  "key9": "5caKEE8PSzJAE2JfvJ1sk4tcsyHKwFZw6NuVDAe6u12X4M2E3AuWv7yHJsE5xYxbZyfvg3uB8HJJfjK4Kj6AR2Ys",
  "key10": "4tTRwCDPhc6pJfMDU16EKrbDFcdxbvbPFt9gm8pJnqt6pZVXQQHH5nHZLSiCY2u9RVg4RzA7YS7uMbPVamEdgqeT",
  "key11": "4pZ819dgRuUwf46ekANgGjkGjABuSXbcEApLPGwhaifNM7aSZjk9chEPVER33RjdtTzUXPjnURxtxdZTCsVTFXyF",
  "key12": "5mCYJkHM31EaB9wxWYLuedk4RuBxSZ6rtcM2tt6j9yy9xozbqLF2wLzytUFKYV1gY4Ps1HUeTnwwdf9XBaNm8xZ1",
  "key13": "KBZkpgTJbwmmz6QpRWQ2LQVfe7eQdyQT24uENxfNwcdzeLRMGu5H2DnGWSDHmoDWTgoJHdi2bjo7JUQEXtHa6HB",
  "key14": "EtAnmBP36JxoxHWnyLawajsSG8smnevSEW68ruXPT6Kp4stapU6as7yoQ7eJzD87QQn3DDfYqfVhBmrQj5DU4UU",
  "key15": "3vN4moHFCdjTghFaXjnNdBoEvcGFn36Bp8uWGsLxR1escTo8RuLiBtekStfqi8qUzBi7zN9e1XtvCDab6t5iMRoM",
  "key16": "4ASVMdixV61BpL1Uqky6NKikBgvYRU4me3S59KnHx8W1tt4QVoZqVA93CCt1QL9HzvjbcC5wTw8zidZDY1JNHivD",
  "key17": "bcEpg3BWVCU9w7xL8Rhmxc8CmtWvJjgu4n9hH5L9qiuK78jvU2fGWDHEKqmdmR61TjPd7Gv9KmGkk6iMpoyQeWW",
  "key18": "51aV13QxaKLoFiqCRsHoaD4nirktu2CS28eJapTtZyh3ypNq61BJcNP6sDQRL4zs81dwmoankuPvDnrdmSeDchHw",
  "key19": "xh21BStJdzHD8UGzMyPV2pcyJYaVzYx68juj4tvvZPuGp1QcrvXwbGVZC1W9vPs5VV78RXkAG2whsc4g9xMLV12",
  "key20": "3MY2MK6s721uts6YY5nbZEUzWdMtGGES8uQtEbGYVCtHdN8qXiUN2G79wmqsf6BHhXZAxJpXEduBzzzqtgsMk5Ew",
  "key21": "32VtBaet7uJujDg4GBTguk2jaRN4usxm2e68pYCHyna3jLx7MuFQ1XtCujJaSQScDfk6VZ6BgHY3GcWzBNMXSMZd",
  "key22": "4x4XfCDJTZN4BvkmKQbpoVTpQozGc8s8XiNbCqjA1avKqNoJCJKkds3BbSqSmM2MZ4uZBV6PqP5Rep5KPrE2513u",
  "key23": "3CkkfJR2wKAiFbo8cM6xGsdGGVfpo1Dk5Tc3MZmuaeLkebT1jA7RJ9a44CG5jLyQ5YGqWxBVuZtYPEbXDrp8B3yr",
  "key24": "2o1yZBdauexSt1jmaLPQDuhbq96kd7vxQGes5F9TxAFxEK21ix7Lm1cExyzdgDFtBhvQugqTZEaFjBLxc2aDxirF",
  "key25": "5Rt55h7z6zo68rA4mgdStpX5VLFBKRQNVsWojZh9WrLa7Q78HjasAnCniFrs7YPqHrcJUAPKJ78oRKXS2cHNz4aY",
  "key26": "2FcENV7fTvLxQKRpEHD6yJys3DQLZqNswUYFEemeY1fVLL9v5abSqbz7u1D38wD5FvkQv43qGuxniBBMmKEMZagh",
  "key27": "SeXh8Vn7nPMCKut5CrvxEhaG12GWa3dDux8voQJsrBM2kEqtgx4TpMKaf9WLRtqVgvzK4MoFFGe9YLqKkvri8Gi",
  "key28": "s368C3RtaZR64j1QskKBw8YvneBwiTDqsrskDyvV13F8bjQXgy5DiLgywDgRg6UBNeZ6mFwgRSVsLcQEGoYC2xv",
  "key29": "64TGfLgdn7t6BCYzG2pU5vhG1Nk9HgcnxtRNrhZd4JYfWjCughBZeELpceMzV8Z1qNPTxAM2eEZxWfeg4fpNDqZ8",
  "key30": "3SEmumpdojpWa2Rs1KTmwj2jS7fXGahUkY9LXwDYqFpxvBiqXwrnW6DLMymLL78QUZKrkszigyCD28cUZTNHuduU",
  "key31": "2xEmqCXkvkf6Gxd46EugWEedcsTnPbfTcSdsMxh6C6bpiBUKm7B3EbJ94dV6XobywkT71to6GpAyaMf14xWDnGCm",
  "key32": "hsXtBwG1S66gyVwb9yg7xUkUx5U9hGxPTjhZsEp73Rve7QQMCzqAJqcX4HTBKSAeAnD4AkdxpdiYZZH5M5oMB27",
  "key33": "39m67mCGjZWBWRyjUzkXMSbdfxVEs1xiQzKseJgPKU7hLFjYAeKTjV8t11UmtCtbzWtDJKcgzRQQ2ewXUQrprCSt",
  "key34": "qmcdUfns6EKpKJB7gUXFLkUcLB98rRAhZitnQFfcPSPZMzFEJoi7xVTknj5QCsDEBatCiDp2LTntLrkTVb3zn7S",
  "key35": "4d5ToNhMGUrJQJDJf9GRqx82Cv4rtnHKpi4eR98coRvRuwftzde8KdN7Veu2VFJ2r8diu5cQqbmUV8SbLugDXB6a",
  "key36": "5e3dLaESXTgNs12RRpedX58y7dv1n6u8eHgyg6oVFqwdbrNaRmxtVN1dMx7oR7K1iv2qPydoNZXEMmSTzay1aVz9",
  "key37": "n8iuAVC8geBho8jHxpT1jXSrtrjDV3zZpfhL7mVXTevMsPjRgSSgwhbbHRVCtkPqq9XLNEKe456DXRo2kSkzsuD",
  "key38": "1mhTwBsYLnwmk8jD522FgEvEy6Vk7cdmXnCgxpowET7BiHUJmiAB8trYhsohjkAnUd9iFFeYXovKtStfNFL9ZC8",
  "key39": "4ttfptarRP2ZmboKeJDq7AFQ8WhiK5DCQ1Ajni7SKX7aT6PvmyDNpVXt62eXQtp7cq14brsu7kPGzw9sZmsyhAH2",
  "key40": "5JFNDUqpzWz63MERGjb7YmTMeXRdrrBMsgHedQFHv1nF1m5HAdmwsyKm8rz6gRRmmp89MPWHy9DyQBeLXuu4Pfx7",
  "key41": "LRHtZpViYzaYVhLAMiqVV5U5xin5LdUzbsrDR8y9m6eiindURa2UAE7kPyah7bFj3bf8nnKLA63bZjpjCeJmTgc",
  "key42": "5SrA1kG79muSJ6gPSDuc6wwmphwUdhJuhSpwqkRCmcUcCN6ppCdChXgRyS3AhXWMS2rHeYtaWzCUhKJ8HzpPkZcQ",
  "key43": "fbzn7hc98N5gjmvJEFRhATwNm5gJsoBsKSdPHM9w5LGxZkPhwfiGLmKmApdDjAZRgHi98QTgAegfpmPne8nJ5M8",
  "key44": "2fGFtapmV9E7daaoFj8JJirRndMBjiE7GVmGPjagoXXiCUPKzXy7JdqWrNq8QoC7kpU5Ps796ZSif96rYjk7cDHg"
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
