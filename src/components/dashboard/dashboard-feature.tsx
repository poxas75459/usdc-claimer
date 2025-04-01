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
    "QVbwW5wReJjmRwUVUtpxnzLrR8iwEQmHPiGP6DJUYBE8doNPARaX7DjEHV5Cxq6t9Em4YcpLs938w8EKc8cSaJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422pmHbkZk7bRZDxq6UDZAZ9FSy5wwPjALzzCTF1jRbLjmaE8P1aQj2eU6gupfmrSreBsjEBH2rnNioo3wXGohRy",
  "key1": "42AtgWAJ2ZkevxRfEVqmQNWPS4E8r5KzEM64HmKyp4YwYpNKDum8eVg1ffYG6PinL775TwoCC3rdMsJGLWzUzRMw",
  "key2": "3P6BXp76jcdJe5NDJBMhkEMV3rLkpyFg5mC1bj6LPJ3YCZ7EhEG4QoHsfwiiNDAh3TkqzzkPLsruGgtGLUXXHtzj",
  "key3": "53sUvYKb2zPQhHRtEq47Ks99heEmki5EoLPUB9G26npowgdGZ53wCRPxGVGedBN4NHVDkuuaZuQxSiroCff1w24o",
  "key4": "5X8uhCpuLSeaeNRJ5wS3BQi7BF8DJoEU8x5oDR9pwc7Z1Yp9o1xCYGQf2Nt6QZxLh1ptmYqEj7rPYMm5DGi4k5BA",
  "key5": "582cG11xjfFeyAm7417E3igRwY18FmP4YeCKuCsgBPJ7u2AJYh2kvDz6apMeWixu8KxwktPQrgA5hWBSB5vMFDdN",
  "key6": "2sEuz24nyyzHtYnnVBWnLkFgoLdhG12vcpsCRZ4swubHQTVeYSR71QFvbB5ppSVgXYDjXJ6WTkjD9MqR1c22NPy9",
  "key7": "49QEjjwLz1EzTFvs4c16WS8C4Be9m6PWuoA3oKwNviSncbBRbA2xTSgK4kH8JEkK4kt56UKmymejkcxibq3pof9E",
  "key8": "5eRNFgBDfnTQdD9NK63mjN4iHiZ6qof6K5EWHkdDXL2Rnb5FNrFozcZkMrerVE6taADgudYhXFwT2HivoQGU9mER",
  "key9": "32tR1JHnz8TXfvXifZcbiXx5kKBuSSoWfMMau1yk8VuEjzpgtTXF6aE1Fn2TLkMk4VeRUeQK62nkeGp4U63tZc97",
  "key10": "4ZJjwbUBemRAA8Kt65f2YNLzwbeyg1Umg8bx875Jo9CVUDwUPwYPVCvHNfUXXgFf5DpvcYif9GkxkNPfDX8QXMsN",
  "key11": "2ryo8UtVTnXjTqfZuKUyqbvZDCUMbxWkE7AhGtGZxan8YimALRPMY3XxkSaNDfkM9SPchzHYCz9yQF8N75vjA95f",
  "key12": "5LJjtEMuNMPNQSH5Fx9TuuRJ5dQWq1aydbB4zA1ainewyeG4CGShBgJYYogDBNJ9MMXgGpBUjyMKGw5BQjNkV3Sn",
  "key13": "2Ft1oaKVBEGT9djFUFdM7g1EWsw7VTD6eEhCSSVxsXBRtQiLwry5y1o3vJx283cbAKCCAmvErC8B2jkjgv8hzjvo",
  "key14": "4fGCBYYfdgc9q9VRFg4sya4Fe89b2LqqfkGLcvq8hM3466tbuSSwTUhkQwLekhyJN8cdE6qh7LRa4yxf8qyXjQ77",
  "key15": "3WAXxYjHebD9Je1LjxJDfYpHGRFD4QfBw46cnpvtkob5t6NpKzzW7r6kjq7tJiRH41WstetZXwEhs8qZmToVYDjm",
  "key16": "e5vPYwUUA33E6WyZ55BYbHjWPFGYX5KUnAGGWBZqoEEyty6tka3DM2b9HnFeMotLYS2cnrMMRe7sT3tTofqbNek",
  "key17": "2nXdYTEDbFWG8TUfhvStdnDC51V6FmYx94gXG7QFBcEKzCuaCwEHe9d7vQnPisNt72xQTHTTnT6gFGsCFRNqMoM3",
  "key18": "5GqJPpXBn2nfgNnFHQCrUTgQ3Kxhb82CtCy8UVeAJYbCZ8aCHZh2V3fQRmK4J9GYoTySUAyXKmBuN6d9yJN7SYju",
  "key19": "4xb822ZLALF8EYFDS2yWpPGNmmbfRY4jmtSr8Vsj4gQJH9QTmb8mawvv98W7uRKQmt99xT26WhEWGKipXvKut7Sz",
  "key20": "2rqYgvnPBwzaHbv2ZH3QWzNYQxYEwxMHmucezsNqWVXZt1DbB4JbG1peZRUda1DiHassrXekxyGTpSY5MQUPBVsE",
  "key21": "3hJCtiALiGe9ooKjxtXFqqgDgXPReVSxAzZZ6fHFSUjqJrZ28WyjZ2cNy147F81pcmAfw95zF6zJyMz8zGsNApFL",
  "key22": "3es9uphL7unPpYkZiyerb8DyFQ9oEmthqeZKpwNDZGTu6rexra2XkeB6DzF5XCAaGmeg5JJfoCv62vjZJSEztqhQ",
  "key23": "L3Dsv86jpEQSXejm6JLwT6HKcPc1htatCYcWMgEJ6MSUMDbwfLKFttZpAq4BcoXooChu93riAnf6AFhgUYLX2ub",
  "key24": "2KCKLBwdQYYqesjETcvysdpZyXcXyKZerBRQUsAwcPqYSBxfmtNMjwzsSQd11QYviQKX35P3RmwjkykRnDBvVh6a",
  "key25": "61RMsz8Sv2uwSBMETeCy5waqQJF8eBEVqxiMd5MW8g5k4dBmj49vaeuiQ8nUU7qzhW1z77jZcuH8fiJGtCkwr2pY",
  "key26": "5rZ3TdLyLDALnbrejLjUhPMvrvYkZgGTk5WzNiEC4cby8kdb15sGMW3VZj3fKcxLUPHuXqQqLweeSaVmNV6ZJ4CZ",
  "key27": "4V5Xz3tDDb1KpH33YHpnebYgYSWrnYj6bnmmAqiSpwybUL9SUntbGdqjzZfrZgQqeAHs1PtYGnq8PYrmWGAR8kTC",
  "key28": "5CFRkg1MLc7jggSr9MZfjjuysp3V1pZqZRBVVMNJsJ8CRaiW5sBDvHfjbnm74tm1XpPQHUm9tPjdfWHMdVvCHzsG",
  "key29": "6JDGZMimqDLDzdBJ18p9MA92fhdtbYW62wDBeEg8XpqRxAEytz4YN8mjLYeE4arHA2rpLk46ewz4zTbWbWKkdMD",
  "key30": "3Dc4UkQFgXTiHWJDPqZFHXyRfkPPRPW35rL2UhTWtK3vzrUzuTNfxwxjVexJ5ew9GKFrt5rC2h8WEwr5pfye497K",
  "key31": "5ob6ZRVgNUaeNHZH56B8TiG2P74KfW62D3EZC8He6UWWrofucdUeXcXWEgsjVBhNKRbv2tkK3STAHysp1kZMqjTB",
  "key32": "42AWUcpvuJjdyxN95DczXDg7ZndBGq5dfuR3yd4sEgz95bvFs3QJLJTshct6tGCVXKji8UCBRJP7GSwk6kuJP6WH",
  "key33": "3jnPaCZqhNWbJHupNvhPoSgVxZwt8Yc57EyGUWqLuYmAHHyrtWdoRAS3P4yftYYsbmpbkMzZ2hAFv37DdepPXVkd",
  "key34": "UUVUNqhnxhgZAo8ZsvzXc8n2XHFRZYax3B56Z2QMokcmPGYDTabdhGePH18arydYqhecfG5ftmxHekwssh5b3g6",
  "key35": "59gqjqZw8gL4yepuQZRjQZfGGTi1NcNB9Vnw2Zv8RNykwjGS5eVBkaepiJRm3SmRZXyLyXD8Kn63ufAYH9vUhZy2",
  "key36": "4Pz1jy1N9tgj1vsiFTf6mTFZ35rwjJK2y6Djt5sruZzmgTMyn2vHSgXN6zEGtmJKjQTtQtKMeJTyE4Sh6J7xE3Mf",
  "key37": "5CknhQaRjxtV1jiCEoi31AuNUEX2dfDQHjg9AUm1gyW2bfZqMpcpSupyuqwdU96MkXRZSiRZoJgUt3z8sKJxVMhS",
  "key38": "21W6RVhcBun4g4Hdc18VNHi3Kc12FQ778sFyQ7YwAesypJKeuHXLr4AysBVYZzU6JM548aSuejkuYiK1QfSiPqHA",
  "key39": "9q3GmC1kqca81Lb9QoTeo5W4btMTfSFHvwaBRBXUs9KR3w7XFgEHpn2JFRzzhjcJ6ivHeq6VB3hwpNH5AhkXRyK",
  "key40": "4mJH2y4w4eQYoXeDKo6HCiHhXMeCxg2SzZJX7h9bhm9JTMB59ZRRDTkDpA4XJ311mb46SmLuuHw4uUdGJa5SGANF",
  "key41": "2FLLzTxrK1Zjqh8WWcyZY5kYh1mFrWBN4P9s5333puMHUif4ZQjAWuYj7PGNs61s5sDFgVyaQVpvZ2wbrQJkbBJ8",
  "key42": "81PeGGASv4JBkdm3AYQM4dbEw7Xzm2JifZQDskhGXaFn9zHttQguMg3i6mMc6BUbRjfWgqDNzSoNb6Kgq3QEskH",
  "key43": "5VYQQC4CGC4AYSkwXg6rZU7Xg18vLRyjyEPGJCTuFqipdfVcfJyQPNgaKb6czwsiLAbaqTHHFc3is9tdd9qjNuNU",
  "key44": "64Y98KgSoF4gJBr6b4fR5bHRKyHUUgsvziMhesQJyHNS6Cu9wjMqpYjSLNBr5n8BiPUyDHNN2kWzaruS1Nf3j84q",
  "key45": "5DJEAxKf5FTY2ohgJpHxps11YxJyC2df5a7nK2FRDEh9fMNoDCTrhhUHwfj56xfPhnAZzstnpdWqhiWyJtriHvvG",
  "key46": "5i6To1vS3zYLEWKjV3p8PWPgkZ3hJNgLfLFkY5UWG6v9wi2NyUAzrxiSWThaqtctwLfW5nrhX3gcPSemHfDc8R6n",
  "key47": "5MFLwxHZG8PGC1j9Qf2wJqSJbz2vdPT8pY8t95vqsYMJ1cKUomb2t54dr9S8Vhb9NKWg1Ppp36vhnjYnc9KfnZSY",
  "key48": "4rfaPkPSuCSEjKhUrtG3oSZBiQ9kudL2aDcgzLjnrV5bJhf4e5zCt44dJ9vAftHz6BvNmpheLy2qg9HY8jBv3VSJ"
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
