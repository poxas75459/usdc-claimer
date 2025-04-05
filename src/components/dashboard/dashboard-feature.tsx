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
    "J7dvMsscbdhS1mLUFrbbm2JVG13JZ5qouEskDrn6TRwmVX87E7Ynngk2i8unn4KqyMX7CsY6oFVzaKzpWTBV64M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k3FPEr6CE67nLGaxsevydDTSpWc3bNyApiQA8AYV6MHUbcfgeGtS4ABjY9MjgNsFRb1TfFuuHt3DWkRrx1HvLyL",
  "key1": "3uZdqB8RLfUMgGigt3qX4faRgV4aKh4pHnycRhUhQakbnNHg6icYTJq9ZcBJhS46K3ueEuPDD1HSh9ACvf8zfXJm",
  "key2": "2ViWxuD2htdaCnBVZ8LbeN377y8WPL3R9dx5XTjK6NKD9UkTUqJ7hq2qaxVqqSAjX9zC4b1fuQrYy3go4BdDGRpk",
  "key3": "57kh1jUDbpB2U2EGw85hoes4zrrBQVSfaQuSsRzifPuBuB9aYy1kpB1wUUtVpqyrStLE7MEoRDszRdWQiksBNLve",
  "key4": "67Ey3Tnf4453qFVjKjbHHFcdbhUpKPvBTfEJ9KCzqQtahyupbzcSNSmXuLFfUL7A3aaxjhbEc24xbwYy7v9PAybC",
  "key5": "4eS8vXErfVGhVmzBszz75Af5orQTZR3TZqhPdyXoNd6LAJPrQADd4n5fkATuJt2gSfCXJQdXVe3dxmprb9HzUn2w",
  "key6": "2smLgSeGco4APceJxYoiPs2M6YfMjDJgp7sD68W868vdqUZkvBvJDDhPe7ZhGuVsmgRwufAXy5GwCHmAS7bZAKrU",
  "key7": "5YxVDs4uoBy8sudjNPuM8CLwHWDVxF6kJ8qjZnZS1NUSdRgUr7iF3b6zC9AkCgjveyCLmgTiafMuH6ActmWqmAWa",
  "key8": "4aiocRrBrrdcNVigQgAyEtqPizXo2BDBrBYMBqQs9LxKSKiT2dWm6ULenMixpyyASBFBj6vYm8H7y9wkehpJTSxv",
  "key9": "4UxpUn4QfyLd8HT2SU5VNVWbc2xiP5bV2RcLPdPUE81jnA6yQsFCutgbK5djuXrthCTHZe29zR1s9QZfKuW2hrya",
  "key10": "3yQXnXhHpzvYxKfH9kTW9h8V9WVAXt4u695aCN3sYeFML91CexBygRGkMBd25dxRshn6YHf5qpPMzftg64dNokwH",
  "key11": "3gFC1zB9bMU9M2fYCM3v6mQdpL5drdtCcz7uqNfphZaK9tvEd9FMqGyjaWEP9Uzoj2AdD5VEPNDtLFn5551VEz85",
  "key12": "yzoDhZzALuLtzobQ4o7a94UfWFFwVo9zLCjYVtg2H8of9yNSop5Qkq6ryjF8MFtm2piKWXbxKN6okPqTrPa4H6f",
  "key13": "3HyUYjcxqu9QF1969NM38bjRwNQAvc3buMgjtTBNtmwsHmz1t2V19fYnrySPPxvo9UqusHhhux1eeii1AQSCX1e6",
  "key14": "9SChB7WN1G2njWjBYvZn8UvnJtbgxKhbViT4g9QSRDV6cZ2E8jV955eECbghAvczepDTnT3symupP1hpYoo8pzc",
  "key15": "G11xDTeTiJpBa1Ypd6F4oMbU9rhFCnMBSabzZwmoRPgxteKMjquf9LzoYQN41y9rmXkjA514VUfuos3dsGi3Vtg",
  "key16": "2DBpXaJeQPtMsKMKXT6bHibEBzn43oWFTrMGGLzDB3aNwjonL8vfyqLa5g24t3dvpirKJwYdRnTEfLfdLH2aQYN5",
  "key17": "22pvwf1mkA8XoWwY9bm5BqAoTSQ92PiQ1zRMexaG3mR3J7jPH3tVeKSpdgXwjogNMM2gh5J8CARUimbKoBngUSio",
  "key18": "3KsWJHrckNnEQiXMp8oo2g91xYYyv6KCoPM3UX8of6ZNb4GdBzvQFhWWALsPf4Bxmzh1L5qArwNgKipX87KmdWHy",
  "key19": "3vLmF9yT9GBHKPTcBpgpq8UM7TJ5sRTXbUFzYmJeuf79oNNDqThvQzUBgZZPnaswdfzgqw6uDjqYk5BYrA1hGnqg",
  "key20": "38dZXrMNi7ugkseJ5875MojT3bBj3CUehycqR1tJaMhZyuaGCojqr1GwLTUmoMunH5a1n2rHDbWXs12CCMZmFaPj",
  "key21": "4QXKa519L5jKVWzZKm3aLnSDp4uPEosLECjYoQiSMzXJmrYZ6MH9kh3Qx1yytqgSFjCpfXW4JzsdtTF2unV8NEcA",
  "key22": "3Wxp7nc5mhuStzKsDLQB3u7UHq49inBW4A4soLnRHVjk4dTFvLZE9iN2BtxdpkViuCZghQUMeXFRHiPWZQnAMy2j",
  "key23": "4vSYT9DUyR73q52rc2cX1dKe6TMp8ioqL3SikJCSgaR8QJUnWfCFcENg7t3uWQqtMrdpNehciYZJWdQxVmUznu7p",
  "key24": "3TV5R5gS8ZEmhk5rvw1DnXUbZaZuYPCRDcnEbErrtSkqL8Po3UqJWPyu1UxLDsxBiLtA1JoeUcGqq3ZYG129qtER",
  "key25": "3EwvVBwUT4ABFN46AJga9YgTakUm3uHXF3pPmcn5yyQ7NyGe4qLdQnWkPSSaspydRkvKGxWiWTaLDahMtku3zeYw",
  "key26": "5YZt4bche5xnhAjtUoJhez1a5yxghMpiVfzUsHC52UvCyRzgsVdUWyMjAM7FuYXpc5NEo58YiTAGaBvruzKKVwuc",
  "key27": "23SQfVVk8eJwFcvk1LzChE3nWLs9nuPWoYtji6fdDMuJaJ9f2HP3tQXDMdcngVye94RGf3AQbcta1udaD35vppTs",
  "key28": "3EPTHB9Kgek4E35t7A3qUXpssf1RJtXV8kuJrPnMLXf1pYg3jJgoCXPAfppcRxAthmnBTiJuhtLDKn59susLL4Gw",
  "key29": "2XSkxkf4v9kbCHRJLK6z96wUr4kzrocz3v6YpQmXJHuG5gZJPkQzP3jQTUHHRLPuGH9d3BAXcXCW8aMTCrr95XBW",
  "key30": "5dTJH3zAcfQWYUWB6PhnMZmku5amYj3PFq7EayYLrv3Si35yFxawW1fZBHn8AHExLWChaA4MfjEpXTBn2LULYceD",
  "key31": "5b1c4PVf4gULjfps6EBiBjD6AVpNMgYfhj72t9gY9tzy6y8tHBrgq8yz41viVn7XtKxj5YETo3h82JMtcMeKoXLn",
  "key32": "4k9Sghd2bqCE9dEPfJxQTuvzeNgXfws5o3HTsRQkAKRV8VCLXFj52VupBgj1DrxmM2mZ4kmUruPx38qCmATDCjyb",
  "key33": "54SM6isYMFgkXRjvXvbwWKs2v7kdENcBZrsxAP84T8Fg44z44d1VcwQzN7nMfakAqbMEy2TtUfZtHXTB96nNrKvF",
  "key34": "2JQwRK5ZmNQEeYU3ChHvnMEvn5g2Fgc3TrGD9P9bsaQLz32TJSCDochW9XA1wbuhMD1u12tShczpyuRsEckWgKG4",
  "key35": "47L3nunrA6NVmgwCLp6J8aHYdeVnLmP3s6nt8VrVph6MjASzoto69Kruk2B4h4zmeGHjZ87EBE16GoBqyHRcd8gB",
  "key36": "4Cfv8g7Xvjc5D5kdAzUJgPfMS9B7uxBfKCBW8v4JH93FA9iF2kEojMPNNeFdF1kAA6YahBtCKpJprLFEJeyGYsYc",
  "key37": "41hNX7tCykBZq5tve7EiXrhBSrbaZBegM6zmdTT1HNETt4QSAjK1Hh4ez7Vjy5dgEpXxvDLnVfbXCz92KiPqJ2Sw",
  "key38": "2hgjMeX2uvZSjwB7JEHXu7uXBonxbhftTWHFiwRpgwFqwSz3gkE6jrxpGHNR4K8vLyCbTthnqSHd5Zp5jGVkBLX1",
  "key39": "4MgDq6kzcCTWttZ8oeWrSHiWxMJjVBwUo4Tbev8n5kd4pG7645ZEPh2CfQjxpDZdNBoUvmPmBw1ifqvdeXMwPTZj",
  "key40": "3fkeP1Yig4bqVud86TGcXAj61uJLqLHN9KAaDiYNayhDrYoS6W9rLHfgcyRG6f8Bz4N7Pn8Ktsgjn5auXZoajwAZ",
  "key41": "5L1aWkU7EZjKvLyQ1djSmsz7dKVNY91PLd8eMviWEwr5wz7bbVXeseXnomTibY9ActqWNZq4SVWSEZMrbhRNbFEF"
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
