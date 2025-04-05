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
    "52GYx99J2q9wndufnFmyTYbvNn4ybAsUKZWrJzqTzn9VbYzqQWstDj5WYtFrWgmgZwez3jJWv4RGmsvtb2jUpKyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uCAvh64CFGx6ZdmYrECBetfcvDhzWhCUzusEWqhE3h2gbbCVJojZVzUu3sVRh6EEocmwgVHC7WoH98jJ2HtTPzJ",
  "key1": "5nsZ82orb3N2cVhimP4NQZvKkBu13EHzes9JN8Y3yUKzB4Cc3JMbZyNCd9Ly59P319YnXoH6VJ24SiQJLUGcSTLY",
  "key2": "54UDUvR2XRh9QDionpMEM8cnJrZu37wLrV842EiTy9zbAuWFbVzqj1KWx1wEH7aTBetFR5zsZ9oJFvPN7fYvmycT",
  "key3": "3LLqeMmmuaoH4yNbSEN7Jr6t7KVeyjcFsgB11FnYQYymnLY9oHAbPzM3WMfmvXr1mAyviXWWxwkjN8thceRCzxpz",
  "key4": "FucSSdAcxwDhCv7Q6BBaHuvygeg29hkLDQjqXui3BLjNwvLKwtJ19NX4iEzgpAimTNVKNGtZ3Qw3JxjNPaebbip",
  "key5": "64J5dvJFm5V7K7TW4Rv4Rf9rXxH3sxud64bRemC4ZZS3aT4TP5u9wV1z4oaUC4SF4f6uMmvatPD79UM6FWZHryvf",
  "key6": "4tApd4BnytVbqUp9xZ4HZ4q6b1brrJNTCNHHF3Pus8roZbChbFD672sXBEmUptJmgpDtokxgsGmXAyz91Cs1Whfy",
  "key7": "3rE56UUFLfXe3gwoREYGv5CuPLQ1pXqFQsjaBp9xAZHTfqH7vdhsUyQbqpSPqZA9atgS9werkZGoxZjpRjY6mpvb",
  "key8": "8EtyiEPEvhEjbbPAxdu5WfxZdd8Bj8dXvBVn2SUSMKf7b1gQee42LExkhNJiUC526Db5hhLo3hi4Vg7P4xGSxT7",
  "key9": "2UgHSMpoQ2zRjkqXJFnfKiCyCUz17XmNFefBtHqcuMXY61Kg6Ubf4o1asiG4HuYbt5KNBnAyNg7LG4CAj6gzr7tW",
  "key10": "2KG5QhA8JMtaHaRsmnmVuDMmV8xsaV8LiPUWs6igKBNsFkEXBUXrqjdzTeJnz4bv5EW4p4dzPjENFtYKkuer2FdV",
  "key11": "2fVyTDQyVAzJf4gUAj9CrDM5Fb8rR2kXDPLKEhauUmS5FFKwc98EqvmTrJxP97yLjCXnZtC7rBEtr2TGdMP889EV",
  "key12": "5JvmSLaACv1hegA776AYb1PoBeNeHn9cXxJhGUYgeVYFVFzswUK5kLGiTNKVWDjFDQeMjTR3k6d4YKkjsLDrwt6v",
  "key13": "2iKLA8omyK7oMDpjRRPf8krCt1Jn1Mf65416WCRhTeaAXeaPvDC13iEfhv5k9zKhCrs6kCRyPioQrmsDokdqzrPA",
  "key14": "5YKzHjdHLFEvcaewZ4EjVCk1ve74PezoZGjvAYtXuzJQS2UnzXkp7nrq1HpKYihQHYNesr111UzFGGvQBvDpFYGK",
  "key15": "GQL2UV8okUjJFiefEXiqQYWj9uE8VfuLkduLRf74hxRPcQ1kTn19xttiXixSeGRy4w4qHwjKjaqeBVmv1ES7Wdp",
  "key16": "37GQLZ7JWkF4rNBfPGqLBVG7nPhUQaS7Gkkg59GbiY5ipMJSzP8R37LWYeQ4LekJZD8NnRt5fBYBYYEeHkyPEAVA",
  "key17": "3iqEYbHCEruGnPoDw4adFku5K7PriAd8kL6jSXBAD6QA3o2auCcMTWwwTHU9qWnEufjuJeqrLQfJjEyREsjpXUng",
  "key18": "ULpxUZA1k6i3LyXutEjZeBPtcYK3MPn95Chgm6KypBcwNdiJX2ffJiQiTTFA4JqiBSLdyVVpq97P2psehXWwFEP",
  "key19": "5HWbh513o5JRNQVggr7qZEh5yYbceTh47ur6yCaxYsrn4Xkxop3K8HYeUnVNZp6EgKK5USVkfe2kDhrhS9hYaha9",
  "key20": "ucEj7wDJYrTSeqT9UB93dZmsDyQDu9HgqmtL4nrqseQZtNb9Y8Mm1iS6ptf9bxsE5kpDiD8iekcr2XMY9CZF1GW",
  "key21": "hEjreaugLcyZfbFhnjHfmoZRbCVX8pK2A2hHzQnBFqHza2rXiDjwMztp3r3vkPcb9ZTD5RrXjzgonaLeN2Pjsxb",
  "key22": "3v6XS9H4Mcagy6ueRj2wb4f4kDJRrwe81jY6woZckeqo1fza2QHKTrQzTBepjrfZ7HwupVJ8k5FaBNNND7pxrsga",
  "key23": "2B5U5HM6fii2iJXi1ReLvbFsYv6TYSf2qy1WLtBXMFDq78Umy4yC7pTKzmtBRPgSqWsBEQ5qB2WvQ2uAQc22M5zx",
  "key24": "4SBx5cNyG8RahmUDqZVuFoTTEtFP1U8yt5c9qi3swUJfzVW9SWXUPBaPcVPKrvdd87PkQzUps8LDWDuxgsqiya1X",
  "key25": "5Ln141D5oWRxNo6JhrS546bYKZD3mCMCiuZ3VQSseZdb4FfSATyManssFurshMM1MQyus9xhzSV99hagHok4Lfo9",
  "key26": "4pySdecw375iXM1DPWqsB79kX5pypQfSrhDs5DLsy7Hv21GdhwvbPMQK9S51fmfwUyrgTfsipEGnimDjK1wPdBvt",
  "key27": "36zJYiCFu9apoc5A1EEHQXFPH54r8Rmq12azqVgtHXt4Xywf3pC3GhDAGpR9oKsjgy51EnEYmD4PZ1Xw7vsem8o5",
  "key28": "nL6DVuy8gev1eUWC4GS799d4iVCYi8S3uGmrGBpmVBovPH4hDd1pFDKCqatfAtsH5yJSAGZkMFdhhc9Ubv9o7Ue",
  "key29": "5Rsj38fg83whKzTY9qHcGEThCBu31uVmDj6Bdw6PH7y567d1UebKwzPeQJQ69WMqEmpfkpjQs5iJUHevYNpLa2m",
  "key30": "3epYh4BnN1m8ut6Une1UkLARULDLZCptEm5r17nZZzVWQi5c6PbG1RvVRfYp45tq9ha9BkzgKsrLHFCcoW7YqMXc",
  "key31": "3qj1p7eefTKJyEj5FhJreTkwuzTwf3H9z6pHYioFnsUGmKVZ1Ws9gw2iMpRoym7pQ9VzsnhVWVFaNz5CEud7Uv3f",
  "key32": "5pYYXJowDekShQmq1p3ThAuqek7vsanpUSfbbHwBgH7nLyM8z85NAQ1r8EgXqhFDFridBK8rqnfS6T9K9WuWsBSh",
  "key33": "2Yd4U7NHRtzGo4ekVmjHaFeMyyj8pKiC1fpqpRvd24AH5dRXPkB6BLgABtwna7kqujovTHUo53CEQKqcSXKXPjzf",
  "key34": "GHactnNJThPZtaRtfTv365Bc886uAMLqrtXCEzDCG5WdkewoRAHJq5WaiMwtorcynwNUbNSPReYWbGTK76ArHfa",
  "key35": "642eV6xCBPdVpPvRwFb5o5jddKexMNB3V49Eke8tjMkJWCayp7TTuC75rVgQF9fY8e3NfnG3cSbkrPKbg26CeKW4",
  "key36": "4ZBy6R6ToHMK9uNfDYK9HcS774K44q9f7NcBGLW2tzb8KiUnYFcZ8dbYkZ7iWk737hcrMJmnKhpVmqQQMNkMjkXz",
  "key37": "R8rfDXktbyd7NSaaQjzib497rNu5c13ixNr6XoLXQo4kvTEWXF6T6UkGUszzfx1Lcd6yL33DyTHmqpsuwnF62qA",
  "key38": "6XRUcuQihrTHEvN8rBK4tZ1jAmEYorsDNPZxP2V69ihZiqGBoPCqNzhtsD4LgqYaCmCqR4sumidb7xw7UBuAUUc"
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
