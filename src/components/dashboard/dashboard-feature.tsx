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
    "5BmEzD3C1jHxKDFSvZfNdWvA1i3A71JiZNa9SEAbrmmYUuULACTUT8eancQMYFcpKaDQPdP43oAUPhAV5pDomfLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q57V4jc5xGf9eDAP4z42FX9ZfVNEoueuKKbEp8FfZKJicLB4ocpzH6fybveU6J7odUPs2TvLTXCu4zHhX2c9ec1",
  "key1": "2cCH1JFU7orJARyRAQ7XKFAgkxPTtweySwfCynkvpmAkndTRxh5Pp4H7i68ZxWoa35VPeFgEgVx9wtYjvy81bQXb",
  "key2": "4f8ZDjQPFxzTyFRzuazSnbxL7uJULZfHa8qvmVATga3HiR9ff8NnZ3AbcvdCGidVrC6oezBH51bHLRMHYLqhkvd8",
  "key3": "3Rs2uofd1XjZUKHSNqES29ts4yVix1XyZuU1NqxUTWNKvCDvGadfL9qWv331H9pwpUXEk7QkxtjbakVqi4QrQYA3",
  "key4": "4zyxA8cBV1waqcn78AhuNWfyaQ2ZxEDu3K3wRnLhKjMZq1bD99jq8KBe7cpzUtiUDDcNG1MjxjzeD5jzkwZdohgk",
  "key5": "3hjUFdMTKckhXNav5Bq5uUJjAGjoPKTP8KzTBrsWwUvxxCTNPucteLjbMccrccC9D9CDTwmPUvuHgA6KN8w2TxcJ",
  "key6": "ZZFt75ePpN2cdJMCJCePH8wYYk9DS9FWYidcZ6J7A2irCY3GgvWjDDnUi75umVgcJ9Eo55D6cgNMvtToUrZa1MG",
  "key7": "3vo7ftkDXZuCwLn1GxM8YXCg79F8UsG6HyxSmq8bDeLndvsfk5J3ARBdtiuzQBPaCtk83Ni4r7o3d7aiSZuenmKV",
  "key8": "56bWHrxE4xnBnYkTh56XibPKL1PqBgDJexKyB5e1qFzsuAo39rUFEvCERQsKTACu7pLK9YSGH28v2t1LwGXyMbzU",
  "key9": "3hezAtecyLhikk9ZKgNtfdLQdX4zaeE13pw6Gzuw3Z9SVq6FGDmxruXEbsZtBsRPeyA3uzBrUDWU1w9WPH1kzvz4",
  "key10": "2z1ZicUvrn36ewtY4gE3mN4qjEx6TFEQFsSFacLrW7QD1iinJdyHD8Q8DLs4QizkKg5ZZZrZKYPmJpyFz1LCmPQ2",
  "key11": "3CpptBjEjNAjmJsFaWuErk7JhpBZX8yzaj2c1EnPWu2DKqoaBVFLzP41Bcm5aEgV3UkmBAHgTy89X9Eqs4CwYBUd",
  "key12": "UawD6PRkhHdAsQRh6DiU4roQQmiRCF5uRPZc2u9bkyueqafSBNGcuft6XKX1CxX1QXi4pYdbDm1ygShVQY4twMA",
  "key13": "3pG7wwYHKtLaQ8P8DACQGxN6VpcTteX9G8J2euxp7VhECMCktbo4Z9Nri3wYKycHNkxqypFwX61cxgsf7Mj2JGfS",
  "key14": "4BDH7LtjQQcFHrY8abwWUsgQoY74bT9HmMUX8g4SUztiBwh3H5uEkJV4hbKhYDVdUiVKsfSXDtsT4wJZRMPsucQb",
  "key15": "53GHRTr2sKHexX8syEgDrz9LTMqdi4o5SGGCr4GFQycLa96wGgkAstwwykvCqzr4HV7LVgciz7UNzLavL7iZbrW3",
  "key16": "4pbn95w4MdZKQ1yxvynCKtijmTT5Ju9W7mPoKgcLJ3JBx9Hzyr6ifraJRARy3ARPHN52nynVnhoeGQLdVLf5QWTK",
  "key17": "4YLSiBAvrGStS2qyxp6TkRRhR6fHMGTPvkgbDfnE4q7eBCT8TPXQUeUkCKR523mAMgHD8Gm1NkM1qF2u5e6sLUQQ",
  "key18": "2sZi8WUU5EMLWanHZ1vMoTpdZ1Ao5YMYKEcQBvrkMJSZx4ZqL7CnH11jfQZtu4NWXDuyzHBrnsPfetEzCh7h5vDb",
  "key19": "m5mjJNsrTQUvmAPZSj2PEx4q6gtZxJ4Ut3Mky56CqpU7LWx9SuJBVNTCa5GnKBpjxtNpCLd2STM9yv1EyoBR2xx",
  "key20": "5XhjXjehshRojcFXR3e3GCYdkpeTyLS9HCwqhNPLPHBsLEyPGYjUPcSUj65BrSRGaypKAPBQLCRmuJ4tjvwt3Fwr",
  "key21": "QbH4XjFTn5Au49AG5Waa41EEnG59WZmQGgzBgZrtMMJpjZir2rQpMzQug1LewowA1gE4BJ6FiEsY9WpbvNwZaBt",
  "key22": "5BhrKkPdij8TbcdiRq9ADyS6AdPF1HJcfrGH7PBBYBPHXcxD3EZzyySzZyF4AdocVo7LV7Q1U4WzWV1KGHZLrTU4",
  "key23": "5gUbuAqnCeLJ9FhAgsM732eSJhaVnxSxZ6unaeoX9RjgYgtKm1EA7RVHMEKC9ob3EbePipJ9jdgpkRz8t4PAxzs4",
  "key24": "Vf3SnLWdHj76wCh9ZVA1fT1GZDPjHEQjLzo9u3KvMitAeATJK6feepBkrPbdjxRB9HomAe2PcRifXJt9LyGtgLE",
  "key25": "4VporuEuqTSiA14mFdiKKgDPhup5WWqhr2g6YaL5nJsomuZhU2MdHy9a82FeyysUyDoS9uTqmchVB71TupaU1iac",
  "key26": "1iLqzeAkmcF6Gzg3t38ja2Gcajk1f982T4ZqmRSNTmqQKhfVU8g9XdSbpX1HLApDmi3jjNPW9TtdnAYQrb5dYsx",
  "key27": "55wrRmNrbzqhhXNdgHEHT46vZGktVHCtGV51B1qFTprg1B3XMcXyyVxHYsSbUB2CwwoWb9nrhu5amK2rHY7iLcFP",
  "key28": "ygt8QSgJHgf1JQYxcXdKj4m5PeNyua1qeuaD94pYvXudAeerPeD47f7n51kZRXAZQxa77KJqycnevoYCwPG26x7",
  "key29": "3Cok648mF1L6eYn5naP6M4Ya428u4azFWLoNobvq36iMwFAfFaJjtcGgy6yRejeT9RVZQvPdQkBC7f5xt6Q4kDPZ",
  "key30": "34kr7MT1yLvo2Kuk9PBRCEK5zwLkAiHbth4g13CxnwBRae6ufmgX2iRMLPjrySnJBdQ73b8ciQcGn5k6mdmXwRKt",
  "key31": "4QFeTv9QXYcYpbFnBrwjyx21DhchLSMKnn5gacZKoTLu82uFXEhprwABDdz1ek2jeZPWbqkqZoGEMyGTmkg6MzWF",
  "key32": "5QY9zLKed9Ew4AStVhzEA3E9vJaQynARzoC221ns5gB565eyWoBoaF84cz67jN55dHMy1rfCo7Ah8w5AvipbPzy2",
  "key33": "2iYKixcYURr2Ahew6qD6gcVkyJmufREaDeFoNzwVfpe8vd9YCoWGmzSy2Z5zRazgZeqNcCn1hWT8gsiGXPeYKGb",
  "key34": "2npb9f2kgi7Bt9F4Sn1JcSEGZsTR5ZV52LLiZgk2bTfizQtrpH4xKgVVi4ZHyHkpY8KMWFMPE9iZZAZJe4DNrWaa",
  "key35": "3Xd7vZTbByqkyJUJL2svtquci5THnVQdigVrjx59FFT1KWgYMic92KxesFDaimUn4cYMLnMZtrQqP74AvPM1WXnj",
  "key36": "5ijYKhSyCH5sjK2AX5J7obMsh9XU9QvKveUrsbgwLBD6HnmfnC1izD9St1FL1hAmDLjqr4coNgWT8jUo3dX1PqTD",
  "key37": "5hAsqj6j26EUyKjZ2fvyMgHoz4aGENemPck411chhJiHjaMcRSGKPwmX1yABX2ykqaYJg5TPBnzR1bqcMAmNXxD1",
  "key38": "2BsNeMKYFQqXP8BDwZ68yVeNNrb1ej2DCnkTpihNZiZBbKKSY49rgqRNGcKMYr4TcAY1L6hHuMwDrrQqdqQs6CAF",
  "key39": "4C9DumYi6you5dDU7ZMzKmpRyEkMwEmAyGSJ67ZHkVVMuATHNEwN81SR5mGfv3QWeCgc39gng59dwGS4Gf8JUSPN",
  "key40": "5SwFWe2xGy3HVKcaqd8tMGxxggtS3zZ3J4AMtMJDCz1koUpyvRseCZL3FjZTd5YuRKTL2NjfmZiT7vjRHjrA4VJu",
  "key41": "4FdAmFiUQ5NbLQUDhQwBh5tCnd9c5zFcshmYEZcTbyeSRAcoz2356NB5m2YMvbNF6mu8rcYmvttJSuMBWyYprGET",
  "key42": "5cwdMH6u2PWfdkeKWBpcM4c7W3Wexqh1UL9e9qZZCSXgs6Gxh6tACsvzA7gkp7fWb8sKZGH8czU1kwVqd7Yy8oEZ",
  "key43": "4fYs6FCA57ydnrTo6vhSjEC3jsmoJT5Rqak2zxPTrprNYW3YzZn8oz1SegNMQf6SffiopMQcBZdFjbyEhRmmux9w",
  "key44": "2cBfSqgKXdc3n1uYAfeKHvthAYAQeNj8wj4Yj3V5ysyHZRWAECsf4iujeAystDvbhBDZXn3gXBcitmgw9kkiVJZ8",
  "key45": "3coEjwT4dKWFCuhftEhYXQMYww6TQ92PRFJGLvKitfoVu1uhtSXBvpsCaAbS4WdR7hU95Cqfg2GpZYjuqHJtg2WN"
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
