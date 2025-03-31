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
    "3zdniTrtTc7Ldx8vjyAEk2N3mtoqNG3s97XN9fRDYanbYhKyP1YB4bnXWfhUzvNDWXPb1XeSY6DZVFsGMzP17UgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaBGRokWLVb9RoqH4vib7Qq4FcrikM5XHZqDvGfWr6xSzRQxH7k7MU5tTnxwF1ZxhCF5ZSUMtdUeo87FwdC7Q6Q",
  "key1": "41gWSKeVJz82Hw1XNfuMKJ3aCMctRPLKC5pDPPq1tWg62U6LptZfqZDWahykbVLjwuMseZChayBVtVJcXE4L3KYw",
  "key2": "27PgwxwYnow96FDhGGLJfkWq8mJBnVYbV5ro5PLbdq4C3n9MGFeqrmqjTRqH1tc4fKWtWRfmwJ6DSoVQt738ug71",
  "key3": "xtuAUdGvyhX8P1x9tTFgT2jyNkt1FNvbdzRUGCw93r5J9TtGfjC7sRzXbzovwaWqh1xUCHGjX6YamYCSp2DjikS",
  "key4": "2MoJFij9Zmj9H1tVxr4vyjZ7y2WubmTtiHHEdQDku8D13fMkvKvthYZLXz5SWE1SsbkNSDGeXZJnPWNACDUhnF6f",
  "key5": "3xgn1ioD8bHQvWUK8sUSSG4Wx6LUKP68fck3pBX3pDf53XwcSEfxF5YNEKRpUzJepKXkD4VEU28nqiHo68dRdPvf",
  "key6": "3eJKFxBsdbQZSi7JiTnRfAfgNBT3MCc74vfiXRbqaCiHdYw682jgcPS3CeJh7JM6iaM3s3Aofacrcri5SzWNA5Y4",
  "key7": "vX1yp1kDk3HejVuzXSdVLBhk3xBR3NbDFCRZfakXuGEJz236h2ZZCg77Uy7gb1syJQcGWoCjr1miYe9NmhAJjVs",
  "key8": "3naKTuxH1LsF6B5EuHpyQc99oB1Xwem89Q53qufb477jQHCf2gCjzW1cwCbExZqjM5dCqFTGXZ4yogxY8vRMcHNE",
  "key9": "5pfyZwatdsQrKM7TJXqLo8kPMV51FsAz7vJA2SZeR8tP2i2vgkFCZxecDYRm62jxReX56MXTq6zfpoYpZNTrXBZH",
  "key10": "34aXDAUH5kHyJUn3EAw377h6iZHhxjpLVVf5Pp6MfKhLLkRah4P1Dr97htNdkMvK2u4SqQukhEfh4XWrZiim1zTM",
  "key11": "3scA4grpgG3W7vcHXebKApxreAihgrAFw6jXPCWLxrhfHrxQPc6VvwsFAz6sb5UegvFr2SaGxVT5xH1LUHnVpPZr",
  "key12": "4cgGg5xL8CddBd6f4RvB7y9bsU52qTsNzASDWQ57RhUNJH9C9EFrfcPqrvEwmruTYZqWStbyRZWmBXFBSyt9RNf1",
  "key13": "MNeQkoyRSn94nPV2KMfXXZG4zt2FBo2pi2iGQPy9jnovjmd1MqkdrQ3yvCP8mq65HDL3VbFarVQMNRpTukR6Um5",
  "key14": "2Bjs6suvS3zReWNM9e8Ky6e1LXgZxZzAceLpHc3QtKSFyznu39WYTbSjfHxZHdin7jmWhgiEvCb7N3uDbn6J9fYD",
  "key15": "5xPLYgE9TpZASaQMYZLpxvcsPBajaJGDmFgai7L7evUjJtpYVhuJ7Sge1DJtBRkRrzUoc46mcKSzzobteerwAPHs",
  "key16": "u8dPR38ybMinRVRPbvxU8wFLgVzaNb385n74NXpf7mxGq7SYUs1iaMTxyGMqZdombTPibmnUR3xkAjiGCUFmyU9",
  "key17": "9Uhis9F4Jj3bXy9YVFHoiQURbn5uMY7aH9pdFga8fBaAinVDnZQnACUhixDqVxQgDuvG5VFW48KWUAFqwnDhNCS",
  "key18": "42amGnZUrd6U7efBKF3wNhWZAz9fTga4JV2CFYym5JCX1U3ttf4pSoYFpNHyDB7YoHxJBVcozrWvzHbcWcvgRq9z",
  "key19": "31Y7GFHraqeb9gymxkJLeX9npt8JtSTpyJMdAMxm2QkoV4VmRUnPDd4WcR7bGDog6ynuHtnjsNC8Z9848ZyghjK3",
  "key20": "4RA89pCBwoW9k1Y3y55ptuzEZWZcyk4iWrETWNK1sARCuCRxcYJFhCEN5pkZtut7bWbFxeiFwvvWjatD3WzV6FV4",
  "key21": "oCUBzTNQLpm1n1eazj7gqWjYAR35NGLzyhgBmbLKuerJgTjpXpuMLKjwfUwcMV4qnW7ygitBz4XcpeEnnv5QBVo",
  "key22": "5erbk6YNjYP3gjRkucHhcwtQ3yMea3VQiR7PrDgeqtnE1Zrh4AXpNc1iMQckGWEvhBmtgFD4Bd9yaLXqwiWLm68s",
  "key23": "5q6jvds3ZtyhzSS7LLkohUhS7uLX9R5cekNXJGTFK1hvyhdRQxLSHgVE9LhuiXEBVVKCU1S4iHNrYHxs8RCLy4KN",
  "key24": "fM2k2NcbJjUqVWQTRRbZPe6UW8JXVKBdyVhnoQoQT4twGZXS8VXovZzEBA7HKzRXyiEatWoeeFoC9MNcsogGvSq",
  "key25": "4hVVAWaNVENhpUvTNAHgnZawxjFbovb2yESu5VQXvBUmKGtiChG9ZCv5GSatH2wPYUf5SzQWsT3GTd9pWnBBr15g",
  "key26": "3csmY5JTTw8jY35tWQpumxhyZmqKsg9LQotR47w5bVEgxK58DtVQR7FD8GRtwar3EZcABrrCqG28KHhmfcyeQ8q6",
  "key27": "3rmd8LYGySNxFAGZAa8JhEMyHCa9814GeYsSMNBnkK9UKdjg7mL9EbFjkojnsf5Zc5g2pSBxdSiydjGzmryTa5uY",
  "key28": "yBqx9HpHgA83KBKHSLJBrJZchvMV5pqQGXU5XLpTWjiGUvt25sdvYqEmxT68aQKFfkCt2d5iDZKVBWtPGu5NCUv",
  "key29": "2S1fpaKMbs5ReqNuRbdUhvQAdr9CRpDAdRA6jN8gfeXrgwu8dZAU1YjqKqQTZrQurxPNqEEb6SY6CyrPj9BSukFd",
  "key30": "5ziWDc2aAyJCbhC16WzaNujhN6YVXwYeMuGqVeDLMRAxbAz4PV6oFbK6Y7WkyVzRVJgNnsgpp7Woo9EvgNfm2Zxr",
  "key31": "H7Q6ohMypL8ntTfeTDBBEK9NTfS2ufgfQahzGRmdxv42emsSpWEsZWVkbPY4ce4AUXJ44Q47o27Jg14utppv5Hr",
  "key32": "pkQCLAaoz7RhWw7RKV5pjmweNdZ4tx9bgdhgTx3dE28tHi7web9ScGgKAATaedAsQUVpPx9dB48BUBVi2uXK3GT",
  "key33": "2axEmGnwNoxbj2dJ76ofGrWAPWLYnbnTETxwCbivpLoScsoni9Umh1sQSo7Pz5GKAFNiGDLtg6X2RuZZiZEwPW7F",
  "key34": "aZxK2V6rsQ8vcnnDx1AhVkS9u6dcJBzpkZ9LjkeCwiAnh8DST6GTpDDpYuNkEenh6H3tQj9RfyuiPD477bhcfya",
  "key35": "3k1bMzZE4WwSTbYYaLbwNvpPAMZPBMD5YjzKi2ZzJ1CAwta964SDKQSLmzjA84FtK6bhw8afwHcMbftv43uZe9VK",
  "key36": "2xVwSkgyU5UebJEN5XQui9BzR9hjKtX1D6m3MNkgcYXuUQSsH9driLFHZmXEme9S2woL2p5yq5mKLa3ECjs9HGga",
  "key37": "27Cq1K5WQ62aTpxfzxfM2a7VmHdm3DzuQNUcSwJtTBU9vFFKJaCTP7QPKdvzYHf5Uk3kB3kD4C916QycYKQ6AWKF",
  "key38": "386h32K28T4kHDzgzzX6RJThG7ZwmMWQsuSWFKpFaFNibNBHhkiT4uJt8UEwW1P6756Ma2EQuCuYZvvCnUsMwTLz",
  "key39": "jEsfSdFibsFzEqetAkcaDm6gYNdFqLfzzs6LozFgUPhJ5DJ9uhgPsFNjxTPeReK6tDdBWdUWe15CZCgUjxKXtSZ",
  "key40": "4MwptDY8TV6cShwrKP9jbyRHfzEFHVzcdnZc4Q63AC2ziWTdcXUpQquxAQr9k1bSK6oDT3zreXaPGJmw58yjcUuL",
  "key41": "5ghViPyWtpmaeVcVpXSugjLSrDysVG3W4S418yHaQmcGa1VBA2vWLhCKNxfU9wHrSnebvPSW1V2myxHuwUj5CKtT",
  "key42": "4rEgt4eBAGQ5JPX9k525rb2vxev2FTmqGrWcHt88mECWZqDVhU1UjiohERiZ4ebhpjirrCyn4SGZshS5zk3Mxoc2"
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
