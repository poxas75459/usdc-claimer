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
    "2BKLeyTu7XnidNQvu8fSWDmgTQ1uAmCbQMB7T5PfZ8XxPgkdhZ5U89aw1kRDBX7fFArt3p9rvd4CHk3iq2VV83oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BRxyWWr1ByUEWPUnRUegRAZur65M4DA4E2ka3WegAS5st4Y8e8o3zQoPE1mVpMzRexwbotuiXGXLfTL5Ghpa9Pc",
  "key1": "2J2TENiuLWVTE4j9JyXcvLqzvse6uY5SSi7m2GMMv6pESFB7vSakcNc2UDDx1QgkqoPjtcKkrjN23mKTiWF7W8oi",
  "key2": "4eU5AMbaXjFobwPr2TL2c7DAryfHtTWwZMu5vjthckYgoUkoXMYENpMXtpy1ZdrqWM3BNm74AJinewphiCup5eno",
  "key3": "4vgEnLbSA512W4FnX3oHgZFzC16meH3dnFR8CATnsFdHvFjDaos86YdgsSX823V1gFD8ywCzrpaUrWitURDP4YuC",
  "key4": "331wCxTMZUQwqxTAYEPU67RD9k962REZpA7pftaTn8LnktXHCKzMinGgr6nzZ6aEFX54jdZXKMz8opJrBHLzhvoj",
  "key5": "3SU1eh3hh4jgVg1AvYLre5adfPmP43rKLLTruaroV5CVAV7ccc7KcbExmstfGGSCUn6epfqiyNJoxfw4z87UyEbr",
  "key6": "2jjhuqG86FS7i36AwfhEcf5732tuNfW4aea3wH37rwMdPBCFW1aYW7mu1jJKDx8Vd6HzAWuNEBsTAkxMq6m5Qk92",
  "key7": "55e4xLGoKsFx8XXiZi8NDDgUJqeYCfRTRo7uvWn1c1bhaVa7BG1f7iZcwWRHupnZRqi382v8zhnyQRBCimH11bni",
  "key8": "4fsYYiHqYTFqNWt9c3xHeASs4pxtaSScGQ4FEXCoScWLbtLAPJ8H7E4FLhLFsxUkp7mprb8HQihReMhYHY4DpW7k",
  "key9": "5QPiKMkvd3BJoGbnqqCcXBejsKAczDoEPVtTXobRE2rHrz4wjExsxQ3ctGTvd6tn3mcJ2eN3pVfGu2nytCxpoWq3",
  "key10": "456Jsmc8HnyJpMqJAzd7AhCcdgsUk4HnXxAHdi5MiBJRgAGV34cHWm9W24oDSgFfynR4v84BjehtKzAQrEfj4YC1",
  "key11": "34gbAzgP9R1ujEHX8nt6WUa6KENHvC1BAaEdkaTBMXXSiWzvRt54PPqxwA6KbM6U2jio8byVinAFEXtMUvgSei4Q",
  "key12": "4XYX76dyykTJdkRQWEuDhBKFtGvPFqRCYX3dsaSwZ9LDaSN6kLvLcegFX39jv7k6KiZXg5ao1k2y1xP6myi6S64a",
  "key13": "4dy4jz4UbV22FNZaE59N7vFmAc1RgtDZpfzHZwoZX8qEb7qE8vs7JjarAKtV5ChLHhi1a4Fm5kzUCrN8yL5fQMN3",
  "key14": "29jTmJcWtNKaTPfnMsoX2QLYCT8dT6c2u9cJHNLwwXY7exMCPVUY9DtAWhmzGbuBH3Lam4R74qdAV8PPRKDF5UEd",
  "key15": "1225rzJtKf3tugbkxeL3dHfYGWqMuopxnjVf33m8gs1rCjyAeQ5LTp8BNu5BVFLaNhv5rm5CiuGDGwx76XvrB4vK",
  "key16": "2DJh5VM5GvdMG2Bk8StRxgg7edh6u3vmZ5oTVEJP1UnSHyWAo2v3hL9JqLXTQouLFDyTJGjLwngtxMRBpGAVEEgy",
  "key17": "4QXnhUhsoaFK6JCsQFMUsjnFtNydrYvc2EEWpcJCDNDUbrup1wFuPhsFW6z2foq5LgkCtLPi1sD4zkzXfvWNdUka",
  "key18": "4S4UR48jnSbJ25AttJsqrsHEp9kptweQibxF6NBXvVziKqteYYZFm8T8wpwnxAJURmfWxed1nFd78omz4h8ktThX",
  "key19": "5JH6KbpffW4mtPJ6VKYKe7Y3t6em9qeAbXS9hSXck4GoJsSyXFqUoQEtck5kTrWsr557fyJzLveFJ18bscK56YBc",
  "key20": "3ToZn4h7byuAiQNFyWF8rkcqWTeLa7qVdu7BKJ7EJbmaG6GRTVemCVSxYW137JSP8WDoGkiN9AVtDvhKMwex4TmW",
  "key21": "2QH7zvEgdt1M3kojunMECf9FuXniH7XBQjr3enJhgyTZJK8c4bFX3gkr1zB9xXAZ3WQsnQ3LmucP7q8aVP2hzUNR",
  "key22": "4mp4u6LnYumMS3gMNwzXxnVHXshoDU8cBkW6pgeFt6LLCWTiBfEADjZ6BtWWy29Bw2QiwYVrYDGPPtAo5DkEu9jZ",
  "key23": "DzgrUTkyomNetSuD98RaBRR2sXe1ej3Loy5VFBTjRbFcaEb7ftij3MkLqQrc6VHbx6XsZs5yS4nFz342LCfyX3Q",
  "key24": "smiN1deajrXVGUfX7zDRBeoAF8npVAumg9X7j7xRtH5DKmsV88m4Np8uWru96cdsyPZ6ZztBfjx1YkeLrANzHJu",
  "key25": "5tyFoovnH97XRtcdAYz2gHHqqyYNeaXfFKCpbtcvvWt3ejoSSnooX5NUGAu1gYv6UvHG9DSQEzxDdjP1Lw1xo6ZT",
  "key26": "sRT8B3EBExxhzmcbKXNNkMmkLesN2jwSq1DppGHHSnTubV1HBUqgjhHKAHDAJYcaNFPAzbVRYxEVazufFkxa94Q",
  "key27": "24V8QbYfSupiMqAEkoQ2X6tdh541bWvbT8xbs97qNkyo3gj9j5wDQhPxcnVx3zt8nvyteDBr4N1TPHVe4Pu965jW",
  "key28": "28gYa9ssurRpz2dtFSEN7oihMYfH432b3HbJNwczXazr48Sd3XeqHcAUrSE6rkpeZXeUDFo9pims7FnE8ffhEAV4",
  "key29": "2UavYHLYKbram5Kh4MVJEv88JEpGBK9TugHTBWuZVNRKLK9G2masGwdfqfcyPvUXtbnKw7aHG5RpXCqZeskGPwSd",
  "key30": "cmUF6pCxvPutGLXVCTWtVsjaaiHYGdHpKfDzSsUN4r9aNcRbd337pnyw1qSTPQm6MHgMbHeeXz4QKRmp53hx7Rs",
  "key31": "3i4Yup5tkrr7m2B4JJDwiCJeFx323jJwv3tZU9e2YAKErd4t31r1pPok8GXBWnwdz5kaW97iXKxguPZwPpHxtjdL",
  "key32": "4j4X31Dm4s1361CGWF5nwzuWtPCJvNJV98etHT4B1wpKzRL2aqgFwA4LQsXQ7B2KcZuz6eiieL3XpApLUsCCu4H7",
  "key33": "JWn3vdPaPnjy5zdzdm7TTKYKEAqqXReWBwqC7h4jYTn312x6cBDRVjsgxJ4TiFtbyCYGzAr63fNuvakSTg6PSxB",
  "key34": "47WLsvuMSK345HF4wpVHpZBkF2cw76dsxubNd4ntYGXHWCBMMMoiZZGwvLYTJyMQhm9rhrXDucuqnaBTeLDeaigA",
  "key35": "2tttnMrmZUdheVHv17TMZcgLBhbZi1aAXnmopJZpH167mmk7veJwrSRE7BzoevEdy7oqZRjTMmZy2QfvTp9cexaU",
  "key36": "535LJFDuFtDcPrK9zAf8zB1uRZLG4WWRZkGDSknJFg4tb3JMzGHizy9Ca6y4GopFe836rucX82VTtRv8CEnoCUQ",
  "key37": "aBiPC3mVD7JrF7to6zecJQ97Tt1bwswfR5EShKb6tPUczXXkc7G7aFj49RmPhoRqHg8msfMqf2m1Qt1ryrBsyTg",
  "key38": "45ZvZ6fUQAWnzdEKv72YrMzmuhLKUdDP9wvymCcL5fAyBaNDisjZ9kNNAEmdQQ9kT4voLJXMQP7AxyANbvr29ztN",
  "key39": "54GmYQM283sgHSgX6nSYviTfZsdEYs2DCCZHDPQNPSZCMNkhmzkUpMJD1Rszvy7jNDeKHh2sw6gECuxbiZmJBEEA",
  "key40": "3fLu6fazRCsE8xhJAKJkcz349Thg1NMEWPYvAahPNGwEwSmbSjJ8qhgmF5MY5Ws5KBYoHoyC2Zmg4P9wcjmynR4S",
  "key41": "jeAMyN6GaHzUhvdD2kbrzGw5TUj9UVL29FGyqjJB3TvDf7sgzzVt2Y13sAEKoVDNWbKy1dLnHaRrSmgpaYTcxyj",
  "key42": "4jZ71RE9kATHYGsB5v57VJrML1xo5oAAxbPbb9Uf2hEq1tmRDxfe2FNGwztDzv7jM9K63LcLbLVYenchzchMkmWA",
  "key43": "5fWo2TCj79uiPYzdz8txKykXkskYk7vCZxscNjj26crknA5YNMT257g4mwSFogxxxb4mLbURYZJBEXEuHQwQcvTP",
  "key44": "4r9LS7GZ1kYuKmyUeuUBNnwnCBWQwKdtsXsjnZFBH9mZWxhELkwACRYYkaNQB3Wrdc4Jd9KJZ2g5ed3Dd8Z3b3zK"
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
