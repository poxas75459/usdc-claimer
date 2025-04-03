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
    "2d63LWPNhMGX1w7W28TaDuLxUhCtgb9Y1PAFuXDdThGjNHVE2BVjXcK4mrtEnJeuFX2W15eNGgx9GJKFfaDkh1dU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFRucngfY5ht4L3A5CHbMtWZ3zhxbw9uenSZqjuS3rXXsu84xvPRr7y3rP4R5MTavxgZXZThydsMDGPNuEFDfup",
  "key1": "5LNU6jV1UderWRCt2mCEPXjQbLgZYjsvJaSL77XkWQVRdfzFX4xAsbHxnknG36hc1oCRfTVJZ7op3wcX5MfdjoU",
  "key2": "5nwQf9fr12LGqH7v6vDS6ynSCKr87rzSpp5CTeipdqbdoSvZgvThw6Pbre6ghjSokw7UG7PUXi34fBsoopg3SpaR",
  "key3": "2bjoWFNRTBZsuz9CSzx7b9G7zPTupyVdovvW1E8pN4yTsWZVj4BBaNp6iZn5PxdgbQhP2Phruuwof8jgNYJtSjBo",
  "key4": "3g2cvniMgzfMUaPvcd7Zo4oemX5h9ngppubHFj1wMUBWnDfogTomwcbwBsguMD3Lh318gRzJTrQm9VNcnHjUEwi2",
  "key5": "3pwnAX2cA6UUWZgSfd6FCJQp8k1ANe2MfouS8WNBi67YsbY4GcitDsZNA372NzVqKJgNP3jQ6udyMN8RLtCsjhHt",
  "key6": "4YP6nkoQzwEtqTQsYrMGp6f7xVZd2sGqC74CW3mCCPdmLXc49tobZSKdopsThLKj44yMkc5g4Nz76zzWByJ93u2e",
  "key7": "2cDzQZAQbfao4CUwnVgLHuHYsa2jWpmuEuANkf9Kn929zQSgbQt8dteB1pnPjBZfJF5KywGt5VxjmqQnoSeQ4cNy",
  "key8": "4JzgySsAdBY3oKHd8QqHASepQiMEtgJpvX6DNw7B1rMbNTMWStG1vT2nVaoVuxTJZu7c2rCgRuGV2BhaTKtT1wym",
  "key9": "4XAhdMwfuEKTw9P5tGH5NoBuiJGyeYxNW5eNM3ZD6sY75vSEUuE8i94uWm1KR4YipMDsKAQZeG7mBDjRDSha85N5",
  "key10": "3DCFJupC2TogKnkPVDaQKZjFE8cQcdiQbhxxaUPF8iFGDvrESVzeys7oKfdKwCLNgmFTPJxnAByq9BbKy8RRkGba",
  "key11": "5GnDkWPWyuivbPZpc8eHyqdxQ35Nsy7RPrcExistVbg2aoSyEWnNyGDepVaNBvoRvagXTz8rgjzVw5RcnwqhBx4y",
  "key12": "5hqYoiB2MoziSNMQdQvCcebwsrLfFxye2vE3nnhE9Bn4AZwn3HGN14XRUFHFGQuHAYx9nHHF1b9k91MK3BLqosEU",
  "key13": "2Ao5rfSpSP6GSnK7AxRLsLhiYzSNqnFHdgWR28FpeEppaBJRHSCycZr5Km1UBVDcCvxV3HuxL4fLD78XQzW6RfiL",
  "key14": "3X9xRWJsTX2HxJcQxutUHxF5PTzhrkt1egv63RjAN4V1WWV1CiRjoGpzwc9e9zCcmeeVWmQo9co1mXwBHi1dLetw",
  "key15": "2BaQfVkhTUqucDEQ5wnQjgaSN9xc3pyoqsXHuYWpXdpBBia9ry4YPRncdCTVZc5SVxoK2cbMHmim6fTyC66c4vf9",
  "key16": "5UbaVzSKjWTR7CnMjtCPDwCEu7yMdeTjvVh9BmqXb483RCWUfExK7hQPWUB93qXk2KmmLWB2fJASbDrcRtuYRS2u",
  "key17": "2y9bE4AdS1A6TqEt1g7d27HUUEGohB5jCK3kUVPM57cP1b84uksZbBg3hh9YsGKYUXyFeVgKCNwGVmTEZcDvuiCb",
  "key18": "5TFNrKQ7FD6Po6fjng8Sioto3zoA7pBo9r7rsmwbA47xW6GgMwjRUSUgdETCb2XseV7D33wrPCw7viNDAhVCA4yD",
  "key19": "4WGkvayfMSVZ4F7M78y21qoF5Z6pgKAsDh4CnrLsS3ghhhRDXaQKdKmM9BxANMw1iHy9kCN74UoX932Rveids3wy",
  "key20": "4urieZxHwA7aDzx2SfGkrs8CoXXArHABiQU8aT1gUmttbxzmDgDFgK2Pj23ih5FAWzw9zMCzGrVmAZoKHiwQTAKX",
  "key21": "2zVkwrfzCMn4iq5X6Ei5VVufDEonunyeWz4UwJKPzfu4dg5bi77AaUfFvkVLxCU81mfjtwnJXVXbvBkdpSXDeUB3",
  "key22": "3xBA8CPwD4dtqX24b633iAQRm9Es8yxUiZaFMZk3gAt3mJH1Faf6HdE59RHRugnTZCBh5jUCTgpP8qoKF3xjduqP",
  "key23": "2TptYwPHZyX2h1GdiWvVyMj8QcfLs5564SHzfTnzArJ3benFLnXm8tpkZPAuszyFDzrAdTgH9YhPSaWgxY8NHxfy",
  "key24": "4sXw8DNcW6kDW7c1NRYUaYrzySiuqZX24ZMabkaPUmqZx9quv8aCDhrADdLwukGDM81Pkz5t1KFDPSUWcHvPH9Ge",
  "key25": "4wzHmj34ZTrt4Mu1wJRSoEkX9kLxPrQPmmSvvAdv3ooeX2XyBoCyCTSGb8mjzH9o93zYjca516KTc3pEmGU1u4Wh",
  "key26": "f1HNcNR99NLz87EH6RSYtzYrbg6JkkDUMMKq7ZmkjK1srJEvksNbmY9EG713P5J8HWacH428xyJhLoXxiAAg4Jz",
  "key27": "4U2LmCaaPPCE81BzdMXrWxowfGWGTwQd31EmynfjLCQpL4FXumSMP8RhvS97kA3jpCUizwHRbEzedU3PTAFGnzUC",
  "key28": "MGppkHvajftQ8gW38Bg8uberBHuezhzq5H58oWmJgFpg3CcFEtcgWMvBE9ALec7geBEogDWNgvqH8QgBZUeKWyf",
  "key29": "meKqTao8ciVmW1oembN3JwdGkpdnKSrTUfTfjDnYDDgDn2Kh2goLHvJoz1VSR3HD7RQtrRMLxTFa4XNuTppAASS",
  "key30": "3vsV3LFWhsWWZw3KdbjkLr7q3sMVx6W6jvWjXf8y99XsB8DoUYJ9dhPEHeEtKAuUhcFtY1AcH9rjrqU4QvjVRqFb",
  "key31": "4V2fNhY4RKTtx9RstD73owN9ayUaj3SedbNCKcUvomR86NbF7HAEmT35SE6XB6GKWPwztNRtThUZZShVkqJLPtMj",
  "key32": "5k4XpuxFAppvcYKTRub6t7NBYfV7uMbZ87bmK2Z93m9BdTJZj4dEP7RsUYw6erdpedTXQ6MPFhHhHhjSNE5ZUNZP",
  "key33": "619tCwNQA1Y2QrehxVTdNdWXtxWwm8TjvEfPfquEushNfAsamjxq891W8cTacqU9FcK6nLQVxhCs63Tpbqyj448g",
  "key34": "67BYFKVybxXtYftajr7t5wzVyiHHym1w44Nkf2pyDAYpu8tMn27qdcDKJBKiaXog3xxUHSaoKd9tykQgvyMhzDT2",
  "key35": "5JgtiAWqXLZ1m1NMS62NGMN5Jk4UL7BWVdKUSrYK3RMQSb9KkehJfeutAkhzuQYfTuKCK2wiReZCKv28p35SnAGL",
  "key36": "1tferf6n94BXNjTv7oWHndAr8dvw73XkiSKQFnqPx33cg97QV1Tsqzgb81HzVRC8Y9DCXpGLnrnyZrzCatXE3zh"
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
