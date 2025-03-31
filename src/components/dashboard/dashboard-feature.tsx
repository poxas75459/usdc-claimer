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
    "3anGLSitmUpGM3TohXzNY8EJuN99sZdcCjtQwbMQdob5Gv5Co2B8KZ8jnJfsncPJvwNzSkLK9W375NTxwVVGydLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XdWGxe5nMcBZxHJkeETM8T4gDrFuMwKwyZ49C9RRMQD1maPZNzg3nxmZrTPvEdGo3n4eoej5FU166n4smbSj4sP",
  "key1": "oiQaiqC5rNA2NXxX1edo9d1XLynBdNKXXHwPVqHBEKbrpgxmZVfxnJoWZTYpbHxb1ErPu29M5FP1mu5Hp3BWbEy",
  "key2": "4aRcPZQVhyQoPJnQPB1KZ7YRGrFUY72xUo7Ky2sdTH6haGxyEotRuymfx7t6wb4G345uiUYKridCLKBkBeSfP5D",
  "key3": "2PKovUHpFMknV4NhsFbAB22KXGWoE4weWzBfj8gdojepHjDYHbuzrkf7jFKn8uXezMuwNeoCiJtJ8cCUr5doTEuU",
  "key4": "3AJ6szKgChQCTEUiko6d9Uw5q3TQ6D6nx5FaZYapLT96QZwTDGFZiAxaJiLjNFaf9YH7FG6W47EQq1YoUHztYXVb",
  "key5": "62CFMCfS4AtheAePMNGbBs4MbRYaJaY2FqdBB4MziiL8XYnjTNipTioqmjAgKLay5KcwViXKnp9JtCLbjSnjRnmX",
  "key6": "AAU219AdwoB1qWGB2PFp9RRBEgLX8FvYs31kb2sq8AXXmm6gFuxJSMpfuB3UewcjSwVrkDwRhMu5Ah7mQTstMpE",
  "key7": "23WnAv2qWRWYWP2rTKvgWcnmmShBsNim1XDjaKa6yVwNXDdubBibmeLrZua48cXq93EAoxLMMhtrVAro7BRPzjap",
  "key8": "5tTLiB511U9NhPK4bWkvNx2vgY37aJWhNHFyeAXNkxJhom3855akiy8geF5jnMe6Whp5f3UvgtsYPcsfZRA9f46s",
  "key9": "5HXC7N1KAuCGpJo1V6ZcZAmUjDPKnEd8VkFr8n9Zbd7SzP77HX1gkEPvsheyf5f4DJpUetRNSwCYjkAdLHWme71g",
  "key10": "2AFSF1bEg8Ft79rshoF7zyjrxYNLE3jK3NkzPzrLi6BF7cfv5k5f6wtk2fPqTARwsv5QGjFLzUPTaz5zUmyfD9kj",
  "key11": "2eksfNfUs6KZ9xRgp1xpzRdm7yZdVyw7HW5HEbhKgHfcxFskMzmdC82EsesrTSyRzVD6X32rRWfCC8npzER9suqW",
  "key12": "4nd71V8tFVzneh24wV8we6WV4J9mFXfJXaDE36g8TxNvVNuQrmREYuFZNpSEyu34CSJZPCm392uNNaDgssD9t6z7",
  "key13": "5Bamd9XXKtByHjGJ4xZ9w8sXYLSkC2uPP67Vcor1pfFX75EccnbXyuiuiN4nYAUgH5UYX124KUf5FP4hxQotbbCV",
  "key14": "51fmYxxJqhQNarvp4N5DQRQgkvqVwJTejP3eRDiVfZ4KYN2VAt2LzH7xWeNJDu7wYTf52JYXYzeuJ7PX33aACaKB",
  "key15": "2Tng6jEzuorF9hQCG47g6ZsFF3cUHiFjVM5GHrwpzvP5eAXJNVSQYoB8esk65S4UWrqyzq9bpytkv81LKH18HJSr",
  "key16": "2Rw2bPQb3hK6vccAAJy5x68oY67f6MFn6G4A6fyJ6GmHQVSpHeDJ57Ai8moU7EiFZ4F17L1LYLmKeQMUB5AEvrW7",
  "key17": "5Qej2nF3nqtK76HanSjbUguCM5ctkfomfbhtGxeBnr4uV8Q2pjN9wjW48wyJ9r6xeozMa9dvcNRv79iRRcJQpAp7",
  "key18": "4E7opsZWQQndqyV6VWrArNQq4sD6pyezDAdBsio5cLtQt1NFRNWdVZebXrJn3kmbNuHFaNpix3z1hZfmQS9qhHP5",
  "key19": "EEnqnhBrFQJ7goZSeBzjHPdCpJ9BouBv5wnxMH8ufJUGKmBVJ5aMNJEeRpczUnYMVRLWvRzgJmvsQBU6zVTSK8z",
  "key20": "63JGWjRiD558zyiLu8jYysLDBbZyhpAPjT1H1TAWGXNSQgmZ8roFDWLxh4Jx3xpEV8uUJ6gWmPeK9q16p1LhLoWH",
  "key21": "5LXigFNdAbhEr1QwVBhYXkDcdGjxumgy5icddtTgSEio6RmakMycvPN9bBTyUWnngKENt4DKsC7DDyL1Zu8yWRqz",
  "key22": "3LUo5Med29j7VaoXwpyx9QhkZSzuybkifnp4C7at5eEUd2ctDcLYynPJGrJjJVTt3AW9Uc18J4jeUdgYEUqtqPgo",
  "key23": "2cJ1gviLvL94JXu4MQL88fYPKXwtx9ksgNL91f2S4wuxgDjRw4zJTFnmw8cAZKnfzJxuTakifh9rPF1Nxy8FnRKp",
  "key24": "4j8W3cVy4Gg5NWW5ybCRo3aqa4sqCxzvofPWqTZ9qdKHaWzYfhwPecEXbA1p3CC6cpaWQ7pF8WRMLuJfZuxcYv93",
  "key25": "5qPsposLJAHUtBTJFkB7KfBrn3fm6SqKFeSX2uUHgksJRc3YTuDbK4fkadYTsVXswJVoC3kVVjGYCAVPWAgk3Fft",
  "key26": "KbN1jS8gPoXkpfwQoDg6Ez7ydEo3eH3aTZii2Y5J1TiuKLNHbECcnDWgN7Kh9rfnQaPwLPfTyW8GLb78F9TSTAg",
  "key27": "382uznpsgKyQjTpUZUH1FFAxxcQCBnsurbZsD6PR93rx435Ce9wZQJQELREfyKwaHkddvbFRbp2UoYkoKDykFy2z",
  "key28": "4BPajDiKkuakSZscp1goJCxhJKN34NcimMGdbpBwXUPxp1EZFMHPLCvZQuvH4wk7tMopaKAwo3SU3mrSKthMBxHg",
  "key29": "5JwbcqKwaenEBJB8BNZ2omBb87FaRviUE7b4boZtM8i2Z5PzMpNZVPptHSLz75vQsM45DpePkcbKqoHDGP7AH98v",
  "key30": "4ipfqp5BNFZzZCiQhV8n4XmKzQV8L8eXxi6qHptM12K16ECCDt1xKRfyRNipfnDh4bGZqiG7xNChDBwXGvu43rth",
  "key31": "5F6oBurssgy1iN43vjKKUqW3oYHzbP8tkuqgWPmVuU3vWk2T1jdESTUU2g2tLsmqqfy48QXj2pE65Gz8NkqRVfru",
  "key32": "2RF8eYZajakQyhpwpEpMTFoUhAW8QK1JrmcS4NJMn4QuFhgfDqwVKZEytfnq4bGeVydnKqE8Ht5LKLBQiqFdd5uj",
  "key33": "4Tp1R7BE8QqRUsNSsvwoLPJXznXjJneBLz5JnQJzdn3jtnWukH2nvKApZJanPUJqoamgHa4g1wRQdC1FkYP7M6WB",
  "key34": "2Q2WhVWwASc4pDWpFwJfyijmF2i1ABHtEDFbkeUZ8sXRxCEs68YFYGYHCWq1eX2VES92tisW1CEXJuxYoErWJFmm",
  "key35": "5BMvbm1vXZ3v7sD93rTr7D8RZW3VVWpKXCxNX9UXeYxXB7QSYunGMWurg9PCoL1bN3zHu3zoF8mVBm5xk4ncYV66",
  "key36": "5FBaAHte5g9vEcz2ztdSsdxwPKGj5bqJyJqTU4YkiDFtXZoWdEL8baKVXh1j94CeD7P7Mrv91s3nasqSdMz9BAfg"
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
