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
    "5Cwa1n4rUDTTBmLkRcsqwfoq76ovaSp9ATNPR7VcAojzfAtjdtmWggjCotysj66Q8nMtUwtxEz5NXTF4buwgcA75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jdjHVdZg2F4gA4KTrAcP7Z7uagXRJ4TYrm1LrmrauseQ8BeTXz8BZYCjmD21NAH5xL4VUoYjeGt4vzxzLvgJDkY",
  "key1": "5eCjfKdo5fykAppsxMGgsvR7iqQ9JN2YRfL6yPYQPZXaDC9KRVQDmgejY6JnENFRG4PaLLCLtRSr9D19TkPETFgL",
  "key2": "3DpJK3Cxu8w3BMEWSDyyEZ4Zbky5LBPkyAWCJCuJF1JSz4xBZFRNMmu6zzrju3zBdMfVrgyNEw3xeSCSW1zfM7RD",
  "key3": "38q3EQQiPzYBUjvrzDNtyeMwMyHEMYdcwqS8F8W3RUwrvCnwRPLUG7KGzBroi67zYyQFBozp8NvH47Uj9SweBbUG",
  "key4": "46rRLE4xh43DSJfTxo7ytPwdVmnyuphRyUxcmBb7oT6etifxJzxDz7b4f5NJxz1k35ue2Vx77o24tgXJYuLNMKjw",
  "key5": "5FYAfVkz6qPAYjET7pYurJhDNCJFnxwQHX36QtSd5zccKX3Vae8r38qDYL3rtJUDtbhRhWgPAKy64Hv2ruwNfxG9",
  "key6": "nEzXqWHSwxp1FdPinixZ7YRQRVmU15QKY8vTSKGb3MtTVdXEdFDS1XN8pWwf8wjFs2cvWbWLRyyJ8mbcV3yc93t",
  "key7": "3Dp3pC1nHHQUFaWcxnbsEVZAHjb5ex5wWHtbSsnjYGuyqxyL89kH75xc7x7Dj6AqXHCgknkwv2EF9LTTwRZqZcpn",
  "key8": "Ez7gpemuMqvcNVzTrUyi4VaffqU7a5iWAjUGsjFS7FicvgVUbpNa4ZTHSnxzv7jSPAtzzci5MWRzVBfpfS2NoRg",
  "key9": "3rwgtJQ4i6uf7eUffVU9p7SyHt2Nnqp1sDmTJAnFTpQriM1hjCjL9Zge4FgZnLfWj9aeZcLoZxirM2dx3mWqwtg2",
  "key10": "ht7fePJpthJE9h7xXFdYwTzv7uVsvGTx9Sd7MruYGxpa82XpQNkY3GkRomx1WttR3mkS4G4aeyd3un8Rt5JjcHG",
  "key11": "54BQedMEQdWYdb4yMeiF4YBQi2i7wNTC6WQZnrNG8FRim1VtMJwZKyLQZFA2Gr9jpnvcxD9rYXkrGV7WchzVPU1s",
  "key12": "ttudgUPovHsoMmRAJswPZ7zXum9RrEf2ZCu5eHrTP64rGTobEaMT7mfXs4ou8EStB57E33yjrvKFZMQMheENXve",
  "key13": "2kmu4g5EcbchdAdmye4b45jU2fuGUX12PGTovKV35c3UyaSSKWPAnyc9s44AJmKL2LQUReW4AKeXgSU7P9nMAyES",
  "key14": "4hwD5nwG9RvyQKJXAATKdVxaLNmLyM5wkg8b111faMfcCxDwiuFf44HAJn1rghCZAVTsz6DtL1KXKzV5gJ9ogbbg",
  "key15": "2j6eWv5WVgQHTuwZPYbxFaMzwTHxFy8pj1MJ8wd8WTVDSNA8kvWJrkcqpbGdjBGBxGSdUmyUSedyWzCDaEvbHtYZ",
  "key16": "RCraubsg17Q597GC1fvEspf5ApToXbzHwU8ggDgT2uoTThYsf5Wjbk1WxZSe27htVD1qZWKyiMLsYqNYgyhNGiy",
  "key17": "KSRrcNqsqibq1EgynPUnjMA3kTVxJVJTtoUa9eoGYXb4JigcqzSNt4VF5LgNbnDsBDZtTz26BbqhRjYM1pDaEMN",
  "key18": "2amZ5rTfY4TYQbYATU78kz9rbCKAjLGkX9SDhRZt9g5qhsGnsSQnLEZCei4dLPBQNw2zWJMx4yCAzuQfrkKDDjEM",
  "key19": "4ZxyrfLtfT37Bn4CP8eGhy6gxiRd12L6jwUpaooL4cd3Rt9MeL5JPh7DZwLGXrxxWJkLr6EReQrNz8JtAVLvhMJ6",
  "key20": "2nKrikzcXMyE8kzPZ2AG1MUfvroPDDMuznHRKxmvQYDJUsvt2jm2e4dZQQbmpgt4ypxfg42Bah9Gy7BXFjBijgeQ",
  "key21": "2JGQsLjcuSfBiM5dpkMuBU1jQPeojCd9c9Ruzu9iQtBdg9CvqZFX8WxLxuez1xx56taZbx7XCXLkMmW8HkFyjW7t",
  "key22": "2tT4S8pvYZsFc829brjGBJVHRj8W48j1mkXEe4Ewu2Kv7w2gNv5DJzk5YfQMzs4adMUXCnNT7pc2J7YPRjLm6G4o",
  "key23": "4DWUfKnQzXNvoJszGfzShh9XwEs5Xke2rkJcj8eJJJbP4tGAFvTLYXFPCMM7rSEZ7YwowVdSzQHA6MeKphqCXkJC",
  "key24": "5DEngWBK1K1ednRJp3rpFHEDSfG9prNRWUJK22JRTenbRvE8GaS5pDzgAveVMhD2yMfoYWdqEA67mPwKMN3kaAVP",
  "key25": "3pDoGwgUCRESAR9jLD8f2uGB8orKinRph4JA365tkCYKbSCPCq1qR25LQHjXmBKTWDGMgeKgHWVMXReRNeCTFie1",
  "key26": "38THcV1peeiZBZ7tzo49QnaxQ4aEYnKaqB74JpJyfXH6LkAu5Vx54CAMnjvp46SqrnH8k5Nyrc69Zr4HyufgSpMc",
  "key27": "z7e4nvaNK7XaKYCrwPGWq8yabcJXSyGJvNUiijnQyUF2Avuo4KXRLgF58N33njYsY921jx72cxV4PLnfWaAZFi6",
  "key28": "5FJp6vgXH3tdqC5BDeZbgLyUuyHg4GU74CVeodqPbqe4RUXcY4u1yeRcxMDJkXWgHW59Jf6mBYm1P5TPveaDVLnu",
  "key29": "4Ni7DmL4PbC3tRzCDcwHUTeP6ZXNqwS3rgbuxFmkGQXyyR8b4gBX4h4ZvNHabTWczBr6PDCyJpojHXZUSAYYsrN1",
  "key30": "5WRZHGfEMg5tymrej2GfYCE1UCD2mQ9oWjsWHNagTrS4bovqf9YTBvXqi7g2UKvdTrKTjyKjritvn83Frh7B7dmW"
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
