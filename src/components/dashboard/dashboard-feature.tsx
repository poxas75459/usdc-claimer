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
    "4DrLJCurPu2WFa8M7fh4HFviy78A17Y8Si7ezt95JYyq7XieLXDEJwNXucK2MyVjpDeX5tF6AuZbXfgYGcZdJ8SG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NGoHPnGNuqx6mDyJ17cCgTWAjf9XEERP5nRfvXs9PV2yBhriB2DLDEJiGutkiixLc5xrBRAcJ5TqgVah3bNtftV",
  "key1": "3LDHFEmQuhbnwcAQedyYpsX5CUszcdZUWSaAg3UzDyiX64soQmhtjeCMWZXQ2rE37YAnuSkD2LcRE6aKzgkP916J",
  "key2": "18Wzd7grHDNBRp5Uk5tEMEz4UWYpj1n7LNJ1ta5CrnSS9gXuJ2BTUFQGhwjxXm2qCpKqMHGpnfqpYwKLrS5WMgn",
  "key3": "3bRNfGHheTtmXKGhkWLb9LM4U6EcJwcoXXBL4UTr55xYfA4xqzgs6azmjPwF4yhuqwvwre6xGKmxDD8TXcDckrVF",
  "key4": "rEqPvB6Hc8yoXsWCyfNGwc7Sq5xks72EvEvktY6eeC8gGGJPFm7U6LRB7nkV5inr4Z7uDvUja6NcWCDpF2L7yoG",
  "key5": "sSpYAQeSCtAhh3UhbTqhE36h4HSaxQaMGCLZ7sSGHXBDKX6su73Cs614BWL2P5f325RWEyR1NzWq36yZrF7W1re",
  "key6": "5WvYZd36ZJSQNBF5vw4C2TJg15sXEVnnCJke6Et4ZHsW4ZWCcRVNgzD8jjDxDAiTodgJyastnpUMzPCtvvqmU2Xz",
  "key7": "2BNsjs2c6ekbS5R3VG14BCQCAC7d4p23ejCi7v2cTyuuc9kfxYgpKZ4oWg6QeUkFCGnZMkrFjwYDrEqUCBjqYRen",
  "key8": "3cq7hnvV4BENd2g25CgY5ULrRNyQCysUjUhjj4rhmrELgShcMridEsfReUWpM4C3kr7qkM73BBg85brcVzRyY9Rs",
  "key9": "2VMdkvhMRSq1ojh2hPfoWcTNq3CssDs1zF3RMPjF38wbSS4ubENCf6jmKNmanz6ifqujbc4iQYCPXr8VWAZWyaXu",
  "key10": "4CnnpHATQ8QpsK5W4xmHCBgjxF99FaGMPNzvBpX6aoP5QG4wc3DjwYZ21fofKrcHPQvqk3rzrQjvSAHXemrwLrYr",
  "key11": "2eWUo8qVvkby3xvtqBNogT8faB3iSnXavivxaDPMNDQBbBUWX5te3yWXFuNXiKzJbR9jJfa8jzvoFubxTp9RJ2ev",
  "key12": "2fyQGqairUBj61c6apjbxogsXZrN5SR6VJQet2T7HMv45akgHZAJCkdh121deEcVKA3HwCuYe8xHKXUp7LhgzPtV",
  "key13": "5UghKtwSn2UxUbufUmMwWZNBHtEvUFT9dMGPcjKAUs3pVbNFrXzxuQAcvG6isexs6u5YT569Arta6mHaYg2DCLCW",
  "key14": "51T8Kx5wN5zaXhQx32J1BLAkz6KToyx5Um6MTUYJPoRJX4qy2AZMSssoMRrHjEbAReZhQU94Pnzbeo7AqS68DSSn",
  "key15": "4RYBNz9xVodcwZ9fm8eeaWAqnqt8zwQP7q32Rv1GfqykMxQSba9hza4WvvyYDnMTk6QjFbt6RV1sQGBQXh5inGSM",
  "key16": "5DUVF4E4aPkTqTBcZfYGrUujQYqwtB5xzv4J6o2RMyGVj2r5ktzbQTPaALE1M7HWsUh4YMcjGXktJoT7eXP1gDHq",
  "key17": "3JvBewQnZYfcxhoYJqtfujRJVeAxw8T477Ti9PvHL9gNTDSwh2TEDPkQUPUbQ9qydUF6u5kJ9YjKH89kr5MePCvr",
  "key18": "3Hq7kEquR8RbJeJ2rdAzM4YfPciLjjWGPZcU4278aE3MCw1QPaRbpBqPynmausafa8BHkXeZ53F6Fv5fX4NqvXFU",
  "key19": "65gyE7mkns69wL8Quv1PdnpXP2huWtvLs8NttEQr8ypiZjtMa7qmQNk6V56gH6h8thzRRVuSXith3Xqrmy1oLZ7x",
  "key20": "5CaBYc1YavPHjc5iSrC9LrxuiRrpePs9spzsjiMD1yiVJTjWNfVbLq3DWme5rYLy4JC5doJtoMm8v4DxYaZ6jsT8",
  "key21": "w4ai1xfHjT8yD83SvHC7pSZspUB432xAHNamNbCY3C11E8GdnMufWLa66LQuQeRZAFAKSUvjeB8aZMF4N81viFP",
  "key22": "dELtzt9xzBJT8M8K1225C4pjToZp2aZv3mBhVXfQEH39k8f1oW8Z3amTGj5MvAuvLkpqdnQFKYJhUHD19h212iV",
  "key23": "pefkQxurD2J9pCNmqeS3JLhfBkhjQNHNTFCaCosXuvuiVHsX25yLVJMWT6h3SdhV3e1grsxBDp6gxCMdximAgkt",
  "key24": "3boKaAkhCPP5VQb7Wx147YWQAfVpHXC6MBQ4LkbWX3vGg9UkwSCqcQGi8oP6aSAcG8awURz8FVAtXbfRUKLz3mLS",
  "key25": "3d1k12n914z2AUxvAppDg2iddrmfKyzMMEh1qHZSFtVLseJWwTBjG1aJ7YrG3gAPHEFYGpvjnSTR9TzbJqdiGqfH",
  "key26": "GXmPYGxS8y8qwp1ekGDwzY7izKjLRHgXAdLw9Un8ktf9Gv9huVMmCQG7TYJ6dbT9s7W9q3obMh39ApqKxBgMifH",
  "key27": "5uzCXHzWcVVTu45D6SEh7bYWGL98JLYN31CrRNoyBSxWCwEYSQVkZd3zHuYzQbigJTfA5PfTh6VjGunsLgNkm9t2",
  "key28": "3i93GN7BYVfGwa8vd3NmAfFGxU5Zqi1m7VadpS9X175tShJz7mSrJjCMsse1JectYrfewq3oyDHz6HYSpDhZy6MZ",
  "key29": "dn7xTDZZkXSqm3xJqWzVbuhe5DMpS5cShkkxUbvbP1wzxcZKzUWRMvPRozfb9gci9jNUyMNtMcgoHZtEVL4pFkU",
  "key30": "3f1gd6vEkzTvy4MvoruAYfhimk7rbyWQCLEjjKhfoBKdz3H7cqU3RkFPsTjrU8uNbiYfHShz9xijvVxtcNjyQBYY",
  "key31": "4BACSnXpskecirnBHTDfAzGhdYSb1idRZCefa92wBXFC1M3Uy48MmkmRznqZ1eCKGTEvmL49PyM27FNU5o6SfZ3H",
  "key32": "95sfNGZX3VtNsmnYy9SdrzGz12Ag8uDANiR9yNFr57fU7SGJJ2xtNi1fPU3rybgBFUHYNU6B9iDc8dc8M1yKk9B",
  "key33": "5sGgX9atgqwUhsSGFSJDjifhWj3YVw6ttk9PG8vW8UFUjtUmsntmETwgbPwV8LBgskj9akt31njSQctJYtzgTCwH",
  "key34": "2XEmMocUYY9bBBcfdH5KFf63S1CccrNzBKTPx6JbrsyHYdNUQA8DiVwjgA1GjQ3EvbHZWhgGgsDKULCQqWvedFxm",
  "key35": "EaTWRprz4uWXCiRjz76NVKdtfDvvbfzyYQqjm2ndmVPVPsGdhJxe3Xji6QdUzXEyRGz6T84rBhtSZVLaSpwS9K5",
  "key36": "4AePNEpTYbtFMmUgaUxDsu2bhQhS4og1vaV3UeQY98bjwDmXeG54A5XE5pY4qysaz9498MqihDrk9c4ew6X4YMAX",
  "key37": "5sVbpBySuYV8djobvSYJsJhdm6SN5mYTa92AspBdegLW3ML7CVFe3vzYcmaHfViRNyoRfTsqrRtXJvpRaYVZaWJ5",
  "key38": "9UtTkAWFJow15vT6PYtQ4fcEykqsmYcvJYeMGxboWXJXqXKGUZ5n4kt88KuCx8TytpZkGVAgb3r7JsNQgA38tmi",
  "key39": "3mzFXBRtGnx3rxMRMnTtjXMt8a5awmpyQeLNNjaKjLnbQ76kbSA7kr2JRUje1GdC4em4eTbV6duUBLu6id6dijX1"
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
