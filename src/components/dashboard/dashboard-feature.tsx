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
    "3VytmYYKesqtgjaZ3rTSFbb7n66VS7oWtb9V7DY5VQiyQ4twdL1kZjBT4EuzDC5jWBksPGzgAChsbUjo2SVM8739"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpRvxJhiDQt8uoKXkbY34knMctJPhAVMKMxgXUn7cDgPNQKvBb72ic2gcfrynXVRqwgpbJNSxa62ZNhcVcSn2k1",
  "key1": "4K7MLtGET6Py6WGZnmX7KRob1ZoVGRS11uV5WqmrB5pmKgwcwmPgdD9YDqjQKP1iA4ufc6gQRFgxUu51REpxvWzi",
  "key2": "dgzg27N3Mwh8oRfaoAYKX51myeDt159HVL7N2Lyb7GQe5XNTtoRj2wroRWmrtaJnKCQvk68ECVZtEWmxwCmKrt4",
  "key3": "2cGfqHbgzH2SgSwsBS7a1U1qqsqW7g72racFNgnMHgU12S6rF17Ymu2wzwVXXzQ93AYnBX82rRYkx5pKgz8S6y8q",
  "key4": "5jNRfFdE7oGgS6UD5VNHHjvEcSet424eD99YFo5rq4GUaRRvgwManPEUynXoJugKspDWtdXjT7Y8HzWAr1KcufWW",
  "key5": "5HmVCS1ZM78qUSVNH6iBft2grKUrnjJrWetGtJcbomuEMp3LiVLaAcnYobbQ4bRwUZX7oAwb3uqpowABkLPrrdfF",
  "key6": "2WjHbZMVqCNAydoFGNoQ6TLcnsZ4UPNx6bhPhjYv7GcNUnxuRtmqe7y3kXN7ERcNqhUC3ZqjkpkTRQcHiWzVJfUS",
  "key7": "s8QrWYnu123hQibXUVm8YoEoUPC2WxaonTm76WmkDLaGuTbRW8HaHvmsWBSWAid5cSaXJxhfwkSTsrVZ2QLNpia",
  "key8": "4FWt2RgSf2QnpjMfqXFhfEME6zxKVBNoFBEeBcGwYYCrZzBFrb9SKzCCCR8Cwrnqdpw1SqCxf1u5Yvu4EuwBupDc",
  "key9": "4JQe4bviu5zWzraDVoQ5FpjnE71PU5jKdUTStxbc61Gyenv3FgX4mwFzH9u2PZ4P3DaWtc9Y2KCPwKaGNn3ndHpP",
  "key10": "4TZaeZGffZ3TesrbqfKyJzoMkWeghBmDnTVY2JvhWmZ3yp491kGtCbzRNgxdb1wfxVHj8HqUQjnZ2taA3c9D5B9V",
  "key11": "2mxsG4mF6kZrf5cp2V1Yaps41TZ7mcoQh4zvAtQsQjF1JXeAiLryfMXXpHDyTSnXqXRpsdfnSuoVQagSoXCsAMdr",
  "key12": "4HZRNV2Uy3CMTVKSsZwR9GD3KMHCCGujUNmX2zyGQiWzPR9cmkYdy9RrUELP983W14CJ7mfvfZoZHCfQHBtVWmyo",
  "key13": "5iVmFvCuWZ7WcHoKLxS24P8BEVc3zMWqnDREwAndvh5igCh2QSvoB6hfxKZWMsF6es5WBKD8VTc78Dx7aSP5KWZe",
  "key14": "4vQV5cdgNhqKexQDn5YrqysDK2QjpCZ5cfmQxur3eYjUMKT977ZPdcqu2kpBw9TR93ZsmxkKo8C2d5dFvLfJeVVT",
  "key15": "2ydDgkLRgsKpFXP71rp9ySLfLqxY6iVpLa9mWBooRAwwWoihcXzv4KQ8j3vUnj2xe9E8gbjCn3txAAn9fyThfAVj",
  "key16": "63sKif4knzFSmHsxSgyT5Vcrj5Uty1f9mgTyp4btKDxaVixHsxWsEARSPhF6MTjnUARk4QMhY6AhLWgssiToGuPf",
  "key17": "3LtNq8HEP6WiemNfV7WNfRSwReacWAyFRB4kTbafM8Abe8sHaMGkKMWXWDy28ZqRYQFmAabJ5r57sWfHmx4kdY25",
  "key18": "21U7D4pyzaVJbc4Pg8tu3HdCmtoRxMhmCDTtpkRif3yTJSR1Gw8D9BZwMonTBieiXBtJ7CKMGdsLVBkqnfBBXNTJ",
  "key19": "38cZwtCkZfyw76pUqSu2ZvwN2GtDDDBo6VidZz8aoVnzasBD9vr3jxRacx9eRTHXzGDhd4hn2NpL3pLwF94BMMvC",
  "key20": "4cNGhhr79fctDxhJ6oztvsAP4Xddb6NbpVdbkGEKerEzJz8qCrpBi49jkpd8qiL2XFSk1WyNXPZSJp2umqTFB1Vp",
  "key21": "3ZT4pfwjCC4b7k6Rx2KiQvwd53JYWdUNni42W2LyEQzAK7W9XBCB9mL625QuqnPuFp8vjiFZHvXbQkTQFGtX6XQ",
  "key22": "j5rU4MBxdqY33Vgyi9RNZL8xnCAFnaCRHsPfrBRkFaJ3xCwv3eSxzmuVHpeVDvywLX3XVNgcDZZwuB7sSf3oXD5",
  "key23": "rBkcQJC1TUKnsDsG9uXMEGhX2BiRJKcnJ5X9xRt6ZdXzBJwucBp6NtMQYstUASJcswK9aW434BMr9sLLLoMVBhA",
  "key24": "5CEzKF6EBEQ5ZBeHkgG5K61D76geU48cWDJFk9nvKc8vJpS6DUYfAWYBCLEyiNkAPNgcHoUYQig5fXKVxn1ejJu6",
  "key25": "3AuBeVZBegPTPGN9b3iRGJXtKgqJH7GnVWjpjjbAmrvxXkmgMitbNRaL3YyEadSg8BvAMipxXBbxvkqpmKCDevNW",
  "key26": "NzFUJJnxRCw1THvy2CABx1iiQzmp19pfZApy3p7K36KAo5eDFzZ56qJ56z64YWKkZY4ZKfaPKwUuq1xuGR2kJbT",
  "key27": "5DaNV6o5x2ucp5MzYmYAdGYGENYWqW1FmgmxjcW5rZ3McYW4GvsQdDpwVBggHcKTwKcetVRM3LxpbmJtts45MxdH",
  "key28": "48kMYFz2HYujQARqEeGVdUVoDn6cu74x97QfVdmdfWKBQUQeQbpTwJwTUZnTUtRL7xKPMEv5YquZvfmpYNyPBnqM",
  "key29": "4xPfCQhPSuJ6kvFfLfUfiB5w6Z29MnBzxYd9xcpRzYSXuUwvtkWuRsx1W5XRhAeCTQiT3vijm4Rq598vvqYj2Cjj",
  "key30": "4qKcukTxzPzRBsfpPJsm6751nSrZfVF3v86oXqYjUpdoG1E7qSCqq8roV6hWpPwNds1wRB2mU2Qoz9Gr7YvJcyf2",
  "key31": "4X7BWLueHQP5M95xstEiXJwtHneoW4yWrs5sHMDHmdNu716dY724Gxt1w9ecJpksK9WT9YoPb3P9rQZifj8ntDjP",
  "key32": "5ghHKLk5cU6tto6UZ1ZuzF7unjpCwUfSY1fFR95kjnFGJseomouEwhaH1DWezSGRDfknZngFndVTywnbNKN89bLS",
  "key33": "2g9wYFHJLXNc1ibPRxU2rrXzwDtWVtNN1mmvRL4vpRNzhV1Wyta6KFU7THwkTBokPHGXTqiaZd5pYdSPnbfsYGYi",
  "key34": "3ufAsTEUC2cZih8rZvisfN2gk1dCus35uCcEXNyLtCqe4ynLNVUeKZmWVoJosyuYJBAH6qwUbCbXrunxqKH7s6YK",
  "key35": "5rN6oFv2i3NMaJXfq8jf1nLHqR81xskyPBvPPyqSPv4zghxVkhw8nKYFg3BecopXEqGZjGu4iZjC33Mhtrh5jBS2",
  "key36": "2xN15m6LKHvGLdakmZxq593UDP9BoPXsCZp9FdpqBpXyRxvyDymP8pQGdcjHhkPN27pX53bMRnmugdLEqti3BGeo",
  "key37": "59Jx6qweXiU8aek2SbArtxpmNkMcRLn5hRhe1rQbgbgJbXQjCfAKzACcAZeyNyCYXg6xCtgN2LjwyE8o9vLJPupB",
  "key38": "q3nwR163yzVgY21A34QanXRRuvTwQDhhq95txgfQkXtHdjCXhwwA9oFjWhEZ45m5Vv24eYztubakdUrUX3nhLVZ"
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
