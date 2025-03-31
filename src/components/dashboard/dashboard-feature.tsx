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
    "2LkZdNKfph8deEMPR6SoXesDHp1Un1JxXbR8GD8gxK2HbWe1P3m4TeaqkG4b7egofJyUeDnWNCvZpRXdEeoRgbmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qg3F54wgeFiXZy6NRf53Ric1sHipo9peA3GFgNanbrcCHikAc6E1J5dgxtX4NjQPX8MEk528DYMfmmN99BFqkH",
  "key1": "iVLQ9JVTfwogHxDzC3qt3ckVEoVj3aykiii9HeqQhi8LVXzdhDL9h8ZDHfUFkAEkNFpQjVsemMias6naESWKQHz",
  "key2": "5rpQr2YVMPNiBYaRZfvxsXquicyvz6BSj1xc1hKkw7WLJX7my13UfTT9T7wHHpWhMvWW8e3RDsyAHLVNu6iTYiXE",
  "key3": "GmJ11BKRbPzQ11woqGmZWjikbTbK4rgzKAdN1Go6Qi1BSamEotqWg6VcYMnJXUSDY3qASnmMK9DRAkv28oPXfvQ",
  "key4": "4hs3KpNWV3gMj399viRxrf5eXhyb99LRcxzwykVDmsVfyviT5DhuE9pyzECBRJZ6WpwPooWo19RPbmQXNtpZEvXM",
  "key5": "5ZoJjgEndrRKpLqpxA4gVQftRgjvBGXUJ7YDRzw5hvyrnqXTeDaQRCyDUPk46kqmWbr4epdMfx8bcYcgkqwWhP5X",
  "key6": "53kfhxurpyxQ6BBntaa3wWUKTrv2gK6hdCqSXg4VaM1WXS8xhMspNssqKodnrJ5cdQaNwbymY5PJFPyD8kpiVBco",
  "key7": "3SJL1E9so2ShNQ3B2Rc3kRtYzKUscuAVrDPxsJH3BYMZu9XRPDfRgi8Y7M1ppVztU5p44wnMFSTT1uHYD7PKfz1W",
  "key8": "58N27xvuFx2mZuEzdUnzAYQMXzatq4uQSUnuAYi5kgu5N3QsoGbu6T3Yj3knnFKYsNRdXgXnYEVtyGf7EeZ2ksHL",
  "key9": "49Ex3FDkZDmdN43HHPuAqgy89UETyW8aaN7uRppTW5SyXMHbZKmMoJJMn8j2EjfdG3wTjaceb9qt1nfxCNLM1FgU",
  "key10": "2YcmduKUgUFP5zhzzKooNhLaYG8t4U66515voYMp9sd52KoEZTPdho1xbK79ceS4A5s4xGwmHRFTkDsnHiyKBT6T",
  "key11": "2rXPYqJ8xgpmBQX9LGEHsPEmcATwKgrb4NsuA3CpKKJ11uSYXPaUcPrTvKpptzNDsoR79a9S9YtUkRoFyNAQw8WQ",
  "key12": "4sDS7Z9LsNWoZCjT1rqRfPUzZaomCz8p8gpa2ECmiCTTyGBfcdnRYuHVDRHYiesJzodeGXujF99BULcr1s8QAZmn",
  "key13": "2d11EnWYJswsmcbkzQiGhcA6XFQv4PrF6mBGjoDZZdyvFf446B98Z7WpZ56V13ZNbdDqDybnsQottxh1PQ5bWGyE",
  "key14": "44AVcJ8HKA1MjUEu9K5T5GkqKgdBfrqsxeuoat6W3XqSwsDgSWMDokaYuHuH1BBKCLZT2dTF8wNuC6FYGMSRcqdj",
  "key15": "73dYGTde4yQTvxUvLbCQgmsVF8eXQ6FRBWBqQxZ2KaRGbtQ7gim6Fshaae5FiicpZhNySqeC5wVSbTBWv9aCsDc",
  "key16": "2x2DkGTetCNx3cWS9Ru2mvJx12gn6UKhMnix9oXQ55stRs8udRNFLeo1uSfh2tDtpHGjE9SkCantR5cvh5C7fXtG",
  "key17": "4nUA22JxPUxJi45mExZUmQTJREFSERc9GGKDdSPkQbQwBFAy877Uh2UXJfLsb8UrC2dD5k1HJGj66FAkpgcUPWVJ",
  "key18": "kfX4NJn2Hb5kFK17CQQTYCNqkzSefywJwgmRMEJPnBv2ugsBFxJ4aSo7cr5746NU26sHhxrqFHi4gsptngnrUf2",
  "key19": "zjUcGcusMDLSsDAViQmiVWhnRbJXWpHxFJb7sgxgymGeBdQvuGfD9ecadKmXeB5VoFR4h1VjGZPNhd9qiMRTWUH",
  "key20": "2jJvq5tnCiNf4KtA82mvekrh8Cdb4iEcmzrRaYTGWVf83jXjnFES4SZgV11ChJkMHxycR7G413aAxegpEuj3QkZ9",
  "key21": "92jkuVVaGvGX23zqKYDYcCXvvLm4oACDrpQUzBEbjFKcR74T3vvuSq2tergS2NW3RGYx2tk64RrjCQSrQXacvkb",
  "key22": "4vTtpgmrz3tsGLv42thewt5jd3mgCC1Zm3d1Zt3PBHJNg73aEZs63UcAi75tK4LjZfpBuqAn7iFfCu1or7h4Eryk",
  "key23": "51fGNedDcG8EbWyoQJH4qedEbmHjuoBL5nH337wTkhXgkGpLDyAPFT6KwkbmC9wvxr9rMifJBWh1eu4jmCghbZqi",
  "key24": "2kUHgESYkUtquXGTTtKvnzJHNCYh45KNNEF2uw5SewmHdWBbDe9S7npbTG3Ps9scKdSKBwSUuuGn7iJANchmDK1",
  "key25": "3xVMTVvf1V2s1zYqb5RtbZ7wRYULtLhoGLPGEPccrm344aHfWfUGGaDXywfQRMMZGWp8T8V6EPukFJaXTL2zrSpd",
  "key26": "3fX3gnxiAuWT2mw4PVnk6Cyq4wAueAfw7KTME8gfyNtgd8v5Zswu16dSFfa7Xz44PrNKG1rKrNr5Fb17aAQavX9Y",
  "key27": "5XZ2S5WcbNafCdCjAQ3Acgjh3nVBp7WZ2uD6jzjtBPfy7JdCzwdwXzXABW7MfJwYrRvhEJCuGfaoBuDWyQXVw45g",
  "key28": "38tZgdicTrT6Aqj9m4rN4biqvH4KmjDMxStND3pVYxDhznE9FJJnot2C1QcXYN4ugPdyDc3VntCBePhfL62qN9uC",
  "key29": "2QoRxhbx1eZS7HtuD3MgH6LXCYfDzpJXQ1Bk3R1sc1bALQMYCETa8EdAd5zTJMESgdN3BWtv8kQq45x1Lz3dUEqM",
  "key30": "32ySdTtFVp2ZrGfyc7GdcBhSdqCGWua8HiGneCFr8K4AWyQr5yQvchVsK1tKLJ3YWeRMpzj1h9cv1M4rT4vfEjE9",
  "key31": "3H8w1ZnSMor4xPx9YvSNk4zhoDyP1LKqdmCrB54UeBT2sMCCVYnTHHyCHTyYcGJYtivFaNgcmRhq37WQZHgkpEZV",
  "key32": "5X9M6Uev9Vkk2Fnu1KVpSZg2WSCJE4D38mpfVn8FbnwrVPAr4TcQj8QtmpTvx2wsn9KfL23tYBFNwKUVrCw3mmKq",
  "key33": "3kVdFHeZDynoBsnjsHdA2AkW1M3WZve5DwRX7vZ5hLTznSefBi1SGvzKxVeKRHRupD58rsVKFqwaWvX7VoabMKRn",
  "key34": "Yfpf5YeZjZoPkN7FGN5vStstSGfAu5b2AwMXYrWRYVY6PbQcqHfvQaExbmBVPAik4HePG4EgHckbmmLERNQQNS1",
  "key35": "4aFQdi8qgmACRi7PK2pMozDNd1AZkPEXz8rSkCu7yv5LJByNqRGPcmGT4snya5ENFZb8LnokQvChVmxX4Y1x4usz",
  "key36": "3hotbhS1YDurrv2d369yxqiEo1qoqQ9mUA8jeFhnoWmBBEgmZs3xkuVaJjFXaZggFXcbGgwS1GtnKPezMcdeTG7k",
  "key37": "3iQ1jTUZfyNFYp9qBWkeaDTusW1gZfXX5XBNf68jcM6UoGrShoDcX5m9idiFdGXT6E867K9acPCaf5rBkkAUNNjY"
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
