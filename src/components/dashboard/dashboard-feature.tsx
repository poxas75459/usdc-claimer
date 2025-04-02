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
    "4LvTnu2bWjiyD2byiX7meAqu9GkVTYy8RG3viQvjjvF19XL9x7nBqu5dg5XVqgiNtFgxmBwXEaVFh9SBbzzS41J5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qA9WiW7L2E5AK4Peb4fS7ViHDNiv1d5Wf1isDUYHieUm7n4XfqmHi1cqpvkjQNMedkeYXtv99LjiYqio9NU3FZ",
  "key1": "DBH5p5sUgsSuA3bdsXw3foo1SWKB81tqq9wfxQJLTgSVas9W9ueJ55AkyVmAGjDsYURq9qTU3s2wVdmVLYJefZT",
  "key2": "5NAmZaqF7h1uHW6XnL4aPCU7Br8crV2wiMGoYhCexnLCNBmqHUcVsXBHfWcQyeERKtPW5rWALgwer2dn3mcKhmAq",
  "key3": "5k3Qsq5CC6gwf3gWGwKXU9zdmwq5nKK5XLVsMMsUhb4X4bLr1D4P2dCXMDH4Y1ZDUdcGeRJNkvb1zmKoEpmXRSEh",
  "key4": "4FtgNSBUAAgp7FjdB1uEVezXnAnWJPmKbrSGoxnL1q3n1C71M9VKcqW7aXfBHNyu9QgFNdXCpQ7uyHhFQQ3buaHx",
  "key5": "3QyFnGr8RGEgRSJ3VLP5R5LqCMB6kxR5R8YfZjy6twCLuZRKMG195Xiw5wDzU5VXuFpeK47pZZjoDCAnjZ5hw49J",
  "key6": "59omBb6hx8o8aR7UmteoR2vCKA1ariU5pzi9udSxFZnhbchhVAQ2pEZA8vkigxwWrAtnmDmBeCRmsBQFKfZnTnjs",
  "key7": "3QudHfFfsFDhxKmB7yyRktfTcYjq8V2g4wmprdsQGzy4y3zk5QgbqWNncWNMQXWrYk64mLGZucYWwARwtt9QhwzU",
  "key8": "2qdPeD9ikp7vDf9m2zpgpurX7rTyut75te5irtqTwgTvt66QbPG5E1hWxo9fC3ysBUnTDiM9N8YHpiaUAuHZ1xHQ",
  "key9": "3RCpP7SfNitmGFemYk4S3MhorcSgYyVFYsNCn3MCHQ8FabBVq8idATxFJUaRRFkxzxTL6DYUiwYA3D9J3ympqezJ",
  "key10": "245XeaPDK3h75Pi9Yz2MUec3Vzm24iyfQkdUwnS8aGnb1Fp5fhPYKvpD1BKsGakfmrsYXxcxvbWZ3DTAGnxWqPof",
  "key11": "5JRigFNc8mMYDq7Gfb2e1wqEuPWMcLDQgkB5s5AKCYW9dmzuegzhKDGcyE1cArUacmtGiDmotiSAqopdgECHJa91",
  "key12": "7nusmMayoygJjs69yMGwGGCbHTPMv4RqjXAGxXVZ3272jotMn11ji9jB3TdG6nye28svcYL6VeenrK6nPyMMBUW",
  "key13": "5j191jBQTQAaod8mPfdM2KaGUocLcHForAN3XmuQ2FwkCNGQvKaFkPCaCkfG6i8dDLpN9GVkgo34wc3sWQCpq3Dv",
  "key14": "32wj7sh7hd8sZeF6vzPcknkTyQ2JFwst8CyTthFDcExKvhN6fXpD7UrnoGvLXeNivs8Ks6rEmATrj2wQHawKEbTz",
  "key15": "5xH2Hy8veawtV2NJJwLQrFaBZ86fa63BiKKZamGRkFWXwc2buwHbvzwcgvtTGftPZJBnWwbAu6UJMFdagaFnbAjZ",
  "key16": "42YhsHMUw3RiYAs46FYFKpXfy2FaiuvQ2gTxHGSMJDz2xQnfnHt7Joi2PfU6HoXgNUuXzyuKk67rXNfqAPya99up",
  "key17": "nNE1hD2MjWsU24ngXJ3Red7TYwJyfZB4ZCukkmM5vKZdP1H3pN8xSB4RcV4ybiLJC4eUeDx2N9gDLjdm68ua5eF",
  "key18": "5Rn6tYoaM3AhBohzkW3FPwvvmjmigugJy9qgLzTxZW4A64sMykz1fFMHfwCnCkd8Pw8ExHbzVPGuDAHidwiKdrqA",
  "key19": "5q9QwwKCgBVMujtJ3adTsk9pBciSxWrf9LK6e4MUp11ZVRUwNGk4EP3ZpWApnrAhkzzYXHYu1oKrmwKrYMzqc2UA",
  "key20": "gFz4z9S3fbbZ7j8FbJDtdgE3hKvVuAjJfnf2ULH8moxamKzpsrFphLf668vid5mxLL9e3Trsa5bXu5Jyv2JyDLT",
  "key21": "48Q3EB6Y8yK9rdGPaC7BUVreHuyHGrqJtVkndcpP5QcBWtYWrpUjpiwjvUxuUCjo3MuWJLwSPsuodtWTEwAML46d",
  "key22": "2BFjMdhwaxHeHTipbJ5hAt9nYGgEfN8oY4afJHFVo3JWzecq7W2GJdZP6iQW2svj87MYBserhRiXZuG2KLm3kNwp",
  "key23": "626pmNXWF9d4Q8VhM1UrrrKfzrgtEh4cqR3C6w7xwiuEUYFtK9yJ4JrKpDuLhAiRS2jWpqGg8RDTaJP1Z4FAoVeS",
  "key24": "4odxuJcbK5fj7DJx9cEmekPZYq53uhAKZ8f1q6rcG5tisx3eZw8A3G8hqmuDofPys23rHfMK82cR5BkkD583ukLf",
  "key25": "3r36DZQzqCg7sAfnRKDDRn3e1zNFtQAXogu4YQKmf1jTee4Cc2JfKTQVTBvdpjX5LXJYNgANGaS48noY3opeRV64",
  "key26": "2tDtdhGSpHYhua7mTE4DLsqUDTQFyx4CYRgMxQaqNqWjQJ2duQjqYcS3mzfsMWC4TYQRgJLCbb1f1JC4CktT9gFN"
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
