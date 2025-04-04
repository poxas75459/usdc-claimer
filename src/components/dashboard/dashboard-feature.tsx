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
    "DPdnrHL8zUfXQZGWKoL6qJ8d22YyDMYb8zbkqpqK4GQR5Ywzaa21h4fQbShWrakRcZmuApoy5GJ6MceQsm23Lq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VtJzHanssdaE6s2xRbineXgyX3V5tmTFWFTZnTEjzvrkWnA25kePLbwML8ByDjsK62b1HaMo4wBMyg9WETGqt3G",
  "key1": "2ftYjCW2DZtFdkH3pSwmFmc5hDj8iJV2atXs7bUcMRivoFv7u6VHA8U2WHrnVpoqucM3BxdCWyTdF8hyBxMPF538",
  "key2": "3vf13AZdxEJmfw55EtntTbAnibUcaiC9NYLAXCstjQH18xrQEyMh7CvMXxn9uGj8i2bQBv2CFgCm7ab1X6bET7Fu",
  "key3": "49jqFyrqQGYjQCwEqmCkKC5i6zvWAELArUtaFBrWQYmYQhwUDS6YaSnj6v7xoPewytcjJwibBZuMCVjedJderjQ1",
  "key4": "Brrusx7mCk5DFdNwLUMaU4QXYH85aMrnoqvfpRvesNXtyhZ3DAxgjUvc5hxUdVxFXUd9mDaY59fFqhdx7d6QcqT",
  "key5": "35A9EbuLLsa8tsNcCAMYtdLdgnJpeV92PxGMrqkyZJiSdPZgCUegEcMNLjAmBKBz5hXhSKqVPMuNbNvSjBiAv1HZ",
  "key6": "3mR6mdjanwpv5mnR89ra8vuYNixUmUwv1Gun6ummE8oUDtceZrQxNxsDzJKChkB7n8A2WVg4hA322mCeJqyPJHLR",
  "key7": "5PpHbsrawaQV9tkVCg91ea2rXLywqwyfpiztuV7ZvvHKC142isxYJNdk4ndTmDsaVVgD5NZSmeVvSFqFHYbnr3YM",
  "key8": "m67UuNoFGVH7uGPD2rU3z4SjeGgZKjkt8nrvrjnnr5DRnArZNBU9droXca4C3CVCxUA1a4FYMFYEpU7vMco6Tbd",
  "key9": "4x9eMd8csxrzWQSzveVoeKmmNwn2m6M4ZrZHVcHqnAAUbMv29AtX2wToB9fDJmbdWS9cAgwQnJkkXw79HommVmr",
  "key10": "2U3Z8ZHjFoXkr4TFUSpesoVjkcBfA15DypDZFDUczX8oVdC8p7Raxa5HbGHpf6LAsLxKtRugSDRcYcBTz3s6FtKN",
  "key11": "32izXUid4jRdVtGQ8uUrjd6SbJkAsaqHfxYhY2CcY1rUV8zYRbErqf3ob6LVtghUXyhd2KeecmZtQy8uP4cwCih6",
  "key12": "NED6CbZxzsk9izVwpvM2eqSNr8CP3wMeXfX6T6QPMzA7g6rynakHY2VaUhBKjvW8DiQGrcMEyCW2bH3m2sx2hA9",
  "key13": "4Y7sKK1hKoa5Y2QpaDdDxSd21uG5Tsg88nMqcnJ3i9ebBpeAhHwNy83fMNaKvYimuTM59BGbKx5VprTaeab54DR1",
  "key14": "54xJaAMG2Fwzi3xBkKbv2M27xJrfu3rhqpSFTGou3b7UAHBc6qepikpHUeCQ7S7dVcWYZCJif2Jo5z7nwSqHrSq7",
  "key15": "319ktCgM6GZXWeSksduokL9bQreh1tb9e9eRK4NJQWMVjNzQSU17xWzyR1dvWJAuGgiQKMsBT4A9p5PA7dDjVt6L",
  "key16": "3b83jkQgHzVtyBzBwAvunV8REQRC4h513SBPqj2QK5agB2DvM4VzF5LHZyai6QLNEkfnEYdg5jeVAquLhbSkxufN",
  "key17": "3QwqEqQ6migpFaGuDZt5dezwAqWXMPKQfT5jGmFyBZgwWoHb1aWa5DUeNF8SBFrW4jmMtsiGHoNbqt7hwxZuVYn1",
  "key18": "2L2UHPnsFvNC74kzybFZq6AHwUXhuKziPL83kJ2vF49vRqenpdTsnYUvGh8631DPwgdFMtXR6pxCZi5K5G2CwU2w",
  "key19": "36t5se9YuXFgBL8KRrLQfQ3UnhyFEnFhHUSZfhU8pkcWyGGuy3juXd9Bxkst5v66jiBniy7jvfCLtyqfxwMXCaXN",
  "key20": "5U5qe2c6NsG7vJXTMeVkaC9ZfEfDN5G4eDfBdKhou7tcjRKqofDVFyxcHKqDFmZLCbTATXwHacP7EQzxyBRhEY2K",
  "key21": "uPuvGNNJg6XXNVhTYqYPJSVEQuL76NrqoRHr3NoRi3Y4V7JLEMLptNuuanv9wMWSFBqxuthh2TiZFJhbnFNffyJ",
  "key22": "2c3HpAZPNr7toJ5GBh8SEc3rqffxwXspGvRgfo3PChTQDhXHVf5swBDk8feED5Y57i2ZqYtxnTYzzYJybWkf1Tvg",
  "key23": "5KUnB9PAkYaV6jS9dfSQyY23Ziie3Qw7mxqVBtCU3mPwkMJRnGyopnb4rEzrD736pQb1n6ACERDvsiJwK9PPRrkJ",
  "key24": "3enPMq1SDe1Gk564RnWnn6JVjUTMDgSudQUtS9sNBBEmGDV1xoq3Brm8z248ecyToo6CGDxetSYJL97nbHk2HQY9",
  "key25": "pfwUgbHUSk5pRXs5kMMzBrmAsJym5EGUEf4ZMAYQGLfSr3topYqQ4Pdps4JriHkT3Ce19e97Vks7ox1RRZ5B3yC",
  "key26": "4QbM4u3Sjt7dQUmM6fHvNG6kPYUfsJVmrrV91RmCp5RtDEo5Nw4k4WqDLtQA15PSoLAfnMpGMwrELd8iVARQzbka",
  "key27": "5THMyArSFx167AK7Dqm2H4bnn6rfhAjiCcEfE7ZFZ482gtKdJfNTxEAb7Qkziaf8kX4ve9RMPBYQTWfdHcFMy1iP",
  "key28": "3fdpDF21v4c7JzM9X63sbSusGfNcecv2R1Fh9ZvPJRjzrFpSw1wSBA1bRY9s1idxY337zt1Y5PAk5S4GWaKrfsHp",
  "key29": "53zQMXXrW2YXc6hcs1egg3ZXotUuUz2jE2nfdp6wz6c2LSfNtKijCgFaXmHqCf2KzcfwE5QVdfrdJMGaMNCc8dz4",
  "key30": "3dctkNnU2i7339dT6tUAHEGVmTiCX8cPkLXHtPL8usKoiSUXymDRmfZzjt7pXgi6jVhRxZbBgtgwsYbJ8vNNGp8x"
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
