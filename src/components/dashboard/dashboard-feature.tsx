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
    "2R3i9t5dnBNdaxMAwpHfH6jb8UmZGNr3xk4aC6RAsza27Z1hREzyxXcr9QCjim3uMFW4w1Jge5viRuYU6zE6p5MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XjrLuJmmSRypS1hxZ5GWxZp8YUgM9rKLAXzyY92pZUdCi5WaTANPa89i9wt2Y9teT2TpmNoyJfCjGNt8FgJMWWD",
  "key1": "5HA2V2ifqqcHbZQUX8iwmH7Ru2J2wXDUWjJ9ATJogFJCe6WbfDKeomGtHcErR872WMbg86nMEJuBN8uYfqGNRbru",
  "key2": "63DxmEuptrnWeJYQ91PMzVXRmC5oKBiz1UUaR5vk46XyHmgHrowLcp4qANvao1piMYnELBEJ4RHoysoHMfB5sfik",
  "key3": "QKcmiaAjRdXatQd2acUZd2T1DAU3Ys72PFnvvQxrdNxsrCZQpbt2uSvuUdWdYY1wU37d9w81CE5zoPzbzzBpbPS",
  "key4": "24jji67F7drfVdgwHAHqrHKSpFTn74G5LWmVbrcGrKQ2VKrorpFkyfNJGeQsqAdmpFR6HnHiJSeMA6f8NHyizts4",
  "key5": "bDWXYj1ekgWEZ2KkMVQv7Q9bra4C3qZ9BKtqyWzY2JYFUyT88atWUWKFX27nxdXQopAaMEaW2m1oYTV1oG8Pw6A",
  "key6": "2767XzHQAFHHwiQ5mmnKWTNLF7SXLTxjHELZ66XWiismekfruo8roajSM1Ae2dLRLzw1m9W2NzuxMUpZ1a4uD9un",
  "key7": "5sGfsN6LCKm3yeaR3xt7yeuzEH7nmPoUaxgD3kRURmkZamhPxRBpyYnaNb7ajfacLghQFwTffvTtDkT9uTqXFH7u",
  "key8": "3oSuwMbCWTAyV4ww8dXxQB6J8n3nndCQEM16DwcGth8qdfScu3JdThk51nJSsb8cTQuQs5mvRbHQH1YNxXvdYz9P",
  "key9": "2veSKaPrxkp4SFhBGugPsX3vWZJ6BAsPwMBc1qT8VcRSvxAE6uWpq8qb19M7j7kmDfptH8UcEtp8rSRtR5buu3cS",
  "key10": "2uZuT9Cnmc9X84syBSAKemNXAyCSyTxnyV7fGzwiZwrYuUWHNqHyxjppycKRx66yecL88q9j45MxnjCGzx4oRQHy",
  "key11": "5SArV1YnY6QqMGzY7NsRqr5aRwDEQNvcPQ9oLpeUzSBNfCiEtgoiwbGDHLBuXKVnEPf2HdDMC2A38k4D3D2oCMa5",
  "key12": "4v7ZwK2FE4ah3LSbkoyw7evxfyKcRg6nCAEKjhPanRsPBpXX78Vpg8aVTrMCdHP4b6Z54Ua9Cx9XsW3XxBdgM2ms",
  "key13": "czdBNVCztL4AzF7Lob463Q4phEhkGB6eaZqJAZWmTvr3NhYprfhUsDdA5NPPYwVG48QerxYBpwaBzNmgQTn8rUv",
  "key14": "sWKQJgcadtwQyMzyF4cnkZxhfZdWifbnbnm7Qmh5zhZCMRrfGH26gyNUKxEnYYXrMH9Ziy25G8Z4dPjao6EyJJT",
  "key15": "5sJxYNhpmji8r4ThrrNwcRNyY7LQZGDrVLNWw7CiJz3WPkN27xeuRDc4ees96rmUcd8e3wppj4C1JCkpL5DRNiE7",
  "key16": "24WrLAbwUJrETKaQyoZpgrPvby68kgjxtrwA6gw5ga1ziUdUTzhxNH6SuVBCUrEnRJAE9FRXTNJ6TiG6NgXmFZLp",
  "key17": "4tJjvbRU9wi94UdPat3MzL4bRxTtJSSCqfmwK3umRRHmxEkca7iKEdYWcwRDQhhMU1c3sbz9ewEqCnYJzGrN1Gpk",
  "key18": "4wSaeK2ZBA6JJB4XvxUttBmh85EkBF89gLvpVVc9i5Vb5uekgTwM1nvi83EmC6BkapXtYVPrEKcp7DY5dbAKfWKG",
  "key19": "rAPF8MPz5UVau2iX9kJXmXxRYPt7Yup1pfbAT9C8dxCPAsEuqZdpbakTdrHW73gKFGruxVHGu7GuEMsJL1fSXoj",
  "key20": "bavViWixgv6PXgSFsRv2Bo4LRtqrQThAvKWVeDQjfbavv5vSMPS6NvAbfobAyuin45sKkRFch7mZv8fwuhozajZ",
  "key21": "3y6tLXxWdQjTzcskKoKnCHqYKr6kLJFePvmuQWxvGScRYsqXya7QZtzea6NXvc93JtCkaKDdo3xdNszZhEyL8mzX",
  "key22": "3bu4Ui8ppELU4H733PZSVQbyS52sizys6benyZoS9Y7aeKSJyrEXP976281VyAHywKDUJi4zRKvC6TeNWT2W7Q6b",
  "key23": "2L7siv9LaQHPXnrVamvPCemANwsLYNPXUJZj6JmiZ1d1cEADMeSFJrsNut2E2Z9KWozdsbp8ZoLzksDFtqZMr6Q6",
  "key24": "3XadvigWxzTfqgKP6r1mLFuW38X4EML3LTfNCp9hAKTuGMTGbEaZiEqpoqcdZA12hpitYqUCDpQMs359wresW8DT",
  "key25": "3B2snG9qPLG1ohw56bsoziGHufWoqqeHzLWYJ1YT3pZjLuyz4BMB1CPrqmtc7X5mmj7Kzm37wPAsgWHcfSUZsYKZ",
  "key26": "Zh8oMdp2PVuvkKCFLaHtacNAzHKqcVPn6MsCPqyNXVsahRzWfwhKJybD7nLPN9YyA1KzJs8MBcptbTwyhjP7p26",
  "key27": "58t4Y6SnCAMZU64pMg5rPFTPN6P2ysbVt4t5Wen8Sp2ztrvfGaieRZqEuVVFmKMJsqSTfwAX7b6AEEJ65WgZmJCL",
  "key28": "rby8LKiVvofgeiWbSkPr2ruDeAuqzid3wwHoyp9R8TX7Hm4uFAMF5aUC47SrJcBsBGxyXXHtaDcpB8T3PRWaimB",
  "key29": "5Dkyo15eGwF7cod2b9TtXKCk9iZyt6KvjoU2HpxGwNjR128RnXWcpYvUMmdaLzgaiZ6kcJnaZcWZeCHBaRScjXwP",
  "key30": "yViUabSa5gZP1LqWUsmvYKYo1gVT9UsCzdhmuEzBrLWUnuGySwokcYVhz6zr1T3uRHkDfmgNEpNGF19iGToWXWz",
  "key31": "ZouPAe87WGYNcDbava3EhZAvnUQePfgSDGTM46gon9CccQnAGUvfRaA5Jn37dpAATUDcd5z1KkNEvuodhpPNeyc",
  "key32": "4FuKQWKoTXtLosvCDv1usgdXz2gTvfQNDQ2eYKgPnsGmpsM5za8y7pVn587c1LcoEp6FgDYEQsm7mAtRw5YTPnke",
  "key33": "5ZbVjxP2ATsed5y6faBPc7SWAUHD4QdQ2PKJWCSJKreCCAazfoSxSV7g61vdPRa6ioxosfX5cJvQZD7fhqwbZtp5",
  "key34": "4mg3Di8gJbKn9uYL9xRatpuGnfNcjgCk6j3uPtzNWBDqAo3js5ZsxFcsYPRz4GzrY4J9sM5dX6kMaLj3NB3VheTK",
  "key35": "23haSWCmJkKMconEaEvF9ssmUpSo1pupYfpwukW6TwWZqE3jFiQxXDUSMaiCkfcuLE95QhR4yjQ9EpCGPyT9F3yL",
  "key36": "raLwBQNdzvQV5opVjVSBhyfHV3C1Pt8LAFipyC7tPZUFHRecJqwLtkL7CyKDMfZDW3uTKLrCBwGNAJae7jZxXKk",
  "key37": "2kLyn623ffgba8arAKJcik2E2h9zBXiBEe7ErXSAc4meD7jCuVoAf9cjT26PrecuaGTX2izj3a5Nxoeb3mDaiET3",
  "key38": "5kWbSZC1nPNyAc3sKcZsGLrxLHNry55cKZ2TqQFj7Un5WBhtUZVEukVVngwL66XdRW2Gk7k1onFtou3QDGYJADu1",
  "key39": "3jWCWPUDer4FE3XeBr6oik2StHxRcQXcriqavsRsTGxVJcL8s78ADS7oGbKKwYkGJErqyyEQTJuUYDGkd7qvfwbh",
  "key40": "dxejHWdBnC87PrWQPjcgP6oLSpqqV2M5JsvDW3ge7htk9TA1XM4N2dyXFsTiMWxhSATYFM6oKKsbYi8GwkNBAF8",
  "key41": "3m1kvy282fiiRmizntDFk6iFu6naG52h6dyfp682dC5GQtdUqngTkdcWAN4m9oeXkwXSxxjNc6P8Zg3H5YMdtqQ4",
  "key42": "3P58sXKBFbpGCyqk4W2dMBNKCpdK7UGSZT4DEkB37jYqNU5tV9EWFEH3LS4vZL9RsinZi4RPQWb9LontD4hi5ahA",
  "key43": "62pniTj6vfgHjifbWfHAYqJYKncaRDcET8691qEpH1x9jBbXzsry9SKa7nZrkhMxghLNi3tPMzC8ekbc8U7Mkwm3",
  "key44": "4L4RefEiCKAYNJMvRYyPuJe55hSVRu5JU9cPoZyNC8dmvKL4PLDDpQbzu9kSvG6Tx6PveXhogbAGmz4zKD4yLKF9"
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
