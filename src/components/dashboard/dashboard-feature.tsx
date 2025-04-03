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
    "2CGF7qWuC9unuvdETSBjaNBfXMDTjeAkDFJb81hcG1MMQomphTcDV88A6dfoU23dpm2tJ4PWtqFTqMzXtmoFFSbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZSULwcoyKHb2EGRMoQTvoRDDBM9yoaeUKUcuksr263xCi5ue2o99Nu5vCC7wmVK7PA6XyBpuL2RcjACWMzrruy",
  "key1": "i4UPnBRju8LzHwC1KCkV5bpNY3gobzNsK6R9VEgBR7WKi9wgi4SQr52f6ycaYiSPW84o7PBATXzfqpCWPw6vtz8",
  "key2": "4M6SExw8qWdVnvYGXHrAtjQzDF9M6BjrQdpKKf3purVkihtBKhUyZfUZYW4EBrVjTVQkHK2geEwyZVJxRoyEv3v",
  "key3": "4ophkG8pTRurAiuhggJbF5FwUsp3ABjhQ9N1zds7MpfjkyHX9JNBH2zLcktKYxa3fqacoa1mUBHjQ6GmdF988mAW",
  "key4": "nciC7d86iGwHwv2g2MNsz68Rq2wj33RRYNyE9cgqfhULiGr9UvG35CYnsei39s5x2dp8gAX8w7nNPJvTyyCDdAa",
  "key5": "42RCqTw7VTmbRNhF9ZyXDahY6RSDyrZ3B5rdri36GN9ia7AN8hUeZWU7JFJFBcTtPcWYu5k18siDXtzTDDNHYoUc",
  "key6": "35db6oP2873h8XrbK7uERjBez6yYmoLJMZrq3Pa4iSvWvAJYbEV3xnUG4tg3FMPFwbi8Jvj5ecQj3G2vF5PqwfSe",
  "key7": "hvZCZZdoNkQmNJvrx5SF4rLZRcNBxCtHRcypWuoXNvtTx8K8op3SiBBgSCPpkkzAVAFzhjxZ2wtX7XnLT1J7i1E",
  "key8": "2XNG4T7gBHo8xQACGV4E3jMPX9Xmj5zH7yub5idqAEqFepGgbrVZSgizhFPzeZ9EWHViP2ZFyxcFvzHnua7ghaVx",
  "key9": "cfXM9bgwb1oRM2GU6Cbb49hcBmEGtu1tJK6qX6RmmHw7PK9M4PKARRXVCSJyX6WEZtnbUkkssDiMFuPPj5kVqzh",
  "key10": "5Z6cHELZ2nBQA3GpaHif3776yYVztNHmgPDLPMP5KSx2MTNQ5oq951g7RTGcm6uohpTYuE9SF1uBEkmWitx7vYeN",
  "key11": "5J6ZqFRNFCcikNoFHk2sjM71cDgE1AUnsFtjk8cJ2xWcYQb1hfr1xF8Zj2gBAMQfHikMrKzWAu6CqDUDVaxFYvJ6",
  "key12": "5amW9uj3gjz8xnwvfguqfcyyniJHGsSXHE58TaqiiFg72dzLrVpJz33DVCbLfoDQvGanNev6u4yEFT3WDs6vSiqN",
  "key13": "2WcHwcwMQYDYMfPV5XZJMQ4mWbEzNpbMMRUXaXwacZGZnSNZAqjj4YPNRbbWx7scYrPr5CvhVf7r1mGfsjLgqpVT",
  "key14": "2MLp4J4KfASG4XGYhwkWXJYchECg6aRYY2ZSQno9u92rwJTdjGhgAPMwWkQVDckPSJGVQgE7puVYrS8UtJ2zoiZj",
  "key15": "JzbYRktaBcuEoTyhoWhegMXb8ZZzzGifMRnXYphqMgUa654wZzpkwjTcVLedhpmueGu6doQzoLzSAzpLJ5S6mdw",
  "key16": "39RQEj8UwsCc4b99hcfL7D26Ztw4BrDYjYGuy8iFu1sNWRaxtdNdEkGYK6rpJPC5sRgS4boaDHWXact2YLG27abh",
  "key17": "gKsg4BYqEUD3xHKfmBRLhDg8rCauUF9CQzuQvPYreRQte9bdRaN1LrM1G7FJhCzqbnkwE2HZhV4qpkrV6T2ugme",
  "key18": "NgcE9sDg6GpNJDfd9miugv2zTzfLsUkwngEUrwcfxidQ9eMwnt5qCRPDhX5L9MPeDYioDfu6MkepW7CqruU2k1c",
  "key19": "dkw6bF3Ux5ZgHxm1rwZM5i3zXaaWYFfChD96c47nFGrbVmSZkeGufC9CG9CmrVxQi3dC22h1UoE7uNJK2inCzop",
  "key20": "5GerF61ArzmGqhvgz2iWAg1ikMYHwaNKc1ayyso98XYy1U6PLsfmKcCtntutZ8KoYWkkKvtDsvvc1LmcnmtFfcBT",
  "key21": "QkLVAvbp6EWzrdjCUTsv4LiEoV2jWHtELP68LshDDQsNHgmgTbMUfhs8hc6Ua1YUo2hx5gLXJmxVu2o1trACcaM",
  "key22": "26jFCbsJtyQfJfBh2pBt4cBB7BC8ULeXfrcib2ffogkETs6rroaSmw2zL7155gbvaej9QtrBQ8LTi61Q6DYYRk7a",
  "key23": "4d4muqQH8WY68WPxsarGUAbtryEQAdUsJEMMxnHM9fXa4Yoi8RJ9XGicfxDky5NL9rTiC6uvBQsjDEBiDm3y6UcF",
  "key24": "2tq6U8MsPSTsfEu7hcBgjkUBEbEMyQfPPDXdDXDD8G6EsE6gWKrgR6C6kvcryf1m57qJtAYVaJUn82b8sfhY5EF5",
  "key25": "432qHe5hRnRLT11e7oMX2nt2EZjKWHf1sdwrChppnQ1UKF53Zvz52bVRRvXRvdgz3wbJc5Ed9efNBkZofN4v9ryH",
  "key26": "59WdSLy39eJ6UzpK9PPqz1m4RGxqt4UApu4FfvqisJVFryrT4SASomKRQuVnXNchTB4hSkYS2dMpvdU7JZA5rZS2",
  "key27": "WUfBN8jc96RGxqJUgJodv6SLzFprbvq1rjdN4gvB6dT5RqY5J9VVBEVTHnMjqWeHYR63ABNjg7QNxAXiSQ6k29w",
  "key28": "9FZK9oVxzRxqFxZQBenF7zMymvrhs61jyWYciVbfnWzCxiwywwjKbYqSWHbkhN155vEohJ8JmQCRcb7yCjswLou",
  "key29": "4E2U8TXiRsfsyRvjQVkWTACzuVFnyJEhyFM31gK7botXgDWR3XcmaZsD6Sv2kBJiu4wSJwnqefg2FZUjNDSC7QKv",
  "key30": "2YsNmR5c6UzyCEYu9PFy8uEsGzT6PPY6aFYjR62QHbVAMJL5DZuHVtP13XVFbzxgfhZnYGWmrVuBCVAGkbUMMJvL",
  "key31": "5wdpjJGrk7aPr4kG7s7xMaD9D1vhir6tCFVPhKZAD5tJgRsUui6vVMx3dASu967GzGrq8ieQrD4qSPx9hneNu9NA",
  "key32": "ZSF4qaHNt1qPqk2v8Eur1TyschUY3CcNB12DpEnGop9qjwCaQ1DEcbmQFbVCk1CsyFngRi8gy1PAK2FLfoy8XAq",
  "key33": "2ppe1hvu1usvNKnBDBGMUXW1os45oFbqcYUMmEi1Vn6G4q8BNnEByMjxRTq4YTUn3Z9qp2kw4uPR5GEwcx6pqRtg",
  "key34": "3jsEuNbQEZF3caeQbirdqZD5kWB1EkMje2TcqGvyHCfxPLL7oEp8apWGxZsbpuwh2taEFjneWy7h9qCoM1hfj1gi",
  "key35": "4j3J4G8hRPFwX56YEbg9PjrkMgHuk7XN4bzwLJ2RC51dvgBg9rTq6iuQLKMBbp2U1gCnvXgF2NAbDJgdLBgwZbGg",
  "key36": "3QrSph7zVhYbus8NmTydCMoU1fRCZUru8yzT6J5YizEcx1bTf1FS1ttDqvwcySLTf3aBW41QRnyKbFxFcFV1jfjd",
  "key37": "3S29pBLmaXQvNK4muFgkPYEQMWonbjpsAgjo3M2iVU6v7BMPgWvqJAAoJXHSCMrXEVUK47b8VNBJDwgvD4E4sZf7",
  "key38": "2nuV28boYVFxjXvxaikhjvV2SsNSkBF87NonAQEZVmmVN9zLwyjdEXTRNGBBvfxtnUWpSGZgxCnMag8YY9qagnSL",
  "key39": "GTowiiguBD7AAhmWBbvynhiYosrVpKzkJUg1FYsedqGXUBAWT5oR4eH8XLHNTQeTFD2BxxETZoTuK86aodi9kBY",
  "key40": "35p37pMf4Zk9xzqsNFihWaUbee9SvaSZ18vh6kEJETCxdxFLLZxtHaxdKhzP3JBfKuophdT7Z7XrQCZiFB4J36aQ",
  "key41": "2pCH35mA3NFnPaWJ1MkqKPxdNjk8m6tPENDRbALiSkxgd2GHJgJ8n4pLHjfH3UkpnPxT833E2udiCtznor9bCfB7",
  "key42": "5wcB2tqKPwYfrkwEmWS5a3WHjh4Ugo7YnPjcLPfjAH1JCsRysoQBAJuuiHAhMd7VgJz7BC4tPabAAxtFtr5xsyps"
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
