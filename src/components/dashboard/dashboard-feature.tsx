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
    "2Nc1aBRYYKLVhvFLtFyjAc7F3TwqbHcwvpCY6CQD1L95Y5qgquRRQuXmd6NR8beZD1ZPXX2ukHLdcv4Jc8ixbSE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4dzt8aCC2XxRbLUkDpXrfZpMZFjgSKfk6KYh4pcsZ9b6Pj63P9vQpEQFjMqtuTtKUNm5ik4JsYkmZ1Sy84hYv9",
  "key1": "3fhAFmGFd7w6w6ihZSy3ra7dr7PRQwnzqXYEnoz5MBtcqrD8z9Parwb5w8rzQ3Ko48dxdnoqdE2RDcfrjHpTRdoq",
  "key2": "3fRXYuS6dK7pqNT9gwvL5vC2htTsDZotGtdLvLzk8SF7vLzzgvN7cRSirorqpggd5EDjHT1HKbfVdK4qLLKqm6jY",
  "key3": "349QFyfmFDwV63jktuGp9tyhWVHHkxL21FXwuVRRxVMtPfNpYLzUmtX8y4KQdE5kv97dXrZzqwDcTk6RMHnS5q79",
  "key4": "4LT8mzhn8t9sQ7y8Lb25fyGcz1FBPf1twHL7kXL4iH7NFHfK16YwHTtBzcqUa4sWE16nSSvJLNcZikwEtgarK6PU",
  "key5": "64dsWNiLWB5aP1ER45MbaidXwxTdrv34xRXxUgdPcdALavzgW9vSDtWFxbMdNUQLCz3tu99tzJDBwmHqLm1JXNmi",
  "key6": "5bQRwPuquBP9dRNiCrZM5bQxTZBeGKR2si5gksdN9p72b7PK3B5yCrVcGS3TfDKVeiCjGaCTZXNXRwi2Vhqk6KUW",
  "key7": "BjQRnRuuexcLEAMEhHEmQuzjKJwi1rVHojnr9APze8GrYA5aDip3TxbXKbK2LqW28Kjc6FhtvJxYQsSAqK2LrPJ",
  "key8": "3AGXM3zrk7itKPR48sn8xaiay8n7zkDrGyrLPizpxTj7RGM1oUHjSqFEsHB84jqT7CagAyW8tiRX36uiZ9xeJLTU",
  "key9": "54VDzgaLE3Lk6CbrRCHqDS963UegnUZEGedX98DdHp1vEN7GsJXN5b28diiGfmQfYh5s2y5H4biCAmkyUG6VUWkP",
  "key10": "3kyNSQQmCgbCMNZQf5GZMEeVEDE2Mu1CtwzaZoyu91JUmZnx9fSawtJhGTbzeW9ZEWDNcfcyoVqKnzXdksysVgpY",
  "key11": "3dbfX46N7Nk5b9GMJdXe8gGumjiRH9TcNs3zkfEivVC9qfybDbe38QnSQedp7eWFczzHk7Tk2iyXus575j2b91Es",
  "key12": "4XFTNWEZmgKbdzFHxav4v4VXq3RKwHVzZySfGADeT5dowjjecmRWxss6ma8JPEzFEbnu5ZmppNQcDAQnbDyH85BP",
  "key13": "5keT8UwHdZdrEVUnDzS7tFEG7PwNFsh3DFzwJRQb4Xbpz5W2FKRXjtt1NTVkMq4U5PzTzvgjbnELdsuDFezan9Dd",
  "key14": "oo8V1rwaTmN1daUmhqj8zRdy3CaPErtfz32SMQybqrkEnyhTSpoNfLEnb9xpf1iAgPnP7vd8sTfkv4zwzhSBxVs",
  "key15": "5JZkYwfMJpTPG9ohAx8se32ZP6ueehT31vgdnmMBzMVYQeVSet5hAFSGDXWfvAiXXvdwCAhTXR5RsRaFMvUyrGtG",
  "key16": "5pc58m3vJGAPGaZZHmxqxz4fpmMSD9NsJjpKkX5Z6CRsVusRjpKqN3Z9vQsmU4oA8sawJSRSvia6SqzMYRyk8hoF",
  "key17": "3Mxv16xf7YXWayFMHhwzLzSFUVK2DC3AHxmFNaLAwP4SeQKrxSCRFP7eHMx64KAfFX4iAk9ZTXZUeUt8ZuMwPTYe",
  "key18": "5AHB88jee3T2QQXVCgFCFsaHwSSjvK218DhATjWYFDKBJKLGsDZiy4DMSXfqdSiReY2zqKnUJGmo6Z14BCwdkKSw",
  "key19": "5LemAYnCCEGvZsrXRsK94dKS4DPwYssybugA839yQqmUupjNY216eRcwL1WMXPHqF9f3UmdRSpb4optY2jtzGuyb",
  "key20": "5e4ZNyx4SybXu4TSrHu9QDLDqj3ffGQ65d1o214JDQ9R7PxHjWUov43agSGHMMYTqneRJdH9DoyYRbq6bQxRdkG6",
  "key21": "4HdnkDJbZKmD7RYbjDypySsxyFNpY4k9zkM1CTZq3cQ7hgSY7FG4LeemytCUpCswbSh7L4rvy9s2CyYYnizFotzJ",
  "key22": "2Xs4NRJRpkrt236PDGN1HYgS3Xfz4Z8NVaUiUrphdUKuYjUNM8x8jY5KaejXxnZ9ng9bNq7ef8oHDd6GskqKVUZM",
  "key23": "2fanSRGzXKcBU5XnwaRLZcMEH462VSi6mVuiwnnQrkynpjdqQszqQn8tVmmCYs8MqrhpQH5uvHRygStEJwb34MjX",
  "key24": "pZpEwyN2Aw12mBNjUcVWwAeGraEtwNFYvtPM9cFKRwBaQeJe4dKBFurv93VML2VHiA6Ry6c4MJzqB2ta5ghyrvT",
  "key25": "2JQkFDUXHcSfqKF31pKcdTgVwrjvYVskcRCG2a9Amv9fdabaog1YMfsHC1DF6xz9ohvfvLbRqJgForgXu2V3Jv7D",
  "key26": "2KFBDgvNVGyw5Cuns341rdwZXaqJGuLxbNJE5zRuzkCEGh2tcEL3qu13hGKpYV3kDzyuDCXkEEQp47whQGk9GN1B",
  "key27": "5bNsD4gEH2PzerWc2uYeLSBX4szViHRDQCkFhP2ex1Vq4DHCwUqEQytGfs2rE1JhGiCUxwdoGCc1WGQMcRX2xvTL",
  "key28": "6vMQRHHHiwvLcg13Hx5mzmBd7UDtrVuv6MR9rPEbiKAigkoJFDxenAu6hgasJdvtE78qCXUCftLbCgvAcMWgLhE",
  "key29": "2dUu8CkPjVoNwAQrJmPtzxEkYTKEFJPRvs7bVAS5UXW1x3tHuYMDjcCKtrCsr9K7VnHJtU5mmSd7bXbjpaQwtnjX",
  "key30": "524XBaUHy43YRvoLT1WkEMDJnehMELCtjBcRjrBoV6vcev7bPJ3AZradETSeu1pprUqRtnpicabRvbNjwTWjYBhT",
  "key31": "4itq4ahwuGrAB9ZbWVrtqTVPkB7UxrKJmT49emdVtiMRYxhuXYogabHqpfH3eKBtMCYxPRgQFX6Upq2jfgt5Zc7J",
  "key32": "31p1Hn4sPDfTrojJ3uYpm32RPDG2da5kETUhv3PFipGMjTAZjEvge58JcnAphD42hYZ92Qo6d5APkC2uxFnvPbFe",
  "key33": "4NETWNG52MhhYy1g9T91r1LL2kPGbJsoiEeZguU5QbyK6HXSB3FxH88xygVhn3k5LUxmicVzigMChvC6HsWX7W9y",
  "key34": "4p4MeEDbGzQL7xdpUjsGWtJeUZZAf6jWXj9HNqvH9WjYQ5kWQZgdKaibZp8zMQPxUY8N88uB3uFwptDhtN5ktbzs",
  "key35": "2MZ9wC7PRKc923cCr5ZdtFmHY364xNmxrVvNg9Wbi98ReUHAAG8jk9kR3gNw3VecEMNiXAzZhuKRGqEZh7gT7Rjk",
  "key36": "5b47uuspj5omBU24fTggw8PkjVsvmafrcsoA2GpD7UYDQMV8f1yAWKVjPQHzWyEpjw2fPmEAQ2u4tVF79hKfTnex",
  "key37": "5CW815maTztzAxtU8Ug29kJRVNXzSbjJSMZ6Yqj98v5nNRHygBoCFYiN21zkdtd7sAX8cQh6ihnnJZNbTULtFLye",
  "key38": "3CGS4RFHJoHoByxBv5jCxneEYJVvae9mmeF367aGceDnkxxieSs9Nz7YgUTR7oaTvaVwgyBU6Lkq5WodwgJbJNKE",
  "key39": "5gz8x9bB4fpDwpwu4C4pYehfSrcJxd8b5KHc7jiHYVCVMhZPuztxh93ophC1d8ScSVh3kB7jFDKhZrxn3SW19jwt",
  "key40": "5CdcPuje3EcPHu9bpZSvQDhQDCaGrHPnLfQrR2wGUTrTiuFhsHNQxkfxpufG8q63zh8e2Lk8ZiJRPwJn2RB1My5L",
  "key41": "5q72DY9XZcdPkQtSa2qnhgp4TpnWouLmrUYXdvKY7ZacnuUaE89MSZcJMG5JjpiyrNdkpkTkWEcXMNng1UwifABJ",
  "key42": "5rbSadFpuqmsEX9aKLUZpYhec9vQoFfurtzWn3ngvhoPsUucFB6Cu2gV7eutnKri4agefFYtnC2WBeQbqxxxZz6d",
  "key43": "2APEhHN72sFM4DGJqFCDmivEiHGuxF6gVfwYNCJaygtqzeUdLDfbBjwm3fCSGbBLsrNpmZhwAYJgru9Jbdr8WytG",
  "key44": "4WDbeyUQMa2L3RkfJL88HC2x7RwQDmefcMFQdU1ocP2EPshynsrtvcjPRdkuaQpXr84m7iii9eF7rf48EKGs4aLf",
  "key45": "29CCWF9znkwKyUYHgajRReuTs7MPHC6NcSouSZh4riLBEkruXJZzkNe8goJvZwxbSFzeBo6jzb5sKnMvcLXDs7ap"
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
