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
    "4uUbTaJBY69mMwwMTqCa1aD2X8a8DxDCL4fB9UHw1krrq9RpHKApjBN6HWtaKRvKT8dMEKYzWvEdMTQSvEbgzsVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxMhnX9fxCC9Lh1TE6V2zR787DCJc5mN1UoKQxQBP8QXGpu6PBZGgtM8fq7EeRWqfgU77L3ZSv7TgFt2PYMevny",
  "key1": "5zeyzrTU4fMEEvHt8nYf1UXjGy6XHFDUbhqfdX9Wg9pQGH6kdLhEzetWiDzdQVC92BHNHsvXqebyeGFSD3A1uGHx",
  "key2": "cCU3bNmwgw8wUzGmngukBS12jJ3zUenFyoxAeHK7KFDZ6tovWHFnJcyTHLLrw7kEjb95nUJYvLg8H69FAKsCetX",
  "key3": "29rM8BkTwYsX2pMfSpUrEdCmkRj3CgXhngAhGU6bqKikhqBNUj5Fe4gLG8vvQgHGqUuAokh4YqrBqHcQwP9ETw1e",
  "key4": "4xoHio8bRhbPREeLdHfnTFoSjiWZEogYHS9xiBc3dYdJz78PEJzou1LNBMHBs8wdDSa8iEah8GQx9x95L4iyU2as",
  "key5": "4LBh14yJfKn63i8x2cuURGn2Ee2Lzm1A7oSLDy6WP2cQryZZJsYKph5vjY34MzqmXoMexF7UYMvwsjhJnLRJAKCR",
  "key6": "GzJVZ6oyochgkpLqmm63CRWLCtu5iB51RzJNcoV2CkqShN7RjZ6UtyRs1f4Z5F2KT8p3LhPVEwCLDrF9mcuvSvM",
  "key7": "31fk8A6K1r5x9pkgQz3jWotGhWB1BFp7EZws9PacsFbGEN9g7xYQkM9vjVBxU8XADZQMtBiDDatEix4xCHHonZRv",
  "key8": "3qSM4y62b32ZbwbKUtgZfu5rF7gdwvWw9qrtM4oPvT21sbD55tBdEuATfS6BoWCQFLPF4nWu32WS2vtSutm5TriJ",
  "key9": "pSVSnrSqTCJRNKpTZuNEjjSfyEaHt5hAom4aKVshTA9wWt8Qdet6xJyddYFEikkBQkjDiKa3xmKmBFB2za7Y1tn",
  "key10": "5s938fSLqoMZWL4ryPVR3mMLne9wBBXzi7CpEkqeWqppFMhrSjGB23vATxLV7TnB8xph76bKLXtpBsjyFNvfTJYN",
  "key11": "4kc8gEa7rH3NDhaoGbuBjAwmxsjWhjFvLsHnETyMTSLdZZP93rCr2SURXuex7mRTMQUaYyNmah7XPxoRdnMyU7hq",
  "key12": "5W75Q6FrxyYjKTMrMUxXwe7SZgZHenqQ8RQA4WvvqJL1XcbAxQLcpMuJgfWLkF6TqCMC5Thkbhodc5kQvVm7s6LJ",
  "key13": "2QuNxTtBwQF4atEa6jFw42nieA3Xs4fkeK3MDnfhhA42oZMQvkiwgyyq1nWVd6RA1qctcXW7Dq1beECnHkQ5i5uK",
  "key14": "4cXCeEvV2CmTiA68rHeHh7MBf9kUD6dWTS22ZHXsg4bgyFQ77baSwg7ErVpS6qN65EPk7HTGu6UHKddRU1do4ERF",
  "key15": "5bTe8RF7xoUiwiHNu3iicUPLNUocL9McnYcwvo3iSyrk3KZnWoNL79JYUFxDQo2TVdkXxHucurvqkGgxETvBzPi",
  "key16": "2S3dVJCbzw1nd6ZWd4TbUoUhzn4kXMVaAJo5xGF5q6QxaRGmVSqGfBvYNv8axz59urMK9JVyAmA8CUimCa5DMBAK",
  "key17": "33VZdQhqRMCWieEdLYEUZnsLBkq5zm6DdrQBMTs2Uag8WAp2mU1gy5JHxMwvgTmAcwbsM16opGbr5zSEM1p8vAk4",
  "key18": "4Zc79axhFcJrqqq7kCWLvhUGxpQVRE9L3dYJdGATn6rgAEy71Rr67UUnxNMbFvv6EfEEd6iJurJaVPD2yNcVhwbF",
  "key19": "3QacVgNz8EzLhccZ5DK3WVz8mQoXLYp5xUAgkukcGYjqcZFrYPjxUDqMquyhGAfKm22UoELqJSE19Yvs5yrpFCqE",
  "key20": "SrskfA3SurDi2jGDV21tuatTJMMJsZA4VEfwY6r4AwDCBX83c6yu6iyQQSUgCCStWjfgeVzXNePK72TTYks3UD6",
  "key21": "3xAxbYsPK5mCXZHMtY4ko5eqiEizrpfvkF4fnCpFkUjB9x2BHE5qtfebrPLTnHD9fQViNkrSeGBvFVGVXaFSMVLN",
  "key22": "4CooN3L6jNkeQcdEF8yZ8oqMFFMEFRJkbEatVger7qJGrQYZQFGzjyqse7xPtmGeQn3icrm4BmAyWaJ8WRuCi936",
  "key23": "4eD2ohK24ienR2AcPCsbGmDv1BfuNfqzTjdXUqdiCrvEtgFhvcoPZzECahNjEZX5HjU6XidV2Xejm7q28iCna9Rq",
  "key24": "3h98zzWYEHr3mS6cTJRTqR6KvFSNCumDaaUVx8hP6P5PS1ukZ8jW8ofowC99CsxVLyuovJKm9q8x5KYWbWNj4PN",
  "key25": "48FNiaFD3tV1BQbyAerTZTZLpo8fpEAmugKTtbpVee1SCK75CMntkha9F2zyDc3XQZMXDVaJrVsQXQgAC4W5nCPh",
  "key26": "5hYiu8EBoMV6FoFKmADeRzvX4F28Q2QJC3ge1jbAKLp6oKxF6i6AstwR6DoE7q6Fz1jHTAZEbp27LmH5eavxrmnq",
  "key27": "4bF36qH1ovyzSQL6SQNynFFgZint63tkcBQ36wrWnWsM6KJyrhLNFgTkbCgBpvX6RoAZ7L4kAStQUAqrP9jab3bF",
  "key28": "Jw5czWTh7bYJzXBPKJFP1ByaxGMzipRTzyw2nFLgNUKv6v1GSNFBMtpadenwU9BLUWrHzZXHuwJyMtNT7brPHVM",
  "key29": "3o6zoVPHRHXKNCPwZGXsgh6LvPLQsjqDFPjriP9AVZ6KFJcihzt88bmDGQw61C99CCEKrwScLbYaKReMZK8x6BgG"
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
