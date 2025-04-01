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
    "5vHTfyidq4vKumjHAFnb3rNkaiqpYXnwKk7Mu4DzzBBTCXY7Dp47DAGesJ5jWvNmKBWYSSyaUNSMWka2FW4jh7dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hXpzqNm3mD1vtFqpxcpgCpkQsV3ChwoPT7enYD5jPz2nq4uEfFFSRY8TMu1fsjvssoZGz79UFec8urC6NtoE6F1",
  "key1": "5RfA2KpdGKNxcBMVV52w3dZAUUyDyy1wDCdSCPyibeqf28UHtgcxp2HEZ9VQoL8KukoEKhr5fWGT4qU1zmLoNWmz",
  "key2": "2uDxRsfbm5YuEqZJTy7Pf4pd3JChmtT5UCpxyUWNAAL3Lnpf44o4ScQRckA41jXn7DUpXidDNDCG8QgvrnzdUriS",
  "key3": "659y5ouZ4SLwbDapoWQK1VJALJKpC7bDqrca2iQZmoQq8X9n2CzYNvJMBNdY6xYXgQUX1YdsndBzJaobN8XdZEHR",
  "key4": "2MBubpTqfBs1usadRyqrBQerA6HxCnBRUfAKf6spACQw74dAwyqmHkKKHv5epPf5uWB4yAJcvKA96Gd5u3e7J72r",
  "key5": "5DfkY7FiMz9xyKiz1K6VfZJ6J9Wbn3xKdBoy8rCEn6wdaT3XBWVP3yK3mPpJo2bZEYwbdc9ianJDsfLw6DMepLfm",
  "key6": "2fLGHdfKZqZ7FJUWrrkWqLaexT828fr3BKrBc2VkpQTjK6Hwttw4G7GRcDwTGofeXEwboxyWL5d7PKV8dDFtxsZK",
  "key7": "5WxMD4KMUqZSmZHKatjvAiKCJgo2G92AzoPMeSngvt7qizBGeafKSxYK8b5mnfpu8p9XHiEWQUnFEPiTvEF5VfW1",
  "key8": "3sYijZfn8ZNpZJt2Q4eziocghVink5i7Zp7uefAa5F4KrUMgUfchNp3dWjggAHHVSBR9KqLfeuPdiMrRCtn3SHYj",
  "key9": "3VEXmCHVFgS2jfV8m6YbTEcG8VDNFcHbWNBkDk6JA7V95uVyMRX4VtuwbskBsV8CGMR7st781fgYxZ2ZgpFLCRhH",
  "key10": "5xsQ6kggYvdJzEmgVQS4tQ5okD8CujvtrarGzY9Qn7nCPjF4zXtqRe3pyrLaD1Xfuji7p7NksKGwuHyAidJd12si",
  "key11": "32dcBxLjjXbktFR2nMRgPrD9txpzcQFt1s5jEQk8XutEKdPi1Z5JGgkjBq55WK21MoDzUqoitqwjkBuMLGDZAb3e",
  "key12": "45w2Hf7whSfggd5ZN9yUCKHCYyCGdZY8UgY3U3w9pYQ4AhBPRn11KK1yVdCCXVpNtd7pz2ymndNvmcXQCBezcMJQ",
  "key13": "255goPsGRw3DogPear3pDc9Rf68mB8KRQc8hyCYXMAQBrNAJzqKhXPXC99rKaGG2rVakWNmw21NSyizC9e5K731W",
  "key14": "2MVV9AWFqpWRUMG3R2xE4KgDarZXq6LCQ47JWqDGwLUHQjgFBVvQu8dbhhc1nJg7LnQE7vSGU6Hb1iuij6ASV51v",
  "key15": "4EqNq91NqeB7PsHza1N6viqzbkXrne2F4v55J3uwFpsQv6zNghj9uWj493MQ3unKGHr2n94KskFVbq2MGuCeZQwM",
  "key16": "4DTotr4yNFGKxB4gHiDmE9SR5JPTRQghPxLR3xVb8LUHvButKXtigTp3exqaAmNF7YHxBBrYX2ZRQ5FaVKNmifHo",
  "key17": "3TteC3vRPdqwkskHRaF2cwjxS4F6UvNDs7XFikYV69obR8uyUtTTd9dFBFB2StPEYG4eu5nZNjmakdHfykaB786y",
  "key18": "2oBGqCSXeb8rLs11ymcRrdvPM1SYq8tZTjAdG4o6x8zCiwNHAnd5hyi7LSTPo6RFCNXtJG5S8uyweZQZVZ1Cfsdn",
  "key19": "39STqqNPXBQJGhV7Zkd4RiDrRraDzqbhj5z7jg9rf4TAT4nkWdz8k8Yxkepx9y1j93Ct75fyBFvW59p45iNuz88o",
  "key20": "3DmgmCraBSwCatasmejzQaZdqHkogs66jUigNMybhrsKhAQCp59WJLJBwSwt93uRhQ5ZAjmqSZ2FUVC8NDpau7z7",
  "key21": "3VkbWRNnh6s5mpnw8n7pTG2o5FoZLb1dzhj9ZpR225k2AjQXM16TjGv2cJP5dhweY5jgo7HJgBvVML4WGfu2DvrB",
  "key22": "2N45bDCUbSLsjf26TtxjYmNnHQxAo3J7ZkHQLNqyA3buokbSDV4TjvdDRpNEwezmhjnwVDg32FAw6YLGXRMBXtco",
  "key23": "319ZGQSbr39pr8sdw3yZpwdiriPLC6KR3QYChAKq7ZBrUc3N8fE9E9mAzhf1iYYmCQpsHS4Tf1dAwxp6X8mEYUiJ",
  "key24": "4iLumgVRxayxhQ8gyTNh9HMACm85x7vQsrBtHMNp8775VhjUmpkFvzAogxT2HNRM4p1qg6pXe9MDP99FrY3Vxfmx",
  "key25": "5PGwuKDL66qjcVDnRVbiJi8DSFynfWndx6SPaRpWkscRRgzj5xJDs6UxiU9xeLZYMLCbKPQ45BzkgJfzz5ZUwrNd",
  "key26": "2HaLb5urp1zAveA8digoHXBLdEP1Ei2qx1pRmBSJMkzsXouioxjkWtzrD199rxVzYbwWUJ5NTMtqh8qTTzznt5H8",
  "key27": "2ciHWW6AzwGVLUWmApcKGGrW2gQoLk5V2cDe3MMVWrSfaZhFijbYGQw9ZmfZCe6mPi8X2y9EVA7uwW2mW4V72aa3",
  "key28": "2GcCJj99mZVWv6rpfVBLrZnNt8ZFj1UgCV48mjwDTZf1PWGgfQrfphZTj6mgC5GBZEv9aRZhRQNz4tn4wsvq5DbL",
  "key29": "3XCzxg2tV57sYhn9jg42jWqSXPpcNgF1BANs3HJZJ2nHK8sDBt6KqxnANpwfjHY7K5NK1TAEtBrTW5UDrhVnXQX2",
  "key30": "4cuGP235ViMGs9sgwodwQarX9TrQmbxPNawtsnQq2wFKVPsEvdoLD5ifuoB8epZBTVtGnvJupjEEasdxYZNsPKLK",
  "key31": "21Yedab4qYoyHox2E5oW5tdCvkW4HH4fEEC3wA74P2M11PgU82BZ1ZB5jdocCLj1abeFt5pyKyexJN65FVGUGrgZ",
  "key32": "66tSSS1u8GQSG2Lr57548RPw48zsEMEE6vfi8LMZTRHdjVZh2bLe8nuc1tFKstRWX6BjrMCkKzigL4gJu2konzYX",
  "key33": "2NUNjxsZoywjC76h3ctugSiZ22Njt2aJBPEYqqQ2AiMWSuoiSASSTUiFoD4mUP7u9ihPGx9QEFuvLwXxdc3AFPb2",
  "key34": "3voXZL3DgmrbCeoYTg1iEJ2yTJXTAGNaoQR2W2Z54kv4mPTiUqMUjfJdCf5VhUKniGHi7W8M97raw3YACU3CczDN",
  "key35": "65UNLPs6EiGCLsU7DtGtwMvt6ZNcECJLE7BK9sUg2xmaGvwJg2MBaiDvXiGZuVqeQ8vSHMKd7oyEYc5kYnSNFehV",
  "key36": "2JgDwcggfkpR78wvJT4JP3DFVQ25npF775Cdx39Y8QgUU8ipEWbX7uwpLCFoJNudc9bdKka3NJkJTLa8RwCGzUEW",
  "key37": "YqhrThBRAdqw1QaaSSGPxKqc4QA3CGwVs9fLQNiRxSdryapCv2Rdz2sRNpDfPRf39pq4SU8j3XwZreu5dGAV18R",
  "key38": "5Ng8EbnijZbCoQqhKnuLuFa2tRXxNyrvsk2UmEm8EF5XkS9ZTtBH75nf23LBqr1rvJdstUqvXu68ua5bCvYW6cBK",
  "key39": "z2PQRMhfKDvpuHh1xKa5oNtqzinLDfAQbhsiphjmAXnpmAMhTgsaARzcP6NGZ8jyRio8ui8vZhQwUKrNCsoqupy",
  "key40": "xsStBU6H9BBrazB3AK4J7FK7XfymTchup2fFbZ2qaEaT9P6YAxeZHswvsxYuZr8W1bbSaceca67CB1qW5VLLFGh",
  "key41": "d49KuGH83uNeFTad1vgyf14yD7Xk23v9bBkqiMo8SzCMiwmUPcEVASNxnZXBxhucnCn3nxawBnJgNNEvS7N68FS"
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
