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
    "5Nsom3bdxLLfSBXmM1Aopvpy8PFdtZUfiJHaXDbw1Fma25wJ2nkkwderJSUhefxfJfZxJut9at7nMEW74ZhxdmHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JMDnjCHVWoDk4vrY5TPwj1kPSWU8DcAQA7MQ2WjDUSpfLSY1ghePJyjsA4zumw1fyvww9g84yNznTXLeRKCVYgr",
  "key1": "ixRi7iZkfk2DP71GyMUPY9FXGiiwersyFdZ6MEEJjEUGjAWXDNHHhyFTeN4ARHd73SBepVN7LfgfCs5XNjVwfGv",
  "key2": "vRKhiDnp8epxWXxUWT8A9us66Nsh1re6HrVVCR9gaTNZUKhbwJVJtVY7C3u4ubBVfh1t485j9tUxVGvuQRcn1R4",
  "key3": "3RpyGw4QRK2fXvejbQnNCkizhbZ9r1mAQ1kxYieqaeo4cipvxM7nho7gRMbcRyXzMFaNSsDYw98tSvjXBzCsi83c",
  "key4": "4bsJpufJH6165LQrvD4sCCGjLnpYC6TEJjW8AW5AmKco6vU3rnxPW3yHNjHtLyEe57pNRQQiGCjyeWJC9DEL2cMD",
  "key5": "4DaRFmYzgQS1WJT6mRPJJ7ufdZGCJvFtUqoQsUZ6tdbgaVTkTP9zBRuAjkiAAbwZk8NzMgAoPysnxqi8LL418n8p",
  "key6": "4K9B77kZNsFKcy839KN2m2JSzXMXrwNg11SSZXY2Xvi9QGaC7u1wqE4Toj1YJmWSxqzVXiaYpxbRCgyJRmkxJp6W",
  "key7": "27RKBqvVZ1MQqQBLVvwd3KWP54pRAaXqM4h7j3BnJLdw7XbS1bdLUx4zUZFE5egmjJWhGmRu23K9MBSNcGawU1KH",
  "key8": "3ecjmTC6C5Hrpnrz7CEDQSUbaF2kh4UtYmoHkNwY5E8mSi9vJpriH8vHPDsqA1F519JEpuek5ZrPaJtw371cq8rr",
  "key9": "5q9MN33xjPYrBqcfJsm4AdJTrP31T2VuzMQGe96NZdfqEwXrBqMwkcabsD3ngZPR3ZVJgeMZmwGzDoxjxGiH7w4q",
  "key10": "3AEqrUc7rfFp617nsN2DjjMUQxtv7CeiX9eDxF1f6paCpj2pBqNkJMGupqECgJzkTqTg7PTkxGcqERhwJAryiEAK",
  "key11": "7cJfWtbNMcG5D7RQSgVAtUr1F7q2bnJyKb6nLxqmycYioG3MyMBQjZXZCKTcjjaSqssfktX8fUgDjtsfDV9ehU8",
  "key12": "xnDW6J78Ln6yfjrgYNx1ioFPWjGaEbj5pUqagzR14jWF93mdKNw9YwPkTugRS4LNP8UG7YbTse8uViCp3z1YvDc",
  "key13": "2SVaNAGiPqQBjebr3wCY3MUgehTx1ZBgkBju9N6EVUZWW1U9qYCoVchE91GzvQYAFpSX9WhiZx2rUCxn8xXCxjdD",
  "key14": "4wDj5soWBBGqJEgUSGC3CySZc9g62urSe7H5VsnjsFsS46CxcPihFYbntYzegtMuHPRa6izfR6qXFALVXUtK1sMZ",
  "key15": "5MxjnrankiMTpyjMTP561zXdEcWgbqx9nstAaTpf7TKUQxyRTU31WQpV99QBR3i9FpX1NavnLuuYmHmFw6nKaB5k",
  "key16": "232CgJyKd8zPg6m1fvZfRDzeCBA9pEMJJUFpSL7uF32rXW9zYgS2mBT2PnXtj6zmX3YfKQSvu8QWP5ps4ufMCCUZ",
  "key17": "38ss7BXmVGsyfncZSRyY4gc7WAizeqiajHgakQmYcD7ZPHPJeWMeUCLDTze7sJRNoyyZmKJ64RDoWFVvRta9HFEV",
  "key18": "4f63irTXZ96fdrPtYba8ZfokDPN8bgqhUmCH96st27DHT5u7FtuCsX8dMtkAfzgAjtNUsmuxV4ZKMznH9gTmb3vN",
  "key19": "2K7qLnt1UbDGyyG86GXeFjozdbAPg7d9wgcZQvy1tVoW1vPaviitWgGLZ7w97R8YsexK2kSSSs4i73S3inf51FMY",
  "key20": "c47AeTxrbWuyLKNM2sudqAaP6UQLoG6wRLSVJRiYse29A7TDDM7Ue51V67M9p16dXLai5TzSd9HKtBdNBw1ktvq",
  "key21": "VogiKFP1tH3ok3ZuGZG4SuAzo9aCTEHarCqcZY7vXDrbjqJj1YKNTaYuVsCJ36XQfkwFDXx1b8pek3eqFATgSu2",
  "key22": "4EhupjUtsWoYXHY7hua48Vfvyix2iDu1d5Xf2hCjMAa7P5vbDwYWeT9rne4RZtYBApu7JQWTmqQFoqe5ifJ1yNUZ",
  "key23": "saHtV8B5z1UU95WnG1Nc3tn6ncGGgsMpgwksitEDKT1bZ12yDCwUpTfTj92gvisByuXdEkgqWdyy9qKDngsh6V8",
  "key24": "3sLZbaM85BpfbM2kaBaNXyvoYoZfjXt7WGaQ57jzsqtpm4Cq9qYTchPM7FV1Tv6n8r1Vuo5dSxr3jmh6rPyApPqp",
  "key25": "4AJSrMR2xP7kzo1hzerWJ2WNXHriEApymXx2MT78mkxhx9TCJz8c2iohLQ7Pg3XgtfhPCLqGfSTv3sYwRKMDtU3k",
  "key26": "5nmAjmV6E1MsY9UM5tMCDovtCZ9xHKqmcScvsN9iQ1HD9pfpaT3U3uBvDRMGdorJDQttdnKhth6jyPR8iVBMu3gE",
  "key27": "2CSiXGQUmRGkVGEutQPUqMuvAQVasQiyRY15Z1U5iVK5hPUZtadaRbzquQs4kzZqUz6Sgh11YS5mLibzynC3TTDW",
  "key28": "48y7rwfZGBppDcZgYLqDBkUAAiLUft8aakoHzmD9kvYcSwvHxHGCKt28VsCAQx78Vi3YCAm7Z9fwZwQ21uW9VoDg",
  "key29": "5GtZXn5pS7FFp9tTKhr7kcMU332tcbzUawF6y5AHnwxju2rSKh43MSYVEHcaXV1DE2PRms6NUywtFtRnCVwVBGaa",
  "key30": "2HLxUFAhBYVdWBz6pZpoxZH5iEobFU9Wj97L1EE1xCTUyyM2tS3e3g4v3Sit6vSbaLymKnAggSwGbtMwjHwWxyPr",
  "key31": "5tck3QPRCJsJqENuxiHJdnzcboDeumCXez1mLPu5vNrRBygV5HdWvffENimeQg6aoPTFkE5uGfGZUKkHWUmhkioT",
  "key32": "4Ybz1npgPNNyb8irqspFnfMVhAF6qwshRpdhWgR67JwoKrJTJgzCqA1Yq1EcP9bD9rNFMec9MuUTEuX3euyk2NHd",
  "key33": "PapZFj7rDJ4PVNTfJGtZgJcYXPySkzzTxa52mEsCMPDkh4xGAHMK1j7XYuLn7uhhK5wvpDvVnBALnGZ4Una7q7C",
  "key34": "26bvznhjwSMDtyNaoj1XN61gLWqFwK2rUEAwnLgtVPP9C6iySEnnPqmR88mPi8E4Fp3AsZd6u7YDMU3HuJavbjXm",
  "key35": "3bEgGvzTQoqvwamFGsq6vmgEVqrcSBRtYWay23zT9pgoik96M8VueyD6hihegsdFUJDZNaKVhg5PLEwMDAgN2Cpr",
  "key36": "35buguhwHuJpUweh3HYhUZNGZtBQXp3TzBy3rLtfXdwV5pycv77JZunPrKY2VWxU5F8CiBGugGAfZZk4s7dyxy2r",
  "key37": "5ucei6popaVfJ3hgrjWeMivCQ1oB4TWJ6SJy7HpUcnAAYG5YXuUp6AH1TZyhynHHepCSPYbCmVJAnrPLFf4bL89W",
  "key38": "5p3jz3ALtn9GirZpRCad2cjsvx5xKwLhBsYdafWGx8SU1ppRneiQGVEXgrAjc1TnR53QXx3WfGhcT9esuomXGrsV",
  "key39": "wL1RouQYpLqg12k55PXidtr3Vg39dJtYxzRcBR7hYygVsqEHFnYqyT6BsD8JPREvWYrsUiiUgGDsbujds7Fi7h7",
  "key40": "tpVoUFYjo4HE7WUC8xYJwkUGXi6jchSz9CncVncXH9dTjDMBKTiT6h965JARXP5B6HAawVk5SqTCd7aJmx6GyCR",
  "key41": "5wZhi6CerFGx3xieumYCv4nGWL2ySqHytNaX7a3Q2tb4HfLjCrEE7gTEwrNq5RPwUgvExBq1h7nwsgk2p5K4S382",
  "key42": "8BBi81ddcJwwP2dXnGDfEX3VhYk1fsZNLWnMgFbsZg7vYnrvqbda46T3v9XvQ4adMajNjpT8r2feYEMsp9fWLMT",
  "key43": "48F1byie9FxvfrMG58qsYqDR92u4PRujXcX6bYUGeGEJgh9y9rnMej4nvR5EbbhKQCKbzgUVgYkjvftdoDVSTWsD",
  "key44": "vkA7cgS5aWXibbRGsdF2dDR1biQXoL5YnnCnoGiUD9fG3N8zoRsoZXjX6kmyQ31v6yKWH18171y5NYB66n9RPMu",
  "key45": "4ddK74gXe7jpJBLvURVZWdVRiFgGRVLKdXRGMTKuKqEnrrnrN2Bu4KD7sVRiVWKNQ2ka5sUaWgBKK6B1g7uynfvs",
  "key46": "3xYnV2vE4vtQzYGu669E5c5bkFF9xE26sZi5waPdTFs9A6t8FQtkcC33qtVhNNESqUXRk8TeN9THkvouBcwfd1qE",
  "key47": "4NgBooGNW8pV5syFS32iWZgNArRcsLCC7sKkUs831w7uN9NE6P5FPjEQyv3MHfTtZojaP5eUsH5YkCL53ANAt7Fy"
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
