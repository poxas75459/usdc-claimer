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
    "3TsCMcUiLbfCjPjqvWe9q2iyoPqbJN1XPtgBzgF3fGwipvozrsm52jRYEp1KKQ5Zbf2Kp5eCMr3h3xaDb1nyGBTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4sSWTbw6BmWg4Nc6Aam48pV7VsDTRY8sgunqRqai1x7xRPCPHHkGCasYhdfgrxfnDJKkXijAwXddoyBd2wWbT9",
  "key1": "2yjJrKRCEeUkj4v64y5KMXLRGvtga5jCT5mVetD2ZAMrsrp9yVb4Q1dXYSk3oWUFmMSzwak7YQrMdDSaBxMxRJn3",
  "key2": "uvw7R5vwCNRGDCv4Hrfpnr98AQ1JCu4G7UCKt66uJGN4Zeo1ZiSMowdGWoYmdsgcVshjLgvYxyt6rSjEKppVwDa",
  "key3": "2A7fffNoNqpXnEVk6w4JfU9J5xTzNak4xYuyyfhxriFmrM8dHCghhi6KJTPVDHeZQddvvBauR3FM7q8CuWFCnARV",
  "key4": "5MuPrsnGaqJtyFuPbMgHEwJ72gxFGQVKrhSJy6UtrHahqLyi8Am7itSZJ7AfLpdPP1gMFmKtTXhVimoEZca1seAe",
  "key5": "24xoKGCbwPVjiauzfQm8WqudqkhN1bGSwc8Zqf5TvLTorm4nJkKs3C1MMKjkqbSNb2Jq9X43D5mK61wcioqxRsL6",
  "key6": "5fGsTUpsF5kzsvxojYQ2AwfDi6y944tGmkGi3vS3vaqtJ1amoow2WR6mG18qTCNLdpVxSYhQBd4u7ozx4P9BFeRb",
  "key7": "58LdBgkSouXEiM2F7rAiEC9vhxNf5Bryft3R7aLKtA2oSjX7icFiVosTryQEWp43ckAEcZaSqcxQsdQYk9HLrigg",
  "key8": "4fjUErY2mQECbmJB8YsJuoJ3DVopvomKW3BiPpodgpV9Qaea6U6FdYSTVSL2h6DYWAhpLRGQSrf7fbc5isAHhFCu",
  "key9": "3kfPjTUVXjYiJx4pMazBtPXLoVsQDRsbBZ5mVsMoXRwdLJ4HktLb7inzz7v5WNq5HwH7mCGEMsx32dCopANVJqWk",
  "key10": "8rKDyvYFeVkjiCBqaXwCV3asAV1ZTUG7gZ1g3hHFyU48mGzwX12hhVFLD24PZ9fayJkr1uRQXni94jNCBRW2bD7",
  "key11": "2q3TkfoZhy3ek4zJ5nU9wr81jHZuMcCdaocgeuLo4utoWk4QLtjKWQ4tHyqMAXJU8JVjb5uY4EMhMbsmkmUFrCi6",
  "key12": "2BpZVmhWWML6oiAppFYVNyu1jm54HZvcB8Juk74aHcpoUMeKpt7hTRQiQguBNLR5bUGeeaC2hoak8Ca8SxfUJxC1",
  "key13": "5Fw9gKz8hgnkpwoz24LiA71A2vuJStcYo3dAYK2ngJERY5Z7NZvUBf3FKmT3L4gV2etzjpnt1rQyBK8jDK9SPJ8s",
  "key14": "3bjEqehc6ci3GhZCFHuAwAVojcmMTRk6w9ZEkcNaXtEn1KhFWJiWvwygCLCUYc5enxtT2kWfC9qQYq351WGYwtPv",
  "key15": "3KwDwFbzcodM16MHNNvZ4pcP62uXjBZcNhYRdRXKZPouSEXbSxGrKzpnvXa2v5PPJxAUF3fZbzvEwMAjVSjg5y8W",
  "key16": "37rNZvHSNhsP6ArJUKG9WbP2mLijBnGS5v3LKkBELDb7baMGshCCf8np1ajGxRW143Cm7L7QHyPNuzw4LNVfbpDi",
  "key17": "5wCPLUm6BZnJsaP8e3RZVajShyjU5bJW5FTWeGWxFLvxGeLRAijUe1kzuP87cVjznDTHzysMPpEa9icduoD52TJY",
  "key18": "2dW7JD9C2VS36fHcQ7v1QzgfBZAxQex8q2z54coqcHzJDUzcggL9rSSji865fBBaYzz7LVAoJzUhdqUEKoQEBRd6",
  "key19": "3BGXkmkCso1hLQQ1WDePGac945DQowiXwrVx2ZRE95UMEQpvGFCLtxHTvP2EFp4W5LKDbqzgVBGmmXgtceEDCZuR",
  "key20": "SqfnpCh49MugRzHSVrVz78jM6d8TM5nAdAiwTB6CwXxfmsuAKWYvX52KDZLFrRAa4Gk2NgKVNjCC1QS3oFXk36T",
  "key21": "2EeZnCeEevtKWYU2KwNUHxBzgVbYxaNnUSU6wSkesHm7avBy8Gbv1QGfWkHioG7vYQ8hJZhpeFVsJK9matJNMyo2",
  "key22": "y1mVy95mp8Lx3mpTW8e869WGXdvCabGSZ1KqMxZxKQevfg7ZZqty2YDe6JEzh6ynDUF8HzCR53n9virvKafsEmP",
  "key23": "27oEbnHhrt4vweW85EDhPupwLRCk5utJucFbz3BwAaNefhEdgf4HRCVFipKvDeXbUAKwSvRCfUBfX2EGLeHpES3C",
  "key24": "4F1uDiCDT5yCk6vnwiqJfPYX9sck2NwZqqXZcxbZpbq4f4i88Za1h814agzRx4Sq6w6DJ9ouhxZkudEZqL5Qd22C",
  "key25": "5YqfEGcK5EQYxn4jxQUSGGsQJYj1xPr8Nh5L1p3Mvak9neQWDGnSVgktq9y4PQuz9GcVzELicfLXH46gVyrcnDUw",
  "key26": "4rA4jzWWwj2boEbinFVWvpgf2xSR3VFThBzXtwBgznGb4cyxZRRQd5Td3qbregravrqKh3GvAbR5yoV3sbr4qRVc",
  "key27": "5FBeZV1s9g6PA118G7Uw6ew3msVUDLMaeMos9XxNahraTjfSL3XR56u42fW5ugov54q6Rbm9LK5k26B9qk4YWe1f",
  "key28": "xKFy4HFruA7UTuEWo7VevxkfL7EqeVkbQouiNH4CaXmbNprjpCoRGz1adEDrZ66715KPM8SExG9LBiBxfM7nFup",
  "key29": "5VeXNkmYYHnkJa3m2saPCCznTBYXgQpR1zAigzWFrPL4Z4gv1YAH7kaR7LeXqwJmo8wenYymPzzUMmURrgkEWQat",
  "key30": "gwDXAg2aaJdREM75UNeEDzuyHoeeh4WNRVtxfThHaxoTL7Cwfh9wYKNNXXDZrzu8oCHnm8vji7ULhupr8sHU52Y",
  "key31": "2U97QHmXqeJo9uJvvMM9LJBbhUdoRcT2snZGsgfxMPoXNxntRDGZvGoxtMFtkpGqnNWm9MpxpsytKVAideyYXYFZ",
  "key32": "5eWN57XJ5unauHbX2C935p8TxMNKfwR44eEqsMjanXf2jhpeYhFLVjuUneG1mmbokfgyFgwjVFwBw4JRwhCvrr57",
  "key33": "5QKHUtnCxCqZ1rYdNF4m1aL4ty71D9cfcfy63TSs3YJiJxHKEpDggCTEryGrXfWycUy69vG7rqVXJzb4WMwijwN2"
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
