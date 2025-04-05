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
    "2gjis6ntZhryDNdDaaxsQFF9Enrh5eE7NrRrVivpFzBAoWA9fHmoidm1rPoRBwAMknNgrmKfpjw18p3PnyUVbp5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcPbx2WX2Qxj5Tj6ypUghK6L7YsaGhLWtr2ChudmgCK4SyQ34wZuwHc2hB6NPsXFtc7j3WAfiG6u2cJ5WsvEpte",
  "key1": "4zmjDKTEvaA7jL7MYEG7bcT3ptvv4Koy59y6nXK9zu3scH6gKXahvR45ZsvixoZp2CDvixez6N4Cj22pVbWMc5jt",
  "key2": "4fttcfDXxGj5DY7krDgns763o7FNN1nwusWToGBGfxsZKSKdtRuYuzx75Kxnet4PynE2w6MJFpLhKctYCBUBPtj7",
  "key3": "DL8mhFu5tR5ESr3p667gMzhrPdcVyTZK8jqqw6fCQLYbKf5Toh4WvViWQ2zSdi2ZVKuM6JYxZVcK9rZPGQbK6TV",
  "key4": "253fqyK3yhcwXZTKcMkKCpVTjZAfkK31ENgLpxNu8XCXyLdwBNJwVR7zHfHKxjSASwkFoQW1MbG1FDsinxbkRL3X",
  "key5": "JSVW9vvuSYRnJdzVAPkUU9TQ1EvZ7GB5Ms2Ve7bR8nuzEFRMABedHy4DpdMbhh4Lntkma4ybTUBPMTvXfv7Uq52",
  "key6": "47up34J1jjkvRW3wJimVfAVKV5BU2D7UeDWpxo6t713hoeJFMS5rSdJ86MnJAAHz4x5ZWSYbAGdd6ogbM3KVeKSZ",
  "key7": "4VMhzS7pinMcfnymi5rmVgtqUjcFYjx4Fp9n6xsPpBRqv4yJRdmhjBvpVeZhDFCYrgcsc3cEhAcT5PSawgK2ifnm",
  "key8": "4jNshSyZYThU1JJpeZv4Vv8YpckZXpXHLyRZedzMZC26N64YrsN2vdFytpV86NsWCmfbKcKRjR4VdKtYB7SbqmAR",
  "key9": "7uVxgiWbuzE9bRng8UiC7qcFKUcCuTfLWn8z9smBb68Btkc5uj37Kt267rLyo9fLuq9QPgyn9ppwKJSYyQXWwde",
  "key10": "j9RA4cB5BHaKh1if4ezyE5bDYW92KbyaAfsEkGqdk867smWwf9rv6jtrFUQKEBh2rrUipXnvRkedvKg29VX3EYg",
  "key11": "38hFrJaG7ZE9KF7w6KhK1gYwJgmKawTHeMdJvbc9KZ97zxcCSs5xVa4hSPTqa7haRYtY9oVhZTpuDNNBREAKs6Fs",
  "key12": "67HHMu4REY5wCSrtiEUbWDaEFxZ125E6Rk4ZpvWnYfGMQxoSay3PNd3u6pScN9MwLAN26DnLxpT6uz1sC5fNHs5U",
  "key13": "2AvYYWyEHpCBZCRF3yP989V2dyYqpPANZM413xvuM244JfrerLPo8T17RU3exMYJvx5jqYukFDmQViq5ah8cv6Er",
  "key14": "4aA4S4GdXf3EhL3kt7sJHjxhhTxJdZrX92pmreBJhZ9oD5DDhDaPNnTYoUwVzyxwfm8vvCPJHBXrKwhc7oHoLk6M",
  "key15": "1BcPTns51Njwuc5PNm2oj3qCJ8caX7VHEybhpGQAz4tJb7zT5JUMpZGWaV53LNx86VfTdbeJPfQSAbam18GdgBM",
  "key16": "3cZiETeJpyAAm4W4fWSZTPrjairZn6Hm7kRbFaFJuJQqkrwYNvSBCTQe5iLXdpMG9YTsZda2u348HhjpGjU7xTN4",
  "key17": "NZTXvXCJrZWHKTRWn3bJT3Lp3rR3cM4zjNtVAKMmoAYgjpSoUNJb9WvjvsADQUtTdRnjZbqkNnZ4AjmrQXxjM4j",
  "key18": "mW6uxiSDtTCKyA1nPBqX8NXZfxhugKCkpGk95LrshAezY8fPBvShCowNrRxHYcJMuUgyiYpPjMbCQUtPGeiniAN",
  "key19": "3zcgp7yJFsMamsvGiyzswcKhV3y25kiCJJcgC1QGxhFQGYRHPPiB6EYcJNWine82Z1LpkbtL9WqPecyoLuLrXomW",
  "key20": "qnRwE3gKCWaZ254G2uCr92mxR8L6T4jNcRPKpr1utoMReUoMtLXxhLsgu4YDZwjJpudTNFxfYv97uqCQSuS99bc",
  "key21": "37AwsCeVTr551qgznaivfLuJcPxy8srv7M5edeJN2MH83KaTba9V61Nk3eGN5x2Q3PGXup6nqZzxZ8ACsBadoVWu",
  "key22": "fHGvZoYE4AWjDn8PZq3RD6cdX4cEqTAVtNYhFy86ZJQz9buEJhHiie98CJZ3v7u5TfK4JjHUsD4U29B6FAzYw3w",
  "key23": "3pvAnpN3LvtV9SfCufv4V25s39nNyCSgx6W5BvZyZiLE3ztngWfqjriDMTvqaWkFScSucjxL83WjbQs9awmWY3Vb",
  "key24": "4ppJSAismVsVTkdKTEERSZGuTYBzb5g6m8NB2CoVYQW3hBq4zTspiv3bTcswYts6psN8z24hqJgiTE9D9bZBwNUd",
  "key25": "5GLisLZnhHBMN5P6RMRzScAbSvtKZirDp1d5k614HRXFdXhAYoqBHX5PGSRqqmRoJZf2aXQTVWn55DfHqF6RwhoT",
  "key26": "4ZCManbVUjq8zptAdf5xDWGpj3cJhqvYgd2VGSJmkkrRisQPQMsah6owNuXkbwpuwLD5PNGHQLou6bZnkFRHtZwp",
  "key27": "2yschN5YD245Z4F7jUCo5eGEYtdjuXCXGpJ3fSFiRG5WBsToNnyHqWT1AZnK5V9x1oHtzyARyXkToAqeJMdzqcZJ",
  "key28": "4WYwGbiCgVSXdkxtmM7wTEgnhNN26br4c9Hma7Rus5hZyo67aq4FAv4ZkcQazoHEReDUe3fcA41SNt8UUYuyq9PK",
  "key29": "3yu7zbpdWzAfybNvapQhNgQdZJwruxAg8fJYtqVQ5PJAjpzXYZuXDEWfuk7euKsBcsun2bJR7naPdEjwAwSjYS3k",
  "key30": "5qUWLz7MMhK6wMUJhZf6Jxj8kBVZFGgDLGEC1L6oHnXPCHpUinqZVJChJd4JZ8NusYnRzjinC7hEUuKCg1KZHsEz",
  "key31": "28uMv6icL28vzyX4Paks3mT1u1wFGnkQzzPNtWKjJNVsRhRHghxQstHEGSUfdugW1gsZBKwj28tjKA2cUoQg6Te2",
  "key32": "58X3GPMhHoVRJMe5KeJYYxoSrG7F4XVWgYY9o5zxrUtFjkAzkibErd5SYQP8PV1CCBxWzUAdFAQGgXe9HH69A98k",
  "key33": "36iRCAt8NK1Eer19dsQQ9GtTsjZAyy8txZ9JRerVwBhTJsJ1PDqrZX3mEjcczR4unfbFQD6nnKHR1BcZty6iEp67"
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
