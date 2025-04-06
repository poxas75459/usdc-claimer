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
    "4GuBMtuMeNAWQSutmsbw8c7KsEb9KeGhgtDYKAFwiQHutVqAKVDRMmUA9NUFRVLpmY4RB6VeUifUDhdK4RJtGUoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEqucN3Hqi58ACnhGqPS8Rak3e3jHEBSTBUtfG5jMbFtsER4KSz4iPbA26EDxp3J6a9SfLraCuV5X1v1EJyE8q2",
  "key1": "2xLjw9zMTGMxtGGYFuzwJRGLBaLHpZmZ8ZreAS4SmRnvSTncJWn6QhQPkvGC2eU5qUtCHgTftrHp2RKf9hm4pkS2",
  "key2": "5cyUxfVyWwh4Bcn5h3M1HTnYVy6gY9k7Ucm6tD3K4XDcrsCziwF63nnDdcT3wpzjjnGpu4J16WtErBYnqGCaREq9",
  "key3": "sK34YwvncmQWtA957mbEKciRkJFhRNgYZ1KLEGDvfUWJhz5C4jv519oF8Y21F8rCBo2Hm9Hqu9aSnohYv36S5Dc",
  "key4": "2LVaJ7Sva5QanywV9aRqTUeTTSuCPWfYND5vpXEdWXHmGgStpPWxUrBs81aJe8WqiWFPmJyue83xbdiDpdUC15gB",
  "key5": "31Y5TNK9XuVmg9JpDU9NCZNp2PWtw17AvPL4FqPjVNW3c1tkDHac2dy8YvJibpKJe6SMqAUWHvt6LG89AkpkiXMe",
  "key6": "61NTJxYCzzBkze7qfStsiShfPbF5ZMDWL2ab8k1XgE8mGNJE9k2VdkPYVSo2ak5vVTd9tsTCFEhL5KFPBFHpjdaV",
  "key7": "XzugsxYSDAvJGXLQEbfqHE6xrk9BkgTwnoMh8u9ygYTP1xAqDnREnLNjjeRWn3vHZr6guUsNQBMsRPLsL5U4Hjj",
  "key8": "4SpZjxbARcVygCqzhULKN42zqMCAwugaM74C8jg9HLcxZga9EPuikNpzBitmbyeLM7GHewQFPxD1eEB7uMJVeoaE",
  "key9": "3KLX4U4ksG4XRAhnPyUWq2AXUqPyFLnyt4xfgJvuvqBnZ4C8P51wmJ4cuM8H9Kw9mxDqtmmvatwSwSXHrkLg3c24",
  "key10": "4U168EfrvNTUWadM816bKfhNiPF2GoUPD67A1K8kfHramC4uPFhjSy9nkkvJWcyvntudsGRvXS7RpnFvnwxyxVu8",
  "key11": "2qsb3XiSHH7uqi1N2rfPifC2PvZACcqr2fPxaZGqnf3q8c2U9qTVdakqyPZV9GtssRb8qvWZtcipP5XsAHNrRGBe",
  "key12": "59aUBAdAKLR7NZxK9UHJwxyn88r8LNoPJnodj52Zfw31VeZWKS8LaizVFR8huAY8VUtbNHz3mrameDHtCDwAJkLy",
  "key13": "54QdLyYMPTNDMB19XLG6wCPskg2cbTQq75QF4w3HVFs3KKinVtnUvaxkMrX8vpVUtyuWZUKhW1vWQY8r8YQvAMBN",
  "key14": "3Kkw7RqgaePDnZBoSvwaXizdcFubmGLKZF3qbfmT9e73NZuFE8oMef25wX67n4Tm94G1uxdY9794LLWijR9BCYVW",
  "key15": "2jzW9jx7DmG4FWqVBJxK3wkZ9w3kUPghcp4uyJraRi3SazPaT59SooR8XjfLXjpodvqr93VQdPrVMG4pLKsMHZZ9",
  "key16": "5JyAhQSk5jBkEos5Zi5fXZarpSNitoYnct91zhZyRh5TJ9pmvsUQipGtwRfr947Msi6U3yuD4aaRajPSMyGQ2rCu",
  "key17": "4nWXne1rgCKFtZynfRoXrfQ57qkQjzqTpVPXmFHyb8L3H4o6v8ATGNAmtJBeoTCnb5e61Q27a4h2yT6925xynwoi",
  "key18": "5udTRkb4bWQqxLm8jQewxCXi7Ad1x5UiPpgmtDGZYKN4jASPNjQaxWrhA4eVWnCdud4FAecbtRjKRrugSbRLbbwV",
  "key19": "5G7JBB9AZds8G5DW2WuD7yFb5qhaJm95U7r7vQGLbQXj2vtQSP73PWtB7peE7tvzjqSQmfs72btNfmonDJCopWkC",
  "key20": "3kNSkm8XRYmMqsbUWpudSEk6Pi8NpLzxKLLw5fTvuyJnvWF8TKZNEFKGbvHbZEssjJ726AZodDLNsRxZzmBegt9s",
  "key21": "24ivdPbPFxAsrvDGQgQg79wGNw1gTbGu3nSRXhkfRaLt2wBzuKitfkJwfdG9NKEYQ2Ggzr7W46NPQsvpC85ywCnY",
  "key22": "4buWUyx7LaUPAZQn8f5j9vNvi81VuX8T4LZUbuUbxtriFmva5qnjH8CgMQeUgr3cAaGEzmZbH9aCvJ3CEscVE3pn",
  "key23": "DNnADP8BiM4YyCJreFUTdVo6XKfTsr17CFAqjF7CFVhrpaUWDdQfewEZ4bapAncoawkd5yxrqUUFHWLqW3JTwEX",
  "key24": "2a6GzhNacDt7jnPCJLNAM1Wdkvni68fZdVu8dNduPMUkmqix1z5wvT4XCV41Y7JrvMvhZcJDvxHGTXJAKJPtQ7Dr",
  "key25": "4VshgDXpXRY5CaZBev5D7YosruYSwgkSDb39zydPdnZKhBAWxYe5nRkrw5iaSuQvYPraDxfncEtnLtnxRzR7zfss",
  "key26": "4KwbVs5AYGWNLopcnViKvppQ3XaNoYtn3HVGt4RdofjyBGHnsETH5vMd3rBCa3W6DZYNdF3pjAarj3TFr77q7Atb",
  "key27": "41nZ8ERMYMiCLnrVQeEYxvGU7yGTAQaXnG93NLRUEhNjAF8g743G6WyacX3ciF65FSgNgctA8kkFjthHVGtCsPSZ",
  "key28": "nfQfMVQxgPVcG4fUXcPYTik7H2NFeaHHEYd2nKQmhNHdFay9Exzx7gcCv8rHjxmGEyhfGXxL6ptGZrwiXHTMo9N",
  "key29": "5KrWVykT3jbHG7oAPmZN2x28XL6iif6DXSAJVF5g9FQ1rogtqsWuuFdihKoBp4exBF4TdXiZk44AKE3CeL33kQEP",
  "key30": "2wT7ghWdTQTvusohs1Jz4iSLTxNoacTefNpdzv3T2te7ngnKmKKMhuHnB6q9pTU5pbYyEAeKRfNFhkTcouSGAfsT",
  "key31": "mfkDqLFo5WqSGtpaGYTXvycn1D4C95QgBHaMWrvFFp7wj8kb7sFfMgE2JDZQ1ahHNNTL6TpAAp5DUUg4DrDiR2R",
  "key32": "3NEW8fA86USCdGUrKVVfKHzjNgBjrqf8o2zDa4J9d9E649qqyWHfrVkptdFiDwqjVikFQFGeXad3zp9S9U4Su6e1",
  "key33": "NqJRUEqK663GSRF5eDCdtTVW67ZADrWn2rXoikHxW6YLi4v3xFaJmm2MnoWThgdg35tx42wvL4sEsJ4LXLjoqMC",
  "key34": "2dxhFCRjMmXbgNdsvHPVDXJoTHM992j4mKikfHzWea3fbsLe5pcTQVgwoDwcGspGbSqxTaKuRP4vuz8aFH6jKSZL",
  "key35": "5Y6N8rJeygE17szxzz79gKbZvPmWyKMKPjRV1bPZHUUH1hKHz9RuwNVKDBALt3xNATSDBu41SXjsaPuJiysLkHVZ",
  "key36": "AASRGQXfzCR2wmqqspyMmfrdBTKV3JgcC6xBdFJPRBTPM9NavRjEqA8XxJitHorxKXtyx1n3Qkmu84ziGRKMJbz",
  "key37": "5NLHpcrsE4K4vvTpTDUUW6t8rSt2SHna7c7ipy9ThhQGaVpEuQ63RntYvEYujE3ZhJeFknPp9rEN99U226RXWA1U",
  "key38": "3DVoH2uUP9XG6xTvQwYJNrkyTLNt4simS7sXz8QXoxxsyD4w7Us66cPxsinmrSBH8tZM2aLhA9AdVSd86jeTxEnp",
  "key39": "4CaF66ieEp7NUwN1CrQRpKQx9XsY1Vec3npEdmuCVqM6nvojiwYuzxuwXd633iAznt7bBGNbjkG131JV9a6zxjpx",
  "key40": "3uDcw2x2ePBA6LLN57H1wDx9CQYuVbWxdMJUsdJXvEc6T6qK3puDvbCG6S2eC46awqTZpB3v7uJQcdqnNoqZS4nH",
  "key41": "4gRSsZnZtEYHHA4mAQzXiLujYdczATezNUNhnH5it7hqeUb9vNxWabfvjuDECh5BzzFmtSoyCNAuypcwgMkeLtiK",
  "key42": "1MxPS2zmSjkZmAaY4K9CJMX2f7PVG6Xo5Ydi9jEZc16H4qoC6aACLmDt8H8hHNKUVTa3Na2SMDzRrn4bzykpv3s",
  "key43": "5fVbxZ46ExAaz3DWcVgcTwa8MNEs7VrV8AUPzwG26tivcmhLwrX32YYxpgVu5wXyi45Uv4Wdh4QtFyy6WYNzg7in",
  "key44": "5Qp3vesL2y915qtyBbHXnGESdR2fjnGrWA8SQrfnnbTtMohNd7YPN6p7aWhVQgT36gHey58bfoVzCopLHFybrxYm",
  "key45": "3yrWDaV8xXLTUcW8HTJph7r48KuSABQYXUxHD5mUkWMfzb1VbmRq8jYQNZdvjnmpotoujhuHkSZf36gbZDzYTWvj",
  "key46": "5bpx8uk4KjZDSadpU7FVNVBJDBHoZTsieVVwSUCbtdg9wmRK2Mhf3y9ymF5kQgysfbw5a34wLWBTpQ9NYDXVVafB"
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
