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
    "mAdUYLakva2U9csA2rLGp7iDMwdTmJuv8ySUxhiZAPwj4zi3WMRP7RviRCMoCCGNuAdZrPn8Fb6RhJ7m8qhkoYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7Md9ZRwRh9BgCbAEL5xHLvbHX6YxD8cPiL5fnMTJXqoxKBpRs2s88sNZx75J2Hb8TesnytSPgzFg2JatZkTFj8",
  "key1": "4ccdaC7g2Esknt5MkMH5neASaYiwrxAuZAY3wg24DuBgZUekxRgihnLooW9AYLcCsxGRcoZd6fYVHH8U9nXbW1hX",
  "key2": "4Sqc8VSgX1UETsgnfU56Xke15LYZqpUjMKE35VMQd1g7eisZHxEx7xf9jEJY6CQtTuwSKAYVRGPsZ85aXyKxZS8X",
  "key3": "4ASZhpExdG3oD6BbvHzxhgHg4jTdYvdkz3bw4USzxhjmKxjvPsUgqAqRg599Cz5ZbBWQHTUdkzFWynXxgmrXuDeq",
  "key4": "nVZ4bFvWwRukrZs53H8KaSAsmcSdJcjurpVQpSnimAQDi32Uv31UucukM3QV75uY84Ww4fnvB8vLJ9h9zwawgc8",
  "key5": "25sgYBQVSQKUY4rouDPFwK48HsuyTrDuzD1DDWEECLP9qDt67aHcYGg3bACsGpKyAaWaTFKp9UPo4P1qd3Vwni9D",
  "key6": "whKPxuJws2AmQx1sMEp5nRSqYfZXFXkGQXVWJHEu8EdySUEebHy5p3HB3eefZPAhzAUAVLY3jxjEgHpyVFRWzAa",
  "key7": "LGagmGCAkAa36F2NYWbRrwjizsAEAd5nkd6uasGPZ2e9J1r4zLQYQogJSLqtXFoeisNXwMR2ph7EkNagLkvbidH",
  "key8": "2NGcwZR1zbPk1pVysJRTB6FGWwz7q1Cj7xn3dyDdTJ3ymiu8DnbwCxwM2EXpgvNh87n9WDbcTc3wtb9mvXT1nWnU",
  "key9": "4HxNv8awcpXUyRW8T2iKK9grF92vKfZ4T8UDzm9F5tnxvRvYk2Ve2J3HE23Ho89qvtHpXTorCH4KXagJQyABGakL",
  "key10": "3PAyo33XiBJXuN6fnBm9taQ5mCnjttUvgUhPWghbQX8xkyBRvS1MrT3zLvQwfzxvCAn15JJuEvUnoLaxDCQ1tVcG",
  "key11": "2vCULjC1a8LyeDmM8B6v54WXGUs5REK9eMBeZRbZn4tym9JLkHWuvBtbyRgPzdFQag32VyAdrxPPyHZSDVRNZfXi",
  "key12": "2mPM4DKUpXKxqMScvJd61D7QSouCNZg8Pu8SYqiaUAjqLcN2fyGwu5CKXGq8cgd2zQSLqTZ432yiVHQkYp6w19vA",
  "key13": "22smJgqnnwjfZXqgUSfLRnH6aUnwTR7FTZMjwFB5orvFhZZtQdVMUVqQ21etzD6qrqymYNz5dNgS5ZqP6HWRYaFJ",
  "key14": "BP5fhnCVqGPRCZjFjPHwd6ktinjv3bSZu6fGceCuTysipNCENgoEuffCAdjk2ZjUjZ1wjBiZekP34AgYpnpZPF6",
  "key15": "zgiumJnxMXoyAKJtaAcEbmi3fxsDrCfj8nWEzZZm2DXbqorajCqRgKSbrbvPCAyeHw5Hwxhrt8RDjvjM4vGtU4w",
  "key16": "24xgvUmPnwFm7kAjdLpqQkAzUYhapPbME9wjSFL3uWQf2LomXxf85t18V5wmZBUrLjv2zevoooJVLoCjnyDpnpBi",
  "key17": "5qvLMN2C8XzKpqhfWZuAJQMETcBZyaLQAqYERRPhSv166FJWjDASS7GSUdx3NNBuC2tnSYatJkjZyPo8DPV7cFp7",
  "key18": "2pwNB5ZpGXG9p1JyuBzzurzmk6kmhvufRd9FH2uxapbENGj1pvocPoQcFsYYRyGBpHQUQP1soixRn4qoC14NKScj",
  "key19": "5VNNBUKfX94rvkbPseCj1Ha3J2CJCVQfaDPJ96KhBsS4Wb6oiMtwBCFifGsfvqeW991UPk5ZNRNjy9adsDWsmhki",
  "key20": "2RWFv8oqcxTWWQpUcb62Uk5gKtbKrcHuKWEKZeREffzeLQ8h5tJLd51JQ9wUkvHGixVK75kxnGvCroiERAHVKuk7",
  "key21": "rCJLwyDT5zgpQho5VgqpPx1iKTZ7n8FoBXfvRhXuUCmwEqJkCjLXvZDV6Tm3DPdbTcLMHgLVXA75rZivZ8BCPwo",
  "key22": "2CS2WUJSJFZrNFJEuNK4KdCH4VJ9YvaUxLDucM3VuNVyH1J13evZrdGwLj5iwq6wLYH4QgRZnCfK7xg7ngH8im5h",
  "key23": "4rcJwpbXLWqZpFy9s9gq3YyFby1BHVFg8DtRSpvYyZxVxc4FDmaw4kGcEvhUBNK3qxYHd8DuUCvUkmgxcUHEGbzD",
  "key24": "FL1LcmuWWFep18A6C2px78g4YjyQe3TUSJzvW12bUy8bfbinFBYAqFF5sctmGiRUbgcePDiABQTEn4KMqz9rD4z",
  "key25": "GnjRUumkU775WwqHPwFhbqqqFSzpojb9sX3qzshbovhJsAo8ustdg6dedE42VkQs1bjsMVEsKJp9itbcVmvN6RW",
  "key26": "4enkEhHKDoM4CzXLiPQ7xbXkFZ7Ypf3ScsA685ZvaUo4ju1JBtq7H6nrcDzVDjQryVFNsMgAGzVBn6THrKpf6Tit",
  "key27": "3kGvaJLnKphz5rEsAgQTJo4eoe1AF2YCHqqzeey3XANKeBR92rL2hJ5h6LyJUVfuvaXDNaBq7hTD8bj15kBXPzYi",
  "key28": "22w84sAkzwCn6TprWZ2KvvN6HpRExUywgNzjpscyr5nFNcZaS5uYxKYz61jv25rtjCfyBrrbYjNXJMazmLVkT9Fn",
  "key29": "5yZppUUkCbhSfKUMit8NXh7zWXX6QXhxSRtNB6xxsCZNXb3L5Mn6NtpNqQ4uaPvboGfSfo8UWNZHfCvsp7ZvATFi",
  "key30": "5KSAWwRoVJqjrrCmDCDHsjkWthuCotPacabat6ZbDTC5Mdj6ZA6C3rW76o4tP5Hg5KjzcwkDNv5eBpGbxiwvkfqQ",
  "key31": "41W1gTNEmVZPGTEeCe8iopkugfYbUzo6VenLzLJFiXsRvPdhyuBmjF8QGf8iyxapDYiJbVgUS6JmqYcvjWb2QM6K",
  "key32": "4zo3PtSbTNXUGSLT5G8WVAQ5PnGkG2vy1gkL33e7kWxWhb9CrJ1jVcsBTDzjQa5sFvVyAJdvZcWeDu6dHgSMgZaJ",
  "key33": "51cdKakgzLEBFAqtUP7B8hukzXMjGJKqSEPzRcvk3RQ43vYi59C6LBdMFw5ArRAix4K6xycyGPSME9p76QyqMKMc",
  "key34": "4qVPwNA2mWjE9K7XKdtmjWdihpTpH1jgQVjvEZZqdP3wHVgt1MVfbrpofaNTE2CyYoJH8mjpn6Ci6gLUF2AF4TJo",
  "key35": "4YTY74YccxddMLJQUmuKhawQWoDXsdHqm6PsgvSnVk6mhq9G3Gi8uzBPnWfrJK9qHXfufnTtoxdGkHNb5uBCVhRn",
  "key36": "64MCNdNi1CJVa12SiZuuNSkAEo8KKCq3NpTHfDgLxCjU3txEG6Ej18RkBzwbUAqa8aUzZD2zNZRzCS3i9PvtK4Xx",
  "key37": "58PqoxqG3cQnLppr7Xjj4pvYGA7r4oke9yX9Tk6gZ9DLCfLRpu6NnpWWqDwxad3bddVAeZiUmGisHztnNYJ6baUC",
  "key38": "33NsjfDCaQ6yFRpkbCtvTAjRSNEVzDS3S1gRzzaTWrLtxGkFqm4STJKErj5k1v4Uzw6z4oHXMBp2DcmM2GVjyTPu",
  "key39": "47toWS8Xnvpb9woY8sBayP3moxSZKpszZQAnyVfQZSKKbwp6QLATkJzpffYf2HVtZbpC67s6EThCwNqJY1AZk8HM",
  "key40": "3BhzFujUrkgWjmAuz749wvaSXJqK97mZYicTVKyYpwmj1WmeFdt9MHWUFaqwNW3HPQ243QztHkrW7oYwPQDk17UK",
  "key41": "4yCtqpQFMXwdwwMZaFQxeCkRNBrr57p6KxyxaeQku7b4hdtXmuaaA1WmKtkEprfp6gzgaAugptXFRJMQAAbf6dEo",
  "key42": "5HPiwvqnXNTkEwT6yqGo5sUZLa2jHZrgnTzZueBYjhTr7yRGd6PsdZoZGRE4vX7w3kbFXMT4N2dSTkmKcQ6b1ikM",
  "key43": "9VB1bhoKaHYNZFX2gSFrqomzXaKdYG843uyAnpexaepg7z4eAwNep5Cc3NjCZRYRme6167J8q1f5GwN6CF2UwCF",
  "key44": "MtnSRBNRiyrn9sxddRcNp91wtu7YToBZjSPQjKq6tVJuBbHBM1SZEZw1GW3NUdmPNeKLddwuJdE9hUZtMvZ6TZW"
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
