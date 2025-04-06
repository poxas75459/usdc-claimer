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
    "3bu3rTsSgHqQuomaxS3eZsRQnqn1Fmyxn86SHu5N7ppQ41r3rW7EcwaQHUn7XVzPvz56sHpRh9xPtd5ELPTe3Xep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s61D3p3m92dygYY5smWzRSECYovsZo7feDXyZw46ZNGuKUS7Bjrbn16wKpRADSd4sTUtA5GBCTLiQSC1kJE76gr",
  "key1": "2xec1bUhxXtC1PxBRS5koKWxWjQ2TUqkLSK5oMucFgCaXGVPoD6BoQT6gjtQTUZKDq5mC9fii4WuZC6tu78EvGoR",
  "key2": "4UbuwQR5KaaouzgxgqMVukXmc9PtSuqKPaCW5idtccjtP7SM1VyupHtRUVJksuMbNhS3sUBssPWPxQ3vZ3sJ6Ddq",
  "key3": "cMSBKLRYG9aarzvWTZawkkfA6qfxuvkPC7csA3VbZAxJwZgH66yigWPv1Em7JArh28bSePnhygPVPfnYwjYqy5t",
  "key4": "4JUTQc1a9euBeNnaHFnngpzYX9izwzoKCGZuHYg8mB6x1Bz5RCPXCErna43a7Z5E9gTTqLekybGe6DCXqjTdc33t",
  "key5": "2G2TvFNPybGrUUKsPruijCSfaDaxcfS1RGwQ9tDNp6iwtBpjquMdFDxUdCYdmLSwP55SJsXQeHWYXJhUmVGhnX2g",
  "key6": "2FmiJHCANHbjy7WHjdpdbP5ueJHxU3VFkusfZVVCFvTN1USu6NCEANvSiVECppSeW97G9zbH5n4n7Nnt3FBJYGhF",
  "key7": "2wrmdt139sUEpevdFPRm6Uf8UaR2iEcEwhEhfqze5y8QF5hULC5NNZyfhUJbf3fMKcDPmbmQ1vjwpNKa8rosvqAW",
  "key8": "62v78KgdZaiAgj5vggb3236ZXCFjWPDCGvTFS5d8DEtwoqFtbchVMfqWgECG1P8E5pzQctKQs5DvkvxuEQZKsF8b",
  "key9": "5xefEqd187V82Fo3hiY1Hr7xV55iBxuUhhUPaoBbCWUc8xempxG8sZ7f9HNoNkJvxRfpD4AwbQp1En4TPZ937feD",
  "key10": "54NkJAp1ha28BqiMD1pt1pFXq4TmrnwH91UDBD7hr5tYj5aopHcpu5io11EMamk2tYEfefQnBnATncxT2b2Qqnnb",
  "key11": "4DL7Q3zMLCJuXK15X9mLWjwwV3WKnyD5EnntuCYAowU9iu7qDPde8WnvWAn8q4zQLGZq5RqfZh8tNsAguFQLtLVt",
  "key12": "4vZKxVBQQmUZ6irNnTzywvFRep6nNh1GAczAhqHjdzNeDhN7Q92Z61vVMqDoBqfGmUfREykFtHZGo9rQSPCLbG1A",
  "key13": "F4zNNpjv972Xdyj8p4uC9EkPsbbgEFbDbAnPNXuyz6k8etb83NYWMvSLMKwZW7G6EVwkKw8JUfUhXSTHZJY4uUz",
  "key14": "YQDK3yQp56rHkRktMiqoKLDtyWDXeG8NtER4avbDfG4P94nmevuiu4cfAGsKYSXbMDE57CuNc9ZRdNkkqNUZCtg",
  "key15": "BoNuyBbVKweCnnmDu7RqUaSpNs8qJEy3U6wVPxTYTFhXe7VsRoyFL58gGBaJsimhNqmR7qBAM17AcTXNEzfBBp9",
  "key16": "25WWQi3pV3NpQNqP48MVUQ3SQKeb3gfdDRitSfwrUFbuHhawTuHbjqnHawWohMnsoiGudWLF4ocRdygM65xPGq3h",
  "key17": "kyrymzTFfjJUuUL7sDRv2L7PQuGJ81QPip8CLBXQFbZSyPPTktH2Whu1ZP7Kz4c7Fa6js5roGYiLqdb5T1GpJmp",
  "key18": "3vT8UpTKAjT5iwUxs1jtmQ6eJ1fAbAhgeVZQiuDs6nYkjaXQcs6wYaDavF1TrEdbo3k7SwrhmNzUE4rDLJoFPNS2",
  "key19": "5o4BBrsqq1PBxQ145zNPg1GC15BusKqJnivebZwHmUua5GEquh33y15yCn4AHATLXLgGKCV7fEuem8uuLKnr4whJ",
  "key20": "2vPpKth83uLPqjdW3U1MDbPqN9LcfDC4cefREsr7H3sU755ea6EwGnLwgZXHatQ1uM2P8a5fst7kJTEs6wTnYrCg",
  "key21": "54dttKMcdw2wTnmZ7N8dvCwxDNo1agY8Cb1m2gT1APXEstUowFiXbxqY9QC8tLTB7nSmeZ97sBHDDpCdxmx92P6h",
  "key22": "5tnXdBvsfjpCUF2PoE5bVzK95tAYJtAK8dEqkGvc3QPxYsU3XFC1t965Z1wzWTb3h1Gqk1FCBCHdFjfzj2aFSYAD",
  "key23": "2zjU1TN5N1WwvVSz4LzAcaaSgxBgoHr5G44it5H2YvrrP8LEceJTbVMWRt2TWP7kR7DTQ3uVsjnjiypM5ifq5dhi",
  "key24": "ixk6apH9SEDnFqpGMRsPsW4uKf39C4eWujWqyA3L9K99CMqJoEsspevKy2qKX3q1QxNuzyp9xzkCjBwHe4TpoXT",
  "key25": "5Xfv7UK8YFGQ5cFw1NTWuKgxPi9SLRrXQnd3myKMqdJFmZEz1f7WR2NpJSqWy9BpKY5qYgAAGLN9BQJJTSzFRbXR",
  "key26": "42wK1xaeEPTgG6ZwzmfBHDQw8oJYDgjRLnoheNgh9d2wBzC44c8ESKyL2HEkhJLjzWbcDG7EXGMkDJ7g2T1NooXj"
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
