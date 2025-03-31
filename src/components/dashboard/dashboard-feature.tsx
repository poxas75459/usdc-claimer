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
    "3dkR3LtjpFsXLtsyqBb739vr7JfE2eD5FPA8hHUYoPcNirS9bGHPSw6MDiBLq2vAdiLufzC2isCdKF9yvQLCS1Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRRk52NcUdXkvN4X3mWVV6dYVU8K1GJCmGzfTvZVRnrUTvyc1H6m5FEFZv5p5v3SKMY6PTHSqryY2b5EbMFvXaz",
  "key1": "25fe96uJp8UQQub2RopPEqXGCkTCCFMES5RXgMxDccPMbbAykomCcBnHPbAH811VBG7m9TeUc6Kku5Spsz99XqyA",
  "key2": "2dEg8NivGBm7bCtqevyAJrRKPRY43sxmaJAS2WfvqJtUuzoNPW9UgGSQcBTFw4gSygwgg5q3SC3ZB9EZW8x3NdRk",
  "key3": "5QcRcfWzgj1vJtiXtTGfyw561aaFeZ8XcFVBNd6tb7Z7EApHzXLcWXEy88r1Xpe3pr5AafgHqqJ3n1v5EY3zjvyf",
  "key4": "53wG8a56C8gMDL31LbkaTtkRDfzjGpatfN8RvpTx5Zhx1KWWLNS28PbJqMRxGhKcNSW8shx9Px4zeNdHCvW2T5Hx",
  "key5": "4c9nEmbYJyDPrx6PNmPx5fQLAmxaUV9peEkjqST4dF1sWp5mhTYgp7jsYrzETuE8VQcmCJ2kuQiR4Ta7zPZ5yvPx",
  "key6": "5CfJRkMCCVuhLWmPYfpWSLme6GFvNJ9mZgFed1T58Q5D1EaofQrouJxkHZTPJZ7GocifJoj8npxtxt8ZZ86HZyMy",
  "key7": "ttuL6ruQSd34u4Jm1Gmnesu2fFUajFrDaAxGvRaGERCgeyWohXobdPWxREMYxqR7mKvz395o7WrZwkZNGgkpv1P",
  "key8": "2gRKksfE1YLpLu5Nk1RSL4h9j6QKy5MFZZbcJMpV5VBeQsyRgrUgftpUFhqPRUdrftgvpxvxnXiuicAdK3GRFpJY",
  "key9": "5Hy7LqykDimaoMERZmuEeUG58BqHPS616fL4BVgrUBcLjkJhKSdBPgMrQGWP1khfSniUPpLyQKAvKiHJuYfdqh2m",
  "key10": "A7MLsfi7pdzEDYGFhNK7nZ8Scs895V9RDtMYtLVPPCkF9R9BeAdxr7BjjbH3eFpbF5xZYGrHumW52tZFRwmC8Z3",
  "key11": "5dnq9X1BRQENHEfR4yoqSKASXhk1cXcSkFiB1m2NNxyDUvdpgGQHA5LcsKjAPPPFeTfzDVkhb1arMyyaGtBijQt2",
  "key12": "4K7MBQ4ECXDGdpQwW3FMCtDST6jUVSksZYquZZGSNwTRpMQmgAoB7QQFkkKjSv9dRHvSuebusPK8z98DYEYZvfC4",
  "key13": "2XhKZFhZRUwhWkP9tLzNtxqDSud5TBNPa7pZ3GxPuEqzupddDk1WQMJvmdu9X1MyND56Un8Pj9aZo1uV8zAMTANM",
  "key14": "5wGXfnr3avdq3yFLxctUreGjKsVHfZajcsLN7KhEWpm2MGTtomZhFDT9o7tBju9MLpM8BpDraMCqBXkBkxhhqb7v",
  "key15": "4AmXiwqzT8a43en6UfeHtNzVZHVdvrV8he4psGBceqFR1d3vZL1CgonyV36ZNutSATyy6QgYLLNoGaDbYYpi8c61",
  "key16": "2r77PQgMXQQ4Qjv9ZePnEqiyRU3CEG4PkUuQVLzEHVQmaztR1u6RRM1K8hejPG6A5hn7Afxku3ZPdthoZ52xymtQ",
  "key17": "3zwKrxXEa3wAqEYPKjT4HprSf86Hkye7T3owdf2KB2jccqECMjNyTBHQnwkPj2W7giFH9gXUED9h6bjekSYXmVVZ",
  "key18": "2u7D99uX6xoTpPTWJne34mBHiRQ2XTkEoid5pdSaSTTnBUiYGHhP7TUumeG3A1c68ENRcFrQZyG7q5WAuisG7gFp",
  "key19": "R3HZzLpy6J54af7RZbo3eazBHej8ZZj4DSEQQofzi9rytc5RRBqrJqKYfp7ufnrmTFHfXx4vT2fqBuUkWboRNTY",
  "key20": "5ArAA8vMdZG8QK7Vm3tFXawafaFdiXKvQQvt8qm4eH23SVyffVdqiUwGsNFDHwaeWWkhTH6RG7zLfi6NpsFGdPYN",
  "key21": "5qhK2fF61VeEGvJQmWYQhWrmzoaPzDDUpW52hkyePHLGJLcRT6ca7DQniVQPPFKXbXfvVWzygkV22N3bCko8gswa",
  "key22": "4fCY9mLVyePiqbuqNzGu2rLVGwct342YCZvccXDHG8v9fSpZdJW9rtuHjkn2FXDgvQC5EgM6jaUCBEoBnqSckvVS",
  "key23": "4B9JDQezFUxaHkvcqNrD79m9hjCaGJPLFGmDXN3kraDqT5VnRfteLZxD3ACCNBxnSoN3Sehjs62Hqgkfydox1B4D",
  "key24": "3uU26sYRrio83KK3619EDMwYaoajyHMYgQfuh7XPkUAtS9oNWhP7mAnr4WeV5UctbkuGAzToLZPvyy3NTc2Ykq1n",
  "key25": "3Ecrnk1jH9DHsqQEKkfvpqL5Wq4csfEzLmzSq6JPwSKWbSE51NeBoyqDRydJosq4765bk8ERddaiHYG1uYKdG5eN",
  "key26": "4BpA4wjhB4MhfVe8bApj5VAZ4HbEwAqCThBfkaCyZ1477qHE2ToJmWGh37gtCqeKuBdakZrkNk12p3EoCTBvZSL6",
  "key27": "2eVHLYcgTVdPgT3QNuVEBswhtSi48PPStyrmim77fvx8AaVvbBDu69fb9X2BLzEcfEf2Daw1p1vUYGDvoNuD4WAR",
  "key28": "3x48GmeagNZL7J7r8NiJfc9ZFkNB4eBndEdJuTxyFgWYjdeR972onkDRb2q2bGTmAjD976CzWvu8cUTFWWVM5jMz",
  "key29": "rmVSdvMAHA8tMHxjFeJQ5c7PEojwGyqZ1WHHXzHNzmt2Bc635qL1T5Jf1G9pNJPPwCBt37pMVpowoSFS9DTTKqi",
  "key30": "3oLQBZBVus3xS5BHW2WkdbqbUGy3dMt7jV9s3j4MsT538UjmU8dNQzi4rEk7gknKDfx2Hcm7ZNCxxHS5iuZSdiGW",
  "key31": "2z3PBztk7SzzFBKJxd84rNTS67nFJqw1SzeMF1zo94srV2wLizatjvLUkBKAAHLRpoqZB15R3DqGiaHfGjfV8QGA",
  "key32": "2iKXpKb9ptYBei3QSBWR3mP4NDuEDC3bwxyyn48PDewqjsABK1rBiBXFyMgge3Dj8XkRPnSGqzLvwJnXF9aFBVpx",
  "key33": "24bV71sKqnjqoQiRmued99n9NZ9ZfvSkYNXFuCRBChG6UjMRu7bzS7rMVEViiC8ETW8Lgfcngmec28zgvzPycqEq",
  "key34": "67NV2XWHaXP6BbSTmSNsUvrr3nryrsqnRMpCZAydj3vmdk5nU71jbmJHFqSDp6a3UC3FR1zeZx6nJnx2YNHovY7b",
  "key35": "32AD3WmTF8aBDquo7BkN9nGUxgFi7fwKMP8B2pF5psaHs6z5T4MxgYTM2wxBw8zpThoFY84zhV4tLrj8fcvMRD9u",
  "key36": "2iLMJq3op6AVPwQVYRTBLSQVansSVPYYWquuWQCfbPyEx8n36hhx8EUHhAkZQ4WmZRyhcTXVFDAz95bVCqa582rw",
  "key37": "2VXyen2uzUcqqeAvXvUmSZxR7QEyCzuTVstPW74qU7jmGyA3Vc6Muac4zK56JGkr16UDZNcgVRtBCWbtPyrmBQug",
  "key38": "32Apb3Ge9kTHbuQ7FFzZof6U4AmNCZL5m2niBpjdM9SQF6mKTfjMvbe999N9TqnWeEVjpBSAhApqccHhviZ6cNVh",
  "key39": "4cs3zwf1fPFra1cqgVMWFdE3xjFp6docr3vGbKnatVyB3bfo82mTai3BxwfhnjycTDcnk29bUWa1acPMpVyf4WCw",
  "key40": "Q9fLxcD3JfFKnazhqNGwUSxDyLjV9WpBUcCCJ7gFJWWRH7rk9SzyWwEj3ideBZ6wo4WsL2cXTCfHHZT7wYnmVwK",
  "key41": "3AKsCXoK6RFe5PFXcTvBZbjaSLqmF4P6yJPCEA6RFYu4Fj7cQMvdBikAoWWVa5h91RFGaKYvzCfBtJjdrYAFpgcK",
  "key42": "5uMc2JS9575sJ4iPibsqtnjAQu2kfqHEiRxPrTtCshVNJd6jivVWWSGBaie4aWi5Nnv93PYCDuu2AXGwDzrUnoNN",
  "key43": "2xcCSZTwjdFr8zYc37oDQvKWek56BmUh6UhKArrzuJLyJbNUbMfkTBDiBSamGpEnB1gyaZq8LFAme27Tt41tfM6n",
  "key44": "8nAVFkKVFhVZCX6ybWWozvDyL9ZHne1TRSZNh4XErhfgfG914d8fUrvwAYJebfQPomkXsE9M8WdieVH429EHJ4w"
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
