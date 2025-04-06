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
    "4zjicVzm2bLTCPFfHuRzmyfn5Ei99FfW6rypmrVPDYwe3Dyd9Gh6Zuf7Jo7swoCTkt1X941p2y7Pdaj2ceeEUeg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RpUC8VUuzkaVRm8X93e5SDGwLrKEex4geM9QRrvmiXmC6V5iQztY3KkBNS7XXyS1AFEWqX9LWCvusq6CbpR1Tt5",
  "key1": "5xDdsvZxjRmmfAW3cGbVHbACK7zTifpb66J3myhtGtmyP5ztXCPSqBWCnSK5cof4kUBNa4TCAb1AG9jgLQ92x2WP",
  "key2": "3yVcbcPV1X6tVqk7AyUTFEiG4tyAnB1kn2SgajvRy9bqt9QCNvtQYxXJ1CNhxt8mifMeF4M8Hg9Y8VedvC4ECzu2",
  "key3": "2jA4vtsRNdfazvqnSbvon93BAJc4pVPtDMdANwdLqebtqUaSMjAfyFJHvKYT21qTgm3i32ARi1og3R3wwNMY9uzD",
  "key4": "22AXRQC88zz6MahxsFH6N47oeETy1ijQVBNSUJ1qGLdrm2XhWKREKwEjMBqWz9ZD3to3DqM5msEmyzH97QNbVWFb",
  "key5": "3E6YrSV8Xuf33estbLNcA1KFcWEFgHoX68uWP7L3NP4cFJMbxrQ9YnMtDUsouAFWBZGaLL9oVMs11caUhX8Te6fD",
  "key6": "5nXPP2TMDxSR3dV2UzuWnxXLaR7ktsnkMdRnxRHSJ8fkmphmU33e4DdnQHU3g8nWodnq8Q2dKMZJtcac9RGLte49",
  "key7": "4abpZmCYkoxJgNrzvfki52jXJ2q99zZKLDCrZoq4PquQn4uzR7rpH59NX3jQ13xbF8P6koQfkxEGaHc6hxC9WTYr",
  "key8": "zQqJryasPsq7dLyPLjCkm56TyPa1HLeqSadjFNVYNpHPMifMmuDiSXh2ZWi775gXppBHZCAkDLAe7hiRdFVWDVq",
  "key9": "37RkT1TUyUM6kW4KXdYgnQ1U7b4rsw7ZPMzNgk5xrdACyswfVAEkosVcd99JVtJNJdQV6T1LtBC2QoZgsvjvsANW",
  "key10": "2WcqqgSbc99RjPGNYMea1KxL8i3W38jHxfDUHf1nPGoRjnDwLHGViyZJHx4rcuJiNzifRsjrHtUFhw36tf2uZHS9",
  "key11": "nzJAJ9Tk61X43NmerH6eKjj3FhddTzqWk1kD82Eyi4ZSBwAXWaeqcZb5Lx2ws2UVGQscEQF9PxikUGi8LvR1hbs",
  "key12": "5kbPCk8UtyC2d7XqvQqprv1Fz6ZCAHqS4nunr73M8feBfESsKGA6m6p7DfEKjFhmLMmAqwu97wWt5CW4WBf2Mwyx",
  "key13": "btU5NpXDzvcVGM1X4xTZdjJASYg57ra6RsBNbNh3PThTHmkZHvefT2dPXNA1jgPuR36M1ofzv7UrUMjDGUsBqPA",
  "key14": "4UE2CNTVJ2SvNWH7fibamjoGikHRuRSmqTqVdJSMf8A5fEQz8h6cKf2RK2YCQAa4i6VgXsBCge3wm6ZEr4Yv7Ya2",
  "key15": "oBWxNW4vhY5YfosHWsz8Sx88woGabWUXAXgLLgRKSPAGBeurUg7E7WHJjevicgnWK3wo6mYvKzbpMEQTuhDU8TL",
  "key16": "5KpEocVamkraLdA2axgq1fpkYH6QyDp5XVy6txo4CpZoD8pjEArF4Jn2vmnYGN5oE8GGs7JL36puwX3N2GvyZ7G5",
  "key17": "2QeUQZbqRXurdH8murNvVYQo6KzD5Y8FAgCuKPkCYhiMM3XSgNQhaYAHv5Zcdnn3XyPBcVGWHh9MpX2TeFhwQoX1",
  "key18": "5GL4MVCQ2m26LKu3tcqv4pc16SaQAv1aBdLCF1Xad8TStVG9owYgNuLBQMkHiivnZ8M1V2azTQrebfSta6FGJKZN",
  "key19": "3UTcmUo1BcufyhvmGocPVRP5qtYVAjywhod8Yv8ybB1AWhR59tGS34C2cvq8mC4WGMqjUy6wDurPhQ8Xam39PZfo",
  "key20": "xUph9SoWj5HgofUoWGMAzEd8hnEygnHNn5csNkUDpWjvQXCXzDqoZExdWKnwMActNLXtM32VRyaMrCo7PFSTnkU",
  "key21": "63VYo4yDoPjaMVQVvvctN37bUc3y4exeLb813cG6HKhddHQZNyadJ6nco3xqxu8ofL449uyU7y39Vhf8xrPSot7r",
  "key22": "5Rfq6cF74QkXi2vGHH2CZUv6P3FAh3PgQwFcdbzQJAuKvqJc24358e7aBJ7YhAxbNwMCAUWfzwx9NDcdwLHoEUiS",
  "key23": "61fKWgVQ5xcxK6KAm8dGp65cB6b2EUCQSzpFfCQ51Z9qnXbPkFDFxfbL6bryzYKrJnMsBo2bsrF3agwPfjd6wMZZ",
  "key24": "3DeobMasVyT5u4YsdujGizPGxQ747i8MzcaPruFmz6eH1esbkQ12pyr8SEi8m6jynYxEp8BpqEjjFx2tqjexjoNh",
  "key25": "4ySPbSFcVxH1R3s5RgNeF7KZJNxUgJeH77qDaUKsXQmMHUFkGT5SiFfwzsda26Egbt8nTPoLoY8Po64cEow3ge6P",
  "key26": "3d2WBnZ8i42vbT13RUBDJZvnrjhXfwxpmP5acDxyvBq2BVpcAiA4NNMYEj697o69ZTzjEzCGMVRX18jH47Y3YN6q",
  "key27": "4y67n1DKgL1ttfjwQAoBJeRW953eSaDye35D2zGCZayeJTkoJdMn342bm7CaivKSa6qmHiteyMNZF88h1vG5VGSj",
  "key28": "2WujrbUiREfBUM74vWSBsMeJ61cJrgxjjC98k5WyDk61MmZifgzNcd3aXubj38x1R9NYUgHnyfUrhxyPFKKdp5Ez",
  "key29": "26sPVoYxevkTLC2vdZV4VyEeUMJVcyo7KNZ9gAYtEp6RZ9YUMm6JbyBFKaTQYhKQENkCRK7SNABNqEcnCasTnMbg",
  "key30": "2FS4GFxLCAChcTmcPep44TfqQuR8QxKSCEbWJSnt7ZM2PzPmuUMR4AK8zoLaWjcHQVdfbBkh51uiwXipRMAuZpds",
  "key31": "2wt9y4uN9RpD5aNLQf6hijqASVomCrYhKi8GUy4t2b4myhxo6RwwsrfJKiaVWG7uZ8YfmgbZLijPTyjf6qwxidhu",
  "key32": "uDMbNdJ2BkhcX5GUCP4fu7H5tdSRqiVyjwWjNdeqzmHwJvupx5xpUy9vsAh5deBToH2pgFG1urmQkacTDef3Eg4",
  "key33": "44gjVfGbSkp5Dm4dtFAXHneB4qVuqYFpdtizwFEGXFmZSXQQpZyXFZ13mJjxuqTPpENKTpsX1VitRrxk9bpfZhbw",
  "key34": "4RdfuaXCG87exc37H9j3WVaqBR48jeu9rFuefunk7f7venYexJRPQux7XGJHudBAmtfnS5FgZUbZG5L7sZuRZ1nv",
  "key35": "5SKwpR8Vts28tkh4kZ6w8Nb9eQ2zxHBeERRrzjBVBPRuf8cAADxMyagYXaz1Rn1ayTS5DGoWCP67ofVJcpgAxUqg",
  "key36": "3nAKf5XUWStpx1eSLHTXJDd6qfEhbH22kPWqUcTK6LYYWNGZbrfH2UfhuvUvbzZHcuNUYP5oKuVPJEj7CAr2YtmA",
  "key37": "3YveBBM5NB3m7CZ69oUAaZzoo8tepqyWEa7m2y2AAPMQUB7Kcdurz6KsmYTjoBMLEBVma5rooT5Kxfkw7XyprGEs",
  "key38": "4q4WuBPWfFJ4ZeV6x6CREZBzYqcmh5Cg5jEy7e4jg1YipDZGAYAqeaeRQkwRKm6nxApEVte5S9fEwfMDW5kWAgHJ",
  "key39": "j248LSwoHH47HMymyLLkc1y71HnZTuvF2gZ5A71LSAWX7t11isNJapXmtrbXYqULQYLkDtKoCsGyPWE61ncTN26",
  "key40": "3GCWUPnymj421D6MmaXsNBf3xpzNXu3CCcHGHauxJBDkixYE9Qrv21LLwy1EdypSN8DTEPvfSgQEnyY5K7REyvz2",
  "key41": "3gStcG4LKjqhEJggot3Jkat21NUyJJt3iR3yvzWfzZihT6so5EeUYFk4jshyLZvB7EkTCMQLor4xpbKkgCwzta4f",
  "key42": "2zLLArzfny4JotHpz1fMrCpcQ3zDEDbi4EbP3pn7zk3qr6DQtj7f7fvowMFXF1iXMEGd3QT3xqBkHiS78UAtHTve",
  "key43": "13tzKZrWioc5wDw89fg93UpLW4rmTLw9Wvx4siGLaF44mBHXTMz9toVpgGH7mq1vVUSvCqpiPz3PR8JhkHqejTX",
  "key44": "5yf9AzH7CVRGruypLdE39qS3pSypaXyXZWS2Yx3HRd17jvtb2phHgTovTG9JKN7ErABXbEwum5ksfMB8nHWVf3Bx",
  "key45": "3A8RAa1bSqYByvTLakSbC5u2kKhdYwbhYf2ASULLSMiURen3tsTAsHAZMhxAD8HENknffnwhNt78FHPwS1y7q4SS"
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
