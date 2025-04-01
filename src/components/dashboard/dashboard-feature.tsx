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
    "j44AnaQst4vATm9ETnE8WpJEK6BroGs6Uhy3Ge6voMWr5TnoWuF9hH2LgLhzuGg6Dv5PQzk2pNydt3X4qxrrCnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eAJpjmrJkY3rzSJJFbECRYFirh3A3Mr9te2HC6MnGXed4FQEa3cuWKjZ2Nkk6mVYipyi7BjkiK1mEfSaS5wZQ9U",
  "key1": "2QywEBiuBXvYaGcsSJGDZLHrs4hyJPrhJ8cynfjdT6ZJbQwgzYFAszQU8DTs3jy7pQoxYBUC2QBdgdgrRnvGwg3c",
  "key2": "3KXn1VfVqVv7PBMZdcXu4DUebWDyKsCBfEcAc4Tz9WxbkDGyxcECnvYrVAv9AsesygdThRUSchEBifNni9k1Uau8",
  "key3": "2JhasJ9b8cbCJWLagvePkgXYMGDrQNX3dAPQFB5nYvKP3bQLM7YoNpmp4JBNLKAiJ8wgwhoFHLr2rvnF4q9RrHoT",
  "key4": "3357WU1WDPvrvGdc4GgzNn3K1xPqfsdNrKqEwgWr9cYTbvjQXgBJy6Yxt4ftqnqrFz24F37d57zUnuiQvoEY4gLx",
  "key5": "5zA6cjQZBMrbGZZRguJPqiZitPTKbUugjTYUJme6KAvGccMPSQcRzi6NDFhJiLA7789BdvVTVPMufoUaZP9Uq3gL",
  "key6": "WCCzBSa9wUv3g1v3v2tSsPa3P7GAdoapGmWpPicU3TrrLh1AJncjssYfmQ8QHnmHdMLx2cKiSfC7kLqPwg7GNsp",
  "key7": "3quZR97WAoG3CChb2rmqtfRdSUAEkQz2NbbvU7o9iA7JVqAXvXxVg2qeC1Y9NNgkQV9nkQCHWYc5P9Wsrq7sgGdz",
  "key8": "35kPKq3oB3EyqPjM6d9yfB4e2rrwYj9TrhCCcokPczDVTm7uWzfxDfZ1PL8LWQbAZikNZ8xPmwktzqP9GmRUY3Di",
  "key9": "46mQP11HVodVHWP9iGrSfDbYZipEVq835heAzCbG4pnnkZxz3J1LLEuVZWWwEDohqa5tiAoPm1CjhFbxUR5QstoD",
  "key10": "57gCmr4UFfEWtstNATCyfnKMbgjrGnuiCZ2prG1rPJnPTWgtvuGzrkDHpgggKiUMmEmpQ11jLiwUpku6feitWJK8",
  "key11": "3ZQaoxNasBPYgs1di1it5VAjrww6Q2wZyBYF27JdoXmbXrF7e4LpoVkpx29W8zni2Tk1JtTyF3BdBKRHgTynnS12",
  "key12": "4MrYhbwGSUKM7PWDA6CjpXSYB9T8q6Hzbf9dBQHrG3959j5Jt4Np1KS1fbTJr1JzZvs8kuvrbQzm8TYSqNFVRcCR",
  "key13": "3MfHV2NQikEdQRK9bNyZ61nKbd69wh1YB9HVZKwuDvbzyEH94sDo5xdc5mqSYZRegmoeCDaJwQ3ab1TqV6bm8KqG",
  "key14": "37LUYZdcZtKZMML3H6qJ76AX9TsjwDx2FKEjp9PFb1TRMTuieFadUFXxanCZLGJZKrgJ4CEx5HYYzZrbzES4doRE",
  "key15": "514zBZ7iJSJG7diyNwFKBW3MNPa2Gz9Vgm2Lv66bYB7UWm4cLLMYt6y5JNdc5ggpaLxNNUgXz9J3gozCrDLaBpRf",
  "key16": "2XF5Xmqfb2vRyQY3VhgDpxfiPiMDsRc3M7m2mRzbdUip8Lmd1eavEatPQ2Gj3vezvKQNae5czRwWp2FyfKCr3L9K",
  "key17": "3Ufj1z6n2Q8pfA9sS1TDJWhGSenH31feTxuAryKn9S8moPg8HyWS6R5BEYqFgsLHJKUMn6MDpGFEwTb17txyMdDV",
  "key18": "2fMvddY7DghxU1zZceBcpVbTQLu4qgDdou7KLSggvMSYMcdo7QRZsMYZ7ax3jihDzrwZgNuo9Lebhh3aUkKQHgtz",
  "key19": "2YHgPe184qXE64HNiNjxmft2rTVYv6zhH7aduAbhBaAWbxTpj1XdanTSmfM6jFLwXU1kttrjxdPy8ff5GbnKQEdt",
  "key20": "2sev5dPmT3dKRMiFSWCxypJzkHQHU24DEJ8YMC9gUoNXhCi8UfeSoVdXrSps7bQc8NBTD1fHj1e7JLS31bHjuZg4",
  "key21": "2ciudPaPsWfhz7u6awqBaAh3acV1naxVVsHu8egZigxcryGdL7LaQzNXCGep9Rbzi44pQxcngXf83G9nJfQJfoVz",
  "key22": "4pTUPMCcYu1DZ9H9xCLrhrHm6UaGtGmzjJVZCRnv8HmHiWrs8Hmhvft8P2KU2tR6hoyoK48Wdoy8tX1m3cBeyXv8",
  "key23": "4tinFgsFQbvNqcUEBmpcoCAeUeR8DzfTNKx3ynrahgA3hYBub4JEmUNN6nGL7gKXPNmqkAXZJwSoxqmZ8EPmCg7o",
  "key24": "5ppLe2r1U3Afu35DxFwvf5F7KQvqWwb2fzqhjehCPxTUXweV89DAreP7E4eEF1jyM2unqWdGgdkxu3WdNRSDjzEp",
  "key25": "5k5WanRzV146n3AKzSbuh9TeMJEsJw5qT9AvXvjJpgBob1JnpHaab3XfpzZm4erCLekzqsqGdch4gUqEcQJG7sXA",
  "key26": "2XNruAM9F55w7UKZfXpw7aRUFHqfHqfwQTzngCB1g878Y46HYWVs3gNPSAiopGaPA5hcnA7TozAaYbKDU4xgRC9n",
  "key27": "fauDD8t2M2JLnFiB35Ej9KRX1sPgYyDVpUTetzZeWhc8874g6goPwWSjuPgP84SBWZ7eKMHF7kkHJDbmjR7RH35",
  "key28": "5Rxnxqs85fXsg9h55AvV8Y8GiRAtUhJUK1nu4knLewU8KER9rDvwpQKVhFuqY88iWws6VqW2KAZrVpDHwzbwGc7t",
  "key29": "3wdNAo6aWczfoqCAvuDhpWTqJorP4pACgmTb8rqV4ot1Cw4AP7oWYKCwNGu2QstjAx3Gifbnja61jS6C6qTUKJkj",
  "key30": "5TNxoubVM5apQaeyxjT6GPFubvSThjnAzcDTqELDWCjyEUy7PHE6Yakw9KwyAEUcmnVbfJ7hyJffH9nYiom7xjPL",
  "key31": "5qbAYZR53Ud1eqyrPRLvtKho9zzHRUR4coLJdNa7b8uF9dmXgefNbs3cxDHBFrVamij8JL2umNsgWcQbatVPCtGD",
  "key32": "3kMdhA4rt4teFvCpLMJjVAjtns1vwwrTn8jSRG33FQZsj5kQAgdNLEn59sfv7BbEeqCcJheYxjJ3PEPopmkyzB5o",
  "key33": "Cz1CpTpwY5X9bcFKcMNHw6Rxxr5FRFy5oEaosbmHFFFCF8VSDjS6YkBuEn7kKktRZkxsoCCLEoGtjwkDfVystGc",
  "key34": "jVJFNFSMfML1NyJffJfUEsm1qWRMkuwRDfmbX5gv94hfiwT7s87H4bErCdDi9cQd2bgDNHHoseEWWybMZHfMSeQ",
  "key35": "67SwRMFQfL6VWk9Za5vx5MYEX1dW6LZyK8Hnp51pMevbVWKT74vfg1i1rH3hHC1GUmMrCkJu5ZfzaSjsFFViPr7P",
  "key36": "4AjUJzrMEUYS1jLoqiu4ivnsPEMjKztktKHvbp23ELK4mj3vF2pHAxy5fbcUBW7HSRhrs24UJC1zx5rCzqdz5b4V",
  "key37": "4EVfy7z2CEUYCDho1b2GENeSr8d4hmygKgcVLJn7UbuQA7xwYVuysPbkitAi5p5nSdtSjjh9BzjNmUkNgPC1hqEx",
  "key38": "3gDcWcDgPEzfQvchA7bheTgiCkAdTBWx5Erk3sJipcT7qmNR5dDg9147ZvD6cVDw3YJDzJMUGPtLSSxrktjbvxre",
  "key39": "37eQVdSUWqi8xpxhMLBVnufPvcGYQETgv8kGNZMECFcDExQweUwcCSN7ZkHf68gFV1mne8CKnkhFRZBHR6mauSjm",
  "key40": "4jfUgasUiu6fAEGwVNJU5XuSsABAsa3NL8YQf29G7L3Q3pqhNMGc6ctExJ6HaQw73nYNpTEfzh79cbf7SsabUzTN",
  "key41": "3VYugbeEKGic1tvnKvzBZAwcPiMrSyq5xPoU9sCp7j9X5xd7LU263QeboHAraozrH7v9g8ozLLrfKxQXRdPcWGaR"
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
