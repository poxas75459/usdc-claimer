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
    "4EbBeBUjgyrLiKjBboLpcJw6rQy59n9fjpRFd1iJe66uVzKf3DXnv88SteJsxcsHRDSzoorbLaBayVUUU9nyy6eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TSvASvC3LtRgLB6hgYBe6jcHtdQ3jxY3bf6Ng6hMKhfG96nZpRdvFF9ygN6QdFzv1z5EE5vjafMmaxjQskTpuq",
  "key1": "5BUNg45jWnpTYKAfA72wvV8VCgZAsQUkDQ97hTgEEfLUYAXYJ93JvPKZGU6ScvWApQ4GSN9HDghntUXu6PQbmbEq",
  "key2": "aoCH3XJSVS54HyRY6XNUzKnDiCyjn1F9n4oEHos1EHRX2adaceqZ37LSnYp5rQ9wE44tA2QY9tQcvosmbCHJVZ2",
  "key3": "4jPvzciZCGR4S91yro6H67cNbo3kJ2J1w59DSSasoEkPowB26rvx1ThcGtCWnUAgHyKXJA4fA4fJ1JkAHJXbkeDh",
  "key4": "2vG7pB7hsTCGLBVk6VY7PiM94oM3e8DYwHyhyqhgtPwtvXNrnpLPQxzyEtTh3csfuphtR6FEnJoBeUCRt6i5iP3K",
  "key5": "xeucrhbwgC7UwENt4mdssLfFwyzSFb7R3nq4w1tTvxKrBigA6nbRjvavunAtGFiQuDFiQfM2ESbs3w76DwuZmqF",
  "key6": "2Wy6uetiGUfpdTLaKaXbeXpsT61CfRuFRiSGZy41264fp8T6n3vb4YhE28xsoFpq6KPYBHzzWjTZYhGBeUY3txDu",
  "key7": "5eoWwCmtTXvwYFZrs8ByZ3JrMyZqSCd1y9LaLgX84N4pp2xrZjXHZr5VkVaRNach7tCFtSwqsYHCBCcdwre72G98",
  "key8": "9yFUfuWsXZod3iRpdBRXgsvU9sr9ipeAHHStdVt9dtfHiUtAf2qaxnPciqxhcAUtwfmVUUN4JnpJzgan7H8kkQB",
  "key9": "34Ck4ff2SzSZpJv2F8yzAPa72Sj2FZnNFhZLbgT3FCpQqkvB9hDEbdNirK4i3DwTbNALa327q233N6x4txcawYLh",
  "key10": "3pmjAhRsdBTEGePHTeQK57ZPSmjQ2Yb3R2VJmXcySdDkjf6UtrSNyKYtqtTWf16PLCoahbkBgCfmCAxnyUrqHL4w",
  "key11": "99RmGuCU612FJf9tkdEaLCWeP4AEYgJbMpME31v2soKdszkiXMeJGtonarBzbP88YwmtaLPLpmnAE3ZbMjXTCg3",
  "key12": "3nsFAR4urhsYE5b3WustdmvbZzm8zN2SdVVPWSjDBWCvqfMAQkBhVYXTX4C8UaXVFgeCneRfepSpcD3kNncz588P",
  "key13": "46NHxjrUEL8icWqQJYQAhJQDmY1Y13JWzopSWm6UfQ26PYg2uGaSJXaEGagHsqbyUTUdMVdhoax9KDMREd8xYueS",
  "key14": "4UCXiXMM9notL9CMGxxqNpvt4HD4UzKRHVzN8i1PdTnX7dtUW2gE3yzESm2b8C6KjZAr3caU76UJP8xABLGnX6Cr",
  "key15": "4KfQM4kxeUQ9anAD3dvKjpZokQ1TG1JPsCvL1YFwmnmCiFaFoidTDXbUt4x9GePM1x6KXKJj5znwazVzAETHGCGm",
  "key16": "kEDymgmPFNQdKzEd1i9iqPCwgpgRkEzHcWgCUhHPYzX5ikQUjTUQh3cKG3sNtBzck1BjJqTHQ8NEwFZnBxuYMYC",
  "key17": "iVbL1MqmTGNE8QopP7a7z1nPc2mdpadxNsZAty1U8avKN5a27X4scaTWPmWJwYFH1nxSg1iHHsENTovw621NqGj",
  "key18": "4pQpyAWfKirgQyhqzt7eiK1UCp7QECrLBdZu88Y7rXTi9dnurh9QusZwPHsBZj1ATrhZRP1ZrWNYNr3FZS8MJoZP",
  "key19": "hJcAejCbDzZLNKkYwxsCg165SDvWwuRyTH6St2Kb65zWJmK7qGCBJYYyZtH7TDqA4BPL4zpFrrFydCCCZXZ2cBh",
  "key20": "4oj9Q8AH44DhqThJ5pzfFFnwK4E8uTBDD7fbcw2n836yYyQN5XRcasGJceBhHQdD8ZBcchZg9epoCzj3Z7irFXSv",
  "key21": "zdYJuP8QtJECw3aEgy2xsTPf5whYz9J9cYqx4K7kfh8V4LucvLLgVT5C9G4zHGBVfCnjDJLTvWTXLqqPcgAYtX6",
  "key22": "Y62ryv6MxeYeZgPs4eiatofgbtTHjuAkQttiCBqxQqj7HioKh7xEWFSMdU23ALyTeAmvPUthzZNAqWPCDHLXDYp",
  "key23": "2zDb5kKxrhdApbAdY38BMr9ra7PKr5DsaV2qT43Pz8zWkFqArB7EvENs8dhbPTguxU7antWi2zbEDjXjRCv7SM1D",
  "key24": "5E9m2eFH1FE9jNGfg9FaP2amhkxj7u7cLw1w51NuPgxfNMEgsBXCUFhoNeqfmGoVdGUEyTVZSYZm6cDhWU4dEKrb",
  "key25": "2ev9a6P7MwXF5VzBa1bdaPybj4BfkBt3mcFbzGy5KC38SEA9iPb2r7AKWyWd3Gid5qoKCArCgXn7AxxjfC2ULHmz",
  "key26": "3xnbnkFhLJu72LvoChPUQHQv4X3XQRuxr8nCvRjsZ4LC4k78yZQ1kMuC5ni2V7YgmXCNf25YCvkjCfdXL9TY4hog",
  "key27": "2e2Wy28U7KzSWBejmCd4vYwG2dAU5UYC1qEDGDpYhxurVuUPEwFnDfyz1g52mvGzhH2rcFHuADPYbAUXAZR95RBg",
  "key28": "5KqG8VcTjqzP813FSQCcBCyxK7rrLYMqU3cTrUZkBZQDNZAPS4cEWmr6ew1Rn72xF8PeD2deT7UQiA4E7qekq498",
  "key29": "4HL7MqtLiJMNKMfxDfQnJDUJ9ygAPmd2Mzoz8LVCBndAY3dqND9NBsTVDPBNSEYQzK8UP7AJPPUw76WURAZEnnCG",
  "key30": "59n5UeVSMWrcwSf9yzTYP5ywtuiVaMyD1FB25rcbN7YvSqHZX8wt6nk9eg3uoYmAMdXhsRQg4Vzx91s2A1VDghso",
  "key31": "SFftLKTCi7g366BNuG2PJGRFtrcmjujynV4XGYYWdgY3BSELUE5kyzaUMQMzKLKLBQKoFwhdc26fDhnxwPCnVr5",
  "key32": "2eaw1bb5p5FVJiLRDYxSKgvDy2Bk2mybpXwTnC1WgRAXBQ8awANz6J9AdxnomxbTcCMdstiScZeFHVQeJYCfpoSp",
  "key33": "S3eXB8BZyqL4NGV9TgEVPP3xqtc4fCaJakp7hUoUdsVBGhZFZaVi43NCmt7JwCwuDwcKBsq4k2qypj8jdw5cRe9",
  "key34": "23UaNXhy1YQYuq2ijLU4EQR1KHGuCyaBK62mRMda2ABVZtRUyctF5eEr5PN1a4iGEqh3ogtgQvbKsH8c2PzuKczn",
  "key35": "4n2inTVRKAtxvPdj15SeSi4gDppkMgo3YUWLej13PEEiUDUZ3DmSrkPtvVMUKfv2wQme3uW3p2S4pKBHmk9UkJsE",
  "key36": "5UEapRDe1ywbqvThzGNM6mSrRPPPHbptS8gsGfz4shiu37aVi5sP7yZM2MCT9anrncsqCxnBQEACESZ5aYvw5idb",
  "key37": "2gYY7yTuXuuk4W9kDed7AA7BPEJc1VY27hDrW2oaCdfAwrqj6TFTricHFDRncX3iUMrTqSYjUTcorg2jDPyKpeWD",
  "key38": "5tjqQLS6Zx6N5dLPGghRtBibbUYWs1AEHRQK3DjBckaz3YiWrA1WGkYxSBBN4s9pKj7hHTnRwKnbuPrEHSF31ruv",
  "key39": "2aNnwi1kTft5CfUobiYwU5xcJ6KhYq6dWkwpneDZ4CDmmQc2J6bDDv1onWpkALAaTeZ29cmeNUQbBdKwktHANsoC"
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
