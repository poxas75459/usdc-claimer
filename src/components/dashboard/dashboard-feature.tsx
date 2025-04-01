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
    "4YSoDUMHXcSvgbFFjELCsboopH6mgXh7DLipmfQMr1iR4N7j89dfDVhyHq9veXYjU1qHyFT1YTcsvzhMW4QFXSxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rf5py6cmUkPTiDfifzkFSuGmDAYZsTWcmeT7hXYTR5xLAEwJZC6Nh4F6x2YSLJhqxWjPpahaDX5E6Fzpn8KwfPH",
  "key1": "2bhV6mqDSWsnbRpyaFsSADuYQ15D7nf3WoXyZs5siQ7gAuf5NkgVwicvUeSCCKvwvE5Bskw6TGecVXT1PGtPKDCn",
  "key2": "3gJbG7jTLUSPuziuRCd21LfBihDseNmZz39tvSikicovFBZXuZbSXjWvX9zABKvVq9GPcZKWseGgddy3NJmgTbw8",
  "key3": "5vYn9x4DbLpxn6HCNMVBAAKMEm9QNmVWLyvfUAqWdsWbab3WbayQDvXe4p9gVeuJ95qxyRafmfAonY15u4Y4ziH4",
  "key4": "5SJAbAsrVztA7jUQAyxEcsT4YRC8ymCuoTu8zQ3UAhCt7zJpo8wYRtBUvHuQDhQXitqH4UBRSQLQCRJdkbH5gZbc",
  "key5": "5BQsv8b1MEJf2jU74xNuG2GvnM9RCwqkzn4euAj2uyvWPBAo9DgdidsCjXA5pbRqRWrTTeSxTGyts1t8yjz9cSHP",
  "key6": "nvoaxPCH7Gn4t6W7m4m722RVbzRSCWkmTinakgNENaeXGP8xkwLMWGjzu2d2NoY8rGQ8iCZ4795u4YEfGFxEQf3",
  "key7": "21muRYXnKQhuDJ89GzpXGdJBpx4qAnEALrTfqB6MVxTEpzaXnNtwJgH32b38EGzATAujwh2JGqPU11xSEajcKgDA",
  "key8": "5c1RMjUVz1LnQaVJw8D8Cu6hSi7UyZLZauED46WhAbBQPC9gWqyNMBqyaNg8U3dteZYPzZPh2oj4X1hAQSAENmFu",
  "key9": "2Voc754PDBxSe5TfQ9pNQ6DunK639YnQFL8PT8L8wh9iwACzevdhQDt1CmYXLC81ciqexnGztSukCkeWLzk9QeZ8",
  "key10": "2eLaKWcA16L2BjJGmC4DNGxBUvAKoqTYrVUvprbAXgbSjdCfScQshiHnTKEWdb5YFEzsMwsmHAuAPxmBUw2RmuW",
  "key11": "4XHzWc2UoVUrpVHi9LSWR9HQsuGUzmUuH2a8MD336JNuBTsAvkRSwhHFChR8SC7mhh462uC6nH2ttWr2dhHCrpNa",
  "key12": "4z45tnok9kE9a7UU6ckSQp9UXZmLCUwcRLat7ewP3koFXEwVZQJSJba8UZ46WanMrQAdunffcpY5HPtZ9QJGmN85",
  "key13": "5iCXqdzss5dxWstBV4jRMpa4V3vYVujS5e2CCjPfkybdn6ezStQZz2igdXXntSnrSoZ8okA9GjoCLZXP4yJfxjdZ",
  "key14": "36UfNNBS7Uftqj2BUoVnW6f74mzTevWei4bFzMr4LN9XsdANwcmUpbRPCsjK8C96xjxH5hrXit2aediTGtf7ZPcC",
  "key15": "39gNHJ4d7gQGEdD46LQt6K5AaBj2YMtGAi71Qg3NKeg3wEEtvgUU7PGzRpxeTK3yvYS5EY6AnoZr8g6s97TC4rc8",
  "key16": "5rMZ65gGCirNz5uZ7D4os8cHXM5WSKgPLYmmyxScFY1VcmdDVgtZewopds4CdfYNp9YSJzm4kRniCSpAuZf6TTKN",
  "key17": "3xQ8P1kAqRtmKpDaB8X3jNddghJ3k6bLJtPRCCJa5Q1crw4zEaDib5jz7f55E2grAmrV6ncEMiPY1C6j854oFKJH",
  "key18": "47qN5w15k3Z61hmDMMaKGMzXhXkcJE4hCKxZpDnQVaBWHKFv35eo3oJmuGeCgwDntbTq7ZVSFrxzc9gsLx369jwY",
  "key19": "5m7BcKhNcZxbsq6w6CjQ53e4fScNmpGpNHkvmVv8qtgQ1Dv812yqGrjCUjBto6RtVn1mD7Tw2KQuwbsTUzrMdcKU",
  "key20": "2zA79CFBrVdLS1jSLQTDdX2cMv2GZ3SiDLXYJe3XDL3j61ngyo7Ld9zHJYJvJ3jwEeap831DHchVYecFib5dBpKE",
  "key21": "4ex4piLaVpBiLt3fqGEgzjkx7SY5jE6GaMGWZuqgp8AJmAQceXeWenFoABcnKfqSh37eycvvhAqddCVR5tfipwWx",
  "key22": "2rMX9RrzD4CviAiBcQ5HHxgSYbRh2LjAkfdpEz2SFTWFEchYx5JeZvriZMxy6SsAqCP9t2kBCuQAmwn7Zk1AiLuD",
  "key23": "Fc1qFKkAiZxcdFYtgm3UiQgzRygCtkQfhi8jSKMxa5JJ2A5r1Y1qfz3xUqL58r98g2yv9dMMBscnLMaFWWb3TfF",
  "key24": "2GfpM52C5Pvid8vrvYjGEVocT3rFce4foBC1MsiyvmypHypuMjHCRhgoMSFhiaN8fWfhe8KqHw5aF8xokUEHSPKY",
  "key25": "2SfM9adQNhuzgMVbcagiDY55GZuCFuzV9ejZAGVQkytXXaVstGUbgfqq5qf2b4yEp8qL4ccfVh1UUQeuaqDJRsqH",
  "key26": "3uXTVwB6qS4MdLNi6dwaUNg99xMyFzNydQdzTNks4JT4bt3SE6fGdvMEkGNg7RNng5SBC7Z5GdWnsYx1yFkQo9ux",
  "key27": "3813oZs9FzFKbNEkz4Kf73oy3PyAYLWJUe1wuM3j8bTDiBrsZzSTfQAKNpWyerNcW16tMk1EurwKCZZepTfuixzC",
  "key28": "oAkx3nSorA3GHp38zVVUUmj2LcoTFsNttrTQ7Q4FHoiP7yWyWNJi5ta6FySuPFGVP7LdzyTzegvyW5PR6qPPYha",
  "key29": "5JQXoLSU1czS1gWaCvf9GXEKrRtJnkXm3Q298u38bP5JzyhLgskm4Bzypuhj8kryQkwv9guQEMcAG939zLusNTX3",
  "key30": "5p68k6PogmfxSuqyPQ6dF8N1uf8N55ckam5i9CgZoTzXYthWN4ysLK78AxZDV7dqs2FmhzQs5e3kgept2LoK8q7f",
  "key31": "4ZMk4qpK5bd11gRr5FpuVSxPGfd2A7n8LwnbDVJLqAnPK9CYQj8puhXybPkiZrcm1oEQtYr1bVVcu9dNzWnC5KBZ",
  "key32": "4X32VTrTqmsSJj23igoyGZ8SERWR86j9J5jormLQiHGuW32rnLjbBTjVGQtSHJeHL9DhnHkyS2FwiNZGwze9x3EW",
  "key33": "wE3mK35wXtXpAzYQYksKrMBQUGSqvtFSCxDBiGifysjJr3jDzSLngUAQhnvCg8M7r1qjhiwHbVjnbVZgcdvb15t",
  "key34": "njrLCqAQBtdyANkPNrdMMnthZ1GPhso9swAUoJZrQ2VU6Zi8HC7RxPpLNk5pJghxcnY6bVpy2UHpQE2pmjeSMxn",
  "key35": "3HBFVEBeoA3vXUrAaVcqPi4Tx3MYkyz5ogS1LpRWBGGNou6aBpTVbzEabKgEWtPWgFNKqvWVgKzxLnFyFceqKCNp",
  "key36": "2jJfbgLdvdxqRrCcvFm3ENNQBrkcUuMBm3E96x3t8HAYv6bXjxLeZcD1ZejQc3ziLTfHATigAibXMRofLFFFR8dW"
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
