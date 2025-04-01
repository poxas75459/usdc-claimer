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
    "5GTsenMAWst5REW3TdQMiFGXNjnvsR7XkMg5UBR7S78nXkT6RwDeATUjKrF2hp5V93pVriP57km9fVJKiHBjkizA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55tJ1FPLZyrZQTG2Bex8MwQCAUSZiTfx6qWS8rttCHs9a9SrGhbikUMLBsNRVvfoCdH6ZYxMcu8SL6ap4yp6pHaU",
  "key1": "5L7aJnYH4Fnmm9bkC6ZHYyTfasgH7HX3L1LvmAiMb28HEwb6ixtP342RjvwXrsAQcmePUHx1XfjukrCxixmv134L",
  "key2": "MDA2oH7yZCZHQnKNpMMpTrw99Hrwx9oK2wcbK62NNbUwkF7JU9nZi9inVMpMuuxoCAZJo5fkZXze3azSeQVpTSB",
  "key3": "59F3YuAby5bivJKh775PMRzpkVbg2FaxvoXEY8emaNVrXNY6graTTQpJGPToWoHEG3AnTYyzEC6LUVfyxDprTTUr",
  "key4": "4WuziqjG4NVCAajvJ5GacrMYS3bKXfh2Ht4K9BGbEUqeiYk7hhpJBmTxcktyDNSktuPqYWM399XtJGyQKkX8h1o7",
  "key5": "VJyaFS9kiSWmK3XnxzX3FHStjb4bTpUhP3B4BMdsRgHyjRqqn88xSc8HBZTNgpRuojCRy43xdZpfZrkJwwhJpwg",
  "key6": "41CtzFAFDAU2A4GaCiafmUTBSx5MPGi1XFcdJb2HRApdnPYULRSo4qyRjhkzBu1JzQNCqQSyV5Z1tbyZTtaMccpW",
  "key7": "4hU4HpK2dKWD8C45khXy1umJJc5YTjwQKSwf5CUPnUkFWsDJcDGrsgJTe8JgTZjvtLJ1vQ8o4X1N6RZNAEi1DfXx",
  "key8": "3BL2o61cW9grq845rESMiYREspirUxyxpRA7wRUVhfZPNoWaC2eezfms2XRUbWKMMYWr4MShJ2Rg71GVHL6BYwj",
  "key9": "2teEC12Bz2CbjhGmAfaPvKAfqSenMEdgmGm4TkYotnSqHcsU9SbmM2ssGdvtGVWRhaktF1TRudPCD7CfxTWJzJmK",
  "key10": "3TunBguQ8h4kwiaEV81CaUUe9cd64FbZPTPYjQbsjh64Gw3opLjdCAetrECtpLuwBbFEbsriTYxCbGzXSMQia6U8",
  "key11": "4qscASBCCVLjjnAb4XAYc4echPGZR1TvjvsaDPaiXzGzReP8yrJ6LDDKGu7y3ZBNyy87BFp7GyUeiDUCE2UiwHin",
  "key12": "UmL3JFfYGyj9SXYAoN7e4WZsiN8TA3Y94aXVATaYpb8Meh8qMJ6WfLuqxTMVcB32RhF9pwUSYKS8MrsWw7RpAFi",
  "key13": "fa1Z3B316GuyifUGFYPxiLqXqv8bNPHKKRFaZN6HgM7LyetVfFGSVJYj8DhdiXJ2yaRhXjBXmoYrWVxpapKUEWD",
  "key14": "Ht1KGdEPoagKiPD7oRD6DeNzccmePaEV7fFb8CVYZ6xrVeuYxcY96GHHskepe4z75HFaBEXXzKBBuDQKwhLEPem",
  "key15": "4ZPULRAqLDnvkYCeaecZXcUAE9AU1BVpHjPUKV1SXdbSm6zFJJPnZpYFVKkB8W1vd9ENL8q5h9yDsvxXKJHTEU5t",
  "key16": "Wz6uAFw6FLhwn2pyuB6nH19YB674gDPZDpeokuKxtYrW7ZCn4e89eGHTMnEW3dHMJL6mKZ1s1wV6Cy5wSEMqW3W",
  "key17": "2KPp6shYjcQW9oZJ9Yk3rvkN1yK5mSi93Nj4B5sHsA9vYFwYMxFH5D7JsoeqHLY36xh3LPAfGbhoR6PtQVv1casw",
  "key18": "3WVpkS15DQ1Zxa14SkBWeqQubwwvEJbnbq2CYxpYAqKKhQ6x7ZtvkgRmc7KVEVHXWUAfszFjAVqaibBcpnN6Nh9j",
  "key19": "394fnSLkrShChKoLxmpyFtbPSvst9DumHh8GADcFsa6GYDUM181fetTZGueFm1uvygLSBMWxUjMKcH2QAdYv4DKf",
  "key20": "5FiD7FKXSVkn1dT5KhRtPxVFyFJK9wNBkb8ZBEAiQ2weqAeXWLGY9kMyBcayHXEGtuQafnrGB2QajEtonq5Gujwv",
  "key21": "2jwktehjHCqE49XUyigMf7MaB8FePWQpjhpj12kUvuA18bh1Bcyca39ZL3imiJ7gqbxGrBjP7dS8iBoiV6GY3TeQ",
  "key22": "3XHKzMpRqhM99MQRr7ckaEAjg89P5ELfaNHt2MiEsG3SvSwTuCX88CDX9wqXhvKeAkrzetTEidgA34tDxCyLMhos",
  "key23": "5cn8d6jxphSjrkumvn9nFPvcZGP4zr67mWSsLECgboCNx5Pu7ebVdFy2kzuJnHSRSQbh7PCzcD8wEaJEUDxp1weH",
  "key24": "3Ln6nLHkuAckQh3PfhzRZssXsP2XCKXShTMB8abVi4446BvEvoq4xTTYDZDVPw2ApXZDeYZV41RhnH6QigVU72gv",
  "key25": "621q95e6VKKiD7WEy75VNvsX8ENmMhHGNejjrrVdv2m1XBJYhS3End7mK6KPXDz94hCUyZPJGDPcDKJQdNhCo49W",
  "key26": "zCibdi2uAF9qve9k4FQ3MV1uhw8uRmYMbafVDLMh2mF1FkSdJzDAKJVTP6ajW8LrF6C68EF8aJSQh1soaeC5cPt",
  "key27": "65zBsSJDwDBVJ3ERkcC7dKjUPzrgAXqcASXEZFod7EtQXzBgFojzNzs75eJFSKAEocFyvydhvMTqBCaCGyj5oBmd",
  "key28": "bg8AskLrvp4QyZNACbKSZEp7gRbcfhcwtQurLzcGBZVSsxPMH4BJCjy2dib2hJpFudBmL4KrxqWdLYUmKK2uPiJ",
  "key29": "34HTBuRNWyg6w4ZLxfm1nnTxGf7Tz6zgFZnHSYRRhpUcDdYfxpguHQvasrBLZU8L6MXkCVTXW6hcA68yg4y9hQzL",
  "key30": "6mUhYAx3vfziTjWCvHCuX2AL9yDa24dcSHPZefxWSDqkWy4pkYdsPPRNh5aooPhz6Mpm2P5U8Bp6jXaB6T483uK",
  "key31": "44TQrfbiSEHj5JzxhpGCCNNxRqbvom9376Sx3M8aQ4vda1mrRGtABVHbKJPDBx6g75zxMThoNs4sovUkkFCnHsSN",
  "key32": "2Q6Dnwy1qEK5FK2F9dh4aiaTgro9MEm1QS3SvAwmBCwCmHiEEp4AWprwh8rZrWDEdP4UZkv6vDN1VvRCc8umVSGh",
  "key33": "2pWurTi2qbwS8s8QchoqaTN8HqyZetpP8A6YmwTARXRaXSog6ehzxxd8zudAnNzg5sPLBzbDmhvpMZeFLxLHu1Hz",
  "key34": "5dMxfroeuFqZvbsAbpTFj76fzXewBh2tAESpBkiJdF1Z6W5bQZLfUPRTWGsCcQRd1aS5Jv3m4h2pbaSWMAuUeH2F",
  "key35": "2LK8Txy9MqwCWAQndKqt1XkrqhjPjdc6QARyY8aKwu5RDm6axtc6PD5eB3NTinNF3mEDnxWb4JKBznWc6v8tn2bL",
  "key36": "3RFuXX1Qmh9TpXoo7nLDTegSwfLdbWJaXBfe4FtEGNvU8hVriVdaYUJo6Q6R9Zbq3ujQZEAb31dZF5BSCJqiuMfK",
  "key37": "4jfPyLQJAKhKCqWmqscBy4UAZ9ntrfksEQaWQGBbq2h1hQC6MiYaXsWbQHt6FKZeSPviLKWNnugXWtdHxarAkbJo",
  "key38": "36zuPT69UbwkPU1pTwkENQyW8QieLfRNY2zyXwYH3LEDVSL4GGGSiz9fQcVtUfwv4MHQjznEScfx6jSJ44x4vDuL",
  "key39": "59vCugVjjJSkWB7bfCZ3syN6pCkHH11j3erE2BtzLeiJr4zt2P9bCjTmgLPVzqcdc8xNah3JB5Wsq8YKtEVykm1Q",
  "key40": "5ZK9TxzRuoqouYDMTYzpYzwvvEW6v4mbqJAFRFhti7RYEXRptCaVdgfNRz3WzXXSwJmef4EiunsidSKDFjCFfNoX",
  "key41": "5vgNyg51SiEZs7SNhn4jzu7t9yQrvLHDPSeLUhr42bMmdnM7HBKjpMy9sVJBJoMC5voYN88Di27twX3qCCUR4Kdp",
  "key42": "4rTmE4wh9ZaMKgVXFcEpZmFwE7LkqL23b7m6mVgc1xrCoonKDkCS5ckdj5wWiV531bLVydZyzxJrEyPm34Vk9a4v",
  "key43": "5pAYeyBL29EVjkfHv86o8iF8hfsqL6NqrKsLFGMc83mDHVc1spGmq3PCpAfsGbtB8zSdyJzsVAFg5gzA4LmUTEGL",
  "key44": "5y8fpJMFFYUuJ3paSrSimgWF8b5byFYonG9bFN8BUiqeiMKbSmDA3P3atpGVhiTUuVicDu6kjGkQSrtRiE8da78E",
  "key45": "pAucLdwbxUVJTTLJoAEYrV7AdTaTXpusdw219m1XStfimxbxB1cfW7EJS7MGiYrW82d9vcsLgJkzTxZwkXs5Eme",
  "key46": "3urhUfFZW737VSkT1KdxKQtTf6mfNheb8mfkp6rg2HyTdxSY9hcnuxUE2hoJT3ShmKHnnbZfReh3kKJvExRPejN2"
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
