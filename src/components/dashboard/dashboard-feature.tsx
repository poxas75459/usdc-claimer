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
    "KB8i7dur9tAD8rDSqABsdXM2vGqGE1jMZRFuCnUK7rMpjuig7gCDEQmbcLyZ32qUkqTg9fNWAXdYWrtmWwAiBb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LXQtiVJkFU2i4U6DtbjSsHoYnciS7o9F8PG7c2tkfvxQXceKZvbYSfckEiU1M67stmDwXcFXs2uYx7eg8qKnNms",
  "key1": "4sRYg7PzG3fj5Q4hux6sYT1UUMZuqogZiKZmXqbc27tRvEc1nKTxS38iBAPbmjd1TuEUGuQtMnmowQcDyRAZMxet",
  "key2": "2BBSCL9dgWh1EV4jZYxbzXzBaqkzVxhE2USBRQNVapiksYwCwz3yqE3nvwybZfqhHsqrEo1kR6pA7dpwC3SXdBxs",
  "key3": "NJKYxkcY5r7nbm4sSp2cJLp6NNtkmKE5KYje4i3uie8zwHvjzbP3D2i784UZej9BVvFLrpbEJ5HAHfNDP73DpFo",
  "key4": "5VLFBCGtGF69Z4hXqgeYn7BaJKiysVbx8sfYV4fkTBtJekRtGVnw6PP5LY6qteMSaW4gvtWFucjA9zeD6u4hkTyz",
  "key5": "27g3YFW1KHrEjJ4xhrn8gsCsskhuuiGvdTkaYb7aPnYbAJjahFyJcz1bUopktRbN4QhreKurN4XB8wjQHm1twSqm",
  "key6": "qzqJQCn1c7bxxCbyhw7a4fM9zvwEzvtpD9WtXGR2ADT6sms2aRcJdr3mq2eMz6btxvKnMUgcaBD3cQvGsQkSqAx",
  "key7": "3E9qtnZRJcepwyRUiKTdo1JpqngroZ8XEeRcDeWuddQ77bQMGBbga4wPjK2VmncszL2MyBnQR4t7SDYCiebtRH5P",
  "key8": "u9X8qydPbqiQz1LTpHi9EF9DjmQkRydAf74w39XPnEH8bhEKhGvkpqYdTdc6zKSepw8nDKo8ynbDgzF1hBFvvGh",
  "key9": "avppZ6daTmBZttjLVCnLEo4cFmrHk1uce4kruRCt2sC1UUhtjCg5D1HrXYQbqcpjBYGehNCNKwS1KzJP94xvHxN",
  "key10": "22uuMkHKH6vKK21ZpGnvzn1GKyUvorKitTGkDa6xnzcviE8fU6CqLX9V8QpfFXczmrRE3FQU5MYsc8HSkQhM1TW1",
  "key11": "5VV8khdYQi8SrFKBvYFWbpNiP5TqwdJejP1XWZsvySX1YLEysHVo73gkiKVrDJ3TCfsYQT2ghKXnC5oXrQdqfg1Q",
  "key12": "4B2ZBsfkwT9VhWTumsZLH9x6zbYfTqkD4T1KEgmo3jsijiHoBAkdQFQV2RpmNs2uznc16kP8ctfzQy2WgvhYSCiy",
  "key13": "56cnHPDFX4goJmR8qUGzN2bjiCpxzos9bXw8DxihXYwxwZsGRcjZ35wGVnrAPqPKMyW2kqyuBqqkH7F8uWWb8k3x",
  "key14": "5YSU6SrJ3Mt8AYk4x6GcDxB4tTAyxDpM1R2uxt9JRh4roynEBPgF1Wigntz6wkmj973iqgX1SWtGgzuy7o3Tdq4J",
  "key15": "2ktJ99qt9Bq6LbuLZSwgHLbz76W7bnyQq7ke9ANUUkhZjBt35o4oPNWCGLGjMXPRfUa99n8K8NPKXyTVd1Fg5qaF",
  "key16": "2z1JEhsGUD9KKbordReJs23x1iaQEXb1zrjkENyqwvZa4UfZqjCoJ7X5D7yNxdgk6i5fvg9Ufjv7eaLCKYKgf7pV",
  "key17": "2xe8arJD5VekvpMqBe29Cubkyqb6M2jq3J8e4AcmcvTnXBucT8qw9wKRJ65bS9CbcR8kPuDmFnmDyuVzgv4MN1Z",
  "key18": "45V7Qn3kuJvZAWYgSTjCcyawFASTYt1E8xp6SxcXAkYHfMXJxuKCn9P3tfvD8hrjz385zL9ukWKitw9M5A6GmLVS",
  "key19": "5YuoU21sjFsw2s7Lh9Er7rbTsHhPndKhUCdofFYuw5242tGcFBn9ctox5iT1WuSJTJTNpg9q5jFWCC97jnpJ1BAK",
  "key20": "4xqag48Fn9mpwSv6tYLu65yxMfSKiAJEWKKH3P3k31GNL7YtsVU1pcpfE1NTU2Bpe89SEFV9sZxhtezmjsSDQSPK",
  "key21": "4FdZLms4atqfb6ytLHiHAWd8noB9a1Po1finJLp8REB7eomWyGLWxEmZhneGeTyJJVZqCHn5HLNxpoixhyVuggBV",
  "key22": "4H3PX7QTKnBjpD65aBaTCZ6eKG3k8j4SJLwY1HE6YrkdUYnuev4pzMiePSxzPz9F6pX46VNVgCkkKnuJ6Gxa21ph",
  "key23": "qJWHCLrSgRzdVW6KkD1eSM58FYvz2PMRK2n9cvJT58jKkAo4JDGHaPxDQZYzaBA4d5mvEWeRKLoA3pHu2sQbrrd",
  "key24": "KLThVY2LFZeLhtWhBtdkDHofZnP7kJijh2bQAQYRRzLJ4nNpGUdEMoUVdYQnYL3bbrfWPtmp9ySWvjGqLv2AnHq",
  "key25": "5G93LDKsd6AovF5vPs8WtW1VeHz2BAF7dE7ek9if4dpvGbvUF5NkEYQU7M4SmzVvw8RKdaPZaHBhDHdBq66o7X5t",
  "key26": "49pqEsCCeTrqAQcUMnL6HoSwP1DCLftsn7ynHHTAnNYMBGWWZaHzDcrD9By2u1KfzTK4wGbvZ85FawLTnZmtojX1",
  "key27": "3umMg59oJR3SRiCfNJBJZ3m3dEgf1VaHPFtoYuH6XsZd1jqkhEeRWdDA92PkUxrLi74XDoMbaG5nujuATHRcRe61",
  "key28": "k5mDzj6LPtHhnvUeeVa8miGB8jujDV3AYKEFZEJ8XeHxWZv6yN8FJC6rnhqL5hVwAP3VvZRUnGAZDo3T8T1X36W",
  "key29": "5VddCcbbVUW3oG4eYdcUpr7XDzsgQ5NvUnbK6pNCUrJVn87UfK1ACvsHJr7WoHuVCMtGLQEvJqhSrfu7CQHTEQsV",
  "key30": "3V31zqdjVmqxVgGBNMDbAapBvQR8rtzwQErWnb32QdBqkM12k4Bput3yw4RPZVvLMBbw8Ggefa2ggzDELXT8GA88",
  "key31": "acwGzGgmndBEyFxVqvsiBMFXGXMvUhNmk64U8uKamhTXp912RHxEn8ofUFouMejnQAPtYjJbv3LyBdeKbiGrNju",
  "key32": "3vDmrCGQhAEDEFGojZ64y2qVuVT1EMcmHcwJRKGJTr8XqbVrqHtAvu4E5NHeys7ajprKBKqcRNgjboyTpGx9H2ND",
  "key33": "2Je2DZWxRraJRXJStF95fjGG8Abn9Gd1BRfnqJU9YXxq75QTZZdxaYufSg1MCpYfm252bbAHh3QZMUwXVT1wiYAn",
  "key34": "psoFBKnG5cXMd41CMJths4QzYoFMbojAsKQEvXWcAg3YP2GUaDqZ5q54zbhxXkLhQBsdVMY2aF3oMqWYtSiQE2z",
  "key35": "4Zx6XeeU13M41rHzpVzgHbNZkWts4oG6J3rioGMjoZeAoWScubqAUvWeEiKtLBAuPYaZtDz3dvjmEgHT5Q5Qgwau",
  "key36": "4jsgTi9xrbbdGpNSNdVkKfPWRwmQwii5gBxX8mrDTBkfrt1urLcGuwkWjcZHkmdFbeU5TeRVxtL6YE74onAkeLpG",
  "key37": "f9yd5jUq9inr3h3LuCiUmFVEXfnnWQk1W1uBZowZ3p3RQz6AC7aUbKWMCKVHMdMX72iCqv79AQbzn7qvomX4pv2",
  "key38": "2LNaqD2w3aA7GvttSdrg9zDBMh4Q2ZPqPg1ubvcUXSkresNcaUAdx9qREziPB7kZBtyrcgu7D1f58nfs9mSNzHDk",
  "key39": "642nBUKJt1jg4A6L9k5MXEocXrFp8r1VT4BeQn198G3j67i4MtBbBWMmKDAi61BNd6125o9K2yEEXgvpwgMJRN2j",
  "key40": "4WUafDN9wQuA6444AjdnN6669UCaGogZuyUE3dBhw8nTSCBJQiA4qijp4Yyz8uRQ24N52Ubfk7JWdb6vEL7wceE8",
  "key41": "nc7YFuVcY2kPsJzRs5aQnuNrDY4N9apxhiTaas1ArcmLtnw2mmzdoGQRACHs66VjmyceS4LmFTbJ7bt2mVEyznV",
  "key42": "2sNptEXVcjDmrNyRMQpDGxz1SdTm6DV6wDtHmNBDkuDv6fcaek3JFMYtYfkstd4vNd3z9MRHng1T8ZtvrcTEW8To",
  "key43": "kTPtkqUgjsR7J5ZxCEZxgWRLUpzdAMeiaZadzqMJWptgCx2VC4TRfdbtrEVsYR8paF7gWGNVCdL2TrvrCg8aN3n",
  "key44": "4tHi6RGZrKxoSwzhfHQGuw7KMcpMUEKBgVWEKb1JY5VCS4tskbXz2ziFD2hzNB6MSPuZhcyRqKQRQGo639vsywns",
  "key45": "4QYT4B7VejpSuxMarRFM8c3hXsvhXB4kWcTZ5Dz7vZJb631XxXLWomMpsX1WMsvCuAJju44xSiC3s4mdk7z936pt",
  "key46": "3CVhc6v4fZghNG8UPaR9jKCciyxt5KakHBTbuJMumuMkTFsuMHAGAkbBTDY4WNwavs7CZotmxxTKuRGQDsbn2Ckt",
  "key47": "2gLZ3pUMnVv1zrtv2tTHTJM8upsbZesYd6ofgLNEnnCU95QG4N4AWguu5kKESoZzcPFuTgbBgUtpCUSSpjcPU4F4",
  "key48": "4GsFQ4bAUJUXDtumPFs7zuKs3e6xx3YA1iUwPdgXL1peCaSxoyTSY5oFR6yRqiYnijLsBpGJXggW8UDCv9rVo2w3",
  "key49": "2KJL8J365tH9hWPGb3F9y9HSDJHpUsY8yf69NrJr4hg4W7AvRxVLkqow7K4A33ngLkEC87zj67nsFrh6mm3vmwf2"
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
