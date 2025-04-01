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
    "2U7wfewfXUEr7Du22FC6k3rQ1ziFxJQaihQskH6b7UyDjCQ7na9xu8n6WF5sXUc6horgm5bfC7puNs4ZwvVDm1PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "567Wt2VXe1b1kCUw4XybhuRwaVt1doFwuRk9azNoup1SBXDRdri3peh3Ty9THMhV6FwBxpub6VmZV95HiyerYEjw",
  "key1": "3P112Stq2rxVu3RkQ41gk5NhgedY1xeMfrZ5QRkLwExzmNfEjLLvwXfd3bmYpVyw2oqNKkC98Jfp2Xus5MSkPxse",
  "key2": "AYg3RtxM8e2EryXrDzaXuwCscSiZGufp45EyxrGM5m4Kvn66p7N9xE2mvSNrZGgoozZZ6iwrGjLDGSiFnBzZt4e",
  "key3": "ykuLmWojeVhnguHqM8YikbBLegnc2zjX14GV6MLPjSenUGKcMvDRM4bmNok9C47ayPhZfUYkTPABWnoP2dRN2fC",
  "key4": "3FaPVHbnBYZDy3VArthfQJwaQgQKKTnvccV5Sw6zKy6nZsaAVc6nFMChik7xgNxcHPGAksoUzNWaYmjGSAUGJfhH",
  "key5": "3cBuAbZV8fz8BS17WXZSFfx9xnkAJ5Hte7fiFbmvNTepP9Z2tYDXxnDYbyiGPYMtq2ghkPWg316jMJ214ssgd13f",
  "key6": "398PfrX88Qti68byVrb1nBJY86bgQvGs8mgeuRTsCoDGUwJjHc7YznD3BUKJ1g56k9CKa8EodFskg3HT4qPRXkXQ",
  "key7": "VMq6dpfTJPZp4ugLJDgh3EoQH6pts1gBEdKtmc1fQHzsbp5Sous9Tjc4WKQwc2zqcYzCFv52b6aZazG8yJpi1Nb",
  "key8": "246VWevPEgka4FGb8sC7BHNn18hwKnRP1ymdcHoqVR5bmdoV8prKfkkYey6KU5811vAYcmVWBALH1MRuUEXjh2MN",
  "key9": "KRws11UtPQscKGKxCfGdSGqmNTZv3uddgFbsNEq64KMsKvA8Pb3djXC1erdY4cdpzgud9zpi3iQcCASrAjLz2Yn",
  "key10": "m6jgnTm3N8gjc5Uu1XoMbmPABw89qJ2gtCQhUmy4wFkNESJBG1js5iVohm4Jc3oMm9YvArWcvHZVTN3TD6fSvzY",
  "key11": "3ipkpWYfcAQ13YEWBtQfYNmMaCfDF9nrdcWpWb2vsmdkPdLqmi4RJ9akt5wcJF7UCTf19y8w9HyXYz3p7xninzHN",
  "key12": "zuyxb9e8pqb72fpM6aMpFh9CMoDfVzwMYcgn3gAYKm5LinKj3PJ5iWPxKYnAnpr7D1jsLhXF1VCz3tUusA1amYZ",
  "key13": "5AQKXNd47XbhPHs5TnKeXZFTS6hVWZrdpbTw5GrhrytjqHcxzR8rJGp89juQXmTY91SGfqLEGREnsn1uNyi439rh",
  "key14": "5F1iFnSXjCbGrRqaorMyBzBs3NYBPdQSTnZjDYRqTFBWXNSzw434s8jHGqYRtm3bH144ggzSnVRv5CRU1FuzAfXC",
  "key15": "2ocokW5QBHKN8k5jvhcAbReZfiEuPPrXtxhCu2CvMmKqGhy9qx2XaZdBmgJ5xXYx8S97x4k8uvtAKyxGJomgXRMc",
  "key16": "v1pZHswKY3p7wTkwRxp7bFEvbV427zyqo4siMQwRgQa8yuuq9SyWXsFJn4xYXf6F2zxbte8zEDS5qXThCvcZYJb",
  "key17": "2Jc1LSRR55LCgV8N69TMjQ2VLtHDuE9EmntSb1ronGLjMkfJe9e9FFqz9aCuXKn56Xq1g1kgqksWp9FNqm4id82a",
  "key18": "2LZMRjif5WgcMemQbmUPEAxn2fujnfVd1byGH7NuuZHzUiaqjag87oHC37zLSGQfJSn2wCvEL3HqCtz3pJi695LS",
  "key19": "2MPBV94rWAD7uFvgjZvvgvsrZiV4x8QaLy1oy5Bfbtmh6DKVRgb5KFzvW55E9xn2kpyyTgDcuxnwAhwGsRdJxKr1",
  "key20": "RYaxAcybarqfqXbC9ckV1nndWK49iJ4CWJVQPiRNd9kW6p1KPqCDrc9EgmjPenV2XJ3qioY6k9fzexDpFxLDqsg",
  "key21": "5HSkT95ZFLwfqcYHQD8F6N5WcmuxmxhspbcZfAFWBMTGPRCB9neLx1K5jroPuVNop9ewi2j5eUHdX9nqm5AzYoNT",
  "key22": "2bW8neQ7Hg7u9rywtrEeNKhCiHTxPfa9o3XbCLk5ACDpjGLwd5FQJ3AUuaXUJCyTXiauLkYV8E8q5m1rGRM135V2",
  "key23": "5CQZwZhYYCiTUgpM87xqJuW1y4pNshBZAabDX7WZXH2kpD5tSRbNdWGdhV44FiSHk7zkUJm6GrDhANPAUBtTT5ZY",
  "key24": "KFk9P3qgJa2cy3yTpsqe99P1Xv46GZsu2GU3DGEcH4CVrJLKKKdvG67zj8hAgyW7joBQLukxkkjDSZWn5ta83F4",
  "key25": "3RewyDHpQf9825KqWKvNHattGXfdCWcYXt2VxHh4Nt9WEhKH36A8fQ3REZdFW2ygFAn65J3Ewz8EoYxUETqU3iPJ",
  "key26": "3TqqfNFZJp8YwXwjXjybnaBJZE8G4eRg37m8q1RLhyKAEwLygDi5KHNE3XAxTxRfoHKU58tEKZFE13k5brtnWse",
  "key27": "2DJ9VTynn6yfkFxGVmyXhotAaYATgDvC8tb7WgxreXBLF6QsuSy2DLKrLNMmHmvZNUuuKUeN81h27ehUvRAvtzvH",
  "key28": "3wYTEDRE21qyZDZVWhmykM8tJj7ecconkcWf2S3e5KPgX9bHbU6zv9vzJC5Qg1LrgMC9znbqBqqEePJyxKenUgE7",
  "key29": "Hdsuj2VgwBtGfVJNVSHvmoqqmgWuTFpXEJ64BWCKRkpotHXWouk7VTVfthudcwVtHUxQ12sUY8VidUz92wcAMy7",
  "key30": "2fgH6ocLFPnmJWCmQPPVLo13a6m3z1PS197EJYHYrXfzWtqq79miN7ApimTi9FNsxWzQ6Gbdmjcv3EXPJSxAg1vy",
  "key31": "2EapJZbcPDEA9wjAknaSMZYL7g5QB64ySzK4NrvamG8rx1ypQa5ywhQDg1KcUcD6JiCmvafvAuYGkNMnxX4NnX8a"
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
