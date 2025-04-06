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
    "2uu7WqERo11S5wSv5F3GSm8YfUqQm6StaVgH9apwJq2KbVJKavjG2pHB5skxbFSfePqRZpi9AzYdyAQv1hTQZkVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4dwW3HPk3obLtKhkNgELGWcabWs2xUop1QJSthTNs1j7QmyZvUmq5ZWmXHiVgBnj2ttBrD3pyyLL18NjXZg8A1",
  "key1": "5N4dje22uFUxh9zYzUWwvCRRrMhiy6yAezAfhJmpq2rVheDpfg2cSovMGRVgUm9iezVFtvkQ2SwyXJ3sFR6vFQ9C",
  "key2": "26sxdeua87sQ71pTeXAxuQdCLbY4S6VMHCG9HsZPsxGbGdPcQDqM9SR7jjBic2vc8Nzj8Uo7LvC7BUyUJnGY7MRD",
  "key3": "57XwENmjzshwfZrdmKTMCQ5eZpNxP6AYmWrr8v2qGhWG4KdvajeUo3M99wR1uwxGyrnHaqnuWQ2AMjYY3vbEd9U4",
  "key4": "2YkuLNbzyZ2Yn4No4cQ8VLqpfiNeyW6hare1WyHyDYjRRQK4k6mwn1FkTQh21aeZWXPMGqHru4JbRwCisjwXNBTg",
  "key5": "fbBpkJ5AQ1NkYq4wbcGU6SNpkXuaaLXvcSQYjgnc2Lve5x2bTXKRuY1XW8Kd545srQRH7vC8wXTLUSdLaGXKWE4",
  "key6": "3pMaXoAnNq5hmnTRpZLeGAKQpF4bkry9m8VmNNVNjU9rWVbTz9Va5fm2TadyFLpu7NT72YZMJyJUspE8HnJs1Ra",
  "key7": "3VRQ8QaWUYhXM7c1oX1tQQWsQDh4pzDdwWC4odMaqLKwiaUyreCXrCM4TS3X3xdv1oCHK4sDpxeuQWXjNCXkFmVN",
  "key8": "2k91YT77XQfhmN1jaNs82ivmSbkrwHaMnfUZppouB1dS7emBqGULo86s8VuqvZ1UXab99GJ5nabULJwHHqUwHyzc",
  "key9": "3WnD9rhFiydYbzWZk6P99qujwhgJs83DSrayQ2FJ1oMYjXLQo2Lj4K5n2tLvM68CARMncbw1sg6yGQcjPUTUGMJU",
  "key10": "62i6QtfYA2LytYKqd5XYJ92gsDXFvJTwn5WNrhcNvJ9yfAvmYdd5QwRReiPRnU4ZWjWuDeRXxhRMQ1z4q2S9KhsN",
  "key11": "NxUnbCqCFjhZJJVSAz1rJWciLUgwRWCFznrJmgtp8H9fR1FK73JTRLNB9KyHMvsshyaree8hvWaVJSVCJmcyiWS",
  "key12": "4QeSy22dz7yfYULxPsoriJLVQHnaSdsDFiCFuRtCfrox46ubtoeeR35Y7BkR3ZrH8d7rcjZQ1DaocqmgUbvo3D5B",
  "key13": "3Cy2hCLD5ypixyWWHnTWa26RxthCgsj6f6Jqhvd4gJvFeJAHd8QJTXjcSLxwiKqmcv4d5u4SpiXFtr79Nzv5qPFF",
  "key14": "4mgK4fXk1wYzwYMg5ao3KvnZD7zTHeZmsf25KeSmXEBdTGMRpBYAY6vq6JYpBqVu6Up4qgYsMPkNbWAyR6yjedm2",
  "key15": "YTYeBAud3byLtwUsG2azWdapE2z8iBrN2B2XaViwFgSiV5qn9Vv85h11W8tfGLb8X8r1LN8iF8Jr96Sa3Z3wzdZ",
  "key16": "3JP2fJU5oHzDJTYobBU8eyBA7U92eoQwtroU7wfj2HTUcQPFFg7EPAeuqevxgN6RZ2rTqbC3ThyC8KGDVgxZaHB7",
  "key17": "4gCgyqW7A9upyKdhC83Az6kRRstqxrwazqxEX1ycGpzJ9KBpQQcifL26zf1BVwgevk9GfnWUFHgE8Y19n2cZwrjH",
  "key18": "5uSY2VraRwRCCJ46VGNBk2dmdBwgAeE6PGKLv5392BM1TafZgV9r5o6iyMo8Y8PsQ4zZZGQ9H8zSCHecBFMsdDtp",
  "key19": "3SrjDphTgDMGZYBxow5xiaAPfD6AZfAX1KwwZp7GZVved6h3KGxLuyPYUgUkjzdTwws4DJAhLLYJFrNBY1BRLcGx",
  "key20": "4s893cjct7uWtHJ2Ru4hKuwx7C67acYFUofpHHAkGQNWb4kAhN4biSDoNQEF6u75Lu2UtK1M91EwTU8rifkkHyBm",
  "key21": "2WZc8zZhuY9XNo2ZSsabLfaQA8sDJe9gwMG9Kx6knQjwQsz7FArTLkAaqMCvoRpUq8oXPLB7NmpyiaZ5dYXa94c1",
  "key22": "3DaFY22BY21pfJh1mQbwai6P7avQV6cvSkfS1LfvpNh59SntKzq7x6SX5gUYz1encSdjbbbB9bRLURENJmo9yoBS",
  "key23": "2CDAZ6zZDP18Q7u3GmTZN8grkAjXZbe8C2P3wdhHFah6RGM7jm1Ub3srGdN8v1MRyJP5PwDZPGTezDhUSYjtpvwt",
  "key24": "5rvjKQqLLixRL5jWEchsaMqaqN71Nmo4RtbnqmJZ4uBJpm995CmS6dFhtd7JNdEp3CUVmSs1LKxoFTgZAvPrzTan",
  "key25": "64ViB7Tkg7dQ24Zv3fFiXQ7TGaUxXXW3yCZw13JKb6dsz8WZLnLUu81Thw1bFiNY18ykuTSuhdGnEmWBYHkW7ZXM",
  "key26": "5L8DKozGqum1nV99owL3m7jmVr2ncbs8yQ3NYLYdczY3WNL3YkUpJQbcZBUBz1HCSU9NF2naVjGaYZMTjZcBCz8S",
  "key27": "3y7WdSEAiaZ2hNWUgqvqZ8e6Dd3AJcEr7cq4bvkztSrUEjkgyq5aKjY3nHFz6SqnekLe17sT86X7G2s1UFnnZ1oW",
  "key28": "4apbgVt7UnH2uk6UMtqUkwZfXMEnCCfL8djVAADo4ZHkhvxkpBEv8LpPXvxqtTELZaWfpgZ9tfUQTuzKompYRv67",
  "key29": "3bVTR3XT59ncxsXKYpqV999qxM79paFtoo6FX3onCjG5KMVRXq85X9esaEBWirEzrux94Sfik1yEJLt9ccH2YY1",
  "key30": "UPjmxQRMmEFcC4Te89eUAob3jDKXUUFX665gfGDxJ8TZd4nNMRMJnGhT3DvJiXF5UVV5Sm3dXFnCoySHJic3jen"
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
