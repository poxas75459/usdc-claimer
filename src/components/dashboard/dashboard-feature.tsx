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
    "4kSbqZUbJWLCMuJyXeda3m74sgje5ntoDuHh5AAjnhUxrLHr93SuUpHh8obYP925S4X5JqhvKCHyrr85BAkDKy4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLAr48NUSDXMHD1RiwgQVhLACftc9rsLKsj4DE7FZLj9rb7o32PS2schCyvBHuTNZgQDQkAYZdNqDgkS9Rb9hyh",
  "key1": "uCegC7h7Ym1q1y5iASAeo2AfJ8m4xSUEHsixNXvLJ9h83XBtaYgmZvXCaq9zDmKCC9UumyLeiYuEdPgUpP4NMLu",
  "key2": "3TSxQjKGW8BXpaiDWgKPpkX8ntVgvwGxfrWRPZGnwvjXm4GTNcMPuzoKvgiFSScNBCtNiFf972dNgk2XbLaThka5",
  "key3": "4EEzQ4dwsSkNWDZYN2AjVZNzzXNp8znkpWG4hkkJEZU7y4V8f8BPBZKANKZi4nXJj9gSjnvuDaGE6XnPmmyJqoNN",
  "key4": "4WJBurhGbGBN8sxznfQUE7UfWF72r9UquqjKLKTPn9NBy6H4Xb5p2ydBC7kvbHtup8QkcWk46hLmo3kQTnnzTaD3",
  "key5": "2e1uPm8j1uN6gExHdaAX3L4keZ31JPFKjTqfZ1puvSQjrDCyTzHL8yzn4PkMEicFEhFDJQAZAwkaG43Q7m1kKrGt",
  "key6": "3SogYaGFTgn292dn9QABZ4FuG5tvNgcoJirvdm1fdDMHjMUvWBeRcjb16hKkMAPrPkYQc1uo8MiMU8Vs7fMBNjTY",
  "key7": "4qy8SLbAwTrz27mj7mMrasMr63M6qCm9SyL9X4i9sagZhZagui3YPXnKxLPDKuZiCpdcZWSkUMep41QnJ6iViMMo",
  "key8": "g5HdpWAMEgE7TJqum3rerEhVCfHfYjECDFn8FKrprCuEMene9n6gFymmzhkMQXYYY6nPZmRiQt61L4X8dBuq4gR",
  "key9": "4MhrvjLrZnZBKfiPThdjV9ka2CQRmyPFWpySpyF3qcEYcUyB8L4LmCvFuiiseErQyeNd75wXfUGzPqbmbqwkQyfw",
  "key10": "nTGnJHKY2GKeQ8gdBuxA3uLBKd9y39VWUCuBdxjErgjGREdzKcE9HvqSUchZAgZuQWCLew5PianHEJhnVUPEJEs",
  "key11": "4iebumMzwEUhYnM2APGkjLJri62AmFsaZjdDzyxbb1pEHLLx2uiJmEw4ch6wAPJhBuwvtKLuTVCrrtnD8sGVcLj7",
  "key12": "8vWSSrKYAZB43qdqRrKgb1ZzyVMi5ERqRsZRRyNG3GiAXEm696DSwcpN5qkKCFwfF69BBSk3LA7P6PuKzx2w9fP",
  "key13": "2bK5f5FUNwpF9mttodhxLFFmmxVXTQX18aT12FAAUA53SG473gmTiLS6XnKjuwUmTAhJQj4DHZ4nYTsw9qiXBjAL",
  "key14": "52QmRxY77UdNHYBMWoqVrfugWA1k3LaHLPsg8PwkJkPm6xLuQYaqTM5bHsESxytQ2TJaAbJ1UtLmLAZEWfnFmdxD",
  "key15": "5n5S6q9dc7Ev4qgktHXPnDurC4d8WfMdUcyk2hAKFxE6vpigiAqyDYsMZCqANDWfqg9VDb2a1Bfk5Yfwme2Gesq8",
  "key16": "4zBge5LxiZRzK3sLAPhLmqBk1tMzHtJUDoH4Lv8hGVau6UncxDSW77GvfMDXTngVhBm4yGqRohW1LhTPp7E5QmGK",
  "key17": "5ZdkvNHz1kMXdy9CkBM5TSEBGaHgtu7duAti5PpD6eHAzJUnjAQWmU4NvG1tjMK8TuKEvXbkwT9HbZwwBZdcsKuK",
  "key18": "H3EyTW6ifV3D1DXPzFJYVywvc61ZSz6NdsR9CoCRw3zm93S2toThsc9mhwaWpTaKVyy6Z1SgWREKsvUDTQUpXeL",
  "key19": "2HfXVdhFtDxBgCDeM8b6hTEhU222qrsDeEunmnoZtBArHcRiKbLEqeks1R1HFhgDMvekV3vQzpMF7zNxBcVovG9Z",
  "key20": "3WLNufKo4uJTXcvsmG2VkPMxDnQrKpvLnLFjxWELts9otvNJEzjjJZAMbYV3GRVCs72LfSNHPvK9Mp9C9iGRVk9S",
  "key21": "2x6qNs2o8xku5P46h3c1d2pRPg45Vd3Bj6iV3cUFQndekAi3TCaprZ8uXHcfCMre4gWF8aZuv8DFdDXvAgRTpzyb",
  "key22": "2ifKst1eAcHwWS7nBZFT9xGWHNHgxn9x8prfFhxwG8dLX3Fb5M39LSSvTq68Nsno7S9BsxtN2zAqLZcoC2C2LXLX",
  "key23": "thT22L8bUWoRbrcPaESmqKo83Dx1rtLMA2AU6pZQw5H6La5WdMBKVtHPb1hmjBo2eSA1GCLv6wWxshmMsnCnisG",
  "key24": "RLRg5SGbTXPSvL9VynG5gtqMf4VWRmn9wQHeYgrpJpqsE8D6FqNR56Yoo3fCjR2hPyMBfFzQBdH29JM5NF8Uzip",
  "key25": "64CF7pw8qnYuBMKMD5LLauVSuXfK7LQZN324yBgu9GWM2ihYx9a9Q5KU4NE4WDYFnCojPMHSXosQX3RQadY2snFJ",
  "key26": "4t9vrT6zMuLjUrwzMyWHA24zyHzKCtiu6LfNN47P5BDGQmiNzWuRsop1tR9bnggafTJDgWEEnMEsnHL6F9PKU6RB",
  "key27": "2q9PfoYy1NuaFNyULonEcmAmHwoc44MXUxsDBFbBZfXhkbf849vmP7pRYqYAoADpNXqXqHAkby9eX6ny1DE7faZD",
  "key28": "5PiGb5Ea4xmcubyRoRz79XxDhA82n7zskZmjPRwVQapx4PX1i58V7V2m9K3u3eK4NVWgFNk8p4x2M8633G87gRZf",
  "key29": "ZjXizhnAgc1ca9FAymEQzTHZ9K8AFrHfqGedhkLzkbjzEPAQKL7pM2zBMjb7Sgw9539JUjM2NFZ4bs3k8hXcrKX",
  "key30": "61y2jVdATzAuATeqFvDWWyjkh3Mq1EWS9a1v9TXAt1dSXsUyyBd7wtP2qgG4S4EPkgcM5iurjtuCksmiuRNsbG4K",
  "key31": "54V8pWu89VcyifpxUxJBdHLpnYyH9eEvxRNtLLmPqrFJsDHw2h2v5eWTzpsZF22P5HwU3Ggc91AhrBAcu7HNad3Q",
  "key32": "oSdoK7jt1QZuRaRia8LpCnQYgf3z3z9ovGpTZpfM5YP8nyqLS5UfhmW6PeyMAZPpTkZutbN5SCbHM3hggzdUa5q",
  "key33": "ZgEbQYfwxMZWZYK7w2aPRbe6kPqXwi4yTo9w8KK4pHDf79JKEt4UF1BDQp87QgHxJ41jG9phHCfamtAK2m5DcrK",
  "key34": "1Z4vipmYQbpRCSeGr4wKHxDR7iWYWYFQpHheAvkjeafrNrmnaDfuq4Csd8hp7TLL3aCZXt2GcW5vxsd9EKGUrCL",
  "key35": "3DLYMo997kJsTELpreRqzDQiTszh9f7fWg4U6yTrwtzMXvitv8GNxB1m51yj4xRHZdnNUUFgGwMxVxZzzjdGvcCp",
  "key36": "uo5witmMf5J8i1iD3FfdvZ1ozzytKMEPci3TymWJjDvn4EiTwpPREaKAhVcjoxKVfqXUkcaUe4TywSw34TH4huj",
  "key37": "2g7z2HVz3NgfaYLwyUDhCvpSwN3sQBXmrwFLVtkdkn5Q1q6d7KfVinoYcMB3srcALJR5hcB8RAT1PQoxaCtaoefk"
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
