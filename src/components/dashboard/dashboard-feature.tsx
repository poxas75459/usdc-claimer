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
    "AFZgjB3QUPHKupqxRvThrtYo2rHEpjtJTtNbHYb2cTkitXrx2KyKDCU3dviwPLgCvF2bWaNiZEeKWLsQFmpVT3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x17WwtPbW8aF2HX6DVaXi2HwPQGFzhoMZF5PV3k8PmjGJY5LYWFJFEGu2g2vSgwPAMU7RSC1HhWGJ2TkEtDoHnH",
  "key1": "3ni79TJVe4oyBRzRvU6nwru4WmioYdgy4MEdiAAi1xbDismC4soJw8xxvYpC3Fs636GN5DJNWpDb51eGPjA89Qcd",
  "key2": "2VhXhLsePMhVTdnK2zGsvQHithZH8TvjqYX1VVKjgbAVSSUhV6w94UQsRbkiYnaKYpTjgR5oGaQb3XD2jg1DxxXp",
  "key3": "5eLQsDhxTZTaGJFrnaVjVWLtUT4ZUfbtaaioNXu5fimJCnTiqCrH8a2vDyb9wsjoRzzRjpYoUkzUXAq15maRPKtW",
  "key4": "3MWRBhsnhtv7VC57Hnt1ynZXhRoJQL732GUD9pRV4anchtgurXGMoUzZ44VuVEgmfqQCkYbBot4LeHxiDXMKHPEz",
  "key5": "5FG6f8t3snQHRV7GRTNtxXpeYCCSghnfMfbAGdfVsA4aNrSg2QzxBWtsBAf6THjJqSVZKNDCUv2dTT6kLkBLEr1M",
  "key6": "3mhNjSa3Gd9TqiLN6uHR3AyPMtc1ctxkqF73R2xa517GZ1PTG3L3e2DvcuiayRwmzgxDSug4s75rr6yB5JKb85Fd",
  "key7": "4a6HakTDeFmyVv3yD2FN2J1TbnK8tWM1H7ZLs5N2RuJ98rpqmne7P1uTBncSGVUSgzDtHtUjUASmygbuTkYaJzdY",
  "key8": "5qhL9qecjkWaSwXruBzeeqBjhNQavXTEwfskEnPHFjpgDfbHhLxEJP1F9vBJ1euS7kTVFVkYuNtga8i5uHAWXDE2",
  "key9": "4YDzZWatcdWY2BCZ3tvoTkpjUWqbp9NFLE74syM7VYKQe396y8djYUopud8ysSSj37UBmZv9vcg7WCmV9AgnKDYZ",
  "key10": "66VeQMACjDb6qPZkFr7kAQrSjrqFUu69GHBab1bwNBBgRK2Va1mDi3PGMF3GC2xhD77CtePwoBKD5L8eJcTzB7Eu",
  "key11": "32F3QY7uwFow12WWxrxVN5AQsbbQqUQjTNx9i78yGDQf4ET4eeRm6EVzWv2itkzX5sf5mAycFGcXKx2hew8B9UFJ",
  "key12": "5wHidfLwbfJ2D3zcekyUPcR7BKcUd9uhKcThKbLYXqXi8GKvXTujKYWx9Hpy3bMC4NHH2XN9Rqq8kGgrkS1Bk1hM",
  "key13": "4MpUTqqE92N7w5Xqefsg8CpXP6qHFYYBP8rbBFh9eerfwZtMrXmQ7jCHmynQmvKStiKWYrCbQRjauvmsEkF5ajqG",
  "key14": "5JUjJippiRfKA4HvXry1TbCFBatusNQnBdb5kmF9y1K1kUEtizVnhrrpeDixZwwMFaBtDaHh4qfNE1TAyAcpKLTQ",
  "key15": "5P5hZifkgQW2afMiaTAY59J4xELX2xo2A3myWnwXcF8uGZ3BjPUh18ec5HyKTxZCRu6T9ztRVwMHRT22QPbTsLc1",
  "key16": "5dtzT9UxxGjjyTnNs4TVYJ5dK1BhWfHMvYB939vq28ky4oKeC16FpQhxj18QopTVDJ95nZsVgrNGbXKNisU5hogB",
  "key17": "2jmcHridyXUvWJ4ckgKv5DpHpVRNfRCPYH93dxrh7417v37uA1j2BGcSumMFGy8TmfHwzeK9HPrXhu54PP5PgGFh",
  "key18": "5nHotijWUt7uV84eYKvDhX3nce8JPQwc48pwjxTeZuXhDVVEvnWUdtZAzVMn9AtSy6WMwPZT6Z1UGwwSdA7byUHv",
  "key19": "2pesm113iATaxvBSyS3oBxATCUDeDqbbkKoRHSSevAMRNtbW9gXYmRrAfRZ1uYMzLb9VjDujZt2dfxv4YN1VQwmv",
  "key20": "2VSPU7HqpYTL3frVTovbqiGXZEs4kn97ucVwsku8dTRUL67NMzpj6phnyxFM9ck5tVfbhcBdmnr8xTn48pn2ijAF",
  "key21": "3FitfTzvGUgLgDoDNt8xZpnhLiJiAFqt8t8qYZkWBMNEMgFmMuQPmQUXFuwui382egAP7zxfmcpPxitkUHXhJ8T8",
  "key22": "5HfotxSG6MdyzvNHGAsvmCLG9nhfs6AAwxVQY43JQrNCWEMo7289JBjjWkH53X1dTXPfTyoyn3iKSg468xrYTbgq",
  "key23": "2D26yPTFVdCB4FT48Qbi3Ys4pmkt8KPg2F6phDMQGzKmJBgiJVcBeHrKwWZnakZkyhCw4sTk494B1rrCxgeDqCoc",
  "key24": "5ZNE6s74MyjpAzbQmCB7NaZu81KaaxEsCLRJeFmr55iMF7paoiLmCrYXrCzBLkRhtHnbAScG7HBKX7p3hV6q9fi2",
  "key25": "RRbtjBbtmRfLGXRLWJFoqD2YVBHLmvRPneMzcjBp3Cwn5croWFT7AE1H4oasiPtiR4p8FCsPskj8eZbERQoF3x1",
  "key26": "43qzsCqKiE1oKyAhR9KKPi2hdS9ijsrCiHMpNdFADZeiYEPbA82sKwHuLv7BwABke85igR9BAcZT1visAx7C3d7n",
  "key27": "4ziMpzmwfETpbCyELoNbFdowRcBQGtddZkLZZfmonL2tmFpL1nkDhumR8pPESLvUDWR7STsL5x5uoG3f6DJEEkdj",
  "key28": "58KgJ1RECajSUfcHqy1D56yUGge4TcRh5KUGZCjih3iUqfrtbif9nkrn9YVd7LYpjvh3pELNPKkuaGJauHnvo6b",
  "key29": "4UipnvWLukozeZ3kjQrGMdioe6H31bS2MvLyDuDHK3ftyZBJsz3y8xcQBdkjsq64fN6dV6b82xiuZrZo1xZ1saX6",
  "key30": "48WQzB5TnqKn3TTcARmk4ufyTzGniLTUaMmXi3pV7maCKwtPkMHj4nNs5YVpWR37GJt8k9BCk4JHtdQB4Lyfnyfu",
  "key31": "3eFuo8XaHw7qrciMnB8HdG4apjk3P4DGisT4u4V3i7GYY6hQV6zQUTXAGH2R45mHpi69nn9ULdbtfQGe9hHxfdVg",
  "key32": "barLmFTK9ezhwDEYQ4gGX1CvZnBfFCEuVcgTRsENeWA9tCjf9FerEoF73JQEXCoHT3pj2YnKaPXwb2qdZURC3NH",
  "key33": "QehY9evXWaqMh5cyWZz5dfd3SPS6A2PMh7pH4WuSXj49uimS2ocdrmc9sjBk2kKAjY69YcZZaeqr6H6nmXv7JiW",
  "key34": "2tWm4kuaAPHBdQtMAaQCrvBVj6TWRjTwf9Nb4zna2mDLFNhRPjfLUskNtkUfp7iQB9oiALcav2vUkryNAgwtMKdR",
  "key35": "4MkDyuEMGQCaCC8UUDJtJrTdeMk4yXtfAh8TuMQQjYvYEy6w7H1y2Sv8PQcahRnYivov5xxyqsnw18WG3z19eU1R",
  "key36": "ieawd6Y7JuDS3Phi4kyRYf7gseRwcGE6dTPrqwdTA6CCqLZoUuxvqHjDzMqxBituH6S2Tivz6FoNAdfCTUqgDjb",
  "key37": "4R6JFcatwwEaAA94RvJx7UHszLn88jQ2oHejPkkSrDN8KopX8ds95itrs16yeVg65AUiV2nU43YLaeD5mu3Q57Xc",
  "key38": "62AaQKiifG7B9wRD6EB5AG7Urv1xaTYLRucquwwwxfnYF2bWnswxKCmgqSpCVKA14epadeAxkaFAu6LwjBZNViV1",
  "key39": "4nHQnLMPN7jt44WnnkWW7M48kWP9kUzD7rWbavMKyzLbew9EsTt8kQiX3AT21kan695VRQ9wKFvKnTEG4qHU6jEL",
  "key40": "3ajatBnWnodwYgRoTqdVbZGmNAjzCdJ6iB8AHbcRRBracEumecJ2rCnWAoh6WVagQ2iYsjPXJ2BfABLXNoYD3Msh",
  "key41": "2ekUD9uPWTGsBYuXts9Bj2AsNrcsMCfsBKJScNeDJcMXLxscCqxXDiCfaGJT9Fp1qdfTNBKtTHY9Zr7ScKaibdUL"
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
