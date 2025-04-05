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
    "Nz6v7b2JDJQgCC1qC8dsaiq9PqsRojQ48DcZbU4CkkEUcA2ErmCGkzVnBVEibFMDjT3wqFo1JZwuvuK7XoxKJo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cc2JZ18cXS4Ws6NHFVbuQtzCCzV1QpR4WRwzzPgjzMuS6rh1BQ78NqMfrknMtNsubPx839TDpuTmtN1xkWuug7P",
  "key1": "3W87NvegZo49sdKyersGQ9Z7cmTCAktXvEzJc1hQPYBmRbQyyoW4m63epPRXmjH6TwaA6i4qCno4FjYnCHMYsFw8",
  "key2": "3oWvpgUZCzYzi8mYFW4E6mD96bvc9nC2uDHQ3tsCkPa9b7SRZYv3yykE15Kh9gHYFN63T1HXtwUKkEpDGTynp9F7",
  "key3": "4KYGAPoZetJxRvWH7YEpfU9oDfH3Dg8cyokhnpznM1JG9t8shg7MnWo9LQ41DQh52GYUNTxELfWXC3JGTBsbAmfX",
  "key4": "onkY7BYt22e3UzwEQdHT8QVDsBtGHzqBKYu9iXXg2bZ86FH4iz921mqesHHxgjyUByzMmnFcwgackjhqcERRX3s",
  "key5": "3yhm8DTLaGzVePSQQSf7pHwHvL6H27dctXxf1y3vG37Qv25juWGL3aQD79EBXKQZZx7W441yafHbT2gecCUN6wuE",
  "key6": "4TBH2DXHdQ46R9BHUzLFZvMW5iUY7DTeS1pf9R66BBAtnz5hr6viHX6D3GyoKGg4ukhNQuUbS9MFQfRenYoDT1UT",
  "key7": "65vEREdbJtMJ3o5eaH2vCDajkACP8pV87ZN2bwqn3xuTm9Cjof3h9jEY9T9XjeLtix15yTUHAp7DnFHCmoP5ieJ8",
  "key8": "4dYBpC5Rqgom1WU2PqtNkESjDWb5pbYLPYRsNTKmNEDghADpxtPWcK7MEg57BbThEroudWf9YgQJZF4qNdzcooeE",
  "key9": "2EjrSQPkSoLiNy5zVjwcSXCCS1Xr7rfLNvaogkbqRrw6sQgkCw5WNu4xSUr2YXbeRxGtZ5ARhRSXMMfWrbgtAvb",
  "key10": "3vfibcHGeEgXKqwzPVEbyx8JeDqcp1ujWqbUHXRtwKiXwo9TQiiJvpePBcznhwoQTjWGWphoU2CxFW97byL7QNm6",
  "key11": "22Ji4Nsn4do35YBVoNQWs2PxpK5rbQmrFkajTpbyHwreo2PeidRFLhXNfRFSEeXN6ePqm2VEjAExbeNdwHWBfdWK",
  "key12": "4RthQzbDGZwUPj7rqN3FNqetjD9YtiNR5hqE1hNPzq5g4um6HiQq2sBjMBhDgDgjtNdPaZSu4Vh6NTVyrCWNweAn",
  "key13": "SiUGZ31NJRBKn8GyR18Nx9wYfaA27RtMYzW8tRHWz7MxPFAXKhUsEf3pF9X8qw3C4bqm2KDxDaxyPjfhkykms2q",
  "key14": "5Xij8f4CgiLhBQAuHrc3pk9E3V6NsRD519cgNRvPrCqeaPfTh1UdC1Fy5QLxUD65RprT8jcRNzHjPvvJGqJbxt3f",
  "key15": "2nMtbqqKsbday6YYxYsJs43ZMWj5rq6LyPXHbkDhiBdXTBw2LP22dCtH5UVAvaA5gYWf3mqfsEAbaQ5irmEL2DnX",
  "key16": "ttqoZiegVb5BHVZKSJDYtK7b4rpB1JXi93QNMm9SoZvDpBT1X43121PtZ9aUYXZGMZoP156mSZUhybcbo8PhwvZ",
  "key17": "4KhJnuxsQudj5M3EXSzYMqY2mQASphYkviygCQ4sgz9mFWe9U7LRAfyVVaLjX4Je9Zp3Qn7ZAivhbdpHNDLKyQYs",
  "key18": "328WCDSX6MxxkBwDRJ5Cdstw2kG7Mg523FJxS9mZTP32iomikUMaeCicA9j8xdjixGM27kEUJcaQSMgSwi62YhJj",
  "key19": "4YpQyXTfzge2e2MeLv69jwJH28KkrnUZV8JmFbaaTaKAHb8FFWywFx4A9R12wmb44fy69h1Wme5weyMbiEf2rq7E",
  "key20": "3dKCxHWoLMeSswrDNpJPSnqj9cWhe2zPHrY2hbJHDvzYLwx6y5RGt6mhtt5vwZq9hsA7k2wgXxUSy4xTxr64MfKx",
  "key21": "3C2c2mEBs2PsX82kbAn8UPNjWHYiR3ht87t2f7g1NRTiTsV3LsSxgoeczEWwYxE6SG1xv8mHDWJsDERJkxaUFcVC",
  "key22": "3hRmL6ri3MtFeRx3A9rJyenmwdJ9m61kX9x1ocEjUQp21LMvTtAzuNUN9zcuKXQpKdQpKcRGn3qz43RAV78WiiD4",
  "key23": "2ks6FUGg3nM94WHtk4wNRASbU552RVobk4PQ4xYKYyexKoPMb7U1pUYutU8TrrvGSq1dfgw9MorNxSJdx3v9Zqpe",
  "key24": "2g11TEbbwtK7wFSHCqjGB4Bim1dAnEr8G41emRS2xKoQPg1LthgqCy5j7bj82gq8NkjivGyxEcydzbSs1tmTg7Ps",
  "key25": "nwWPqQYpFtXkkeVAbHGtbc6giPzenSrPef4tsCmdT8HvmN8FYJfHDwX5v67xLCV8A4NAmZrQq39fVoB2fkFXQLR",
  "key26": "5qHeVKp9vRPoWPUdTGk2T1w5hbNHJZehvBexjmfNEUBuDkVrKSg59V5vwTzwXfJ4xqibRjRR1oJys4v8EyxtdXef",
  "key27": "2uYN5LJshveW4hWkhuJGyLMgYx4L9NNtHRNorhjay7vZk7qa6tENLtXoF9HbKUdDkzSZ3FcRQActaWygUC64HKx5",
  "key28": "2iWRbwSVsEyGPQderWUgvFiTdiCcVdyU7wbddbkSFyXYXuUpL1jpDnYui3xzZZ9YH6uCAzAPshrrnjRo6m66WnBD",
  "key29": "4TUdBQTETfvq3T87CsNmThoaWqBEb4BHnCsCHyPtdKihrE2LjH8vuRUSvZeXHTSYVsSbFb11D86Bo9KAxGWksArW",
  "key30": "3DGvFMjFB5paLRaPm5NKhR9JMNoP8Tp8R6ioVzqY4gkV2pkcHq9XzYwKuRumGvRNiU1HdJQXjQrfGXWpWfcdKXNh",
  "key31": "52FgTBYWrdvpC3732E1oRUthRAE5g7Ljx8qziDdzyXiRvqfrafFqktF6RzgCjQwu56E9ruiQyjZ9nzQVyHCtHzw4",
  "key32": "3dNyVKcVC6K4hdAATSBjTj76z1qgHPw2q4YyqfMwNNoCXPfBvfR5qPEkRrTD2b9nkpZNWS9pdGx8YispTZeVhfnr",
  "key33": "2gZDLWMpqC445YdP2BNYr6ZGpweUccvXPtSEpDytEMoxStjCptgftePScVkEXDuEM85KJXdJR5rBgb3eGhGjtdcw",
  "key34": "2KMhfiiVfkGdivn8QktHk5T6RUJUZUMaFybwpteP9yWtsbRRGob5c8oiHfwXkLafm1v3LmpTzeuzrdk9oJ5TL3Z1",
  "key35": "5uZnzXkcooGrHNTLNxzpUCLqRUB3fY4UB25vWdZfNqF7qNAjygUTcR2YAaCRvRAzBM355AaUDq6YaT4o8VvEHrtU",
  "key36": "UYSQTU4D5Zott48Bcf3fQYrpPJyJSy9A1AGovMtekZv1dkWD5DLSnmE65LSVbBjzPxAxwiRNbuKRThVGmJXjxMT",
  "key37": "4WQXfbCu1NfGH9wLKNFNH6eXfKvhe6EzSrY86hbDesZh3h4e74v8LM2R9LkyBafAed9XNEtQAR2pQXmKBLwn4z5s",
  "key38": "35eCfjTyiuGhFV9YYs6Yy5gCBuUt6bRrCbwo9jyD6EUu48aNZ6oZbdZuQgtGeegLKBiVSriTJtoyzXtncaKzWKv9",
  "key39": "3MpyqUzyAcpZnmW3Gi6vLjQ4qgtJ6ZtdE3UJsXqtWAW2P1cj2k4ZtBHigf3D9PMjSmefKW3H2dn1Z5MZsrh8yNNW",
  "key40": "5gcpgr3Ye3h7nhvb3Nj3s8vMGNDm4TUs9YDi72UtxT3LdSxW5MzC7jxK6nARGmR16mUWHHHgXaPUviwtaXTXTZox",
  "key41": "19Q8MPXENa7npZqtU8A8ckS712ddRxG9c58r3QyXJ4skkYuWwoapwYAC8fXTxcTL1fUyXnd66wafFvfBBCaVUUn",
  "key42": "5p3iC38F1tYmURsKs5xZTS5o6gGvSMo2xtzBhcomjBQLa6o7Tfn5Cdx6S2hCkqGkqtGviq9pxMTvMgiwZssmAoJ5",
  "key43": "jxWpWTKVk2TMhLFcWAQGxJmVRL8Z9KhbX1UyGSSrLAuT12MRB3goPhEfowQ8RCdHA6WmoJCKMf45PZSXhbGnTiW",
  "key44": "46rset2MM6MWqJKQTvfCTU4EFyFpDEym99ZTaQVoPcdrEbv1xXvciZPvgdRfs4fb57FhasxWKQMJNGBzweSmz9YD",
  "key45": "3UmmKfN32T2PXLndgPMJDfyY1qrZYgn4F9euAHCQdDkiCbb2EjgeuUuNUeJTTnpCvufHtAdGRqmTJxdwMY2fMnys",
  "key46": "5H2Q5pwroYXXnrtWT5M1mipEceqWcTfXa8sNU73TNyp7FXSYrQn5RLdM1cwSioLQUft2a5HGgky6e56k5hDf4NXm",
  "key47": "UJnSEoCKzDWJnGaCUvqbowGmAwTEW2Vcv2WZphze5Nf6M4y55vJPnDFaAo3KnueTMDYyGDrZfv7TKnDFZjL3AHx",
  "key48": "3UjV4YqSjwgbf98awzLNxqZPpCF8Q8VTtdtcjzwxUUaGP3oj3gav8EoKnrXcrh3FMXQSXwgL8qb1DX1UacotRKm8",
  "key49": "2sGFJEet8XVfunHVXRC9GPLcwaaGmqwya2QwNLFaFYQ7zSpyvneko5G9hQAiKvzskHyrNM49dvmpN8nXkGLWxHLq"
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
