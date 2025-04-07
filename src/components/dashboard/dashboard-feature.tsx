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
    "4irTzzCDgUt8oFAQk3rnYEEzrNvB7M8SFx8C35Uagbj2b321SEJZ5Yq1jn91vZrSnupn7S6YTN89jMFcejkzPzcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q4YVF2zHUDPKeKhgq2JqimrEPRrszdJ29wez9bEP1J1wHJZAgqN43Ykq1JjCCxxcArRWn2JVwjFxd1AQxjjsroe",
  "key1": "2fErEsAAdK4z6XTwuoUWwkGDq3qLZdhcc7thBDyxQNBqHte1vAsWsNnjMB53dddtoe8JHH8wMgbvNFF6nkR8o151",
  "key2": "52Pkq9Pqi4UbKMSHMzkCrLLqqd9Lf3CqEZDv89cPxSyi4hoF3EPyRGxr6aXRdtpZiArrrQgq6RT36eFwYwmamq5t",
  "key3": "2rcy2jGzB66MwW3riGbrggXCzrxEw5GfU5TaCeyoC23wNjTXatgDSRia56vTwsdDQdteKTaLnHE1pRPEdoDJ9UJD",
  "key4": "AtwsrtpKZ1kgqNRvW3q8UB7Zm8dq2y8hLdVXbby4Ntig322EbQw2vVF3woV9DMKbGY7TkiDrxR637Vf2pabJNtq",
  "key5": "5LNCTRj9qPT5aEQhzX1oFqpXxhaV4PSmYc9YFL7z3kMZ9DwMifieFWi2Sh3VhmwBWSH2WqKfmFxHnjXLwDY5ocA4",
  "key6": "64vHRfLKZxMLryBzjAb1uXCkceebqWnvof5e5XfVsDTKkzNtmnXnZZNqetciEGhswYH6SSjESfKHYG4LJNxDrmS",
  "key7": "2PxxsyRR1hg59uvqsip5Z2QsB4hhwAyWS5FkgTGFKA89yetcrtCQjwGbwhb6Ni5ARhp771GdjFmCKJmU4qcbwSYM",
  "key8": "2acp7iohHsdVqB2Rg5kqWazd5anpGFahjGjxagk6wQfQwTwEJB6feYhFUFi92jLBYNtvCauyDLyscTPwSdnJpaWw",
  "key9": "3tu5D4tPZJ5oycid3crQq47gco5A2u8xHjr71Ps91BgvudTQMykBffhhnmm7tUFteVGZzNYBtGVsqpvoWyF86kuq",
  "key10": "BqmPYjtGw9CPF8zwQyGbm19NFbLmXmT7pjUp2L9dJDm7sV9z84MneDU98hmCWQfELpyZFzL5GSHXzZNpZEiHR53",
  "key11": "21xNRpPUxyW8aRdPuJwz7cA1jbpYjfGapFgpmD6Gya2uS1zmTSq3uRpZ2tX9infQGVz32RrHZw5TftRj4gJMEYaX",
  "key12": "2nristboSDammnDX4vcTTcR4oQPpB6gLVd1b9tEsmM6jQ8NAcrYPXiU3oKhk9UDL5JyLKM9SJ3mbqZwxiWrTAyM",
  "key13": "A31QbRddkQjiwuawEuKay9xVTNxcsb75QkCy6R8MKUB176MHvuJogC3sGxe3UGDH4YaYLrhDt3KWiyYNRQodtZt",
  "key14": "43Y6vGokQoTuopZye6XJbmWKRt97apfYb6N3dDb5szQqrHZ28TpEcDPwiuFhfzjd8xQ1ASV8UB7yQgcfAhC7dLGE",
  "key15": "4q2baohossRP7tREGaoQKtRpuhoxHTmXfDKYMdfHkYecympc3gkM9tMnk4Z2ZTFGgRJ2PPEGjKdtYC39EyMAsusa",
  "key16": "4uei8wEc4KeqhZ9bjShwK7rKhmxAY3WPk5dWFDD1xrBnNwrTzPjKp43pq5dqkCW71nhJDwmaBPSGnPmn31i7Yd8L",
  "key17": "5vSyH7E9iy4794ePCMKwiZVMPbCf8dNorNjLdgtFfHkHt3LvLdjDFewmFD6FyehAEKDgRGsDBSZUXtFaAhfZKPCN",
  "key18": "ZdbECAbCsNAKeeaexjVFjuBJHqXAsYmnE9iDKqechS3ytARzkiMASEh2oMHxjCGE96ScCt872gveqmraGyq1gKU",
  "key19": "5rHpKbGaFZ5DMaQptYkWGs897DqnWg24U54YCEz6e4p1sy1XiyV4oLKEo1AjSZUgahcyFeqhkwHFJvgrhfYmbsag",
  "key20": "89hr2ryWZeK86UEGhtoAsNqvbezd8CDhZmngijoZTx1pus1HNBjuPavPoTuj9eudhVYBosaomXJGYQD47zz7hQz",
  "key21": "5LwpCDaMgHZThMWtFoSd8bTXscvP1df1vhs6Vs9sHnU2WDwpUmqbjptqa7nQ5n1dKrRAhmY8rcEKzP2FMriR1T5q",
  "key22": "3t5NEvCGa9P1VP9zncVzihcR224NV5nuBFryUNXChjcQgd6QfF2NGA25qLjMQiR9ffM8Vm8fWhfcUfhT5XRjvJ5B",
  "key23": "5xLoYFabBaAAhvb2oUeMYm9kGt6GTvpQmc1RRYQCuCDnMumB5xuy23PPzHNYLLCE8o3mCfPmzHamYPKJUeXa9yeX",
  "key24": "5F32KVRvNK24xQVf8o6kBbQSKmsje1zFXVUXFdEsfjKTa4JXroqtYfEtFFkZPHfMhpYBWtvA4bcXdaHXgCTm65UF",
  "key25": "5HJJLFjJn6E6uLhMgUyNcrtBLg2H4d7KGz4MhqVuWY6pUrcQVJB7aaZHAWR9NjJ7khG5N2cjcztcRgDSFBu8o52r",
  "key26": "tQA2JWP3dZ5G6BDiHJDn2ud2jdUMkpeBEEwz72WxTuSYcv1r7LNfQGSEZPm9L4KjpycJCbucZyWL6cUE9Pc8igw",
  "key27": "3P1yATNHHdxTwfUEL3Tff8TnNADSxoYToem8qXBdPwyekDmGUQ1zTh6tz1sdUwu7XqMbysoVfuQM8X7kVngeTtqo",
  "key28": "2bjtfCQi2NaY5fRoTz2CbPRRKPcghMAXzivuuy4f8HSgaE4XmJfpAAYs9H5g1oV9Xe2D3tFpg2wWCm87E6gHJ5VE",
  "key29": "4vykJmSLKa4vcvMY6VGfY6mo4Nh1NES21iBx7cbQtTivZHeDdsCPJBLrrFZfMSEijW6HcHidyWAf15BMbs3mrSRJ",
  "key30": "3xk6DhiH5MbBp6mWp2Gxir96RYTTVkYeWoi2aknvwTRcXUmKBatDr1YNciZELQwuuxRnQuDbrt5vA7CoBN9EXLZk",
  "key31": "3VuhQLRWGAFkAQYuVxEz9FzKKQQ566xiY7dgwzeLwfrSH6XeM1VqmqjHawEcFHqn3dGb2gvpWT8ekmYodrt8Gu5U",
  "key32": "56KHJqATcCP8bZohoSyyar65Z1R83fiFEjtZCZi8RDzKagYFxViqd4TFoyCi2pe7nmMjS8PgkFDshSNTJL6jNE4q",
  "key33": "GFtEK9cm7kB7Xzg3ug8ma7aeirrWNrL9wnrvszAJvMBtxMta7b4JkrNnftdwT9k4GvLcqfR8GguiHDAWHjeXR7i",
  "key34": "4i21ggWGGbYPunucyRqSy76zMMK6zUcDTLsLwc9ruqfuLfmJjsS3KetT2YYHaYx4zSTqpQmK3LTjjQgu42H8rf2",
  "key35": "YmHX4EJQJ8dvTMqRhZYP5yQWqjuJ1gQgj4BgiWThKpKwFcBhgErv11mVjseNkt2icno6Ah33AXV3NVVaghMfX8h",
  "key36": "Y7R12pgMdLoUk84QFBv3cztsmQL7uFJQaPywPTHkSvjXALQbhc7768T54kfZGvmxSiG65RkRd8Zq7t2LJnCtNTL",
  "key37": "4wDsEqHMm8D6GyPKVTxp3sggepBiQhfToDNPmgBipy674X5JJTzevPqfugXN29rXA5qHSjyfmUgUxBcF34xYcZ1e"
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
