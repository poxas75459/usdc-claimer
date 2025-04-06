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
    "6JDoNyp67eyBJcW2jrCXdEKg5zb43t3oKcCSzq8s2zefJngm1UC2JdzvkQqNMDafhbWTHocX3LTn1cpd9HEXnEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ji9QcS4wShUfX1Nz9UU3k5nqJeSGgvHo5paGynJCzziYE99XvFJDWq6DiMeGnMKEk3DFuNzAooDGrcxM66hdQA",
  "key1": "3qyXYC7CWp76F3Z9ntnySqBjQPdw8xMjW6dXWDagdEgNgQvLCL2vrXi4CNSPHeKY7GW8Y5tnfvKowVFkumfQnigk",
  "key2": "2HLMF3tEjxcbNoJeVRrzzsujsNz8nqMdQfjvMyfLsd7wSoS1Mv9bBqb6cRTPuNnf5FQFZZzRt9Uwu4Y8YNhp2Zn9",
  "key3": "5Kit9NgcDsRvA7pcjZB55E77hAD9L2wdG141n4RvqoXutcNhEKdK6SJpZAXDox4DML3updtLqBRKEYjAKLEEqdCd",
  "key4": "8rQCx1oiPS4WdSj2GFdFbrAbp3K84fVNixVcRDghVTeHEWNdLaZoNFmihwLQQUfBHXj5rkjkn1qQ8vJWvhBbQPi",
  "key5": "fALn4dyy5J7Bqc3og7zaqaskhR6TwHEFpN51quTcrUZYPA7b9f8PiBCs3E7Lg21Wt6rvCT6sFv6xFh5CAbWt1iD",
  "key6": "2LxTfyKf6Jqs7S1RwacdhiyYnSwBiNFVxGijDWm4YAnyFZoRaE2b9YCXkjiLZGkNJVJFus6fqA6A7p1RiKKMKpMJ",
  "key7": "5MK7b4cvmiKDRn49XDcFGKrNoz9W2qAHRSGVxUyQGbFL99reYJSajNqmJzCs8btRWkXhxydrH8VECXvmgTg33BnG",
  "key8": "4pnPEa8oiJSuw6vAy7ZNYUvA78VUtUNs1NyKsU1zLtNmKzRgga6Y7gQqVdJDMBNHdv4tYwBAs51RxZaDXgjrBaFc",
  "key9": "4kqo8axD5A2B45V515FHR4X15PsSLLBdA63tRkjqkJPCQUnQP5mPLsad47ESrKLd1HtDAcbvnpwNzJZG3kUsqGrt",
  "key10": "2NiGhNX1ds7kiHAuepiLfxNELRzHnXpkMPPEYR5rnLuPqQrhv5tx8iTbUd1sifyNfMc6iz2NYUKvXfYPdZhQkj6x",
  "key11": "4y6dhTaNUrAKWZCQiwWipDMnmKAuT5gVjUwqwD2urugXt1DGwokoBRQ7Yy9hK7Y12NBf8DFghE6DCL9ZL6iKFnye",
  "key12": "3RfN1yfFkiT3EHBXmgzztLK5kpNdZFetLh6iEP1cPzhPqSjU9UcVeb7MjLGVitzNW3pvZSS2Tz4dD1UhPdsqa8N",
  "key13": "5JvZMG3tUGtnccR3LsoUniDcxuqQPefE6458rnVSLH8sn8beQ3on33baweUm4UAdAsNXksXEJmhGG9fxJ2Q74Tpp",
  "key14": "3LM7y472ZwJnnEMfsTQ6RwJYX2HB66MU6rDeu7RyaCuaXkvummQte7fN7HZKuJ7zEnjWJ1QDPciDy3HbxwnUgS7Y",
  "key15": "4GFjM1J6p6CUF416cbJRw2b5r6raZXZ7jWto7MpkYBqpUqqEHW5YCjy4zyrQC6Jg26vf6MHZv3mh885UfrfnT8X9",
  "key16": "5hDBoko4fEWfJ8MPYcoSqnxNXDGuA9HJQr5ePVzTENHtGT4yryhPyL3gS7tD73Q8HHAzgbqwsd9TnHwtf4TsTx7a",
  "key17": "314Vk5GZ2ibk8eaR1oBE4p7dxKTkSr162v9n4GQaAAxihNMQBHJXPQNvAthDskTwgnGTZv1a9UNAGaKL5mwYY4rK",
  "key18": "6inbf29ZprtjwtC1VNBnfwGBTSxbqr4TGXnz9McbsYGvFffLqniis1Hc1cDBh2pmedZ3WqB2r5h8RqybLU3jGKZ",
  "key19": "4VxKpDeeSh3Srv3puVSXFmiHm7GwqUAuEtTy79dfnRmndGuLRvxvkQcSt3p5Ear5F6V67xPy74XSyCnkThH1yjU6",
  "key20": "455uxtJezsk96XTf2Kvirkujex57kLK3RxqBEwLitHurkdDJjr9tWZuDUwnrbxBfQs5k8KwdpUXxokupauq5uqeG",
  "key21": "63NhxJCFicgLpHJbqP12UhzZVGTsreK4U6rbwW9LxgsmFtvdNAieinQ5HmLXaBiv8amsFCarWWtUf2RwzfMrUmuz",
  "key22": "5aUT9Zz2joFKcdcKeRhaEcXsqNX7ckfjJWFrN44Tuf4GzcukBN1Sipft2Jh4tmky8o49yGs1wMnAK2xnfofgps6C",
  "key23": "93kbSMLQYB484kv5R3nJDtp1ZVhvtUSp6S8eEM5dWqU3qQxm9zE1ezUCb9m8ajcKngkZi9MkzaZM8xnAvVCdvDb",
  "key24": "FaDzacHCrJo5Ts8TU1ez57u5HuNgkLwZC8hrsHhPMZ3S1H64Bt6UFCE4ukDEbvTQGPDEkLXkWzc9a96Xdrf2xTU",
  "key25": "5JqKCvLJ2EHVyAH7jYAdMh7Y6ZxLpswA1P15ZTBEBgHSk9M8bH3bgqRnZxhZfEmhogKsteBxKP7Bm75y5TzHUSrR",
  "key26": "fKN6zTKXCU1SRuwKtpLCcM8NZRbsTFnUhezWng6m6KkCdnbWgYhYHC2xsPZUYHQK8wCtbxnjdptk1HzwtSefyDo",
  "key27": "4vjjejYWzb7ABj9nKDXTsoKJNes3QqYHCzwem8R6dMP2Lv28hi6iyipGq8TZmBZ3Hiuk9fXSUA9t82GcJyN1evax",
  "key28": "5kpLPNkASvVBnjRcVcV54tSGaqkTWxdeQsWH2ZCKuWcxuKM63xs1nzgrszitPLS2Hg8XUWU7y6Sgjbgeg8QGh2wu"
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
