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
    "2ViFFviVjZ65c1nBg8WAgkv7JKkdjsSDLaMpyZX62qXR79CUkcsr7Zo5RFKyQg2yP2w4RVoubHAZgdQGawyczEmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPQja9uUqtAYpE58bfCnokS7cqaDZdyxPADVBM3GfDhF7b8mSvdFqkgvavLMT9iHiHyLrrfbJbxYg57qVV2JT8z",
  "key1": "4GvZckp6RgfUuZQ2DtcsrMqgx3uEhtPktvDbCcYmdrxkNqt79FgwE4ZLsmf12QBLh9GruaLwohu2WnGZCQKDrSgm",
  "key2": "ziEkADPvZQceFqkdkqQGyCdHUzGvZoZXzg52pxCx8PJwK8nFv7rc1TrNTr2nrFZEW9WhSQKFyVMWFT2MPg4h3zF",
  "key3": "4LcKxc2hThZvL7JuMqLmm8uKHo1mQNcayzrjx7WG6ckQXFhKmZeJxnkr2SF2smSGnwzyz1zw9uQruJtFE1D7zg4z",
  "key4": "22NY71ZDpBXkM6YdWvAXP68XUCEGpgDgT9PZe283KSzWtq6bay2BZWDYkgJM7w3Yhc4u9QKkR5cD1tx2UoyGsV8w",
  "key5": "4zftVz5X4tjfLoT2eoQxJoEogoe5yC3VhjE1aUNW6yoydY5yZ5Ea7ZeENqorjbK8MR8aQrEs2yuZAXtLoEDE5Lj1",
  "key6": "3FdtacGYfSkngd39Bc5TpT8UKGFrjqJ5HbhhWfXXHmEWtcwNmB38i8tNzN9TFg1SSQtYYdtVs7jgW9fy7neioPUn",
  "key7": "QmXPo4W2A8JusyFmKpBMNUeUZP83zLP8CHaEKnTh2hUKDmsMZcUHHBV58m7vXeF8QYM4HAM4HAtcbZFogYDUp6s",
  "key8": "2VYLXtXMS8UV4WFWbZtMHE6nPFv3MTDeBgkg2kYztKxaFNDuhsZhWYEqUkZCeacTR37xqC6bJpPHm6Gkq5som7Z8",
  "key9": "9nX9nKxsX97QZAjtscpD2sicJgYVhgoHYwMxcjw7x3iQKrS9XqXodoAjuibnHxYsVDu9ke5EAQVKeotBhyJ5tN2",
  "key10": "nhaN7AFdNnSUTcSrrKdJSdwEegj4xuht2tLXwHVQQzyPhZAbf1GCRE4mGMvjjXcptgfaLsuMcsRQdvJvr6Xu9tP",
  "key11": "2ZaK3Rn2eSXaqNQvYnzr83RqDRoip8ddj4si4kh1yraPS6vQgAzaqKV2LAoa9pSk9dHtMiDdpoJ5S5QxjgLih32C",
  "key12": "2iTNFUK7SftSRq46W7YZ7cEqvG2Un2RzgyXi5wePKSuRVU3vE9nr3mHzWPbj9fPtjNfZssTF5ejA1RYWD1uorfH6",
  "key13": "aFHLiWrFyTUBRLmxdPi2uoELnETHxUyVf6Ywhe8gnDVgD1PrWjNYqATY4sFNrSKSKeGvZJ1eG1jTjMoXKK9BGy1",
  "key14": "CJVnaRypXEaFPFaBCAsvNytasKzRGtFrf9uscLzzV4Mcvg5rndFP4UaxvHU6ZMQ4YYyoYhvLHrgEN23BEpYmG6R",
  "key15": "59sNMRtzBm56Vu6RdXcKdxEn24SUx7L3vf3FfMEugcegp1uJAw1B6N8iG2NvSj2MeTyNiK6xMxPJzXy9ZTJVummJ",
  "key16": "5CnrMWMYgs6e58BWka9hWHw9Jh9qpRifWPua8rEZNMAQ3q7rHMefuYgEsVDp1Jm4QhYmSYQizcib1nGKBBqs84Ra",
  "key17": "2g13KoQSjfvLxGBY5xFc44hDEcNsQyQF8bvYwZDNFHk1GNnFkQtowgopKam4yci9N1Yroapwepn9bycnJeReWGyU",
  "key18": "ME84LTmvwnshq4pE31BZ8MHxhXQarLYrsT2qAqddGV3zozugYgYt4ZRCA2WiczPAAWYRqF6my47T4tpYZSWfCbM",
  "key19": "Zbv38g2WxESXNzGhhQCFYse4zAzU6WbtZYfCXagNzZYBTtJxECjR7WVuxMFq2rntJWe5rzJJHpmHAbh1UdgVQuM",
  "key20": "4R392DSN2HWBxcRJmWSmqGYX692yqhq4jrRhgg4JBGwms9zngEaL6wGBPz747YTTZfofh3L39cCPafE1hQu8d5dE",
  "key21": "SJ8MDB9wFFszY9F6k2fD6Mf6veFMRGpWyUXb3tT3oSzj7vpA2aJiD7s6Asyjhm5DQiEPCFJJJuJwGmwKAqbJWG1",
  "key22": "3surX3i5nk1DtBQHGqW2RLDkXgSE2wbWkrhFkTdfBUFDV8JMpFKjKr5vqKU6m95mVxtCcpyDZjB3AARTpsJ8JMs1",
  "key23": "5Px76pFzwPBdBS9BrSBrao5yatWK82SjL9S6tgPkMeZUS4ybu4rC8VfmW7nPhAvSyrYFc5RgWicZyddzGD22KoFi",
  "key24": "dCVEtzzbcrXbBJ6aHD9tSBmaBsSHB1LY42oUP9YoMTDsByXFCCdLV7DiXDa2MP5uMKF4n76HEtrKYAh98TT9ybU",
  "key25": "j8ygqytvkdb34GHtweT8LAVcdWRmxwXDRs8tZQiE5DSbeLhzrZ78rdFJrNE4Nc4U9FXD7QScVo9wTdnLYRJvv9J",
  "key26": "35rwsU7n9tmkmeiRhrgzYG5E21qn9Ed7m4RcQ6gMVQcJTa74e9PBDwfcDV1q7UnSJhQ823Sm9x7LBYNGWncN4Azf",
  "key27": "5b5Hgc6sjhkCQVbfdjXtNg8yysGcyqHnY5hAz9a64AVjDEYPYqYeNvq8mdJjyZvux6ARY3t3wqg9UDbiaeodkn5E",
  "key28": "2wrmqbDQAx8yvypJKnKqXpYyQhRJAaoATdqMLKC9GquEcVMu6u2Szae3i1w97qtnyqTCZjdVprjmEgASvR8Do9CY",
  "key29": "2q8jf35Trxyws5vihu1U7DcpXFPEHrhe5F7R49e6sF2zRpqLUa7UQ8QGZuwu4bNqvnDCgo48Zk2tsVYByVDcMeWq",
  "key30": "2CyQegp6c2VwvZwpUVqXDaiKPnz6bCXgiDGK8sJ6wjcfgZPQr38FdM9M8e6NN6MGcJEbqdEy23j52tjy4EyBUamk",
  "key31": "2JTVwJMzhGibWFtQ15YK784HAmMjWawecayr5Rx1mjtroDbZGaVofrYH9f6TbhdjW3bRrvKFcKtuc7G4kVdDfgMo",
  "key32": "VsMsPUWMza7Sqd7PqN6dypJYd88bUdZ4z6caQSEKvDU7Xt8LGwLd2omxq3QW9m8R8JGZgKTpePeVGx5YQc72M31",
  "key33": "4ueMZjERZGP4ejxq9YinpvthSyZ9EypmUHGSTkAquhjFP7cBAmiRreovNhi6wqqsWiBVpqQTcUZwZx9RZ7jvJ1du",
  "key34": "5Z2qs14CZUWEA8wHt5SQ9YnZxFh2v7pCD6Af5KPBcHKPdyXww8hBP34UQwDSbc2VmxCHjXo2jktmLPGooc3etHz3",
  "key35": "3qeWjZH52hsuMLoxtmay86b5nm9GM8QfJgX5y6ZLSWZ5oKkxUqvecYkctmCatxHtjJUCLiXudPSNZDtBosrrFWXp",
  "key36": "3RpQvbjhgpW2yf8jU4qmhyX9MX19tf3rcLUhiojBpF3fmLAkEZN1aha6WnKnTsxmgkoVr76w2pGN6MgenL6cn9gJ",
  "key37": "52wGxmxrzpqXYYheo5dwQUpuTu3Ce3Dbr7nEhtewNqq1C5vCP7UXQV8xRhb7u3ZEoxeZ4vpGaFE113ftLY6rT1v5",
  "key38": "5R6Q8rrftWsDiPSiqHrBSLJqnMGUd6a4K8PwWxBu6P5gaRhtZHmPVWpn5pyEgroF5uPabewEKyQWzkgLBHtKyGS3",
  "key39": "2ECZH1bHDhMdFUbzdSZeP5punVN1jVPQUaUXNxKM1AQQmME2ui1bEo7CEu6a32cDH4qXuPbudbYeN3Atizssk1bC",
  "key40": "2jDrMmCPLBKBHX1Jk1MM5LRC9jthddKyoVxdTTgKL6bNVfcvDA8jY21Sna8p8X1K6X1RkNumvGUEuitLPMtDZbow",
  "key41": "2Adp1SEiv9YeXkP3c9LRXf8jwQcDDNW8RhxjMXPdDe1wjhjTZisLeNNdhazMSorvy9HnXftCEg7a1C8jjFWnSANg",
  "key42": "2Pt75vMqw2CsbCXSXrNkHfDnttgzANYdvrTu5Dh5jGgYG4EG3hFvvVyXazEsq5tXZYk6L2c7YvQW6HnqDVSDDuGn",
  "key43": "Rtfp11u2rvJH7gSSm8knfv8MyNftfN6od3k2Rxp26bdoyyypNpTFj1z6B8PoxwtVwTwC1L1gf3RrkUoVn24f2P1",
  "key44": "51j3VJeBb1fuwzbUSfcTHyRCxHqxKSe2pDR8x8cUR63xP5x2hoSHyTscudZYQdwGTDQbsvKnYPqp9KigpGZk8fLF",
  "key45": "22gZqmuTrC7nQNoCQC2YJxfZQR8EsJyTdAyP7PWRuV9VjrKJX3dLyQpdcn2G63hBhFR1pQ2swBqe4FTWXNX1c6ja",
  "key46": "4gstutrZFd4vzARjRFxWAVkp5TonM3t9C4tPg8yxTQeU62foVDVwKYuJAZfFm12AA2AhN3oUGpsh7vTDXpBEZpE",
  "key47": "2ArQGtKsvPbxsk956mQy7R3X7TB7ZSwFtc7zU1LYZtCB7TKcqAEhDztPQxiXDUsW1somhqhemxD1i6os2f46CsLR",
  "key48": "5C1i7XGejTjXzAgstXsL3BybZsYdBuxi5TQMqWyknXKDMjqzmGzn4fj4axQ3F7GErMDAjR2ZS5XeZv7xD2hp17GJ"
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
