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
    "4e7FC3qPtUQqWUMYetwYF1WbJNuJfy5o6yG2wEEtFYzxSyGSyNRLLE6y2GN3kodfTZKRdqhVqy9MQ6v3EBLPS5QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuGQgFgEPBYqmHpFPY1tPYS9VKgCvVSUSG8F2Kq8jaZjmog29PayzZ9HXYCgTm33nxYU5rXXgFr5KztBDgQGjBW",
  "key1": "3DXuSHpvsPHWuJGCCv2s1Ev2Vwiv3J4qAcKvN5SYYBrGUSXW2PjxhZzUFqhX2s2LH1TeySet5AjzErDmj9kWcwVy",
  "key2": "5hmvbLQajQTG4G11kvs6cqstdA3nA4nEHnhCFn3gA1hiGu9HNfba7B4axGt3ZUrH3t5vDCp3BqNoKXcnafxNwu1w",
  "key3": "2CSA3D43nc4CL8S8ZDqCHdTCdfgTJieh5LEuVCcJyzn6J66EHNQC2r7ZyqqbscewjHsvWXVra5DpRGFYhdh7yArY",
  "key4": "4mVriyPawA9oexrPyRy7aKYR7sbDJZ6Jm336cDcJ6FRSF6bmY991QBb7FT7bJa1gk5TkyE8xe1YQ298fmaErNroQ",
  "key5": "5WMJsCakG9zuV6vXuLSHkFSmiDepQRn5Rrj4qzKJYYoJ5fekQMSwajwn9U2XwKFZZd1Bu8NuovHCJcS8JyTHy6eE",
  "key6": "5fDpW67CZQ8K9ixK49DucDkd8qHBMYb1CDUP472wHKUxdy5V5HkEFhbLDBSCS6QvyoT8s4CH8rdbX3gWwftZUBQW",
  "key7": "2Hc1NS5ZgV8JdRNcjzrYgoVoMqN2G8Vesqs5tnHLxDzoLR7ysKpV8DV86TiAeCPG8EThXB3FmPaNKdCKWxhq2cMY",
  "key8": "VBsLuGq7cKCoi1a8YkaFpGLW75VzrUSWqY713QWRWmb1r5Nw3uBdXiZtSZpijBRgftLQ7NRrrUab6Rs98zgxZPX",
  "key9": "3aML9j95WRuFmXGzaDYbyGVK2yqhWMH6d2Z3hUHojpUKQodHt1NNiRNT57RB1bFA21RzhMhXANBgSx1DW6CXqdkD",
  "key10": "JnhVZJ1g61ozDmq9QiBwC1Jwa3eUvkT36vgTSRDQUVvGNDQhRJ9hhRH6mYP5bimWEFh1UBXY1SB85JvzfYE2xtj",
  "key11": "5qkfWfXjB5AuFEDsicPqmeV6Vj3R2aDaUwkg274AVbskkWbjWUJuBJzkJ1mt18T2PNAGu7RZ3ANnAQDjuzYZRjvf",
  "key12": "2WHHH2akrZyi9b3RGQMQUQsRv2k4Dq9dx6aHEkEBbmdL7vDwtvqjkGpaqYmBeayZ3TuJbVTsQtpZGF2UJAeJrmkF",
  "key13": "5p1kFkK9WTja8jwxB3jkGNdRxzZu5TV9ZeN3b2SpSw7ifL3QX5xUDrwS8aXaVTLpqvR5JLs2yvn5HFCPtC8Uzsmv",
  "key14": "5krArfvaGh9Mw1ZUTsyyoGM4iYZcsuHdQHRzsA4MxtSM1bfxcMXGHgDjX4zYRVzMPRXzzFtFuW9uWpzoWZxFHfDF",
  "key15": "42oWFRurZqqSRrWa9jEnJ8jPC2gpZDbd5kXMNx93wNLLje3PeP2NUKL8UyTK7DYfATqfCeQVN6vqVzVL9QSuk21J",
  "key16": "51uLctEYfvpgVG7Z9KcwsEgw2myrkN8cFSnwsX27DkUR8r9qHQ42jHeopANLViyXc8QMSXqxFm3CC6fLiHxmQijB",
  "key17": "63NK4Jau2Yk84234wm6mFafsQMyzcBVHTjcdy571HQ4iU9cPyQT6REwPw5J1HKZgSD9pko8iw5fAGYkEZdxEbkcM",
  "key18": "2WzSr4aF4Z1Wd1fAGhzWMuQzmHEqmZ4QTzghc18BzePbnvUbdxEGRGEBCbwDytQKusqKkf7o6Ttxx2vrZY2dqxs1",
  "key19": "47rEsnXdzbvw2bk8GT6SHfuPuGHD4oTPt8HF3Zgh2uXQvRs6zstsyxY5QgZt5t9xoEoQKHNnDawTz8oswUGdHPWj",
  "key20": "4JNPkW6sK5XvaQ5mTW33mqmpMYdLKQMdKotSrW9TmekXtePGmxHf2oWoDRU1ZdhbFMQRutN6JiHv8v2HQ31wurzL",
  "key21": "3Xuwsobfjm3Nm8DJqifxvbqZ2xJkEkv4c8RfZMwbg7f8ZreZZhLK8cg7bjLcJnpJ78YbEU1LBR3jcYoGnt2XAzr8",
  "key22": "zrPng8rT7E99Ne5C3a1p7TGxG3vLvA7x65bc6edA41MJigSGJNeGM2o23ygf4dJRjSRkiLHeXFdr7XZBEm1QZac",
  "key23": "54pPuwMiHQ9k8X7WoTxaq8ThUDxeyjyNop66fgcqiiL9JrXqf2z2SjgDjbXp8uqty4Gtou9xUCSwQScvQUXvp2yV",
  "key24": "uEcRnTuGAj4yoFimmYJP15a7YFYsqjJVBEJmZt2UKu3DtA89gM998xMEHWTjTGUPWm5VyX6vHmcp9MRHJthwDrJ",
  "key25": "5BDLvee6ZAasaX3rervVmRbR2QQYxAiA5v39i8Xx3ubs3rrDKbJy3CfMTUvcrKPA2EXvyZdct6MJTWheUX9PvSKF",
  "key26": "QvYgACv3uDPARZ6aNGWnGodKbqPxVjrHPAVRUG55vdoReHtGWJENdFTsdfbvfJ6AgAsYury5qGkT3ZaGfua7rF6",
  "key27": "56LKdnodTQWQ7TxMLuz3wjbZuqAMuqDr2jzQh5bo3a1xPRH1EogDuv7GN31xZQSH37vr73asoycUmvPwqyr4T7qw",
  "key28": "2LR5PfoLzvBndFP5MZ2pY3xCyP3C8ux3cmxZQ2k8dQCFtjSYupEYChWrhn2QK3tiA5hJpWMo3wGNZqWEJRzY17eA",
  "key29": "7xroh8UK1QD1jfYawUUXVpmWzYr6VLTsdB322XdX7jA1EtoSVwsKLHRy2TKgZTjNWkaCofARpXnAmyXUkQ1RPJx",
  "key30": "58KoWXQZ7hhqeL238aQa41YxcjzGVZAwZ1ema8CJ1PmETjnPmpupf5z4WbK52eXf9mCu1ZBvyLuH8BaLcCaJJG5t",
  "key31": "2aYcFUxh3iwsJqPJUEAYdGt5ZVaFdBCHxAxpvfZKCjxdug4gDuLXDqTUv2Uy5dRx7pWbLxRF4sGjB6bfXN91bbCV",
  "key32": "2QgL1taH6kedo2NtsL34TsXPTWXo2J2SRkiqkPAr5wVdJ2JvtJY3znYvhNN3CQBXFFXs3GqxUCYuQewowNT8tpSK",
  "key33": "2qGiovFZ5ZrKgr1ynZPp7dSC3n3ZU3nbwKyr92mnzoBmwa6zSfojxyDaCh5KwvYfE4aHjELCeyB3nAMFkEzWufjC",
  "key34": "5ExXpNyBt99195JCQqQvrRq8AwPnENqGZbpYpWHTyYH3jmi1aMVamwgvAye8P5W7P4nSRMFN5vLp7RBZYSVuiDT7",
  "key35": "63xjJREf1eVz7MLWaunwBvG9De8zStLF6zRKGhDERDscCySTLMV2cnMDQKRoe9EktmYQL3jd9QjPJg5eeSrgvg4S",
  "key36": "MMwQzYXqSYJq4P6mixXvamTEznd9hPgoi4tiHt2MdUpCbeK3od1RQkn18yCNrLqU5fXejvc6hz7GWphNppWvAM7",
  "key37": "31p6ztKdhBvxiwyG6yFdJrZAB82oJBtUeLjBqq5mRRx1YRVA4FFPs9yUTJyMWD8wicuHnK3aj7TgbVEBNCdmibQ2",
  "key38": "3vJUZeeAooU6Jjv6iTJKMT1eBAmoDcQU49HsemPjBtdXudfdZqKRc5sV6woYuG2vAaqKCYfJM43qusv9KZyLo83V",
  "key39": "AXf4XgDSDddmznseVQVEvpDVXZmhZeKytcYZk23xvg5SSSBgU3oD9LuX49qkZEuz14H8E9iTAFoUZb4GiRg3A6S",
  "key40": "3XxWxRvUC4bStXhyirFeMdwV6r3WUt4dCcSEyUZQptgNb4qoML6z6FzCkQ8oW63WfptMffZECG5BEFVijov1feHJ",
  "key41": "ReNY779HzE2t8xNezonPXjygXpz2rUTVvmGcSnZgUFKCqdu3AEQ36MM4xpG1JqpYaTWCPsnsrhmavAf36qDPxFL",
  "key42": "5PcnscP2xFbFQYL9XCivQJhtPh4bvVzRRYribfCL1CCsYCGAhCowJDLCqxdHe1xJ3rr2HySJ34y7QwwbD27BreDx",
  "key43": "38Hm45yP45oQDqeRTtwGWJw3XFB5SwRSzQLoHm2grTrqwqW8XRFU1A9cMyMbpBectYZj6K3SFvKsEctrYqxEVbRw",
  "key44": "LoKCWBfKxGv9jQ791uLZ2w8U1djctpHsZjmJEq6TrVRPtUNZmHRJZ3eH2JwcTWh1cwKsNxr428jo6scWH3Udr8T",
  "key45": "C5bbjQiviRgkk4oswdjLyYxGnvNUB8vvC2xqBPfNW749vuhQBAxj2L9BsPMBgLzc8SYHk5jywZMtnqifzkGRLWF",
  "key46": "4mx74RJrVRpr52NX4izNragNVvqAAenBTvBhTE9WXPZELiodF8TSUjwEXzL84eKJUfrtDgCZcXHa3wx853xUBY7w",
  "key47": "52yBKH7UZMPdXGPBmfqryYfr3CUXHeUfo26eU9jPowcudtDvrx21fRkAnvvAEd661H5VdEqRXDtbVH7K9FNkqX8v"
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
