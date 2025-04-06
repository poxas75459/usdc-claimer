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
    "2ikuGmgFDYERbmTSVNBruMYS57yMksqHFSqRsabmhkGMWBUdDz9FkM6Tkr8HwLDM5Tbps6P7x1gfxxGTgGzEeBCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wECcnAVmvd4hfdLDTJVedJdLkdkLRaqHuZiK95bwaPpLCQ8aw7qT4js6NCm1vRVwMqyDXwUmTeQjQWLeEU7PMd",
  "key1": "66NywQ56L7YtqZkyHT7yXSN158ju62ssCjuo46g59few3JHhT8VmGBwdG4oqPsBe88dFzbEcWnrS2fAVjw4tccS9",
  "key2": "3DVkFgp2yUdaThQYk5bi2to9UVrczpkDLd1wrv3X3QrEsS4DRTtWtCKkK2eHx2U6x6g22NEjWU5TK3vYLCL8Nwvq",
  "key3": "R3ZAZJmwv1wwojwWo7K7nyAyF4HAcaiXSf8PoNjZv9QUYsiBPUBSdRebNkwrtVyAtpcD64faUTZYD9AsJ8LHtVi",
  "key4": "2y68meMbUqVij7h8Rjc4QswQ1V1sjN7v92tCA7kfEjUfQeKjNqyB495o3gJnUc1dAXF31HcnYqwNPL1AXyQvUVrH",
  "key5": "5BgNNu3KZP1A1rBqrDTdtFiRHb8xoVr1qnQNo25QW52qUkkbGWtBEqVreGiFJceLrnTQDuiDMonkwMvy68ZrpJ9x",
  "key6": "2JMkeHAB5ZHx3KMa1znhwVm1Gn3ghBwz4n5UvaDpYAB9j6wGtfSep72Ncfj7TuQPLVsWBj593VozyU939dFsmPM1",
  "key7": "3o6nthZmMmLkvxdCF94XWTbFWpFCKYV834moFyop3UD61vQHfzKMbhifwTvUw6Wj9zpYsgrhTs6jML2d5eBgL1Ci",
  "key8": "KaGsbwsMN6Ej9Kfv6bNVgK25E83c75Gws8gYrAjNQCYGstp4hQWwBuBRNhcBgibms6nuBWUupTxRKa9t4UvknLa",
  "key9": "oUyPTYNSKThdpHGSB4wuMm7iDreg8a7UvXdkihNCtJavYreU6yKtYGm4BWZ6P4vjzk9SfH2xFPf1iveAFc2jB7n",
  "key10": "4NjvAf8ZS2jHDCYX4TDxbsLyDApUxtXYchdLgrXxWpxoaQiGVe1uusTfKzdm65cjFnkWzAT1qJsGg2hzFL15mJat",
  "key11": "3ZGjhRLszB8sJvmLGJ4J8PngXHu34PtYQeqzD6GyPoKy2DVNW3ReY7KUtEqb3KjhNokt1oSc7Eh4aqAXHbq3PN8P",
  "key12": "5acGnuqDcoYfQiRMUuoTsVBPR3SmWQcm2AopTjxhPmKecxKNTVcci9URd37ZeUYMdjM2UKr778RgxwXG19ExicQ3",
  "key13": "2Xdk216SLdDFRvSz2jaUL2AuLBH2TqWt9tNjHsKx2U7iRxbtugYNMqSgqMYNt52vmTSoFotPDAoCiAmRhXmg7Bk",
  "key14": "55DcQPrvbhM2c98AaM97d3j5dUPnHDnqt7K7VeTR2xDDzPDKwAK3sCh1LnHs6vvqMByqUzzcEwP238taTG4vTMy7",
  "key15": "3mkiQmjUMa7Tj7VpZ6p2h1C2R5g5DByyBu8ZntvZNfs8pCYvsokzYQwF4AJEwqJWZRPCNECJ3ZwbWkumJNBSCZvx",
  "key16": "2bhmH5TpKVXYWAUCAeBGQR1tMvMPLntE3tqc1cSi6wJScHTYazLGEbHX3BEYcFvHkBZRt28XRJjtoZLQ4Bm7TuSz",
  "key17": "2yrVfZUs77QGGF38Re3UkKvzcD99WTEX2fGCMw6FBuo7sPmxKmsxuoFCw4HSu1Y5nAoonRBc9wqxXXP6bSakrxPU",
  "key18": "3LyZEA9m3EyspLDcZ4CPtHyBGqHJ6uLN1ykGwS3ghK6WbJV4NAhY8NnWYSDar4o5KK4sb3bgQwaC4RGZDB1XFufs",
  "key19": "fcnok5jC1VsUUdTiFzXaLtG21smAuF3X2Y2QnSRDTjfvkVKmQaXoRkgGP5t4NxZbntyNL3iUDwHUngnfvqAJH8J",
  "key20": "5J4PLHxLgNTVMEJZ4VXYKWviEXsYhVgUPvXm2xaBmjVXNNpYUQ2YPyC72MYAt2Y62KFxvcwAkun5fQKPuJsgJo1E",
  "key21": "4y2cpXDJ9m9oX52svXTiaorcrG313o6C3B1wGotB7JcDJCZWd58Nz1fktKGcvPEQQvBQNoCWYMRsgzyZujZUkhGE",
  "key22": "3pmanhsFTbV68JFyDs7VJirFtDyqxzNpWiN9wmuxeKkZxrXtRqkibH9YiiPRBCXnhegrzLXs5ur2ER5HWFem8vff",
  "key23": "2X7f56dcbT573uFb1MyKweSNLmAtGS4b8Z5i4ijViu6qvrDqdjnNBw1Bk7JRwq98e2o8WsoHpDH5g23geFVxCXwK",
  "key24": "58WNSi28RKhJsunEDgymbysmFEjgnwq5QdiWuxJAyFS5r9Ra9zgs4E6xTtqP3QU5atjXFcciEi4NQ8CaED37hLUy",
  "key25": "5gVTZcT8o49kFP6ni42UEA6H5zoaWeZ7tnAGnkcWJ3rbwoJpAEq3GZbL2tf6E3ykktuLVKCbhWNj2PCLUEDtYzQ3",
  "key26": "5M9Q2j9Sh25VSY1PENfj2pMKfXqmssxmhhUoL18FiuGW6ywN7Q6aiaWLL9iwUxSWvrHdnLdRSPEBbmykVWXRaTFP",
  "key27": "2Njkkihn5MK8KhFz2cYT3v2vS4hEN8Bi7Cwb68sa1vSsTxhdtvQZQu5RtL3axZE45umC9VQZsGaHyfx3joTmUXRj",
  "key28": "2RjNmpAksfGcMCDTL5VNDjCeS6qXJzW6p4VLi3KTBvWVfZmTr15ybkx5RUFwKZWwE8W3CwVnvafPwivDuiWZbasM",
  "key29": "4jMAe1F5gGQNRV1sM5srRe6m1vwbz8qSZrcgFj4tXgup9Qh2RV4G2ZFhtEdrNubMuJJsm3k6F7PMhyZCmZx5smEP",
  "key30": "67pW2HTutNsoRJTiB6U3RvddXjiYDyVCd3HKT5cWGwvgQGQDvKLhYvoaPLcWywGH3ufZbkfSTKc8z6GSvpCAD2cN",
  "key31": "8GBaeCGneDFa5EWsmqRLmXGTSEXtqbdnMmTQm8vcTXqxTrB4PiXFyt4RVJ8pxcf11CAxGB1EWbSMb4kFnkWSWBt",
  "key32": "4cMH3GT3wq4TsThZdbny7nbzGs9pfPaD3UtgZ61q9W14tFctA2iAmxMwysEeZ8v61rPFaSnFY74yH879ybqJAY1A",
  "key33": "51nHPWU3SqULpY26oongy5QesTD5gq7VV3SrpiqvQhKhV4DgYxFSkbV6qWSQepbYwGWARa48uMTs649znbFwKZao",
  "key34": "4mnxiAXgCbvKMdUQUuaB8wPjmmeFQaJvhAEjXMGFLNfbrYkLJ7ME9SnCn3Hq4XDGKxRiwF7wiFhRLhhfPZ84tMq6",
  "key35": "46njeL4e2Rf7dz2UG8pgC1L95UUSxqrxCgiAeCf25K5cXVEW9uRP9SJtEv7zzEKRb4EaptMEpueSFdP5PE34JMrL",
  "key36": "EJUaSq2Y8zjTz21ELDYN17uE8HWSJu2Wc36E972ywFbSq7Cuuu1QkBJgZSuZ5WpgTWs5ikf1kaFq89qijs1N4oJ",
  "key37": "2BRTw8r2N6mcCBBJ1vhWJPZwHHcBH1f7RWyMFQBDPaNrddP6m258uSQZ99ceKNCGbHP6grTpjqQnDgo6eG9oQ2jQ",
  "key38": "3Pu1fBjN5X9rMwejfn3c8b5XS8ZyfkHLg4c491CzKRmUgRZDk61b9mPSazbQkJv7n5nru7H3iGPXCMW4Ld9EZGAS",
  "key39": "5CRun4kKEx3FDJaqRzZ2gBwJve1Xd4fs9MhYEqrGfrGooRCQFmxFLzMHvHBmnaM5gKNNZ6wGFzzPU1iStz1d3KDm",
  "key40": "2acAjtmnY9ePTiKLELtTgxwFhMMWYP4BayJm6DYqtat2YZ4pNLwdHiNTdtJ9UESJDpaZhGA37y6GHgVCCHoZKttt",
  "key41": "2UFUquuZoCdUtRQTMoS5GFccftyGNwBcmCr4QjUuaVy3EGoEVsYmdmkQnE3mkMYyYipiK7Dw7YPxxhCBVTSHSCrH",
  "key42": "58WNnkQ81sY2PuCG6jndDHkkYPqCmhrmd1HT6Piy49go7eKPddrNgBmps8c3UX3HrjP92oyDUJg7RR4Y2yitWmwB",
  "key43": "4RLP4xT9q8R8jVc63uJzNxaywea7b5LNpyFinKkmjsaxbGDATU7c89DLmupJw7pLiomgqxKn7UTwGU3iJekCcgnY",
  "key44": "3JEDafuhR26sAH5KZS98pxLQKE44vm5C1H4VjnmkUsvnDcVXvWS4nq8VFqadMvXRNLtYCMaFKAuS365eemEY9Eci",
  "key45": "27tPBp4zX1rb942FvhM8X5EavoLJ1W4sp2Kdgy5rXDSRB7noX5nQVtxzpgCdh8jFsF44yAaFfkv5cvAZYpGiGJgS"
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
