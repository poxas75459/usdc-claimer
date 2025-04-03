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
    "635i545tv5Kbrs6GiP4nF83uRfEsPxup6oiaW4wVkBUSF4nrsLNkWvCM6AQUFcZfTVHDyW9Ekzde8d1bsPWaikVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sUz8WF9pePLvQWgXgjVSxkvRRPAzUAGScnseyC6qdVLpTMcuxAobs6uzVhzfNnUfRudBmoDh5zu6PUXhzuNgyD",
  "key1": "4YyVi68brzekbwjxMskEEn6YzQ1u8c7B2W7pBi8uzAtJvBYuowFLmgdUtvyfqpzczA62JrBn3tdcPALp8KVRoTjw",
  "key2": "4J4Noej8PjRawXE73SVadnuxe5jaT9vBv5iNE7dRZLHLTSkR3GKZv93SNpFLiNxnk4T5Pm6eG3kgqeYc9Q1aDSt",
  "key3": "5Pem5aGtAYmX8Mh9pQ3XrQzDdkNSj4KeUQSZQMQWNX9MXf2guAKxtk6GF2shUeR4EQvM8tcYd45McUy2amUENE7r",
  "key4": "3spPVd1LGPfJUG9FySXaGTsgkc4Czu9guNMoPKyv1pEjpEDsQsHLjJLjGjjfYEtpWeDoAzJxBU235PtAS4wPyEET",
  "key5": "5BjotNUTuqz2GKGRbpL68P4z9kcEPjCBK1N1w6S4Z1KuWvLgfqCQKsuxsm7W1QfVbiiNK5wrUXmCMYjxbmNC2qZ6",
  "key6": "3CTH3pP4U7exmz6RyVPquuHbkRHNAUuh5QwRxTuBFdMCT98DX4pVQB4drwRHAPmK9fNMdvy6kPLNopqkb7hbW2Si",
  "key7": "5oSL2pcE9UTaBeLCAYpBiFdAbp32ZStikVJgPCR5r2padj1xTejad9gTHKGq4yWnDM5o5KDZh7L8Ygc3SCbrcTU1",
  "key8": "dcJd8Q45mK2PTQ9wmFvFSwnggvTa9AWUHXRw7nFRtJXwAWuJiRp1aQ88g9ctbysJeebgFp7ANQwK45FwkXMetKu",
  "key9": "26F7T21DpQ1Nh9BDMxqqBaw8tkHQmdPewi9Pa9U5UeJpoimJdfjpvRJ6UsW14VMJWYH3ndLNYGZDjRZxMWWJBE5X",
  "key10": "5AC95ggQDWFdosXZxsVBkgxzJLmHqJGfY6k9jL2mRS5ipNMZoE5kR2unfBWkQr39tV4aKAyfYEsp9ysWo9KVgiGU",
  "key11": "qv1HrAwBi8UbFgLMAwxj58ZKBytonDnuKwfnCZakQJ14rpQL5nphcBZmFoTTe3HZBJ57kt8tzXVumFH9TSWLCKe",
  "key12": "2cSVmUAfJG9jPfvc3a5n7uPuxX8r35vJLCE4ApSvw5TtGHo3sdFNY7mWgxvoXfdKdNtQLHk71kPhq2U6h8PQd2Lh",
  "key13": "5NBXpbTqCGdtxwLRJWUWL9Jgrad6KEn5wZQ9E3WoDGvJsuDwZipWeC52KaUwmtm7MdfgHiFqH1Zi7YzgFAt8M9NC",
  "key14": "3NgQh82DdynaRyLVLW6tQBxibC2LPuP1CAWzx5aG5iSCYAVjKqr5j4bRV22zUfsvYViPtYZSu4fQfWLtKV14f1Xi",
  "key15": "2ZBMpenfpzGbhUyTrHHwsVWq3Zj1xAcPjqhJBczw53KSQuPJmJrWfukeCWQbHqvQ3rjRs1gZyLeGYgDiJmANymvG",
  "key16": "5aYa2bAajPH9nLbN6WG6W3rU7uwMCyNaKuFxiAtJfYQxgoP3e5gdVXnC3cwrAYzwExM529VZs3GjmutfSWHoNY7H",
  "key17": "2p5ZLD81R5PrHXyiVrLH9uUu3v7iNe6kr1rwCrjHkA5U8tLP1QuPNCR9QsHW4bh4EVEq6i9fZH7gkWbMViPto5xf",
  "key18": "2z72ptqQkSjXP5aReUu8qMPJLMYLiArisgGH9dNhJXaybgiPzPfUXNrDArQYsR759FNJrjuKq59AxWESVS6UTUib",
  "key19": "3E9x6txMt6fkpMJWgQ7uFCAMdqRDMyACGpzmmGPJypz9HxozfknaZRUtD1ns6ebAjBbSX8vRvkeHq25tmquG2dDw",
  "key20": "4KGxcty7yZaemwGkrhEvb3ryvnc8GK39Vt41HB5ZXV1wzj1GVKsAkzTB123JfeHU4rt4gpqDTwEUDcZW7UwWpQXy",
  "key21": "648XfxraJQiQhP3iAPnYBLS3Kqje2zvrTpaiS7DE1jYi9SypHwMFdLhkqbZmor4e9Ywe5m28Y6rEdLJ6R4LXTqvv",
  "key22": "5jnM3hTVTyS6ZeXDKkTQY5WwRdJzeXHZ9EWe1mzRiHZPwdaxfULWRQioLyrft5Tt2mTvUJ35dr5MsFckbwbNW4Ln",
  "key23": "45qAE88GT12Z3fFvM9RBfHuG5tpSQzAEsukc2CRu6rigQHHYMWDy9kHUKpe9f193EUug8cCMBZttK6Z1p32kpsME",
  "key24": "3VNhzTHddAqdXPzCYERTm4TyC1hrMXRiTRDnKBbdzbnQ3R6kmzi81cUNTpiFT5erZ7TQxhPZTbr8rEt5cB9B5aby",
  "key25": "3tRndAtfV3gdua6Kx4rFNfX69JjoBX5KLt739Kuvx4rzoXk5ZXwRDDfHK7DMRvottod2JCx488dg7L8AEXoBt1ZW",
  "key26": "5RS6KmDemy3AWTgtwEH5Hhhx43SNtZ8h2qYMYX4ePahvqAmAKmdGnsi6fsuVXQ3q9QUNQi3Qcw9X22LCaPkNv9bX",
  "key27": "3QK2pZ8N4tLQpw7U3zeS2nfAuBmgfDUwKFCBSDc4JWL3tQ3vYmMw625zqPFQPJkq91qRukWLenBdVbuC35XK7tQj",
  "key28": "3AWCoQGe8AxhnkVhLLGoUeavGPqWEdZPFLUWx8CNxn4JdQnDCu4hjAL4dS9yXr21iPYmDG3ZQwrRvGQPtw1S97Bc",
  "key29": "m2EJcqzEH8waqa3ZEsnFAs7cRigG95dYgba7sVZweuAoWtHkAsnwoxeqDtYoRy8Y6WszutMt9JjzKazquRrkvtm",
  "key30": "3er6MNmamCFF4gxhHaWPh9RDTiEizXyWG1JNxPZg6QzYQJsQvgMJCuE2HSCU15GjPhSzBM1MoEPZKr9EBeKhQ4mB",
  "key31": "8481hpJNd3VDBhfq2jz9EbW2sCXDcUoJcSVEf12xPnssVCc8YssN8QeikEnFRh4bw79aLjNtR1L877YYNwwELET"
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
