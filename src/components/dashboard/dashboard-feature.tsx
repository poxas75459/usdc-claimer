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
    "4sN5p8jV4wv1gTkSdn9a9btiZ7vvZVfdVhMqDt7tYL1ZfuDz6YNac5RjTqL75wJeaFpnrU9VawLcGzeaJtvb8tD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xcb37Sy5cB4NKWXjdrRYocKrhUYtebp4a4FNPMEAX7ns8NmcjVDepAaPcq9U7t3XFaUSGutfpdjY2Y39Jagx4WD",
  "key1": "5fsSqbisTHFj1agpL6Z3EELHWtBs5rAbVLdYwCnAufCXrMEwUQPmYS2Z1zFYq1xox7h7VbBRQAU7hGgi9MCT3sBH",
  "key2": "kTYmqHtHDHn6u9i1g3e8e9Pot37wvErJiF6qsypTGbJTMJTmRbGvRAz5EjxkiW4JmHPKDRvdMqAoAjh6wxj5Kqm",
  "key3": "nBEBbtWe9ErEn568Qfa6AYXfGnz6V4dj4DW33JtvUUwuKaGdsKBuVeEZbTHsNWuzqHkCZWSEQ7NynYJ4jdE1ceV",
  "key4": "5satFuNLk9EJP44Gr6zVoewEJTpEEJB6NA81cjkXF6jickfVVma2BD2LEKoogq7j1rSBBanvq54MeFEdRPkDMhzw",
  "key5": "2jYKKTfwKAPaQEVq1WsY64nDxHAvSoiQVhZubyR9NrrQzdpnPXtMQbKnRiAnGfd79TnD4R5UkvmVugu7ybzvppHm",
  "key6": "WSUrqdPNDtpH3YKzQ3rP4Sui6iEuJtxBBNHUnYHJ3kKFkL5o5iJ3mnfJt5maAsuRhvAFwyxnw6UKvX7JjtPpqEL",
  "key7": "AdkLM78jUdLA2C3uoFqmQA8kfdKTXPbYiBUTE3Sqik9k9BwUjLQy37DFeJYs1zbkZAWTS6H2eB1zBwEdqfzVvcA",
  "key8": "2bY9JuLwedkwMD4bb2NzcPMGYZYCKWtD8YCgLzPEQ7fh8xQqoZvTKt8kyeYyV5wNZSwLGEvF9kswZpaNrYGWkvAC",
  "key9": "2ve5sjk2414sna7vnRXyz8icQ9auHjdyudQGf7FbDbz88SLVz7j6qwGCP8ibv582y9pHbfQQqHkvLqMZAVmd5VXr",
  "key10": "2btfEW3SXdGTgPWNr7qUXLMxqYS2GyMLQMFmLchoQdwNhtkqruQbiyqFHzBfua9x5sbYjiFVuu2T65Jnapm4H4jh",
  "key11": "4rp2jRowiCdwzQXzaZCDt7gvqcsgadQYpyjH8EBgWaQiFccGCNXpKAyYcBV8A5mcrGon4hP6ABkYw8AuhQ4MMjZz",
  "key12": "2fnD3yDYXkKq8Ns33XHgY7mQFVRNRWmWrCDkCW224X127XcKAeo6TJmjPMtoskGCFfx8vtweqxi9FKxCzwNVG2zL",
  "key13": "5hcRTeUpLcuo2PReVRRbMGZpqUcY81VoxGZFDecNDWzEkHzEtrv9qNyQwhybzJwXb8LUAVi3rPigucc5xWPHtd6H",
  "key14": "v93c8K6ZP4LHWRSCLhh2saPuLfFuYWUCcQ4oj86HMJqUSRTzb7oa3tP258wNWFgjSKzsrjMQeqx7MqtJ1dtse9J",
  "key15": "4dWvZfS45uRyxMqq2bHhZfJdKMTv8LF8uFWePeTPNkL59UGKNxLiMnWNwCMJvjm4BsikYVDB7n8kec3sVK5UaGhR",
  "key16": "4YQ4Nw2v3zwijraZ7XdsmpNBoit6LmruzCp4EydAu7fWn2rbceD5khE4UVXp1iQVasY7dzbXQ3kLSzAQCD1y5CbE",
  "key17": "26BkTkiLnUwFuBRXGu2eBCTAQPem7RUQinL7bjksYFxa18YbVHLK8oXc6CdzZPzPGpHn29QF6HFNwq9rJxTFyh58",
  "key18": "2vGqctCy9ZB8eXZ7tpdFQV9WbhPri4xVeRsb4cqWdjAF6kjQVUNdGJvHotUfmmdBG5vLPBw59PGMd3Ce1kFMtSrt",
  "key19": "2VibnyVun3MCSyq9Z4nFDP9qRiBaQXRDdrLGjmH3bKHfXX8KFZf8VFvXmctaej75WC59u9WWXiJyARWkgCTiSWus",
  "key20": "41dmqNHLU6sWTLRCE5ByjSS94p6CBzojnfgJKPBpstq6mdkKaKmEZRCpbDRZpfMJfcxD7GTK5mq9qoQsfeYYxaRG",
  "key21": "dG3Lkge3cF6TjGeLt58aZB7eqz1zyJ9VojUt69DLHQBC8ocbcHRSgBu5AkmKqaFmKabhHBaGXVCAfKNPA7v7QRa",
  "key22": "BSPmQAkDaHGGgneJpsa7DcjMeUcYyFStkWkgdnLEci4pKMZJJf1ZfcxwdGhMDHvaA5jo47Yr73d9FAUMBgFA6w6",
  "key23": "43nrHCEE1ek3L7pzd5NAZdDot2GxodXW3F6gvyN84sy5KSsQKdoHY4mxw7hwdNPjybcc7CsnU8QcFNFPdHMJ9Tyu",
  "key24": "5QHD7Ryi8kVyS3JiZowMk13C14z1pZq7WddcKNMfu61RniatDkEuSZ6nE5cVLCL6drzxiJMVB9ngg7YXUrL2E8ZN",
  "key25": "4826nSFyfooFTz1d3Simk9NSj42scqifAvd4JbJHMRwDTgM6QBHwBacFDFRvENsqyBNmZxwrY5NCfoHgWAbgvyBr",
  "key26": "2GTtV4m7sXCfCgqwZ5Xo7NLKvGEenc2x3iPm1wRC8XNVKpDhzGeWWduyhLsFgc8WeAD3KAPNncFZ9drxvRH1qyBJ",
  "key27": "4o8xkrXytSrs5fWXeXpyAY39S1xdTMxC7Qf7UJvcKC6LFson2TS9kZQQmvYQUYanqyf3MrVke9QB3Kbdv8LU5TNi",
  "key28": "21V5PDdymtb4rLJq8mUzaexJHpD3uC2BokxzXTzM4uBLq65dyK9eguc645JWkDDG5oc4KdAhUooDR6MLyJtPcGdj",
  "key29": "3cRRpzHPU79v6fgVVqgxzZHXYDVz9PPEMTBoGybB5xZw8GUXm1B8ZzHRPkC45Z9BEFELjfVK7DtfBLe6hiWG9ow4",
  "key30": "3gExgKv51N4DzWXamAeU9R5d8XS8S7HS3tdjWLP1GXyN9tsR9PELUHUPVfHuYRywF3VZWSPeXhVqCbMg45jEY6Gk",
  "key31": "5yBBQSSm7iXXEXpugiTm8YkDw38SVmKJyPSFQGdM3YxeTnGDGXMUSoQ9CCbybSK3WYM2cqt8L7J3zYf9YEXVk6e6",
  "key32": "27bZMke58pX5vizGZg6idZaqxcWEcWGSZbTS9Z1qgB2zH4M5eXJF7xukydfJk9A5rXrSDxtPpaBFafma36xjA4ZE",
  "key33": "wxkNUpkWoJMSaMHB8EyE8rHghkC3Z4vbWh1VX6vgJpueVaXvyXvfkPHYc4H5mutPzamCrsiA92Pb7sa8QfMR6nP",
  "key34": "uYcLKARhXkCCmq5jUtKBWVYuvBqWh13e2G6jWwtVHQqeSjLXZBcyrhcgCrcF6qdxSES66Mu9YsQ1b4sWNRtwXJ2",
  "key35": "4Rgn7jUjmCXKSFVJqBWbjuvH1iV4UiCC4U5V4ePXYbMAJvWigC2aW6BekUJ9oyetmzwmrRqVXRWoLYX1JoCA3oG2",
  "key36": "bLZz8o5oYGL4ShEqhEE3GMUgycMjS79wK4KYPP5EVqD36Kf88JM2hKU1RpSfhJTPR6p6WaVZSwWvYj68Sdhn1kw",
  "key37": "49pJDZj5wjzdGnNXnhfdLguwJ5gRc3TzL7sxQmXf4ZDe2wR2d4fviLYAhVdUdPzuZCw5eEqRcBNh1QqjFuURXLd4",
  "key38": "FvGvphcFMbHgFVf5peyAiNYBti76hsocAhfBw39PCmJZYawmYXxf2S9Xe8PtEr67BhvFXPvfd6yGYkSw4qrz4Yx",
  "key39": "4DT71pexyauzvUz8sBCyfiogNhJaBAwnDtjUqEb9M2jV2EjH9YaZKjPvbXgSgA4UzLQ6aFihfAYsP3xB16iGd6DT"
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
