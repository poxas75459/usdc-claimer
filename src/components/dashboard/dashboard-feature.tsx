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
    "3amEg7AiYGdceMvGugGdRH22DpUsGkYi4FyKavAe6mFweHYxhp4VwqhsEc8HkkVSDpJPaPdg9ZUi7mYmfmBnUeYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "trCtD8UXvLYLbvajP1bGvsB2R7jY167vcDz6TNYch2fyxBwxGG88qqwJtY5vcu6vHioYEbA1QDXKPc3wLb7VWGw",
  "key1": "2F41VATqmFb4itso4kzkFcUnDGmmGHqk1aqhtZ8tNuxxYkfrLEGPUbftSSC4oVsFPiaNgPNY2zPqRLpjMR6e4pny",
  "key2": "5mwZ19ZjR2nxo4SCmnACWpT4MRiWve5nQj3qUpiuxqTobRZV8rPCi6TXKi2QSGh819eM6Q2S5wuVHdYZzZTWPTcU",
  "key3": "52jP3kcbnoV3NGY1tNZnu6RT856ksCCU5TC5rC6xarTZyGXHRejx4hotQTANiCSSHjyrMn8gx23oLpbajFq8QC2X",
  "key4": "2PtzDQDb7dexKffG5C7Dz77tERA9DspLqXrJBAY8q6KBHNmfAFpmLRG2jktjZRmPgP7EPzreZNUfsGXriHjkPnda",
  "key5": "44oNrKs1iA8qFzz5AqzX3AEh7mRZGCTbBkTmRuUQh4hr2HvggAAMwfbjYgN85UH3KowMFSx4VLPSp9zz8ucAByYT",
  "key6": "4m2CQzkpVM5thZfc9Z4FYFVeEL5FEaqzwxvdVHLUxyDNRVPweBNQmqZc2ndKtPKyrda8w1Kyx46EFvhsVAbyPhBY",
  "key7": "3q5QTGJhy8zxDbLhWjCDKwGhZMpJUGBH3RKDjwrJHwEWEffxhxjDXinMPBpP8MBHPfVnKsXSr5LMynP7sUGGJvBr",
  "key8": "42fmhYyuFNrzyJHuAti16LRHSV6mM6guiTHs83RHhAeMaarBtNwm1hUq98pNdPftz3mLprP4z1D2tM6FoVEWGoG9",
  "key9": "irWhLU5AWPXwhB1F1xrDQKipHpkNaDPpLE8bnepuQuBGv9BDFvv7hHCDgaJramMyrUCKdP9AyA3bf5ZuxtTbe7k",
  "key10": "2DRAKycueVgFR5s6AT7oLnpigYxx7cEzM52KvNJsvoS9PfqLVzXW2sKiLLgkrwYcw4z8M3WajaJ4nwhXVwwhRWxa",
  "key11": "35B9wSQBc3raukqd7NXjgVY2eZxFfNmzXbuYExHorgwwVAq6YmBCoSWfR6m29SVFQZCKZ9obXu4odWUYo6UyBz8S",
  "key12": "4MF5DRKoa6QuF559DQvWzHvn7sPsZQaQ8vrGfWDbAh9DMtngSVfHgkHvZ3MqkyJ7seHBj8Qv64UPxk9HmCMk4T5e",
  "key13": "Hdh9Nqyegz1XFuyxzrtVac2zsEmN3Ff6gHfbcQWzHyvWyoGNezWWP1GJQ39t1kUP3eSDMkem9NxWfPha5Mc7Vbw",
  "key14": "2DB1d8YCarZVi3nPcZ7wYvw85DVknqnFnXj7ZgzfsGdBGo89sY8Mgn6Rt9X3DZ6JwLZw73Mdf2o1XsBFDw1onh4c",
  "key15": "47wviJt5SFJvJ7NqeVeHBnkndTzx5v3ZXERYEResjRKresLEd6NEtWXV3KmGs8axAxEeQccdoxueLgxYUHL6QcEZ",
  "key16": "321PD87KW6dUcWJSogFRZ3SFqtig4MaGeDDyVhkUXWEtG5BJFS33gmUpPNffWGYSQZK9PBMyWrz5NBYFUWPXLVXN",
  "key17": "3Uirq5zzrEWgosvAFns5bu2qGsbHWi1U1vSDo1WdGJPDJyVv7LGDxLyZTw3iT9LowNHuteNBmoCLa4Dva3gtAuQ8",
  "key18": "xNkxqFweYR9xzbCbfzevt2fta4tKt1e35cwfeW74aA1ML8Ke9pYK8jJotQiLfDdKvZHLmLZNTvMKvBXzPNaLhA3",
  "key19": "4sXESZ8998Ak1Nd1UYm9VqH925mFZaBdQuHvLjkvocmLCbEbos5YjhebKShw1uQFdSeujDPkRQo24YcWei3KxQn6",
  "key20": "4jArznYHhsjasfA9ybuqetx1LVZfT3ju7ENRiVDxbY5JEYabR8L1CnRBALZCVENp5pDFEmru7HXC819XjRruAryw",
  "key21": "3Fs9pG97qBX3LX3Nupf5WpJCSnc13coMaPFaz1ZKncQ8Vp67tJ7nkbNaLtAjxwhC6mKr95g8QXbGDVatrmhDbHqu",
  "key22": "4fUoDvrqQTtHfCa6VTDe9nAX6HHQaLofT2c6WJdELHavJkudzXpMdcRrDa8tTQs1fdZcWjUpHXHNGuYHjG6UnJHB",
  "key23": "5xA2J5TwqmV1KjnQSfXU3QRf4jZpQErX3X7y5RqSgpZAnnKhFS9PHJm1bAHLZefaRYiw6XSCAHAm4fgJTPUD27X8",
  "key24": "4y69Lrb9Ro87WC93wEtjPVHM4srM76hkCe1saeFo1pTwx9KGjny1Lfpu5vhcm9t1Gcgjovu2h3FPSz6QYTkLDm6m",
  "key25": "5MRRddtM1t2LqFhkfdUufuRaKdSoPC72poEU9AxckSfU2viX69gU99zmqWkBuwESFeVWtsc5DHkiw4YJykkJFwL7",
  "key26": "gDhFY1muyYMwTqoCVKUdsa9ZeLX3uwrPRmkMzJtKbrRParjghR8tKg56bK3HcZMHTpqScJTfif2M4qEQhDPv73x",
  "key27": "4PQkfWZBFh26ucAcYH9VSDYFaai4jihYUjfVP7GFf2UEz2YeryuqJCgritkGFV8wvCQeJb8DXJmRaF1q1AiEebGx",
  "key28": "zfedX5oH9ZXzGHQf4SBVwrPvfaa8WPKBJ6oBChH174z6rD5VYoteuPcryqrZi5xeH86xFpcFyMTSMEi4DogaW2q",
  "key29": "2xM41FKjeMFDxaYsH6sk7rbkbfw2UGGzqMVbjpPvWqnQVhHBjqUHurmrrE9iVCbSh35VcUQKf5yDWTZCkcE3HGfg",
  "key30": "22eaahE1yK3ChGcehyGgGS4cZg7yJ717MiTKZ9aY9opJez42AphiKTR2eENMRkmTvLUaHc1U86tXnxzRAQH7qCQ6",
  "key31": "nEqGy1L6uZMULTPgm8cwNRG3KtGyQZp5R6QUncX8Si7AtEG6FCn3Te1UatFuitSrozFnGw5WtpKKqNvz9rHiKTg",
  "key32": "2ESthFcDgADZobQ2PQ38cgKPbnbMoj3pSdwnKmcjzaYdnGsHoVkpFw1iTFwieiQZD3butxSGq67eQw8o5CuMxxtC"
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
