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
    "5oBA8z1bDTdbsKvsj94KCPLrMuRhqeFpL4VyQASnW1PrVst1NGnxmsrJGH21oLS2dauKut7FBRuM1DDGLffB8rDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5kmqRYGPm1gnCMV3nUkhdv3UXgDQWah225shdWHfwtsvDRBcFTbobhc6cYbiBHdjwcxvuZbTZ6VgZjuGojtQRe",
  "key1": "4PTg2xho82tph4o3yCV753mKnio8YBj3gnh6MmVCKRfy6a5ru8x3tny2eaSYcu5x5YkzzLtqBXdVnTiKChHugbtV",
  "key2": "2wUUZrt7wMXM1Z3mwQAFy321W2zYUFjmqfgbXpjsH6qQPpD8i6C15F9yxEgWV3214tmXx7YaVLwAKHcnVGoaGZmr",
  "key3": "2o6BsaKmB1NCxTsbTJQdrGQnzRXnBEtaunUHGdEuFSTm1M7GeggdU2JnUU35opyUQnL1jRX7EtyckPdUWHyNbekF",
  "key4": "2CSmFp4cVtjfZ3buxGgQGTy8RQVibHSKEmF5aCtXrybZ33PychhxA9iqSvZERTZCtg5Z3tdHJ82N95gk3GWAEJhL",
  "key5": "5CqVVzKUU2GRXjbREvBiVRsKcU6p3VBhicM58hS6Yu8eVPzq7goZXsCfPWdoBuvjvuocNwKEhtBREk31s6FpLrUg",
  "key6": "SrqJM7GKsYh7ky4KqTMzppKtGKzThSgPn22xYtxyMnoVZm7tHzdXvmbWPqP1bryysjvq6YJUY4JPZfY4pKp1NG1",
  "key7": "wKUp4XcRwV3vnRbcoKcSmuS2wY6Hoigcnmcak9etbZqe2DGYWEpophF3UZtPJ9NjvTxNR2YikAzGBpvAknpCFxe",
  "key8": "4CGLgZDv4i9vQg5yFsi2mdSh1D2Eaw1zcxXExSWPyJqUwU27Mb41Lbv2NM1suKjG4d8RiT8Qfh4wpLYfoP2E9Up",
  "key9": "3cNmzopj12SXsvMKVMped1uKjWcLrbBvo3ip8KVvM68ujKJrFfGmPVpjSQago3tUN1oHJJUoP8PRWWRcxcPEbMjB",
  "key10": "YKYCXzkVnqY5NgGbHdcYYRJTAmd2jeUf6JKDJLUA9w398paAJJpUvvWWM9vXZv84J4QdSF92RjFfApPjkeL8eLo",
  "key11": "5mgnTXRb3z5Q3HgGwbJutNZTzQ7QJ1ENzCVXjivRi9qU5KjrosWMK2HPM53k8ts7F2twwa8SAfF5ojiq9nYNQ4eM",
  "key12": "5pVWv1u69uZJBHczeSGQo7V4MnmqMtqtUmw2Ek6AxMsQYNGrzuykpmAM3DRTN6EgQkw92AWUCp3XhzWTjzwvL19m",
  "key13": "5TvnUFhFVYBf5EMky4kAekM42UdCrbtAsNc6SsziFEJdTR9kkyM7q3P5p2sdq4ZNciNsVjjABVKXSiG3eFcq56qW",
  "key14": "pfQgXZntTfmEPkD9RTLH8Zqc9BvHU4JFioivaeBAcAUGex2yCJKy5H1oFg352Ecw58KKnTRzmPWx7KKnEdWx6yW",
  "key15": "4onQsCfqTjB96LSd47zNAAi3JPkX3EGhg4Ywt1vCQaTkES3tddkUkB4yJW5gnsQZkQsaubBxsXVPJjAwpYuiB2bs",
  "key16": "63WxEiXMGfVhgMzyASy8DUNZwjRqeN4yzxa4kmsWWnkeD35Cauo7nQBAv5cmx1QXTX1Gd3dA7HaJB69Q2UZ4yXSY",
  "key17": "3aRmc3BSwY92j9KYqLpnaV2UMuG8kEaTVBvSE9Ftdf4sQParU2yaoVrgBxTKwDZHSoJS12M5LRTkw4drei7SA99y",
  "key18": "64wgeawsZ5odmbE3Qe6fvCHNHFFyWA5dgnU5cJWdAyKbr1xewbdigDqmeQTRqnzCUtN3VVtgkJ8MHrhR44iGiwBV",
  "key19": "2Z6BLey3VDonWyrCGXzHyxA381WEkyPfE1DDsNTcUTyns4GHWrABKcesXXDxu5NUu5FFMq9eSdQYpt7ZJKgFhfS6",
  "key20": "4V4uWvezwu8YCyJTwB3NEfein6NXFsmswXLKpz6o8BUyDvxZLaKBkjwZVBmfYw51uLGbasLJd9RMLGBD7u2eVvkn",
  "key21": "KTKKb4RPzMzFNZAS74tRkYoZ6ZjKgF1etKkQDhvFbFjkfjs2XLbUUCYV6Ymy1AAq9JEeR79FLVoHx1ixKjUnPYX",
  "key22": "Nx1kz6QCXwqEbjPHLHJLqsj8UdZ5UyXos2xXkdtHV2vjMZjSzjyNZSKFA7bJMQ4JF1h4YE1nu44oPTgFK9KBFAz",
  "key23": "4YsPAHmHnBFPcjrybaGxJCzBxwBptG4qytQFchUM4UPzKe8X8aCc61bWLbm285oeWUCuBWboGrNz6M4gQRwcWUr5",
  "key24": "3vwJUHXJYHNJjq5XszzUrABkugo3TevR9Fjy1N4BtdsXF297uHRHLGLK8nJV1TFgtqvPzvAfayusiN23gFitcviz",
  "key25": "4tZyMVh2y4TBbsozrWD8a1QYf54exfTxetr1sgeVSC8Cfoyu5oY9wPi2WzdPVQaJkw61iGXwhPp4QYpUnYuutECq",
  "key26": "53H4H1WSXjFWzYouUnQCDHhUWJU1F3aGc9Wro82fKfhvmcUWc7iJn4BRJQ68YThz9ovcqUSAkRnP9fQ3xxfRUp1p",
  "key27": "22g2ZLJanhEnapHnuH6RB9pef2nxbLmskoqKqWyUeZexmAJc9Yws1v7unxgngHpEvKCbiL2sEZRXYFTKpk6FrtEh",
  "key28": "35eqmJEVJoPPt2CXJdH3jeMM4wnPsWkwGUGna1Y3aKybwNw45qZVMxTqiYCpQcVJh2TSDCTWsfCw6dZC1sfWADXY",
  "key29": "5wBEcNnLDnGSRk4gX2U4WnkAkih4LQ1AM5nQEqFmH9wy5rEHSvFVppYDtP7siNrCrT6W2uDs8t2Qdyi2DhZE5VS4",
  "key30": "4Y3Hytf9ffFGSCSVFAd5zDUckyzz1h6SNM384dGU6efyfYEZoouXzAGeQ9a4BHBFdkUBzw1i92eEafwEg5z8o6PM",
  "key31": "4jo7u16K7BoRy8obQnWiXdkJimDUyGEpDSehUudV5tLNTSGTLxBcf9ayAez22g8s5iEmYixQL3tD6rwHrchAxU7H",
  "key32": "2iKx1ZkWgejiKfsJAWFaB5iAHY1KfdfiGYcB2ZEPYk23rHQVCpp2Fr76dJNc6PTqiB2h3Xh93mnZEDqeyDwzTjch",
  "key33": "39GpQfdZwVwheNKMnhZoGqrZGATxY8d33ikFccfptdV959qv2F3hhg1A3JuMz443sKYLd4DT455ArXKADPYAHcSf",
  "key34": "5hRXKWafQhqw2XLszJoAptguA1LNjyGq41zGSjEGLVkWuzRqEAnsSfyabPf4CetELSujs3JYSobyp37hfJT21u61",
  "key35": "fgRHbRGpUxaVN2gLyXDyccE6Gxk2esH4E6nrhGLy6NL8VLLLmpZ5NMRxua2oZSeECLDzZjQRimoc3puz5nAHeoM",
  "key36": "4SyUfNSiHeMUJiciDgnSyRhBLNjRiFY3La6fPDLCUBpZzso5JqKnsAtRDuA71kbugYVxhs8bD6XBW9us4rGnsKqe",
  "key37": "4c1Ryt99DP5x9fTzcmRybkoNL6bMgF8dUWhMng2hvnhZYxk24xX9JAvVbX3aDf2i4YSsMDN1zk3rGWc17Mxfz5SQ",
  "key38": "5vRJRTATTzuVNVCPigjMouEYkQZhKpzyuXGdeTq2eW3NiBv6E4irfCwVNHA3Zhx7aurwKD6fLcXss9Jt6Z3WV9PS",
  "key39": "2KTC7eYhjjT8odgCXcpFBB2NUW8PAGrvsWyewPGgMac8DM1jX8FWkuQyAaBZ2zQ8PSmYB2Gkk3h1CDV3Gss6Mx7s",
  "key40": "7MNHKYCy2HSo33Tf74BjWsayqJSgyqSzzusK2wcrZhsc4cHDNibigxWKhUr7VdzEeD7U5wWzRXQ9Bi19nFeKH1T",
  "key41": "RrrqGPKRNrazVVa9GYHjB7wQ8UAezUcwqkDZwrCcjzkcAU9Da1cxXtn39Chci5VfoUvwHV1UR6porHNqsV8EiAM"
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
