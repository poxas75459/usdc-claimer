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
    "4zEt3AqQGNpca5urDozWDKg9ZCouKULbzHeDPAM35Bwc3my5DxW9HBePkRbFHzFSL4XUDLmbt5oXtgCazPehXWui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zhsN2n1j2vUVQQi8HiCrNNEzMH7Q7oEPi5LxxtLE7LwqAX84fcJsXEfsDXw1BH3jU3VF2pLai66bMjx4yJXVR8",
  "key1": "2tQZJLihN1Dj1oNVSLwJTndQLoAfBWeMewHWE3ZfcE92ECDJ2bKhFTfCBd2LaKcQ2xWSmwWUuGTNtxx4gxPj56KX",
  "key2": "43XCvRCPrEg4ehXqdTZn3jAVVViUKnzJZ5jwUwZtJGjgK7J5xuMNnxo9BUWEp4bfFPgK8orituYsgYUCm6TZXjSp",
  "key3": "51ysr6hnUi7u4AxGryVz3hJcVGhWRFiLp5mUrcP1futjYGGSATV1NfFfhG8ENvDA6Wg1oGLXE1s83eeACZg9o8R5",
  "key4": "4mKEq8H2Km7pPucv4CgyrHDw2XduhSu8q2LWRuyr1SjLiKcmhqSwcRgseFKGpHW3UMtupyNRh71cay5bqPNoYLwL",
  "key5": "TTXogxQ3Kb1aWRQND7Jh26aVsnAGpKXtN3YHbywyKNxfM9Ahwe6QJ6hrR3dqaEAHwiT9eSpDzwEQgvXswEYW1Ht",
  "key6": "5QUqgTqzHxu1pTJQjBTn6b8GcwFZeJRDT2hi1umpeRnymYcFFGdUhuMukvLAmmgQEbjTcXD9t3sqsQfDgmG5BPhP",
  "key7": "4pC4TRErrNz1vFi3RFjJSUFBDpHtBXB77wYiaMFy5DsGbKenJhDReFGZYNTQHxcJkCk9cHnYyNKPbRaATp1AmR7f",
  "key8": "3poKGe6daNVWrF5nbLCRDVcURKX81wicQ2uYyVUSQdV5j2Lj4k6R372viKR7YG5jiouKZeTYYZJ76cngavsBiGoT",
  "key9": "WPBuvjKGgu1T93FZtZ1HPzJGMHTon6N5bzayDzng7x7Jw7UQZr8jp9rb1qaHSwuzb1juVZT6M8SzdcjsTmvkmFW",
  "key10": "EcPYtdJ9V4KHdVHw3gJveKj5JzHPFLKBpb7mxtfnpTFQ26QSPtGZ5sUDEepdQsTdgVdfvceMuJjap7srH9LLrYV",
  "key11": "4DWoZr4oLCEBohry4zq3kLbGVQxhmnixkbngLgKcwSm5bjY11MJFC4zckdJURszPMZHtGrR23AJt4e5Wpy7UqsPj",
  "key12": "3ayxKieqaJKdwNKJ5AoZny6k5NxeN8C46AGBnmySdeJii2fjp6GhuYEbkofwUbzih8sDvx2yUZSPEf2tagM6br6S",
  "key13": "2yGjaqF6VBCmcWvSEzozQepsKVk4axjRPeEr1ZUWtceAPhzkL4vbx6JLUY7bN7qaRQBuuzjN1Wr1XxuCAhMQ9fkq",
  "key14": "2PCyanrPaqXfKL25DuKAQU86eBBnfug9mare2CKBsAUrcKgRihW24rE1fk6Z8fzKW34WMPcVNwbUZSpDDoC4fTgV",
  "key15": "3CgFFRguaB3cVFdyhFF5ZE15GdKPdG4vqsFRr74ei1E7LRxuzgLaSXXqZuTY3GgrnvEeL7PzLFWAb7aQ1v3JD5JB",
  "key16": "44dUJ4UkBZV275nrHCFjL1QQcX4o9YFRSoaVWixrPYhvoiqxAjr772VrPkxTKKJxSwyTKJrHxVR4afAGejzoEPrY",
  "key17": "Sjdc4pTyxVaYRU9wsqrYaxqNgrrkGowTtkhG5BhG8B9ZfzJXScNKJB5vVhkWTy3pUNgc2YdunPBNJJAxNu9vnc2",
  "key18": "35CfNCvFZZEBsLEKTKhQzRBGCtWsHYe4FCJGYCPwpMzn9wh5DjMmNntF9o3ZFQMW7jjCskV7vZ31Fucyt4icKWeq",
  "key19": "RrCJz7x4qWCJC9kpDMAD7yM855hxSducBsb7usKxbhDinoSXmpm2ib3bLEnXAKBq91vCp7Nz4GTLfwZtQExqMvJ",
  "key20": "2DJLg7HwMeejC4kVS8qZguV3sTs4tNsTZybkuEUJhvLwtbCV94GPDtWoi42p3pZD9JmBosdQpwdxdAALqgC5mtmn",
  "key21": "Se6Yi7aaPVjYqDw6erXjiQj2NpevEQNy4Xfh6TF4uJ6iUpu29mxwi3hbD55dJVdH3tGMFvfaTU7Vgwzij4TsF58",
  "key22": "35Le9WEu8pUZFZdQ4nuf8JjZ5cWicjF5bUD4myFYD3ffwQPSC4AxaibTdHdmn9RHkZt5pFXs6zP86vMiS3DNKT5g",
  "key23": "VNPbe6RfThA8rSgXgAKH6T7EuuHzn3Mh7Gqhg3DJQmvaxvgyb5wk3LRzHFiT5VDzVP8k6JZiVM18YzVGc1yjcC5",
  "key24": "2zXKctpeJC1D6wvx76iNWP4YmkUML6sP2nhDTB1uSFphdcsgUaFNDaUhK715FYfvVYieKRcspvgd7Dswu8iMPzEd",
  "key25": "zLYZZk4EbGu8wfsekpsdZEoqAdSULSoVzGEZtk5h3Z1woQFq91HpJrCh62mnFaLVaj7qrB7KAw5uWJTMZcQsTxm",
  "key26": "37QwXNgZreVLXteNT2Z76nipGYKEp74Ls2RehFvmokTu3JXyX7Y7JzpvqEzE85JkcqX7UuZ44rhPUbPVFmWFWD21",
  "key27": "52JCTrYn2hdnKcrk68G4YxUguxFsrCefiJ5cKK4NLYbrVrftkcDTKvXaoSNvsuFSRkiWYcJpvyG1AvYjecqpQHNx",
  "key28": "3BQ7EFbQxY3ZACSB7YAFL1z1FJAb9gvXKGjUJyaRJ5WBPJMymZBYG5tBMAPwnjPfchqbH4WPtF9Z3gM8JEYpBpwn",
  "key29": "5rw68TBHhzi8kA9CtQXaussQRo3omirAi6JXYEpZUMT4EYcWNKCMrut9X7UtcUDaCMgvHGbi9mxs6w1GFhKWn74e",
  "key30": "3Yq9mQcofdisrgv2aTMoB6ZmPeZPnjt6g7zaFdFTS3BkJ6gopsQLbgh6KSAvn7NTGHMXbuFvB4zJppthsaXZSQdM",
  "key31": "2MFrhypZ9PuMKxRe7R3iEBfmCg7CBkuRwtdNmq2hB2ArG2jJ1yihLoLRD7Mtf8ZLXKTNaGJQLbTeCNoYMfL8eEdW",
  "key32": "46pQBfazMopk6GtVqBjkFREcnDBZU9GSg8v9kgwiDfkPoMbd835FgiawUUJnZyFcCuz83HGBz87Emmorx42ybXAN"
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
