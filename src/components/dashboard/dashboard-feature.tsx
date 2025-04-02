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
    "2SzT7RKs97VVouveWJKRQB5na2348Xm4nszvwfUu4rYmFsi1zLukofpD9TKeoUBPMu4vbHZX6iAhavncWkJH1h1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UScmX9kFM2ofVZUEFAJdUPtthDWEX9abNo7Me4PBVrcbQsmANewA8o3U5jvSm9KrrTfKeJR34GSpiMjDcd1k8ED",
  "key1": "5jAQkZPPGTyjpfv7HcNiJUYJ7wiqubgEG5GxRtCZTdpBx2FPNo82EX7PjUcoctgSx9S34CzXp3pGktLZpAr3BkhD",
  "key2": "3mf1dLYSXZesd1BeTCfyFAQjnJYHfjKn7wLX6j9emHFB6VED4ZrbuLXq1DbTfR7wZgNf6UF4Pr2MVi11djG44JWp",
  "key3": "37aB1UrfcysC7UP4fXhQGbUsnJSDuMqDcCLfiWQt914bTwLcHXPPFwCsPk7UH4yCcZ4xpdskDFugoEpWaoiyafa3",
  "key4": "2Uuc6C7MWXJ3Qobr4mZnJihogBsq4bAEE2RUoAoqG6QQ9QydbUwx9EMhwKHr8SFF3Y9ZpRHyMSJB5hcJprfzbybD",
  "key5": "2NrSd3NCMhYTZiF5VUeUBPBBQ9Z9MgVMP6cqXNFu21xaKdtLRdFUxNny3c1rtbgjr7xsGqkHd6iTatXqFTek58WL",
  "key6": "5mDKGr4ubUy3Gdvxor5hiUGP6KqgWjxtaydDm2z337nGsjkURnS6LCXn8n5WESBDgEUM93EecqeQUvUygjis11hB",
  "key7": "53NYxrEWt6DzszXVLp8mhpzoYXrrBV6VahtawtRLFua9pZJpbsidqc3cBMAXFaVmEzRh3Mpz791SZCzGoyxfPZ73",
  "key8": "j3fPDoTYRFN55AeQRefTc6qbv6w129LiCDeLSLYvYdqXAW9KRoRFn2BP5etLL8gKnWHbu2bzHCUWp6JCr8QssVB",
  "key9": "3BT7od7otgKVXY53EJna4esqqAur7S6vkc8ibiiXtKiJgeZteAwxdqxAfsfpFew5VfcfPqjBhGhQqoYihp9jiQaM",
  "key10": "3qMpjksnXtgqh3T13J51YnZHqNGEuqEzgpmPZEr6mtHd26nPqkgaYvn7eRs3GuiCkKkdEvu452zqvxHy6oHj9cyF",
  "key11": "NSRUkPJRGN6goMh41JrKEARYs5ibK2zdFBKBiX327jK8n8rAm57eDwZTCbz8R52n6maMEqkBF2WQ5TVKJTidtaj",
  "key12": "NqcFRr25Y94qeUijK3bGfKTkC9kHPGsDtA1Un5KtLyZmp7KWbKi8kRBe56oi1VdvJ1Zxi1KTXiAuYUFSEGhVA9X",
  "key13": "5aSCWxwGRz87YJqomYQ1oSg7DyekrEqFJBuBC5R8D5Vq7iQgrfGcE6kURZXaQigzZU86fMWbbHJybaHoFrFsrCrb",
  "key14": "2FYh3PAo9xbMxvKAJzyFedQmrADmacBYkoASsULq9wuSA5YvNxJiWVtE2pxGPQ99hD8uHiadV2dAasD2881tEaEy",
  "key15": "3JZ3LRGy6HgKzZkyVsYHY57UKzbabaAKknAPTGStejD2XzKwSkL4zxwLeDCp5B7F2ikvg9kkEC5VsCdJdhHDa6Ke",
  "key16": "pb4aa7Km34RNoSVPQZrrUj1gnncbPwxvfVapmWjtuq7MNHfTVvm4wMLCtSyC2iK9GUVuAZqLMkeWD8bSibJJEY5",
  "key17": "iNNws7Hshc5FTtoK4SJNsbwiu9KZe3BhnVD5WM42FUyrK4mee4hQpiRXcnhMDRgkmum7rZqasQo8PWLpRBMvy5b",
  "key18": "3VPUJPQ5RfcBXPZyGs2RPhpBmwS9CHWLavJZ7tuSY9rZiKdmUZkA6g8ogX8BJDPmMsTNzUcRXdVd5q9dmZV5WcRe",
  "key19": "5XmHPd2WtBWrQ1TWmJvQo7WVLKmxmquCmVEfAZZmNiifrogGH8gPazCMqdbcr8CVpk91CAEFurUrgzMLqEGoFxHL",
  "key20": "5E9rJRX1in5R4b3s86nzmXEe7wXUXJ3pQyD7sr9QFbyuPkCycgW84dnAQ4neciQDz25rr6YRqVWcJfnAe3Nqw9S3",
  "key21": "35K8Egzzh9b3bcfHb9msXreX6FhNQ9JSmzeW3GjCN8imPwfp8a6FiQgzZPmLgG3YhxaZhoSvmWPDWWY6SxHqNi5V",
  "key22": "2t7eYox88MobNDMo5tkrvaJFBy7YA7XFyK9BYuoKpUYDpzzFDn8MsxZmBMnggjrPMSwR7hhDoePc8wLtxzQjgbpJ",
  "key23": "ri7RuruTxYpDqoh5P3vjWSAaHeqt2qzqug5iw4oYb9GAbt6oaQU5d5ySkvKmUYaSSiz6JzmMLs6pFAojQtgW9Pr",
  "key24": "2WXK13AtqZhvC8UiFmPu16FhGoLi6gFmNM7LkcSY6jYWDmvzMe9iynwSHiSKWaFbKF5Twf7BmcC8ydWnjPLywfh",
  "key25": "2eUs1gyt4qNx3sKnr5UxbWodXhEyzr5C7NUwuWtVPANR6A9kGcAZKrembpfDWV7p1iPKRtSNwsLGK5TLEwzwgj5o",
  "key26": "5A2EXWbTndXgF1MTHzcAPPbEf9ALip9gA27PBt1uAXNUDhnbdNoza3HQfpuhrtU5uaojCR7PwTngAAQHea3X9eXp",
  "key27": "ZJWTNYFXy3HSy2KpL1FWbnRj1PwwBhM2ZaBVbCm2zkzKGR7UNxxNia3xmChJc65k8JeMa1d8AfUgBfc6pYhjyFu",
  "key28": "9oyxb13Dnu3WxQyTUD7j2x13dDN4h7KpzcJUHxPXhmgG6wPnYLznB5WP5PTkpZnBkEk9YZWD8oguJMSG8JwtjHT",
  "key29": "3xc1WYuwQ2hXzv7qCQdz19pHxAPBRvZnjDTxktwDeDhtyMWHdtK17RZyvtLGqzSd32sLd8Z51xD4G2s6bEmCRSjg",
  "key30": "3YtFHBCWAowuK8eWDRoekumM2Xc4JJrJSDVSmMKc9MohMzjsKRFtcr4PnN6eSL6PSQmfxHzLpDTaM4vbtF1Lk3f9",
  "key31": "5h5heYoK2AaZ337MWotUxCCHyc9dwWpjuLNeqg5sUq7bBQ5FUv6PgWm9n4ifMGrQKNbhME4Jym3hFbPctDJsyQCs",
  "key32": "37CAHdAEQi1Uq3mZ3eFEdSeQsUskgBu4m7i5xuopUiSPugxvLWZi1z1Pw8unkNBWCYauUgQQKGHiFmH4PdkU6MA3",
  "key33": "4wKEFohww9dFdhBKcUoNBWiUCAUA6BMU2aXhsnPc57AAxpEv4E9V6yuNkD31bXTsX7fREhqN6Mt7NoaShAbk3SMM",
  "key34": "3MVWYNo8eUrHaeabz2fR8NgNnUu9zbTNXZfSqiaidPSnLafRUbExLtedpXavmjya5zJY6V2BJLYEGxdeWLz7yKdC",
  "key35": "3K6Ghmp3UF18AgogBwPmHr1Nk3FQB351GA2RFGb92zCSW1srNweB61BYNqTwF9tLY4SNH6JMwzFGsNa15nEq5D6y",
  "key36": "63paUfQ4J3XhChBVMByWW9t6BGYuYkgTRAnY5gz2GZyZpCUv9QHEpfCghpu1ZefaQM8t1d4zd4YUF9hhVrc5mxg6",
  "key37": "2X491VXPj4v3DRpgG5BvdvHDaYFgXdVRw2LBVreyHK9DnSVi5J6M72TpFiMPgGtNh5mLj16a2Q5qGBmW2B6eVFeM",
  "key38": "2WvTeYosAxjqgwHVF5UeM8ew5L86JchuPDW7RkaA4xm1cfxrbwG89CjsZeEX5Feo94njLKJEJYAfKbC1EHmSwfco",
  "key39": "3NP5e9JxVXopjMJoyGRHsVpHUCQEkyufWbWJBHzPaqAvp1X7T321FosYRysjFuThjzz3kBRigS22sLLvAbo6ZBmo",
  "key40": "2GcvVwXhpyPq8xyZHVCMBasTgGtchc2ZgmXxiLwsUt9XKCzL6j21RxU1GWDmgxtEmvakv1Ax4qmHNn2bafcr5RyL",
  "key41": "5AZm34smS9oKUJFVgzfRSJ7PvdapzKHK6djxhFefsoQ4TQhATRDV21nKMZvS3izXAH5VhGBpMBxMxozda3qQuPF6",
  "key42": "3LvqccGD7DozKK9Cs7XAkXe2VfmJ4iXMgwkEsAKWVMV4mWACwTmD83hvfRDudrNCFYpSxAMpg5ceMRtKz21Xo5y9",
  "key43": "MevA3HTiVGB5NpX6jhAKxVMVYaKtSDPh69m71NZjvDLqH6bQsxUcjehA9Z9UhCeksfbAYpZtxudpUkPbLBQohFb",
  "key44": "22gRgrMgjiYGyYCNcw8zCt4kJaquPPfTLUu9uj1fxs2ZpXXcBTdnUyUCgHUmr8tN6ptmx4cZkTRQJifFXrLaQevD",
  "key45": "4oRkon6Xhp1jQft6DfWkYVfnzrCEx7FSc5TVTX1BVdNc8Fbs3EpUrjUDi8iPxkDCkS1KbDXKunxjGz9tfpqrH7Vo",
  "key46": "3o95u5WT3Ur5PnAzeg13Nb9M1tS8aWo4ChHEYHtU93LMabG1BdNExUTmQvDB837NrLHWxPKXkSN5jcPvVXbfQMCS",
  "key47": "2TZE8LNJ244B3QZyfuE139TMQ58GcKr62ewfb8eCeYJJHvppwwfgLx61cne2tuwknsS5Uypyc3qt3YGe69LKT1u9",
  "key48": "qpVoa6sf3fCKZS9mjkDX6QpBgtmZFofxfAgY7dCefY9LXKUVnnVvGwrWeqrENLnp3WoBrxiL7samct5LTuLBMsX"
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
