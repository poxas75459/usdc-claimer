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
    "2kGXScWvfd13t1hYGsZbqrVnUHPQXhWE8LR7eYfAK2r23FoV5qNGGTPvkXjHLe2NLbyYw3Pvk3d99eUEvPsmLhnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38EgFP4t3VrbiEuT8QGP9HQWrRzn5skpG3v5SvBLNnTu1ktKZQkLUWqdxCB91qZQjFq1wjSEBwFfoAT1J2W7fVxg",
  "key1": "9vYhveE5ANEyyXwXBhrBcjNCy1h3DHvZozBt9wsQVwYENN6iUtSutbne2hYiDBcyeq267DxaeFXjaaj6ZQDrGFU",
  "key2": "v5aTXZWe1LELDEEutU5xDkonFFWLJQ6squeo6kNxcYoHVBqUrnoCTKWj8CoADnjZ9Yzy6xEGgp18EZZETCtUHYK",
  "key3": "4zuszi2gTMjVctzavELA8Hjs1UQ15GCSb6RkDRYXRC2EpLSvb25gQLBke9gbkNwmkfQH6L6xA5BqQAutAqaPZia9",
  "key4": "5BFbU3TjnckC9CD7njz69KaWHQNAQ6yNTYoNMhhGj4dQqxTcwxz1iyozC4mWLPCAYGFwqb8skjBWP13bqPVgUYTm",
  "key5": "pQiqAsxKPr1S3UX6ZwytSVYXRzyvhsBpZQNpyPi1km6y4ZpLgdSJJpZaWHST82y4dyCSTXJKHFa8mJnwmUcazVq",
  "key6": "276qkSwWjq1s3RQ8EEh7ZdFVDBJmVRdyBAbBQHQ2SAsfjoTjJ1Rt6nLULmsXMrvH7mCH2Vgm4x1vGmAf7u9PXeGR",
  "key7": "44NSD1jQR7BXebdMTW3RYFf1qApqBxiif7bX7Sbw65YURHqCT5Wp6PYBTJiZjqCmNKiWRu5Paqak1Lu9H1zjRRKd",
  "key8": "32GGmaKnRRxzbkkmHFwwy7cKoc3kmgdcb1ALM82QcezqTYz9359arouv2eEguKkHKd6ZD8Wm5xYjKHmpGrWD4e5c",
  "key9": "4bgLGk6oKM2PD5sxc7fWW8KdFQvmZFR7ZCLbJyxpj3R2gTEhpF7PRBmtowwcXzJcDpEBrRPhRh5Ka6arXu9r771i",
  "key10": "5d73MDCeJjastcRivQ6PJEmty4oHK43ne2XhP9MgxPk4xczSk3stoQH7e7vBnpAYwpK5kRrbbMs3NwQS1osgCdeB",
  "key11": "5p3WLcy4iGg1PdUJDNvyV5nVbjrd26CFyZpxr598R76shTmowdrzdUWkGnVB5drDJ7kTap5TS3WcLTiysBNDzakV",
  "key12": "2JdZ7vadwBaEJ9V4EPZfPf9mJMohwnujAodvnkhZPJwVkUmbqw5wYg6QDwKXHTn5yQzcuBT279GhSJTrFnQX9FTR",
  "key13": "5sxuJKryyC3TTKZqMz5z5k5VcCZS2pjbr3TH89ThZBmnonBJHQVyNN8b6NQcuKLuvDNPMP5rxkLRdHTEPaMqxhA9",
  "key14": "48rf9XzxhwKxjZQYDt1GddkexfguedMkD1HNBQktE9ncJsqWwdVDa6BfjJLMhBAi4j3ww5H6y2NcZemJiEq6wW7W",
  "key15": "4jiTuA4asM3zFpn6Qoh6UcxNf8fcV4eBLPW43SpYLYZBwhiaxYaFCe7GhHnfT8pGxnN6c9sA8kGE6yLAxTw55d4R",
  "key16": "JL62Fjp4Bi2WqN1m5doDgtF8fmDr26aenCLrP8FgBfehzhCmEJ43UR5wfxPZe8nQDAkH4S33f7GFc5VpqAFnZRU",
  "key17": "3y2NVpEaLE4uoh9XsddCEfNu9KHnxDnnbZpM8QMNLxgD1Vem52QS9nJkrDqhCg7FJYTzL2p9yrShhZkHYedk4Xcj",
  "key18": "4hXBbYUxpeRtFAfxKhWfR3pkQ6e3yfSrnCqpyc7sHnPybpykADae7wL4diFqrDbHmMsYjkHSDyyEsGzs9bj22SKF",
  "key19": "gDDpdW7V5uCjK3WMJkNZDDWR9y6AXH8kxvT4Qk5VrsA2eagkuXjqdFDzmvTiYimY8Y1RHmc6QTLKCPRZYfxPKpC",
  "key20": "5xDQbGKvyqwNiwMvR7g6nNkniqVxXHBFd1GdZpKVvWdhDmNbkcptu98C2HPvgXQ9E433dSivRsF2oqMiV4GRbCjY",
  "key21": "nMehJS3GFn94Q2nUjXy3ewsvhTwyczpDR4w2XeLsvCY1sMVwWTAzgbnSEg71TxB532E7XAQRoUrs22GAdDGMwek",
  "key22": "2zHzztF7Mbzn9i94NHqfdaMSYNDft1awVy7q5acFCskaygRjTrH2BHJDy6CFnUcy8KVq9TCdRTMUY2VpiMp6ePsV",
  "key23": "5TicRXKWoTeXYA3GtYBu7ZjtEAGVQ2pCyHcMGCgGE2H6rw8gbLGBEsRMikwMiNbWt41YnLiduRPb9DJLKYZ53NLm",
  "key24": "2JwsHUJAjE3iwrZUPAESRyugQ3Wyg14TzT8SXaLDdHpzRnFUNo7UBSgVyoUh9uyPr1DrUNmsm8hLNXDbExTfFt9h",
  "key25": "4VqbN2H4pcbsDHeXPzDuLgJLf8dH8A8SDGTjqN1GxCgbSYMRhLpQ5uSpyAAEwzq5yPYWPZunWsLbFCnZBMkuaVe4",
  "key26": "5EZqHes4nKqWsG7Q6U8dYhFL4Mh3ePXLKfuuMjzKDmRQmpNdVsRaTSSWjinSAgLufXKFb9c7JFLd7b7aUPus9c1g",
  "key27": "4uPCCX5sBsMhUp5y4m3c3ztJv6KrumKQkwVCd6DLLzffL3GmShj2tL6W1g8WUhasrxbn19XnjQyFZYRoUnUgLDvk",
  "key28": "54hap8Ncu2MDroK8Rca6xqXWPnwC7jcQpz9CxBBUJjRfJXdvEuPfzaPfxJoVVL3ZPT86K6wX8rmg5hCbUZC47D3N",
  "key29": "2UZDfevMkoNL2j7Tn2N6JjvGkucvxfmQW6Ms7VKs3axNaVSqv47noeSVp7yjwBK7ijS7Hrgc6kaFj89fL1CkLXBy",
  "key30": "46te7TpirXJdCpEefbr8Q1mSARFbrRUkzp11wvv8H5AMfws1pB1tizaVY6nhQAfmCrmAUhaRxfRuh6BGq1p27WVP",
  "key31": "4ho7Ne8hNGrpyKaezP7qxkEY51GxQvaFRHgTJWWyBf3F3N4KmdsyD6HQfJwk8qa8Ux7rjB652o3jvF8XCK5j7VdG",
  "key32": "4ke7ce1ny9286quoCsaXPmQ3Wi8vNPVZFHL1LcC3w5AKfjuuatfAnCwT25TJS2hw6LhoKKW3XwS7DMKnedJ12Aau",
  "key33": "NNiWGgjvvNhFjiDcaUY8R3o9NczSWrFj6eUT3A94pvfhFfDfJYJFqhVA8YdcFK5DZanfsHrzMvYdTihBGKPacNB"
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
