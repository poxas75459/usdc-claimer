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
    "4RNGThXnbPcDcJKVxTKNQafM5jQifCzsyVNn32sMye5JLohFnQq4HfuAhQ5fLoFPhRzSu63UjRizws5CpJdqej6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jpSPjADXgCk49Hfa4faDX14aZN3VYyvGQ4chWZCvfq7xmG3X72XkzqqM4x5CjZpMBnQNbXvFFixkMwhRWEMMnzs",
  "key1": "4QfgRZxbd2fqMtiWX7k6ZPg9NqHArSaCCCXoP69xmbNQTiAf6MsSoFZ4RZK4naj67xadi1mJh5aYDNiSVDNse3uq",
  "key2": "2BzdtiKBJViQ3GyB9oYCgUiW43j1LfSsfS1h7XnKZHo9oNaKHrNHLAwyJKeNBvofzECbXCRmwbHwQm159jRKtmtV",
  "key3": "gEYn5984FdGJ5y5XK4bK3MvFSv2K9Xp2vLVrYexPUjzKCDPy4a5PznVRqtknz2MRVUfFubR5XmzngQFFnkFhvYe",
  "key4": "4UQoe5vKyYCKcXLbqFetVRDQNXGtnPS5WGeCwHQ82PueyC8zFXXGjh69DH5eVgZbi76KStGJj1ybRBogrSZR9bdT",
  "key5": "3ghgdA766a9796K5zgsXHcXKPJDkqaNvowpn9v59bfnZckXCzmsBdxcirXP2KUz8egiwThNCHaoN5sF4q6Rad11R",
  "key6": "5TkYN5nEFcqH3Vu76piNJqyC1xcwXnrwz1ZRsxchR87HyYxQDasFgz25DpeMZ7KH8qSbor8XY2WhKKA2RcoqyFUx",
  "key7": "3Spek5A7MRZaWDzHN2CmgBb7WNWGmMXKSqmZfti8BwCzfCBMHinQ7SHy2RKrxfp3AGwuigdq3NCMP4qL5dFLYh1N",
  "key8": "4BubsM36uEGD6EVpV7dUp8TBQfgFudmW2HiAVHwjB9yo4nEVmgjie2DzG8J5gr5bwUHyToErKEat3ZKMV5HZmCzr",
  "key9": "2esrkDgTdPwjErnHNG3ujqNHBjKkt7T8iGz2a69p6BvdfueHGKaYzRoULYgbqJRsKeAGXT5c9aibNsVPjKgoXuvP",
  "key10": "4gYZWcASsRRx9dx56xVFSZrqKaLi8veT8qs7SJCdFu29DZsjcwt2RQibvtmZoqEjVBKS21JGScZs3KW39NkoGnJg",
  "key11": "3d4KThQPnLUB44FFnj9GQt9Xa5uX1Vio53J1jJWWtLYCEFTP5vztt8taoQSvC7a42YjnUDtQcaT1VuJcxQF3dqZD",
  "key12": "eYVE1S2ptD9Ko7UfCXF63wffYNVDfEA2W5XMULzTuuwbpPUtze3SXFia3nBPRXrXAxZrxCbmGBh255TYqdHmGRD",
  "key13": "3e8ZSKBvnjydCNp4nueXR7jMC1aH47mpcozpbYvfdSnyHyYXmnGAxHrjyHQRLAChgxsBzULMKErBj5NfHqyTpNB2",
  "key14": "67PLAuUxdFbicidtdTXPfdJRwJjVCrcyjnveQP4QHTLUVAg4wuXofnKWR544aVHdS3H5q7Ny9X6Ld7M8egLRTasD",
  "key15": "4vYH3DU3HWXZe8SHYVLwsB8bZjiwd961nQPQ1Kwr7GpJi6WyzV1Qgds75GuoL9K128VzpmeLecNuCCx22YfGyPbc",
  "key16": "SQxiZKFbi66aRyizH7wFwwY7dm282Tr254NkQHyZfUgPK7toYRU7VKmBHEer6HD46dBidRqo3VXiMHmBMn879nY",
  "key17": "5YBt1gfxpaW7vCpFP8GdhHLGa2Y8ajSbSQNx8KwrMk7CRoDVHn3X7dKiuFyS6K2APs5qmQnZXJJhvEM8cxboVhMT",
  "key18": "2ZgHvt3S9Wug1B9bncJfCyhEYDYhEGKBTriKiqnjuxYLYSyk7QnLP6R17gm3TqpmvA2SQ32B2RkFa6XHuVeeB9DY",
  "key19": "xpqMQBMdxLxY4Mxx37zajf5s9V4NjeQNXT2DHQ6a7cXJejxSJh1bgNxdiCA4y53eTqz9YpgsAU5ZuB521MJRAWk",
  "key20": "5ALhBxmWF6ssD3TvRWgyMjVmNGnG4p4PCqvKDXubjTY97wRgp7gCuoFF4k69P9mGwGnwJVWEB1HYP1bj9HjYe5UH",
  "key21": "316fcdCHSwqyYeC1xj6ydwYQ2sxwLhSosn4Rb7wpkQSMw9SHGbyKmio2L1154N7oHhR2iX9m2MSPex4aAjR3QZGF",
  "key22": "wgoqgprj3YyEDZir86tBVi244tE7WZP8piieZozFgwotDFpqtt61jft4BP32nXHF8XgkwG38Z9CM3ZUYQG3MXm5",
  "key23": "5CWjsTX2ftyDar1GTuGyjFp2hqzGb18tL4C6rRBZEe9VoUYuCHRf3opdPrsEkVW1ZzSoQ61vkUDsbzUWK6M1mP8A",
  "key24": "2Nz6xE3fwkMpZJpG7skXBRR5jmV2wJmvkaf4pNdMt6zLfaxMfhf84JfnNKeztMo1E5QUo9XUChvNM2Bv54JQnAqr",
  "key25": "3S2CyRzcoCSYbKDbk6bKGTdNcWNn1hejMMooqRBK7EST3AM7hHCqVqAfSXTyBH8TsBYmGYn3aJmBAWCNA1nkMxEZ",
  "key26": "33zqahETYDtNqjkNp5kfCx4cLDniZ7qRcer3wkUyR7qxx3jdw1Zi1QLrMm4Uamw8WNkWcu5RpLbFva6aJrrRugwP",
  "key27": "5HosRMh9JxomwDi17ENfoivr9UhEJNt7WjDQArj4aSGqJxqnC5VYRAmkefnREmvUPUDdGFDZiRsFKgWbq7EJNKLW",
  "key28": "3tsh8dVfZvv9Qh2PoqsNawncKjwJ1g7kDetFJDgTodj41gQdgvyRvhST896rfSKqMkXLnccNnFdMdM5wMjm6mCta",
  "key29": "23UDskPRapC3FsM8QqFXv1NKmZ43y56EL4Ctzy6ri7hh4ZWZx7EtFaBVTtWauSPScKhT4rpdAzNqLucMZAt3vDTw",
  "key30": "3AhcungcWFLmNUoNN1LBKRf3Xby15MQPrS83HVe8Rc8Bo8CbKyA16998o4yyk8NVAmrgFSmbk4erXMpFfyzGC1kL",
  "key31": "3iArUf2mZMw6H3Vg9QkMMNxDetmakBf9QxpTS6sK6jRBgMfrsuR5Jsmh9N3u6LpRnMzT4akEXvmiYnuepSFYkZqR",
  "key32": "4r3Nuk6dGYwsWbW4qCFiDYohCVwvoM3XwDWymvMNC7iYqDGnDf2RZRWvXcE3t6pqxXFC3U6RHkzswENUUPQXr1y2",
  "key33": "5TNdMmF54chUVmH6jVWxERUukK3R16bkyLg5yN2cPQfGiR4gtzfZDe3Pu6ZBiv5yinYbyKH9eSpm7u2mSr4zxHc7",
  "key34": "4RYkTfzowH1h4rvwEWLuDh5TU5kvNh62oFf6wXmN1Y6WsvXNQSXmSUeiKBGAHzBEECVVLKjwcfz68684wGhGq3jJ",
  "key35": "3A2vvNckzUcjutYeJQsg1ygjtnAQ7pySsMbPeft7rAAkf8phwpqGYDaASQN8n5bLHUBDr8VbJ6VuEAGiVUkMFcWa",
  "key36": "3Btfonc4SABFQbFEQPRYtBrySv57QeMVNDwLxTRQcfzn2N3YCyp64Jizfw5KLxHour6Q1AJwrkhzf4XEdo8kmKQU",
  "key37": "2jodQQ56RDB3ppibXq8GzRVnuzGugFTbUwcRLD4Dm9S6y5BY7qhQU2h1LZEHjvccaTCh4gcj3y89NGdkvg5jhPdA",
  "key38": "PTa6Jyza6dWc6whCXXw4kfrc2sR4t6FRvZEPQaTjV6yW6kMak5gAZebXWjzUzQR7z6UMebgsGZDtV5nCYKtmHim",
  "key39": "5CGNnCwDBGLdC3EBcFtqmBScsWyuKKFcCFQAHs4V8q7tTiomNDyv551Tm7VNiLRRBLntKa3c4YKLQXSghqVdCNfb",
  "key40": "3GSGroKMKqL4wVWc69VFzogrU5zysLoZBVaDehBGXqLWCjesnVzgDFQq3bryyUa1ZSyRS2m2jtTKrtdwjzixfhno",
  "key41": "3JFUDH5AD7L17uhy7zsTCmjCpmj4c633J5nKvms8HisnwSKKBsMX11HJEPN2RDWbVu8RScLYgxxKrYiP7FSmfymH",
  "key42": "2fJkXpzPQnotKHJFhiv8rDEk4UYQoaHuMUtc9esPZrXuu1YSePgyrznS3fFfPWgVaCqH2b2yXy1d9TRbv3NBVkdW"
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
