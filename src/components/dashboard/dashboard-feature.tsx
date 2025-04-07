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
    "2rXChwjfPyFqUx9scJeA3HG1iyt5sWS9Ko41xjpRpxPkuY1C8Ef2BRrkcsc2gSRmeiBBCnXjzrdZQMZus64KuGVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38D84apN8jERJg5wWA49vNKPUwUVvTksyigvRDSNSk2yvSfTSvwGK4z5yZx9EhP122Xt3kKnaH9cUvFQgcb6CfKw",
  "key1": "5DHAbGwGwcNYFNbkhYjcGkqDtRABF8L7YzXiuCdTFbKqAUBt89TjMqQndPzLv82kuowcbkA8e9VgikgUvRL4rG3A",
  "key2": "2CBGBNa3v6S38PecFYBmh8sJPQbyn4cH1gJMKAe9MsoVqj4FxRWcazCzq4X2o7E4zon39qYNZguSNomaw5akJcVd",
  "key3": "3TmFsBags9Mt6LaMcNezv1J3jSTHRgxXxTstrk66o88AvE4GcmAiDnw2ZHWYbyCZiLjnzuG8h5izfgu8nQxjBF8s",
  "key4": "dscUTuG4k6r6v7GiBEF1ZYgHoFtajT4U7eocvfZf8ct6M77VVSqFHpjuAqGjFDZv76x5VpdS2HytstAg2esHrct",
  "key5": "5AaYKWE8q7bmv9AHpmmcNoWp9WRuH7i8FRqzz3Qx6mb6beu6iTpb7QiFqN5LEts8LAYs4VGEKSfJ3GvQNGqukqKp",
  "key6": "23VQqdKM4QUQBDD4BrVgFHGTxj4aUtZnqwosiig6TtDh8eG6ESUfSennQYvhx6JLQdWGSAe3LvRZP7rrbgW593ST",
  "key7": "3qwSJPGteTAwvtzZFqyDUJkHc2mpApm1gKbcSCg1qPRSV1b6rnThRnK2UQ8QUVN9CEq2RkgWErWsVLBNw7nitbZr",
  "key8": "3tb2JQv7rE8arx1JufD2n95phsvErJUSuiV9NRXfa1dooz7Rxgq7JwkcfwT3meBvepXr3USDqyesW4ogwCPA12Dc",
  "key9": "Zx2pyi7j5cByCoStL8whayJsEYfpe18mbd9MmiuQQAQeV1jW5JZ57gQFGsanmcJb17VSAxjjrj4t5wsfKCg4wEZ",
  "key10": "sLrGLUYW793C55bw9gUjMnpvjVLikbkKEM8HzqHxiZgoyF8DM41fTzDUh3WNGtA1yHkgsLyNVeEbfZ4UBoTT6UL",
  "key11": "yU3TmRncjhdBwuHFZAq6Ezivz8B2h54CwDGKYohNzSRBgeq78gjZ9t93AkC9QpvFXzgurptajAU6jViDgojYm8g",
  "key12": "pgBxj3FSgK7YbYMTT5HVTNdJrVdvsTYE1u322rkkFRBQTGsQ2Mkz7dkeWzevYTknTmZ7tymeCsvrnLoRatd4MWm",
  "key13": "2LavoDjXcAyhipio6i36k9wxBUrqRt9QvqpqzcGUdrFeF3P3uN9DxSPTWa5NgmqE3jamt8PwKZ7s7jXZ1GCaVraH",
  "key14": "2UJKeXo8hKSXohvC7iYVxjbXBTuEwX4fU3kj5AW2Lhr3fmj1NrkPxd6hGEmhjLahdxi5Yvg1ywiMxMVtzJgytDTs",
  "key15": "4mqU9pKRL7sZmzP7gj4Gtd7X2j4pimEWgNVAwwk1a2cszAVPRMk5qSRobbTanF1F2Gg9cZNoHzmRHMxLzLAkp7u3",
  "key16": "4ZmdiS2g7GSC2mNFTHXcnsziXSnFzNpUcNuEoiVpB6foSy95o7UDHVdsXMu1Y9QxH7HqahYgpTPhywy8hdXMos6H",
  "key17": "5HVnVH3isFrCUuAK6KWBgXHJjkLp23mVy7SHGbo8qJtsiVAYcG4uLZ4avgtzxkNTnyDzKzqiCHMUQ2iwytQtYci9",
  "key18": "bsWAxmZNrypd1Ui8Y19D1BErSU6Kcgv7yi7B45sgVEvVHgdsNBW6ELPqPbmz3CsadfDK3D8tLcywMnHh6xDiqpn",
  "key19": "36YbkU1D2VxLk7U6sJYNXMj1CFskz2CuHiWVtM7RckorHG6c3AAggkXqXp3WTP5QUkgF72oHFNFxDFYoio3ozjcy",
  "key20": "CsVxWZURNNBbWihBjaQMjbUoBmcMkshbAecVYekB4KcXv9yxUCj9YNMoMKNL4y2AH86bf7LBRVEPQUA34f7VfTn",
  "key21": "2NqreAABJDUcEQBAHtJ6HSnfttqmcRPGgMsgbWvxR5zUQ6ygt7XTadjSMCkf6DK7VTag2ZDPzJW8HcsT1ZNjwMZG",
  "key22": "urJY6QL5jTPU9TTZu8xHogGa3o23KgZ8HnsAWss4huvp3eG1byXSi2yzb4ozDqLZjRqgMvWsNPet7ZjTzcdCWaT",
  "key23": "5P16D5RMEUWnKdkVUgNboRXzCuXtPbt4vv88CAipWoEA6dkshLoJYAg4VFn8Bp9iGxL5kVg9mdbTXKvAHh4t83Jy",
  "key24": "5QAVzuirSHn8LUDdVqS8K8iREXUaCfHMh2fxo1T7M2MjKDtiH4PJTEw868hxFzti5xmhYPKa9W17iV6f4KVpSRWP",
  "key25": "5V2MrBrP9ocW9JHi1fhw6Soy59zcfnirXqRoqtdRrsFLhXW6qJesoU7CQcuvb36jdFkgZoRmTgTgqYgy4uCTFvxR",
  "key26": "46rJmYPE3FUDxvpQNaJvAGzwyHBuP2Rj34oQ9jEbiTLD9Rft9vKoD57zGd4S3DmD3K9E7vAEw1PnK4eGMafMwo5T",
  "key27": "4jcvZLdXCUABosyScuYz6KduWxrqwiVXs6r4WFYK7rnVaXhodpHaLov1jMmKvM9ceCQCUfywDp5gZpXLHZLRa4UN",
  "key28": "4A3fQ8PedRLGsvYGgoGHKt2ycstpwonwZ3W3xhudDnFxXHdrsQHoePf33XwUhwkz8X4RjnYLXj4mTdG83vJxnefA",
  "key29": "5EdBr36HMoetxN1EjHe5yxzNb9J1K5J1urUKGDvEF9mTeJYyenhhFmcumGwSdJSQQqwNeXw6VNsg9kHyvGjFkXtE",
  "key30": "5JTKnBJfY4SDkbE5dxCCtXbrdD9C2mtmmEi5U44k7EPvCyc5BbTPwP56CMYd8hesE6pTo8QS66DkFmTM5G6ejZFm",
  "key31": "2ZL8vgoRgTz5JYs66xrBfk82PVJa8XTp7AHq3XhNh1nLMqmcunSjYWEz27eAR5c4QwQTdCosUw4zTkL1SW91o4ue",
  "key32": "3SjCDE5aEYg8sSgnzfE928paEVVuJ1Z7qBbz1irwWPd6fhA3b2TmELjXqiZroNJpFtwovABRasMZN4a3ygysXHt9",
  "key33": "5rNTAyzNCYdLCSi5B1WcqadUKvfJvEz47D9LzEHA219VXLKzfdiD4nY1vEx8TkAptZJJ991rYBeQbgFA59qeNBGC",
  "key34": "5nJHKfDfMY4vBme6UNZoK8JpgLxQy5yGHihT15bgjkrpoi2mfgDWet1dxSBh89hYPLsr1F5b8LzNAv2U8LhUiqvN",
  "key35": "4JsyQ6zjXr7qq4GgmxTCsGZc8RXqZrgfFVep7981PTpcvK9NRb9kiv1XDcVkgGj3d6GB9JLp72w4AsFZEmHJ9pkm",
  "key36": "5rbebBs7LSkJbnhecMXmnk89D2XrvMJ5evEzC4qLEyuS72LhjLUaw6vhzSFDEwEQPn3eWVxcevsqMhgkMTCassbP",
  "key37": "5KuTiFkDRNN7cbq7fAYUs43oZeLYLGb6GNc117twf7xumYvH3Zf56TUFjCTWCEXUqpUTpCrmgQ81tefFTWQYwA4Q",
  "key38": "3hc6JNpZ8hi3vTDeNG5ArtcgYK1aqrfGVk9tYL3VNYNAM9mHU8HcmBAyBthSq2nPkGSaPQF4v437LCQio99fkJjZ",
  "key39": "2U4RUDivmdAngYJsWfXaBYURuxNo8k5mPiHAVjr2Lhz32TYYTaZLDuwHktVh7Zb4sm1UBd51R8bnbxwZ4RUwmhrB",
  "key40": "55kXWV9LAs86anEVNw1EwqvDSdsV9ayyupd8uQoNviKtQGwSY3KPmNjNo9Z4Lt6a1a7rwtd18Yf86yPLUHvs7TdH",
  "key41": "57qkg5X9mt4KK3ne7zTUqZLQh4qHpNTjQfDo5vohMbkq4cUBm5Z4SRah9rLAqgcppqjN6dMHAWsbUFGDBAwAZR7X",
  "key42": "5FJ8b1uNKHax5WXoYGaE5xYLKo5tE4r5tDAfiR4Mb89yZ3CqoMsBZsyNSxV41VLoNEpjwLJQHVop86XW9S47YQ3D",
  "key43": "4oPgWmDLeysC6Qp28FBPeud9KYg2sBf7Bo1G5scH7ejwm6K5HUvtYDdDjJTCETyiQU8gzeZtuJeRRcqxidqptCuF",
  "key44": "4KpqkadaosDbfrSGFV32va5KReG3QTRB3VnLQ7n2FeSf6wfLQy4frUrmC4Z7bYJjXSM2wrh7E4A8cGDHD59y1qDb",
  "key45": "4ZweG4tU75eBRuWMe8xMNtufc9aqAVTnQ4bjQTPmqmhVoe1T7haqc4V7Exnc9RrV2btHvkoHpFUCvyAYS957k6oM",
  "key46": "61foTGJiJSh3R8NB6NcVoCZJXzuromUBZQVcVotCe45EB6HfNEYGrJZEmsqMVCXBySwYTPXhRwCwCNdYCzk8H3oj",
  "key47": "iz6fFP5rDrCCtR4dsnpdDVLoVm3zX1Y1P7gpCuKMVF73ADkndu4veNSreCc9a1GR7xaUHaX8Vnb2HaQNHTpPkrM",
  "key48": "3hkJN7L8Q1n5wh2ZCWeTQ1wjbT3dc2cBepM6Hh4ieLds5SKpTkXfQzKgJa5Ceyo9o6ma7sk1Yq5qXC98Uwe1Z412"
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
