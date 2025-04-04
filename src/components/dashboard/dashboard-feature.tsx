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
    "4bskFtPkdzmcobbYMbJebDkQMsh6u8pLftFjuR7hnXRrY8wAqg9S17v1BZSG7L8iwBWHK4GJvTPWoSQutUpAUz4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iRLVZ1zCeWUVcyJsb78ThHXh6eVEGqASe3shUZpkm61JnQeCBk5XPnZEgMRXEHpFaa9hf3zh19EZASRYBJbS269",
  "key1": "5iAXssrJpe7feqjBUAKpHFBP461uqPFq66XHRfeF6t3QykPjGmFA45JzXNoPDPDuYRZeY6ciJgqTWQ2Nz3s2R9Z2",
  "key2": "3TuNqw2D8s18DgAyWKcUkz9n1DHx8FKTow5jtobAy18fQeXeXthwtf9eC1ugs8CbcMUiEG23Uy6yVcgNedq7yLsT",
  "key3": "ZFz2mDVCGXkb83o6Skh2yGNQzTGTVYX55qYuWNzxucyMsZ3XwUqXLVHvznqXsSnreWdzGSyGekKcWyXrBGNTwmz",
  "key4": "3ieVVjwoKRnyJEa78Q4gPJRJrmgmY6RDmiYCJmyop8PSUMVUVYpzGP6rR2mUFt1Eq1JkCRC2ZcdpYrRZfDP84Tew",
  "key5": "2YRyEr3DUjC2AVaqUgz9q2WvGTKRiBy7gz1UcAqmAJHhRbj1EY2fxRoYQKfa7rD5B1Shuh6SGPaxXsc1GQrfcsoh",
  "key6": "6ZbQz1sW4FktnrMHnNt6KkT3QvvhhxANZ5h73npMMChuPvZrAL7uBRzas87FYkLufhitLFrc4Mnnq4Q5RwjqjUr",
  "key7": "5c5ALM32rk4GQghb4dtY3BhroU2qBotEmp9VpAANHdJV39N9DoF15ZGAgmYJvEgpLHRnypaSszYSneJC4mgB8qu1",
  "key8": "4m4QqdnkqVrvpJ5H51kVvb2N6w8HwLTjDJtPAbzXgoVm1a5r62NAbuGdtLLhpaaXo1CpCf5inpgVQKqX6FBdEx8u",
  "key9": "2AyGzmHDzxLi5hdN7ZYbPzwVb37kmU6sHC69qWfg8Y6uJNoCMst6hw4S4BfSnNzCi9vvrzuUru8xWxtdWeKkgNCG",
  "key10": "5FpKvcW7qpizA5wuxvviHendhYeefdS9CfqyXWTnupsi9GqsXWCBfGG1zCz98ahYBhAauP3kmx2iUZbCWUCx7AH",
  "key11": "gjC4k7ZA3SQRiCmS97jSbRXLTYPEsKsQoKu9BNQdB8XxoBhzHx62AAC3dKRTyFqfnnqBwX32bzwgLtCZeBb4nxY",
  "key12": "3tDAHCG4wCTgc2tEFErw6wGLWWwFE8ojWXk3gXL2Vfgjta2YZGJsKwLmRWfM7qMrkkYKMJ5Wqs5VdfqHGGdkX5Ut",
  "key13": "2xXQzMwWMsEeDPpppSS8Q29TeKrTyRjUuiLfwTn9mTXVXQPNfeAsvM5AW55jN21CdtvENrREjLfHn937nmLag2C5",
  "key14": "xatC2hq4UnBp5P5sD4ycgonegovcv4BxiVZjA6pAzRRZDy4ZyXAyexxEw56jU4PMgQU4ajoK9mWEaNpFQxizk28",
  "key15": "5Lt1RFniCg8R9aMGxU6uYLvSrkiL1XgHfFzd9favneBxAJz1vZerhZNRymJFYxC8n52gdYA1erXHuihDLbrSeWB7",
  "key16": "5Yb5biiPgH8J9XMFfqSeKhiuyHpzESfgH8EXYdk63oAUCvR1AF55kYT8YYHDYf7aacGBeP1xyAnN6gpHzhHKNiPf",
  "key17": "45QWhR5K8zkLjuNKhQew16RAwanoBFw34QBQGFjpmGBYTwhumAxrckSKK4yn6F6ki4xzYmY4mr7phzcAW2AE6d4b",
  "key18": "2SwYauvPzj8XpDVAZuGEqAnBcukCZf73hLYW7kLKH148R2SMXu89aovJyebydnhcPecwVTHZ7aaEFvSoANEjc4cu",
  "key19": "5oxqS3AY4wZ2g8o4Tay1Eo2zEvPaKbLuszFrkxKBGn6nxzn1qcbBgye28o9Lkc5e4k8JxW9fMUkzKnsXT9Uo4Y8G",
  "key20": "BdVMWoqK3uzzGGRSmrYVzvZT5GGa1bPcYCqseW94mYC76TcMapQdfPSGNasFn3JuHoEeD12aRBM2Rvm59stpoyC",
  "key21": "vrtbrrgb1PyNkxvHvm2LMNvbsYZ7sZF38X5AYbj2anpqyxNDAZ5bTzc9kB1RJwsL8WDVCqWjXb5AfM8v4fDwPj4",
  "key22": "53vPWxCFAoAVakuu3uLeNPuEx6BG9Yy97d3vgwuLaL1W3JEQr4xRYXN5BKHpBBkygtpK6uf363zXJHzYGqCp2M9Y",
  "key23": "5pEc5L9h6gJiFMhyNpz7fB3TVHFw75WakK3wRpFiyTG2984rgEoLygjMAinNh6JxkkBUfE1YfAqh33hoeAvAxV63",
  "key24": "662fkVKsRyM6uFcSt5D6cFLrWRttU54S5ZQBk1aa3uNHL4wcrBHAmPURXnYXr59bBJhN1fJfg2yFEC3788T8APyt",
  "key25": "67QStPq3ujF9X13bTdTTGQZV1m78swjpLLMiGU1AMXxMaKUmk5MopmTrDQpZXXk9D81QmjSzp1NS5nFxddvynEqm",
  "key26": "L7cxenda3eAPTtZn47m9umHpYJHttz4qyhnCZG3LZ275sGw9D2YWGaNUtEKMJ91pnuoZ3wDXcAEsiVQTpHtse3d",
  "key27": "5Lf3gEkM2fzn7z6Fn9mBXMryAtKMTRyjhLq3acXioQZj5j5qVns5ntqGURweGYJkXLz6hMTkiDVnq1WNugW98j1c",
  "key28": "3rnqx2fXP5su34nfnNbSWxuyaex2B9vjQQ1Ek4gZtUk7eFbJnY7ixzrAjpLbFZt6G7XW9e6Tb9CPYq7CqexCVtbv",
  "key29": "4RqRitJ2AWqmL4VnEbEBPCKvDBo6QQs7921HaJVUGTARkD3PSgLp8ecx9z7piTZk8r2YtfKzT3ZAo7zXNcLjN1k3",
  "key30": "2jsFNwGfmq2PmEnvk3XRpWPYciuzSyXuf3kfukHb5UwCmx7pY7V45MCd4UnTU5tzW7fWSdmzVV2kpGbtpbTEBkbz",
  "key31": "2cw8WAjnxkUeB6UwTzkvHRwyvi2JuxWCEHRvvqAwSKQEe1SM93obvz9TMy25A6qGn29fE8SdvYbYXoze3GzA1dY9",
  "key32": "2k1jV4w4e9tCy4nhTUozwcjcKE1DZETSWUTjZytSfPMuesfvVhEXFex2xWYN4YFGm7bRWQW19DpZT4Kob8eJx8Xr",
  "key33": "DbR4X1n34Lqzx7wSwHwzZvosQKoUboB39Sjx4ryVWa9doxC9172Yk7JnPkn5LfAVFrkVDJ9QpxTfmujtHrGYd8J",
  "key34": "XaK19vRTweg3V5QDPEDDkcMMhtZut7bsPjCwQVe6vFHhGs9eN7vqn8PTaZyb7boE3YDk4dFUURUy3C3hPK9SHJN",
  "key35": "5FYN1pmPQzhZVdZjASuvbqiixX7ejNyg9jAhDEojJpGQkZDT8Y1KLVbBEHp8jkE5ZvzA567nvcHrLpR51wrP342x",
  "key36": "AHYLETKHSQRqzNgkbtMf2KhGwkrfY7Lj92AkW7bJyQQkNMrQ2KjdJLBXH6tpbnPHYf9NzqyHrfLcB4VBQLuEwqp",
  "key37": "3PnbZFHYqCsQ258jrwnxKeTPRCmvv41cFULYY2cLSGdgeYSYCqwEes9arzkn36WMouF2tDb9tcFjhvKTyGqYY3DR",
  "key38": "siXLHXAM1Y4cLjVZTXrxDE1vNmLa4Q6kgzaNP3mVb5fuP1tZbV2zWPSR22qvHqVPbPg4DJarwudqURnxm6URkV3",
  "key39": "7Cgm9RfgdUbzzbBnnVMxfpKMoj4htsDUE9Zr3t198Dx9PQfUss6N4u3fXvr7uYdpSxapjg8vcufU4qaHWAHsHYh",
  "key40": "9oPz6ABFtzRbPJQz4ZzwM5JqDBgiKKsDvyE3q6gum3ebACKLXFndrFPqkXW2wSRxutVuT8LTaodSZMJgVrAnqW4",
  "key41": "4spvzWwN5nWyadBirrqmkadXpVkTozmiwQ744F6Edfdm7Paoy3mFXucfQjVqrqpLzFeZVZ6zPrhi6mEHsC7c8ZGP",
  "key42": "49t5cmzZoPnrFqFGP5JiGwbnkuiL7XEK9MyX4yD1BdSWShTeAayzeM6RGtMEVuN3LuKkxg5U7VWAAdLNyA7cSaYc",
  "key43": "t1S1FP41dYAzpCmTqUtdMsXXT9diBshjh9Pvp84hSmvq33y1suZoDjjJ4HMGLmuy4yF4WffJY8DipFsCSkQLaDG"
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
