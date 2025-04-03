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
    "zsqxhTcrrAQsTreHR9GFUDwnRs7d3RDh5fLQtNphF83xvbL4h6RRGVhw84rgKWzNkjfzNtESgRS93yvg4VeGCrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JVWmrT38LtLoL9zr974fGZD8cKPP3YaYGMnbVX9Cn3nNQkfC3GymZmCptQN6DGaQnigXuDiuPW9iXZSExBctMN2",
  "key1": "48e5cnuaAUbkV8o8EuA3MCRez8VhXUxCmm8RnnbYk5REDQbuSxHRx6t5H3HUbmSGqa9XXFTMpUSrFbLm47nTEjcj",
  "key2": "29GgvJ1iedkfXFAFJASRZUWtFQvyHxo8ZsBKB75yrjhKv6hTRsXBvF2dsqwxfxEpaG4P9t8cvLYeK1cG17h3QruM",
  "key3": "4AXE5UZ6zdKT3jQRQZ4xai6uwVqeKicCTVWfQMj2gCgJoKEMZYSMySE6VasCbFCgKkgvSJmk1VgWpuK75cfsqUTA",
  "key4": "hCYHaEkTcBzcWC8TD23VqxY4uCQ9dP8Cf58GK6a9gHFiwXQEdvj12T9Ny6mzJAChcgpz8RZdi4TUeKJvjCQ8zGc",
  "key5": "3HuY3qyML3qCqeR5wi5bMDyA6sGM7xgJEushKgUnJgx9apnUWgpcoaqQWARLSk1pxsWG5qAyyrvPfkZpvnq3z79G",
  "key6": "5Vv7xgPnANe49xcrezkutmmUCpo1YaD9PGtEjtBdcbReyuUnb5yToYyQG4KYru3VrqQcgcHxzMvamPBJKJyG7Mj1",
  "key7": "5RiavwSXb3YGo1ayno8mXoiYWV4737ybCp9ism4BA2yYSediaKhk3HKkyzN3854kFG1YYaa1UzDf8WEqz6xvNmYb",
  "key8": "28jCc9xGc4HRJZBkn72J1fEQXGUAJthrU4BxSM8WW7V6FydyJYRq4LLzguQdaLbfhV92KJuyrDcfpWrxJxiGTrru",
  "key9": "2q5c71dVbj8GDxTiGUjyR1WaPVBCBj9WrBFNtfSZpLNNtz1EKLcLZVwLs2QrrxaEpgo2owk755zdFTTibPzwJ4hT",
  "key10": "4rZhznYvRK1EMrH5g8k2c1PEc12g8pYs5TVccBnWoahGh712s2YQYxv1uG3QRQTYXdZ95AFK7GKYMnYp1UbCYtrR",
  "key11": "5dDu4yuNuvBsAjEg3S6SbRT77kbjZ6vHQWkg7yfHrKVwCK7CzSssxZpyELJMNv3ysYQck3jZ8uhcECaSXYMmopuC",
  "key12": "36b72WJ9TEFdRWSFFierSZpGG4yiQdXpkes5a6NcKZPGmH6pBRA3AxSvZRZhvN3xosWxVaK4CBnM3NcrjAdY4i1a",
  "key13": "3NxF5PEUCYwX8eaDveG8GwNe5Z9z7kyq2nryzMMe81DhJKc8RwzQjax95WMrqdR48Dc7mnHDhuJFHuxR5yb5BYDP",
  "key14": "3uSkWzQ6ghWyMhEiwUXrAAriWB2QC86Q3YCHTGQh8pRqP3HgCJVx94uFbctmioZ4qas9jnya3XJ5SFF2QbLkNeKZ",
  "key15": "47zzcWT6pz7jC5XbXKVPoZTa7obZczRhjZRFTyYZ4xn7m19RmDbGMf3pDUPqBwRj75epjjJ3KCczVyh34FTUt1do",
  "key16": "28jKb5vTfhrryFXTwXTx2KjnGXaV89vJgfronPvF7CCCF72qzj8zgXgMUqYAQAQNv3M8jFgad7rwggK8acgvLiQE",
  "key17": "57DtdNXmrUpoV7RRuF1qtPv8xEFNdRHPMShXeHzNZqrtpEZrj9xCQkzuFfZgpVAzoL81o6Nabw5fGDdxDji3ACUP",
  "key18": "TqrraDfUjn2ZZy75ta1khyDDkmLqsdmuNcJ3qDzkJaMCiPgH1uT8xeiB8Zy5yrmWQtf54YeHRXxDqQmL8Wb1xKF",
  "key19": "4irWS3fMaqAv5U4EfBPeY8rEpkrQUwmF8ALjCg7TBrKB5MksAxCNCmJdUeSKh7zwj7CACvfwRsdMEu9QzUAtBY9m",
  "key20": "59ZQZUgt2kTqJvxf2B8ZQbPkbckcZZoQ4wN79n5dXuag23c3FxhbNmm4L5dEpE1HCuYTUR8tGNZK8sNut1r4vXuL",
  "key21": "4aYuD871TrQCnbSA7mc6h8qGGQaNfVenQ8TPkHsuwmyq2Eg4BqWXQTqnd2EAp1YsgJrXaJSHd5ZHhBNeQZgZuCti",
  "key22": "4L8dYNs2ZU93jERCTJ8FGL9jsXAKviETAQ5orNJD4EZMmbtcyL196gGwV7CL9QJFTVxpEKpRyijQ2D4TXxgxMES1",
  "key23": "4eE1QSVqZMTtgjYBZuu2LTJ7KsSLMdYNBRL7AybwG9yeck9zzki4JoCBQvviYh2cDQFH4rZ39pdEAtjREqKUsyk7",
  "key24": "4PtqTD9fKUfQ4JiZjvLgMSLHJXqWUSkxgD583XtpD71w4HUjj21AH4ko5uPagVdYKwCh8NFw2iAHb9dsViQgq9dX",
  "key25": "41ZuTj6fn6kWHhEZmivVAeBMoKHiFsEHVtPmyuiPCQM2SGEEgRiW13BbZjfZe7xAoFaurdMJuidsgJuiteASEyAL",
  "key26": "4abRpcrdFP6BW33G48mua7EbuYkvTtt3zNLbGiZ6sRMxNrQY59x2Qa6ZScxrmuKq8piLBiLJwER9MV8BJVJgNUQ7",
  "key27": "5o92A1MHs3zvyGaYTxybBGJ2Nk5w4acqqyEW13bDU7xgkPCpxhvGnZ1mKaCcvCRuS38cyH3QgNvCbtLE8XsDVZYp"
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
