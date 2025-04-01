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
    "2dfeN1toj5NrFPz8AiEgqqV8tXZd1H3ZpTz85EADdkgUBZiJXrtnf4tEyELo63jNDAugGXdXJT62smQFz1s57feW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493r8JPmfSv8vh23RK77R8yA4c47uDjLi8Hqo1TwP1HscZTZgSHcLzWGeyHfTKoFChiqGP9G1T1gR3G8yUQbxgsU",
  "key1": "3q6qwtRamyXhdHTheUdtwreMuJ2njg7DSm8r76RsbVzMrczKX7ZekhESaXQKi6auvXW7h7bKn843zS3BNpdLnd4A",
  "key2": "3D2sasDnhBf8DVnCRmsQbWdokfV1tRfZZanGPATgL281F9PVXnmR3QqCyCFJX9WK1Htp4wYqGwvTymDBPm6ZpQMt",
  "key3": "5eRHxnqXxLRJHUCRjs8VBmTGPwvu3a26a7gkhG3BZub59FuKNcSC5d3Ge2VZ19XipBi3tXDkEc3gQh6TcbGSNw6k",
  "key4": "4j5nUR1PFJdBiD7AFznAHDa4v5UJdNUe912W3toGjM58FZBVepPJyNsoTrQxLRCDE6ktG8NwDTVhKQu2oPdEBQox",
  "key5": "5jvgrv67YDEfudrbmDwTxGity4i9eBL1n42fmw33mcfpjpCSujns4jdqxAsXGCkpYUUafYnNGD3FjpnRk8AzJQCy",
  "key6": "3L4x82h6gCcL1B2ZdJ6SLgL8qgbwaj5AdejvoSwMHJPnqicArWwhuD3R2jcGCoTHBPBCArhG9SH1S4nezy6hPRyE",
  "key7": "H8r5VtbhhnRfRJ7HMceKVZkmeUXQrRJKFA3ZXiRXkVK1pXzcq4yiLBSCG5uBGcR3ejovaRcT2UNP47Jzkr4pWfz",
  "key8": "4oHPwHmhTDniExtC4n7zz4nWTj8jeMA6jqxqySpHkx1UkUX5Kt5BiDHoZJ5GijNLsHPS9yRwSJ1Y5FauKhvJFkBT",
  "key9": "632PNT6wSQk55ZFVz9vPFyQRjAnchvYLr97ab2ey948EwxwPFcLgxPn9sgQDyZHqq8NH9e4KPdmUueG3XCk9MEjY",
  "key10": "5xz6JbJsU1ynWpEeYwKBsRQvtXPPX9ZvFcnhW6HTWFFMv5TNG2ySYVC4n6Yopg352PAwPaVm8fpdxTRGot9EtiXX",
  "key11": "3nxDsWbooMr9H9KsHPhCMnLmCTRucYQiGi7hxnq3NshVD6fFZciTDRW22vh91AvnQ5eZiJFyTVQbmCgByvGCsWZj",
  "key12": "QXkmHVvF1e3L3zkjCXUkDGj6Pm2yJ4ERiNcPUeEzFZXj47ynMndRGyAyTLjw3EhMDPb9y9d5xMJvvsmsLB6RcGd",
  "key13": "4Nuza85XHRaCjxuCGkD7WF6fqMMLjfiL7TSXfrL9C6v59HAi9KwkqWDs3ervGVpcs14PA248tkVPB1X71CaafXL",
  "key14": "Xn7VBobYkqMjL73WranRwYq98SP8e5BA9F9MUpnGpeRT4dF2h8KeEWrHd1s6E5RsjsDUt1pXCG9dwdGWZ3a63MD",
  "key15": "48efb9g8WjM7sn85KENzHoGxVAjiKe2otH6YxkjsnwfSmaJczGxMRCzPE6nAMeoDSWFnf6T6Eshe4xwdfRJ9uMxY",
  "key16": "DB3kYSuyLKHk7L8NnJkZ9BXxA5AWpd16TchBC7r5h3AauN9cT4Su9XfQ2Sg1AbVLRrgFbnyAHXKttGSRAicukS9",
  "key17": "3iMbJNCfG6Qc4cy6Hxze77AWrwYuoUZTeF9wEcVAsZFEshVQL88dRcHpTwLUPvVsb5RxTnceoxjX8op2Q3TSzZAv",
  "key18": "2a6cknn3s4VoGEKW18FaotWjeVi7dmbLpojFce6p2GwgeZKVmtAJFTWtjPFyyiN1oMygrVXH9trc2W66fbUXzfxx",
  "key19": "28hGRmQ8TZ1k4AX77bRwRemzuNXZ6VCLayvWtMYZ6nwKVnJzhMGqHHKYTn8ehWzWc2xXWatZPmec63ZwQmbS3TGN",
  "key20": "471mdhSs4eoz6sW36uzL2oFJVibdCgks6GHoQno2vY9qHwFXzy4QsqciAoHwU5NVXZZErb9vRUBj5s5iNiQS579p",
  "key21": "47LGjaKe7kVJEBcAxdZ5VTUnEtkmjAEmsajiJUmS1VtV4DfDbfB3whUVHwyr1enJyMsi7F2ppXLQDeAi5Kwwnfof",
  "key22": "3mp7EgVLzZi697w5EsNRWVab57NR4oC8bFGYxQbCye7w4TQJAe4bMRgthmm4gZSTgy2TCABV8LkaP34u7o8X92Am",
  "key23": "4LfPEhy1m4txTruijFirV1gg1DuNV8jKHdD5p3cSCExzshDDPqw95Z9NMxPffgHgmbpwPZLwaEmcjgXTVLon2yyi",
  "key24": "qu5XgTpnBmAksrF6aRdmwCUSd62iscgJFce9CbzhXkUhxkXSZSxEZKRz2YLESwCS4JRPPcgjp3Xz3aByf5NudJH",
  "key25": "P2mo3vjeBe1q7mpDmmE4bLrDJndhGFuF17fnhUGqvbZYmGrXXFqfo88pt4KZ1aDJqAQSWoubcHyD2JDnSCHZaSN",
  "key26": "2suBokDaVH6maFEbBvzGDBbj3HmfVYHG8uxoCCtz3FHpCRi8HduGs1u67Z1PCS6KgXyv2qD8k4g7mqWPx4XKavjQ",
  "key27": "4izBfryvEcNeD8zpfbiNqSPHm25CATCmgchX5dqcn5Pm6phGwueH4H7as48TFM9qR8FrUhUGr3SZVPZMWMuSJERY",
  "key28": "3KrQ9uvEN2NDX5y9jrPrgoewwbpsMtPhbYFwhSYQD3o4mbebfQdm8VM2wnK6Yx9L4fvF7zDHbCnTgn9KJdJw2VLt",
  "key29": "4iL3CYEC8AiZ4aBEAy4bmvcUNDEBDbwa3C6QuV94oRivDctwSgauaHXsuJ672yPfqZmkg9goDruPLxg7QHEjidtL",
  "key30": "4Nxpge4cKejZBbBNK82vhz1FFv97YzeYbvqDL6Sz5HoERKvYnJHxMXHhukxoszMxsAQzu1XLc77hJYLg7LcnT5QQ",
  "key31": "39daPgeF6kejBAipUxrNGitN54Mh4ifQQi7D8iRK1aLK8AbPtzEVFabpMfq3Ex8KHwccM1NupsRrgbCeDTPqNkaR",
  "key32": "9ow14TQcadxts9bfsvzVftxnE58zxStBcjsWzqwxL6ftK6Qhc6QwwX1vTQ8gmLs6BDy52kPeHJXaWXKYKHatTLz",
  "key33": "2kn4w2h2aP2k3ipMGQrK1XYjZHxz7AxGdwnJ4cmoBvfKuJFT6agAKoPJ2HUodtHQjc7bXKdjW35LfCTn3dkL3aP7",
  "key34": "eFKjbDgZXtsuL4B83GcTZfyRRbqf1x6B4pTHQrRfgQbMqeZddiHto6TVYqhAzCV78hJ8VVfELgHoh8SFcoeUX19",
  "key35": "4xaAdEAjwPZRVQMDdqfuRVB8dQvHTgV2bnatwfzuBcApUdErnekog4UREwphFgdxNvsp1aqBeNLjmqmW47pKNoUY",
  "key36": "49JPhZFwbV7Pxgfwnab16tR6AAU5DoETZYzXA1744vZyp6nvUGGtfrKpzMjwcmvJzvqhGu745nGjGZ38LA9VjbNj",
  "key37": "3Z9iQXwHzmYNQBWncjmJWBt3uqnzck4hWp43JvXNgQKbKznYzNeZk5CstFP24FkxTSL4nbWJnYCWYEb2KkQkeLHC",
  "key38": "3GoAnG1LJ8e7M2ThgWGjGrfY9TnjZ8iaVDSx25ZmkLXbNUG98P8cgoN6bqKnzeTFA29ck636oj3CCiE8ACPVAWkA",
  "key39": "Qeb28txk7f4SXhrfoDa3whr2E2L7rYtRD5utaDCi4dJNgvWAwzYrP36czmtvMztzrAqu2ZrTMqZU9eoAnJqAjCp"
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
