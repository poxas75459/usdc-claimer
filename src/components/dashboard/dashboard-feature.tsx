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
    "2Ct9GVMZn7FTzWbs8JFP2LjSdTnEZ1V5ysZfJqmcSJNFfcz1sJ1YWWketdrWaKR3wKHbfF9qNuTthABhtHxhNqHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PoTjLW1df5C3VhXTMFXwMNUAR3qXwCAfvq7AQF8vkiTbw56SnE62ydgBfJVj5Jvi6B98ZvyAe9zt2kjozfpwsoh",
  "key1": "46KsrYstrNHcLTfmuMEnzRD7JAVfmic1dGoSQUzickWrUgU8PPhguPBu8KHp6Jjdvg1k3v4Rg8EyyQbzGt2kLXio",
  "key2": "5jW8yJmA9YYkjgH4uniq934qPWzzRCW64ti8pcgD37GZQuxxjYeZjWkK5L31JctSgQ6TDjnRkcBUMQqhfVBe76AL",
  "key3": "2cufu63rnkHFmqEHtQSkQ2zDkTLXeaP91wMrhtZoHpBBQAG2WWkMdGox9uAADdRZL9MwfTGtUGLdF57QVdZacLiF",
  "key4": "5odtDUpyLBLk1mwkdio31yZM1Yx62pQnvCzBoF89v7krPgC4AQKQp1Wxpvbj6FPD3xjDiEaWpZEg9XoxwH2PRXUL",
  "key5": "2f24B8M5iEDD69aUMLzhd7N1QTw3jCnP8jJtrV5HnkopQS16Rem9hAiYmsEVz5288vpaFi9JNmkVnttWDzr6wAqE",
  "key6": "5PsPsD9tNG3v6stCWeio5BBgELsvrNRHUT2Pb2Dbw3swxDEWfPbqiaVoai169zDKzefe3XPV3aFUeKDdkc7QCcA8",
  "key7": "5aaYzkFxoYG99cHXeBAs2z8EFiTFXvwCzwfVYycqnwyVd3yNY7X95hd629647z3wjnHEUkFNp4gMe3rGRTmJYS7c",
  "key8": "Q7FXQ5VaATh9gZ4h9Mu3DN3wz7pEDDvXrdG8kcaFFrE4f8g1c3PAUFNsWB8bTn9fLRuj9rGyHUDtNxujgs2dQdu",
  "key9": "LVWdWgKSA2RjKYkY1EegVfu25WFGhyZTgCQ7cMDz3PBFX798JXbEWsNxyaVVvJJCxmZ3HgJtxacE12aiyUesxvE",
  "key10": "EEdgGAdDvmfBKZ2QJUwogZ6m8zJT3Y84epNZz6MAYkRwQxHRBDLPfAqk5n2zXZzWmz6fR86r3FqxYyFbSDDpjJ7",
  "key11": "y9jN3RWiVbfqsfvL5sT23otYBxPht4XLAGy4g89ta6qBCQf9pSyhSekazdnVsykjUN2CGvRRK6FWvzHrKYyA3Mr",
  "key12": "KJf2pBwX9ZbJeZAcUDXa3jswK2p5aB2dsPd9mdJHZk3MYmR8wCcjaqBoigwdFNb4g1j26UP6vBdUcsReS6WEDM8",
  "key13": "2qWss6BxfLjC2k7LVz2iDzZq8VPKzp5HV1rZSKXxMETJhgr7H5pd3sjMECSyLzAFsxhLCQrNr76Tie3TvNrGLnji",
  "key14": "5VWdUMHX8s6pQJhx9GfExUHgAbfnX69KoBAC5gqivkkhtTVCPEdq66q9yZe7L2FFnkAcxrRAv6LzfrEDZtHaaPPV",
  "key15": "622jEDngsMeC1XLUfBVsv78QG37wiNef8sUK4eiDyjptigFnE6KTetNtquWoiQXmN5jV2G6B4xerGTZ6xZKk1hAA",
  "key16": "KMqE4F5dxjbpHJsRgWRpcTDnVkZMh22XPqNynHYXKzMcwtZQ1zt4nfok9par8z2nDJmniJMjiutW6SbCQzVmAvZ",
  "key17": "FTSK8GzKfn1LUoGhBKfK9NBuAYBDsUYdpw2JJ7TSQgjf3oYY7XFm6Pu7JL6DxVowu6zccNq66XQvruZdDUhAakf",
  "key18": "3YNKSCsL2QLeQWtNSoKxnXgFVwrct7tCkf1cJqG2QV8moiV9mNvytSgxmdBwiQvYSU9Bcd3iRxD4SjtYB22t2S98",
  "key19": "LpLXtAhCmJv46Qo6zY53YifHpP8usQ9kEfAdshdXNL2g66VRoNfZXZzym11RXu3My8dTcpohMG76FTTyu2WVeTX",
  "key20": "5vd5FFwJVxRvQYgozsJQJ7T5DVWE3LdRBcSFrAtz8sM3QRwW2jRkJiNVj5J6eXyapFWTHhtG6gjS8rqBhaqWyq4X",
  "key21": "3MvKrxcaXXbsL6XznnBQZMP2BxYtnNAh9gMvx5DKrnpyyygRMa13muM7BBPPY9eKtpzoowS3RBGnSZB8RqtoWhj8",
  "key22": "2NZcnh49yavNrR1XGfpkDR7c1z1tDiWAMLgMMjkXmyRLmev3eQdoFzX8JSxuciHmQFp55PvwWVGLJWT9Ka5Rfp6w",
  "key23": "4wVnzRrtKH3RrvqHMVMaWgybdfTjS36aj2HQe9481MvN3UwWhXgcC9bLrDNfDmPGV8KjhUHoyaiYJPNscucYNnBK",
  "key24": "3g5tUkCYwg9getF3zxQaFWuGZwUgJcKFDxPFkpaDDfpgcHQDjt48fWibyBtBbRxZwb2twbBg8UtasaVNK1YhAFMd",
  "key25": "6tY8debPtY4PfDpxfUR2DBaonQp9RtHZmd8pnf45zDEdHDpAyS7rFFupK8qMCubsmUVet9BzRVb3PofkP9LfFXw",
  "key26": "dHrCvh1ZUfmHYf1WRRTxFRkVRYoaSxvN82CHPrErNASiLVFLcTc7AsqjYV7oPzPTXdwdSk5Uxuo1BwD6i5FiNyR",
  "key27": "3M1Nwj9ERZudehDbUuVK5LrTuEHJenB5ZYJJU8Nks323dtVtZh4dQ1JZjcE3abBG5ZK1c3jSscFvSnbriKTLXzcD",
  "key28": "wbiKFWijmgCH7jiCJiK4irjHDyJkADvMEi6hyuxKMeCTsMFYhmY8raTjMZheM3SCx5Qdh9FApBkJxeqLLkKWyXr",
  "key29": "47KRXaQgv2T9UQCoinnG9Q5mFXVjimJaFPNN7tnhJmNtGDXDhDeYPFfbDMTJVra4EnwW4y55Uq8m5t3H6Mm6Nmj1",
  "key30": "2SCzTtcwMgmtFLE9XBsq9XfzZXCthd4DZW7U5zxW9kt8aCE3vyhwaYiEv6x71GMHPoif3RgwPhCK81Lm47PHE6Fe",
  "key31": "3JfF54mMwUVWnt7tYhEKdtbZeiYZTiXeF8HRqdSkVxwaWjsmzCYWz8DfP816wWzj3HuMdbmJxk7zjTyiYmTgZt8n"
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
