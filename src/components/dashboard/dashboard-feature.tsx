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
    "2rfPhhfk9HyD4cQUb2K3HLHX4BVb9dkKdfNa1rz2DcWMA5zCZHSzs5EhAD8iEiKJJajnEPsXnVSmBwEvdNvGKFqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5diQEP8pm8a1fzQS7dYHQYVVzpinT2eBHuMdJRHSvpvuQmdtnhCjUs7eACa27jiCwzE1guYYSXNBjgkcSW4d4r8r",
  "key1": "41iBDe6GDskje78RfkXfpPDW9duHvHQT2HqGedwLLFqA5BDGpnRv5eiSuQXCjMr3GtF2j7LiLYachMfCxRY8t5D5",
  "key2": "3kmi1xbL2iq21vWxhZTfv6jTieyQUj79iG4TzftRpQfLn9gKkTQ53PtSjq322VZUdXazQdKUK9qYd6feQ3NP6jv5",
  "key3": "8jNhTswdeH3pjj583FKSWoibVEt8GJ5G8McZwfkApv62r1cBn1mPJsn9sTVEP8Pfd6Tts9VDumxPCUX86cS2DoN",
  "key4": "2AGQBcwuD5ztfcZT1qVP5NzAe9inJ4Z6tFXe6xV4q44ANxDTPxCkezFwFrT5yefF3gfRJD5MqN3jx8v3k5L2odew",
  "key5": "7DagtUnNDWZ4KRTZgYd7hGLkmWwWhgNUxULsS5C6AGnbwdVRWuhW89XxHjah1QqtYemV3ip8iicXBJVCXb9BV8w",
  "key6": "3EZzGRUNnLmEr2FtgUtACDFWucoBSSK3WM2FpqS8VW4UDGZRqc7v6UfGUu8SqgqvvS8bkCeyRePKyfGvzwYiVaJQ",
  "key7": "5xke1L4AUm5N9Ys3Uxz9zZP1esf1RTqAvr5n6M6RP9fbm9QT6XtgzzTDsayDFL4V7kEBgCsNhCiVXiinTp22t9qr",
  "key8": "2Wwr5TP595r6FMj5jXtefPaxXEoXyaHExrPdFWuJUNBGjQ5BtkSPKyc1dE5KW1SkzcRzDS6UiEjszwugbH4kNPwh",
  "key9": "2yMhTGEAULpy7r1oNSGRrnCEPMAQmKjESrtyweMjokih5GPKYzdNS78kdXUMrEwHwLVCRy3f1PEz6P6zsuL7iqQw",
  "key10": "5DjcjnoxQUmK5Jsm1NfjQFXovGiUT2tZYYvnVpnAxNM6iH7dyU1QFShhuBF4i7gscWFpZL1SvRDrpTfoytM1XKq2",
  "key11": "3mna6PKNqJpeKnbagKNkdnew3dasZtDQ5G35LkAe8StcRqJyyD7Q9keTeUqDviwymuUFvG5HktV8oTXayUTkq5g8",
  "key12": "mDCSPRbDj5b95ft3Xvx491sdYRpBdaco6pKEXVn8mR1xrpS6NpEwghp8HT1omvfNCnf5gYVgkeNwtWKyK72izvR",
  "key13": "5QMM1yCL52bKwNL8iadpaoBwKEyLUaktHFfjxYWDFeJzUhz8D74Gb99pkH1kSrhxbHwcUr5UavJfRo6nuqgMj4fv",
  "key14": "3vpkZ8vk7SrnLq489Ua2iRrx8MURMLzT6J7YhCMpiTuprNF5FLUb1WYvHrKXQ9kaZyF6nftizJbmMobL4XuHXVw2",
  "key15": "3Fucoh6ZdCcL8iQsPqBW8B1HCVnG8SJvKRvnwYMiU2DYd8ThXn7TA9ZcKEVKBTMy5xSj3YkR9EiCgijjvM3oF6iV",
  "key16": "goamuuGBZtfmy9YoQYUjUCXsmzUFMNRz9mU2EVswtHMwjwi3ucQTSvCibhATFZ4xL83DxuS8cuww3SR7onWXbJz",
  "key17": "4i7GYfySUP3F9Pru73W9dgAAeAAwu7RRt1YxVyBNuErRsBvrPsGjFJ5cKpUVfDQ6bZzqiZKMUvinzPw8whhkTdWJ",
  "key18": "622fNECGw34gMcVcQFmrk8xf9WBWvRabumYPiVRtkbticmxXDK8oRBf8RoKetvSHCdk613Zqj8KcSPAnvMJ3tkjv",
  "key19": "4owW5zE85puBPWSzrTdBdqhkacqkhHLxxwUWDv2KU1PqdguV4839pYFdUe7mkf4oshcMjbNY3EAuv5JNmgh9Svj8",
  "key20": "28JffRT32GJo43Lk3cdbCxq4rND7SiDFVvK1FBMdkoRtsjzz5SxkGMQp8kooWjTKuChfiRhUzMANA85UpCXNboFp",
  "key21": "4eHMeUy42BVf8goJaVRkTZzqe67cDcvefBoNCWvqxiyjHjDGkuZZFwdBnsU6T6mrMVsWTagRubkUsB3xd4qg1UfM",
  "key22": "5SY8yMk895pPmWyvhuuXvJZv2yBqZCTcgJau3C9zNUjmyiMBHWHLvJMwZ6rDFjpYeXvedE1h4cKupgu2bX2HsFgR",
  "key23": "57dugockbpQdRKGFUQ2fkYkRzfCxG7TEDK4K9syyMPUjfKwLHT9ipMUeMD3orFBB4VsgVVxdGW3TSachDLrUeDwZ",
  "key24": "2wUiCreES5N3gua4hCm2yfm2pPM3817jgzX67keQPr3GEV2sqKAVfYXwD2qTE8Z2oruVYBGQEPiizFvTrGWcKQsq",
  "key25": "47em4zBadQfyZtrK4tn9ZYqXgjdFZnVRXyv6SLZGbmJ2YFsfFhPXXJnApM3UfrfpnkQFQrbe2b5SsY1Gr3UqN1jN",
  "key26": "5eNJ3ty9ELeapFBDo7io4VYgMeYmrNyLW9TsxTnEnQgc6FuWrKJ3ofLixMti1tEFnrvu1w2DUUmUtNG3YQrJwSgA",
  "key27": "3b3CmZ5SURfb6cHiE2m1vXCfZQ9tR5TZwfFk6kEH8pPd14a73rXjuBvfKMtNrU5pR3f3mmRaCMcbHfr7iYopAqBc",
  "key28": "5a3cz9mSyzunXbX4KD8WHsCUdXUxdgHkg3wgVu3izmbGTXch62oca5F9Yew6kjW4gco6VNkmY3TnBseU9qqNRt6k",
  "key29": "5RKL2FmRFPJc61cvES23hAhXpZrRsVVqZoiMT9xd3Q5urdArQAen7DrSTGMTmXfKXTpHEzZRHXeFjGd2xGJAxL7F",
  "key30": "AuC6Jsvi8wimmK2rM6QHmp1mYMHRjYkmnC8rmxi9uYwSug4ATftXCvqhtV7JFbSSnbPj29BWZtgTD25mLx267Jb",
  "key31": "3FebRZ1iVvfjZBimUUzf8X4WXW6zVkqJnv8G6kT9jRuWdBG3DJGXKeY7Ee8qyGKwmEbkeyNe1wy2CX4R5PKNtH4",
  "key32": "aewS6N6DGyEfnGgyap6nphw6uQ4z48CnYAbDuUMtYodGhtydSrWTqbMwBc4eHKqhV4xBtS1ueFkNTC4XHmPMAmi",
  "key33": "2cbGD4KDDax4Q9ZFvLwHYaYyY292G64JeZftTPbRBLvHFNjZaPsy97zugpraib3SYDCoxq2v2T1TvN9TJSzztBAq",
  "key34": "rDvavJH3R2P9LPKZeWdfto2MKkNeCXBqBfkd4HgjyWPGP4U4YoWhJiNDNd7ghMbKXwsumxB9ur1CZkg69Z1VBSJ",
  "key35": "5KULkfFR5ts9vxeWY3o3vfnNpofiEwtRRW5aUnW5AXrx22ddNnQvRVkDHw2PkCZYHUcvPtLu1jqnjCanXk8HAFZi",
  "key36": "2y1uuBUkcZujCCsuwdiQSFdUKSh1KmTNf6URzyo88wbpwUh5E59LGj6SMPVYbEZSHit5J4A32dmrKhb3t8X6iuxN",
  "key37": "4FH6ZPFfrcuiWWznX7SaB9SysJQfcnJ47dpVcGdWQUDon5AhmA95dSaUnt3GGpYcq73rsqJnxd7kSumG1umXshsq",
  "key38": "4EYCv2DwsnVqsLLzHyVDuQq2SmaJonZGpThHtuJVhSgftTXAQrHih5RNtd4gWpsrgyCmPKfGLyggpUhywmwjgVoe",
  "key39": "5pShLSRed9vWX6fziTWA5h48SPTUkJoCsPFkbZ7tqe5oDR6qqsZ82z39kwNhD478xrwFJt3gtxqjcpi9WXoZ5t4L",
  "key40": "2dHKy2gLYm2AsNfBJcvndvfxxTwtZsuL5NdRw1KWqF1J1hJf8Vjm7vd7pmBVoBLXC6WZmciGTFQm5N2dofbyWUjM",
  "key41": "31HAftvRPmgN5gaLMQyNeF5Xpcb3FnbUJRrKJ2NYpckJqkpXcR5D5gYsNxdUXbQM8LQNT7tinkSyjDYwMGi7RDFH",
  "key42": "5eeVadhYXPFeYrWhgL1WakpyJ8KHeW4i4rhdmyWsEZNETzzwMfx8KrFLyd3tj5Kv2FVHqJj5r8SANLMZ4CPvXoNp",
  "key43": "2DR89SJNorvjTW84B5fSLEnTr6r24hyCGDecYc2LQQQgcxZe5K4wbZMxYkPyyromZakFarfHVjzenRrRgphKRrkv",
  "key44": "4itKDNru3jhzZiiNMS5vdVuFTi4qgBjsQVvSMgUVi8RWXZkW9ae3uSnQtEWSzFgTQ6KDpxxmGsWFJnuZxiWs7FdZ",
  "key45": "4iNBwK5dbekcxm2vTyiXkqnTCTmxrUGDwumcFPQsuvoRJzHbd8Yb68eDvrHc7b9SfLE5T2b5c9iRZWCtL7QQ5KJ4"
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
