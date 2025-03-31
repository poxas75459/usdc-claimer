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
    "5KXS3Wy6MhFCBa6bFePDd6sV2edXCkF6BrEZ4cDvfPztBPUV9RQAnYtVQbJghwY35RPLekdWByG2yHW7rrMnGAP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yiyBS4L852Qk8oKvCh6hHveah2TgBXZEGJxdJAdMFh5RxVBMYUNtzBrw1zZ9TUJjtGjs89kkJmaJ6C8nstt7ZvE",
  "key1": "29yXcKDxdLjc7fHQh6MRJi3vFBMiHcxmU8wTzrm9V9qb9Tva7vN6Uq5rDnrMBwSdp2Q3pvVZh7b6Jz6MbEeZ62up",
  "key2": "52DJqdx7tzeT62eg7wgC1iHta7EEn4iJwt8xga9xhYQCn8CkTAxUo36QNXNqBoHWZarZhBMqDHip6944VJuRFvHy",
  "key3": "v34QLPncFw6oMEWhqdcv81edXGwrNNPGcYBEEtPQC1AwHtQuTod6bXqRyEcekZ5JpKt144Ep2ouuxS8xoWRpNJM",
  "key4": "jhReZByGR8LXNToDLAUjVewC8Nk9U4khZaFY4Fxru39ew3SK9vtjEMMB6TcxtcqCupRy84A8WFCDPKSy4XjF93p",
  "key5": "51pqCRaRBSLChuxPS9Y43DvQn2biqHAaRBR6oimqMKRAzg6n426oviy4KLBMmrDdNWUGouhEYG3m6Qik2doBeW6V",
  "key6": "5pAkoeUEczybFJ4Cxfkd9tveEWtuXa3opHF9ixpcubZSxMf7raQ2BRpoDpB27xhZWdJzS3a3qLHfJqs2Nih3uiHL",
  "key7": "33WBGqjnq1kxcwJYLWRbBGTw4bw8bjci4qbwNqCoes892r2CWrcXuvCvyQWAkeFwN44nu4xsyy9Q9yrL3qcf4qQ6",
  "key8": "4o8RfYu9vXXSBZQg2yGneqnUm71n8sae9KHZSXLZ9Bi3BtctZXBFQVd3o16tsY3ZQHDaY7K5LS8FPuVpAg5hkUgY",
  "key9": "5TKncayDNUJ8SbQmGnSGXnr9BwMoNxmLkFXp8aLQGpdXhnmkZEfRjEqmEAgDgasRnXq7FZyoieiB8WJpjtt6rgF1",
  "key10": "29pr68ZbcRqS2CifiqV86NBP1SWbX3wrN9ek74fEezHLs7o6BEc9FeDSXBuZwrrrdoWtBzRUMBzP64gXGTx714hP",
  "key11": "2TvxnQYm8JjQbkrHf8xzT6QP6YiRYHoyZt6ReKB8eodEtGzc1BQWvFkUoCTHf8DDrNo5HQRSLfhufw7kJqQ1souB",
  "key12": "pJ3qPTsUWRmFTvyHH8ZJpAFEDTkiJBdCttfEkwAkSw2fJ5nhhVjAFZsGbocot6YfRGYSVSsN4p84XXk434ZMMiS",
  "key13": "3HMAQLCu9TNZVwS3WYcayFHcvnRGDex5dSAnMMvkLrmTWjBywiovz3fSvAEYPcLSwSs3uv2rdgEsYBwd8i3fyohb",
  "key14": "5emJFRKAzE2WKQw2gL3F4GZcfoKmNH7qHKrfwQn29efr6ZkbWzKB8a1kufBeKb1AV7tVS6q47kmXrXzbaQwrdCDc",
  "key15": "4Fv3dh7MjvSnK4zESWXeuy2MsP2zZ9MsJjxdWzw7dUFTnTtdt2sYKngQc4hg3UcMivhqCDHFJGKPxvQFd5KPRsbm",
  "key16": "5dGz5Ut9ET88J2Uq6cbcSwKbYrvFWxbiAhyc8PGBoMDYibnitwA4ZpE8GWWXrtxYd8qMA7uEBQUbT7GggPxgGN9e",
  "key17": "5LEq9LXkNrrtX85UvaviFKcP8s1r72oZybVnCtZTg3y5i6AVTjofBa88LQsZ8HniqPNLiDLKNZdcQH9G3p2ihJUL",
  "key18": "2dj5irZr2EPZrHYVmWUWdZFnz2hRLWfMPaq2jFtMWejv2sfQ7Qrd9C9tKNTSHp4DHchyE1fhNK819z7kCcRcFXhA",
  "key19": "4q478CVDPZkswn7vZNuYHGEhqhD5WrM2VjCB7iSfKVMorpVp1TaGBWpKiC1fVwvdgwV271SBof9MKLFiJSvrF1Mn",
  "key20": "38qBgGt8gcQeDDrtfYPatwReAqkHiVPbAaHoDb5yy2aGgGHVCPSdnvCSwA9NXzvxPsGXkAhzxWJLaExizgtgfTSz",
  "key21": "CLDH37yRbThaWdcd1gxkUrUeizftL8SjheZwNc6bXr9JBwfFfasxowTn8mZSZSmaezUwbR32W7bJ9q5kiKz2FtU",
  "key22": "5h2363W3j12MYUVTNQsqRULbQMkeYCw4Gc6ParsJpeqFrjaJjHQC2zqNqf6vYHWiwfSGUSd59RD58actN4i2iPPQ",
  "key23": "2uNhQSZ5pRSg2w9oFLky15MFr8DhRj1A2dVZe8xnE2Nz5mzRmPYNhDHMw9SS6iNSpj5sF2KdPu7Wu7LCDE7bHodD",
  "key24": "iEC4ACWS5XHhK5bzKQmZQmWmY1BJgowChBYwNkR3xSakG5FLCtTjx22h3J8ZE6MeuZNQXD19m4kc9ALWsXVQLdS",
  "key25": "fiYriDa68oEP136zhyvkxdfCVz687JfSGviT5fUCPQFRByS7Ao5wKDKkmqGfVJFEwwG7wEJ7tHNGaCy1Rep62t1",
  "key26": "AhAsbrMQDXnGRcbmB5nz2uyzs7f1H54Ar8BUoqSgfmSm6BXJv5oYK6T7deKzVYpZHw4ux4XTKsBfzNFkGix2oNX",
  "key27": "4zUwYppA2GtcgRRVQgB2sL1pJZPzV8t6LzitxzaAuQfaDDoSqZQZ5NzLUU3EKkunCVYtpJ6DA3EkPdZUfxywyBzg",
  "key28": "64MW6TWt2nuhMi6W8TrGw6sUeK1FuHPT8Y9x2cnrRcf6Ff7jwMJkcdxq8fAcBcVp86TGNZ7YHCXdYMx4QFVHmyiS",
  "key29": "4wikRZRtAmPGzZcisquzjcT39N37gjkJM6SCYn53tbybAgRjgSB49XSAU4jqrpYRB7ADBtQmiMyrkzt1qULimqV8",
  "key30": "5kGKRjkPZA5XF5BAs7WhoNxqZbm227GAQ1FrfaBQk18gNtnHaWPPyt5R2WsB32aGFX6xjWAdvYyTwVQe5iLpJQZ2",
  "key31": "F5hd6YiEYndAVqDSsAbZWjMJcckUBPAunyBYivG5kzmfRBGaahGuKNcPdpYRrDJAW8Yx7NjwjSRsZpihviJuzwD",
  "key32": "YwNAsWXvQGas1hJf3LWQGwqpc2ZfsRrvrPzhdonNzwC4HfqEsC4ubrdqKi1dFwHbjFw2WdWDYbxKRD68ccpqojj",
  "key33": "39vN9f3GY4Tp5FctSv6bvCbFhe17EFVPYiUfSun4LmLnWCuBU6wQCJsaQpeNvdenoaqnpgWpqWfpEkEwkoHAuyvm",
  "key34": "sP7oHePq8bjDJigXSNXJVfQgGPrtrWBKVgEj79Nt9DLUCaEs5sJ89nSqcWYbFahw728eMpzXQHr1iWmcKtikRt9",
  "key35": "4CSQbbwxg77boSNfy1HiJSWGKoYersRPfRkFAdykdJLH9TadQcFACp8pWq8ppwp7sPwhxkxW6aEtBLLMEZFSdGuz",
  "key36": "2zqmzNkVd6TRaqtBX18zcXtuREhVZ9w7v1USrSMahpUHEGC2Gpisu41fqTYEKyH7hHZ22hhVM5CjJ7xCidrCML1t",
  "key37": "ga6paFmMHXJ1kWu8yAsqnAC4nZUpeDeQL4UMajsVpe8odMULhdVxVyMqXW8GXXjeReYPkX3MKFd96Ed8K8pYb6X",
  "key38": "4CJmnWCygUAMfQWsgt4UrDE1Uj67Kh2PavDuwwMj9ccvSwgJBzez7c4gLVDhbGufc6SNBSYXpxRtszVZwZzsECVW",
  "key39": "2yCC7iakVrQiQupqXcaEnUzPyaX6JSuVvVbqqKteJkGqfwBmjJZ2irfBZ3a1zRU1TcX3yVMhRffFP5R1n8Ux4Wz3",
  "key40": "rb5cy9R9naasHX1iNsLNyDi6YvaEh2tpmJCs8C9JjU4JjyjNdvD8gvGBLrMTSmvTLtXb6MBwyhyoXs7iNgBXBFW",
  "key41": "xgipCe78CsGUf2kquQZLPQu9scZyoiUDa1dhLDfdmsbTQUFB26Dw1mGsve6Vi7n3i5cWzcjAdGwpEeEoyXHhUxA",
  "key42": "2p6GC5cMwbexwArhctmL6UdsgHtpdHmzSjKQ1xYuuUSghkJfiZr238sLsJEvFp8yqWjns75y6TXbsTuiwQUoeV8h",
  "key43": "szhHCXpJx95qbi6MmFxC7ZCd7BRHG5PsabNnaALiSDPhCzNATSMMzxXmmaZd6nH7uh1iDiQnwp8WmC7MNRaR8Fb",
  "key44": "4hdqK2CqP31kL9x2Y8MrjR5AjZSFTPSvSH44KUhprNw6mqn17KGCPPcjxHrsNPYBT4dgfNp4AALbLdNshGD7y85q",
  "key45": "jN7QTgW6rANHusogJ23Y8JvikvmLUVp2nh5hj7Fq26rAYmyrgNRAae3fEwJYHPkfJfX2PAaqAsjetSqXw5jViHf",
  "key46": "4eP9AJZGGkaP4YjQQutLQcYP2AsByY7YzrgHokFTa2H9ogZjGeKHeAhmKoQnqtpcNhZ2GMHFHHHkrWJYjjZsUhS2",
  "key47": "7GvVPNBLC97oBVYPzDDbrKDLFY49jJtGQG4biwHtdULz5kt54vzJu3RzW4TucuHsmgsVec9cCEYrMesMN5kvLBN",
  "key48": "kUeTx3n468VzaGwqVeXrrwFVKsixHZhN8xanGURv5bJoYGaobavx6DVdRutptg3wUe5fPrh1PdEGi3EFDR91itg",
  "key49": "2krzsAPSnhYgBY6KoMYKNAghK2tyrT6UmHYf7se434zJudFNmNmVMmHYNH2qmKyAq6TuTqLVLwqW5TeLEGpiHh5m"
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
