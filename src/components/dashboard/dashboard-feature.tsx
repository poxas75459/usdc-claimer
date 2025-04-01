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
    "48TWdq4Uu1nLPaxNrKnUUz6ShMWEXdBwNbLuopYgyngZuwLWytjEeqNRJzzCYt2gqozvfxrX7EFP7rrEJbkZCRiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEA8xnS6umvgpoeKuCXw97ThMueexMgozpuJ2nibnfgZ3ouuRYKU4uKAYfwEBqTQzkXGRPrHJPSLc4158CJA3E3",
  "key1": "YbcRccegoixPfx4X4QTb79EjCAP4xoU4MZBYtRD21Ka1XvzmAESryMEPPAgg6rgBMzWYjTwpZMskToZtwDysiYr",
  "key2": "5T5EZom9wz6APt4UApQqM2UbNaXjobeinXTor7RBeXuYTcv13gyouXf7NiwRSPrrbyEDQAjGeyQz85NvN3SGNFtC",
  "key3": "2Y39SpTb4hac9D8nNRnRodFR4cTm8JrVsQY3gsx5SFKa4WS9xcHx6JekSd7AX8kCqdUGMJEDiqAya3dTMTDU2zkY",
  "key4": "BimsmoTbcfun321BpfWSBWFhr2uU5HLNAMc1uAcFE95wUPmL3mtiQRnzV53Y2M2qoVJn5B6jzdTaGCwTZwXVpCD",
  "key5": "65iZc2bJCTZqCNvefRUhxWvGXzG98T1kfASs98EYLewTbBBYWUGVc26vzuv7L78BNdZQXxfzWNCnZ4NzcPUK4v9g",
  "key6": "7REDTHha9j7MMtbdFmbJM3D5QbVxL3YiE3dpzW62iku82Jn6CkRUfXdXSEWRLSSoK86iWcForx5MjTMTP93zR21",
  "key7": "5Kdckz5Q6bzt18eM29Jj4t4XjnAKH19EGWDAJ2ufADo2dNiCuxViqWBTZbPdb4G7aDWa8UXZ7TUMAiyFv5sbFqQq",
  "key8": "3UQ7ZPNKACV6vSFcKVcLGuTk2ge1ucxJyz3PZ3HJ772Z3q9KbVs7VcspUE4z7dryCQrkeyiG1XE4AwLoEW9eqYFm",
  "key9": "212nZpT8cJ63PWurLFkKdbkYHgT5Mok219dMH63zfSvev987BFuMotuVELfiDQ4UsYtwtmZEx8zsdVVhbbvFXTny",
  "key10": "642QvAPYaZCfYof4c3r3JB3UxqJZTpxpEALgz2eubSayK1SszwBAWneKMCYpBu3nUE1JNvzuXXnqdU6qboAmnrQM",
  "key11": "5uxEsH1seAjVUukNL1Kge4tFwHve8puSNkKf6CqU8YvHpibchYhA6h33tiSSVGABzYrDmVRKofByg22TgeRcmGsS",
  "key12": "3BK27xBWN6XJAi5FZ14FwU92fF1w36u9o52n5KPzsJXo2yg3nxswiexsJ7XDWGQpmmzNRZ3phQoRb75jLaaHuP32",
  "key13": "k8ghStf4a1a7VyX8FvBpNF1T3RFtN2qSFBSB2y6Ph2ti5vZ7YCMnD25PJJv1DxguqaiUr2eKemSBiBLktYcaUw3",
  "key14": "5yTvRhd88uCiiuFeRmYh7UxGARf6CP7TstoZG5FjvqJh2FtBSnTLRGdejDYpr9s1xqZyFuFrCeHYy1UQdfdmCoak",
  "key15": "29fLNUeaw11uq5pKBaaC8QoMB4Puu4nAkFNFpNJ67NCkNaLZLXWPXNbpL93stBtmg62FhLA6d1pPQ6XwDyfKC37C",
  "key16": "3tdMP2yN4RmpE79iapczyNunf5Hg2Pr3Zt7QYwMBdgQUUqP6hrbj4shdjhRWUDa7f9S4mYsc4JDkeawiE81LRSza",
  "key17": "4KNCaowQQhVyB7tsMDrShVPRYevGzMRPqBduL9CVxRD5yJABMU95kGSFa9mouhun2bVqf8BdSozkBHBKDuuKyX4B",
  "key18": "dcZ6TcZJoUs5KJ4rhAy7UNBRczZimD9MrHiGwWUB9SD8QiX9EBz2fhYEAsCCZGrPptdVCaTzMJXUt9wbxQAX6FJ",
  "key19": "3Mcgmtjvmsp8ipHNzFbxz6sb3isKEd32jXqRbxHTxXp1negyYq579wAEvFFFzrBnRaAzRENVtMjU7zr4WQ9a3jJZ",
  "key20": "3Qo3buHc9zoRGSgc9dpJtWYh8HDi9PJ3dJxQY6dY5pXC4NVof8hJEvRDoatwix6ZGT6jEKb1F57PoGCj6tvKH25i",
  "key21": "5tF26r7XUhM2VZMMkQzXjMphdZtSSFCT9yGKCYqgRwWqLHuT5ozJ6BNGfn34Wb9q4MwmrNuGpdPiUCbFmPBaTmUF",
  "key22": "5vquLJyxF7xNfpKmreCVHi29j2GkskZqBkRzvLvATtWQSzsNq5fNxDTM2ZQ1FooqXRK57SmDJDzD6TpGEuJ2KcPE",
  "key23": "3dtMdKgTjAmAxbaoDajZ8yrGp4jXqWsAbbrScmU1YkNoqc8wKdMpSzKRPVgHvg9U5UJ5NTfj8eZabcTKfQZ9jhqV",
  "key24": "Ht1znHDvPEEQnYcUmbCTUetL4FmqbmGXUF5GZzg4NyJHTAJdAY5H55uYr6uyzC8aZLAkZ2yeocBUFRyVPC4wKwE",
  "key25": "3hMN55xyinKx225rp54VZE53yNqTcxDn79vx8fiXJSj6ZLgBjfrB5Dvk2D696KjWKc6Ykj3rViHQNCLee9Yx8Kcd",
  "key26": "2HYfCqwzzgPZstGAL1q19RbKmDRPC1c5htvrxs24Cjo8jwudzGSDgyqV5bUDA5Uq3yo8yixwJr5nTXGjyxtPKt5s",
  "key27": "5yaGVjYE42RNbD2N9DvSFXXR3uzNuHpVqJCuxm7f1zxtwNo4mKwx2Pgzb5vcLSVZ8JsMRUqTQmE1RW11PkyDmRYP",
  "key28": "5krZj5Up6S1eiutuHtNZqvfFjkSEC6qiLU7HnUdndKjK2reNv4eBvufgqRVCtiH7Fo4MWm4VpxQ3xddzq7EXmx3V",
  "key29": "3n1dhGtULKgRN1AjWcGuaGBEm3H8GJ8ZnNJFHPeEpxq4aTQHaAwKbUpuJ3CXWT1z6y8WFSn4Eyw5rQoJd9Umutf",
  "key30": "2URKH2XqudjY4De3iPEAMA7j9EMCKKQWSddGmoCJXDxx9EEq2tHKrQ4Q31GXXxMF5GErKrCsUuX46568DC3zHbX8",
  "key31": "63JU3AGzg77hJnXQQ2tdU7jzM4JPWtqt5xzGr8q4C1Y6nJCasozSQz9Qe5z8RqadMVX4ypSKmcrrMrmSFZdFMgzM",
  "key32": "3BeHwPg14dvxULTp9GQSqRr8EXQyCL9Em5ca9zr3WKM8PpL6yyqx5wEBkefLP13samz4uMNZUdmmXdtxb4QoWX2m",
  "key33": "3HRRqDHtCftvfLrhuyJab4nvLGtDEfnyArUUTCMGhkUnUze6oknVM92KsiamtoTb3GZLsfyzphqqbKe7fKVCZyym",
  "key34": "3AJUiemAGK8JLKpzzumNrTBBeXSc1wwTW6AeynkLbw5J31tdKanL9n42A3MywPTNPvmHLdWQRpKfT8tUpD25CyQF",
  "key35": "3x9LhSLpL2JP85zJ6awqKEuu64mCWcVsKBMPiNyr7cgk5TdxKJKgVK64qCecxwaiYsX3BxgY3PXZarBqrBMaMZYC",
  "key36": "3sAEr4HpzCijpsm2y9XxMhisTWkET1uRhL1wfbAiUXeiusk7iTRGADzB4LPjSqkpgCNox45ppC1qFhz8pidBQSxW",
  "key37": "4nFobnC3Vad5ettwoWveTfyW7ErCz86Em4FAGBRegTxJoBVoCn9c5CjbnurMjZ1cnweo1VEhQWnQsGksDDiEhed",
  "key38": "24SEK94M2yeULZRTfW5DTXaGn5bHe5qFKJWfnFjMH6zMemzLkJiyvS2qRCddYMPRHFGcBuqA4v1EJLWMaiTfx6Y3",
  "key39": "2NKMSaBVJBNp6bfDCk1T7Rh3N1bWD4mwNCXVeJScnR9f5UeRE88nS3F7Y9LnPA5Kit9bJgWsuwnMMB6nx9DuRq2e",
  "key40": "2TyqwGPgnGQEVM7UeT3Hwnwc4KYZdQtjNUkDCXBrwbR2K3ycX3mbpqy34YsNQWR5TpM2XHQ3ERv5SsbQwwfrcsC2",
  "key41": "Nif5c726hgpeGA1TEwwamZNVWEN8bdaranRytSjuxQGdGUxDXNtstLLLwR9LMMnq5mfQi4KDrnvPtCvWtjXyDFz",
  "key42": "nr7qXCBHFJxU9GYMgyaMGTvJaRaVE1Kd1N2LvjEJfgVgXwFcVrVJNBL7JFs6pJ2JFXR7vDgsQbrfaiLGidYpDg2",
  "key43": "56cggWbQsXBUxbDKux6DKWZniX9cdP2ChGECVgMkFLoqrzLmwPnoNjfYtRExcwXSohqd5LTkgpmE3MDRJz1G3uwj",
  "key44": "5T93fDFjPFkpTgMvJdcKf6RQV1KuAwLmaV2P94iFf5wDJaZNHxhT9xuGjEcYnSGm8eZJqMrBaELzMeYgPJ41BsJv",
  "key45": "4833gtbBYnvPjdwuYH7zgHyuAuUST6C8PqkfgWTZSRfW4ZLrgVqor9q7JMBirCiZPVPWyJRqb7bKY3oJvDK2q2pq",
  "key46": "5uvtv2KmUPS1BZSgaTBYe8np3b9QU7NEYp4Z4JX7KCnYQWyDudw8cwKMHjEYQveL1MUX1KrJVnRuEcGmTXgSpknX",
  "key47": "Xe5FwdgjF8T38tTGTGpYrqYsPiPEzPenAQwG1hgyHNvfURjvHwHmoHoHJfUYw7LJ1e5bzpjrThb6nyr7JVaNtR3"
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
