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
    "2c8HcQfmJzhfMMK1yJc1gJfL5fcUYRMLRvBATvDTPjG3XEEsjwVwgpfvkZXdeJoxCGCawkSsrHgx84RNLFH4Rt1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "377xgtwgpG1jZLDWDDqQ4wehv57FR9kfLeYNtccEKhBPtRd1CM1v5RoUFg2zBNhKZfdP6bA59n9aiwQooJXceNDk",
  "key1": "4veStzjDFRQahqSERxu8F7YKT5PtDXWajoWaMm1JvbYXB2BUFWuNo1dZVfdePRUgBA6XijzAeMRYMZyRHT9Bj134",
  "key2": "2RbKvGYWpUVxwMkDkMD3xJsPZDXPKuX8JyYz5xM8btSEA1CfJcBVGDnbY46RYx8zZbrDn1NKmXrRccqkuM5uj5X",
  "key3": "4Uy9uU8YDKCHzTqC5c32YiTPCLihZM2dPaS5ZuC3MFs5i4vFXpW7mv6pDnVTWvRvZtwh1bdUqgJPLGQQKWQ7VFEW",
  "key4": "3ZdwUEtUZRpjmjkXMceiRYoHHKaxJxdRXrLDnguZYjFg5kstCQatjEbNpectX3UWdy7PMaaTkJ9Z15sdUsjjugza",
  "key5": "3TE7SzyeEfXMxNsrcHh9KUiZiYz4TvPkdmM1d4d4jmSFidNPTUBnCTSVojEwkMu663nCt6KhsM9Mfbp751VFugPn",
  "key6": "tSmYV2z9JhMAq5hdJoMuTRZZR1HymnWTEwcANj8U9hraVCg3NoBcwtiJd1HVLCr85GzuxvN8PFrY1bfdRDTcgT7",
  "key7": "2DmxY9Kd5oaehyiX3YtETCZYyX68f98vFwaC775mhXAutXsGZBLwpW6A1U1eznqTmNRw25b2c9YqACAByWkZbGWQ",
  "key8": "2eTt4V1xS5W15ABPEQtse9C5VdG57GdVVtJ41UT9cLZY4puWMWzQG7RKSgFixvoFoJGrdDEFyNH21osMxqCfdjQc",
  "key9": "5ZBaDkJkcEqmQW95weE7YSS9FZnKNgT5chapjyDyayjuKc2E9orfXwQNygPospNz2HPECaADZ4q9oEoCx4KFQ1mp",
  "key10": "8HPYaSGC6GGiJN8WTwGyHVH6YjUc97z9hwfbREmrFB6iFKrsaJMG4Rx1AnEjjSxGKRjq92KEXVs77EZsPKvhcZn",
  "key11": "3L7TyFZdAk4ND2pLzRezG1xMTcicb5aeGjYupuR4QGaK4Wk1iUf4seC1cQAgpoUbAjGpNBufe2PQBH56LKzicn9m",
  "key12": "4pHmvD8gaXpvT9sCgiKL9yotdQFv7MJzLrAaV9XWcUs4S5hTJgNdzGYFyJMiqV6ipbhzR9H7BDWE4CU5bkmpcRuL",
  "key13": "3hpeu9w9DybWj2DLrnuswZ8n3K9auarPQyksufpLgsHLTJYhEBpLhfdQV9mP9ZRMB66KmaBZRKT6MR4kehaqKvSi",
  "key14": "3GGqwoAWKouRZhrivkdSfV6amzm7t843sJHifiVm5SvCtfceZuL11aWgVyGaUV3k2Dxp7YEKPeNS1vkZxNQv3jSZ",
  "key15": "3GWQPyfnnxT5XVE8oUPsq9B8XpqmjmBNwMEuyQSpYyB4juge9t6oDDzLcKzhUU6L5YMD8gbLoShTARmK2skUpoAN",
  "key16": "5aCoFYbnLDcCeUibGwZ2Am941ePnZFFnUWhRrm8k6YS3sPFo8bVVnABY27bQtPkvTTkbPX1hFkWNvEVe2tAJEuJB",
  "key17": "4Nm6ctDBAa7TS5KX2NA8ZdzwCvmprBF322e3VV3QB1kkaxeCUp49ffsQPFEDDoqutXa2r2bJuu1W4RoXCScdyG7F",
  "key18": "uRWAFy1g3qmrTvZLj7AraaaSk7AYETAkmJk22oT7HTVut2XEPisXesHuahoV4zdm9zYST4rfRDoZGo1aw9qYvuq",
  "key19": "3PEE8afrvTLrRSiaFDFWJbs1tK2afhmoiDVYJDsogMo8Cm8C3nC7onoqeduAoQMffNVGh5phKUZafwrdS2mTgNDT",
  "key20": "DDAdtEz1meVRFR7xAXLbQYSHqZVojTwjLz8j9BNCC4FauzukewkgYrwgCEg6yMH1kPtMRWu2GtV4reWDDNHskbc",
  "key21": "2qj13GpvwucR8qqwW5ME36cTPQup43dG3pjTphu7ZfJybcYoRBeVoNX7HhEJ9yAeD3KB9cCMqAzB1pjtW3rr121T",
  "key22": "2SUo2fofo6eVXssRfU3D83WkVjNQgfhE2DYnfUecJvgAjWBfszqwFnfwDcnFuzzsh9LicRnVs9X5fYtz6xDcvQMZ",
  "key23": "iBRkqqD1nzf4qXtRXM7AojTWAN9N9xhG39ttZE4e1o6wHR9RYN2CLcVtdmWzy9c66nrvLJtqRM6XWBTbpbZqAwy",
  "key24": "8hPbLs7A59Gz4TB962UwGj3pbGCpC8wmeMKR57uCzjyKEu1upbH74w9LaaSPmLwGcqyGy8emoB5QVphaV1WzGMM",
  "key25": "YFdLU3X8tNkgtFYJABvMhHLb2NbmVKxSpA2ohqCnzydiCjcHfn1NCfLfmoo7LMHsHtA59Lu81RHrPu4hro3G3GZ",
  "key26": "2QQS7xPqx7hkxQjYqKQe3BRXxdRDrQ4D2NFL5NvyaXE8GDn81o5SEPqCmJWd48Hj2aMMbVzchc3VAGYvsVzE3Lt1",
  "key27": "4EW4dr1wftM7MA45126GcLxq1CDb73wynvfvDi1DuYwF7KjWTmxSseawKUrjLV75dYUeKd29LLqaYQgDgm32WPw5",
  "key28": "4kXKejyEZ8tQM5wJQoJ2Wv859Z19UJUaT82xdBgdNMqUVRhArmMUwxfdMq3y7NWi3XQTnb2xvStVxfpKHkNDMe1U",
  "key29": "2E64ZHrPw8Dx1R9YKdCEGEXz4ER9qXnScXFm5wNcPfuea3AJdNvApjnaf9DHzTFeVAheWupcG9abaELxoPUTGJ9n",
  "key30": "4b7RDTazDXy48a9qPiRaKknZNZBorfzdkriWZdHREiyPP6FH45M29ueq55HkBiRsiPt5LYLBJanrh6Z6rU8cVarH",
  "key31": "szdbV2rRhj4GoXQhPV7qAw7RrCWN1qiPij92aaD5knJi2XJ7V2nSYVG7iGQ5SLJHKLpuVT9Qkktn1xQkctQ4ap1",
  "key32": "2RRYahEmL3JkorwudaDCYBUa8oDy8jSXqZVsaMFweyZvU6hAXxeQE2dqGRkMgWbgmgZjcP4pTFFd4QvgL6fyiTtC",
  "key33": "2v5dSLTCgdDL24KcjJV3Sr5VqvGezNVkTtzz9QuBDMSZT2u49HU5Z4xT6uiJA2NqB95xt68ppRqZyzgfg239WNiC",
  "key34": "CvSiK4mMgV5c9KzTz8kaqwWKChH6yday3bnukWd75C7v1ATEB7f4sWCLp7S4s5WiuNQJSQQyfMKhkirF5Hcr6Bs",
  "key35": "2W45y4QQn5BQEPna8jrTPPA5yuJrQqwennDz52eyMBnhZeS8wEA3tJJqJJseBFA4rMuWm5qpxaZfM7tnY9p8kGF3",
  "key36": "4rz1U94zwBDnC2SaHrw5VbUG5v44dEtDG3cjdzSxaLVtTeqU5RcGF3zMwqPSyKpC68kQLEdo7eEbsYrC4h1pRMuv",
  "key37": "HRBiJKLbwnJNDbrZTT8QxngcZp4pnWPSHVJhhJTJGTiv2xJ23VGpTiMcMHdeKtgbRA2okUXCn1aQVit33Lerdq6",
  "key38": "46B8rtX3Q3zwtfKyhdHTkFFhMoJQSvZb5KfaHZ4wJRsusSnN8bz7Ch6wAWJMVjTDaYDcZtjrtoLV2CHMVnXxg6Xy",
  "key39": "4cyXSCWR9ZQvne6GYFwCAYhre2k4U96e6DmFvg3MzEWJctwSnyoS5apoppZduDGMPE7beXprvNkBanNYkkLi1nRU",
  "key40": "3oP45udhSibPkYLDoD8RNzAA73HTeaZezfxRckQRryfez8nEoP4GjiHTQsxdrarW3jSWnYPZnJfRrbKbUCchT6ZB",
  "key41": "4VBH7sGxjhXCvxZvtZMTUAFN6oUDzeQ6x43gQ1GViqDWzArwxfQThBRVN1BQo4FGMGz3yF6Y8V9mn1ijqSEdHciG",
  "key42": "3zNcHcn4anaeseZeAssfJneC5s1vhWFZsVU6w4Zz6aLp3LNCLq5QzQt5KhXoV46HAhRmLJEi66NycYE2jybgvyoB",
  "key43": "edhgWzLF2T2oVD4uxK5WHvVzLewsH4LtByWR7SaGGkth3pLkN8kBY1vKqxrfkkXXQJeZHM4on99bLwovVTZSPRQ",
  "key44": "33hvC8HL9wkNJqPfAKWxWRQuryRoSSpzY7z2LuC8Pn5ZWxU9G1QvB1xBDuyHYNAUQD3pXMesbJTUow3mGizb26om",
  "key45": "37NAnnNLKvsYiKjrYg2wkSJf6z8BJkoPpeMagx3LySfbRFSfpATyfYayYpUFSCuWG4f1USba2UQS6dPwiEXHyDqf",
  "key46": "2YZZGrBPjiM99CQT4droA6rs1VShBeM7g6q67789YAcSNqkvCW5uf5ZZ69K1cZTjS2iZsEnKfC5ZSounyXNuKG7h",
  "key47": "3bMSfQEZ2nXZSZ4FEvV7Xd3ZtBtm6zGktaSPTZQQEcTUmNaKAG3kTJariQbybxK7QJFhLFRp1urJEGL1snpovNeH",
  "key48": "3iet4QWzaAJZ5QfWk3pUw6nc8zQHD7MtNYrzkvfkoRgsZzDNW5nDstHgaqo58qSnhx6R5nk641Ki9nmroRwbCefx"
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
