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
    "3mA38QGo1rQvu6kK8ZgQFoYDxy6WsisUGJRkPVwnUUNBSmecpvzfCEDYLoZd2EnzLkennj3nf2HjsbLB3pxt1zFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gUJvyEYGdy9RN2ZeSD7NpLSx9fb2GmEj6dVQSx8JaGCR36n1wJGHkJ4ZpqRnTGu55aifYiR2bnpgfe7kBU1H6i1",
  "key1": "5jVaJsjQNGSeNHN3kZSX598Mb9FrVX6PsE44AW5rWL8ezXuWSypboR6NX2Kihxvjv8nF4hRzLvibptUaWc2ymMVF",
  "key2": "5WrqKfFoFzrW26bt6FPmzJridUpDJzvB9eF7Hvsg9szJu23Jn7xNTme141wt42W5GLErgXYyAkcoMvUGv962HUFc",
  "key3": "4bnE2n3kD68VTY9TCndoLAXCQhibJtLkYENHTfnumGM5FN3yfLydt9oUCxPVts367h4ZSKTK1EfUzDvCLQJt9KAm",
  "key4": "DdhjBQaMxtLmZFSMZUhFai51ZBjCDNmQz4ZteThseRUeCTaJ3MdMKwsNR6gY2aePYR8MnSMwothHpssB5gdge6w",
  "key5": "47sHXTQSWvCWzU2UHDR4naZtVHUpJxBLwBhBha474Fsf14YNKJXjqV5ibVUBSSiCFYJ928Smcy2HkMydCfoYuDjY",
  "key6": "5rQpAAw6YkehqBeu2S7JJdBZVQtBFEwPKHjf5UTDhAtCZHcpUFpbmyJ5FfTmyKpJojBTqmBGPfTWoWKCapwRZwvc",
  "key7": "2TuuAiB5c1YqAkxLjoqLtFxxBwszb94Ejmb7eJM39mU5k9oN8MeK3d2jnQmhhp48kWmDXau1EX393UZzQBJa3YkC",
  "key8": "Lg2Je3ZRZ6fCauTDkBZ46pN2EsdAvBuHunCRdTMm4HF5hR1YXg9SreiJNhJpkk9FdVFfgSr3abGxkanhF3cqFWJ",
  "key9": "ufMMY7suWTyeB8qqh2H2SpP3AK9bvbq4ZoCpgk39cucg5GfwsddobSnmXErgPcLqFG9QjuhBgnoVKgast7MZ7Wt",
  "key10": "5yjMRx6NWcG5r7qdgrDCVTz17MK7T3iMY7oPjrCjRoDBPYm2V73QePx9p9F2Mbff4RYMXvAXw7hKbqdaLPXRSQzJ",
  "key11": "43QTaZe5gf5C5HxkQMPfVkoPKZ3GbRyRLr797FP5zik6ni3QSkZz96pNRFin5QVGhhfrKn6z6mKSubZ1zqBHCheT",
  "key12": "3j3aD7xX4GTeUyxrU5GKNqvGWHJB28zeBdobmB6WeBJXytFJHuEwkEV9msPApmFS1qsp5ghvRco5u4BVym2uMtWu",
  "key13": "4gubFQDv51bNbcFqaQZEh4EKz3VvF5L8VWvbsr7pqvaPUyZVuRFpTjeCUcjvWyFFxZZUKNA5jhXP8qEwCEUpM2Jn",
  "key14": "2AYtKuUZgnoTqWwmxYqWu7QhunTXLVaXQWdjTzmT3ySo73mMVoPcnUjj7He86qHgiUUs9JHY8vJxWxCymtrZqYwy",
  "key15": "2yZkLeLNngzwC9qPECTnmgvGqDzNXQ7ZstgyJNXVLPmfRLyEgS6CKLw3yYqsTUCkrEqZi4ySH81VjxWzD7FHKUiF",
  "key16": "48ADadz5MMB4p5Tr9Dn3iP9MaWkd1CmXbaw5RPMqQXtAXzc1JiWbkLzgYKy9Hv2Rh4R4kDdPCoZZqAEjH3TJLwmj",
  "key17": "2mL6DRAhYrcGry81rNTU2hCSSuN8DCRkxEzgMB6kf9AJD8cR99Mex9RtFaDfwgCUr7m7eCVgeYQ41csDg7JKod9v",
  "key18": "2nx58S1667neKYNFcBWfViSDQbAdu4BTNkxZZ7QsBSaeyVPLjbnhVkaJ395e2zrxds45nicze7FHH5kbsiL9xdx8",
  "key19": "5oEWcWeaR844jR8zoBKtysxPorpuo8ckgTNMog89nayjZHAGyex6AdpFM9UaEXVSKMr8LPd5YSiWREmepWKvFCbV",
  "key20": "3z6rHeaS8sTvMfhis5FQbWRiZVcw7vCpArSk16qsHYxwRWVYNqrnsKQK3Lwe8Bbee9TEUZv9BrKTyJGsdKmopnBJ",
  "key21": "5WbCJPhxdUNuGt8CAoBheNp6nqYLj3qYeapBK4QC7Ft66m1YevMa1sVU4TjCyvx9GcA3yssnAYun8jVfiQXusYby",
  "key22": "2stsqM53ZWcxJSxsrVkTcLvHUiMjkAYu3Q3MhkHsUJg4XWHysFsc2nbwJxGoWfqK7Y57kL2ju8QcUXqJQ3PjxHbp",
  "key23": "4Uu6LbAvVh5rMcaDNo9uMpc5i7mhsVyMrzF6h1FzbkPGtj5XyvVp2NoLJTuTPjxEwyYVPfuAs65VhpqE1kGHHhuc",
  "key24": "3YK1y2uJFPKTFQrkGBvnnsoGemHYWtZn5pGB5vANMjT4u2eVVw1j3cu2LeiaAAtLhJjhXZyqX536h8WR6eiF3iJ2",
  "key25": "3773Rkw7fADcVGiBS55td8erDLEY7Y1U8iuLcvdXnRE6XAvGetcjcZp8CLQaJdmoHzJVZHgQrW2QGnA9xDiyp3Jy",
  "key26": "4PV3iL9eYv9pN93AgbHzzgWbQddPFygxjXMfHxyhEJjmdcTHWmxWbAa1uVM7bQtFXxrwUcUSPCCztiY66Ags1S37",
  "key27": "4FNk7aC4frzMWJ4ZonVUeHZsu8EdHYbfd4B8kSa5oZwqcKXv1cafGP8hZHA84FY3HEZ3ZkCCtmM4eXtaACimsLs5",
  "key28": "4Ak24oE7rCNdcrgesHQbHGyrjrQiLJjqe1wuUzCqoxJ2u5YdDCW5TDkKSiSGWsudfVjgNJG1ZaVTALRei1i8hgw4",
  "key29": "2HLzKXmCtCeZqE5m4pACFamxwvDik92UFwdrVfA636jixbTd4JnrfxKQcMw994cZuxByPdcNRh2H2L5iHrpujshb",
  "key30": "QUUjW8ikMaPJQYK2duENZx9i7SaTnvahc4bpP1Uu4Ffe2DLiKr3JMaeYXmtVRLNZqb1F2nQA6HRWDoyKJXef12X",
  "key31": "2A1NxAtVjF9X3XDPbpP4ckSGkwqCFcx72NV5DQ8pWrKUvxHnajUUpLpiVZ49zQV7N5atyZVFrz546oXz41ohwJNa",
  "key32": "2XUtKopPxyBg7yyUHpG2HKzawnHQmve7wKqKPsPH9VnPRGCBPbytLoNKQhmtG3AFeRPdR7ncCoEuyW3WX37pzUHP",
  "key33": "3KbyfpLeZ1qMpFhD8g7PHBotYbRV1owbDTW7xkhUeb63hrzyjcUZFcRUTPTE24iS1d8dURFd8VCCPFtD7MDwa4Cp",
  "key34": "2F6WJRF1reahGRphrjrqPZbgG5XJr2AzJpXRyjDvRhwYF5zumZWzNmAfaSy4Wcm62HDPUCJaNwyAU1gGvdX628Nz",
  "key35": "45Z7KNo5oByW1ax5Wy4zeXNtzCuqwtgsnT6RG4V3MFPY7E2TEFPWE1DsnyMVe6BqEcuyMzx7et3m2Yt1dUEWzUKT",
  "key36": "2ifwzr4fP4bkMr8Ums7zmvrjg3YrKEjsPSLcYUgZcq8Eq8e5B19ZwvRwZGXeXt5JAXday6AUTSfj2SDtxCghEAPw",
  "key37": "3c7E1CgLX2MTcgt27uaWqRXJiUWqfFsL81Fu2KwAviXzoR5SgpWLgiTk4azh3ZZYkr2GWgMqGWcbDjR6ZyxeQ1Jb",
  "key38": "4cezDxW5wBv6x8yN82BB1mD1MquaigMVRVVRisNsAzjQuaRVLYcxYy2z9wvv51H8GprDuotE4bzPrXXiFYUZcrYP",
  "key39": "5Nbb5gZMg5EkesjedH4Z75wNHKktjS9iDijSF16Y3TDZNcrChuGZySSK4RV5gPWZgA8fXP3owqSXipsKrCq5rXUx",
  "key40": "5YN3UgAzBBshyovWGm8uJubEdRCfFguTZTWRRCyH6LkZkzVejng4piWpm1hRQokLqq5HJXVrJAmhfyhbDiicPeo1",
  "key41": "5FJDrYp9iQcvD1SfyWYA2V4bMbsiR5xdC1VBitL2gCcVcrNT6ZtSDufBq88Z9FYQN7YNLWVGUbdWspTHxwARkn6q",
  "key42": "TE2rDemT3PYeHyEC8cCR8GX2CYiGcWr6x8i55WARQeqHhtCUwZaXhMCng6TLgyNF4JgeWnBrhFaWMLvjwHj13ko",
  "key43": "66QusPDMkZK3JHD84mBGUREfWHZhsgRAdWSxoNdbttZTsDQ2bTyezZtMhgRsxqVDJSocCj85DQUYGVdD2ievLAiU",
  "key44": "3KVUf7riUdyFJqCahQWncSoGfaERNj5k5CH3UDGCwGT5GpLrMZq2RMGipyFu158gTmPEuDqVuARBcpLh87AHKLLq",
  "key45": "4aBiv1yeg24Bmpes3kc97vL6pa2ceFknHkWrSGZwHjUckDCC1pZ813Q9yv2U9BXyHb5a1Fw97ojkeZca8TzeW6MS"
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
