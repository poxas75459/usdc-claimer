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
    "5KFL5d8AaPYZxaU6tMSryQWRubpp8fmi4U5h34jDJ4pqSZELcUcQjD6zKntquRE8Y3Ww66gGX5ZLUgsZRwz7YjkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QLsU3ofYzJq12eqAgd8jBgC1XLHRxhRpUH9UmyVT2tndiKmpAQAkfeCDNqtHdPNL4yYjr5rAtP3LCfvA5DhLBv",
  "key1": "4nLxpLTDzTzWXEj386cxynQaCW3HU7WWjzNrFhPaSme74NJmEHaEATfMT2i7y5Vo2Q84qhJ7DhZTro863auqyStz",
  "key2": "5G8wd2TwKRhSTjdxNPYnWj1WLpqjBBp6hwZc9KQyPbnGMWrpgYsiKdQDXiFEqciwGfAU7rDwnARktJJSLUQMy9Vc",
  "key3": "4cnb4LZb9S5ktvEzfXiqvmUTB1viKdtfPt8BJ6kgSTB96cBJWpY5tahdED1UsRDPTw3o3oc9knD12b5tc6uNMn8a",
  "key4": "4xzHRD2A88iLMMGm7QyTitZc3FjnQZaNvFhmfye2WF5j4gbjsk3KWfRXkeiVxtHtTyrfKaY1dF6WER8CshFXohrp",
  "key5": "3jJJaz8UJQoDykr2JcTs32QkqfSptQG4bCbzrGJk7RTegA2yYkPi32zAH9oHWSKrBLB4pk2D415ZiNXxNcAu7gKH",
  "key6": "3fp3fu8mHFDwCQKLLctUF6XkQGMfsgsqbS8fsq7Dio8yMuvhHoyVooQ5LYCnDYdBhNdMJ31H2aZkeYNEkfkibgPn",
  "key7": "uPf7Wdf86yXzwgqNveC7X2FscHwYuFxDxgCUrTmVXeEZVZ3WM6FRaX255huCQDVcPc1yS5BXtKzGRdzJycrWCaV",
  "key8": "5JXiosntEn6N9Roc2gjMfWgB5nh2anoG3y4qgDrj5ViPnpBtPb5CXtffkf1EXjr3TkUx3Gc6edZdA3MMMwXPjPmb",
  "key9": "2rSwmFmwyCwckpHW4yNN35hQXUL9gMnW7pCaSAGi8kmMwkv2D19mHqtQdJfx6jNqLKS7pHYwJYhyYrFHjKRVhDP9",
  "key10": "4ro3LEKuZZfcWU5Jpdcxuy7trnXJnd8Srdm6CFVCAMwssw7se3tZcUTV7Tpp8FSm3Jvh9ki6nmkzwYE3FgYorRRW",
  "key11": "YDZw5hK5iqPTstEKCNjjd74r27STtZBSHsUpQvA9NV4hS9AYE4iCYxUnMBc8NphFxBGocSQwkWohwtKhvtEnct3",
  "key12": "5A7Z8S3pES2evtw8KFZJUX2425f1WvGwm3LQzrn6gAQ25WJkoTrZpaqQ97mg2zwpWFY1rXJnXuU87nL9vsdc9noA",
  "key13": "28tNPFwdYyWDCP2vm6gHuazVqosapRLnDYqBQDWw23LjiMDSEd8MQtYKQUVRdRXk5aXDps1NdQVi41hBKcQ34wgC",
  "key14": "4ZWNaS2tE8r8ozcCQUqjEcrC7A6setUFNHrxxhHnRD191vLAiWdAXKK4r55yEKNF9osaHgqmdsqB61ynmUVuz6sK",
  "key15": "5LBsCJUPE3R5ujzGA4h9axMJ8ECRa6LUXFPqUcX9X3vYNhwFkUAz3cAwpxwQ5qVhcWXaui86hTBhNxyZshWwQNTD",
  "key16": "2PuvwtBmwXH1LpJhXKwyvrtUSGhQQUfavmJtxYLUdjidEsLVfSN7r53t7oXPNd5yGjzyevc27ENFRetU9iV3KUpU",
  "key17": "4c6mKmDxEtKRExKQma19hkMF8PdcbVXzyBrfxu9EbrCmsqTS3Kfoymjzisx6NGpJ9AWqw6nd4TuB8g6WLDLe8iHK",
  "key18": "31RbsPYaYyMZUPAjAqbP7k8xP62GXXPXB8VkwbZfWkQ4M22x9QGknE3v1sJx5qTW62TbZR2SQtjE83EHammXSV6S",
  "key19": "4eMHbzmisSfgpNgbaMv9AyDqfprPzYWmySppU46kZw48a9Mv5Y4z9npu96UEiQ7cxK51cj6qETnZEt6fvN2npQqX",
  "key20": "EuK5KK5mR4a8smf8jSu2jK6KfGw951JZbyyfS5ujUpprmqxZagYFryiK7dSawnqaP8aBcrZVxutgSNGpTcaMU46",
  "key21": "iRzWABRn41q2yV8qnxmMQxYukW8qv6kQCHbG8gqkXadkYajAzwYALAkCk8FRvMi9kHDUVt4h6mEv6Jiyb8JSQKz",
  "key22": "2hcvZuWX3JBzaTXggHAuyXoZSFLgYdvmaLgQgqhp5baumcmtHZEoxW5iXusZg7jD5n84buYiwJWnpUnzXXAtuE1X",
  "key23": "2YWRhHzMT54wsyPSk2XG55XVMgqbbyiEjWNfbW1b2Gw1qvno2kL8C6a4h3yVAcXsdg2zrZ3TqT24oULRmHorT82e",
  "key24": "3JFNMBCiTeURwVqj1DmNcBNtBnnPc4L3tHh8FWU7gE2wJe9LVk3rXLEpcrpLjqCEz1nfL6biLVw3HpTkpS6BrzYJ",
  "key25": "4oZcs2XtfPKnTmwG1dpDu8z32J4E4yQ3hwC3bugDbkenkEUFCMu7YtFExFarcHPgXhJe5forPmArQ8sq2ts6LUZe",
  "key26": "4iTCEt74zPXfvxQ5kGPk14uGhz6cuexoBto42dqfPjykYV7S7azHqARS69EVesm7S6LvQjyHzPB1qhhfpFFUnhrz",
  "key27": "4zhHGUJWPLrpd9RDmD9LbzJ7Vjs4AEuns5bU6e3RP8bMUA29Zqx5Q3FBGiVjMiTUwLxAnjHDKD7cbaN1n7bhv1GE",
  "key28": "3z7BBhkkDvpSx1qK5ZnuHWYcmdNH4p7RvvXPsXmDzKouUCtXtwpui9kuBCC8fM5QXAJotFYtJzE6puASssA3hdFA",
  "key29": "5sDgJjGaeh6d4WLUyygoBS14S3t4G68nsgNxLWDecTvXTGdaTUhgzeFM9QU6pgAR3Mg5xsKetMeqeC3uBEruBqqt",
  "key30": "3zMwCf4Ks2v7RkscTL9ooxjiErhjAnQD5VXcSJxDbf9BwdNNCkPc4x5BqBkGk9p4Q4BTTH9zjMv3UwKLaxUWNyhS",
  "key31": "5UXzfZrwydMwBNgTUWrbH7RgovdDCuwH5WKhCV19tNAfwL4VoNiKasfLqGM8kKD46niYc2AQ6JDztcZBtWP8AUk6",
  "key32": "zLxyy5vuCJqxTQWQSPUBPNuNSCHyDLEE8dLrtHNADUFE6HH5JW66zpZ5rYGDj1KNtbeQSRCGfYQkj2XrRmdP7NX",
  "key33": "5W5zThRUa6xGSxt3qzggoYwy4gLrfQP5Z7e1eEcqvoYw9un2pekzQDrNiWGFqSztUDxnwNPLnoCUNLNmng5tNqwM",
  "key34": "5kUy4jjsarxErGmfVfrEMsvwCjYBdtnTeH4VAdgmMqgzLcJaQg3YT12jkjA89XPSHfzXRy3pCFziJPGRHjmf9AdD",
  "key35": "2qLkZbkXH7F5YDRaQbpKjD1s8unRWbiJXTfkYdmHSzbFD39pNqzwa1oxuRcF9zb38xdDQkmsETpCAWe9cU3uU9ra",
  "key36": "2jBSw8xUwEExqRBFz7E6JDfagdjczSB2ELSJPPqtpey4gAmsyiCucdQbwCVdkbzKqpuktHQCiqVwywCUEaUD8uiV",
  "key37": "5yoZfGvL4tFtpJUeAfPJKan1bAccTQnD2W9y8u7ERD92zLXttdbpmaodzXt9EKzSfpsnNbBvRZXwT1agCx7oFj3w",
  "key38": "5uMV8v4HTEVXk6ZNjW8TY4uSDje1qNEtWcnKLL3cHdes8uiVHQeBXV3TMVYCJAfsJqgtqDPp7jxv6eZYoFKvWtKu",
  "key39": "2T9hRVzB3DHpjDJqfGfZbpenxhxYCgntGKKVC6gD9ZdyqiMCrFqHAc9V2iYsHoo6Tzb1XBZuALqcJKZQJ3zTyfVq",
  "key40": "xZB9Haoh8T5oMsbkoKgLr96JnGhaYyn9Ez9owhZUnPgRH8DT1TyM5qo8qYqLzhgvGZExhyMKShguo2chEuz9mEy",
  "key41": "3ba2Ca37B2uPzfAvD9SSCgzAp3hYPBjspkV2W3DBR8qQSM1eRS3pRdQA4XXzbmQjMq9RofFX33s8Nztnijqa81Ya"
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
