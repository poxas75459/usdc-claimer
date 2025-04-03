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
    "2z2rJWCrEkiNiSdQFj6jS3Ni8yHdpcUm7vqzoZ2HvhsrVpgf4FxE5iRu6uwqeS5zpfQYxfGfxko9mT6T5vMpDqwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWVTY8c5d6mHZL2EHfZaxc23L1nvH7JrvvdT28mXzrJABDzBtLmHYf32VGeJDEY9LFy7Qz6FU1QY2Pq37DfHdtt",
  "key1": "57HrBsRQhLep9vcSssUPa1aLdjgCx3P4oTKYsLXrrCVcdTEuuemaqbBvwAWx851r5wwYu3k4ZRwDabVYLR39naAr",
  "key2": "3aGbivS4B228nXf33M7B8j2CMgsUUEzbT5GS6mNo27uBK2NXt66fDEyk3tLa7VYLi6n28dU7vMVfeMxKWYTLxEAn",
  "key3": "3DWSmE4gGjseYVonSdZmbjKndc9a5vg63EdGLwZ7c6aFHNAx1VH3jyysjqtHWtmycwV6CMWH1TXwo6G5C51nhuqV",
  "key4": "3swwyDtwNrPjysmQBnLTF3WtnUNZp3CycigBgiFAvZ2gV7nDJrWuA1E2YDXK6ptt2cVqe2syNfghbXcNMURRDG77",
  "key5": "2XV1JuZJutfeQAjDbuSKyPTcgubksXwHBbrXPwQ6WCFxqQ7FMMFuCeK46ZVmaWH8vgJLBoCQdDRbvA9TfnteTczK",
  "key6": "65GkxKa8ZG8hrziwc1BFST86a1ZYujqtxbeMo7wykPnUoiMPVDSM61TG9sEvNPCyT54kAcKR7LfBTa24NRs11ZAG",
  "key7": "FmiB7fSCMUb7ce3rvWJ4m1gLSSJrfrLX8Q9G1Gaw56UTti2ia5p7xKkqwV9CqZyaAaDTadk5op6tMxsCwjEcTTf",
  "key8": "3edFSeZ82whUSt2fpPP5PZcqVv88SVsY3sHdXPkZ7H1bJQDxjKYL3twivXaRDsfEpU6xBVudwuD2Jww2zr79t26J",
  "key9": "3xrHkTKXcBYJcfM1aZJ5mv4XEHDZTLidFdRC1gpRsTRzfeVE4Hi5G9Q6DZovwvsFz3DYQMVEJ2eUDAZsat3wzKYB",
  "key10": "5dxv2znjVfxuJEnNmBLfR4H2jZtzSd1NysoVsVGL5hKS4vpMQhG9B63quHW8DRWfwA3GwTAdQgUKbVjXwHtmb3QB",
  "key11": "45ce6A8aHMRuPqhzYV1ojgiz2tjWrfapMmCYiAkBbKKnZLUNNpGyQQYdNXxTPj6CvdLDsbYshcoKNEF8Uw44dZmh",
  "key12": "3r54ShCa7Nf8PdviCvHhXKXwqXYLu2Qad2coFBt5c4Lr9KXTkxKQ9HBDpWXaakhFrbFFmiHZ8qkhdNpmXa4imNXj",
  "key13": "3ZbJ5YAJ1tMR3K8P2utZmNUMtu9drtAL3dmfEk74DLcjdicZAX2PmvFn2dewcft87LNVvvNX1x3aTLYkYUzbkZ3E",
  "key14": "4ELVQgSfyk8E8a7gheQsMRGn37VqimZGYyjWfQS4abZ1TjCAZRREThy4zDgjUGbgECBfNroWxQeCWkBNZZ5ke7R",
  "key15": "2BV9WLR7Z9UZmXh6eNfKk4VUiaXvFjjexgHtNKvT3BbwbXjtNrYAhEvPwgkQgLheE1oefgiYZqho4HDXqjABVDCf",
  "key16": "343LMq9xZMpnkT1ND7CgzMwRXuAWpjbN5oYBKBbrTiZRg5pcu11NrCzJJhpJNXgzjdFh5q1dNTWhvcdptAyfA7qz",
  "key17": "36CYBRbM6g5v3wvUW6NJkieMZ6FpnjM5YPJVvNSwpZXxfqeH9LKK2WiaBHyNv1tJYJ9FJYSjtvTEc9R8nKtXJvxc",
  "key18": "493deMTonHemaexajY2Avvu7vD5fW2vfPaXLiVQta5FzWLivJiVQ2UyB2tfyRTFM4BX6BwPxkwsMduEq5mHGuX9K",
  "key19": "3gQyvdzqZuB2x6SJenPgKKdkWcCdC9X3vhz6WRS49DpQEAJ3fPxchzrXk9GNY2UamdD8zbTf1WjZWyfX2sThUXbF",
  "key20": "3UH155xFBi76dMCwNsa4URs94AS2J2KnELVNhdUETimmjxxnuDesskzLLuLBLXX9ttrv7zaA4HDMBufMeUUWgvh9",
  "key21": "37kBwZxHNuuH9Cigu9hpiFq7aD5VhUpHvCzBHoQuaFdVqg9YALddsRyxQMPVaLbUwdKM8VZdxa1ZeMz3AVkXr3Jq",
  "key22": "5uHe5o8BJdwWXcF2HwPwzXMmqregsDR6kxgT4e8Q25LAxTy5DDReZCmBT33JXJsCuFRSdrETAgwQHCf5UKkZnnD9",
  "key23": "357FEQXAwPoaYDp5f7orHwimo6ijShjdqfxGoFwEf15qQzpih4qXJFgLpkD3mtqZYc7jTmhDrDVWZD7Xn3Gd7UKi",
  "key24": "4jQX8KMfxWBsVhRPu5rGsJPzMeKaRuo5BUTygwAJtkJ1SwrSeyAFVtBCnSmsiAYc4Yesgbn6QZRxQgoLdNzYMBjF",
  "key25": "2qCDfovTMR8ukd36BeQ67kDkTnwSfWE8Ge4YSZ9qWj4iVyKj8pMiDVG1K3QC5Jy3Du7NYDmZTdZFibyvz1qtySvD",
  "key26": "2ZPhhWywZvGyQz4CNk5ZF4pwe8j2HqpMr8Hbhpsn8XGwhdC2ao8PpVhVGqgqLso1SbGzmaWJLPW4Lwvr4cgEeyfh",
  "key27": "nmqudTgZgxRJndNakHtSYmHGTAo1Cd9hXc54AU4JFtGc6YCy2BaZZGmx6FSvCTjg9MX1eFz1AZJkZZqA3MYUgb8",
  "key28": "3P32CJ8SebBuYLA7sNTxxFYN1xDxRj7bAx27fsLzFsoJYctEZdAb3qosjRo333dwoyFZEV8BD5AEBETWCQCN32tL",
  "key29": "2546MZ85qCKXW7xagUvnzp7tkDtGmw5trGSmbn7mKuuAs2Se7EUByR4fGEaxVwgaejESqV9s7rtVUKxFxbBRttGT",
  "key30": "4qV6vxXEga8xsh1t1m89YrEzGBkCX6cw6GqtFdi3CKttai6Wp2jnaeMCJo8tSbyqxfXJWUkpKTsKTYutmYx34SWZ",
  "key31": "CvdRBBD1x7vhVcjXuF8cEWSy83hrv4DnJt3edfeuy4VANLbH9Q1SxyShqc5EY9QKVBzwo13WtUy3UTV4s433tN7",
  "key32": "2xKiYhDFgcwZCJs29uJ3mMW8TQqL5XZmDp1N6zC2KkE9AEpPBqLMxR3kkzExVkWMhTtdgWjZ48kCqWAPHWbcqAtv",
  "key33": "EBgZQfnPnXz9mWZsYcRWh6GmesH7pX1KCtSt3fhVJiDrtoMz8HaRjsAvJUJjMH7xcb7gAw26DJtTCB1eUvJHMuH",
  "key34": "61ZTcCyaVdB8CtFb4hquWc8qSvycaWNW7ACaCT7JogtPuHNaAHfnHZD7thFcnEiv4FdjyPBfoZgK5HXLmQ1Bdnn1"
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
