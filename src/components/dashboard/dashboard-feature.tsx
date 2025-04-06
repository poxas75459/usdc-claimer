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
    "4Sw1KabJ7sNyZ9rUyPViyqewKWHKdk37Qmd3ykg7vjv5a8y9qXPTwVxVfPVqdt7AAFq4VpZUmLPuNQZLeLGdLkaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y1sUUdZm7XDYP73wSREhM8r3wwpNbfEF1HN14AwoEMt1sFDwsvrKMdTLjY6aKyedTvFQpjZ7vqFMtvR83xUn27",
  "key1": "3XnFJYhi9LpKsKpK6SViEgMRgwmCHgsoxDpmsGfy6BNwGK4sGnPSqDYhZEfpQNeHrJhsPTs7nR1JLfrBYk1PfSfR",
  "key2": "34jZfvz4GpctgSnwSLGpASbpfXn1VwoDDd5cGpVUkijFMf8rt1p5e885mHbW4jHqJomkpNPgPR89RnzvWB1g5Ney",
  "key3": "yrG6oNvPWisY2X92z82BDGrmYm48C867JLAGLCjij7oC4Qq5jiDgLjSM1JVj5NmkpE3niVjdUH9bE36THw4X4Jr",
  "key4": "9XTC7Q5G38Nf4hv86sVV78YCaYj9msTncGYKMJ1YN3Za6NsjPF9R5oRwo4za5Yr3aW94HFdapWhGM9K9ZcQ1R7W",
  "key5": "2ZMiDNWQE2kC6CWGCn2FSPbyeFvrBqgAfaJfLmukTjv6TfNpvArNUHVUaYExDNnLy8eL51CQCZWvvF4nis97SG8N",
  "key6": "3NfhKmRMr7KXisWGk3ymZ5k7unvzqGr6wmH6vrioWRGrhbKA6mY6twP86BPNTvovQju9Gh1vehUB2StdA3GCdhVb",
  "key7": "27vePZHKYPa78uxHbiATXP6wi3Le3Ny9Z1vEN61J6Ko7NydP7ur7mVJ9heqAwW79MqgvmXmCduEJxXuc7YErZoKJ",
  "key8": "h3TV4tcqpff9iiHVABu9msTiWDxKwsQmcuDvNShQ6uPGr3BLJoCy96kXCjzLiB1Lo1VHzWpgXPrnqv5nPWjRWYF",
  "key9": "4ybmZMnsXGFhGu2YcRR6j5EHE4deNwAtwXrekfvugxGwiAARSXQqrJBkn7AcFsiMwxP5FV9UreDEb4u6RKZsUXoJ",
  "key10": "2nY4ZZiqp7RgNXXFXJYG3VsBvMXKFE4MkoLNd1KeRvjQoQm2UXz6Qq2QWHKuHjpeideNJsDGfr6iQ86ASzAHm8jt",
  "key11": "9e7u3dm72YBuRMJkhYem5JSsDGAxeiPUySBJ4GdFRC1PBxhr3ZubXQysw1kFhw7dnYFyfMHEKs3BPefjavb3XDK",
  "key12": "5DPmxGAQH7sAkNVvuRyyb2oXU6M8uJoMxBjJApoMMxuifYu2MMcHwnj4CFFRAdA2FPqbBHh5KXCzUbCHLsa288Be",
  "key13": "5RRCZaBiQRU8D281DC9St5i2H1nVvJ3dK1inNpwu752TS2HUqG4CyfEqMFoYfUV3BVf8NhFbDpVWY5AJMKuWWWWU",
  "key14": "hwDXL89LwhUCpfPFBb6nGSCq2EcoP5rGM7o8UXXU7JHnXTA7nr93o2DPZrVR49MyqCNQsXaiJ7sUWHmFWDmoP4z",
  "key15": "5PbTXkH3geisYAESapFsQ9iEPRYPpyTEi26JNZ1eqbWvuMGc6KxA6cDEqNZEkXtzTvBBaDbqtHca6xcLvgGfw8A",
  "key16": "62zyfbn5gBQEVhZuZ6sxv66DPXJmbm6qegkAt7BAxNQRVtc2nRdaPEj5jNpHQrpWGwT42qKcnasc9PMXz44YeBZs",
  "key17": "rmZJcmJvtzoTP38CY8aRXwJHG3DjKuiDoqwRS3hY6M7pnbCg5exVPADHphRVhoX8KbzNusATrWApXfipCjM6uyJ",
  "key18": "45fSjPMBgzHkrMLMZvGto8Hp1fna1RSwGb336x3aMrMDtEBGPpeyY3qmPfCJhd7ghUUamWnvRSSUcd69U7fB5Gi4",
  "key19": "2ghwaUJL7rdABaQJva7HGx84yFUdMuDamCqB1HgDLCpcuoX7ueTHYtmPFbc4K6wCwoS25g6xFs5ZvCpUMPFuHFDp",
  "key20": "4FMoE34cG6P5RPEvpA3kcisSwVdUQshZ6Dmv2eN8m6ipk7F2oKdV9yQE3jMW8faYJ18eAUj8wh1PPbYUHNXVseBW",
  "key21": "2v5iYv5Hz7qsQ4ChktUAgmA4JgBmVbdcPRf3SJREgr6fZZKHMD5AEKSkPHJRwg23PdrqXzt3JVxpZ6n85eosTkB6",
  "key22": "2ucnUpobxBLsMqc4LYq32PTMFXmqcQeT7UywEf9wMXCm7iiTxAS2mweaVmNCvQxSHNgdLa3qQb15aUFAxwprUC4k",
  "key23": "2HDSFaXdSkZzkbcPk3pQp5on4KHMa1nq4Rj6B6Pq4kUjTHyD2nFPuNoEpNsBnsAbkrB8BjftDbD5tRWtovu4LWhp",
  "key24": "5U1woaSAZ7phGYhPva78ychSew9VHZzPKBvVJKPvGBR4VWRb2YxWTQVQAaup89BuWzhpHCvopJD7m6P1kk9cEZCV",
  "key25": "5mJNjfAmpeKNANu87kQ4wfXwzQSNfZ1ukBQqVSEyUSJDkPAWV6fEFkUFeYJryYcBaJrxq9gJwpmmQkNgXL6LY3nU",
  "key26": "2iHwLh6HYnTWmNHPpfuZCgbG2M1eDNd4i9bZ8g5exca5y4jrSNGWCrrCRZoJRiUQeBJy81aZnWdw9uKqgoQWLLfD",
  "key27": "4gAmeUKiaw8EJqx9Wxy13xUPaLCJg2widf2zxtFiMDpdc7HaAnf7i4cw3aret2VDZTGJQjfi642ECy6fFhAB7jnX",
  "key28": "5BxyPcsGir757ULpsCurx2B6HgKdCKKvGt86A2VAMq83Aued7heQ2Rq8e9vW6roqX6q4RKa1rXHdbRkRWVrpE2np",
  "key29": "2TGPvN9PmNaNTq4S9NgZhqemKwJLq4Jp2A6snm3yppntDTNe3rVE4WFUqAH8t38KSv9EMe5E3VpYe77x2qz8j6iG",
  "key30": "4HH1XU475SLnyc2qGyuYNctMhYqCxhS6NwaUe4EqtRQ8HRzLKBAKig6RtWTdQEgNnwANFB7jeiqWau6QeNHLHKFr",
  "key31": "2Rzv7FvkLyZC6MAo3tUrxSDsW4YAys5VgjeHP4xj59FRUXAogQNyqyUN3aQSKv9rcpDov2YByzo3ViSKH1ALWrkT",
  "key32": "LuHrhYrU8rUcPSUjiRM3o7GZkuLpooDqNRHSrnTVjEQq2bTRJP6GmymFobU3xBoX9msUiGpegfXSpae5KzTPWZv",
  "key33": "2LRFZcQd5YreAPyZMfzY34msLvqtGMt2RDt9wsRxubfcQhqH1LRwxc4pfLCyNVRosdaUJiE99hjGa9qCCGNBAoGg",
  "key34": "3k8wEq56CCp1srW1Y1nVipZzaEViKjfV6d6Jdv8afszxtSoT4aDVSjfSzxYrq1MZPHk2dHJ15iUeUDwoBYHpFYhq",
  "key35": "4fmUmRtRin2sT3x7Bb1hz5C7cW5WyAYJpxpqojyHiwnXYbw8RW9o2AU2MPiGtYhkjNSAvXFCD7psnsep3QXnz9Bc",
  "key36": "3ZnRLct5FX5LJhGghGFjLccVqNs5BSqu8gu4GAaModcPCFe9CCGtkcBCMksHDHWPq4JpLrdGcVNv5HXjYrWZB4F4",
  "key37": "3eP5krLDkBvaF2e5d2pYoW1xTtgwmtoEoaWxF6eVo3WyJvP5WgxNnCd3NLuNha3N7soxvyDJcam9Dh91pypZLv5Z",
  "key38": "4LxXtAiWcTjvvtp17Xp8h9NPmKshERgXps6j5sN4JabMkULEbboQKqZVqJytBiM4ACtchRUjB2mjQSouRoyr8PD3",
  "key39": "4BTNaBHaoS71xQACxaxy3uWpTZRVmw2AYocFQ3yhbDYRnDXwkAKR3hgjM1VAeWRy6xUD71gokiL3mP9iD6TsjZ1M",
  "key40": "C3VdvSgobJk1zH9Fpwr5TMPGvzbnHQ24FZxQVrY6R3MZY55HHT25QUc7w3BDRK1dVfcDh42pmYx9XBQdpLuZDpS",
  "key41": "4J6pqBB1itifDGhLV2A7ZafoL76KMCGYQqtfLMaH3MWdAFrLmWe29XuZAdYxPaJFUejR3y3bmWo9btsjTfcFT6Zj",
  "key42": "4dvViWatFBRjGAvYht3uPdYU6A4Ve7qPk2K2PoaeYz7k1zeFUY9tePywU5MqoqGYwC1LnRqbhTMHjv71YLx2ajZH",
  "key43": "3WC1o2XjHbD67wumWc9H1UeLpp1nHQmAHVKdzVu9RGvEvnuLpe5ZPV5VSXban2MWu6BxM4WgpMMNxpWBu59WKKoj",
  "key44": "4op5Xh6cub2yKEKTvfLSK73Nv296eZKS9xmT353zVw5dFR83vUumDmLTX77nJ9UVjUyKBeodNGpPfwYygUWihfgt"
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
