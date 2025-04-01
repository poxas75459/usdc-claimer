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
    "3xbL8ZeDJvmj65bNgpnYcgFauZuUtoA8L6hTKR7vGzc5iPP49ETx2z1rEoQc9hKCkq3LzdP2fkFVffu6vbUkft5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mXbuas5bsUqwU2hD5pVJpSw27mjwfnJxifwygSQ4DG7qkHDNco6pnDqentPzxgJJpAL1TQ4xqbyp5LeJP5cY8Rq",
  "key1": "2ZLo2pfuh4ugsExeU2a6vZUYmR6A9CHjX8GoNDFr3y6owzuYEnbJ2yfJFsPtXB1ZX3DGjACK9o5LQRvQBdMpgbdW",
  "key2": "3xZJv4qqGRZZ9j2sFW86pvzG2T5jgyzXhtjVevhMQSmQmVqjMppovmCNcvhyNoFysV2eSahi4DHmnLnZDDY7nTxZ",
  "key3": "4f7R2jTtoAxPuogf1Tshk9yctzcuECPX8n9UN1vUGwsE4w3aQjRxESyFsZcYWAYZMYnLxiXUcdCBc1Prf7QmVRco",
  "key4": "2UUv5jjYSaEDK7yqdMgtBG5kmMs6oRozogJDdBpFnNAaqxP93t5V6krYoKH6xqK2wc2QcS9oXboskC4Ddr6Fcpzy",
  "key5": "4B4342dx8FmxVFtVc6Y9x7vRemDjgjc5p3gDyDCHratY5fNnwD7baonCADgipB76G63tAEjkFpqU9AmsjVqBn71r",
  "key6": "3KieezG3AhdyGg71URHtt1TUVdHonLHkwQ3CZxetTKhufLtGAKgH3gZe4UDF1AwUX3kZ9tdAsghfUGPVyKUKBKM4",
  "key7": "3NxJ4geyXr9kuC6HKQjEyRvunXbRmbiVX1do6YKqSNV2KkWZHeZTbA3GMvtjEJsM4vQpXNBSxC6MUm3MCQhRq1V6",
  "key8": "4jM3w6nyiDfKLz9GW1XDR9mi4wLNdVyYRGNGpWeBKct2vuQGn8L9hF7fkUBoxzghTi4DeR4Ye87hKbB3RDgcHuDJ",
  "key9": "3mVr7vtcYNGmpwbShUT8dW6Wa4QjuAfy5ZzeCh8hLH8VYig1Qgse2xA4JaS5mawSR2KSSjrxedfzfqzG7X2pNVqP",
  "key10": "5udnEW4UchHjvzRyXuJ38s9zSBmjMUEwW9apSwujz2kvmzDCVUEk4xGxEQ35dKCBrt8rgGcp4CzWpJtYw3gAwDVp",
  "key11": "62gZAL3QqUgjJHsXf1ieWyGGkWZYtaTrqPXsACiAFwHTv5yrxzdUBk7uDE8gwByUP2CJF9E2gzBTij5BptGFUkjo",
  "key12": "4aqZRBdU2vkjGygnjNA1tT4DXextVFAC1Q6h2vpXRJBi11442YA7TkscaTLj9hs1Wrn4scBxtUv1DxHZkqgKwd4M",
  "key13": "5ZgDNFEwZk2S6FhsvXXPLs1KQuygXHzQzxDsPKTeo6hzpCbyZSvewsNhBBCFrSgAeeL9nr57iroSoFQUqz6eYPiS",
  "key14": "62bgyNddnvWKe5xFmRMoyPmPB1g9d6aCjXdLjU1ZRWFRVFjmgBWNbzcH22ZoDhKPsunMEsgGcKUmhqoeLCEKTmNk",
  "key15": "4tGTUDLArGGpFjSs6cou2Rt6g9yaXkrDj15roEakhuYHdNVKTVfCUCNYyLc51gnFoWS3EWkUxAtbDFwA6Rgac4MT",
  "key16": "1vpidpz2XXwxfBd7LL9BnVxAj1FfGwxu8opaaKqweDrKRseffzPuMr7vShBY7fWM6BtK7DLUYzmGRF63DUtJk7b",
  "key17": "4Dkt1oCLsmWdqgZvGZz3SUayeHyQEBxYB3xtayKAL9wjMg5oerv21kkSaQP4tERixtgzGT6KiryHeDoAaGigBfgR",
  "key18": "51tbrtZWdgpf3r8ZoJNSmUu7uv3QVzvGioHrN2aavgJNqKDVnYPZ6H7ez6VUAdrsf3raPNqK8mfZc3e6KodvyUas",
  "key19": "3mXdcN7EMTNGhQm8o5XyfrTnrTvtXwRZZ93dUkF5AKL14MZ5unzZmNbXiKShUTGL87GFjsYNdoskZojSoEqapJTb",
  "key20": "4G7iYqWtq3RJjLntyShp1shMXnqArpU99yvQ1KBz4Z9nwM3aeb33Y5EPqHVZdskjKw3WmRLiGuyVcGBz3QGuCHcE",
  "key21": "3YJiRSTK631gVc3frbVm73zHCX67rMwJxZWik5zuZGMpCZDuRztaFppBxupeTcDKdBYqRgYd1XgybT3fKtEySKCy",
  "key22": "5MdfY9HEvCnwjAAFKPPBw5yFsofryNDeZHi7PpvWfN9xSnF9EgacUZAAGtMPv3bePWVqcNStL1h7NsCu66zeUCBL",
  "key23": "2nAA5J6j1gDf1ZTtzdpffgfRiF9p25nh1EKdhrE5uTRKMPMDMNtovMSc8njvgMHPjQeqGLubpBCnVxZMAZ42YQzR",
  "key24": "33J5VkHgBFQ7cyDaYXJiyKE759WrwwpfaBLdJ4eGryJTU2cfGBjNkbYV7pvY3F7CfrRPwKBPBcbA7axpFSqVodnK",
  "key25": "61t32tt3tZRSnHiRv1CxH7ad82Njv3LmkCJPebRs5CF6JUsLzPirVDdDEtFV77HwEAgTqrjR1dBvTLRXYtZuVfWD",
  "key26": "3fLrY45afGHVGdmgNFp7fxC4kMcoAoufc2fiFhJv3WU3vFvBUsKviqkicCAh6gBQff67V5HEJ742CFdkxPRqpz6S",
  "key27": "2RJxmRrPqGJm41bpeReJwBf4avaZkNvJWx84TeEX682ocCXWztD3NJFYev2J9ShjTLP4SYVWeNGDbES3XVppUmUB",
  "key28": "3LfHWTBtAkYH5XTS5nNKCkThfTMzeoUp1qDUvkzsPhEYz3U6X4LMVv44CwmRpxvvMhTtCdN6SAkAEXqpk72Ubw7G",
  "key29": "2WmKxPr8Vcog73JmTvXWjYYgbeiZgcrtF5HSmAR87xHRbx1dzqkAt9P4TYXgELv42LiybFhT1xhWyeqTUVmzYKQa",
  "key30": "61sqqy1qVAcFr7c732USBqydNo22ESC9AmtEXu1xWoQgNmrigpnHa9WPw38D39VvLKiaVW3Ng5LmZ7LsgY2WX6A3",
  "key31": "31ZgfwpuAmXHttYWSdQZ6QXm16fvocn4DzNb5w6p13Ku7nxbtacx3navrqofmg91PvHF1uDuoTzZyckhPYPfmMSc",
  "key32": "3jbxCYShdqDMRKQ6DbvAP5GpHb8EMgQcG7CaLwiQb7FW3i1NZeuUzjUHkaGUSk9JvB5kGNDzRyf2pkyHxUyabZCK",
  "key33": "3nCUdAPovEDdKVXXvebGSZab6huehtTPYpinJZwysmawvS6j6YqQt9R7hrZFCDoSx1PkYsy3WoqvpDixJHbt8eBK",
  "key34": "5A4y8NfdGKs9FQ2fGPxx8NLTFfQ5McxJkdJT6yiVWxPnxwbvUy2BE9F16xZapKjRKUGBRP1CU1csKM8eMCJ3bVPd",
  "key35": "32YBEXE5gjbWx24r34VS2o2oRLUu5GjRyfU6yNWcctB2PgkkidhhR7m8pFVghmaqLQowbVVjoKM8Gbudk9ADMsHD",
  "key36": "3bq6mf5oB8tTcivR5SdmSH3JteDWSZz1J5JA8boHF6KtumwCES6MfKJnzSVtwDc9aNTG4okyeDwqa3nqTEZDZtQG",
  "key37": "4tcSujNcQJtM5etr4Sa8BJqrULHgvnxy9pChRBpr2XmGT3cTBv15FXrCq6gshLpk4yJCPaGYmuBcGxW26y5F3wtC",
  "key38": "5Lv9XFPJLMERLRMPZ4Kg6NnkJvwNnLhjgDpdQhNeGJrGCLQS8NqmB6ginL6tSwUA9ehWgBi2U5GrZo3soWpq4KFq",
  "key39": "5tanwHhMKt5qenbDboBoMHhnLdVwgvkPJyu2qKRkPpED7Bm3HBdXmyYZWjUEkxqgCcyrrf2EC8Z5zfLJFKexMoYS",
  "key40": "EezMZvqLMhwgZLNaazQcWEs8MSCDX3y62pUTVEN2MevH5FoLR2cDTt2ikSF6oveVFTp9uLzGuqACqacUYh6PNed",
  "key41": "SRwXmegjwJchh3nYh9cMeeK9iZUx7UFaE4zVL1muF54BFEAqdjZ7hbERTXb4V9zVo2yc9HFq4TYt5ZDZG76XeFM",
  "key42": "47Qwa6G1eVGAaFrMarneXEexiwR6XheZX8UyCCR5WTfinw9gQX8nvDkYVSNystSL8udrq7jxRZtoaoLaRKxmKqad",
  "key43": "46brTyoPPVmZ3HrkrB568Cq2cBW59cimSc9X3Lfa7Ef4kb86SPDa4CtLfVBpLAdrCBmRMZfKuvTLs8ra7j9SNBYz",
  "key44": "4ME6N1QEK1iTqMNMaLXwrcQrqFAhLRGmxR571Vr9vrXWnm5B1kECrs9VB16uKm41rapYieuHPeSAgjDJzVLcbmfW"
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
