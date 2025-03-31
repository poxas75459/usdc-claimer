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
    "513Sh9zNTs5mYV24A39XRN5NCWRBadkwfcAWWLqXcw4XdjcsToHWRazivPiAXEa2Vst2bqV7MZC83aYJm26d37UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kcAfaipPVxwZWGdhry7Ah6eVP4PXXGPqX5XX38AFaqfbpEBGgJLtZpSUfGf95r4gr2FrjtKLy2ageEHnQZJN7oc",
  "key1": "2RC7kABj1pJuffbZsG91gRWuVvtBVs5dYutDCgFU2psK15jpchS7WnRZKjmpWAHJjhhSpDXfs4hWgFhpuXvx8cNh",
  "key2": "3SodsaBDQD1kQVK2anz6VzizqFkUZkLrvnwvJXivx7n5f7zufcBSVCric4JBMyTzgSzoZ93j1w4AkTvR1tBMmNCA",
  "key3": "5zpcSgVwFG9aV9gmmZBjH1NP8k6fNVBkLnhXjewqBB4DmmnaE3h2ZRDMDjoKJygM2VBLqCRUVkRb9TYsp2Cg2w8H",
  "key4": "5uh8LUW7QYBkL2Xtx9UpwjVD5YKj7DEn8yz1wwxofipkwBZA35H8qEocJ6FLPuErvazJPspqFe8B1otXTJGyEETW",
  "key5": "4bB8ECVEHutP3R2i7Q4hacJEBVs8E47JcLUXnCw8f4wLNxBE2ShLuMPrmCw2Fd1MSevL4S9QAYWLmMCxYjRLdPeR",
  "key6": "38gzWcvf5aEGq6B29jtyq882qSdQkLP9HiT9t668EqcHTYmEJdh7Fv8UXFd1kTBLyNSj7vfFmwbjRQ1dDdQF7iix",
  "key7": "4crxjhRvy4283EjbTWZEbh8EMyrmGsjdU9aaW9DCQyuYCdbemC79Mu1uS1SjzG2bxN63S83CFxtHeZ4oabfkRoM5",
  "key8": "3cReyLx9a31tx9YtKTouzfCw3Cp8CWtMTqaj3QuM4zmddJytMEF1ydx1iSnU376BT2ZUCQFRbG1p5bUfWovrCwK7",
  "key9": "2ucyoqqBt5PVaCWvU9ezACfNmeujnrM1YgfNmrmkj2tL1fTcqh5MrMcDuLauzCxaqbwYKzVvt3XjXAv6u2AAuZb8",
  "key10": "252ySYPWDY4bC7DHka43hV762hniv3Se2urx2FeosK6vRdypnn9dBwKTpKY8Dem9qDPZyhTcBuxNTZj4dESZptaa",
  "key11": "3PgYyPPgCEaWRQ3fJMQr8mj9ghXw11WD4wZxVAeM8K8TNujunzXdDteEPB4MkVpu5K5YtmuhEBBmohWAroyj7FMP",
  "key12": "2c9QMdRHciUZNYVbqDnQypjM4QqVmxmSQK1tpr5vAh9JW1N6MhsRPQ8xiwJVrWHkvGGXwJHv2F3vbEeQ8YjQQbcG",
  "key13": "2rkufKnvSKUxzNMmesHBbr1fYzWKX6aJf59xELAroqz7p4cajYnSRUnFhKiJiQg13oEKgBAfgBnsVhwy2f8em5ts",
  "key14": "5B1jRPUm7BisT8CrEqm93jXwBaziUwiAG6wd6XfF3TQmGmdPVA6N3kBghrpvw9HyW5S6iQCrtjpKzNyvpj5cvN3R",
  "key15": "52snh4xa1G1PSFeUXbgCTC59ckVoG8Bur6u7n41b6bZ7Z7ewn86zQ1JssphK6DiS9MZCmQkMJ4gpDBMYSsx2rL5j",
  "key16": "56eEaNGUtangb645oMcGgBntUXZfhEUaZ7pUp57rZj5sv5D7iK1dEudRaX2Xi7wNLY71AEqdfgdUKNxhzKdqGSxb",
  "key17": "4qhcxknikPRs3q5bb7ixWxjCZMHVWNdMAhpP8RZ5FDrAnGkBP3NTZEPC17rBziDtCgBEaavUQjfAxtckb8Vos3SZ",
  "key18": "4R2BUKntSwrNcbU8g9fqNvU7WEKx5STqyh9ZPWaStQUcmm7BgfAToXhwqmkcP8vuUPCVoiWTbVG6SsmqgNKqmVf5",
  "key19": "4MQXdhAjXufM7yj9yNgSGkmh9W6q9kRd6YPE9WPBcfDuLte7r1wVkjE7pfmf5bpyp4sTNtJDUrC93J5BkX4SLvYq",
  "key20": "4LanoW7ipK91w7YZwEFqPnvhyFXXuVxUynViLDC9FwTeewxv5tBqrGebFVZpqAhdHHubUPjsKiTUxY1EvVzUEQxZ",
  "key21": "5PrAeU6K9tVYsukaCRG3S5rvAV4aX79Z5rTZqjgkeMTgoztNP3JVSbHjyr9C1imjTLnymSh8JuKJhVgmSXDqSPPt",
  "key22": "5nW7a24uCibiJixBZVUVhCWq1M4u3ZZ5iUeHzY1kqN6YNPDDhvV2QCHqaSYdeJ14Mj1hLbZ8mT9F34pUHuEHhjkG",
  "key23": "38epkZndzn4G8LnHNWDwB3Banon7duJjw3oYb9imrT9yGDPymPHYNjFLhcSC6nkVtLDhy6DsvE4aDBNLuunsYiJS",
  "key24": "U3bW4oTxoutja1KRpZRk22Zi7zergvnjm9zZQ1LyCy1iY7zr3ZYwMQQGZnSSN9PbdLhaaHsbNKnpTTbGxL7yc6R",
  "key25": "3JgyPDE5wCbCqXEHnRpjNT2zhjxkSNTaN1ChdVTfHmVMKymXw5u7h867e3xoh95ot2EtyDVDyp9cewsTCYfP1ZEU",
  "key26": "5W2q1mT3vbePZR9xaGAjKqhrpWfzHEdy91s3pEp8J8HGUwZ7WWLfsGArEHoxRXqgcqg9pCRopzdTHEqRyWLjR8P7",
  "key27": "2MDFQUZHAmFT33BgGhy24YXL6tkz85NpYWgvXX1XSU5inMWrHPdmD4Xg4YwNRcxsaum6eRabSfjejhxkpzpWcU9j",
  "key28": "2osrc6NgaUqAPQvJpiAQbYrag5jF6e4NJa8XaSqv81fJFRDTHRuzq1GJN2PsbBsqRsXUhMTjVzzFRYNu83WUcpJx",
  "key29": "2m9z3txuogxEJMJA2ghMBte9ZHt2z159cWmfYF16A6WQyqczftZtYeXhLhixYJoCivQJpPCqEPqwqCFY4TUxscfx",
  "key30": "3dHGiLRWGKCQuCYCdCFNTYA1sV8h4pFCMmypbxunKr2emtXWe6LMob5wZspmWMeYBHyEs3ujtR4D22XVHQ1VMwXH",
  "key31": "33HxtJKsJWtxpd9JDRF1crNU3qkxGVECExWrEod2ZvdKmmNeB297HWkHJm33Sg9zg26NZtjJFbrQnbLUd1gk8vr7",
  "key32": "mbsZzwkLEarYF5bg6HwWekZFiGxURWB8CHaNJNXYzion7fnTgPHhFPgJuN2JNiUsREW8JZ86CFYabtiFbJPZKST",
  "key33": "reH6xNZQaXHJFprU1pLMxPRa7fE4tPDMJtRnuLbz6QPm6Pw7qjDFs2UMVY9y6mwJg5qvvKCLhbysure12M1TE6w",
  "key34": "sfePmk5DEmbyV667VgPnR1NnjHa7fSLP8whNHrVXLmqc7ic8Y67nUfKprXKG7UHFzJfFQvW4u4TrHuvqQHk5kor",
  "key35": "2tv6efLQERNGGUATuNX8nKdgszGoCTiDK1M61bHsQpNPcgtSVy6ZELFdPWYokvs1PfL2pUZv4Fca8V5QX2tNh2HZ",
  "key36": "56CoRuXNMgijVum5Lm9Emurr8SQe1osJk3cPfk17JKBkLzFUCYtXvykfHQpjXbvDyi9PKMbt3DAvARaLzfiUdBER",
  "key37": "3B3YcCVYbkbyyRo7Lg4EM5QGFxG8cKdBX5nswcSodUizC4HpC9D4QxF66hGxsRktqvhHjmF2QVVtyr1JxhZ7EVNR"
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
