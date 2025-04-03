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
    "22bv3EHghDpPdbSf7PJy6QzvocdCpbWwSqcxNNfqGUS9Rr1ca2shg2wQ41yPsrQGVpu6hRCVzNATt9164VmFbMXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZJxGFke6d4JbQLejtJDKfGgynBWo8gd7fLBFXRJHof91nJzPaRpduRMLSCuvkH3TER43s32g17WneRjJMBAjY3",
  "key1": "5cyBUD9RYYsCyrwpabwrLWypq42m783pUhxvrXzaCKY4FqfJ1PEdMEX1AjcpeHbDftRunhWZm4g4CYcpB3LJ5kF1",
  "key2": "2BvRJLM6oU786b9LVuj5fpbHoKvY6go9MrVAdbA4bsHqxgbiJxdEaNLgH21NohQf9XGY4srsvba7iXYcFscgPU53",
  "key3": "REAJgbXmyhgj2sRqxxiH512ncQdRyatZYtCaimdtma99PvQM5WJxvL1MNZNLjVZXVRmztzsv9cA3MzsbUthesy7",
  "key4": "62UL3ozt5vsq6FzQHtxPUPD7f3yBfq6Z2DxwyhkV8QwzfFmVBST5UcZfLWE1EeVXYkKfB4es7NTNGgfcSPGjDwVU",
  "key5": "5gRQCAoFuBP5xq1eS3Xh8VWH3hXWgN7pAByUFnXKH8gE35xkBQJNdqsAnD5wi6K7tfbbaoZvwitcQ4ZsGbnJ1pNd",
  "key6": "5WgzPsx1vKqG8XBsePLLFCG6ab982thEJvNJEXHKBE2j3S7GHk4XPHTvmqCW6qziHWgBELRiEGGj1M13Mc3E6RhZ",
  "key7": "5ZJTVkevRpmAP4F9SAhLeEpVAurXxZ6HoNyyVStWmchsd9g582p2tNNTwQiVMCURSCZm3X79F6JoBkNSqhLiRNTb",
  "key8": "3WMKYHZJ8M8ocPyimkdRmDXFuap8m7H4GQdjiumHVSQneWhof1GktGLPQsiMjHyMk5LrjYr7hhoTmcmWuBsDn8QG",
  "key9": "3TybSqdW5sQPX3o7HV5psubEsqSfSDZnApGvuGEn8hApgnsRvTRqKJHSBJVvyhSyTXg63Gwq818jhSQ7KeyA9Rgs",
  "key10": "uKa1RYhMqSpZKtrQGrzo83wnuamJ7RP94SXG1JxUyhRrQfQAZs83WMSPFacWm5yja1ySbJ2YPrCjCD5BHvzdxmt",
  "key11": "3j2Xz2jCiuFrU9KMtJQ1CVSTmfURMNygHm9rfXH1DnQWPFbcAFCENKciE4Q7xkZTdYQMub72XZbYoExyPwbMFK9f",
  "key12": "36t5vrVp5H1zvbk7xnDkHUj2FyJUs8SPpiCBEqKyvdPYAbxMNe4M9of3EFxVZeLFD1Bt7AU9t4CQNLyviya43UKU",
  "key13": "9XKWrkzABu63F2QyNtbDpR313uF4orUJZxDYHSwTnz6eTN5f8DyRXbhLBWZdYuKhN1FKWHqYEapvKh1kWSSygjw",
  "key14": "otMvzknttoDKa9NSPmh7gUqNwUdLRKTgjP5jsndWzohd1aSoZqsVHTyhyCsKUprkEpdBoceD3sYWK63qRUeoytZ",
  "key15": "CRHxbgeVcBeJz3ts37u6Pe7pepgEoSC54zZkS4FUqfBzYKMWp9pQLkLwaVyVx8N7gbmXwm5ihmTAooE568nzwW4",
  "key16": "4tXJsWfsgrArec6shikirZHHrgYHHLcXEJivp7mPbVpmpdoxN52j7hSs5goyqusVXJ6cftXtrBTUxENajA3sCFpD",
  "key17": "2t9QJKtAjeNGJkcLY4ijYFf1Y6oYtefg6no2pf1oU1gtZPJJPi9z3ZrPw6AdCBzdi5pyJ6cpR1qrc738m14ZzsLd",
  "key18": "5vGDgW9ow7a3QeT67LsHm3DTXBVHNHCYQa4bAjZJg2kPgjH9ak4xmzdhnGYUA2zEV6eCcbYp2Q2w3n6fJxMuWSNp",
  "key19": "397txNTqN31kr9mm7ttrq4BxsmwtPug2aTR6QCRWi2rPSpiRu5utqDLdQdmrc6rT1jW1GJdTERtqxVTpiyj7K2tH",
  "key20": "YQMph7Dvt3sbL7yqmrpm1QynnS7AuiBccv1urybycTHVuZSfGh8CTyioimFTYNfFRHmrSMBxnPRsoiD3VpTjA1F",
  "key21": "3ZgEo3qLMzjbo1rp5nNXBmq5KFohNM9W7pGJZaCGLWG3qyZ3Ck3HpcPL2RLAyegeMbiKpoTtUzbRp3ZRDNth1gFT",
  "key22": "3QA6Z8n6DxfrLYPGJiDNvtLjoPuSxkzvyvwM5DujQXiGSZF8ZjeYikbky23MHTvHC3ACMgmZsAPJrXPhcixZDosJ",
  "key23": "2ne7tdvmAZ92rXvAeWGgsA6SwnTvf26pKAsS27XKgSqyDBDQg5Tp64PKH7pN11qC2cMzMu2X4JB2wGrXBFqsbxjb",
  "key24": "RRsy4HyPx2BR99hLS8uRCvDwpgkcd9xr1vZmBMk33t7VZN1MeTvcGwcpt245srBxbeRmgcLZboBbjTtnp4EbRbs",
  "key25": "24sBrB5FJuYFWdbD2Qe1z26prGdYcwW5TY6WTEERFvPkKDwWEUqbz1eLWSF5FtuXth94mqu5EYC1VoBQjzHNFu2y",
  "key26": "7jVFtqrnYCG3K3ot4TYK8VzvuoFnjokqE52fuCPTBG1JZndQ2b9aHvzd6UQ6taZ5WoQhKQ1tt55uRtPSa89g3Jz",
  "key27": "Kttav4b42M5TRfQyr42aFs96aNTGBpgtADeXdE16gGMub4S3CiTE3LF9LBMUS4rCB2cNZ31HiXCN81LQiHNLGa2",
  "key28": "4TCtw9Rf4UWSo4dsASFMQ5FZtprkxb3QDVTpD6kX9v5JJymMonhhYKxMHCRvbb34h5MvXzgpTge7GKRQxXKocT4e",
  "key29": "3TuTg1VBBsfwFvDrv3TU5VYrc7JoniiztpFSrn5nsarY78FudUnaPdT3JnmqPnd3JzwU8AAK9Ly64N3xEMxnqWa1",
  "key30": "5AArcyymwdDRquHr9fdo2N6cJvwJisTsiNzXy7jaNjvKTqMXnjiz7t4HYGHCFYfryoqFovmgrmdjYfQ9QFXUheoS",
  "key31": "4UTpD1NJtwgpXubeLdSsQ7owU8Gtut9gu9Gj5Siv3CCtpKMywooeqAXTt6bztVP1xjTd6DJbg6onE9iDsRmpk1Bb",
  "key32": "3pry5ZgtnBzqxBh48GqDcZmjs19LWDVGYke8YkVsrkh7DE8niVXKJaYVX27jeiHxuwNedMGtiBqPKopWH6M7bYZn",
  "key33": "4cL9jJgvocfrwjBW3kebm7pqCdSipu83qRPdL7qRMTX1SssbH5rB3tgHNwVzeQizx4wDv7Whpt8obWvCwiGLnWWE",
  "key34": "j4bro2EyMyRa8F87AikGGNZZvbP1seLZBQSXLZSYDkJ15NA6WsaQREo5CsPMnJcgYiNyfBgMNDex2iVwxif5uYQ",
  "key35": "32qmAvsfp3kogW9myzqSMJJKFpxh836SLA9PSxbX77V746ZYioWmbg8xmW1AkkdNWCXKQYdZvKFbZgmoMtkonrDy",
  "key36": "5BEx9qWLDsdR5CfySc6Az5xNLAjjBfU2vLt8G8aWaUMkYHa9ng4dkSQB8FpHyHkcjLnmVZRM4yjBkFLV7Kdce7Um",
  "key37": "5PKhymNfKZjncNUrjwEpf5irmKnJ9DYSSmFCtAXx4S48dB4retyv67WQQhvP8WReHkJ7Xjz8BNhRSgjds7htsF8y",
  "key38": "3eFrAakrD1FRyvtKwJUX3yDZio51VbxgRYk8FbzzX7caBSMJrUXVYsV7UTWThS53uoLQMSDrYAbBr45dyeAGpais",
  "key39": "2vX2gfawwr8PxwrjWKztj87hA3EFBbzBssCE6ZQhzinKaEiX8uoinKbeFtcejrpyZGhBLTtX5BXKmpjWapZDD2Va",
  "key40": "xLmn4ne3rrp2KDK4fa7fc5SnJxG37TPXPFNwXjEQuuYHAPY3RK7BfmySa4ysj2dR7oe36jaAUGmDjwT7zFz9soS",
  "key41": "3kFxd6goSoNgsNbzFu2enXtsh61jvhR94GC8XXqGVWNboryS9QaE2GgQ2UcFKk9LUKomEraqCoq3nGHQU4R3VksZ",
  "key42": "4hpYPgLhoeX547k9UVZbJ4rZvrKKr2bcLUgMAnc7R7VaePZegpqpvUaEhaAvu6t2neKC7Hc2de22L6U4ALUtCgNr"
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
