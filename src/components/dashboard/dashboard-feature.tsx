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
    "EFxVX7nFhVbssp6Dhzoo8mVqaKs6TFDQyHiUJZvv2NYrUsWTa5G9tKbbpnrWBHKH29uKQ1Tto541DQLPHdamcVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDbq9KTzmJjc8F3dFHbZLjk4LuzQ4QCsYzi4cp4qgYFdaTUehK6cbdf1S3fb2PpaFY3AoonfbeUaaZFtFk8GQD9",
  "key1": "2bhkocLeKx5RXQ5ymt2GMrcdubL6xa7FQ6pjfNBSPiyan5yb1tvwdEPW4Z5kjGGoqHdzP6mvAcsJYibu8gqjnAsg",
  "key2": "4aMcZDfkGoCyRSfRL4tPARCjuQmrviqrT1XV7JHU6DZ52b5ckKbCh39u7t7D82EmwFq1M9TLnUbhYJCWJC17eQFc",
  "key3": "3ybunmAt176FFXqyt7ePy6dwLJJ5bnh8mELDhwNMieFszavzAiVf2Yy93CTFSzXfvKxEE7N81aoMwwaPhUb84fKZ",
  "key4": "ZMCpFoCBj7GP14VfpagkHcUtbbRnwP11cDmkUaHPEeERZmMLMRzWPrXjJcBMyRy1aRTskhqHUEkZf4XAMds3p8T",
  "key5": "3tAhGLHvsDaxzqhrCShLrAwKfcMiDHVqb8kFubo6mBS4tnmDD3mmVXDgimSh6wiYjL8tAnrsu7Nf3LcvKeMqJYbB",
  "key6": "4JTsZQndXJqLHDhe1HX5ErB3DQCVrx1VgLnUYmJC2E3JnU9sWTBtoc4DDa4M6uEvcecRomViiFwaZoVfNZdY4GJ",
  "key7": "5BvrWFCzqaMHeq74X7v1KGD5pRR5nMmZDnW5RYTxesjXnNV2jP9KZ18GSSMz3j8PceYsiFUpZEvzGpdKEfXNNouV",
  "key8": "26WcUdNMGQEbQUk4tt5V4YV9Y4KFHPsrUQ6g7GVvNs2uMdokRXbnjapznoXQJvAEoUKHHoUTVWjk2vXMBpKTGBU3",
  "key9": "3B9FGUvWcfdS3ex4C6YQasAP5aDdYSqcedkSTpTWi894WQcqmXRJiJ9kb22ufBFt8DjCpavFea24KrFWCi6F2gCz",
  "key10": "2hvnop39szRU1EVzQgxCiMDjFFKntEeZb8Z1cHCgoAAPbGJ6SbTcBn2UxBQsEiqEnxR3dKy12VhNuuhzKoCM8KFd",
  "key11": "3UNgZFU3dVJUPFY2TUpArh5U9NrMnRvSqREhPr1vV63HLE8eSriVjRMpADEZzZh1CCMrGDSq4sJzQjhdEZieEfNH",
  "key12": "DWWnpQH1Td7t5UyYn9V6Xd6Q3tvBSuEpdhmDipfK1ac7jW7qSFdwsaJ6qJXMguTFk8Z2DFgLvowviBy1YDAY4P4",
  "key13": "2LibLsMiziSFSPc9CuXrEKXxAk6SsYFu2REcd5RAsmShHBuEwRixtX2uYnasB1vQcRwWQLXb2QEjSR7f2pxDViTu",
  "key14": "3fW2nr6bSWbRZ2A9p1QBXeJm5NfAz6i4AnW6UXsoXLQsaiUSBTD4ad1jm8x87EZnSWMLcfBwFaPCATwYBRzPbGxZ",
  "key15": "4iUME59UCH21F18eFvpgRWfXFX6AMX1yHQZxjosxjQE3GYpPbNuBVB7jpiKsu6JQ7it8Ur3nqrheX2hTPxmLRBcU",
  "key16": "2Fjzf8bYLPahJDJzjUAmkFx7Ng8qDwZpYmRnaEuSrPj2WBSHk5tNc1Z7qxZgAVgnizCcnRx31DUuBg2V44NNTKfH",
  "key17": "rVKLVUvrdhDsHoLDr2iEeut7wFX3mjMSDK8Ri5i4gA9uwssdrbRe4wMYyukGZckuL5vGhCaDf4ynSEGhc8bJt8h",
  "key18": "5HW3WdzYq6JB5ZJ2ZuVRde7B4DMFy1QdVNGhnQ6knN34b4NbmaQusC9t5GwKuiivZHz6gZQJpDSmAFJDequC6HHF",
  "key19": "3QRWhYFTNCE9DQGm5FEjB2ngJbB22S3TUNsdPxmq4bsatXZ9pTftmbgeZR1XK79ajyZvytfYSJ46W5Z1QSvjorPP",
  "key20": "5ENEEeBCxrBnDKyFc6Pq8AzBAMbBQxQbyxVJWWjYK9uUygFTK4RYY224S9KagufeYoRudqZxhzNBmuimCd17fNQd",
  "key21": "26T5u2LC2p5TjMsjJQznH5awkyqF7P5KCvQQMePBbmjfatnccPNNYvWjPQPxLbMu1J7vpc3kBDJeR9WhU4PmquHf",
  "key22": "3GdqDuDiu29BKHj8jb4zK6CbPFC9E7uKZuXfTiix7Yo8iriTQNkDp9wD85LRtY399NNEFLH5WMvrDXTDNk38maEQ",
  "key23": "2co9B2eKhnPd1dLMLkAMu4EuZnzFTod4nbdkWB2dNJeeSG4mrf8JRme3ekFY3AZunDCAMKUyE2hWRfBmrq5198y",
  "key24": "4Uid6nRQBX6K24yT971A6Fg5d9ADcJJFXANp8cko8TEez9yEv8aXrRP28NCEoTtaiw2gYMBDx32JV8THMobrsCoX",
  "key25": "3pZchxhdQy9jtaZTuz4JTZg5KeLmDBN4TG4Rf9kfvrF1Ra1iTvQhqdQL15GyBW3J5SnpdXRy8951d9eTSSPAsRXD",
  "key26": "45Zbmj69Wks12vZGq4bLkX7UuUHYp31WZKHHsYavRtNShQsjjjxaGitEDRA3pCERKBUrD2cTnK5r78LsYeZrXuqa",
  "key27": "5kpUFg1haJphMVoksKL8gx2c2HLqZKip9q7DhhQqaHrFnnz7cKKgBQshqkGGK3ZYSw1GdBXXt1hT371Vz6cYtXpG",
  "key28": "5vuDX3QayAZnERmx5CA4RaZDpJuKLqnb98FcZuRHPL4xRYFeZ7ALqfp9L7N9nKB6ZDfkW9uBRi1BBDDFDSawHfQP",
  "key29": "5ar2GrY4QQcc6rCpG1dJLU2fNKfL4jnA4DCkuB5QYuW1pm9vDsXFxSjjLBVisDc4gQXub6E9tfvpuNrYC8vhXytJ",
  "key30": "29BucghQU9PrsZTFcRA56BzojkNUC2cbTc2ndAqQCs4YwCvHgX3PCHi1RcgNfRkhtcuAbShHvoZLcCjjbyhrQrtf",
  "key31": "2Vkv9zuwzDxeD38xyyKpRYPuDMhhAvBHpy5BFR45S5PYYT369G7HBjSe6n35H7nS2ALNSk58fgxssBsEw1C4BqxA",
  "key32": "2WtMfaN4jhZnW8PmhnDaNaZiPRmVEshcZnZPz2y9hrxjTn9Gy4zZm6ShArewZUrjTW7o3RgyQmbtiuH8jV6aCGPS",
  "key33": "7YKCMCm7cGTHskt58jsEhWBzK3C8LzbFwQPanQvb4ABz3BdLo9rqBqxcLe1wd2ihEYeMscixP63RryvTQpwDgpb",
  "key34": "opEX6YwX9s4P4K3SqTaWVWNT84sKGHHhtKwEBhzMCjPmDEmotcnK3fFefW3js5nmRYLTNzHkU7QLbKYuWTXApY1",
  "key35": "4KTS39K9aLoT4XSdExkU6Ex3Q5ygaMKWiJ3Ap6ZuS6CzBCZYbJR4M2FNnUuJvdeJiEh5UNr5s1wjfp7S3y1KPpHW",
  "key36": "2pDiQVxXuHDDGXgmCJNNxxXuAHEka6TZMdSyhK7ceUVz8LqEwD9y6gqBGpZHBNaP8Z3Sx6Jmwsd7Z7mp7uSGQkoz"
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
