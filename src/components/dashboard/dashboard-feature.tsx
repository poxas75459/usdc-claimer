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
    "27ysgsT1RdQ5uMd9C9VxLSUk27mE6rkQwrf2NwesJ3B5DgxPQ5poKQmWn7b5usukTT8b9ysMbvz75dLywiQ4KkW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BJDRR6Mx2HwhXYXXGWeWkuWM4s4fUMUtT3P2WFDd14ZEFJ7cgc6MTB6XLj5VHSsHW5GV81ZtbbURfPwG63AsLru",
  "key1": "6tTHawXmd7y18NFagwTXPSZCGGpCNA8GgMgfhE5sX7za7uMbixx7x65Xj8LBsYAtRJYdR9UQqgGtfrgKBptZxvZ",
  "key2": "41tQnbLND2JK5s9xGgb5XLh3p6kE1f64Sggnu5ep48nsQso7g6GRmockfrsVBAmXHo4F4jeRws9rAob5g5S9212S",
  "key3": "2TMLyLCjE2piB3wU6LR46bKB2eoitvHzV8TDqJDUxrzct8oMZ9q4YDXGEm5tYVMi21UVEg1f9RLizHbuNnf89r79",
  "key4": "2LaxsoXKXk92SS6RE8AHLKQ1u3ZJ3zEdTXTvLGWYeMS7ejcsGagCcuoJkzjBsarCS4p2NK1nW1GzNgJYaJFEBeP3",
  "key5": "4foXZkBcsnytd1yupF3PyXBaipcCdk8CH5x84GnanC9t42S73EuoYdouEbA8bTjHoGsG4T28UskG9da7cWHNvSzC",
  "key6": "9tX7TpP54BqJgdqsamGjT2chkiAXmKZyQhH7WnJUcNCVE58fUChSLxS8XFFYwYZE9ueWLWEvwPpFzmRgYjSaqrt",
  "key7": "4UeGqwv93gZC5YkDeaBaPhrxJPkoL8Ny62myNMJaYCLBz3UAEP1hWqPMKYyiMUNP6YnC2URUbr2sxKzB4UpsnLeU",
  "key8": "3dfLdDt63NXaNrvZDJvWqdH8uDwkcg3TzTo6LhdLknAbBF2Qz5F5ErC3NHjxagoBKA7k8YeFcrotNFTPuRguDABD",
  "key9": "3NB2DYXdatpboiRtiPUQvcSYHX6ADo2FjuQbmUaW23Sv8mvaacZra2ZUoZrbd5e5gyqHGkzQMmqq6RYN62cfgwSq",
  "key10": "3MMJQSyJLtPwxNM5nz19XyT34TnMChUkc621UXK9i6bcA9pMTfNjDZAePaKu1tfXEmnugXAjY49CoL8cv5kNVfnU",
  "key11": "5dCps7KnvDVaBrPBiymmzpeFCSAL88LKqVBPrQiauvmXuTv6Xq7L1RTtbpA8eMvMxQLp2sb5qxfc7UrhCuw9fM8k",
  "key12": "2JQnJaxyfwZEdx62eGQxXELF8zNFeGzSTv8qnEte7Sz2AyuFhKdPYYhtpKP8xgkvSxkxSdf5MimjQZRuhZEJM2WS",
  "key13": "jwcpJRTsAupg938f1SyXQBRGTnsjDuyZBGvz83aS9dLSAMQ21hJYNm1uvoHvcKkdGL4pr4xehhhP6itpRx1gzHy",
  "key14": "53dLvR1M16k2kheYEB5LWjBXUL2DW35m9pZfsRW4vEaAaRh7aL4aKyZye8ripRLKzZdSNmeWC5odntSYW3r1KPZm",
  "key15": "5MbhKR5dUzrVSauC82Fymi7KAHo5D9Z2q7a8aKrtRHHupjxsTY98RTsGCqs9vgysuXx5Pe355FLZHSGnUjvXbXcF",
  "key16": "5yVbKG3SrNrw7K6rbFqDRQauJ12sh1USNb3HHW7PRWhUiggQJz9uRWGNDRxzfwUWx8A2B31BZbTjTZasmykuGHwG",
  "key17": "2ziQRFh4iM2GMwj4AsQ1Xpis5VmW7RqyxuB8KLyR7ZJCs6w4cMLS6xe1wuAfCa2DJQ8B36MNF4pP2ZLAxSd2oNZe",
  "key18": "MwikVDWY2Tknjec5phg8LtPaRXaw6Ak4qA8TnmSnsB2VnwYDvoRfxvAT1yiT69jUqQ5MDLdXnraT7m7JUmnWfxy",
  "key19": "2bHgYRckM54uyM4CzAQbzLtw5Ku6ktbueEVwVsAqAJWsVQF8jqmAAniHBcCrXLz8PGwmeuvbd2JQVgEVYKqC2hNe",
  "key20": "5CatqDu3GVTLn6BB6gvFjysPkyKCCrx4XbzsKxxX8XDBP3wrJ4bbFPsF5NMFxzJM2UJrutnpySMTT33RaUfQuGG",
  "key21": "3CN6yLtrTu6nDrsYcVYCyR84A9LLsUSRt2DCkqPLVpYtKEr8kc3QiRU8Se34mvs1xM955CQKUoQtHayzL861HfKZ",
  "key22": "5NPhRDSMngTkZnzj4KeQ57NoYBSZbwTrr2W55xm37gCwKrS4hvsZjuNBNsmAMbY5QqsgiNa4P4ezQcNy85rZVGXB",
  "key23": "rsK6ePC2XXtBV7qi5WptY3rqzMMR75RxKhuFf9rnEPA4BKVpzQ1jyypFEYqQSCvQrwetk8Dv2pgdyzcHisRQxoz",
  "key24": "38zPdGV8C7DHMVZjGtxTMs77yQMduwost1n3jgDMh2DW9ZrtU8bkmsiXfwqfMZjRBFAidhX1jMrdmoQ4xfYo3im2",
  "key25": "47q8YFa49cPvb2RevkBBxEnoBddwiWoKh9wgx3tsVVYnVVgFh2THh6nNtyFNtBaHNAY476x7yjqLbYso4QDSzN2p",
  "key26": "4p4fEx7N8AqXyo9t2BjAkt7XBMCL9mkaceu97qgY5uqc71ErrhxXZV8F2aR7eQnyUuiqwBrATLQArFTPi49LTn76",
  "key27": "2jnvLz9oXdqCQ5nGzkcknNYgvCNcpKXitQkXBuFKqihU6hQqUPUhCAKFAGQM9vucxx2B3VN4JTwYArBTgiMyQDq2",
  "key28": "5pufC9RsACw5nAtMsXUe3P6MyNuLapz3ZSJSpqy1uWyNNYSH6AATBDxiaSVmGWRRtstt8UVZCZGbXGqJcr2TYZ91",
  "key29": "4D2FyuD7JTuSxtoPqM3dTCeMm8kobQFXjbM97TcCrWjut8ZbJQyyvdQSEwhv7wXx8j57zZFDumA2ZFqUSnSCkZWQ",
  "key30": "hArGSWVCGV7dCmvDSs78wpL6afJ7v8pnqrsJbNCQX1Zr7w89choKJfZoViYbZDSCDtSz8P17CUUC3dMvJQ3R6K8",
  "key31": "2ZQW8GMo8e9pNmr7vXNtX7T55AiiAFiVUyrKAxjagWpAQga4KfLtWY3NqthRduAcV71rWgjukanZ2p6Y3CHrNAe2",
  "key32": "41qPFJcyFZPPC61418Gz85Qh5ALR45wRaWTiNXcz7rGczm1QisBtxYE52xoBDULCyogMt8YvMtJcGv4intLr9EQR",
  "key33": "3p6KDVa5BFjPWgDMPziWSF7FVqudCNUYpRgL9dcU3R75RnxS3nRHKCVsUT9YbpnqAhthUfC39zio69WEdUJmDdxZ",
  "key34": "3JUMct2w7Y2AmtuNVwR64VJrse3CsYxs62g7H95PsW3nyLPDKE5yjTHnrb5WcbzbB6epdr6wdayKspG2VfuWKSBh",
  "key35": "3UkYhSUWLBejyuiKSDHdVNbLwDDxjvu8HkJRYumu1Xn6wXgarp6HgVSXq2sTkLJ3rUVQ9v8VrbAKkGqDmanNpsYJ",
  "key36": "2diqYLmoENUku2XzKewmW749BXxmRn7qxBKkEEUYPcrEdkLo93hSxTLcDv6qPvUVjmS9n19ysj1x27wZMrGx9uGB",
  "key37": "7qGGd8bzAjSiauWurEybRMfvWJ5WhLryjeSZKFBrmKywdo91qtCvTY8hDNvmdw11uCUwq54JqCn4NAemc2ExNTm",
  "key38": "5QB3ySuNNfmdph2xqzJGuvXzrdzFMGZtX4dcHiL2krFouKduKNn3CyDKNRLFVcrpzaq525H4kSuroktzTqsA8vux",
  "key39": "5EwqVytNthAvmdNbx8B5AUMrUTdS5arzjBkhUNTadVNTtgxYw5N7id2Ct1chHKfjtLSbRHq6MaGDLaAPVgPnYh5J",
  "key40": "4FqFLfG7wznkJbercnashk9ZQDDQY3MZKDtsBELaeCcq5pzEw46upKfXAixD7dyCm9YqW1yUPTBte6tBkmxPHJGA",
  "key41": "58TY5QzS1xRAbjBQWWaGz7CW5e8g3aDGdiSHzp4sHBY2jbqNVxem1drbPYbM6sCxPWZ5vhbShs9cACATbhqgkd3N",
  "key42": "3ZozgrucH5qzYPyYdE9kFLLobovVL6yb1evJErJQZoYvw5wRUcbdSRxZptdaGExruZg79dxVzs8dnYykYQWft5W8",
  "key43": "33P35FijWkkqjBJXvfjVBt1Nz4cwppV692HQ9yXBqsLVijGT5VvHPURkynsj7jvagPFDztKCX2KLVX2zgyT3XTci",
  "key44": "5teoVQXSpENuJCjKD1mGbfB1MDvjKAcRLRPNxA353WEcypWTHBkQ78evHeB4q48vRbBmc3CApkHWMetQMdNAJwQB",
  "key45": "3pNvYjdPmj74Mg3ynkiHAidymuNPckrsurPvLY9s6KfSGDQTXm4GwDT8zpr8WnwqRXMVu5UgMFr5kArCjS9yPqsk",
  "key46": "2v1YpMQqeipuYATpTASs73V6PN8Vnt6SGu8r5S9ANoVdu2pwkaCoYRUU9JeUPfaFFbZmg3cLpNrs4j1bcxw3jywi"
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
