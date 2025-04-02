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
    "bp9Et7VdAsm3SPaSXc22dLcthQEKpt5PCU1Md5UEZBTBJGvqXS9XvkQsjTKchFtG3Zk7A5oRkLyEL6HLwE9LUHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VXB3B4wG5MeozVBk4qoqRQ4oS7tYsSzsYRV3rafr4r2SAHUtZoNJfWnhkt4nEcwZ2aDU4yJYTvqEtWW1kADMDE8",
  "key1": "zE2D6pAm1dWJuXtUMVk3Pkt4KhdSmzDzdXB2xdbmGhRce3TkHMo2Jp8GrAmtFwRgKA7qpz4rHkG5ZCzPU9oNSfg",
  "key2": "4CEpv4eA2DTQoHUEVeuTLPU51ULovC9Q3pZzYS3YxFCrb8t7RGtR81CPZZzMMkh1y2qRTGGn6x6YJZt8Jem3EWfN",
  "key3": "2pJ517JJKP7h6Xep9yQZkEaQh2zKbQWHDfGQKBD898qoEP2eYxbZ2EKrNRryPCg6k5gmH5MENQr8dq91dHF8bFi5",
  "key4": "3dhVHeG4t9WdZXWqrr3q7Rmzpyeo4ajBtUjbKLTnabtzkKSXFhim8p3ngZxmfJ7ThB4YbiedPnBZyqpnnittB8ZG",
  "key5": "5PT83jGEVWrbDkHTMnUiz1yMD9sbTb8R5HdmiT5mprH4K1mVJrbuk3bTGWVcvYBMrk4FmqeyPC9FTmXp9LzNmT6R",
  "key6": "HMGE4tpbv3oythbV4yVQ2FkZSyrmBqrgjhZ9kwmgJNM6LogrPxYVi3UTDTnbVWacYhzpkSMyXpqBiUgVzy5e137",
  "key7": "4E9nR8p26ADhCKvGTvpA8zbcWYZRKYmLSQidBQSTe1gYqUq9mwsUZGXsBwrVKsqSGCBZDTqoCeD1fGHejoEzP3op",
  "key8": "3H8AGf8X1UN1FMGc8Wrp1i1KysobQmsiVebtPiQ73xKxf9EpMwU9V3nyYRxkSYfXJP9sULD9oxmAGV2SMt25Ao9F",
  "key9": "2fwm3YaJRKjEtpe5Svf8V56SHx2zhVH5rT127d8cZ1QjhSW6NvUeCuXFSgzdJbYf5vsFdfdEEZ42HYUxGE9tRk4R",
  "key10": "4FbUdiRWVtfsXLY9DaKtVZMBVnttmA15ajuZTqgaBV1hTgNGQmnUp2sSfRrYdXMcvXRSAtDjfCAGqi63MohfYSnn",
  "key11": "3PtgyFR5Jz9Fov2YvhMYZtwEguZQjjoZgf4UT9hxqDvxht4bW2UEbxpmQxuoDkoV11FEc9wJ4BNQHUD4EbQ2TGtn",
  "key12": "3LoTp7RqwLh5YsLfjfqQJMCeMrozAXgkD8KW2KrnbuoAGVXC8q7juxUuL2u83AghVqzZqLQnJKzjkTMjRETjNdQV",
  "key13": "25iCvMrHgVvJrPkEpLoNHbb4VuuAQaX1W6BtK96zT8QSmj5mkVEJNB77BBWd9aqqMbh474Rz8J3eqCTKZTrxcn3t",
  "key14": "538eAkkH9Nsk5vYYAcc5QxcUzCE3923wUzCV8F3EPUMWNoukyptxiAzx3VrWNwwZEN7L7URjbyLedCKcjYCU6PQs",
  "key15": "5gYMQiySkjp3k7UACKTvBqmWJL7oYDy9oWQCJFgd6wSLEgSp1e2sLTixgd6dj35jfmbkRpugkjMT8DCaQ6hzNAhX",
  "key16": "2KB5vc9pwN8JZY56tS1375iz2HDRV7X8zoc6yFWMKskxrFiEdREfZwWoFkFAeMpGeC6JjZMnxEP6RKjPMWoXYxn9",
  "key17": "33pJk4SNC1MFbWa3bCc7asWtkUNMKbj8vcptxg1raXU3Y2euLqAhfpburUGMWjvVc596neA5yQC3R3f5H3NhpxaT",
  "key18": "KunY5k1Snb9eGEm3YsteC3p3TtZdaw9Usv4GqKszvxrsC1KsNodAh1tsiotqCGko3GFfYrZoxiFGduKbKcUguL3",
  "key19": "W2EUAM4E2nYUjVnGQssf5oXxtops8YmYMc1ySFuDX5Fc6XZa5bn9dxpd7HDHuDqKwRue7h44GTHGBspS6iLsYaq",
  "key20": "3BtLfV8YXDGEes6zfR212LuEDViqyA8Ats94QLeonTK29ZnSs9rBd5SPi8TNn8ZmSwor1fgncGAJ57UAgijQEk6m",
  "key21": "2YoFzaP1jsejkKuzK46F3wJAmUsjjYAiEjjcD8vPRy6QZAGwZg4rwbSq8iriJmsje8ra6PPunYYF5pvgZAtc4Fht",
  "key22": "3GUijPHMe9BqGxUUafTegjf6HoiFfDtJWWnvmwt63nTRAnLiJ67rWvkff6RRF3UVpBUmeaRMxt3jFpPso8uBamx2",
  "key23": "4jtZ2CdrELWdZzdWaiHegnknMxELPePEPpzd4QzF5uNNNG2roUWmVG1Qm5SsBvy7Lc73W2NTDxo6YxT21Rctab8s",
  "key24": "5YCzKMMbR2jyWc626ijCa24HjEe6tbJCqJELRfLokMMU3f5ko4qm5iqnDbhNzgrsNuzUp2zyb4re27Q2KpZQ3ced",
  "key25": "LopW8kKcUKsHSH5TvY82wxkCKVsKUEp5pYtScEyVf2fiQRkXapgw5CGTPMGwB4njNn3ttuauA1goQxbkjkAofhg",
  "key26": "4EoNG8voohtRYjY1715zU5XVUFsNx3yitWKti4TtvFZzWLGWwBteXpRNudCib2baL2do95kA5erN2YDzEqGy2upD",
  "key27": "UkWKpiYFuFeihJhxPip4nea6fQGQfWSB1aeNkhtL4958rYiwZ2eVEvExhLAcuT9UBDJuN4Nts2CrbiiTbjJfLVm",
  "key28": "58Jwo7GaXcxihsbi2HyfvfVRTir7RVyo4Sd7TwNo2RW9pS3yqDkVymwp7Ywvh4k7T6k8ajHzH1sPUcmTEx7o7d1f",
  "key29": "5W8tRafjWZYVcKXQj7GESvTP1adViY99UhDqeDbcnsydFpotyNkpcNbKNwj4WWEDRJVhb7a1F6N72eTDDLG17gBJ",
  "key30": "4775uzRXzyPYj93BqDJdrQ7Ut74gSTkRmeFced8gsEnEyaY8kQoEHJoNuToUxqkKUjBKBA2Z6KvBtWnxK5kxtRvc",
  "key31": "4ZeLFDCCXFdpMrSccNrQi6VRvnN7bi6gPa4ePAyksn16kmr7YguuLwHeSSLCmvSQr3PNd7e1U5LXdorjQp4RGt5e",
  "key32": "4hK1yTWA5Q7nKQmBNjtJqBuiLvKp17ePzJjUJCMeD7eomDJ8CSy1GBrfaoPgKuaVwN3C3h6FJQpMWv9tqXMMUN8F",
  "key33": "39mjJoBuy1DY1BjWwMuWBxgEHNE96rxm2vFuAoa8XySTFD1Wo31FnxhLdE3rLs872Q3FRTLvys7AP7R2QUDGdUCS",
  "key34": "auiTrUe346u3xKve2TMuzuwTpbcvQ6JVdCYHAa9ASJny8KjcXcp4NLeQMsPRQLMJ2iC69pq22SYQGUdo88JZJAi",
  "key35": "2yv4juQbwxdcty155avHVy7GG4fKFUNqNQnwmnctVRVgvSyANTMbDgw2iJnY9JV4KV7Sy47emTvWzfRyFH3iQMwM",
  "key36": "2BXaMHxT57MrUS9wM1DgQFrXCFNTVMAFpnPqNayMtqRqvTegqk4xjierwG1tKgVbbFmsty8dQxTJzFc5MjFpreBC",
  "key37": "3prnpe1fQvRoeqVLzqJuCrwFKLLwzEuB2ogVB5fufTGWzcxgkHuhdyoahRWeUfZdVFeesX3E7Py9cqW78dRTjcej",
  "key38": "3UDapuUwjBgrbpjk76RDABREmfdwJpsSrHyMbBh73EqMupgWP8ogsQmGZJAoDJCTAT4NvnmiwmcJRZT6XNqfVMEK",
  "key39": "3316nJNcrrcrwZKRSox9G46LZNShP3i5bGgi2P5a1KZjya2W8zrXcxmtr3Ba4WH4MGomAdDXzc6ctBFQ71hc8pvt",
  "key40": "3PsYibTMLCTyEHm6r8pmQzKgP39evrvUQRHMvjPSsBfsXaj5E3W3wLjy9x8FVVBNaG5yNSKtGkPenMoVSQmn1LQo",
  "key41": "STxKHrjnL4dDH4rWQGeJ2qEsFwoYUEpb4J8qgnQwf4f5o9mpQMEdB2wyKKu9GB3j3wZzWJnqsYiosJdBDnnnRE5",
  "key42": "25T9ERxj1DrNktcmmd8xwThhBd9J4sX7vVafJQifdEHDvUuU3qbddApvL3WaSypxvNhxo4JL3miT61Tteeh9g9hf",
  "key43": "3HfahdkKU8WjiQM4kvkiSd5cnqyzajPtoXmjDdUbxGYWNnhBKtz7SWenPzxWmjwtvyDRa4B3pdYtVGYDoUgxjPGi",
  "key44": "iusEsLroqdvrAAojdfyHXemTKFVG6yT9fywGkTVnfrGN1qcGMrFPMNctk79EHwj7qRgtzGCLd7nE6xKDfnxeaUo"
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
