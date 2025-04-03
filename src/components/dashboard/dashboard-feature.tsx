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
    "2CCzvaSF8egMgTtLrypUp9pPZMWrmr7M4fET1b7d8qgJYZxYohbaq7qHWDu73wfJ5EhuzmvKiriiiUhqQ9rrJxCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z3g5qH4KMibf47e2B4yBMC8y2Vn4Jp2Qrj6gimRktEyck2WGKrsiE1vixcaJRConGoAf35Ha9iVfg5EcoAM5eaT",
  "key1": "W5jaSNGRe61TaUbLCtdRpAKZKhBVUFzGzxFneuYGPWtVAsHXJHpshPyexHrAc6SvtCFxCx7DfPqmFHsVFxHMTmS",
  "key2": "Ts3aUzstQprHRzQZuV7Z7yvTcmvvdCdZQZHEfeFQ54grFk3jYXaeweXTtcAr2rQjXAqSbCKhmYXmtGbQL1szmcY",
  "key3": "2ZuZjgSUNfihYWgF5JJZ96Y9VtXPtNk8chTGJt6E7rujYuR1CRwDpXPeWyJzTWJdki3LcaW8RLeqzLcLuzSkFq3v",
  "key4": "2hT4PrV8W3djW2wX3cXe58Ctg6VVfZkgvt9ZRPCNAyqnRvYUMPEWdM1hLXEDLnoxEMqy9AWzv1hzBGeb5LXFrwD8",
  "key5": "5Hw3a37C8mv6tJPEbCW4Ly9UZKPiav8yG7U5eMQoZXwZ9rM8BiGv4LJNm6L8amg8696jXTCRnYCHnUvJzsLh8Wcv",
  "key6": "438fsX3nwzk9bdNoQo7xpF1tSQW4MgWcVuWRZf9eBmF8wLANVAtdFDeckijJ8to7vUxDK17AcJMqmUSXgLGSmM8P",
  "key7": "ysS3KYe7rZpd1cEVHit1GBNh21a7TvwsG7F798PJWLs19rjT3JP7ZeeMs5HRe5FXmHPeyeB1T8zdWUEPS14SVwy",
  "key8": "3SKzbQSspaL2VH9SPxhrpFFbTY1U8Ddz4ADN7pHYADxCd1bYuQxMWcf2o3Z7xNSBxpCRZSmHz6QBhTs22aibkCtS",
  "key9": "2F8ifRkAGDZCXCT2f3SRfNmmUhM8ReLoapc5vASQ3Xt7SKpyWvRSQZHSziFRzTq5CFiD8tHatGiNspaYb8hoy8yK",
  "key10": "2wii151fX6Q42cDFWRC7kBuoECYUck34WJ8ttS1cEUUM4ofwbgSqjtX6BDkYECUiZKxGrAZyBfMgDoiBxqGeLaiH",
  "key11": "3RuD9XazysGC8rjyi3JYG7avDRiph419E8vdha4zZVmAT1PRMxoFvzfZeLKJ6PLyNTCm5uF7bGP3PmCevBRCTTeV",
  "key12": "2jJx8FS3nvkLbDwMq6mtW4niUij6NMriqecqPtEafSDhfKXLQEoH5pMSnFQNpNefnmr1EsjZHks7qHqJf7EQnr1U",
  "key13": "5DWZYrtRh4SM3TAyWorwRgD1U3mUdyP1eR57Tyc76reiZp28duMunANgsbc1Q8k2QGX4R2azMGzrhXjTHVurWsL2",
  "key14": "65KVzHKPM1b8Bgh6SBr1F5vABR6yksDQ3fRgc3pMFNJKhfqjSMVuoK9vd1vBTjEchPRqXpxSjDS6s5ZPMHN5HUF3",
  "key15": "53bsPrUJwwELQWQP97qm4L6jCQdBEEsi4DvpJZ3FEhPyxo4a2JPR45M6WZqabcpJHzEfHkhH1DphMYWm82QWXffU",
  "key16": "57HWxHsYh4PePgU8TQc2xrpsBS3yFA9k9hhYBsPiCbf3ZMTW372wGkG3ngibtnoCPsJZcC1iybrNUM9hmYFVNuwN",
  "key17": "3zGE4WMBfCDtD8bjcXihZP8je9yTCNXBc3Y4uyeXnc2m7Et4nUS555PcEbwR9MF3fdSV4jpxN8HWynuhuH99aFux",
  "key18": "45DTMVmznP1SLiesDu9H7GdXeE79cT8GvQgZkDb79d7m7JwYNJ5R7uS4mSQGADZMZCyecwRtKgXP7sRWs3gaK4MB",
  "key19": "5JQb1MvWfQ3hnTEmgd75mZkq24iw3EmW7s8VZcfZBTfp6MgkLPrAbywKpyJrA6YY8DckwZwFLyxjMoYXpWSH75v",
  "key20": "4cTi4vSrQiiqrPD24n42CrTthh2UqCAoonhPX2CJzm8UNuALmSGkahxwp1AP5rr2PkFvcBJHFyB1Jp15ysVLFHny",
  "key21": "64JApRzK3gaXw4cwq1Y1UrgnLeg7JC1AxdQ8NWGVm71MArLA63EpAbU3t4xtAWp2FQNhmPXtVFQ2jxc1mmEfcNnz",
  "key22": "28WvSMRqR8fm9bxchBizeWCWnQkd3PE5LstT335yRmdajBAApQkTGz5A4aksRLNe9qZhh3J8T1w1zxfE9ves5m4X",
  "key23": "xf6MYjiUo1Pb6UN9XLuCJJUyMHfTBS2JH4cDmckqnc3sz6QkdqMT8e7WaErRWYf27i6ZCj8yphX4ZDPa86zuBiY",
  "key24": "34f8c18HpZb1WnmXoqYPR9jGX5mqCRujbaxgr9UXWdnGMGwkXFp2Nn1ShceLjEmy1EmF6FKUQD5feAxZAn7g5Zw8",
  "key25": "41eJHaAf8wz8onDUiz1tKdhPQ6HB3fZtdJzRTYwssZrm736FLJEJuvvxD9jkxwJP8BZ6KHMJ1k8mPXGGa2Q4N3Cw",
  "key26": "2UfwsXiti9GbiiRiRsr5MEaxhvoRRvtHzczDQhNa9KxADdtsQyqQ4FyaBhL23dZDkQ58zBV2Xh1BPLp24TsczKwZ",
  "key27": "4vH7U5tV3B24qf2vxogJCE2o2PuEuV6HucvC79WBs17PX1L9w3zZUZwR65FW7G9CeB9bpEWEJT2VrDPWf9XoeAdt",
  "key28": "4uK4y16cTKapGXe46bXQRR6UuccDtJFs4CsoZT9VmZGCM5sSPXdA8LfgXFMCWCzuFDczdxx2Ye4pn3UswB8PrsKe",
  "key29": "3bPS6bo5r9Qr84LwkXd8tWtmeQUcZmMZJVUFxNvP5PaszAtrd26Eyc6r7yCwxVPaGu6YwwNeDNZ47CtR7L8sTnbZ",
  "key30": "4Eh5VHGCBTRCwXRaNwsiMuGG1L5kjaCySn9ySQxVWKfTZEzk4Pi1RxEMwWyWoA6QdFA8URbDaXpuLNbr43DX5ikf",
  "key31": "4zb4nLGjfNnUTXajp62vHsWUyw4tG5iL3DK2KNz4vxn68bfTm3Df5c4GMdvF38nK2ug3gPvSPkqpNLCgfexytVsy",
  "key32": "2rvk4sAcYDXQ6Kb3R5kUP8cCeDAeu8MbfkCZRLEUj1tjNkLK1Uq3NGwuYxFrHXta171ffBEbUiGYZqfqCLdkqNUL",
  "key33": "NXFn2PH48cGT8Yf8jgxdkvLJviByMSVH7wMWZzpgJYNeiXHere1oSgYftmgJCBmk4z3MVnQoMPJUkD4R82X5J8c",
  "key34": "3zKoHzBtBbt2XYMTWa767h1sm1ZsazviwYvkyvtTLkuQnQLaTDik8TY34aUyLiNWXLpvHsdpESMf1AoYzLS7N8Nq",
  "key35": "2nXQFLJaNnHBrzouf3svwARntNiD6p7hVj5GjXpRgoHohzz8UdiDshh4uajSvKRFgrPCSiiSQM5NXTo33UhBb8UP",
  "key36": "3b6WeHdQMPx78Tr4rTfnL7Mraq8SWCzViCAKaHGCDmWovFV2HDNzCk5VV4m3mYBemm5khHhQbZ6qyV1s9updJq4M",
  "key37": "37GPT9E9AG2i6DMAo3ih1fR4ZhTrqmmWD6JUKQj4TgWihbFqhYiK6whG9rm5nzXzkWEYVk9wFq2XeDNmXyGTzD8y",
  "key38": "3PRNgbM9ivM6fHFPQLZWd5XfaUwxPCHrAgbcVeKnJYZuHMMrtzShYT9BxjX7kDqbsovESyvkAWaFBLiw4eGDFgev",
  "key39": "45BncGq3YUJRutyf1KfcdKkEKwF1C4UMRr2tDb4oi53XpndLNyLs5uE14NfM8JZTaMa77bzStPT7QvX12fMWyyaa",
  "key40": "8z2SsVJxpSR8R7K6x38es7ay1ZRv1FEPQjNtFXSRULMYq1T32f4dbvnmffe7a2cFAVgZz6mwFE5sBW3tLeumD1w",
  "key41": "2B4iumXXxMQrwY7Eeofry7NojheL3W93Ux6Tiy7QWNiLeaKB6mzHGZng9PdFKx2M4BvnGwrE3xGuNKsA8EsnmfE"
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
