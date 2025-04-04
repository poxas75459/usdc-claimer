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
    "V7isFuZYFpTkUPnfScf3wpkfs7Gx39kHyg35mzhPyGUH1UZSY1FLmmuvu2wruTXFgXrch559ZMWYS7jgf98Tm68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJShLqFzNqEvwuvSBwCBttdZXDWFKdWD1fpgVBXHaGBACGFRpMdaPLTf89WJc6k4t2SSH1H986BnJyiAqdwX2TL",
  "key1": "3o2vc6jEYMhyb9grgCUbYzuhtoL7fx87EkNzk6b6QXKP7cXneNcUAB7BHmNyMX7kzuwvLaN72SAXbobEPVh5L5nm",
  "key2": "5FpHHie1poZDzoYNh1LSgNujzVZ3VYrruVXa9gTairczFgGG1tWyW83FMiM54dmBTr7qok2vVzBfbC26iWApygiY",
  "key3": "43ybaL4aQevJ3Z2iNPLDvC5XbKbwDgukgXfG7zMj4bQRogzGp2iCkJtHaaEaeFpLpfRrTVZUUMNAtQ1LVrqZkjF2",
  "key4": "4vHMFQdJQrQNrvTEgFSmTnLpSGqdGuvc6TV9of5X7twhvQNKfB6Ug6qcThSjTjrjrMvRvUHpjF15zjUBWSpM3VbZ",
  "key5": "5xi4FgXzbzXW5drxtZmDnZrNYTeCsXH3cx1aukkEugjTiBkTyMcvEHzYkcPXnuancv1mGrZWKryCQk9unUDdLo9b",
  "key6": "5c98i8UDPXXzKM1J6xAodvCrRpcKJEXaMsqJS6Yhw2J8gwWJaHiKmXJm8R7JjRwxJKdtoM5LGxYLFqE3HJiNM6YG",
  "key7": "436Z5uJ57YdEKmwAYwEGVWfXg6SVBiJD92pjbxWf91RiXk6viYdXVMGcUqwKDGMExDM1fhY67PTsMHsoBBJYT5RC",
  "key8": "4LTDM4S723k7ghChawJANsPk2PDNphBF9XQxEPE1DJZa3kNcF5PZgPpqdEcdK1xALJtLKZcBcavydopya4HBy1Qn",
  "key9": "hGuQ4tX9HZ9DsRZzuhj9PaTrvthtUnCA6r2GztRzGQPLv4FGHUymKxqEDfYxA5Sk7auhk6itT3Uoq7vpXWRVEGY",
  "key10": "4gvxDm9y3ZDJQpEeRmzDtuaCnoBqdU8cBDBzXkfPjsujnzpwPh7v63BmC69aMzsurkzjWfJENS9razhtuPhTUzCD",
  "key11": "4niFTSVnfHEK9LT87kLs56PJ8xNek9MkQihpktxPsyr6BRLKtv6p15J46pePqNJJB3bkk3zZgnrAZ5yMQboLmCNb",
  "key12": "3ovy3y9qQqbT7LmiHWmS3fCReeaZk6pJSLfb8PSHA2UZfUbdYDmMZifmvLT7JjGmGASDRTYxNqVqZ3gB8kjypjp3",
  "key13": "2KH7Ko8onp1c6a348oXmdsy92aYQQ9cRa8NNMvuPKa6LDAPsbnvjisow1hmrpMaAH5SSBgUDvKcfvv4oVnJKKhjD",
  "key14": "3J5fZa6cGj37rkMnoFCWpjj7B699FZjVdfpimezMWvS8JFRpLV3gsw7GQYnDqchkkmXt2h3KKbWxTZZxkEakosff",
  "key15": "66tmnzD7Ru7QxJ3z2K6wSJ7kYXKnjwgmVrdKQ51TpUHZr2S98k1eMHrzHYPSB6b17XaRY8EoggrLcPSZxi9zF6wv",
  "key16": "3zBBhP3JSinFnJ3Js2v2AbaZGNP8nz2HdpJzoNphQrG51rW68dSUVPwxkCW3pNy9cgQzFqiEXkyj9wEZMbWVzBEA",
  "key17": "4ZNB4Fxnjzqr8ZpUqJUednbdvq7cedPt2RtZ2u42vhB7wstFRGVWiv16WHiJDKD741TFB6QDa7e6GYVQqyn4fLFL",
  "key18": "3gZzzQKjf9FXPqDWcGvFKEHj3sNu4amuwn1BSsexgtw2gPA7YtD8QS3tffZr3dtJdju5dEKFmUoizJSseQ6fQF4m",
  "key19": "8UBX13ZEx7r2xDDvyARaQ1PVeMgNQKGDhpqFtTCpF6KF7zVw3koStD251REKUQh1XJWugtm55Y9jhW2Y5rfDdye",
  "key20": "5dJdqiTFd1E5fQdveMwdsUgirRjkF1Pft2NpzmtNMs4W45EykfrqmDKY7QS1GdWxkVfv2VHWsKFCokTVeYTbzxQy",
  "key21": "5sb8iUAGr2MNFem2AJQsRXd5V44BC4zXGBB2Chb6WPwK2MGcp4zHssBcBvkCxCwgEUerAew4JdNfEWP2LGgLFj2X",
  "key22": "3Ypik2JamGjt7zwvhRRhxAWZmLdBYXe58fsjtM4VPGrhRUvccq4LmV9gcWFYd49Yir3GSKERZA4h14W8tMKwjoMW",
  "key23": "3khwhYadWEwv15ixsfucZvXEUzxbcfh2iYRdzsAfDedYXMkpPz3xzxaABVoQfwrACFDtUDCTurFzZH3w7FbNz11k",
  "key24": "hfRYrxyn5RnMMTYFZrNhxUTHgvJ8mhPVry62hvnD6Euw2xvwsipuu4TdotVyGmE7kjUit4TVQr46x4Z5ET2DhEj",
  "key25": "3qEfmXkN2RQ4en3vPFdzYjEBSN8bjbcc2wQuU9ptosHWMPkvSHnn8FBdVMY75Certc7DoRPTGSkmYhU8VYrJVrE6",
  "key26": "4MdAcG5HG3ACmd4z2FtvHhgyw9k7VNnQU1FfzQpCYFYbuUxZM3rVgB13CG59QdAc5buMJ29gCFQY8dWFYhmSNsWx",
  "key27": "2aDJD31dvoFaaVVUqq4khzEKk2y7mAajzpr3G41ur9mtZYZ7csCVrzNLzuWYvmYAgxPhMSAKMz6geVt36SUMabLK",
  "key28": "kUoGU5P9aVYdAEqoxPegipxSNS22noYMzcaGYrEvdk8p8gotSnQcHxzMkhnTG85peoZuWGZRyiv1SZ7RX2CWARt",
  "key29": "4bgL7qZqKkzKy17A4SE5pCRJQ1GJLJ3Yczw194ovE85AqEcC1UWUmdAqsxCkfiPuD9DPeorzZLJ4QSzSGgyrEsYC",
  "key30": "2zDcEW3SZzy6X5GZ1iyQaz7yJvSVLfLowUBFtZNdahwpMnpUBz71hyduhNPkSDtDLCnmSZjbFeNHa7EXVPNNtmMM",
  "key31": "61BuEndzzyocgDSzX5pCYXc5uQuDMW9wFghbmfVwLtRzFhBc698UYZ84cMvkjsDwkHCNza645QNnzuhE69dBJaVE",
  "key32": "5a8zjWGCZNSoTKJKeis1LaqnyMCPRfRDsbNhf9pjgDt6WUY4eXGarfsxLBt7htNm8eaLVq3znxXvkyi7TAnojqot",
  "key33": "4C4HG2JJZAvgFGU9n5Ux5yGCvePqAHUq3yEHXvsdKHV91CKRZJpxNWFZn3rLQnCGtm3qEs6KoVGYYbAuGxNrKCi5",
  "key34": "t77sbdcMdT7Pe4nHEhJYWqCoNrag7ZF8FAq7EJmevY8RoYWNCEEFFxKBcpS35ZLDFotZgM1VzagzzEGaevr8xSm",
  "key35": "4WNJ97fTyPYjZPdTvC3WHyJstmRWydyULJSSP2gBWLgHQbqfp1QdxpHPsZEsj6MtHGMnJrxKQqkv5MovgFPEB3UR",
  "key36": "KN6PZNtirvou2d6cdQEcxzRkXyFQYSZoW9g62WCkQPmMFKVmY41MtUcEFaXRFKC425jDL3DerayB1NyVavAwqQh"
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
