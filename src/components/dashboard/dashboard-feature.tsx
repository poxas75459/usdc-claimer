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
    "3pSZprW7emAWdBFcb8pjbfCyakSN9fNT3BJaD366RTVJcWM4PPGmxco5eQkvNFipiyagrGCrvRLLuCYPXZnk2TKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EgjtjQbrf5zudRokqcRqdcuXi5MbxezhBx34NDGndPBPgVMp1Tb4Kwf1QXXdWoP12ahwaS3M5sM5aRcx9kT4Lxe",
  "key1": "ub5zuE6SG2QjE8UJqcqqJ5rgTYEqf65KZWY2rwdwwLXbNnw9QrHz9DZUtihgCzkQqXrAzMWypsTFRWefx9mzd4r",
  "key2": "tjDmebWVychSKcgDtDVAGbu6ZnsE61nUBC3ZZ7Phu5KrrSUWgWprFLCT2EiwV7pvK9363y5suCaryb2XAmCXXAh",
  "key3": "r1FPJYyJJ47AetMe3CwR2M49fUHZVutn8BTuR6TN13hMbqqZzptfKvWqkUZCa6Zyh2gv5XVztVZzpJ7oEeoLypj",
  "key4": "4snJM83J5fDW4fMpQMtK6jSNYtkKvKrVhwdfRR1VhsmiE3j6jn6zq5whyTTpbfaCVuMKhkEzqETiHDi1TZVA29eF",
  "key5": "4NPsXN5vBh7gNvHJL8iQyd3PuU3kDDtx7JkvNGgHB41jE5HJbb9jepwfxUwr7TA3AEE7to5QN2XsPf8PkaM6SU3H",
  "key6": "x6FEjQBM8Mdo4MeL338uB4Tubw4ZDmmayPvmyk8ZKyUxhzmTJgZtuSfCnXfjFQAJxK8DqDD3LPge8k5Mx8miiqJ",
  "key7": "21eNBpfN4MdGiKr6bpT8r5LR4ZRTVVCSZutK5knrVBvGfmUA3yB4MdqZ7HWZKjK5N8omABSP5yX9CcP3Hd8Cua6m",
  "key8": "3JzdGcUUKSTpiAvX6sLv6Q8FJNRW3YnJoHbm3WJmxqPL2pAkcHyM1GQYbg4p4mwX9RyYDLr6AHvGnUfpfiT4mR63",
  "key9": "ZbWmPRw6vc4dgBsXpfQQnfNyU5N6YwsNofpbjVSyDu4m8XAH3MfUrYE7ZefQz44CPGUi4CmQr1x4KUn74ahAzPK",
  "key10": "2p1wDmWaciEma3bSFQanyFzH9rPTBHMUg1YSzRVrwTiiYiGx2qPQkUm9LpJWGgbdhDCngeFUcq22GnPZAUafYK5Z",
  "key11": "549hSWkWDJvpjFpnAAUrTFPkqm97yxt27AazUtFAsohYV1YxPmxpQTrcKZozfJfQvdZU6cqj2DED2TYmAskPtf3J",
  "key12": "ussLNVvQxXUo3TKrT6xqnvrk2vvPjVFRgLi1SbYg4A8Dc2NDvAbrpVaZH2UMuQ5pVzZPE7Dp61H72hSJvD8u8TL",
  "key13": "4GKpgdeg1VcfZGK3n1CFJPCLXk5CsUN23VwnRBBBAkpwcf33AkXSxfLWqtDXDHjTfudPNjdRFqbSixbRqb7vGoq9",
  "key14": "4WYEg62WcBMV2gtMmmJPurmkMg5CuP4scHUx7Xk3PRvgGyNNx6iEz8b77rnKTK8uxaGY5CbWWYabePj72DF4ArH5",
  "key15": "4kgmApnKGsQRVhy5pZ9FqtvPNNLNRT1v8pGWS7RmMBThsj8d4UERfkG31kxZ1YVfrnfZ2jG6rc9kaj4TesM1y8V8",
  "key16": "4r9F5EhwS5iRkmhwHKDRw7gdqJP9iyjcMqV2hCQjcXoeHbA53Mo3Lmm1GN18sPNCDeqLjdKdoTHKqZpBcqkyY5Qh",
  "key17": "39VXMXaktef2AqhDkAvsh8oK4gtXVAr4Nz792aBC1q2pixb2PiUqs94pecZ5c8Hnwt7znhy8UddedqDvBgmHAnj",
  "key18": "2E9kRc16hZrHLUFqDrrN7q3FjnSH7Sq8MX2YaqYcALfwf3qJbsW7ezQbJGKeaLA4ZmmGJJPatXrFnMo8CViAZRiN",
  "key19": "2xXB6L52wnzmbiELuYKUacXTJwM5FFoRfxxTY7PoW2442dwknpDcpV4x6NHMozHC5Ys4Ax9kqCey7fcyGpyp2Ljv",
  "key20": "5NumuD9MhWMkn2snEhzrF242kjz1mUroFj6D5WGkmkusTSPKUrDSTraFMyxyRRtJZyDgNtaaFo9BedNkzPeaAGwJ",
  "key21": "3WeYZHWcgCfbYEdSdCJw3oNQTUqJd7cJHfPqghCakiwQyy1kVUNSWQQCmvpueZdk82moamqxtd9d1CCi2315cXBi",
  "key22": "2KvN7NLdFGwHHnMPpW5hWXfWywV1o6f25zCLs9XZ2Y7oaMzehCfKHXY57sTTZtVQBUvbAHaYiEWkWwPtpNjSaXmo",
  "key23": "5s3jyKJHevL64fU6WWCdkuCRBAN87W8GGzrUrh2R7v8HXoMbj3wjHXSxuEzhMw7LbxPQAi2ADok1gsRaggejTSeV",
  "key24": "4wn5FGc2FWcvFcHnQYL5X8Ertyghx51Qqp4ihrVwzTQGXs8V1nGYicXATiik6v767NKoizfVTfLK1LZdb4wsH1f3",
  "key25": "3h5DwgSV68A48iY9U4BHqbVr4KsLVj81CQUYiGBoJBrvvKMeZuiqRgNwa7VSX7fPZ6nVkqcnvhVEkAYeDLghxpEH",
  "key26": "255jmuzgPtrebotzsnSudSXZoZzcxEjdrH1EFVnHVkgWnH6p8d14Qe1BSgL7PfpupEnkPtSDcexjzLnKrhcV6MMf",
  "key27": "2WP3p4cMJPLE5579BUpDvqsybg3DwmB7beXaPD1mVpaDDM9nSJLi5QiAtQ4C32v74eJkRAsuwBdyzGUQrNKrhShQ",
  "key28": "pVKV7pPD45JaZ9ZwuZERuKF8rJSK2LKyTjZXH9XrMV1gLK11bFiBMEiEY5bWiVwAbfg8YKM6rGSp1aA5S3HY2Ni",
  "key29": "2hg4ELxENLg5815TUCERkL1e2kYzVrdzuwEYswG21LAxAVWx1vRrFAHXikUmJFYVJsmTtKGzdc9WCpHgr9aExRcu",
  "key30": "5obGygwQsMWUUGbDfLX8U8ia3NhdaJ2e3V2Fqi1N9oM2VR5XLQyHw48rFAHRuxRQeYoB5R9DqWT6HWit278WTieJ",
  "key31": "3nZeacDQkXKBAErtjbFyJP5duZgYM69nycTiY7hXgSt6aCaLmWPQsoo3EzrjRHZobWiH7tyPoTsMie7RbaaZCrMm",
  "key32": "2YeNFN2D7KEQdepPpGqQkuPCALmjJH7EzEm5QuLqTgVn2PeXgZm3sMHwW9fWNkiqmjt1d8UTWTUZ9s1i8KeVL437",
  "key33": "3XB9NZJ6YWTTgWLRDEi86phmMJr6bhNggQygN5HSYeCWePWHZpGFtKyrT5B3vr1fTbNFCKYaUcyGFs3cKcmxU1ky",
  "key34": "5ipFrN2iEbo1bGkragbgUHq3xnw8TZLjwakB5ZKCqsfzw8QpR852YCgnkqUqqkLGszun2e4XwkGnTExNYAUFALZK",
  "key35": "mMiz1dRwcuEtgNMhNmZt5t13jfzVD8DgGaJJRSGWy5aPR7kLA9x9iUjJGKKx9yvEAjJJcdpwtst4xPq4E7PuF4x",
  "key36": "2w6w1zQUwMypgX1dSGXspBxJHXgg5uPGQ4yWqN8fKmVhLs4i4Ksmb2KqJn2MZoYBAhnbPzaXCzz7bL6edGeKyMiQ",
  "key37": "4SzQ33G9n48Gu4GCRJYdw9VdhnuaNekKydReo9TEuGioNFV3cbTCkSMBUtR34z3UneQJ3GKvT8GYF2F6gFh7Kcym",
  "key38": "2r8Ut7M6ibBakFNpaQyGssvvXT6ojvbW39VQCA8qwCKrSxiXAchxCT3zDoeAR8iWeLCmuV5aN4GfHgv1n9QqZk7",
  "key39": "3N8MbfsowC5SXuwJR6ULVyWPmeU2LwbLH1zkrXF1ru5MHMtq7fKB8pY16McTTfoswqG3iuTExvyMZJKF5JFJaJuV",
  "key40": "5qX4PtR8nobAwAbLRVGjsrqb9n7d9SDTK7wKvzFuqEpBwJkz5hvTEUyp4AzuxvYkekBR1ZiFzUV9Bc7pkXHW1SPm",
  "key41": "387RPfm88pGfsevwReMum7GajubgttgVn3s8PsEosrsyLENLnmfdgbArLAfcBuAUd2n68LZcaVZnwGY9jnsbHLrK",
  "key42": "2CrUmTmA3x9ZpF5hPHw43mbrkD5D33WXMd6GtvJk8GsUHvY6B1BN8ueD95A6PRhrRfZDzKL4qz2KsBaXb6gyFU4k",
  "key43": "4GdMqCAswFip1jmHXpjZvr9b6vteEMe9Ab7xRxYJWcgeJ1AavfcNTCwRyZNSwDAaN8s9SYptd5mhDZabiChBvhWp",
  "key44": "4qjnZBGKe6pkVSunP7zux37ahkLjjqbQCpkv1LzKSEMNc4fgef6spPmwkqP9aqKcSDbuCNQMV4DqyUwrQ5MzrFNA"
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
