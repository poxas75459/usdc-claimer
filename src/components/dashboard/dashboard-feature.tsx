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
    "kFw8CJ6TXohf69XodjBFF677fx1AL1HZYTKujVHFN2mAgKCkYDQnhMWeWK7HZwypchMWmmaryVKVGbA73qpBvG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d1ckzojGEt3md6CzQe9yRw6eba2138ibu2N2o1AinSqFop9yCji8G36Fq3JVdZMSAmQ7Gs7v1SZYzrpshBVgeY4",
  "key1": "PyZBBfbLMbbWAGgGYAaJzSeCKy6Z8vFkuRtwug4CCnoBDiwby39iKMNm7eXQaQY4LjRopitbKVDycRYdDgR2N6Q",
  "key2": "276CZr8LgmRoWqjemKB3X8SUCMiz26zDcP6Gm8xKGfNz98kLw9qfk68svojNpfsiyxstp1PB7xEkA2dyMiLeShLT",
  "key3": "1QMDFgma3EAcTuzt2TEvwYa8NVKaM2Di9SGqytcVZ3ewVDeoKh23VEhotCh2BrRY5A4cDw6AvbkPBnknttHvbu8",
  "key4": "5LQFZnHgdybXmJnxHC5ti8EapiFktrToBtksQ9JJDb7Uv75i3X1DqCZhdDq7ouLcBCf3jz3w7MEvxDoAcydnABmK",
  "key5": "3fAPQST8Mb8otbpfrpjUwxC78AbDqDgdikG9vbyJgoQxVsf1gWnFmSdk3QoJhxKtsioYm4FXxPET1HFbr7M71Hdf",
  "key6": "62762wcv5AQ7GYFUvzfmVmWqGv8DiyFfGqgjHCHtt33k2DzhFvsawXHVkcPCQbkjF169yQAtkMo8YRaDH6eJCtGx",
  "key7": "5EyyvGzz9SGRionyJje6BzBgFoudHxCkvCUDRTudbfLq1dQabCKbNzRHJy5bntJtMCN9gtjANNFvFLkcDMbffGAp",
  "key8": "62U6ZDnrxAE9kgoMtK3dBjkEAfuW6xy7t4YvxQuLBkZ2QoziVXxvVx4J26ycGVgBgi7QRQ63roLi8s39FaWksxQH",
  "key9": "4QwW8JCNKW4sC2bw3fs9Dwjj9AndJssX95vERiKtFsdnZot4e6tc8syANV6GG7T4Wr9Ur1j1R96z486Rv4reBEio",
  "key10": "4iH8W6AiYQASHi6EjrYD8pM4HFAymWt1qwqjKZWg45A2GmZCXNyx8FhuyWpxYLKFoZvydLYGfGqmDk2ANDiQgNsj",
  "key11": "3gy5XoSCm7t9Jg24gkFvTEvSsLoYA7rHHg7MhMzZDnbg2zQSDa5e5yDHmb1yjkiUu3VuiDL6U8VZ7gMMiVywwSVx",
  "key12": "3WowWKLbvzgyC2stie3Wt4YPcyUgzGYu1M14c96BA1Ri6F8iDYSxeW33D4rvHYPeBD5Nk1rTHiknLh8xq7YwiHR6",
  "key13": "5U6B8Vo2LSxwfeCoMbTk2zoZNegNxz68y71djHd9d3DArPiDCNMNKJHdkMrqLVDdnifzwcWTeW1hA78YcDpj23tK",
  "key14": "5Z5YcjcvxTUnf4UgJUaPnGuqhqaq8nFy89VaAjU2toPzaixw4h6pjzZ5Q9hcoy33LUWix2Z8k6hG4b4pzfVQFwnJ",
  "key15": "5KcP6iemWdp8juUBbMWh2Hnh1RetxvdBH3Ak55ohBmuDZTuymGfabEuuCv2PMGGKsVz96p2AxFkCMSXEJHYw2igi",
  "key16": "26bk4rfvfskBQXC968ctmachfEzKFXDXZdBiG7a9nGp8reEvPknnLkz11PnuL223KTqZAawJVuPuGerHMTQ6a6Bd",
  "key17": "5hMbmeybemEtzr29LPxzpVTjnZcBYjCzZTbpawjJVZHB3yLF1H3ffnTQ4CpGRBmdgb6RL8kgnTqK7K9KuX546hmA",
  "key18": "51QfRBP633gzQuqjgvENuw8tgV5xRvrcVyVqUApAbFZYe1xv87zY4AKqQCmrdUsGHzJqW2CnCY6arMHdW59oqa6z",
  "key19": "2nt3KkjHJBk6vLEBZTsGtwWavW7gngK8UCvSoc5B5pjv22CESBVQHEBN1SCbMy13P1nninV9Zb3MhvneTh4mDozv",
  "key20": "2HLSXRE5kErPDdDBb4euXZembpVbtCjgHMgAXeEWTVE7BPDdRoniyGv8AxXfm8XrJz4x6fvUnjhL6cvWnFLbeDS6",
  "key21": "3jy7xWR5QY5cnNyg2RGjkJBz1MzoMG1rTBTvA74ZaNzMb4CpyNYVx5AM9JQvjz9BdKkgx2ef4BXCBek41hC93ktF",
  "key22": "5kcSkKFYU77YxHGeV6E3CnbAPzyJBtQZMny2sPD8keS587Yib3K1mPSd4ubxEYzocUd4rpJhgM5w7HGeQkNKGNCd",
  "key23": "3ERirhdQiFX8kK2AqjYiQphpyAr839b9LH9hy8CZzcmmDDuDRdLxZNvjF55eKw1QAXBGJmUyHLNADQzAtSm7PtbC",
  "key24": "4B5hahJ9Hvd4kWZeigyMwo9pDYwGpHhs8fcviceZKHRBaFkfZstAcKwEKTcNoHGsnV9EGJ23S5EBmRCx2Fvy1nnw",
  "key25": "3U3ZmxzPfBoUy7jMQehsnKStSQ1J9JvYcAfrqjxCSotrgf5PpFfXojJNZBEZoNSkzyM5srMK3MVLaT3M5Hr6vMdL",
  "key26": "4faY2HkmtR4ywxAiqJEy4mWcvmYvwAnU4t7XdrAwqRiHDjAdt44G1Fs7maxBLTXr2qXtNDWwaJJ4TmCvx4QXxz9i",
  "key27": "3ituieYZdk89nHYXtFjagEvvo4JcMMuTMYXPMDM3EwdgsmZaq7qrh3ugQe7xwxEPuqmNoV4vzBDFqMFFp4eHjMS6",
  "key28": "5fsHGBC5AbfMbmCRQ73A3kYbs9Ey6NyG3n5NtF2jdzu73EKUR7LNFKyii7RsgtVo7jtMjYjkvpar5fhW2HJMb9cd",
  "key29": "3qferPVZ83mR53W3fHiqD8mbD6haqjzMvwxg4c9vpXskq5LfXvVhKjCUD9eJhGrV6NGNtRi4CLB6hvPoccwKu2rL",
  "key30": "5f3fnhppMGKzwrmi38oyKqoWigu1kLaBeygJh1nwP7JXZ3ERLua68vi7HN22dhxqkAqJtqURv5YSRe3yxpmAiH4u",
  "key31": "4nqYrF9UkV39NptbpaZ9He8GQg86LR9joT5o5tcEgXw9RMXYkhxoZNUASF9zwH1qY5yYzj4gWWKK6dCK7pWHPgqF",
  "key32": "4VrjPZcmD1QJUKqx1fzfmmzVuRALpqapLStP95nqtWMCvE51ixRNy8VpKbkRf4RtdUrgWm6mdZRbLoJYazGCXiri"
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
