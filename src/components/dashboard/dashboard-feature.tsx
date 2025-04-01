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
    "4VCHZYhRtor5Mc4NjbSYEwnPsFVB2uhUiEH5BwDKxTD2fVNHV6QcLwoH2Ep9Rd13Ss9VEf7PjRoxRGis4i1gKmLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FpCCsNmxuHss3BHHWFcLLxu5w53vhgS5dKjAdgwC2BA1hQbT9cxWHLFhERjoZGojVzVa9Pch8bVaf2yFL7wqFZ",
  "key1": "3rUKgSAybgpLfwXJfGkBz7GpTQ7hdYmLMS4n2sMMEthnvx7S3KQxKpkYuCAEKe4Mcmpf7NCwmXwh55y2eCBRpcJe",
  "key2": "2NyMVTo4BcXK75xQeB68K1mSMwkBcWm9ZBabbaVKXU7hsqVFWVFxRrRMzgMYFNqbxxv63Qy5V16V6MrwC3YzqdSd",
  "key3": "VoLZvxnsuKuSEKMKARpznwrBP821uELiybViD8B1LbgqJ6YkKFh1Z6CDAuxFymr6BD1uR4bi194beQqZQUFV16T",
  "key4": "5N9QKDYfnEkkhNU2JpyTYgRvzgnjgTWZMUYR2ADPCGH6Ca61cqUi1AoLvRVd3LKESekZNbxXK7JgDHBcvEo2uzi5",
  "key5": "nzpLD5HrmJexr7FtLmRmtPabUBSgNm8HUY2UWAyo9PHS4you2qqbcP8u2ffR37kk9pR95Rv79ScWD1Asndg3Cur",
  "key6": "67ngvaVK4Umph6qmMKiKZF7wtnvUFrBbfSAMUGgbZ91GkhotjLzGHsHvcBHmrQFKcQdrYbnw9qZKn4Vr6uBNgJYE",
  "key7": "5grAggEPBMrQsSFvKtUXkFw3d3K8NBqfKvsoMN56WKu22DyEo4PPdqoSpHPR2DCBzL6s15DALkWfRR5FBtGMSvw5",
  "key8": "5Z8yPyuFpvdULDU3UUTDEf6saDtznTdvssMTcZpxs9F2AnLgXzsTBLzLyKLqB21nRyE9wgeTJJsjDwCPeVDLu68E",
  "key9": "4i5SDLMKdMAuwFoWDjGPfmwDzg8vLYEeuiMk437tLXKeTnxugJKL5LGhHidzk1gzsbCPZscvn17fApZmGrk6bQ3r",
  "key10": "22JNFjBSRWc1RhWeC2yR9GMbZsUhpKynVXNCXbXGJ4AJCoVvQZyN8TVNqz5JCzEnB3Aq1n1kHEN2JF1SAjQZaoZ2",
  "key11": "5JoQvYU4nMEvuyougGA2RLLJ96hFAGCNUjREUC4ZfEPQyJdGKa5VQk6nMrFYcKPG7K9MbvJdUww2iFRwWtZ1KeLY",
  "key12": "2r4RUbN81KkAbs5NCoBaxh2WcKG6VboD5CBfpkvkpaTN1kpAJiTvUPS8auEJd2AdBtEMbK96iWZTJRgrjtRYLiQL",
  "key13": "3VCtkv4S8SVgiWkdmJByAYJr43DfwXkK53UYucz1wcRkx8GrN5Z4nqUXFwTT7uuqpF1QMehN9hAqz5N5o3NZR878",
  "key14": "M3eq5Yfnrugu7vZ4Y4BRn3TgxMcFEgdDeu1dGLaRauT87ddu7MGAiv2NCgVjFEPBABnjd3FX9zuC6x4jXX5ZWrp",
  "key15": "38Yg7qL5XZB7FJ88p7Fkshgjvue2YKitLAewyZEd1xrQT1STMz9FnuAV93ERBgCkioS33Qj8JqqWEEbFjdbCzhya",
  "key16": "RdQmX2A42ErneJm7RU15Mrs9d6iXhQhs9frXk7QFv9NMnX6deis3ZWFSKW6jNyurph8aJvwm2UBdHP2wXUyEiAY",
  "key17": "hE9c5a4Tosw5tJjfrgfUhnTTSucHvkhpV6hwN6to78vxTUHEXRxGv1h7XjRMedRU4KzA5SXkCVM9WH6FnDYLGbx",
  "key18": "4zsGRAEj15XbxojhjUzRBV6bYJLEuWXW6NX9jDE7mW6T687oyuYiCCZnzRKsp9WVcPuhvSijMr4y9XNn5tGnN1R8",
  "key19": "4nUKumyTpr8q6zUq1uWsEg2AFHzUp35jjDR7R4tJGdvBCrSsrEoxfv2E3gxziPDcJBxrghoMqoMvZ7yHKG5CKi4k",
  "key20": "4W4WJeJCm67GedVRL8Yn3rMnixjYcDsx944WomS78G2VSvsNetHWmFRkSYyH4NJSQGPSp7W2jdj4p2BAKY1pcbCo",
  "key21": "3CNpR16G4ujUf9gQkDg8G196JaEdtjJKKnKWLextck89a2QPvYdnD1y2hp4zzzd83fUTv7ay8wWfr3u53b3eddcp",
  "key22": "2BxKU1e9bEctDZEP3XjmkFDBGPysicqDudBB7A92LWgcw9aCNg4CraWeHGqsqZ4y2SzY6ar8UXLkNj8eXvF38wtp",
  "key23": "2ak6UqiyHGdM2hvDN43qCJLaqwHNXk5k1CH7e7E24GhcWdMybMTyH4fyWCqrJMNfAFJX3bHnwZsfGqunDzA4853j",
  "key24": "gVYvZ5i1V8h1aFHwi2tBkRrPnEyyPucUhQBjkFwaN9HwrigkU377ayhJXpX5HQeF3RGrF1YXiaC4eHPzePcJeZi",
  "key25": "5XcN4cn8JujMTfdaXV9MtvPoFqin2mvYVR8tiDR8bzHu4d4MzVU2ddLwej6XYQ4JFXAfx5GPtfLU2C8YKjfUHwjK",
  "key26": "62ZKyiTSpdqZcqEcY9fqVzJGCpym9msg89YhVve8W8tx44BZwe9Hw6a2jGjEX31ms9DBanZciTNRRMPGsompdVT3",
  "key27": "29a23eYDBM9TSpM23yLwRSSx1iCvD9qx3RUTgAc216uvP3u8Coy7igEibzSxUMVeV2Zv4P7LXvfaKsAoLcLn8TQG",
  "key28": "559BRVCa5w97A74mjVSHPMQgDtMhjXW2wS4Sf7vTCpKntpzL5w1MVBcYT3yjPgAAjZnd7hWkHbfCPQHwHgHoay1Q",
  "key29": "5MwXeaG3Kcmw947whDh2GBLahmzdfVdm6nFJ4h5H4fFXXcnj7ZXKz1AFSKdJ5ehqeAKPpEg3aqLy6qqcyGQgFyJb"
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
