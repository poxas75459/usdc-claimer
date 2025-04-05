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
    "24GA7DDfGQFqsix7dEy2HqVRbvoxKp6gV4jT2ui9wQkMZEghdEBQdUFY1agXgcVQfyjvup5R75MWD84XSD9VTaXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bnk93GVEKUn6fwiQgWfQXJYimG4TvuUmxLxu84UYEzZYbS4BuEekvCz4BTRaSrvJEYpcx2i6edSTGRHJZyGZuyc",
  "key1": "38Y6xFCuq8NWeJesjXMwQSnpjdqL3QmsAFdLxLapaKRT7sQFkh5XyDg3pLnRnGr4bbMfpdHA317LsFgvsHfpXb1x",
  "key2": "U5p6X2tMJ1vbpJdwrcJuFCTqtFyjNT1TJrSqhnWTr9CPskKGikF54BNHYi1pzdr8YFNCwTT1XnJWTWH4zos9F9R",
  "key3": "28Z5CktX3bk4QFZpUUujuzx1p1CRJ6Cm5dKPRrAcgAqDKGCDwb9uipyZTo1ycrZANJf5rEF1hBzuU33wKp6ffQjq",
  "key4": "5rJiDjFeGfWMzUq2wuoJErN7gSdZPrmuaSb8o9e3KGWZ3DbnhcVfwq7b1AuzvrWxEpUfFoQj78fXZYnbtAMLx3DB",
  "key5": "5AfAwRwc326JtRk1saHd3hS6KKDAqCUtSPxuWccCGhD2WDTmx3Xw1DTHxnLv9CEv5goyZoLC92cXn4E2QG64JKCp",
  "key6": "35swKVm3PzuxX6BVtKgvzDytXCeE2TYTcaSGPV3WV8JreVJoquD4V9xdiQSZKYYwXPpAVVrqN5swZXcKb6zLyvkw",
  "key7": "64Pqgccf1uMp4mq6YdaDzUATpUmWiyq3EWJq7WmxxnBv1thjKv1fLSatjkauA8ZRkM2pZqgpf5AScnnTvHJDScYa",
  "key8": "5TFh5V88ShctQsAnqZHBtMecNv13CrooqrF2BY1zqTL594AVJxqwR5gthKDdwA8KVZc1vVwx9XEQpXgjszi8jq29",
  "key9": "3f6dW5tAfAeDy4TE7SAQgPz6jzfQx7U7D3iFoPCVwNLA4i5v3s4QuV5o25W6xkhqp5JvZ9jZv84ffogYg34oUG7m",
  "key10": "3mRrNp5uvCeXYTNazsh11HZAjbzZbLe9pwioE8AyGFBDFXfNXJnXg35vBxhFVLrwKJQRwch5iAnYdw5WWQMKyBc4",
  "key11": "2MQab1qm2qvurtBgnzbVuQLPYihoVsHoBiUUQpk9oZTjjXbBQFdXvjDqkVJBSr36Ho5BcEa9PzLm4Hw5gesGj1QD",
  "key12": "5vPgf6yc75YY6bsNiryasG2gczXBB4JKn41Q9wYpfgzgj1jY9ZsoJMnehKeb7HqCr9xZ8bL9JY4gTWCQVMzadA4G",
  "key13": "bmrW3e4rJdqV5TQqVUd1zyi5GXdhcPfGbYzNwwAEyWW3oMD7Gew5vbErRMdSrRbogtSidZTfiNeYNwNSG5g14aR",
  "key14": "2GJRoHLc5z5zYyPodzqWbwM1r5QNhLxeqZipmXoUkqTY4xqeV4bqmx4DUhZrx68aHvCoc6wEKeSjnRPTm8HQWoX",
  "key15": "44psfenfiAX9mSaQah7feCgs2HoeLov8snpsmqnST9Hz6kTtB5bgvvMMFhPB11tV3mp95yAhdKMx5hkGz7yW8skp",
  "key16": "2EfusC6Ei7rGwqdGRVt6rhdgnurXtbpez3KVQkkmt1djmrw9tar9rmLGd9t1o95TR68HmHFzGWGLJRzo667o3uZU",
  "key17": "YSsHP5QmqpUTMDomCjvgC3RdGa2g8nkLSBzdDZrC957kvEg5J9AKRuGTUUbPRxw5821i6Y2oHzuKhuDKhq8mas7",
  "key18": "5bu8uEJRtNqnGm6JqfGEZpszpojbqeXJKquVJMb4npoCqKiiAPdLaBQX4FNQSUAqQ7CGtW2fHA7p7CawBUtR51tq",
  "key19": "4wJTdu49mh96V77pGzf3fumnQYAMTPcCKCnaskpjZh5AkdnUoQt4EU5WLiw6ao1Voh9jBKuv3iTMyoTUPXS17bAS",
  "key20": "41t9Xumnv2NM95zLE4xpcrW5iNyVS83E1eNDSs9JaVkRzebsKJNmGrcuDoXei4jCLroYuPvWrtCUa1z3mX2eKnJu",
  "key21": "5KBuDH9bCNCzH7chaQc82iqu48fSorffqRUDvQQyny43X6w9rKko9tPfPaw17SF1rtxSvCCVgPnfQUVJhBG86ExW",
  "key22": "538iAr3nZnSZhZinJ9w9vWwQZnWjDYBqYXvaxA1TPVfvbJjNsPCZn9CFeL1AyUPnvwnDTgqbsNSQvEuFp1xRVpUC",
  "key23": "HYwA4kMR1GbLmJVJSJYTdGeGuxjoGWDVbDXQotGWa4euXUCUpF8utS7xsDTAZndVfk1yQntXe5BRVwL3cuueURn",
  "key24": "p97JLHLPNdWtC9kfm3uRHEe5LNADCFJLUqgeu34P2NE5o2skjZC8ix4dzQYZPSZNPULDYKrCSMfhznUcFZKSHsM",
  "key25": "62JR81H6XDQFHPSikJdnMQ4Dsx4DQ6m2XJfZdEY3GtGsxmJakMSL6j9SXvwbfF4aHstrfDCFn12BQaqo9nBNeruA",
  "key26": "2Rhh6oi1vU5ybFeMNZ8VHNtQBbprPj9KwbBqNXEZ61f7jCqS6LpoXLsqSoWbXr2LaMFpubudJos2rhc4bMg1CtQU",
  "key27": "4kDXveb3ZWcCRFeC334emv4mdoJPDCtVtxbMyTdVmT5BZmvP3eqSqxgAUwmxqDuQnR44PkZyYLD3JZRN4T6B3DwW",
  "key28": "4Q3wtD5fQp1THCRaj1mrsBJ89Ept8Lq4EahGhFKfcHurMrtYZSJr8v3MtW2KRJPRGAbgBEH4FJRbPsYaAJqmxFdG",
  "key29": "XjCyHY5YVdidictMduYn4xc5HwpNtkyF9gbZn27gCow3JjK5ns648VuHJTztRXPh2YGwPhs6rwVw3V7rpsQeWyo",
  "key30": "SzcdgSJH5zGbN2nezdUrM6E2JSkx4r59vg368DuyTSJ2NxFTDZQZCWgk36DcwDPzrQCL16LeTu6hvvm3k67dqnT",
  "key31": "5ouGijJYgSH6dPo2yViNvcCJFS1TG9n5CcHmHrP3RSTCgs584Yf8zpe8pS4Yn2tRWeSJBvuFAMBMPGyKtRvKuRor",
  "key32": "2zJyYXiPW7StTGeqP1PSxFBDApWMX9EfVaGLQZekSbYbM9X7Bry6FrWhAk1GHW1eWvXT4EXZpvYeH2cftb2wyHXZ",
  "key33": "4VAmVbcAisZcEL6V92kfq9FBeuosJBR4uf73VY5ruuYim9rgEGfKJhSv72d7tL6MsiQDvzaE48ABubqnfo1F1Bcc",
  "key34": "4roHV9SzvjQ1zmkz6peb9UNLyEYHY4oEkxbg3wXaKR35DTBFpcTM6MmhiAVGCvVBVtXzP7dMYFLa9YY6tY4vnX14",
  "key35": "3RnPQayp7SY1U93f6YBV3LNSdcCHF2YGbXxCtBWcBeoBjc7gCevzFPkwBDDesbcvANXJ2vDoeQyxYWuSgUqKru6y",
  "key36": "2pS8soeMvQupDM5u46zVVcyyd2STZ51wjTjmm4SYLiz5XEec6hFj42ym2udD6uniMXYq2bbc11mqKLNAbvhMGADz",
  "key37": "ZMm1pPQvvJ8y1sPBa3w1vim1YgDrLWCJMbTSPhvAHSN4Dq7FEd6TmD12NtJ2akaADochtiMkR9W74YDyXuxVAzH",
  "key38": "zL9GiDjHxK9P57BvN3yPZc7NKBmVvwnMEQZXNmVwhbaEZyt553xH7e6CVkTPNLBvkoi1EiwrYCBuVFFuGezkYJ2"
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
