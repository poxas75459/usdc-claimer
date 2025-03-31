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
    "3duwVenZJmaB5UYXVTGBfrqf7mdfqpwvwDwRX64LQsjewsshy2eVJv8qKapfMY9t5Fw4Bj5dSDZKMboURHTkuEua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSdYfUP2gCPh7FGo7328RpC5P1hygdHakzX6faD2F9sFidCtF1ntBX1GgwvUPLvMnbGQDuvwwRg3PNHEJKBzRXi",
  "key1": "21ostydPVauSdcY7vwqbXggqX8JtsPz73Jt5QApfDqxSfyLgA6B4FJgFQNWKGkHuKA9vq7oWqPg3TdT6jMhuinC3",
  "key2": "4AdzLXNHU8YZ4Xvmj5QQMdALMUeLmBCLZnHBVNxnayg5QserP1kiJK9Pd397tFUzoeoUhwiKRh2Sx7tEvH2kSZru",
  "key3": "2FJmhPFsiJf9Kpu4DBZMzekqD6RvLXgYmQ5Fgb44UvXtJehFMXPLh1pDfeqHEwLpx2WCeYkuWm9JDqdu4LkJHuFZ",
  "key4": "5FMWQobjPNqYK8DJf2tmTryN5hJkQmLuA6fahHDzQWVW95r1Z4JHjQDEPaXmSGmhoKv43yNuKH5MXiJGyMooqLEf",
  "key5": "4PEG6Y87uNeUzixntzHdUNXyf4ZLZAT23nHWtFdHYPovosVLrix1aTGHugmWH6pKHGbWUqpiRuVypWEdXPiSzzkB",
  "key6": "4aWovcB4M9erPtiDcnB8FJXVnhTfdPhDzN3QtC8Q24jQUhnR6BGrAmYxhD4zgg7HHqPmsEgCKKvmRLtqammE2mZ4",
  "key7": "53FhGxPaiGhbACrpkAZuxBt6GcEKf7gadTQhXUErKB1KmQXGuDZsod1HcUkn4ebAyRrAdB6vfGtUZSmMg8NPDGTc",
  "key8": "Hx1iW8VuXLJ6GRAt9U3WWZe8EPjS2Yn8Gq4o5tu2LxwhoYDn42Gz2EsQh4Vz8zMXxHB5FXwhfSZqjwm3weMXPWX",
  "key9": "3THr2iVewjU7GgpfaWRykDvYYLnF7iDDksTbeTLqHguRw1AgU9FZgd1kJLC5KpWjCyBdhWQZd5HfEJT21dvzWpXi",
  "key10": "4KpGDVpwTDgHYa2KKyXbutfQW9ukYbTvrbySrQEsqAzhzqx3hBYhqwaaQupz4quFNBGuZYXdH24YDPiJMKMRcGaC",
  "key11": "2X63v2ZArYDcDr4KtoxGBt5p3kMFb6bCsipkadD5hakU5BfFtLzn785Atays7yNG4oQRo78TkA1c4mDco4qFGtzi",
  "key12": "4XmgnDT6mrLi18P3ypn1XLTwkVKVJAoo8L4bo8SjkRvQW6s7a3nqLFLizcqi6r9EG4hSKCydehUN9ctrXcws4YKq",
  "key13": "4svptJa1vLgfK4YmCkcTtE5qTvsw6CDmp2ahX1M2a9RxeuZoy9GJmKzCWzr1qURQ3qdhnr7STi2YD38hoQdhr7V",
  "key14": "2LB9izsD4AucVSTFeimi8Rmusre8RsZ6nCaihrbbRmtSYW4t6NPsFLmnjSFe6sF7kLw3btC6pKGjBNuspVF9mkGC",
  "key15": "5JA2xW7xDAhoFUgA7t4qqCeP28U1xgnEBhFTxeovruYtBhTZdriVWRaEoWnaJiKrK9m9PtmcKpAPbnareUWv1MLc",
  "key16": "5jcavDCCaZwtWe7u7b723c579HRfLgZcjiGX1F6MC1oXWwjggP6MM3KR2hBm6cFjjjUwe9ijE5TvgjcLkoeNtC1t",
  "key17": "31N9Yy4vsJ9mAgsYCkgdz2u3CUmFPttbJNKD5M5FidDKVwxnjdUacYEijj4Np7XVShDffGNczQQb7P6uBXfCyQn4",
  "key18": "3oaXq2remBVyyH1wVfPnBJuXd5CDWQLMFE4nxNqevZqvqPtKFyV4723gXSiMaG2kz73tNWnJa3FriTrs86MwJAqL",
  "key19": "2a6x5USwXgPvytdZvpZNhU1i32ewZfAjBNt8ihEms3SUJhrsPeqqjFbn5ob9gNwNVHuR9MZ9BdtZDGowJGBFVYBy",
  "key20": "4nMQ1vsqeVzjvHgr31EJayKqerZPjh6wSUksCtAqQkZyU7SZTbuc5VtCGXeJsJEFqJTxH3Re9Q2ri5dFY5CQP2J3",
  "key21": "cQ8ardgYTZk7qeCtyXWoAvGvwYmRh6Qr94c5Hzwc5DkEA88eYqdHiQEipz8kupH1La1PyG6zZxsxKBgg3X7pEmn",
  "key22": "661FUugB9QPgRaySuEzxQFqZo3ygci9PTRsvPXWpirgLhStQR4e7fTZ3KriHv4BKcXjNxxYU5qXaMUY1H4W8LVu1",
  "key23": "4WgKyVwkjy8VfZaod9EfP5TxQ7qYPtt2YBVzLkEQd8NJb8wKC4KKvsnnbn8Rgx4vf1BG2Anso4RrPKJKJAAi1mJr",
  "key24": "3LZ6SsCxWrvjspnSSrEshsSK1C6YznEyCB22zpDSH3k2UyNTHTALRRfiFFxpuCS7BgUms9UELSkoYL7QiY3G9qMm",
  "key25": "3Np8VEqMdQC1XraRhVvSAj2pXeUrkmF8VqZhtG4L3QZbWAuLzM4CRRMEEFn612cpQYvd9qv4aPmuMwcZeuLzjQV6",
  "key26": "BpV1tsVcJ129zMhn7R6kgNFSa8T8QyzLz5tDDDUJWTB14wesvtPQR3Y6Ho82nRD3ueRTP6vpnPoUaSSkHBJ1myQ",
  "key27": "5ABBtA5buNv1yZpLKo6qYp4faARX5cjdaTkXzs2aPnMnQwtcsmqH4ed1h1uhbKLrXDUdV7fXwuxn3TnSVHFjMctK",
  "key28": "awJJMiDxjmTJSPdXcsrgLJDVLMCNY9wRivi3LpXsa6S65MbGFAQ1Uxx8G7SGBPJ7wc6W8aGNZ8q3rTeDKoEDgmQ",
  "key29": "3wre7fUB4AjFvXQ31nEspTZS7haksm8Zpwq8Mr3WdW1DhyKfXWKA6JVpW9Sf4HtKfWL5RuX8VxA4nCUdxkKNQGRy",
  "key30": "2CZPcnEiu4dAwQZekbo6EH7ZxtNMcasSaSsGvNmaRRD3V18GbDqzeVkjLGX3DVtEvWDTxbszwXgqipyW4XL9FM6U",
  "key31": "AhrZNxh7vnpqjpHjC3f13BMuCDu2DvqcZTdyM92ecBk15PuZPbktDpj6F7C3EPvH5aPEMvzuBaQUQMukK7k6feU",
  "key32": "5KT5E9tgCrPxNxU1MvbUaf4noSQK8u8MESkTaYoKTLCMost5JCPfVh9Fr7saU2KWPbErxhS7CwnVwPbZUs7V4coc",
  "key33": "62F6o2VMeNGEgwWigyZdSvF21sEnZtBDrKLeNLyo3NrGJTBrZgFdAZPTrCPEYQ1Va64oezqVr6ftKgmtccqzMe2L",
  "key34": "vKLafi4FxvnfyPfepkbgfGYRX9mVotGroDpnaFbwMxkZ7xAehvMyoddDTvudtuZD4sFyyiNKNxM6ak1wc5oBqp1",
  "key35": "2r19Nc9U5X8rUPXMLA1iD8FonTRGin9ojXeDAAVgsBcU1Uq8isbQCLChiHXBBfQzAkoGJ9FaTZSxvR8rWRcys68d",
  "key36": "4eWNLeZAVG8zncvFiu94dPoxGB1zNRpqaiYM8s9hVJigX6FLe2Gu1V3hGFQT1V1SdwsaNYu7cepNi4eNGARxKrtj",
  "key37": "5Hmt1zYo2vi4qdczELjk9x1r6qciRLC72uKDutGKy6stNcPggLa6V6UcEQACTiEyYZQWsg7GTv3oDAuNHKUg7ubU"
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
