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
    "U6BQZumMjtxTjm5JUQTwmA9eSyALxMjMFkcCSi2bQFDnvWXi4bprfTPt7CmaGfWUw5DUUmKyrr8f2cuTSewUf8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wq6G645uvx75kBBr789tQoTCvzZSjb196FdmYyxAZxRFgrZZ7cMpZQS2paTL7KNsDq4DJgxMG5RVKxPMXvgjYux",
  "key1": "28MYCNNyj1te1LtVYusadZ2ZVMUfRUe2oCHGiRjkj5ScZicuWRmrc3BUJ6oHkbh6Ex1HjBnvCMk6d6wN2mFtV1u1",
  "key2": "3eN3KmjXkCo6oCjSR3ySxKADPqzmFqHp7Wh1A69oQ4gNwQBbJq1jSmM5scQdJsY7yJAx7Au1XavyD34Q4N1yqvWD",
  "key3": "5nViKZEoyWpA31guB2FGaB14VVKtA5SLiRDu53VAzTKhdfDqzLVtfiawxuYEKp8gF2npBw1MbRtXRryvazhNjgnC",
  "key4": "5Pzysxqr3XYByfJLdwHE8fVBgKi1X73JKFPg3qrymMqYwaUdcX1do1ciS4tHhmjez1qUxF1zDgibeNTajpwhwfH2",
  "key5": "V6KsLi4EPWdq8nzoUa79hzBobngg85yGQsymCcioWFSA3we1pMzo8dt3SoQH1x1cdt2GfgFHRYMsGpCHvwj4VAD",
  "key6": "5AtJDYTh7RnpaH48R1UdZDtN9mj1kYyH9vBprbZkZV5YZjoFuF2c85Bnm8QDVFkSZm1rBQTnr44gBhzAHSLnfg5R",
  "key7": "4vxwzQfR6CKdF9VehnDtGXcAXK448F6nWqeDsa8KwLq9hJNEV6Kf1v8mCpknJQJbLQj5hXBa51L99qyRiPgGk5k5",
  "key8": "3PFTbT8WVFEmVFt5pTauZBa6yYQB8ehSMLy5tMH27GBfbJ5Qji3ieqKe2yb2vk4oUGJCfbXRcjApBkJzgkhYXD1h",
  "key9": "2ucE31Xa4ttz2U8DGxzijX8mcQJxNC784jYfm4rQktr5SUJbCZTr9psZAkZs9RFRUpjxjyX2AWMGxGbPQaTQQVoE",
  "key10": "4Arpn2kyGBL57He35LS7ETkVyJ4SKmyowU1JgxotpNeSYxKLLJw9D91wMRQLN5msGZ9p2p8aBJ4Ak6woE3ZRZQnb",
  "key11": "43NfAdnHiDEwVqHWDuigTHumZcYhULnxiXLYeGzxzXekZhqxdeSXmeTSqfaCaFaGxuYrT6cZ6dMop4izXbRsusBL",
  "key12": "58QPz23cTNBsBhfe1ENvZFZHDhXrcvuczJ98GFgoZU2Z7MgXfWVQNWWUsMbaPXAETccJp8YGjDaHQiW3FZYUqUJR",
  "key13": "3fQPuzpRNH43DkjjGpvbVd18XJrSEYB1oxdcbktSj1L1YGcRtRReHW8zuC8rkR1smVhzm6915qjYrTyWKhD1UK5g",
  "key14": "5GzwYtGQBpZ69rHpPwvSFKPgV5JFqyh6pGokBj18yBQmVM8Sb6Yu7XWJQ8a4niMneVaoxctJu4Kmced21HjSo8wS",
  "key15": "4c2cxHFkyp4LwRx2QRPpEjHZjQLTGPany6hqBV3whuSHi7sjj2h7QcAjpHYpBkNPWaaexa9bbY7NhugF1xRKV9DU",
  "key16": "cNRRdKirJyGYZem82n4MRFPH7hJrLQ3FyRKjhu4wW2nMyRwxeUzcfKthUrpspgmDDgv5hg4mXa4qbJ1jQ12GTRP",
  "key17": "fWTGGEignNgGbERHsRbq57fWp7uraoXrDVKNza7zBVsvEKQ1Y8oHdU6n5AEnxJSiFpFrKsc66Zi3BqPZMoqAfGX",
  "key18": "2BRBraAKiyaqyj6dUG2Do6jbKsuQcxvhTk5BpbyGANL4BGBEhXeYyasDJnJaqKSUk6KfDy6JyUSJRGNjFUNMAqDi",
  "key19": "SbQge9CFQ5ahCjj2yDUQ2wggG3FrSJYeF55W231gzg1VCGTffcfCStxHoxCCLiJbz7aJkpeGb845KtjuCdNFf5y",
  "key20": "62WcQJStthgu8rkCrGn8tUURRi5jEaPoCenQsiQpaTbba9sji7xVNk9iv3iK2MbkVYX5hsgyPuAEpKFoEFNghvk6",
  "key21": "2sT49ZRv2Rm6QteDoB75UB1ctLrVs5eidWFZNuTh9rAF3fCFVHNx8gY5wNaFtohUfLyav82a2F8qhXcDKChCkueu",
  "key22": "3yfKVfbe6vRHKQcbqfrGEnzvhid3C1bJ49xBr2azHs1L91ZyCjTZDYRP1XuFihDfX3PUyjh3AsZJUJwSN2LxXoHt",
  "key23": "4QB9APrWpk53yVEWb2ctxtsbu2v9BkKnSnb1NcpohNBXpp6fMn6tNJDe24HWXTr3rmVnFUx64SkmLRdSh15MY2ok",
  "key24": "5hpHRoNQLGLDoDSTFHd9kZt7AXJCmoVaDP9xwRp1xL3K8roqrgbXtjx6kPfhdLZJQC8i9ELx449b2vEdeEetNzhp",
  "key25": "4v7rrM4i5D4apDLkjmTfpBxwLvgCUFJnftm8t6uxe5p6ZreGaBMRZRxXw7GdhDrjdtzfycWw9HWr9JCg48uJoq6W",
  "key26": "2qfnxUig3sGrYiNZQG21EnXwLpLB2amUtWBQTt2cncYgxhBFWoq29ek6F6nVP2jdKGyBtTKNqACL5DZP8j9S1doq",
  "key27": "3c2Txr1dUefnHhoshWYRoErScXXSuvmju7fkN8Nh5BAHPcbdTXxC9xyEXutUkhtYTevGNZLMepDDcgBxpmCLzefj"
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
