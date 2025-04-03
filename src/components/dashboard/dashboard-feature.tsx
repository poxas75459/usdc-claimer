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
    "ZQANDSZKG4k537w9N1L1rDGSfTLozmVQuqSywW7EzXuCRiy5LKbDAfjD4QBrWrWeFNoiNKJtNWE4wngvv89BqT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iy1HRjLnYxfwyP7enDi8XmjXcVWJQXRyApcsmgPypmyedRH1VbAw7vGdKRtzcKXCLXRmP1n5rvYTyUb2Wqjj2d1",
  "key1": "5NKAWS4mvgJ5HDmyrUHS4iV5cWaku8nEu3zuL3tCYbNuUFG2hKiMf6MepQ2oXgDCd7nn8E1r2FxiTVxYsJg9aWzx",
  "key2": "48KigWvhQgAPmcqHocAkENST2WtNnqn2isdkxcqo7q4q79V4qfQ95oYfKx5Ud19UmKgK7aZXsBAPKAvdfMZpxU2Z",
  "key3": "32qekHtqYQ2KKSJcggafeJQw25eVaTGHTrQVXFQWvr6X3zyq1iNxWN1SNpXoWg28DuZQdXUE563hE3Y3AsWc3vz7",
  "key4": "4pW67TXiqcz3EFmmxishG41WWHzDCL5jDyp4A3LtSiPd1rFe31vDZeT3pvZwQNnq4xvEj7GFkjnUMh5NiFB5AaDz",
  "key5": "2Pj84in6eWXhPLz7vPgAcr8Chdz7GkePknxcKP5YEty92TJpFS1TYQ2ESiZNLBb9XS1VBDJbPbnhKKNzTbhUSWh2",
  "key6": "45FBcnBwrSGW1xJiDJb4Kb6MmQM2YCqs5DYXrYff1VuMzheQDpAf39SnW25FCC44PhUnEtuxieoybrXxppmtZEVt",
  "key7": "2ovpzaDbYEsB2fQEZbX6D67kyLuW1pWrGbc8GW7RrxjkbAcfzigwKyv1hVayM9dtUNJN8gBBwhkrLUdAPDvS5w86",
  "key8": "62dzjtKiUysHAazFCV4e5hxK3LL3cP7PBoY2JJtEjDXi7qcMxShstMgMSzpHUhqKaHNyGB4gRDhvZ6jSuTu53vWW",
  "key9": "2QCnqXH2j5j7a9ogZrkxubCF7pJu5nwJvVfXAjR2otS6WZgvsvmjQ1auFgyYhNjzM7cjJyyNfGrNuyYQjFtpj2Xw",
  "key10": "3dztXgwx1qyA43wdJGRDDz3Fa5KZixJwjCWZe8gbkbbqRZmJwoh9jK6S338mN5LJrEgWM6KhFNSEyD9pxW383prr",
  "key11": "2q5wAEoGPTeHqUa4HhBJT8oPgzDYgzXAVkojjFAk6gT7Zov6VPwfbR2RhT2VoNt3JLTra1c8Ahi9FaHe9WUHG6TM",
  "key12": "2NuSCioPe3JhAcjkJP2tULTTEeuopZv5XPb8LpLN9zTmRzk7wnLfg9j8znxmRbMExnjkL4QAjzBswNkYWs4FhzJF",
  "key13": "5s1XAPkkaXedausHF95roTHVkjXcMnzRWfubozivP99YUyjTu5AxNZaDPaXcxounAFeu9WDMiWMyjWxqbMGHmXkG",
  "key14": "2MAz1cKZ5JstkG3RbZY1NYoYmx6sdGSSX2Wqsg5MHwGZ65t7PuYuCLt5fETRR4X2vZ2NER13eqrmd7w9HgvDD4aS",
  "key15": "aYV5MjsfndPFEjkSbHnxeKiVjw1iUycAuGaac4BhjiBwhje1jx3UrsoHEQJ2HTne3SeTdNpQP9r6q4rELbSFKNm",
  "key16": "2VuNCE7jwGnkEm8V4kAYh92DnXaDZzZBZMysMigQZSBQD9bMwSjmB1mU5gJLLeipJSxGpDSX5LEj7R1EfQ2tPGHE",
  "key17": "U8CwheGjF5aosyYisxr2K1ZpJ1TvsAsE9h5AjouxWS87evYdhwo2hzbUu8H9z24NMk75x9Tb7Vx7aQTDjc4j3HA",
  "key18": "4iahZsCAvRQ3k4VaWNaxJqwwLEy2LnKYtr6PBqkK8kcwPWG4EPAf7e734YmzFtfkkG7cVRhupU3voeyg4FsWJZZu",
  "key19": "4jgQ94zScjAid2B82ar59mVG3Y4AUWyU2XVzouC7uY9bTBXEvHcA7KCtL8VNfZCMJfkdYfCvARW57ETnkxoXhHix",
  "key20": "4z9wy5VaduC394kmsgWKUNJDQeV43nWhMJij7GqY9EJD1GZnDEDBRJKAJ3h5QsMZcBGx7uUeQGoKhJ1iLdg2v584",
  "key21": "3boLGaFV9fHreXS2MyGCUVEM98U3vNHic7C961RDR5G5yUM3DV2ofbqEApwn9WYxwVqkPnDMJXDmvmozyWtCAqvh",
  "key22": "4pswQ3TWfiZJCnkoGx2gg48FLNFmrZ12THDtnzsqHr8bz2ngK2kqX1DZjRdKQB9EqghZU3w7zkyA8ozg1jrizFma",
  "key23": "4vK9T1knDDgrrseDqc5aBynaRgCfgTciUjrkv4CjKSvkAawBmmAWN14AgDJNDJjdVGKJ7fnEcRthywPS273zv8JC",
  "key24": "4m1EjvH7U8VMRy74J6Jnfz8dasuDoq181yxjeBU1nR4C14n857cfu8v9WKMV3YbA3BxzfHBgQjyavrBL8ckQ8iu5",
  "key25": "2V1EFctwwSCuDYgJ7vfK2Umwm7Mfo3KQySezPfY8R6akPFEjxuDb3vwQtEYhH5XZFL132UrBWmKXCeRASeAa1ted",
  "key26": "3eaynjqq6tcnFYNHw3XaJHng2S3hNsCYZTWWsLF4L4XV7znjWfZZ6sTGdbcET11F6eficJHCT5RvWkTmRS5P2DyY",
  "key27": "2Cc6uLfiotWDNvv7hgg6ct2UZFegcJUGLqHjRwnfytVpxwN1yBZuznrt7DB5DpgfaKyZZyyjQRDfcvj2gdfpxKT4",
  "key28": "3t89TpZjvjDMYsVyULFBUqoaaKLH166WN4B4KrW68C6BErTKQxJ8CJGhYTVk1mr7gBi9UcbZaU9M3dbsjzwqeJTN",
  "key29": "5RZqXRmAqJNjF6zcGoPcEhufmkc8FFeae5nB9eQHVms5F6CsGK9DuBaWp1ocJi3JmPeGneKsm6hDEwu4LxFwRDiU",
  "key30": "4WjrNPvNUbsDmdqZEUGQVbw2CBJ17QN7ztHS63Lpa4QaFc5R1w4grfWtR1bF89Qr7E8c8EsiK2CxXrwL9BLWWsDu",
  "key31": "57qVnoEzNTgJhEwjm5ML5MbrSqJMep1BqLKuxQqv1q5cWcA3vLqKSnm1t9mfcbxD3wjTDTndhHyH2t24me3JBvW4",
  "key32": "vdffCoP7R7urM9r918QVii3NL7WGj9BmjEXx9KXfMSPCJYQ7u7LyLyCKms8iXq55Tt3tVvgxX5W5z6misim1nB5",
  "key33": "3om97LujfMDzRwrqpXhwbap6dcQVexkfbz56FvadEZDMemrt97deNBXArn24hUKTJugpL6U4KAe568eMRVBULnFF",
  "key34": "oeF4At95xZyEZHhKLWeHEwHvrkyLZoVrNF4RSumjiWVuHM2pxGYhHZKZZyFB2JySJ7Bobf7486SmTzPMAsXFzGu",
  "key35": "3fMSmt8HjGNNL8AG9adgc3VYugHdrv6nH3sKNWLEhH7tk47FMhpBJG7hvZWu8VKCkX4pP7fFCHdrw8XfopjZ6GjX",
  "key36": "46rmC3aBqbaQsH8WDHmqz182X7w6z9JA8f4QpYaZNpipKFSNzA9knFY9dodgkCijotk7gT4gy96TC3eW7qaVKp8J",
  "key37": "4NnXkuZcjPrva9yg2BK1Zx6cp2fRu33BwuGfMiaWmoBzY6vUfxot4PTRKLTbz4NWaBozNERXw5mvXiU7TCe5fXt2",
  "key38": "3vEWAgZb2XWyqXhcM8U5uw5fiC8h3cnDjmE1iwR91Q5irgtoWJktB1yLGbtL77BE7U1v8mhgU3zxBB3P2YGy27xb",
  "key39": "3nXsFosgvJnocdPcP6BB9izcZTNzcCNuAmSbZqsiBBGn1E73ecunyVr7LvaCknzz2WQPXYDCH3XsWpk36vEKH3QJ",
  "key40": "3UoWDHMmezqMvKRQiSpJYJPwBB4wCj7V5petvGYym61TVGvVVR9Ff1y94xQLazSwB7f9iXL1UCuZRpWGnnum4DZA",
  "key41": "5PGv2dAPpNgqSJWrcqA2sUdsBd1bLgSEJwvmr9aY6sY8wwWLoHdGAMTY4x1RhLSg9Ka89wmc4UZrCD54ZLemCHXH",
  "key42": "42xvfETABeafEwQzM1BGYGLgDG1e2JDSwsJAzcTVNRUAwaP7e2NwmuKB6ABen4KPd5Bn7L3CeZaBhZWWg3NmYnfc",
  "key43": "5ZxnZX6CQCYbtRkGQ5U5cYs1H9Q372bJmrF8Yg1GPRr9PAPrtafvBN72MKZoUABX6HqNh7GN6CTGK47LfvK1hcqd",
  "key44": "25jafsHeUoTMeftrm7RNEPd8QsBtTWKjJ9ESXppEbTPDg5ZEVEULi6m3Ni5rkDuG7UVosrWEG3nf24RsSZL1N5R3",
  "key45": "55HfZcebo5s7ZcGxwYaW3QVUen7bAZEvuEJyCMbzxbCjBRszH8R6iFwbyC8bF6RbJ51SpKx1QEAQ6ucEejLVFT3d"
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
