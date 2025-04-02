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
    "2xnWdVWM5az8V1qREefHpHjnn4QF8LJZnFQyzkhWDjesNCeZyKenZXY3zd9zk7jEGsQ9yUTSZhWG7dgqyJhBfMG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwYXkCCUHHuQQvird863cDchPbThXxqritUZoEuN914dFsYT6dFfeTt8fuMnBgev7kX1n4YpEoDJ499j1ecjyws",
  "key1": "g3vUmWXRVysgQDt3tkPQbYNLe28ztFazmjacUZQSAettHx8cGBH5hf8zLhhjtj63NEwCRJxEzP5DaJJM6XThBg1",
  "key2": "3FsqAM5gNqmrSDAFr8XKesfLctarvjW7Fh3cvH5ATx3F3ARs6Z6KH8DyJ3r1wjkHzz5iqWVYBNB7No8zdvBbPnqy",
  "key3": "XLHApp589Q27rMdCAfnw5Fm3rMq8GHWKizXTHpEAZ5tqAJMrU3A2g4wNd6pta8WYJ8gHEE5roNEX9azhFeEzxip",
  "key4": "4ursNCUubUVukJiC54quNRTcBVY2YA72LiFQnEHT3AYnXXyxDifvwLmbFKyFi4A1psJ4EX2JVbzSvuJZ9LpYcTCo",
  "key5": "5uo4bxwfma7CoASwyEiYA29eACQ4c2pfVNrzyhut5rB2hNUyA4F6pqic42ncFY6xxc85MrvCHy1Q15iCqpod5T1B",
  "key6": "4Udn7v26d9JdQPX2WVcrTVat4SZXvuCPzvYCvoBFbFFBWWTJ8EmXrAHxdG4gV7pLSYQcrxDK1eZrN26kLc6YTZ3L",
  "key7": "2nSSwpCuyu7yMZSTvffaqkgEYUwXd9EKnBPbcW9iz3f5Hmvc5RaPY3SfC1KDyjwJzGCii1mujoxk6aMNu8nP9dQJ",
  "key8": "5UMwpbbxQ9y5Du7VF3Bf5ca2qCqpt6ahBhAKd8Eih3TnEZ4KiaUKau6kGnXE4CMHQQdw5X5YqeAPbZM2kzkgysSe",
  "key9": "46XusvJz4BcwuxYhXJL1ichUhmNeH2da4SpmBvgBae2hqn2RfJJqoJJvzCKqdjdAm51cAbjEPVyaQjHEejhY8zy2",
  "key10": "mSUXNMWFqy8i4jSbG8YX1QaUENJ9Z93JhCCVfNyuedmM3PmfgPA9SgiWziBNr7yBo9FithZrgBt5EYwdqU85CdX",
  "key11": "4Xh1HaQWSWj2K7RiFHvg6M2YL21J86KN9Nus8dQKL3g8U5Dc1KPYRQoPuZKnvq8asDCoX7RCsihdRfaug6Jc2NHW",
  "key12": "288Y1uQLCXuwTxj6jjvBgt6a24ddFM4yXo5CvPBjqvZG2HJ6n4D6v5zJpCkX16LPM3bnQAJr6ZabzTeRZMq9CEFb",
  "key13": "D5UVjnWRQ4Jmd6Bb3pY4jmKKoeicxqPrWzUt9YtM6bEiVkPQDxagZFe7LZtKRihRam4BQPTvbndbAA7twehmYvZ",
  "key14": "zawggx11o5ur3NAYi4aZohABkghkNhXX75NG29LyWit9Be3KzE4EFSa3QgtuDBMPcb41nSooi4pzRTk6CrHpkwX",
  "key15": "2tPDFiHiNSWLMgrwCtgk27AagKdbRMovxUEC4wbJDsLhauRXQLZWjk4RgabmdjCjuv8qvwwA1DBNqGAyBEyY3iu",
  "key16": "2jMNvmZ8EkTdJkkgBp8arwNHQnjFQv8GN7nuvhZWaE9HUE5u8vQtoaCRjJt1y9PdgoAFtnKYoMbqBbfTTMaCqwSe",
  "key17": "3BFJHGvUEbG1bKyEpJ3VtBaN4oBsVMKdGcfcvx5XuTmcKSwcLVMrRgEjjK5Gu7zZKhSPc4YDaF6Brqc29yKbDdc",
  "key18": "5MNj3h9rYMQa1M2ctSUuREAFThdZ4MBq85X3N8nXKP6bz7wFpYnJWNHfjJuJikHiFRWi2kp9ErwJjtaKKoR4LY7q",
  "key19": "2SweuEBRHB4sLNTPjsjF73wVxaAjFAC1sxb7ACQFfj7qLti5mmM8RxToXzRJbTsnkpL8yxBBdv3yvm67p9m2XoBC",
  "key20": "P3i3VKaMVVzSiTkJPefvBu9rYXRJ5YFFEn4gzDCQ1PbsCxGxJsCK75XJQa7GDz3qjKXFuEFeriZr8rAsg5AgPAw",
  "key21": "2rd1xGyowFePXk5nTMio3K4Neo91ZF4nbn4afz5iiHqTDUvGKjZXQrRTsPtmd3yJoVSC8W2Bkck4q2pAMA4z3pBT",
  "key22": "4f9jPbh4eDkmGCg5gEQg8NSA9gfecgo8ZBuPJFUYRhAKRjAqKPkruaiwh4qMjxKXeJyL3wQtsmYjKC4q6Y9BiF5M",
  "key23": "5MUvyop7mu6shmMNnoY23jq6sTVgWxdkaKxWRDnQEWuNsGZNe1fduEtdthBWRS7qUJZJUM156LXPoW8mRSDLPFk3",
  "key24": "Sja2LDHLZW9ZNejDit52gyYKJQTYMV8z8QCAxoCCYYHPu5HLcne3Yppserqq33gcsbiSRDdGmDvyqgvLEHTDks8",
  "key25": "2SpC9FC3aXQQszzsP7pT9Z98AR8arEEqTJtNQaQv99iCsudqXXQ8kRH9WzKbebeoT93R57GADoYGWLopagZPNJ13",
  "key26": "54cbTndeB2uZ5P2j6CnpkvUgor7zy6WwgMHjHHmquYTzN2TuqdVyr9LFP3LrLEkTPHSUrfMT2igZemYkMb6wZk4i",
  "key27": "3aNtej72pbCDL69eAvMo6E4hEz3YozE78jbV11sRpxSrfAf3RLKexhPWsYS9iJagx23iw62VtmsSdeWyLhDdFtyM",
  "key28": "N3rhC86HKfhoWrbCaZ3EXHb3Fqv1owvSWckw9vCpyXanwMkdVm6sFVeae7h8u2U5cVfANr87mMW3P4GWEKqyVfk",
  "key29": "4VzvuT7X9C7UoZ46bZYQHxemphfFV5G4Xu2Z3vSaRWRxq3dgA9k9otwRu2UvePFXQPuSbDKZw3ZDmf42ze7kDD7z",
  "key30": "4EpBipTk4WJX5jRusqfEMhReRsfN3LUEhbbWKnpEWUwz7xGKiGHiGDbuZ5hT4Kzyy532gSyBXmLDyUHg3utDnufR",
  "key31": "2gCvbsfA8W7o2x7Vy7cxW2vyQ4KrPZUEwT6oMEyVhFEusuAmbXm8nZG6Lak7TiTgB51oahMRhs6wTpVoNXJv79LY",
  "key32": "3GL5XsWZbmpaQQwCth5mk4coN7C2fHbgjKXsUT16T39vrsgWTM5JtTK7a3eESpozzLqCCAFFQutfoKSQPaaekWR4",
  "key33": "oXcqNudnbGrmHgCFQi6FEgnoQvTpweABZtPr9DteBPJbVbgjhoxJvphueNzHkvLirwBurgVCQ6JCnr6Xqmtqmu7",
  "key34": "jfwS8BYWgMLQXaqSttHJWmSWpJxagcbhUTME5oHZzkibvLV2pUgo3vTV5WEUDrAt8W9zSbzetvbwbXc71uPSnns",
  "key35": "3Yb562HkWrvsB6Hiq4CKw95e6BrCdb75fRwhScbkkmRLPK95SXoEJxDJ8HwHFSEYng2Kefnnei4bY4PRDiyr1Ze5",
  "key36": "2P9RwH9vW7xLGxdTnPH1RgbXAGZxpu59ujscCHMfBxbATHoPDSAWMeNQugmypwGdCv3wYmfGg2LAJAAoMQBUQctZ",
  "key37": "4utSV6djpFD6MFcSgRwSD2uyfctmZwv55QfBUwnCahnKXYSSgKfbn3BQQPu7EGFykUtjPEwSE8519VBZF8A7jnK8",
  "key38": "38eDj57seKDB9Rx2Rwt7JV1eurXAMj4LxiycKCaNfoxQktvryftjcYarmabgLSzaqdfXJbaPhDRi3tCVHnu9iXe2",
  "key39": "65egxHfAm4XChGsn8RzagXJAYEG3fvQaE5qL4RfBSSuyF8LRPs1LAv89kc8WPnxR1nxqkFbsfQcizNKWNwptvnBW",
  "key40": "59hxaTaixdbDVezBGBL3zUp6pceUATa2XRShVb2NMo5AMrmvekkwt4ApFHaqeyNpyrV83ZQnFGTGsDGC1W19twzy",
  "key41": "2T9yyxdm9xT4Xx18UXFVJNMqqF4kP5m2DrPZsdbwZRTQFpPdBN4nGdiQfhRfPuy9v6qB8A2PyUcmJuqaHDAmysM5",
  "key42": "58yVCfFKAjRV36m8VEhUMPSJRtagivfTvZVU5pSeHSdzGGJ9TruoEweiffs4Ka8azkFzxRQ1EXz3X7NA2ePWhnsu"
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
