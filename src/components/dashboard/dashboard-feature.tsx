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
    "2G14J4jF2a6AMjgTLHLADoWX9bW1pTQ92MBYCzmTNXdmsdhbfDMZAYfPpwiDKQfBYBdaqd3oeQQmv93AgVh7es79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gMJzatDYdmwHMJHkXucYEzDRVL2ZQGhShJj7UcNoB4uGtj6WuBa7Bi59ka8PcGD3xWJ5JbWfXBaWmbgjZCRjrLy",
  "key1": "46kHLB454csQtXjsaqDKMS71MtiA8DELzgksf4gJD53MjBh1CFnJRM3A2Uwi9jchgQcRC5a5bzxEyiQMnfk9UzGT",
  "key2": "5KwqVFNNmrQzUTA6E7ZnS66ZhoQanjUDTgFWyFnkX9BzV5PH4fTbY2g8rjDwC4KqC9retUKfvh2yPghEvNiQxUaV",
  "key3": "5t4HQE44Xb7u9mcBhKxdEefPRGZe3jsMSvfEgJWnL5WZ3MagSMyyHou91PqnzfMkMXsCG6HMcVtUFsfvL6h86xC5",
  "key4": "2EhC1qAC6U3JXtMVrGGQHZynPLamjo93R6rE4brJiAQC8ERDB3e4SBJvBmtMuDww4bV78QJujzDrShbg5uWkdgV6",
  "key5": "3W1rwPsqPu1vQy2bS4KA5CvhVD8dChE4vzHAjfdzHxH5mLasQd132SC3X3mFQ8C1HhacqsYjEBESx6AcwhXc1zaB",
  "key6": "4mu5aLF1zYHu1QSSXZo9rVtaKPUm24GWWvyCcyvkK1wteS54GdFM5kA3hdgNsy4Zwzbk54MzKHzNn2hXvGarGwFy",
  "key7": "3aEUno69BnaMrSay7BXTbYvkWoX5oLEJHrobrJE9ZWdpAKNS9ZnYQDM74ndNQRjKUW9199PrKmhJ5Tab9CrZMkgF",
  "key8": "4QzVqTCCaRbQRvN6wGeMctrg2EgBtG7pNLXjWkdx8DeGv5aT1DCLAf2uU8W72nsyTBLDnf3bEAzimSEhghZEmMNs",
  "key9": "TtnRhM6i3Ne7WzQ7JEEgbbbnAuLZGi3KXPXxCvySzKvm8uStc7qBHwnFu2SLpCHfZQoYdxTVUUV2AKXWqgwZNQK",
  "key10": "26QaLVBAGEgQRNsrHg5cxyqpjkBXuMTDn96mAmuXoGiY83BDKByP2Df7mGYk3NnQkjMa2y5nitBLv4Uz7MvYZFKt",
  "key11": "4HR7SpuBNMweAZ6ENgwNKHPV76Tz9LF2BV75bhbwejwEoXBxJnzARUR29GaQQUxy6eFNxxFRgutD4qqzf2TgGy7v",
  "key12": "47wXStguBENfwSPf911DToZtaM5KzkzzLoECcK5S6wvkFdg4rXtiP7QGsX9wbn4GsUHmT4A9oxtXFustNrNf9NUX",
  "key13": "XXHbRbhc3v7wUHYEaqs93pC6FBaMY5vSr4iVDiXGNsJ4LX9BkQNbiHPiEPTfQ7uiqBsXuYNAsqKFcg7CM7Ghvyj",
  "key14": "2PEbKaMtFgXLRi2HSziyUo3zvZqtFe81CAVhmdJdQs8u9S8ShmVgYrCHGJvFjzBbLbS18V5tCuV3rDLicd31Vn4E",
  "key15": "2gXMeodiRTc6oJrAN9XD43jcSxdTHdYvnYAeyDfU8VdG2NiZjJPbGusG7gUxSXVYNptYiJYDphpGJ6Zg2bi9BD3H",
  "key16": "Tuh4dDDEsqZBxHqMNsNjY1VRQpQ3j91Led6WftFAuMN5Yy2F6PihovRuP5Hc4a3tGCoBvUdQQzLjwLY3UzanpxF",
  "key17": "4Zer5vspp8DVzPh3pCvMQMnANEe43eKhUhZAfcEo9aFNKtQcXn4KoaCAoGFZCvyqkL7TMREwdS21MSnmGocdgrRb",
  "key18": "5bSgLbTpoSbVMEuZLy1oRyuQEbWmUSYTiTUifMu336PRawtm7f9W92opBpEnbudtpVcwEaQcXqbGXQJQ1d1TGoDn",
  "key19": "4CjJp6szh4P4h3pHY2r978CLkLjWMYky3Li6gK7mps1wJZ67nPZP2wqAp6S8zeAT1NrNZftkKdFGzRCdsyFZaAKj",
  "key20": "8g7yhMe2mAbP5DYGkG76eN7NqjXhDcHYUbkayrMGt8nVBfFdJkNfyx2XyQ3j4i5Bv6LcTX8i5xRkZMbHdvT6jBf",
  "key21": "3JDYcYAsWQ2iTzBhjxouy21ed33E51c6ib8vJi9ckUkLkVa1uqeJ8ETWpo7a5LudXte62cVJSLQgTXYaze3pmB1i",
  "key22": "NzMDq5LWYxs3AF3tp5Ert83Bbsk3e4YiWPZcC1Xo3b8ZyzkroBT9JjJJh4UBHLZndvgYJpQ9nCLkzUpg21kCLtW",
  "key23": "3DQyTFp1uHfouybK7a54HWmVY47pHkcUdyQ2DCWncKHrhAd4Ng6FnkReHjt4ySWFbriwcqVZe6a1pCHZpTeAbuW5",
  "key24": "5kzHBHuYHJ3w7HADUAikuVJz4kvGRtDEqfLgA9KVvTidHqnVXxP2k8z9Q5kXykfiuBMQXWt1J8zoisn5wFXh2fWz",
  "key25": "4usKBUThWC3yNpTRdhrsCyyNsQJidU7YjXT9LBTAJmjZHbF8iUHeceY66hswib9ZrvZgCzSMe3xxWcszQxxxZJXV",
  "key26": "4YaWpVidS3rAHjFoAdyhHQ8rTuhoegbsLodoXiXyxR34a6PYfPTQYQPyiGc3HXSGbZtSh4mYjqbNmPdxxCct8Bgg",
  "key27": "4AUxWZf9twrUazsCwoR3NctPdFWpmM5oBzXaxg5AEx4Cc5if3V7gFMah79Jvtkpn9JZw61D8gH1FJTRFHUPQKuY1",
  "key28": "qh5S8KAvNxfEYL1mX81coZ7pYYeQvc4P6dq4M5euN1Sv15LYurExX5D8VXUMjHg3G3VNJiVvzuAd5r7mQ91uPWe",
  "key29": "TiSYJRQsT7UHEAkg578P1N8izuEXG9inSWAFTgukEZm3b3Pbt4ERRjWd2TqxvbxE7JoJLebU7io7SEUCkR2Qd3o",
  "key30": "62cyvVj9KxYfmzxpYMmg8Fdd9zt2w8GVV6AVJungRcCNow3zw3n78mP5diwvubb3wftioPh1B9wG5L4yt1ySq3pJ"
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
