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
    "5cfAiMCNrX3zxNSdiaEXHneHps4d3fkY48mWn7tFZMvxTLqSnvNwdWKsrTHFT5jJENFArwSeuGSNoHw5i5iYg3yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dWiBfE1LuknFXoWrbMZqwZUxf6gnLMMBXjaHSJRFZUQaifTXTMeBB6zL4AKry8t9ew6G53Z4GWKFNqWYPSWpDyK",
  "key1": "5iMowQSyRKCo1inrXGGHeKpiozY62MR5Fj41jApXHjs3qEjo6VLjrjRNu68Nk92Zq98rTvmDHACWmFQ4e87jNvah",
  "key2": "4cAWTSWCWqqpEfRHvfCMMrZrLphMbfUP9eH25d4Us5qVf25i94Jw8nGxuCwGMAQtiZp1FQv6LiSL7QzchGsBz5qa",
  "key3": "QokMQx5GxiC3CzRSd73KGJ9DKfYDJ4XK6V1sGFykatLpjxZxkBabJhQDaKxwvWHsBmWaop7jMWmZAM6pG3B1a5c",
  "key4": "4g3rLomnKgjjHETNvZpPgiYuDok8tfBPX5k4YfuzJW7LE3J3wfHfbkscaR655KXbQ6wB1f1yAMGi2ZjVfHvxhhGL",
  "key5": "3k2gGkBFzEdj1NxoHiz7NxnsF1GCxMpfBeQzhq5Jm3EMc6YFrCyuQq1rbJf7SU95KyW2ivb524aDaRds99MYwjgS",
  "key6": "5iLebA9hHsXhDfQGNYZBBGXwHXrLXf7zZW2Nc3ZfEj5SLSs9p2qJnU7NuMeSjk18HUknyYF9TVyMpWWJ8NHG4Zgs",
  "key7": "2BZKEaWLWvXfzbLJnSP4q3QKVoje4mJGtvPbmt57ULLvTx8iicq8EiJnXacvH7wuh6zEbzTp66BRH9EXRWbXG3JC",
  "key8": "2u5ARrQ6KNB5bQJywUHapj45WZbjy7pDKUP2QjjB6Z1kGemEaHaDzTkiVLTTX5DrFbXSo2z6weZWYaQ3jqsjvzEo",
  "key9": "58pMS85uJSk2s7LHiuNU4BPaoQxgLNuibeR6tRUHggWV8WeF6pLAxHLzEFQeoArEHrgLrv6wojTEGUjAnsnhg8nG",
  "key10": "rZJDei9SawWiQDnZth5shSDgjyjanzBmGj6cs2sSTg23CsvY6yuZ4g4gaMN4VV4sVWGzD9G8RWW56RhrbNGLvJk",
  "key11": "5sLbm8GZrCT11wbZJEKJSawCuCuwp7L2oHVNihQQpfGHXQz9Bq9SkSsdYKSdTcSrBZBd8h3GUSMC2TPuW9w1fD11",
  "key12": "39ioZXXLFueVCP7dk2iTj252PwgoVPo9rYdCeCJYijoEdHpRLqdaY1fBZL5xjiRmdsw3wLxYw5H67fNncme8oEcu",
  "key13": "2mTKraxJdU1Jdr7LjNpMto3FcqxR8ZAj1Lp9UZnUomSznDaSfEX3zgpAMQmK6v9S1U36boiNSpNu9NBhiDMUNh4g",
  "key14": "2ukfbMMu2NwWvNqPZTm8T4LsrHT9SeddV5SmDtWHJTweLbJc4h53s6eJmBpcuYsnWykDadM9ZT724bDxgerYJzsH",
  "key15": "5tNFAH2srCjc8vNW4CW3t1v2KFY6tHWSSKYZ6LNL2QGyvDh4Wax5jWHPMrUqw23SnBBNVABWEyXTdWZdwkeX7XkS",
  "key16": "FjiJ6svDqUqPJniL3L3ZpXkNxU4RMhewZ4UyQGmHj2xWcLyTuXB4PCyzD5Xq3zLVHjCrAPGJGn6qaupfdB1X1Y5",
  "key17": "5TWYfAQSN8EPviCuYdbEEaKMssZ1mXGD26qHzp6gA2JW8QaP89mtLDXqLUZhyuDUxi3KMsqG9vyGHnQ3qbfEKkwu",
  "key18": "4Q2vY6wkpQApsg2YyrAMWUEJn2mFdjp9EBMLHX9hMerAbv4LNzaBG3jGuUo7b7uwW6Gu4SH3Sgsi15ueAXy85ykJ",
  "key19": "9BEEeTHnDwd7rCAfSE7Coza8VuFu7BRxfe2jzTZVXxEragwCgmdJRfhji9bjS3B9NUKAfw6RD64TQmEay7iXr8u",
  "key20": "35NiWxuXQpJvYf2Nk5icuDz2GbqepA4aWMBMi9BiByoU3GBDRaArkbAwXWUhaa2RBFpLh1HzLQBDc9gCcUX5sFtd",
  "key21": "5UiWUURMQQEVfVD2nKWKP82y4xkwRvFCMbZepMKh3HjkTsKdw1BoNnaGcFz1ZFP4ZZ5xWFdAJYGnJB6Tpj8XW4L8",
  "key22": "UGmRJYjwsHUEFFbRMAEw4HfV8G6QB6gioDTv27jefF5z24Pfpnuxe5AsbGrcWqiho8xd9aB7SizQhPjLS7JT6X1",
  "key23": "2XjXL3Ls1MyJJ7WUAhqk9oDSt58ktEScs9Ca7jcXaurBU5RfbCcznG4E34vWzEntQVQ8GzEDPLou7SMc7LDiRVSs",
  "key24": "5rDc2idggdvnTALp3HCwUfuiDTRiSoPNN8JBMa1JQDwLXPKz2e1ADAgsKoxbiGyRFTmAdtMaAetEUHdJM32NiEYh",
  "key25": "2Y4ndbQSghguBkAemywohpxsm28KzP4AN6ondWsy2ScgFnNjtaRHxvjUCB7Sixs97CKW7gToYDwcDWzoH2HFzid2",
  "key26": "5U4kUK3mfWeqLHMpAdtUPr8gtxxoYp8qW8U6DTHcv46hnmRUrkUh5JgXU29azLkSTtx7FnpdEmswrCDKUd8HVYHY"
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
