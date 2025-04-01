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
    "4VWiyrtuRqNz9DW6qJKqK7dZxkqPQM2WC26fzVMgdHH1aYazk7NNhLXdPsGe7kN2QRaPtEB4t358iDVqdA3KUqsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ptw3YFVvV1VHzfRfNmNDm7KgcjWsmKeUzWdNyRTZjx3rMsPNjK8G4AiWLnCBEBVExraTXxnN3MQtFV51C2QGpEf",
  "key1": "yfRSf4AgMun3FbsLzZ8iF4X8g9VQB7gPKTeFa9KfURABbNjf65CcbQaHqQrhcnxdg4Z3QAZz93XhazwgNAGjokb",
  "key2": "2fRrbKVxotD6wfTRrXEKHSK2eEoYuYuPrhqEa5CccybA7cgbmvGBxckNcAr6nir49QR34GoV9STXNL9hUxFpNMUp",
  "key3": "5juToHiwHNcAUwJnvNjmFvxqsQVxmBv4nCvXXqtaQJKmXCUGFHB1aMPeqfp4qMxP3PjvLWSQXv5uJ1rUMLzMAuPx",
  "key4": "4Ggc5CEWdBApico7XiVJzSymoysvuqo4ghPJucJ5WMtJge7xYwaDi2cPF4wHmuF4DozMbyFYSjV3XsZXy6VDrQfn",
  "key5": "5E9eis17NKJDeWXX8sDN87B4QapKqkzCKgMbH8jA1zKaKMqaeGhkv8THh5w23Q8rHkXM2qG6Day2zgaF6cxVCCaq",
  "key6": "2ZZJseVytAG3PXhz7snqQj2eCinmSzZqvTtPXgFBUBEXy9PT4AvEBNiBMjNNfdwWY4oLysaqJFCB6LHBywHTskvo",
  "key7": "M8mTveAs7cTojpQs3DFpJWWndhiVPpW6wiVDEqx2ZqkHKjG3KqmLN5GyuZdXGDJaRSrc4PbjK9PQsWcSMdfDvis",
  "key8": "3DnzDt5PLC8eP8EXijvDYrWrxveBdNx3wPjucepavkoAGC5LN95QKte6cDy4itYbjXw8SvXskx6Li41pCo5qjJdC",
  "key9": "FvWJvGrgoo8LKW8zqkRuCjURm8Wx1wAq3UDfMpTrCF4oFGpBXF3An7bQBwWnAgSJ6hnS9L5uvebCaQr99HEDQRS",
  "key10": "5vpvhaJKu83mY8A9TbbmUifZELWkuiy3G5b6CEGqxmrAQ4YvGYAiCMvK23JojYzGtkjWjwCPxWPvayYJa97uJ1hS",
  "key11": "55S2pAKXsu85NLkJsyHKtTAwMPvMWAowgME5pHGWuE7At9y43UTadXedE4HzodkEY8LkJzaXhKVXEG2kE5mxD5x4",
  "key12": "5wW2L74noJZSQXWUa3V69JhYpySRBLH4f4CKucZQNhhzfEsNi2TFb9gpG8wLS9TEgDfQHfwg9xEkSvBmLX7XwEZQ",
  "key13": "4aKeFWE59oR7V934doNzRRGnhEXDfWAkJ8QAQcyuvK8xMtvsNudyVUSr9JsKDdoXV52okZZUEfXAEPjtMGW9TBXB",
  "key14": "2hyoav75LFy1S4smqWYBVGFr8eknfqj5AAVrSDeRZyGaBsC5W3CWvcNRjgsqritdNrZdNjBMCMqJtTpjKfmARyV",
  "key15": "2psUCBLn8BFKgHUDTWopGS3iF8tbZZzGmticio92CGQP2fBDrpQjeHYZDXo3y4e41Cwj3Zxz47R2cEnYLGPtJpdU",
  "key16": "59ixXZDdUYonkd5qbD2VTuytSaJXr7vHSW55rAJZwsu9ozquK4YZhKum9ibqMspPsy6qkXYck4E8ZGZYx5AWB1cu",
  "key17": "2V82kYGRGsLw45fWRqNQsLPJVavhNMYHP5MbdNkt964aNZHojdQPSJU3nUHueBY2A2zCFV8jMwYjgfCmuo1k3mjT",
  "key18": "kTUGYM921jtRkh973ddGvreuLEdnJRk5CS7uwyua8NeGN9T8BuuEndoCfhpo3EFBj5RsiiLJb7tY6eWP5Lkigov",
  "key19": "5NQ7pQNxRbC2Cj1riAqfkhfiZFe2MmLqHS2vLQNGVVadsgfkzrcqhAprPTtDBM9bKP3T4bmPTsbxA7smKjT3R9CN",
  "key20": "3sSXk6VYMVZPgQEgCZytncuPGg5Vz3MmRyuutvhUbigdpQhbgJcDmG9mpy14qtLRFrtVRLqBchZaU78Lu4h5Jq6A",
  "key21": "B5Jf6bUPVYwyE4d4Q6s9vRLjMx216iQaaQPJLGXXXhPGcaWoaC3BLipja5e214XLagBun1u9y7M5ixaPnTbgDip",
  "key22": "2KeoYa6Rhc1xfPYtt1UojKHQ1BYn87MmotptHFSsyXB8rM89t3aPiLrYcEwsQHCRjVmUJyRRf6kW9YuKa62nuBWr",
  "key23": "3Zy49JMtpAveRCrkQkw2pdYsY54LMbeXK6YYg4FdXZwzYgJ7BTC8cg6WW7r7eFvz5UcR6uXWT5JFc7woST8tY2wK",
  "key24": "4Az3zEmYWTcHo2aNxLx8YNxmQt3BVGKGW9sctxL4EA6d32aGc4y6sFhJy6gHqccTx9sXcafoM8B7QYCWH98tJdNQ",
  "key25": "65wLhSNJDs5NSdQw5GBaF47yvo3dppjeg3ypd2T4QhXzY5yoqN3tRXghv4ywmhoz6ASLHRzfhbgWz9orbyX6YYY2",
  "key26": "618dCsJvks5QA7M3QGgwGLCedwkxBE6yKeKDzszyfq3MozdnMuRkft723suEovwR7ajcxxrau73K6AyyQC7efyF6",
  "key27": "E5A6CN9nDhfcADsEwz43E4ZoVE8128VpGyXPhY8w7j42owyiReWkVAxx5BZE5anxRzQ1hQ5JyxHeCCAkamTEb3H",
  "key28": "CmVR8ZLFyhpzsfTpoxPHKs2B98L5ENdsKqzzDKhiJoeour4TneDPpuwQrPbSc6yLwrY2gXp456AW4EhUL6UXWZR",
  "key29": "2UM8J2azeDY5iG6Wz46vJxJ9FbvUPDYvAGjKQBaipNHVwkc4C65YjZChmbappknpsVgLU85fP1Mz8ZKHtP9CPt8b",
  "key30": "5vgHqYCfvpBXrP8z7uDYKBdCb8coGrA3ZuX5gDMakbgnyPvhhwXm6m1vC1fJ7QfJFhHr6GfTn8B5xkNkSiYF2WHP",
  "key31": "2nFjbSaWN2sVGbXVFGbQUwBmZ5wAFTPrWSG6Uk4BoNFJSyHZofbmSo4CWTBFeMz2coPdroaSNmefrJd4RtreXmqP",
  "key32": "2tGBw18ShLsUcQqdWn1LxAjtNcLdZhJuSfZRrcLUiM2NApVJyuMtzo6xZJ3XVKVVBqZ7abtuwCxdtHtYWRQnDNXW",
  "key33": "V4Xy2f5wFXprF1nbJw8B8PLgdABP2Xr67b3Djn9QmGM8YT7CdU9Xyo1as7KGKkVswsRBjbmPUoXfrfuXbpd657L"
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
