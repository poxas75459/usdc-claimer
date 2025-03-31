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
    "2TXiq4mo7L59Qh47UEXHdRCFfqhAAV6Zimbievxte7e7vdh5V3QanSSVUGVQ454aBV4G8MELFDDkpxQPMRnqaQa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qfd3ZwSz4vWnSe3wedk9eXcdHaGyH3XVm3FqQmFmpu7dYSJ6swimLoi1SSoWHY1xBcaXz3CXefUp3fDvtZDoArm",
  "key1": "Z2rHJDsYGheLzTB5irvjg9N2hAZn9ZMgThxnZXAQa9a8qeoEQTy1fZBcnhurv4CrqxUApYffyP9u4j4mxRWwgHH",
  "key2": "46gQuMK45Mi1qFKP27Rh1w6hDe26xeQ4e6cyw7Tw1D4tS49Q7Au2Jr2mWjtQdjwkbSwmHc1PdPdwZ7BJEFctA9bg",
  "key3": "pQgAGiA5w8jLJ7JEcTbvmRsdPWcZP9vCyDLaVU6AKhn9vV4yT5xZa9CY28zpVKukYT3kedXYRk6akobLhSi6HPn",
  "key4": "5saJsh5J3zRAvnTLoFQj5AXfr4ABzzCqsmbRKPKwK1vkSoL9yd2i5KqzWCViTNHHuDrzu1YfhWVsniVcJB8SehZ1",
  "key5": "37PWBxDaab3BZLvQYSxaTeyWmEmR6QCC65YM86ATqnbVCz9t9euKkh5XMCRKAfC2CArKTbcz5Zp64DdL614yxMvD",
  "key6": "5kXasvQezMLgHvQKN4ZVbDRk9K4X6LeMWKJLAXWTGtPaCrAzKGT6F2Patx33d3sqyJR6nhQp8eRFrryYVMesLxdX",
  "key7": "2aGsozZ3kCjQdrs6J1qHV9HLjpcUp2QzmjgcqSTsi7exZAUeK8MtfhNbHiAeupufwCftmMaD2H5oNJvvbt2BvyzW",
  "key8": "641QuLcQFm28CNXyxPuZJZpgaNpPdoVkJwoJ7dks7SKrsTGmyWxVNH4KAzChmhqDfMjb6kGtiSixSCwgHPxzzdAc",
  "key9": "4B9oze5a4KgG9hn258nvbPM9abdXPMqqakboF5gTRrHHfgV2LeRLpCmmysoCvRch8dHArs6G6k9FU9g4V69TssDW",
  "key10": "2MLZQijUoyWKUzMAs6koEkrkaZS5Mug3o2KU6pxNoUNxR7xqQ2juNkcpqdifcrp2zYs2tn1hGunhUicVWCzvaf6u",
  "key11": "2YsH5pSdsspxXMsMRftHMhdo95mbwqcoAWoiGpqvjwkWEkWYCTSTRvFmoty4GvEK5m8GDTvqdKKJBdXJEiocvpDQ",
  "key12": "5PWKBWFhqUYPtPgMBknBddcwm92zi4vwVZWXRuMLZuSf2RED5xJCKQErVpCep8xwTZsR6gsBTNZMSsmNCXTsZACU",
  "key13": "638a4pG2AqavJPSvVDeAA2vkeL3oeZ6wvHn5fhhcjjFf35zEeLYiX6xLv8RRpdey8H6mKhSbRzKCKcQnNhbm2KTZ",
  "key14": "2uPzQVnJuYavezj1YLukXKegXc3wtoajCBCec4uossBJCGm4dUWUZvBHjxtxMqYKEeknqREvXknMVVo5WLCuUcJX",
  "key15": "4uhzTsxGhVPt4Tghqz8jxXkbEU5QTqnXJaWfoX4nHEJxNambwtS6fYpcNTVUqu7brzLXFzgh4vLt4xqBP9P4r98Y",
  "key16": "56Ap9iAGutoPo5jwgCCb3AQpnXxvAz3YCrZEfzvCE198a1jx85N4kiZcFHx8vBScQXAYHUzetDmUticm5fEWsPty",
  "key17": "3Wr1LKcW4CH6kjKrLGwnkehTLLz3Zi6sNChwaG1yyp5wU7kh6USDyD1piZVzvrZqVVscgbiu3M83R5A2k5oL86Pb",
  "key18": "2oN9zW4gCPaP7hruoqQxDwYR7zoq5cttt7AYtW9EJVkvn43un49mCW1JvLkztWKx3z46YuXEvLXnS82Xir6tBTzq",
  "key19": "5MR2xv6dwoWFKuxoW9xwtyskPZ6rrhzTdHu8ETLuLaZuaaRRmqy2pAQbudV5HWtmKosYJXDTuZXeLbYkLbNdNp8t",
  "key20": "3di3c8VSuWRowExC1vjd6z4fq71NoUVdtFpBPt35ix9xSqADXZWVX23uFvXBBBhdhtiVv3t7SaUm2K8dDZHWeib3",
  "key21": "3L9Bc9RJXrqbk943VRzhdFbXvAs3auKYzJca8iRdVgAHkgqgeZmHHf2B6rp9jmjRTvUTDZWJMSAUpkZQhmeUQnwR",
  "key22": "AygxLYNAaqUzXpKphQNtmCrCuX9bhNVdEBZvtNqKxkuRYc8pEdDmuNuN5Tamtjtqn3e1HobWR2QvH3Rint9yNqP",
  "key23": "2C8JzaFPoUsRCwnfomxykHBecDeE7YqzT83goqky5xpAUaKHWA8Gj5P4ziTkNPYhEiLCb8ibLUngyBHi7yuMdVmZ",
  "key24": "3fZm6sEL7BUn3SxVAzawXxpDdqnUvXXcgn95jrjrjQ3SaxNYWfVowDowRs7qdkq6GBNuibf9mh6jNfTC887WGRfo",
  "key25": "3JwivmsFzPhxNBbsQ6bM8Qqvizebz1sqe52971QZTeYpe6oYdcCGVLSmNoGhhTqFRwLQJ8gXejriCPydhrmPoFHT",
  "key26": "jZroUFkGPJpwojwdoLSXsYgWG64Zn53jp2vu6PQCaPUjGvS2TJzxB2jFmA4SLr1k8BcjL2trSohhEUV5baBFdFW",
  "key27": "U4iApeAPQVSqn31KE9gKfCVN54UJE9B4P9xbaG6GUjygWygag4bAxnQZAP27XmM2m96xR5SLyXGS2j8uvCFPyv9",
  "key28": "PCFj4R52wt4Nrx2aPeM5AdpWu265XW81QagbmhbJCoj1rzTicSkSU86PEmjTD7Z6mdj12FnLpSAdoa7iS6iuXdD",
  "key29": "3Pmyt2toEDMnFD5DSCN67eF4eGjqFGo5uWejX9UQnnyKP476BYyZkbRgK2EfTqVN3ui8cStRKrzcYh6V7cn4bDQz",
  "key30": "4LMPrPQCy7ZRfVcVqXD79DuHcrSVMDyf94TVMPJY1xNep6Ab3qLNpnnMDD7yYmiBvxYKYcfRcog5rMNutVSiDLeT",
  "key31": "3NP2NLE8wctXVkTWvjUWadXru4GCwVGEp6sZCXCcUDRxT2qUUWyRtY3HkLXtAVZh9PBidDDpGfxiWgQF5J1sjX79",
  "key32": "61YuUehx5nx8tZsLoYXUH6ZF5xYC6WjKVyuH3jRRCYK81uANQD3TTRyEp1P6AhkKL58iwd7eL5oioicVLryw8mQZ",
  "key33": "2D6C1toSVHJnNWDYvdErcaan85tDSMcpBqCojDkrEMSe9vFY1Mv1s4Y4mrBa9JzERfwDzELBBpzyhBMLEHBWdvaC",
  "key34": "4En7f6n4x3b2LgQ3iBikUM7dwBcza5SMPPBgC3cSgx1U3jR1ZeGU3VPHi85RZTfpK3gVKSjoaofbcC6FwD5dHMhg",
  "key35": "2CeMFcW61s2opmS81n6k5bve361GrbKVLU2jovY9UWcuWypVumn381xzzbAPqcERUwzp72gXSMN9ZwuFdp84jgAU",
  "key36": "5YyP2CRrgGKCTgV1k9dciwmLwHtwTwp8q2HRW12GViyoXY9DdAQ4UP6MeaSfmo8fc8BxUdbzgaEM5A9aFWbBFdrq",
  "key37": "4KXJY9JbQQ2QSfeXyBm5o7rrfMrimET28CuWUNNYxh3xjkHHhKZNojxfonjpSGLrwVmAavjQe3NyqZKgiYhVvQZc",
  "key38": "5jeAM2rH8W4sczRbkNpyq2do8NyfpNntenF4t6rPA2ozaafhaGdN1smdCXRVEEi184KnqJS8Zfjftt3R9f5MhHGe",
  "key39": "3MmbiLTqKmUnP3BNPqDnn473M2nLMrErBVp3cRLSWcJQWyiYFnfem17nbUVQjhHDxbdySAWoJqVyyyS1XSkq48tW",
  "key40": "5RPFVgN8YbDVVE43t2DB4zKe5HZ7bX4LNHPjNc75aGMwhYXpBV3gPgSUHFKKfFrVzdvEcXcZZxtZU589cdVtrzfa",
  "key41": "BrnRRSFkJdqpBS3EwJKXHjcYv1aQviad8Jo9sxDHyEQgtN2cmyA43j3VaZwwYeW5iZAoqjJRYLtdNM2gJb3pnou",
  "key42": "66KVbFKrnmD7c8Aw1oK9EK5Y19kHwqFLWfSDGAD8NBQtxHhr9v8xx6YqtawAZjaksjxYLJtkXEbL1ZDsv74nnrTu"
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
