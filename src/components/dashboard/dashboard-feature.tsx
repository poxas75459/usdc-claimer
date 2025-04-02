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
    "46c7sLSAk6xNetZzfqoYiNKeSE8U99pgoUy6ZeD7DQXGPW4TVD5UcDPscBWFPKkAmjaXn3yeRbDn5UGgeApvFxwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfPaz6JfP61Jnivo5cLwUBLLgs4XNrtGUyfziYm1Wb55SvLQS6t6sQzpu5qFETL24cVreEg5fuGM3UnoDFQGMjt",
  "key1": "4L52bG6zUUQ52gXe6yH4TtsRy9d5ohaN5UGGRJG7G24u7w1t9yBdC9YHfgmmYHvDjUjiN7cYRDt7dvEKtBM6qTYR",
  "key2": "5M6oF6356Ld38XgC1j2spWj3GztBaUvS2M2HW2iVNNUnys7FEje2zSnA3S5x8Nu1LipweFUGwxBrUPcSxagN9pB4",
  "key3": "3jrRebGQzwz6qazRjWzmf75Q7Y8gMvdEyjZPPCnvCEuutYMEA3Rz4PZbHDF8tHTNaBEh8koERUPwb4QM5bBMztyv",
  "key4": "ov3yZX92sMCSWH4GwBT4pnb9EmQ69MjNi9mkEpHfwwimZ35cN1C7UjWMzUWdYntAepeq5i9JEn8emLpnnxuq7Vb",
  "key5": "5jCxBgBnrajSCT43TfRPhvti6wTbraGcchAY7P9BgRzcHv4jsxXjZuoBggtLQYmiFRUotSscbpigstXhHhoVEecH",
  "key6": "5dC94HHKmL5HSaEaw1SxvV8Tm5UQLbLjHwtoWCuZ9DDxJVxTkRYcZy5yGYJng8qW9L9mfXvLuRPxf9oj9TkAH2hA",
  "key7": "3TUfWa9yw2LrgXYE6VXpXspaQjYfqPJy3VhU9hJUeKuZXBns3wHuJp5u7TjgvYggzHgewr7hLbBLZ3c5Kdvt44C9",
  "key8": "4dLTTx6ZRHES7HtGgWp53Uzm29z3ZGKwWeMFD9h5jmwhjC4RojT7sCSbKWkycumEv5HUY6TQ5ZZnWC3tjbsyeBAD",
  "key9": "rhg1Mmf3SXuboKS9LxrVgBY7je4VUie6sQSYWtRvD5HYV1zGV4U2kg8fu3AumJoTsPn6CB7dC2vpaDiUqur7oEe",
  "key10": "ZCRWSRPwGxTyUJ9yHyHAMgKQuhNxvVr8E23yQzv6zJJMQBMp6tpwYKmw7tN2TKs4D1RykeWJWSL81PBSrNjQSzk",
  "key11": "4Ltr7TKN7MX3Np6K7Ax39x8BLsDrwUiQFHdqaMGBAAEktpGzCXyPEMu3TCJDdiNPUoP5Qyr2mNWW9sJW7M5eGgcT",
  "key12": "duvdK4us9bEFCF6Sq8yBfQgZyKKGwSySYDieuZUqW2n3D8jpXnRBarKedwuUZcwBn1eXw51UxnHQ43vxCpVWaD9",
  "key13": "2WDmkv141ksQA9zBxUevypptKQrWcw4ckYWHoyrSSwE1rmnsbvTW6xHUkhYMpwutn4rVmJSpafKg8KdmKKTyR8Pe",
  "key14": "4royGGyW6LkKgtLfE8EMqXCEX9mcqffgEdFDVJaf1EBHiPDbUHoR3UPpSm3yd4yo3Mb9b7tVNBtt5UFHJKduVGpK",
  "key15": "2jvKuLHEwB67JwpxcE8NsyycotMsSUobENARbFPmKhDvuFum5ACBRsBfeLbiiNzhfthS5NC5aVd7yswEvBqymTF6",
  "key16": "2gyiAdspTfffuhr53dR7aCiVhDgnqNZ668duS2Gt5YEQ7heS1wZFCkwWdmCW8gSjvhDJnyCsWADCDtCpXxEsXFZR",
  "key17": "295FsuMDvELT2PLmEeU6DcgoZuqaxAQ7BpbppgqjjJ8D6TahEnYSGU4HWuA9CfexLD5qdJ3AyitSkqDkfr7STPgc",
  "key18": "4Z4PAGQWLMbfzTyP1LfXXogMsnkFiot6out6j5MW4n8DqAXsYqbiWVnbBTzXBNvea7epCnciXGhssifKSaf37X4m",
  "key19": "mRwBgpJ1ijiXWMXhx1jBkUwedRxcjCxu4LkEdXoqspXFadWbpj7YqXuLZxFfZngNVCZtSrNHmNESSMbT18svP5j",
  "key20": "5UNoJdM6oejiUPytcAbhEipUrWpPrzScDadvYwRe5AkfuY8AYFcdCLFvxfUxtmwTG9swi2MJ8XMPbmEmnNMqic3i",
  "key21": "2yWvKRBe8TrrEUnLkVuXiZ2BZZ6bBHJPbWb2KCEhXbRMdC1yh3spqTDfELAwPY1DYCseGNzqhMC8a3X9FqSuXZjK",
  "key22": "27iJgMbm7hHK2TmqogAv7L1vdHjnEkt8Q7KHT4q3UE1SQw66yA8VofwAcjwWnRUSNvHooFyMtYK1cZFUyRNbLccN",
  "key23": "359SP73ymbiHKq8q2KJBPnc8BvaXvBeCTUaRH4n9aWQrWEA4JotjEd4RfghTU3SHPuFD3pE4jNWKsmLBm7Brp14e",
  "key24": "2xofM5CR9JwB2rHvZAW2nPQNWUymBnnvb41dFvsB6d5iKAorjRgAVugHQJALoahrdN4UK6U4uuKBr5PNto8w7hxW",
  "key25": "2KjgFTzXFrKUB1igb4zGtiRpj57gAu6jK9vvDYkpsxAgpyA46W15GyVvYM2HVCVrujyfAmagxSaN7yhXmLU87HM1",
  "key26": "5nrXaojGrC1NU8EKntCWUvPRYh5wrBTerfh2qzXeGeju1WQmA956nhftBPnpo13G99vWuZ5VVWq49MW6tXXG5EDD",
  "key27": "55eULHRW9dqqCojdAVBZg5mrx3YWr5p96nPqFrPKFPf4cdirEVrGCZntmd52Pf3wSgBiQMAdzsiT7cFgkdUHvtMQ",
  "key28": "5jMUNjQa2Cxs35atADZtdRSn6o3scQpQMgQXrHNve26vvZif4i2t1ZAjPtAxac4x73haoMTa6Sv3kKiueuStzCwR",
  "key29": "2c5vxUy6yfwnyxxHWbkdwxEJ2uXPjwdMuqsvXxJZKjFHvvRYBvc3D5AAyfEj1EiESLeDBy9ZjGg5EZRuRhh8Vjry",
  "key30": "3AWdn3w9bJtJeWewN3epECTrXzycBwg6iy9iioEdM5eQqSQoqFvGx6Qe7j9GNHVnUtQX3XxiQjjQa9fxTU9R3me7",
  "key31": "2LHu51rwMY6dUEqpSb7pXuQ7srm78CJPBg9HgDjoWnjEGHMThdFNLYhHVy9U5zyAJ2Tdibi9qih634TMZjuZdJQ2",
  "key32": "3pvQ2qMVbGiU7wbCkxAk8zCYf7KF9v8MvAoMYZAaxgjhaM9AUGfG4m2EKWvDskmnNM9TjBaiMAa6tkiD5sGmNp26",
  "key33": "ukRVnrchbnYyUFxxMEDAVLRDGJ86FznRap99uHzRpzmRNAAiKvhbioUSV7CASEeNKhjRP6Q9CgmYwA2Ty3DtqvU",
  "key34": "4HjeqF1NySi8UpNE56gGDXjhV1ytRuVU7XDDJKdLQ1LQCBPhKzFJKsKFcJr2V2SYUCkeBXZmy3MiNrSec8vDP64M",
  "key35": "4Nt9uKxFY5mN63sH2oj5vXPDnYJTbyYX9y9sCMeVTLixDWTkiXwHA9ANka4T2rnZKRqj1A9dAbpa8eNKTzcCNjZ3",
  "key36": "4w1W9aYjbt8qrRYr6QRah8QuGNZcbTEbHPGSHg2T8dFfpNHq8kXNu8rjUBXVbMD7EwSTDkDRy43NbbsHQBAYcnFu",
  "key37": "YY6AtrgKaF8wUi6Qo2zdHkFmpVpibqCVUnaqYpNzSt2WeguVoJJznPEYi5aYgBfrZABaNAzom9ET7dMQdLBpQhJ",
  "key38": "v4jAW6BKnae6Xj7HJEJyjuA36ade3JtXNyu88xAHMfhqRTuFWd2wn6E5p7d6zhMYveYdk9KFYQTUeyamtSDFLcZ",
  "key39": "29jdPyrWjEWuieEAWmNAfNck6AFYuneMzB9cvVP9Yum711Dawobh3LWhtAycjhDnxVqTbpNUQibevjE5FhcXgia2",
  "key40": "58HkLhdCE91unXQfzAmWXCtokoo6nJyuep5rwwXnjzwAAidqtVYSJRTguSkX1FYc7GKJXfJTx9FKNitocdweRrwY",
  "key41": "25qhGy88icDCipqj3RvsvaXzUwXZGh1312AqKHGae5tAakWQ5fF6e8K6y8d7mqMRbaRNJBNNEcdf4wXdRiGAwbZ8",
  "key42": "3LAFnDRaJkbvg6rjXhJ8mEaHSN4Air8mTPx9aCpFymWDzU1mV8qQSt7Hca9hSPaqmATGnumZ88ed3WWmmgGBxXN6",
  "key43": "4kRMPuUm4aQpa838idbp5Gq137GpUTJKZpYgFaz5iX36jbWVsTUvZW4cJByMdBhtBmnopkiSSShRT4cBmjgwEKvK",
  "key44": "jGqDrA2Mifk2vMArQ7WFQ2n6yhcwQA486bJGFN86kEnK2dFMPGik2uhe9gMLwLT7z2evKyu7MDDbsJUizAfxHmu",
  "key45": "3vTuXZ7shXAnv4qdQRZFAd3XDNLZdqBkAGuBjMqzFcHRDzYRpksXhm8drdkfdZDat3r6URraK8wDwkdWcZXCfnmE",
  "key46": "2nWoSLB3a51wkL1VC7kCSHVvCksWZTYYr8wHfoQUQaf76RZ6e8aVdR72y6NKh77gE8Q7CzNWd5faWfjKaLUANXME",
  "key47": "4vyEqt2Ax1wheNJvmC3F1vKTmq5xyBKWd6s1ivrPNLeEnHD1faK6VNb2p7sPAaKEJJ9eEpDYPsR6fZbd67rbUbca",
  "key48": "4D6j8steRQXdRsAYzQn3BpNMjMEtrgyK97kRvz7A38N8MExNSzhZCg3LxCSA4mmFYyUCb8AtJ427GWj8Pq8VVYXG",
  "key49": "fEn5SAL812wEqVZAReg7eemZMJeyoKPcf1woucQPG2CwMCvkDvJEQuGHR2NeetzENQtnhkxdBFfdyuyM3SqxRzq"
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
