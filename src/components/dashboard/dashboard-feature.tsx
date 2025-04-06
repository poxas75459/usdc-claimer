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
    "2TQTdyPfaL3nBfNoh4uRRLR8P6XT2hoLW95obMF2t5E4ynH9rVwroyXnQFyBc43KUf9n5qFBPoiEPnBrPQvochmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dv6FBYGMYjM5S2XffBDa3mFFyA6TcpMVaN4XChJr8Z5RFt18fBSE9oN6q4G55sxU1fAv4FrgewHbTQRBVf4XbVi",
  "key1": "4M4KXMrFEDm24ozKz7AVQkEVAp8UkiFBSnG6AQKpuYkykXCxGTiAWWHnNuHWAzwH7dVrbu53jLruSQ1KbwWKBjPU",
  "key2": "3qnQxPHuu1vMChL49Pwg32LGY4e7TcFKMZkHmtwUzWGYzXWC6LjudjmkCB5Lz6ACFWSSULydYThAQhpKesp5nWnZ",
  "key3": "3sGKu9KpZtpqJHibmLVBGui6sfmQZBcs1QcXvSZr769cC8NVqKB9Uo8m7PH6Jz5BZrYqAx95MoxV4uNrBDQQB5kx",
  "key4": "5VPfMNiNnZyt7CdfZSNE6MVS6kzyakNaDCMHsSCceC2S2jQzo9uSonALRX85MaFpia5m2KCuAGUJSrrTrTQrVh2G",
  "key5": "uLjMP7nwTA48JCPkzYFhLhhxTokyTyiNVDMyfoWRpcVehqLoaSBp7ouAtZ3na8wutSjko1ef2DgNe68HY4RRvbj",
  "key6": "3uAGrrpZ6ZNAGcPEFbemPBYwahq781yQi81GbUo9sfVNFoMbZXT7HUJ4Va2H7RkMDh8uxh141FUx9usNhiBNGp3r",
  "key7": "5bmC915fte3PAvps6Epw7aszQoEzXGvfT9AucRb9iJVBtugReZTrg9RHdrqAA3hKS5zjsNqEotfcBEF2cyQDpUUT",
  "key8": "26qD7odon44hNZECSLEun24RBdBWvcDWENqyZeJ5vcL3uD2JXtTuPpGQPffcKSs5UGAKzhLHg3BjF3Hy3HZyJvhu",
  "key9": "5uCVz63tWn86aYm6f3Euo3mnwwRNaUYHraugYbfpWzQrJYpmEEGdGr2hdqgGiqGan2AexEMdGLrDxUFw8NGG3EUu",
  "key10": "5rNCH5hgYAScddEN1evRh83qzyVa6XU6PjQ87GpT9E6WY6TcdXo2HTUmvaX44525wJS98QSESUzeShGtGEfZqP4z",
  "key11": "5pJPDejRmYMBC1gTptpE4Ndvi8MGwtp4tXspZsHcpawW8N1UPgY82hunUZCX5g8TC9hKcLr56BpddxBJrzrHkeuH",
  "key12": "39z7udLRtCLPZ8Vvr1AhRW6wsA1QGzMaph98chJvbKUdMgFPki9ZHVvogb9LnMGHLQy5BQD8RNJeLrKjffQzovY5",
  "key13": "3MJ2V5RmFNQxkbAnRcXT5Ps8Ab5ctGQDhLRRB4pUs5MPjxviKGaPwbtzvV5vaSMw5kRz3BCzK9RG1EMcr9S49HsR",
  "key14": "5U4tYGK1Mfzpu98xv6CmPgfUXCpQonzmDQyPKEpq94zXbkHGZmgTN3o3xDonebkcVmERx7Ym21tmpCZdQUnyjPge",
  "key15": "3SXcuJE2C3BK85uuQpCdHkFRjcB6zjREiUp47CqkauJHUv5mocp8hgUQUzD83d17vLVWeeMcHfAmXhCQsRRNVfp4",
  "key16": "24S5noycD8WVnD6BXzEgarW4yJYHefYNjGQMDpC7xTYthgquos8Xq4vGBgdyDpnfvtADziWSp4SuAX9X9q18cHtL",
  "key17": "2mkj9SRCMs7CM7ydJWRmH1juoNwemXwW6xECXjA7nworGkbR9o2NPc6NKE23mPZAP3GbfEugps2VQ7AFkUyS3oye",
  "key18": "66DBXNTizJcTPznZFq9GkMe4M3GqEjHS5vGg8yMsiWNxepwix1ekZpgGsVDeL5iXEB4Cgbd2cgQKPGXZaAJ4d3Ss",
  "key19": "5CqtXnTPfQ3NBeW9YRYBi5Y9xt8BYJeMBCwuH8atimba9HXLBUN5P6JkuEozoVhvKFw135NphqHRJMngcKh5DtHR",
  "key20": "2BzRWgVAEywX8NkVzi7YXj1z6m7ggyrMMtTZzkPqBtLKYmDB4vV8HsTjVAjvRDLfAGfoX28Gmtqpajvf4mreCuiA",
  "key21": "3RxjnKJUMaSSnPFLEqP94enYTWPp7hsXkTDywpJbXst2YDvEjS8mMJP8QRSqB5K1cHdi7WVmdBCB5G6ZRvHxwyvT",
  "key22": "4oq2oSKyGLA5A5z4i7wgEGzoUCjVM9uHc66ThefW7nPhPauVWQgaTNuo3S2VsJ3XrnUKRT9uFDYc4Yo1ZWZAeEGg",
  "key23": "2ShQ32XeqeRDJe1Dgk3jG5FuxRoCMQ5xdPTWYhFsVWrWZpao3SciLVmYmi9Z5Vn7LepUjLWo2msZjQwjUk6W4UCQ",
  "key24": "2Uvp2KQjeCWRKLQ9dd3efrVJpVeVDRpdYSJSxg86Fe1i8N1DXVn8UmZfMz6fba3ApZS1p6HE1rWJ5dDBdXcv4TEM",
  "key25": "5op9qD1UVGhCPLmNskS5EVwipE6cKevyDKSwjpHVhMjeQdo8QcE1eHn8B8wikGpjHTpw3LJRQfN8L81UPa5oY9Aw",
  "key26": "3FZSivHAQJghNJy4ZGuhnFZT1pcnBEABccpHreLZENwqGzxacRx5EcA1P9aH4HpW1PVbV8beB5LfGDofgrYH6CZj",
  "key27": "3Ht7jKmuPjH6WbYbbMALrfUdFVS92kSZ5MturVnrPoXCpgbAPXa4ed9h3YwBXBXqSstczuietM5hYUBbxEwknbZm",
  "key28": "5EDy3V2Lauid8m6a89cy4qHz9eZnwTsV97nKe5hbKv8bX6wz1NW3gB8dxSVUJbWBaxojj5MbAbm8E6ghm8kXNeJ7",
  "key29": "45tPF2pKJgAYv59cKbpmFksvTimPFsdCLC9uZSTYSboZ7c6Eo1QFwLfceHUJBFzZUfKPWUFcyGPnrgfXxuh3W1Sm",
  "key30": "3oU3mWk4ihhT4jJPx4jmnuUPcNfJB7yA2PhnPq1L4fWH8vGfENkPUvvw3pJFjkYSBQgHPZ8hi7ot66QhMQ9Nwc1B",
  "key31": "5JDnKdDt3GKnWY4LSPPk7YE9vjFJEUapBw3TNgM4HadSaMPqZ5fcehVdhqvgKj8KERp3opQdGxjhB3rcnScpEDvD",
  "key32": "4bxXiA64gsrN4of4VK45qwEHjBkjgJLiZR3XV5faZ11AAZbmDhezDF1KTLwetssuY1AjTefa8wuRGZ956jox3QXU",
  "key33": "3RKjUdJ4n5xkbuAzQ2r7MGF6zDa7APh3mhdR7qVJXk6UYyTfFZ8cqoRr8j9stqLuRSPXv3PxqpbAxEvfGAwX9jam",
  "key34": "3XXwP5tk3gbQbW83bzq2QaETYYGCoZW4cAPFSpiU5XXSCsmbUxgSrsUYUXxxnhWdX3JGrDydWQgGCTGKAtXyL9qU",
  "key35": "5Ehm8Sn37ayUHAMcxuHyzt8Ykrc7NYPEkQ4iXifUchvUVJX13giQWd198qJxHvRkSTUgokwwpqaHhJpdvnMTCdT2",
  "key36": "5DyGPnRezW1Cc9eaCVN68rtSGkcxTWJK6apG69vz3GdyWrB1VXM612QJ7xnJEqA9MGTN9oYjGiZUnivmTXSS7ugZ",
  "key37": "rJG1vBLR67n1DWycWFDzSQzFtxRb2UADCp6UHoYhuVaYYBALNu6xJ2jAK9wa78sNDXmkZPfKMY9hGLpzTJ2MyqF",
  "key38": "rJijoVgUv8RUcQ8AHqTNudcLx6w5HgNHnuZrZDv7zTGdTWv96SHCTRWijbyusWXwFazpGcxjYdYHiuUK2suXFbg",
  "key39": "4rhaQptWiTRSsYuqbimLWitf7QPgqeJNpkAsTAMyvFSeqqtdDzKP4sQbKFA5ZSU5qrDUpUwRMHA7Mm5VcqnLjSyg",
  "key40": "3qYDov2bwTsKGLip3dx7GwTXyuNL6LfomhVX7w5osBA2hXX7TuA3SwZe7LQMhWWRaiZLY5GqA6motYKHvBYeaGnF",
  "key41": "3pL7StavmfPSKg4iJKuL2MSNPewWSSuPPzsQBVVbonbUsFW4ggtEv4Ktm2pvvfbU4Q95CKTDWnKozkhDcXaSJ7Tp",
  "key42": "4vKi5hTKBbVxQd7UQDP6kddsCu1JWicRcNYEzLBZHSaApK4qQsgNSqdT7kBUGbj3me8Sh9qXtPWXKyiHzJWHuWDa",
  "key43": "2vJ52U5gvoWnPn3ZajHKwRC28QyKfVkfPxd5LvoSeMfBEBMnP4i9wkK4ekfEuFSYJPbUrAppV1ZVDFCBkx6PJMLY",
  "key44": "3K3M6jJBkkKND2edj6ZF67TvmnDNhvq64Gk26zwJH7Ja4AntNPLYEjk4f6rteq1G5mHL9ZtoJpzQnbwdUbYuWvcV",
  "key45": "cDFjnduYQPMvGaEZcVMAEytFWRTU3C4sJ1jMjDt7s9euuPKn169EkpvXme8AmhJE8nbSkudGJ79DfAUHrrumU5e",
  "key46": "4sKaZGTTH1ERnSEJZ4CTq8mTrHHFBzKR2AHqhNna3B4a5T8SXZ32sbpRM7dSrrci1kknBYmypiE4xF8SEwrBhALh",
  "key47": "4vEeReh58PpyZNv8RwYqPNx7Y6DFT3h5oUatMYPxXo2AEaBaf8EA7YLxWrZdir5f91nKgK3sy7v1QMgFxSStARdC",
  "key48": "4zaHpy87z8Sns1Z26Kdbs2zQ9EXmF57dehXhEf37HLcGJgNiJR4m7ho3hA213dPi4t4xChksFtFLzjr89FhxdJMA"
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
