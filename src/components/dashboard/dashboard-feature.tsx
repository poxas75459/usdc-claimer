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
    "5qQ7rySbiXS88hzVtFGY4zPiGmyZ322rMhHUUANS7z7Et8eQeQRAW66BYcsKM87pYC5hxfMV3xvCFQKx2BY3sJUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LwbGLQ5T7Nik6rMRNTWafY1SzGBoTL1WBpJzBMJmK7vBy4UaYwvUTnJkPXRy2W8B5Jsc4yML6g2BDRNpiGAs2YF",
  "key1": "aDCBdZ2zdFw6kj9FYk9ZvtZDuhM1mDoKWbZJZpUMp6JaGfyDGbcvYxBs7wD3qLBtEM4xymXAMQcczYrZdkmv7Pi",
  "key2": "Y8A3EQDmDMr6BzL6BxRtR7qX5HZPRM2hwxKrB59eRrKt47fHY63PFybTyDEGXF8WHjDiDZecXmUdGoU5HLgDE5h",
  "key3": "5WjEgJm12eBzmoX1vejGN3YoQFaiN9ZEXjZM5uYiwG1qmRHckPdufnAxz6AUDTmQE4r5vhQNgbFrETuuBbmC3vu6",
  "key4": "5BZt7NW2BQHesqhVY5pcQm6QwtzW5FGEL9HYvLNJhrYcRe7D8Cmo4GqccLJfDaehJHsVRyc9pufVeYFJ7tN1UypS",
  "key5": "24pE9nk5BnNcFyMSaDVtJiLhJBxcU2NoX3A2FvtCp6NKaj2wwGKqqL1SYNsj4njgTrhHdKPGxKj8zMkaefn2YbWq",
  "key6": "MUPwRM6vNnVGHKTLLj7ePQcVcW9mEAHQD3ZNBEWRrFCBBMhe7p5RKPgniLmYtNFEkRi8DNFLi5fZF6DCDJ98tNU",
  "key7": "4ZUdR9FsyjwJFYdPmpPF1nEHKdPr3WkxqDEDRaeBjW42FrTXfiFhYAYXXg2Nx9DNtDh4fmVbUJxi512Y2e9NxV96",
  "key8": "MiCJkS5GPhBJR1NX2N7jWhH3JzM4sGjTQd6KxeUmVARrA1hNtZ6LSdZVaEs7hzAijUiqEZ6SP1eqVZeZNeRAUrA",
  "key9": "2jFTKaigf5AZB9Y174FD5NdxBWTWic1etfejMgAdNu6ZcsmppWTeQ8WqWmiv7CcJro7BWA9zpq9H7Ftm31qDNLvk",
  "key10": "CJA4A3uv3xbjV4XWBRgQ9Eb8nJb1KSKczMMTVyszu6HZnf9fUHcTNbsRwib4Vq3XNJjvPm7XNf3gWCPYTKN4KFY",
  "key11": "pS3LYfWGcEHaG8jS4Aoq6vAoXv7M9zq7GiVstjUVDX3FUY2BivLiP7hbBeB6A3FLMRuRUchrtkP4vQgG1tUJR7E",
  "key12": "2FV4rxipvcHDL493GwYb7NcKoZjBjPFMuapz7Cy7u8DVpK4fk2nuzK8cqgKu4hYmz4VGY46EjjrAgZuFBgsbn6iY",
  "key13": "5hVdeaj88kiKTGBZdBemC42wrJnTP3GgffxZJJpk3ZPatLEG8NZZKsdCkNn6U5fTCKybLttmsAMnA5dGcemSqTzu",
  "key14": "3KT3zUrY18hBQB4vWHUW3WEcmhfBA7ux6ow1NRuuxzRtm4psYcQ3V1EUHUoFLApKNjfJJDkbgCVZ2MGoaQEw73z6",
  "key15": "5puiiKS1jHZzZoMQiJfbTaCYBvXD8DyHVDWz8xBXTY1CjT6GkvGqKudzYSitYt3WoAfwuHmA663Sse8N83xyReT7",
  "key16": "2f24Mt3ipwTvuCGGZM3Uqauq4N1QE6QGppcrjn5KUZjniLYKD4Rs4EGf7ayNQTxtRuB3g46fxheDLEsJ6enbK6nm",
  "key17": "3XGrFpzaTVd2YWXBg6ePjmNEVhLBEsh3KYnXKP5kaaP9oD7rKhNETWM5DXLpmdmjniG2zhA4ChvUnGqKCgnwdVf5",
  "key18": "5KD7AQNVuhzeUSnx1pnfdhs5czeqWzUuK5iRxic2t4n1R1DoXQ5PMNPizzVuog9kfCmiZBscurwd6QXJKeaowMfn",
  "key19": "3xSGgvtWr1CJxHicNu2ic1D1TGpBxfozZw4qrdTDPrXEHJQHR6HzQFpDdpJyFSvt3L6ZDcHqtH7wKLxw8JKZCDnR",
  "key20": "5R23oh2XkK94hkbki3Y1ERVVHgcw6byBR1pxcLgvpfFnQpzysAGY9ziLcucNDAZUjhSq8NX53LjEhjc11Hzon6bT",
  "key21": "53xPL6dUmjSB1xE81i9UmwqYEGRhDxkUp5QQFjgubc6hhBQmqRmq74BQrubPCVxvZ5Fs8dASoFMyzicvHprBWrf8",
  "key22": "fdFnuaoCmL98egXAr3arobDdFZ473LZTsMaQA7NyS3ht9h4qMzTjaXWcAkmJToa7mDfn1NxyXmxDWJkRWbvUwBd",
  "key23": "R2p7SjZg5nbEZmwfnGPzwkwtSTxXkC4UoGawod6HBefcTP7NMHr86Bp1oj8k4D2JN5z4vfud1bMEZM1xoiEYaZn",
  "key24": "3PTXnVq566EwRwgZYJKW2yP5dED3U3BqTA3FmYNd9yyMs4cq62z7cqNTM7yu5d8soS3s9VyAtPA89fLXwZUpFMBg",
  "key25": "2P7tjiM64TKu6X6xgZyGkUvVkDP2uKohShvsPHb1NRJtPiM1qSrWJba3LaEqaiiHHWg8GPrzhaQKMeHDvh3VHqq2",
  "key26": "5ZAicebTpDq83WT4xAjg6nQ9cj59dawh8VMgHQzKR743FaiCM1jVGi5jgKJRZiwcUbD2bDq4U5HCMDvNgyQsZoMg",
  "key27": "2T6hC9ffHqccrqhja1hReP7DU4kLbJDuTcy5JSoDpq3ukyn4r5tUxxq4D3Nqu17Gbi4auXs13oyu3Qr8GbriKfDM",
  "key28": "3wpkDNNxzx62N4GHLUJdSY3SxrCb7xibauqzGGUUhcceMgokcj3m4z3bpXMS3hx5iD7G14vhc6qK7dSqwdbRBBSX",
  "key29": "o81c5CcScVJxhUPPHGhYQsdZqoTJZzzj64bvJBJ15YNJfr57vtD1EG7Wrw4s1acMpwWc6YB4aX6RMTDivcyikkS",
  "key30": "2SUJgKeBupxsWqeeF4qXTvTWiVx2pUbghGRbeXYCpirgoS4TZtw67rdvxi5TJjuJnjytznYACZYwVp5QJ81iJv4b",
  "key31": "2vhGhzFvuKTRHoqLKPnPtpHUC5RYL6BLJLvdqi5eNzHmjbDairVxNWmKKUVcfMHC6sWTHFM47q5wyr5vrzN9g1Cu",
  "key32": "FMEfC9jvJiPBmLjfGt2J2u8mJRFd8v5PAQr2aajkAGTgHFSk4oMq8WXna89JdrEQTHzD2qPRUJs9HT2jQLs4vYj",
  "key33": "613yc1gVxizWDPJLM6M57bCcJ6rBtkTxaxmjYCsdaWiJGvqkKphPTADsDR1bvwzghXTkan8sQgRGqQMBj5VphUPe",
  "key34": "4xi1hFV5jxg75NZmdcAJp8kVLyg7u5FMV2KD3srsCM45Fx6YPoSYTMDJf4E1hV9Dck4MquJ2kKsCYfWfyAYk1ABy",
  "key35": "inkK2vjKghyco5h5cdxeEjwfi1JHXgA6xACkfyEmTcWekhkY5XA8KcEZq3F48A9FRQ3S79LYVQzKhMmTZUB34jq",
  "key36": "54oGzEvkNg5CqU3AnDghTWgac1S9M8au2LUeCYRqQAyGs8kgHr9WJq5Y1dpJpr6gu2H7oQRjCaXPgpzvTYFTjJBW",
  "key37": "5V7p619jNCBgnyBGk8YtHCqXMEodcz7wxxSNBok6bmBVxqztZMt8NzAysTTwfnxpfc3gvHcNC7prMEpvFsiQxWU",
  "key38": "2ZJcGPCKcfpcR43tiiVZrNgxBwg7obdjy9A26NZg8PBoZ8Dc7Vu4DcJizU4HS9yuPu5VmbL3ahoQyTgQ6VoGud4U",
  "key39": "5sSFbjy9cNzBDfTa2fjU9Q56APEE4a8eKPL7MmvemPJGrVL4LWwH5WDGbcaPcaiVSJsevhA5E4AvhWk4QzEkGZ3A",
  "key40": "3zDwycMYe4YjUXFGRFuk3QQrGyxfzzrX6ntpnfZEs6AkJpr5NMnJAhK1xayAAUqYVGKf49D8qhq6GWkrGCf2zqBg"
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
