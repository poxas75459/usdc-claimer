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
    "3V7rHSCs6afuUPbuTpXEbPm87SpcuWVQdb4VFGqQziDf1q1t5omtauGzYww4E6DmyNZkD37fCQCufXvuVhbCDFqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jsYvNkPYn8Vbd3qbsmcbJbWj62qP6YR5aHE7fBYrNVLGdqsEJ6Sv9g3R8hkTUpU9niyAWsGwdTWvFenoSy3yN2",
  "key1": "o4MahDGHaogrVyoATZnAo16mbvBxjPYNmFVFsigDenmuWTCV32THPLHpGTtGTGqUPEvAdpVztsE9nPfZtcvD9yo",
  "key2": "3QYAhFVGMaoR2ejnjGvVM6L8anr1itEdYort5yoqxt7BPepbxpMPh2gHwGhMsTzSFQVtBWw5GthpLZRqUqhMrGGk",
  "key3": "3MAgWph81Sx2AGFcyCsnyTZS1aRwuJ11beSoVupGodpKDFdiafx9vTmPwoaBQ35T6rZjQk35uc1BvbvVn9MFzES8",
  "key4": "2KkEUAaH7MuRea7XRaXPrtV5voLdbzckfAUTnBGvLXXRf4PYG6fMo7bdM6xJjuthT5U43BmQZMQk6bub6xuQe5kU",
  "key5": "3rzx9GQyJrd7t7dGG6ojY1xPT9nQZqgsyB8ryJ6xuECbX8tsS5tgy4cewt19mnwazwxNurRWCGrFugG9mfcNtQwr",
  "key6": "sMpDfbEaBt4QQUPtuTAquhmy7GDVjinfkQpFbF5gwNb1Jra8tBPAzMHK1EuQsdbRASuKpuYUBqoULPUHsa7ZG1p",
  "key7": "5Q7xwSfKCgymZ8ju7SEpFNGU6h82Tbnvp5GD9QhnDe6YZmrAwRj9ib3vytcCT6mLuyLQkm3PgrzxeHWYYbWXxvWQ",
  "key8": "4WwGUJ3dVo4ZBcHJY2j3datyJH2aKZ6XZbyPPjMkccjQAxQJG6yhBJnz1vsxNKMyiUF8TERJvDzkJDtzTfLwHswV",
  "key9": "3dfjcq7AtcNVUF78ZNLQQpH43j7MZJCoBoice4duHcFxceyxFcFyfEZe5KB4z9Nd8zbNEiSdsLHVt2KvmmAZJqSC",
  "key10": "3J2nmnqn1YeS97Cj1zpWLJyr8xMsFPUTWzGRwujcSqFwNinJg9XmgEKc9dBwZmZ6thC3xYb8WoNtJa2PjFaNvEfC",
  "key11": "2Mv9Py5vUzVXZx7WeDR9gSoD5W9QGddrp4KquEtVHZnhdd4dNaXt6M6vUQ2HHjRjjmFvYRiaL3XrJfmv32eGRvGp",
  "key12": "45vkS71EpMU9VuYAeWePnWd1nHnLPXCS7RbfWrxsahtchrjuC9uEtATHfM8qj2HCLTkg7tAX1SYw7jV5q1yinfze",
  "key13": "624EYY37EjXnQ976tgP4JoHikwJiLpGF5BzjDDcu8EPU2vVcU9W2v6YHGYjmQmKGtKaAFRZaVMbG2q1srhD2pK2A",
  "key14": "4akPiWqfVDPTmWVJTVtPSQbUr8T4FQVamRyyyR3pEmNXbSD6kiS26arnEcYMKUkjsW95yPJSwwzFPmWRqZqvhhnZ",
  "key15": "5CDjSkq3KkdLWN6ZMu7ncAxSq9Yh7fDBsQCZw5CGPewzBQ5Tn8fqUma1tmELdoUf7EEoksXL2PiZAnKiRSmYqkq5",
  "key16": "3i3V7xTbs2A8XHkMK1dNUWmv26qrgDF6me6b1yHy5UdgAbwC3PTLUuaf3YxqdEjS7me8V2PC2YGKRFzsPA5HPfWb",
  "key17": "27miyqzRvPaGZ33pimzgx2FcwU9Fzw1jozjkbw13KvxpfJrTZzYVJDJLLN6f27wjXWLv24o3S4yBEjwkUUS6hkCR",
  "key18": "GyqXx4yfQkgLC7WPChdBamcL34kABRDMduwCJ2f4Yxhev3o86FoQtuUFJjZLq1fegs64QaKirnenQwYuzmg6DNF",
  "key19": "2FpmzfiiZNmLahsteze1qUweNMdRRYQ2KoBGT1SS1yNVgivnsxaxmxo7jKXW5x5EKt9DQqaQfZWRaAqpFhNYyj64",
  "key20": "2JUQTz7jWkTsJJwGTZM9erqdWtKfoUd6Mjq7LLihoJaRMv34yQycst6zQEQQ92epF6M2oaBUbTKgKVFnrWB5RoFe",
  "key21": "2hTHTKQ1ACmY9ocHoF1ofHAvzABLWkygT6PwoMFWvQ1AwTBfHEFTaa45ySqr2HL2j7uqpsxghkPHpLT5cDT2Aufp",
  "key22": "4Qwq48H2EEHSxKrfHZQQMZDxzHWSxUXCdo883ArFdjim3rxhpF39BJk7TC53vjWcEkFkrpQp2PkcokU35kqSy5Gb",
  "key23": "2RuRMtBaHeJd5zGJkixSffhWSXyMqdZZUpg3ozZHSUvbdf4jXX5VtpufcQcYLMfAeiwYpiCtw4feEdSKfrkjJVGF",
  "key24": "2YnhSpbkdtpBMtEZ3rgDq86TF2sArWehoiYTRMLu83KdyZCmPKHT4nGiHSmXVtyDY7ALWTNYkm8X16BkdDhWvSo",
  "key25": "3SMFgswFxEcKV7XEveASumnaAoP2ZioFvuXRU5bQYEzsAhW8zfenq1hBwu8tgD6hvmq3SNJCh2wNRKkaToa5DyKg"
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
