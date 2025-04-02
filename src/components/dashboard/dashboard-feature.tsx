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
    "3U4rcz88abHxfERStXygKMoY4uNs6z14RChYDZm6DztwGGt6GAo62XxXwSvmytABFZ2jKvCFHfKXbKwKcTaEHEXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8JiCqKiTDpyotXaoBCfnjXHFKKA5vA8o6zjy6PpnicXcfhvLkitmvJ15E7cEUXkBX8Xzfy3rqPUHr6Zooe8DoL",
  "key1": "2LhYx4NR7g23QFYxLj7f6VP8h9yGeZUGApJ6N9EHx6hAy9QqqCuV6zoq1fChsh8J5Gnx2teYQgwWG3bpoG4unGKL",
  "key2": "61erPH4nYShcZbs85or1C9UEbqANKN3XVb5KWQbgGZHQLJkN23j1J8wsTkoMHb5Crdrs5kiLX4MAJbz76dVcnK2a",
  "key3": "TqZYnCFP43AxHSCABwawjA2xV8h861riFUubqc4m7J65PeXd1zUbfiNVxL2CMpPUsKibuVLo4ohyJsQeKBf22nh",
  "key4": "35QvchWqXEoPRFJjPwU4XnJmAESmGZBEHTf6e2223qJdyorNRP99hkyFcAXzKNHRKQjLjm2BufFzuwgdKq137iiV",
  "key5": "49YPZmjXxPtdVjg1zXeFirskTPKkY5niPyX4po6yf9wVChTwK96oaG6Yi5PsKXxntv3Cs6rmaxFAEZaPoS9xBfdT",
  "key6": "38Ws2WBjAL3PMn4xubiTqXwzUx69SNLFozwSZu1Q88jF3FexEqp5tx5M1XWkRvf1SXSTcMrPaMNsYvmFZxUDp2f8",
  "key7": "58a15ueEzzrpRJ7y8YdZLn2q2Z4B5SY1Uc9tZcXT1eJjV5st48HM4vNaQFfP1xz1ZpQpxAx1aWckoxq8UjSjusdk",
  "key8": "2zQ4SvkHYtzdeEpCiZdcvMRZkrsNdpRirVJe9CdtiRx6X4CCmUwbzqAWdwXn1KUEXKJFCPM3VxBNjSzVw8DqD9nt",
  "key9": "yDxxP9Zrxr8YDjwmcdL6EC5h9xCwN595b6Vbz1YbHUjX1dj9jaYNDLwP3fSKPvt2xeafSdUUa2Ew7jgETA51uhm",
  "key10": "5BJoMd3GnuVikJrcfvwwvSoV936u3LtLeFs8PyuQf8p2LpMK5Dj4x1cB2ouFbNHYXJBkvxosrzroyg4u9ThEiQF6",
  "key11": "3a851KKmvJWqKaHiUkRpTEbR44WYBYMJLdV73uqDkyCWRj71tbqp9HGLGArsh9B2977SzUzfwv76UwKrGPhbp9yH",
  "key12": "27GR6KuEeAG2YwCkkvfw1JNLwESGgC6G6MBRXbEPqmj6w5mkdAfmf6FugrUMAPKp4Sn74WpUemug13BEsVwhecxs",
  "key13": "4VW7HQvKE3X3Lg2oybTDBqE4KRh6c7wvxHr62ZXX1z9RSfwHsMr2httF6bMVCMGhrQpQreQtUbVMZqarPVFJvEH9",
  "key14": "4VUZoJMeTvLcDNcsCNNQLh68VNR7f1urBSWdPnN7cbZsM3Xr1EWrQjP3e6uAARkzTdAGTnPV1bVFwyx6Bid6DYiF",
  "key15": "BYX46eBJrj6uqhhk3AmteVatjPNQmUEA1vBwZbgP5Re1FLS6iDPKBwUo4UnDqyiYvjmfRAEL83frdKqdUY9jqSZ",
  "key16": "5SdbLwGpTK6TgxLL9ApvksffV7CqW5JLHU7U2b9Ju4q52xpHQREdyE4SxMr59PGtR9rjD9eksEby3e4Wpg3eFb2a",
  "key17": "4THhb3zB7aUhmmEdReP32Hvc4wNif9Z2ScebCPriBKnGnkL8eLnebYdRpait945LnTMAQSKKQrychsSaavB1ic59",
  "key18": "3jinzwprBpCQywSnCD1y7kVCixM3cySgPc8i8FmGCUYbNtfhtquN2aQPE5C6LNdo9sUdRpodvVX9p3JUy9QvB2e8",
  "key19": "4skkLLm596qQGx1kjed63mwE7uKjanyNd5LoVtkbN4nRG2T5H44BQQzquAsWpc6WP2M41DZjZeG6NK6qLMpY89cy",
  "key20": "4iEhbANVBPMV5j7SwYmLAieua9zi7eAGAEppvJ2wBgU4GDCXosTwjQZFayFwawuKK5J8wQghKaQhSJHK3qtLndXY",
  "key21": "5CUW6FypSNv3JScpZDAwe71QKXfEUYTCu9wVkUPFqgQmuPbdbRTyad77jp8UT3EZ4CvBGcYm5PqieAkijFkxaoJw",
  "key22": "3yvfH1bXLgdznAyxZHMWndACKeocamabariX5mD4ioMAdax51qd25QVwbKYKjiT1tM74JUG8FeG7wew2K44kPvyz",
  "key23": "mGVYD4PrX9aSDz5wiJiV3t5pmzvzCpojGxB9C8gWi3KsNoGXg45P4adGpHgaQd3DcL7QB9Sqb6R9z6XLHcR3a1d",
  "key24": "kg7ZqrmjZjvNU9u9yT36DD1yD92eaY98reUs2qURr7EihsadSZbtxzCz4dg3PYigcUhz5V7JC5935NDjhHWDKzs",
  "key25": "wKSz1eWWDi2bFTXMdf9EyERSS6Hw1dZ1RtuEkKmdW88vJEmpiYPAkZvePo4kp7hVYszm3EeJDtJCgzrDh1DQgxj",
  "key26": "3P5CGZaDfvJirmD56Hj9QtWkdfhf3TVcdCba8W6WH7vZ4mQcZHQk2AYHDajYWFcQHkAePvWFWMsoZV6DymasUYjd",
  "key27": "56HTvnrWTgYfn2YfK1GYcF3gUFvz8rvSwVepxcRHD9zrpeaSb9xnBMJTQedbAb3HfkxWFPAJsQwf9oZ92stEbn4t",
  "key28": "49DsghXZu8GTFrHCtzctKL8bAHZWZ4HE26H3eL5DaXsNEutJEAKqcpUZG5BUnpAiatesqzRW8TkFXijPd67eeJZ2",
  "key29": "d5pX6G5VCMTA165XqugaC2MT8rkvvqwyrpnoHvg7Y7ZdrNX4c2UUDyLxoWV3KRYDamUBWxReTyXnTXj5LBp4And",
  "key30": "4GqyNmbvJi3Sg5tZm4YLzBqEdB1YbpTj891M8taasmqY59KT57scmsc5Zcqmu2exCdv7GBk4uutAwXy7TezsMbA",
  "key31": "397L69LLPVhZkfcLwgHYLXAExyDBiqPYpkPqcqnBK4BC7LVjR7CEwJE79GK1raSgefjDVD1BsH5VrncMqHSB28X2",
  "key32": "4HeQQzyx8erYvBe22zu3bunBH6fgT156abiqLH3GxckLFYE3C4tg1vC4YPmB2r8ohPYbf3Q6MK1rjQNQRWHG5USB",
  "key33": "N9WzPvpK9vEcpsDMw4hZRKTLWu6NJXMcdjX7qYj69q4zAHkFm4Bo4LxNSaEyTte2iq6M9uqzKSnwRx7QLWpSL6T",
  "key34": "5JEKAQLXg3QbVBaGdGcGq4qHDmTriYsBjUg7sETZaW764ovYVuSG6DmkjCgrooxrCFY7YsLCAWg5dZig6Ye1rKua",
  "key35": "2S33p5QtUXArY8raZ6pVyRrnd1RjnGSB3c7DdRyXcofrtkaCcgDFtBsQQHmMXfPUuhkksvukefBvan5LRED6ErbY",
  "key36": "3n9zcyHDgrRxCWp7XyavuKbz1NtMVTjj1uAx2z9KwDxg9LejK4zU7qvATD5iSk8sqmnQQoWzmFiPKgQ6CV3GZEuK",
  "key37": "58XwUfQCRC6TxBKc7p8Z7j32nZs2x8xS6k68jmVoPrE92Gm28FUtrfJozSnBsd9p2gXdHrE5NPYm6FFamwgXnKg6",
  "key38": "GLZEsdmzLQqiZXD7Cr42RWhVkKmUj2WKj9AQQBCEyoqxrS672r2mgdb4Z6qmzBvz41TFURnBGChn7QzxezX2dqZ",
  "key39": "5QjhhKwB3c31zbEis5rm3HwRRMEd42uRzxQYxWwUvaxF8dGKfTL8aKZGCsx17mjCg5EaDJUpkkdd2AWAYKX87Mrw",
  "key40": "38yh5a1yExv5WTfVQVmTcz22ZLM4hrsZcgCoEP9N1wgN7hHixeQjwTrT446CLHSisEay4mukqX7vLjcruc1KmaEX",
  "key41": "7T5c4VYq8ZfoC2DLmodKuJYgGzHaHDr9TJjK8dWPXb5ibGfXZSD5HEf48FhSuMruVsEUGa7EFd2Wdz9T1T2KJyU",
  "key42": "4ivqnBciVfiHnvt9cZGkzegwSeukz86HXGULhHQYGBJ5SdqdB2XrxqLF63wrwj3JsHjpJsunLXiAqFbnawodDAAx",
  "key43": "2J2ubptZ4SZw3qSv7VGQKA52ahhd1s2H7nJGc6XmFp2K9zaq5Y6cPscf13rQnniCGbbanWfehqgLCLNStUPKzWUs"
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
