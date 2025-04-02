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
    "4HB8GFm6pbNb8eNieYjD9suNKu5bp9vaTLqkRFcwqB1uWaj9APpu5TuuBRYKR8eyCgbkKWe4L3GFVvd29DHiUo6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yuv3vVotZNjHg2qxz3f5QAjphuEw8osD5N9K3pgiEzjrnuMTzMEg5dmsD12j57n2gRYy8phRJmcdphqYGjojpZf",
  "key1": "5P2JFE3haSGA5bffdeF81T4o5LQoJNQFTdqAqjWVQeWsM4JMc12f76rZFHB3jMixnpjpkdCXSLdJWprVESCnsTZj",
  "key2": "4CVAS6fSTr9pSLbq5HxXnBdUJdhEv8YUGJtrCdBHfTxzWxKU1DZgoSfPR5LgWBAqpyrWhS1psdTC1KMLw8QXDNo1",
  "key3": "58M9PxVEoFgJgsEkmwQA2d6zqpCyGEfaPPXuYoDdkrHWKkBTV9x4RNJbrMRVa2h456kYRmd45B96DngTmffrpFos",
  "key4": "UqMmcLwB87iJRMJRGezofnPQrA7kNVcqxpj8Zw6boLqH9fUbGNsFmbGXH5kohqYiB69Tbf2rNxFSK9ghK6bP4yi",
  "key5": "5VFq8kP5M6BY5W6FSHEcCeeuUAguawHoqjGHUSGhXS7pLZDLrhasCJbqBUnNtctiiGrZZvVwb1jEsL2DFbZKomrX",
  "key6": "4dWt5FJ3j6WJFpHcDvN3o7jdNURZDCspGoJcaga8nxh6ac6ppddu7yW5pyUdkMTrfG7LGrvePkrfbx17cJxvNRvE",
  "key7": "4ateeejZxvjxmmu2ff3inSEyHyw6th8hA6Xt5SkzQNSRxmXkgc8pNqv5Pu8XTWoNU2Vo5yUDoWcDoiwGPiG8464F",
  "key8": "rAhQcoURo5DXRnVS2X5F9bjaY5nMF6iqbX8AMgVaQ9yc3KckV3ibfRVx1TJqqAx58pbWqQX5ctMWfEZVkiS82o5",
  "key9": "5r4BgmHPWc9Dbda2iubdjMdX151sXKETbBPZDJM2JjUxVfEbAtz8gk3XGc7PqVfzceLjx2qgxDHn2BukVvjSmdAK",
  "key10": "5RjeEk9htfyM1D5zdrBEifs2eb67QZaGmzUkL8xHGhHEb1w9Bg46q5yB3HXnXktpjux5sUHVaC6tX5dJ9aqRfbab",
  "key11": "5i7Movk5HL45WK3vwvKyjnzTK3ELQbGmfSdWqX7mVwnzLqwjbbZZNt6mf8xShmNZST5V24s1cCD84BrmqsntFWKb",
  "key12": "pQJNYyu1sK19Dqcu8sahUoCe4kqZ4YMrrsJzjzFjWoQ3Wm7fQJEKu5Ha9AmPgiREXmLDhTFxPbLJW6azhHbkPVp",
  "key13": "4CwmdrSDTfBCNBG36UEova6gRHNAVvzSSNyUfBbYvmStc3J8fZMX67JhwoR5YCZJZNVymABbDgrfyp5yTMTNAaAK",
  "key14": "25sRuSjMBqWx32gAuDRdB8oMVoYLrAHbhT4c5gHVQZN5eZTn9KdMVFM6fw1J6d9uSC9Fw4AopFcpbe2ExTjdazDi",
  "key15": "3jfU45iqXZbH3gUzEWmWVu3ycJU62ZhvQLXJv8BQ8Q5dvjwTcxRZCbvzQ1rSu7adu1s5QugaiPFzUAmJ7MVcT4Kh",
  "key16": "AHA65dEwozwradvd9gniB1wjAWzcTRUMh2a2erhZEQA5hZ9QgHihevoqAoUNgsshE6TNMwSfiHvXL3Ucgqs55Fh",
  "key17": "3zqMWq8z2zDZ5hSbZfsnQwBvtMxfZzXxg3kkUxwh9BtqjVyB2pjgcGFxt4T7VDQKG479DJa3DhWwuGtMpG6KX7LN",
  "key18": "qmSasHxGmoPK7Z65Mam8fR1mVR5rURTAMjh2yQfdxGJ4icE6Fm1y7GJtoxnngejZX5QcNmdBE4TNs8dJ1dvuKBm",
  "key19": "XJGHJpgK2aE71cnZXDuXj4BZtSqEZWGzhEuLr1bYMahVjWyCd8jrn6pcvfLkhyCDpgoq91gMaSA9VGRLD1Tox1Q",
  "key20": "41tqzdzDqnAoyWmp1fbb4gHNZk3LrmnjX3t33sVNb7Eo3vQ4zQJq7UaD7vwJgh1E71h71oiRoCNreqR6dYtWSwgW",
  "key21": "4CgRTpNzVaoWjUB3SkNGdzFJiyg7zkJ13bDKANRYSDGo6QMMAept2fCwsGfmzLyejtuTTuoVquNHjapD6TmAnR7h",
  "key22": "nkNMsmY1gQLh7xXwe69wT1QMg54CwxWXqWjfWD7DV171ifrhNW1uTxahQwaM8mQ4dbYAy6heMPaDQU3JT7K7MJu",
  "key23": "3cAJgQDN1Qk8dyeLzzgsqADeijea7EPHUXj9vqzpNM6AQF97SsF8kcSuzPThqopBCGrdyb47nyUWb1TgEKyF53HP",
  "key24": "4zh88qc5nFBCp5qY3ABpyHWRnapB8erDHnVhdJeiGEaWLLQEe7xXzibmmPJa7VETGPWMNLiSCtH4zsysWnaxLCFp",
  "key25": "2ySCyTwMRwxUMbZczdXMnbxzkPnUCNBqtnNnmB9zQcGmXa67shH61apZPF34zCBUNGViJoesjcK1vZzvJx6vByjr",
  "key26": "dZhJxCFgStKaUSuJBSr5MMiaZanz6tLkmhwmH8R4aXkNrEoKVhMKiUiv22f527MHWwaM1FAe9dHS8fMgjuZnZuU",
  "key27": "34NV6XmqzkFbJ3N2CDeu57PHodUCXBjq6rmV8mHUmwwFQA6FBxUeAysstdRDrth8JhnoUWasnjNm6D65MC6B1UAG",
  "key28": "2DzzCxbKxLodbUkRMFzWY7iFNmrUk9MEAnUu8DynxnLwn7qCEgqH1km2nHzFTKCMBZfoekAaAubEUyvpFrjUBYdY",
  "key29": "311RK3CFedttJXL4VYTWJWgPFxSgwGvkGP6i8nJKQVPSRQKf3zbqm68BeD3GVa511EZF57mYf4wDkviurXVbMqqU",
  "key30": "2kWt976GYkLGYfLB8e6RBKbhkFrHUL8WePrNftQsjqwYBuuJosrTtf8VJMDAstwiuvNqqPDHw1ApAAWQa66aMWvK",
  "key31": "5nfkvVnbrqHAkqKnNKvH1roDrsL5na3rHGHr4h2XdSuc9Lb4yK2ongqzTpZvJkVtDt2ZdKjqKMtw8yxnuKb5x93U",
  "key32": "LiLnb7XjkBxHRwwMT6zRjuTNo9hMuFbdkGZVG6w7GWKtU4tnnYYjWz56SoNaj1ZUWpfsUk12QX57D7qb4rJeBWx",
  "key33": "5yDawdPWdHq8oKeTGuD2JDVxuZ3JABCGJsCjAz3CyZeKbwQndLf6o4h8HBnF8oskatLdxwBrg6G5qSgnicTouscD",
  "key34": "3cjYv5pmGihWeiVuyM5eUC7ymUkdpYGQiW29Q6FVTzuTDCPKqJDGDgDkrSRe87XtTh4yFkcHQsMGED4YhiSPpz9X",
  "key35": "4UJndjtogWVKrAYR3q89TZxuzgzqjYAhcD5mNPp6WgPM8UhAahZgaBpSngHbJsTtgjD6y5SqtWUq8zeKHxtTn5jQ",
  "key36": "ScwmLQZzm65UU5eF3azXqhvAy2Soi5MNXJZZPDGV2h8XpfTkyjEYksTU92quYSB3Ka5TAWbgAfCi7vZgK9BvcLN",
  "key37": "Uns6nZfc7PV4BtpncZn8yEJpHiC393SjZY3gjzEZjPmaA4feBozPb2QWHmqpqyNu9h4zuw3S5Byr4wTC2kNarVs",
  "key38": "63Rz4RS8FEfgR7jgCUGF3zZNMbSAmaCzFaXb2T9jWHzZ5pbXDX8xRpKWxyww2xXmKqtnL8xS1KWGGZWEmxRnot8U",
  "key39": "qHFKqPJkzZkQ5rR4ynYjLa21TEuxVTMSiaphMmbBmNXMPwBWoVXUU9ujPyy4YSqMSnV2puQBu3S1NYocpxQJLMi",
  "key40": "4SLQnEgzY8CTAqmZrmFzJzL7nAWZQVWc77ykQxpUim5U53TaemUSaFnz1bsWSddnV9hngk5piJwdhKWSrBQQyU9t",
  "key41": "Ut8T1zPfinf2s4aB9YucVDQtuBSzWkRvvfCLLniwP1xuXbRUPY5fWSAXiLuAvG4oU9mWhk6UMymioxKrvRxwafx",
  "key42": "59BVKgXYQXXaWJ5zTam7qbroKq7wt4QpJV7LjBPrpfNu7MYGHh2VtCaEEg1yYs7ak5mxgNqbWjUXktKXr59EgFom",
  "key43": "4GUuWyG9etko6qNSSfMmjvUpB88spapViLJPUHC5qsYWSqz66RrGrTPYs8rzARfhb9Fism5vwR5Cako1W5Kfeax7",
  "key44": "9Us6dBz63CfhyzxULuGHfWSXHWqRvF7JJnEtRQRiBmpbzmfFmy2M1RBhBmZwR3TXYoUrk4DX8udM6aCC8Y2FxkS",
  "key45": "2qr5W61AEfFtHXM5bgty6MBt8HdVi2xpqiPQwQFYGkVPuz5z7AfXGXZDFSEAW7wkvPYoGUHsh1AEGvDuspEbXTQB",
  "key46": "3Z3xTgvuYfq4C2jz53q8FH6sybb6bUzmBaX1FUdoqyta6vedbufxqh9phD92pzKg7bZGqpXizovkQAGhBec3Rcvs",
  "key47": "EEy3CM8nenTzTJ9zpYXYKrpEyaCXY6MoCWfaWnq8C6rUkoW2B3TXanmYV7NNunGhzQXE58YBia4vdjXj4MWyTWB"
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
