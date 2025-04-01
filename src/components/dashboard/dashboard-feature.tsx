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
    "4aFjdF5EaoAYXPcLkLmd1YSTdZxAtprj28Nv8gAtrUL1tZiYUQFEPT3ymTeC9eGD7oZUp7kdqBCQ3cHLNmVLveGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zHgw3kh2Emeu9ti8MxYjLi1YNh5eNPt2eng14AoQ7aGrKDDbtbNJ3qdiWNyBz5Jr4GEkB4eYfek4MrcmfjecTEo",
  "key1": "5zEzfM9v3vKPKFVzAei2MVXZpAdEENuSxMNXji63kJzwx6zqyQTVKKHMAaUWMHf7VyyhyDbJBAyhwYe8dQ8gaVhi",
  "key2": "5CvB6fFmBk8meFQ25jTjoF7x1Qg4f18omYzfzRSBWyjFtgFfuUQPqUK6S3XDErHT1zm7t4tXaho8Fb2Cv9DVX7Pv",
  "key3": "5jbj2goxZakjdhW33SQVD985b93ZBhMpJwuGewtjvKZ5iivEEWEvxNk4D2iVX5jmrTnaTLqREoK1We5Mpdug6NtN",
  "key4": "5YAYzR9B6NHMHW9YibGs3caY9FaiLvZiBs4eKRfu4QEJrWxi2GA9CAENpVDa1d7r8it7L6cPgE93gFZuk41hA1Zc",
  "key5": "4S38X1VAjFHqeBEicYCNyTyrtHs3sEwiCGkuJ7onJipyPauwJ7Bhrcmic4LYpXvvk1bci3xCDVM1i29gkBNBCoeC",
  "key6": "2wtt22aX7r18nDq844WawrSZcieETLDEuabtHwHAVaGBK5wGX1SaV1k3prtJWpAZerXcScFJzisfNEfSysNkDPFq",
  "key7": "AtrN6ejAJWGCfKXXowHBScGddVJ23zzGZPxJcTL2dz8Fbzn6UYWBemUHbPnPy2dumWNzGdHSRrUf1xsJbEcvj2U",
  "key8": "2LhWM7wn3DaUTSKrTpjhkRGBfi6cjxjegrvqTYRo1ktoLaEcdeGf8c4m12qfBaCxkSgMPRy6nqVDzdcy7yn2mUxK",
  "key9": "3etn6v8ooVUHVNzh857NrYQxJuAioZ6CzSRWTHmygTZCUTjPfKNrv7xauNjyhUdMFds222GaCJZoiydfcpPLPHYK",
  "key10": "2oK4XtuUjPPWaHq4Utjb7ip3553SaRA1jx1mHk311PWqNY8561BHxiPzyENxHpWQJP98HzQvbKXRToaJeyfVrJAP",
  "key11": "2X7antvsBPyZz6WaVq347LUaqQMfbXSSEcWkF8nTwqxdkoB2BdhnPJqiK4SAJYnRGj6BnPkCKzCGNH3unjAC1an",
  "key12": "BwvxeASw7sbXFWTziDUr1VdHfrY7Hz16yCkwB8AXc1XHpPnXWWd4fjEbhTbanRscsFuokzVQucAUsGaTGqj5Ajr",
  "key13": "31XeDdSRD6rLJxybhno328bHNz56Knp3x5BBHfHPU6ErEpZdLLq8xZ3ks2hrA6qRLGVvLUmHe8FeQ4LHKSnnQ82i",
  "key14": "3eyuFus9VM5n5bGrWrZP6F5q8iCaX9ZQJ9aCjyWHN3HTARsvCDf6ewxdrBw9vxrey8r5jrXoFpGiLunsJiUGbRh1",
  "key15": "4wfp1J3Wi437YV4FPKJwkMaBrTMqPNXX9PBbsEw5P7hgHUwNsEMfSHbzW2L3jCTQuyY9TheQXdBk8htfZyRWzJ75",
  "key16": "56ye3MM6LncqEuiq521XreXAvSGxFwvGk3HS7KLH5W48a8SYy3uzbHYxQeTm3RE1tPiNfTjs5kHuwx6R7Czh7oLj",
  "key17": "62rcSHqBAdynF7QTTWMFdi6n6hniHEpLooNUoGBY6J4ZZP3ZdGt5reaPXvnHup9q5FX8mScN2qYqHMTZi9HSNw9x",
  "key18": "2i1yGbMdcNSCQ4mbRYxrTkXuKDZDCwbX5sHekfhrv5XY8hWP72mJsam3zVSz7rdx8MVBNVHmJvqCwQjkKRyMkcnE",
  "key19": "1282275QeRm7eTG5aKeR1PdX898m7xYA8vx3QQRDB1m5Li3Z1TKXTZDaiyTVGrStpRpQ7cKyBHeiXrAHLtnteNfU",
  "key20": "2iQJQzsEmU6vCQv6ybAXBhmU3wv5Wyz6qFUa5xW1WXXwiYwLtjVaaNG5MuPeHEH1RDwAR8vANKF8xjuNFpApw18n",
  "key21": "5itzZTbtpkxySBs7wPpLKrHq37Nfaob5B5TUYq3rWjseQNron6WTbZZm4x7vmNcVksB9HJB7ctEPVbDZTTphicop",
  "key22": "2sESzmZUcvPbDyNBmakD39FdZtN3aQirPdxNPRDqtfQydnTeQhzFy2SCAqVr3fBqNtJaRhRNTHGjwwr5bVLEri3H",
  "key23": "5SHNMBnyuwJEJ53unngWLgbpxAsEwELGspwRVziJLsnmFJ9N7V7S7hDhnUTtLbouGcYQADB8LdBMHrrVJFoie14S",
  "key24": "PfVxNLqTVA9aaHpYFGDjZJyuqW88YXDShnMop7Frx5jZMvRxPL6baY7Ufht9suSC2GkHtvEAKfEmts6dPFviii9",
  "key25": "5MgF3BSjmSkYSs1rrnhtn9nmWzCGoqcAmZZVsXFh6GMiz1yTMjQVDyK8uBHtsHVYiiezatxs289GoEhhPzuNFop8",
  "key26": "2ZrHCZB3DPVbbQA3HCtkSJ9ExsVNKntXYGfvcaPpnQjAq3gN9Y2G9d9V8h4qgj1Q2wPQFMhjW9QJaByUunBPf8K2",
  "key27": "55ZneDvhDBV8NotPCioqPnFqUDDAUCwcrgvgrcbDvcmQb9FGzvbQyQjLh8z83sHreXbXX2ryZ3foYckYeh3wwMBe",
  "key28": "4af8FgweKfqYH4Nz6ERU19YZPrdJ9uEnTifKJA8EztzmPC7LShE2QQmg8mDiMyJdXxTnFrkwFttScVzKMfYqEvaA",
  "key29": "26WGvRQyxYPY4dxfpktSPPZtUWtCU7AmvXs9LhY5EUSen1x9Kseeos2S4MAf8NTPZKEKhWUZaeGhZqB1KCpXg9do",
  "key30": "4PDUySrAHZrQ59FwVDPX4sde6RwSvAERGXwSy2jiiVHqZrsZqo4nVoi6gEyHu9e3a4SEak1ycqQL5SAkUCJ2V9hN",
  "key31": "3P44ca1dPLKbwAQFgtTDUVhadeyoYJwZGWTnBinJTbpby8z6DPYVmeY2jXBq1AAeHcmAid4b2txbYBQDy157GbjE",
  "key32": "58iDbKfCe7kdH9khqsz6pZinTcQGhCjeMzJrSNfd64LtSQJ5paKNVWz4HeQhtubWbHRkWwjvErafN6he5HyVW3tj",
  "key33": "2SoAJ9v1LTDEhaSUqqLgc1Ey2fYHiHy8LJaM6bhxhYWxdBsPnsTaRekte7jB3kHanvhrU58WqdGAs9Q7pV7xYvhr",
  "key34": "48dDFsjHAJ3qA6omrPv9AEuAt1W1zWw4HUy1bhbF3BoecAE4cZqXBgB18ctSFbk1cfpFcvJCqLgbZUaNSGaQjRvW",
  "key35": "5DxVSVff58p7eF6C5HWhHKmSBQ7atm2R5Abj3JeGs4xAFC4HbKMSArSTCUqrWWfCj9V2xdmQdRYvHyr3t9DBUkUN",
  "key36": "2HBJK2ASeHRMstuG92GrpSnY5crcbMpUwSvQWuFHSZZkKmdwUgitg1CCBP1CLv5ktUySNP5QrH3fqaZkBJ5TMb6z",
  "key37": "KiwLZAeX2s83wQdbXsZXbvcNWmQasFCxEHpUxmeDuLMUFzhfiS5YaH41U5DyvH7yx4dQiLMHLnU6diCD12fSJK3",
  "key38": "2qqk3QtrnWEXmi2F2HDgNr4iyGvZibWGLRtuGL16F6N6nJfcVQcAb9W7Eso53Nhg68MGpsLbQj1x26WBAyTF1o8V",
  "key39": "u7MQyvZqiAHJncV8zjkQDhZWm5bFqUEbxLQHaVwxqKwMh5HVg1D3eBfQpNRvjpuLBrddSeNAWuqJsdjvA9c3ikC",
  "key40": "368YDa9BJUUbDtiucQ8zPVvHRgRADTK6cJamiiCYvAXqu7xzXQ8rLj8eJPXACkKAH2cstfKEHhMQ4wZ73RBiqcEZ",
  "key41": "44LkTnFea6sNBVsjsMhHitn5fQr3u3FwvVnVaiPR3ymXHkbM5jMfwPBrgqqCRBB8zHmqRs8yNehgzQXgv41KrEHn"
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
