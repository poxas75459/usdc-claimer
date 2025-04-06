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
    "2W5eVaUqmv6hpeEsTtnMmr4hoJTcEM21wS4z4Y87f1eM9YogSP4x2Tkxm6c8s6dLCmV4y7YcbVUsgkjU2WxdVJNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jz4q38SVMtJwuUzrigARc4s976QzNhigcK2Ew9TNJDSAqs6mK6wJ6mCJH3cH7dZ86aXbWJJNiagdLeXwuCfiVr7",
  "key1": "38hRugHhrndfk62cn1gzDJpmf47E8zFvDzhbL1E7SqgC4GdQtBtZsMd6nk4TjMdS3kgNj8o7VXuR7rX5HqmuxcKf",
  "key2": "2WQYKKXTffbhGDdaSNSHhKD6X6cFoEyE3sQockLmTZY6KasWHhXxcyMmHFgMRaDcLvTiSZw1wgM464RJYbKd92NL",
  "key3": "5hgmTgB1DQTiD9vwJQ7pTJTzZEmiSRmMJ4AV38z6uQgjeFTwQ3rVHDEzUDMJokRzLraCdfsfQA2z5FVXcSJFN3se",
  "key4": "QrjJBAdqM9ChTXtuc5NtKwmVbbud88F5FpKshp54uHKx5DdPMQxrp1wqHTngiBDJonv5YxqDvjyRCXMcSXS8C45",
  "key5": "5APom51mzyTEwmXWgVKaf2En2x5PFZZHWmdF8gDf6uJwB74f2ESgkhgg7o3xLTR7JP95FBikeu4SsektnaB67sdM",
  "key6": "5UiaSKCkG4uSNo7tTtAK9Nkn7SrgmWkiHgWDrp2wN2Laa8prQfwSfsAgXwWVwRo2MUGT3YDipxyziWjR4rPwVAH1",
  "key7": "2ofUmKsC9VMCX2aKmzq1C4MhyJq5thAxoCov7nUc24u2ANztTYQnJ68n8KssW6EmPHMj1TXssJtkWqhjbJQ31BGW",
  "key8": "37eQU6mS7X2PmaGem6ABM9YoqXNEy8L3GcGEYHKJ8BfJ87qVyYhHWiJLhdT69owiLqcjHzzBwrLWvXLGn14sQ4kY",
  "key9": "q3jkfxzbRnWe1No7LGhcbC6Re4yFocjsvEcBQvktmpKKPEWpUFNXkzDhpvkbUhbj5eDKcSAuCsKJZ9S1zmc4iwT",
  "key10": "5sSNDs4EUwDog4DEN81tjzVYd24X3XknSUzBTvjfEwHY9hBcxVUnepZpBwDR2BmV1UCYQrKq7pu5gaveYxR216dW",
  "key11": "5FEfGVncG1hpSjCseLN8gbSHw8dETepyGZZtFMpcAMvFV1iPSCU3SXbawiKupy5akwpDPvwJDADKCiHUXc6vvzLf",
  "key12": "3LpCr4tGMfCN8v2fnktMpz2wGX7zXXprbdaQ4jWhJsFnkvpohe59s4QBeozhMr7EVjKaJ5rqtwvFP5mHheo4NEfR",
  "key13": "DV3db8k8sTSe7pHQff55T3LcZ7GS3pGErNuQmvBrPZqYNvHbRthAhQjHKpfKjmSHUT7CBGSr7HJkaatQeMHv4HL",
  "key14": "4XmGDpmtpSW7mtc48HuSYW6xVrYufHUK5m6CvQ231tRUTpXoeP9rGRyYiguAMPaACrKkawfNj5daWaPHELWso5wT",
  "key15": "2gSBFXCFJSYkpRn8ewRW54n1S1YiEbpScZboCgNvZ2QKgZm26aWBqbwVPvvnDK2Yh7M4WsdL7gXMQDxmkdyi7AWw",
  "key16": "3ozbXr4FrjwJhokEmqo37oeFz2FqpCmnMzucFeREViDJB7yTEyCmzEYeTUsw13dmteS7KMbrGVuvqKsKWAr53MAE",
  "key17": "2Fjt9qhaXsAkuAwXa5h3wY96yJ4fGpzr6zizj2gEJpDUKYPNPxpvMFtLtsNVG8JLfRcCMqjvBZ9mPagomaLWtiUv",
  "key18": "5Xv2jPbEjTDVxiU5zZNstcXcpViC4MF62wuSfEqphFJgyxxPGdAgj5bQDgDhVkNpyeMQf1peyARPV6wFs7BHzSwH",
  "key19": "5yfht62PyXxDpyyudFfgecunHurCgtUAiKty2w4VWy78xVaU8QXU9mf3H51Z8UwunAHpDjRi5FEuHcUHnT89szjZ",
  "key20": "nFKbUQChPFVbvB7ZGdkm54xQwHsPZZCBTt61BsS4HLU2PchwhULYx5MDLd3z9bkp7G7cNSHSuKfrwu1ML62Uqop",
  "key21": "3DFqmai6uAPXUVh72jDmSMV17LqV1K21xADsyuNMHGabvwnvh5c6UoZe6HsYpBwNWEKPXFyKkiVkbHqWbL9GXNFD",
  "key22": "ETb5jmSVWf7enU5NSNr6NwqqDDBgT5QR5ENPbdG8XWhrkDBP9GLc72tUanxrxVGXKrPCvnaFg2eYRmLiuSyZfj9",
  "key23": "229TdnB9nedXrYPFNh2URKuTtRQQs1RQ6636aWJ2dgkw8Gtu8oCXgWUwF47F3UMfewEvuP3jUcan6CSU46W3isor",
  "key24": "5n8BtvoHwNfL4iS9vvDsyLLZGiceknHu8qw298YhbKj8317x4a6ttm53Z2FvxVrFtzJmdmcCRGZNQkfw6Nk6vbhy",
  "key25": "3Bk5B4p3y3WEi6TDaUyYaBk7ymDL1UgZnpD64yH77HCFDPh7NHrV9MYLtCwuEL6x4yF8VKBXJfWLLvgUMqtj46K8",
  "key26": "5sfZ5Turae3T13SoTee3LaEY6fnQiuH3wLReBRHPdDiJ8AKsy6KVPXCn2bcyQ8v36XgEywNicsKwk3KNKjoP7d4y",
  "key27": "2VbWgdmZMhHrPG4difu2mEvZRaypZR8A2F9Zq8525rC9GP2ZqjtSNRzzPbFxmrgWytfKv8C3WgbQd7fRNGnABLeH",
  "key28": "3qtuf6KTemrb9wBRpxPGyC8i5Tzdyj81PUvmg7PUSK4PRC7qZeRxsGHXFE15VQAoxyp9Gx9fvzFdB1B29iEbaP7D",
  "key29": "5Hztb5XMcaqGwaWMR4SxSFFmyYVr8moyFVfycSgzTD2voTtiEz3hn6wbHoWRJwqv4DA5Z7HnxHKtxWycAo9Mi4ru",
  "key30": "4kqrnUYyGqBchQxKbpY5ZpdwkYSASWterVqfKSPfiMycwuzFYQycJyHMtrJCKF82wwbqAvzwcE6PCBXJWr56qwGW",
  "key31": "5wQAgfXb5EeYVHBqTe68Zt77FSkEn9j6kFtEw2QmMXR3FynjeSMbiPvVtKdqXJqrU5zDpw8EMmy2BZkBbu4jLz2B",
  "key32": "3EBJ8m8egvfyhUyQyqnog1SJkTfuAavmLtwrneotw19xbKjUmkBVbYymP35wyWMaXUsYw5vLw8N8a9bJhC1m6KMy",
  "key33": "5xJhpXWq5wkQwxvzYqtN9fTiaz5qr3dFEjM3dgiHWrKK8a6GiWU7ZgP1m2mQkwPujwaRtYHJT4Snis4aqj4rNg3X",
  "key34": "k15qkZcCmqRiK9qMia6spmMaz19RxPv33Km8jUuGrciQ1uNTRsLQaDXcYSEmQJAHC8WEr3hWvHeT3dGjyoQCEox",
  "key35": "5Ln18kFsN9qvDTbShoaonFkLEgX24agm3bzSGadEnJfeUoNkqxdYVtL59hGTae2Fb5ZvLb3i6cFyCp14pDtfFBQs",
  "key36": "DodgoNx2gfbzv9EDj1Qj7iDLzGJNt1tCmPQVJfnD1cmjT8ahLHxCWxoHLt1sNkLmNrij6s9VDFDJx8BcEGha9C3",
  "key37": "3t5YYZKmFbY9gZbVyAmnaZXy9RHbUsm9v5Cfuu7nzrUyKr4E9puoi2CMhne6G5Zn9PyTkpATKYFTFKfi34m6hfQC",
  "key38": "2mv1Pw1sZdSG1FnPCnV3GhT23nDWZ4xcnAuAHYhNST9TyWB78s7Zv6o5fMNxdp4Gn6NQ4ACAiA4EwTFaZK47PtvN",
  "key39": "5ZfnkoW6LeJm4cYHvsKcpgqnHok4qUkvZxDtegtF9K2HCZVm7gLem33LsUc87q2G7eVAkrypFsevGz3EBmzNnB29",
  "key40": "3ExRyBh3M9SQS5eacD6dsP5pnGCyoYDWfF4UQgdyQKh1mnqs4Dogko9cUWmZHF2dn3JiNYmJXtCpKjwVZpatYfG6",
  "key41": "2regXZCoQw7gL8RWYqxuyvFPGi6rtSRAzd5HKmD2rPDydAwhK8hE4q62vTKkRvRioC9t2NR7tWw1mjfeYEawznwc",
  "key42": "59xrPiY14b54uooqANrDXp6GH8wRB6Zd2Z7pD3tyT3vjwdR3BpZeZvxuT6EC8fq88pCAGMahpzEEuVVTTBHJuHbo",
  "key43": "4C1TV9pEuangK5aFAP3LLajMxwKk8P6A6cYtnAr2wDe3N3iimqX857pDueg1p9v7fV8x8KqX6zZsmdaHtKo3wDwN",
  "key44": "4hTGezWa6Qhwkn4Rk8yNLk9r9K6gGj2bbE4dzca2Qj9QMrmQqBGD5s7KU1E8P1Ayp7URDNCNwB3jABoRKJRdnWhi",
  "key45": "4H4Z5owdxjvbGppNPViKKqm4WRa2xqdg7VwEznAZzn7ZqmF2LoY3MNNGqBngUvWSjhwR4Jj1dzMDY6i5MdfqWVzR",
  "key46": "23GuwJSydtP53VKVvUyhrJfZSYsvk94mUgMvz6EUA5teyL3ntrZZQSJvE5YCc51qFwPrrHd3yP6BR5a9SWe4uPyF",
  "key47": "PQTGLW9R5nLW2aJ4U3qP2ynRgr6wjg9hdLbcGVKdkshVtXTK1iJXuq6wE7wNLuqLyEUapLSLzcbTYJ2FGvVK1u1"
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
