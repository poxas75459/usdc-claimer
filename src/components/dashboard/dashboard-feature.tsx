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
    "5hcWYuSoQf7YuWBXiDmmDPGZYDkNvE2WArKdzvreA5i3xzvPrBYFGRT614CyDK3ufmUXmawCvYDkuzibZCxn2yNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pg3ft643fQs45Qx2gx7ZG39uLViYdHGwYRGioUpHcia1ZMt2KHPHzWiTyxey8a9mCHnw3YwpMpCzvFEF8r41WeW",
  "key1": "3t4wkjs7fAtcmrsAw4T3tvTHe2UNST9iZghgWSNLjbPezARufdj64JsZhpbjvda3zXWYohjvrxLqKduUdgBCHJuD",
  "key2": "2Yv9vQFbfQx57gGAxbc9SoAw18FruWMf1N3AUpyhrw6vaqxxgvKREjtuv9UCHfpGJq7SGbvSmP8GiNHqtCyJgg78",
  "key3": "4E4RAKiYiMQqXdTww2mh3YZ5kS1BFJrP1YyDxifK9p5owswJAQoFYqLnRQb9h3YxC2q9dcT7enRp9nDC8tQFMfkY",
  "key4": "4v5ZccxAPt9aMX31ZTAHJLJoQPVpABPqXngdY9gUxZnPL6tYEcz3ucEwcm7PQKy3UzZ8HDsZ9zPA5ZZBbTu457RR",
  "key5": "wiEknSgfKzMSH8kZXovDEwKYsQYgbbL4RrWRdnqfqs2T6uwDTedo3r6H869zYncAESxnooxxiarYUK7TpE28wef",
  "key6": "5d4ZDFBoS6mRsAbhT4A4XfcaTefk7QiQSjM2YMDU8fu6N9atM8SZk1dNs1xdTdfwncz2YtsDXmxkRbHCzjt6Yamb",
  "key7": "2aD37T4vwsj94VCGLZ27e4QJSomiQarqJhfjHMBq4sbbgddrDHnWzxKSGwzKsZibwvAb4VnDyfjs2YjCnviwMTYM",
  "key8": "fQWBezA67mbiKe9xD4Sx344zKagFbWcF2gxu4iEFAkhPWwUsmAdVDNEEFwhZsjcHyfddi1pFdrZRegxhKiGBpCQ",
  "key9": "5uVqmEhVf5wTnxqTKwePqM3ssrTMwgW7ywZ5U7FzWwcZSJfb7XjyvUZp4FjyHdoHaXUWoXdSy62iYSuxxYKew4EU",
  "key10": "4aDM7wKMgyoyHX4eVAzLz6R49o3B4cvuH2xXr3PHNanyYNu2mPEe7UcwsRiaBEXQeSYNaxinVmrwQZVNWt2ftD2C",
  "key11": "D1jMsXYdomhzVGRLEae7ZRMMr6UZSVxrKuG2xth6jFwz25KZ2FkiAyZ1G9Fi2LvnSCzLewXbBdLXeL2MNTAaHXH",
  "key12": "31j72iH6WKvRjZ4or2HEe5Nx9SM24sP5j9yTndzxsNY1LzxzPTXjVc7g672CmJYFpcKy5MJAthrzvaw6NP2Xs47R",
  "key13": "3bjveMzWCPYyd9bzFPXkDjucHPr51mMYcVWt83rxX9pvV3G3JJ9rLLJ26aziGmapLLASDsTbvrBaqEpuzWVoX2T1",
  "key14": "3mXCNQGaZnAEaDH4pMCWsE56t8CMZ2MMyjhBKyPBuvmFA9kdTNFYwcWZJ4cmYAYgpFQf6BqoAmJ6BtUM3TVg1JMk",
  "key15": "DgNKj997HiDjpApe1jLGGty6N8BB3AaEmP2zaUELLk1TXHZ8hgpoWnW3GbWm7Y48SogNq5p9o9oA26WLxdU1LWu",
  "key16": "9kC1ZgcuEg6XgcCwKPMbW6izE7pYwRq4fqWF4BHoSHV9BAe11fjwHvtgfToSLLcgmE9F9QZv4WHWUkfBzogek1f",
  "key17": "2M21vFcaRfQ8AapM3eTMzZBLV81obyXoPWbmR21RfQ5Hpx4oN5MA8zaqqa6JQujAGbD7Rk5H3bpCWZYPedXGYYAC",
  "key18": "xXvg8NSYW2Xw3zaTUaQLVyFjBHPfLYqZLivPwH77Z2a5dtKrsB1SCb372zN3xfvWQqWooooVMX6Jsxpdn895Yek",
  "key19": "3eGzKG6frEk2xQkvxw9gUvvmx2RRusCGwSkeAeJNYUsFgUbhdEyy3ztGg3DxkCBiyAUVycJNeUiowQ86mLjL4RLi",
  "key20": "5JLeM6LX4jkY7gF5MPszJhyEej7kskGQwDkvjQ2GwUjEPCQ2wJMbA5fz7MRcYciAf8qdxDwEPM19s8AVHcc2zu4Q",
  "key21": "48kX48UwuGmtyJnsnNzHMLXhCLiwBG7TiCErd3iSCD6jCPTqTFoskqst5v372FKZxvMgTpFHHUTgDRapRcAKnXEE",
  "key22": "22M6atAc1EXrG5jeM2PFU3U2MrXVpySHt4LPCfiYbKJGPxT4E2nSNq1Ugi5dpiJ39eK2jJc5qX2F6YiHJH64xSUA",
  "key23": "5BpCod3JngwyZXdf1rzWCnPYHo6BfWbih92hVed9j7gm1msvFmt1biz3LF4q3MnPgzUpTqdfJGvBqm4oGkgGobxJ",
  "key24": "5QnEMzCBAZW2JYCLi7jBXuaCBGDQDSEC5BTcokTrH8en8wV3YhxkVDnme9BHzMkVyrTo2Siuywv7Xu6X29pcmDgW",
  "key25": "M5vRwJyUxqBuPT9j5DUhT8f2ud5dyLhr3bkCvJGhiyoSnm9EovRUTbPuU3g9PyQyNoXXveC3QfY6PZTADG24dL3",
  "key26": "31X5UQT1ijW92k9hquXmsP3JkKaJsUbT4vdKFDu4551YYLEbTTGpyKk7DWr4h6rX8cEGioe84KSMWyXFoDDFjkqf",
  "key27": "644HYax2A9YgsiVhN5jwca4J1huUPNhhb6F6phTxJKKddadoBREbgbQR3TRQtWNM9B2D2RSv3rdGs7r1nvAYFWWY",
  "key28": "3WhSQbbW8dYbq7jDnH4eKmccMDQS1ryZ18y57eF8jbBDj4Cy73wgaDLabzMKZFs7V3eM26MRttTHK3sBKYXCq3KW",
  "key29": "4jYwcqELmv6TUayKK1ghvRXn5BoPg2ctEUwjrWhj71jfbozKpQaX11RwisdSrwVRC5ygjjGMMFxxeXqVgTZZNTFk",
  "key30": "5S1a82Nucw1EQKGtSp6SXh8NmAaKkDMgrLBbJWwfP2bqWXYrZoE4XPoUUPMGGZHmAKKuzbArMae9m8U2ME56fXcL",
  "key31": "JUCidJzUwUgn8Z1BhzwPcn7eMkdqAv2jm1vn6iYYWSRKQPcS4U6yBu8ZQ7tEL6JUvqTVuk1Uzmx6qVg7b1NFrPQ",
  "key32": "2Exb7TP5JUFJdLz27WSqaHZK6FArqpey9VzHaGUJNqzJdiwwc2unGh2B2eM79rewzEAk46FgYpjgwV3Z36DnoZ8w"
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
