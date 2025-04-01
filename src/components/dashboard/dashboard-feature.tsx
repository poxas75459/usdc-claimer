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
    "2vMx69qQykCycBmgMjzgesPUYG3K3CitvJsCHwLs7mU9EPoAaoCBMjzdzDoPLsyZFAbkrX25TBi15eZF2aP8uw1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gC729pzi5Hb1rkA5UyJMcMSLFDreVSL3QyWdMxy8jk6WKZAubUrbvyDYGU1BLi871eAkG9bWfx3KZFnZnG713qa",
  "key1": "8mD2ZuCErmEuoAzC6KKbK3Gn3YUNpbtqiAHedyTvkiLRf3ytLppmNBZcrZZhTRFABnF1hBAtm8VBWaVeidPF4BE",
  "key2": "4mmVCrys7DzoASxzcUPSHnuyKrZBCmt5GDaViL6XUM84fAXQaueJDp2ranriEDAYUYs73xUKfBYhzuPosfbexomf",
  "key3": "gi8pXXR1LLkqaTeLPdscdXr4JZwLwZhnkcR6FZeR9R9WyzXoToDE3voRWZcVXhuAGHiJ1HV3b9dCPHu1vejK63q",
  "key4": "3K3B2mh9pDo3gZTN6cAh8J8DqpFWTd7ZsecWwW3XFDpayBCKmxwLpGrBKPBA6nJ47MFjbEGo89ZhWMSoUqjihZVp",
  "key5": "3rBmkyFmNxvaPf9KFGLmZAApUgmC29vei8meHJ4W53bbCRCi84jAhWF29J6gZeUZC4mAmrmXuu8nJegKR4VdWpzo",
  "key6": "3ywm56sJhbqWToTRPJ7rE38nhgX611pLj3pgKcYnwegCKsAxSoWBjRYqAH9VkJSw6bvVjSszAiNavWeQVbCLra7g",
  "key7": "2pbownnrKdd9KUvyPTt6hsX3mXA4KDJ5FYj5S6qxHhB8uaAsi3vPb6JNko4Ak6y8CRLEeabn7vkGo7FsUX6zmniJ",
  "key8": "fpCFidsvV1CSpgB7XYpzHp7QdyR9jo4X5brBk61EKzoXkP8LDDoLEumeDHC6QGYQnLXqZYdiV9HJ5EfSuWVEPQD",
  "key9": "364biydj56wmv1uQ2JDnbqigCWPrYUZV7CiKo7vgGFNBB5eVgtPFZbGtjAfd2rcnfYJVu54qqXVqkQzmQsFSD9JD",
  "key10": "5ss49XqiRg9xmP4KcYuib9p6bPseGCjiAaN9FBDXkgcLi2JrsLugdfXrRdeny6iCz6Pg28suW2i7dM7EJePYvi2",
  "key11": "237vEb1TydeVN9o784pb6ocgF6Xci7pSNPKb3988sbYk9XMnCtU45K5CLitYTU6mw8fXGxjTChHhHHHH4GTF7Kg6",
  "key12": "2DytLjWzfzxqDzw9V3woWnBxXewSGqJjiva7goHRjFyWQHmLHK6Jem7PPj1zQd5adHo1mUcK9FY3kcdxmrV36KF9",
  "key13": "3C1LUe6o2HRCBS24FygDWiddRFd8VDQMYFotPuZZEfZQeXewDELo5ZYYZsPhD7hoVpNzkXLtsgrBC4wCuqZbaGHa",
  "key14": "rUnHaUqKR3hymxi5xLRYzBZEzxHtRmrU9Xtmuy23rbm2icyvWs1dg9Vp5kRcNTyb5fksQn3ww7Ay8xTPMWSvaVW",
  "key15": "4Ssm6GBEVV8u66YPqKh8LCaw7DtKLcYjX59XKpR4TW5KKguSLq99ch53bnnahfbYGWUszz4E6cjXTWRpooV3qHXW",
  "key16": "2hNTaBtN43jfyu1M1kLNcaoTmxB51DGAsriAWcGgxCvLBZBRDYwQwGdNPRuEMbi6XGBtibAFSeNANJpXhFdpesqA",
  "key17": "2DLx3e1fcyBXgPx44W5S616crdYrpkYVedov5q9HenivD42cQkkx8AXx84siF7tJKzVP2KbvdbCfpoe1DoCzhq1b",
  "key18": "2uuqPeN9upknw8jF2wkqcixc32UC1AubGDyT2167HNvdXWtn7eYF14xQR4dY64qBrvpVeNdbpAJNS765Hneyicn5",
  "key19": "4bAaFUZ6AdDk96S9KFe5tDBGLPeWThxqFEQWRU7gN1KEn8qB5HKjhLUwGyNLubVR7QBFoFZrW8U9ZL3gc2U8KjmL",
  "key20": "47ErfKd97Jimqv5NjMeH9ygrY41gxB6ydkjUfFbfzu4TCBrsurkUUVhUBjZDBcQVtcT4t8946LJN3TmR4wB9Jrga",
  "key21": "63FvaFfURUVGemkxumsGu9cUUCr5XwEuEYTJaV1JZ4aH5vhkca6X1bn4MFwCNU5bv8zN65MFEZy6gBfeLu4fMpBp",
  "key22": "2UDhqGDu2A4rKampAXvHUwCgUnnJAuUd2vxRHrnUUv5cytgsGHWdsoo3ffvjHdrjs9TFjQK67YD5755zk8XNBhRQ",
  "key23": "5CHG1AzoT5XCCZccA5BYnWM4GwG1WsArgNhGttxfFj7omt8JWq3ydRUCqcnAYjLshDEuEYiz7YrsGGJsYXLdgV45",
  "key24": "gkjBrLhHtL5JSSBu5R5gmoTvAkhddShY1F6x2MApmA1i2qPAkn9u9xMLk4JmmYZXJczZ1no2ZyHDi7uh26JfDGv",
  "key25": "4SDc816pW921Wm4dYmFdC3ajEui71Mvv4GNrkKQ9JgRSPkfJhmk5CPqzjciugL4rSningFUE9HYJVqKCENVQtoRc",
  "key26": "5buUWxFfDCBECCKrbJ2YRyWwhTTT4brNRQN7vqozA18bz9DVU32nSHckp5no9o5d7g3hMq91PzBNipnXBXBhVuQU",
  "key27": "561heZGThFtZDPEtsni5SrVeXBqVkFs7WV7TsVa9TKuwD1gusCn9xgwL7cLQrk8bbgfAgqzUfWZ5gTnFeoNP3zFM",
  "key28": "irVzwD9vauRRdApBVcY5QRhg3mCnPahtTfVqBP4dx4RAdjuewKi9pnsDSdpV2MK8x59qNRBxARToBWMBHXjtN9g",
  "key29": "3ia46oF6DDM7cds7XJ2zJFw8xJvwVeecW9ebcAQih7t16EkobvFyuFCyi4Y34gNPieMhn3HdrH5zPsWLSbpjMwGA",
  "key30": "5kssbb8JKhLGVDDzMJ7PtJoiGz8NbHKo7QwbYiABsbdX9A6htGn15LasdcKyLVXXPwfbovsw5SbydQ7kNYcSRnD7",
  "key31": "ovBBdRNPR2YALgtBKJeRn4hvwtWxXFbakPdvyCVsfXDLnSD5mShzEfjRynRzaiVVHkaSTfCqzsGfdGnv23jeKdB",
  "key32": "5moz7nxykXzyoutvfNAtuBEo6yEaF9LPecNyXcB3Qy4VAmADpvfEhTYryogz4rFjZX8H6XvdTtRJEKak84z9a3pJ",
  "key33": "4z9DJ6sspRxKRsMNYWufiDeLwWzXjFcruLYnxYwxSFHfKCskSN7Q2opDj1ZHzNQ5GsHjW9KwMJg9TjrZBahau6qe",
  "key34": "5wYknZKFuMq6RbVzpv2oqSwrv4UCYRTBA7eqxp4nhUiwQFFptEMp8TPWEFh4qJxWvh9zzC4bRH3YtcWQMAYhELS1",
  "key35": "4xbiNkUZS7FmYbzCxk9UGcgPdXfaEd17CqRiuwFcGBnfodFxUu1xYe3evi1sqBLQRjnaDT34Smg9wHupfp6nMu2R",
  "key36": "5i7hFRQNHWHYYSq8zzr8a7Qew73niSnTGf3Neu259ym9LqFPmg1uTUYQm3PoZrV2SF7ZMDJ1yy7dc8EwABHZsLhB",
  "key37": "HLAVe2qfRiymZ8oiie6Pbbc1KWDSkfyybVd1XCp1b52Ma1oKLjJSzQon7AG8fmr6gBdNdwsLxqmP68YFNsbzeRV",
  "key38": "23zDYnZMfzAgGmZikTVjs4eYbpa1pEFZ6cc9xX2TrUCP2r4rf9sXs4XMLrqktthYoozhdD8zrgdsuxkg1pvc5kbT",
  "key39": "5wDV5ixVxM82ptdmFWUXXYcYb7Fw1NWfYMHvSPU5gHyp13d46fnFsNzjrp8NHzHynMds71kZuVqYZZKwi1p6Rzjf",
  "key40": "2wwBKCuacFqzrSJPi7hfuf6XadhHETk5TwRuNzUyrJrDa4Cr8tQn5wHWQBNok1UqyoLNta8uPBwehrVG8tDnC9BM",
  "key41": "2DW9KJdyhpbXzBoJvwsfKsy5gGrskghr7BtW13eFYy1jJtcMjCxtk3TygBhhxF15nbRARNjXh8NLiyqnUrxx5wCm",
  "key42": "2EozJ44r1LJFgUcZQbp2HxGaoNS6DkT5DNxCEAmCsaFjGUK7q29kXHzMhEqA2CNNgXPHSxLp5uyUKzTCZqS9GCW9",
  "key43": "2UUnii2gaX5F5sHtp1Uruj1as8bk62TvqxFSamb6u12pF7hY1AYT6C4HLtLoZSTzgtojhcBhxi3J75fijtyQqXmR"
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
