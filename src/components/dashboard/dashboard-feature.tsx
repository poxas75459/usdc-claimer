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
    "28udv9S4VThL5bCEjD1rLxbSaJ3m6sAC8D5VJs23cE5DPpEQx9M3KEnY6y3X1ufWMQhgs8BQ233d4a79pXoCXgVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHUgTYPsVwoNUSyQdfpoT17KA7QZyyR67k1PJTQJN7ZMP32cEfRsLTijccGWbGM4oqEyngEFPqf6FT2qYDLfE6o",
  "key1": "48GUNWdL4w1jG8ZqaQn3kSLo9WYDC5GLCNEaDs56CTPbjZAtDrKSKcnaLM2JXcEvYQ5tGKyvChusSG4yQ2oBnZhs",
  "key2": "2F3LAhpMr1g8TMw2sayfcTCidv7epaYhPd5Gjpuztb3EuQ3gb1ZnZ6yPb7gFiQWVHJHWmnsTWWwBaAcCVK4A6EMY",
  "key3": "4kDcgrx7wpY1WyVY4soqyT3M6Y9bLpxsmkjBBEtRaPr1B2y18h9WG8sHYMKvdwXa5iqoRkgdP6yJtBhArny91ByK",
  "key4": "3Qwwjwa2iGymt61z4oDUp1KZvhxovS9MTaS3cLZ9RLCdbSeVR6NAakkMRWmoczMywdY8t1AyAPUc8tHj7vXbGrxz",
  "key5": "3pKskGTg6CyiKY7qJW4Ld6WRUxQV99ExuBQcpPL1WBTeHU29HDPUigVAzs9VpeQ7Ear1M1dsCw83LGn9a5EheHG9",
  "key6": "34tPJYaS5YT6sGQHEq4ph3NWYD5wjxFhrJoGub8J2FFonmDuSqVQLjoJ6YubiC3T7AcTzDTQ7Y4QGRJdHcGiDDTm",
  "key7": "3Vf2vZUmzMJqRSR316RuQmixneBqRxDsYoME7kT1Da2iviGNBoivWw3i7WqdmFCbNvE7Gn6ugR4ukEHddV8vnbEK",
  "key8": "5KDpjLJASG23csojvSF5A3oXBiTV79xtgRBTxABSYq7HqfcQJJ3jpcygUvXN8t9WKN4GfapanUGrYSVqAZGCKEnF",
  "key9": "25JcbHKFyni933wVpSqVjngasHVBaxeSHstZfNuUeGcQJWX5Zx55VxA5hrJW7hnH42Mr3w9cJjhfC6WQxuMJz3bW",
  "key10": "2VxbUbrvScgAXioR4mWTkJ4zqYVShAfeN4vmsHT9QpUJRqaJeDAPshCPL6MoJT3eZVN6fjagNYUiWj5owXjajNgW",
  "key11": "2Ps53GTL27ZqTui4PFDQ2hyG4N6egQ3p2hQx1jznW8w1mw8KhSL7ZFuka3weorwv6Q1VryqRiXsmyMjc7shnq1fL",
  "key12": "Boximqxt5VaNVcDSJ7gDtav3kqKqjGVgz3YW7d4QCE7Hfzeu3MaTy1PeA7yCvjzNsueUePRmpLK56P5W32T6WPc",
  "key13": "5GYWUb7irfrv6WAxhEt39Gg7ymX99LK8atPqg6wcADh1HH4UrDhhU31pZBuAUTHHNZ4CkwDGPYywLfYThfpY8Ehm",
  "key14": "3LqrLxsnPiJghfzizqHdfd3mQ4YaMu1pFPKbCQZ3QXeud9iPAMfqoxS9nkXPbFQZyVH85wCV7kuBEzUpnbPTTXYA",
  "key15": "3KNyfob3f1o9hbSqM2xUaLCym7jhzcJWmofij5MSVt7h6g2S3bwwsVC22asw9U4eQZpSWW3XUdTd7AdAoK9PyZDp",
  "key16": "H3wxnefsxFg8hG3zeMiFBvnKNRf3veZt9KJcn6aSr33QyimqqvkhFDUedZZrcuTYGtWYBrV8ERL37bdnuhT8CV9",
  "key17": "ZdmMk255nBBuYCAWpjD32yG8T1LZJ9BcabJ2WsPyFYVuqXszfy6J7miQGTvCBp9wtp9wXGWhpm2wYV4EHQC7ugQ",
  "key18": "3hTFcvmbpY423VT29vQQrWqSb4k5zw6X38iyCC7SjPYXN8tAtzhvjA6n652FaPZu8dyjcnZ9wK9aUWUTtPbkbEs1",
  "key19": "2GiVBbhKsWFmnyJfu5dqc46437TUq5ArmnvB3Z6PuaQLJpdjq9DMeXLdG2UJ5GCFH5N4uzfYJfYDVSWptwhu32Ym",
  "key20": "2QSLEqXBxpsDQfYTRVdFhdrYbh2mshUbjKsGZAKzMKVjwsiFYFJbUURSJbGEMYxj3MNDpeXQEQEV5TZrELctBx9W",
  "key21": "5NMzrK5AKP6KCU9sS2bAbV5FQMBJ899uuC5rHaggimiaMi2pohx4BujASbYU5GrqYTz4xhYkorqXTp7d8CEwpgmp",
  "key22": "3GFLmYgsFmwmrMez1gQZg37CKSr9upzdTZTqDfseXYxK4sWv6N9pVodGbLkR5U5xDJPwrgq28yHb7E7Xyc73pRWD",
  "key23": "3kuonYVpXcoi6n22e7c5JYupRPPXSqi86hWbZ6KpkwjthPuKbFSjDJkP8qDpiMRGSKJyoT51SNXXALzVfZgToE6z",
  "key24": "2KSvTEVS73zcBpuSoXdq6gXJJ9gK2Reo5WwJ76Yx6rTHgkCKM6oKHs1PmvTabuPLAK1r27e4vUyGesBZQ3b8ohVr",
  "key25": "3zGnQx1RZ4b9H8ZnYArsWtVV9dsyrzFRcqeCzHHU1rR8HoduCV5uGofBVgfGCFmrsQhssMUEh9dQm6xPBvPE8JUf",
  "key26": "4PF8rW2tibR6uowTVqKSxabxEr6UgLXf8WtiDk45aZnmKANSUPUuogPiimDhrauVopH9WZu3tuVyvgzaU95RwMwM",
  "key27": "2cSiTyCgApbfkNgqZj6qwtx9S472ZogLwRE2hVEe11VxkKyrNysTmMmW6yphfA2LGt4tZmYt6m5CtBMaGRXLD3iT",
  "key28": "4o3H8FuSjWgGK7Ni6ALJRkjNEh1vNy2bAB9AhdGoEXd7ahHrbNji7knALEhj9ebr1Wp5SU4QXESGuGQp6fqeKVNT",
  "key29": "2wCBvEeuVaXvQVzDSg8eDpKTLPdSvQNqTHSJ4dZPxBmRsYP6jS6yocUA9TrhiPPYhV4pghgCtMV1eKR3suMwL7sS",
  "key30": "rF5ctLb1T7KExELxfEusFNjPcjAYtdKUibiRziwahdu76Fb5sY4TJS6EhhZdFnvs3cMY5wB5HdLwRz4Vnwitafn",
  "key31": "3bpNFenkGAPjjXsaNjj8Xc8Xn9RALXgH4qogkekAwQeMB5CqXco2HGTZGjSevvBbw85taK68sWVgrgEKWMacfDKu",
  "key32": "LmPC131n2nXbu9KNJsmKLeaBM9pHKBQNJk29JEyu6bSsT1tyHnxzh1ySRdxJskgAUbjSYW6ZHwAas2bGfCeJHh5",
  "key33": "5j23Cqef13HPZp7i9dKXqD98zrqsfqZKYYKaZjVAYbxbaqjkYKsmfTcTCvdhk3Z85WmRYGd7jauvobXEZDD2wNwe",
  "key34": "41uxSYnmNDdfr2Q3VgcFqhvY8wK4RTHfanXvfpHnSCYE8mxaJnAwut5sxab61sAakL9dvA7T62mSMygNxRfjs2yC",
  "key35": "3kdKopBw5PY6rbnjgbfBywRYz6SWLDcS4cDnpdqhTRKk3XXvF1b6ZXmm2Re8nBu7uwNGzjsbvr3XN1LwxUfSi97a",
  "key36": "3QuiXP3DKyj7BRJbHFPp81HwAnW7VVCzoj9xKrgBGSY1k6ok6otxRUAUFkGEyP4hn8eA8qhSqXf5FLqdKiKsbZt5",
  "key37": "24hr3viTVNcQyoE5WsKwWxc7qWxnxYF9etvzBNTf42z6VKB1is8wJLSxxYkzAzKAMpNP3xhwUxo2bWAXXHy64sdR"
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
