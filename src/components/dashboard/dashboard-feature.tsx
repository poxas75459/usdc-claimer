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
    "3bQqnb3Qt3fCTh2KAdJdvmwLo5cTqf9JxiouT7VMLzAKhy876cPuzmo5SEU3M5qV7uRDt6nQ8tq8KTjd5QzyeR6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yWDpdGL83eJmekFDCkLsFrEWe5LMiQoVzkrWGhxBoPMkoRNpkYPUTwuzWciXEuZhKrTFvBpVpNABkBWT9k2vxnh",
  "key1": "3wvi1ds3Ca91FbueK7UTFtCDRU1Fqj4qaWJW26kKRNVFCkP25PBzpyZtsEe7D3mADjNjqpMCZyQhPkQAj1Sx1zyo",
  "key2": "4Jdy23cJLeqb81NN3GzhxP4GtRhE7877Cc2rc12Q75NZXELtUYax4ovKKk3NNMpJhMgTJE4TUBAn2jUQUetX9Rwv",
  "key3": "pwUY4CtRKJQKnH6WtXTvi8EgUzPQEy2jC7te9E6mzhRjGEdrtfhzuYAKTvVekBmLAhnTdmSxKF6nzP4UPFFnn4c",
  "key4": "5Dhkz7GLHB2pXuSd1zSEsic8t6V5y31YACddY2nhMzT82x7bLFcUUbeWTudnhJ46gCrrA8v4H9Droie9js8xf7RD",
  "key5": "Rz1oY5C9WRTG8wqZ6mpgapkX4DLn8cYSxQfJcEwmFcDbHGrV3HqHjdqrpZbetiKYpPEfBBpZtS117QSK5ABCfwv",
  "key6": "3ExqW7wJy2BkCg7yi5ppJPbxbCSq6DqNsDgDiNfpjfeaoyPaup99nBowC7tL65YChKYXd3wPHvhenn5coVG8CbY4",
  "key7": "f9Gb4q8fKAJuFY3Ey4MGQw5EzkDqFCNUFio1qtXCjXPjkyi66kbobmMGCvuz6WwTRAzX4pim4icJkuhWc8Yao7C",
  "key8": "Uux2mCxPJ9pevTiUeeV9zE6U4pBf4rucWVeKzPiVG3iAEZ8wcPJ47o7Mgar17x2xoQZdbfDwtqewQhD2j52FPry",
  "key9": "5SCqdWb6DhBMAPNqzUGwPywgu9Esuh8pcSXqiBQ21Qa5fhnsr5tmBmoRRTfokNKFykWNVZjrtYwSJj21y79K5J3B",
  "key10": "5ScspMC9UUsYayDRDdNLAFvfGqEXLdNq2K9vjba2x1PMpu3yw9mxuDEPnP7FWffa36HkTnyGWjuKoVjAn9Eb1i8c",
  "key11": "2yrGcLGFsVK2fp97TdmQdWNPL1aSGLYTkct5SeQXi9DTYNasyavxqkt3kTGZkHLHPbuCV7uxUgeiFH2L83MAQ8DF",
  "key12": "5rnRWt1xEDbWc7WW6wtHJHUxDEw6hSxVYrzp49SiumvMDnfb7teHUs3wN6z5SK81MSSDTJtkXQw2emEt5MK4VzaF",
  "key13": "3mdfJLerkSwjbPw2F81YEegLGWZKx1XuH3AxgFa3D4F6375DohsFQ5WZg1zwBTnsB639nWBNFePrqC5wF5nYbLgv",
  "key14": "5egwvHmLaQCGcjva3keWC7eWsMgr1cfFQ4ezKhCBu9pRQVjfGLgDNQpDyRAtoG5x3yawXmWnY47axhf3DH7nk1fT",
  "key15": "3vUpJhZWHTnPweVCDu57P1hsktRt5gPUDBDzQaC3jA31Aok3Fe1cn1AR3YAwtC3rzW4JiMg29PzMYS2VWF77bdyq",
  "key16": "3gHWrAN7JLfgKy9x8bc1LwnF5p2JtRdCYpCuBRnXMW3tHiMNingSYpgaDY5hGRo7Z3drYWU2TMoRL3w5UUHp64T2",
  "key17": "549nrk3BoxogjAfF4nYBQGxM96ZadkbMpMFCu48cnL7BgsWXU2k2XJ1opT2W8MtR3KZM6Dx5i1idzphaYJzVqoeE",
  "key18": "3kPkhikqnK6zbarNjoRS14F9jHVbrbs6coPD7BEnPLXVfrFRbwoN7EwbcbVAbND1JfKFNCzmpKo7Mikavd392s7b",
  "key19": "4AsJLB2mve2zx8fPLrVMfdPd31C1R7axBsXdJnBQ7mWb7c7Kq8v3bodDRZfmiLYd7jMZu7qwdhWv3fvFGWM2LzWx",
  "key20": "3qXK2J6pvTyW1gy3NmLkAJUpqJh9RUkc1wEHzXC9j68pvgVjTCYSnfAGQ2Be3JYE4mUcDAqx81FGEgyqjP2HtP3N",
  "key21": "2tNeSaExKSwc4xZgM3HV6kFYDp3bKpuLCsVXhBJb23PbbuMe6aypGwjpsGecVjD7DYwmoE6Rqa4ydUkieQM8TNBC",
  "key22": "3KcZk1tAJmYLweCrqaft48KCzNrnVx5iwnmJW5TFtEygp3RfF4xMYEmNPR2ANyqH6TjycXhhfkAXi5CH7SX13jVr",
  "key23": "mn4ZBRdf3LNfLGo3R4uZ9jLksKowQiQS4PSvUzuQPJBteD2pxfPU7nW7rNGQs7R1TnHD8fSDV29wDhFf84mcBq8",
  "key24": "38Gp6jU2LFBjjGfkmspNyXuy8z5znyjWKj2eRVFDJ3C92VbDtrTR42yNhS3YiCFgqvkFUhpVeN4QFheN7jiR2v9m",
  "key25": "2MLs3Ay8Af6ks8YXkTNQDbk1Bz2yut6xm3ny2M7JuhLiXCjUeMwtrWHWyZw8fSJJEpJDka4oZXegrTiRCuQsJe36",
  "key26": "3qaxtfDM6NE9vEhvfNuL8sWYq5TLXpS81hTLawjif5GTqzScSQuvbd444D6J63WeNJ8ia94TtrP7HKs4r5iaaU9D",
  "key27": "23LvdNVJX9D61SGNrGkEdcV6cbL7G4bXN6EZQeouqVEcVbPUYdg8CoeCAxgGkVGfW9Z8Yg7oNqbM2RzMtA9m4Wvr",
  "key28": "V3wy8zvLo781CvFp4Tta2qeKRyvdyidsFcm6w7GmgwZ9cvJq7ydEAubnGFB4bi9URGML1KyT2sz34YiEK7ALAqU",
  "key29": "3NFKHmpTrtKmTesowjYBZytJzt4tAkXk2cS4TVFs2QDdKara9wyZy75ESqE8s7tFNpB7bzVMFo653DQRkdtMyR3e",
  "key30": "2uGcz45amVcbtsxxxheNx8GLEGQGMLR8ihsStNC2dWVkMo9ioyJbWtJKqGrox5UGasvKJMNYUaAB8APz9LJ8wMpR",
  "key31": "2SDnW7UQz2PcTzcwmRngjCYodqeKhXV3LRXrbWzTdFozkMtU9PjnYXFXRxHePtcpGtzCixwHZb8981bcQWz3ZysU"
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
