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
    "2ifjXP42A5iJ697NjvZ3r5GTpqNhST4yxBXGeKCJrkNTfKfcJV175h1nQmviWCcMCtrSVxQGR1PhDF4vJJdfroA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vojVr69VHEpgDs8TZ6NptexfQTqtPBKGBPag3augyz3yH7CPkVihBRWyezSWriZLewvWQDP4rVH9rKtTRQ1ezxc",
  "key1": "2SgckSXFieD4GhDzMA8FgeMiT7WdwxsghkyxNyGvam4jrSgv67iHLu2nXR4pR7QyGde2d21MRngi6Uo4XrzHSRmZ",
  "key2": "3bNsmFmUbWVyS1S1mXnkULZAXS2SJaLNQdQfQjrDxR1gaGLUyBxbmwaPov9kvEr8WVQs3Xvb9pM84XbRjK3TzhuR",
  "key3": "4yjYQMvh7N7pqBJmHyWG7qm9Ppd6BGg1B58RMxcknWQzLEmE8DNK7nPheVXQDxGTqgYrkLnzMUxMwc65HvdoHNbq",
  "key4": "2Z6YE1nJqbrGbd4bMtYZ468obMDVS4rU1uV4QgpknRXt16DZj4guQ2roFrCX9Sa9KaEPwQxfvaR3NRK5g2ungTLH",
  "key5": "4FGJrJsSauaYSkvvTLG9qMGGdsos3XdPgho5pLnWfZdKhTgWYTCw72Dn3bBwnwytrYedxVJywiRW5M9Nhx42cEjK",
  "key6": "5vE4WoNbUgifrwk3iqQzdUEuWcmuXtWvuVVSSEcGCbRNQSoE87vcWf6imiDixLyHz2eiAW4nbZBMbZWRUd1TENc3",
  "key7": "xb7jJgX1ch5f1pfHUstwZfnryE48kndn7hcfaqc5MoUL2HVQKec4VdsZtcrhkcWm7WqxUUmZQGJ2VjQDGpouD2c",
  "key8": "5e4zdFEHZgxxbEZMa1uJzA9iDVrrvfa7W6u7FqDYdDhRGGY8Ghb12mCAbqiQ9ZLJmgnStgVZJjrbNzyC8DZwHqHA",
  "key9": "4A8yBqP6TLPaJyzr8CWB7tQYbrzz6vv5VkJ4ZTBk4XVtbpdtReN2EH1VxLfMXyByte7P9JNkBVjCkpEAFZ8akGER",
  "key10": "Q9PirQJafjJtfT3c3L8zKN4D6WZUk9T3ybAoSPP5KcEwLrSc4vVcaKvhg3AoQtGHjxj7mPq122zSw8MNTPr8sR7",
  "key11": "61UAxTV3HquVkjLWZZqvVTcEmoEsU9dz14b8DEAJ4dUz1XNs9LiXzbrAmho1oaP2Ekiv5WScAiCP57UgDU1pL3Dj",
  "key12": "42CnNk2d8CUXRX1eNXoGk7CkVNM9fBjUuo1vovKWtPbhNnKuw5QJ3Kk89NUorkpzmuxacYZVQCAWiNzgG4x4NwMg",
  "key13": "4cZc6GMXFjunLta5exsRFVv2PaxAkgKj4sLZ65L3zq5heKvYbbDLjhwd2YXH9vWxhYaMUAosCHYyAbXBq31xPgFn",
  "key14": "J3ikza8Gx8hZCnocpUfLK7pWGborAsDSpkkX9wTH9PP455YoCoxbteGpcH1HWzMJuhFzLNK1AfML2zJj5kWvEno",
  "key15": "wc7AQSSUYn6pHHBmybPiye6p3CFCh753PBfTJwNRdArfBdRUDeb5sW4jyL53fNM3iBWoBULtvQb5UwNhydfjBvc",
  "key16": "285CWFttBJGbQPBAnUA9wPfipxQ4UkQBhMTxNvwtbQTJVamaV7FmAPXouGLfyxhbtPpB38fHAc5eiWdTm4iaoBXj",
  "key17": "3Ehs4jrVw5d5HqHhjxbrXjVu4Hfrkccd4Cn6J21PqLW7tiJVPrtmxiPdBskHKtNeFMR2WGgaw8yrzpFYCtPYgc3S",
  "key18": "4V8xoaorggBbfniztRipcGq7BnuTWc1mboMNRPZESDeQNMZHMAC1rYYpGQ4TXSkcqU1J8Q1TMBoCMn4QrmNsXkyN",
  "key19": "3zcHqnocmJbLNSQTi8KRZte7hLvr3YiWYk8sajaFMeTLc4iX1gEbXjberbzHDrvjnqZUEzfRwCc2fpwJzvCqP7Cu",
  "key20": "23pWahXZrc34mKCdAjdUPdfpoRoyCXNCdMAMcCNykAVfRWwPDQrseLtRHe5Nh5iTQWkdTpBkUkKo1xmojKx3Ks9H",
  "key21": "2iXtiUCHN5EeuvrNAKaWBAgCs3gdWJaXa2ozo7qGJwo28GQpSoB6qYCuLhyRMqXmyDGsPozj9RRHbEsS7EX3qhwN",
  "key22": "2ojEVpFijSBQe5qZ5F3ceVimgin4jrzA6R9tKfgdpQpgWeAdmSYte2D48usV2j5Nr2L9V5TMTKkhh44Z68ekKr8C",
  "key23": "5MuHVVFZgaNDTYg42NSPAjR6XLNYyFodFhDfUKZyt1wC6jGA1McsRDxXjYFTbRArZHPPC4Q4ZTzpyY8DCkaAtqNK",
  "key24": "3c9uwLbhKEePpJZmvQcLXUiQ8qmyRzXnzHjySEaX3f3uFdkjtBBEyem7QwcGwfNMNHqMTkEqXWa37h8rLds5DTwk",
  "key25": "2gFDwwtLVForgUigHwGHVAjgc1brXCcyEu73bkvkGqxfFaAqFpwiH1MJH7ZbFRAhL2w6N7TGtM6PNU22s7rakCVr",
  "key26": "28Nnpi752AvFtk1fMi52aALS5cJ6zAWSWaQoqCEExWXmnCtPcgdhJzN6JbgmUoyyeJzpe7uoRc7hT1SNH7gWXZwR",
  "key27": "21fPSeuNPNurkJa1maufM2FagqpPCWw8XFcztcuQtkNDHcXJLPzRLNyAfVL7AYXq4fBHSw1Vz7qbwj7bwMKoWPao",
  "key28": "RwDmX1ETmsXEgTcLx6AvQPGeVqSvsjNcc3L91dQd4N9MEaktT9HVH83PbXE44G47Gfcp2eyWYsFQf9Xd69QgsNE",
  "key29": "4LsYz5pQBkQnenHnjehVWMiD6yVwdBsJ8dNUtbs1W6QsWbMmyzu7TX2wqJLjQfybCVdcEEhBQpmrCBKj4H1sWBJM",
  "key30": "VYoi5CH9sfJTLZ6gDow9AtoHCtbEZMmxvfqgYGAKovoWYkpEyLhHeGZ2ocYazExbcufP8YYADgaxE9kHe7LXdWD",
  "key31": "GHD9a8GRpDn6vTRmhRWaJ7v6RSabdYiKHd4MbUoU3wQSuGtSHNjc4TvsnChoi67ztr2Li2HrgsiAZQjoshLk1jw",
  "key32": "65apvXdykLezJkfRRcaE8PDStgygujgAJFP9agcUQJdDFfdTS41M7TFoF4WdwGepu9piG4RAAFXVDbQyK6pgjahN",
  "key33": "2hGKRveRJvHX3nzw5H6cwCWTK9Y7VtoL5rpEiXr8v3E7F4xG2bw2X2Ka9uBstJB6GfNSQ5jBFckK9Hh3mLYQ3hsE",
  "key34": "4piJBt3wxYg4peSccG1WGgDJyFRYLJZfPuDjRgwwQoro5psTAaNHJEVG7RG85NEpWFgXwrGMVc4f2938Z7vPS146",
  "key35": "sBaYQPjS9KJYff2hWL6vGKoLewUm37bLte4wXANhA5nkdt1A616E4wNEAzsJootHAsXeG9dwGBK7WhHK6zk1T7r",
  "key36": "5GZuy4vomvWUQqZb85FRpqDbgK1GASHqUJyyRzNq9P7Q4H8ituUm5xQu6mAi9EaotZJjn4x3seVdQMkn1qjPvtyH",
  "key37": "4BE3xf4NMwF1pCj5iCDagRCPG3Bez7QCsq254qHiVgCbaWmopJoGENrVtuqreM4A1vESUnmJCkdx5FJzmMhhQBTL",
  "key38": "4NNmUnZQDeLj2GwmG7Cu989M7SCpbtp12vcqZeLjXxZdYNRMPHsUHzhNPZ659Ltb53t6F4LrXfGTLdg6NmWRwZdS",
  "key39": "KpJ94d2Wg1gBrfRNgu4DdHjqvanL245V4vtaFaBiFZAzRhLpifQquqPtsEFqgeNz7csA2SAXeBGFPT4JWFEjYSe",
  "key40": "27BbYgbZUqmpzgbgkzUsroUD59KKtm8wjwWyJsn1UWNHjjH7U6bFTy764bm5ogFm5Y4me1w9mU5qicS3rArMWESv",
  "key41": "5mCfXRirvh7hVhsgEUPMkvRL6yAePFeUg5X85o1WiPCZNdNWdPbC19EbjFwmM6FwaevW45HyzeYR6imNQqUDiJs9",
  "key42": "4Q7p2Jq12hEyUqDg1LqqUyJzap6JaNLf2rN8cHDTe6H1SxmdUpuh9ZxY3ZpZowJVVQB8j9aMX3VMF7cpNxuLiUGi",
  "key43": "5chyPbcX7GxaC28kMTq5SVdG6nt9WEmfzFb9aiWmgWc8uqQzsq9Z1V5pmxEb7uhUV31BKqUAHWAvcVMUPbr6XvsC",
  "key44": "2JY9PgJLEmJ1eXPg8K8KPYhwgLDZGXxJfh43tJuh8RFGZeHF199AtVF5dWuE5sFYXLKMA1nKK8Xrbzz8VCkk4iW4",
  "key45": "43yS61f1JABL28NCRrDL2YZS2aoKtzGBr8Dnvd7oB9UTdSKNn6GdLeEUmAjJLdZBaJDV9v2R9wsYSQv2uWLZavPY",
  "key46": "EK5KexdNuxePA1RuvLFShe1t2QsSsweNB8bUiKQ5PMUVGUhPFNSoQrvNj1syCh2upkgYUctgAmio4Ak7Ysq5MX6",
  "key47": "U7wuiCMBqyXUyTygKD7RKXm9FeQH1NR9mjM8PuvsmHYVfmS86FPuhgBkCCQjyQYgkinHRHGQB4jE7VUJYvgvd8f"
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
