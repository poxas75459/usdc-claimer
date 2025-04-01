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
    "zbEhSvZCL8oxLThKE2c6Vguo4KqCu2GVqN84moVn6uxPv3JhovW8NxpVgDwJgLDjCGTtLjRgKLADsaepQocJbgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJA9SYpUD3AwNThWhjzH3jXw9GN7HUbgEoQKgfGPXmnEo2mKqBM3xcEyr8XVLnbRZeBf73enQKzQAqMuTaT3wMH",
  "key1": "kHzXmMZz311E3S1UKHVK1UkLHiBP9qaq8iCXu6fM1GRSwXqPvmhhEeim2eNbRZXJvtwAT47ja8nZLkShgK5a7iA",
  "key2": "5uB5XQWdhnCWUhveFbWRCAMz6TYH3cHUQYZVxkwiScb4xCYtEjtbQPN3urdvjskGfC3KQdinEgDUqAaXFnkaEkNN",
  "key3": "j4yu2cc6Z6f3cQ1qLjNCfS3nhxSMUe9ARXW481cJS1mHDpFkPm78oggMVG1fGrMhKwvfWKTWb6vqk4UZ7v6GFi8",
  "key4": "23WSrPj38e7GyYw1HQn7jjZrS9Uh3mjn5EqQjLFuG6j2EdMr2dyH5PK3acoyM8xgmMJPuuxG2ijLByxyL13379mh",
  "key5": "5s4qbnMpkPJmq42LCrjM9f97CwyTchrFW6cNgKgD9QPsEGr2ECq2Ur1yzqEAK9tb6ospLAhxqrza1MdWhJY2MFsU",
  "key6": "3SgNwBxRhdZ8Bj54xrUMDiLkJXrqmuYVrg8M84Pg1HTjCmfXqCMnqm4J9Pf9UqCh6L549pvuKZjNH8TjyqKWPs5b",
  "key7": "5xsMMWPdPEZCM5tJjSV51RPb718G69L55PkE8W6DhutYxXZpVb93SAdDc92GxdKsQ5SiE9qKqfdKNtdCUre1oK6v",
  "key8": "Dv7LXgku5fHYhLmXHpqxbrCN6RnBitAyhEF7u7VDWBMnXgiKwQiaVmVSw7gxhVeh8zB8ZFnHmaTWfYaiH3VccDK",
  "key9": "4MdX3ym92X7aMLrQq5NV6BR3WYPdJwwmKLiK8ZkxCQs7PPENJNsW7X2tmqkeQLQnVyzuMJi8jnt33TQhxA8i2JpR",
  "key10": "NyRVfk7bGZMNPVG8KbXyi5Lj3ZxZ3DqACrPqo2vXAz7zXyWaRnni2qS2DsNDnk8pHequ3Xe9EE9WaqDc6NoFA3i",
  "key11": "3ywv2cvjJSr3JJijFgs1QtwVpVQWefdWkN2uAXT47cDnK7Nt9RsKTKeJgsBRXXywSsKdEt6tqSUvVLb6G65Sntkn",
  "key12": "64BN6A8N57hfR6gvsV5wvuVjJfgzKJDUmj5D6i7PcKX5Fa8ZqQdGjf9srqMjNVr3ZP3Q9vB88UhAhqr8cwWwXndt",
  "key13": "2gGi8TqpcvedE1WQk8R1xH1UN7H6vSqDcNBU2PHcMEw8Wwhx4ik6omcT37gY9aMRxjZnmQCjS5oQ3QmTmdGt4b8d",
  "key14": "2KH8ukpjXUn3KnQZ84zuuMcds1BWAPS2EQKeQBdVZErBEtj2EcK7nfoHEwm6XSY9cizS2eLBTN2fGAnBGQtjtPF5",
  "key15": "2tTCyEXNzz2HyZmiWeHB7J31a8HA67rHqqfsTGEzT74AAnSXNwYcf48kEm5RtozwQiJ2t1dZRAZy4Pgkm9sHofP2",
  "key16": "2uVgWrSVYrom28nBX4L4TijX3AbGQo75YSuGpg33ee6zwK86y65hkNyenKHFzcxsymqcidfkF2G19DZ8NqdMPcSK",
  "key17": "3YhGQ5qkJA4zHDzra2shjNyEgDQGWUPZNHRtYtP13Jiomm4LJ1wAroGWd6ZUmTa5mtXesKWZRY6Q3tWXWaQyHoWM",
  "key18": "4Gh6KebnxUs1tjGw7DgzkwQmEsnbvMeMXc2WXJRdTWU7YRzrzaEZmz8Hxce7QwszuFt8uZMDxZAsjEBzbJL35dzH",
  "key19": "5r4UgwwzkS9hD9wv5EWyh9HjezkNAy7pKZJEHxbfeKZ5bv2vhB7JQ8e9iBaByKwyXmnDQQjGhwwaswgsbTdVJ8Ma",
  "key20": "28f7zr4pwujx24wFVMize4eAcNuWp6w4oaUrLCqHqSTpFmFhzFsqqyzxst9Mb7jRBjGePUTedHQdzEPeK4EKKGaV",
  "key21": "58mhXvAv6ofP597Nkg53KGStLo8kMrhUwuhekVmmYTCLSSbuZX5sdtpPmf28A7nvTLSTD3RbwxqaumH2HqPtmwyA",
  "key22": "4PyELsUD2JPAsrSGG778FfHaw2GY2Cgw2omovKm6KnurLKcL8vjzZeNjk5RUPJVKNWK5pR2d3D8Yt5FPN1NKcs5H",
  "key23": "2cPeT4k7BKrJiXFMQEeaedamTDxBsu9a4TdHKmZSYrSghoNhNEZFh7XEnyphbnWboM94teR9VdRrdHUdavuSqLJg",
  "key24": "5gUUxawjZsVNaRULEqMGoQVAXdJzyjhhbzGWDAdn5RQuvC62XxhK8Ufb6J5LRBue58qmM4FbibZnuTT6LrvW4S6Q",
  "key25": "5KL686A6LebquQ77LCj2Y2wV4RfrHsUqDnmyEVKepEugVoXTJDhc6GsSKqLqp2EitHxAcpMVPHrNBQ6SXJ6g27Z7",
  "key26": "5XrWKLNSQCBidbDyBgKiDUeCZem5Gkf8xwBduGUo5VfWN1rY38sm2WYuGQmfyZgPz32UMnjcGVJT5hbtrVf24QJK",
  "key27": "2PpT4L5FS4wKuvpkgtv58NC1ihBRBuNTifMBqDBrZxUcCNWcSVnYCXVCqdEFvWUjhfj3bqVv38jeqyE7Uzxq3ASL",
  "key28": "5G7ee89EqLW3P6ZPYRjwiSfiomMS4oUm9zeHAmvRVUU2FMe5yRVaDDe2ceL2xTzFTQ1XnwM3kP1Jw9T7yDBjEYQH",
  "key29": "3KpjnAdMTVM3xRNMiwc1cAaTBdtmJsxx14vfEt7SwBf4FpkKyZeAiNyuYzBMunmsThLu5rMHmCAUJcUb5qoVVgtU",
  "key30": "2Y8DdTPUioz7QTMp97y5spDSgneF5UBWT7q93PUyLka8emiBxjSSEEsEYfYAFr7EnoNFy5scXQid5Y4w5wsnKFZU",
  "key31": "4JFu1458GvMcNdvPuubsYvHM9G6h4VR7NCft9higya79U1YvTfBCz8mAhqk4Bjn3Vrpr5qnoknyGbXmy47o1BrJS",
  "key32": "2nxPTeB754h1TdomucYvvBKhzHTsy3twVCgtd6TP7x5MFnPGeXn33SbWJNYzj8viMM6Kk9L2zhQ71w339Wums5cE",
  "key33": "4MjziiT7bNhFsQQPY3Jh1FfoyVvUKZXDJxR5NoPC6J6bXTvwZmYNG8q9UinrP2meu9RyLDPPDLs8bCDCuPY4DUS9",
  "key34": "4wmqwKsePEatTwDRp6Y2fjxkhZ9TgobHHMi6gSpmRKTjTwZdzaqwUGXP3n1gN5ThremcuMWLfSdbJWW71v28rpv9",
  "key35": "pYpyqhatjVnZvLKbpy9a4PGWrZsgsNJMT7bUiQDY7vbp6GzD8cfLeXR21L3Sxft3ezXGxF2Ayy642akUCPLpsCi",
  "key36": "4i2ARkSqKzLeEj8u5Fc5C74yy4xygedH9b3mHyMgcTo3fVtmR7kaAX6SWGayWqLWQLqkiossfjjw61PcM6MRrt4W",
  "key37": "5Nce6CwK1EvnAUSuBXBYvW49R7T13Hf7Q5GS2qH5H6hfThXFvEviBmMddcSdcboAKy8wHtMw68wZk3iNUeE7jKD3",
  "key38": "4JhbyPJaX7zk2b1GEcE6RLNxCcwG9P8cN1eD5FJbiH7v8SwtpDYC3bbnf4DTvSe5xJVcvs557QGmgkkGhbDoQQTE",
  "key39": "53qY9B5ozmhtobid8i9UPNoERA7MrTriAFVSYA8QbKoprmQoe8LwJLaL1FpAxAsARxVszs1mFZCCFmP87U6g3hrg",
  "key40": "3TB7Ce1Di2tazLhpoHEC2GjWJtUQKBC9qnW4jaMANEu8VL9pym7z5scvWXS6e8DjV7UU5ZtN5pSD12US99Q4YSGa",
  "key41": "5bX8N41HmH7LeNpKrMe2QEHzhwaceWeBJiRhK5zTPhQF9kZtfHoCLHFenu7PNvAZ4nqKhHuHLZ9utmtrCf5J4VZc",
  "key42": "N8nB4bagmLEzfVy7yhLqAKFAawwiXL7JiAA6VCabD7TjGjeZeE2Gde1wVzeWQ7x9PD8iRSKgjSu8nBuLHXGWAwJ",
  "key43": "3rKqZRV4fXyTk5rbWXohB8drFGUaNVHAsWNTzMq5jJmJ17FSULRjQrp6NjHs6Dh8BWgbnVJyqKFT1EvfvpKwqvxU",
  "key44": "4HqKWjtDzHG2jhMYs69cUXwY6gTivEAd5aHYpGGAh2pUWa42bXS3PZnUqJ2jD8HHepcx8svQ6NacGNEsBpMMpbrh"
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
