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
    "5tjfCiXfgoHp8Ut4VKLnv2vA9vM7WMjoFnyGycH9oK1xiDZYQPq9ALpN6A43WiHXmd6tXN7y7dnsXGBQjrdLgsLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XfPn4VLQX5C7uZZ14EVyumWwDo51YeFBsRJhaH4VSa2zPm4B43qPo36A2dSshDucNCaGZG1mia5Q91f9Ks7JrUQ",
  "key1": "2CV4VXXAJ5WuX1pQHT4k6rX6gVoVE8sugeiCYKuSwjSh8gMXrNBCbSVqmwpM8FqGWNFmpWwf7jouuHZLVMkynkqM",
  "key2": "4vSmDG3vgEaZtNExn4mHBRJdMGK4drci8Ls3Fg5FWTb9X8NideiiaPh4vHKTQ3L83tj1d3BPULyiW5DJ3qETvSDy",
  "key3": "31FPQdXB5guZqd2qKp4q1LFoN6Aydd7bsjifuZnAZsXiyszVb33MdANnhGyxGNLLj4LMikwourFBct6km1Agijhk",
  "key4": "4g51oXM7C7WLMGiQ9THB1C1W7DWLxnonMHyrSypLfK6Vagh656JYAy9z9xL2HiMfrK8PXdq71nYBA42ZZ9J3ZTV1",
  "key5": "5qkLFNbrf45FbrfGVnkrn5dzRr81VK5t3PkRzkRszBSENJSfPiTY4VZzsFGSZQu1hSw9vUaqJtH6VXs7tdqDLs5r",
  "key6": "wEB8k6masAEA8KQdzCgXkpebE8jSgDGEy7NqfHL4Zi4MvRTKXTPpVQwqza9xmmuw7vbAUoBtExBPW2if73HDGiY",
  "key7": "oJRZw7YLo6YNVCB7A9rdkbgS9UhhkFTFrmX2XowVNbtgTJGNHRQbFJZ7VKAbjHH1P2xA3QWXzGX2j6Mvz6Xv4qL",
  "key8": "ophKDXrNgWGaFRqByzvegfgp3hDoBXr2FuKd7JcEGQ2aqULbfEuqwggyj7nS5RzXMiYGKNJ9uFpQXtnK3175FVx",
  "key9": "2XCwF9pCYLH8kXYhSJdPidkCeqz1qU6PVjspBasfKBRNUrvicmorSFamtVcKSFGuTCiyj9FWu1EyZXWDX4iMmDPa",
  "key10": "psWZPrHEBhjiVKUFPt3wL2sPak6c8DFHvu8EjjfU8VnzS1i4q3HnC5sPhUDMo1xrQgcXQedTCRdGGND5o3sfSkF",
  "key11": "31PuyEAmjhyRLdPqRwsxybxTJgz8ZZ3VFrvXcGSdCV9UsMbuR15bnroadJj3Hamw2iwaYfB6am82uH9drHNhNa2D",
  "key12": "FwsBfgrwMNeu5HRsNwJKBkjsf9hgub4hzrfTqgrhdLguqwuWHJRt6fZ4KSYkBBf13wYy3c9t9JE6VjeApwb4Lar",
  "key13": "3nibwV2R1DGZBxxzQM6hYCGw6PW3S4sJdh85s5EYYkFkSXYjhE3GQFBrxsm9tVZLXTQTBFMAjPrGoC1AQw4vu6gW",
  "key14": "32zxghzyg8Ti19QRsfrUUpirNoPp2ykgf33uTemfdQpicAfQ2nVMLoZKRdQ8z533LsRrSQwFgqmCGNosKystNzGr",
  "key15": "3TtaLkAzWNYrWiyUJDnJcAN69aSPZXGUghsMUjvNybNyb6zJyjBd6oXd2pUboQMaR6FGSQhyBbeStyWcVzZKKRh",
  "key16": "5kQnfkZiuV2w628tjLLRYBkC8xEMkAm6KCQxgsHhJwPK6qESQSYzC8MparsJjVGooroXEye8iEpjz2u1uaAfcDNw",
  "key17": "4WBqQs7V52ZH4j6Lp4bERfyCGMdBFQxogA1dgxEq4aHBZnQ8WFHBzHXT47hsYTBEALHm78Yt9XAjJ79bDtXGC9ZQ",
  "key18": "4fXfP9QaTE223J2LZrEjuyuGxMxoJvd761BMb8fD9wPjJAQYyjyCLKobWpn779gcapPSB3B5CvX9KFiPZozYxtRz",
  "key19": "67DMjQhgKALzqHtYCwy3tQLK9w73UZ52c5PRsQJV47KnvDFWWKcyahR745886CjhPQWxiPW9sn6zpTm33Fvr8o3Y",
  "key20": "4H9XcHQ67FiMSdEkArHPqYFrZpghQQtiVK1YTngnFdbFVPDTBmcYpC3beui3SXLXM1c6iich1PcbG9zfydBiigE6",
  "key21": "n7rkqZuH2FBvnrHDRcwG1B8LGX1QCjS9qu6sLr4LczceufVQpgnZBUdy8yZt4rJatnNxCxdHSxtX8pKv6gkwfyb",
  "key22": "QV83jPt1Qm9F4W1CfmxSwdyydJT5w4WNtzZ7Rr27CHNBijGDf8zE5Cfbi11ZL9ptdG4fhoSiQfwYqottTghdU4S",
  "key23": "4arSftzoCuJQFZ3iUGtzh4H1biPTmHigg6qBiGiGphn3Y92iV2rv5q5Cn8qRwhDvrMHjK3UzKBLvF6pbhQUCsTpF",
  "key24": "5XfRKZasik3Nk1Yy3wFg3JRX2WF6LF7wt3EeeDApVo7wqfthxACS2jxGc698quJ9iE4BGucBydJC8zPyXxxEjckA",
  "key25": "4VoGXgyoHdow87eN3EzV3WdVqxFkDLarYWJdf6d3nnPzx9zZ4oNgYCuRhHcvbQnS8dHTz6zRcFj6JeCWySwxjWku",
  "key26": "47rFs4cMPLTEXdEjT79K75V3ma72NoxLatKNLQ1zfJWopDHc7VsStCgVeWaQ51Cnxb1aHwRCHVGS3KbvwQxQoAr7",
  "key27": "3xNmrCPutnxc65AVUoAgbGPxqvkijWQZH83oMrUFr3DUpNumVuVGc8mGWY1N63mBksLEBWSu1JUHxuwhkU2pbM3X",
  "key28": "2jmG9bW9c4dUS5yAavuSKHZntpwzftLdYBNwv1AyaDmTnNmNE51vuMBG9bDmPZt3AbQiPr3i1V4ieG4t6dF3Q6uJ",
  "key29": "ksDxvNrY1KRr7mjARdXr3M6GSNaMo2qXFGePXjb9a5jL262FHo7RJfvrGkgx945bgCi1CgJSivtdEgptwfs9tEn",
  "key30": "5Q8jKXJFxp4qGvgCFLQAiECCcQmk4438rke4yWdFaxv6cCDqmef6gTBLQ5TWw9LujrWfj4ZVLdoCx4CRqrkXsLdS",
  "key31": "5nQwuzamzRnEdq1P8oNSyhsfrwhaA6wXyiDexC1NbKv6dCRR5JK3SLHoz46mrqxfq5FUdZcp8ZZDDoNQUJxpZmGL",
  "key32": "JgixoTo7vHYmojLvvewUZNgSXCrqPnEUr6T7MHmUyeGgKCPu4A7CP1S7txCnaJfiR91p6hHo9RD1g4jVErUrCDt",
  "key33": "5Unj8XQuTnp7ffRKyRvC4tHarpx55CGzdCQoGJyt9s4mvUobdszUWkHLRmstbGMbX8zuzQLCQLuyAimMWdwLmML9",
  "key34": "4nFpzg5jgzEKxdCgW1HkbWNFGkXapjCHRFBgQp2Qk3Q2eSwy6TFci3ynC1W2MeqtohWkRnN6ErCkPntPK8eEhMKA",
  "key35": "yJ9wpSCJ2vnwZnmSqu5dKkFS6GL4BsWf6HMJJ9x7KMERvC1g2qVRopSeR3c9icktDdan8o12pV1A5ogFh7DzJMW",
  "key36": "dDLHtRG25PUkL3GXt5zrmsxhN7ZNs8t7XYLbJ79mUVueLxQS9BZKwQk5GZrZR5jXvGQmaxKesQxBvUUQVfrJQzK",
  "key37": "4WFwZ95JpXSbFtJnRuTeAtqUFAcjkUvnoge6kScKMahXVGsir6YpGUdDS2HDcLoDTwqVrA57YD1GDmbZykVG8d2t",
  "key38": "5rKDjfMQ3VfDdHLnWoXAiqbK9oNztmLvAa6yDt92jSq7NvXduRJP2BfjyHzwk1preuEyMhJfCHGbLtW1odBQcdYs",
  "key39": "3RMbBFHndBRrAJfEHW1G4bgNLDAqK2dxnRAiH7D3q1NZ4sYrgfTQenn49N5jwyanYajY2wov8ZMYBCN8D5GALuqA",
  "key40": "epZLsBqYC5Naiu2j6gGQZNo3ap13StG37w1c842AcK4CapTvoj9FWF87sK7iTMKHtehNZMuu99EQoSQqfK5oaX5",
  "key41": "3VEwL7T6P4JWrUeNZvvgnoLhkEsiwcZFGEJGmEkMgYUiHsowqwj29RzqnRrE3SpXnygeTEeRtUJbwgLkfvtwfseM",
  "key42": "RFgowECoZSueTsDoVYN1UR3Z4KADdRgxQBPHyXyALsc7HSoefqkDoUfSWNfMtX66xZx8f7xXPCMqa6oW78t2Vw2",
  "key43": "SQLZnoTruhco1cp28r1bLu6PfquosCgi1zZsauesrz2qwkiZBLgXNqDNoZHten9tJXRj9CMidxdv8fH8rvKGfs1",
  "key44": "4diRhdRfG9sSHjg7EGdFB1rgtWrKxquybpKJucSnYEoE7jVnUGwCCKWuRfASP7ePYLj5tTFVWxs8pncbg5Pd7Wy2",
  "key45": "8Tk21qjwzJLKbLLSR4ac2PDfLfKMSjL69yjxMbvVj3LoKs6WAxCjGhx6DQFWYJREbZWxizKZwai5BS3toM2LmHG",
  "key46": "42qBVPwX1eLPV4xMneWdjJLc7CKYtjhrc2zNjApywRVzu2M78sipRm6y4vrtFiyUjUjvvCbfpxtq76pELatyhnyF",
  "key47": "5oKcsXUYgrKvisv6gbsTk5FkjwV8WXYiRiDBt27ZMetaaB3EyCSbShM2aUbYtASt4xLXfuCFCbN4FbSbneDv6ksZ"
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
