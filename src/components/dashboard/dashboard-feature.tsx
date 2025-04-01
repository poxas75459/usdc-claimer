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
    "26BQZCrRtrnk6oa3hEtinx45ixKNmNR4pgsRt5Ch43Ht3Dqe7v4SKhJqUqNroMt8XPgFNZvNNhusaz6ijaSWyb7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JKXLcCu2HK1cQFzj4B9u25Vdx4HKogJy7UHijKcNWRBB1g81zBXVETgf3Xvut6qmjV7NJFZwYUGg4xN9Negpyo",
  "key1": "3h54b2je8EgKa2hn2qjP7zL8mYCRqarbDMBboG7icxrxL93uPEybRkFiEqLJxmChjyoSDQf26qnD94a7DpRN26bL",
  "key2": "kHwMjfPjMeDkXJgjPiya322c3p5CgXftrS2tAwarvXYdsykGmM94oFicV8ErAuvui7Etwj3vT6qURybHx6t4QXa",
  "key3": "qgfkQFbARQdNqnW6e2WidoMg3abMKkWb8AD2ByjCzQu42147bgZLfVTTZPxvfwgguf2kvriMuPc8mp51YTxXU1L",
  "key4": "5P8bZf4jniwPxbb8YNf7UNFSQEqEgoY8qM37gHmWevZpH5Axq8QgeXHZxWAKbCjmV95SobZcLPHR7DBLGxb3Zd4s",
  "key5": "4pmt6WYEu5t8XsKahJpd4oX3DA98Y57ZVat8PzzHh1uwX5JyJvG5aSAhTZ23oCPE3n1rYU8TRG7Ya7QJpDjaJm8h",
  "key6": "2SNGdo9bRVcpjZbJSVZxtKJqCoLudRdgWz3HujqYCvTa5isuu21UB2BuyJtmerHe7QfMxJaTRoCTTTZ1xzsfEsVB",
  "key7": "3UCqD5ehnFLivEVdhKSpuLpJB3psvi3wQgWXJ1jA2DSp6sTGGLiux7p8ckyd2RGDGrDUKcp1Y4u316C3HSxMafGt",
  "key8": "4w3rAfcsTZMaUM9AzCB9Gtks1K39arBXrESHeSumJmd75Du7CZ1VnHHQF28FmyZLRCAzEr3NZiiJpUEew6cqw96m",
  "key9": "368Mq2LAvzDaXvGERRNAiSxmGKboLfdUyod2vzsC2t4quRAB92g9jwitifG7P1rJHUQ6tNMGDp9sSymJvA19dohj",
  "key10": "QH8UzJW4VBogSieve9z1z4zExXqbY8FBSsezWMepGFMZzDLyiGCkyLeDA7WWeXr7ByNjBBrfY9shaoo7mEPMUUd",
  "key11": "3zJye1UonNJvAXz46TRSEeu3JmcPxqhm5dbd9DdHnmrqfuuEXazKW1b8JthfQmMX32jtptRcYbbYvmLso3TShkp3",
  "key12": "4vAakuhuioVoa9nRKTmfG6P8ZMz14kg1bcmzhn36JiYpVNdAJQcychQj567nZ2wkS6tiF5Lsiaza1KhmfBC4Yxu8",
  "key13": "41CCpJkN5SXGZXgDEipS1NXgRKWcP57Jh15DvE9ZrPYwSF21F3rgMWWKs9LU8gArDTwsFiLyGCR8PdbYfmoSv9Dy",
  "key14": "45E5oPeSNpUQL5XVzQWcXF9AFk4SQ18Sb9YKJDTi7N94D2shdBo2sFt51F3fWS53koTydWWPS5V5DH2G9r5tPsrH",
  "key15": "3E6JeNzLkNa7uxtzbo9kRBVdUtMBAL9fdWqppottNCUToayGVjuV1CvKSv5PBWvFxZ2DXrgfQNSAmNq4pLdYogh",
  "key16": "5YkAXLt4pXDSrta5VUXAPGrespVJPSpA8ywL3CM1ohq7aw1tbExwKqSA689MNA9CFE1R94niiVmaWCiumgZBaKLn",
  "key17": "5US5LSDdeyuKUVLAbqyyfZbcuzcRS2xj8PaZDnP33QayArfU3haP6W2DQKYaAdpgqETdzLd8Lngu6f8jtFN2YN4z",
  "key18": "5rq4sUtgUdqPwsvqjFcKQUj4pttcW4Rbpm8HrwLKE8o4khJDoJYY5Za7UFtTzXsfzcsR5gbtxiCkVDv9kUuaPG99",
  "key19": "4nCU5Ah2LhD6yVX6G9mmRyob6yiS39FVxeRkF3BteomYqD2RqYZLhED2zJgHwSd6gU9KAatDDyhhsBYtVFBu2MAh",
  "key20": "2dktLsY9jZWZMzMugQ5UD13Lna4oZYKtvjYDYu2sy75DqVGNUJGqKjcDysMQeGshYD27L4XaJiJCEEi7oJe3mEJ8",
  "key21": "377AFpLx2KaJ5zE9deTMqLn8zY1pXEWFSPZ3ukAbRnBi64Nas3Y6HdNDY1g3zSPNYoCS3fuyzzNgSpTkuA8Vsqtp",
  "key22": "3DgUWmHMe5BZou7Do97SfMAMWWfQ1HrHUS18DXy4VHmkEZnzcz542TvAA5WmXGNXgZNzwGNA5d3vu3mKZqQHDXNV",
  "key23": "2Lciwup5SGF3JJRzzegGTxhPLMz5pkwFFHUvzdji7PHQvNwEo4DVEPxMJXoywRGKd8j9pRY4aNYMNbZAiLoy6drr",
  "key24": "2k1UQzWtRK7Q9Sm4nX2JdJB7GQFgzuAPiRuiurCV18gADAso8n7HZ3kJL7PpyySngkqFNtifCb26BhLZ476JYz1q",
  "key25": "7V7T7BQZYdMwXPok4iHu12vEeZDPQ3eS5TJmKjUZxAk2UJSnWjfu24kc9yx2i4dRV3dKQRQtK7SwuJVa7kfPJbz",
  "key26": "VS8YbWDc8bhQEY3BDENPiCQQg4Hs87AaXdVquK8eCDf8yYQyNPofnM9zaSY4fJvJoq96GJsxzuSeLNPNrCzG413",
  "key27": "59cDhP9bMnYj5D1Yr4CDZzkyYydL2morCwZM282o33z3dv81ictEW5n8YqSFqai3YbKeEjYBPKFSbz5ZWo933Wkp",
  "key28": "5gw4q7ZnybtGRQBes4T2ET9K9LnH4ivCYjcYdWbgcpUpd5qvnhDuznW6ca67GH6ZDAkykDfvt1GFbMZ4KqQpPvQB",
  "key29": "4RGdxCRZyDus3BRwxiHjp8vdqJVA7feoRHVz8vYcJbbXSwLkH5Ue2ZZHdArRnh8VNVtRQgT3RLWSpNxFj4QUCAJz",
  "key30": "5cCQtiFhnTVSrYEYubFmKmp5twPgaSud9uxaSvZihNbpNXehP4p5BcvbXSK96kCPV8JXkCFovHgHaCeMZtvaryae",
  "key31": "656rcfi3YjA3PgGzz8XBJweAKZbXvvSCHAAfZj9yk9rq24GoUKwyxT3HyeFLYVu77of2vwcJbS2peHoiMDFWvyJv",
  "key32": "5aGBHqnxuZKwfWUSEQDkV3xaBJyM4tooaXZuyE77LHZ2mWZgWfiTUX3CJESyydvTP4ropVmmDQ4cFKrZpQBW46g7"
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
