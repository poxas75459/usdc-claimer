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
    "5Lde6A3A2RGfc6gYcnDtg6C66Rn84pimLqNSqsvxJo7Jsve6tNczurBdSRPoaZqM2KwHGujFcYUnE4SSyQfvNzbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ar66Qq2BjmgVkYAQBbyxKbDgjprVcSre3q3rpejG28wPCRw5WSnm2ZxmwBvtAYE7Vi5XuXD1PSJa1BKVgpg43LX",
  "key1": "5KFrHeP8K7YaKbr57HCscqejdHP8E8SwBABjVEYNCfYjp6kkB9QchcNepcRtmhWeQRdsH9TGJRDRLLxS4LBigbU2",
  "key2": "5v9GKLtPvbWNM8cGwL693s36NGHMxoH1vhLr1QtgVZ9fcxX4F1bScznQ1kEDBf4DjpUBDRdutfPfoD9eV3p9X8Ys",
  "key3": "44Uc5DUMzk6k23qMUbimWntseHKRx5mxXxQXuUttTXYCis76oWWBNQ8d3ZjgQw1XQAAb9xJUXm7mZk3g8UBYRfCh",
  "key4": "3yeC7F9xoy6waE7PF5seSsoBX9GaYmCghPQUS8GejFz5UfjhLQykNAZCCViWKjMrwockWLuBSdDg3xcbmDj2fN5Q",
  "key5": "3CDcqSn7TGwnPdmCWcpQZ6Wvd89uLZDEiYFmv7CHUP5Mjr1ibpPvBBJi2Qfrw5YzKhTVQAq6B9RTGuE7sk5ggX8J",
  "key6": "wxa7btQEsVqy85XcZcA4ZhUY3Uu5C5hiZZFLSm3Qgzog1MZ9AWfs7PkcMp6P3eazW3RaEVeV8LrYsSvhjqe9jLP",
  "key7": "4pz2Q6eTDYWRrUgkjG3FaNqubazAb6FHvSQNoVgvhhXwrnSZohD91CmnPcsrHKZnHhe8qFjdAtsMfH74Xx1csiXd",
  "key8": "4K3yeyqnVr1ayFToU1iCfWnXsvJqpGg3SL85txia6ySMe4SQceLEmUd4VqDmFAWcuWibeBnuxhQcZqEAvQ9QQrcV",
  "key9": "6ENKEPY6UVSFeriD3NGLFKTUFpBaT3g1x6SPHgLQgTMCGnZBbRELJABYRZZVwmmMMVsimwHiT9bCuDFQfjFUE9L",
  "key10": "421m1CAboDEXgEQg9CW4mvQEPu8Doc56Dy5MEQUK4ExdASNDjPqgrJsodprLHUvBWkaD8fUkbL7NFhuywoxaa1Ea",
  "key11": "ChfSAxiwSCgZZ34GEJLHB1Hs98M1yV8GneFFfKyme9NsxB8b83Ly3FHfrxVcMCaFkULaK41QHP2omV35ZrzRrAP",
  "key12": "wZBgB7Y7BsVuf5MR5XYeusvVapRMRsNt7xRkzuX6DiYExsWtn2VcCpwNRRcsRQkF4q22bR32TJsxtwTYVrtdgnw",
  "key13": "52zPzR4u3HrwLY3RWXJGq1uSSh9ARPtT6eYadiPVVStG6Ek522ojgVrwk542RqmeUzX3ydydmBG5Je6Fb7SxJbFb",
  "key14": "2DFFBpwQrRV4prPbbL2ShY4mRRD3JrtBG8sGmqQXW6u1okzKqKPZ4mp5iWBUgDJVSMCDU5XecTrjsC3Phdf2oN3w",
  "key15": "5gBzi1gWhoV8cocpLXBFgrWF8vPjdpRhAh3tFADSVJVEes1BuJrgabic4DNxZHkWar7f8KhqBPfcn25mjhLNLmMZ",
  "key16": "5E5jYdn12yb7NpPiESnHGzd2xVgERmfXpQWr4pfEJ26MALdsRvf886hMp3bmom2ithF8hA9stZuiGVJbqJ2o9iv5",
  "key17": "5r3fRh1Cxvy7pbGybC2ShsUBRY3ba9MsigCwbBRuTNCnvojogHMRMvheA7xC7senyAGqEYHby25duL1vJym2pAVy",
  "key18": "P3gbLzbY37FMwBKkw2BA3C19jcpvuq4tysxZ7qsE82NsF5EXXJ3c6RzAtKtgkP2KbhwM6kUyjH6xuoDFJVHcPgp",
  "key19": "4dWKUBQk2iHSfdD5xrS9E8CTYRjt7KXrqJ3K5j5vpjTXuJkLKECaUrHdNTA8eeK28XG3j3jBbhC7kmKY8iHoeX56",
  "key20": "fH1KUbXQEmtA9tR5uv5432SKtkBYA6FtrB9yL5dyU6xSEJBrpY43EfJ4gJrJqT3N58xqNGzFwqDM52pN5C7zefq",
  "key21": "3mHZQE5RmqdymbSMcbcg9tYaEV3WgGFzqsCHAm4a7fXGJTQrqVti5fS8UDG1bAy8XHz2BMkdjszquaQuXMVUwarn",
  "key22": "2HJRrUgSdp5hBimQbHMdMVVoEeqxnSRH2Lb6wEUXTERZHDCRtqc8rujSmoTvosxjGDpfhPuRytQPhe4A5iSMZd7",
  "key23": "59L9MupHzjA76JVD8Btyq54toEL8RRngAEM5Sgnk3MirQZg9U91UTXWzYjuY4WXiKsm318ZButv4SaAHcuh9BzV1",
  "key24": "4rKE5yef5XYLM9VNYta9hfsLFAZkXDLnc85CD6ojvCfcH7SAJCdPHmTbfYnM5fCqKtmp8GsnAg9jx8z2Wy4pQgfm",
  "key25": "3PBvQJXF3F5zyMDeg3dVeJZQnZRUDudPtRVy7paaoEELBi4kFjeu5NHj8nC1P3A4CwmZYfan3ANwkgVKkEKFbgYB",
  "key26": "259fMewg28hN6AdUbRN9DWjck314a3zvFMeBet9cyVVugfRJvb6rJJzUgoQTBws7rx5xfqRc9jtqLfrBQ87EuUo7",
  "key27": "2ggUY51vTtZNhxVfALh6VbvVSeEeSdsJfaGCvHJXRxdx8XawRJFqT8xzfkfLKfYZArLdB6AnuJ5HbzmGqgyJK3hN",
  "key28": "38S4oDysZqeQTb675LoH9pgLphhn8x3eo6ZURJUEuRQt6gCEBf4HDwUX7KbroxA4ppQs7XQdYS9dogzbxgtjW678",
  "key29": "48sUmtZ5y4hfsNBnHGnoSq9APrhNe7rE8sbBrCDNkNe7UtzpnZmX9F7bSapKCAWCNHBERcdV4NEtUUGJ4oTf3mWW",
  "key30": "2TsMjqsziJVm7U94gekipbSNiXh6c1KTyAqnqBFfZWa8o1w3AUVsx73CETNEQB9aFdZQGZCi3MdPUfrv4WSLyeGm",
  "key31": "2SRsPQkxdBrD81ATondeKiDvbnwwvvecohNzU2KhYrNHcfiBNMqnapwmS8mpuMn99mE42mP492TjgRfYPyxJ3x5w",
  "key32": "3WDuPq9zrkLeqGEjvGB9wBXjtgPmBQcw6y8zeU9tAb6FbotZCfBTRAQrMWmRfpSwCgjJrnBjwbxtMTDxm9hfT1BX",
  "key33": "4gDcHx23CGR2ifhaAuPPbTTwH7svUyTDYQGij9XPVjtc3ULm4b6DK5AmXTCPEDr7gd2j1fFWyG2QkrgCgpxbbLN7",
  "key34": "4HhvPAmg4xmFZs4nNcFeSoyK2pR7jDdi5eY2QY2u3FjzWet1g1yqNhiQM3dU4MUFmuLbuqTnPvFaPeu2joscDncc",
  "key35": "3Hk1ikBQ4B8NDCCSRcxHTwhKYiK9oY1Dst1KnxZ4Ks2HhbpVSXP4jVJd44hpo5YK1pQXK36rdE93wcXZGvtsJvaj",
  "key36": "MorT2U4EGWgraWeNU44kqQ9vX5nSNLoh4cfvn4QVpDkN6W9twMBadoopkMfrpxDpS5WwP8fb9UL19HgmpSZAAjr",
  "key37": "2FuDKhZfMvx4YE67naFhqB3mxNoXkofoxiKtjoNSuouzxH2jo9kT8mJsmskjZ1Mcq4ZBHmzk2tFppU4vvcFmJuU4",
  "key38": "3WR4SPXoNS9YMzeqhbjoy8T4bPjYqP36uVgWoWBGZL7qfTZ2Ptch8MJE4Qi7Jgn9zuzQfEYazWG3tRHkGtrx51km",
  "key39": "461NazqHjdRMr4JN78N3zP3DiGbkAKSq5rX3XHtAA7y2QrnDvLcUVkUb3vrpzHeUPHJNhgAujj34NZuwEsPHJFdK",
  "key40": "RWz3QPEpK4YX15KmBKdEvpeBHUzXendXCQRi5fH7PTSZu6JoAqXwGaHVk1yyn7AZZn6nQVuz2Vrg639SfmE1vjT",
  "key41": "2x8pHqnRzbxzbrSHV8uRenHLnB4WbUqD63HCyX4mupwpT8dUW1TGSmT3cZWHzrPa34LeqfRALZKRy7PPPawoE9ir"
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
