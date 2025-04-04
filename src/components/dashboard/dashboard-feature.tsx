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
    "3FyKpgSwUKVc7Y2BqyzdSCTxQJxRrLax9RbraZSP1wPD3X2TCBCW7YHXYwZivfAnGgHTsaMiZ7hUzPrbYjbDH6dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wcud8MRPiF4Jua35nkq6qWuPaY2aP5mojzwt6fZsKfTRiBrPjUgaeNxohWaB1tw3tLCazStu8F1Nr2GNqgXcdfv",
  "key1": "3YR7NdsQEj7wMwqU1XMttwcBE2QGeyBS7DXvQ1GLeRF9MevGwgcFqqGUND6ekAhXsyYyuVLMHVj18YdBfkojtNdj",
  "key2": "4fixk6SCDw8ofYe7NE6FCQEq6tpMeZakqiztVJfXcWQvf2SCwWs8cnZfRaRFawYVdj4HKSnTgrB7guLi8DAaV9tT",
  "key3": "3AK9eniMrU8vTwZAXxinkdiCj9biphRDWs5eqkm9nk4CDtEeG6vnW96BAFkZ6ghhDvrRJVMtfm2bJperinjLFseB",
  "key4": "37dxCS97SDKW1AnrhcVFx2Fu8RCEXNaxDNNRRmPQHwsgdu7VhT9ZofN7wsTTovKTd1eE91ECnVn2JRXSozpuFyvs",
  "key5": "4n1jsXEc3zsj2RWkPRTCi2VBkQfSnPdv95ZRStCdHX9g7GYMDdyQa43MoBDWdsMqkixEhAq7CZw2gToBUiubGT76",
  "key6": "5CcWWoq4EC4fDD4w5qfasTkf3qCVivfn6gbf8rJPH4GnZPKoFt87sYnpftdkgap5VTDcK7UXn4nJC4qjfddMCtmG",
  "key7": "2d6ULk6QGPMtYeYCE8RqCEce5iLcgvNzPmhiBvSmp9xso9mqC98V2jXSTzVkexiYfdZDWmAuE44zm4HhDfDmvxiy",
  "key8": "66LkyKNaNd4A3TicM2JRNUMo9V5TQJPQZrGLBAxeXHiNDN5QhACFVbgDagZP1Zj6ZxMJ9PNLYYdvWXph9ixrPuJW",
  "key9": "37tsdhXPvzHHzBfz8nTfRLUeWPPd3xiMjw8E1B8pHHmuVbJcuK5kvjaXLf9MQeHabJPEDJrSqdhF4bQxtfsJpNxv",
  "key10": "491hqC8FkBcZo4kaUjF2pcfHqFjagpy6NBXEi1q8PiVWgvCqkNgEkXzBWqHJ9skwwFe498VLnbund7zo4aVQizW2",
  "key11": "2TY4JdNsg8h4yYXreZJP9y5qezYJ2ZfipXouxx6z9TaPr2oCUMr5SGDaJWCfYqNH8Uj3jFJRP7uxdf9HXKQWBm2a",
  "key12": "61ULe77SextgW8Bq697wudHYjN55ns3nNPPD1Douc7W73jNH5T6KmmzCVweMvx1cfKCCXGs9ku2xv6XTpL3dv3rH",
  "key13": "3dswWrFZCGXfUKEE4FXrF4TPPfAwuehpr1r6PswVEk4SHQEz2D5NZAoNH4Eb6us17viUV4jPQBVUq6ieXBNc4pbF",
  "key14": "3m2T6EmRkUVFmXkp1t56q58AtNsSoRGofpoQnax64nTMmx5dkVr5xJitacVTpspm4NrQfAxNh9WYx1a9xf5xLkBa",
  "key15": "5FHzcPTSNdfPY38SrRPZ57bsmDEmMJjfGgteWxtQ4ugQMqRP6aNFv143uChTdbZfUyC3nGH1BZMYf8tT9g62b4Zn",
  "key16": "5gsayNUzsbDJhiRncNwy4NA8jKFEWfch5syDaRwhFCLsHqigEjaoNp52unXfXEqP3G7m7DpmiAPyqxxZBfMjNtU8",
  "key17": "4tSorfGxcqXJh7W95ZtFrespEXw8xVxrU4Dn8aWHzbJLE2nBJuVRyBvcZdv6BDhBqPuQvKdK9ZNqZE7XCBgUCgSg",
  "key18": "3Lq9Vr6xdEjLhLLLYJUJvikws5v1aEhaFk8XzRUEwNYs3vbpZKypg1ar6oQDYQsgJyeDCyjQJxEU1iYuBUYbWesY",
  "key19": "64stFXLhmreeBbdU1xUu7pxpgFm5tLbAUMxeCeUy9KJvQ3cU7vdqcyCmuqUXNhnUVJN56Tnv7Em7urg9Kwxb6z1h",
  "key20": "2cVgm7rrH2X7KBdsQnA8dmvL6JTgdHQPueGvmXPwJXjbQLSydc2QU3oKSepYommCtEGj4RDWqae8Nege91diiaV1",
  "key21": "2CPtRVNS27fq5e3xhrzX5moJadgih9FkYxYqTaXWLWToZWUyqBAhPnReBxzqajXsbFrnmJv9LXtpCAxyDeXcAHX9",
  "key22": "2LPrjcQLKbXMcjPWkxcNcj6wJwLhV2JftUVHySGvVREipqA5kgv2LCgBeExNV2pUMsmuYFLozu55YbrBL5XU1bBj",
  "key23": "31pf8J3QdJ9HVWVJs9YYz215mrgXsxbTPjudHaHUi7DnmKipdrgqy4C7CRQ8kuoFiaNnX2aWMqz1dta2i9cgsbnC",
  "key24": "27iBc5j3eHSCrk43EjZiQrmPhBfoBVrzmX8S7EhspJN4Tsp7o1dUuDuy3Nqerk7VSD9FiigbN6Y1qryMnh23kKXp",
  "key25": "3hqcEdjRoXRz6wG4w4BPbCgcG5Mj487wvDbxw7qHeWNRemNboVqmTuHYwRHEfBDTzqk2N3f1np9y8zC2VQTdUUPM",
  "key26": "5bdnAvTYJ2ptiKEZZhsp1gKFrwHePnNJnZSiXr5mpDvX3svDH2YRS44V6Eab5SB8GUbJ58GJHwFeoofk4BHy5rfc",
  "key27": "JnBvqPRxZxLnjXjSFei5Z9ces9jwtSErz2u7C3Fg6iymympQ3v8pZhqHNuDAgHqeGKrVc4XnMeu2q2BWeMq9ZTs",
  "key28": "49L7jMFEKe6Emg3dSq4FRzixE14mrfPbKA5EESe9z4J84pxMDCaEAH1mXYJcFBGgUGbiY85s7Po7dkiST2V4iWyQ",
  "key29": "25R9Nyd9xZ32etikxPp6FWTHn1CqbQL11gypcEEiVswxVC4i7nYLg6mQaLxQqT73o9JUEDU1HjSumNt4ieNCrTzb",
  "key30": "4JcAEoByKhEZ2wieSxzFgQBcmNWU1zukPw2aJMLmdB2gs8qLgSN5Rm2ak7vN8hXRBAxfWjYKP8T4DE7ws7rh66VW",
  "key31": "4AN97ugSYyQ1Js53wzbVnsUWW6yaGxc2werTu6gzzzcaU5UM2Th7QUNEJjeDPwNDnhRqJQbVtWe3mP8mkXmApdDC",
  "key32": "3kC5uZX58GSRkW9zfDfJZpkcMk3CzEuzmzigw6ngqRrRhcStqArBFBW9aS48LAU9CBTJUh78zBhAb3fBNzqy26xV",
  "key33": "8b91e4EEiNKt3VUaAsHe2YbXdM2Lp6qSQ8e3qvApkCcz7w9tSEvWDTXWDWVECugpx7ZSsLnKk1W3Gvp7EERhAPL",
  "key34": "empJXM5dUVoAZGE2Czb7SHmVoUVi9xZfYUGtqegRXLkP3cYonibW3zkDjUfnwuauXeDFNa7tuxmUxEWKBAbX114",
  "key35": "xZBKcTCR5eZC4rubfxcCHdQFxXgPs9LptAEcefgTeQKep5VJNkYwwfihjiFPHYcjCSETTRonJJK7BXMMGSGs9YV"
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
