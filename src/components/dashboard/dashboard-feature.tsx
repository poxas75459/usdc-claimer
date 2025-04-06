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
    "37DzCn894ShPrR9g9EuwPmFKoiYhP7aDRSER4Q5Wt2iEqk6czaax489y9nfbFqCwU4zGRgyh5ftX39NKJj4pM8qY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XqGznbaaniKJqAQkL19ajegDEZ5koEMo8KYp1EUaN9CgCuFw2SPwxyi4fxAu65GozkVcuYF1bpn9PUeGShJfo78",
  "key1": "5qKriiAxAyUQTkyQnJmhF2VmPX4mYV9ikUEpSrtRHeDrUR1qTBsJXW2VBj9Gs9AroaGv42vX9SQPPDF3mDGS1Lnk",
  "key2": "bTtLXyNpQ3KrT2UJ6am4Cc4QNGWpcp1QbLeeRBP9EoLQeKJrVWWcWBhwi9Ub8Z3xdQ7wD5x3nVPdQ6mhAtaf5yJ",
  "key3": "23uDzg9V6kJcEgGF1syg13krd47X9K6L1jzNM2671h1uTrfkcXmcLNJVjukptb8DTFq2wvgGDyE1UpUiD58hv9wC",
  "key4": "3oNobymKxLsgZZhJmTABcQDjheYreVzwuP9x49KizDSBQqE6qRJ11MK7QfXsM4bpHLZf66sUjtMpWxv8EJ4Wb9RP",
  "key5": "5NZdjkwB8dYBQ8hJcXRU2sJ1zgwbL5DppvAtMUHbYTfg14wG4bBLjrYNo8zh5TFU6ihPQqC6HHmuT4vzaFHq2ftH",
  "key6": "hZEWAZuWAxf9ztVqhxStEHNd8yXj63MXDVaoySZxpeK6V4w4i6ByzsNZErLBh37a3LDDLukdpSP4FCiUbz66Khj",
  "key7": "2rtsZa6xMB9wBPSJ6mSwbx4QWdoSDNeWixEDnBjwGdvddciTZUh1qVZfVaZKy1EQQnuJWNgich3UXYoHnL1KE6xF",
  "key8": "593xi4e9edFFRGBu3j5viB4z5PjaXNiTdJfV3iK1Ya9TJhHALatuoRKjx6DQwYtsbpPRgAH5KUc8MXH75xcUrJu5",
  "key9": "4c1Y1doAvH7cG9GfedQUyeCRcC7tZdps3xfaDzdtH4gyUkvEJmuPGaiwhFmsDcRmJbwHziqY1VZiravXLwJbtN4f",
  "key10": "WQN9yT1mQCsqSLqSikArmWt9b5tZzwJzGeCWrUaw177BDucJBT21Gxg8ji2HY4qssHd2UnjcVKJU6YKge4x9qeQ",
  "key11": "39HEmN8pgtZG98coucKrFm9Ees3z5RhGybDtmZgiofGfbNmFFxGHAiQvBSb9pLEq2Unx5ksVk6BUFytYc9mGP7zh",
  "key12": "5dKChqh5zf2oLoA37Fj8pRciiyPgXdggXr7SQgfR2gMVUtzrF8MiukPk2XWAft2rwSzzwoZrUhL4qVHS2f3pCcZS",
  "key13": "5LgyK73jWy5BUBZqbKN1Xqdfvtxim6m8wZAUEJeVB2ukMyYgwhL5Bq92hkMSjQhssPEPTT4K1YMudC835qc6KnTg",
  "key14": "9nE56NwHXAL6wZJwBZpA6mJifvfZQCyfY8LVzNeSwNfPgNKVhS7s1pXQ9vdhYJAednoMwV8dtkpyWxjomV9sVaW",
  "key15": "X6ntVwDxeR66dsEwtMimdDVoESBJZRgw9emCt235ZSsoYWdmM5e7ZgikiX6qPPjyH5u88XJ8rDXECX99Y6Ypors",
  "key16": "2THBrtyaNKXv59yM8YUugK55cBCmtZrL3qD8H9XJom49v5hGPU3tqty6dijXqnmVTpwZF1dgtcDMSDyrcTQNY1RC",
  "key17": "5bFBaNbxWwuakzYJCfANhFXkKzNs5pMpRXmb8bXwPRvwo9CKfde8y7qPHoZN49eXuUYcTGnTma4jbHjkhAHqsE1S",
  "key18": "4TcsKCe3opKZF9uRXF6nsd4CprPGUcnK1tjniLVXe1MinNdfBV7Z15wHPw8LUTCMsTVQXu6viE8UXfGeDz318Qbt",
  "key19": "39jeDCCuKEwAsCaHadkTssCoU4pFcvcLQxjgBz5dnHcrMQZxuWYigB8d9qPCGi7DL4X7LiSLKQTdR1P1aCqUkaMx",
  "key20": "22tzLJGPcr9QyQTVpRTTVGCzNpX7SKjAbBdEtjGe9Ngm5XBnUEQDgWZ4geLu6qVhQhF3QghF9FoHJjMSErizPfwU",
  "key21": "iNbA5rATgeKK3pC3bZ535epsAZSaojtXsddYWxUAP3p4JPQsrUb1sAUdWbj9nMAJggX5JHoup6yTst8T34MnRp5",
  "key22": "21vnLjZFAbuugUUVCjmbD9a8pmsNcXNW3aDCWyzUKBpUXG9oyyRbEsfvrNccpooEqh3SiV18X4YRb1ESpYTZvsxk",
  "key23": "kshX1Aq6e6nbucuYYg18z7QDtLpUD69VxwbRfgV7G7WskrGeHdCZ2X98K5FcpxmKBxSfAxBwp8ER74zrsu4x1Y2",
  "key24": "3rvo8r8TpJN2iLfURYVq85qS7Bc2ApW8w7gcaaMGcFfNBu7kwZWT4osLAvi7StAXbmeqmcTw6szseK57cuhjb7F8",
  "key25": "bb9c4p23tQX9cBxyLPPoRwFK9GXmKrFVyaigTTU4aXrpa54XYVr1bGaKMAVqysKCgfQBJMkra6D96nRgDGhX3TX",
  "key26": "25HGEso3ymppfcLqcZtcJsamuJNJuUrQxHaSSijeBtuN65Xcf378B7GJBN1B34hqaCCmVpPgNfLDQevcid1YoRuQ",
  "key27": "3jSYFD4KmR4yqBvsJyQqKvV4dtAQiiFuV21RttSGJZrFcBtfqGkxu2kzLrb93TNdeSnDzmgihP1i9Ft7LyD7JK6i",
  "key28": "86w9wFToRS3exVZv5ddbijHwMJvQVWEGuDSkX9crPEQRvNr4gYgtYQ3o64euYR8BXgRitmYiP75uny8dJPBZzKs",
  "key29": "5BwFcGtp1vxQ4J2ezq4W8x3rnk8HNM4hntb4Mz1GD1ZPDYHXe54LFB6MHMJfCWuWqYA71eeRFXcy78s4btEofirn",
  "key30": "28NTQM2iQvd7nJ1TxB1PmW6YYY6csvXcCsD3A4G5wzuGmX1B7AtXPytjLRvYNgayWkBDukvEYd5HDVWTrYLMZJiS",
  "key31": "U15B9AXGpbXx3oAwPYzAQbLjzAWCZkgBrPVrXfdnG9WBPW8iqjHihmmyMDJeRmNDSoxsKy2pLCzTUBNfn717UEr",
  "key32": "2fvWhTcHDRz6EDcEjzLEmvXiqyZP61mDV1ZdeRRPDe3FtxbnXsYVu9MTH94BigvkAtc8igKJBTAY39ytLfzMgJeK",
  "key33": "5DV2wzTri2hLeRCLCUYpF4y1iJhu85tjQHWHkpRxsTWHyogFB1Jh4u4E19wjCcFY6iiGUzmpvoMSj2fR6t3Ept3j",
  "key34": "hLXAFZ3ypmozrVVZPSXR3hXcwWZY6AfMX6wKtGRjRuvLmCRvuCmuWtRVygoZapMvKwDqRGwbrzQ7hq92aEtER7v",
  "key35": "33Bv4UGgczGG51zP2HDuPzMHqVTmkdeTB7WNbR72GRDcsdSnkuKTmQgHzAxmHaV1Uj6XQzkCsduNfgpU2T4bfEYq",
  "key36": "2zAkfFXp53ti9KKwMGsqL8Z7KNdnWAUZmUvj86LJ5VGeB2bdczWZCKmN4VSeymjiMRuZ1N9RnGo7fngKHxuVBPab",
  "key37": "2bqKwRj2MkkJfsebvQhHKEmmi4tuaNvs23T5uEqVSAvF9c1MtoRqsgYc84PKWzLeSrpSygW99SJ5xFCTTeoDw3Dw",
  "key38": "4DSNosPaoHDF3q9oPQVvsKdhgdf7aGyYwxSsn99FqFe5R6rrTn35wMts7UfvJQKLRwF61PsNKK5jdQTUHuZCwsh8",
  "key39": "3eGQrSc6w7Z2FL2wdc8oTAHqvGbH8jt6mTcnceNhHUK6W8bSHbEAGi56NsP4wcjg9PoUYz3R4NtByrFtC5bP5iGc",
  "key40": "5YSUPkmKUJM23DG2S1Rr2aqTadVEsacM1fbQXXfzvW42Wq7ZFJNTHjPK2A7dUmvauQFoBV2FhvuXt6ba3XVbjg8q",
  "key41": "5dnKx5iNjVmk1ENoYaebfigk6WbnSswavUJk4QrzsV1k3cUgdXp6iJ2WHu2X11AApH3T3LEuEr7UXF3vSCNKnDPq",
  "key42": "3Q8M9HKSnbU1vnoZerSztXxCMCXh6EeRqTG48SsfzVYUNqBsnabsUm7qfFAdcBRAHzf1jfSUj1TF1CbAAChjdB7w",
  "key43": "41gHvUEdW4qNoU29i2TfNtPfLQx3yHXXpaYu9fuWU2MwxwDud87rpznQCGBZxc7n8LSvTM2ZcS79euDZLp5sbdX4"
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
