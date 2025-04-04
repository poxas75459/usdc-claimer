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
    "4gCjLUtSGWZ6F8M5K9Lvw8iBzbh8J4orYeGvc7xC4u6t7BYeAbCcFfFjXbiVDA1NwBiEL2FNzcroPzKooxmzwV1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bVbLe64r35QZ5W8cXLqwtSPzLcLjLTCCbkDoEm91pCZTsD6aKZE2RP8Rx4WmcVZwqwsPbk9JiMQC55hMFu5duFQ",
  "key1": "3kkeTEz4av1r29G6ebHAwNTtA156rK23M9cSpSyX47G2c4EAWmowJjosmmVa4toLokTVE4GekaUNwELZaTWgubjF",
  "key2": "4mJLXHJ592VYvcHgrGXhQnnCk77KLRZWHKPhcAJKdBqbeyUTyNAizk1JzLahbMMv46JQr4JQGndTwb1YiFfHcCY3",
  "key3": "4BDWAHJUoHwUtsaWTKrsJMWqzz4rwDz9p1Cm2Dw8fRc5LwCTyj3uQHyUctVsx4TGF2xz9jpxChjmLYQyaUxLGikN",
  "key4": "3ofEJi3tUfoXv1TtiGDt5DhiiE77iQabiKGwVJ5eNyNxXiAXW7q1A6GwFBVhfBzQcDgs1tZ19bCtS3EbrFBLeP51",
  "key5": "5LJvAXxcWXP1of2Tv5f1S3eHSoAdpxB3ijfj1bRX2K9cTsKjP2mALZuXEZ3EoBohRjJDeCoZPz4SgBCm12H5NrwF",
  "key6": "GMJwBAPuJm7W6S26mwEKdMXAhGKoTNZfSjm1xxZqDMiXGkwCHaewZ31kAr35fTkmX39v1usNq8Fjhx85taz8T5q",
  "key7": "a7UQHXUxYjg69EDoMHx2CprDzrtRDXADDycNbrqnbzqyrBpyhJyUhBxBzdQYHqmtBEHCqWUquzb6UeG31P1U4hu",
  "key8": "5uzX4teDBB9K1MyewMpd8Xwv7CbMzbcX5bPSM7DvefY9kHhkZAdTqHeULtTAXJWoqmiMb44etvwUnZnERVG6HY4k",
  "key9": "5uCzBNTmQWcMcyMxQ2TEaeN9KukCedk5vEdqFLxSbef5VYa9v2iCNGPyLE9RRER1xEHN1NgZTZxVGvvoQxm4CnqM",
  "key10": "N9KBwYNAnTi1DyUCJsB98Bk3Zs62bSVsJDFab2jvbtDrhWEN9DmLaGA7ExPUyjt7Tij7f9aGA7bBYZtoF7ZQPGk",
  "key11": "5Unh4c7BdaKEzHJfvTWPPjn8dLSrWwnJ4B5z6DDAmmrGJhz7FRaPi72t7nCAjw16WsxaGrm1up7rfk7z9TyXgAUH",
  "key12": "nUmsQii8WLxjGnVoWeHgKP7HEwK2kxquY1tKdgdieRiseWSYCjXx7ignYdznwL4Z5GwAETSVgT67Y5JDRzoBXVp",
  "key13": "gNBU7gkuqXxiqqL8h5JrNwAGTtwmaNPVWnwJJT58DzyR3orZN1BpN1WB3X54rmBXqGEkmsMwBbNb3gYCy7PYRDc",
  "key14": "64fx9hUE2QCG9YskFVsvV77Zaokux2zT58ww9Euq37TDRDJ4NbocHMHo8ce2idUhk7edvo2H9hZXjgX3q5JfTPKK",
  "key15": "wT212wssnPDrnddu9jP624jQyyMVKXsdQxtA8AiMbtKkPKCzcAfTa7cQq5EjYYeBEHdmyx25NQVRGN3ya2zH4YK",
  "key16": "2DaY32cf3FMzp6YMDicwPht5kjhJKngKhvL6PLF1qD94tneMDScbztW9Me9eHmm4eYH5ehsf65SqNZ56T2YXs1br",
  "key17": "46vLTpX6BHSRMoiQxSEdwmM55mqUt8mBZUNy4gtfubAmVU9TUXXV8FAb5DYqksQkMtkdbHYadzmYRTmpaN8hFgr8",
  "key18": "3XvaaXmqmvoqbrKj9n9MJnhC3MiZP53xEQzneU9meQk82xUM2FQBbDSGGUtUnReBtVs5pdPwfAxrmbZqwJVaBRnp",
  "key19": "3R5MR1k6w9XjWqSag6XtTDuqTTLpD6nvYFcNd2RvtcHtwiA7v3DTzWGnHMCSTkAeradakLNr6sVgk17y8Cb6LyH8",
  "key20": "2ynLUpQfbhYrE5yUqzXyG6Nqjee93wcGYokQmZM3SP6nTbBft7PTp35PPxzWxrcYSJCBLEUP2EahZBCzixjRN33r",
  "key21": "5ZjY8hmeV5GL2xBmy1ztuuPsXK7af7kpfD4g2pJCyfmZFgiNnogrDyp8xQw9HWeX3sMztNbDdYx8e5q9mwKR1WZs",
  "key22": "39dWmdiSHAMc5sz24ckxWH6vcKtYyZx95bobhn3DAHeYfdeY3Zsdzv7vVVAZSpNL8pVxVfG4D2915RQnoxNdNxQ",
  "key23": "B6Q9wU8MCaqJMUvxPjgVieMbNK55nHtdEL7NH7wD71iCDg3hiWQ4giAjomVsnFBKm8mmjQjj1Gfcmk6tcHTof87",
  "key24": "5AFNFVm6GMosBVERKEDHsfTnyd81ZJhC8xZfh8Z2HPkE48DBpg8ccXkNuXEErxSjMhYjsSZQxB57tdFNRAbDH4NN",
  "key25": "3ovoAMrPbjWPUmdTAFKPaYBfWPYnjvSmxs599on5dtH1gznqriyrMZSWcpzr9KsGUpfDZhgchHCSq3yzspfyF7Xi",
  "key26": "4hABMXmxAQ3CjWP1s8GGdmDW6KZuq6v6FX9dNPsV9xJe4CAm6cjyt8M28ejSKfjKUwyPL5BE1CoRevj7yXLSmBWL",
  "key27": "if1qmwqrtjkXr3NMj3fVg99RmZXy5gDyz2n8hL2vmgiJMnwQa4Pxhx7q5GHV5wYoUZsNvEeWZfFHBc3MmKXvpSB",
  "key28": "2CkQjYckdcvQir58Vh2TmTtBUnF1E4S1a4Si82VozGu9gwLemE9WLU92dYVynw9cFERgGhRc6Dt3ejSeDxzyZTEP",
  "key29": "JyE2ZsXPny8XNea3pvdZVR5H8iRZ8EhzeJBbw19iQmaQJs3JMbED6FiT4HY4kFQuh7cizJZjwZy25u7HYroHj5t",
  "key30": "21VexZUJEcu36iD4f9hsxF5r75uopYzSieCcvpmmGZTEVSS5Q3FzeV72qKDr44n3EaKGet9q6ec76JMkn6XhqYu6",
  "key31": "3XhJTzuk4eNWk826dgNT9M2xNznjiu5wNy1ejATbSpw9HjXKFiEBiKmqL6S4E5xaBiC6dvfURDmFw2GCpPAThisJ",
  "key32": "2V9g4rvugwvQPfAL55Xj5KtoaDJknSQenzgkFYWb7WWgAws7jsJgcMukwG7hMcCxFrq7FHeCUvt8sY4g2VfrxqB3",
  "key33": "5aLSPP6RUGWDqrypvZrd9RqErizV9G6pXAQiKR8cmJ57qEmVfGTTAWbdxkofGKbNq4NrjwPAnCFHpuaorAqeeMZj",
  "key34": "5nhPJvJ6oX8ky7TnGZvmWjHtTBni4rRUaMsqhqfXySb49V9r7VeGsvX31EgPxj4wYG4FcBpbwQ3nHnqaAy6Q2P5n",
  "key35": "2Zo3feprAxFcqtPRYwQJxHCVCFCkRq3WusE6akkV2aRgvtMV5vnVNWkf9eTd6exTb7AkStGpZePDXaZ1zRFAUKEX",
  "key36": "eM4omP5VBxWsSPtz8FRjRdP23h8NoPr3S3vat2RA6UEqYpQJ1mSzGQPXcNtdbUx4f5YxPSrRS4pt9fgyoE6VF47",
  "key37": "3EsfLJXkfUCb1jYd3M6m18kdq1tDkvZgHXWRqjvcjjr4n6ANZTaW37zzpTVLWmnYzgzmAo66jhKj15XbgwDtpMm8",
  "key38": "4pLu5CFsB5SwBxvForXncDuUMv818FpAdumg4MhsoicWgG8ph1gtB9p6AjuDpTMwjvyK3qoZ8fg4aXDyB2ki2JQG",
  "key39": "4fcwfaEi5Qsr1V6h6NMimsEBuSqLHRTxZQD75xokpzYTD8dTVwH9Auu5wm49b6ojVQzGXuueeosU9v1JBEKdguXZ"
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
