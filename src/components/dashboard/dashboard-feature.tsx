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
    "3hgcQzxNKtBRC54tk4edh2rkX7FeoaV6zRhvzkzpLKRWgC4XXb9ZKSsSEUVQeUwUCHjCStX1n5xsAtqTLe9V2YDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WjN8L7k6GVa3GkYhieMic7UeZFFT9VBfrYMWfPbC91yMBTh3rEvTaGbr9qNtdvxJfJzndfBUF8ue9tu7KJvBRb",
  "key1": "45CXhq6v9B2FAC17XPViaLGc9Xx7HfRZ7ESHiMPpx5ccSmfTyXEk9YWJVnfbHwZ5BzgFQbvJzwZ6kyYZ19kS7Xy",
  "key2": "3z5pU8NkKQrPhYh1VhXiEvSdeFM1yDY6K23htYRfzijPRKu4Zs5NaVSCy2uN6pYH2pvo4eLiKhgPzkRXXYkNHuYu",
  "key3": "2T4nWsALswzhmn2eJU6Saxu6znM8Cqr1AptRyP141wvT1cJ7MhodxJJzeKzmq2N29gEJUoHuJdThMjC7KQb17Aw1",
  "key4": "4rMEXso42rHisy2errpbXc7yFhn4GKfujVMQQZAqhtYx9DMorCYo3anrFMQZuTVKdf394wKWPwb1Un55nMcX7YKS",
  "key5": "47LXpxtZ7wWDry1L4YJHSwxHenboKvRV28nRsPFU1awcwYbkZ71aRkTqw9Ubjb9nbADXVsj4Sqy9Tpq32GgtnjQn",
  "key6": "4x9J5diMzN1CmdZNi4uGL3d9paTTmW5r2drvstEKVzjpUoJEjnV7f8nY8JYnkbhjFYYjKjoHWu4cQHzxyZtxhLxn",
  "key7": "97fTCs1J1cMChY3LKqK2nDWSHLQHDfBzfaS7FU4Rrg9zWJhawVfhfVKaEacmx4Xc3XFsy5jxcopGuHkhwhbBFDY",
  "key8": "452FinLr6XRwQKS6SQBBQdhpyZsoJtfDFZNU5rWTnevpwUP7LgRDZ3RdvS2a5BUi64qCR5VAUh7iJLoHEuYxQX8c",
  "key9": "4BTy69VfSby56nhTMjsPxV2Y2LJuMd9AxQfBGpuCsACqXDjKusgNJbV67yAdtoXNRDzjuuN4tkxMNU9mVyZ5PHw8",
  "key10": "NQERA37xivoaciof464wSFCKT5qqSfPAcGBUucwT399fgj9xTN729vymatNwkbNnYNvYwCb43UZPUqx72GkhRQj",
  "key11": "oVo4gbEb98URxBaJ4Lb8i5YJZ9ZWEtM3Z5turcn3Uk8d64PKzmEA1uNAGcCe12G3pa7mw9Y2hnPtiAL2LKivmss",
  "key12": "5osvfTCEKnco6KHz3agC6u9GVFtkEbrN2oZ7mUS3ofwAhZs6K8ew79dThVGUSpevCdgwMF76LdAdP2qFQTYZEd3J",
  "key13": "36Cc7hm1qCXaQdFAgZWxhnzS2AbTnVCFFiYkwiGhLnuGRxo76xeSp5S7kQNUrRNmdNhWXTwciqQ7tvRCirhvqyWn",
  "key14": "3fc1c6YP24cRmoLYL3dwmsWhjx7n8CKqTDYJgGV8ajzhiVEoTT4inQKFxX4HsbrjRDuRh88SPm5nGBF2UaNy897J",
  "key15": "4rQy5LsXeXhDrjUhP1udSFYmGRY6XBqTKCseYH13nDjwKEHeyCuUw1ZFuPQLNTge7UZpzXCDqfya4ddJVZFHF2cG",
  "key16": "5YVcPevy6prfhLJUDBkHB6pk4szSnonxVdZ7q4UrGH3gwdYQQfUtoPe8cfpgtMGWrkYLSE42EpLJwz3wLoMxY5nF",
  "key17": "28TJJTK7vjsYWFApgGj1r6eJVDkUhAf3L1Gdu2rQQYuMJJUFSgGdg4t9WSph2aQntFK2syybNi1RCNkZTUUyqjQv",
  "key18": "36LDfFpCWcbb6WVUc8UyJBhKFPEWU445i1kZUdZu2PGinMW9ESGbZz56LuNj4NUpWFhiVaErehhxh2raKvr2k6G1",
  "key19": "5DG9kVxacthJeUeNyuFahsnN3MzdM52TE1xEcz6DHRAxQrb9xSTxJ8PfxeLXZS1pjw1yfrcCew6XLrKVKU7KkaDq",
  "key20": "5ZQXNE7mNYqQqdPLSASru1X8NgSR67D54gu8n4WG32wmtsEnAu4pLKfRXqdM8zwxbNZ21YKsKcV8xGCwtbxYUSXs",
  "key21": "f5M67WztuALgcx43rJHnsj6hgg5wGXnkTUzthKam9WvUzA1yhJw7j2VMkQKxSfUkEot9ArrTJCB3JggqHizywdo",
  "key22": "5tsqURT7aAbBRADfcYmM3kGgnM4w1WZ3oRFWXQijtGnFmWbDX379H1LbRbFpdUr2sQqbnApC333ijsCew3AwezCt",
  "key23": "gaXBg9tKG6sjyJuvRwaCCLsAj1vgTT1YfcCRoqSTFrzo7Fd1ghLe4ydASZcmd4gubqfTEoSHeXF61T8S2XbaBSj",
  "key24": "2QRsngMFV7TNCZJUc7RvBubj6j9RbgHrYRpmWbmj2TvGQJFLWLWjnCqpSqXVptNTLfaJ2mwi7KYWnCJnSouGt9A1",
  "key25": "4gDeMBox3k7sYTEN2coTjztKU5LtPSdaye1s28KXRsL9tjkfc3XvK7aKd3AsKhWN5xkFfCmszajtmtHiuGdLXHmD",
  "key26": "9wcS36GwQAFHrvouNcH7q32GBSidvVhrtzKK5UYcTypvux1WEYhtfi8BPh1GsRVmhMUwLmbLiw3xQy8f69FVNwk",
  "key27": "3R9AA26ohCSnGW1gi3rMk62Kaxy58Q49LME2FRURXEGTpMREVwzPAVtTGBYfN5Y6gn3J2knzG8pGRpNPDBhVBJTJ",
  "key28": "26v54yfGjhe4ZizfrqU2CCn2inVSDSYqrqZ5Ev2dHasPBqggZmMeYJgHge9zRyqSZjy7QBvagKfjTSYfu8rYwCoU",
  "key29": "31jAvADJhoQb3DHmH4ZyN424V1UNzx4Mk9nURPj5mJn7Zjjzt7BTRs9P2rQhDJrPFnJSCDVYZBP6BCRoYo3RpiNW",
  "key30": "2WCkiWFyr6pt6vQfmcUd6jvBrTtTY5AVVPAX6Cqte2fVBQr8UVQhs7yExPeSsnYXCfGdi8roEngQGdXEmUU5q62t",
  "key31": "5yKEA7DBgsY1WMGc1czYmNQg6FNfNvVGUKjcEGrTkaTCv2BtBvGC6ZSj9MAAvop1PnVk2CUYbicAmEDfBbZjHRBF",
  "key32": "XWM5H6EDzFd5Rad6XQRqMEQ7wxeYuxafUq7HyXAZ3sxuXaz8JTmGy5BF2mJQ1psyDp9iNZg4tbggyo7yN7ey7YK",
  "key33": "2Yx5D7dAjNYG7jWcrp6XpyqWi1hDhYd3VSPUFrgjwC6izha7QM33gMBF1uc5ozwiEWEFW6Ei7ospS6KZHbabYGfu",
  "key34": "SUafMi9nSx2snpeFC6JrfJM4hReDLKFYSCvEhqqrMCotdNEEUu93d85En4hjCgC2XHZ7JpjZhUp7hUeHNWiT1qF",
  "key35": "b3LoyPcBRDF6AdinxPuQvayKSqRKavqrTQDCQ6j5XNiDmppXXwWBaSXZe6q5vACvgiFyxwo6XHFsNJX1U6MWhwZ",
  "key36": "4UrCLfQH2dDEQbc85ffDjrjCiodiM7ZLZSbpourRkGe2G2MxL95UvRhHYf65HkDMQcHJ4iiYFFANT297tWBXwPJk",
  "key37": "5DjBXpwwMfE1946QtrGzKk66u8aaYtjjL3z1LeTdLUAanc4VeNwXQ7ukrT9L9siTt3KgKsK6oCT3m84QPX9GKvTJ",
  "key38": "5BzHZPxhNH8kJU3QLmqJ7tiEqMwHavajvzWeX61sMvKZmc2vp1cmDEW1Xz8iCbrE3g9drb4ocuzZm6ZBNxkWw78S",
  "key39": "2T4xpFTRVwQJsAF8DWVSPrSYGwKFWYoNSmpZkcB1c4gi8h1Q1NFU76Nc2pRUoBifivN7suuitX2uYK5yeJAHbWoH",
  "key40": "4Nm7scy5FxFqZJyGRtZpVy62EKWSRaQoAv5AnUHkd6dA1PXFyDSpC28BhvhQfMH1kUYkWiw1h7GmSjKq9v6CU2RW",
  "key41": "QkVZ9dekjMoHvm9QCuAuYuBksHd37bqiBRrFB9vCoXj48JTuUP3CRf9aE5LAko8TcnciRzLwPgbRWQ5NHjNgifE",
  "key42": "245Vrk4UeE1Aeb6oGftJrhinpmY4jEANopT6FthyscKKcppPYqNcDieu3YMM1GJo59ZjSWxoa6dzq6a7zBgsGyjZ",
  "key43": "2k49e4BRYafqmMwjxjeXuNmwoN9zbh4xZe7iQJ8M4pWxuUqrsSqfRdgFkJntv8FtUgYwbmiZqpbrDwBgVHg7wqAX",
  "key44": "4mFgGSV4APPbv6JqePbLySn5ceCKJteYtLzeeqeNefczpbZFtD6qB3dxtpWq1Hej6Ujf2uHcKeKt6dtamkrtJdyx"
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
