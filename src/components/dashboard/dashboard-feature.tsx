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
    "5d61Vyn8hdW8y4g3rNm6buSWyq38qdTg8n3kS1LK1Jhci2FBArL1FNvZdFULLisDsjmnfH4TJbWqgk4zzrBktDzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NE7gwY7eP3u1KntkrX6vbzGPnkFySipMW5MvFxKU2hSvt1bPq37RaA1yX9XbZptWDSiRncD6mHkFCXi6KF25ESG",
  "key1": "3NfZHoyGxkk3uv3quwsfJ8YrNozmbCy9zMDbi1BwhWab3bDSjxf9gbM29fcBDoSCwahPzB9Mk5cEMsKRg6pCCqUg",
  "key2": "35At3d3t752r8E8rkGq9BT35gW3VzDN6qmZz2gJtkzTpGbCVJGkKLJiUZVkRa8gBV1xRHtJv7GE7QvUcEQhftZQ5",
  "key3": "2B25q6cFBF21TFTPfWDeccF4htVQPpwGdaJr13WFtNoFpYbJ9RT4Cshi6WmntT1RTv81PjNDQZFhakoTcnZbjWog",
  "key4": "2JD6tAm7Pnhmr4wYXGduePANWoXgKnTZ3ibggtspD8c1XY8E2mFx5D66S6tjwCLfmxm2SwY4AxTvV5sHDDLkHo7z",
  "key5": "4XU12UfQ5iyrXub5UJExfWZWsboxQnxmtwfMBgthz9bkP1TkzttiUvYgjfr8kSHogTYAzfTb44k4DjakKKpgNwHV",
  "key6": "5E7EpUVwKwL2XV9XpuAneQmuVmkBk1XLUo1FkMChomhVmVPqRARMjnfZVBZGtN5xpcwZdDN7DnHsfzwGgfaghDEy",
  "key7": "5jeaqtU9exhfqDYhcgjYGHcPWwLfmr4DYLLJmta8G9CdpFQuDdvwNq2aqrkQ2v2FDgCq6sG9zUpkw5YQU6AotZd",
  "key8": "3MpW9BcFBbgfmUyw72B2XkitAZLXHW933JHLxdVMLtj1Ht9oRcCL354TB3ckXUKNsUswaAe8NyAMuCFu2V8opJKN",
  "key9": "45TG8cHBFfHnHXxyzwpiNKcGGoXvB2YxsDdTFTjVtRMY6bE3MF7kG8WEMmJtfCQBeTPRHWproHfSdfL2B71zBtvJ",
  "key10": "sZFzxH7giegxGV3KvW9sk4MAyWW39oUvQZNY8UQHpjJrBJ3Z9RY8aF8LPKsEPH3TPLxY7rHgaZiH8GMCRpErpKm",
  "key11": "61M1rhsEeU4kwx2XiXhtiMCKCRV9Xt2bb2HFBKyu1jsgVmMnXqSgQfjVcrPD4Cpsfn25j89vUQPM3ozgM6fdTSWg",
  "key12": "3RwpJbUZ1KYc9WqFZrBuEBTTq43JK4FPDaThsQL6Uu3cd1RmNowEVFLPTbtKYZuzyJmz5xDvE32699GEKwJNxDRd",
  "key13": "5TFy4SkQaLaPW2LV73wqrqGrnxDG9GNkUCJ88YGBbBkEDg8SLqudWkWQNn5Eox4EGCEuU7q63GvP7ZSy7XhqHgwa",
  "key14": "3ghsmWu38h1opWvksdub6afouxaz8ge3gtmCa74jJL7kUTJfJZDdTrqpfwCeBkDdf2VsTebWG9jZYWj8TFqexPa7",
  "key15": "3VX9d8NeVcenG1zxQ3FGkZ9JtAssEqkQjn3KTQNNhRZ133aGu24n6BvUob2yDBbRU1Sj4EhVFEja6NyHCTDoBrPH",
  "key16": "nKxvrYGk3qJXkdLC5n7RrTkFKm1xUZkLDhUNFAJMtyKQAVUwWGvzKKWTdDT5fcoP6NuqqWX5jSCc8JS6HP6ymsA",
  "key17": "3tVMDZRC7mxiq4onwXkrvHL5aQHJkoTypzYsDa8YS6rgoRmnDFrmmwGv69AWSzG1xvYhijbakbjkcYGavSi8y5Lo",
  "key18": "5P7Sy6SGSMVKTTBCKX6N252pwfGQRx4AayMSA2AdeNEJFfpFd82sMMcAYEh46FLW2PqT22PuUK78c1cKFfsWKf5i",
  "key19": "26d34S8LupkrLsQVu5CeP3VdzjTujhHGBwWQ7CANmP79G45KbVviHFsigbKMv57Rz966ueqiCw3fBQX4EfuQuMhs",
  "key20": "5EfVxkoeFEYM3D3GZ4apig6c9w7njaD4m9n3kVs2adjBJa4DcY7B9FasKAyocGgfwrFuxyBPkBNF9maeC844dKzZ",
  "key21": "2xSxyhMDq3LMvHr4hnTPmtB76qcCcABA2gu1zAZ5vMcCUVLFXDzn76E26RfzMTa6bbUPvjKCLiNAJcxG8bLKSBmf",
  "key22": "4xF98HT3fbyqp5KusmvfSLf55EvkFRECmF3Q9XwusBzZ7jP2BrQ6kuRc7beiToEpXQsqUZq4PB3cPq8aPjF86aKt",
  "key23": "2xVzkiEy9XPyV3dq773A5WinWUrGBjmJWKVEL3rC8sgbfvchGATsu5EFTojmbpFfQu7zL4YJZoNc9mZkih13dadC",
  "key24": "623NzS6CN3ALeQpFU6TPDmbNv6kWqwtzkxyfvUJKQG2HCUs9DafXvPZ35He8tyc3jvNgxS4heZjj5SP75dfG8eKx",
  "key25": "3PULZd9zZBQmd11ZhtYtubepZ6eZqVM6ezB9ejosgzaAfjiyZVUfn2WVfo81hhHK2Qw7hy9HpXwjpEBPrQ2PGYyj",
  "key26": "3RMMJcmEEc6dgnUuHWz9SWRRgnNN2zxn5t4pXrBEZ46BA9FcGSBbBHJaH2yiVSKzLaUCEpRa32od6qjGHT8U2ELH",
  "key27": "5iz78HcJmnwMpbqtAhfC5UToydNnq3MBs3vH9L7GAnY3w7xNuYcWqoHuT1ywBiKYnZJUhgFP6CLTH1kK7Z7LmCC9",
  "key28": "4PRaZdxbH6Tg6bWi7NfHKwKPsExzP4E12rtZFuxyCMtQYYpBBrUsFCmGtEteqWmuxU6drQkJHHpYxEXYMkGis5h9",
  "key29": "3fTDP7nbe95uJWD4ihCJdH9swhPXmcnEti4sG1YPq9B1d7YXyqz7hhy1hcDcgqxJgzHMDsMooR4ZY92fYRsRdHYJ",
  "key30": "4tAPPguzPuDZZpEuoHqzcZHhxja4iqW8BL6zMiMXaniLhZ7DVeU7AaxgQT5ntk15z1zj1Vb6L8rCiTKfj3HMTEte",
  "key31": "3z4QiCEaVoDevc9q1y1R4SavYU6Zyo469pkV5QCx3MdGmMnCHdotkW9bV29K84QZrYnkx55NqCzczc9VYYUKVewb",
  "key32": "4A6UgEif3RLqB6LCZaSbxR3kz47dsFkvUFGWPgWMXbEgnnqtWzCKLiyUyLoEWbiY9KnvTprqcZTM5F1WmkGwWhC2",
  "key33": "T14pDYFqh93ZFH4PjUyEePfXjJDHcGDAW6fMtsDJiZKr5W8VBAmj1SVYDAdxuVnBj5ehseJYp9eY9BnUUBd4yZw",
  "key34": "4Lowt2gs6z78jSYauEKEDaaDxoYgg1h889C4cdxEUQWuEMTYWr1doxFayHJurqEKDG8Q1ohzqaKwDPdij2epswFc",
  "key35": "3hdQLgsdfC9rU1heTw8PQZXLMytHLXwSZbH5SkjdbksKDesvyRjG3aPwGFh1eZYSxas6QF6xJkLWc74fF2XS32vF",
  "key36": "3PXALf5S94qf7ZmcQRcCYwqPRzb3P5AcpEEq198BsdDavLnHxwEmQBy7XLgm8bThngFZfKHoxkGU9cZhXMrn8Krn",
  "key37": "2NP9cWny1hr4mPHpJEMiTYTxLE9wCqBUJuC4tjnNcgAx2jvjGajrG6zbjunxhENKFLVr5zRPFHuayVmthWBVuN3o",
  "key38": "rCdSrE1DqzmcC1K8jvANX5PybnMTSXP5TPFoRZH8WJcDsMxwyy95FrqNM2rmXMC3pGKWNkksjDNVK9VD73CtvY7",
  "key39": "5YYuwfpNE6T6wAX1YxZav2KRkBDfKfjzTdSfkfg6QDLRv946XLaavLHtymcA6ZdNiXBwDxdnoTwzWQhszU93EoZu",
  "key40": "YCxN2WQ7tvXQNKwNHGG4bWHxZQ98Eic1A15e792LHAq291KPa8fPtJ3dzGEpZi2Q6c6m23tijL6SDV6TB8VWmkv",
  "key41": "3kBEDu5dB7GCjSQDy1em1brHtbqqgB697BcFDeiLz9qDSALpyaXhsrWjpHnDdX83MDNxdUTcrEbTDk6UnqJuguCV",
  "key42": "5DVVNRuF2wMNyvXX8qXNhB2yihUXBGTfiX8RzmdZLDyaBaYAvUcq2CDL8gaGERkUXBJRQcaw6jV6d5wZoZYwpsGH"
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
