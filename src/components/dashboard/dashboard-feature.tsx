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
    "GY7iHxd4zgDKqb5wP2TP2r3har6k1sNZhUdLK2457Tbd3RLkYrkTq4Dt6cuUVE5mAnquHqsyuPWFBrKeRefwvP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLRRZmjYFin49wvyKm1NrJGSRg4J2rxc9RU9nnBip63gCifVKNeiY6JKDPstnwFmuxXXmEXzTS1Qs8ws75e29aY",
  "key1": "Uqc4KQ3pPQhtH2TzmDV19i4dKwNFdepBauCsn7b3cNrBHYZFuTBoAC1RZWQDdRzkknKKywpLoStHW1jfM6KXeSR",
  "key2": "q6yb2USFKigrb8z9ZjoV4Hyqjx9jsbdKAFbC9raFa5UbMK4uDQyfxgNNLKQenXRuRBoDP9fgaxgcVciCNjcYRPR",
  "key3": "48k4P3Hx53P4yLvzNeL6A4PJwZjBXimzCCjHZAyUW7Aj6t4EhxGZRFcRW9zfxtQ7rWVREc6xirR7MpFQGWs86CBi",
  "key4": "37UqStgPXA4WaEbz3uxijEy7T68qeKCs4m8eAL4ACKeHboS92Fecbui3W5SfCXNS38EEmU3Lf6QGqfuieg86tNDH",
  "key5": "4nouc6uUcXHR6m634zKRTiFcZbXw2sritfrKBz7KwQipPbCkCXH7buEXqEmxrKs23AbNoh5CtipdGHLZhSrHe4hm",
  "key6": "3cAfcuzgu6oNRkgxu9ekSv3xJwt4xJMNBiK5z58cT4PNK58jKBGXo1EiEXsAQ5ZVXHXnZo5gRWNUFVzzj9PeF1D5",
  "key7": "3uVXGAtyyDif5nkMPboUXhkSYmZGi4TyDhuSsXRDBrAgB5F2qMP1EYw5V6LeoV6vbWEd7NtFeczYXfA153hRCc45",
  "key8": "4gGirnE2iEjTHwwkBJbZnwpzyEAoAwZnK1gQGVa6fksuVCf7CtrMhPSZV3R6kZ4GwZhAZtwW5DUPnQKEvic2faHj",
  "key9": "3k5XKPa7b7d4c7bv3DS5sJqZn32B18ZKBbwqzwXLcRAkFTXRgakjK9tWJnFRey4BZoZdPuuCXNtyGy8ia9744epU",
  "key10": "5bXnW1721vnuTMJV5RxauxVF2xGVixzeH5WJLvKqo5reCyTjRLcf381MyyKaCkVAXhwSgnnVVtwfSitYBjiveqc5",
  "key11": "44eN8w7ozAZwrUtRrEGPkZij56BqXgM6MbS8RC3iiQjxKnR2JcbyAU5HHSdUVGV99qZaszcqu1L6kvDbpum3xicW",
  "key12": "2it8QMjbo6n1cdzqv8tXGagV5DuFfLJf8TzswEDnU3ViKnDxKM6EE5SHeE5ame51SziVkuNPCnpegPnRAkEn6Zp7",
  "key13": "3bNAVrok6aTE4zSvbkjbxbnX2YMZDx2W7o3PHoUdLjoFHFpxdbYwXZ7szuLiFKrMg8u8exEmVgWwBQGtC4FY9fuD",
  "key14": "5y9MjGrKRa4aFJXk4q4RuEiCNv7ye68jdef7fgpUpALUXQwMMih83KGf8reezfHhs8scHY418DBYMpeYDUaGPC62",
  "key15": "3LAwKprWxxqFqvwzvtA3FrHsSdYK6oeb9wAi2ftLgY9R8ypsEZqmcVDy5kWRi2say8WchmihYnpC6Zh5Bw6Ahh6a",
  "key16": "4RMbvcxN3nUL6CmKHCziQjvPR5eEKjqJhfDmjnFCUX3UpWURwcp8YvXu76oqgDnLtdXCVo4gzMdksLxbiFwuKhr3",
  "key17": "Y2B2CBziYxgq1eftQh4oJ4FEZKwKka149pcauv9dwQm4MhKDXap6tTKeogs4RUW5Tv8c4nzTHyDZtNi8RbkSAzd",
  "key18": "4wyJj4o1YrtRd3oQr5CLjyDCWkJiCn5fDNrc4DTX72nW6TGspKzNqv652LLe9tMsSzEBWj6qY3hJjVPKgUM76XD2",
  "key19": "2mBpQo6G7vDWK2ZZakwJ8yhbFuAsFZgr4ygyFyNBw6k3pdasGvEdyYtMRgi3tDfgnsP3Bboayauu4ZaLRhbAKSFo",
  "key20": "5E7kEbBGtEppJKNfAnU5U7rahUoGUrpGUjsDeuZ4XwX4xD9Y8zuQi2zMmJB1y7tPf8smH5c5RBHC4VctbK2aWpPh",
  "key21": "4NV94RFferQJjLGMpvcj6mJHn4iV61imezpRdVnixagpuTTqmSCg5nU9tqL1L7pjiCUT6GVSQxiq87CB75v3o21v",
  "key22": "5yr7nsdY1rGZYXVGu8t4aad4tnkSQuc9nxTWZMfP7UdaazPDf1dBuhwwuTrpz8mFHXHZZ3Mih8MYHqYe235hrevv",
  "key23": "4cKS17RxnDdRDd9nHi5K2ZEyFuvpjxaW6CLWWvYqax2hu43HfdrG8NfTQmkRoBEqVDJEzVriAWeGh89Z8bv5s8cU",
  "key24": "2LBvUUCuK4xRgpe5nMJ2vz1DTQ9ZXWLeGu9zPwHBwXnMgmgvKTbMecBY8oqbNUWJjwi4kAa6g7trraWQsFnCdunM",
  "key25": "3XxUuDdadEp8Q2CV19JpKuguB3tQgw6qpUHurzwCEeBQWJeQ6y5QD4WL5Te7aCRJaj16FSZm3GQZGmXQ25g9B5PL",
  "key26": "5JSeWhDhgPKWpP5T65TazDutGcq2S1wYVXT2reC25NBDRrkeMKFeP6VhYDfHVjFvMnT93kDiG4CrP6h21HFSy64H",
  "key27": "57NKKCgzLp2gn9j4LB79FegtyKVQWKn2uMzPSGXVaVdyLz9Cx7RMwTGjFgDj9cgduGcixX2qVPaAHp9dNjUG9Suc",
  "key28": "AmVprezZHoQtLioqXTRujxXB3RTF1i3LxjqHTdHqs8KWJ1sVGsmdc1fwjwi4gHTZtgxq9G6zkFEX7G926jkXrfS",
  "key29": "3AEa5Srcxof1Mj2LGC7LLEwTLXB113hJcENeaJ5M4o629nrEgTsxVex7sxktLQVQ6ngAiPoz3HTn1VXUyUq9vjwo",
  "key30": "5ZS45PQ17rKifJNPvM8mRW8mtBuKW5B67Ho7ZavnGXihyLEVstD8TC1rcHx8CgNWPSvemnGZxS8cTvYK7AJjC5SF",
  "key31": "3bwgQs4Kw964sgbPPHLkyw8jVjuGYC24hTVFJdy4VLDyCihzegUqP5Si4NNy7EJ9ip9T5m8gFPpkgbM9ZvuHwg2K",
  "key32": "2idcgUU6FMkaS7Xt5pZmmvymSaRDJ6fPpXxGPhynR1FZPkDaUWSyeqbnKiqMNNqTrNBStXB2sdJejuR9ZEHS7tWc",
  "key33": "qwNkNBA4YrEgZaiPpA8zbAU1CsFx1HJnTgpbkvgaC57W2QiTQbVi3YbfUrivuuQU2SR1mdJTCND2ZigEtEB3eBr",
  "key34": "54EiKh1wm4noBjt5AUHWznFRNmqm8TjrrjRdXH1N8ybCqRCTXGeCkUEoAd5gEi4Z1zy2cm7SuZziyK4n17QRHSov",
  "key35": "581TiDL1m8SjSsDrXV7Ja5KSj2oEntXgcGB266Tn5HX8Ev1VE96NbegT7zrrCspwcgDVvEGoSaPBsbsjBp76aLVD",
  "key36": "4N4wh2gynLkgN112SMLaSYjsTntupiXSLM8CuK4Cmd3Y3xheFzD9rK5DKLWKyYz6t77QQ1Mt6fzGok3dQ6niFXui",
  "key37": "5SCjV56WSE22aurRAFsjrfSBi9bLo1MHYuFoFoFMfRtrc85Phs1iqd8r7B7fX4GBGyeARM2TAC8rTmJdJSnFtpqN",
  "key38": "5vEgBWMhtvqQVGf48NB42WFF51tdAFFtCNQsDZ7ut1yvdzGzAFdG1YrRkJu8FupeHirbe6a3hhLV87DhmxKKF6b"
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
