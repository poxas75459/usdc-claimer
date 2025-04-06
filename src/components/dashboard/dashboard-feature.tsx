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
    "48YPCGrM9aeEBxFH4DKrWKK5BopNb1NvDH75XvsNKUihqw6DKgZkGiKgY9uD2r9vCx2mgfULRoQQQCgDLowL9M9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jYZFXLQFffxQ1iuDpjV59s7FNeuA2PE647JyKeqbY2rmiMGz84GtQtwtfZf1JGcH5YaM7C5bizgtNaFk468cBw2",
  "key1": "4HfujVWFz3r5KNmRerBZwfh5eZCJh2Duq5oCyxRb1uKyfYpbuA3qNYYFk6JpkWGLUsH4ToC18vVWKoWpxLuqzyYQ",
  "key2": "2a596ubmKtoCiRo7uMQDKdx8h8XP97RycHU3Faf65v7uaVzANoUYoJiv37QNpRZjbPK6kdidfjqDeTBvEpqRazPT",
  "key3": "5PQWBBYyYRY6dUMwmDAP94PucWjTxf724jhfzj7E8Xg7YhqANwUJXT1Vko4mb25FJmBY7NR35L5p665yM2NYHp66",
  "key4": "5aa9aCzkGGEPwHHT9u8E5jcEX95cjGc3jgR4xTG3G3uvp8vmFD9B8HoGj4ET1iDxm3TS43H2jGWdxnUHVpiJ9biQ",
  "key5": "LfmTYjsfCygdyqn7zaYVsm72fv4eZPKXJ2m21GmPHQNHG5gb4uFHxc9roZ75Xky46zFfDfoPShSRNSpmrocPfSs",
  "key6": "4bL1KQSn7XY8Rh6djxfi7H93puP1P7Tee54ajD9cXvSZFWsJ3YHqjqFWKjuLERzaZx7ovegxKsD8zyVoZx1u5md6",
  "key7": "4hiAHtjLd4HWgRceEriSchjzXsLcttb3HtG4hVopukmewt6oYrSUyB17Q91oAUJuAG498h8ReEKmArHP3j5KX9vk",
  "key8": "mgQ6opwADrfHGR1RqnGok9JnjN7FdYUjV1h85NCMeC25wKZcHZ9gXwfU8SCtEFq3K1mkYx46bhjdSZew3YTjnQ4",
  "key9": "3ask5NZcJ99Fm1awbgvdUDT3eehi8AtUBXxDg3HxxRrntSzNTvgV1Zgngh9NYr5L6XQF16yrZmXBqT8SUNNvshrx",
  "key10": "gby3D7GtGMWaRRjfFshJqkKYovh38A3CoHcMD93tyJjoP52f3TBkuT8GTbCd7auiA8DwaavouzRrTrZrShUqUmQ",
  "key11": "7ZJ7BVhga3PzNNzhH8tBbg2xhjL2mNWwiyRFp8Cj7Q6gC9U81TUiXmwuo8rUSdWEynqs8o6iFURg6t6MV1PEfcf",
  "key12": "5mFKsaB2hUC3eeALuhftJoz5qXrPYTEqSZcZwhq5iE3e1bDiZEKFMVFCKq3kN5vi1jWpJexbNnER4ac1Hy4zGW3L",
  "key13": "59tz1L4NCdZMsqRTDGYTJuhVBbJ2HS7VD3v8SrcpmfV4KsnxHE5DEqcYEPjV8NKabh1PJLyZRpoCtPMZAiQyEHcU",
  "key14": "3JKna6Q9jaMTQRcjCohyxiQRUzWiCQDaAW6bXWt5LBd8F1hA9B8KwRqmWzdqVHvRFNXfj2mnokBvRTug6ALGWFe2",
  "key15": "4JeM8bFZdxaoi5eAdb5cf1TAEkiAv3CL43t9nKMkvemvoM1eJDKvgDo8mx8PZ1aFd2ESj7N2HJo7rTfPJtBRNajf",
  "key16": "2aU7yj8QiQVb5bv8mVQm4xryCE62SLknLc6deMHPPTMnaSB5FSok24KqqoDn1kmh8RSb1jJNuRmFP1WG7pYFMvt9",
  "key17": "3ybuzdWc6X2DUSTjEXHpPHkFbamginnyz4rfQ3VtASy1Qaz3XWpGbYuUKDxtFkhzpnozmiTd9LQ8iPRN7nrPCmMD",
  "key18": "4mkhxdafg6dZ51TGEoeDCi17CBhiLoctS5QB7voPJ5zm8E8EJ9gAo2pTef9ANcff7oavD9Gytobe3UdCWA5UdCks",
  "key19": "aeErhcgxwX9qE37ezbrFMCtEFsrwjJeZXoGA1idJYMpxcG75rvGKz34qUGU7j6nKWwd8HRLDGHMoMg18aHbonad",
  "key20": "36beEfai6Ft1wZgwv5Q9CN91YNk6PtmfMyraxABpB2htjmdvSE1sxHpjxvRZhKScLSWHpNFF1cRmEtxjEGW7ed2H",
  "key21": "2B2AEYgULuos9Du1LU6ezkM3VRqmHEZW2ZM1Es4Bj3Wx1rqgXwy3qfsdhpR32gGiYdnLhaPjPL7yNCHmDcsrJLe6",
  "key22": "2fLXhZAafvoupw8LkAS4x7EPLW74JB4X4En9YYt4CCgiWyy87gSZ2Ns2zQUMog2Eg5sQLJwN4ZKZRn4aJDRXcRRG",
  "key23": "XUj4paGfWHztAhRQKwzv2Z5Csjx9h7TNxFkBFXAQFKZD2WiK8Y9Nm5UeSit8ZJ6mmuQ4VaUpHWcofa4i2oND9uy",
  "key24": "XmW5VEHcM2wuvxEBwBc8BakCirqF2bM6ZHszk1ikDoMoWAuBCLb1tT98PyYpvcJX7RR4e85Fwmu9FqDHEQtY83P",
  "key25": "2R6WvpEwPoUn4YxNvtzrqtGVncAj5D4qHDNLLMuGKwhLuFLZBvwF377EUwnWmerQzVzZnSAsxWTvCSLmjKpUfj7C",
  "key26": "565L3SaKzZxCYMF3BMYBT68QB7QZWy2iDD9EStKmfmokRhZVWXYPDawjyyE747XmDZmvJ5RB7EgEuXNZfnQGkGSS",
  "key27": "XQM8sDJRpwnUGcrKueqdVh57SbS2AyoeDJdQynCx75wfsXJzGJ57Xp5s1fzt1dwHNq52cRswwWvrvknyzZXF8F4",
  "key28": "4jhPDjDeLZeYgPqyyUpnAdEKgew4KG3N9JNyYdBcK5SJCrYGK3SNWNVtGqWwQWcm8rcQsvfqk2donsfyvajVCUP7",
  "key29": "Sj8gWK9VzD2XuahiL2FR9DkZm9ABrUaGyqjU2AbzFZ4iUqGyxeqej1tCRt7RLwjxnyWUNZJBmyKLC1YmxBofitU",
  "key30": "52Yxcso2SVVYKRaCF9qFJQvhMy9wRABffHShcwrv8SQzqWe16jdKMnvZXfjnCe2Tjay1XbEEXJm7o77LZormKQkB",
  "key31": "xTS1z8tyNikDD9xWYUDtCvNh1y4zAxmoriCtJo345fRXNy6qxmLyNdJoTbueWXNA7KVM4KwMqYGURsrsvTwy6tJ",
  "key32": "5WFCDrVaXCy8sC5gtoXmyrR4qbkk9JTmb21cxTvMZZhYGbBgx9uFR5CrQZktv1ZeZrYeJUEmKSPsF3gta3kr1qpp",
  "key33": "2xpUBk1YYeEiWKEVRgUaUSdnvMfrgRHXDMJbcDVrSULbuQ4hQZe3ctxrQFuVYuadu1JisXAhATxTn9amNHfdSfKm",
  "key34": "3ZEtj3XyVXpyCPNe51f51od4ZthgDPnuA6y4cGwLMA6rccF4fRd6x6Jk97msTkhfg1EkBMR5rb2jk7A7dBtyRde7"
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
