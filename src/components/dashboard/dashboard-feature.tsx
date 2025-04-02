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
    "5u345opBYNzqzAxH13X25W5Hv9tt3W9ZoHJGdb4d5G9NxJuizQJjFTKLMo1cfcjyVBD7GXhof68tHfcYrL1XPpWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVedVtQmh8TZzEUBcqdB23EobWDqBVRuKxDL9fWEECcKgYiqkBQ8SszDM5FmvJvxu4cDYoFHijDfpaU3yM7MkwH",
  "key1": "4FzGZ6fAucR7jPcU6iv17qwrgA9CV2r4JUQafqG27KX8hYYjCKDkm92kzmiHpk4y3XufNhX6XoNFyoHPUNszygph",
  "key2": "2EBsmsiMguC6j7VKkLzALZaZzZiQFjzWoFiXs5VpaQcXcLisCCo7wtu1Xg664do7emrjRnYEMjc2dSWRjrSEHbtD",
  "key3": "4GpVoRLxzrBU5RWteg6AUTPH1BYAmKXrqrZHFtmiWsSoL8m2ZsnaDYSbTxagRRnhU2AeYPf4YavQMKXKxH4JczdH",
  "key4": "4yyGLGivwp4gPLFGjTvWrn1yGXFR8bKMB1qRPXxFuZJunzNPKXwXcVqYXBcFCcrj6rALVL731TZAKkDZwQaWzBA5",
  "key5": "4mso9sEEpTHBKF4kNnMn1xALiTExuZFfy1cKASF8ZRswJQhNYEDAX42MCHtE5UUFaMTMA1yaL5oePyRjxty5pBbp",
  "key6": "2WdE1kHUdD8b1UbuwafMUiRmwpeKurZjChXh8ETMQ9RyZSoZM7jxSbMw6jFMHMXHF5yrVLFgjgxQ5GRTYPb9Xcmt",
  "key7": "5XzoVLYYqTvoBkA1dz3i9kEqQvjH1Sw3bfUFBvYgG1sZf3iQuQFxczdR1WfoE3ZeXGCykya9PbiKKn2VsApZn1Wz",
  "key8": "2CSeTwVuXkLAZwyCmWCVHm6T8BapHr7mJk7BwSt7h6bJdL2id5ezkwnV1gia1QVbWe3quzRxFJrFwozqA8VtBKNg",
  "key9": "9AUWwWnspwgeD8AeebAELp5ANHVaQauGKS9rfVgCVuMNwGKRoDnEdoMbg3oHmrW5SwtpH962D6XSgehdfmiFbyN",
  "key10": "z2rjaJQX6Jjsw8V1TNFqVhJL4XHQv9L8GNPiFV3JF9shQhq5s3ww3MTgNRBJGKjbsEXem4oKXtch9MpeZ4veWS8",
  "key11": "45M8CHxwQQRBdif56ftYvkiVKjffPbMkVaye9GB9jbU96ZjeFk7TkpfyQCdFkjdQgdNM2WXQhRh1shkkbCZKGg4K",
  "key12": "33TiCFpBtVgDkkJMhPe6PHh1soNb9gtfN7XAsjNVgbxjXdpfrpzCsqR7XthzDT1wH8TH7qAqpZgksNfk5rjNm1cs",
  "key13": "49Uh8WW92YHhvmtSEJphvRo5Xa5Jqn4ugEH6apui5UpthMvppeQbCae7NZoB7eSuRFUAnuS7fLcwZcMWHzLs9UKV",
  "key14": "2jmHmvpWqokb2uub8yuMvbuas38QHDSV3PQyAgTNMCTKWoKBChLStduCyDAkT2GkgUJvVKyB8NsRuRzJ8ivHYKxk",
  "key15": "4U48zywRDtc4h12WnqHecLx4LyEo1ZGQMgG3tDDix6UQvrA7hbKwAqy3YgbFPnq5tu3KP9w25ZqQ4h3JSESbmyFR",
  "key16": "5pukXZseDzbeiquJnAUQAaRiXnRpdndtAEGkP2wkuZAozpebjoBEdDBLudboBTP6QS17mddutrbyGqgPEKjSGXzw",
  "key17": "225WQFM3GnZC6ZAm3DcfFEZvay4Sf9c25mDwKZXJW49ZCtNMkzZv98Kp4ATbBUoiYXNgZtxK1givxymokVt4PCFm",
  "key18": "ENzpM3JRUmm6uiJE14dfk9znjXpJf9QaYZQF8dQBmQN7CiamrAgJyG7KAT5KhN7hioLavnUXQS4LzwKUZKyiZaD",
  "key19": "2c83BX9nPUQh5txKvLQoEzt8SGxLHyxv5TjyoGoBY8pL8rkbUUuESowEHNtjkD6VL4UNZpdmejatNuvXoamp4FPq",
  "key20": "25ucXMwQverUqqcLosd5t6yuZnTTooWVWbSdTUh1JXoqMjSeBxMUaVkmAys2Z9CUrUgH6wTrZae85KyJz6nndcTX",
  "key21": "5erNYSe3wfJo7rd5QzsEgZ6TVBnSxmMCPgRKhaZhQmYbxeKj1BBwBEa2EeWxaQNBHJ3efLBotGHvTqhRTGN8jZFZ",
  "key22": "47n5h83tdugu5kmbsNvUagsfksW4ZN56rdSUpNcC7uSJTbzh8tZEgvojSGkRRzDNpfSyxip6wf8jvPz6icL8CrZg",
  "key23": "324bBgSgnSXJYcwbeDQNjFGvGSv6PK6CPzKWP7BecyzE5f28xxzUfgoudEKy1jec5sR7VBYo3VHfNsYEhPYdDtDR",
  "key24": "Y2LiMjuB7BDNuQxGU72wmG1jU2yxDTgP8HY3SUCGHmSj8URa1cPGMiqXSYfWBztJfgBaiLe8GFWAZQmXJ9kfbog",
  "key25": "5qLVY8DMitkhSQX6tovSt5fBefkAZ2tiQVkVoscKJhJpw2MqPz8Nsuj5iik7eF9kfUUgu66iiY7QkG4UksmkcEoL",
  "key26": "5pro652kRyeATLNNWFgPjFVjGsWbU6KbzrfRoEiVyVfqs7eYGd5abrAhisiw2oLmhKwYW1VWeRCsxkFbDykguev7",
  "key27": "5ZESFyGRMfsf3wNhgon6XDPRQp6eMrC5aPAVp3ovdkPwBeUbvUH9jvs5aMiw6w1fdYtuMackUvhHTuVR21cu5LLT"
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
