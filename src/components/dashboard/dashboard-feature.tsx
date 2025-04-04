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
    "UbuAyoZ7xrihFW8LYAFMuYqWHkV52U1vVCn1goZ9eDgntRs5CiHRvzS4hEnzVLuThRU7owqe2Ux59yK6JwoQtHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDa7f4bP9xndnkuAhJQJXpcddAbDYyJwHpFRvn3X477BL7rnBfhMm3wfe11PA4TdEd7oZw3Z8XErSvhe1hZxzno",
  "key1": "28KBLopS9MxVMAPH5LdDnhb7b9A1LynBcKUatHV7tqf3GUJDwmEy4H25TehN9m7DUV3qFxfCHFbmEbUZQFJdAwET",
  "key2": "2J5mNSPdnFyz5pT3uPur3GL7pvms3mDFKR9UUqyrotoCPGfBmGj1EgdfTXSKbJvtQqao4fHanGC5oX4gfRBdGYCL",
  "key3": "2V6nsWhmXAt8wqSbtiLwKcEakJJ475R9P2SeAsnqMJYmzGoBF5WrKKGxVbwoUD4x1Dw7ck6hX4tPnQaewDqzWrEr",
  "key4": "ThCm37exdkEFjVUj7H9TCmcEKyY9j6kJ7puEutvECmc1X7metWinn6dsMC3rikvvtVUQPwfqd1HaXBrzpAzXLub",
  "key5": "2VWEC3xTA8R3nq3hyMcHahmGSPdhGBigSVi6qzUpcZE2SUh1fz4221cXXPHV6n7gVsjQXyZ9D7ddDcYm4LEJxTWw",
  "key6": "5jvKp5Wzpt84MgL6GMLzyXDJhURtBe68RBMgLjd2uZktitftY1iNp1uwquZwW5mxQG5JUSuGQYiCHrZR4rr7UrsE",
  "key7": "4MJyxA12uLmZeZpLeitUcya3TZEJVgF1dRaS8prM4LiZMo4tMBAGYzpFCDZXZiGULwa2ZDJqK9yceAhzqnUgQfTr",
  "key8": "3DBeo5C5PCniFtjQWTTe23VLscSgQTjfgUjJTHcDy3RiYqecRakwGL9SZWdLwJFLoa8KvFmdmQmWCpcapKGR3tVy",
  "key9": "5otEHRpj2Pk6wjU7FZyQorwBgJLQHBJ2sXh1FyGhoskDEmpnHsyNQJdVVxJM9hdwrfR1hxqig9uHJQeUEyun6L1C",
  "key10": "57dP4sDRPCBVjomQi3Z2HMqtTKYLpeSijoQGSBY7foqd3L7pmDcfNTZu4sYmSDQoDy6ihwYYZgFoNcjfgPfeRahK",
  "key11": "2DaUVfHM1rB2N9P6D8HavcVbdQ3Nn9tqGFEyKGcjB4z4WisVhzZCizM3SsrrrXN6gbXNrEFDb2tFmRdhD39scgra",
  "key12": "Z3FA66fe6NcPJ6mvkXnYX65TEz1o5sipntEiQShHV2ZtZ4NMREkFA2MXHJr4RKDberY8F5H1txgDpxaegMiznRA",
  "key13": "2XkHCjLwbcFs4opnA2Kyz1nUwNNFUEUMfD3LHGuwnvqwZ3XSegCoPpHD7Xn7SXwBWkXyPnQUdb6ujMheD64Ss2Qt",
  "key14": "25am7djtSwhDqEJwPHeqPhYCkLUhd2oeEtynoWhNGkcQhK1wvkNFaN9at51CJaDfXRdQ86T9y8Dj4wgZTuH3bknN",
  "key15": "3Jmb2DDYqVtRXrQ24sCC2wNFrSwWvKJZnKQtNYxL1jyfpftB3xqrgwYrke2Wyj3ejA3ePtj5YsuAnP8tbzLg49QW",
  "key16": "3aQYGdt8RA5B2PjhTeAmRKtZ3uKmezXXvv8MetgdYuFtai5om86My3ncUbZgx68EpZ1C5aWAiJ2fprqAp56iS7bo",
  "key17": "5vkKk8Lvp6fHbeLKTMiYbRKJ5MFwNsYjBssJanwGBZWppYPi3Rcb6S6cnFwrahHnD85f5z3P3xXwuZUxzTt7KT6u",
  "key18": "bcneMESegi91M3b2rWtA8Lu4yVYtg6C9bf3DNifGKKoCMoNgS1HwAyEqeQ4t3b312r7qj3tpKUwfwAENTx4rst5",
  "key19": "3HZf6LdzkFkEF7qzvSdWYTA1gDfrTXp2AG8WPYZuyHAWKAQg8aqtjCxNKHPBWXxyQb88PCv5Y9LQymzKYZQu6r74",
  "key20": "51no9a5FQK4inJKPvQNSD7aFAFHiGNnTBcYzJskjaLcNiodWbQ1n4ZdRGrrwNyKpYKdMAmqxBEYNaSAJMC7Tzwgs",
  "key21": "x2NrL94YNXUwNGrNshS38QbAkojwV84smxLU82YGCGHsk63PaaZGUkNdYjrwcM3W3RbFZ8wWG2fedJ6LgGj7CqQ",
  "key22": "rzN87Ne2GM5jek8vUMemwERELchudz4c9TiTbRxKccYqjFYa92ypLn7YEbgH21grLgxAvEJocWNJXwcsL2vubjK",
  "key23": "3btnhTRgi4exmww8SbXFN5ga5DpUZHUf3ixA7gt3moYyqai6JM37DS4c9LYVY16YyxJBv7e5th42VvSerfVe4EJa",
  "key24": "31iQnviaKhdWBoUGCJ7tuVg2467D4vaupxCSdJe5vs5m7Bivc2zpoWjenXX2qGXHRMRBoa2HFk7biEbHtVfPw9C",
  "key25": "38DurSx9Ds8vAJE5e7oTGEu2tx3BYtedgkt5pC6SmeHAGzyGJhD93iqkyqnhc8HongpwiF2SeZW4Y4B7cijnkme7",
  "key26": "49nVJHQNLg4zHjrKFxtn3BskQf1qsJbzmAiqJDkkxMXsw6TXEECS9rtJ6BfrWqi3Lpc4injjN8iFa8rWP3BxceoM",
  "key27": "1Bf5HCCQHb1PxGkzpEnmic2eCuxznkFoXrX9av5CC6t8NGdTrM1zCHkp5wnJJDBkKxJboECmLbWh4pXtSueRVyg",
  "key28": "5GpVDtfN87vp6HuW4XoAR1SGuwbTWSnDUiuFg2DV4uRWHuaKeiBPy4B2vepVabk24hXn8TZPHxE9qPdeH94HomGU",
  "key29": "4qKEX9VvEywnAxD4VTcoqTGUTtBo9e7pN1kipaveWXh98DvptCAQABQHBiZbSZZP1jNL2aTsxgNaYpjRdEV215tB",
  "key30": "5Yz5ptF2whoqTdaaRrE4HqkjhS1cbm8XMhBY1kBbga74vXatSuVmnmaArGeuUDJJhsMJhVagKuErjYw7NKTKjLJC",
  "key31": "f4BHQkW9ahpuJdjh6c1SXb2smXQakvTBRXgqh7Ac85CpdGAR3Sx3ojo1za86eHXmK7MaKYG3mbAc5pGcWKf5hyo",
  "key32": "2vxLbM8gJvXrgD1jfW1bVNANv7mNh8AjR4iv9EiUMoxvaska3uxytRW5FBJA5itDLVZYDrGqqbPYwDTddvULrMWc",
  "key33": "3EAwVc1JW12ALTrceXRPdr545Qpth6n5MvJftgia96U1MAmkMRwyUXCdoNfvrRRDWp8EgL8wjvHkQhZ2r6ryTEHE",
  "key34": "fWohViKSFN8seUQFYZCsubEV31gbgzHnnH3PTbRE11LFh6Eg3xKLW2WqR5nT5XbwxB2HWyEntqRqxjiYqedoLPx",
  "key35": "3RVn6LQBdMpTFfZWrAz6YwjYEE6x6nkaD5Fo3ntXHsDrtauk6BT78uEnNc5CaRowsUYakYBFCBVd21Mke3DyXTUk",
  "key36": "4PXn3rkNRYrhJbJZvnE4t7mM3M8q4L5BPLWFVJS1HHqZFgLeViewGYMxmf2WwdPyHKxr2Jj3nwpyZngk6VoqkjZj",
  "key37": "51gwoNJ8VzBpyyzSAzsBbEUifiYpo7SKs7inRYNBWEftAJkYb2aXU3A6MZJCMFiHyDbbuJozEjfYc9uDPAhrdwhV"
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
