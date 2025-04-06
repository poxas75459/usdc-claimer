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
    "rria18io5FiuNooxbRu6vJHXY7ory5g86981yinsMc9qU9MVo6bv6isXrNRYBtZXKzBUEBWGd2ySuZnpuw2dLU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hrWzfqTooxQZ93Wf694VaBo9b4errQKm7gco1VAGbSwijfy64ac9RTPqwiKa4eWfdmB9fgbomdxJU13nB3hroKv",
  "key1": "4TbqjPZS2oNCYsQDGCnFjHkcosVHc5qDSJy9guV9x94y9CGn6cwKhKcpRDYtbMUnejWEgR9RMR76iv38tBXRu3F8",
  "key2": "2uV7xBs1RMkifbaFqQVmBo7ebjnRYsiUgT2MWZUtWxm7s2EeYJHurmFfms7fxQC4gtob27JPzoGjvQscwG5yzvBq",
  "key3": "66T5eymEAPcuaC53WcfgN2zdMHKtsh6fdEd7gUTRzSdMX2n6JH4LPwPzCWhSSYdz27DBfAkRsQfNvD7FfuW9swwP",
  "key4": "3FP7ugFHMWX6wiMRPjwr18FqCVU1QMNWJg1UMHqcaSBVNg5NfkHRz4aqK8HwrYLaQf5T3yAYUDkrxVsYtjYgDejg",
  "key5": "4fpPaoby5X8vMjZ8weVjqahxETXXNofNjvVLvLhxLNHau5VK47u1QcJmTZ3qTumFC4wBQswP23sqs9WHe1MWSLLt",
  "key6": "3EWy3iLkELWwWHZGjdTYy8DEQ3cxAJNqPmo4WnyChoKjLaJWJkJqUdvd5MMvA9FSuqbMm6DUSKKbbfE8WVJT6xnZ",
  "key7": "ZDENGhyj4bYsxvxhD5kAeRM4KQ9wvGnjCWgq9KCUJGR4EBCWWsW3qoykPxsPMAczgEALDaXCEKcyZNLQU1QFHa1",
  "key8": "4nh3CzXKyg1MAM8ZrQrNAxgqbURnnAF7wTg1EcgDcTtqBx5VG7fR6xpXKjFoipeQSGRtPpnvtqSwEw1dC72Tvq3Y",
  "key9": "5RwQb6b26HeXsXigBK2F8aY7gwi4A7BKSgGxJNbwNKd2L1TmhsEnKvgF8b6xspmorERM1K6iqKGrzXzxKsia2KU6",
  "key10": "PPhPb1MJQrPeiU14gHWyEvt13SWtiQc4GQSQ6HtcXnpvu6m8r9etFkaPNhZrjiLxEDPz9XHwqgffsXBV9UStst8",
  "key11": "2S3h8RAwmuaTeibfNarneC4Zqpj7NuF7jQrL6dbJrdNHgKJASqhiKHwaiJ6BWSdsUKsSsJByX6p5RvmXZXg6W4nc",
  "key12": "5aio99UVENK26gmmncRd9Gw1MazhqHY32mxL1xD1VkyiQcdQSLQ2Zb64onc3EBBqGS8sWiDAqivHYmXnFAFNvdgh",
  "key13": "3CAnu6VRNDhN1okakqUNPGEgzQHThgsENTuqDmJ3C7aXNCDSMVsaxqGd9qaLiA9e5SxLwavQVpMkqQJNeCToVHLX",
  "key14": "468NUeCXhQr4jJdQWkLzjx4J4hpPkTUXvNsbjBarSyWgNLRFbG95vcDx87JPTFy4nyfpbWx39uGwPCSwNUeAMfEU",
  "key15": "4GLgZn11VckChGvpPeqZwHpVQVun9azQanb2qEqMWDbNi8KX5v5m8EZjjoRaFvWbQoXbhAY9wRXQhgJtLTJf1rPy",
  "key16": "3FcbMcifoXyGKq9qDXHoaixJANdZQyE8NqAwxv9vNAHTK5uuS8GpdNP2374hwXLKQh26XrGHwHtr32kmRGjFPShT",
  "key17": "4sdcKthPtut76GEbtXrpQ5nLy4csfcNLS9FoYMGYdyum8o5RBWszyjDPKxvHBMA68JUHJMMJq53jmvQx2e5TDgCV",
  "key18": "2NWSFZktXWdMncXxrBN42VthHhgrL1JNN8QVtdS7HJKvtbo4TJeH4AeHhQKgwo1zizBa4smURFpaFHDGRVjqWo2V",
  "key19": "eifGWPZZes5ymTX6NrAkrv5aV1mZ2B97hgZn95xaob7pvQSFZe2XKzJ7d5GUFfubXrTsX5ULjUsKT5hQq74oCQS",
  "key20": "5FaZAxFacYwuRuDqkhhExYd8Rf1e1973BtHkKJLGt67CBY2Gq6cqvZpSNGXeMWiKfgaQQxPjxmbRc1pKgrrmz43t",
  "key21": "28tdCcA6mKCsj9ao9WnV4JzBkfdMVS1obPJyEj9c1wJiAKZ7fTtvjRu48B3G7HdZCweevQGjgSKzCiw3NhwNsbPu",
  "key22": "5mMcocnhBBcQ1LCH3QTmn2hw9vD3ReUk2ZVTgDGrqyVJT8RV9n91Wf3J4R8uBUaMzkVADNWpK9ApqnXLe1T98jxX",
  "key23": "32QMfgyyVCjQDPPWxy5phVVnnyuDcfuqZYdvKyq1Apt5dyfeyLzvrReSeLaaMbbAJHE5ijxXSAn3zq1M5sdetETW",
  "key24": "4JJrnuNDQPFRpW4iFRzLT4oae9uu3GuVitnGJGcJ91CuboomYi5axdoVw2ipQi1YPcZWsDc8GeuduFD6dGbSyvac",
  "key25": "3GcSRrem1r5MpqksZGUqsCmx762EWYF1AJaZBBynTk6uJnqjQC6CZk6W2BKyaL9Z5tkGmeEEpH33HnxYCsjEJ7zM",
  "key26": "5YpmLBSS4ZLq4E7GkCG9AnbiLnZ8ZVM6UfG9iichBxHpTfqrTUbNFvJJxWQ1nWXvv2qnGVLFoxAGGFn2ybS2qvMR",
  "key27": "38EsBiqm4nmXxriEzG9i4aPbWMXTv1u5DmR2HB95A99gu5QZ5M3KF5ok7SN96fQSEhAx5vgdvCQzfdAbfqVBmC5Y",
  "key28": "62Agh1ZRVuUzLSH16nRLhhZzwTo6k6xrRStfCn1VRFXc2B53N3tJN46kYKfZGXHnkG277PcJfudFjfxdydgmDa8h",
  "key29": "afH7HTCXyXLuhomAjQ9m6nc8LH2u3cVv441z7rMZLUyu8SBjxWoANuo77tX5gTYBTNEUSNj83BZyjhoMgHerevs",
  "key30": "4H619wszgJLNS6RuBnyKxZmXoAQ6btThzf4DAsscB25JVaiioaqJcFHVpgw7vrwn8CMkWaGonHqD7ZUPtcPoXEG6",
  "key31": "qMVUResHzFn1cUmU1LKnEKFc3FJRmmFuysYoFMRjk4D2uzEq4NJspmtkSnunk42hPMy9Q53xRAEKjbwM1TZx5Ha",
  "key32": "vGqsNGd1w6t5cuSTnkfhVfNazdbhG6nWH38udKfN6rTfcGuuCDrXU9GguWgn8X8iGUzaNXAQdA51q8fbfctkwpQ",
  "key33": "4xJJDYzr4JB9ph8AwK2Hm57EAMaBo6YEXqThFDdoFUUdSpjAokfCreXfZ67XBY8DZhMmJYpUtV5rKQzzQTrLwHKL"
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
