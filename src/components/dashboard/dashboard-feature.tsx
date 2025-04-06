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
    "nZXW8g75cTYU3hGN8qsTK4LgMoh3CdtxUYTHTFKXuqaYZsSk2ERWustYXKD5cdEXACf44CsQaXoDrTr2JLhczdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66UuMjbacPPb1thEJYu3ZvD2nouRpNPNYpVKPqb618XhMVkBJ6VnTXXQ9Vo2Gz3yTmqdUJoz88Q3jMgt4ZAq3oTr",
  "key1": "5d28UwekK6LwqLRWB3MQ3oQ6T1EzscgPqzvv1M4nReXS13HyLJZLeYM6UfGSHhHSZhccEdxep6GyUF2D57ghjyvv",
  "key2": "436RRe3goh2NBVkWsvKSqiWS42zLkM5Egwr6wZb5RL8UTCwVb8LYea66F8a71d675oAAoq6mJRV5KHfHkzYatP93",
  "key3": "5yJ9cXRX5EN97iCnFeqwHHaRUG4Y9ucCkswJT6xhjKFHyrS4r9mhgAzkmymzvdih4YU7sBVRmh3NUm35M1C8YhCC",
  "key4": "5j5mgMTYzxiQsx4z3tmMFrSg7S8LfVqW25Kx578KztzSZyTEr9ko1pjXqYoBpNrFciEwYLYtGzcUqCv6QdcrbPww",
  "key5": "eYVyTjM4dhAVfJ3vPNMEtZc6eex5sUXryvnQX51RSihgSP3ypnc7tjy3mW2h74fu2vkKvdEc1LGzb8Gnr4j5gAC",
  "key6": "3ijcisLoix6LL8An1DRoQdPDmgDrRW3vUat1pbUhraroBLTdhe8E6gZwJBuR14yAdUfSf2Yzt3sdYynHxKdWJwL7",
  "key7": "2XXvqbu1wCJudQtDC1dBjQCykQhDgAKzM1iDGx7dTTxNeYXJwRyhY8KMjuTiSKYEFqqhXgNnDc1j7qUWyZGQSAaW",
  "key8": "5qdGsVfoeK6omjvZTgz7oStA5BPSMBB6yhwcBMSxJ2qKe1gsfMqb7TEg45pQQpxh1pAaHz1amp25Ld1JgmE9BXfj",
  "key9": "qbn5Nh4omABF877nd3GfduCy9DbqE8LeV5kn4j4GpdGYvsSDQor2LdNycS2KvoGBLmsV2kBFhXjya1NwidjWnSb",
  "key10": "5TFquPsodvQR94Rq1prrQpkBWcbKqS5Y3Vo5Xt7zT7xv5VcyK626WVHTLyMQkstwuoDZZBmfpjvbtdkjCUpxp4SF",
  "key11": "4bqd4A8mYUszft5uUgipX85Cu1VGwd9C7my3bLykJxfyzfYKpMiLM5JVfVTZ9LhrNxW114xbrxhyPsWCJpaeu7kV",
  "key12": "3pHYogWZXbbXjzQNf7xSmX67dYuBpwpH55p51PVFccqfdTkNfSXLG6pszJfBE1Uo8gz5notLiiSdDdcdzG96JKAN",
  "key13": "ghqRiZ4ihczh9h9NDXTuLNz1DUFNvu8c6cpmWCXw9LQEzDguxo8x1UnFnzQnXB7KLkXid2w8ysaqRgrU1xNxt28",
  "key14": "5Gv6JXSnTvFHi4UMZa43qjqeEqae6fA3e3yvDKMWhQzKurS2WV9n24bBiEeWWsR1SEES7UUia1LdJKPBiH9h3Psc",
  "key15": "3U61A3gt6u69hMQp4ZHezmw9yrSPMYRQZKhHHKAj7JkHqS7VHbLucF3jj2Q7B1biitWsYVfDXYUS8MY2swtU8Kg9",
  "key16": "5ngYoStqEbo9Qb1XCkUJkKxvvQeLBPnZqMmZ4ZVNfacZB614LJkD8vqLXXH8BCmbxb95AWp8o4e5APq1vg1gq5Nu",
  "key17": "mDUQTZagaCKkjA8esD4saeec4pJkqePypXtNRDPQ2cUJLU9SrSNQbob5t4BKKXQcjmVcZzP3ELt3kUeGeCZ5hH2",
  "key18": "31HwynEPZi7Heaw9tydCv3qtmfQ2vhLMhBJDzNGAeSmDwtqZzU39ohfAfn26TjV6wP4CviMphMM3VwPMWhCp449T",
  "key19": "mETfPsN4PEmVfggLzXJaHisGpxfF7jKqjEr2L1p3HMQiMgyPTK5V5NswpW5ahi3weN88VT8RcZjaTMYxnq2N8SC",
  "key20": "4Mvpbfzwpr4NhvnU1NoetN8DPWhUXHjqizeeWDve3ySUobjyUnZyF3M8X4ZDeXNK7CYpkTKu4NEPPW93263pWqHv",
  "key21": "5rHMP56DeKX7JGndfupjuqwBSdYUoRQqhr5ZauhqVSezDeWrmxRYZ4nKfY2np7VuqEwUQsGoimWJ9LwVV7jt963t",
  "key22": "5uXWx6iQWm6tZD94af61s5SnmEEH5f3iCe82Ybck6AHyy6M1kURCx8fJxgXJRnNHR6q5MDjYWT8uGsrfgE1s8vEm",
  "key23": "gjoPm9EDB4WaP1BQkhkKuQVZw8WuqJ9JqwLRsnPbY25VQFuiuLXoDpWfe3AwGSLA6QxvH7XNceMeX8qd9hPThMd",
  "key24": "4P3rKgBSNiBLYDGRjQCentTbUf4593Zu6SShVAULQJ2ZLDfyPhNYyDhpBxw1YL6UfXptcrsTt2MqxzpxLjzic37j",
  "key25": "4HBj87aoTMzCCuGvrMrmKjatgk4QNodqZ7R2FmpiXXQcQc8BPmLRt5Ra7aLpp8cyJyCwjnJcixBKfKVvFEjj17AJ",
  "key26": "5GH37behk18v9QwPFujQS4XzUkTYxumpj6vicSzDDEdkpXBjqBih5gXKkshjrfHaQjYeaHQYSVDqXnSrUGQJK9TN",
  "key27": "4PQypWTtDMvAraD1NuhMDJ8UQ58LsPMYpVVfeKSsWvHHM3CvM7zBbXm4VRFfaqLFnpb5S4ZU2NNKUN8JAFonPKVt",
  "key28": "3T2HKcZhDAu9eQWs3PzUCSqX4Bcr6N5CcmxTNeZFVaqo1HPsGpvGMzdkYwRPEY8hy4SkL1miStwr5vokfTxTUaAi",
  "key29": "5Gkgku9EgCBfBeLdY5A4XNuaeERT6HsV7zsQAAyNFgUha683UiAvvhgssDVsn1f9mbVTpaedTy5u38Y94BhAjUB1",
  "key30": "5VhXu5v4SRNPQ3rPNHcu3MBiQ64q3Gj12NUJ86NgPxRyyFrQ4M2SknRtJac5yhszmq1yHJa5ADYwU9d1vaXL3NFt",
  "key31": "2wcv2iq4JVGk4BDd7muwZraTN4xz5wjQeEEy585V6iprgZwmCPiq8eATF44cLuM97wFEboYyd5cUsxkqX4iNpTg5",
  "key32": "3ChzLQbMkqcZxn8KmqzeZ6mGB93VUzXB918nYzX6jA6QD8cppRyUP5puSfgzFqXivRBVy65kM5Bt4ujQZrwNniqy",
  "key33": "5WKz8dg766HAsgrTGugTu4iy4ARFiYJmoMpAm8oR6K1DmyTtg3J4YyD9ybmtDEK4tRCAkTrtNMH5dFm4uhRJb37E",
  "key34": "2xFRW9V6Y8SsjRBPVL2KCQSmQsaYixBb4QAHfbk2amgQ46vbxgU4qWnmb4st9iZu4uwXV3JBBESZdwKCEdZMBQ1V",
  "key35": "324DJwqEXXrnNRnobeG8B944oBMN2v4vHhjfZKQg8zxoHUor2HbT2yVCCGEpd3yg4MVhtUYiCz2mmBCS52yZExyd",
  "key36": "5XtbQZ2DYbfMgvnTM5nknDNtNZPNe4tAKxMqs6Eh7yb47aGcGtdSLJkTDUXUQ8tiCA4iCPZzZZug4Znr9DgbxF7c",
  "key37": "44VJf3chTKqCGLb8yM9Asx7ZiTRF7LQqTgvfbF6CFvgbBJfD8N3aSX7VGXTyyb8ME5HMQkFWKaaerGNsiWz3Qqop",
  "key38": "3nUpTNrW1z1KW8qwG7JBnLeusVzs2xFLUZxP6P2xmPiFsAGkWi1JHFEHn8R6hxNAksGUwUKfMgKAmVJ1sgDRPvKR",
  "key39": "oRfi9tLeUBuric3hZZZoSPvRNsopxropsXsWbpV7PskHgdvSWFj7JNWcbuJQuQnLcma5wxfDmmqt8Nk6FAvzkXU",
  "key40": "2k1iaSau5d9VPRvAJfmFEVZRis2CsJFtjJyeqEeEA5SrRyW6CsYwy1BgZKpfVPmATtWhXstXdffmAfKpse1h7QPy",
  "key41": "UuoVKoN8qqvk4cqV1edrRU1mMMrkF6mDDxUBJQmawYD5UdjSfLKJgX2ZdzGhzysi62ieLLBCWsTyyRTJ95PbCic",
  "key42": "66a9t7fMa7wvHvWYspkRNhdWdrSLkhWRxCLfH8G2HadLovXfwmMUyrNKP8Qjq69uZpyvfxBDX1szkRZoxziRt4JF",
  "key43": "4uudkPcp2hgxPgKMGoys5LsVw5f5RwHxWY8PF4ubrsHPsokTGUSso5gURTDSH4yaTGC1v8jXJFufBUbQ8naEhqsv",
  "key44": "3s9evzDjnY7GVRC1C6WpkzW3K3Kk7Z1tcN7HAuHdHH1cz7xVjFad6zGBhBJHzYW1X8dzzQvCQ2sAdnNRvSFRh9D2",
  "key45": "664mH1rzJ22EYUg9XTGtafa5nb23EscqCWo1weZvD8JQQrzPF7CnkpixGkoEDEif4GpBWQuKfn6whexqXHMmeXq",
  "key46": "4NH5pLRdN76HycdA1UPVJdYmsevqHXux954upARYKdr4YykdRxmMPWAjsfJr7AbuxpFcpLYKKemuvwh1xA4GUnU7"
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
