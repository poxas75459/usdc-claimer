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
    "4poNhK8gGLSwMvVpB76WB4eA3v6i8zke4UqoPyzvCqBkNhy3LKMj4qkpm9vVX5pWd3VyQt7EuE7B9wC59oU4NJfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gepQvoBVBc4hb1HSa2ZQxw2jQpwmZ78VRZTeDWxW3pj68rrX5iyw4qnCQCMBbuDU6Abue8e4n2vrbC6iDgEr77g",
  "key1": "5e7Swj6EpmmwiGLcsv9wMQwY2YQENsA7RtJQJ1AxtUpJFgNemPnEARUKBGP5VEBuh1BGNaGbxcVbN8mdjKmLJNxL",
  "key2": "3oDoTZ75wmD1Bvg6Zyo9hohSu5X2pFCuQao4YqeJkA9HK889KP11yT6qMsj83rjfVEkabcBAbm5KRzfTT6c4qCgw",
  "key3": "5gCvfHgAwEEzkWX7FPaxdaDa1DcE1WCnqFa2LwigTkBvpKdkmZekiUGofdcoKBfAzaC27nnHnXTWhjkQSpRuuDav",
  "key4": "38bFBzsRG1oqSxDLUs9Q2sSVeJUsStwTFjUJocuQ27M7mZ7eEj2g8uGVKjJkg1RcmRTZ45X6vrV8eXHy4yqZGGMJ",
  "key5": "4uijtYG7t2BXDMHuxoc4KuzaEYMigEVkHSREiTPobCGY4v55f9hz49U1xVHkne3BmGqBSXtQp5JY6ZPmaydqwsiL",
  "key6": "41dzRNdCtZYUX8sgqrJQDf6CTHbfAnfobuKYaZAZKLMStM1UFmbE26fEYR1SZLSw1CJUqU83J1HCacqKtLJ7baS9",
  "key7": "3dEuUmhjJjcTRK1p3P3cZKEgdPa7iM2zak8R5ps3rZDkz1NUrUH7zKRG5BhLvkm877cp3gpGQUHFDDi4BbmLi3uK",
  "key8": "38okurupEaCi7x7x1QmGkztKScwZAr3ZvGsCS9y8vNJTWcq2YmfdPFn5S6VZYZ1UHbJrvx6A9JwTEvLZSBJ7zB3L",
  "key9": "4GTZNsnMTZjU8Cm4rCPoTvBueoW8KfGQm3hLBsfAyHFCqVT8Ege5ttEZnRBSoLDNYXwU9c91Gzwpg87v5f81dUKV",
  "key10": "3di2FdbnhRkDzUN4gGNajLyMxvCLKXxac4LvFitYpt6YFN7a7rvJEiLuwSVRSmEooHXNBoxsjSNzF9zickZt27mD",
  "key11": "2GyuGmnQ7bMgWMCoFfbAcvnJKBSteozdLVmtqtYoRcBgvMzdQwVP8SxL6na77csxq1CCAFzucsDVhxeXKasRSSUh",
  "key12": "3rrx8ZKBDjpwZawwUSTp7jXj9qnufskUkZZuKDa42ZJ3NsSMXjNzsMr4UzUMKCBH6CaYH7CAVQqtDs9Q6Wv9HpCA",
  "key13": "2pi2zAAq3t9U9VtntGobVRMhqYL6F1Q7RW12Q1QrdftWwp5jQD7tWW4MxmAqW2pkkwkbeKop1oMqguiaHFr5Wq6F",
  "key14": "4YtTuj2niVrkSHC9AfZ2eh2KWox9Uoq8Ny4mAFNjosX9zdYsW2J79BVkumQD2dsfL1rdvAosnXgUJpFoXyrkkA4Y",
  "key15": "4TLN5q6F8qHd69rJDpUwa4ZqpcxPJC2Z9tP2PVFzy1edMALUGtWUNjzTnBZm3zx2LgrnjVPP3VeuwsgtQgKzg6MC",
  "key16": "5TtqP957srX5m5E3PsK3nfzje9q7UgzHzWUnJu2sB87QYMPqgLCqSwTmmJR3trNEgXEZQwLEkt1Qhmt3cv4Bk83Y",
  "key17": "1tBKNgTwwxdkhpymY7Fcgd4hdLpecRr8GhmHExxvU7QnZMkvep8DXRBufJQG4h6WW9Wpt4B7zcH8Bdd6VwH61ET",
  "key18": "2t2S1uvfKrRTyMZMHGFRqQcFtPx3tXPDkW8TZFt4Mhs5GtbADdi2teckhYjZAdEQKxfdabMmgujdy6sX5cXyHrzs",
  "key19": "2FDu17uaXaAcmgq32tJfZmYD7vAjx8wmvy1LkixRftg5vLMLBsNhuSW3pDJUXgDwrhxJVB4jFWwBtNUX64b1vhYt",
  "key20": "2AnJH4tqo7J8hxd5D3HShagYG1iduEeUwTYbmCoWHH9jmu884KaSa3koaybzKmUYyiCV4gaLyaZzsWKAchaoVn8M",
  "key21": "2XBLBqacXyvisuBbATf3stRxbEJ4kQXnivqtaJ1r65DDLcBU11BjuTrHVLf3xWszcPSy75tP4GseDCjsRjXNrnCk",
  "key22": "53atezv2svydzE58toRBwGMvge48WvmBe4ASNvybVVXNmWrjuLa37HLzVVkvvLm6N8LcREiHDzxLPRJuWX6eCrWD",
  "key23": "5QaAznrMpchTnQaBBPi2F9TNdBQHpyNxchBTRrKVA7pGvS6eXy91LuqePcwSYU4XeawiXt1VRwmov2nYWUXk8XCa",
  "key24": "2kqRGaxt2tK7PK4zdAjse7BYYEKQ3tA3kC4LMrKcFAFT8uK6amtjBg6mZBjdGB6vrjXLaWQqd6FCnkd8J6ZAndqR",
  "key25": "33VGrjQBs9u272QkMfigt6GB82fFsLv4ZR2uqBTKYaGYBent6b4MpayiXRF41v8YuEoS14iuKSpUxuhnHBVowbSg",
  "key26": "2wyziGaX822qshnArDpcK3q6J42j2sDQ7wrqmwfmFoVkVgukQXpzyKeGPuFgbtUXpnRS5WjYRZK1KnFsYvouSVHW",
  "key27": "TohYnZ1KvKpUJr6DjUHxmw7pJMoKSfU77RB81zCpqEnBCNSzQe6NGikfrj6heLDF6Xta9h9AiNGqjqFjAFX3UpJ",
  "key28": "4VKtonpTQ6LY84QeJN7daDyEY4wSKiofggoes8tY7Zzpc7hmkop3uEwvcaJmvetxvrEErZFm7V56zjoZjmPBPsZo",
  "key29": "JgjTMuSJ5RqSmt2n3k3Y853v9AfMtmZhAAmV9wU3ZG4VLu5Mcf9VqEqH2GNmkJTi7NhVoM6n2qiWN8o8R9NyvJB",
  "key30": "5Z79NgUgHhPAn8XnFykDxzKM7EVHFaLewczmagMVoUknq1D6GvXMQcgXYYxoRCwJe7y5wQmLAg7foEPQBZC4BTGp",
  "key31": "5hqoHzZ1zzpf62K9eVqq1uTP3xpXxm7ehgU3V9Dqf2yoecaZVa1vsVe8AUGn3EoCZAHen16nRxUVgxPbPXeZGge1",
  "key32": "4VS3Akmq5RWPpvTiRbn7EXhYXzh5oH5R4jAaSwHtb4t78L16gmAY1bUkuNopJPcSTssDL3Rh8LSo5xYy2dJXKhJx",
  "key33": "2jhHqFE9c3Ece7rwk8SJBct7nqSySfVSPX8rY5uZVbrDieGsfLqTdXisdFFG88LzBudWbhHqMNCAYhi5LALrMDff",
  "key34": "3WhXhvPrgUCUuRNgcMuDzrAjAenewrZ2Wydf8punRTaS1bsnLmSXGPRhKmLFZh1WqSCNcJWGj6bdpdbMiab2diSr",
  "key35": "2AtaT8QkFiT4K5QcUDVnjF7FMjEshNBSFfaZwZeu5QUQdVLQ2tSJFHNg11RnCrMztYRZJPwf2saUbqoqYMgB7t7Z",
  "key36": "5fh9rG5Dqwdd5ZKHDf3mdjniD6nyH465Su2iuRvGV37Uu8o4XuYsnfhdEcaxoNkXZjjFbdGJhus9fSEsDu1P9Jgr",
  "key37": "3JK2muFpb9cbY9hCeyWKJfGtzjva5eYQuKrgh9qkMASv9yjtKDL1tdpdC1MoTd1soJSdVA4X6ybPy55maGMSPzXy",
  "key38": "2CmPNnCYvHbEUWp43Du6b21YjLXniY9h13cciauTdXffMjFmh9gMR9bqeZcdUAhgT75WVGimUxAPQWbNciiy9Ee3",
  "key39": "AJhZerW71A988NLNR1EbJXtG26GbETvgD8AWHU7R2zB9vDcRWr2pZZdyz8mdvoWNVJt8ADxVk9BHsmkEr1Dx3zc",
  "key40": "GsEZLbV2sVBg2kkAoVdLTjXqvXq2PVDcYefEKidBrDi7Fk9gLYcM6omtKXLQfP4n3Fzpv6yia8xzsJiYdSCunr6",
  "key41": "2FDZypsY6ZH2EDXiAKjtGNsMM5qTyVpeDoWRDRVcGJWT8Kq1A4RP7BuEdahFHWU7H7hZ21VZcQUBv3QHxvU8pBmd",
  "key42": "34dfYxfubbMpTehHVVgETvHnciwatHqcfvzVHVERsndS9qRsdGriJAHRkaUad1UC8azs8FdCJ9jjtDLCxzprNxmB",
  "key43": "6cvLL7596XfyScLwitRvJhxFqQyHvcnAeRdbQb88dHrEKX33fSL7FLTUWwKbmgEeqLWrGkDZExqJejYNDFKsZjw",
  "key44": "4WmELxHrPAQjsS11AroaUDWrAgGcAh4o1V5ZPVANdSnRUjDp9mGNDUtALpHPqbEG25qspxu2bjftDMTmmPYnmdQt",
  "key45": "ukhmry74C9UnAMSjof6hjyATHn4qEYqd1YLizWgwMCpEbtwvGygzsGYVZ1bEvY3XK1J1cZAHsSvD9giLKnbi2Kb",
  "key46": "3hnYXLmTM8JVCrnDhz7qmuznVZYoP9gr4NragFJ8mwGMuEkribTrS2erzrVAuvXSr8scozCyjXLVSZNdv8c5vtvx"
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
