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
    "3RnzcMMf2ULPrwdN5T9E4Gy9uW3Km8wv8tA24Vo8Y8W9QDbnFXBcC5xU7tpcCtsCM5zgGpoB2USyEJARj37dL2Cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYAtExoErip9B3qsyuSRYiowujU3SiNXHfqWyj41MBVtkhLndwFCAvcpkQM5fV7VbBSmQtqkdTyy9VMDXKocxhu",
  "key1": "4p4HXG4Dq5HNQaTqLQzMNycL5omsDgojUtgqTzmfdRvebCeiPD7E5nyUmUoFjZ7CWcoxzHn1Rr5zwQD82STQxrc",
  "key2": "3JcLmdAXE7u9jPjgQGUTxE1xySVkTZpPjwmnLbtsrR2L9cBsVPRmZmRYy8wFiQC1QbWbpCP2qanXauZ96iQ2vFWE",
  "key3": "2TFX5cGeKiubCeFm7KfLwmFsczjAp2F2LeTDqfvMNnAysDnF7DRQTzWcAEnU8msqwoDS4zd2HJxPgUsryZcANzK3",
  "key4": "3mQLo8UZ8MUqpfNbCTpScKbvLxXveLaeCUDaeRfoQ45f1EZCUmY7Vjww19FHKUR6ML87jG4UfEFgCbkgwDMD5mVG",
  "key5": "4CY5YfAJei6Tza9qNpfst8wkZVbenXTsd1hvzi597UU3pjNN9sQ64ST3ebTwZ7E2xbRanZu19HwNAq9P39sxty7T",
  "key6": "34umDGSCQRxTRCFhUepDP3mtkgwjcT2iFbcpvzVm3HUvXQZH7wpD3bkdJBa3ePTFoVjxx2PEX3XassfMumdqRKXr",
  "key7": "CbvK7EmKCTN2qs4dr2KPTKyACnMSrSuhFUWQPuS4a3e6GSMWMexwCM7n7aRzUz24eVXAY9XXJs1nTvHzmDzBn7B",
  "key8": "45WrDiDHCJkiNbBudH7DJE83jnmWqbgh4PLjRCbkaHjBMBRiaL59CwitJhcP6Hb5bNZpv6QntaQtKWnxstVcfVtY",
  "key9": "2BnBEYuc1CsKfiiW4cWofUHkhz5EZ4AYAU11EL2ySmA4JearHhmLL3gvhd4zEadZBWctpWDkZfQM65XLPyeXbg4B",
  "key10": "3h8TD39gdkj1apc4ZoZAWQMHikviRa4d6FBuEpyJCsaDBPy1joxkM1Ly94vU54KGUAyVfU4vwxT3SXiee6APNXvb",
  "key11": "62dez8mGKHYurrP4AEaWMzRX7ihzknTucKUMJMt6RfBPep2ye1rkCDE8GSQifyudBeuKmN7x1xPvW23Cq6qW625m",
  "key12": "4Zbo11bxqSVMq68uTv6i1G6sx3K8DFYWcLMNrZq8ErGGssQ5mdZneWYdkh2MWeKaCJmvPxKMKRt4t668vwWi9faU",
  "key13": "2atmjbKX9YhNTkx1hnGPF1aL9azkfwCmi9NTg9R1FLV9AxPyQnPvA8gWNeZhGNVnTVUbi4zgqgKkqddfdsDs2RWF",
  "key14": "HYxJFCeys1oZkZh5aKATQ9FSBQXZxn18YpjBu44xbsDysLGb1FLxvtJoKsLLZAyWAbUj3RjtbFm3G6LjV9by4Dj",
  "key15": "4kWJDC5YDSZokfV81Ckf5TfjdzSKXDi4x5jzKaVXVHmgF9UHutSvNXExmMAvvb5efpAqJNudnAt54G3FLp3KoygJ",
  "key16": "3sxXUZZzpmx32Uxwb1T9GyTrhNQL4MtS7eQqdk7cmCeaVhwBi8UPrhHGd9rFoBZfcXfvHtQNciTYpidQiHpwrtx5",
  "key17": "4baJkrmnv71tBFASURGkkDGuzjPjkxYu6S6CKRcnitNVd2uVNxQFcZBGpXfiSnF5YnP4VniAU3cMzux4umV219A7",
  "key18": "g9pxkXWHfmkREptECvifto2NiZRG9rQbN6Ba8nBuQCYZo4kZCXARQV3YCEdt4gzcSyTLSTQCdm1gWxGKpQXQeNr",
  "key19": "Vze3yEb3aptckXrzsP7sQFn8d3sJfZPGrurtARXTJdQQYrAWL6iAXiG9FSKqE7iXt28mijFagAuqB3zwvvq7wBa",
  "key20": "4maW1b9aUiWHTfT3naALmDQbG9t4WFLh49ahPckNzGkfxsbF2QYpVLh4hQXDV6iUePGJFzdMc3CYy8mMkMu5p1qm",
  "key21": "4ttZx6V8Mv4m1GZPxRZRupnCh7qBhBw37RUo46fRvZvhDXcBY3AeU34TX3N6JJS1F5LCu3ja4Ce9v5khuGcdQE4j",
  "key22": "2LsUpMtMWejCgWUoz8fXTYy4nMCBEUcCaBZqf8LhXBTaPkFy6cFQFfkJhp7R9yqvebrUSrMDb3nemv7bUmDhRUNV",
  "key23": "62bLbnA5ceMKhRsrnbwhpjPaH4ygfCUDjyA1ZQLrpMRgsh4xXJCAaV4nkEnb7iRDtCWKEfUryMUtgnAtr8Kk4UCk",
  "key24": "32Yrxo7ZHAGQWYjfGbhejFWR2yy6NJ1qCwE2JJVgetpq97ivRmS8XARDjBH52AEVQq8ZyAGot4bKUrxNJYJ53Gsd",
  "key25": "4NZSRQ1H6va347qNCsSXy2WC8zkS2wWjRcxwAcZYMWGK4mQp5VCh7HnE6KGqy513b78Gi9HcctX5Mafz86mm9SWd",
  "key26": "3JKaxF6QGxTMPYcAcBpZaN5w7nNz9RMpmgCT9z9ojngn8nm8j7F1xRfbsmxPsde7kDKHbRwani8ZNKWCod2rK89z",
  "key27": "3Qost3yM9JJu5sDqbMJs9fwVpAaxar6YWdXC13pvRZ2KzFSh6rTdSHF9SAgKxsTVw88bxkwtLLVvb1tyScZaCTNa",
  "key28": "rzyH1goAw21GkqwXWdKNUWvXcWntd7ECwMtjgZqcyMdQ5mbD5QfbK3HDH9QfncprzUD7TqC2rXxhDXtzfoGioKQ",
  "key29": "4NUgGPR4XFzqiqjEQn4KscWEVe3wDt8Vz7gzBsaXKCgFHjRXUVusCGKowQbTKi7kkcdw91vNxeMRtGaSv3ecMKGv",
  "key30": "2Tv61r5srKHrkfDMpTzyNeyHAeghSinWtJYyuyAp4ctJyqxEZorgGKGioGFY6dNs5egrCYbMAdrCeVcAPapAtpXi",
  "key31": "h6oC3Kbuy4tjMm2qVdd2garcSRQVNjkz48UZEoY1MTvLJQwktBPC68FBCBPNR7jpjRRCY1mgDpzx4qWDFsA8Wxw",
  "key32": "2ECZP2B727uvKgSnmpucTUF1Ub4v3872ysxMZhxq5PBxH36g8Ra75zD5VJqYjmbPm3ZXB5XHzznyraHZ1jnxYPXM",
  "key33": "Ft7a5khr1bn2RKtXvmJgrL7rv7iL5BCQ5TMLnTYf8eiDxpejKh5vNmpqEEmrs4Bi5v9Hi8BhDZ2z5TpYwiAJCMh",
  "key34": "4o5P5u7Fj7KJSMTAUzuRwfaJZadLuUkQ71M8j5N6zJqpEuoXja5Jf5vHnZxWrBp6tsXJkDqFadkz7pQhEeVSJhWj",
  "key35": "5bZyumtHPywavsecpLjc6wxUSue49FPHUbvD3E4wmNQtSvJbJnUd91VDTdpVmjw2D8CQXviQbodzXJg33DXWo9EC",
  "key36": "VuwEkNUc4J4AJEnsd1je69XQcGS7142o86D5nqEvZH4ZpnUCzE5sveHNVgzKKwYNC88RTXPvYsASVV34Yy8rsD3",
  "key37": "45m1pAfaLuHwzJ4LJA7U5Ssyz196g8GQMWQtzdpuAMP4s4FhhaP2T79UP5uLvk2ZBfu86RXn5UUzL36bzD39cjzd",
  "key38": "622jGGxG89vp2gHtz8oMfDsWjgbTHQT9CLkXGXtQqYrHrZ2BdocWsSB68cCqaDmRvnRv54SE2VgRH8aYFibce6Q",
  "key39": "2SCeZE8iUtowtw5cL1cKKUB4S3bMjRFuWe1QVrhf76KQ22TidwY1NaMKGKmqapHxyt2WtdVbBGvMVdLMEMVrNtUy",
  "key40": "4fciYT4krxjWpEmBBifX3wJtNHA2TkygzeKFXL8qknvUt4yyXXFQYc7yaFC4XWZfu127o9ph1NMBDzbyjJxS68uh",
  "key41": "4P5Bu6Z9vjBqwDoZT92R1v5fchrQwcyxCWbW6y455wn53dDmGPuac21MKMVDQodcapcH8o6tuSY1y1jg36GvLe5V",
  "key42": "59ZwnMmQbNaS2jpbmpSpwk8b1oE7N44csmfnUo5be3EXnfWCLN9WKoZMomS1XaxhfgJ2Pp3ZBVMiarbGz4erEgGA",
  "key43": "58oHRstrQ5FDFqjNjSywBZUezF1tMAtDfPaVszc7sFBaurQwdpcfmBg9dP752dzttwPDJ5XX8TpXFXo6zzydm8Ff",
  "key44": "52X1UpK2XygVy6KDMGBdw3sBAsKe3qo3q8MnreJ7WX6ypwtHorZW121pThWL1yuHVhhdUf6emoUXeEVzuovs6dyD"
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
