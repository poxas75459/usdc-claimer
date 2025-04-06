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
    "JHQs9p1YURck2yK38i1NX4M8wFDv8RJUPUFXqdp3SJJCtYgbXL1Yn18kNiB42ppXGfx5gTQeYwSwazvzJc8mPyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nAnoVPk4ZpUKgdbLmhG4kmc2YZyct9WGzxZQFZMoiSWRvNYbc4RNC9ULLNSX8WLmsk9kUd4aCRATzb1UaP49fGu",
  "key1": "2ELHtLvUCfehVsBdcHwNxQFdnTnbi3YrdGStH8RaKXTCU9LjmmtooopNLYusoR6WicTN2D6chKMZrPAqQSV6Rnco",
  "key2": "iXsLUcWiD2ipcK8Brx7yqsDv9JU8BFLr6DMcEH4ezXkT2DHztzhpMD18GeWVSwTXbghJy2Z8m955EKVNDDQREZu",
  "key3": "4F345PZe8o1BvCZkE8sJmnxDGoYrwkNoJBVDELLNccSaEd4gbKrjwNkwiuVzmppa2UyxrTii3KHUk3F1iV9JQn7V",
  "key4": "2AY24dKhX3i5S6SycjaU9zLmqNvb7N7yezYzxBiYRVsP2UCWh9VxwhRSyfKunCYdPEnxbLDESqQMo7PgZdG5jFd1",
  "key5": "3g4s7H3wjTWajCUiBzcfMuXJ2DgT3rjN65LY4LrQwcA1zZM5XtRs46WVaFzuB7w1mFa1W4K78Vxgno5xw8S4s3sw",
  "key6": "5jtMXLVwP1KnzX8GyffJsWj7eW33PrZau1S6gzgeBKfzEbYWRsDiqBiBwLNza1tDdQ4JQSvbTv6cmUb3ujGwEG1g",
  "key7": "4YHgEz4nRAEWGw7qY2PAdhht2bXPvf2KRYpgwPY6Vy2mHgPGvPEB9thkBoaTkCpdtZNo9n6HHZHX16mmeQRm1bHD",
  "key8": "3cHDnDk5Tb2ogfgKZzVXxHKvjL7odh6zjprV3HxsYmr2f1Zn3zFJqwXhC9s7bRn2nU862yDwaACFZ494mv6dVQvc",
  "key9": "3KtJNqyfEWWd8EZMaoYbU98rBjrjcQ1C2DdAYMeGsCAUxcrsPz9CtUrUmrXggvMau7KNhjUJWQEwYkUx1vU4qXj7",
  "key10": "3BhKBDU1a9xfdgWeaoZv14djs99T315VMjkUgW8o19c6hEqPSXrLAtECdieLggVf5f2Pg9QHDuji4jB4u6E1f1GZ",
  "key11": "3h31oDwSEPGUpFHkEU9bhKpvTTX4T66jVUeYyu9qnfMF6f9yZm5pGV78KsMsKnm3hHALCQhwA2iCwZKr5MRBWzmA",
  "key12": "3jZbDRVjpHTbJjhLjjKmZtax2kDd6qUDXXAkq7cYZvhiZ5LQo8aokxee43zYppLQmzwHTJnBEArxZ19GUjZVwumz",
  "key13": "3VNacLN6YxCLjpDLm8FSFg8BqgdDRSswknhjLdkvaNFKAtHNNSfcHXZsAaXHutM2Je9VnwaPSxS6e5AD9WyPpc9n",
  "key14": "2hT93fZfxdN6MZSKGeudqG6o2UmsN8DjUpFUrVdjBneyjzENuAtLdf1t5omsc3jcBmbc8vq8VWcB4eE2Dd6ZE6Jf",
  "key15": "3enFrP4ji8kM7Wc48NTAH9yf7BPRSY6EZ7L18KC7NFTTPvQDZp1Qv8HxqD4toMvjsSpejuiLY66wec3uoFZorWMc",
  "key16": "3wvzeUyuAKukvtcJaF6SMx4Wtr2oBRD4ZqQJX5JZdG2nMHrFnAYSzXvJGBfXNT9uQ9EWejzbkQYAuK5e8L1RF3mb",
  "key17": "292t6iWoVwde65BJKwTr62UeKQa2fj7QGhYb4CmQdHpuiLaEbBCb1nudKk5w27sQAYeSqaALE7W6R4PLtCeu1bHZ",
  "key18": "5S9yxACgvYKtK92TbkxEmZFjX9zBYdkYjyzPvveD6jBnP5fk9tscQiCXpVg2VYeVdG3Ce9duyKPStieeH5YHKQeN",
  "key19": "5qbWnu75jKJNM6wKN6yPvhGEp2tHw3mqyEnJapRerijNHGbgj2YiJMsGkQBzbUqQiL23K3cGDaHGYW4KRc9uZxNN",
  "key20": "5CJfysDotb4FNQy7eQk4h8RaV6FtJodouKY7uGNZWR4pGT4yg8yVEsGfSTSizXnmgC8DJdMZJVcp4LQUTasjjerm",
  "key21": "3pVUDMsHY9puDYW97SDeNJmQYsFQQDo6SepsnDp9B9yRpGv1f8mEzwGP98ZbfaqreLDK1kHdXZ7vG8XcSNmob6nc",
  "key22": "EhfzbSe9re7WfLmM2kbvCgUsZ7pgSz4igZAZaJ1DQpk5NigBS9kvPi2tnJ8kQvhfs2Uc1WLohQLUHjprawBJRD1",
  "key23": "4XBWyBFAWebXQSWX4pPMTGVhnGxm85U2oNHPqU143w37hYBYaxhcXxTb51ciLMbxy4s7xbLMvyCEm3dvKMo6SG5L",
  "key24": "3AyEu5PVhyqsVJVptTwmna3UEQjt4Q33EnhnEri9EaNAKQgDQjsvebwUApxVWcypYmvorg7R3GA4ePNwnTuHvsdf",
  "key25": "5Tf4JYSZqFXeiGDpfXEjBZ5R1Y5VEvqt9cFYjfzXPurCJUoFpmM88vrcwg3WfrPmjVp786dZynJAS5oZqiyeTGP7",
  "key26": "5kiXwCo65ZifLifmxV5EKhDUhWvYgqD6tz4G3M8hVqcAxYj7AnEVNiYXCgarvC5kqXgzo9StRSbSTimZyRLnt8Jb",
  "key27": "5ukECMo3coCVpc4NqBdTE1p5axdSK6W72zoj9WZquuCPTst4cogqgDFpwVooZ4LU3jTrrgRKodaom3Gsso3Laxac",
  "key28": "5a4MjdM3fQrSLjWD3Jhjtr3e1h1sETojL2fUvxnEKr9gnsue759dRCDySiWWXQePd79kPP1RwZNRAuA6yXT2K7iG",
  "key29": "3tMikBmcWzAduQcXGeo6nZ6CvdTUVe3mTqtM1kcjc7P4NYDThknmFCjQ41HbLSQ8HoCLc9RDYwrwys5r8X5spgx9",
  "key30": "2MbMRXcEvuBWSR9K1cNMwmvCpSyxyTHQLjoNqFhwRJM4wY6vnaptQGsyxc21AG7vfturjK1vqRCMEEM1hoU5z5BF",
  "key31": "34wwYeMCv8qMrvbXtcus8VMjsuihmej9P6wh1V8pAwZKsa6Vr7dpZkVPuoB7cvY8ypMtEPStKUHirAEVaNbtaycd",
  "key32": "2PCbbd15fbZ8ihdjBHwFc3yfFVYLu5LWTiCwfxqNG3CFTQmMUnW32dcQbZafpSSaBztkCpWJj33h5592q9BAV5rY",
  "key33": "3FbUGS5oUbhqjFXjQ5tiWFoHqJB37iiAWNFeHbux12sXQQwvLiETLJwQkNpqRfZL8VpdV8JZ5N2rD5UgRywi6SZs",
  "key34": "AXsvfLKmSaAfcrmZH4Wzna1RhmwAAkUFyvUmvfC2qp2kWhFfqVNjNWt6XDeLofkBQfSp2Dbirt8UnZC9TTvQ7dp",
  "key35": "sgAsH3A5oWBc8RacGsrWM5MLNKDd9Qy2ZdCoyr2GTerSeyp6LWMREWUj5cVMAV5yAfeD7Lwdgy8R2YC4UV6PEsH",
  "key36": "48Cfru64VGh2Yw9wVrqEzNSVQjpEsH8XWMoWXbRB7JFXbegTMQA3n76Fa7NtyQ1uRCSX6DqYmJWNvFHEsGeTZrFr",
  "key37": "VufqNadwCvk5rymxowKnvxikNCDEytngoZ4ShfF218p7op7rKuRoW3ToLTWwubp83vLH3GfoMjwumthcD1rbfej",
  "key38": "pPvWMhrXVwBQnQsT6vg4c7EbYhRzVMyYbEoxKWSELbgLUEKSyg7RwYSLQkupMLCm7Jqq5F9ryEn5x9YmhDyCGYB",
  "key39": "2aRssbWbaXqgSo3P3FhzgM2F8ijFJnZMxbqppaEyqJNPicserYXN3UuEifDuAuzH7ZpybotzPbTBVfg52sz5eCzN",
  "key40": "5FdsgREiJjDbD8QamWfio6FQ2kNnud5YvLQpWe2NSNj5S1fBJawHpS5m3idEA7TPSzijj486gcdBXLS9xioL8w1L",
  "key41": "13K7xKFGVAJbxJCvJNUb9rKW8Cp74nBT6U6Pj2JvcUVTAVSt3AjkSkbWRMtkrK1idgUE5HsRK2RcDo9sTpzuadK",
  "key42": "3XVCoqtfvyzbPN92ZcuCYqM51pmfuebBTFH1snPwhuGT72qAApkv3pn3zDG1vBnaSC9w4PUvpvwDEMm8yyrgWJze",
  "key43": "42VfW1ggDUNhaBzLDC7Lnheb8rz6P5B6WA5veHnvecS5WiiHhUdPXjAk9sc59WWwCgBZauDTWrvh8Q8c3SAETNqx",
  "key44": "4PA8fwgoNHMj9PQyed9tUhyf2J1u7psiCfeHYf8vBnX6pfkAvnMqc4R3QEx31ND688JHonkyLa8ELPKukoWkozXG",
  "key45": "3n6px7mBSn6Q33NNBLYFpdCZA2cTYsiHbF6jUhaw9MWydKowaBwzVDr1Zmb8zWD1zFUPMwyDXaE9eBqjSY4FMpsQ",
  "key46": "4UjUZ1szBpPaJJXprb8XHrncc3kfPHrHSYoBZYCeukMTHz8ngQT28C5VMyTYj3U2kLAQyyASJLzq9W6UuwpGpevH"
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
