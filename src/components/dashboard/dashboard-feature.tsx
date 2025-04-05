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
    "53d3iyueCYe8sPgzajfmTfZQmnhwuhNyM2aUCsQEDHFKJFZH49fEW1dBH3FKJBEWv3pjFqSBKZLiCMAdNhothdDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeANg55UsJrFmp5gRYDygMnDdYJqki86RHFc3frCNqHs3pDgpX9uqQzJRP5SifjVwGUfDmrr5kmXhYmJfXyzdMi",
  "key1": "JBNNCMpBGt8qnwJFHS7V65wDN8iVvQFS9KWAsDLsnkeb3BknuN9x3gqA4eEodBjzs7SHExgrnKbPKYibrzF5gJH",
  "key2": "4WS1s1y1fxHhMRa8r24Yu4XnV11qxU8qXdshdWj3soVsLUVSBZGAGaStSLn47k7EuDW7q1UePoY8PqqBRUibRF4Q",
  "key3": "2MuufFFQMAMfkkXUCw7GCgP2DNCBTm4bQaigeuetdVxrQU5CCpfVZ8t3FViMYZe95YPFJxzb9d45KAt2CEy3HRQb",
  "key4": "4zdw9Bga3wmNtcse9EUR9iBRaEDn1wFidPotr7ipqnre8RAptgtaBv44YwcNyN6GLBMDFkNJUTRb8jega9a5agY2",
  "key5": "4A1TKaFtiDAqYwUU349DA2TMSNFgfWWiyf9TCbDTaWjzgfebpyxAdkzHbfg7nwxpBfpWWfGmdZcPhfi5cUaSXPxW",
  "key6": "5F5qa9QVrDaZ1bXSkzRPyW34L7gtCvnk1wRs4sEhUTh1fVDFBX85HnghaooP1nxLZKLQvha4qeH9FneKA1gxoBJj",
  "key7": "KwLHYHuFbXzcWfi3KU5eGFHfLCUmBcvFEYAaqdD3qpEq4DHmYQvYPSUKuCefWX6SVMHTR2bhsFz7kRGLufXwF6e",
  "key8": "2ZX6xGtBZpXFd4eb1Gsy9ukDnfYTH1g82dKEAKeVDrKnEaxYkxAWAWb14egk3K3Mn5FboDH92cCmYsvioZe9KNUu",
  "key9": "jkGYTtozjRboFdjkKrVC9T5NsQ1ntxCKW5pR9mi5ZzUfTx95yQnoDbvqH6PB2Yrid4JX1V3VF5nuCXJmvvFydms",
  "key10": "5EvDJ1m6SKwP48S5No8tdyEarZU6QcmsLgXZUF8nq9BtgDQzxWxhGQcT9bzfdPMuxBjjdgzP3qkGyj8KbKSEDUjw",
  "key11": "4bNguMFovmR5YJ7kj2nSQo62EdWBmb3A9igsZUkX5BF7CTvCrd8nafrqy6cSy9LqoV78sXCYnXnAgV4LbQcUYNdX",
  "key12": "5NJtVTMY4owP9zpTztvThwLspJ2wHHiziSRA5AuhnArNnJhn2MKfcrtnvS7wHitrpcqNcoFuNEzQUyHryjVJYJMd",
  "key13": "5CbJQ5hHnB6R4iRL7LmuDKihqnoTDF28Yw8TxdUajFPbNn5LP2eBJ1YimKLU9Ukua1xAPUHCUP614mXeJfqBrpaK",
  "key14": "5ZN6F54atUYw7fcvw5YksxNQXtH29mjDZEBREV1ttF2Mrewcsh1bvri7Y36gkBCQzhDjYpyF9zqr8Lo7EaNEhWVb",
  "key15": "zwAEqLAWuJYSZ7HzTFBLbFa1XmuC7JEPcaup8maLphPxjUezMv9CDrVESEb8rdcKPGLSqdWC96FyNWHedKt7WmR",
  "key16": "mxNc56k68hP9w12HrhYPg1w9WSZQmTVrptyfUz4XvBiQ1BEeajxBgHFwRKHicPHxVuQQAG9kEivpKWVi34UjXKy",
  "key17": "3TouuufVKxBzkoGMyFnaWGhCCnYtnMAJXiwM2J4EjcyU4RqgQ3gHwE8C2rmCscTEwAhxUcChhp2uyEZbMhN6hRKo",
  "key18": "2Z4b2aUxDzQE81X6hGMvUQixYP5bwoJsfxnQrJkL2gfzndpwGKetac654VUmXHA3X9WPWf56fW8UgPZcLwFUgPAe",
  "key19": "eFCZMwEVXqctNBugbSEUmWb7xFrWYfyXJbLRW6Z5ZYcve5zMqdMccyeriKwa7sXKurp5baWUaQKokitjnrpmiPh",
  "key20": "3PHDK9kGfS2FgfTurscJY2PVw8fK68uDdE1AB4xvkG8CCXEunz7AFy61ML2wseEyE5Kg4VQARJejmXgVTFLe3z8U",
  "key21": "3uPYdd8my81fXzW47HFDEDRPJwHv6ESUQovyr3167MgPPj8wWDW1L4mbtWBFteF1FUU8Jv6EfWW7NfjneCMNYSC4",
  "key22": "3PE8YdtKGyTSHRCoWcihGiJjQMCUnJYLrwfZqL1sdtQ811avizYtmvcSTwngnbvhnFQzhGSeHSGYHSUJ7GVa1jV8",
  "key23": "21VYtKvn9vhQGrq2e1yfTrU8JewLURLQF43X1SiaRJFz9z7dfnVJVDgenkeNYPY8nDYP3cC7f5qgSgMjdfLd1S6C",
  "key24": "4KseQd7orL9uTxE8a5emLJMTnxCUNUw8QchEn3DkahpEBmqDjvDZpTcyT7iNDU9z8PPGB8hLL1ac5VKYFEbKcd6a",
  "key25": "QHrCsJ2X5WMJTBPCXgGmkU7swG7e5Eo4tojuL64uLaU1hggYz5nTtCKy2iVQcCh4f76mobGqKiiFeB71fTzyDuN",
  "key26": "3vMLM5JdM9HYAuMtwhU1fjGk8dYByVqSz1ADBv2eTN8q9uaRkN7mPDkCbkjFnv8n6hrXE59jX8S5935WAVWsjNEi",
  "key27": "4XW4BAeyMsCPmcffJkAB1DgvXf935AsSXRmwUgrb5xkTN8AjU4oF5FEntKs9PC8EY8z9i3BpV52kFLqQ8TmXVSAS",
  "key28": "2uFhNA5BUvb2Y1FheuL4jnYqrUF3qJscnuWMc6AstVNHsapMj4hJifqSiLHEtk8L9Cx5haxfns8FhEoaAT2i1AAv",
  "key29": "65gpnrypAaWkgvs4yj92jqiTSMNdesDvURoxbF7Piazxim6HhqwLeGfthTVL7Qch5onEQ1fDEkWdm8xGipzcjXdB"
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
