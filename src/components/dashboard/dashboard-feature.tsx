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
    "5fAEKPLzBi9PFtBnKz3vCJjnN54V7eL2e6z7f6Ch63BNkjSdroFBR5vfrLv8hhW58R5uZZCfq5kjqd5XLYgNFYBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CKmpzkeUzmULNqRZyNA7brcrGCykMq5ZkzwRWt2cBbmPw5nKnR351FPkecHREZBQEBpSkABWqVyC2pzsJ4kT8Cq",
  "key1": "3KWVbzpWFikoS6MR1RDUFoAreML5ZZKE2fvVUr6pDJGQMQzKKMMbUWRT6W7uKELDpHMUtVD5SvFcpZdemt4KbH1G",
  "key2": "38Q8mZurXzz8mztMfdcbany7cUUTb4ZeJ2u92EPDUWnZmB7azQxzWwxPWk8zUP32ESjPju8dFqupfZcCLimVdxSW",
  "key3": "22xhRTyGZ2rJMarz3kQxwc95na4hDeoP3V9Mo3wS4Cu8QxzKUcj4gY2rHSknheBvprLfH5BKHoTpfqa25C3iGMTE",
  "key4": "5atTawV8uJn2iWsM78vddCEcQFUj6ApHinnMVkfcMF3RG1NVSQorH6KPavEfSSNaGsF3zGXLCUC8BRDRb2yuLn6m",
  "key5": "gUBPptxZxSdUC3EzyQBXFVj5jrmeEE1me82cJiyjtMGifrJ6VZJR2j1n9YPo9PpyqM3Q5GEbxVgbLj97GAGTkmy",
  "key6": "48R8pBeBiBShSdTtjDNMLEMWvtKLeuvPkx4KVbvwhqqdLT1Vw9iAZcZQKZ1SF8sipUJgneZpcXjCWrHHPRMbD7rY",
  "key7": "3U3W85Zzn32oceUfYVKUsDPHxS3PsQt9V5invfDmh5NC5JB9H1jhHePK79QNCETWDgjufWSXRjEWJKvyXJCYJcQk",
  "key8": "4DWQXJKdx9KNR1WbKyfXtU6uwBjpmgJ4gAnomGM6FUazsRx55KJf6SFWbxkLBmk4J2VgQfJYHzg5oSRZrGSQRGUo",
  "key9": "4S6j2C31WkCv1qMZKxsZrEF3yX3Xj1RQL2fCsvhL9oNVnHtEgm3ch16bT8dFCbPgSgmB7SnFMu2UTf34PszdgqKx",
  "key10": "2zEFedgmzYdgcrt9Y42ANhfDhLFRrMvgqAt8rWfGCCsNHMMysr34kCXce5A25724hae8t5weizPJSkaC8bSEEwsT",
  "key11": "4zT2GPbAVcGCNUp1bCK2pHtUMceuvXN6gJYfzSfiS6vhW4t2HRqMFhyLwNt28pfAV9MKdmB46i3udb1Y5gWt297g",
  "key12": "4rXfDpr5D9JMSYo8pr1rzixeYjdaUz7g1ySrz1adkjJyNeFaL7bQT3eNH6QMDjnb2bmWpZWq5AGWkzLqpxg1vvGG",
  "key13": "5YxLkYKECigYQBJEwXMfaQpea8vAbUcSSGe8eQ5FsjLxnfWrYwgLfLTxmFffkArEoYvRhRxyuGhUGocyEYxefYnu",
  "key14": "2SD4gHjbDUgYcLVnNM8fZze6xsvwzLdwrjX8GcTNPHTYoKLp73jWWbsPQPNgTq7SYG3pKnLf6nXfZBP7nmN7SBKJ",
  "key15": "qfXkBUBmJcVpRu38zpCLCzz4m9kmh2utRxFeGWw8AaL4Lk9QDmZngV4Fyrnp5oRTw172K2vFTDSy7gd7TCXjMHy",
  "key16": "5dN6ukgHttiSLQPCZKNTxYXXKQw6kK9AwVa7j4kQnrr3ZZZNcYsL4pCspNQvqWBvPUFXpo1apEyuAc7qgxRsYqzZ",
  "key17": "A2d1YYTMidARZqTmmeWt7K2qD3FdPbnpixQfTD5PefwZijsNrruBft7Lap8ekmWVVatPwpcXpdbgvLZGQFQj6P9",
  "key18": "2TKDAoEQ6Bkqm1eZtVindmQQWERaQ9Gix4xL18JMjkiEMGjQDFxiNiCgfcME42H2AjjCXvbumY3oQzA7HP5eaXMb",
  "key19": "2cTBtrG7UHH7TQJhEm9yB4wJ95FWScbiwHetHvxFZtAjeu3VwH42Cqk8fJfAfj51hPkTpXHBsbjMrAeaJUP8P3WN",
  "key20": "2RQWqrcxS8VYTCZvLYEh3mFqvEyTqyqBpH8NmZ7F7cnfkt88xToHPRXV2JYsTGnBRso1HKtDStm4NgUpfoF7nf2c",
  "key21": "49KHqg47mvbx4aDKdNBqkx4gVV5zvN7gSzpojXChLcqwSdU1jCQE8A7VUpquBSGtjETQZQCPtCksXibPrnfq6prQ",
  "key22": "4viQvXftvutf5UFD5PdBbXrghjJ9ovbRD6FK4Bj17BQ76aBdMfMsi4bERNuz1sncYJHNyExgvaR1937dXFiopzu3",
  "key23": "3GLEsDB4qYUXPdPM6jgMEruFWpuXTdhJBKgWBtgEoWaE4eV4TsdJqJdnH8o1vZJCbcgPPkgqdY6FbNVNvZyq6Xuh",
  "key24": "4M7RS7tmStzokZxkftkRULkjQuCNgQgxpuYwajuzu7c7rzVbEW7JdXJPNkf9kCZgFkRhdLYk6EjR3ZnDqsszgRiX",
  "key25": "2uWVqhwsdjyWzhr7yVS2Lr3F51LaKnLAmPgd2V6mXGnzt4JA3mCRmyvFL2SCNTyJ7QP2eJPP7psVufGPRKk7BhfF",
  "key26": "3CjQxfx4C3HQbJ4GmSaf8hyQk6xQ4dMHEd5RpAVJNk7Z1UpCQiSYFVvovpc6UHd6YV3HZKWXna64iifaFNZwvcbE",
  "key27": "MaY7me2yu7qFeL8zh9tby4nJzYw4UK81uD3uqDUuaMdvjjFLQ2LPV6aYRQrQ4jMcxwKNPEB6AWpzCbhiLfhGpqK",
  "key28": "NjcKFDZfYg2D9DDqodgXAd1nbezoMqQ9hfGugou5Hz7SvJt7Pe3p7fkCyqzy8rXdcFSC2iAjo7FKZk7BvyxfnMS"
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
