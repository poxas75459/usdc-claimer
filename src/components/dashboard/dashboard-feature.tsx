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
    "9JvxQ9nhmt5rDVx8cD1mRRUt21Jjp4VCdM8Bf1XsbzraDBRcheKeqjR6WAbW6L8ydpd9E9KzfSDP83zmQFGMUsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4t8PdTVdux4Yi21HYY2WbtMmn1eX6kxRaYGCbwjbCyNn9XteK8zRGX5NvwVRZdN5dnuqhZq6FqBLjkzaBCh6Et",
  "key1": "4kne4HekmRWTnjTGNymoWH6q4Jt1Zwc5NThHgn8m6QBxj1zsDvSXQdAJYoFqeQXDnRFjLqHwzAxEDm4ZCDGtE8oz",
  "key2": "3f96NTQrLfVFiFZ9zt2jx7DRvaoU4J9Tg3P9C42aSZMm2TucU3JHn3JD1emzvGhMUVqpHNCPE5ehGP7ecGQQjHkE",
  "key3": "3Y9GFVwXzJSEEGoNJBqBN4UmeeRTozXpUAQAuRjvJ5KFv8SgLgcZpqjxTrXdpfLgn3mGs1UYLWtEJ7uh9gsZAjTn",
  "key4": "3x7TwYTaHLUtaZtot9cZB7PhccLxi15RhzxXxukDvnK1LzksuQr2pBz7P2HttJQhS9Fx4EakKorDyzBv1nuJgSxP",
  "key5": "2m3sFjtk4dtNYm3zZe99We33sfRoqJDfr7j5pjHvssNkJJ25nMUNsNbZXcadYDcTjxnrcdf9SQgLtytsFWpPx9Re",
  "key6": "5n9euUhwQ8XS22kA7aTMdHGmSJSTQwtV9aCHLAr3E8pGYLukkPYR4R5UVy3gvJs8kSBFia3X4YVpJtrUTBheU45P",
  "key7": "248RxeddMNoA3xoLBe8uxfnTf1XaSDDFZRjZ4YW1xeyG4tKHaQvFPHX5uRouBDYQvQCX47j8rMpFbQj2na9GajYZ",
  "key8": "61LFCTzdJsFGty1FwxLqfQanwsMNdv3FyerCf8MaSnuHBsz54n5wJd5YGsnk2Vo3dXR7vTqtqDXDVJfwJhjS2kTT",
  "key9": "HMryVpboNVTeaEXT167PpXSFfs3M7jTpGpTqGw49DbvvbfmAyGypZzY3VJFEWehPxzWWzp2gpN6cjabJkCcEQhP",
  "key10": "3TNNFz15BuphLZfXy9sqYainrYbMhTGdNKJNMb45qvkf5geS19PPjF1od1gEib3A59rEKNr1T8KrW3FUYimwPqG3",
  "key11": "1TDZMsQ3jHc5UsKqKJ3uW3QZZ6h2kTd9Nse7wqQhnKTyrYSTGwEVxQu3mTbtNnxZ5yjYN1it9LHXNYyKNwP3hBs",
  "key12": "EyRsS7XgjfGe8G7s91J4TrNZFxXxrV1JmLCs3aPB7Ms1bv2jfeCMfXbECSSbrZiZHRHV7oQqQjNSQQCBUFDCm8q",
  "key13": "5uFSDvkD9HHVexXooxSX4ZM2yLhVTz4RCCNqJ182ZxEx1viA3MoJJWdej5B3Un2G6HwXE1w1PH3JvZEKgxCVBYmW",
  "key14": "4yms9rM1HA449ZKq1Se8bMssHeDbJDZ3L7u8GShV3mXBZR8A2vDj5Pjc6XjGHzHGdmzsxnrT499TkNdxRTu7RPtH",
  "key15": "4VBDyiKCNTnU2kAquR2NvP82NsetYq7MWBQ81Jr4ycfHxEhTfz5RdTAL7dhijWerwwM8Z2ko3gJbZd86JS2gVFAw",
  "key16": "5tsKF7Xg9fwCdSomZxpDwg7ZZW44UuNRcT1KDiraps7TJxhdoyXzjNFQsirXSHQt5FgyAKWj7KoxYTVzyxvqmVpa",
  "key17": "4CmXXB1NsFY7fJKC8Er9mXHgMkFCmtYEFrmFgQQ9hRCTT4CPziyBD7qxS4GspPmmUrcwkFQtj4AKxs65yawMjfpU",
  "key18": "4xJwUUAeHMXkcQhPREzDRQspVWxQn3T1c6kH1CWJdRapTDNf13Z9i3nNN8oz5SEQqurZFxeFwSi4uQpLX5f9ewog",
  "key19": "3EJjJj7FTQvhYGuXrn1tBCi8x1JuyYmGMizsHrQ2ZDuVtWB5BquhSCHWuooDg4WuHq4sBZGnPDjv3E9iPSTwkGp5",
  "key20": "P4Wjsj8fNh9UzcPEc9HDL9tt9WWdmiEApSExpGtuZdN3ybr5ms3BXYmRBF4jt9tJV8j5VmjT5NocF2eLg4JWdcx",
  "key21": "5EoebwCzE6kXJHcaLgCQfoVJ3f1df8RDRsS2B1yCkDKriiymNa19YV3pvty1K2nd2mGYK1WaCjKVFULFk18a2GoG",
  "key22": "61MszQZJtigvb14mAAzFspBE85APSMM6A5nFmq9CXpwPfePaBrBtWgYnMuCXFBsUd7GuMqcW4XGH5w656mXw2QaM",
  "key23": "3fnTBE8e4yCvp8TxZV9HLmtLr8ABbue2QMSAgBaKfX8VacPkSMCGpjUzeNZAs5WgBDh9CHpTc5VM4AazesgpPjv",
  "key24": "5P3eYCtEEMae5QhFuJFAa7W16ASeq7TVHyVk27eSdUjGL5XPcooZaxYmzAvCukEya8Hw5uhRfBKvJXdcXu7ze9kp",
  "key25": "AS5UYoeJjNSrUsijW3j2PQy96QKEgJ5uQhgu14Bnya7oc13vx2bpcYudE23s7BTcXAHD5JHHN6TTeZMFzv2oA57",
  "key26": "4t6SjK74Wo5B3KPX7hMLdJfny7qykVyjb9LYPj19FyWy9m3m1t6eR2HC929ZT8zP4ycazMfYDhKoBWpZw5fw1s28",
  "key27": "vAPA91JwVYfYMt4EWXgNfVx51CtBWFWWamFQVirdmXKE3R8YEhSkFrPuJiL4jp5wXsZFa8PSrJCxW6kiMX3CrAT",
  "key28": "4mDyWFGKCFsn47Z7hah3BX1qeqs1FjWx5z8AGSDrSzXDHpaFbNW9yXptbPK3xBYtzetxZXK4sQTqNUgUDvT3yvQG"
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
