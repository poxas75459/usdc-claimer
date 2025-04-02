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
    "2isCxvYFiigesjMJPPrs95F1ptUrEbMByLvWwWWHqTZMLFGZSUWPz54SJvB1tAbGSbn4dq9AqKx7v7hbnXaAhJjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29X1VsTfjrEJTcBLBxusc7bmaJHhu4jsbAbdHgLdpUBi3D4WfuuwBdxFiMKFUcrVeCwSpaZX64txcWFZ9hLBF5vE",
  "key1": "42EPvYc7MwmnsaqNwtZYTAm57sbj1uTSwRpnYtsC1ijxm9nL9q2QswpUSUKMiQMQnEV8PLxFrYDbgJwoiJMWLNqG",
  "key2": "5Q1omzi7kZA48EF79a8eYLYxWLKW2sqTrYBu1iZcuh3jrCBvqAdLGBXq15kqbYHQL33gRzCki9cYMcGyfJkq4xrU",
  "key3": "5y7M9Sm4gF1JuyYGu8SBYWioVUc3FkKT1hmeKpb2Eci9Cw8ULq4TBcr3THRc3AqA9urHu1iTntXzWYsCiin6CLUr",
  "key4": "4iGF3VLuMdXydWNEHkjvoxdZn1aBXRxD9X9xzmM7TfquUYXrMajAmCfTcjUWbtAWJn8aV2ceo3avEULRo9gUgPe6",
  "key5": "3y9NWGooxXzSkwBrCStvKdhwidS4SSj9Am5QXhpnyqKTP5h9J5W3SC2eNdtr1tikAEZBXGs6rWFgovMwkbXBk882",
  "key6": "33JPx9aHNvuUj35S9aYWP6RAwhD8PbtMUBNxMmxpWw7zvattfir5DPmWTEZVBpTAyroAUrf4AZqYyHJfFfxxgHMJ",
  "key7": "3hzy3wUFBhbEydBpfCSsE5nsisJaRVA3pcB2qwQY8eswYRijUhgcz1eYArzTSZcv4NHakpffZreh3jdmVb4xV135",
  "key8": "4oHYBB3sjN4qD3o9qEFXGPidN56o45LDMEBqesTbL6m88xYA4itjVhD6eM3C7y5MdWzs3chkHjErfaB7g5S6MxRV",
  "key9": "4pqfBWC9mXjAAyChsTnhYT3f3ass54wUpsL2eiqqGefKqgTWYZ5TwWWjxCiQ4gg8Q98LsChprh4sGTX5ar4NYwiB",
  "key10": "3z4Ldgsoa6XZKoKuhpPTGDw82r1FMBCwJyxc5CRvHecHdQqbwMZvhaAsQryadVaKd4QMzvGCgaPP3dCdVaNwEJd6",
  "key11": "6R5paTSVG41bDWH55BzcYJ9DwpWzQk4vfHrvVYPFpR87zZuZYG97H9fc32VULWCuV3wn9WPUy1dBAASjZ9Ho1s9",
  "key12": "3ktEQ1Coxxvyd4cwCA5cYH9bBV2xoKiP7GTLjkvYeHJmx8vrqmGThoG7Hp2RHVvSnKZgziUnrVkVk3AuZBPG5wQv",
  "key13": "3ZyfZiQG2Jbz91ba1FNaf6t9Bygd4TigCKdetWwUoTpK1DsZ4Dc2Eiu3zz4qMsriyubnzuXjb8qQ7my1f1m3RHGN",
  "key14": "4gNvJRE2Ao1Gop5weNhDS1XvjCzeAABtYnh1XaSSLWpFY6STdjk2skE4FwfokaMQSWwFojaZAAg4LoXpZr8wwBx6",
  "key15": "62qVaHrPpCohXnttM411pXsfwDsg6hNebfg4C9yBhkr7bFPhwWsm9iRszUWuXPTxfbuo6HhjYz7u1gPscDcTk2Hu",
  "key16": "5xo6c5FJv3PYinf6PUvqVmQoyQBvA53eFFb8NvjMBJn3RMXSyE5Uc5ve4e33qxnLA1r5zTDBg6j6Lf4WPiHqsvHe",
  "key17": "5UxTyMJbMm9pxtVyd7f17Q9TdKQe5ABdUiMU9TLnDSTEQFWQXQQ39BBY6TxkkCgWu8CX7EoJCQ1icMkrwwTsF6zy",
  "key18": "46oowekjHE8HBLQsMqWZriJbP4TrSZsWdPx1rKHY31GKMJhzf52LcehM2557n3BSv8tkcvpD8gUrYyzkG5eW8kTi",
  "key19": "2kr1dsRNPLyqMi2oeGA7oS3g1urkcqMUzfd9nTP6hHg3nNAk9YQibwF45MD6DQaTWPjVDuzDgJw7oSmDri7cD2Pe",
  "key20": "YUBm3h8shQ7jdqbGBvzTm2d4AQrVYN8rKpubQGMRrTTBYW6phL1Lead23VGzoQh3EVmCEwRjamowpVDw2YZfABM",
  "key21": "YHbAqmi4b6SF8mgDoPCNiPEuvzQzVDuWMVeChepFnaS9WSMUyUoNYFdmUeHvDe92HPk4cfcxmBp49THujuNEMYc",
  "key22": "3bAzNh5K4vvCiHxG2r59rfzD5Ersg8rKtf5y7uLZ2ooJQqpbajyGdBgJmnz9tL2H1eDyJB6YLELmrQknRBnvqc1U",
  "key23": "2X2TFbfS4y6i9PDBLH5rRj1UKBpWHfvUaDJ9BtZKsafmhGREiKvhXjP5rgYWjqjDrVZCZsLX2cUs4UicncqMKCHP",
  "key24": "33EVwaMkXsiwjwza8LujMWNrCSK6qaXe9fdGVmrmS6u35DpXfYSyXtPXBGmmMZrH9337LN1G984AYzKdj1Nx9Ahk",
  "key25": "23NHADbaBrHXtSo7hwsFvAFJrUAzGNvDzC2TH3s3CSBcaYLZEPHWoeHxo4uhhmTxk9EoDcEXcmtUhqrrpo53UHHW",
  "key26": "2CxR6nyihZvBhK2bjTSDhAQtR8X1NwjpMdKKfpodLQQvNZC4Fw89ReEX2G4f4eucmXLCG58ecpH2sgC3nErc1n6U",
  "key27": "WpLH4LZPeULncmpry6CARQRb78BU8nWXBTfLPgtmxGbFh6bPWEU5uHowJ79U83cyMX7Ag5PMEbAHPsuxv7Hd73a",
  "key28": "2H17N7mx84cHyxAbqCHcfHYAxgKMzrkqjfmYkXPfQUS2LuJneUNRU1udkXaHhbowYTN4SohiNbCMxQnVGYcz7172",
  "key29": "5re6NLC3Tr6ZkkdKLZV9hDJR6WBXGXCBvnX7zDWkxFDnWQhEVw4YVWekAxK1zepBQoLP3DKh8KzhtBhtPGjirnGA",
  "key30": "3QWXpSVAFGxPaYVJBh2nTz4NKRGnbCcPe48gD8UJP9zGnAPdGpoaCYAKgGyezWU2xEXic3iY19SHWsdvRFBjwLEM",
  "key31": "5tZcj9jrFq8L357WH51KJnodwzAyqV9kGPC72Bn779kz2K6idovNPm56cQ1kGysyWpqYvMTZfEzvDsmpWGUJF8AC",
  "key32": "5vm9xbS8FSZVRE8K2Js6sFsc3HoFU3oiS2QWPrpWYRiT1B9mQJGW6BLCMXAuEVNuwNx1gbfL9rB7rJL7vJZ7tMgV"
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
