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
    "4Lok4eM3H2Jqh13zc3maiGdg3zNv5UbZRBXuy8npvjZpFtJfns9p1eGmL5mNdrsnUeDSPAzPpuhQTPWJ8ySTYrGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qr2ESHmQYitEmVVyaHWVE6Q5ehqzjArA8rFfrNCfEA7vjZ3Kdgqi9H1v3NXCR5nAtk5oNCFRqMzpnzyVXvqxGWk",
  "key1": "2PaH8v9jhxfzKyZ9ubcPXKCaevNz67Rje849rwD7uspxUyoDDGcCcpVVBHEiW8BqE829rcyUz3o6AGvwTF2pfJzw",
  "key2": "49SMQAg1BSUuxDBF3vzPNXDvyoMcQe8USwMP5t2h2Z7i4FAGR6YmcGqXGR7xb5aVNwbAPDdJi6avDv1oGKMJuW1j",
  "key3": "QTGZPcnHDFVP2t9QF63vscvmyC1nXkg8JpFmBPFcx6s5uskmCEAQQkcG1BjuqEKRXMHnj5b1fcKcbjLpKxyYSpX",
  "key4": "4ckyNSWrombtoSpgpCkrpMTfdkKUaaEYA6L1gwitF5Ta5NFL3PnQkAEPwGLWLWvUPZmQsf3iBeAPDaTALe6Ddzie",
  "key5": "5MgZS3ECa7KTgq1cTKe1zBUfvAcM54NGSicQ5N15WMHG31wscqriyrygsM8WpoBMd9eYMd85qg3T8XZgvdYRdmv1",
  "key6": "aCFozvThujsxLzwAXNp3sbG7yzecBLQeCzw723mK2bMvKqxc9PCy3BGPs9JXFJqU3LgX9XW4n7sXW4MinGm8MLo",
  "key7": "344Wy97kc9BHBu7vgUUdGXGjDyxKFFnHbRZx5JHxt8q7LBmBDAmvTQR5r2jAtUpxdujaxP6MDmC3GjqqMpJ3K38E",
  "key8": "5Njs1tC9BvfAGFhvBgkBKnZbvbmjUwT9YGhyL2CyLRnPRGWGeuYWueZqDynMenJwV7Jx8YX2FrMiuCY4dFU4g1WA",
  "key9": "v6sXWEuE6SdFXo6vFK3ZxtQJLp1pK8C45es2RjS1caSEb8414oHsYkiyoxfBHZ3bVLqngCrg9d2ddwB9akjsKrg",
  "key10": "4JncDanWa8METitDrDLDCEqhqBPx9jAZaWNJTEVQ63LG1FzA8SZ4tgjUqqBfpQr3zyTus9PKb8Z7U4QG5s7TPqZx",
  "key11": "5dPEewy5s8BRTKRNjhcACgp7zAzRQK2tEq4fuBW39wg6R1mCgzkwAhfSJwXWTmZtXAbR1GhypoK9of1BuAdBeJdp",
  "key12": "4DomseifF1CkcWVjwywvVmhEBASWmkprGmRpi7V9x1QzFdAxh8SQrqcN9KANQxTmaffnaMumvvgFqMz8L1pHLDtR",
  "key13": "3PKTVoR6bVXyqpsizDnfsqJGtaHS11xcMrqUsGpdEmu85RF4jtf2AuB3TTTgjKc31mS2mceFwVvY8KM1ZEECQchj",
  "key14": "2EyB5ydfXzAoF3mignDwZA3wdezmafpvLAfjYwSi8fQN2nn5dVR2n6zfUKKNHFh9xdrAc21XFkPVfzs6MGMj1TwG",
  "key15": "5eTdeFMoPi6TSz7etQJHfa3FP5DeebEaFDi8iKQ8HZeJQL7dFYLaWaQaXRFYWMmo2C97wvbfw3BrccH2DeFVcPZ9",
  "key16": "52YqTF9PfFv7zHBd2NtBxVRyKi7N9kJScK6HWFHUKptaE9gUECHMQnNuS97xQUcjYUhkSB2xvAHwvt6b5HxyK6k1",
  "key17": "3Svgou5neimdv4soorLLUU8zuR9wSSsDuGf5TPDvxmUARRZRu7gMfk4rBzybfnFnBp4q8AW9XdqUisd8JnD6kqui",
  "key18": "5eTsnfShQyZbR7F8SnNKPnyR45JCsRHanauyp45P29RfVwWhyM68pY52omCXy4Byg2Lfx68vuFSz35sFJkxXeZuk",
  "key19": "4svLvyRgc26zYUTs89WZDChZdKpJieJYT5eUHseV1GmWtX32hYP1CZCCNkFY39XK8s3raXRdUHBUHGEr4SyX73Ae",
  "key20": "2znkQcHiToHoakeGNZahNjD68hna94FDtVDgvnxY5xWs1rsHTLYzaAsqoARxVYCjiPdk77SE93JPHYiZsu3EkUx1",
  "key21": "3fpR5jDxEWzGfLyGXdBXsbzSXweHDxi7BnrHJYoYU1sskGikbQ1QC4mZ4zr9zuTVF8XM2ppmstqgZUtCA59DuYmP",
  "key22": "h7WTuU3Kosygxhi83pVJXXTED1fNpPP7KRzE2Cnw9U2VLSJdRahxb62t29br8qEqYNZhBvZX3pjGWLfEyUtCfjW",
  "key23": "pXqZMfQ8pgX9apqGowCnQ3pg4LquXUYH8iV3xkFYX8YmoTELFTnnGf4wXPZy6qay2pFu2LEfR9uk15tuuH3Lfag",
  "key24": "3XCERyKPZzZZpkhupYNQYDy42rewbHW2xY8FZi1pF2p5HFjv9G8SxWJmnQii2hE88QFs2tVrVs2pArb1D4MKFYyc",
  "key25": "3TJCbdcRAGznSR9mpSnLh9n4zAoCEkBrqEpXcQXzs1bBZNPqAjyYQniEYo8vHiwyrJbQ8zCchu68gatNq1Q1zK8b",
  "key26": "3324t3NVCvZvcGND9gfxUkF9nx5oNteAx8izBjinnYG4LUfAHq5mcSuWD2mYiKafWf4cANg3y67G9Wmq2T8yPYst",
  "key27": "2qLoGYqcr3XgugYHMdHYZYcpWxsCPPxnv5z2GXMpGfL7nT842xuyhKQLVgQdJdAADtgfeskCAE7JDum83xqoCTbv",
  "key28": "2cJAyG5BAc66RBHAMEBsNAodm8UCnbmd8APyBhmBHYhX1EbApBpFvd6hrLVnmuTH5xtUQaUibNTncUJAMuGHCS9M",
  "key29": "3grNQX43auDUsKL4Cs2MVpGnz3WbiDmbU4kiTMESx37c87ksLtMVVQQjNQFJmvS8TzaSRkSCjMQhUe5ugU2ZrNhu",
  "key30": "uBEQV9bGJvFHk2TKwo6VYyZZzK6nq3gVoQ9hn1pwqfRG9FVsKsuw8AfJ2CbDUjrRWLzhEzCuUMGN5cXhS7CucL4",
  "key31": "Nhe9dJxrKXGDLA4AvkYWyiZNs1kb3Rvo8CPTTbg3qCGsk5PuSsD5Yk4kPmScfHk9Q9Hzukv1KRRqxU5zrzeQdwG",
  "key32": "BVskr6qDUChyXtcYnYqXEhmXBY6kRAqvThstL9C5m5Brgm9Zpbsz93CfbQWwektF2nsNzyKrotk2D3oDKJxQzQL",
  "key33": "2HL6kDKKPC8EVJvGcpTEKaNtjoErmhf7J9K9D6hqJB4oGtVJDRVjr92tETNkejqrs31iWWKmkvJbmFaCg9DeSkf6",
  "key34": "5WPUBqLjYA3XtQXn1oysHkRkn34pQ3wpNW7HgwwfubKCobgsXBV5CM1XRuwtBk5zpxTwTEnUKVBQZ38vX6mEisjq",
  "key35": "4cCRhshTJYHjd1dnSGzvvT24rXCbN2iTRsReaCmrvvfWLQuFeD1yacV2vebZyLopNCceEvpEVe6mtgKKaMspaRTx",
  "key36": "4or9ZZLKoNrGPJeEdZ5EkKGpFAurUBr4WDFpJ92WW173rnyTUwX3nftyyLASwahTTPkftqzyTvB265J7CE99RPsD",
  "key37": "BkZck9RJbLtLpg83JE6NxrpArpEakfBbfRE2ZkX4Mjjj5JBYrn7M2X45VvBREAzLXWQKxLaHGguPTiJP27mKo6b",
  "key38": "38tmLdiWETUvTjDJewv5LdmoUuUbMAdnxdyYNw9g6PKkqXSmZCSfdM5PL9sAbHrB4gFoA4hKFmJJA6uRHm7mz1jd",
  "key39": "41QQq6fVVtW13j4Dyt7CFGBt2AUGQEnoprKvoZAUyge56gYWcUUPGmyXKBcMzseAJ34FuTaRPMA7U1TRA5F3KbeV",
  "key40": "3zhPUpwL7p2j1dDnPAJncxfToA5dn5mNwMkXdM47TF7cHzmModEEYBCiEVGxDUmM3SgpLJNLLS5oCfoXBq9V9g6x",
  "key41": "2ehdT43bf2TcZTVvRxU38cc8ETQc8gxkCywUAyGGDWw96mnGog4ZV8gqc1sag7NkvgREqMYASxRDKWQYSX4ouxjk",
  "key42": "2uvVTnpLoPvpHKbobV21vG5LxkZNraf8SfjCRZXqgKEdyptuZpKq8J3gfHyAWwEQfSnKsaD98WTgrXTGiWn7xVBR",
  "key43": "Dqpe98wytHu8HpnLXxqxCwVqLwsXmhbEGzModfcxYKd8P62ZtZyghfiSvNNmfxNufHyXmbWEh8cK4AMkqJAf47g",
  "key44": "5Pc1K4zA2ssg4Z337CvtGWGcd5ytFrRGzMUzMDfEeyQ5NgpzMA24xa5bYVAdDuEouw7FjgywWTQxW4FqyxiHQfPz",
  "key45": "2QaKrkJKA5okD4xScL1XHTVvrQ3R6WUTT8naMM4U8VTtuXEgbftnHN13qsNK1maR6kepAvy8GNrLoo9U6rQuPUQY",
  "key46": "2RD1caihncy7hPGYWWiRBirvBrtQ1sRPG1JsaEBzFrN5SDU3NZm7vvymKbQ2w1xp9wMFvnHw7KoSouc5dboVZRZt",
  "key47": "5mkSBe91FaoGNbfc8v5JRbZD2TJ9ZTQrpHzrSUbQPKMc8z5gpNkysraPXTQFYTokERqu4t5aZN5T7BqRRLJg8Qro",
  "key48": "66XSzbsQMkXL9UDA2yLEgktiYtNm473Gap4hx9B17FTgYMuqvGiqmBAdd2EY3B9GdtseC4DJH3WavPY3Q8AsUcko",
  "key49": "2NrURSkei44xo7or9miy4PwkkqZW2zUsPkx3SQTNrTfiqe5nAeqxRopi2XCkDhnJE8MHf56CSSLXCGMJ1unvmCJg"
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
