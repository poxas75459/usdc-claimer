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
    "5fxm7RcGiHPPgTQKtUMx6MGLhJEvuQLw5XzvXkjdKuv7tAi6qcwjjkVqAdVpdKdUXN8aqNFDycTh9qDFTPrP51eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5somtANBfF8SZDHdmnrkAnM7HatrETr1H72XNKmU2Aar3RZKkF7dEK2yQVC6ipHvVmMnw3E5Vwfiay8Qim7byWu",
  "key1": "2WfCZHqg7ixp9BRrTJh1Ty9D73WWNfPnFkPWRtmRbVD3zhMMPBk647UCXnhwAcT3Zdg8GhjujSSQ4sA8Fnfrbvzn",
  "key2": "5WcGtjfDg15Vf1SgkVejR4ECZWbEVTShyKRDrcZ1BMrxb2vVvqFu3rzVbHV4HeHJFzvQxsJN8YKcLntACDrrnpht",
  "key3": "5iKVw5ysHRDvMnVkYumHDc1QSSiAHYfDuKfWR37KrcGZkcJJG14sCMq1HpXDFcddC6rwusctqQK3i5CiVEdDJ1KX",
  "key4": "nwrKhrWwsuzzrVgirtLMketPF1CSoYtG1X9SppLaTqDhPug5qQZyLMGZa2xYExtm1uKakt7hPajUP1rs8YT5XDf",
  "key5": "5gRFfhWga4hK67dKJkNWmM5rS8f52ApSwEfLmPNSXon1qV6dDBbjbSupbKL5DxhjFhnU6sJmMTv1M7pYVWP5CQ5U",
  "key6": "4iLYTc24Yt662gvGGSW2yd9RGTrnvDrKtvGCtRn9LVxzNYbEV7YKh46vfwbqKHDNBAN9D734nPf4QJaRtK6fCNvZ",
  "key7": "hx7fWV29XHRBCkmmZ5XjXYkFzYR5Tdm4BtijdLMFPvhhPz3Y3cd5M4hu4Q1xULpTMENZz1yT6C6hu4d3roW6hia",
  "key8": "4Yt7onHDjtNWDXbwLXrsgAwBWs9Z1qU7R62PysSPA5RSate9vyNMQEuPxHaShnkou4ApYCJYriL2Mvd4nfzA66kw",
  "key9": "2m32pp1dZLFMpvQZT699KbT2xt4XSnrY3z4GNcdEEuWwE8ZCswZytvrQtzaSvcAa9KNrxnovKcdfZQvBFoWhkXWx",
  "key10": "2vDcCpCiCvXEWeK83qdqEnX3oivcAHuFEWvhuggcqTETHAPLR97mxk5JdmWyRz74X2waJ1qncfeuQvGusKLayZSe",
  "key11": "3bCPQ1cptPjzqxoW7iP7NCiFWZqdx22HR8bjTdGpHFV7JmA94f6kcHm8gpZ2cHuUuUk1ez8BqoqiUfWZzN1PFBbn",
  "key12": "7UUqUWDBo7qaBpwHUrENoN6EJhT7nS5GxcjX96LAU8mRT5otKua9HSaVE99hzDGwSLP2feuQgqbChhVdLUTnVuD",
  "key13": "RvW3Yf6xrcRCzPwVsn6T1mqXmSLjoaUzGgZXjM3eh9FtpJNGpZaBh6biUV3KPCqHa5qDG8nmAyqaGpYN8DuvUCq",
  "key14": "NbhwWLu2cxASVKPH1GYNDYaZyw6iqRD379i87XeAJMVQ3acaz1Nhd8d8HcjKTDNPNAUSNN4EeGEUycfsCcw1coG",
  "key15": "522C4wD9yaK5PorYbcm7LhNvdPeNGBRpXs9QaWGpgQgwzq9nhgit9d3PvjgxMSazX8czkF7i2jqWRmzb6hwSNqrf",
  "key16": "55TG2SEzc1kaxv1z9j7RtXpFQcyWpTC3DjjPceskdDA1K7SjyojmRn7kuCbF2TbRX1VPATraPkw6Qs65AMKVsSce",
  "key17": "5YkCawPFHvJWnXbjaB9ASVETe7wfMkSUbJpiZ3ASnKsGwB9JcuHSc151NAAEs7im6QudvVLavsydgQepyLwP32UY",
  "key18": "2ET8tiUGsYvK5G9XmBRRPLMZhkpBckpdS8rdr414kLWvy4675Qxs8NtqnkhhdFHMfn2JerVdscTx7sca2j1yZyYs",
  "key19": "syKz5Ssc12yFAdsDh284cw1DJhWVksYYcGuLs6Lh9XcN3iduj7nBXxyZ9BG9qYk9LSZGZkqosJeAYhJc8QvAtTN",
  "key20": "53bjXdAEFASQ6xnVR31iPjggz3XBfXYx8Dmfg6W5PpC5MrTARvN4CDVSUDH8FgMgwiFRWp68EjU2PfpS7XxDMMCc",
  "key21": "6729ebk66EzezEbRZ1idSLY3f3JvfkaxX4isN2ASFcrMQCWb3bCHGnAXQoBxwwvryZ4rSzq7XM98BDFRJn3dvFPu",
  "key22": "2TkGMhBzc6PVrXDQKm5aEruCcpLBKhWXFfTybwKCtk582Mou5SjEs1N8wz1KvDux4BTxXRFwkx5wfLP4fsDBQ88r",
  "key23": "5M9pmMovGgWTQHhywBEDHS9Qt5tu47hmD9vWKBi9JJrxvSYS37qkX1JW3u75vMNX5BHZQSveExstfaZDMchT1oFv",
  "key24": "3n2pXzmUr9YHTFu49U6YH2nzJTomBKqJrJZhhjWKdBnuvmdTbFTafkCf7MvmmpmpBv1rVqeWbpnLgy8n57SGeqZh",
  "key25": "44PX7VS2juMAyzYDuYESALe5iL2ZAqp6CTKZG4bPKy6PQxQDERHnU5HNWZ2HB7sBmeLY7aK4uddAatsZeF64Q6R9",
  "key26": "23qGhwYe2gAgDqM8YGKba5FU8imgHTk6WFNG3CpPeeC31xd6asEtyxHkEWknLkSUhLFn6fWUFkLtaYpuTHrTP7ku",
  "key27": "3VQezzpDk8wX5ccy1TAroYoQXtknNBd3XgVp4UXeW5aVYcDMMTYw3jaKRLjrGiPMs6Q3AdiLr8FNfhXFUkKxWsmw",
  "key28": "4Sryk6CmHqjAVWCU9RxSEoNuKy214DbxGBvW5yTHBv4cQ4TTKcctoXbQ7TKcBwnPHnSYMFfyQFYK1CCs6CRLQvdw",
  "key29": "4j3Zp38uWnSPWJBD2nraybxFcUPBsxpypgrGi38ppjUznfXx3dgmREbW2v2KCxtZkz45wphbCLoUcJm7Ht6kX3p8",
  "key30": "fmEhnSxYyP6asoCVCdR5RgFEgvUu5j5ZTE1DasV8HRyJrgpGhUoFkJngYpLQTpdKoNCot54qBkqPU3TyNFUAj5A",
  "key31": "RKTR1xq4C7WX1joHsH4fqnhfWFHn8eEdJ9CeXSYr3exc3hCsrEwCVJzndoKWKkGRGqNdbJpmnefiZkD3ARaY6kb"
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
