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
    "3EZ6Gne37Q3WuLgS3osj4LYH9g5qWoQ3SNjY1To81r1dqRtpTD3UU8nmEoHLrZDbM3xPBYbQuGN6Q5Zonf9cFYwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VrEfdNZpjVttyYm6q2Zf3AwX1pUtMB9k2YxfwCx4DzKGxr9x7CxKb15hqwVqgU2CAxX5Z6hEjBKWJZiDosgSLes",
  "key1": "3q47SLDC9d1ZYRp3eVf7t6EyAtxtL97srPgYFQgGP7CMYGGfpk25U86fgNNjTh59EBgCUugyY8PBcM7c3yVqi7VW",
  "key2": "37TTsuzZno5NqBTNCBzUjKpRbMKWeJfsAjA7QJALJkEQB5q5gHZG5NX5b8xJRdCxxjNJMam2StGLfBg2E5EH27Pi",
  "key3": "2sioZz8M3PuHXyvj1vdtiHxxJURWrtaCCf7GmZC1sdZDFa57CB1PNnQxvkcou9osQY5GRFitnyph4HNBUyFoc9Jp",
  "key4": "3jbMxmRFHb2trJg6f2sv2wGi1kwzKmHHRGoStPgL5hVTNMHfQK75fjscr4nNyPm9Dn5JHD9kVZun1WixMxb2Btz7",
  "key5": "2t4yv4sJef941EKDW7M42PSobryWVtTud6QewEsLeCBFo2xs4MTnWjVeUGJd7PTz69cPMCDWh7GAq3geLeoEGysP",
  "key6": "mLgrN9eMZRjawgWGrT5X9t8rrDLMiwj5HuotDcBpySPoRhyjMFEUeW85bA7aUZo3ujLyVT61857ZiZZT3PUPoaN",
  "key7": "2xr89v46r4aQMuYqrQaHnYn8XXwoAeuYD4VwiHQsE2tbqH5HBYgbRTWArQPCnD9mWnuJmx7Ybw2VEc64nPjxgexB",
  "key8": "Ewu5Vd6t32WS3v55AJTuycigCTbjL2ZURLbW3mWiiPNwbCCR9XoirPuWoGYDLzhtfADsqxpp9wtoMH1K6o4PT49",
  "key9": "25jkxqramoQskEY27ZZ299LK8Pkrs7jmS9z84mUKP4UsKtMtKSrcLnop8dLiZSqK44ZtjoyLjKS728mAghBAow7A",
  "key10": "4QNrcbreEEURXGfCwUfTtrMeGfLGU2TXMDLkcgY8vTNNQetFdKKDQUb5Y6wDSKUiCY5TkYdkaqWvZcAfAC2Dki36",
  "key11": "YeucXJin1MH9UgzYmiXxQ45Jm8KDgT7fXfitteP6mJP9YNuLLwrXPNnjVenTdXhsueUiB2nWWGSbsPcsGj2gQap",
  "key12": "4QyeQUto3ms9TyfEaU5RYXtgDpFymEwonrgi7ucezmPgJt7XwfJph8GBaf6rSL8j1fV8ifnaVQeAy9t2dWUTwPs4",
  "key13": "5zuT473d8WSaBX6WWUx142EmXKnFcF5SxaFDTh4AozWay5qjhHgj8zsec6V3ZvzJxBwQoyJxxizNTWqPwvxVikWz",
  "key14": "2q7yefrXHJBace2ZXReNQHbr7rJBPTZ3oYwVnJ4UmCM5jhYuAZ6rMRayW5jWwPADJd1FN5oeVjiCnWXAdjRihc3K",
  "key15": "2FMU7NmBaBzBhdVnSGjct4J4UKMFrcFXFkuhSBiZeLDm8kgPqYk1iQ7kEijNxV6pv8SUvd1Vt9DZyUkzE4zgZzWw",
  "key16": "66ThLXgGmXqDtRWvmxdANLj84GDhRQUQEbV1X39ZkgU15kaC3EBk8MyPbge8VTs9EgbAXJeKaUUNsQPKc6ASZ5Zi",
  "key17": "3Z4TpAwXGWsdVhM8FpC2VfPhfft2zKSSzLdMVJZKYnMPH8VZsbrRm66DH6oY8f6WrTcKuA9PKXdMhaRwQJNnnrP",
  "key18": "37BgQtXsso3hmMDLsFfuzCuss1FFQK9rVxgkw9nx1fiGmVJMqqrPKanLbB3SBETcHZ8GFZh9KnrqJs6bvwnPujnc",
  "key19": "2WYpc2L5j1SeZ7XSKpz5AEvtLFVgG3eMqSftQUqBEenjxKDerVChWSDogsPDDBry83FnLzsYuJBz8KEfincUttHq",
  "key20": "LCzHvtSipME4jDitnZEB9EePU8NbuvNpPpmH2LrSdp6mgqTm4DbAjRhYDNy8NFz7thpKGioA3HKhQjDYjTsbWWh",
  "key21": "43XNZfJrY4cCPgVNB1Z6tzpKEgWMA2ct6gQzbpkZveii8QkA864B5dKd297XE5VjaLxbbsfhvmQ2YeVxmhuKNXFW",
  "key22": "48LrouLAYj2oVGvEScBtuGtsYy4LejBvdkHx6mrGLMp2N72zqrvSokAsdzQk3HPfFquhzKZAixzWEyF2siRFY8Ai",
  "key23": "iCHCSr5QDVeFohe3orcMmaTDdaQtJUs4SxEzcuKARSvH4zn6h6kpTfjosN2qwWQcCHWCFHQNrXPUsbxTjTGFGBd",
  "key24": "45SY4XmcUrKMpcXWC5vKEVUpHaz4r9m5YXfRGiqR7wPjZMgwk2qvtgknUECwnFGrGRfsa5AGBaopecVbU696JCVF",
  "key25": "4ifkBVXWYYDAvabeG8GnjvpKsv5H7Vj89KfA8HFwYRQq2NM9z1vrAN7aFBS8wJwXAtHaJo4ZxASSXneCDyyRc8zw",
  "key26": "581D5HD7wW9eXpb8gVXby6dLq3GTuB4te7KevLjQW1Awdsb1r5jGdAqTcdrUW9eFMgFo3y2cWhQJK8Ccz97Vts7M",
  "key27": "3LnieMjQPdSm2rKSGPhaHjdPoHV7rxspjQ3BFVXsZU1s58kQSH6GFarCMuNZS9KFWYPVuAHq244z8RZdohpb2qxa",
  "key28": "5e3URSuNhKkrsKJL3Bc1QLoo8j5XazvewHXYhxVxejSw6pXSE74hJd183UBp5s5pEZL5u2fNWsDtsSK1wxioJdPF",
  "key29": "48W3e5LWUj6iUsFtZcCifVe7D1RvMTpee5HDsFKdrWZgn9skVFMhbHH9eWsZ2FbH87w61UuaBrxb4FDVSWrkysRy",
  "key30": "636HFGtG5Nc6XKHzhioPgpPsq8D1agf6GNC14Wg4iTFPXxALpqTT8iuq7ignoRDWUVfikQdPuWJfHGG7K3eFno2n",
  "key31": "ToRTMuZfMfhFUXmQatPutu88LibNsZogw8NVpu77r5Q57x8p816k7XUTRgtX74P5dAM6wXicaXiPvEFzEo2TjNa",
  "key32": "5DSqsUbebu4ww3TyYZYGAPdUNKVyaq3TLH7y5dvHERyzuS4RPAKfnKuoxy4pdd5thpQn9sA1ZajCymFETYK5gQYJ",
  "key33": "3wCQR2TpAaUwkB6QcyNVsbEjpeHWTvyJju5863ynG2mbMRAqAAwSVUPahYNCN4ujEPUJikV7CzFqKYXBGBNnSonS",
  "key34": "3J182Yc7XTr7GGdoM4n2k9tgsoBcYjhaVuMrskDk9jw7qSeXmeVrD9BsvnnfPtGNWn3QnKtvRcdw8cfTBAWUn7By",
  "key35": "61KvbBhHdCKSL5LrNXtugNyVnfyYunbNR5seXJHvsjQg9YGNKdYjrjKnpZ6UqDfk6t5ahfD5pcr1P5R3aaYa3oku",
  "key36": "4yCcx8oTJxX5WRNGfdVpwMj8u2huZonrpQjfn1jYVVBcxtchHCSCZUnMuyzr1WJrixEdkzoWtyDcEexXgG48TGYL",
  "key37": "4VH23fDFgBSoQzp3PJ89NkgJkFZQVbPMTbU7g8aDJe3HwyjBRU3ELGxAx3oKiAxsFGmkFGpVsucF2sRfVWh5c9yo",
  "key38": "4WUZEmKgByVGXNXfGgosWgC4gRQBpYwqbXoE4iyPvgCc85B4R1JR6enz6f4Kmt2FEvEPfAyjahXkEc7xDgEEqeW7",
  "key39": "495vhkCvYFjbJSPuMRHnghkht1pLytRprCnCHPZZHocHxLJUhgJD1VDStH7tc16GvhC1932ahY5PTCFR7C8rbKhK",
  "key40": "3tzHhuhsDJEzdRZghpVavgeDEL5yCA42wYFor1jHxq9GdMg5oukFX8aDDsZhwpbvyPsPJHJpHhg7E99113Kz7gMa",
  "key41": "56yLV5yWR8ioetv8J2YkPVgPZ3hydv941XoLXHUpQ8MFmk4HSBnGG5Bxrp4bcoVXfWke2z3CP7dRnF5gsTJ9U8N4",
  "key42": "1b2PPu5q5JS1xuQEN8STjoMLco5wLfx2ntzEA7oA9mXoSaLUBcgKzfM9ApbKxeMye1barRPRq3GsH4J1L9c3gLG",
  "key43": "sKYXZoZrwJvGbnNbALZwuAv6q7eFPyFVPWWfpcFgLrd5yAUVErfte56JBhnxskaCQUFw5hJJmwMYy5XjRTEqY9Z",
  "key44": "5oGZCXqwDmMRcuqmxKDo2bGWXTuc7D1JFbzYyiTAEFYggUXXgn81xRBwR1A8Tx4SJUnKiiuKKhi8ES8ss3SN6AWL",
  "key45": "4fHKePJzUPvBExqJg7Rb6fV8NHuruxhnV24yovr1MqExck7oMieM2kPhbKkidWnxFXiiVWjag8WNz1Ns3hbDGtKi",
  "key46": "VxCGGNK2PJSaxVaGnD9mDTmuUKBFrr5KvZKENDHgHRrheQmzTn2mDX8qBH5w3V63jZ6kxdDhZCUemcpaaJ3JbVM",
  "key47": "3vXNaSc8prxuFf6bu8nNiHU5xyuEccfeN2hQDQhS7LNJMyGX7PWgMHcwqE3JdSs4oEjbzE1q2qhdD8soy586DsQG",
  "key48": "JhqSNgV2qRZXJ7a9JHFWrHiDMF2ZPfoViVBxs2SEFb4GCBQPAmSBm8JpAjxZK7HjBrkrmLMNTr9b92MrhwLtV1d",
  "key49": "2cKAvdPZCivxhpvZkjxAJH1KFPAwGnTHaX2gLUobDLEMMmtPmwU1QzG9zQcSmFdjB61JqfSSfndB1TspVU49HsV3"
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
