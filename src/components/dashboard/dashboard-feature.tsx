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
    "3TYJbPsX7UrWrV9pQHbjRwYz1bnmC7s37TFqUBeTtgDHsZNSaeY6Jm76D94mo363zn7gC6CNxqxEHmjxWQzUTomR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRETycuinyNacJRcRPysHPhxaZbLTU43D3wA212hNeFHTTa64nrBagYA3eFndTGq8xmib42HWUhthLxoTrJyAKe",
  "key1": "63SviQALtKwPUNwSceJy2FNejst8CCLZeu2oj7rwns4JZSBXaQqvsojRbmKmzpKXXP8J1iRtZLTUdMpxSW6nADwA",
  "key2": "4mCki9aJMUu5LDwJ7S8TNBUNgVtGYoyMQZ3ThYy9Dtoc7gje6xGLvwsTsLDva8fDpjjFqyjpWBbr9GFjvbKDVGfe",
  "key3": "GAfCAV6jc6jN9fzSAu1Xi1jvzNe1EHCtHDD3koXoDiYnYS9My596eTveLeyfoqDsbUH3nSWhMgVa7Gropbikd7b",
  "key4": "2jmPYm7v6c3tvRmCZNwg7tEUDzHyCLvKryqJAGEYJvd1Atd9jrHgq6AQsJ2FbGxcxVg8HgzzDZZnDkPSsw7mckGX",
  "key5": "3o44Q7J7wKnS1Y1e9HVLvw2m1PYLTo1Ex6dHmL7kX6CyVNFuxgCpyFLCXJn9ov4XJvyweTFdAtTB5H42ReWtd8Tj",
  "key6": "3Uc1QJ7iX3pRNCr7GnjvxL1wsYEbBnaPMffaCEWuPciTVMEd6h8GFQpvqe3JAnpx9MGqNFQtfX4whxiKJzD1LxJK",
  "key7": "5iXThENNDqa2jSX9fY8WcjMkWfV9FfaVeG9tgvRprH6cCpFjPP4a51j7BUU9Sz7pczPFT6mnhX41EygmeGkmbVkD",
  "key8": "2jgdHnM4uudL2RneRJ15HW8i1eTr9PPhmqRd2Y2baWXk64z1qLYngroTDrsJiap9rqHDYJPXQPbU8f2zFxAVoY5t",
  "key9": "4fcVMforJCtMkb271LFVNdoDM4tiXjzrKxCp7UkpLC6KxaAmqxRZxvw9oLXdHXuyGbchimgQYrp1ChbHc7jGLy1o",
  "key10": "4fnQM2xhLJ2K34sCmwyJpi9txmTAa7hFpeKJiX6oA3YH9BLTq5S845QetGuWCc29m8wNrerdzJMXp3uDSf2GJ8wa",
  "key11": "32VMqKZutV46aEJAqWs8kWTzQDJvXodUQLTjxG6sHbRvafMJxg4NGkm3HYVN9fQHRch8Uk5UELEShSgCf6ahJpe3",
  "key12": "5RcpzWfAsid7yKtxdgoAVspEcUWMj4eV8mxGkp1PVGTqLqbg6pgtiJ4WCRgNZsusiQE5BbxFAW7ryNoJp5c2WHZB",
  "key13": "2GrKRR7VTFSpoeXqsmrUVsr6TkXR22t7EKRw5fq3RTNf9DQTc5oqK5BSyfQHUWjvUWLRXAoMmTdodWrXyJoUdRcg",
  "key14": "5Rfku9YdH22mLJuKSB8vFGAGhZ879oF6iUmJh5W9ppbResGcoJ4CSDq8s6FGowdf7hm6sSSnavk4Dzr3FAzJvWsn",
  "key15": "35AvNZEwFQh45pkfq1s7iFSKdY3C7dbiHXbmzPF8QUgKbaBnaUYrHBNDa4hhuGCQh9BnmC1oMfrxP3n7nPx7w1fi",
  "key16": "2K5x56jnpGDBXibs2bomMJncewWa9GE592wuz9DZc5GopAKM9pGf37n1tiYE5VcPpUXhvBtUt1r4oRjsU5MtCWAR",
  "key17": "4nMxUVuvcKPxz1YdqYMzgazVnBssbQAYmKbiiD8EMLYoCHzixjUvLr2atxfTJqdyTJNviLrcrTVM4SGZnretvkEc",
  "key18": "2gC1TdmMFN682esV9fHw6dqojqHG3MkQc9Uj6Rh763r55jFKjAZPb8p65vJL7DWoXL7PaE3MGM5yYzpFMUpLCB82",
  "key19": "771yzNgXU9Ta8c9jhqXLQUfqnwR8YsimQYHJ26L7UnCTGfmHWdLDLWZWgGRvtxPV91YEjRy1ehEgrVjUKPmnrsg",
  "key20": "DMj5J3c9f7ujJdFSWRj6CrqPzPBnmUnkNqB5e29uqV4K2w11BjeFPe17Xe7yjj83tdQ9zhXcUsuG9arziiF752G",
  "key21": "2zD87jZchqyK1cohDQAWmYWGz4AJD21QzUMfgktUyK8H31ag8eXu9FydGzAn6HHUVvKZysReLRcwgdVwBJD9VGvB",
  "key22": "3dAgEoDWQzDSRmdaEqNepxEtH8Fcw8EH5oWsc3gESGoiQLMxaixNjysniQ5QN23hCi8kwJKkdPa3nLeA1YfSzZh8",
  "key23": "61uD8oYQB4yBSnGMApbEfmHWrpniVSm6iZ7CUsUrVshxhg2iZM3ctrcoqYCdm5xwNTfFuFqWzEZZPXjY83DQSpBx",
  "key24": "2vKVPne9iCcqqUpAzq7jGQxVX9TZQxBdqCsYfhGdkRXjvRgP3R6utFtgZVsKo5uq56sWjdnDrAcfpM2KAS9nDaoB",
  "key25": "3PtxpAdgCuo3uMQkTqiwy6FFYD1LUGsbGUf7aZAJd7ogf7dbnPyLRysGxXefc83XgDjxfG5rGVuP1Z29VDRL1bhH",
  "key26": "4taYiijKkNKM3d8mT5q79MkPWJtx6BDFzxb6PW9i4keXJX9Zkak8Xvqfp3YUZoFc5tWJ88sE8oPCwTQmhx3825Ru",
  "key27": "2oscNtZudHxyVYQiDtfeTmuscr7G6rrxHCw32irAXWeK7t5JemvhEREiuqTh8164pkghHU4E85AW1NCuARGbm9aD",
  "key28": "e5CALNNxojBE6e7x8whY5NX9J1Uk78zfRD4uZibNp9UhSvy44yxdmh78a8N15jVZddGyABztE11ZDFcYkXTehgD",
  "key29": "D1DCJLmxPQ53TNJAxbsCKmdg9t5QEVhyBVEwRbUXQHzQTWY3JjzUQGLUSmz4w3wggmH2YbRUgUc3GefXvWgb8sb",
  "key30": "3dF3wNdjY2FHG4tRWA9S7a1YFm9aDFmicBtBU4jqWNf1d9udnQrReJtLtEwKdGjgega1GeHe3d55vrHuG6uV7ypt",
  "key31": "4dKSkcXCnkVk5Eh6DMzPe9SUZokqcGZivZ1Z9KvF51MsphwZ7Ta4JWEFcoEgQpPyn9dexJaLNhhtr5xj2wJgN4um",
  "key32": "3yd6FYYKCcQoJijMAqDLyg6J2spCBzJeckjWJ53rpNfPhMAK4q6YM4ux5iH6LQB4JP62Q3rUS1Gs8EPhmUr6Dp8b",
  "key33": "2EBjE9WzCc8XvQDDvuTAsHPb8DVb5UMEN3J7aRH3TNct5MMfom3ur6FFf2JGViBfZRVgS9dV91xuGDWkaskp5u5v",
  "key34": "5oVdja3LjZdhkTngDS591V3wX1W9tCNVhfW4corAb4c9re2iEbmcRcYSTowmei7HPzt7d9A9U1JKzJY6USnVcuDx",
  "key35": "3Wg2MPS3V3sYZWJD8k2oRDjGERniJoNbxpJ68HYYHbfDF3MuxGmZZAZgLj8YZ8FGkYfKNHkNuuqoM1QYVBxBHjno",
  "key36": "5fLyaWH5E9T8p8S1o4SmX72XiZNDrKfT5gmS1xaHDjNPMQYtUKBsV5bnauqPjiykXuVYXaVzYqtEiDjxZbcoHMdo",
  "key37": "4YWBZrkjSEoJYJ5CGymxBJHNQx6Moh4qabYoAwRiVBpxB8nEaRX1LbP8qfQzSxhKMzJ1hwnTR3jyLipcwLUDhaXF",
  "key38": "5g62DWC1LWLAdtqJvNyHyTcfBJBMiCSQZCFkvHBsaycS7wx3AWAmV7GMtnvMgrtbkCUxjR3STYBESY3gyvU9dJfA",
  "key39": "SNeL6fjun9ii92Y2iuTWMmFPM61gnXmDXhYWqr2JF7KP3xzR5B3byNtcN19ALwd98SAJdfwakkJPy4LhsHib5dQ",
  "key40": "GALrHc611G3Pg7r4BC1D47fUfLSH7KUYfzYEAN1YpmHVc37h1auz459atPHWH5ViqeuTfHBTwfWkZagGFSUMzMv",
  "key41": "ebsVoUxFRn7UgyqxsLimGMsk2dpcGAo7DvXRHqZp3pYwF229sptRHxkg7JEjCLnxhbfyBvrqc3Fd7Tp5DyAfqbX",
  "key42": "42Y7PSJizitie8qVYr7TbNEAD1UvCAomJ6sMWMT7aypFLQ77eTw1AZKLZqeBXJPCZ1fUh9EZBmhTWpAvCNvaY1sv",
  "key43": "7drBjnhxxUpcszJLjH4uPJfpmLby2Z9tV2AhhUqX4gDmzBE8AwBNvrcmW4j2bUgbfuKYmYta2uagL4vgpj6KGPU",
  "key44": "7i1BXQZL9Rf4gRECHVtNhF3pLLtYv56meXUspjn2Dn6HCy6jBghrnpachfdEABVk9DauFpUWEBTSgZbYzc4fc9Q",
  "key45": "PJo67xjCf8HRDoBfAhrDixun1h9nNMmnxEBwYuC5tsTGE5i7ryHPdHHdjJEWW92qHvLH2QASrfvTpmBTjiUytvV",
  "key46": "3qV4ow429Eki5jkj7rgGJ1zNw3zJW8jbgjRHmCrX7UevF3Y9nEnNVn21PYxGocY6WhbtAKnrNG2VwSP9qBBz3DDy"
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
