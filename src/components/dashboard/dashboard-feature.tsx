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
    "2Ginfazyfr3hTMkpSGhZ8zwmfaytXu8FDFjiB74fLddSD7jfiTkfsANgpXuyBDqFuafrKccCeAssPRH54QUNhbTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44tmQEDoXqZmVwjTekbcrzjYfgpatJJgqPQUnk5kkwYAPdU7G6PHtnNBb7Eu8F4bUGjCopm8T4NZvwmFRRDWfdqS",
  "key1": "54vHLkTR4DG7H6o26X3cq1D4oyieDUe6RtzWTLvPyH3JUC9i7W2Uefcr7NKpcPWbw4dCZ6gNt3fu9eTtHFxqie7v",
  "key2": "4YuyGgJKxPKgLoS53UB9kdFSAr95N4623R9ZDiUfsKKezy5Vip2QzBuarBM2vRgVKhaRCkLLcMA9r7p3rsHeHTxY",
  "key3": "4QPsqNcN5Aq1ku5X6bmEpXj8jAwPacwRcfz8eJWZxnxLvXom9gbHB7tFUtfKwXB8hfzFvyFmMyQPWCiGKLuPYPSs",
  "key4": "2Cg9iY9FPj6dLe45DoiPN9gDDaHHdfthEeBSyXHZcWqpBMtYaHsCS6v8b6cZsK7ppaXW8wjVuNfG9sy16GVaLwhi",
  "key5": "55wmh4wsdizEufZqQWdcBKYsCThAnFSGkbAdHMRfE22J6Bzy7i2P7nBaMw3BRQKS3rxSLtLYQhnjqEtgJEziXsjH",
  "key6": "4zYCTiMZ5SAY5BiogkYcx4zaaZJrJH9kgxRo5JercjATPwwdrAMJx4y3cogv25RmW7AWDZ6VPE6Ve42CEPjqZTvm",
  "key7": "3Ut1e5SwfCyAofeJZZGYRFWzF3HSwAMk3QDi9L6rTHeW3NLqtdhChN8VE1VjB51qByjmKBzmf9zyBBiCqeC46DfU",
  "key8": "R7L9x5KEvj5z9XQL5dr9cBUWDC5dY8dCaWzt8tYC2J3DXz3qSQ2Mio8scEcGDFoPj87Zij6TBovGMY6E6XoE4dU",
  "key9": "5u9yXc32q8MtcW7djwyP62Lmjiz7R2UaCkDyx93pVyhi6QycX93YfqodoWr4MCyaUTDDwEbdnCq8GYPHRSPhiQsZ",
  "key10": "274Lxx1LvE3LJBxwCtKQM4fpYX2sftEax1bWmqsXYPchk5N8BCvxamQCyFSThdVYRQbP5JDJ6GHZfedy5czL2odR",
  "key11": "i1wdRdY2U8RPkh3sRdZoxKdcryY1mwfkvcFftenbJ4BNNZAUGKHKxRcffAbE6vdzNUqxajeCvzECRj1Cymo2hAc",
  "key12": "4K37gTnpjzgkQioUDVHAgU8bDpkSiTpj1m2ux1Wz7JKjqVXrYvS1YJZ4NDSpqwVzFtpY7z5UwKCWPbKZUUa7u2W7",
  "key13": "5XmqXomnDSgb4AqkhaLmzCqUKYMU1cxeiuGnrSk9FwYoLsgfCVe9ZCYff5uAFbJE8dR9z4vQoUW8vY5UuwLhJPcf",
  "key14": "4rxCt5Q5PJWeJ4qqAoVzdXSxU5gKHxpMbk8wYg83XitEQAcs3cunSdK4BHPggc3VSQiYFDCzziDMzBJPFw3jwMqV",
  "key15": "4eDfbKMyU7rcgGwRumVQuccVXHF6qLYF5pSyMkU7869Y2U4YdLc7zMdHvNnwnNM3K9Rnvp19Xqcr1wwAxshf1DJ3",
  "key16": "3r9iLnVcciyfzqNTeVerwrALd8mAdDBkFdARSz5QncAPoanFGoN5pBALpfFXbJ8pLGhLy1jVbq52HP517Zn4N3Wc",
  "key17": "3Mr8TimsLS928thN6yyvHnNh5mDd1tL9ZmAr9k4gNFhgpd79gmfcDeWk1fVFmEVXCNoiBsGGsimroihD4FxLN674",
  "key18": "9aSXK6hXMYonvAX6HgDLv9xxasY9fo6aCGuataXGtTtZJgjmm3GPrxmjh9RUu793o35CUEr97ud2UXYj82mM6Tb",
  "key19": "62R2hqKtFsrmnMB2qLLFrhStKnf6QLkVbJpUS9CKG3Xh5LdHNQXxjNAXWuhoiZa3LFuunSGBZRQCWerdyUH6qzXv",
  "key20": "varJViddrWikXB2d5bEn7JkhSVHeXCNVdULesGvnc1gh9sUmKVtKBNaAEfeg31RssftHMfC6jyvSSoCASsAYBMs",
  "key21": "4jDoPDdqx7EHFSmF4FR6ZnKz429bGRno6PpMHkXumTHcjDrxqgCbz2V6EmpzvPyDVkS1BZ7aPoEDFExgL17trcDj",
  "key22": "63qqAML6BfXhLRk3EzVBxwhkGB8tntqqjYiBUe9mECf6HbroDA35FYXr1prDSnngyeRd8pieP4xcoWS8VKJ6W8PZ",
  "key23": "3FfggGVCKdRzxLH3g4s6VzvZQauSoKjJXfbBGwBD5bXtUvKxksfs3eHSS2D1NsnHjSPdK1jRc5GBxNz8ek93NuhM",
  "key24": "5aJou7X6bCCjcdQ89pEghQbkmh2caouSfVRTzahp5NhoEhJvsFENrQJg4cH4ZTUoVYANB6VKx7GZw1AVskttXMGM",
  "key25": "66zGfyrEe6snkT53JV7zzqewy68h3EHs5xxx6ZA86ydPkpNJxm7HMu282uw1tbyHjQERJ5tVmUGtHRKvyxsLMKM4",
  "key26": "49qjGiR7VzfNHeTfzCPRhGDw91PS5eqo9JaQYGq8H3PzLnRvTcsykGdvcM7Xz6XNTqREv5raEuuFpgzaoy6ZLNuP",
  "key27": "4ciLqKtdC1aUEtZHrvoeyzt1aW6Q2MpjaEeeFA6mc8XrKVD4pg2w9W16mXqpQGsi1zNLUaPbJT5L2DvPvUrduC3M",
  "key28": "2Rbb1KtGoNvBzumGxQCiTtH65H9MmEnod6ihbjPseadGywXTemSL26xF2fUupxsoGFvrWrrvy6iuaDVRvFFhw51D",
  "key29": "3wNeCYGPEBqafNi3XM3EqTpTuEpFuiAztSAK9wwQmxzM7wXwuRXLrtuTMWBp8ZEWNBS1SgMhvZh9S81jPj5HbGs6",
  "key30": "39qYid7VPW3Ae778BsfGLaqru55b62qS1JmPn4wMEmtLiSDeGnM7JjA4K2757fL6hE8afb41fv2MmrinMf7dwtS",
  "key31": "5WGnN66S3A4hR5NVuddjEo2hisFKHUULnvvhuQy4NxxsN4Kb68zfXbjQZEeao7vnpxjAkTdUbD8Gpie4NsZaDq1K",
  "key32": "4agmjuAeEMH7gMKZKNGMf51FRE4WTDSZHYzoU3yTpJx5UD87amawcoiGpiR8m28V64UdiQXqxn8J7bjASJsq79dG",
  "key33": "4Rkc39MTkjgheEdUfkFY3vkd7WXkCnpSpRiYM6kviMZQaZKHvTckmfDDNSEupA4oeTCwr41TJoD5d57QoPLkTtfq",
  "key34": "2n7GWFpTPy2EJRgA3ou7ZQuKbyHDsGNmEREH7Pc9QaMzDR9Y46q9NDZiWB5Ekk7KhNH7fCASCtC1hTq3976dBGqT",
  "key35": "iwR8jZokVYbmtKybb6fQrEqDtTymFgCVXrTEUdNST65a6SwAZujvQhdqUwsweJxv5xXg5pzyiwefXKSAvMbnLPU",
  "key36": "2kQu3p156UEonbEspCfWosJ5qcLgu8EupSyWp5tNeKkGN6VygAiWctqJZFLpHCBnacanaqFFUS4PAR2Tu2wGJaSZ",
  "key37": "3VgdH8DRvk56Pq95k5dbHmBgoERe2LuFW3i3BoLLpTSZxue2Y5oxgmBAXtraYKPH3tZUZw1xrAJji9Phu5AUqyNu",
  "key38": "4mBrxdxFxurkdRq1HWkYQdSC5dhK2kA5xiq7zvkWZtQPrp7pV1jB1MMmYezCcrBpbF31zdXGvQvfdGTkMDSfLwV7",
  "key39": "5JTnVe44hFie4K59yeaWCge8qRLDQvMZfC8pg5vWyNecd9qp7Qj3Vb6ffUwAoZT4niwfNdKUQ7qQSEZswcQTvQ6B",
  "key40": "LZJsaDzNDLUXS1ywsVnmaFyEetvzjw9bBB3ux6Jw3aR7agvwwKBMjmNS7kkbz7Dqkdqhbod6Wj3aaWdN2twVm3S",
  "key41": "3RzJsbmS3vTpsH2NTUGxdKgCUxSggjxLhtdW71u5cBhocoacWYN8ikzJFHctfPzziouuAJJDiACWAmseMaqnUx7M",
  "key42": "5h5isataRk6BTmRFqe3cxb1QGqsFfNewTMwjaTwGPweL7xDikgeuPRSHvuc1Sps5YrSCFhLsuo9jDHgz1G3WcGi2",
  "key43": "4g7av8moqzm8Ma6jGDPw9gYcvyDatxDTQr3nZjebUrPacYkvvhEyTp4NGzvVvJqMjUrQJRjhb7uicvE8eRwfuWTm",
  "key44": "42NjQTruYT9nQzcgXDJTwYEK6jwFXGRQSqtun3DywMepQgDb43BLXEJoQQLafPqxvPP9R7V4Ht22iwoL9fb6e4q4",
  "key45": "4svVwvAuFokEHQV1UyRXmCQE8fJYvvtMNnQUQnVhqYMBhcXymtLosU76sAHdiHrP4FJtTHP2YQnNRjZkQn6tJRAo",
  "key46": "2R4wwbJqFNk6a9ywYXrVLjgBeV1V1Ez3Qpo1dZ5hDJfoBDwvkZwPi2a2XZCUndyKM9JoyLbGgyPPqYPyb98i58Ux",
  "key47": "3ZF49H878HGv59VQWzKng1UyX55A7sbS44MmXyLbeBSuJnt2tMmu8HESUGhzTqMcCxQQee9zfTRYiUgBmGVawpo",
  "key48": "5WCD3bpdz4exH6gZ6LpCaqeD33j3vRmBY2NANXPP8Lzp1dPhgoDoXnuvM7zUKL4k23LQjMpN3hsTvVejb22KW5Lo"
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
