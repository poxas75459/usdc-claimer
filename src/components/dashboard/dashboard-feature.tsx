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
    "64HDLYfsy1hwQzMx4jS2zsZyeuSzasuMKsbSMw7LNhsBVCrYpeS84rMZi9KbQvQJpGXYdWyozCi8S9VxfMzFfmFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48uw7rstQCwW3kqkTwDtW4ioU1vvMtyrdWJyiHLbisZ1NUYpEftNZeKsrp81efbDts1mvRmzdKWdsyj2aMdHZWZW",
  "key1": "429Zt4EEFnKMDA3RHaX2cncLXk7z3btxJjXVBH5o3vxCSebjD9zMSjb2vuHHWsqr8pe2QAR31gAbzWPbpj21dA9o",
  "key2": "tir1e5XpPVyQgAYpK3A7Fwa5U3bPoNZzP6MuAMcVbcZFJqLmSHrxVUuyKBaGh2jM2hmb14cMs7wh872BoNbR4ft",
  "key3": "4TpPLsPidS3oEjZvJUEwzdmRGcNnwi9aAGrr4fp3LmTf8Z8tToauZA2yYEHxWS5RqhLHDF7karhsvLb77bnNCHrc",
  "key4": "EF4hnKr1ddHiFT2PQNRfdMu8qtPpDZJWujSkYdumhAkpx7HhvP6WDq2K5JeLZpGsXH66VRa7BuP5f6eRtQPMr3E",
  "key5": "3UmkNmEW8TBxY8jtRXWC4Q1cXB9StDaGcSBDuctKEYKfn8t55jg5rhzKKJ2sa73KqiLo2wEhearx1QxtZzNXsibJ",
  "key6": "5KsCEHvntUw5CzqmT6uiDCkVH66jdtK7pofXvDfXJeDgysjXSdWTe2cnzLBrXYkGbP6aoDrcY5ytCRG3T7zrmEez",
  "key7": "4VzqXjgKu3ZWjQBQwXoWN6fcvcx7utdgcm9NyNpXQppdh68QMwr3hfgKQXhS7GmVWSHY6exGJ7xABjg8SkgFJ1GH",
  "key8": "43j4kgUbkqd6BVCp3r8gTZqH9GFwgRzDVzdoNHEtyXyUkgoy6AMxK9bkKcj77gpwo5HN2PP8BUq7wMszDhpiH3qi",
  "key9": "4PygTGXeszY6mRn9BJpekoQq3abVjp6AN2yejbV12AD2Uv22UUxU7TxmHLjqY7BhcoSfyjeF5nH2MYJqFiDWPhkS",
  "key10": "3TQKiHzLnjpYPw5ZLvh9wz8nCKLLMmN2v76MsAAAehtFL5f4iZZSfsBeJ7teruXQ2x1bF5iZJrrXGKvgrRLq8dJy",
  "key11": "395fw6g7QkuWN97xkgWviKwxtYZ17ZkBF7qxq57mzJ9TQqajwfpB8J3fNw22pkki5EqcXLg7pLBBupk8dPj8cvdb",
  "key12": "4jGqyabgwiwJUeTP7qAUT9ti3dCEt4G9E3b1ZerQA5LVZ1P9ph7X9ziJCozWdjfSE6YpW5ZqXfSANJ4U3W8etnuL",
  "key13": "2MeRBRgUJ6W9d7u7AsPyQqQiBNwPuz6YwV2BJPwJJMHAzfJ274Av9h76EgZv37yEwui68Q6bLvkzRBUbuUKBbKbH",
  "key14": "5HHufFjwHuev6H9QqSfP4USGoq5hoxxM8mzMMX3Jh6sZwYh7EwfNSQNKg5SkSiGT7EZE1AfoEUVbqYdzSawiuWvw",
  "key15": "2A8UyRLEFm4USNbK6eUhRBMiLNEBKnDibTXZhe1MNKAwAY9XvmcKqu5t7GyfraurT84EtMmi1Wo1L1qZvbX3Wk9Y",
  "key16": "3hEboXFApLB45R5oRPu7Pbm2GyGYRNt6ha3etWid874WuXUXvtPHSPg5RuqQWbPoGYdMACA7hVxG7HQevCoXUqcy",
  "key17": "338wAVYqh7bGY8Gw9kMEbzD6vDkVQxTLmxXLRGF3o1i97mVF8Roo4cVwP1xTF6ZoJByAtPrRvz9Lp1Yhr2Xcu32i",
  "key18": "44gRiUNrkJPoW6VPZKFyZWANjArDd4r5dzDaBYSUBsxpg96XQgJwJhUeAJDjSt2ERWYQM9pa5PS7vXiQbYuDo7xZ",
  "key19": "4WLWbQFULxH5wKgAVDLjjMy6KCyeWcQgeTfCSXDyM3XPmvZCVZmBkcX38EVGBAzcqajtvHfPusXJhK75TJCiJ9Qv",
  "key20": "5rjS5Cwq625QxZFVKno6jaiFcGq7kHdtZfhEX8ZE77yHphRQD3CLvpHBAeRzPV7KwgryBKFRFkQt71QcPtdAMJex",
  "key21": "2wv7e4rFEb3nDAfr4uQj61FviJVBLvtFBavGfXexLcgCYapiwhWAn2ZPmc3nt5S9AuipZRHm3qgfqKBjYXQ8LadM",
  "key22": "GTddkzXHmU16BQeEgUikYcTa9FwkF3aemVgkgkSya4qwNK13hPEvX2WAuSPAv824LN8jqE1MarY6FuJZnRPA6wA",
  "key23": "Kdi5CAd6R4shMSPyfXN39BNQyxj6tzeR3S8jqMRQpfSbRERUVVc9mjksjYbmRrZpyUMLrB8Q1gNhKFXfvnssCUZ",
  "key24": "4mm4otwBr9N1Z3qDWrAujTJYwL8UCsLJJ1eUNeKVztXSEBWjW6DqD9DorZ14ghLakAVAViWs2ta3wqXfs12yX1La",
  "key25": "2BGGBd1e32KxTQUms1TSaJPTw9RoELjXD9cCrjiPu15K3Y8iCAAH1H85SFqCsvBJwSU6HpXLkJSvqrcA6Q1c6NZz",
  "key26": "3E1Cyka63btc1XrNFDHmPdVjswuRh76PfyAW8ew24vGPKUiropsWoVWP7ZaZUgsNheDBf1SEn17Lo2ws6HHhF4tt",
  "key27": "21KeRwn7AFDYhBxobfGdbUhQTko6VKbWzDV9yMYtw9twgB5zD6Ba7Q6EFGDr7Q1er98tmqxrKNS4UAa194QJXwrt",
  "key28": "2YGjxK2oymG2ZibsDmmpa53iyg4GtASTMWVAWA2jFGNKoTEiYybUzhmmZgXBqM7JACyocA5Z49ceTFAcEb8Rv3gT",
  "key29": "5cKiAwvzHDEn8K6ArXBeH4DcDRWC8Avm9j3WRiXnvJaCyafTzbwHrJu8H9dsne1bkyuEL3YTQByPNYyLCusRVPeK",
  "key30": "2j4i131fpysjBK79TzyuAzHHUes8yrbqEzC3ySKPVWhgqAM8xpqgk8Hza2tho119LTHc4DPA2MDjJdVghYz3WdWN",
  "key31": "2zb4GPKKFTNnmQNxKDqRZGjFgXkKEk32uHFVULqVCFwzdsQtLerkR58GeoRLPYLsdz5yJFm8oaYjr2YiagQkUhC"
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
