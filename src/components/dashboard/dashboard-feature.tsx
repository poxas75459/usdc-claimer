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
    "37g942MbKVCHCQiUphw9fSLsyTyuHS7cChJ9e4HdZ8gbBf8yrx1BtU1VZBkbWWeEKa6SciDdyfkrifGJmEA4hEdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HmjsfnAwgftCEELJVUEuhH6j5h8zcLYEuZTcfdHeoGF7fAhxxKQ7K7MLsFNcbj2uJrPZtxa8STPACVAQwrrJYGp",
  "key1": "5bmKgRHj5kqBvxyKNpXhJNbnB8351aJkUewHKUYDqF8Q8hPWbwecTqEhGuprqy6Zzmg4iFsVqkJ5QyD8BfQ3S1Ep",
  "key2": "ChiLPiHBsmfxuGsjkFGkybpHf9LHu29hrk6BAz6dpLf8sJsvdFfKCfNi388cBcnH6snvicLs6N2DzUSHsaVdxMR",
  "key3": "3EoU1nmy67gVGpnUAk2HE9ZpMzQndAc6Aq3HsxFxGtfEk6iPEmsLDvAaMraXBC4Ax3bYqPFtKhfFhJ9dLX1rEx4t",
  "key4": "3EsjCLSb7fpieEgLKx5VBAMeMGMhQA1mPuLPasAKyPpq3S1SbcuCa1RdY43eFW5RggLTQK4XPwWoSBQgCATNiRr",
  "key5": "4kxnz4XtZa3ejZNQPrmYcytaNK8KPvmQaXviGRJq6TLjRY6pyUTKiehfatXGzk4KL5SNGqXc9VfJFVN5saaTCSu2",
  "key6": "2AW1Qj9crXN3dsUFyuDRpM3mGCZ7GJStLELxbrPk18LJXBFkawTVc5FRRSM1byN6KB2UA87dnhiuQ8tY9ah171Fu",
  "key7": "o7xXj73a4EKU8guMJms4CsdaoUxXz8EfBkVUc5Pf3h22NYGjxG4cE97ZjYQ6c814Aa5PfNGDqyq65mvhdRAno3P",
  "key8": "5VLJyeAz4kHPGVfwbyxowYm6AmrgkeEWQgYEc4UCSrVtuyEnobAw8wDbySSkLpb6EftDNjGWjgHdqULu3wBWn5p9",
  "key9": "2RZY9yY5JNE1R5DJBxjeFVpT7dgpCZzhsovNCiXzRGTEgLgB3jJJhhQxWN3zJ9VkRs9q1CCV2jc53pacbNA7xnoQ",
  "key10": "5EiZHXe5ngd27MptcN4fPv4uSV6fdgfUxDcw268LDf6y2wkdDpbW6ufV8gwYbb9d9esr9wJQKB8BvCkqUnBJyrQV",
  "key11": "3cwsxKvjqEsXvpJ53iSjd4Kn6j3Qhp4BBD6nkz8dTAx4KTuFaSWgXqzokJhsFd5ffLauzfRax6mivwPRH1PtPBHA",
  "key12": "3us64i8oSaQXpcZ9aLgKZDn11k1T89AsQTN2p1meo99Y8BdofYe9W5kTexT1LuHUUxGtcghEECcmFrzftPDHCQeZ",
  "key13": "qeRuYjZH5W6djqkyvbHn1UYdqB7KjmuwJKBGf5dMipyrBh7wV6PZu4mTXNTUHJNubYt3mJfZWx2LFTEmWJ7juaS",
  "key14": "38zZt8H1afXg6bT6b5q6N6bRoE8RtrdsF2Y7C3L8zayoudcV3KNYidB21toimB8vbkgncWAWc7aqzPEF59jD2cG",
  "key15": "bixc8JANbdhTENdxYvALWE3ojWGLmUzSVSEJoSLsrNXwBiWRXFizP1eKY4icrPTqpy5D1aqVxYnHQjkvsBTgxaM",
  "key16": "yasV9hzjgrbCB8sHwxRBrvg8i7yhN5Lo61uvtfoKvbMUmomc5whYXsaNQwcYwyk1JbWPV9JfPHgJtTS6HGz7fp4",
  "key17": "4mRj6Rq5RR47qCjhLns9uocPMyy6evYGLjVKspaWjsH4cPvhkX8jh9bUwQUZ7Eccc4hd5Lx429KBZ8Uvkh2yQVxn",
  "key18": "5NzR5ZEwZCzGuDrxdKtK5GpEZBYvaYm2ihZs3q4XNCnM8DN8ihU3f3wVQLviSL6yLyf2XcMH6cEUrL53PRmZvYoy",
  "key19": "5xBUhXvh6B6WWPBTZQqb1kMf69PM8BLHerJuRAHX6FoKDAVutF2v8coqhPaxb8QYX8JDjTyNJN5h9CerTRAYa5mn",
  "key20": "2LiEPtTG7t7MQKgUupd2Bea9dRr5GfUv5Sguxcs2wUi7CkHepqjq4dYicFpfaqL85kM4ojimDZJMNGxPRLc8Lnex",
  "key21": "4BKC1pyYLhQt14NWNXwcJ2fjFGAWPJ1XeqUy4gZ2JawwPZZ3Yz79s6HEiWX73t8THA2VL3MvsNyR28J9bfPKWah9",
  "key22": "27MzqLLoAnfNPdBxRXptk3ofj7KxocDxCcdqjM8xqzpaoRQgapD4KgZrfscmqnhPHR3nXhcLhDvD8tRb1uqAGk89",
  "key23": "4dQuVcH8FkWnBhDgZmdVVGFvdzhD1n3CyDPaHHtxCizYXxhsKBU9dfxsrT4qThTQ6rtsKTjQ6ckwX6Vwqyz2tpVB",
  "key24": "4pZuC8soWKTgwNpUnyEFREsMGiARUdnEkRQ6DyuiQq8HJqcB9m2ZRQMVBJXkKC6NjRVDFGaikMqvvK1Uwy51FGsJ",
  "key25": "4vCdeKSwkozz2gstiyEpE43hqwtq3iTTdvazKGXsVEEcMuvcujNa4gUbFfoZwXezAQbKoLYj27hVNZ6xUNxFaN6z",
  "key26": "2XQsoGG2FpY7zx3XpQZpdkndBthAPvyMK76xzvpxi5VRYh2r7zRG2sLNmQJtgvp6eNBLPxjALhcve5Z6R7LoGUz5",
  "key27": "58xTaKtkKM8kUeCxtaDWygwtn4dX5Ja461E8ykFeM2vMopVAXAvh7soXPqaw7M7Z2p7ACBYyboHuuNorkzA8GCV3",
  "key28": "4LgjDmKMZcrMTin6XJUpePH4zNBEcAoevqAmB7KEHMGcrc8yhmMh2zmZbQXDZph1cv6X2yNiFeR4MTazL2DV3okC",
  "key29": "2ik1XU86TQBXr7XWsmUB9SoVfuiEcErXUxME3k8uo3AC516WmtyoQ5i2dx1wNJueG6t9UQb14ffixj8L3oNPhYxg",
  "key30": "25jqypyV4o8uaS9iL8v4cfWTSfikyt3CpNpJUSNN8Y8Nsa1XKmQX3bFAbhcanozob8aYPUjKsmdKwJTYg7uFWtnt",
  "key31": "xheyqHyr9XnwtyZ7ctKEPxjGDktt5BmgBBeuXEn2mHvxcso6Fvarm6PSeDrTEhPmmLWDjkaMxLMwmjGr9Dxvqh2",
  "key32": "3BZeYZdgBgW62gKwxEigTXuWPzLeyz8kqREeQd5Xjhew33XqH2ULvLB8Ms2jxgd5HEXAUrqrEBDEDdcKzgUhSvFB",
  "key33": "4cFsA1AMzXESQkzUJrXprS6UEmz6qcvKfq6Ve4Jg2EJTGsoUe161s94bH9QfmYyDxPUK25xF3uzDwJM7LcVQL5wS"
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
