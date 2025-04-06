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
    "3sKYLLkCoNTk5BNXBfVwh1PSytZ4JySBVBtz6bx7CaZM4a54aymQUuYs89eRRKu6Wd1LdZRYWMgtwpB11L8Kesdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K26n2LobUWMz5ek9cr7oZZA1iyamXCKEEzhoyty1Jr7Cc3wm1B4DYQ3uxdmxL92G9odqbUMwXLQyLSmMFaRHvMH",
  "key1": "3xHseSLDEBpVHXCi7wbs7QYf67QitzpwVT8FoJNvozbwJQz9nWDdXhhhP84E6xnGQgpPGq3tr55x8jmvh3CKzddw",
  "key2": "2eNdaMMGHqXvTwDdyTZdVT1moqKFvbxXafQeHtVZF7Za8hbPqRADiSYBaUQcAgWdD9KUj8zouFeLYfzoFsrURPos",
  "key3": "k62foA12krQpPu9ZvtD2NAxApYaFQjvFi3CuzBbNnU4Le8Yeu7KY8HJwfbcv3pfoRsBZf1Gcmq1HhQLmMrjJbj9",
  "key4": "44EviYAMgAXCrbtgaVLgv5aKkEdeNYHqMKhpYCC98SpnZHy5MqEf33HW1GPc9mmTsUAaUJhV7jmKayJq3f8egnFC",
  "key5": "4iGwZt4mzvd3fc7q3TM9m1pekN8TbsB2wX3GWRAgMkDBWQozcMNrSHP1utbLKqMqwLRwKvSdzQPn6HrXzToLsuvm",
  "key6": "4j3MkvWerqhuBRs9RQKVTfTA6mkS4i4Mh9RLiPoohvScJy7kkcM8LVABtVbnoNMYydneCRfzmNpjzLBn8mTQNWwN",
  "key7": "P9TPtZPHzayY2nnHALKy7pP4LqsKrCTNXyE7iiHBdKkGzAZPkauMtvXNG2NdSWjRnoXURm1ppuEsiRebp3YXnjR",
  "key8": "QcM1zdx7CeK7b9btdqajYzfnCsAzvZzYxHFk19gBF9QeS2JGyCU51d9eoPAnJMqvBLZf5sLipi7Mgj2JzPRDntX",
  "key9": "33tCkzSo8Po5Y2tGzjA8fNWmDbCzE1CLavHF1m3oZ2Y9Sp647jRBzLbqYCQvCMWckm7cnA6PriVXyypqkFRFo3WN",
  "key10": "4TxAfUKd8qeoxv8qzi3hsmCKbhCduJVSURkZ9HRhXQ2CgbqiEre12HUM1QJ4F8kykNZLt7dFHv95QefBmT7bxmYM",
  "key11": "5YqJThbazZSAoMLQXCFANacXSR4NBBy8Md6A4Y7YaBiy7JHqmyCukDgWGna9XNCh2nKThPFRRDKDZLgn2yVFnjPE",
  "key12": "46athXoZ9v1MjunCKX31SFtZP8BPhhEyafq9mop5rsuN4riG3RBA9bQyehHzdvbcuxL5QG3wmZVov7C9JbRkb8f2",
  "key13": "4hioFwDSsmu4nn8v18wi44U4VJ1Sk8aiHvkdBV7v29VUvuSw23ZLehHEykb2kWeizHqpeVsLmgTJzysqjMacj6J1",
  "key14": "p7rar4ThH3H5QEF2xDuvjnDVbasBdeDgbFx5saCT8DzkPvcic4h9z7DTw6Bdbb44pYrerPZsv4yBxNhrX7KWnKW",
  "key15": "pi4viF4dARznaLFq9bm72xCgT74izkc7UNVkJj48Em7vuL9AXPG1sJY7cqea3D1KzvRVRrK5rH64rTT2XiKTjg1",
  "key16": "3LUqHzNr2S53rsSVxoKaJPhCDT6mGtMmwegmjwQXWve3VM1wVvZ8f3MsXdBNA8DySbmkfP1kzTxkxYjfdn2JjMuR",
  "key17": "5VLqsmnxQFnHtWR3HiA7VpvZsFmY8tKW3Ms8bc8vJ9JAVVxo6UXK2uUQLUh9PgDFzxrD9XBABcFBqpVLs1nrMVRe",
  "key18": "5DVGgvoPk2ajmknGMPAw3inQ8h9iKcn9MWi5taSDNn9DMcahKkVkX2gsveXxgGZZoiyTqVdDU8sNTnikMFjCpYsE",
  "key19": "2xJxcpZphwUQgZuzJ7bdJt2Kt9NdBgRZMRMnNt3oSAFjxY1byndJTXpdKEAu9pscViiKi6d6vbLR6CcrwRLymqDh",
  "key20": "GZn46cEYCBFJFqNEwKMFXUaEAfGKBGjT69rAhPKUBXAZvyScSzU1gKYHsMXm9sp6XZxPJJEeQVn8acGdNCoyQvw",
  "key21": "nPDHMNUUDt89zeKwtKpAjohNxcNWa9BLvzyYNMZn1DuViAmSDCg6tHGUoyEELJ1W8cWZMiwti1skPCgt2p7Vrqv",
  "key22": "2uDfXQcFPatmtxE5ZCo1b8tmQh2dc9feApwtdMakqnehhtA7eNxP3RPvTq3YMFVdQ2eDa1R4YmdVbDncEhg5DPuu",
  "key23": "5ef7FCD4NYbCooms36sq5qgAnyCkFYdcCNVoib7VJvrwLqtEPzn2BKRgMSgGaQt1mwdVz68SdaQcMfyFFUf56vP9",
  "key24": "2cXK6yK3F8S9YEQuobXnF7kzrRFE3umyjVS5kGAyCikuazi8H3WrhvhYDZ2xrP8rwmyGukMBeeFZF6Rv1QMWtdvC",
  "key25": "KGxxXExHgw3CNrGCZXbHXBDmXhxEuBK2yS7hZF1i7AjHg6eAzL6wCWwfrLPokXs4grrsbUYxfAnjbqac1Lr7NXE",
  "key26": "2NhmigNWQurz3YucfmCbWmcEkafgqxjKZNGcGZeYxRTnCk1HUyjQYefnB2L51nqzsALUzdSkbkJzN7armcs37XDG",
  "key27": "4YiWDPEZHBRbPWUHx844FvXv2seBdSyP8YB2s3CWbzPkvH11BPAZoj2H7rZun6DBQ7W84Y9o2fo8PvaQLuEENfYa",
  "key28": "4qYEz1zCfRV24GEnKTyCAY9fBqr2oU4EGfJ9GkBJduwimQcmPCpdtuorSgHhbYNJbLVmsL8NzsidCFapoB1Nz6fF",
  "key29": "3YDsSRJE46wcHwvaG6Da6dzLe28wtPAEFBd4Aay42mvsxqg2zyFGKUera35eQ9sQZMoBwBx6jDRCjZq9NwqoJGXE",
  "key30": "4aEyahH3ELP22xUa3qPJ3joxTpV2Zc8KdfwrWHuZPKJDTH2KsyL3ZyYDDquV3atF856ZSBFN5XDFJ5fYx3BwXc1o",
  "key31": "2jtwnVBFpyUw6YN9N1WrrUPq8nT7uDzbQL4fyrvSAb6KuLNrGWgDq7WdFVZyvnAmoN79v92BvFnJdQvWye5vb2K5",
  "key32": "2gmdzBQuaTbhLjH9vHHwfRqY8QcNe2oLjDp6H14j4YowKzXBaJJyXtt2AvPJW59pkmD7rmWLYfRVabLoZ71CN1gy",
  "key33": "2pkGR55CfS7ALEiPfsv5Qzis8zuV6uY7Jfo7qaEx2SaqqKQbPu2rPcW8kYMUAYmYa4471hD6FnPm8STBKoaf2yho"
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
