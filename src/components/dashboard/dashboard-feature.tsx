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
    "wfMhSoappwQXYa4C8zRa19ao6ma7mBvhri6fM3TGhtb2h9nB4maKQcxNQUxYT4orJ1uJ9nZfCmCPNK6pLBPKwcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jV3nbMydRycZgP43onZD731bLqF2WfgAoDbqNvEnLcoW3AAGCb4cTudMFT4cvrtMS3mU7xPqRvZs54K5C41pZqx",
  "key1": "5RFBqG49nAp1pYzdm22C6Ghy26v34kURG4qeUbmuoDYsBXu7QgpBJwZ4yUTRjgBrwT5rnjuEPfBLq6cTDaWAcPU7",
  "key2": "4HTxm7Dy45kL8ShmpwhTgAJUsQNYjuLFAAPAiZ7evWscQY1M4m3CMJnuRPqZrF4DYc16WKf11y7MPNdfT4a5T277",
  "key3": "56jo3dqVTE7JaZj1v9EfgzGpuTAE4og8ZP2F6ceHmUJzbrF8Jz8yyCbggoBx6QKsewV7AAmJhCbecNHR4RcZXtUP",
  "key4": "3sWa1Lnwrp2BpSbS4ZXybvBZv7QzA39gFjchZ1zCmepjC5okcXzgVXhtX62jysAxfzrWDan92zUzbD3vWVv8EQas",
  "key5": "2U83V9KsJ5BBuxmSUiwdkGvqW76v7mqgWcq6uxfJNu5wudSzgh1pK18DFwbyDrEQgB5ZRCpmj7PPcpBPUKXJtAAZ",
  "key6": "2yHMd4fz28zoxUXyf2nLRFMqr85VoKaq57ZWiE3iavDtbA3UoYNECqmQfKLAYVjcQSyBJQCLfvCZVEPwDDNPNF6j",
  "key7": "4UG2EFjoSNt2bVjpD3V38dZUKApJic246H5vDXYgqTTV9wHksh31gPCPKQ139NGk5nYnD91ow6o4Nxt6Li8qELv7",
  "key8": "3jeAkrzva9qGNJtPb2Wp4AxRixtZ3S9uzTj1iNHFyByJc2uhhcoJXm4EqEjuvuxxTwVtuiMaaY1Y5TFtvCLZmq8F",
  "key9": "5r4jmuARxSqG2S1iQbV1toRHpjptDqPf3bki5P5gzpa8FZXeDqDdMdu8uqYMgeBXYRZv7uvC52PNfWuYaRv26CBm",
  "key10": "46Jmq3Z92Swsa9mLepY5VwLLSogMhL2qoJU4LqrgKbm3NGodYdv5v3r5Bvqxq97VthsWPvpJ4JeXdQNd7Fzh2v44",
  "key11": "2xhz87eomqDjq1HTzpCeoRkd5GmHYKLhRYBFM7sRFoWgdMhQj4LcAUnpMrZyZSTqE1aBF9hxgC6jqJT6MTHoErY3",
  "key12": "4dPEm88Bo9sMQNNUaDipyhiCpSYVgQhXKjBA7XH1mjPts32uoYrwtkCuMVzDUxf3HqKGkeCj9JQtLh19E8wwkkSw",
  "key13": "EaS145ZRYoJQhqKQiDakDgXgjJn2VpAZSqoLd1G9W8E4TsbMT6xNyirmCWa22WWmvakvmpEPVE7PCx6V8n1bQLb",
  "key14": "3kNAa7TySM7WWhn7a28WBy78S7hxb6WujEphS4LeJAFbfoKvSkJXVufZYYiJkxXtDbMmSAPoXhHBhMfamFWkjNLZ",
  "key15": "4HvCUgJkCDfzVtEYSawE7JTroDgX2v7TZgZ9dHmYtYwUZAoEoxjpTXkjTDZ3Zrp7Zu8zDoqk3i5PaHZrDxdhQHuV",
  "key16": "5MsKgj2Ruu2JEM1d1DML92mCcCKWbWtobNR5AVaPM5QCQR5EKqCnuajH53KTkhMLGLXgQzD8NspZkqsCdobHZ61A",
  "key17": "2j8xi5x2c5dYj6mZnXr3KhH44MhjNaNmCWgZds5fmxJdVPX1m4F3mjtcF3H7tTvcCmwAAhanbpQJABNzFs4UAdA3",
  "key18": "5ZkfsjJ5QLebb9bWAYtCGaKfhooSt1bxAToXFp3p3UrwxxFQzZrWPxRZfpoW9SATuwtVW9Q1nkGWSWFjNu7pNKKJ",
  "key19": "4mAY3B9qnCMY5kZ3GatPcmZS6c59zC1RyjG759HfCgN94ReYJLjioeEAHGbnTBNjHbAYjHyUYc3hDGr8sKa4exsC",
  "key20": "5y4vUapSG7fieUTPbdhRE7dbbvbJbP99SUNEN8Kag71YuUkecEJADqDUZy4E7YqgNR3ESCUzfTUMDorqBKVDtFPg",
  "key21": "YQ93MMQZ4NiQX54U8dQNN556LhfS5AXHJLfAGHZyK4j18dUxxUiHirrvkEoQbcHU9tMdRYVN1hkr2EfofL5GCiV",
  "key22": "3DARRuujKLh8JmjVXrg9zZovj1ekyfQxa2muHPAj8JDsdfdQpSxfhdzRR4En2jJEamF5HjqQebdXiNkW8Jgyt3HX",
  "key23": "5Rnr2wugssRas9sXHXbmy9k5dzHt9TJ1Xqfar8XvC4wwJXrWasvFQhWu4ZoBCnMrQL77zTxqWxyw7mH6ftbWYdac",
  "key24": "522CYJh5awfXyz8tvU6ywMYTc3uJkPDsnyJux2zuFWeDnTsVZd2nNdZT2GdZuNXZ5CPrehkjwzVbzX8nWDtHjByj",
  "key25": "42pdDKxYq3ASHnG2i6N1B4cC3x1QxCWELisXivQYRqfHC5YbVHqdeHGvvAkPCGR9VNURWxTVrnz9zDtBNjhuR99y",
  "key26": "26DdMuF5a7qpZnJ6VQkRCVfy66hoiDKJzv6PxRzPXpKGTgyT8LpvM33B7pgUK7A92yDVRTLAL9BnaCSFR3ZsMkkr",
  "key27": "8jAdZFKTKUjCBzhmWdEzYDJvEXiTHWwCmGpHDrgDw71BzE4eU2nk84CMRuELg1YFXWk9iLVB4pH3cGvLHWn2miw",
  "key28": "5wY53wf1XGjVEQjZLM8BurDV3DL3yrHtyTD3hMBcUKShL3WNmtF5qX6rKq1suSUmvZfvkbYjPWsGWTawtYUhj9mc",
  "key29": "5MrtpYLLv5CdqebAbPiwyEqrLQ8Dvf9oXcwcPoMDPgvBjeLeY315La9Wur3ZQ6d4msvsprNG6vVPoWZJcLA2X4Xs",
  "key30": "45TyiKCNZpzDPcaHmCrBNrkDJGycuHDnxaeg7khhBiy7dPH67nGVZ2dw2jHh97WJmWsJkpE6EehoADcxeufMQNuh",
  "key31": "3wrEfZWdR35vgLjJAM9CLEFnkfCiw9pM6B55WZAZ5cpjHEvTCiWviRwetnjVUKrNfmBrF9BKjT99CCHUMxkPLQ6s",
  "key32": "3DSSLgpMs5bTGuhKkbcSW2NskBoTLcnjVKQBMMAaWj3NrpJhMeWzc6wUur57Nppx7LcwxdE72c7Eprtcv5m8RFNr",
  "key33": "3rBu3JHevTxayPQ2Y5o38wZJyrrP4Ve4Bcr5MYPVEppvVupXdN4skpXPNpUx2zck4pJvgD34xgHJzeAQqo3HX1KK",
  "key34": "3c3tRF5xa4gSsjgUHKukRoGQc7r8fNwC8rxFta9airrTn8hPz3vCjjLiu1grysCGtvMhJHX9696vnZ7qGuu4LTm8",
  "key35": "2QtHxhq8enss98HuySZNg3M7QkAuTcipKyqmHohvvU8BBBAFaJPDXAjPUj847Ei2iY73WoX9xCt2NKhP5JXc4RQB",
  "key36": "4VoYAVogqWjJL9StLVULaZXfBNFf6do1spmABNUSagGvV9E4XA8ue7REv2BD7stRZs37BpYPxw4sVEqrZKLMADQQ",
  "key37": "2ufCv9A9eseb86wFk1CnSCHJNcArueHTXzp1yk6XtEFQ8eMR7xi4rKej38ez5T23G4Awz8pbjxFqPpwDHYbyyGYN",
  "key38": "3rJr1q3M3AxZ84uNiZ2yxypLMQEjVW6u9dFjBNUCqf2JzquacwupN8X7BHv8mhYMZ77N7gHCXTmWbV6p451bAyZK",
  "key39": "2SWrwzs3Bwgx16zq87dLtL32RQfMXLGbGjaN6zuQMQh7mEJsxquuBA8H7oV5dkWJ4MtDQmuahRMUrWsP9twVwKbw",
  "key40": "36erSqiNjDkVz5Vjm8FybJVFavBE37Zaw9tLE53rXxAwKzffMMW83ULvucf4a5iiMT4mn9Fxi9rZD4vSQZfE8BDP",
  "key41": "2xQ67uQLbizXH4zgW8HN66HFcocqurAbUaY8XMZC3goAHhbVaNFCrnDmHkQoKskF5J6ELhEJ6sV28Gvhfq4EcCpV",
  "key42": "5cxVNiYgadMBfJvm9TweZvwFR1bvdNsDiEkcYKFNyT6M156diPuSU5rKNqvfykNxin3N5M2ZsZMvcaKdrgRBHYCq",
  "key43": "5Q1FrYYMCt6L1thncBqWGkQKiHh5313uAEv7PESH9wikUY1xQeK6TCgzmN7msd29hGqW8st5wz7ycVbNJrntk76D",
  "key44": "5Wcem9pHvtWzfhGbeEd3VS1Y1bWuwcYeQPD1zkQ4xpo4AFfpYyqNTSbqm33B7kAQ81rexVsksnQcb4oavDCTZQtw"
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
