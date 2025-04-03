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
    "2nZFocvL5eFpDzwvDFWRcsMxogc8yjakHCAyQbxuVm5Sy4DVPwadTwSqFG27vCXBCnhrLDgTLgNiFDcApbid2rqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F2RHNStMsE177Y65ezjNSLcH911kHmSourGhrhjAiLedNcuHEN7svq7yKtbcD1S9cfTrKuPGgo169CS4XVGJsmo",
  "key1": "2KzNWVtPPbptB9kaVQ3troVTqZ5DLjiEry9W5Y4epmCyjGWaDWbJ2Gj12dcqSn5quovfn7TfzcuwNhfPPWNXo7EQ",
  "key2": "4WiXbAHuTT1dt7qLT1U8QYEBiJabGGtj5mAqKuxMnKJY1kcHGZNUnWGNYZo9yFDkSmL2fYz2mdBpZYdxYUvVqXiD",
  "key3": "2jsy6EKwPwYRY39Y85ofTriDfkztZ5MMFh8YMJRHvXgUQ3yFq8iNqr8hPLDUmffioxhz8cFvaDvvrvfusuJXYoFw",
  "key4": "4ccLRKTpG3CbRLV9Qats8smXYCKdG79pzfbvhK8wZELBa82JUQfReoADCZVhUkKPG8jDvx7ZwHBQufroFjpvfaLv",
  "key5": "2JA7WitdMBpSuATaQd3JAMjystEnyKABeX9o43q9Vkqgtc2q71t6PvBrbo7aGEyWLauY7JqtHp9LNcG8imtgu324",
  "key6": "3NEYwfZDT9UKuxT4FvFn91GwiEC3qSLsbH8x3iV3x8cGhhoDAfcnd5xJ42oqTCgrtRiDRqDmYQnJqEzGjv9Nk2LL",
  "key7": "4Nbu1UkwBGiUm49j55p7yZAT6LZcVYFKqWZcV8ntqL99bLrwSdcpPBNiQanBAowHFxE3ACXFniwGso9eDUVc835S",
  "key8": "4Kd2go8bCxEsr9fzfbZ427RX5rMm6y2y8RUZqYU4yr5LFNyNVFTha1cH33YHHkC6nEkFnZNQshCujNyFnMiVMgWt",
  "key9": "644Dqq2cvFSfRhRfviX7muwccFBLyxofBabYpU81WHdUqrqi4qRa5zFZVCXPKjyQVruMyB4V8BSCtY1QStEeK5Mx",
  "key10": "2Fm8iw1AauYbuwn1NZXM4HXYPXZYf5FRrE1puzBtyMHXkcNLiUysEKCUuQMeU5cTwzXJ42ZZgg2YoMNL7swNUKKs",
  "key11": "3vvMtjAVUV3TbMVJ1khaDepDVmRHd3xqJW6raq7YibRTwGkZpSy73YHVWxVKG3SGgEGVs8Wb2pfgBDYWqn5SxvTu",
  "key12": "e3aXASGev9C7XmNVTkAX4NxBWgtsQxx2E6HwmeUdyhtnhLa1fZ5YAy6GhwJPkKC8wP859sj4meb8L5b5cYY5MVN",
  "key13": "5VdRhb142aQDWTH9bkMGUhW8vLhidHywReohTZZbodZCBbkmNaK6455Li22nxenJJvhBfiqYXB3zLWNSpA3aAMSr",
  "key14": "2CiFwpKsupwV9JbvnvbAEQmnCAVJjooVmAmsLKywLn8qvRvxVpaMJD4L6SKdpXpjpp91icBciysNp3GsRMLWY44a",
  "key15": "5VRzT6Bxs9Kax2XQvEWbrTsFp9hVayX1zu9pFQwdLa48CE5ov9Cg4nQQG5jjpeTAioszPtz3M3vt6dPfmUNtdx3B",
  "key16": "24Av6bVcL5CxCusA6A2Xzt8d419suBsxQrD3ivdb72njzwQALftRZa52ePCCj1FNEvfuboRQsuHdc98be9Lhd1N3",
  "key17": "5Wk29iNu3MsoH5UiW4A1SNkFq1utg1gwPQxEetK1TqUMJWWp9DdYWjQGG5hrxQSvY7pyLof9KyN11w26fmUJPrvy",
  "key18": "3e8Vdj8H5KZfEhu89TVRfmQ2fEnjTBZDHRSYguYXWE9b69Rebjtg9ki3bSCD5V37tp1prHUxhaaQrFT1GvkKNo9i",
  "key19": "5YJp5HqU8ANsejaXUQcYfcPDKWR9xR9DiD3RaDwKNB9kyK4H5e5SpMpx69yYK7yu9A2aqUr7qKEbWkoeWC1QWH7m",
  "key20": "4LwFuAaWA4YdHAAR1f9SQwzWT1Ptjnc5dh23uofHJxJdntseYZg555bdyQKsggGKZp1apki6pC4BJpS5W8rBBpEk",
  "key21": "3z1nJJZBzQmnR9gmt4GatwV8imhaLfZg14rxgDmmmEdaLDNhY4A2LcYr6cHbC9q1WLA77Xnx7EcSS5jeuGbaP2v2",
  "key22": "65TFArcYVyDc15Hk1rbuUwmGsbW4HvfhyUTbT5EzHoEaanDxaY3t9wudQRub2fot3hpo4odxqg1rPsN6uwTtHEQv",
  "key23": "63FgKPEsfLxww3TA5F9wReWhreUcDHaD6ob13MNLSw1WcULfLGXuSMwgbQ2Vdsk79YGzfysXmn5jQFQNytzagVbY",
  "key24": "4pYd1ELTLt6ukjUCWUTGdEfs9o6BYy657n6c13Fx12gKruoYWZ7uKaT2f5bj15kE9okGFdf2ng8RcuPh3ZbU61Wf",
  "key25": "2e8MBEgadVTxFc6AE92WJr7U1T8r8KonjuuqbBKdrVTWgrvy1wPyFLACd49V431B9Gb6jPegHLyKcz2YVmW8PboF",
  "key26": "4Xfpv5heAt4NUKXqZwUem9mMnX9jHHyFcUZV4FvAytMAFAgTotgY47iJrbdfocovTZVThFh9EwPWVXg87ADj8Ac",
  "key27": "5MLqHvGcX9bnhvqS8qD8hwYgwQjd1QomSsKQtUFyW8J92zbNTCBNKAc3ysQt7PmV4asPZuEJAa7mwbEUjhAdDWET",
  "key28": "dtxgc6tEK4keTT3P5o1bXcfjUCxdakui5dmMiHpDdNyAo9D8LvLbJZ56GDHbXLD8DwFgJPLZNW7gKjSAonvyVkA",
  "key29": "3ueCZE6mYXYXNXZQKuqkvi3QsYhjhM8anpfKJQ4WdekCikZPDeasQNDDQQa22HBnGTNsrg3eYqu9kEeAZZZf7D8x",
  "key30": "5zsA51EKV1hRHCxnmph7awNjNjA2YxSokfiqpjVKdgJjBn3YcyH519QNe1dqWtv5LiwPcNbCKqQb3yiv5rQEEwNz",
  "key31": "WthXfQAXfTNDRhcK6ZTdmzwG4BnUdiDAfRseB1EfbzMv4Wf8j72iW7pLeCwgHZTkpipwsDWkNQjCMvLezvDfyue",
  "key32": "3b8YBsrAaAzNroBjdz9bcVYZHvokczSG7KJxp94LD4fKZPqqNhtGQ21MgtGiRxCy4RGsW2EXsc1zv7Dba1b3saAm",
  "key33": "XXr51urMrbLbfe5jRJfvumXGXEZGqC7LgRPEuuoCRXpaHvhWU1tBFitSiCJZXYfZiqR8dpjQS31SQdnPkYXHMvM",
  "key34": "578XGhGi2usdoXCEyNBYppjj7CxKdHWZvHs5dSqa6wDNjVMyLqxPqKCtEeBW7BM37M4pENS2z9hiZYxspFFnapVN",
  "key35": "2JKAXiTpCWB2qAKUBpXLdqmqXs5SrQe39EEDCJsMEFZrvpMCAKAVLRZZXwnU3jqfwZrXZvxDz3MWshoNaUsdivqj",
  "key36": "DYXuksFMqRi9KYm5tP5GaTbLgxb93q4XTujG3nCfFJcRMPPoYrcZA3DhwEJarsU5boyLMH2LXiMswHhACRauv6g",
  "key37": "PnraSyqbh19WAL58vS4uSxpnT6QLsgfSFJj8i1FrgKKgVZQZDqMdV9tdzahMugTnx34LY3VrmyVrwtT1wFCkAVu",
  "key38": "4RyaSBRACgHaUQEeNqAFYqLSQXFHWidhgbQQx2GafngtDcQGgGZ47agFkVoXnEeSBbHYjk3bSFNHrTzKAmTeN7Up",
  "key39": "HnKKbZizfDoQvpWdTRuKrSTCM3QetAVviZNodmRcMVFDyKGN2NMERNsbTzFMH1gX8EsQavLa384Quy6FaqWw42F",
  "key40": "584v72pLyaczQRb3zbXSkDWPX4a4dEzm6fYqNVQ7QJJijEYP4BcM6TRrGQjEe5gijGXKjBiB9oVs5eK5pzHqnoCE",
  "key41": "3SZkETxLmMsKmSSip9itbNxxy4xR55QkhwMeFyZnZEbt8z1EPtxsuJWMThczjWpvo2Mx8BmmL5oRFAmJ2BGMGAdY",
  "key42": "5dS1Uen7U8Kch8xBPnYyKBzuvd1oSPtKj1TaCwM9LGcvrbmYsDjkJRDWoXz4h3KpJsSMATLUqP8AVR41RVMPJiue",
  "key43": "3DbzuAojCk6zUZtSoLCq8LjRas9q7KdjcxkzZ8XXuPYceQCRgBQA8LRfarQERFHnhTUFNg4R3r3kHPxrmNGMcct5",
  "key44": "3axH7U1kZoLB8USaV5bFCmTRqjwr9mFUSDkVS3UhC2uzPcWz11AFX6zSKPFasbWdECL6szp9NnUPmEesGHifgLF5",
  "key45": "3tbHMBsd2gXR2ivKio6VrfXPiQy4ZRuXxKCVXqosA5Dbvva9oDmzozUp8DZmf8E6dCmj39kDzQ9fbQ9owSL4qZT4",
  "key46": "sdmn6fwwinKEcoSwqG5rPkkmLDNZpti1yeZvgounye7HHX9K8SS3NM7J4HFCZMjFoWCvCUDjho96pAxh49RFapT"
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
