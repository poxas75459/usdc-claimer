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
    "33qffhzuNLMvDegGFesNuwPCJEFvkcm1di2DqhhZDPaqkUSRzh6pWQSz1gQwdXg198yuz7xsbfib9Jyf2PaCgq1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzfJaaotm4hK4uBH4uuR9sp7EsETc7Uezgvm3fZxYSuPhJ3xHLshqQNBcMD1FbzXrwXuecpaPJCvbdArjU5aMMp",
  "key1": "wh1b92fgyXSbEmin8CW924VQqNUoppEqgiv8xjsy5ei2rWNwKi3ufL9AsZ8CZ1G9aTwN7tzuXY3KduqpCKikUup",
  "key2": "2YS3RjDgohnQukbHokbS1eWoyGiNDJZLWAN3iHvwGdGJ69cKMWV4rrP85LxambqDYtMwu5sKZRb2LUhSB2QKHcXS",
  "key3": "2e4DQrvMPPFpnVXovfgBWWTZHv9bu7jjM67bQck79JBPKegWJGrt7qabwkb3wfKXqkUzXy2JJWUeJcVB7trxif9S",
  "key4": "3QBvWnYSVHGtRxgHaUCHYU742z5e3EsqFw33nEAgZnU5oCaHUc2ieBk7YWphvQ2Kxqow7rwQheDv6MbsngktQAr2",
  "key5": "ZTdVxSzw7UDN9dH3QRXoQnxZqVVLn6pqdzsqk8NwYDLS421hz8HJ1Yuj5PKsJMLhEQHGAnECxsYjq99KhJ3CTKh",
  "key6": "3gzzM9NecL2oer2zpSyYeicGALEhaTQmYgmrdz7ioc92oa6GTFLGrHqWRTPeP6R8ForiavPChScu2R9nzRcrjwMz",
  "key7": "2ZdrbjVvfVq4QFxTk9Dw8ExSwaJoW6nNvhFm8U37hG8wWYPkNhv5xBM4fHW3c5nu31xcHyd4NjTRsKMpCkZ8KNdi",
  "key8": "x1RcUbZFMrSUTwcSdfLwoHpD6iL7EpviJvH4ZcGN8Z59zSP2EZDpEtdvryDVViZCEG9TGpDUELTxL9U1bzNAv5U",
  "key9": "4U2hpPFRcss95VEbHjwB549v5YrG6TebYnqmduCxU9V6b3JxqLakxuTJ6xbbHWD5E6xcp5tQkntRPpTNJ1mWv1YJ",
  "key10": "3A65TcmRhLcb94kKrKXjjeEiCbokmnCem8fb9eQqXvzpVeCzxRUQgvsEoLFhpTtuonWsyv12MYMbknbXQXhMbL6a",
  "key11": "22e1hKkM6HPVTuqR72mXqBdyKdtWdFgEgnz9nKh2emBsbrh7YPr1YH4A14cRnvbbuLMrNyhDYSpxAC4XPyXY8cFa",
  "key12": "th7HWRBapfP6UTrm6GopaJsmF6U5mQy6qEV9j2K3rk1ALy1kmN77d6eN2RzdHEjGmMNG3d1jZsX98G4JWVCgiAQ",
  "key13": "26fXzompBthxaqEQidmKYJNq6LSa8tp4GAUiUBGHjHkGWUbPBfCGuotQAfuQtmueUkYzZQ9s2yCMLmDhvGgLS7id",
  "key14": "NhCuazoB2GGNzoQAA6CWKkBswtigqq6FaiSchfKuFZ67jXG8qBi4Dy8GFgL4BVcvjBDqY6UHL7EtxVUDXQQ24LW",
  "key15": "4Kg8enZTe362tHQBQQswmbAKmV5btoiADjWkbt5UhsctNbnekSodYnwZ54CVfKNUBNQ5Z5D1jFt3ZFrXQZQVPCB5",
  "key16": "448waNgU6o2nabSyFuzhRTwmTzX4MYfWKgkxv3oihCs2Ag2qULcttjBRb84iZ3CvZmWyhppdYupL3yNMApGBWqm5",
  "key17": "GHPRgHtkCdJNbjabuevoKkqfE7FkSEZ8AJBSnovBqCqL3RMmkExzUcMQonkwJ82sAUBSBSbNFDakypNQ53CG6c2",
  "key18": "NqsybJUDH5kdBfDD9wXMJrytjzBtwjh8LX4HvxcTrpvzcS22UpT5gTejMXX3BKFqdqJgY2a8Re6X36xXcCyQzsx",
  "key19": "5iqf5WGyUhMrc1APAFmkXYw58Z2NFMg295hdfN2tE73ucow9GfbL1joDAsDE38LSUg9hDx9pekjRxSy7ejxbdg52",
  "key20": "5ghBuDfnBDx6ParxS2XT3EDsZs3o4zeziirMNcQWBsQpUDcU2kpT3jWwR7tyvyWLNWxPzVnnUTDhxbhhVvwRrwFJ",
  "key21": "3Nj7iDAw1YdyxzbcJcgrFMTtZdencwWZkehuPeNAUg8rsgp29qpqu2peDuG4XLhEknDKKBVKBNgj3FfEs6LAqrMD",
  "key22": "41sKkSjvRAGizHumRh9SZBvGCkHrqtUTpbEkt6EDHTRC5RQz3VPZDwQNBrmWc439kYh9SW3Zv39Zw3pmA5LVc19p",
  "key23": "4RNXTWSxX8onTXhSC3rWrDsLfQJpMMkccxV4KFoWe6m1avCpsNSs2uwe9Kd9cqGQenRzy1wE6w9RAWa6hefT1NVZ",
  "key24": "5QPMG16qfmVxTp3a1hzeMKgTjPgeQDv2UwU64cKAYhFMXFg6gE8evQE6Bu6W58SGkwsc8dwBBbdF6enqyEqWjCvM",
  "key25": "3Nz5pAASuAegHfa8DpFgh1CwQiJqHLXak7mhvcEyjntghdXKgWKiLbnM8ZXyi7FPesQ4xWJe5zk1dM5zcwZBFubr",
  "key26": "27EJnTL3wPKDLP1p16t7Hbz2ZW9CxBHZUVxu61BAaQUJKH3yn7gJEUWq8jimkNDS324XCfeY4ZdaYuJk1ik3KmDd",
  "key27": "AawWnYPFAoCsxYpVdNM82pqv2A1aQL7qrapv4zpztkGggGLzTPT9Uk6HpFm9qdkon1Kxnh8yKxGngsPWNoXtajv",
  "key28": "3tJFpK1SRkWkaLHmdQg6FeRXkimE1qvUppH4rvtd5HCrTBiMwXVwJcwTdb9hW4qqHiNzMm2wyR3m7CRHSusMnEBf"
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
