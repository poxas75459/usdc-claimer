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
    "21Uu3zFUaRXPxSr2b1dD1gsojU7sn7gYfEyXerPYFFkHTUGxPcMnajH8fT2R1Qp32rFTeaawCCUXDP9de5t5emPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "311SSeWdVMNRCmYa3eBn1SKvCceox71KaVh5SrqTKTsY1kYKbd49yx14SPTMPByekAHRQidMeiNhNKhGYS1ibz6m",
  "key1": "26wiPT3veiEJdx5Q5YUztEdNG63UxL4gW2JKnmp7bdPoSowAst9dTMp4EDYQsk5n8Az7fA4JkLWeAnTGNSdeSPgf",
  "key2": "2eQoaBHFNn9D93td8zUkp3LHSvaCNmVL6nag9abnaWdMqN1E6Wfbjg9FwnHm4ZYdkiJLyw2JGrRUVWKcWhGZX6GA",
  "key3": "5SNyvZASiABcWbhHheF9MjsGUZywrAk2MwnigzcTSnS21cuc9uERPav8zwBxsgPNMBqx1nno3FtBegqYmBJ7KmwU",
  "key4": "52cuPgjG2bDYn9Pr63rTZmbLfMXsNtTxXnmpzCuY3XtZHUESBEfTQgwYcMuttKnngrYM9w7oBLXw9uWPqpwUJEda",
  "key5": "r2SZhhMJucYzBpMDTozxetZwYVvscz6cNuET3kED3UG26EsVsCx79756neT9Nwk3D6LLCd42TrYtTfMGDXLaRhF",
  "key6": "hLaZZ4LwfopV4BqivD7zt3x4VLvFafwTKjRuKRE9bd2xWcQ2N6nB52DZ5HxSGZK5wupRaatEsAHPM6dNr6Ve7HT",
  "key7": "p4h1nCuHzcAvrCdePirnPHNbc2WHixRN7g6TZDK6VBybtdQqSamHuCjPWJJTnB5Jt6xshb7Kkh2RWwLmbv8FAu3",
  "key8": "37vc8vpAq52ocNoPByxZ8q8bMve7uCxK3821RR6x3dcoBhPXPTzggAxRhNKYjtPSejELVcZ2WrABnscqG8GV7x4R",
  "key9": "4Fxb5zHGq1bdfh17fKPuF6HNyuKyHr3b4EnknsimiP7DQwJnrnCixXqFuNhNi1HVSiYajRq8pRgnEhNJqNHrCu8w",
  "key10": "4e1NR2EdWf9RMqfhdnhNmcp6yWw82BNnULQv9fe7Fg4TDVkxkYSZDWupWxgztX5FrukdaBJrXhFCRQnhJZe4ukv8",
  "key11": "EvQNaU4SyBfG32CUAsgvyQQuYPeaY7RfwenhNeKJw2sqs5qDgTBEWzD73LaW76EX7k8AiiPWdSJin1AWa4d9Hwk",
  "key12": "4VzvjNhUZoUM27Yn4zobeRHLLJwFPhYpWa4inS7Wpf5kQBmgNavcdsERwVsMFgaMENoWL3Bz3wkoL2qJ4G2YcYFF",
  "key13": "3RtoMTuTURxLYbp8Ueyo9VnLpQuc4MeAWQHcjGe7KPY1xYFQTWBAaExLrRdV9DtwE3Pj4awqbbghiU9ZrKthkdqB",
  "key14": "2j3ZQ2j3fcVziDrZ4P7a7mu25Tz7U4vSEiyvKUx7xh3jZBUKXKMkPAyZsvP1Yot7BFw3DCaE2rKppegzXYvj5Utb",
  "key15": "4m3582bkS5FhStYDW8onGeTGesxUrvy5oHQwYEttZaPGrWFFWkZcBLpAL2C241QJGaazQPm8sF6jyF2HXBX7viw7",
  "key16": "2N2djm6TrQHFpPqKYTs5sccEbAvtfkNcRE6gstXdVGJyC6hqb8RMDaYc9vwGnL9BTKEm21n4PgqmMUt2DKQeZeXL",
  "key17": "3d96k4SSacu3UkjRt3gsM493kYGr3W2SsY5pVZenDSxffPSisZq7egepeisWtGpmRzXqahskn26NtN9JVKeFE485",
  "key18": "4WmoY9Rg5VpCUWX8eNJY7GA6phadccZbNQ8KdxpsMMCqGewJ28S43yAmKdiPXnLJKUqrNgeMLrM1fTZnkMgKc9jg",
  "key19": "2zpC96qa94UQhupQyoHvM5WzSgybzDR5wM7rHPSA3v2ubGRRdEXuZ7vMARTWQXZ9HzaAQYMVtLqLDhSPrNTQnDJq",
  "key20": "4pHry5c9utQeTcrVxopejs4oNDzXJQB1uW72iR6ZKX2Z9bfdBhm1SzHczGguRa9QdLHcg6S8KUp64jb7EKKN4Wys",
  "key21": "5gXweLUEBFUyazZoixBM1UXZsRaKShaKCvuPgbJ64BUwAZ9Yd6FojTwEm4j65b7XCaBdxp5LACx3Kxf6Jafw3Czo",
  "key22": "EQRNgTvVHdx21shPLvfChLXVbViJkXmJrBTRe8tdduimRtTnUg2CGzpJiSi4iNhDrMcnete9Tr1NKYfXLWK5j1t",
  "key23": "3768PHncUShHyu7Tzt4Zi2QgoUnYX3mbANmv8Zm6YByajJi2i85m8d2fx5dWLc1EiHb2ZkeUfAcLNEqwjmXL18rU",
  "key24": "5N1acC3cbCy6wLY2DYxLPyYjCEB5iKFMWVz9VFgqVFEMQamKt6VAUpMeRBH6YPvUe3L2nbfCKuyE6A3DpXaq1gU",
  "key25": "pW43ZRLR8TLMyMrFxhH9enKtnc7p1yQ9UhCXPMPw3uxSSZs3BhRjt4YCvmXqNdVxu5Nrs7jzCVWECQxTnwBHZwW",
  "key26": "g8HytzEpJNJ3R4pyMwLf5xAVHG2XuiQWFD1w1FcqBVmfcQDXhB7SkNftE4ci1rF7WdUGP6qYsvWNARrA3qjkahy",
  "key27": "2KD5CQMFeUNFaqG9YCoYxi8MPmXEgmMSLhRajNYnHW4xWuoXXjsv2iBzWMo7RTG1NRznVZrMRymxQT6qUahgCE9G",
  "key28": "23Np47uGCeiFTgc8pZ6pWE7sJYEkt8JQWGyWke8hqew6xFrpPB2pRG37PxRYTejTFLuiKHKApBb93rU5nXZHa9XX",
  "key29": "5U9Abnd586xtjLYo8Xpmf27pBoanm9hG6md66b7DbqnrrT3xEM3VVmq8SmyaTfNZX7fCAjk8r42hMGwmS2jZJbNh",
  "key30": "3vGaqKBTW8opzaL1CTmkKYEyL3GSF72DfJsLZqgLdseT2jzKixY4HBebVN2or3AXUQn16mhfuvGW3yBn9pHerMD8",
  "key31": "3cDZnFK8DjNS5XWppQy29Xh7MdgNhQkMERHwKpzG3WH8j2B86HGu54jsF1Q856cYEWAyjiCgYehih2Cyp52t5Wzf",
  "key32": "4jWof2hJGs19RRWWMGyaCmGt7eUrAESYRjK5qGr98CpfV8Yj34BXuw9Tcbmp6xmG2HEzohtddGr1yKf9VjKBr3zU",
  "key33": "PXGWZ3RVuMtTwzjuyYeEeU7ETkjVFZhX7mb8dTZ9erEaY4zkybAJSM11hu5dgWvAyzVqP5Zy28Yx3Q2Uiq2EbwE",
  "key34": "4Egws9651W1ZJp15bCmYi53DjAFfq1DTz483JVuy3E4hSAroHjxUcNjKGQVBXrWQNB9afVpZJZ9MBDsHJ3Upnz9G",
  "key35": "TqhyLUA7sZZa7EfPnF6xZV62FFGbH4UkBrYHMDZQXb39wLTUYaGtHh15DpXY85s7EJkeevktyv9gTsraTvYVDRz",
  "key36": "2yEDGoLmAcNYxo18wxXEnW1h4Xc4Zw99RzmfNWXjox7yU3uZSm8TG2LkVzVYJ6pwApDRKH4A4EdWsiJ8cB1wzHy7",
  "key37": "5kBg925TZZhPjpELenMGsmDmDXEv3LpdmV8m9AiJPB1rcUQeSqDin5E36BDdRCTm1F9oPaTai7rYn51mjcMtD4X5",
  "key38": "5sDPEfcsjBvfh3V7hypynpfvv4UF3gGcJFGqvNBHtTzJSRDAvD5piQWbYrYSJakAnEEEso2kCeT4nrpAehSLefBU"
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
