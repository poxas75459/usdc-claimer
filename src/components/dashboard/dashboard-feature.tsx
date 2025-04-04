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
    "4syFM5izgyiEtFxnLwreyyUjiue1wJbBgukBVfXr4y8MiDNLEaxYpY7swmZsxb4jw4b8wyKMhdU4LWaPz6VQCMJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxwDUdHALXWEDaHLSgTYbMbPxCp7HDjtaptrMZFxBAGDT4rnpzdWsu3hwVcsrjroit39ep5ZyrkVqWWS47GfX7z",
  "key1": "5bVYgjyd6N6Kt78CiFRARTwk2WFQKuZvdAK91gAV8yZWDo5LTtdDSV1EimC2HwWWc48etaweLSrYTJYThjJ3v2Ha",
  "key2": "65UpWNX9EdQqxz25MuNuog36Adrav6rhQ2sFE77RQfZPx4NipCbLfPRLhS8mSoJcfRJWsnx3WPfhgL3Ti2Zjf5L7",
  "key3": "2srW9ePrU7diZdix1rUGCohLr4yUSQbCQQ38G2hEsaTWvHvfkyCQkwkYYay36DeEECoRvCGbNpB5DJ6JvF9a1dD4",
  "key4": "5uZHptmpS5r6X4fsmTD2VL23YQ1wP2UYaCpM7ZTVKwQeJsBddGJBHr2bAVKsraSodJYMQrsaaPyjd3UDLRBALdcS",
  "key5": "MyxtcZi5GqsU4ei13qTkb4yssmWKKpfS6uVcjL5nqsGWGas8qqP2PHY7FYkkQ1bThYz4j34JT8gmzUNNGKqPGEV",
  "key6": "4fLwVzNA19yP7nJNxoSENx8B7PnbKfdkiydUtVTNWchXH72uaST8VFoK2HQC4yt9NBaUQVCkzJJRRWGFUtHbCXAR",
  "key7": "2Y8xHP7FraW857fF8fja28L7ZmkmzQ8B7f8qQ9xWdHBhqJVAdUd5zQ5GNn8PypCZxWCaY94FY4BwKJ32sjWQB5dM",
  "key8": "2guc36mzDfRz3RMQvYVAUAJyfgJFncf2TEumJYhQ46t2tFo3njBg1kMCxwY5EQvm1Ep2ELqAcVfVdyaW59ZoatZu",
  "key9": "yn3cJtfpkReMJpvXyojKafKbdxuPuGP2A5LuGDGvEDBav3sw66x3d56AMkc6VYELdWWLdztrdWP3kBpPLoXmdTg",
  "key10": "5aPz75B3T3jk1Ddg6YrfPUPcYpLzjUA64ZfgcLXLihsitnq1R1ibKeDFy6iVCLeXjMSBAj5G2gT6XuFC88Ci4J6D",
  "key11": "Pqp2uVWhwhFadS73TrsU2uR5TUbnkij7qHUqxHU4X42x8dKvqzV6rpG8pXxCsUiVuJ8sZanMcbWAgW61FWsooHP",
  "key12": "5LSiFuPLt3exCgtdDphBcX7GEMvsBLjWVvT5BQ5VRAQUFrUhFLqAmduXU3nv8pXEonJmqWszyhowLitZRtdj7nBE",
  "key13": "2jkazyUdm55WpJXpADyhqDvBiAkE85nJAL1Ho1goPrvvzSj5n175JeGNNEMchQp1srMiLtaBsREGSeyciH8eouVG",
  "key14": "3UnPegfAJDpr1Cs7DyAb52162HHiax5fHS26meJsgjyRmrNdvMj5XBkmZVyGaPqGMNVJbSwHYHXciK3BxLLQCj4N",
  "key15": "5U9TJuCdePD7o79Y5mJrLtGoFY7ZzAHqwDZnzKHsERQ7KszTHE9mhoE496ohUHa4GBFkMVNRiuFUqLq6Bw4HXiZ4",
  "key16": "2bdKKXTCQpFn4nV3HngGAGHKSfEaa1RDypXH329Vqi6jS2CSeuWfH6kV7SN8PeyD9DT5iceZWBY6zB2Y4eQSXcQ5",
  "key17": "4Ax4yHyWECYXTmXQ7TntAuRRc1ffD6zhJFM3Jh1N8nFbeHHoZ9sYE8G3xT2jqHWPwhouXSPpyDvyDcF4P3d75evn",
  "key18": "2BH454MpPdvMZ1xDvshjEdNcHMY68xZAyqJ9YRdQjtyUXi9JBQvUWWoXhjmxX93WvwXJ9qDpV5V7JHZMxQt6W3xp",
  "key19": "3f6T2J1saC2YHfuuZ438XceG7CeFfzyjHv996v2ZgtLCUbGNk4w4ke2yEuFXSwcFwc2fpPsv6f7ZK6hpJqSLdDpR",
  "key20": "3j3PxLbXhMeWXqpQaGxxTBvN8D1J1MhXpmQSAoHHrypysyeHJqRfcCuwuVtdBfcG6eYBRM9dSJTdF3rYBoLUKoGr",
  "key21": "2hRDsMCW76erFGzKjZNXX6sRP1PYBXgsZXaqQUW8FVwktFKjyGj1eki2WHJVWP3ooRmzoYD7KBCddPrdWjBhnt9p",
  "key22": "4tWirKRhwmC3Ad5CmigrJqGpjKkibXSKt4Fx8ZjWXTRNp5WWnLvTywW34qE3MweRYN47o9xuJsKWedX5ai7w7xJ9",
  "key23": "55SDVHrjV7vgWmPE3BXR89TPAZcnicJZbLKWeXwzM9FPxQpwxaCQZfhP83TNEb4hdeHce1nb9HrBF8oQwoMgrzoz",
  "key24": "5xp4aBnHy4z7HtZ4GbccxyqmvdGuQmfkgfCHTgjyXUhujXv8sMusj53eNjk9nWg7RjqpzpqT7HuTDScGsx7X6vmJ",
  "key25": "34MwZADMkWjQSXAMKcHZmBSKdNjdBefd4vbtDSUYUozbPJPsaqvZFDYFdDhbid6Yy7RDJyLuKaKT6AaHYNguWXeC",
  "key26": "f353EUgm8PH5aL8RZqWrEWfcsSrA7h9xjiSuy6mTpwmX2kD19Rf4crCM6eLdkKbvWSCaRg4CqkPiZ53K4neekWZ",
  "key27": "4Hb79kQq1aZwYT5DXXajBzNggNZL6ZvMFsunCnzhBWb7pt3GgtJM6XSsjkBLjmJX5CdRP819xXCJRsYTVwFj13Mf",
  "key28": "56eoxNKM8dLCmwZnp73pQ5UJqprDFGeEwuB5pwnYq66pUxuEBFpzy7sfknTbSNGNVU2EBgTV3K3h4bSt5HZ8Gwsf",
  "key29": "5qRtpSb5nnCiATfsDmYiANfwivMrDfNEQFoiK9d3QEDosKhcbUbCvAdRQxtjQqyLy1qsR1tFdpkCuBcJexPrDqpG",
  "key30": "2xNzDb4pRjq4DJjC6MMw83bmyyJQTRdUkX3ui9aWK1RhQkGes5vZEd2hcH7JfhRcFWzN8iPF3J2AvPePAffLatta",
  "key31": "5eiot3Q6VkZrKjRke8ZFVK1a7aPabtTdJ6uj3XYUN53zJznbha1mNqSzsoXPAZVQQMCzzfYViVbuDTtbiCpjHugF",
  "key32": "5GbobHcAcMXPYfRtdVYt4fZFUZD2H8Kmy9LSnW3CMt6SiaBoRQ9oxnJaYTGmKJLKt7xyzL7CRWN2ZUcShZXDKvY3",
  "key33": "48PjmuCwC2ULrZCe4MSRRkNSMmfLnZSXGZLMZdvdzxtDYH2ZEnKjDTYBfhLeVmkSf6dwW6C189GLyUz49mAA22qT",
  "key34": "YcjEzieXxWt3nJR3Nnzts7H9RrF8pFSkbkhReBPqcyTAFYHyAKv4iT9BGzZhnjptif2cfUeGsw3EPRMJZSNGazV"
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
