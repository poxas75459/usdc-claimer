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
    "4AyAmy1FGhXeDrEXrNBWcefWNZBY7EUWGxZAB5sQXW5GfzGoPndyN8CFmF5YzuBTUNMA5v3wEqdLYNaW5VNWkKFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWTXWcTWv73FXwvPmU2hvqmDtC2yeWcFb748JEQABjmrMgCaSnuXSi1wTGNBmXnMv2sYjQZdGpQr6ZY3LXj6rAp",
  "key1": "3uAQXzW7hqPUHMxfNUNwhJtDshFDsW8V57XDoj4wKWvAAqWBs88WuYqxPVCAfEirZvRApzAqhB18mSDBj8n5GpFc",
  "key2": "55QtZt5DeovKEv7itoNmK69xK5AY4z3qzsdz13naAn42MYAt3REYP5H18sy4naztHyiBLygwajqXPPiqPBNSWWvJ",
  "key3": "r9bTdNyrWJYRNu3JhFy7QQY6QHwoXfRZhS5tcMPu4AqAeAbNT24TE9vX4gWpkvYpZPcj8wQNyJPSNn1v5jUWyGb",
  "key4": "DwtBKj3j27NLMPnajcwGkCKrkjKdFkCahWPNn3Dd1bvcHUR1D9UD27mDNQfzGqUB5UovcxYJNPVFpMeHZPUYEpA",
  "key5": "3wfEDguVCwnubsyY6yWtgUGudpQs9NFZQaPyoLQ7ZZH7f9Y8B5iRhBJARafc3nFZTCtxa2WmUe8jc9BRPPVxksTn",
  "key6": "2p2paubcsHcv1iZMAftmVyTXGSV3nJtfeSJX1z45VQW7KoSShYwdoJS15TUcaapStdNcpML8WYTtTCHrK2yyUYsX",
  "key7": "62FYoL3rsc7f2Ar4p9WzD55i4VGtSqmY3QCfF5cF3gN3ZCMFnjBTDi8rgsNWo5h9Gn61oYHTP5ReZ6dP5vVcFJ8b",
  "key8": "5UDWFFJQWXgnvXo3hncAjT5ZdQPmwajXfd6MZuvxHkYXEmibQCpyuf8AiqNqzQA8pihRjUnnETX3immVMnKb6X4C",
  "key9": "3qUoQseiZX4hfvsWVrYbUVKRHknWnykX2sVRKNg8YYVFmmjsdk6mg9wYxEUZRDaMDT7TD7D1jowzpg39JzW8vNTo",
  "key10": "5mjnpuFBoJFQUrXyehWmi6iAgh63mvdZTQ2s51P1RDtRQDkgm9cGFGWv4njxDKTKkfKnVopwpSn2V669QTcxAfts",
  "key11": "5MbhEwf2Uww7sXyFBWFCEiZ3TzksXCUQyZmTkQHwT5UXpdKVUaDGntB7QR4m5Kxuye7oiqhFQCo4gLKgNS6VdRiZ",
  "key12": "4ZQq6sSPZsZpnw5zhJQmB6ma1r62SLWYcX71woYRPce23QpJ2eSP7YNW9KgeuWRp6wXGptDtujMWRjeCXC2nUZzh",
  "key13": "4ryjQVhGbU6F1b2QGTyPRFwWPH6khaWPtNdcxK6jGj3iwh2Z8zopTtwB3qKkvnA8Pgz47AJvip3iXcHsV4HF3CsS",
  "key14": "3b33CsoSuJ2tHCadcmWYmjUKHj8XAkDzGYtuzmdVqWrbwNvHqWRzuT6iDqaxrdbvvJhdCoWPRuUmJfCUg4BFVCkW",
  "key15": "5Hr5c6D26ptzasDDZRRUPFLomGZWZa4WZhKhCJYjnUncU3Fm7fYJdYUkWsJn1MGPorX5sRDnWGzg6AnVcSYwaMAX",
  "key16": "5uaE89Ns6HTvdbQivTKzj6xovEsFuRgJUtZEcLJzRQfeWp4XgZB8tVYu3oMsbm8JrRtp6Adw4yP2QXimm2YLd9CV",
  "key17": "3D17neavyxUpe8CKg1SpxHfKTYnrn7hcfPyACGQjUYcRrpWcQt2Nf9TcgnxKn3sVMiEbtAv2zZaMyckm2SQsj16F",
  "key18": "RwbjTLEBkvJqbENWa2wZiwJo4vbP5QGJyr2qtZ3VXdB4465Ar2iLjsm3chpaXseq2TALawCjb18G5SYhGfEmhdr",
  "key19": "4nWjgsAeohFtm63CJ8VJY4SXSv5jz16d6kr5WMmizUfsKFb4aUHHwPaP8Kups1eQsA1rBTka9LSQMqZqiJH72v1y",
  "key20": "VyXwq3DonyzpcUCSH5et2KSj1a1ttHaHa3Wrpyq5Y7ou2XQ9pA5tJUgTczREiYCCjeYj5kBeDaKM2aNnXEUJXZX",
  "key21": "sGexS5SYbziLVjp2HSAmfZUNCmcsf4MmuJL4s3mzBN3uxUZBvBzfEAppxpwwwGkc6o6cUX9JmtXxDgZWWE6UsX9",
  "key22": "3pBcassUb8YzdW8KKxzhksffm1jWT2E9Zqd2Ka8mnKJbAR9ThhxyEojmobGyWBaRab1zGEmG88b1m1W89Qvyshef",
  "key23": "5tvHCQBVv9hAz5siUpLXZcKSZTSPsWuzFdQU5EgnAnVA3mxNMtjzYyCk9C6eiayPdL4wvRuwfFETiJtLLKQT12Tq",
  "key24": "3fZAw2rHkF8BbqSUkHo88C9ZjvoeEJCqmFUhZYhuGGg2W1tiK5fR5EK9gfU9isKS1Z62XMyjQJkUFNszwpnLy66z",
  "key25": "2BqPJ5EuomkmZSJFwPmnLachRWkvpnAUrqv5jyXcSxo7zHC8xRhZF5LEr1dgf44xQSTFjDz1d1eAVwHYyTojTk8h",
  "key26": "2AMnPXVerTc3r8aChXKE5s3WBSSR3QYX9jDG8yYSvXAjoVWPDnzbffuEA6g6sR3td7Km1PLXUGVwmhg57dn8LYwt",
  "key27": "3k8PdeT8NysxvmitYkwMw8n9kmvY3LiBvjSftcBoADJToXPbjWMqbavGx1Rb3ZrVzee3ne6Dgy5DoLuqqTkJ6JT7",
  "key28": "2T7ZyhddZhxihcBEMMDL8PyizmJNY9LpYfqF7RmYJ4q8rZxQxVHEb6ebUjE6bYE5v9En7JjHidyz6Hee4q2xRr8E",
  "key29": "2Tf224qRw2jY8rMzLRvB586UQr8WaCPQMopuVdFoir7GYjP4uRHnrc3oMEEeRf8C6dWckiiwTVJcFK8JK2aEjhXb",
  "key30": "5FaE3qUiJrEvd6AYxa4FhqU3ckMxzqTTquvnKBHKCN7NV1343wDAmvUbASwrzTr9Gf7dcCvE5Jhj4v3woAJAGQ3h",
  "key31": "57AecQZikron8WVXhPANyojmzZ8ZMFmmiQk9hzGSrdCwTCuRy4LiqzSySWinsvAgmLgY2TYrTinWiHLoXt9k9aYG",
  "key32": "5vCBdtAG4miDRMNDd9hd2ZomsvXGo6wHq1xX2yoNuChSZREDwDc2mWoMA4iuZFaiwuyGVgkfD6QMcZxK57N3cvuy"
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
