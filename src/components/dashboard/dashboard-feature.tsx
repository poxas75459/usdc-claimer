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
    "4UcZaUqLyPLgsUvnrt5zWhaeCcr96TkHzwQCNobBJeYHkNmMqKcJqs1tWAGADRBKbohR9NQkoUqQX9vnm5t8U3rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fmy8wJxZx63Tyvwg3Bot9BxupiJsz9ZuCNYU1dojVGmDAgf1eTH4GuS4g9Xvurh4bvYMvMWQ4HDakXTLELxifct",
  "key1": "5uYg4vggQV9643xG8TNYrqajqY8HsFKaAphwfakxxKm8VFwT82jXt2bViyzavMnASibkUyKTX4B39XceeAbdhPYj",
  "key2": "5TvYM314AmeT9gk6a8xDqf4XLYbcZW96mH7EceNBAcYnBoT6HxUX6WjJVkXgkGWW4EFkruFvbcyVXxFuAf5h5GdE",
  "key3": "3VRmmDLTxUspdSvmMnCZsJNPxtUS3t3DBooBdUmUxTp2NcjoksTVhVzPex1cepLtiowL9PHD5C9TcUabefL5wTy",
  "key4": "5xt6jUDaAnzNyGjLZoPeNFXLykvTuzDhSPLVZ1NMc2N4R6sce7NLYF3AYanFEz99SgbmHTw6nxtLS5ag5xH7Xy2Q",
  "key5": "4Ewc375XHQTWzhhj3tNYTLLzv8DxDSBRaWNWdoPKM57HrGgwduJB7XVa2xm3Tw8qrJJbfeLUR8meQgaFMffHAATh",
  "key6": "Rxm7TE4tewzGepX9i5rTdAq4tmkVy332VSftSGjSiC7ae3FWHJrRE7QKkVcMKmxHBmWKSLpq6gQ17MLQEmFtY6e",
  "key7": "4wT9kW516HtsGHMmhJjVAJnzACmAn6vpMfn6gZ79JTyNzftwvRBH6cjGWDU568cMqfd6jobgCJMqyUrPPwzzepLm",
  "key8": "ZKubFEWhogSS7tsucfJMRRky7rBr8dG7XXMHhMjw9Q32xeAFbP6HY17F2aizXpk4BzgMiGg7m4HYUkNVSgv8Xhk",
  "key9": "22AqXYNDxVX7brArKABy4zQ9odga2dMtmGmNeQtUfWfde85enfcbJL46UF4VsswdcZFkcjGD46xFdg7fuB8webAG",
  "key10": "36Rt4ZwvYsvWJTq6jFt3JNyTsm8HJurQ5xx3nURPnygxuWwH5WEE7b5QSiYxoysffBBPxV5f2nCtsjGHqAHmZu8d",
  "key11": "255AepAgLV42KC946Gt8azo94sQ3djdnHvbETwHqUCQXjcapMYiAAgnoZtApbRGDJegbRsuBRifd4ybCJRJ5wRc6",
  "key12": "44nEcStN3XiHaZpHGsq4qsmHmHKHLdmdBhRA5w8NRPYZRxe6GfPdkGePJD1XPsyst4BZLx8AfjGGLKwNe2tiXCet",
  "key13": "2nLtxTeTgDiA5aEFXAFMNKhiemtP7crfdPJBdrYGPvcg7bWuwiCPVs96kSRoJwVrqLq32sNYyoRgNQP5YiZHy4gz",
  "key14": "32t69DnvNvw8x63NTbk6YtoqyYFvnhQJLYDrQBFYVjUsC4bRe8136b7vFid4LhmvwcMCBp1fdDDjDVek6Q7WY9vx",
  "key15": "4cnp9u4cXUcb6KWTcsbPLUVZgL8Q1VoQgaZCP96VWh3JLmw3UNXKWepHtw3PvNNkuEWYDFNZQSWNjeq6rEoN2Pfw",
  "key16": "5f6hUd6RbhSMxHGMTuJQiQpnSWgDk5oR8tRjjh1DjuCN1vS9iPcS3r7TSvkCNoSEbMieQqRWCwnPwojXUgb6wVwo",
  "key17": "2CensGvNvLcQBqWgSb8j9G6bVtwRN6wxFr1rTAne6QEbCGgGFieBmBSySrNngvviB2rUkkFXU9v95vwNkDodCtsD",
  "key18": "41xtc5NsdrhuRNRsyBECAZXU8exNXxADj3ys5xxHRJXgPaxbrDXwzENNyc5SNFSG5TRTgDHuxxANx46P1rVCvEWW",
  "key19": "5vEsYgRMBbcmYjzEbgHn9KDxPvVT9ATBivBteZEJHfuQ35MdyyAGCgm3G6rypd3gV7wQjYKWpyHLcg14sYsfGAyf",
  "key20": "4aUfejF1Ped3W9Kx23xZDhFpgiQ7evGYkFkfWE2oRtJcLZPZuDSDyxHduUYEThj3jPM3MtYpuVXB99kmpmD7SpJx",
  "key21": "4N5f8ZcP8pgJhiUh5ZgZFHfx43zZPRcui8WjkeytApUjRSn4qTdHnh2D7CYW5ZXsKT8q7zxhWqKWGQqAdYvwqP8q",
  "key22": "HoCRit1YHE1HZ772Snq79hvdVXTQY3drVn1c2BKAC2DHxCb2TxRm9qLNv3LoTxJ4bxsL8Sj4WFiAFAMfS4iyTt7",
  "key23": "4YnvLr48VVRn5QoQi3G9MjZ9mPYQx1ckQ4jgLpY3HifdALqGNmWQw5CrDyj9RcuoKWtNzaCAVPgkhEMe25gfq7zz",
  "key24": "38CjxE1H4e3Ytrba8WfPRp4WZXtwyBtPRyG12y5TnXvQg2Sk3BUVn6QLoeCZWeSbDd2o1CbMkD9PHxik1K6FHget",
  "key25": "4FrxRvgfKW1gxLdUU82SmGeoGthzjXbyqsZVULm5nEHsSLuWo3g5PNSg8nnMQZpXpuTCnEJHFuVmgS3s3JBnq42z",
  "key26": "BPs37Frj8xqr251nuDdhJ2y1V9eM17eBf4G87dJLMaHCif98wS1SGNK456Tke6dgFugsQ79fVkYTWngvzpVJhDv",
  "key27": "4M4dtq2oeB8EZsff9EWeM6V2wmCaa8qYDcE6gWCJ8hQu62y2s4NKxW6kcAZt1UJ67cVbhCrUygXRKPrR2GzN6vWC",
  "key28": "5fBKaVwKBcrt6QfwhrYx6xMWhYDkYWzYhpM92BWtrqsAU5Biq8x5rTdg3U3WbsZR2BAroq2bZZBzu3aGp1pREUSq"
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
