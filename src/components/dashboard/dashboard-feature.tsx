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
    "4yzGX7P7qFh4rHFHrB5DcBke9rs8nDqtJnW7ArDoVRmSc1NwwUZKnXjB3oLmb2i6mg7CFEoBTTDkqqQkZoSkNNkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BR38dUW86EAyKwtAmLcfDrPMCpSQ5YPwfuTxGXwgMcEmCJwNwsJDFzZnB4sE7PGhpADwN5pnVFoW7sk1XYz3Jrb",
  "key1": "3aCcyM6wtY6SFm5W96yBzA2NWZ1JvouBjg5NgjTAxNJnRV8C5nAyYVFrRVyA6js7WdiqaSamuWStXfm8nWYV7BVq",
  "key2": "31YYax4d5R7ABLyAZfhhy16C43Z8afYfrr2x4mef2vyPFmCQQCKMME6mp73AnJujmJevQG8SCBvLTubrL7VUefLg",
  "key3": "5WfYWRGCUJBKminxMqdq7HgBUaiMJgmR5RcRoqgN1M3aYiwGRFFGTWrKBzh9jgv9ay2Gn5jbxq5imWxTT9AKqJ1M",
  "key4": "3xBXBY32etoZGBXUg2heJg8AotBeqpUPSKazJEt8jQuQH1nBJfkdTzZXChTMAUTWr6taFs626mjkjAuN3v8mMgfB",
  "key5": "VbkqATC5Uf5DUDpHk5Cz7RuH5xwZ9g9G56MdByPADh8ekagci83ubwHX7ie5rkV2iNy7mUF2wrDk4zX28iXafRu",
  "key6": "4rTWHhmhbPSzopnQZC7y9UngiPzt1XxqAkAxceceHWW3stQPYNNtwLJWswh9kGRDtWxhUazJtSfWzRExsisPXuCe",
  "key7": "qpkh7VrhDuNSj9ZSUXh1Ctutn28jhCtMqoc7VsEWkRhMw7W5DaWQNtTL1euP4GG35u54AVJTm3N8sxkKPnDJs48",
  "key8": "5hjdhb6tfknwdSxaH1Bh49esZfuBomUTTkunAw5FGpq5EnPVT7BwenHgm1BnWzPNwnC8NsGyYKaWgcrpGwgw9uTN",
  "key9": "59gCtNBd9e8ygwU4e5kRXEGDPAgWbWuRhpL1PWv83Zsu98yHZpuxVLeBEkkxity3ASKbX9etTHJ5ULLr12UQGsZB",
  "key10": "2wq33CbniEgH55eA1WkKgb6JwLUsRgUuMewq947xKQxtFT5CqrHBqS6uYhjFo1TDSnjzQQ5VvXwzAhrxfGnbrZSZ",
  "key11": "4RJLDxpDCh2Tk4jn6rXZrp4bybRk3Xod2g7ZWPzWAytQb1ona12MECZDRcCkLRgTbQUq7L6UBndNNeThqy2Zxhhh",
  "key12": "5hQ4hGAt3PaB6jncr4gxBcTjEg2mZKS8AJCi2QgEnyd1AK9Zc1pUYTbBLmACdnoy7pQHr9Y9hHa6t9BPAuCYnyzb",
  "key13": "36K94LNm6iKj5uPdu7kxoan23QShD1MRSUt7YNV9NqvBdpZV5x6kAAH6K7EQVE62Mz5cvG959QQsc9wgBGBvWvFY",
  "key14": "57rcF1DGivxouoKkrA7Rp5xezpLoGapEbNR8YXxMTCjJajpks1syN5QSMBnWP869kkBtbz6sdNiUPb3Y23oDCEo4",
  "key15": "4kFeZgEt1Dux1vUFuYTCbNHvi5LuJjQFpsBuw36yfZL2mGiwXMDvZmn3FB8R9e4j7r8kuVopiNRcwf2CfVbGAxWT",
  "key16": "2r6VXiVXuzHBZvgqFjNFQUkvkC6cz7Urz3oicqNY1b4utNnWXmRw63XM8WaozjPDJkMURJZRgZRiVjV1vFCLYpzE",
  "key17": "DiQB3yGch7KQHZts1m8g4dVCXTVH5JCyNodGPouWWxj8jNWBXrVCM1JVpKQy8aUJ6NtWynKgk9MHo1cCJrH4KTB",
  "key18": "kU5Sdh1kqrDCedUB1Bc5Lu1TQhVtVPmRNvrWtRzGPggo55oJScWf8jh8iqhknzYvQBag44HgGHGA2LbwfRY1m2r",
  "key19": "5ggCEnfw3pJo1mSu7mk3niTsyQ4mzjdizHQGVmQhnYr1MH3CcV1SqmbtkaDNT2PrtEXG9KUVvSfCx6Fh8DAaNcnf",
  "key20": "5oiP6xcJsAqNBj6xCqL3drxYv96TNm3u7SiomeemdZiTP3DoLNFsZhsUL6mmgj8mEzPZd4VQFppvzcbDQWsm2NiE",
  "key21": "3AppzweM77HGWJ8enAoxbeSvuoHeJmhPYpEXfAqQnHKbn3BjikKDL9Mx5oVKd47qKmuDkrbCEHpjivzbsSh4May",
  "key22": "3v8JZNkLMGmzQfqakKmh2pXfAa3U4cYK3pMpkocjD53iZfHDgJ3f9uB71J3RCKnQAUcqXrKasYrFzF1YdbCyBfha",
  "key23": "4KYVhJRABCq8MYQb84vjcZ4u7JFxPF5TsF1Bxzkm8an7C4DuwEAZm9y9oMH5TkDzqjy64vsXzNVnhE38k5tvrh2M",
  "key24": "5ociNcChkH4b6k3Aw7rntim3VK7zi5mJ2xp3jSLGUZX26JkGNXYJcvAKjciVTqkADzATqtEdpECa9kKLSYKx755L",
  "key25": "2XTbQCcBVGQ1133fJMtFnM4CaoavzZ1hQZmFQ5NUbY785heMonQ822eMr7FD4J9aLUUmHAdSFs6CaKxF5ZAQjPC7",
  "key26": "uUAfw485z4XVLNJtJR4P2ysbpAUvsDqhZJERD36aS6qnN5JvNCYVddjTYcpDub4NudLbCcTZs5qhRBHeW1xg3jw",
  "key27": "53kCejUo1iUcYHityssXqQL9Q4sHezj1MMyuCBuf5T1Uijxvzru6hZRfiiz7WjKvv4th1mHScNdXmRLg5KozrUjk",
  "key28": "4PQ7N3Ta2755CWQbeypwvV8uL4oaKjBaUCC6DTjjzE42ruQCYE1kDhsMtxaXz4sNzpQhaPH6fAbM3zKPCTDmFvWt",
  "key29": "5yqLef8kGoYphQzvpkYp3pHypvwPfPRYvtitE9BtN56USht8KnNFMCEaUY7NBjUC3egocVhg3CKYgz5vWmcYj3Ro",
  "key30": "5ud3in8kS15SiszGeeU9bd41n1HjdSxbjQRLgnaJBu2bEzDJLi3nn6UDygUj1nmrCZVirj6N6tT6APkK9NzkHNqH",
  "key31": "6Koo79yXBLUryWxC7CUASFUX76STNghJQW33dHuXGZQ9nEpBKdQJKPPnzqYTnABSe4QVQy9RSBaaNYE1ZY7u1dQ",
  "key32": "2ktQAVigv2BjAy83HWK8kyRfFsauorEmnD1WAY7qs6EPaD1mM3yBDCDR96qeMULLnjno7SJSbfS7ibapTvdweX9W",
  "key33": "2eJMf1nnzxNJGujBJs43JQeA7y6fZj2p4Zoo5jfNwXvojU8J9uQ9jCCRxB3HtvK5DisEHHBHLddD5k3d3GjzDA3A",
  "key34": "3u7SiBUv8ZNuJv6S9STeAxLp3JsYnXkSYsYNXmBBGNc4oX9bKWTq8ZmXEmJbsrdt5hvfsheCdWJpCWnyfCdb4SEe",
  "key35": "32SUQzBjTK1TvHaWgodbVUPgkuqirFQpuz7PGpvaWbXDRfjAv4fcM6FL98xR6g3PXmzbWEAwbJzs1CvRnimSUG4W",
  "key36": "HT9Vwr2ef5K2aRWmF1WxvPinPQ1PAe5K5CVfuKJ1h74JaAnyiL5Dr2HuTrwGCacUxmgvMBdkAeFvrDoHHBHT7KT",
  "key37": "3uU4orTVd59hKWVmhNYTVxv9HyqRoEZEFbFfgmN76LeQri2CjtVP4srfsXH3HRbJ774TidMp5CrUJCYAuvhqHU6j",
  "key38": "4xYtAeW5rsGTEgryCXfTUiPk2ebSWXpkgyvnfVDBhY3oUezuNo38J68cfhZKtjWhGjaNp5cXkv8jf3AQXHUQiPis",
  "key39": "36bs1CWTV3C96MmdAHLHJEHucmkuAy1cjvu8s6gTKLKHKGDZ6YUJcbtXMxy2VNM4vN2cmPhqMHt1WEWCsk2yAigQ",
  "key40": "48XqEhRq8PLABWyhXGmr1ZA1mgAJMj1eFE5pGEEixp8FfrGMAQJ8gvvNtnqsBk6mq9XPtKjhq5jNWydfnpVNWB2k",
  "key41": "5nZgzfPdgjLqLee25ywhNVnjVaMmxZGkXuEhMhf8YB85JUHYArSjZZwczi4CxsemvYnpzJzEf5anHbhELhHUgiQJ",
  "key42": "3crg1wL2c3ymBAuU1UyzwpWwUVDkUChJw3pJGbK7Yw2cMaM4hmSmkmEBiADpq7MRa4BDDY6Xv3Ab9GvVUQNGFJyR",
  "key43": "4RsUHd2Ykw6R6mmroGydqUmEhnrYET1iLptJsrDzh8nV9ku6nuPZd7QSReqwtSK2jc6VZMDXpj4SYJ5U6WEAMbDC",
  "key44": "e5SSDq7NzHPihR2UC6riu4M19ZYacZKzA1coc8ncQeELjHFnGLrcYKYaGwY1pKWK5pSmssczsnxqEoAbDzmxwGA",
  "key45": "jDj4wsxFHSJfSdtLtcfyw8M2FukFHk7VbdKWeL8WucTWKExuTm99bXQfTeHiGdNgM5giK9TeB17AbpHqJRvtpSu",
  "key46": "4hhQunLF8Vjw4KxAnEG4hsbDar4odPZ3os8F5crj5i8Zd4LT6aE4LZP7n9i6o7tTbjwpiPYBNb3NuPK8ECxPTjRr"
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
