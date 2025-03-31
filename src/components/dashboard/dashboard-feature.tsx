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
    "TF9e7Fx1jD58efpjSTRwfEgKvbwp8yusEgQX66LAuVPr7k5VJ9jYrL6rw6nLV4t1qWqttMn8CSdRVcRmHXTBPi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CFe34h1PsjXKygJEhzsqvTcYuHgbxFxox8K7vuhDDCZhd5rfYfapWDUvdvuKPseU3umRwwHP9defbx19v3ZbZdV",
  "key1": "9iSDP62B1w3C7TY1WL2NM2sJjwZtQKDPqQPJaSaj9hb5mHZKBSeyfZgz5tQwp6Qu5BgjL4o6gwubPg1LZQtC9QU",
  "key2": "2bc1dc1KL1AbUpokTzUNZuVY6sPXjBpq21VnfrZ5m7sUu5T5mmFjrrc9ci1pFF9EqrZxPNU1WxcCLH2g1GGvZbR7",
  "key3": "56pJDiSCR2YBTtfMLynaFfgWHvhpL597PyWLN514uTR2QxMmu1HG6Zt9rhXrJ2DeZptcd6F3FDwypzggVwULxPrK",
  "key4": "5cExaWhuiFK12sSbL5w1nb6iXvPyt5MEuagD6pMzhj3pbdxh3kPC19xT9XjaBjhVApSRJeuRuRWfugpZGUeEBnmJ",
  "key5": "QDQLN3MvuLps1rW2QJwcC2rdKceMnD5qyHhKxtxNeuUrhLVZyAdshwtkxCNZLoZ8kjxMxr88XtJoRX8BPBwpGhd",
  "key6": "5g39XsFELR6LXzAkBvHaNixdjyGRQVaRiy2E67RnwEbtxZWgwPGD5WaMmwbPNT2Z2FztFrPhSLBqoBuLD6A8Joy4",
  "key7": "rqK4tdSxtNkuLuk3FJLCcYVG8e94qSSVMd4eNxFDKE8EddSt14RhpUqNdTaotnrM4mfTxotERMgiXV64nTrfwdc",
  "key8": "3H21t67VxSiNzCXWyxnCcFCpviUhGNurKSEmDFCWZPhhwbVCtQFGh6h3oLn22XGYT31MKTsEePNBg8xgmE5N3zyY",
  "key9": "3qRbPwU4WF7ubCUSQ3qLQoeXNof87YYH3pXJw48ntCRLW48hmp7NE1LTTvMeZTBha6yMjyRrZScBgvpJ54hayf8R",
  "key10": "5BJ6kFu6798BSF4Kna3rkhb9N9k58Zn8rGZpDK8FXCXU9oiT6tosB57zsQpkYt1ievvQ6fXW7SErPLNixqDMQ5K5",
  "key11": "221qac6ddS3bSwhBRfN4vZ8BrPVDH1Z9PbwLDjWcRUVzSQfzcj7PQ46TtyYrn7TSpAi9DuetV12DdCW1w9G5nRZp",
  "key12": "3EAuwumkP4pTWNG81ob35DeP59g6zbNAHVcstFfyBChZ4PrDUQufbH2mPGwYRHroAtDYeyap9xkaD56MxsHRABw",
  "key13": "4Uq8qhTmnRzqLo82q4Pzw3UnrdvipjvZRt4dPeVy6uxhrMxjUBNeqjFx8ASdZNrz6eHADfFsRrBhAAgfQNLvDVa",
  "key14": "4ACMHM3zHgsW9W3XTx1xUrDU9vXA56XAL5Ss4JTVF8sz56HVVypYWSRt9GgZjiJiM3hkPTenko3pgjbbfttZUYBs",
  "key15": "5qCFF1wVU6azzzVn64jCbghV4GuvfCRGqeZCJXDJBvVBZpwJAE7KE9PZnVsQi6qqVNYP5tbiXbiiSMvy3PpPG7uP",
  "key16": "4evn3Ndsxh4N6EVDkSP53Wy3jrsCx24nd1xtYt74CW9pddhEsHtKn1JwSaTfvPDUauqcznt24GhzGTs7dTz3e5th",
  "key17": "5CCCKXMH6zUZcNtKBQsDAHH5La164CKaeASZp8bJi9o9DEL88K6suXfZLGVaTKDG2UMvCKypK6n3i5juocwMcN32",
  "key18": "a55bcnqDLa8WJQhcm6ftXp2aPSChsoV792DAkpC6MjBefEBhmJc6inEYxcKzxxaUrR9GVg1TkMAPeteZHz2RPVr",
  "key19": "2uHytS5oUP5NS31gwkWmoGusPzgGqtzohkKBDJ5izLrKxMsm6DKQvDjk5nqqC2biL8XKpVHCPz5ErDmjzEbpqbk7",
  "key20": "2oaoFAW82H4Yc55YNUCP2UmytzoGrRHKNJRgbcWevjBW7vg47Z2MEKbxBZzxagD24dKTsVVX5m9xTYX8weCnDTGa",
  "key21": "287x9hiXXZyyfurCH1uZX9TSorJRKTua78qdcRfbyinJzZGjcp4FUeSDzBzmrUseCmwrguN1qMFJoiN98crebysA",
  "key22": "2Gu62Ljf8ueHfszu3KsjXVUsLVR6AF6y8yohvji2F7WRGGfbokc3yDFpPExNCWbny8bQw6LsgwGneHmCEee83t8h",
  "key23": "5fG8U3hcYRGWWMLasygNFtHyQJgKwPbkqiZU3sniVrRBK6n9CD8tkbSE7fH4vibYLbiaEpDiF32Ahhuc2HpjzK9h",
  "key24": "44mzXMksgheLtw4Lr3P7tzRtb5BesuzLx6UscAGqzLYA3WuG5RsB7JjiZB7sKnZbGWFoUZVcz7PCjB12YSgkbcMB",
  "key25": "uGWbwzVe48sGRyQmtWvxbj1DpA48CvjgMrhGSgevDLuyxZoYvFtZbWyjKvWRBDAM7VQxmQ2QP39WLt2hSXtPHyT",
  "key26": "3WCeiG9vHYbCPKCCw2tJh7woyAcjCQmQR4uUTqgyNYkMpZAiyqN53nsxhRqtMk5kENiusGgz78dBxnzjzjWY4KVD",
  "key27": "63DAxF4V6UzEdkEQhfYzwZTBhVaersJWed4sjjnQVKxBX89x7d278TPgM3A9EMA1PMwcQexYqkThftCwCVLfZ674",
  "key28": "4DUUDera8o2dQwXgwjx7VVmDifqQZHL7i9n6dh75636HAcLq4XqiJR1TDGBuqHyCqoUcoVBz9dobvFC4K6eJEfdS",
  "key29": "FfZcwofezbFM5u6ii7UmFmzNsrr1XZ26FyL5wChNkCHUkpXkMXJYPdoSt5om3MGDWH82MqvU9QAGf37M9PhaSAA",
  "key30": "XGqDR32vYc1ADbZkfcWxJmh1kopVaTbL9oDRwF7AmXMF9Bhqah3LhVYcCy6qVtHcC5RnAwEqrPz9uHq8omzDfw3",
  "key31": "2Nmp6PDvAh23vJsVbmdHKisUz14WT2aXL7sPcpNUs7MVncrgZEg3VaUk9wsAdcQiBuQKBRWU74z3E93z5TMBBhF",
  "key32": "2fASAgTKnpdFQkud3bmbMXHBmFAssJegvJvRqCdWvCEaEvTw7EbMptbn3rsppSRb8G2ZKqrNW6GQcD5wU5dBY7Jk",
  "key33": "3vzekiYaKyh8MCHd6qTtu7mXYcykD4zJ46bkGtVxCcEAKmsZQ72U4QMUGQUYa8xfoN6YRVaXwYDusSHAadet8PpE",
  "key34": "3EPRb1jpepRGWKRCS1jfKLeQX4j3CUHchLWbsS5oPZ1J9WULYHbw2m4P2ww6buUDtZp8cgHdZsjGVsL2v1bEGiiF",
  "key35": "5zjzHPZwYunCnVt1VKK62D6Cu7vhL4Syd765FU3CQvaqofT1PRq7KZgLf8zCvzmAPJG93NLZff1oWKadDdS1iWVH",
  "key36": "2YZfCnydh23hzLK1VEUcBBw6V5Pwrjv6YJ4B6DGqHeAXwSfrC32o2U48dR65zoaG5MUoYydPzwyi67FnaWiuyoju",
  "key37": "rjk6xaQAS1XXrj6uqwQfDywhjffRx9VWYq6vNLCzeJb976Qi8dLHR9pFWE6SedQABsTiSPYSwAmA4RVn6BNGWYu",
  "key38": "2VsYgi8YvRXcFbJiQvESpr3YGd3sRatJsyZcD8D2GhyhhpkQJXVRKY5krFS2J3wq1Nm5ix7JJdh6iRf3SRbzNsaC",
  "key39": "4dq4JNR4g3jn5v6ASnFcLRb5ireC33Ko3CiRSemKnRhWC8HErd7neqSBr8rNKxFtiCJUkuPJD8Xiq6NDodGjLpPq",
  "key40": "ihs3e6pgGh2K4914Mk8KSEA3CXy9K8yzUE4nbwTgLD6VuVkSEEn7GzEKCYWgd1zrPS6VPHCPuXWbw42GNTzAjhx",
  "key41": "2nauqxDypCXk6wZ9v1tcLcTMY9cjg8eyi6YhnGxfVPHygbejqZZC57KKVB2F6PaLzkgsKUexdbmW7XX64TVbu4SG",
  "key42": "37Mr8NziC4nQe5aPkMSvvMGYn11NXkeq5awu81vYC4UAMm7ZQEiqrdxMhTmpziYRFuEijvPoJbHjtErpF4jDkpmz",
  "key43": "ueaKzjZ3tq41D8Tue5XSHjxJGxiaLn4HbefV5mMBqR1nWQzVQtccMoDqa4i1oyhHitbi22E7pQgCnqnavzZTs1m",
  "key44": "3FUn95oAba53yQKGkvKmQ8qybHgnVyhWiKK6umX6k1DjSNU16Y7HgvMGFpoUeo42LRdCALZrXWMWMqFVpP8XXidz",
  "key45": "2Efd1mEEUokWZhEk5cSGNjkSjfpw2JUaMksURxeCwp4Cw1NiGfdLcbTA2TZGEXs5jCZ181HAFJcTfVnmKC3EHJSA",
  "key46": "4LocUG7MRSwPQ73b9DEJ3eyh1Qio61AXJqjULYK6nBv1Y3GuSHJiiuNPo3ZS4dDtHho7s6nPVMsbBybbzAiW2a4p",
  "key47": "5zejCJH7BmfazqwtCAuxserE3ybt6VkdEh1pZYoLTmszae7kmmy8VACmHbErWmmLZ4vn1U3SJsdU9WptAu9Jr5DB",
  "key48": "4F2dH2KLWMW7JeuN2vaRtmzVsfejMobyeiB9oS39iALgSwhLHsajagmZjK9GiheoN8EfqUMjxwTeLYkG5Lmsf5L4",
  "key49": "4NZtNJkWYkRSh8XDBS6miwJWGx9wj8ZBk4h2yKvTJwricDyT6NM9HGALvCm9e8A6Dg4mpoPxJ7unSUaPaDngftdy"
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
