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
    "52tgLu58nPBAJ2ieuFwD3HTZsnEa3vDhXCPLb9Py7nfmqRzXToEt1Gobnwu2c6eGv67XNd1XXqL7jB25PjJc8fHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VEApfh87onaJmQRbKAVtpvQBe5KU36RAvWx4swTLfUeMjHnRYqDr6PPSyHdAr8YXtBFBbXVbMEPvzeqhsCmyLxR",
  "key1": "3PVxNmSsP2z32RzLD2MqqjmXyWyLAqHgn1otZnSoVUiiGofUzqkkBPqszVQEa9EHru4EPUWuESnHaGMbZdj666Ax",
  "key2": "vExPVK9MhLtzUf1tq9y59VRKHL9Bv8JmDcBmg3d8qiVqYvfwLb9josYxSnFdLDQk8pUELN4UC4ms2dQqssuFVUd",
  "key3": "26hMt41WHp8pcwcJ7evDhGurS6gnNPsDLVqgHWjHdoadV2hyzurdqgVQjCaGnVhzF5GS62UWkyndqpK4VVepLZFK",
  "key4": "5n6JtpdeB5b4PVKEfLUmajs6wuiEaw3Da7g9XPPHu1qa828qzctxmNXBBB3ftQCyeterk7PwdNBzXUqZPDa7qsWm",
  "key5": "2iToqDdWq7YhthaczqTVCa5ci98SLg1rU1TotAmsS2CFbJgS1Q9TAFCGhJTohvNTPrs2ofTUd1MxJAHQZWTPzzqP",
  "key6": "3pBLeXwwD6MDM6hGpyWxP7AdeQSeh43ees1Xpgn3nQRubtd72TvR2LcM34hgyA5JSD4hJsfLVuuRovosHFUL7XAf",
  "key7": "4P6FiDCEPKiPf66JDu98rbk9yUrc1KeQdP9QwP3Ro2ufjnTPkJkzprRwuTQWXDt98j42dGVPjfJEkQNqKtvZg5ac",
  "key8": "4JJqTaqD6r2yNMbwgZ628hrXbY3qVmP3BBuerFRFjA15QbBgHayycsxKMzxS8pWsLKhaAALpQ2u2NTAd9nQoQaf6",
  "key9": "qjEZL1scUV1iA5Q53fDzi4mUDf2bmYyRJ6uJZYPSxb6YE2Cvrw1oMLBoXVifJx3uEV6YTP8QXtxkJ7KhZy7meVg",
  "key10": "58xvuaKV2c3CCeE4PjQQg1V598iJ5NWbzSLYWWkES2H6FHGSk3AczNPPNwQ2RQV6SfBfBUNaK4KH94otDuFFf9b",
  "key11": "eYXgGKHcMHKBdPZczFyHf82rVe2T5NX93VxmeowmuH6PJxwyKxRAxnoqTLUEFkcCBzz2Kr6b2mXRFnjFqameVhG",
  "key12": "287eiVBsxBCQMVchnkKmnx3XGT9qMHQfYbciwEpXjkr5AU1BsAzF6UUb4JPqYho7jdLZ1Jo4mETtfMdbBbJMCsfP",
  "key13": "3dZTAmzuHvFSvbmbvhr3GYWyJbhHL9Hvr86aQXWyWLdbEVUrBgvy3eHtEU9GAFtR3RpCT2Lmf48bYbDYxykpWeyf",
  "key14": "4ihRBs51KtdCxLZGsuPoHPfd8XpgQ93Drp8uPbdaxgqoLYUvz3i32V7et1FyCS2pqmZqadequPR3Vs6ciU9uCXLD",
  "key15": "43bgZkZsVj1MgBBnrLYasSjFfVYLqf88TtcL9JbhtN7vviiit46uTbKJDDMg6kwdYZ1iYEu9QJAiViW7oDZA37tA",
  "key16": "5woqwgRsWjLcioQM3Lfy5wGm5kC7tmNveWb421hhatfGXd4HqzWsybUgEA1DVQ8BFfZugtrdkEcj8wWx1HgqCGkc",
  "key17": "38XtLnrdAki1t69YudkMnVDyMnxwtGromYv7zrAwvdktwZS8ucJsrmfFi8g5iajNQuztYadZHvsMFwQbmDm94An",
  "key18": "3qmtdseW8PvtrZDLoVkUibSuYLxzDtxtmvsyzMsa6jmc4KSYDUR6DDhKywpdFDQ5bMHVeZgqnGFDExDLxykzghsV",
  "key19": "4cPUn5fq2zAFTWz3SwWygF7S3WksiANbx3UvTHALjXkjQskrdDH4tSdwri6Dyv6XM7Ph7e9Z32i6rZjuQZgvkLBY",
  "key20": "5WNWodcNFs75xDMSbet5TfhGHRdewKp38vPWRu34vWpR7oBVnvawaD818eEwiAyri8WGHpc989SiihBFysnVXkww",
  "key21": "3m4JjSTkUVwyC3mjQ6xYmtkWCfDwawy9P9uiZUawomdzA9QhKTfXJZwC5qbDxRazaN8qFJiAvZ5iswq177pXnDqA",
  "key22": "2d3PBnwLxxsqsx54LJRJte2RrsJfwQ3Mf4Jd9st5kUGyVmne8kimVgEZNJzeRy6zNgSqgvnExvM4MKjxrwgycwNd",
  "key23": "3UC1V4JQS4JmHHNiBKVM8Agvrq6ABBeZwDoCCZKxk9D2BeWsXoYavJ3JcH22BuBfDoPRNBTwkhpo1tR221hB7XTZ",
  "key24": "4rtGVqnvaCpYmCQh5UnhMbLAq4MDDVmCVgsm6tfp8RcGj4VNZAXu1dGhd13ESqPxpXXoycHXN4HcjpbkTATUNXuz",
  "key25": "29C7dC4M5Vejbiui7btVntvVyopgMsR9CgjrRCW6Jv7gVTtCWiX9MwZGJnkcQs29ZUUSeuCujhzhjkpyjbjuLEQf",
  "key26": "3VT86bSECihdUUSAoyaAGZod6fLgrmX8ZGqKrD8gjF4oL2RL5ji13koGWZDismT4nbzU2waFMLkFiP5u1V6GT2jF",
  "key27": "B92kPPMMBLuNieN75XQotvRSEnWQQtFK5vyJaxjNd7N58C84oECQKqgsYFcHwEcqiVcYVnijf9TyVi3GXZfnbgA",
  "key28": "2C1xscd79E8uorW6AhtJqwpEToRv9XGTg4GnuyDLeiGYDhVeiA7z5vdoJswF9jjHrGivA7a7nXZaN7437Sgm8JBq",
  "key29": "3ZKYiRyD95SCGBXNMBN1hWiqSp3Yw2EBfARRBeetnjki8d4cUCP8uWmnfEUr5FLdn6mnVhiGFfwup8X2VCY7sNuo",
  "key30": "5mt1BLqhQ95FPFF57JktJwpMSc1jhoz6V7U73ZZL5A1qTfpLt7Gb97PaYKsRPqtQUbQgeEfobsPqf2aAWeVjsgfK",
  "key31": "3Ppp6wsr6bUMDJtqBot27SfZiG2wbthYVsxbhswjxJHcMZKtjNiiEoVyTYNgqzVZEHiLa4RdCur5KWf4gsf8xDtt",
  "key32": "oD9MQkU38U1YX1RJWfrE4sELiwRsMXG7U8k4mBVStEccHpea6cdvw8ukQKSRFi2mfxGei8kFhyHvuxDFfRvc6sT",
  "key33": "FtxqdxHJGspv62h8kbBXTGqzCEnS3P38HGLmPhJEdyDheRMxtBQasFPtXXEyrYxYQktLJB2JXij6yNSL7eMZdNE",
  "key34": "5sc9xYx9gPXhs9SnG8831tWbuFVW9i3ikEhzx6aAwFnUbwQFcRfLB3yxgYArdg4tYfJVrEYnWv77MzvAGxfQnLbN",
  "key35": "3M54zQQTgF9TUWbtuYaq2qVc1CtwWdf2Q28iP8piJJsYh3QEkfhrVFNrF2BAPgYsLoKmVpc4Z6ijjY7sa9QscpMb",
  "key36": "48KXKJ35QNgWMuGvjorEAMEKqQ8C9U52JMbBXea1wbbMzHP2FpmPLeXRhicbZM481uAFxjjV2cEybTEnAVbeGrvM",
  "key37": "3h2dWsDVBGbou8fgsV9Yhcw49ayrRYYYHHGNT5MAdv5LVKvXaV2N2tRvXQEPzAeKsP1hJBFiuwoE8XaZKD3DQ6uP",
  "key38": "3bckDEXxXERMVsSNCoHCpiXThe6vw9VRCPwjU3xmTHFZUE8YNMxoUDwemosuPWLtTdxrJvaS1UJKeaDaLMhzPwXQ",
  "key39": "2ZGWbXFsZYjhWcnN9GeLqZ7Jhu6sU7wvAc3kyDQfKsiC4gWdDJrts7TjdThqUpSUjNMR1znbVkMs4C7y1rSR9JVP",
  "key40": "XFK3f2tdbThcYHmVhFKVbDishW8VwaLRpKH1CttwETQDJR7Mj3TVSnVRxb7Eq4z31z5GbgaeweydfQfoc1ykNcw",
  "key41": "2aTk83NEJP85qW7nqYENvhVz8tUdKRqHNzPVvQ4VULVAw8wpkifxVPF5YdPjW2YaLULv4Z3VAz3Q6uvYvBeVvh4R",
  "key42": "2JaN5nqzhUFSBa1i5cUKzp3RdwAtHbMkxrPxozJRwqceM1fMrz9We9gvpeswS3WRnrUYift6xrJH3RSgBUy61yXr",
  "key43": "4WehbEHDoC8W9AJ2M7EcAw8CqwuLZgZWY2SPq3F8utzV96FLbFNe5Qki2sgUTbt2WmLgA1F3QFESah3fYfcSbB6i",
  "key44": "2B3umuRYaqw1UCmUXxxXPsAgRqqkrEMTDVTGNNaynfY2SCVjTbwiNCRkSie4SFGMP6J7QnmqDbJ2kBNrj4XtvLsS",
  "key45": "3UsKs3EuCVSc4DTCDgAZWFxhUJ9E86izbiDfWw2RdKFY8FQmSfRoqNe8sLnmm4LWt4viLDupNhxcH974rmLLrP9R",
  "key46": "6jFr6Kg2VKie4FC4pB76SjUCw72Pj4DiNL78tPenzX5yCDNNPwW7aYuSGkttEXs8xRo3id2dcah62WLYRVh4eaV"
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
