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
    "4sLjntX4AtrCstpfDs8NTF5prQxBZa8TeY4M1sckSAMD2y1jvE37otmVxzgtaFh4T66iYjfbJuDnPsDMvt6YhSLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aeoBKpyxjDyxVDCxqKx7PZ6hfyHwsgWHEZRc4eEBxyaBrYaYNdFdeejThaQ2g9H2PGkYHVgtz31mk3KbELBKDAB",
  "key1": "5MBurmtu5pL2X8kVN9PDwfSMfWpYT83ZVu5KTN65e9jirAD3s5kwMiWwqD3BwgXCb25FQf1584GURwk6uHuYy4Cg",
  "key2": "4vPcaB5Lvf46tCGzkTPbuPi1ZmRPwzD3GqcCsLdEY4nbvTdCuCoAcUb8aFbRPjFk9qMZyJLuEab8a8eHSJ98yJwM",
  "key3": "3yb7JmVfwAysMNse5u4rP7DEHhLfSczpfMBSSRaS4Q5qysNJaoLtPLbhkfazCipqfJSY6vhcN7Le2n4doFzh5XC8",
  "key4": "3jAwJC2WR3J3rNY1idt2yCbXddVi5QwzBsnzpSZ3hF4wCQxWk2Tn2DH9XQ5cid7GUUPpYQ8eBYqizaSu8c1HHAM8",
  "key5": "4afa95i3xJ8Z4FJYNF3K81U3YEZNUktEugoZ92sQpWA7hgbndgRRQWujAkSAHGcHRex29q9QWjBQoMf4BcX6vwBZ",
  "key6": "2kqCC3bLTroWBbJqMx3bjMPD233BkJNUPH51KRjxi3s2gRfveTdLpT8ftQRBk6vMTLosyARZSuwrQmVQZicFwEoY",
  "key7": "36JDveFiNimxrPJ7PJfAAiwQq5aB4TFcXeub5WQFefchgm6CzKqM72bAg8uhEh6uAAtjA7Ufyb6eBCrjNrLKrgLu",
  "key8": "4YaxP3nSacMphoAnX923QHGWtFKfc17yAyaJqE73j3R8bJn9abNrZFnSwWLDLvqJ3daQaDMKNTd9gjaGvEKg8JHs",
  "key9": "4zfWeVS58d6BLu7jSQFFmBAPimqZuvnErHBGwX5M2szpyjBYfm66fowhBJdWx1LgW4PhRXziF6Mw15RaUqBSZNvm",
  "key10": "5RjEK7RppRo3YF8prJBERY4VJa95Tgod8D3iw7GUToYUqvkXMYbhFddRSobpb7mpWL4p6N5Jh3rANX4s76b1gzem",
  "key11": "4VdD9vmKkDRoFqNaTa3KEPZxZnT5vXtRp6dDokAdeBVPpL12YfffbzuXCpsW4dAJzv883HF3Cu3GKwgTWbPJwp51",
  "key12": "4HsGG1FKMgkbQwV8LH4g48ZDJaWxSDs3PR5FBzvfe7LLfdthwWiPVwpJrXj7swhjhpu3QGSbKne3ueCA6ZrCyL6s",
  "key13": "5doWP4SsXYf5A7Aywnjd15BzCZNX8YWxh1Sw6VscaRVLmpzDao5sUCZSdQvc76LsGnzcXMbPmdoLfonSNcjuMz7o",
  "key14": "3bwCRZQ33nPLHFLtuFhpJAAju2HMxM5CMMZdUuSCKzHxzjXLNEYePUCxWCdcDaFEnCJdd2fufpAXqFg2pMxBtSCV",
  "key15": "4we1PM9YMbNgrZMR6HTjK6YdM2bt2X13EjVVzUPKkjSuXSpUeSnGgbnQBWc5CjwHYhh4bYmG1ocvkFViZ31ViP7",
  "key16": "5MXTdQhxTmrNkJeKZDZxabHFMmup6t7nGqLbpyMeS9H8eq3kT3C3FT9uFjkzKTgVjvuEHuX611Bz8CkHARZJECpu",
  "key17": "vh2uaBDcTcmRxSKz8H5HEaEQ2pm24Nr4kSrsRMAwTXQA855XAvzTS9BAvrn5jyz1kvURdYxzhoRuusVTUJEAhMu",
  "key18": "5J2qfTTrSuuMQkkTBmiUfpvAvq2TCUnZGQ9kgWUW1msYNA19SUgqcYsXHzdDJqS1Kr5DKcgYYNnuRNRXZCdP2qxN",
  "key19": "uyESxneAjQ58jfSM2ktUcoEeRX9GmTum33iLbbyYwnkN8jdKQC8ZjWrpP6F9NRoUEAHtr9WuCHNVgAh5uGgbx9r",
  "key20": "Fee7usU3VupHZD8CGwtVybm7Ze5TLi1HmHrVADA44qXjFuGquaQ7vZ2h9aUbALp2jUeFNKcdxfGHEyitQAh4gsG",
  "key21": "4oqM7MCQsuR9aAusfL71bXd9tZW3bpTSjhuMq9mXdmwc24zRMroxEJrgwLZZQ5ywcWFsyi38GJGvbjz9j8BP5mTh",
  "key22": "4BHF63WqLxcFXaf4ztYZkyVqsMWfGT73Q3byZ1jWe5p7VrEjudLqcvaVg8iGx3RptUM2xcCs3CDUWCqMevAc8yyL",
  "key23": "2LYjRwD5PXykSVyckeGsp99ZFz18sd7HLPyTigdrDhWNKtduohaHT96bDmxuBKFYDkZ9ARgkanWyt3E3uppfX96R",
  "key24": "2a2LBdZUkUKzsmBGRq8CMAUSrSQH6WU48HpwMSCdvHQ2aER1xoaX4HMJtotAa2zmmZmxRz9uvXiUDvppAiyXFekJ",
  "key25": "5zKTNruCmzSrmi9tEbGEBwGASXWBsh6DeVY6dtjCJfVD3dbnN6eBT24qRpLuzkKVbgmQzQ2Usg2ZBBW5gGosHG9B",
  "key26": "2bvaFKJHqEymC9tPPZsuMTYnyZQzzve3a8Pfo2Ys5pV4kRWEioAr1D1soVNGiCyVr9yn8MyABzLHYyk8gSAPYekH",
  "key27": "SDdT4ddJNkqPnDAWxWNbnbbbb6UCQLdwRvm1AxdcgB1jEApRSdoHt1j2Kwqb11dXi8TN8QhAdk2d9dHACApvySm",
  "key28": "5T1g52WnmJ5h1RjP9H6QqMtJsmxLaGh61CtrnctEXWkpmrbHCcjYt8h8p1rS6TLRkB4u9kkXgQiUKFMAuHTuavHG",
  "key29": "5q4j5sW4J145mZR87vdhh3sHdVkSZqJLiCdgZYcWHbpQa2VLn4NsoRtMJ7peiccyxkjorC37CULFjiUbcLg6EK9o",
  "key30": "4FtKKFURet9Mqh9ajcUb4dmKM4HWKxTWmUVdMzMKW32L1oEcx2jka1QL3sZR9rinA2ohsa9C7KEjCEq1k9webU34",
  "key31": "5gSH74Yn9udsRXPihiYe6R8RyTmr9AAxinogxMNM3ZszSuFfSFaKVCEXyRup8XjBhLAanbvp2vCNNH736kGG4KDV",
  "key32": "2W4Mjfh4ezAVRtzQ4z17KpoGobe4YofTQMSfg3Cv3tKYmYX215QQ9qS2vmRVK435eoepMTeR2o7fyemXL7mPMRR9",
  "key33": "3Q92YRogCfQTk3KS4xTcz7AsCGEtqarGyvN7Wjrzs9cMm3XbLjJTx1tEDgEZpUDkucBia8zdWybUY2iPKgG8SCKg",
  "key34": "4Sm8upGcZDpPZX3wxjTgecuzTonPJ8omHCc6aFCS8ELtrfooDPRRBYxxG8D6nxU1eXxBvqBSG7qQP8rnYbey8vVG"
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
