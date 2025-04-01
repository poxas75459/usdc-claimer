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
    "5VSV33Vg2T2o7atwy7EDJfgt8AfQjrfewTeeVi5MgjXntVpckfzbKsitcgTAdD9mEQ8mgtGiDEnWnjHpZey7bpQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpFVQPfvdqQsCwpEw69BC3AC44xCKkuWu2spsqjwT6wntLnjsbqTQQXfbYpVPcKxn3tikQbCwgMZQ3WdnDwh6F1",
  "key1": "4CCrbj3jJBZXdjYCuC28JRu1MCqoBhZ4EnHbP6o2zcCqnLbfM8Fc1sLPMb93w9DZcDzD5T5cC1ZuBv3egexXuCSi",
  "key2": "3spr3ANPbH5h41NmtYtQFj33kjNdhYRy2PYS9qjP81UHDuq2XVPNuzqJWvNceM7GbYyiW9fkXdikRnUutBtuSaZf",
  "key3": "4y3Qg4geBhB7Pbd2iP7U8qE2U9ps4VkD1ec7wih2pTRmxjSBp88sfnDCP926w7CSHC5h13qTmE1hQBiZ3UvNjv89",
  "key4": "fByDVeZ7T7MmRfs7NQxxdYrXFSFnkFkDoSFx6dcTFqCoqWsUFAfcf25Jo8NhRCwgbJxWDBJPrTc8nggtgfWTXnW",
  "key5": "3hJS12a7g3SeJJzsMYbkesejBxaBQK1s61Pa27NC9VNfUQTwSHeBsbLfyCZsdkf1EEJ8TJn4CrEF1GT5pNRRizao",
  "key6": "TAzPrcGVY2DqMc1s1fdiBEwCqi11Vao3B9jEHq7z2Bo9Ji4pnZZaCkhPYSw5HJUsXZYc2yKhJybDcufCKs3pHaF",
  "key7": "2qV6W2dWXsmWbADQCTUsLs6eN4kp9KtvW2qafrKLk8rSEYJgEv4xPYNDMpogbr9HiBqrDRUXWhZi46s2rQLzhE5T",
  "key8": "3dLP8Mun5QLQecWN1dcjZzm5Y9xbPhxC18qBbbT6V1TYXj9E73PEXADJn9McUKLyKPcDTKUYKHECKDZWkfRVsSJN",
  "key9": "baQSz9cVxq9rBzjo7Wb2Gj8Xy4wY6HAuf3y3XdMNSXZWPGqCYrD7HQWqLEysgvgPr54pp4qJLox5vXrJijFiLg2",
  "key10": "3df7J4Kwe2hZ8bTW4x9n8KsbdKs3MxZsmLB1nhRS4ZikK12BCJrPh61jw6V1fikpNqz8Wkhuu42KVBCMxry6k6jD",
  "key11": "3ANPdta59v2DehV5aDtVNuyhsstj373sXRE87jzAWf4Q8EE4xCEWEwh6WnYuEKDAzLBdc3HubVCK8ZxKgdZNVtta",
  "key12": "JKKH2Wogp6we6HdrrrLgxM9LLowjqKTozeminQdqYyLGU8qPyCYpA87hSJKvKs8TqtFunmEkX2vfEnSawCD53da",
  "key13": "cw252hqQurG3QbJc8pLda6rRxGrZNSmHAW67WzQo4NHg1uXSBEYyZTT1vsFthXSKqYiRCpUq4fNdfPFeRRab1bt",
  "key14": "62YSQmTwpQjpm6G3G1P88Uk6QhmMnuyJect5R2RyYhpxr8hJhY5qWicvYXQE1mGfDJYaqMCA6MbULkomtDxga1CL",
  "key15": "3xt6VpNEy5Kv3toysouzyNMdnZ55T4EmuKihEUjEKzgjqQHb5MFUiraKwCfdFSdC3wBq4fqNrm4foZx9XULwzMh5",
  "key16": "45H6F3GzxQ89EWVWFiiKgWB76hWgi1VCQ69T3H2xkz4txWeVohz1Bb1sWAeK8Xtg6Z6PE7NenyYTtBVypikHieNf",
  "key17": "3vMsRKKz21e6v6b2xt6u4rFjmRrhgYDCU1LQbsfkbfWFoN9NQQtY3wHR7xJQaEz3wx8waH5iYj8goTS8qugNPRzH",
  "key18": "4MmXF5c21UkN6AjsbKADuRs6mLUGndMHaxWvdFnR1oARxkHTqCz61Qtyvn7YTKr4QyeTaYDC3M7DEDidp1ZMDT28",
  "key19": "4BKDh85bWeFPCqNFFo61hs6NNWi1GzVb5nVjKvXfX9a4UtoXuhSJD3oKzN8fy3ryNpbBTjsJYf38WdoCxya8iWmd",
  "key20": "3AQFVHEMWDHUWcDdb4epcz2AyrygFHwYSKNoVPR88VFD81XuXN3qJtKGy8TLoJaKC9U9pVqATFUXpqdJEVmhFVFz",
  "key21": "3KUeThYBQ84LFpzmYFi22zavfjrv9u52huDFzLEXycSDVENepDRvV6AEFASpv2JVUcbSB6q966Q7eNHDdwjcphym",
  "key22": "2YrmHfRam1pWFMn4EZVNsdfUT258MvDbBieTroAjK7k5wLnoViEohLJNRMsZFmKtyGEBKatsMZV4tHmQwDADMijU",
  "key23": "gfPxeKzikmKJdGwVcsFpVc26hXrKzSBTtm2L2Ktouf4BVsTtGYRemzHQVR46uqMEo3qKnwrBrRSQb7uLm8rGmSo",
  "key24": "34P76JEPBpunN2zK2efTyQcqj6GEDmucjmE8JaUryNAsPVesC462XXSAP3ikrYjCntvhSpLYCmaLhgqEuhfQFVQ6",
  "key25": "5DUFvwBGmgTuUjfpGdBriXiAVfpgcaQ36TBtrbekkmC12c6Wsx8JNg42Y61KBtXXt6qpLnsKJF8gLwXra2Hvki6S",
  "key26": "5bNGH1Dd834d8HaQbqtWUQDuVmrPPoWXiZMM9dA1jbr8mfhpUEUyvRoAL7bPYZJY8snuoj65ewcoajWGMBYn6jTn",
  "key27": "3ZjcByAx5c8BtduKZf4D9eB6JoEEPw4PLgve2VvPGLNMTsx8ACS9dgY6NCbpZP1VPJrEoYoc9rKwwkKs5yp9Laux",
  "key28": "25Jxjuxnrzx7anzVtCCh52mTujbL1rWX3qhNN9Jh2cJeZaWbATPCSPHRaF9V4RKAkU6zu73wwn2Zk3eKnCkDgNbA",
  "key29": "5kRYtbLpcTweJBuk2UWgxUoTqLTWMMns42oBMfyscsRsyPhFw6MJfYr5ojbWVY9WHRFqTTr8HXy9vP3n4GJz8zBH",
  "key30": "N6DgyGgRpMAoYKrjpJgZycZ8yyCc1sniDSgtANm4rRhu9GDynawrfzZbL7swtPhTy34Su8kXz8JnhDypBYXPMqe",
  "key31": "4wVVyzGxdJvdptotc2VL7GXTZZWnZqGq5KVYws7Uz9D7fuF1drj2YxHrm9z8oWBivrGfTTbswHViEE3twQJiD8ms"
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
