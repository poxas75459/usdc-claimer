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
    "2vTDQ1TWZk4zPAA9CJ6sKzQR1wbH1ehNeGVdNCHeVmmf9nvk74nHBt1jafkt9H1X43CMFLVc9PmHbGaErD1BFNzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxrvy3DEqMJkkiLccsBHSASfaYgwyB9rjM8SUCNUbLe1oP8CHLEfMHLrP8zxvVWFsFtq7VA22HtJ99vg8sHRjzo",
  "key1": "2iPGjsvGgc799jxXmYqcnz5kX8hoxCFg638WbyKvqXbJ6XDu5ztXGmk5cZVgvr1PGJoy6D2f4HkV44p4YdjRz1dP",
  "key2": "3NqKvkYc1TFnySPhKu6evYYum4qm3rGAhwHGNNwMWouF8UX8bppQwBVGfNFLFrV8CzkCxiK5BHnj9LKdPYiLfjSk",
  "key3": "4Lt9KPEzknKLEm2m3zksCLsNP6qV6RTbF6hbepJMaGQwGJqwEvsFepgtH6U6vHdJ9FbeJ49rYufPqf1gxcA9mxzd",
  "key4": "MXEorHf9zFKXSj3wQeK2LtpDbiKnxE2gBcz3SmWaMKTfe2cdV1qwZXpFPQ9CdHefwUjdE27U4tEchnKzjDgmU3N",
  "key5": "2K8jP224iBuXZ7PKaMHEpPmFWmS5G7NLSvbL5pZSNoc8TtacbJei4WcurtG7VjESHXcATkhRQML9PJxVyatBb9cG",
  "key6": "4W15DLkEsgke9hNLuq2NABZtPGqytp4EujWxyY1Zrd68MKH6ATJRQndcvUc1AzNUT9FxGHn7oCRrPjxaTrwzZpdd",
  "key7": "4NKXpGdVouyMjkySeyASSvZGGUAxesok9ByCWQChXSUfmLaGdgYKZRq2AbbmuJnU6CKcMMeH33W39pV4vDU611hb",
  "key8": "2sxzQ7fKVQ7QS11mmxqB3UwV8phjyst7QPtiaQXtw5qJXr1JYpuDifGMW8XNY7ZCHb6hCcX2vYh7rS8xSSkjYGm9",
  "key9": "D1xaofXBb7V9zFMCAxfkp1nT8HXQsGtAiNjkiJDs43u7fwkHpoiPzjdzAmUJ6Umy2sL6JpHtjaHP3dJ7XxxXUiJ",
  "key10": "3WQ3xWgvyqJsRa7gjuaZUERobEA3z2toP2ndbeUHDKyn7nq6zP9EFZ2UfjrvjSwFjzMVMtn7W5be5czht1FLVQJ3",
  "key11": "3jTJM8pzG4n5uAYmKBCFMABLSK3vJdatVzRrb5cbMjmh5pNbvuWpg7CjVWenjLaH8kErFjVoxzf2jLvZEAbdFCWp",
  "key12": "vQxzJzh5XrVA5du3PRbUAREPRSSAdYy3xnUGcWfQLvybfTtJwyb2MNACKtp5FL4Hw3UuswxeBkAW4Hnxydh5gGa",
  "key13": "2mwDi1CSspxsyjeFakQCHsFYUc8WnnL1VwezDDQEtYzynvWSRE5STanmn9sPAjKC1Gc7TvjrmqxY4orq4jdAoEX6",
  "key14": "3J7bTpfceZE27fwHL6gz9xqxZrdFQUBSy1CbsGCV4aC6zrD1Gyoeozd2J93afuFZ89yvHytA4dHKfQgMKFVdGaAv",
  "key15": "5iw3g4y5CuRmiRh5GRCFgVysY2hrk1hpo7BXb3gxrsgubfR7mVw8XrnAie4qbsMiinzZG2QEU57X9Ys2Zj2RTL4i",
  "key16": "3ffVqs6bRqX99U2wSSM1dYNsxiH2pLNLwdaYvEqKLKdrF8PN8c9d8FXrnUbr5gzBekTv4gBwzQCpNURfkDvFVYWX",
  "key17": "2np772ZjN7mnyfeAQvQ4EMXCQ6xFCx8K4BCcnUYig9peEgAat4naB5hBH8k5YBpdBzR9MyD8j9xd8TBFdVQjERqT",
  "key18": "3xVSG5u6xqCarX6FxbdgQjRt8YEYQNVTYgmU8BgmcMN4nA9KJbeA2se2Y6LZzFVxMBVW8w9c3oSpnwWdJkEhERkR",
  "key19": "5FoaEpijmQ4LDRUUKfeLHssxnjjH8vQxeWad9UTy4PQpoeb4xu5L88oiZ95KSbEzs7t9indH2HVuP9qK1PAG2Fjx",
  "key20": "htkHy32Aeqb4g9YygRKvaGBnAM6ZFT8T54JXnXFTHt189KKC7NUZ9QiTPeVKvaS71LhzS1wwNdf2eZyEVqQqTya",
  "key21": "mCuzwE1Zk6V8KhoTXRn32Gk4YfeMDDRR3mcurrMnkReLxuM6wEWfGHpxndYKDa3cTwmD99qPCaRV4HqKb5s99uV",
  "key22": "5aM61L7c6YRj5REKrEecAA5qFaVwG74sFvVSpuMKLAwv4TCvYH3iGi6GZzS24NY8BWPqBbosifyJuCB98jsHW3SZ",
  "key23": "4GSyoVtdUfiLhfQaoc7wErRjX5uxTssxSrSJbqD7CXJ431eFX85ccquDyZHDRd1R4STqLHt4xA53HCSNz6y95wVc",
  "key24": "EpaBw3Pm3HWwJBAgbCjyxbRmzUe1r3js5bgJpzo4nBN1J5rZQRrzNqMrskTHiPtpEc2SmoZUhryHLtYKw8XZZkR",
  "key25": "2ftfx13sVyk5FKzFauqudCiWt94hyE3r5s1oYkQ11a7NUm3QZX8daJiVksJeqXcb3V7Cwygbr1tUMQDZ1B7sh3U7",
  "key26": "3Qzrna3qox9snhGif5QtdkCufL5TrXWaH9AWvXbZ52hLE9rdkA93SgHXJv9q4bzXHqRq9QgK3n6gQWgdQabDHJFU",
  "key27": "59HzJJwZRifPZK4wC8tAjZaP8jouckQnKSGSjXGDfGowVBJapoacLKPazbU8eXSFi45QcgLTf4UbL4ARTMG3iQJy",
  "key28": "2kxAdJSPec9QtShr87Y6cjKxoSRNDkRydHGXToFVJXTBYM9dgxiJieHViYBrC6cWNoMwjWVdQorMjRkG8NEZ9RMt",
  "key29": "4db5t25iKvXVo1JBLg7QgvyxMqghJ3xqXVW9r9ifn6XoQzKBPXtQKo7GmJiEy2VwJqbGEkEX7RzYjLhBgwe4U7gn",
  "key30": "24wwa7Gbgvw687A5p9PA1D8cUai2ErztMjpKhAzycGYDGvBo4BRknCgZL71nerbQjGiNKo3x1kdb8UkoLwXApBzx"
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
