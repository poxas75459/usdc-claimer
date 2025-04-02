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
    "5BmSQodJeDNChfjePLhP6Jfk3UqppvHPovfDdMvzVfsEqo7W4oE5e9u6yLpVS8veU1ssXL7NgEKTm4CmeKVfiG7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RqfDWqTcNBWUQXkrcuUAaZLQXqkN6dRAtbRsEY1q7vLSsXf4XXzRJ6aCg41dZzthwvvbkUbiwmUC5RLobN3U9vM",
  "key1": "He4CXVEp2ZvsLBTLHj3ouoJ4to2DT5xw6kVZCp3rz1hx4DWugMdr8G4gMqBjz6iqE2a3ZfU2gLb6nngM6FRWkrY",
  "key2": "2et415wi9QJZmYKHXwaY4RWkzUfujzmSvM6gSmwCrsyaLyqNyoLCfW3kSwQDAoYBjyqQ9r1EebkhH4rc63A5aRQ4",
  "key3": "3azAjJJqcP4XA56stD5u4YgmN1h1EU7bsfqgbwmJXuhhBCYjvy9ktciSM1Us26bapoiKrFXZDWqy7N7Vpde2mhxr",
  "key4": "52uqrvWeRVQMJEw2AuWXNNXXdbYVMmWu2ZEvk7zPxMKLUjv9168s4e3EZBs25JqNBGeh5rypWcLRvgd2aYn3kaBJ",
  "key5": "2KQ6AZ2nkM54xRMpcuViDXfRb1zLt4Xq7apDKxGPUcAuqscFt6qWi1joLAsghA96ENBtB6akZ8PypG5SkwSCw4J9",
  "key6": "aDwb4Yeq8e9P8GgMFfenLL5mc8nVJDBtZvHhy57qnF8MSYTaFQmCLARf86b6Tsib2bMwf3K6f7NE4psyBHssUmg",
  "key7": "4GQVxizfYH7whdaQSDD3vEVBSAy8ysGXdYcGjEAbrzUyTLng6Aq6QAfEq6YrXCniv3iedJFgCtKxk4iEQgoeVQYT",
  "key8": "4EL9dyvs4mbiQWZrvEwADGx66X59JzgzUgDDgxxukjtAb4bd6Q3WtRLEH43WsKwQz25wiiXKn1rqDGu3Vwfcgj1E",
  "key9": "Gds2Ztvj2JTA4iFjC44jAYcJFvCUrwuUBNcCavqweK4s3zSwF3WwTPG7XnCMmbyGhvDDcwYWVxR3HuBbJsQmwmf",
  "key10": "4RGwhNZQwnVJARMf2sX3np6Kf5inJz5EWNXmnGYnHjzmGQQTrdN292RPwHGtGoaEY9nYj2yVxqxLhsADJKyK8S8B",
  "key11": "5KYT4Hk5v39hohUu8DSyCDGMFt1HLvexF8fR4Z3tSsHit6foWQGN7WrkxcG2ftbXsVLEbeSK77UrdhxBTRtZFz6H",
  "key12": "65YBtnFa6FZAdttXw7PDjLdmUAtAKECCtYy8arXBZQzMyqWwcAvMfi9UJfdtw6xoX8N5NneLV3txGXBd5oxcEHHi",
  "key13": "46GSWmYZ9gMgdBJX3g6N75hfhirrZw7WDwi4EAencEGJnXr1eku5s4yLKmHcGwkfcyDDhD47Ghfu3TgYzTuEtYws",
  "key14": "4aNwtAFaCbhHeVo3ktdbrRwhfvPHkCCP71jBRVU3NQmnwYNCUwm1TypMFgjkRmeqWLcRxxvKBJMDoHHeHUbnjFkq",
  "key15": "5mCzGrJrVNjFtpsRjGEdWdX9Rmuc6GGMz6MPj2GYwFL4WZVBfHjPeURq14riA9wiZPf45Jkh7jwTQDizMPgrosYx",
  "key16": "NBSurekmaF3KCqF8ZRzx19R6XUw6yXPHUPhDvtFNFfc2vKFs22UaDAks6S9dymKJ5PJLUXF4BXjaRxdt9yfNoXA",
  "key17": "2eYcWKgntAJeWokTf8M3WatFvJBnTLGjcucTnTsskKFSe5vGhKCmGYKP3dGw7SrgUcyqzgDKE53wAESydugJMwpC",
  "key18": "3ehdZNGJ9UZDvcuUvyiymtqDeZbjM55SVv1jYXj6G3QcpecvnjXsV4a4uCi442AX3SBjBmnstGK3nTJg3PwRkUL7",
  "key19": "NYj7gbGTbqMcPNq1gAPft7u6xph6kCMa8s1c6qbS6ffCaPoutEJWnVZLYdLEkHoRnLuGb2ZEFqMNYMEqAnAxu1r",
  "key20": "28sAvCgTpu9uaddhwjaXnNTtSrpYdV3MQKBSSEuBwERxT6dWaGXkQhWCXu12LaUzQZgJyEPMUwgwPxid4Rh4z7a8",
  "key21": "4RVZi7Rg6au3kghnHLHJdAqHe3v1dhko976BphChhfWrdAN4aEPGARPuGKXxZ7xxFw1pAxrTAvTDU8YQHdU5WgQN",
  "key22": "3QcSTCkNN72VsottdLvev2GUB7QHoiA1sV9ts8AHhkNrZyrXAvUK9V6ao8o4r4A6HZRetCo5BD9JCqWvj9g1HJTW",
  "key23": "62G3D3JtSqcQaEVVnDQ9BTURhNWF7ou3QJnJBvmJxihyAU53GiSE9RupdCUU68hvh8AgbV2TiMqFKWMPMkj3hW1E",
  "key24": "yUCBEJP8dBYXZzg6b6X1FE93RcKNnES7T3CNCPqeDUyew9iAMqDi2MJmSSHzewHsiXwUxXgXNorx9i48V1rSpzR",
  "key25": "5FeWVC1BsnkBP8sSYoeuTPKtb4ckP4NWDWvvJX94hxaFeeZpqJxrF8YyuksuqbJ6EDcNH6gxDesFzgzKE6LMG19R",
  "key26": "4Nck4CLDhaXv7uyaE8yUcDVS9r7bxmoKp1TcqsWsdT9FMgGqutEfvGBEqRcjciB18VSN8saoDzgBQgkeNaaoHaLG",
  "key27": "E7yfXSeuLatrzdaUH86AmggeTPVeXy9cjuKkcfV2fhwU6u6vRcy6N8SAotVj1GbCT8qFZHk6ryBtLjFjD8xuyXW",
  "key28": "3vjdzoqE93CUrb2qHuZnZRgo3PxUeANRUHJ9i5kuBbRNrYPh9zfECnmAyiVqZcb7XRxF1cKhTpdK6TR8An4YYctx",
  "key29": "2cC5Mham3HzNxDhcSKa7nxM2ZNv6ELUJpUgENTsS2FjdonaTVr5kyL1G2yHjK8QwvpNmztGvZiF7dtsgemvntRhA",
  "key30": "4rkR9DufKgDFH98mDy8GDsVvPbp6uJhPWQXquZYSXjFxJVKhHv3pRMnF3PgheoEEdSThqcsqrHcfMn4MSqzBxrLr",
  "key31": "41zSZrMGCeXUJfwdWAWf4ZKaxwVE89ojjyDcMErXgJuUXgkNWMH6nWRKAWxxxzAyNcxbXgXnoKRyxxkB4CbJ9xJ8",
  "key32": "2LWBqFuES6y1sY4GmXVtGNVh9VXB8mMgJLZos1ZZ47KFMaL57H3jspXVxJQZ48cUE1wQhxGshU9JMGPPZsc29yPi",
  "key33": "3jAy1ekT1YyXZEGh1BZL7ELehd32HHmS1Cw4Zte9GCvPmMzLFZVPgLUVmBcU12e5qugmPeNSmMPJ8kmETLfbHwoT"
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
