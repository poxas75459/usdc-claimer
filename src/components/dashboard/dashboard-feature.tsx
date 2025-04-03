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
    "5cUg6vghTdBzGA2CUymbVyFn4Pp7xvD6PikAc1UvULUHXYSQYHZhsAET8eeQW1zeoLE4EXUjcGtQXSPCqFUWGRWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQ7m6BvdBKoBTk2ZwkFAMjD4DQBWMtJPG1e4rmMtj8JV1bDsymPK8p2wP81BGcztAVKkZyc3zfdioQ3SLfQ9YtK",
  "key1": "4t2L3eyGSiHseeGEz12o4JEGpPiXZnbbZ7PEt3HXgkb8XtxZ9WFqWytqXLK4J2HCwv8PVafczPfsPYZcADQfdgVK",
  "key2": "4s5uygJnFwdT8LNNQ877tdhzrtBYrZnUK26eGxKbQ3JyQrxBvvPjBrRqpawQCFyqFE19BNuwFb8a67tprVx8wq9r",
  "key3": "2Fxqu6xEpYBkdZFZWxJb1wasz21DMD36tNU7TAVagF8NEWrhR2SyFjwKoAmvRsTeBb7JaYUKVfuM2wxseq3YbdzY",
  "key4": "gMhi5DmNeYW4tow9UsYNWPx9ygad8jhNzHVDraw9BzkpfTgDQ5S9x8nW1isnHU7NrSkSzvZjES7rgMucv8RoFbB",
  "key5": "mVCEuqF7m2hTdC8YvnMNJj5MMXnzABLodo7LkgtbnNzQfLAg2D3jbByswK7KgkCm9AJAn1zDqkiUg1JnP5s8AzJ",
  "key6": "4jyTB8qjxC8XZzwqPgYdY6y8wSa6rrbEc6B8fP8s6nM22PPHtChcGrrZQsRPJoUsfEQYoQhDqukA7k8ScXnbKrKE",
  "key7": "5pAfHJQnLX9R7L4xtf8m25BhaWWqkYZzrcPzCHBDK2Lm8HweGrhPmkK4hPGQ2dbqZsuhvbX7aCGCBxtuje5kcv12",
  "key8": "51Nco4g3nf5imsrJGpwDcaMgWpLbdZUzfrGjsLxVQ5oVwMWHLpXUdtbDHMkoeEvzWbCeVcdj725UaBUv4mqzW8by",
  "key9": "2gz2PUsEw6ZwUkG7Kx2gCcBjx2iUJLsaAwBe2BsVgNn2SbDY4aHK3EBRCvh9bxx1pvi69bvqrwV2vGgJoXm4or9c",
  "key10": "w6aaQgTAJAqYNqB4cw55RxSLCw5oNKmBSzmZYtXYbtsznudSnFoqQ4p8pBLARsRhRh3r6tBTrdvuJDBzSoSPT4n",
  "key11": "4At7FEZUa9e3uUAv8uSUG1RmATr964XhHDovkY59mxKzCoeBFit8Zz8YYk5tyXwHag7NG5AkvUdE9x7F7XRodfu7",
  "key12": "3LaXxedj8UXcvnzSGT2WSxhFt9N988u9x4GkJsqyKDM7LBQfa11unwY8NTwhbhEDCNt3f8MJkWggyZYx2thhkL9P",
  "key13": "24m74bpZkTQNmfvkz2jq9sfriTrUpo17QrzUUKUXrXMgJGsUo8duqpk3ijxbAAduT9F3s9PgGKBpbYXBJ7VgGA8x",
  "key14": "2z6dJ2uoP5ApX4w3Ddc3GLhtjK4h5kdeE6o3Q1L4gHsT7rVUj2b1B1dgMTFsj55hvNtNuAWAtdcyhhkVSpcdEER3",
  "key15": "5x4dsuCb3LEs7QNQRsip13EPwa5tAdN8mDAQxDKLk7QJQPUz8NBYzZANJqGb99jVr4nHt1C7Cxohh1qZkoCQoDHi",
  "key16": "4vSdqWQEGWjp845geNCEouqLvRCkPHsDiM1j1E9APNT4FdNzqgF85zmAinznVaVW6fkQ8WXe1dwRvdSDJ6pTy3rM",
  "key17": "4eJPSqV5dX62cS6jmVjF6t2C4a96cjJFDMabbamwoxzPg52SucmRSdVPtZDxSuzrG4tRdpFvcLvysi3LXAXpFD1S",
  "key18": "2cmieguTvMprhMBb68ex2j6HPZL2uM8bxjMpfdNNQpuJYKyrpPg6giGbxZFGdwiQ1rcFYqDu8bfKXzsLdiDyorrt",
  "key19": "RhgkUA9Wy1qdkch3E7E3nt5GXv5iuWXUpTEN2VnMKkw6VCbEUhCgj98zA6iRChRdew2o4S8EuSSs1JCm7rBidFr",
  "key20": "ACcWaRpEJa2Endbrv8MDabq3ewdmxbmczn1SUrzA6ao9CQp9TiZPda2q2xoHZ8XonJeYvqMoMmd49brA7zuj4QL",
  "key21": "5n7Q9ssbxyh3K5t6vA67c1qWm3P8LnUkfEwyJvknvno7vu5n2rDMa1azpZBLwuRfwnQoGP4Qk3kng8DSymPidf67",
  "key22": "5Zga3w53SU3wj8J1YK7XCebWcKMBdgkfeVKdhnjjR2oLj8ZMWDstftg1u6nodLvMLqqL5JdPSfnirTNeQ8RppxsW",
  "key23": "3EdRZGdRi4eZUbpegoPD36MpDzVu7CrjWBdsGSZvN4uVSd57QnTJVdPxjS2XEKhMAfiJ1rbmufBZepcatfc1G3ZV",
  "key24": "3dsWq5KJQiDbjyzy23rR5Jq4w2fzurhjh7kB4x7WnjVwXqTeUaZzzkDCCTKAJx4Pq2XdytM29r3RbW7QxytL5PUx",
  "key25": "5SgDph1g22UcEbsh3sFMajvSH6VTrx4s6SsxYuid9pWE8qJAzM1yK8ea56tgeV4YLeCb5k6zsExyjSkV6aMKoY9G",
  "key26": "5j5jcFVfoaW2VrENvVks8GH2fbWSfW2aHj3JBhqCayTua81hDWPFP4Gf7JZdxYqsfQcFHXjsZJzRqcQettFAhGTT",
  "key27": "4UfTh8NGScznwvxpBy4nrDpMvc6VTi6iinavHMXAc4t1aMjQErkeA2Tu9Dfza3ADr59d3D8xFWRDutBCRe6bxGJ5",
  "key28": "5ta91AM9kGJ2PNdsDk71MJUz4ZBLes56vxan32aETmChPNLUVFLmsN1bH9vNCpQqtb7zD2iCHbPefHceE89YJuFq",
  "key29": "fRVb9egmpdGhDcV39wsZr36pRr1VxXXetogfZj61MQP8C8J7ewUU51WhDMMznzpEHwRtNiuoBUkPvZ2sjhsWnW8",
  "key30": "3KyXoVN8gLMKQUxKhRixeMgBHKg3J9Q6z9broX8M1GNJBqFiRMUMcB24LjH8eB4D8mveb8UinQdSpar8K5adSjYa",
  "key31": "2AcZGacE9toBk1PTjCE9RS5cGfDPn1R4ky6s8ytAGVmCR7ZLbAmsMSSZC2v9TdN6VXozhCHiEpyt74h26s92mgFz",
  "key32": "2Lm2KtkfPZSfSYa4U91HLxAAx6eVkimrVjTymAww4ZBpr2LrB1WrkTcV1n7uefbr2qENoEtS75jxn5iLqb3bBrnE",
  "key33": "4AYMQ7rQUpte2vKd3pvLXU1P56ur4MRW3UkMS14Lxtohgb3U3XkVUZseV21eSErRkSdCgUPFNXc8NLpoVLyWKUdq",
  "key34": "4Znzjpx1s98aeBGEGEwiCU4Z4ELTrAnUwVGoQ3EvNgtTf5iYasBMKatdntVo7ryvVXMTBdeVmbvbawtDpuExBaxA",
  "key35": "4kwJDtjoyJWNCFd9D8hieaqmPPHjNkE8eq54FFYBmWpcaeEyDJ67k8jGuRTzyS8mE8bvGPV4bo7twJawEDC6grRi",
  "key36": "5CoAp6WnGerL6XeMJHWKXC4tA5DvmejHrHnUSkTUecQiFqSYv4cR76Y7Zcx4jgSp7Ubh9w5NwU1MxHNR7hmCqWnz",
  "key37": "s5rgLibrkY5CPJRduASxj4vBo47Mt7L3zjqg2pY3KKA7A7kgrnCJNfSwcD6oE2J8ayCKUEzsQnz72DVVHU4KJFi",
  "key38": "2hejkrSUTcMvUMtra8WppLxQ2kx5dTGY6xwVvD6aTFZqMbAffWADt4uU64cV4qpxQS85UWMNJZWWkkYYUDPNKwCv",
  "key39": "2xGahFCWFPKo45u2gznVbTQwPotHGx4oW3GBmcSrtmYV2VhzaZixpUkjLEbLqn5y3ATrSJx3nEU4yTPRv6Z6VzCq",
  "key40": "kqLrzqxZNf1QprPN8qJiXnsuPWXLcgUZgYDjECJtTJ15oq8BT9iVsFMWKggvc3r9CDcs5xvdu9YyEZdKDm5Acxg",
  "key41": "3PZ7KMf2baZEFfWJX9uwaS14CGRaumqCm15D1KJAFSJgKeHwwvn5hUpi1LXWyL15kCMgTrFbuXPaVf4R5QYbY1gc",
  "key42": "34Mm5mJDYPqYYog4JwHsk6YGiZdLU673bbjXMEjdeHRS38jRoHk8zs4J8njwow91C7Ts97vrL2hxxNVsh54sufqN",
  "key43": "26f75eiMYhuLaPSzzWu6hpV8uSscMac4k6FpfjugFpE5AvUJsKtd6S23FXSbRCJgunaZpBBDcX3GcLmh9eDDZLVj"
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
