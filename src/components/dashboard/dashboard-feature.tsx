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
    "nKoCYBUH4ogV83fzGKPMMbGmuh3dfx4t3NtaKKjezDSBewUNF1cCrvKZKJgg3Y7cLbonUvcTr3MmyBCbkd4uASb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xjsR1ypcErQJAY36SdHVUPsdQNMVU8hq4hLoycXEP35JBKKVR1Y5d61RGBV1KntcKq5cHdkPkxC2xYbNA14FvJv",
  "key1": "3aGCr7rXmrEwerybbCLpPnkyxBMCrWWbRT1aTvLLwj6LJaTwpRAaodKwRjLcUgS5h1MpNNbAP5ocZevBv5Mj7dF4",
  "key2": "5MhfrvYCRuRTZWti6pxbZJFT4bVQcEJd6UPwPH5NBExouQKx9bTEZQosybWk6D9poNjBC6BppFTLYuNG7GPE7z8D",
  "key3": "5tQRUc98Ftj2o4HhjX3K2c9G2CKszDUYvtJr7Hdbc53dGiRH2Peef9dwmWm7nQ1wgX9KB9pHu9BeXSxgCXxjy8WX",
  "key4": "3kXDwhWwvqR28pP4hjzXw9ph25LAucvmuKycacqm5gTfLsJ6Qnbt1Ko9dtbdmhUkBju6G67WSbL13HYnXURjYqoG",
  "key5": "2uDrSQ5Qb7N2Lc1rGDwHEAXDhbHNCT1ZvtbefW6CDsbxRJpkENGoLueno9D8U5AwpXVJ9SZjNYVxv9fYqSU5KPQ6",
  "key6": "5s1HXFpQMQKzY3ppwiyKRM5XNg9b6TZ9yvGgM6NniMHBnFZA5FjXWNxSdgKKmMZ34ZSiSuBxhue3UUWEp1364KqB",
  "key7": "4PrY8DP9ziEBP52SFcZ5AjgeCJuzpnBD9S1f7wVT4zYm1LeWCCAooKFH52w1BJwnXyWCf9kvZqrmxARyJtmuiV33",
  "key8": "3TMVcXe1E5XTnK3cwNsRqJP6XD9X5Bsn12nSn64Y7uMAnbS56UWhgzYvPLDxWRrEZrdsUSjQyVr3pKyeVZdvaLeJ",
  "key9": "5NnwdztRc4D4AQQBSJez8tA5iE5TETCCuwCpW5FVckaaaLeJheUbDN2qZ5Uh2LUFnRxrZD2obdYCjFdqKtENUyD8",
  "key10": "2PDLKnbe46ZY6StiqaSxz9t2HjCQhQCQSnwzAcr5uG6hHNjNcdNtAXG1iUxvpMTuPmDjz4foDMUVNpvMUj74UEbq",
  "key11": "5De1zRBxEQHZNnPAjNNY456D3Pjtj14zBMHuRaYubeB87ShiFt17ERG5k84fitbzM7wy9FMH6RDy5CenJmxJbBry",
  "key12": "4N8bukSEtrUfCX8ZmuyiiDwTmNSeDESVRWxJvD6uQXuGJ42RqpfsDf7feRVhTNYCfFmjGmy5w6Hifi1wvY8i5vaa",
  "key13": "5nzs95qsR391RimFezkUM7xv7yTCxAXtGPdFTVoWAVVNFwYFSY5oyvkwT7w3krHQvoNc39n4J329WJ5ykGc1mu8q",
  "key14": "RfFqobEMoEXfJK4zoyAzxRWkPuy4EZu2JHQRXneu6FpeXkG2tdZi5EYDfk6YwUdmuo2HdxmWbhFMSgQJNLLDx5V",
  "key15": "2qA4tUxQmKgR8N3JjwYR4CXQPUfMkSnNPm6tA45LLSuwrJ4yp8omr5HeumiNLr6scdS4XQAnSwsHgd1AUBHkVXe6",
  "key16": "T8ThW33fXfXJER1WHL9T9m4j7yAYZJ2MTZVDYchYC7A5i4ZMQxrAHxgBkzbb6iubgwvNTDA5PqY3kfBEUcb6T8n",
  "key17": "3nU7uE7MmmDJGsndSge1yF6RjkuxD7fTNnbum8VXLQoevFr6qADnnfk9CX7dh9neRfMJWFQy133RGkG8eGdEmtw9",
  "key18": "3xGe39WcJf6JzNrUr89kGLahhcnHDT4TsJnVv1HhVAhWfrLL1tk966KsZNfDTxH81ueK7Y3cYQLfg9wZ1ACVURBq",
  "key19": "4T2tbn2XNPpKQLBTPhE3pGsJkRjNjrcGg4rwxDU6wAAQq8yLN154J4LehV4VjtmXfph56PngMb5iQq9UCTZpcfHh",
  "key20": "5X6z8yYpCuHunZxB1a3UH1QmEATnwvF7QAeZsC4DPwdYX314pppeMBPpuQA4oc5GftKqGXdE7yoXLEEGHLvNbd3y",
  "key21": "3A2BXWvCJ2hXEwaGKReKAJ3YJFAKJF9XvxNy4yWovFWpB9xwpRgkgFQ6TDbtmSYbzHpSjsVpkgFikyvXhByL9Aqn",
  "key22": "54fHNQR78fMkXCiFHHpwms3Ju8KEL2yzgZA7hNcUHErRJcdALhuYWbr6raegvHkWXaFuRp53efzyDD9WVovXGwxT",
  "key23": "345QnrYasTxto1rmt9kWGBZkGwHk7vvn3P86Bmg8ytRQvtdPKTisMF7NQS9Ei6DB5rnWXnFCfWj734LzRwXdRVTy",
  "key24": "24p729v9yshqwVpB442KzdkpD2cT6SekZfgW6sob8SWamvLXa8AV6v1NsY2WTyGvgfjvuGEM4hiz4AwukrJX8fDk",
  "key25": "4TmWNbkXoh2JWYpwcPoWAYLmaCm7fVui1WDo2fWor6yC9sXgdc64NtuCXJhtHUV9joq5BYREQHGhaBRiNqkUXGVE",
  "key26": "4GcHVmsziZzurdeD78fKV2xL88NqyHnKstwzudEtW3i664y2LCD7Z8bmN214ojgegtV53dwuxacM9eYtJsdtUyPg",
  "key27": "wHVUMRLcHdRkvMYtJhjgHQMNbJuCAZRHrQbYUMRcktpwPKgRf1LyFvSYdFDYpNKGLFkk7o7Jyzehc15yHchX3Lf",
  "key28": "4Kc6W6Hxd6EfqNTLBZmeS5H9kRfBEHsUS13tehs8CuU3b1KXA6YNbb8LU9114gDCVetxRFtfsjMnZZVT8dAEV4nE",
  "key29": "AU9v4i3gieMGifZu7zwymfn4hYdK4N4UBcV4UQF4UMcvKfT8Fmi7tcKC7WvhGP49eUsBwn5x5t65G2GmMgDpU7o",
  "key30": "2rE9fUgA4iXGktKVyquodcmTuvpy1yYwvavRX8VX5asvtqXYg4Yb6LBoRZW7wyAyBzFkGUcwjc7yqVmx2eYD4Xy5",
  "key31": "51EH2KzBkSSKrBzCTHvKmXiz7mxn1Xrya8PkEmoQe5bwUYTTpXP6ieGcAp4tCaJviasWkfYX7x3TV2MpGmdsJY9a",
  "key32": "Kj9bNE1AbVtSkjjHuwdY6z5E1B9H2B8TPJNrdsLiJBZ6kzgpJVfhp5it6MnpRJtw8uMxCEfeXXYfHTwcnXkkrRG",
  "key33": "5gukUSXX3qjGRGzoYdy2g7vkMwjTpqcu4tgtPjVD1UQyiQD5p4xPEE3ZdYo5L9NC56PUFrN74y1HJ8e7npC6BqDu",
  "key34": "4H3vZQnMrdyLp3wKuN5pzgh34kmrX4v8nMCnozVpaeA7k5CLc2rAZN1pQEQbqzgTi1w3qvbC78TmLMHQrfESU7sw",
  "key35": "3iqu4JLDMPi5GFtNnXtEpunSZPvPZGcKoApTN2w4zZ2bDiNY444sdocsCaMsBFHirDynvugn544giZdfDFUGxY3s",
  "key36": "2YYXbB51pHyZgRzG7H9g78C2RMmQfbt65c3EzbYEZbTewf3Pht47uMFX5uyJLKqo7LooUrNcPFsWKpjQtSYcLd6k",
  "key37": "5bZfgUZAfaDqEqgfLubJqLB4vDwQmwe1cV6z9DL94W7Y2pprS1AqFugyF42T6mCX7Xd5rbvjeD7giJZd5zVcUkxV",
  "key38": "4pn5J63iQ4wQFu3uqk3wHVEvXtq3k7J9HHZTSCZGC58ysBQBvAWFRJLE3yw6YYfUcFRMQfbVHFutZMzJiWuuFMnu",
  "key39": "12ymApJVQvzpxZjs4UEYMawJyP6iRzY1G5E9maXXMayTekaoyJnLuxCbyEiPaPrATUnpHghixzUzvaoJLFYXd1H",
  "key40": "Q4o5u4w6AXwVd8BPB4r8w4GByKFideNpCJFWyzjZjYLPn7TusN25yfNtHRs8jguMR7hrCriG5tECBeW5wsyjqZr"
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
