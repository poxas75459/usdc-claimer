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
    "jXcqvSxUMTQyeUykJVDQQyocZ5EuGc78kJKNfhncckZnZpTp47ApjV9dMBgjVDgFvhN7GZhMRjabmGuGh3xP6Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NXsZoqo1CNffqwrDmJxL7zjWRZrpLDofTShFHWg7rttBqx8uQnJUUVgu86527qHqcxJfbci27e4q347aWNZubFH",
  "key1": "2bj3s6gf99N6WLHWkXqmtoop185j5p5AcFFDt2uqt2gE2iCf2qVqkWjjfumun7LnCrckgK5ABcFko61qdEQSDPXt",
  "key2": "2Yy5WPkAtip5yWZLZPmApVhy89pXaw6VtY27UK5dvhgFmBuDMSMSsAqwJqTrU4WuPAQKWJDDVnwwArSiXGrPu8JL",
  "key3": "2Ec7qfTT8ZqJiMYXoNw9Z3wasbhWCR6o9icQPdQarGhCPa2cdDjBgapp3emcgbnMGN4PsGVLS5FQPAU5qTXX8xAr",
  "key4": "4anaZzYoFh8ND58wBauWRoCoP9Rs9EEyVHqnFV6JvEBZMjFa3eDELSB2R7GwKZZAm8EtAEbKTcHiaChmU1MWC2jH",
  "key5": "Eh2dAZVDRgF5pVLQoZTzNSXBsVhW2pp6Rc73Un2a877RRzcK8W4KFhbg79S729vxWTYEVmgSYSaxEox71iFBQ1N",
  "key6": "4CDuNcgg7EYWJMCvMawQw9CCEisXGSGtus4fLb88M4fshqFVLmMYNNXbpF1njBUFPTfYzpQGsYzq6s1dJm7JBCYg",
  "key7": "5WWJWBngbegePti8B6QW2ka7cEp4eRjaWcoDV5SZvdN96qpuvYUPdp2FDqAn7yVNyWYCGFeDYHYMB8afqwZxYvK",
  "key8": "5k8jwdJkNZdMobAFsAGATk8qiatxqbLHkoxZYMgjoacpMzgJgivj6apazCV5MY3bgMrfaCM4Dk5ZGdggYoMszoFj",
  "key9": "2kKuE3QvRYhLUgAZ7PvTAEt39qX6PF3YGUcXVBWFzNHwvAsVWMKmEJSduDpCv721rmacRGkdqpVDCH187y4GTtL7",
  "key10": "42j7BNiPLrxN6sZNxckJWyAmNBTrwDgqCapbNFoQpBnqFMUpirTcyNWpGDGU9Ejya2gMJx5r7cVBTVdEA89YAaPK",
  "key11": "4HCjAqprX32zqJdXPsi7U344iDL6jQWMZioVZw6jy9YpXkVkdmCQ9GUa1vEyN77XBF1HVeHpSpSLtbMjcK5Dxn7P",
  "key12": "dxPEcYqbmr3Lg4DYqX2e8vWrc2xhzpShNbbBXFb6yavyViJspazjCZ5UD77mhFNXD79Ze5wzgMgv3YBibqnGjpw",
  "key13": "2JbRyv4f9ob13ZLHAKanHjDipntorj9NE45PaZq62JcJpWXC3MVecprgp9p6Z6VRkTsC1BSkSFHf65ssGHRUDPDA",
  "key14": "54uJ8wDSZAkmsNaE3hiU9qe5pXrJjMjx4BWTcpNKBvEF3pvSUBJbYbMkDidX3L5xhxdtbKwVQh4xASQezq2cMN3g",
  "key15": "5h7pZACj5tYd9uFvnnM54YXbbmk5pkea8zVP4e57c9zPyHxUgnFP2Rx7KYD217oMcq1Rfa2RWS6uC3uFX7MhRQh",
  "key16": "4mjxTRvU2J7m73EgrQimeQ1wfN5q3yjmQ1tWZ8XeU3mZeCNw27D2aZ3gq8auDQ4DXnTxUiYcSsrLRn8fzGXBQago",
  "key17": "2EsLxVjfFu7AMAdYdK97sxmPdNjhyDd2oMzqy9yN9wrfsBFmshVQs8mBujvbB6hen6tJu3zrKUCsB918hydhVSq3",
  "key18": "3HPbAMJ8zyu8x5AbBTgXEyEZd64cbmj1K1NqhDmE9PWSiuYVkpcfM3M3wxDV7hRVemFkbCb7ax9GM1pQ6eo4fRCB",
  "key19": "5qS8Y55i81rDopdvbQWQcEfKa5PKUaEmEL8j7pxSzQezrd6Bn44YRPJ7Lb55n6UvRLnKVKrVtXjfxg5kmnZcH2Xb",
  "key20": "3AcTYSBKNbjFRQBSALg8ynmULphZVyyTMQ4DAbd7n2ooS1GP4mJCQwuwTJs3wx1KggbYmPoSXm7PG4AEjLWVjS1y",
  "key21": "5hcaT7xgiW3As6SdFXJ8ZJ1w5cVB2ZYCn6eqjpYJDD6FtaKcwUfn4paXg1h3ZbFjBgxpjz4ScCm3o7mS8mNx3Roo",
  "key22": "2DEmJLEF55mzjwouq5LPcjofdk9iBpCBd2Y6oogfGhEbfRifs7c6Bb2t92tL92gZnzdBGbDRpwuX3T7PUpSQTaSF",
  "key23": "2JjQMoo78SMzP7MgXTQq2FgpkRSpqiDCC4p9aA5gDnRcWKRC9cfXv3p4Hr4s23WFeVRVXt3oTjj5aNTGKGhTB7hQ",
  "key24": "4qHfGo1G6bSpbC5kVWf9nbz6XUM6XbsPmpfwRQsJqfVK98rjpA3FDz7RQeMpAAphTKkzgBg8AGGco64MN1b3p3sW",
  "key25": "2aaGwPwckXVwDEi7bsbv4LL6PZ58f6BX4Y4rWgMRZAfEReuYf6ABs5t8hnaFbehkHSR8v9kWKDvut4nJ3CTa98wk",
  "key26": "59M97z5dPZ357B2yHfKM24oXStTYHo2a4tBeLZfMvTMXA6pEtqSf7XUGJdApGvs7eTCU36mpGWSHXs6gKEY8oTcL",
  "key27": "4d6dZXUGyuTZ1nyvYCDiDtKu9vjLnganrcaK6cU3iroFmP2aMS7zZhL3H4Y6aQTCs4p4fYgGrtCpqiuqDaKT6xre",
  "key28": "45yi1QEdVmQJeHqCLajCFva3ciJGjNSciMJroXrHNQk3Mn1v96Q8gDkhEi2v8jH3wFARqKTZ9rq1HeT1ZQ39K4pS",
  "key29": "6JDJ88AnyLmFTkDAktHwWdUyK921YAcBi5tTQQ7pFdhioZvJiLKdeTCVp6MzcQCa2dRTEQzgf9y85CQE4NRSh3d",
  "key30": "4wt1QCuw9CdUe62YXSKXR6GQsZE8o9cxqDhnSSjuN5hg4zA1UQLXUQM9QR6gBzxDp7qtuGFFTHYAMFFaYwCxGboB",
  "key31": "4GMeA5ShQncybGC9ox1yrnvrKTfwGKmU5MiHs553qU1VkNWyMzX5G2gyXipxGMhub5zq2rUd9FarZBdic7svXcir",
  "key32": "25SPZbJ55A7HuF6TaegNp9trw9MsMEwgw7CD43VqUxvnvkdwTQtaCNrFudppxyvpUSMitX1AZXGLwujSnjYUWyYr",
  "key33": "4xv3DdamrALEQYL5J54aHx6PZrUSA4cCjtGfgitrDQXXgzsQKNj14F6jg3G6fwYn46Svwj57Kc4S4hs2HM7UUHUV",
  "key34": "5M37Bzjcy9QANx5DVQMSrQ4NNB2neF1aH48nEz2HrGHDVW7ppVkxRR1s2tVji17ds8GB5bbXZ58tJJdKFUjbbuZF",
  "key35": "FzLJ8KVPbNbcrr4uS7zanwubf2PXBft2axeGeepCpbXxXsrmbScJ1odjP9qv4k7tewAr14G3gJmrjQUwQ9b2NBg",
  "key36": "3amimzS561A3Ki9eTmZnL64UYyAUkdjqEZw5weWwA3UndzWebMT36benYsnZRUAjKt3QqF9Hr8hcRJoEnHRrdkrU",
  "key37": "3pU7CZec399vQE5rBmgfNzjVxhuobQW815ZeHYDXziEX1oq14XNzq5ftxvyp66S8ahsTrBJZX5uWSDCjyyCb4mHw"
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
