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
    "3TvgH2BwLJswadqUPYgAr4Zh8Zh8fxEcL9JVk6qGmxdBqw76wrEwngW5yoedA8vLg2Vo274YDk4j8H9Kw6SkrZJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xR9EVYf6rcLAnFHvhyS5jJDfa5gUh8NzvyXhzD3yzUEjgQHFvchdCLfXfzSDKUptsea412ur1aW1s97vt3SSrTC",
  "key1": "4zZw9GGQyLTGLkYvu61cGfYRi7sLbZTeaANjxJ5cuyebyrjJpBgRcZNsoeWHZLq8H2cXZdobeGu6ZW44Jw4GxAWs",
  "key2": "2M9pH6kKwmRHZq9BzWWmFa7GjfDHQ6KqrpYUmUHr9LGK9nYmf6qwoCYRsA2rCydyvSd8CKTUZ9eaPxRciUrHZyAm",
  "key3": "5PAwSUfjbLYyc8n9Dxk5WnDGiHC5WmsbYVKqZGEhyNmqy1nWCDQRLCzEqqhXSCeGK1tHdx78cXE3tpQ6DUHcFrTC",
  "key4": "GDzRHiWkNgzA22pNvh5BREihDyaShMPanrE7sEFqo5ucsd23JzG7PemCeLERfxoPonjeoRVTAqfwhtyzp4vQH3h",
  "key5": "2JLqr5YFWPR8ho88pwP4JgyceA6bZSQ4B8y5ff8tPHmHELz4PVWu3zL9yjtUfXsLm5NcZUXLrSeJJ6FLAqrPpGri",
  "key6": "33MnJTXySJa9FmvW8HaMbwuY5paugQLBCqECgRLzApHLzdumK59BnUR3Q2ny6bhdfVZ7aKGwH6KhWu8H147kJmu7",
  "key7": "3QEAREMb1qDJbJAAQpmFXy6FHNzULHxuj3DjnpSvrPvYwgipMQg9JzbVQQTcSvAqJYGQfLrPegCQo1DRSmUuFS52",
  "key8": "4jhSNBBBK4pz3PAjtDsbDbXMgLFsDBzMLANg2VKiUenUi3rr3SZnCyX17gkYDy341GZx1Zq2xP2yFUrB4FePopRx",
  "key9": "3PG5UErrbdepmwbqo1Adw7ccr3hphXmjvt5HPBhqz8G6fcvnRCqV5MZhWKWHF8JmaLyBTDJw8g7j8oQTitS6urj8",
  "key10": "3rhNXqxTapz6T1Viefixy5p8541YwDARWtDVoTN9GWuHF5AV71WcTYktjZHur52xFNp6LM6n9V7CiWxPvMWukRWZ",
  "key11": "rFX97xGTbAgB9cRjnqoTAsxj8E46FhkpqZ9KSB2deo5K6begMfNpb4kqB5qGEkxTnYvhx4weastA9JqFGXYxcam",
  "key12": "5nt7E8TtANtXZvwueFwujj2m9vcXJHj8LoVVedaZhWFRohZ54Ni72yygbs25rfAxaz54JbipXyhT4eUkaJbfE2QM",
  "key13": "63rr4uqNsXWTXicw3Ani4Cc5fVCjwk4rECRNbEDf411B3wvdRoaPRWBkGAdnSBwG3UdkCan5aNkoLaUdctLjHfSa",
  "key14": "2XMdmTEFpyrKDx5aaujzyAyuWAxHaReQfsZKWGEEAChEpitb42t9xHfgtbypGbQLmyiCjumDRaP7eFb5pfT9mU1r",
  "key15": "4hBe6Sk9JmmT4W45s3Rumz7HL5eXnuTKT3NnnU9V4jpF5saSarczm3BKyThrs2i3KoXJkakRsZRAjiiH6i5Bi8yE",
  "key16": "61uAx1zBaBr6jNM72J7yWNzcsfQqWK8QT8BgXNTZ5nN2UVTsAK7fcXPtzzt7dZaozdn97RQmm2saL4n2zsuynAPm",
  "key17": "ZQyuCGMcjqL2bWeP3dwFzD4vVhRaFux4g5uafKwhLoEhVYCDtni6deeJihPibqL7RDadQ6cavZGykE8rsZxsqBq",
  "key18": "3V3rJBUktRxZ2stSmxnkyhmTNhaC9kmsT7FQ81Dr8tQqLsK21caeZzZ7sHQ1gac78vmsU1FXy21UjNejnSBK5Yjr",
  "key19": "5o9fk6uCbDwTr3RqNwg7e13gWi99x5SGRoUtxCcQAWR7CfvdfM18HmLAXwNu8Gu8RJ6HRtwDD59a1viwAWhu8vcB",
  "key20": "5CKZAjJJkGWWndpdEepvZCWojpk6QWMZmD5fHqYEjzzKww438bQtnZRwFq3QQn1d4a4yt8n7ErV6mqcPJjUmB726",
  "key21": "3dXvqx2ZR9pEQenNedr3tQuKYSbxdYCjQZrAYqJWmRrQCWSHtbUBVKaaAyyf6XjNiTsn5CU4oE7n7RRQPL1W29CA",
  "key22": "2naXg2T3ykE1t9HuWAa8pq44KsXVeQQkst81a3WSki8wDDf4VnGDCY5cteBG1XneiWBnMLRVEFNCVAN3gqk9TVa9",
  "key23": "2j49nsxju2jSjNinSetSWjoCJYmurz6H65oKCWag1BjBNMeaSSeWv7aYc1jFnuu7QoQWMqqKWRiWPURgwACtiSwy",
  "key24": "4fyReyKcaZBpi4aM5KknfuVJs3MkaN275DcxFDjMASV1F8HN79Be67P5HSssiuKYECwAE1y6qzUiH6SB5fVWw8WB",
  "key25": "2qnVwxo9dLXFW52Az6LWQUntj7P4dtzRKgmTAEXkqXFoF6SAuajVSMPSBKYkaSXmqJGxzHjrJu5opwDKRQHbFMTw",
  "key26": "5pUiwJHxAz8T79WsHVttuTcR3cshEHw2tKFAhNG5JSXkGuLtLETitaP7SqeouMDwismSAR9KMF4MJxkohHMK1Sve",
  "key27": "5VEX8Wtv8AFhKirZFe2XWMRvSfY2MEu3UnVH7bSzVfJoVgmKhcLRfuVspk3ywveQ9fDqcKCg3FWQBJCz3pgStioX",
  "key28": "2G9RYgZ1ww3aiZM3stqdZkV9LJcYimiELvnJ1vfpJXZpAQw6pxy1vjh9mDN99FcGQ4juyqsqeTVff5LQMoqX8yaC",
  "key29": "67qFt76DjPnVJ3JRdouh47mBwy53TiB13c8oeGWZMGe2Fbu6QR3mQnEDxrtjRYsXdqdy6sAFfeoMTwaV5GC6mCEZ",
  "key30": "3BakdTZfd8kKP3tYbCxGVxn1SSzoEGYqc7XP7T9Xz56Vwr1m5R8Uevuecyfko9SdVYheVP1DWfGvuNUnGCGsy1WG",
  "key31": "3S53qvM5tsc9UX6sq6T9HTtPzAxJJZBBdY3QpajUhgSTTE9dgevn1Gvz4zo5CG5D1LA2qvJzg5VonzsHNSKVGXnA",
  "key32": "4HVtiWGW8U6SacYfXdFFtF8VryCb57d3VeStNmnHMpS4hsTNrU8vMHq5FUSQYkoX3RHWzJ8yVWk9m6VYzBPWuWML",
  "key33": "24xJG8op4S4orVTWMe3EMV5deyYo75DW1vjj8r5uCgnYrTd8fHtehQ3aPZAtXehXqEf8hbz8bSqC5hDRJ8MFBSjg",
  "key34": "3nZyrGVbFiFAxam1HK3MWiJkH8B5bFcKZWQ8P4CKt7mnavQAYizivGUFfuKJCZvdTzTpJzr6NoGaAXWQfzr7ZXHM",
  "key35": "4piyU7sTd5RQLUCnQicGAcoPT43GHoienqAxwQVLBDZMf4e8s29UVPMzXDAJZxQJkuKuDShMh4wf2TUr8X1F3pAb",
  "key36": "HiSwwChGJsY9KBgGpNqqzdB7r9EBerjdWKfaMsi8JdvgaokrNZDayyJg36uLtYBWVnhK3VQ4Ut4a6FyGFmmEcCv",
  "key37": "2JaorHREyeU8BLC54vuJs1g89ARJ7vn3m8z2q22pFWnsjtcAWgzxCNMfymFE7LADxav48m74RVje17378b1gbafq",
  "key38": "4oCLuVZ6gKYfKfa8SuTeptUt35BBLtgCHz5DbWPxK1dfNeQwd6rYDjypPqfM4CCSQEw25k94TxoVPpARi5bMrMsg",
  "key39": "5LYpsrPc3GBDLm4MPkS2Y1NceKA5u5LDAZrMRsE72maVw9cQne4wp3Ds9RYYyhZ2Wk78DP45mdabyfhKNE5N4mdG",
  "key40": "4uTWx6gCvoDgGmksubhgNXgxqRzRo4yKApZwbm5wUEDB6Tfuh3nV7jHf8i33qhNjaFmXUvxnLfSaAJJtq6QQ8Yvh",
  "key41": "254YA3NRyPD9G2PpJSLpVjJDEXyCzHWwL7V37rj3cgkCPGJkFagqGZC26NmNkJEqwpDQGuD2CXhMGymHDNXvZ6uf",
  "key42": "5yQVhCCRNxnh3YxgvjocB4zdEvjX5zqoS7NbTGnwqTPLsECkZCMfZC8Pa8CT5TCb73YTEoP6FRYvk51aGLhbAMJF",
  "key43": "2UhKu35P3sjETHuusB6XkhYBQyNsRNaStc3jYnx2fTSGLGdTKtZnGXxrqg4iRvHoqQmUYgiK6CdRweD9cLA4KoFn",
  "key44": "2myFdny8iUYX1yjBowXaUgTUmHhZEg4KGKrSWKYoYR1rgj6Da5ThoRDJJaoeFGY33y6V5RzWZuBUJ3L5wTWg8Y1j",
  "key45": "5BPzr1aJm4Nj1HVmF43LKATfXWMto5u6ziEao6QRovQ33gyXjy8GPmNaWQSVGdd2RtXs7JySuBWpCXnCPzKkiiS8",
  "key46": "52pKjK5Wwfbu3b4rTPMUA6TVH6mx2tp2grexcmsHMJtnHC4A9FAgmPCnG5CT2gNw8aAJpfPj1eL1CdLfyEcLrcty",
  "key47": "2cUhv2xCZwV1vQC8p5QAZm9rhMgwFzSFiUUpUjcBPfbECYStGeg3JvDjK2TzUJgLoJUDkrL3hG4HXH5mq54xDedm",
  "key48": "3WaRBCjjMK8yyY2yVg4hykCpVPBQXcBTBsq9XfGxg5kiq9K1QfwWcFQCikzfw3d6g2vuw7mNC6tRrBrXZopPaDZT",
  "key49": "3CFrAEbHpgu7F3W2kfayFmtfD5Etn5CU7F4UxFttCgUFtzhjk8guA71oYf67MFEFzC4L1aGbMmDdFgfDv4eac5uu"
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
