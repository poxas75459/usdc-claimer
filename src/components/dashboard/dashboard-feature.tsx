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
    "4ac6B9TX7itVK9aoFtMH9G6bzdCQN2bTA2tkvRfFEmz4rC6py5RrjVegHNZyV6meakKnnjSdw2aDDBZiyd3RTkeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqvc5okMRpXwTLjKxCKyZ3cp6JBqTjMrar7fQFzB9jedsZKadE7hKNff8g4a2uj2Wfx6WjqthuzAdKjCVF5vUkg",
  "key1": "48LfEmYdF3gGDxC9G96ocV2zsBaV4wbpH4nnpGp568qdK5raAQ523ADc1HUGLaq4o7F9Dw1kNqNfDzFic12e41Rt",
  "key2": "3NLNowNLg4bKXT8CgDqaLeqVNZMSwixDDMJcsGsNX8AHvRJTAcuC1aeg2Uz5SrW26qifAxLS4ZrTXn8UProgY1tW",
  "key3": "44Wt7jcMkUx6bHK4763CzbWe8RikjMignHeUbRKAKuCfHuzSZm4eWD3Ku2p6JEGPPZZs7utDKQHSyj1CYSz8PgY4",
  "key4": "A1B6uTGGfAGfNZwLY5YE4i3CQhcVgvgQ9CwEUknAgxgFjb1KrecMTPjVq2Sy7UX665pRsXaAQJjYzq6jNh1CGwC",
  "key5": "xhUazVAgC8J63rEkhx5Yy1PnpcrGvbzTP8nYZuX9HKCtNjb9PqynLagXf4sKR79QsDwcprqUnJcWWiURtGXakwg",
  "key6": "6kQeX9KdVoayWn9U3xDsM7xDXqE6CxiWp1FsBPuZw9Wv8wsGS9tE9pgTndmPEPgAXEsJzvkMdF2BqXqr4NSSVy3",
  "key7": "2soBtu38NkDwqibnCSDeAGzRGiEpmUp2SecCJFEYVNF4jrxXVQiE2RWpMw4JTdpAH3MeWSbmP3Z1bTogYH7ZmjoW",
  "key8": "4dN5RdEkMmPUuka5zd5UK4GHAEo9N3ccNpjH6aGwDYKqZ5QngfgDvZjD3GHjbcBq4HyvdssrZGhYKHXduysWndHa",
  "key9": "5z9emjFqy8dZQZU2jyUNZ7TngwHvFjLG2V7T3AhKos8xrMxmhL881mzCWSVovFgRJxHJfdvekvNYWspGRtMHouBd",
  "key10": "4yXqb2AkPZwsRWDtbBJEiyC6kqCsRcYGRTogNvBHHfG6gHvH68wbXrzLdsjzv1kNaGbK4nsWYF1YXdEbBw8LpnQw",
  "key11": "58mNAarBryrcchbnkB988nyHN6TBYj7jn9dUN79asYmTs3vEQfanp4PjJqkqZKuAF9YZgq2HPp1X6t28okDpvF8u",
  "key12": "9Y7T2giG6r1hU1hsFDLSdkh9H89dtEMLMucksr6dqcS8E42fAj8muDbMK91EKfZ93xWARr91UFfUr3fzNqKprEd",
  "key13": "n4V3Tdaev3zB4AEorw6sUhuH4DpJhvm2PuvfUPqtAjQNvAoqD5yzSeicWkKfuujAM9tGcS8HuQX3VDqbn5aJ4v1",
  "key14": "4vEvcxLZ8pj8ixR2Aq4xiDV4bngWyeGcKct4PfdZPkhneFqo5H6tuyiXm4BhBkRFnUQLqe9cvNqexHFBXejwRLKA",
  "key15": "KAYtWYnxxEuNvw7LRQsNPMq1L8GYLGJDuZ7wHGSh3Z651nrC15a28AosKRenrJgcsCZUjPKajWJfk37a3J6bEqH",
  "key16": "4j8vTQkbKyPYJpXYUuYJKVkwP9U4TCGcCTS6x8PsTxaNjFuJ2RxEPtBbKsPBstGHbaG3caYBfjmiwnZxGCVQBFAK",
  "key17": "3cbVqYinv2B6eo3BLN8FsPbGbaVjVKzJqvsXLgwd8xpv9iFodsrj9Xics5xbVWiJkEWbvJyYEwkbiciGjjJWbkhN",
  "key18": "4xXrLkVrVX9ChK52TnsgCWwZy3Vtsq7ammrEvcq8XvvDFWkXeUXoH7ktcjd675bqf6MgpM8cHuk3BGFAUhvkHXkv",
  "key19": "4yYdG8gYfQeWDAFrwWDrJBGC92VFBtAEnGPZBC4RNcmBP8qUo2rECpcw3Fwwmw3u8Roi5KZkxhATpCjCBNg835ph",
  "key20": "5CcRmFTSswZd2eCLmEvydaaeBfVfgqSGnbaBNqS3G4zcuLXvQqncnQ4wDUUYzbagEfQ27MTwCJqwWHLk1Yurdawz",
  "key21": "35oVLd7darQWKrmP65oHGfu1VxNwUEgEZ7piTm7dWQnzwqYTpj9DVEouccGzqLLjYFCybj86oVRJfYLgYzqobqBM",
  "key22": "5BPRUaWbsZ7rVA6mFjVWgB1cSjcYd6uLdQT17GKGZxkJVr85QE3YbXPdaBh72rmhqWb43FFdZFi5WpnQyHxRpS1K",
  "key23": "4VoACpe2hqw55hdL1bUbyxGq9cx93dr5t84tyh2twd5fg8ohHS7VqDmdsSugt4XNNykD4FedgERtDSQp1C4tn8tr",
  "key24": "5jsmUMJJjXaYqwncmC9vTDZzaxmRppxLmmbg4Nw8io6vk4D2Gn6dBnaYVgjdcF3spXz8vMaZvCZ2KArZea4yVx8b",
  "key25": "2JT2YV8FayaxFVwDL2369g9T3Q451AVeAwxv3rbVRrvzYMK99AyDbo8a9cWq7aS7FRVk8yqwhFYhFW1rtC4dLL3k"
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
