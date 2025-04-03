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
    "2c1TxByHHvgFfAcJruLbJMkrKE9KHNhHXm6KA9ysWj5ZRL9QkSDzN1czjuHScvh7LBZ7LZbWGg7HoeGmV5DqGtaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3JGXV5rtY46E6ppyGAMSjduPg59nheNXxWEWggn418uW9ZD8P42UGxCDATSd1XVhFC8MdLanyvhCyyoWk7Y6Lx",
  "key1": "3Um33tBus8WPioZjQgwsVbJWFYZjYyXfGzCgv5zVX6vDRwZsvWQ2QU289th3XxYUStrDWJp242Vf3RgoALPSxp3S",
  "key2": "5dV1BmetEsSnyDqT8yjf81AYXe1S4D2sV4aGeLbidj1dQhDfGqhYif7Lsy8Q5usiGmLNE4xkz6ZL3dXFYcj4kBCg",
  "key3": "3hbb4YTk1deuz6DoECrd6sABeRrtc3eRd53NjUrueBLRJP2RqsixZGtpTsYXv6o5FpPsZ3j229vzQ3xPMKaS9qji",
  "key4": "62nszbCnwTx8pm7TPZmLXNG6p8UaWDEU4TSY4QqTrw9m2brnkqR5DJJ82FUMyPLDp7HXwjCVjVzgPh3Jt1Zoe7EP",
  "key5": "4hyDmKi1gCBS28sjjDMByfUWSdhNPpnRf5MEsHNnWLvPfDfHXavQo7uabBJF8CtxKbysbpKsra46vPGoFTEQEyCf",
  "key6": "64fYybrx9aAuYEqTR6Ab6StwwB4752qGrPsvwSJrKGGtKDZsdPFaVdQK3aKhjst5imXz8ZzJZeYYFHMrf22EgcC6",
  "key7": "65B1S3treuXvi7x91ub7HEMYihh92mYtQiDKQATzCQuvmAa1gXz1B8FTL7FLeEtESm8w6ajd9Jo61PQyocQi2jNH",
  "key8": "5iNWcUjpqcRKjazSnQRCjwuajLW9EqLxzRUbdaP7HNefjLBYUtwv79CYp3xZVgVkjTgAqUe6QPnKrwDScCyjNiUE",
  "key9": "tKsdC16ePDxKEHPXnHZHxS2Wo3oCZNgy38Jhu66gdXh2H539sHB1WBhqWmLH3R1RLd3ixuYtgH7ChzmbXWBx2MV",
  "key10": "bNNnRkCey668ocBum6UAMjPRKVSdDZeaFNDov4E5RAf7RZjFiNiFxpt3scsuQS5BAtx9ih3agLTKmKCC3Bbz7T7",
  "key11": "4rgWvgRirdHtxrVXtrsc8fKoY5x16SMARVRtPnvspKmEULLLqSa87X49fYgkFUkKbEzLrotdzB9umtHQ5i6VnnPY",
  "key12": "SDuSZ5udebS2PxVjqDQyNnpezCtcfu3SUqqwCRaPixFcC1WsYYrjZSwXVFGmc5uHnj6CYbS93GE2TzeCpUFzg18",
  "key13": "3GuN7SCExytHH2ziHNS9mRdWYLW5Tj6eBdC3RsMHDScfEoYgtHrxRucUurpT3ZnVxoaBe286hnpCprRjwaotw7Tx",
  "key14": "4BuwFkJJhFdBpRRRfd4AeEsZ1bu1kJPBJaJt9L8o8xmaW3NBqF9e9aL3AfTUcWfJHRWCW5FEKHGERqc3thoeHs57",
  "key15": "3oZay9j5QmRtPK2Riv5WrRKSrsT6WcxoKrzHMoMWYZSQYygamzE471o7TXQn1hGU1YVrNzwhk7uXMB8qQPxTVEbq",
  "key16": "3m4QNez6zKn2pAZSoWo8DmSPc2rsjqU5mKM5Rv9oyctmfqWFFccY5SwgmDqgnznaoReKbiTptgr7gWb2ka2UuUXt",
  "key17": "32oczTDXUt5oZjMqu2CQLWmh9eLuwAX5CqGpg7RFzAJpxDxYtXyap9Jz8eT8sC6ngW2oBTtYdupdyUDnHEbaZsSk",
  "key18": "4aUtZ9aZTiP4b9HPmsAXvVX8Cq5VWf5ynou8VbuWp3sYCZdUQaRjo5Cf9WZCFUs8NA9wF8zGLQwnWDtjLuPT4Zbv",
  "key19": "4EGhryjp6mYFbDSk5aRwoe6kF5NCaZjrtacG6xuqDQyQJVDbHM3Hg46g9UZB6eBEN3z2JpZmYUd8wKyMeqViXRXj",
  "key20": "5LQF5YP6SwTrZfdiu1xccikxh5wR1wfeFDAuQXWQ8qhLYhHrb8RYVRz21fKXVRyVCsgNvRJCFHY6VAvTuY33nFw1",
  "key21": "4sSwp3svvdqeuJ8AuGWVF5F54JA65tbJRDf6Cxa8aczoqiNVZWhtfWLb2oK6PzAaFRTrG5Dopc5gfPGMKUPqWHUC",
  "key22": "sjBBXZ7cLGxEPxACvMYHh6jN7p45vEynN5QCxjDzWUZa1RDLCs7jnxgmnKL8Rk7YN7s7SM8bQxhmkAMneJqp1S5",
  "key23": "3m38mSHc8YTyq92TBkFeYUoJx3FZU97dMB8KHg1hgdasWRXphEdWtBLav1CnCXYVJuiwai1yjRkNsNthAbyf5zXa",
  "key24": "sSfJD1EkX8MrurkWEoq8gYuH2jk5dkt8p8JXr8TtVauKPLAq5DugMWxqaZy4KELtHmiMkLNxKzKpFtK4LX1NkLv",
  "key25": "3oK1aCDPyZoTfYsWAtZrUeDKgNfZuAoCfKV7fFox5uFUT2U84psQhZWCfrfU58aUez86qtMCBZLQ1EZqwDeKJLHM",
  "key26": "3FDsXhK7Br6GoSEGYMbqKfrPb3A9SUvXgfT4xH7tYzgN6isftq1t1AEDJgRfH5P4kQEg73o4EQwZCH8gyWWn3SgS",
  "key27": "5Q9MnRjA6hHHLTkVr3Nx7qAPAWdcmK5sEKX4ARywMVy97tsXvwhcapTtmbBXqf5KjRBae4PSHDRqhVwQ4RGJqJXM",
  "key28": "3xS2dS2F5GgcG6GDmVVTp1Zf9SbsykNW3y31npvhJXrQF1fVbD7bUxAxRUo75d7yMKm9aHmSLKqLzoXb4uUcRZ8",
  "key29": "5WVY6edWAoQPZhBrbYGwcojSvJVeEGTsxpAJ4sShgi9RC2G6nmBdLzdc9SnDaEmZroY3CfpwfghZEMdgb6TtKwGM",
  "key30": "2YCV7d2S6crYoNnJ25Ndc4rEp9vLtANi3ATRtXdHATzpZtKjrf6UjUQ7cgzGLpH3PPGXvhVadVg9tyPMtJXzi5Yu",
  "key31": "4fjN6ErGwucwMpR7wpME61o7WTgVFGEQxhGxb9o624SZtffkpPtXRo3w1UN1TTc6SoByXrmtntfRRscpgEY88Wfa",
  "key32": "3ArHZjs7PQe7feRnsskQ3616q2i7jLQt6XDkyB3xYVw8KLPtDdFMArB85NzBD1PEV7gEZWyRBidTGd6ZYYPDGMnp",
  "key33": "5tUdmqNem725fxWnNBSdMgrc2dRJmpkRKg5MmmcoEgCpVjKG5aXs1M6T56BCRQsPRWu4jt4sdZnpoGdjFMsx5vQz",
  "key34": "3vbgtZAvK7wWjweYXyTh6p3T35yKoU4ZZF1Gd3334ZQ76r4G1ht9oik19w8GQCGzEGHkXQfZpFfrpgVc7G7jU5A4",
  "key35": "61L3Uu3AT6MyWFXamvwBSdKz5794Z6o2czNUmzyPEjZa9re551AHo484gUCyrabNmoQfQ2kmvupN8318yu4yUchs",
  "key36": "2h43RKUbyoaQDCs4iYcaiP2btp9z73emaE7jhmK5ckPJZ68bShVQe5iWi3bTrfAEEMBd8aBAxcc3LQt6kVvZRdj1",
  "key37": "5xyymjqVCsfaPUHufeNpkbq4zNcrTufSho5EkwXzsWKTMapQxXkKZZRoSXWsM3ZHH3VPpk3sHVBGVrJdoAFCkxzV",
  "key38": "5xFoJBDHxZ3ygZUWF2nfS7vJFoWirBSR3eA96zoAGyXKXRdZrmSrv8bk1buqfvajnmKEEtN6rWYsideGPxuQtjiv",
  "key39": "3AcEQF4EiQXLaNzFdCzhshJ6RZriEXDdTUsow3B8m4d86ok664vCevFaDTCSdgpoD7AkfPDZV8x4t5KSbVJXzMdG",
  "key40": "55dxWUTMzCYSvP1fujKq4YNRP6KGMzkMujdCxVE7eg4TrybWqXMdyQMh1bTXNqB3LhG1DTQHbiw4tv2EM1Zxb9on",
  "key41": "5kBv8V3dmMLvBsJQ376jiaZYLhwdqc1wg61WZd8Tw3XkxzjXKYXVNqarb96VXqEk8Uth77cXWunjQsvkPTKCaNGe",
  "key42": "4AiVUtstu4AkgrzbzrivyzsfaNhQx8enNsUivR9MDjBxPjXc8PCwwXrRiUMN9XDcpF9aTMUfrhRuyXdWSBpNkxya",
  "key43": "6752zmgx4cEXfCGB7Y24h6fSzDff8Qci5jBrn6BLsuvPLgYma2mdu26mXorRMyVpLZYPAGitEwQ2XQ5qC5MBMstV"
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
