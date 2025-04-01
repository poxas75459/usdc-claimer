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
    "6kx87yATsRXLjyNPU16o1tDmEQCwGTeDJivWaCBEof349PuVvsA4Bmz66F4W5XjeFvwhEDotdPubqh6qfJSCRAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KRaNF3THe2Au3jzCkGYXggcr6rqaTiTmt8EAKucKsAriDjayzCqfgo7Qchy4Mt7QaH2z66eaG1c8QsxNRtCbACs",
  "key1": "hMmz1K81HG4UXnGqZXfAux7p4W6aKQwWivyXsb6igCRRavj1FGN3f1G1udii6aJq2eAEXnJYMCxgaxSu9vtBv9Y",
  "key2": "5dDApgAaWd1azzg4oWWpLbM7yLVR4yqPahEcDfLXVJeot5bg9LvHfjuRLZB2bYeHaVh1iujc2azc4PhjdaVxL3Qb",
  "key3": "1ApJGTSFeYaLR1cJKGSBkuktkhp3JXkW4t8oEqKZzsXJWfKa6kBaQe7kHXCp9N1tqY99vzcE3M4UG4EQXj5xkp1",
  "key4": "27G1Qw1Et35ff8sbRvQLeeemiPKr8vLYYCLUB9kM9ZvLMPR3NH2RvfXSdvMhJUWDkWhfZdY7mEiKSYtdeDNGRPcC",
  "key5": "63gTx8XSLz9zP5GmRKoeQ1WB4vVqoNa5obkx5hViMu8HgWJEjHjLHximwcacH4vSmsfqgBx2yEqvSLJHVPS3f2uc",
  "key6": "yhLy9WvdVgHksbY8njEGzJhFWgRRB5HD189h1Knst8NWhVAxPxMT4Uubyw4ko5aQLm9GtkbQSnRQQbrb3JpSXR6",
  "key7": "5EqkUMRiBMD2VvPPwv3GoSUueGNBbyraFXzt6Ys92USgvyrVa2YEBhXzgHZrTJKkPnTNoSj8ewjJycs3qiNA4YRR",
  "key8": "2JkA46ivbHdmLci2ormicfvYqRMRCM18LeSGHWrYzG2mW8hVyeYcNZ8gu9PhLaAHKsuExgR25aPg8PdohUNUtkrA",
  "key9": "3ZXVgNQv2AFgKSnCA2qfB9T8fVoshnVpRxQeyTTPvrSzouqV8YpmYCA8ojKJRzUX6D227kRTRsPAtxpFi28ZMX2p",
  "key10": "4gfEYEBmSy3t6qPhwt5t1nqvQVSpAHW28Z7sTDDqjAhoqHFtE4kLfzYJv1dKMc9iHqVXcqqin1UFny5SyqsX8cVt",
  "key11": "Rd3BP2C2W3YZRF9M8jCsrjEPCzRfgA6CL65QV9TrBqCWGwxuxcGPvMBTc94AeB9cQmPXpcnFANrvUxBwNDGuACJ",
  "key12": "3VYE7zwwhmK6Nb7SxNBYxRX3kQAhtRMmNqg2b2wKdSaNQKBLGrB3LAcnVvutjGMmKP9w9jFj7EgY9uSSZymbDnNC",
  "key13": "5EHPSzCMd6PFV2Qne4JRtzcr3AGF7ZTDLXtSEvUBanAoKhc4e42sDCzKVYJFtMT1R1HMRbunVWxqq8wVnf5mfNbx",
  "key14": "3nHvAT595wS921mbWbjDtd1Yp3PNQhFy4d38FzEDQUL5KMAaWYdDqG6HBtYEBRnAofEE7zz7LQA5AjMfSucGSmT",
  "key15": "3gPKzfVK37vBFitnJDjD3VUvp6WGgwwnNNHbCG7EVGEKkmKGrYjsz8T1gq7EGvkf5QzbzkxuvPygy7U955n7cefN",
  "key16": "4TtDXNhLhrJLmwf54sYoVujAcqDmFgKGPyXX9sZoxfv9Qwkd3SKvoGUkvdpSKirf1DZxCmXJ6WmA186c5rKAgGwc",
  "key17": "8WGDaEQmnSvM7JDSArMEC5ShCVRRXt7HKjDLpv9LhvdyAKEf8RDJpLXAKGNQnKvwCJJEVHWqWnEtccDwBNxfrMR",
  "key18": "3RKqKJ54omjCSvh1u96hz3SPubRYzyAVcWBCTWSMGf4uB9AJ8UGnpHJiUpQAdWLWmm75QcVvQ5bmvzxSW414wgh4",
  "key19": "3kw5vU1MQVCsPJ1Hu1xdGEbS6yBpqNfAgpMYVVWKoJ4NzLopJ789HX84nE5t4oMRbnErM1mbXMxhhf2oLZmUofAZ",
  "key20": "5VfgifFs7NT3SBr8PxfVQ9H1rWwekuViZA8i6sSLJe9NWnJQD3Qk4Le7DhGX6Bm1YBRQ46opAphMrjGvsK9dBzNZ",
  "key21": "3Y1H1L4xXor5crGMmX8GbzwHpkhb3jaK9HcS47vB7dZYWVS8SYrvoLoA2twJz4raC1jHfZdZrD33RdnWWKpWk8xh",
  "key22": "2xaAHtvgpS95ErP4UvrNzq5UgTvnKb7aYYEo5okJU1wS2MaqeAX9BvBw9kRmDpYZeX1nXL5HgzSyFs7RedghScVT",
  "key23": "5eWnNMxgGSHqPnVYc9Rb4ZAAAzKXCUpQvqEmnqAdQaU6921T2aLh46prfDc2T6jWu6Jc58j9cSfxcQ3ZedAGLPcy",
  "key24": "26c7cr8xduBv6fh6tFzJKRLA81sykJsdAA3uTDV42iwaucty7veX9noZw51M4T3vnG1eQtk2PshwEzesDGc8fkRz",
  "key25": "4NjV9UVL2oHzqC3PBzJa9LXiYRw9kSQecc2D4D4mY11WF4gvhYfXLD9QfgRsmUNd9oABihJ7vKB9tRS3mvbMB4Kz",
  "key26": "3mNrnE6BXGsQQp7LdxeEnpRNv741Uj97QBP7LfEZdvseun2D35cqGjMwd5GLRQW3X6GeGNdS8N8k7tpfbcxxaEwd",
  "key27": "2jrvAxuzQttksKQnnnwestD2UGREm4JdnrNTsGAFfKtyjkfpsr1cnZMKr526mfk11FDyUPhqTeru3YGzSyq7KJvh",
  "key28": "4Y1JUeNxANbyY1rT38JGqyjJmA4uFL3QSTma3wh2eQXDxCzqS99LPQxfu8NULjdNbJZ97Zn9HQC5rgCmxRKp4X8A",
  "key29": "3MonZpfDTnv8CkyrA1CtcAh4UbyGV4Lak7ngdm39RPpp2Wnwar2X5bj2SvQSBLqS4SY1vXqo5dxUuU5PVHuKhSR5",
  "key30": "2mze3C6BTkj6EQaNKr21keNsmwna6XtCGaNZ9ozpTA1QqmDc2KvFwRrEhGCVnhhab5fMYCDGtjvWmfDbTcQ4LJut",
  "key31": "X1N9ocaJvW5y3LeBSktrSw1EmcXLz8AgQGBsNq5NpeLxwGUNgDp5nL4LLGNdHXRnD7sd7LCi5xByZKD7tSN2Tzr",
  "key32": "22UeXueio7A1GJFtj6ibuVG186Yjht2sGzCCFWYu6ShkUxvsUkLAnNV5TxikD1DZPChJnMD3RzgUzGeo2wzH2fgS",
  "key33": "2Y2aL64ktSSLrn5kKwMm7kdXvx6HndH4hZ1TLEUP8RCHWxANJnbPTbk3bK43sSonf39a3ngGJEjBGFpJPGNL4k8d",
  "key34": "2ARQH95kzjQH4a2Q2rsUSNjRcpugecfu6Zz76JuQXuobEu8VZajXfWAMGXquVFE8JrPQHBfZSuDbbFydxEar3Qu4",
  "key35": "3BGyP6ZxJU8FXULVUCZpgummDRgzWkSR7oFh6UdZKS9cF8WKR2PmRZSLHeXw4Fgh4yd1QUjuvPnkAR5HYqcYFEiA",
  "key36": "vmdGhAg8LMyjiawFVFRaGG2seQ6ztqVioeeFWVRRVRnMNZCn7wHEBrqkRN5nMeMR3mfivrFK7G2o1grrX7cf4GT",
  "key37": "3VLpbAbrPDHqgAxdJoZ4vWYtfi8oBZdjdqRPkt3BYkhuT6wyy9rxz2VswFx1F4bWRcfyXs6CRdVWZ8G11N8ardWV",
  "key38": "48aLEFFDZXTz2QkjMb7QCr2gvEL6SrLA2U2yW1FRH2xc6Eri8achXAK6L2bkDFqbubevDrdvje6KKttZn2LkwyJX",
  "key39": "TXv39CXvD3KkPzgMYoLJbNkaGbdaRjBGtFnNMoKGyTUfMcUavjXnB45jy9MEXKeLQyg4cP6xMXC2DxkjRrPFNkt",
  "key40": "2rz6AM9gby7rtRhQ3nPSNtCYsjyMnuWNTi2ARtYUUYh3ywptMuN68xxxsTpPo6ZxwxibwmE6TfGiZxXGZvNj1kHp",
  "key41": "5KfPYb3KGTEuqadowE6nU4dPfoWZcEPqPWHTubuHuGPt8xiycsqJWiZd9hBBiovQAyE3ZNs7mNPMqLafnjo3TREh",
  "key42": "5dB57hbWvGZkiQjjUGGnno1LDLRvkHyi12KQEskS6Hf5h3Sa92UcDdPmSwgbJbMkWuHpchYVkQUEjxwyfNazdaMo"
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
