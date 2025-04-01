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
    "5dtg35SgydrQNc2bXLHKTwQEfjXQnRMsN7DqKaSNyR5AP5F7vZx3kVytsACLXPFGXUADsTC9cUPS2CyYQaHAzSJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcKmpXduYLJsSTJYUwRCGZ7jbHwRnRNLMwdXgoL5D2GqDmdqbWsvJkLKoNdBBQXM5rVCfEru1Nw6oJJqjPLVvZc",
  "key1": "3tHvvnUmBpU4uWhQuSaQR9UstRbEhn5Ss9Viz5WHsJKuk4k6Kgp9B7B6uP4mz81PaNudRDyqtqsPXje1rvB9VBFN",
  "key2": "257tGyGbaQaQMfrrpVDjQCWSzZ1UL6Z7NxkNAbqhqNAYm2XZNqsGLL3bERf51V8TvCkfsNPJ1KjcNki2WYgzNKzA",
  "key3": "5imrUBzcHSgXFGmPefDWmavVxph8d9g5xPEVe7MKG49orLk18wmZNi1PoMpFe4ktS2cgXUzkLVWGHqjicmQWymok",
  "key4": "548xZDM5auVMKTAqZpZc8HrEZeAZGFpSDUAsEydoEXKWc1sX755xJtosTkktubGKRPeWX5SM1Lo18SCZ8Cstx7pT",
  "key5": "DiFRnFbn8Fm1ZTUaJyNsQmnkf3TZo7aKmmJi3ZUiqfcfEY1rKhCSQFata5kt9QqzmZUXccXF2hmfiu8aLx7jWew",
  "key6": "2MGceoPUg6Hk48zQZXbkTEyNaAoRoookcLCKHy2MU6Hm52g1Uch83FVbUcHzHy8ATMhuPVSycDTCLdprMSe7McFD",
  "key7": "4CJX7sy1TwqDpkitK1naDyLSKTVFKmyY7fvZFHDbnxGTbe7wWZTLeVHsWmEihE4egaD1RkUd9Mkc13so4onL3mYd",
  "key8": "3rEHStJFnLyFZKwLmZVi3ZtjozH1FVGQjSgTbRA2jaDARhjbQYcc3KLA9D4WkYRiYuhoVhkc4jqU1xZ1Qs2V4tbE",
  "key9": "3SAhwHLcvy9igxoUQmMXFpYMv1wjUGTuWpNTTSzyNaWrHwtvaL85dnVnvpTEH2dEky6Kv1GB2EEJR6d41ewDXThi",
  "key10": "2iFqVnp9BcfMSiwCF8t4KVE4S2LCSbC1JToTxVkEVBfy2kSaZmD3Q2o6FLP7Tv8BzCcWnW7TkuMcXUgDf3bAn3Cp",
  "key11": "67UMpWWLhsTGbbYLdgEfbqwwH1hCLy8fTJKGfN6vYkdw718AWkamwKbaLdZT2BtHqaukrUae2jvoZNrAiuDkWdBq",
  "key12": "Y8cf3BRsrrFQv5if32xsYCJra91g2uQ23n9rdaKDULPRDGuozBAoW5pT7SXBiHCqXd2LD78cjejSLQvSRdpMkyi",
  "key13": "63imwj9rFbfR1oz3vwHRbYxKqN9EoZ15ppCgCRXdToX8ddZ4yvUiF6LAA53okZV1DGdrANUCcYfaVKjyenmLGD79",
  "key14": "4mUG3ZGAYJ5zd9arxp1ip93WKYNAU6CVPrKm3BehAwGbxJfkPy4o6yoq8kLNAK6b2j5KJ7Z7DcuQLRfR17LKBhrY",
  "key15": "47zXwUQZLpKUoA1pq3VEirX1x7iAGrBV5WVPQgEHHvNLUEUa9KoKDeNGD4jSNCNNfMtpqe1oF95mDiwuLdXEpZQt",
  "key16": "26WHPY4TmAgfxmQ7aSW9xemo3cEa331vMdmV7efWdTdjawQqZkQrCLwsbdbDAff2TuUtARfLA2ajuraynVjZ18o3",
  "key17": "4VYAZmJ6XP8q3oWNGJMPYXg58q6YjvBXmtxfuLQEEGSteRmWEqWDEFA3iAzQdnuYBaedZ1DWnybrtQf6twA2DejL",
  "key18": "bKwpWdv741wpvD6iKXbaWfxKwknRbNtexh1kqTcWTiniVGwPqxPzwHqsVVTKZcat9DqK4nyC361AAoidL97zjWE",
  "key19": "3ZB261VehHeZmPT6T7KTAeUVAoYpZY7k87GhAsgptx7R9qVu5aSJoUcwqvZuHDSN8RD8LvZPBnR4HZg2S3gjuETc",
  "key20": "4DpWeY2SCytZSG8J8332x5kYHKNC65WcFheBSWvsar8BNhuEoogNXrfhrZGAivv1MSFja2Vteqgvktn7BNH1uUxF",
  "key21": "2GiQLEBynoK1V5tYLfvQ1AArKS6pZy5n5MV68EdR2J2pYWqfXVNL5KE5WyAn7PX6xkYXv5HypCUE7SsKMx5A9rwD",
  "key22": "3bG3Y2JEgfXbBpNgN1vJ3iCiqPKDcvVBCn4xGre9245DjqJ76vPk6hEZBZ95b9DQFp8jM3wEorwCyh8wVhysjrEj",
  "key23": "494GuFPxXhTmtZQ1kWaaiYS6XuPdDkLaPjnuoi1ypDDieGUuboyu4gXrM9PvB5fgss2g97NLGgLoxt3L8othC4yE",
  "key24": "gMsz4aFtPWAZLAH1Ymp4TsrWdaYw6NkxzZkhWDn5ocYK2Xsn8pAT9KzHuTGyNzVARYtoYoUwDtNj4u7BFyJjsy2",
  "key25": "469wtc56cj9qwhNbVPrGzVW12begYDSsPufGKqEecJ9iU5XYiic9Q4Fe1ZucrtKswVFtnfXfyyzTHxYyfJ4o113D",
  "key26": "4CSTgMTBsYjYN7oywPE4RQjHE3YtziJyTTWjKXHU5fTJHpRDRRWB7J6KSWmXL6wsWZvoEygsHDeLq4VTYp1adR9H",
  "key27": "42tWDyaUiXdt1ofhuLip5S8hk811RnJR86r1oDEt64Pt5zEEuAzQ4W4cta3736iBZRrR5BVhG8RWiQeSt64RxXyJ",
  "key28": "4QSDrdbnzatxFdzY7Cr1Hr5TD2UAh9ZC37hD4nguwv5FcFP7zJeLgPwnJ9kntZMa2QNG7RCicav79UBLRoEk7s4Y",
  "key29": "3nBRUVUCWSkxG6TPewCqkEkiGGBMfo1iw8B2DPSwn6kUqcZkwR2UdhvcS3ov7yYvfSTiuAnhmxPkPtx9RKXwiyYz",
  "key30": "u9RDa442RsZdcJSaRdjor2KED4KmMD6nsVn4mkoUcPZkm3b9gf4dmMVPW49cNLKT2nE7Q5bJ2CwY2aZAnD7hTPu",
  "key31": "gMXrFiDmKTY6Ch4A2qjQL9rzZihKC9Lcd5guGQa57h8bHyDyXFvvTNzmxJ5dkxYCymau28oSrMDiYVp7f1xNA4N",
  "key32": "4qfmqTKLVk3jaC451G3SCPDCvARuPgvkb2bvhiE2fEvv2EuF5oRuERm6fjJ5LJHFWpZKpxkUNxpHhiVcJAtcsvxr",
  "key33": "kTZgJpHiCLVKhC21V2yAHDmExgvYtJn7skAFar9VhQpeALeMwrxKnn2djNWZT4fnXsyNcWJsovo84rVbznW2u5G",
  "key34": "4RpLoSiCngM95qwXcdaqduoCA7qMMUwGyYMnZQXYkk9ZwJvqyWvYy4VaXVCPFXocUgffqYXrZAGKNYpSewiQp7Qb",
  "key35": "3ck8pw82NbxqSsfFvRnMcWiK7mTajsXMXBhYCQTCJ6Pio4oSzsruLJm7nbkGwDHFNQdmphgVzDhFyzgLGotP1kaC",
  "key36": "3qa3Z1Cvmvp2NDgdKGJphH4HhZLaN7jZb2wwSjYtMRfST2Fnb2Y9zhZuQgB9vj49ML2VhCUN9a2de1eanUpGsymh",
  "key37": "QkRHKhwPwsbP2kX2qzvqUn1vyXS38ZWa7NVkeAaBM1hsWrmx2akzn7TCd8pq8WPzJVZuz7GFCoy56iVeRKWamrH",
  "key38": "43kgvGDaEJdR9N53no5ywqaaHVYMDgDHqn2AXgySha55k8pt5WZdCP9Qwbcj78MsnHqKviEqU9bYXRpTVfMpWdtw",
  "key39": "64g2No53XhwMpCoAhQ8GcpjcRnfrj88Vgj7UgUTdJgMkzGuCPCfmfkEZkXw3HzpbTLHsuQ8CtHjpySy8dvTwM4DA",
  "key40": "q1V7DUVBAQLKHbEpBZBCtLxipbQDBAn56bHjYFgSkpH5W74au3qM16NRqQhcc8u6ZarvsGRjrLm59p76Abj1XFe",
  "key41": "2Jjfc76BFvSQeuYtyou2WDQ1RcnVtYkV7ZmLMYpHTSyiEhifF4E4YwdtVzybF3yiYFNwVS1AvJnhNSNAA1rir9xF",
  "key42": "5KarCcvEx2Yw5TQTzr5ikV6dGoH9AZV9vxzBdm8UY4xiVbEgeYtbaTDEBYftCG4Nr5n2NQeHUuKpcBv846WeRwGH",
  "key43": "4QXTyF6LACsK3scjedCUJPhDgtCNmhNp5y3bLbVrXiJvtUVbkXc8hTpmj9kAhypq2g4992mgx8betxTXKHHu7Gt2",
  "key44": "51vEj8Pf9kpMqJGMwRiQQQJN4eyQuviNJJZk87gQTrxiNdZoaUow4DSigyrNUTcx217NWTT1ddAMV1MKcyFHztgr"
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
