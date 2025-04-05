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
    "2jXbeduMJTej2behk4aTNk1fbBH1k9D72h3unvE3SbNfFGrhZv5KnM4Mn2daqtyPjZH5paDYfACbJY97Ww5NQ1xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uj1vrLb8TXhGcNkuCDwZpK6XARMNzh9WjieByEKzNBDUsgz2a22K61F3EUuv4CzLNQCnfghYHnWRVKmmJuvXQF9",
  "key1": "6XJUCCynV2TpRHJJnYVR8PwmiEA9aVk9gW9KQqDW3hBvunE5hLvpTcnAKkF1XEXD5WyWEeT6ZzX8woWsTFJMiC7",
  "key2": "54URj4wsgCfHAxUk4GC5icmtLgPhkyKnVK1k8gDyuKjMnBAQmXf6CYDCLCVGqn589e8D9ENaYuaBJTVQ1KMTXh9W",
  "key3": "395NkNQV7vHuj4sLN8cMMueaYMHNCkNxwBAYqnSuyxATjeznLFBR4c7YgJ5VZiHCK66Qn9HgWRVCeUnih1yULxQN",
  "key4": "V7twXhtbPVuQvhZo4JoP87DBXFB1NzfXPCeheLjm1Z6Xjs13GxFLtYRxdzKTuCXDNEjhkvL45Sa7jyycbn69oAr",
  "key5": "4FacQcWpzytyD6WyFn31kepKNXQ9aF8Nqaxg13WNi69SAieP84c6VMK25y7iURpSTniJmEaH6pDwqjYEiZSh4Njd",
  "key6": "4K5ZUbmHVWoLTQ5PqWfrNThzJtxUkxZUMhtzdUD3hAVSgpN7MJZQ1CQabFjhN8546pDbahP9PfCXmq7v9WnihRAB",
  "key7": "7TGcU9CJh15ShRGfcmreFVBomvKtTNifqZymPDWdTdM6wFeuD9oiXxjofbeJabRbfbcjPCa1B8jXZqxczpuB9ny",
  "key8": "QtP5K4PPofdYwyoN1x9RuieeBfFYeW7fv4ZCh5vcTNHXWw1rn97kUPNB2SHT4d38zddYkJuna82RHgqpGrKCEC8",
  "key9": "3Qco11DTfeBwU45ynEWhb7RAeYYKACGWop4dnKRHxQBqFMxdxWANJNGve39FsjTLskapvEEhnUc3NwsB1T3ZY7c6",
  "key10": "3XUPLzmsiKtW4PHocztWiLEuz2KrxMoUootf8um5CZNF8wrpVvZjJRgJ2MzoenXV95WTYvbVYCr632rQa1jRSZFj",
  "key11": "26unCur91QLVeCi4Q8aP4LH12FKiKviriGWa6Q2zEpEQFXVjRzBmqPZrY4i7nYtZZd7TjfN54UTkvQBMG756W5hk",
  "key12": "PvYBT9ME5H7FaaWpYKdxWW7kurgoh9QdqyerseY9ku7jYMcQUTGHDXwqJhCsWgYfAfb7DHsDgCMxK3PS73RBb9h",
  "key13": "7yK9JHEtkqrCkCewJsLSV2GFWmnaYF787AHTFKrkn2X8vPMKLJUCc1TPjWP9oR761iMTZcBm6NR874fkR7QwjXq",
  "key14": "DfSBZ1xsLTHXwmi6MM5b7Ar55HuUNfamu3idhCHozR5gw8jghrL4kwDXStqGmdFT3gw3yAZMVM3qV9AAH2uC5ZT",
  "key15": "5k3mjBDNDXcjzyGpmLXA62xvhfVkmj8vLqzsYxzhb1uxYLCFjHgT8FFC6iLAt9Sg6X2zCTmRWddoJXA4hvM2cba3",
  "key16": "4JTsgi5s9vJ6X293LiPP7Umy3ucLht1m1vReDGYT1kcGnz4y4paBYJyXrjb6XyZYa9vP6LyNWRoi7o4L1BXK1xRy",
  "key17": "uqc8tL36ZGMvQS85xgdLd4ZjmPXqoSVuD9ZAxkWH6YHH8Vs6brzvJcEwitNBL7Fea2arjqnQB3kLQ2HeKKYrA4A",
  "key18": "32W1oCUc7pTK3EskA4wCZ58F6VMfJHeQoDP67WXg7V9PXXFxCFsUuZtZLUV88sd2FUGE7qsNRjp4XZPR7J6vyMtg",
  "key19": "ZZCAgbxc7j8v7jaw2WQDKqS8Cu2y1Nkb16ExHgLT8XXp7QouCHqwR6CULEhSwMzpGyw66d1nYYRzrZcd4c9LAhi",
  "key20": "5w6QPCq8eUku42v3Eqe76RN7P8LzgznPEGC1t93xGiij9tHPBSPXgYwmzLn5LpgM4u877Zdp7isPJxbjMNSdBBya",
  "key21": "3qCm4T8XvCTDnHjjhARskVRmATtuPfDYdEPdYfcZ8sZSPa5FzSza5fV6LQ9buesecdcNJWgLE91JZJR339mmMNjy",
  "key22": "3od5derUvFFnbpiJMbPMVmzGRJ5BnBmuSmuoaXvus3YnpKdGZD35pVsUJiixXzAXKVtMPLiC7d5U8ziSyBCQUUPx",
  "key23": "3tUNGfqAgVjjFnBNbJCTioRZU2cnPyFGxvS1nrquea8KLDaxLJk4Qia8ESpifZgokQMFR7qN9p2eZWdPyjAXDoEJ",
  "key24": "5TxcaM8Nr1fhXtAUCdNBQ411xTmiTb7MDKmuwi7Dy5zn2bDkNjPxKGtAgp6up7k4JsrdNW2d4F7girB2osac9kRB",
  "key25": "4ST5NAZtZdHdbpYKPJU5afYQKvKgMHMz4caoj2fKm9jhnJCzDqFb5vSKSYeiZpxCHLpfmkAhrfqN7P5CJAXkbT7P",
  "key26": "hvpLpdxgAXgic44RZGSay5ETV3NwDtoZkqLbkh5HdfUzLt8Vcd9RPtwUMxph6D89XVZ8xuBBC68HtHQveDyYuTA",
  "key27": "4GqBoE86isJu3APBfoDaYbrQhnu2NE4nJ7ZhUMjYzww4bjMeWoxfKUKHZvXMtSQgAq7aHKFYSPJVVHvbqgEQAfF3",
  "key28": "5V6dAj7NWiQ8qhid6PHaR77u4dMmysmgndAYxrk65VdpDhrQq7s87gycrf89Qy5xatbzcF92sQbHWVp5iWhm11TB",
  "key29": "3m8jafbZgHWCjR6b1GQ8fp1mexJrBhUbApHRrTfWNiT9pcX35PW5AhNyNWD1iPmt1FZTAsfUB7vwa6cprqroLp7H",
  "key30": "3pELVeca9CUbj5mZkXmWq2VspzRNUXesrmvGm7dmWbzLPF586jmwBvwyrrWemEqtsKwCqb2CTW66VA2vxpQjPCNJ",
  "key31": "47xjoifdHNNcZCNTUgwdg51F9eBH6SAH3DLy1Gx7Jw7qzMfBW8ZUXB8QGfhNyUWct6hPttAn7pg9wHF5pgQ346Pi",
  "key32": "3E58hPaMPV8b8ec8MtKGE1D1jfDiPaYy61dwbPwKzwP64ZfBJBqG7x8GVMcGxsdihaaSpdtSuUv4iQ1PCLssUbtC",
  "key33": "ZmZgYdi6ynL8So7yFpAY3PMPrUcpHb4cViciQHjxdLHk1awK3oTUwULECUz6b4EXGrEeug7WwZrn2N623ZZBxTp",
  "key34": "53vgAhEwHZCy3Kd4Ds5yRFSYDgLzMjcvMLHfVN7qCXs4JcseL3ZNuCJKJZPYLsPCEHrHju8Dc3eesdr5n76VMzZn",
  "key35": "4zRjPDnX3WXFAQksB3SuN7TzJ1QKZoKcg3q9G57gQENM58s4acuFec8FJVfjSdRWD1cQdxJoApdrsGE3iZKFL6Ut",
  "key36": "5as91LdZZPEERbGneaVszuRNzVsbsapeU9Veq8VBxMc2xSTEvo4An7XDNuD5pAasNyV4yRDjM9WDubgT85fxURtv",
  "key37": "gYDZfrxXxgo36RJCsAWD1ogdPFCXxAt3hDSExzDtueREN9KS4fR9Y38RyURBaEgoCANAJ5vCoT6duvgQDL9s6na",
  "key38": "3pqPvQDZJ9hSAMqJy4iWw3iFoPjrFEULRpBo6KM61wG66eNEpUDBCZq1divx1LBY2vwzpVvqqtiWyyXnahKUcySn",
  "key39": "61K3LxGhxmry6bVV8pTnbekdBj9W6SKWFstXovbSoD5BLREExKmhVDkG6SZopJtbLABqQQ4noMK1xG7USjk5kqs9",
  "key40": "3nHJ9eK3rPXoh5bGL2Y4T8CujiCz1qNX3ChgUEyesE1ZFPs7YC6DyFHge2NLjMCwiNK9XtpmKC6BxupH2z9rTtRv",
  "key41": "4xUuYNzrrycsA79L4H6sSewQQtUQbwVf6gJ4dRW4MB6oHfWtKqUBgoMr2Ca3tWsADSNd8YX7pja8iKxckxoCQNiS",
  "key42": "5EPedkeWWjcn9izE9YWwsvRNnC17i5PW7WVAuWJ7yKkTZhU1N3Q6rfCYXjnfHRLTvrX7parvFvN7yJQRj494NSe6",
  "key43": "PAxvssZebnM4FZQ4i4Pu9NPAoZ6hdTFULowk7E52yzLne7M4pCP4i8C5k6oXcJ3hyNuuwAtL61Z8pTEVFouQxLN",
  "key44": "467Lv8ynTiAN8mCmDahYvANfWuvLMD57c2pRFNBMm7U1QEDqGRJ2RmnDXAji4uPwewqNpXp93exc6jAM69UMDLMa",
  "key45": "6zGc3osziwv348vFh3NQCnjDdNUmVzA9tmqQrLCr8h6Gt3qMiURFkJcJSKMhmeAb8JEL1T9xYCDZhHGUQbkwePi"
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
