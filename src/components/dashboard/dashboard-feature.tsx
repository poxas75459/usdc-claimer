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
    "3Wa1YxwFbNyYp6E8QxdMYJpyzKvJ2TuiDqRq3spVW1FQjrV5e4LERe7YJHKfdMMmBB1TiQ7tJESn2zN6UyTZRLEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNSSkwuvGvDJJpD2ZdqmAA7FMZM1bqsQAUd8tA1gBrd5wiWwhCASMeUjjVsYz43g1Bq8LgGrg6SfytSy1H8srNK",
  "key1": "3XC9gm1CvmiAFDAnnGcww8jqCbgowLKQA9tH3KaRSTUzJ2LLp8KKwboQsReEq7TH1dYpabBtdYadbJ4u5So4xzeT",
  "key2": "3WitkxkrpkDiX5UKYScKNrhCE17og5RiAQne94oAK7tiPkTbtbd1PB1uCBn1fJnbRaZr5fgVNcaSc6u6GxvPzoZf",
  "key3": "YPGVnGneL31mdmFYBoAnAevKRjQuoA1HLGZctW4mafUnrMTN9qpWHzHJYAQQJGxXRgAmRUXcqVzPu4MwFCU3wwP",
  "key4": "5HKUmuwdkfr4zvNsJpZSPpcbkYH6Uco6goiNWs9QRRfRYvCviaKc7458Yc5hV7sn3korSTBSbHC4Gcuyi3hFL21d",
  "key5": "5CmybQ1VQCqnxj914MN1pwjK5trB2FxoSg1WYAt5HN39VaJFpKwk4hVf9rRCZEcGnzJsCsMa6A8efn1PN8k8EZPC",
  "key6": "2WkksNZktCSo9nxpeU7umhJE47Tdk6jwKucgpYdGMZtbNL7Hur6u2RbWzgdyBHifQoAWgb2JL7ihaWWnYnWgVxh9",
  "key7": "3syNJynrytNofjNaLBxe4F44fZVqcVRsKYked2jJT3wjauA7hwQkVbg7UmJ1vhDh4KEWEUnH8qWRqySLSiKbU3TY",
  "key8": "YT5CR4TZD7HZ8w6R2rmdis5AiNJi3rW4Tu8rLYfaTagK86pCiNLX4bAUJ4VQGbZqQWYiXACnd8QC4rTsmy9yPUV",
  "key9": "TAYYKyeV79KjFTZp8SNn1mV2Axi451o8aWPCtKPowsXKRF2gtC7TFrgfJ676HBtGKNVvB95sHZ2ZDY3aoa7ZQZb",
  "key10": "3zQPbrMLUBt3FVtHXXBMpKkznmjFSRJHdPxqRN1RE1zxanco1WFiXYsVDGckf1qb2wd8a8rr51eTvBNSxdU4DAhf",
  "key11": "4pX6vKPKb2tRM9tqmXDpPQh6kwJ4S24BcZzWQYzUzGa53xTCEoGSPXjEgscG2WrzuErMrGAhHQ8scZuup5LjxxaR",
  "key12": "3GAJTurwS9Bi5UZ7xsa7r7qQSwRi7QfDvnJTrp95ghFgEAeu8z44TnM4PjUR2r3tFCuhcLKg5DruNNPQSS9Zw3Mq",
  "key13": "5WzCqGsQkbBS6i2xeMTBMQ5s8CB791qTXos7aDc9DZkTFRAuJmF76f7d5DG6ot7vEM369yNuBUCKiAd6esgKAeF7",
  "key14": "4gayJUWXFukqyvVMcYVUwQnqrqvgPw2SeRTmuSJJTBUmWN3A9nN6wZ28QK4tGTxLPs2eFpQKgmKAKEpCzvHqk5Kq",
  "key15": "47Xd9Vv8VuwYVL4qLm1W6MZ41tjh8oZPWakESs5p2E4B77cctGnMyHtJ4Uct6XMMGrjrsehkyyBgdZxwWJz3GceA",
  "key16": "3Gi6151CqU3MieMUgDhXzdwgPLbMmtdoCGqEE3CFs21czFTjzq9qtGQdUpWhvgmQPEcBT6dT1jRb9RevmffH6pn4",
  "key17": "5md7c6Wsnv6pZBxCnSjQBPGDuMJu3qnSygM6kWfNDYscNsjR5jqNXo9sgXu7skz9WngMVm82JxuXxAMJsHMQ1EvM",
  "key18": "XmX4ttgpLBeeAorwK4oHXtdKk5JBQYxz9KvASeei3HhEFwf2tgBqVAS9KGThg1PGwFEovYxhYDZjodQTWKb4SkG",
  "key19": "4NxD4U7zMp4K7GWufx4rFmsaYPGnN8CsBeSNreZayXDmUSGXmKqLCooZ6kB3zD8Yk4oRwGgVZ184nd4GqvRcgoN9",
  "key20": "AA5xxisd827W6phPKddM332tkyQYoHTNMmq2bjtYmFmnnHX7P6FBYrELKWJmX2jZHZjmKVC9st1G5sHP1ZgjVXH",
  "key21": "2Sbti8mt51SbsESNwmq7Qxeuf5QHvHLk96tdXWqsTqxEz4kHHX4RM2BxAykiwRmEt5pkUgahdfgg15MMyAhBsspZ",
  "key22": "3aR6oaW7nSqGLQctNNQWQ5nWPakSeYYeu9SjxPzJ23xfvtAPfHrTDqpkRHSH6hvawj8Kk3eh77qCNoWQkNTxkH12",
  "key23": "UzxgtWyCyckhUxJim46FtQ8PgzmdZLSdfTkhMV62YPHY77voKQAzhhmg5pyKQmXdNs4H6h9dTZp7C42wrAJVFCk",
  "key24": "3aJU7nthaMZzZQzxZ5H7HMTydP51ereTFs1bD7bxRmQNALKWdCAf2gKdExMoTzfdEeQBurhWggodA5hJFjYWXty9",
  "key25": "3qUDdBWWkEVjhKMfmxfvnC5GwjWt472yPRdEqdRzoeYmCPA6vJ2uHVJtSDPF37ESwJKACQ1Z6oJEJJRV99mHEpPb",
  "key26": "5dnReJmuLMNyq2BbSBMx8JHoN3VCpTcpnyMeWVFiTvWWCcg8sqMeQwQuT8cYMJiLiY1PTQ6Kb9UTFujfQSS8DijP",
  "key27": "31KWHYfmuNnz8m6SyGkXZ3TJK9aMkvnY2CTSbgqRYdaJcrSSPrkRgXBJoD8UpD4hSnUpPCG2YWsMNuS6WLFdZLar",
  "key28": "4AAtRkz3PukQaWUxx7svx5rvfkN9JrnZRZS2H1aQXpxzBBrJYZ2TxW97zKHhgf6kbXeovy8RDAgmiE86DtcAzg73",
  "key29": "5wX1HuYvB8SCAeaBGznTD4zWmkBP3d3HfGuGvaGKcZkrHrDwmFCPzCRsmavqzJogWLicxjra46EtQWfnrY3Ab8sG",
  "key30": "3hTwn6BYmejo3UTUvxAt6S49Ymrrqvn6swbKfKTyiSdVr52ccbPosf3vV5d9ApqfDpUX3hrQjBFdHxjricyE2XxT",
  "key31": "21hGvpxEUMFJWEZUZf1P4iwH8RgfuWe9NajcFnyZAvGErZULp7X1yKRHoiRNi7aTjxpYVwY7Yedw1sPhMLpGeshw",
  "key32": "4zPVUfoXkkpoPBxoAxxWNvwdhPMcdvGGcg5ZP8jnVShoc23TSe1mwYVk1m3U3H2vjhudpUhwqvRc1D1CoSfRsoZ3",
  "key33": "ZpMKpzsFiEJsP9zJuP7G6QJBPWzBcVUeQdPQFGsAXiujg5BpHnMHH7pbxXzzXQQ3Vkx8ZTqSwDAeVKswZcpo8d7",
  "key34": "4QuSRVsbeCEphd6eExNzphddC36crDdLs3darUNMqtegNydt5Nu7M4UpTTUX1Djm2pS5ag3vD4YpHUovRg5HWPVm",
  "key35": "5XmKMuNg6QZtqdRQZuLHkejdCxVN2vii3FYWBTW5tiGpSsotEbxaZiwbm1APnyf866pnnFBhKnY4kAQnLek4eDvT",
  "key36": "48N7ZbmmizCJL8q4itif9NvWVp6LDPmPi32D2oGSmg1QQCve1VJ2tGxd7Dw8WJZsApv5BqnvejZPHB3TLZiNqa1g",
  "key37": "2XaJGaSh96WG6fWUkKLZQQ2jP6Ltuf8vJXztZnRkZ8mFCkUGtJfJrWxtdMFnQPHQLvKqe8VMnMduXdYeMbjLMYQQ",
  "key38": "5joUHLHxBDBUKt6Mvm7i9kadU8Zqrbv9mW69caNu4tszYTVgngSGpCBnnDErJWkr9zB6Cs58YQuQ4XWfRCh7Y8FA"
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
