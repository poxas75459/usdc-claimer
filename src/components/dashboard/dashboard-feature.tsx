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
    "2zRTht8f4iCbtrUEdAguJz6Zqi5EeE8ZgeUTz4NxwpYi75A86WPP8nN66AH8D3GW75wtKLuJHF5F9CpxhdhF7fHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CUKwB2r4oQNmKRrDtmwu2nvkN4H6BoKDEeUEejJA5WQUdow1UKyRbhRwMDtGDAZGGPwos7PmT8SQoTpemh36CFk",
  "key1": "xCrP3XuwMvihAShChmm6acE9oo51rrD1CSPZLiNqYwiPwUsEg8ZZqA2LbBdJWj63gYAkRa1PNuVvT71Lc7G5LST",
  "key2": "2oeQZPDarEgBV6LqcMAK6hMdsTJxGM5gJ7pTAHrcoB99rbYCvqsuc7hhf5L6KjWp3xfo97uGasX98Qkgu872TD4a",
  "key3": "3sEqTS59njs14mkD71PTc51Li8ouFUowxuaXf6o8dbkUe6MpQwtK6txYZunYYUGDoK5fe1CqU7e2DUeJcYtC7BEe",
  "key4": "5mQYA4b6N1WLAdPx7wb1tZLz6KTvmKBxytpoDJ3c6GBJeHBwMjB4dbPMEE3Ys8LgTPbLb8xsaQXvGy1m7sua5Kvi",
  "key5": "VXnkMtxAtqGZGZhMD5qLCXtSdZiAVzJuUR9hPqbFbCb4hsDzLNs8waJqTZy5Wqob2EpEaBPti8fLT4HCZLA12FB",
  "key6": "2tmmayye1hejcZ8L9p3wpbpF48y4UgKbkkbaNWQgbmGyH3xfDCm5gMVukdRn8DDuGmyxkxMDGWSSHxPSovjJAbuY",
  "key7": "5dF7X4HgZkXE8q8gQkTWuUQZd8AfSXUP7MpFMcg4pyGD6AK5BaYqCDrG45SkKzR9DDYLjK9gzpNKgwnKG9oXzkVJ",
  "key8": "uVGeinnMksyjgnRPG578kn7CFTkFmiS3xhj2R1eGvFX8zXVT3k4Emu8VgHHAvVdbjxxg4eL1MprnQeUxSmrLNE2",
  "key9": "3ec5CiKAbbo1DdihkieofWvwJ87a4dt4YHGoP6z4oGcTbZNiNa9JjBkEKGoZTDSBmn34wwq1MfJr6wCBsz3AM9qE",
  "key10": "2ov2QPhppPQuYk7Azw1L5juHfALMcW9q6PLZDmUCKLjHvQZvQE58fdjTVqNXboC2ZGuy16Hf3f6eympXMn6bvtNk",
  "key11": "46hiAAiHZdmfvVzNKiey9qWr8NvTQcLrPemCDiE88aMEACYnQUCrsFWkBZTYkF72x3MUaUKw1u1zk7HQpHPSf6T7",
  "key12": "5vV3FRKU7aUwtJUHdmBpzqUY7tbf59WZwDdFmSZnHaErWGcmCkBQYKYFFY4fDEfcxNwBWnWwue2yz3aRCK7Ad7aa",
  "key13": "4ZB6wDJ7u5n1vfhwKqW66SUGmP75CK29PAgviF6axTUSSbd7wDEGukb1TYVEHaMQFJdn3uB4853c86qx1WYwNQ8f",
  "key14": "3xLQ8ghKmMCibVHqkynetgWhYxV4baYXCEqykmW1gkkKqbzwgmtrDGFTiXggjhFshfd769NHobNY7Hvpi2UuBEgX",
  "key15": "2GV6c3hN8ngUJ11ZM8mjx4f17D1fBnfR55UDm4hpwCykWEYQGyRuyHzQHUonpcmKvEkgxutuasdhm1s7kKhQVqmT",
  "key16": "5W8M8u1tK1m6WKyZJPqJ6s9quSyiuYuadYwBGyEwMD1hXaBMA7vLz3vyQBQUuEEHngYE4CrzYqjUFPdWotobaFSz",
  "key17": "5hCb3q2na71GGqBW9n5zc3fJV58RuAHvSAwoWtK5gHMoU9GNMAGsGbAhtwRD36G6vgMtwaEJmwemJRX9TqbuVRoj",
  "key18": "fN4Vsnuada2siGCscBhuQSK6uRqxwMMVGrgJgzLsJat5Htm9L375PmfZLz4SuJVun12WmhuLmNWJ9YCh1i49wbX",
  "key19": "2Ja83mcyJh6MnvEUgGJKqM8XEH9b4fuXgjh4J1BD38XZSNQytxcJFBSWyQwEzopWGQEwb1MUJSJohKguyBb8fJnv",
  "key20": "rPhZ5DWY3WbZZfi779mZq42FkzFnaBPH2ckXQF7pyb6Xu2gkExcauufUHkai1SQxfWozZ7hhMz4vmH5t7EAMUEs",
  "key21": "4pRCd2ME81itmromCP6baJB5kUvBKozD8Pu7wAbZatxTywt6wC7rXkxPob3A8QRakmAMR3DDeWsjCNHXHJsjYtTy",
  "key22": "3M9qaKkr8cmrRNGuLiSn7NfNJxihqgSb598nP4d7LdaKW9U2QdKEFyxQgnjttjwP8QJMFzdEFLtdjqJXqyMxSFY9",
  "key23": "4wUzA63FbHzAA1dmAzj1qgGMB2maVncnEZ4Ftav2Yof4FW2s8zkuw9RYqT1WbLuvEYGEuAH34cTRdQZNTDxicRKB",
  "key24": "5Y4D3iWxKxUPLbSLWF1Jpin2dFed3WEQn26YtNS3ycgQoNipNFmGhvJWfNxAq13kuWzqKQK3nTX8T5QAKnVU9E6r",
  "key25": "358292heX3ajS75RcF5Qw6f7cWfCtvkiCWbpBucLFP5WXbUz5CT4DhCJr6deot8UAtDgN8FMA9tJ5bveaYD4ELsE",
  "key26": "4zyWAzs88Dph5uy82gr46i6fDrggEciYpNasAAL7ZEUDo95V7huqvpqdYfopiw8PTm3JbUqiz8yMWiG6D1VZYr6A",
  "key27": "2AKjW3u2GKhAEAcZk6MbJkE7hhSbdGHqTLQ9VkdkEPLFEERH8kge4Xx1A1WrqLLrGzj1kd9AVVx4xVRzff9PGTwy",
  "key28": "cZErEy6SNnzDaJq54FgUQMEHXVGC56LvQ8eRpVGmmP1p5Z2zsDEeRbeeHCrPLaABNw32Zn6QD2DgHYtAmmmk65y",
  "key29": "2PBAgP4nD8Z4QKZ8WmMj4jpgKGNBMsiAapXHxeHbUG34dZzceHh9zvquiBRroxRDgn7XQd7zWcVGLKaYC59qmaLe",
  "key30": "4vXEPmS517B6LpMXKxtniTp6PBgzLEhrc6EeiUhMRsd1A7xq57nk2qZF7msDjHJo9KTPhoGsbMfYveofikQoRmuC",
  "key31": "2XmyAbZKLAG723zi762WPxM4rE8JnNDt5n57mnbny74b5UHLK7cjcy88nM6YGW4vhtugPSZYmvnamUuWNC17vrjW",
  "key32": "HnHuYkCXLnooXasthSHUKqMHLuaBCG9cEMgp2sKBK7eJP6QMsLzcMhMzzSq3LtubNpn2A2KxSuH8wYDgiribQiD",
  "key33": "3HfLLx9xqcW1iizCWxKBdy6WNES9YCU74fXx4wxgXTwjsKHuBxPtCxuUxzBYhh2n4KmqS6MkMKx7R2BuzsdesUyD",
  "key34": "511Su9FKqFNof2E6RiqkgnG9nehW1b9jB2ULRZCn1ynK9hEjgauKkAsSvxn7ap34XuNpq7DD3EaVfJiKGFpNXydg",
  "key35": "ZB4axbLhTWtQ5czSnSviBLeYrTJ75sAXgyZz4mVb1gmCfXNW1a5hJ4pJJhvAW2wkrmb5Qh4YM9zRn5BgEG3kKNs",
  "key36": "3NSUegPLVWwVDanEvoFvJiCg3tqFop7d8PLWkC28cx2fA32N8m86jGoDmjxCty4Fgrpj5cXpca83FoGxNZ8fcZv9",
  "key37": "gbs17HuXDvY9X8zan2bYQLgfDnTJjBeUz1NLQQCgE25JmDrtfE2RuA1cGbbNGx1R4LTvZcVWosBqb9dDw4gsJ8k",
  "key38": "3VmoNsCiaBKk3RvPuMfwaPxnEw9EjNh9hdFRFKVTQyLeHnUoBEYMvZPJrxtSBjqgSeZpSWhGjH8DzcUBihLum296",
  "key39": "3HkDXqXLvGePYRWuYS3sm8h5GdnpAE4VXMcbTqHQoiovUm99Q6Ac44mHi89vQESPBz7FGy3AR5LpWbJXjqFWQQYo"
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
