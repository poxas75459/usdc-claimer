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
    "4cK9LPYhfNvtSdVkiXUqyt9YzmU9w2L79YS5eEkVGqz8VHhyjfDcRAyBCEbh2qYXTNLAdUobx45o8XnnzaxNwHoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEikF7dttg84p5uMf4hcnWsnrBHkJETjhVNCSsLFsboZhc5tqLGw53vTYHn9RcTuukB7e67Xd3PTG5TrZ2wMHSq",
  "key1": "WsyKDSZShrKrToueQEsAbigseeipvNxMQXQohzddYzo6hc1sEGbbcSGhM8ohmDJuhcpZkPey3EExDBdNAJL2Wzu",
  "key2": "4XocYe9vxmhUqMnZ6zuGiYXGcnPkfhhs1bjGQeYVWxsRRuhsAbA95yv6cGa6pBoQfrHx2QejHKZuyzzfDv5L3nnW",
  "key3": "4ThZtbGoQ973RxeXQbRE4E2Gj7RuDXd6tn5ywZdSGYfMKCb62UKrp6SWajCRGLzvuy2STxUYdS88WGcLBUZgXxGL",
  "key4": "yEJ9bq53UNCjaQGfkUL5aj85CyVxHyTNi68cD7A6bjKEVZ31rxfWUupk8b8igJUhp7LDrZGA3toi64R3pDwJYNL",
  "key5": "67mLP5Kr5ntNUo4YrSrCbEn43noPYtvs9QjdKYVjPEYKu4ktRGjhmC56N7DWwke7XGAEb2ny584ytUSuHaLNg7bk",
  "key6": "4p557ZnzsdUkSb1oEpQ13WqRpBKa1jWd8DzcbH5VLYj36TDiv7QrJFyWvZBNmsXdgf4ZxyzFJDpyZK4PVSYTBS7P",
  "key7": "3TQQ9nAbPEQeN6Cq2c8ttSQFYyr58NHJGC6GKp55JgvwL7R9nKTg9WiyNqnrJ9Nbmhcxsqv86GA1jnSzLXQHsqJK",
  "key8": "j7LfTSgUb4APTCMxRXYguSuwWRtK5nPdKy9QA6BYwR7w6UgWuHHcCDFL2c7Shw62tsuMsvCtsrvnajJYuTKkyDB",
  "key9": "49ULJdWi5L4PjUKBanm9VH5C9My3mk64F7Mv7JWGReH6BUjrUvTNCb7F29g6BaqCvBc6DZFjbsyEV1ptdJpBh92a",
  "key10": "4qnZCf9pwEUryceXL9HHtvabgCUjoE7PPW5vVjSvjTBHqH62Fs3F3PCBw8JEqiqnA8vnNZiu5NpzAEjz9kVKZiDu",
  "key11": "2umVhityC7wLVrnPDMDbLzfVL3AVTVfrMxU8z3yqxRsNNBPGk4aSA5UAXNGpEhyvWaErmVPP6PNkYjXDDAZh8GxP",
  "key12": "26SD7AsAhdzZBWWftAUWZ6VzcwnMpeKoyGqWVZEV7AT5yfdiCquAEHFFMbcf7m3fAmzRABkkMq26CDTvoSGaLVUn",
  "key13": "5rWbCydb9ryvSSnEv3vjeEe6ffNY7nYFrHHzU8t4FB865M585YWdbRU2QDWsE9wQ6mxoD2VoXakPDAN9u59hZJAX",
  "key14": "3hj7tgKPLRH1VDjEhtJaBqbFd1qXZMgvkLi1PEtDy18ieNizcWwVFC5MuMwqJFSfxtRDrZVWrZPe8DzWjaHbEBVE",
  "key15": "CUV7pH5dAPjG5XM2U9CUKihDAa7T5FhZnPSkp8RRkrAcE2a2Uk3TkUgzS5yvRFTLWN1qdrKDZubgtWimEtVP1ni",
  "key16": "3WMhg5ubyFcYgXnPNWo6KABsJ8wDMxHRQ2pAuD1FaEi7NvL1dw6CvUqVUMwNVhNKSeksd6agRSEwkHt4SvaJjVa1",
  "key17": "31shdjfRUg8kS1Ftejq3qBR2Eh9UYGPkDkVLSr4uMMVfLfs3yZhmrS66ajizZmypY61vqFkLuDKGRnsGbDct1Xme",
  "key18": "4DZtCQbhfSGuNZ36k8nTydyR6Qi8TrhFatZ7k9dBBycQ69j48XKk8rNdon5tHjnUjEjqy7QXTkmFJzD6XccNDA75",
  "key19": "2qkoUjWXR5E3QuXjJxc299sCHbqeTbFQ3HkjbjAGBNaTGE1YocYrVzx58mDQd9A6CmmAv8LU2mPwFFcn8DhtVFuH",
  "key20": "4KnBYFvBLy1HdMy7runFfmSwPPmv74Z8myAZEJa7oPMJD37gEReXWdj4KdkPn2QRwoa6epZWrqkehk2xKkMiKSDX",
  "key21": "3dn5ebNPwFVohKi6s7Sucir5MpX2yKiMPKBTUmA6KbLxQejxfZXgugT55XdWy3uvzFMg3SfYUkUSPGyimRdYC3tf",
  "key22": "31e6VDWKxvHfbjx15id9mMh58YXv2dgSSMUB6wtq1xLXaCSvvjPwcXmNivCcbFoAB5q5ipihg7xqypGAusfEyxb7",
  "key23": "5DbBT1EX7iBcLMzGq6BADkUbU4DcrqgYQdAxVZeGBLqxcMweYLe6ddHtRTLmJnjLhg3C2eAmEnmFW1wCMVrgaZqM",
  "key24": "WvkNkDqvBK7bmA6qJTbHy4z5uub4UZEeXS3KQzsM962k3EpHKhjNCdLJQLiTqnVrMmtidtB9qat7fLfjjAFr94k",
  "key25": "3J2F12hjsBzkPyXiznkiDKq5yAy1oj2Bs6kRsPQ1z2p6d18y3q8HZbejJ1Gc13APkJU82VcscgbGhdenYpgxoynV",
  "key26": "43qZ4bTC67e1qLGvqXHWr5ithMFPdFU2aqrYsXjbyZf4rcfdfr3hb4LS1ZpT8k6CgNar7wXTmsZzk6GSbc21Xzhs",
  "key27": "3rcdjYeDzPwRdqnVPQumPVoahz1hG3gLjduLf9QDJ3b7tkexEAbC4zsR1MpyC2L6cwEA8sjxatB9PNTkkRpYZUwu",
  "key28": "5jfb1NmQY1NeaQjLkHbbmFjumLpxhbaRWLMHCzRyKLs9pPR98J3YWULSwrTSV8h7XHZfoPokYiGQxjxNxVDs2oGP",
  "key29": "4EsSNJQdupLfDMtAf2ZjxcLob61mXCNXSpjHdgy7WpMxD8MYa83xC19qseBqK7yy5cZGuQwXmoKo2EXsghSFgHHP",
  "key30": "2fEH44fwmtubqXhxai59AqHAnqkphEpt3u4bspJAgn6p4v1vVdBPj1VTveWXNMyTvN9yhxJpYY4GBjtgfF3FwiEQ",
  "key31": "3gNofDtNg8RQhaHwbTvka8QYGm8iqNt7Q8QKG26SBEb37LxY185YRJwbDq3vLShfLThxTN7vLrFLLgbGUuyD2VaM",
  "key32": "47yxzPGYcNJJ8QAYrV2WJyVdky2fKTCXkAd2uW6aMGi6bkBb5VmrtyEosy39XD2SJPjhgM6G6URQ1tWViSVwUJWN",
  "key33": "2hfSvkC2FQAJje2whoMxJrgA2VDpBKk4n3tr9NkVRhK8AoV1yRosENx9qdQVEk7Hapwb4CYVEpe3aCsWFpcHCbNe",
  "key34": "3vihTWHJVqC6stZi6e8ZUcRqtA1JhwoyofgwHenhpvqbc6UNB5wQF19dt6iEZVWCBJHU4vVhuGFq9Dt2XxRQHRqv",
  "key35": "52FRmCtMrmJVFvJPTHWLdSa77rd15mtiN121Hm3ejxuxyR5S8ubNY3zSsw95SdaWdVU1TuQwGom9A8Ha7ZTpGdc7",
  "key36": "4vuiLiEZZHRbLc3Ap6bWTqAxJyJruYPvtn18osBztcJfnvjsn67fLogjcfJMwne2FbzcarsUpQ3SHXp9GkXENxXw",
  "key37": "4f2gQWFeLHCE42v5FcuWeo4rt7aJbY3xk6e9K4PDfr1azssMxhGzaA9yuJEb69iHFCck9M3Ft8aVdjtTzfESiFS6",
  "key38": "4YYdZndD5nRBhdNysPZvTfedHa93J91K68mejiTy5Fdr9hhAZ4oCFWEQH7fAUPjRtiwNeJGZt525FhBvLArMJkaN",
  "key39": "hkbgU6zAPTHCCAcsgN1av6XfUFqZ456AfffTHcCciXNz9nYL7vPDrFH2WoKHowH5tS4FCjAtA4GtirWkJyGsWVZ",
  "key40": "4vNfK9HgiXRsLtW83csi89kutkXYfdhi3FpuxGJgQ4b96YsqpGTJBob4hqa1tXZS9E68XocX2N4WPHRZrJm3Vakr",
  "key41": "3Uvg9yAvw7oXaxQpupDAhqUY3HNaCR6fpGCeMwg1qWbG7qkWt6x1wvs7XnAqLUnB4WPpdHpBuhF7AKvRKoVGo7SV",
  "key42": "3Unc16J6RhS3m4qweMfLon5jZSwL1Rw8SACSRQsyUwt3LvrzhexceQ9ebUaHSbtD5qW8iJJstWitPKEk4ARaspEK",
  "key43": "3o8pvQ3tsfp1gCBQhJDaWxgpAAHExUAgsDXKXqydwTPN1JCjt7yHtAEwxA29zHAhPoy3xQnupGd1mEZPWLUPbP1M",
  "key44": "4eBE2f5LLHYyzTLSb54wRZpgzhczf8MSVwFmoeuPGgAwW5mbLDXTjU87AT3ogwfmXj2faqwJ1VBqjYK9imxBsfdy",
  "key45": "5weRvkmN8DHqQE2etFTsLEb4CmZEnxkbfDeZydLTvJcUKdoWjpAAzpHXy2gdVnkiBE1TrH76msk8aU7s5ekASMjv",
  "key46": "6dbogP5XtdXw9HpSAvsR82kysTdpCqAEWaNvTaK4axuiJK4WUvG1tczUzSUZCtci74q7SC78zaLpPxEnrruJVv9",
  "key47": "2kkLw5bQJh1Uy33dp8TM45sfCpbb7qHmm9wJGVeuqS6qWw8eeG62bQ5uo3N7s9X37GnJXRcr5nXYpSM4eMkiis7w",
  "key48": "3h3Y1DdQt2iYikqNzxU3WFLd2zPC9DwaBRptVgKY2Ve86VDAAqsCbrg1sJdLiagXE8WcMB5FNV9iH6GNt7b8GQmh"
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
