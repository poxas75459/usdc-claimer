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
    "4NfAtn28iNs1UzGC3xuPYSARm6nqdnmjQotCkm6MY2KpbqPECNTkUwCqxhTMdsAvTwgCJwyyxG1YHBSPStKMVqNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMwo4fHQi7cn1aWafvUKj2o4Jvy32yD3kiptr8TZdbYU9LWNKFGt1HuW9XSTD1TZqoyjLx2hCNZXzHqj5RCP6SP",
  "key1": "61faTGktDeoCW18BNePBNW8GfayAgfNEuTtm15WDyXxQXgKHQBDC969bBGLianxo8D13K4uGgcFxQA7qhJ1Y7YLT",
  "key2": "5s2jVSR6aVUCQFPbi7m7gPthDTpt5mJMwuquANqtYtqPJ9H4DajWdQkVEMeZy8Z9XPYyQpfuJPoQjcCa4MDF8eP6",
  "key3": "NCmp1rQ33emJRuBjmAe2TzzTYQq5QjxNhif5oB1nLYNH2yrVdX9TCdb46s6e9Qg4TDbFgdqmACDVthzNMhVHSyf",
  "key4": "2eL7P37RrUVhMQ7zUnvvGnuB9xj7RTfsreXbz1XQGZZmXKAL38grKQ5NfZywgJ63fRvhUBjooKfBcx5Y1Fyg6Fx4",
  "key5": "57zDKQh4nbV1j5KvWF7QYd58UnrPVhRj4BjXk473xZZGzB2UBnayp1DdMMcSffcvJXfejXYgLZYshLCkL9mZQGkw",
  "key6": "2mJNcUDaP1fQ96xkTS8nzEAow3iDvfmbag9FNV4PxwWuh88gh6zwhsruoQLLtGqE5zpc1YXQRHbozLWi57xbB2qi",
  "key7": "2Kyt1n1jxwzEQu3fGWJqPwPXCKrf3vo9dgUTKhaC2ggScQyG37SULJbDjLw3REemSocAkjmU8MKeiD6gM3z8Emkv",
  "key8": "3tXeUBz93SLtY9BTKSTjb34WJffTmXdCJrtFCj9aQgNWL7x5h9QJ2WeUjZQcSPBBwdpwtEezvDfRMXV3acXCeBot",
  "key9": "Ypn3UiviB6sHuk1v7Do2Aj1XDCAKfKRUBJAS1kxTSEZjv78RQTQ2zuqU6EuadJGutLCLJWFoktoQvxEXbwQy43Q",
  "key10": "2RVAUB3iHFuYwvfhAjrHG8PYEie2wYtT4vtstPHaRC3e3XtTst7b9b6Cy3cGvmYy3HU3UyTxGjAwrgiaKMirNzXp",
  "key11": "4zgNyG9ezF25GpNUHvEzVjtUA724sF1khdKWweQUTSgGij9okBXvNYweJUWqoVE2VimG7UcpwkrdXSdUGmS7bNxW",
  "key12": "2LNNNd8qySPXTzy55THcm499THGJjgtnPGhmPHMrKyz6SydBiybX9MGWULG8Y45fkr7edj9Y6461vk9Pom65aQxJ",
  "key13": "2kG5izfvAPVQZ34cvR5Gd8HqbM4nf6BvveqbX4NL1uKbNaoiuVETZiPMLoYjHSKDqLr7MRsg4QQwiPXJHx5exN6A",
  "key14": "21EdnMSRSumEDZUGDbHmpTmffhHHnfPmHPviGp97xiAMzwakCwa89HPw2uUNzWzdw3o23SVtWXd1aFd4TRzSjhWW",
  "key15": "55eDCFrsoDaxEdMEnKx6wrr2QCkxMdiK3KZf2Aj56HKxJMpwbPcjZgau1aehZuCzLMcahE9MkibZYmxP5rGHqKim",
  "key16": "5wdR3AdoMhuhJFNR7udxFEDy9otHdBrAqV2KuGkKfoz1uuH6swvNq2HT1tXuLGrsSxRY6hQFNh9sZWeh46GjeYfM",
  "key17": "vvsTWSdBqQuPPn9usBmVtGUAsDn43AFWiPyfMdMmqJBF8M8oNzit73F53YhUS151TcaromPve8vt3UjJ3rJ2jSu",
  "key18": "4m3E4Q14JmC44QkzCtJ76PaB521rFv5H3dm6KYTky8gqXb1b9XsxdWRsH8guvCENwhy4f5PmnoMp5RhbyiYFVqtv",
  "key19": "27CFra4CmmBBVs7f1hoSnUExuw5XpujFL9uLzSEGjBAQ8g9ZnqMFrmRp9Wa5PHPndyiaDtuyxQbZ3N3awSBDurja",
  "key20": "3ch11mjSjZftFF2yk2hwAK5CqySPQumPRe5QrP2BbGKY7HY3u1r6dPdfHuk8bmpLwqXSTweSdN66LrhW1ddaCUQH",
  "key21": "XjzeeXoud2YPAWnWzCuB21rSs191nwqejVxazAsvt8eH85Kn3n2pRjwNCpgfLXfWzfkgeXR2Dk865qtt3cxJrn5",
  "key22": "4ZehbGgsB5YqFLpMy9J7rJJag3Ymnbgt836Z86VC3oY5hjgVwMBLxt56NVdfYAxJLeTfi8KZH2sQvZyuLAQpNKEX",
  "key23": "251Fn1fQH86WDcYKvgcqHiVpDhTPZvRqQGJMg3cqymCozEuiQBUHiR1V5ug7sq9sz5pmwZ1pmAn8eHwLBzpk6nVe",
  "key24": "4UU9dwdHq6zTWguGkWMfeLVEUmbbwDTdegZXXQMFKLvYMvWjTSkBcD2aMEGomvqw4Ue1PSiFPLFvAqH25VgCwPbB",
  "key25": "5fpyi16mafccJb8o9YzGPzEnfu9Mc2ncKvKDgDc1aLKAdBDpJ4eAPJABKyzZ2RDHM8mZLJhvirjWj3Q6tAKfDaLA",
  "key26": "2nZZkgtfnbu48oxGHLZ2uA5uy8yPp9seArws36NQD3Cyjc7ASz7DLB72MemS7QqeWUQfzr8mLJ3vCFhTToYyt6vh",
  "key27": "3aYbgK9BSmT8iJp1YARw6iKjw2SXeyccSX8dh6pfDpmx8K3ZiiK34rTLjtBTWk6dNvSYBZfPC26jyrA5sZWj1jF7",
  "key28": "5QLQpCL6UdZGkXynfKqXyqF1pafChUDyUtAhoH7P55dgQwPEgDKbZ6AKQiX7ynT8TisPtUPWdh3VhLd9tsbKcCZN",
  "key29": "4KGQzLp8NRv1JEKnGtv8rv3rcSSFTadZxW1yWTfYy8NGjJCYg8fvhP6L1P92ChmGB5UGtDo5BanoqVUkeymsBrD5",
  "key30": "2u8uhUuauS2qp4xE2DnTM2zNPr1ewj9ffT2XYLMngzZdbjfxJffqpiZzbkmGmwK7TNaCjk98145H2U1wmDvtdNHZ",
  "key31": "3HKFZ8w3AxTDyWVcwPrYYPpSPYdw7zz17MWgVqKYEEuA3zPjb2Fb3VvngBrYg4bjDYTirLjULt9oA7abe2JQVuFA",
  "key32": "4jmMinN8unKYrrpzqY1YXkgiXtBCJEWobZsM2WhgNtcHPFRo42Nh7SREbB4pWVBBYDifZPym4ehw8vw6bGhySbEk",
  "key33": "2ZJCsaKKaqJRyYuWmq1PWJBYmCde34emNv7nbKiKyKbXtGiZzRR9vdJyvH5e4TfddyHaaZ4NQ9RJ2fB1vGi2Cngx",
  "key34": "5aTwNi9LKMbfinTVNgQPfjxmk3kaHx6mwGTd3nGzUfdPk9sWBjq3baJZJ8woWEomBJA837DVY5pkAx5XjkaAkLTL",
  "key35": "4qsAgEGwf2P2PiR75jU7dzVBduNXzx2dSpnRdGr3TyitKuP1NtNezRSqPTsabm3PMNfDMWRe3LL8YqR2y79EAcbX",
  "key36": "4Cyt8z9AhUt43piwPdxszkkKmu2SV3iNbnns1gj3B855PBK98v5sgBqRHYRE4kmhhPf8xn7HvrBHodZvoFUcdcnN",
  "key37": "4QmSiKDX8FvLgBBAk4cWX8arsb9vZqgBY9LjcjsqGLxeMK2TqU315C12KogWjdegrAv2KVfJTTvCf6uexrmA7sNY",
  "key38": "4a5XVCf7B1yE1K4ysYVHWUZ3VrxwXai491vtkbnsLV5oT8LzTWgP4ovrixFp6kzNAx5d64uYdFjbKdXqUMzFCvAQ",
  "key39": "4qfxtcc46dvURQpgkAuykYwDKhX2ZebihTipfcWwezJmZmkPnLMjtLNkjEHiH6Rcgut3TsbJkKmQEzihZC7ye78o",
  "key40": "5GNmpp7vuaD2e9T4F4GkUQDSfrhphyHH5KRPWa2kDyzpHrJ9Xo24Bp8RWsGe2CzC9WWUuVNrbC5bxJNoF2yfpnd5",
  "key41": "2WG1sdvLkYzmTUXmqWxPBrEJHu9sPrDDjtzXqBJX2v7hoqN3EssHyUYsMAhv7YipxofHdfwdcgXLXq7NAb5ALt5v",
  "key42": "5mrXDQZiqVYAxZuoHPgz5BW1GzQ5kLagWJ9n2WrC9TunRYNcqYV7HAF1oK1KxJdEztuHraLe2cHEAyJfbZg9fYdS",
  "key43": "41Q9jedYG5Tj99jdKYizav2AvjKTW9P8YLkNZjD8rbzPPXzDHopD7Snd3M4AwENZpZs1QJqXz62WiDrjyBcsTRh6",
  "key44": "2xZc45j456n32FaGcQjTFDoTNsUdFJmkGuSWcHjKX5mmDSZBRwhEaTJc9KZPJrZEGB1T8zQBEHKVqypRZEvPZge3",
  "key45": "3cFWRXbwWJoChchfrLD97kVDZbZU1RfSUWqSfuaGRnsBC2MeehJqVRDd9L42qAFHJfPjLZrt2Kw8hovERMS7AQdX",
  "key46": "mNPjEFMs1bW4vXvWSPo8uaJLWoeKHpNpG9wFLUxsHVHdZ9aydoK6MP49GrK84CQbkV47yU4JrSMKGtdYtKDXtMy",
  "key47": "HXVKgqHKKGTudsXuzQRwnQEsusT6Xu1NF2vG2Hm9fpxHN1LdrsWN7oT7tU4L2j6qYGjeuUg1HXQLzvueeEVFBf7",
  "key48": "2eJ8FK2cwUUX7yKvTweDaM6LJqDuP2zBo7RirdpvzszrDwzaexNnf5JbStsmkej7ZQjHjtcPKuPdBJBeh3rh8Amv"
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
