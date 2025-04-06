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
    "hT6nU7MA8aWoTqkmjaKEb6KzZpq7CCLCeQFq2rqg6d2tqFauwSLBVs4xt99BedazowamGDeFRuaZmjYs2KyZTV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HRxQXsLng3svhPqe7RHQLSnhVVxYuoqbCX6HWDLeE8bq7vHEeAMxnWvaEaHrhKhyweB6WJMS9PkBrr7BjGL94cW",
  "key1": "3YNCdDuRjPfpqLxqSN4ZDneWbHiPqnNbaqJMcKaLMUL1y1C11HZ6cjDrTHjf98Nre2rNd25XABj24Ui7shaEGbom",
  "key2": "5avoXTpXpqb9XNRPh4f54JHXkMJHqfczWtqG2ET6DRRzWfgPhkfrKydbstpW1ZoXeU6gokEhqKrhsyYjK4KzHGMS",
  "key3": "4GdBh9aKPiADtM46iwYQ86UnfPtUx8QPp42MHvQfnYU5aE72HMV1wXBukQZFk2qmKTpQj4qhJZBWcPERQ2oUwgRj",
  "key4": "2QubwVtAuyV339CELWH7FuspzxD8cKcEJCJSv1WUFgsZyJo6LffbjB2FCfr5Z6yh74RCh4FHnACkLsTf4JaSRYXB",
  "key5": "3dZz9unEq8USYLh5DxJ3U99XcGCjDnFSgoD1yGXyoVbkuzxfqJaQQU4msxhJHv5cYPb4yuSKwNA8LwBZ6cZXZYsL",
  "key6": "3Nz9VDoFFZZZoLSDL7oR3oHdMELwhTU62dP2eeznZHXGSVXhYXXgaDJprnXw7EhY4wBRGksqKcGscg7yTeYrYRbp",
  "key7": "4hFCp4dA3oKccEhAnVqLCtGjdWYWLizF387h7g21mDNk3F2Xt2cNkfuSD8cjLFbhvTXpQLLbaq1PWn7mp954ed6M",
  "key8": "391i4Dt1SCBy9B4iYb4ACAtev8nMAfvPqPBvfb9khVZ6ngdbi9WDHYMJrFNrbPWWcSabqKEhQ3Gqv8sTDZSNd2ce",
  "key9": "3jVEbAfVGSNbDreqssXDUzFjDz6aKEgMBUr1Rw51D6zFjSkTLVpRR6VEXFc9ayJGNX9woNby9AzUVbvAm1v13Wzn",
  "key10": "5RLezBsiZ9hbEtrQs4YJdhy5i5uAMDGmvtqCgfXY4gSKJKKK8JqG4v6UCdwyQ97jyodSgbNs15MS9EombZ6ME9oS",
  "key11": "4q7BBk7696nCJHbzXFVDqW3oUMwD5nF8oQorEY1kynGbdUPB8CuhekYPAa8TJZvNaZwE155rFBBGEKmSkf2zrQrM",
  "key12": "5mezVXr329fUtSsAhxmiPiQKyZfxygo7UfP1aPMeqZWw3DZZpGwgywHuSgmV1YbZ44tozokeKPtbN83yPgwfzbMj",
  "key13": "4iXmATGFUrAYM47gCrYK3Sqe6n1spvAqTgfUyUJS15qqzg7eykmUiQ2eUYY4Sq5hUGKHyxrJGMRwPnBevp53ucsE",
  "key14": "pAaQC79sSBvtghfqboayZ7rfTSg4SK7AXgbPxgxeMk521cDmA6FkPMwWJky775usxoVUv37FU6Tui85wHE11nuA",
  "key15": "5VZZDvxDEMbfGB53kkrnCM4n7M7uQWs8A4mZihDcYfPRMxg8dMi9Q1ifMUionj76nicFUBrKrBQUNQ1pLdZzusqt",
  "key16": "2XVT7vv1GYp55GTLEYJuq13LwfvP872TrfCT21VwCF26rtT2RK66dL9nab99sSkXgFPfRo9zFAxTatv3sJAxMLx1",
  "key17": "4uGEgJpcCQ4VWTjcP8R6DVfZQZCRmukRXKYNzDSEQkBvPBBZmUkBaKDWvD1vcBRoPmLWxrVV2B1VBqYVEL2WgvNL",
  "key18": "5kLJsh9B911XMz9Fvkd7UwFTvNk72F7r21y66RETNRSq718565a267nd1ZNaSR6JhVxD77qPyc2btbzdcarSHiX1",
  "key19": "34Fa7sHzcPyAB4cB2mVNkNRo1HdJpeG1Wm3GGbpCbnyBLY1xGreJTynj4sgCRGqv86s7RQ4WsTEpL2vc2ZCS1MFZ",
  "key20": "2ugdPYogKWAzARUdwVy6xu58CsMTSc7UJjyZL9jwpnXY4aYhPQJyBGAiLuiknF5xVcewPMmJv4vhGosFZp9cTx68",
  "key21": "4GPgBZVQyMannFCqnhPwe4q9dDvonfyTEjx9eQhsGsafL1Rg2a4KbsiG2L6mpAd5j2N4G9NTXuQqDKkXhTgPPg5f",
  "key22": "36fxNRryY3Ys4DAGKnWEo5VDCNff9copSCdew5XQEWfaCR1KrjNpWNrU2pJNicGY8QMTbwC1y6GXi6xiGcnrEM3a",
  "key23": "4Lb7gTNZrG4ieyoL1wCHcnvjSMHf6GZru1hyXHWLCg1DAAwVVA7ZdN1A5HdF8DKpfawqMGwrKza1Ry8MDuEpxhzP",
  "key24": "4tVq9Fg75frj6wWyHLoL23H31JLg3osU7bLm1EQYB8K7NQ9KdLQg48dTbPKNnNuUe8PjYVApYuiDHFP7wr5uRCWA",
  "key25": "3G98nZqUexTdLGqy24J81MLcsrzBsRM8ttzb5ebSPW6FQkSiE84rWyC8DhjaLVgYRGLy5krxioF4KYN4uCWwjad6",
  "key26": "3hGJK5dja3WLUy3VpSegUUQDE3wgMRcZ8n2FjekLYP4KJVdnthBbuarzkeZtXNa2UyRYJETH8ERkb1THoLy4FFf5",
  "key27": "3t54vrm8pyAqhv1BWniNP951LGDz2bHvyRhYM51PUE785un6EbH8yFP88iWivzoFifN1sF98UvryyUk6Q7pqesBv",
  "key28": "4L9xgMQKYjaigGAuoJvCjFtZKUShAcR9Qz8L2HVAxJ4mJxHYFrzMgVv4CmnahmQZ6eisGo84qyGuhu9J7psj6Vb6",
  "key29": "2xsi8HYXBrE6t5PVSX1JUsB31tZmUC1tZ1YVui2ZQgNp5p8u1gJtQ7u3MMyZmYyidAvojBToP9Ce7DQSUTHEx1qu",
  "key30": "31o66Xbo6dVQfQEq3bG1VC57QQsr6d3LYRQUvtW6bga84Hq7VKK6DUrTf3aBbefMj9AJmbPMJP8Gxu2NFJy34RxA",
  "key31": "31PNwv55yKJU3Po7djQo2sv5KHTjh1H4dEyvHiaE3Hoh4p7q3vM2B7PmPPXf4uevxXqNbJqgJB7CA32paSf1fJG2",
  "key32": "3rjFs2doi3LJPVXa9NHqPFVPddKasWs8RoX8CjSnAPSxxH8dJrMLZfNCT39FtZy5aS5XWf9UrkAszLtYeeiZuxGN",
  "key33": "23AZxDnEcs8r2Ti3fwRqWPg8dqXdNAqmhExuN6EUNAWH5bRbo6gamE37XKypdBGxSWj33rDqE2ouN7Bnh5cBxCJa",
  "key34": "4qiGDXu9M7rQ9MJANLPAU3oW46SQuArZ79NQ9ZjkJvWZv8DTdJso6yR2dDtpF3yC9cWR8JnRwkYjVCmFoVysq4gh",
  "key35": "5U6vm3QmGdNexbaEFhgi3ciDqV6ycyWyXb9UGCn3x9FBikPTY6XxNaXrpUqXJCkunVbQxtMTaAJ2oZLbvcbVSnC4",
  "key36": "pRCYGnguWNge6UnuL3QXHwjB1GHY5YfNU2hV9S3LqNW2mUDDCEeLJymG25Nh8hk581vZvy3RAj9bjhfMi4qwPwu",
  "key37": "3fEkDSCkHUhs8y4MwwPzm4L515pZCq4ZR3WtfTqSHcCM5irDuGeKJpspxYpExxXcrSrgRf5GLKABpgcDSMHktu6i",
  "key38": "3wwSHXwT3tQsjXSd7xGHLS4nW8bPqQEBhP5ZnmSSbrjisCoGtXcSipFFWoc3mz1A6r6H18MiDpSVVgVLjYoXAXgC",
  "key39": "uvmXn7TGkLatUu1d4r9zXb8crotkgSuCsRXa9XABgN58VDv9Q2p2tv6j7wcyLRDmCjvRDZkeNuUZYuCbLhZXJ7o",
  "key40": "3tHQYtvruRqDEjMA2XyLU9NjUmEXN7S8ie3ASo2vivhnxnTzXnEdyaiTgaUzajGpSg67q4XCxrCkvAzXeTrFLDKs",
  "key41": "2uo4ZSP3uabAhRkS6coQd5vGw9jMzS3MJcnVu3yqAs8BKmeiFYzRd9nc4bBSvWTGBeWSfJYUREzAmrDQTPw4eU4v",
  "key42": "3Kuw7YydRyBN9FxFdD7q6KrahVh3V98TxE5qyWzWnjy9zrBGe6mMwJUdmgVWhVASurkJ9XNzoaM36Z8XPeLF28bq",
  "key43": "2qGTDmENVRZwVYTSbrKZJ2o2pbPNNtsXPM4t2wKx6dqqovpYFoErzzLrVJE4fq8AQxVukraZaYSZdfQdtyF45fsc",
  "key44": "3PYPzqyLKcrkzfYjysDba7DeHALLT9Vp7cWGydnep5Y4JaawEmJbNZjX13fbpWSdLQUzK95n2tBXyx5EwLDvVmi8",
  "key45": "4SX9rjypbA2nGCDqaKVUTz8D373Hof57nPxAei6UMkwSENTDzw2h8ADyQEEQKZPFw3V7WfFcrHTNwxkFMqe7mocb",
  "key46": "2EnUfBFrn7wRTppS41CrRMcZDhsXDZu3jR3MYqbhy8tpzPDjpMCTszWFDZCSwVzBeFZJLbp33JsPjXwzr9P7kqxi"
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
