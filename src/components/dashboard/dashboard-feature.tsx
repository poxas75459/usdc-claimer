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
    "bgnFc2xA7Xd7VZYT7LUQ1dhMqm4YhBPRhDwTRpRt15zFudn5jeJP8tGbGoeg7bmiYSGrMPkZg4B7G5cgnqwZsBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNkamfCPCeGhGaTLpsRabxs71RL9R6LKaHe8Y6JjE6ALkMwzNBbtQW9AD4y4mJtWcXm74sSUXV4SKdfVqU9NrzF",
  "key1": "3jVXYtVZXRdUHa6xTQ6BNTDahBJ8jLNxnrReHTCWfR4T9AvLKkLmn2dSncZCSmqA1b4Ptq2L71ZiHV9CmNZ9XRsk",
  "key2": "4rDVUNj8MppMHvoueXQ8bH7WRAocajEpoNTMyA8YCbd92BsTZuJp5WNAmsyaTbASQUiXrtx4r9QaAhimukR4zQ7C",
  "key3": "3AHBCQdnZG2JS1HDC6962xBWz1CEyVb4YmfC4nZL24vSHNGbAUvGPUeCAAYDmFJnYAhGSDV6pmBc2NGtW6B2gVn6",
  "key4": "eYBy8vamW9f4ttLociZfDzxpMWHZonGtRuHWa2NJjRyDSRRLYxPhqf3i7dsZwuqEr6R1sr1yJREUaSdG5HvRN3p",
  "key5": "3xKL7neXSni8tV1fdqvTFhZnU4y5i5EKgq96wyJC4bApsVwMi7d7P99jLRMstnUWNiHpPVMsnDexnu4pqMkoBUzj",
  "key6": "56k6PCiYyrrA4M772uusfT94buL2JL8SRyD6y97DAp34ruwVt9pkM2jk47BAbbnnEAnctRtKhC9LXyj9ncuy7nVq",
  "key7": "3Zn1To5eaWXQz644PprwqtoCJpgQ8hZnnS6dg6Zx1Rz6xVCdYP9Da3hK5rHS5czgZrSyqHTa3nzyL2qizTCbj6G",
  "key8": "44hPcbHGtjsLJ41V7QNKqpGHb13QTjh4h8iWau71AP3HYT8shcciKDNr4MnoKSdiFBgFERPd8wY37HDg3qj2gUwQ",
  "key9": "rX9m9Epvq73JXxXY1THu7KLriEPiF5rYgstRrtjpVdVvLNMRHAuKwyoqvUHdKWAsuW9XTJrGYMw8smzWTxwp1p5",
  "key10": "3H5RQcDZKQ25kY6TzPUPoV91whxcjbniS9guhLnVHAFm7FUYQwY9YxGqp7tem1jkbeE8JN5iyfEVyt6MzFEsiYmX",
  "key11": "5ZHnwvv9zH8Ru4RjGtKL1jsnGnbE9qrzzMSwMKHuj36QxqqS8356nbfpmC3LrGPwmuKqH1T4KDSamyHoboo78BF3",
  "key12": "36izf4W9dk4ftmNanTWp89yGVRGcEWY3RkmjpRFnthgV3dyxs3HqD1sKDpuZnqXp2sYu6FShmgXzmE4RTQQU6goG",
  "key13": "5unkKRQ2hwmCcqNB5fEG6mZyBqksxZEyiyD5evWfKbRMSM5nytMinay7ALAGVdKt5WhvQi3TgxxSgFQi3ZhqwJCZ",
  "key14": "efF8RKonYvsZ3yDuu3fhfoQ6ZzGGnGo1kKS7Qa7NPy2cnV12oW5yuvMqCFYwmbvgW9RU1PMYTSPnhkkVSs6r1wF",
  "key15": "uWj5gWt88dirPVJyMr8E5pzfnvupWWqa3DrPtAD637RXahqN4hCrgae8JNfMAN5dBn8HrqChQHGnutr67MwMnjT",
  "key16": "4Y3CgV4C7W4kRkNm8mcZ2jC9Lg4tWNyZc2HZiyeph7BV7fJEFfy6nwUL2YimewjZSRyBzHhjb1jnw1xxMaxxoqLK",
  "key17": "2BakqebDihGAL3eEFevAUWfL8NiZo5bBbPpEzJ6A5c5sQEPCis29ZawXXRqBqqM2zkuj77zUuDxxoqqyfBrVLb5c",
  "key18": "2mcXXkhYoY4uvp2uG5grvfbRkmjhZtghurgLaBLEyGez1KSWUFiWiVEku9Ey9N7N16agtJTKucwfynu1k4d6WAfH",
  "key19": "5chRrXRYxMBcg6tm2SUEdKcy7mbVxN9UHd9G4mu36oQW38KFFfbMiB7nm2E91ntNFDbrqWR7S3MB8BMDCbajByLE",
  "key20": "2dkPDsrrDfd1Y1f9N9fDibwBi6PtBaWUFD6GBUAxAveMeb1z7jeWPuukEt8nhQy5dRnTcZDpbzUyeKyFhzan6ahV",
  "key21": "iqokCK5FTvBPxTQ3DREAkfJDKp96TpKzjmX6qonqSEvXvz1wDRFb4ngRg32prqtitmsW1XBpAyiumnuiU8HZ4t5",
  "key22": "CbzKDsQ5T1UooQUfVrbc63sTyP3r7pZLceRi2DTf37EFh6DxqWQFazjnLjxwgCvPSpBLnVUbZWi2KbN9Ceo5Qh6",
  "key23": "AZ2GvnFTAuJ7vHWoo874GPcebirPWwFzypHQNLMQXPocqY8oD2AfS83yGraU6mUzGtD2DJQ5piZB15AJtoKxa3x",
  "key24": "675Q78jd2ZGtjbE93z8PFqA9ndAzfRgroxgwQt9m2PSgr6HtxEf8MsoNwjmJWfB3xizkHhN95tN9PEQ1S47S2Y99",
  "key25": "2yZa2Rn4fpFWXPTFqxHkxugctJLcvR1vW4dg1bnM5p5gMoHFHwfmxPkJogpMzeRaZMEZsGi3zcgNG8aGfjqspBW5",
  "key26": "51LRBuR85dcXFAzZjFQyQ5TjMqarpyauQAU8ASn7vhr72oFfUcGyeZgjqpBhbdYWz3BxBrPjZvEWpe4DXhEaGdVQ",
  "key27": "24XAYX9UeN43SZdtVnrxQ8Xzj7Hkvws3pMqWwvquT5vLWMVSnjXLzjBmQC81khKGUfMqps9pPM7sYKfsJ3BTLsJ2",
  "key28": "4792CTtqrRcZwgcM7pkmny13AvgU2uZx36qNsucZG3jYeEekKfFK87yZsAEFvprXn1dk5gwD9RWDpnmfSi5wnu4z",
  "key29": "C4ZEpVqER6V2ZtDSLf3i1hYJaLyg9TUwieTqes4rU58HYvLkn1fVgJTxwZa6KwMrKXYoSq9TV9ZUZqnwPyT2JPA",
  "key30": "4zScEEem78DViFZvbfCAVbt8LuKr5d8d9mu13gbcD7a6DxmgkPNZPjsfE9mGXY7TvNRZnWfGpawyjH8JTBVyuPa9",
  "key31": "3ygZxTrs8jFvqPqHxixPwpiiRoT48aUgciruqa6hqqhAjz421XyrxrWFQ5vcKUqaKmfuZ5Ps2pDMnTUF9aJUTh12",
  "key32": "36UXWxfx2nCBgE9UA9xkduuJX7u1uLRkDZLQVzmW54mLjJ7dNq5CMmkKQ8tyLBZ5mMpDaJCCmg225nst7RTip9tm",
  "key33": "2Wop7J1jKajYAkBCMkjKxyoKUNkDjKGncr8XgNik7EpVq6w2FMbZ4aHxLPkfWuEDZatwTvpuEJW7Ag9YL4U4ATJT",
  "key34": "4CEzLzn75eERWZTDN6d2qYWNT5HTfVJihhNwsbBJyYLwYHEAY1wdThJHoii1myiWfEU4fPcjnaffaDHP2dSZXHXi",
  "key35": "39NqSWTyT58xHBDeXYXxNipbM8bmMLPWz4PJFmLJ9VxdWadr3garMzn91GicyZ1n1oNiJn1oAWJxnEpztpJQbbSX",
  "key36": "4vcCi9AeRnNudkZWTgC4GKvsu2Lc6FbNXE23vV6jtrrSC6Uhw4CqWrBHY8k9yVX55nRnpsN5NMdXvjAiSccA6ZDW",
  "key37": "2DSvcfaMqi95UVGYLZsFueiT35L3omER9yvsTdi8pPk8onHw7HAkmunbu6vGC5TRQU7nh343d23kWJpXfnBasaub",
  "key38": "3U9rADsBgmhB3vF8AYZ58YMdcngEdaTRW5iqzLGLuaHoe5LBHEihBPNi15Q3Y1bm4HjBw4eCbB8SbyTJfz4rMzFH",
  "key39": "SU2rCZXaRcPJTL62HDipP4YjcdUDnt5HUUdSZAiV6mhixpVopQAyxiqLviAJPSZJFCzHmUQnTxerUR7mcRaANm8",
  "key40": "6ACyXkirPwU5HqxpKsBom5Mo76oedSfs66TDziisjzrgWdURRnXtDB4szHiW83H4CHrJoU5fzZgPzGu2DXh4J7P",
  "key41": "3KgjFkP1B6tB7CxxowXNNWttkGVjhoUXfUcsZ3VJiw5rkbtgb5TYu2veeLb38BfomxfGrE5y7TX2ugsUaEwFk6BS",
  "key42": "29Wj62pRE79iGKZHDrSRW2gkZ2SDduDzk6vP9WYiL92nRXLF63sqMzLuQxc2RxnHd3S1kAJG6ixegQH8AvysdcaL"
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
