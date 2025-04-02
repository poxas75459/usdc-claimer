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
    "388trm69syy18WP1M4Xf6FT7WT4kuk8AWW8kX41TGfVXyTxbVRkiSSMHDytfpM8JUPFSiCa4GZwHGR3WaZaVzUC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFUipLh1X8X3qP1jcB49Q6qZNA6gqZP5N1U4YkjTU7oxWqmdYk489voY4iqqBy9h19U4fzBZxxNthB1oFfQdNG3",
  "key1": "4oM8Y6wBd2cPJ3tWekghDhcRyNWmVJz5UXYCLB1L2PrYGjFsgDcrVRKmp4mou9PaUV6kWeyqusa7F4qoMPcrPber",
  "key2": "5vnYWDAnWhdMqAd5zgMA71MrXsaXRLZmjRtefimd43pSkhTjJyfm79QwM6tjQhBGxuJ5oDUSiCnprNFxiXjoM5Nv",
  "key3": "34fj9rNsWod9A6hyQkqBs5pKePMF5CXY6i8i3jS4gue95zNi6kCkQZnvsiw77Xj2mB4QTnJxPj7Eqyuy5WGitWcK",
  "key4": "5txaeSaeJJ2gVitfwuyn2v8m1MsNyVrXaniHBqTDnFvpyBh7hGYHq41BfTfBs8Xu3pCQgozE7CVDg8iBH1K2RkQg",
  "key5": "5GR5N8mMxRso39U3CBkYrPmuQaZ3jpuR5QQQ9Kp7wHbMUEKBJM2tKPgB6GVyXWEDeTdqHCVU6kyXn28XPvtGHVkd",
  "key6": "5QUS1uhEPBh4RAqwsCBUPv7GDxtcx896hUTqCN6ag8x423Ew2mAwXehDSwtdW3kVBTTRP7XnmqDmzXqU4cGtU7v3",
  "key7": "SssQDV37wSyW1sRTBUw4BBE5hcRRgUj1xnBYswP9tG5vWK5bkRJUD477pUEXA4GzEV9fWbyG6tvvaQemnkzgyuQ",
  "key8": "5VKY1mg7WqMw99MhDNaBQTCJuH4wZ6DCDnVH6yJSz4xo9HmvC3QgHxNskHEpob6efWpubHQtPWpjuMKrxzJia8wy",
  "key9": "2q1CkC1iwAR9cjZyajfvTe8c2gDN2ytd3fygYZNDvonRVAMeX5WWaZduWRg4YauuFdDpjtaPanx28TjGGKsbDWAA",
  "key10": "2SXB4kVgtXmb593SpNWxoPugALq1ki6DucdhWz6HcWXN7j7drFUtChAqpyP9VjeRTT2kHivThdj4Lbi9nZTZzvMT",
  "key11": "4TS3Fe3Z6fE5P3kEsGziajScycQbQAVnXj9uFSE6B2TMe1VpiwE15MxNBYdZa2NfWS64z9r9QwLLy8nPPALQBmuL",
  "key12": "3Xayq4ur7HHEe9RLrisyYdzWmErbCSate1bnBtDBK4Rj1VGuxWimNFaTvw4Q4Pf4ztUwW4FxdZWeq9fp9maRyowZ",
  "key13": "5ZML2LKrxLHvzAy8Pn9ZPWqvd6R1Zngs4zx5k1q4gx6K8UrWDP7oJbX8G9PjXrLBjUv3AGbRiFchsGXWrxhWEcTD",
  "key14": "2sNzPVi7nZ4T7UeCYvoNU3MU7XKeApm8Ea5bzRV5MDbFQBKwqnUoDPLom2sVicP5o629BtvN5dcZ7ntZ6f82Druh",
  "key15": "5BrF597iuGVDXmxfQ33TTF32BHbhkTA1yQDeqqf2FWwVUQuBRjnDqxLNj7ZAQmGXRYdUFvSFFmjkm94MMKw8aUvS",
  "key16": "4Y19J5trQW4sbMoeYSZchoUoAb3z2hP8CHMPFuZ2SnMeDkdQ8qtDtkrgQjbcyKa3gYFqtvCoirfwgUmi1uXq3gi9",
  "key17": "3JFUWQDaERB5qpfPKsx614MNyG3c9TmYXfzHqKHQUbazRHGBHzCZX9Hz5uBBZ2s7vsLhKvQPh8epYhhhaxLw1qkQ",
  "key18": "4fnSVpQLfrbSQuGtgayWwNEx7CHdj5iqUAeip3ph6ZSXofMjNgJG2c8wQikNpRfCkEjHwJ3tvf7QWtcEGcfRGPAF",
  "key19": "392AsDV4Upnu8XRxHTTXbB9sgzKoJDg5owa6ARkABVHD3jdU3N24M3F3U4wzjZcEgRJDuMZ5SShHAi6dQDrk8ttx",
  "key20": "34hhwne53u7kH73rkQ4yV2MDuY4y3to9v76kD4EoKofwhfqJb3jwTj95KJ9U5ceZ1z9Sw31UEbo8xURuSjJGEojn",
  "key21": "4eHdKCgK5ksFeUs2k6RBWAQcY9nnQXQYB17CYm6DCiyNeKn26byVy8eGdzRp1v9eLuiPhHxQBZZeKyvuvpACDtDe",
  "key22": "4iAe81ePk4cPENLWha387e48FyAYoLCK1sxmv7fkbkgWP8HGVEoQheS51ReeiGPVW2xXu9wcZZ7vjzwUR7SoLBp1",
  "key23": "5ER5HcY7XsNRtSzMhDJBCSWVTp5z8HkGSgiGCvbjQXjTZcGpuUD83i91AX7jw4zvopcA7MMLxPudwsNXLVpv4i6e",
  "key24": "2eMWT3pANcG6Uzan4PamGFgKf2PDomm27VFcAQRVo7F7tHboJ3d6bHYtVbDU6AeaBQeRq3ZWWi2ttCH4YRqCGsVD",
  "key25": "41UwieEp76SCuQnCXYKgR8fE9eKe7s6VNp3ZL2KeyAoUtcQRZtoPRGupRi94qxG9EHa64tE1xAHpSrwPj3z7wNcZ",
  "key26": "5oaF5ZfAK5JpHxFKoAc7YzkhzCSyrzsbk8u8xaw4J6G1Qr3QomoPMPXvwmY2uuSNytYwy4jMD1DRbz47mBf29K5k",
  "key27": "63adBMpgeii1h9hroUp48n8QTAVs576De9oT6M3J24MfdaHXKLmznWws6fMBFNQX6crwpG7VmXxG7d61NPVB2j3Y",
  "key28": "3LKx9JmEm7ZwSKKYHmqpCkJ7G1FtkVuv7c1tLFABQgPnjexvgSqmN58jy4J6KPFQd8hHbHGmVnUkCGzDtkLPgkBU",
  "key29": "5oWr2tY5sDfuGpFo36bN4qN8Kikq7CQugeEYof1XFFGJNBB1dsAyU3rphLbkuuk3T5tWMRbYHB66SEqfXQkFocTk",
  "key30": "66QCZdcbHqHXghhjAKmvBDKGdPqJiVpsL4TRNRUuLmh5s9UhkWxESXSDFyZw2ALFGKzr7bFB6dBuimZTWVxCCfLw",
  "key31": "45MuQky9Khp1cEBg7Dzhm18iriQVJv11uq7Z6fHWggLFmGzhUX5G9Mq6qRY6nxJmjCqdFxTm7QVFUuyHaf2JdJm6",
  "key32": "97ZC4Sy7TqyyaXwzf32c6eK8uqTDkDn3C29UGTMs6JxZhr7wfqQFcxXuZjUxM28F7GUuNZ1E2jF45TExaUtXkBk",
  "key33": "5Ge2sVTaDGjJDee1duThzCgA1RZNb3TZcCY6ZS2SgktF7yN2CKpoKpG3xtbHHoFLoNiVqsch1kdAg7fBfjRqC4vs"
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
