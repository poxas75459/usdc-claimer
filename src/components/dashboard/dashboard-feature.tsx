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
    "2VRUFzysvQZdFGPNLsYEXi2pr7CeiRxzQtCPNK88s4EbFw6CvMzcrCVdnxBepSn3SP9y8KCtHask9g7tZMuFhQko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muzYZPYDUpfUJMBXKsy1XD8FLrYoZSACNKnZ6gNEBnvD3HfPdN3RQkgSNEU2g7Ce3JmwqGQJUk1cfDKo3Lj5fZt",
  "key1": "3jrhS8htXwb39ue7rFgRqLePrP9MjfrLrFcFedK6s3of6wMCFdaXNPrXuHffmqqreWQ3aVUdJ9Cys6hkHDGjUUaQ",
  "key2": "3C2vx2Adzybrkbj3oNxKP3SkUs2QMM8ebK7vFfE4u3QUuaew8gYGWnyZvqsYcywQsyW6ZGCgtCYZemVceeFy1txh",
  "key3": "3E9dAFn8af2tz1t1tvM4syPSzv5MKhK9DHdvRu7miNiSXUvD76c23mCs6sjoLYGLJdSePte3Tf9EbGemhZ8MeXWz",
  "key4": "47AP9tUwSTzGTA5Q8jCnanmEgEWyuYKyLvMyrBzEHAhG5cCnWna89ETCTH3Ey7W97xMoVVPcJzmYq4paGUn3YnfJ",
  "key5": "3pqWDLQ5EdCyU8wRbqWuTqtJrpLYJsqVzBC8PdpybMBbdLySdC59p6gi4phePGp8qcCf5NizgzaxqrTU2uBFFrrH",
  "key6": "4kYE6fmj1zxt6DaA5wramR9uqP9dHvvEmW9r6NnLzkJByyGHS8VrgX5LerttrckRFcWtUhUxgwPMZU7sBPtmXNja",
  "key7": "xhDdPwm1t7raE1TwEFPPGdXVTDEe4uNVhzXKBxQTMrsSXEaNGTeWjMmJFr8AyLYHhCACzd3nRw7ajHeJezyiyrC",
  "key8": "4BjKkBMpASU3sXZcWaupAZU6o2C2hcoNGeccRuMUANduXinipHhNowJkZmrbDwhA8Lw7BGd9MpEYWjcXFkjVio6d",
  "key9": "5xBDhVhsNo7TkbH6yoTRU6d6MwMVZR5DiNp1uXFiUtxqdrBXvFnv2sB6qs1CXJK5h8hy5Deqmh97XcXWWLcR2Rhj",
  "key10": "TAQH1gVCZ42VHYQotJZTZon8h7gr5BqeUkQobfHRAmUMJ3c1YvG5YPQoa9rmPszRDKNhj3m7agcVZ9axoPLFCfv",
  "key11": "2wJXY5uToayr6uD4C99fVQTbYB6qkYYJNKk7xoJpmGGbKrNWK7yUQ3AXRq7w85Rd7cN36eiYYA2KSQzvfVgqFWJB",
  "key12": "m6bt4RhxqHfyjYoj7mqMYLaV5rHk1Hff1uzXx3BNit2HWorzsn7SrUKmaPaRPPvXydAnZkdL6GbKq5xUgPzyLY9",
  "key13": "5Pngk1Mu3ZqGWFTAxK9M7b7iLaXh3vKnqo1SBT6tNXr7pjeibHBaJQpiY57k18mp22rtpusj1U6wrfKLu54ei9Kd",
  "key14": "5dami8GUUo1Cqih792d7ZKj82PKPyGLhGX1P8ezwQHNRqVmiwy31aweeqHMmdiMSqgJFfTZgygFomXJvSUKpJu3",
  "key15": "2JqLEKpnyvwGyJTAL39nr9rW3XLUHj6TwrkP4ouPkLR6kC9PAST74cfH56YZWRxo76H6rh4VwZm2SZx33rsr6fR5",
  "key16": "4x67mFj1VXVXbRW2waHipx45L7m2QfQSo6Z6Do8QEk5JNvxzb7gVaxZzpNk4FMWrGkj7iYYTSbahmYK3LRdY7nLT",
  "key17": "5ekUuW7kZnBMTPRs8VL3Mtz51Y8PPL7yYB9Zs3Pg3aRu7xmMr24h8XT8DEKpdJP7w827C2jxFGy2XFGr3WJPmSGz",
  "key18": "25LygcNrwY5gawSujCq1P6mLaPbXuYrTzavmBXB2zLbbPh9JgpZveCoZy3BDMZoLC8VuAbJEW7zRsqH9BXAUaFpW",
  "key19": "5T8WLx3LYJRTMAmtQ3JtUDKVQ7SZz71BQceveoquSxUEeEJ674Ptoymqi3sst3yRnCfv4QaEp7GsRVa19JKdW4S8",
  "key20": "5th5U7Px7MGP1Gyt5QXrcsQ7pAwCEqCuM5qGpUdQwmFavcArJ89rrm6Xzo3B3vDVm4CQM6A3gkSDzwCP5XSYbvGf",
  "key21": "4EptYQodJLMH4C4b21YyGYFk3qFHFAiYUzhAM1hFGD9rYQhP84bUREnoBnw1JkH9M7zEPkyA3sE1u326JdtwChD4",
  "key22": "3xF8ZMdZfhq53ajB2dS5iYcsuduDD2b6pkfCgs4HTZfqha8343MMh4geWoRuuZBS2MmKRmtWTDaa3PVGTfs5FctS",
  "key23": "3hjTBR5iZxZWf8v6MVpALRMzoz396oKkg5Km4xySpPyiB4L6SWFqcQUa325qKMPoHoi5U3YY9x9PNsKZWB5WLN4H",
  "key24": "3CmeJWvvdm2VCrCAHedamrr2hguo4yjxQSbBSE5UXvoPufunfY1U1oKXTprx8BQEmw8UZVZoeqEFxkzRH6QYEA5W",
  "key25": "31voRtJXePx5rw9tussvoZHYQFLXkdSEEfM9qQNJNdtGQYfoLoAorzztxFuwf9tx1v8CgKFN8FYBZvgXJbRSazRf",
  "key26": "4CcTX7c1w8Wrj1NYdk1RzZCPeVd2W8ZLTcKQgWXaeXFaxg3CPcnmcm42q8o7Ao2HJWLZocjutwXdTPnkFNUhQxq2",
  "key27": "G8qcTvcbHk8xDXSj1AsmLPAQRKd2pWhwBjXKzcUhTqtSh16gThqV5CRCRmgTYq5DbAnKzNPUdA73EPZhAkca5nN",
  "key28": "5e3j5Bp1tKzFypn6fXXN2SnL5nM5MYZvtSutTJ7XBjJMvCYbzfRMxnyVcN9DJy7YCsN88eNU7puBZ23rV3P9YyqR",
  "key29": "Tk6NAP8fyoH7Jerz4euScS1i9Gx6Lh8ennzc17nB8GkZem7qTRv65ZLMPaq7zoMobsdLmdLBmc15so5c4TPmc1K",
  "key30": "2jukBmjzMneLaHf71aPMp28HwyEnm7JkztCm8uGcZMjrEGz21ET5PuycNYkpfidovbGD2fThu4CxhcF8cNwpz4Dj",
  "key31": "4piXUCh5p26jFMqDSnqk4YQpqh3Gijv82BkzzNPcpvLkL8Ft7EqmebkYHaf9JuPRPH4mHSeEpYN43PUsu5brHb9u",
  "key32": "uN5aVtzW54DJ1ZiaN88ft3GjXHZk75BYmYiFc6N3UZgLJ9wTsEWA3JCC3gqGnqHnowenLyTtfetQ9Ufu2xnVFgJ",
  "key33": "4e9vb6pf7zPmHD8XDW7VJ1MEE6hLsLFwt2XzC84jmB4Gv2CmsGWZWm32roNhsYXtc1zA4Ln34EmeogNKrvW4Nh4V",
  "key34": "3ytaS4UjDyiiuo2XV2oqbsqeSjxa48XQMimcFrvknmbYGvEQUtRV9MBxN5ndkJoLLn1WqV65iXmWosEviNePsDnd",
  "key35": "2uqCWX7sXgPF79EVsfHDk2sLMNVzwcCKsTLXj8HoTjbKvoAzRRZRkwuBhcf4WbeYcrKjGH7Y6N13nAPD9BTf6ojk",
  "key36": "3KoRWiUTRn6eTiXAaxm98UCPguodwPm3bhWDVtNotpTsz9PhX5PhFPJV4MmUCpm5BWRjF2gwZsTZEWZgvYpTNw54",
  "key37": "2mCRSaAve6bkyKp5VhADPRg63VJ5DfwdDgL3t87vGZXrjm7k8d65niBwNJK7XN4X7k25HLVTpFt1JMiH4zkWo9ax",
  "key38": "3xHG5csqWFXZnHPt1prYY9djzRTkbTXoubb8JjXRc4pUmi8X98AkxSbApJEPDv5xHF2GpVM4ZDvb8By6TXtW3uxc",
  "key39": "2XK54w7xHVco4oruHvPScuN6aRzzZzGCUfyg4QZqkyMpmw2VpysFCuJJcnayDStp1jVoB2Dy5FPd1VJNpwJreyxs"
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
