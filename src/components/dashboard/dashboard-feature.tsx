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
    "2w3BHD79F97UX62iXZqNm2f545X8eCzNWAQyvBDAAMLGb8ySbWN6kRfjY1SD4m2LCUdZdF5Yv12KL5Fi7ojvLEHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFQEhpEV7PGzA54hgB4RwmyVjsjK5jcSjqvrdnzP5SY316pKA6NxgCNBbD1XnYf7YvR67t4AFuKbQaQxMDzhcgF",
  "key1": "5J1xEAzXpCqi7Jiw2CYAByfChdR86U1JnPoz5LAuPWUinyVuXZMh6NLRyFhYWW3hVrNFFivhLK4iCkzufe7AopEb",
  "key2": "5WZF4SwnndhFcp7EATiMhtimdsKa39WnH7CMrDnPxnFVe5LYBh5fp9EPqAsjHFLBtbQYpPgz4LSYkfLwTurj3uRx",
  "key3": "2fNc8WzuxEXKrjPBAn2uNobdo7tcyVLpGqpYWndzx4BjBrNinvRKvp8HZgxvX1UjuQeZzvsD5vEmPnt9p2Foof3D",
  "key4": "5CdtAc2ZGueumN39Bj2qy3sNvE4sCWXwAvsfCMnWus3ENZNtzASnUDXtd9vU6bFfKd9zEzmDWesogJMy2pkAHZxL",
  "key5": "4vLqEa4dcK2A51ZpccimkPahoFpRpD14jhsDCzbPBs4KTUjcFyw1zsS5xbeFdbVBHHQRK5tTJUsYHC9sUF1bav5n",
  "key6": "23fQ6EW9JJU5eEsSHNYUEi9bRHcX7ma624rq7SE8XPvYNLmsTAKbj7U75Kj4phAKdbYFh2jeVkjHJK97UttwLF6N",
  "key7": "48MiQoehX3XrEC1HmLJFjndo1JExrYrMstwBgpBPukHjkTNqt3dALVpQkz9QB3XZ6btn9S7GS48dGbiKrUW9qnz",
  "key8": "3VBmnX66pUahMhsHbPky25eKjWpbCFmGok4jP7c4Giv1Vd5EeM2Qd7FhgzLWtGnE7HR7tGxvdPLZWh76TBSZzrFh",
  "key9": "jEMHcMA8y5c3cXFE1twhKdFY7cijt6RS6ZJmp5XffydbsHuGBgTqohBRowzyZbJfCNtUASp8Ya61UqJNchj1eMN",
  "key10": "5wBPk3Du522KkpmMCimqMGVsf5npVeVj1reVqohumD6k2hrHBdAZfAKTvqGZf8iKHHZXeHDAx4NtF4qDsm3qSx1z",
  "key11": "5QxUg3tkA9qsWPsQKohaiWceBQmBc4dcyAe3ddBBrhFw6XnUVUtYL7x3EoZscnEteEyRtns2QMYeHKry3oDnhEhq",
  "key12": "4HLE2ziNVdknx8zKEsPPzUnMGEW1ooE2XLmXs1hivof9P3qZtpDLGPdzQbpoe7SnR9Z4dTXh8S62Yc3UuaAUzBV2",
  "key13": "2DJK8yyLb7fc2fCGrhrGT2cjh7ziR1o4pBXJz1Pc4MQDgzfQHvcZdvkz4eEybDoSeoiDSCfNWMkXF374pAmrd9Fy",
  "key14": "63RpT3NGASVNWZtgWyEtZMD4FoC6ECewbTgxgF8wkBJg8YgDp1TJ1sDyMXeAWdKncLeibgwaJbAr2oY1PJqGLc7J",
  "key15": "5U14FTXAD38AfTenQJBNjWmUVsxX1ZQg14kv5RZ9x49PxfkpNKec71Z6Ls8MBr9ciASdmGpcGmWJAWUi1tEMEZuC",
  "key16": "4o3j95pMeLcX5tQaCC97EFekywUmHW25tfFvdynuMS9qYe3d4Gqtrp3k8DguY8MJNYn2kWVgGB7XhfKfZr8E8uXy",
  "key17": "C12a1TRCu6HKzZWjEXeNTakJmVdfa3RCwrUgpNHAg6jkmKm5Kmz29s61mkLtjaXWagdw68KaDa5cWFr87BHH3KE",
  "key18": "5rrQSDVC4ETs6hP8bPpLTeDP7uoETbUYd3woUUzr4T393FhQMR4XqZWyiVfKfn7vVYtPJXt6kjrgmFoZ49Vpxbg1",
  "key19": "5Mp7CdRnj3PyP3h163BnhyzKhcVhPgfdcHAYPjBFu8hB8saTmbw9NuCBikGKHW7j3ZdUKrT1mMELkM3rix3LMdHK",
  "key20": "4qiifQ3JExZhGrwhqzB2o9GN2zxxXzHvAg4YTq46Mi5gGKwTeJokBtz9XkqoWN9DLGZiRKGK5ehPwG5NAvBw7ZqR",
  "key21": "4T26bVuX1UdytcqYW6HBYQ1UJgGtz73HYE1TXgCeTaDQAACFXkJjkoaZtP5tBiQwpQfLyP1ZgarUktLBe9smnSQ",
  "key22": "3c8XK3ysyNAQ11pAVD5jH3enocZmkhb9Z2qaceHGmazxNdiQkyUKiMVfhNQWLzndapSH5xLpoqBE5RYhTvFJpBVh",
  "key23": "rBnPpwc3PEFRczGZLGi2vE9LiazDaGv21HcrCTnkuQH2EQ5PqSNhAQq8n5PQpqbDg7D4mMAferqTZbGpUBm1WYN",
  "key24": "4U9L8ZWRuvMDWifQ7SYjS6JDSt43Yjb3dnasBHE7RyC9uTzfXR6UEmryWBgx2tEWYHVdge5Yrr2wLKR7Pt49cvQd",
  "key25": "3qgh5ec3FRkT4SHCrQrx4rUknKXNKaR7jZ2ZKvnXBFst2nQh2QEcgULuThaMWzhihXU15WYE5iovTDDoUSgeMN7F",
  "key26": "2paZgCthWSW2G6C5AXY5wdaUTCUzSYDgbnun5nRThmesZg7VjSFL5AJHHoBbXmsZx4oBVfgbW2HPqDJchRL5SpPM",
  "key27": "5AwrwXb4S3sf6EUJQp7BVUDaY1dC2W1KywUE3bLq8YLrieGHyN5EVCWgjys8jsi9gDtpecKXqhsKg48cJU5Ex1Cq",
  "key28": "4fvGgHAKNH3EHPdCKmEv1cKypqMzPr2YPNjW7hrFPTtsoq5HA7sw8pQ3d391utvn6s9gEi6mKmLE1o1iF5rzmEY2",
  "key29": "5UQavQjc6eZqJ9Ljqb9n7ahieYcUj8VMfX7wFpN9Na4UumAaRHAB8dScxnNng7X4ET9F5T4rZDHL8HrLUU93zKcM",
  "key30": "2C8kHSKty2HdbWWBjwmXJbRydMfzLx7f2k7FbhcWcpuAEjNkuNb3dCdt7Fv6eBTtwcSNXakCEnA1us9m1PrXi6D4",
  "key31": "27EzFDrgscUbo33foMtNckd6AeJEbW6FYwmw3UB42tAL3uqQRaPpEp3XZEhhQd5N3uVJGGRTr5TTqx7Mq9NPaATR",
  "key32": "5Thid7jdWr6p65h9RuLXsseXjzQCP3o8h9Z6NZ4c7arh9ikVeSeb3BPCZE1QhdLNc2Hki1S4vRxK1KR9kQQpL4XZ",
  "key33": "3usdNTrZ8aGNmX8nR2EHcn3JCLyJUrLJdp64J3HfEpB3aQagbwaS5YtpSUChQ4w5RRENoJiKzNPc5xXeXg49buWM",
  "key34": "5rufYUCQSNYRBmyBPKt8hEULQL4egEbeXePU9wyoWzZxWGuhRDGffzwJ98uCA1LVsgjd9voBWUdaxotRFXh5nw8b",
  "key35": "3vi9E8afoUnRYRKvNgsjhMQrtursUMp16ZJTMsbmxCHeTjmVJuf9Tu7gJXaFjJLDkHiN8k4T8hq52zMcYZXxc3NK",
  "key36": "5RgnMzD7M6WktVZSwuDtJZhZcVjQach1pd3rjLBakocXrCMQEUCYuzb8D8dWNWbbmLk9isaqnpK9aeiqw2Voi4oN",
  "key37": "tH3hUVxSVSdHkZUnxiWEXeSBErxRzxM2XFLv2ZKxs9cztN4SWzWdFpbjayYkdxUh3qiCc2Jri7sNohj4HwWwDsj",
  "key38": "5Z531xjmFjtSbNP5PVrWeDyyoWimWdSiMiy3ejeuHkbLHYGE9uLU3weEenCFgcxXyBCBR5bab7JmAjYDSx7QEqKy",
  "key39": "5ncjUve8BxTtpssL86TbJ9Stp8PS4oyBvTbC1NfkNWZwX4KzuXt6Awq5SXevagMu2jjTdEEE2UpWghmRqLQsnWUi",
  "key40": "47q2a4GJe7k8Mjve97Vn4BvVnzQ2c3uu8GRSU8u9Bbj1zMx8tmR55isumHugZy55hTbpdyJevUUuGapb2nGhS4H5"
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
