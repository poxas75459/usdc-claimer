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
    "5vPwxTiGaiHhRj4qvkH3RpsbXa9qMTL63fUR6WFDpT4FfPj719SjzAsQ7rCzwu3T5J4hLgYhyKNcDv8zsnASTQdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NGoBfw2TJ2s2Eef7gUATtJjYEjVAQq5FFvS6sK97w8EqUFhTGr8boMbuMKcitqWu2tqk3ZMksH18CN5aGfbfYzq",
  "key1": "24xufsbVQWD45Yxq5NVYjykuGn9vm1TX76WTZBuRdErfY8W7ZmpUZt9HMx3k8qxLShS5vsfzo8ynzQi1xQRc521Y",
  "key2": "27qXp4np6kL9quxW6dkgx9LiKmdkmifsH7grFrqXThezMPzkUBvKqQPsEtRAyN6pAppgWtD6azVXA4W3k5NeB7nX",
  "key3": "2EDnnh2qtsjBMGckmm1811wK3d3F4oktvfjTHmnLs9Y9j1P58eiP1MvxKadZGP5nFn33V64s2wSV7X9UqHbgYTi3",
  "key4": "4Yoh9CG4zWKYJPScjpxXMNSJvWRdnF6jqiav4v3Fde8CXPaHWMvWXQso7muCqKxxTn3KAyD4WeVey3yT6fEvc4Lc",
  "key5": "31BUZb7KaUQvRk2Fmx9JZYycmdsDeP8ZLaBCHusZGcRXJeNuQgdd4L7aPwFdNB4QwMiYGDMJGgwqvizSYscTGmwg",
  "key6": "5tgkwvbYK2a6K9tnSbCfMB6PRMXd1kazVdiZqd73jQjrgJE9TBGH4ysHrgn5x34ayKKnL5o2GwaM1xeH8Gkoy6rx",
  "key7": "Coa64cJTC5hnkHZjQCX5uKp81Jvkpv8kMtVw1zeL38bSD2PPgPkVszAHah7rQ7baorgLuBUAYrYyVCob7dPT9MH",
  "key8": "3KdXNNSSL4Vo9q4FTtaDngr7MxmPXajb89PgQcVgUuuJD6vDpcgUxqiDxGZZ9aSP6KqFscSnDsMx971bu1PqZ1RU",
  "key9": "4dRmh6qMvydyTzQugsxUyQiGi4ozx7vY8iBrMsvjiEishGnoBugGDEFmgdFRar9FSK2heaNFgqaa8UM6w9KjZ8Ub",
  "key10": "3VsoXkSdx6yp6PHntT6KzypRhxWYW65xnQ2rkaVuEYHbps8P8uujfnEDcXfiiGzjeRptPzsLrPptA7eJ4LG1CVWL",
  "key11": "4JXYx7JKBj1cWQcaVfV7pF9hYVBhUzn5wvActsWoRAX7BvTBWzTLwYD1YqRMjhQ7hnCzs43x8QphoyYsgCNTXSSR",
  "key12": "4pY45KZX2Yn7RzYEZtAk6FU9BTwAEope62iEmaXDuyZfnDgJ3XVECxJmjaN3hSXuPYz5ujhNnQWJoYWXBuwb8NuT",
  "key13": "4JET9HKSNVUpLxAv2fTD7MCt6DMxgRvDk2i6nuSUjPbcpVmoZsL4TVhtVaaWqDrih5ETZE4VuLCSKs59hPaNeqsv",
  "key14": "255upip6XTgFxBbVQBFKzPyFdPxAn1Z3h6KALBq7W8VQV2wt5FJb8XpRb5L4orjntG4dWEakwuEJ8ky8tJRQQeoC",
  "key15": "aenEB57RD3hVdzyMDJLG9dHbHxEsw2tWkimVewrXmLW5FrNrHS5eMPNuSRfXYuSjCkXmhkBwvnAuLTBwHsFH1ES",
  "key16": "35UbXGF2JBQDZoYQXGBt3fjVBYEUajKnHX5cN97AQDUK56DcUZmB1KPMsHaPKKKqZXQPLt7gKT245ZoXZG43YSA3",
  "key17": "nzpxoCeAwBJkK1a9Xkxrp5F2rKraCxHuutsTsfxYZJJzUEkNt9DwDLynGjrdv6YAHG9hLzQ84nivGpB3Z4csuGg",
  "key18": "Y9nEpNqwGy3phJf4biY2FsKtCheQqQXB4YPszH2QTJDtjpHJmQZzkxir1dvTe9P5a9GB1rY8HVxDg9J6Z1N1vLq",
  "key19": "5qmehGmssi82spDyWjCdWybwdP56D222ckpk3A5c6JHCULQVr3Qooxk2bq5GR5gSSEVMKs36AN5G75ybSH5ofg9g",
  "key20": "7XRsriwbuBQTXXNqZYQ4EjLbSDFCY7g89bQgj1opbjaitNgk6WeiHKFcL1mpK4hEvrtDDUrHMsoT4pSUDowDSQG",
  "key21": "vdQZzGdXSwn124e2uqCg6LRGu7cdh45JPcsovtT6dgLKGmG6X4QQ4XWTy7KfJC4jjAaiMER9LHBBhPamrwRjpET",
  "key22": "3YZSanzuq9NfwFG1ow5YyJwF2SrzstbEjQe1xuhPyNf2gspVkoWXNKoNN2YrBK2v8EaEHhU1tNTuJ6Vw3UY8NQmL",
  "key23": "VdGvUMYfEMFaVbDQL4RjegSYrsWXkdNAJeFzcfHgBNaoPqfEDpcgwVYEmsQvvXMxEfH5dBQqnAwxyfwEJRHZ3tx",
  "key24": "4JSZffiXzYGfpTJyKkT2ZeavkH1xRAmmYrM99osRNB2KpeDuh8mPdZJPf5dJjpRnvH2M64vJpsTm9Mvb9zGVDszp",
  "key25": "4XTBFg4gx66643MMZmmLM9WVoVngmvSKRWbwagXZcR58Jt7SL1VKNjvu16HaAT6LrqP8Ei7rKX6Ar34EYiJGuCMx",
  "key26": "4f13Afq8zUotcdzYxmYWpwhEbXn7b6YAgkGwjNKEkKUkyoEBJyThkcKrxAyViopwFkktHT4PqfvohrwDYP67gh2X",
  "key27": "5An53Ji3AJDwKHwa7YNLuoBKAgiM53794kxZK48iMEfu7KK14St6R941vPNZUwDoWji3XU6TtJw41F5g8zQ2EqoG",
  "key28": "48VrPfvJacizYMxiqRh72JwXGBJ2cmbVCRDG7a7pjApVmCuhLrJgPpL47jkPM8M2PiJ24m6SrYvZEbQsnjJkC1YF",
  "key29": "664rtFgBA64jFryPiNB3j3Kv5J8iEhfihRHsZqf8t1EVTVoaM5mkvDmHQz9KvCmsyLcCtrntQuqp6KXfXUhPjGau",
  "key30": "44srUAB5U5pPyaFBPN3Y6Sbk25MBVmwUeMfsX2ZHF4VHYf4BwHcMKG53N2UJLcPT6N63nANKkjNiW8onEA1oKCA",
  "key31": "4HYWZmkbKtNBig6WtEDiNhvq7uPQjYGs4Fbg57i9e4TCH8kbfvdor13oxLMH7WxLoXB3Cj3Qj58EKZFXK9Sdfq8f",
  "key32": "3SajPMcju2A4idZG2ncmvLwBoZBHgKPsV8qeXqKAjnKFstvDSXg46vadq8V4dSqeNV4DYn1HFmvJp4hpu16dUxue",
  "key33": "fXwbmfevGkWqQjdoiqHAVPK5KFe4CRxx1YALyhEucRFiA7YHsoAud7xgiCZDQsnho3qjXxRdMn2JETBFyxnP6G1",
  "key34": "4GyFa3Lre6UQrjvjFtWc22kMA8NUfqQhdMRZfAyC3WZHKFPipEYj6drZSX13aFkDCxTCgDQtbbbEMXhyvP3q46Dh",
  "key35": "3N6n5JbWURkZAwq5iJ1BJbKz41mykYUryU97axTesKwj8L5rfYf1VaBXGJ9Jj9bAwMFEhUru8LcEp4yCEcEqmMu",
  "key36": "3mRRFrc1hQd7V4NVhQippcJgepxr5hDC52CDjLWLoT9HMvyvrqST33eMtvFck33XuD1fTCwxEZFNrSb9YFgMtFUA",
  "key37": "2DUmKCkJwAfgJYtsWhG19UL15mRe4uvoHJRVNjmW1pfMSHSsxWYDp2NTU4raBFYu2PoYFyB1LKebhDk1fsZxbXTv",
  "key38": "5EVq5gu83YZgaqrVAJgszjujMqhfpENasVPvB3EQmFzvR1SNNZM5sVd6fjSjiq66e83MR8rGdd4zkpQsUQzZiGCJ",
  "key39": "2Pts1oJMscvY3Kw3aB8sW43M91PjjeMscRHXTyph46bBP5pNnzBe33111Ztfxgmq9fUfbVY9on924p972gJt5ymJ",
  "key40": "2UQtvQWp4Uv7v4DgkASyzWKNdt7CtFJJprxuPRNtC5LhjKpfJDfALYmGKusADBPJB4TAg3ux2ahi9ctdYzoH3neA",
  "key41": "2gxcB8V959NmSA6kasizt79J4EG1NBgJ2Dd6ReKs8MmHsps9zejpeiXJvLGPfmCCdyRYVrty8qQDG5WMB4MufPba",
  "key42": "25QJn19YkYx5sx1ac9nsuNhviS3JNgKw3h1QWWX8bqLDDexoyN5h5fvHhAqHgsp8aotnX9YwrwUeMxx8Puf42GRN",
  "key43": "546Wcgby5MPwRZbtrACJVWv4pyi12tc4nZtM4u8CJsruNxj9j7TxJtZPpCW9KhSkQ7Wjp311tGeAmR5nmE8TghSk",
  "key44": "2FrwpYkTFxUtne3TFfvWgg6uattFbEcpMiauiMVm5PfYDtVvAiPHCcvUxoATaQzFJNUoTDH7TTsgsCteG7cCMfTr",
  "key45": "3DPm7J87nFWgmX2iKaUPFDCshcQBGEiAcRDqarwFMigXJ6hY9uHTCM4YWzFjvk1foNeTXBCRpJTgN6jMae4QGLkU",
  "key46": "5kvU2FE5deHJCKU71a8LapPWGozg8PQwwjLM11XziFV5VJPNg4XqueZ6maxu14hHbsBkPfnZs6XjnjJUfCR1BMqD"
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
