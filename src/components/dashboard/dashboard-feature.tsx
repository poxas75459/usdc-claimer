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
    "5AfzgJWTtsDYCtxouktNgAnNigo5eYNq64WcRJGDhuW31J4ctNqAFecjjrUUmk2UTjakHWPm6F72DEn7M5uKiZKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBzjpjiBurhwW7ybV3Jo6b6R6LcTeW1RhE9TKdYEYv7v133XrMTkJ6J3Mr736k4YRz2Yd1PD3PaUSYC3NP1Q3sv",
  "key1": "5R6GhrCUB6BUGo8bgHYxfKzsY21YHU1rpb5fmYANFsNYWXrmYAceWAbm2NC3tRxddHzXPxEoMVH4tRfbhBorhqZj",
  "key2": "3qa6hoyZvBFkfaoyXcVsgoVmX3NCMtJHaeJS29EAhuM15XigEwKMvR8d3uCiNCk8W8fcfTybkXQ3X1yjiqY1kqr6",
  "key3": "4zpDuRmcJN75j6MBy2bq4M2t5SkFHJ95bGwtxNEx3dLydmtaUp9JppsBWE6B2UunVNpRW6xLdyyJEMpDjrMqAWmK",
  "key4": "5ZDyaT6ft7Y9GvJdKjuvRY53iEGNXkkRX9QCALcoRvdegZyzwvK23FcKwWfhKnMuX9BV6JtVVdPxfbPDCvHkg6Q8",
  "key5": "qFd8LY4huYdcf9CTt9WxqZtiUdLHGvvkjJJTZdnSmjoYtbuSWMM1vRUTgG1pNQripRaaYHGTE9Fun4PAwNVWU6V",
  "key6": "5HJxut8E8psF4BYduFB6e76HYpC2dBL6upvVAVb2zosNsNewLSpDeKz7s1PBn98TYwfhwuNDsgoHc9p4a15wdBUo",
  "key7": "32UFyKHbyZBuRyLTdyb6v9syE9MeX4LPpbkQugGWXPsbNsBbBMkwZK7XEJq3Lj8dEjej4jJEXMYSF82gVq7fqjYe",
  "key8": "5pnU5r2EiSxJFCWUs1BVz1W2tyKXD6Ztgk5278SwMjWgbh8eennVwdZS7bcWDoJ4hRosEeGGrP5jAYKVewEeSPJi",
  "key9": "2hAZM9dao3kCWVmikbian9uddbsYGtDKvuigMcfGtGETekHJng3fuLWEffDKodcZaVirKGwBGMiwWu1Tn8tGy4UA",
  "key10": "UZjdBemKAYVbC35nZVBN168iQcTvBpXjDHqji4Fn9dh6t8kskZwBeRV2M1TorYGvyKY5ox4PbovZGC5BTj5vZhB",
  "key11": "2esteKYzNmTs4E7vmLvgBWPtjihJxfuiKsNicTSFpHnGk9Kh6GfA6jjk2WWkQiVtBmh893mGxEK1hVVtosPZpZ4F",
  "key12": "CxicmG6uSDGnTrEh46jkMf3ec8HqowBoXQVZ6NvXo7AWWXU41sh4xXT38gzMmgpJNtDCJbq4NNj6MCr67A8wx31",
  "key13": "5tn35XHCUHt9WytpWzMx3FtxswNbXaB77mt4AFXo5UyKYQzYLCfy88Kj3wAnNtUQJRE7DiBrbbRbqXK5D8KL8C4U",
  "key14": "4cdMHWo2KMmFrDkLq9bUku23AQ66B71bqwHZNtVb7LmY83j5WXq9Gfp8pZiw8DVi4kM88ZKafFC3FnmzwPrUbghc",
  "key15": "Rb3qGz1jrGvWgUpSni4mA4J3ipdjnDkxc86z4WM3bCZ5UdZopxXj37DkgZVzxqYgUTD2qmsDgNrLRiNM79AsS2h",
  "key16": "3d6mgj7yLsfvkHsQu8PsUdgESHaXcXRL8C5viUx72wqoV2q31WeaNQs1QEEMZNqHMh4dxv2QRqaEgPiH64hfzW3w",
  "key17": "57cZcLJLGh3H3r2yDKvjnWNU6jySpsrxettSXar1qNxQRjqwVj5yzTzWe7gafRzZSt3KM2HPcgJNaVc1Hyy28ZkX",
  "key18": "4bNc8B35a8RE1Lz2Chjohw8BLi1TGrS9RxTXG4kJwV4wtBscdHE7NkAegtzKLM9PgD9YNEaBFCb6yuuZie8S6g8D",
  "key19": "449Y6jbdVuYC3ioCGQqoK2SCjwk44dcGSiKGQqYLCFBtx71JfnE6rpk3mjjsTXokyDUkoetac8SnZkvQGiC6VaSc",
  "key20": "5vSkZz7mw7AxK1cWFhBLL47ZJwHBnWo5kzGxTqbCszHQwAAFseNyMt6Q7g6warjQTuZVEKp2K23iq8Ew9H35YfZJ",
  "key21": "5PE6yxjAyqTLqKQBqpr1LLjUHkMBFRzXk27TYprCF9WX8i8CUNqdavZMYQ9tFQeqzAkKsjPrTQ2rG9oDhP8Ca2QK",
  "key22": "42snwfDmMabgW13Wzwxk6Feq92jfcJefZdMPhpw2U9zPsXvgayP2ewoyuAr2kpRZsvF88DUbuUisi9wNyMmeahUy",
  "key23": "2GXQJEnsxAMhwRn2oZSG1PR7z7yHaZppR89MkGM3Nsoq8zrVk2sZpT8Rri2A33JQ2s73zPYCpwGLWux4ervsWHTp",
  "key24": "4kfhRowQSJhupDezknVSqYL6PPJnoDv7UkRCSjqdCujiqr823TSQvGTcEo8CDKe9dmvTT8zur2AEQS9H8pzA6u12",
  "key25": "E4vBJuvArgug8JpuM2Ejrom2kGyjjQovoN1fpJ8BNYZHYoEvJhCypCNhEfG5VHJgjDLALnYb7Z5Ry3YoGrtfpDo",
  "key26": "3YzFA44r3yWGF4N3pw36moHV2dhVyspNn2zUdczM1rxCzfqBZozoGC412M5nuJYU8DaGZmZREntiiHUz7mTdNKY2",
  "key27": "3mAgXfhV6R8FiabEprPf4JDGtQv8miVDyrspYrBtftk81JmNEnaUgVgXbJzYgR5JuxkymRNtGHCzeqh79GV4AUrs",
  "key28": "2UhCCuWGu5Gmiwzh6HbFWUSUDabj4WNqfh9ECtmNKLCfpLPGjsDLkft9agPvszo81K2tAdAY2SahYT6nXirEC7qb",
  "key29": "65varFkxc32b69Ngjnh5kMdywAwda5swSSzUeSsWCXgKeLkDtUdajxu71v8Zhfzt1gjQEbwXrp8yKiDk57gZc54P",
  "key30": "5hBf192yWbBJF9rXqzBPhs91QZVdhMEJrRv4rqqN72duiCjXAnsYG23ekqAHZfCHfN4zib54ATfcWLXvMNJ62mZM",
  "key31": "3thHYkdejWAnQ59YEwLA6zqQSmShYny9w7M9Ygta3M8Bmr5AyHREm61pW3PtnaQNrpodFKBDn7NmUoBMQAQVGXTC",
  "key32": "2Hmpj6ua9CcNACp9aYwN1nDBxfwkesZ46fHThv8ur32skLorHhaZCjoEWe8rfzWt7cJhw8qSmmfr8qjBkzPTAwj7",
  "key33": "3KiKnMu81biZbJFFXwpkb7EzxyHBCnER9qXU5LEnQHzrpgYfUknYgDrqV7vm1XardmVznGi84DWGUjyjt47vBTuj",
  "key34": "CMDDHXfRwzJmVjuteQQrL9bdf7pGFbPspe5FhKXK6EubUfc6K4c6g9ysDmxSbfYkLRtTnQfKxpEetezCeqsvUu4"
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
