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
    "3yMs1PYM7VWoUVtCeNuHQedoCzJpTfp9Rp7fE25V2kDf5ibbqBrZG5txdsV9s4Nz8iZmUQrExZG96ZpR72kXtVYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvoqpA4Wb5HmtHkos6S731453Kekr1Ert9mFhz2VmL8iTjuoaKQDKTx85NsDrTadM8bvyhbRBUAkf5AQuvi4hmS",
  "key1": "2LRSPaiUDXDi8CHQkcYKkX8vEVtvBDhjiB4CuRvFf4NHEbU4ETNS4FpjW2WJyX1pm6E8K7QTmfc8L4emiB4M2NPD",
  "key2": "62pYr4sDBpm97px2rR4LdP5KsRNbYKebJSv1tfa7BNvUEbCCgN4wDxoNV9AjQDnotikEBeZqtCSPE7MxcEbAsvaU",
  "key3": "3yreHYN8sgJiRtcg78FvnTavEDdirkCc6LYNCK58ychZ9RzjBJeC1Qx427tT7NXoRUyjDhp6bQsz84s8XLB1dtZy",
  "key4": "FQWXMG4J9ongFtFAzBYLEkaU8ao62xjGMrSRUesqmGgzzdzhTLJRq4dbe179fS37Bj8T4RedXq1pmi8CJNLZDqh",
  "key5": "5j4PzTrLLHwypzLkAjczf5gCFzc7QY4XmJw7yEAozHnreksLXazRZJgKz2QbFW194F9QVL9tbvHdRgGGpiqVXKQx",
  "key6": "36wLQvDJ5tyWdHbNajyo8syntpUEoKmwSwfGpUHMnavCnPt3CJDfiWS9ZM1A5UxDsR1RsE49JM42SV3cGV4wVTan",
  "key7": "uW4DUGVBUoYf4aKHRw2SAApSSyN5VWbJnjE5GHJSWYKP59yBVWAznyyyJu7KPJa3NxGGHwzcrnMdm4PuZ1fRiKM",
  "key8": "2czjBWMVR5Vc5bs4vdp9gPRoxcLoQsDBadV1NQrcsXsj8D5AkZi35EAPweng7kTuSqmY3iyhfzVwraZwPAM67rw7",
  "key9": "w44U5JAzJegnrGHD86FA5i4JkwE4257HXFZZXuuDiBBhopqgAbiDistQLiZrrQqgBb3qGi8MDJrUnEvTxkC718h",
  "key10": "3Wxz1T8joW8gMkpZrdW9v6Bg2mCKVdbFahZxhXdNWQsqqzqCTda9wScxF7a4rHNgHh4X1RnJABnExnJ59XsCX6DT",
  "key11": "49xdWUvJMHPx8cDd5Z1z9GfZpYacBgau3ZekK1eYTFYeUTSmZvNuhGQ56yhrgYRm2Pt32VGQMvTyRMq7xzRnGVqp",
  "key12": "wUQvK5Y9afa8Vz1t4hDsE5RHzbq9eRQztd6iud62JDRKAvENitMkHwdYTGWaWoiY52HtkofXJRH9XFzGjhYYVR2",
  "key13": "22EeR8r4r7MdwAW8YMQz6GW2S4q5hqp7faQZQ9cwujRvNd3BrnDgaDmpBtLiRfMnhzPSEwPxh9auL5WiEQmiR3Fu",
  "key14": "5kf8DHQyJ6dofZ5jZCN3Fitj8wi3yi7q9gv4aRuSPPyYgzSZGKi8tGiEyCgMDvAMR1mcZ5DQ9uFMXGbNwaLFALqY",
  "key15": "3SADDkPrYqAsSJ9AzXnvDJyzG1qPwBF5ntRSZQAKvEBNRLmGoUaBtscaKVprsmmnMEWGEQNXdXswj5XCzvbqtTVt",
  "key16": "42KwXbxMsJ1amjZsLwNhEZb353FxXDay1mZn71xkNFqcR2C6LsMHVfkjS6WdCGsKv1DmtWrF25hhYJfwrN3VdHq9",
  "key17": "2kRV2JqJjc21gQmfAZTifNNg74F2iQMnYDMkHEs4Ccn8KhW6enXBRTc9PpxdGrYqubTGiiSVKaTsSFkPd5jdgSRt",
  "key18": "2xFrzvQFbBniWUUaVkS2akc26PmihWEdH3uq3NX4EhDtihrC6cWi4podbjVoR96h87pACVXkYYQcP7sJFmxtF4av",
  "key19": "65LV8to5tbRAVRmKJyzdAijDL3TYd4F7CQi9V3L8sr7wC24LAEXJZfYgPXLfEHnrqHmkrEccRNmP55eTEPiazQUj",
  "key20": "VMfvNiiUmAJRbgYdyQLMRzCygHTYCrJofYc8ok3Ft7RREQNHVnivTyjYCTSj3aB1B2E9xjdDnqnKT9fFmvt2iZw",
  "key21": "4ZV3H6zDV6xQzDZD6TSqKAhND23Vrca8Jpp6B6wJygnxkQXZPAKSzwur4YHC86Lw1AxiZbgjts2M5yQjTMzoDufb",
  "key22": "HYhbC538VWHFgjQkVawUK9dw79QD7WF9P5TtJyQWv4XyhaTFUi4GeYuSoFcbwkdwdaJVvAM7VUYLnPDmpvJc4Wc",
  "key23": "5T5b7rjhYLSAZ7DL2YsNZvqptvKSYmeLKSHztYyAYZHqeEAo2DP9TGqNivkVv64CmCMyRUdeATTYDGvj6224fd24",
  "key24": "2oLfYQho9a6syCszbT5SQ7nbfCwdepjDRmEr4FfE6HnsEpMsHt8sLX5d7NkdSK2WHCGG3zM6Fkf9omouJGd5kLjx"
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
