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
    "4rjrxMCfABUmtVYqUVkJFcEUpxqzM1ctTmoPcN4d65CvASkHnFUTh7LkGknDt3XxXMY8Eqip79SErucbuD7hgNAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KA5Dggx9rqstF5AwxrjvXJu1RSYouUGojfcYUBnf46WGiXr3dMNkb9DznTGt66UdUmhqUnboy1X6211xPCNhDM7",
  "key1": "23yCDTK9wC4e6xkjGvAiyxxnKRNp8P9Se4B6rr69nL8dZ89Hst7S57KU79dnsS58sogbVCfZztAQZ5HsjXirGJGE",
  "key2": "4fv5tJd6K3EF474bS4hzo5uaQ2SKLWDU1BKRYjGBHcLSAsjtfxe4UKg3RSkuoYnt6WfECQ3xdSQVJJDPLAPQReWm",
  "key3": "5TDJ17vaD12hqPAgwFzFWkFpfLq7BKTAuwGus5VrQU84ShR5VpfhSguBCyZjabfsJRXhLFL61WHwaUm2RmbgwRLg",
  "key4": "4uxovfqeWj3WXz377VcPpKxr7Ppp82KQtw4ihtLqVvnDUy8rsxbdEiVpeWV1JsxsjgsnauhQyEFwZHZuFY7FXdLy",
  "key5": "3hUgkZsVotfjDuQ6AKHQFauyL9LqK4Aj5zg1SCmLAPDwbRJDwvaX69kcLwvQ1U4msaDRbvHxQ9U2wPyYtK4JAaML",
  "key6": "TQupCnsLPxto86xFuAVMXKxamqY1zfdBVVes1XJp4XCc7nWWdf4dTzLsykrkAUbYrXCy8HMoyAAs8kEFYiFXVJ4",
  "key7": "2iPWkheWe4osiUR2SYfe9Ui3nAKarhQ6qNVjUXkeLAF4EJ8vXWGz5YBHXoK6bcocVbz7hNL9mWRvVJBcx15K4MHx",
  "key8": "4c9XVRyF1dCnS3TjCBJWKhnVWpzQrJ9RnnKTJYKKFZ3sNeC5HDdwpctfh7NC8rSZVKs3wbxnyv3R5rxw76Epo7tQ",
  "key9": "65WahR512dUSMJwXjqq4WJ3as3b1tDU3Vgogszo5gcE1K5UpxPX4Nb8ueqcLfm1TQ9zMs1rRpeLLEGqovyUUszN4",
  "key10": "H3ZYSb4XwHJ8JF2fMtJXLWzjgJopZSmSty3gjda1fRBY9z4EEohxmfFcN1tbLJ9Cd3ot6PdZbvS9SevS14DVjnz",
  "key11": "5MrJ3KkZ5TCeFVbDa3QP9u5hTp2cv15L8H5Ywx1e64beetQ2jpS575K1QqrBJiL3fzvP4w1w5a5cGVXpyKhmravy",
  "key12": "4ZavSf8XTXBNF8ttUCKSwSJMihTYW9j4XCjBZYLjcvZ5UK3LeHy5DtSFVYxVdzNTjRcWroeYUKxhcXqSUDeHjzh4",
  "key13": "2rYy14N4Soz3UWewMBk2MJ5FQnfCaEgJfDxb98WYDtn6CFnQ76k1QDArJBcPMg6Jz4b4UN26XE4qjAuBJ8XUCyQ2",
  "key14": "2UCTEXZSqFy8FFLwZi8vUofQ6ChgvvcsrqR2PBm4Ga61Pffi1zhJgea19GNehjj8MmU4n98iz2AW8LB6yUWte2E5",
  "key15": "3HF3CWccEfoiB29rSUYbpss5Wwt34EQXdjndCTq7JDuh2sQVqoLBFUp8y27nDxE8UUG1DWkUCugMEGcZZX1KWq9x",
  "key16": "3b6p8NfhghHGLhmVDN6edQqmjkwHJbC8Dv8stXynRQ4U6wpWZnPgzSJRfUDwhsWCmycbgmscP3kq6yFZyjgsx3qL",
  "key17": "5JSaZMtvyC1cSETYFsC1DN5Dpbgv3bGTT7hCHzhtwhUxHk4jBXpSNGNYbeNwMPNiT2T87x7hEX9pfsWfJ9eTM5ua",
  "key18": "4PSfBGkXiii3adUaBDVaEyGT2BiLg1X4b4pDnB9Zyxbm27wfBh9cuuDXM5uHL67vymS45LtdXMamm9hF95xdnWKV",
  "key19": "wKz8mgMPoEPmp4wA9vpRGp11EdDsKCN7zvL5TsDsaG1Rs3HLF7wjPWqgMy7d1mTwutEQUR6rPuSPvad7ottcm3o",
  "key20": "49YSzDKETVTHhNX1LYBys3gjSwyDcoACU1Ph4NppzigXr7JYEC5wamTp1jm5m2CfZFeoaaK7mj833fzNJUm9NZd1",
  "key21": "2BjUd3Jxs7EhG7C1o31pQuNNBHWfZiJ57typcAeEyUVDBQPw82XkHpMQkPnt9wDxma6wuipzM4b4yNuGfPUxys4G",
  "key22": "2ZsUVxGvf19YNcbH1gWfGW15FfpQcUGejUo5b3Sa78V7Z8t5hhEFAwL4jqVK9WSQe2jagU4adHM99kgCToAyvvrs",
  "key23": "55a69p1bF6WXmTkWEQWFXsZcprDELwSGmzWqhoRCSAhSjWhQiEfaqoYW6MV5eMGbA9hh6YKvnkN4qLT4KYi1owDu",
  "key24": "29medbNzyDFa9f5Jhpv9ikgvbmw64ZwcyVc958dX9d1K1g4fy6ciUJBhbLMb2GHQkpiypJBZZHn822Vt64ctDtCo",
  "key25": "k6F3KgCTqyQShsgYqVgXqtUpiNkVeL69dR54vWvzd2KHSQzRNzZoAFoDDy6HEQHyZxXDiKcAhbp5FqMo622Squn",
  "key26": "5wrBYkn1fQnZmpoz42QYVJVaP2jVxravFFEvt15eoqEiTCwZxuU22TAgEUyfmhxfXVwmstiv7FkWRtaPZgAJFH3K",
  "key27": "4Gcro3vicBbRk4PZVrdh6yGhncmjRWPdAr2EapHyZHbt9DaE7P1jWQfddyXWeM4hKTShCSXEUP5PCz71iJ3FnFg",
  "key28": "67LZQzA2XkZP6undNWYQc6MtSFEcPGqgornPKVWCMLgXTCKZS3JaMeUvYmzofS5n8DSPwwoeyQhi91MeQpqRYi8V",
  "key29": "5mHKTPAov7JDhMKoMVnEkC5FtQjeJ5X9FBayFJRzKcLvHWg7db7ahbHv5bREWvCswEcJ21AsxxLoWRYpzsLkjRDn",
  "key30": "zJ8ESwdaHRYvTrfUv3KHWqKdjzG1FDx5jWbWd5Rcca2a11x2NdtgNgAcoHAeiQkohqmyqbz4dQduzKJraasUwVo",
  "key31": "4v4xzNJakneLFuDCQ3n4bR3xm8nV9Adv9F5iXXLxrrLjXjmBrLmmHAjHCkVh7JdVUJm5fwf5Qa9szmahVJS8WfSJ"
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
