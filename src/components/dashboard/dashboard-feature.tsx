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
    "2AdnkARETBe3Wst5Pyzb164ErYR1SXwc7zbiL2f7XhoiZVbx42Fzqm5uMc9gQeoZ7xRjYFQJ13eXE4Fo1yzdAoz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "doURTHQef46kf5zZzw1cqcByEpsRffwDK32iXDThSBQkBegv9uZWiiXFEMNXm5MXWqkuhxSYdmeYEKn6pCCMAQb",
  "key1": "4wpnfj2xvRuKKGk2FiUYMKH9MfLG83ZXREGcFdrH7hPWitcoiC4sQ24Be7QtQkWwPaqaLy4yiDsAT3gntCDhbZdK",
  "key2": "4toKxMixp7cbgwx3URAd49JzM5pYXE2phc2zmN3EUZKCi9whziwS3kuZmaaiLzWTVvgrkVsai2SGyjWn52efkx3C",
  "key3": "3jmhUvhFnLBWZ2xfZtF7Vo4xAGoc3aAsq4Avr9szD7TmoKxucVJ2endwrrqE78SvYTFqdffZjzQXDacPfL8uxL7e",
  "key4": "NoGWCJdXJctZbMHWLNfULc1TQ55wQ3wRiRYgDekYKD45KBwtnUvgyJKtEbz32Mm7UVfAY46692d1vDxeAXqvBZy",
  "key5": "gx4urco5UBrzQiHbY27nQWfQ6zzFQYgTuiwNASwMKaTVNBCivkWe8BPtbVjGkaj5SoQJLBzuRnw4oeWqCu53SiF",
  "key6": "4FBZ2fjgqbXLU6o6AkKteu6HYwMkYdPx7zXjMFzzKYzLNtuNKMiHKdhiiWWrdx5XqEEUDxGtgz13kvVGQmLrz81G",
  "key7": "4e1jQjLieB31tC7uYjXyd72FkaYQSLjKQdVbuevbTmpCFJX5DZRQNw1a1zGFjV5Y4FJDSNsHEbdNiqXrpdvxeHUg",
  "key8": "5p1d85mwGn5wZUjsyQM6mCB6QaM7zVcm8wY9JVgNpMWoMKZDqBVyMj79GB1Ts35uEiz9oXxiHCBeEHTT6pyprvTd",
  "key9": "3wkMaixrvZ2U8m5AQ6FhotkH8UCWmBpoqfycmkKBCPWmca4JmYDVc8x2yJDqugAw56yFWbEPpkfbrrbQTFiZ1zjE",
  "key10": "5yX3qzDX1P8xwWs7RT1JYqWwparzmCLPW4R8CEAs9F4GsQHDQGmU9jdAbvwfUV5pCVdh6KJYVuKj9ZGHgFTQNmjH",
  "key11": "5R19X3nGYKeMSFwrXWP9SvMB6dhEScxb6SjdZpjsKRqrQBjn7Uc743UTw7c9AtjYTGNuEsKPzvdVzAkBdYWH5RZh",
  "key12": "3sZDCSHtTLhgfo6gnaMr7Mu1yJyRRW99jjJjGgGiK9VrNmbyfdw5aghb1vm7zQND1uD5uYYkAwrNzw9wdvsbWHSC",
  "key13": "5e4h3WJNmXs7LGcX9xj6uqLqd7xnw1GQwgV1N21F5L7nurZiqn5m3PnwEdnsjzhMsmjCc5JNyVpTfGe7JPz7LMC8",
  "key14": "5wMt4cYEwer42z2q7UBLS9ACuYFQtpP4WBKKgFF6VS69BV1HxvDFEbrSnoxmMnmM9P4Cm4rwHJVziig6UrPJKrS1",
  "key15": "SDVFaH5iR1oVXy6ottmmb54Tb3m3qHQCUnHfzfMgUWYfyKZQESR7jBsUjrppq3NoWkKrnXBVayR8V1dCdZ6kjmm",
  "key16": "2c8UtCT1cFshZH3Ef9BSVdxhAnTP8cSG8buLXvcPeTDH6D5AtGE9yt26RW7yy3vj1RAVy8rQUJ5mvERYm46jBRAm",
  "key17": "Hy79xnkBtpiKH7YQtThHmSoAghTvp2KzNrqPnqvtGSpGTksYm8BLkDGAvAqvjisGs5KjTUPGVRGWudr12PPdEgu",
  "key18": "5VhwsNkBpUQAm7QLKAWdb7SnEwzPSALcvpPoUYtwn5hUGT4DxA24n5R2j7zu9GX7L6RUK6kyswDNWXJ29kMbc583",
  "key19": "2wA3Vn9v2fFgjBAuKpaJQufR6gqfPHDhEADM8mhAT8uno9XmdpP5Py34nGkFvb8P68SQ9fWQGWYa5ExPBxcFHFnq",
  "key20": "31WsFjFtQhgqksupuFNshFCSDM72Sbyag6DFxhs1UxhVQRfGEbW89Z1qdd3uSCSSNTJ6AgFxypXcWEcNhjm2eYFt",
  "key21": "3hySfhx9ot1sQzBQdTr2aPZKgsx9E7f7EYz45GhEp5aVvsuSCWZtCK2ofdjnt1rJj1fdTp3kQp3vaXfTvwY7gYM3",
  "key22": "3F8kKfwvLRnxTUnq6P5p59Cx2XJNB2ZnZYv9ziKVMfieCt9MDycxwKyKvsNoyBPfWAJ2HGMQDgbNCSnArf44TKSi",
  "key23": "3FXYYMi76LVX2MjRBXLdmh14rvz2Mbs5P3BmXgAB5fBsoFVXcgXqNGVcQkJgyKLorMdZeHNVGameRBJ4u8vfLjU4",
  "key24": "5oyXJLPy15QgHcewVAfbmhFXiHLgtfTWKKgLX6pYjuZswC1f2asnEq1Y1a1eHK2oYeD86zJr3sLNxo9sd62mPEwB",
  "key25": "4yn9NzHXNq8Fhg4cX7TYqKf1W8ehkn37sg8SBG9GLZNdPsLw7xoiWRihXFpEEbW16Fv9vk2fYHAtm76Vrmv44Nvi",
  "key26": "5rH6o7Zn7G23rGBurUc9rP5cqiUXGhNT8CjxtA3mGpy9Bg7cfktNfJ3gaEF8cwB6UzjsUR9DqiY9nmXPfaJ1DfFB",
  "key27": "3yJxgJvbwoVfPhyzSNZ8NVnJGaxMkjr2cXXQCSyWahB5q7cwsgXRqnaKi4N4FjPfMmELzawfu17B1ZoReYcnwwNm"
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
