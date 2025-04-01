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
    "3qCyFf3uNaS6ThcpQkbXbf3khbSzao38bex5gAFGcSazdecBVtjkXugBFMeXTPyfMpsLMfvDUrH1zaxBPRKPVvdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64zyfRchtooZFBs63bFmCZddz5q9o7WCeffjp9L9ozzsdDxByY2XtzHjeTVkk9KSzCCgJ24o7c4Wjfo3ttG6BW6J",
  "key1": "3aToohYcpDNKbjpDXsfpwKxCSWPvEuqgq9u1t7N7KB4UF6zPzcRi4yQeHrYC1UTZ9SvzjeRuP6aWuaKziv5LJ9Yt",
  "key2": "444RyifHJqMZxdBmkwHj9XAVkxSK9m4JPrYN6VXxJ7qBN7KwQY7L2dW878wPnf3v5r94uXBHDHFiDMbRgoVh7SNA",
  "key3": "4KDmufpBvtNetdHzmaiSNww9Sof6YTsL2wqFJ2HjCCB3k6vKWLvjN4BtgMyMrQmkkBJyK696qyzPMut3aaAu6Ywn",
  "key4": "2oGYEyi1WWyNh7HR1ockJzGiYqfp5xK7pG8aLRdrJr1nsxTMUD5KzoLhyBoZEnQdQkk95aLoVYXrcApyGUUreQCs",
  "key5": "5ZCrF2xBC1QPFjBKxWsuADRiSiABCVLzQ3KrXFw1Vwi7c99P24ZdB2TXNFaDQZwdfDg873CbaU8s6X8ZH3mXXfJM",
  "key6": "5H2b5SUi6wwSbg4naHNReHjZSBW2pEAykSsq1i7spExRMwaae27mUrbvJhDVEzNZWeVdA477cjcqumx46UFqsrrh",
  "key7": "47jugABNXTMxXaH49oTUvRC7TkufDmCYriNrymqqboABGiSCQwiRxmaxHwN8QoMoN6zLYfo1MeqRYLo9gLekUdoz",
  "key8": "3x5YdReWbSerd8QGDe9nbQ8vZK31hYytsEq6o4A4smXEJPc77XiTQCZtcQW66X3YnPiV7CgenBjJjBp3Uawv4MhF",
  "key9": "4KcArmDngvdT699o1fmWnHKgZcaEFQJkxKLfWjD32oqoZdZonhyN73dkJPXGAn6HxpiXfEYSzxrDcGZMpS541HmY",
  "key10": "65zf3rHHKHYLYmEgeoqV31AibyqNxafp8NVMoERGeqtvPPjcNC5sJQyQmct9ENpHhGkDRxXwdacyyQpgDVogw1wZ",
  "key11": "eX93usJed3s22RQTXQYYkGBES5SSo9Xq1hFUCJ8TNkcHjZ5kaQyjFc7FG9EJUgyVV7ZcHf83A5fLTd3rELBCqqz",
  "key12": "4ibTtcXTDH9LhyJ26EARrh6hH9mN1eMe8zyfiHoMaM2g79eynKPwTKr89m9DTihaUWKeHDG3TXnAPDvSZQqbgrMB",
  "key13": "P8qpBUGw1GDiArNkQGy51oVkZXWEVbwxEuFhkoCbeKBnqFz7gi7g5nSqBrkYEPRYQ836PSHcx1PgGKduJkSJzHa",
  "key14": "mVqLKGNBSs5DAsFvsF9wCHttH2cyDWXx7QHMjMV262G9HizkPqBuJhKJKDJ16DDah9gsAGp8WFWY4z9UTNtXnFf",
  "key15": "4cztjAECnsBWkSC93ULpYfetntCquxZHxapvvCeLHTBXxgopkuaKhjb3DaHNmpd51EQVb6yWbf2Wd48TTsqfy1bi",
  "key16": "5LtixZouuujnZiQukP4ccDk1Wdym6LbEVD3X5LtwLKe8zVaDW4Z6vfcw72EjNXgB4j6aJMBUoHoJspJJwLBBvn8p",
  "key17": "SsWvzjb8BZwykDKX6ZTh4XPLGVbsEiGKPbv5ApWSRHQ2uMQv5ZSS7X17DG7gJuLiWaT18Tef268DtRC1RAsQuQJ",
  "key18": "AFGiL2jkbJ8PVKctdhEcANsvTbFNJwRcdZ49FeLXohSUwvFt23KT5MhjS1RGxZQYpnyFJH5AzhX1e3yNPiY8JAK",
  "key19": "4xT3E4n812dpyepUN2pJNRYRuK3Ns15NHPTw3EW74y139dBLp3AB7shvvAftyokWzRTzRRnRvrJdC2U7MgxMYhG5",
  "key20": "4RFYSJGcZyj4EPtkyf5AJaC7LvWx3X7Q3DeXE1jZDNhqNv18qUSh95CBacQ9h6sYUM6JkMPX4pCMAqXU7ZMuUycL",
  "key21": "29sHdtU8EW9p3A7qbGcMeGJbFZh8zaRwY7AMJtb6yo5mX2u7zoyEvGA2nwCKAna7Sdi6UDGRKMxSWNGhjkbrdyXk",
  "key22": "3pH3Un49G5JJs9G3FLADUkiCn56iEa8oeLeRMCRy6Ljhb5VCgVBZJPemCwAZFyduR7XCdJEVjPpS6rqK33mxPEAt",
  "key23": "2kq8qjhhsRL3yZ8SB1LPeyssYCUygm7qiuxtEJspSAD5mK1tafbVtDSq6TRhsAwJ1k5QTYZoYVchiTNDFvgmjLdB",
  "key24": "4xFkTXzkGpQrkMa1xZsH5jntHFFmRgK7BCPLz8pfLDd2ZNKnPiLrJyUtLCxrcK5oaYK5cp6ZaiZuhz7gkSv3VPNV",
  "key25": "36xK9c8gC7YvdCYSPUTMazbpSedTN4LN43TL6ccw9i9nbLJZbJMZpYDLiswST4MjwoVgv6vCn7kWkteRuy1bfCKw",
  "key26": "e5Qhogv6S7bfuCRnDVpGkcdCE3Y2j5AzGwzYCrsda1M3VJd71CddmYGcmWwfBy16VjsYPDBCs96s2PEa76UQT7Y",
  "key27": "QwakacjTwUuAcKYQMf4nqmAptE5rkHsbUYwWqrraaCJisF9XmieAoHnCGrs79HssBLc4HwhhAWZCmTyijF8PB3F",
  "key28": "wjDhDgYEuSycLfhqVdAV1pmuBfFVh3EypuSWMd53HdC19zbk36iGSSpyRJ6as2BaM1pegiGB1tjTAinwDzFBZrv",
  "key29": "DAMoULbRknBgsMWBAYjYfm79orDG9apVc573afKVVxgc5SmpudZNZ7DUqSxMQe2Zs75ZCw5LXxYHUMmEXnR6eNq",
  "key30": "3eL7uwxXjoLBC2XJZtvu5VEvzFEVAYgdCdNtg3jD4nGPaAahVL8WJ7M59uejAsg5sEtsisGS6zHGxecYL2C2xkj5",
  "key31": "3bvMV9RX7EgoTstQvpsbTg68E5AQNTciUZroutrKoa8jE4hkeka1mjYQfGTgq78X4SivgpXUQ6Yz2uDpG58C6gpd",
  "key32": "3tRBK1onBFgfJpu6xjpcDXZyPZRGfXkvJBh9GdZMyBTxzHVAUBsQi5F7UvYmBaJ4CvYDLpgd4LKuX37wGtavQhDc",
  "key33": "44sUKdvVs4AJf5PUWsKSUEv1rg6E3KjtjLkbohtJjE28HRYcqxXyNuKyen7AdL3VhJLNretjT3er2WUqdesHbFJ2",
  "key34": "4fgVThaCnNT5ytRXejM6RGtdTZT9n8MH4rtTK4LkqLxVKJ8daoAgXccSQjomM8JSNvgLL5nH1L3mzJtyw2AUNcmW",
  "key35": "5VjeZhHCpp3DS6TR9yksYxQv3VUrv1ZZr1wuSTwVsy3Q4PXWxgXhyFeP9KDWd5WgHSVXWjp8TpiWTabzAzzXqZJQ",
  "key36": "5B8iKPfF3qtqnT7qPrFiTgYAFuzXDjp5xFuX99LABhSzEXgQfS3ZPpxcZErp8oyhyVB7dGeQY67SiGL58AigU9DL",
  "key37": "4WY8GVeejJmex6cXCB8wde66Pcq6PTNgPoBZQVvxXHQNRdFXdK6G5zj3Z43RemuGRVPDNxWMeqjm1tiU2WdmSVgW",
  "key38": "5WeE7wBAD5QXsuLHx8m3RbqwHwGzDKctvFgxwUisqX6TPLRX9bxNYn5uJvWw24WVsWaTNcW7VNCMb9ofxa3Xo7aR",
  "key39": "5F4LbbgSsCExD4YF7NZnPJcrhF1eH7sBRQtsGQNBnXAVdCvXWCzDhzYw2AcVMeX4goioSBDBJWnQZx3QDpvFgD93",
  "key40": "1M1skzW4znZfqD2trxTHzVdN5kNnpGxyvkeq2hhxanVSLEJXaffhLCMYFc5NvqiFjerJLnugQCACz2P6gM8PZAZ",
  "key41": "336MRjXmvQrrqPLTogq5J6mYMxC7UieTu2htMMzusfYmMNDE1MHtSELFxxRchfCMJUWWTQTYXaAkjcbLpNpJNRPQ",
  "key42": "grTWBgqXgtxp5PG1Y9WjgNsdF9CmnqMXpXEFxCNmnkRo8zYbrNLJVLFkRAmCCxPDBy9xZ2B7EWLuStJj87eVnLo",
  "key43": "2E4ut8tCkFbmLmPAVntD3fLMSE2KkM3Z33QPPmzEyNQuvokqtoRf4Qg2AvVBTP1exSiBMY9Zh9H7U1bSLv3Q4dfG",
  "key44": "T8EPPEgGwA4ix779qKa4HWX7Wq3jAs643EkJVZGFo1sQaQ5GNvcZr4F4CYYa5Y645Y2BeHAH1CeKDnkQimQ2jLR",
  "key45": "4Za2GHnyVNRpWrTvAL9HAP4FqLYfaNZf2bQJSeyU6nxJiXArJZdC4XE8ZfG5nPkf8iazuVcMLHNeHstbWTS1eRhx",
  "key46": "2VqkXRkfxVqNqqxxx6WdgZUUCDrYFjA3K8kf6ZLHyMyA1wpkVMAjo5pxUxGAziqa8UBzVSZ1BKXn2j6RqnrtvVus",
  "key47": "4s9dFSLExJXCtgRSsEQ5RbAWVWDz3hgnB1oFrstWiCa54e3xAvLeVcD9amDyRbsGUbaJyvsqzGY8cmjFcsjU4GBZ",
  "key48": "2TLcBcoSadVTv4UwqErCQb57b9YsWp3qxQxoewy79CLP7WPSr3cVBBk4X9bt3seoR3DhHWZALX816faxCefJzqks",
  "key49": "3b84rDsydaoNaj6XHA5tuDsKhgw9QWqQQNZTaCfQuJRtnLNBu1o9d9bfzUnMTt5tvUUKxrPzec5VohZdYedjPQGH"
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
