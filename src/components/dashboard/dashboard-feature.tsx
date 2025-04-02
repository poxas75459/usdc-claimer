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
    "5nkzgq1EnLZhZN141aQdVwJmyK86QdCZCmCcR6rY56XTJjnuRHjx7uAPhFPtxho2rdYQYwipcNDfwSJnUp38GYpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vty7kejA478DPQXuAdRMvUC45wWESgumpHz2SiEnzdxbm5RkKAoRYgFyNpo3KpxTC6c8QTCfh8gE7tjJwbQtqL4",
  "key1": "3NaRXWW8dNmDAa8cRCqztapPFBbYvpMeeQ1zv4BE3fNWvLppCkYEVdvEmss1QhzjuJ4zhsb3EhgatR4ibu1NMx28",
  "key2": "2KYstgNizxEW8VeYK4XxyYqzYMk1zbK41H7xuUm1fMW7VxemhJLDbDFFdEdjRUvo33fwr3yRX81RgCDJGK2fdAXs",
  "key3": "3gUdnLABE67vN8yHt9WQ1YJJ7q42tSdxdQ14X8mUq969f7JBfbgQ849BNGJ9k2pQQYB7HYwzsU39d214YDieLmEN",
  "key4": "2F2HRgxcihoLGVMmhnGRJP11xAjczB2g5YJowd9PYkHBXpJZyejprZ7WQdPq5dCwA5aPvx9Vi13X8YtJTxXKcBk",
  "key5": "3D5f4nEc9PhwMvR6NAdTi7KdbTBK3Sry2DUn6bPvFNk7cXYD31XV75rxF5MaGMQwrVRqavwJ3t9yzRdJ4MaUktru",
  "key6": "55jJppnZ3EZLgY1muSWBkVJt3cztP8yN5oZJvMWiEjRqxMmoddteUP9ZLBzSkcJocKWnLwDznywLS155gZmW9VfQ",
  "key7": "4Vz1bCn5wkqv2SjWkfb7xyzbb1dqyfjswuVax2kTYF1geSRcQsxuVKM98zSSdS3RkZNiKFLhioNMBuwMdTY9HBq3",
  "key8": "2KyNrrf1yrzP4a3Xe3QJC2SYuQJQKYrB87J8EdoqY3CK3GVJRoqJTwg4VEwCnLrppeT4MrA8yxLViFNsFxWohRRM",
  "key9": "WoYKZGXMr7LRd57dxbh2Yf85ERSy5k3kMyjWmLnqpPoVJoriJDHzvpBHcZrCiANfxmieDaPq8wHVdLUoAwA7DxG",
  "key10": "3yV3UKEYibd4GVqfvxGkhdCzB4mCTrNqnHJQ9eSrnxasuB8xHx6jbncDatREeFesmQfyMm54tNbesHsPmpYRDnJo",
  "key11": "4xvdnt3AyjJbdZYKMumHSG3XyAKS6wJpCkVeTVuMMxHa3ZCHKD964HZUMfXEQfMtwwbEfAinDMwxyhSKMPvM8NG9",
  "key12": "5CjTyvP2mB9KUcW1RFJVrH3zSXKoPUr65Bn7X9xtVZR3KtfGEKJ5SSWSrPwJZC8a7ccYN2smVcBrAi2cV2rYBqha",
  "key13": "3xWkw5uHXCceSP1nvns96MQmH1DqLtmFwif5e1sZ3iNKBZUvmHrZMZym7Ys2SeRQsVWKw3VEXQoJLuvBBurVFRdu",
  "key14": "BBr1Qj88x6Vh7mV7BSr4AZT9CHBGGRxbevWpPR6ccXjMCZLsgGzQjH8e64g1Qd7Jp94tXCx4eRPMqSCBpnhX61B",
  "key15": "5ejq6wyEUYx73JVhqpJnpJoZcSumh2UUM3tA6CBEurJB4KbqqiUr21JNTF9zkxC1EX3vQkKfahpfz58ctu7pzfm",
  "key16": "21Me3rG4Qw2jEcuexwYaPY1XUGzmAMPg59M2a3VMuPxvGAdqMKDZhvzHZbetbX5xAPBDmrwdixQXN5TbqKpVZPb5",
  "key17": "3sbAxmUBqoQtaMC3WnwP8t3KzEh8oRLiy6aujZm6YeUUg8cLxUmhvPFrknvURp1L65ho2oftKULMQyfHEeNXVBxU",
  "key18": "2oapKGtqtrBPRNUZKMocymWMSxpGybCh56zD9uGXqMDb4uTX3MUKiTpszdyAowfSi4gD8hJ6qtQmh4XUwVHkZRBi",
  "key19": "4CqD7vBdA8oandwZEjE8Qb8yxWSiNqD3N5DgPzUhh89cpwG4waHSPWtJAiTkpyzsBiDMtBv4diCP5b2xQrru79ao",
  "key20": "5MxGQx9p6tfCqWvABGWXKSvqhxBT6gCDPWLYcrMAdhhZYgNUEwjc7cqEV3nobteUnqsTad29q8JBUgdguAXwkJnf",
  "key21": "7qKepBNCfwbHEeLWfZKjHtp5yuXk827QLm9Ee25piFNFfVxkynBTL1aC9xVB4uBnp4s7ef9imRTQB37vEgSDopD",
  "key22": "FHhFh8bKT5JdMW2iC3sMyjMkMJCfeAkvZgx7W3moP1B2uS9zKUUQWDmDZpMsRCGsnNSFn9tyDi1eTKkcn6BMrsq",
  "key23": "64nMSNxhWye4HJsyZNBdwi4hhtEhHBQjYyzWvAdDoCphRgnzPG8oCMJJbD5MjmssxwtLai523W45z6NvxwdsfP82",
  "key24": "26qJ7mSitgzsEDxFdcsxex5Hp2ULxTUWv2P62PJ8zJVDkxt8c4sbSyDYDCe3Y7SnFpYzo8jEaT4dCwuPDacH3n3i",
  "key25": "TP9A747mRnxoi6WSPr8XhKycooe58b4y5xwnuY9ZHF362hQA2Kx41iivqEoz6JjcnJswLAfQn7iQPgkMCkfEpab",
  "key26": "5m7dA5Y8VdA9pdmwpwQmHpRo7pJiaytCtFSCN6XeEV9fxLXRtKQEJDtWw3JwRBmQnP2aqMdikwrrr3e4uGVWoNWH",
  "key27": "2H8wWBqPFcuj75Ae7JHvBMXm4yJbQ2ckXaZstRhgy2Mj9SwN2w9Evd9awxP7iFwisxUzFwDk9uLBxC5MFUV6jmfp",
  "key28": "3UMmvGVm6CD5xrjocCQDSfnftyX94kZWRVJz28Rjz4KpcbMbMuVNxJ6KcKHnLcWapBMrkKgXe6QHk6zdwWYAx5qc",
  "key29": "3qoMFoFyZwawy5sUQX5ZuG7JhcukSRYP9AjLvfuep2E3tGKzLAEtKtSfCZQvYCzb6rc4E4GS9mUr3yhdLAnx1HJG",
  "key30": "2zCKeVWKw41FyQSSD2V3JCxHcfJkMe43aMcyMonN1e9RZZ3f6XeMHdbRBG3i17kPTqacWhBsXY5nQ6xjjdGvDgqS",
  "key31": "2JoGuzXweGD6j7m6QLPCG5JNyxJgWB6bmmPnqGdrjx2GZR388pM85tnufQwpvNtGFvkgDgLfCrfGrADKdCu63XEm",
  "key32": "4sgSxDBQPaBx6aRRbpAGsuAtzAshgzJSbYX1W3i79JDAf8YRZ482gpTa4sJas9kwFV5dcCs5gC2wBLD552wiXmaF",
  "key33": "5BQJw2pzCXsJ8AwqGUKJ7f3NdKhZs6optnQKfkcAzxHacU82mKmzbWn9oQSn7FePqubAZmNCmNNy65g3VY8ebxNa",
  "key34": "2oK1oZcKv1ehyiXvpLbBoqpVVC9SecLq2DNC6rwC96KF5TKLXsjQo4mWToWXK2J5S4PvUwrHqVx2r3y4a4eZyFpr",
  "key35": "2q53Qpys4d7FeAwLr9PkfqwvN12AspDytvZgCf4aUSCxVexoXaXv2U8tBUDv17cJj9mZSiwGQV7jNGWTbxt2ZrrP",
  "key36": "21pbdr7EMsaXUbgVaWuYKNyN5eCoKhno8yHEoJnFEiFSd6i7hiCbbDyDB8Yy3Ep36mYFRxLvdY3y12W49TtdspJe",
  "key37": "3nxawD51tp4L7hr9iYuupSVfLhnupDaUxwcRpnbAkSDviqp3kTbBheLDpUvGG2KbMLZqmepGangU1zRNWWbZpL8a",
  "key38": "3nXCcw4AV7zhT1iq7J9ru91jgiMsHrQ3k82Eaay5C26FDw5F9ebM62su5XZuxEoWRtRFsJJohiuJfACxCrTR79Ez",
  "key39": "gVWq7fGW7TWQW98JGRseVzhw5pMVpfA4YLKST1kuMzJ6nivrzH5W748iJUkiX9DsMcDBYM4Q8HDq4CPKMtQMbU2",
  "key40": "3na9dsZzrKbEhRVuZPkiwAXLD4j1xV8KKGHN2Z9qdZzECek7tNPwsDfHVciXBKJ4WPvFCapngbRBhtHn4jcFqKAZ",
  "key41": "vgmuVrFRMYEX3pWvNhdo38H86DExYsQyG8v97F87mPFg3hTVcFDStPgPcZZWEvYnyx9feCavsHN8AUtskgrZivz",
  "key42": "5fXEBMnvz4giWdDrfbNHw5a8xfqSsq8i31bwU4YdPmrHFkEm2FhWvocsitTaccxfYKGV7PgUto2Rc35N7m6MiqqR",
  "key43": "2XXeb9ZZPGxeXXUeCSCYPSvXzJMzXuqakTSTw5sT6kkpWb866xRYXwS9yJWjCbTqdE6T7e1s9dkEGvUUbyBxYKpZ",
  "key44": "c5afTmAPUpXBCm7MBtBLpyzD6nK8PXsZqckixc3iNB3wRTo3o5rYypwYPmzxdKDYxxfR8A2jdsuoCXV1eG2EWh5",
  "key45": "3trw2pdKvDqf4yEp8gjXTbKVoavQFKk4G2cHhNbW7oqF9SitoGXPX3WT5oESa8y5UqrEQ6ENnWdL6X2QqxDjKXKb",
  "key46": "3sSHjs9mox9yJHU333Y8sirSxUfAEqr7A1tVUfFNUzzbtsagupA6H6siZT25H9zpmPPNSCAQYqwoiJqVSUd7mVTx",
  "key47": "TQnvfbpUBtHqU8qKV8WA5PFHsJdetfduLwg1TuFkoj57wyq63tCsUXcQEjMzrvvLsKwcGHmvatJwp4APN7VBdBp",
  "key48": "4d26Uq1uY6oFKaiLemHFJzxgacYVKMosZ4hnSiANpwLp13f34Kvqnyus7YG8es9j2mzvYYAZdiCFkM5P9eiRiGU"
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
