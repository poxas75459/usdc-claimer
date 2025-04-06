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
    "3ajH34kv5jLJ1d6DGyNzU9gHCn2jtJpQNkvpTy7cE2o6QMGrwJ56J9R37hF6WVGDzbzBYbW8Qa3bdGvaUVohaevc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ewKPMHNYTpbjKnyycp265b6GoJ8C9QMw5KbDCPuKnUvGdRy8wJQ3sQs7dD7yQVdpWVEpJeRRFRzw7GbLEq6ioa",
  "key1": "28MhT1CgUeWkp1Qx3iDHwtkz34WiZeYXzxPy3t4ZsWXWYojqtBCuJzneKMgwW9MQzWx6VNJSCJjsyzRuPkp9g21b",
  "key2": "5fdYUCQEZXMqD7iJvUm64C4nuHEq4XgmkD5T6YxZmLEoJSUtckUP7pjc7tFmKbjuDkf1TUWq5h9b9sGiHhK5vXMx",
  "key3": "45HZMJhRkphbraTogBYVh71xTnVCcHiPEsL5cq6EzfQrjYdMjWG1UDe3Pi3NcS9MREQtxHjJYP4dxqHYNdhWA6V9",
  "key4": "35ApXYyvN54DiDA4dcm6oX84uQxbBfU6EtGemJt5jhS1DgG13xNHj56o7KjvmMxKXEC5Gc5koidbgFVRA8e6JsPk",
  "key5": "3c5VjkL6E2e4YCaGugFXSkggrcV9jN2cE6CRfyRhcW6MNav8yeptLJpghMDiAtADWWYXXGj5LQCGhKSw3G5hUTFk",
  "key6": "5C2RBKcW9zxwreWHebCsf64NdknHqrw8bk1Jq2GzMgR9Y6HiqrqpNkEFkVQXqWaRPHgfpYeyUaFEshMQptyPzBN8",
  "key7": "3CnVTMqE7MG3NLqpugk8eMXBocBSbgA9sR5SmhzTUCTS2nT1mCnnWoyJaw7fxM3BccQQxEfL6uzRbmGCLEWB5x3U",
  "key8": "4t8a5XWM8SqcNyHoCfFihHkdEnq8qrSVEB9nxEDcBN4P3t2tZuPw6GuZ9QwkFD8JrbQX67xifzMubhgMpmUSwSu5",
  "key9": "4Ash5k4eagEgq3HhMeg9TjZ8aXatZwdhDSFTesxcnqy2KjfWxdy6P9hqBxUNJFauVy1ybMwscfiSaydgkhGX3NA5",
  "key10": "rLy9dCGwmpwQsa8okkggqtGpesN4oyzqGSnP3bLib9baxZEhApvggxRSGpf2MrYMiFs85ppUSSrpXPJkXSKaWGp",
  "key11": "FDyaT91woptDWYj5wGb3CmjQG5sjxa39Lmjh4nYLcmr9s7mNm6ZduZmE3gNKxqAMW1BATVaet92HSk94NvfLMwy",
  "key12": "2jKk2yM1jCfhWiUB5sFjPGaKQtJqev6gWnaXgm1ZeJih8vz5o6ArvzWjg5jqJxzn1waAqqJnhYuj5caAiyNBmFej",
  "key13": "4GWUb6rVKGs1nhRw9KfWuRWMKRFzDE5i1VQKYz86sjRThUZBF5SGJZQ61pCCpSetfNuvTdrBgfNyfwBQGttG6hmq",
  "key14": "4yb6S4JNUFLJCGMMF5WEmxZi7SbuS8vyd2koTSekFjqUHGqZBrULHbGkJES95mPLBBH7292GkbgWniCe3pTQ7C4L",
  "key15": "2z135h56628CY3ovFt7yWbMDvpBM3xfSYTikhNKSCnyELM2B9VL4ECMjGFNHv7Y3eA2mFZbnnAhtw2B3DvpbnUA6",
  "key16": "2dJaLRqY8eeyhm5TtuViABsHMYsms5DTjrXpXqvtYGn6PpiPwiPq2ZiuWGJ3Qe6DZxBfuqX49Zg8C614BZFee6Xr",
  "key17": "594brzRCJmcZeKoELzNVnfWoS41QMrYy9wuKSdKE7HjSbWzKQS5fN1mu2uzqVudprTFnzRi9dZiyNNomBRjND5jk",
  "key18": "5im7kUjb7AaFjSLFmCt7zpLk3Tce28wqsHcDouxddfTKqNqJSRmJyLddrnGiWC6vDu7i8gqAH87CMhXWhej74tkg",
  "key19": "5wcDgbuDbuYAE9RfwrgGHLPpr4zyMnebEPsyA6jtW9T8H2VXbPvpaLrh3K1CrBbuD5GjdCKtYmVSJ9pyqVkUeSnw",
  "key20": "4tHizn8Nssr7tJHdcCX2uU5xiaVtdk2AFDo6Zp5b6qwVrH5n5VpkCbz3GpRhBxAi67zQUZhR5ARYAV8SgcFtm6dt",
  "key21": "5wTGevY7tay7LpuyCYnVuej7xmJHzQRRsiCX4XKoXcEjU8G7MtYBBdBBcuWvcoXG2gAMtPe8sJAQfd5xbskDL4pa",
  "key22": "4YpG2nKQSGTJpvsknyduNyKW37SSq3nxyjPA6YDNU2kMjNefx6x2xiZ3aGNSmSiopfqE8jBiDLztMJqx3ysTLLZb",
  "key23": "3qCLFKC2AHbjM4t1GigRk7EndqVwd9WVDJnyP9bhLwCaK91LXchzV4b4T2qe75wiwjfMz5Q5Ddoc8Q6qzmLyiZqe",
  "key24": "sBEhqv2zrR8A5PD5xan6Wmew5Q6LzURtmG7Fh8TC3JM2X5YMMNxALN2PaxrtLWxLmjr4PaL73bGiDGjALN3NRLp",
  "key25": "C9uwy76V9igRbExWtQavNd2YqMU6ze16J41NCV1cPVqEoqwrr2gYFtjU6upfKsb7HVKvRDAaAZZix5F4dmCTook",
  "key26": "N4AmhY2bSgnw2Ph5tdZ48WLe6nSSDNz53oq77b9pj7kLytzsMZMkC9EG1LeUfYQpuawBKGp9TTHyUzCqUw1x8q4",
  "key27": "3oPmjeJAR5KcL6A7CjjncVXcTuFkTfkMurYYP6SQZB7heryNbRu85BnoQWhEHeZ1cmQDaYaggBGxsnDB7xZyt6Hu",
  "key28": "4dfoo2WQwcVxxKYJ8y8ssw3U3s4Hgb48DXiLYVMQGk62sN5vVVYbLAE33AXCX7SV7AjyoT5EkHcDiGspNqcWJMrx",
  "key29": "3BaQ6aTgHmXCcGtGATgcjYxyCL2WTj3hMq7X6hhypfJUxBxqXpNY6dLTb2CFooHVnaojnJuyi6HtXpPZqsqiKNDs",
  "key30": "2B9Qw7TraRe6ys91rbX1H9zYvTVT62JWm47F6QMh7uMgn4Xm7xGDrQFMao5cu6WC6vi2Ne1u2rUaRPCw6Ktj3R2H",
  "key31": "3XHeo2zAzXgdwtxFFuoiznQNLLKeSapuf33yeQVkRwipYTNjeMgD7ZEnkGnyziG3c7aWHN5aQyKXRb4tSQ4HjcH3",
  "key32": "2uWsLbQUhEFR7UGYtDq62m3f7thiYQD8vMm1wqWtLrGjem2qaUmzegTPZJYXVxD5pjwGTv8aJM32EUhpgghbwx5H",
  "key33": "5tiKaeKdVYwV8ct4QALwrQmwBNMi9wd1EK8zxPNgQh5djhkZbreUXvKtXHvqi7yzyMAkNegbk2qy8cfx2utGa5Zu",
  "key34": "56DBwsaiypGjjVT3uv6TrfLoVFqhByQeW53uMXwesT2pApFXey3UgguXsCtU4ts481zLJ9pP2wPsNhiBY2qLT1PM",
  "key35": "4PE466V88oaPoh44YAvQBuyt8GgQY3RyMNCbPZodQNuF483mGCCy91mDRfDx93h1oj4yGpXQuPa7J8iY8JrqbrwD",
  "key36": "5CFsUY6pzvJ72Np9cfd9gvZK2eVZ9YQ8aq13kzcZ8g8ak887yU1Vo4YUx4bUG4524eoi4Btd6i52AzZdtUSrt7uz",
  "key37": "2RJURAZL8hx9m44vapqb8EGkfKAFJ3NnyfZvv9oHYr8dtK8bki7dtyUq8f6kWvmtJ9ZEtNBpA8BSRpLPZpMnN3Qh",
  "key38": "59qcHyae57ykrbQyiQFphrDfmniXf54Pm6U3tiRgDEmQM3DvLxL2DNApVzqRknoKaGJfG1aHeCH5TH7JTY8rXuGw"
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
