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
    "3MpJbbo3UoubjGK188xHNoJiqeEpupKWQ1LMpDbMHCRx2S4to86tfwgwC7LCHRnM2P2s7bFNUwoJzCjHYvfbmTNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjgbnrTcMXkD33GFVfjZfFSdziPGfAQH83oxkX3YJWGotrYVbf97t5MzGh9s81hXTP9dQpb9Bq7jTAAFcq8VHCN",
  "key1": "h8aQYof92ieAKvLjfqnpuVDGKzMvxsGLhN4odkbaVYZJyqccVDFqryCMXjzWLQz6op5pwbG9XYCYkYSQ1XRmrSu",
  "key2": "2qvcJ8MpBEWEP1MU4CKeJLFaYFgGSYEYJf4LNLhMWg1yuCx9vCANkXuxmNJLYze7Bz7vKz2KEJ6u8eXpXJ87fETB",
  "key3": "3YpKqMK9ijDfY5eQxi9yii3UZTMS8P4wuoac9sam7sK6a5xMYfLbW4XvZVug6r4GwhETyf2Q4rL3kbLaxP3xiXqT",
  "key4": "2HH59kbTEjH5qWUrUaK7xPCFLCYLxdn2FrSnoy2nSvnGitzGqf8yYfL3thotX9M23VLBXvZqMKy6t1oRPjZ4G6jE",
  "key5": "7ARZohVMSkd2GW7rGnz52xpGYAneArHYD2XnYpGzNErmaR1x36SQjQwoto63kzTKJy4QJF7U97QNt6UR8DJhfXk",
  "key6": "8QnS7KG9kYqZsgFW185Gd6cYW5LncBv6nXzxnwRrmnWDLeD5sJ9QX4MiwV3e3PGR2TYf9NDH1hV492atu8N6Qpr",
  "key7": "VVHhx4DBWZAX4svuJZbv5b2HA9HVvvsizV9vLyhoqn5Rwa7WMNNFoLwUw27cfGAaFvxprSYjHTkf2xTVm29Zr5c",
  "key8": "2KVt5wv6tt4Zje3jbh9D2Mhtg5yVoH9DcfnuMYuGhPRWywY1n4UXcZ3CDqeGGhjpvBV5VgUSYKyTfwr4JiQxr3dq",
  "key9": "4cDjbAQ6u6F9V6N3bgNCZ2zFtqAeoaN5U4YKiVYFgPE5x9ZF8Wszvtf7pfceJUNtkpKTgYR3Nfw72548PCM28S9X",
  "key10": "4bFYFVSfGLY1Q5vcowanUbRB5SEKdX6LgWJAHeEUzvU7kNUYkyaGec9yLFiayEc87J1eRzKXsdPBpD1jnzshpJx3",
  "key11": "25sEZTEQCFUaCdwGyhH2rA3RpAcFiz2R1JjbfcvxDobx6p1pG7FRe8QB6wDCQ3SuttueEoZkRuz4Xr4Qb95zdsqr",
  "key12": "3k9EhtR1iQ7zDBBjKFkqEZ46GLaPQo64ubDWCGrfBkmxdvy7BV4G2jxkZdkseHoqAmy4iKZe4PHGSV2gczcEtMQY",
  "key13": "47uTShnnSQk16GN9UadSAjfAy21jVxw5bMXfRT5yovVKe21V1eYeXXQhne3nH7sMyDF1vavEHx3gyH5Ct7kZ3LCp",
  "key14": "56voQ1YQtkr9Q1RWMAv7MgPxtd4Do6x8HvN3Vg2mwWerZ6HyQoxbwXsF39qmq9DcwtEMbpCSTWb6JEDrp7FrFyNo",
  "key15": "FF652Dtf6LK5pA5Po8kNnVjpN4juEWcBdQb2xvfzTvJToUB7viqpBZGseYhWUX9qeNaMHEnLJAD3RUaTKTzAdSn",
  "key16": "4rFTxm7wZdGGHhrRSozrq7vGqyZhdeFgPx348mGtDMfRRSxEZmtbrCdH3tuTk1phND3G365KFDF12v81822QTLoQ",
  "key17": "4U2adjpvfcwAGiJV3i2MB6yWE4QfxkJQ1JVaF9mAWm5iXioYwtnYS5KifajaQtkeU7ecn3qLNwx4oqvysHqCr4dw",
  "key18": "2J49sfkqe51g8g7eRFLVD98nJXTN7P7EeboSYqxshs9zU8HPgni9su9ViSfCyzS7ZiVtrDFj85UJgMNnF3QVuyBf",
  "key19": "2YwcPgVkxnM66E3eKLLHkHwzXLcGXSFfA9DKkZnWkHHNiQXgkTM2BajEJvL6YddCbC5d8KYhXWgTDgNUztxXhMRm",
  "key20": "2NDgb6H312gyQfp1LtYf7SZnftYStQBhJSMefQDV9KgrRdXM7TcKYYGr1EpxfeP9tahrbTJ2uoBWtaBxCDiYL2xT",
  "key21": "nL62UkntVenJtctJfK45fyDdkhht6doaFz2Rgj22unQiAGoWGWnt1LZk1TiMZq4sxbSx3e4MBMkL54tPt5YUKXN",
  "key22": "3UVEAXTtRJqZFYGzJ94rUTpbpapSfeAAv4tuWYrYavgjc7bvWc1nveqRx7kLMcWFHs8oRjkwyz2USUw83VLKk7Ye",
  "key23": "4FnwpxjfQNb3QtRqeUxB1goFQXxrD1ApJCVNEarBaTNmJvt8aoMQ2x9j3fmvLxPq73RL9EEi4jvAmYdTeh1U6DRP",
  "key24": "24aZ2GiqnNucSqcyX6ub7hYWfgHWr2VSnsxRFXBcTd9cvGUp2CSFpBeaiVjJp8fgi5YwMgJcuLvGo8txETTLnHKg",
  "key25": "3hamdCpJimoXruhnNkkoZH1Jvp6P8RkMh7MWRmkpwbgQhEcWDyTcRMAgEkaxkJj8dauFdLBwLabRp5KnRquGYrwa",
  "key26": "4RiqEqgTUgcrHmGJUwJDdrAjpPgu55oDxcPoxPG2oQhh1oZXFUMEuk95YSii6CvW3hwPLepFdu9FJQX3bQW1sA8y",
  "key27": "548NK6TCPBWe6GdkVbpYKvHxPBLnWfFn95BK47qFaxERFSDKdtFBD4DdnzG29ZjGHH48sUfQEC5YBhkeGGLwDAHs",
  "key28": "2MmH36VfJwdBNpdt3CVeD37FJrMoREVMUaKXJNNC15AQBiXwgeMr9zCsQCJtCY9neb1JNnhgex7A7fSTvpmTiRnf",
  "key29": "61XGVz6SyQMn3e5KnfRKLDKFDsrjtzo1FiAhs3EfSsZ86EbtxipRSMbah4pBEHuR5cTWc92ubUezjHoRCBY3ogVh",
  "key30": "2dYdwge8Ue9nVqnBiCHzZC8NqJQaQJY4dorgmyxuRW7gFkHi3DTR8fC5SXzaTjmRqXAQqaSWJJwqTi3SY6xZvf35",
  "key31": "tzLZDenFrxTCi4jsTXe5naRHBgud5xGLvaR8vx3Z7FaVGsAh6RUc6ySNnsmbKyfrU7u6zcfdFeipWbD3Uy9DPJW",
  "key32": "4BckvRppzfhZynSocgh6WHNps5Fu11WD9gFYhNdDnYEG5pEguNReeABBo8TRziiJH9fZ5gFYxLLtaDziYJc8hsd3",
  "key33": "42WHQrh8crcFrpsfKvqx6VyDJGuBnt9J1xQZoTQb44AF3osyPhRNfvrekHzXatJevrWzRewKA9RiS3vqKbmPqNy7",
  "key34": "bYtgQZdycaUt8b4FU4ZRS4kFYQr1qd6KGVi2mKfnHp4ztdZbhFUQbSp8vzQeh2shc4m1jpUEHVEhQFEWV5rMDsF",
  "key35": "5bJM7GydyMo83hDtYcQz192Ac4FV3DaiCfvbui358B62WFTXNH2SWu8oommFMdsnyU5fRREUGeW6yPyUUSHadXYp",
  "key36": "QnvqTC21FNKk73Mvhhr4xTNC1gw2YZAA9sRRo32gW9zBTPvDvpgGHV64VGdA85xwqJoDhu5Nt93viYfUGWaronZ",
  "key37": "4HztRRz3ViJmFgAKb2Sfz4TdrLsjWe9oq58FFVtxPKyFvW16bZMK9YZW5FcuE4DMHaQsPEg4qQ8pAdANuQs9RzXS",
  "key38": "2d6t8ctQeHRaXeki5FnzJrheLXk8vF4nDgF8BDtgH54nZAVjjhqvo4QVVnhuvkTDzZnm9knsSABMswBn4M16A4Lo",
  "key39": "2uzvx511Aeu6KnuYb7LY9iSAJtmnFgGMKbdJALeNiKm9ABxDuBoyaG6s9XYod7ym3ai4nNEUex1yDiR617Wwhs18",
  "key40": "4yfZerTu2DCCYULN2usvZsza6vmbmvgX932jocnxaqPm5yWwuwZLfd7EgWAjiAYQR6VXLzR2hWBeuxibRGHhdd3P",
  "key41": "45DnnwpiwZkrefCcy3xYTpFUEXioNERkNMqux2dLHFCaqEHCRiAoU8bD6UsRysW6dacuu2NStYdTDqeLscdq9P3w"
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
