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
    "2264AhPfkJtEUHdm3um7cd9eN8K4UfFNRTn98pswW2MEWKLJQJYYRRFb6mEcvqLJEvXx1uhBYafRcw7PV8jNTPX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67NdMsKyQr5WAqNWQ6VztxJBEAQZxdXwktJCwkLKG8ff35zXcNeD5NbDgreGng6bzHpMeQ8zZiGmQYZVqDhUoEHo",
  "key1": "617uexwdTDuVD8J1bywmoEdMc2gzeG4ucVgDJJUSdeVkeujqSYwMRQchnkbLtKhij9BXQ22BnKgdjAboZ9TnZMZk",
  "key2": "2dC9bha3rgudD1MBq3fYE2hgnGHmWmts57eFV9wEzCAS61h3egegiSmKgdE9uTYkz6jAvvmYR3oRJ1A1YQBkPhrE",
  "key3": "JjK81RYZm8wk2KHczFyV5jmHhaVKmagNqAd8DaMJatwiBZqyhc9T88xYsJBWe5BELUZAWaZabYyCAoX9C4JWSjC",
  "key4": "3AowPfUwXJHNV8D9PdUUJdXxY8wGiMDLGcnKCqv2kgyrU3zPx1nkmWZWzvLaiawLH5sWitTKDaiaMpK3zsYd2zfP",
  "key5": "UgooL9KnkdYF3d7sAhQBrCSmrrTrSB6TcK4bpTAHvqBqhEbnMx5aPFcz4NMfRL4f72cvLF9QwbTZj5mgHohtqzL",
  "key6": "3UgPBTkWQ6uNY2nymoRHxQYDhy2XvyssofjLzWVZQh8tL5GQ427vwWPZi8cQ6RFe638nKAJgffbEvqzhxDm6wV34",
  "key7": "5MxkE52YnmB9yWnpLYbLkwSYoJyjjUcaKW5HC4DqR3G5MSakZo4hmGBbbUqqBCZWQRTdG6dZALLbeXoyKS16ihzd",
  "key8": "4iGYnTU7VB2Q5fMwrasjh8GMMjphReXTGjrHMufTwdhkX4CAsuyuyeEtRzXvvYNR2B9MNP6NbqRQKtFPNqGQA1Rn",
  "key9": "5kJjNyJK58AD2vwsfx3dybYJyUjoqGB87CwJDvzswz6u5PbgE1vkjSHxCKD4aAHhQJMEZgZKvZyzrbZJFyMRiY7y",
  "key10": "46ZnfnDWoTR1CnvAhnqN3cGdiY62Q4hFFTTfPaVYk6QjsY5kzM21XFjALPczYHwqttFQXKDGpTpMJrBtyPMMArMg",
  "key11": "47DrRxwEXHFZcaQBUKp44v6isTpuKw1mrvU3izcffxbomgaT4hQZYpXFbJU5zPA2FRy1uKJkehfHRBz51mM2UAEu",
  "key12": "3n7uf9Y9jJ6dFBmGRQ4PiMhoKcQz4V1uy1pTemT2BCoxiEWyevMqnP9hCvyetdRboPuTZgzi47f6kgiVFfPyEAXu",
  "key13": "2WVYRzLZHv7Qd82rzeg4A1AR43vGx3RtRrEHGnNLJyW1fSCARNcAq4ENE525tVkuU6NY3genjMjmbkyYvfQ58Dpr",
  "key14": "5maWQzfApQxwWV8eChRtZpfjrHjpo1akM13QiLdUpmZYAUCnqYgnAgn1RqYMXckttHUuijQJKmHsCbAbed9wVqkT",
  "key15": "5KaenzDFx2q7wq96jmRDQ3Jh7QxTPJDxx9j2vKDNiLwiPBjFY7z3iAB241DM2FgHkDXbaxXqd1sJCpqHLf9U7c37",
  "key16": "2g7nBA7nw3r6MTXZVy2CrbNYERUzjn7xUhRm1fVJCKVNge3fYvhkkqfekEe3Wxo2mcED7DJBaxo7VC3UgZrYGbNk",
  "key17": "38HtGuTTzAdxgqdugEyiNtt93ZtuC8Bebf8VWHbrWqsCWNnws2eYd9U7EShAfaxwL5gnKW5EcqjKPeoVyXuR6Dh2",
  "key18": "erPEuqBBRVmVtrr5WQnixeqf77sG8JsVk8VGFSK8Lvx3X7w5bp9CQsaJRpf1hthLuGV4AqZUq1Sea5e1PBh9bHc",
  "key19": "4sR38ngfyKWCYi3vZQ5m5gRvxVZAn6upjfMFKo7n1XmVdn6RSK6A3gDQU2giRukw6LX9u9szBC9d42QBKZV3U34i",
  "key20": "2jtSA44YgSsVbn71tFNGevDgf4gy5dJCDeGtGqFaktWQLRYDQ5p9GYpk8X3aHCsc6kTJhzHoGir2bc89UHWh94JP",
  "key21": "C3vtB66bhtj8ivQDW9wMCuorAekcfv6W2Z3j3iijuJfHkvihZJSviUgbKcCJV5F3wkuKET3QcBZHAxSK9LMxsJ6",
  "key22": "5fG3ETexMJTTJ7aKPqmA4waPb9KrZrXeYB32TDimgG3199gGaHEVqzo1ELkFu4oPWCfux7uDG8sGRR9Qv7QbPfNb",
  "key23": "YHBhpqM4eTbDTjdidR4jkTarBMtKRGK8P3gZyKgTFyomsBBoA8tZwJoKL2hchxeCWpeyM7QDFF9vwpBUZUhRX54",
  "key24": "5XwM1pA37JekaHzDqAzDeW1RbucF7sAjPMUq5xrPXCoqR7NXoDfaB48JuTBCoTEcuMNJy3FkxfSGFDBD9Uo4ARex",
  "key25": "2mMUTfuVhW2PZDPX6QJkL7JDXTVPniXDyuRG8mG31UYHdk4yRa1U8He4qMviS8ZdSt3E2K73zG3Y52jZ2uzUWUgD",
  "key26": "2Yt2RRqXw7tChS7cryNrYsGJBjuAB81RJKat1oPikfHq2XBfs9EwsEMDceTiUsVYWqkr7DaXQhymaVZNHjZGDX6k",
  "key27": "mpsNNr5AzURTF9okfydYCT6wAF9M9DCjMgbFBJc9ff4r9m1BJrQxEdWAzabHjfNnjYvMwmoGHHFoHD5qWkupCQZ",
  "key28": "27NzKNmWjLAoSBhvHMQX6oefn8b4b8d3s6Z3jkz6Tz4CjoNXY641NWrrBJ7nViqi6XMNGV9YmWX9xTahEnUPVu3m",
  "key29": "2LzndHVRsS1hoUHNNXisXfXLhrVwd3HJrNC1yVqHG7se38Rs5q5gB2cj1RNRHzxHmxwK4tnoQMdaeaTGdEdpyBH"
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
