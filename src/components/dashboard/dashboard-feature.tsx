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
    "2BQic47aQ7SKWnDjKJHYMPYhLGpy5AQMvAXvfWXgjqUtB2F6H35ZBPk7XQ1bQG5d3QGeg1XfyYGey53V9spewdzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2T6ewJxx8UpwKqrp72xncNXmDG1KBmgcEBbY9j8FvKhDhbvA9qxx4LKwHwcEAWNPvG3UuG7QRu1wWLPMhgetpH",
  "key1": "3ccP5okZiFVGXLPGeqdwhGCSTwt5cCHiZueSWxFPYRk4fUMXY5T67kFhnRtWkU2vFFJnPctwC5g3LAso8tAf8e9r",
  "key2": "5uahfKkxcVfzNYcYuZYyZodNXueadVhjrG7pXujkuQ2DZqPQp316u2P9uS4E3mj8mkeTEZy2zcm6UQXwyNWsabpa",
  "key3": "LYg3scUYBqqTUFjJZdLjAWDk7MxUYiHaa1dyQDTY1FCJWMrr6SeUdP44N33fPqbSSKP2yebxZMrrNwdyZV9LAKk",
  "key4": "3mXt4AfNJhzJoUiKnivfrpbrHjSVaJaPZPJhEFYm7jFjbD4BNb7Xo2Ngdv63AP6pJwNkHqUHQxxQJVyED2hrUPS7",
  "key5": "45FncdKUJ7awHKgJDY4nC4SCg9FjLcpFY4QEaHhX9s3tuAHbEMexWm27znZt5sPHqf7LQoPFynLqYzjBZhYVZtTW",
  "key6": "472R4jSjoj5JVp4eH4EyFj9Uw9qWWHmrp52XCbV1NSLjjMFwTZAPJzXf58c2iyvXax7xSBaZrnn7mYGRcaZqSnaa",
  "key7": "5wZeqRzyxhXMibhX11UKMDC8unBfju67ktSjhyKaphe2XQyWsy3LemUaqWTKbF9SMGHHucAwEkwSjrYBVj6Jm4mx",
  "key8": "34iyNio8Pni8XApEGs4BK2RPow7dhFPFCD8F8NHVjSh9accs9rxAsu5apJNQvFWdDFGGVy4basQe6xf9fvjJqFzh",
  "key9": "26U2mQyyUqE6vU4XqERqZ4FBSzpY2jDLrmcr1qfsoTgav5Dd5Zge1AJgexwBKewRLX8svZs4KrVPZYZjJi3zYuEU",
  "key10": "35WiqzeFcZ626DzyAdy99aqVn3Rrp6KvzrhCTWFDckauJGrGTDFDVYzYPjkWzkov5r7BERqtX5dAVgfiEAWRhaDj",
  "key11": "RCMRNeoomGoTUvjJCqRHnGX73awfvgs1JSZRsHhBaBdxhNiDEA67hrxtcZgVtUNN1FQyLe9fQiQBAkNedUa4ztZ",
  "key12": "518eLGBe2LvopPTRDHSJM874nEfE2E1QzWWFMG8kW8do2D6Dgxs49LmCdCBBLPHtJr4sdaJk493FMBHQa41p7W44",
  "key13": "23pKRhuxEK3HF6zyWJ6gqGtjfaVguPuY5zq4zdvjEo1vnRnK3mkq84eT7csVDM4QV5vrXovJVACcKf1LYNXjf2JR",
  "key14": "39bVNkLFTu5DKwjrAhRBxqtdPongAVf35ce7D3H52Jc8LMoN2yyyntRJe8ohaMWuNBKkp313st7xkGf4WoxCBZB3",
  "key15": "3ehTxH1q7hL1v1SytD9tMcn9sGC1BWhv24prWpvrDw1Em8KBGaJieSzr1eKNTgxfHkTnHrLcFtYmSR6yBJzvgKZW",
  "key16": "3FPkdiNfWN2No8E5xKXaTmYC6ywcpbX27kWy6iVPJTeXJXh1j61CFyLbDkK6NfhvLBr1jbThvTwFGFhCQQSWmUpF",
  "key17": "2kgNx68dFeTkFP8TuBrXCkLJT6XYoEymPTrNo6F55R73E6ePUnPPjAg8jpDqQuF7R1chtSuxqQLXpx2UdJ1sQPwz",
  "key18": "2khy5PVtYpXVwMkndngAoGPiZap7zrvXJ2K68Vt2LJnjWx8TC5EXsW8pW8RUuJGaeXtus9nzSWTW6f72n3RkKGc6",
  "key19": "5GBaRHqycbRiositk4vrWiYHi7XCNLbRmNWg3XxwgEYTfackVPJ7T8X8GmmfSVGpM3f3UpSgjE1pbwfbFhPNenRR",
  "key20": "4dC2547Ppe5y24HeLBkG3wZ1ejRHe7S1GXpSuRsMszu8fzRJW6aNwmfUhraMUuZ4DST9PBMr11NRN1Z51AQRnJXw",
  "key21": "5bc7vMghfk6CKk2bWC3V4dCp2A5zQ2BBYXiz2zm8GkF6ciGXsJuXvjzo6QQqkczvc8w3jQaui4ZKET3xEMh671xs",
  "key22": "5Y8SRW2XPMdmPGFWwPs2Ak9r1dynygmgqpEZfbo88Wk3TPodx3PJh4zjfHprgi1iT3GjB8HTuuVYKiipubQmfSaW",
  "key23": "4V1429pzv4iyGPzEnyXKZD539Vwh8AHyobCckC5ouRyhhHK8XV8A1YMthF1WTjqLVjbvMyXqADCiCdeYb2Fu2mN5",
  "key24": "rrQH72K59tqRCMju5EQ1VsP3XazF4X4hnsGuegPd7EHtUaNZk36uQ6R79DBEszrhGMRgjX9xRN4vENEehmgDsdG",
  "key25": "MUCvuUWqrw9GAGZUD2A58hrgBPrEDpUas6rh6vg7cF8rHBbysWr7miuv4NtSLUnCtkMeDXmTdAY6YeZs9vYbXqi",
  "key26": "2Jpty5U9FiRggwjdZLvar4sabm93vbSZniAeDY7QHJJjqPiLwKDzqEgdizYFY1GpkgwZt47wXRmmU155UrEhyto",
  "key27": "j44mzmPjHGraLYrvH7Hs2UqTBbFzbjqb8nGQzr4mmcmMUiZdpnyL3wzyQYVY5tgUtcGy7ntNhNY1jjnKQW1Pw6q",
  "key28": "4uxwAf7Jyr42341gTPek4KbdBmBAsYbzYHKRU126MmHbxo5ro5WU8AtfAVe7U76NBjrUXaJu46bxX88NtLxHqmH4",
  "key29": "4a8f2VgfSRNEE91tPdQRUcy64egiqHM9gdBgrDdDS78SwRxVSSLBa6cd2fZFLkSwm4aw19hrVPDYwEMPzqNjsLui",
  "key30": "FYuF9bvxXJSDEfFBRDPxHfYHc516qZUpFo52JdtBS1D4g9h1vWtWiY7LFoyneCv6RQeyKFPD8J6P2oKwJZoy1fL",
  "key31": "5vv8o9ZukmZ7Yv1nrWhm7s2jxphfiV5AjoYxHpMkVetMvMkRN7uuAcCWjCo6fGy37W4WfAUZs6GY7EmKZE2TTJV6",
  "key32": "5BwaDyn4Vs9zzPBU8sgbjtMbgZ3PVpnqd21LLGSUiD1eFk8wG1qw5M3MnV2pQytpsu5nhUidRDBrobQyLucDrWpD",
  "key33": "5HxfLTgckzQZofNgoRncdYak7KrUT6M3yEfgRFB9XJb3pR4jCzQqrxVjSEXu3mNUEuerUsDVQsYQk4YQPQZC46Qc",
  "key34": "4jBgjkPvnaVYSZ8sCfFcfiYJLQrnCYdZNpiMuLQZ4YvR8EWFeMLvU2r6aHMrJGHz6d9UvBsAgNyXz7uVm3kLURz7"
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
