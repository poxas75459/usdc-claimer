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
    "5THEPPoAoUCVdiWo3sS3n7V6W5CGfRqhgLZRyj4kRL7eHhN6ghd59a8ZHYiH6au8oreTfyrFkizPc7CThsxiPjPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bny46qmkFd9tUzH6f1Z5VhxryL235uLSsjnd8yGNKB77aYsuk6P9VZwp34JLo6sReiu9fVbsZQKUjfER7EJ7irH",
  "key1": "32rRRpwoDD4CGwarErc4Hoi94K8dMnXCN8LByM7Zm48Nr6gdP36koiy8QSCQdN3sbdWceDULnH2VnumFQKYRrB8A",
  "key2": "3zxJyUGPK1FDJrXyxmjztFQhVF3h6j7Ne5hJzoJvGpLeks2WCC3jUzYR5DqqreoEynDosqVFK3h9sqFBkSkRvHSv",
  "key3": "3vq87HFNdthzKi6a2fo9Rf6tF5xPe5vZBacaEmjYy8Dr1nGY6ENZq3QBjfYdegpgrmbQDU9ZdpZqqdEeLgNZpx7E",
  "key4": "z9SrfBxDBnwX5BbZGSMPu4DnSZbMk4md9FEdePrhfy6dsNhGGZpLhwFtMzpmsK1VV9fyiEJv981k3WwX7q5BUGM",
  "key5": "2JrQZ8DrF3ebjJLsB6Yq1hwH2789PhH54SgudSzfLzamKsk8pudPcusPH2qcNtUZ3EZ64fVvekoj7uHuhdTK5jvD",
  "key6": "5DPCQwqapiABTKjvrpdqiQgRgu9ivacnhVRUUJVzAG2QZ2LEKuzPsJo7AWFccj4GnkCLLQdGB7vXyqa1xozeiVQ1",
  "key7": "62QisUExzAzDFBh185cJW88vDs55YReddnXv3NHnd4WmKo3EaDe5H27cBbaL6S3wz8PBMQV1V5mZi5gpMPMuhL58",
  "key8": "5Q7NPCcLTn1uBL6H3ZGPoAdDkLE5wA9UJiUkTnLgiRitijhXHWorDL7rWbYxuae7y5ko2yrXDvSecSbzJf9JzSt7",
  "key9": "3pWRC7VQyDwaibVWwHuncb2VDSzsMkRZjqti56wS1hSYb3yaV6JpVDUcs6BhZV7h2Z8Hcvc7DpMgNwepZQEPGEoM",
  "key10": "5q1qTvuPD58YEgGtSFF1nP5Y7pLMKFc23bC9yeuUyF1tZbRaEodocJ1GwdBvwU9xzYtXsrpPJ89cwRRttu6Bm7vo",
  "key11": "2CbA8aPMD2eD2f4sCwo8NLnheCZxjv8tSGLwfFgGscRd96XNjPQEwgqvnBLqQ4J4NZJ9PeatmXgrkVx2Jd2KqV1u",
  "key12": "2qtkwufesEDjjc2fabfYjsgdzkqk7Me1iyLdsYqvqmEN1dHGLPjADpAfaW6by7L718rz5HKjKWJ6fxLr9WEXFJNS",
  "key13": "48FMonrskvAu3MiEjvA3YKc2fhWAj6cTJ2CroR8pkxcuLiPCsfRTTxvtybVkKSXuo8aTh7YPwsDfHz8FEFXxqzED",
  "key14": "3GgtkguWEWYobRyGdGnS4DrgTkRGs4SSeN7nfw7kQiWsjB9BW1EbUo1qmATjYfYDHsCe8TfSLGVmVKVGCar7CDQJ",
  "key15": "DYihn1MQs3tiPYy1rtTiyVXhjtycgjtSp4iv1EPN83jFNr36XomtUnT2xs3R7cKy6p94ra7YCCNFsJEF24VzZvc",
  "key16": "3okxVBpYPzqpEUqd7nscseqaP1YHy4CckeMj6xSDUV7tRZfmrMdHchtMonLENs9BhGUj1vmceU26wwz5huSj5KnM",
  "key17": "3mhF278UqCwDPAG5RrqeNQdeWF26vzyXqBn7aLVJV4SmdYS5aQzWNxW2GVFp4yti1VyGjBGasyEEmyVm6q3z2W4C",
  "key18": "2SNjgHj6R9mnibjkwsuRkkVfRAkaEEYHWGpoxZYiKhattggdyjwSkTmN5PHLqfBwzD4Gz4U7fVXVXeejVKiUpg6R",
  "key19": "678zzEvrksrDuFPVuiFaKuCpJJ8ukeQtJRfzpnpfGza5mXhKYhT2W9NSXUTME9TUwXjKLjgDnCSGpoeiB1tor1Nz",
  "key20": "YC1ULFdubvG5iypjTSNediwERENQwrohpjZ342hfHw4TaqXevULFQabsVW7qLXbD3WVbgvhsxLoKosBcxCRhxsM",
  "key21": "4j1pesaBZELLsTNWF9LwjtaFmGHxp1a21Ss3hsDq95edGvDDHjmKFWVE9CdoCcBV4LdvyCf1TaTVT7Xz4T5aTfbf",
  "key22": "5jpaYp4s56V5bS1VhqTkUmdgPB7EKspqjKYPRxDEmJpjxm16G3XZa1q4Y48kc5s3yzPuYsoAEmvdzQ5JFL2oMgeL",
  "key23": "385KvVnECUPpM5UmK7hA49Xzscu6YLoK2gwZ7CLEL7LRDd59yFKKiQtjdjvRK28fesiC9eJTZCtetZUykYdMM6CG",
  "key24": "321XiQudZn1mZJdeVBr9Y2fcwqjFQxFgSJtWCKQiBpFj4D2ywX2USLcXKnAx4EfudwGCxytJg9T2d8yzUXBso24X"
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
