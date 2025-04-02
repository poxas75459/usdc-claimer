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
    "5if4uVPxXAJcenGve3JrtnKaXhqyAfrfESyN2r5eNYUedV9LAseZM9u2sUwv1o3qspUWWP99PXqUQVnmxmS5g9WT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJdQYAqLdSsnD1VratR3wMaVmMQL35Xn5yuuS8LirvN1BPnBtR7qeFoybWkEPjgrEZjyxNFTt8YYthcretsVGUT",
  "key1": "j8GYM6mCCBRS42gpDLftRSV6NFZPDZNGS5yHWC4ucF7iquS13mtRFe1jkUxn5BvodVbSJMn6RJytN87X5wAgybm",
  "key2": "3AqqKFaW6ATM1VKkYsGQ18QexJYxS77if7aomdyourwnbvNdQPdjbhEfCBTbNbiYTqWCzTjRtH48gia7v19YivvH",
  "key3": "5vyXCg9vL5pRg1h8ADr5BrSHTmDfmAApf2ohF4TejMWbyZFfyeo6PhPgRpXxqTEdqD6LyDJPMA8SgrK4Hrsq5ULm",
  "key4": "5RfjB1389eJJ8cHDV1dgPQjkARvcwZQHQjJ7n5hvX1KYuMLgizLWgLmW5QwouwfpqD2zUVRr117wJ8Y2RDQv3frK",
  "key5": "4JeLBpW74cSytWbWVn7LszQiVnnrGfZ4MhKHrPt2sfsSMeXSkWwbNioRqtVxXztetwqBrnFog4DK1rk39zphKjaU",
  "key6": "4yytcXaC8HBZ3h1nJGgNTksu7naY3sXZjvPGpQNqhAWCLnTG6SgAVncjSr4C5ic2xEBURuB9htWNaaEFezit6eA1",
  "key7": "37MSkQrVVqXrX8x9K5jiwkkNES11fM9FFs28XtmaEDQvHxADT3xBvrcN6eq6zfaRuLYcCb9tkCnu5MJE5XoY9J4c",
  "key8": "4A3VQJpQ34sPFWKD88roUgE5vUpgPEZm1C6ZPgqzM6sv8FK1doT3FwMod8wKtfoHTx2GvAygFgF3B6Dgoorc6hFE",
  "key9": "623Dc2C48WcWn9YWsbGqAjqRowRUtzvuNfkK5r7HzvBp6krVSvTGDbyReMLXTbBCEse5KwiLFD8gJfsGcAhSYiD3",
  "key10": "3DCs1YnijENhXRorwmFc8CEuEmoYWVv3NpkKfeLG9YEREz3gNW52GxHqpj4nFbchw8hpUUYUtPe8vgzc3GwfH43n",
  "key11": "5pU2aVzkLzzx9JXJPYhbonbcbKvTTz6ArD5NisVsip5ScNhLtMeLH22wLzhHnjSDwB5qtMYYX3TMMUCivCk2DX45",
  "key12": "5vjAaaHb3WmU1cWKkNjGTapf4SFf1EqtFbCKkGsojLf7MEpryzzik9UAHAqUQPR7osi3Rr2hpi7Xfyx8GeKeBFee",
  "key13": "35dP3vx684376CemFqvZK5KocvLHdmkMtwjxQpnhKsKCDPNqY88Akw6DDEwJh35DsU8AgHGcLonbEwU5QKhgEyxv",
  "key14": "2NqDGPth2Swi2gRB916q1nE6Y1YrazKoBwxw7J9tuJY4nKJqb2nwcS4gNCPrUMSGWBVuDvKtB34MVDakdknP57DU",
  "key15": "3GyjJ62xEKxizXAydHvH2uegqjZYzgWvoNgJzf4B281SqEqW9XYjDDPNxsNYxEqC6NH13QeKtukxvJ5jK68k86qC",
  "key16": "FLFBCiS4aFve3J1tz1a8c7B8VTDorkzxFoX2aSFWd2jUQLKR7bJ4B6FR98bYFVoG9VAr9kgPKw677v5TGMehtUr",
  "key17": "qLV49ZSDppWPeYSNNX8FNrMC7YxnYyi3Vpwfx8Xdi6cdCMnj8GM2ykEdNrDRNpKpig4AqaDtBBGEV8PejTrDcqn",
  "key18": "4vgp2jGHVxk8WrGk7s1wJVbZbpMSN3hAdTpi9iYu9RZsy7WKJCb3apuxY39cK4ZvauBuxbAjhuLwbnfe2nVgbMV4",
  "key19": "5HyMKxK6xxijtnQ74KwXg5S7u3ZFW4o6LRewpkWRGmy5n1r5wT1VFS6zAjE6FSmDa8VzCGwBBuByiopPkXuWxzs5",
  "key20": "3fXEti7LVNTujavWM4faEE4h1Rg3UddzPALNTSwYTzTwRd5ck5f6NnaLaCv4s1biJX8GV8aBWEG51WxqiimgJMc8",
  "key21": "2dvggaaYYnZAZzXXGBgN8G6amXgVEN4XQkZRLPnstWuTYtGnEitSE1F294wvZ5LaLzHBA3i2JCjkvEV75k9JDet9",
  "key22": "25o2xun4EnC8TJUaAC7JKNjPWLX7YyoX319yqFNTxi2BUv9m1Rr51aAoqaMqupajzKj3CDrhXkYHBSUJDBxRW7Cf",
  "key23": "e5amQFtSiLAYWNyorCfAeQ1impy3W4HxhzmnbWQQQ6xV4R2ACvrhV3r5sBTSLCaNYMi2aY6MpJNaS1Vo3CYHtBm",
  "key24": "seYYMb5gLNVGy2VrVdNrKfWtY1zxgCBBPVVWkMmpc76BfgE5TQ8vQApcnzBmVw1XzyXTZGYvGUk1iJiJfSNi38E",
  "key25": "4PrX1citcAfotRjfd9U2Lm2RynY3ahGs832s3Bo1t5oDYP8wXTNcMFGsHVEQ2b6Jk6YDTEenKZhBJzuaWb5r8LRh",
  "key26": "67PHjY5b3DtVMUm4vet4N48rSyUzhDbg1nuPQsj622x2aaDE7z9Y3bPqs3qPL2QHJA8QJ5AEB51yXdjaJ4Fxqrpv",
  "key27": "Kdjc4V3hB8uLjVBfPFJEYu7b8DgriA7ChK7YybWS9GvBJaNpbgjjQdfm9qRDfVfGcv4Z6AkoE12ctpd8EV8xMJa",
  "key28": "4fig8HhC9sCn5RW6y89XHiApr8m1VZJURCiewUrW6WgzxfStrZdggLmQEo1aBp3LZMw5Xm82194tdBTE2UwG9eF2",
  "key29": "ws6xuF447cdRmCGv3KSMU3WCdn3sEJKEW88Y89E7darmZiV7H9isMPuzKFc4tptJpihm5hwxy7mFVXYaxeu2MYG",
  "key30": "4FmSpz1U94SqiUfBp8ssPedPJg8uPpBHBfWEsNyZz4sXNRXtqq8c9DqdqGmeXukaux3REMzbcKVTiR85BZZrj5cf",
  "key31": "fg41wJeWeDrkEbFw5mYwp68TQ7r8Lg5ubLrGfATVUy6QdQVkNEGoa78KDLGR8LUGdfmWc5DCxe75196ZqeAhW1o",
  "key32": "3YuhX7xSPCGCzKM6xy8srNVMdfqfyS7SzqPnmHqJgH6ct4WKufTrQazcHDMttGCeZSyvBaPgnxHAbKsx6ybo5qE3",
  "key33": "5j8dup25C8yiNbXwnjQ5mJccTWcf9m5uKuxHQBxgZNkm3qNeTjmWdLWHttPZ2RkKcbmkwmVXBYYWCJNGSQ8v622d",
  "key34": "2QanbmLy1rsf1qHYTNpqniWKxgvZF27MFZ8bb3WQvotUvBWGsjxbmdWPs3ykxCYmHocaHj6DEuB7ADxgZv8MZdwb",
  "key35": "5MbzYnH8ModwzQHpnNEGj1sC8ELqUgmuyWTKNAKfDywsx1cbLAhpKAnhMszTpjEqKvoLonBUSLhdWG4JtnBxFS1o",
  "key36": "5n9Td7jpbe46oivtvRHsMBE6s8q6BdxcjuCLJRtQRgCB9TZFWEa5FtgRZbtqQeUZDMYq3cQKKBBphJUr6pfM9qdN",
  "key37": "2WswWKVe6UzX9UuWYgmfudz32ve4UAGGQ2UVpYHAEszLoHhJHscZNjBUSGYqDn6RBB2iGzCUHtjEc6khhABUrQ8Q",
  "key38": "3zQB6oLr9eSJtjJU77zFN1mZFZRXnTL1qjuErdQHoz3XWRtGkWxsiaPbpCbaeBuUQHFVYmmuxS2xKM326KKzknrP",
  "key39": "2fvM1iak3nniCimcyDYwRp79AhUUwPp2CRSGtvqYae4uLJCtDNMRVtr1kSBdYCvc6dGYKMZCvSciMTRNq5F9NTTt",
  "key40": "5g5uC2TqUfQwENrJma8pH4qQkoiSGDwAdmYCH7WRpeosS5cudvSefdQHRuytdTAX533APnupmCow6ANBM3MpYaZw",
  "key41": "4HENJWqTxCC3yotCY8D2toUhDojhwExRgT6xPEMAXixQaWWM3Y1udUvtusZrrNb73dhwgGFAV8xAfRzVkPka9acg",
  "key42": "2c4ErR3r1J5WRyz6tHoimorxMbRxrVpr4nTbin5j7hkpsZqfaanPgr4E6zpNy1q9raCCUVWvkYC2xoArnDYrgNSe",
  "key43": "4uA5F63zij4RQwmTVDRXct4mUgPu56Lj8XaQ53oJ5ptTFmkdNwvK3xgERagkk7BJCxTXzRsNaMN2rphonVLdzeac",
  "key44": "3p1oxHqT9PZ7vLuCzsGCxwQRCoz6UEZNkD75gzsstffHTH8JfkYd2zWzkJF4BGW2HzivQXqDCpeUYcxwywVbGkXv",
  "key45": "2UjPZpJwvQCsyY5wkhQ427kezZrunUmCqwnW9cDpcSzYDiqjBmGRTJNCbBzJyocsxcT6eiFeewdxuNahftcUtkmc",
  "key46": "5ceuhdK9FgixzfWYVG13Gr66vziHtsmL7WUu8rqFfWSwDRCGsPLnmAq55CDs2fJuFj6fbKMT1xorjndy7kaZKEVw"
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
