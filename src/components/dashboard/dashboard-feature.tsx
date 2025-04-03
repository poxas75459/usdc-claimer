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
    "4mSWCkPKPZKKwfPP9uPaTRpA9U877gQWzCKB79QBmLTZPiQXcndD7oZPqNexje8hbZUQpZ6hTfpCe89eGn8todFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SvNZLKBnH6VmuSHLD6XQHUWA1BTn6jS99Hp1y5PUC4hjfyCN9qjRgZWZjgYA8a7YEubFbwsXhPt1C3CEBiYA22Z",
  "key1": "ap2M4L2Y1YBSA9kdtskvPsi9g54FB3M5tdvgPCrA5aHt6rLnqJ4faXoYKttwAv6ERQ1VemDhVBQTnGgzTTjxhaP",
  "key2": "298Xj44CTRpngrrLzuaY3fuNanF37bGazNVvGayx7bjiFiTWAPt1DCVps8cuTg5PspzeyZrbuSYgAcKWMW7qW6Mo",
  "key3": "315Ei9n86SD6oTREBT2A5VE3QyFGjDJDb4pPv3hanX1yJCZ3jBJX2hhr2Mws5AHqoHSEWJLhHsnXSbqNsB2Yv7Ho",
  "key4": "xfJqVrWx6Qw7Xuau5frvjw2969xaLSqfnUyRwPKWtxYCGaxMsuTM8aogauZzJBxVSELxLa7W8MyyMAig4d8HDow",
  "key5": "66htDWaYndNVwGRRUJg31eUsttFGJC56pQpKxiC3gEpnAty47tEmmhgS3CH8VNRnotvizvMt2bUwuXKhRKd9wiAL",
  "key6": "5mwutnteje6FWMyNPEQm57f67VP7kRrmbxXUCEM2AzyHjmmwMYnhP5U58iFEjPnpLAwkfn4pSGjubLZdurbnT6V8",
  "key7": "34pLJ1trqfEpsSoFesuuV1dSv3wMmAqVAMvKd1pDaZAsnFwsMQejPLSVjqTuzMduu8vjNCJ13tZqtLSQyhkMNdNa",
  "key8": "4UxVm7PuGcAvGo8iV7kAnTYBueZ3q4mBxKoq3272EtacJr6rUSSnTu99VdoYn49QJRehzW4DabbHpoupqd5YfbTs",
  "key9": "5fqF7NfM2xBZ7cL3RAZVg8RUS7v25rL1189Tf3QvXuTPsw5QGPksb2ubwmXkvtadLvXMmWiQnVhovRRxbL9KQa4w",
  "key10": "2VratGjv64u8ro9XPwC89JEekVBSM9svZsqp1jnH8jppQ3Mx5ogXZDbGB3RTwH23yyUh9whNJdLiXUszyLCNR54g",
  "key11": "FaA5ercVv3V1JY74MtuvkRHd6rqDiD2KXapoYyvwotQE7X4QzWdbPw5YZqiBkWXVJkd7pswdKWK1JzVQmLE4nAF",
  "key12": "4QqMab7rRaAfPhMAVXpNcTzawnjjfNsuobnT4X7KMz1y7Ya2n7CmgyUaBtanZeE9JNh248KxpJEn7cq9rcPD2v8G",
  "key13": "2znFBAePwEDUYqvNsSYxeWTxFaKa2SPuYMXvB5LiadAV8DSPPv7xp2smA7mEv9ubhKJWX5GJVUFFtcvN45HcpE5h",
  "key14": "4nvPJfZfjjBH1pjg74Am8S34ShWWZ2bZ38642EzBFyXjNLtfy5WzyYCvCrKFh7EvZeWT84t94J5eBM4VycAoJRWj",
  "key15": "4pyYsKNNWZ7RPmyj1Ly45aeo2A7MgiayRh5bnHuDwLQohz6w9J3RL3t6RXjzHW77NAHqUpy2drAU6EconhQVLajh",
  "key16": "5YG11UXVFb2Pfn7jbeVukTUFnMREfeK886ixLhyj5DBVrMNSj7ujbJQAvyGzisAQ4BtuF81LC35mFqBopDSpbNSJ",
  "key17": "5nFo5T9FSY3WgSAkoLgyP6HvtvbWP5DvncA7qYMMF78kJw5QqQHgCD3UjZB3bKWVpm3UpXbc3PYSLT6GNYF5Q8zb",
  "key18": "mk8mJkKV73qvQDUNFeXDdw1fhu9PuR19HvGWN7u4RAsd3YgFKbYuNp7p2T8GwgmpHTvX5wPqsQnJ8FrhzUCzZRv",
  "key19": "3qFUo4tdvPWumekCdkxbxJFR4Xf1VS6TEMoMjX9vJSQqsikrH2TtwZysuZopS5mzU3ULYjAUn4Gf53wKVfDuiyye",
  "key20": "4AqEXWSnMxYdf94pEeJjpfpNtS7rfwqMbuVzKjL29s9c4VHjGSbmDeSVGaru8WzhU4ANsybMpsURJeCp1H2QDCjv",
  "key21": "4rgrknXKTrxsNR92qHcXhc1Pg1HPPDnytJjZqwX9ENqo5VTsANiittXFqLMKQfQQF8rW5vNnuBAGyYWhjUYrKqdJ",
  "key22": "3LjRAcXidi1tN6rCcA6Fpx2B6fmsqku14BFWmbJNhz4PXdSEDvDAb3kiWf8dfcYHJkUL2NadVryz8PvERfgSTUP7",
  "key23": "2gMQuzthdc4f6GdfMCwoLcdiGgAzdWkDS6xMykyghXviz9ww9b3pPnkjwM6VccXtBfpBDViQcNA6jHCse1BPuhew",
  "key24": "55VYCgpJK67EJPHEjYahszfYDZFYji5BKnEvSX7xJNx7VwqoPgLfNfCyJgkdEApuJuW87amKnHQJTPvY5vZLfUZY",
  "key25": "exHjVTru9wDqXBCAjCrdiD8tU2aGfbiudXzy1tQ4W2zPVyAEDdBHWh9xLucEVc5FTM3L8pjbcK58WXvnprMoYku",
  "key26": "5ai9dXjEznZBUQLrzxVPAyrtQbzV7MDSK1jC9oFViimHdRArECgaWKQA9BVwcJhJzDLm8ioF686teeetiwnGM8Zi",
  "key27": "4kcQ6JpVkXKdq7inEhRiuXgwzU5tqB9fkPh3tqpFhP7LWpzfPuXzm7TtVoXCzXSDbtuxpZukMRcF4Fq2HcXXdpNp",
  "key28": "5TKvbF55ktcDx8QGPiEVgpmuhRbehyxyMb3TCpKJXABoe8RppsTThqVigXkfAkYtaRvMAV8mPk3BnuFbEHeqXqJy",
  "key29": "4Piiagz94iejbziq9rCgiMtgZEMX1wKJCx2sjfAaBLe5eEpKP6YCyZmY4uMtBxMa6A1ESvkhvbEA3HVSjUALhFr7",
  "key30": "2hZ77jZn816pELsHt4ECRpNA62TBR5bkpsUn9FVTat8H6A6twv958u2zkFVycrAhjiuDC12JCeFC9MXtwvrsvTKD",
  "key31": "TEWo23WtrThn8r6pN5AdXiFoT74ynjtny6QguQ1fEb448gkkJdaUhV3d8noecSUF5YrQaK2GH1igf84icYRDfCc",
  "key32": "4bpf1qcAg9LVPwtLKL8bzX9X8wwHFMaPQiwiizPzExh32XuzQTSfS7obJfNneTCKGJrmYanfDotBfwCEqgrEWmEm",
  "key33": "5bbPZe3wnC3WTcm7Qxsz4qQJE3kZBoBLdL3CxyLCrQzLFioLQBCxZ2oUM7NA4T9aqRx7wzP1AamPDjMPtVFyDbYk",
  "key34": "23XmXhNCsa69KiwHCQhywCfpqhrmFKqC1qh9qYjWKG6KEYPyoY3akUxmNKWY7R3znG4TDvNgFd7gbh8bHGHQfMe5",
  "key35": "3HCJo9oGtAUS4qhWR9b7E9eGwhNUxphJowNQZie2eDRkLt7s3icyzEHwQBwKCRxMzaVK1tZmTKWHUF1w9aN7Lu74",
  "key36": "216qmoJyRV9Kqgqbt3v8XqtKViFviKZ6cFvozT9B5qoRrW8CqkrF5pwfd7Ktdvn81eQQsYzj7S6Rt5BbtG5LZrSZ",
  "key37": "3KxBGXwXoPrsUg2qt2FPfEwQaP5JnbERPDw6DQcfREeQ299d7LfZC9kxZAygY6FuJQBFozZPKzD5HYg1aUt9naEG",
  "key38": "5HsSEviZcz3ZmEJr5kKD49mzEDt3EapbQeQc9xJHcAWc24AuJccpWEDimang1vcVqSbxMESYnTBKo1ksv3jaRSdS",
  "key39": "3JsKp5kTeEQCvHVLyu99rQQakYSy6KztS2ZASZn33wuGWX29Zooadjc6XTsHn3YaeybnnnRtrtXA2yDMTi49bUeD",
  "key40": "41J9VG81vHMcttTG1C1KJh9hAHfrRwyiYisdbXbuCC2jqLHrckuCFQCtCHS8Uzm78xAmYxxpQnN4CoVxNHCXp5Yq",
  "key41": "4XwQEm1mMu3eo6mxGSEfdz7EEyFcyhiKMVkN99LyrJdaZStv4dZZ1yfwSZSxDJBvjAzzzNoAoQ1yqWRMqaG81inS",
  "key42": "Gu6GTkCYovtVKGoVNm1YyUogVh6JD9opjs6uQWqGwXB7826e67GgsW7avHALGF2mz9kcxKG511Keqbd9aPujevg",
  "key43": "RByNpG7iX37BfgaK5HR216tMg3VnKYj77upUtGZGUvRbHy58xYmVKgSgEfb5NFrDQhG9wZgqwCJ4Xe1cbVv24SG",
  "key44": "2gXJQECdUJpPJP11UTHqiC1TMWLcN6JECGzHuf7akYe8wTQ1U519FQqiuAxd8dqppwqaMjBjsH5hqVrxjTRuW4m7",
  "key45": "4WEqaiHwWntQYswPUnKkBdXfUncisBPnkUWTXwcawM4hk1T4vrqvRFkWR7YwmqLNrytf6e22cFqqLyEHLFt8txU3",
  "key46": "uKuQQkHh36ypjPL1ECGguJ46ULChdqn9kZphjiEUdpeCDhnWa2pPSS2jXEZfMx1bYKdNL9GfLEsk8nVRZdaqS4i",
  "key47": "5GRxnFxmXcvq3cYjqNrsrg1BwC65kLJ7aR3NkQLVwkph8VYPdSwoVgHXAuVFAveyji537rQTgPc2K81PXup7QSsP"
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
