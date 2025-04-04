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
    "FWcQKLnYQm1bJuK6m1hz9WSce4xdTbwDbn3jBYtwXogot4jEUhJNVPAHwX9jaUvAKTEVX3hAKaigQ38CWZCsWQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597kk9tvb4hpcWfLQ1k3kCEqj7kyfiGAcZfym4CpRrVpPDUMkEZVNULmg5W5gMmEvKxjuPAetUd24efgzSgdXcsu",
  "key1": "PHaNZom5nrQFsf7ZibCJThPWtRxiuuyQnVpw6A6i9wME2RGdVxR7nvjyWHD1m9L1WZC2oBKDToanRBuTc1pw9Sm",
  "key2": "3uL8gXLjqL1Kwz3vzqjHAptPKZvuQv7Bxkub9XFGME2snPtGskyLXTGWJ84pTBHp7oWPaNNbtsMVBurHzeqt8TU3",
  "key3": "iCNnZGCfjpuQsA4NQPTorkxrwfTVrjqfbWBgM2qq7XFHA4xFTz2j4N8ZM52omwijQTr4JpgDCb7RL5T9qUkKAvg",
  "key4": "2UBLSXgLj3m4RfTKzJPLgzpbHgAdfeVJzrry2r5KeXzcTyBqHm2KDJFnG5sBtkUM3Wn4zCzUf1YwfbE8ENRd788B",
  "key5": "63f9xteZFYtbxoiHjK8JPpgBVLU7z3imSeiBWtufGSP23r1hgPXfLk8WoA34By5mgEfA1kiS6xvYSHzceVFtTcui",
  "key6": "2onPNusMTzN6tXqPtJpJR3vAUZ5T36VPmmuSkrrc5TrQ3FdUccv8HikpZPJLCEwv1TBSG28dKHyBCoX2CSqDpQrG",
  "key7": "3FDje8fFgpU9UMjS1jvdNieEd6jXPnCR2dSuBGxJdKhwBA5CUpb4MKgjuRwnrndYJ4rsdivG4GhiSx8SVz7Ge6xF",
  "key8": "aU8Nkvg99xHHCpobpagtz8k6kXsPMBNZfrwvG63w8iAmKAcuZd3Ycd5fxbGsXbNT8fG8TTq39bw9drubYqMBa28",
  "key9": "55KnFYgNq9nxe87PC7rYBorNfQcNkTWoC6XXnXJ6djqWV8xUrv5LPPgndzenj4Ep7qBg399m5LsWrTVKDFn2sg2v",
  "key10": "44UwUZcQKSgGuUArTLWzBe3DcyKW6pgqCCcXrUaQVXjn4zm2ekba2jCFkzR5r1PvCFVnaV8kR3RhH91GXCAisU71",
  "key11": "5SESZpHfNng2LtSd9v8XJkKDvgeSzcvfdheLoP2ZS4SPaXu6adisaVJ6hvH4twGbxb1XBYUdMZwXLJTB5CN7uavg",
  "key12": "4PbhhqKJqiY5oTEtVb6RY153jMiTf8EuWRyCjyyBeoYVpTzRzW9dFbkYd3nEx6G3gk2nfUE1c1qcrxC7g6pjFc7v",
  "key13": "xGQwYnkgTjDJoEmW5aXgCVMnrZ8VVA6CqxWQ9NNAXzQsAyzSBbJkLVtyaknrt62koy9oJYmxop7HETZmJjxk4Nk",
  "key14": "2dXSw1zZKxhtQKjBYzyDAJgN5YA7A5buNuG7ae13iY5dxpiY7uBXsJjDKWaLCMbCfKTHFyz1oYgZc6FQjVrNugGB",
  "key15": "2SWFU2eXfgdyrykVYancDCGnt82EzjaqiCvkxvQSfa5yVcGS8yRArx3YXSGHuBFqm5ter4314jfP1dx6Z8cw7GEt",
  "key16": "5SWRva3R8KW822ZvSQ19FejbWmFjjj9w5GvzsaXi8H4Ci76DL716HhczbJvQ6JCCEpEssvUjdgh359YyC9MGt5T8",
  "key17": "2nCR724PJSS7MmKLuXvXAhGeWxJAUj7X4asMeSdhJWiexNB6SkxhcDJqUGfhRbxaQ2myWViL35EnBnA9LYDAd1vR",
  "key18": "3ezryF44EawQxMCCdVSE6nrh2YJt8Lw4B2J6qtGgnPgdQB9C3ydg7XtR2PG8b4Tc8CQ2TauRTUsTsctqgZ2LpLGC",
  "key19": "m6d6nSnyznVQ3oNZe4Fu5tCujmHAinPQTThcEdNScQJSmtXmyCEscHqGkTeAZPbvNhr87oKQ9hRrfppQKdPsQfm",
  "key20": "2tUHHveW7VrSR4j6Ag2acq3yrH2Y2Wi2bwnaMH6SKaRCFYrwHviVvXovHUjj79J1sn4fpVTc4ZbJtZ81ERsVP84E",
  "key21": "FhCBCNe9urvqqJr4VB8D3U6xcHJQqfYNvfE6Pj3tjBMrcbaN8CSaXKEn86uhm2acD3AaKfhXhiRaJYh7V1wkNUX",
  "key22": "65MukjC2BUgD85DV8o1csZCzHjt5pDAzsuYJdFVfLQAvMcvBU7Pv3UQYgogzKY1CfF8gcitwAiJ7r5GXhuqj6Tev",
  "key23": "41QgYsb45dsmLEg3774WLQpVMuC19SpAAfgSaAfP2r7XMCPM6xDwRTqHHJ2EPMZXhScr9LM3CLYaE3kd7CcNDdDy",
  "key24": "4HJUqDqWgykzTaVkkup6qTYE7hdJ75ezANBDCEceEqgsJWQBVBa1vvyP2T1fWvpjpr2zUwKvWr1aGYujnhfrUrSd",
  "key25": "3sfeSoMwkD8aXFkdCaSbj4b8pcG4jBfoPmQKUwvvQpYT1GR7rUDcM6ARwjqD7mcoUCYozX3FePKFjL6zVXkFmDu4",
  "key26": "3jEF1aoeycVv8HgLDcXwgfxW1P4FssMjgRbbVauX5N3tpTf8FijykD9t9qDvT7QAC9mEsdCNN46cV9Ef5jRY4hi2",
  "key27": "4W1Kr1GJEP5Gk7JSq9XrJeGWxCNYEiyuDLgyeybiUuhwAKaYpMT7oNKgczXUpHwAyJYSwjuCnvfzvhu9bCEDndSr",
  "key28": "3cXJJRXBMptGgy4SMkYsC5f6TJx5tzzoEoY9ZG1ua6xcxRVGKsun4VW3tYZispkMWGaqhBUBSCbKqwhCU1yMppM2",
  "key29": "4Kq4gsgyQ4aiKpaXhGuBLodAHxr6hcHv83Dp1EwzGrKT46vmDQgEMQV5moez2piEJP3A4YU2w7WGMhFXqA9eRsYa",
  "key30": "4uK71oTX3bgjaCpGfygoQb7bkKJfDPKtcfXa8gWwFY3odN6CeguwZoXLAAP7Sa9aiU7xwjEQDLLHFqZLoUmQJPj8",
  "key31": "BmpcgBFW2KjMkVxQHiNyHNpgV9zp75Erq1mGBTaBFbBbdW6pFQ2YWgedNK1c3WV9VwiFwZLr7NBKoeYGsjSJjZf",
  "key32": "3yq3XK85cYTnNmrb2WhPD6VHjbdGpz3tGmA2KVozwxZUKsaTe1ZyXayBViVVfxuCCTbuuWUMGx5dMiA4nwxAAUTR",
  "key33": "Uh1UDgmFCosu1tZwnczjvhTHg4wrd45zcz9Qt4WBuikKPXAi1ASEmrZamtKgY9i7qWEj9gUsFBArCBgeC4zKSPP",
  "key34": "2jw9YnnY8vM1bzq5vFZaVsna4RpVechq7PrqKr2Uaqcz9Q1bUDVT2U5TXEr3mWLj64HpFPfFFC6CyZsnQvaNUfBN",
  "key35": "KcM433zx2SHrmMF1LYGRr9hcGCQ6m8DUhN4FRYf8FkcVbzFCU9Qeg9RLpSBjVhhU94wPn9H1zmZRBATmr1DyW9K",
  "key36": "5gfZ5dyJMkVbG6FsKeoKxgNNQWUPSGRX2Yots7ZFA9dyxsLNQdXTpr11X3nFFeFGsASK5WSStiuwH4nS9B8eJ9TB",
  "key37": "3kCycsc4w4CFXNKF1E3nQhoMhisJ9Dq6UA4vxaSfo1qRjFTn7SSjYLwAuceBGcWLXExP6SVUnssRyp3sbt7GtPnd",
  "key38": "2XbfvbW53SpKH8HG2Jr5i7Yo8f9AjZghHDYV5UxCd6XLQCW9zQqjQYACNUGWPufTsbyRXUSQ7ibCoD3d8DyXuQPn",
  "key39": "5LkvmKKphGTKXotDiQGPEmeAY68zL5d6qFGcLLe6oD7epgFMFwJoQknKh3W13wWRndoRTu5AMob1tjQVWkdtMXMn"
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
