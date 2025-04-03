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
    "cN68XgPxev2ZhgNMJxyqbddA5ztDK3TZqND3oj5WPTo4kZKGSnEtvBEnGWK5S7EF8FQAXZAjS2UVNFzYsTiWPqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDc9a29dMKpHH8LfDoMgcWnnVx4jsNeMcSRYoLESxmTZ8HauDNhtBBdyQawoQhC8GNeFSUXJRz7FndNFrsUpyCs",
  "key1": "3R6eTZPiZBbeGnbxbSiuXfsyGJQazJZFTKNkuqdDrbiBg5xCnveT8FzxRkxyrRvVnmSRcgPFSKMMmEnCqYZzq8Rc",
  "key2": "27sSCzYBeQrqDv2DoBLLhNJCkHejk81Gu2kivp8RePeP29MEBod38mpTtsJNAW6w3uWWNmLPWjQ5bS2KH18J9aXN",
  "key3": "4he2RjkkSpijQ7EdRtLMCxnKECKJegQXn7pErcY1uE6F2cZqHFjcEVJZfZENjAPaRtemWgjwxUYvCX1Ktj5UsoLN",
  "key4": "27VBWxWJ8CTRtExaCtYXLswg156rKxPeSyAxcKKQN7NZt4h16AZtd4kbP8vShaN5KG5b1NoAWcZV5rFVqXdFFzYM",
  "key5": "3Q7QFnD1k1y5J83qp9VgRQb9fZVotdNaN5t9aJY9zoJYhPKYoVp4J3mAJgEaEvANHRieqfeX3dSkVpkm21847DJ3",
  "key6": "5b9RotNSny5vJhn7gBU8ft7DSMTiL3dotEXwSNgzeBKZtSbzEV1hFEa5fTqspN6Wwmp9Dt3u6ZF5RCRpBF1hUm7e",
  "key7": "5Nm8tSAWX7ihhLqqnKDT36jZA3jV2ZcjUXsgA2UES5sFwyHRHGiGfW4z5Aju8ZQDroq5Km6NXFgS1YPjJmvMwcae",
  "key8": "4gkW1WH1EdagWA2WtWaEEkSxegYkpjHjTwWjU3vLVH4MsVbZKgA2bT9w2NpS7vAcMGceVxe1oBAhWQ9GHT53dabM",
  "key9": "3b7o8Whkfh8jhGUihS6iWfFrJRnCXR62t89fvBHV3nHYcFHqfeZT4vvWXoz6kd3RTgHxUzFHPwWWQLdDcAigSN5L",
  "key10": "3PQxuEAfbr7k3SSw78sxxUGDnayzboWkGk3d4qoB3Ed2sA4ZKRiGNUowhMNyvYV5wdnJK9UayNvepyc3nDC1ffQp",
  "key11": "4GHw3zN2iZopH3rPTU9YrSB2GZ7MRZFcdvn4h4d4z3igHkNpV6QoDUjX1jRM83oRTp4633sPeoiBkNMaZadg27K1",
  "key12": "3j52yVSTaQHdHS2amsmVmwynBDbLQ4Xweb7LJFUwjJynJpVUhiPV37Sh4rbrgRgCdY3bJZPVoexjcEu8nZV6o9Pu",
  "key13": "4KJ3gtHbTf2NVVNcbSUy9smaguaZFWHrx19X5rE9Rz86RXQcFd5W8fXE1VLKdNsyfkifBakVJ2GxXQQH8UytBHfn",
  "key14": "5dTMZJDR3Mx2pqjELhwfSpAyUsWRwtGJTB3vzaShtVVFxCzbPEizQjGmcaFpBs2zCm8SQm9FPqj8NzaCzgXp8ANU",
  "key15": "4umMeVK5hPDohZLQURU2dL8cBnBrur6ForC5M4p9orDWZMYwcxyWERnXqdJxQZ8CTTKdGYmQVzeja9yrgLDkJRsj",
  "key16": "2iyU4C2bJCa5uPGsBGJ4xDv21vPFU5yuqBX9B7XYLutQhzVJByvoNttTTmWBBL9sytDrqnC1z69T7vQeBvdeWtsv",
  "key17": "4fKwKxuDnHw6vYdyQapKLPZKMhKSwGQFp39CUHHanXJRUmnEG6fj9kDfekTkMW1jJNPtGCwoZPwZYJ7h8yUU7CHJ",
  "key18": "2xhqRWmfmq7YF75f9tE5JcfnAqgLRPJ9CoXVWXHBWeWyeYtSq4xiWrS8E44G8FVVBAkYwwyxePnxtc3mFiVA4bEg",
  "key19": "5uXj2BmRAjEpTuMPABQQDTH2Dc4B8oy9P7mA37vzoByUHdYmwGqZvBLnXc24fjz1UFJ1QzKfd3qk3ftdADpnQUeo",
  "key20": "5esVYBjc6ptv1zbYhwHz2BztBaJ9wY2vuqQYCJPinXxjP8YczYaP8fh2cko9Qd8z2i1YJ5riLSZtot4NqbDo8ACd",
  "key21": "VjicufURvqKSupAFqbU8wWYa4Q7gwJTTDMDWnWjdTyUJx1wphty982ioNXCW41snJteQ7h8c9MKkFts7V1AGq9P",
  "key22": "26rC1NZwmGECeXVmpgXj1WosEUhd5UhLo3kwvPNV3UNjhB1ymf1YvWRnRBUgP2xqiBZRbnzz1eWzoUtdpRFkGPqe",
  "key23": "2RDAi2Kjz3kzy3HWwwe9XSnEWuGJ2iY7pG63WC4GTzg2Es7gBmLT5F77bY6odcnateeAEac9pdki7AYc2Y7xWQzs",
  "key24": "49EPWHvRatcDidWSWq2MeHgvWYjWQsH8seUDutPGKs1qyPNPyoKoGHjkn1bBvG9zU31zKwhq77ose5kmtWYt9sGb",
  "key25": "3RVSGxB2CiYTNJyeYPqxxJwdFAfVJ59tCpd7kJ459mwYKdYED6whmbJuRjvd8dnQAPjAyzjDyNTg7nwKWnXkorb1",
  "key26": "3quyyoSi1nYSEP458CVMd12NHoVi3w9xuDZgiJzxiybNL2HSXWCGutQZjMYQGcZNCDLTMpqH5H8VSAYmbPSZ6xqu",
  "key27": "p4XSAJ9V23kKYkHMM6youRL69Gx2z35pWwkEnFCkviieK2RVimZEoi1JenZz3Et1VQJCKFHodMjXvDRzCMjc6pS",
  "key28": "3AhdSPag3hzMenKpm6mpBEUNi1D32YXjka3nNZk7YHeHcwvhM3GWoPo72h95VU6nTtaM6TQafedgSEruWk6HNBFA",
  "key29": "zxNtYoYagunaLo5uQKMxdxQq8hwZV5TAQnxGZUcQ7Zr4FZsj2p4mdvHeWVyyxacx5upLpYwVpvzCoczFZSKxceb",
  "key30": "vhvNgGkTj3qr7Za2tQoCjchdUohRjBJXHwFGb9jaQAJ8iYWvphB96VseQ9S1cDTEQEmJ1CaQr89YVpDD4NTHxU7",
  "key31": "2EjhHjCk2hE3faqx9QbmEBocC614GR4A8uSJpEPnMZQfsimUEzceM3oT7ZnBsFrU3gP44YgCFZgezE71iKv4a1H9",
  "key32": "2yohPQeySBsHKjtFRCNLyfwNXLEJavaSR1N2FPVZAbhxiab8i5abLA5K4BXGhsPjC2Uv7QXGLcfDWp2m35m8QCBS",
  "key33": "2BwfJc8kNaTCvTkpndb4MBx1vusEdR77ZRah9RVzNGwjCwoers3xUn3NQYbuNLAA7r3nYtj8osHBy2fsQp9NRzqY",
  "key34": "2HU2CwzcCL6hmj6BjaMyoZyimqzp6eDbsCpiSq7YMWey7vfZC32KDM4JmWMMqGuVLU1wtXa6JyBYdHpi4qvJyZsn",
  "key35": "4x5qv3npRi3jokX8pvpq5AaSAg7Wt4mmK438daGgU2FFgyAzpguPDUyHMWP4TZEzw4Kusipm2dwVzzab6KSc7VeR",
  "key36": "28K13TiFBpyvKNERyekFhJ8wJ57PQFRfjuWyPLYA6U7okJ5xS1QLnvNDT9ur8Gy6D9XEFSb67ANuJeJBHSWnd5q4",
  "key37": "3bFgQPeCxNZjPtWharp2rRbEvFQZurHYdQdAFs7fKoeZofePppJ6BDxyG9KiT5FKa6Pjnushq9iYzrtjkTa6AiBq",
  "key38": "2AaKH9MQfU9ZowwRDps8AQdYArAxB67PGEb4bk8wJJnzTvVDFHsKaJtck5yZBTJ6PythGhUaFvbwjzxMuwjxyTSe",
  "key39": "3H3G4aDhVxPttheKvHMPj6sjdnPWJ1YpJe4b7m1bXfYRNiG4Fmyp1TN6RKunZEV8dLBf1DhQfVDwtWd1TdahFKkr",
  "key40": "K9vXtktMry6x3Xb76NFYhFpxTXFcGwVoUQbim6fsQgBAE2w2baUne6RPKCezp9n5R8HEsaXVQTjR8GccB6Xmk6N",
  "key41": "4TKvmxwQyaLH1Pi4etWDedi9GuR71ZitksJvC7Q4SFsbW7gCrjrq254XLQYRNsgP25hz8qfEK7dbg2vVwRwqMdKb",
  "key42": "3aYLhqzb4ULRwQf71sBvyUJyN8CJVqU37eF3NvScCs1QPTQfqaRLv2RxvmLNb4m2pxht8BfBsMifwu2BJhL7QaC4"
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
