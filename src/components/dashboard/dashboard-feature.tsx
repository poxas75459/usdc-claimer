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
    "YerATsbgCVh7Z1uVBqiruiYZfqgTX9vBvN7fdVyLrU6eHEgiedFtn4zCayyaMgM2Tg3j6F5uXj6FnnhVEKSTsfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j97nYSY27mfuyb9176n2Jfqe1rx71sMvoF4qVTdpCk6a6WUpG1UZZei6BcfVVDZfBaPDVT93WqTUcbrUEVADfSK",
  "key1": "cRg3CNFRZU92CXKxvetoc9v8TVfvVFDMjxN8ZUV9vXjMfj78sX8SEQfgtcP6XDqLqYAsHGDRaXDLACyxim45nCB",
  "key2": "3sU4WNBmwfbVBq3erjRUbtW5bVSi65s8moQ1ZExS7DT7rSfKxZ4JWKSUCrY6NfGj1rxxN4DHE1kw11WRznssKKd",
  "key3": "5S1dL1j7NPtoBnrH9tFNb6e1UALsmKynNGwP6SVxWEryz424cQ9YJJ1Vaq7j8kEqxofJyTa8s9A3yn14hxYJRCiw",
  "key4": "2CpKNTwFEf6rXjhnNppC5UpvpHHJq7tk2sfex2LpmK9pkFgqaHMhPkneo4qZXE23BGQq8K3EWjRTX9D5tQgdZgkn",
  "key5": "2vpufqgHQxP5Y54iDbwc6gdffsX1YYUvxax2moHDhEBhnvau298n4jVzi11o8mgRvzeEAJJMJVeWDWDNk6i9QcKh",
  "key6": "5JjpMNsXGwQHfnSVJzwsA7Nhbm63SpbuJ6ej6yLbijWrfmaUxysQsTDcyWzxzc9FmeHvbeiLP5ynCVpRN4Gpv8e",
  "key7": "5HrEXRTSrCRoPN1CuoMxUNqD6rAXWXtErjcEWLhgHMqMCWS42ZHA9L2qg7CCt3xD7HyjyLe8oTCdD67cMzwikAW5",
  "key8": "2qP1h7yMWPUG111Ca9B9JTNUcLhjz7CGCFqeQ2QUsoUxavichbR9NBGw9WM4jpkxDv7EbNioQZnHFBbkbKXL74a5",
  "key9": "4J5FbEwEE4YmhTjtTAAMWRS9d39o5p415NdUpZHq76CnT4MpnZvaqiUmXKsW7cv5n2oXgX3WEwWiozBPj7TV9N2X",
  "key10": "5WEhnxjCAEWCxgVhBeJj5i8NQx2MFxn75Kc4EuWp2z1HcZfLABFnh5CuZ3AuhF4n9BYwYDsEPKAHZiXMW26SNpad",
  "key11": "3EKucEVdZW4fgxUTawKJ8qRxXGaVw28vFufR6g2xAE5WKgWuCDmGJjieFThKYjWkbaPMgsbSDkFmsuemUXwVg24R",
  "key12": "2zuJzVznzxPBUmR2QsybsjgWUhStifFtdPFzrcmWLQMKQG9yDTSM8gQcypycHnranuuvGBHnsMyHGbTTKM89FqFf",
  "key13": "3mEjm4BZjbh41FvrZLm9po5dsXoDiPun3ZJi7pxzc9zAF64K9pNVkyYT6vA6n6saPWpXb6uteLHpE9i5RS1ctExN",
  "key14": "CNVxFQfHJbwbEGmKME2X2z9wsk9gNxiAyfF6gEVhLKRQ5XjsaLBJhfYvtMyGdVtb2Wjjy6d7Cj3Y4an3UurW1Ji",
  "key15": "29hsM2Qif7Q5EUiDGmNKYgvFAgyAYFmZNFGDFYiK9wHBKVLdwEjbtY6coKmNmzaFaWmYEMDRuEc5PKjQ2ZPDppXL",
  "key16": "21PbGBvyQiCXkVZf8Y2GNGvKrAyLC7adEekmforiV7Fs1BPUsQWc6vzo5H1ujgrE5L5P9zTGZTkm2eo4XLpfTeDo",
  "key17": "5NbtYEKWfbUYLepJditt1rKY3MvA5v5GBuWoXu3tFuPTPGYHsSfemojN67rTDTSxdBGy7AMT68YsYWmkASHLJpPB",
  "key18": "46rLNjuDSWoDtZU4itbTEhvNyng7G4KDqgMToNa4Bm3siid14eJo26CDFafVtmG4FQ37kvaMLheX1acoEXP9qLcE",
  "key19": "N682j2BhfFwtGYDjPwBRqMjU1pUt856itKPokz4fukUposD1M5YprBY6TWCKTF8xo6fbvAxurPDk4bm3xR9RSd8",
  "key20": "KeapNuWetZSxxLkki46PewZTy3vzoqRBAZp4i4Tf6biXKrsexiqACkySqA3jnmNSZdQxLEHc25mzwfyd5uU1sGD",
  "key21": "5XTo64cAvHMGEHzdMsUDS7kxaukfBSR5meQVuYBSAJ59kBLxjn34ZDon7F5fmkYwpDANrivXMdftoFDecRQcXfjE",
  "key22": "svckfLXc1RauJ1BCKGpQmuXW2AHcMmVUyEFr9fnpXmZwayddvUjTYsYsA7hwEbgv2ecHRA3R9fqKNAiVp1BmPZK",
  "key23": "3fY2GYjMgi17RSDmDmXLnv22kFcnFcX3MJeoXdHGJFshjPnfAj4KxZPsumtAj2dENVtpLDnqdsWhkj2PxYY29SSj",
  "key24": "3QD79HGHuGae9u4SS5GjN1ZVFKh1gsmLg2igmorKP2LurPbYVghm2T1u5oAE52ppZVmUd8uNawyXNbWsmg7T9sjs",
  "key25": "23Nk6p9DWwTRsLNU7HPzPtzvyPAbjzW6A3UrEhjMy6NyNcya4WZETAARdrk1faZZXXgWswNTJd2jbMNGMCvXc1eE",
  "key26": "jHMHXvbHyYUJRzHE3gZhqpZLyZ9v4Sx3JZZ94jywyGWKg1DzE8L54NSr45sqs3ETcHYoWw9NerEVfWnAzAmaTEm",
  "key27": "F3VrKqJzbdNEb15uwRbfzdRz7uUXUNMxiGFCskmZ4Ghws42cLydjSWzcPLsY3iVUYm3arGXRAHWArQwgxTWir1b",
  "key28": "5t52xEnnaTh6qHkKreUdVyyvny4hfxBPhgWG7PPEihDjvBEVQKUK3jVjccTwBciT4ASuNSbbvJp29DEP5yQsw2Sa",
  "key29": "eSepbMUwXZwb2MPmsMZtsYgsFhxqxZNDoQwJungvFL9HNquz8rLvmDBjFbq48c3K8VCLH6mHQD5xMf9SzYRRK8F",
  "key30": "YfycnGFnvFQ5NTeUPfE6EaLML5wTYyLoKCH9msJEKvhjWF9wzjHW9GUS8ccsCTP8Lua6oFuqwwjQrbciDcfvGVz",
  "key31": "39AhNvz7XWTMDBNN6mB4KAAdmmrZviKDsVnGq2zFk1euQA4jjXq4x3FfK4GcmNxSk9qFoEEFNPKb2YgJvwJSd7aZ",
  "key32": "57kYnbFrGFVw46uBZ27LPxmEif81Kh6S5sKc8CZpLVYHYVhtwQB3o5gFwyPWcvbMNmmg3G73xfX1aPkYbFRqZZo8",
  "key33": "5Ufaej5W1CNEM8kgCFW83nNHato3dUpd7G2YpqXcBv4HaqTtBRUkvoaKaKWMpdS8jwvtGYoQQiNuDtiS3jsqzWHX",
  "key34": "5LcLPE1SCUk9oTu8cPsrMtt9UAPgjW5K5gsf16xXBnb218MgYVzSWhUsRTsiodcwbUwjyUPn3H1y5jG5dKBUpZEp",
  "key35": "3EXt6NLBY33fwsTec5TkLVUg42opVbvagUFZ7xgRZt295cjEAaR5pWjX1rxgtQCveZgbtZ5Nt2hZ44wcCFSFbQ4U",
  "key36": "2NcQiEBj6bcCVfhshH4KUw9toVQZB4ZMXt8XzXWY5KDCGXpqnSUodWjoLtw15WN1Z86QDs8HishLvufhj62SdV1a",
  "key37": "2z9YPn3uKHR7c2WhRr5zCgYaHqiDLAUo5sKscNiF4R9QVxpSXU5J8e885rzN54dZtE37xJYoTP5rR2vDRfL5fhJR",
  "key38": "4f2FpLLwJs4DtJM55LT2ky7PS5B9ipCpucTNawwWYDoWBykZbc7znJRQPSsN7XJnhWTw4WWBAKGby32LSiTEVWqN",
  "key39": "5xx15hnv545LSaVpLFiKgxBz7ntq1ShErQUDuefbRYqXPdxqniEkowD4XpT5s9vaqQh2ZBM2wAC8VW2KsKLHFSpu",
  "key40": "3qKeBZyAA1pWfhbukR4hgoEyvZuP4mag5WFiDqLU2igyhXS43a6ntBLxnr3z88uHpZ9TmUVQAGxtMedUUML2cY53",
  "key41": "XhLs3kdjfLHJ9dJgH1PvAbjDaCgKRBpeLhNB2D63WdiR3ZjZzKtEfYb3sURusdffuB6Nh6iSYmSt4341vC6pVyM",
  "key42": "tT3YS3wbXoN6M7ecjp8P8dsnsoLsEd52LqZxRWXSqQ9HDvdAUb5R3Q4Nnos6vzgN3Vis76ujYywTmyZrQ98n2wP",
  "key43": "4nVqnNEdeLwBZi4a3Hzaw3GMzgkac5RpLbywpbDoXiKmfJYLazZFX8snT9qiKvmiL8burRfPiPWqzLcVbtpNACVh"
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
