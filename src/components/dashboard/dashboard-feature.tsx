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
    "4dXR8kMZUyQCo3rWKbL3tXqZ4LCqscyeW5ftUF4UjXpEaf5XjTmsKHtGr3mgPGevL3d2xW5eDzp7aTyh2Shqonrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n7Ky75ZWKEo87wuY3ocjZbtB2NrDq88ZUk8DFn4SYaHTHxcRurb5GHNV3UjsNS9hc4AEHSu6AoA5wPNkUAQiiBw",
  "key1": "EoMpds3emW4UvorJaswM1w2DjPpqokXEBEcNJfECMqVnWhZ838hDBd9jfCRmHhgTP3hc43SGdchcfM7FoxvRm4N",
  "key2": "2AeCTX74nKyAJVYwCRfvQbtaWeoNPGZunL6wcz5hGtLvp9FvRy6JqhnBKXTLs2o51d6RKDte4x2xWcC51UA5S3ig",
  "key3": "5wUNHjmvUF5PzbY8nVkH5nvsBWDYKsdSKgRLPBubjtki7o6ytxDaAEBtJZk9vZWqBfNkXhXQTLf4GZDbph9gvJ3Z",
  "key4": "3jKqr46RpntM7wwYB3nADqky5YmSh7iwBJG6AFPPdhaj9UJewBVPEh9En2nCEzuFpiJdf757sGrwKsiUGSdB18vb",
  "key5": "5LQ1UPoteDC6UJNCVJLVU2obUsaNF1kwSJ3KbqFTxnJHj91kqh7yXPMaMPWWZ9RA4P7EGParrCwDs2NqSXwF4YY3",
  "key6": "3pZfMXii8Y7CPQV9xJrKw2GRr9rfFb6A7KWE3mtySWT5by6yDd8c7UcfmSndei3unJv2oXBCENJfTBwibnRg4q4j",
  "key7": "36kXGZ4fXm6p7Aq9LLNj7YWRCU3wGQxkS9KeDg9jUyQ9RR5EPAcBQysTrT6VNd5bPYcRqF2nBbzYRw1c9XnMLYgg",
  "key8": "2hqo6aUMkrvk5XZzhArM7hM5b7nF2qLQtzHj9yXDA3XQia9FUaAGDZ1aitTFdvpNTBJvtwN1atpYLMYKqoJ9YdYV",
  "key9": "eKTvGTAdjeDaGhAYzqnXD3hJg5S91pNxZM1zLuY2eeQdFK5ft2ECHBDaz7pbtXqCuY42dkFx8EB86muwcALujs7",
  "key10": "2PwHaZHCr5jX6otRm2ZN5a9DuMGNDDBwshMdrMTNtL4tDivNULj8DsXeXeZbREhsPHdZF8xi4gBikdxBFE4kv7UF",
  "key11": "EFncFBiwJVKDxqob72qW3rNdtfZEdZYuc9zwnMZ8sMRXHmNFoJzDCUsA95QAwzJQJwdLDcg9pgZY2GP4VJCMxEE",
  "key12": "4qAXiV5yNzyuLTVTrK7xCxhA8Hz1qp6yNZ2TVnzzKPU7w5FMFYMCbqBYv1gTaFRXqW8eN8mTKo5wGgnmEGNu9Rwj",
  "key13": "3XBpKzQdLg6R9GuZLXvAntmswT8och6t8JscP79vVZDu2tNCUNyiLWwyAqRAud1nWmd7idoRjdokmy5PMnq53quD",
  "key14": "5Y9ma9emFXomrgUdkzXVbG9drkewx4dDDRZkk2AjMq17hgozmsCVfzCjzysztbS8BPs57mrJzHmKRhZj5m8LvKM8",
  "key15": "4BnqQKvPBYf8MmuPJBQXU37cmUS8dL62FdZFRNyHg9PTaBF6VYF36dGE4gRpBxqwqM2xjMtEQXUThL3bPxoomH6t",
  "key16": "26NirLX9VdeuVkEi9vpGm1QWLhWiL5UGS5Ep2jAAkYR7hxDhs6mFz8XDeDC7VZzTAsuiG7TG1cBdsWZDzoo9EnwP",
  "key17": "2x1BzstQqMSu2ywvAc6DQtHfeaK4ckhMYbYnJHyqxLza8bmJotgZ7ZrUhediGg8p1p7Vs47qZ9cDr4qnUZ1uG3HK",
  "key18": "3fiCnYmJvwfLMEN8NAonRsPBH1Xuwd4VGuggvxN2Gj7CqhaKBUM7yN3gGfY6HefS2QRES83HVSaS5RXMyPDCtAy4",
  "key19": "4a34JwmEkjtWZEPKWMLf17Q5g1GcMms3vwnHB7cT9K5zXnMB1Ya4ws6NDrFxgSwbTQco7ti6JoXaBKfvWPuTa6WS",
  "key20": "5fobFL5fN6TZBPG7VbeJFss5ny1kZRaqU1t6vUK4ZUqyNwRk3my24hwgzfB7TPhaEpxod8hrdZnt4zWyWNd4aFPX",
  "key21": "3vSwoiVPHMnp2dHJY22AFyXXEzzo67rtXPYN9VmGpApPe6DwhCETRvFbHDnUM3WfH8Xvrwmd59edRwkwRb8wFEyV",
  "key22": "2YkUkuAYXBhLJJB4K7qLMroJf3p1TYD3pn6mgSnJN6rUcJFcxwrZBpLX4oaCAYcUB93VMvVuF3AgRtSSudkwH6NT",
  "key23": "2TMRg4CCP1adk71nv73BqefrayfucGBG6ucXjiYprN3xGUkusTcdMVa8YT7MF3EczPfwCWZoxyqvVztoJ9tFxLhb",
  "key24": "4CbDKi1wgj6e7R21TLiVpMW8uS5gqiSphEw7jpN7PSdiK5GKj4nq1CfaWWQWdTeKKd1JnSxYUgyF8VYCBBN7Arew",
  "key25": "3bMEoDdo4xkut4MdX4C8VbFgEfLBqUSCLK95vEXQzhFGSuKUAmuKcbV3xkfrnG9DaSvJfaRC51MtDWHVkcw4Hkpu",
  "key26": "5D9VHuBeJom2aTryRcsQK7AnPKd2Z8PtuPz6qCYxEUqWLjznhtiSDGPDm6fzrxnnVqF23hkk7uDPTJ3APtSYbn4B",
  "key27": "4Mkz3AbToYmzXxBweUf2PjvLiXKAHKRFxacvrSwzyKiUTdmFWAKHdoYsZQxApBsmBtETHxzh19y8WPNJxBychRM2",
  "key28": "5WrYkNKgERVJ9QsEccsZVfsCShKMhupffjMo6ibNcioYFovXtFqL5VQEKbCachQzyP4YbASgz8tvUXCPsKd74MZm",
  "key29": "4FSRY4b8SxxpiTxufrN5r9UQNsExfEou1KwC6tzAnYZkMK77npsCtgBpvt8B1Nq4t8XH8WQU6bsDBPBUabAHnsZf",
  "key30": "4A9UzTQJxmoYp7eaibD3V7GL6Fk1iuQfX6PHVpGnUTBVWSjcFGoWYQUFYceWXKX4CNbxr2GhFqKCQjQj3oxy5ZsQ"
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
