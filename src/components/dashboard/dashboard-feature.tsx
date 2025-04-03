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
    "5UQfRqmNK15XueqUQ6pxF3C2xGEk3mr99BSEZD3i6gxhWTmxyGoshWmpFJxcqTv3An76Xqwxr59hHpAEubAVnY7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9iLUHhNKduWqv2GwyhGT1qabXhDavFrV5zgNorknP5hyhfjPv4MGFkzb8PDTZNEDjaoLnHgCPmADMP8dfmyVfA",
  "key1": "4yBGq4omG5VCFwM5yQiY9jEVWCG8Cbwgbhczt2U1wupJ92hLoR7hLFygkJW1ig6acfNdQMBrhrRWXmYtVvqdCtUC",
  "key2": "qRPouhZX98UPyyFhaexHStLiNtRJkNTTF2qN5UDBtboowYzRYmir4LMQLs3tMqNHhk5ypXmeqmbALyjK3MwfEtp",
  "key3": "5rwmzPqsMgJDH7TRCyJMysjK6Yd444LT3pmpLKGRBAjGBcZxFvGd1823u9yuRBs2jsQu97PBNQ6AbF2gLHc5PLoP",
  "key4": "5X1PQeJ5XjrCmSj78SRqyAD8m7wezQjUQr5vmRkHMjvnRcbvoPxfhDjyCtr1uax8oSLtV21XoBjN4kh8iWudLnic",
  "key5": "4C1buqxA1jadgLxaki9Fwu4c64XnZHi5K8H1Rsfmsjx8h6a7r48Tdxmm8mkpKUfsq9UZbNVvfVLGYXrw7enSAosr",
  "key6": "wHFKLPTKbooXfBU5hZZJQwtJt57gP4Qag8oJjnZK64SqBUDrA4abneKJ4CTFVtJ1k26keKQLzCpYPBvyYd5p9Jw",
  "key7": "3H2HesrBWbCDZTonnaAoh6XyQtX3s9GQ8nxCAWkechafvQxw8rFnqKYYNH4Y2UEi4uvBmv1z2rmahNZQcm4wEqC2",
  "key8": "9ugo7BAAxg75NwkBv93hn2cxmNLRcLEaxBEzJPoW425B4WKD3iiGhwdH9y7hBHFsKBpcDRkbT6MaoNQ16KivYrs",
  "key9": "3PuGJqKZvETifkuAeN7uQCMd5JYbZQyBneLQnfkus53AKahQCTrARCunRUbGmJfvPbuX3WxeAx7xoERvqbqe9Y7o",
  "key10": "7oeoJhfqh8fPRHjNMhMJ3gsV7qqZBL2z2n3gHTcmku8KNZ9fs4oqchHpnesLL8ywKyyYkiMQH7tbgYwwNr2Royq",
  "key11": "fnHKDe2JDyu688DvakqReFUtvDqgmcdm2MbFD8hotDmv6j9YS2oEQuaCaXnjzCEAZuMoRLe8uahtNKzeES139K3",
  "key12": "5v7FR18nioJ9b1paL3DtEmt6jD9h8929ZnGkTH19TNropBmXaL2mJb1aRuoa38gei1PAksMfCpRfrLbATFdeTvT4",
  "key13": "5D4sfgSVN67xRHKpzGeZ5jSM1bMb4rYVzWXonNN8ywkpJtQWpQ69SppvAuiGJEpfRb4veHLBHRvPVvJimwDGTsxo",
  "key14": "2FiEKhJkK7oKfBZQgRPjFhjpg4z7Qv2mTGc1ovEvc9RxPFqe8KaTBSDtPhnrGmhP6m1Q8zvwNcENd9ufPyhtS98P",
  "key15": "59MUkZR8b9uujA1S3qV3TXaRgGwRukX4r4MffZ6MrK8tYbFhUscF1tTuvghbpERqQtwdv88a8rgpSinN3WVUNMTn",
  "key16": "8NNJBKTjLhyPhY1kf8ogiu53jzAAhngCcfc2xqvmaFcodtZAMEUvd9YMFFyV9sPJmm7cu2gcHL73xjprhj6fiVW",
  "key17": "2yGWg38NgYpuS3qTonL8Q4GJttfjRTKKLccFgejx7dfbGK5KtNtTUzRKrD1RMG7gEkqaPA5s4yknAkjGW9niNgbU",
  "key18": "3ape1Umpro18S3ZjXr4bGidmdynZip9tDPgPSMdS72G123syGLiRxZLKW4hC3m4NpBpoC8EWSd5pA5McNmp3GWGP",
  "key19": "QHxwcjTTWJAaRjPfrcYzaxn6DAWTguEVytg5tNCBbCzk27eXtcbHNGktgWCndyp5h2wba3X8EU9WP6FibM6TJkR",
  "key20": "4as3suPeht7CLV7xC4JXLvucGHjWkgngD1vxT7ZcPkHBtWFnZwabvVsWo4E5am1tz7dufdH2zBxrQnyArcnyqSDs",
  "key21": "2nfpSTVoSziZUauYGTixMYSBS2Btj8HNWcqdNN1QGdEHwLktk2QHxtqFcfafb6rHZkpdhYP31Tz2j7SP41YLbZk6",
  "key22": "312EvRQbqcF18CNuHScVbBhu9CbEchHWS8q1D2JeGuAzharnVQGLMxNooLMeKi3kxbj6QkWZvmtNyUmwrep8azKV",
  "key23": "2QZWKMus3njKryjeU3Ju3GkJ89E53u7HcpwjbPmt3DrbXGBLt2egZsPCR3wUfsDwrG8d9hYaUmG3BQEaaU7s37jG",
  "key24": "66DTLkDDke3R1YmUKrv3xngPDZyS5GBQkkK8PYYYYsLqx6hqhRpqzFbEC3hono81yqwpE5gMXQBLuiXnPs1Pkf3R",
  "key25": "4MATeyaWX3jaSxjHictuLMM1XYvZRgEZ6SXSxbZcdT34Y7sgbkWwXmqRsyx9hRPgxMZhGyi89qbZwysW1d72ekDD",
  "key26": "BjCiaU3XKacZ2p3sTYecGBdpXbVTNfvk167pzJHigP1546CDg3YUgJsShi53XhBHRWLTbEvC2DG1AGYSdVvTGcy",
  "key27": "2GETqR3cvM1cTwsMuyuG5WJTeYJNd4gLc4tqv6aXFJsvzAJYHiMaEpkUkb6tD3ZPKyjWqUdJPwu71vZ5iAKBUb7j",
  "key28": "53NzJbs9L7Pp4XQRzmUxXf9i12hhZxDZfBihjJFNzLWPKMRoQCjEJPsS6GHR5iJmxn1kzZNS4PT7hGmmFW7M6KLa",
  "key29": "5YsgpoHmVa5wArAfBSYJWLfkJpZBc985UJhfZC7w4UbZ8tBhwKPTGp9sCC3A8MKwfUF75368YJ6vRsJThrbHvqnk",
  "key30": "24piBXLqMkLMXmtDFNk2AQruf8mzcdQQr7AdA2toQfA1NZz9kNMymvphXcQJeJTDgoEnJwAXKrvEGrie1E36EEYQ",
  "key31": "5DxoXV3SW3XGxYzfaurqNRhtVXsSarxe5Rz692w8Vmrwc48zLR3uzvNDAxXodx7ZGbadojpzrf8qpvQEqBosqT8T",
  "key32": "Y8JNZUaS4qs3ZoQuGdCFGnLFbYt9EAe7SL8WAUhrHmXAxvoUxnxTima3vtt88frpeEsFQJ5qt8AC31YFMR8x8La",
  "key33": "wK4MYdm2bzk6AHpEdfVhaZAkz9URDTZkyzPpi9SUiXXTaARDjXkoTbLMhVMsnT5gVWEQee8GjQbvoANHpkzGqsK"
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
