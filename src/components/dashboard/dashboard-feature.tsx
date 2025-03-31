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
    "43nV9gqWG91jtKMDDYFs9BhqcXoFtohMYnPesesSd8FGEC8xffPZ8ax5dPGtXBDtzAJLBe8XrptWAqyACWq7mNbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SHF17CRXSjzpBPMen3sztLRdCeNtfuhs2jvA5bZDG12QSrdg18EZ97ipcLjjWSijXYu2QZ7TfAZ6MJrNwa3urL3",
  "key1": "5re8BeeZsX6yoWFF1uGj78J8RoYy9WWAcFe2FjL6YEenRq5zN2aZwaAutRZyEGG5tLLGYU4hJcDrZTHT3w2osr5v",
  "key2": "5kLRToxzpXTmtz8ZvzVvNpsN4JHh9PgXjaf23SS5VrUXDu35Y4CxGqLrpFsKsPWJWMd1GWMTrZ9NDRN3QdYLUhY7",
  "key3": "ksapLWysBBWJZSLy9gKtrkjvWADLrwnLFGyQyTbaMhzwL2LhLCyeX2Ym4UzhjWcgwfGMcDo1Nhtr3dvktoHEeUa",
  "key4": "iphYCBsMxi1cG29bs3sxbLBh4rHTikvGFTSbygcUQJvYMXHqkqFzbtq4K2EvmDTNcNN5EJ2njCBiWd7Crxgfb2m",
  "key5": "2t6xyyHo8vfscP8uKCxQB9EN8JrJA1gGkq8vXMohhLuxi64FR4ma53VLmjv4pGtSxsgL548FgBm94TETWjrjtx1N",
  "key6": "24vzvf21KdbcNmH16k5ayBvAsbwRRf7E2JakvtRwajjBrqNhb4HcRQhzrJPx4Xj8MP1D6KLsKSUhhYP9vnCb4UFN",
  "key7": "4mfCSDPUE7XhdFzLUxBY5sejGCwuppiAWsVQtaWkb5tJXt7cNKqd5fY7ePgu8k1x9USqo4SrEortXCmnWVpAtfvU",
  "key8": "8HtgCp7rKFhF1cFcBvCAZALdD692uS7WV94AmHjGW8Vnu439KK39gXvRytsMEiGQjKPQpowZF6yEn6tzbBUHPVt",
  "key9": "4SSZS6ZbDh6HXoftVp7HzuTja7pRWTmcDXv9v6GsCwKfFBg64huBjW4tCGKhQ4QoNpt7hYEH4FkRShMFKsUdLeDq",
  "key10": "3VQoqLor3yMUSojRrNnYcT1KaPfEBGYK7aFJbgBCfmhmzgudFCZ8gw8qwcncPhJAq5rZMfWGm6UsCfRx8XMXUVLZ",
  "key11": "3DQZzqsEK3vR6anuJ4H2gUjkmqzCNxC5Mn9LbhcifirRGWG7EGSBEiWhA8jZeU1oL2nnugtbUzSTnK4REzjn9BTd",
  "key12": "57uTtxxohkMWiexwEbuhA4CMS3owmcFDZbtaNKKByWVgyvQFtBhGZQGHBN8AGFSedQ6uKPLLCLzquUPu4FbRKDUm",
  "key13": "2zZooBt1NtPLcZScn2BEb46JUbMcxbw7dF9AZ5b7iXero1Jw3spEY3mEWrduw6hCzY4j62Nft8yfX4ozjF9sRHK9",
  "key14": "2CNtPXVndQrcig9Sb5vcd8YshWVjF5BsE259iALST9SGWB7goKxr5o9Pyupe9kDWJNBozY6BirBnUnnhzhivUndu",
  "key15": "3xxmuZMM5zjB9D4Eb88ZPkoHvVAihYWU9MnsCJU9ywSoc21wxeW6jg8Y5ExBpne1T6nfzKAViWX1yXMXnzqoSjBi",
  "key16": "5yjFUNZ3SprNpMBdyRuTz3U2UzDMcEgjhbYrM5csemfvV7Xy8ZXH6wcYDg1ZG5Ev5EAotiFSQz3GjZE3CdW3Ta4H",
  "key17": "46gYMTKr2ig2z7u7jHpQcECXNZMx9ZuVTkq6nHwu2JQdwgeQ2Q6vsQo9CpZioc3FYGFG8NHLLAGhSFNS2TmP6JJQ",
  "key18": "5hFnxfwuHM3kAK3iqiSFTm7thQeEdCLRTNPCuqbFUWN15ZTtV4be3FiNgjEsqss9ZYjHRnwHje78ND3UxVA5f1xV",
  "key19": "37uzpxMa5MV4vdfHBWghDyRgaTJ75eh5endfpHBssCBByWHoHm71gbcNKA9Bw591hgFyNDzeoZtazVijkqTw3rNx",
  "key20": "zDGbnGXLP7wvihDGyN4VQse6uZtdetbvqpUDWoieRbUdQmrX5Pk6HEc3aiT2pt3xnqLGeMfDC3qXfnok8hh81vA",
  "key21": "4aTGDhQtQ7pMktLTZVdWQsJgZYkjFqa17T6ckEfCfoTdp5jZ39sphsr7F2VaHCr1r8Xfi45P3VuvouAGuuHdabpR",
  "key22": "kJztWvhc6jvu1WTcfb2YW7mcpcEbqb87h1xLnb7LyvQ5VovgUue1sXBGqxpaqwzxACEMS3dX6RRiZGZA8Cxf3Bz",
  "key23": "f5QF77tHzwkrB9QqkDj7xUDop1aah6DJYHQZU62tCy3AmfHWxXz843hcu9wsD59ABBx46hG7MxsFs1j4eLwvcni",
  "key24": "417FT8eZNVb12NuQ2KpYHteuxb6xhWizmcSgZBxEQtfFK7JdWwFep3kkK3UEx2z1mj1CfxqG2Un7cY1obrLfJbWJ",
  "key25": "5dyhwAF29MiDhcyiSRcyjhPeGfUVAT7MvYwijdoMpRS837RF8r3ZiCVWTBwA4EosTTJMWoJmVWsCKG58vZC1z7QR",
  "key26": "3FprmteY8fajY357bAUxCWaxgHW2C8sV2qZBEeQfBaC2FdhtYQMQak8pVCyDoHNmKcicUwpNYicwT4sQUq3vUHhf",
  "key27": "5Nvr4fXt6687SUnvRu3ewvJbTKqESCr2ardzQmkJRidEUuYT6iShVtLFeohCnWgQ4t3jckWu1hSnjRm8srBDgYfB",
  "key28": "29acpG24VZcXHYs22xUB51ogXLpT9eQYD6GntBj1QeZA63Xe6an3fFhrVSkdgwxR6dYPnc6ZUj5m4SoRkMKjqgRP",
  "key29": "4H5BroCi61qp9zkAV9ZFqa6fynLAxquKQz4JYxzSbRSNCe9RPn47FVCxjZYXN7n67d61G8GrsWh6DRe3ufX9Puf1",
  "key30": "4NHZfWTHRbKfYi7GoPzujp6RJpKg6psWA5XgvP1Lcqf4zvZDznvoaiqeWzmnX6rNQKTKNX45YiCydLZiEBQEG7xv",
  "key31": "33Zm2h5kWeneixgvaUGQdgD7KzY1SrYrpsHAZuqVYKqrXukHaEHro2Acnn3NQJXheWeqMyBc7spbGS7TU2NzDFy1",
  "key32": "5oPtEssEw83QWrLX7qJvp7zjfS6f4aeQbLwMqDMJoMrLxQzSs4cDbrfXiYeEdEFZMrBc8XBskeaodgTF8uyS4BZb",
  "key33": "5NBPeoWwZkYGGNWWzsJYEDBXoDYAfmit4tRUZjwDFJtKNpRRYRqH6sZgda3gJvNZG1BX1PB4YwQPaobW6CctJF6z",
  "key34": "29rkMLrx5oqrBEcHsVZ529TJWk3vQRobJjwabtKZZFyBjzBSZQgRLVUmudjgUTG5ahRZSwV6j2v3xkcFBXUQtigk",
  "key35": "iYXKNPhUb47paQVBYtiowgPC1tihomkyfaD42AoPk8Ssi2kAd4DJ1R8Zj1SwMgMSuMuvKbdomJkXJEZNJcaxKZQ",
  "key36": "2UBqRjbp5W6HDsQ9XpU2b1UxfC8MXcPXbCCj7tfThMDT6zLPoZeZJYACxs2B7AYQEKrEfVnyvPiee8yAr6ubqV9",
  "key37": "3L77PNfGX9ZhHWtQqPSoW2p8NdBayBsDNbPsVuG7yir93mv5bKaejiCp7VCVNqyczyCmGWKeboihSz4AhCrDfeF8",
  "key38": "2vTqJHz5j8XZQoJJ63pUVUbvseA5Apuhr6zMUfXhJeskTuw6UeDRpNErvSJV2BpghMfNwgcS3koh5HbiqUP49y18",
  "key39": "5oykZmjeEQiRXVsUp5fsxGbd88Uf1azWf66oJHqWJPiJoADS2YfRw3gjzqM9CW3ASA5hjCjb7fzNsfz5ZRvCwbh2",
  "key40": "41SDKcFdAwQ1Z2SBTeGBq9yb415UfwCXdJaphWEriE85gD3dK5qz7gUt7K4kgBcU4ntEyhRDh3Vk92hwYhASPpQ2",
  "key41": "4ERKqbSMgs4sQTPKkTvHoVhm6GkR67RucCk6vmXHYEe4Yz4yHTkJn77Ps4KjyN5W7kjDVx9i614EwTLdttL1zWM3",
  "key42": "51XzqQ1ZouA2boQvdVbmJUgC9ZY5V1QpR1DEEPSfwjwTu9M1PWQb5zm2UgTNhrevSzh9c1bfWV6pU7NNbWGvBY5n",
  "key43": "2mV8ahLhwxrPAjV7seuigLnZWRDWdtwGQ7yXYiZ2fF31fVvYessjZYgJ7hR4iJN2tgXt5U3cP1gcvrCLjDTbf9xd",
  "key44": "7oJUdHnuvCdYiZRMZTR1w6yTKK8gW2Sv9H65mX7qMuccMfisLfxXWUDQufY2vAwGYo9QXqjAjoZLTbSjyuiMR1K"
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
