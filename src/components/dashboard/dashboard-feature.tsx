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
    "QuinLRXzX279NEykv9f7Gmqzu5FYGfjeD5gjZsGvziE3fk9iGEuvBdBrm4TPRL35DKPhnT7VbuARERwheKiE1HN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431qGTRuER4MqXiFMiQTZNzhbDJE6zdaSwN1rsaCQJbDY3SGoenYiiPTmP8C22sGYgbJZLs2EWtgugcxMYYciCFr",
  "key1": "5QCxCDiJHpWXUV9Y28zQYoCdXYUpiLjsu9K7S2NTmKHxTwz6zTNjKbUbBF79LAaL9HwK2uzpbysdUjarFWd6whtq",
  "key2": "4AeuYcd2S9t1bXD8c13GUgkJ6xuJgdY57qKKe59rayCDYuQVto1QcyyCgnCpTRSy3jiWedbn5HLcyEkZY1cvpN6k",
  "key3": "2dkyUxS5Z1ttaQaB4yxFb7toPyzo6WR6SGkuMKNa3YbGJTuQ5BJ5PdeADyprzj4PEGLcwKT4H84qngMgYLQvQDAH",
  "key4": "HYcbmywwakAGauEXVNaj8ymDmfN63xjYrJvzJMjAUzjDyv1XMvJsD9E2uFLgr2NxHwhWX9dJLXb9D9LkGRN8bM7",
  "key5": "2E1saqKs6btfNAcdcVt3rfM2gMk1HZ1zm4UU9S5x6vCfjW1phGdgQXaTSWMURgnxHV71Es1AgyhrAuftmyJJdUSr",
  "key6": "2po3sBuoMqhr7C4T66voHfj9iP7V8VrhK4QXL2ffQqo6jfKs9Ssa4QQWjafLKXK8wcbu4QmLcPPacidVWqNEQaBT",
  "key7": "ggAU48a8akDLoZ4MygUHkY9Uq1nt62SLhLMBKCQSSzdqaLYW43rFKcuWv3mg4w2VsiYsayZjGe374aq4zgCD44H",
  "key8": "65DHp5e4nJiseRRoHuLDuGiKs4KhAMgGwooKfdzHC477yTGLVLD5tS1UVNTSe4jAdW3TsHNNWjRpLSE7eKC66o7X",
  "key9": "2ZyqKJGUq2bBixw1GZj9vMk9SbdsnXGe8TckHgRWmQdt43FR1R4bhZmfpVLLUNw9BLFKzddkezwhTweyusFtWACF",
  "key10": "5zatWmheniFXcGAWxkc3vt3u6UYN97AqWJWNNiozbVm7vP475cXE3y6yjPeNhiqvWP8UuaBZGiG7srgnYjyqHBP9",
  "key11": "53JH8GVMkWUyFvyVTirGhmaUUQsfQjEw9Fbp5Gj6MnXZQvqgFkZkkj4nJYrTDgQvcpFkdkBESBUaFeHHEk3aSPk6",
  "key12": "51TdkYPBYP9eLPW7wZvk2q7q9qo7pf74ekurUDJnvtgcAfYdkMVL7Vp95mvrx8rWpJ1HsYKe6YXtgAenqkDXSurm",
  "key13": "2mwM5qDyvL2tNS3NWySB2dfCNNHkYEH6G8TZzXm1HMSWUrwgBo88hJhutdrcTarCg23jGixUxgS32oEqyLGwrkFV",
  "key14": "5Yor1zpmm7WV95EVDAKqPEiEEGsN5zCGfSNRhNTgVSw5qnx6eHeJwDZwhCZAwrsrzCTNVzikQarzLZVkcHWCPwE7",
  "key15": "4CZN4q6ehutD6gmornMELUa8cgAQvDRSX4a8TXM8qry1WFiYjvpnt6RDJ37p7CtMRfbujiAdCDnYED9WgRspTF1p",
  "key16": "58y8t8hWgownC5F3q8KvxtZxfsH94Zys9CBZLcdrj5TcxXfb45VMRL8TXZicndXFGUe2vBSyUhue8HfaD1DyY5Hi",
  "key17": "YCJdfzkpSJCmsvPtYPoWN3vK7BEyuDe6kNUwuFxAca4ZepaWF5tAW1LxkzSxQ3Qf372mL8pRuXKvE8udEd6LNm5",
  "key18": "uxnzcY5nesFWPR7BxTXRfVh5d3xTkVfBNkg3MgvBD9Uq4peet2ryjojQXR3p5NQUnLQBhFFdFizJGg4xcvZ8Ztt",
  "key19": "4JBkTmazMtM85nTGTfEh2TL3S6PzB7pCZvbKpEqKJHgnhe3b9RbETC2GdS8ckonRU3zGNhAma7moL5uDfXaMC36w",
  "key20": "ewLpygimGa5NHrRJpgLpa846G8qENLLKmpxcZfgf2ibrUWYtjZHu9ZGxD2MQCepDrT1h3EX2tqzegycHkinRMHy",
  "key21": "3gvWaMatiWcadzA15YrZqc9Amka6WfmTNq2S3ynESUQUqBfxZM86MtCybi7y8BTfS4hxqrZqBrKyco2dudNvxBDW",
  "key22": "zQkhXYTAFKG2ggJVFTutdHP5K8QTJmLBBCQmF8ej5CY14CYVeb625mYbjdi4xwC8hyMBif3ewCoTb6oNEa6Mi5f",
  "key23": "5tKSQvth9q974WAGLdGVBVTVdmucACYoTFUpWMpLbj3jg31w3bJNokD3sW4yBysap7GmX7BEbEE4z21NqhUHUyB8",
  "key24": "4vNnaa4sdPWQ1idegpeYtbNVyGdH6thiLcShcVKQ3Hs5brtLfGSwpqqiWR3kxWX8A4uBLxwVvfjgCAghh7TxK2hC",
  "key25": "2PtGcuAb8ygTBnrjnm7xeU9yoeTvpZxfF5mcKr1M4vdSa9kdjLc64q9KgcqW7stDkiqLzziJm3Fm8sx7Lc4o9WNR",
  "key26": "3XgC9LCowazA8VWPmk28kvdr7A7Lkt5hRA5ZUAv1y7RKrRZjrNVRxvQFEoixCEfqUuLu5b29hkzQeH1pQjssy8TF",
  "key27": "4r14kwHC9tbhUWgEFR4QnhVPnavHRdkvSuL9dxbNXCzpJhqiqv6uZsBKf13iTitxjZ2ybkase9xy4mFiiM13K8fF",
  "key28": "2pYJ2oRM5N2jkV1quPFo3MPAqhEq3NeTbfVsiVeXf2FSTw9QqsVeTiZPb8Un9RqJNgLQFSEfKiYK1Sck99XExWqZ",
  "key29": "dgn6Qt8jCKMLmNMRjZYQT3wwUCyLt5364hDdSmWE76pcco4aDh6dD9QsEAFcRqP3rW8WpKYj279SS8U4uHznWdu",
  "key30": "36fV65CgYWvDJRxP3JyuCWvAvyfwpGXWBDq1S9GfvNUxKq7bba46i81Qmo8ytB2JpuSvGE256Koxh9J1HhneCyhF",
  "key31": "2HXyMnbU6Q4UMppUKe4dabqSEomVZPnfg73NwLn3Cv8BgDMjiNAD5tf586pn38NFPbkynbZfAZrJzaH72Jf41rKo",
  "key32": "tsM5CFojgrvDDLpxoqxK9tfWVq12Vc9KWUDt1jn49REhao11EFfMvWKYNyXW9arJy3KZyNaRDL8Jmyo2sXiaFU8",
  "key33": "4m782WtgXV3akF92NJMwuy626ZyiLHGWqNJ8yw3MVBcMfU7xM4YXrvdurVEPFi9jxeaXbmFe6Ybdq1ofDC1HFPWq",
  "key34": "23q2h7Gu4oPyiEwsEEJ7ekP1aPgbhi13SP9hrhtSWQXep9drVVq5iugBuYoz1noBoMvGHjhjNFVrtss24KNHVNTo",
  "key35": "xWhuSoiLPP53YNcE75s4q912zzMtf8v73sSbsp7FwsiRE4U4rN1wZ2RCAYNPTAPrb1gS7THAJSymKU5quFceRGJ",
  "key36": "x6QwFM5Tc8M1PghdbM9C8YkYLcjcMNg7KcyRpb7gjrqHcYY7RVShxjLFrzkvqpAvRM9jHGek8R73dX2fGHhw3xE",
  "key37": "5fthifLCvBRTmtQoZB3u5C2sEtwLr8Wdd1k38KiF6mpkC51mkW5mTTFQaTEGenLDjraSGSg1gsdERTZMVNvWYyWa",
  "key38": "4iUHbVoWnMC3vCrLz27sexKVwSkBzH6mcMwPvoznnizA1k4so4ixunRsnvWwYo1GYCuRosPDkkx3YyA3ysEqk31a",
  "key39": "2jVPYYrERji9m7QC9bqW1we4JG2TpkPcrrE8SYW4STDFztGWNxG1ezTr2nM4wmgsB7b6181XuXH3KZjJg6CCLBdi",
  "key40": "4DQP3nQh13LLd3yKQiU6eHvChiuy81jvSmmvwvs1PRUP2E5cCB3sx2mBUmkAHWyyKYDaihbtZE22LH8D1oDiiNEE",
  "key41": "23UVjBD8dY1QSaVYc6m6gVeUohEGtdSyP1hAycVW8C8Mw1U6qenVTu3MpRixrCo2MfFYsebsLuo86sZQQejecjpv",
  "key42": "4aijCtmayFPyzGGLEECZK4ayjAHRz5yRYQfPW6EsPYrEHcYCKAezFyL97vWwKZ3bnCAGmQT6rNqfWzLdeQDNrEGT",
  "key43": "39r9Nsaqz2MzoxsypZKM2KJq4dY172z6HUJhxKXiYbcsp9x4m6kD9Z8MJgcMUPKaNX6LkzTzP7K9uBtsxq7frXtC",
  "key44": "3pW4S4zqqjXvXiafUKsJyWMLW5cXtZXjEm2TjzqWryk4mHQbzZ9z3A7h356X8Wx89CRke3fYx52uzFiTyGCKwpvB",
  "key45": "n3wZp8kisVgcjdAmWtfbX6pebJFH4xyTPzn7ZHsdhHk21rHEh3wsA56vc8sjxBKE32b8F6hwCjdvpXEK1t8iahp",
  "key46": "5d2UYqAYkheTBN67ZJosJ99SXwdGr7aLVaFTSUzK9RDQ1qzXzK5Hk2e4HWQvoYgHgH7mvcH46cByKtFWqJuPauoc",
  "key47": "338tUfArBzmfnJLsguNScj9NQe4LX8YqHYr29CnbDi6iK2jfCygsCfXdFWKoewfkhUPtwfZsMjEvdfFckVewAAK9",
  "key48": "4L1gE6xTtmQ1dr92qSXW8f9cTTeSq41cQPuM7jRMiZdgWa23CKwyxrqYM7ECR5tsGB3AYVkFDprx4GakhpanzbfM",
  "key49": "3Q37qDqSVLf53G39kb3rqWiaq26urfN2YFK2b6xUkA5zZYPpuYTkhswoJbyjuodUQkaEjxZrpuLx2ucsp4ErDbUt"
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
