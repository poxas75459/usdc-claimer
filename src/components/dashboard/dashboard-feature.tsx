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
    "3KS78HZZ7FhLdqCaFe5ZTczcTsFUQFcpayXXBsY9PaEeaLn497277n3Vnes8Un3Vef5djBbytEhxLrmZwJ2Ykivh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sdb8TqcpkHxpBXMMF4HZJYtpUqiXgeRuy7NGxDAEEeGyXb6hffbaTC6mTKLieu2hycJ3HrjWTAbXCDn26wpS3Mw",
  "key1": "4ULaHGe5Vhg7Pqchf5zXDHYobAXwjuhNCyWtVdAxR6ECYFrybVFVfiiXjF5EnsfB1BnwVLt7QwxoR67AUSZBRSRC",
  "key2": "JX1iU47cCzM8YoCHqBajQ1vfz3AAr49Xeuh7osDVbn38T2Jjimu5xJJWYYHy2nrpDnA6FE2bnrvLPyDgmYYHKmB",
  "key3": "5hJ4GbSah94znbcGkcc9fYXSRk5yc7Ahfqj12tTAGcgJZkMnSSewT1frohRZYM1GXCZNBaRJGuxJprS7iNYXKzNf",
  "key4": "3rLAaUVQM2yEq5VZA54iTzNkC4qZ3TMaBTUJZiMD4znsPnYRGZ9YD1kZa1kYn5eTojUHV4cfr65p3YtjpRsPL6Vz",
  "key5": "3ER3aKWzjgCBGuftmXkeenmJQwza1yGGhnnJByrxnNv4mE2CyG4TX5fK44ggK9oKgXjNDTnSSsmHg8iVKcvFtWD5",
  "key6": "3iWMA9fcsKHb8KESZJuFhG3DoxKPMvAjD4yvHtfc9q52iRAicmsrmgCXngs2sFj5P8gPBVGHZvwRRonqu3v7Rb17",
  "key7": "3ZFncY82R8fcBUNKZv2HvNvCkf73F1t6sveF1Q4r6KfbhxJFK9mAQz4hL63PbDtdpMBjZk2omYEAgXxb2rzhTuFB",
  "key8": "3r8Bxx8g4K5DuHg1z4KjNRrTMF9spD5EkH68pesGX3hQi1vHtuazs7bV92WbjnGgbuEEuueSRhdMuHiZGYcv9xH6",
  "key9": "4udNL8dQYPsYmMFc81tFYvkdxW9vFE3PppKHAVkBjNnGpGQQRKk1DGMMPnbYdgG4UibyQUPk9Z5U6eUxuLaXiAhG",
  "key10": "35kaun9GGk7TVoorHxpY5GR9YGLgtrD47AMS8TRGKnDeKVq8nHKhANEHETU9y1JzrLRR9DQmx9NQzdqeoieoPzMx",
  "key11": "4cjJYXQ7EUk2yDRaoJRTgHWqmbT9uyeaG7G6RTU3JBgtG5MAQiTa6X3cRSQ1641aUTkLGkABkNHkprjSawAt4Xkn",
  "key12": "2xP6cPHNgEUbovwQ6b15UoTJ3yMTuaeYStmehFuGGwfHFjBgcfPBerd8u4SXWEYPrFFzuc1uzWbaTfxzsNMayB8S",
  "key13": "Q3didP7MH4jXnEnJFj2Xek1jAoqjpEsY2UzmApZrZafnC1BU8fvepVQZkfZrgjfaLgizCNmmsVNDDiLZrfiEu3v",
  "key14": "5onYfiR9id26riyARDswwxvf3khMe36yLHQ9fpn6VaBXrdx6i54uPaBaAeyvJyD5z1bNjCm3C3znMyTd2NocpM19",
  "key15": "2ednHtqubXNmTPGsA6jbaAC6cu7BrfxBdqkk7yTGCUTa121uUusZjRXsnYtd8Qax6fXgway6xn8ybKHDUwzh6GSy",
  "key16": "2gvnyVndBnZzzkdegrPB8KAaV4PKD9Z5qwBpW5uuK31PiQcqgybFKvpj69Ud4VRgn2apUsh5jjQ5SvDSKRTZZ1Lp",
  "key17": "dJVei2WUPDAH3mSFDRzyVy16qjNhoeHTAJf5Fc6tx2uLKmNTwR7cMLUTaZbPoGiqJMjGcHToFvLHJLBUyCxvrH3",
  "key18": "3nw86cNhbNEnZNU8JhUWQda7vxUCqa6dfHsKJHjvYAfwRyiMQHqecRtBXZuXx3mmWoFwrBTojJvxTWPa6T544Cqu",
  "key19": "PXc12fcE4jhtsXdF2Z4FjwWHL4gRGZxPfuF9VnXpVPCGb7RjqxrqVjzNioZWBS2kD5yCzSxHjZ7GzN3kuMyayxi",
  "key20": "4tABoTFZsjgJFJHvSPPyZLTBGJ58CKQvFAKsZcit1avPKYPSAvdJDB8Hso837VhotK1jVXKcPxVmpAKxPuiVuzLq",
  "key21": "8pH4oPuSvx24oe1kDk952C9wJPDQyohDzDHREPFhjeBFmzvZBPomTCiZaMQe2EfPwzdL3D7c2x9q37U5C7bAjwj",
  "key22": "d5kg1ZFtw98GpgSSNu2DkjhcSWvLg1mxRFpDgvJgFCBvCREyWYaFZ6ShcSfEtoWWcJrctmw5bYv7UgGEr98PvHG",
  "key23": "662odFL8Sdc8ayQYG5kNzDFmzxtP4zowhqxics85nywqW6UjGme3NrWhz2pr1qsUnMSJPoCv16fXzEMHPgoAe77n",
  "key24": "4znviLvzrZ2bUVNPFqwSsd7BZu6FqnAEKjeVH5jjD5ZNKUuDxNtRuCbAWJ1A8BrFygDwmEttgNQEi2UAuTFxWQUk",
  "key25": "5TJHjJiVGtzHvFQyJJjyGPaHnHJHZQsjqH2aY9RgFFXioFKpqVVnjveLY2Yddn8Bq3b9i8peK2cienr3AY5ikTZr",
  "key26": "5kHjr3LqYcUDUNJN2DGKaqj3VoHfyTdXckoaLY6cigDYuRCWYqYirvMxiLGWa7uowPqM72fKabpT5gQc7E2Vj4z3",
  "key27": "W9iDxbNoZ3wC2uKFLVWavBfQ9YoCCBwikSzkFooKPAQkZsNFekhB7JA3rwtg2MUsqLMYZaYPJz5ZYkPtotRc5Kx",
  "key28": "51acLFqfQ5bCJoqs8rUavGAiUyuQTeR5YPoMKWyUHxpiSCzJss6ynSmMQN66Jc8JpAQoGzJHmVuo75G7nY353jY6",
  "key29": "3EVZwH4DpeH9aaswfvyqxT3UNAjtY23meeWFQfPXgUNxCkVspGKn1qqfWh7KRmyx56hYPmQFfYt2u47wX4erYdTP"
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
