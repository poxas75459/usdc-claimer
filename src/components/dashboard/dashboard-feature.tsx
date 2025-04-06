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
    "59LgxL3CqFWrcBoeG288hpSYtoQ8PH3BAVaeeAwS82GSAGU49UE6VZ2jxgBRzpdecFrb6ui79k9brjNwt32VgtKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMSRh5RENVAUDSfyyuUJEij8ScEucxs8mbRkTvbZjpftZ3dWmuhKitVawWse9Zpj3jiPKKnJf2ZjtBRKEzqEKz4",
  "key1": "ZmkUKUcbqgKSc1PJdSX3LbA6qPeFXEiuS3gjXV5F5eCCCqDhzUBtokKynz2ytC5c1BKCPW1vqTyw3LdNFcxzhxi",
  "key2": "fFd7V5EK6unBmhQqHFGgSJUjCetXod9dDVsXvqcqLZ2JpwUj3CjgbsDyAdaynF5R6AG9yFCkEGjkaXKYBZrz4St",
  "key3": "4QTbLdcCZMmKWG8Gbt6UoxjJDq3LwWHMeiLzACM3KqL1P8Vh62s4J6HLTGfAYCAmgfGy3rYt8UKPq2rcs8vz87E7",
  "key4": "wyqa7xasaMTyqMDepReT9nNdQUn5DVJy4HxfgmGQwz9vJ3U6dMA1ro4up8K8mXPtBwqw4P8Fv6444U2au3dH787",
  "key5": "5yTTFWYWthX3icipvxn2u6Zu2X76QoY4X4v1F2wT62gsbGZmEQwL97vcGZGZU7YFakamvtxK9C4PWMk6WkXzBHJb",
  "key6": "5zTeAFCyQkrNhxnBT7ZMKiRA3fAcbh4R5deUWv8k2wEqmC4U85sKo9YFy9dwuzwQCbZNmXMmsWfZYsYoSF5Er6vb",
  "key7": "4S4tBDyoRuiZqpAdJ39s356UYymeBMye5X4K6yxJjv2mHkU72V7MNfyUmtQv911i6KzmY4URJmYFZiPs5JtHGTq2",
  "key8": "28SELBr54q4aW7UtdLFpgfhJQQxu9RXmhqtNUMwQe42siLsKXmM4GeUNso426ePPdjQ9LH2pG7GGumcQhahQH8QK",
  "key9": "5xRX3d3ArY74yuDcMkZ8Z5RZT7P6PeKaQ313NTmwdaL33G5HvvGPfmzzSmEQKPixnqdVJri3naseM8WM8Ppf9gLQ",
  "key10": "J9ajgtzztrn1hEaYrasqxNbyQh1HpcnoQE9meZNmBxkK1Xu2pQ3qomf9vgPWAVcRgvHYMVrKp9JRaWpsD715h5v",
  "key11": "23HQ8kutWa5LYXaXxyxSjeR9XH5DBY2iqPSsauNaE16sRbPcDiM8pYsJsQEp9Ecc7nUBcXRxKfsgAbyVV7LiRKwD",
  "key12": "5WmJXkZYa3TcHn1SmeuafkEXX29JzYffRpuxZnrWYnKw7hMtwbWUJdGJMHyjpAwXVgwaBjYDVaRRpCoPyuU4pM37",
  "key13": "2L3gJtmvVQDWyxe1NqgcL7PSrU3FDKaBbcPxtbGJE5DKKorn5B4G1WuBPr2pn9jzVG7G13EujUponEPZmgW2M4ex",
  "key14": "4XGzECYoq1s5mQUsoA8XwtE1jVyC4DB2ZJdva291mVMjCvepy48qCfkd14cqX1byEzUQpKz8tYyAJvqSacCs1ew7",
  "key15": "4KNJg7bujc4cYvoVaWUP19qJw6LFAxCbsxifVzbto4m3kuwj1HEMQVqzjTBmVfaBWo5xa9ruBUCrrXJFF7qP1SD2",
  "key16": "35RcRHhCMgEGKtvX3qFo38wnCbPHBjAkt2WXnxmkaz1hqvDV1T3nvWoom6NQQANh8hoPpDD79LfmmqmACpH4WtHS",
  "key17": "1279HGgEvYPe46gsJE9w9Jy6yePQ7yXAFNwJtRmPZeQmr7btBt77Ao6hjNGiMkiV7tNPuJb9vBog5Mw9oUBw4Q14",
  "key18": "9NnzmvR7rdBTC9JuNfkcLaR1szrSnPw8TwZg6h357CwdBzZ7gAvMEfem34vt6ibZA395USvswRbyLzStuRAqMdk",
  "key19": "3PfdfbAe3VUzKMUenLLXysNCZV5ot9ribdGeVFnCyDf5WQCivfiHCSK3nuKVGupVpBrjysGPPd9cxtc7wLDzvehj",
  "key20": "4SbVbHM1bbamZbexopGd3M91TnpYe2wQ5vQvzbXXPKnwvteXf6iYiMkEeJzXq8MHQSvvcCFJjomVH7EoXo9fijin",
  "key21": "3oKctQd76u8o1bfsCh9Cozuj6NdZiX5ocPqgWbtoJ5dg42imCUAmKcQEUvigZGCqoeM3TAzreaaCv5ncbJeT4qgQ",
  "key22": "2hiQwmM9m78Cc8rhMVMXDrANGKpb3Uqi81fMDHDmzfMHe6SwHocFpXiRLEag7847eRQQkvG9oBVvpek19GJWtSms",
  "key23": "5ngTCR9skB6qUTDvi5VwRspHvprUGEHgkbZBikCgoNEiTUxVTSWKTQAhbqgtFVNrFUsGtoWoxHDm9Y6GJAev9Uni",
  "key24": "2d9yhMP1JxE9mYfhabejN8L1s8tSNS6wiFxN6xbvSgK9aX7Qcy8usgMrfeYzNrfXzzgoasrvMC58zmHch3csJvRD",
  "key25": "3EMrBRGDYpQJoKZx5ujjBt6VzwUa8T4x7YULqZSgYWuto3ku3g5BofegVFu8MxJ8iUkPA8Z8YYvvVSZrvqsnoPfS",
  "key26": "23KBzYaTtWJNdBj7xjuN3rtFbnREWmeiUFKqjLNze1cUpDSPQiZ9GrvjTPFyEfh6NunLcxio5THY2FGUKM4Vpu7w",
  "key27": "5xb4AG1dVebeAXFS4181P2BJ3WMidSaHyhJzB4pYz29WSxtvEvzEjiZU4y4wczUstt3q5QnTcvGBf4jdZrUgeHyC",
  "key28": "5beNPRRJN6VZ4TAFWkfGLVDmAPdpkoATcYnh5sTd66P4VeCReXFgfnxQBUQn9rogGofijLn1xPoWKDYStRQyhBXn",
  "key29": "2x7NtrBvyhUJ5i7btVVxpDZZf6L7LXS5RfnBfdLT6auYhV7bKZLi7j9PN6yA2zDWZXavGWkjT5W561U6S2yRUsTL",
  "key30": "4YjxAGpsVmDfqjoqBycTFYeKQebLUvNGns6HJu6XP5J99eizPAEZrjAXGcAyQ1HAsUTRDHJ4MWmrBS2so7QSBnKS",
  "key31": "3GrV1CG7XQJ3MijfSHA3kCGBkGUuVNNRpbCMcvfGVwAFmxz3qU1S31Hi6yeFUsbJWFDp6ok7VxXCUfWgsxFhAb32",
  "key32": "44hiB9vaG4G6to4w3HfRRXB7tvqH2ESxaf4CkuHdG9eQdr6wzLWDHYhjkADE15qCQQfveyTdMYFwX9oG5fDTJFJU",
  "key33": "4K2wobuKyQTuxyzLtRRYT3EG5xMuhVq8by3TEcutLLikqqzZca537K17GNh4QyT9p7NYxqukabK2UuvAxbWvM3BV",
  "key34": "419gcBf1bXLEkugyxq1sJXEt51yfGbrM2npPA8arWZCx6UrZDvAqcGm4r6mLCRuwXa1oVMMBFv1yMdGE14z1iE83"
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
