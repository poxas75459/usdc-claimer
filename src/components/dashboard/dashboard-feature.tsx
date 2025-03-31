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
    "5gJ2a9xUv4hwvEq4cjuWqKivu4BrkCqnABGxzZjyWNTXTVmHBtCqyR67Me3sJXhLm5afdYrGP5MqazeaSAXkte8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPmDiwH6LxgeZ8xcSb69vrDpJ8eeED3xCMYsrR3w63kzDHVs1XouwmXXxwy8SSdP93Q96iMy34sSero7V2KMo6F",
  "key1": "ywLaYoJPqjJYf2p7tzu2i4nzjNBKmjPNhcYHYqh3NuyYZ9YfRZRbmPXPUeKfuF8P3F1MRjtJQ4aZYnnhHTtrJVv",
  "key2": "3W3ALstArnZRa5P6MwdJhqMv8LYL7ypp1XYHXfWpqBknxjYrpn7xs6ZHrRgePfjVbB57u1sRyL6A24QvTrm662QB",
  "key3": "3C8Dcxgz9NiWtDxKT6Z95rHYsXVmwLy98RAtST5Q3SmcXn4d3UpG9hEU6GhZ4cwTYMQfRrzkJYg5FsLKZe9aZTSW",
  "key4": "2C24yz41hZ5kP474T1TBPXxc8bbiTfgULxpSqyBvUJmhLN6ZNRyGNtGNF235stNTtZQ3FpgpoL6W1fHZ2GrgYNvR",
  "key5": "3aG7prTvv84Vf5NuemYkzZd6j6u85kfFDrk8cUU2GnJQcU7TbXgGJUtwzeZhXEAidoDrbrropoQxuhfGwZ2Btjis",
  "key6": "mLSmx9B9aKw4mkqtcD3rdR9GhMLyJvyUgZ4ChuYQ3Hs6MkUzszm3tfznCsf2Cvnbt2gJCuwoQWdS8CBKiTdnyYm",
  "key7": "39PsTwyXkQJYC6xr4hjaSwJqAvdhQonHW4LrJ7Yu1vbhYDvyyAj1RJQGcdhejndev7T2cgqf4vVXDcFPhx5XpyTw",
  "key8": "3F6gGfPGfzRzXTEqLwMDvyhcKCwW2b9rTVKTcNbHYS2S5xm3gh1iWT9J3wXLimfSYDwDhpexhqxCqgn3z5ruGtfB",
  "key9": "2EfqWcvYPPF1JUqamgNx1DaoyNyK5Xv9xCvauWUPFhReApZk41252pLFVFXex8M1ChLvV3Hywk3ZREYjMJ5NRga1",
  "key10": "3v9Gbivu9DXcVNGJmfSrY7iwyZbW8mBgCACiMa4NN9VYfsbzRpThwoKGxERFuGSB7N7uchDE8MSLEkBKCgSNbTUc",
  "key11": "4gEk95dgRk5j9wviPhYZofviX9FWeKX4XgFNB6bVXVLaiXHXnEy6XAxS2j9KkCR6dDvuSKVwztEDp8DQ9mbgcpGr",
  "key12": "TWBuhjXLfau9rFNFhRWHdYzXwKZobRdma8W1UxTFsMv43HLF4oWqTSeeG2cHN1sVQpM4Nvo858RfwhBJpfkXwC2",
  "key13": "4hzP4amfFcVaXDarBj5TZPrEKSLasXeDSsMBQBNCAEYMJ3aEBv7G15m2xdUg6kByNRmGaqjd2NLYf3M6MxP5AYXq",
  "key14": "36usvKMCxpVtGQ7D5drRLSJuJrnB4r78JTcv7fhZRLdX8eoAfnet7yiZEKJEF1AtrfGW7K8U1EHpC9qXDUPaUzs5",
  "key15": "5vaVYLM1WcfwaCynoW2wCX2idzort5QjiQP7BdoUDKrFgzK3Y39LQjnRiGxuoHNnR7ZWjhGH8xWvE3pYdLseYuTY",
  "key16": "5J9puv93Bpnv9uShHPMZXg2LjtHDzRjYpasmLUgii8LmQCzAeyi1XcLUCBiksjHn6zMeNwJaQgDZU7fonYjDEt5F",
  "key17": "2uP8zUkLkJSCKxesBZedBSXqkLym6NYqs3bWcidWdfZbygSfEtvEyRCN62DGDzQrwwgDeEbaB99vhkK5aq9Bbb66",
  "key18": "2SaqMAbibtPWrHwPuHvyG3ohZueVnPawHrpQ5f9zboYEVceWLEyVtjdeTM9tz3rkNMHQn9F6GMHqhPi8zKuY8iAs",
  "key19": "66S6zm3kTkVJjP95tciTvb1bEeZexLXb7zDFpwHyban4QnjpY9L4hfGiPQayAZ7oMdGjTmEfXtFWCkXy5Z95114E",
  "key20": "2uHFk5u2ofqKSbSLPZhyVXSV1G78gLcWGZt8anobbHFN8aEJrKQFLReitnCvHrLFYoQd8AGdMtRuA54CNahziRsB",
  "key21": "5aobaDiv3V1WUoPJwgMasryH4BGaD8yeRdW9W14xzeoPhoAB7Lt4Cuqzs1qcVDeS6HmW4DyauwcSn4zzKRoxuW9t",
  "key22": "2yZe8s4aMto4PVPwq6862z8WVZRHjLpaQ2Cyw1cvdETH74ZzYtFuq8C93wCNMGKqMRChUguUgfQPSt6apR7msXSV",
  "key23": "2N6t9cNf2Y2khyPLWJrdGAX77RTYCMki2eh5iuccMxw3aSf5zhYiZu22hAfantfM6uixKprxPiVUVaD4xebXPLsS",
  "key24": "55EANFCumDKw4Wez8N6FKDqsTehYbYcxW8ZKmqWidxa3ndG9mYhjNaoDfce89o6X4tczDf7ZRvgomJyJCc33gssi",
  "key25": "CD3LgYH4rXdLe6b1HKLTr9Qhkvtdxq8NEJVsVpVQeG4aZGMoNSFcMyTJHjwageJuPeRT5Ar7J5tSmctjdtzz5WW",
  "key26": "2LnaL2tWEbnxwhh1w6mqddSfSWtAoAUb3hhfgwTWMrgjTbLht7r6wRHUBgj2GNZRJt8uu2V7GYP2ejnPAfpYC8QU",
  "key27": "2nFmUmBGsf4DBx2PxWeqwDBJpmQsgC5EqW4YAsJiD4YfXzvLouLnkSqizoi7zKzX7tLmbyn3ARp4dPzbj5fLTN7W",
  "key28": "3BSE3DKBmqWQG9Z6mBrappdeCZB8UJLwCZB3qwKRM3tyVDxyuoipXXCqUSiNqjkYqU4WsBo45hVwNZhD2J8m9Mg8",
  "key29": "2x7KxxkYja4JScx8pa2d82WY5YGmeE8YkGPa6Y1H2QRZyDzCYow1djNZ9EfLWWdVDvzc8KYS9SLKrGThf1wDJ7jW",
  "key30": "4c83fntKNdREFxtvkJ3pG3qaLnut8DW4WnrEuFWjo82HTnCAdHzrXDENWv2b6kZEZQAzGEd3dpsb8eKjN1UYwwNc",
  "key31": "5kDX6ep1tJ98AQ5yBvUNAnPMKUdkMZYxtg3DhyCbutPwQ5tkmW1Ky5b7aTgpf3kp1YZomca1rmxzej9xLqCMC3md",
  "key32": "svStXWdkM4Ea2zyv4PRCM1ArGbfEUHR29iRrnHUUtBhpLMDRHaxrP9cBQ9iw132X398h6XrQkKgJBTQ7fm6w21x",
  "key33": "5vbisfCLzwXGWa7dorVetRhTk5WCCzfCWHvfMrTpBPked7QAGyZp6z8YpqLkkFSqJ89YshwZ7hh5gCQfsSRcspcH",
  "key34": "3uh5VztGSAZ7rZMRbjnqGCBcsRdKoaUaDemRh81o9dC74pJfCDs6X19mfqCJtn1YbEgs4GBTvSG27Q2Thj5cKNTZ",
  "key35": "64ryRZtaZvXgMBAzicaFxD8Jd1yf6C5WUt11dXauBt3JbVGhY9ybAKFDBoMUcrNdLXpbZD7tkq2FnTiazxqFNdxR",
  "key36": "3SZ6JzeHjav6E3AfyKDmzqqFiN63fHAvXFgCbtUMpsaHjY9yirZcJ2ro9XPHJggt7oPU8pxWgCqzewc5R4Qf8Ajq",
  "key37": "jLhLnbiRGgScHCGj29xRNCi7iSfb8QtWMdqgPty1462vGP9UDGeyLGmi2aRQRYkFhhrFozCj5W8m4PNcptSEmN3",
  "key38": "5qYzRu64LoRFjT1aS5gd6H4B8C4vQmfJVxbSdo9THHJZmeWbrxCRfupDn9VbfZQAkkGkfmVL9v5vHR3xJN659845"
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
