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
    "5f5rTQQDGBvUQRNGhHnsqs2oJa9DdhS3JMTL96iJLjrKj5UXGU2PxCcy3iBRtxHpVMNsVP8ZMLPmZzrnT6vcGdi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gsQn4sbyuXyWfg29UcQVXz4kik5tbdmEgJdRLgDEDkxUY8D7MBcH19QJcNWsbfpAPxoFFDoEbTsMCwPhrgyRcoi",
  "key1": "4AfboKCuGVLQoGKmLRSK3qniSM3CiZ3JiWoB74YTbhvVfuQpTsXugMYxTJx7rR8zfEYfDjXh6QxnBZBtL2KpvsiQ",
  "key2": "jooCsEhLoWX3SqiSBBnT337Bc3d3VkZGea55GjNXuS1kJL3WojPBzsAPm6HBRXS42mjJBKQKF47fubZakko7oRD",
  "key3": "4oTqbv9ksS13YaE1ww6T4RpWr1tUd1nkFtVVCXVH3irR1G4oq7C1xwxaXjqB2QjGab35RNcTvVoWcegLpgpr6ibq",
  "key4": "2zijFpUbronqdkCpjLtSfHdGYjhsC9UvobvLQGJnPwHWaahVeq4iFB1o3tCR4S1hMf4h6B2L66WN4SvM9qrcpMpr",
  "key5": "5M4p3CatTktk8hk9syrxdXQhYW442ooVYUSgqoAj4WpJtxsDfw8pfN1RTMaV7zHTLMZ9CREb8foQXY7td9t4CQFB",
  "key6": "3HnbiESZm8jnqYjezXed72CHQtbCwLyDBsnXwxCyQSY1bzHPSKXo8n8rKcHhgXJ3uo6thcspTgJzecUyPzgE5bKU",
  "key7": "WSVT2Z7z9P8xZL8FJVuFKyK5v17TqEyNXczALjXp4QkfuLwZkhxPx7GQRRoPS4DQrqoyLm1SSawWSDB8iVwxvcV",
  "key8": "XYWaCQujJpXyU8XFjNcNL8xMrZWhmfeLC7bpDtgzdnBFXzsZicrAYQHMzNUJXQWDwPWWLSJxYmS8YER6bozaktV",
  "key9": "2CRADoTbcd7DR4WJvJwApshDwiPjo2VfyU5y4F7QZvpBcrRy7NtkN6yu4mN6s98cYgBeJiLnAGc7UGwCyddzrWjP",
  "key10": "43skppcXHpgpeZrVjcRzjBWcCry4nYooHpeE5MyXqTejcmXZPDXr7mFuf5ABcy3EGcMfvCJpL88dJoEfbTDFSVoQ",
  "key11": "mXD9WsLmG3Btuq8adGPQWMRKzkDDp9zYZqFDEqkZLFaqiKNG1bvF5mGnNzXBzYMNf2P5cNYwCYinpAKHWZH82Bo",
  "key12": "am5uCF2ZKJxsmCX318ZCQShisM5oSHBVFoP3QUnT5gttzhY6BV18iqTzS8WXeQV28GoXDjGhPHjqNkrMqSHpq4v",
  "key13": "2wwuHryi3CiV8UmXh5AWi6woXtU2F8j842gc5XuWsxXtZ4gB12hooxKZaEmMaGu2RxJsdxmJk4KnTKqSSPL9xABp",
  "key14": "5LZLDd3hrfi4mqLtsj1UEiASEDf1ftuE554bn7Y7SuatNmkcWA1i6XnbQ2WckHjA7cYTgnmuxQVDv86Nu8zYmkht",
  "key15": "BFsAW2ukSoWWo4N4YSTTjf38x5pfUrSubsdTu2mNbjQdGotsFWvzVEeiWjbDZoHe8aKtREtrYyrYkgARFxi1YLg",
  "key16": "bZf2ydn37BgpWNwmQtJ22WH2TrNCwxQEafzcynxZ3FGAahUUGoUkNTQ3t2ZA5b5QT2LeSQUeBfLMLbK5jDDnJ21",
  "key17": "5ZQFnsNxKPDNMDy54UtANfy8t5LgivoiWKtMohm5bai2MAsiCsDMVtB1ZbUWesL1TAFRsmH7Un2N7T3BcLnyFybB",
  "key18": "3oAKcJpHzbsr9Kkhygqc45XkD5KWrGbSr1vJJS67iUUKZZpgXZWzUySrW6JuHruru1mWbHcui49gpZVVqbbyKjPf",
  "key19": "2viuwbx6aDrbD6kkLWjc2FUadi55zNfz3dn3Rhsucgi3EvYjwdrzUvNWN8UM3yXoy8HKksn3b2NrJk5TqaqWYWtU",
  "key20": "3fwUq7xsRP3kfWFqkGMxnWgKaQhTkuJyg6nfwvRaUwopfEoM5MvocYqyBpafrmwTUCzWbeVVCtsAqKfZU85Ra3uk",
  "key21": "3UoJ7jHMkCdPSXRzBVhdf7A3kfFqUWTJbKeity5YdU7wZNWDoT9Km7Hrtd97sVAjni1QUeM8SzKgogt2eyFmpY2",
  "key22": "Lj58ZYsMNztgraBTusrSTW8aLegiWNcfWt5Z38DEQxnbMrBqNCg9L47XxrUrvbybt7c1ZyANGhEK8DwJ26fJcur",
  "key23": "2W34zT6KmW6hJCZ9WZZrWL42LoNNVBrijbvW3jDBwSRQAZRqaxK6TU9KUm416dpPaNyTqRvRMH5rtDsH8cSffGit",
  "key24": "4nDFNXXQFU5v5vWdhwBSob7hqxLKmp4MbuwmvvLar61SpKCZmT3hP3JkhJKpwfMGEEdE9CRe51QpNa5j1eV2Tv3b",
  "key25": "4R4hqyVwQNBxcWrrbZrtF5xeuK1imj1YkfEXXBNWf3xT1ZRweuJBVp1bhyvD8Y7rECDZxm7a7Rv97YW84N89hAV4",
  "key26": "4Nt88sUju1oqg9NqCxFe2kqWnW7AAjuRP871w7PTeN1MCshvarWgyy5TrJYUs2G9QQK7VNwLMYGFbRJePWwxPubY",
  "key27": "2rEbgWi86JQBZcZSNqpMiPGJVkb8L4YZjQ1JfQYM8pgeD3sL5Sbxr3Djjs2ZPmqmC9iKN7RT5DN4ZNw925c5KuYr"
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
