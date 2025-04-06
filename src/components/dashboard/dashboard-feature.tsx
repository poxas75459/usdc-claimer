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
    "45dpfyqApVk8GiLX6xBFkn1cd4zo3eRAvufV18dyP9uznBuFFEAc6MU6AKwgxKKVZ17uej17BFuChQh3ZKvD6wsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kq5rm6ULKpUD3NEyxdCo3ud3hvRBJxpJ3iKFnY4KPE1FzFfVcjMqk4aTruWyhLMqfuStirTJftsd1F4y2sjsh3h",
  "key1": "Mc7MHFJBcJpmnMr9ceajZupwP9t3WVgQa4KW4a7sBKNoGzc5nSKtT52bVmQHNkGbBvSVy2sGfaV3eM2d3Eyne2a",
  "key2": "61hwrSzj67mruytteXWTUkddb9An1HaFj4DN24ocx9RUg89GenzGE3t62Mw9qdC6BApFi6poUxkMZxMKrnpxRG2G",
  "key3": "4KvFLfT3ZSUPkK8u5da4Uys6Cp1VdLp43thwfjwaDw72oUi2LU5nyxim9Y5UDpdceTMEuivzajGwRuAHUzWUEKqX",
  "key4": "2T827UWe1Q2FqcbF6tn5E2H5jW2KEZAwnX4W1GpBtHeRwM8CkD2gvyvBCgc9X8Cw3BpEQJ1DA7jkxpEjhqDjNBqe",
  "key5": "5Dx47CowKkEFfiF7JiGjXE3RgAE6bBkokDD9B16T3vPw7Aj1m88o7GjMufqjtCnMPBFXGZ2WKSok7DUCps4JZfCW",
  "key6": "efu7Hx8DQ7atNvn6ctMmc7nyvTPDrjz9J4MUknCc5tKsmiB9fC8W2ikpdeQBqZcpCYAvSjm1bj8Frr5ssgq7cmy",
  "key7": "5tjsL4tpojegj5roRZ76y1VdPLWWoM5tsRdwSdhgXQm6RJX9fTJHVbKEJKZugpWdvojqXNNgn4LqN61be3aY6xxW",
  "key8": "jt1XLE2ck5xUFKpXfz1VaFXf2u8XgmM4Ya1rUUMHqBDoapX4t9Caa6VjvZj3KcVSp7LEVJ6LeA6aGxUWTTNwCoB",
  "key9": "2F1xvL64msU8DVZjomW5PWkZPLBxhiZX2HjFNb8N1jwWgdk6F72oGpvEDAww87SdmmM8i1ctb44ZQ9etZnKafkGu",
  "key10": "2SVNihCQeqmQf4Qbci5ZpafLkCvyrDwbtmZ628ZFMCvGkNbGYMEtpeTiKWQyaZcW5LqdUn9MmHBwwk6BkkpqdXni",
  "key11": "2CR7KPjXxU13CBzrGYkVaP3bfx6ET13d81gmUqyjuucDG5WE5e8fwrHNCV3jJto2o6oDYbjrbiEAeFL49JXrf4xt",
  "key12": "2818j1KHt9e8gnfBzwDxUardc4iJ6VWAK9LQ9if6EVNv9fDF1zAywVL4EC8hgEaoKJ2nfbKvjWkRzgitSrAfEkGx",
  "key13": "2HfXnPMczu4tmAhJ7mAA4HUPrHTB9rEx41NJyk8Ur3j7iYTDcEE4RCK7MvqwpT9S8sTrCgrdm7ZXLYT8wJsNZdkQ",
  "key14": "2B7cTdT39EAacENYxuubp61FztFyu6XBXjvtJRxaCzsS9kndWkXFRvsDUpjcy56mUNAtazpspsedeBL3rJU4VCWV",
  "key15": "WFckErKPhHJzebSvjwWc86NWsPK7ijiwrWha4Y87b9usEqfN1cRpUayTLf6QzxZycsp9cRPYN3LH2DafjAbwT5W",
  "key16": "HAoeNoUNCFpBsmsrJbMWApfouw9Lx6tzQgEqGkvmoGgh516AH7Zrs3CxiJ4tqJTjF5ReXPtKTNLeoXnU8WfbJeS",
  "key17": "4qdyKPpMRni67VqUnWonLZUgMJVMBk1ZpYNnPLVZ2F4hEdRCiCTgB8MXUH3NwPWHoLcTT3M5U7PBQmKfk2xfV71y",
  "key18": "3xNAksH63SrgHAo8hJTRRSnuZx7Up85vAdeiSAMR7WKRw1ZbKe5VPT9tktba5v2RVkXtbsKwhSeA8qnpjpczRk6n",
  "key19": "5KAJT2Ur7FojFBmdYFn7FrTEwN2dxHt7vrn4T9G3owN9RWj6NHP5BrsBzL1QseigQMHFsxwPfT6Kdp7ogNkXJATc",
  "key20": "45W1WqAhxNvi7JaZLA6VroFPqRzKHaWvZV66uQtt75X39H7snd1UyaYX7iQXSMyqA2pofDYi15ZEJBSAdazZVTcR",
  "key21": "3KMTkzXPaAcp9E1rqHBjDL4QqJMNEpRGuaVsfzTGh7BTq3awG9kj1w4FtAib5Fb7tjiD79gVsvwD6nbv3DQFvSUP",
  "key22": "4qSeAoRK6soZQYSTqiybj6Pw85HvxwuKD7oJ48M4Tm8RGBo5AvPPB2RQE7e8xJdsBM3YkdmrFTRLAN4yP6Ye6WDt",
  "key23": "2AMBMsJ9hjQdYzXqEmNrJbqkMz2TpRmXcD25LBxLBvG2PqMnBaTF76Y47r653YuHtZM3icCmL44toANTiS1oejjQ",
  "key24": "yzTCTVCH9gkJtfAZfnPLZW5b7MdqxhKRjQFroYsKgdHeJVNZ8LCKaQcraiRkbjw5C5PqguHa56eNGxeorJMMaFY",
  "key25": "2xZgK7Qt62WtQXB6WFPLz77DhAo7wKch3C1fbvY8y6DbSNwXJbHVZqjC1Cy7QdZeXVfgLcxKnXKvc1vKqsaQTqZw",
  "key26": "5q5tq228HwVUV6tM65ekpYHjAPvfC7RWee5ziaxjAdFZYh1fSQGVjrJPWrN8FwyaeV8UvsoZKyVLuk1PwwUw7G6o",
  "key27": "3GeJCJTMiVPMLHk35h4S8W3v1ARMBHREr3yaJULpNBvZJDAJA7vPM6hf2arEmoJEujjrbGipJWyFDFZPftoWnAr6",
  "key28": "BnHvNRNNQu4nRqbGc4V6bL5SayyMWeB9K8DnXqGSjyRN9aKRqKH9bdsCzVMMVxYP71Q58ePuWDVLDcT1LBuCPqw",
  "key29": "29ZSyPJemEyduYXCCbhQyiyvn7YakLogRhin1qWbDv7JF2PQ4WHYeRhueujsoXna2HgwGScwnQsuiBwt9pgiTzPQ",
  "key30": "5g5xJ85uS9mGzNi6Qwci7RrkSW1dEH34Vmn8BBXSQT7yhUK8XqpnhrZWrEzB6NtCFq5TGkk662KPemvt7nWe5MFt"
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
