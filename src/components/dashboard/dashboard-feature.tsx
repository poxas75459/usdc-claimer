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
    "543FLVqg21dDZC5J9cv278ZCDuuAohiXSeGjgNh1wYGZ8FfxAPp6sLWZSYLFMtYkzL64yCxuiDzk4LQHbASGG4G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nj1cNdev3ZhNhtU4TmrSKYsNt4zdNKv7dfY23TKKsgAk1XZgTGrQhHArCAJpFbJXHzJFSDNFPi4ztPXTaTpa9UY",
  "key1": "Auw4ntki9ZRAzcScsxXpXD2KAevAbp1zsuSuEWU7eWpWGPx5fTb2MPVDsjqKEoDNEdyHCZPZrPPc52ReptK7yHK",
  "key2": "2TXfuUqsCpC5nq8WPnFnFaDMdd86L62jpAYcBhwg9GEqeEJEbaLSonSLFuRfgvJFTMsjmRHitm7ks1zPKfu6ZHCE",
  "key3": "4KkWC8TC1SLhwiLWpLRGQDoNYesDdPrfcHiUEWpG53aKUrzxYEjFf2rbJmvJ2k1X3FV3qQjT9ySiqiW4sr9oG4kd",
  "key4": "4dY6nfHWQU8Q7hXRgHGeshnae8aJv8ocTWLxLgLNZaT4CUFeNJv2YCF3uhTZJdpbn1WkHGoAo8Jr8qMKMVtFBv5j",
  "key5": "2tJzKduWxoTFWt6JJCLUWAtRzcw91GqD2AfbaDDLL2HYiKtxJMKeXVdJQaxFgXyuq2WK4f5LmhxAWyytXHtf6PcE",
  "key6": "3yTemq1Y7fVXbLdJ6BxZKikqP4ZFFH9U8VZKrmhRF9JHm6umEqGdjFE8vx4byvQpTtHbr2U1fswmRfkuUT4j8Gys",
  "key7": "Z8LoU19xQEv65cE1yxWchkFCTvFGQPneaRrW3k74DthzPxWdYd52TCtXsckbPR8S7rBuET3sQodo9Ce8jD4KN4J",
  "key8": "KaEKdWv7MvnkNgoxriGgmSGsLK2YXqumVN4mDFtzSsS28vtozhx1dUjwCnkfLVU3zHhTGPtNhNdx9zu1YRBw1wq",
  "key9": "66a1RzMZUewQe9vZh2RSqNwPWSMaQwPAknKqGExbdrJ4As9HKAjpcgQkoxYCsyZMqEVkXcCrU7i322iayMupUUKB",
  "key10": "2qSdaZ1hH4oc3T6qWWFgjyGQbMmK5gK1LF3hi6S9RWViKmhRuXkFiXKeHEXRv5cJSJSoMmnehu1rHHhyFtFg2k9M",
  "key11": "5jGPAqsw39ipupag7d3HodjGAHwScqv8axV2wmQrDbJF89Vb7B73viqU4sXdgfgxuLRjiFSWea5Xj1czngmmZK9E",
  "key12": "42SoAmuDPhceq1TNRYN8qJnDrBKU232rGFRmv9eWMaECXyk8KLkQp2Xknq6YHcDhKrzfyMcZ1q9RZ9NkqBPUWvCE",
  "key13": "3LWnYZ9vCH4UJtx3dBCbbkviYE7vKGexW1kGy2zm2ed829DLi5iruGEdJCZWGdDFzzU5JxYd8hM5ruHqep4J8BMD",
  "key14": "5sC6zj1fYGviY731sQRMxyupxBJMV6hFiUpvSWFLaDc9uvCRDZTE6wrWVtWTeQfZyVWnADVM5R2NoThFp3UhLMSy",
  "key15": "3ECBzk6LHvA5wx3tMofrsCsEX7XHw9zt9whGUtw35jzGjUqZnFbAYhqNcUf9BgDCoHWTd4HKJfjztn7p2zfTCChW",
  "key16": "2pyVJG4dmymYQVozMMwPB4JFsTQQ4qytDCULnYmMqRD5Rbw4pprKMiPyafJboBocx8zpykLhRW9ajXWed7zjtQhs",
  "key17": "5s1etxs8jEJm62MAWc7BE2Eu92EsCnent2xcB84tUsgWPfwrEP92FwkPFRSkkPzNaSV61Z6WaDtGTdDLXs6FVD3m",
  "key18": "4ECpfJ45EFXvNCaRbPEXLTqcquRCwQX9RwZHV2TpVRinjuyniwtw4BZS1nDNq5oeSzHzRA72ygmfrs4qD94Fnyrn",
  "key19": "2gr1RrUagSbntq8zFFV53ZaK5npRv2bk774vFUUba6hkh3hQUK6AdJspyThY18X4WoGxGzTNk8YyEAkihTc2AM2h",
  "key20": "3ww4ym8hBwjwLWzzJuMq2DYq3ADFD9MHGNfUX9DgtFga84WH5Pxsxg2qFTNEpQm8QLwKhkizAPS2mWcstMq2tPfm",
  "key21": "4ZeG34zsaqwfnGUvjjnYxv1kf7LEA3D9PujeMPkKtYPbgeYCGXDMo1bH6pQUrve9wXiY8m5hEMBHo14AFTnX5cCR",
  "key22": "63gjnmXM4EXo2C9maK4XFQP6ov3RZB9fJ2QxoK8hdz4MiMpeNBUGiYwttmpMBwJGTJVZDk1PdDF8V72dadesWu3L",
  "key23": "3Rvp7sNXA1sYJ92v99xYhjYzJCNBGrPmCj1yTKpwQJMTnyUBVpaM1rVgdBhMHPyxpSwPXkMdb2aTGXm1Qjg6EnKR",
  "key24": "28QoSwach5MmeAQozvYo6sEptzfeuSqFyMogmWAaXCgSednowYczB59q7YdZUGNXhPaGeyK2R6W9ShEnmDi3XUus",
  "key25": "5vPaXhey1PAkA9yQ4eJBd4qJEg6KrMygmvBNfHX39QC46gdtrqUYb34AtrW8uULoL8kyYW87MNkiKES7KEbhkTmg",
  "key26": "5UG1dksaFcj93YLn9XJsqe9zZKT9Lz9aa6m5qAemdaXYk49BMwjiCNzMZQMUgGp2F18x7EQu9M5iZGg7ALNcM8HB",
  "key27": "27HivcyWytvGX4ygHWNdkf55kxNGfpGJRZRntm9SXuNehMfYFZZXA149sK7RKm8pVJWFkvFaRGfQF9hGfi9TYGD5",
  "key28": "3CQFqFrkAkvJwhD34WcvDzZn2s4DrmCYMEtH9Qub3XU2LRjamid5QBMSbqrUsiACBNjcVQZfyt1GGJRVurrYeXuF",
  "key29": "mQYwT7PYd49FJ7q8FB7QTVgs8cC1ENgaixC5K5ak9Mo1huYpbEQrAa6iqtprz284cEyuar2V7wcmZs9yqtajeyE",
  "key30": "2U9gtaeceJneFqNe7d4rjBGJxUA5qvCn7MJwh2hHrCtBv1G8wMwCGJLH44qvQxmZqN5ZqUXTSgCktAWhHATjbJh9",
  "key31": "4e3TXuUmPtVjyiAznTHfhq3Fvye9MKtVSiDdjWStpikdu3rV6oqN8SMYot7VESkUV7NXki7X1BEyu3QGfM2ZWKhE",
  "key32": "2sBrShcPpMK1AkMLwpncmzGRvuJSRw2cxUTFFviPszTDi5N3HJzVgtkqZikfYEQ95YpHLLo7QZp4g7Ru12L687Wf",
  "key33": "2AMiDpXGJMPs3tbjNpH2qLJne3jVRDp7FvMvFLBVfYBrRcGdFwz3N3xBoYzy3rqt7WDYruyHxtRiNPH54uGSQCKb",
  "key34": "wDJrfNTcFHw7KDQZKiiDBFfKqVvzJ2EF1hvPyDHfmNKq7ek9PLtJDw3LTC7hGN9sXEMCxCs5zsRU8CbwB9idHHW",
  "key35": "2arUdHjwW9RBQWYm1GZfgvDiM9cPYMqTmWhBdsZtP5N5uf89QD5n7obsG5sza3XHdGtZ1ygDk8QRfTHmVVmrAQoZ",
  "key36": "27731SErUQRLyiCSU1YUEcHqaFJRchRBQhXzgbGxo9s5SyjEM6ndUwNKjiLpASKrAY46EnkXBuU59dQstjL9upyS",
  "key37": "5r2i5x3DaHp4nZ4yGGQHak7wfzqXMqawPEE3sXZnfXJCgA3EbKGP1DoScyR1GqbytL4GSdBGFc5qZshFngeJBStZ",
  "key38": "24iTCWWQJNuSEbvotHxTYN3gDf9zKkBHuUuGwMzcw4CtUMeEBjrReBvHKwiba3afj2eay9Tv2oXJvWL8hcdWhmzh",
  "key39": "5bcq6mkEF35NX88PsGCxjkFuM2tdovh1Y2Loi1QdumBjrM3aCwXrpe3QNxuZJ7wDrYdcCAvJCfmVZS8W4jkRT1w2",
  "key40": "4uzsqENfVuJkbY3C2quxPTqansoeUo9djYeJY8JerkLfiwmZaTqn8wF8QQmKfXDpfrAFjDVnPPPYzvbdiRu3Lsdu",
  "key41": "74KDBnF6Q4VeaEbQDhd54MpKoib9tHUyaVqxDNp9VK5JXsnxXkRDpSyHH8vs9sWz4KtV6oYB7fwYdQ4F7ahsSXu",
  "key42": "2FMWMbiqLqFxsizW8g2VsTyNkPHENEsshsmeSVwujvxwKVHnPxpyX9Hmurb2qxWB8BfhsF4KHsdZqidvotqcKiz6"
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
