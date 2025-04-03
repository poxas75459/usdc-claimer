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
    "3NeKrh14L1GAtivbqtPeNhTq3dJW3TxrAPCKyTDqgpMp6ZcSoGbiwTNTXUuKgAYLBaHC1dVJ6BsvGUDdV5kLuceR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EfM62xFNdEQENZ3KPRJeeHvvWfuE2JMp8zVqVi5eZ4cdb2vHbMjAcK7u8CF9cRYL3j5wxXXMUMeSjEcGrJ6Hsma",
  "key1": "g9kmCTvUzJ3mfhucLxPELkjxXy8PdcRLLub6fdsU29Q3PxaQ5mHoY9aenit4L6mCAGmTteAoaRdCUgzxiHquScX",
  "key2": "4cXD2o1zqkVJLWwAHTgVER47BqDTcAwbzr4Mv5PeYSZVdUdd3Bj1M4kK2cvExP2VBJe9QmigpyRBCeDmN4vRv326",
  "key3": "5ABcrnwMDGRApafQDbMAZ7DeGTFaW9xS2xB59WzhZfToy35Ej3yDF7HLYZ9XBZAhGVVVENy2y5cyy4TMPK6tBVsU",
  "key4": "2oMF7NYFvoLTtrsyUCFnSV9xzKMpfcS2L62nJvjK9tGxPjpG3Dfy8GLzV95kExWNVDnEZGBszdYy4CWXc2s1MPhg",
  "key5": "2rviiwD6yF8a1kQgnjt9TyhALQVapEJqHK5iB3qjdHD7vxxBUsQ8HhGXmL3r4ZXdQfevEDwzHwNHkmUytfKjeD4t",
  "key6": "RowD52xXXvSqUwM7BqC59PVpxS43vivEg3UrN2KN9oMf6aa9KijgwCvaGtCJhb5AWSkQyML7eFrc5Do5mqRZS14",
  "key7": "S9CGAofvBHorC5t1HL7ZgGjMXaBmHQZPtbzLpwseBs447nCRG3s9jq5iuS5QrgRH4GA47iCzMLFDhZQbYfiTqdF",
  "key8": "2xScekEt4nHAZ1zCnxQC6DvwxX4m7x5Jn1DZ5uWjwQdF78pVRgmJ2AyUfTCUS1bJhgNMkS4zjDnNJmeAdQhcLzbq",
  "key9": "3DsnDT8iuQ4TxTSBawTJZdQzjre6jqQJVHt6tM5v9oemWMzwhY2dcsJb1xsrG4gHpQZfkwS9xtJkHQKs2uhc5hNB",
  "key10": "61DxQLsf5zgJRQoyNq8tZSNJPAKQPss6qH8gSemGexG7QzU6xwynkYoPNSh2NMw1MGuZj2v1rWtaqC4wn5pFkMaU",
  "key11": "4ZZDqBWXyLn2LXLJo86g9Y7Rc9g7yx6ovWDzZQPe6ntqTbGfR2gUVz9EzZwNx8fYS62AkubB9n6rW3CVoonzFuS6",
  "key12": "cxGehZ8CpgYfouuFZSYsMQXf9mZRLeqSp9RQJK9PEztAbEziusCuMQYLxW7zWASTPrGgCJiq1GVH9cbQ9TiZVzM",
  "key13": "YRG5GS9vxNyUgjYMwfKpV9S4TAiDgkb9Gusn2k2vZbMquFHitvwvRb4UusV8R9UgvX1hf9cy7CDgi4L6HVJNDn7",
  "key14": "WPiZPNH9cTkex5Bb3YbSHdegcpHpjnBCk7jyvi9AWZEAL3CKxbdEkotXBbv36RHeFvFgrmsNZvjn5y4M4cLM53C",
  "key15": "5gFYLfoaLWp9W2Lkqgz3nJGyV6cwjsA2KGnMzh2i79BEzGCAxs8Qdto6187scdgCbKpLTYMt7ZPqJiUZ2tDZefbs",
  "key16": "3Maa6HBjczFy2kuM86dWx2eES1Rr52ZqwjUuYVL92n2pbMFeVWywtAuc5yyJQWo9g286A5ss2QJzowjgZzD1ypQ4",
  "key17": "2sA3rgPgjceorDD4SG8JRYuRrBRG6FZXjirHqYyTYpaQT6LqQMQQHMBpYJbQdvF6KuvhmBejgkyaZMHjyqosrHGd",
  "key18": "47JgtE6vAQe6zooCYtoFyjrKqGrcs8PznWAbnKGkB8EfacDwa2hbysVvkd1qAjfyGzitRD67omm4FovTBCR3DEpX",
  "key19": "5KphfUqwAFjCR6qxpjWBrT5KsW2iRaFaUCtVVU2TR4cGwfGav36MncEj1KayUE83JR85922NxAFw2XQ9nbW17N6d",
  "key20": "5odhtY8xTjxaLDZbeyZDKbKkiwyNpEzzFLcXeBFVp9Wr6wqxGQtgY6PUAdS46ma2pYjU6cm1jksdiX33AHz1cYo5",
  "key21": "2Va1tNnwiRzN3xswU5UayJjyf8nKJASE5fyHULKToaDoS5M7LckYdnnGjEAovDon2zxkE9krmMUHvbFyj6KavJHp",
  "key22": "4bRff2Q417EBx45MfebeoaJqNrEeXLD5mJKEswaC4wwQbBfTxyYFC3H8nwBu3xjwNb6q58PKgfGNzpGE7pSUXMLk",
  "key23": "4tvLZ9QcbpC3tAos3owDAeL6CEVgDArQRHARPDuB57r57na6FDEjs4YwQTWfBhX7N4ekrUqRCiP4FwvmnKy4dC3R",
  "key24": "58zDrUV4LWhayosVmq5ga25M8iEHjAt1tdWHRzzQVguyWp9iFebftgQCXLqW2jWPLbopeE58L36K2259XDD6U4GV",
  "key25": "ExnvLrytohjXPG6tDiNCE3q4RZq4epX17gLnMKCgMEUMMzVcWxaaxPk22Xd5qb5ZdLUotKTZBxjXjBzLczgevGp",
  "key26": "5jtv6BbA2xx9uvs9qLscEuTCjXwhcBEmjh4oG8KTwzpqkdKFqUhrS8kJUZtKetfs6TJTbmmSApRAbkWKgH73399V",
  "key27": "4WaidwAJkSCcTokeCrRTPCHUwrDoi89AZmCxPPXZguZoCZTwAxwD799KL9AXUDY7Q5vDHaSzqvuzhhkKbvGbaBLW",
  "key28": "26GpCzTwubipnTopgKB4bXtEFxXFdnrgNmo4V6b5H2nMKX4RqF2ZckjKvT8Z5p6Co7bw2JAFgsQJWaKmD2DhC3gR",
  "key29": "36owGqybqfb2742QUU5qh2L8efP6Zsode2ZUs67Vc3g8Kc1FF9HqQnGyQS6CZ7fC85SDykJmLePY5AS89Dz4rUWs",
  "key30": "3nxe2CMM6YXirQYXvun2yS23xMkNHWhXmb7bATQugz8eQGdBj9ifJJW9NNvuTzTZ6Mo7nk8tMULmLcUSRxjtXVip",
  "key31": "2B3b65iAYTCDg8BpntGPXq2vRjd14sGd5uzukK1HYM45MeVD2ebufe7o8mGpw1r1xz1N6iWRGDhwNze4FgUquRYX",
  "key32": "rkbGpx5JJH5u9FifC2MaEJkPymMJN2ear81P4javyNCNxru6WRgwvx1LdkHypHpXvjpb9NA3ppV4mgMoPY3CJvt",
  "key33": "5aDguza3L9LFew1H5QojoxaC4eDq6by44qoRZoJujukoQpidVBUfbWA6LVCq9V7JJq5eoFGyLNE3KsY5MTBYd74c",
  "key34": "2HdAAfbX3u9Kkb4WWBmHUzeYGUxPAbhYSGpDPW58ec92rat1e4Rj4ePkB32ipj4uDtr1YhEHwVd5VtfrWkJZGt4U"
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
