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
    "BMEaJy6oU1z94hG5gRLAC2RY6jE5H1WhcTWkibbbKbQ8154SZi22aQVtPUzNJEErPYNgNHBM5HqBqhjny8WCKF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PtgrbAhgSggFgqGyZQUJp1masrJDJ9bDgMw9wcAy1BndKjBReBMNjbKxsraqUPuZn44c5vAdm9XXdZxXFY3FuW2",
  "key1": "2VbA2nCHbCscQFBsQDvJWCmFUZzHbj9SbDrJM44EENd6nmqzq251NYpa1i6EAaXyj4aDSMisDDTErS4ktmwH6FBP",
  "key2": "3PKhAqFgoU4iJGpS79AMZcCTrGuD3r1rYH4nkNE8PCmDwPz7GWiWHDwcJd1ZSvt9TZqXH59TSNzB9mf9rHrJhuUt",
  "key3": "37Z6hdpz4dK7fhXp2FKuUfx3yM8XvWHPMFmg4YeMXhYwZ3NFWHvWUpBtPq3qF5BiaB24Diieh5P7HjXiBZgjW2UB",
  "key4": "2D1fncGZerLd4XXpgYuPJ3YuVBRyVSbv3SF784i86AUNqHVW8awYFpcDKFjnkGQEtpo9U68UQqhi7oFJ9ovyi2uH",
  "key5": "2fvuwJZaNAq8AXR2n94dKcY1VRpP468j2sJ4YrU2ZbD3WJFrLqCjm2MdafxmLtsHxnMEpdsTnj6ZYSDgH8exWWGr",
  "key6": "2pQbKyBHqwSQBV4sYSujgozXQKTZSDwu3QhpHKBKqXQpVLyaasC78P9Q2Gr1zBibDGN3LxpeeRjmvueaYFRpNAUt",
  "key7": "38FT2nM5ktJnL6J5YhqMAfor7oWJtwTQa9dy6dYbF6R5ezXHMx7Xh9vx6iYLem7BJdhV7zjGea4omna6V1wQs3yY",
  "key8": "CvgnXQabcuT2ZXsCpKvU58kCdVt2Li1rBwhwm48hkzg5TiysxANDiWmaRUdRik87ztzyg3PaUNUwbPvvoDWh7FN",
  "key9": "5yafSegaALYp6Kp3uCdUko2PZpBvFazT3GgP7ndxmQFjocxH6DAxxxJ7o112fi6M2G25EahvCJdQCPHTXPjND29q",
  "key10": "5mpUAQLbQ8iFoWaR55dP2X4gstiDveDZZk786QKS3zpxJpscbzHdwAxAxoTb5jswEUNbeRe8tehW5GMPRQAW5M3Q",
  "key11": "3nMPyrHyrtHWniHr7UGgHu9N1wL2aHuFnwV2CJTWZwhf4dZESwxzCxNKJ4TfytVanUASSGPqNkem9U4Gg9xewzat",
  "key12": "3BLHXBtF7LM84DkMfxErpXnALr4eAquzVJ5gQFujMvRcoMo7hWNv3rTmcm225cDp8XAwmxzcuWW3NyiYuKEw39ju",
  "key13": "3Ey3bQSSGXBuRLS4qdYvvLCk6AWB3RB33sKWf5Vj4VHUK413wG6KbkaSARUuYrkcRe7sJMGf6p5siD8qRnFXGn2J",
  "key14": "5hjXD2nC7MR2t953ZvqSZjo5scPBt5Lkhu8EbDkeYFTUbopq7rvNeENKQQmrhZLEA11v9pjXeiASa48RTvHhxBff",
  "key15": "5ope8NkhtiNr3fDb8bgjKf34ZDbatxYahTbqBAPe3jYPUF9cQ9o44TSYB5phQjBHgv3TcgMXRFLh6Pmv1c9NE3Se",
  "key16": "uMTRLE9pADnKNKgoCx483aK7eTaAhZYw3cUYQ32sv7tzSn7jmgZjft8QDpXg6XSb7zVXuERSyi8quAZE5CzY5By",
  "key17": "61zatx3nmGjsgyCr7RBjR8mscX1akgkxYVyM9fP4aRHqq5zJcD4TNVjEBkniSnZd3JmcrTwhvoHHEWMpF14v36Y8",
  "key18": "5KzD9SMofLLEYq44uwNHi5SQfbPyEriGxd6f1JpvqfRKdeG4L4TGN8KzasotvXyhGpbWRAVUzErg86j7K76JkjK6",
  "key19": "3BvgY4dc2bwr7Xp3zu6cy7r5zMMZZaeSrofWeegDwvJhX4hgYakPT6q4Soqy1HLt4Xfr53uedaCGCMnzCbt49p5T",
  "key20": "L7vu9pt8j1ywdXoAoysEXBynjjmzPz1MGyYtWMoCQkmojCaJBBkGE4XU5naeY6mYB5hwY9sQrnik4NyzKd3rAF4",
  "key21": "29UnEh6mAotHMP5cUNCF9JoktmuFhenS4xijaD6nnmxVKgd7UwUpTyEq52CXErgtC247XPRQybkgh1UiLZKL7B4w",
  "key22": "4EgrN6zK68yR25PuGAyaEQRXVyXfVyvNbU8YMzjHi5mPqAvHtCSM2jHC7UDSJrMmqPYgNpFsDAJ4DpiuXXfbFcwo",
  "key23": "2ysdpjrmtXVmk4B9Zr4oF57Mg4u7F7NkVAENWcAfbVFSFsaukysLMKGDSEh9mssLZQTG1RNkGBLY2CFN5yDsECnA",
  "key24": "2bzaU8UcZJo5oVcdaFS6z21GZ16jHNrq2Eg7gTGEasm1eo5vDTFnz6xVkd5xThH5qgvsTY2i8igrwP5M7MU6QSYS",
  "key25": "5qwh6hc8KL8v8WwGYA54yWmsTL8huwmZZPJSxvgj4EtN7dGvenAJ5xgiV6uUp1xSqq2jFi9DGQDJ6aw5ZKet53pP",
  "key26": "EabsdZ5FoYcRR5kmsSBqwPjaXz4bCatP2iqtN4h4yoqbvoXzDdunJKDduTJhXT4pYzEtDaJ4iFKTbhrgVGw2zz8",
  "key27": "kGULMKyD4TX7fe1Le9HPNKFmGQ8kTaez9zZaCFpecYdoA2QbHkAsAscDkoC6WY3Zc9VvxC2heJNb9ZfiTH3w6kC",
  "key28": "4WDtwsQYWjb4r28rmboobPxw4jVPyf5qWn7Qk4Wi8cuB4moDL6D9YUAE424PmDPyyrMJZFLJoy48nyxSNgoVBjgw",
  "key29": "3kACoyHhA1d2scoPVh4vN8fw2kipozXDRxH48YGPwJs1njHoNy8YmC3fF3GF6sMEMa1yssrS2N13gYFosprCnxeH",
  "key30": "2yYvqVd66fJUqSRn9LxwPLhVMZMVR4cF6XrTyCiXR1sVbTh6D31wqSjNmqJRTNSpQ3ADkVtmcwhERkunZq2igbPm",
  "key31": "66AZBvZSWnUjg2Z9AdWEmwZFGrE4AtZZGq3k71c8HgWBHtqDa1Q8eW2D5Q8WVip6J8gwjREnpEXmha41bXrAc3gX",
  "key32": "5amqjQNqYvEMzT7Aa9gbv7CPjvFE1zm1cqULYyzb3EWjSDrdJfoAvVJHQtuZ3JMAnXBk1bCoFk9Dyzq32Gn7iftM",
  "key33": "26TfjoSB5EtjgkTUiZLVV4NtYaSJchVzXHonn4byQVqPKAgrM5hXG38c8ZfGN4g4cGD5nNuLK5V8ag4HybgHwxEH",
  "key34": "5BNaUmUpBMzFm3iyj3HWm6PtnhFa1tNPRAUJ5fdS3vMMMAoSt7gEhxBDZYzoSiR38TfKDJmHdtE9oEkMPP6rHBac"
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
