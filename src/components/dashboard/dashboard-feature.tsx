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
    "5V65K87nTRjFSdNJ6UvQBmdMT4db44TJGeJnYLiGDLzqbxCDTZUYww9UVYSAQKvAtDMVyFrMAc3UpyNCi7AYP3f8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AqGeoxsyCHUb8qYVAPk63M6MiVc3dyQUz8Cr8zpSWYhZi63x71rfjUYvmJHG71FF3UgmALuNCLJc6jfBBJZdpC9",
  "key1": "4uGvGXUdX1QaajyuQQLfvWLqaPSno2eht6bthgKVrj78tUxuxUB2KDdctBjw7JhdmXjgQQoydDuDYLkDkLJL7NNx",
  "key2": "5AEFHwDdV17JMjEK1imUnxkjq9mMHPBE37Gcu6i253R9WtWZCx5dqH7FwGsPKk8d53m4Q4qQzv8aev1hcLy79sM2",
  "key3": "4WbdpqnGZhd1GntsvPQ79ZpntiYx1E6t5Xx2QYfqWVgWgc8pzjYdcQ6RsXE6xwUPCE2ftvQHwxFEE5wmapEvzFW6",
  "key4": "2QWPfyH1g4q8awh8dUzmvpqPMzDaXxs7EeouAwu7pj9YU4tnnXXTWgMmm3Mdp9RsPo6XvSQDfaM4Ef8XKVgj64He",
  "key5": "5vagdD3ARwHrDumi7WvTzpp89vX5F2UcD1gDU7sPW524e8fVwG84MKKQ5C4oKUNki4CG3emKyVD23iPF5dPYXm5p",
  "key6": "2u7xhNYzoPGdNEyTftWnZcdq6gLGoF6vj4c8sPd7zDW9giwnq4bC5iCRZnRbRiSbmASGk7Wyvi1hQJWaDwoyiK7f",
  "key7": "2A6bBXkPpAZiPaKEiMrHTEXyhsYmrepa3LHh37hxxjm7pE9DGsMwKHKqoBSAsQ59n7sdb9XaajuVzhyzaVBRPAED",
  "key8": "4vjCRprqNkAYZZcKSj5Kkw3Gog6czrvjqh9XE73nrrMCLKrNrrZfCrnZwjcbZLR8LXUvkwCBEDBHNBXRTU26xMHS",
  "key9": "35j9zaLKDo8s8FnPBLy9rahRTeXmpCQMHSDDsr8AXV2qvUVoxVVA9y3fZYtFBZC8FtqVHsvuoJu1kVRzZGXmeUzG",
  "key10": "UGuPLinkLufipobWNZJYaRN4gFgn9aDNKPY4bTHFA6nMvLZDuQef1zQvpE5S54DtVi9nsfeZxhLXq5JTqFjVFhL",
  "key11": "4YcQrkCH3M9rB9WEtBmByDUnWRjbgejrVzCjXtXoi5HPHEShaAbMhV2A1vJEWvLtMVpba9RpAuiN9X3DB5FdfgUX",
  "key12": "cYVLcJYiQw1FuoaNMKVrEZ7F4EvByTKcdPyhnzaaffihLGM79MQy8rtuttBhsRAewa7WR7KahspYbn6vtLySuEp",
  "key13": "41swxUDM3v8EavPGuue6UgGwnpLoYbzdnJmiHEyXgN2fSbVtGoJgPbpiYUuUVe56CoatWGKQp2Ga6iCc1btELRQi",
  "key14": "5ZVstjAhURv1hgJjxNztDvcB6n7Laep6A5pcVjxrsDcdKDsMiNsvT2sdFJzoicKtZmaqfsf8WpYbUktCgbdWMMbB",
  "key15": "2aTVZFJBjzZTbFyYCJ7z5n61Q4CxUsZ2bGDUfBCUFSmEayE3ZVktjv3puHKEjVgFP3WbzGVxPgxMzeTxM9wCNsov",
  "key16": "3j6ZbQvnHEWnUvaQ7tHRe2XiQ2SKqzinHVeCKR7LB5xQx4d624sS1RiPGQC7k36NKXq5gvbp7E9f8geyfbTMeGjg",
  "key17": "2s1oDAkUCueM8ApAFjDhz2RTMCZsEPVwnYYDxQMSbhvUHKtE8WxYWx4TvkrWaJxWA7DkEbsM4scDDbmmWJs9YBk7",
  "key18": "3W3ZSEaSU9NPeUiXYjscRiDXuc3fp9ErTG1hiYahKb3q8LJKrHxzS1x4ke7hw36zhMToR4cprwghUkUifkTFcYgj",
  "key19": "5Pzpm26coHrNYt8MQBsBTYqDjvG3sgLqdXkZtYBfP9GWRmPuVTayT4Aq6kbUFePa64FuY2W7D5kASt1SnNWZx8un",
  "key20": "3nNHA17BkjfnjsMdwUq55XzBUnWKPVb5AEdQSXe6WsxUhWpRSkyQGeumTG5f6Hz2XRv3jYAX9yPacuGFxNxmEmJv",
  "key21": "5YFLJVhzrzMMdwSMAU4W563yf5n8QGSM6n4gvFyWeRPdFmbmnLLJCaiq6Vvz3Y5jWkZK9ggixBNpiHevFEhxbfsd",
  "key22": "4d4TEbUeYb47yErVKk5softgxTmTSqqaC31xzNZoyBgLcmCAPkUEaqSyPZcv57sM16akhQAxsUXhznnztPQ1jynp",
  "key23": "biqgMSSSxnek7KoaycHr34a6qpChuEZUZbdFVc3LPVtkLYguK2ezoKKar9PRVhoX2NsVwL54J43oZ1zXeUadGuF",
  "key24": "HeNKWh8iXLZQKaDzMdtN14xwTnjozeVchjE3ynZLeHf4kd3Ap4qGUe86njhTtFP5F4gBWzjCgELz5f7iJHqaS8T",
  "key25": "3UfnWZdigbgJdYepb9veHZepEkG91bRHDUvFDrtrUvsonuoauseh6x6d7xY9SAEdQVrVzyymYGKjWzfkBDLU9jzT",
  "key26": "2a2LRY65L6jjHt7bXx5uBPnUJFeBpYJgqk1xhKvWWpz9XYMDXwyneocavyKYiAEx75Z3XgeJHQh46s8EJPKh6ZHF",
  "key27": "EeyLTtUJmneMrkFGoQ6Ghp3mvPa8MePbfkfFMWvHWXSeg5ub62HDcVxGQboFpDRBJvYJfYMEqJoU71NWcPgPhCC",
  "key28": "51Jw79RwtpNipaSzKxqpx6tMKPNVy5pzWU7Jg73qTX8hXMU22uMZGDDAtEabDfTETwHDkGXqShWTwzcHs8VofhbT",
  "key29": "471U9DYfQXKeTCyH58onR5JfF8FbA3sCfNyLP8FZzyREKa6HuxVbBspMT4DiPXhAEYo9qJubgXLyBCVJehZexvGt",
  "key30": "LZxi3Kazifb5bXugBNPARsXS3upC84RoCHZg6sWKhQSqJ4zNSwkbUAy3CLijhypjsY7WSfVZCS5dMmfmpcZgLNF"
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
