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
    "3oxbPJEM1D2rSSVdhRg1S5KAiQ5fPvpeBbFd6Z9CyxGzZg8DrHbgK73v5mQZCXvSiQJfJQyHdzmJyK6biG8eY4Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Egs6ooiZtFXMurARq7RBthswdSvZAWDSWbwBKAKoFoJdChhtPTRVAjGcwxiwuYe315cxaeRuqz4cjxe8gR2yNiX",
  "key1": "4vHTYgW2Nno9duSgTjwMrEGnmvQKMxoPGsgtpq84cwAz1aE7J89RNh21BoBCWpb3bpBpSMZKqmRFB6483ekMESVy",
  "key2": "wVx8yzsKiGQ7pYzZSjMGCLmZAz14cHTGCYe8PtdFsjTwWMZehjtp8QY95RztvguK5b7tVC7rjDmPchQss4ZjErT",
  "key3": "3hLz2kbxju7CnqGrunGckQeLNL7E7iwe9o2jrpjGDxYiEhRP2kE9X8wUdQtJ48qXFCyTe2c4CL54qLMhhdFtZNp1",
  "key4": "45fDdiccXHnCEood7BpBNAg5FX137PddEATwv5wAGsbhDJjvipS4TDkXTFwFGnB1bTKnG95NgtQBNxG8EkJCFaxs",
  "key5": "5BSuRsH4RzLbrtnr2fC7KYr7D2FC6T6WgAb6RmKcc8uuw4H6rLY6GvFWt7g6ES2hKvedHKkUav3fP6NC89SuBpg1",
  "key6": "4dcpt9zzAeAdEQBwAyzWGfc8xvXcNKV2Lc7RxaJbMwA6tm3kSrzn1cZbXZUmDgEsVtPfYobVCmJUMECxhwGu2Rre",
  "key7": "3PTNzJfnKRQ1WB6NeQSk6icuQg4VXfnTtXMAtn6FKvRrNvnxV3WQKp8xHdZmkU9mQWXbkoqmfZuEExU8rBc7NdNj",
  "key8": "motL4KeMSU4DnuMDnqyH93ik9uh4RkBqg9PFRraqrbMzCddTr9n2mtVLqrdnQxon9QACY3YHAYiWpLyFUdVBpbo",
  "key9": "3yER3hMJRg5mW1riMyjFDAarB2qZJDiKastJaWnrFZ1ejVqUN6xtT2foDbrHK45SEJni6EjEEY6QTHJxfBBtSGvp",
  "key10": "3zmFxVuPByqEG4YmsFhrqoTePJAYvoV614mGLXp9QkpT8ZtwnUFAaXJkVJWhnkuxHVLewR2wgFprxLY29pZATpjh",
  "key11": "3KD7qvY5jbCPBF6M4a9SfVJCQy1QbeaofFKH9kvppSuTmW3h2BdBw5oErRJFRRfqnjw5cmsy8w2JRFHbWBbjoGkA",
  "key12": "53u94h1SDjUjhKcUbGKGXUHKXzw6ArTT9doCwhJ8LRjawt15U8J7cjBM6HxU2ufY6sFPZEuYdV3uQFj43SYEC77F",
  "key13": "4HyhRxQNYbZ2WpkMSRiUxdeJ6bmJFmYe8JZosxUeLJaT6ZQC6pmEt7LwiJyH5yxS4BTckDHemM8KQF2CBfeZQ85Q",
  "key14": "4Q7jDsYCLb9toz4HAjYonEAxGkWkcs2UB3whHQ34jS8geiqFcdBUkX16WnsWSw9GwktM8DNxoWWVwexTW6KMifFL",
  "key15": "2ugX5YLw8eaKbLAVCMaR53dDai5LzFZPnV1ri9mUjtHjyygfWKdpnTbxzvRKs8DweQsoJn4yoSBdeenyo8tXxymc",
  "key16": "3rs5j9A5LWM1FFgUC5pfuDaMtvSLPvkd4d1qFcaAMno4EsctAhMqnZ8fUeaVkSTLWDfvVavuN5M8VLpFfN1HHx5K",
  "key17": "2KbekzVAhpAgHdbCbhgr7TJsaH569aEaQ57XkQrg1L4ANrAew1r9kWcFgh4XJqSXxSnir7WGx7tiWfE4huKPUYbe",
  "key18": "2sN1Lf8Rfk2ynBR9v9aYWUJe5aY3RasvwMeM15WR5d8nc6FhqjAjyjsQGLNag9zAztFKuJEZNmxf2Gvbj7orRerR",
  "key19": "3HLoNMPZKbux2X6yfUCMvHxoLj3EhFbgWqctAwsxzRZ9kQHxPKBpVcknEkZ3HKePsYKFpxrkFE5vSvSumYNVw1dR",
  "key20": "b3GZazQZZMgw75bJaK4didjtK2KodHm6AQkDiGp5EMaWtQNk3uERr2Vkv9Z2G4ABs1DqNCmYdD3sA8HsnEi4p9j",
  "key21": "67mggs9uXXvfaZz4uWWA3MPmxNsPPGYwuu4FDuL482qTwjMVPn2X9GvFRXuK6Xc47Qp6ju3yFCMkDDfTqRwKnEHU",
  "key22": "ef66oz6vjHMZrATR4nqfGBYEbZ9ew2vwHxXJ8XJ1NjLfaibyTJsHJE58yB1HnU3iUrc6YDmW1kCxbEa8W2R7jRJ",
  "key23": "4B1yBFjyen8HpZ1tR6jjZuFXtR6ARSXGCQiJLXWYbeRpNBZb4h5weTMm56N75tbZH8YATE3zaXupyUxTybyJrn2K",
  "key24": "4pwH67Ga5PnapiKm3RY3A1dYWH8c2rwDQymcikEtvN54oNN6yuHQHiq39EKRZ82RzFYYe1VmHoiYJoVVG8uDjuuC",
  "key25": "5qbatsxM1uhA2VK2BqeFyMRmEaFH1wi4cuT9cUrtxTXz4EYbDRFLjbaMFmCUG7CcxeN487SbMNb53aR3RVxeJekK",
  "key26": "5YWMhmg9J2uYaUHdpXThJkfzyBd9TARFaWMV48GzHLmHj2qKcSNFmuLSvfaDEUKrxBRY82RvTfLnABMDwS3Tc42x",
  "key27": "53RZhahmAfMNDNWscKxXKpMeUHH4ugsnbe7jFd91tp2xuRFCCEdCJsoZKV9wUgFQrwgivphbbRfSAsoAvxq5XZBd",
  "key28": "3VXSN4Sr2oG6q1izsj9cGB5D1dVa35pipMU7MUdZSPDqnRFGSzN4F11JbMFQFFKg5pdjQCy8dV9vybAMEnhHiqup",
  "key29": "33EHbWux7FQqEMJWVhyUHvXEprcRGNhZncvP8iinr5hS9csNfmhqwp9qvnJyteCZRYgBoA6roRoDdy4qVEMKUQyM",
  "key30": "4kr6vJeKpfMeKNbqq9GNeNHT1rAqbS8hNTS3frfr5vFsv4m4NvAwZvYbdvCjiSaooeoc3ZGGKTAm2YxfeE1WW9hP",
  "key31": "3UPEKUNPHij9usUfzkHWgZUSjPtJYVDMC56x1HZmLdbEAuWVTizCqyDdcEpjsHsfJYzoiPFXWcPfUX9qRGDm58ax",
  "key32": "3PphXVcXwBf6e3j8ixpmPKhRBGuKEvfjgT8HAZ7ZuGeFnUizEKDDvjaEkpjw6k5vRzkvTK51P297YfySZNi9Hk4g",
  "key33": "3UjEbKHJ6PebUtZyqzLCr7ohAsteXbZg7hvMFpnHhSL1ox2Bg7qHS5J9rDWpGzd1Ngqs2NFx6UibofccJPwApU55"
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
