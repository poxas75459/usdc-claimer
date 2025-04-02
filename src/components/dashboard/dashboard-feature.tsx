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
    "5xypDqtTukwGSY4R5M8eDCL5vXFEwjV1ZrKuNDFejAWvVFkidJrhqRw9RRbcPMkU9WFBdEytxLaMDNirJyTMZs7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w5T3ctQ2VhSnWt2fvD5ek2uP7tnBjAZNbQSqquAroBfvcK5327kapwVjmHHkMQFwz4bD9n1YWuYc7foZL9qhLMT",
  "key1": "5bbNURauvMXqxZG1cWHQ2mLXqSuoMynEdmT38rCSmuz2yrgq6BimcxYi4N98KMLi6cdXTL5btjD3Xw1fC4Sc5psD",
  "key2": "5FnBkRHM4CWMt4qAQ3fPP8GwjM3LqBsndDn1Xuc8V8dGXgw7cgXc4GxvtzHMWyu1KDdoRX4AWf9Lf6VgNMeADMDj",
  "key3": "2o2fej8WoufJq2fca55s6iies98qpn9ef9Z2UaCnQquXoEg9844UDkS816M7XCEYm2PCwt2tQD3jujjiaLxeMYkY",
  "key4": "NsCjCcUHa6xv3taUrHTMFum5PNNqb972krjUU47NyR6dBTxA5pYaEoSkRhGftU6kg4xktQtFfvfBmYoFjQZognh",
  "key5": "3QNJjncJiJkCorM3CTHee7g1Zyg3M8T83mQ4QvpLX8PYxd3WuURZVFXMxEVFDScSTaNjEs5rXyofo3rJLbPVzXeD",
  "key6": "3D9FzSy8DUprLfpVEYksCx1mKNjbvUaxmYD13bt5wQaWtJihgjXWTGn7ihMpxzcRjZQxJSAKZLJNZG3bUXfDDZRM",
  "key7": "4oedwZzTQbKJMMHQAoxM4Q4jmr21Ai44f9hG8FTaX7J2KJf9nCdGVqEyi9mnhwrSvn9z1Ks4DbCR8woBuF5qxNvv",
  "key8": "4jirVnVrZDpcDUppySBTwdx3HAyGrbF1MZ27HHjhSRmvLn2MhWNme1tAqVvc33wJo4u3p2ud52hgZ9otQjJxQVMv",
  "key9": "2oDB6T3mkr7Dy43659mTf4yfagimsayzH3K7dbwciNsWFBWhxLq8EAaQYt1H6KZwunTf2cf54fmfMDFRUVPwUSNS",
  "key10": "5rioMPadmHEQspd14M9YPHp1urLuJMuQ6ugUgfW8WT7mtbYzNqmVqEj3q4mr7nYZYvuvuvwDbzHqVZ9sHqF1er9x",
  "key11": "4i3KkyRDBPktzu1L9Kv3AwzwVhTDYWh1xPYESWuXNjRf8sKKBZJzgMW1hA23wLvRR8JXZv51YZ1oQCCTYtmdYoDV",
  "key12": "4w9uZYEniT1Rb6EWgC2j2rkLzFgEW4LRRuXJLx1Qa2WeRHju7jUKaEFqUU1mYnPxTmqUp7xTBTpFbREknyHLbtGJ",
  "key13": "53u3P3uatf2UbynFPpw8snWh4dYoGQW7NaZ7uRtAyzCXWYxoxwJn4QRe9a9GqYzD3fzP9eLnh6HFjdmuquiNMBxd",
  "key14": "4HQ7X7XmFjypw9mo1iRKvwZxX5djrRsPauNdUh2ekPPrF3k3GVDBLqGwim4Sx8hNT3VKGizmuU1yeSEvhFfp7XMP",
  "key15": "3S5Fvg6xDc4T5TwWSqQimBMD4CfKoqQ1d9s8a3iz5KqHxWCtZixzqcdKn9YjfEopSrUqEswWTywDZTtx8QzyELde",
  "key16": "3TWkLsAPEswcV6QdCZkowJVpkaWbU9p3MUSErAwfq7TdNA3t4ixopUVo26Uk5bwJBaR41x7KX7aSXPzZ3LdFkct",
  "key17": "17uychZBBuNUBLGMzyE9LBDjV2FQCcu7ypPjrtw45AybA4w132zAVJy3HgZwmtDgM2BWxrY89Jp3uKtcnKdgdPp",
  "key18": "4vEbLCRJrf41LmVnaSwghNJWL1A6xXDLdHZdsXzupu537MHoC5ggv4RR51WVqhNnhdMgibPUvAgDGunmhm2N6ZMc",
  "key19": "5GHcenzp1JNTMT17kVJrHYfUNRYBdNmsThNi1PJHtDEbFY6gvA1frvHUG16h9nn2h4HAjgVmwXTNEcUVEWyvSq7H",
  "key20": "3sib2AZv6Lm6wbZzfPM82j6n7HESncSRftcdNv3fVgimrGVbNsqWQFTozXMXto45vP4stamRbGwMT2gHtHzybeSi",
  "key21": "4KuyQr6xpVV6a6yJKvXoMbVCf6z6MMvAZAU3vV3fdJX6rDWcSdCFv4kczfBEpCArFkzXy4peB4o2kksSd7cPBHEz",
  "key22": "4qwmkh6aBQfrcA5cibRyyPvDwkZNRUKr7xuhuMPtMYv7ikDT3kgtJKRmSQkhNHHqFMJ9cBsJuiWGGLSMkFfDxRrn",
  "key23": "5t2PCdf3Pju59XUwpi95rnT2sy3JtyJAWepcbjU6PywUAehptJixWEQyE7tRbpvjAzPUu7HhvMWz2EvWoVwvb1r6",
  "key24": "4J5C1L1RLmavGfFs7rWbpJXPbSiYmX9qwtZYH78sxHEnmFmDa4tEHuouPWZmRqCPtKApNCWqxSfUuZtWzitddYDa",
  "key25": "Rx6EmuEPKJ1zUkZdzwXdMy4HyKAU4sQVs8QizkSQTSia2g1Awgwmyyc3bbU7UXwjpMgm656mnaYimJiz852sw5B",
  "key26": "3p8wjH4g5f1vg1aD392dDRuEUZByuCwNTQPkwLZ5Pb3zkHitX4V6XRnhdXj8rZRuS4xdzR7kt5kjhp5hirfNFZEX",
  "key27": "3hHUZxZb1mj2YAdG5FtEUVukvxMff4MYqQWN8YLtNejpUKSzC4KQ7sMHw161eBqab8Tmm4JfvmSj8y8NMXvfz64n",
  "key28": "5tQ8g5e2KBnnmSEgiUKfm9cFbMyaUWLwGgoW9TuTnwRRVa8ZZ2a8cVKzVMixgozjWREDeewneucMo4HYAmkcSwAs",
  "key29": "3cQYvjo6VCBmT1ZsojUi5EcpvsAZptU9tqf8iMvDJjTghWgezFShg64ojJ8W7C2ZUUYXHZYSQiXrvxkgYLBKRbMW",
  "key30": "447sLSQ6nkzkKua39AptUq9za1yw9V5oSA1qUk4fQuG6AFxJ1RcCymqSbp2Ttjd35wuTqFfYPwCWivbT4X3xW4uT",
  "key31": "2PT4akk7j6Ucc4KC2ACcMwEQtw5Wp8LpzPHUXgyrY8s7EqSrMEC6BEd4RwwPtivDxVSfVgEBe6aKsnUCMFjwwTnV",
  "key32": "WTtwGcEtjHitwv97DKK3Gv9bB1xKkVkxRBMNWi3KQBs7mo1Dy4tD9AC2W3imtzZgNhDy4RTmwKQoFXZNeAFq2cY",
  "key33": "4LVGotKuXaQZMmYUbYujRVPmktYxRoCHuj8geiNcL6mC2i3ewvCsLzX5Bepws47nkXMPa12iBks4BRrej9z8P9oh",
  "key34": "3U3jXoWacb328hG4ky3qPwRkvtaa7LEb1pqoRZtLPMB3n1NkcNBT6HGVnrfy6KfCLu3yYo9nChM8t3CY5Ekb8XRq",
  "key35": "5nN7zsZDHgRY4US4fFMoQGWEoKDJt888FBAUuGdjmtepm1XuLCH7Gc7Tgt9ngWbXyQLrv6RSBcgEvZvGSP6pddDv",
  "key36": "HT8Nr6BC3CbTqYTHughDvYypwuKzemNDvv9E1pYnxuehkZtRZDh5FSv6bDyVTNaHPEXnGm7H9rPYrmSUHezD9H2",
  "key37": "22rK6NrAbs8u8k9QutpNZxYrNq3VY45yeXm15WCg7zVPEe4wUZsmhYUhenovatvx3jNc1i9UausMLRVekz6DvPTL",
  "key38": "3TQ9wwMRWLsQCmdk7LXdTMx2LVioxa9Z1cmV7WTMsxoJYnKF8PpR4zUUmW65GjgDYgupPcFb1L4kupBGM5ZBU8J1",
  "key39": "4EwfBzbfpqbpEzHYU169aMRfL49L8nF9P8TwUqTPW2m4U9LyDTod5H43LRT9hFLbMnqbpJa46EJ832nBEQ1475ba",
  "key40": "4fEvSMUqA3KoPY5SzgNwH8m5BcYpTN38AvbpsEsfeJe6pdhqQXBhozEe2gmctp28ntMirxbLp3AZLJtPnmd1Y5jT",
  "key41": "3wrhJBtBEyGUcqjuumKSkbuuE3RE7ehUEcSFfTmDSRz1s7WYBxWDrzwdi1dvt3hdjcAsxeP59qSbZCL5qy6rbvSV",
  "key42": "3rx8VZdL9kFwTRFPgwchB3Q77PHatYGvJDsCpnHhQ1XdJtA8m2aQPtkz31xcy1HbWmTrePCHk1RBFBi3jmpzRMzU"
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
