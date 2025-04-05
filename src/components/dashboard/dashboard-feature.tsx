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
    "2zagHNh6Z5FJNg98zbqyaWQURFo6GygX4K1CCNE97V4AVGUSHe6skTkP96yB8Zy8HDhALP4149hsS9fqD6ockP5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q74amQ1XxiEX2SmvW2Y96cogEfBnP5PAsnatAiehG9ZmWFLoNHo2NiG3DTMKBTJMrtjf87tgnUUnfXgkbvLZsDQ",
  "key1": "uwBx98Aqn7gZ86s8fj3b7QxLk9Hyu3qy6aZJSBnTN2SazX7nkLzbnqbBEnnwGq28UW5aphYAixS3CXe4snqTq7z",
  "key2": "3CBH8hQvTkchP7aVh1aASXYiyEmmamWkUwdFf5jPXnuqipmvCKYUcJggF2x1V6jBDugpmHRWDdcCZUJwbDWgZexd",
  "key3": "AzvkWb9Sc3SpeR9DysXLWEDGBHbFiuPAKe7Hp24WAxVHJiykE8Mi4u2SDJ9sF4bUajpu7Ycq9hsWFxHJGWmhWRq",
  "key4": "3vYdPdJebFZgkkkWH4Qw73NMRLKwgZwnXj4VG4YV1en6vUEqRzNED5Kyz5XLEncRg5PuNn6C6Wq9BG7cnFLNMXEV",
  "key5": "64hXwwM3giJomqY4kS1HDCzBskeDc1tmUuYvHq33KxCU38FkH1UV4gcjpGHtHM7Kd6kM6HgboiSw35je4pAPxUf2",
  "key6": "56dTEkQn11M2wPo23BdrmsJsXBTcm7YDej4XUx6BxabKUGdbVAvXf4J1T4F7u9DWyJuW63v2ULHXrTTNFkiiUsPU",
  "key7": "4nTsJL1JMVKU16N7t4pEykgpgsShqe8oknqEMYzkRaULCykobC32S5EFhAc64chGECE9XBL6oCu4sV7Psvgr5z32",
  "key8": "XCwXDM8Ts4jUuWB2hsi9wQej8eWAXsNFeiSSYaaFpRstTLGZGgb5cZmVQGWXuW6eSabTSeFDLk8wMeLJZc3d9H5",
  "key9": "5tJUCtokBe6DG43YEhxUfTkqMUVk9RaWP35Ldh14Lewv9Ym53X1xm1d3v7e3oN45EgqTuzqhKbRLE3hTMSUeTUQZ",
  "key10": "3EvcQc4G77MoaEAFdrqneoTn5Z3wcVA7Q9NDqCkWwC5etABoV2D9MztamZKRxsaV6FBEhPfhWV1sYxGHmCWC3DFQ",
  "key11": "5vaoHdRw8qZzs2yguQrtbAHMPsyTR4DhnuD9v72mmWzNP3ZuC57mGi9a4Aua2TYVWabpQKXwSTvTKwZ3aFx9BGF9",
  "key12": "teUiRL5v7YUPMmzJV7dN2AR1cRzAMbegfCyVhkf13HVXqiXZLShCoiZnBKWfRKLJA73qs24afgFVyLxEcFkhxzd",
  "key13": "4CSp8K7TL3ErSCP4uhiSrxwewiVbPswU1ch7P3Z8Xo66qajChAEbhMCS5KxeWjcggrbGh7PfE2YTjT85awZTupPF",
  "key14": "5oqBRGnuAhBdbjKUk655ijQ9GjMcXbdBtDE1GkeQLY8emBtw5Zx1FLRM9r23C3S4qjCBZTMdxFy2Ec5kDCtTc9hb",
  "key15": "3nM79zQvDUpWFsCAn6mnkdu1E7m3EbkWbm3uZJaph3uC3PvqgjcUYNfo485p19LoXgB7VpkYLJXS2nnyDPVwA674",
  "key16": "3jUWVjxEDBHY5TSX8DeFuS1jCiYkEh2UWGfiJzJqNuq15R1sQdF3GN1JPErP3e3jFPRzGwUQUb9GdkS2NTXMYKzk",
  "key17": "32CmZm3BxKHCjrXHrb9LnYiZZQkEcRBpgZ6PipxZhbqEh9X2rp5ED91iFsxsYaX5LrpErATPhFwMxdj1kHkF132m",
  "key18": "38M2rychgq8dUREjaT7YVNiyLgkEvdXr2852ZEnvCqaMtAwWugJkz2xSAjLe76hUZ271Zykvdv5q3qJo9yjvAmuF",
  "key19": "42HkS497RgUVrAkESPYFxXhgd69XsehjHTVmZQmViQ4ZLYAV6dc4YWgj4p6mKRQ8UstmRpxRsZ4g1dX89mKH83D2",
  "key20": "4ru97pmqFKbwwd6YMDzJNA2qFZLEpQAe5BTALgJV7cyAjxq1iWM7jDtvCe5w9yveWJjp5tw5CegH2vbHuRTCW2Cv",
  "key21": "5oCHiD7gb3tk4SEPJgYuUG3ATK8hYB5uH6zHyHZoXxFK82Vx3xVqbb8NkDQCK3FZ8MGYuhQNJDzeW52eUuMSsTV5",
  "key22": "TYEGUjsM3cyVAqzhjBJdwzg9BymYCTtRHybQuN4siHY7Jmy41fPkp7WK8HWKzNoqkYRDWJ4pb5ssktbGGaxybih",
  "key23": "yt5SjDrF5rWY5Hk1Np5k7Jm65Sxx4hrroWMf1yg5ks2aeYwXveDiP7zxqUg2p3VHrqKmAzNwr6XDh8RD4y5g6Mo",
  "key24": "4NWCpRvYcHCWorzQWS9QUnRq4dWsRcxpFWq8ns6pKLFTJ6SvDN9hu9eeFAQNPghpBwjv8bFBTAgi8Xo2mCEKjeHd",
  "key25": "4XigTz9RQ8qjkmLorYoa39aqrPTaubXnT4Lh7KktSt9vqvpLyv76rXXHcGsr8w4BMXiM1TBQotVfY9jeVS6YXyB",
  "key26": "4XFvd9r6nNPc2gXTnMG61J7M6KhTNWKakQryR3GDKhc9ujZbLw7v4jn42adVLeYB5c4yqepKWLS32axTUNUtq6Yb",
  "key27": "kfdzfHzP4YkpXqSjmmTuTdqmHgR6NyCVR6ogDynjEkTUoPapbiWvFs4LA48T83j723VHYkHPWARQvN8KDdCrT8X",
  "key28": "3BVyg1X9NMAPVj6mHsBvko9wmuNLYAS2dssKTPPZyCEMsByrM2zRKpwFmWH7MSwQRqmGLPixcin5yHjAkbXpXuQA",
  "key29": "C2aAwq7vD7NVdNrXhuDLACrvqKJ4BXxGonsPtViWAeKTE8Fipw8nsZdYviviU1ZNcKydzBWEaZcMKYWsJQ6QzHi"
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
