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
    "yvdANCFnxHKFJQuuygCm1ZZM4DFmbQiEAUD7dSjfrg5XsANvUNcjBhFRWiwrrzNGuFK5rbdSjv5pSPRcmzespiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MM33QGirxDWU2N6h8iqug353JuKAc2XifmGydC1kod1WNH4FDyNeUGveyif5WHkkDqpF9tLiHHAYKZrz3fvE5rh",
  "key1": "3NWpazpJ2iGoJVUKEKVkX2nXDeiNHZWxbD2wyVBLu1UfXCR2DjPQoDxkCmWCkdAF5wQ6DxyJoQY9tCjr8vuYUhJj",
  "key2": "61m3XyjwUxVdRvvMFBJ8g5rxBzgwMYtTmdbytXCqPCyyrz5pSk2qSehVAik7GcvHGBNsHeErSQpa5JewwKjUdM5W",
  "key3": "2cyX3kAjo8aCSHuwo1FtZZD2NECXhcStSAShqePkdkfRovszHbAarxdaMfhT4PRizvg73nymNzQJWFViweqfdRW2",
  "key4": "q64oUVER4FTSU2XcibtrpTJqu4Ek4AKbgadKLYWrMhub46D5R6xRrgo48SGY1ijqAqwuFtM5gZn6eHozU8YXXwr",
  "key5": "2coph3uLJVdcG4upurR4dufoHbvPw2snNQmHF6NHD1PAEqkCD8tL63yLiKbrdutbe2RdejBLzNv1uaircEZDjj2E",
  "key6": "5sUg2bu2nFCHg4c1CUznte4VCH2FWG6dT7kAec62W5jJ8AmtyE1jGF95FEbj9QJKrqSQTRitdmGK6nHPvReht3bF",
  "key7": "4U7ZrUP8jNk6PwUrvH7vReBH1mctbx7cMMckjMRjgGoMehw9igtD2pzTkpyuEi7oxcwdATdpyP2YAHB9x4eRQm3U",
  "key8": "4r5ti5zgAGiWAFD8vo1rE79X5EWJKN1ES3sQj2hAa7d75GWqc9XPyQMWjLJMjChBTN4o6hMXHxcWRFoWNCzFWB9U",
  "key9": "2idgfv3bR9qviHNtPAwxbUTSdM2VCX3TqmB3h4TzobuupiVzM3TUxH2xNgxDPoGgoEBWTx7CEy2kxsupRJgzzQHw",
  "key10": "32WERmz8iRF3hvh5SLHfDfNmyReP7CmqEFAky6xftjcxi5kk1Vq1CpQ3tFoYhzRZkQ2ss9hGav4kUYDbDdN32aDg",
  "key11": "2Tkw9sgDgbtZbCr172pQiUYRxfQxGAvoiaPtmoLPwzQh4w1orUe5MvTHxPod8hKgirXrJR1c71LT32K3ZRffqf8x",
  "key12": "57Cz9Wt71982ukuNn9aQpCkMn241fDy9T9eZaLFxUGvQpedivrQg5f8YksHTcv82RHakTRvbYGigN2YYrnxamvy8",
  "key13": "2iHMz9Xn4F8DiBskQ9UPV4SKXGRvmK7AYkuoVZtqU2vXoM395SYXcmY1A7XxJTaQ73BE9zSGBz3gqTEFWViiZX91",
  "key14": "3qduAquEMXtNHj3jUWz7ZWLmJp75D1cEoJQvHVeGso43q5KCkS5VTxebf5gcHBBdkyhG3npn2cRiy1yTd8vzvJAD",
  "key15": "3hZqcZWtgkeKF22w2beSAFWBFAAU6sXfJXB6dRB257hJ5Qjwj8yE111icXgcyxFekwrhBtqscNGcLESJwiiHknSk",
  "key16": "29swoqVie7noon3kJ73VF4hexvJn9Qvayds8Kph1EgJihMyhC52yQP6whxCoNiNwaqptqBTQseCAruDmdWDRM626",
  "key17": "2uxGxK9XSvPbQU6DNtmsx6N6BnN3WxuaKtpK348reTWr2ACgSTBX2JwhySn3CFoEV9ukS3z764xKH31KKNwbuihG",
  "key18": "mr1cJDiAKJQUfkpztGtoW2izBPYnrARiLFfHPWeYD8FDReqT1kA7TguU6B1Jm1qzHEzW23iE2oAiQSsaCsWZGZs",
  "key19": "D9QiyP9Tdcgwh9CGuRxPbtPd7JkMZideucHNb2Wwz2Zz7A7zyT39UjXu6vbYSCmZpw7fodngapu7qdk17njd92E",
  "key20": "2U7fGRbpDs61gKh9RgyxJS7W2UWnYqATS6yu3obGp9c82brgZyWJ1vRT1UHjicxmYfQmXiAfAicvJ5v7P5qoZQWf",
  "key21": "Xnui8TzJjcoUnmDp34JXCJZGr8UUL1mMpEeQGeuME9WPZBARoyJBP9tDSonT8KEX5SEJT5UEz5xqVdGo8kjvo3m",
  "key22": "3c1dLkYGXtDwYnjDJ3S7LVcWAvZvpgZQ9uw9QeDBZ7tzo4JEPSmTT5abh4XGiU3Y5kw5RTsjmMFbbUwLp3MFtth5",
  "key23": "5UmyyvuJKzudD8q9Jvue94j3iAggZapxCWdpWt7qUgwYEUmT2psrnnyxgvsrFLqHvLCmVAnZXdiZwikaKDGhcMYL",
  "key24": "79DPAhMt5BUHVfPSVHsHqYNfXgCzg3od9LqXPiPQi5KkJnpA4vvsJon5xg8TGPXYCb6E3Lhj634usHuEKzB3Sop",
  "key25": "29ZZMnkJC8aaB24SFyza1XjgKUoW2LrH46WcrGQ2ccg3W63Qt8YKFXSes3FYCPn8VAKBDJq5j97HvS4WFwEyNxUb",
  "key26": "2eryBN4cag3ibgbngN4ESf3kDA4hSYWjm9zT7fivgtUHoui2bMHVi4iZv2RJK61mbgZ4XcN2sT1W9WJBpik3scDw",
  "key27": "5d73j9Yd1uotYnmW5o7qVtyfwSK7NhrXTbKzKYSmyTgoHopa9f8CRcn4GuCwMeFmizBDhZsLbRcKoCm7Bqxj1MRq",
  "key28": "5UjPnLeccFuznm4kcJ2zP7pZ8awy7cdBGd9gboudCnGrfxJzQm1cTrUwdJYhdVtPPjEJsSRXhMm4rqeb8idzWCfq",
  "key29": "3DhsPxzb74tWYxHdJn1c7Us6kvizhTyDVqTfVrx4YeJ7ejRLqjvizKtopg9JY2fVJMhCpj3ySyVHmHvjMNoaKraG"
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
