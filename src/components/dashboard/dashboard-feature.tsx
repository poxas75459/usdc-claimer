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
    "5fgJ9nBpMcn7svmsDMXwyqzkQAdS8jhdaCYW5Qxqrn2UUpQss2XpzLfHqWWvo5EihFH31F49xKdw9Vc4ech5drZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A22mWMXutGiqxcwMGXL6EwjGSSfAZtP32nnypJRnNnnKv98WyDc6JfsWLnv94aHaMiwzpjqxkuchVoN4fp5dVid",
  "key1": "37VH1j5aVAAYP4yUG2MXadmCSxSQgu5xUUQJBCkjB8X3HnXxkBPTpmCriRjDbZNNcLjaKmVnCU76DypWdHFLN4k8",
  "key2": "2Mw5K2N3R1Tqv4cUEaYdnCBKNRZ56QZZDFiMiVt1spNtjZKMRggDyBvWfzMDW2Evr7zaCPJ4SupzopQh5maXRgMD",
  "key3": "64bq7WSqwQ1ftmDN3sccgFxsz4i326eQmeqgPZPjurtiMcMhXemPqZ7Dg8n5jdtaV5oWb6vxSp5mJXzDXJq59CHC",
  "key4": "4U5AAMWbzkbWrJ8SAGGnmZCP9kQ9MagBWvPDZuRjA28XqG5dk1KQJGnoh7CoZfYt41EeU51QprqXNtXKYG9vjAqC",
  "key5": "4FMLBcesnxbpM5DMSAxwH94zPTdSGZfphJ747na8MvaYZ4tuRReEVQxPd9vYcvoz46Kuo7DbAa4mudo7fGReG4ZA",
  "key6": "5PQBes9hXT6VGRAmkJkBEkZn6nrQaujtSbXRv9dPSuDfRcKApi4P5uAhfhos3UUQBNdXR3MBVDGBMjyvYuLfTcjT",
  "key7": "56aocoxpv29pTHh7Ctn37Fjv6sp5yK1LcZq4Bewon4o73q7GoExFuKHzs9RRWbBtXQRQpzSjY3J3YvLKyYkjtMAu",
  "key8": "4J3sMP8WhkrYRDAdjyXSk3MwvmNW6rUSuT98nPxYoJY6x1U2U6vuoWAvfcuiNemHxMEWZTy5QdKVSgTHysGNkQQk",
  "key9": "5mvjBUEGLu4WMc6ZZTdDsDPiVCSdVcBe7QjZ7hkm6bnbCYWg2aKqNegY2bCqzJwTgZPXcAbPfJPV9yFN8Ez2QUx4",
  "key10": "6MVTW54TZsoWCzqr2MZMcefTGd56irLNHj6tihH2BbJpyfzA99ehA9S9QutojLzM7PLTNPUmjPfRHRm5hRjP7dz",
  "key11": "2UKVTbvX6WZxvTNfeBvVrYeCuuD1Rv2tZaMjYSveZHd3N1qpeqy7b5VEwWdLD7FuLGDDHLTVTgHxVP1xVMkjaNnX",
  "key12": "67SCJepe3rb6UPYvQDGeppuF61jQHdRyocHw7oWQ6zSswt1AQhSLzFXMPpB4bjkd1qUTesCDWYv14AL4GS95PhgV",
  "key13": "5NuNuWfUHbGNEuPyatwV2fpdfTWQ1gG9bjBZm1WqmP5zMQ1L8MDZkooyj8auaZc2Z5mrcZzVzXyEqMciFaXwu8SH",
  "key14": "MHuqvbTJf1BYEpcnQSjN75SzKW3k8c36wNwtvadAhe5YFx8Gon8dQjA8CGfAJepNFdb3YTkdy2B6Ysm9SiC3Nun",
  "key15": "4QDTnXRJkaLK1LWfLtg6zRy7GMQBnqaABSN41ymNkWrecKMpkM1TmTEc3meSfgB7y7z2zXDHAmxtRGJYUpFQQUmQ",
  "key16": "59MXPLggYgy9WWQksYVpXYg7uJscqcgbp33YhwUDMx23uHKu12GdhGZrzuZYzEawGsieNZJ2Vp9XbqcdMPfoHup6",
  "key17": "i7Kw9nf6ddFf4V7HWxttHnaaMUZfs1LhkwDMFGnav5xu5Vuqjs9saWHHnoZDKdRjTLz3XnGhyxdxpUGM2svw6NS",
  "key18": "4CnabJrBd5jCj4Luvq5nVsAYNzmajNPpoUa23gpMGLdt9AxmYgh6PMb7sKso2BuuQBKbCUhvH6qoJf5LwDRC7u4K",
  "key19": "2wAErDk3JdYqmNTQh51NcfZFrTCUxNdxFZEn1sKw6uhpkHAFNgQ3CEjzpH9qiCSVvjKUKKuBc6geVhsqLt8MFkHb",
  "key20": "3zBdD1zjHaWAzo2FFDavWMaZ1JE9rZQT3XBRX6NykLyeN4QTCR6zSyPNh1dFwySLZ6udW4sN2jvo6qP77w2xpweu",
  "key21": "2cF6TXpiLmayPg1v9enHuNZYer1Ay6Hqnn9ecD5YQ3kx8ms9bWGYPDQd2NUpBgUxePAJkwP9tX1kiKQE8FPEkCVc",
  "key22": "4BbTU7umWD9bb5H8gAgBry7Q3H4P4iCagkur4F3hKCHsZz7jUFChF1xVuwMjmWi87sYEPf69zcmoaCrgvvGFCk2D",
  "key23": "4dUbciTkLVAAdinzXQ14Wm9mxbuAz8wUvCMQmLfgy8ZQG7Fgf2vnh34Ei2ZjTZ3DvubkVtf2Zyx4BvgcFYrBSLCE",
  "key24": "5XHp5PfrhsErafQXNKsvyRhthmre3nuwVerZmg76z9UdhD7fsPGqHDjxxUrj1ZLgtSL5QW2AczJRXMUW5r5qgocX",
  "key25": "2NxXTHB57EELXaMzq2hJxLssdRZ77GnRa6DjZiM9h89B262GKvUntbXYDHr4Fxs6hLBz1NAPy4AKqredxh9fmowu",
  "key26": "nStgdTYQtRvfcs6Lniwx8ABBTCNfMEdnW9cWLD5NAJhDFQR2BdrpG7vWyMiiuYr2Jep59CYMK9Khj7rGpm2MyGm",
  "key27": "5FdQuBjE7kt1DTzMYsJz1XvTCpxefaduchvNARv8mWrYuXJxzNDMnFkAyWYHj96cVki6XN7HGWDN3dpttBFrsUxL",
  "key28": "N94AaWxu4wdfGBkUGAp6HHqQQA2oSUXNCZbz2cvmaCJrtbtNKyhTEdzWejTpfHZgqt2BuKrsLXLXcUGJzUEeBst",
  "key29": "31cVNRunzYrFESX63L8mAsL2dojMM9v9ynMXJynTU1qsV3QPZAzMLaM4rNRwenDo5WovCZrD7dACGS5L2GeuQQjJ",
  "key30": "2QfMHBXJn2QS5rhrXdHo2Jd6fwbKxwP5eXcRrC7XXvbsuvErNiHYMrpPRYDAZNjepHZYDVfcNw7S9JpyTEXKPGdN",
  "key31": "5hkYQtLN7fzbSz7hudDyMtrnamSJPrkcY1pKKYSL7MnKJWZSPqPpEsjQDhCBoGeXR5SQa5tL5sT9A8BEFjaTfkaZ"
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
