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
    "66Qe4vVMsJrUCAXeSwTUiuEuN4m17KyDb3FvzNPR8NuU6cubq39qTjK5oczGjPPMKhH2EP7B4VJXfeMBWYZEucaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CY99czsBbv3WViyeUyvDDbzcKK564Qn1p8UFp1Pu5jPeP8xJMymJ3oKJKTXtngUb6nEnJtfPVYfeBtmoVUtQhrg",
  "key1": "21VPgjGucRmJjY8fkXu24nB6MgHCxresD5VbzhRNyo2h4hbEjeaFLhkNu14RwHBbLmHS41nkfL916papfdkzJisu",
  "key2": "5KXiXQAr3xRzTbWQxe3pL7WVU9kAQTh7tEKdZjfEgBhAyqXoTj5yi5oXhvQgjW68KRUNjki8wTkXaR6adc1nrpN3",
  "key3": "3B58vGC32fegRfhqAFTwiuFgd5kMo3icfFBP6eprTn49s1WTmV521n6AxZznvbXPGheHBBWk1nsrwvRsyc74Yzku",
  "key4": "FGeeAvyXcQWremrzAw8nHhCoHPU8PADPCBKReFqLhXiC8DWhFUbfzYPsxnMbwgYKzJVaYq8WwnLsetrcZoWBzgN",
  "key5": "65S59a37D7VK2qbJtnkajRJSXa7HdSRktHuL6WhTL4F2MYGugmEg2p55foLG9xanBNsdiNP7kCPZ8ZDU57ZfPtAz",
  "key6": "2KAsGjuR4kH2ew4qJcug6tC9M1V8r2wwYUXG775YTN6RkzqngMsrzNq3KvYr1EJoBrUQokrbW67hwcTiMHsDXg9A",
  "key7": "55QBxmH7F4x62sEJs7hu75BZh63nZPrnMYxk4iZPAQRhKWvX9DUM7tchSBDuyKDU96VAUxKc4WbsecfnyjrTUFM2",
  "key8": "5tD9iQ4aW3sLFDSMqXEsnxELSnAmFUpW1zWa69vPoPHndZ4zPjfearvJ4uoFfyoAMzDw2sv6UDptLKLzex2g9EB9",
  "key9": "3bMRc6VA3P2XJiW7U9PFKEQ8QebcX1aTMTPno1dPTRwLkgMZ8mfjk9VtPqCwxUxpcfhqvo9uy19ULkhxz6miKSCH",
  "key10": "61ivzABJfRoAYut4ceP1LryRHvMJhR3Jv4W7LsjJYMDFuezC7NoYmmrWwGdokaxR591R4NFnVP6VaQxvTVBQqRMc",
  "key11": "3UEpT6Ss7F7u9ZQeeqSRCo7Mt5v1VYC7i7a8QFBW9TBpKq8nxMLwBWtM84ARTjPmL8J4cf8xLnb96eLGPrPRKEch",
  "key12": "53En8vDpHxs9FpMnDaX2zzQBSXhzMxefkpQvNtcDCob6arjKTgi3Ku4DT9gGgY5VPG69uHPKoFUSG3zRqyqp8aAe",
  "key13": "4e1BuJ8qZJ7GBkAQWpTEvtW2w7bWMPdH6xfJjczn9FjGNzmQ4RkSz6CeQs9SCcQqkyDmmsJwywfMopatxAo7epWv",
  "key14": "2yS1xPryCjDuk6QcLX1CpvjYcJjf5ykbe7Mfs8LEkJnYhE3xeatkHvzQxjkhroZioHw7pQ3wLB1CTK3oiHXMCJRr",
  "key15": "3mjmJo98nZoXpgjZ6cfKWBkCkHaSoqjE3uuihHoYameEaxwgzV7gmHXhTH64m3nR5wH3oJPvD1jVjda9E45FsAy6",
  "key16": "2PX3JRRTYedVLEXWAdmP4viVQuTYMYGJMxhNXSwLg9UPWySgubnw2HH8uru47gXV1BT7WbYSPiW5Aumh1VDG4Hky",
  "key17": "2vCK6SNrXiS7RHCRj8gGjyLFVMUF2vS7VvGHJaa4Hdr6wT8bCTtpYknkamn3su3dZkhgBF4PN9Cki3CXfKoCJM3k",
  "key18": "2PUjkpUbdfaNf9TcKDWuSnPGqM7YuGYcghRc8BAkg9q5Voytt2NMq6DtVLujzPQgZ4Qe3mcNZxSYqgdsJtA3mEud",
  "key19": "47rkbpyvcVin64QKpEMLiybHKHtvGSabeLiSM8abit3TqP7Vn59TT1twU9FUsVrTmRPYF93i5BahLbdZzwnq6x95",
  "key20": "2NhcxUHc3cZq4txu9jC6Mtu7QNSCXmandE8KcdA7xPphHwxn91xEco77T5NnEPbSo9dsS5nqHhPQMk7QGjQA4kFi",
  "key21": "TANsGWZik2JeZpZ1DrPhVTvLZGbR5HmX8L3P1iNjRNZ6oE4d7EeFUFkdPnbxCTwwsUJ4HaToWFHMQHEwNFwok3N",
  "key22": "VeMYYPmhEcXysnJrR6pNHzisHyAzZuyyfdU7C28187uVc91Ap3YZe8LVnPXoehR8AtRi7wcamxQDC6WcAWnKd2x",
  "key23": "2HygwPFrWsSiPMcyvUHboAxacQM3HN3x9zRd9cjjwauSUHf94Sy48LivYDjcYnSVJCGnArLudX3nAsyGqxFp6APR",
  "key24": "xgYFKsTp5DQzxDsNsehk3C1vcryi3zfwazVXjuKtHmv5AouTbzYk3Gr1jc9wprLkT4DWCgcVk6mvVB4Pipf1hyQ",
  "key25": "5oMEeN4w7oYDj52FNSxmFne6Rs9NeRKDPmTX8sXpu5sqra2NjA5C3PzVZyHbvUW39Zc4hinYeCched4gmPMw38ca",
  "key26": "2Fn1Wp3Q11Yit3XWdgPkKXKKNKe4xixfyQQBmvkbtweNzp5Zs7YLCqhXg2ojGwymbptGP3ZTk6WC1vg149Wcrj7o",
  "key27": "37i1ZDKZZ77iwJUpDBEiFhoy3bCyo4TdLCGodKKJfZsBMFqgSrgxZ3ytEXkRB4Ni8ciPzWYB3C2NF8pc5kWm3TXn",
  "key28": "4Gp63zP84diwvZovLahfwLDFm2iu7Mbye9pRKZdFWhZJFRXFUPYw7Z86cBwFg6u2kR62R9QTSiapweSFSiU1xBmj",
  "key29": "3iigbNPQkjdsRDYN4X1HzvHyjDcPcnYq9ReXUZHLaiG9sG5HJeVeBwu7KcveQ4jGXv66k9MzJFRZKirr6KNUtQZy",
  "key30": "U7SQYgYiSBPeKvVMr4VnxUJUzisCU8NmheyWN6f5CHbFDEA31ZZ18FBfXPsHavzQMDok3NLoSA3qyhwqkSwVL3t",
  "key31": "5ew5E9Gt32YkNnNB6RAe8guTmgnZqLTxn7QiWAtG4BbBMK8hXC2WmHenLgAtptwMJJDsr61Dod3owTRMdr9DzHNC",
  "key32": "5ykpzpDogNrEZAnbvdyewGwwgqxSLjhRoXXbeG2NJAhsVyRGkCrWDFgufuy8FYGJS6jWAkDVhdW8Kj2rBuMAm2YC",
  "key33": "3PoLHf79DKyRHC6z9mtZq9WopGXxcumLbFd9dcNhWh78fiTSKCAzdATaq17xkieoHpC9PXTpg6SMzHvihC6SLe8m",
  "key34": "2m5VuZZw8zhyutZMjFnpdXDoq7q4EvNsyGJJEojEcNX13ivsodq6ZbuYknRSgbbj43vey3Fk8JDmjZ2mK6V4J1jE",
  "key35": "2wSvDYoZnS1V5VYCjY1JkD93qT8rktWwPK92fRDr8ze2eg181tBpT2QFzKEicKKc1VxLn5wP1xJr7NdipAgPfDpB",
  "key36": "UZmZuHeRXfGn9hwcYbmuzs83cwRxKuqfkbo1wmua3EecTwfywtMUnK5cfWXfnaLCc6atqmSbR4fSmn9SBYnucEM",
  "key37": "4qJbXRQVw4mhhVVKbF89KRJD3KgJpy3s4gPLGz1DfgSzAGTf2Vxw77Zg2UVMH54LqhJkVA9uRwocJ2LyrntPpvtN",
  "key38": "3WgLRJVSYoPqHUAH274mb3MQj3t1H8yWXkvH7tzqa3r5sUWqG7Kp4gqcD8USKp1qEJYz3RetVpkHEH4i55D7hsUd",
  "key39": "JCkSk15h6vWjJnjsf4c5WZAtjGNctZp6rCoa2f2Gfi6gKQRxWrwaVMaVo9cYcVyrTmc6G42WFVJkgCjvMG3zVX5",
  "key40": "gt4J7RtM3YfdUbVa4qM96dJuqaM7FbN4bLziz51kgisPiDTgKyNmhseseaPXQYh6pMf5rrQh5SLKPhzrU7VPzcc",
  "key41": "5vNAWEUHkwnM9LvtXZtE2E9D9YjTTL71mVSkTtJuASd6q641h1SoMRAPwS3ybyzaNmxSL4hVzQxX9jmeU6QqbLVX",
  "key42": "4SHB61vuHMgNp7sdnV9QeYpdhyd34CsqACfGZVw3sccsn1TvhWTCo9zyQNN4vsajxL7CvvHb8Sk791zhmRq5J3fp"
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
