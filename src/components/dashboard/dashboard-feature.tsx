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
    "4jjAUb8XrFfb8LcRRjvBYiN8Qnoj7g5JYmQhBqbjwvzmK9L2c33FAGU6pg6dYYWE9WRhepzYSB6728Hkdrc6Qyky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UTVTwpnrwUNkDAAmMbh5EE6s9b3dydaiMSaPZShu2f4yuEaNVmX3SEMC7QfKx8tYeMXENvs3kjZfYMzMVkHwxjJ",
  "key1": "5WPHc614qKdPhFJ3mi1kAEzSvFrCgrm3HyVj6a1Fh8AWf47p6zVqoJU2AQaPsVJ3hR42VKWRiyKxaqh84MMP5ARC",
  "key2": "3ye21NA1kGDBBcu1xWUV5WELntEkpHBfraU4JeCK48gMRYsA83e3C13SJm7WtPZnH6s6arboZMpEjPjucP55Lwwm",
  "key3": "9ocS6uSyg7vP62Yb4bhwW51Qhq3K2H2buFTpyeFiFkk37vr3hhHgWtnRFvfJTN4jv6e1q9FRy7gbUT5Bxv9xy1Q",
  "key4": "5neGMSUffg2VEUt3nrAgfZTg2FLbJkNe4gKJT9aNqiN9TH5oB3b4d1bd1jh3goEyN6fPUV3PYQAB1zNvDn87zvnP",
  "key5": "26aiGD4gJ3axroMH4akTzuoLzRQLqGLQryg4nKc9sFe3oA6fzupzC6U8r6GSyisa1jqNhhTFgFWdXCoFXcUNBGtu",
  "key6": "kDXR1wXxvsPZQfxvUxYicnS86TmyVmxEb3oJXFj2HTKL9QGY3FFYkBjShsiy83f7f2y5ZtZXDsLB11NSTEfPvD7",
  "key7": "2bFsshtdAriyYM3VN6ETPsmKd5phP2RVaE1mp3227eG7pBYajyHbBFc4oj99QQrTTbQZ8u4kLJsgvPTaT4r1Qka2",
  "key8": "g2TMaSzUrbTQFKm3As9fHdobbBfYWyF1UFivtCgn5rjCNt9Wm6hndCDFtzfcyU1z8HhYDRkRyNAMNrNyDgjtSFP",
  "key9": "FrerVRe3D5qb3mQMbAQDQgPh3wa29b4TmDqTJkNzavLiAcXgx7cfEBHNYTQR7b8LHjZrLdPnPnJwi9R2erC9uJv",
  "key10": "3QBFoHSeKAiELVZQ8FwB88eaz8JjTU4JQzJUCCQ81dbQoZ8pa8GUCGcVtJKPcpZCpUMGL89sQwdgg93mt8EBqKgm",
  "key11": "5KqWP8cAAWW5TrRh19PEWzMfkUaAji9Buqvg3X5Xp86XZ5doBwjqZgGEQ3YrbBTVjFAMPp3iv5nSJ8ryLCLvRD9P",
  "key12": "3hE4pE4F4WNCvD5BbsDMW2PdbckKhL3sd9eZpQodcTeA4hsxHo98huLXmkE4e5fFi5fWhWf2PSnn2NQy8b2Mc2qW",
  "key13": "4J3U9ToFfMVshfurSxEVdLLyStXFE97GmLHY4MMrDuh2KdzwNXRZLv7dCz3rAAf1XVx88tmd9HVpYjw66yX9wEj1",
  "key14": "42VQYxv5gkMvBbJbTDEfAhPC6svwMQ7sticZACvcyE3omomcyJLykcgh2Z8XtExC1gTcxA7wydsCM8nFNhaQdDop",
  "key15": "SSxxcZMoM8giRSj2AchCx1dubxHpFpyoZPYHV3k9t43Gf58bNArUvPSuz9R7hnrBcmApJdP7Y7ec4LPXdydPmLa",
  "key16": "3gpe7qEFzxgzQdEgavmSALWmMCBb1ZFHtBhQvxG6PGNuiLbwR8URSv5V3yShuBnkfczjHiChPdFvsu3yicJc99Pg",
  "key17": "56PF5RPDvZixC7r9SUmn3fNMp95xwWwLJ1yTSjteen2s5kds4doqHEbN33mrxBxjZkTVbSDyqKC6EE6GKG61m4eg",
  "key18": "3Y6wiYc2KBehBUFh1KBa986RgtsLeQM7gb3RKa6xB5pqknZnsKMskhnjdR5N78aqzSRzrjffNWYr4vZYxCDN7dCu",
  "key19": "4RsNsZAXWHkXpP5MVa4M8MUoRdvwf2BMxAkXzMCGHvq487qN4U7YvqUQ5xVnqjXXm3XeKc6obQWC8EhcT1Ya8L4R",
  "key20": "49oesFDLWVaVb3K32JxcRfF7EhA7uUkToLV6BTCozSuFDFS1aqouGWqTdqUD1Q2tirKhY5q8uRgiMtHCFvtS975U",
  "key21": "5Hv5uWJcBZXTs1jsnEDobqYzvaPXbJLhQpghxA67fXTqHFstzxh74KtTf1RfM2W4xduKJuXkbH8h3MP9CrQCnaZC",
  "key22": "3MyB9m9TgeivhNYKHHCjniqiTWkTTjaEVMutwSUDqcJ8Q2HBEaPHegHhSPj2R7UyhsT9xHVGZw6xRoMA7U9jzLF9",
  "key23": "5ALxueAMho6QNgtZ8aykzZXwxBy7UhFM2VwLzifbEZJ8JhFxUQUv6WANVcaKLiwywHRw56UzsfgqS3TGjYeEyopd",
  "key24": "tdW8mnMufofq6KUu289KpMa448HydHbVyxcgGn2PJe27Y7yuQvgjNzsoTydUUyKSBXtkpQz98pn8Fy6eGxArTwW",
  "key25": "32s2pzpuNVYTft9Q4CB93awycWpxDxnuNnzGc6hn1CAgRbLw63GLbQnB6ag17tfQMpNvyapoWL5XoQQTmmC6ugr9",
  "key26": "4wxqXKcTHFETJHEUdRFYUHoTHfnfMXvacfA5wG9NCz1tGZbmexjWoBfHJ6Hxep7MDuw63fyTx2Up96SYYLZfLtCh",
  "key27": "2Qpu55PErQiHZQyj96gzwFJ2M3tQQWg7to9LfKgsyYJP55DVVxTfRPBYU7CAfVtXoyRVJjysh27seJdDS7Kz9Kp4",
  "key28": "2moG9GBL1txcqiByBqxZ2Ccvryh1a7ruRYG1D3Z9qqT1kqtTVsrL99ixSRhcMdNMCrpo37pSDVRjHSfsBaNYwBEq",
  "key29": "Eo4EZ1C3JjEUUBZ5QUTmXj4SiT3KT8RbWUJUnEquECLHJv8wNj5mgKahkVdardqLH4rV5wahPgenW7XQwEXkkNa",
  "key30": "3MTaZBVbxJkjGMa7LhHCnQSxzvWbXFEHj1cNbVEtxpFzkpJqftCyBmK9QMGHcie97JvPN9MAdvrBiWVZnfxqYEse",
  "key31": "4kKg2uaVBQVuMWnBBYndgt7cUQzmfEzuFqURneHG5VpHRRMjAj6pGvs1a5N4G1DbtXBPmabrahEQL1K1TXEeenFJ",
  "key32": "84mr9VR31rmtvokHLQ1Jm6W9dXFQjjgsBkAgJGX8GmUpjyiJH779ffQ8TZunGwspW1oipiQaUg8Qiqq2Z2di7Qb",
  "key33": "rysFh7BwsG1gexRhQ5aRM2ECfYSdtkx6mPvV2y3oPxZfSubvb7skt2M377dfCusD5QSc4fLFUhNqRf5AuUBkJ8d",
  "key34": "5ifKK1LuudWUQV2C9hZuoBVZZjXGdhQhKteW4LW6Fnfu3gUUEAaVs1RkLiqGfk6kbJUbrqejHdYu98dtfsyjQaKC",
  "key35": "3WFUE7ZebYQLnY1M6zxjtrAE5tFHJJC83RTUJy1dKhMYz9eorrAbzzwq8Ub5JWNh7Q1cqokniskxqowAosSMH5A7"
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
