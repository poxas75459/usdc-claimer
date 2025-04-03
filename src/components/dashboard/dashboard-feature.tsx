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
    "4skyoACgNETohvdBtLB8Xhx9Xq2ViREzWMdyHtMVUC4G21hvHTBa46L81EKLvYYAuVHBQzdeYtcD65Yv1QFLN1xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g8mAmUBTvapm7VpZXF7WYudqEym3JdyGPKHBguYtPKs2HSE36EX54A49kE5RTxJuYdXGUtxRXFVVSyzhiY3vAGw",
  "key1": "9Lf8YSaFq2YmrQf4mMpXPcYfvR2V3wqzjG3YVHLDWQCW1QfFmPXKbAQePbduZzw2yuTfYCjHFsBQUQWoAvnAMhx",
  "key2": "422pr3UuDBBR6xXf159Cud2aac3rkG43xPFXMEkC1sUTho6cRPxpDsZqXHMmeu91eNebCPDFsSKpysQgCToaZ7go",
  "key3": "JB1w5c2oFjU2hEoP1ei2CP8FoQjaVJ6Je4P4Zbxa3LBGvJXHebtRVmhctDQJNrGepsLjH2jcYpSR42QbqUyZv5F",
  "key4": "4JunHfek2UqWjwautKyUNiKnWLtctogb69e2Tafq1K7PZmdQCTt3n1PigDfqWb9WH2WZ4Pcoba5r3JNCRpoKKsZn",
  "key5": "5LmHqsjNSsUbRD6mwq2et5kF9NEPnnVekBw8ev5gBmb8LmSRR4LsnTzS5t2LHpdUf6PMKwc2i5LBexfwLdk8Xh3g",
  "key6": "5bQ1ynhvnDgwsrPYNgHMW3vtDgfyQVMan6Y9Xxry8zbtC9jgCAmrHd7dkBERaRbJgY5qHP1WAAncGUcrRwoDzPhq",
  "key7": "2wuFK9UjKZ3A3QJ7sYrheFHCoH91in3LJcNaBCCFW2xQyRYeWakLa2BDeNrEVGFdGJVwmUqfQ75VsKgXapmBFbDM",
  "key8": "3kWgwUtMEQdydrCsP6KtuZRGDih3mVug8Gv1sAosV46nucVkmHmi3uxoMnjo5uAbJDXbxVzafGZryUzVSvT1cA7j",
  "key9": "Eqnqyqbfi7ecF9s9SHJz7dQqbEEQY9bLKzqoN5gqUpVdQgS2BfhrV935JHnZZ2o487z292gLn5Qy7bPccCd3JPh",
  "key10": "5L3WGPgfJ7sqfKTGX2xJGaDVCTuN9WTndTaU2r47hHQZy3QVdziEBAjWU7HqPpLYtsgsKBmPYMHoN8mFgtd127pg",
  "key11": "49rTH9ZtAR6e37p6kTXyDrkojwn9YFjCaaDiQYTJt1izvdhYAGKjTyWE253B7WoGuPyBNECnbo2DCk4gm6WZJbbZ",
  "key12": "oqAbjGthhUbQWu8HhRozSiKzuNS3PEQZS5tmHZPDrvXDaYvq1v7yGyZ3zWXkuuQvPEEpWBTH31KvFCuy3ojXWcA",
  "key13": "4LhU7LyDEb8p9Czv9kHZGzubTxf3Rm4p5UKPYxPmWH7xdKzWn1qBqmQrmjbG4cSGDFXD7YFeRR2dqc1etUTXAxkn",
  "key14": "2oGqwJ6uSufyhQTZ8zHE2CLZGcUUSTJBrHhsJDJHF5bkAdgMmDypwr7o47vh1X9yWEb68SgzDqrYPoKVh1NSkvyi",
  "key15": "pdoJW91JgXjedVXmqFnjyxMkzLTorhWXr5NprfMWNDghvmwPrJZQ4qqxq3YFHnrtSjo8V6R5eoc7b33sA6PyAF6",
  "key16": "43VJuKg4ZTSeFhNqmF9vD1y4ie9QHBQKYyi5tULoW8XJhosZtMHga8k3EsahSVzgZCcxDgTxDZKiKvYgAvxJBGvu",
  "key17": "uZTHPLyXiUkXNtQfZVVqZbw39yq38wS9czjURz92B4bGuKH5aoGwtCEEyM2ySsYYQ8pUByhGEmwPG8vvjeMnKVg",
  "key18": "3avW1fmrCzdfhowok1zug8azFqYrnyaqY27pN1n4ncHrKeXwaPgMjfHWkppu14bvSyNtKaYRmbomdpwKQAgPFdEU",
  "key19": "2AtrVqr5qyCwJHNwTa3R4K9Cou3hVSnHBVzaPscyLcBUJUdczSjwxYpHfCR65hM9jw4Y6fGpvc1A7E2HHhZmTGT3",
  "key20": "2ibVfaSQYJdKDUf6cCFn6AfuGpsjTvn8MXmnswNjGGgzFXap8seYvLJqaA6NbE7FTzpLPrcccZ72MkskV3wS5DL8",
  "key21": "5zNkftQBmtt9uaYDeq5vGYvFWCbBRwBicbd4UMcEaUirK8V5iZj2jcwCmYLxqqVcET3sxuVuRez16j8qQ23S9FPe",
  "key22": "2M83U5eP6mrJc9sSubfoRV1BJngF97e2BFBTvvmhqRzSLBywFJTLLaZGtANj7XRKU4gmAHasFmffbQGBvunD2A58",
  "key23": "4UGPpYT4Y2igzZa7ktNBbComSnjLvjy2uRFPeMkfpp25wqqD7f4ekEGUBKwtMWwKaGjNB8U59w5akRbXprArG7CV",
  "key24": "2aVsgjChJTCRUR7aRSLUq9b93JT4VvFTMEK3GxR3xmTHxQpmyuyReimChBcP8bJXnNskfcJdK29PggCDW2Pj2aZS",
  "key25": "4HGtj8dgoujCtKSgZhVphWhip89TRFYAjYWkjbxCWgM5wBwy9rbwrc7trQxhN6YMppV3r6jDv7zQ5EKGDWZDDDxX",
  "key26": "3yg1W8YDXGTXsdgBpLXFN2oTUZz53ignBXuUdNNs2uYXGJhCv8zUTWqLUjS6peTAHW9egXU3fYdDLzf5FNxV6ehK",
  "key27": "3sTY1LeHZHd61cRqNgmGZTdhF3pZ5X1NGQpgo8qti3C2u7Gp8cN4NYS1myic2ckJjKm4up6M8Mb5yEUyQuHcnYTM",
  "key28": "25NjRDomAR4gaVM1NHqXHbFGj9ukqcghYzY9dgAgcG3xpmVEcH9JtMaqmzxjp2DFczpNxSDsMF8UMjPrDt2f9Bo6",
  "key29": "4SmJE6cApYSAhiLJbE7ALnU6UAr1ukXn5yRrtPLaC4TeubPR6gojGW6xoZvbiVN7zbJWdP9Fj5Hf3QAsvjTfMzzP",
  "key30": "5AF9q23hwUPzqs2aqJWEatL5FU2NyjDcZTg5xKXUTV2ZFuEnz4yhNFoRp4pqzgwo88L25QdSLsn6AeFMAmfQyojw",
  "key31": "3YoUvmjxoZaCwECaveevP5XTzHJXYeVhVR9NC4qKwjwwsNkFiNT98PyHEQarG91TrKoi39szQXVfFkLJHD9TY7Go",
  "key32": "42JAhE8LZxKKk3pxMfBN6AweyR5L6smZnLGu4XuQvxYpaYeNKyTigmy9XfgRrGZNky4ezxZocMkfaaFhiZNFUeg6",
  "key33": "61fQhb5fVe2ST5GVk3ncirJb1YbXBN4jWFRjiEtusWheZXMJGb4xBg5GzB2F3kvMaH6vpMfenCrwcGZPkeoKjeq4",
  "key34": "2Du3AcW9Z4feKFkLLuF4WfWvp5ZM5Ltui4HZsp6RSeAsNpZoE7taBTcyuvZTDbV6uPca8Auk6CP7tFHrNyu1aAoK",
  "key35": "sTygzYeLEJwSL1vAY9uxyyJgJruZa2ToFvHodvz99YP3VWQAzEirfbhKBm5JVkTZs9xfR5g8QGSaLFm14WUMA1q",
  "key36": "4ZpbyMDyBVW8LRv9rzFdbBf43d1NrjdzWNDtch7zLv5Ls4MzEZwDR4h3WqdY6z2TwQxtoxz2DdaC2AAaY5t2mN5f",
  "key37": "4PfSiPchu4eVYcnkppu8Dw32RqVSTB4p2TrRwfBzzyy66ptNjdaYHQ7WaiYTdjHx6WhiQSkKFYVsJqtKXCKcrhSR",
  "key38": "5n1bFL8kqPJee35dwNxQ2Pe8qKVGXyNYihkP9JmGBREW3XyZyc2bKgNzgFg42rt9PBiQgXoXbpa4Ps5SfhBdQTQJ"
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
