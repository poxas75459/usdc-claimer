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
    "xCa4saXdG1EKebX4QBE9tjSKsNKJ8vRS7TKQTZQbrad4pByG1cH3Ko3Hx3b9m4drbSZyftbh6Mb2WUc1ufkYpVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2paoEdcPmX9mkiraq6YwSPnTnEypa4ooGnd95gg44fDWo33ZKcHJZdPcbHgHps9nUy6ZEj5rTCZKkqL6h6FAbomm",
  "key1": "5eNobZCTAP1LvCwX7njEKMf2MY2LKpVHC5FdSoKjvU3duHFMD29RfAY7EhnziH6P952wLN7b7EwRqhoyguf4G7yH",
  "key2": "4M94baDuao8bvNLmn2yJ6boe4ZY9uWNuZZUBz9s7K2fN2iK5qbDHTRDv4TMZCyxdKLPb6KnLXmTmqfWE12zfPCuR",
  "key3": "4ZFkA8bGQxHhDh1wFjxpKU9vBKRujSv7udoUTw8P4cxAQS3E4dTobCnY2vG3xgJHonteFeAi5Jv2eGeGvvrioCB5",
  "key4": "3zufC4WD6PkXE9rj6SxKjMrbZf9fb7CWGJyF2cVQTEvgcb3hCPhJ91LfDQRdDzipXDteE5Ja5TRSizeVA31UPHyi",
  "key5": "wky9AfHSKWUWVJp9er3YSxGHtZQjgVdvujEUVPNQPygwd6hxRu5y6cPC6kw5zGXCbuz6cBJNtkZ7DLqYDZ8KEzp",
  "key6": "2xA2QhrSECYHekgnYgTxswhquXzVuvmYSLnrPNd5i9v9QQeLNqPPuNGcjUZArd824PCim86cQgaFovm1JEqrXJSf",
  "key7": "5ZxSETRnbsfGmJzas5TLdBBcmnRMRN39R29Up7ACUWM9TNr2BnaW33aDAXz9vz63P9meeXAp2C1St4y6V3Y6ZEjJ",
  "key8": "3UfRV5fbv6ZkRKyjeNnnEdtSk26KedeZsbW7iEBAqnGbk5C6SWhAr1Dspij8vXxeM7MhyYvaQQLGXoBdcFuoqius",
  "key9": "2HKFxmDmJQBWMDMn8tf5buiLTcqQkMkTjEzEUbr2oYPaN6fR7osQQbTwQtYcf73cRR1GiW4HvNVkYH11FVpdX8Ke",
  "key10": "4rjndzQ9BYRtmSU1Y5FPC4Web2NxrkkpHX95iiEQQVNQfWeX3hRMib6T9pmJkGxgJiDBpAwa6vUdXPyCtgVrme8T",
  "key11": "XM43kTrb9jDh1DUueqXqafzTTJUQiTE9nKBSZZvqiBKW3fndyh2Rv2vufWwRw99Qmnnm8B9gLTsxqF5WH536wxY",
  "key12": "9wbTHNwTTzagBjCvTFuDyMugKQDDCkKHFmRQ9LLJ58CKyQ2nzDeBB1gEgybKRLtawzAyxcDGCyM57iKjNcB3pTn",
  "key13": "4oWX339veM7zt8Bv1S39hQwbyivTq6TbcKefn1JvKWpXsgEBANowfGVprMN3wFRtR6iNfaqiANt7gDzBDNZ5dDfj",
  "key14": "5T1YSPBDmMP7ot5fYH1Tv2rnmApXtUT3h17WbqVvFu77nCfYJuebjK7Ex1HibRDSxh1toj7PnMt7hun7wsmzrWTg",
  "key15": "5qAeV5zYGkDY1uniVbMiD5iamMb3t8BZAydv8J3UqGoXbvS6VN9T1DKok6F8GmspPkRubJnxLaxRqJQPRMED1PRH",
  "key16": "2Zni7muf4x46EgVhLEUS7iADKvpowGMreTEznRz7puViB9EPBrTZcE4trLnt9Xfi5gpqVumkpz7NLVPoGfBq5q55",
  "key17": "37HRPsjvfFjHrPjMeRr2Mnba4RvHjn4fbFGP4btkVds1TWzj5e84mrctnp4rWCER4Fd7X38SprcwZKLC98sHQWQk",
  "key18": "zFTK6YHP7qfiAkrC3PY69tUXzUJPnPhG6R2DrQ3mxFnRRF91XKvwvA4T256Y4FkCgijHHvx9hZMu3UwYotuUkgm",
  "key19": "DTHLE8p9ufHsVwKSF9CsYASpECeLWmKNUVcWj3VTzvLns8annqyt9Js87PnZyWNk8cVsMtCEhqVdrfQHz6NnAk8",
  "key20": "J4M8hu3uMEgMkfz91gXCMRdwtL1X1EQeQ2D3vmmxmie363CMYAw8DhxJxvLQTmgF7QUUV8e7j4vcF2HXHnuwFHL",
  "key21": "H8dsJumnrkqzxHkTJNMYYvvKZM33TNDJAUZ2ychmbZLNPB866s1jxGk23kkC6EBqB4Ee8HvpQaBd6x5VqqtvAnf",
  "key22": "5y9ijDRaKJfpXxiDbqBLjdsuFsPzkri5TkDrtnG7YjNBHejCaZQ9KNTR7kPuXfTQRPzYtkRs5ZKkrPrGPyGMcood",
  "key23": "3YqmNNmf4ZPzHfbAMeitPHVyiKsNd4yaSmKLgrchDDWAPtLhhY2FoJdxszogSva6WxLeXR4Fv5WQRXNZ7a9JUvjd",
  "key24": "9VoL4eMCYGuGa4AJoprJft9wDsWd2e84aQUUCYETBfDsnzNoFqJ2pPxsCbkyiimpWudnjPBNaj1TDMTqEfcA8eS",
  "key25": "2WnAHp9H4ai1jfkkX9kFZ7dJRWTiC8kMNnnVjuDcEvN6zHDvA78TwHtTzY4R1tPwyn9HoTjWXECuqrfhhTAeBB6f",
  "key26": "Ey1TnUcLRhwjkcnMWdkQqkPFP4KPAXKCn2HY6355idC8opjBJegi7rLcR7SMJ3qR4yBeAAxKBWXufZs71Hdfm5i",
  "key27": "emgx9wcawYG9o7xMGYNmMYZHYCZRQMUgEbS3b75h2jqs1h4Mk5xucy4CLu16d5273JxpNEvtmKDnPkFGbFfbo8q",
  "key28": "Y932jCdu4FoNZeoRSYRx7VPCB7s5B23j9WvTNAyx1kb9HM2aRM2Nb4KLiUPUjGgDpqQprw7TweV1XpW9JKADQz5",
  "key29": "5B74FdHN4dYFtkBvQWspRz3WYQwKRpgHVswuCk18ML17NorKpmxf7CtfWNd26MEJmsvBm4ezTQZVSbbsTdVetig8",
  "key30": "29r9UcuvNY6DmWuLpp23vfQt3uzpQDQFBwahU2gxBjvahU1A5ku5ssMX62XPaD3z9BHy6xvgEmfNaLLXMxg79uz6",
  "key31": "3FTYEpqkeie81MHGneQTDSNsfvoXUEZfyuYotg2nEvDzi8FxnucyEX5i9hEqUVeoTGAA1NX2SHCNYdK7Kh2Spm4z",
  "key32": "4MpGd8CoZ1x3pR9BgyT8d43jT3oJx71rNTQfV5K1HTBgEYEnYEPqiuT2dmGNU2XQidJ3kkMjkeFdF1x5DaskECq6",
  "key33": "4X2VweTyfuCDzHaLX2tNrx55Zjd7XNCjPHHS4zPNfU6JQi2m3YukpLUq3iM5VL8Tm5D3k4j86b3QL12hzUuTLdPy",
  "key34": "5RDdNc7W87cwubeT3pD2t3siJgQewuDAuVSJBAX9AdcNmDMVbF6vCqyJu3hMyJGSQRLo5Z8fc82r1Haiku8xrJMD",
  "key35": "4sg7KnhqTkGLtb4hQcCxwdDpACMBxZ3apELRSbqwq77vwzqJAqP5TxB3TxqZSZVKgdZ8KwiSnhKRP8DtFwM6CePL",
  "key36": "22nPkhK1Sjw4dXWSWnN2FmvnbHH4R3eLxKZ9duYC6kHdyMzjctxfW49mMZw9GsjUhtp8SaHJwjQF9auGG1hbsqxp",
  "key37": "4k2qfcdskpQhADFn35LzSDXQtTpCjBm4w6PTHc58b5uJHMPbp3pkGtRidCJJ18nktrQ2tqZwUqkvx5uocMw8dDic",
  "key38": "hA1uRtgH9YZ4HsWp7tmNYdasq7dTbsYDzZCJrZEXNdn7FqKFq7xcDuae9bDkzHkSDt2CsWv5aTPs4Q7LZghvh9y",
  "key39": "ai9pkxq24otYNteTRz1kUkA9W6KochLiFnEUdn6qgEC5PvPG6ki3J12uPHfxgezaqitvfnBdpvzftNvLi75Kyrs",
  "key40": "2cH7p4oLwxzfaKoz5gbDWHQQQYsJ56yWcmMkwsDpXCdC169YwMhyPvSU2SYAWvfLjueVurPFBrAugx8eB6SDkHVg",
  "key41": "3txC3ihfLiQnCVXBuuPV8ncpJ2nhtCGAtZQtHABxrLRSjpo8Ww4eUr52kt7NGpxcozAzS4yt4fbsxgkymd9s7kWZ",
  "key42": "3qCcci8VcDexdZHpzoZsY4c9P9EaKwvUGH8FkZgc8dnGnSUasFPMi39ef1cFiYHKEreuTPaRGXmWqMfbGqLKYByv",
  "key43": "Gowgq9FqReT77hxv2R7wiGuFKw1Xuv1uR5ZdDpECGComwy4fzAMmbGhAmz4rCdoJaVaDDFtwmiujd2yYRzDYfz4",
  "key44": "GJTyUk6KdcTkokvBkjBUuqS2dzZFNsfBDEQ76CALcwhQY9jhrVPhepoSoRzdugcKwur1tySt4eunDQfqHif7KZd",
  "key45": "5EzPT8KaDFdEddaebNaRXWsGSvKAcbxdPcd8VAwKcvpaNE5TCyzc8nnFhiEpQK8vLCqWPfUjHcq1abY99h7gjtnF",
  "key46": "3bYiiWxq3P4DXpHBPPxGwgLPCk25h2PFo5jywj9iBmNGaqTGtjaNy8G6GqEdhzAgujJe85KYbTw1hbcxh34MyfF1",
  "key47": "59XTRNCuAsRSnNvn6w9hu61Pu6fYeUVeHqqVi3SvHpSXfWqnaMAtiGRKzHFC5EXdEuVgQmVKLJJxca7Zz4mPurXk",
  "key48": "4X87fh1xidoSg46uV3mNLAxuDitP4bxiBNBdvqycTHu6jb5meNnQBniqWKwnoaDkTMYYaSYGMM32uhppVSn4VCNd"
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
