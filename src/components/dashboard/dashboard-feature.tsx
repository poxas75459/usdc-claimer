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
    "5GtktjB79Y9BKRZnrTpnhFbveaNMUNfX5pP8BXobpruirYjDenrmbi3ufTkK12xvqE3tNBPGRsndVZmmuKbEA8Ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwdqtEk41iKDNUErLnMfVGoi2jn6cBk2ApL2v5AMNf61K48R9bKuqMSZgBZMMWEuJoGaXDnoLvzcL982Y9m946f",
  "key1": "3wiHyifYnKkSMKYpVFU1d19LnN3KCPSZ5L7yjfdmALD47oiWGtpFVUMN2TtRDswpFshoqpvrvPzgmVZxhqD1BUHz",
  "key2": "3KDFUcgm3nQHCEqs51pUmS95i6toKH3ansd6oNifzbm4swev5aYc8MGgmcDVpQfNZr9ywh8M2ZuKegkocKaKNwhN",
  "key3": "4nHJwsgQD18n6Qmco8Y2sntjaLGnGvmZCGqY8CWzxAtmsUXpEnsPWA3j3paLn4discdTysLFjkVgoy8FfwtDBbLY",
  "key4": "4q3rAxGbXwJT8eYu1magsJCFDcUzfa5QZ883ZKDk2qBd4SoH7AKurZLDgufPKGvskZysjxvk2P6HbXjKr8uAVCpL",
  "key5": "4kng3TEUGbT5d5a3wsjd8mK5U6PmRJ3PTvDhFw7LfF5am97onEjupM13GaqrT2jsu4fvJKPzy9dyc6TKpwcyKRu1",
  "key6": "4mWgoWfb7snHJtjsu8C9zVrpXe2W6Xyr6KR3KiarcsC5Tt6Kfev16YoLdt6WenyxV7NZuHKL9Zaio28FokQmREU4",
  "key7": "2g9DYrN4UKy6RoYRADoNU8PcL8Lrx1GNR1AyBZY8WVw3jjounp1tu4q9XzkET6HF5FUg4DM7Hzgo7oEz3HPrMBXi",
  "key8": "4TdYnNjgw3oHGHkHBzedK6YdyCd8Cf6RNRoY3AfKB5kAmUg4He71QBpf1hWDY3sdnf5hAozt9j5mBcD3cAu7NNs8",
  "key9": "64SrKQwLpWB8frVK9e1YPJKN8u45mY2MdkZbg2433XXqyJsiqSUJq3G2NFeNrH54ZvAKPVtqobHx78F26ad7fAtQ",
  "key10": "hWzNPYV5sCWKbQsL6QrfmwxHHh6pCo7C63yJ6BZa793tNt1nxWvHgxvnbmuvhKoC8rAKz9R5giPkS8A2zZgYZPY",
  "key11": "5FrQfjBw7EsespTy5t31M4dyb9TLG3KhRPsJ3J17qiSwJtJLF8dVApeuzYdBn3wqEfQaB27tPeiCJ6PJEWdk9jwu",
  "key12": "3tJ6xqhBoq2h68Lnt61EN6Yds6ugfB76YT5Z2feaHJHzCuf2thbEeEf9Cp3i2gmu2igP38BRvKLg6k1vSq56GrAJ",
  "key13": "JD5fT2EMZjzR7A8fUbuMwohNVUVYnjByHWynE27uQ6nrLrzHCcm5HsmMKyZgx6dQ1kXAD4cZHXqgVfwKWfJ9qWL",
  "key14": "638G9Tdr37zzmXnKvDQJZwVKS12GNJyuGCjwRhjqBeDzapspBzf7WDqdoGv6z8j5KpXnz45R3t8NDVJU8kc9Fcw8",
  "key15": "3TCLhpRX12aWWgoGtatPd76V2oe8cUSaDAR1X412eHLqF4yETsW9KMPYUAk351RoduGzRDJmUw7Ng93thsgbDBVs",
  "key16": "3X1iSJUruvj6sHL9ArXyKv5Cos6j2FQxHrC3fNfGFsNAKqnLJQuHjbGE9tUcdubzRVpPJj6aYtZZQeuXtfHVV5NJ",
  "key17": "49wBrfEbgnHaaqYDFVH9Whacs9F9HdDiedsJJxykZASpFYvPjgguTuVfKGggZvgmkmKj4Xw2of5TtBXC2A6BCC36",
  "key18": "2SBu6dC77TwAtuU7iQHLg46tcE69KEUnV2FjyvTBXf5mxxEzZfXsR4QgH6dAxAnes2ZgdUg7bDizDF4EATr9yf5Q",
  "key19": "BWoA5Tpd3421ZSL2xrMvwQ28zzt1ZuzaJdhtUP5CR1x1yh72yfAR6uquee9igyvyd2TJq4p1eGBjzexqkuWQhbs",
  "key20": "67PduHihp3J6Tuiaxrmod87D3fTUFwgonvGeKYyks8iQGbQNpGYue8MKsxiuEW1wtf77mzpSGGgnY7efFZ9edQkS",
  "key21": "43t4g74BKmW7msN5wmU71Zow4svs75ZmQPRx3YsYArsDisKD74efBA8gwLknx3fTZaqMqPWbeWRh5vckJtfqJphh",
  "key22": "59BTXbSRnuDEWUrc4gJha3LZcpbUv2Y3pvDGQmb7H5SW1LJ3AErNE6rDts9bXQawCmWi1AyKoEHufoiygKqxCMhS",
  "key23": "5q2SJYJAEUA22Ux2FRscrX88xByA4oY1oscvvn71Rhv8AFSTu2VvEXWdZNUmsdBa7TgUKRfeCPqPDvZ7n5Dr2bJ6",
  "key24": "2TXDYZ16nGiYpVTQak9zdpSJ6qyeGaHaTxprE5c5eL2UgoB5rr8F657voNT6ZArzVYRN8YCGC9VGJrNmfpd8PZej",
  "key25": "5FFw2SaG2j6RiDanKntLUcK1mp8eBM8tgHUV4AG8aaQ1tuAW6MhgsaiBRRkv9gyNLutoPFWMNPMABdP3rTiVVBLJ",
  "key26": "5qChXKbqoqvJyYdH7Nyranr9KcSKxTnEni9G5QJiqEQ78Afz2SWPzTJAdE29PwhbEvWdDrSpbotrRhTL6YU1Q7Pu",
  "key27": "3SoiJz6PppMTjov66k9HiA6vuz1P9i3MqcJmfsrRCp2vfhdaV6iwxpEnzpKa3DbG1RNtUCe3W3rb3zzom73oQTMS",
  "key28": "5dhiH5qk6XkMfangD8pRY7NRh2RQraqPGMjsiLhnvPbPndWgxpTt3UM6DdUeLEgqowrtS113TXdaZCiQ2VUUEQAX",
  "key29": "5RjQ7zWj7mDFPJK4osHo7SKDbZmYPQUpfdue9mA22ZUhVn5FcE3b8Kqk22E9nR4GoS29dtKJVoLFBGgvCUBgs9QY",
  "key30": "5StpH1oLrGqvaJXo97uVgVAutRsJp1oe645WR4vb5uKTMhjXqMhvYdpvQE3EEpkoGDTJRDuT824xWPfzdk6urmp8",
  "key31": "3CV1nin9FVUaN3aGQKPYSV8rjFv8e338CCc4ZzsZyNmmFh2JQRD8q77VngxaqgNwiYG9UtXteWL9Z9WdFohz2sMj",
  "key32": "5FWTFSzKfcxJktxYcpqeaR2WjgvYkQ4LdD3cywzEVQ5V4TqfwzxNMLgiKM5pukqD1uLwDvXTsdwHCpBtWddrKR1p",
  "key33": "3uq3SAHCELznot9xF4yBrUXYZe4oYeYzdMFKL7HiC16NZeqtJNohwKcBVXJctQCNPGxvYkLEUVvcpSuFeEhWdDCU",
  "key34": "5pWgxbs1MB1z9cQep5mk4QVUTzRe8ciMaxB1UxeLMbUsw78XANi9n9TjqNR3G61827qkvybPdDJ7oaGn5KeChSeQ",
  "key35": "ofHGm43DwbZkSAguHfrxz9VQcfs4fVJsJngCcK7b5dEJW3CZF89AY5yTii7ZVj2d1Yie1rfwcKNxKFCj5qxJm1w",
  "key36": "3as8hEcvCBjXypffp4YRnAWJ4XWFjDb62ZuAfzHYrFPc4n6fdBdBtsSsQ63MBHJTRJMjjLa2B9agvVWFmimtvEbr",
  "key37": "44BtJtRCU2zuq23mgRi2ZhoXXCfiwck5BPp7JktUK7cy8UjPtzDJE2V7CwhvfNHPzRZnPt4jsoNsNRdfDxt9CaRS",
  "key38": "5rQbBsbWTkZESeTNCVj4T3xo3xDdCHo6AMbRMBxEZr3yZ9HfjHJpYuJhQ4ryQrJYr8Bz7KF3cMA7LKaHbQWyRD8g"
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
