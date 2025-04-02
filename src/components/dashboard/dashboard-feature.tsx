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
    "3TvJc3SJ2PNDrFtv3BoYwQs29Lv4HRgocQsU7AroZxQnimoL5SvqUHFCBY27dkDSEEyLiridDH7NdTPrXTC4DK1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJAVN7Qo4nUQB1pbX3nhSdm3Vsyu5NPMAZzqN1atVXAdbrimqMbNhhHpqcEHGvZFTLicSprvLhQtU1JaQvxUPtf",
  "key1": "4JCFHggjdQa8vz4SWHzeTt8Rywoa8M6oijUtPbuVUKcW16hXNgUu3XBXeHR7SR5pkWwXNSX37nmXLMgGuD5oB1Nu",
  "key2": "4eGyrdECaaay87wzxdRX6V61WSC7ViLwH5yB5sqfRehaEpdpRFz92y2TzCvvJPWpxJmqVchWvBtkHvoZU7fsuqfQ",
  "key3": "gzdYEQJmsVAnEtEwwzJbNWbwZMpsriM6mnCzZsGydfGUXrThPbTX9aiDiSo3ZsAN9CN4K5rurXam3jmSdz2CPcD",
  "key4": "ADBd5FHrioPkmL7wYSqrkP7iBd248zG4zZyujGk4e5VbGzvTWUshcjH1PoaGNep1TLKhYXjaW5Cu8CbrdZoyQsY",
  "key5": "eQGednZponF52fu6CWSLqxjEGx5K6H66gWVomyjm88Gdg7RTyFtVpfwJZ53sigzSVPsFR7e3ogghxYMMbmVJatk",
  "key6": "3EpUyGCxn6X8nX33TQppW12KwUQcphqPzaUVBn1BRkj4AN5fvspa227Y8wQzeEpz3QzE8yHTn5KYch17FbFjrPhY",
  "key7": "RgicXfMi4LEy7StsbqrVjf99Z7gcdsYnfzF3ozyrQDj1EzRqoHZ5GuVR2LqEfpcN3GGpzDxoVJYx9rYW1WzkAEP",
  "key8": "2qQJdLQKJ7ohsyKhKscawGfDYW7UiaEQ71oZxJT1Y1EEsoUs7hvqvzeshTA9rRfFpHbLNnLFgBNntzzrYMk72YUd",
  "key9": "5ZmQ79aCBwA1DqLeuxcFaDfqpvx3aUeEaDpNXrQ14dAyhpYcc4PHW2EfeAqL5M25QVnyTgWVWJcG3LQ9P8iLhVrA",
  "key10": "5ofBTEwPqUbhqogxZKtQfJyva3H1bjeVm737MhHYnbgmFXZBoEnmjcWRSc6GdpCstCW5s877nysHdMR3hPwMpZ64",
  "key11": "3Bq6uFmWhHzaUHFrA7GE9akL8yuFw8FEMa3HrCY6hGpCeXvbJCTfrknu1Bkk3we6RkzAGkKC4sYq2sZEzsCkkePQ",
  "key12": "66XCXP624TJRJotUdrC7NhcjQWM2s2CCbiGQe9eXtEjW1VcA5Tg8Q7kBdCjDj3aj4N4F67wuyDuocC36MtN4NYjV",
  "key13": "5yR3ZV2AqzKMwZtqTfVrzsCsnD3GWHhs6dqcpi3EcqCSW2nZeiSHZKGqhr3n8zR3TfwShoz7b6KpEAiNoBNw1xJm",
  "key14": "STcUUYxA2ePqwJ2pUmSR8mYJGSCRzh9epsZfJmU9gvw86PUJaSHxKGhR32msy3mb4LN7PG755K3pBSd85JfMfF3",
  "key15": "xff4oeTjop36R5tRFB3mBosDd2BGwQgUCXiNJ1PEX3sqkzbvSB2xhQWQnzEcTCNDbTRWZ43hcfX548RiVphxxLm",
  "key16": "32gRkGEsU5FEGe1NpPaTWyaErd1nca39x75eHk1Q3u9Zu317eubh4xaJELtKqMyzWQpgi2Ve8F7mpgbZBoEAbU4J",
  "key17": "2WvtpRiTRPYBZiW6DKtJxcRMpB3bwy7eWRs3ThA8R9NHg2KgpuhtU6Q7RrxY4CuiVgtvuYgXohBYSZumGVeW5cwE",
  "key18": "3kMJjHxDyBSk1pGR56BGattBm4qZTfYUZbBJzpvnxzphQpD8DZ9SL9apbfkBpYSDw37ceyEJEQem8RU7ZfFyNwqw",
  "key19": "UQxiNfSW7kvWjhGE6PCDwMMajxMXV51JjsQYNSE8Z7gWakkecBrsrxFYrGJDybZgrAMoV66hp6ex7H64S17qoSp",
  "key20": "49Ty9iE5cC5LUuGnJnMZf52Zz6dBLmu2PkHaABF749JX13ygKY7aV1rhyHUSbgHgJkPHu4yDYLPNdSX1ngjUGZ6A",
  "key21": "4rSGo7fhuYTwW7YuzwoVYnBziTZ416rqzwDMNdwdcBAqagFMcwUH2MjEbRLihMgeAs3CyUaNXcs95X8itQRUtUoZ",
  "key22": "5vc4g4CGbGq8nNkCAuXD5UAtrPY92MBDjp61PQs6eAs2GuEyeX64GRukb2p7m7aSBhqRRBLJ3FW5Q4feky4ajLAz",
  "key23": "3niXKGvAw6kdDah9EjNStg7fMGcjVrLScsWFsnm4D3yZg8iKKLMSi5JboUkuRGZ7FVXuFyX1aAuri8pRXdToxLox",
  "key24": "5aDh82z5cFDvyBF4sAzfwsWbj94316Spis39dbPCMWGGgpoqZpRmyCQeJesvztcVGEfjagxvv1a3UBwGp9Mj5wD8",
  "key25": "4W8Hys9dchMJ9X49gpbtBdJ5PyqDZpwf979jAXyo5q9RnZR6PPkXecAAQfw41m9gWh8Dcyfsn8So7gFVZsSUC7Xz"
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
