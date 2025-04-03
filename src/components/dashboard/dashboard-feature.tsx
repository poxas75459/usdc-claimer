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
    "2g31uG72XibsQKRahZPxfhXeVFYP6Kq6yG5NNTVExSbZwQ79Qf1XvNMyePT1CKZTE5cdk2DrAMR95PEcEG8G3XjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpCHkMQUZQQeVa3h373EqFvbYuZTSoVRkfgbKmLw9q2qo4o7Be4zSvYuE2mh4UXwaNJbK7HnEZtYw8i6WMSg1TH",
  "key1": "5EFBALzs1n7VPCVsy2LNrdVtz67dquwkfk6bBvfmvCYDeoWce17MVanX6AvD9LaVzbwjJAqGBtQqnFZzAV5DocXf",
  "key2": "2Huzb4Br1aWjfUa1FKNhWaE6CPxmBp5fNZ2rmD1VjV93Vux4sM3wQJ73D9ePNpKtEhBebvDspVBqdeVE3LvjfWiD",
  "key3": "wqsiqhRFyszdBVcUoikVtudnXv5fsu9yUKGpCm6rabnVYNmqiN8inmgF1LZ2WuCJE3m6SfuoFtKWpKEN5zrwia7",
  "key4": "5QEb46Gcs9yKm2U2CioNvvPpjC8aEh2E2feg8CunjfZTqS26JX8cox3meY6ZZX2kwG9re1atUjvyqwrqj7GFYYzw",
  "key5": "5AYpo1HAeMqJhb2wcq8nfPHk4XLm9VAaj9gJ9n2wdDN1mE8xwBKPXWDMDKiPfiYpBF5cxjp9kcGT6oMMuuAbNori",
  "key6": "5fZveaWVxoBvVw3dBVy3hyhAh7F5Q8wFD6RyCvY4RqC9PJ2Wq6F5Pi3LgTA2H8JTet9kvyfUpgqjTYAA31NTPoYE",
  "key7": "4YsV1bN15omZXXjVb5cegGmusGkkLH1btmzF3t53AtKAd1H1UyxSDkFbmDdfnH4VzCx2K6ExpY52Ymimfiy4J69a",
  "key8": "2dbkU4Ab2WM7PDsGAPEJv3wMRWSV5ThyFc1NNns9XES2Gzrmi22aW9GVq2yNUNMHzFRNZ1MCxB4R8DWfz8gjSpMr",
  "key9": "5Ji6UMwMqjQy5iEE9vxL2kkYyL9b6tJUiGcvmLiLJWMENSaqr56QYFPHCCr7cvaLh7vAJ1UQW3pKqgK72gN3GrSp",
  "key10": "2XtgcGkHak6RyjCi7WJv8AbeynDQg6LPs6PrbE6qNwfudc1xxtfMC2tmZ5Ty4EADEpJCGZfoTSRTZgFQEi8GA41g",
  "key11": "3nv3pYUX92HDi9qp6nqAXwdqAoUwzYHPwsYeTED1xdMQa39dBkMBvWcRu7ECaA57L8yASsNMESVL1zjMSgWJxjHC",
  "key12": "5QEBvXn3fggr9tFsZuoDUUDL7Y5Un9MNt8gnyEx9aBy8MR18fLsEP7s3g3kdC5kHQFAxGcK6uRowmz4m2ALGJyoC",
  "key13": "3588hnuYBX5ufvRZXHdNyoCEmpf1jmWQmDB6rBK8X4Ri6uCEbFDkmpsaki9dRL6FJH9uVaAfA1hinadgmwFZrjnn",
  "key14": "5h2o3rXTLCA5yza95kBzrDpJPJK6LpH9LR8eKmtLYDYty2U57t4VhrAS6DyJTZyCydVtvG7r2guEmVQut6X1Vsqf",
  "key15": "3toDaKjz9wFHrbgx8L99NYMGU5CFiuP8YbayNKb1S8n3QBnwhnc3dSzsWYghfUWmsEJmcuyK681hkAZZKU2bUH3T",
  "key16": "e2W9DvMfJ6hnAT1w2F8iLQTXiumnLsfk8zMHsNm8RQ4vAx78a5DZLVhyfqdNuTWBjo4Jg9q6TDBA6wSpJrkX8tA",
  "key17": "f6ZCPu1mA8CEBooPemyf3BT5USd9Q9n6ofis2XTghsVDqAxX7L2UGggUwzXh5rZnHEfjWDsEDechj6imoVX4hwz",
  "key18": "RGSZQZxPKRaTL9q1ZCFtP2LdinphgZkLfGxhLzkxEUkkKtDW1Tft3v8bZ37RyvVKnkTAgcTBLtqUziVvmhf2vPB",
  "key19": "2GCRY3WFERQpYXQ4EHdPyhz4p3cMmdVxBwGKXnGeJhsE9RVGqFAFCgGpoBRh27aSULiP6We7oLeZBRRESWjtyjuK",
  "key20": "4d7Yb2uafikgkPuXaxyDkyDtgrBnv9Xxtw8XTv5hFTVsrE465foZNTowPYvZn6QdsDBvRYHGn3mokLsKSpEH9A8F",
  "key21": "4i15Pye891XVK5zEaBYP76WdiHdBGuC1i1iqwfcZF5mLDGffhDA4Era6zPsMJDd7M6mziS6VRDPn5ZbnGe7AUY7B",
  "key22": "4rL9zXKnGHrmiSpchy2tkSs9sDFqVFxcE3X7XWAJoGYYTEFT5ASFhcZy5QznyJVvH87ATJKcdZEYh2V1BJVfXZYb",
  "key23": "439AcXeg6i17hMQnwwDSZSrs1cVfAptHSf119xfPTDhogQyQUxXVGmDa7QZbYnpAzogkkVZHhq71vEqMrZacK1H3",
  "key24": "3HHd6onPnt9LZ45CQhjgrvkRqkotmPe93xqMXGsmoXfoKBiPtneXQoZ2FqWnuXGYMETYN5Yiwk7ukCbKzDY1u8UT",
  "key25": "2Uzo7JR1C8mnPBnjamCKjUFFbPKwTjNFqNYE1mcSDUGXu4LubApR52afevvr1LABab8RYBNQw1oiZd9pBfwk8W9U",
  "key26": "miNhH5tyyJwi6RujtxHKAdEGnKoWbMrqzmGitsLvoF1rCRUGA2MUAuP7H1tJHy6AmXp3rj8ebJgEiiNcr9tDR6v",
  "key27": "32KftuqzC8JefS639UwgZCEonpfEFhS5QqK8HhFLmRTrqZ2GZeFiwvEvN7WAaSayqBCgm6UhzouJaLTEyyN8nuqL",
  "key28": "4dpmBWVLQWGS3wCTp6S5pvHBLWBnE4p6NiubZ5ifcVhS5QcopjScKD8XKBztGnjmFHH47k6fz3ndB66r3XxQBEu1",
  "key29": "4TAHPnPQfUHe8ZbtSQm1XsDUxYpj3S3ABULkPR2Le78noy6Sq83ekZtaU84vNC7RmWevWey6jXYFcDGz33qx9oCU",
  "key30": "2brSsHEQUuM6b97V7ehHQjJQxMTYjKBhH5UahyHmp5HdMuAXhEQegeF8BXKNU6FNJtgaiixr9a2g8EMrsEEd5vV",
  "key31": "4FeT4QQjz7GXFKRonKUM3TvTFMK74Tx8wKQj9jmi9ZubtbiZ69Keo7eZZWuUYHHQZUr8eDDxeR8UETuY9k8rgWWp",
  "key32": "5rV7nSEsryzd53ixL6MJWAnzPTC53ybUndXkRLzt731A5MWAj528Jy2jXUGAtY8YZDxqRfz1yQy6WLPf1QB9kvpf",
  "key33": "2F35S6x2ahGBBwGpuc9zod9CpA6bGuYXAorAFF5Y6vQR6bBohLDZsVNGhMCkuCTytpNN7TvNCqT29Hz16pYebAZf",
  "key34": "271Amb1aeMysC9gtJEyCuiXTvcdZDmAbXvqAVH6V7rJSa7jbNDgSuZdKAPgR5VDQRSTbHqU7ziWjnfNV3WKHkhD1",
  "key35": "4b21gCr9vfYscSodcTCg7sN7pBuzJFXm1MRenqDi1YuU3PFv8WSRo2aHZuY8WJeMqhHasqRvyD956b7hGZR1MTQV",
  "key36": "sXzeNH9YbD1qRN5uq3BUNbbGsJ1LL3heo1hHY1rCYhA4558xhGNnMmD1C28ot7o88F2t2wUbsWpLjPzes5yV6T6",
  "key37": "5eJJKV7RJ5ZuBK9ErhXbS7R8ndF9okoNysEBdVpHvtjAax3oSGf6jbGm2NfUFSEVGu6YTUMonGidTa6PVqg3vNrn",
  "key38": "5rMuqYtGaEcxYzL7cNTt2xL8kcUabuFnxQuKzbZzMBDXG2idogHqftwNDrCKdyKCPwJYjVp9N2q58ai3pDe5Yio3",
  "key39": "57eWxFTZtJqpXSQgWz8dyCCCjSXZoG4jjfh8wkbW8iZYUU7sZMq2B5FYt4VN7gBECMtpGRzhHrhVYJLKe4jkH5Zv",
  "key40": "4KVjBMgdx1r6R5j1EQmMxGgu9KguS6S56sx81P5WsE9kjgXwPH2teVg4uzFXSCi8xgATk2tiJy2RUsAFp73xFqPa",
  "key41": "5cEEHrWXtvvKtyefmUCJNxXhsG2wkC3YoMSeYmhfLuC8Q9WHpRS2mUVqfgiBjuUqKjPKm2ugTDC9mpLTwbP4ztN9",
  "key42": "5JoWd2vesk69JW1ngNPB6bDngSkJw5RxBxGUY3thobKHUUsygrashBjZ3LtMFreB9nCn4sNNcfhes8SxdRuBPg4c"
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
