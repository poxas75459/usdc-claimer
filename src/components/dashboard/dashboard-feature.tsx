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
    "5gum5C2yGybTRdVmsD6iCCgrEnfBJaqYLK9dTh3Jws3JdhTHHXkgnbVT87n7647WsgmJRQtDwa3ypVu95RaevgsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgLgQkKVgegRzWmHiMY7oh4WUP9a49PWh2dJUMEeTooFLZynxHBma1mMgFnK1zVXRsqbdoJHB248kvpDm2scjQd",
  "key1": "2ScZEUmhyisN3a5hrj3iJL2e4goPhRQefuJ3mBNTLDKkgYycQYbhi44QwsDuZUn31JH3SGe2ENUS96S37MmDJyDV",
  "key2": "4bmjpfx46TsidmXzxNnj3rJwM8r2nbmzewDrJDFC9nhYQ4AF4dXW3JayT9A2T3SsVZmJNLWGfdki8Cj3kdtprCmD",
  "key3": "62KCtonZFvEzG7BaU9Ei89i5LAH5oz4Zu6Wwjaeddz5hKZnDSSTB7sG7tzrPEzvNSTdKTz5LdXxnJqLcExkpzB5y",
  "key4": "4WsL3T2u1nEoABXbSXzsMn519DvDQL31UU5MF93bj2d5GF61CXcZtbkYuj8bEKWF5b611hcHM7sdPsvrcGtJrVBt",
  "key5": "4sLDmNMCCS5ajbvS4rxc39P6oS8rztJiYfsTfjyRgLnsYdWifdKNqP853GkVnYRjxp3Cg8VJg3fyTMctKLsQ9frp",
  "key6": "5bx1LrEU7tLf3fSvNVxCp5fPxkpQYSiWL3shDLEpyVyWhp1f1irhXSidxXZqJcdmnr3G4hjC8Ds9K3QbbEp1wrU7",
  "key7": "4jQXgf8dQrQ3qbnYVHevav61S8Ct6kV3TM3C4ATTwBbppogzDtea8UVJiXmV2oFXPxGrmuyUyY5BrK437TboeeeG",
  "key8": "418durbqRaiahapYJTsHqukJ95qaZ82XoLNaF5Dv3Rk8mmVqWuCv9Tx8AEVmEVPuzin1cfzyzM4Yqdvqw32XgHao",
  "key9": "3eWRTRJ8DNh7fQH8VB6V12V5DpG15u7bagFG7crbQSZeBMGs9oknheNY2NYGGatwSJVfLq9BMNnnfgGWfQvVk1L9",
  "key10": "3D6fMGdFbHX1rVdXkpBa9bqLw5rFCKRWhukHVHpNd2pbcgKwXqEwcVNUkbcCWvtQZ6U5HmxWi7Emq9qrahaNvhQp",
  "key11": "3V1RuYff14XDTYkXeVBox1PYESV5DyJg2DvLAu15sG8DggiJmmtV952QH91RGL2hmSBVYETtgMAgVDnmbZgUwUYH",
  "key12": "3i16jMAGfHKv7qZnQpyrjb59XyFPswDH31HLQ2k85Q5BQsqDjHBkiSVKrVdjGcMZYs9sxRZ5bXFTSQvdxSHQngTk",
  "key13": "52kkd8FkeqXYydp2L2ieLKfDdmkXfQE9aNSdCd7mwZ6ZdzVZZR4f5a3hYsH665LkNot8RsTDMgEniKi2zbp7QSnv",
  "key14": "zaf8wqLZPMKwFZj8mjH3NSKuYoLyLSda4yW2Esd5fmToyde4nUj2VAE9PYjFs6LJTRPnyxJGinHkdXbXbXmwR5f",
  "key15": "3Qu3eaFbNexqxUpTEit8QqdFZ93k6dgRoLDmuht7YuKqdhw9FhAPU7NqjoDcTeSn5WkgnRQPnkgmBBXMvJCa5CFw",
  "key16": "2cSFD6dr4Gke1oPsZNB1ePkx7cuUWf1H7NKpDVAWLS7Ycwv3Xzug3Kfc4jJe9WadTkro6BKR3FNx7XQccbzN41Yj",
  "key17": "5GoMz6EvwZtXXqiz8JhisHdQ2PZrBM8KQUbWnCKPA4eAG8seLVKnmy5qgNoXSBTXTanKuACNUGikcdCL6SAbHHtq",
  "key18": "44NDHhmknnTGyZswoqvsAbJmcizQYDhMbV4jGyAWPxTYuDpkECvwwocJYoB28uebGoX3y4L9pVnmAJxx4PSf4rWG",
  "key19": "2Uino9pQm7nCeBpfVNczzcphgr1c8PZ29un4DHLCQ3iu6r1TSMhZVnP5vbUYRcyDVsMtbPvvAa3FJVquDZYMCoBr",
  "key20": "2USn1Cgme8b2T5MoNLbYEbCsAzhVScbZ3GgHmtfP4JXd88oYa1RoEyeW7LFPEFm6SqSokqwKmTZnBibUFwtUr383",
  "key21": "43kuCmXsbHjJ5AFQwuVEGdnn2U57HsjxnHSmbt41AGeUN34MK99X2jnZqck9WJg6FTGpqmyhU3uaKyPv4hZB9Tbs",
  "key22": "hLk6CLqfHFPWTWiBDrHB7Qvn2omGdHif5bBuTSfVDhrhdaDCBpc1qR3oaiFGZV4u6ojriy5EfocUYXV5Cx1DD3u",
  "key23": "DtrKZHXxDRPrEaZ8dwg5kvc3cB8QDPgPwL6JWdxYLDngkwUtRnUwrdRBNRKurQyfYy355xRhkQzVHhHKV1XDYq9",
  "key24": "5nxg43jfJ5kiXu8AfMBXotGxZRUjF8w49hnk53UXx6nvss5mLvgBCF9zDZ8EKTweYfYdmtT2doWuFzZ4fEmuqCXB",
  "key25": "24ebUhD59CCnoWqUQkmg5LwhQ2aUw3wC2ZcJZvCxPK6baDRfyqfSVMnGknjMVxW1gFEHxoW1gnGj6ArMQf7tsNcd",
  "key26": "3NYcVxCthqrepVuoeXKLpPoJ4aRdCKmTeU3zvd3WzxTrhwGRrpnyquJwevpjwttHjKDxh42kUmCzS4TVpRnQzSGD",
  "key27": "2P4kVy89VJUDzUCadCAeNjhTh3wJRtUnyvTKRfUxwCS8mQEG65x4rpeX66QB3ZmZjuL8QM481u4oMXzAfwJs7CJk",
  "key28": "2264hwLTKtfBx7cWTZT5Ab8mxsEDXW6qc9Lv4GArFoty7C5oBzvLciBXorwbFpbr3rZS1Tz6vMJdwC2s36gnTpco",
  "key29": "4FWjzmpgqyr9x5MQKR5Co2dMVW4awzZA9i9gMVauQDE78TQzvrPEKMATx92tM4taExTu6phB3VtFRxL1TY3kX47V",
  "key30": "2dF2fh28bDFXkqMQTYnS6WqEpBxtgPuwbNUXvHY8smTu3qyN7tZ1SqRggeeqGCkfPpA8NFPN8Z9XsjQ3tws3bnke",
  "key31": "ZJRYJGEM3XQ7NKRuSTtsPFak1fAFA1Jb5oDtwh4irqhk7WTNeDnVKjYi9dhkmEkjyxMvS3fZwSTtRkRDPmNqWeY",
  "key32": "5iG8P1ZA8nDrvPUdhU6vUvpac4hZei7SsZEuksm2cviqACevD48iJkYc6aoqFr3sBTq4TQGWZaK1EZisGjrT6jr4",
  "key33": "3Q2fynAhtgVMxmDgYDGk7nQMs8aGCdYq5ZYfoyYV3iwkhcJ2gCmeiQMxcXAQqiCFmfx3ERGRvKBQvdFCtJTkPyJJ",
  "key34": "2sSX11gXYeqCUuTefR7DRfbREod5YStUmsRdxuePorz8NF3p9sK2Vxd8cHMMLbZzrthWKki3zN9cKMkUyD8ntKhy",
  "key35": "2GhpK2bTr1Z8RNpjnvpmoRHnHaVVNfzNZh6zgMwPED3qBd7kXKnTtHBRHLSMjWEfuLnMYcXsJqa66qne7ikQETuB",
  "key36": "5Vm8sbf7uzCHX9z85UvdEjrsjfYCUZT9dEVWFwfeLtCCUcQLobi2kCewd7Ljdvshm1FRm7CJEgA6jbB28LMxdHwG",
  "key37": "HALsiPqepXWbBNVHRzYGM3SnfSFwMqdYjDCu6ZDqotPCGLb7XkXYr2wCRxMMpvfo6caL2fJZAAhEG51FujhRxLq",
  "key38": "4f2yxigMsakKKkahZSX8wqu1odmq4Wy5K4GPH9TCNpR7VHNnmEC4ESo57XSN8VPN43LXTeMMYD43zgAMN5Mo2Red",
  "key39": "46CcQnWkejN7Psfq1B1gNywxnu1HrNRQmuRQbTyGDz9qZ4RBeKg8qbLr6sDCkMFDkaaHex1QdqML7Sqj5arX4T2f",
  "key40": "4EeDu2xVGdTgC7yhb1rrLd1iNHydFDr2puVmWMAsiZ823XssUpWmHnn3e9ZiyXSX5a7Gf8kaE3hYRvHs6aXUFcSS",
  "key41": "2Uj7GYBJ7LyfapSEpiDBjdQE3znmNjTM8JHtd83N1cdz5pFjntM3mwNcGTonbKBTCFnNenHtHPL4TWcY6b9YtBxT"
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
