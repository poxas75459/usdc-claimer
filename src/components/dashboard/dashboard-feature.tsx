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
    "48bZ1KwhsKdXt5urcCpUkWkjifhfYAdbTnvDWMLrtwh7U5B6g7QSvyV5iLnxUbQGugWCVspBYNmGReFLxKj7fSqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFcCQCe4b2quhKXgka4YWz4mAeDz7kBoLeeNWR9QqcTdvNfPmWnZKBfFdC4i11qJ5T3SH5kTrGpCEpRPYACEzoL",
  "key1": "2BHVnmGrHaPvovSDCzkaBGATq6ftbVCjysZTwkAxwkgqFaaTymU9bDksnLHdXCNjCGRPFZqSkbFoERYq8goBmF8R",
  "key2": "5zdoFeBP3ymAKFpJmyosj3jdNxok6YQGqcrMkRbGM9nAT5NZx3bEbcWMwsBDiGqz8KWoGTJBpHp85QyQfPZtdSk",
  "key3": "2KSRREs1mDiVHPP6DK5zUPjQh13zg4HFVmLUKapcpSXpMJaQmTjgzYDA2rxmhGUsDUNxSetsSZz78gyN8JFK2ajA",
  "key4": "irD4JEzPBpJkden3PBKX6Vfm7FwxoxHn18W2B6CVPDyU6BB34xe2DfbZU4hwKLovmD4r1PR6AYcfqEijRZ3Ma5f",
  "key5": "34oxewF81SikM8gfuP2ZqrndH6oYmKW7YbqzXAdavFpUtcb3XjeF4b9mFoZKGKWNazLB5CAa2XT2iUK1stGL1oVS",
  "key6": "3XGLNKrmV7b76aRyCUngyZ7q6HjdiXnDwa3NShNdbjNrTf1DVSKs7QRNQwPkc9tjFL51Fsvr4wUWNWRKTKirm9Ax",
  "key7": "5gL3CGpaRGPzAX5oCdX8EwSfAoDeAvz8wEnwyFPGEJtb1LXwXN36nuZc2nNtaqcjuW4u8yML2dBNsizauzXeg9rm",
  "key8": "3rXhCZugDZgyCJVEruGYmSBKdiXWm5CovTSq47eS1HqDJPnGesX5YYAbnzfvgUs8PBfyTxhCt55juo4seMohScLs",
  "key9": "28W1U2w9GJGkFvGRG5nwrKdZri8auT2MDe4SCavLH62qKAZeD8BbTWbV8d81zCDG5SooQKngdQ5ut4SAi5bsRheV",
  "key10": "4AHTsUvXAo2BrnSZhZpq3fcFrUnLkmMBdMy8G6nvCzhuhgn3C5bnaiz3GiArdABgboid6ErugfFKjQgFPEdZhZg6",
  "key11": "2TSJJ6cd6cZ4qZ3X9bFchEESkunYhGRpKCoD4MyVBxD2sLQGmmGaJViYJ4FD5gQk1eTvQHFG8ShVJqyTGsB3qyEp",
  "key12": "3ceXnmcza5BTQrRYVYB6nk4WysCbMLyVJdfQWErZtGYHE8GGpimGAkhsLq1WemHj5PZ3bpu1CuBDweBjersD7rRC",
  "key13": "2GQtEVNb5JqDML2wbAZfdDNfkUpZ5U4KHpkEsXHXBvSySreqv4yrwezENRgxVFRGTSg1F1GUPNGYNvpFcfwfEDYf",
  "key14": "3YHaGjxG5MVuRpbvkN1qdtUG6BePioi6MPxh327oLreRcunEjNyzdkMnBgVKHodgRQ7hZZs8eRyTaN1Wr7Esg1sw",
  "key15": "3weBG2tMK6x9TCSVN34YaRhaNLY5bfwJrnhnocYCHYHJFe22oeBjnzwd1ykupuRT6mXFCtdXWPdqZqWY7BkPqaqb",
  "key16": "2hPCc2vyyf18hYAnB8QUn1dsNGAUGKp5oCuEsbu8ihiK8XQ8WhyERxapENiiQamD8nZ3qShiLeifzRzHHEhR4hgT",
  "key17": "2fd1sxKcuMRvgJZwrdLcEMvCucNf2uCZ8WXoevzVUA8W4juh6KNwwJPeWVjaJBMHXJ4FYjqACd4DUf6Bij9qaPKQ",
  "key18": "4cY4tZiohKoqKfbswmMFM1KSN17BioUY4z3mVFj6AJatfTbFvvmmWTAq1TFVsVSpxdFYL9VyGVa46xEZPFS9a4YB",
  "key19": "3AmTXrvZqBAVjVBrYkAjnWhvpRD6L2sXAJJeRLGzQ7XagEsrdBYSDMdjedqgzGCeKAvypEo6JzcARNqnjfd62D8y",
  "key20": "4BBjY4JrAjtnyiZ5XduyqTUNsWG9KrDcijkNGCVWT4b3VZ9ak4V3j5BCyibzFj5JHQjcUxfDkC4bxJ6EEMmpH5H",
  "key21": "5aqJLwDxa6c2n8HYwUuEnuY3CZxzUgMpDn6nzfj1fTW5MC4RsYW814PnuLRCegQWVu1DVaMJ2eRWVB58uxaBgMW6",
  "key22": "24ynAVrKbsk6uGrtQ7k2cfjXf3LmM39q8uqkaZW3Yru3RAztsrWQaPZyfshuQFPVV3i7pu9ksnfbqT56aZBGGxWA",
  "key23": "4k6AJwEqSDqE8r2zCNUPSEuSZzw8EMfJNLhUs7r9LJ1N6dTLEgEzPZGecvsJEto931KjgQSTUwyUGumC9hnwhfT9",
  "key24": "rccsSbES4M4wz3oYQtfxunW6p4MALBcmkYYZbnhQvxWheaotWaE2n42TPoJJHdmYzJ7ER6G77ivjGNnRwNttG3U",
  "key25": "2Jw5zgD7zZVGdsw5AuFWNE1ytDmDaFvC5fJFN6UARih4CzmaX3oK2eDDP1kZvkZggYkjCzSqYGojw5Copsi5zmst",
  "key26": "39EaB8EtWihhyKufUe6RC66BQLCaVCerEpxA9cbCoqazz2aXGxtGpGByfVKFABAHfkaNz9yd28VFR7UeCdv5Tjwu"
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
