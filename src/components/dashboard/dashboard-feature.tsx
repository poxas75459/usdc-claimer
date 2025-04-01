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
    "5V24muEuapuzcJCtwfb3AyKtNHCESgbUE8Ra8UqtBxfVuQK7RajGFG9iKvEZuyCjQhPj56XuEwbnBAvLjTN5bWsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45RnCKqaENUdEpigEyaihPs1HuVUjRcm9PCQjmQKVDjx8CwG25Ubv7nFdZB1vRF5W5oJkU8rUr1GsxHEeqYSJVa9",
  "key1": "jdxaQzT1ysWyJsU1gyESSpb2hAEAHMGaQgSUadvLcHPGS1ZwHYVMjFwFXBXc3mJMU4gd16Z2gNVY2Tiwd93NCgD",
  "key2": "4oLYBUJEWejDLQfLixdZHxuVfywjk9hmdf1jXVzJASX92UkdC7KozgYqKdYHCLyTWwSN5bm4UjUEvK8K4DD3tqng",
  "key3": "36KRrBd1dTVSG97JQUdjmVJ5uAxMpGVyr7mKWaZkTbEkSS6NHi42jQ5bKQiDexUP2Nb9XvH5YKGv2taZ1fJa9Jk",
  "key4": "3oCnJYva1o9k8FcgiBAKoZxKUfjRsv3KzEpudCYApuUNpu4tum2RLCqyMMvjfqBn4HbYzWq8wrEmU9kAPTvpwoCh",
  "key5": "8DEFvPdJu7W6bMjZHJuDxVkdq9rXnmGJpBLa3nqi3z5DaEx1EXJX1zopJphhznDqCouoP9nHenHy7PKMrzmus9y",
  "key6": "4aD2sEdesZMzs7p9TyqNPCiMQBwueyeW74ErevPDN2EJzSmdXY5GQNcPbUzeU2wh7otRJH4dBPS2WFw24voC2fqX",
  "key7": "9wo5YeZc22JBTiUAzcX9i12G9fZ6D8bxGWvHAndQGzAmcUoAjHmqfBJsp1zMq4onij7NBDETazD5tY4o2HuPVgU",
  "key8": "31SHmgKcTXf9Mv41pkLbJf3Mt1Rcd6zYT2UmM48ocTmBAe8utKYn4pLeHK9tVTe7wbXrS2DNjvY5dHmx1RbhnqbL",
  "key9": "2dzEJT7anguobDojGcWxod8sM2XbVGgirE2kP4s82z16V6uS4GN9DD6kVpTQQC3kFupvaVy7W7xbgHvHPivzJ7xH",
  "key10": "48jr13mwV9zKyztx23J1QXrREELGmuiRTEKHG5wX1PbdTyxZTEGX6zrDSrEfduSMeEQuDHsVMjRDKvJ5xAUE52Y2",
  "key11": "4DMxjT5S2qKi6HrBeZysbaNAudZ4kHF7Arm3PhBxMLLqnj2Jm4KAsqRcwPm4av6fHDv9ugjy92nrtHDYHK7eedJj",
  "key12": "61gdp3XbZWtuu9cuXCo1GReVcCpTadyCZBTJVo8y2pt67PTw64fJo6FXhqnX9Q7DrVHtur2qTXbvJpEriTv9cRHf",
  "key13": "39uChQfMteakdF6Qun3uVcwTwaE9JQ5HaQh26cKGmRmgYXdP6V8YousHnSruUFbUgoHPsdm4NL14Vx9fbJR5bkTW",
  "key14": "5DobXPmCjsBJBzfdZDhGQrJYspDytBDWNYbbhPDSDHVvL1qmcbnSCnLQthSMATYMaNkSef7foGrdR9VcsRbAbB7F",
  "key15": "2Lq4WLohBpDrsUrmTk3f8X6fQWrBQwFVD7gFx1nC4qdACyuoU7dYatvUm5LF1p53GpdFhbUVmqAqZFUUWZC9F2Wj",
  "key16": "4KgodqpxVny7XaJTxRQ3kjZsvguKCbG5GSRR81hUn3apZXL9XyjjnGUjriJ5xGg4b7oaYPdwZXGSFjTfXcdBg8WD",
  "key17": "QRtA3k4Gnroo7SfGFk6Ppi8E32Aaqvwf8paiXSWG3FcyaxQgnu5SPMec6ERBth4hCN3gJnyA4TQt9MkqRsACxX6",
  "key18": "63Ap9S37LQn8B6D5ea97DGaeRCkFUC9R2i7twZaZivhkBF8fpmyk6m1toZR4xhw4hEDovVJEeaARHYrnJMPDf3hh",
  "key19": "2q3PN7x46PgKayq8aL4hPZfMEvxbzqkefQAnWdfFpHVJGNZbyF8wzBKVjjQZSBUzVhq29yJ3fEiADF9fjDHAth6U",
  "key20": "4jFDQncX2bpT6xWqDnfboN8JUBAa6soQcrusdXEFdUQ8VMJGYRRwiNe9rJjz1C7UjvLSobScrNPSdNbejuoSkmbF",
  "key21": "22wnBzL1dnp7nwNrqEHTh4YMcHfP8WgYRkX1tCRdSvSQ7VkGYPinAFPriLfi3eE5NPph5qqiWY7w2osfDJbGLtY6",
  "key22": "3BzLDwMA6DeF66JVaSMa7CaNoAcPfoNDWAwcbxiZT8t8f2bLftbAWaATLn7UySHtqHy2eEqaWiRK4ps4JURwqbru",
  "key23": "4WmE6Wo2dbCdvwEYYobrFrvcFWr1b1D8wrKGtuZXYSGtiB9YzwGQeL8oM6zPoHD46wKtRzYk5K5ibUZPjiTmADGs",
  "key24": "4mwgGoqQdn8gRdcbS1bj1sQhUUVEyGg4BRHFjzG1MwxFjvVB4WD99ZjaNDAgHngaPPihii63Y39X1Bb1zG9d6TTY",
  "key25": "5ojt1Y5Ye7AKCn1KbutK2ZLJw6TBCN45uD6NR1TxCRgtetrgfg4CyGDsB5uijbdAGThZT1swaTXBaiE5tW1PUEzc",
  "key26": "39SnKJBJ8jgno6kjdfLueKtER11bWEapaUKPUwYVGb25EX4g6HnraYyifaaTgRjACU9oAL6TvV4FjyJpUJuPzaf4",
  "key27": "3Hfd8iy6S4BVcXgYPN3Np1VmJ47AjSd7t547xsHE7UEqx4e3q4yXr9WQroUugc8dMC6U8qEh8kxCQvC4vmRTaMT7",
  "key28": "5zrMp8115zvzvawe3T1ZZd1TtEyeEL8bkBaadovUx1ELq1uzoFDB6eEyarQdrwPAXgR5E2B4vvjAWaDRd1S213iP",
  "key29": "48nDcokwjLvy5xw6HaX8YzD6RvMekDmxQS2G9k3u5YQTSiZ7pgG5CX5ZqURyysA9vzyY1jGim793dTaNsaeMQzr7",
  "key30": "3Togv9mXdbJpi76MSKvwBGwKSYJ39UEb3b3vDrsaJkWLfLvRSUUJuGvzaqVdcVRCdUTrmt37TUBXruromQPD9QvS",
  "key31": "2yQqB15B8CN3ipLcFGCzhziP8efJ1pUavAtBTFvCNS1HQMFrUV1g3bxFAkwrazRZ3DtHJrCYfKFp493ipDht9yPM",
  "key32": "5mUrPfMw22QgQEn5ycbR1CHMBri22Z5ncPgrrYNyMYkk6s9sGd9toRq8zjS8KEiRHJYNHkv1ZLSfsG1DDdxASWrm",
  "key33": "ivVaGZdd1QVXR42zxoggHL4xRuR2iFma8SWDm7KqxdCX6ketLffwE9RqJZKrV8hF8WJPipN7u9cTqyzZXQYE5Mr",
  "key34": "LjNhv7v9sFDXyooLphBFXwBoWXKJkL3UkWmR4SLCxm2AWPo6sWfseEYETXBF29SLnjwBKSYvafipBM8KdQurDu4",
  "key35": "4pgLybSziFZ2agLXurEo67MRy6ycK4MPnyPueAhJzBztELhgDAPYA4ZQ9UBp4FNDz4VYicLhgERQ1c3hg2CtMnZK",
  "key36": "2EHafa414Ewq84zj14jdRaCHZC2q8FPCjpTG9mnJ7hMTi2sgx4A6FttKBLUtiZa68ZLafTyZyq4iFBLWkHSfKEEN",
  "key37": "4PH2Rn7ceAcMN2stMAxLP9akCVoqHxaVHeVR76toGwcnvSqXN18DvkqoWUJJXJxMuKHKA2RwR2GVAA46qs5vLzqC",
  "key38": "5sfEgbUcHZWuoHKGTfXcZe3aDaXaSYUbaLG3Zr7xSdra2UhHiBPvXaKmXGqKYx1cFFTMnxjc4suLkghR6BSAhz8z",
  "key39": "3UBQnYb8SdxG9WjMMcV67fGdoRpWvBPZ7JPtZiMSB2XqCD68hvF3Hcr88QMsuohzQMDKwzNXdHR3cGE6TggAEZBC",
  "key40": "4VDdX152cpeqUUiunZR86d8zepYuyGV8Z4sanqLXdEQYGw9SSYVz5J9Mews6UomiwhB3sAPpePDZWWAmkmHv21D7",
  "key41": "4w6vG94HishTv1ey5mwJgfchBdyJ1xECS8EmAegtD7ri5c6nTvK71iC36qp7ArZQJuS2wf5nuHSTJrbTGY1tVa1Y",
  "key42": "5ysvzncM4s1nPhosr8ku2KhE82WgvfYJ7TwjDpLemXTXuLME3NpdAh8qoKZbzWWYfRSEk73sUxSHezZSsJazYeSr",
  "key43": "3iBE1QfRaPPf9tyEemSP74yWc7UjZQY5QKi4SCTv96TMbfjd4bA9z4EC9ZnKHzNnktRcHSz21RXi38rcvwMiZbrN",
  "key44": "4Z2r3iWwFSxq3naHpUqGCceqe6wyveJ9J66T6bZwCCnNhKgEnaM6vYXod3qHXqdLguQe7eoaAuuqFL83RabJFN4e",
  "key45": "fmcu4zemzzU48QZBLgnWVUayWxyNqCMzPm1HdTPLdWN8LcTAzCQnxo923QBfSrHuPRoHS7ge7dgG5tp1BptyXsj",
  "key46": "FW3JWeyv5xjPD4igFXcapr9s6NHHCoiWq8pkPZ9n7ShpsYJysAkSixJpbhmsTyECpyTXhLQvj71N6uU7Jt5CDDu"
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
