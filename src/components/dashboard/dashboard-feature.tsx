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
    "5L76rr4EUJziofaP2g2UT7yik4vQBESUNJqDVgbh1WoyA6g49AyG3LVCxPpnoiXhzZsuDnuHrcrtFaUypTdBUzGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ugJ8ZBSRes34BvHn7XxyR7My2FuPmm1fbJBPvYgKe8REe4cXa65VFHSYrDys86dtKmtZNx6ejHnmBCxDGRNGpgv",
  "key1": "3btUzERu6kFrMdaaiAPtgmGZbxLrbEcfy8L2gQ7Rhm2PjGirjbie2QPFbMraawUMGPRNqJhxFTAX1c4xPjhomeLT",
  "key2": "2rbd22h78r29fMnX9ygg7gsPmio1F1q6aFxBQnsXQ6AV3Gd2WByb3C2L82gyyRQBsjcHj9SGiduknQE2vqa4JdrT",
  "key3": "3TZcJbV469yEg379m9388K1Q6uh8N6s9J8M9RUAHJWmTXmR8gg1WLHunePKdypSJQ4sqbfL7eAJEKparoZnvYew1",
  "key4": "2t4kaMU1YXVrTz6P8p4ZMgeLKvBPQHm4cmzbtpDmRp5qQqQJzcn3tFhDrUp2uwcvP12Aq1sczZmXxepF9bpvyeEP",
  "key5": "2eHLHhrNHjZkEdeeTVyhhVfdcxbhjP6dMkaxxWh3SKvQAjufBp9syEyfUCd2rAzuiEVsK8ED1p9hySe8JU8FA9jV",
  "key6": "3AuibojD42WvR7ctyVRnZrQVmXwwRGm5cHdsP7cxHxG6QWHxzXJ6Fe9zT2MZg8gnsbVEt1s7XT6rxMLGMsff6g3K",
  "key7": "5iHTujFWS2JrAwT3SxuMenKESwLvT5D5U8wJeWarvRMCx6HKaNFgPdD31bKvs1SdNsVzQgrWzKy6XbP6kX8T2KPA",
  "key8": "2xGp8vVmdgYquVEtDHoSHoNnv89RJtqH8CnXQwDkgNnawVBqmvcC3WvQERj6EwW4tscDDcKMLVmMUdELxVLoDk8r",
  "key9": "rczv7cKpsh6sRhwjRuxSmZ1NQVyeQYCjrRKJcpbpqeg6LGDH5qqwiXpLK51MMbwKTCDTaYt9jJ4BDqDypDtLKuH",
  "key10": "5vFidtuYPhHHNWm3BJJ8eanr1cYoNHLYq49MK21DEzFaWGp1JQPgLfz8WjTpzbtY66D4JdxjJW6z8VQuJDwmQRqx",
  "key11": "w4LwsUsnSFFtUnvkdLdAxdeCZ9DRP7cesMjKwVDPAjotXXxXnH3Yto3RmSHn1Q3w2gHixk4dFg5bumJvuxARTBM",
  "key12": "EmSwc34NraZdW2K7CbTyyoie6YnMNPfvu6AYTKzS6cGrB23WWLAi1LAHTj1XXipyuJjoDoZ9eWaVsSUxgYoWc4Y",
  "key13": "67K15kcq3sJ1hhqkyeGeaZfwMNcdWS6E6nT342SvjGiqGi8QkmUTUqixygaH5EuF28NY95exr2p8nSbz3mq4PJbu",
  "key14": "32VxJsS3ynFrd5XZsFLMX3UBKCiWfWfotQjm3sNJ6Tx17zhut5xpDjiVsnuH1bbY4kciGrJb1UoCQR73TenMQMyk",
  "key15": "2bYD9uiyHgx4MCYAZtMLuzkQVc5x53eGc6BVrRQkEdCo7dEcNVRaJ4kRH5hBotLq2at2QX7d9Zps1KxNbq6T29VP",
  "key16": "5uXkLTrCnJxE9M65PjCs1Q58wupW2aRRdbWgDgL1s3ciYW5NkHMqpoFwh3a36Pq8q2cNLE35qDeySQ4cppUpnFdJ",
  "key17": "2F3LMNbnmhSRUjuv2uspZWZ8vRfDHRuamHtq6XuEvHFAVhUJk7CTU6FN8LrhzUHU4xanpujB7gWVvJna5rujUjnz",
  "key18": "5Rm4Y4shu6XkJ45LB2KudBwvi3epB6KX4q66SU7HQoFQYk51tBkgEfCZqj4pigogAeN6hDgL7ugkJyB1mRqk6qV8",
  "key19": "5R8ZxeKM6NYp2XsqzMZ5Maom6YnX151iLBgoejXHm9fzFM12MzKH34AC2tLpQUaoqAA2eQ3QRkLJBamHqrE72RP3",
  "key20": "5sakTAhX5QSuVTijkwPygn6mTxVKKggcw8pXTpmEWXNN4BQee67wefKE6CTCsijwXrtWdGRhASHL664HbjuMvsGb",
  "key21": "iop4YfCPXZdSNRgJ9JnxoprCbXjGVWDuucopKtxvNz9GumB5BQWv2mQLxd66AHPerrAnPxinXardwaY9YF9hA6b",
  "key22": "5RXEodegKacheyMYTeo1SEa7z5FqwpTVsPT1H6NcgJdqgvU1S7AmrRcGwFcmRm1yvPvYLmL8XfWikqLPEwzij5Hs",
  "key23": "5aKFH9JUtGmTYyZwUzEb2UbuQDLhFcomx5XPTAS2fvTMqNUpeLGEnFW52pmPotqZppMmqx45DdUSGBAMC8j6iFte",
  "key24": "556AT22DeMqUmGXJ3u5Mq9RuZBzPG4FCNp9qHG5VGZkodCMr4yrUzV8HVi42ZroURpYo134ZP4XSNuyu2mqPkatH",
  "key25": "34dVDBrPsynN1y21jKcXdqMvcNTqGK55f9ec7Cr8WbkBhLevVbR7H7CGityWwBC77iHTGAZCMkFeRbfcmuGh5dgp",
  "key26": "kTYSMBDw193jj5crvya1d38zE4u7Crj1Mcg6VQW36ytqVmyNEUYhPmJcjkwigDy8ATixQq8wQD13KZ9TcLbXepZ",
  "key27": "5DT5puYKDZcgK5sh2FNosa7k1bU2BLvGCVwihf7kpN42ybe5HJqZPT6CHRmbXWqt78frQLM1oMAXBWSJMSsBbyor",
  "key28": "4Tt71RMek8JpA41AcNPYL52fbqrUP31kw5C2R3WRdzwCgmFke3RsLdSmpbQS2ZPBak9GvvPGT7ggXWF5CHAskVfW",
  "key29": "4o4Mtabqd4iqZhWrxNn2UuqutXZCa9qJECj1wVaEREMEwobAzfZR5tuoXnPAeV6JhR1Zgc9uqLEjGHP5QEezxZkB",
  "key30": "42NchWRU7TptXZQegKEUHKVMnXmbDF2UwVmKML1HLbR6G1WkJ5E3cSNqGf6s3r3hpEcR9aHX3XjJP4jmWpzeTPvZ",
  "key31": "4kmeDRUhzx9q8ca6LVYfXMg23YJetTFnRpghe2rFZMPwKDQrCvaL8Se9HLBBXETsrWnrX4QzzvTi1rKhgPNwDsYt",
  "key32": "4be4YgDwdpLUbtSiJYLMraZywJPXuv6LowKV8CBg1ZeqbREoHmvVL8HE9kZKHbF35wnEwSZSoEvvDktCxMghjLgo",
  "key33": "qzD21F4LWfaHkJmABqPaZfwTYXtxjMzanwuoPHeDcJcq46MhYdAiBzFk71UCezWaktYHNejHz5siDzqYcpv5YuC",
  "key34": "5btJNzH75VSWVAY4XjMKfV4ymuDdemx7WxmDPs17z5wShrBkvxuSCB4zYfH6tGpxciF49a66BY9YGUMkNoKjqunB",
  "key35": "5N96k5CBRq2Se2D9wgSoEC3hdg3dyz1dadWxkviJwi3htKA8hXyYpTNE2yaYk2rLiopBzm6VWHdDzYc9j8nYsUC3",
  "key36": "jQqx8e2awytzTRS1KNFh4yrY4E6Stqox8iSXkZouFcjNTuJDdZPDYYrdMe16Vef26K5q49KjXEcXQTXK2RQjdZK",
  "key37": "28GyWA5YkU8K88VWsG5tCcqA2DrARVnasNdeTvN2hNiv1B9yo58d7N2N3jq6oQg7P1aXbtwxBiS4fUSBKwwsWX6X",
  "key38": "5cHghzpRRA8injJdYJ9BRj5ahPZ3S6WY8Puyz3v79ofRjYitRe21dEmzb6hts39fbsQ8UH4ucjxqGuAULqCkTwEk",
  "key39": "1DngfKJy2RP7Ad16pQzkP1dvtG2GC71SWX9eYPDBJ94acAJcwyDCchgE5dtztFELvCR619hYKirfECopgP1sa8F",
  "key40": "4wV5Y37jrXU5eGiQxRkbf7PPVZo5mGDH5kXj8pudBq457qNfWDhU4fjj8SJphSccJhbLAFNyrQsnxYBJoyR5oEhB",
  "key41": "3quNWK2LoGXiLCuyXq9nGdxfpX6E9qRSZYdaF3QF1P5sMaqYRL2AkbMPPNZbDWhNTSKTdVF6STnx75R7KqTzxPbg",
  "key42": "4QAjwktuQManpbZ5g3BSGKNAX39HREQURoxWpZV4E6nPd5WZwonatTvyQmCtEAtYXG6YFwbBuZRF2p8G26j6ciPg",
  "key43": "4x7fkbH1qPiZ71rLhMJz49h69X9DbtNFHBX3eQ6GTx69ddYwyUgppkcnPHDG5VgtbJMvGbaJbF2uew5oNwyjTo1F",
  "key44": "3HbJMwMTL7LCzPriDRUYjx9Lm32vQZGo6cK1QQdQsHSziAKXSKRLnQrWLjyAA6EZKoNcvHdV955mvp8v5JcMRqvB",
  "key45": "4DRbCGaqVxetnqBmSg142CDPT5mEynNKCApnecpWLHvkvR5gDHFRuVR7TKv9Dj9X4yaUNqo5hr62RCxGgdX2JW5o",
  "key46": "3dkY1n2RzShStmLdpA81GWLNCou8bme4CTdrLspUUs83vEGKai574M5D7RCabpZ3WUUSGoh1QoihwRaqEnp1jAxb",
  "key47": "62CZHUHNtsiYpPTKq7TaZSZ9m5i33ygjyDneF3P7ZVxAXVFqhzS8piHZimvQZsMzq3AB8FkprLaezLLAwRkoFks1"
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
