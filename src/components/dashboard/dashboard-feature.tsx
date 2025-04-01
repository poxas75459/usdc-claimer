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
    "2eFAYjhDRqACpRnFfyk63wXcNwP2azCRxL2rkWJozCErwdFoE54Z2y8yi3z8kYXDsrfVeznPx76LoVvLvhBvbVYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sS1Nyuxy4vDzJEByjcTXNFf9dA91j8Hy8nA9ekhPtFBXCYsEeXJWThLZKiu6c6WoLuVhHQmdv5EbBFr6RxRKHbz",
  "key1": "csSUqep8p8ugFAvyhdPTsG9aNq4crAoTHmJvUMcQZ9D3qtQTFN7W54XtQcRH9LpCPsWASV3hbTcbAQARnLducYq",
  "key2": "4SVzUwgFjrxtVrBj2cHVHtAqUysXCCMbf4f8DWX3SerUEneuDRNN1rzMUhNWyGm1kfviTkWdD754VTaa1Afeyd1c",
  "key3": "yJiwKNf7Detv4fcB94ieRSaDGRVfngpQgytV7LcPKHs1iy75k2hDacXvMkfedNbq8BWQpDv8aKcC6BtWZwKXQLG",
  "key4": "4vVC1jJEhUYC5BdoFeeTPduJrWPBVcFvp7Q9ikSxTzAcapuHSE6EZvkwPwTCaqoLMtQVG3wuyW5qRUnAsfgwAwfz",
  "key5": "4jHtHwUTvDTQesYMcBBbYM6iCd8g2mr8YVHRS49Jm67JFHNNQCGfvAoWY7jCDHimnRZCDMwzLoJr7xrmAUWZr1nN",
  "key6": "5pKCa4LoSDHuPxEYHW9BuJdxceXbCBVSGD8sBJ2WRHrzLfDzEXtTAtoh9FafrHMDKoQ8tvSiuZWzfJxE2A3JrpNj",
  "key7": "vfnpWrFYxBCsT79YPNcwZ4pWiJ6EGUGb476zuQt8hjbMntcfu2Qk64FmjFkA6H9VjoAVDHsSkZQmjUiD6QGpBqY",
  "key8": "45JvrGVSedeX8GVvNsjeMA7Qq2ZDSQ6fMakhtvbJM2mbWjvbEXc7qB3rw9jDbhcb83rXz8GUaMfRyDhZ9tYjoA9V",
  "key9": "gxkn9DekK2TWS9iY5GK8g4SaScxHJzbggsWkkcKA2xYRwxWhva1qwd37Q5nJEKaY6WzGFPctPuATERvRNN6pVrR",
  "key10": "4HxSwbZam32sEw3nF4ucEgMQX3zSRvRkdYhHSXtDTSonXYiqg4GbuYCF3zu7R7TLttFGXis6fHPx5pq9NFkZmnAd",
  "key11": "4qe57ZoAw333z8WmigHwniFNFZDPXfwojuWstpjPmca37u9XNNFddMkuLgGUVr1V7yg4HuwJTTUiKuPiLVXyFvDm",
  "key12": "2xrykZAJYBr6jkW9fLxoqBk2vjnrV9Y2FQMQwKCihybHbat6E4ekiV7ByNxajrmJ8kdaimVwCzu6e37mAJ5AN4Yr",
  "key13": "4QfWgPY9y9wBKDBttULiFxB2P5BaQnP3F3LmJs5jm73FFB1WZCh5nFYDFtsY8Yj61VZYLsECGLqwqVWhDCpX2uwo",
  "key14": "2j3PDEjLADoBrhpsCXKYCBFfn2VFkMACPT8oZL92ZrbQyhcc1AvPcE77wCQUez4qL7WV6sLMqF2Mk4y7wTrbVAex",
  "key15": "45eB7jnPeMuvYJH58sZa2NGRVoK3XSv5V1ZJncXCGLFRW967h6dv9QpxS2y2TwqpWviJaBinKkDbz5F3EwHx9c2r",
  "key16": "5EdXeyR6SbRGc7Aw3vE97t8XECSFWDaDxkgQRm2miCq6gpNkQqaB1oGByqhqF7SRuBdeC6y6LRHMPofEmbQvCvXL",
  "key17": "3f195f1geqoTM45yTKfga2zW1MjMg2a5JcSnStxAU1XzSpudWjcg7bYUPk55Zeb69MhHNvdiqBqNPkFobKWFSiph",
  "key18": "5qCpRCKvYy5HDXAwq1JL6DS7D3TULqQ3Bm4T5xwFrTJRYc1o2JKABA7PzsxiZjcA5d5jZuPcb7pGn7hy5NCQ6SnJ",
  "key19": "4wtm3Jnhp5arjo6D1uuxnLnL3uzCCMxXGuxJgpgXX64qwr36TA9D5z6JaaWx2rcvFRxa6B9a1LUCy3J55dywFvQf",
  "key20": "5fHuEPrdwniVQtTws1HBdDL3m1opqTZtvi8tf8MSoemMUpCdyb2XziqhDVsApskdT8k7kQUX8ovoMQ2uHDeoFXqw",
  "key21": "2mYaNomtgrEfP53TnonLn6GwRJtk5UUpwy8whxGch9qVqrjUWkYg1nZBXmm5cZxnTu2AX6PwGW6a5w8EvNg4dp3r",
  "key22": "aEKrRTaqb17d7xW5NdYakbvZpr9ynS2HodB4hXAc2WRA69jiCtUk6fqPnA85zB74n62sQeKBHqbeNpuQNL2Vvzx",
  "key23": "2y7mYTb7k162uHRmSthpiq69wKoNpT6CWiCoWNfEsR3eVrcXrA9915jHi2BaZ34RTnTpwmPuGAfooPJnp3RE3fHv",
  "key24": "66JJwmtXCKnCDWoiyE6shXaLv6mZ8KzptdtSuvvRNSZEAMpwdUGyB9sir3Z2UaRg6nA9EGnLNVcUVAUaGCsbzQVj",
  "key25": "3SV5XSZXzCfzYv5yypBqgtrx5PGaFwoJKX7BucQLT6R6t2MQqx9NzrSQ5zEEtPmFRCh39T64saaJfDBFGHii6vWE",
  "key26": "fVtq28MwmYK9KDNJMeNwreYigphkuvNz5VwsPo2BbYqB68s6e9eAVSzyUuZ8YPm3VwdkvgNW1cSD6FPQe1GrJyN",
  "key27": "3PdSUipUCj5VKZD8bbfGTNjfL3ShKGGK9AJA8suRw3jKEjmc8PxVUsxKqUx9mTbAKrabHE9D1PWfAMWjvWZ9fQ7",
  "key28": "ryDTLWPeVLJyVWVVF9323dPBEWXkBKeC2GawZXiypTVEAyiaKd8WMK7Q3BC9kPbXmAYz2QzrdbDgg9Me6huWpk2",
  "key29": "3VfYhN8SvNGTZBn1MDsyeMVZNj54vnn3QaPFYAGUdqbgH2XKQbitrQMCoDVHnPo9q2e6jfREM2CXp92dDN8jFofh",
  "key30": "4S4spmeohb3XpcfATx8f9uX3xrttgy5KjC2D27eBXczYxJncNwmf4fTR5yrbcMGjMGCLLxqd3rppryt8AvC1y4vu",
  "key31": "4q1UqE5mTxxfx4QsEv9egKGWZNmvY1zZsUh6QMxJzUPNYiFVBK8NidthcP5mnpxTadEpHmjoF5hZkMKasJZUEPgf",
  "key32": "5vs5cShiXY7X3bwG1QNvnn8YtUM6NJQn8DNndz45HMrpGzqBewm8fRZRKbuZe7XgCtKqvjQeuf3wD1wErtZEBw6j",
  "key33": "67CHKLyTwDRJsEVcUNthUqCb8EiaKCRQM5xg29yxykZykCUctTx4vAzJKNkMtCeZv6yE3hopGqx4CBeCRVNr7smE",
  "key34": "4oZ3hBDuPPkViDbUeZWhtgQi4w9xsy6tq5UQyjjVLEAN8j8jNGUy2BpYKfn63x7Li4Ew2xBrJ53QEniQddha1pbd",
  "key35": "2DgG4SLwUkaEkZUQJVgwR3gmWsCp3wdoxF3FHguEeyXNyrsikaku9XhsXjmHsQkjHijddXfWQ5DrgMUfBLFTkFGP"
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
