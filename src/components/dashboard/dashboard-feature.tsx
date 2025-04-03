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
    "47JdsdSy8XXZDp7nQ7xxdLkrq7GbhFxgo5xRdJgMJaL4WC4qXrCiUPoNZQi9rGzveJHympoVDcSEiEzsZjQAUmEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NW9DBwgT1UdAjWM5VGN1dHUD9JnkiTntKTuhXvpU2V7qa3ZhUbwHVecL9HFRRg4BiHAMoDVDnJotcFrQjAsi9gm",
  "key1": "4LF41nvbjpfbEN2zEUCfveUW9Qc5BmVPR15nqRaLcwWrMxYu1ind12DfRaVARuU4mEHEKq8SSuSDe77LEJBnwV2S",
  "key2": "2AHnBD41tyc8QFQzxzvbkUSssMkG4UBoNkfYytUVxuAtERjM3QLCEuEXU4d5S15ZsZvJEKGkhm5xgwwC7YUB2nRt",
  "key3": "3MxykXouer5SRSXq3tdP313qyo6DzpDPhva8QSqVqc4C7Dic7LeG8XtQwt2MTGG89hy7iFXr8RrYc7qtqNedEbjq",
  "key4": "3fqDTNRxxG8HZ2YJ6e7WuF55FaWp3szS8XsVYWQBAHSp7xPSoLhhSLxUL4e8bHSXRkfFs9wN8hEiRh55pRx1HtGD",
  "key5": "2K5ZgYp7PLm4FJExeVbrrT5A5VkSTJtKzk1LPia9iN5XvyLc4Xvy9RLbWTDtXXMf6eoyWRQLTzPE6W8R6LkKpfp7",
  "key6": "2J9Ls7P35LeWtZVM5NGngo3cxTqZyZauy6X6zLQf9eS1fSsusWmDnDkmhVHVsj87163GeuKKAm1FiFvsyHbV344H",
  "key7": "5PCsR4nHHqeWuYtMch8hxHKy8LLZTLEQxmG5WjANB196YwxcQFsKWbJnroKQXwSSs8UmWtbtzR58NpkohRJsAXCS",
  "key8": "4osDhTnDjwEGDVmKeUNJWwYbhqpzN5s7QYzcDRxjr4XEECpfxyVPrTcPDaAZa8pEJd2Mcopdy9N1uyLypbtyKq3q",
  "key9": "2XijHviGS1vnrtSdQt9H47qDGyLGs7cgdUrK2PhoyPEaXZPBQvbdT4edTyHKC19c1EuKVxfvXciq6dyK2yTNuVfm",
  "key10": "msYHcZQMbw1dCaa16zmoE3NgfXP9pPjAwophxo8SRuowV4YbFzD73SvJfjXatncb6bA9Mgd1QeEWEUsnD6nFzbM",
  "key11": "tJs7UF3DkY2CN6Y4AHruE1XHgpoaCzc6N5q9XhgEof4ixX4rEb1k6rJN4HS2DVJw1ozcjmue2pGYRSWDkBW2cbT",
  "key12": "5xAQ8NnV5MRR2HnAvZ8PFEG6q1PHvv6dTkKPdWkMjdYPHgJPg3KWrUkLEh4w8rxmhgPUzzao1tbZcoSUmhxgDmZ7",
  "key13": "32GCQC1Xn4eaDuywRC2zHAAY1fVaKR7q8mEDQLk8gHztdmS7UMK6S6sGaS56TcVpHjCiiyCB7ayqQQrLV8mdRZ6Z",
  "key14": "3cNk3UVwKAZPmRtsUY4Ps7PMupeX5aDPBiWan7dfN86yeUwTaQyTMEN7K5sRN5Comima3W2ESBwGXKiejmNwVZC",
  "key15": "2VK74CpevuAc2LNvrgXxShR92dpuNL8u2n2kB6N9TMwCxshK5vPKgzsEiD8hwW61RkPKYy7TqX1qbu5TKzz1suEB",
  "key16": "56fnPhaFRsXi6GHgCbpsLGAQdfAZGtevUNhervx1TFeoVnp5TTr8wdPUuWgubpU3mkwKv1DkxbGDkkT3CxJZVPJ7",
  "key17": "52N93ohMYsyFxhiK6w5kUv1GdyR6BajP98rTaHzJ9Pi6sxGGjHCCz2BBwoLDnA1NQp4DF5FnmNQ7XvH5Py6Tgwed",
  "key18": "2yQXuMtKtUpN9GHuf278AuLo9hKicLNBBQEZSdziDERVVpgGPqYxCVBWrgtFHjqn6iLKfVyrtJDhRHjyDR4f4QNq",
  "key19": "2DV9rej5oLKyq9o6UUjQzXFE7pZNgY7VeABFnzuyukGmS4R1tzDQ9qUbWmzzdnK3eKmF8HrJji9kCoYgR3pWWNY6",
  "key20": "3T2hD4mTzGE9yjaATxwTya4MiCFYY7MFGSVmdcY5PpQgc3Y7Ahb5Zk2AUJv4iiLuTD8xGpK53frRMPh2iYhVSjUF",
  "key21": "4Ddy3LkjaNEPC4HfUX7uqHuUEEdFFptzkndiqXBbseSNG9MLR3tq1ipUD1MrVCKKQPANjb6baYq9vTSGYSNsHXBm",
  "key22": "2kbqer3hpfWa1g9vrBUZcNkaSxpTYyUfcMLtjFeZKkYHoQ7DKX2tWJDiLLkaLY6MvpNp4PsgNA7JU6GbZYearvDD",
  "key23": "2zxEA1JnoWoP5giJ6oUnskWj1mxt9TqCf84mTW5nsBMYpoLfzHeRStKt5rcNfmBGRWUXsKwshVAsP66DzgajkwHH",
  "key24": "5NaynMzwprJMVuwLGuMAH6gqw2oE6jkhmAzGS7BBKizhvfvK1sfnDgWXt48f3mK2SZgADtMUVGTQCsX5cbSuAnhX",
  "key25": "3xBthFa2fc91FRAUuLPzhU41PE68rNSm1z6EW61hck14M5pfc71b2nTuhwBskKcS1zZuLPga1E7kcCt4X8eVyQX9",
  "key26": "3ZDaTxbysYRNLJfpEaN7jv5miY2H5G9x9p281KXiwZdeXYqZDGB2WAjnhvDRZMoATnBFeyzhQHpWgbLFoBwn2i29",
  "key27": "iEnxUwvMH8CH92MzLcJpANxptpsZ3SQwznZyhXeJZuhmgT1914dXUeCnbAAMMBEmfHB4KTcqLnYFbk5oN6jy35n",
  "key28": "3QbPKkqQoNi7ZQp9PbNueXgDcptYJmM1LCBimteCEP5kXWbWVDmVnGphqxs2Rjj5LRjgK6uBMz4dQbPn8r4WLr8q",
  "key29": "4TpmFncMxV4LXe85cj5r5tAFFvvgHCTczHA7ZvvKjzetZwyaWPwTn8W5QkwEdFNHxTyehBnPfRZK6C5xDrKgnGhU",
  "key30": "4tZeh9SmuRUaT9XNpQX5uoqaePHoVFtpbnMYJZuQ3TSvRN21txhvKv8pzYnnnCLcQSHyXHCTt7D5WQZDNhq6sDjh",
  "key31": "559a1z6gkwTB3dyqEKZDvnABp5oX38ghHvXwoEnvybBpE1uRY778aTE4QSXyorqE1R5WzPqyPJt8H8s9B1DNsxQL",
  "key32": "2yd1eLSNoSwDTEcK4ZNmE2iETCxi66dWeBufQmypjBWbuA6mTAnTkAcWmpe9ipeJuCHVHrzCDVhUjmqDBPRYvrYV",
  "key33": "5T59tci3Q9682xeGqZPUQQAXpvvakMyYYf1t9aQ69XN85K9iNiN7hfsG5GBYUM5VocEXdJD22E1z2b7DXrwWvHN4",
  "key34": "675ScrXGM9gb5ym6cvDgj3n2Na8rf189Sjn7vTLLLLZa6UpkfLLurQAqNqtvsNgJir3rzEv2cyYWgWQFVd8myVjs",
  "key35": "uJuSmad3ivivXY2ZpXmjPC9EGKuiVnmk4tqWBMDrAfSy98dFLHVqQbJ2kZ8CKBzhwZbs3z13YiZ8eYkbsRKXAvw",
  "key36": "2BWw6jVnd6HpbzT94sUPKa6UAmNJCFem8a5BFeJnmjzkSFVRt5o47H54UMzGArxBToYBv8kTr4G4SuuxGPNxH6zv",
  "key37": "4EX8tA1YESNxeAzamPt5nF6D4dmPQUTDAVJvTQyDQ5SNV3ori2jmU1hV3fSW4JH2xMRs8XCMwxkeJqkV61DkseDx",
  "key38": "53EWU1VawB4AEjNBGgdzWrpSSNza98cABMkYiP2umden9nQUb9jCh1WiDScucDo5cnL8jcCxRiftab3HaTUHFQEM",
  "key39": "4qTcGRXV8weB3bVjFpJ3byS7Mfm7FsPJ1wRBDWFU3se8bLaYjsa6YPC5qyDn28bYaWgewJD4dPBDh6GUWSmBm6W5",
  "key40": "nxF5JaoEUtYKaJpxAZ94cSd84D1YGw5unXbEPWDs2opp9DM8MkqgmgkMGiGwdSswVEP1L2kokMHhbaRVjck8SA8",
  "key41": "C9tL2QGfmzZRtF58aiQBhbFTBg7SY2XMwYmG7KbthoTBETyJH84zHNfqy4tDnbYCpD3pWZRmML11RvASbVWS2ZR",
  "key42": "3f3K6YtFEhuhxkcYV97ybNQFhzmARWNhBWQ2uiBGCXLavW9xFFJzuP8RUir74wALHK6KmC26XoFqkRTaej4MFsQz",
  "key43": "39HWmnHamXmEWjf6Nz1Wjk1LLMJM786JyfVjw1uzZc4RLRry2ovZ5iP5bdkdbPesEvBD9sfPjWUQLU1iPeBQUpBr",
  "key44": "5D9G5sNggE8nWwexvcbbBt5vn2xJCs6mCrxRaQ7mcEhtGMu67XGpdHRSSqqcNhjzeU2nrNsuxmF2paNWpTTZnoBC",
  "key45": "43crs74PEJc5yFT4rNsbmyWaYXk99jbDZXnK6pxW8Hv6tT6FyjaQAQaCbU6ZgSLRcWVBbyEAWEipGsxV4oDsAZE9",
  "key46": "5kJLVL1pUaBvBPbX2UKsc1MVF6J9g4DfnH2x5omjSniMwNQR6WRuW5cM9noxQimX4sh5TmujLEV2C1K2T5cyJY1T",
  "key47": "4RppBb79cJaxU9HLzfCsikTzxBufuqtGTwQwe9dUagrtbDqdfgUnwTWPmyhnhufhxYcdHfYvepnp4mJsKZAcLu3R"
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
