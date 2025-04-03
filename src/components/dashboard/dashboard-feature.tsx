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
    "5NCGKn5R9LH2VAyUBMZ6GUrLrZdGNuRP1LyZ9ztmvJUT2b5VaH6pymj7doR57W5Qnt5mc1mbyQ4KGEiyUc3M2m2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAdBkkgmjNvprFNs5E4ziULV4QPKSzqmSFMsdzcgdPZ2ishAYp8tff5J5LVpLj6VUtfiMg3vDanieGjg1Zoy9vN",
  "key1": "5fq8hbdkKGrjmSRRySmab2VhEAW8ahZzQoVfaN5XxuNFCpC9x44KPTdS2jMje2PTuf4vBXuo6cdeeV11fxg7VdC6",
  "key2": "5ntvuQipBr8EfLHA7ZFXfE6cG5MQgxN2Mo5z3b5ceYt8oBAsxtJD4iBPH7EFCeYNtW2yXM2DmTr1Djthogg5Ky3A",
  "key3": "2CJZ588cvQQfY1RYsQVRuEWc2b58yoEgxSYZvV9YyzCFHkgvJqV7xYgjwuQCb4XSnSonojjhGeUqTDgfTk7rJgSZ",
  "key4": "4x1U98GW2nTE6U8egC42Gjg9NREQ62r3Y8UMtoJiAQxsmiKK1ywVcJbnA5hNkuh7zZLa96zXuTFYiTQ5FUCemq4t",
  "key5": "35Bb8qaSXyHC8mTdtVRJCyZZEqsUb7U6Jgh4k2vYLorXyiP2ADzfXjiA66W7rXXZ7p8YCq2HJnY11wUdd6oFpyV7",
  "key6": "3eX3h26oyMAdpPZGQXG5ECR5CmKoGTkmCRAyEfZyRxZ9AWgz7aCihCXTWZTtX7htfVTEfety5DucbmB5XDFrL9Rw",
  "key7": "cyrWZL4U6SbxLByPA7feuUYevYbMVoEXaH1Pa4oBHi2wwCM5UCuefccgCEmEztsPE1DJi5yyZ3cJE992VNbuMug",
  "key8": "2pc8a47ddEg1vW6XyKi5wHNaWhynk8pUyTPCfZpnWP9eAZZ4WgVKriCq99EJKTUL6rZNUPy4CiGqzVeqtqSB8Vvo",
  "key9": "5uzCwHkRXxEaq5eknjc2VjgWWA96YFKpot57x4AxyBUX7wM7B45jeQ9XqS4qKRHwcASAdueCx9nnnFukCciUXiLe",
  "key10": "4xU4U3kFzh7QwLyW8UFFBBVnGe54tj7wctbLQQnUwW31vjwiacgQnFqyLL8w4bEoHPA3a1n8HL5fG1B74GmtaKB5",
  "key11": "2EcXAxCDj7hu1QwxVy97RyH5GiubysVhiRr73xXQA41poXd6Vw9RinaANuenWUAPMJpVjSM4fTtAoNMBS5mJK6eN",
  "key12": "3Cyce2PQpiA5cFBSZg2mUmRDCi6HQXpynhgbNctwKScycMhkbGtUx2gDsvUQq8R2bMuBZ256zFRtU2udpSYhjGrj",
  "key13": "5T5kp8K2fxa9smxe737UNNkrhqdYQ9QtT348juwLHhWEiHwMHNmTzH7jcdBad4Cg7rGKtUMG9TkV4ABivhoDZiFj",
  "key14": "3kbQSsn7uSKQk8qUsxSTySxDoroV7hT2XGkbrdyzywBpscU8tdzgo3Z2Bow4Qow9YsBX1fpJcwBTFmtPwJVFM7BL",
  "key15": "MKLVoMq3XThtx2LymkpDEVautvuUUFGRwon9aKTRjp2NPkWpRVKPS7DBDMDRU71z4Rsb6sPdmzuoUkW8Wf13a9T",
  "key16": "3ANY2MF1TS3v7XqHWDDzMFUx7KhzwB5tXD6xH15qHkTri5we7DkrNJjxnJyqXoHqmTX5FSMUW4jbAPNop9y7SKWs",
  "key17": "wrz83DpJ9Wk1s1Ya5Nf3WK5ZNX7ubFXh3GJPZ9pvHoDbjmxMX32SVB663chDw4paj4m4ziieWdji9jHmrYk6tju",
  "key18": "Cdnr921HX8UgQgG1xs8kvzRm8TAUeEgUgLhYhWpBz2VgpedY3Deqhp2hcFu7a4gZa2b9mKuNsEKTrdumXw69fQz",
  "key19": "3LfyjvNuQh5AxxD4BR4bY67kuG621vzgFFSwUrkyvX8Qpi6fCrCcLyuoBtAibPwdni88vs3gnvypJBefzxzQZpGD",
  "key20": "2K89NJ56CehjA4P3c1rbhs1duyoA9xMyGq1yzmFb3aKa3cYjsDvykHg8jxLXafZjrCFe8BhU1hEBWt1V3Cqezdch",
  "key21": "3d3A2tkUG6F1w5os11T3LoFRAZbUEfrL7aPrCjWnw1CSTCBtvik936KBWzP48qCMMsXY988433H5oKEGvBGnDB9M",
  "key22": "4G9iupnbQWqcp73SG1sJMg2zvampyh6GhZjL14csZQDczzcWgsUX9No9smbPtz5khkvfZuEDE3oug8i6LDr1WVMM",
  "key23": "3EQaspEc1GLJut2HriXy4ZawZDdYg4Q3nrBVyuDk4o2ZR2w7K2Gx2ZqxtLCK1Nkc4xvB8JwctnjzaTvrSPKP3VXk",
  "key24": "5SkvXuNoWyqJ9m3SzSfJ4Gas254cErUtcrc5kxpinj76RtaBU5cmE5cyk6v65MJshf8RKmT6wBZm6H1EraFaNTt7",
  "key25": "3cjpdPbbNG4VoRF9DDGSg5MYZjVUJQSSfTCY9FkBKALYYUfkbHa5guQsnUwJx5N7EUw8QYFq3YzqmQVuusB9tcao",
  "key26": "4TGnoStcpZtpNqRy3vSFrS4VcDNwHdJxBq5H9QgniHiktKaz4UxkYUhWhG745kkbajsNMZaLn35kVVAmBi6y2FQy",
  "key27": "KScyivDHXeY4TZqkqHdurKxbrhrAbxAQDshec8b9RGMCw8eWRGHDsLdhtqXkbFyBeFJbnJnfzs6Vmwe3bv3neDR",
  "key28": "67FKQvEPYzH9ciRPaGRoTdvfCDWtFit3eJa59FxW4Wag9vghUkFzr2AZTNrWMdm6e99xGSasQceEuyGtx2jDVrSN",
  "key29": "2LhxRBqjCDHkg2YGxCPg52fX4hDGPiUiw3uJVekfjFiQGTMNYyojBQ1E2GGv5GGyTnBY5T78PK1MuXkPN7oqEcQV",
  "key30": "Msmmir4pZp4v7UsmQW1L2HGYB3FZ4DQHVeng5LcfJer1zDBztosRpwaRBcqhv7G1zY4BH883bVwXB1hd6MSjb9P",
  "key31": "2Dyy4S7q3UiL4TJ8Akdmj5Jvz7Cv32pKmexwqWJfr1f7SrTkjNqZSEdARFFErpPMHTpGSUNY783u6QcGhv4hfNJp",
  "key32": "4kwP2xYKFWCtdjHWiKyG4WFDZPV3612MZ8CzChzDj3KrabCAEKTmqEr9t3oUxB7rsJCNyHZSNUe4aDbE2Q7yobAB",
  "key33": "5rFkbjhUrPnErpcHjekwk7gH1tRambNtxgJD5F1FLLXBtAXFP8Z1vsdEUdWMbmH8FaqjZMdFJrPd63comGbrPoaC",
  "key34": "2GEnKA4FpMBtzTJtZgdYLnYGsEPHGHCBGZGD8QvtexYvtbtmU5ffMZB9hzgBri7zskTozk4Dx8RGSCZ64iY2oGUC",
  "key35": "7gthThQexCrgivoiLzqMJZYXR2xAYM1sXU5pLEKqMgRfh2YtRvEXY9583rspJvzsH2RXQ7Lk6sycn2UCoMZzoxp",
  "key36": "61oG7izQABmi97GcMZZ6oRoX2nT6RjnmovEhPftnhH1VtA8uigT2SZbouyenFEBNSzkbVc9Qw3xvWMvkRu8npnXY",
  "key37": "2RDAeSzxYEvEMkkm3nKVznYD7W1JG1Gab1cDvX5dZS9vc8ckMnWc1pCwF6CYkYARCjpdyT9XoTnBcvkyTHPygviG",
  "key38": "3eoFziTqQFbwDvLVeAFC72JVsWgtxrq7ayc87wUwzKGvrq8Q8ZgL8s549xHoQr1ajKZbergoxHUDA3LZe8QP6PH7",
  "key39": "2LtQnadqcJC5Jq43KY37oSrUr4PQNX85a5J6Ki46s5Hm4KpTh1oPNBU4jF7E57pRY1MCqjK8e591mcQUb2Be5jLd",
  "key40": "R5xHY7bdtrcPFEy8mYNp8UYpXMxrSVCZ5pes66koAMe9PRTt1BcWeDPF5hEPwWm6x51U9K99xpExK5bonsdmhdd",
  "key41": "KAEqdmyh5BuGb74FfZnVhJXFhdLHNkEURr9v8j8Pz2uWPFR79dffXz2hrZxG93evvU69BDZDDjJjMQSzWxKWvrX",
  "key42": "2nmQUUaNXxsSn12cYP8H5wPdamdDwLVMg5GAzCu2ZDFjyUNrcpHPUxD44fASrj6C6D36mTT83L9eitypqJuFEznb",
  "key43": "5cnqVcjRLiAgzqGvzS6XW4pPJtimmwkJ7UurDceaCVQawfdBAijr78X6JbgvZjuPqxfaEoncdvxFMfCZp4j8GeRa",
  "key44": "sA1hMcbLndeCtWT5mRQ4pw5hi5Q12jaTxfjHmx5fwpR6XH916Rt72h2zGGrxLwTrBTmGwnDarDjnkVKRvYaePSa",
  "key45": "uAL1sZdwmFy2aPYsxfhnQf6cQdbLJTUSjdCD54bwPhhMGVCxtLPb8wPbeds9AKJcYtVWHGQYDpY2v7Yw9DpbF37"
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
