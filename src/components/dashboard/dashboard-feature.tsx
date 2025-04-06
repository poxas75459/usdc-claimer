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
    "3bLdC8YkMQwnuVb1FGTKeDjBKHkABfsZm7XphFQLs3KBqX3cfwqYcUZy28k7bS8diGSy8VfiipKK5HAWTpsuC5ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pgWBkbHDhkwLcZXpf2cknJnz5JBQthPx39C1tjQn713CZf4gZbxPHGHaEp3eVvQQRp7gahypDGFE7zVDmxbXpoW",
  "key1": "K4kibBA6CzSdA5o3Nh6ox3AxL6AAuD2BLRZJCj6cdtipo9BTP1d3pF5jpUrSy7fYiXwkn6BfTJCvhCSeGP8Ek8U",
  "key2": "3Adsd8Mua8TZJ5qR493oXw54MArEwhWxGxRJ3nfavZpAHE3wY3SUB5upn5qeCTQvLmyAs1GsUMKgyodRvoMaKnD1",
  "key3": "4sKSBuutAfBZN8rtmwj2zyTqjAWmGrFi7y38veNCN4Qf1XiUL6wnbAw91Px6W659GqjBdzmMzSEZdeMxNPJRrTgB",
  "key4": "GEYekfecMzGaJJkZsJKiZL5Yvtp78m1Hon8jEqifq4p68HUQdQetsQkNH6tqmLDB6SQvNevLQce8hfhGXQ2sU7K",
  "key5": "4BiSubzBaWxZgmrUEMpmRFENQgRg7npFDUhFMy7pahFjH8s9zjuNjtXnzgshq7WpTQx6QH9qX6XbXVFP4phSGPrx",
  "key6": "4ut4t5RtivYa9a8Q5mudrM6YLdKqs8iq6KEs9LD7ceDjpgDZskMR9f96ZNgnuPXBovCD69pL17nPj93nZKgWUM3Z",
  "key7": "iqaFRg39adAxYFy5vixh3QGhiQKPd2tvPtemFksjwwhyXN9WKBnNxZDAP4oKb7fVMjcbT2ZfuPvwbL7iFt4gvkw",
  "key8": "67bbVEQ6gEVkoRQA8EWmEuqHSKKhufTA64Biu3YwqBiR2FSinczMa5dqgyJFm9tkQuoAnTHSEnUPYwp9qH4VFJBb",
  "key9": "5bamkWcJSnbfobGL2MG9secp8cMMmCJnNMD9LgyrVZhGPoeUk2532p81Wc8DHtjr165shRCEg56jkP8RheWncQiJ",
  "key10": "CA26XTcGYu9Lo5pfBhRddeseBTW8iSsbnJbN4k5GRZ3S91hu2zjTc8NrC5BneFNfeQUFpgaDbZ7L6KtEBHYysyv",
  "key11": "63NpXQsKbmRyzxJX7f519tjYGmRhFivf1ZdiRHYtxkKkbTEeSYLWKjtPW4sUBbny8oMX7zMRVyVzuwbDFDqgtDPx",
  "key12": "2caSrHiaRxPN2oYxkdV1TwVsHa1DPf3jsCNXhBBdTLPPZnVv77KFDE4Uz2n4mXwS8rutzSKFa7w6c6YNLSt8PXnF",
  "key13": "5yMsMYKRYtT7f7M7U6SK7nULyxdP8eCMCoYkaW64hpjrhcCa52y8oywTVi5DKFRw3iaTiNZWSr6CEU6N7SPsB1gP",
  "key14": "5C3AQwHJGBX1zWAif16EENg5CUF9uwcrcVBaSmE3zAdktvASg9pZaV3KTJdQsrEm2mX4TzgUVhU9y5NEWCw22eGJ",
  "key15": "2m3nPU8VJHoBC2cPqDfqetKL4qZXjN7n5tDQSeScU5KzRLj9qmGiC1ifxBGoS4UQ7wXNHSEtNdJsDAwsyRy8kPBd",
  "key16": "xfTgK7azaJNm5GgVEEg13oYcaBxB7oYz5KVxA6RZwvWc9fkDGD7mLQ85Pp8DDqPBmGXYVDPV9VuLTm9gdDyCW7Y",
  "key17": "4989AsRs3oQkLarCRHgUxkT9BHwVJWBFVHJGHyrdF9SYk5oVW2XRFzgEkPQPREj7KKToNo8xzpCdvvX9JFAY8Pn9",
  "key18": "XKbUyyhdvNdVn8f8c9K3rvuaV1JKMDGdgYYVnEYuomvXenzMDTmq3ziqA4W5hpHUKT8fuTfuyKNeNogkBxfyoaZ",
  "key19": "5YVGgqHZXbNTykxtaedmkSbtDNmXcHp77NpLBcdYomgxsfuFByCWZ3P1AtVmPLh6hfkRgdo5QdN5ZBsMZGKEvVQ4",
  "key20": "4q6uDLg5iAnpSUCJzcRAWCtSy5YLeuYXhQY44eqNo4XcPksrNLjxg34BKTTJhiqRQXzRirCMSwbkPDff1NWSPJWx",
  "key21": "2SJExrzJhgnUGJGd1fywUu3WnApRrP4iESLK61QbHgjuoggeAFFUwQsgYbYwMaKyuWysrAsXvJYTVuEno2ZVG9oP",
  "key22": "51DbZnDK2jR6Xih7Y2jvTmBcwB5nPB3T62S9P53SJ9tuF4aKiptPrsv6s9vTcRWQHMNNgjnfQXx6raV67DJ25Cpw",
  "key23": "3EvaPGbndw77d2vL8D6eeBHJgUQ4cLK28hhPj2aMapitpU3KJUEEbRNpz9wZEAh7GEuiYBRRYTQ5esxCFdKtVwQZ",
  "key24": "4THyhEr2Vf76hEfRxzzEN15JPEFJ1ariZPPkhQxTo722h5JuDtiRMkMpEoSJoZe9kHjJWLPTGH1EAf6m9ktmzq7g",
  "key25": "5YuieAvRiDyUguFcrY7EBZLDqbu1gq9m14vPqdRAoG6oRBmUyDYV2nwS3FQYNg7FDGtHQsLTvrDZuuFz94FfakT2"
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
