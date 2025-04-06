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
    "2ahfTzydNLkHms2rris8AY9PHZpMcw2bGHNr98EHQ3yKq9GY5vAgWc4YWBwmQVswE1TKEqJeSfowq21q3MdHCYdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEnUdZ75HjucC9T6pwabLP2eXyTZhhvrgE7q5LUtEXp28r8yRBHNmecXDJNE9S8mhPGXsjUrdLC6pzDbHkGGBSC",
  "key1": "4e5bjXuVSDNPs9C3w3UaVGqagKPfn8ox1vDzMUTSBvnjRGTy7PNnwUKekieqpxc7fKrVQdp97c2hEkfTkS9dDJZv",
  "key2": "5sruvwmcXfC2qMopCTvwnfkq5tYMWddnsmxc3qC8rkC5VGc6dgP2LXfDQgBMzTJbNsyR9Wj2TcyyAVu41JeVN9rH",
  "key3": "3LQvtHdzwwyHkbsL5zR7EybQVbJMLc9xpnrEPGHrKBesNcVz4AozmZSRd2z4DZ5TwprqYDGxSso3WxK89ZqTtrBg",
  "key4": "5yKhLZN4t7JzhSjdKZ72fZ5R8r5hkH6NSJG84baEtFRVb9GBCqw8TfP74FFs6e9wzoxNUjxcs8afuif3cDFuWoqn",
  "key5": "548h4yScZKBpHStPdUo71F8qmJksnunu4q65tys8pf3mayD972w4RRU7FRgcPpSj368gzWzsAMgoekBPe87RyneZ",
  "key6": "4srtZGpbC4eucBG8amVe6DmASdMXZvymRYK1iBRHfnQz6jaZdmC599GbERhQH88SRUwjSzZjGwcJqpFg1ABtERit",
  "key7": "49MHojgsCe7dbKdv1oGNxeERZekMpHfh84SZ2tZYUEPiZ8VhuicKVDdEaR5iSaH7ooZJcpjGJ3mA16g7Zq1sh7cv",
  "key8": "5nuEZD46iyj8fVvVed6jXiYnrRu5eubKGVovXt6WKyjbM2Kh9L2uWLEUM6PPNtcTKL3tLhBopNMvv54MPsAX6beX",
  "key9": "2zzMUVNqH3bDdcMgfPdmYM5NHzVdFMNybd2YWygooSmoivjv24vbzDGUS8F56HTTZwd9GYUiAJCw7fq1Ap4hAAzS",
  "key10": "4UR7Kg7xjZwBxTJw6qpNdNptFX9444L9nKZkoqTgtpSJzXwzTaGw3QCWcaupYZFE2y1tMUhJirdcrfBVx5pxfSRq",
  "key11": "2sVCJa7eRGBzzQwtPTfmoDJ4iwzba7f3Eqbzu6JH9z3TRmSWkTzKJg5GnYiUEKz5w18VYku7X49kQd2TJNQX6tC4",
  "key12": "VbkZVGKWtDFXAqiEu5af3s1nUAJG4g2nX6ha1f41cfYjyMeLDvstzihRDR9JmTyWJrxPQ3G1BnMaZAzDE62Hdgx",
  "key13": "4pfCBpLengAtBHXuuJnnSj7zHBNQMj1BTAfprqXTpvCnVFF4ifX6BNrffY6pkh36ZvziQx7wea6TkwV5G68PdMNq",
  "key14": "27XdN2frtMqpdy3uDuE45p7bPCDPHPVMDWZxPuDtsaamvMhttS9q6hgu2gqCvDkTKtVWBBriPEnHagJxFBy1iXiG",
  "key15": "3bm7avRSbKEGgFXA1RT4CFFdGkf54JFvNPNWtZoA7rY3cW2e2b6dk5Vd9BqiUZvYu7QZKpJZhT6QBogoLU6KRszU",
  "key16": "4Lw8MpxtfpcXV4KZKpGF81U3Pfaei5r3JyHEi85DWQNJfAQTfWTsSEKXjjog8VpvFXeYLx5ehKUVs6asHsGdcTeh",
  "key17": "4CXDsdyyEu1CfJ49rEXB1LGDTXbMYRfckfXS8gwJqJt9L1Werk55zRWsBVQGzn9iivzt1qXA33KJC9W6KF82TLXf",
  "key18": "4iEKh7uBs9NmDfHsqicbjQDYHNSS9KnuehdXnyMpvpqFgysnxpTA7aHnjN8nhbBaFfeQXxkQ88iQTLFhvHg18KXc",
  "key19": "3FbGC4ffmpXPgUYPcuMCBVsTa8naE72XHKcNkiPAyW5dW1HAyYHpWMBWzrzFPzt3qgsU5EXLz4v2RMZbNfYYNchD",
  "key20": "4AgFxeKxmHb4zggTa3Zim4KMm83B91r1o8mHP4V1ACN7CogyzdQTEo4W8awYCVg9Antp3ywzpAvbfsLV7cEcGd6y",
  "key21": "3LBqBTsdiKdFMKprLArCu9xb8PNDmoyZdMn6Sc6U3x1CWowUKdaFshbUmMs1JHTyMxFPZPN1tmDaWoL9ruk9mcxe",
  "key22": "31C6rNowEQ6DB4Tf9YhbbKVQy8JM5ScxtKEiAJzsgARa9YzVTCWJotZqgoznKjpShYLt8iJFS3yAGbnh2Z69uKQi",
  "key23": "2sSd2gt87vL3UjQD23fBr2uVBVraW4vUagaGY4Gy1LZiCRLk5gFkiUTBAYjDLzsGCAF4H2DPWp4fRrN1nH5UgHzT",
  "key24": "4FNG35RnuGhs3Mnzk1ij27KqGXYD3jrwHaH9S3Qpyx1oDcCDiKh5cECSpGg3tk4byuWKcoJEYJpxrZTARJFKjgeT",
  "key25": "3Q1MpSewa5qjwTRBnj1z8QtUmg4mQUMj3QGL6bjCyS7WarYA3hWKVv3iozGsn4ykUJhbUeFfrQV58ixASuzhfPJL",
  "key26": "22CmAg3hD1SvtRMx5qccWLA6eoxiTpwCfBCLxxvqUd4bxHGGVfxzQ356Y1JdXtNMXDKBiajEq8q1NtYMXtoLYm14",
  "key27": "AumuhmTDgusEiqiXJThx6AGgUwtDaTpzin9maancF5big1tvqGbnTJWKVpsaQX6f5aX4v6aBCoVYNDtfRge1EfL",
  "key28": "66cGWkc4aivT1trxKnheTXZxu2hSZMcP6Z3ADKSXma8NVo2waVaBo7zgTWg6uDfrh6H56PTmP4DLaT7oSV5iVoSK",
  "key29": "4YhQ6WDwyppP7YQP92TZu1CnrjhCfd98zekU2iY2i8tk7wYzK7tL3MbBV9FLKnaENRqtGEybdQHQakTBbURXTTgX",
  "key30": "2WhF3M6oCnGQ2kz1reyW2B4356bRGzkJHopphcqPSx78h7CWjTdFK1CcLpdEAaJmdVvRpqRJ7dG3inS6gDXn44Fn",
  "key31": "5quGxY9iEGrt9eHhSwR98EJkEu9NMiDowNT5Z5NDD1wu6g2eTAwN4Wp3HGZ35bBmk8ZU56NX9sXonGZ5RTXAN4PM",
  "key32": "Hf87FmLHcM7Khf7UaVBQsPUwyoCpDH5EPQRjE4Y6ox2MTbNKkaiaEM82ekGBiUritcTL5NQUCbqydTfmmfrx8LT",
  "key33": "3fySKEU76LoFv6XoSYDUJDqZvxS3Rm3KBmsTrHmL9MgkTT185gQChgqTCxVdbcxLFCRbuSgwxopf1ScK6JenF2JX",
  "key34": "fTHcYUNmCWKsqMCD6FAf2tuquoX4ifdCCCerjfyu9ruCRWQ6NJdKYASivwdMyVd5ZhB22HB5ythBNd1WHm6hwkU",
  "key35": "4Ruy4ShpP8yd7H1KTuL2RAUyYP8why5tCHSTs6UzeJydJgyEPeT19Ms29GhSbs8wTNmxduo5L93QhW8oQXp3pmnr",
  "key36": "3BYN3dbRAQrFRbJbGnyw8ehs2UoP4DWBkaFCs8YELfqJXEtJ5Cf6UA3JuvxA7FsVU4xGqfSJ6961nshLsQZdDKbo",
  "key37": "32TrxgKkzbJzua9WgLxtQBgV8LXqJMepJjkxmLUPuonEZ4bW3DYthfnXJEmhQarUTG5SwpySugRfsZ95f8xAk3r3",
  "key38": "urhMZDNUD8yxESwKpfhurxNV7cwqcif1wajEot2GMvAtRboGKqAGVm3bt3A3FKeT995ZtDucxZjUsRNmEWupsmA",
  "key39": "2vZmCZB37Ezyh3pScj9mJHs8GQ79zTVsFvP6ouQLrf51oZ28vykho9aN8taC6m8dMYVuBF2exnzq5pc6wPwc3Jww",
  "key40": "4SSDg7i2cEKPAPuL6DzQuhHNvG7kNuPb3k6Qgbzs7nLiE8p6mrxvWAx64P4nnC1KRXr5wkFAJUj82NUHCjGq2FXs",
  "key41": "23N6n7c9x83N5xHvozovJwZK8hAcopEXZ4rMvNu49TwQxxW32bxJShy9k1aADMRtbvKWZwGocVTYtSomfwx9PpmH",
  "key42": "2fDKp4uGAS6GjdxCncgyZc9mTQ4oEBS3F7GJnr14yfWP2nmWF7eCfkh8bYrFVjdMLdXQHddon8435NL46PfMCn2h",
  "key43": "5MT6Ta1UNsKnqfTzbJajFKBoQSN4W12chHJCAsv4ZAp3uazz18sp3mTr9v84B3eiHevkXU7yehMs6BmGngYAPZAN",
  "key44": "2vk6K1PrQ3uGVby3xec1gLxV9m1okKibrWEEENLz2Sr2osMXiAS9UCaA2ZqYyw6ogBDHt64G5CQafZv9EWFpzc1k",
  "key45": "4g6tT2wBZ2hqwNHwkZ6Nr5tCkgQySGj4Va3ZQohA7iRHAYJzwcnHFiaXnptptaUhXngobSRrSQzKMGrKBZ6Y1f9s"
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
