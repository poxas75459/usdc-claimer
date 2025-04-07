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
    "5y4ALKD3k43vp5m5LAb8uKVXQBWkXg3RC45bLPwpZRE9BnvieBNMMhcBikTse82TrLVgYqcZ9sSV7U6fHVQZfVz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aiCQZDCkzvZQohXsouv1cYRjfKQwk6Mpbk5hYyKrat1UAftP2kRwJNbgaiyuwKEhWBPkH4sTnufEA6jQ872G4HQ",
  "key1": "5nEQq4kvZqsFAP7YJuCauJc5Ho2Qgx2sQ2eiD4EWc41d2uuAkYrdBGBBGmtQ7GVcmXK9njkvGi6PXBz3fKT23p3P",
  "key2": "5gSZgpWhCpvEMPzQ9FaqzvaZd91i7hCcwF4HzvjENLnz1cxnTJ4o14u6zDrhqa1kSvo7zGZbM5GEZXABCQ7yHCLs",
  "key3": "5wYkf4Vifkgb4UqqgZ8zhMS9U8ednnbumxXoDK7YPn9Xgr3QxG2sktqAxeHw3LfXsu8DD2xj8cwS7FyYiDZUE9Qy",
  "key4": "4bzR9aCrvzDDPk7qancQCXt8bkZFMVQM3MUHKjwLCF4t4e7iKpAgtRifmvb8NU69KMna2rEp5zFufa12LkhgjAqs",
  "key5": "4NapUBZcA7vvZpkzcB5G44ssEs4ysZKNdfgijQhxwDDLaV4kBLWtzeWnkGpLX2Q3hkHa2ywHap3Koe9MDp5qVsSL",
  "key6": "2XBUEJU3M1Q8X1h3souFoUdWea2mT4SdZ9JWXTfhKbLSgsE3YPxcEk2G5rRwxZQLXPmmTxamBnCd6wRTNsYXBU6g",
  "key7": "3LWXiBmi7qEkjyQFfrqvMoE5pUKydLKtJXsvtZDDpvQBUVfWVCc6YnXB7pnpj3wzmRN3jC1x94SByKNnbCHL36a7",
  "key8": "mYvHCaLGFLw9V1X8j1p5nhuPgFUkevQF3RKbbsbmXY7fWfkBHmyy1JxeEUqrQ7AEpJJeU48EQXdRrGSRktJVefG",
  "key9": "4r5pAnDX9MWQSTfQqj48QGaVyLDByYBGyfBNGgKXbUUyMiAhMP2ieR3bdXzkmVnnxNj2C3uV1Jn4s2h1yvYv9iRL",
  "key10": "gqyGRzTuEcLEiXWPkZ4EmMxXkEScLc3MHRydhSVHzvEroTNWUG9twqhnzwRgq59Zt49A9gSPTs25QRRuAnCQrn8",
  "key11": "3Lbzkx23CBr5At4Tu3YfgA6X5Ne7a8AEkzHLgr3SteT1c71AxTZfDZxJAHCBRmEeFwwdhrJGQw8zJRAfoYXco3mE",
  "key12": "4CNw46H6T3pBYo3LBzZesFfAqfhDMYYLXY5x3ZGCEgoseFk1sPyvTDCv4wVDnPBdPsJVXXVPkCxuMtpr484jiFWq",
  "key13": "XrwpLfjVQe1oJyevG8vGnK5huGPWEyzdLXehCgVWNxuPa6fgFFyjN7N94zufvG3e13fdjfTE1MaViwbubbYyp8A",
  "key14": "x5YRnAW64kStLrcTUJcSkW5bFHCGqmVvfN6emxd9x9HzRzqDv69RgkZkhic5QYyvRmi3UWkKpNgJDLCBm4UVZRy",
  "key15": "121wcxoT1UGxaoRmQNypy6bQQjNfJ54mZCHT9ydh2iraeTSa8bCwFDkT3748ZBn2QyYv7dzVB4VPZ9cBWhcVn57m",
  "key16": "4c55iMpDYqssoKV4sucTQJPFEKhHEcZy8cyTagZMZijZ2hJRvL5zMQJkMAgL2Zuf561vHvihN2WcQGRDhC4orB26",
  "key17": "3eT6eMoM8kQ5X4sMg7DFeemMkzgAiYENS3qSBQk1vCeND1KJyGquf1vzUCqBTc6MHzX6SHRE41S4Fg5gpRcrLs67",
  "key18": "3MCXcccTp6eRPmumsEm7Yv4xz79Kciu4qBpgcy34u6TGHyjPqTqGAhG2q8R9QeyZTbB1J1Cyq1XA9P2pgdktc414",
  "key19": "3Q3bQWebUW6ukR3RdTkuDTpoSRyqH3qXij1CzbuLgdvsFbGa8RQsgyLY6j6F6juc4Tm1q1Mhs6nDkCyaLvhmm1Gx",
  "key20": "4M5nY9XwfX23HcKwUGLoTpqj3JtcfHMxSyJMwjPsk446WQqHTai9RtaQKerLxrDpyi8ohGZkAawUxrkniaD65tSg",
  "key21": "3GqGNSq6Rd6MMbhri31nU8w6dhxtUFRhJP1JiydbAnPmQiWqLombwp1nPGyXXgvd8VcdJ2mbRAAHFRtWUpAVKqru",
  "key22": "4Mjdncnexdqdt7TaXiZgpegNiFd1YKxmU5fwR1HFnwWLUf918QhEdasHHUUf25X7Zt1A6ne7byxSN5azHE2XnFQR",
  "key23": "siRNQTv4fpSNiJWEcpJZoFYyXndEsRf7x5px4XYzPFVbZEXHYyP62DwgSEd53XeLaFGtXRtZvb9y7JqD2FSnkg8",
  "key24": "4NgZAK452jQacbnp5MdyyzkfYuvNnkMZtdhaTFZo4vvEs77XMqGMawzCtDepqiCihuxHkbHUgkwCWwSNqikY2V2k",
  "key25": "4tCR1A8Ux3mJzZczTpnT6NPJxBAtAVFCf9Er5XGoPa9FVaLJWmd13r5cSQ1Pydc12P2LJw2WTnxvFCttJ7hRJKDk",
  "key26": "3Z1LeHkTuLPawtChF56iYLAUPp5HtX5dU5BD8TH8JfHrFVrT3WA2u2oH5CCCpDz5szmgQg1RzN3kZwtdukeVjz1s",
  "key27": "27VbKKgzRztStFAy9feozvgXDoN476KgqTyuBqWiAyiXMUx7gF8h4oW9FV8NZejRkTJk2xjq8BgxzXbHj5whQmp7",
  "key28": "5acP3NHBgk28HwJ7Pbdy7igqwDQ6r1HAhtHUYa3VywYd9N4aUYcEKd2K5vfrVi2J33bS8tvmyfGXuk9CXWnnTzM4",
  "key29": "674B1rhWzXiq1fBgQ9k7maFQVF8t8iWvc5ZapQ66uBXfnRQwCBBi4z2PWkF51x5NVReZ4aNJ6NQBmipA7xifRPWZ",
  "key30": "5Bq5waGUQQfwktGmYXLZcK5oLnjdj2VdK2rKqKuZ91FGEzmdXM1E7RcyC1Mak1jUTbSKG8MXLu1FHqgPPsPiEYLe",
  "key31": "5SfBTF1nygcYsxWs7YAdWynLQaSAsXgTrWpD3f7RojkVCozXaGBmTN2Q4jCYgLCGv4J2ioupd3wSQNtpYZKoL9CL",
  "key32": "3jzjDZwRbKaWRhcMKUzcQg8cs7LFtvbcytXmcwEdR3m37kZK6pBdLVwQNEWZ5Q9rN198HrUTXtAVeR587hhaT4CR",
  "key33": "4Y99WcCGECkaVonH6RnKm8EjR62dpczrasq5AaiCAC4oY4e4UYpFeUBZ7Umq6fmhzBgHcjeeXoGveqcfjHNyDbR4",
  "key34": "4SgtQYhDgfpn5fFRDc8A2wwQWpng7d5HXHwVdN47v19jhH3UzRrmg1cWtK87AyRGLoZDyUwSAbeb8vL5poTqG53q",
  "key35": "4zLFDuPxBroMxSYNZXXrM6znMeoeZM4ite3YdYDwLeUVQCvWArG5gygTpJ9smQTyhquNBkjufTBh1MJKgNsMoGHe",
  "key36": "2deQ6WDAuMWF6AnMusrUHo1wEkeDDPnJE8UUUd3zuLutbJBBVKJPLZck2Now1y81ihZHDwRue5vyZHMSCkR6HnM8",
  "key37": "4eokbia6ApGda6idHknSaWQhTceAmSmyQ1ZtUtexjDcZHWM9D44Y86oHK5ybuDfLUhDdx7A9Sh1zHHnuduShWHrH",
  "key38": "5L1VjzhTCQMNAnYYTv9fukNChyWVebcX6Gi3ARzPfFKNHAxoBNxjLF8kwGTPcApSMm2UC9J7ftz17NkXTa1Fxghw",
  "key39": "4Kjadc7aWt9vG1HQ7q1QApFuvZEL2tprJ5RR5hEYkQSGWw8et5Y3KHRr8xCSWURi9Z9uJUHrkU1gCvZYQBShc6id",
  "key40": "2SVbWugQJBKPPhcdf4X32PEqYoyCAgUTKACoCRBfzuDYnJUJVKSDszESnHn2Kk6yhibpsWiVhqJ82ViJ3CHpPsqC",
  "key41": "5BESDSVdNXv4B83Bghv8PAPvYHDeakXALopHBxkdx9xnMKn5c6XLLKv79kh7koYhrBWAxRtKRMFjddps7GFBPmqA",
  "key42": "utRaT7EywxiJ5aiuwpKL2BcgUk53Timh9GPLCabAGriajVjdc5Cun5SKpubFsrwXymLiwYPtLr5ZUvBuCQHr9nJ",
  "key43": "3S4qbmFm2BvRC4RDwr16K1xFHMEgagEhNesA8ibX5ZRye3LmbHM5poVG9V8jBv1h3CYbeyQxtCvmuFFCwkSeFGH9",
  "key44": "4PuDregLGmEhCTmuuiabY64TRRNU4Sk5UaUsSyUnUL3fpKwDUJGWRuneBZJ9s6PU2txdoJgVkGs7dPiXdcPqFmJa",
  "key45": "3EqE6d3uTsCESeUoPvbhbF1yHYfpAX4FkvJ4D6pgXHQbUucTRRENP6aFpodHVsa5ukUmehzZ7Zew1gK3pxLKhNnS",
  "key46": "561gPB7Hm661FzqyzoyyeeAnqXTqqw2sZvSVvyy7Ratcyh7oXUjwUSKmAmBZ8XAg7KrYNwdDgDSTmb7GL7w2hZJ7"
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
