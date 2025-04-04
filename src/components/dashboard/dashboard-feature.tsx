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
    "3VwGEy5RDVvWKJ4czspCkrVutBdXrkjDRXRxc9jWCEonDAPH98LLAsMiW9tRmKqAartjfMgQeRNgAjceAjmKYfTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mEpvUByiqsh9JxtdL934ZCnUiQpqiYpadVr8ksazvz8kQPs9jH4hu4WFbhAAxH8WBGGEseh6TUj6mWT4Q8GkpEb",
  "key1": "2oY8ELr9tnN8X2wtfZnf4w6QCncgah9nmYF1t7UVFutwStzH9kmvWe3fxEYKktyiLMLKzZVSDmLF3hxXrDojwu7A",
  "key2": "2pNXFw9bj4eaBDyrt9CnZTW44CTLLDNzF8WirEmFhQwAF25VJKbUc7bGVxWdDPyViCHCq4WU9fRe2AKrJ2JUJY9i",
  "key3": "5TdrHsoNewbcbY9KqrfF9JmUdq3eiDWPPQmh5JSev4Xemyfm5PGAWaV2Lq6vQZJGnb2covtfaPeVytJKJqDCDFPB",
  "key4": "45FUFdCr2MCYQFYbkzNGX6eqZLmwJbV32w8qZrsigR9GRua6XY7E11NBqi2yXGdkKqmEATppzQd7SaJNyt1ojd5v",
  "key5": "pEvM2zAxNobccTWA6DWhiBs6RjWekHwZbxzJaSTZ9GnKwYAtFi1P1sdZG87sgmHGx1M5QYCkK7GcMNJQKCbYmXj",
  "key6": "3LP6WgNfFbpPPJpCewFfZvk7CGqb7WYu3HraJS18Ey1fEKY6qoh1RjbgmaywPGG4Zhfpdnf82tWpR3jCQEKnW8f5",
  "key7": "5H8qS88xt9c2SikwTiAaeWRXKsYf3VHZqPQCY1Mva2zav3vhmMbsZaVj58CB3NDV2LZMDU6kw85Bpi2S98nUPcCT",
  "key8": "HK4y6BEcUNesawjvQ9pV5XboS2cJA6evSZnSC3JET34amtFWj8mzB1oiJnmXazzZpN9a33WXnXTE3jRwWgM9jc8",
  "key9": "YrPnHt1R41CxekFTYv4WUdhRdaJwHcHfXe48GX5AJwUtPvke49mC1GgRu2vFMxSwP8bszP1HGiTpp1cZxdez4v2",
  "key10": "3DdJABEHGBYFmPYYjYUAXKMW9ZBcBjRed7U9D4NHb7Se8D8FZ8NE4XRVFb5VLQTR2V7jJoy5bjNd5f4e96XbLmdf",
  "key11": "3yhPmmbzjAdV9YSgrRNZn6NHbq7BdnxqVE1fd4uVvcLcbTF9ykde6krPXUXkBjZrMMVXd7wWDpubVPUgA5tCXjyL",
  "key12": "2DXMGsxDjrUKSBiwqzubFupWwXodVB8vwDcLHCtEvZUqksm9c2NkiegXssLM228DZJQPwbGtoWV9GkmNczRonCDL",
  "key13": "3ar9adujkBte4GyuCAyHbKZhH9n6jfFLPUTeETvjonnVZ4U3ejLaogKAUYtzdDVUGEWr2myVCMbarSNsPkfAgHGQ",
  "key14": "omx9G4HqS2ztUErGF3LNSN9v6dQW53xDtLpfQmMbwpwPKwXgicuqWT4uJ8EbbmjnNyck99kv7HKLimcjCyvFsPS",
  "key15": "hyutJxMk82aXiBvgdnxEcfubn6xXHtdtTt2hcZgSGQbfE5YMck5pVJrh8X7cfxpUywWT8vh4Ey8rfwa731Aktm1",
  "key16": "VdzizckXXsZwPVMqaxvnpV2S6hsAHbeUhZEmMTBWrydrJRFJoMtXuUWhVa1stRWdQdHN2Pw5EpyztZh7cog2s5o",
  "key17": "TgnWsKAWrxyzGdynuMFjroby5o7v9eGjS5VYG1ZMJaBd36twQeyRQhbz44t69GLQD2RYP7c53GdG1xy38TnvFsR",
  "key18": "33BPU9wdNrHzhFp5K95pJN1c7qkRyFyxTUuWi3A5UkvSzXqPjbVFi9wCEJGB4tfs31sDU2NG58v5rimvFcTxbZUn",
  "key19": "5DK6rty8v1N8bcVthxYo8AKi5pgb1yzhyxMD1KGav9ZDh13rUE1o13intWPhFjyurpbBhBBXtG19b8XvN1KQu7ui",
  "key20": "43iAPceoDWLETzV7czt2ss8k13mqF3887XvoAS94aNxtfDtw6SF7yEKmSWp5cL2mWnWzzBWeyeTDDSeCQyPxjWi7",
  "key21": "GBCNNAqXD9UXshs7S7NKPjWDTHkK4tHZMQQgdJ8bB6RZsVXztgVKEsZbcqpAusndHHzP5ZtBVGTybfQ78AD8PKG",
  "key22": "53bDL2SiQv93dKAb4nv8BKm4yGzCoZe8ztWC1H9DFjguGjx7Fo1QurGD5bepuLJJM9YV91sbQY7sTcz2SccFDUeV",
  "key23": "2XE4W7RWcYG9hpgwcaUvK5qD6UC2J6RDDS2EdDWcWvhU6wHqWjLaKaYgVs2tFmR341a2x9iaVXxesm4mGSAU7oPz",
  "key24": "3XuHQF8R2ibJCjJhnqzdFsQsQHxR8NKxYA7HpRXfc3JaDzn6j8mkEqa44WVa1Mt5yV2mXYG5MRavNEgkUh2PWbAZ",
  "key25": "3nRK42Lc2zsn9gGKpu68Qs6pkV5DtanQM2Z74ovsWtxSxPAKhYpyEGStmhhNB2EXvQMPHXsm3adUvfjDiyzwi4P4",
  "key26": "2zThtxVRdWsrwAv65uHXMnPxfBBCTZ41qqM8iZcY5G5VpwEzKX8CxrdGYRXN6xnfBe4WAp5prjkRdh9k77Tkzskt",
  "key27": "5MK7b7L3pRDp6dPXu6ozJ99XN8iMa6SNEmBDwYKKC97A7bTmYrY6u8H9qMyiA9yfNEyoii13j87ZYmrLVQpaJKGx",
  "key28": "29uLfAzPAsisvPTxfXD1ZDJpxcZPqZRpPSMWSkbTpYLBruFaz9FJPJQc4YaVjcaaxHBbHBVs3WJwVEvnzrjSDizq",
  "key29": "N2jBNVJh2Dak4f94QhakYVdt9QvA7LBmf3JpWyrgJCuHAy5ESaDGoyeYvSEmpj1YwrfGekKmRqvUfrooHAD9Dh9",
  "key30": "5Tgv2VEJgKLTWwGfbSc85AKw88DsTQxEdNMXxFVjT19b9DgzD6BNGrMs5GTnSzRyrr3qbiH3ExTA51X95CfpVM18",
  "key31": "FHwVn5Gp4uB5QW7KQ5opc8nLseNXMr8NutJRbychRZFTFXGoBrnxstwriu4oMwVjSgB3ov9strhAAFB7EQj15ky",
  "key32": "2GSkvZuKzDneGdwgmqnADPgbepfMg96uqhYScLFLU1JE3MvJuLynpmXcY62xtZSntS31ezVj8oc1MbcqcxJTTMaf",
  "key33": "2QnXxV2kuNCYyzrLvUKAPHPyqH3hFUA2zZLRfzAHwySSNdX79G7GtF1s5erSGfynp7jq54RVdBABYm8vuWZ5HNNF",
  "key34": "gCRNv6evDLwxu1rdqexayFXZx6A8DGQniEegrGtH6iiv4m2iGu2bNAQTj1xHX8V6pB4ftDZfVdhu63qJEsXNVMA",
  "key35": "4yCbj5cGXKPEY7kBimWNvXQL4y3WDPX5D1qzJKETXYwYPCnG8CAaEjJCWVkHyFbLq5UuvzWqUAws7xh3mxfDNFa7",
  "key36": "2g2VeDWgwdWYH8YCUXSyKqdDLXs9jX3bUJtiJzGbFtXhqJni3QvunsaYrPuPaEiy13LFSB8nv9weAw5wqkdY49mm",
  "key37": "4sutJv7CvLWjt71uyNtoAZUeEEh3f85e5LE2C4iHUKCXrR1cmiKH6FERQdN4iEYyzHY3cSWPt4yxwUctQsXLqyt8",
  "key38": "3Eo366a3GS6kpmPbq94Ezd3XfHRnw2eJUW54WcrNNgTRwBMPxm18ZQppBfoZjpjFpurzfQ4ZUPuySbHwKgMeSKoM",
  "key39": "qm6epX45SAfCpftbfR1N7ZR8GuebyagCo7QjyaLhTymFoLxQdCi8XtCoFJxBKiwzxxLeyvHp9fgZaeqHb2JB8mb"
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
