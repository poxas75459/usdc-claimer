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
    "22hsKjyJyE1DXnh841PVo9vtUPGeVu6zXERYqFL1LwyUrMMTy8G3R4bE68dgmWZuiG9k2NJh4iu2LE8vpUBXspuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuNDXFcc8NWPMK9NzsvhwggxvomudsDXeNu9tcGXhW3AAhbd8MPpA6vJhXn3Ke82VCJfRFZRHk8668S4nrUNhEv",
  "key1": "5MptPV1yjSD459FxAAi7AiWBsaAvUrMyg4hxJ98nLSyB2MADvfKQn5vf5sfncyZR7RyKxn7X8UBqT2y7hkeZjG3V",
  "key2": "5Azegj4f8XBSEMwRKUFNzo3yCEZcM5hR5QLp2vYQpspNhYVBPNwvXqFzmbWc1ancBwxypSLyRnvL8bvmR7F6YQb3",
  "key3": "QA7RaR7mapDyD8D6UtWa2rkVkMZGDPVa7tr9PHF2RrL3roJWmSAJqA7fYi9hYMfJmccJYvcj7h7eokhVXY7BiJr",
  "key4": "55rBsAXNqZ8YRMmWRcrcKZWTt1zodCqnaQBDtNK78mXZCxwxtqofWzsU2uLkJztqfbLxsDDTZViWh9yDHogv5uV3",
  "key5": "5ddRVQzTPQrbdpBJg2PBqT9BRsbaBRv1rCS8VDFc9mtxqUxw9qpg4pMBxS9wN4dcAsacr761iAHJ9JwdM1ymFLxL",
  "key6": "3M11ZvXL5qQh5hjXtMa9Rswss31GtJjdaiPgJWJdeeyCRhM6pDwaQZpCdGNRFw1pXJJTZixemnjmmJUtsKbBjNoP",
  "key7": "3tFvpWjPWtp1LPNa9MCK4WSXsRcdjV7V7RMGPebPd6F8GaTSi3Bp8H84L733P9hjsZroRrUU4J2ZEpAP956FJz7m",
  "key8": "56cDDxnjVXcsbNtrGjHYgVkNqxRjg2tpgkpDzfB7nNwCH4EZrFDkrbLRYXDE4K4k5X3qSJCxwbBAXLzvBQkyLJC5",
  "key9": "2ZW7RHMLmKrpHA7RNaH5XguQiZCSfvxFpwS1UYKdcPpaP7uH2yivQnT4Ybs3PT1UX9dZ3JatmbP28zw8cQjjyLVK",
  "key10": "5NuL4nrtpTvVhm34TPSTqxLqaJDnh8pz5M9vPNHbGRSzfDMG2qG4N17ouB8s9bfJ8GyoBR2ytLsSB5MQs7qudCmT",
  "key11": "2SMaTy3pypBz9ua4FSXxt9Pp3UDUGYhQfWvBnQhNpNNw53j8oEvqgJ1UrQY2bksjitEvdFR6picRcU6CUeGZxPpB",
  "key12": "2j8pLEcJE2SzustCzVascQWjBE9qfHiwsURGEaLxSsBgWNvwniZqgZks5hrTRAtTZ3YzywftP3puEetcHxBKnKTX",
  "key13": "3SkiHe1vnLTSuQg3dU7VX17Gk5QLZjCKGFdB9SXA9Ry4W5P9pU9LpUQWwyg84M96m86LmqazEMMsEFdSrsuzcLpf",
  "key14": "3Y2PfcMr5jondCY8LCasw7Bv7PdLMATEw7r1TJWcgejEFRaABgBoNtLkBLMYMVLqrzp4Gr2V1X3MnqGaAHkEAVM1",
  "key15": "5cots1Xfoh8vmGQshLES2hVs2Mc8DYGtF1UfuRK37vJFfN5BzX8cvqBn2bxCsPq3pMQQ4EPH5z7JFc5C39m47z8X",
  "key16": "4qEoUDHP5gYCYHqVRMAMrUZvEbArFmqz8WEAwe7AxTknM2STMm8fUCwXcxUE7hpygyMxiFkCrvyCpMSXJTyxKiL",
  "key17": "3eBM9yNHz5S6m7NaKLctqHF7PdVaYAdpiy7Q3iHL3Wk7nGjy894bXPD4gUXqRHWqKFGRnEXh8oQd1wveMPqGNXZ7",
  "key18": "aQ5DL23eyR8JuPcbaG68LZTFsxiny3YtYkMZ2G3kuyiYiLcSQbq4LKTikpMG3DowYSvDTEExoYqPiw5KuhZ1Y1w",
  "key19": "5sNYyJFZkG9WosZKMvS8gdmsfaNuJzgDtHeaLT7JvgoVzeGJr2FNZNXJmyhnNXmdhwWf5a3E5e2rqCjuH6aXy4qH",
  "key20": "4dv9AEzuh9jELWb71iRQLU9eba22NrSKVrzmENDFDazV11WgbRkLS6Hk4EjgLhpXfHw6FfNEFT2W1TYxeiWUcB6c",
  "key21": "3SAq9xe3JbgepJpFtfEu5aKMUjz7hFxjzxZ3XJs5LnA4F2jNCwvNHbMWv8NdoFA6ydqBqC81sUYAMj2cpsuLdkEy",
  "key22": "gALeCVY3nS437LKwa8MixrWtLQAAJuR6WSMwnvCRZWn9tNMVzuiNXrxWK7U9uoxwZXCok9Zi7M9XMVVfMcxhqLq",
  "key23": "4VtM6SBNoc6K1M1TQo1ue8hz8gtG4R4vkYbuiVLvmi9E3C2dGvheveDuE14uN8AWy25m1hLzibF67SybWUGtJesG",
  "key24": "3KHH9k8uDp537m451jWwahjcvLFnSTU2uoUP7fwMt5aMVfdusTFRXD4z8MTUJco3N5mVKufBCsycnPLT5ipg5C4X",
  "key25": "4iTFWcK9AYyYi3tno7fjBx9MVyBYzsdnTMeLfWxMcZQP7WeheDr5Agu5iy1HUUoTej4Fna1fKM1KT94K9ikbaDgq",
  "key26": "4CwsrauidzY5ChfPX84J2f67bkZxD4WvzQWa5W216C5H2KwUuoTkjYchtJBUNoTjsf8FUUUXNGn3znWNpaGiziWA",
  "key27": "3q2VReMopGzqxcyfT2N98fR1u3cQFJuNZmcsyhYUR4gatPuDwXGkipZn74GctckyxpneDjnWz27L8CePDe1XGeGd",
  "key28": "2ak6C7yRf4xfnQ5RVQiWzeF2n2KbaXTZjwxJXXU2JUavHhysDpfA5YKeXUgc9gYuMai2ad9WoQ8H2bbaFAxn9maU",
  "key29": "5WEVfkfhUDZ7qXB9jPbDFeGVZET6Hwj1VbJVpKtVrpQ7SQ5Uz4rPuManHcj99L97rghvXsSF2jZ97KdKTrXhayx8",
  "key30": "3hcDZ36S4FMbxoXYgLSr8SGyNJJevb1iziBUin9eedwe4xiaHiocsFSH9fg4Lk9qiLZRJzZQ9WCEB9G9SkpmTK96",
  "key31": "Hsbk1VnfP8TVc4j27PvDWgKZPGjdF6xz8G3XntVcetCX7SgW3TXxkgBonMCDmqpp1vvGdjfmryvfFccvg2tYCNV",
  "key32": "3tRBLq3dux5VFL63FJxfUMoMDbTisZ57PJe8V1DoU16oxTfpAiUfWSGvUsv4PDqVFjxf1KpYxD95hPz35czYz8ZS",
  "key33": "XW9DQLgnWYBeEgUkTWeQ6Fo25pBTVsvejiTzVcHuKZTTwchdVBRhAo4SXBTT4FtXeMHf4JUnuEytZUcr52X4AAt",
  "key34": "3RTNfvQW5HqdG9Fiji6AMPMXp8w2dyXSCoNSJosSn7jNjzMsx9Y6XVDcLSz1L6Ehd28CWr8uWHm2s5X2qAQS4cWG",
  "key35": "5KcrVKFAHmtVSZMpa18LH9cBR5Cr8xpA15VB5McsbB7WfRBLGZcwHWfjBYDieFe8gdQUb3BGrHs7wvdpZzG1Ys36",
  "key36": "5SacWamJY4kCZEj3nposfjX1AaP1NDwCSvVq2CjhM4MLp9MA1XdEhNRokFrh4LXjwYZEYbkmvKDimK5U6T8MGkwe",
  "key37": "vsqANNFDhfcbjJuc467dKHH9nyGCaQwbcSxSxKu6JHscE9mRA41zYNym7Rto8oC5PPdASof4m7TxvNYD84mJrjF",
  "key38": "YYzGRkj92hX8vAchX1RbXhbJmMZJcgp1LHmKhGo5PjqDzwoTVj6EuTJKgmGxyTWcpw3YmMcQLMhS7Ct4Pbvbtu6",
  "key39": "4qTX6CAmWYmbmzvS6GyXdQVC6QrbtmcbSbgy9vn63UYpQp5hwqWhV3GKz7BmeFrooRQXnDfmmHqRZJTxk3pvWFJt",
  "key40": "5Z1yLLyzeeQZgmijPqLSoWsF8HjJb12J7GuD99kNvo8QayLc5fSLpNTUPbyktJb8saye5VHCm6atRRqChYLw6UEh",
  "key41": "2XQDBMmDiY7p79Lst5XZrGZNYvbNMmYPdszPaLPYYYnXFhnvWzAFhx5kb7d5fQxFUv4yXhT6Sapbjr9yMdxKSjxL",
  "key42": "2bUq5c2dqpDWQoVm72ypzFWhwAyzxq3cccNWxq3D2GVzvwv3BgF7s3uw7qrESX4BV9g9zAgeHrqGSbosssqpybWS",
  "key43": "4Vm6gM6KXtAbdbvgSRrDbsqUsDtNHMQQ4hyz4m8RFxKN6Nk8KuW98Y2HYZY9FQe1uSba53EtSq2VySGWwB9G9xUu",
  "key44": "2YBykfqT9MK3jZ4RitHMHxRzreQ8BjRNYyRrmmWMcNnZ1xCk3oMB8yUKmr9frd5GzFYN8eFUHPJKWDHPW7HvVTVe",
  "key45": "4BaGDA2QVHBXegTyenX3F1unrtaEhLKpPVFWa9k97Q3JTvjgPNYgrG17pisNHzQfzsnoTCnj4VGgiVuxz4QrnNiZ",
  "key46": "5VqMayaa1HfNr7D29YagZmahXV7Fu9QjnGQGJJw9LvTw1qyU2G5TBzUXiJ7Q8WN91o5ur9624L5pVf5oTidFkWph"
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
