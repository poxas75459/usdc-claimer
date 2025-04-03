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
    "4jhhp3vpxrZSafTjgQTnZDgmzr4ya7rs4uyHwpmcKRsXtXtPxixV3aQPUsz4grDDsbwL68LuNwN51qU92zqgvi7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8A55Zzq1cFoGgUqkg7UPKHcia44hRydnvUFgRUAtoT18DCCBDwgzdyYatjwCmiMxGqAvBFmgfaiMk61aZQZXB5b",
  "key1": "3cemfEEGEQXVASvaBzStthNFd93kiizEsXbKVc2Wha83Bm55LGqj4zPF5VxNiyYs7hvUjNqjM6jWtydWy5PEpMgq",
  "key2": "5VJPfLnuwehQC6TkD4ck7CpaSY5HKcnpZfo4Rnfsw4QEaR1dpHzFn1MaYNbHWqTsAWCajZJRKsLQptCcvCbjCTXV",
  "key3": "3oTWSazvvX4SuN2gKj497ucuXrashDLWp63P71iQHD7YbqJyMNTTSJGi9nybr24dRGiMEb1LN5PswJvZf2HkwE1D",
  "key4": "3FyUfMwc8nKPTx8QY4746jRGmqxF1R68f3X4n55ZhCvZ9iBxbDFYokHncT1JQGHmvuAZh5LLbmkMt3PMYHt6jpPS",
  "key5": "4hxG5wSnNBFLY6duvmxXsCWesdVS55b2uUDVcrEsbwWKwHf7BEKhavqvkhkBYywioJwWqoGHHG5UuymzuR6CauVz",
  "key6": "3ALz5R6kGt79FTZuY2ZDqjE7b6U8AWPNbijNL6BDnGEfNSonjbuqFwS88AUbvNgabmhAzSmZYLGukCjeB6PnerYF",
  "key7": "2kFJXmLhonCGGYz8pgTf6s6eyAMiXVcrEQ2bsGfwq8c9UvzJ189tbKf7q21rP1NQsKjHtsyKbfzMMEyWCkKLB8e5",
  "key8": "2Ra6PohxeyfEbtJWBUgwJeCDc7VCQKtYS8P7TLfxAJKF56LBymzDZ6zPu5SN1Je9itCc147sFoXe27TcQ3T4wztm",
  "key9": "5dN7A7PRYDLR9JVhFsd3BgfJbHEywjsdLtKDt9WoCYAdp9WKSnMPb2nk55rMTmrZYUgEHY1K7v2xF2NqSFUfq5ow",
  "key10": "4z53zVcmRrAup7JWwJ57yXQo7ZZbzH4UJo8XeqJxhLAXVNearjhRcauiaAYh6s347qy8TY1q1rCCQYWT8KfkFFJ6",
  "key11": "2X89dURUMjaAbLG7MdTCkWfGeUP7MfoPQH6jdrfs5bCQmYwFSQQQe3E4BbtLZoBLTh8jHcwjuNu9Pb9YNXe88FiF",
  "key12": "MYKdc3YXFgMSYs5kRjdk6sqXpFWzTd1k516jqj5KVAApuPD31aaoyj3UcPW4XG9BYro4CfGNf9VwHfpceXcvwbJ",
  "key13": "43swFZBpxS1uCKV91MdjEj4g9n8yrxjxxbwd612VGsHm1weFkmrcSa7iLbFuJmKyzgkeP2qQs9M1uRqkRYZ7jBYm",
  "key14": "668aWCJAWEwxY8NvrvyNwmAgWgH2zsL9gDBg6qkbVP1XSUMNziiHvBxCWbRyb9EKKoQsLKEnrJJVTmwU9fhMjpiz",
  "key15": "2bZm7SuLq3ELS7DsPvYEWV68eeiy2ubwLquV7HHFhQWDob2DaAgh1c43FHm8f2dEqhrrbyZWjPR5HwbqGsnH5ofv",
  "key16": "4GbsmN5TFSWdkSyaLApGAcy6qitYPqj3oRZSy1v33nS7zeBbMMh7hpMB5q2o6ZjVddCQCohGppxJ71wWfSdJhU2j",
  "key17": "3qFYEovH9VZMWvPG2xu9AwvnQ57qMu3uydAEEUzvq53ZLsZBb7KQgAPgWq8HhYx9EBnB1WsTwiGU2rQBxsJmxPgk",
  "key18": "3ppAeGscok5BsXCBsXLF5yKjAoMgJJ5kpSLNr95u9ccJtWsipWdNCn76WxQfNXhWBC9NvEVSvabriCfYZGM5H1B3",
  "key19": "f8uyLF6zjVnn2yHypu6pfw7LEL46pfW5cZL4XKViD2UfPLHzfMDPH6tkF5ns3CyaRtrjQU4tbTcYYTEzh4Gg9Qn",
  "key20": "5ZBm7PZ8V62AMQyTQ1jvxna5RvjghH1B7Gf1vbtRRpV9Z1ztbyzhfaGoTKaY9fwsfY6ysKgNiPa7rLkXQbKZzVEy",
  "key21": "5AX4332NQfccs4Mj6sHdWW4MuVg8wKj8DQ9BgEn6Rh3EW3czTuhtruL1MBdwnWd8VHosMJ7iMs2cYWeUkH7kxTga",
  "key22": "2at1BbWhddVBdWSvTASjr8mfDsszwoxuvDDh35Wj5gLePcMWw5JZLWqdSZtr5r2moVZEx7rmQc15J9VXQEmyD3yT",
  "key23": "3j4vZKYgvuUmab21hYvHNVJEyBsYh1Z5ePp7cJcbwEWy61G4FtmnTtVdHuBJKHCAWtNqiPvnYEUHeAGnGcspLsTi",
  "key24": "2zL58gcEajzLoAndTb4tJ92xEocAPo9MYJBser42AXuxtpCUm6Du1jei9vG3n3HPbftvQhzjEMeXyWE6XWS3HSSn",
  "key25": "JAKPfc5vSaHeWu1eCpi8S5ZTP5ujT8GTPZey5SXnmB3eXWJfZwedbdLkSMzVYzswZcmziTXwEb1PzSQ4AJ8VxT5",
  "key26": "2gxnzak6vzfAvwzJMTCPS3EXp9J7QmiCBWrxW8xHQFgoohRP1jRa36nSDEvj5ZotR1P5o93XuBqfx9DfZHgz9F8w",
  "key27": "4WbLcoVvPu4PqEZodZReJcQnCfHFL6NWYskQVENfFYC3vWjRuMMkTELR3E4FNczCT4pSRg2BDMuaCodfERm4hbiC",
  "key28": "tveSa5JEUkjAUCqdzs37wg2D1QQUwQLJkRdZgdJpoQ6AWjU3UDeSEsctSWokdnBgkrhHnhHWfzhRCZX6YwrWeEf",
  "key29": "3SM4J13vu7vr2HB8kEe4JbKXW38R1BHkzHF91YAtdPGSQDb3ZHXHdWAnaZ6tPXB2vd9gGxm9Em2vyEyRxBb8aS9Q",
  "key30": "5LuLG6TVL13Sn7YgFrGiuHYDQemwKEG7ZH6KJ794LPV62im2c8HysBrbtPXT28XJAN4q94JYtn1qp3SmPrrfadLp",
  "key31": "5SAFCvNiRGeHDrGNrKHWpfNtK3qDgPwAea18z2u2NKzALMFWvyNQJTF3KwgigNGpc7mu1g4KPdf2TwTk1E5ZPCZ8",
  "key32": "56uCfnqKjnBgXf48PNKePrmmYH1vGU5eY3nhzyM9KFFPvYuTcFmf14F2LRDXeg81pY86soihmJyP5gsQxS93HHbm",
  "key33": "5CrmWTqTkAnoEkQjqivqMbwrc3cMai7CZSzApv6qJH1fikjETp6ivmKP7DdGp3PQ8Gi3LZxaQffxVYQBpVn7vYii",
  "key34": "mUwwVS2z35tBESjkvK4G3Qvamg2RVA7Vh1ExkM52PbvFUrWJdCTZhzJzdJp2czPcLs1GMXBdsxkDMhR6CKFnYFS",
  "key35": "PCXAiFtGgVovHhnjbCPEZCjkUmfdqEVeeMsyhzRxsZ4rZvSDYsZfriF3RbG6AzpSpyd4aRvM4fVESMvUjXNr9Zb",
  "key36": "4iC3JkCHqM3nfNeyEX6R8jfYdAo79879CxpUhfvasEw2SLA6bFQz7xa6iJoWYMxd5sSFVKjpo92kooVdunk4LRMs",
  "key37": "4xby9Bqz2jyuhZ9zzQFhCQjRbvVhEGA6MqznGf3YyXyag3Djh1eSfPgT73sntzGTiHACsepJWNxgA8dVUKobWw5p",
  "key38": "5VvKSg4GuRBwVpcTTxcYG9otA8ByEKkbwsk7dwAxwhw9RAwPPHaGwPjGStERUYZ32pDYfTWEAxLrmdCdPpYzACmP",
  "key39": "4mLAfcLhzVwaDYMWhqMxkb7jEerMDXHCkzFyopDBNqrgGMxRfoEKDEgBGqjNYWcMZJd119ma9ydN4uRkaZLPTNhz",
  "key40": "3bo5TT9zmHNqaz9BnPRkBmz8Sd3zFYL2izjimNqRRs5E7Z5d4VgtKWQ2mv9SYmXPwR4T8jaTYgaRvdAJSwcXRwNN",
  "key41": "5LvwTabNvqjRQVPeNtRMRAp5vwccsFEbyBfQ4VXTy6QAQpxEt7qMFyPKo7BTkMf82WbHQ8eA6mLBRS3Ju2MWewX2",
  "key42": "RZedE2JLbRfr3oycHNLpTk1HhzW4LSsQTTfW6wWeQg8P55LVGoFtKhNFtnCBzww2XysoeuyTR4T66TuKusKHSvf",
  "key43": "2iJeFjumzECaETMadzpuHuUjJtsFQsVzCsviiqw1K3RqSdb9PvThUmV831PCgrRhfvYEQvuBiiyWCfaE8MXPoR4T",
  "key44": "2t7FGzKxTT3um9yDkH5YcJWrL3KH3tqhAFG9ye6SKFgWR1oLprz1xDKt7pEY8yKkYU9q2dnxWsv81edp4QkeWnf1",
  "key45": "2Q9eBz68dSQu1s5opYxqgqQNskY75oXZWAnbSyEYC4EhGWYBCfygzSwagdgnaq4mfXNNcdW63c52itRHgnjgudDq",
  "key46": "4ydwuwdzCA3FWq6Dwat8LpxAMpTBSpwwjJMDGMW4NzYFPKQfMqQkAGqXM1x8jbTz8zgJZU51qSQeYMcpvC2jGJv2",
  "key47": "qLtbexzGEAAeSxbUPYBrPQ5QxR2SSXjFGKZd5PajGjB6svaey1LhgJuYNKJiQoDssZkpFWoHgnfGT1JnUhKDdzL"
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
