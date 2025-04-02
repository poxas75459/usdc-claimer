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
    "65X1NEfsB63VnR1aMpxe5eDVypjfXiPEX6th2J7RDdVkE4yvNCMFbgG8DN9ej2iNjAUAsF1Bxf2tcRuDQ7poWxWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NR9AjcLzJQ1iqxRYAja9QYewRxUc8Dp1LF7LkcJVjCDyDR3kRKQW9tecM1nHjMcsShgVKeCrUeaVbHheM2ZytC3",
  "key1": "5FaMtxGkpxWiV2ArXA5Prh3mVqrwKWH1UCukttcsfpe3JwAT3Sw1VwZEqiydLbQDF5o85gtUQcqRfLaZnXC37z4H",
  "key2": "4yPZugfkWRTcVUtZW9bYGYWSgr4SBhqjRzJeGokbJDYW2HT7Pfv4rAQ47UwH5qkE6BsuAQGaRexnd9FGwgc585bm",
  "key3": "4Lv2kjRJxEFXb9V3sfDPnFAwFFc6wHWk38QJg1o2gRobm7qnVZyZWwp1tPPuD5qiUFt8pe2CxwUarWaLZZJ6tPTn",
  "key4": "2LQ23CooputKaWaQJHvNaeCkcYBhR67RkS1Jp8sSL2JWBAJmcAvZd95VNbQUy5bRigCsMBL4yj5WfToXwZ7P8ApV",
  "key5": "V2mp7rHGMCBr2yi4V4Mr7na6V9VQ68tQYrzZN2s1oyBGuS8FC1xWrePVp9DiCkkbLCQ4w8dHfbBGjjPnYdcoY9n",
  "key6": "3TdgmrA7RiLvQZsQB5U7Xi6HfUUtcNDt2NaPJpoGyZPgUpnsqsHWBMKB77BdpJu9k7Q2xBS6Ba6NZrDc25VZtDCS",
  "key7": "4CZc1sgHNMUTDA8jKgZ9JaAd8pBpYq5US7bMTkqvycApkLqh6jdazzuHDXXPz7jrpT85fds9VMhM6XV6xCMh2adJ",
  "key8": "dRMVEPzEXdtHY31w2bWRzPd8oTLBnCnnYDT9B2WfNwQKgcEhdKs3juVJnU8n8q5DdSThZZYrwYVvd28dcLmwiiv",
  "key9": "62E7vdni58fGpexR8NhJDsf9RhPYEjU9xvjsb3RQr2JBtZGCsysR45uANKHd7Hm1GTt7Xq5Ye5cbJ8yCy73cqXxn",
  "key10": "4jYq3gAu9j5a9bgN7PchmLLLKLCuesBuVByZnJtMksNh2aQwMgudchUDoSHzs8U5L6bQUg4UpLQfSGoMhtExmDS4",
  "key11": "Mw3X5dU8jb9SsXaALTpwwCFkSpmuZbwwG11oNRr5qyPC4daj9cu9mFYxYuvGmzm9H6PsCVTLmDXgTJD4MiWgkhh",
  "key12": "HuR1FcrXPdroKLjQo5wc43cfEjy3G43SeFX76LNWinvsFg1LSM7PJY1tt9kp3iLZfmMwrtpeUGywajUCeQz5Csp",
  "key13": "2PQrEChU73tyLbVuzSZXnRuzr9WqTCmE2YaeBZFpse8PNKaSYvwMQsoQuBR2mEbTKiU2WU4wFuwXaUnq4rXreJXu",
  "key14": "2FYCBFU6vhmrjNh2a4mqfWxNsraUjASDHkCQ8bRb5F8e2B9TLtkZ9UGb4BfppFHeJ7KGWfoCqNi7hWkSg6qQ9xtR",
  "key15": "2j6jEfWdtpLPYUzgowQ5DR4bFQGJD62YKZbS8pqcuE6TSZDHrb1xQJQHf7uHNK9gpFq6rgZMpTPnrfSduXqgU4RN",
  "key16": "4MQ3yazr4VY7ZNYzxnEArAyP9f25esaCn8yTuBAbPue6tSjEBP8gT8GEfuPrqYEhPdbeyLGgdZRkwKinksZDjxtX",
  "key17": "5EAaNqjKeAgj6u9wEDP3nEZy9WypVYTCeW4PU8kvcNdGHHJmiceVTrrvpeQMSN76HJTkr7siv7dtUn4J7UpQJH7p",
  "key18": "JJ8smKkUveqe6cxoV77zcgnTMRuqg8YNizJvqLo3L7KsdpokTjJChoDXBAVjdBxunFTuPdrQtDniA6RhT2Lo85F",
  "key19": "4vn85TRJoPTZeyT8EmJYkE6EdEvxN4u7ZmG63UL5zZz6nJbauo9CFeLjDH9TTrRLtY7TGbE2Dp52rKQAC6NxsVKq",
  "key20": "3WEZaBbJeS2tqy77US8iP6469B2u751ayWKHqGeV3qfKFzUg5GXtsd6jjrKK2FF6c38UyzSNMWW4esiABTWuAAvi",
  "key21": "4mSE4Goca4hkdDnGgePRfJrQDtXuFuNKi2A84bQk9RtsqGVYM55NwovEuWJfb6ApdQWjKDzJfkEgEvuhG4SNtvsG",
  "key22": "3EYFMpWbfmfx5zsnirhwsAhs84R8iR9ZXCa8kYmEsPTZc9pha4XDeWiWYpRQRUcS513HUAUHqkirqxjXH92mUiKV",
  "key23": "38CV3EfVoqrghqpKtuUUWiJGgEZe8HiqEEsbK8FFoxw3ZsyaeVftLhvENSgGFtcx8fQ8RufZ8NSBNpgVRMaCEgWS",
  "key24": "4dMyp53babviRuRJcCyphSj4sXBRY8vCvgoUpWZgZitC13JVK3ofmehMRG6ZNECyK5LDzDS8M5zixx8GPJSvcZAJ",
  "key25": "4SH1E51CJjTPrAdAe7CT3FphFTqMoLcSMj15QqeChirYwaVuuqeeXAs2TKUCLtUUgWQPi1TCkWEN52vXLkDXRVCc",
  "key26": "2v9BBghagDVbTXYFmL35TN7p4qk6spVkk5vBcRxC9BhpQfDQQiUfJvy1EUQo1Wgv6zUN6rV4k385xi2XdWfZQ5hD",
  "key27": "43cPqcHdsCgpMLfAoDRSapTnZFu2puhji7ASJYtqJD3S5gwWPJGWUiLnvcgwv2syR83bPRuqEP7mZUNrUkKfaNVW",
  "key28": "Lw4HAz8f2cRPhg9FhfGHVngNJedN5j35UPPFLTf49qNU5BXATAc4Pe6UQK3pJFvP55eH17RyipiUdyDEdpc5os7",
  "key29": "2ADjz1wpyW2LBpz7dHE2t7YYZYpYLmcbLX1psGXTgzwjPqwUbEeKtrjM6tWoUFsj5ySz51T5f1h61noiV8RSYw2J",
  "key30": "3RAYWUK2CwrQc2FwxNFR7Qk7xQD22xdpGd96gUcSfRcM1C286aJqV7g7d3jeDWg2QsFNfYLaEEqHZ4FcNJm11MD",
  "key31": "3V2A78a8XcLjt1dRCxgotNN8XrWqUSX1S6CQh6toUK5vGRdpK9phpiVU5Uj31sc3akB7uWT2LDcZ9DaxEigmSewd",
  "key32": "5f3BZy11fWyF1k8CBnwnimZyjfqkyYawGAFXWW9Q2hiyWCDNdbNa2EXY6iz9q9bEZpHzYdB88uC8kfJNcj4CBY14",
  "key33": "5g6GeWGRWE8HQXdyEQNHZQc3yFPiMUjpYRtgviJ4BhvkCnuUGVTrKcuACFkC9UKRCSpPVu3wBNQPXndmruNhELUc",
  "key34": "sEXXNAn3suGVX3uE13krc58t134kgBFgH6Ds36dAw3N14H2TsTJ7pns46d4BEE416S1K7o51UhF36YGn7Fz9hSW",
  "key35": "y7odiwRAZRrY85pyHXkcYNDrfFzs9Lq15PEcZDtYUjoBGbpoxif2tYHfsQzyXiPdz93NnbG5DFcvs9To6JetQRC",
  "key36": "reURyFeJ143SuGTAgei24AezT3Lffo38ZwvjM4PAba3cAXFxjTjKFrVc9Ur3F3YqkxWWjv62E1R93ZGKLtaNAr7",
  "key37": "3LQNaF7mFaumj3F9qTneHTQ8BCE1uyaykz8bavquKcAqrGw14iGM3KbN3deAB9kR597MW515izQSCQ7ZZBRMwNML",
  "key38": "2CCa9AoWdZKsWUwsCVh5j4eYE11rb3hozRrX5N44AEL2NnPATSDbQWtt27Li3U241wqmE5sBucDT6fv8v3YturNh",
  "key39": "5VYnjN3Tv6N4xumCyXPRGETdnbvnPZkKEDFyuZRdEfGa7JMEpR1wowWNEQWfbEp8Qn74QZHq1xasmmChVhAn8ssG",
  "key40": "2dLFqvJgByg2kTJXh5yKUVfsq9pQjdU8ixwfrJFK7xPrJgGrbAkfJEP551KCTVxtK22mDcuxK4viC5etayhPwoqb",
  "key41": "5jVhMmZ5PCtTd6YjxoBGqBXDKXedJv7KmfcTF9ieZSEJk8b6GvgKYKbH7K9Jz7Rp6zFspk6qVEWQRMNQh66xhnRa",
  "key42": "3vm9CnkKTVU9eNmEkeTgw9BSQc6WhjcWqvin8GzPPeK6JQgCer8U9m1Fg9HB2bdsViGjg1JMncg6DHAUUgFLLM4a",
  "key43": "4edpsugyMjRXUMmUrz5hE11jLgQYuwuALuq2jevx3hrp3T3vVDVgnLicxugdWsLeRJyDCpJcGVbSZqnxhV78euhJ",
  "key44": "4mxKf113dasyWov9krwh2XHZWfpmVx3y2f3PgknNoPnTCbJ84PKzYJWk9jHimZCxs2VGQepEpT6XkecCVQVq1yth",
  "key45": "5ZrRkvQEpmoLAaAnvL5vU3h1fPLfzbaYasWbNL4Re3BF8XemmL1SnLkwiSH9h9JHBDXGpRNsr4r97Ato7d2NZxfN",
  "key46": "4KLgXgt5QH5f9hHpuT7JFMiynYpdQLBoTHhCjUEU7TuuidbVMhgQotLnqN288JvSXF5uKjLtbipqQ51Ttd9jCep8",
  "key47": "3SiCr6g2Ss6D3dLQZPxBYgJUCn41zhuZ5APnPLWQPVhS1za2ePjcRKGGHecGdcqfU93tksno1TibM4beMm1BMZBG",
  "key48": "2oKhqSyWDnuhkgmUFZKpwxqA4b1UrSG6dVfYoZa3FqUio7Ey3gDhHhXTbeTeHZNvdP5zpyheHhM1oeveMRxSLryx"
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
