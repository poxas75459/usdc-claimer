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
    "5nLdByZJ9no3rdY3WVMYXNWwuM3eChti71uVobciJbv7i48X1ePjAjej6E5vH5DeLAix9WW2arvrHaxdhoXk4rzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v511iJCRTpNaeHKTzpFJSk6x91Hcb3dcD9eUjCQjRCQJZceRWVqa6Lcs6MK1oTb27WdheGF2CVrgM2XMAGNBLh2",
  "key1": "3qbGYuemB7Zr1KTSYSCxJ2JcqBUV1o6WnfDXQmqUe1aPGGH5qUyGTvqJJ1JAPLLTr9TayY6UrXunMVVd9fPRRwbS",
  "key2": "2GffnGWdYtpdFJfpBWfQ1SoUd6oLqpzSQWAnj7jtuqnTvdkeFCQjzoxqUzj1gTJrtt8SS5GAv2hFjWqVH2iNn3sM",
  "key3": "3fbzRm29jyqeuhV3Rk4otEFyW1f3Hu2igsNNaf51HDjfJdoxDCQZUzN3svveMcHqzD3p15XxAmF52wpeTQij2LeJ",
  "key4": "cL68GxJuVGfH8Dk7nPs3VisTwAWup2NCy4byweUwB9wBk74egaXcFRc7g6bjcGAVV92v9KPnmVGwWb13wmFfeHL",
  "key5": "aFVYncJrEQohvDSKWEtZ8EVFHmrJa2cg4kCdoqiDETSi3A357PrDSNG1SeHfLMGkeJHGzem4zaaASSpte5EPyX8",
  "key6": "3rzWRhg6tSWQHQVnU2rrL7M9NHg2RsagsVQ6BU1mUZYwzQpmT3rzhdJyG6svz7HrPTTBPbcDktV8ecBzrmhFaADB",
  "key7": "4ZeLXKPbCgtRyaoehsYN3aDGMd4nMHTNcuG1v4xpTV1KwA4TifwefZcr6pLSUVKyyqvCu6GWxYFj3Q7G5qPL1JGg",
  "key8": "24icJQxYy2Y3KLtQjoEQQNrDcVFjcknJxnAhfGw6V8EEj7y1wvkCjZrRjXTNPpf1dcFHk3Es2gZ6Hz19MsRTGxW4",
  "key9": "2xsBgr5W5fUH2nVR8pgq8JeVBS8wHkNnBTeTSV5xvHqu28B22beWNwcbivv65CEV8A7eZ6HscKmqYMa9yrf7hYoE",
  "key10": "2C17xV5pdeNEioz5RdFFGcf41tJvoTXe8JZDEDQk9CmfiAEZcuN5JofHQwwrQ4SCisxWTrN6RYMPM4cnXscbuePy",
  "key11": "4LG9Upp6PAq1GCMNa8d9wSGNm8fUxDy3TTY2EzVwGftALE4QjFwgkkzo1VNcudHhqJQBStsQS2BxcxWyxRdYE6La",
  "key12": "42w9Kdx8QyYe16jQN9UsSFMrDqGiiTsmPiEqLdaGpjY5t5WEPhka93pikzp3BiwjTemV948TutwbRWrx3cmQmAu5",
  "key13": "34Ma4Gc1Uy9axyH6boCybVU3adab5Codq1cu8jTSUsx662FJ8dVQ2BzpiSK5p7QgUY9rFkTJcCHzKhU3EB76UcMb",
  "key14": "4YxPFXhLmZVR2dy8DvUCrRDRMMGWftUCEQGzRMQb76w9xYJ2SUCsnpZqMSF9RvXYsVTMuF6FN2JEUeK4Kw7N5xh2",
  "key15": "2h7fxDQ28tqGzYBWZqcJqCsAQ84eZZ5uYfNWur5TGbM4DpBxpj1vTEdH8s52FUtcqZWKqtaoyRpuqq5ASy7PAcZV",
  "key16": "3yLr2pXGnwxmvrcUtpw598QZzx7tz1fwBTKq8KEsnMbUjzhV4omp2yD63hmhK1ePmf8BLFKYRR4dwrTAgJTqp6nW",
  "key17": "PBsDfDBU1Q1k3rdActLSdPdYGAYQS2sVAyvoJu17EXQUkj5X9qV6F8km5t3wjCcyvcxTrDdUQqArZSsjZKrVBvC",
  "key18": "WtTgnZ97JyYDxnDS5cZKnAojB8EFX3w6zv5WskKBFY48T45BAqWCRAKejYtS1E3ZVDNo35xndQe5fVANtoXmwb5",
  "key19": "5yzC56sVxzF3W4CohFk8T69TPwN5ZmdRrRFpmi8kYg5V5z2yE8xduvbkkEFbBnD5Dntzn549jkxvGjg655dMTLDb",
  "key20": "32LbpdMkJgxNK2AFHwLGFoGJoTZLfC1rwdDWxSUsfzcfHRQbTWEzKWCKgFYr1zGKafWJr9cvhU8p8UPUv3US5sSz",
  "key21": "3gZWgzkVoqFNGM1xpAoJQpf7pQeQ4XZSDF5McvvptLCw4Y5oKUSb5vUVvqfgxzvFNiptG1zA8tHZ5B8Lg9gcHCw1",
  "key22": "2igqW3Yj8gXdWPQEcRzRxFLGK7WTWR31kJtEcFs6mH6X41NoUAiyjWrzW63kTUkxhkxwrasiu1naKa9Dyq2NJw5J",
  "key23": "664vAFZA5iiurdHtRpEEWd3SEMEMLUAFdXrNqyPMVAmre7h93emsHirN9zVWj9n26JaHrvJ8kTZBvUb4HbBRdX7j",
  "key24": "4Wc3QM1JphggkEuJHgjemNmKfVAYTzPdQtzzKB6aP11j5GQJ9Sidsfmhdid7QTh5L5LUNG7qu6femhmeUDqizQgF"
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
