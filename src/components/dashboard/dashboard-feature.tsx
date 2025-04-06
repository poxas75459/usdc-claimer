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
    "AZiJqcR4hLZuah8Cuv8NiNGAM9WBp9FVJkh3GpLkViDRHxkSTLm3AYrdTRuqBvL7T9j3FJpintf4MSg97sC7cK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ik4Zu9DdARBro7Jn7LUypJ9JWUsviaQcHPukjVcoYcVtAEa3wcne2S29kH6KsiPY8L9M9mYq32VCphj1x8GaWhG",
  "key1": "5XujmJoViwwjD656QcbezXKEFHCKKqxipKREFXFcW1ZJFvYQC3jmvQbmTXf28eFgqxUT2SXRC1wkpJgzENGUocRm",
  "key2": "4CV4nk8ZC9z34KNXxqd6LK9DDmaAdhTcQoCgh8YEuC4SoYqCunRf1f2UoLWfBNvTPuB2R1qnV764713Cp2dUeMQd",
  "key3": "31phqP68pcoHqZNfVF2Rb1asghspbboaCSU4RN6Q2CVLzr3DtcKyw7jEoxTDB7mVEuhB8WX4hemVuwWw4dGGMyHT",
  "key4": "4aGitovB13wSh536gKMcD6fEZeCToqyVawioCyCWYkmarGjhRQRxDVVqTwzNriSLi2ub8BK9hZh7hWaTHdgMsKUg",
  "key5": "4gzR7yiQhDNjMGH9VRPs5YDLBvTWdKzupjRHnD42bzKuNKt96G3mEGqVkr8wQCKcbVGPqa52eaQ8sJ4z48ZdnHiC",
  "key6": "8RfP3ukqpECiwHEnZg96e7XrYTXNHEBN7FDujNyYcCNWhUBKCQJrbeuV1LfuoXdbZz2E26juLjtcAu77XUjPym6",
  "key7": "UUNJ1Dp4i1VRwvw6kHuHP1SxKWKzXYYmGdCjDi4wzQF25guv8LSnw3T848rfCKWaqFFasMQabPDCaGt2pvtugGW",
  "key8": "5WzQQWpp1CRDqnkdi2Pjh7doBGN9PX9Q5r2eUTiyk1MjdNwnwBUabZ1unpEw18QZdu6GjDtZ8sgKRNx7AWWn5WNi",
  "key9": "4EL3tcxve8WdWrrxtPKHZXpNr3bZBjiPBkziRjnqqXDeHVGRJcEoVySR9PfywNeNPyiRPcykuDrkDcYQTeW76s5y",
  "key10": "4VRChB2ePCC4RK7vNy5UQn9Vsfpi71hu1DDaEKckNN6KLtFNvLwKN4H2g1sRCcFCzeRnbmc4AzusqNAdmUhKQPnr",
  "key11": "4MpAnoi2HWviHEYbbdPcVAJnn5RGzWyJVbEa3JnaezxdAiCEP4GzZEgWkidB8dmPgqKJCE49fiKJXAzTRAfma5o1",
  "key12": "2rvPMXswa2CxfiJQGgnHu3s3dsacJe8GJdm8MxJvPZ8cnGGmibFPb78fzQVR2QCJwpMJiVwG6GqGs7dyxyPEsUNg",
  "key13": "2bUnbKz3cA4zm9QfcxzWsqQ32DoXhqse54i9XE1NddvroZfFVbNEkfQNqrBqus4Gy6QTeqJtoq5kXbNmiNyZn2zA",
  "key14": "35SGZ8SY5hJmWCgHnAZm2cQf9zkvDi6Ya599ftxQndN9ADVvFHZ8dTWkGnBTkNbPFyh2GBPxf7vsNWKa71tLRYMm",
  "key15": "5ZpHV8HJfTko1PqpTd8kyANjqwEW7h1X2xo4kgkXBFKEKVPvo4yVbNfeufX9iTYQe3CFaBba29ZZjnGLv2dZrZWN",
  "key16": "5F9wJr68SuiYeVCE92qoUdxmLA41nCyiGmN9foQz8wxmRiQLg5YFPahVGx8fFY1nKwHhKu1AM9M3GhpctdwVbUe6",
  "key17": "4PLaK4ndTDH3PbHgFc3dFVsKa7sXLPmmcCD8z5NGv1naiDxb7UQg3Xr1hjHK3BT89vTs73Z9eXL2xuKySf3ZHf4W",
  "key18": "gJQW4mL4Z8wwQHrpGNrPsmRKUm1sJ9zJ5xKjmnZgWMzXmzBWA9bFhHgkFzzHUKw7iK2KLushqTLQBqf6UzHhN7y",
  "key19": "5ec368WyWPpwuyuZj3ZV3TKLCmWz4jL4KUk6c4PLoJSD5vNxtfoLy1a69U5Gw7v4rpdnb5Gmk38usnJm8mqnMccu",
  "key20": "5WQRd5goo7DueY4UZ4Um2AKfixud4xJcb5zCmSSZhwpzXSWd7Zy6R4FM3mfRMELKpSPr2wMF6UBZBSRgQikPU3BA",
  "key21": "4P74Qbz7JTuSaWNjdAKzyvxMZH3EB1QyKHZRynXw88JbXtCNtrHtxHhypENvUcmMFTxTBkFv5gSsW8paGPWyWW8c",
  "key22": "TdBgfLZzEb79UCSUSC3qGxDwN52zdcZn2qVSqCT2BHyUJRXjSt969VcThMF4AasazSiGcRyaM5ihNKcd4bj7SGo",
  "key23": "BaF697AeqnZ4rYKLk2WyzGvPDPv9RxDvhsHDtMPVwwmc5WeNsYUqAih9drgddJtmF9WjAEdPjS3RVADuxyCQhtR",
  "key24": "5c6hYVhK8KcLSPrXdyzDn3X6ZZLnjBZd1j9hjDiDiCpk3ioAa4DRcyqzd6E4Wgv47EdAtRnUA4DBsMgsXLff9C2A",
  "key25": "4cA8Ms3WyS5JrpHR2c7rogyWcB3NsSY2DfGVYShohYuQ1XYBGo4quJFiKFTGRSHxD5T7CwsTZTuyUBgT5veWuhD3",
  "key26": "TgmK4GgNZjPWK1GSXa4zrTPtMGQ95SWwHtWfCT94kNR7DGmtQHHbRBnXtY1L5vftrRWHbFaTUuLgMnQmXzHeoVE",
  "key27": "3eKayrdKnHU6W4nUJToB1cYCPortefNK4dvMfTBfmj7j74Y91kAuubpxAuesd11hBMSQTQLubwDEyiS2dridLSP5",
  "key28": "45YwNvYyqGq6SLxJmCBETqURY3cakGHC2koXYDpStRAZTh4YJtw7Y5SFrFDnEmddDuxYWWHgjEgGCt75kNKaymjs",
  "key29": "5Ne2ERy44yPAs6W5tWj5PbzXNwhivkNSWXKRA7zENmbCBhCytZ4GSR1ByQdonhpxThBb6hPpXBJgxsjF6CC6vbMY",
  "key30": "3WrRdy9TP6rdvYY73BR8cXXXGAtJctVyAKEkn9ddg8VeRiHxauixLHYFtJdeFYGa2aFZo2HMDeShL3xHyP2vSxk4",
  "key31": "4Lk9cVEAcUuEtbhryQJpSiQicmC4PLquptUkW6hELyL1VvZqcMhDaGTWXASfPb6mvxvdjD2hfEspaMcfdip4wSpw",
  "key32": "2mvRWnR7LLZddKK5srFTAsBfSWXCjJsbM12qpBB9orMkiz4T8WZ2B3jt8T5s6cLE7FtPViUR52VBzGHh7jiZs2Cu",
  "key33": "4GndXjvdof5BFson7UwSmRPeeJUWG8AmtVgxbPckPwiQVcP7zoxkcEoWLp6cKpzCMM4WT3z6LnoTF9sjvjboR3xq",
  "key34": "j6sMj6ZV3w81qj9etvu4UifvzaP9CXnjRxbnNQ1U5eexvxhKTsaGpT3UoF6Xzr83dYBzEYuiTPWuDcPZp9RkpYh",
  "key35": "3djqpUsveYiHMnaYskGLB4tConsj9D93iRoK4REjAZNAYsjk3mhYyDg5cFv2UQKovR4Y5dfDk8oviXAdAETQhDS5",
  "key36": "uVeJdzVjQT4hmV9tn1VH7TS4vT6jsuFL7Qwd5gqDTUZL9UP9cKS9yBHiAPYk6XWRgFLVMy1PqWxQyhRLyo3fVAn",
  "key37": "5NDMuCjvJafgsc9CKsTut6mt91KiFazqVPLNeBPpKKyeq9foJ8PcAdUVeAyxEvRKwfyM1JofMzWtMeZUoVucXVbu",
  "key38": "2w13PZvoGvanuf3CrkBGKmTiNMevxeMMRb6jYptW179eeB3iPCs73ndVSFr1xqUunKHqWhawx5vwc51cA8SQDesd",
  "key39": "4mUpCHmmQavjUfRmQHp4F98p6orKPhcvQ9CM8xXsDKS5e8E5cW5YA5MJrKZQi159aAooyEV1YZfcG9z9SRa9ZqMs",
  "key40": "bbM156UvqJhHw6FtGSiNw6oGj3G5fnKub9zEv4ddwVqnWswh4n8gm96gL4YftFwXS2trs6owum2GeB9inY7PeqL",
  "key41": "3Fc1CF2o6orcsZceK85ufHGGZf8QcwWLVsysGsnmzvNDJ2SGaurMMHdzCDLYbmL91q9TAmiZKi4Fv4hnS8EeStcE",
  "key42": "5YN94Xg5BoiVv1HMgbEfbPaPNcQuHFLfqpjt2QKnhhFQvbU2ad1d9orLXFKqY4yyHSLM73CS48sk33VWzEijhybW"
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
