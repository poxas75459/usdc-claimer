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
    "MGobwqDTGYd2eQzcKLEbCWCwU8mjPD521LF3GZxrTom6oeeLJ4TmWtxgXfr19BbYS9RGpWWPxYVK6d9UANyg57b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKJx9qaotQHfMbJwN1T3mY2iwtZ3tJ6W38DKZeRWnXCrq5C3jtmhg2sPMwDg1Pd6pfmyWYrqygMpANQxN1TmLZ",
  "key1": "2q5zvZLUbuRxtJpMKxUTPVJJiVC1PSQayS8ZaTyYfDmA1TbCBzSAAoKKLQ5R5tTb7yGsLKWMLvXzkc2JZfLoyDJS",
  "key2": "HAnD9DSt2iGRW9WyPKQqHC191cK3zQDB2Ls8A7Cd7AmtYbzWh2pobLm4A6fDbtGWfueTJvuuPdfum4LqzcHafaR",
  "key3": "33CxQU2XJrMW6J842z44ZoFJG2ULYANQVFxxjX83fdzN6sHKfw6FHmqWo6QUv72UXg9GoAP5aLo1YywikKsUXuoC",
  "key4": "3WMqoZZNaDHsbfuVjvDjDdFLo7jvoPahLAinHZ9Uop435z8FciDtCVGejEXG7v8MwnJqsDYS11hhmYXodbJgW4gx",
  "key5": "2foFYEvDycHGyD4QrKcQbgowkfW9WLEbpEbWXFjqPrz1fmT1cokivjz3SvCh9uDCXxrNvEgAKjPbaCBc5QxyMCAs",
  "key6": "iEciV9HHx7rBc2PyJaaTsoA7rjJz5UVx4kmWFVgUe5QjkcibwGadBU5n7NEugAPve64RnueGQyYXWvY9Sn3PaoB",
  "key7": "go5j3BUJfY4f28fB3fwMkzUNifFLoFpDSspdjwTMotJkCK2BCjVhFA4wpNVKBM18NpzfZwp2xXKidHa36Q3ByDa",
  "key8": "5rC5HqkWdMgX7yWE1vXZxszXdWh2YpmuqhBsR8QToSua76ywWifLjzES4iwMFT4NXcAGZoCcFYgqsiEKJHagDMJy",
  "key9": "5AD8x38h8YCsMe34smt5V4Sk7q8pfveM2yKhSLD4pMNEe1egVYQzKcTdTf3tK5DJJzfARyEf5pYCSTuPHfBuf6kQ",
  "key10": "2vyqcwQZ5eNfrjcnzo2AD9o1X3vzYRB4npA2ktZaNdMNFdNpDNAY6abrobqwpaZFc37M3s3ffCeWzCxhMCkuiZmN",
  "key11": "ecoFpbekwKGTY97kKpxc8ir7eKmPbh68Qvwun2bUS1GDs2f7MDLQnvj46pF4hCQLjerbJLaGJfSZmT4GqQWsHVJ",
  "key12": "4oSqVzd73NcxeV5d1p7zTebg3kbjCNHTEfVHczRdRfs8dry6FFZGLumXYJoJLQBbf9Tw5iX1iegt7uiXmAhL4uTG",
  "key13": "4XCXW6j5MpZEPV86wURYogKKqpQVm9vesmwYe4LqMVr8ycZA2f4g7wo38wS8jenFLVaEouKm2KbQVvMdBVquR8pU",
  "key14": "51BNgw1Q7P3z3NgvcZvbj3ZPiMF9LJvpP8f7JbvQrYjm4irdhhwvkNpAEWPtD6uK3SduVVEP6vagjKYUt265Vffv",
  "key15": "4MLkjUgMDh8aFzAkMUfQ55Mgm4EZ9DHT6t21o7GkHqRuBG9m7719gmc8aFt74a7F1P2x1pWxW2DGZdPzYtY9NaXn",
  "key16": "59WSKw9D26zXhsJYtsFe7mYTfGhzn2rs8NKfJGcDXiRbj7abp5E2L5JZsxP5y2kgu6W4PK9ANhektfGJkborHn4z",
  "key17": "A981AU9Tc26qP8s1rQApXYYPadxQK85Pr1Aay8NtPeWHGmD4CCTYEDXixU6KHncQ8torNa7mmotu6XfhTmf1vsB",
  "key18": "2EXCvrfUZ2mV74GYxqdBU6GMMxzeJPjdo9Aqh8GT2skNqbtBYGNNF1QMYJ6ZYTie8Za9bMhcrADkdyKmiJsTRsy8",
  "key19": "5djd3yVDLQmyG2z2Jqiit69CMiwqUMPq1wxUKrn462ZMTG1qTWQvdDfL7p5CN6tkWUoGx9MveBb9J8TsyU9ZwctT",
  "key20": "3RvxJBhoqMrZUC3k2TwWwHd9EZDTo8XSLeE6E86e2qQAeWJS9kPG51nWWQZx6tjBB5MBG6Xy31eQm9EMj7CuWRvb",
  "key21": "2wr65dK7igNTVN5LdL76bPpUefJUX7dLirLEuzDYEayExL8UTmEL2BDaqaxtqwf44mBFuvBK9KnToNhJJc2AUV5x",
  "key22": "5HgLrrxr5KVH2eyKkMQDULC8kpah18DAeMp2iYCMUUrKLo5PkaoDH4R7aVfowV2YEosW9JHs33M921qgVnCW6vmS",
  "key23": "3tUERfmQ6aRH1zZvJnCiips3LaMUhSsgoMV3tJwuoBcSZpFNePq5jaSVDU8kxF9SZWYyScXQVuP9ymY9WQ1aMVp1",
  "key24": "J1KJ782RqPQqg8ncNUJL3zVvFKfFcqPuQtiRLZ2MGRSTecA47F4DuXqGqX2jYrvCTEuUonQpG5eiPeQ9xhK3A1k",
  "key25": "5WgmWSrgZk28exK7bJeSYnGefYJ7xkJXEiRk1NLfkYo8EaVPy37J7KF5pjiJU7PJFurmvpjH2ni3Ge5HwVs9n7Vn"
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
