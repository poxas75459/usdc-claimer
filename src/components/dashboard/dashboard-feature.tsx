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
    "2HFgbfnXMp21fbLu8RgVAnynbGjC4zUxPeTYtv2BxjnHKmYpXcHy3ZBD1vfyHPgpDMqMruqHcZ9z3envfn3qbXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zuks6uUcQ46g9bA3v9ni5KqmP5APAYbEEnWCNV5BGxjewf4MugEgr8kGbGfyk81eu6hMNRaVeqKpFwes9VE5xhU",
  "key1": "2b6XzPy4u6LHpuPZKamE9tGwkxn2op1hpJar6highiRsHrN8E6GAtDKgwjzke1AMojnm3NcdKG5FJPrq5EeBeqF8",
  "key2": "rBYkZg8aGYTg9sYpj5cz6d6jXivpD6iKEafk5D5T4o8m1R76FXmpWeVh2AnPv9YLdHPdnEpCtyNegoR3UkijYm9",
  "key3": "3EfpwVo3cMYBykFyqwAA3wAGUR5vhn5t7JBbhVwfifjnv8HjnKs9EyQr9K3d68xoEAWZS7fecE8P3P59UCJxEGnc",
  "key4": "3M9VUE3MnXbo5C8cBf4UhQCkm473vZzHANLZpdxoVLNeEXQbcSrD887R8oM71tiwB6aqNC8wCCb9hunroLvvcysB",
  "key5": "2ocVtCzW2Rboap7j25PfVQoGvP8qKytidABpaeAz9w6Smt6iq54m1XdW5ciHNXGYkxhQawBBqu4vtboVmVFjRPzh",
  "key6": "3BbYwvZzGbhZfijxMhmMF8PoURc4itD4XAdmzJJaNUwX5v2MDYiQurMgM8f8WF9LaEjwz9gkvMEBEA5uzqh1UCjo",
  "key7": "65xgHZywYY3PzLaXkym54dWygNz6jyiwpz5rwni7s3CkaMF26xXnJ3x4PFmWPc8kYfkEKmWo9a4i4ijrApF27Yf2",
  "key8": "FScCzUt2U6CCeCKhDmVa6sm3L91NKffawhapUPACDDtyzbAUaUjYBRJgxtFBnhTrEDYhmcrWQdHXDAfJWVv3Hto",
  "key9": "3dkoFWoGJ65FGDemT5Cq84mwKvonSEFxzLp4gTque5Ve6QFVLStYfYhm9ua84PhFdk8CD6k4MBSiXZfQhLoMrbUe",
  "key10": "2cKSvZ5YRiA4jedNeZpsFXTBKpoVnsF6uqhnpXL5vCU599ZmhXZ4KkdW3BeCoJ5CCSPJgFcGMye6HysRPkfsHFS",
  "key11": "4sMdAUYPWVq9YxYUKhayAoTErgkCcwaam4WQCZcRq8GhKXpXkMMfpUCZzptnhMrmbwzPV5RT7dFjkuBuF66WJvcd",
  "key12": "2qhwkHUz451gSyMLZ3JZiGgtgKWdbJ8gBKPz3SL2sxsmSnCtgTGFcn6rv4ApQYiPsRWtctstDcssks3cGjNkJxpg",
  "key13": "54MtXN7NW5WeyXoYBeQaACehrg43MYy7QU14Cq9aEZoSX93VLP8tZVF4cQdvFidkv6nKfrLaSqBBtCVyzM7yTT1t",
  "key14": "3GQJ8ja6Lc2N4FjbyZgTBQtAKjqFEdhMYDKZ97UgNgk3TQRYZBNYpWpdVb8hGhur6wDpZ5ayBgxnMsW8PUEGoPTe",
  "key15": "35f1Uj7JK1XqNqbJrvn24m7vDeGzBuTN6eT97gaPAcw1k1kDnxTkn5EkxCBYKHQfQE3kxXeh2WcAcN26xTS221Kb",
  "key16": "39PPo5UKMquR7NyXmZNX6i5zaQ4vKUYUGf6vF8X1Np4qfjiV1vS6E3B9JLQgK6jUdRidJ1V4SmHxf49maWRvmjtY",
  "key17": "5JPPbZKX81WLS8LfdYGYNn9NBtwgf4PyL4oPvYvaxtYjLyadChr5kihYcZ6uj3sj8rXDDVtcQy4BLqaPQWVAMzQ9",
  "key18": "1YWBu8AdavURtPbQEwLG5SsQUBLnuePECNujzAUfUFTpUPHFEB9cXxbPaBH8vj1j1gqhbU3Pc5tb4ypnmRpnJGc",
  "key19": "4bHEkJX1ycubUoNSFSUdtx6XBX9FSSX5a56E1U8g6Zt2KFbYwNKKRaxD7HZa5jbWGHWwSterFCcfnCxmtoQRWg3i",
  "key20": "4xmBW7ox5bM7uNx6cGLMKaxrFuMxRgPP4T4J4mBHiMmkC6pdMLZwdmTevJPV4s3E4y76gAKYyJWQfHDT1qZNw37L",
  "key21": "5g8acC4VsX3V5BjXJRGZcBUEXvqtHhSj3tq7wR4GRmXkMLV4WG8DKZFJQpvwZN716baqYuDFvkycM8MzonMZndnv",
  "key22": "2yQQvFQXdyu259nih93uqV4XgqKCasaY4sCkzXM4GnMcu4Cx1KCQDEUJVdoKvzSGVku73RXUbjuUZsFezxwrL4eB",
  "key23": "3Pzz2m2xdTpzCYkLrpGf9LB1VLo954ugpYGNCMnewHhQqpkC5J4fP7SHspL2KGjn2k3aPjjw3JaGiaSqWuJyeixH",
  "key24": "65NVB15ufcRhnDqNf4eKkbmDWDpsZUxLywLo9uyCEWziGjGZkPz9bSFSjZQWZLoq1QNrCjRYfMR85zZvx6ZKAxa4",
  "key25": "4XJPr8tujoEhk1ayPqa5R3BtRLwzqbvEpPJeeVU3BBPTKnc5FwMMxk5RxyRxTzQBq2tsgdsqpDvRGGy1AHkJZAZv",
  "key26": "5xZPaXWqv6LfbdVDFWKjinF7dZ7n6i1fevi5nRVPxsv1cVh2NVcyHyEVWb25U3yPJFezeemZcBFLzgfBucvcLJAJ",
  "key27": "5QmvBPZsmLZpPZSBs7s5CknhE3a7diaeR7MneDt2bQWcobfxS3tFcfMKtJhrivAM2VSWsNUNLc9pC3y9mYR95DA2",
  "key28": "w9LkR1WVPg72ZrpN2Kdjby6wuxfCZvrvpbXiru2vF2gxU2LabCWJ2zzSr9xYd478Sasu4k12TdjKMeavsLe9AeX",
  "key29": "u3hUoKAyyedpfgNn3tApuFaiMwfziWYjtd6HyexKaF5v7bWy2tQ7qntVGLEyeynUS8DyHHEj4jawNKH6MgEbNtV",
  "key30": "3fwfSQPtBJ7GDMmtQpB11CsUiBobhXwJbxYQvFZ7v94NYH1jZ4rBu9PDwWscN59Z8Yp7fq7cASirgj9aYYKZ6Xvm",
  "key31": "47JXMQ1oRHmDWWSLB6zJAbFCRR3KqKwkAL9dG6jQJvtTReBxfozY2JzhobkHu6AvBvordgZNUfihZP3VxnyeJM4c",
  "key32": "d6mGbG9TV6x7QNfeutnfBqki7YZYKS4QfzSzmvHN6zko2NBAyBDuXquhxqRp1bL6cZbAMpih32orAHu5UQ5etz7",
  "key33": "53Pgw2UqqpAvUnDQ5ieE6F2jChAC8aTnaqsAsGaAnaDPdKFdAmUNpbZmJSychBKd49TnvQfL4C5xs5drS4u6U5mQ",
  "key34": "mWeNXqzV6Y921qWhwYqr2gZgW8iBYwy5UbQgzPbuL2jHCgL9BXp1TWXj5KBDMMWwJaSS1CmZkbBFLw45nCxUg9o",
  "key35": "5hdhN94ayFZarYNvJHRkraMwxm2SqW4KG3ffTYNwYFjY8DVpsxwc1BL96oNn2nxr2VQWNPmVUXmNuy5szqZsvSxi",
  "key36": "QjuX9XmXYGkGtTzA4pFMJFau1tSo5jeccychfCSYgivNPzn35WhYur3981MNDmT88ibvahiaYLbUtjGWamW9jd8",
  "key37": "46SwvXiphAfBxpTq2RvxiTg3PvwGkWaqF2CnvHWkBREGPBEdGhaUgSWYYoYaBxMSwmDCg6NEGBQRgSJgKNTgFpT2"
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
