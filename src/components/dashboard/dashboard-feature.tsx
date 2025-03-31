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
    "wXLwpYJrmAVXhw24yrxUJnrjYgM5AT9kQkXCbaT7CBqWLASBT69jFhZ3iS6hP2DiKaWnHh8JWcM9tQUhfhPWRgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vB8XQpXr3t58fEtWGym9fna8HgjDvP8wwDFbYXoxzEZyWV7fQUUHHW13yEcpc9EeA9rHWVcXfVtETGzYQN8YkcG",
  "key1": "MxMQEB116yPvfPe6x1cm4Y638LZCtEPibVhcLDvMqThYpcb7ttuLDkD3hSJ3h5BGQLophu5Jbepehz74CNwK4cs",
  "key2": "2vxEk6Ad746dRuGwJQusy8WSxMrnPTGJ9N3tEzeMPDNdcfpjR4gBZg4uTGwuCxfk7PegCWEzc9CQzAKaLHFTnDC8",
  "key3": "2Ri54QwVP8J5Bddbzu41JzpViSdfCjhLt9Dqc4DU3E1AYHE5TVYLY62RAYr7GfqmrCgbHYTEhPk4VEJEubYZhxvj",
  "key4": "4PifBg8uWdseMXqJx722WjbBiFgDA9mDeBYYJcmT2vuLDRDmyqgU7nrv2HAWACmnzDszyK4SVCnABUiewKo4r6CM",
  "key5": "5yawAqztw3Gcyjt6Dwrb8wbAQwnrGkujcrUCC6dQuyAeSyiFemSkNMPWurgh1hte1jFZVrGpjFZNcGmasrWKNqaQ",
  "key6": "5DKjxvRuAJR98NPDV9AjQqzWeVjDfbP6PZ1UUuwubGjKoP9WJTdpGpN2MK9niKjH9q7AsEBR2UvaL8Z5N96UEH8T",
  "key7": "5yhWx8MBgFWJn3PWu7eoNWYGfS7bevMRcxVj5MDaGmDcRktNJhS9nSF9nwTATLLaUpBuHXEzHPagS8Qz7Kazfc65",
  "key8": "38inFQGAK2qSahBj6uR3XUHbJsXqtXSLvuYmuhE6ySyp2cXp1fBVjN2H8xSMdBTAUfMHqvpCEuL7fsawDHwsmBxJ",
  "key9": "hhoZk1qm8h5fepf3dSUzTHsBLgQggx6BEFnUYPWTTCeUJGyhqrgkZVN7xsGjbaxegdvyk6TR6zu3i8msKdLVgvn",
  "key10": "5ksYKUNCzxpUF9CTr2WJZ8nx5iLKVW6cU4bdH2KhHkc81SZyLa6j3CcHyaP8BZMtARhWoNQWxGtWuifJiuyp1Kqr",
  "key11": "22VDrhanie5fyhvmyGr88WJsJSgAT2Ppu8nTw9nM1bzxSMzeR37vKJMo35Xtbp2WF5p8SjTHr8UxqH1ESBko5uT4",
  "key12": "44QG7kC8wHx5uAWPpHwsasNJFgJfxMFU9PSNgj8SW45zJpMA7WQ666ixHRvtG265ojvyCQYU17VkNcwnt9GbgcZb",
  "key13": "2xczp9WxEikgXgAnCeAXVQByNGqh9bfMo5qzBFdrw5dbAxx59ZoRekjnN8qpBnkyAcajBYsndKZLXwqsCCGQdaBq",
  "key14": "64zyusXSSjoSJvw4ZCRgmpYFnNz3nLT4coBYd99J1WJsLjBf97CSYMU17uDTpVkJUybhyDuFN9N1jRgkzkiipgNJ",
  "key15": "4wSsHq82tjb7seRkdaiPhjLzJNZu8ztM9jhtrX3h8seztg2HmiTgWgyGWB4Pt6GSmyoT3dch5DwuzU5fpeJsQaSw",
  "key16": "4NbVmW7MJ2JZYFF7FZFNnvcXZkRwZYT6xYqMJz5B6P7TE8wkhoDwegw9wESMdKykf1rSXmrJguAfeEQy3oADNMH1",
  "key17": "2HVZRFXB6Zk8xmE6nCJh6C15VYDBzpXRtpB5cFcVxhQ73hmk6X1PYrdGCh2vVTjsUQBPPzfFmrQGGoYnqkQ8Kd5t",
  "key18": "57itwRt16vwEeD11FC4fnebtQcmEzy8kWN9QwbWwz7dGk2hLnG73U8oPYb4QXkmp8qkYtHXNjgbUofETmVW5a6UG",
  "key19": "3gwFhUUybPxBaRbt68eX2USnTo54Fy66F1Ax2agT3vkZcvjW6gxerGeik8EB3pL6fhvN3in73ejNubsZoVEzX7hC",
  "key20": "3Rd2Jekfs878UJJbjwPaa9ajpVLKG5vhUbXX1h99vX4Mqdy5DPzi5NB8RQzW7pC8MpE8jaj1ZowMFjBp7jBWYAwy",
  "key21": "3mn4SSmec2mJS5XLGXYcqBW7RKHSmbMV8z6iXq4NQYpxre5x5MjWH9iCfgzXSFJM1kGYp7VQqUA6pH5c7nm2JRR3",
  "key22": "royA6qkGXAP6KAXm3pzxVEo4K2QKzdJmp15C6wGC5Leu3mpzhhv1kZpyGUxKe69FJdg35F7FNShdXaUvE8rjrcK",
  "key23": "3e3nipe4qpjqTs8XXBEjGJgBH7F6g2dyQ85rGgETupSN4HVk5cXHW6HoQtgfPRp35797xLuXRT5zvPsaFKfJe31n",
  "key24": "64gbnkRfiG7iNJQdSkprujEhkr6jZwvmVLsJRe1wMKVewy2tqn2TFxLycjLhAWWXkYPtDcdj6VrLyfhAeC3xbCw9",
  "key25": "62q6QAGTzqxNWE99YikkEkHGTDZW4Z8GiuNtrTeSxnjA2LfHgYQXM6Vxq5tnep9EUdYnimZ8m5oxj18yaWGyYh1B",
  "key26": "a597kRMNKirpp6qnxk8EbcxzJFh7fmQK2rcEPBNJqAdadJw8WGTkvwkX56erdJ1AcUpRxQzquYVSvVA2snJtmfE",
  "key27": "4Tam2XE6j3BKYWcd6XFibVAQ73maFcTvWZKHM2gcZJQJtqAWtUjwjKXrzNNgs4BubwBm8ZWWcL6XHUWzCpCmYW1b",
  "key28": "5452S5ijDwoP7NAQQ6LdVGjQfFZWUNJTWR6MU37pRsY7jwcVMVsLXDMFqxCecCEzAXDUtP7RXpXRXX9zLa8jKHVE",
  "key29": "4LASZ7ZPVDGFsWgcH1Ua3YibvDhKvttF2tNpcoYaR9YcN3wGqNerWBZJNHYPWFvXoud41RHDJxLwXi5mqBpPJKEG"
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
