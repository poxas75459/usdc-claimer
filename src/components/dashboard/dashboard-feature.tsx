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
    "2NQfnf2gZtGCEJhqMsPNR8jM5BLzqmMyd68tSZzT7L8GWUY6z3MRRKJeFsVQSf4FJsnTzVG8fSKUfPaL1sPfodBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjbpoN8soy72YZY3mVW6ayyVedk6tRwDY9Me8VErHdrtxEQQn5mB4QnS5ELFrrJaT5mLE2WnNfqfpJc7vwuwg3J",
  "key1": "4jzT5wuaEpzTYsFNqxmaHWqQx4phr1Mk8YX8GJewbBY5a1AJndkRrVr7zUJq9zLkwZiD9MdUS157bDNXWz2o1m9q",
  "key2": "4nDHmKaQEppLwMMnuxo7a22BBiLYxcpyP6JFRjf7qFE5LPfKTH8TyiqQ2MERufU7kySf7uuuTyG5MmVrWSmHM5K8",
  "key3": "34a7gFt6RoCu1PWmzjvoWTfM67REL4r6wJAxXpbKfNGsqbVAuYNjvTwGq3mqq8wjDFLbnRa5uoNrceqtnCh1DZ8Q",
  "key4": "QpdEeJFhshbWw6vkUd8xSPgq9RyRfh611aV2Keja1W6Pk7v1pruRugqyAp73PrLEmEHiV6wVbQ6sNSBNqQaEXgq",
  "key5": "44hm5p2ZADdXc38bbpdQbiPQjQ8PS9WWPdcMUH9yGY5cpNdjuDmXbMDycT9J6iT3miCVdo6Y8x2XNKzkZqUoqvRh",
  "key6": "2DkZudGF8AqrQFo2vQg1K2sHADqUoLxhKidbsysiFoWsyRBpbcrWGn5eUa8dUeePG4ssz3MkUhuQ8VpVTkUuLL5K",
  "key7": "25tut9neWJbFhAb1QTZjbfyb2U2BGVjqJyyZmkWFq7ptN6L7ZAB64zJ2LR7T3LN4srgaWeBYDetQZy3KeUyp2U6P",
  "key8": "3uCpPqj2xPW9T8k6ZRX1FiKA2MpnYgUxif7wodXsMV3ewJQhoopBy6YXG94imZeF5ExxtedyNJUe7WcusXxEGbrK",
  "key9": "3RoUFP6qqjoYU2nZ5rDbvPHsTBGemsxyYTTFGNZyxQkowDLxkxWx8KwCtj5pSmvvPFJZVGxPTLPYjJZKhsXKw2tV",
  "key10": "2ZP4zy28J7MVX5rYcPnFC2suNLsUytEqsnVMpGHJSTRhQuk1Mb4BJ8m89qWL9ud5u7ShLcHLyJCNe8QhkK9UAz3V",
  "key11": "iT6CcMWyoULT1WNfRPL2PpnmqHoMzKQd9SpSiJyJvzU7qpZ7kaundPmtrW9KhwfASoiDR376dkMBzJsn696wLec",
  "key12": "4a9qVqcmyz7teaXEPWtZ9K13mtX4dExhXWvZM1SjhNMVSvtXZJzoQ4WXTDDYk5b2GkFdnDjvpLYqkFreh31rGHHj",
  "key13": "4s4QKt2hY1wMhXZsPqx9LUvP6skj5a6BmAQJVgXdDqSRzonE71ZkMnz9UxxV4oKMgf7e1mmPuu2NAeWYqHekZHdu",
  "key14": "34t1X2c2bf5Smrptoz3pViHjr2jJq1SgXo87VkewK7VKaYXnfNM8trv9GXi4xsVb1Z7VELTH6XoZneytL4emnWu7",
  "key15": "SLfkNBnsod8m7mhYiBgY9JTYXFaJcyCwaaQMbkjXY1gTXcVWvYNY96p4hN56WfW4MDVUd1PKSqynq9FWFnSjcib",
  "key16": "4sGVbYFKyVSe4hsR9xDjEdSrfPG284Ss5aFKfpKejBsgJRrFYGYfmwufo2ZWXVCe92tZuPp9ZnnJmeqjrQ8DLyPf",
  "key17": "3ShjYzLHoH6LFnBR8cQ8PAeCvYExXguAisVhjLF4wiZUTuNHH1Y4RE5roY1MdgNf2JNDbcN5GU65Yvhf7Hgo56fz",
  "key18": "2f987g2jo3736NhF6gguQyKRomfAhjWzRVdGMgX7mgo7wvptvFsb2s8MZAV3wp8Kd1B7PUe3Hyqhzm6Fd1u4Dhrr",
  "key19": "4S364TqdcuefP3uqZt1nvF8J5Sa4GcJKndzfbJyMZDwabcitY3KgJYupSit6VMJAwhWnUagsmVurTk1b2r5h4mET",
  "key20": "U6UwSKXPaxTJZw7HWJcC6Hrd7vv3yv83yQsW3ucycKv2R1vcPKjM7eFAm26YXxbekeQF35ZcmKibKsG3binPS6T",
  "key21": "345wQFzHx1TMsZrTS5RbfW5v6QhstWQRsqyQ6mDvjgMJpJGZyY2o1shCu2otw2nUiPcuZs295SCfbQY1XpvtdrdU",
  "key22": "442fzsJdAdF9semQPC7nzKbMKn8ZRwYHB3Xu77JLMv1qxW5Hdh7eoAu7jeFZ95EW8WMxF92JRnAJA4JjhS7rknfa",
  "key23": "3gCAB329CU9op2UgazpLp3z1NMK1cDDZyeMr79BU6uxzagbPCMCHiTw5zYZAqjBuPoyVSFXSMK2nnYyFwAkF3YkW",
  "key24": "3ixRmz7pBFJji6MLtNcSHP1GiZBsENsYA6dEkpXwbFfMVTzieLU4WZR5QqdiBSXqiBm4vu4hLgaYGvdyCSZAbFwt",
  "key25": "2ZBm7zuYYZK8a4rJVYD286Y1fujG6G9fNCXgqEn5x4ZxW3rKtom4Bez53HM3DTYw3qrtB9aH2y4DTziDsT4xo69t",
  "key26": "3LfjRTutEhLThVARzyAhnb3tV2TKbcU4tk6RAg9z5UbG4kd6bTMEoW2LPr72jt9hUGacNdurM8kZMfaMW2ySGHTm",
  "key27": "45APe2MprgT5dbfftZuqyFJogJ74zrShuthoDnQeJ6zCR3FU7FXUthmQfZMGnveYDSRRPkej65MwCQ3DPAoFGSt7",
  "key28": "2dU6JbfhWkUVuyn4Bci1gzMSxSKyz94GFyZq8WTbY6YCcDZj45y7tBXP2qKQZPd1vUQ7Qwv1mBTcfrS31Eg9m8Yf",
  "key29": "3q8s5yNsLdhFXoXVqCJRqNAn7GtQn5eE1binCz9mDMgt2JayEwYr1sd7Wphre77Rmj48QLreNSzUGkdWKJKPxgZA",
  "key30": "3FSuGNyd2JdZfjkQEDGR4CyQtn8SX6JPST4xcyMg6HwEkPH6fmUVapJHjwn1kT6YEdwtRnKsscqkAfp6VqNUFYNK",
  "key31": "2DVKFmEsEjLZeTrhVyGJnZzhccgukB8zjxPZ4Cgs3s9WaZUNGY5StUXAmWKW3uQtev3dqqJXitzAPEavZrkLJ6py",
  "key32": "2vCo4qdunAwCfQ5iS4GTPqjjHQHEgnes1DbKEhrZVeaHecTBySX1qRUB4t45kXsZQcRrVrxnqHTVHLJDsdqgqiY7",
  "key33": "2ev6dsnje1tszg1znLuYCMRAhrhUgqXuH3Xuk74KGqfKYqfXugKFme7PvWhj2Z4UBmYoiZjVaNkgsZJMHTSFWYww",
  "key34": "4GevNVwoxGFUwfUY63ofxp2uKrC373DDWo8oEzYtHrUwASLawzsvnboGs96SPPYwmeiuWavL9DB6UNCpEyRmTQue",
  "key35": "3LFzamw2L133FzrnD76GnLPyrkXzay1WbuYBVtiAWaZYsBzttUUjWXDVuCr57cL9qYafxtZdMpNNhvhGewRT2jAr",
  "key36": "2NJ5BHKqDR8tDwCAcaki24ipcmdAXJAXqwBjS1m1ngVqyXnSxAiThZZKMiMaaePQk6NZjhWAakpsnZEZhnc2USFW",
  "key37": "3CKw2aP2KC7x6AzgRiE9bA54RN25BiMVwTH1PAaDr1UwEXAHgE4rJLuAfKhMMxooWQNPxreuus6BJZg9ku5SjzXi",
  "key38": "2zRJdVgwDgZNXjj5dt8W8yhAbhzrQti5cvF55Ht5rkZ8dNF3kPRCoJemPCFPN9fqLK2aKQ6h3NxptXpV7quXZ9ov",
  "key39": "3FStH4JvG52BHxD2BKU59STfXTPSk6Sp4y2G8hwbVRbL7pkLwSEqSwQos33BT5x4cixKgR6jUSZicL8kA3GGBf7v",
  "key40": "49sqqfT5vtANujuZXvFtJ8vFS75MCFpCE2rxLZL23Ah7W6EKq52mumK71eU4NQmtQkvspmzzANZcTHGpZeTMW4TF",
  "key41": "4vzLmj54fcYj8K4yTdQGCJyWh1yfzpjruyhegBmUUZ1m27gm4VQL8hGvNdwh1X5QWxh9VXwEDjaQcYQSEfZQQzZX",
  "key42": "3RcipmttxpESEw8FgkZ6cx5n3cd9BKZbpqnJT3LqPoUd6QygBMT7Knzr4s5yfZEvLvhg8RehNY7RdqhXWDxPf3eH",
  "key43": "2DuXWa6HS3XWA8S3LvoEepG7BgurVDwjm7jY6ReAzqBjatsniF8oJ12H3QtjWug8N8oygXmmSpRvHE6uWY5LMRi9",
  "key44": "4qCR7LEuSuo1snk2jBFfLfgh2B84VsQ86Aydrc7N8BZoXdxiMn2vjUNt6d6NYnhtYsdhKiySC5BMpesDPSBTA92n",
  "key45": "3GmACwtS776Qoesmjk5p2H3hpXvvUkSMxijcx4XfMU9dCpuyAdmHb3Udrv9fARk7uZrNCAmVbkrZ9bD6oJoHMsnz",
  "key46": "5mr8U3zvKsbhpsh3A9RYpugrJm4xmFW4zoYVhJ45MnkbXErPAyxgRHBWy8agVLJzSdhzURvCyV3SHaubNTGem21Q",
  "key47": "VGyhyXM7bcesR7rPsMFcgEw2Zr3NzaurGpvnFLvunzHFR6mVZZm8fiyQSk5D42hPfo1t3jMNiCqMsK4jjeV9zFL",
  "key48": "3ZogNfDrYRcmTW2EYhf9Ad9P4gGLJjNxY4khFhvRupChB1bWzjwfbsTP65QDRVWnMsefEz7BwxW8Vqj8pxct4Nwi"
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
