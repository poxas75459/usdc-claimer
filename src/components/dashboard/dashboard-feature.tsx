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
    "2M1BZmHMRxwfCAhhMzHDd5YbR1SCAfkejGCJ9KKU9rytDmbxg7fy7k7trKQtFjqyGpTmP8JeE8XCwZhSx7o9Juco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sH6sbCGbGFQjWmvURkWYSCj6EgeuQXAqufmmdrites5mCYEypRpHuGhw8sJ4GLS3mYC4NrVWqwYsKLE2E5UmPn5",
  "key1": "DxyS81S9nYAAQyEsGP6EZ1Nf8iTHbyfhThXs9BGELuLVEWxZe25qpQjg4eTHC35qzEyodSZkwaCroxmjt2zNcXY",
  "key2": "433jHjyvx8CRC1cTuhw56hGRVd6ZG1vHSys2VqpcgdDMcKz8nJqZuVkprtAnRdfbpJ3DamEcUmubkFwgEYhKgnUM",
  "key3": "kAKpg9Fwi1ZQ2FAAYvtyC5LrsNBj74Cq6AZUJN7rAnz9egUdhTGnud8cDsGh44ziuheQ3Br43PZRdem7tZ43ayA",
  "key4": "2kdjtBciehiVefi47x5Ca51kaAriQdsF9tWcaZSWfoLd1sDKgESR4B7HqR6GdywBzuAKV1MbrVTbdF8c24gyYkQj",
  "key5": "njkD5z89QYrrKBRGHYHEvUVyYDxQ7Q2SjvtkrS2u8Q4d9RpDr46gYUh9vE1igg3c6CopE4stc8Qt6wQYzzJgY5Y",
  "key6": "2aRbkDHN3aTXHeR7WRuoe8aguXEAisUvn48FbCEUVUnk7eBd7RswXCQjkeCVaMbWuBePXw4RoQNPB4K4Tpk4TXdu",
  "key7": "4grdcbHRTW1zf4Ui5qDHc65qhb2VZKNpTv3eDn5CZsnESSSRMQt1qYHTHYU4s5DypJuUnonB9S3n6uJGU6CUWbtn",
  "key8": "3jPZxKL4RJ4WVDfUqJR56jWqwz51KhmsLyK1dLgBgDgMVioMVhrA4quFwtmapdkAuhfGV2UHibXZP7Fn7NToDtw6",
  "key9": "XaoZcK1YGbwLFCYsq4WSb14FmXYPVDFztKGpy5WxtxpFhUbCFcm2sPq3GMxqLsi1U2E5YU9EeXXnyHDi5whut3M",
  "key10": "57nwsEJ4KxydpYu3s6LCZto1f7hegkyZmoRngtXTdt8MMNukNQ6M15twvoh6rCcAJZu2YLkVt8QmrGwKiVdecCFJ",
  "key11": "3X79xXXc1Ru3H2BHAcoFx6j21ZwsEgiYrT9qzoVCegvEeVSki2rDbfh97HNCNh2rfccw6ncN7SZMvnHy9RY7211R",
  "key12": "2Mi48hYcxNgjuJY21siNVQT9N45ScuRfD9WW6mK6f82RLoPcdiVhDQHzNHBvF1nb9qpfn8RCcqBEAwXdRMQdE5XA",
  "key13": "22n37FQiqDFJPar5syZ6obtxM4uFXBQtNm3tKcuNW8drr4edBaAVCWwd6sN3mtGbuPT3sq98MEWv25SUHjhrFAph",
  "key14": "HmVxoEhhXqcXcC9Bq7NzHzqjVbAds8B8yXfjZ83W9GPApv43F6jz5zLZcK9Hmp1ubuZib3QCCa2Wxq2JVtVf5Ht",
  "key15": "3m4WUitB9rUWjnwBXuJaggWyFod3WJAZZgNsWNn8nNLoBkfLqgn28T14LkKCVS9b4FNFoUVAU1be99jCrpnJ6KDQ",
  "key16": "21sZ5TxpLrrcaB3KEdffqRyLEQKRkCDA7m4jW5cwtAsJezaVCTNQxqWnrQjW4NGQpQjQrTQtxU6cyeP7Ja8eYfC8",
  "key17": "5ivfKjtFsA7fJbwmZTf6NtPGTf7AnQJ1dTC7qrrX1xqWnF85q4CsE1aZFUrhE2pDioC3Yia14noQAm1BHBwhcLi9",
  "key18": "67jan5AZ7JEtfcXTgQUFDQ9oezPn8JLTRbDrQGohogGeAFzeBA3TfK2CUURjgABeKmsxR1tSCh5ddVQjacJfsQni",
  "key19": "4KeJosGHV7F54W2sHk4Vh8hmGGkAEZ6hJNPNFDAFPkqJbWiphSzNbrMFXnGoYxSPZisyoDuSe1PjgMUkH74wCKBK",
  "key20": "28aU8DEM8EecJkScR5FSpWWGtW357QzbVp2FnxMU8MyWoL8jiViqEknGgwdGZQF24KKV4unchYVMMGTawQ4WwLEr",
  "key21": "3v5oMyDZ777m2VrsrU33pB6BdLrq7yZBb9JJcs2mpHSZQh2iWZWh4BAPtyaiXv5DPTbAQhzvH3nvVkMkDGjAKvjU",
  "key22": "67A2q56Pb5sTtaxxc6SdSSFAiYDfu2kqsxt2C7Tp1HmQCWYxUyidAcoEPpSrxf1npnFZZtaR9pZaqsCWFRb2GvAe",
  "key23": "5WcX1mpnWHdSYioynUUXKYccBnGe1jvHhR7hRYHAFs6NJFvmQyWxqUyM8mctVaBkcvD4nMq1MFYfdXR7hYKZjA74",
  "key24": "3YHNdK7zD3rHRUTMNoDFGSA73PrVy6wVwsGnyDSpZ1AM3gTvPYvvu14z4Kn6MXLRGP2r2BK915WrqpS126mNHMC6",
  "key25": "4CHAdAcpou8oH5SVK6NBP2WmfmAMtNamdRUQC7S1hL8JVy2nYTTv7iKkpddAsLwsepYW7cBbczXgrqunfHc3kQ6X",
  "key26": "4ArsvsuFgpnuU1BC5AZK25ewg11RxreY2spF5hd5HPH8U4BHniygUfDicrxfxULmL2AtiAbHebevaiGc8JpSKZti",
  "key27": "83C3JeMYoitJzDWssUWWWj5gXUVtL2QHSqiMwkpRYbNt8CEaFMd7DEEn21brAxbJPV6KG4MzqfXjtE4byy1gBSk",
  "key28": "2hbnGJLnuyeXLq6Ar8KaaeFfW9SCvu2UQW2ikSh3Ko68QLetkikqGj1LRzn9hBY5hTw4QLwZsoBy4FdX5sGqbTxi",
  "key29": "49QwAiK4yJdze45vC6uMQquzWhs6V3RSdszCshy6wYtWXL7RS1T4WfrG8GVQQL6r3DdbM3BidbgTgEcZD91npHVM",
  "key30": "fhFJTXV4WwMgB7aMiRwNYiDbnktC1Ky1AfYtMFnRPh9CkAZz8LgagreP6cjxcg72ufn4hrpMhVTtDutTRt64RAD",
  "key31": "3A2dWqwMWzbufyE2x2a28h5JnQiWJDfc5YL9UUfTw5SBHLQr9Py98Jy4iVE9fzoUcDDyLsSCZTniQQvnLKzfMWDe",
  "key32": "4TMGbrUKc69pKUB3CCzFwyssiha16o1rfvH85uVCdut3m7HTFuceH4seLSyVxhUtpwiGEWH7NwBu325HGjQ65UZ4",
  "key33": "3PzxQ9mBjQUGGvzkRWAUDwm7bVSzjnRUKMUWKjK5atVgYhNJmiWX74RD7NYTVNcbQ6XC95cRkFi3SqiZNT3JLqNP",
  "key34": "FZduBdVQXfHsg2zwcoUVthT9MrwgWMccdyHqgMhn8nP5nvcU9ryezSNwqoRpSYMKaMomDKYToUcM9U3mfpGShcD",
  "key35": "56Vw1911ixUu712WsT4QRjqa9bcMFR9FeufJhwqBkVkSEAtwYf3sFwrfDqHgNRuJhMtTE3np55hmFxQSorbbzioH",
  "key36": "2CTyaSzUhN85DmAReigGCQq2YazNiLz2gwGNQu5rfnaNKRTQJx96HkfzzmkQsig7Sv5iNGAD4hobCWb1FcwbzhGm",
  "key37": "5nfkXTowmY82v8wXVZbxpmDRKPi8DG793THbLqMnF8kochdP88tGMZLUdjs6y9o9ouE8mmPDergu4vx5qpnGzZK5",
  "key38": "iT6SUDsqNr1P1QdduuxrxCbZp8RtZrhHvxRr9yWchan2QLFWycHdD8jedYcriRcWJx2oYQUcA9mjJ855qbaxkDn"
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
