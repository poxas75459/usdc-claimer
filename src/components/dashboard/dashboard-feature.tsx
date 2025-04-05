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
    "kmLAdEHjtN3q6vaCNLknKkrtmWPJABPT9HBLKVVmnd8phxRx4DxqF4yBxNUuNWLYMVz3M33BX2BnvG66x1opewR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9rWz9hiPQ1E27UkWRshp6fDAWuKjWChfmYWx6zztvpTC6qNvCF6S21NLNXwj8oKuB6HLhKbZjkxXqvaUMoPBHM",
  "key1": "5xx2rn1GWTFB7s3HX5odfmnNu1SdBAG1hJbZ8v6h1XFXMGN8rfeVqtrwByhWJx4aXHNgkj7Z6Au1nVfAqsoDytTu",
  "key2": "2j4B7v6hABL89qZdnfFksXs7ujeiXoa2Fui4XyNG5s8UHqynrzd1oMXJrxwe5BSRd47aeq8zzCJPkCMAM2KpuPGF",
  "key3": "56xgdPBPNkxefBV4sFrYYjNvboMQsgvf9pynFCNirRAxxKPbpqUd9K8ueNik3xz1BnDJXjGgTH9MxM6DunxECd2P",
  "key4": "4NTZEoz6ncWSFToJtzL43xKXSbieJDkMtL8tSPB94L6bNQE3XrnY7u9kBFN4mzeqAP2pdNyWBH2EwDQeVGBCiSsE",
  "key5": "549wKqb22Wij412YhAyfKYDVhkjVxsZD3AZ9xtL8kwnrHNdM3o43Eez2MENioVwXBDD22VerbCaBLemTCgUC1Wvo",
  "key6": "5LFf98LPgXqpDJFraRygQpz6AAxkHTxz6dYGVxPWMAL4FfEHEMGEMvJ9RBPeex5hWYer6yA4e9cthFiZDN2VZLRJ",
  "key7": "2Luf7K5BHNFAC8sW2kaJW9Tj6KBfnmfzCzVZxxMxmZ3JmUQFWhhbXH6XCtmprxT5WxgEkMaXZx21PGtd1Ev4LLnt",
  "key8": "5AFpFfj89WjrP4zAzzMNzv1yoWXzFUBt9ebifH7MBiTwn4eS4ojg15eVHkcAyaJeSvBgyVgbWwUZSyCnKU6zyPES",
  "key9": "SuPN4v2yckGYVE6J1bDLTreE6hYCYQ8xXjE25RukcpQj7S2jrAS1hTa9jQz6ouj8PEz9bA9Z2umSvHgpJa5YUra",
  "key10": "DpesPGCojdr7kgNTcv2SWirWEVEJjLQaJM1otgYRguicbf6To8ozWMhePGDhTuLar5VZsVUXj8yLeUwKythBr2N",
  "key11": "2fVsmvaLkqS39aRAb1dF19Nu7SdagPwLPMPsfUx9wYnspRTcKvEa6tds3BWw6mS3dVmtC8geWRWd3DRFpxuRQSTa",
  "key12": "4Ebh6Qck8ukDqRZMFM8HjUcVPG2J4xjeaLCc6F1JQivUMHxemqjUd6pMtvE5ugTwC9jsX9gYH798xyZWjQN4Zdwe",
  "key13": "5xLF9umCWY2byZN6TK5TpERcxp5v2UMdxTjiUJc62gVsNsrFAwZznJrTUhV6cNMYMayLSjrot9nutaext8GmUsZb",
  "key14": "4WkUzPYdgr6BwLGS7m5VCp1VX93xuNztgz8EKSmuaYuGzX5YTQrNqigT9rX9X1Yc93tsyMCzDqJ9XeZv7ybK1Zki",
  "key15": "5sUVyuRdgyqbD2F69SvbVWMfSDeUCFm27P4kwEQPsH634rskPnToc11ijv6Fmvd777DDaAqenZ2PchKcrTm2YDwP",
  "key16": "U8LKsDRorAmkFGemTHSzWuuvtx8yzSBu7JqnCcBkFgMyo44x5mC86qhFxi6sHda9VvBaRpYChgU2dt6X1fDKzMY",
  "key17": "2Tryr3VDJ6sDgayLiFmUaYLFuiF4QGTXvNktAxjqHCtdDz1rBwonSQUU4BDUyBYwyiTgvyoA6QwmXnphTGkS3nuC",
  "key18": "j9K2PXaEBr9cY2jWAtYUr33XFibAyCkKms8PkdFM1ryZAFBuj4U2ByML9XbeXvfE3wgY5ntcbfrW58MsWNWf8TM",
  "key19": "4YyxG3g7ttUwtvvWDUrg3o9S57N95RdipPxJk4DAvwofV4qsxGY9Zr5k2MWkGzkwyA1mAYx9sj7nE1YHrwFAgipP",
  "key20": "5bqLjbmTMTeKQyy6hT39mBUYxd8LNeT8DUsFGeoSVzn3RYjSkuhx3HakntcMiiarf24sG2QL9KMB9MdpxcZtJiEh",
  "key21": "4tw9MmbvpFQQV2s9KM6fJjXgaA2Z8Yp3FvJwbmNjnqwFWUWEFVRsxmmnR1knyyEyNqpcE6TWVnS3a3AgDgFeNd7V",
  "key22": "3BXFb6P43bR2XRfyKZNXyZoK9A2JBHBBuSnZnzRX9U2QHAzjt4FuKBZikS79bqb4V577CnvdVFoBBnZc4MeX6e3G",
  "key23": "R827hdEj1goivC67x9h51Hemi47Gm3ijxMHXNnDq5wJKgvhFFz9c7C4YnxzyWKkygvedaBRT6NvXYJvzgJWZHvs",
  "key24": "3Fmt9bjuHLZacFTST5D2b8CeCDCizjYSvUCYA9Ar4B6diZmQPvBmwf6vFLuc86tnPey8bWLQCLS3vSygGV43qdv9",
  "key25": "3SwKdMSqSnfGBGqTnazGsCsiHtCYXr6pweC2en12Lg1M8yrn65JmGs1cUueKNNw5aU7LLJ1oLe88RGXPLhNXEgAJ",
  "key26": "iHJrQRWXYx88aB1FswMFD75q1BBhhg1UXAuxh2TcoP4J3S9RsGUkxfthqvBGjFPgQLivWmGDAEw4KsiBaoo2XUk",
  "key27": "5CirH3i8ut6JwX2KApuuxU6ALqBNHftig4mcUpiEmx1T77TUSg4YMcVr76qLBvQKT1iRJyFQUqu6Rnx8JUwr5BgK",
  "key28": "4TnjspmefsvseWsDAqTJS2w4f3mAcx2WPb2B1Qcs2aKzQZjFqJ8qnwpnVZ7xyAkZdAbCxA3NuRdvFEjVJ6q7tAYe",
  "key29": "4sxfzkJRXKL4kRmFGiHhLHNuryFRwER8GZ73fuRhDNMQ7VouDL2gLPhV32fhyLZMyogmFGRusevfJmwNg73fdABz",
  "key30": "3G5QLY9D1518yRF7QDL5Q2Xri2yTcJcv21kLZ1nSdN4i1w9m34yUktGYRKLQTiqbCQrRQKC6UQ5aNYgHb2kTsduy",
  "key31": "2bqV87bbsxEw7DQoPTgYMxRTuNKgynNuSmregsHeQV1qKhHwxs5g7dYPYwNgKTwZAe62KMtKDRkw4mVBx5fasy8a",
  "key32": "mEfmw22WdHtpCCmmq8KoEvuoHsAkcyPsVCv9PJ2XfsbKMnwb64nosNWQJHWKT4uEeN2VNZQMiswKgjxqYx25hJ1",
  "key33": "hHiNC3jtE8gvv82wzLHXZHAQ4M6LEDkknDfJwWWE8CiCKZm1BfHFQtPBWv7mLKquEmBtenZexeM3kfQrRy5MHbV",
  "key34": "2fur2jdy12Lvdj4onJpZ4bbn6WTfMM9F3Pjr7wL7PKU4xj2qyv7NpQUnj5NwT9NSYUzeYzaYJimSiEXnwBkrjSwx",
  "key35": "3H9N7wCagmMbLw2GQ4LHT7TTHNbCSWtVnowfYXvG1Y2RFuQroVq1vx6FvvHEroaCom8DaC4wXUJizWN1d63Xetqz",
  "key36": "28H6TeBDdx5v2WwoyTSts7mSC4J8YotuXi2QpXDUScdFJkp6CE1mXPEGayUYRn6Hs9sXGC8Ewx7Pb6JgZYt7nekk",
  "key37": "44fPfuJ8JDk616QhzbtP3jvWK4ZbkdgXbrtsQS1UsJ378o9zEnL8PWQXmnMXQvtwZSx7MxWWwe73mChqWSpyCvka",
  "key38": "3mCYZhK5XC4dLpE4jqbL7dkG4T6C5EURNKubCypdxHW2LvnHDozAFiyqCp7a7ifydT9tT7Fjii1CH5jSJdRETdZy",
  "key39": "i49jJhqpB2CcsUQPEYFxBEkEa6QXJQd1FpSA1DDFSMHz4PQDnhA6y9o6vX76szQkXYQgZg4LH1CEj626vdRPqiH",
  "key40": "5FqFmiXSgTHfjR7Efa1Yi7kjv6EJrZmpHorPT8gdpp78FJxKfp7bLEa1QtUnhm4nQ4vfk2HqDW5ULiHT3BacrBHg",
  "key41": "AfoUf85WiJGFLPmPSNsuzvjRBU9p8AaTcjw3u4UZLC94za957NRSNGWY4kRWboeBtJbqNK8CkPKTxEzfwrqeB1m",
  "key42": "49sB8KJhnbZrjAJ6NrkztXpzQ9AWbNmfudZCJhar5ZBVecDxXeYg89BdXgRFoDyHApuVa3ZyajGv5ytrwir592av",
  "key43": "4oQ57vm4KMsFJGuYq67hZLUpF6Nfbw9eDwLWGiMYcg2MGfWuJEzRL1NDmvmKNHHemosL58H4EBWPbyigrgBhm12L"
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
