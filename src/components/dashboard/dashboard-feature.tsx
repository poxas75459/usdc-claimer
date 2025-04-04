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
    "5NFxPxXTh9ZCYdNAi18WTUg1RuDnzf5NiWkwStGkmCGd8FF1dNhbnq6yhNgUv6gKw2NWSJaai42buR4F5mWGqdnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DAwc1JLjH1o2LPY4UHCsHjnBeyNx3YJJkdzAudbv9GJ5THuyLotTmSddq9Tx8LPRGFCLTLhzyrRud8wRxQiYtBD",
  "key1": "3VbcbWVTRnTD8cxpXhiniBK5DNmWW49WYJd1bwvZgx3sbaQ4v3mRToN8qhydxUuUD9Gsy7Gdjhx2t6YRqn9GtjHx",
  "key2": "3F44RNZU2MynRRxinztZn8YCdR6Dvqhwpw9mAe1zaFPZCbrieLbekcwhX9Gke2888gmefGMQQvzNTvKQaX2ofYuk",
  "key3": "2NMTWVt5kvG3C5RALUWZnAwTNUyA3s1Cr5yvY5pKKqxWmhaKrUwwUjRa3KGmhaopUtYJiN5PprsA8a673aUNGTvP",
  "key4": "2ohZJeynNoPWUTPum6mW8nLpWLPEEVAj4y6XJPXgexCBRBRkCnkjZ4fxh7PoyH6uFPUSxyHJNHgfzrKQUwpeptYx",
  "key5": "HyEtRachh4cV79n7ibaPqdP6gTWDx4djXKsHTRHqynNiZo1uXVhRi9ro2yrJJFrKUmeXh1U3pQFwi8cBzJuU19y",
  "key6": "3QYqES2GHBjnopaoATWhMKBaE5yb99y4s9cbFDNzKiX5L24ixKnYWvtj8wfsZ8w1viS2MnDqmxnG96HdeQRVPvFG",
  "key7": "2E2hk6LeTnBbPpu9QuRxiuBxLVkVbHPJFS6xGkRnuBpht5p2Up3NrG86maosZvuAGjPqJihqgH5FkV1RSnUsy6NL",
  "key8": "1UzXj2qDqMkZWDYBpQMkAo4QvguxfBEqjFfttTsJj5GxyHzMXQG59buHaZwp2V37rpbSQ1ctYGdkgAN5eTBkV3r",
  "key9": "3JsSifDMdW4frfSu2fF96K6vwVECvL7jcpxwf5hXBvME89RUuvDfagEupVCsa6TDLqC7t8dU44BKG4SM3SzGwHKh",
  "key10": "4kpgEVD4TfeSadLDqgeSXCH1To5FqSJHgyvWE1zCegwwHRRaSiwZZRNiSS2YBAWLPZs8V9otbaPiN4DiQsCDZu6q",
  "key11": "4quLh3aTqvGM88ETQuFK3YvuvLPd4o4tX8yhpD8AioTdsTjBYc3ao4hRWULE1cJz2Kc8tWXmYpunaVoayKGeuM7i",
  "key12": "4MUkSKPPDq2ywVTFFYsEwBhtRgjZRUBY9S22tsC7FG6JLw4MNb1eS6HyxawP1GhMdeCvpcjvb2Tmfipts9oPrumJ",
  "key13": "2TvnT5A2su78QtWmBJH3KrYRzpbZoH2Mdohta7gDDP2jUSkJQVQiKD9UrMnnEgA32n7mxnJ54CNfuUt5nw9HJN9p",
  "key14": "4HsNsr5pRDFqGHuCk3cjDbyf8QZZzB1rwmurhLGnebDMn5mQwNMy87TXpiKXsdkv4UkRiHdRC4eKwpBk84j5uPZd",
  "key15": "5jZW9obVXgx5bhW6ntkTqzZZbJ3EAsf4k9ZinzTEqtqhGpZzMniCdLcC8t4P1SEL1cJWXEszwMBLHTHMafHKmvRQ",
  "key16": "2ZirftwwdAHpffwU7DnspRnf76NKUDB7Y4ypbu37W6Qp3hWPiNjxqyQM4tC9fQcrV91AhC5LAUBM43prgvtophfm",
  "key17": "4ANLeApWbCH6yuMju8RGUrbJs1G1Lf3anRWoZvzMd6swypH2xRohVQ15nJZnDuQzxRX9kGxqTKHNEod3rnkusJz2",
  "key18": "4UvJxByypiXmR9Wy4D4hVSuPnocEtKkJv8YEaxfGCaee2W9dGDny8iWbviuuRcf4FcSXYDf8vj89g7X4gytRUBX7",
  "key19": "YwJjtNftreZnwq1xcwK6C4Fj9ASfzdj1eN9mZkWypMu4oxAWYPbuXVHDkMqSRpWSohyQnu2xF8ztTxLsvvrG7ok",
  "key20": "2xtinoW9Yge4rPyhLgZLbg4yHkqApySNZxBu3sp6nFAkYtn2XCP2VARpM7q8xZTSdQm82XdC4eHgXrW6hFVrJz1u",
  "key21": "dLnJDUE6nx4JBSjxtaJC8T2BmyVioVadxdP42wjFbhTQEx3CtoFojGSvLf54XY5QxRSNvJ2hQccv3yNREpkWabK",
  "key22": "3YaoucUrXVx8Dhowqc3aZ25q9KNEDTpWHafgAhn7hhrLtomj1ecMN43JAUMroHUN2HdHEcYdCwEteGFTU2DR4YPL",
  "key23": "4hA7jUJ8RKNHd4VLXWbLmFiyhhmdnymWNobWusKq3Syp8bYJDQjzuBLDqzbnxmTQ3sKUCFMpf9jWCHBGi65Ti21w",
  "key24": "2pDsboY6YmD8WP57y5JHfCnBsUWUeV5RGK7n7mokatuzb1XBPukJcPYyQfvLcpj45Pa5oofRcSHTjT27UPMsL8Ej",
  "key25": "iQJVgE3kPhDfABVozxFo6cFn6VQsDpDYHurCPz53tf5YqRnKq1LmrLpmcN1qn5WzPrx81ifxyrxcC5Yyx2NurJd",
  "key26": "4jYrR2K15LSrxD3DxWFNdxGEEy9npZpoKXQSxwfaQkEtNj9VVMA3L3GbKDUJpaaMoTGmeQhXnNnNSCTbRjDeLcg7",
  "key27": "2q9fWDtMZJiz5E1GkvN4Z9QDS65UN6XLWJBu4AZZfutZgerJUuiqA5iBXxB9vg8erKycuozbZe9ZpB2Lk2zYSHFS",
  "key28": "4C6RoEWR1sEn9gdF2rpVjyWTB4J2DXBwjFLYK3xTjDN37bL51noJvQuf9mTDRdU1Jxh7MyzjbL9uDBTkDhCfwwtR",
  "key29": "2wZS9GiWXqwGi9CS5ozTyAXqT4u6iWfqcEAe9VTmJxBwRjaHUkNTo7ZXUjkczSPausrwcpgBAY7ERaR6ik3hwXQS",
  "key30": "499gn3pYjefAXU1nw6NxwQGtDrQiV2u86sDobtemZtGE934LdHXoesNnxUGNSKGpwmpLghSQ4UerRHUvvhpfZBmP",
  "key31": "ez6gJxT59wFer1eSmvyoPmjjtsfUwTqBGj5mhW4u7H6GZnpLMzzFUZNj9ZjprZ2m9fonHBUBaRjGCoKFDFag4ze",
  "key32": "3ZPDwiHrVZ6WkTkYnpbHHWTVDaHZARpU8hvVzTzCaqmUE7ePJtMiVsDAGRVtoxNNmwhqhz95iFNNET8b7TjFKAcj",
  "key33": "Y2k4KBoefQHeFtp4niceTWfeWVTQ63MCDAw3tKMjsSXv5kY6LDDfXn5QnXTzYNAieZSWygQgM9ttjYJ2qhRbDhv",
  "key34": "3tormQgXLVWXdbB6Ahk8xqX1equJgBd9ErGXQqjHqNxTW1ugGgemthjTLSmAFSDUSFej2A2X9UX4zuewMv3fkH5u",
  "key35": "3aU3CWV3Ces7goxz6tjazBbxUVCYCkjhxT7u1e7s9s2iZZC7qZuHsA3HDqEUf4WxDQMeqzV9sxb2Uf7dytC58xXt",
  "key36": "2bMYtf4mtp3HoKEyTkJocXgt9AC9R2fsSQ5GNdqJPizbmQoBrRwNBWkphgi9Q1U2JreG4t75N4QtDsuSVkVn7kuk",
  "key37": "cxcMDrP6VMJWdhSG5GKtCYM74HSGrLra5L8HA1VXwVdEWKrxtveXYLkj7zwSf4DkVcgf9kmvxJrZx2CZrZqwYsE",
  "key38": "3PVfrXVSXPbJpWwc9cp4Xmmnh6ns4zfCWaex9rCbyks26pYz36ar7M8fXDJWYGrSLkp6BXQEbZeTBChpx7kCXYsL",
  "key39": "62JwQGR9hHf3mgBn5m7X9oY5DmENAtQwg6WqVLtDKfjp5kYEj1WyBkG8HXtxeKbxLZRNynMK12sWdJEWe5vsjhsF",
  "key40": "5dwUNfG18NhurAUtz1Gqn9DQU4teVBqYchKsJXfimBFJ1cqjApfDBWSQP1QhnixzeW3dBhcPkp9t5YUHndCs8kNj",
  "key41": "qQjLhVUgm5sgcfPy3Mg9YkMR2cZdW12ZSjQKy9TuSts5x4GXbAPqKFvK7nxVK9DECURp4qD3J1SBPJn1PFf49Nf",
  "key42": "2TDdm6TLgmfXdX2gVy3YrzV9K4T6q7vLTYWCP9o3SHdzwJoyWPFbceWB8MvJhp1rQ6cAB6VdDSKhwVmbdGjB1mKX",
  "key43": "YJAWnb6UqJCQzo7PT7ysudYQjcsNE2cjZGqLmZz94WjL26qFrLZ7Uar63wSH5W8VEpAt4fSw1ZjynX58TjhMUzW",
  "key44": "pf2rzxWVxEepsxdDVsmevMvE3c2e3iibXgNvakaW3Qmzuo4VedrUErspC39kgSEDB3wNwogwzuwsBpDyRiXLAY9",
  "key45": "DiV8bwwkAXBSEvHDknWDpk8bDB9g7B2VLErZfCA9aNHfoYN4HpLrSjtMzFCxRc6rnYMwwf3gJYeaLz1wxA6kDoy",
  "key46": "Yn4xNumX9NgJTKvhs3s1hGgjwTR7UWWgDiDnmSjLbtjdFtQJx9HEHw9AR31mkFPQNnXdSt5bDBaHF11M1WFMmb9",
  "key47": "2h31ygK262kMeGtdy5bZUuRdynazj1gpzyDymJw94YP662FPPA2YfK22b39H29V18ifJ5DsHTm6BJSB17AZL5dE5",
  "key48": "2u73754aB3p1ce6QVu8V3b8c1JKhQMP9g45BsGD293u2sGXgAZqtDe3XSGnsZvLm9a6tPMpY6QiuR6cVnGWtwawE"
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
