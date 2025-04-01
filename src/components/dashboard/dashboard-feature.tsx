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
    "3RFgv5Efp35w2pWjvJZ9Zy4KXF2A7bjzLAxU3A3bcfkRa1ZPHTG79mdfXZfuFy7krMAwJQ91wdKB6iaHEZZbDzJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eCkytGwsQ8HhhvxpqkYYTqXEvGxZj1BF5YqWVtrF53jDG1K5SWvMPbtQE7v9TazN1TS3h6No4h9h5FbRZUssGY7",
  "key1": "Key6URdGvz4FJ1QGB7i67JJdc7uZtowUcKgTnXwvTeA3Cse14Ba1qAJcs6dXx2hjzzfQ7zrrL2ouJp8ZJ4ZsNRx",
  "key2": "2E5aD4shEBDKTrZzPhAhjNwcFHeaGx6fpqM7mT3URDtry4dBD4HKmy5dm3PBFLoJXdAJnJFqxK15Xz9EVwq7biy8",
  "key3": "2iyeRNfFdm1V7QgcoRgyQNdhZAqrbZ5jN7zAc9TFUp4PWbjcS6Jk1hV5vH3ypibyUbapQ1UKSRgo51Knz28MBRz2",
  "key4": "4hTStxpgpoB927PFbzYVaYwvVPcgVMP8AgCpNZJU64SfL6bBUG1QA6mEJaRheujXQhEtc3GvY2Myj5SQLBuuFFwp",
  "key5": "C1eUByoKN4DsMM5Q4DZrqiVXMe69Zd7fUxNhxZkTasXkjEDhRe4Wgep5CgRfEQ2R2sV9k6njM84fbfYz4CpwBFu",
  "key6": "4RGDUFKjhWxWfo2op7ttxpqTQaiUhb2F5MzmWvmm8jNmpBdmQfCrqChqmeKML2s6X5Yg7ubmyaUhNwNh3ZVV5LSy",
  "key7": "oJ8jCtdhxLq2i7EBbdLtrBVctFQM6V5wF1Z1D2FW4sSxUTcVhgLEGgL67wcLeD8Tbb4CdsPozTmx1zLGFLbaDEd",
  "key8": "NFt7bURw1FrFW8qoMWvtbQ2YJ7miD1NMBMFuSw9LKjCX7oJwNaYGHvzYCo2aFKHFHphEcTHKWFXZSgN39HaqQdy",
  "key9": "64ji7NZiiV5VB3d7KPgKb5mhh4a9cKZQ43fUQ258ybxQoEcPM4HUSJJMdxiSogKyiviVCvXmmBCCtJ9VZRiL2p79",
  "key10": "4pUBqGUqCVnfCCc5cMTjsVw5YgHJ2rUjpmXsMdwhc24qqUTG6kpeJnTdgVcjhdbGrES6NHWfAdGDh42HGQJnBrNk",
  "key11": "38T9vyhHyuWQQy49nReSzvF3F4Hjw1azrYwFuMDUx3soofZ9UF68vgaH7iPLL8mUubNwvRBixKCoemX9QPa2AqsJ",
  "key12": "2iaNirqJtWDbgaU6adEguDdH8PxoYhCDQkPNx3wonzjySKzRkq4uDHJEtpdnXN5kzrPsKDAHP8q8pDWRxH5fCFKm",
  "key13": "3phecxxFuKcJpByJTuUs78aHsgFA172dk7pD4CyU3Y2i2B4QGwEZCZCJSLB2eHWSV5bLW9NzRgBqVRsFpp5QXDju",
  "key14": "2NFXT6MGTYD5x2LTH3jod4h8uGdth3RGTtQCR1H7S8uhRftNauoS29AszMUdfLQAohC5r7em86P96rhbsbJ5zJS3",
  "key15": "8LLZarMA37m8aLTZqTAeBirjVQoMwbFv9t2obvvFNErxftmAvbY43ARK3eTdvRGHeohZcse5q5o9TKigyGwmojr",
  "key16": "39dBUXUbE1MVjzyHq5hXegNM2P2wx8E4jkk1M2maF1DPkzwhyGDujrhyg7oDkXFDnuCLhKKxC4xNeByz3R4HjfkX",
  "key17": "5hHeuBMsXdb69bTH89d9JEZXmAnUhPZKZAPJ33eBubbCfFMz1EbTpkAAegUAS13fdYTSAxLeo5HwYDKfBc2x8dmk",
  "key18": "27GVc7xPxesiJYLPHBo2QtNQU624CTe5e1EWbEmRWT29UUvxVZTLY1m1VVXaLPUpX4cRuMaEcRhEbcLLhLjshnUM",
  "key19": "NFbEYS9MkNBRhrTrvr4EzmesnCztF7qZU8HcxcAqBhN4UAovhqXPyrwU42EAhYfib8sU3qnyRiVqinHYjzWfAjm",
  "key20": "3otW3gQhLggYSjq5zd4GABcc5M6ro3daxAbEH2FnEjwP8t781fPu8ycvJhKQ1EYMXRSbzQMLaPGzP3wiSpSaQTQi",
  "key21": "2zP1UUQVFVBRbebQrMZVWDeK3dxLVmP1wNMgSERLDVE3bptTEaETg6S4zWSvXr2ho6dJDVvzJRxxqbnfZiDzXuYo",
  "key22": "4pjwGGrWmX9yo1by89ozEWttKv2MWzM8EHvFe57zAWZSFegQjmKv3iwyBvvGnwQ5yD27sHYPnHZc3bFuNhEyBjK9",
  "key23": "2zev2pfanRbrXLpdkbaaLt6vV3XJMdwU5f1Ymf77bWnA7PsZ8kp1pYSWwrXGrsRNAieUiRjg1ZXzAPq1KxpGLKvw",
  "key24": "3akceQ2CwriLN2ddYjMx6eZ1z5Lz4scnyG2qy5NWNweSBR4PWBtcd81nshZyx3XdZjsrZEbqakYGfUdbGTc92YyV",
  "key25": "2D6uhJi8a1RujnPY1AUqDJqWhRYYVjPk7vW5zYUAFzkJAeKq66s2usbmEUXDwPe9qVx3dZpREFYBcJZVP4DA1iH2",
  "key26": "4jTF8ReNqU6sZ5EVRvZ6wZzaPvP6oKFj4EHy3wcU2gJt3HiVLpD3GeFJwbr8RR1X47nU4gG9t94ynVCs2uAF55Lu"
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
