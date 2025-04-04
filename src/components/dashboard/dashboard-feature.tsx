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
    "24npNA9wK9gozDcgcFTRZX9Y3tLvTwnzBuz1qyPt4sG8GUrcWaUTe6F5jJ2aq9mYbFQEogEyhnBiawNLgYnyBYW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xgqPqc2Xt7dZwZsPtDPDxbWQwy8KydiF7Bni64GP9Fac69W6yeo84jW6P5XFTzi16A4w6Nqr8Wtjt6uJAnBB38Z",
  "key1": "61DsU8auRn3hc5g4uVXa9fTMq5eiJF82nnhVS41C2xyGBnvMNBoH1PE1Zdg1HaNhZxaA6B7YQVPPYvXdxgeAt9Vw",
  "key2": "3PKk5Tuy5f2gbwXmPFirSjwtCyke85jN5mLPPFzvaQDM2ns3ewFBoAoDCZ4eaML7ScHhUniMmMRTunC42qVvhrMG",
  "key3": "3RRLuQj34SW3rqCgMhqzn6Jr1JMm9ivzKLhsJfxh8d5eTKQuABvErEVKhTk2p5W5WzxUovzmw9zHkRQjGjCYHdma",
  "key4": "dAXiaV2Tjt3SQpybm2miaBA5V6B2Zh4ar5JMZEdu3jEWuwYbzyWETSSKw3dZfyjQnGyKBVJZS5P5VoysUonRYa3",
  "key5": "5dSFFEU5ftqEa7vy737CqckPYYd1m2avV582bPwmFEKa2SvkWQv2HqPyGSAnF7BfwwAuyCL3MgtwEQQLJJu3BMS6",
  "key6": "3hDre6KDhWbGPQnCV8Yxq1TUH95TV5uximbTuBoaLqUuRUAu34Q4JCPyXvJTrn2fJkXM6joC3itqiDuQeRhMeMDU",
  "key7": "2BUkheZd3dm7qFMvmvwr6v8hC8C3SuzpUKC2ybYungZAaW76QVqxnFJTWU8QP36eoKsBMNXz4viuKZxdMZWqSaMT",
  "key8": "ekpDnax5W9nWJ9XBSmDqXarWoKnGTW6s28UeNzSjDyWX4aDrfbrry9pZ8JbxtB1KeVYbR3RVu12hfrauUN89veS",
  "key9": "2HRkiQyAbG7Ey7uFVADQSeAgeWDFiyYLtp3KXiB79gTsos2phUkGDrwFga3FCijS2jEvgFFuYWSv3MpMovjxRbbf",
  "key10": "5skDXqdWix68kG1HuRDgbQPnfvBtShqUVGH2YMdF7cZCLwpkfNVx9cKCFeK96nEtTjsMve89evxAyYsGGDmfeLej",
  "key11": "2ABHaRbBzDP9TRRQXx8hihA77vbMpoiFTuF3PQy7Muuxp8u5jDETczKotVM5V9qL8kAbqu7D68DMtDdBX3yZXHgE",
  "key12": "98gepuryL4cRnryW9KoHGDeATU11wXjSKR1Kiy5H7EMnofYmPbo6T9KkE7mBedmo1oQy9yREBFsnSC63JzivXGS",
  "key13": "2AJGmgt4QpxNGhzWepdReZN2m1QQNWLpBoBuPAF7z96WfM7mNDJmZvdgzTHJScVZMm7GL8CYAeWbCdMdpVS2vEpb",
  "key14": "57bE2c4nciDGPQ3bhzP4KzxvD66CJuPT9DqVZwpjkVu6po6d8VLt3iBTuvHhf4954emRbubG5UHkJ6h9MLxt4wir",
  "key15": "5tdxxPv7y4zFGfEQ3fX9qf2LcESwN6JEzyuQb3Mwd5841fyaHa6Rdeh7yHC18pbjL14bFhCQj4iaJHUDeZ8oD214",
  "key16": "36aPSghz6LnV3odrc89TdNozHMGpEJdCXbmCuPgguErzWUJdcA9ZTNHmukSPdY5q5rnQuLpfQv5rjS1jqgLNc4TS",
  "key17": "5QMYY6e1AjpN4SPD172cktKi1RWSEKjsz1dHGRRaJWqNiD3zAUH7qA6QcjjnRj7jXEwc3gJqG1QkCN5rD17jwUN3",
  "key18": "3adUEG1NnNGKmv4HAUH6sjAuCSFJg64HiVX4MvYuRwX9yGskGMp3tF6HkmgkUf6dbZ5bhBxfj3ZbQURLjEra6Dix",
  "key19": "31ropMZ2Jw7JJkMNuSAa83Vq4cxiKBSgoX5Q2meArPPnpxzTLyTQUE8ScbbNuEWTnCgu9YhkofdzdWbtea1mDrKL",
  "key20": "2EF9rU7DQ4cprzGNqtrcPab77HwTd6yNLCw26sbRPM6gfpJ4dNgcm7Yi43B4ZZhdU4kBL2tNXPFjUSocMJ8Xh4wV",
  "key21": "59M8soVsZaxAbuRgL9hUmPvQ3GqyCYutCHC8hpQZ3v1FJd668qXmXarfFNrsuJpUKGyevMQFqNgErtDD87FCXg5L",
  "key22": "5vGHgkPcAy5mUuNHHqSrCjCmvrP8LmieBymzNt4jT6kXXWSzYKqqqGMHKREN3JEMShvMnPgRZdTUxkGSdqJPi3j9",
  "key23": "5rU4LTMVFrNyL1Hm9c4cZRnx7SduR5qubAajVMPi1wzQpNkQmkjeUrKxfWSSi9bhuXvW9r7a36tzHGQZ4isGVjrk",
  "key24": "5FQj5tTZwtGF7nPEWMraCn6jo7iKiTZjxuVwCnrVog8ACoBmwZDDTGGHnC6GuJCryvQcWxPZ1bF1427WaFgRhaZe",
  "key25": "36k7ekRDVTYWfpakDgQUc8m3k19xTcEL6ceyGXGmmBVbR9FoTKSQ7ZozoBdahfL1spNGgTztyvwZzbwmnkCt3XN1",
  "key26": "2XzBWLUAAbSZqZmzU2LYDbfpgGaqBfDkGLhtYAowFz6tXwna2tPbkoWgwJ5M4oBdcXqrwdk6GxmJE5t1nPnm7H5i",
  "key27": "4cp24RM3ukzB4aB57y9atbtv49dVVgFTaXQDtX1driNHuhtofcX8av4ahdVTXotuEG4dboZfGGNLQzHkcW3kTL1U",
  "key28": "5sRiu27zRhW8sdR3Z3KWzL5ieL2sbk9gTdN3hzAYxdtFDZNECZaJBB5T6UmU6dndbMx89nCFK3NfakNzm5vi5GxS",
  "key29": "2P4yo3LLhSH7ktEYpF7mE2CbLDp9N1Gz2GZPoSXhVfXEgW5J2xXsdoxNN9a5nXyQHgsCwNmTGteWmaCjx5KV6dNU",
  "key30": "3CFLVo9eQaY7ktWWFg7o8vD7Z8aiTXpd5NBTK9pjszFyDr3xXifVe5wxLToY75roMETE8tpb66nGFgRzgnK5VztE",
  "key31": "2jUsq2EKwSPFJw5apcb8zgG5wP9cwrHq2WVzp9GeRZKmGBKh9nqQNDumKUu293gHzcTuj68NqJDNQV6vQH1yqocw",
  "key32": "4jvuvz7NdgdpLnqLJSqEnrPNfkv13nKuE85nmPDrT947dga3YsLcqiQorAj6QUKf7LvYp3EpWgRQG7Mc76kjB3Aw",
  "key33": "2Wo97kWJJ1LRCFt8Peg8q711vBqEcuqjKs4GSNgY6Y9fA7GdJPk8yYYrhs91Pg3BBTVZR6hd2EXM2Ky9k2WXSTfi",
  "key34": "2LKRsNDFZtTyuHAnHAzRCFH94kbWKsD31z1dNrTSeabAPjoxDZr2iN4DbY35LjjS5q6wQMjXu1PSMLTZuLsTrxLp",
  "key35": "5rNffkEc3rCJMHEzTmFg93vQLdML1DeFmq2Dhz3DFWDz7mRYA5SJS9Pj8qrcnR1sGwkUVeB37h3YtXhse8PgjyYz",
  "key36": "3ueZnegiPcwyszePpo1553D1WiG98sekvTqpx3W1Bh4pvVnShWp1L1rRgdTo17JRYEYMkfie7aBRme6EwfnRx5DW",
  "key37": "3JSQ2GMUDF9r4H55h1KoxgpsYGbvuHQfzQS4mJMEDkQK77UN1vy93KwmzYFjVzimEM3xQKSoVjCq9VhQSe5dre5i",
  "key38": "3PJfEn936BsUZWzZxfsNH1TSQBaPMcAwWqWAe1CpKZduWN7LP7pBVtqG7dZhPXa9Wzwy2m5xjF7hvHCrpyRbGqco",
  "key39": "5CR51aWzEZPwkyanqQRtxJ9aoGX3P6j8gGqPVVWmocgDFXxUiwsJCbKcQnhzjwwduR6UiT7a5TLJTnJsyDH2YuZa",
  "key40": "38whSYXUtWRaPip5mE1r7TsHSFw9nUJN8u76MpLxmtMVwgW7LipQFkzBZ3BuaUQ58GbSyRKgizp6cn8CCNkZYVUe",
  "key41": "5hpQnxUwZr1obs2rW7xKb22QzxVWyjwiZ3uk5Ynvnhi1cez65s8fbhaQV6CdtCeYPcWcgnnFnsHUstmGwrrQdowz",
  "key42": "352VksY1V6tQaX2JuuwUwFehDbfWq1akopnevv8orEny3u5TNJvA5W37rF3K1sbozRVRWuqz7PBDHkUe9tuPzkYv",
  "key43": "4YGoEa4TMYezbkaAWJssYXJ2kLmfR9Xo3xCDBBYE2r3AvvVWoRZwprgwnidZd6iGsV6bppVts75npnMNnCvYxwrg",
  "key44": "5ZP5yR4iDEJwkP5yWvFDotQyaymCc7W5e2yj1jNXEevxoAhCYn12F7Y5CKbqmDJUP8NrsbF93GXTXD1Wc3tQDPea",
  "key45": "3uArp18u64gTZYiD2QvLXfckwkgDwMnKagtoPCXMWUxnMXb5KzKrjhYXtXFyY4YQyB9ahvD99VuZvA5j9b7BKceB"
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
