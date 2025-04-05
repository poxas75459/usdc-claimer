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
    "5Hy8BHV7DEWjSWZ6dvxndiATN4DcZQn6FJDKwi3niugufhAo3rzi8bBrTrp9njCLXcJ3RbMyAkM7jcBqEauKfSdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZXzyM1WaePHoKgWmncJp157mf6MMYv9acqHh5VsEo95Gd2uJWg13U2weAgf4mjzWCz7aGeN8Gq79HB81gHeJNUB",
  "key1": "VLmfhLaC45x6KFQ6vsV8jbqMqvGfZ4QovQdKQxr5Dg3CywMFe9mjr5WdUD8d7b6X1t4ASxExMgRjruegF45RCPy",
  "key2": "f8dNJSnhHd9wCgRB43vtspGbG9myZXwwFvbUpzaDi2n1vWQjea77UHWnLTiTkBuWx8HbSoq2CqQWPFJ27CWoK9K",
  "key3": "3RS9A3DE6smK5ekGifwMEMiTELMrqb1iZaHLXbxZYmvjTQRVaVYcqZMofwrWMjFDaJF436fvKiJPgtzC9iThezF7",
  "key4": "D91WVcQsUMCsWPnx9KnbjFzTjFvAqg8AcT8Dhxxf9G9FxcsbseZJFKwuMVN5AzqhE4byCXR35CJnGimcSrYMz7u",
  "key5": "4cKN9NV89UYev8MfUZ8Mu6vnA5AHNxa2ZsxXLhstQDC91w3QFPgA1hzArsXuvgwiiaBZJ9rrDuWarscVuSCvE39U",
  "key6": "2XduyKnneHXv3dYmib4cj3kJWXB1vBzvmg8ZBXk2fNkqg5fcaqBbJMiVrDZEW8fxR2pCXKrfSQzuJmYydfvvKgxL",
  "key7": "5EcqQBBc3E5K6pyHTGSH6HNaNQWAwA8oS61igHRjG6Crk32eJex8SGUmSxwtruqUeXVn3qQGCgND3awu7DZE8jjd",
  "key8": "36C31dr2sPH3SYP4CTsMNvgsE2UWMK5j8YDUYt4G9jYY2XhwX1V4PwSvXXYg1SaTtF3VPoSaRm6khyxN86PhtdAb",
  "key9": "2Lh3Rx35svxjRiafRodyUP2R85aXB6AHhLqGq1DYvmmL79xnNwu7ydVjpZAfrj7EzWo9PvxWDRMGx6g3tbj6yuqT",
  "key10": "4L6JSNqfLF2nyipu9F2pYQw72yx9FdpM9opnqPAxhZDaD1dzzpvhQMCDtKVKyqpM3onZqhFB7PUKqeeC8Tzj1dRt",
  "key11": "6LtXwAvnXvd5d6uzaiMzzZWjHu974EQ7UrYFnSGGhLkmv7hU2QBEFCuxa2pVtB2c3rY5dycyWfcuYafvJ1Gu3Mo",
  "key12": "5CThxmaage2xQaustS3jw9nh1gaX28jPU9RRrby8pwBBgcGySFwhqquFtHkmsTn6XCTPkZwGEjVyGX18v3ZNikP9",
  "key13": "kbA6FvrBSoH6PeAygQJP8WThaDR3wuks8oNHkrjMtVbk53bXrMrVUz781g6sdAM3Qb4xUZp6nPzRFCyCHRx7kJj",
  "key14": "EW4ptC83rT6kLHDG3KBvq4QLmdSW2VPYB25HXGrmzLPkDp2Gn7tmA76pCZ7rj8kQAr55xWRZDWNsPegRxwE3WBy",
  "key15": "2sL3nA43xEm6WDvSGRxZzyWBdU7y8aCUyk15b4JLJKRu8usFmx8wPdjWzdGtLowfqztJWdgwnEVVm9eZ2uh2K7To",
  "key16": "3ybaqSaSS9YNTyh9eVixEzGx2n5xk6ibixeuRnhgcog9G3D7sUVVmpBTCQ5Zv8JMcdHwGdcA8kM8AfVtrX2nSzd3",
  "key17": "tYkXDFxq4cxyfqp29J7LPnxyfxZ6uqD1uT6bgzDQmUo8V4RGmKB1i6PrLeTbAQqHbu8mHgsFLHTe6io8E87rMdC",
  "key18": "pN9Msd4QNGMC6B6nbYyvXy5iuNW7Q5gm1RJbbJMiJU6mhwydb7FBKWGtQ8o8fTh1qeGZWfvj2MCFYr1rGKjUWVe",
  "key19": "27AdLzf2pHddf8bF514KGxR8N8epSi1VAS2ZXyhLzZ7Km1AYtVUUKBH1xZCT35H1Vd15sU9hSjwcAjKdgbaoa1tz",
  "key20": "4QdDfHcidFxu1633JkAU93b5wVfpJ5DtdMFTz2RdJUsLYyV82aLer2n9wMhRgg1SXNKwrNsF99N8i7H8tD2nttgL",
  "key21": "3vCgwYthtG3TGnWk75aTnSX6qZZhBntkSvAPkDhhos1qWtyaJTcfKLxxFtVKnrk6VSydgsmyWi1zWZ7wwNWfKYzZ",
  "key22": "A8XiViE2ToTF4a7g4yUztco65k1ihpG8H4Het1miW5oRNiG2Z64PCRPKHj8PPbAVg8pkDyGpXa5BXu2ANGFd4mj",
  "key23": "4ziAZGVYFRpz27ybAKA5q3wHkC9GYguosxeJEqmFBpM4sY5ESF4W4z3j4275S7GvfEyvPhFNgczeTXcLBDxX9Xbe",
  "key24": "4Br3MoUuPYGemaYjKqE8VKGcijk3SaWm8MZPWQ42ZbEayTmcFSiXFakrvec9WDQRTZ1mYyKMbFLW6evexmXJj5NB",
  "key25": "5vyjvFcYCa7HEcB3ThYthaCunr1D3y7KavbA4UBg4X4uKrmGWgPC6fcqujw3G6aRCCBsMsDt88pJ5Ln1JGgW1Bmq",
  "key26": "4r91bLYfNALEWoSGfQB9zHxz2fPb31AUKunftZKhaJPy2ut7oSpiYztY9E5upMRdFX6XWo1voVMA7R2FdoP1mqet",
  "key27": "UgAFD3G4Euo26s7jBcowDDq781PtB7nXLcHQSQpaB66uxVGbBPS1LMpB7PLZAuYNcfvnDYkhLZXCcedWtKehzvt",
  "key28": "4YBcjMwk5Vex8Lq3EAaxZZFWro1jFeLRcUViYeb35YdF1fMWnp6F3eeFBYRR4xyMwztKxiza8cNRcehUcuiuqk8X",
  "key29": "mPFJ9vHRJP9JwGkrgFjQE2JVirh9h4VTwwVuMJBW5J8mysPXxWeWju6uJsUkYyX3cdePAPcic3ZgxGpkwgsBm3e",
  "key30": "3QWLn9mMW5fidrPofw3GZ3zRu2zcj238j639ZCXr7ASyRnX2C7QBDgbhQqYtPKX28SEU8hiVLhRLDbRorJsBVyYr",
  "key31": "5WQXBvz2sQ7Tv7os2fm1ninFPcP3x6TeCkort8qVNxSLJg9CKfpBXbre6tB3KhitfJ3xnRWpqTB82eLWTUUszBJF",
  "key32": "5wycEkSeBN5AVbcvLNG6e8PARwK9myxWVhBkSCR6gYvxNnazPcMStWbsBeDX6D5d9NEYvUzxBgiUGEUGSRxs121z",
  "key33": "wk589zzJYkLPoRVZvjX3gz7umEYA9L8kAc23dVQq7Hb9xYnr2paCVccMSCFedMw9AYe1xxFvTzn2DyjkFjMRtVf",
  "key34": "5gjKdJcyWiobPExwT4SSfcEifgN4eWgg2yfZAepmW5yuJgRRPJ7S8uHMrqLgsSZtdT5NXrCTYGjdMGByvVRNmt3i",
  "key35": "2VVgzgWC9r3nvUE6XYRNzXd8VgU7Eknwr9forpLM4p3BM3JW1MXwaFpWtZAT6ZFo4SQbQRCQpxdKJRFcV6Tc9vyz",
  "key36": "2Xp54Lt2yfw1theZbpLUr83BpmSKq1NFgJELJC9qSv8o8sucVKGFPg4SarFKxjYKGE8VKm6zexS2UuFqMb1Jkdo2",
  "key37": "2QciedoSNqG5xveBvRtt5CQ54mApYe4bmpQDTV7eYdFJuDRZoJAkCzWR11WKfgUxa9viNuVCYonE4EpvkYeksrzg",
  "key38": "er4WWWWVyQiSEUcH5Hb2VkzgBN7yxHSjBDxQiDt2ZqgFWLFLuVgwYoRGTmXFYZtyeDeTnZ3SwXqCR6MfJjfgxc9",
  "key39": "4gSx11jf26ta67vvHYTAZahfbWdtSipaiYGEWvfiVCsi3jsXMoAYqwbJjJRJNQJdY9pr2EFNm6A5VHbVMpFiRRGy"
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
