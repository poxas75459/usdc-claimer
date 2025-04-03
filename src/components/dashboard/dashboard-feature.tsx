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
    "izhPsu1axNwX2XPCujY64aysmrfP7TgZRP9PEeK9BJCFa5zHrLcKA6QddAGZTECZXzJK1QiYafCuXqvB2KXpLbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44bnGQo91dfB37ogng4p96MWrvwFVhgeGvgTSYzN4UwkoLmjpNrxc46LwjsELZc54ygynLaBxb76PW7yzxVgsznQ",
  "key1": "29p3TojDehstx99QKFF8Ah3rh2CYzpwazjTWRsZPrKT3ypNpFx6JdunNzk76SPiiYiE5QsYyVwVi6buP4MJnkF1d",
  "key2": "2TTwgzbwfitqM8NRKYZHUyKmpqpC9fwJZvyC1FhD2UjP4G2L9poL2BUupXs3CArkV7rrHfXenuzWHwosdLrRfB6N",
  "key3": "4UKY7jJS7uTL2QtY4hYdvVDU2hbLrk94qsm5yc2ihL6GJwMGNc8FDHBsDt5EeXU6b7GU2Hty7MqRG28eNSaEu5Ew",
  "key4": "3AEcM5YTWCQV6YQnZRtVNVWPA25bwQbniTsdXxKDSc3oZYv6i9hR3tzTwDRko3PTP3gwvVF8e7J4qQbogJYWDtQJ",
  "key5": "2eoL2bH31YwtbwCUi3mkVc9KvvBRkYdDCNFWw2eJcqZehyGp28CHfU2EaMkApEx9Ab92xyDzXAULbJeBXQA2PgZL",
  "key6": "3eaDXVK9sf4Yuv7qmrX9PiRj4NreMFZxd5JsKs9Vky4T5o3qex7mC7Ny8Tn9pVLtd12jBGA6d4MWWFeM4D5i7VBw",
  "key7": "dTCMRCysVRcs6keDgyZZM18d8RYKgvDpqJSfk8yjxbrBuoHZWRD3gmpS7NbMXeM4dLawxgzc6PaA1j5iAsr93BR",
  "key8": "rnJJyRympRAvo8T7x7NgJzRS7BQxYysYRcFCZUwK2sGGvPrqhYRNNuMXAw3qcUdYY4Exr289mqxmg8uAeARh2oP",
  "key9": "2RJdHTCjr6nsjVbJnJJAF8Ux6r8zLWihgKSooyATvUER5Ab2wkF3xtf9HcEQVibAyf1CvfoMHJqm5CxV89St5Kik",
  "key10": "4fsXJTUkYKSL7RBVWCr242DauMeYmQCp2H4hzYRBqYU9mdNVsH8rmGBK65ry8iWhEnz3UdckjA1UUUqqw1c2PLQg",
  "key11": "4Raoi7kXR5khszAKCrbmYivdC8A6FaPWYGGwkV51sjT31bqjhqJCFd8bzWqntxaEsQao82tTqPhApXWP7LKRD1XG",
  "key12": "2jVxk1FyUXncjvTrdKt7APQ95cJAEwVzs9sRfoDiBV7joAjCe2z1Pyu87JL7HArmwtFRxu2aeHSiozBo2iX67qDs",
  "key13": "PFZg6vD1Q59Wj1yLEFdkE8NkZDjnJRNFHzAqb49Ymadqoy7X8Mvx6w8PP2dWyNhFbpxMzYFL94MvvTUPsFQVxT9",
  "key14": "9ubWE1gK9ywJdvgAvsjQnPfejxsU4UqairaseqgJVybvQjWjes7eEUMCieNFDLYimSCEhb4zxoTgvT3YSSH46BU",
  "key15": "wjaNaahJt7gDou9SpywEGeCer3BtovBA4jjfy6bxdrAh6YyCvssTQG1nPfNb6nYUjUaiK4RsvA8gf2XuKgQwXSr",
  "key16": "3RgD5ggNUT3qjG8EmkrDAcYpLCYMTG9j4gGQyCTRj4ixBsozYBawkRXPrYz8shpZYtzxeekKUYaNyw2cQ954rto4",
  "key17": "24RavBRNevzkMEBA9UC4ouPEbUHaFGgeocy4VumfbqC8REeKpJ5L1KnqKZssoDCVnkK1QKHGaUTHWTmCD5rZbibi",
  "key18": "2qScuTzE6EL844MA6vyUC8PZRBDBK26n3sZyjd9iHoTB56R5V6p2ADP7QTznmjnXaFgpdHn6mWjcQnUioVjZaQG1",
  "key19": "64jeex8dZtptS6i9TzxETvas2jB7ousihrTkr3HNAMFfptWtbzMcDf9cmw1dzcJCTzRbQtdmhussjwJ7F8yyMiZv",
  "key20": "iuCUwTfXBrQeZPAu6HoZtSG4LWuFyXA8bHspEUqsBoiYfryRNjGxp8kG7dUaoX2EyFw7WbboNnkEA6ZLtWKaHFW",
  "key21": "4ap2Vj7JSrUbuAAWCXkSoYKfgmoTDLSChRoLG9vJBvsQd4j7eQCtpyuyjVpa8zKk5g1WP6WHVFhw7HKKnkaXewgP",
  "key22": "5TFAKdhS9W7d6GSaFgKSzSZrHP8eGprZ2XK7Loku8z58Te4sGvLd3kdqYpsQy4hJhdW45782KsU5jFM3RFrvjphE",
  "key23": "53F7M1gP54Q472wGWZbt3Mq75t4sUxNkxMZXcTByasXSKALfNvPFRg4jBGEtjy7oU99ThWtfaqTRHjXuNauBSpLS",
  "key24": "379B79APLfN1odvNfsNiak5W9acW2JtxY1FuW8ssj3DC9dWcQS9orXqh2jdvZpTf4aVQVngGrMMf8QYjrKgbB3b1",
  "key25": "4zMnNFxKz8cqrAP43X7A2YjA9Pjq6LUtuwcaMaATdkCowJeADXRN2WMZ9ygVNqWgngRdXpSjJGeHTS8YmPbkEDQd",
  "key26": "51g43PCNxPynnKxRgz9xYoBC6v8o2RKTAVpzeu3x5q3NdhedyUmNAUAtNTSyUXNUg6hGXjqEK6DVxivNWeeGbgpe",
  "key27": "5C4aUFDPneHVvcqz29xpYx1CP1rbGuxxVYia8gzQDXsQqGkbGxu6cR4cPxd49XmuXRDBLQQW4JjHyZbr28TVk9Ux",
  "key28": "21txzWFNoag9azFWQNzpW726uPei8wFreF57tMFeoYCLjRiVhkQ7Nh7oyJ7yWCyyhxJ3wo4BS1cTrKBgWr45WgSq",
  "key29": "298ori5HRe2w8D2c1By5p5paJ6uCx9vVLAsGzXfjq2w7scgyyd515fTmMKVEx6zFCD2cUHFWkHrGhGyikho9Euiw",
  "key30": "5SzZAPkAkxLjFTGKFQxVr1pbkPY63Z6pY1jctcMCYxDeYon7Trc7YV7RdmhQ6oHYKApmU7egM3kko7CLoxVDetRQ",
  "key31": "43ndEBwanTpyks3vrzHa8HDPoLmeUNgWxV1BZJNgeodHah2sKhCz1uBSdSiDeYJyKyNHdX9urekRvRjnu4LvpBqo",
  "key32": "5SrNrWcyHDVmn4hSHsZmfDwDTAxwJtmArsGiQCMGk4eHu9suiPQDHEUCeNyL7BhfrMzXNPNfnm5XMELnMvY38vWd",
  "key33": "Etq13vjMthSjJERoWxrD4UG1buDkuzRAhEL4ceFLf76d5oW5shbGFHmQKyuHVmvpzMZS8z5UsXWuqb4ViJpHmuF",
  "key34": "66EgkomNA9yBRt9yJEjD29F3tKoVT8hJN2688LXkfZ9C4dYEYhZYXQHVwSuwk9CrJjfwCxGEKfER1c7LYAo1pxSr",
  "key35": "5jUXXYx2j3tgNkky4nNyjRpmVaCq666bj8iuNn9GTNzz74KBfsVvkJ9Zw49cBjuR92wnYGkpS4Vp1GMuvyxF2XQd",
  "key36": "4EGcrbsD2fSm6QcLHvRnjyV4wG4M6boFNJEfhgT4QbjRNX9oeZZBFu4Uj2NQTqBoX5TnWU4pabNNRKJVmMq1u8RA",
  "key37": "5BcUY972jJXcSgn8Dgh4LaMjsVYc492uSJSNhYuxueEcGD4EYc6NETub4Bt2s2nx9jYUGRzZGHirJq1mA9nwRM6c",
  "key38": "2fDvo49HjZuD98EHZL7YLDU68HtZ32WBR4Z3cmRbgEd7hkmph1xG67bnr1JVMVyGWYj4fzcUzfWvgxkc3Z31NtyV",
  "key39": "4en7n3ZDcS8kCWBcAHwaqATyjSfAADCcg7TzjUqZNBn5u3pfFdDaHvsQ1CX2JyheHXyKpV4atkuFRGdEQfzCHC5P",
  "key40": "37emVjRXroQofWD6FmqRBpymtbj6nTG3zxZ5ZHkS2YCMC29DEYRKLxtxgZeXyPowrg9RgNCLhsipxeDrQ6LhQokM",
  "key41": "5ksMBEGXBhWkpokf8VDGhnLycxLSQHgmihBDTbB9svmd5RCzmdGAX4kKa8sn4bqJUFxGtQhAXgJVWXuoengKZs65",
  "key42": "4kFP7eTEgiL94zvT69ad6sThZnnCrUXC4dMch39u6vbbjVvX9JWktqNMwVzZr1upkDkXuy7RnxTnVXeNi9VoBrXY",
  "key43": "5xy65Pb5KJaj21vK2uaR2gf655v2x4wK3PcinbtCkDrQXRGStvPLsqcc3qSUhm5uaxi64Q1suY3dgwiZi8f9KQkC",
  "key44": "3Tjwja4mnbf1arNo9t92pP1t5mgJa9WsZmMarkaCgLPz86MnBFJThK5KnatNwU2cX5PjKxK2KtaMBRVfJfLaRs3v",
  "key45": "wjLjRqUHvcDUabNFpYSaeUo14r6zcTGuRxZe78Z1wgED8s1iAvTpMqZmdCBYMcrRACvFS8oRH2VyPcVtrH7yHWv",
  "key46": "qom4MN7MB3dZEz6ZtD5Q8dfeeinRNSzwNSW37W36znExEBgfjt6e6dBkdH9JVGfNWaFLZdmDPqBskr9DJa6RtyM"
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
