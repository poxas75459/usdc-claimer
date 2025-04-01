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
    "CV4eVnUCPnBnUT7uThjRwChEw2pk9gKdaZJ8zbHweSZ3pxyZrzedBTWaVMRzRx5hBzYixs5RsWb8aUABz5tAzTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nXwrHr8qEEwmvjrgGWDBfJxyWLVq6QNTXfmZRVs1zUSxTZDfQ2XZqLiSewjtiH4ZuRmQhtj1sxAhy1nRPqFASLb",
  "key1": "4LGBETW3yZSNiv1obRAEoNeuxj5AG1RTqsW4ZBAk9U8ZVk2eWjJr4CG9dcgmg7B8iC5c32jTxr3jKgRgsXy5tLxM",
  "key2": "zi4FimQmdzXkrvPv2qDjorf2r3U9gorDRrMW3Cgru1qHKc4PN5UEZgRHhL1hRx7ZF5qZS1A1wVvPnBoBzizRL5v",
  "key3": "2eUBW9f5AKM7ywUgKme1sytDZGQxf3cfH4AY5S7wZizTUMw7BADCG5bcmawRgucYjMbVrVvkud9EjLJNXbx25CQA",
  "key4": "2WxD69vUGvtm6bVTmKH1LNNjvrFxy6povgot4LxCGBVLxdzLQvcM667JVo4FekfW8ZaoKTza4tZRH5g34Hs5aLRo",
  "key5": "2bZBwSfrLz9CZpQ84CPFLYr4MczMJHh4hiwWPCWdVekGhSUVuSn4N1AHS46KPqjrPuYhXKYvNuRi3YGV9WqLQAdp",
  "key6": "jttqRyjrs8GMpVnrcFXFuVBDi2KucmWpzgKJzUVqvCQj3riLxyzV6B1N2LVkYdSFEm11CT2c6ypU5Ju71T1fbzP",
  "key7": "2o5yuZC1B8R2zxTcWP6eREHz6PVzLNAK2aiS1dgBLhXD7a8EAcrYY4TgjdFK9YjvsuvRaNFpBvR6ASDWHjYPNaNW",
  "key8": "RDJgaKvjD2AQoYvfCofQ1YiP38ojT9npMorCiHdm2xSDktNDjcemak3C5srzaJTeTYrtaUdX4C4meaqb7LoRbix",
  "key9": "4WPtTxGJHVYK6NzneB3x7kJ7oN8fabWsgYzc7xHKRmQnNWe7MCbJUbskCiz9mgTkbfSsf3HQNBsA3GDS1PafF6D3",
  "key10": "5USrB7s7B6233zYwk7FXuT1PNZDZB5T2gChWNVugr7MA9Va5uFLv4HNJMCJn3YyvdkUkiYdpqo9ZQsiokhhHCdit",
  "key11": "21F14kKtsWusRaKqkTPxXXKjRfWKKpXH7PDccoTP8sdSAJhQvnvQADc1xqCNGwVUjdEqDXrpAV36TgLN78EwkWVf",
  "key12": "4951SQtX8bGBfE9fXKw7odBFr6oRvfuX4MebsPFjMyzLemU3vJk4PiFDhx39h7EKaJBazw7UAydzRMTtv1thoWD8",
  "key13": "4VS2ucD4bTy62sFBvJn1ZULbQTy3V33NyQjtuVxKLeTvsYrZGTEbhxL9HwhfpqYQC6Q2bGuTHukzydL2s3AnukZJ",
  "key14": "3YpAe5yFzc8FnZYoFG4NP45gSjevHYg1YW9DdcitFs8P82kUm7poYhJBTKqqzSJcR9n6kFcWdJ9dZXkFq2N2Kqou",
  "key15": "2o9za5gPjDW92LUeHPuCQt9MqYis9ZHD5dXiD1LPb974NdRjEkzhLgQyyaW2ChK7xuDakBEKmLBbaqFHedz8AkeV",
  "key16": "4TfWeuFiuf2t52pChM6Uz5R3kEpBbCeEvd884iFJ5rZUdpf2HhJsGuZ3wCoqmLFnSQ7ohTEZrv6rgDD5gTi9usc8",
  "key17": "2jV8AB8jdhJmfXLQHHdHaUJrVgii7eGdekmUDyAEDoxndk5kjwFiBUop7xMHKrbRsm2k7Hv3Wv1zhmttDLtreFeV",
  "key18": "35vN6gAXnBmQ6fMkJfE7r4m295FR4w7y5sEbwEsH2Qw3MywzXZJhWBjg7uBWsFdkd4DXeP8mQMKriHK96edGDaue",
  "key19": "Ny8vEEVYU9A1tHC2oVhoMk7zf9SS2gwRi4nEL2g6EUDXLu8ExmHY8TUXcb9aqETpoacaAarU9abLrtp75Esckwd",
  "key20": "2Fz7MSZACaVUR7B39AvymzwhqKZo71VtwX5rFXSgQ4txnJynK64nuYTtsBDo2po6zHPJXsXBUWEEgBgQcYEvkvBf",
  "key21": "3USfjqHHSCRu4d1MGRTApdgLcheLi9WKo4ASZhL6DbVfAwWAtgxDRUcFou9piUwQZBUZVgDfDYnAVkqmyDGhRnXq",
  "key22": "Xne9EA2XSkcJMpuV9tgkqt3qrvNpJCZCuV6Qck4RKgJYKPtXn2nkGvBziN3Mt532yMhRwwp86rWiQ9Gn5HAdtM3",
  "key23": "4d4sVeR55grnLZHLMgLyCWWKLcEnDUFxze79wWmAHEqhLzepXnxsWpzPuW5nmKZmW1iS3oF3i7RGvR2q3XCkGZ1u",
  "key24": "5TLVnP7bVUJd9b66tDmLviKPExPFfqwQWyrsMZAe5JM1vgQSmvpM2frukcYdTZhhYS8ihpGjU8c4yydP4KDqgEk6",
  "key25": "3R5FiL81PyhSwT42mvGJnwkSgX62zjvWi1JHyyitn5ESfkc5CuYFSNTYMh3whKkT3qyTijNSJYbyMf17f2EKZiJe",
  "key26": "5m6D4VEhGyceBdhvHzUKPmDzLvxmgQJFknNymUnLuhQADsii42tQ8qDFg6jQn8guRP21y6SdLbHDmK724FyYAvaV",
  "key27": "4VX7eWGSXMYYNcdWDKdC4A8N8beJ4QnGZu4DR4z1NWcrrY9nG2fg6BymS3sivMtjdAsdFUouaADrx8gpQUqFhzgs",
  "key28": "3qSa8X1DTbcQoVKMXDKCU75Y3DE6mgmwGd941Lsz8sjbSMRD4tKDGMgkQxDMyaPERUMArKbamX8dbersq5fUzLd6",
  "key29": "2i6p3hqwmcY5A4VwHb8jy3JQTQd9gf57ecssQPXiznhDPax6zXL3sL6PPPxyFf7BUH6mFsF64dwfXqNiDWozmNu9",
  "key30": "4PDTgQBszppGcWdyNfBS5Vv7iB7bd6Dxq3ircVTQm63B9ATihFfBcpHjQHN4xGQF3b5VXTHXjjuh27LeEHDdCvCE",
  "key31": "4NPxupvcBn4MCerLQ1wWXSJBhbLbHmBrDwSxE697BQpzisZRfjGcWS39roLUmAvJ5uKEyjWQgLQoMfkcMDSrsGWs",
  "key32": "h72C2QDmi6uq8ogpNKqaLYjAnMcCaa5w8EqE4MXuZPHw1hQCNJUUMJjUVQFmT5DX1VAVBKvxXffAELucP1L6DqJ"
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
