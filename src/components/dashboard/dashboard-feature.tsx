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
    "S6NLtsyFwrCz4GojdpKyUSo8Ha24E2r9YPELUUcbX2L8X1B5Xsny6udJAQVJVKCmWBbxdvRoyGwBUB3wdjaeX7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPqvkwJFYUyfRXFe7nemtPWxRzeeWGGdtYMYxVN9jy3cRjnEs3ATXFnTxXtRjbtBb9Djgteh786HqnEaLruzMGN",
  "key1": "3Yksgdxp4W1QTKPzYSzkX1Ki6FrCn3VdVv6rqNKXn89VUANVTp4A8ruGA3ozGBFWFKm2oHCMULsbBreBtoYihtnM",
  "key2": "3pKYHF9bg9yfjj5snHERYoHm51GceKetLJp9vBJ84jpy8QnoYNG93nsazupE6tyxB1pnHUNApg7DAk4ubiqyBYPZ",
  "key3": "5fsfVQPhJMhDD6K58nCTHViAZHVaBo35TTsP8Pba2NucxX3zkE5sLCcuu7YdrrTnqJDsmBkwkyUQiiak6TmfzDkq",
  "key4": "sVVdvhbs8zc6XhgzCkkuqZtAe9mf1QyWwTvoEj4EtoYXmfKvuDkKWWwTne4wxyD1ggyidWi4F9UDVu24kHKXbym",
  "key5": "2BQxQcDfxz5FRVTXKHvZvzVrK9JVevp5r5po7TzmcZDAQdBp1Xz3ebrt8szw8XKjTAs8ss9Ksyq8Xg56jXxo82DU",
  "key6": "4gJ4Uvmhjm1dvn4JQ6N6VZg5f2wwx3A1kZN9vtefJRMXLoMEXEecF7yhYUe4QaKXUFo8TgWUe3xqVhuZmehHSLFB",
  "key7": "26fpMUwtkNLfwJLDFVRoHvSDvbP9m89uHsVKtyJRdVuTNZp5aGkvaVvfKJaSHXEHaYgS8ZSmZYB87FqvvmTn29zd",
  "key8": "48oDsxwJXHM2aQmAE9Ux7qAi5ypW95BcHA34aCHHZLYH5xBemUg9mJweTWACBLoVXD9TZ9VZgC7KdMTDmZaBXVBm",
  "key9": "66xhtJvEL7USSRNQR8qXkStJUXf5b9XUMVm5FccCWEBV6foanGg3Jr4ZGwjJWpwfbvJdT22e3gDVtmQbu81hjgLp",
  "key10": "63ZoqrS2LtxVMJyrLw7XCRoWYW6kSWHfC89d6oAGzkgyHM6DFBY6e3FV88MEMEE3GUoNDZxFCd9bxFsHZZLwqRq4",
  "key11": "2paTMWQtGV164SYKMBnL3uy3GzYMZjFWinQiiKcUCMLk6bRWSwfiStVkEfAASuE37ptyxcmYFbzFN96WsBFjDueD",
  "key12": "3w6eBd19reSDWRrCJBctnMASQjgVhTeH2ZyixMM4gcoH2zJtTkngvrtuxRaV2pXX1fFKompRtaok8wUFVF2fpEV9",
  "key13": "3GFUp2xckKLrW86hAYc8YLdPhtHcAesFTQAjaNVMLzHquc42k23qx6wqLTWav3LKc5MzARHMKfttKgV1afuMuzDP",
  "key14": "4K87u36fX4i6rZJgVdJnq5Y431gFWS1wYnNzyLMe5YQs6XBCxYeMBBKfZDi1A98gX8RUfhXtu3izs8rVanp8pvGH",
  "key15": "38U9GqcZfNJTicKcyddcAyr3JPyyCSmChx3JvuHeGvXaRkcMtSEKzifryw7fnCWqocNW8qMfSnDLLb15aFrDqxqs",
  "key16": "iDHNCwVrDjX6uNr9jvgfHaGLSHvHh2MZxih1SNqUNNB8ttRmpYbuP169f7T7VZmXJzYSu5Q7vwgsicoZTZrXcY8",
  "key17": "SrhukZXMf7hPYBBe85ovimExcpp4B6Lb2WvGNHCX4jLmTmXcW3zVHVtsd4zczciWgVzPi1KQA9aR83G58bHP223",
  "key18": "5YjWjxvMEe1VwwNFfm9zVK4bhuW6m41VKYQEF1eRAYxoMcYhPWSJ8QcJVU6dMUknWNJsQV1DHaUktYz3oAzmhoGs",
  "key19": "3XYQCaQj7F67wTY8c4PU1k4QXjuVXKReUrp4Zym4h18z2jXQUg5ZbWxssfB2Dudwhy191dpdqSUBBe68pXwnZ4ya",
  "key20": "2QPRRhjwqt23NDP8UDjk56sULS6T42KmczMZeH9AJqWpeNLnMJ32gG8tvn7b74B1ezj2rxGC69PQnJ6RG66SHUQG",
  "key21": "c8nazyAMyJy9LJzAavDx4vWLeU73vvhG4B8WBa8X4MqieV5jhiFMfgZo7FuS8q6ug3vXiQh2ikg7J1qQ1R6ZVLg",
  "key22": "62MJFumSG3vQ5u8EGhETc6ptXfsp5CnzaGuja3Ap5NQfZD2EjW99UpcRgRq8KKZib4kKXmNtbT4P5V78VHoTz8HR",
  "key23": "47xySWxGf6bo76hpFwjSSNN6JtKPZR4GYkv8tfoeqdKDkJMzUBKrFcwDyBFS3UdTWaCZFZFW1gXiWo6cW7kP7apS",
  "key24": "2udrTLMRjr3UvXnd6nzLqRfLoHYg9GyDJ3DQw4wFeuNrvzg2jatMqnAX9rfLiHaynWydVLJhAa2dVXNeYfGbkmwW",
  "key25": "4pjuToUTCsEm1hV9ateTrtnpR5RRCcomm3V657ABwva2Ghe6Vs74SHtdb9rLm2UYQmCZFXfNyzCrALcZSkxkzoMc",
  "key26": "2ANp7MKmsR4PgTx2QT8G5BueMCtDMdRt9RqoC37bCQT9GNxDMtyUk5Dxc9cYjFCyZ6sSD1X7vjezZRLvXcfNtsop",
  "key27": "588nSese1pTV8Esh5rPGzwQYa5emHbVubhtiANKoVNN1v7gs5DH1ZjbTuA51TXPVydCH5jpEkVfQwWWhucCbry13",
  "key28": "5uPg5YjnzRvuqHd3opXzutpSVD5kWZq7AuXDg9h55NkjHdqsgqzynfJ3F5qDmgHjc2GQCvGHNUV59FhFGVPgwAUd",
  "key29": "3hv9K6K9VaALxyrW3uzr1A9pkodBuQipL25konRMnjdT3TSTxEwckgeoHU8UYXoBUmvgxsG4mNhEcjpvhfsAeZQc",
  "key30": "342UPBBpoy11nQy4KTYCTGuUUdLYWBkt2JGxd97K9eBFyuXhh2xf5KhJPQrK6JL5tK5MRW7JzuaMvYR6s2NhevYD",
  "key31": "4GuU3jbHyJGHg2ApAqjPbS8tuCdg2FZPAoQmJzm6orWBZ3JZqFjjgDGjnaiKWAtk7dSaoFTrkbEAdWZKwRksQpDJ",
  "key32": "5AHb9ZYimZyD9js8bLxDELk6gdT853vPbxy2a1tHgXwQMBi7sC2SPnEqk24hafKhwCFpidcZE6xBUsN17yS4P8zr"
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
