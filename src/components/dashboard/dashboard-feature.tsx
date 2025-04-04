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
    "2hfLpsmGQnSgtZKwMeNHUxYvwLxFTR4BazfeLDAoVYPGhboYZrfch2jWiWhrCBHxM7ksafUJ64xt3zsiPV6N7B6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHVvBogVruFe1fpSQBJwwjKgRD31ieM3p19ZVuQSa3xerv9dDFiZoWB2fqkrBSfn8yZ4LYuVBgXPojYDbEgiv3G",
  "key1": "3R6oHEeR59CQ62fqtf1veGxYFSKSUVQSBb2xVmsjYuhDe1JEBcRhT6VjeANbyxnmU4hSjww4UNR7wz2pk2kpx7Xt",
  "key2": "2T1KRsQK7Rvi5vhaUYByvzrxRKEfC55aSV5oCQTZ8y6y1D1ca1ud5NucpHRcPL3KQZ5NSvPJFfAM5wR5GYHmSYhV",
  "key3": "5Qrhw7Mfk4aEqVHmtSrSKU4a78oxT2THFLPDnzJNxJCCEp9FDL1vRLhiv4KYMZyTvSG2mKgX9KhkUCvhUNSBDg3i",
  "key4": "B8q8XFdTj2Ab1zeVBUeTf7Ai2LyAHV7KyUXV3KY2W6AanYcPBobLH78ia9G9CgKHySaSwhmXRnZQYffYdzwNNJo",
  "key5": "he5HYsL5b6XpAvJ6RmZzXQpEV8ceGEiBNV26Z8Zz1Ww48fL1Yjp7xvF93CVVqccWoeBw2Eew9cxyiQUmiGdNmp8",
  "key6": "2tmm3DMo21UAvW6xrE21JriicyxwkdWBS6i7eaj5aoQpSXLxVbtxUQ7zAfDnvWJ7Hjdcz4jkMmDt6XqrsxV2aksW",
  "key7": "27XFWp7qV8NxSG4KsxHPCqFQsMD7HQDKD9uiKaqL9X8uVTbmyn1toiNkNMMQq29frrdziXpfjiBtsEMeRJd12VXC",
  "key8": "4YKc8rcsHnN96FfKSM3eevszsxb14jqaM1njuXoDwoZTjCEVfvMk2szPn3i9qCehTio1jTCyNDP8AbKKRvw5GYGx",
  "key9": "5isit9DjthU6Wk2MeT4ihGC8UKZgoaxQG1JP6StuknpqFFhrmk1ppyCFNTxQXn9d69HyJpDDJur7qGg52EdpQQrq",
  "key10": "b7c8eaVJKLRTGmGxFB6tkKYPUeXymDaHgfiA6SmwrcKRDsu7VDhxNdoizGF8UQG89Vf3ncZKN9demPfFZVqy4fb",
  "key11": "9nHZzjpDLKEE4foqatiDrP42caDEf5zx5nHi2M8xsibSB9C5psXrMmCBge7pthMFwzQoNhF4SewCriQqNDoupQZ",
  "key12": "4FTLVq8dGTbZWsqp6Yhm4DpBzRUGKhrALZD1wR1d7z93677YFVwTaoUdBto2Ro6UGGzi7uompLu2KKKfiUtTfzvk",
  "key13": "5nEbmPy5UAVxK83cpcsLaULXAoZeRm1PqD4Q7hR4w9Xfnb6PRGwyVHkXMXLC1hEqKSzCoYERUFTF7ZA9GGFCMpE5",
  "key14": "569qcqt3RauFp9k8YERzj2PUyHPtTkkTn2FZ6k8hLqqKSZUDytMVQoAhxScGeYVSVuCbH5BgpKteEjPxsL38TRs6",
  "key15": "61SScMR7Vq3kNE3E7BbuVtQLmKHdfYYrZwiLFQPWTkLHcCFidPMfAEAYr8ZavJsNvkhjFzzyE9Q3QGRAAu1iHCpR",
  "key16": "vvVEgozRhkzNYV5Bf48iaroEoo1AuYcMKfqkAYzLJwFEHC4QMdkoGkwE1e7qjbE6pbx7QtPJgLWXCRARgoZFw2x",
  "key17": "3arTCiRfXEvK5LUe7b5MbJN8wpoV3vcPyp96SbFC9Q6K3RBts2R9pTQw7bFmAgSeqtnPrfcoZDgN3CKPu7jG28ka",
  "key18": "52SoPXTbqJjUkiQ8bCzwocFYUiQ4sHwnf4BWqocw53gBnqXuap4FFkBxHXJxxjtcbAJZnnwMfWsa3EETkUatSUiu",
  "key19": "2RSw1qFJWusJYANE7FWDRrkVsHnWeNcCN13ydkTuPiSNAZLLYHBSMfHp1PgmV3PREPTzVKkCRmbdwfBQGkrZjRFS",
  "key20": "2jQ3LG8t6UTPoB951bLbxVTB7SZAznwBpnX3sd3h7k9CNmUchV3FMHXXhMn98pK6fVe3ScN3ks62m15VbkKa4YHH",
  "key21": "2MpUvJdr4TptV9x8XGL8TdFwBV2oEEUk9bXZVLE7XuvzvHpbnsRfo6oJAtw3MM3dhcNvoMRFKdPVBu53FkF5drPJ",
  "key22": "4N7ErnpA5HGmqZ6CHaxGzNgqATRrjgajhhCVBRo1dgjQCngvjsccf6F8zPLYVjX5oPaAYzuhtcUmkmSExiDRN5qi",
  "key23": "5uLwL8w2Hi7mKCKBoWSQ3SFCX8aeqJQrvxZRstQhoHeypnX7gmo6LjJAEmAGgVy2iN3qTU4KBNTYgMsd8g55t4Mq",
  "key24": "mS6EgUwUoLvShQpqxby5VnHgNX6oEUSU8RrAS6xzBGfhxsEccmNCGNUJZVME3qD6bWHpuNuESeZP1uVzAdpFFnF",
  "key25": "2in5CTLN52rBxYd4Azykc2Qr1guaAFVkDz7sGgD9352ppEETydLwG4hYbwXEUC3EQdMB9Qpog6FTC4aaCVURVuh3",
  "key26": "64MRAMxXxKnniJ4qm1dRkp5unq9V9VmyYSUjdEpAWFQGrA7uv2yaTtAxMYKnSKhEMoCd1X9bJAcVzFkQNrQHGhwc",
  "key27": "5SKRApygG2Yk6XZv6zFqX51NpviegKXtdPBPdGG8ozFdKVTMNe5LyikULLZrviaYjV6zBstGasjktgrqZ6fENdp4",
  "key28": "3Tn9etxbL7CxsFQsqyqbkuHqqa9WgaXp7hAKebK9L6AuBkEA7mHykogUJQ6SxL7CjvKPHt2ieWLc8Ujap4fyme1z",
  "key29": "46AKtAZkeGUmfiTHY8bUVe7pcub4afxQuNhyXTgNj8ukHVXSiP1ZVvBVY7saiCN49p6adsVLMUWHLL4sCGzRMkSz",
  "key30": "66XRgZLDwwEGjX6DL5D1YxL4vaan61tfi7QkbjrFiEJyqvaYsxfP5id76fzQw4SMMnKBnz4jn3i6fhZFC7P8N8cQ",
  "key31": "4KtiCyTiQipftpTbRbu5i1NwkeSANyFCh3G3MxRvp2WFpjtnYhFRMbnfWqFpb1vuHDVGzPhYLh549mD7K32LVZF6",
  "key32": "5vPgmvegkDCqGghshQ765QHN8UDYoydHK89c62LfknE32ZR2k9F3qvC9W5TRLZv2ZSdZHAgiyz4Xrb33WahFaj7X",
  "key33": "GZasVvpRTwMEbUzoVoTpa6rjurhb2pnHZEPnTjnZm9Cbko9rTiXcYLqshCJ1yZMZQbsS3TwdyCF6ZD9G2dJU755",
  "key34": "3vNG57BT3RZSUrcjtN7uqrKWWLgg2mf1QwQmXEL6qN1V3fqgXknPLMSGKEHgpsicipDEp4kSVubFEjYdwDmHVdYg",
  "key35": "232QCt2QTyriffkK1eSKeWyoYVQTHtya8SmxWKnnxcsC4KL2a7rDzE5Cs3rdGNAuRvGQ7SyhEnetkLLYZSG8novW",
  "key36": "2hYVeqCXtV2AErcWnZBR1aKYKfLDXS3Y4E9PcxKP8XhWcrN9rFXFLig5xVB52WbohijcyKPhVrvq1u7xwTkMwEA3",
  "key37": "5dstncBEEBPTBquej39CvmCPngapFYnz2yvqMHbpLWjLqd9FqTVjn85KtwAoiCHFeE4XpcdWM8YwuFCA8qx2inHv",
  "key38": "4242v6Du1TzDFdFXtFCgjmVb3xkitqiwxq3TyXuHTXg9pFkGjCw9CpyUyivNh9iCPHE74BcbCWdsSYKjAcPL1zz4",
  "key39": "1sNKHMuSMCLxdHStqqMpnEExQLBsd1sfyXuGxiT3GFuUtqvaRBxe4wWa5oQtmzYM6jF1X1TiBGAQpoxYPU7b6Kq",
  "key40": "4Rk8yV9pwEcQm91WnCxC9c5mhxfiAKuyiMeSmWwHk5L2Nce49st8jQg2iLvXFcj9pfgXtsM2rvTUKpQ8bmcEjGz",
  "key41": "2sQBG5unbrNXYKPYd1ThqpJQddF5CQDowvqxvrqHwJfnRcjRF87dFAsTT89hcuTqs7sGG6RXHgRHEWbn3xd5B9TY",
  "key42": "2eiBXgYdPv1PX7HE2SFA1h6sPTWrXGs142cDHA2WMh2j1JSBmaqPjodesTkEy6HhZVmCDJNzQSLA22oHsYd1Kbud"
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
