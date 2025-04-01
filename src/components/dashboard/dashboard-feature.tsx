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
    "bkYvxrJBx5UJ3NFQBsapg3fKy1xhrJU4kq214SjeKQjjRTZdRYYHkhheKfCAdjxi67tn3aqBWmusaNdLtenKMbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzY8J7ipukJBPR8ceLiyipFSz3y9RtbUZroYpAbSf1qittY2a2Bab2FbEuHNtSVYtpx53EPxXZxnKL8PAwLoZ1T",
  "key1": "UvZPeD8qnZrQTwgGU1nfcgt9dikAvtBs9D3ttobjrpSN4QjDs6WfftJp6T5RGDzYZjy45fqiGzk6voSWoRrEqDS",
  "key2": "Z3p2zwqHSATRuRZEDtbq89uVXbThZzYroFJFnwTCFErJ8L95thfpXCFFNrd8TyVaqpGYFDYUuvVezMpxFf632DY",
  "key3": "3rJaacuRoje1cTaHi1ayfnSm7ALgeMjBHVznE9rYMDCc8nxjFPFV8U6SQL3GSdheEVt5bY2f5ZnwqjxXWavm1pu4",
  "key4": "4zprEP1Ntt64rgETP2RRaL2h3qTd3MsYDbYnP9zaYAuDD6E5FLTpccpmCnBGqNmkgY2kYVhEMpoARsVs59DbrwT3",
  "key5": "28ygryJwDr1PzBwHvgQZzU5hxzz5oiQJdRz1FLCTjXKB7D4aT1eVneQY8nvdR6KHqyPvrPx6RJmRhofCULTpP3t6",
  "key6": "hWVALnArGcTFANoUWNBAL6EVfs3dFECyGc5XkmYR1bWLbfYNMCFf89gGsFrp4ThbZ4oT8tH2pfo8LhbFoekiviP",
  "key7": "2KP33ZWdmh6fGpo6h2uKgShxayR5LyWicyxsJZi9q7TTBYHdn8Msa5xwkTDsVe5heENA3cW9V7NP9QHsBJjmChp8",
  "key8": "2sQmVsSWvXyzvLqfD4E6FiBY8trM73Zs6RQeyeDigzEs1uQUPjCNNbWGHtYjymgvRU5yrT5HR5pQ4TxP5j245SN5",
  "key9": "5a3bMky9E5X7eGtFZjKQcuqyiAEFKdRNBUca91Y2deARe3i1oRnMWWx7rS4ytwa5Au93ssq8ov4NDMv4sCXTEeNB",
  "key10": "4UmHNhY1tXdHNzadkRjWXDrHUfRmunX8Sz2KfYsfmxPoLYtuSKcDhHKC377arSVhZDb3nR1tFJ6Z4V37a4X2zPZL",
  "key11": "4Z39jRi3uUmidy5W9fS6QxwPFViMzfLNDQGnUTkZCCdd9F2kTNP5exrzEMRriWa8SnysWyCgte824WtxQDMULHrp",
  "key12": "3x8ERmfWnKfMgsBiDir84ZBCmJevPDhf5jmWpkRj6ZD5WP8LWTZ2BLZ4xjPc4ESJoHeHjwwbhmFGeNvCTrr836N3",
  "key13": "5KCLMKKu2Nr329AQaQacmDaVe5EKisBbf6QUCjHi3o3nBwCU25uh5a6ix6DgDNjBS3LiT9zHn1pjd3mq3fh1TTdP",
  "key14": "5t87pjvpnjfd3vWfQ8o8VS5vgRUZJydMLNn1pgbo3Xe7qhNYa5bz44A1iF14usFKsiXP1fNJJeWrHy7kYTukKF8v",
  "key15": "fqCQCq8aqdskhtioSCnfVH4XbUgVqgtmG9hijGjniUn8XnErnm1R3DKnUABuVp6FG9wnbQEw4djssW1JeFmdrjm",
  "key16": "3qXig9Prdem75h4y3fVawdzvNM8dGsdEQSutaV71TCULrJH6JKq7PrC3NQfHkuViZsoooZ2tQ7oDQEMrArJZ6HnW",
  "key17": "3DJ27hPeXQ1DTk3Ek5ZgbdU7rytcRswkjZ2xopQ8JAtaC194oZYFYNxgLV75GMZfKxhGXVh38msYbR22Brc2GcNg",
  "key18": "5L3W4vqF4iRR4QMLkr1orzyDcoLLhvYnQDXRKHc8WQq9votzpwwYv2p1pPyHeL3TSQD1qN5SYCzxBDzvsZq78zxL",
  "key19": "4qKpZqeKzMzktYgYeSRRB2VeU57wogyfCKruRhygfVdJvM82KMmaMDZchnny2wHMwsmudwkkTRLfoa5h2JMN9bd9",
  "key20": "2h6BEG7x7DVw66MuvRRBFXLJ1Ya7WstPGRUvqn2B2MXtqZJgzxT9tQk2RPRjPMCPJgrorwqMFMdfjkKaSnVWsogJ",
  "key21": "2uf4YynqnBu1sTDXdZr1DnWUDSBa1FnixxKTXbGaysezJBu8DU4F7tcKRUyPUN9tiPk6XSb1rsVNBMPegY3iMaVX",
  "key22": "42mMqCYrhEZtXDpX8CknqgfZAfSEakUpYsR3yBaNQY1H4TnjDSxM5jhaZfB2xcfPeYSeZPxfHqRtpFVt2MRkZjVh",
  "key23": "4ekXGVcWp54aNkKND8YrEPFJijybSWUikB5AkztMpQ4MaLNpaEuRyAhvPhhvSdpyWCwRCCpBFa4gGPno99ied6EJ",
  "key24": "4TVKTzHBUwEpwMDzam2HVvQgFXHACNCzXFPV6jBrD7sKe5rdwL2kmYJ6awtzpC5U42F2LYAiTQcf4f3USFxY6H16",
  "key25": "2ZUxugrUN5bfzLxjPjVa5tdCmg3VRyzKJs1vGUaE3poWYPMLsUn1gLxeXNEpFb4vPHq71Z1amjWT1wy7TJonpwBy",
  "key26": "4FjVvq1FZk7xzeiHHXB4oQU1FKPvYQtdub8X88Ew63SzNfqcb7X5KmUq1jYUPjbfDBTormd3ZmXtdNY2D2NsKYy7",
  "key27": "cxPwttTY6HoFc9t1PB5FCu7mBsrzW5KHtWcteCPmpZGVaeCVbMXKmJeUjxRWZMLqxWMLg5NNqYgFieuVcxbrpCL",
  "key28": "4jnXsJwjVb6YYHaQvm9VP9VcmEG6seF93ResN6HLUgbDcn9KDNp8jaPE5ZyHm99RY6zBZ3K4dRvnmTcNtFB7jig3",
  "key29": "64ZuAoNdVb3YgoXnuLsmfSYucsYXvcgH7MVr118mZegHpAQzjSjpinDeLUXtudngpaFyYWS3X1L3Bf53KYjTQVNj",
  "key30": "2HtS2hPnFBozZ54MEtH5mfrbr7hK7zrpyPPyGp4tv2FNmmLpm9zqYZetdy1VfF6YZSTCg6ztJe1FRm55SJs53TVj",
  "key31": "3PdXwJNKucxFej1Gzu729sGmA6uJecg8PCm4VbPhbA4Yn9w5J3owdPj8S893jVeKkR6N91ihGn5L4hwjALuCPbCm",
  "key32": "5bVNzkECRi4ELVkEHT6qi1T3BCKK4fVVvVRdiC37uz4vaw5SRYEo6oZB21KSdXdfajBEAgQByCYsgBCqtToWce8X",
  "key33": "caZpV4vjM6T8THAf7wpQoLqN38ctoxKnPtTQHgN7x268tv6RUjuyBSEm3qLE9D2dKpaDdo4cHqmT7noErQZj722",
  "key34": "4LD5iffWzUMbZNcBnNupAZFQsL5Gi2r52MTnv94PTFFZNiqaTQVY4y9oaWnnvYCaF9fsWHds5knnpsXQEwptSjrp",
  "key35": "2ojSP2oyxXUiKAZqXDPnYiA9TSomqttswpwKYNyPtagsz9n3ADHB8KNYKrr6RmC9M68FzNhL98RyC2UBd7FQGCti",
  "key36": "fMyNrPZpRVz7wivj5dvuy5ahmfSWdftmd2zNYWUwGBvFgHaGidCyxxwzuRZqAKdNZdm1a9aRgFzjvRBK6YBRcbn",
  "key37": "2vbPYEHWubhFLdSoBsPzfo3x2fsPs9TGaRfv5fAFTbidCWF3fnRaPA8JyYanvtcPDbwfCfpPPK97DoUoW5iG11p4",
  "key38": "2JDQtvmi7tQji2Kym7xaGjCTEzEt1dug31S3BGKEm1KqxNeMfc5hmbBtF5LtroVbnjgAv8JbUwWDPrJRxyT91yA7",
  "key39": "3i4xkggoukvvuKifN4KmxSjrMKwRhBGTp661q3uZL4DrRCvLRtuWFkdSdqsfpYsLKNYjhPmzDQws8Nmw6fVuYUrF",
  "key40": "48Ls3XQhxo3VdC2eCEevKTtL9zPyoTCUzyEtuji822n6MWNU16Y7LP5RWY32a5H51JKp82foqukjL9Br2ZJVHasS",
  "key41": "4wiWLd647jEgRCZFeKvZWZmQ6Ju8yyVzEo1qgYDgTtDYNpjN94TWXSF4YS5GqvtvCAtQ5SSEfF1KMpwacA7ATrwj",
  "key42": "2Ni4GyQ7ZFyimd5ww3ktgE7FdUgNMsm73tuEpJSXFsgZgUGhoFrq8cZ6t227jPrLFFbawKUHRdQG5M6jLDiq4p59",
  "key43": "9q3buB9tDgQurkXNtT6xjnANTWkmDVYAuPgx62FnpRtJNSNguCXTQbj9fFSKYMnTLHsquYXBeUXqwKVprDSnKUb",
  "key44": "41Vwoth5tAowtN4ZU167bs4Jp6z1ycG9nBhWjs56tM1G5TN6vh3QYCDmJZnRtb5JnkWRg6nAWG1qDtUvSpdvb68x",
  "key45": "48HvuG3TZ9JbbTfNu66AKDhqrASjyqqYnJ4XeXFuAC6Dbj6THHdENdKk2TkqfbQgcvJfhK2ynZe4ai4rbKAJ4rmJ",
  "key46": "38QRJnq4WTV6Jx1GyM7ke9yeVPdpDr2w7TLrnYo5BdtgT1Kp745sUkQ9VFWx7aQvdkMbrMQNgttAHnAuQpus3Jr3",
  "key47": "5n7szNLVvH14xFfgxvvFocmUmxDyWgd4Ro1gejwd5kxnuyXSJV6Mb9dewcm8aEq9zeVeY8kduWJ8P7ZiT282bq1X"
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
