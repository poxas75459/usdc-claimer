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
    "35TWfDCfMNyCYAaxh32SF9HDUpGwpe5dJf6ksWVLPppbpgZgPRyhGPhy92e1hu2cF7fhTR62Q4tArGndo9XyEUc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8gLC7kVaHYi7cVXkCtYsmBTekifVrR41ytrYs2v4j5GDwufPQmpEu7gsG7qqM1SWoTi9y2C8bfRYG6zEGk7kSA",
  "key1": "2XC2B4fJzjg7dVhJzTANZX8FrEZ5d1gJ8f6QtsWqPP3TKeSj2pvrdm894HBthR2aanK39e5UBH6899HqKPVs9X78",
  "key2": "8tT9nh2nJUMN6yLHvq8xm8z7oNrmvejhYGV9mHpFbpF9NHneF9ZiuTZGpEzXzrQb7bF6RGAEVxqXXirCM3j6Nft",
  "key3": "2S81LtMAZ6rzK929x9R5oR1dnFhgZgzS8NtkpdPHLbm984JbRCm3iJDKsHYQStzBgZ5j8rr5aBbZqpRxY2SQJxrT",
  "key4": "4Ki1MxLqhBRUSo2RJscEppt7kC365QoW7Wcd4fWATezK5sD7ns9xyFpXHAbHPBXu7nomuim153wM9Jjm7usdTskx",
  "key5": "5rjdW9rGQ77Yov7BNAwmpMiHbrMMu8zKMrKSi6geDTwtcMM94x3gt9eepUMCHjDf2p9yKMLzPFb2MF2nXefJjkmy",
  "key6": "3Wg1YK1wMjGQ2FqXe3g1s1DjLutnXtooGn9zWon5mwrpWWf3CtCZSWrXwM1qg9paYsME8Jc7NMPnjzowVaT2tLix",
  "key7": "42Kab7dwWq2v7fw2AzNrgM6i73gmPCLsTgBNfdhzpGyc6UXgC3TT2fHBcUFXsUmjWNprWHZJ3HN6L79GiR1ezCr8",
  "key8": "3ZDWxzB9HwmTuqpL22A1gBGxQv5rwL3wejHpHNFQ5vX43uVYtWheQG9yT2cHJMvPfvWsX8qbr3R1PHUJTAkzgeq5",
  "key9": "2vJC99Mq6eZc7dRt7YJPcP79iTWMoMAVtwWviESgN5qA2gnadbH4SEEVXU9vPgLTCzn5Y9iKyXnypRSpa5Rkom8Z",
  "key10": "52MgtNyW3GfE9fmzPN4yazhkJAKUT4czY5Fxj9QpEYGjvziedKt6etNv7gKkqFGuXc6oB2WdaLUTeuFoUw1tgGqe",
  "key11": "3teESVSx8sCoaYB9uKyTpnxpgNNJUUpKWjkxt6zLfYhJkCuxGSC3eBtgM6mJ8LSNZuDbg8QkEyfYLSEZaeefesXt",
  "key12": "4HAqid2MvTmt762uit416bv94LcFMLNDaEQX9ojkkPi8p7dc8NWimcXJ2zFKtcUQdTFJvoENxUkzJWL3G1i6HzKN",
  "key13": "2Qy3hf4Lad6rFaEJP77LjsswHYdVJk6Q5TonRKEKzzCrca7jsdwBNQtC1DP15yf6YyeRcEgv63HRVy4au5ybodxA",
  "key14": "2jqfVQE4Y5yUCoxcUUT7wGcGg2V54rmrZ8EVhkrjAWdKZcLLfqzFyLxuGknsMPrfWYAYS7rDH3TJbPDcbvGKi8yQ",
  "key15": "vubQN6s5Ma7zzfQNbd7YxJciQuoXkLgpCr19qCCWnVDbSixRRBVcd6tSzJLK48gqnT61f3yQJpdCaiXKxGgPD1D",
  "key16": "4wQarHaTw3Z9xfvhE1dMtvzpBoz3Z1v6gDRJE3HBqBpyWJnrDJdvbT1zkyk4o98k2bLa8zXqESw5Wqhp66JS3cD8",
  "key17": "pHcppeEd7GeyYiZMyvvrjfVA4krb4Gv3CYEe8GCAeDhSArrxj1cKnEwhhgURewGV59spEDdCCuCxLZuupboruLY",
  "key18": "63oqGeX3rv1ttPaVcD2LKQEruYfKWarJ5LVM1vwAxRpz9pWGWoZxn8fRM115bKTPNdTB2LjFXJbNftGzt6B2nTFH",
  "key19": "2MefA9xP348GXpBdQJMh6CDQpxzxKTLYZ6p3XT1H6nZi38y9w3fknwjt6dWAUqJMooeJN8peZDxaJ7sKh9mQyQBp",
  "key20": "eQFeefosHywjLXihC4NARTNM64McA3cGUutnomE4njLLPozUbGfKmhFu4X7KYzDyzAJkgbkP5NLAn5xdRMLAm7c",
  "key21": "2ps26bzQmMPV8haMLwme8bryptJTqPjCLKaVFr1SYXJQXLZXCjy4T1sewn6pXEAyHyyG6LwWBh9C7gFoZyD6XjHy",
  "key22": "5WZHSPX76v5Dw1iVPkogGtbxwhVwJL6b7ueLcB71SiqJ9pTfR5XWqSth3u9j8rbgNBReYYwTLcYd7xZMUqntSwre",
  "key23": "2cZhusM13kyCr8vJxadngPaRWJq8DpXQLNkgZRMmrV89ef9QxWawfNo1iXcTGMkK66GKtmpHDZxsktgpiRfj2zVy",
  "key24": "LRL1tPV8xwZ5vg3P3XXiPY8cDmx6G7quvPpE4EpsihyC4rkvpxFjLjaYLUsWTxWXt1SQrwNYtjVPeDSzajaKVQy",
  "key25": "BTgvdHCy3dtGmQtbzPRDpju83tL7KL6byTeNCkjoyp8esaepcAEA4o3tShTGMHSMxiBdmKVs4kVSQk8qqjnsfuv",
  "key26": "2bdAjZy2oxUQFZeTxYZZfvWSZYWLPciG9ueq5jSQeJnqfAyLJjyhSLtbuvgGDXs2BfTungk8djFiTcdor6LuWzi3",
  "key27": "PL9apYZhnWDvTxL6FAynUgoibEVxWsZhVYxHNEkTYVhvSwHZt4GegE1K4jEWnD9NnGp5uMwBo22WkPqM2EVvD2A",
  "key28": "5keqjE1mFpFZYAKeDXsyieCN6bbkyBnDtzgCRPMggx1d6wwmBtL6oLqBTFxYVB7CEnuLVjVBBiEQPhFL4WyKXUsg",
  "key29": "mXFT5LSz8avJqSv2d1HKijKwGnLwp6uVWhkGHZQ4mspTvPhvuWWYHua6eJCfnSeekRABdBsmkGd2vaTZiS9vaNF",
  "key30": "2MNys9YwoNtNQdERfR64TrDiaSLHZY6w1zRegGHaHgxaMm5r6r6YR1AwuP1sZccGrbE5W2dXxKdg9bZBx8J5nwxH",
  "key31": "2RSpv3oCZKRjbkRy2XjuxPPefZHQ1ZZQkbc5aXf75P9tGi7gDMdKMFMBqLjc9dsdXPQ4PwYM831CnRUi85N9bXKR",
  "key32": "55nDB2o8KWg7p9CXBni478Gy7h7aKiQjBBrUdPQ5cGwseeioucY2dfUgEWrdWWGETd8qk4NnoGdPqH9iNKFCAT7M",
  "key33": "5kKCNfudwb1iFGKkZv6aYLyLajMSE9UpP1eLNeW1Qpu9V7h9fGNKZ1669598JXHskw61gAYgNoF7tf1zgkeyWT9k",
  "key34": "4ZwLLZQYf31mKGjnYFnXuXFRJtPn9TaBw1mBYdogAvzGvyMU5EhYGkoXm47oHCNCStptZh5JqUYp9ZKERcueRL8D",
  "key35": "3JADEyUFXMpw18ZA5juSgg6JkYajymorGE56QAHzUVNAg8xaSvZUpYZoQkQ6r7xyjYesqgeCaDk21rWJU1yAbVLH",
  "key36": "4iA9VXVk2MiPBjoifNBuz1UaCQGf2jUUDjqTQLzdvG45oCFBTU263kmdeixcP4VPtCiERBH7U9E8e8EoqiGX2BN8",
  "key37": "3P8DWLVhZbr31tCGe2kaQ4etQH8R1gaufxcL1uxfMTi7tfSYHdrrWhABCFAk99w91Ry6Gb6C4KQUYi3e3gdPxP1m",
  "key38": "3h2pEv5a7t3ieD734vCsV3FdUiSD5EV9AigveN7oFMe5aoarKAhya9meN3AU3KxCK9cpJLFDHBSYSkxJwXAo5Wam",
  "key39": "68izk4XiiKVtwJ9UmZxpdenXctuY2NFH8LVoptHpiXq8ifNgi4Equ1uhFawg5h35s5McmBH9RmjNWoqFjjacZf8",
  "key40": "3YVYgAtvptCjxqYLpjNea7iRB68J6AdTvxCpjZqHfnDxjVZmZa535sod4L7Wz4y5RUY43WC8qmiY6mtQomwYYD9p",
  "key41": "3HzEGVuqpeM5HUnLW2p4c7U4FZMYAZZZj4gtpXPxnLuwiZPd6McgMqW2Sgk5vD8fh86FcRS3dpHMAW1cBAHRHV75",
  "key42": "3D2X32aH3WHknV9cNNNoR5u34SuBPbGi7AJGZiEhyM17inLRMuDLgP1cznC1CHF9PUwAErf2Xf2v6VXAroSegczq",
  "key43": "9RhddcEQwnFyd1H2arcUCKh5qXrYpij2HK16JiKxUvdjmxEWEh1fmtNsFJ6k6KZANAuoA79nGa5MEDAqUENS1mn",
  "key44": "4wSw8UXDpRMSbXyriXzkCheZmVbnazSmhGCNciuFyRokbuJfy2pt6tXDMgQx2h4DFGEYGTHYCDEcogGHduHzBSoD",
  "key45": "5KJcKjoge7q5fi9MyRY9CfZ2PAHAXmUkNTxWVX4SVCMrqNRUTQUT8ojGMpMLXBjZnJRyCZ9hC3X9rX21khSRWkVk",
  "key46": "2MY2ZynQiif9nqR28Fyu2LbYe5Nf9gcyxLfx16h3C9UheKX73mKxtrmY2qUVEHFjgY6U7w1sW5wTVt8UWEorhPtd",
  "key47": "yZvH61TGFFsbox6ppFAxHjEYuq4cJ2ZEAVTUu6L9kZxN6zdAXCBD7kZMSDzCtMzQnaWVnx8s6BfnknmfTBQceW4",
  "key48": "3L64sdx2m3b2sPTjnTzfhQAerQrSzTt6L21smbuSv2UYCRLsNty7XLkYuf2RvWg6meXhRT9w1SCEnVTYhtfg3SH3"
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
