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
    "2pivF9j6SnSLun6dLGJsnrVitF79fnu7KKnumPcUQBQbQnwjGwufVe6WK8Xrfnqsdwg2YcTJAvgE82RSF9hkgstd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZgNWoAkeEjYSdZHC22jbK3EysZ4DavySbzzNr3B1VwAgrCnV1hXrgtDsVbsHLpEavY4BFK7bDAMnkT8BU2iXoxV",
  "key1": "5y8eSrD63122KUwU6qiXcyeGdpSmcXG9Cb4baPLbHU591TDiC9vhKaaHNy1jMz1cZYUTaUsjmhjWkZJzDQ4QFNjT",
  "key2": "28wchJZkC6e8i7eg4daXgKG1XygsXYzThhnURwupJPyhFieC7GRoVnhZ8cahzvDsN4p5rYKhHoxrN9mK3GCzSNTD",
  "key3": "LjeppEdM13tqE9EhnvP7QHU7uMXNCyZajdN68hDouySofkEgUkXEifECodpbGAZozeXmvgnMRFJ3pY9Qs5C1W3J",
  "key4": "5BZrPyDeAk6bCMrNVnrKEMY8YC4f862bG2LFPvb4vVnYLCNHkA6eZ58uGH5hfNV9xpKN1boMZEqgi6K3aUwSXTa9",
  "key5": "49WMzKbbCBMqgA1VhZpwZ93Dnb1BkjJqsGwe1Kga8fpaXrWi9LkJdnd3L86w4MART7koEJUVrRxtwEYvbgfviASF",
  "key6": "R6rDKvBehYfjT5ERpXCUYTHGVtz2ritdFGtF26ErsDHZboJhHUzQ3A3uMJm2pyhkF23ZjHiXJEB7GeqvrsqSy4C",
  "key7": "T6DhGuniXJdYLqXDxqjfBoodNzYgoVLEeuv15E3ex2Pu6oGmNJnDjNSpK8F1JpYd1yypBBrXWaQ56FhQ3njBEau",
  "key8": "647LpK5i6PEpkG8zA84jQtk7vQjQqEaeVWNgJMGjMabSo5di6xwgWV9tSy3BiGwYkZjN1nzTeBYfy41sYiam8YFc",
  "key9": "4UewathhAGFAwC6BXgu3fkLRTk8YEFeyiWnucoE5ZY95rCCMBUuCoydad93FR1fGFzuKVcTdakFKGwQJZnptdar",
  "key10": "39H6RuybTxuigHzVsUpd5uf3qxDGzPdoxWAfDcJMfc43N5E63qrUshGZX4Ukm4seYzRXjRetjcLyK5P7UmQodrMd",
  "key11": "4qTDGCy8iEriuoiTfzBTcnZaTCM5Ea6DGZ945NsMum5ibZH7Z3i7cjkoHpP7zWadc1jfHrTNt3hmFoojsEPS6WyZ",
  "key12": "2gh8ZNv3N8QEKPSr6dsmtcyHcCghKgQZxo7wvSnu4bM5ZxrWfgwzK17KsxrwrFS71vyjUf21tQDHjorGUvw9Hu93",
  "key13": "3k4LvhLo9GZVfN5fwnZKYmRUvegRt9jQo65hDsX5nbkNiv9dTjRN8soShenoRbU2QHBiK4U3HSicPLJjrTaiPRAe",
  "key14": "3QnEVD35yrL91i8izbWeZXz742puEovMRDKxJnqCg8TJepnn7npCszKCJbxzS7P31Fn9qa3C5M1T57aQvhasLYrS",
  "key15": "5shvoLgmDoGbzCjXvmp2NCKBqho8UqCyKbezTQbewSDAgMbQFSnzYDRRmqqrG3AbfVsPZ6TByTy7h6KADZNTHVY9",
  "key16": "2eUyvebvbe73a7vsT6QYVL7hcSZprgp3yULFnZY5dr36WV7Cx6U8hRLbREuhkXDEUfhHKQZD45eTztwAvHLrVcvG",
  "key17": "2WQKj4qyd2nz6TFRqsNz93xUBqhsiGR51gBQsSoqdc5QyFsowZjHs1EsAr3PLjsZGeZSb1RBWx2KSKSjuNUDAuFm",
  "key18": "2NaBQpptk8oAHj6nQn248RsphKUnj941XxSodcmjaGtwv1EiMX3Za31KM3RordfJduazYxwaZXp6zMC7akmJWYWP",
  "key19": "3GMN96PsvNTfMyyhkX393uUhPf1xdFtg9DvGqdiEB8wpQXHyD2HCMTz4X2uCUgo2LVJrTXP6nPpHv6uvwsAGVWQV",
  "key20": "pWPeUwTGCPFG6D2G629d8NsY65ZF1BNwi3MS4V6gSGgP7bexWojb6b3YkheUk93v9CWqxwkHZ4D1vZTGhoYCKyN",
  "key21": "5GGMvVYDM5BTATASq9vPvEvmcu7XWi1RkPsfZrKWKMBBehobrsVRaGKN1pLo7sEg77ztr9qLxsiaUBkECxs1Bq4S",
  "key22": "4fSu7LE13g9dMZ4bvcfEu6jLPZ2EGLpy7Rf7AC74NagrUsguPpVjLXZB1h6Hdfz8jCL7YPkVZbgE1bqYov8PEHKM",
  "key23": "3EKVQhbaFhGrL3UokNJMpXnXUbVdXeigGCPJ3axCyKPoXZbocCepD89fQVCTgM9hr1aEETTWowk4rFXdeEZXXG9e",
  "key24": "5TUbbmknp7cBQcoRX9GEeH6jZX2gBMhJKDZaypgEnmdK5cgw4P6Mukn8muEfKthqhfsT2DLuLn8tHK5bzC5hYN8R",
  "key25": "3Ft6DYEZBizAYGrTFeVQu2pShVbqAXaYPW5GBQdj2xE8Lh48SqdaooT19sScELZN6s3rrYxFuVwvwTipYDf54JF2",
  "key26": "3dqKXP9zTATUBbL3TwcvFamQvixJL3BBPHTtCb4TibpqbeGxQrY8hnDbBWdENJUpbPLq2jgJ2xfEcaVtbddFpHsh",
  "key27": "5eFqsTR5FjVJdNiqXcNBKGVJ888BnncvfmFKvYoScHczeGvz8heLWi3oyzket4RM4Xf3udUFg3vSQRAgsyjZ6g1v",
  "key28": "3zvp7cmRUr7jKq8xCCG4bqhDczUyBxHcS5reyPH9WmgdheNwTtycojrJAVLiAY9XQZNVSKgsiyFMowFkL4idxhX7",
  "key29": "5V4o6jSN8SVha7TTbjRZHXyU6q2KnZ4bd8R3KricwFmxZUMLBRD56km8BUbfsLSN5xMUTZtFsJf3hw9HZmgLyLXB",
  "key30": "4oJQt14qv96o8mL81QvF8Fjd7KCJgKrynv8WRKVEcX1zswjsJDnNLE2RG1RfhkaEeXHtZFVttJqibnJVAc1ESu9g",
  "key31": "3i13iJuQpfU3G3N1mBq3MaJRTpQKQBXScfBBkfLbtnncKGKPDcTykobf3HJB5aePM5KoxQ6sLbnZ3hCKeWUGrzbX",
  "key32": "4e3kz4aoTU5ksacR9wQp8EuWXN66wsveLZXy5RFRYCPUqZoK6Hn7gwgvHfyy6XDBjseh4sid4pDC213TocedeAGT",
  "key33": "4zF8UdDQKHsVs7ruWBWSDUrQtgXPfzJirgDD9uHenPsVouTSiLMxgyPqV1NJLbej4sYmVxFzjrsAjyRdzBzkK5Ku",
  "key34": "2vFA423enEqKr4LQ98jpZSwFjPYpR1wES9KEpE8gaGzyxhuSwz3KcCyadD9PVXdzYcTnbVMqQbdELyoLqnWT4jmR",
  "key35": "4LsJHHkwPSL7ZZPBaJc6xJyH7FYHt4pvxQL4jkSc1VcXWyCb1hHF9C8bbTF4ADVQzN7NSg8n6nVGBqdddfmGEgGS",
  "key36": "2vE2SAYJjQUWeaedY6ucFEP441kmVFU94qg75GmAKoo8j1SzDRd5ho331DSUCsHTbZrdZP7uGSj53AdCFKovt2zJ",
  "key37": "3PfQwciVKS5QEwwJmLHH4KVi9TYfxD9UEoXYrnMBtUEkQd8YzkrXmc6vzyMz4vdVY3HBkCA4NsxuXYRzJMGvWqe9",
  "key38": "525xpZmXoYQW28PewUr8zQ9CMoPkmZYq2MQj5CYEX2gLr1yLnDHWwD4EZU43oHMRxnRd1BpN68RhHdci31yMw6yw",
  "key39": "4QeG8uDdPNnrWiUB5mST6UaJdTb2WgAPf5cVJ3oqgTVPCiJgtPtL7YJycvZjTFd63njYZf8xMoZEXj2pgf6FzQzj",
  "key40": "2jaPyNDywAnNmKsEQLTjR1yNvBV1zpebEEjqBtdm3ZgjjKaxH9p9EfSjg5U2L1AwJ2oS5rWJLSV8Urdy3bcwRvq1",
  "key41": "62xSityScHofbppXEerywmKfnZNVz54idvhHpiGyccJNadbTJGQjYqNy738s9S1uHMJzb4U8nQGdLja8yxxstGST"
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
