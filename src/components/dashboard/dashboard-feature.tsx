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
    "3kVxkZosgPNcqXAYzRLSGvKbxHPddu3FebUid6wxEPR43KQvgLiUWdEZSKiPbL5xPABEr4co8fggzwrg91h4k3ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dFp4K4WEe84MhodnY2w8nbhbCExmRytcvW3hbKP8ATMTTmrbzidAsZmLaCdsy64GXihnGC1v9zzHrTpeMLunyZt",
  "key1": "31Ci8hikRcDqZLJfEShntiE6VyuHdDU7k1LyunNhrei39WiF3bFvyKzVVoM5dWi4uBX52n4BTUwnmMyudKyqNyzp",
  "key2": "2vr8mXXi8cABEY5NSo3ks6f4dR9bycc9z1ttxD6rqUMurp4ViUXkveTNDe8UymSWAC6KJ7VGVSmwFKkkhUHiupeX",
  "key3": "TwgXN5Wq7eyApiZoa8oV6VSYavDVaNcby8pr51mNC4MNcx2XxJfSgTt8XLWkqt1vHojrx77iB54Kv5axZXLFtwW",
  "key4": "2BttFQUbVqK9tc4ru4SCQZnDEVAn3cXxEkhJ3AngqdLSKaUs7xBNKmDyVfVRHfme3sQBshWhQXiTccCh8ZLtyGnL",
  "key5": "3BAJce4aXYdfEKVzLZsE1WZKxo6DyMu2uquq7fQqvVjTDQPPkN2A4Vb4zMoZG1uSVVEgbCYDn7naSBD3oNcWE3c6",
  "key6": "4oHWAZkVhCK2pwf67i8wR1rUM2pNx8MYJMRGT79wM5CtzKECcogzLTbUejV7he4QMKRJwvnpCdiRFYEij7M3XYNA",
  "key7": "4xnoD4KwkSQ7Cn7tXrfJQ9aVHC6TWhLjatRSyx4B9eSv7tLVUBoyT3qzygigWs9WRG1Nboa1CX15nt6nDGYPrdrt",
  "key8": "3vHpRaT52zaaCvzWywvgvUTtJTH1QJwd2Z8yz8p8a1ENGAfLdLSfKKEjt2cEfzW8Dpd2bPykKXq1kiE82knTHJu1",
  "key9": "xqscu4aRoSDYwVz3Jr9KdtuXkSqTZo3gFCs9QTEbfRrCSPFf2EMsutERdBukqzom7ZVzU1dAW1koJRBEnEhYH33",
  "key10": "3qUS8Ne3AAy8sjuWDY2Nwk1ZrXpJ1irkkGwTzccWEyTjpKMYmfRtgtYxKQN36faScd9BQATbHcUYFsori1QKXrok",
  "key11": "4sXf7bZwcXNXHZNqm86C2CWKtrxwMwMMFVo2Fm1YtWqT764SD8YxnY99DhAXbYKxAXPRLfKxN3esWneiQQQHjady",
  "key12": "2HpvD82p6XrRcwAxRCqbjRoqUjJGmsGD9YFt8U49dsUBHCLoRcyn9ByojHamLW4xqAmGJda1r31VV9wkMcz4fpAq",
  "key13": "3FYjkxM7rmeucb1FXxNMavYgdumtG6b9MFwSAifYTSejspMdorbyDF5P6cmkUSog5orWxZMmJt7vFtG8ofTw8i5w",
  "key14": "3fMeEYxSECMWRddgtdghWZTHDQ4GyAAv6ABjiW1cGFNDo5wfxP1ybHyMZDHHJz2tqbrdN79iYfxQnkf3APdSZopf",
  "key15": "5JXRMwCKt65YzEWXBCFT5wshzKTLKKMpE1xZww6VEAM4Kidhq3zTGrwcA9Cqvzo9CB6esS6DEG7bgut3VKHzUZby",
  "key16": "3WXuqGQUfeKFKMwumxRyLpFsvTnBB3ZBBwZcBYV6t13mYYSxpc1aUVCY4tTdbDCpXbKJATTHwH5gxTMGNirHEoZm",
  "key17": "3KvQxDPGZC3VM5hup88sFbXBhHNiSUrg4b7rSLAX2KgmKvTAtmXGbRgDKHVet3AjVvnNJS7JWGi1eujLfV1mgDNH",
  "key18": "2r6L1n79qYjCHLNmHKUx7Nm1jvpzumY9onGtAxr53o9mqBHoXkPBVsUDj67JdLSR4BNvGcZBc93yWAe3w2psuUPf",
  "key19": "USWoMCk4FE1FmyD9ms9NePFKjuMCEP2kgM77x82F6K61nNpRty2Pyj4SFww87W3UcW5dgjjeMzP9CvAnC6hKSVm",
  "key20": "WgbZc4PfCWdxNfqPzM6hFFf3uwogW8ZiGvm8m1f9XNnjR3B2cj5iTAjao9HgrbBDGGDLpThxSGsHrszxAMiW8bt",
  "key21": "2wTRr3WUpQKc1Vjq1je2oxTVw35WbemAjXLVDU5tLYmf77qyE8XrLe39VjJjrJSVvGapSnN97uaoquWpicXy43vx",
  "key22": "GpbHDptypvs2NY5MiMJ4HF9bbBaDdx1HkZadzYYaTpA4qSnRdfCgTzbM5SSEH4qksmHPq4bSYxZYjyasfpEugew",
  "key23": "5vagQNHrTmDDqrub4XXzYpjW8xY7NCFLsAcYHH5FtauWQb699hrzRW4Ub4UFwLit8FkQB1VJmpAjWZBzRre6Q53K",
  "key24": "4hjYsxY9oMZk1rht1QsQp1NrPvowDfp9zWupmx9A7syxxv7cP5Mu7c3nTDzWqAgSPFsXZ4rRToXVznFo9TVPZCjB",
  "key25": "5BRGViGWQXKJAEe74dZ6mT3vrm8bBDJ56gNQ3w4TW6sXbBw7u6E3H5W3T6ECgfDJZNWmK3nzFBLu4TtNF9NK6iwo",
  "key26": "2hPG6zPSgc5Xhbrc2upFtNwMe6nyoANLzJqTvrkY1Z4feHTACCXoSMYYmAYw6S1dMyCnuRHqhrAMeqkMpD2PgHBw",
  "key27": "shCAXPxTn3pJSw4dzi2PiUx5xavxQPMiWUgXaWgDHnaA7DNhBXMeH1n6JPbnPk6QtEhVhzfbr14KhaEuX8wPKsA",
  "key28": "4hHLFdhW6G3xHpXC7EEZy6ewtSFh9Ye3Wmate7UFLY8WpJyWzStpzgYdX9Jyrm4SWMBWyuLNKKiDiD3WVKZzPcg3",
  "key29": "Lm52XsJmzeSGFffHt4w7NsNNtcsgS8Z93UP7xuSQtmDeuvnJS48JNYN8bo6aWCHKhoGuh597xzNcjFoYskLmwhY",
  "key30": "4kyiU3CDpQm5z6jNrs1o8micMsYxB2HTZ8he5HSptmTN7NwwpcGSW5xm4vM22mUyxNLWJB25TxbusUBvyNJAfX9z",
  "key31": "5dEB7CZZNbhQtA7AFysqUyxjzaZWz6qa829zbGvUkgPew9NES7wyqkKBUqfuhdaNioJTxjep64DmySzCu1YNdADB",
  "key32": "yEKcP3hFnFAGfRwy6oY9C3F1M51Dgfqah8wZrrZfumTdv8fEAJYnZittpvaDkB7xSzWx5qhozieaD7WSWmZatXD",
  "key33": "5S5ztjFftUtVBV1XrL37xDC4e4gLng73TtPguXaVSF2hc7grwy55pxuKkghMup12FqsCeHjGCoHbmSgLJc5JRzDD",
  "key34": "5fvhWBFPsDjukmQDQEK7mcAhkvL3HCPpYhCTPr9fhTSB8Chi8wkViFyHPvLGS5eiTKV5BSugLjMkxhpCvv2P4vZn",
  "key35": "5JLyjUqWkKq84PGqtLamohk7gaTy219pY5wS5PFvNzP36SVWF2gZTwGxWedK1AM6HkbiNAF72or4d5dcJVwpquUQ",
  "key36": "x5f91oC6CMqqDuYtYHtMekQdzUQdgiJCND4kk1UFj47PynAGppqipbc21NWAF7eze65kX7cQvrMQFGyYsYX4A5u",
  "key37": "4zepjdgW83SYuFqoE5yLFPJEXTiCsdSDQN9daefG1tku5jGMgrUEW1MggvaCfkr6GRCrpN6WZ6rcXZzoH2XxfRK5",
  "key38": "5DRbrMXzvGTDvJNWZFc9hZzLfgTf4eLvDuZxi1yETFqMSWqY7izhEvVZvFbRBMt6Nvuv5yqLMDodB8Sk7rhqJeuU",
  "key39": "234vcgg85HB3cuGdFk49gaB15XkqCDBugP6T7NADEGSKhvbx1mHZpG6RovHrL694Pq88PuMqtkHGskCMfwwndbyv",
  "key40": "4Vf558EfZ8vCMvTaBCZjyig4xCeFPJKPQjSAXxztMNBPXNXTcAqYUvnAZ158sS4Vd7JKqsA8iKQk53bnNoacYdgv",
  "key41": "64aNoEh3kKZaUDr5Ttger8tm4RcaWQMSQsKD2PRvTc8dSkCF5tQz1noY4vgXqYZQUWm3VUB93Avcfg9xTfXtRU59",
  "key42": "32soCcAHCw12SuUXBEt9MqyNyf6o1diaLXKKujQkidYhSBV1qLdPDvikCB7NfDd8NwtjZg9ngoX3cLZX3SmCV8xH",
  "key43": "JTwPmnt3A8mmCUtncEWPDe9Rmvk51NE67NDKhk3x1Nw8jhNwte6Gy2pLPbyT9peKZhDSxUVwsWr4QYBkAJecu4j",
  "key44": "5QqiRAXn7z5oGwmDQXx5mUkWTgo1TcYwrPZTxzhYo4KGgtXTxggxuWQY3uTHUHJGw48TygBhwzGrpzdVJcMHdoPk",
  "key45": "2YtS7DkrkBtKsoSwsEBwAmappYjPpejArptm9qBepDcEbY3URfvAMahfHRgd5Bs9J85ffA6xFqPLJBt4mCYN6kNq"
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
