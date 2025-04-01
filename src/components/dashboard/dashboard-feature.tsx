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
    "2Xciyy24GAt68BpvaDF5CS3drt4AChpBK57n9eA21zqxuRgnEKf88iHQUySw1XJsVwj6oHPDj51cY2u2UfguqNeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BYzmQ3YU5TujYbE4tq4nigt9aZF4AU6EPe1Kb32yupq4aektRuyndfKVRZ7QqRE5MpGB3LUq9f3xXXaqVHkv8T9",
  "key1": "KiaoEXBBbMFeVXaD2ThHcz7dPhmxcmtc84xCPmoguhUPov5c1W3Gwa22Zyd9xspmRVEsSiqJ7QbbYU8h71WL5tw",
  "key2": "5DtKQXBKvg54xFPtZLEz5ooC7rKXdd9cMNLcxzJzP9y9HfUhWZFvNGUNEeeUnrVgzqNMeEwTwS3KAtmfXfuVrdZZ",
  "key3": "2HctAePNMsk2QhbQL3SFQVdttSqKrEdd92KqKCd44aiLo4sDDiE9iTfY6yfFbnQSoDf34cdfrAB9fyj6Wo8sJo9d",
  "key4": "2YAdFdto8oNyT6XeKuFWPUiSgerwctqGE5mHNo4NXHAbV5gwiTgnC5VFyzWQwVkUtr82Fpot2FSYt4Sk6tTocZKs",
  "key5": "MBx2WnCD1dB2pqmcdBmaNYvuBrGCe5kZbTCdh8pPaHVgiLn6uzsdURSknUTQWU9E2Kn9AVkg52YBcn8C2xHferW",
  "key6": "2ZfEQhmvBgtwSveVgyNxbPGzitkT6npY7XrKiMbQzBjwSMzX8GZvfMqCjXQdMjvKBuP4YB4Hd8Ts7DqRZmMMoFxY",
  "key7": "3PXxxBjBwCAnWeMMbtRtyHzAJRjqrN4HfUqNeU2xM2dnZm7JcRkdtPDRG54dvBXzukw3UeZAy41mAegykve1bJHv",
  "key8": "2oJe9XSoXo6Qy5rEMpiZA5kzC84yF9pzSWSVmwCjigN6JHW5QUnhDiipjd2yLmisRQ2H9Q8WTympwuJ3pot4uWuZ",
  "key9": "7cEoYyDNkhaSu6qVH5yni9YtWwsEZXezyUQTvmv9jnKYLS14DR7NxhYqChAupqWC11CsGMp6QoyQtaAmLTJLVqe",
  "key10": "5opUvR1vkSyA5tWvb4k5yThmJiujkE8erSCeWoVfRYRYXU4c4vnshSAunUAeFXCAUaQmPCUiArLpqqqaG6tCdB8u",
  "key11": "xM8HdVPVXMts6RPYbSdYPUKfoTw5GRTDTrvVCfK4KEewtapRVNP7DTWeWiRWux4koPu9cCMY4oaCvfCK61oL6qJ",
  "key12": "kSy7ohN47QvT5yqoDgkQMZdCYApKRaMYtCutRhmu5QhyCcub8ex1LvCnA6rfHAs27Ror5QNCG9vp5NLD4CpioFi",
  "key13": "3UwNdsCeK5dUNvWz4VzrUZPsN11BBqYabHVo4Vccj2SP7Wv9RhwNRjHVEMFPCc1pidp2bDAw7Z5EFS4CwtzBrViL",
  "key14": "5c2ZeTnhV2wsn7uBCpejvPwMUTCEQVBDse9r5MCn2MpWrf8bGkenqF4sxSCfqxfoum4UvXW1XcMcmZEdN7ZVaMEu",
  "key15": "SrRQkK2zQZ5K5dqDU5wrLkKQsKTUgH4hDySV1urbzgkRLgaDkgWXz22MewHDWo6jyKhEyNFEirtLQQoxTGUx81s",
  "key16": "43QgfSPffpFmM44d9FHJqx4TmLeyk6z5q8mCuXYWsYZQuTy3LpfLxbVn5RwUkdEEeAmBYiih49yNF3Xjaem2pMNo",
  "key17": "76XX9DH1qTLgiiwq4AMSrjd9PHmUxDosvaZ7HATRUykrXtZcAJPNr52TsA52s45CnWMLaiBwYJDw4ZYBYavDeVU",
  "key18": "2ZtEgBGKYoAwrJkeKXyXoKgBkUi1v4nC4SGJk3MeLuX4DLcoL7q1wnax87YRxvkx8e2bgUkj9zLL97zmRuwaaTAY",
  "key19": "4BbDSC6ziEUKxuSpngtKJkbddJrg7oZhti5TQHQXZBXDrS1uS13oHe59VHkepvHT1E7VPc7A4oJzgTVPUtYaDS6U",
  "key20": "5hz1CdKXcQofdj2j2shDQAYNJcD3enrkvjNy1sUbA5vzkqFgS73PpT8c6mQWDLwesZ2JWLJdDLBZAwC14DQ8FLG1",
  "key21": "2TAqdsgmZbJwBrpbQBWdpAVa34N2t4QWchJ1g8n5t16bMgiEx8MDGjDt84b4QGrirZ6rZfVRVFiqUtRyWvccNwfy",
  "key22": "2u21uCduRVTnHzmBbqy15KpSs2JvrRSzeM2ZuKyzVr9bMSbvHuxgbboT72fr9jFtnfCeRDVQgkvwmjKv2ms1pBhz",
  "key23": "nWWbbfJYePEQQos1jSkavhMz19Gu6h3eHWe6LRyTtpfPxrJKsXEazCRdKEQxkbqWRbFhBoGCHUZMT1hWZWXhsFf",
  "key24": "3FdxKSM5xYZbSrsW8XXvJGBBzuyuHawPcmzeoWkcfQqaQvuZgE3M6SxkNyuSe6AKHveXnZQoKtbJ2CFrLvh4juKC",
  "key25": "5nD2bsmuqGxZFwsegsjDLZiRSRLnSchdjB2pmzCffbMMMk4JbcQueVgUcvuwaextaD14umy1UWnkRVsQ7F3kRmTi",
  "key26": "5Fg2HDBx9oZStpajUH2bXckmn7YRZh4godGmokY6Xfz8rAbSbK6WEjeLQNCVPx7qUckDN71Yo1jWorgrA4Zsqc9p",
  "key27": "4pDbTDtBSiTj3V6r1bo7oBMBgN2fmWCD6Tqx7raaZtygGdAmsxWd5tu1EzPZU6vZLPawg9e2Z8kVikq4L3yyBkPt",
  "key28": "TU83PAV2nBDgfeK3smYiRVTvr5SbTwV9WLMmModZhz8jQjyP3naiksX5N4EiMBqV587Huv4gemS1mUXsj92jMtq"
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
