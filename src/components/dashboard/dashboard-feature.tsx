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
    "axH4UCAfx8XmcfK4rXiunMKwNFR2CtKLbg3nG5jEqix4u4ge8FsqT1nxXQqzAdC9yMNg9prRR7RKxkKnVWJTAqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCaa5Fw186DkSk9tM3zoEMEKoaBfxfgtbSqBpzasHozDozrA2j1VSFsxHLEem22tqCucPMYPTHzHuAifuRj7BNd",
  "key1": "8araqQof52wbwqG8kNKeh2NyMuMYPUG7Ea3QQSeFQpSMefG5C9WTqf7BR4pHCLS4vTCD9UyKvpjJVUWsjM1252E",
  "key2": "53mPDPwFQK8sp4DaEnP8Jgwzu71Xc33rU2NdAkpy9oRW3Cgr6FAKxfQXpx3yu5jCFusfQR7pk8LXrXHM7NkcFYJi",
  "key3": "3ogLjbaLiJamBnTxM5UmbGMKSVbeHgjQkpfuh37xonEedB9CUuFAStf6r2wM4EVSnQcZGD8XPbz5JvXvwqaXx3bM",
  "key4": "4qsphLjfMfzeCVg4gqMCFSNzU9X6kXPRwGW9uFjqCLqKPv6kkmWKUQK6S2nRxJ2ko8B8tBVWo2hTjuNxRXXgmYRT",
  "key5": "31v5rwem1cRJ3LLnDtHsr8G2PA5iPutmeNGh46qGYjgoTKbhB31S1STruMKuQuYXsnAErxhXLfNB22WLyEUs13Gq",
  "key6": "YfK6g2JiX2dQkUPSK9Fq6dHJx1goTbp1Yq7xG9nDcj4FWzsXHbsiMxNvwv4QgNwNWiwsuLqzJ3g4BLS2uTABzLz",
  "key7": "4Jxjnm1bYjSLReNQG8inrxMQHMo8YNGS2e9udG5A34U59arJfuDjrcFgUHLemAGNKdbMmVPS5yy6sjjbj7CkwxWc",
  "key8": "3dKTZZsAwxNNdpBtFsw4Hd7w9jsB3gCHQ6bBPeLL29pcqem78SZNx9osmtp6QEuVuiyyJFQwqJERpU9hEMSRqpzD",
  "key9": "4tPpehDWjEQdYZcTyT68kGkhXS4jkaV2WRByDXTLAWJGGxWz35diibXH1xQLRuwzznDECHKiMo6DWMWR5z8Fh28V",
  "key10": "3AMfAyZAMuMAxtrqVA9LhEqfxNbpQMppAHwjfdUeLBfifX5igaZygy3T8X5inz2xaFcVnhUGEtKS2z4vKBNAmzyX",
  "key11": "5ak6fgcHbMzEzVpmcHkWrWjBniKMcbAw28oWEcGUzWsgpBUnhnHwwEKucdKioBRA2Fp3qasZbBuXUvZC5oaqMw2V",
  "key12": "4XBXS2AH4pfn149sDcV5f3aWRfDn8tXEuRU5gDAxEbZZjGSafiRz1mXTJREq2Z7b4bUA7EdDVDJzo15N9dhkEbss",
  "key13": "2V2HSWG6sJggVbSpN4M7kfFcL2brv7FjDLX2r72stu3VYNJ2XB9U25YQdAKirQRQW6s44kWcvhUK3PmTLzE3Y2AG",
  "key14": "4xERbzY82bwngr9GFXE2q3KMzR97E8JjfRhDsEXSvnwTX7mYQQhXr8v6FJtoZ81NDjL7vykqxMfNeLVoJXQ6SdhK",
  "key15": "3a65ERMCgxD4rynfnHbSJyA4V3vQjpLmMFcQkTJdk27wsjAszBRKbvx4fF8ETY4BE7rv2cHpXJWz7dtBV6uQFsLq",
  "key16": "3QNWvK5vd4kTHGBV38XLpG9uxZ9eRNbTP3dHt4wfnFgXh3iTAS4i4LySS5CSqjTr9kzUUhzuYpyUHXcrgZnsV68H",
  "key17": "aNu1wFGo1WpBno8x81FhbUL2gGj1XjvVCbaqULc11neiLLSbw8FDn7RuVKc9pBoKre7JLPPyGKcyRaxSDsaP9G8",
  "key18": "28pYR1igLAqxo529WZupwZgEg1K73KKDzJGxpcZbyQ1ST6bqK1cmHV8Ez7wqxmGYq8uptd6LG6Y49yX9K4h47PWr",
  "key19": "67YsaS3Jjhe9KL9ybLD7rLukuy2V1H5KeZRWZimww8uzYzQWEe9sGQYwnCG8uQmkFuC5tpU8XDAG813CkVT8y8rr",
  "key20": "3qhYHCG9kgHMNjbFyHZ8JGuUoiP9NdkrKxMHsF6M3EP2XHgr8AtzYAjjr7eYCmyHJJbTYGUs7Dg9avZvY95R9C6z",
  "key21": "2vqXixWpABpabDcKVmxPeAbxZF2eZ5oU4MvkbVarKwmPFBt9q7xrADj4dNbU9Aq4w2ht8WqtKLKE9A4a6y3YEwxq",
  "key22": "3mm2FXwoX1NdBCjxbi3J6yQ2ZDyCzxthv4S7dgBTvt95uHfAzonrKSpKQciKYJKgGKfffSAq4MCGAV8Ft3qcxXjT",
  "key23": "35uSxDXbYKM93o8LW7jfbGDqiUdSu26r7fvFcwCYWAzqGivgsX6nfGK9pybGKYQsUg5YBxet3TeXWdhw2Wf9qdub",
  "key24": "3xKgX7FuRGm83TtPS29pdRz28j3vU11Xx5it7A4WC13oNvBdmz7DYeymC1nXeHQ3oVTFx66hotjS1wYP7gN9U4Ce",
  "key25": "3C8oDPLW8ni1gaeA9aE1MGYEg3jHDUeNEm8GeC81o8tCWPptQq2mAx2mnb1HQjGLounczxgbwb8VQXHbTg6T31SH",
  "key26": "5iCgbqG26Er5WoX2Bun4neHFm7ZyukdpftX3vVokV4wxdZMKPPg5stvoADpTtFG4TPa31CeNBikN7tbvRPLeZygx",
  "key27": "34ez5PRsAjdSDN6UZCWBhGjwsSMvWi3CB8ijuWC3XLWpsFHtLMTuXFNyApxpymhQhFK8gH5MacgmjZ21HjjQwQjU",
  "key28": "3szDzi6kbEupoBJZReYgfyaW9vGFanXP5n5H3zybuUwAGHFcvQPsmFvPdTKrqueUUngAmTt7sX6suTnM57Qguyqx",
  "key29": "2Gd5YSWvcDj2VnVamDbhbt9nZgZvM5pcfJ39cD2ycoqeGxNtGXXVbVcSJKui3LzWUXtDQfnVDu2hCYvzzMEPhkZn",
  "key30": "2GgnRLysQrZV8YMvAGQSrvz4abEvE97dGyH34oRr5bZFASrkaQPpt6H4oGZtkd2Cf38K3VusyxUGmytG9uAcv6Js",
  "key31": "sfmyJsWaNFwF1CbXX2j2zssFqQZo7rGr5G6dcLChjcp1aTMmCG6EzQ9EEKTwHMFrqZQ5fTLMjwrm2xt9mu3y7Ne",
  "key32": "52Y59Z6ni41AoWUmhtgf75ko9droaf3rpfrpicvHsfxQL3niAW75QE1Ma7wmU7uxAfbgfZpuMJquXUcwHufNUbGg",
  "key33": "633cPCvGxgVoK3bARrCZuqbzo2XD85nDLd8iDmrhmfHVaqH53Rq8ExULeMiw1ttsBqReicWozFonYH6RoCn1x8JJ",
  "key34": "Fi51SVjsnkLkoh6aa4wkgfnqjMM3Hot8beKLfFg3n1QAcsg45gz9ZrWZHNQprtWrGA3c3LdCbUvFp539pCBQnLi",
  "key35": "2Ud9Yr1nn3fR2BUoGN2et4w61irEtahHMo46dw6SSQ98MurhHAKtY63u6Qn2k7tFa5oJKYqSvPAv88RHc11QhuK1",
  "key36": "V5pgTLdWD2zyert9wWaSrk6bVZN9rsc4FjEkkoeBkXzdCcdJsXVWQj5hGf8XAbTBxF1hm8QS5z1WFZBbAWETpM8",
  "key37": "3FNoLiMXvKmLHt7TAzmry7irjgWDVF1P36jxER1C4crY8X95r9uKGS1a79dbT4bGd2NrbMwCdvHwH472tJCP8XS1",
  "key38": "55d7VPMQ3Dca4xdz4QYn2ZdwShLxnFR5cSEDFnFZbk8xmSH6UGnJdUC4BWkgYqLZV4vGgJrHCyhdYJChMeWBCMMA",
  "key39": "4X1mJ4yMvVCet4f4KzNtcowk2WNWwveiKaHXUqrLpu2dbUDRHTTsf4JAB7oHutZttXEbK1757GZVNkZFG4N8xEi3"
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
