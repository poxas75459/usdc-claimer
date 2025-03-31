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
    "64HjnMY4qY7HB44WJNiVXnB29hKqztAdiufCa8SHkAkywpJwWHcTdsrjbQPV6vk3hr5Rb8UaH5P4mUEktfy8Gvhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQ2hEmxgHywzf8YjzKDac9fho3c6XRMejYgv4skT9TE9DeWDSkjKyTUGDDE32QJ6iKvwvrx4sHdCAnVbES5NvLq",
  "key1": "4nwMAytJJEdYxoYVtyy4v1FSbCkr78ZWzV88JzKSkGNYaRotbR9EDN53JcyLbFjV7Y65Q8os6vyPQXdwqQvaETrm",
  "key2": "3iP386FKuaBYTtJNe2hqT5sJzAF6dY5ox6vYxiXN8SLyiuTeUfsD1LQqsCFmTDJjrHskCYzmwSBCMPLAG9j6s6xk",
  "key3": "2zTwuECCpTiV8yotNyGBfiEZ4tPS26tFJXmu1ZQEoAUeiVHtuA3znJPD2LLpiqc6ZewzhiHEJoy3Y7eLdW9jFfJZ",
  "key4": "4qNUcwS1cYt28KonfNv5UN3Z62eRMozvFHeJyi6pGKJZ8fZJj9uvkibFUsaiyt3uc46w688xECNXrH8VcpWPt6nF",
  "key5": "2YxWoEPohxe8KnqmNb6acmaWpvhRy22hXwizGm5Dwph8tj8zPY8d2qRmGSFF5bUjbrxKmcFuQie58z4o9eEUukYq",
  "key6": "2vv9qhmseBEyKDinQeS6L3siUUARYqFBQHdmwX97F5a8zP36vNkJ9YQMcZF29E2JkAGFiDEEev6YHgF1bfdASb7",
  "key7": "4iTuvpB6XJ6ZC5u9Y7QwPKoXwTRiTZeaGnFGq8cwHJbBj3LBUDYja8DeeqZQsAMJFpdH2hQbr3eYFT6zZTuk165r",
  "key8": "4fpy8BAUFXqPgHbfGW2wVpVRCPHt6vocipG5sVzF4ot3hQ2rbqtHNtbFy4nerzzJeD9W2ajmZ2CUQdj7AMi1FcAs",
  "key9": "4MGW2D9KVJwdMZ7BdzPQhBb5jqiuP35LoNookdqSfpguN91L4s5FafgwZLoGq4RGgY2JqhaC68HmgmkWujqaJ9zP",
  "key10": "4vcMWbHcULscAuDdH13rXHc2GXW4qJwF3mFwyr6We5pamNd4rmhDpKfojTWawMze7uc9ML3xWvDkEKRdzhXbHMhw",
  "key11": "WVaTpkYsJ18GK3DWb642q4ZQtBkWKCXHHzUwtbtJ3WuHFSrk2bCoEmxM5sfLV5Ep3cdPRNE8SC4cj6vUYC3YsV1",
  "key12": "25ceNiQN8hgVjfupwPcxVv6J943F76UWGg8RZXj1ADsVEZ3XWyng6SqLD4oeXwTz8VZq61XqPsJNSFUYnR54fks2",
  "key13": "4cauByHFW4XbpctVqhLQwDf4LcfpgC7iHUKcxerBsfDKasPHkdTz1X9ywCd7JGfin7Cwr2UCfbm4NxFfK3RYgfwx",
  "key14": "3sLkpJ3rRjzPVdbtF1DNXg1CcvmFtvBFEmtXMtsdAC1YMNbnhwaD5cFNrRNUh3RsYfh3LUK5rGHB4eH6bQQikr48",
  "key15": "EhTFFzkQZqbKmUAge8W73hhC9sbCaDG6sSiqWnrhkFhXYT4HtXiZ1vdka7DBiRKCmZna6mdtFq656rmGYiwBrLu",
  "key16": "5qFywUgcZQbJpBkVtrQaxTYTjJ9KYnMG6x4wb6Ga2QTw2mcVxGSrBtcchCrvRNMM2a2m98FWDjyAtAYNnBykpN5T",
  "key17": "3BaRDceGjUPrUPhZfE5V8peFHnvotb3GwXJKdJbty7meZBAJ4ycLMC31mPWfpeva8EQeuJaiN11esNBqXUr8rtxB",
  "key18": "CW1Zeczm8QautSogLFPgwVEK28NmdY24iWXZ9AdRhm5BygqpY3Z3FMqZf5ougMFqyjCvsbf4AfKMdFYZCtfNy4u",
  "key19": "4gcsLDzWgRYFgoxu8iuNtpnoAWpGngdkg54mbW8g5kR7YZhqjGiANwTsP2nX5mhVqzXMQadxZ53GeGfDKHp8tXs5",
  "key20": "5yjMXWDuMvSMkRFKLZTMAAJSvAeb6JxUTuJtxDZtrQXytn14UGZ2Su5tk6DUEfTzTNeyRqaCx5M7WzLKXsVY8EBh",
  "key21": "3YSgpLFfmCihTuYFPPtyQyuteaf74CHpVrzghsvxFAdJQP6BDDLq7bV1PQ5UkanjyfQhjvhU8AFETn2k9gdvXQwC",
  "key22": "3NvMEJfq512A82JACjEYjXBwqvNPdX7dW52iDqPqDtn77hD8fWEco4obexneU9yN8R5kn4V6HtCsqHpBhCMmZv39",
  "key23": "258xRCbXky1Yvbhe6bqffnFzzqrgiV7vuwBoKqmhfCcsP7Gdf6QpijdTzEfPESfPhpMaYZpfSFAwSBj7t31zAL5B",
  "key24": "4Fp8sDEMNf9UNGNJ8Bidx64mTs8ZrEVXuWhuiZnkZ8fhyKjch4Gu6WWcDCYWCe83CFP1mHo4hNrTnR2u4pBMkNDL",
  "key25": "3yW24XzbL744ghuKjJMFQ5U9mk36mfRF54Aq8Ft7ykqVH9fbQgs8BurcWXWD9E1AP3KZqnsJSrJU9pFoMMcsJxxs",
  "key26": "59MqVwnn57MDAbgnccvRwwtAUPx62HxnXk2tmUw9GepRAUrrx1cstmnnRSbYxPeJisiGhh24k3G3CEypVdWF9Z5i",
  "key27": "5yPKf2rb5CbGsRwwKxPTugL2n7nSFyQbpeXsFKRjgsc5sprz6gQqjmZXHLv5wfmv5NetEk12eMfJGaaMy3Drvmie",
  "key28": "XWVdyCmx7JanYszUYcA4n54cGSufa7iaN3bzmjJX8jR1t1xkYzLRPjtAjv1k7ZUXefcNSPp6wTeW2viJ2UP563f",
  "key29": "5EnSKtzxsg15ZojDnd9u2SwDdFBUEzRpAm3uekAGUHxDffK7ZfA9Lc21CxYuxFd8CM2zt9ZgXvTkiiGr8AkSGLLt",
  "key30": "DTHSQnNkXcSQYToZ5geXFV84E4tfdjMXqHr1Xihrq6kDytGxmimKTmcA5cszJuibSDcoHrZV3hiuCcRU6uAkBj4",
  "key31": "B1xCREWuGGLJYeMiYQrmGGQQVbmVdzSEqXkNie8ATkNovkDGQEvdy6pznCEvpfeN5vmgTcXY7QhyzFHuieH42LL",
  "key32": "2AdR6AENXCoLG7z8npMRe3CBcyofnF1AyBkjR3cDBeaCxJu8BFubnAAAmTmz3krtJwTGJn4pqe8q1cYuzCJycvtQ",
  "key33": "5q2xbb2SYAHTFRpb4fUZcphN6BMh1HgLKTvwvrSXhoUmHznnLJ5svhZEHzFNSqcGJSrUyCBbudNSKkGsNGqNfrdL"
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
