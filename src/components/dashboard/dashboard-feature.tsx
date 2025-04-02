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
    "XhFp2EXrfmDvJ5NRhwhmQkx7M54MHfsxNXFsk6s8QSEehqGoZDjU9KX9eBeTzUDcpkfWxKftD895jxBUsfXDr2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "536Gc6egDMPrAZP6mXYdrxhDPF75JUM85UFrvM2eDvyKwUkwK47X9TqZF8BPRr6cqEeqNrJez8JuRsEnC1iXr4fQ",
  "key1": "ysYNwCbSMnNSPP4kF98DMQwXrV1ZTqcdQ2tsp19VPt6g5gaC2FnDynWUP9M8hk33GQ5WZcEM4e3yggsJxivkvbb",
  "key2": "2CYkTggAwienBMzW4vfrcpGWBhinHhX5infaLydWpYxPVHTpLnY9HHtZv1JadVXFXPHTibWsfMNdzBsJzJGrXZnk",
  "key3": "64iw9TTQR28BXfXGuDFsJera8ErdoH7LXTvvg4gAUteRqJqeSe9nXqPbzEcPf7FF1uf335HZVB2uqvWzMrFeb1GR",
  "key4": "2bQATBCEiT66unKygmTKJoyAMZ38kPr7MLAVRsJyWkNiacBQBqsGKe6Vp5DyBiEk6nzVif6iK2yPhxvUv6d1PAw6",
  "key5": "3W4372mw6zyNZtwwgp6XsoGUBKisdoPkkPYMFqhr77KpvYcppxZ14JV3Ux2sxf3gCRSJ6D4jBQpNVnxh8VrngTbp",
  "key6": "2Rx25iuXmhDpjNt49i2EQE6MdeKoucXGiYu4KQv8xm9UeEjaWUK1gFfLEagenE6ftzHHffQ8DZwtJRxNwt3veHrK",
  "key7": "2bD4iBXpUvCyRmiRGVXoMyzboKJXoX8zxscVatd7aVWhHt2BbGQwD5A2Yer7jMPuLaLniWQPhpY3ynTkyUBNTChT",
  "key8": "4WnZRTpD3m5fQz1bchfZ2SJm3bFkyqmgJbEqHqjKV51Wd1h2o6PUWhLn2SGKuDU8TXveJXhvXMLAWjHkgznimCvz",
  "key9": "4UCVYjeVgiCYGWGzonbt5ihyevE6nn9E2WRmwi7fMnv1Z3bYaEU1BTqq6KbWCPnSYXarcmSh5redGeF4jwFpyX34",
  "key10": "4PZrLpDUVnXVVWMDRQqpJoBCDZeyARuGnvp83Dz6RkPu36q81zNirbkZaQUSQktFDvnC6K6WTiUtCR1iVncd4KQ2",
  "key11": "2ra8pHKN9UgX6xhcVxEmaTeKRvSGV9isTv1KX2AAB8Qtk8fpQFPVNJsvTy6NqdW4fcjUSYyif57JND5P4hB1CUpc",
  "key12": "3eFtEpNChu9rNxVEKVSyZXg8g68FT3CminxUGwAR7Ny3gxvUx34Q5QTWofJ7cvMMCuF6bG34poWiTpoY1J2iop9c",
  "key13": "2izTbpzDokmxhiiZraCybVaXwzErT5EZkhfeTsR5Tn46PpVuqLG2TFfmAeXdG9iaFQRnfUKMEzCM7Vaz8jcKULbG",
  "key14": "2GuCVvmkdB9ey9cbYyPe4rDuob6QeRuB275gcLwPCDsLwLunme285NHDq8mc1YGWCQmeqX1Y5Y4H5fh34UB8Ekce",
  "key15": "441tU6xq7uWZhDEgKypffW3R8ZnFgYsU7cG347if1h2Sdcq3DkJupo7B2JNgsoyVDcUbRCfDUaJ429Ru1JvnwUXb",
  "key16": "4jmAE2mSX9mC7EixEM7mJhdvgFJvyu57SZx54DEA1DZT7CykSg2Q6JPeidcbTVeQHYu3hN4MNGgMaVuYhfM6QVzd",
  "key17": "2FszgLG8FSRdDEw4dMLq8UUSTisYji4Ei8MK54YGLXmyZqT1JxJFV2i93rSMiWVTkddLLQwJ3TBCCjPuoDwvJMpa",
  "key18": "5RDwdK7kVE6YJ5AiVbmfvDTHkMtDkJNxjUPghgGinBqBwHhQqQuotxAv3cCNWY6w4Byq7NTRzftQcTZf68ZSrzP6",
  "key19": "3M3N9RAga7a1321bV9v8F8ESQwXE8NgRHGdPKJ1uKMKsaf9f6LF8FpMYH5GoWbaedbN5CJNyMvPYPDHvwW27ZswU",
  "key20": "zpp9qnXqSqTNVUZJG4yDdJVpLptSwSrLLuKe6KUroyuAZgfaxUms6ks2TRdQzCYN2mJHkn5dqpWWGPGaRHimNha",
  "key21": "4GG5VwSFPv8c2Q7CbnXsnMf3H18wGgeuXxBfYsHC3XU6sUEVK7XuUE6YEJTUayuWicnQwGGSVXsX9uw7hcmNkEXw",
  "key22": "58cJk9ZFvbEmdpQEqpT6RE1LZ2Z4rF36aKHzzs8vDcXxTVB7od8vJ85cLgQnZUsVjk3tVwBnpifif6Uzo9LWpWuA",
  "key23": "63YZtyVWVi1VEUBwpxx4hm1ZktPpXLWFksPkf2iaoF3WUqVMBVsMmCz3dtGpmhT6JjiY49YrTuzaemJJ6LMDwLPJ",
  "key24": "HBvwSKoN22RbQvRmA2h5qewmn5Ys2kfuipzzhFWBzo6P4kiGCxd96LNkc4fZCFjyR2wghteA8LP21tYNwMbjgM1",
  "key25": "5p3gd2vndVVCokB52N5JASyHc1YWvDhNHaB6EaT7JdctLaoGjXkfLGZkSG9QJQKMA5THaH8N454cwiCBB83WW6on",
  "key26": "2yfPC8DTuH16MkSZEuMD4pXCTxCEWFDKXS6RENQCsdoWENCxjy8JoTwRFm9XWNf2pMAnAAxib4G5WE3ELZACQTDU",
  "key27": "4765AJWeNXuEHRSkaL6yqeYhzjG4uFVoy4NtdEhvnpBUef842nu7wVoYMYtZUWxuJiUDsNifwH4kajaSvt7uA2vz",
  "key28": "2oK7TG1zazyK3ZYzeYTUHoYqEbtrGcALPxr3kp3qubWYT4BfDKVEYg9zY74T8JBoRoBPLHKk7Yrzcvp5UXRWey86",
  "key29": "5shBaGQshmxWLoVkKeuzeRjF13yShd9Mt6bgAgfU6Tdkss1hFPAhGoEbjucbrFF5q9WXzLv8cRRUg9n5KFcHyrfE",
  "key30": "2D6oJNCCWqghEY1sGyVxyknWQwMWqP141dhjbiLGrPK1FvZakuwdvFsUDg918AyMpBLzNLHr9Ny9J4uVnTKmSrXW",
  "key31": "wDmhxSJZ7gnsU7Gp6iDBwtSJzAj9qH1Nzaw8WUK16DKggeV9hBGWUNUDgWLTqi4VrgWPPJaXUubtpT2iLko1nwj",
  "key32": "5tdU4Tn1PQDMRSUS8sJ5Eyz2NFu6ub7VysZq2QGJCMakzmWHuXK1k6AoMfo6BY7VCBM6VmDbSvCscvpx8vkp8zVA",
  "key33": "2VwAzkpYHMWukVdzzqKnpBYXMNnu7Lg3TeV6ye7JLgywoCKjdgLMq2hxs1NferHJ35ytCBKvnbGytdJXTh5SAdPA",
  "key34": "3efMiDTax7Gx2Z5bCNsngLUinJLzRUy3HZsfN7DbQ84Ej9FwHf4wgqnLd8hafPth6CRDHfUBiiTU9LsAeXfQ3XU8",
  "key35": "5Aj8N2D65yCxt48a12Ey5D1jAuZsyAGZcvpLJZrw1ARUhZajzH5QED3WfB7rPfuiwPPj5Hdf5RWfZJhiXqGgQAwL",
  "key36": "28HDci4aycFhkvHo1aHmVUAGnjn7fP1LV1CpCXneyZvxKybGrmJYdVf1X1q9isPAXtns3ASXtyRjH4RE7X69Lk1P",
  "key37": "2JASkgFKSQFLbcJxQTgfBVeUkbHYiDcQUsNxpAiyUsruNzQUepgUaNjvmM2KCDznQfxnqMGJLBa85nRQ8LtKsHpB",
  "key38": "3NasqthyxnbmnGG7KrcgqRWU4jkuZZepKXL6WKH8SaTmXW1SGNNXd6KZnTEZNEYNciJt5caoSJcvFqtv4zrX3ZDw",
  "key39": "2hKcjgzyPrs6MRQrBmgLjr28Gc3j4UHHwh3aj1magGmyrhkRZtkiRnmZaNKytuMKaWbyXpk77Aka7hnyzdhh4GJg",
  "key40": "3zDsVYn4KDefsYPq3Wr8UfTqTbe9Tt3u2zcSN9HRWfqF3wQ6wDbMJx16q6dEv7dJV4BpL8WPsdAjVgKaxykfvbio",
  "key41": "3cbtvp3wY6ukdTXryv9xifUhLAiYYeCs5UJCh3dsTwzWm794xFAWBn2fBq47rYLevymTPxJPU9quVFAWZFQVYB2w"
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
