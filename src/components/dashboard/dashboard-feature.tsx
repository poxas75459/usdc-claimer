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
    "L528HKszSFeUBy3qCVSzKZ26Mk2dvdqv9Y9Zih7NyZzHzpLsXiwYQazANPiwXY1kufeqEjLhho1mgF7kpD5nrm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "urgbPLSHUzqKPxLgWtkCqe5iyQvne1MNPTfREtN9rWcuD4gmigwGeQBYagpWDZ4DyjyEn3i5f2USXA6tFMtFaZC",
  "key1": "2ui7ZGTH5WQqaGEqv5s92ybnd3Tsyt87yqec7HWAkerSQec9oHNe7xLSWBtgQqfZS99W4CXxYhnj83wQjmKvZ4vb",
  "key2": "xqSEcVi3AiLwXAZtxnRP1UDXV8JxgNHwJk88iFhdFvkwG8D9z6if4VXDkLwfwTgmQCqevi316vsxzmqwmKjnoQd",
  "key3": "4RBFzkCGFt9VJoh26kywA96LegdJL5VEtKijPvga12FakZdAVAkWdRawQN1TwYHAmZhxXAFBT5xZj7LXLGmBdtQA",
  "key4": "2C4qcZwTa3f5JQgezxVpDVYpbq5MGKpneQcF9FK21F3WuRYt8tQ1AK3esDhcHYKMtCAof34bvocmeRgYMrN4xrCW",
  "key5": "4zSgjzgkW4uFuhB7QRzwJqZgX3LVWyVPMceMjSHndAhmyJTcvCTyVQqSkgxNLGfZB91Q9CgLA2qGPW4S6UaS241t",
  "key6": "39BXQX4VhDFC6ctE14Ttt2PVuo3NZbKb9o2J1TgXcoHi2TudYnb3Ms6oUf3BSwNmGYd1gfCws3HRw6vBVQeYScWE",
  "key7": "38R5X7CmuBuwBuNyZnYNRAKp3ABdrJjTtxu6Vfkcm6fTkEsjTvwN6mRghEyRFCmJ8RrP9iYovDZhDqRFrf8ASPrC",
  "key8": "vL6LCZxKg1mLpJBGJmDZ4nyTt2FvremLDx8bJBoiJNw9DMohGpCPRRFZWja6CdypFhLUoHqsMkN1GH6f3oDz9un",
  "key9": "4uzomfbTHjzQSUzqtNqtLiVzqtg9EcsSKGDNeuFm3EPtcfUTX6DLxynM4yBpcwerki3eVZKfHr3reu1U3MM9JhPR",
  "key10": "31msSKyVt8pgfALXG3kDyL9Q1t5oJy1ZQgGasakFj1FXjh4LQ5i2qcJkqtfFkSyuPNvZQZCeuHa3ukzgSjAPKP8b",
  "key11": "37yHF9RoMsVMMHhBuGF3AiGYL1qRWWSRY1VtYBBVGyXcp3o87WQaCZABYpznwt1kTJrAkFw8poKZYhfvphXsLvf",
  "key12": "5VbSSxBNmMyrmzHx3qAuaK1tAY5XTbAsuW2vmRqKtKf8P3YxRbDtk9V31UZRbysnQ5z6DF2DMBzmVBoqT1NGcrEv",
  "key13": "5DxVCEPRPcaiUh9FDFSYquVFDTeGVtknjmsbfdyw4WFL1b6WfGyvK79yrnSxj7B93VpZVNzdmM1rrEtNoh5oaEBj",
  "key14": "4214RMEt6i7RK8aQGPZoYtWKZLXyS6uSq2fmZj49EWRXYT5xHx6YoHkNV85FSFsAr6mW6W8ASZtYKeDxwkmmnNKH",
  "key15": "pJXKeKUVg2f153qJ1spjMsYFuth2wv1WpLAoL71qaE9y6jrUfrstchxWj5XrfVBD1CiNTi65KqffMCjEwrLEXp6",
  "key16": "3CZ54JAxJo2DLHK1F8Ujeg1kffQnijX2FimqKSrhZ9aekhuTynT2buuERkUsSK47ssSu6rPouAQNV1WH8YCgYazJ",
  "key17": "PHRvXSW1h6ZdRs4HjpWRLWVoFcdLuhXjzECrnTK9uKFmpFJRw78arzdEcSpKCGYVAiuaYkTTBYJN7yHm8ytqRdR",
  "key18": "XCtMc8SgEj35PejyyE1CtyzKSr1aPQZ542GAav1VPQu9tQbiEvfNSqz8uE3gEB4KjbdyHXV4xPjfFfqvGBM3dGy",
  "key19": "2h9yDoJhPQvx39WrB6v3ZDGXgJGhvnjtojNnWrXBwzTEYQhh3EybnTX8iAb1bL2S5U1f6WFQuQxY9wMHWPzrEQ97",
  "key20": "4UWdp3wRwFhSmAmWbTqFWZ6woDk2xVX3JBGEo8YGmmoz6ufhPP1541bZLxJj9zYnCuwNUeUzrkHqWUhtcZPPw7eT",
  "key21": "35C3Qrqtms5kq3vq4qYm3qbvgiJyf9domE7NmFdNyMMyFYYvvTeAcerVC9bkNckFVooK1UB63SsjBcwuV4WzCXjV",
  "key22": "QYc3ptNry796j4YmDaT4KJduK56xos15kMYLbVE56auBnmTPtNF8dvMHjNxhHxHAg322o4PHwyrNomZPSrnw78C",
  "key23": "33aCY3zcfaoDUrf5v5EnU9ZAHgVMpv4iUn2s11d6bsdPUF9PfzFy5PZ2DDKxcsLAGEJBE8iWbQwUYELQyHLrRw4s",
  "key24": "5XFCEQuYAisbJ1uXc22m8PiGU7CCDTtYSnEAGAwFsrTvCmwhVUXZNvuL1bADw23SAEbgyyiTKV1wasuczZvqV2CX",
  "key25": "4m8zvjzRA58E51ZMt6o9bERQGX2ZvvQR8XFJqiM6Y6SMPvhhTCbTcPod9xS14ckgpEFbJqhmak9DJwjiHpK28bzZ"
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
