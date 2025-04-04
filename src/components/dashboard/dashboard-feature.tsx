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
    "AhYujdQwYpktozypfkaTRaFRu1HYpucA8gzau8AWsGUjh7pbnBtA7erpPCFsrLphMh8i9nExXXjGGshFodm87co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uUwxBxrqbTxtLjLaUaJjBhmuESpaJXuhUaqj9QHiWRhDyqKt4q3EYwCEFuGVZXrzGHy8i5KyGycjgYWZLTrMojv",
  "key1": "jn7WFuyeNgUxo8QYeH7GWULRbiBzVUFToT4EVmFY8QvN4hdSdjYniKytECC3kqAUjQW4dKNf9DzZKJgBsi3ktc4",
  "key2": "4JtPDKc9Zie7z69sMigdupjrWEybQGEDVbZp4B3bCHKA37VfPTcd4BBsRqN9zxtLtvVUBDTKb6saxwCJnf7mzfNk",
  "key3": "28rrG93bwHpAtHipzLtmJQ3HpnZVwMBfUKARUquYby8Ms3Y2S41LRve2xEpML5QvwrLFq96tabkyRbwYz8Yzr54a",
  "key4": "RAiSHhLwWH734iTGMARvFG1ougaiTHQBy2UvV42qkXmKoLHB5isi6R7iDF5uTZ12ju8A8BfxaVQksyDR31FrLY6",
  "key5": "4HNyFG1NTSHAoUdk3CrwhfMwmwgFixMwRkZL6cTD5x7FDnNhLkQZoyL5qzHvMEiRHJPof2KkJPx6uT7dkc6rrwbq",
  "key6": "62UwcUp6wyE1RGkTrVKLna1cf1FN8X5ggiPXrWCRBkCRLuZjfMkoZNUG4tCR2w5tGwayxtfiSUhYiBiFNXN3LKTx",
  "key7": "5Dw2mHdTf9rWHMMh5doGjF7kzVa4Cw6bp4RBysdzZgwYU15a9o1UYHA5mNgv2PTQnULiBBtBbwrSmW4XDBKbrWTQ",
  "key8": "Ldd2rG5gMCbka6gpM1yN7TzWQXRS2idmS9HzqCc1YXm3j8fXbkFDYmnK1kNq2aCp5DsudT6wA5eVmYLmiHLSaNB",
  "key9": "3d9RXbtoGqT7ALBKTc1tanV8DisxnzgNzkNPo9yLWWagU7PhmCbwbnFrJs9PzWCf8yHTHjnkUUvioPcZYVjawLbr",
  "key10": "47L6g7JKzdkohY3SMrDFm4LcHzmH2QQX8g3bbGQaiFoXVPeDrvrvb6isWAtLPVzAkFcoVzmMtpGAkhB8AvBRam8V",
  "key11": "3tRizwehpdWcYGVzMzC7gGqzT94z7SqqvJSxWmPPoAqmJNEDbsZCZJo16wm3G2A6LpfMq51nQpqG8dAWJS97DGUF",
  "key12": "3TAPpkVNQ72sZa7xNNiBxHAxEmmZJFpXFrbQVVnqmAmAodgHN2fiA2nBscAqWyWXusTxwFKi2Gto14g3KLaG74mQ",
  "key13": "5XW2FtzdPAbhDh3stJJzqK3nyYfy6rQayZGTQPavrrEwbBVHqSZGaNJCsHVZCYhfqQ2L2nzTnXabBXpHf88Xa3vR",
  "key14": "4p6VzLjSJ5WvoWoX6vwNe6NzycN1TyS5SVwfWpbeJUJemazweGXNXVwv93UzUERjkfLZt6NoTdHqNQ9X6t6pNMJ1",
  "key15": "22ck1utGGYas9qKp9AjV7GUT45QmNc79G6gcB1q2JSzPK95g5bJ6PFvM9m2jidv9XJDt3DCwDp3QV6cA2iFEG1zy",
  "key16": "2N5cLSVoCiwoSNEroghR1CUptTmKWcMqvXuL7vqdVcKw3fYArMFQdQFra75ywfbqS76fhPx7GfH1FKb9nf2BAq3P",
  "key17": "5ELeZHUkWMVEyqcMLcD7FBngvgWCjFyeN95HMGxhu4YBgG1qfTac7H5CD6iiwLtayjV3H5YzEp7srRP9xYYPZ76G",
  "key18": "3vXuBszjZjDaKPrRLj1F5tbnNPf8a64Yu4X3SHrzSDWNATR2eXbHL9w1M7hX1s2hMbonsEa4ZtFJt4ruyusXYpDy",
  "key19": "3wPFCDqpubp4nz7owWtX5jU5nzY8LeTcxu7QRC1c5jKGw5qWLPYVzGCxqCZLYagVpJqqdmT49RF8TkdhPTVphAxN",
  "key20": "56afLhEca16hhfNb4e9XPLT9DHGW7nq22oyF9WHHTjfRWdV12Vrp8JKioQwCBRN9wPXTwX8F8ALsSY6SKtLoa6AP",
  "key21": "5GTw3bRfum35eW1JTqv5XmGuqffVA9TZqgtKM6uQb2jAHup4KZNpZQNnyQWioZ1wDwTRBxKCk7HR76MR1qZAnxPo",
  "key22": "3GMwpcrrKqj57y6wFEx3hd1LjWBYyVWZcEguToHUxte2UV8YYr3GmaASqdHVLAFo61xUaqPBzeYigX7ap7KWKNXL",
  "key23": "3V6NR84f46hLGZQQ9LEv3EYU7HnSgTAgUb2GzFGgd7jW9LcbHvNULQxPdAwKkfpajhFWajXnm51ArgF2owfuJFYS",
  "key24": "4Ag997pgLntoNwLC5rbNu5f94UdqRHKts32u6G5fbrnPFAcbz9PmFiauXg4B3XHso98hhok9yyWZXGLDsqrssVrU",
  "key25": "3AVuiGw8KRLubCs8S7gTyXfurV79f8tmZs1c6DZSa8cXVziRej6QFiw6qFqncU8vVCRf84YVzHR87g8NNGcXghqe",
  "key26": "LmdNVPKpZqQGZuHDGyCUejD1HLc3axBjZh5PsG14QwtCEeCwigi6GVsMyHjNrADCqfTAbtbMtVZsfeuGXEh5iL7",
  "key27": "sMqimvDvoyJ8Uw7YzLdFJSRGaQRqp1uKMMtyLjj7A9B2ZXik1YgyrSbSWH2yqJqMinuU1JbW2PsgYCKh81Bu9HE",
  "key28": "fgQtCLZ1fUnu66vNxhz5qTzCL9kijfP9b1M5kQbSfQVU4mQpsvAaquQgfFvoWmQBaYqKFPGUE7n6rkabDWbLPmQ",
  "key29": "2VuFzfTZUX4eVXn2cwpSoBsndeCMwA9KK9LuLLrAUU3PagjuZY7R1gqgh2q4w5HCWgqAzjadX9a5h84oLUfM9Cs3",
  "key30": "4EMCko1BZoVne1b41i1o5VQjeYhbyT2rmv5G4SQYPe6y2XkLCcVyN8qCbi86jAatYVtd1dQCdxw7Bi1gJSKL572o",
  "key31": "2qXERSHqdBCvSg3jYw5GS9enPcir3Y38mksV6a6t6vEaBbyAhmvA81ZYqEJXxXCJB4jYr8aPwq1iCkEVix7ZiYKZ",
  "key32": "2W5Ry6ZK6TtUCvZSisiJp8j5qHwxvRCbXuPUqgi1X7PmaBmYPqb7sjSbx1vudG7ccuyKK93ojix4qhmT5hbTF6hz",
  "key33": "28rdCMGSiyD7b6DKypRCGhJHEfUTbxFSKSsKi1FSVAPmdjWvyZ9xMvPbtgrwXpk8PvnC2S2qJMmBG6oNY3jg9mcG",
  "key34": "2eH3QppQXneEtKEKfAtBJzJgCaWQTUUTPw8kjjT4jUEDMa2kdEfDgp2aCSDJ3SWgCWzyB67VHTcUhGsx4tTiuiDq",
  "key35": "Qh2R8timojUtZoeh59DtBdvBHUwPnmTJwTaairkSBD7X8KRsRpUgxm3BDSZju7hNAgHYePw61S8fQPSYHWMd55m",
  "key36": "4BRSyMS53WycHY54sxLfysdfKk7t5drmqU8VApjaNQ4B5Cfif4MH736sptZT4pLKHXSqnooVp8eudjNytZcYEDvE",
  "key37": "2oWCjnF32pP1wVEUhE4DKhuVLJHc87MA7yRuA9fU3HoxkJmLhZ4u4s4xXXEyxgtDHaAfxjr96iB95RFMWXURPMXB"
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
