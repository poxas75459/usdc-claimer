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
    "4akzGMympNoTXqwzFCDr3xuoAiLcUAiFxPXXHPDbqRnQKreKEdTWnVAK4uEJyW3ZjbRY41m2LncMCB4Vc6XecvLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjX7MJNeTSFFZVWe6p7qQQZsrwcUQGD9xSaydGVRPXUcr7pm6nQ2Zg4DdgMTJuCqDtAwzesA16HQLsqH6MV5kRr",
  "key1": "2RNWCph3yrPFKYTk6JQafWJSkFLMLEG1FXKSZqqsZTZkBoZLNjWK3UczrqKEezMaY9zfqcBJWfnyHkJKt5oD92e6",
  "key2": "wyCxKa6VrdhYPCbcwYnpTLmcdfhuAWWTVU6pdQgRNX331KNgUSmsZbjLqbj1HzAhbyUuvsr5CrY8jys3tmEgj6w",
  "key3": "2MPv3kKZn3ErNM2JL1wzyyULc2Q8WTP7HyVd5FNaWa5qtXqCUjEEVVjKJTZ7a3F7Ei7mcpLnMso9k3Dqbimmam1J",
  "key4": "54Z41vQtFbNBdbgHuDqUnD2mq4zfBUraGpHkqeQ2XtvQuuLESuuH3pEEa2z1YHFzjis4XLUHoyGXmWsrTEE6vG1E",
  "key5": "49j2JNBxEo4Rs1gDkm5s8q1XSLxfvyVMNZ3AaaxiuaqEQ9MefENHG15GwGwvUkS5dCAqotnhkDtGXLW4PSmkE8n5",
  "key6": "veceqpUSVnnsAwPCuT4K61dwaGnBxKx2ZMQUdsLx8v8J2BH15xth6Dt5RUNMQMLv7nmjzfRde264kxTPzThfVXy",
  "key7": "2WJwU2EwzHkfX8z9DMJwUxtum8zATk6b8BFrC9ZBa6tkYoUFPsGnmXn8rmQhb2kNjgun7tFgHr8ijJ543fjShiW5",
  "key8": "2pCMcjYeHVshzAyCh9bwjkxi1ydVxFooNNYDUC1gp8aTXYwc7BBHYWYmQZszisAtw8zkSMZC31Z5CvLpKp7cpZ8E",
  "key9": "3eFD5SwgcCJRYyqc9DRPyP5sPgB9u9qSZR7keZvRNU2YWft7zJMboRfV6C2oWNGpdXFBKCq93K2NEz4g7kLFu5jC",
  "key10": "b9rWiSrQ6HNJ698nEuTEKKiZRqTvUcyDw7CWe54HmfKCaPTgkpyXHp4ViaZLa2AKqdx1ivhXd3FJE8sLmPHc6B4",
  "key11": "4SXLNsBdsCUZ1pn6zepd99QfWyXigr5P328k1V5P6TKXG8M8JNjHKyANY3JeKiGuy6MnkkM8XctbeaBgQtaoQR1J",
  "key12": "5acE78L19fuD6pwKH5XwpbUNobo6eXBHs5NxyLz8UeUJfKWmWZtYx5dSnkgUodFxoGJ6PaZSMAio3gmUs42qB3Cm",
  "key13": "3AaZfaaBeePMK6Gkb3Xt7Neegy7woEaNj5Hed3GsevsnD3v7ez5ViLNXWCgMtJZ3qQM7WRGyYtAA4SyM4RXAjTgg",
  "key14": "5hnhVhg1LtjRXrD3x38VLhqaHh4xio6k6sgL14wje2U7Ujyd3UmdFg1qG8TkMn1y2o9uDK4jQxGiE8F7NLrYVC3k",
  "key15": "5CyPa8DVHFXbCoD7PBKwZJsqVkZ1PD4bQaxmVYYAbpfjaN5GKPke52kDveAnVpAgxBbVzkB2edpJk8SJu2zkZizn",
  "key16": "3693R7Dibhy2gyhruKq9WrFGx6qcdNEmBGEnnLQ7s89UifRSKSXAv4wkxydmWTxLktq4P4pbBv9hxnSU3MDxLNpY",
  "key17": "3xLMfrHDnoiZANjo1iEUBfD34GTgEDPM9Rtk22BsxD5E4BfqTtbgGhAvs9gVK4ATTr9JUCwhgoteRMAPBvLUJwi3",
  "key18": "ztUABQKeDL1ij1MPdi5Z3XWRwbz6TiQssRCATvh2ocFcryQXEf8WAe4hFiH61giMH24F4NgG3f5UZmvH9vb4Z5Q",
  "key19": "4UKNBszNYu5r87uFg5z5dA1xBL1PrKMGg1pjpvyccjvFLX4RjtQKW8GGEuAcR8x1FDZz1X1zuPVqcYqnBnTEaT5s",
  "key20": "4ngXUywpA9qKCbjGVHYs6urmszj7op5mHbXnJaY5CjBHhpVFHDjDcpp4jhTuJGFrPT5xK6oSDcgcrfT2XHgnPU81",
  "key21": "3FwYoUbA52DvGGwHuSt8Wtat83aCJDju3k2kzYfjANgKiNT1G6b56AorCLkKqiEP2gvcHYnPLCYfNcs1uXRKMdyL",
  "key22": "3KhvBB9pv35PSpX3xUWYPoVoMNUYoQpj8fSoawTx6CKk29ZNNSVmKFtWiWd5RB1uNMRWj55yLY9HLfvqcxjdCtAk",
  "key23": "SSVeeSwnRyBw1dup6Cx2ezXUCorrCixDZRKa3mxFBNM5Ka7bwx55qLCzWa5DQwAkuS77QYSFF6Sfg2uPMBTuvra",
  "key24": "4CyYj4izHqvHtbxueS1RLgaYrWTMBEFnDWNvLnrVVYP1rbtk9BEdNufdBrFMMr1ZbgSyXUXmcbZA44ipUrU4zB3S",
  "key25": "4CXDQ8r3i7sc9PPmTn4qqcAD9bd7xNGhkF15Qu7dhoNaGYEe9QRSSTWYVuF8BWVjTvA3qLXA9V8o6kxoRsGJCNdc",
  "key26": "3Re8N8mTvAngDjHHmbqC5oYJV6kpqMDDqt3XGB17zoiRcvf4TEUBBtY8aNa3jKUJp9xJppB9yUvDhqRiDhtF3xkd"
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
