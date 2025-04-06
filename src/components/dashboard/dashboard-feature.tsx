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
    "3o2yieypjo3dHBFfVoEGHgi5DfzU6C1dpehkoV5YhPoeub1RvoTrt99EhYezRziAVr6Z4MBMWUh1aHTWqnnJqkiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236aHhjha2vM26MByayLmoNaEssTXTBtTqn2U2Dg5r3nm2DcMgtDEcZrR1GaojcBTALcMVDiybovNRkgJtK7JiBu",
  "key1": "3xE5CCZZhjnpT9PQ5xN44P2cxWx9ibASnwbjW34PyRLGSKien9NsuxLMrSmreFuKtNTZj9cEdFwbCKe6QGK4P7UY",
  "key2": "no1NF1NvaMV9VKe8My6NtyAoFa2R2dxnjrB7eLL1QN1r41VN4ymEWuLeRhU1UJ4jcwQaPR9sbTm8sseL8Pf25Ke",
  "key3": "4RoATdc7Wmxj9sWXUvNXF5o2pvLwvizAKh9DHs4Bjm4kSnd3stcDCiHBrYA4zon6XXGMhHykaUXWYWaejumCAQ2q",
  "key4": "5UiC1iJ2byaCUzSX2f816znbRSkCc38jnRaFpbnqP9KxEVRhLgykAZHfPMDzUS6cpwKzyq5r7cEc3MwoiTa6Vn2Z",
  "key5": "37wq7jcSKsJRk4dkC9FZPLKXWmBc4Gu4jqoUH8LvDGTdP3pWFXmkWX8MKSaTSJF8GhPdCZad91tRyMeZAKn8YPwQ",
  "key6": "8YawUUNESPKS8KznC3vCeaU3kWEBnAmm9DouJTq8Q7PRMayWTE5tMT4gbkSTcKYZNH61WqnnMKCL6SSAfR89r5i",
  "key7": "2yDSGZ6iAMxgZczG52fbcvmURhcieiXHix22h9MXbdyE3PDkamaRGztMNSqDB4qA4pcqVLnuDXp2vp6NUGzZUYQA",
  "key8": "5teJ2AHr73833SzR9XwRuwWuXNk1ewnFWFEMbFH1af864xQCxxzoMs6hh2wKcnpRDiavEZPkdroqTsYZtPUXFbFL",
  "key9": "2zeofoUcDpoyyzohwF7hUHbxVWbEyM7GCqhrA1ZYMDF6t8eeEutBRDbJKLTvZUDe7hhzHERZU2jqLqtMHuT2W9LQ",
  "key10": "44wz86z1qhREXiGf6eaTL5a6YXPG7CFyw4cxNPDF5XkRdGfmAFF7chSB7hNYd7LYicq8KXhW3kzwpQrn9Wn9bnf",
  "key11": "4nhYB3xJbypZcNvUvpPLMGtq3bQXPLkyf6mbHETBtpQe876ePacWpezUVhBgJiyfzCxWPxS6hKYDGLC1BtGaes9x",
  "key12": "aXjMMT4C43pQFoePM7b2miL7WuxPcoNjYx6fhm5W7an97uGhfzE1bx6gFVZva79eis1xKwGeWy8afH55jvzU7iz",
  "key13": "66GMPLBpLoEGTdYRJ5V14mWD5BTakyg6G3dfb4y9bbnMMp4zBcayEK5kPNE2hy8mnvVJgvGr4vpjQuPyF2uD2RLw",
  "key14": "2DqvXUQfcKQM59crsUEQADMdJjAisyq3ooTtVKEakdAGiSzuVB865HTHGPFfXP8MtUpzGS9kb7RMqN62veDy3iqX",
  "key15": "u95Cs3PK4PNdcyaKCearXNUe9K739tetSXp6EFfUeb5WGuVdo3LREfEA96yaMi5CzhZDrtk9F3cEfLKutzH9i6Q",
  "key16": "5mkbL1ocvvw6zDLBE8xC3nH2SCXSGQ8gjWviRZqmdfVKoqMpistCt7wdvwTBM6inXm5ZEr3kMAkG4uWVpUvyu6jM",
  "key17": "665jCcHvPpTAaxVLD4YEWbg48hDr9cN5vBfBkwz6XufLneeDJP6ci6jgQNjHHgDhJaYsAVM467niJAgajcU7yCBi",
  "key18": "58smdAtjDXbT5UZ5j5PKim2ZeL7k6EFJneWtw1ZuXy51rEP8J5Q7xq6biC2CspV5xjUhKgjtmDw2ErV1SgKXbv9s",
  "key19": "LpwxbNgcb6QuGMRk4HqP91eiEZJMkCKbxxrSZbK7jcdjCLMeK8X6UvdrGJRucy7cSat8BeM1mk1x4ZdvPDrW7nv",
  "key20": "5QXgzJJu2GuiUNALCH21DzgW5ohynCzQwprZqP2ozemBvFiPaEdk72n5SucVF38d6bTvHnS637qfL8PCpdcQwxAe",
  "key21": "2XuPq7PpXurqPLnDr5ToG4heWbrXQGvao5EM6jrbmz9kFpFfB9pGYLBdjvHtNUmUvWHvweHcUuK1gd6wbKJDRcXE",
  "key22": "4qv7qNr2fi4V2tdiff1V7yitz5VmwjftpWoy4NAzGFZjwJUxNAmmXAq4XndC9BW36169CGh8bUf53MGUx1yMyJGE",
  "key23": "3xi4HRXZtduXoxNdmgZXb5Se7Z8U2MDqfQsFrBX4hqsts5fatWsrzSeJCHP4ytotrkYb9QZVURP9LcyRwGhx91GQ",
  "key24": "X8bKmdPdDkV5KyzH9m8pGwRJdJ684QeD1RfJKnEnoYMb9r6EHUmDZUUQYmPckFyJ1oGfpMuiP81FY2NsX1airQ6",
  "key25": "3qCJL7y9DiJZTcHZ6ZSitWaY6fL4SRcChveh4QP7VeVVgwbcgu3JCzeha4t39DLtLKck8841JezPHmFzB9VkHYKF",
  "key26": "3owKQw5uNFoAx1zxE2cH3apzGHcQweYRrawU6mSxHvPrr3vs66scjbWdciBQT6VP83xnGd8LsCgdnWanFG62gGaY",
  "key27": "JhFJ5vBgssjZGtgnsFgypETuoEzbGhgdNZUh1B9WdMNtNtw5bPoTY3vgFoRYnf3QMyXghE8P8vfd2eB4N8RLUQ1",
  "key28": "3hTPqrUDHTa1zFWyDtfB3dYagNMuTUExggCTsRwdymocnrLzapVAkYaxmpEBNDAZK52otXBaKJApaW3k2bBGvFtu",
  "key29": "52rZi4ShJczQGrRjECWScc618VjqVoBiodMHCnyjLH9VWkRhfGW4pen4MjKGHm4WQgFnie4DJs2dcymfgRcbdhWV",
  "key30": "3JLbj6HdFyW8e1EdfA6LjeGctRrvT31JVKtUNfCSSUgYiYK26w1t4EgNBXT2FGhVkWXFqqiCmmJQdnC3WcGjTVY1",
  "key31": "Ddqgk5JiXcvshx8Hx4d3H2TRYxt2LeYbjGEmwPNk6QaNV6mDdEAMAMsezcQQCrfCYtP1HAhE1KqaYDpu2DZdGEZ",
  "key32": "4jHU2rWttZ2gbXsisWjtoDxz3KduZCQkwQEMYDDEA89xK4B9fk2waN9GAEDN8ifgWW6Q8wwhRHic6dqjWf9cVBpH",
  "key33": "2UceouquzXcmtDgF8aFmeLGKEdDEhdw4FcpmEXSsix7ZNED2TxxkT2CtUzPuhB57wHJYAGYr8isxRqQbPZVjyfWR",
  "key34": "VMvLXGUfBxZG9Vb5byh1hrii4UmNK62MtqHw9gbZHRfWEyLTAAuM6x3N97Qz5o43y4TV3heqHHRimrCF1dXYkwT",
  "key35": "4sFvGYDkLE8jfuCubLGhduc5s3VRG2tbD97FKNfgwo6RbN7szdgYfkpdS3rPmBDnSmUoBRvXyr4jsi3aHpwdUcd6",
  "key36": "2mA58X9Prm1PuWdQCk8mpG95Uo6D3SVRMnwFohwFyiXmb4ZUPQ3tGNQyumEcPjakcAJFEL82mAYgAH8mYKRqKSsh",
  "key37": "3hPCFzrfVkJte2fVSt1Y1SexGgrJtk4HYbWPn2yijTnVL9Jb54chshHQgQkPEPxyFT7dZKCNFJTtm6PwL7WDanNa",
  "key38": "2UZW6TRSmAHVbXEhb9yUBzgBKZWXukqFmJsai2PMBCdfadwtRWGx1cJc9DoDaUf2uaH2umRoj1vqH9JLtrUic4Zk",
  "key39": "2vwjKqrJ6VArekwJhK6eGLFXj94t1cpDFb1c3hq4MJDRiZQwLnK9SqVQwjwNyGrPL47uSCkL6L3s7L96CN1bEYq5",
  "key40": "ke5dzS1QxYNQouyermeLaTreY8VgcRQ2ngwcDcCRNuDaFzfCdgoNDJUBtuoJpNjXhDegVTLQbMeHvkMFFTPuWQB",
  "key41": "4bwHcYnQ9jrZDNeegJvZKUx48NDm7h5QvVYa2Bax8T7Y7rDm6ZNax2sjtniEaen5wGdvmDAHdFw9PLrqxzFF83gL"
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
