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
    "4opUdZogJvBB8ESsVRXwT6r9HzzdRj1UayQQiu7ZjvhJB6veuKAWQsgwMuUafoHawq7gU5k5v4BgXNt4zzojX2Qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMnFrUgYvSbxMs8ZzzxVJFgMSSEgSH3R5FuZgAsjUdNZowFJQ4rqEPeSiW7GoRrzAdH3f4ZZxFh4Cmhb3xhAGuR",
  "key1": "2tf9WnMgzcXWiUfHeGWBZUiBBWfacVuUaowh5pYFW3SGCtppAmaC6hVDD2y9W7JNkNV2Mntg1CYq8RigmrzcXyb2",
  "key2": "5eFwv4maZktYUqJYQGmC1qwPxDH3kiuJ24CKeTXVtSXzzXhoCxk5AT23AgywjTkqA5UxtrqJjf8gD44hQpaQq31W",
  "key3": "5CoDKfNXkEXrDRjsnVDGC3pXeir4GjN25yyf4n1aAiyfAsfexb9jv4QU9AZPKsik4zgu9ohu7Ko5Ezj59Kkv1cH7",
  "key4": "25ujLfjxLxzDVzCeA7PDAFqLJ94KtjBnSbrnkdbcfaPHv4muqZbyUbDLndYVSRiyBkuFsmngsei4EoTvhiaKrvTe",
  "key5": "2kUj7C49L4rKD4N4EC1LkhWAfuuhWsPeCJ1aZE6SqDzYTvRDw2Zi285JZXo8cTfjwjaGBdTywZxXjSWtMA9WUSoS",
  "key6": "4eVYHGa4pYvrUrvgqHssKWVRVmvKHQLcpabD9bsyF8dP8to1Sb7VStPDmZNGiZVZEDWtru44HFmBka1JtxLHjW2k",
  "key7": "5nZbq7SM7yRs79XpzBK37enUK9qHCW2WGVrWpiiXNBF91maKrTim6E5zBVF31SoCmpxuYDSdS5M6U5iuhzb651EP",
  "key8": "4NBovFsmx4dxqTSxrVTCGBCuRsWDDKcKWaGzPzTBVE4F5gH3jmG5nt1o4n5DdJCa4hkqwuUHuAS8wxJdCQJWVrWY",
  "key9": "35TRMLedKcU3XVgPpSg4Vj2RKLdYb1bdezBx1qCRAtXsvzvRZpRxBwedDZfxTbNT9mBttzcdDLjz8smWGnc1CXuL",
  "key10": "3U5cEgQyYRb6C1eG8NZhKXCqXqPwGxTKiebng9qorNsahSGeSMyMMWwwFQUeYPipX3oykKS8fHW6a6kDRB6ULGy8",
  "key11": "koDkSHWRgqjTZu3qx3gufEwhu8AZSJVwgzVPuK9KLbjjuwMsV9Sphn5JfNviEqHLMUuUZJRPk5sE5N7okxVurG1",
  "key12": "3V3sHUgPvDpiFtAufn9EH7TvH9mZSWMyZkA1J6gexiqLfZPZ7ksRK16tq9RpiCGkNgaH6bFtHyCrHV5bHBUfveKP",
  "key13": "2AvZwq67LzzdyhX1EB4PXUGhPvneRAmU8BeCZ2GL1oBhdYYTzd3V2u9Dx7CN6Gd8ctCpjsL3uuypYuuaV5YE5nUw",
  "key14": "HmWrjaUPBqDbYshBPUAnJmRso3w8wJjwMQ1QU4ewrbF147ygtVxyhXBDmkPjJMe2gK2vh9F4W8tbdggixHNgZK1",
  "key15": "2vgo8DSJjg8PPvb41u5KDfpi5Hd9VHtnscWAPetmBmmeLQmev7P8DCfFrUPPJFMzWpqna4QN5A32ZjnUoQ6kteBQ",
  "key16": "2cqS3B5TBdg6yrCWSKYpHhphEnwGgm4pKbjAqgsdMKFj8nEt74t2Yx7zEjJT2RzpFKV6hWiY6jnXhv7JU8gSWgfC",
  "key17": "5kbuAqdxnwje7zMxb7u5z9iD8B6pFo3VfHELwTwhgKv8U8Xfh6wPchV7QzWZWqdRkyMTb53TrSwU5rqdGR4e4MF7",
  "key18": "3fiyM9gXMViM2vjZguSDbCjUZySsbtPD6Th8xCma48ob9NK2uMDqbSeAv5ZSBNXK47m6B26cfzhwAVQqJDk6G8jT",
  "key19": "5qfP8fpFjnTrPT1swzdbkQ5do1d1xhJZvasSvDuwLuH9iAGSMbDjrCZzoWcfkTNuezDgAD8Us29uNGtJdgWku7mG",
  "key20": "4kgKp11fQVmo6Vt2yfhCCgPuGqYTjrMNFCVhtwRejS95GTCMGke5MtydLkuw9u3vyBwxkcXBMu1Z6pRwu5k3GYVj",
  "key21": "PQ1uP5PY16MmPQaRDwuDooC3jznWYLBcU6AdQcdxpQULcHzndJ26tBRezNiQ55vZHt2DEyNE6qEZpGRqT9pB5wA",
  "key22": "YC8EFGjbwBR2GCstfQqTyuxeyAF2sa4AKc8zv7oGrdtGnunScJv9JzCQhZdi2ptUrXSFgMRwfAxd7U5NXxY1kvB",
  "key23": "4AfzSJfKUsZkcTipNxyo8yi19PH7HKLbcULqzpRCH6q3fqgtxPmk6upcwTwCShzxnGCVyzWseSUjiExoYGXM7P6y",
  "key24": "4prB9RKadmrTnra2vBzmduWknFbQUmhzqRDnjuRsqbhwvLYDtvYNUm7pcddyv5VBuaLp9pjkcWzZdyJBsk6c1P4M",
  "key25": "4aMnap5QZMFs8EAjoHTgFxCijRJBPeqhGvLpccnJo9YKbXChWXWqmUQYxHsKyc8wA9zVusH1Aj31mTMjErqWj1BE",
  "key26": "3MHKfqRxYbaXT7GHbbJyPN1UcejyqF6pAzzZpUMipHMaPbS1KEWzqLHMb59ezvgNzQQRXhwxjn16oyieZT4HMUJ8",
  "key27": "4P15hBsJFe9ytWbgv5UjQk6HBjcwuCPQcVudyLsXmsfK86wywqjBtBkFt5jUnGjt3a3PXKDDUV8q2M2EPMBbrzCG",
  "key28": "4AWR217Dae39wYB37vLZNcMP7mmLepv6fcqiz3sNF9SqDqWp33FP6z1hEfwJzhJJB9wBY8qCAqtrMXo1gyka1FsQ",
  "key29": "64NfAACRcCq78zujCJboFv6oCdbuwLRH5sJUp3DY5yWHh8GM3GRmeu3pDDKFcF9gAJmM1sX7bvjP9DQUpYrUP8Am",
  "key30": "2V4HVvp2EsgpP1DEFYarMwrkP1jQN9xPrHVgWyEwPr8URQ7xQx8GcDGkEPXPSgsE1faQ8CURSvLdin8qRAkKwmw5",
  "key31": "5a13TFhitJz1utYXyZpKGUJnr2ybHe7e6F6qdzEyKfgFcT2WWtZeZTeMREZEXoJTKEvwpQbpkrXYGQJMGzY4nPcr",
  "key32": "3FVsLC6iWw44pbafj6yYsmeUuqmmGhqV8kBPaehwzUqdJBoLNKDuGHVnTD7jtrjAYUkDCwrRp8iw9faEHDMALJJY",
  "key33": "5DwgEGnXWYiWW2xr94LyaanHJf54EuwX4eXSNEGCnHSVWqdLjkWrV9ytqhEPigiis7PUntgSGCBZ6UF9Sri1bvY1",
  "key34": "cCACDGpzjxkDqK7gtDbiGXiz6SRtfmrGyN1LUPBASg8r8LrwP3gP3A9thDmhcLAhWX1a7oReN2VEBbBu9cSsrWu",
  "key35": "g3WBihodgUUx3yoGhpDYcp7E7jXpbMRVEZgyvKxHXKJKWosjGiEksMvVjGeudBpg7yc7FahhQdBytMxohhMkBqK",
  "key36": "pwgpcH3f1nvqnTLxERLRCbdQDV6jumVJs9UzEjLBWaPw78ijEgwNXiJwtjhuTV79KxiYqU6SSevnPJTDoDEbox3",
  "key37": "9XaC49T3cihArUkNybjx4BNb7eyTk6WVe3qeXTJUddTYgZKXWJMrSedqTjfVzEFF4N1A2FbL6iUuxLQjRguQrZj",
  "key38": "5PaE3Kpm9EEF6in6XjnDaKvQBW6n7hGC3MKoPrVteGMTH2GbzU3mQLj4nX7S8ws7kwFhw3gbpyHfRfozYES9dcns",
  "key39": "4QLUd2oDEmtwoHBJuui441uikUrKCzNReYjwFfTgxUNRqLEvkT9kMf6FrqpMWGiAD3Kmba9i6371o61yihHE2sVZ",
  "key40": "53KAyuyPfbttsCdK5VChytjNEnDmodXWTmCJnaJM7ktMgJoP3336hpS6WzarSf7bEYqeKUCwssFQamruJgrUspTe",
  "key41": "3QtbgYnTyLLTFKU1JFkJy7DCn1UycAz23gut174vuAEgvCVCJLx93qvMGzcg78WGqJoEgeJk7y7HiLgdBpAsAb4o",
  "key42": "4CXwztyyQAaLBFpZe1ZRGz9ku7gPZbjmF5kW9ha5MzQ63vwkxRHiemVFwGP4xgzivYPhDxccktb3hzYU88K3EB4Q",
  "key43": "2Vwxrx35QdviFqBFF31T5d75qvQbpdXw6GdzFr4aAJL5BMdaUCmZjEcbCu283r6BB1L2JnoQmGav1YedKuTrm7Ha",
  "key44": "52YdkBRv9sN7ELe8osgAZptobUoX2WuWEW3rzCpbyWCDgFM2xNwkoV6p7HvjN5DmWvXgVbAvxYw6pxfw2emdSsNz",
  "key45": "2VjSxdt1ra11P1nYETtqopYzgzBn2zjXpFB5n84hcBtprDFudwMBCA6kYTzeiw5rBA8ELbym72R7yzMJEz9qw71",
  "key46": "2jpGF3krFKj6gbNzjkPMXRQpT664qW9T4zwDsyTTc7jFkaqeTwFfYXszo6bTf1PWA8XvCszq13tvTuU6ZqCmquCV",
  "key47": "4aiGJ6G1pGGKEeAAotNKUy34iLgDJrsLyv5CqS2AZnapLJG1qGTMRUAq1FPpDHf65TYRbeuV7YzajbhCX8CAsVCQ"
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
