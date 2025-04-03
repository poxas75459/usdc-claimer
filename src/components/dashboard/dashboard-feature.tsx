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
    "2XVudkWdJwhuY92aQ7cWEUo93isz18rWPrRxBDu6X7kBXVRgUdFEch8FQeQUEEsF3DF7S7KvQSV1kPCNBd5GJx3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PVNmQzBrAW99wedTtZj9A9sFk21d4wP2qVpJ17BTQFy9Cu818S6qtRVWaXnioPH4RAQtR3cZAuUSUf7nfRfzx2",
  "key1": "42ak8kNrwSmLRGnAgaYm5HU8UF8eJGbVY5zq9qTQTjWYd87tWMnnadKo8C7sdg2yui9rgchYdhYDtGASAhh2eC4e",
  "key2": "gf9aqcRxE7bd1qRvkAtMRfwQfKxNXFnevW6qK5fFYaa9yNMe9HTG3DQsdtoddDGAoU7KvT1VxXYXQCP416H4Z1p",
  "key3": "2o6RVxFa2jPTtbLfjUZrjNiJpQ7okabLgeB9X2bBzBb646UZVmwEwgcaYhvWM7FJvPzKwb3PKXLhcWdp9U1oCm5S",
  "key4": "3yb68wGDfPdwX4f4Z499ZbJKp6VqUVbssgUsFiXwF2rQ5TrxeqbKT31XBqjZ4rfxs2rcAXiPTDYPcfsdfPgdE68n",
  "key5": "3cjeQK35dzTmPUDiPvCWkVhcSto1GsyLaEirQ4FokRmWSG4LnUtveLAehf3eturRXDhybHC4bGeKF1AZZiDFvNdV",
  "key6": "om8xnqCxpMi2GRp7eoAVTaAXbmWvTzSpVBjh2wo2LXsfmddGatyDz4WbxnySr31gSH8Pi3WAbofEiPRbLx1J6rC",
  "key7": "2YZLs4EBHSdJAo6AQ582S3cj7iqgvLSsXD5KjGpb1zzzh4CsZH9rdx374QHHcQPEoQ3p88MzwcpiPTjxqAsVAwMT",
  "key8": "euhY2Q6owPSpZB5rXP6xJaMwMprf3MQRhwCJSVh6ixXTEbAq3Mo64fUAtgs5o2tDBPHFmZpAoevEExHsUNuEvkm",
  "key9": "4gVQzCnNmE4QmHEUgSgpn2wgUdU3RL5nK979v9zPAX68LyXrb8QNmZDPu7UGEsd9MkoxDwehdc54MqkXGT6nWpRf",
  "key10": "3sxeUXQTxkMN4PBFepwKnrRJh46R9EoUMNy7AAza7gwPCt6hZMzdaqQGFpjEyvdBYNC9r2w2n9r2jdZxz5yjmCNd",
  "key11": "XPb3MsmEc1796cCcnjePbVsSeuTdk3A9atgGQhiKCDJAZS3LK26QNYo91AseVieA8xgbjNeQgBUmUhXXLiRcXzs",
  "key12": "5TT7RKw5K6cz7S4K4yGQZXAmfe8FspRpWSJ6xEh4ZAzLRv5eNcEurdULfFGoi6cE3rLQVaNDeSfbMG1Dd6kPYsso",
  "key13": "2wgvzY6hYn3tkwvjkoNSdkkLXsthhbU8CviX4XhCUwAWWz4Z2RF3UkrANnbMW2W86MBTM2szgQmLEp7BuTereQhP",
  "key14": "Ab7sHqzDWjjed8ChsJWwYztvt4WoPxiHE7gJsn7Ln6V2wQFHH6CZJ3LFGK24diJtSZrASEAywCWE1yFRBNUMLRs",
  "key15": "nuoJ4JnzSpvJdvwGsrB81NtFLr8nmYj5BAspyfpfeC3JjVi8acKGGFBHVBwWrXGxcUGoCXd5BXoUefHV2kfqt7A",
  "key16": "Xc1ESWXrxNRjnSSpAAct2UVu2Ng9F2vZWu7omnPvXvGrfzcacpnKZmZHPzUWdSrqzbUiiQzEmHNQCDy2XdpsHwd",
  "key17": "Kn4XQhykiU6PtTdgHkQRebx8TbpZ3WjRWXyrJQkJC3m7ktpWhGtmaCAE6B7deRCRLt8YQBeFhqvH8kfMtsohD9v",
  "key18": "4oG1PufcFC2UEmqncSgfPwLnyDC48eHAxs3GSTNAXqVKNgE3a2SMyVN5hXGDvWW3MJiwhzeMx8PYjRym6dvcz3dP",
  "key19": "MzLjpbm8rEBC83TqwUMKCH9Vdg4MVUGH6ffKLGUFLqm99wqFCWT7PBKKZz2JwefiNJ5Khx9i1x89hx8uEgJpJMm",
  "key20": "2tVPQcm3FA1UAp5jGybmC9qhty9jDL3JStUbbiDhZHZqDCEB6F4CGyCFkq5ex6xDcgRauvbaExcvSVrS4xEJ2fBQ",
  "key21": "xUQC9A5xE1sSqvod5vbKu5sNxrQDDf98yPUvPhNrK1AcBsLL5cRfc6aDUpV2GTB4zj5o2zbyNHbzudooMKmAo6i",
  "key22": "21cy1xKu33dDZn2DcSAdh3o5dbLKsAuW9w9c71Ex8JyXH52qieXkDSpCNYuc6q4nE5RQomAxzqMW1e9JT7RtGDuT",
  "key23": "2fbgJEWE3im8iGD4oTkLECN5qoJySVHRFfLF93V3AQrybGeEeZ1vccnPSn8Rk1g2ex8ToE8oa7DWRyMowATgph6m",
  "key24": "5MYJEvMZn899pGQrdKu3NBKJ3qtXzp1B3PvAKNmRjYMQh7LQaWHtGqpMiHsKzKDSVsST5TeTPdKdRNYYSdpUG5D9",
  "key25": "5xPKHJ4AenmtD8C7vBxLw3ZiE5KYwnwVdV6dCjajE7FdMrEM6KnDpdNLbrTbeKZyDxeDLTPENX293HJuqjkyY96c",
  "key26": "4Hmr6WhXUzGK94U2CnhL9J85Hhe4booKZJTJVLep89NQ7htBaLmVpxs4GyDGxvmAPDL5EJ78dJP7uQK5rwP3Gosf",
  "key27": "2yRyeKC26BJYfxVBPR4mzrf4xmCk4UuJJsCqrhovpKwNen2TyJRiFzRcC7KtQZZoMALfjossdD9Z6sWUkeQ579K9",
  "key28": "21e7GWKogyZRwMUMb4mj2RQdqgDVABVx1N11qa9nuUKMAQqNhBHyjPcVLdW6wACQU22W6XbSqYQEULxN1fwhLBY2",
  "key29": "5wCJv5qfnP5foJAqmT2TWTwdKEux4iCVHe6BEq9wKczvGYAJkomZZv4a7UDg9xR1aUtWfYKAtkJFEHHe2fJczt4k",
  "key30": "dc1poHQMxzna3DMQWaCKGZewsrCNRBFJ6vKSWbJyCaj38LH91NXqeEUEXPGzdhnu7VSG6p7yr4xRiEDFYkoqG2w",
  "key31": "3FBTDxb4Th6DnX6aMTHPLCmhaGwUa5cGHTDd7xuscx4929E4HkBaPpZq5FuDoi8U8MpWS8cHwjK4BWSixunTsLsL",
  "key32": "tqJGg6SwCbEeCpAnicQvPbbpTHjxNs2gmRKrdtYJmZbP6VhJBcLerithmjF5DGC7Ccqoo8Mq9rfPKXL41edxMXk",
  "key33": "s55ERUwjabNkcm3rj65PG2PFiNgPcoUCgmVAnb8vxTk3RMUriaDoZZVLaLL9hgiRbe6P77sg5k7sc4bwknmNiei",
  "key34": "5YxZicYTTL9vrp42DNxdxY9BT2eeoEvREgcxRrS8RdX5eZtqGhbriNkECHTfwg5FxLVJU9N5SvzTK7seoxgzMavA",
  "key35": "3yuNfEiLW3ERarx98n6kEjRiPCGqCCYZtzLiBBtg4WKfiS36dNKRMQtR39njEKHNHBLNBA2B9aoFuRiFTGF9B2DD",
  "key36": "jp4hpfzk9Y7qHFFju7XZV8PuXLwSEt8X9eHVVMYq9cFBH2QNRpquMjqX6wAJjifBCr5BWNWzpJNoHkt4QgtWUf3",
  "key37": "4rfHGZGv2h9ZbvQtkmBb4VVpKuczo3Hn2H7e2Ax2xC4rD9BKiwe1an6Phzurh69ED6phrAo51TeLsgahJHeKQcZG",
  "key38": "5MQ2AEJ5RV7vAESE6RyaCquFCnx6K8aMZyFDzPt6CJmPR8YduJWthXxwLi3EgQ2Yj6XegZS26fzRg7QivuDKqqmZ",
  "key39": "jfLPWREaJ7yEodCyCWiCt1gtQcMTN3eYyFWPC4XRUdJcUGq1BM5mZDwWaMQyHZ8TvFySxo2k55Gb8HMEpMZodZS",
  "key40": "35ycofqG5MTKJqek9Bb1NEEK6zoKTxzhe48bNfFaJ85rwynfckQY7KX6UHC1zdR38uwEpAvoiMbRYgaQsuweSUjd",
  "key41": "5hFTrQLQ5ZRhYJcksVjHgpwSzyLtR4JjZDmS95izLA2JDqL5L5UTCx2rKhd8tYC1K6vP2WZFzdc2LbS9oJZoBvd3",
  "key42": "CG2ZFtcSMtr6B11FVD5FRLQFz8wNTogDRbCBULBYpeX3n9i3m6D9SzG9eKKX1Tgp8irWrkEKYRnK2Lrr7pWoK1S"
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
