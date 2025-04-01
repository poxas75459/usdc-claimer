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
    "5UwABVnZRuUHm2qw4sofAhYiXRLrpVQqtm4MCG26kTn6WwztLp5z1mptd9yRCVv29uRLWkq8edm7grvvPoURJY1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EXWNjMtC7DS1kVF38cVY5cKAJmBLLpJ6Xv2tqWAQVYMJBm6iDNDztJBMgeRMcWdMJYTsa6khpqWt4J7JeTvM1hF",
  "key1": "53TDL7jK7jKGWFURGpnhEuTU8TWFGbBPmXSQSpwfpnLtbJJMzz1vgox47szv9Q3GYKfSqztn1FPsGfoeX5FEezcw",
  "key2": "4ujaG5M7RxqVV4XAQrSXAQWJircoYvFesQfEiAPnoaV3JiZLekW1jYx2HSWpkiDeZyP13v5gbuWYViLakRRvFRrW",
  "key3": "2WqWqZsEEZT6KdJEpeSAYbrtXrkzUFUXQzS8D487xxUcmuKk9NdCg7oRM8LW6BBdFxQUMyikwXRd7APFg73xohva",
  "key4": "JE1imvFNYJaZeebfYjn99b1KrV8rSeVAmEEajg3dJVzGEpDoMREDmhKpxss4rbussv3CyDjkT1CHAgrpdxGhnps",
  "key5": "2R7uNtrKaJiGUdSyP15PscpXFuiiq18EfLyYW9F1g5zygLH9GnZS3bykuqSs2Z6VqxV85WpnhqopA8TGRgQzi8Jt",
  "key6": "3xAZ4tCsTmpJGi8VVvujeCrxjJggXhnypAwG3T7Cin2QzVthpaL2mYzRhZG97zhaAETt9yPkPqG9iGiAF1HmksTS",
  "key7": "5JN6xRaigDbHUXcLbB2xV73UFGwsqNd4rpRdMBjmd52erNdMXG32iVezVGQw99dwkbZ9cUS7C9oRYbCcef6eojT7",
  "key8": "4Le9N5xXmweY7eX4DCYUpdPcK7keivQDwFgbvVae9ftETwsbroumqa19XAhWVbuDT6ShY87WcGotFEhKTU5gbVQ9",
  "key9": "3EubDsLBycxwuhviN3CmbTeqscYtsNdH9zwtmzyWkWaXQ2hQrLDzmP6xWdBe2E1TKpt79m4Ss8anW9ogB3mcaQcC",
  "key10": "3wbuLWL668cR2kFWHmgXSF7FULCZADSTqLzD1tWGe75g53mXBPS1t5zWJUg7mnHzrkArtXGoaZ4zGQWRM7P9XaTk",
  "key11": "4Lo8ssTi4qA2pmum8JQs9BYJ5s3VPLKTPGvRLsQpdibticGqa1nD8vGfsy7NzWPknCaBd1uaUXywV94efqrdVUT2",
  "key12": "3VgJyNEfsDej3Wi1FKp3rQbyQSqVFKopxWD476or4b29QF8GpQZZKECJFgpia4nD8DhCi2u6roUBWDT8nwpt5XQQ",
  "key13": "2fAs6fF8fDRu56ApVZGEKudsnMwRpzCt9Py8NH1SfQ87RHgTfc5d3y14Yr4NZA5zK1d7as59vSYw9bitszt3bgzF",
  "key14": "mLP2nnRvAcbVanQPnooVx1k6x3YkrwVWQy6csonGwNPFCY8yuqUp73roiaeFMVP69TNGh9d9gUttNWK9dCdA7Ba",
  "key15": "2xG4g1z3GfqZ4mU761NAbcrTpQsa2PBT8VzeUJnwAx5aCu2bKQjohbDVSJ19JKg42i7omcL9hc95mNVhbfCEaLQA",
  "key16": "4ET9Qo3Jct3fwGfTGNV4aXBWwtAaYAiwm1DUdS1Evrm4jxtzgq5L7ipqbfch3ZUhgNMwbiraXtEa31UFHZSAtd6i",
  "key17": "4wroawAnhtynoo1LwS1wgWC6KauVRXRTuu7uj4NJgnixbJWttzXL6vhAUvYD8HJ2xXfLoafx77uLtgCsVgThjgC6",
  "key18": "2vymfjofXjkg22qdnZPeb1HmJZZ3T9NHFHw5hdJyhPsbCquXZaqSYz87EPJr1uaEZENwW2egcusVCy9XQxTgmLzB",
  "key19": "4hjXKCNjJ2LAQdBgHmhFtnYfD2ob7y6S2AeEpprAy1h2ha7fcvviyBHsTUXHNi3wmmd3X2hxosfzJWMgvHDYWB4h",
  "key20": "2zzMU7M1ZW6W4aGPif3di4UVHweR97SgxNr3cqPsf6U2kLDUfBvXQ27PSCVK8Y12aSdtiABVsJZpRL1sUm2eLYYQ",
  "key21": "5odN3zABUftdEtQLq8RXwDvdoSNAb7tLBg8MfJ8fksnBYv3dvWRstFDUgNnJzLR1Dodu44kEQ8Ko5tuJsKJkxFwj",
  "key22": "jWPqjfr2t3oWJymYNY8YHbWR9SYFPj3rsb6zY9tBdtzUZ1b2qw8bDCrpS3xPydTMHzGr2enyd63ofAbrHQZpGGz",
  "key23": "2XFGxuNFhDSAwym58V3ZfbQZz7hfPrxT7mNfbihygpEwzWfLj6MMvxQSJaHJ9sdBKqrsr6G8CuFJ76gusWtPaHMM",
  "key24": "j4aXdV7Pymd6kzKHsgpiFHPyfgqgzYtEjEEyyD2xKJmL7ovxHuVdPmndBSqBjzk9BVcpP6udKDxqZ7PooWdfYnY",
  "key25": "gWVMF9hdTeFjURfF6Vau3mYrADSZ8mXreL4oYdFYsxXgf3oSM4zyxwoseXUYu81n36PyTNT6xX6mvQC1t9gsrWD",
  "key26": "67PEnBvdH6TwA9tcQ4bKgd6e2FGqccfEkZYUihmB6KZMuGqeHm6Wcxa7jpww1YR4TdADciKmA2P44dxAi92BNuPW",
  "key27": "3PVQKhCTGJ4ipUjutR9joSfxWfNA1fzbdhR38sbUMVKZWWqHmBY4GM8BhKqvp1bGGeZ4sLSWTxy7hqjf2M1ZDdAN",
  "key28": "5vvdGQaywYTzU9WFAQEPUXm4aDJYBEpXLwG9VPeQdBbLM84sDKGwPYz6EceUYhFDW5ePgn7XvqeiU8L97AkaB52x",
  "key29": "53Fwj4Q4B58aEEHHbku4GhR6aV9DWcXR5ZZXqX3gn9tQjnpVYJ9tirwBKutePDUsk1egyGGzuZfrhZbv2gSkGmzo",
  "key30": "3LKQ92kYep5NuhkVvY1Hts9ahdQww8n2VFgrmZ4EgS2ZCFDZqbbQNfvXrGTGLocZGijNBjKvzuqo2obXkuZG3z7Z",
  "key31": "64XpTcQk817S3H5K1HmaWmAiEMZVTX8f4HVhBtWm6mKxemsXoWDWuTsHgo6WzN3xPns31AKinj9Ax6ut4uLU6C6r",
  "key32": "5ZujbFf3hYRxRf6MyjpPoHH3tSoZ6RsZcj2KJiKnWto7ifvHrerC1kGmcTzpFTRGDiSf2E4mWRNWF3se4oif9VGS",
  "key33": "5abPLMJuSEEnbuK7Xj5kUuUdWigY8UHdgNFnaVf1CkF4RF8hxEJij4LkHnnkyYPaHw29edBfrFTgJBamSNxRDzxy",
  "key34": "UpYiwahAFP4S7JkEzwmxQc7jCaRVBgRGH5wzsu54UCkpHkzHB5ZB6MQceNJ8tB2Q2Y4jWvsfjTaJNZMxKBHGv87",
  "key35": "4MGSLaBdNgKChN2ZnRKfoJktVoekqKXyTLdyqR6WzUR1xsvBYXrhVETeC1KgxkzYVf34QQ7F677yfYKZQVewLyQK",
  "key36": "4CnwpwmxH6LjsSFLGag8zCicsAmpXXy7t1MAkokYtJh9SyfStJLThm9SXUzffviPrnfk6omGHDCF7kxs2FVSbowK",
  "key37": "4AzxoWKBZMg6NE6i3As9AwuYWGjaXhrbHXL2W5gPxdjfdt5S2f8eHcx7zjhHg2SgXKnPb8N1krjKdFVvs8ZJBrfb",
  "key38": "2TGgaxJiGD9gGvJeEh52d9dJuveSqbVmKQCcD7bBJgBjRJnY7ZHV7eFH48zyVY5ZCHbvyTrdf9wA52X1hHBjxa4k",
  "key39": "DMJzg5BsZYyzA1b4V4aZmnwaWDpnnUHbUtx1vHjB5yv4VaDrDpLJZBUBZbahe4xVvRh4pxu2zDyjyd27iMMQDh4",
  "key40": "hkxdQQ21BFDWVFTZXRi97RQdvjrz9FvvV9NotzUp5EV47SWDCMAqwknZ4iDZfCzSbN6MeUargktfgWVNTbo6sGa",
  "key41": "65iohJ2uViFBPyNVqSWu68DZduPD7qK7ii2nrJfyMtC1EskdjsMWpR66sv3SuJAUzCSVXCQiF13hqUSexMSf4gFc",
  "key42": "4v86cmKcozdbuJ8YXXu72NwrdVije75QZ7jCy2z7FV22LtqyE4v9zq5FFCTxE32yPDuvb19UKDxytMhRAwqaRxMq",
  "key43": "2ufBrYctPwP8dxR3GD8BRiwtoYEq3kF3UJJKbnknFvJUQd375xm1DywYfBsnGL2upeqVzm5e72WvS6M1AkppHs7d",
  "key44": "5E8ARRvpH8KgYVPpcx3E5hfHN2a7BqTsBrDfq7ZrBcDqgUq8bdotsq3SwjZdSihvmbdM7Yja6euw5AiVSQkd6hFz",
  "key45": "2q12s4cXb16TeFjAAjFjD9zGddBFVQqKKU92ULxuWDoFT1ArUdHfDd834EZ2npBSY5ib8DbbX94ZSjJNuTEBxBos",
  "key46": "2AVfUea785rDAjTjCfYuWvjCsTBuvd9JVAbUnAQT6p4q5RY9w3vaojrrNRgF9C2YnGqX7yNy1bQQPE4EqDJMgPw2",
  "key47": "3z9odpeemnaYUet8S2Ueq5C16KKQVg6xUmVKfZeYRp5E6yGAsmcRgCepjppiQzB8NWYf7w9sspzhoVumZ1gfZv7g",
  "key48": "5QWcudbdDMkVdUaC7XVxS4zcVsC3zLWRWScWjtW4sE1gpDAhMvXB3SoqZTZ6xD54caLNp4vo8PJoYTfhzY2RkC7z"
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
