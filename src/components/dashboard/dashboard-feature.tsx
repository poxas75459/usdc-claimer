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
    "2KCzVCbJXantocHgp5qiuRNdgyXg38hQX46xcos2iBC6hPqA9xe658trnsg74jin7au1BH2uDFd2YRGjFQRjVMib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DNdv5uUzFmdtNFuoTV3SPG7DvSpnyQerkeewdLTA8uwMx7W5BMuxB7SLhEUp3k5haj6UhU5NExm7u8qYbhPjuPD",
  "key1": "3rFkmxqsX7Lf2oebaEKikHoAppf5FVQk5oHpYrwV7XZJvrRtTTGeobxGheX5ifXYA9Jwv816cf3a8D7jqcCYHkkD",
  "key2": "4PxDJzkxnkRoAMCXPqof7c6N83E6bQ6JPeuDvorsVpQENvd6hvgop3ccT2mBZd4MkFfMbw5qFedemcEnXUJpAAKx",
  "key3": "3bWWMwxYoRMvsPkcdwkgCxF56J8e2nkhZcdMpJqCKRRbRUfDu5F2Afka5sqgTAK9DM31v72bw7ckyA6dFRXu2hLd",
  "key4": "43ajB521vzzAUodVvSbs9gRWoiu22BKtJoA8rpwF4CRJs9GNK6Z2NBNFdk7KPvF3LnbA1cQ7VwmRnd9WBrFRWHMJ",
  "key5": "4WLpv4mNmE2dd5WbFGjwhFoXHXgNfA1JVZtdxGTCL9HWx6s7yCiwFk7fZxoxf9VzuFWPU3ZXbBja11e1EcJs8faU",
  "key6": "Nk8FQL3qktqTDtqibHtAxMjN1xKbxSircCcqgELDYjGEKWzhcHgcNw87iz9w8Ysy364xuK2eoSJKLRpAbipNdJh",
  "key7": "4GcUUSRUmrm7tsMqS7DLatj9SYWAh5WmEfsxDcJWNrmhUpM9vUmbvXKjpKkLp2dUCWon5kfQtzzU15bMRnarj5eS",
  "key8": "4iZ7dS3Hq1Bx8YoG3ULfj8HeJQz3Uy7kfXcR42BW6oCBoc74aTrvGGkMpoHA6iVfdTJVm88Vmv1JPyhvtYdv166S",
  "key9": "4CxJZARLNZufBtBeQowE8XQvSnane2UC1N7StwcAd48X8Zx4SxWX7vwyWZuEVRyhZTgZmgsjcqYZjE19w2EKkTFL",
  "key10": "39ryArad21DWV2rnD8fjLx2nM1kuUSHnDgVMYvUjvVRTxUzMmtCKmkCD1dwcXqxir7hnpsTSWZ5R1tYuTnP8eqxW",
  "key11": "FNdw1FQGfBd7KXK98FAvzUbFEj92841mhWAVc6CvdifDcSVu9D6RQjywogKEYjib4YZL1i3yygsrbrEJfLeDmBs",
  "key12": "4R5KvaqhqY3krTu2JFg43MCkNkohDcm3NFqRjsFBpm25srLyanwDc5mBPx5VXuEcs1Xo6ADzUMaJ9XWUsWYxA3Bt",
  "key13": "5ZRwadpSjLDCYCwJEnQfQ3kFfv35ccmNFg1fTSWpL2fwGvSXaLSVGJngsJL4G6HsHaR41MJQHa25HLdfuEtCgbwu",
  "key14": "5Y7y1ZaGPn82DSKFK71eEsczdAxxnjWkSubRCnTqaALPYArP3454YwtMNbWWUwBC2wUAaTrkArHDCHX6uha3opdq",
  "key15": "4c2k5hcye6BYTu252To8bcaF9qsvNXt7oVXBN1rTXqA7zS6y7xUYuQ66jhN8jW9vAgpsTfiDcaeioG46kgeBRui9",
  "key16": "4CRYxuyb2HUzc18uMw7uY1Nb3ArGvbqQJNb4ntutf1f9uaehrVF6RycwmX9qwt4Rv14To7RnqR98iPasRh3P3RcF",
  "key17": "4KWdgxpqod7AjSCzBdZtJRcyzarFtFbKy1xUYv1L4tpkEXhAmdGW82LoWRuhxuDGZgkxUpkoXH9oN5TsLxeMfiNx",
  "key18": "56veavMu1uuwtZCdiJrcE5NC5ibDMzyQQmQHvYZVKvFbMkLz16sLUMWozw1ztDYrnnc2WsTXEE4Pj6KnErk5B9mt",
  "key19": "23MxFGvWumPmMidDmuNb9fF6TdcwiP22wUN4ProAfmeuWCWUks7yEadcuLUTSH71gL7X4AdggEy5PB3qp9JpnWdH",
  "key20": "5VJFdJNgtorQyUzNoP9C3f82FD3D9DrZ3inSSx92PNz6SiT7N1MyZzd7K9tEVyzFsJNVb2i9e1fnwopwMtRCD27m",
  "key21": "gaw6dcJHSS7eYXsnjDMDnq56hi9T9kZLuSpgrN8Vr9fxYJFkngNKhmiiffouEJkZ59AWNHKwGpHo8qNZGZsdfBA",
  "key22": "nGN1U8qguDxahdifSaqrGYft9iStwLNa2xgCjsp9Zh81gcDRHJ5NVcJxaCSneGiQs9H2Q7iKY7ZswahSEDxdLPY",
  "key23": "5Sazmbrvw1CbNDpN6sVMQ7jpSisBM5jvaNeQus1GE3yQmrDT9HtScrCYnMm4qpx9iBLRdSWgzj4yEAVg73yVc2B9",
  "key24": "5axv5PieQZebXm9Wr3t4E4w2Qp89FiEzqThjr6UFXkoU56eEm1Nu59u39ZcZSdn26CwzssULNtQ7CzH4vmsmkF1X",
  "key25": "4fAfstC5rN4LvuE7VPyMS4vsZAMwsfPwCvDEPLLFAsi8KYu8ZmxXX47x7Fz47a6GKNjCaXUPoYARdHFagokqFPTe",
  "key26": "5ugicCs9VvjCA8Cih2EMwS1VSsPRsqyHECNnTCJE5ho5N9QVs7LirWZGBJdTuZMosoL2DKYK9s3Qj9NWt8NyqDDd",
  "key27": "PrGTaEANezYuFVmRoyHSAnfbk8jk3QKtRSxq6R1E6omKucmLyMiHmStrqakvJRpX4WNi79xXorRD3YxXd1ENvAB",
  "key28": "TzEiYhQuXr9m4LGsYuh27UDLpmAwK7wKajTfttChNdRA6YZBxW1ohWxCyzR1Lr2xCdrHXzJKp8sT1sAop7vAxJT",
  "key29": "5eCDQwPUvZmR2VYwrPNVjWohSGcrX1i95yNrRNCJ3CtJhTfpHpHoUdqXScNoMtY7uQxWH7TgAYy7Ns3PaPYnZjuG",
  "key30": "4y5y6vPxsQFeuVRZyCFfFGTzuyDk5kx31Yd5nt7M8YmNjTSQkXmWtvVjmnHgizbiHDpfnSHfLfLz8M4HyC4KHQqR",
  "key31": "46bD42SWArLXtk2jbn747Uyr7qaFwgGhW1D4EcXY4S78HWf8G9WdMuLmUXheBkmZPTzKBrBTWdrtmiPpUaQmStBq",
  "key32": "2a6ja2ZaJVmMmSVCrz6m76JHDXr47Mngj48GeW4RXjP8ioV8pxfs7mQnvn2B7GQJDvGZky4fsR6UMGxDjCfzEeYS"
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
