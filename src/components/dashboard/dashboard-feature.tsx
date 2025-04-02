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
    "3xxFgRmX225iQpd6h3SSbJheuDm9bRRgN1SCEyuSe6JbZS9YyJPY5aKrFF34hWixuAffXmqWjoQcXMyC1bMDZwrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qvrWrPnyWhRFWDyHsoGciyW53vARANRmYU652tSAa5qUUsT3RSEyiUZXAeqeqYbmdQGYM956pbPA9At9xDszsce",
  "key1": "2xV3YEqT9ujojfh43dn3QPfs7uza1Lde5yuZxwKqX74JySYRtcdZBGb3BxPgsYJj7yBrBs1G6FmEiwfH8xPFHVDb",
  "key2": "25vUv49wEDjnLGxEm5h6drbFWs6vFTNR8Sk8nPm9SojYUwA3eRk21qkFdYQeE7Xucpq55DoizTnkTy47jirTY4Pi",
  "key3": "48mpCLD7jL2jir4uDzuvRhuWNr5xy4cBnpwJdD67h8e8RoVFGY5RVi15fSkUVYGR1AzPbLxxz44R7UUu1vXV3EPZ",
  "key4": "5iJ7stG279Byes5NXXNvvPtLBhb7eMwtF71fQMvdAgo3LHjy5z7RGM1CXt38cnPoWiWXzs6JKipgPXRy9fp7vb1z",
  "key5": "2j3D5vkpGLmThAZp58eNkCjHHNtu7u14fb2GCK42z8jNomE6JGEHdqctomrrnSHFZGXvH3ctJrSP9AboBg84zQrh",
  "key6": "535wobEM45P4txH7bmDbxP3PZgbHcbf9exQoVut9AnA4kovEGbhvAQREqoDp96k4Dj5Fjy5E63AnAYjg3YPkzo3U",
  "key7": "3ydDTttjb2MPDWtE7ifVKLayR7L9dLDTWXLwkW6VbhRmxfSa8YPJzfAXJ7hQq1EGp3gMksLNNwWggCwmjS8bu4Uv",
  "key8": "52D1aNv1VLdLC2GWt7PCetLKpmp6Ht7ySWGLuSM77GVbkHC8rBJtVkk1vs4UoECV8pJMibsWA8AYyqAJMBL3UbE9",
  "key9": "YVuv4ch27CkfEYkZpPcoww3XBBxrKjPLi7m7FyAaGznaMVpQ92dAJkBMbJvTnTERcZayqub7btEatzpGTey9vtM",
  "key10": "2Xcg6UeP6tSvA6yhTLgKtnaBHfUPPhptt35PHj4ye3J6oxhd2Cn7NTFrsKGJRP6ufHiksGYQQJitLa3XCMuh29Xu",
  "key11": "22Xu1A9ALycnk7ktVxTBroUh9WuXahYBW6jCW5FmWVounPTikHWLE2MKeUt2RiSfp9U4PSKfF5BiFxiKHzEGFwRh",
  "key12": "hNPKfaSaVY1yQT39mXN9aSLWKtwqney77eCZVL6DytJXH2AvNMZPAQzPT27LadYH1WGb75R11asyuqv9upnrpCy",
  "key13": "2qocaetppkmCyhnuUWkUKqeM1sNMXvD5TqSgZLgqeAFq8kxp7PHB6URPSZ4QGUzifMCdCAzLpmhgmezRjaySAP74",
  "key14": "2GCvnBEbXRhb3wwnMLUnxBvZiuMR3hbZPZNrXYGvHe7gybiGJ8m4S8KaMtaiW1w5zxKtmxMnsiFiDzYgdDeAnE1A",
  "key15": "2DzbtTNBv55Keg4eg9NLfer15uCuYyXACnkX4q9SYJq4FKhoUf1kF5WzCysA4aix5VuQupcHLBKrkyHCjWTfhwg4",
  "key16": "67hsvzJZDpvU1jXpJ7Cdv91FgJvrymUhEKW7ESx1Npsti4JLTcehYsRR9JfBB1VCm45A17ezMtysrCmFe73iopn7",
  "key17": "4VjePb2rRePjBcTBHpmeTSHzmRw3UqyfBrjGmqitc96FQqvaqFLkP19DKoeMNFGaGdCNgYc4ABAQBS3TUy1LDmZA",
  "key18": "2fQZm5sqC2Dyzpuvvf8dDmvDrbDV1UAU8hhUReD4SdjH2zeGFn3kViZ3BSik1catDBxz6qi34BKtiE7wXVLsNgzF",
  "key19": "2Xtr3CSxMKfQVZUEWLhybbJYGStEYTMdS4zwe1vKhzi4S11H7ibpxHEKrjE2M6rSZgEDB26k1bbFiVedwG18uv1J",
  "key20": "3wLGfiaHkx2U7rAS4eX4G9vcAxresreKmXz57puZoshho88JjTNuijgnKQGU6ZMEioU9crz83KvXomFuAbsDkgQr",
  "key21": "32TYa5LqB1DJmoWCg6iVCJjMy53YHDwzfd76PtcFgedt68rio4qXpUH91uXmMmRa1acd9TzK5mFJLEj9HMTrBPcU",
  "key22": "2iwK95yx4SG2K4DbgtBKP1Uq8gYxb6x1stWYuSo4hqSWWLPVtJ9HmNWuf9qxsBkuyhkjUe7p8wv9epE3qHao3Wne",
  "key23": "5thd6MgAnFxYeXYDBfZ8dhMsVSyLu6FbEN18cpACDgzeXgun5Fs8vMGNdFVFsVHXrm67ewKdsSQLcSEZZEJ94iW",
  "key24": "z5vkYWpVqyEcVEeRJ3HoHws1RULY6GBMa2KKPngWUQ77pxwJdQEfoHazVvE9qpLHQmc1uZ8h3XpTLZ2YwPR7wdK",
  "key25": "4ooZJo6EE9s55kefGNDjh913KTEVRkVxbpSbFDohMWZ74aN8iTanhsU1X2cbdYHGTN9obh92kpyi8HXLq9PQeFLE",
  "key26": "4HLc1ae5kqGfMpBu3uTrs2oeUKUS3e6wszf47TUXHwUUHRa4tnDz3HgdfGpUSMDjGkML3xuzWucnHTcDUGZvpfCP",
  "key27": "4MJVTLB4CrLXAsgQ22LhWC6idd6ERxXVAM4Lt5WpeWhYtJJBgByaFjaTmQFxEGtxdX9VPkpoNR4ak4nhmqj8xFdL",
  "key28": "3B9Vv6EN4XmHvU6uJ2UxjS6SzTyWdvu8wE6kiP5XWG7MWv5y2kDjYcvsKkjrR6uFdioDvwekTm5LFnqpV4LZUm8A",
  "key29": "5eFfuDHeW5YiGjf9Z2Evn621DSJWzHJ1W2TkBMaLobe9UuAqstK1xY55QC8mNWXEGHHNwGQwqqDDn7Xn3rzakuPx",
  "key30": "opQAnRx4ufXqmsHoPdcuStmtJsMB25mMNYTxnQDCTqPdxaMBMeL3X8hVx8fq9KA8AfsGEgYXdGzb6okCmCmKnHR",
  "key31": "4DxsywVE7QgMr9P2YNF2CFmJpdGXLWguE8MfBRHjaVXcuqJHoMQtWFwZTUWDSUxH2aR8FEk4grCyRfEZhe23d1db",
  "key32": "2uRQzTskNJWd4npm7S7Xoy16nEbU5m92VWB1wRNfaGgBJWrMocVt42EmBygrJo7C3Z5XXRZmKMpGFVJSVt1WoNyt",
  "key33": "2rVceAaYdgsrqtNZQUg1KNPnAd8RrQ29KgEgnkE9uuDz4MoLGEvKJqdJn4ySzioQtSCS11meUNCqhdkg1PwVUYwP",
  "key34": "5LHBLxNxUMffG3ofq5PKyMomiQAiCKHUaejeuKNpo4EJVFc5vgxFQ2HV6C81qeiSj6oo3DGgzAnaamzyLpUZ7ZP7",
  "key35": "5RQfie5BANNauKAwYdkP12NchDaHHxWTYLgFGRKFn1AmvLdB1JRQGYTYW2cgt7yUu9BnxV6c8ZeJwtVxcUziBB11",
  "key36": "52Jik1jHrRxUAAzcTTdnYSUxTSHRKgbE5P9TjpDaWywJGKhiV8pcLedJMxAZt7G1ajsraK8nB68V7T6DeEXKdW4c",
  "key37": "4Jsri94fmZDjcq6VXCANtMLHRVW5jSU4bJ7Knf4NfHBshzBsc8inwG9XbZiGdF9E8deEcnEXLiDe7PPoWDoZACr3",
  "key38": "2vzXLVsUAwjWR1GvvTDG6zS6JoTTMHZk1Kc9WPg4iW5z46sPnii8CVdcbmGCk78qMpkZofW7j5hGYEJ5qDoJRRhE"
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
