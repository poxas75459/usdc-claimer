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
    "5VKEy2x73ehfM6x9cZa9bGqcLo39zm9gLaGggcW8iuWP7TFzD1uqpvUvr5WijWc8LN2eQbHkAz4NNkmN1oHyRdY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AGDCUBBTL2F2YVnhoaYfGCiXG2SQAVc9jWiHQGfFij9MNKP4PdYEJ6EDaWauvXXpos3KtyKtfDS9Ypiiw8dzn9",
  "key1": "5s2i6sS4sTio3yqzzejLHspsVxpofwm9RbVHb3vra8VXXnSqkRTpX8FxbkpQMci4cQv9QctNsWsKjomZvQxDcHs9",
  "key2": "37hcaVd35vJKMToNnxsiyajDtJmPkJdMEwv7thXAU1LVnVYqkaDQ3us9eArfZz3nWtSt9hBDX6qcBG9Kzb4JE91B",
  "key3": "3rz3xrQ4eeCFAu9mCSX5tqC1ibhptKBPNMdiNbQ3T9egZp1TmGj7LfszpjGBGzwYjdQZbRaPtgMkD961EcQq53GP",
  "key4": "3zLMoFLpoKVqQkfdeztzduz82r1CDpbZV6Z5Vsh8844whFDosXuXkx35H6mvxbB7DpDcMbEUkqrs7dUFBQ7oTKmT",
  "key5": "Gvba3M2B3YVtuXBghZ4UtVYwT2RbFWdgNoqpordqgF7GauKYLABFto5ojYP5CsLi4iD4XjRKkPJR8bKqpkEQ1uf",
  "key6": "ysbEmtMJPk3TVhiFvWCrTn8aGTtN6otGE7cFFwCGSDi1kZ5Qyb2V4JZoFQzyHvCbi3gHHwozJ6peddZ5nVzkYfp",
  "key7": "5uqJMhd4h3ZyML3HBAjQQm7TzMFnMvvF2xGfejiX6rSc9Tj8ZhrXw8ACZn4o58D2eYRowkM8kTWvi7LWftKm66hZ",
  "key8": "ssPWWUbmsrm9bh2UCWBCXfY6bRgGJXDt9owJpYzS2f8xbQFfUkDWbHvAXczgRRMSHP1VuURipPaMnS1B8vrAs7X",
  "key9": "4wvfKbVZbs2nC2HaAPDev1HiZgdrKE9JVQyFQPra8MAyc7EsS3yXkKXfiMqhbnfAx7qhLyecqqbZu8nhwZ4DvWjL",
  "key10": "5Am1sNp7pfoVHC2QyRrtThHDpXvkzaaAYe7dpCVYseQjANneFddSiocooLMKUnqLuZS7stzQTiaDSUkHWWg4fBWE",
  "key11": "32HuFT4YTPU4ZMqNCqgXrmmZJMfDvWpfzKJ3H5e2cqTvzFWt6XSd9yxNAPm5QEZ2ovzeMfsQNVYKzBSKvMKzW638",
  "key12": "5NN8YYz7mJMJA59N5CRMj7cXJUiytRsKA1VXaeT9E4oSgsmdW5PGSf1gV7pLf8w7zAXEppq4xAzka6xwYUyLUSyL",
  "key13": "3h4G1dLareZ8VpJjzKQhnNhUJwaTcfJHSiLPr6xDRQ21NKtGJck4b1nY5o2RJDkXCTDp1kXBYAb7o3krVFcVc39g",
  "key14": "5WPAXZbEVWF3bd8QjjzmFw42tFPBFuH2g16m3DX3p9sCA73JZrqEpryYTwxxKSibqT884cyzpTYNismqzFeTcSER",
  "key15": "39h9QRbc92J23i6zRRAQQWFnDuJm62WV7rnp8JEm2YaPP5iemwm5sk5Dqo5yDbZaEzaRNt7CwzpEeofxSZ9HuTEB",
  "key16": "5EqZqecoD4yLMJt9ryx2yE95hVGVk6ScCVfmQznXX7ymQCz4XLEYMwSZsEQz5Nwkdy3NayE7WFW852wZiumzUq7B",
  "key17": "2ewyNkzocEDAuepSPsNitKJ3CukMEPsdem52DtwD16KvXXM2jyi3Fqa5TcQuVLGAvYwpKdzokL1fpiUFRDS54TPK",
  "key18": "35E4VB7kV1Z732nx7yJCZeHb6VppRoFz26Qs8h1csNePNuKJmy963RXmHNhjZyK8chc2LjFiY7cL7M6htDAK9awe",
  "key19": "2bwxB2LxfhdPjSTsHM59JKKSc8XJg6upNxXFe1AR1Nh5Zdvkoj7eYfqX62SNZASbWti6kbNhim3zyb4awmSeMvwL",
  "key20": "5jCFdG47yCC3ssnZBBGKudxiEBjiBNVhZJDQw7oEsM1e9P3SkaTYB5ya7FwUfU55yY9sz5PKzVvf6bWnEHKwfVwz",
  "key21": "22Q3QAm1fPpN8Jkjv3snQZz7Ap52dVyVS7RgaQqAo9N3Y7bhsDx5krYjtDgmF7XXGz8vFNwvyeN4H6F593ntzxDQ",
  "key22": "NJy7qGoaFuGfps9uJiUQacdawYuu42dfqAt795qoXd8W885FG35zhhUQjc9PNpHTyZLnX3KJkkXXH2ipjZBmmK1",
  "key23": "3QhgkTRAnX2ALYQWkkVw2j5zmVsgt7xw1mGMNCJuD8pij5C4uBEaRWEijrXtLwi78S6V4CiDXie9dXSFrjoAv5uw",
  "key24": "29rjXaT5YP8Sfbg7eBFnBzoyHG66eAqPhEEjSXEcTj8yhje5qz5orNxxamL3oFsMiMQSGF1QApvcPxUrmdz9rdee",
  "key25": "2vjCtJKwzNX78wHsjabLaESvPbbG3s6CcAsQ1uiGFVjtR9wUeVFpub93J8CV7kok4bSZKSYGmD4QdWSYLYkHwmtB",
  "key26": "44dp5HFMKTfD5dFQqRwqjBk2mYQYAjVLKWB3kv8rUjpxDTndR1wJx3CPxfiupD5QXuAWQbLgag7v5RQskVCJKA74",
  "key27": "4RqdoebajCkqhE2tcNYtUQ1ZvVqmZhFyVBQQdT3JR1pjNXy7HFHa3BD8tN3nJCemhocA2Av1qK5MgKFquDXDgEiA",
  "key28": "2PC5p7jk7b7QtJ6rYBkA3fJn6EBhaUyM7b51mtg4wX9C3TosWt9tQMgYWPHCKf5gYp4igYC51xr6zDB5V6WUuFS7",
  "key29": "kjoCH82wYgDtq2T3UQ1U4QxjDctkCm8T6Asia48iQnzZLH5ikBmK17TvNiAqrdKchc428DBQfrncvL3GkJM42FU",
  "key30": "5BWvUgJC36DzaWdeQrh4cZp3dPwUxunSFCRF1rVRM8zSFsNGPqxia4LyzL3ukzXh2UxJ5eQQsshc2G6uc5U12cMQ"
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
