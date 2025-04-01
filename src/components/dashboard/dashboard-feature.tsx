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
    "33uevqx8GcCAwPFkTid87AnNzkAjM43f6KKkMGuUn6qRyNaRZw5uaTA1Cxv9voeiwDYkJJ28ed3Sd1APZtw699Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5WkaiWnDAYTqnR7rfRAaP9gqMxBYSHxteEcjW5HiTzH2N2oojLSVfypHxTZz9BXEWWc8kRHekSPgQuAMKFqf48",
  "key1": "4TWKuGXcWiVRpma94kVKbfz9jNLee6neWS2BMzrVQpSXdtwCyJqheq4Nm87cG8LbtFVUdttXoNprfquZ4xTKqBjp",
  "key2": "iovMkurmykcgjvGxWh4guLfE8ev1QLkTGsMG7kLRtUskSqDa4mB9LUnqjPb44inbGoHGG34qCgRrYHAS6CHcmFZ",
  "key3": "38Ae4BJvWpvfWPwurCwMCWneYH7RXLuh3roNxci5vPJkSiuGp442smej6rhQ5ukC6HYX2npWsJV9PmreM5pL7VoV",
  "key4": "3qHLHkPqAhVVneZJeEYWMnhammHB2vN3jjvz14U3jP7R7b1d5jFzE6xVwnFSs2THBjYBxDn2kDPZBSGqhFajMjZt",
  "key5": "4zX293qNVqUxc1CzPbvUMKfwEFFA9RY7WfYQSKuYwyYcKjJWtTnq7Zj6rQ3CQT6XuLZBEyjfH4AmGFS3xn75axEb",
  "key6": "4bWmCvZkLm2uxhVTeEizRg4GmsvWgUzs14KrkrpXZYAQweHJrnD9sRQK7N4siw1fReYznqsymSaXEHVZq5xE3YEW",
  "key7": "2caQvZ7g4CBmA1zFWmkecAZknddr3iYTAoAa68TKaMKNmWF5Ch6ZZ2wUv4Lm5AJ9kckbUDW4h1gXyNE748EhCi77",
  "key8": "5AhVC7AnqJM5k8KxADwEfvKfWtUBHYnTv7wU7NTAdkQBJ9tUiXx4B7ZmEF91nb2zEkqVpfXnKdpDFYcS2symiJnp",
  "key9": "mtmu21ozVi7SovnVAFSxfgsSqM2KJDLy1beuQskpEMiapYg93EvPzZZ64VXqjmBACmEnVGeKoocZiFkk8gpgJrL",
  "key10": "21qZCpzsKMx5hLQ2k1dSeEfAqjrbq4WbmU5nY7jXATHQhtfkAtZ6zBxVSCLYo6XuZn9mxM56gyEBanaA9JUumW19",
  "key11": "4e28ugUyuk4AiidG45Z2Qgh8rQy6QvdZGL88obE28hTZSxiRzxGpXXWeJEtKJ9Dh9KhPQx9hfqcupCZay3P2XT77",
  "key12": "62uQSEGYzQEqMKSSQ6NxuD4mQzNRXn4YWBMifR9uR5HekRSevHs5Rd9ezTzUsK9PFFvbhGgaamBAxbaTZVQp9WwE",
  "key13": "7gT7ZKpA2RXPhL3sC5BCza14PhvjzDfEANTo7vyM4kFnrDfBn27AsgxtMFwjw1TzSiFn5mCGu5PnrBss3e9etH9",
  "key14": "2QY7Y8KRyWD7izKWmrJB3PobasJcWC2mgjPthC7Qx7dvkvxqLFpciPVKh3632Bmv4wZT3W2URdCuzGtSo5ngVrc2",
  "key15": "21Cqyg4YPHEoX6qGjDa1oimRimDTQFNnTwDWq1S1k7MQJvkNtF3RS1vvCkipdtBYwsTyb95hnmY8kowESDYAQ1sV",
  "key16": "5rgjMb1SKUQGTwFUYDPDs4zcbdLEwuWaB4VCQe13S8uzjZ4zb27MU6PmzUB4knsEqbqcgmG39vA3hTyYTjZzVa78",
  "key17": "5dFwrjYZce5BcesnbN8n8bBmuQ3BU6LhjYTugak6B1hY2E8FBqNn1SYguUCtNtKhmJJb78PRcSMF1PX7LkhH8QcC",
  "key18": "wf4mvyfgRPa7pmyZAccwFkLFX2gP4MVfYKdejzJ5c7HWQN5cfS7iME9PpKiWzNrDRnK5SdYgoTjMc7wewQwQfGT",
  "key19": "5FPK9qGAg7mRV99WwwfD1FadRLCzVpTFc7vQj5vDxvSrpPoqTZSTaQxnRZuWszYtvEoaF1QK1YH2Tzc1muPEyZN1",
  "key20": "2nyog1ZZtK9nJJ88p6DJ3RZHU8Fu8Psu5foUU5Y9r8Fw96Rmy8eESRST4MkxsvjTnxjzehaaoP6533UcJfSxSDiF",
  "key21": "446FCbBDtwzUWzQrzNEbHKLji5q2jY45Het6XKuDLoyL675UPf8Cr5Kk1d9GqwhDvNMt8ifTAGheFtuad2jvacJn",
  "key22": "x98mktbQ5gqBhjowzJfGvxEV3fc3PgEP5zphMnEpoStjZQ8LKNN3qqGv5522hsV4vUFmCE55FA4qJGEVtc9E2Hg",
  "key23": "3TuXsAfNZA9heaHZwtff3cuGGkiXvJ9p4gZH2Ye9xpsQxcY5wCv3SvSBhHHgaKg1PDcy7kukwtC8pRJpVuwGe4Yj",
  "key24": "61DtxDyApft817QT8KfotHn9HrjJyvG5FwPBn9Ms4QNGsQEiai2gqB5irQSPdfxNu1U3pLngG1bBncusJJ4sNmqP",
  "key25": "2QKDGwsL47PT3MJm4ZRauQ66TcCSkWEQTzB4jYCWQe5F6nVq2rnuVXtF2LudEnAtNHqGNiQBeudScNf5aFkzhwZv",
  "key26": "5yzHFcMZtCJoJxRzCBSXUQ7DKBtQxbJsVrzE2XuhiQdXeUG24rZbRgrM7HaWKeGBWLPe4QWYnVq1ftMTHDEY2Gi9",
  "key27": "5L2wBKgwGvP8kKNMPwf4o9ur2ZcCHRz6SMnVgnb6SqeRf9iGTazNcrrfy3ygJvwGBanCyoi6H1qAz3LaK2eCaPAz",
  "key28": "3qw47awpZpgZdybnhuoVr8P3iWmU26qRDuSZPmn2jMJVujMmZmabVW1Ys7kADaqHvbiRqbUHqB5xMkM2Rov2A3pq",
  "key29": "5Xbv1FfVgspgdEB3L72FcGFtFFrhDqAzSsuXNMGvSPiyUxe6HX861xw75mqqdy38MGa9SdL7dmxeXEcDUWT7KmjW",
  "key30": "YiXwx5JZaVXV5fVphDXfdWFNtdviWVPukJJWWvr6M4z25aNCDEqidJzXyiTS5tAnZdV7Xxdi2NPNR5zxUiMtKgT",
  "key31": "2RGaBYiYf1LFawatYZDZAEZtxkryQKQ7MkuNRuGCvKvfx7C5pzkF82iCagrsBTpfbBLBar8GjtBv7eABn2ZK71wt",
  "key32": "ZN271nByZgY6S5BTDg1e4D5379dKvFR5poMeHQnQmQ8NrDR3t5tcKZrUoNmZuqQCNNKD9h77EwU7YVGztt3rXiV",
  "key33": "2zG3utZpr7vENiASV5L7d2JPkVBRGj3iXw8RUZDG38PWd9kdtiT4hxUpsArLexeCRSYD9dRP8YoqxswrAqnjaWfu",
  "key34": "iKvnbJ9qPzbgrwsB3sgQocn9p6tUH25hL3QQLQMPhYT5rVUP2ixpMnJ3imPVawBfvBzraBdKFGShTQ7B3KxzqcQ",
  "key35": "4XLdsNUJJJUqPYaxLr5He91J52g81uopGPfBYPM8fay5ukdW9WTcqGjZcKQhnLzrmbcJjRDmvz97rDRpdy8xDxA9",
  "key36": "5FjrndyTg3sk7nJSJnGipMZUv3p6rXqZXwvVfHU9iTZAvHMTFFWEQbmZB97hN6hEFUNp5zap3gx3fpnrG99H48rK",
  "key37": "2n4LjoDqfRQAjo3jXkKWmYCx4cYepgHSyv4u3QZMXhufvhChD6CNFRChKYjQUQZ3FTdTFGyyqXwJhoeMtvNYa2Hf"
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
