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
    "5Cg81oqN8Vv7DS9EZrrEzNy6KZ7y4rCHNFmbKPD4byppTcTuaQoVXbKuM9XynqZJkrisFGMNo93bJcNXkpPpGJLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jp1aKS24zXTvYPVmW3HukXTRrPm1FKBej7t8Wbrj7wtJZfN9MvTS2esovxProwe29w24daZQapA6NjHm4FnnVxH",
  "key1": "45QkoHK3JjYyznJYE9DCeNGNSz4aDXfj82hWcAKC9D1fPfbaub7k1VVTCJtBhhB9z8u6S5iFcjYWWgrrUjAYSFff",
  "key2": "5nPgEVPi5KtiYVaUJkRtNWmMny1RZrT1UNRRym7PVqdUPsgVpZsTDYvrjuJMzKfrG19Zn2mQcyEPQGATzadQPCMV",
  "key3": "2xM5kuczKLs3CCUxBo4L1mPiwbYBW6Qa8Ymwxiz4xfYhuqSaFDs4Ui7qwr5DEFC65DNd7yZDjAUQi16B56Xz8soU",
  "key4": "vTKoNJumL87fSeXN1BmWHb2eH8VrYn3uBHTc9rASQBJnpevoXtyn5Jxk7ZCVz7htcMEeUihgvMShkuBvkYffEqW",
  "key5": "5m2MafmVuUynz1bkCkb5ZytMMKXjmVGU8XtfpmqZB4eu15XtzfbCmWMJ4zTh9SNWjqKb3FDo5fQ5Bj4JLyYzxj1T",
  "key6": "53ayHad5pxkknEuujyw9yZMYsqXFPRR5MYCmZez6sFnK6M69X421AtkbSSm6mbA7MWazib3dcBAZ6rCMuPCydxzD",
  "key7": "2kktd8YmsSa7W6ntvnG2Vy84s2EkG2kGRL6pvcwZSybx5RxfbaekKcMKPTXJ115ze6QeBXvvhUxUUmyCX6wMpUbF",
  "key8": "29YJxd4hPqeARZaSd6prwx167JrzxtFGXL1ffELRQzXYtCUSJkR9rYxK4PXhMuDEQWYcMt9bTtTdJb8H9m7F3caQ",
  "key9": "4f7z9icKijyiTp57N278SyRGmR2punJChS2E8p1KuhABQB3jyupwTKJCeERHMLaG3S795DHNW53dK3TbuAXKrtER",
  "key10": "AyaKzyQkFk6dBn3643YjHPwNg3YVRAivcj9FHNZnkGZiTTiGgXeShubGNkmAcmDhyEZct1sbGnrxFkDA3mFpvjX",
  "key11": "2XhhinFCGqcojT5iM1BEsYEp47E1826RcaNxGsJ2BcczEgCgZTBMSQgGWYEwET9t1wBqrg6ws91d4AYnsgbamnST",
  "key12": "5Zq4AWr4a2w9H4SxKK4KYBWcHCezKmKFoVoposhYmn7TURjtQURJc1UAGPooHrKNAJdQNCKLDE7o6eBvbh8cnGVi",
  "key13": "2wdxCRqPziCktUNgsvebsPNwWEPyHwekra3uu3X2ZDDucNJqaNHFqrRQ2z6dJeP6ycSd9tQgV9qUcPXRUoevirYs",
  "key14": "4QypRNXbGUv6x7x3p7o81EbVbZkdRK1FYpKys9MK5xh2BEJ3kmTcgLs8ane4fv3Hhqc63Qq8RLdKvKApWWyvVwHa",
  "key15": "idfAftQmJ8t7vT8RFGT9YnzXzbcRccZ6xgJ11f9YeJe265qBkXzVb6xtTzJsSckYgoYB8ekxWdByRVeTNADiXdj",
  "key16": "4V7PZCYPRjGgv2HpNcjAWJVCYdHgXp1iFHn7PAWGpV15RzsLak9hjNPxLpXjeG9SzNHZv8XjQKnMiER3P4dPbX6Z",
  "key17": "234TQnfjsjbSfdLX3b3bym4iM3kQmA6ahQARYtc6bKbanPuvnkwxVj8n33qfgm9HWbhGmZjvV9AdE6y9iBBwhCuQ",
  "key18": "5MhJrFSfFKh4AiDN7NMiVA3hhcknztgtrW9TzXEZJ8U95ni2zzgMdkAygYr8weW182Xm8JCvzxQ644YF2Fc4yW66",
  "key19": "4XmzxYPCH5y5jcBkgZJ3x4PRvuTvS619UUYx91QZBABxWdU85AZqSNjmXgZwoKjjFcmJBUmzD6H8WPhSuEZ9dmUq",
  "key20": "65KucVouRfSzepgxBJv5Dqzyh2noizAEbcbj3hyF3xiHQV4F11wwg3NxopMfZug454GF8XLfwqqxwW4RoBEGNTYx",
  "key21": "2sgCWoTqWyrwuKPnGAWBCmAG2nLEesFvgERnN2bQYDeuwBNfupTL5mHQVymhzJH2boCfK7PU9Vn83U2WiFCXQNBi",
  "key22": "2ryJfvpoZ5BjwuyzDEg1mEJNJjd4CxgE8CHpFTeW37e4CUFDFeSv8LjHv9B8sDfNvGqUmPhVqDUPbMvH4fqssx4x",
  "key23": "5VLxaEMUhNAQR4av88k3Ax3RzanP5HWvkeBy6uBUWFXbrVKjDiz4FMMWeW8TMT5MTTPDZTuSzgZVBwsXpD9RRZDf",
  "key24": "PHnCtqLVtMPCxNiW1SfgsYZ32aCURNteWjfy6acH4rUcfpZECAbHxzgEfrSqKoafgX7mwnxgMQ6vQCV4y3oyJbh",
  "key25": "34h8MgV6n1NR4s8wvJKgS3gMvWbpEzjAAemmhyT6Dx6z5kpC27zteLP9nAy2FAmcCAXVLMqgkoNqXgafVoGrTN5D",
  "key26": "vLLqhJv1h6tHSCZv8wbs6cTQU2b3KmLF68a1TDHm85hJfXmx4xdSNtpJm8Nf2U7Aa3skqVs316k87c6mGGieZ5A",
  "key27": "EJfxbvF3jpdjC9wHaA915F6qhxDQ9TPwNE1aNfYtLey17NHeFis52m3WtoBrYZzbRnaR3EZQH5Q9nt6Uk8Z41kQ",
  "key28": "ZpA1vyN1Q2SWfCV3aoioXc5xV3nDBsjwTMo9D6X2PWsV7JUxdpDuKqq3kfs8N1E6jWk664hDLZZiDnE53qBzcvV",
  "key29": "4RpDNAsJmc9WtibSVTGrJ9kKRyCSzpprV1QTR87zJ35aZBLXffRxEJi6YMiaypELji5F6jk4CExNd3KZhgAxz85k",
  "key30": "4KeZLQ6A4nJ5huzLN1H8kTqeE8w2Dgngdg3vw5GawoeAQq8nzoYHP9oFLxHQmA1Rby71sGjv77n8pSwf6VRmo5nY",
  "key31": "5wPxdrZaw7DaH1ZasRTeFmrN81R16kF7YXPwTr1dyc8bbnj2TD1Szs6upyWnaKTSWJyc9ResVmHbmx445zfkzPBH"
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
