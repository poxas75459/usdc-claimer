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
    "2YP989BjmJkCXhR2Qzgm2BzCi6AuhtyNXCSN6KpVYXBfur5bzpDxYGeiaqXCMrJaz1LXNc2QN7ooJY3PaNN33aiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63a6TcC6qzUxd9q7zGqCSWAg2uNGHAK9ttq4P49XjkP7Mva1xysCkUapT6CE1xveDzcvu9RYi1s7oiYwh5zYxqE2",
  "key1": "HERJM7gCaF2VF8bBjm4vJTcYdLQJPMwVQM2dfwRhwbAVB2rLUWUCw6GQyYroi2dm2pr3PmrzNkcn6b8DZTKX9Yp",
  "key2": "44881LdRaeh193bgHC6YuKwL4cP539dEf74J7rN3Mmnh4cCq72pZ7J6kAXyQF8pgoB1NfhfxFTKZMdhdFPYevpf7",
  "key3": "2LmBWmDV3sNC44QNiGvUEsxfAsX8HWQUHNpY5KaXuyHJWBDxPtE3FE8gsTHkmhZiCiQL5JMHFqJdt1SdLSxdtBCZ",
  "key4": "LSSeacuzG2FnhacWnJotW3Frv5uQ784PqQCJL1Q1HxQpZ9JowVT5hAchdHnmQsgavA12kLeG2xcSU99yoerMVie",
  "key5": "5zHLSUDr8tXME7Q9x77xMs8jAyerNTfNB3Rhjh3g8MU5cbsKjdwT2fjFBYdhBsy4qn19j5J6fH3gFfxsWUFRyWbr",
  "key6": "36uSMYDuBDbye2vmeJocq3L1eDbzXo9SN6wXt4x4hPESuzxKZHuYzC6ChiruQeed5AQUdriAENuZmPL34nxQpQrG",
  "key7": "24Q798XvXE1BHmeMb7R7YJHsohLXMB4gfC5QYD4hCZVyeXrTZSWM4hkvNd2hRCFEvCk3gK8ra99FxAC6YZV1A2xW",
  "key8": "4ggcAdEHGa7ayuMhkU8cwKtyCtbp6XiYJQYHdFZmgAV7r3GpMTnQBhXewLDsdquBeCPedpPXecN9QF1rfqpQ9wJ3",
  "key9": "Rpv3k79hyNGUSJTypiGoNcFDZmZFcLfybeVr7mT9kDvtCUA6KfuYqqtEGkrTsSdaZ997cq18jiQLJBnRrP81fMM",
  "key10": "4QtCd3fS7mnbXBA5mKNHvALLPXqexbGSMqxQEd1mW8hkYW7Dx1RsWGzic2b7v4YUZhigsywAtMzUyuCGcEmswniZ",
  "key11": "2ARNQ3mTv9w8pi8V1b29mD5LtQzv5BgqEmtw4WW66BGqPkm1KU27j4wJZSgDsA6EirGTX6UHfavnGgJYjjw9rkgD",
  "key12": "3wQ75RKgVvU9FEZ2RFhEy8Mk9oockKvWrCkovikhsZydHYTdW8W5Z9xHTZX4BiryPDk8RDUxEqcW24hR51nRjfF3",
  "key13": "KmJ7MEm1dn2QpnjrZRcRb6Rfkgg4jAJvfFagqaK7HAEC5uAVwTSMWEWbwi34CQewQSMG1kvCPoJcTKmtVJU5xm8",
  "key14": "5pAxA28vL7mYQ235H8BZVPAaKNLLwf5uZk1krLUjVUv77uB9z5Suq4A11PiehMxreTsVykHax1ezyATFdF2XG3nq",
  "key15": "5inrAqpFH8kaJuMixxRvW5Sb2tyudxFvTWmdsCSmM5HtFWZSMfZhJHuGDkcb1fuUwuwKSTkZj23iJP8cLmVir5mf",
  "key16": "5u6SaApJmoBLeoKrdemnp1dEBws2ueDaa4p4Gc53SNvbVdu3c6xu9Te6kU8YRspBbhikRG6NZM5dAKqLpo88viqc",
  "key17": "4W9UewiQS5GC9Bmit9cX5TB6UgqA6sfXyEsAdXZBtfyK7G2DqjdSW7F37cb3DmpzpkYWwpiLpTrQZto7Dagg5qmn",
  "key18": "233fDVyswdYmyCBHyHjvJnz5QMJiBkDcFpBC2pwi5JadX1KGs1EAHBh19oW2j32G12vYSeAMCt1iQjULTVCvmm4g",
  "key19": "3e6NQoqxmwmnqki3pbdHpDinac8RSn1UYujqVVoiwFKcGkmUiATBDwGjL8HbRMi3yvj136A6QteAcgiY2px3tKno",
  "key20": "2ZGzgjK33yAyZdsRWSrF56aSCGgT4CDPHxaXFHVLQjqf9Bp5Kd8tE3sa3riGohiuiV7i8z7uQwT2EVQWHisG9jC5",
  "key21": "9y1ApMfrZdcm8cGTyNFzLkZJ62zVKkvx5x2qRFRrqaDi4EuVqCUWZhcfFGXwqSU4u6FWabhaaPWT2qTECKJAKSK",
  "key22": "3RtFWidc4Js7KaQvNsXgStv1bKMQRo4sMVoymy49XGcsouJSgdtpp1iqE74eW9C9yH3w8RWfTwFQoo5srbWojZug",
  "key23": "2zgcnHSzDC3idg9nvqDgEh23soJEDuhhmkSjUErqpdSWSrr6wGxh1DZFr1qPnAUGczKnLd8GLoRsJgyMsaPhdfvN",
  "key24": "5bB8EpoWh28c2JE6Rx38XRxcJ4AMP6MwatRGyeueTqJiwzaSZ2TdsfhKDanG8HZQjhTEcJSnJBYwA972n2Fk8hZJ",
  "key25": "ZjTqADvdh9D8dxAM1NjWBCg5tt8bNeFWSbELP8MR521WP8FkwVo7ajN8ZxcNieqdYChW8fuSindV3YmKghT3P4P",
  "key26": "aSBdeaq9hZE9haYU8AMkHhCGQLtKhUyzQWjQjyBDCKGpqCT7SBTxeSRvsJYhyf9PvBve5ciXtZ8tfDLXc5EfoGk",
  "key27": "4BkPfLbKbGWkSics62tfvkuemDu7P4jx2LaAEqhNFRMSbs36TR2DbyCkDgJAeeJo5SGDuerdNGZuga8Vcua1Jd2D",
  "key28": "35SbC4JjpRSGPfMmJBC9MExQ8weyYGVkhPLLkx3gQsSs6CB9MiY7Awi9LRbVTtrWZvHwHkcSGSSZbXT7ddn7LDcG"
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
