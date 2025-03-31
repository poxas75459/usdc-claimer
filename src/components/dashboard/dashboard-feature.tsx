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
    "9boefN3ExjAedZhZrfck1Si5jt6oxdqmKVdkPQuvL5Y7MZnG3Jgk8ZKJKm6iP3f8YSHQBeTA2PeBtscqr1wRtH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "589gpmm16EDQo2672kbK6fxK5mPWWSgMdxuhpdbeecRyt59xe8QBLY3ZwRHrQVueh9ehs4LgK3Y8cD5QyhxfGEyZ",
  "key1": "CW68KixBcdmVXifRZAMiboLjrToURQhnakzLB7EoEodS4oHFjjprdUq1jzghkAbvuS55TkncVS7UsGSortRi2Tb",
  "key2": "38TQzUixkBs2KZLpSoLi5Nr38w5YVX7Ee2CFtfNJtMH4Jed3KzonhrJyPg8Dag3iDa8hRhtYk9vjekrjNPDsoVbf",
  "key3": "4xbHXAhoaCuhrMARJt7MKx2A5q4gyrYALjMLQTjdFvTehkqYB4xK4d9pwtbbmdVB5mSHf96WxzzAEiS27XLFuNMn",
  "key4": "5JT5PxyZcccv2qomJweMS6gVCD4PYoQuEZv8zfnyWRxVXWNgjWEk6kMu4qPEJcmPawGwPsDztQwJhZey7VzFCxTo",
  "key5": "26B1nfiMNsH8qu3U6hyrGPSgxU3jPi4rrZrEuj8tfgNCoiV9WQyDNu6ppAnneYowDF3UcW1pFMb1B6WWDBJr4afH",
  "key6": "3QQXi9ZnLhzQgissSBGijnc5GFTGZ5DXVnxbiebkpnXhxWegU5QBdW8P1yubettXADyuFQTYudsvH7Wy78crWkGM",
  "key7": "5pjc72J5xUa54MskPYAAAkFw6vm5a33e8S6CXVp6vcyMo3UVBSpGyCokEAscEg8dKDyj3vpcAsm8cqs96b9kd78H",
  "key8": "2eoQfTFhcMfwybtofVS583Hrn17SfRvEa6VPx8Asw2JhBswkA3bLihhRxL8RTJWCJhDmJB2zhMxs4zbMSXiPYjn5",
  "key9": "42EwwxMQzdwveB28VZPiG1mzAVNVt5fvmxCoyyup8YsdFqBdvVpX3ZKnuVHZZ8LVvVDwd1FBmGPyNvfiJn6e9yCZ",
  "key10": "RouR8Mdrjh7rKNip2VSR23PPzK9CTsrBbgGRXdcWbxK19m8AgTXEwa83EAfSAsKdT5zRW6SyjFRgGohaZdusDZp",
  "key11": "54cW7N8uT5XhnMCGd9jfp8cTuvYgo6miiJpHE6iMhV1DmqchdYPdyP4FBVDqBwwRTBLkQzZfo6T5kE71ApstrFG4",
  "key12": "URUx4nrpjtXEfHsuCWDPuF6ujzwcLkkwHMFSHXRaGsukqrPDzKKY51TdAMig84VcnfVBANQK1UNu72SEo8d1hy2",
  "key13": "3uGigq7KUbepN5UHdnMy3bAcLgkz5eNGhUtandmG2FyyuXPmwrmUwEFsZrnPaErSt6PnNmE2DNEaus9wLhg3dxrN",
  "key14": "2LYUrvYFnGsVTCYCGNbo6EXKELBhCRsyWwxvnrTFxKuFxRngrog8h1ZNXgiGuxRwUZcReWuGddknM1Yvq6nD8A1D",
  "key15": "3CL8eL1eJ1oYo3jnV1M45ihtS96tZ2unjw6TanWVQ9FMpHGMSnaXFdGuB5hWkxJguXqCHRq7n5VPW3G1yiCRL9Qg",
  "key16": "2KyoZpWARt4qmmnZKU3jjZsj6LeANxSi18tJeodeM3e4fi7eGVQNifcVbBn61By2bHACUDKikthGSssJ2AAveYy1",
  "key17": "4PBLrVQkJKwNrCoX6QMboQsq75PJsrXUzc6NWzWAAFXgMYZCinmWEMBk8jBcS7rfyEMMsbUK8PfBnhg4Xe34aXDx",
  "key18": "3fFxpepDU7qcmctBewjftpN4pD7zfPVQ8H2PWGPxEwkbFTMSnzXL3rFmBAP7D4G1NRoMXEF1TQFtv32m5vPx2Xjy",
  "key19": "5aAzziBoDWfXbtdF8ZPR7PzzHqyxrXVEsteCcsH4b5sVrydw2JUKwBUzbK3DUD7gCc7qUvEtGJFqTx7fduaSdRRz",
  "key20": "3C4h2mrgAv6DcGHva9b5Mxxjp5M7mjGBmvUP1GyYhv5HePL33Zwahkz2hBfHi3qD3zQTJerQ5capAtP86AobQmR8",
  "key21": "2BvvERpSVqkC5CyBrQsxN76ZvFnazgjZVnTXRryp3xnDF1WQP2jt8V2LYBTgE2vFnRjZTKofKyXUbSa9TQymiHep",
  "key22": "2qfp7s99xf4x6KeSY94KoC95iyXd28osbbu9eRt41jChb7aewuYPw9w9RQkrUbiw5gAGoiYFLpVEdDi9jHnUbQJj",
  "key23": "3o8VQHMZjxKKnqu4HD8o6xHPTaXPji7MF3t27CYEtboUwtP7MM9eF9mq6vvccTkTm6AYqixEXSBfUYc9D248smDb",
  "key24": "2UgnnFaFQfJ5ewQmpScEXoL3iBzmuVaKS8j5JuVMinSvfGrx4ZnYgVvk1AsSrZpMJ6xtnxH5GHYfq4pvim2p11kA",
  "key25": "4RGgYrF9kuCnkqno6pBUt9oYDsiZRSqvwNvWAUWrjdDnUw8LqrFea7Wm2xVbi8Jq8e7e1HhVxpQNEShmhVqncHHs",
  "key26": "253V3Ffz1XqVa4PjakJJMQgsPcX1Uowgy9EvHYgDcXBhkgvwDcmNcqfFrxk3RhgzrJLQ5vipMQNaQq5siuiGB6WE",
  "key27": "4QEnGq8JztLVSHd5UAkUsjcuGFmr9xpH9u6hjxpwKtebcFkhwoF9ymQSiNdkJY5MxHNMycXck8FaHmx4wq4rc5je",
  "key28": "2TN7YuhzwsrsMPCFSBLWMPJm1NyHSkESeSajfuswbEFXpM5tkysvEP6GcbEQnokSuRHXnqSqyJBF2ERNRTbBWAeM",
  "key29": "3rc8hXbYLL44N4UCYsmcvwjN6dsVEVWCYw2eJk5zMk7Z6UbV8d6gPLHtYPa9DWPjNG5oLGVmYftBX5hmZzHmVjqv",
  "key30": "5HzneihpA2FB1kLAgDE2m9ELnfqB3tmY3kwS3PKqFprsfvQpcebPHjAQtx175vbBeWTeVAbZhjem4AiWdUwJBQjP",
  "key31": "4i8LWJJBpwJ66xj76BdEe8iQaMe5Z9Tiab5eKh8M8jMnjDNUuwnTgkQ7R9NDxw3yfg5xSKmBjRUvuDEK7qNkM54j",
  "key32": "4ubJB6hQuuZiZSgo42p7wDSgtwKzsAtw8JnTU3TDf9WFc85LtWWLJ5sCU9kvbGD7vBWon6LhwddVi7h6FxMaGwU8",
  "key33": "2y9Kv7sHBzBc63zzFzuVeYeDMFa4nph9xUEnSrjY7GNP9XWETExiLchet8totvemd33oakYxr1v6JjLSmDa5MLBN",
  "key34": "J4MRDKKqXKDRNJVhBxzMM29Gwb2nWYfsu1Hv9CARpkyvSE1tF5dzu2DAdS6nsfLsX8HhihPN9cpNppthbp6v9xW",
  "key35": "2G2jPAqC9WZD3AzGGjFTZCMJMDPhwhgHi7XVcK2wwggpUBXGmJ2137wsKAxJbwo75YhWY2kuXgpYk4XaPR8Xd4ot",
  "key36": "5zU4tMK2sjCmMtUJ1H83e7vtYCyEnRk3TXpTQm5ipzTQeqEkHBE9oj8YYc6whjwUo9TxcXHHtnVtJM2HS6uH5kbM",
  "key37": "45uMoLeCJ1KhczmWC1zwSZkL1hBZ38epSwJkKEV57rmM1x9ftBwntuqoCcuwLrRNC7EfSQ7QokrscCS1NxhwMEGj",
  "key38": "47Dt3rUqHqA89gH3iSCAGR2fxDtK6Yn4gWyt23CfaRQrSC5wbvz8VBZZZZtctdiGLGuqnV2Cp6jBkUd4mJdAgoNi",
  "key39": "5ddTJ7QFEGyNWi43tmWMWMRS58qstxMUpBNru6TtYgWa6jzQbfbw1cV5LgZT73XuXAkWVLgBWhfk7PFKCc45UpU7",
  "key40": "66PnMbac4Pg7zBEACgeTCxRaFzowuhE4yjoLXpgLgNq3FFQ8PsBtJQimg3XyCkCzHKxttjLTvR9pYPwDnyT5dNHa",
  "key41": "2MpJ7aoNqsir8zTVpQhWS5BYM2gu123496s95C4aetQBd9d5MFQPNeQjH7chLTpqVTmHSFxoRaeTYbvNycpJgw13",
  "key42": "5Yr8TSV2DSLYZXAzFsVzSvGM9RpLJUrxZv1Tywvh2d4XmXcAGABsapN7fyxdvdzuB2Ds31eSdus9QZEgAjWhoLZv"
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
