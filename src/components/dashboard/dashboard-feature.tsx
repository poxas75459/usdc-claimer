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
    "3i51xd99C9in5Afgq8PVeAfDeVQ3otNkZPWDjsA3XDXebzNZDkJhVn5NwcoYZtQLQCzA1NYuJiaDCrtzoTbdLLgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oa1BvBQjbMDAgZkxasqUvUZtoQCZPm5U8dXJWRGfDHxwEA2WpaxLw33c2e1PER1UAckCW8XjENk5iKkzrfhF6ei",
  "key1": "5gR9WiioHCbTuW87X7ziFodhq1KkEo2ChMHrnfjAWySbBaJvCfWhroEbZsS4hT2LfXAeznPKtbfEZQRkHiWdj9oL",
  "key2": "3QZq5ag2bWH6EtMXh1dDu1cLaujrNMNdpPcdJzQWbAWsKC24j6KgSsmur47JrHDh99SqTEtTRmzKnAxWnEekugaS",
  "key3": "23WpPoY7dAMxvyQBWKKyARrBFQe9d2AKzu1kx4SVa8EySpvSidkHzvK3DkSPsqSSyTFdNdzFNy9fehykhuoyEC8X",
  "key4": "4AYZULBM31bQ6sCEFnPdq9aqWmTWE4uixz5ainAHGGBA37wyX2mQC8U5ghcMeyJaxceixW62EkNcZxr3r6Tmmiw6",
  "key5": "3UNjYN48h3VJU8zxqKUqvUoiKUpjECA5sdpTvap391GSgKKYLXJw3GqXFjHAcGJL8rei1gxXtMyRdAxLY1d8nsYj",
  "key6": "2gVebvfEuwAVfhCqKU86bFuCQMwntzRJb4uRSBNbLh6fM9X8qgFfKKj4mfsbm4tvWFQ4HZr9wcoqraajMxsEPZkD",
  "key7": "4iN3jgojDpmoR6JVQBJe1oN4i1f4m44AngBp25Tau72deBJfPXgVvMXQwWWhPDrk85V2Rh9PH6BTSQat49jt5rh",
  "key8": "3qdY3EDCE9GppMBckHn2kmVqqQDEKEVw71F9hnDSTYkja6pgeHpQbGnj4CZ3DFxcTvdGsjigXobmVPg1hmq1EBzw",
  "key9": "9jp7g3hGyfKzTGbpq1CGpt4B2ggwkR85vTMssMPe8mHQFedThsQD8Eb5FmwC3oD5rNE9tQs1kPvoQ52PEpW8iAB",
  "key10": "47CEQMLcdrB6oZczYGNxJReJEE4gXQXxHjTyjRhwYbLJ6Yc7SF9poA7w5F4pNNioj6xk9pMji4jCZySFnx2XKfQA",
  "key11": "3mn9n7ZZ51aoBLpjG7Cg6VBziZNacjTFJS8DXsW6uXTtCnVayMy56wZ2ntRBfz9SqEJKg5dwZV4YzXFmUtefatpm",
  "key12": "3pqcCuawMuNgsNc2AA7XS4QAwTRen4sMnZjTpm4njLhVuyVf63wjN71KMxmqgKmN8sFZbCGu5p3jQJ2bVN5A9UBK",
  "key13": "5r6Ff8ubwaRyHCNvj58REZq448r3gLmDGxqaeUkh9nDcz3s4HAXRg1crXVk3JzBLKzz2VifWLDoQbWk9bKDaXsar",
  "key14": "EKjygRcy8EuKLm2J1wtkQKJTYcN5nuzp8897EgVVL2XpUcbsmAzaWkEqtHbgAB4P7pimceMAkZEFrk6xgeWGkvm",
  "key15": "39LFoAHG35wSuKqSaxc8k12joHN39HU6g2zM877LB5LNncvKi2kg1YuTLCGWb2XneqnQABQFrrAW7YhQhoCujBTc",
  "key16": "49uyFoDorKUALnuPW3fSRRF2rPxEgQppuePxSNHi83RfMguCs5YGs2dMQS5z54KsMM95tquKJ9jJiuf2R4xStwFm",
  "key17": "jdaLwgtqs9XEjWU6SLm9XJvoS1V21MzowVvsJuic2RNTzzAkfjkMzgFBdLMBatjHFe8bnq97FzRVERkHou9J2Zz",
  "key18": "5hh2cgw7oSBiwtWu8oBbNBxvQWiRUNEiGLvm3TTbfMzwEarkjoSGtrpJ79vnchpBDdqV9QqfAVdrQUQAQdvafhTm",
  "key19": "NRpVRfyMx1gcScdMuph4xt7SANg3HmQRDF7fSxkXJYKaoSQa8fVFzPAhkdqAkiXCDUvzBnDGgP4PhCmSwEdz7S3",
  "key20": "3WEmi4weEctNaVrvXHiVejXEA77r8wVUhYPUk82vv4HDhT9W1SiMp3mvSoGZpwAJbipxWFVv2yYoDx5igk4JyoC",
  "key21": "4VFkJjrjVH2ys2QYqyHt51oLeHSHTGcxUE6sk1VJqteGLY5Kj9Tt5emC4zdbGAmSpZJXbMZstdzc5CTtazfaLJjm",
  "key22": "4FyHYmGU6AmniY8LKSby9eysaaazK7S7NgyjJzcrMci5Qdcm4pqMRnwKXmFyjznABUvkVJ1FemWqhfexzyHsFaWq",
  "key23": "2QHLKg7ogNwe8Q4H7DrZHbmQw138ErP8xPrYZKYy7zArNQEVd8h4RiaWq7VnmxLqNDZrLM7UB4czDDyz8Y1sCpsS",
  "key24": "6erZzrU4VTNjboKXTUJf9951GfWXX1uqsVyUZoMRvTzNfFG8YkEcFpLrFjPgyssQNoP6tHD9SubxkHfVkd7qnXg",
  "key25": "j6s1Mm5eWhbUfyV8BY6YmKNbkdg4x2BLmCcXmhgyatQRkqNN5ncTPxQjek7gmescn6CAwycQFhD2NautvxsbfLE",
  "key26": "21pDrFxniBdKDEbs5B3Fwqj8vYg7sooXaxXWCL8fF4StGSTbBER284W97qYkoZkMYfgcboKM7nGzimbpiGTi9gM3",
  "key27": "4ryQJiLwjimuFqoThFyLzo94ZDi9TXzqUWS19t6q4Gp5wpZvowqj91TbULY5s5BhM27nYKfsmLSjhptt5EchzCNc",
  "key28": "3FisgKSKb3RRpxYwcAwxjD665igYNGcypHs4HxZMrgfcLH35S2TqN8b2Rz2o6h9cvFEVHGzsx11eQ8snyzVHAPAy",
  "key29": "5J2uU2rsKYhwjy6xt7Xx4BBEj4u6ozkZAyDfejsHbvz6RGzotLKHaZKRLBk91W4nYXbYRaYXq1Jk1hAXCBSt5cAi",
  "key30": "4PHSeYL1N9XV5nmYJB9JKY94uow6q8T9nLCok4y2osbw8fHLRYUE72qcsUVvhz3rfBSwod1DiFUNKvzMn56RvTfq",
  "key31": "47mU8N2D41vdknGqHg2ZdLBZGgcAwios1TjC43YZNZkJixPjFWChy6rHfiX3viAfxNyx8NBTyPNKGTXbvW4X2F8n",
  "key32": "2ZzuzQo5vg9XRRYEgG7JiicSEj4LeZFBs38epRaZiG23guwrwGMUAZFPnkYzTpuABf7P1E8U3chqoJRubmkbsbxn",
  "key33": "21K1BphN8uxiNox6UJv7P7kYwZNB3BKMrRdaoZ7KEMfoDooj1Cds1EthTvEibAtAzBMvpHVYnCGA6fJiU9eeS3WX",
  "key34": "3E4UzoJiENyi67nJCMnHcGURsCw5cCttycdhN5x623gmjud8i9JdgcS1VYTw5X6gujWVeJm7WYd6P3T43r99SCFd"
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
