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
    "5BZZoYvu4WjWqS4d6UrtzsBt8srU9FoBTShUhN24YqJ8ki97cLryExLPagoqJTPQa8dtwv6tWHqGwj1gPXRMoQMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fr7S52u87Frpf6tjb5BUJ7FNjuGRc97UUZKtbgLCpCTpiKiCi97GviJFR5dv7ZdpsYWxspSnmU848iLJGCs68f5",
  "key1": "2vzJ6e2frUvpgUcLhk8JQ2radJUDAVYEcKHEcUt45zVKDHjXNxXmsLqoxsPNALUH59c6px4X5QjPSmCJNrYnEXtE",
  "key2": "hSuhBorJyZXvibKMkyLPY1SsSYvf6BP3KT6C5dWCcGTy39JUVZdjAtevkaUC2ZP5pv9D5T8LzDRYbDhnCCZTyfj",
  "key3": "3UsyHRgXkqVQiZnHkrk4bBthMTg4B1SwVJjZZ6YbvKD8hhKqCRQhrrKmSA9SogqDEy1AjyuWh6kuUd3APgMEKsw",
  "key4": "4gehhPCZKN1y6LmVfHrziTidK2Fn3F6skVbtR6kihmCgjgy6nqSR7yFUhKyzGusRr3UHpsDKCKYf5hLEieFNxuVN",
  "key5": "2hCfGKmsZxrg2TDMGjHkJ279ok9tL3xbEYw2kK2Hz5ucjqCJj2gNVCwAqTj7k7Cv2RbkhoCAMoe8qYXL2cMkJEra",
  "key6": "45KZR95sCn3GjZDLd8m8hvYFryNCDeNdzxFWyJp1h7SJyrmuwVTsbxDScU5yQRnrxXVd6wMPPk66syCczyJsAVwL",
  "key7": "HXQNPHJBy2xySMjeXSVtSmVuesDr4ihUXeG4WaNLp7PVeCoWXsYdw4inAsx7NQSLGMMpnj64jacavCAGzZcftCW",
  "key8": "25mp9nt4YjVs5hnWixsJbjWksLJSz7QFikS93K9tcjCFvk2kU4MqbqbDUTwkUJNcmpSMYyUh9v56diYkynJKuwrw",
  "key9": "5sJZCSxWKhRA7J2auQV7C6ssTteVYX2dbH9p1cU2vCJ2gdTp5Xh3wrDAWTrJX3JMJs3UwRutdCi4fUUR2yybMjZC",
  "key10": "583XVqGGNAiDJekuBTSXb9xqJoqEj3MKrfmfiuB5njVLs2mrPHjgzwfK2gxt9EsrRpnU86PiWAfWZPbMTWzWn6Mi",
  "key11": "KzD7CTaf78QGBwSV7G9pepnUWKiwYA7dT83hNr25Y7Tzs4ssiCpL7NJn6XEGnWxb26UbfFrrCnj7GdjgQpUpggM",
  "key12": "2EyxQAf55bbqtAxNXFa1ZdTWGjHAgne8x1tVoQjM88Gj7Y8nozDw6T76pomYNnKi7GEzZrg7pGfpmpcCSr14jk7o",
  "key13": "3gxpUDRefycCQKWWoz1PrGYiZuKZR3b6qPuCMpX4cScK4QSL7Uiq3DQReJmjncY6yp8Qdu5zjAkVqCKBCK8tUYFy",
  "key14": "2B1jYSyaSwvH3ANWJ423bC6KQxtyozSk5YRaYvZ7ergsMDYxhYS92FZSs8x1Uz1XzxCoyFxHJ7a1CUFWcJXMt6CV",
  "key15": "2M9NYkZRtZnoWbFyeEme1qWAds5bFm9tXkB5xBmbarThfQSn6Bb8szWf22xuLg4t1fT4sxFcmWGau199dbpAk5rV",
  "key16": "67kN3bocSyB7Hg7MaZAvgWhVguu3TApUgzXbHVeEh2qrUEBQjuvZioPettQk5mphKQY9Jto2zctBAzQFcsBJuRhV",
  "key17": "t2ry2Wjoq5Y8bPkzNx7bQxY1xNaNesUz7TYkqbNLsvgFbz8kW4P9ArP8JAZD49zBkuSBMSyTESTERHWR2GwMgk1",
  "key18": "ZotNfZBKAUfQg5ZxVKM54thy6JgXE1rp49FLMfHhSKafkrrqZgSyHGsvcwPnfwX8r6UVYKLfXFvLErWHszVWSBA",
  "key19": "2f4QYrRnjNQVSo2jtC7pz3bkobmpZvN9ascHzLgb69zpWdBuHWLbFbeSTbLUSkpQ6MtaVUhK4UiuEpF1H6sWwz4b",
  "key20": "67HtYJPJufdYY3YmWP2AYaTBmD3AMMBG7QAuDjnJNvJ5PbJ5WGhTHo7DZcuKyZpPMArbX1hYVdhRNSLHpJNiVn1o",
  "key21": "5ARLdzYBeme155AiMN9xdB3tTz2EcRC452jkvb2P6Heiz46KsJgwvEWXgrgwxnKb9PvthVNZL1ggz8PaAAUX8LR5",
  "key22": "2rYsWg5MUqcwkPbfs3kigbPNE7xUcmmszkGm2KMS5WZ4x89mEhMR1BBScbfjBoPKrWDhj7R1m4ThumQ2wviPAdBe",
  "key23": "DB6jTLtSoNBHf2mCRpbh9oiVp77qM1zGAA7x1UriE4VipMmqZ4rU5TcmviWz8GtRrbjfQrMH6xFExxJ1731wuMT",
  "key24": "gti8df5zcPGg5AUCjVTwCPmDD11tLgSbotmTFH3CpgbDVSryjxP5BN69aMUsSNnm65HKZTGCopybUYMPzFq43ze",
  "key25": "5S6r7RNkywzfB2K7HxV8U7UJN5qRFk5BLc3A5gfYqtBUM8VSMawoQu3cEwfpqqF4qSjeXJLMKge2dEGsS4sLgiYx",
  "key26": "32XEGWdM2iL4jqqFaJUjL3WGjENCn1vcdHp3e54dURXJ9CN7pAELE8LgbCMDKDmFfnujyD3pmKhHNFUgSsWjeynk",
  "key27": "hNEAax8HD5PHjZjsU6icaJbZqYGNsvtVWfFYNPvRn15gZMnFqxiDqp53f1bQ3CyCEktGuQrkvredpRUnwsi2Brj",
  "key28": "XT6fFNmT3nqT9QtFe9n9XUGGA6G547yAzEHgj9AG1puD2JYbcUZwcsJPj9YyvTH7rR9XsfPkMTSwfd6c4P74hs4",
  "key29": "5yPpQbs7KxWyehXKSHZJvzYFpFMHXjsUSwcAR5act5MxPKJQRHYL234YGwoaz9cnqKUiumwg4EFg8oXPQXrd4nRf",
  "key30": "4nk3yuQn7Tkn88mKe5yYNk8wozjGQapLifKFCBeS5JaGvQjx6p5ywK8yCKFAE9rvBCRnEE8LyTwt4Ukhw6Bhn4J8",
  "key31": "34s3SdTQaoXEPcFukNgzxwqSrNo6TXe4dQnuBbCYSwvanTTTwQXXds73SwG77qTjhhYLgKqsW9BnTadihDL9K6yp",
  "key32": "5ijsekY9SxzD7jhFZKztycBwswYskuobG8HgFLo1Nf8kA8KiAHhpV6pNCPoc3bJQJNpgCBpBWTinNJKjRwEFLCB4",
  "key33": "34hTDZpwj6WN3xVTD6fNsDpU1KLLcQ8fKKiSyKDBta9oDRXCr73gKtjYdLzmn3FpeKxC3epmeHLQ18mzwT5ntNFG",
  "key34": "msUjsT8Xt1TvNVL7rsAvT7QcrvDzHAsFZHnu83hkEPDbj69UTYUEcCBRhh5nK12qqsuJmiQnnRaHB2aZAmcHhnz",
  "key35": "2aZEabnuDFsKsF1BTbBP5w4bQqyjMaUbe11Nrg2igKA7Jj14EQJ9qW3hrGDMJqLYDUJXygqGouES2GugJ3DuQf77",
  "key36": "5GFu53stm3SagCkU88LjFieUKPQV4tQxPsBuz3nGg32pWk1vYT9dfYVYiGaxvAzAB15LUmLNLmUc5CkvVYJkcbJj",
  "key37": "3JDMiEtHnz2qyx153PSLQPgKnUf4poEr9B5CKZ7pPaZfiERsmuFcQXa76TbJ3ifrUT7F4DMwAf8yHET9p7mVhkBw",
  "key38": "4tWCdubVNvtdXp9b2ZjNuLseha92gkHYP5KXCAbGoGYijCxxj78MpTfa3oxPqX9kGVmgmHpN1FTzDgx5U8bxrLrY",
  "key39": "3XXNPfwrQBgMRwCPNTNGkrhGw2GW7QrCvncJc8fHy3H8EYyfojYPuMiba2xgaxoATkRoRzE1ZcuHA6Qzcpo3k9bC",
  "key40": "2KBLyevs7yW4J6f7hQDaBtcxgHHoFM9zpazFnMGaAMRt1LF7bFFKN9X1PbWP3SscQ7Qze7wAsNC6FHYwAt9sayta",
  "key41": "3hZtLZ7ftvpvopk7DHbcRPc6gFFgXoohimSoT1nZnSoPms4o9FfYtV7bv5T1o6YRX5Cu8SSWP9cW9DYQkmpsEq82",
  "key42": "3UFM2ztt5YL651vBNYCYcJAuSas7C2M8c2gvk26kuV81jbkLjG6n6P6prDgqSg2NhEBazgztZGpjq5NxYTkuRX5v",
  "key43": "49xGuPJf2Myu2oFCLAsU9ewWnCTWz9Ux7aoZ7FJaTJxBx6fBCvmn85PbP8WYDks59wQ8gjZXGYpbuF9ogAMoJxab",
  "key44": "2S23wJ5c66xtR4TZeDpFhTNBJPKgL4mSmP52QJcuBhsPyk1tbW3FZuQ21dAE5e5e9cRTqkfnJYCFk6hcvpBorG9T",
  "key45": "276FygbbQbNncHVVPN3eFvVxV4aH577Ls2J2WxfuTCVHyXjwCfoTyHP95UH5j5NqYPWkmtiRRAbpxqfDMV9qafCS",
  "key46": "RrpQR5uwnvKfPWamYJwWkZfGcv1hcQBfmAod86jJkaRiPLJNHsCPR18gqXytr6V5yUaGifMQnGfW6kY4FJKMBNk",
  "key47": "2xuqVXrJh2ctxnXsz73F2m8LwiDTiMWv3uyUkNFtieQzwBCEm4zajPJSfQdq88uCTEYdmYeUqH6923czvRr4nBsd",
  "key48": "23sSrSs9nbMUX9TmpVKwawHBvgKm7YQ45Fn2GbPmYo5vyk1WrBSrrjJ8zrSRkBe4yxi8DxEb8cbg4aSUSnFeAJYs"
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
