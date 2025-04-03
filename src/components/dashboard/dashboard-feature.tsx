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
    "2xMqGL14ejNoCYW8AJVLEGdV1ExeqDW3EFYPEWEhHQwPAmYLV9k9B6HNhXGaHCJsUp4jn63Rb277q5ineq9xMJP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfnaWyih79g6tX1mLGcmvgrC1MoGLAa6WyjwyAu4L5pyH8HdvsnopKHfrrxocGdvs5VecK5JJYbrS9t25QMup9P",
  "key1": "5mAr9xk1NfMf3AWc1bAB8TmaP5DAHviWfBVD4KaVbuShMhoi9gxXXPYnH6yJkvttAktLsDuBYbp8qqf8QTfcySED",
  "key2": "4rdr6dm1Yn226LeUob9DrYQXEzK5B39ZDFf514bNfgS5owpzfqx9M9dNpx6nZBQwTfiNgWAEBsNrAdkr2FEAPJ2t",
  "key3": "62XhRtc2s5g8ctR2sQisPhtDCe3PVcffZ9n6eHwAQPbLFtvwQBe4DqoLG6aQoA8TE4s1hFr2NYEP4FyLY3YQVoKg",
  "key4": "4HczxFKD9T4MTaYPfwZz5MmQNfL3yEMQqLtGW1At9j1H9a31kkHokmqwD9TySppik4x26h9MVcZFZw9MVf1CpVGs",
  "key5": "5zRPdK9sXyjfP5jcf97kqdFWpwvT1T4W3JD8pSBsuugHNdViW9hKCFUkzW6n1LRvp8cEKYHyS5So285QYdqTyzSq",
  "key6": "5JqyBPnVrPT6vxbxBoF9tP8opi6cSpnrUezSEyQNCkBAtkzVeS2tq79C9S2feTL1Bj4nt7WzoRDAhFjsnf1TGnxB",
  "key7": "3T7wHdRLNxNqDhgnHFdLvBzrwkzX49zWah2bsTMopvumtz9VFSYVUSUuJe6JzK632J4BtcdBbAM6e3yCRv9iQiTW",
  "key8": "2EC7ULYQqCK27Fn8QsSrFANwiu8EE7YruHaQnLTtE6X81GecanNPqLH6Lax6GqoUyswfTqAUfJphhnVgMq3i3DTM",
  "key9": "3PeKqFFRXsK2iSu9CmXWXAKNQGsAoswS1k7zqnCAkdgbokicnA7o2mXnNpyxQaDsmwLejcXJ5W67e9dCyb3ycMHm",
  "key10": "2gSUMaoUQc9Z4xqgPr771Md4K2qktTrrrr8NEXnvuZa1v8jgVEg8oJ2gGGH5DG8TvKw4VorQRBiPuo3PApz5nv57",
  "key11": "1RAX6ebyFnkG6tjborJoY5bdAohqcLamRe1HcSrYyJZUGNcth4BsvCQ2bXotwDFPkd6WzkG2yrqtAbryiEmcWwD",
  "key12": "5Zy7deQ1iWKsSGpLwR29pYUAo4qV719PUjUWYXxHuqSeTAEiXK7uVMVN25bPqVxjuR3Tt2BAdGxhVEMgApp8wxyk",
  "key13": "4qfis4zGdx2TKLE4NdJ6qVitfxT3RT17ot1V923XMBibLkKCXrA8UaBzeKJk7UF4HkM1HdSzfzorN9MapEv9vtyc",
  "key14": "3E7PES8SiHEAYbyxYJJviJzBJwTm6PyQcRhvNq21zVufMupSHYx5WP8Afn1JUvdvsYRBSirHBres3RdGR2zyfDqn",
  "key15": "3vBS8GJLYDbgFiETnJT9onmLtNDh6aHovMBrAtDLMTAbcVej21KiwkzruxHLgiydzNPYtsCoFBS4kweja9H1S9Eo",
  "key16": "5oC94TWTbmGnCbrecXojbcigDMZjXX3ctwgT2FvenpYyndnPbrRwgnLWsLkt4jBT1dpMgSdmvuLZHtfSKW2eBxsM",
  "key17": "5KZckD6SiSs5C72CfrEQb1eBsiVRWmNP3UGkeaw61cgFfMJCY797vzGftr5Px1AMrSv3eFaHjVQAXuLHVH3SUHVm",
  "key18": "64SLRFuuhh3ByAGqhCaQgR1MLetuN6K1RASnrqomSAJqyj4XFdAuGo7Fq96LwDACCf1p4tYK1A7UH3DodAcw5f9K",
  "key19": "VYAT9WNNBmepCYmECSPG3vwR8QgDxukLmySZZDSZFFactiBSoRLEerBMTQkTBrrCf1nhZtMMPBhRn9RVHTCZNV7",
  "key20": "4qMhA6C2uZVZNMY2CasQmm4P62gdXcWPfRPc9REtw6AeZ9zsRVRZLVQ5dpRGgCY3owHWmFa7g3KsDkYQEXW24mgU",
  "key21": "3k3XPsCLrXaek3PQfRmEx5J1ypGUaMRTBbXu6ZDHhPGis4V1XjQ4kWkJT4dnrLBwpoqF2YnzEjzGhygWwjvESGMT",
  "key22": "3SHJ8qWbZuC1dMSqaLLhPrEm6UkZvn1zug9XXS5THYo2fAYm1P8oYTaQZgT7K9YQ5P95ZQiBNWXx5cyEFQ1sK2yg",
  "key23": "4tjezp33ccZssmXVMVKusUcmSCu8M8KuGF6p982a48UjoEzictg3p3eziPqkBQT3Qs7semE7gy894Z8nW2osp5DC",
  "key24": "2dYfQLoJMNKQLmwbRUzvo543JXq3XU6sfDzetirj8qcT7AHwi4z4xDEPqFMLP8CHyHdKAZHhUZWWtSyE5bXVBpda",
  "key25": "2fH7tXVKUK5pRAt6d4cWUWdMzA3JhrFMViV9FUaAaNrBEBEf6RWX4uZonUq2WzVs4wWyZiF7jbSNtY7Jgk4e2kGW",
  "key26": "3efka1FqopqUFko3wGGKWAKAvLM5bWATq8obUVps2i2HDxuAS9kmzBiYXRDWTUXQwFJAsBSnxfhQde5oLJr3ozaM",
  "key27": "5hwgWtmckGUWBc6wR1WwpSfBMXCCX4NdPqka2TBoC2tqCw4WzgNN5Cwi2EqiJ9hWGeR64949E2263Jt4CUzS1k64",
  "key28": "5GZG1oXG8ptoYCR3ehHmQbnLLQxsmRrSf9AJEMrD2yU6NpKwh961bELt2vuxJxiwwkgVQrTb69s2xcsG8cHhtpjD",
  "key29": "8zoKRrHbNkd5t2AHzt1ySDJNmqR5gittFXQsk8QqMyVRHnpKKq8NKqz5N9NKWv3Luccn4RthLFXQwZSGZpuJE8z",
  "key30": "3r2YX5yKLbKXTFxdD7wPvugCKeJDoj7hehuNhsPjEixbDwev2Mq4gG1C8MC3PCefMk3ZcWfyKnXvfV988jThqH5h",
  "key31": "4Kdb5FbQmwjTVTJaVZDhXoChVKtEnEscNtXe51KaoXtUCirMC8uaKLfif7Fs397pSiriXM4SCKPUu2CqoYV2brPt",
  "key32": "4ZcHeKLDD9o7ypeYuQRywpiPnt2e1mXFtnVf4gWy6VJpzCG5njiHpKBDdahV8TVudZN3JHm4HVz6dRB4ygwRnx5V",
  "key33": "53m29i9BRPJVyzMeDQi4Tv7Dc1iid7GorWH2B4EomfZP5RepgZsnUnNyS2nc1HzipbgjgZrW6MF5yGMMZ5yoj59n",
  "key34": "2ETgCBj1eNbvHJNkSSp8iazXcH66ZgJKNxtZNiUajL3NEtswFeaV4ohRe9BSVntECU2zxijabM9cjPn49tRrfeZa",
  "key35": "2pbjTfEUxPkE9UPSNQo56F6bQkjpX1dzvu31m6JvtDYtsChYQWUz7zjkJTWhbBreAwp4MrDkHW7vktsADet82hKf",
  "key36": "63vmQns8axs5cNQowjrKJzc7pz2rWxMADW1Rs6SLR5gw4G8UNknTNL1qJt2DWd5tRFj2Pz3V8ZGuQ2QGBR1NsL6i",
  "key37": "37hHdkujwmxCvwdfqpsZK2TutUJWniBXHemK4RuhwJAXmuwbXP3xivCbCZd88x89oi9DZgQ8CNceUEHSR5gThLHS",
  "key38": "2zakDBUr9GYKViWX7KidrjucqebxNrGSsJ3b8VvtnTgCiQDM16BYSzE3k8CzbBuT4TxG771fvoE3wh7agDJbuzhP",
  "key39": "cXZgWAfzRziYjhpJv1FmKs2Z2YfrsSsYvNHUqLADVxpdsmktQUzRhwRDX4mxSX2xoebAgqfRcNWY88SpkPGS6vC",
  "key40": "2SvyMnbRApNouEf1YnfoYxcQz86UasQLx3qVSfvA5okWy96JrtHEkkhPn49XUeRqJ5YypSQ6wWuVJXbCQmtmZvLa",
  "key41": "2Lxp2rVKv1aJcCFstZBcyQ6TQBcs6Wky6k1kR8SmV836UsxWhrqwJkq577qwTepTwaDV5hbckuwbPWHg7QbqSBhE",
  "key42": "5mjUAL5SLxc2HNYaw4CpKH32ctKABsTsHaabogYEnJVfjydBtaxaV6CkMgtuv7oQrQfaNsYgYP54R3sH3Df3ZjRg"
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
