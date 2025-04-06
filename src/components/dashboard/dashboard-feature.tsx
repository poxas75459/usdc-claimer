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
    "616Ss3NmwGwQg8Xb7FWv3RQWTSfnz9SyvxKTEJYRdTqeMnR9xZfRba9Qr5NqZvWK9m9mZNRc3KHyti3vYt2jPWnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8jZqYAgs3HJqhfW3Ba9EyuEC2AX93S8AX5UPJtQVXpdXMSK8aRavieY19nubzacrYRUKzXNTXQzgbmkLQ7Bbzc",
  "key1": "5bcKs3mdSBTGttttsy8jV34m3zxFnvTCQJyinMCVzM9HXrwgyyFausCUgwCLb6FyPymKqCxwQBue5eYKvhNrthGZ",
  "key2": "2cLCFyYfWxkYYo4b4MbZUVnT9GN64Da1ifePPUaZCg71ESysMjjmfjuBzLwzWzGoBv3QXmQycBCynDt4UapqYgix",
  "key3": "64YscfekvPSCpdnAKxND4qhm9Lrd6Za3eoJF2md1jEWhBuX8EyD3TLP4zpHXVbWTokE6U3K5mhnZozXS4peRyfbL",
  "key4": "ag1MmxvAqz79GdDryqbgWzjZZmsz3AMoDEsVFVqG9kWjR4L4ajK2VEQCmMi4U6XCpDNeC4tMQr9ZMunCriYmR6N",
  "key5": "59pZr43BcqFZYK8JeDpkaNmDuxtJr8WTXFXmTeUH2iosnC5wFzJfz1385dJMkuFDBC2Sgkdf2wFzr8rc34FZTEgn",
  "key6": "2cxDqXuMBGvwHJnhH3Q2JeeQiqTDKAgnPFgzALZsarbjUSowzM7NYB6z9mE8qbapHZRRNk6nXbPvsiaewXEDCBLj",
  "key7": "25PCaiJKQ83Kvonc5iCCjp5zpJYdYixqSstHxqGsTfaDVBaWsDX33h9BCPQs7H75wZAbpnNevg8hH33g8tDDPJoR",
  "key8": "4QwHBSSWSeb3q8hwYNqFrgjzKvKAFZz5KqXJmykVwJTPTVC4RDemrZsajDBYABgWr3fhj4fVpXrWumiHMvp4yKXy",
  "key9": "2pqAcuCRPar8MpQvSx1qYSX7GueytdWTgTZmGGefFe7RBCRboVy4DzyCd4GeZCRHHqMSEjQjwChpHqma2KppdERz",
  "key10": "ApamVM2woLSxLKQPNbHcteCHKHPaGPNLAcFWtJHjFQynrjTBoNWVT5wXAvDWcdD9xWFb5wuRnUyWk8CTNUWryHd",
  "key11": "3oMnbkWnX5aPGzuJs9VdbvkK3DtFJmCvo7roewJd1aspJ8Uywy26eWWcHkfYny4jnYcd6KTbjgbDbD4abe8WdMTb",
  "key12": "kLgJHkjtLR1QzWmPmAN2Dsopn17wZZZ7vW3dA5R2dHKsWDibqB3SiwztPBvLuyBrbJdooQWh4gj9Sngzt5Hh3g5",
  "key13": "3rg5y5pez8gTpR5ggKc8nDsJ1rgZhcXAyixSytpbJfTUjVzUS9bTEXWPAypVt7FtURGJUwbBxMwqfafqmC6zrDJh",
  "key14": "56uQU3LB55BzMCbdoBcdeMCeNqZCtvxRwQoykiBwTEmXQc5W21QPkrHDdrDs6tfzVS4oFLPNdBah9bEJZDeKg8HJ",
  "key15": "4BKGe49uL6buxFtnUFJCVT5YEVRvKc9acXme5bW4mqubuEXXBnAwfemvU7JFm8awsB6W31woZ3Ezbs8UbVqWAkyk",
  "key16": "4AjBKjCVoRmgEzXhi5n5kkaXUVdS3PV3783Droj4Kw4zpfJHbMnMjwA8VLuUhrhFVkKZNsLwRSL4nSRM625X1gk6",
  "key17": "41U5DSM9SD2aykFopQNx4CV1161ez3wXhtNzuHE8kZz5c8sFb6r5NvT6Le7dQYpCYAmdmA2xovUHSasb5TXzwkZW",
  "key18": "5fM1dGT5iyos7MQFgpDpLhiyCRzURarrSXWsdpsG8W7mEXTHpjFynMF8FPALYpct2FhvQ9foYtR6s1XEVGpDFgga",
  "key19": "4RmYHf3WYJ62ABi9dfTgM1v8ontuBrwxQutNjHqsNKykyS1KcndxCeos9WghPT7wnLG5ahSbpxFonybnDrny4AB9",
  "key20": "67P772amypE8SP37PvFz36rEB89mXtT5XxttxrqSGihc1iTm5C8dEGmUFXkcJSSDtF7J6QWwVHLYD2ont3rjYe6T",
  "key21": "2qnQMWbidj153tEGqn7KXHnvPJ8z24jgf4Mg1nnLDVm6Xvt1ra8SK6EcnaH9iW55QayF4gxnddjfBmcGJfP6nCVd",
  "key22": "3Ci44s1C3j6oHfAR3WAi8rPjMhcqNTVAfPNW2Kif2VXqn4TQw91Y2Ddnojew9Uc3AakHcSMMwun2bYFP3acV3Gdk",
  "key23": "457pBzey3RKGkAyHDDte7FEDfM2g4wipFDtZXhC8yCYNwSfBchoXmgjNSeZAR921vqwv3xphpjMFW5WDDy8cs6WG",
  "key24": "56s26Znh7vhmpoDJocFMPLYGkVK9CHAvSaLosP3t8bcRrhAJwBKtZam1NpJv2HogCHu3AygM8P6ecsG1koPyBVgy",
  "key25": "5XFZat2CrtoipYr6kWoFkupwFzeehdGwNZR7Prw7uZYik6PAyzeBMkQifZBrN31Pm3PWvy7s5wtumUpYCpZGjCA9",
  "key26": "3RWAxaABfdxbqyLJGZnokLaED8qRZwVFiH1fh8Z11ycexNf4zvRBKtL813K9fH6tELdV8kfxQtWiEpSWWDPV84Ah",
  "key27": "5TX1fcgcvqnm2rUCBcY6yF4nk3H5DA4z6zLzhA75AyZKWxBfi3dTKtTrQvNM1Uk5cdKsog5ofptTRC8wjuHXsdWz",
  "key28": "22kUCfvLwhSze7mvB2h81Y7AfMVRT6QEfygTL6T9KbsUW9BMqSYoRFR5eWg3E6fqqYrEypJPq6MAVyz5TFd8U85P",
  "key29": "dws9fbxUUNwuKCYjrchw62nEeTKWTAZrDGguQCg6cJvQCnCpqL43QpinBc4gJoDXt4ZjUkpWGPuEgGmZweeRnxi",
  "key30": "tXYHCzk6kMHspus3JASU2RQ7Sj5duS6b5CwJv6x5effnR9VxJvf8hpZfVV7FSJn7oBYPxLefFLgVNcvK4W4fcqJ",
  "key31": "CEyYW6kYHR9oW8wk1gxeAFq3on8KUfD6S9A3pwh5N529jP4y54jcG8xsSvjGwanXgQZy9QeKspC3tpAVvsR4vE5",
  "key32": "21EPBKYCKDiZkJ4KTU7kUvF98MSrdrhEjPxdvetFqmWEagujVqGwYUysU7KTaxiBkkm3QpRqK3RZbhoTW2uK2qee",
  "key33": "42MLKrjhY3SWAwUTgDXu95pBeAKm3KBG6wRuq1rVcd72hvDFAsY2kJPHG8g45FSFcx7agjetox3f8eGohP7jBzqG",
  "key34": "gMBJWPvoRwMEUS6Av9UgfARBfGPBcus71fSJCHwqQyscD7fZWKM1CLxEgyrUyPwT9D1q7Sg2517BkveKzwWJctR",
  "key35": "33STnGaMjVkrHv9v3GXikGAZ6yJGnLCmeNALPmmzu1v6qaXRZz2dccCztXiA4uhYYbYjtR92ykRmoCGEgkLjmjB6",
  "key36": "4bRqutbUqi5G8UuhddgVsJWjQMTnSk9MCWoUCdEM1YX3ENVhECfPGf1wsX7mxoMQFQ856nWKk17hbwdTvbzGbikZ"
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
