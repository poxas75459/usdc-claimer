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
    "25pPFZpFtvQRyMJuPJcqp53PehddHDZ9ZuoAEqCoL6tZBq3hHKfyoeDoKKG9Fx1pn1XJ8BoCyxS1KHJjYcVmF7he"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46f5hmtYHYerYWajU6QTqUarhZsdGZFhChN5k2BbFUSbu65ZcyuqYgVSWJNeSUb2pukoDdzN59RjDQWZnhhvSi3m",
  "key1": "CngBKt6xX5Vm6GQ5SEWqRuS5hJYwWrEY7YYJ9yuUVUorSqN1rtkdK6kjF6N6uw5QX1QiKxk54qnKNGmbLbS5hj7",
  "key2": "4FzirGPcvZLF7gMcuE5DfTmJKbq9ftx2KrNb2n92AJzdwDKUix4ANmKDuSV3gEjEKPMH8z4ksCAZeruNKgC9nwNj",
  "key3": "3QbymDcQ5exeirw5eJENV8sBCaAPH2wcse3F2GShWo7Fi4yuLCbE3pN8ozQqx6Wi42BpNrDQ9sFVvqvEuTdkiSX",
  "key4": "4y421e5sJKDyEan5btxtq2UDFfCxd2XEuR2TxyJWEsaJe2GyNCtsH56aut8iL1qKCcpYw9yWW9bLfCYmGbbfW2Zz",
  "key5": "4ucE4bEGYzqi7L6tGm1N5kor16JuXgotirSe9sUegJSt28N4zPuChQhBytFo9PGLdKuVCTmtSY8UEQqp8J6aVf8G",
  "key6": "2mF8naK9rf9eJomp6Xg5Tq7jvCTxVw2WiQV1Y8Jfftf6yZLMqCempgoKgodnwVxhmGaGNJQgLmcZe2icGLFcK9go",
  "key7": "2nYpWyB48aLUrToMLwknp6WkowLg1dmmn1dqQ8z6zLEn9Dg3Q4sH2cWotYdrxqB1q6aob5GsZFZw7Go4hZkwQPTq",
  "key8": "5RBPcH8mKCGqgK3pG8U33W1D4AVaE3qpA9DxaedKKeczEXiqenoKcW5ap2GMoVmCUPtuhNYaKNDR6Nm9B6WjdfvK",
  "key9": "5RkiJY3x5veErdbnYQj9RYndYcSpDdwEKoa2DvL6hz9xY2BJTK69pkaxUQ1naTVWiMDCKz4i6j7wKPDdCAKn1eZ",
  "key10": "4poHrMBSDW34CaBD1wAYFyKnSazdqAcHDt1DgVFVqsRqMHVjW8CCcQZhTm5oncoqEWshDdcdGKBVPs7zXYbwbHH4",
  "key11": "Q8SWr6ZKGGnFAkqc3asT6Xrdt1H2pCYr4H4czXq8iWQEuKJibnLJYSD2LCem786rZFtMFBcSPWiCp5Bpio1beWb",
  "key12": "v85EVgNk75EehWc3fcavZenwGGi2PA4jE8VuBHoDxRrTEeqtZo8cBSXvpoEmcbrHDnNLitYe2QNSY2RrDkyuGHy",
  "key13": "265NWpx2DsKwpyrxHYF6Y7n5a7ZjCb1CJzpVqfF7fuRbyGtXdgudyLXwissmAFfntVQfnddEf8X9zZcRivfcwmSE",
  "key14": "2ThhkNE9hq14ePS7jen8PDcokVkEp5ZnsxMa674WpZiLtY3B5oaFKb3RmsrKLTVNWr4RvvkuQcK7axCF2WJbRS16",
  "key15": "4EAA2A2APv5wcxeBXXNXJJNbQDfPs2i8FYFj5u4gGL4G1tu4BfjidT3jG4EiLiCNvcb7sQvbboBdKZTzqJa4k1HH",
  "key16": "3zxHrjtFLwMhM4dGfs66Pcc8QZq1v8SHWw8fGigA5zNsxLk51SSG54oMkaSHaEzkkj4ZxMVfMsbym3xxQ7B3V6yk",
  "key17": "3SeipeYkHNH9jYRF7e7tNujNFBabE9UJ6CDNpB6rXidLwShd3cP6z8t5KYW1NBrNZMNuEqBc6K3oXNT7B2inbtra",
  "key18": "4c9ffEK8j6goUnrqqbNLrYu4jy6h4EdLjMubAWv5DDjNFNjF8yXeT32h4pph1fn6AthyX8NfHPyx6r58DaXn6M3",
  "key19": "43u7znqnQTX3jEQcFKMmRZHuL6bq9MzJePDHrqUCR7M3UXN6ZGvuC2wG9gdpwA8oMGbuYMFC8tVrL3h1Brq2arZS",
  "key20": "8ijver4TUrTtWtKhZbiZs9dJbk9stx6968vD1QgvYThNpoKUGevoLyYnxd2eVJUkn9SAYDf27LQw3hsxxqkMX1X",
  "key21": "31MYTfqAug2ADwWJmeMtdgUEEKPje57eN7XndBgach4z1AWcHbqzGNSPYk5znRBUYcP4r3Kubv9iiAh6Z6ABAiWs",
  "key22": "szV7jYn2cqYUkyUbPWRmDUVkFU52f3P4j5z8cWKKva9DerG3kea2EGEM6MaT3VPstUfPp7tYsLpWh5SGMwBZyPv",
  "key23": "31j7ETkJ4axXSSdTndgiGSNPCgFP46wFhT55KLVVPeNPyVxQLkvqH45nQ2sHYj5EYgzSGB78ok5QpuUfXL1sdR84",
  "key24": "5qoXxvAtH4T8FBNYADb23dDZ51yhA9VgyFUq3cuACZxsDrq4EDPxUndbX8DsCYHQWQFTLReMW1MCcuUZZivxm4tq",
  "key25": "22iKXZMepeAoXVR9sk5g6MbHzkArWfd7FbWnDKcASBWyaeX8UeTxhxbXrGvXLeHKubr8v4K1cHBWyEJoJnao5wuE",
  "key26": "36mb1TNeT3x8eqaqYJMUPLpLieWFKSqQUZPhtePTWYL4nA4wfHqkzVat9qQNAh6w6WQWk2xBSHd6jHzNqceqjcYk",
  "key27": "2AHwKsQv5QrTrrFNSwLtyKgQuvRAmFvDjPhVpZ1gmAP6Z9bha6mLRjpAsYiEpYDG9s951WhJyMH4PcWQsmE8SzYA",
  "key28": "4QkkVne1rT8MCH8d8qR2Bxtx9Bh2zYXDKDEZJ2TBacod6JwfZUF9S7Gw1qsnHE4ek9afjRVnmghAFFVmmRwaB5Pe",
  "key29": "5cgQpTjiXkYhvXesG6Sf9YVyGdyz4mqFBpF8Q51y6umYQmg2VNyLxKASGtwNDJJc6QRgtC5vAYBdxZfhAc52FgDx",
  "key30": "122y9f62HnLCuRipLK8zVjnZkU3AJJ2sWWocsCtsLisiDdhdkWhcoZTkrrxwTSXhUxNYG51NFJexQmwJk8j5VRuR",
  "key31": "3PzdhR7DGnZkgpAFYEAwHhgHqxBdV9o1HraR6SJ6rRBHyVervNd64eFw1PHSRrtJ7QdBxbeR3pefaA7EhMNrGdUp",
  "key32": "2WT2XSnVY2MXoX4bG3PLvRpuB3CR6Vtm6hpz8pJrMJDoRxacZHePHnsL8YDadYDNs7qaaALX5K2Ef5J5iLENV3AH",
  "key33": "4DHqPp2psaxSmUafRbSYUgUG3Cyze88MAJieT2eF4wnpQK8JfyUFcPadZBsvMqV79rcZow4PAZrcZmYTE8qbh6A7",
  "key34": "4fXde6MN5GwkgNFDZ46SfLP2ZzrdMtxezmwtYaWBx43KNYiDnXWbBomHeqNFjZyH4GYKsnYZnSg2bDrNzYbhCwGj"
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
