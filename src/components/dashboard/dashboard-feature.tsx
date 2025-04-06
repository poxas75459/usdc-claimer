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
    "5qLN5qvZz5H6SSUkAfsf6NGJJ5HfqSFbRHYRBeMD7afnkGSLUVLCBZLjDhKTXkZHHbmoGJ6uECXBwcApWquizwhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365FXpHSkfSUM2WfWgQLZwW5FvsXovgBX364tafJ9FUv1Cv65bk5qqry9TRLsZf6tAU4kpbEAFGq4eAc8bSWqmj1",
  "key1": "4d8eaKZvoEixqu1i3SYgX56jtHv4KZNoP14ANr3GG14kTFWL33r3bgngii2DTYFFxKWUfJX1TmEjjnA3w7fctEZT",
  "key2": "4fTZex8ubuMnvhXu7SMngP81ooFNz4yVmefgey5xfFQDnABNLLpqkq8ViDZrg2UsvkGWRfMvw4gx3jeT7bKbMRQA",
  "key3": "9ugpWt3tGrckhaAnf2NjPDTmUNLeEniNNXeNGrrrtkNHG8Z4wZm46NzbwFosm7xkFMTyq5pcVrzLMgDDTCk6oWQ",
  "key4": "2Zn9SoY9AwCkinxmhTqpbmrpxAUBptdiT5DcJ2BgC6kHskTHJfpyPDXdnEueZAhgwBT6ixPXqMPHpCQzLAhTqvnc",
  "key5": "4ZSdukQXjF57UcQXaNjVK3C9bKXeUPrisRWZTdGuccZBRov1qGjNURfRcxkyqpA8kkucMsa7wCmocSZqv1MSQPg",
  "key6": "WEcbywaA22b3EaCZGnS5drwUEBmiZQjqvNYBYLJZ8mhuwkpRW8VMmCPXiAJUUEwBD6nHagr6Tx46m9sZAy9CKYH",
  "key7": "5D4vi5UeMJqT9HfLRxeJ9wca8qinof7rBULdhMQeT6DjpqHSAapQXen8nuYYGG6Nbyv2Q7dy5EPenmyypFGEpjg2",
  "key8": "25M6gXxGapSqtA4izpYKfZMp2PEGP5ztmkDWnG3etGQW2g4JDGAevNvDeN8R2Ff3xGRXf39UqJooihLefXTXUwDZ",
  "key9": "4fqQ9PBL2yvG7oGgqhsadxaTsesUaVqqG8e2w1AJJwBZyzJqDXFKFvPFsjwAcrPzbDhRArhF9H784EMMmyMg6hNZ",
  "key10": "5K7aHoDDHcY8CFSncw2vjapvYuqvacwUrNUh1nk9tQ1Q23U3zPpQ7E1iS42xkmbgkmrRoeQ7YJX2Sm6JEcJpHqoR",
  "key11": "5fqDrSKR9K1hX3tUmjYYtHhadsVTP3aYabNpdkUTthQfpXjGRqGMw5gERiufFHrgCZRKaDnNdhFRepmwreJuy2tY",
  "key12": "2tevPsd7fZJUtmvZEqdRWobaqu1c3Gz1pHr28bQxfd4N7sxWpyucjT3hYsZbdc2Kb4a1tGQqMVwvRsrhQ4Xqg1No",
  "key13": "3UKwjyZucxv24PCiEpw7j3Wc7DuNUtqD3hnZwUaNGEGQzq7T3AaFrWSvtVVh5tNYEhbFtu71nokcrkNzXJkdhDin",
  "key14": "22qQdXkhjXeG6trnjPqqqtWR9LYM2EHm5TwJNgmNo6zxx8PMXJZCthqUQ6KmXB1uj1HczWLqYbmJ8nez4EsFtXFa",
  "key15": "UocFisraMoUem3wCgzyLY2nYcRtMAo8XovX1nNhvtbfc5goexB2RjonCW3tNSmCfwC43C7Bu88QnZf1QMXdLHMN",
  "key16": "xnzJryvSLk5eHwtpm1spZXGUGkawfZuhPNuMiJScWpS8bgyH82mBHySouGsUaEqg8zbQgeLBxYtQCLRZ6FEMCJS",
  "key17": "4oRu2mXnzpj9Y8iWGMXcgpQW98T78MnxJqoV6fhtqkuZH9JCumXDfoReoikdqRUiJaEwQJW6MmKs39RZnsTcqDdi",
  "key18": "62DfLNEYAsG3hNB4PuojrE6HAvk99FKkN6YNdjx6ub1Tcp4QMALDbD2cdX3X7MhcZpUEwmtTCg2D7KGGLUmEr2rZ",
  "key19": "5z3pRXNiJDY9y9L7mpESyCZrTXUNXDzPmTkn2XyawfHXLXqnheKdo21oPf4tLEgjuPhvtS3sdyAw3D16Shd8at3T",
  "key20": "5qtCM9wUQWHsa5mgSHDoiqTfUWWoDgEoRsBjGDUF9Jha75Pp4Gh6UBSddXGRnjT4cGrPqLai7Z3pLuKaAErNATrs",
  "key21": "mNr1tu8kM154pAUL9SwB2N9FLBtw4nxnmP7W3dY8rFCBGY9jH6sohnRa4w6Jw2QPzQmnjqJtbs36w39KtZLHRZx",
  "key22": "4evSqM8hiMQ2q62ua8YbB5e3fUiXVm4NPj6fupWNqj3t7mhuZh7M4Wa97DSdB6q7CJGqawe35TD4CjLfzaHox5YB",
  "key23": "2HYhaL6qRxAex18wWGiDrfFAKDxKvUHvdgJef5Ng62ik7mZE4RJeDif6ha1aFHVvmkakdJcU5k4eruSNUShgwFH9",
  "key24": "4NjYYBhXyQomHqnnaev3d5kT6PPStNUyeB6VApGXL18nWAdwuXQFs2VW9QcLw3rFr2Wj5PDPrEPXVDw1WBAZvvPL",
  "key25": "3QPB2o8LkrWgfUqPS94siSjGTuJYSjrShN6pe4tBGqVrxYSr7b3gHGLk3rZRX4xbPdPsQgm8jTzsCFkyF9RotWaX",
  "key26": "5wZjkDMvKRcYs6pXjqzaYsFqmpZPM94VvQNYmGycU9583VUM6QFhYSAXgc4qBZY9BBQTn2zDGu84XPiwBczrLcHo",
  "key27": "4AcmhCUMt1wPryNKYMFgUdQeJZ7QLQp5XaLaAWLyLsqXmHwNtuCfnjxz5QLsEpCG58Bhg73dqCcdGwXmJQXrVizK",
  "key28": "3aGDPfv83p3BW3PAXSBLxmF5CnPyrzUjexmQqpYxrVjUFAqwogFT7UsKozimkjxSonK9sH8DWFMrQV66ThKLpets",
  "key29": "5RMmnKf7UfdutwfHv6TioxFtoteijz7NM3FR81FYMrs3bjeUiMyxXshq3DR54RC5HSTr4br3vETvaq67hMyG6jkU",
  "key30": "4AsCmDe1UZSin4F8iKy4h9hMcx9Tkbf48LKWDDUTbiLesiK1k3BSJWR4s9GvyTxZgJXwNbUaLgbFPN5AbiyfjxPx",
  "key31": "3rweoMvMUiVedReeCH5hWnZf7Wq4FSJKkwNzwUbFYYjrB3QBqYxEYp57MbbAHTscUk4ciJs4PWcm4CsVebBc3ZBv",
  "key32": "f6DJfFwSYmiSePXVXUSdGKysKffLmxGNJ3kLVoBFYj78ZXY1opdhtGy49aihBDUzJWJNoXYtYh93i5c5dKnbiAb",
  "key33": "66EsRdCBm9vteu2pkszG6Pd5UgzyZ2eAPsYUCHvEBBdhp7UzzSudGm91uhHvkFwpKRcF9SdpLom9LkgqqqiAB2c1",
  "key34": "41ckeT2FRuuwNdnGgEzyMMpbqiCwPWNHEruLrbCkztpuLqtj3bevgohHYDDUf2ucgPQrYonDvQCXWX2YszDpmk8u",
  "key35": "3gz9haJwdidCiCzXM4gCJqQsTQVirYR4CJp6evLscXycPqeuMMpHCaQQAFLkzhrmE53mWzPhMhmjuXxak5oH7Zq9",
  "key36": "6pxmFjcnD82Aa8qWZxVeoLiqXYo26AE3uBXWnQJihVyadk8ZXrf3F5UCxWsK4haoZLWqGsfUn9YsY7cqSRwBDxr"
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
