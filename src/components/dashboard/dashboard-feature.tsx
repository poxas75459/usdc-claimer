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
    "5kfg54e7TDJfaPaXNoNonKmxxZeew9ECjPn1W9hS8eqmf3SBv1S9K1f68bRkFaykLwDSBZN7RgAKWEvbGwGZn7AQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShVZe1PAYwE4fMHnsb9cYnezkU6A1vCZr8B8dQYtJjd5WydC6LggYmzrSQkr25NDSSmZytJstMah6mYLjzg4oS6",
  "key1": "2wULhEp4gqdfvZ5LXKFadcDUoPKDG4VTvYUYrN5kHeBG3qbjEBYucjdFrLx2c1tTwFNDvjZqT7Ae2e9V364MyADu",
  "key2": "5PMzRHUhr9n7ZHontZGsGxCyBUCDqjBkGZ6Fb2QqcuKaZuXo2naur1w7ynpMQuZ542S4g7uVg1BTULzNcPqA4M3i",
  "key3": "5BmUwEi63FUcrMcTHENbHJyh1Z7aFJ3QU7EFAe5H6CRLdFQqJsUJpDJj3gdjxsQYMtT9H8CnWbQZVYKwiMDZuw75",
  "key4": "3hoPUwjV6LMGY5n9ndg8FPW8FdVePjAgpMJ6dBfGNY9rXrsArPf2y64buTz4mMbaCJX92E771ycUt9uQBVzKTYyJ",
  "key5": "4qwa8qxKY2g8j72N7Zxb1ULtgrYCT2SAby3KBZwGQbCNL3PPhQzd5pPxbtfBMY3jhvG7xLu7cfjiQzzjUDbb8qw1",
  "key6": "5BG2P86qVa3fhv2WRRbYtFggqUM8zV5twafHtgqLxTCpS7wdTB4VhEdsxxMrwShJQ4s3ur7d3SazFet71GB9mHeX",
  "key7": "2kewFEZTAGycoG8XZdXrj7uuk7SAstx39hDfuef4eTiATfKTAaUzfWtPJegEmwan8aNtgyn5hD5X2rD4UyTYFZra",
  "key8": "59zAdPcQKCK5DgjMwUopZ6gHwNiYKvPzTnfsqYKhSSCBLjUjKrqvNu5g1wRGAnSQiLXSfdRFacMj4wXbQeufjJu3",
  "key9": "39JYNhWYbQ3dGPaNmvqHoHutbcHUtX5uzrbMDCH1M8ZcLpMZaZGoi5QMJua8tgvNb48hZnPFwkE1owiU8yqaoaf4",
  "key10": "4iXAezgNAizqiTnUBXeYeRtCmP8wt67qzT8wzw99XLraUfKedC1oYHNJxt7xaX1D6PGpy2SNwv5MfwhEqE3HJrk5",
  "key11": "5tdjNTwWGKzFB8aYDxPh19a74koHbw6n8wPtdRwVurYEaZMaiTr9AsQUM8kD9zKd9EV9DGtwsrW3JZFLRrcM3297",
  "key12": "7sPv8F3Qva32MQGsJdrEeGHujQvJmbPCgXVJvJBmhMJVgbkfaYYTFVzAus2pAS2RWFZLVvqsbiaUZjHzWSzEDzS",
  "key13": "9mh1LmGPuLWwLDUkznWgizWs2iRVzDMstenb5AB5WfB8V7v9E1RsGDpwN2bgTajvjpRs3ZkQfxeHJvwgXigA4oT",
  "key14": "5ZVk4p6PBAuB9W9tEZFDRxUCC9YBamDjEtpxmjfe2Nsco67xJFeN4dieh4Tgxeshs9JPk1jRkeuqVMyqW5FgNyc6",
  "key15": "5S8H7vyBYrV9qT6NSdA7rSqtP1e2SYxv64CnfC7dbQXufkvNB43x7RWW24FCYHyNd1ztL734bdWia7jqfLEkcMeA",
  "key16": "5Sg6gsSCi5PPJyCo2umouCp6bHKPXhLqrfkmERwzhR7eJGj8mgW9TwHSawSTE1PKkx9qeVkQ6xsjvy2DUZCsgPEV",
  "key17": "3ZuWvebbVqK8zQTvbhZXM4hgxGaKoJ2GtoGfsCiZdDtsEQ8Kx6xJmVUpiMCxTTTLkZSE3XfE2mPgsDLGTGUQ2mwX",
  "key18": "2dnuobdNDuH1sSr2qJ2ZMnQwFUagXD159H4o6p6X9WkfeL245zg5EoMLCdAqAciF8FjB3MfaziUTs4WBwkB3KqA3",
  "key19": "5XYRoA7wmA6Jkcf1KwZgmVLJfSgxCtVxicgQGUcngWZH8TKS5x8Bp3PtqxABd8t8huWV5WqYkC7wxrskK3tyiRqY",
  "key20": "3XTFdLQKAmPTvswjWWWieL1nvoKRRBhWVf5vLAH5qeoR7BxPMq6AbTxD8P8wLQ1UzJm8SJiJ5i15YposhBXu9eNg",
  "key21": "2q1fwMjAyUSrevpzLjNPmMM3ANEbQaj1Tqq6tLxJzCm2axSbrhCbp2ZKiJ48xF1Q5iV4BhvDy4eJKv81AcMGW1Rg",
  "key22": "2E4QgX1mfUQrStW4s5m1vafFDmh88D3zNgHwpzs8keLA59dXdjCVUb6dz2AomNiZ9usV1dmxXSePtDg2pmnc4QAQ",
  "key23": "Q7MhY7KRm5svuu3h89jswWHGGzNnHxh4MZP14wWXR2wSWhREgFeLgY38Ee7w7HqYHSkEbkUCF6W5fqRUyZNy6xF",
  "key24": "4pnbM3LA5TQq99p4dEsm6sy1yz6PVsXAec5eqoUy8bKUYkoQWSjYprR6Pwhjria7tsdMgF76rfoLL1BdRkPVt9HV",
  "key25": "4VVx527C6rj7FUsgFYo7s2kJ4Ems38YeKVWfuER8mdKsjpsGfoS2trfc593kBTmo1Q8UWL3KM2a2doxvjbAJVS5n"
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
