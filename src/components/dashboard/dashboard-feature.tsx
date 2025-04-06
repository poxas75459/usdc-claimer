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
    "64Yz9nFyz2Ppo3ku99wE9UAMkvXi67jt1NaYLDsL5gpdDquVR5CZAFKkzYwV3aJCFNewkaV3uwtA5uG944URzqwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YDQp68zRvq4cif9ZSq1aGNYFKZzbZKKm5gVhdcVdeowX72JAKVCU5uHhefXWughippLiKFJsEXaWNk6p8D16ngz",
  "key1": "5Mozge38C96BKN3Jk1KVqybs3iJkGzC45SMpzAEjvd5XGuqZyK2TT7txmFJMDgTyAaaSqohV2ZdX5AAiKVa4aCDU",
  "key2": "55gsSSW1E4cXYVCVziFhdPs8atkqmPu29a6XRcxPGV1AchopfjosXtAzFNpTBXZ1Za73wGr85PqUGgnAZRnN3PYA",
  "key3": "4SpE8NhBJMTyTsgXSfs37WdY8wQaoLLsjV7DUn1ipj93mDcjvWEfyGyCrNfUednwuUjFvA1CY4ZDB4TFDrvas1Gp",
  "key4": "3Wz5JEKbiRbrdKr74otHA8AgLcw8tcfnKooGC6HS2HJCydKG867ce2wwQGDbLVUjAnqx9fzJBwA2fkqh6RET6CMb",
  "key5": "3UtU9QnRiA6F7ZQGuhzfHv3UaRS1SEv43FmoVKp6QY6FeaVVe4k9Wi23g341gAxPyL69HAF1eAhv2hZZtrCMzgbi",
  "key6": "5cWiDPBAcKLanFWL2JaxcrMv85DvcyMwmcNUKxczDyGYkVa56HsQ3Njs8fx81oSS8XFF8Tdo4MTCyLuKnwLWYQPV",
  "key7": "2HZ3Nw22admLSBkGS5rR1ciMATRionJZ9wZSAmyZd4SSbQiMxQL7PNsRWH81DCnSfW5YHQBQAcpB7NUs5EqQ8t4x",
  "key8": "2zsGJPdQUyDN8tPK2yz2jua6GBN6kqcywnh13jfLB6Z4MNiVmNgvxaUq3bHXnetuPFJRp7rfyR1yCWmNPf95LAtW",
  "key9": "35GSLoWNKtzJQoTXhChF3CVr6Rj5i4waQV4mG919xy2PHSCZ3GsbTS5GMFpzs2mkkxsG2MBrrPeni8nrdsmLn8Ss",
  "key10": "5Po5uf1MymqvABoKUtgHKfoBE4w8YAh3Wx1xck6kRnM6vgEoA17kM1an3WzhcYc6Ym6LnQ9d4MkC54oEf2UVJsBi",
  "key11": "jYSPuZYwaSBg14w5qhVeQD95SNrtuz9kbp6iyacKxV17gBHmSNbW6tzoptnh4Xcbu1psnxH8tLYj4RgFizVq6cR",
  "key12": "4Aqg7eN3AUxPz3YgAXsk27XTR8wLSyxYsMcKd7K6R4P5hc8uKZ1aEphbb3cCdFjE2ECgaMoT4NM48AGMvqAzxr6w",
  "key13": "4ncYh3bjXRvEz2Zr2mAddhv7ne198BuEDZAQRKmw567mHR2ZrfZYq7MkqjEZ7crYZbY3MRoSLRZ621JmqD8QQFim",
  "key14": "5hwVqDCAsFqrEFrXhGFBFcB5nBtJ4rAyQiDr4Rs22kM8nLjTJFPWXAxfxAriAbqbTmjY1scxv4bWkd7X7BHHe3gv",
  "key15": "MaP8TfWMpAGviyfJuU14EhinZgLsc6byDbwa6zTxB8HkZJLqzqZuytXw8u6TxB7ySLZp64nKSZArF2FmU7E4H3u",
  "key16": "4pyEs1acSdMw3VSduFChDg6jo66x9aRQyFhYdQDK5ATGdm76WR6oR1byifvCUcaakubPkKyxh4xQ15uWWHrFxXyn",
  "key17": "4NQJ7cqQ53ScmuehwdXjcxT1mMnTJUr5NZN889sZGztQ5wCbESR8VVvzP8A8YvnFkacGRQKQ3EdoZvfMMdLP4Lih",
  "key18": "3wqNyQmuo9KRmXgV4eaeDMRwYxBx2M2cuXcGiRCm9LXCAyJpH4qxGjxCzkwcYuBZeX9cNfSucCY7HeLGWMHGhZFU",
  "key19": "5pLsEVr7PaHinX1GbwZdFYb2r9Jmw9Z3UR6BFKpnAEmcmb8gnXBfnaRvPtF2fDMM4jas7vJuGAaRyjVsobuni4LW",
  "key20": "48zbrjvep753ts7U4awkrBA1B9CbUwgvNdubx1BWW9fYbWWfM2euk3BNLo1HeToGAzPNgptFnHnbiQUBr38FqyjX",
  "key21": "2LkQKPh3DxqHGH8WuV1v6jTx9C21rnu33KCFP1L6iLjs8fe3tGgDJtTmnkiE8NASAkCdBn2o8MLp2f8Z82DihFDx",
  "key22": "33Jgaz1e2ZSqfoMaC5s7YEAY3F7L27ZeqZeudmtNecUH23v6NYyCexXqavtqpzfp1dFfGo9WbYGLKAMNkguit8pd",
  "key23": "4JT9hJauq2P9yhwETW24DyQFWD8Sw1HTfXtdGfbj9ukzHD2Zu2X79WAY9EhtEcjELJYuT1qwzMgEaAEQBvyw5bar",
  "key24": "43RmNodNBVBib7YWy9vhM4bR2VqCxgHi68gKPKwa8BWAdCYSzmkFqFQ4t9p5WSVxMcLayBKbJ7JKr19X3mfEtAQC",
  "key25": "Zevebope7xRZmFBTRKSoqRLJFYoU791G2vykf2U3Zw2gZYReKhmVCsEva7Ljmwx55whRuERmZuck73T9u4eEh1x",
  "key26": "4kDomJFPX8yN5yu1r2KmAeSWij74sJeY8ipQiyTqjbxyo3FihxSXC6U17QNzgue2YtXnRxQyps4RhaT4wHLtE79p",
  "key27": "3cbf46z8YwzVtmodm38XAB4o46xK31niFh4KhTCicwqz6QBgsas9YN6tKumKABxMQqV1rJ96gpzBu6mu5hWZiQuT",
  "key28": "4QJKpCcAtLiR8YtAHTbLHhUu417ZfvLWoCsUpe89AgPxKDd3iT3SevzSFovWCQ8viMGzZCKhjVCssMP6YRQVEVtn",
  "key29": "5MBD82e4hJvkZWDJCG1YrPyLBS9XpCZrg15g2KmVuMgM6BkdJ5jtytZVFdJC9a6fjMknTnQz7DPaxJcRBveyHqYE",
  "key30": "28TvSFnrS1NVbsNTvDHBvW8MVv7iH1KLuBaP79LmNAThq2fip5s98qtfHgkRWR3CWx5BkmGkrx7mUuC1Vfhu3anU",
  "key31": "2WNcXdzzbqfrk3aFZLaPxw2rRXhiJkpPg7wz8uaTE7Q2rRL3wkJmr9moQoFqHQdFBZMwtTqGgxvvBHhJwCfZztd9",
  "key32": "2Ch2YLnTRNQLGvjTMZJsjCi4jb2GdYEMZWRnBvZzu25okpCrqiQW8qWBfJFLGXZ1xGUfXbEL8EAEriuj8idcym9p",
  "key33": "2vxZrqiyqfT1ThU9F7bFG9G8jFugjiYMpMD7uv9jbsqKXXuFBxCZSix5XZhbTBuhFKFCTYQo7LDUXZgfbR8Q8z4g",
  "key34": "2TEqKETAGRKy1pqEgcVZRc8be6fhisCedKxByCzxSxvnjhvaEFeQy2rrLoABrYaKCxAiPs6vQmCH3qFJN8wEv3nZ",
  "key35": "2vWaa7R8T4BthFGbEMoRC82ByegV4fWpUSFRyynDrHwktNnmWjY98b4LyiM1JRGuivewVMcJjncUyEaHyLbRm6dP",
  "key36": "5kWHdhSdakU1J87bQcMqYaGWLrCcmoXExZE3kwAQdYv9LLkkQM6p3n4wbx3qAP58ZCkG7Aa5r7oKiTRauxRca9A8",
  "key37": "3FyfptKWaGjCVLJjJ58vFCub9gPzFUdHRH869setmjDUXCXMVoY2y1x9k6ZjQ4aJhUaWJ3eEuA82hRBYzud3rLhf",
  "key38": "JzALT1YNtFmxKL5ukkSiZ4U1ZxLNcc2nFEKfTmXsEzKbuYMzvKfuzig8ft4mZmLuN9hochhLLHx5BjZyNH9P8zH",
  "key39": "53B2v8CgsNMhJWXsFumtnB2ybDRJ6GUk5Fr9SfkwiHxQxmsA4Lwsyz4a4ffGmicBh4zZD51FVKFQxQYDNTj8RKUC",
  "key40": "BL5UABpdn3HrqkiMxNHjvicLAUm1JidJBQ6jRSpeVioWq1x27mYnjn28F4CcZaG1QxHpAFfPbzn8Uu9JD9z2KJ9",
  "key41": "4qQu3f5arAfGLxzJFjePjkQFAwq5k4qvCqm4LUDKH4MSvkJNSyy9LTCiq9nKSFi8DgiMQ7JcjpbTqC6dxeCdeXeS",
  "key42": "2SrKCiH1EiDUUXsqLGYtogznWz7ikhbVC3NKuRNwczjAVVvZpimqRGGLWfQNF6xtZDUKKu4MNqLSPkXnxX8QpKEU",
  "key43": "3i3MHuN1tjxjt4cGzhE3a6hwdqJ4C5Apnn2XWeSQJwYnRGSuvTQitEWDLj43nFZboyCEJRiqpM1tpQdX3XGXG5R8",
  "key44": "5k21JmoP6iXwYewCNNZ1Cz67mMpwRQpSA4BP3LirMhkLmzrhEWdtA2DLMh2Px2xyDhSpdnPjvWkLkXJ3QhZddg7r",
  "key45": "4SY6YxwH5hH2mMFL7sgfs6zGcXxELFdzxP3ytRpAHK6YtLUhHhHHaHjsGKWHzKgDyfjpqrc6bQyLMMguQd9NEkXF",
  "key46": "3TkaC8HZ56zZHRqnDnbpvYkfMB1DyD2mmWYrJ62ieNv3Q1WjeiGtjtMTf8Urd9dzPDNy8755dGWL3Xdu7EKpE4qo",
  "key47": "2TW2ZWYvq971C5S3oz2ziX8hhUUtnTrkSPJH2TZSsLUZBEipDMa6SUwzRheuHzzhZbyWxWYKV9kHgCsn36gLhZEx",
  "key48": "4rbPThRb2ydjKW2raDWtm3qjRiikzaJJVfQBBjX9VnMc5zEQYU6GzdkVwXVviwvfcrnrkzryWsqUp6MNZBy4otaA",
  "key49": "5W21grXnNYTWiYjx6ciGRLRJVLKHrM49YkQUCjTDuPWDCWXr4hMC9EoURhwphPwfrEhztXRsc8AXb5o1DjwFzwAj"
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
