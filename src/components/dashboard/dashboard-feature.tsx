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
    "3GELxhqTzw1iEwV6XwAtVw4gETinZEteHmLWM1NXuHyJqYv729a6MTnUF4oyaTPZJPF7d8NiMrPV7BpuhKbfhqUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vjWQYh9G4sPQsypxBNJL2Y56psrGKZ2cTF5Js3gjbyjBLAJ6SC5XQ3fpQt6NqhUb5s5b3eDNzL5RsesSNiobqy9",
  "key1": "5mptEbytTyRBeVeBr1QWFcEZZQ8ATfbAjGaEBcjwsyPmQkgmQLj7LTMqhFG8NvTzBBQt5EgvdbjPRjY4pTukt88f",
  "key2": "5e52nACqA5nsj8gA172tMJbJqLRpUU3nZinNjS3bXVL6aXk13xbjg2GETpa8fjC9Ap7pkHQHe1LkPvewC1ZTy9kx",
  "key3": "5rnr4ji2ykUisLFdo5P3YWCj2gBqZHo7yF3Kpq3Z65UwGnvNrsPo5J2Eve3Y9h79f1iJXtwdAWazNwSA33ToNQXB",
  "key4": "667UAqS4SEBsLAYhYRrTRt7ByTguEBH6WQLHHg6zssfHVgLpCiWcZRch7sNphZzBjBi85c1agsagTp5ecwNKmAzJ",
  "key5": "3SJrYYS7cZm9mDidDHS5WCaSEr2QoxVWYYVmAXNKTu8dKGSC4uW2wtG1AMkJJWvyeLkdgEbosMTRrQej7BJr49K6",
  "key6": "5s9vcxS2Srz5dxXY4m192u2xMt8Ag1y9JVaaV2tLmabhLetgy2yHQrUxtE5jnKECDVZBq6pG52Jrk3JYqYhRLbad",
  "key7": "4U1cUjrDj28rL5SpZcsuEQjvxfXk4Pc9CzrMks5QDGF2Hk5ujGTCdtVrJVztFoE9SbcmEJd2fMb1rSvonhdRvLQM",
  "key8": "2wkibQGtyBzR7td7MyphLKpQaW8EGbj5sGqJPc5SnXxMxLk2t1EyNvRLAzEN7CK4cxfHKWe4UTAGNoPboFMDBWzy",
  "key9": "38XZQ8ReDmpLD6seSY6MqJajiGDCg5ukfVJtHa6Dwzycae5VPooDsAN3D8oNnVrsz9PaMjSuyq39oBQF6Er1jmv",
  "key10": "3EoJh1KTEahAdPKGd4Npoc4opE1d1o9dvpS7FfKjWGvdFvNaS2SAV6A7LUE6LHfcokBdJkn9pzKd1AQv22gqX358",
  "key11": "4RN64eq1JmMdtSUcktTE3XExUR2WqLVMCoWEJCxkyo6msmAyLHoNegZmVqkyULEvNmgmaCKqLDub2mWMBEih4FTg",
  "key12": "X1VYjFhR5DA14y8ZYotA8vn8gSUDjCtXBzM4jUn4R39edMb68DDrAEkUfrvQ7kPviFARLR7xB76e95wXTfrauMC",
  "key13": "1CtXZEY2xXT6haSDA2EXvA3cLFHuPMeNCjQJjiggpAJCqKjggr6ThHuTfrU24uShM2gd9Q82cKB5BWb7U4GYX1U",
  "key14": "HvAUaSRm8DTKYatzaXrNecu1E2FSje1AUkJkcNa3NopThW8etoU2Qouumfg9Ag5mtNnpXBJmpePPciyEXLexM63",
  "key15": "45kZ8qxn6RqKBzbZvFpr4Mkg86pQtYbivbQK8mRTkGyC99BoFbcHSYMusigjEaCTq41kdS6hU7jmXm5QEXHV6LKg",
  "key16": "6j7Z6PAyBijMZEnKJ9GY8ynr5PNAd641jo51tGbuDhduiYPg7Bi612jFnhvpqFJTzxjvHWbgMYC2aMf4CWV4Ftr",
  "key17": "5MN53RbKkbTGDLNswPthobu8j3gvBtYzawfDDa1puxENRQ7wCy8kUfizWvyBJ2FLuStXT2SZYxNB3MnfTbAXfdir",
  "key18": "usQFFfLApsHu7tgBufKFndww3dBzvLoH1SWHgjLcSNZH2EsXSRfmz87qtkYsVJmMixXBUMFyhZPoSuWSQoqW7oj",
  "key19": "4zXAxr9y68nK2r9BXKhsLG3vsMdkbc8sceravkePyedz7RrUXa15YnveaN6DF4Jy6auPnEbL5u9CKNDwvJPs9gCU",
  "key20": "3oge2NMATXVParP8nSixQYqiqCTftBBzm6sD5GkmY24bCzGWUvuV7pDCDS3U54rtgnYvjnR1WVuWKvHLqWVXGbBJ",
  "key21": "9BLKkwP4iG3TfuvRy6U4syJPn3vyWj7S2SMYNBybv9i8bSnmbzyVmXoSFZf9MbSCBqDkN99aGWRNbXVcaVC2TH7",
  "key22": "j3n1DYTa9BvTyTfJCBLqxUCYL6sLcAgKeEhgRAsBorPsWcPjbybRWaFJH96AQ7vibbg2gTgCaoq3bFg4N1XAFDk",
  "key23": "2zBBg7Jhp22BoQkcNhe9ahDCCi21fr9QH1xC7krBGG9V2EE3QmLfAgS3gqpV22pvvvf9AKPvhHQ2FqnPPucQPGLA",
  "key24": "38qSLcsvzhBKAuBw3BQcTMVgUqD2YLscTmPVJXBXKm3GTqStgbS7YiDvbBWigJm9pjBXF2HWorXCuyieCm3BdrrB",
  "key25": "5897CqF9cSbXXBQWdiETLCSxUhu4WNYnU6Wu9ghmMKW1LQuMcgDF48E293R3jz6k5LGsuzaQuxiKfjp55f3fJ9B9",
  "key26": "5cN5FugppQpLpCocx95aHX9HM7L2JLW49jHye2EBAEYAoKxWN6jnJqLX88KNPqs4grB1Gvf9ZKirFeVHjPJH3LMF",
  "key27": "2WqgPx19nSjsz5Q47U96JnPSvE43nM9MyhLxDoWinfGrikM55czMD9VF5jRCdtXmnKURC92Xy5Q72AFavvBqaZTq",
  "key28": "4wXNt2kfkx3N1mUyVMvYiDg77otNruaC3P7CH8LmcaagaVrtuYipzRm29QcKEysChbJrSzZRnS9eE4kfSWjQyqAo",
  "key29": "3k95HUQbZZ3ZZT7Df6QyuQD7bYURRaatBCfVmZK6bYRMFa5F7DFriCzCKb5LETBccdvjChC3PgW44wWxY4wH76Ap",
  "key30": "5L9BgyZq1KbRbZSFNCSWZR6Q9AMYZwnp8M32sy3NbiJvgH166Lah2ohxnNw3FT6E97TYUx49NF4cpVHjEbN79Fhx",
  "key31": "2SZ5wUS5PNpU4iP9FZ8Gqzbu2jFEDiehs4UPhhcVvRnVNT2sfzLnb6F6YEABi9ohota19RxHYRTYETdqAJyrR9m4",
  "key32": "4TJ3itqyu8gndqSeqYf3SqLRK5Knd8sG1v4ueV8VZuxKd3M4mzQumqag6k9bYpRLinVNcYKpi16P4Ykm7FoqJqg",
  "key33": "v9ggtXohLmFTHzpH44gDq7fMZkwG7G8ojWhBWgTEwkTYVgX29v1Hw8xcF86L7zzNmvn6MaD6REA65otbfyJJbzD",
  "key34": "49N39ep917TcNcgZov9ncfrLYr2tnAXDr3zrwUsCq3EAxz4brXojVRZ6N2qeq1aNWNZfUW37JN9phQ3FVxpeV1zd",
  "key35": "4tci1WjG17kHHW4XJFT9SgKWFJMuhewKECz1ZBZmSkKYXXzpHvRF67tHB8iwSQoQczoyPdMf6Cq6Tg45fT3XnPwM",
  "key36": "4snBDSUdTeaE2rWs19ksY3w3nhhP2Y15tviwSgiAS8ptqXG4RXuDX7Sm7eBX6UBUNxLGDCxvt9dKeJxTyW9mRGCv"
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
