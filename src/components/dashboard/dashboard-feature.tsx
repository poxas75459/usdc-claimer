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
    "2jqn1pWpKLDdNSWPVDsDLQZhqJ1UGGvRnnEJEdJfpDts53Dt6oRR4sFEaSz5RUkAckmLNTtH6V9f1PUxfqz5Kh4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22WfJyRxF464C9JjhFjhQz4xTQrdusk8MLtecGc7tNk9kc1LcpqTvbaiJwF8RURL7cQwDaQsmTjNKf7jgBXCroy6",
  "key1": "56Sq85rJVqdZNGX1Nfpotv4LzssHFde9evmted8cqsC3jcWew2SeRzrUNDSYQT18kLXtLZALjr13zsg6oUsZogQQ",
  "key2": "4SQG4B2TvPKJ4xaETCGGqd8TrSNnvG8Qpefw6FLgXdbypNtuqqq3XaUTiKb5egExqEsQ8rfdqYjx1Zg96ttJ84Zb",
  "key3": "2et9FnCxmqCVQqm6tbH6xKkoFK9A4ko7EEAe8t7X8rtbYYRi597uwT5tYt4fvm3qs86TigUh5r7zbPotFzwmR4Kk",
  "key4": "2UNyNaSFKNxV5SzCpFJGfybpAzP1iYDcfnHw6bzjhhAm134dwJvQJY4HdZPWxTybMFJFVCeaRtkaF2Yt646ema6V",
  "key5": "4gExmzFfHTgcJknjVxviSxJ4K1BVveQnAqCmUtJ3hFbobCPNcYn7Hahg6uJfbr3YkCN6HYS8ia5nU7Rojm9Xa88G",
  "key6": "3F7hoh3nPb2qvtEVu9VxCXr54uUo1MQ8u77KWVA7efFfDNEYQuygTVBuiV4f6WKkFM7Ji88BWrK9YzUDuyTGbCYP",
  "key7": "3RG7e7tZ7X1zLjkcLWBHdwVCikm47k3UEFgXjdfvqynuMJaAjJ2xdoMc4Th5HwAtoRkXJcGVZq6SE9mZ5hxsSQBd",
  "key8": "38tDE3QMLjkQMnfESUoZxhh7HxAJo131jEXTCAYebP3fKjgUnYzPh7wqkq4vLrPSVJqma5t1ETDv2SV9S1e84CEG",
  "key9": "pF17cDheGZuvoEZfJd6DWzkGqxkqWP81tM8AbU3NopfzG26BWViUATMvjbfLRqSUGC6ohWQKpLReRcWnFsqzFSs",
  "key10": "3zC2M7dHdCUHmqWk8SBfjnSp5tPjiXwbr94DgRSDNjiWTp3JDqeLHCfatvBYSsoMFZbT8Niby1cEPpdfDQao6J7y",
  "key11": "4Gtghr6CSgvtiRvJRdSKLooGPhGK1QnmAxJqZtrsjKqaSuSMFwyJsyvEyf2ahpmnKdeSBDCAYvHVQNHX4Qudmsba",
  "key12": "49nN3tRqVs2Y8V68agNp4DBXj7PbcpPaw3iNc6zmAgXfpyu83GnSLgFmEggpeKeQgAaG7npTpPeZoZCURMEkh29n",
  "key13": "38tJPHXv2c8vFfUtCtgFa6sBVRMNK3S8MuaK2kEnwbjw6PFaecRcyUiJBySTE1KjjFww8LNHUqEdo6dKuLw25nuc",
  "key14": "4KB7AQ7fJUeKHykcaiHczKexDEtPtZLXgM8DVzDnJ3UqA5adZ1uFLVygyZdpHhqJnXtVfnchT2DFhLbEumVHz6mQ",
  "key15": "3kXQMvs7z8zkueoW9djfe6qBXBLQLAJvowM2XvFVmKe6BuvB2jgA9pMWTZ3Dos26ctDyevn2dRgA2rbkou2LvHzS",
  "key16": "37skNhYqnf9mGZVKkXUHyCVhQ17dt4YWuAzaYPRpBRBtZLQpV1bWbXYgmLExCZgj1WeeU28E14bBC3ZxWYEGa33w",
  "key17": "5h2eqnt4YJv27Puvtxj76tCjNE7wn9ztkQ6rdswoKtZcfhwnUY8fJNqHZMDpaCnTRMEJMdPGeM6RskyFg5esyxvC",
  "key18": "55hj7YMT7W6NybRBcDdpr7VTeLLdNGLbh9UkXYciGKf6UmiWaA7C8K85M8PPi2qm3bxPcHNUoutN8kSGvXLiDAUH",
  "key19": "5cDkkDiqAwT6cbhAjMZYjrUKjP7rUkzBKZHzuTGg8mfcGcYLahTzkM52poRH3VLKT4SKfGKB4Ys2KxTJrFsTQSEg",
  "key20": "5ioK81wqDwNfH2sf2pYGPN7WbPeMRcwTFcjF18f5m9GmVE48MsEsSRTrxYxCfwsrfrEDcvaKDdB8TfYgtvST7JnY",
  "key21": "54Q4kC9qGRvQ5xq2DtXchXpuxqJbNV9ozcwFdmGvFFCnoUrJ8hpE2oPKtctzdekS3nXwi8kNhbeQJ1tUVHzTUGu1",
  "key22": "3Wapqh7PmVxzuCVY6sX8jLX71bRJYPEoYVJ7XADNffPuoif4GN419aXLGKzN8adSDrFdE9WTTAaqeAev8sRDUku1",
  "key23": "2XfCWx1nASzUjj935Q37Kfg8yGLoMwBvqxcC2oM6JS3SLkjSbynaotGAfds1Dfst3z2ASRUkSiZXRSNjTJiRAk8r",
  "key24": "PP5rtuFUbmtkA3NkxGyQjaNbTpczBR43Y1YDJ7fbNED3vtrqz85u57apVL24qH9aFEp8Uo7KSo9zVnocAArWP4W",
  "key25": "5KSeXCcFdZjGgnUGRfMj3WJpCWtxMmGntFQapZJVxkZ9WLmsDpUYz7EaGWrTWVyhJwG7rkZUQ3fnxJEC1nyZebER",
  "key26": "7U8ZFt78jaM65YrkTgQtGvRtyRTUdydUukuBK5s22u9XUuMRw7azptr19bL45sF4rsN2H6vWt7RLE5tQEKRArsQ",
  "key27": "5fSrfmoaixwogHHRKvEPmVLYiRrDMLogujAEKpwYREjK82WbUYJYMU6WGftTkpBSd8aQAZZ3WUb3FaQ7zHoc2XRp",
  "key28": "4N9aRzQKyoUKrX6SKZEASVu4W7Jn9Xt4VDqnREdxR7DnNAKdyqmweQnyo54edbZmFaGrWPZ4hGc8VxU9gADbUnyh",
  "key29": "61xn6NYApWk73KHYBkNxsTRmiAs4CHk4n51GQpXNqGCcWejGfHJydwt77yTedRJCPDn3HJ28SWNy6ZrHjRStJCZ2",
  "key30": "42Z1G76TyZswhK749G32W4mQSFbEqKWfhCeZDw6ChjETroHVBdkXPTWT469aV9o26uMEU3oCcqmgrz1TXzbQQ9Ab",
  "key31": "24wntEihWu1sZN7Pbc8EVZfHtFRmnxCxqG12vaZCPxJCcdksmhPCLomwgAZvGcsezAYeomC7wwmYygB3MjC8MK2Y",
  "key32": "37j5Rcvu3Js1nS1Wmt9gZ79MwBiM5XjuL4p1S8PaoTGBvMmJHgNHeam7pjCDbJW9HuKhscV2er629Jk24xUadneu",
  "key33": "5jMgfm1oc5GcirkVXBUcWJ4NW82SonF8YiwexjKPMPCGosynjoKuqNLmQFHAE5GTMXKQswkAut7Jb6dHGfrGCsML",
  "key34": "3QFucyAH4qSLPvCBMZHXVpLGi7NMzNjjNnHQykbDyQvMvKCPMBqBdFQbkMRaABJpJBCzmmygK441RPfMcxbXeEnu",
  "key35": "ggCxNEM19WifdpuuAfVNz7EXDydC2eggNnLqfwxaPfYJYdCLD3eDuah4AJmYtWB17xSWHS1HHVCuBHt8ngv5K6q",
  "key36": "4YzuAaeS5dyxjtHwjcVhygUb1c3fD3eiQVTDiGMpJKe73LDnR6dDzyWBntAuftb43ak9qJBm1gZQHb3GZJij5cxv",
  "key37": "5iqA8VnS8L8Wp8T6XZ1ke1kUR2yWmpe398izTvJv2sdqHMVgcrQjT9iY2tb6PrFfaXNZyyi5ymBCVW8amYJdaamS",
  "key38": "2FHoYt3ffJNCxHebw4V9mFcPTh7eRoG36SFCHBoEMFSDwVTK93SERcyFipUozjt2cYNKAkZKoDV9MPXWeZL54cXQ",
  "key39": "3pjLYvkrxBMSJeV6Y44UR9cDMFw44qN2FUEZBdfbeoVCjbyzTyL78s81vm8ti48GbC4FgnLLfGiM7Hyu2QVad4Dm",
  "key40": "23JMKKoJ7aV4dcVEMkdFooxVKLuX3iYAxkUroqNZp72ja9VKj2RfeiyZ5LaJUEAku5EPwuHbfq3uriKQb3M9Yab1",
  "key41": "4igtgKXdPbAGW8Tkjw7YFJmSvCWdXYf1RPQhZr3NM8oGX9TbV64xrq8Kp3sm1AX4oi78zbBiuHmCrikRo1C9Mxbz",
  "key42": "4U3teXm2q2CRrujpwCJY6VN7r1UpeMBeTKw3UXv4diiuYZ6H1jUZnRZjctQ9wVk44eAsmpEBCWtVjmFwGwHPZpQb",
  "key43": "2X3zrmMrSMsy4x5gdsdovmpS38fkeUTXieTLdW75w4hKHg5gJg7yBKuG1w46GSF7iNCfuEXdjZmeDoyKyDpo4pz8",
  "key44": "2zrtXrvW4TCyEwiJrodyZMZTswuNWmU9vZ8VV3oM5xyYrM2fyAhWjmtMEV1vY7XuBqNLDniBtGfD6uFhaudNMFde",
  "key45": "33XjfJLshviUSfYk7yHRcbnBP2isM8yaJZ9TZzqoPHfzp3otpHmtKP4pqoYzVbBPtjdjHMJzo1WBLFV3nihPPCG5",
  "key46": "3kQqBk5Vu33HzahT6fze8wYyTBungEtCJx7RNvypFQq4v3Th5BdzUK295nfuGHLz3pfdd5U6uV9Whg5uPXFDqZPj"
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
