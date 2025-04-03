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
    "Bo8g9xmZks4axK3Q5gSPFn3Xf56uvbaSZKvtfjiKYyBCxqD9qCoYBWYkuDA7E66dYCMnYeZoSK7BwXeLp9SbaPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x5gM4P9MApFYDQuVFZCNr234T456C1LiL3by8y24BunRRqXdzSow8r896bCUJNPBpejUAT9jyABHWTQKFqi53dD",
  "key1": "pz8UWHtNEuEiYQtFmqoq78taJqb7dogyKy6kdztvBvhmp58RwcCrtezKv9pqn5dVUUJKwHmypa5UpGz3MecGcGp",
  "key2": "2JxFo5pWS1VbxNMV72ySVwWaDLqxb5hhSJdQ2j3BmVnFNNiZLFHob8tp3LWFGhDVuHrNWzZ9z77wmdKUrYp2JQGN",
  "key3": "4735B3x6bx1wobwDgRwpEK4PH2xSEubWqkbyqxiCktshcMizBLkVJvFb2yyBmM9qXUiiC91dNRgbRsko4Huv1gwR",
  "key4": "2vkucNqr6oVgs89P4tt6xPCs9f7Mh4pa1rUqKmeLHhF5yWgKsDfhV8CJHrnpLMeACzZvzysTbkzWMWcZHZ5zCC9V",
  "key5": "66pqT4WZFraBhiYmjh6Jh38ZW99hn1Zf1AEdKEXG8qGHwd1Yhb8AymAaoGumRSezPVkHbEN8bP4Ch56AsYx2zkUW",
  "key6": "nq6GCPUBXSPaqvoqVi3kL4APHyAJgTRHQg4JraBftxhEjpMzvpAmSmhjGMEHsBRxLXyNzVhiUvHXcQY8u6j51jn",
  "key7": "3LyeNpdzuoJLMynnr7XPbxrDZF165Yg7TALSDmwabSB4YR5fZcVDFmNnZTkhsYTfbEBb6QiET5hLGJUa9MtQnUZh",
  "key8": "63pTWn1717eUCKPmfDxvEyKEUMQPPfu3qPfj7JgqBSefFEQY2ij7Uxccw6UHFw5siwfiD4nNobtmd9L8e3LZtWx2",
  "key9": "4Apf3Z7MVeJURXnMYuxwR5xFq9ZCKJu58F8pa4CGpBbzzNSzEBEigYYMkPJVQLUD1gUix4ANmj58sxSBxsB1GZb",
  "key10": "2vjJAdkFQJ93bba6GWKsBdniyq48aoM7v8YCfFYSJG6bcW9MyVRU585QCqFp172GFxdQuCkP4YFwbeKdRSgNDh25",
  "key11": "2aodxX8fmU1HsgoRYMHf6CNccGuApVbeBaZbvV8j4BYDuL2nd6yaJTMoMdb6SWMwq9dkRqFU1wpuT1n4vx4s8S7E",
  "key12": "3keFmEBAc1xP8BigL31ChMyar6odcv3Lt7deKZjamygTxGKrEC3ZeLNw6qnRQdP6htBaVspU4t1kzVXmKSrvwQM6",
  "key13": "4dpMKRK1y7imS8AMhVVtE9AdJ3FggkQ2YoK76PC89pfATL6s8cY6RfjSWMcs5dmm2nao7MgDRug1FnEzfFuMvERE",
  "key14": "5xkWuUYVsAZuVE4kk3wkAVrUrLxSjjSKxsxa81AGF5UUo8SzyEiFUDcwNXToSwDbtJAWa2TLVxQVHmUCm75GC2cy",
  "key15": "2MAu6DTU3YteAvNFDdyizBpmp5KJKC84sxjeWTdgkjFcw2aNEjxbvywSAViASbkwTkMd4CTUkfQaGe7qzYrKH2i",
  "key16": "5Q6UmWj7J7E7h6qf8KkrbqSx6c1gMZH4XMUhh2ZKNhTYkMRMhrrKmHGEyBV6W5XYMPGhFTc4L5Ru85c99w5pPyfr",
  "key17": "4ETETfZthXeBSBbiKdGLaEdTMYtvQKoeBuDF3Wt467NPg8Pjiyrw5ayzM73Nnp8VWAN53dZ45CYnCJksL3jC23tp",
  "key18": "MKBE1Mp3j9BYo6mSgRahPxu5WpCbsiCHLHQkUKeN6KVVFTUWZDUz7qxkMEd8uReyPmE1BveB5Lu47sk8S2v4fxj",
  "key19": "28xrusM7YoraekzpyfRRrWuGfVmbyuNzNdzNxzVJptyNEwPLkXcmBJ9nT5vfcZmzRCfD6nJfTg7Dq2XEJsDykpiA",
  "key20": "62Cs69dJh2EHorarorKszBwLy6Nyhu1fuqWPXeVx99xSC8EsB1ikCmhFR6kFjLei58qvvfNeM3tBxYAzFzzbNz8G",
  "key21": "YwthGCkE2oNZoBQzpy1RDHp2JqBhfaHfL91qF9eb1yNHbL15pzjbKNtuziqQgJM89sPjVEMqM37hjGLTQsQJj2T",
  "key22": "4xVecfnkm5H3dRmMxS58CkJYFZAtU2HkHWQTsErHWMMZzqi4sbBhb7ZnqQvs97YFCGWhM199tC18v7kZNRML5gpn",
  "key23": "f89A1U8jXp2jg2oBG3ayCDYm9aFoAXwTFczLedHrD9X1H2zzw82vWRwbgnkvMSj9GcRsaTR1WguVsEMkSi1omJv",
  "key24": "4XxchvVN4Hda2E1dDwYKnTDsS3WWvqbgpLs5Bewr4AcTMEdr6Rt8RCzuJsmcJzqFAB6XQ9Bn3fuFyGYqU1kPLDbW",
  "key25": "4x3pUHzbRcSoLfJiPmMsAZwM9VFPT5mHAZG92PjQn534ybBQQJiXdJpCX7yX2gfMRsCmeqBAsXFpXat5GcgfonL2",
  "key26": "3JHumTW5rLvwroavWhFRKdPzL5jSWuyugduDLoQSMSzsdm31CTDaQwgyjMJ6cB7fC8GNfK5mahp6H5qp63Ph6wqV",
  "key27": "3KHK6Ht6XzGP8V9xU37VD4CMe97TC3yjMPHnhXVtafXKFPDeLmsov6a357cxCrY7sugZrDDfqmGRtkrPjqQBqqiy",
  "key28": "5nCXFg1ETSeFVU9nfQVf8KJFKP6xibGr9xK4FF15CBmHtSA1XPdYVBpx7BGzS7LkwhmNtuhE9SQXzbeeaQa1jdex",
  "key29": "2HcZ23X55Q3QPBgi6fawBKcKB68UCBganBNNY7T2hncE8SZ8J3RWRatDW2Tm4EhuH7etbk5ta7s6ssRJL1mbpWxk",
  "key30": "4eHGSJgXcb2evh4uCoGd1EVJfJvxHvwVKXDLTFLyEsKq5TG2faNB9TEG8XkmfPT4NwF8zAc9uCvhwD5vk8hEWBPa",
  "key31": "2kcvh3ZcP2c2YUw7oryTQtbTf11CJhgwvD6BMVWHeaLoLua1ryB1emCyiGzHF4Tuvbq3NTz8KGtkkHBEB7jubGaq"
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
