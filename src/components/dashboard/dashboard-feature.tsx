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
    "ZLJLnTbvjmh5NLQUwksRHxpWqNHyktvQ8wMvUXPjT8xFJXv2N9RTMU56yw3yvXxyrfM2XUqEVGhetav7hEFKLyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RXFF8Ag4u78cMaq9HDYhfGXunpDvWj9HWLkvehWxrm3sFweHsR7enMbgfruXVDBAawrUimYvQZuXFBcM9ScHdKu",
  "key1": "5boedhQLbLWru3m62byyBwePPVKrA5KTj1h1APeBcRpQwFKNfkKCAhJXZKYuuugAQzc8QuQHxbxiXhJkV6Jzqio7",
  "key2": "4R9Ae58Jaj5VHyZWsSWb9nLFVPUAN1D9mZsg7YLRG3G14of1Qj1zFb7cgTQtXbgmo4ouqqHvvjdmYEg417PWUtmF",
  "key3": "635JnRJNn8xSACKL9t14vtWj8ktnwq3W1tWcVypR8nW7JcSGDiLyME8ux3dbUCHHfKorRHRevT2GhLzsAdcVYw8X",
  "key4": "kvshmVKTZdbSJb11pzGr1cVckpdpyJUASd17rm1ozndmLLRkhDzzFNot1HSVjAkKEXtTbi3XvpY6qcrvZr969Dd",
  "key5": "3JzA2Coi62boS7Wr31DySEsSzK8KNXBu6554Z3VXQCEGBw6z4VgMuXGCXZ3VztvjNFPxQusQHa2ozpRA8fh8fPrX",
  "key6": "5peo4hNsvmX1rV5pg9Jzjy7S7PdM766ZsbZMXgDbgLCivNcrWjF1bcwyg1JA2yJvr1JpbrZigryDvyMcvCPQ7UA2",
  "key7": "5enq9s1dVd4EuEFqF7de94PKyn28UVzuVcEenoR9AnGCAJybvRfH2VjQ25tniNPQXrcc6xpQJPHM5TkE6fGD2kor",
  "key8": "MHSL36Jno1FJ5yPhYXuvQ5M7SJCi2PftsEHCm58s2xGbYJwvpS3XxG1nHs7BCazPZdxinjYq6bYQFo7eWfccq3S",
  "key9": "24shED7iQHMbvSnA9M2cFisPPCe3LyXEWDtaaCGyxiqSnZ3B7oNzdnEH5599cr91n7ZgRbYhZ8TaoJc6AWC7XmT4",
  "key10": "41GmWMwsADzmAhCXNbqoEQEgW8GYFLf66Ccxs9eFufenMVzKn2djhAE7qEb5QU8ek9bqBfDf7cdJTKDqtpa7kpWW",
  "key11": "3ZpjRajYM1UTQsT5R1GFoFmBZV7nh1RQdCg7HYYpVhg5FbBXUMWkY5pC1KW7gs3dbVNHmaCdWyxXMc7NdgXGjn39",
  "key12": "4rBgTXWSdtF6wQ4DQLUDDE2RVcAjpv1YfrDogaRm59xMjBLFR6oRS61N6kgjmqFK8rZ3urucc56J5cP7suXS8GGz",
  "key13": "LHzRHrSNbPNHdYVsKDnVgWEXYVkRV8Q1xDr8RQBGZJwsQa8VtzgbL9T3NTLcPJGXBkt2xEiwnuPh2SJUWgxZaMJ",
  "key14": "3RNCWLdfuzCYvfeyLf71AwtVmyzShL5aPrvyu2cXjyhTsCCarr66VrP4cy1KcGLue185qsbi9EGkodiAD84AxvJh",
  "key15": "5csEc2TUE2sQZNtJLcFdux433JDuSa1jENzY4BjcVBKKo72VbYnXTchihLaKKr6uGcUifnHMpHSEVfSV2kpSpZXw",
  "key16": "2qEeXzYhVdoADgeUCVG1uM817s1qXzzjvwy3YpUhqzTb2KQHVJkrXUdj1WLdq5WjMQuizLvDzDEJUVYpGz1HQb2i",
  "key17": "3PpjLxBUnPXqhvDzQ2Z9VozocAmwg2wMUkduWFwH7FHjVpV2QsigHSRp9CFs51W6XhAKuhGrxJZmsQL2JqRupCBi",
  "key18": "5JR2vwunX5U942EwP7rt6Nhd2r43juAuJGjBipa4RWdvZoPSyAxdeGT7pLr2SjH6ifKtdkYPt2wR7awE3Ao4WpbE",
  "key19": "5pvzHPddL6QUV7pPjfM1Z2ewsbaVNdJMJxwcGQKgVk1aVdepDxGcc41S73JgcqcBwUWFiQmFbAvVacDQyPv44yXp",
  "key20": "2adhh3FbrBAsRS6kGiwn4cPwHpHdLwuixFYPMScEvruhX2UREgmQ9WLM9g77CbqZqea87EreBVtu54GWRLaBcSZY",
  "key21": "2hUzy7xiSzSrHuguqfLFYtQq2T6n8vqctm9V3g6FezppXrZrnAGuF1EuWncSBvrfAtTuAWJ7sefX5NiRmT8uXZU9",
  "key22": "3V34XF75Gq5zmsHXgSLNvcCFfPHQPpWHFmm5comevirim3VyjUVvh7b9W6uPTHnPmvVY5m3oPjrw6tVUpN1NFg5q",
  "key23": "4X5upkccYgzqWJb7n7aWgZxWXrtAdquicVn6kC2kZitdCp2WGHz1A691kYN2kk2zGTwxAaoPqxe91Q8wUfeHJem2",
  "key24": "282h9PzThz9enzdk6rW1PzpT7isVca6UHWtL8gGjXf4fthL5ua3YmsH6ZpvmuZcHMZPohk689WUqpiUUe2jjFPbP",
  "key25": "36w7DS9pxWiQXjRZZP1ejHrUFLfAqUvDedLpSzzpbgPM1rMPsu2TTz6jWHYUcAJcm1groBZKpT6LnRTzePcDmLGR",
  "key26": "3Mqp6xkhPRFbV7fUtwsBn66vGsTQLGFB4wwtCftJP5dZcekXeFt7husDShtpEPpQBTyLnguvNn2Lm2vmbAqLFQjf",
  "key27": "5nWk7Smhdk9Gf4drKBPyeEnykgsXzYqzBZCvGWdXVMJAMBEEe32V67tyfA9R1QnW8LKnCaQ4WdQRa9xgAo8i5X7U",
  "key28": "2u8MJYncH2KoUFmjtJbS9hJhKwW8yuD1Ssn5s1RCnbqqDj8YTPgKgek3uNeAxPHWw6QnqVmpwf1RrcXx72Q8yRpN",
  "key29": "4gJLbNzHLGX3M5UrGXaQmhk9fxLxvEKY3KcT72C1M4GcNQitthULRb6CQU3P5K12yfKHyfptM3LjUHyts8R8rPSW",
  "key30": "T35EwMHz2pvhhVekZCrLkaTwe6jCEXzJJ2oibzuRv1zHqGUU9C8sXRMCGqXb5DWFC7TK38SSCEYNa8iy9MugYnh",
  "key31": "yvAMYW44D3wPRLinvmZHPAMeaeipnWTRyFr6HNBgserosK4WgMUeqvMpcHwyAY2BPMGVrKFDKQJKVJBRhTTDP3X",
  "key32": "3gj8AtFNMyFL6u1xAbVUiyYeVw3oKokW2tGXYNJGDWoWXpdLoTNuVeFknZqgfg2DhnjyVgRq2sgoGukofJ2oAnE4",
  "key33": "3fsHTqHxFRqNEKcw6S7FnPxHcJ585FuNMHqhnGjrPjhj7PthjQLhRFPQffXdYjuAasJppbUCEWBCbchgM9BaKxPT",
  "key34": "2vmh4s29NjVZ4LioEr1XNfYCfdw4M6t75gqY3GHEp7oSgC3YTikitCiTTw8Fibm5nofHAAjG6SUSW2YvkimpPQri",
  "key35": "PbjTpvekueH373iLwBfF2b4ASEUFyEDd7C64DhjTkjwYbmssTPVDQLAkNDMJpqBYsq9NQiQWWLAPAsYkf4qbk39",
  "key36": "5qUYWqYHmqpKSmjHpvwXgjhraexgwSHKah4s2PmbURoEnELs2799aZmcXr8n62Knn3taRPiisriDe4AJPJTFWH3i",
  "key37": "4vd8s8Uu6fP1ZbxMa2BfducFLARkEy8s9Qr5pPhVHgqT5s13XNqEpH6qvMr1boZmzBLbj9fn74H9opnQxDc5gBnP",
  "key38": "5DnKCBkPsJ39UZopYzNvNfZ5PrdK9WEpZCGCbM2ceFkMgDxJed69JMe4C3zddfFGfAHXS7XcXTqqCjC8tETZsjbT",
  "key39": "3MC9fhaEVyf7dBrC1SHuizBAfq7cC5iiW45yXoAvScZ1ywVigYhYmWQmR2Mqq7H7YX8n9WbRn4P7E2XwN1WxQjRk",
  "key40": "388rWL4gsGMs9NauYmQrfHKekdJsKfDXoVYsy9QMn5B1wxS1XNiMD5y1jjEVfn7nY5Jn4LNQ41dmD1w97ExtW5H",
  "key41": "5pobK1WoPVoASTUHikqQRhHVRpZrNaL9ttrjvnhMxANAnTAYa3nS9wNPr69AcZAzUyMW3M5mcbJkh9yyHt8Tjenf",
  "key42": "2KCUhsABrKS7fJfTKGTYWxP9Rhocr882iHs3itHTWJ7zyxeLQzNcnEFA8ctdhboWYtRh2rCyAovzfoNBm9iHNdXk"
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
