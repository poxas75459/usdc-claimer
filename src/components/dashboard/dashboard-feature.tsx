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
    "3FEAi7ufx5BWK8mgYEdq8gN3eSkNJH3cs1932WfQY4WQvSgtKkbmVCcDDzc2L8RR1f8nd4BDvm4r6Q1WCcKxDqeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZhrz8dtMfqgFiGnYa3R7bo7GHEnRXcY2rSxd32esTfxDeEqwvm4NUNyWPGW52a3wRjKCJHUE8NubpAHuP43KeT",
  "key1": "4Zd9FsC8tVvRAPd4VasVw7y9bjPXtDHF7CLXBhfoN7qBnKXAq4iTX9DnqGfXTWoTjMaoEuvgwwg987pstBwMgE7L",
  "key2": "2xxzqU37LpwJw1rQQJZ3h3JAza3ZUKxhwJfxFSRuWDb9fCCxipmTo1QbqfRYhvfWJMxeBmaprpc2to6CPGDyKnQM",
  "key3": "3zgpfz4eZ2kbUU1cudNWEGMspSY8kDFKK4zfz1pTBfTi1zakGvNTtckVX9aPErnABX9GQDUY1ek2WJCG3Z6JWvV7",
  "key4": "298GZbMfh1QZ1sNBdyoDoHPxdD5VXj6QyTh9JVnzb8yWuqhiLPG21nc26bFpEYCijoELHJao4TPBaaw9k2ecUFLb",
  "key5": "3RLiiXSafwShkszjTTkyE9amVYqrsmtekEJRutvzhYWFWs2xjSByELhMhfUBvoH1UGrwuR8W9NHRVd3tYhJKZiWq",
  "key6": "5Vk2njvqfcQboLGSBR7Y6sMJfq9PeSMvR1wMx3o6VyTjch9EjX51JU7w4XW7XQBtEu2H1DYJ2rxnVCxteUwSq6Xn",
  "key7": "3DR2ejhkXfTUUTXRrAeJJRvUMMT9kwg64pMKeHbsVGhg41C7veK1NKHjpMdNE1EBsnqR5JKaNHF3AwN3UWW2Ycrh",
  "key8": "3mM4iR6kVZYsmQzS4cNqdzCpWxs1YMQfE3fEaJXpdAVY6aq8z5mYn2tdnT9Ed6QDkW6RDrGpov1Ew4cm613GChKx",
  "key9": "4NpMnrF7Bb4fU2eczwY92gfnoHF3eFwCQbShrT6rP2j99xZMyuJBuksunYvUsGvQjpZW4Wkd4nKbsVwyBQu7AFeZ",
  "key10": "3Lj9Jc4Wfp1QWJuHQz68K52UsWqF6m8nMXqJDzXn768LMun3fLjacJRUbiuhNj65nrDSHSzCLF4mPNZ8Ax9M8wqC",
  "key11": "3bVVSXryCBo4fZNe9qNXNee8bCnKgdPtDjhR627w2RiqgMa5V8AouxRzK8gGy45WssWbDnx6rixgsdoy7eiZGMEb",
  "key12": "PZ9mLapNu32VD7mgLHxW3a7ovcy98StWyGYMeJxCoGvAPgAq5prEZMJouMSqtoZ7mpkb36ZPqixhEeAX41roS2V",
  "key13": "2tFHiUbZbLxrL2UDSRLjNesRemmK8bMwoajsPDv4ZpRzvxKWKJWtRec7Vu3TNkYvW8Wm5FwSYjJrrkk8vMip6Vuy",
  "key14": "dumFemzcggkoNXotikdhHxtQzcUp61Js1jvDaQ7ZmSSZwXJxcDcyd9xLR22cRadyTVSUG8rDzH2458BBJxxDM42",
  "key15": "2TWjVVdbBaieoF8MESh3Trckx4aCHrEjdjmrGFoK2z2KSCW2sm5heQJJhXN6vAvhdvnPKdkmP2BSD6cWMdRXxJ4",
  "key16": "2B4Q24ZHvtL7BX9kG8izTqsbJiVdSMMCoBMYSceY7Lv8n18qMb37b3Mgv43Lp4871m3NfHQyRgnW3FCjSxLEbzSE",
  "key17": "9oecZ6atabAGBtfcxavFvEMUs5khvEJMs1627WdFHXhQh3qjXWLEe41witLP9wGpfeS5jpDYUmxcv6jSbBCfLV6",
  "key18": "2e7c1UrZTKrMgXmwCBRGUttL6h8RGPAYiziSHrjekYJY5wkchcK1mei6Bjwtnvk3ejbdkvVpiZRwSoeWVGP52WPw",
  "key19": "2mnDPutZbVABRpADgw9cQpmfuAdmpvdgx8mBMV7YoSLq7EfJiQCaWWkGwDWdWsqk1KudTqBriLsFfE75hKhgVtBd",
  "key20": "bWiGe4gBJEcHRVEAyDkShKtKk5NRotLL9sQ6bp6ST1zZpre6VrosA18E5EkpRohJYsCRirW4RQB8XSzu2BZsVu7",
  "key21": "P3Gio1EDYbVTiokgL6u8DhrXKAdB16pk6Z9zej9s5c7hUngc1WSz9H1uit1qvqBUmJbkc3mfLfGwDhBjC3S7kvg",
  "key22": "2DGzCCteJ4Pr84KoMCiuPy2o9d2HihDTDzL8wLFgv1WPV8cWZP4vkbxPUa5y6Za6ScUXtA3bXdcobGnYRrGqynJ8",
  "key23": "5jLKZUys1EzFQ673EbTJzJ5vXFAfGTYQvB9AdNYmJ7EHXVDn4Tc71QHxvKpT5EAhN514CBhaogHqbaXUTk1eSeMp",
  "key24": "1rwMxub4UhaPWQRtwA55Xu3yLwZEfW2VhWVhK9kz945oqmHcWhdEHFwu6eThYgSdd78UJH8T7KimT67J6ynYJau",
  "key25": "3PPpuCsCe7kAq4mM7nXrLfkLoSutMM24jRoLJTvh6nFqT8DnkdabLsMrRWDJVWzTgw1CKCoe3FJPJHaS2ANsbLsm",
  "key26": "4h19QnAYFdDxfrZWbSCPHRuvdChGxPYT48mo1LksSEcTw3NziunWSCjcT5YB631Kpf3QzC1GhM1E29YhGH1vHsYR",
  "key27": "2tNt9v2qUQRaikfjXHTqoHkaaKyxEmN2NpwMSKdcDBXz59gasarTkn6NzSyu2J3UNCw3JKD7KnWsKCSNN4ydA7DR",
  "key28": "2UDs1QufH6t7c1SvcDBfC8JBAqt2uEmPzLW7hfU5hvoApC3Ujaearw6GyMXiFcjcot4EUzG7x93xLyAbxV8ALHvZ",
  "key29": "5bdBz6LP3z8UVVDLgjYfhMoVYpFMzr8uXkicmeae37HzfdbnXo7pyoUXr7G6QVQeGgWKXctKLPxtr7YoUJq2WUbw",
  "key30": "34iXnUtvwEv4FcJYrcd1G29N1pF41EYR5uotcQhpsUmJAF95ipYm4ZZ6Bno7QcEKnn9zEV1L5Gi2JkZNKnyMMUYS",
  "key31": "EEuivH4hFm9f9P7UMJNkDXj9ydWd18VgrvniSYos1Cco5tsVAEsNH7TwznJAphTho41x8EwyrxRVWdKts1QRZXA",
  "key32": "52gRMW3He31dwBLNLMWTYuNAQB2u3bUyyGEvaZk2Ws62avyCqp2jsV1bW5qAx2qof1e7VEb9NZ7hvKghi5fkbj4w",
  "key33": "2t9612kBgaVUuSUuUeTc5fczFwjPgXeFFTt4thXj4BUJ2x7ue946biQ9Ckk3GMmmHYakmGZ4vrkNTQepCgRoAs4Z",
  "key34": "1veqib4FwbD5aT3mHtD542xfdwH2i5VcMJ2J3AmrY1Peux5i8k8Teh5uw99Nb2to5JWE7amBUvQVYEmE7AsdFNz",
  "key35": "5HpsFa94WD7dE2smgzgEYwbSwCb8QieuNP5Qhxb84gzhfQm8E6MUD4JoS7wwHPzBZdvV5TsTLrfpKcZ5v2QteJ5N",
  "key36": "2Y2VVDBQY2ewGmKp2t83zkFm8uD2vnAqx42xcCtbQfTqWwQCPDY1if51swkwDCdS3a2BDyQDHbJ4TBVYvHAQWrP6",
  "key37": "2XSuLu6vTZopmfqc2zHyp4gh558sBHVxNKRt3ZHQVU9yAj7gnUrKLyGSASbhfLwrjfWPB8bythtM2qKukqSiDRw1"
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
