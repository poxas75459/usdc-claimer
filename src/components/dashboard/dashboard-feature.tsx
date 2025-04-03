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
    "3qBZBL39BjbrtM7oiRQqVarkLTjDvBF1k1EsEWpp5nwXSTqH9umi5YBs8fQURvoM3kFWtUQBbmjkmtbq1oajw54Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AzRAzMj5TrCTZ74Gsf4eJN3Z8uK1zmg5MYXxxoYTmE58WWH8ENEum5Q9Dedja5JUQUT9dp5V1fkD9FmU3HE25bU",
  "key1": "5gWb8FCqeSMmELKqBFuC2J5DAsYa43LG3pUmdCVwtg5qLsadLY7zBSz2aCP2e3SUbz6Yv5ZatBYsEnxz8tthUQqp",
  "key2": "4ajjg2d713qd9VbD9GvKcwThSa7Wp3FXBLNkrJbsP3Y3YkDmrvYw4XQEak3MJ7xNS4V9on8e4fdiDusSutrTfMB2",
  "key3": "3mQAtTtggiYQo3S1nS6wkF6z1APpfwq869tuZjEqwj44THdqKDunKBHH6b1x9X8trjRxUFKwB35WqR67Wc9QV7Us",
  "key4": "3Kws2y3qtGhnmKPAbicT3WzzpR7BKqrowZf8H9uW2AbAYovD6o3sBZ76kfZG61NDZAB7bxAepSbCq4fVjXJY8q2r",
  "key5": "5jqzbU1cqMiq9jDESMVQs95w7dn9H1xE8JYqp3pkHd9pdHuVSS584XHNTWkd7D5SzD2QhMLdPRx9NfVU7zQTb2MW",
  "key6": "5P2fKQk9skyUjNss1UyL5NuQjXFZRFGVnYShU6mLDxrPHQZsVtr12UR9ipasvqGK74xC7GACH7AqKGQs3pHH4LDY",
  "key7": "5ZVe7fJuP5LP1mNUcpnwYLtHMWorrFsDpqCFrmj6E6vC6yCWZwinvSFB8i4UwyirZ4XRDqR9fw9rkDePopuU9nnh",
  "key8": "33ponxTX16bSS53J4yPhg6mDuZxffEmyGcrh2JFC3TisomVDGbYUp66wfvBk7ZHQ1wJcHuJjfa1KweqXU6g4dn9q",
  "key9": "44m2B9ZqUDzqHgRn1xp1yoT113EKaw7jgKF7Hoi9LxG1JPukyxvzpEXnsC3WcPcB2kJfugXcRbz9jEVQZMUadNKC",
  "key10": "59UZrNjPHiEsARW4HYZjdjnSGWVA1oqeVa8N3o5wC9RCVNM4eTmHWLYwwMWtQSDLoGyFvw4RzcSaV47ixfRGeq6r",
  "key11": "4KSXfksRmbwQo2vWn4Zxmnyf7N8k8aqanp8saB7uYverDnHAS9LsdCiNg6mf9syRBd224KyroXVLELJPgEg686FA",
  "key12": "2ck1ojvyVr9A6oK7MqsqHKGeFpCpAgLXV6UWs3L4Lg5qei9VxSwfW7LCqq5nKxgXFrkA5fR8QX3CCcFTE4SL33r8",
  "key13": "4XKbw9GDBT3YTiX4dXfsuoBZwFBVzgk8nCyfXRokNRDAVh2Uoqr9oK3RyB95xJTkTjzvxZN3oTcdAyEBDJ4scgcp",
  "key14": "3uFYWmSK2nJTfPWvWXiPR3nrkfh5X6eQ5GF9tA46UxL22ubK934huwA9cjJyFjkyJaDgLkH2gp842X2VARFVMYyb",
  "key15": "4R24w1zWJnDJYDrbtv6hFfmDmyncdg8GfgRxD1NxwGZ84qYwwwidb7aT1AXhW21PSSFQqBop1usAjuUjpyYvgsHy",
  "key16": "Twf4fYBxRzQ4CYK8kbnst9XzJjspFjiQGyQ2jwnXj1vNZPri9NyZt2bgMuvmRpRcKZCpFEkbFDE18is67vRFByA",
  "key17": "Fa3ywBdioDQN2cdpSAH9fJzYitj76FwJ9Yf9KsBFgYDRfqh3iRF51a1d4pdxenH4sZrMArtVCA4stGAxwpMKpvA",
  "key18": "3uPM9iQLhzTyUNbHJpeGqCHrMDvEhpd6KwHfuHzZPUerUhgnpnmAJopxHi7sNJPEnqj9MxxETXTLHLpkyjU8xrJc",
  "key19": "3Pvk1BBsHqENqBduUVP6jTGSytt1KQKUM2yQv8p7bvS5koKkJWAjDnj6ynhyQyFZrmre6W1ju66rKN2CSzKBukqu",
  "key20": "5hMEEmYNm5Q5kvxHeYWSwjjy4dxdJnL8NjNzAi9DbXYaEyAHDGpW2rCA4CpA3NfLgfZXiL1gYuxC898Ee2rDmLzL",
  "key21": "2fzRZtRR3iwgAJHt3NkoNec8Y9gBjVGBgV2czZquCLvf423Sgho6PWV3KQf7z7UGZQUKRTRwSpdvCukX11uzpsp1",
  "key22": "s5Hiwx2LQoki6ivVTTsRQeZZDqmU2fN8zDCtgYUEw63Nnqy1CBv5LWxS4GA67qznu7aaYvRTpShfdMpnwZ8bPhA",
  "key23": "3Kq1ojNwpSew4n1fMSCSHehMKKT4exDqUwWYG4DufbPQP1GcUMXUK6KnKfWF74v8fyj5BB8UfNe8NnGvta236NrZ",
  "key24": "2e7pQHEZc65mGd7cmFBQCYbpyMEe2N2iVVTBmTreAYzPJMkqpj8wAyDJFDKQSU1EKGag9GQ5jxXmuUDFeDJuahu",
  "key25": "4YwedoatWzmF1qFC61LFPa84tXP9FPmwKkn3AuL5cBcueQPzxs3r1Gcwnf4E8JVmAofWkgQvX9sAradKGsRpbL2M",
  "key26": "3CHfSMwe7qNJUhNH4haNQK9ov7BqWzPuNU17LcAcu3jvntUFvGrJvUVrCyNMYyCBiQNR4V5E6SN4oyLCge9EkLf6",
  "key27": "2K2GsG9jaLnvhBL1McSyzHW78eZx3Ac2biDyYuBQWSN6Zpwxy4JwQEcXHRRFU4CPZ1S468Zi24QiS9pTnKrsHBBF",
  "key28": "5iPjNoan53GqZ37YQN4Bbzt39kUEuCXCGrVKbYv3ZoWqqBjcsiW4bmjjHwXqysc9W8xfWHwEuoX1wQ9xx4WreUGC",
  "key29": "2C4EoKPDH3CJFXRon5xyjcnwdfhWyJtyhVKF4oZWrf7nKanQ612ZkebVn8H89KebfPHFHR9eXQ3fFf3vuEXiJpP2",
  "key30": "7QgpFoKjgprSbJE5nFshjc6T2iDT7X54F4twHHgT3As1HTfpvEqKBtuMiuSsE7hb4kVNJwVK9se1tW3XmWQKFi7",
  "key31": "4B7mxZqPnWaFRBcysock7piNdSCnXdGov41Y2nRQ4LQPh5jcQf11ATgYf5zB26ZQh4apThsn8p3F5jwrfGsWnVeN",
  "key32": "4idog7QMmdUnapfBtMWMe12JLWta3XcQ7xSb3B958n3KmzVeqeYrnMiFf6M1Lw1edDyprYvTuX3R2RizsCTheKh3",
  "key33": "65wEvNHvTFipGV8Edn3imYLWq8YLzfG3tTauMbuMgLTRvgbGsXfNyM3R4KKASh65opDcqy4cqEmiXSqapYvvdtX4",
  "key34": "5jsfsKBisJ415nwEjB9kxEmj5KVbNCj3LHZcj1pUXbPuDdfwViSyeuFBm1HiSa5TATPMPfvGGGohtUMp5aKsBJpz",
  "key35": "67Bbw1p1kVj58ktZmnopNFdLqRo1EuWnkTw3c7oBXazWB1NqMLEQwVfAngcf1Hg6jjeSKo2CRF2kJFuGSyUNGnVJ",
  "key36": "3fRNAeWkhqKVwwFLNy6DucykwGEZgti6AViAovfzbVQvkWeewU2QQdYn96tegjsBDa7sy1hjfpG8GZ2RWeSX9d8z",
  "key37": "4eKpjTKxRJ4y6fUkJGpTAnnAfojdpRZ8EpfhzKahiqAuEsmHZtLyqcu66QSYv4RTvzvXr5QK1NB6Xg23eQ7iyDLY",
  "key38": "4TWqTcjoesUum9S76vieTF7UrAjmbYPd54Y8bidFz9GTWa1fngN3KKHvTwupj3MYckrZxFDQmwkAZmYnjNz9Rcgw",
  "key39": "3nVLWsqwMhgaQS1ZjxJ56RGUwHGTykHEMovYGP95sJGmPM4iCxS6XV7cfEQrVBTfyYkp7K8X9TuuixMGMassaeTK",
  "key40": "2BTg99q9pSs23rkro8vNtbLZ4E8CszDoi8Y8TZcTWNZNcfV3FxWEB9ppGwtejCVGKw9PucZfaDkJtb7oh7Fe5L8f",
  "key41": "3bW7KEVX6Ye9Uc8KHRYfn1JQJDyaB8rqLWHD3BBb5XAgxSSdUdzUUjVrfyWnvvPafDCNekMqS7fhbJ6HVXrhHUEA",
  "key42": "4XKhrF73nXmgB4rFrhZUGAp1hVSr55tvmNEZAqXBg7uAXj2x9rJk8temQcRknqPaqLUzjX8aRUqWuDLumDUUxZpH",
  "key43": "5py9A4KW4mysasLeT9r3TCzJruJWvyGZmwLvvCqrLnZRJHkNbX6twULKP8mrTZmfraBYDzDQb6sMd2M2ryZMgspn",
  "key44": "3wYQwpJ9bzoHB1AoGGgvmrDpjCkAHr4ezKzKDq3HZcVWVYaihxMoDcWeU8EZmxdeH4ezr1W8P2u3cMVabWZVxend",
  "key45": "3ennZRC8aRW4NzgG7wigRg5bPyNMbJr2iunHiEnaTaW6GUY5uEr9eUXagkva4k1dnU4pd1wmsokFo82qhmgY7hhH",
  "key46": "2AGtb9EBFRrj8S1GgAz5kKvQJhWFR8axonHsscL56nj2hp9vPqdYarDCKRmsyon8W2t5D3G8ieFKaqGFX3ctJ2FQ",
  "key47": "2fB4jKaBx2G7XFWmC2FP3ZVb6VNkqyjrZ141VWG2dsCjqVEQCZJj4DYTfxs5hupvBfMTs4Z2ZHpDUZjjhNVRxVvA"
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
