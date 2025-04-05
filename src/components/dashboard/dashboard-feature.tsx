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
    "222aWGbimg5pKZXrhNbTzr2F8AjXCWSEjUEMWsb3rT4gqEiPtvSVBV2yePDrs4F2mBBmEgJA69bMViiKP6eA8hHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUmRrwCWrPGCQn3NZPjZZXU3bTyjKGSc91LwuMbYWDcjf9EQViQFW79sXGc9BaBDdwX7bp3ZZBYHXKkY2gQTMYq",
  "key1": "eXbikwSQt2yuYaDnCMzmL116dC44f8g2iqGRErrjevv7AuKToK7hG3z7VYBFrNL9EkDYiAs1McQPE4kYomX3LjR",
  "key2": "3xVHLjKNC7Ham4RtqkLi9K8DRvJS77b3pPePrsA6nX6ErtY9ToZ6XQo6tSFvW7BV5AyZq38fpfnfanDiJLkDmqLn",
  "key3": "5PoLzQgR5NrvfoxFmjiT23gJW4tfjEcdRx522w3T3Zg3ekwvMeWSM7HdMRfiwdBuNWT2Ems4nanxwz3peri3nucq",
  "key4": "5RZnzRWMxQj5pYSyMDnVwQJgMhStkgjG1LJnUdmjnCgXPmjG7iVvQPGZv3ALfBES3eDtYWLBdFE3pAktbxtyAFmk",
  "key5": "3TB733CBk59kvWUXftZe1azJ1zsLdG15tEKevSBQct6YVcpHYRnKqbTuK4pgLJcMgE7hpQVQSDs56wN2CVGt13Qb",
  "key6": "4PSdd9APxVetqQ5dSJbgtPnSATDCjPJN5kc8Wigfc3pySiPjz6cGdmJDZPRt9XUuJmu1iFTyX6WsM2PRkT8JZxzs",
  "key7": "37LCJ9DrCq8tJXxgrpwcRiQ2ALjzN7djq2XuMPJ1byK7Zc2YYo2ZzXYRA3r1PirS65rs3eDPajUAv4hg4oEyZMDA",
  "key8": "4MUupbzvXLXjHZxA2nT96E2hwonTVmb3jaTNYtqrqnmxnJFF5NdwF4955CCNuRyCLqyeV66Hzh1S8CwAM5QWrt7g",
  "key9": "2iKy1TniLmsnxpk767mSCG6RNwqMHNwWVKp6icdQXrUNvPmw3K8pdHhpCBEnD4ExLMXaGXerQEwEgCGtkr6YMFGZ",
  "key10": "EY7mjg4HP6R8wuGgHuSrb3ZBPYGiRadc29oxZuxC8UPWYnFRn6i5UbvYf9s4EYaMAn92xm51q3K5k4bkr6kCqyG",
  "key11": "2FKQUMTNhjrrzW9eyuwDPbQcup8zqTViJWrCZ5YBGJfjt7T46Cyt3b7SXyGftvgNQZPPzsqgpKh9Js4ju8WXZMFf",
  "key12": "2BbZ1W3bC334tTRzDi2t2zVbs5awmGZnD2dQEuvFih4WbfVJgDBJLEDvuhhkQnX7KDjWAGuz4vocuuFnh52GpJYK",
  "key13": "4v8rFoYuZyodJ57QtWGKZFteeukBK5gVf4gtKrqM3H7SzygqjpHjbpzDUYZYCLivc1U12hXTzurT4RrxhqzotzUE",
  "key14": "22FzQxcVXKyoTC9yKVR5f3TmJsDc3wwW9AgwL89LbtDYfcLFeEjMoACvikDPTXkFjYD8f2WJGw7iHTH9dWXEJ6Ln",
  "key15": "41aWvjzgWG25fAhMYU6rt7x8Ewdp3d3zokem4vKkjUHRW1saNfAa1QyVF6gYNrzuYMSurq1ay17RcpsCVWRDUnmL",
  "key16": "mvEfjCWGAxkWjxaginmpzRDyr81ENC71AMyxfnR3mrWW7oyLMfqCUUc76Fy13mutu37cDAwbsEvms34X1wpiNgE",
  "key17": "4Zt38cvQzmHynV6TdpEjkv9zNhGHg5hhLJ3wpg7aZoBoqaYnyr9XyzxkKLteaJc2tz93t4LqgJd11dRT92L3GzKU",
  "key18": "3a11Eo2rrKUerhxbaRidYpBGswFmeDXxGuvDCWii8ah7AtEY9L6RhM28PiWFQnzvpGLMHwDeuDJzUPdbHVFMfEjk",
  "key19": "WVf3592Uom6yyPwbMsKdFh2KkxSef7iXXFV5p9NpBxsVq4miFJ4bTx4Zc8K9cXNGRG3ohQqQbGzL3rLfKC62XkG",
  "key20": "4xDCX8rwQX1Lu4zytRQciPvJrFENHAGujhQzBzTjArXDi7nimxKoaDnCyBVqv36s5BBtRmtBPd6rmubjqoWXHPjc",
  "key21": "3ht8rTHsnX1F2DqRsPL96YS643yDG1K7MbGwdRvcm4T2ky8CmciHzAkSRXGdkEZmWQaa1erizevumb9jNP1KKHWM",
  "key22": "5DyrwpzYK6tbw4QpqMDEso72UdWsbTtYUTJHimUDxQAnfgtC9YkouNvg8zDVmcEv3eHM2hLjhNYZ5AriByhkFpgd",
  "key23": "3uCq1LACDRWun2kzwBnsYHHusZE8xMyCmxwB5CFJQLciNCYT46WxoPDvNMmY6bd9oeLAzfuyiMnqviuYQX511X2x",
  "key24": "4GTVGw8PcfSPQwJeaGop6tb596YLy4U8nsjp7WVgetxNheZQHYyDqVAArsCSxbtrU2zs7byycKUDUmXSxbc4fSt2",
  "key25": "4oXNNYgaQs6yvBTXBY4y5miKgR5Df5wxE68f4kDoE3uocYv8pcapVRpZ33iQzPicJMgvPoN4LZpaPUyRkDpuPh7w",
  "key26": "1AKSu5EgBuy2KU7agez1HBXVtswBNVVDaweWqhR58GXjJPH1yeQ71McUQuNmRVhiPci74AdWrCicNzes4NAymLM",
  "key27": "3urnHAnNx15yThuvx67qxNpdKbYGUo8sBqWHq395uDCJSFhSEuyzd4oi8ntq4GRttnLiT7EnCtqtWsZtABNW7SZg",
  "key28": "3EdMwCsBJ27zxSgAp9AL54Hpq2QCzMmJBbnpD3k3tKPsbKT4pCoJSmEC2oRdvc6jetfFFkotCb6yPEFmWJf8Xzq7",
  "key29": "3pbMoGk9BHjTZ6Er2QwGLYyLyAHBKLyJtfFQxusyGJ6DLTwrqDSGHtqBNnkyPv634Z8zfshzBTxVcWFdv9busZ3D",
  "key30": "2M5oMVzwq8EVLDsFgA8napLVM63HUPrULQfkXVwXxf6kiG1FKudYN9AfJLbtAqPiMCP2wtQPbApuD5dBXZ2qiWL",
  "key31": "5DdXt6bL6vw4eiQL4nZCWexxHpReKoU5VRsAyMdmvQyV326aZSpU7VWDp4TgriQ4uJxiH5H7K7TBp5NEogppagQd",
  "key32": "6btYk72DNjnphNw4xfb4YGwS2QfJ2AKrayKzGmBf29b7Encmg1dsQYJAHuZcpVQuDVmsGeRMzPZTKFw4ExwUCeM",
  "key33": "29QGogyUksTAoJb22UTCqPVToodhtgSKJpHXuxKhNzPvWe5WWkusfAkfFmqhUn2me8921rkgjiB41N3sy5MwqNdk",
  "key34": "3DkiGPmzXD1p7tPd4L9uNN7Usvy9V535D4Y9515M9t89LauA1qjoPgSgAxG2r37cDEds766Bs1cSrtWudFjpgg4T",
  "key35": "58GDsyudEtkywrmka3zwV3t1r35vgxGPSj8xkaLiq1caiUQpr1raQoQHDyRgsb2WJgswvwGTEYkWBK8q8aQFhs2h",
  "key36": "2CVmujxv3zH2hJrfDPGYDuJNevFHHZZgfQbB79EZ5ELaviZpCY2AzVX2HVwqfix7CHyzGMTrEnqNeBwVsBWUbuTp",
  "key37": "3CtkQUCQd1dmfKxaA8PkWUS489BD3dVbVZEqdTmPRaD8GABTJrf14GneuEWJxyES32M4Hx6bYkSuA6THC1D9FbKb",
  "key38": "3jLQ5DuAsNg8tYpsonw1tR5myCeyKAM5bQV1xjBwDLvivg9QrJXxNoXgstazve4RHdSqNmHJDBgHHhsaXCx6h3yi",
  "key39": "4yH2use45UbBA1ScnxkjU4HepW1afhvq7EnFpFiZEiCDQQQj3vciBeNqKkw762MttiwUjGnjNip6YfTex35oLL3z",
  "key40": "5UbdMC4yYHpJSZE5kZJzWrb12tGfzYW4VMnduR7MTQ21oq73RMRdnDzTab7fMyVi6vfvmz8pRcmXhDgbvQSiSXzJ",
  "key41": "5rxRmh2RTCmLBB46r2M7jtLuLUiuW7JphxNGJvZqa9j2g9mbBeAnF5mLz3JBjgV8hkacAxNSkFS5qZC7DyjyUL25",
  "key42": "4gZQycRBbE3tEi9jLzffsTkNDNeEiaZ2q2tGma9xCT6T1eZKTvbHfPWCxFhdvNjZjfUjsRRqwqH89tzC1SFpCAYb",
  "key43": "gpLfyvmRtWMjfezUcXnyR5Mzpce3q8yynhhSVBzj8NJjW7QQvK1ZArcfrxxjcaS8idLtJtyv17roZxQpDCMMcDq",
  "key44": "5rZ92s7LXJmwHLt93zwMLDJupdXitrSNYcJURi9qZaepDxHfXyMDf9ge3737Q7RcVe3UtSTeX2SwUFG517dmcwVr",
  "key45": "3i1n2ec8vAc5tQc4LBj4YvxzV1NpcbNBjUoJ9KRKLS6MiqABcrdXz1cR7fkg5ZgXav8jh4U1mCqpNhKcj5kB3oxs",
  "key46": "2Ec5wAYH5hXJSSsqJdnioQvED1BMWvXhVmhnX89wnUWpEWW5fgpYbVCiJXbnRCe3uexJcfpvfF9DycFD1MYeyuCy",
  "key47": "563CAnYmxc7SUbxJdZk8eTivGYrbYNhw26HjXNuGWWzqQPXyfwNdjDecfYYui2VyZSefnkSeVSVDpvTNLLAfj87q",
  "key48": "3Gr7MH7pdTMi3ByxSkJYy5EsqEB8Tp2mcGaSD8aoSxQDHvt5ff8FqYsHf2BNvhqzAytmqoHo9pzQacbi8syeCdgi"
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
