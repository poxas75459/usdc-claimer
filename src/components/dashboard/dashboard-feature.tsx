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
    "2TrM5j5uECn2PbFKwJrM7k3KRYDnUrcJMXCcmUZzFMwBjMNRAqQ4jqk3JPJXcrLV18BbVwEDiP33hZypXvxJCecs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cda88mWQn6a3vExuBKDfAURRDiWVgAGfqHGxi8tyUuFBujzXf1XLwnUz6UCqN5Ef7N8Reu8T5DszJ3Yw3AH6sbd",
  "key1": "o6cPvofgbWudQZNJRcHy974Rqm2UCPmzs9D6LJSBq93iQo32zDS2ZCKB9kP71Lk1TL5xA5TQkysx81v4owepN4c",
  "key2": "4uBJUQLrZxMgmzcMEoB6Hu7sTqP4GWNUv62Xgox2rVSDT7kjF7xZDocc79SNERuEZFdxvbBMV8Sw9Awhvhd2StQT",
  "key3": "3H8Qp3DyLz3rBAKNSeeB1ZMVqdbg8TQUVMKYYZ2i2jzD5NiRFr7ygEQzXyuDZWEWoAnJs5werLgKz5SqmyPgLSqS",
  "key4": "4cVVWG3iFxrroH2Kf6FKYXCCQe8k7AKFjmdbLSQPUYBauhHKdCLYzXQZN7wJYqpasJ7EEGkAM7wKe6W2eciAcpwy",
  "key5": "Di7fxqyDpGnNjnNoVZ7dFoA5v6mzZTUy5MytXzxGqC5jP9U4iwr9jXbDgp5qHRSZPnUDm4Vwj5q8MDVbqW9UhNZ",
  "key6": "2T4yrHG6bxdjWR7GDVgsNEE31ixpZXzoTYdp5CY5QTXKYpw2J8SCVhHHnZG79XEuCCBNpEkYMvHx3c3zyRSmCXGv",
  "key7": "5W3vE4UAUnuGwNq4ZYiv9VMntu2Z84ih57RJeRNoab79EH6pXZ8RRHu8KoeiUncbXXXJgGU2hwwq2wKj8xRtF7pS",
  "key8": "2fs4kHC42zRsjH7CLboW1Dn8MHczdSFNuzWDtha9q18GhkAZwFQFuC4SzYHwHy1SKD7pFsdTBv3wdPcaWhK3Zaa9",
  "key9": "5o2kUsw6sjtL1qW4fg2GN4LJwTVdeyPctD61QdZxo51xjsTmwJi93T8Z219Ei8JvMWifPXvk1LaXwQfmBd9U7JV5",
  "key10": "bH82CoUs4Bxpq4kvKGjDrBwvSom1jcYqfixVsw7AawHbN4MCVLFHVc25eDm7xKhvCJWVsfSJJRFqLKeMNcmFdoo",
  "key11": "2xae3eCDHkcMwLBCrezVZ9PdfopUvGvxcxQAAwnvYUZpEG6S73WbMjhm7CotuDPaX36C9Kzuf8pade41tHdy2WtD",
  "key12": "4ugAe3ddPjJ35z3EqSMK7DSz37g5aka58zYXxJdk4F6cR9JifgnsgLx8xewb9tqAFHqixunYsZCdqCE2TUK8tbZx",
  "key13": "vjiVtvKEoZkXPYBV9PUwhK9Dv9tvKYkZYWGy3tvKEuHQrTJ827Nvc7MXASSEau9S9HF9A2rGx6bd8zBKFY2Ln4n",
  "key14": "4J3ZqCi35kXXZfCmU5N4hxaXbVcHfoisWbMHbGpDvMy2Lux13dBaG8peuPMcbooUajznzFeFQeq8F7EdmFryTpW1",
  "key15": "2CvaDAJbSWmHn2Mi4cpEbNw13r8ZH3uRj2wZQqjeaw99XHB9GCkR5dKUaRNStLnwVmxv9tJq97K2YLA6RW161p35",
  "key16": "5PW6j93diLVyCLLPknXmzNNZVUh2UVhXWh2ZwiNSGZoG5EhdyEp4R6v8zNkW3Tiyc66GGppGjDXbz8189zQbQkgR",
  "key17": "TW7yBqgRrXbYX9DBZELugiqLMsR6mWUr29T6XtMqwm4szusQCMUGSg52BcHLDzpe6mBQ15hY5zH6PaVybCvxfpb",
  "key18": "2KnB3mKQdCCvzmtvKCZwNZYbUQ2cJjJM7MKg5Acmp5iAfydFy3BVJ9er1XyDr5p6FbRpATMcfKte5MQA8fngcYX6",
  "key19": "iGoPCjGNJkmezqbvr9jk5d7qhCAWtnjGmmab4nHYr2ceBDCkJEFAV1mLzGs9KR5BWEbGCRttkyhdiuNGMKku93D",
  "key20": "3dPofgZskGtN4sxgSQ3YpEKMvax7J88gVqmXp3WVQ11mfoREiDzqyVCcpK3Jz6MGFT6DPPpQGzYxDCEjiCV1taoV",
  "key21": "B7jgFrU4tA1ZmeW3F1nrmvR9ckmHWZLofxTJQiCk1vdBjFxfb3Ywuhz3FTLhcPVRSSGEgy7L11nPwBeGXrLSNYN",
  "key22": "KTD18ijGVWAmmX8N9YxQWMJ7894UcmFUUZHVVu4YgwnYPp4oxfyhpZtN4Ry3WkjTAStPYYGWJrA232xhTfVGdFK",
  "key23": "4hoecuUc3qyVFBSVP992zJfAe4epK3GJw2pbQ9N4vCDcN81dSwTyYmq1LruaUuaY6ujR724ohPfQoeaQPRzzMMjs",
  "key24": "38zvCNnQLk8yNGy1MDESmpL7Yj84LJBGpMwbUQikN4LSbJEXCrZnVspFE7FGepPncvXsLToaaAC7cFnxvJzvaTJB",
  "key25": "3TdsU7RTyDJroxiPNbQRobbdcgexp7xAL7NeP6RPJM4UPiAEHsXGLVi5abjJzJvnNJYb8iUUrfDR1yTfq2JKcRPY",
  "key26": "2tqm17NHJSxxr8K1yPwbmB4iVcvb7nFVc4YPM5k5f3HLokvmRHbwQpfr52FKiDnWxxSDDm7uMnstneX4aBqPQ4u8",
  "key27": "4aoQgFENiDY8BWLYbiQs5Mpc5ADngSMaCa33VTxydmPSGQusPCWUppPDATQ8SaJd4gbkYZenE9M3srdSxuaqgzyt",
  "key28": "2SpWrRzZLstbnRS7uWAK7Z45kJLRcefXq6kToQaLuPfwCXm9aLS34xnrVstkFayoNuUgz5At4LQMnZsjGRaYHurH",
  "key29": "3ewhudk7eFkzYByLEqjFR8VQPZi2B9h68dujevpcqoaeCryJa5abH4c41RBmiSTkg4USR7tUefsnZpgeN3VAHTxF",
  "key30": "41WG7o4rQuPy5cBq2AjgFaWS5Tn8HJjrfyTc9xw7PZMJFT5vR9XRVqtewdXu7bcqFJE6LvmTTW12T4NWVSBr8WCh",
  "key31": "2i3AsXvkErW5P3qequRZ1hp5JMeGQuqeULbZxYKAAh3578mPXgkSomdp573GKye7KhBfKqzW4GTkRvynokcXskaW",
  "key32": "49tkBPTmKrvvX9Rodh2t9duhRqwYQYo7DnrXE67YC4QTVJuWZcyPy5DUpGCMS9SFwW9JX2KZSWeQN6Mn8TJQ679i",
  "key33": "5nxa1DWBomEQi2yyUgoprYRcUZ2bqVyLMKZVvignKPcX5XDVMjYz3tySdDkvNFPyMNUNKGgzKPnzFzNRPqC6zRmV",
  "key34": "57WAcBjoKsfutxtMN2EnPGMPoK1GbvaQtCZY8jatW5XyJWyBrru8cc4FoCzBgVuuWiMwNMrGmDGChRrdga9GSULA",
  "key35": "6459BGA8SYoGYKhFwPwsK59HYkJv5AK3N8w7iEEPq8695eFG94YkqbJJ2TWMvxYJJrXwH55Tw5NKEXCNMTHJmL4S",
  "key36": "35wYWPJZVGz1ZSmCgZSRGJsJaedY66Cjbn1VdoeVnzZwLnJzbsnA3MFw5fLRMFHFknkWzxJsV9YebCFxEjeSWuKm",
  "key37": "RYLbyX5i8ADKa3YaP9gSnMxQNQS1SpdiuQvRkPkeb8XQHUjaVCSVS6CDo8iG279KEcwp6mR34NKkYuCeXySQb1E",
  "key38": "3FW6KbXPs3wgAqtgyUyAivnFJ2ixqV75btk39eRFfW64uziYNBhhdnudLXwusb2UHMFu3yLfRqKaybAN5te3VdFP",
  "key39": "Hkv47ZZjHkzEWgQhM36mK5FsPwMuMHkkPXbiEFLHLfFvT6RyzGp6zAM7LdYVnBJa7zGNCR3qjpig28ghKKGMyag",
  "key40": "2GdhLmCY9RpV4CqXgB9DojH241yqTqARd2brt5gatfNXV3CNjprr1q9E7Hpd5Vo59xDctNa2jZZ4kGTAPyEC8hsf",
  "key41": "22yVq3x4tootKrXYBDY6XT32fABvajkaWhuM5fSuTGkkXfbbEe27J2arAPmRyC3kQSCmM1NcF4Z14PpVYvbS7xS6",
  "key42": "5DRkp4bRc2gLPDhDKSXawN8aa5YkDQDBvpaAekfVdAWUsp9HdWenNu5uCPPmi6YDMC6Dwxxddf9yLrbmTjg87yv6",
  "key43": "zEtb4RQ8rr6U1eaMGdbqJnoyVLjwTtNHbv2wP6mJQgVZTkar36QremnU4JBKDdRcdTpfoqpJsXexPpUi5ULZYtN"
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
