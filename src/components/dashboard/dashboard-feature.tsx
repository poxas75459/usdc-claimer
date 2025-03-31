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
    "5j7FgWEe5pwQdnvJ6B9hgbUgpfDtXA1btDYxSuq9udhJKSqG3igLsejbB9ZCmHhqTASUw7AuBLCy8msuSUHUnRfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8t3xpwKw8ZN2Gu6FFvGa8DeFtCV9FmV73MYNJCWGaZ5rE8M7TV36Co1Dy74L2u1LuL6GovioFEHAagjPzzjqZb8",
  "key1": "uy5HswNgcmyRCfeTE3WVsqABi2NVaKKqLaCGSCjhZH62DzRXTbDnqGGZ7M9teMMpJnxrpcuHFidsbw2ejiNad4c",
  "key2": "3YZtBztRjrdQn3Wj3sCW1ur2DD7M2K73B8RufcfFvGHWwLU7RuAfRxS2xLT6HtkssNpXybo9X8GQfoAFoECweJNL",
  "key3": "2ovMrmgwgq7jdSL9B3jvt3kjURuxgDhmY4aZMrUEEjzcF1inDFZnsoK1rZxipTDLJ1RDDs2huL4S6R4CLNiakacN",
  "key4": "24EuA8fhGJAdBV1vj4DdPuU5FvyjrhsFGmHJdiA7wykdSNNsTtMLXRASsUfzmEMT3eKW1KadcQtzB2fVpKxKpS4F",
  "key5": "27p2KTpvjgGCZvCdgjCWDgfLtffvjTTCFLRtEdRYeGqwdyfZqspwdEzecqbhWHmDaBexYkw4avmfkV3c1mhf3Vx4",
  "key6": "5h3tYc1ox3JwEcRhqGKJVAZBYAMGHLZSAvK1Mi1C3JDQaCvbXJLwwcyGHgeR2xBAs9UX5nZ8VX3YSFiqpDrDjDNf",
  "key7": "3MNLj7TX2bsYGv2xjNRysrdB9socackgpny86zya4av4h7HCqHyfMN4ZLmaJLzBNfj96uSLzKkAFyYQaNjEC4fb4",
  "key8": "4yNH7Vy6wJMLRUEm9DxcJcpwptp5wgF3zuFLpT6vwFkVRB2Y38ExUwc4TsKz9WhzxyBkgqgqcr2MRc6xw2ubEgUW",
  "key9": "tRHLqYWJaW1hHyUfEhnKPZWm2Si6GXAuyDXoDbT3DEage3jBKC2J1ALHZAE31m61h4xf3uwejEqndvQc6YDm7UD",
  "key10": "4UQuVExWj17M11uMRK8Lvk8jcuNKwaP4UHVCCmPP1t2Rq9btBFeiBYRiWKU9wT2WtRwrjjh2XBmLspGVa7DfConW",
  "key11": "2S8UYRBpGym7pdLtAHp218MapUMNtuWCUXtAYcBBdKxxD5oebGmXZTQVhXtBgeLF78jobRrSocF6dABt4EQRH9rG",
  "key12": "3J6qoPgPxuz8c2itkTuk4xEqMBCKNkjL8LndmdLbigRptUEdkMwTPRGbUhTGH1m69J7uRBF7bpJPyRYLhscSJ8bx",
  "key13": "33wjwmwdmhbefu96SJUhhVRMSfiDogdwK7uTkNmvLULMaZZi8jD5hEN6LoeW1XR4kHAWSVxrrtq6LhAusuSGA2B4",
  "key14": "4ce8BZ68uroAS1nWkinczpk1dpuTSKmapVbsdkGVZJ18Q2riZZWxb7PVqtGaG1hTPDdk8Q5mUDZNpnbn7M3RPNnR",
  "key15": "5SF3ptSLFtNrTCbPSM9WtFgdjEAUHyje1Tvz51btPBJnNZ5TRQwnCQmnCcypN9ZTcy13TvbuH82NyBaD8ig3oh6g",
  "key16": "35KA6CofiJsqv27jLBoeVsX27nUk8BTpJcjr9JiM9jdQhQijjweHtdYKtzxywReM2r6vu3VPh6hwDPJytqYDZfC2",
  "key17": "56qmupAq7MLoBQqdqSmqf5ADts1qeU3MC5cQKWuPSxNUYXJ5TFPi6hmWSZRsGajzTYmtCnP2nkXNiR1W4UZ2mXjJ",
  "key18": "5v54tmu2srzvFWaHE1KTYYqfK1zmzsJEJUGr7bkYFTahtgjeR6uYpizGkMB8TrgVY8zDFTNBq5w9w7DDKvCuognY",
  "key19": "4ANcknJuQ6jrf9cQ363XPfwHaPpQJ8Y2yRFiPfehPhxz6o4owP6we9BxwLhomsf4W2P77sxiiPjSzYpQLPCdCxs2",
  "key20": "4fQnUVCZy4w4UHMEnXfupVWGEcGnJDzcrxgitMBAGW5Jo2UHMveKHp795Ss8zJ9k8gWt9GsyntzLGprzWTqGdaAy",
  "key21": "4N3RoNoqnH7fyP4wJxtmCi4237WjmKTCaCjZoUH93FeFerrtYePaWtgjCHXN4SoYmHQeW87quYpcfBxm2RiUoWVw",
  "key22": "n4VPnXNL2GZH1YuoLay8GWnoagB7HDbefLgsAy3oc7BXR997XhesY2yr5TdqgV8DAEHci1Fh536eeQj5D7uXyEH",
  "key23": "6Hb1JX6Q1P4td1oP5o25HjeNGeipQhJbPhF8gqD2Zu4WZQpjPmaDkgjRmMDPQa3b6LRZViE7vVSgNgFwBuzu9Zc",
  "key24": "64fkS2hrnMREKi8P5c9UWMaNCSUCQTaaR93so186wDjfdEEJ9ApVxNxXSHNmasqLJv3sdBCSDL7kYELzX87J5Suw",
  "key25": "htvcBQ8ornzUhZqJUzozjKno737gcTz3MFmFuZWRYgb7VHXgwDpJpUmwcngpuu9Amt1Pcu6MznAtDzH8LEbvsXk"
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
