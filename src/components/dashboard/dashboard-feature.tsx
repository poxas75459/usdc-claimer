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
    "2exL9nxXeHnBrBtU6qBDD3xzBfKBZZR2trHcCM7dt7sZ8zF7xgroAbdy4i2bzPCF2W6XYSTW2zBTByWCNmF5D6ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bK5nJX4AzQh3zbJptPavTM8R8zypnks9uivbYqSfUQ4jm36hb4vn5PBA3ffQWxucF97h2pEkuhVY1JNmX6LAFFZ",
  "key1": "43Z1c8s7zvSeRFq8cH8qq9tU6GFUTsiwn2GUjtGT6L7ws47T3fvu2hiYtqYpx5ZD1zJZgiQMHrA88hREihMj9voW",
  "key2": "3fMJ2eTYH9bo82JXvbv58QZNgpngFqZi8KSs9C2oKdUyskhVrK38EkcreuQ3NvbGaU6xwr9FBnhyBwiN4qpEF42e",
  "key3": "2Xdj7iPCacjVbCrUgwqhBWTxeMNJRDH2sDKwqsnmAKu8xU6moxmVYBcm7jcTr2HKDb3LNkpqpik8oDLmJkvREi9i",
  "key4": "5iZBi4CkzTSdk5U5CrTWLK4b7unX5emLK9Ntunq1dBgxktWA5DEerRBcYc9oCRkzDDUVcAziY9Mc8sttE42PCiMQ",
  "key5": "3i9RHG3DUxzgiELzPCgfKmfM8zDs53U8uSBGSuZi2d72NBQ8dP1rdTjJoqnudDqizBCCHqXGH8wdUGwD74i8FAkf",
  "key6": "3GD7K5Ei5MxfQs3pzUWCg963wqGDMByR4Qn7YNUqnQpGcn7QpY8XZStRrYUdAKsaiKSns5VnmEsuLpmjpU1GwpGi",
  "key7": "4WHUZuYnKvR6JLURuLg3kUR81UmH5559TXyLhAGhE6QAob9qhfN3d7h67mCwh4KpQr6zWXDcZuRpvuwVKJ8kGfz2",
  "key8": "5Lf8o7Zc6CKScs4BEwcu9KLAd2BvLDWGSHwCnxRyxzys1H8p1vpK1SrnsNb3w8BMD5ns4kmeZoU1rHHr7dDTBCEb",
  "key9": "5znM6qCxHKWYULVu49qXqErQjPqy8Rbb37QYZTDmVehfm9B5TnW3bQSYk7twhhB9BoVzL7RcpDEWJHP6LBrNbTFR",
  "key10": "2ERWY2FmpDm6KjJtYM5CVNfcZGcy1HgYSDhK4byPLppTmHnDb9F4XL5PHBrT8vn4c2AopPmKtXK7FRpyDLgvUXcd",
  "key11": "2n89aTtaprbZQzV7ocFRz6BPg7KtYqpsECZbjjQYw6pPq2GmXHZ6cxVTNiDivZTX5648p8ATkQo5GY3M8rthH43p",
  "key12": "2H1PV6X84jSax8rtGGSAburAzrzqbemDou9LoJvUpjeWxyy58QYyMY4Q6oj2h51anWtdxricfz5cCvzRFd3nw8K",
  "key13": "4DmCem4B1ahQ2HuEZx615jzZgB4BBUQawPD7dmvCLh55zbL8BV9b9rxDFdLvURfcDA74Gskqcv9F5jLpJxymcoZM",
  "key14": "5uHajd539t6xeLeABB8EA1uLrtRSCHWjvESgRaBkrb2d5EvqSgDqqEyTJGke8Hu6F4diBypDjAL4ou4n8aJBDdTT",
  "key15": "4XYJV2KW9bqqsSzK1LvFbtMUP41JYmVaeNgnxB8tquq4SKV3wgfs32BRkrSXCxNRBcX2YsPaAdDybCTWXu3YKkbJ",
  "key16": "4KcXLfNGRtuhZdW91dRn66Qb32neNibGacF7HkqzhXczj6AJ72YpZ3y3o47Qz7LS5kEC85i9ocRNZAUa6NiUpaPL",
  "key17": "2KtVyat4DjaKris73HNC8qbgx7rr9x3hFKdkjoM9dxAqURBxdxdk5DMQUUkkD5ooPAp1vUqF2H5FWMpYjG2PwSeN",
  "key18": "2ZVCq2Sx6fmea2qxj82nE8S98VYBbmpZ9TwaKgh8cL2pDEiihWVL8N89bVyAX5MvUDn2z484dGgukqCC4BYYGSb",
  "key19": "57Nar5kaY6Hw3WjkS8MSyHkxJbcC3tVh8F7xkZmA7kYovcMJpVQDE5YEPS8fk7b8Av6133UAVQ7jjehAKxzwV3jM",
  "key20": "2ajSReUZtkq2zBuh1FmswWP26aTXCXcX2rkT4s9xD8mfrrWXQm8uhgQvu3JFoBfCp8B3pQnwqZK9HuGu8oWYtBFo",
  "key21": "5KszhbZAoG3uPaUrwRKBDmwqKsyvVVEdL67p4crWM61fozq2dQddFJ9FQAefXzsKFLYEwkCw4CWVSMRjVx6mt8mr",
  "key22": "5T2jQtXDYhq7LdgwzpjQFrpjRWd5HCUPZgiWhrnQCeEzmykcpXEXZiYTGGdrvq6zWTf4D7Q8yDmB6BJA4fifFTNt",
  "key23": "5mydxiVzJ9wDjLrAs9VJAMqJL7FUDQq9n7BoRKk8yDUa78w2pTNGp2r7VCPMZxYsrcAid1DiCCMGjZmMuLLZ4prx",
  "key24": "4cqH2v2ek8pHcH4wi2GSWUH6ebzTP9wJCwVaK5B2hTb3Nu89y1aMbCNZVUtnrVe1Q2ae5YW8sGq913B5hQHdioUt",
  "key25": "3YL4jBd7v244vu8Usya9JqMrcy1TxmPQ3fgh1EEoeeNt5wZBM57VYXRjWD1aJWC4nVwEeKtpMNhcuit8brggd1dn",
  "key26": "34wsePJv4ccUUpc8BVTPSmy5juSqKMCna2qQSEncEVYQewo5ULfKi8QSxY3Ed3mmcgkB4XdJVXFxMFwsYhg833BY",
  "key27": "2rxz9b1pK2psWKR7ydWmPq6BqoQ84cY77r1ZBZSLXP5X6rsBdcGh7H1AQ1fHppHN3GM3bezKhE5hN2WUV5AM2Tn8",
  "key28": "bhHirMxafX2431CQxev7YSPk7sXN4XRppnzC5exE9SxJmkszwF5wRmXZdGVXuX5wubEnK5PZHD8htop87HXaXPG",
  "key29": "4zM1WQPapdFLhjgna1P1qUgatmEQ8nzLdT5Vzi3QXV1bFX3G7U7CHydW4tQXyZkcJEsgdC6TQhGSpp6tSwXzAQgd",
  "key30": "5Bz3F72arfZEDB4rZKWtmQsBQ9ac2chBdU5k4cN2votcdJsvkfdoDtKgKcnPvgwQPT6qpE4p6WGD1GwU9142x2WQ",
  "key31": "5Ks89NgdAz2xh3Djt2nh75L6YCG5qqB3Nah4tReuZAYc2TMR1WjN4m7XGZ5MSB1FUUzPpfbcdBFXSo6tGMBaWp1q",
  "key32": "4sGS8n5EAVPB3cA2KqJGBaoamc9TCfwtGT3ywdu8FqYq7fhNMpePhCNcNq9HLXBWBZiWX7nYWmrKYeEPtTPm3FWs",
  "key33": "WubKZEo5MtMuymTfzZzBcy2BuBWkT3QHUVfcnwwD6SLibme9RootBYSm9ybWc4BEUzCSrB75iBqAhed1bigL2Kk",
  "key34": "2LedauVLNTC4zwQFDNFgguDoNApDLSA8zZ3MzU5kmkYPDe7PU2MXBsFXd5wCiBMsqHprZWNrMH257SBwGsp1d7at",
  "key35": "4rZH1aoBRxQMbAsS2A7hJGdeAMXDY7bXAj6kMNZEort6Jh5JuKbQHAd39M2XkXmcF2y4mGdysLFf6pRJQGzGwWNt",
  "key36": "gF9PTLiREFE9fKBjYR4EZsFgZibgA8qFbrbfn2eHwKEmydmbMKLHXUSNbvdA2ivDbmHcsDB58SFQuU6CcxXHStC",
  "key37": "2wCir5bkWeNcNM1qCBx9JVzZKvMX8nwpQC676obhAkw45Z5YJwUZMg3dCzqsdVFcAjxzi5tKyFLkoe1gzMuiu51Z",
  "key38": "4M74885UMNWt9ahwBDbtRfjJVXpAMaho82oSY7RQKf5edqvpDP36HidxkSkVCU8B5mmYzRMr1MGA85vD7BczhYUT",
  "key39": "5sfQC4RmHF6KioHF8tbgRdNCnN34WzkPDo827iMSRkmDJFsrTrmA1ykeTAkGZw6axqSKNXRm2FNFUgrh7nVjDBr",
  "key40": "5m6ynLRQHAQTxxidbbyoBTGGyDdMgSoWQcctTEsHzHGrE6t2VtDtQGUhwBMQfiyR9UEmAAQJoWGFSrD58K6PvAoq",
  "key41": "W6Td7G5PgwKXr3CxogSwEVkYMBK1de2JqrtZzq3u9z7XqbKPbg4NSJ1K3EEuCTxZHibTo4HUViJHHgva6awpnW3",
  "key42": "snorhuv2bc7W6XNzisJdYAdmHLpv8CW3wCwAX1r7yoD8iMTwoe7PeVzPL8RgfK5LCMaxqU7LBTN24p1CmKXkqL5",
  "key43": "wSiQqQoZ3WuRLLBWggZJqL51kiU3qcGEPuGJWEiDraVomktwoa7n189Nxut1PK9sryyKS95q9YP9PiLNAyupKgx",
  "key44": "9L1jG16iUVeBsPXj4cgBR11eXyHcXCXGVWGRxEJ5WCQjE6yi4fSPtcHtawVBKGmQVSueiKz5QLLSv3uixEajhok",
  "key45": "3cYqSZPng3WKXKs8uDnUKcMcoTUsakdCEpDgq4Z6oLRwypXwrtPT7SeGKaPBidfqVq9Fq792pvygrbZW1vTcEXvx",
  "key46": "3ZtWzewax3jCW1mu4rq8U5SN3wxyCpku1DaF3dSk5Y2UEcfQwHdfCFrD8hj5K8BF4v5EMoYZFDDS5rLgiH9WBeb8"
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
