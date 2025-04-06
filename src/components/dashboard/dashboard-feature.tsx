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
    "5jAixDjB72nWuvADBEStS9jRNdagg5wjwrzM5RCKV5deyevxpLcTTSE9abpsDR5bGhNb4NeoCmriZkcdNGUU3SnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWx2FTi3JGyms5C21XUs1t2UVz96tY5t2oBvWHaNxYmb8L3Se3KHjyCdBce16bGfhrEppcGGYsCj6TdY6av3FGQ",
  "key1": "41AEe5N23SWdBAEuxENL8XJYWFJGcf5qP8Qk6UuhdegDrdvn8aD7AtmyP6VKVmtvZXviDfQCqdnjEwMbMdWvtTev",
  "key2": "3WqK7mcwikp2zVg5XAfyqTgZ4eFxUVjGyHNdpHhtXBvrT5sD9y6PSByaGczSmBFkeyYUaahP2ZoWsde5E78gwVCy",
  "key3": "5NWjs6rWmeRATRJTxQ2HGbgAQsS3cepNs9yoBsC973Yy5y5BL932cbVvkEEkdWguU1DFAVm4sxRt6QEnNHzp9BPU",
  "key4": "5WcMYLhBvJF6NX7UD4ch2k4cFBpMiD58jh9CHfNnx6pTtFi9eQP5e4bc24YoMuR3unWGHivxc13W7MKzVjKmzYQd",
  "key5": "2s2M877gBpvTGEezFGsZdqpmE1oyrcd3SbZxdJRkqyYp5VsdtBwHJS2TVJZytpp18j6qqUr8AVqoZrv8bX4uDeo5",
  "key6": "24rDyjvkSBNZwomPRHtRiHGasRYEw6sxezkqAD4MQXeLBznyDnD792qCvWfg2mM3SrNPVNjcSt9iMryoZpMUbYcg",
  "key7": "3Q6cryRHkgafYJsEf6poAxkupii9b7wArPoLexHnqWvCpRcUNCGNMf746268Ve1Vfu3w298ks7w89cCccB6AsxfW",
  "key8": "2jMUaKHErngv2LyLJPuuJMY2B9RqWhCzEXtZ1DDLXuRgBKu7K5UqvYd4Tc2svdNqqJ4PtbGnx7Agv2TBcYestumW",
  "key9": "3woqNSjNWoFxSfszPfPVzJdqHmw9rei6UWmx7WbG7ZiZeMnH69sL8Xgbgx8pfMMvRHC3fesNi6kH52VG86FNjpfx",
  "key10": "3F6UCq9vVEiS4gvzHM6vgGdKq8ScojJkeG3XA6hTV5MvBaKHBfyTufTR3bLwRAhJpLrpU1hKzRSh38qnDRCdKXP2",
  "key11": "5f4ydC65qQHFETKy3CjFB6nFf1anEzg5vAMbiZB9vhe5DPQgHBUFtPA4umVAnHgAgHzwtt1AT5dGp4S5MfVqwi8a",
  "key12": "3Pynegwo3kB931nDqa3qanUeiXvAevxjwbfeJZVXkfbkMxc3yo6gEuUbcq9TYXG31jmHVEoguDn2njzVL9jCbxee",
  "key13": "25cc6QhWNv8nTZRgTmkcixPNSVzL4MveFATj8dTyMWYL5HjikYhUPqPF85Vy6NmbC9J8V1n99vfwKumV36RKTyfJ",
  "key14": "2kWcsptamVaZueLCcdD7sYAbULPx2ZdtbWrn8UgHzf13BUoSwKvchvpUNYQaeS3GSt1VEaUE3r2e1UipHiZNfSMi",
  "key15": "UrgcMCwQKNxbCDfqJ9UU5DjGhpTUi65dmBUuqavumtqqhgVwMe3iBpTEFStgsrE8SajYK7MHo2hokDq4Z4DNibZ",
  "key16": "aLAxF7LfxcFhpyKjgZc9hPuQpX84e4XEvBj4A33uPgxvH3ZAuV1pSqW96Uy4YxKED3Qim3eYwa3cz7TeMhTcuQm",
  "key17": "toWBWeJpaymSUjbGHRTmJEBG1mP5BszmiiWjd6Ejt4mS45u162Nxvv5HxQcgARa4iDZtuJrvvng7vG9Y6nChpTT",
  "key18": "36x3bsPV2W4XDrpDWrePENrRtbgUAocymSeB9Kos1JyxBe27J6TiUMFaYGMrmvF2Nn7XmTEn1zd8STnapsSMKk26",
  "key19": "2dVDHPqnEp4TsC9kVf7XmWzmrmeLxKP6zmB7mCQbem2QBSEENmjSrckGkH7t4YzX8NHJS6zyLQvxCw7Gmcz1mbLZ",
  "key20": "4L4tFMyVLM3rbiZnMfrpYYyXt7EjSasWaykqV8VMxEUdzbUyKqYp3kfSySxxQ12Hz2MWTgzKQDGLSZgsGoVxtguE",
  "key21": "5D61cbyqRJBzdu92A7gsbFF1UhTtpm4Yf5yPr9c3tW7BpbmRNLT1kZd8MwpMXq1stZMGg9owfEkcmum2KuhxrGVq",
  "key22": "339yA8DBAb6eonzJAQJwgmLJCyxDRWL47QA7y3MPvfZcGFiJnbrh7FcChQaEgavt2nzX73eY5jDLBjEhsN4inZ5K",
  "key23": "4HGjanfekSrfhQEWPth47yNBQUkyoWQCcBnvsW3dJe5DgwbbxacVTRyTyW6rmPyBHFwW3xhch2F1QYcjsLH4aRkH",
  "key24": "27euAJHJNzRtmqdJaUhK6Yrp4Mw7QZ4mnj97jnzJvDTooBogcHiCSzxFdLDB2SFSkxEQK6bRAmXxYrJRX8YD5mg4",
  "key25": "3TBjzY8Laz7q21SJxmGH44BqoLX9cuHPZHn8jdWvYA7gxwf7mxVfNWDMiGLhuRk2hHgAspDuytAcyLpPr3Qvh9hf",
  "key26": "rPzQVd5weiaHsdodh3qkLTAHjcPYbV1aagxjHnv1jBLNTnduuUvqcE9EnZ7USvmEJHwqXnGmcnyU72oUYrww6GC",
  "key27": "3jShYC66a2ZBso8ehz9h36AhLaqRvvbc1Koh2RzSmBqHpe9LoxvckqPrmLvtFcq8wFaKU8Z8Umjw79ZxgE9aAtzC",
  "key28": "2eAApZtarQHZ2AuD6qNBDfWLjRSeBh7aayY9gdEsVwkHm33MhUuQWJvwJJGTppK8cfvsNen67ST3XcA1trJNgff5",
  "key29": "52DeCED1Md4yb3xjw4UrPyn8u8Uc6UjbvdniGn9rboa6ebyo1suqz4oQsd9Pmqa488d2GnWicHTPepNiu2wtELCh",
  "key30": "3gR61bxAC8Nv18fNGpdQ48KxHeju4CXGvvDHZ7hjwiocAFLKAX4XceaDmijxQ11994hbQdBNWYkNZjwfSQBp1bGy",
  "key31": "Bk29x1jBuDfR1bocDB6jwBWf23D58qFHghcwDc74jiBdpTi2z1nHwfQbYssQhjQuFPbaKHg4hXCiw5XYCLgcGvg",
  "key32": "21rceSvWkgYq6eqTC5N3cHTHX47KqZBKUvzHhTDogffDgtHLwQFhBFRExH1ag28LeddwDqoeo7sNAA1uQGKDRM1T",
  "key33": "55wpukSz4vFXz5zAmD2DpP8JDqDvvZ87Z1rGdEyGUv7UxegRcYn58FAgK7aUULTjc555t8QdSz3R2KBhFJpcKJoe",
  "key34": "fBy5euBUCw9qehBE41gVEbnE9GDzrXYBQW9R3NwWamdmAYWxcmh3q8pQDcbNx1XaPWkuqkfcTFT8qunrC3988oP",
  "key35": "4Cp9qf4rQffCy4jKyE9XgqrSmKpkR7ZHjT1HdbmF68TTHEAG14kyZ3Dmpa1SBGVeWm46NVXzen32Wd2KHuBmXvX9",
  "key36": "qdSw5VimDhhyZcGeJxuFqh7Gg1nGH2Z1ExTyYtrciFYY5XnmYFDwiyV6hLaWjWZqDa7NXm6QmS1rV5f7uDsPTZ4",
  "key37": "5etn1qKnQUT8aS5PqxCbqYJDfR7oZYbP4DCFBpDjDUhKmadxVYMgi1e41RCMxdur64HZb8kAqowUB6VQ3F8WPAUP",
  "key38": "4CF2Mt4qvjggNzkVNNTKuXYEy1mqn7eFjCHSjmBCcNDZ5HRnRe6TXTdniN1xVqZWvky4SnGaf9111KKhhcofQwFo",
  "key39": "2jhNCf9NSgyAbgLYwGmZcJnQA9ePAkuB1ubgohDiLYd1wYHUFH9kGrA1ZUPXQ8phoTHRDqj4YaPBzfdfihddnMqz",
  "key40": "4XujZbeWfSUd3PSuQfxigC9CZNZqwpmFjdpP8SH5i875YFugNLHaDmGuKs7YbwEGQACvQat8afAZPUYCWXWqiRhY",
  "key41": "4E8K9MnabpUyopGhYENxwgSuicPkw7tq8LaX8HVzM1GAB54CL2civBHpp5JfmiehdbftpTRzNny1weUbKHmbTVt3",
  "key42": "43SBV86dGTwJXayNtc7cNdH8YWmqcRrNK91544S4JyJ9JjV5q6ZT7ca2V1iYRvzTgzpqknZkCZAQRge4XJubpSGK"
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
