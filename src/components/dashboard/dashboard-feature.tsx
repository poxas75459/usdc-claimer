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
    "WfGisTL5fji2F8LqHEr7yX6DeEWLtWUPx4zJg6AV5yMmuyWXTTSWcBwCH5FST8rfy1NUDQQ3Lrr4Feg8jWtpcoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyWmofx9AvBnNPDb4Uu1tYKWgDuRGfVNBThU8pp4dLCskkfMSTxpvPA7hEKnnd2zByNQogrtmgZnQk5spkxhkKc",
  "key1": "34yr1jouYzYAtHZyEQ9h1JeqUBw8uDa6YRnNDbS3hy4MRRQBzfxehqDrZhxCGvL1BGuF9qSMaBgAUVCqdsjdHsjx",
  "key2": "2xrveLMEH71DHzCbmTjPvPi1wSfjPqPAfBPCvZnir4UBwdkoia8smKLYrBb4wJsNG9hZK8nM6jLZUZFxwcYV6MzW",
  "key3": "Fj5wP57zbWuWmC6ucD1CgFWALTquEnNe6fazwfWe4dSDLS3qMqnh4oya65wLW9tUDKnGuKsu5nmqJ2VXpBiFLRj",
  "key4": "676f7schE8P1pdTsG7h4MbepkGLq52dhPhMzFA8cnjk84n9grkzPKfhZ2Yo4ZaHWJxmm2Z2e1KkE2mPm2Vhg7aZ2",
  "key5": "5jh7411dFUy9eTzgn6AERVLnF2DA82BLQ1PG3KuvVz7ryNq8fw5NzudjkXHuPvi3c6iJj7FX67unX8XzHp2FvVCL",
  "key6": "644XdYfWxsQJeSWdACAjKYM9Yg9aqBy4xWJy2m1Fk8kzHeuEASULFzGV9PDcnuPh6siFjaYak1m8u8ZydGJyAuJp",
  "key7": "5dyRmD4Z4EKny5y8MV2D194wVeD4Ds29NQxqFQq7VkHBRgH5yWSLR2aFnjr8b8Zf4mPU49LHHZwtHEnUx9CtBBzW",
  "key8": "35Yy98WsWPB4MkFqjcdgURWpSKbovkpkrHrzFCtArFUkV9FTvt5YwpA97QNjCuxaqfuub6mtzgqoZv8L8VAHBg6q",
  "key9": "3dDfocibhGGbTdfT8znM5iT2QD5XefPu3rzM9Jkd13eP5dGGXFB5YSJ8Xm6jTCAPN6meV9q9pxCUaMwpuBe2jyy1",
  "key10": "61vxmwBmyMwmE4Qrw86rEpKo3PbBLbTdApqyCSEbN26dSya2L8DYX5ff4kRjwVV5DVN7tUvHvwJbX6YV7sCKWBwp",
  "key11": "4Uo8ymZtjJ625M5cpHEWoKB7Nf4h7dSggj9BiwDZG3Hg2UgX374nJJ72hfE8ZuLYU4nFRwRiksZjCLE7FuDZkTHN",
  "key12": "4ey6Y5gCXKWC6fu1HEhdaUossZHhUfobKoEUBePX3QqZC8fr9XYFB5N9KPpVh6q7wfe7iAw11Hf1bFJ7org3kWyD",
  "key13": "2yLf18hcW6u6LMEHUkJRBf6ebfWGZQAik2G5Nqd2kFTsbQHUGXefAwHrNeEqnzqUjUibxgHjbLFQTgc3KTCgDMne",
  "key14": "3mEum89eaXbLUwS6nWsYPtAhun5UHgv15BPbsrJjyYQ7CCyJfoWK8vxDBne7KEm3XSWyZ5qQT9cpLJ236NeWAADD",
  "key15": "PRbnNBLoMJT48dFg5A3iwekYP9cxbzQBBYWEVUjRaP3SoqCXgPLU1JH9XfH1Pg4H2A3CqQFWvE2TnrwANJ4nAiU",
  "key16": "4TEiEBxekv4Gmi97Wjty6Q9P6bMNcYjg9dNTBG5iSpmhHKUJK4RQd2svb9ShyyX6w6CHHNo7TKtcF7ri9viTrXAT",
  "key17": "jNfLFQmxiH1veoMRnvKi4pa1t48K8u4aCeV5kRbcuU8ETgRc4ycUZ7TZKneqPP4t3hBPzXG23o5HbECF5PTJhuW",
  "key18": "3sBESePkGzfhivUnXLkf28xw2REntvYErAxvMbqzinYNkkPA3fFqcASkE7GWY9d7aaQkpzXYKgwGPDsY75Ao9muF",
  "key19": "CG2Sjbi1mmwB4JPpynho1YCbCXux8V3ukwYWEx8EBjti4Pe6qdVHbWHqTufYpkmx7UVT7AXFXzQig6Tq9szGtn4",
  "key20": "2SA8MnDxa3FPAGDZWcfshRj8Npgmf9bzPEBmxk1HS3Dksog2a8wU3CHksMm2xcLo9VxaE5esKyMwLmGFmfNLC5oz",
  "key21": "4E3Z6hArGqNLE42XNXgjz46BDX3YnuWKj5QuUwbBCgn7jsJbM6sthnSZNFrm7CFBHhutw3kqjqD6hmdJi44bK259",
  "key22": "3GJkkoussNNVsf9qrydeV7TkhSuVUGNSyWmSzSJNrExmcZygyHNZfWTVsBw8KtLGoYscLkAFyjmoSdefZbmxtkzD",
  "key23": "4KwsUKXn94WoKvvtipWzYcjySu6qzBPV73F6dGpXUAHSKrp7z6A1wYVdrcjeFwddYaDoFunisrpVSYid2JUdNFg3",
  "key24": "23FMVqATxTYVnjG12r8SB5HPSBbTYcR9mN4ZmF27WbFu2MpkR5UUauCkemL8fVzjcE2dHKKkDEtbb7V8ZNnz1gVD",
  "key25": "2RYqBkPGUs3LMcFkfvNiQLsigj5XhqyKu9Jun3J1YpLTLECPAd7DRaSUCkMHPDysBRM7SCRyC5Ke6Z9dD6JL3Zje",
  "key26": "Q6ggXAE2XzqejWcihpKkAANodfUE19TThTzSP4HTUtoPrh6vzuqRRUtsEVgUs49BXfFdZkbtGU619k3dz21XEtZ",
  "key27": "Q9c85H3zSF3cxx9475pMPs47SJe8tc6mcAG6atj7QeYfhhCw8LPg6VW3DGY9oZ95csf7txDgekx2F4jXA6CNfrg",
  "key28": "ZvsMxQMF4aCwBqpwNTJyGvsayNzMkE3nP7SCwa93KecJL9jeYF7dvpeqJymASaRmJB6331U7M5neN3ytdB1Fv8i",
  "key29": "5UBXS7dEgz347fSQ1jcvZQ68xYWEKMyEbcXgUUKQ1BUEijBpadvSkcKe9SHBP2Tp79uV61daFSMFSfyWLoMEkABR",
  "key30": "4y6u7VUTmLWQQY47CtqBzGTB4cqgHG2CE3bQXn9uYciRUVZjcCs6D37ZTFHAjzGYL3ScCSzLXMCwzgQvdxQ9gzCh",
  "key31": "2ZTCVXtVUNbPaTFECDPxuzodFL1p1aYwbpMxSg2DCFziuVHm37VSs8xVFHJFWokunaboHPwYWyiKn1YwpJe367oU",
  "key32": "2EogYQpXr6TajPgA6s6MvNFzME6EFkDyDfn41xKxunBdn54FqGerrMthoqaSXBv1NBHMs3hbzynNVPhDHRwB7M5w",
  "key33": "2rCke13o15MSVPW51DD9SEwXZSEtZsYsdH8UFkXXsbu3ABzHPcnAHDjhVsi2DVN2nX9Wjbr4rqs5aHr7xrkZeNnP",
  "key34": "3Fm8YaroEKgikqBTZ2dS3tPNNP2MioC3UbXp7B14Ua8EnqacHZ6gjD1c6KESuniBHopxg8DNQ6urZTAKC1GdgoM8",
  "key35": "4551Pk8zfL3M8AiskdcDfbjzaLYo9xEMQwZgBH7scAayMQeHh6rKZXbe1y1CcLyREaLjYBbapmq9Hmhu2opt7Apr",
  "key36": "4goieUiMebL6uNxKVEqtXpoJu5LZ9rQh2r6GaAUNUghzBoGtuFjek435praKELVQv6fjfYsQe2T9UY6F98uVeg5z",
  "key37": "3YwPkpxkGxgTv8vvFTz5wUKPy4ghA3R5ts4B5542dYur4F8BFbkuJHyWUvcx72jUuGDKxYuzVwEajdTEKdYgAsD",
  "key38": "3Ay7KSYGoJ6ZKev1ZptRfv5Vv1dbdHzTt7rjYiRJq8wPtw9v9mM2NgaXgATt79CyBsYhpZLYR7PutEptnydqSAv6",
  "key39": "RWwWZFo99k5bThAdnmft2U8Dts8YpJZb3Z3i2EQhLvWQHEWSfgjEp5xxC5giKynXNodzeb1X8ZZQbaokfvRXbp2",
  "key40": "5vorGUPWG5p9FUi3Ygnc44FtWqq2oRE6K2K5ndjFusHGoMCkDzfbPLUacRrPemx4tZTL7Aa5PKnHM1EPQqPT1joC",
  "key41": "2bPPQ2yyibSBmf18aC6pBkF5PrJb52s61Q5qm9yyxVfYFGpyGXu5mQd1nKxzZoeFkh8LjSqqXUEEoK6j7DsoccAd",
  "key42": "3C2X2du2CHL28CMyKYfjuBjtoB9mD1hjqJHxJREBMVye6JRHcGc2CJN3hiFUftaxpxj4WNHQV8TPTWodFhAdb4QU",
  "key43": "4PPdcsfY5zbPnNb1XiLxJc7nEVWLDaUHxdXvMQUgYCWyVgF8C2fULuMcyhBcTqXR5fkNv7uC9AXSNQU7r79jbS1A"
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
