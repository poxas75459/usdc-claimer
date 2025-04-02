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
    "Mgo3qfZxqiCDmr45R82b6HuZeTNemHVARjZ8GDgukGqk1XLG6XLmz5XnBStQpsfL38xNv6aWXkkcmCZTR7r3rWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RoKLo3bw7GYDZPvToqgoc8kpWWfR5yLhhr1yVUjEB1gp9zVdZSanHHihxhRddNzJVmtUKWtivD4vM6uG8j3nDiT",
  "key1": "36VirjMvMNnChtEGrTeMJFCo4KpW1GHFJgj1aoL3PSJPr2ZWuM3UmKVb23qJ6eAEzKrLGwJ1okFQGRRS2SgSAkHn",
  "key2": "qMVkk6GUPz6KHUajG4AY47eGwbrzd4ai5gkE5PhuTVpfN6twrZeZ888NLM7VEM7arcUqitAPPR6JHMzMDGSbV9h",
  "key3": "2aN4FVGfY26MQxSKDMizqPLXiVWEr7JDJsPXbSTvCYsTe9DVXXg25XWxEipyB39Ei6bjdGTpbhmwrvmpBh1i87WA",
  "key4": "3PKFUxsVs6xcbCwrPwDCUKxchnUQdME32CXayBBPpjM4CRu9giygYS2NwZf1J7V3a5hxptR6q9BsMvkTfPVzsoWY",
  "key5": "4ebrV9pM6zx3s9HLqJaymvbdpoRaaP9yToggEX68gz5x6MRD1UhwK2w3y1BPvR9kcaV4MLwErwFSRb4hmpASQXYk",
  "key6": "3Wnx8gihKeXyyqBRHVy89kG8xcssi1WF1ZnFLuF4vQ3nHastJw4aV7Lru2Df8zaY9pvvGATndVigX656AqAuqiex",
  "key7": "5KtHmdfibTXzVoi9QYgiHV56nBuYx6fWAKn1GsFG9kPohTmRqTTW7hBvuH6eqydgBFvM5CWY96xiGfwnaoTsK3MP",
  "key8": "5nXAwaKnu15mFWYQpMZipapbPGvLcq6jxmfHJYiVJ8GrgGCXpd7cgMNiafEGjQbzmSJRzXyqvANNm4MYTqLme8NN",
  "key9": "5vBvJ3r6DgnvW7Mx82F1sXYRVpMdV9n7denN3GrWQzjcFue9qfFLUdcT6Qy5pvzzJmDwjXnk3Seqiz8mA5qAMsPg",
  "key10": "aZYuhsqaGnhZx43dPWiiP5wSWxwGM9WYPA5Jn27q9F7HZHgq1wQ71aBh1aXumWe1rJwRD8bYs2UCfqMNcmcB13x",
  "key11": "rQwk7txLUUrwyeodYC2MZH5JKGXRo6Ys6LGsHQ51j8dmZ55xL4stqmxeGnuXrwxTWpg3ZGGyxmRZKWN3dGuHoiP",
  "key12": "24AXbmyvB8wBGmjYSWPaR3hTg2JtS129S1RTabVH2XFvQTfG574nRsCSyLcagXDUDnBYsk1Hce7igbAvJeSadzuq",
  "key13": "4Y4htvtQcgaYZ6eB4y6ZYfZTQNuHcxP2GZggQKcKg4ZfgK2Qtd2oWL7xp6BB8P7kqqkieWJgBZoztPUBdRfWCkEy",
  "key14": "5kof3FPBnbtmnUhvUhgdHv4qwKHWq67s7xMcmjYf7bmSwKfzNMEFiX9VS6yETomkbJXJPjTsrTbqrssfSvXZcMr5",
  "key15": "95pgTB9dVCd1NaK5G5GkiE7XnQF4UfQ7LtpH9Cr1sgVavi9Wf8TahgLuzxUftNNPCxj2ZUDKGd577UZAhw6F7rV",
  "key16": "4NwALf4WWn3PRNuyfv9g5F78fFMasnmviReoJ55iuDzfo8n5BgYL12pyASt6zeQ3RoVbR52g9KTJ2EPhtpkDjw8s",
  "key17": "3iufHSfcvYGr63riHK1T8sjxZF692f76DVc5BhgeH8X7XhnHYrhPTzGzocSubwEDtFrtYz469yB8GXugPqqmFMzq",
  "key18": "5UU5voqseeDP2tWRAv4MnKn3nuyqEZAejU7KrG3MV1wqL1uQUcA8KPjYzhffyiSjYcqjpY1GAaNVWGuX7MGgppg9",
  "key19": "3zBcgT77uug6JrNq4BuSiesDHn1eFNAm9iQzP14AXbCawrMHPdEUtxJYxdUxxUeG7s8Bqcz9SrR9me7PX7W8PF5N",
  "key20": "5fYbnsswCtNVF8kRz61DjHupfXnkbWADKihft1yqhJq52aHqrYBdfdzSGyo7zMxdw5GHH7kgQhW1MGSuTuAx51zq",
  "key21": "37WtD7fAeR4AEygW4invPqpyip3HEUPMCzgMmDGRBWHaQMADY82CrJQNQ1WTVNmR5pCf6chJtbqxRdfnq4K1e49y",
  "key22": "3TgaPBxdYCfpTtxCchcVtbmMNdRr7Qwn75F1N5WrUXVmExrh77YPoYD3AShPryPTD9Tkg4ncri4BcPMVXFFGPyz1",
  "key23": "3DkCKRotWKi69RfEdfkAPPUkgnfiSsZiWyu5njPYqXxGjFxAo4Lfz9Kn8Lz5fajJGbqVNWreGYjSzqDw5JrerLcK",
  "key24": "4BxjKwNANFo5VesrxkEridRt4bfrVaT9BJ85WDqX8f4PUNV9XGHBE5DgaKCWsNNaxE8g3ThodAZh8ZKqgVDn5W36",
  "key25": "61YKXTi4pBFCoxh7WhY4TfBQcrTTUKjgGcT43WLVVRX5qATK3gjuWuDYfqfR6SnbV9cP2R3yxSYbESPtNGQzVZym",
  "key26": "3giGMJ2SEDYV6dttU4Rv5uFtBvkAERoUMBQ359nvghBkv9nwARgpi44VxArisud7STwW1WBU9JXcf5tDExqthhVJ",
  "key27": "55hGR7HaDb2CexrgZThF7CyBcLtMrBhzBg5iU6UnCnEMViLvXbSmMwrcyJ325gF2Teo3P5NWbNeeuE4iMPU3UZRb",
  "key28": "5BTZtT1BPS4h59upGqJiAAgecueX7J18w4GoSH9AKwdVqhU5RL4vXZDdqicRdguB6Ths5Js1ZnuLvCSSfxgWL1Ri",
  "key29": "2GJGXMBiXgRL15TJzL6JsFqWZvJjx71R56xnzuXTYZhX3NxofjCjxpofEE1V826uKsd9pktJ15iLBxYfh6hQdHux",
  "key30": "5f6j8AUvQirpsZuKBzXBrSYKW43hfjYeK46wuZ6sZNyvXSPi59CPc1WNmVkKgS9rn2QfjmF5am7RkPGR8N131pNA",
  "key31": "5DB5HTYbvEFgdsDVix4P37U6dWrhGfhnTSbt1yJDuBWv7MfXnpPcT9XFdRRuMFsHX8tcxhSEGXRgo5odzHvGrJz6",
  "key32": "27xLoJZxbU743cFkudYesPE1Y4ysxrwzQAdEYvwaCyrdop8QZ3cTmaMf8rFS7MaBAVdTUjQmaskMmvbFrmJ9Q5Zv",
  "key33": "38eDV7bVCQQPPM41EQxYndHFTEowW61ph9nY8u5DrqX54U4CMRof9s8PVMEusxNDQw61wXQEihbnqrw41XuGqYNj",
  "key34": "37K6XMVevUGABBBYHGRBb2h4RV3t5Yft3gCTrDYa4W55ur1s1kynJAmrNBmBrs7EpC2eWrnZ9tiBFsfVtkYCPBhr",
  "key35": "2qETRhgcJbpUN7dBbNGq14194Bceun2yqjnKNT3JenpBNeVjAsauYHVMxMoMFmJNu2cxtMbfuga8ZpkDYmXFUWe5",
  "key36": "3HirW9Y38PMmyQjpnq8jSodx7S4j2qicDFB3UUudhZ6Strd736Hk6jH2VnGthuEvMpHFHVv8LnQ8Du4WnmXsHNHL",
  "key37": "5GMETCrRBwmYqJm1NGzB6ehSFyNKG4WVWvwrspmbQi5npYqLkFiGYyNH6pR85N661Pyz7bxnPcWKhjHMaboy7BBq",
  "key38": "2f45koimfG8fmAK6QGkTb8St87Tep25tUngqqNzCJ6A5huev8chHczYvHkFZyEuPLmPUL6LuARJNSinw5N6kemuV",
  "key39": "39ehdTK8Jz2U1yDT4WBSGy4jWTdddgzhXDNdu3tASmwQNjP1eFQYEWv8pCaxjCPLmr5ZdrCqEGeDbFxssXd7f9rG",
  "key40": "2XYmunCiexCcg625GFyCkXt6Uf61BQSCMi9LhoxmFXiDawpccotB8UWq7VMbqVNUn7vXfuu6fD8pnAd1fxRUW5FQ",
  "key41": "2BQyjW4dSjif7mQNEkAV1qa2gNyxaMXXHq88geTaBXFB748XPZ5n1y7p99yKzSYRLVj3ZwZFBGEfHUU8JdpkueTj",
  "key42": "8HWFgS7UXrygTskz3p8g2rk1TLn1QovgS4kGyjpuh2ynhZZmYFzwmJtNnBFJbBNJu7BvCpNDxZJetFde8tMMaSA",
  "key43": "3C3FudZGbJ2SoTXESNh2AFEMYqJeMKjjdR8EFbe969q2e16vKUNzyFcZpfGGrv7BrqetbAfWEMLmTPywwJKYn39K"
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
