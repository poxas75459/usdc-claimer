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
    "3bivbAtrX8vT8XoPueARfryxTMLMR2ENbx7tAfihcBipq7YcZuHEXWftN9cfWTaY6g8K6LqDsGpWiZmPCsZ5EUon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCeJhSC4TRXhrHKfv6SEmNhbVvBmwRhmjY23FG9KWW1sxfdK12bTZjgjPmViM9GrkrKdBYT2WtPJykPKRqw7ku1",
  "key1": "5jfzschauGCSFoaApGcbSU29DDLj1Gwxm2CrCiYwxHL248t9wD3arFcZPfk7dr9NiWxNMNAD3RMD3bYu6xU4Y13E",
  "key2": "5kimEViVn2D2W3f8eMyCFg5yKjfTrmrDotseepbELDuVTBkotdLaB9FBCQWweGmCNea41h8EeHdiEsTwv3KwFU8t",
  "key3": "2QmsQNxPtzYeHsgJw1SJae7umegG4EFKQVBCoUDK2i5uHAc55tAXnh4TxuPQKEiqwPrUZR5JRov5HCDyPSjZucif",
  "key4": "8D58R9M5yeBj4tt6jAsDEwYCDakmkZRdLjk8Mw4yatHLHtqT2D7nGjCuba2MKbXEzVnpf4A4ejbyDnQnQQM6xxq",
  "key5": "2AJkc7qoMajLTYbV5wviDvqEWkNZJ3r4YwahNN2vi6Q6ajnQJswD4gxD3XrxoZaQVfyB7XDNF7CUTKuR6WsUMdwp",
  "key6": "4cQfbGLRQFGZj4nFcXox5R98EZgTrHc5gvhtLNEz3uuy2mkXur2NXX1TurF9RY5cMF3EwfEVrT7D9MNLzPq8kg7p",
  "key7": "2Gr7bGDdBBERfKtS814x4kZdTRZ4LFrTT45QREYjSk3bLJzq3HemsQZkkjeGbMBqVs5gztJ2q8Xfe9uMHBPNwUC6",
  "key8": "4AA42icX9Xd9nzT3hmZH7PfyLLMb5Kf4iLi8m7s8RXXpSZUtK8b67YkwoiL6HJweC3wp871WXNDm3KY1xCeJvAhS",
  "key9": "7nsGk1oKMyuG3qXF9avskvhyQKQfD5Evb2UUJHp1ed45z3ej4B3f8zUzuLrF8u4FzG13fxEGNddoHJxf3gzeAaJ",
  "key10": "2W1rV5ZuRrnvtEFKvLCC2S5HgtsR2kjHonGGzbbbJdBs3YbF4WK6jhwRdAHP2AtK8WTU6TCHWSuXaiUPkwXcW7Re",
  "key11": "43TeYgsHJ5AkeTwkDZ9xaHEtiKifdXGWtFXm4KvHuZEv5uUo1Q389axG99K4RaLUC6nKf3yvqMCfVvFPQuME1uCM",
  "key12": "4bc3VgYo1E14xDSwJdbm81ji2raH3xDGgZMTrTMnjYYczk1TJx5aK4uawsKoqHM4tB9eW2gtxFm2QmnBfHwYqdmD",
  "key13": "4Sii9Xv6srKnFiF7iYq9GxgmGD5e8DiYUhKZWJjvE66okjt7jD64RzjQYfGW9bnUUUFMbZazWNi6pfWXT9McUb7R",
  "key14": "yXkmmA5srKTtTMSDFSX2vt65faP1tCizwR6vFXDpogZmeSzFpjNaASJyBqE3jb6H8a18RPRk7AqYgnvFdKMNk35",
  "key15": "5BbM6EQtNe68G9pzLqt8WV5MyuSi57REKkZxLGT43G5rTKpeQ9gJRp5UW9KqSoN1fijLHp5YKEQdAHruuE964h3X",
  "key16": "oX3SGLe3mWKXxuQGA93YkppP3gAjhjQkdAAR9XkLy9Jt2jiJ9NfDJRiPbDoQrhziAhbg55BNqS3X5XTgNTHoiY6",
  "key17": "4KA3VmvxPtnce39gok59ajAkEDDgRNdnVu48pzaqPFkMyKfzqnCJSbxsiBcUt33DWh21kpUokYxb8Br8L8twF9VT",
  "key18": "eC82VJ6wBgYNmkR2BCn5JZpRSz3iMjj1ySL3SZdNFj2fxd8pAvp7crbbFCxHUNs1nSLiNBbqARhf76HMxuJrPFr",
  "key19": "46hpyvQs7P4d3qdMXpR9x3QZnHJdyqJNiF5X7p2pFYxfGpypFN8Lk9s963QqbK5zL6fBBgJb8wp7VfbDvxzCMtKQ",
  "key20": "5SnvmeFwBp82TtWAMVgQ82Lr5TawnoGtg3VXBJq1RZyjrqhYt2tx7KW2hQCVKzVsYeJEAM96QyRHynS8zAATvht",
  "key21": "63dTTJYXMAiw96PBZARLtTKZGq2xiH8oeoVEKy9xPzaG2HFBSBUyT8JBeVy5CmEuw4fuihodcGQW69NYw2U6g4KX",
  "key22": "51xPNEeNrcR3edqcajP37xN4rX2brRq9dCG5FmtBrgXqoSqHqokJqyx2jCF9Red8TzGboETttCVBhuksBcAxfbuq",
  "key23": "LJQ4PfCchtwjBqC9yBFmzocE9dSgca58EfhAuRRT8Aj7W3s44R5q1b4QKMWXFDJD39zZkzN5heiCJAE7WZQEmSC",
  "key24": "2dTMmcLfPZiLusgeqCpHk6KGNf7LdKXCgUEuRxmkJwzqhJ8nh9TmLBAPp8Nu86VtMjs26hBHNNJcF9kqKpDL942z",
  "key25": "4oZWzc9hgmm2iucDpnpivNL2FD8JXNhwKREXXnuxsReyZheDKv3nKBrN5FarD4Yz9tHaa1KuguZj3Yru9HTkKjYG",
  "key26": "2U7fNwrPWUWeCCu8ihNo4QHqDMR7P8wC2fq2FGdVmPTaNc6UsAhZovBQ56pinT7L2nrtJpH6Jk7yEGWUtRX1RjBz",
  "key27": "4DiaEpBZ6YWWrATCfMisKRP9rPjwBMRshrC7MPywTafU4raMFMa5tig2e5nauZJsGpyCJE2PQWDN6e3uR7asbGS8",
  "key28": "DK3yp83gCEQGPBmqZF27d6SV1n8eHQzaN3L5THBsVbQk1wqnFFd35Uv1BYiPRSgE6WkvYjH2igSRg4yS8ehqiF3",
  "key29": "5HP1tvDhUdHvCYzSxDf5Y66nQZZiMFmySjxozgvvgMuJcBwKKzT9NrjrsXGDJxNjkwzp2L8X4DGQHHyuLbkSvfst",
  "key30": "5G9CxiZH7UTVzaZm4NKrDn5FiS77Xh8JA9WWXYRfrKgrcsCX282YCtEqP5xzWdL3HGvomA4YqvWvWZxmkKuCZJM1",
  "key31": "2KUFfy4iWw93VGMeSmvS3pdDwBR8LhW85xw8tx6PA7FRERaB41M1FZKytJF6wTHRQcgb1X3PRtEYcSLLe9DegHAA",
  "key32": "2hhufJVYYFiWZhqWp4pCYb37ggbGPPbi3h9Cr3gvnd9USRGu7erDDP6pzc2P5UpEaNup5CWQoPQu1G5nBm6GWGPp",
  "key33": "654vcrUc4Uj9KRZTqAMCnRRmmHXsrmuvaGbfhqxhFD9TsPxwiGVRBJPXypKqbggFLgUJeVKXi1vUF1WGcDaebip4",
  "key34": "3nKtTp2N3MCjDCXy8Rg5n6wRmZ1nyBpmh7GAG3ceJ1c32kQMPEu6c3xBf4EXEscY7kSNDWQRkxU3GB9CcSyWGMTf",
  "key35": "3mp1ahthda8F5KfFA7iWZjVU88JNmeULYF14YygPhb8jMb3QgrdgjK8ZgSF8fmrSJbZaxU8DL928P4QkFWNzuHGy",
  "key36": "5a7goufJNp9NhpUDiKLSgb66EYJKkTq1g14HV72bgrYdKZWv2mU4wevtcedJNtJfaYEcDHgeuz1qgPXfaKx9hRvx"
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
