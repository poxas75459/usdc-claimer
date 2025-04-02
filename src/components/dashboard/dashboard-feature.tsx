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
    "7EjetadGGniuvtLFs5sMPRCXYGxdbDppQZkMzhUHwEAQn8E49QsEcMmKjuKYjs8isr5mESeHuGNB7Un4aMj4H3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kx21T4FC4NAHhXuCtD1K7rFD2p8PymNZ7D4QqCEX8v5C5LeJz1tDphFKKSS52VW1tPsFG4roLNDbyjpWvtmPvys",
  "key1": "47hWN3LDby1ku5y2znkAXXJYHMF35w1tuYmhD5cVdqAnsv7LpFYdyxBGuBJd8bvP6bbj2egsx2NURzZU1top2y38",
  "key2": "5BdzkmaZvXuFoGXBf94H9N4385sXzJJo2JQoyEBFpxxfLNM3UP1RHWcyUic9iWgHw36M7sV3iKrS9uVBdn379dez",
  "key3": "4k6opWTMgjW6vbDDa3QhWjFEiDobUcu3VDX9wNRDfr7YeQF21g3XfpfzcjGcYqpVLnDcGwkjniXWfZvz9E2rmNAr",
  "key4": "4Pd9EvKVvR6EnXZSJL78x2w8A6WnpZo3CzgsdoMM8RcpLutiWtDnKuaXbYv9xyb5YP4ovBnCVzCXUseGyEmoSqhA",
  "key5": "4RzHDaV5oLw3pWF6nMa53GTXjDLLkgoRdTgBhv32vfkw6WKALNyKfiBSy8jGwrHNH45adMBWVzJ8WX5LGw9LLv1Y",
  "key6": "5U9Uu7sWZiszDQaNgQ7GsUXt9hxArRRPUdFsQC5VWDc4kvpkxCKv3vjis141H5fj7q58aeJXA8LbeYL6LCVCD38m",
  "key7": "3QLmBmHvgYax7bhb6T8N37rvbRfCqk3XMPxUVhB17X1z7JxDcMmtJ39TUNEiXBCqsRypWPrSbjHRLBJ2vZKLnNJo",
  "key8": "3W1zqurskiBevDPcMbR8yHVwmX5rxAAhWoh2QYj4eZfgz6xFDPgpKygrNNg6yhucZHcAkWnWgMFELao8gqWFqx3q",
  "key9": "3pxSJCEyhZMKafaRckUeZoeLv8ph9ciWc8BxiywaH8NEpXZjEqUZSjoargVJQ2AB6HgjXYf54XW8YGzwXV19uL4Z",
  "key10": "3QPVdWnEg3ngBCaKxjCkyeoDRAr8PHnTnz3CGQxb7qz97tk9RnfsW2SYmaXdibWiVvRh77VbPqBvtRPEAY7wDL3y",
  "key11": "24zgkHRxJ3vasY8MCavig2Axx4EdU5sDrzgZCXLzJ1km1ywvMLDVf722xjBzr3avoAphDz8dRGES2oqcyEktj9Ry",
  "key12": "2YG7wvkuxLgWjiKW8FvN7EC4G21AhKmxmBZnF5WZLWyhprRkuKdPn6bGP3fwqLZy3G12CAY1Eph4VvZVAmkPb4g9",
  "key13": "5awA3NrKyJQVfutWuMWJYKGjVu9EeKfDLuk8kHWrp34bK1QJmUgyzE4vS98Sr7MhArhYWPeX1mKqme29Dz7cpUYX",
  "key14": "7SRn536j5yaeyEKufdERJZ8jGqzsKtjZAoURNu4mdmL8thaT3WErvGqYnyLC8aZB3AgQ4a7DcZPuj7vWX9qzqHK",
  "key15": "4qA6fnJnMajgQudQKeoVYxetW6wwJMM55BGez1GyyWG5jrzZLk3bxCSzdqrwZi8FjLfjeT3nkWJh5YhBfYk5dacW",
  "key16": "2XqFYsZtubpdBUc2t4jW4fLvPkyfKmhALFoZ41mD2xBTNt9NkDa5Z5XT4GZWcwqWmNmsQEZ93MCdJMggzyBFW17k",
  "key17": "4beKpCa2dicVNqU7FDyVaywtbfcXYTbJviKy69QB7zSXzjbPaJbo8wQpGcdepvgfkP2EzGTXDXrKb8BDAFreAokg",
  "key18": "56CAUFkHxVsjTeauQnimLzj1BCqBSTseSMSjX8jTyVK8achMoY9mwDRzdJCd8CSw3TsPar6X89jay71zmWi8uY85",
  "key19": "DC6qQbP5XYSyKi8NLFs5TJd9TgtvGBtYPKM76LiHxXfJzE5az5ktsMhqxB1sYkKAP6PLepiEAinFrJXSvQ8aZpL",
  "key20": "24HvRhtDLihrVy7UM5qkwJ92DVVrNL8qeXwzgiGfrsMdgnzMtkn8e7oLEtyv6YSXJrRzwq6bQRuMYkAQ6yUZoFHV",
  "key21": "TTggViyUYJCZqBEVFqmdtcfn74Ud9RPiPWFfRwTReoBWpV5kNmtrvuZ3G8krzCvYZ6ioS8HMiyL9RW64zPexSgU",
  "key22": "2rwAbgvzaBYTD9MCunkJF4wqd7Xkw3BNnWRpuaNXdjoxGkhbi5VKsfZrztvvgFu8eMeHduLzP9R375HoJHTmaMWE",
  "key23": "5D1fuxhZdSakbNQdd9r7kcct1oPTZ3aRDn2dpgTzDQQ2gvH84ifczCyNyjsJbqDUEJsHqA84QXrFSkis1Azu1mT9",
  "key24": "4ageeG94Fx1rokATM7pCA5hS9VmH2Czp6hk93dQBrpLBZA8GWmo9VcnUQK427NX8Tj8K8LpA3oC57N7ZSi1WBLic",
  "key25": "4kGBefGSy8YQ23H2vG5cvAauQEeaxBXHYG6vyTq2HLN59EiGuYbqpPu7XGM83eu6tc5QyKcMxrFpopNHK8RtC9Me",
  "key26": "2W1aU6L9QVMLbxTKLuN2VnTQSD4hrzx3stp8zbmWGFaSrm87vEoYdGnkAwDAtsDGsCyAic7G2Bar2cvvYdAtuAM2",
  "key27": "3Mu22BjcAByvPm8BLmqf64JrkcpfUdPjzq1nC88Auu8zNcU8JryAAUzWTAjcTzWpUvhc4oKLpeV6eh6EuRRhbpDh",
  "key28": "XW4LHQ1c4QqCnbqEV45egAiLQWPokyAQxFH45sDBUsYZBZEgZAATdtdjBm13x53vsheEQpghvquAatJwRXsSXfG",
  "key29": "4iEj5r1aP55vfyGvy6gF2Ecn6zh4gjEknr73DT7fMdY154cMe92fL4Fu9fEjQPET2i8S7w3GNr2ZLqug2RFffPkt",
  "key30": "5ago84NFJMVgo6AEiacEpRPrxwqrWBAFPpyjr4KaQPbN6XBYs3muNJoxy3Z6QNx9JZU6PmDoLVuJ951HpMMNKVQU",
  "key31": "3N6kbRYhbXkvCxCrj2tS7Q79kLSz2NydmkskBLRKxf6YrW9cNwJ5anszPcdSSBFQ4Ty7pZ3DFSQTYrpTZh2U9B8X",
  "key32": "546dUtKWMzbzjQcPjfMz8uFqYnsPthWEcaZxepxb7oQH9AgWed4Adq1PwLXfn4Qn12S7jNM2Q5kGUtXn58xfrDtw",
  "key33": "4m1tnwtRWSwxPHqV6MCwMSk8uxnYSmZdvDV8cvxddRBd8sHuVCoR8bTfPMVqFj3AWVfYYDJWfhF6rZecxyPq6Exc",
  "key34": "3msPNeznibhzZDJzT1ocQD6y1siyv6xMkBGToiaMgByddvbC8r5Tnhq1Ee4BdsCnZcjksSH6dYXC2pVbZgcsksTL",
  "key35": "JtPtzbXh8xrVxL81fnMux1M5iLpHV88cz9hdcGSMKGiRJvtC1mM5EMkQgxCBVHbfQNRnnPcpqBgKgdLWJcskart",
  "key36": "449STicf97L585ZkybLfKFxSJr8K22D58Wu3ciJkTpjLCJ6wjV5Vc6thUtAqKupGZhB5jKLhWf1AFu5T3PHEMJe2",
  "key37": "42dSUyZAZsvPaAegCZwknwc4oMcHreEgUd6pvMrLTnWzTangUog6jfb6TWb419GMERUsAaykV7HSVB9mCw1vhxD5",
  "key38": "4E9MkQvok2Xb1msF6UvsJ2zA3RQqT9TDttxMcAh8meQukBwpK9qxaKjRKeLcnDcWGjWvyg3PBiVQueUdHii9wRdb",
  "key39": "2LDUPD7BkcZfFZmKM2dv1ZG8kwYsnLahBB7R8YxKrgkzBRBiMXNcpYmwqiKbjunEYTXkimzD6cwfEJHB7bK6MoDM",
  "key40": "FbtGKWGwM8dur3ArutuTLBnScGjHqowiRycHEPvQGinAwSTWBDxtyaZUESecQTiiifxLCjYtJdBgcvWibjePSrv",
  "key41": "5V8EDD9arZkpBcrgYzECYQnEPjHDyCwrD1HbyWNzEscDxFahe8f4VaUumHTwtMkbdrGKqxqH31TcJyw4kADBScCx",
  "key42": "4iPydaZjFHrHUhenadX91mKBix1vprtoaMotRTwd6NDYpGKBWaZAhPiZG6UQyL3BRuuRLB1gTnee1SEpGSSB4gzZ",
  "key43": "5nLttX1g3gia2RFpjRV7Y7rhiVs2EVCqfnAskPXBbrsFcRNCbjk6Q6MWNg6kCxeBXFDiFiESK8Wmp2XcuPoQHRNT",
  "key44": "2b2rLu5xY12qwAqRhEmSAJXxtNQJJB7swtHXXBz3CMwmvez1AdnwJwyyuPdC6gT3m3MHQFks5jzht1D9zv6sWgBo"
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
