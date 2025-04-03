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
    "3wdWwsFDUoio6mfBVGraBczT36Mpu3wHXVmWaSKnGT4AmPR4AZKKDotqmkoC4Xu2RNZ5Kw6dwnNTwTcq5qdkTekM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XidiYjC8iUSLNjrMNHA7GLdrMR8MC5bNZV9TSVKDF7Q4QLHQN6QqXa8LvpHBcjLQ5Cm7T7ad9abjK2XoauFoM1",
  "key1": "53awjbgUy61BnHThEwv82qYhju2EkiDJAtdPFbWq1aDdeR6NyP9RuureximEU22R1SVpkc7fvtktKFSwtqnvqZnB",
  "key2": "3L4tVsK5SQndRmVs4nnZmcZifSG6XmGqij5bHKHtW3MYCit6mMo4k2nksdnBnbvQzcdBUJ7dFwV7888tws8ALkKB",
  "key3": "41FfBeZEdfApbhXfaizyN2Nz96dhqQpJ3hXwvqg9QKK9g9iEBmec2wRbG2pXW8s3AjQems9Z4Yasnabc14R8Bg4m",
  "key4": "5KJuUcRawsSu57bHqk6wA1vuJy9crenkqhALtbnL8VndWu7iM91zmehp6DZGXyE1FczBQZd2xx8uGDWjHuQ3HWUt",
  "key5": "5QN9rceavrfpNnA3b2Z8GQe2ciMNsbRM9tbTwoE7eZcPA3be3auDZacq1aw6dAz8NXi64THwKZifwPxEHGjaRhVB",
  "key6": "4Ys3dJBW29KBgNmckkaERFm6PaxHfb5U3eC4Vm6fZZt6KmrbXjEdL1jPWv91kFLBbtZteDxBSAqvokxyHtmjsHWz",
  "key7": "3CBRZysjnhxJvG1mfqEADWmPMs7ZbojpjY2Hfu1RH3DBMr9Ejp1q5nPuNuvGDKtokvXtdzUo8hR4HKwBmU2qGUp6",
  "key8": "AAQCby6T7NZXE7dbwdx6fmJTAYn6F4RTNhEwjnkLp4MJZLKB3vkHrLgjcJorxBpMkaEoPgTNMYSVHjv8AuXQw88",
  "key9": "4jKCAuH8WEUySQXtW6hNGq5WqC6V3yvuMPWsDHdv5mcK5YqZPrzuxhsCFAz9yn6aY7Yu859wvfW7UoFo7oFUfPBm",
  "key10": "377KXL6R7cjvQUGjXaHS7mAXjzuMiWc2eCE2icKwjonQVTDaHkbcP35FzrQ2onrs2zFWRa5eu1xndWjURPPw8giJ",
  "key11": "3JYUyAYTk46tykBGZH94nPwUoGBC6s7YDd41jHdrjhSXxWH3bvfujNwXga53xtsVkR5wC2E1iJNXj9GrUxERnMcG",
  "key12": "4rZKjHES9pVcAgR6UmkiT8gRZ28qLTipzKpZLByp4vJPVq98dHugcGmrMNtEMEk5y1WhznZfmo9YzfX9moMB66ns",
  "key13": "3RuKVwGrm3YXEmjtZVeUrPTXrEYpYw1Wq7NTJb15oFGnUr6WTsALWqVkN9xCF91UR758MLqaZZERDEHjFHZ5d83F",
  "key14": "4S2yxfNoPtfptV82663vMAmNM8zYrefB1dLrJm9ayZCGdNTixGFiuZeSpQs3iPHZBocQmhXRvymZAVXv1mHWRCUG",
  "key15": "3SR5MzhBPuLipQkeWSaZmhiwdEVmcDAfDqBCkV2tZQWCcXQ7LErGE9v1sP5bD3AvxvwDMWWEvPhscnDkkigJ8Yn8",
  "key16": "3xWxpxynx2DtJKwUMvRMovgfdxepCSiTY53eLNf4nT6Fx6oqrVYk8PbFP95EZytm58JaVF6V31x4PEieFaANkR2L",
  "key17": "4qUzXuJL26JbDYswKDkmUMcctABwJUq5mUVsjc1EYo7VbHwvqxv1ifwsHYoRxTrZztHHqK3sXyWDp79x1MFrHYbx",
  "key18": "4bBCqiRGSeWfCuYCLcVzGXWM8JdSXawi9NcxrBMhPG2S4kvpaUpBbJxwvBkLxH8Bg3k93v8EmxPyL3YSQHwr3mum",
  "key19": "4cUSjDZmmrUNFpCes55oRcGaqypBPZPDuDXyVWCrBx59GAsNXQcCsLmabCVb1SvBD51bc51sKTsCnY33iKZdEmm5",
  "key20": "2L1bCjybJRzyBU7LgjKZjvHnBQjRH1oD5E5ZyVpnY58FetDUyGZqzvZsCfwvvadxVL9KKW94TQXMb9DBewQJ38DE",
  "key21": "25fGeH5H2JvXfJZAnfp9nzDBsqnJJYzsRWJLrhYL98xXX6UvHDsCyRR1sebvvGXmo9komU1aCFpyLQurWNUNYivt",
  "key22": "5oousJK7Se24giQ8QT9W6kt96CvQ6kG6HUL31ykEtGEaKvNdo4VbUHPjPJF3PUo2gvE9ZBgkeLuA497mPEH7mNLz",
  "key23": "2D8bJk6PUKSUVsnqXSdfRSn5bwT6GrM8d9tjdci1o5URiTzDsXz7jafQfbYGPTEGPHsgHdDxgQfruRn22WvVg7ha",
  "key24": "3V8ixoGgrkGU3jo6z9zAoCdNcyy8doVf2k8Gbt9cT5vmLkmGMKkfpZrUtK2JF3HZvA8RmgGbe8hk23UPtstuPdoq"
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
