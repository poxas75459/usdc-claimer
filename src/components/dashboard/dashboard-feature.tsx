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
    "5m7q98JpXngksir1Jzvjbxds8UqTEwTFq3YTrVhLCXQQcDA8GvEZ2PgiVoKzUyBy9jaSjxa1wvwP3pksyWmYX4ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UfZWpHnPFprgjSHeRsHwpMinyeUaNXwpqGPqm12zjqWFNQ9Gs1Erdz3Ts2nrsMxF3JeQ8FR7nngiYX1n9DidAQ",
  "key1": "3ScLxfS7kxBHcYJJNJDJ5WZwY8U7Sz49Lw1VRT1NoFCn9s1Ybfr3utYaRGiPk1is5VcyZmkrDFwfyrnpNtcQ6VRj",
  "key2": "4yznYGBtUrKWcZDqrDo81AFwov19hj3yETxzfV5SbJ7CNbN6WsBdSHaSmFyVxi7ghNgmHkjuJ9t7G1osjf13UXck",
  "key3": "4qvFAXsxBAZQegtenb4pjs8MzJuUtQiFACr311aXKYQeEnH8F4efUqtsV2zby6pbMo6EnF3aEDezEPxiXy4vc4iW",
  "key4": "5pcLMjpUCCzaXdh48SbCLVqZkYQd8EaTNb1h2WygBK35U7pXLMD3CznCJDjtYU3A1eD65DkXiGL2GcbfDVYyo9cv",
  "key5": "5dh3bqWRs4RjDA1RnJr6jF5RxHQMtu6pvD9jojR3rznR2ECqb4R3qgXyrprvs7pD3MW6rpehjzeN4PuunzunxNMK",
  "key6": "5hoibPde1R4P49TKyPXp1yvQKmtNMqdi3Swi21hHfFzEWVS14XeqkDv9X1bpPHBWZPhat4ECdXWgobxswDhoBnqq",
  "key7": "42JcPau11PG9be3WXtqKjLLVPHHfY95q2GPMdVPaAWUQNtLcoFHR5UMEERLe7dzTeiZxNTtCePYrEDYZSWteS7wC",
  "key8": "4YzPVCkJGFQFcbwnZKSM6pMLSyVL3zsVS4ZjZfqjrPkAHAUDesXHGYdbz4b3Nn8j6YxC26FjSsfyNXbJCw6cpk4x",
  "key9": "RTAXhguZx6a3pPquN79jjBFwYmkdQyGCyrJiHVm68u1Lcy7GfS1A3Q8JgLMkXWgMmgPH5bxF34biDmFu7tVsDQ1",
  "key10": "5QRRWBiPRYivCGLJEEpa3ZwQ1PSYHNpbTH8PKmjAeSz7cWjTFL6BR9mcV6jMoQWJVkXv2hzt2kLeHgNXc9eX4poo",
  "key11": "5JshbXygwkSsxDSBYEJSmGsCw5s6Nic4uwJAD5FSgzL63KDWDEsBpoMH5FiHZvkKBzmqyVUdsSkDu18FwHwCoqaj",
  "key12": "ttMNXX8pV29ZVcwvfnLuPZL5WSeC8CnTSzz2VTZYC594TQKeecp7JeW87LJMs9qgm6Dnxi79p4DAe8DWw4MYb8t",
  "key13": "aumZYCgpRASJhPtsg7qUsfGL35tp72XTdCzvXWX7x6zgEL5bmbv5UX4eKnfYghbPtmfdXNXFVYockeDiALMQMKV",
  "key14": "5DggRz7CqEcZ9YqMVDjfvA8PW1SXF39fRhGJ2NGXxsHmehy7rhrkcJsANYW1Fjzb5nqgZzgTwDTCbCvkbVhCMjZ5",
  "key15": "33XPZsQTVxBQiqW7rt1tdGvbrwUMwGRZV361haMU4JckJ1gACJSPi6iDKQUejg1SegJ9iJemXymKd8fUc8kvX59Q",
  "key16": "4WpDLeNZ52k8fG56QBd7GipuPP1pS6nHL11W7GYskPmaFSYpR9bmoTdrMP3BLpEkn1mv7XSY4ABy1PQ34boY1tqi",
  "key17": "4NE7b6nYmFseWgLQN5wGbFzeQ4mQKo71FTzCWvXrA9zazR4jhVhks8RNgz5BRqk9t4xjZvERLjFpu12TFC3esr7j",
  "key18": "5pjiuEjJqJqoZgnNFMUxEh1LxTjXVfbRqWUcjbRd7S4G6puEvtfwJ9fUxnjH9HqaQZR3LwmtfNvRGYk5aKo8PUqK",
  "key19": "2kujS6VUYFETvucDrf7xicDhoZzCmcGAAgsF8WPwcLdmpq8QE7Zgm6DtJoV13FgmCHHfYfwya4u5ngDvCwujNTHx",
  "key20": "3ZnYyMC6ubLmZ66HmZMebmoosW3wok2xX84CGFwSjAr8Kzekdudnc4FXigpqAGKhzSh8nZVGU297bqCzzEZTsBLF",
  "key21": "3EhUqqjaNvfWLA6QtMxREAcEFCLzbpfaLNvqdfp1byUztttYTg3hNAXNivDz2WNDHc7hXPEyiNnfLYA5bwsdd4b3",
  "key22": "3y9kdcGYoKySfNjAGQqR9tqPNPkwUWuWAGWwnPBKtpD69EFbyZQA59a8X66pkN9JSRxBQDaphig1wczZWKua9Nkb",
  "key23": "5FRsbp81ibKBBbPwNBSNgMJgaao1avXJEmVRNEYm5w2tquY3cLmcvVeYdddBeEuGk3CF27eeirF92eacFHDVAbJF",
  "key24": "3EpUeGuv1g6gFiyq87UA7mwA2FxJR7NWW9oErZdwBwFJV1Rv9UqhEkf4eQ9BQpQJepzcuN4EHeTVRAMVpi8DRHgT",
  "key25": "3BHP9gnvipxQ1ncK2rMJiEMHFgranNdY7smgRM2SojrvBcNb1n4QtfUo6APruZVG5BLMmbUe35bmvu7w9AQvZ3uJ",
  "key26": "46XcWx94pCuUDVbCwR4QJDgXB17yD3q1UJ8AkLLe95SpyUoYqjU8pMi3ftS2h2p6igN42jb8BLUdLUts6txYw2k6",
  "key27": "66x2TVbsj578JxDpAvCTcvz9bx6VZCfP8hhc5ZBtZ2j2SuyDhPKkeNPjMY3SX3hmYbCSwCfnEMGsbtMV4M5MotBf",
  "key28": "4imajmJEYt9CFBKskrVgCn3HKA3P6Jf64PeeAjnzrxrmVtsvkxp7EqybDcbwsZjvXfraVprH3kEhQcyzFdaKjwzq",
  "key29": "5M1HeS9fqxrDg3z4JJFw4prdQUG2kfpyXteyDP6QvKJWRgzDsEff81P8gXVqpi35hatvvhfRtvXEnogS9aQVhYev",
  "key30": "2wmPANX3cskcZ35eD7BW6Ron6BeFJFNG5s3xqhT4aax5CwnBbzQDsqNzhgN9Hac5rz6ZxUuDUvntEo2rM3LPhzo9",
  "key31": "24xmg2eUztA8fztpWvBqpUFJJysycBsLhVvdFNch6XhwVc8mgqvcrPw94bikwQkhs3mTx37wPBvwpSm7g55fjL8y",
  "key32": "5hQQVHnWM21BX1NWeLw3E7gQKXkBNozbEriiFS66igaGorzwTL52FnzRTUekgXcF6sY5S6K9g8q3UAqGPC1Tc6fc"
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
