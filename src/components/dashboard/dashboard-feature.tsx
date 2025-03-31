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
    "5sJUVitvTqY6EsZskjgdNfHgbYjTyqugmHxwWnvpY7eSuBbrzDWLM4Q2vJzVJVXgmASMsrz1LkcH7TznLubXyYMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XVRusxE3iyZYSMo96PPG1DYaazrXGat3DhEGKkodnQTwZu4GoaQ3EdXbd7KToSZRzT6G6j2o9dAD3JBZaiAbW2C",
  "key1": "66r8zBoioKrtAfqcEEgAdVcDR2NKftShvP1qVjwexmd9Brqu12fmctZdYjVaqbntPTynS2DwZkrtvHrcNFrwCGfD",
  "key2": "351XjyxyUVVkFGWECRRLyRs5b8fv14Fbq5jZcgrjVE2UgdN5GVud94VhvDiN4tW55q7WTXKTphJXGpqV85RBEowQ",
  "key3": "zPXtKr5kepbZNaEaR9GgKznJi6JzmYXE2btYRp52EWEFsiV2MExWNCSDTA72gVNoE8u66qyHhUn5t4qgVB2Mo1d",
  "key4": "23Y8FufsCyRAvdHnUr5dgTdrrvthwkqYnQVYpHu8qNVzuk1itVcrBXiX3SYBCVGDP6EGSYMaht8LRMLg2iHmHpmo",
  "key5": "4XbVPyb89cybJ9kzCkP3TrJzEN5f3AZkxC2d4nv3ffNJ3vg7QA9EhyJVeh7xpDD1Y5WsSmizkVithKWoVL2YStUp",
  "key6": "Extk7pRZM7LKm7ELbuJZKUF7pqnAo24ZSiX34dYyHwerem5HV8npPsWydrfUKkn34jXD6mEGmXwsLkqZLFZA1mH",
  "key7": "4aKHDpRaRW9aHanajN3Gj1EbCEkJXXG49EcAbwWto93HF8cXk4KyrmvrpmGNWx7VsQ19R6ZnnA4ueBbbJWg2mzeq",
  "key8": "2rLGhgyDwYcXbTsrUXixCCJqEaSzYBMgu7Tc4i8FBZ9EwpvTpAiLewtBxbZ35wU1TRFP8fExZMZ7oP2mayPw1W9W",
  "key9": "3P7721onpStpLZqHNaBfxwJv7wAUMoRh37yd41CYvNS4UMMdEq7FurF4UsnzWtC1HRLr8fUpfzqT6aMG4keqZA1Y",
  "key10": "4b5PztmYz6n5712du2t9tdyihps81FGnhjgLNHCvfa4PXuaKsBZnJHgMbjSF2Dz71qhnPnJbM4ygcmy5JEVN4hjR",
  "key11": "2vtN5U9BCPdtPKykDrkNQBHCJomqUK82xdaHCap1tEnVWrigSsHWo9WgcEym5iNDWg2E8WLQtRc4Hf6aqS5CwDm4",
  "key12": "41pgzgbTE7idYP2MNg8HDi8ur85WAyi78aw7MdNPRXcFZGU8DYgrpKY1k9dRh94guWwHxz4ECsP6GFDxYHheHHML",
  "key13": "nRiiWv7Q9DrMRz8RugTqQkSdiLm4yg42k8SP46u59soC31cu87oAB2ZvZSeALwmAuTqqvz87gm1nPgmFvqd6syw",
  "key14": "3saPzPTbfYRRVfLjGWxBWqE2m1uVYa2Vy8Ukx1rqFZmdgySr2XTb1JQzDaS2HkzL6SRpyfqBx41cwWHCGA5Bzm6T",
  "key15": "2SEV98apVNg2QJTXVuYK6bnmSVzT4rSNJanar63dvVm7zTL7sZp3sWuMyQayRSNFqDfkMwjS6ZwjwHpc3pS6S5ZX",
  "key16": "26Q8rNszVukSuTGMtMtuVACkw9PMyoLYDqMsovMbfT5r4riFGHfSPqB8VywDLZwWarXjTVvBqDKwUgpENWjpweAv",
  "key17": "5tuYH17e3Gv6a8W983enRaE2sD61Nhs6cU2KxW9MQ7pNLs3FWKTyUJgP3e7gz9vGF1RfScxs2eMXe1tAR8VaTRRL",
  "key18": "2G8h6ZrCkA522xR9S6DGGxGdKEWweDM4KKcTc98KBfFBVGG1tfjGnKiAqfSDYqfuc5Jg3HWEefwuGnexWPgMsd8U",
  "key19": "3zSKMGvdaLy6TF8aTpaA3R628evUC75X1msHj6y17bZanNbbuobKUtotBGxgfNeZQKJawngEmjs1vUcQtNxsra7E",
  "key20": "L1vbrj8iHUrYUyCLwKiAseyvP1hkA6ggbYe76bFRQ1aKepoAtMf3UN3wkPzqA94DJLtVmL7W7AynmUWEo27cDEm",
  "key21": "BqvJ3WUjT7ceW5Jj4he1uht3WqesquvB4Q5uFVG78pFAoiC7doAVXQAcvGRK1P2YfgSrYmqWe3Rod4NT8ZNKenz",
  "key22": "4QTLGy98f9HJaeGXVnwHYUFH8tD377CqjPZtvki8W2GpAho7jkn69F1bqfe58Cq2cq3WqgAaHVMoYhwfwJmhiiRi",
  "key23": "3Aic6EABcS8v9k45diDyYAiop84dpnu3N74Ckr7yyg73YZG1TyWpW3qp9nMN3q6c6hRLLaheK4FbEuSdUxagjS1k",
  "key24": "2VGkJdefrhr8jt5zaTm39ZA88nv5XbPJUL5Q9DkN1G7YRwJKCAGpRc6dciAhokHqQDEJne9h96bUFv1JGyuZhvtU",
  "key25": "2unE3TVVKFM6gF5dSBccWjNae2MTZHfBHpzCpxKyNWE4RWbnwQhSiYc2Qt5aZ2JMmPfvNqRnPejFmMjmyogxLj2W",
  "key26": "3arDjeKMbz8tK3bqWYrg4zcHXW62HDeQ556F1Rfdw9s4yV769nRwf4RB4hFCvqG6kkNw1Wzg2Bf5zk5wFNifana9"
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
