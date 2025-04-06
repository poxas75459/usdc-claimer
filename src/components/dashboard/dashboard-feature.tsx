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
    "66nUxaZYxeHigoNidZ1M3rMU9pmczhDUrMyzZTkdgwiBgCtgSkETDj3uG9g8NPpmkpNGfygYg4VvYs3fh652YMvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9ASxttRVCX6yy4rBjBDZ9zcPQUXjCaacD8Nt4ghJGjuy5mmvvh5KyzEXikUx8Z1h4VHkn3MJ8CRrLbCpGiaapr",
  "key1": "3Zk1R1e7airTYiCjk5bdLawdnsX8KwttUxuaVx6L83bhF9guv9LUr3H9qbPt31gGCynWscYfAzBTu7zeguKZnJKV",
  "key2": "5uT84ggSDLxbE3Bsvzw96c7uBv1sg2VRnLcuCaHcHvf4WYN1Z9iEm5aimUD2Hg5aoPFYpxnrA4oBQtbWugdgewLF",
  "key3": "52awtxUeukPKfZUKLxK4uXz2ge3LQddTbsQr5knRzANrP7WnAE9aYAS8VkUg6tgFtcRNKMsy53yA7MVjc4qjZyao",
  "key4": "65S86BRXqiRQMqpxhmYuz21vt2Q4Fniig67QjPSgkXFPcDLWgkt4wBx8QAdkdpq1CSBkfWFYDE3Fej2wgn4QKRxj",
  "key5": "4FHTRAeHofHivCVP1rc1Fbumy176NC9Dy6dcEDZXZiEeNrhg2uobU7R9c4r6BPTpjZudExvGRSHEFZEDYUanbFzL",
  "key6": "37bpo1WHGFE6SXSmm8X9mcHxEzu8MZWASkmE9zXfor2dffuyGYnB8VY6Z2tEAFASWpCgyNJrd6y1Q5pEEEgSbCVN",
  "key7": "5ehFpnJ4ZzdWwUp7PP1oi1gCMxdSYDhPQNFp4LuhM9QCRME8P8P5nVfUMQuW4q7UBp4cHZPvMJZDbxduM4ysCzkm",
  "key8": "59Af99E3HRbGaecT7JvRG1RtAS6N7JPrBvwRkp7oS7XAzzzx56uFnsroVxVcVnn9pnAhrwqRLTuXcZJ32JBfN5Dn",
  "key9": "4396AoSpqixzNHNNgQeorpLr3dY63UpqFPfQK7vsy2R6sFDvrzX5rrCvF6aazSjbTh1ZPNsAH4USoMC6uMvf3FJw",
  "key10": "2HBDgJHaYMpj4cdZofV3og3xhmWVZmEzjdvMuHQ6Tvf1ciWRadENhpta2rNHenpWHz2LeFFznicYubkEkBwhrxEF",
  "key11": "64imiwemocCyc1SNpjCWwmtVvn6KsDXHJoDqJ6Zjk7vC8LSGGwPC43eiY46p6Qi5aAH1NW7MrBJ3MjGDSHr1ierb",
  "key12": "369QNQJG33poUuuGfjhsoE7i5ybSaUcj4LyiKEUa4snKwqFEZKWVg9Buzef3rbDCQb21o7h2rSNUzCrSZYtPH17o",
  "key13": "3JZ7wwgKHhH6FBgcUvdrZL2GiPV8eRK3H8UQQiqx8ErYtUfs71xamgvUWkKC7Yf1v3UoCyGjQwZzKKHAHVEHfc8h",
  "key14": "3KR723KYBBaW4g55fE391RjhFAYEdLRsMgco3YjChVmNBAkLtv6HGj9CYsDm7EDh1Az2KKwb8pZXUrng8tyfe7go",
  "key15": "5cHXSeTPkiUGiyeto4C3KCwQSZD2CKgd9Tpo9XyrfW9LDKXwYg25TzRChKj5r4LeBgp9nzc7bUbtmbTznbc1Dy34",
  "key16": "4K1cZmq1B5wabqxEb5Arrg1FNtYyZ9YXTAfLBgZM3mqkztigyULCj96xB7mNZMjnvTXTn6eBtBNuqhEM5xxbf15i",
  "key17": "3wvkBnwvZY7J7XxpY9LAawhP8eEfPfLeL1QEeJ6Z4SZ4hCeW7fyGGXKht6rDhFfC3W65MFcVc7FNwSxpWnNyNygF",
  "key18": "4uK2ZdmvrMk47Y66yiXDj1M9tVfKzme7yZCCQqZ8zztB7egM2XcMHn24dmZnL7cudhJ3CbuQuXcHGpeKReDDZ81P",
  "key19": "4CVSG6DpaFZ4tMQTpRbz7AHGFjxWM6vEYGGDuCNoHrruRTDdxNcFhHxvCyHw43fBb6HwQyUkJrNqu6PsvfUtxBPF",
  "key20": "q4YNFgdU4jG654yXs5KZtLLxwicLA93ZFKvZfUHQTQhdqjbRZW3uL3ks8irh9GAJUqiTYxMFfK49gKwQLcV1BzP",
  "key21": "4mYJoNtjG1XK4GbHqN7wkWA6x46BBN3ruRBX4Bw1cEPiUhLGdh8jFZCZ9fKKSphh3fUdV15fPnYCcHeMND2oVMZV",
  "key22": "4bmycyaXDP5D5v6MYcwpR11yvFLhQrDP8BvfdkjXWRBwwxHEQkM1o9NxyQjTbvC6NnMjqzQVWskKqUYH7iusSD3j",
  "key23": "4cqmPRRfj7j2YBBcftNsvU7agJBLnXCShVmqDxpbz3FqdfqKuENarmxsLVqYiiYfLCoDXkMVh7qbFTHYoJtYZJ5g",
  "key24": "366thRbKvGD1MKQcGTMonUbiRRiNt5hqfghJM1GDTDC2gux3yod6tciw6XaBjMXRf2qEi1brMZTwtx1cGvpjzuts",
  "key25": "4yA9Wjo6yr4ccTdSgrruNMxhAQzHCcWVBeyZoZp65iGz4dFJw5oo4JahkpZ9Yd9UN8Y4a7ap2hSSXFsG7Kyu5L67",
  "key26": "5AZftmAVR1eGZpErNHP317WhWTpzh6SdQ4PoW9LwEanq2vhfSXxzLC4huq35QSCkqvqnweXXF5M1LgQYPGtcoavN",
  "key27": "CKbkiy2mVE8PCMXmvWuPYqFiDGHkCYQX4xMbVxXZLnabeSVvppWFLyFFj7GrhMYXUsLeSvX5WxF157BDcWDdkS9",
  "key28": "vi7TDctqbe577H4G5jrJ73ZccP6hUa1MHTwzmU7qB9gXCft6b2daCEnMD7F1hgjmyRWjX3LWjG6i9VnpEduo8W7",
  "key29": "4GBXnD96Rt2Nq7YFU9X5pt84ki5ReRWb9PY5ughEAApZCm9bkCkgCYQr9Q7CyrhYnufYsKAvqiU33n7eJQNg56z6",
  "key30": "2NzuivksRqrDwLw8ZiPxzybMhsC1SVrUUTNjSQnspyDgc2sKTRQcS9t4QiAHHxsLFXGWmYZukuUQjrAz9ebgt23X",
  "key31": "E99vtgkvGTb6hm49QC2S9uC4hWaRXCVyDD36EtzDWvJavWFwDJaiiL2kUM8oKKunn7dTtV8enjrSFtoggnKmfSg",
  "key32": "2m7XNFjckdwyULoeJgEtXNTSJkjHHSVHDoHUWesk9LFPAMHgGGy5MC76pSrLzXxQVbCx1zuwHJcSiH8GEM6ALBeQ",
  "key33": "NmKcFHFxvbcwa92CQ2mqim3AgAxCfjzH4VQULeJeMp8NJsg1AM3js4gPuzj8QanpnZ6rgsyZf7CHW6PnvcsGii3",
  "key34": "5PhwTSeWrPsj41wV823d8W7canJeqV3nJJ6UG7yBmmBVjBMZL98oDqN3APG9MrYsBjzmprKeKJazYAgdxoxMF2sN",
  "key35": "vxwpXR8bF7jjr8Fj3RctFzDNe4RzjZYSyyM1fQ6U3ctZ1B2pjzkTZ2sx1JbhaSjKRS4qvbzNewz54g3Z1TMRRvX",
  "key36": "3Syd91URgmswC7HE7kHGviLKjTFZNwv2e9aTUHFzcQLtiBcdqgyjh5evqM3qmkqN76twX8v1ris9exxPm2rbjKqd",
  "key37": "yMekMMmnyCVQUEEJNjXucWLjVC2Wyyz9xsRpb3Mu3JfWuHFSBrYWGrPZboFEDCpLDruRZL3qUCffep3GNb56Hb4",
  "key38": "21zBJfoJHrfTHBKgx2mbbZkg32Xica9gy7g3fVuWQpNjhHp7P8YY8ZDJ28tuTub1XqJ51b5Xp5ba8PhnsPhSHQW5",
  "key39": "2Umm2jmWg5DkinyEgDvyCGEmnM7oSKRhUrfBFKmc6YmDrQDuGqfv6491Shgvw3MU4xT3nU4MGk1JYNmm7gZPBcKF",
  "key40": "usZBHRoBhNqmUi6wNfVbzDXfFdzPeQSdPTL2ayKC477HSgoztFaB7VBizoNdgfDVDreH2K9oBHzuABUfMUeCpaT",
  "key41": "WEsKxpa9AUYwMccwKpegpdRwwx3a282ER1KGPzEESL1BZh7Wrhwg7LyZZ4Zt6aEJZ6iSf4K7joHbWC5Y1J2M8ET",
  "key42": "4zTMYCGogtfMfxM3qGkEXg7s6JBBaCP4nyEpHaHtLSs5HjtztpnzCa7XPPjDPuUX51DmeQPaKtANS7WbYARKznzf",
  "key43": "25nkz4ic6ekpQ4dyfDAH9Mq3HKKYAfrRatGQMpcuqP4XeamFsvmsqQu6q5pujoSjRGSkLcGSL1NuEAUTrxLtEV3i",
  "key44": "3MWTzgbLmAowCUJ3hB6LvKnm2TgCRRzQX8MRNqhVs7xZpDPESgrrBpRqieRKVuQ8ATVVoahBU1dqaxM66cHjDQjD",
  "key45": "4K1E4ZCVpsZG7b64WqFE3z3cJ2XgLu1HVHo9A9e1rdxAhmbsCGpJPqB2N7tahdoFCPVQJmmWf8Lp4M5VGtkXRPNj"
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
