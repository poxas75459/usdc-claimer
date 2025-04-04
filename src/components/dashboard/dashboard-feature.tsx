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
    "3vrut73FBc7UKxis14PLLHuZB9gDTxprc7JNLLzEXgFsaA7yWfnDNYUA7J2N3HqwBVMALy8iGtBJi4xuxhZi7YaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxDSrqRFb1sCh1gcAvNPTPwUN3Q4ZGCmhZR8MPh3dUg7NgXyhdrSLMVAJsHP1ZRbzRmf7baMo6m4gCtV5v68Z15",
  "key1": "3CjumuYryEyDncxKx2hsqdMyFNKtLhZ13D4ZnvtGq3Y9MXJ24JnbxYY5AcezScpRgHPenoswCZwFVYzH5EyimpaA",
  "key2": "kfzvx41B3Xahuq2xBdnghuMTrHJnrowhP7AbqF3VqDhaeLxxk7ADfWiPmHhFhQ6YVtDsM86ac4tZ7bEKT3BK8YZ",
  "key3": "2ub8BHpz8yiB6BJtPkRtub4ZQR6QsVn7s8ZdMyu2fYr4j1WxbPSuhQDQ7kj48apAPtiSsgyV8zdmdNsnUg3fe8au",
  "key4": "4vLVpmxPTBaHkjgEmiPBrw1pqj9SWkiZ9vebbmTb4QrRw2yU54Tj27smWqxZe3AskFgTSzyw79mEoEoa8GxSLGYF",
  "key5": "5YXP8tN1bVLRKRiaZHjbmj3EXWxkcHh2wNn5SzD9TadUozyWef7q51BRxi3Q5cfmkxxE85VtvauSaywoyM15WFNL",
  "key6": "3QPkyccXJZZnRdV2xwpA4ZycwTa9L28Cq3FJynn1Sf6XJP2uunoCV293PHPHUcvNdQxQb43e5EywJ2ZN8tk61hQB",
  "key7": "3xCwEBUrqfuxt3JFGXaiF1gKVKaCyMTrxwVuuK59L9sxeori88xfNSBytYmqeUmYTv7SjeZNnvcgSzJVfyvitDHF",
  "key8": "2R6y7qJhhsdEjWwAu7sHSYFvyeoj9qkMwRimK2CS2nXyZJZ7uYbs5EjZ1WroURcfv6sQ1rKK13Ev7wNdfd2Kvw6o",
  "key9": "57Jibcn9Sa2sbiteQQmFSitE9szpizauN21dDX9WowXnBRoVAHWSEpiJxsHEorfXbQTXeseXLgBrVaCw69ojp6xK",
  "key10": "5X4MzSxiXPLgM3hTveypxoaB5S821vNH1BKqtuDMnug8ZZugRenzVAbBTsiu1jBV4ynjPaEiL12byhRTzrtbhx8h",
  "key11": "51jF1aWHRb4BHAsbdtM9U7hWEMpkMtajhwbmZtGChiHcX3CtnJysj2ayK3rqj38atvJmrcLUvm4yKdhU6MMBjjJH",
  "key12": "3nfsLgKjNu8CcrkeYpQeuRbrrrteNDvoNQwQNA62QmnVFy6cU4DRjNxc6SzMHbAbwrP9ifptbSVRXKnzW8AyQ9G6",
  "key13": "52V8xYPsmFyVTbhSjhLZiWVzrEUjMyjb3sEaseihBmKQ3Qo3yWh2dE5utmMYDRULTzZoibBPvJnxhpxYo9maGptU",
  "key14": "4CY88g9a8RbXytsTWiydvFXiRaYHcPtSim5Niqpe85AbYvXCEQkJnKJLX6o8EaTcM76qPyKaRFboSULAJcA5fSk8",
  "key15": "5r65ZLBnBAMs5sgutahoTDZVt2QWP8Nn8mG5JeBYxLA59SERfb5brYToVMi19ZFCNmoDhvHYRPJwqZoKsKjVSVf7",
  "key16": "27pKzJDokJvWfwVGXhn1i8mZcqAF91CfYcv6NZbJMJod6L5AuCM7axWMY9wbE5HhJLMwhPZeAdot1MZB4FSQ5Wnr",
  "key17": "5PqMx8qyinUYkB1sh8XVRDMJe7vUWjH2bFsoaj7LTMWMqZVYzLHvLwb1J9WTCt7KqvD6hRUMBehmA4Xf4TWvbo5a",
  "key18": "3Lchm3D2WfKwNC9SQN9zAUECraasBwJ8mQSmXoD5AYPf2PWLGnWri7e91GBft2xdZCiqDCLUc7wXGdnBf3mCy6of",
  "key19": "5ziz3NGdHbfCRpBCWRds1fbcScW4nENJxDNf7bUDcs65pHVEu48DWpGyodQJP6ArW5aig8X9ETnkCM9eRfRqftAK",
  "key20": "4TqMz1kKJnk8WNySpmmmUSNN6p8PSEEpYVpTmodKw1r4R5fKXcC8hDJgAdMu6tBJE7ho8H3RSqnqfsphoKYKasej",
  "key21": "5zmtfHMEPepeQoUjtU2LvevKaQGJ2nCDginKseciZQB89SA7TYE8SYEZqnrWHZNxvYxGysHw8iWnKs9LVgEnMmYW",
  "key22": "2Nr5u9iJc1H3b7n3KdybDo6cvcZeS1qGdBFffQAgZ4GAACbhyExwMYrJjrrjzWVmh5JooKfoiYJdrwLoN4bgkEUS",
  "key23": "4yoNVdHzDDU8mXoSwwnu8MNnCJ16yz3TvsNhQRwxN8yACMYqFgzn6dLT9YZJJYRFbgMu4d33BMsktnBdANoz5TSo",
  "key24": "5sUz2YQBVxTWBsPVaaaNvGK9ry1nxF5TASCiDptQ5EE7SDtx6hmhuH29RyVpEN51nNJeW4ixom39GWnB7LPu2edB"
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
