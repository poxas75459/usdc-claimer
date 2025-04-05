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
    "4ojmYmsLAEVBHFBHyz3s3nzaaFpq1g1WDZpcRrBXGf3QHyna15B7sh8CjebCxeZu2HNUHTKf32e2WHgEyBKZ5u9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfjeDV8UJwGAfMhC2Ki4jkkTXPnpVETG4ifBqbj1pfiFtNDb1iXxaUXmDVPHdyAeyQcAfwZHGdXy4QZT7miWXLV",
  "key1": "2cASrevTnmW6kycY2wS19dNwgvbzj9anf7NjoLv8GgKSqmdPapNrENmQbuMhXyT5uaZ17GFNDWkrjneHhP8Ag25U",
  "key2": "5aAjUdS5dhWnzvA9kXyFUTB7iZGLGCKkZG7ybcu8a5EaEjPdzPVQFDXFT77kUGiyzR2YYMKgWS4ygjKxu7qgyArb",
  "key3": "5rCjcrNoajFzzrXrRQPQWqoknECoZfkusJqRFMV8QMW4t7fqCaq91VuhjkMu4LydEqBi6LXjwEBpsoukVLABisY2",
  "key4": "3pnmL7nHsvvNsC94Aw5eHSLBMNeyBX7qfVUQ7ZdTihQcnLpkaqAhYT2zFJZJ2oPJ2boRgEBAnDG9Up8fVMN4mLue",
  "key5": "3iiWHxBZP88m3QCZxWZv4qFqHf4FyURgtmdPrEYULUdmexJYP3jFnrUd9S6MBQK3YwFMreiHiwZsivzcemTTz7GW",
  "key6": "otdAtGSkT9iBdVtXwXehbmLNSaX6CBxqavTFeuVcTzVePiwcCFUpz5B5dsDXC18B6RX6hCVYuEpArE4qT8f5Wcx",
  "key7": "35JHyQG4oePiDQRDrj2pgXr7CJTRQRcxxfGoQrrxwK4SuxziTpoDZQ5gxYFANdqLL4Dk8dfsZ8jUDRLL9RHiX9ku",
  "key8": "4e5FQvyTgewBJQcEnZcSYwguV2C6X3k4fAnPCydB7TuKCrgtuGzxgK7FYUHu1hkM1rrrejXKdtAtzWtjoyEEsbfS",
  "key9": "3ynfjvMjrLHH4xJUossqPj4LxtaZCBZ3GTvy4PmhCRjtV1WdZT9sgWhbdKkBusdVfRKfiLNgcwqEwFhS5wzDyobM",
  "key10": "2bWq9XbsEJzTDJP5kyyRrAkTF7sYir5TNv9LFkZ7gNQjJvEorR3tbCPjQugfPNFopwXt4PsLZAWZEFJhBx9zHXhp",
  "key11": "5J8R545ryqJP2NYtPvxvt3hAoZUhQn3G5c7NXThTmuFV226pPchh9H3gHHpJSEU6WWNyJJHbq7AA1tPxpvETbSLz",
  "key12": "y6qfQYYNYRwieLk53kqMvKMsiLh5gpNK8gczEa6sqdDuiAxx2A1MkJsshMetkCUQYjju7H7PTuvuMbcFZXDFKA5",
  "key13": "41NEMpwWq5SvNLpcLxm7Rhdx9BKSQE2Uk2JLkog1eURuX4zpajKuGgdLt6SDXKb7HzccjA7MUgGt75NkeC7Ub3T6",
  "key14": "4SJupAZpH1pRkPeCFxhFrbRwZVp7mF6whuCwf1QZyPUdgFiy77TNJcQvFWubQuHLZieg29gwR5vFLzHr9FQxqhvV",
  "key15": "5hqqggcZLERHYpYx43GpGjqCtUMuVAicSLXtEkr8MbEupfixR1eit87fZKGkw2sZDY3aNJLH4MgyRzy2h8w99MR7",
  "key16": "5GqM9LQcGoKsFKFDgMkCxgiFuJpYz1mxyUYQxRWNS9tJwAwFHkXNLjcQfph9Qtc28qQFVjaKPgG95WjMretBAyT",
  "key17": "2kcTVnQL5T79qe6791cznKY6ht5wFU1pQGDBW7Ur4K7UeFxj1N2Vbc5Z9mJnpVZ1LHesHWaHYtA27Ya4SNKuV7J9",
  "key18": "2RqMzBPsUneCXmTdn2RdUo8JeWyj1GLVtn6Zn17WQCjAKZtqgYiPgM8SuxKSXHEBxrNZriyG5GJN29cJxHBTNn7J",
  "key19": "5mpCeEQeMNYBYV9PjkEERetsYZQ6Dt3UeaHeLzP3mMx8i39A7qw5wXgHRsckoGFEg9i7MvSt1PkKrS7PGLRyLAXm",
  "key20": "2NKXKCpKb5WLjU7hSJz4dzxjmZrAXixNcmtM1hbcHs3fPg9Jp3CgDDa322HTZpuCYgmkuqVhNEBv5CGaffyAMean",
  "key21": "3vLAdbCj6oeutCVUzgni9RpWVf79LHQ1PFFj751DFBsrmgJQ75wBTpgKfdYdShG5v8WpyQ3VRk18c3pc8sLJ9Xee",
  "key22": "5uvrJ9QTvDLDK3PzjubpYVWWJ1spCyDw4H6iqYTzLr4bFxfLqe6H2vumP9uan9pCh8vR3ePcz9PRj9Je544tJGE6",
  "key23": "gaCxwn9vymDdEoqwg5tSHTbBSf5nRFTe69wVKQ5TP5DcV14LK3hYPVFSvSMXsjca3bU4ixjMLGev2gmarAzeFsS",
  "key24": "3x1PXUfkbDC71Z6scvHMyuHAuatubTAz1cCGZmAaTVg3msZ5RfR8sDrfbKhipFQwauydRQG72iXHh4E2onFhCsCh",
  "key25": "iW2fuc2AcMRzb33xGthUZTPZyEe2uy4kHJ2bzTa1yEyqhd8bVvjWGZK2LBDQEQG3ruJmQDAcSdUcATQ55UE4Zy9",
  "key26": "2ktqNvgJpKcDQjrhHKLLfcxqeghjgeWLrx7ZtVuzzmjkj1qYF8N3BtHvkCKhYeq72c1wFiQTGArHWf2mgTUnMFn4",
  "key27": "o9K8GKfbRuWrid1rNpfqZapDpSkFzS2URMcj82rViaJZtNntdnMN4mrsA957RwJJfE5ZPRKKgZKHnPkJPUr4Gy8",
  "key28": "2C5AeTT9RNJv1nfNBJLiFk6dSArZ6SDZ3nVv5x7aFxJpydT1SL7Baw8873UT8Y8PjSZapBVvoVP9wVt9eL4ckBWK",
  "key29": "3dLMzK42BRARiGmJ1cFnhRTG55dh3E4fPrwxD7RW6APzGzJHvQM5fB8Sp24wP97tdMB1tu8DFqbRtnBuT4ZvfWs9",
  "key30": "5RwXk3bkbHSs52xffQoPmtiTJFXCLV7vtYMGwKMucK65LZFQ4SyEGzAJFMAkY8c3cz6CMmjH4oCWbnerw2jFv8tY"
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
