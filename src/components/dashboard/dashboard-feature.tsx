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
    "5hZ27Jm9d97frxos81NmRmSGD21LY6VaUjref4cPCKyHSapQTSTYhggDuH2dhFKHnsUJXYATWTQji5nuthKuwijA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfme71CXDMko2cJSTFUyM6zmedMQFmpSQK1q7p2Bx6mwk8dTBChmGakW8wEMkwJuzqvnMfuTHEDKfjCFGkUDUZz",
  "key1": "2tscXxtqbD8sE7bUpocFMJm8tMFMKkFatapVqoNt6JtULcpba8KciXKFkjJLHu6Yu1bkDE37i6ot4WNNgTbbHMTb",
  "key2": "jVM8Qh4tvkpRg6ssAnidpjFa5y46CPvG9vphMEr8Aerp3YM1p8pJBp591wYc3mmaGA6bSrPkXF71eFs3TFr5bQi",
  "key3": "3jGsXtbZoPA7QGRAdBo7ebod9XG5koo6fvStJHdYpB8U2iwgTVUGtD2137Dqs415mmR8DpySxSFGJ6wskZHLyfTf",
  "key4": "4VjMgyawr4fTk1R42uvpc4VnmFg62px9Da1bkP8ikfpJtQJ5i5ecEMiE1nfikbajoDpSj8sV5dNZxmDDs3mUSfXX",
  "key5": "wSpKVCa3qebXZvp6FJ5vz7zogVzLBDwDhdJFCxGyKwzntUwYKNsAuzFtoGogbhLYTivgDgft1b6KW29bb78oUCd",
  "key6": "3CEAejdrZ1ageXL8T9vqZTzmUkXnn5xm1WVoNG61zicseM3YViuin29LgTEG9MyvqCcVx72uw7r76KCx6m7QuJhr",
  "key7": "2QPFzr2ifBtBvFQLLSy4JaJ9KXmRz3VinuVtHdXSSRuPNoYjVT61z8bXEQoNX9XyJmUN8JvUP2ZMVKQCZNk6RTPj",
  "key8": "4mDRwq31sodX1ufmCD3LKVk21PKHGHPQnYBtZQSVm1VRLkvuisHF9Pi3Z9YRirccKpoFdEW9BaSVQjfrDoLE1uYS",
  "key9": "5AHG1Hnhq4sNVFnasEoLbWe22qXWELSo2aDWYUZgy45pqRM14AUhdpiFLJFG3JhCxAWnycPRkDH9yADQUHyZYzXN",
  "key10": "2rTwZWQHAktrnT8HvHbkrtiJK1cTHhvHdAbu4dqCqjZir27opjswDRipi4Se6ZCKp7SYbq7hqXY4mDwmT4WBJjE6",
  "key11": "3KuhR4oPYwGHtQLXNCyw3kBFLfDDjLXi3JF2DEvq6BByjdoUDao6WawZKSf4bY9hFFuVYREZaFZNPEPoLz6DBYqQ",
  "key12": "3KRWYuKqMFXVuQGttJAJd6wbyGhejkY3wscA8vG1AQPsApzMBPSMbYbtxQF7kWHcEcQKzU5rVUU1FzxEkeucGRKj",
  "key13": "8Nw1pK7yfLoduGxStDAmU9x7sBshuHhdG2vzo18A4PvvXBKPuWvGBMjHrJbSP9KrUMzPocXUBtYcjq6dqZuACEx",
  "key14": "5Q92LDQPBUNXzFwcPxSMBCZtbsDym22zCQPrCPd3rgNvzoRv8NdUafondebbzAG6H4Ek5kWmZroTfdtWjcwKFoGL",
  "key15": "34dMvtEh1Q2EhtA9yE7HQ6Jd5AVUAMKwdcmtt4wAhsoX8as47GT8xkMrxKrJKLjSzrw6Ry1j1nerh6QFABpEUxfu",
  "key16": "5k4DPcqbpSqnyubqXVcWDQdPxWkJuPyJ9ZMAeRGy8hzrVMmU1QpHBy5evJT1wqwrh3WrQGNgVj7eH4yxsP8usDir",
  "key17": "3C1k3sGJLoqxrMPbw74jaB9zGdvMEGgJWCgrUeEVHa1awH7j6XECNc1mJ7VgefW7dW252Crr5FRf3wvrBYLYCzED",
  "key18": "32WMYLSzbWPKnkjomuvkKLsW4NfoMkdvfCvacsddr5pXVqsFNYTi3UbS6CwKxDaZRTij9xkV7rn7t2k7NRW5PZuS",
  "key19": "5uprYREtTKa46xZpJGfZi5GuCihTgJtizMCo8UEsS43wtxCGHCMm7bTEWN6nRCwJonw931H8J1wXxsH3wFJKy7ER",
  "key20": "5hbUFeyBxNHw3iZD3Ceq3xu689Monymh9LZrnXMUyFxx1bxCU9mwrGqL3p9nHtwBxwXNQa6GxChFroouqGcMju2R",
  "key21": "2mf6bK9gc8zc3NQ7nvQBu8PTG2Hka1cPGRVsGv1Q2Wbi2CWzosy4xSCGw2Md6SvBhxRHJ5gMr3h4M6b5wfZsVXHE",
  "key22": "XbZ7VqEBznDDR4PUSw4Hi6wq5Lmh1XV4jfnyWA8B1sGfKnk61it6kY2XnBU7tqWCmyhuCqfXq2eXTvg23Arj4bo",
  "key23": "55vByk2pu8oCihQGLp5fozHZZxRDhiBaKkz17FC7hp6cmnuX6iZ7hmbm3QNgkScLNipMEbft6eQiUNCgNkvU1Pa3",
  "key24": "ufxZRcjEdX6tFmirvGRQpQjurZfBai7uTBgHLGFocyqwYpZqXvJNRkrhEsmpyEcFkcPxnXFf6jyx71aDkgWWgXX",
  "key25": "5VB2CkxmX79XbDEMEGKd7K27XV4DVjJFHLeJU2wf3XAn85z5DxwGXnE1Q2sZfakzR9Lb3N8BhDRrEReonvRdf62S",
  "key26": "4FNpChuhkbMsrEv64fu83RzUgK35ByxVyJyWQGGQbZ8sLkqVQq1m6qUsfEtzFoNArH2cFJXgpEQdvutGpiCNUZw8",
  "key27": "4LYokHEeEYzw9euTMUStD1F8Yk1dcfcEs7DABzHQVTcJK1wDN6pXV6xzchJ8n2o3jVfke3FoVWRkXQg8CDfFa57j",
  "key28": "2SSfeqVM5ZzV312Fy5ZnU5at7gng1vGKvZhvDZdp6NXVai8R2UCsYpAfbC6anQdUxZideuTvJkzVnqLoqwS8kt15",
  "key29": "4tDpceD1ER3D2aUv8CjjbkThnuQF6hoApZ1A5zM6hcjYmamMvkrVbwNCqY1qo3LDhKRmN12BG8RZP4DatnC2Svjf",
  "key30": "3j1yfU8rjxzQ1D42Y6jofY7SvHDRRcRxmMNY1ZPh26XCTYFpSxZfX29sYwoJVrRJoipiGANAyrb46x6QwK6NHS1s",
  "key31": "2jPg4hQy3cVhjnQPSFfdq8K6P4rXsmtzX6yytsnC8M7HWhgsK1JkxZdWabGX2QMncxgCjaPgQyLXG5CuBDTqDk1H",
  "key32": "3E8rdwKaBMU8rKNcbBuvcuFoBJpHXwQuRZRGeomLMhELTiS66PbLUSd3iesQRZsdYU917o4caBV2kLr8thPjsgAi",
  "key33": "4czWb1YEtXwPAhZzEA8pqV3nmgwZBg4gZNLqW7nzjPRh3M37K72QxZPLUa8AgSySMQw4NAoe4LrvS5KwBv5NFKEV",
  "key34": "27iBmkt7oUvBedjg5J4gPZ3awtjBfH6cz25Q6Aqhdk8YeZRSkbyTEdDRZHd39rwto75r9fgFuPfN8jrbgCXUyUt1",
  "key35": "38XSZLijCHCqNzSFNx5dRm7TDQxWAJV1R6Ly3tEBzMoAoqPJdGuZPvmwEKtXDZb4YP5rURTnhLkHfMprDqCn6t5",
  "key36": "3v9XAHB7F6YwTgEME9cDiF4HmtpzdyVceJ1gRB1hk6aJtpcwFDUGxJLr83sGQRRh6imAh2WTjYCNLttLUzRKLE5C",
  "key37": "4oRzTfSLcHnPQcYwsdCG9xrkuhadn9SHbh4V6Mi1jU3hNcSfirxaZ7nBKLjSfCTLpppXvLcviir3ELyQk3wT5ity",
  "key38": "5GjTqJfHkgtiJurYwXe1RvxLQwwb4mjU3Y36SpFkXdonXMEUcGAA77fxTwxd2r9j2snAZzC4mjLMRPJeC1Jgw9iU",
  "key39": "5jNBMhLq7gD6NTb8AfZbcqyxiZYMzFYqMPtmHRST7QPNpWonJsNGmAmdJYrjeiJUMPBmwJRsTJo63Xbcv4X4oSiw",
  "key40": "d6fkNCteBCyuKEM2Lubacq17YfxGeyimn66ZM7VTGch9RGeqDjQ3JwCUrQZD2DD4T5b1SPjEDwE6u1J5A2cbrTd",
  "key41": "4dLxEiGXJbWUh4vv785T2m7MLJHJF7CcnTCUVeApKLkaGx3ivFqjQphMhrcLiqQ7RAsD87sPNSE29hKV4r1keuBv",
  "key42": "5DeusdyKVQS1W5YDqZPMBwKQmfWRaXSy9PwAZ3rAfjpCNABEExBsRUBZzqtNLDfJ3hLQCy2RBGCa7Eu3teMoUPwL",
  "key43": "5dtAENtDJYaELRrKiBx2C44tkaCYKaE2KKAw48kEpYYJnFDCnR5FHZiNn4Lb5Ty2PFLAsYGRP1GgieDpkcFDwTAy",
  "key44": "3sEJA5Hbw619YmeR2XZTcZ7qL7ir2Azo7h5PtdtpqB8EDYPjqVgLNsm9KCTq29piQcKa4rHUgsRf3U1tdVvbGFrW",
  "key45": "vWuS2YUVHsn6cn3qbYeUj3epc4ReMBMZZVeEeUvFcC2t7aMVAuN4dMT8LuH7dKnJUNArZsY4FmMb3bqsTtWqfZJ",
  "key46": "4ZM34rL3jCCk56erj9Qy5s2JA5AK5DrdymwzhDCQZjFYAFAEKxA6vmLpDYtH2mwLSYNWYMNsz2P7iiTDZhx2jVQk"
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
