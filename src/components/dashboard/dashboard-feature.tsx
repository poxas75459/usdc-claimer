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
    "3gZHYizv3VP9d4Lw6gRr4FxY2nkp5SZp7YuYa7BZRkLW2MsvZu4WZePzjD3K1xmQzMhZeATqQwjrD1cqzYT94x3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcppXko1AQu2BTywbMWnwBC9cETTzkwT8gwkAJnDmLjG3geAyQEjRj8t443yHbd5c97qUeTMkwKfNJJWm1GtT5J",
  "key1": "yZzTGsDkqnTtPsphopcGgWTYTrNErjY1hXJweJEMCU2W53cbZDWmLCfDrxSibpZMAgHKtwFrw4GBgB5ZAYZxegP",
  "key2": "65TK6DXEsrVh5JjfNgqAHJuwx3aiZvvRfiGTautjXEEZMcgmPJoF8iFmhB8aFcDHpmgN6He6KEwtc5J7Ja1qwYUq",
  "key3": "g3oAc5wuz5h2iBkU9MG6aqrNA5RLxuBiw4STyHXAjs6XkQxbR3xdNq779teSBn1T7KkZGVtpMKM79xYc8aS2rX8",
  "key4": "5K7fs2UyVjA5m9VEtaBviwN6rUyqhqGsNijY2L6n7ehkMorgr57N8LJFdkFyettsVpALxwRDuwaydas54c8izikC",
  "key5": "4hSDeQnQBSLvnLLK3ZfTd483vStNTz7a9tZhUtjn9BzyoMQuGuZ2fXmcb8D2Wd89fLiD2hoXWqzk5FttvtwDDTmV",
  "key6": "5SNNeUNuy9E8mXA5WwHmaH7KFvsDKMutKkgJu1QwQdA3MXHotGt4QKYpGNE2CbXp2sf85xhiKLAUCdQBfGyS4oge",
  "key7": "5ksLandNiGh8j46xhKtL4bE855YgDoescA6FW3PYs4McUtWxGoZmon1iwVBSLGvgTEx5oW9XQYmRTwJoLzgDV9j9",
  "key8": "3gWLX8kJR8Y7pHgt48AazwYod1EXD9SuYnD8AoTcYeFYn8y4nPMsAXC6KRbuphPmeUKb7Bd7M9S559K96gNxPUnT",
  "key9": "32tHSTpQyHHy3rRTChKudu7Siq1mfgSGbDYdadLUwCiU3rAZoX7V9k3edcqkDVfih72Kov3VSQPvF5UjwigEgDTP",
  "key10": "5MnMXeLgduJKh49WB1FReXjx1EekKt5Gsvuc1i9E1wKgvGGE9ZcZ9kDyPcrQw3av9VqegRx8mLjRCU98pBUS2Tcz",
  "key11": "3Er2NBLMTJzpHAxXHgG1sKBgzQ4HyBRKk5VkwKTvbVF77fBnZw2hxprQcxQPwKtcSHP4XsVMVWz5BVrHwzXfLAk5",
  "key12": "3z1FAaDBvgbuDfYwrLpoUUAiJwXiqhRWutUxGNMhpoJYMo4UAKTicg6aP4BFD3dt7GJsMSY54p84jmESv7STDDVs",
  "key13": "8GrUazqtejVWjExLcefarzcMJ4SGyffXoJyCQZh9fQAjbzg3NnFYV3ZJXBHmcXunDjzJ9DcYkNQdA63bc45in9V",
  "key14": "39yKvkyPqDdEeYDo6rbcygLJw1JMNPXgC4YS9cVTcdDrm2EH1PS36hxr1pjMi5NGe6bRfJfCidCf7iu3xMvUCgKo",
  "key15": "hyMBebLcussJmfedFCPoprjLxuKNbfw2nBCECLLo8crWt8CSJ96HCDq4XDbEYJQcyY7beVAry4mBL9L5ENek7qK",
  "key16": "221216Sci1viUpB7PPARPVCVChfEoPwzy535UibEPoret2pH3oy93Y58KiUr9g7ngXCmKgi7aAyfXfoyus5514TU",
  "key17": "ueAGUVLam4dPisNPG5BjdbegMp7osCLG3L7cQVMhwAVSf9F1Ef4o5av7t8JiEzPX9XVWLRZytx9zm3HeUSYofac",
  "key18": "3Lqzi3NNRjar9HC4hPdfMpPE87utSJLwWW6MMCZb17dTbqo9JxZPdpXY4bpSxwBQxStb9GMNGckJ3uFYTAb5zKk",
  "key19": "4c3ccwKxFTFcETZxgQfJGWnHc1EpUuAyLNRmVWg65gP9H2Q5XxHVepKBDeapuuaRD5FkBvNHfa7sdn4SXvqVUrM8",
  "key20": "9DAU1kpWvdpXs7hRJ1KkPweHAwcRfFyRBFFuZyfaLoQDSGC7fg7XVbnNyi1ifnozJgKj4dqgfNrCfHe8qmKDRcj",
  "key21": "42U6hf25wmJzpNCencVtTibu4PvpGqMdDzCPJQs6JuSt9k7zC6Q4TpV5zEEHt3BPVoovrYEqNPUz4WV71zhYDNKr",
  "key22": "5vkvGFLPqQQnWqB9hxfUkePYkipYJmmKzktE5b1viFdxzT3rvePq5o6vDkxCudh6Vw99GnzomsBLk25bpqTUNR7W",
  "key23": "5RzYt3m7CFEe1t2UQubrKUYGn6rkCE1VepwUinuTXp1XWz1BsCJhdxf7RxjohmuLi33AZwVCP1tptpqcKPBG6ZfZ",
  "key24": "nP2iFw99TVgLVtZqHgcnWLbYVoedmN5TMMoTm2MXc98aMLh2FsHcYz67i2Z1cVH1WfhT8sVu6tzhMznjJ4tUg6H",
  "key25": "5GPtkKa3dKpFViiGyUo1pPWR32U1fovcMRL8p2TU4tFxPEvBuDkJZ1k1GRqLLeZ6mLVZ91BScQZcfq5PbCUFzWRD",
  "key26": "5Fe4V89M2g1iSMhgUUkRh9kEq9LemhJwcTWP8diF7UrgmvWVQWrcZNdqELTuESLnJ8ATssENoHQEhJE6znEC9qf3",
  "key27": "kajKqNAxKCopB3TVkA55h4TjZGmVsJ6jGXYAfLVqzYVz6oaGyY1pp8Z8FLiG7q5GDS7fiaoCDPnxZRLe9JbD3Li",
  "key28": "3TjXwt365MvbZ2EhW8YPLHtPAQdeZK9icD6U6cFJjK9sbbCLfwe4mNpnm2CBrLCf9gFc9yHNxj1QZVe7GqpMAumv",
  "key29": "as6CJQCNqyLWeBnwZGcmfFxqPpTQ4ZXGPu6NQJ4tsJZXmpbozi5AqEXPj3XUfUGKWQkB18734iA1umxfMGtyJtn",
  "key30": "4yGZxfeuNUnWBGDpPVAhEQ2p9PSCQUgJgMF5K9aNnSnA8wDBd6rf74hvkTwa8Gcvr82kkbgEyXVXnWGyfNfQGDvM",
  "key31": "4yCXh5A1pmFp96q4c2VAhBS7hJ3kei8QqtErhGJsswNRHS7v797nnjMdNuZtHzQsHNstmTfUeixWiLqFPsan8hDt",
  "key32": "2cpgSy7AdiV9TF5nQzVJY3FPMNMxUAkxcPC44EkbzR5kSgJ7gasNC22sdfMsji9xjpfkTQCFXBMMqHHNgaDgcsSJ",
  "key33": "3JhFVFHiMzDpiDaYhGStgAu8MtnNDtdX1XgDkoa8hrXqYBfCzeXDTntqrxTVBe961Yf6U47S7eDkGSQEQMkWcbvr",
  "key34": "48rZBWUc8W6HtGxw56m8qhCWnJTokzTVhfX4zPFp4meayvgzSTddAzEpjJFdT9uwVSxYy1NDLu1h7oVyWaGxwUAH"
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
