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
    "5jrr7yj5nXihTjJR2qpYCSRFqS2s1XRzhtKv92RLXox1GdCQvDhBckZLdqN34qjRbtMdEZH2MYKUKWrRzY33Xf74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37faEnfqcXRgtP6iYqcVsZXW78eokz3HN35RQaqjYX8tVyWG1YbUtCaUZN2JvD42ZVKFgBo7LeAri9tQKcjRGBJu",
  "key1": "2XWFNQ4LB3q2eSHidVBSLU271XsxpEdZ7rJH7tJRt1SzPLjgRrdCQt6M5e9gxSQgbroeUn9JbxWHC2YcQYoXFA2N",
  "key2": "5ZrzBBaNofGNUi3Gvh2VqwY9PvbSKxnmkKEAqP8uj41FhQTec9b6YvkoZztBCxLRHofRXsGNKrW2NfvSj4ryT3WX",
  "key3": "4ca3LdHffCJthwDbwoS8KtKYx9AERQWDtAFcpmhQmMqaLdWtg3CHShMbrcXEpStzH2nrcMXm64aEAddpGecxUP4c",
  "key4": "5F9igt63RWhMgh7Mvw71FyfSkbff1WAMfRDw1QHhYHj9vdeMrXGW9KKmcJnjhYBSJVCqBHLLS8Nx7wo2uFmCFA3j",
  "key5": "5U6fALQwRAcf3Fc1py7Aqe6gBX66ZKi9i5vpFvA3prFc42ddNFGJ39W5Q4EdNyJ4fnCr2zSqkYGLvk9Lr4LznKyZ",
  "key6": "4j7ZKQDJ4bU6TJYJn2yj3NevsXc1DvvHejBrnA7pn86sXGNiwpQLJz7pP7Jcq6gRWuQ5uJ4uoNfATzeVM1nepYMd",
  "key7": "2o98Bk1vEgBEdcvWeF5Ex1DPdT1MR2aCNWrrcrBsY9WNtZWSDdhQa3o6ThYuPkxayzYWTPVx3ZHL6UPmwcoY6ckN",
  "key8": "2UaEeqdBpWfXgdm6JkgDoH1Cinn9m6hfFVFsmNqUAAcdsmRG7d4gRWrdNDRNcNhBw2Zw5gWnMyBQzr2X5qpTVFx5",
  "key9": "4cPw3qaT44L6TXRYyiYFPNBqKnHrD37B2buMFXoHzVvj2V1BFX8ekZHm2nxHe5UuoxAgXTSSW1bdhzx6v9Tbm7Jx",
  "key10": "2Qf2odpBZdD2S5PXXtxJnTL1YqoD8Aknywe65PStwXqhP6SzaANn8uTrDmukRJAr9ExdFMhmPS9urvL6umQ1pKuR",
  "key11": "55iwJqYniJR2LeepyB34VstbrwndeVaKbhDMUVMt3NTEJrWUvsF6KREh2SW66qWLHu8QJRyPWoAXrQyaj1f35afR",
  "key12": "3dyAGzmDfboq2p2J7sBAij86wfzbVWuaUW92ebed3V5NETVrAGLtBNzBtNP2VRGb6c2zkcfDqekppBR9mn39Shhf",
  "key13": "3Q5SMVwfUihoAFkahFt2bLAthPmK93anwommRf7Btr7Ji9A9E2vrwPHZdYLj6gxEsKMVU9ZcF26SAEyg3aGtjfqc",
  "key14": "3Nb7FxLeHX3cSjXEUTD6yw86RAuWU1ULSmqon3CzD7yK8dAeyRo58Y3D1pN2EnAKTsNHdiME1cgkyfHcC7eForEC",
  "key15": "5t7sRXx4AjZSgbGTRfCgL51h6GwYRS4fZej9cYjCMUM6LhhShaLoXiVdzNjLQcRzMUfcMPDvyXyLmCa3KNfSA5XW",
  "key16": "4Yd5zrHtwDnZ1LY8aQTNCk133xV1EyGbUNcdsbBiWCr7uen4MhtzGp2JcLoZAZcVQKmfCSUDAcm2YRNpsYGo9BvD",
  "key17": "fmqejauj1CUdCnVuuQWFKYGENftqiTSwwP51f6cX8ptAwXVSJbtsN8aiSLbHyWL375z76dUMLAWBUjoPXJpQpFW",
  "key18": "2tea53HfyYpkf8QDRRaFPU3ULzGVknWidGyMsEc83Wfm5etQJv4WVAes6ESSBf6dA5WxuzirK3pdzU7deCiKXm7U",
  "key19": "4Qboct9tTzJyqHx7VXsXyLjzv5SSgK4Wpggmi3izkuMCfrWosZXd74bKpEczksBXSuddzuZS4p7Vyhtukxa9pVDp",
  "key20": "3qxRFjjDRbmoVgEkJ4y7WqnM1XvYQTjHDWet5XZ9AvNWCHQLRef2yxDdL7qc2Ymxz1pVLonqqST5eUWQpKZRVv6j",
  "key21": "3WHgjvc5Hi9y2QEX94Q6rCn6JZ9Pjj1DsW7vrUC53N2ega8yAK4FJBFxUJW3hHr7j9Zj19pM15KeDL7nhoYfKify",
  "key22": "5fgEi2cDBYSy6ThxWZN1ZVK8rR4c54x5QuixtNn7WtbC4qfEJsGxhfp7YoNP2LoChjBoFQfJ1A4q8wCChqVhUyNV",
  "key23": "46SAJ72yAx1fr9hPJi6oFhnu72BzJ5ajbNpA1EyrgFbtmqbfZy1sE3CHKCLcRwtJEfWxsQystRa2HCEYESm7sMVC",
  "key24": "4MsG7Gdyyc7WSoKNvoUQjrBskp3yaxgz945eFg1MDbebVo2BbZ6uVFnvhwRSPrRn2DhxGWXLTxoEVdc39dvxvWat",
  "key25": "4W5dQU1cehGuJ8XaHzhGL2vWBGyFXvv7JBDhwzAxXbfuLvHgBy5H5mvAZ4dHC48oW23icGHgvpbdr2ZDRzHY2cHT",
  "key26": "5R8HvSG6vsuNyjrJFXY1bhr4kMMkhgSXDLWP7FwzACAUcpqwFnpP7Tu9V8VULqZg4M9vwtpqVWYA9a8xnQtXCoiu"
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
