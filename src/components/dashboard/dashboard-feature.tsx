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
    "4RRv8nL3YSwxAhrGGTX9vthdKRMpD6bxXGKATCpfAAVHC8h4By6hdzzZ274RYrUmgxGYJMDScfHkehAH75oqBN4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SEwh24cDi4Uugs4V96AvHwmBcTGYwmJKyom2nwpSfmEPEbKqJX5KMcvBsMsTLpGLxh3iWGZUQA2QWq8JRdLMHNZ",
  "key1": "5nZeJhqvvCPsXhjgirCmQdCjvjayF9wigyYJ8ifpwQXQ7ZaKQDegPJ1PtWbenWnABgDo5185sXWUyN5QZZb5QXTT",
  "key2": "uVkJASGPi4Wcbw7sDLSY8NjWziXqyeH8GzeAP4DauRLAPH3anRhcEKQEoqKs9kVzbi86TKUWdmV1hEyaQaURNG9",
  "key3": "3NtG7cGqaHjGjTCZa7pDX8Q1HgBsdyXHnR5uxt1tMqSRpQJh4CEbmS3TxKNBtzAhtC4vtq47Dnv6QxycqVfYKu8s",
  "key4": "5X9Uhu18ABxnVyuKownS8oPiB3KtiheaqjMEjcJRE3hB9pg5q8ZWZm95oWVBzuuWrwWTL4pfMX7tf2ivuHhMAxKu",
  "key5": "3R1TMrffLJHZ4uFGEA8MEC2ox4fKN33B7ozYXW6wTeqbB2LnHF9uKAeeHZ7LarJmN6LYvVYgMHenvei3xaVPDk2a",
  "key6": "2cnvESyk3nyFuxxKtt4Fran6eGYVkt1gSzBSv7ztEqXZcECQzoqQ7TcEBC3ECKoJeHcTSkmiewNHkcto5Tr8b4eJ",
  "key7": "38Zct3JESJABmjUaQgbYvSPEiZMpqHepDu7cX93efE39k3teYwnkimrhAht11eGW9yHS2QgxC8hBDEt6AUUJKxrV",
  "key8": "2DsdD24CALEWguk491Wt6AdM4njSq1PnkH58CMy56eZvWNiFJ5PRpx3eRJTACYFMQNHZoYfcZ5Jm1cWG5hKKVuaS",
  "key9": "2p1yqsj65mQv3cJ1JVWAr69dTY5SiwWHwDo6tsKzLAbjiJ5XZhmreLqCJ9kJMJmFoKkAKqmznPQLZ481Us785SE1",
  "key10": "5bJRC6VwndPjsa2w2T5UQY6yJj72o9T8YqSjJhGgWfbkpphses4qKuKyR9TK8VrZyV2itPttDuE2wyxMP6Qx5PNi",
  "key11": "5sjRqcaAWXDYN7y1Uah9LjQL7p9bBfMJkh2xCyrPDaqEEf8mvwpKDrDLAUqDqfbyxjqfuThB9de4bXHQXUcUUv6s",
  "key12": "TBvMm6AZXymhPK8XBkXnFwszhRZg4imnSghtNwd7noVVj2DEKSFoCErp7JmfDkhH9br9HP2425yGvGcZd2SZsc8",
  "key13": "5KqwMHkz9pcB1WFW4jge1U3mNeafWq8ZGuifrmG1CohTxGSKKoca78k2kVNSZcddsgbZ3cNHAekLy6Kewe2jEMAZ",
  "key14": "5CMp5TyX3K9XRo7mqRqdbEaSp4deGFJTfxSNMwEANGXT4zpftwBSLjbnKkncmtqtFzqC6wneBknMmNmHxJuhzpJB",
  "key15": "cMgBbFcyLaABYXMBAXCtZ5CXZpjrnaSwppr8Wc14KVBj2sspAyYdcVmnqeiAdfi9cuQc7jz5e1P3gFxuEAtpr48",
  "key16": "2Vckvw7Yr5FZRffG7Ug5AeEJrJZKQVL9VySBnXaEo2YZFkdtDF83SbeGM59dcCxWSAGWyMQKyb9ezEtPuLgKt4Ao",
  "key17": "3EvihZpLY5XddGgMXLVHNWLtQuJWupShQ93ZRSh13Eg5d8CuCbTKtrJ6GjncG4ujJeL74dLXSsVwnuA45YXiUCrV",
  "key18": "3MuS7xqtEDdzZFcbbvX612oa93t7k3QkW5Foz7XwbEcGj4sYqQ5a8gocb9cFap41yXi2tHL11DyjWAJNnK8NrGVs",
  "key19": "3KHxFasP2QrbKQrfwokLkndUbSsJq2AME56FBznQNj1uXQbLBbQCHeMn2xx2rw91q3rTNTD1jMEorvLaMvg8xowi",
  "key20": "Mgd8Vn6UuzsaGNJUXCr52j91LHFs9jvpwJTvpWh8gzmQ2BA8GcbcwqqRa1kX3SMFkCBhLgXD2guMR3wijtzxBP7",
  "key21": "3pRL5My939qn8zCfLwGL9cHi5iDz77dLoXwrRaQFqebwPzLHXuQeB3ZhLvaDrdNTm9wmaEdPzM3WVhogfTb1mrXe",
  "key22": "5WH67wsZn9jswoLNkgjZsxnhHGir1CdG69AkeGHL83rLsuhv3jtwDdQUw3ZkNfQ1j1HQrgrJ9ZZj7gEfQtr3sTYZ",
  "key23": "5J6p2NPNS5BVBEWRGh2EqvwqBt7BHhqnbHwCFfJuifArHqHVetP2g6JeVxpyoY5KBzMQyFGgUDroonRxbw4Qwa93",
  "key24": "2PN9WAPhXTrNr3KHG1vKN3ixs3pJjbcD1UTVKF6fLtpYFqZef8StSx5a1Trrnme8Sk5h9cZSfNzipDWxBr7MPPnK",
  "key25": "5hGF2G225BficXKbZXAprragkE1wwiPtxo493EDcdmSpQtNwMk7cq9xphCcYT5Ukoo8khKaJA52vz6virhPaMtCh",
  "key26": "55TAKzuauQossoaWnsX52LhxdH26GpZSS77bPNvLF6Gag46Se3GnPDpKdeidH4howsJFGoqmEGnvp1U6rtkWYhc",
  "key27": "4x2YWLxpkgJARVmori1oYBwhHhWZm3LHKA83XWUw3SwRH39jr3kD1AdCni7jiWpvLAjBBX4FdYt8CoNyS5Da1MXZ",
  "key28": "51M8GPMc5ipuomvS9rod2aZQ3wraToubkY4RtS6AcS1ssnVLdJpSyNPjnuDCRfi6pwR67gkJ53CsCSo7rS7HTEt4",
  "key29": "41SwDLiUJ5uWUzkem1q5tYpf6mEDChU6T5xjreF47NukR7EpDzjruyq9uWYwBSQqW611TQfzNZuYngRouNu1M8KH",
  "key30": "3ZokLqt3CJ1hNwihnqgHRRTMESBJMsbb2coM5WaJYYANrRLCZ9n1AEV45w4EJaK7c325ukTbA3CDX9CrJipQ8EDU",
  "key31": "3BJDxCapqitGcDj1bNz466Kq9bHLNZAeWbHD95YL86EY4JYeyce6NzWSij5CgyW1y56Ax5tZ5WhVgc1SsoMp8Cb",
  "key32": "26ynjSpmZ8Sct6LLUiLx7XMqZ5JMEd8babP5QFsGeVK5RqHP8JqE3HSTfiHjAMNK9ZgreiemLfTg9k5KKfUs24F2",
  "key33": "cbPkhrwyvDfkCeJigP3xAN3hijsM3E1zz4S2WEFcC9orfHNJkDQBjVXw3TSZKiLV5YBN3WUWevcnqVmFZf1SSLr",
  "key34": "5Yac8oaNEJ3M59gSvbVU9YK6Yn1UC4cn5ukpXcar1jouL2tfKVNYDWYVdUBXzj1jXob8VgpzJ3Az7KjnVsQnzY4V",
  "key35": "52LPyrgBehM9iRET5SPU4cQXDSXynnm8jNc98YNHbGt9Tn9dmvs529CxcNA5rkS4jBfurCGmv82KUgbm8AvVEXTD",
  "key36": "2TYu1jj4NA4pPt3ZXMAbU7aS84akAhwRUp1fYPAXwt8nwRh5wveKZhLPrcrZqhFo3XisTeCaFayjiykAkYZpiHdH"
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
