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
    "5EcCjUeJiCjJPUvPfRd9nqHgCRf5c8KEsTa1oZpFq9ALfwLSEjLnByeffktXBwoLB4YhHXPRYvN7jVgLc9UpD6B9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ex1a8w6UYgeh7rAK2A1nTcjLs3Kdct9sPxta6V69H7pqfS9ZAp3mbyYTXYUV5aMmMFHMQKXX5gAPHNCVW6QVLk1",
  "key1": "24QnWHHXD7iVMmgdk7oN3LcaKZqZXcmyCFzMPFLowQcEWv1Dm5RPC8zioZxvPW7LZiJ1knE3pBW7iRSPAZQiayki",
  "key2": "5QthY5fPbcoayoDd6LvEmd5reR2FXtbZASJX5YnR1oeh4Jo7FeLk7J6giowMwPCjmtXyPoqA3XD3tu6VDe5WdpAq",
  "key3": "42MJLHwk3k7cNDJUP6kFvszVsMcfwrekBNACAHAWfuHJgqpxn3MQhYpAPTPGFe8aSoqviyKJou76HvYYQWSwLybV",
  "key4": "5yMDCRkrFo7R7vQ8GnpewvSWrHzM2oDPyToQTsbNwxAvekXWCmTwKyH4ik5Nk8TfoVaVHSrcE6vxjbUSMFeUHwxs",
  "key5": "2bQCZPASPk5sGuAfQHChzTPXqDyoTGFHV18ksM8U3CEKSjuxbNf6hhqbMtF4wYuHAVaocaNp723UbsCYvMehV6Xg",
  "key6": "63AkVv1DFWVoRzMMZUrajfH4DYwQXMhT9ZFhHbiATt87MKJX31ZvhDpxN2amcNv8BjocSqXJxnWQRB49h9hQdYVp",
  "key7": "6JeX3R31g334TgQXP6sfRproQsmL4CzYCvqLyFbybJKPwLmAtRuQbyWoDfsHLpTTn9WNBerhXbDFQmoARnGQTnL",
  "key8": "5A42UsczkL9jeAMrnLih1uxVWf7cnMWSQYPjUjmpu4aHCxbj9b2WygxrZEAxJFVzD9P1rwyGC2Lu4gQuhUKK1PaM",
  "key9": "2vykr7MphbC6qgM7pNsLA7kJQryD6JUtkjU1xGpbMAGiWCg75JNyp7hz8YtkLAHLzLmTB2rKFocCz8cBrPVo39dZ",
  "key10": "3WoYc7uXpyD5tBw1j1DZgkUoYkgCa2xzBJk15TPfev2TJkwDWzfquPvBdmKPgqnHiuLqnK7Vw3Yvabhm5xtbkU8U",
  "key11": "3P2RrSDQBnXGLAyG9f374QfYXaMyeonvdE2JaKSrZebBLKdrsgUrgs7qKQ36gc7dcJKtH2MYTYeq2hpmyxi4Pqa2",
  "key12": "2J6C1wena36CpKnMovH6GPDTBv4SRPbgK4euoyz6X1TRoxPhB6Pei3fEixZRVZpJFFnVwJaeAJwGM9k7uJv4B7Ni",
  "key13": "2AKojvgRzMBYgzRNs3SMRSqYBtFHR1vKTpQbrbjTbY4fa26ujLqTxHzNyxawJnpwxx9VGGtqEKcqh5TLK9t3op9A",
  "key14": "4SvdvcdS1APA3aVxki1kDXjxhoijLbhtPeadjrPDesif3BRquTrCTbVFoqb5wPijgLu24UFsZchernmeeYJMZwcg",
  "key15": "3zcHCKC8yUY9eyNw9aFyPzwYG39WNZvUJTxtGy3ZbWWHcM6dugHDqZUziYKr7zYLrzZjvDUk68C5eHAt6vgEDimP",
  "key16": "5kpEBGsx24XHRpH4ewLQ1oQ2uLJzZWoG4GciNhsQDC4j4CaaA6cVVhw8FiMvtqEciFpFkwh945sumZfkqFhK6kBJ",
  "key17": "2TUQbmRPzbesBkNUhc8AaG6UXg7AS3nFHXCFUtd3tJiqsHWZCUArthwNEzQLyZQ7CVcrEfU9R85JzVrtnDjMgNyL",
  "key18": "DpjPLQ3qiFgRCGnhHBLyS7ESREj8TRBk2kL1rynRWmWDQJrCTd3jBMsu1jRzkBi1NhcZBhtZGsCaoBMREXgfEMR",
  "key19": "5DjaaXT5acDg1gbPr1yd1HvjhfkTT8MFwJrGsAukyoLAYsDTmEB7QNw7DiGa9rPWRTbxvaAgC4apD3N1ARkbWt1J",
  "key20": "2UNGv71ps7nLdS46XVsEwKnFJJJ8NVJcUKgN5KPDRVcEZhtQcj9QiWXaNWtmJAH2bgFehfVe1gEw267kmskAwcgY",
  "key21": "58zTis3NvvGDnnTkXULNyyeeHWACdFHZecTtGpymJg6PVpwqxwsJTHePempKdoeHWhTS8svpgdoEN39ZTf7AFWVv",
  "key22": "42Uqbftf7gTGy3cepaRPc2QATTLqxYoY7RvVJxrYSoKHk8482nwSRZWCFbcRrqwFQaQEhvK8Cfb4LepjR1TdMUE7",
  "key23": "FMeGq9wyXT3p22Z7jiK76nM9TDFTd9qqbWGAvJd51Zmx6yxok5DUNPBbQ4Tq37ebDFWN4cUooHmPfUNTSjPk5gN",
  "key24": "5pAU272LHKZHYVCeReaQVoxi6NHShk7dffv56ibJRyS82YYDB72LLaaLa1F4JAg8vzdEFytSX7LJvcYFqWiDBciB",
  "key25": "3H2ZBcUc9kUE7g2aQrTo8aCRA9scEz4an2b6Sv4ai33bajtc8KfLC2i7FCwHXfmEE1m4Sq52d97kcpS7L5gfo5Xh",
  "key26": "4VUBeMpNXYafdAm5ZKzBJ862ab5cam1q7NSjce7P9USkcuis5DJWJqxYQRpAPW6S2hMVgb9hZJTZXuSYhG97nZGa",
  "key27": "3YbzsoCZKd6TCYEau3RoyhHjeiQtY4jfABuxZ32dDP1uhEQRzSFLNiZZX466F9Ku497qcwrqu1X22UW9928EpCit",
  "key28": "2WG65q6tMJY6bq4W5wk2tpsWt9cAymqeSMRrfLZVGYh3eKPP5LXhpRmGBbcQLLuSNBfRXaAcVsUse79sZpzsxn9t",
  "key29": "5fyb7adFWFYg9iFgoYYgefjWr5hpur42JvtYLhTVXctTbMRkWQHgGFbDqc9TFPfhn2DiF9RFrw7U7FeiKuHAbE8x",
  "key30": "4fAKykWnr15LdiLTvMFQvnSQA2rwsiFpg5VLXM4ETZmUbUAQArEg8v5fnPCAkSGifCbXPpvnaM5hhYreEUbfDwBB",
  "key31": "5tmymMDLP2E9acm4J2f8sRjQPXiuL2FAFK2hp1fcL9nsGy7MMJWkNzHaZ6SgtwV4pcrtahWstj52ZWRKnmyTwGDz",
  "key32": "FRCJjKJjtpCwrJcuHeXuu7mwEbP1XpG6KHh8QtwEnQpUB352YU8Qejn1T9dbuPfcisMFRRDALbDQ2yofXndhdqB",
  "key33": "2EGpZVL1u3JHk4VtXp5hvVWXzb6j5ABvJ2kckb1rLGwKQpCt5iRC8nf3BYXTKZ6mbw1eVTyKbBvKJqykE8gfkyXH",
  "key34": "GE5fZuy6o5BC3NkrMtH2rzAT5pm14H55WiJD5oj2uxVeSCJD4NyecaXA8BcegKQQAfyMfyWkwYj97goRF8HKZXB",
  "key35": "3Yj82bJTUSGdQDoMdXQnV9edeX9S4XSiWgzPJk7LsVmAarLVVD6VXzTogDP2EXPUKEmkazFiKARj9nQAVcjK2Vni",
  "key36": "3wRXPUW9ZRdwUYcTUTeYpKB11q3psTqtAgANg6rM6UCW46FgcvzqywSLhenjjFw4FhzV3zHj1YmXVcC6ru6EbpGT",
  "key37": "4FzYcs3g12L24vkYqofLU291sXPoGpkaXJzrwcsE4L5Zp4NsYdBnKxDzDULfvzGNdUio8n1KJATnTJ5BQsshUZz1",
  "key38": "5JgZzfxx21wTk5RR4DGps7ba9FopWNdaGCmLVrMmGdSLcUYA1E21C6aREbyc8E7E1EmXx8oJEBLqGyc1oLpgAoRH",
  "key39": "4kAitnm6rv1kVVjVqJm7cVJYQecWRn5sZE6NNXScrayBDusz1k6tY3Rz2ZmSjCBKw115Gii1TLYCAsALne7TSPuN",
  "key40": "3TTsaPuj7L7hf5NujAfsGMz8nEnMnYpAtGyfA6V9unASXpoaS44KMmTvCrPcKvsZ1nfbXQUoiFX8wXqDgVKVg8M3",
  "key41": "y7T8ArgHNxGhXNhwcqFsMiYsnd15NkV3SqP78AhfJKuUAw7Q49Z4i6uzWnKG7ZZvuPRXwF8ir2S4LUoz5Bt9TNX",
  "key42": "67rKMeeu1iAGXf7MRrcYW3hY2j2jSfLDNtgYJdDV1wxF25RUFBimWz6gp1ZFFT5mrsqZazrh6WVgqCcVZy2HdLbF",
  "key43": "2LqZ2rzZCMEWKD1ukSgquRHbSUQUUMSDv9AWzwekbkS36VMGzBc1AbjWvwVqzWabFyizHqw8Yi7NYQVMu2hP5t3T",
  "key44": "5wbeiLoyV4jbFHcf2S5wzLMrtxUPWe7dKtz3xkXxrthF7H2eDNswin6GD9GfgomZtVhWDU6DpqaHNUBAXX5qQ4Bp",
  "key45": "5scWQvfwPyg8Qk95BsMRpz9nuGztNQAh5Sv6ehhwNZ9jD2nubKBvzDPar9v4RUxCzeJ9FoyKgNeEFaKt8TnYy2Li",
  "key46": "4iYNTjBAq2M4MpPZGscxogemtE855gvQPkd3uyW7snDz9dCPRwgP3cB1V89dWfip3RdABSmpGhN7NovQkKp34NVR"
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
