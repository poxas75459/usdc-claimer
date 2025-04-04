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
    "3PREmZfnAnXuuFnGVDCwKVqZnYrbSSztwtqmLpJ98gPJf5WnWHbsUekXnoX8jzoH5Ep3SAD125riAESmBVPwG2hA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCaYpcbFUZhdwaKZxsRpnqU4aM1yYREgT5rk6eYWMc5LjWSF8FE3AGuMCWWsMdKZYnZj3PC2d78pSeoSXjdFoEm",
  "key1": "5obPDaUV7uwyX8NRAGnkDgwyHRJ9uSCFAmAGUUau9NzWQzgUZd2JJNYG7qJNJdQEVa3TauWzuWqkmF8UdUdwTb4V",
  "key2": "5DSpC34aYWp3YaU4bAdV6dwFVVAFcP1rPYb4n46AtYjjAR8FcKMhEAun4GhjN9ndhKuajZ8F9QufiKyXYtsTrKyM",
  "key3": "5XvFJZMsoMwLWzGWoiPEfZ3XtqyrV7qKwNqr1d3w3pqmUKiw1RfXC1GmEVcWmuBi3pf6vvDLwowNyvt16LC2thS1",
  "key4": "43iy2AFbcugG4JbqaUBSTeTADp6EwAMyo6xpp2UoRWj3nF4LYHygC7CEXDLCh333FW7EcvP579q38yVh7nxG99hT",
  "key5": "55FhRPxUR2neEwQGw3ryQX6VdtBjTvCVU6Wg3bBrtuEqf6zqsUDQZ89tKGsFuUzs7owFavMEGsWcS1zpQw7yijpi",
  "key6": "5W8kQ2WnQQ8swBacARyCT2gNVgTYJbi9GcsMUFAeuxxDXD92wCxkyzYMqZTWVGkm9PAVsRUf8xwaP2xPGsXVUi7Q",
  "key7": "W6TPfjapANeJZpezASpSwZTmqwnqwxjbrgeoL6MRQM9ocBNPdnoQUa7xd5wmogYh7hWLRNgPJ9FjCTcESqWSkAr",
  "key8": "2KkhoxvZW3UFqRgdhHVtQvBnKLbUUvR6ydo5QAkXGNPnVcJXUqPNikvpmK4kREy1hTXgwuccqxoD5SrMc1uBL79L",
  "key9": "3szCegAr7j91wraNXFy8Z2QJx3RSwT1Q215LFAbumTyRPNBCypaHR6DuYCqw9fXv8TP7jX3Mk14puxW8Vti4PJcw",
  "key10": "3z1AjDE1kmD5nMa6NGDV4DKbDkqYeLK9vfFR3bpUkUqjX7G272QnoggAE2s6CePdnq2YETpfs9aAnqVrKx3MZP5Z",
  "key11": "2ynBEJbyK9XsTvYvBFrUBaE2r4qsaaDdfg5LxXiaXfybejZVEHap7pDfWT8J6TrTb5VUiiTcmL9KtyBa5dEbKQZW",
  "key12": "4mfHbPMV9ttpLTdD6HWvFwoawrfaNGqXsbwy3LFdn9krPvWp8jJ9EhK2Xf73HnkBN48gQdJv4wbNFwRp9HwfJhET",
  "key13": "5kpWoQox1WqY6utEw6SUSKcY9ttfM213AyD1fNRVGecv19ChGzY3MardRTPbsE69BPJWYBDGex3HZvRCTjwUivYp",
  "key14": "56Er4MbMb2h2nCxegikkBsQtFbqZCq1teh5BQgJergjFowfScgPdkVoYhSr8AQqqzreW5CHhGn2e4KPEhK3S7GXX",
  "key15": "5BaywXT4MDrznzxBnmK27hHpbAaScZoMdFMXJiwk4CXYp72RgBJshNbH1pMW3jnSkU7bC6KbntseA1e2HdYAePuN",
  "key16": "2ohvKxo5BoEcz2ARrrhxme5aQuqxyESjepgnLqnpV8tV4dCE31CCzD1QhqYqeEybSPFL1Jt2NRhVFQuBqnf83yU9",
  "key17": "3URYH8Tdpcg8bdfrSN4gigicUEyiHwa9DbJRr82FLCdquwABustD7rjKAzchDpxxJvxf2qBWPo2cm4KRNMxGL7i7",
  "key18": "5wVvQTHXsYHXLbTC2NY4mTCkniKik2bLq9ypoeEx8hWpA4f4t8iALiQ7bDxhYF5WE6mSStx8EsvgaHUUGbMbu4uR",
  "key19": "4wkhDE9VmqtwpsSThSX8Z2ZXZ4EjiqcBE8YVx5eZLb3hHYA6zU2Fjc4L3U5j6osx2MP77HGcqarbE4BnU3Bh39Bo",
  "key20": "2Vc2L7Hb6vg1KV74UcVC4kG5Mi6ZpFZkfX4GBE4QtYpT9J3F9CZ16hqy4x8PETsJT3FUmtNeLk9g72dHrrVXeXPi",
  "key21": "3kGVE9LW8hvze7aUZStkUevmV2wYBF4Z59dJPAUqkp3Ga5u3MTczPoGYe4NWoxC5tGXUtUa9rZmh14gWwuu1rdq4",
  "key22": "vZQUbtoKtKcDBGQMgjhdZfG1EzbPfkLwMx2TXUuNuPC6voUZbrhXLbb19KMs19Qs1QF6buAYBDxW47EUB56QE4D",
  "key23": "2WCMqfeBd4FwH7mMsVtumBbUhgwY9W5L5REr7uRxg1RrniwXdrZfuL1XMatLUNyWwNcQNyZDCkWdBpckhe5mFqgY",
  "key24": "3ZJdEs7NucNztPKWpG96Ji7Dyy8fkxiSTszY821j23WsLn75RXzC5nWrphb7uUzK16L7FdppzFmDJZjc2utartuv",
  "key25": "5UYThX1fif3ymYH7JKYgFoJWMQNVRftqamTEurUAodwvikBGNUAe7HXrLhqB7rRRo85Yf6YZ7YbtV18BjJd7opNG",
  "key26": "4ucT5iZRLmvDMZ6QACER5AEybDHvpZNbp2YQqFBdBaXrtpNCcRBEgB8sKKxUvqWEveSjExxbbkFtofAeMhH3n2cU",
  "key27": "ACNRETcVgdZnxHaNSFXkCfHb5heMAtRaPzhJYGDu1GrdDGv2F44efocdqdKuQKvfqq94sC1PM7fR3mzu3X1bE57",
  "key28": "zVoYkCjigKNmPUJvmyKuheMtrvkLhE4oV1JwAbRfFnokFW6fnpN7n6e3cPv65dwBhJtXh23Y1MX2muSXoBfh1m4",
  "key29": "29eQpRzkWpQpUL44BGvL3ZuNSHBSVq9DvUFqtNY3bV1i8b8SvUgQhNbFTZTCMRw2AKDFzy8jdWrHFLwN6M7QoXwx",
  "key30": "5L84h5MXs9ubzubRjJFYdaBeHn3jEf76zHkFfLk2Yg3PsUxA4pgXieNRZsjBHer6QmEaEf9kMVKDf4b4qz5YoJCq",
  "key31": "4yEEge398KaQLke31pNsMdp9kFkMfQGiZ6P7gr4DmebNtSp1C1ZLrjNKho2gpgvznn8XQYNtNu7R9YZpeMzoTjFn",
  "key32": "2Prcnw4UJnTY5SVVqCjqHb5RFJhtQgfSHuWnhfZgQg8GtSnRq8ockBwm1AwfyAzCFa3oKdAa4uDMFZJBS3AvyKAt",
  "key33": "3EVNv8BmaeksXLUVXc7U83m73Qp9gecuLU34754xzKVGAjnVtSwNyX6V3KPyLYZzZ5u65Mu4dXgb71ohQwQZHVJ4",
  "key34": "5iLJafUwQDGep1XL9VkWWHDCsXd6HBBd7GAJ3Jp3mYa4jmo1fdngfsfRnkgrp8J4tcVykTQNq63fMHrDCt7kMLpY",
  "key35": "2meUU9gTJb3mxaghPEcKCZERXQxxd3SQyhKjrEVsN9W22J5Yvwut9f6TfDoGWkL53cXxCQ9ksQJ915qw2m8LQW6c",
  "key36": "5vk2fCHXhTsfyhzXdt96HgCJqR1S7AwzMhA2KWDvmNRJdXBd4vSu2K6zRPzhVPBufpqDcJqpjqmdiPSt8V1pUuSE",
  "key37": "3T2avkurHrspho7ChQxUGuVkMYWSojuJUTXNGiARCe6zBpBU6hjr37oXRAbfkopwTo2DuCjeYopUMJBh1sFtpnAW",
  "key38": "5eSA45CLaYfHZMiG1iTwXRPM41D1YFmvmppnUXxCbmY8FWVfrGWX2G9nWxuix1dMBh5z4yytwC7n3GFpat1Fcx9s"
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
