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
    "5Qb2fV3Xuc8QAHBVi95JbXv9GmYCWfmQk4AvMEMRFSrqDzRVJhG7hZTmwxnyDG8SwqdDwzbJ5svkkiE6yDeXqKvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mijNTP5zYBnhvpJrQuh8DRE3TCa993pv96U2fLXwA5sY24AWdyKpPM3JDa1WMDymPWKfVy9pzYvqXUakDoGd7p9",
  "key1": "3Cod3BQ5bEhNDEaD3MFro4iWgtarmAneNBVqGcHnXG9zQizXXGw6iov3pBGEmgZnY8PGjX7LVLhPg267QALxWTMe",
  "key2": "5fua7rG8QZnrcQuYXBsR196u4gWim9gUQWKg8r8g6ZKFQani97zaKTuesRA1nLRennPkZ7iL6jVgYM2CFZ3qKEtr",
  "key3": "2eCHMEq9QXv8sNXuynxgMCzPHWuzGh9ioetMQA7LCeu2ypJ7hRwHb9Y5aP1P7Tdhr1TehiNXLXBnaNmyvEJJ82Xx",
  "key4": "pmxhbUDczW2ynCZwSjhQVajgKuMkLgWhr1j98pJcUBgLqwEP7YN7h9ApEuemdRACnEuTGizgoaL4tkXuZEbDvYW",
  "key5": "5NbxgycHnnX8BKxjxjE4VVhccZ6UpLh9F9xCRnpLeC6zeiKZaTUeb3UW8FJebUcv5aZ2BfryX4THXdHB7ewBBBmU",
  "key6": "5yNPzY12aM7fVnRMxqvtkjPL2uqzoPShM8Jtwdo8o8StQHYVWACUPn84n2fPBQHLgWoGs83avy9ChuTRAA9xjveh",
  "key7": "4gA4aTTgnwj8WX7Z6CggaPGCY2C3iBCbkCXouY62MAY8VwzoFm9MEXjopphL36PHwZ4CwiUeARWsA9a3sJEmRTSh",
  "key8": "4EWFn4SFUTcEBPmZYhmGDXuRKbdzWczYRvspMGFPzBiYGhQhS9iNn5xEmMf5YyjALwF4YdQzYZ92KBheFAk7VdBB",
  "key9": "2d4U5AwiXjMceZwicZxwLWgz254cECkejkT7adXUzKjaiJuZ5u8zz99x9owweiFJU53xYu4GQdd3GGHdQoCQxq1k",
  "key10": "fNHBwzRfU9faEukbpf4Kcm3HZ14Qkn8D8F4r8thES7XGswmi9Kg1pYYk6NgbjUjbGCKp66icvq36ewjSPwrj3An",
  "key11": "278kEJ6UFjz4FPMzEGTKFkvbpLpC34TJ3qxfmNoL98ggKaavEgTEUZxCViKK9zbCWoiof8m1hihqx3q9QXL8UhQi",
  "key12": "2PMDGFA5VLnXrC9GL8SuSsBb3Sz7rphnN3ZJCGeLT85qzkNBeBA5VjQ3aCW3We7LakiavMhZQuRrVv46pZoPCimE",
  "key13": "3QDLF5uSzt2uc7kJP6pro2RBsQ6aneSPzu9jKCJ4Hx7fxSte2AGSKu8hKj5vSUNFaUeZXtAB1jw3SBdxCWnAxxJk",
  "key14": "4HvhpDRVkY6Z8DtqcHM6FyaREzf6jQBqjCrr1qnAMkRyF7CXw2H1yuuKrX9zcp84FkKLmQZDhVsyuR76TiNVU4dr",
  "key15": "3RXsqXGrjyaKbY2zJmLiRGAym4epBEsCUxHGcCqUgf1UCkomu5a2DvxpQtTQjzc8etttviYZskCCcYN7tA4xKa6B",
  "key16": "26D3h2VKwYkhmSvcb33fdWjNekJ2c2QygNwwbtF3qA3SmaTgbSZW3cK6Hc75uUokqjawhLZ4tb91vksPoN5a4XjZ",
  "key17": "4kXxqSdt4QL1MDt6pUfvbTpFpkCPkzUoRUrUxM1HdZVBVhvJW5P3YpSrKxD2NAY1yxFy2m7vnJenax9dtov4FpzQ",
  "key18": "9H6mfFydEzHih2eV1qZ97FK8cH9v7KfYRbRBV6SSecpEvxiK2QnBncqhKneuYAbv5MdBNVgLrfE2Rpd1yimbhuf",
  "key19": "2jzacPEJtZ3AjNj3RtsnyWSwwX5AXee3FpmuUMwnARZrsKrFrDLP64jwVALs5whocaZbvaEVaqMM2iygyxjkEMZn",
  "key20": "338mzeShW2Qn3CgXvyUrKHLiUKFqaHCKtM2fmpTsnyuaV14DRx4xNLLfkpwvWDpmAD1xbH6PyT5hWQxDAnmUXJLy",
  "key21": "2Hgm58ZR8g7suPvp2vjpuqc57zC1rAJyj4eWQwto7q7b7Xes4Z8mSDRmzMp3dSmPvN7NwYkJrh37ooH9wHHCtHC",
  "key22": "HaHSW4PzuKCu9ZmwGKXx7bHBa274gpuFtssi74z5TQ6sfUyC3SDaVdafhmgvVTggNrons2kXZhWUFp7ZBiYmoYV",
  "key23": "4v1QqvwpygPw4PAecNFAM4hrgHFhG7oU9RWZPDgUXbULZKSKmgyRE3v5yTxRSMX5NimQSrDBaFsoB1w96bSbZL6p",
  "key24": "2CFTqLc8NjTRr1W3PRVRDpNj41XozSV8fxRZ96navJYUt6TzimZCsTXLqndmWDxmLMQQueHchpwky11nkEaBrjTA",
  "key25": "3B67rvQnkdjuDJtDoc9XKNfSzD1UeVmiu5FkzQoH5iWat77zputMQRswiMxb9ZjXnH1qXzgNMKuBYmSPtuLwJ2w",
  "key26": "2shQpJCbPmrFdJWaRZFdrTj3qnhL7hhkMRT63fvGKVuq42btRi6aR4piBXy4NsuacmdMiqYJ54WJ6g7g75b6vFrr",
  "key27": "51g9FoNsRTXpXmkjnVxMfcCZsjZXMGcD9cj6GBiq9RLDyVXtSvA6JRooi7vbM8cAhKLvjZ4k6ZLZd1a53NW3MKxe",
  "key28": "3Z3rV6qwt3Ta8aGj13fpGSaBuTFJTBM9jBgBuZ36xHGJTjAayeZkUX6wBtQaxtdnQHhCcx6ok2QoxD3HzN6TXsKM",
  "key29": "3g4NyAUr7sHVQD9X1GSL4hJZHwJ7k8dM5SSRQspQwF7Me4kb4t76dkQdAqWdwv99MKnDVyu75NEYsUWoQDrQJDKY",
  "key30": "26q991MHrcuDvMSruLxkHyPfizw9J7nskzMj78x9xR82PkwfMUBrHHTFhMv8ponyRGLGVrjAkcY7v7UfU7XyNCEh",
  "key31": "3e5rx8LrtkgDBdRitGtKPvjez28icVcp74hEhtuUYF7y22SUA3SEa1MCCW1ZahS636ipoCEwCA7YgrjV1tJ87mZS",
  "key32": "2bJyqMPVdEdy8aZM1dz9QqZjCzttxmGs2AzUoS42ByjD8ZZQtvSjPmGBnxFG2uAzwRfmdoBC3jS79any5wLARD49",
  "key33": "4dx7gUUD5U2C4QMrgCfhsbwwRVhdCu9CeTG3tVQmbkWovTXuyUTwMzGMAZycwf8QxnxvxqRdHpntY4NdjzjqaC3H",
  "key34": "FK4GuREoQuFE4Peujh3V6jY7mfbFohYknfLaoKzrcZC8WQ9nsLjK8iFnZeAETngW3oXEUSVHiHGFxTyWAbM6dvk",
  "key35": "5fXspkJnsHQtHafyAfYPH4JE739cmjeATmPiE2ujt8yhVRo2w7cWC2aQbvWdUSGtNqHvyjh97FVXu884Y2TUpE2h",
  "key36": "f1h4WLmw1XEUd4WPc7tjsFm1h3rg4FgXzniAR3fPHq9e1iD3S3mB4yUEhTfo8Zg2Yz6ZZpDPrLGhcz8anEdKNcg",
  "key37": "4C6eAAnFgSdULmb7qV3qD769e7sDFu3qiQTHnbxZVCUkZJCuokf3VH3HUkR3bkioKvy6E2pa65m1nBBdYg1F1uYi",
  "key38": "37ogce3p9MeE4KfG3nspEKpVVqR7qjzxZ2S4ou1y6Gh6UawjeLYexf4SguDhCRBzTdGfedU2tVG5eUFYuTcK336e",
  "key39": "2NV22zrvYYmgw68udqvSd9s7AGCia83UfPKadtePRompRg8EPTQtbCSYdhWSB97V9NvfL8RrMawoktgbYT58aHHL"
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
