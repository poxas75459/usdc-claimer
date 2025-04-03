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
    "3asM8Un4Jn2v5TKakqRtSnKKtZGhtMqR8jbSGZ5dUhbGxt3Vwxf7wLULAwGNu3gnKNjtmadVFEupLbMjcvJwywDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QNTcE146PMgLLFQQBzZYadJFLxZ9VKZjdRc4qHR8ndZY6FFBF4f64tsDSfM6FTJKsTxEBRDRr2F7gy88J1a4XzW",
  "key1": "3YPWVepfY1SPdYebhbMUkFmDxtknknHv9fepaGMq96LKEYf6asqK8tYCae8cQWuksfqK6F26z6N5FwBkFjDbFZpY",
  "key2": "5uxjQx9tHLrpv9bLWqBWENWbwGXEuQT7tFWiYNrTZxsQj7YZsvvk79hQaXXZCwCoAVxjUQRF9b9CoQrnUvHkiHA1",
  "key3": "2msdZMFqtta2yjvYt7CG81vMWoHmrLPVwM1ntrr9RmUJjBwRzR51YJJE5H1wNk9uHyrRajLFmvvTR46xpvbBAoe4",
  "key4": "3yD8Zyfx9sEn6F9XJs4wshUA4667W966DgFBH3u9W93oB8KXGX6969rXQF4VhTDsmBp3i6xm8ct7DbLyQRxzzjLF",
  "key5": "PiegSBaGoXVPgmpuSVJYcniks8NGLo62xkPc4CH2YCXBegUYxaWTjeY9btubqtSNG11R8cxqMUKKPngo5R6k1Xu",
  "key6": "22GVPCHG7oZbTxbN5qv3qibiwG5reYfGqUYrswN4gKHuhUtMSZuDBMSHuALTZFq3CYPeBBEReooCBQ14VEdmPPr3",
  "key7": "3cu66jNi6ADZuMzUAwCB47smjyKbi9tpsHparxwUe8FAqu53Xw2ayQhLXpsptorpsgmCiWgodMhQ5akm7ybnUxNF",
  "key8": "2ssEBwR8BxGdhu3b5YrV5pUMs1bdArXrJAYqanr4zbfUJzJVEZUxQpmWGay5MBQikwuKMPSKzA9heG8wawa2tJz9",
  "key9": "47vQSokXEoyYCSkkuB1tevcCt7z1YcfjiUGsE2AQoYaJowd2eSH9SXETyfwBTYkZC4bAdRfNaECUZYADC9wherAL",
  "key10": "2ZhQJABZTdhhDuBBUC88jm2kz3c9ey5poAuBiGNX9oyStg8xiXzw9DvAT8vHAeqb4y6WWctbEiKLfpyTL2RdhfZo",
  "key11": "5WDD6UM8ar27bQJMkn2MpN8Ju3NP6T8ghSWxC4ozt1cDr3vmo3oeAfoGJGjttbCCcYNxqG29yyLWdFd6yt1Cxjzr",
  "key12": "2J7QZhkUVKBybinEPUGLgGkofD49hYgnHqQZ9ft4jZJaQjre7rCzpLygdCSyvKbnMNcceMPVkrQNv2N5PtCku5b5",
  "key13": "2bXXKCoioB1yCzZgYBzwdydr8AYm5VCWoUSaEkQCNY3rdnpZ8DWUBBQg1y45ZgQntwkHDjCQXghs8WbzKgTvTCXj",
  "key14": "PGjgoLLMaR9TZ37KHyUjKbjoQiUFuNpuut7zBVVieXWQe8JjZHYxRHGWE5BQu9hrE9ftXyLTXLMZVM72CR35V6E",
  "key15": "2f4udeRgj2ehq42SGzF3iZv9L1KjDx7ns6RWWK8JXmj81A38gAFtJW9PY2Ph7767uR3Bygxxuw5i62LTumhEeaji",
  "key16": "aAeTST855w9ZNgFMCV34qDXD2PzRgrkTS5bks2zLh4W3fbP2o1riPV8m7K2Z5fxtJezKAcVMsewwzYzoj7WzRHq",
  "key17": "5H1DjgzmaozKKYs6uaDN9yqKremeN2auYLJXgQWTks26BPLmMzYL6U1jLgC8VxXmVwvEv7SvnrkqtVq1CDHY3aSa",
  "key18": "4YtJ7rM3YPjhrutWY6ZHwDYb4QrpftfrXjxudcc4MTZk4HomNA1npw4piBxKedpWfM2P6i9n4ZiK89GP2avNpEDx",
  "key19": "4YebB5YS8RaMoy7CwyfHLjT6dyzTQufSqqA1D7HJpxCCxUHoTAXzoWar5J1f4xAoMaUyqLFEtnK1f4U7BFTvG64s",
  "key20": "5tCaAnvrjVwhVqVLRQwtVJt6RZkJWwTji7H6xuSomqj2S6wrpxyEzsUb81cbd6ToQh2E8bUQtvdtyTJ9xeraB43T",
  "key21": "2iWw1kuprRhqWZsWXwsvhrJ8NuqQzHCj8rbJ1vgq4rxygWEZ5FeBfnHZoukunX1P7D6z8UD1LNRwcqd6rn772YJo",
  "key22": "3eJh2MSncUgHquWAJuNJQUBqPZjeaJNcuQBLXTjyuy9KeLr5LHGspjFppE64bMPuRdot13nHW6dmwThqQZ7SHRmV",
  "key23": "28Y3nygU3YXfqdjc1zvsuYJk6fAmwyaL4JWpPD4TMRtMPFBRUCR6YPRewdhBshRYNMid2AMSMG5eyND6snWGp6ix",
  "key24": "2BG6dF3qNEiKEB9SMp7HBDS9W5nadAtrZvdD9VSEGLP7LpzXGFwfTgRFWWh1r7yuA8i4RrAH2j6VSy2UHGzt7AsD",
  "key25": "45mASoh39rkrsgmSG4rVBnTouw8Hf8jz3SapEgchQwF73aQLQoJY12xXKGeqyDVh7E5MpXJdfFd3NTsozXUHxohr",
  "key26": "2qKvoH5R3H5MvbyS9mgvSzkFgKpei6HGy6xbMsj4f3hqAgZ9cpxJ6UbMhfNdPqE4Hkp31zM3SyLxZyFBhYUz8Uvh",
  "key27": "5Vwh6LYXCYv7FdopwSN42swroxeTV5xRxLS6nEEoUTj9SqZbyKF8z4KxestgzD4NaB9j1kE7sYWNquLB4fiufhSE",
  "key28": "3xw5u3A7yZVLoiZ1qEzBS1gJN1FLzf87LUW8TBo4SFaKmkpPznoE5FBDLrYxmshHfuDQjupaDMAF7tad3FTCHuEY",
  "key29": "3jxxvr5HYo9dSidHNiFGwZ5NTsfFckpLEWopyevwrn9cDM64yuyTxdo93adfWkiiRBFWrgNt9dXnRtn9JRw87bg5",
  "key30": "4Q3vqv5VCts1hhC5KgZ2jS72d5sYp4S2pRTCrZ5fUKXUP3iPiY5Hn4wzngP8kckkDJePnv8aqQQbRa4CtLm5QTXZ",
  "key31": "jFxZ1rmu9vbNKHsE7AyPcg6h48b7tSehmVHAvta6NykAZf9bLijzv7xcRiQxm6wqf7Ck2VwnTTmPCQA5LajjUWE",
  "key32": "4N4XuVrFkmLAr4mF6ozLWFrQhwi3kERBLzusw45k7YPci8vBRsQb11vsTVsTJxVkQPXXNKiLGZdsG4HVue7dXavx",
  "key33": "WGVaCGPKcTp4baktqPaH8oUhQiHEQJtfWEAaxVmJi6V3tz2GTkTwrj2KtDZPvQUepTuEUMLDX3RirtpsZdsSEEX",
  "key34": "5NnrSAb5xSRMZL7Fn13XBn4npnqRufcaRj8NNQHii4Hbg4KjtSj3oQch6nxA4tS1x4nZYEbXHmHpa7G3MVKg2rQv",
  "key35": "gve6dXKfKrWofMUBRAtcNuSa3XsKzta1KUwubQPd2VirqPSXygt4QxJL5zKGZRXa8iwYXVjxeNiwZo8dAjewLke",
  "key36": "2wG4gjWbrL47XNxWJ4VHRURrp5VkbcgLekrogyWS4bok9uezqCf2A7hYyrraXzDu4Mi2EXVua75TZcXmhVxEo7fJ",
  "key37": "4QeH6i2e5BFiq8azXw2kBZrhdXexa1jC2PPmeC6DxxK5yFxw2JERmQwNhN4ARew4MjwseUgKtRxk1bxw3HjpuRYT",
  "key38": "5yZQNuQVrJUpRBtw56mjqijbSY8YXC5N4bqJdiWiojpdYs61Mnxnn9FC4LD7oRnDP3LiDKUxVzkH9sfpdwHxNNXC",
  "key39": "4ghHGhjBDqCsGFu2HoEMKrX5NKiFhq4XME3uBBgMLTBgMJgxVzJHkSpdJyaq7RCaewP7R7UZxFJAkFvBF796ga18",
  "key40": "A4jid9ue8LJas7MT2FCCU3gRys9HRxhoTBeo8MqcU1cjvXbpWUZdbcNfj2vbmK2ez8fJ2wxAsfjAGsjyFGN5dXA",
  "key41": "4xz7N3gEKkftuiCmBYYH5aC4SdcVsUJueAGGXG9w8rwBHCCFTADUbH5PZtvD1CxcjuZjmj9CftitjW3FTB46WqMo",
  "key42": "XhLjYwBEszJMC1JHZV1F2n3q6ZRnEWivcECnqfVsNLNBkL1dF7CrmgNRdqdzmTu4UhVCqBUG37mbFKxArZro5j1",
  "key43": "5EkD77GUijmX6Ni3pDvkmWKb4Un2QFbN76YdBF5TkqS93KRDCECKKxvh5uWG6V5NQyotqp8ggnoZiW8YYuXv3KQj",
  "key44": "2G8NwGzvaeCdGFnWDrw2iPQyV7hhYPwj87Fnkz4KFtgfQu34zGhYM3CY7mgTm7iDcj6Wq6sXZiMeLDKjwVLTavKy"
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
