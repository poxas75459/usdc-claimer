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
    "3FokrqKv7j8mXsKEmGTcB4ZGdEKARCDJtnMAJ4TCsxZ6T32R9Pdqis6oR7swLYmxCnzEBrC1YmNmiUGXhMzCX3oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33omb9G8WgLvpr6fFo2XwuXNzgHYy7DKyzd8EQZB6EZxTMkTZkXz3FHHcZyXo6kYm7qtjHCdgEE1CqbVRPDAzZRR",
  "key1": "2kPxPEDLvGArgBLXjw8pcbSTAG87rCFnD16uhBMYjeKT87nhZ2LwEBWizn6HDMoxqWxcP3WmsTbkt1iei19eaBse",
  "key2": "3jZbQ2s6Zk8euouSFjxWUYVYdM6H9qyozS3i2LBa2QdujedFnNsYnD4cMTfnHjCJPScFQCPBfHt91bqJzzj9sBTr",
  "key3": "2CyReTpM9KgEp8odSLBZfmAwuAtTM4CMP1HnYcSa7k6MkDJtVm1bJcQ7gvB72pWXwmiR6MBFPHZvizRZUdVoofnq",
  "key4": "28cja2jwuddYg21CTenMUCDMAUtBUTGhviwwsdqiCnoGWjt6ZbLecE4NygU3fA2cderkVdWC5gdKefQDCXaR3UGX",
  "key5": "2mQ4knWipTQsaRbWCHuipE7ioBVLX8N5qbVDTmEXKb6iRrSWUpGJRzZmYwSE6tnZ7HkX6jg13FHznjDpkttzgRgu",
  "key6": "JFhW3bBUNCFTRAyQv9QMoFhgkbw7dUcVQHChtwYBun1BR3D6H95XWVQSgqQz4keuqgBoFuneJ98NbeG4g3wxczN",
  "key7": "2kZjj4Di3nYV1xZvvunnKqNUEqDhvhcvrznZS2aKdTe1exL99ELXfGPxVPWmotbHEYrT1Sb3MfcHYcrkzE7YSVhZ",
  "key8": "3M5HJh4RRUrV6hUJ6sXsWjP8djmbztyaVKfvJ9pATPNFdtAFuyDshCysQb2j7sesvT6YWvJ4N183u89KEaF5EprF",
  "key9": "3b14dandvgRMDiEminyf8m5gi3eqnXVZUhNrShSmucAPdf42Y8rToCZF6abZLXjVWz36Ab55yFtP2kYVWvtQwTy",
  "key10": "3q4mA7dZFhVGWxfq58zojZcQzDC2HauiTCZ2rd4npbwbYQFiUMBnRMZxSQHXNUho9xj4RzJanLBhug2WSJ7Wx9gc",
  "key11": "5jxgb6xF3ai2TECizPwS6aczwj6nYoRNpd1eK1UygigVXa2wGhU47ovkBmNHGNnMiCUptBM4gSKpcYQe315qvzvH",
  "key12": "aRrSQHM3Gu2ThecpsAN9JpBEeA8HLwJLLFdJDcYCpGyhY6jgand55aEcrKyVNTojLFq8vKDeKKvPbrerjut6dW9",
  "key13": "2UtoDTL8Ehm7k3oENyNBkm9bqjfc3PTGbwHjr7A87dqpGq4zCRgyURVExeVLoa6L9XWLsmYvBiSpyQbPB5U75rq8",
  "key14": "4Wa1hbpNABi74y8d77jPSJPNBbvuPLD7Gekt3ZTPB3efX3RvggtCj2PVfMHWytFHpTe2zLV7b8Vx2WJqQecXZNUt",
  "key15": "5APNZxuwxsLrjRxZmyy1UK8z57VSVBs6c6qmrAtshQxsofAbXy76fZ7c1TKMvtbmfn6SBCjsNhC7RZz1XW26EGwA",
  "key16": "67oiNqszgHxD4KKq6yGPF7KEetftgqXb9zGoYRJ6AHRZteMg6jfAmuE7VYvEeK3adyziSHndHuagLjR5WPhQ7Wcf",
  "key17": "GxidPDJDzvGyBShoDUWrapQ2x482z6Pgp2LqzznfLbXE4EukM4ZJeTi25hSsnRFDhfxzXpnQvkSRotesqMeDt29",
  "key18": "2ixKn1kHgwY43i5Zv6xwtoFjX26QssVkftWuVCwd1kyDUh8332DYE5DPjiWSQBSKTpZr66W9L8ekvgEzurPckWrw",
  "key19": "54MJawtso54rBrcuVSsqbQFEy61cdKzf1Yto4Pyzasnzr9kdVnBmrSM9eSYJiFFH3KseeoPDu5XRiXZEXks7PLhw",
  "key20": "57vtDujtdyYCEH6rjL3Zg9mFdLGcYYDSaF5GKqTsfRFs6vfLA6HdCwDPVQdzDvCiaa7r3RQHjzasiLCWWXsKFLNm",
  "key21": "5i6rPMYSJwVdNSSbs1KRNFGWMjZQQuFJGaHXEiGSjhuKJNyaQZv2gvV8sDbtTtmJoM8xSp1pBS4WAq2ajaMBUQTm",
  "key22": "2YCHrfSH8UmeLWrG9TY8FPLRc9HAQyMgjHQSozqAYY5Tvx59Z3pNTWm3BvUU4GYsrJhbzBoZLzg2HF7vKYWjRxAb",
  "key23": "XbZMoUyepBBqMXSGsLoKhCX4YZJBBA6oaTv4sJBi69ECkgHEeWsY1Yw2djdrvS59N5HBuLhEQp6AfRTBmq4d4Pk",
  "key24": "5QJrDSc2GRLK8AizireQEgwu39SszWi94R1mAVC6rdqmAYgiciYJQrL8vDmyHgZsWZbREHb878bFgN5yoSuC9PTr",
  "key25": "wSHoDX17FmuwSnq6JTfrmSp8Ev4cRwDgCbV4jYtEfR5sPdbbtufpZwsePg7W6cyKRkWj7xDmestegH1Sn1yTcg7",
  "key26": "5ZAamKU3Pqns8TdXDHDXbUV4q1hjZh4pJf6D7XFjMTf9RPMKJcyRhmA2xFh3Z652KB7NZsmCMQoUy8JJTrXDU5qR",
  "key27": "J8e9hGLDmefHDHaAdhRVdEnGf2AhMwgb6H5n5CLb51EH8dcRyUssDr9thaXdVKY53EipC9ee2KVQQiFG2eH6s6k",
  "key28": "24GgrtE5Cvdz79mWGgNJnzBUz7TogmDaGDvfUC9GX2g8kzAcFUWeKfYDfRM3BfnRJ6ptp7o7iqqy7upxStv5VxyP",
  "key29": "5kRAUpxsx3vafeiqro7u2nQLFGiiX6mTUykV96nTJHj1qiQyKgpDtqEY1uVxzKxHxLgfbxEDFMA6UH44UyPc23Gg",
  "key30": "485mkCFKXtasfd3RUpLbfRM7Do5aEeja9nr87DreX3L9dJW4uFXwyAox46LzdQEjFVcYxcVPRs1DNMaCxDQ4k5e8",
  "key31": "adYLpEeNJf9m8xg1Rt3oxYiEXDdjd9b5nF5RQVjr6ZWwX8bvBhPGUgyaF9u64M6j27CBkUv2uaNZWVuHhQPwXKr",
  "key32": "ca9zsBKJ8fdBWE96rZkZub8tkcKHJHaFJhhxfJ4xfZsauNLWbNJA5dYok4kFs1sHAvG58378iGz3HS9aTCEVmqM",
  "key33": "5Lgzvr77peBpdGdYdqoeW5VabFA36deeD8HDKd1xwx2h2Na3m1tSzNHka2pryR9Byy1xbQoK4ZaU54GjtQs4PY2s",
  "key34": "4s5Ezqaw6iz2aXgFXsW4TpWxFKxGVDTRkxopDr4nmnYdC2Em53WbjDMmcT4mPt6izoG6vv2Si3B1fUCJtS7tZ4L9",
  "key35": "4wzHyozhKg45vJLmpurj4nKw4KN9KK5SerpgENL3s71QNJyMhngBw8Ky1xFp7qLNb3iBnW3yc4dobq84M7RxMDNX",
  "key36": "3ojQSPVRmDXr72ZAfxUsT4DLJgeQsNTyN6h2ekej4Vtw38pHD8wUwd5CtyQTqsE5CA6TM2BNqmWFeM8eUkgLFUdS",
  "key37": "2QTHNgxH8LqVyyjbuGEByVJMuXySGEc9G9VziVAvQ73TMsEfoyq8M6mH3w7ALriDDdAkCVrkL79aK9zMmb4cM9G1",
  "key38": "3KNC5MhB3qFWCSdm2gR4r5aiANPfPJpMYPv3rDQiEv52tkBugUzngq1ZBHPRvJdoTGAegPs5CW93w99AyiJi9TTA",
  "key39": "2oEVwg7uVLiuffUV8Lyax52ZMxawi2gTv8t6hhf1rAFtJ124zVXoxms6kcP14p8bT3rVvPQFATmQSNqutodJY1C5"
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
