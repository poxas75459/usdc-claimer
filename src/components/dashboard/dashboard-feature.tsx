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
    "2ii6iYLTeRtU2id4Ug7FQkmFQimTdhUdC5f4TbUnUeZXeAH9fEMLMvwKhRwjKyBcwpCBVasKVJBFVQustPCwUEYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32sm3uXZNXrPiBh392Z9rXqEH797aiK9QyYJ7hWdECTfnZCu3UaZTCDe1rLUDoeW7hnRfnFvrVq4F9qdNTXCFqBj",
  "key1": "4rEbVPdWcECrqyUREj2EVNxF6DGr2mMVYpjMcSxocMumEVNUmohkyMWpSMwv1PGR9nbTdaSjtiiSL31xfWEa7euZ",
  "key2": "zBtchrrL78uaypj25MVFEWZ2RCGMdWATUo6i45QGVTTNCDMTpgcyyoNVYhkXGEmAoWFNfbLZR6dqG9kyNdfiNnV",
  "key3": "5jy2D4CxgWXQebyejYnn8Sqood3H1gPq9W1x6tGJA35apuxXKR7KgBN62YViRpVPDcc7nCq1SdyxTBtR4jfQHzwt",
  "key4": "3iEd7pah4DxVPV8761HJFJyD4NhTit9TsUYZ3buX5NG4s5dzRRPFwCdivhWcjqQd9r6uDTDBH2PSs4swfavbFc6r",
  "key5": "5sonVk49EPL7UnzjLcwQmizJWaypnmJFb2UUCEBhp8iqonE2eEWKEAwUAN6mEamSFJQ9C6UFGkGjcYJKhQX9bUqh",
  "key6": "3Mzdw66W52QERGM1ykTFbgL8viS2yQZa6Fm3rSy6cQH6TNbo78b4RtURigGKNofCH6BKiagv9exYMbGfZaaK7BJX",
  "key7": "uVs81tpKhpNC2FM6iHJM63MyDHtVcVr5muC7yjKtqL6mBLgHg7tndDK4kxqvSyBDBYxNE1kkUB7scNjSa7qbLzu",
  "key8": "PFY6vU7NcvAT9FgEZm8ZcHXHnJmficQBEibueVjMaXizybVp9oBxxC5yu1Kw7cVYe44Y654JR442iMr1EX7sTxv",
  "key9": "5ZzvR6b2jVQkc1tU6Vd82s7f1v4SJui9k64woQPongXtkXRV6BypUi9qsCUQD9bDh5F4eCXD14VbL8kdPkEEdcRm",
  "key10": "44Jus2c7GP4nJrDfGnu7KZcsvDhCcr4PtfH9eG7grpx8tE7NBr1xtKYimzgubt84z7e3AAJQwTGUzUgnisHPvywA",
  "key11": "2RtpesXbtydS562to8cSkkNSJH26WRas83J1XXJYpTkn7NpjvPBbSRgFV6pGBpn1AhuMtojVNHuXskRoBi9tMw6F",
  "key12": "41FRSaUv84hhkmPoNp9KGf1KyK1mZPbFqkWiBJZRdWSgbjoMur9KwwccexgfAsEtgSZaQ52srXWCbLuBMUabuSE1",
  "key13": "iE5qCHF9pUB9oA6adL6aZ1L24x4LAxFAQZey82dPaKMgigD9tU3qbLWsm8yJfs8MH1scuCJtiL1wzwRxPjjXLPT",
  "key14": "5TrfUZpd4FBbUooYPZGqVp4fN3teWPHSu4m1af2N4j2qXaHrSAHCS9dMFN7diRUpcNBTgoGwj7sVZNjqf4JDz4Ph",
  "key15": "3yoZW47D96EHAc8HVKAY7N1aJPedgrA2HqSrTGechhoGTTqdowkV675U4VuWhApozKHdWgjDjy9NcJH7fzGMZLZE",
  "key16": "67J6U7xPNMzB2nTu3mdUxPSkNfu2i5yfTdH5c4s7hjVCgywmNqQUHYXCHp8wSsS39dbqMLmpAQubD8t6Vd3dQrL9",
  "key17": "5HZn4r1KAPmGEa8ioW1BAcj76Fku5VzaNE5MYGJcozZSFyykAazVPvwinj5RVgJSo5e1gJFkhwxBdWUBWKxWcum6",
  "key18": "3PPFXnPDSGkzg3ipseZwz6MCGwZ7KjESYMZgGAiV8C9A97oHMBCrwNzW5Hi5jjN8QnEdUxotdfHz4rdJ7FHdQESc",
  "key19": "5bLVg9bQNRNyedURAfcGN9upAoN1A5utQfgbh2BEs7WWNmMnHtZCiPRdbQwrsHrS2hmeXe7mKP86L17LjmSgHLhJ",
  "key20": "5J8JB4kNLKNehUR32L89EHph2Ej8PQifr83nekydsnmF8bTpcNGajALqWjcHwE2VudWN7Ye6x2FxAZbwmRUsDTsg",
  "key21": "436upKNAKRw3k6rGWhsWQQHdCqmmxuJqax2AceXo362AMws5J4Ebkmj6debzSxohZXGnEg6AU19QszjSYPqHKdyS",
  "key22": "35w12RYQ3wBtfwWRf7scRaZ6YgvLNhiKH2HxfZk39VxowB2SqQinCSxQwaPZZ2sr22j64dwhkbzkE4i8ffGds4sM",
  "key23": "26W46fLuxjkK4nguu6trzozx8iiQhxFEqtKLAZJoTuKA3s8fnmJTAa76JFK6FxmZ5L1Y3e48KfMKDCKGBA1xBNwz",
  "key24": "3ozdbRTesHwvmeGkgWeVC9BVG6bKrZM149gxvLQBDALkHepsXwdjpXffVX7EsQiWAfnbjxb5faSMn51JMSNDDbJN",
  "key25": "566BS48xLomxaWTCTPowMXG8PjUFHXwpbBQcLtjKrZt3RywwTuNTZXrUzpeLqNBNKD99HuYKNRceicSTZ2vRwE1F",
  "key26": "5iupHhxrHfd1n3eb9QBeFswwj7j5TRWQPa2jn4vmQaDApUNiskjkNVksHFLJd6J8c2grpbR11yCLopmH2ZvC8HJM",
  "key27": "hnHHNQRsuLqnkUvti3tLGvjvoeCy3Lg7EcAjyd6cfkFczdGtmVx8Y4NWSbD63T5Ygk1kN3JfWaCjBJmpxDeuwBd",
  "key28": "Mi8KMa3HimB1Qa46zdxUfR2ijcp5k4pQ12eFb7wmZpeg61jmc1TkotorGb4tM63haCEgBGpbcsHFytF3BKHiYS3",
  "key29": "3J88JipAAYCKkRGiQ6cV4oBgArwAmvKM1EGerJTtekbPZzoFXQjDAMqMpDZ5x83tpRzjuiN2wmdNZFd7wTj9VCAa",
  "key30": "fEHEw5BSu2hKWTJPtqcyWd2iSv7x2gacZQhmw8yRAZxwkQxqK6B4o4L96SGL7CPUYniCwQY5L1PNayf5qBPPTLm",
  "key31": "5aZzkSEFd9SnpAP8h3EMioL4USNLiXXdNLWMiv4kz21K4NwsjJqZd5QJd3T69mJnv1SUiB5uARtQLyUonzsXprH5",
  "key32": "4mQdc3H3Qqn4d5mZkYNHPt8VSsYbEbYemQvoJwKnUAEETMCpTSHQafGtFLg9TQ38YWqZBb99d9YbiqCfaoMj6BG8",
  "key33": "2DHYy73wpNyD6ncHbnzcag78RzPgXGxBi3xNubSpbV7se1fzkX8rduSizrciVJAxsijtUFJ3636A3kwLVyVR1UUG",
  "key34": "5DfUYuV6AZrR2U8CbiFg7A5ZzXd3GvgcTADT1NsBrQjw2ZFdHQyBdZ8XwpvPDaqDa3C8vabuVyLLz5SdkfZYekJN",
  "key35": "5rQkqeZQ4WsujoXMUwMWXeXp85ZTvSd5L74hc6GcVE7qikTXG8GJpqGBBUbemrhrtztaDor8Sphgj9xwrWWJqxYM",
  "key36": "3hrxH4jKmCbKLVmxrNzMfYuCQ43Q5FFbUwtFqyUCWiLQLGfjHZtNNb5FRGTvfxvXL1B4fhbo35JwcMQDTzHt3WW5",
  "key37": "22YnWDBKrBsx83r3x6wL71PUxiq4wwyVNNykdq5zHaRqHsWcwfNN7A8JkvXNcDLQfb5GBnMLknVj6P5yyY3KUtLq",
  "key38": "65YzwbuE1s8abDC6ho8mn46XuAL1J62yG3tMVKUAub9zxH8kVhE8caPPcKSoLYNaeJy6CMWUFCfAQXSTmui1Y8m1",
  "key39": "5cKerHqz3nA6QEgVmrMGCFBMsJtfcYa554swmZsgV8BeXWMHfkNsMGt2Chc956JKVo4dvmjd13RidchxifMQczhv",
  "key40": "256vweVT4DWThe4rK8oUWigTe5gRJy4zzj2wGha9ZuNg2UShNHy4GGffZfugaAPuUc8NvLCe4EVavJdPo2BeP6wa",
  "key41": "5YbaBf2AqGuS6ipbGYkySUGf3WwBghB6sX5D1hwmVSxYtn8UG99vE3HwmwBxNj2yh4RP5sXUTsdouQVw4vg19GBT",
  "key42": "4QnJLBB4ejYj9bzzLhjNEct4Mz3PZ6GPyQpeh1F1fX9EizE4JfVFD3cUgT5iYJ1T6GBDVPkhhrXp1mckUBFZyRo8",
  "key43": "WmVWw3hMdRAAAZY7tnZsrbA7Wq5ZowWPXiLLRpnnobDRAd9T3FSE5f9EZo1cacTbxXQTWGpLLuuLH4wDqPJe8SW",
  "key44": "KviugHEnoeYWAge6LLMpSMAYo3Ke4cryccL3hob3GyzJQ6y5HD9nz9XAvHuVYQA1E449UUwP8RqCxVmV2sxzKWd"
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
