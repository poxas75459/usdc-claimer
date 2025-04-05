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
    "jnuCBVgJ2PRLuk72gngKbEdtG7tNZjZtTB47ihyAsqx95GpNZUC9earf8uxanKjNNxWacwoZQ7PyErz9sCnxGLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bmqgHGA8LEYF4JQx8Kr4JNiM7ULmJLBzxLTMKcynYu8Rap3JDRPqECsFAqpX8noHVLYap8aZk7pzpdDq2cbbUdU",
  "key1": "5sKnUp3tPpz7boMz79AeJRYsv3sci6a1y5fKecYGCQxkV6Eq4FNaTbrYq1vSs1u6mVTHVLKR4WKcGHwLEGU9wV1X",
  "key2": "3wJ8X49iaZrXyWHaXcwPZxRx82fxojDPELD4iZntXyfqvFA9ZfV3aRKQuV3hzXwRySDPPWVJ9dQohu8Fcy4FCNmM",
  "key3": "3t8atfP7GVDXj2GqcPcLXfmJEBAHyW9a72YDmbPyy6fsoEgFEBvzaaEz7WxnSgcVe6RKCC3FYP3tJZC3HY69zxS5",
  "key4": "3oz8ZHQuGBnEDLjLqZGTFfL4QHkjt3aoLuYA5meQj1pqG8MhnoazVDxKh239R2Wqfcs2ynNPy5bhXhDkBG1YeB4J",
  "key5": "5ZriPoyGG6cS56tM3aeWBMKXe7Li4iFjMW4yfGhv7U8v1RoonpvpLvs8g5fNtogZTCXr7A8Q52MofYG84krWm4wL",
  "key6": "4Rwk62prpVYgBhqRUbAhkRMkdNm7WjCGrWXZF8NAXpQTjWm5diXdH1PNJBBGCv7zkDscBBV6X6ndQEDaN4PocgLo",
  "key7": "3jSsXiR87S55Qy1npHDLvzsV4uHAsFntZg7mkiZZ6fzc5xeBrJwZ2eUY35q2Z3n9ZZHmw553yoEN3CcYdbPUU4gt",
  "key8": "32bhiUz55eSg7yJUwTNkVqmVro8oCB2ifJcNsrXtvnXYj2yjFzFHY6YFeyzDtKFmScjEoy2XqzGrP9oodXxMoVe5",
  "key9": "3Hm21AwuVSJ9yvUWY1dtui8bxmKWANB8L96cCHF5JKMbP6TD8e8vcZ9dPymozyoJgTdmf8wSY9CqRyo5vC5eoxKZ",
  "key10": "26uERBDHmQTfpraWVzyTJvCtoooAbroUtE4nVky8fH6EPe2Fi2CN2RCwCGz8LV5dqgP9bcDY7q4oT7w1aGRruTNi",
  "key11": "2eAZ8wFeAYZ5EirmHFDzkj8QhQXU7Gfspe4x28EiHovV3huVtZZ8Zhr1kw27P31E4VYt9K1KrTDrAY7diqzoX1zc",
  "key12": "3xPB7QqYXTQQusdKU1cBizrk1RpYzMyr2WBn9cS8jkzUZ9y9TzTmrX173sfAs8Z46MqjK7m3cScCRZTwnUmRPb5J",
  "key13": "4qQ5qCVyu7L8zX2Z8BFJ7iCBwSTFC7HmbRmp7t6oAnvVo1JK7aeukcXdtpPXM9pWuV6Ln3wEhzHhKV5xxacPDJaY",
  "key14": "Bp77q5mUtnuajho7BXAxhvkUKnaLPC6xKsKT5kXrdPrcLc4uXWAQZL21u8w21pM5goG3w6dNWKDESqex4QVehMy",
  "key15": "SkGk7CXjQUMAu6cmgfCbhdfZcFzCYnxvQCA2UpnxguvQBvLXmUejzQtT8WybYgG978RCkqANFcPERUFQFVn7nCp",
  "key16": "LsTxcz2aW2zqGuEs48SwjBjqmYCXnT985q8pnRYmQQDUSqLEXLmeLrYLPMJViekvA2BeuiLsJ2GE7fca34pKebz",
  "key17": "5tZui5wfmJWfxNhRE7GU25pLLfcY7534SeNZst6e2ErfQbUkpAZ1d463kdUJkz2TGAsvfmFe5EbcSXCoUXEB5oHJ",
  "key18": "2F8FDYTP59d1FpVpzQCCmN42fXT4t1xGL6Kcs97pDxJaEeWxdczcmiMWGUezBGmY7gndb19PZKaJtYmysYeR1Jb1",
  "key19": "3XXtZq5E2qCTDeobLD6pTD2FcT4Zxo9qy3M27YCAEmeiBGJTzwj6wZLDQcEox4Abc3NoMRxsqqPoNU4xGm7w92AL",
  "key20": "3Mh9bSmRPU4BXyqZyCsoikMBprXnERhMkok51g8VcGizsFoY8EZmQya823HtztW342kjRK7Y5wUo9AX3ebUUeQub",
  "key21": "3AE3K3EGT537s6EuPQv4dkWgfKScBMKzDbiorjUH7ZLpP34rH6qhbmXYcY1Jazj5edyhpkDtipHfX353kzrsK6My",
  "key22": "28r1vpiwoupTpnftzYH79RTSRE6oqyipZ1GA93hiahDumqPYE8SW4U4APjJpnHs9rDXU3ij1L6AzYw9F634btw8Y",
  "key23": "4mTaw5Ug7s4KKxyPNZu4seGYKsMXBantfSroLW3UrM1VCcaGrG6bV1mMHYrL4HWvou2xRajfYjPetPy9rQMJKjQE",
  "key24": "4ecmmtvcjMcRNjn9rPcZ1skDVvnU1eZsnHCrjgLZB1idnpw3iHg1fxcQksRf4wGcTK1RXhrFNC1xsVpFNzVL75K",
  "key25": "Pxx9nf1muJHCd7ryntM5e4CqhsA8azCZpBaRYLkyXrJunpi2nVYYK21zfrcGrBVJaJMGBgoHGDwkTwDPpDA6Bar",
  "key26": "2SGUFTpu7T4tEiLLPdUdpxDpHm3vDnCVZrfmbhygtkRzaTDMSi1o3WmcUJZcnZWTp8y285gWXVEAejfNnSSU4oS7",
  "key27": "PQKtJvEz6JrCsAAQ11bre6Wjumc7dsw5326jq59AnYDPoWby2rR2LACgqq6AzaghesxDBHjPRPxUEoYJxvqmnsc",
  "key28": "2HnCTwkvYFDvij5hCAAt2djedLs6qeWopjjYcZxPWzC7zHqkdQPYXutTXFuWm5PBhx8vziW1PAzyVumCxDqjLCDJ",
  "key29": "3ujDE4ELsgHnVRSg65B8ScEVFKNdQvzY1D8Yvo1cBnSqpMXpRKepeEMifhZLATqTEhgovq79yNLkVdfeTitr4NaP",
  "key30": "4Yy4g4fAxNvuSqBdvSFMXr7XoMqzYVBM2M5RWzqsdcg5xwqFN1wBJisuqASazDYjKTQG8o4d4mqdALR5Da1XJ2Rg",
  "key31": "4twyU9rpLaefULCxQ9CN1vWzwGs9BbviYKpsv2sr3AnQXibs4oQdXHLxitRzq529rvLjVQWvQhxoguN4upu8B98N",
  "key32": "2CNa32tfFQV4DBfFhfnwAGV4rRzbSfNYW72bsRc9FF9g3Dm3BjwWhm9zk8CEaMZYf3Sy4M4twNSRzhi1rVxJ9rM2",
  "key33": "4rqTn1CfSuSVGkBYgUPoXu1rsLZKSxZH5kzWqMHA4nCJzwDirJcLZ3a3FdpTWj3ahXuB1bt2t6tdkyf3pJkh3CiL",
  "key34": "4TgjAWT4dLZUGgJMMdZzWz6eWK12cJWLagV4sUMR7hh9966ZVgoAGWJtdRWDL1zMsRfZCspcZwva2GAXR6aQQaYW",
  "key35": "6itBg99vH9keAsrfy6ohoNXdwrr34LPkKJm26CJdcQK8N5zV4A7VHLzfdqGmYxfWSJF9vch9JSycG7ryLoNfo2P",
  "key36": "3Nond1YJFqoxRzuJothbxfbzxcRtp2qmoJRQDp2f87nBHF4XgoikbezUZHJuz6xgvxpPbgbpvDHRcKm6qE78dWuA",
  "key37": "644yQBoQwU9dFLQXtMXwXbjCYu7r22AZ8agQHrSfJ1CPrmmPE33ZF7VhtC5WwGasM5Bm1jCwr75oFjHRsCsTVSwn",
  "key38": "2Ehc4mSnNKNFqGTtF8yZKN2ZGPWkCDD328vKHugwNn9GRi3xq83gzZCwng7Q15uhcLavr4yTh6o9AbjXgoRgQcMu",
  "key39": "28Z4dj854aVnh8MiuN51vdYFVBjP91RTfd6hy327fj8HSjHwLGVwiENUb9USmUWDKqPfALKLXZzsk2Bhj6L4CynC",
  "key40": "5BVyFwGqyDFbEBPA3bP7sWRBf19NYrL5Qzx8ePJNc1q65anNVXcSg79hV8Zyb47zcyfHv2gNF9vNQ97JhwgEoKTW",
  "key41": "55tPxzRndAXDfeN5usAjcm28fDfUVnMS4cDTg8hBiKKTvgT3skEb7sdGozz95ZUyyZo8gfjDaHrKNaLKxAwvm1fD",
  "key42": "4WhxeSMCQL5xhb6cjujGMFf8LpaKYPZZZxgDZWWtDpzp8LQY94NPGTLmy9PsN58dgumrPxaKJJTq7dMxffdVrz2W",
  "key43": "3cZ4itGGM1PLy4T78Jk3voHg7ZWd8KrESqrw6yTheCTjMsEPHurYDScD2faQjnvkhRQmGLHY4HH2RpQ19yE8VSBh",
  "key44": "26xAxB5w8hVra5jWxNtrKtLJVRqMqaKqBvuYrWGMwWfvghy7FtnfxnvLpZ7vDwef518D9LizEQTqnJzkBjdh15VP",
  "key45": "5R2PFf8EsqMFobhWFSMJ3HvgBnmmfeVsyt6JW5RrdfcqMGLXEtLJwAyVf3k2h76PbkpWYx9HCNYmZA94t3ECPULN",
  "key46": "3YFVPBbaWB6qfAzZ9S3jUr3goYypxUs2NUuBjSt14PJ4gnnMsdn7z2JgEDYTgKNYBQmJgv4n6RTVLhQMxrWLavt",
  "key47": "ugSMmac7AwkUwjTfwb4vr2sNDUoR8xFdbzmsD5AX6opfjjWLVZR6BcnfRB5FtxbGA8xJVZk2qBuhb2VCUoq7A6B"
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
