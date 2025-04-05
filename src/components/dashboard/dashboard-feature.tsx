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
    "3DUaeW43Uz3UYibvDbqFcxMsANVoBtMYyGLoy6y7f7tq2XTY4FjxHWZYpmyRUbfuz8fA4aVMMrMxxMLR3H21maPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zhL159Vqci9fzXdgpLAmwsnHQzL73Sxuaq9AHD2vguEiLC8wpaFwnbYPsvFHrXGTPHCMixcbMdHS2KSf7vT1x3H",
  "key1": "neJNjenVZFtAdXLM9zM9ecmfLETjuw4EZdxjfkcUr29tF11B7ewqfe8wsBcQPQ3tyzG9bZYEkR3DZXsfEZEnkKs",
  "key2": "4vxHGw2DTKKgRZKRC9DB68LcNNsajzVYXKoe81HvCeN3329iAQvXfT8uQBhLsfpuWq7or4zrLBhZh7xBNiwDxA79",
  "key3": "5GZHc8aVwMZ2rub3RhtpL3Dtzue1PKwgahwNno7vCucfUwVs7sL1GRgKXLcGycrQHq9M7g93m9eeKtj4srizho5",
  "key4": "m6K3qLqPwPmvN6AkohyLmB3hByDGQUD95S8wvynKk6y4RxdUppHUckyahV32V36SL8v54i1s4FYfQsPsj3LU2bo",
  "key5": "2dTGBz4DYASaTb51kbV1d2fZvbeEAqcwQQwDgR8XtYHUVH4cLU6c8ci1w1w8PA5Sth5z35moDT9DheciqbmeD1cV",
  "key6": "y1GCVESaAtAj94VV8Pz5Kkqx3t6p7xJnWJckyVRcqAwX6EofZr8rJftk3WNyYZbz9XqL2uRSyF7BL47vdLnu9Cm",
  "key7": "4Ujvty5YLGWUepWA6R2CfJ2mftjq9mZEAzUCkRrB4vGxj3HmQ65qyfWBZnMEP4xok8387hsMaVa58o6LsFiE4E8n",
  "key8": "P6qUbcd8TnTXCHYi7jFAy5TDDdKVDqwUuJYjjvtNqBF8Dw4cjNJuzx9Q4i4SimvfmnTCxA2z1ASRDoYLZWpKNNa",
  "key9": "25x5aQENUYWdaAQYY5Ez2cu657BpJzmycp614x9h8DTX2WmojvZKhSDGVoBXzgqMpkc8VjwDVwK7CcHKDi3aUEa8",
  "key10": "24J8znqkvTEwgUWTowoaKVaMVTRkJRJJWVt9QjVcHHt7WZfjkiQFYp9dEpGxDEmAgfxGgy8srFBAuhm8ZVqKNCiy",
  "key11": "KqqCKYQN2bSp4CXA7Wpvwpv6bk1bARzNGEkoRyVUSrrLMxjtR8aejQxKnegawPHdxssqoBQ84PFD7wY226fsya4",
  "key12": "47ETeEZ8tf5M9T1hT41VXtUJLY7skPTyu5vLddTZhZhPctBnycgFk6AqQTUH6F7UHknraYMEkuKYzqMLiH7m6nHd",
  "key13": "3qXhfJfot1XKYKqVtrt4TtvsJ7YV2aWGKuMfRekUWHvc3RmYBXJgQJmiNN6LAEybj9MhRtbeQirybi9GyoKggrta",
  "key14": "2gpUADXacnBt6MBsPGojfafvuhRiT6UtKTkqzqFWAd1zUXAD7BMF51iapn9YfqCMXpywQC27xnHTqCpcjQiS6GrG",
  "key15": "4jKTZU5ibtwjZY6XdnpUtHUdarxoRKZr8HQLWQa5ZUkdbaAzkpiwD4mjyDcX9jZnESmCD7wkQ2hqk3rzoVSbfNU4",
  "key16": "4DqaVmyshCPtrHD2R3WZKUWg7hPsHt9To5rVxHahhuSg7ZDftUYwN5EhM3tBPGQcywL4WKk6vfuaFohmTZfwSDvL",
  "key17": "22kAd2GdE6cqzPobVtvKiQ786u1VqvsfdWwNfMWbhMzBCzgY4z1Lyc9M9WiVHtFbQCkhuofnxv4L2k5jLHGZrboW",
  "key18": "4ZoXQfizyL4Gj8awjLMsThY7xNZoPzMdZA1S9om7BAHTi5SydWAz4Ceqs84zxEaU68voH8zpifjjePrBmBCJi6ak",
  "key19": "47HuMK6968dMgD2DqbJpxixaw1mFUdwJEcsGtub865VSyaUp98cAUm2LCY7QY8Ddy6pJXQpR6As6YtHPHkZMtvxu",
  "key20": "4QUtGoMam1VQo92FxQgkMgf1ZE7f8HDUfaApxuG7RxBWBmfAgyzEhbdFXiJxrL6zFzJDQb6VrPfJtmwnrSzf9Udi",
  "key21": "3EaCCdbQU6aAW761kQA8QH7VeMstWwseuzqWeWcEGJpufDZfStr1iL5n2rKE2DzxVGoEaWuXepqRGAG4poroVymG",
  "key22": "4QmqMsRxwGb1NkyQTxN8iLAYNDXjZC3rmNTFNwKpfuLrS8HZ7nRDbedtFzWVxAcsgvnrdf6vkQsbWcqn37aBiUfu",
  "key23": "axsupX7dViDAopX16KEfU7t4mRBH6kURmgs5mpxhzpfizpZsvRrUfu6Au3UqCU1MgXYWLuU49ZvX2p8d5TQLRYj",
  "key24": "3ZQUjgwj1oqgCDFZZDUi8DDvhuYfLBtmE9dTqRFLuxDncNztW279tfV72HumQftsP3s9C5oGETc99WNiLt38SAzs",
  "key25": "3diNjmegDqNuCgAP9WsF2HJB9W1HbNXZN5sK1L6ytR8zEwRxEHqUadWgFf3CPFby2TovVVKPhgNjQq35AR2qVE2n"
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
