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
    "2LoDS2i8YkaDoPcGABs4sW58wtk2EhXpAd4CJhwbDcPs5J4c7uMCE7qMmdu3jdNV43pvNkNAkYbA9u2a4HEnqoTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5eGeKZ6F6kvLTV5FMvmyiuKysA62s5rR8VWbgwcEqacKVWnZBaQN3X1REJ8PUCB9TfCGAeHArweUgNkuJkEvzH",
  "key1": "2R7N77vUX6N6EoSv9KHqrZ7REFaHBQAgeX8aJjBS5rNAkn67vvzEPFykWxhkF6oYezfv87VdrrTeaG35ftK9dpSg",
  "key2": "34xFupycdLXSHX5zecm3XoogUk5i2rkfjKmBiX3HtRFC7ja2E5vd3Fwi8y5yj6N3mYCwGdTVN2wb6SsxHCUDoyqE",
  "key3": "vmom6LheoETWkVZd1AFDaPZLKbGTSBMQ5UrFFomaofWsJP3GbusTqKDTLDJr26hvZ8K5BgQZhkfRdXWxKg3GC9a",
  "key4": "4uBAUXyAsuMC9Z93QD7r8r3U16z9EyVoTih9n2LNMVFrNtGTfipBQvfBZquuTKEcmjYYLMj3HeBEoG5T7kJHDYfC",
  "key5": "547z5N9KyqgE4RaAA8CX5UNMd97eKZnEqqUbFdKA1Kott11xfjhGirUGbQ9sUbRHnhb5nUYhHAWJPYXi2QLRJmUi",
  "key6": "5oXvSYieWxNzZqNNcCq2uFpSmjYfHgc5adYyg6eStMiqeVfnoqRPMvtRh18Wy9XVM3SHDzsd9gzALTevYSBuyCJG",
  "key7": "2BN88xjBeAYx9ocLsQ3E4s8eXi25AnAUBDV55kVQa9ohS64TfTJibfooAUgeWKRpuTBuVce2nGkyyFxGZZTdDUvo",
  "key8": "2Jc5rLJuUoo5MVdSCz3fjWEo3NmyGd89s9mHJgumDZHKj3arB1EN2u3bGSNws8YGewPctK3KJRo3ku4cX4YEYtp9",
  "key9": "4hJmAvB8P62bbVdKF4Vk9KCXVkGZrcf2xd9Kkn2ihyryqv7wb3yQB3qMzoXRMit3pLVrtJkiQm7kSDafA1McjobR",
  "key10": "3C1uBmY2TNRVVjrCMttogLVDzFsdTuVVxL8HnkNHATGikbZKkeYSaU1Fon54R9rpr2psk3X1VR1saaexEe8vQfLd",
  "key11": "75wSewA4NVqKEvsmaru55eA2pzBeGVgUtsq3ZoiSB4eKdVnykKmERmPXYTEqRnQHpHFzYBJwDKq8mYudiW5Zc3L",
  "key12": "2o4VkNxkuzL1xvqceLcAd7Wd8fmaEYZBuxc9wAe4dopaTkijavwTLBQApzb27vAXYWGjLR8kDVKDQoQmM8Ji4Zdt",
  "key13": "363P8Qx5yZYiGTatFSqRM4dQqo8DpTnBdotSFEjZwMPCzoPrwXtZxWM4huFhaoJY692zxp4L1wbmU1LJ7TqHyZdU",
  "key14": "2uPPDViPB7oL3HY6kixXDRMxqMibdpwA1jfupr8S57piSNxU92fDfBy6kNkGicyDSsBKwoUVFfFyKu9dezs12ZQz",
  "key15": "46H3YExXRh7La5wq1A8U1VyxgkdnRPpjLc4Hgk1ccChh74CfE2ETSZtBLnm5n83B8HwADonKHSGWNhUVeABiubRj",
  "key16": "2XMc8qnuatLFn6j1EcA8574GTNe3wLsQUjCfDmzwUr6wHJyT4Usb5aaHY1SM4pQw9GMiaGj6YYD43CCb51rTU34R",
  "key17": "4VbqJg4oVYedLtEaM4QzDEZE31Zdbo3C6hCrBYL1bvZdBp4D1jSHonk43irgut5RVyokTcHPgz13L3ZiYkCXKf9",
  "key18": "25DWeimqqjVEcvyRdT2hqvxM1qZNrCyAhyz3zB16VeZTVHb4GarSEKJFhLS657HxFfrNv8awLkMPjuMSgYyBTne9",
  "key19": "ycFeWJj2iAtKeQAJev7koF8LPKx4PpRkW8GJi6v9vjMD6F5v4XqJc61DYKjSqvytVcJ2fHyZkuqNm5uCbvRgTZp",
  "key20": "4GiUDok6FuCHq2Jo24n6qUyNpeRiYYcBzhaoZbb9uKC9mQ13gFKKBBuQM6qMMzCSgnhzDuYha4x4PmHEwRU3PGUZ",
  "key21": "kyLu8cRUb3AHvcWtHVVURW2rhfCH3KhSs5MjofsszxCdfJogz4dLwzPEwt9D3Kx2KpiN9w6SpPbCAFU9qXPVktr",
  "key22": "3aPdYWxfLZiFL578Sr7dQdu1Q7xJtpV4yuC5F9a3MjSJba5tSsieE39dUUMAZZtHx8B8LwKgEJCMUDQzWG5MXh5P",
  "key23": "3xRRpgz6MJUuVJMAmFQnttNFb1nskNDF2Rx4d8mK6KkhchAUbTqUqzP2LQGY1hzQ98SsKVtGKGghcT4M38m2ftsM",
  "key24": "5Mw6hdJHvbwqctsL9pKnZEaaKesLimhwErVYsZuP7bpXaHbqvy3crapb9PFknZ4zvySPXN6rZFF5nYMLXXJPEcTC",
  "key25": "5cmGM88hPfLkizYF9vAXXswQAdgaiazBBYBjQwUDTjyY1oZBXAM5wESBVcjavzhuYeeKET1puhrKHDyJ4itaRB29",
  "key26": "59Bw2ZecRA1AuZzDSjtfadhR4mVVHT5re9QD9Cz2Wa3LoF5FWn5rchRr9NPQRDYC4LbgWKsSXh6QvBLmgKhhbfCT",
  "key27": "pqRRjqAyTvz4bVL2i2iE3ATjrVYyzJDKohC2V5SikbL68P4mKziJqjV5qDANuF4rrhUAW8gdodMY6emukhSUDMV",
  "key28": "2waLcxYGPwgeqh8fBfrLzHEULYWZuL8LSPXEtd9oWQdHyAY6HnpaXrLgQtC2pPGqMdSGXtK4X99TVhtEyQnSWTjq",
  "key29": "2uKHXz5EuxeqQPV4GRHEdMYYKyGd4essXzjQBjvth5WH4DRCnDCuxh9FSsn6rLCevMpEd57JznacVRuzg8sRgfJh"
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
