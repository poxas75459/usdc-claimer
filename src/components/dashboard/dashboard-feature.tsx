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
    "2ourvdQGtZSzshpHUkr1HHbFc5JjpFHHfm2eBzXNRfTzfbhSrK8rnFzvfhzNgxGMG1x4d22vTKp63TnEQqsAKhPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQTdQdPmfz12zZoJgxC93srpLt4jEC7VuaSTdMdesrZxMh3nM1DUya5SE3NBRaVSSqBQ1x1mYxSqDxNK9qAfj2j",
  "key1": "3hbYWXXzcKBBCJ5zECGmiebeMogJyypybgqJ8ZF6oZAZtcsmpjsnWixZkPHpr2ZMmgP7PojQXu9sq2ZTUCnqXRtz",
  "key2": "CuvodsCSXTf5L2DVGFnUUoRHQpVNxEg2G8w7ha8Pf7CBUzeYNbJSb19co6rb45J8pcp76vBw2ZfvQSqNDC6P2Dw",
  "key3": "4fRfoY64EkU9qcb23eEmggD1mLSGVDDJS4Vz748JNPcna5ymgNA4Ltmk4gUQ7ULbAPDyxGBdwRkvUZ8F954G4r4K",
  "key4": "265nr65um5agSG22kxXeRZwtFLUwLqrmRSC7aap2kKWZc9cZ6ycnmh45XdTXnRqhr7hhPPgB4LDwsWbuGeCBoBek",
  "key5": "5kXZDEEiSqXoL2goLWB8AaRA4KxZC8aWBKriiTcQXhY3TB1Z3WFmHQg4VNSwnskjTwk6gWDa8hKwmaK8scvCnLf2",
  "key6": "LkA5NiTxtnNab7QPxbsXpjeL5uH23YEfC63c19seAm4rJGW412ug6cnuE3t7muWgmntoKsFma7diSKmRTJ1ytLg",
  "key7": "5ZyT5ASiJJXn6W4FX7zoihrn5zQWvUyctNbAMyRZBGRVdkZGhnLKJyWduQB1xDbJsQ1H6PwQkcxVpiRUduZKajHd",
  "key8": "4YMVrDp3YAeyVy9CX3PjY1Q6ZECBPmHQMXUfaXTkwF43dgTgsJfknFHUHxvuwHZ27Tot4Je4FZJjni4obyaZb6Q1",
  "key9": "zq8v6f6BSByxfqYK4qRhRPrBe63oP9KvAw3eEc2kFPBUYEDU7ptoTARDaMGsZ2NSFRd4qsghoeLvRDetRsKg2Dt",
  "key10": "4YNqdKvASK7u3CZEmqwAMCJKBdupjVXe1Kidmi6RfWYnz9z9HZDgtyjKcFPEzBBCuz9WFU6HqZ7Ems5XmPfhULTt",
  "key11": "sixPiUiEdPRbhgeZfvk1Lo2AzWcMttPbKKt7Wcb5R2pKVB2B6wNm3wyNhg3ykxvhCnneYqRipSzmN6qBXRu6Ve9",
  "key12": "3zVwtXC3m5u7MBhicqhy7kRPqi3F9gYQGbG6DBSvcwYakb5XfhCZcLi1fZeauj5gtiqroH6nUDKcgurEjPRmHTyR",
  "key13": "4WQkXDUqMxn4iQB5iHDEJsWxjzLGmj5dmSQs33FnnWiGBJDHHWj3KBGZ9NLtLD8DKm4AVgGJhrzXSTLjGw9KDpRo",
  "key14": "3uZeeZduuANNzEZ8GfFA3rEFa8K3acoJ8yobSPF1bcjBkbaFQ2WS2wSwUEcukZ7ujWDEcsGC4dnaHiGwL9KSHSf5",
  "key15": "3uxHNrhhGPihmAegSfvFSUinvPs8LjJ4koLvnfUfuSEm93DFwn59UmdAeYBpcEwGaUnoRP99Srisqo6UTo7MkjhB",
  "key16": "4Zs19VDKtkwVtjEYi7g5A8Arh5fTz4rD6R6E4xTQ2Vpzn93uvSavnqNzBdUGDTngX4NL819JkBMJdeKK6rRbZWRE",
  "key17": "5BtBX918Tegd2mv1iX2kifFRPXTZRgRPMzFWQ7rRL9ZGCHPgeV6GzNEXvz4pqimNHV1acuQLMznBcGi3bjnpL6Wn",
  "key18": "3ziaxB5iLRmSmHC2bgivgTrpJxgEGa8LR3a5H8dDudYcWS6fjPQkazM8LXcGytSnY2cMP17r4cLWZM7agZF7y3zy",
  "key19": "iFXfscaqVD7aryPAdJRnqeFsVaqE3xceyiaD7EANoRnzvrrqKfxeMsJXfPr8M4w2tSAyki9EMTaoE78RYVR9as6",
  "key20": "5V3HyqHipKAYRDgGp9Lf9KtzzSds8Nga6u5RqpzEN8fGXCqdRv4VeFQRN15MDVCgtvmd4UpNP62b6t12m2Vcwop6",
  "key21": "3NPMBGMQJ2ddf24STtAfccdLhtEyvtkdxsmXtcuRn1ZQN7JucTYAZ5xnampWRv7QVLRFmc1LmLGxL8xsQD3kHzhL",
  "key22": "52VDrZcxB6QVpdoc6N8fSCHRGLmaxYUVQpsnpLMBXyiuLLRVYCFdg6N3z4e9SYzC4JciphYbS72WAd6JYCvRVLmN",
  "key23": "DHzaBZvmK63AuAByykFTUDy83ZMrtm8cc3QSBcgruqJYGUbapFFYL6e8rHLBGR6idx8xoNjAjCJRtpxiLwchvPT",
  "key24": "EPVKo8jNkNEo9PbnudMT6BxAaqEXWpCkYaXB9tjwyZdWkEk2aFM9XPWpdBz7tRqBnqvBL7qcTQD48Krann9bRQR",
  "key25": "5q4etZGsxfRDZYgCRXVok5tuk6oybtvfTduujuHxuJreFWTAGDJuvzRV9sXAsWgpr2NHw3GkMKCGasna84dQJL1R",
  "key26": "3wwUFYKYAAKMDSKY74BHgRgzu4pVup1pJ7Kff1rVx62kH4ipSq4jDtCK55SWCphVRALCqGsapBUHCpuKp6KLLWtk",
  "key27": "25CHaHw31AZyuTSkA1rSXGYjJX96sryHAJufZs6Et2WWT8cJyGSTqWf551pEtkPEnk7mTPBjxGyVe4nSEzGU8UGW",
  "key28": "4YU3mHsfjYGjekR9JQcjvqpLKiKDMQtvTxRdSRzYykaTwiSBfaYFJknR3BktqBnoonhGge2TGDdHrvh6ktwiSn5W",
  "key29": "2GCuZaM1DEhwBHsvY2QfnQmu7B99h5Q1LCxryUo7nAvk33ZMXz21Y1FdetRrgYxiHJAqaxrm2Mp32vz6vEvUeNdN",
  "key30": "2QP3AsJmdpQWVa68xeHzrtgsibYcuK6eWYbm1eU8QjriFvfH5qgg9eGjQeRoYKTBnei9DJxrH6MSXP8AiZbgya1V",
  "key31": "124DmuSZxqTdta7GBmZ6DT1r4LULjXQCce5Z7j4psEbjK7L83W6tyvTj1xKWS65U9b1riskz4VLQZ4FvumBDCDXW",
  "key32": "3ZXHzQJd3qf9vdKxmkcqXRzcYmxBzyDYxR515BFnLiJzfv86BhyZmhuPKKRcEdJDLnSLs1c5S1SsKidmfcubWjiS",
  "key33": "2jKyiecnSKjSpzQAYnwmaAExxEEa45vMZ33VnYNxXgnSfjWBThKt58E2Hc3AuzujnjpYS4CedgtsZtGRVhQfvxA3",
  "key34": "3TBnEhyLnFvYQBJtthh6HCZEib2aGn3RVzEQk8sFEGcfuAPPHnR8t7CTbSFNu6Ks3Qrh6i5vtbA4fXXGLn4KkHWZ"
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
