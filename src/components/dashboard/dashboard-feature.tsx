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
    "5wg356WnqrkfB82Q9N1fdv98orHjUSC2ZoaBpWQkqonhRHq3zaiNC9esoALwR3eKzv4siCGM5CX25RKECg9ZJS3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pRkYfDCyB2hC6655wd7QTYpcyDzz1Lq6Fo86WyCK1P7pXMtJ2ffCUUtZ3hq96SqTgsjkfP8TDbCTaSKasXVReym",
  "key1": "4yNjzJjxg7i4J7K8zJqHMYvfmUY7U8ajpnCzQwYqrnp4fFRhKv57fETq7SEKQroVroi3zM8WJ9Gn9f1AK5DA4yLD",
  "key2": "2ZCAnLJGViBfnSRcK5pbpyW8wqHjMtRWqU8WJoWcSiDGrFkVEQkkR1hiJYPpFPTbcV5PvUtxdY4L3hz5EyCh8ee8",
  "key3": "5TDWajanC1GU5fVit5ezN5qpt3TKveE7ZKVThke9Ufe155eXQPg1uWoRjEvvSjF3YdgBhfK1ZALKCZgxhK3VrWNk",
  "key4": "3SMve4RfBYxzSZjDzcch1KwQ9N18HqphyNdBcu1BWQJMJw1JwzEbzUKTNxpUYEWWnfAAqDh54DP2TDd199PJNCZ1",
  "key5": "2xuN1okLQD9f1oYcLq2b38ZY47p6ZARMZjxMF2Ae6s8taqTQpzGdwEWenvNd3LFoyUxPG29fkNhrZpXQVb1DJMXw",
  "key6": "4vBvi1RV64uAG8ryfXPFM2wmV2JKTcH4T4kV9P3FR6KXYZrXeevnR7ZVvAQAFXL1jXXoSEoFKjNHjX6rxceN4nqN",
  "key7": "3ApsTaaJpjYVUUXk2XC3MbJFQMHm8GxuFJpqgWH45kLqy9B3Xxy1X7D84VyfNMVvD9JBsa3uUok8ezMpm8Y9WJpF",
  "key8": "3T4Lb7NEKZgnmFKE7bAkMcuKEoFvHDvoEuPhcAPQTXxsqx4FbQMjBY4fRs5jPoKVJrqtaPabNEtJVxbU7dxnX5Md",
  "key9": "2fkWx8fo4HAqXgsD4FtNzWqXyRYZTbqmMSirNBanHP6NBhcLtN1gNnVLK451WxgxgteRZCosQqsCotpHgqp2ygcZ",
  "key10": "qBDva64bSbcxXSFzyBZjcLKFVxL2ehUDhq1wqhQH5xtk7fdhdYDvS9mkrpVdNcp5uHXqfAh7gNg27EWMueWdXNc",
  "key11": "2pPPhm9pYtwmjgvXUQymqyQo63Vn1xpsGtBzgkDFMoQGxVgJCbMFMBDQVrcrHxaXkLSuqyNSTEvQdxf4D5vuBF4T",
  "key12": "4vXJj2yvkLZsM9e6xXUmCMajjdjupgqMzRyjgQS13C3vZ1uXwyrysguQ9rQ5L4UpW81vxvp8sFrX9SnHLrvohkNj",
  "key13": "4agcRsHbFg9SaSgAdXAStHuGJx3QMGw5wCSHsKQeUeExabSjCXcDdDyrZYTzKwvmPNnLNSUgL1QpPq6NrnRVzZGj",
  "key14": "4Q43MKpLdmG26Rm6yjxMWmsBQcT8sEsth1AuJ3fBpM5Z9Jqa1qffcyNfxRaVLE2hJiAvVLJhRL2dcGMrP5JFLy4i",
  "key15": "2sUZ8ma8tXTmE9y8pQw6DFGbGXxW7V6JAfY7tjz2iFkY6TJT3bmNT3kCcQXWZEpb2Ajq44k5GCL5UXVxcDwvYLWd",
  "key16": "2DVjez9B6wDmV1i9duisgpr8hDVP1nQ6BwSUEer2azj6HKvme5ATENYRudDbBDc7dfRoZgg78AsidNoeReR4tYhG",
  "key17": "5qtvL3jarCHDfxzauTt71Z9t6m25fYyMen15d99RdmSyMxj3szcSzSzBakABMXm6PYrmXZ3n8rwhgz6QjoDw5rfc",
  "key18": "5jarXvC7T4jNPFeNFjEAiPkurac6dkJt64P5CabSWBvRWdy9hkfMWU9BKhjB1AnJ3VEATzN13auH22YjEpbKEgB9",
  "key19": "4pjWaZbqv2sonBFXPMHxBp8Zkjg3BPtEG6owsAY1gQX1p898utcJYJx8tWPwDt6vHM15Ho3UtrX9fRsshCWSVzMA",
  "key20": "4D5mMPq34yfnSeQ1U9wVDkuri2XELsoLiJNgcP17N29HJZDxtWhWj3MzS8t4aytbXooswr3R3YBNRqV9zrM8uUQf",
  "key21": "mRhgkyMLzXtUXVp3ufyW9jJTNu54xobTg29Q93PZ55LRB6EWGXbWFELWf78GpNfKFYkt6LQEM8BvXNRXNabDWE8",
  "key22": "4h7eUE8C1mFyRr6UoB7D9yYmc1L6hocyMkyxfcHWioHYTBmzUBSkhK98NhuoN65Vd4zoV1VdT7NBJF74h5Cp8E1g",
  "key23": "2qBvbXPowCpjquLtkEJfLR2s1AN36ZDrpMEGstQacVfWYpaBWjsZMSvvxiepFxmxuYV8VhcR8R21423HSvQuZyLq",
  "key24": "5pNBtnyPbsTEJL8DVzYwLYusdr7hEa31cU8xbcYCd8BAt7bnw6dnpEZFSNFZ7Ph5y9EmXfHrBjBBECLCDYtgfEjp",
  "key25": "8skudnbH1nY58QsJ4D3aXBPAYWe3FQydLShbkD4fgmNzC5DZLTgBpX5xMq99aAhDGkGBRM2WzHwH2XXB3bN4j2e",
  "key26": "28pweQXNoSVSfzDeSDU63juwdubhTTmiqxHSkAQsPYZCe5wGHjJjwbVFudz7DKkU2eySjk3KvzSHB2Cc1Bo98ncb",
  "key27": "2naZUsBpjML5mJ2TA3H17mhUbcJNPxDFJFEUxtKpQkfK6bAuQPGTQw1fan5GvE6bRpbAcL3skwTGgciP3zv5H4jb",
  "key28": "2UQ5DhEYXu8GNRwg6yAtJhCw2rAkpPwHv2oB65q5SXnSqQQhXvVaj5cPqw6rRgPuHfFqgUfGUBYGHfk7zuXeiuVe",
  "key29": "4NU6wT4EMo9eC68xomzfWqssM6NhmsWvLS6huGVJRrMgTajN1Ld4c8TUqspjAeep1iWF2rXUfdV2aYttBfURig5v",
  "key30": "5LiCRxg1JW311QS1yAWETf62fCfywKQkpMrBSH3qfLbA5ruv2prZ4zLe7EJszTVZo3wDhgE2zvXSvERb27E8DJkf",
  "key31": "3xC5KckcNj5yndU4ftCi8i367hn8eaA4DiR28vuuj29HxTvbMayaHPDPCMrecd1ELSSArn1Vdevk7VK33j6CEyaU",
  "key32": "647s3uT955ViiUf14yjff6WfAjTRL6G2qgrtbo3QGURYyzoLSMecwkyLrpzfNQ2vsPpTUzNG283kBf8DuzGU5DcW",
  "key33": "2FojjAU6sTzPBmVZLZ6kSKt9wrxPtVNr2MBq7dVGwgYD9RGBzv1eu3Ece6eJUfXXAUNTxzBv7msq5w77SJgDKrQo",
  "key34": "5GchbNZkT5WZ2hCW6s6jHB22V1mJ8dJcUtCgjpfWr4MrThJF5rxKDBNfngJDwjhGz1pAjbP8izudCmjhNRinwZKm",
  "key35": "2FfHYLyYdfj7cfGzHhLJCEb3fn8z7uXSTFvQBGqb4JNEyG13CYE8Bhd9EE5jG4wJX8qqAAswY9SGt5oXDT14wroM",
  "key36": "5fMpvfo8GTo7oHQrW57vchCbvcCFiL2aLxwDdWKn4fvRFj4TZgMXAb6eG5jvowZrzNsVbywys13aRDsUdDm5EVog",
  "key37": "5YJDNhFv7Xb2L66aMosVkL96wXWcuiLYcXgywRQ6TwmtNDJUFG8CV1KNyxX4bHYBYjWtYbX5mMWhgHUbS2MYeiAw",
  "key38": "5VGdcyGnRM5jhpCfmchXuJCTB4hBExJZoKGcGeV1RuupAA4qbQBVsRoMUzUxRyQiUkwpvoaJaGYN8uDVVjZiLAfS",
  "key39": "66vtNKUxFcYc6iQBndRKZV4hQr7w1RocJnuSbeTwju7QYuH3thoag5tQmhrBQCTiZMFGGYBxew3mYfDGL5wemyMq"
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
