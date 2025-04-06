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
    "32nw5U4NsmK9metav8MGd7zCHyHVLYqSNfjtK4pfw2SPguKhuzwEaV5kmVuomNW8Nq1qGhFRdYiurT6VBJtELQEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wULL4TTA2KhdREfNfbQQNf5aRAKw67ggw7JT9GW2TH6JPUckJmYeV5YoGB37ccsAq9CaJ6tcQso4Ms5p9fWviLt",
  "key1": "5axthRDZoq4ywsABeqPN2ExZ8RbkufF8EzXD2Lazrui9ePHCyc9sAs6KuQWHGPivZ7ogSRHeCgtVzGiAwhyr6k73",
  "key2": "5YmjhsoxHcSCz6x6RSx4xGt1ZaLuHzf1jYhjcRSe5z5aX1kUuhoNAFJFfze4EV3v98zGgp7hF16nZt3RcSGqFtJ5",
  "key3": "4DLJsm7Kbizi6MY5kM5WmLxSP53FcTSnEpqL2PBRPvXVaUDe8JBYd1iRZctnoNWJ4TqS3UKTvxsRDyaTQ3qXmfPa",
  "key4": "3R8UHfeg2xdhw11oNPA8UfP1vNafyLHNz9wX3zQ2BT32mze7Ln4do3FgQEwdW2MWxfPagPY8CDMJRucXKPJK79x7",
  "key5": "63UuESSa4LjqBCHfbUNKCFDGUQqVqieBkLHCaTcHdKUeLXWHgt8rYkfhUDoiXULp7in177DsR7ixFH9TWP7nCrE2",
  "key6": "3E7X12cW1cDsAYzxz2d6aJMyFCSUC8NVyPDXD5UpSGrp6FjcN3SfLyDHSFCcaFBgNtLhs2cypTPJsR2kQJn9Ydio",
  "key7": "29jkQU1zEZGywx4rBEojLJieohLzeApCtrpxAWhFXdd9gPQ4AfYsgRRFRxd9LAZnp5ZnZrQFMsGMF5q6h9txFuQw",
  "key8": "4XpBDumUCknpJT8Ff19kjwvs44VEHkBk2oC4su9tSkFHEFU9jEV6d2zCYvT2qm5TXk6Wup5vQFs7tmeMdYW6FwjR",
  "key9": "3aD4ng7wJpcXp9PfTpgVYzxVML4gqPesGDFrgkgcGybDN59ftMrMCViYwZKurVKCG6cBEBqfAFevxJb1xv4qtK5T",
  "key10": "4VyxbWfzHoRF5rVoLQtVTyrDhG9m1ieE4Vvojyq1zP5K5sQVBTu55S9fnosJp5m9Vk3cm67MFZAQ2voxJnFFVowz",
  "key11": "368SYgv7McuCcqdY31FxiZhwokSYfbhz7f1TCqKLRdxoiB8QqTvzoT3rAvsq7rZyf9fHkZdV267wyGt74yyUVsBM",
  "key12": "5TGYsWF7Kk68r19ysEDDg1EP3f23ZViJKADHXsDqqg4LUEeMLQBjG3Ku9fBHwDHNtacLmDqNdxjsQ7hJdNBu8Gok",
  "key13": "4VYsJP8ApA8sUqYbwNFRPHju7U5s17reSpmjjZzooNzncK6aD6iBhQsszNoRbXRYLJSoFDob5uLeWqLHRf4gNVwz",
  "key14": "4wnrCyanaJRAtRUuFTA3T16PX7MwFpYJQoX4tHDi7zMsxFNq1dJJ9Qe2XTpxPqmwiffESh8xnbJdE9eaXTGU7WCQ",
  "key15": "4C1CT5T2L71oUYM69UuRWSJfz27ZsxpMGPcDzKgNAdvitm7N2cZw9oRHUgcwVYpWYRdbVGkX42MorUp3ktUJW25S",
  "key16": "4Z293pYJu2jFEVZRWJNi74MMGxeCGyZxUUW61Xmqe34YZZUMwTzhFQG1vtHkYQTAtJbkCrmfGZJy52RQ2v9qDbLY",
  "key17": "4Q7NXrcbaDSRKysgXSD4vRkvxygjM9L2hPQvobNJBxEHgJFKBZDXpyfD8xTqvV29MfeBH9VFx7uGHoBG8sfjsmgj",
  "key18": "b1mpHMJwj7eU8ZJM1TSJESCKntnLskr4LV4RFKZZTy29k8KqGMwWbBdSdPnQSwXz4mi5a4y24h1BVuDtFKGS9t5",
  "key19": "3hy1oJPnGsRFxiSW2s445fgEScSc5Wh1kAQRXw7ZKWyHWvaACHe6gGKV8xLyrDTYprA3S9h6ZLV2JXdB7HfRvo5C",
  "key20": "2T7XkWWrddUoEpoJfnnGWJLe96hFLQT2eC6cfTMnauaBPbKCxC51hBQ5VhrTxd8c2UykMsGXdFFwcfnrVZt82VDi",
  "key21": "MJjj63UDaZS9sTCDDJhvfXEMXaLHPkz5uGPDcmDaepV3CY9pKsXgRCUHRJw5m8CcqHSBiSRbfdr515E6MEg3FbQ",
  "key22": "4kGALAmfgE4N9ogiGWTvVnZ8qoUc7as8jN9HQ9uypzx2T7ZZ9KEky3Gy1U9s744UivPWJMMGEGsWfWmGcpxVZFLi",
  "key23": "5PuCPuEtBxgLZZPyvMa5qEk1fxcEsLLwbbir1NH7cyAY36Y5x9qTf82yVro3WxtRYKZtzAXkuVCMzbvJyVhR9aUN",
  "key24": "rSPdrTURr1yGUhcU7hcPef2w2vfgTRBAcQkbNkvZpZxPZMj6MtZFFyEwAnYx9NE4cH7P9tE3YFPrGif3DaA8DrJ",
  "key25": "59vsqANRXsJCDCtdvCnCmWq9TKh5PF43eyRMudJHzGJ1v9g2pUJMn1dfkjH4E5HEziP17PzD6VgSknRqcrVsuFhg",
  "key26": "zrCcPLSq4ZLwL9jAc5boXD7rtnKcdw81BEZKzfDt77Ct1ySy9KCePiRTjfsQxLiJ2TtB4Cu2icW25YtzsJxvCKr",
  "key27": "27YE5FU6MuAzcXGZU3oAEQ5MKNaME57CD6ZATQzgepc2PBwQKSapxLtqqeqZy5wAbhhgSfR9YRVc1FEpqqdEjgJX",
  "key28": "4WyXah8rGCvN7LHtGqxYF84UoZtBWKwrJpiGsqPVmkNAAcpByznWDY9CPro6qZbCqTa2YmdqcDGaqKHtMHiinFWy",
  "key29": "31xEysbpWmTAB86AYHgaj5FNSZD3rWUgfKyo4qQquM4VT3Rk4zitfRFC3jguChfFE2gaF4F71eJp7iYFnLabmJJU",
  "key30": "9YJrsaSHLb8mQBKtjRSsyJJghtcTD5s5PcKKaciyapnETpEJPqz48PVWrpFfc75xAL6mUQA2KV9wcDoappRkPXf",
  "key31": "44hbTTsJW2WcpKJFEyHRgPa5VHegqdURBhtsKsWcGGMh3SWQTo9r65TCi8EgcAddYVWrSLZbW4Xj5vu1912mzAev",
  "key32": "27ie6FCPgb7FnE1B94u6Z7qQiae8QGTUbA6ri7dEevW7nvjUHFNXKuYBJJ7zECggjskDf1BCWqM3S7sfL8wHCrCf",
  "key33": "3E5ej2UHBqHQJCMeo2quPgcfXCAraZEZ9FmRrDi7KJnaKtu1uBxH521rj2uHXiBmaaLfV9UVTzWhWMW3MYKmLCKn",
  "key34": "4Ydk8o1Yr8SbfZh16R9gKgMDCo8Pe7ggKnMfN8HM2UXfCdCWf8bT11WhiosNW2mNBMY63GAh6XGCEomySKwXstBm",
  "key35": "53n5j5tNGo2K1mzJDVkNmsdvxEEYpHYVTqZohv4uWre9kyHcviDARgQGdpbCXgtJbK2zbBdVdrDANSozB4AQyVgE",
  "key36": "2oiawTL1q6NtQ37YiKhcUi2vvCo7uiRMHeKkPEWvkMoFpi7ypbyz3LNMfD7JmSfpHPHw8cnEGkUKN3xkak7zS2K9",
  "key37": "q6838dersX5k1DHmg78wTP2CRio3FEKMmJsxrjNpxZ5qLiryWZm1nyR2vfxnb7i1kt8r4TirCtFYo7tujS8JLUD",
  "key38": "5q6vJzL7YAfYPEea9WSgMRjgCgMEVauhUmbz8LY7AsBw6MHUxsPHY5Wcu5qHCW1uaT8cmMre7aWQYikVH6JPw6Ra",
  "key39": "W9RSWK2fLx1dqPHkZSZWycariJWktkJ6ZVS4Mh9jZtFLxn3zwpjwXQoQXUbiaKoZiWXprHvsAAsGUPvnNnLiMzU",
  "key40": "iK5SskrWnYqARyYpYyCMcuVmbNcacMyVYGNSL1khwqCCJeESSkkNakLqdqVWQbgQ3mgHEPYrfErVm414DfcaipL",
  "key41": "3Qu1hzqCaKAGasTmcmy17oyiHkTu5i163gcu9imx78hKFhqtFcoCZGy9DxacNRVRGwiTGX2eonir2TucrTgdXaTL",
  "key42": "5xPq34dwRJgP2As1N9NLLXA5Gwdr2TS2LuBRCbQutmt3R71YnaP4uqknJSBTnfBUYEJkGvLY9Sm9J3f5iFJE1gym",
  "key43": "4FpHxxCY9tB5zfTPPPDHwwbDFf6WhZ4ocWTwsp6dEXXCpUkQ7hFJXkgRmaswzyzH1Zfha1btQEudjTiJv2sb6tUM",
  "key44": "4U8vsVKQNiH8QyzTK5PjF2CQZ1QMn7Bw9jApFBoQAcf1Gr9QwHgHP8991KyaXE4iacuBS1ZZHNUnQzXzqFm7641k",
  "key45": "2AsBHFfScVytbUXByvahfjHNC313yyx4297eSBRgMHtruAPLkQPxVP9XJza5Qaz9DQWRJuMrA8uyZ4uhRcs1zUJC",
  "key46": "2p6wA7ZM3i8He4wtnWJHSPAuvzjAjBmHftfLQFZhHUgJmjcrKnsrR2xQYWTb46HpDPyiEAbszoBQuQsT3d2E381s",
  "key47": "7EZk1XzDS3LnLdz7A8oWhucpuTrMeLr7W3EDGu2DXXmwcVzWNpCXLGhowX5LtaQUVNj5YputxFgRq6RDWwd7UML",
  "key48": "2xp1wsctKNdQuLirWkizw8k6wtpAvognPoikHUBco21Vwyod8uEyJCPvp9v3r8r4rvdXyiWdBQjvjvUGTiKMiBzz",
  "key49": "4ftTKcBb9sposeYFjiHu1xdHnrq1ddkhh6GcNwPsAMhwMcRSqegRHatrreF4GQrmdcbR2z2Az9ACmrWKTngJ8d1V"
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
