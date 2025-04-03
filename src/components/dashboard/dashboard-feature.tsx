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
    "KgUraaFo4SXjKqsAhwgAPsfboiTWweU9XKbE2jzHYfb7nZBaHmz97EVaS37kjLqCEact2ktD9BgnoDDcWjptLHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64G9RthLs2QswPxwXo4Sg4N6otZYZqc9Cmnb8mgz1ZWFBfPefBCg7Dw2vN8rrXkm1QBoKoj6q43iKQcUqazGWW5Q",
  "key1": "4LehyrURnWoWZHSxTiP1uQx77wmRfMH9xgvWvYwm8ViYqrEmBGoFp2o2Aybq1ZKRusFM9TQzG9wwUbVcAzr2FQSi",
  "key2": "2Uz5apdxuWiHeHQ1sJwomXyhCAkiWewS2uyxLyUx15NYbrzHQVKUQRGE2H13YZ4bCK232KnHgmq4FFr7YbREBnuh",
  "key3": "5bzton8DbjQc7Un3J8N62Qkojvms1BvEoDHJwNwnwMZsnrJiQtebedQFTXVFVS75DattLH9wN45LNQwitYstN3fr",
  "key4": "5uvaayFB5nQT6acaYi1zNBww3oNRu9HVrmAy4UP6v68QAkEx2P1KFhrvgkar68qoBxstRXvo3owaW7kWmNrzy6eB",
  "key5": "5YUKrzWdXpG2q9qiTMKipRZydzhyFC7NPFdLrS5eEYKpQjVjyfjf7W1gfETjcCN5ga9T83rXVCnLqbfQxkkpn492",
  "key6": "4NtdUNeTjYsykpVSmzgcZQ2dXtCBgpYa7MNu7UuYaoZR6BgLzJhyDjiP9uwPCVhzuMVA5rRiA5k85nRCeCaezscx",
  "key7": "2xCS6gLKhHBrCos3ZHEAzbRUramWU1DMZh8WG4aPhD2mxNRi24sQ28SJw9MDfdwAVYCDKWeAGFUEoedQMu631UcU",
  "key8": "4Sw2VBw6WLmYJq7AXcRZVxXGbAyYMiXotZnbuzNj4ZoZp9sEUenusuXZcBn3bq7d23zX2CrnycwPgmcXULYWg6mu",
  "key9": "3mTLZxniXASwJrrK7fGqKhHSj5ucYY9W9Ew7uvx9ieWEo27JyMAShmo96z4HU8iPBZyCMZsMLxTcTcsjLFQRRHK3",
  "key10": "3GTqVDvzU6c1psUUXw3D3hbuPZnZgcfutJ6kT4cBuqEgDbuAM7TkeA3DHPb4168HgGAvTNYgJEEnBgQWxwxq4X6X",
  "key11": "5eyXK6ZhctKcxVJC9JBrB4Z7PSuD2ARGxRUt4tqLx2DyXmXU18aUTMkwzw4PsaNZi9QYr2oTycofbkBsFMNRzj7b",
  "key12": "2huVrKZD4A25koFnKPvp9RR5HrVtAtghKWWTKokQDHWP8mDZctsyE5DfgH1pS18wLGNMXfsuSG9ysvw4TuusHc9W",
  "key13": "2ESPeuVQhJNBWXzcZ8FGAMF5RoFgRGABA2J3knYzFrRu1Mok9hY5tnewZwLbhR7qNHoUkz8VnhatUmLZtQUyKRXk",
  "key14": "2h4HYWFY3Lcr3RpX2iLRA8ZCw6b1WdRH1zWMgoC5QKm254sMyaF1f3CZedkKRbLQB8Xf6dfjkuzgszA8eT6DAv6c",
  "key15": "4wUBVhp4tqTv4fZpbrHT6w2vwBk7bEuzZpZVoHaKWFKDNPrVMe7ANdS4uUCXM2Yp8ctyqCYmxX2iKiwD7ehYjRDQ",
  "key16": "5WafjAkYm5PfMEX69Z1WYWuqhhgtGG7URJUwDF8WrGqCwDK3y6mQBprf1kUUtSohtgQg6a4ihxwDZVnBokFkwqwn",
  "key17": "5ykp7mYe5AWVSBbibEXRyLi6E7mZ7DEasHCYojXjoftWXEyhcUF9r9m6XcqbWYDrPHEpcCMT73M4YppCSbZSUNPV",
  "key18": "2y7j7vdr2J2286HEN26YU9E3Kc1YfmsYg9TZVgFZ7deUhAK3RRvMQ8HNUjGZDUJNZnAA9vE9eXzJPdSQiTWpAPf1",
  "key19": "jkKxDaZj98SVTzFYYvNjLnW3YaiQFN5rDDgsLMuEtmwQFWiHzB7TpA5pnkYnpVmwEMmbcBXp1wGqQkFHT4QYLqJ",
  "key20": "5r6jPAuWMQHpRXVVXsRwDKUJmyN5SiNDshgsxvpxaLXvnLvRJdL5H9Nrww8P3MNF61WHn5wzFxkij3apmqDw4EcA",
  "key21": "4ftKQ1eUdKNhHMrwEi9sior2TJPGtMRjvSQ3wt1SWiEW7ovEnTreMGF6qeESuYUsFwunPFwqZMwnogx9JXpPbLYT",
  "key22": "g4no8vhyon9U3spumPJwEbCsYWPTcX2YLJ2wgeZ3ST8D78bEKXdvVxjCCDo28Q1YHA9vgprT6ACQ95aWtp9cgWM",
  "key23": "26Wa8wYPtsoVof8bkyoUuyZJunGu9Ksk5gswR9opoP3nUTsWRSUcLpVb3AvUz9vYdg1BxuGXJdr2PvTQjwxwc5xf",
  "key24": "1d7jnUyym7dx6g2rZq3T4LGkFwteXmxG8DatQWE7cB4A4NeajeFDwY6RqjAdi6HRWQjHdfraVnQjTevEQ2ymyTn",
  "key25": "FiPfaZheyZH7ToGoVd8b9Fa4p4jL73Ed4XpqbttsX8nmH3wUu7k9pymt5xWhiifnbUrQTeRrW6yCirr8EqAqEwq",
  "key26": "5jvoDA1BCVyccF8h1xSedKBWRwsAXv3RutBdbYjNSiFkcEDQnrpQYiG6Dcp2CLvrEt3RsfMeFixX2bDnjpCqoJeA",
  "key27": "5tn1GDYPDQbRqa8R7H49c3oNmpL9vXWzoV61e2aLYYBQS3mJRbyTbzVeudms6gLmohAjnfQ9hsmouVp9V95CbEDS",
  "key28": "3SXS338ndVY6vQf5HrUnh9RMSZoboLYV8RzeLoWm2Z4wcDYzUjJw8NbdPvKcwkiXzDW9CbHJQ2XXX3JkdNNh8oEq",
  "key29": "4jD38ov7HKJ65CccYM9bJ7UHV4WKXC9yZ5fqXhGgPGZUrPtmSJ5gAfeZfE4h35pDkgd2Fktw8GosuVBcE97gxxdj",
  "key30": "3CqWrzN9Cy6TSemWPGnALKd8JgDrsV8JXP4yFy7vD8hmRFgfvHzg14jd4okq17JXKKUaGVJ7tfYUVNdnoAWJSqj3",
  "key31": "32D46r9WPJ3N48db1xjhttDmbtzsNCTJGjEU5Vh2ebYX25r6CRBJrFg8YFBWvFmFx7vxSX4ypfN7rMX6hoXPeuXQ",
  "key32": "4kWNtS2PXgGtD7McgU8hhGpLSUSARSuRoqkqahRkTXv92yhQwysRWY6BNhPZitEpvpy3GLzAV5G9A4w7J9w2tyYM"
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
