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
    "2RcBAvecsXAqzLJxbWANyuB1MM9wi8TKmK3FJjeSYFAd4MtNFNjwX8X1gT5VkNxdy3JPoadr8F7j4pwsz4PrGsVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3TNmFVyZbUputsxc4txamg9DgmEmfCCF5nnHKfAGAkUHsRYcvsip29ZCuNVAM5WgtMD2CgVtof8Bha8N1P8D3D",
  "key1": "qa1dmojbNhjtkm5Q3zDj53zQKijETcFgDa5FrsonV658Jzp47ixaiMCpDfeR8sdtMGqJ4pFdRxywCg89H3usnmV",
  "key2": "2LgBSfAmTcVqcbZh8f8e82HQqWKycukYL6fLiHsyXDseqrNBPpFL59MZw5h7i1uPRqSZky6EKn9hx8PfPQy4Gobe",
  "key3": "5fbhnULQt4iJjcMxf9iJJ3wyzEYbojzHsBy6qxksYXu9qxCL7MYsrvX93UePGM1fPbZeagY1FkqbeDBNdgVSFa8a",
  "key4": "pK615BwCEhEyZsw5DH8Hpkmg2Kzi2BnWtnZyLpQDrRjudgCiDyEai1ARTYKQeBvjV1tpUB8BKrURhQCX3NFZw3p",
  "key5": "43MUywEfCWoWxsVNnENQW7duVcQFZM6pxB1RBnhPQoRYrDrrdJd3aCyt8oX3Zt9buKyGxJoxLoRHE5x33p2b8P7q",
  "key6": "3hJWBfHC3JcYuspMcxm5QDtzYxWH3LzrsjN2JFHivqroM59XFyGxinnJdNQELDfVACpFBj7ds9Qj54G6aGi5L9HJ",
  "key7": "7b7N6gt6br6p9RhMp5MfeGLMvgXCV3FrY7QXp2m6KJezaRL6Qo1hRZey8tRpWKTp4ruYwvrP37wtUsE8sL4Nsgt",
  "key8": "2GhzyJmyAZ2jpX8VctLt9GpRkZpSDg3e53AgBFR1pbJ9AZ8kcAjqMb7VD5PywfVq3t3sDFDNPuobSNKb3cgSCJXX",
  "key9": "2PYdTFTBRSxHJ7ZgEmb9KZpS1kAtBo5i6fiVw7iusrmEvRhYT5fmnhniVY9zHkwMzaHq9n54r9nHPqQNvwSf6tLv",
  "key10": "3reukXFBLAs56fvBxGoBQ17GeU2HnwejBhhV7EUkNwBvns4XLSpM3WXqP5suMrqEwa5BUcBGg5yAykQ5qTn2dZtw",
  "key11": "2eaX7K5CH5Z9SsjsVuUiNQLbLs6Jr8AXiF7TNmcMTNFe5LSGAgrinX7v64HqCfdvY7DRVLNwQzNS7pqGZtN4E5Sg",
  "key12": "4fYk7Zjmr29hsdas8a2jeBFWHYK6MjikLLquo2oT1A6rgoNXPiX8VbHLpk3cQMJcPxdKbZFveFTB2PWFyQ8rFyPc",
  "key13": "6Y9rX2XrTbDwJHcfqGLb991WEjCLxKordkNA2whM1wQ3QoWFkUAMWT8a219YJXhkL7xrZFtrsow74zcQJ6j6KZ4",
  "key14": "4gvgLgHCpCecnhy5cVYiEGUh7tRdaRFr2hk6o2oBeRZr61zpMT69ZLBwW9vyB1pH4Vy4di4KQGbAN6zeXJWwSvGZ",
  "key15": "2o9Qdvtiswga6u9uxS7mMAdzahd3sr3M7uV1g2j4ttmkFjFbEEKtBhXdmqemWFhTZS49irh5LWvf1nV7q1TRZqfP",
  "key16": "5a3LtwPRxmq3rSJCE8RvUYJJu7emGWBayrTC5eWVQrHU7T2phHmb8rTqs274FZv6782wAgd8Rzp6TDDXpk8rKmDr",
  "key17": "5GF1mCxe6dZtyfywEFBeSLJ7oC5aX5gfHximRY39a2ZK8ijvydRkgLaSfCJ2mA5qJfnq64X7MK386Fxhz3y1CfFj",
  "key18": "5CTZbG4LDgdBVBmpYrXyJyRY7akUaamLNdXfPh8uVwvKvBpnGeoy1ktT4pXPoQKQVhXG9Uqgs784MtETJyiQBXky",
  "key19": "36zjfsGUyQUNoQgTupbvh1N9eZ2vKtoFCeYtYFTn1fqEboGF6RpUbPasJGU7zqhfNBVnUvfL2UpmxdFdv2kAzTeu",
  "key20": "gBdY4MmfUMup7axcVs5sR6WUXwKLvAjoPvRCAJoUquLFanfutr31McxkAJv5HS7LeHH4xS5NTGPNmFuzgYi4YEy",
  "key21": "2RoS8T8LAPhDFCwLP7ZiD1F68gDa2sGtrESsnTkrAtqiZnqWCNE1kCaEAnRYa9AVfQXxMnvjjEGgBbSJvXh7wEZB",
  "key22": "498ef3GfPiYh4geTVWa48rJEsaYTZxnZRmuNG4iArU39kbaUJcVg8vfHSSyYjgbVtfBbxPVKfKSS9mG6Ns8wgJfb",
  "key23": "4foyqRNC9qHDbYesxkoe6gfZtoxqWVeDfdF5VJqNSF2Dw4dqndob4uxiwNyqJkH1DnZvuP8MuMBUSrhn3RsD4u3A",
  "key24": "3NKnoberF45tvoGoJJkzokEq9it4Z8ShQkDmcwh8gHsJMRiXsdX2bxRAdn7mFsdiUNmVo46DHhbc8D8eRRrnuTtu",
  "key25": "4aFYvKX5DTt9jp4HxRQnBg2rxj78kMNKhWTwE4b5ZSu1yhMxjtaP3tTTZuyLQepttHRMDNTGciHeJLzveQdBnDCX",
  "key26": "4xXNHiSufPFg58j2BWvaKWn32Q3s4F2gB4RkHkH7rKBAZp7KPTmpVQSnrQRdAeUASo1YK7DSZoBbEXYpQJ9A2jFo",
  "key27": "5ufcuPtX6Gz11ycPRY26adxHo5GveEbEzX8EUeSRoYL2WZjFPAAHYus4Hvwrq7e97oTunx5s9CNnjyFePfcPSaS2",
  "key28": "4BkCazVuBnBc5As48Wv39JEY3m9wzUu3ayN3RD2DHntEqvHTMsW39pLDbmdA3f1gZ3Hj8MTRbMD4jtqCYNPM91Gf",
  "key29": "CTnTEhzGmgERXacQdGj7kadJupPkRc5VEJFTc9Ts7MZUyuXWq8N5ncGp68qaUy5agCBoBKHr5Q37QaQRFieF9TR",
  "key30": "4bg2bCFWJWTB8tU3jE3CyJoB5yYLLxATTF4Ci6zaaq1HBM9LAmaJDdZSLbqnqn1TAdaHgwVbYNDx8hfP9jT1g3uC",
  "key31": "2DUb3vsmmGPPw15m9iTLiPMBC8pGiHmkJWmp9earrxVErStS1f1JsE67dpNgCnVwtMgUKzKcgoKcksyp1XAAdMcd",
  "key32": "4LivGpoA1Xx6WpKwiuZc1xtyE2iybNuTJPWeS8wDQr4XfSLg7CQFmcT1ddV8XzgZjY38ieA3rKq4E586DJx11yUS",
  "key33": "3B4Tj43ty4tNcEzizKSN8i8HZ3xoqaFDPz8ZBNmJeXRcNEgThntpW75NWspzj6WHKCTEdGxyJL5YEAHSLjr38hLR",
  "key34": "JN9WiY4KYYcQw3zAHNais5GoP6cwbA1ss3byg2n2bWdrx7HR7TkWDfgExoHbs5VuaG7uEk7itgCJDYM744PtSfB",
  "key35": "4iCgwFJgPDvuPMQZpVsdEyVjfHdNeYbKTrSsXK87v1FYymfvYDyc6Wss1Uy2Lfq5WSbHr8AqLe9VQHEkkLqkoqFT",
  "key36": "53vGRJ56MY3e74mWbQXvwipTc7LHgpoEbmuJu2hZdixdXZ4k7pAcESg5sfZ4yjo77K8dm7KQe6JgHCJbw8T7FyfW",
  "key37": "48aqbS14ueMbKw3NeyJ9nXHoCrudWNqbHTgi4myDRmCjdeH8JMFRcbbx7sRfCjHCA3zKbK1kp5p1ti4qptKHcmAg",
  "key38": "4452RGFeGsbu4LqCwNLQViuV9NsknCuhzUbdRjk5LzucEHfWa1nXckXm47o8sDHBVe8kSBUEr9tRobob1nqKmSmk",
  "key39": "pxHq7UV4uKVLp4CCYskdRJwm4VAPQhpYRxtUAU1itZnYRuKRcRQUzQdQnycTuGzQ9zLgMTK5EzFoAvREt5ejsj8",
  "key40": "49sW2G9nfeofJUyzXuYy7vztenZc9oxJPshgiaUtU63K77ipQCSrvWnHr9LGu4U1AfhAoxamwS7qRRxeMKXDq4ZV",
  "key41": "3TfEwJ5izKWKq7LbiTtzPdDAbTA8bqk7YJhdgmfz72uwXreXZ9ZDy4MzfxXuMENgAPkF1BpBGYsfdmyBVdaPYdpH",
  "key42": "2aDDnEFDSE6XxRtymhfEp2aQnBCgerENPG5nKaW7SDwhhxinuev3mwJmhhNfA3PgpfZVeARcuoTYszUqdttg8CF",
  "key43": "5KFBoi6uCX1a496NuaGY9CGt5tKQAjVfaq2ucF8kqBwyULs4G4g21Bx3cBK2oNdzDhRLQDADM3rea2G4VhwPPUrv",
  "key44": "TTQwAub1K7cmwQmdbD8ioPQ2igW62arVpbLN5QCyzkYuyj2GPbs6c259zePc37jAo2qAf6XhpVNkj9NsnpuYwAc",
  "key45": "2XKKAGhUvajaAXSDu4Z8PF1FPrYUr8UkC93i9QXxrUSNoYZWocdkCkFx39nUGxbmmwSuUfQJZytkUfQLs8qGMVXs",
  "key46": "5M9YQzusj6JDCXeA2fGrjdBXUtjXxadQAu6NPpo9o6QHoDtVL41gBjDXxgY4tycwifGEy8RbowDT9Fn6ZSDeGji1",
  "key47": "3zbq5HCoGH65LQu998tFdFo9qzMMnkkQgdyu9GU2PVsLRz8yQBCMAkhMtE2n3EFxhP8y836EGTXayFrwN52xcnbc",
  "key48": "5Mc9PvAh9o64Xdarvw335VgrtER91aoRpxZ1Ga9DajEDHMx5EwLGtsX9hQ8y1BhpvqTorqcfkaAtkeWR4UheQkyv"
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
