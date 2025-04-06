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
    "24tLMztfhRDBDKjrM9J7iz4EuepYdJcQ7v9UeK4Bw9qbPU9NjRyTfThuKN1A5EoKsncJHpKbeC8NU1R7Tmy5vnWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h7FJ3Rc1tecEFrzfpJ4GZHAhWXm4KuGHoMeRsdthkVECwVEbzHsFP2L7Y54CSjFpfHsNXDoEyRPCKg8DQYS3sZJ",
  "key1": "KnnxSQS42XVHZ1k6kQMr7bk8N2Q29TYoCvS5eZvqtU9yAkjv8v4hmYnstrRkKzBitMRjddY5HRBZcwjEhoSPpbE",
  "key2": "FvpUdmSBBTncrP1QR1Xcs5s35hfY6nSRnwUhm8wiBSBxNSnMzAuN3JMUosQuEnypmfw8MCwTqMkV7Hg9zTRoKvD",
  "key3": "5jWmJYEP7yjVywra16UReCE9UTDxsB1e2ySnhSqmADcxNxvUsz2zoak8CB3XrGGBGDAnndtrBodA6KUtSQNHGx9U",
  "key4": "3VFi5pcGvHHoPcAAt8cpnndGZQik9H45ch33Cycomy7BCts1mcU357ZbXdSwsCGtFRSLd8R6p78aLotdNdKGqudb",
  "key5": "2coAkAUJgN8DZwZFdktT1rxbiwaLpPER48DcmVuhiHVepKfLeM7vgGNpG1fHNZHpAtvahs9b9iiJfTKXLjaWmsMM",
  "key6": "Lv1dc7z4RxgDXw187qtNcBQXksuigZoXgmc6kvTKkRb9NGDHfGPkqLTEbMRVeyCXW4kyyWLwF12DS7rjnJbyVsv",
  "key7": "5fniR38mHT8rRLrpb3MudqpMzRtPjqYnSRKCXwe7d8o6J1tiGTrtjhtHmGbTvDE1VrQbkCj9y2EeL7wGUnoxhRVk",
  "key8": "2GV3PoJNjYGQLqS2nJ9zf52tNfS3oM8VNbci7z5A4DkSf3wuNjk9K4LWThTPGEGmYB7fZuBfF1m82o7h3Gj5VGxX",
  "key9": "62aVbtmb4HvQt2Y7CNXEAxpTAyAV15T6tNJ67hcLXYvYEWhKhieFiSFfWskdppgXKisKxvNaexvSmi8ky3ngcBdQ",
  "key10": "km6mzjRN5Wgcrx8HoLmLcZ283Cu9QkWYm8zhgqPPF3og7iQfKCsXwh7VwpZrQzTATBzNFKyM4MWbREaJNem2CSY",
  "key11": "59PRq8BMTBRJFtegHSoeUEBNPLKfiM19qhMevrdh9kTPyPRWgwVfSBAeHmGBTVQcYCdgjKuFXxHAmBo9RN8x3kzL",
  "key12": "5B7h7ugWiKj2MqgJo5PMqLjc5StH7Vd3zyyQWVizdkt1FNDaUnv7kpLUtjEoLvo5WaKiKKYHVubaZiQ9iGiycQsr",
  "key13": "RXSfooQGy1QxVEaxToDJdSi1eCYmtg1A3KDvSLsn8vkMpoXhBkBXxDEowrL4SE2Pq3GEiWYypQWzgE6pJokQsxu",
  "key14": "f68okW7ET9obLkoS1rekUeu6E1oDMcLUGP7LtE3tPMYMi6Z6SG6BM4ir3h7k6M1uVWMZSGCEySpFCoV9Sa8VpwD",
  "key15": "46PtUDb7TtoSY4njgi68XFJqcZDdP1X8YK94hJFd1nm8gcdq12MUAWbksXqdLQFm3rZaFMeDbLQcJ16ZZZTGE63H",
  "key16": "2ca3rkTWixVuk7tzWqhvGQnjrKdJny7dWxac8rUHkgPL8wE6WC1Wm2iBCkcrmLurZWxGC2QBNpNHrSAcE7M4HUww",
  "key17": "3rCQG3LuF6mHNfPFsBUVpDPNZXcvy1z9HRfBw2zP8fpQ1F1kSUPJHT7vCnHMXRU1Wph5nKemnLttqSFUDtHAHR4p",
  "key18": "2mevscw6xcU4NV5ZmAhiWY6xLKbNcHsrJtVgGkQPLRWsp5S6WHLuyQCoQSkAbVEXPmV3nooVZse4CUeX8FS7WkHn",
  "key19": "4gcb7tSzuwMsNLm4KH5T3G3GxKBATExsbKRN4zgDLugmAw3SJJFto2AWr7TKY8zSFWojvhexpbvCGCwCH7QvGhk8",
  "key20": "663xymsMebDig2zW5cCVzkk197VR8c8zwxcffYuYb5MJrjLYj846W1gKzXRwKsaW6YYdnKXfii9BnpF6sCU5ShYc",
  "key21": "4o5J4KBkWUJ3TsSiNC8kNCuHeAXKdKkFGpeWqFAoQGPxFEfPR5PMcatjY87YBMKASTz6bKV6juzZD7Mxr3UCBUfq",
  "key22": "3PNDHrQyGShdSkduMQYyyW24DZRyVChvxFpDEBMTDYKHnusnaGoTdy3tUaUejmm5E8uwYBsK7R2YXVSobu7jMuaF",
  "key23": "5Dw33A7J19Vf2LSWiu19g7dhdfPqHqQa9NZUGAU2sz4bRJx4qmEpzz1sazXAMbgMwWn8kbkigjtZGMt6UTRXmQ3K",
  "key24": "2921N4BJpYzNSRHWeA8vW3ofZvXNCenuUTimH7dUmjqg159aZjsDqH1VxdwMcLsbFMjRajvzm34cSbs6VFhpvdr2",
  "key25": "5VX9AZRuWAtFj1xpREYXHWcMbn1nFMEhCfWiqexkmsvSW1hpHZRq8aKwWLk3kfTi3Jr4wzbHCwD9CM6NQZF8urAp",
  "key26": "5URxFRja6fVxAmqdXHwv7jz4C5FGN3wcyWgm7YUToKFKSmoBKTYugxyNcvwCVrEeQwzdGqktNHRivUoavVzDejrd",
  "key27": "1W1SY3nUzo8uT5UdBDwP3gPnJhSos5GGZrA8QcYkXPzvxnLadHKZjY9K4vr8eGgFU2dAdYiB1J1Qyj2aCGbFKeq",
  "key28": "3MtPx9vxYgNCbtzNXdhd38dfN3gQPAgDLHmwpKFEyEUFHS4qUgAYys6VmhS71J3yAFX3aYvD6LtYnbXajCyRgbhC",
  "key29": "4BviMy8sidUhLKesbgwic1sFAvFr3UtsSqtXPrNWEHw5bcEjWtTKWwaNhDkznPjmLiXQ6Y1CAst91gRvGYGoARUF",
  "key30": "4E1vk2UvbvkxfHgfErHBPXu14vy87TjPu25SLzUP4KFZkbLZVKQ4oUwjGirqQkk3KBuZRFsZEzSrLWUzKeV1VG2D",
  "key31": "49Ve8afhxsbaBZkJQQfpAueJ18qw9utcWFEkiHvLLQ28Vmi1JCFr7MkrFfnttkdXWXUqnaszfEkSqX7jwhh8UQKL",
  "key32": "UXdTWK52Z6wwWfLAafDScQqdgPEmVZv8FsVQ9hYEAGbpEcQ4ZknUSbzsfqUbdUaCpMJSXQvZ4fZxccjhUrjcerS",
  "key33": "64AQz9zLo1WRHf7jNB8WTWt8thfbfkRWCLrYLzYCxpLH43pgckzKnrdym7bwYQR28Rk9gd8ySa3rGEY7WbSF66bt",
  "key34": "5AMQdh7djQJreFQDDwc7mFBpNpTjZgZXx726EbYUi7fUGiYptZuXVVXgDxET4fgEvVw6qiMnFGEipiqeSrzqNB6J",
  "key35": "3L615xn5nAw1Gt5pbhoqNxeLxc7xQAu1DtJSmhT5P4XWNqrz9unqMS2zJx8QmZ4jcyiWdCbah9EGjzD9upZZXfNB",
  "key36": "2kqboBkqCZqWkBsV9itY3jPxXvfLwwVGokrbhFnQKHRth7MpsbRAxXMLd3SWb3pzK4urf9WQmYzNXiz8CdjARe6v",
  "key37": "3iem9gbttMtD7f37do3j1oLcTdUTWxx3ubFEJEjT5NzthmiDaakLUhy7BohreDvAViVaAz5kicMawpMmskB1rekK",
  "key38": "4Dryn5jMfi2Efuoa5ZzoZPHkHhu7sAHjRbqzuZsot1zmwk4qqAAtXtiAstGBKPRgQCGYjRVmsXxPSP3R6BU7d5JG",
  "key39": "5VwSdYMnUtDkPzHpkS9kbSYTaGMoE8Er4GA1vykuHCHqMecsEQ19r5yidtyEorrcXB1q8CjFKPTFtszQ5LvXxXHT",
  "key40": "2f452TnuHuCPS48AZgNd7jV5RZd8xijLe2Jx3oUN77k19Xg9W48AM5w43QU8FQYyi3UkURZJXWTRwxnVAqRscX8L",
  "key41": "eSwT4t2cjnHB1PeoErS2twwG5wP6gTFAbixpEF9gvq1d16aByQQEbtqZQ5QyQw7a2oT39nZW9dCQ4VimeiZyeso",
  "key42": "5rWphPTGySpXgvVnKXNPbgUG3ZeB3pPJDim7FYwVn8Dvrp8q5hg4NHzSPGb2msYhpBv1npTDEFHnR5HWSq7u8X38",
  "key43": "25ieimPyDaWzQ59in5GPyZtot6T51BkeFSjquyJL4xg4iamrRieGhMRmTiyBd69naEmt4tULusJJb3h8C86gKHiQ",
  "key44": "3ujn1XMp9ReaFpKAh2MkZXdjwhfVXVy25u5jrfmDrtnirjRLi2xtcof4WtMvgbmZkXQ5FHZuwEXTf3j69ZS5ja4V",
  "key45": "2TyNtPTCEk7SHuFH34BDEn2oovnhfufQ21Zr23ehogvVnorcRyy7kXpedKE1aEgKhD5aMVD6Yq5HBDJm8VAf7Qzi"
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
