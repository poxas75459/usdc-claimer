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
    "4pKRTA3twC1HF4T4KQwJgT77qypAdVM3S5GSFo1LKNTi2cr5gxCdSK9DGDcNfFGX5P4zM3BZoDom6ouPMSzCYTRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51AjXBWKn29vouYSABQUsCxxLrD3GPUowtEcpnkYKpJB2gj8BZWqqohd3btUtFCH4bxE6Kj2mxNxEqCffsFNagDu",
  "key1": "39sBLbsNBpKWs9FSEZMfrsoGcmek5GXYHiYrNfcw9sDtQotsoj9PTXhTWpRuTqdSPJAJto5N2xFbWMA5J15LDa92",
  "key2": "5QLLondJcC5AQ6sBCMAK7P2VFe95i6WtAXFenqBVvijB7hBpW47zxQdaafoSt8dmH1tvTZgX3NQ5AGfaEymw5veV",
  "key3": "4J7UwrJ6zXFmTrnWV6tPWbuqjNXaSbh5zu7DxKbQSkzQGDu7r5fAjsBRydEbGkPeEJKJzNhFUg29xaPcMvKqaTry",
  "key4": "67ThyEM4URTzXx4Q6cGdzDg8yFBmz82H3VS6vH5t3Ba7HEi7p6vETkrxxDsrWYvxWvMQ7sTkdobuHPSQwUMJXaQL",
  "key5": "6kzQEvprJSomdbPqsG4qBLA43RZzrF1gYwbFjWSrdMt8LSpjTPxYzmLQPUE8j7acUdCjz4uyeoi6vf3EEHYBZFB",
  "key6": "5ErTCuzsF1G7jd9FokE1AtqfKQK5EyQaGjCeMZyZjYUgi2CuMb4VDmaCBS3Xe7JvTdRXZQKPkaqsZ2ZLLUcmp5sk",
  "key7": "3fHBkhLVvwBXkPSTxybt1vonppcxHgrFCYTs718ySsBMFGoH9TMdGNnrijLhh4BWtiegQzFRwDBo8AaSpZZVyBen",
  "key8": "2Csvrergyw6VxwNmhTMWivag5h6LG3Z49pkTPfFDLUdHmcfNu2o2cTdQyGyU2Uz6EZC3ykydX4RXRJUixzA5nX51",
  "key9": "4tYPbssnjKskebJErhPotSVHyPN7kZ6W4ab7SSTCXo3x3LkPhDV8X6DP6F7mSeDij5MHMJ3KppyGFMaAM5CEKKA1",
  "key10": "5k3YcFqdoaVGvoB3sBQ2p4TFUBzaNbKvbq3orWn8kpWpqUgqVG8zznzKPudpoqRzsKJWQG3V9L2yZzrJrufuSGPx",
  "key11": "668sigMBQFBQ728GLTRcRU29stkR39ucFKAxk3tJiwN1huiU4xGaBBa5sQoe1G43VWv8d12djYo5hbkXS4ACi9w2",
  "key12": "3i691UEyXYvrKHnhaNN4EqGNj8XExtNKsPuG9KRkurebdGhSDmEqNiSx7DiLGdKaMxiERRZWDnF7KiWz2Tr5f1U2",
  "key13": "59VWo6zRHKp61mXaoMAuNyW9hcTB1VHxNV55hVcSq4E86DNDNVZJ8Po6gsb65VCnSTdQuyhbCqZvbvziiBU85GRe",
  "key14": "2qLH3NJ6rze4TyY1Uv1V5BN3bk1NLdDVP6rtuqNjNk571UQREseQyHMr6fHK2c6JLeZpfkJ5raNFEXM8jSPvwDhJ",
  "key15": "5pVzosuTG2MjUc3mvFSRXmyxYcZN76MM2UxEXRzkELdTrdNJAng7YPrbLfZQNN4FJ5hShtfY9onV1jjheb56fPgs",
  "key16": "3xx59ewq2NEaoKvF23726zWs1E6gMnxFJ9Mjxy125i9cYwjwkWJm4a3LiZkui1wCNLE2H3it4fZqm5MB77kec4V3",
  "key17": "4M4sSAko8JMPTucG6KWRJdyC7gBSwQoghFsqzfRVEwsMmR3cEAUpmMYF6iCSFBYN61foQMo2sRT3hGfW9u7AFagh",
  "key18": "2oh6Kz6Exr8HPgLWRrE8oDom8CcUyTu9Tjaq5V8RbNjv6tJmTA5p91B1Bhr2ycQZSi1RqgmDR1dL7iWXcsSZLxjW",
  "key19": "2L59ZW9jebLQCzxfZfEwXyAtBa1DCASBUa2fvqsQ3ZvLU1VjMqvR7Ve75iNeMLPNetdLxs2S4fMsyHFWyXvdkWqC",
  "key20": "2y1PkZtBxMpD7iQjHr6wcdwjBVsjarmSfp5KqzLCfxcuHX5GHsFZ32SS5yhvMQGSuYe8FFFgJBXzC55cv9RFPuTJ",
  "key21": "36Xpb52qwVeEyzFCiUavpkPkxar8ywrZq15jaorREbJfxGNgHojz8coywdVQ3Mwtz21quDZLAs2KSZFrD9eiBDAH",
  "key22": "5uCy69uwsVKA7K8vVMosGVBHg5D3ugAsy9dD3EyTL2aX2denvBd7Ed2HUPbNdxmzhNbDcyjb8ZdXCX8QBmCVX4vg",
  "key23": "5W2FG1BBS7fZQKZcmwfYsoRE4DMhZUEdvSj4kv4o13tXboQkJuq9Lu8yr7VXj7Duz8TpxbDcUSkW1bZRYfmmgNGw",
  "key24": "43GUswS7sttMHEfsTVb1a8WDQrLb3PjFTtKd4hkpzyyERuKvtUvJJEzq7DmJu7eP2osPUAKMLNSHGy6jzY9R3fnZ",
  "key25": "2vQ14QhTd8BLUGkbeMhRg9b5QJkR5TBXvD9ayVsbeUZvHo8yM35mTZfyk2xh8qyuCgVBQ9i6YFWgiYL6KjQvbMjh",
  "key26": "3LhriVATfBdZwbtoaJ7nhwjcZ21o58M95L5ydAjMWBRLTMj3KmZbvLqExAyJ9RosSMYwse1wmW2SfrhkTT9W5EKn",
  "key27": "KYHidGcuUJqqQwk4Upe7F2CXMkjriJ1rZukmwLiPWQgqFJ1CePZ2Y8aek9Esq8YQSER7ymZnFcfF5ssy9hLTa3n",
  "key28": "4EwvbyLTbp5e4QhRCSFYnrF8rY2qnfJnWBxphEiAL2Lu7DiNuViuCEqiT3KDhki5oTGEXn1WHHbF2kDPfMVJ3acf",
  "key29": "5AAH21fxBxq3s7X2Lcty6FhBsgZ5fW5T2p9yxPndZy2VJDZ1t2YKtqJ3XEsZtoFi9YFuKiLjkDVCBTSp63FRXyDL",
  "key30": "4F6XeX1wvMECBrQe5558XCL3kyGm8NEFzntBUK2jWvCXtu5CbYa7d58k6L5hVyD6EktS9VD44tScw79LbkDA4oMJ",
  "key31": "2ei7aXggxZqiPSc7g7wNkYmj6jeSQ2rmkttBJJwJmgp73vbSJenc1UYoA9QEo6cdmXM6Ez6yiJoftutepoiiwxct",
  "key32": "3KgJv3UTpoyfeT3xTxYkBSfQdT9Gkze25qRXAi44zCrRjiL4ZwkQdarf4m9aQLizD8LVFpHqpHYoHmgjCnXeCBRt",
  "key33": "7vExqT4dr9Z5ED8kBsTMBVc2Qf6qQgEsrTafLnFMEYEB69jALYinxpXTCR3AFyKJSJ9578pQ5Tn4KmoTrfLG2PN",
  "key34": "2FQ8v3dfBgHB8qBVDRG7CUphHLb7d93whzUJzAYZRToF1wbgBhgVDQYZSM3FyYA1D4gNKDJTUJSd2FbCnZTeqvaX",
  "key35": "44DNoXVnSGsYxV9R5WidcUJRWpajbXTDy7r6Vvd1eW3qLQxRmLgvN3TTccmQCsDP83PscMpG33ek1MpFJhSPfCCt",
  "key36": "4VaArwgika9wkDXjRiyPGZAZraJdkjAsRyxcJkHCMnzAonPw1ZPd1bgve8iciAtAvgEc4XWKdcCJoRJwRpKb1Lac",
  "key37": "4coUayNMuCRVALPynqFEaPStsxPisHrp4P33cHzTpU14DHbWGPLZJD6sJPg6MvEzrX5ozg3JWUuTJnRwcCojnugE",
  "key38": "4xNLPLo2PUahogcsWKwvxxswd9Rzxv1bYpxQvY9VrSbm6jEYLrGidKoxiCXPMJeJUxSwMgtdqVA8rbKiq8ptbzgL",
  "key39": "2ZkhQwRqxqaHqizyhH4rFHz2DHwem5kxBZUN7fYd6Tr5Zz8MCkJXNbiJKSYKGyd3x4WotSR29dKFxEpHFr9z7GzY",
  "key40": "3vHo6hsNsGhHTTL2tbKc5kzKvwCuAFsA2QKD28EN1B5BnU8gLH3pHsRNtFdsrpEBnWm5qxQazgbV1vQqBoQqxv4s",
  "key41": "4U9iaXkitf53ytnkvCGBbQ6WtJsBE2FKKEdJP5zWDKEko6qHqtDTHYQds8AFyJa5xmBZj1gHijP8Xq86RSvSS2CP",
  "key42": "5HhDzrS1pgMuywsxeeAuobuNmoLzhJRpym96tf6A4ZmbvA5yESpY1baE8Vfk9LvCWUUixAjbc5r6XVSAGeTLHeJi",
  "key43": "HTpzNFsn5cKFBTcfXWCT4fggZvzT54HcktL7fwymTPAo5mmAbiX3QdxdrZyoE4zSSqupTmqsV38xRbsSkQ2j6XV",
  "key44": "2xUd1fHzqGKVfZSaBYMMt1wGJb7Foa5n9EcfQi4zPZtAwDjBafNUwAW64Bba5Y9QZA2jG4WCeaQKsnFtrbP6fgvx",
  "key45": "5rSXXvhDvhND8DcDdrBYYbpnY41E31G97Jq8p9Q4gJcyiY65153mLqUBkbe1GsTferobhgteg34WGqZZNSMvRWSA",
  "key46": "bEXUpXgDczhJT4BGyCNz3tmmB6gVKQd6j7eeeERJfFKDKF41mkY6ansNgxthM6b98DMnc3s498SEWktjrqTFcpJ",
  "key47": "555aidqBYysEgzoBMtooYNReWhT7HWubXAn6SZGQDZxej8ozqLnLXLo7myXYpXiajmgqr8ELdcsicdJhEEicgVz6"
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
