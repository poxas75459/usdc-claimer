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
    "ugCFGWtqRzSkgAgVC7RoqhpyEvpKEyqivzSUvW7EoY8sNsyiLcyZsEVw9HRFxr6A9tT7s91fDaZQL1weCKgrnbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rBndthmQX99T51qPHEWxyhDpdqTtVUXk73rUpaitE3XLGogTNNSV4wP2dfZqmWFZWRkcck4ncE81pw5jjBZdbFM",
  "key1": "bg7X5VHKYE28NadDuGQc2MPHJCfeUogztMGBVTmN9TmPRM82Np7vMVPMXWkJCJwSuMmgX7ZYdJQxFHU3mirLa2J",
  "key2": "5WEGbJSs9mXmrNhhMRwwCGe7EBhPJV1rqSMVqsJWXNEn1B9DoLHhnHX6LyWL7PD4pvF6TtRsGCu3o5ryb4LbWsvx",
  "key3": "55dvvUuktscR9eXhh9V4QqkG95SSRqTX2xR3DQo2AxAdCGyJaHd4RG6xNhTwjsWL3FX4Kyr2BYtNj2vSo9WPvNY8",
  "key4": "Bu4ddCwjbFweqfwYytyC2s3hNpvQzkY3bdPExabF8t5vWVCPqde2ys7YVa5adRm9RACFAjjWZ8M624ri41BnKZT",
  "key5": "37qeVugWuRGG7kuomEnyd8RyJApbGyBqJxMypmsKpfoMai3qi28jZmejyZKSdk7aN9HqDkUxtBoGCuaHhxCf1EQv",
  "key6": "8h5zf4smhJx9ze65duzu36vvw4myz2jM5y1aj7qgMV5Y3CgoXoMH1QoqMjwcWzMMT6366xhwNzF3Mg9aBHsd3Ft",
  "key7": "3fqbg5qciC1uToozgfH6SqZrSxynjNULrayi4bvQakSNyaYTWTLV5uTYxm685ForuC9eqPETbXidJdKA8mbh7bEP",
  "key8": "2YXPqhJ4kLAHiixXY2Jg7TFwQVxCnx78Wsrj2TDnEjmg2xq89X9gq1uuknE3biLgybFBj96oRZqzAwdVHHwZJKX5",
  "key9": "3dPfRgNY8Epf2yaGiaAW7GAsyunFmpJwnna7zwjeYnCG7eyRfLAbwb1k6xjC29WW4itSEtPeUabxcAnuGsmYpTP6",
  "key10": "353ZUxFw8aCKrP898fj1udJfdi6umpUV55U3yC87EJLnpQCaej2a5wQ9UgTDfyioUY3eXXCCxVP4edZf7tndB7AK",
  "key11": "8oBpqgPm8MM16fnLhLSMd8DCiGJEwxgQ5iFAnxcr5sQLMYHPr2dBzXXLykZh9F49e3jcpSbARJys8Juqy3naoqE",
  "key12": "56VTNdYZWEFQxs2ytGsKiyAewyRaj7TTXegiZp7HzhqcyDsdB6Wm7r6tfk4Vefz2GzuAPCWEZ3967UxTvL5kZY93",
  "key13": "79ZsFjgmWcbWbA5rqNrWmYnH3Pksnm5Mo7Cmo1sxHJXuxDouVmdmCLEtL485bxHLnpcKbcGH5MPjoWP561UzPUd",
  "key14": "3RqQS4BWuc9GsdcXLmzRKYNZT9hegPSNrFTS5SLGWyMrgyobritDzSpKt5FjoRFs7ucc7o74X8F8dMBGxx81s9L6",
  "key15": "3Zf5p8JE3DfGp2GxJfKr4gj2krMVy2dX3cownH3EvG4anZayVcE2rSHMMSvcFfEJ36aq2wT2uEu2UcnMS1ongAmt",
  "key16": "3T4ZXc8qmxo9rc2EbWQui3asMgHfrZx5xJZirZc3qTN2UWmkZP6tYjUNmu4dSEu5T2eoRxwrtNmdVmUyiV6v27Rd",
  "key17": "5DMFF3b2nGwER3oHQtrYBSC1sFD6vdUMnTi7kD47kERH7YiPvorDwrwzK9NBzddiusapDm8TbrsWPZzCcPHS5g86",
  "key18": "4dPEmY8jSz4RwXc4MFTYpQY5twN7tnmDRUdsT1zDWMHfes92EP1GwLTX3CKvVeNKuBEN7d85MzBm41oC7mdqAoa4",
  "key19": "3ZdQ4xCaa9iYBto17DrG9ykNjsE3j8ZDbg8MZhHu2L3V6WaCg85wov1JqfAp8fBMdsb71VvRnnFbiVPxyu3w2zSa",
  "key20": "4pXiF4RDqVahEJ6B4Cz96pDZFL659eqTjVEooSjMwJJ5xWEr7S7vUguc645NrdpAXcg6coTkJxYF5FzaoRR6Acdd",
  "key21": "27EYrYs7Eus8uQV6AxGhTWuqcJ4cutfezKtMDvVNX1hMqHEvVb2d7ppkxP4WHRh4QYEiX4JLanECxnqdw7Bg2Jee",
  "key22": "4aKBGWnAqcA3b87KJ9CT7dZJNXveD9wqSzxFVRRGrE53AEf2J824xTgv43meszCd7DJCQJwQJT9sYhhFku8ExZSW",
  "key23": "5ocvjfYzcgarvYBLrmqW42dR94a6iVWAn5zUoZt86Mc5WiSD9QoxtX8MBngnhs1CZqerPu5ToM6Emb2gopraKh6H",
  "key24": "4g3aEEnVp6bxvtq5qBRsm4Ltfy1NZah1ZBvb7nxCcHGbhZBppu451T2XiWoD67oQnKt9MLX9ubQLwe9jSg4vshp4",
  "key25": "3JonV6NC8AHPHrLxhfp8DQcAziaXJfw1UcLRKxSzhFbzEfi8Tt3k96SXYQrB3p9y9tQvhryZHovJbruKh6Tz44oh",
  "key26": "3ThF4RvCeG8CTaJERrFm7rLbyqGnAnK79UyxFku13WMeUKhToUasJWT7yKNqxKkfnyPxx3Vx3kaQA5AxhjBeRJKB",
  "key27": "45f2RX18R8F214nf3L1kd25r3qC6H94P7oCgDdz6mh42hUrdFEJeduBzeDbRUtUYPN33H9bv9bcMvWdpQMjiFNX8",
  "key28": "5jjPn34PbKmhUV2hUuJc7q6jz3iL9DaiE9k5qbg18e6FPdfYTFbTqMUtHcqs86dF1thqCDX5oQJa6AgnAPoRtVDZ",
  "key29": "3jLwrKNTGN5ZiGUF37LnA6W7jaapYnJLG1Hc4BocNpdZT4rJVD9h1bbNCjZEBchwahscfs45tUm5vwDy3r3WoYoA",
  "key30": "3ezzcMjgBPMkWUEm7mw811uMnnMCSfLbYkmwWRnw4qVUN5qCmJ43hxTGpzcPZkse9H5BMrHFKwwFmP8kfWxQMyp4",
  "key31": "4LJihfMq1bCp5JhEWhvGTMmUXjNXrar7JCiADAAp6egbqRhpN3Cittu2AszFPe1j4RCWWBxrheBA5dX9Q7JXzHmi",
  "key32": "3SYnAa99Dt3oQNfXdmxJbjk6a6cci3UJSvqFsdwq4yqpJqiJBWKYoVMR5pUepa89yPk4vv4eyUCZb9JRH8CFHK9P",
  "key33": "5BSk1GUGw6A6WrPZKy3NL2vXPgjxmCGfXbquT1EfeiYQxgQ4X9TJxn6zqcULJy2UsesdEvGcAJjBDiSoDR6YGKKb",
  "key34": "LtDSkx3XymwnpzVgezsxT8FBeHUASV77wh7RihsuQ7JiEbqT2KT2XSQVQF3cnBaJKiuNWHDbfrEu57Ya5R5n4u9",
  "key35": "2gpE17rZ6AA5puYKcYTqH8Je3HthKB6tbqdjRYsto7RPYZHeSuCX2WSda6mdNCwp3HXri9c4AybUw3swnLSMH1HE",
  "key36": "2JLDACVgFzEFdgEz4kKsymHea7X9i3T2h8CL1WSpL1NtVebLVV9mxb6DnVagf5uoYLow9yxvbMaV2EMjbfxmEDX9",
  "key37": "25oxUR3Vi5YvYkPa9M1SJJpaihJryaYKrwcrw6oep2Fohkq2ACJFSHPn5P7SqxySdTCZfgZqFrxCD7PJ5axqZoHu",
  "key38": "3DUCGA9PgrkFaWMU8kuDBfajLrzeFEacHNXX2uooMwhM1uW1tkUoyUr2cM6FdRsZjQiRjoJ2FykofxJ8GcWBq8R5",
  "key39": "2CTwg2wCLcxNK6CXVg7r4dqkXxs2MaqGdLQhMgqYbRYNZ4u8wTrpUGyBbSzKcyaHmnmPqgaAibXAcygZpFjrSHu8",
  "key40": "2otrb2Q71J97EucQjjyBHQKrRoDJpBQm8EH8fQHxuWuddphwGqqC1NZz5vRrNY6JNPmivZbEfXaw7TLZbzo1oBkx",
  "key41": "3GGe3QS54SFKDWppjvYpS3ZXjUpC5iDsb3b1bpKrXKzhQNNcQGepNQ1NDFk2nBNLmdPU31WKszpaKk22xW6euoLs",
  "key42": "P2PDGwiG5iwrKrmWrK9rBHjwBoNVAdFh1M9yWUBJjGVuyrNDLFjAE8jJEKVeWSH19E6ng7y9rEJCsxAMPZqWj9q",
  "key43": "2UFRLvjzkFaUmBrGsUJrbrTbcb1Y7PAV1WU3gciZfKZdEpQMcLJEakosam69q43EMg4ZCLkDa2YB9o7XM2eTiyuU",
  "key44": "3uXjhs9qctk1KSQWA4sijkawFyn3mfX9tUfUmr43DCQm43KBAwCCg4kfPXFmVBuWfqh4i55JfzojWkhzGJcsB61m"
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
