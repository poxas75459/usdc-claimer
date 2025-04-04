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
    "2XKJUGcYbz2FQs94vQpZ7WL2XjGibmbcAyQvmBbdS9cmzdV1x2JrRHCK3zE7FFEj8EBmrYhvKQMkwAUfJus3WkmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oWTyc1AyrREZW9Ur8LXRHmAgftQ8TL9Sqh2KbyUptXZwvATbQ62zwDXAgUAna9jPuvDrbz2JVPKWS2sFobvp5PQ",
  "key1": "2jLPp9Fy5pYdLTWP31vwLQd8XwFDjjoMdcuDtvxrnRLxFK2iaYT5FnVz1iAqZ8h61PEBX1x76VYzq963PUVHxzMt",
  "key2": "3uWL7BhvjmzrFuoFBUDeQz1XFLtCbzoupWRVWTdwQmLQuxbqd74fs4Jb662RNJkchfWpkeL182XjcuabmjfcUre3",
  "key3": "3qkYrGiiiR9FBhUxtcVeEhSrMnPBRYre1z7tnVbfDiWH7qtBzbU69qY2pLrhY5ipTW4agcuQ6QhZVwY6Jt9k6y2q",
  "key4": "ui2SZEieb2TsJGRmcCoZnkssQd7Nmn9afCwM9Q9hdQdtgNFaydTf53wqDd41izdpkqt77yeuhWdzqEQVRegisX1",
  "key5": "2ZfWdq8fH8vTJfovozwo9tyoriedx5vx5CHPKA7NRNVrKLEAcS7pKrJz8ZKYXrMSmb6X2AGjutH5zqTCYGtfYLzQ",
  "key6": "syfP8Qs8PZJhrTjtg9rQS39No1VjfyQL7gmeBEC9fwwSbZeTUfExb6CXYqNHvJ2G7LgBdrzZre8ATDQUgNTw2Mp",
  "key7": "362Y6Tj9bDYFJyFoA7WdznLBin26uxd5NQEfaJTvEERra5BkigYPXJZmRUQKvUPg2SCVR2VzgEbNtooc7sQrCZhY",
  "key8": "2HHp3tvccm66nzDMwjSrjfeVCkYwW1BRLNwvfbLmnJ5FAxUa8Z5crPSGJ4kRrkATzswmXqr2najW4Fq4oDbhSTKK",
  "key9": "oYhBoZub81CJFQtcB49JRJe4b14mzTKhvRxTSn2nymKX6V3XwjPBDVRfyvL45TZqyThdcD2NwwH356gUS13MyoZ",
  "key10": "5bJszkw71WtUxhJSdDi82HmsonKuBrXQ6y6dqV68CSYs8yLYZqwKA49EQT3TsrUS96FkxfRGKBkBrE61CqWvUajv",
  "key11": "2EJaea5w7YcJtBSHRJjKCiFnUjNqSZf2UfzG2zvikzVb9hJXvBjL9ueQirJoFYYowMeQAWLmZC2Ke8ixJE65nzY2",
  "key12": "4Udfg6PCkemZqCLruwrAseWM5dUQxPMrNFt9vuN1bU5Zqrpt6EeWPaoKe8CK73yLqGGpXq6xuAun3k9vULewL8A1",
  "key13": "wEhxxqxjAum8wxJJKb2Vb27ddnJfziVodg4FHnh8KMzRjgcBwCUqXpw7cn3JABSBfwQ6VgRuyxZALdExD2pnFHi",
  "key14": "2vMH9m3ByiKeyzMRYcJnNWpbof5EQFFtVzFHTKDdDMfDNy35gZn8zqS9fmhVsoPaDWWqUa1aYJxEvWZyXGTGcvFw",
  "key15": "2nrH41dCddMKfpQ7wRxJat19t9Rkb2xuEV25QQFTXRL826aSR4mjGaWGvnJCzHAQEdFetLUFYTiJiGLJHFw8xqCb",
  "key16": "5hqfZ6YR2dm28E3RJ9P88XcZ13gRdq4eTG7LkEuV28YrvjUHk4U7Uwp5Lyq1ePPTC9ugSgHKa3PSggNkL4RprEzB",
  "key17": "46cNXWDHQr4xnQyBUpVzzGUuWtNzxXuxitBF2NhpNS3XzutAi2QnYGbCDVUrzrTiT7zWtYgQ4qmxYqd22ajWg9E8",
  "key18": "2FpdqbbYpQvUVBE1CWeU6xiAMMdbXNGgNmGSjZUe4KJtpTaS6hnrtVoa7ge69zmRCgAxnsGwykur3sCRM3uMKNRN",
  "key19": "4xxtsnonxkLkjvJGWVWWEBAw242ptKXPBHy7WZDCbh1wNDvYKrYVXS3tQr46eGJ9NFE8Y3KjaCKhm4hFucw16WGy",
  "key20": "Yj8v73Ptkd2qBDTTQK6vW66hVUTiYTUbJwjWjYqGwyYtSXPYQurdK4ENYwLpD4KEywHtkz6JdGuVDpXF4srz25f",
  "key21": "4HGsZRaesm7xHzhmbTJL8vDVQAEt1d9Lqze3desqhGjgf8QjV9L4qVigGuaMLCZUA5LDvvPRWjdiSiNRoxzNMain",
  "key22": "2mF3Lc9AnzuV1836EzVw6tPW88sSBeF4GSaE2tDntXpfybVyR5Q2Ba4e2YjDbFDyno7btg6LB44tN6U9jAajbMSZ",
  "key23": "4peEGrS1AJrQ8YeG3A4v6cxDNVseUVa9Vb9PGfiKvzRVVC7Z6XQTHBj2stbZCLzCVP4oDitD5y1vhdB1ELhC3TgC",
  "key24": "5wjRNcjN1h2A4FUpjGk5Ko2tRtSfPMQfBGy9six1tunJVowniJXL9sBo3K9h5vR5WHCZW3wTK6fabY1pCasfVLeh",
  "key25": "5LTtHFP7sK2mRscGpgEvZY2YKshxxzLLBNDEwSAnuJ538w6YszxJJHoiGv4u7YGH8iKMWNtcGqTLTVZP5aoBQbcY",
  "key26": "2EapbzrhjdhNrjwzGZEZDwF1m6Nc8uUJfe2wiWP5Jm6bnpxqJoU5uJxdZadiEzes42ceVvXywF2GFoQXyc2mubiS",
  "key27": "4x9Rv5KhUM31EWUktx8ReQwTgzUSgLoiueg34Hs7QVjB5sCEUPyFeSMbybZkXWpTMLQg5Df5sLgdXYLso8XHgtqK",
  "key28": "29DrGVN95CZCzuTU3uxpi3fqnTaNd9p2ECLpPunchKPzoMJua9wxk18g8kjzhHoXb7r4TsqLLrcgBtFQSU6yeb28",
  "key29": "5bbeA4XgioekWgfKEyvDs1v9BJAG5fifCVyiWswoofCG2sAAjVEbLfubvY5TuuvoXcwkCrByjgmgVnniriaPieg1",
  "key30": "jgUR76F8ij1Z5kJyHEgL8nEETXfNmVjVYVHAgxNYg6iYpv9eRWS1XmwzpqW2cwDKup2wdwZvSpBYaUC49qUy4uA",
  "key31": "4mRA9prRixf6fui9hHw4M3oVHafchJBP51KUGPejSA85hy8rpW9vXpouXBHFs8V1NUiVhbHC1xP74FbZ5LqB48v4",
  "key32": "Vg5qz5uNZKh6ZFES4cjZcCa2jJbHqqd9LthjeD3p8ve9F2trkY6KnpHPo3iYctzVw5jAv1Nzdo9pJ863JzreFFo"
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
