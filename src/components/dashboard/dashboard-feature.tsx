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
    "4TppdKuxmwWzLLYs9N6PSBd8hRVDKuAPKi95Fw1P8Uu3tevnYWpzFJXfeY1JCwdP6XxZc28WHxsvjAZvZdykCEpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oVz435brh3WStQqFFFkA7dUdiYUtzJFKhPpStHdY8GQ35By1dZSrLo4E5NSzoTF1HJkbB2s7SasJANgd7AJTdjC",
  "key1": "4mguGhfNCEApQsFXF5L88Ycy2VJGLrPpPdU8yyF7cDvr35AUtKyrXvd35hyYS9VJVyHYKTtBjx7vyD1wCX9ptdJC",
  "key2": "2SaoKhVVkBq9C8yADDYeFgkV73t257gE3gNF678sKtyy8mzzzLqU8yErMa27Z3bQUGriVvcaY795GR74AJNRyHCo",
  "key3": "3eZ4pBg6WVt1PrcA9K3sdScqAT16r9aMNk7LCjiLB6nvNQHLaXQquaMZUn5gYHfW363djV2XX6o1rP6Bay7PQACT",
  "key4": "65zho1smSqpa3JqsbvfPJu3kKvnNxNgJVkNMrPzn32DJgUDDK5MUeCNc3Xj7dQaoiSKiQrC6nFpAFrEfteXd8Qag",
  "key5": "5nMKzwDvqt9GGxncodk2hS1Bd1BbbiLrMjwF18EWg9c4qQXUAQZ9RTa4HaRPwfxdiHXMpWBHNWALFSSKdSazc88V",
  "key6": "4iUZY8djBMtExiijJDWvqLbrHMDUGjvYKsx2gaUsLAjLCTXrbH1M2yJLFrdDMCa836WX23ufcGk5HBbxt2QcPYQe",
  "key7": "jC2JUh58G4kNtZLoYggbtrmdd5mnKvtBSQsSviRT6LLeDCgmRUnrJorHkn5pJfUkuxHybsMPFq8EWrSxQTVQRGg",
  "key8": "5UyGvjuWhYZtuthyj8wUyGiov7XdpsSh6QLr8jD1U7dMykS5F2c5A9muv8bwemY37a4Yj2QxYva6g9YoM7yaPfKB",
  "key9": "4R7meHFaU3MjevqdVDmYyu3eWSa168NxUa3M6dFXE9A8D6enHrvazrWoUhA3LPC8L6Pw3ajWJYS3rwSrJwEXaZY7",
  "key10": "4F2ewvhz4fmEjt47NqVQ1x9L9E477gRxFshPZ1cx3YN4kQVYqMfWs8xH7re4GUuxR7azJZ2r1ybeWLsXch2kbybw",
  "key11": "4wSENM4x398zBTRRSJcBELVTzRLehZzn7bWF8rCSkhxQaufyikMWAAn4QBJakMP6unrVkseaaTaWnwCkqHTtxMva",
  "key12": "5RqRtBGzxBCnVfnq9Dbje9iGJv2v2LyzTJUDigXRW4umBdTiJwWDhNvsu6bncf5MZzLfcyEHgq48UJeMXhq1kdC6",
  "key13": "53gjHNR8Q3KsbgeJwDkVaHUCYe8ZNEfv9QmZ9puiU6vP82QkJxXHtTc3WUd8jM28fbepPeGuDs7fpjrdWbDkjCRA",
  "key14": "3RwBXg9gTcNr7yUbZdaiUBhK297E4mbFhue3oM5HPVMpwcjP9FTJcpK9PHuJHgpSkQjfp7JVMUQDoNYRm1sEiL8F",
  "key15": "2QPyxwTGFj44KhHJ2pmk1frfubT1Zfos7hmBv8fMkk8tg8fNXa5tbjqwoEXYoSJbdVQQQHhxKYPHC4muwAyntYN7",
  "key16": "5VrkVSC8JAYSyhpKhZ1uEJdQNxRd9X4Nnmau5JNCqbSXMAShyaR8vqiHnDsViQAoaXDehthgjqfn5igCBtXB6BYN",
  "key17": "3PkFJKh6EPc5zGbo1Ao5pS8aSS6ENTrJBUyrryQ18GHrhxfqqbCXEbwPPuWNEnAmMFs2wcTWWmvnu2qA4zSWykY8",
  "key18": "3yDrj8nRHPcm8NWwTo6euxk7Xn3PJs1HaaUfkPwnNTbeHZ74z92ZHYXztQDbfSmn1R3X2TafUcE2Dwd1LwdDZPbA",
  "key19": "32K6gkBD67u5LyVpiLDZpdx1wthGbUmRgvDfzCesDNXq6jFXTaL6BfN4tzBzU3aUNukCk8rtbGu8YBChFsd542iT",
  "key20": "2r9PGQAqghGWi8tgWa1kFvyCUvnNFM8NNjnrbJCK4KLbTjz8wXQbYAKcV9w6M7uMueL9AZvjgFPr6DSDrb4wFKJ6",
  "key21": "3L6P8AEZdF551Q58LCxjvdZXkHQ18yUvBgFF8DMk4tqvnWetiQ6PkzWKCVh8Nyy9pE9mci4U3LNiWUfYpkUd7Ggb",
  "key22": "2LPYoV3AQa14Hwwf84fFVGb5PnbqFvDKZXswwvnLUjHnaBkXmduDzwX7NnVEGXyNz8Z11haJ9ardCVHw5jbbtj1n",
  "key23": "35peTnQNM5xnuishBAS2SyZkku4yXza2GVk3ZJPAvEKySSxfQxX5VNTyZPmZEjRHprHaXKQM3itHLFV8djVjPiZn",
  "key24": "2th8VpcocbHARHoXW7epgREdH6eKb2i2bhdvnRCEkWPio8281LTpBye3aUs5dxjfJX6eVnHt6xusBD7MJWRfxL9L",
  "key25": "3Ac6ovuaJY7CFipGosaypocuPhjVER7mcVm6wCiTRWUGZ47cXs4hZENQEQQVv5ac4VYDwaA77PMAjdBJ1P2tMcG2",
  "key26": "3Z44Bth1t8jctLHaEcSa2ZuYcSxSqYFFvkA1QteAoALHYyEUzr65vn7WojLnaGeMc45ivR2c6Wr1RiiC2LYyZLuz",
  "key27": "4iEszAM178Ey4e6igp4JNAbiVvuuHHNnppQxbSXBhrRNSbpUz2U4VSmyHJ1t82YhhrcUDiDKHo3Q9azWjhAH13qP",
  "key28": "53cCS2EDWiHoaejzJ4rSVXrsBD6gqMD4YxUoEnUHwKkAp1NkqiQRPTqNnifkaHTankGDjmLzyYDEytXnePTA5LnG",
  "key29": "cn8oTZKPfFisVyPM3bu8AgqpfCSrXxzSE6Fg4rfV2t656eQ7ykVovEVSXGZZWPzS8xZvLEuUErwrUHGAH7A7Hai",
  "key30": "2k2b3jUUeohcjN44LweuTVWsMS1FBBoZdHvurLZKHKZ6rGg6qrYb6gujLR7hmZG64VttHFnFMXgGVNScD8yBGYpw",
  "key31": "29VfoDZzS7cs6wySF1QsyS3SEzfXY6DTDCCkd3M1BqsfX3rsJbyg9bGDU7YE9Adk8cb1qB7hfcADGZPPvLRPoHtk",
  "key32": "3SZsFsxxrV8NW2XfhExYYnnshWhmGwvocoMRMNRe9uc5vGzBy9ZcBPenWT74eqtoeurZjZRh7pvXjdufPRHk9ZQ1",
  "key33": "3tXfEVDtEFthw7psBUTwphryYu4BRVgDaQRrSHPC4K5qGktRyob8cZaAWpR7oXYveFNP9AfRPeK433dY4TygxAPD",
  "key34": "2qfnhKjJtLCLEj8XVdQ1nZMowG2tZ5kcc9vePsvFJgSt26EErxKFzocZF7Uwh7Q5XXxAeayynSD2jaCgBJvg1c8z",
  "key35": "2yQcAFk4m1SV2VXrTpaP1njsx2mMUSDaj7GCD6xNXMGs1Yv1wYtJVKtydv56JKmp7PRgQXfUKVVGCBFGyYutgfab",
  "key36": "5kYoE3nmYhAY84XWpFdLPakDcenpiM8JGJoacSwvR3Sph9UAGL2Lh6Ssa4DbPPuMCkRmwMFozxHhFtoSN3uHagy2",
  "key37": "4V7tDKRc5Xnhb7SaNYnPcogx4giFMxcSA2vTUGVYvDLHoiZxowNAwcpTxD79oTAGD7rGuQeDhhULS9xz4AojTKUE"
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
