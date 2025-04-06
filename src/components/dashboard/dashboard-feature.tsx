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
    "3a76t1C7wNch41iGwyrCHs5NUEY7df8JqryvM2RRr8gey8K2KgMGCkCwD8V5Cfbf7qz2x9T9VgznBrpvHjAMn6Kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pZMBLtjDhzwrhUjY99C2wmRo9tgvcDD43gyXLkaYGbtJfSDSJCv8jm5WDivZfDFdrDCdYoZsYa31m6C5oiFKcw8",
  "key1": "3EsQeMQArpC2TuZGisW29WQ9HBGW5cvQyDpGvcnkJJL6qECDgecADPi6PdoXXR1BBdHe7stX1d9tse6715ikCa9Z",
  "key2": "3aMsWcoCwQWcnjz29rKuWzbLXhzqJPvXPRosHZ978LzvKrHrdDFqfiqgRQ3jBw8ffVP8tf4sWND33JQg7PdFGDbM",
  "key3": "2DAoF9MrQ4qHs6WopeLXyrXm4NqpF2fMQv5CPS66GuR2A6NuexuMCUqnHHtgTRSXyY5wNWguFFDMgx4Fe5wRqrkw",
  "key4": "3gVtWSJJ3ZmvkVgrv91cHeEsTTJcbAgWmczfQ1qjH7UA9JuNQfHAfTktt8LYek3U9eEgjUxtkismCUejnAgQcomJ",
  "key5": "34qXZpVVsVz6KszXGcXSXkMMTdJg5AMjydgmV7eZVuPiZN2sVdU54EVWKRfcPuZt4YPMaGzMnXTC6NNidJx8T6Wg",
  "key6": "61DhETEFHcp3s2dyGUQi1WB61UNoAoy3pZiNv69GD369NoYBwVdr68DTLWFNyYZCLjJ44BaFAyAskU2sB2WQoyry",
  "key7": "44rCuEdNEqhc715ccePNkjRJ37GeJmqWVCfXPzSXvrMMdL9FxFQw23u43wMFj82vfXbVUhXMT15qwvvxJBMCPP5q",
  "key8": "4se5NP8NuA5x7odUjemvK7j76MoNHBqcKMHdmN8UNUvKa2G4NAXwFVrS5z9F5okDneAWNWq8g8QJrJVQsyqh4LzL",
  "key9": "3XkF5JGKskWFBvVRhhmgbm95Ra1yStXkNw4MdHLcFck1tHg3MQK1fcLveXk6PnE4AxhdjLPEbQwRd5YBdjXBipHj",
  "key10": "5k2fd4Du94N523S7L6SF6TkuPAqXcuQMszr7JNwdA14PZCFPDZTrdiMKdJaPMf3Hvu8V4fjTCebXWG6yN1YstfF1",
  "key11": "3zFVEyzukZUcrMXvXJWvTTzPn8Gw4ZapqiHfhvmFhdiyFB6JDXyDtKjiEQbYUPSagPvJ9SxVveW8aoJJqkd776KE",
  "key12": "JUbyEHun55dmLpHnLSmQJUvwRg2eprmjyxDVxkLsdtU2yeg12gprcjMFR7efgv4RL6jjNcrqwqH128HJ8dcAaQF",
  "key13": "635g91BZ3PMYcmcWzBQFbRXJ9vvz3mD3ETXyWiETmy5KDkmbKBAXJyJdigc3qpcE9tPMJ5US6gCoUEDYZjmmxERu",
  "key14": "2Hwm9TY6k5eiqSqD9QT7KWD53JSLMM7cK25pC24vkMb6t6PBKAD2BrAb2zkAmTKegT4RTot1z74Fv2xm5N2PhyaP",
  "key15": "8BhZSqF8PDdh8d3pGUXh2NGQmZMQV2PRma9mo7h7m9kyUCB4ZjNVqzns8V1VuuGNa3nw51DmcRndVdiCbYsv3zt",
  "key16": "3yKR2MCP4sJWtNu31PMsdVzo7XWG8ttuzLBSrKC1J3BJiM6uvK74k5vZiWPpxqCdPB6oJLFwLqV7yK4gDtcrv9hC",
  "key17": "4rUT1A74dGLChDAJHQusv1Qhv9BgfU5vfgdXp7UJM2VZPWXsVY9tc1976P14uWM7G33GeqCDaQYcBpz3enf1tGYP",
  "key18": "5HSeuJY8XZb6XjibDYHnFrQNSumpFKAn38ZsCRdCMrbG3hmy7tBUu8qzPNsEnxv7cdQeeair1urbdG3qR7hFebqm",
  "key19": "4yaVXw8k3X7EJpwfnqkFr3nV9DuJSgUfDk9aCHtBovzDUv1eVnyNtJ6gn1zc6fXwHCpQ3UdREcb9kY4f1x93uyW9",
  "key20": "NUrF2LitXxxaoPVPHDUiUFkfjf8a3eJQUTVv7nyzWVhWf2AQnqcvPavZpJAK5FBmHV4M1bq76GeqTcG9vDzFq7k",
  "key21": "31cfQLHTSG7YJ5d8dpQpi1snAxF4VgqqwRwixKyMLnvE6VjaiQYzr8ntyndxUJk1zWBsG6RdeoqQPhR3jUkpSEQN",
  "key22": "3muP5sRGwwkmyQdbkCt2SWv7aQDWsRaHfyt7LDfaWzEYKx5EH3AyL3eFaxyRAWUhF6hTxzcXLLqNUEFcaQAeGbik",
  "key23": "2qrMpfuoVVp6gxBjLjrhVf3D1iYBJd1ooHYpmeJgHPWz87G7ivoRXAbHdGCoYdeoY4kP8Ceyp7HRs4TabRmZ8bnW",
  "key24": "47Y3ousea2FNFBFLxfFszKND7jvxjdzFCShuBD7q6DKjUB9HVvhtnnseeHrReg4ahEnkLXNehhes5sEeDvgxEXHF",
  "key25": "4QSGfbLisZ4gpYe4edt8xEknKnLAbaPG3WoaueiFKMHroUQpbMCvRFPeiwnz1vYW1YuG2pvBX9ayeMoK9owGsDCj",
  "key26": "2nYqYo1ANRKxZLyzdyGVrMjUPSZEtGF4AB2REhBPHoLkjZAJP36NJ9ARwuv54bQwyVSceZJpW3FeoYzcMznL1QzU",
  "key27": "3mW7dovF7VnhaoLprPzndrUnNKfaH46fAjsdrpMvQVSVFf4nJu9a48ELBFWHLZgzxXaT2Ag2wm1Ka2hhjdJeJVAJ",
  "key28": "2Yjn2EXpJND5k43sRUdDd7G9qsaLwaat4iG23q3wLSJW6CvfEjjifJFLWRkrvWwdBu6YHMY8XYzL6vV6KMVDSKHA",
  "key29": "nyk8mAjJNzWAgrguHH1S7hCg1pY9SLy8VS2ykumhPkJEYFeZR4TRNDoWzqAgD8qtoH2mS2wVdNQWmkfD5BWt56G",
  "key30": "2ntxFC1dAZxNjfvFt5nFXCfe1rPUKeSCY3GoyXtBRE5RetpXWiFCyL92omK8MXGFuZFkcWRmUbZR9XtzgBhNn4v2",
  "key31": "5HDaDkqEZ4qprJ63aSjdMSrabRTc6u6L4Mgb5eTTTEZhhrWE27Ww1zWDUxV9S6FDaKGQvHKAaLtWQvjAr4u1aWoT",
  "key32": "4iSk4xo8KaYo7fvS5DVw59UL5EnFExQWq94ABeayMZcvAPk2cU57kjauhcWmAG1vGR9q2GKsbFbXLX2gKYJ67DRs",
  "key33": "4Jfw2aiyCyoQfU8n4GUuvJgbvgEYS3wYyZvv9AX6kqAJLZFMPQSsBnqC6cW9FzFFxbis1dFCV6R48Wp896KBKFSe",
  "key34": "33Y14YzRKhLVBKr8mUGmCFtM8t53ZPZkztcWDhHL78sfhvDpqqmW7Nwgc4sDzpCbS9yDLLYduj1irP4yjr59m2s6",
  "key35": "PUhjipiNwSK1knuktQYVp4bs7BJWT8pqHPXximzqfb9XTxjxob7e8E121gutXSgxUwYbPG44jfkfNUKRAerwyso",
  "key36": "4vErY86GWsqFqAoaUVCCBY6bXB2XfNwj6EbE6L1aLoaA2b47LrjeKjksf4LysP66yP5U6Xwt3LFPz7HQnsSSusuu",
  "key37": "3EXTovsDsJ84GRqp6aQGhNLyahKrRPm9Mm5Ag3XYXrUCnRo59mhhrdy3CBpBk77SWMLZ3frPB8cFy3gkQ21ypiiW",
  "key38": "5q4Lmy3zGddAwTCbSzWs5ifxFXCPAd1wf1TGN2vNbsxPw9Jx8iXNHSacN1HmXMx31amPxX8kwnwsGFM7nm8tjVG2",
  "key39": "4tjwHsyDhTrLGfMN9L8vaPbn3Cuu7kciDCqk1EbWrfh8Rtw7MqeJA5Che8EnTwTDrr4UNXXmnihtXp9y8ZC3WuQt"
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
