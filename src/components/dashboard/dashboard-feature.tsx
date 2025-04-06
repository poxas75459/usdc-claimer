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
    "yGjEhGLPKbXECssRDDB8Vwh5UmQ6qVmQKDrkNBCPggYzbtKUxf4dJnwTPXHyexe34VJHoXLSYNZXFMBX9DoLzYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgduAKuaB7Do2Lkk8mxLKTAXY5oNaw8JUcvTrGE3oUV7M8mFMf4nqSUkBcLyKyBp6T63xhEpq1jPtt3cWH1tT9M",
  "key1": "4zdia1RH9os66McYFtNpz4S12PZtWbQjjttUs7QsVJXQiHpLU97ZTwcfW8MB36AAtKEV9gLFyNgMztiZbfqaVaVk",
  "key2": "4D6mqt3XHZFJW5PN1gWKk6EAY9bH6UzwSFYQMt7tixST8AABKgy99RPi6NB1anR9tHJ9y21cR7fZQ4nBcVZRgPLf",
  "key3": "2Jz3vGiLnb8C9WnQa471YwvuiXuxUTHWPucwFim6TGoSfg47rMDcfgn28rfHaL5zANFM5aD91yNZYaLa69ec3bFe",
  "key4": "2FCXju7BajTFeoyEZ8VZu3irLrppuiexbaJdgywR3HyXqrkrcm7TtpiEFCUUTCo9Erq7xHi6UWVriY5uZ18X6qV7",
  "key5": "3anr7wY4Rvp4x5FVuZkCeb9iYqjxYqq35UmemRfGn5nZzB1ZrMZYKPzzfmp1cWTTH2wUt4BUpjd6r1FiXHhayxqT",
  "key6": "3gmb2w944x4RpFphtf5aSMXxVbsiJGCFtMM64BTZNd62fK6kuuqxCsGBJwf6pG8btBmeMkkSiQP4m31gd68d4iu9",
  "key7": "5d8zW4HCXThR1sGJYPzYJa4XjzrVzMRgiU5YTJgBi7rqiDQ1eKt13Sq2AQih8Y5dvmXuLjTADR4GAjewqwojUcbb",
  "key8": "2v51GMrnV9UYNGX7Coah6KoTcqkSvh5DkvgEZjLZwrkGmJMh5LiQ3merhvgPpD9JcrWy2fEkogLitAfmeJ5V4Qmu",
  "key9": "3a8mLZyTsSDB2nAqmibXyrpamcfeGuYruQzUSUGmFsWVUGgMPwhb1thXUojVp1WUkxz4Tdf9VusJZ9YTK3jnvW2d",
  "key10": "2Fa8MNVCGfWC6pZjmRfQyLq3XyEUDtB3cxi5hLwBgTpxTtDwV1UVRA3f3T7JqasDY6wibek5WSfgkRzmd97EmxVB",
  "key11": "5nhwW6WHq3ZaqggoZXhnzUFbM7SwJqAuReZBQ7jhciceDjCwCKpozCV1BdsnpZDSasgH5tS19gKNWjqteEiantM2",
  "key12": "NuKCwLqX7AXbjDrNrc9hQyYBUasDvCASHhVRx9JAiNAaTtBaz3jwqgz65v2hHWmUXXrnxLVqaY3ydX4MnHjMzdP",
  "key13": "4pmkxNSwc7znFcAErREd8GMGJrhoRXMszGMPJmeHknnqfRvWhrvYTTeWyR52L2zhibMnRWrk3YY91tRThHKtUdjh",
  "key14": "4C6j3CvZAopz9p3w712C6FeDChVYnXP511DWf4CqrkRACa3HNrGBHSSiurnFHVt4MtBpBPxSVYrvQt26P74pVwrP",
  "key15": "3TCTzAo4UzRKbCacenTBSoXJvwjQnM4DuaJ51zx71aWDVzP25316zGcxW2EZSWvhpwQz3Vnke3oRDYPtyAhT9Xt1",
  "key16": "3gNbVegHvYaPp1LW4mVSt1C8Kwkrb2hy15fvxEUHi5T1RrbhpxF9Fn2AFzRLhAQJ6mHJVjVirne6dhL9PGAN2wZ8",
  "key17": "5SJNeATLQo7q1vnA4NRwV2jGXPZsjnTaF4T6bsqPiWSuKPiaqjQVD5PoRcHPzn2Tehia8FbAPxU1N6bPTNFSsb6M",
  "key18": "2aksAWiRxcJJXdGbC9p1gWbg7Nn8d6pvP673vLqVPnwCNGC5Q4wNms24Fw2m4CbAVA12h1kW5nVm5oHn2anD2Jaf",
  "key19": "4VHRx1WDUsyuDMDBS1JgeRA1u9HDedew3ebxqLVQMKqr51Wwkvg65zwqJ3FDLJNaPqLY4TF1h5NKNma1HhaxRVzz",
  "key20": "2nrvXjppkKf55htFffiS6sujCG1cqspvV6VofwmFmqTWgNSLhQ9uNyg2NX81jyMTGJr3g1jSW1cT79mADRW5FzRK",
  "key21": "2e4nhT2dW8VRXVkDqgct6e4cNuppWvzMTif5W3k7kX2P9Cgg9EiWmtaErQzoN2ZdSQsCNj7SWm8wtFsZ3VJ3hEMj",
  "key22": "2hnqt9TtoimWtq7LCfiY7Z1KN5SuUrRnuKBCCC1HQsYJmjfRh7NLiEfVTXGHpPHXgsEz4tz4xrR8aDTjKrCexPMF",
  "key23": "4uEu191686XwTPrLmreBg4mZV6RcYJgDogxsPoZP9gCximkCrQBcjwkq4xug4h4huCQXtGrAAPGLUSuiYL8yEE2A",
  "key24": "gn31JmFuNmvMADcqc1nr1sJNLCYvXCxbNq3ammPBQGTWU45aw8pWe6z1mZBW7DhLCe1zxE2AHcH7VxpTjJRv47b",
  "key25": "63FTN3fPM16MxntLQgqMNyrn2XCWNBTa8yzuZxnVdXvhXchbfzSAe76Tq6c1yxdxxzHLNFURVuYoLoPjnLAQE7VC",
  "key26": "2wH11LfohUZeNHMeDCAcQkaPhxRuqQiLCzjxKWur3cPgxnVmbN6iwayxY3X12PPBrKywRWAyMPPgmSqU1KekMhUC",
  "key27": "5JZY1Q5cF1cvW34WfrVqi8d9KZfdDhkXrrBZKGXZneU65oHNmmnoGW1jbgyrPH4xTxWYYLcHBCUCxJn8mU1VPw6K",
  "key28": "4L2Sb7ibWTQZKADrZsYSX4S1BKf3w9nCr7DEN5JUKRS9PUPdoNhqSHXDFWSkWZq93YgaJ9gu6fEMqCaE6Jh3gxF6",
  "key29": "3W4weYWowk232A513LS6qTByzu11VYWr7QXVnRNU67Ud6R9tHzWw2aAjqKBj64qhbhgfWJ9LKUMhVwjZQWvQCeT9",
  "key30": "2q5TtbdYtEufrJiBBBCX3vWoAedFmTKacsCngixgsVKpky8XPqXYjWnjXe6kfsn5Z5wa24HunRsSKHBJzLZF5MrQ",
  "key31": "2r5okDoJQvSCmKQ5Y8QbuzCDZTrxnc97fD5sCzPdCzxTrVFm7Ghy2yPVz9X9Xmbzg6yeAXHnnZMsVCeBWHrxfV5w",
  "key32": "2zCoV6JCRE7mwz5LuMWRSECPupc7XDqtsxME7AnHd3PyKgeFVDqaEpusHB3GnLnB8cczYS5MipzqMJvgBYBpDmdM",
  "key33": "65TvNAPoB3Wwd6zVpoTVCp3nX72zjdD1oEU7bdsLjwyXhrcUibuWy48RdnvhrNA8tAozS8ae2GuW4kLjs9U5oBNH",
  "key34": "5Q98WCMWNfLN5h5mUn47akmNzaESrsoMe97oTzqMwTPeadKtwifFsdY78bQsSUHTspH5uMH6Wu5Fc4iw2YnRYPEu",
  "key35": "Cs5c6XfBsq3QWNpEqYNg68Yd3sMvVn9s3YMnqzvsNGraHkgjmv59GpTQGNP3GFfQ8Z1GxSMqDTJSzkmE1M65a2V",
  "key36": "MV8DZXpq91ur24tsaECb9FHafyRW6mM2dDanWEbb2MfxJ2Lu8LzxTH2EdRpnNDf8cFbDyVZF3kMGp8zFSK2pgS7",
  "key37": "2BQ1sf4mJdfsuH38TZ8iht8ffimdL5BcezpB2SbM9dRrXptkyEpTPQ6CEBZt8LqowtKNwenHm8KaVz3hyqWHJwdC",
  "key38": "3usQGMf9CZSShbaziQWmdymE8ke2ELgVKU7eksD6hSaLyug5sC6VA91Gms5bRWkE6M59Kon2c6FzUMAvzatVUPoa",
  "key39": "5eFiiBWJ35vcUM1tKCvYyy9HguDhrRTLZwg6XtYRHbTQ5Faf2iuQrody3khrdaY5nmHsDL75EWGxt3GboYTmuzCT",
  "key40": "35CK7RXEABBjr83pU6iWoou4CcucRv6xeXdtQUUVZ58WohPMfqtcT6zQKCZoc78djsL4X77vbw54FqJFYtmasyZJ",
  "key41": "DYxN8y2sEqegNy65VCuhNJ6Qk6nax8iV2n8yqaADmBTL7Eji2MCHAP9d66cFqAkTpG67UrswYyNEV9Y5wViKdYZ",
  "key42": "39fxvd3SP6BLukYWfqEy1a4iDmkz48YkcawtbLyS2Hs7xMbAHxeDc3ysVxu5W6BzqH1LXNkrWg8Rn6NtMBBcnU1E",
  "key43": "TgUf43r9gHt2jrWMHWRsqYg7TSq1dkAu2hweYw4hrzvai7oCMfjGn2eNDtLzpHu2B15Si6rmMXn6mHYN8T42V2D",
  "key44": "yVxD4QiFYtqB5m7VsToVveJtvvz7sSxiKwXgETseSffdW1JorFc1mNfmm9LKaq9ZJuFLQCtCt11doWEGD3T3f5s",
  "key45": "QJr8rM9EFzxqGsDpRMqgp9F9JhiGDUypCymcuEWtQxwmNvQdAs6pMAi3XkrtVbnkf6aVQUdW3N3zA1t1zH38oWu",
  "key46": "d9KmxCX6qh73hzVKBzLfpobBV9Gq4c6DhM2qpbJZwCjCnUkn8J61HDeX2Sk63uS5ysmkxFj14X9YaEFFeigEf35",
  "key47": "LHCSFVAVKJKAmRpg16w7WbAywqGMELyw36eFomJzR2dsKxAzovCV54u2h75jB8GvvbwFZjx5LBJDFpG2TnGQfYq"
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
