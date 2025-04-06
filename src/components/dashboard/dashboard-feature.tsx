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
    "tKEkcrrdgfs9tAUK8GaRaNV6HZc61vQ6akQoqHEqWit6DpEfAumt8f8d5sz6M3eXr2gkahajC9wUaAuKdSEKSPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44cYPeEHqJA5kQPhFSf8xFLsmBi8LeH4SvLywcKfLK2ozvkJHoByjkEMdguXHWGTJEQZAeYwXjqM9jhmTpKVLCk4",
  "key1": "2ciyndBteFxXQvdo3UsuCeS59mA7KEBb8K4eNxLJTJgpddhczPuxj2zfcPahVBamsBFSbU38aaFxCy7ks3tcihe7",
  "key2": "3JXgRXo9c8YxoXUx4WAUTDAy75nSTnuBuGqPqyVK6j7ZEF2iYjv9xNsWdJFe4sNArpX2QCsHZNKYg6obDNsHx4zF",
  "key3": "5hTwa2JrkEmDq3z3gniTKioUe137icfj6bf5cXF1wnp41KPreaZiyMJYrsfrFjjsA44AkCoo7FkhpMxHQ4SWeQ6i",
  "key4": "2yrQ7jmQyfQLz8EtB9UdHK5DLsUfdaj46JxKJGU8J2RivB5kaD1rMtctCA3zdM88FuAGuo3gYi5vExwz8WUzWDRM",
  "key5": "4JNZEibmVGLfM7RxSivocieD8RNcorxiDfJ3hjvNkrdwsHjDJimNsfefwY5aQD4Djb3d8nUFghAw7NXQZvfeYmn5",
  "key6": "2JD5S5nB4sv3Mp7CURziqk2yzhRwamy9x3epHcv7n5fuB2z32j5QvGL5kYYiGdXYzjub6WZMwunSdabtVfJffCeV",
  "key7": "3MV9XssLPvY7cFdaB3RM76h3nNvnak6CchAbwyCG8XygZV8wpa7MESWyVY9vwiYFptHvX2NiAxYtNq9qTJRL99tH",
  "key8": "2tMxQP8Rrka4MawRGCw1tkHMrsVh4mqMzSDZ2TqRRb1fWqv2xntHRa31RJFGodhgB7oVfx5Hnk3zWvYqQWybvAVq",
  "key9": "63YxwwQiZmdh8tzkTxHLjDaTs9Rtka2P3aKyz2rHriJsqCPenyTUXwJAJPfLzfqPFVytdPdriUorNFnCN3agdeT7",
  "key10": "4WZt7a1TeUyffUv16MGD43RDCLF5TdA6mNNjJuz5br1Qt6BG7cbxAepDYbNsFQ5NAufjMq5RdQMXLnEpG8s2DiWu",
  "key11": "5irFJJDiUmDF5BMxu8QEL8N7XeJvvuzR3fJTSKquniveuGFpT2y85xPaYY5r2gsk6bprUHzD8sKDzXxbt5hRyEsC",
  "key12": "4q2kLmgtUGiAMFCBSMiREKAieKDLVgGqzYa5YtCC1JFJsd9U3UzKQRr3M6tnHywL14pCi2vSEHfguyNjc4qgjtvH",
  "key13": "4DQrLhpmr53G3TJLYAJrjU42N7ZgkfbVvEJhq5kndnq3raWv73zjsqcyZU86WAZYt1Av1viTa5NjPxFSH2QKzTk4",
  "key14": "2ML8ohStNMTLXF3S4Deyu1V4LTmvXaiTuA6iqEWsWWJBCLWbEmLDhw5UyaaRajNXGaNQi9oPjR21vnVUahZ1TwBJ",
  "key15": "3uHnG3Bx925GPeyDgxQbsdp33GJe8efizmRVwpTVzNkEuZwDBH4Erkboou4uNr93kgY3vXW9bzHWfSdfeTFyhSmL",
  "key16": "Rond4i7MtwZDKjhPWDqxFmb8VhrDVKNcZbLZrY4tCP3gpG6mASnaSM2rEvcT4nYBrzoHZ2Pr1unn3wfWigxXRK4",
  "key17": "Pos3BvffyZcKUgLd71mxr1PyvJkCk56ypAZjhudawoygfdbruBiaUK1XsykmB2i7sH585Wm5QGS5UuHp4UwFJT7",
  "key18": "4aRvtMG9rXvBZyYA4DCsL9mVetec3M1he7opzSsWdUbjWMwyiRcgEGw5GZVQhdawqZbGu7tPjBjuvkhqYz9VKWkV",
  "key19": "yR6RPSVyu18PNDkbk2nMGLbqSMmWDaiWyyjtonnMsYmuTLx6qzUhDx2XC3mDSxZfXTWQgTK48yvKceFTzfTUHDv",
  "key20": "5jtnnBPUaWVxDkS32Cb3mJR6XbUfDKeADcLHV1YCxeeRraUEqYyr79CcrdZg7fAyp1pwk5YCHx6yDHHd5WA1We4W",
  "key21": "4oVSSTwrjYGkTGQ2dV2kcgMMGaNuSu9dZu6L7JVdcuUg7UNXyPqZab9WZctNK4ZsJepEtXTtqUHdtqLxG7wzNzyc",
  "key22": "2bjUfLXE9mh1i3UxXbfiUX8XBgTsJeRnNXRdtZLdbHYGtWGD1rgPRJCV3vAq1yGRAyx1t6PMLEW2o516wEYY98qL",
  "key23": "5smWK1HiPzNa1ucmiNsFwPZESXjimmxY1tkrTKN1Ea71bKxFfUG7sgG4pVaqHiBZ8qokEMiXxpgAKLyEa39DkwiD",
  "key24": "3JW6gvFsYi7MS9Mirmjjbr4mWXpwBQqLjm9YkrvCwwpHE3DbXQ5yjwfPRCcJ3b5q46vJUbUBxYHt9orN4hcUiXuC",
  "key25": "MfaWHxpXGdK2EhhxiRHrJByLt7v9qcnFnZDHhufFWt2Mys7CamPRDfEAMFkhEdTVJkibjLXWmV4banh3uALqe3D",
  "key26": "4r8cuzVWrksivHjV1t4GdXQhkDizhRkHn1XQXdQFb4KndJWrGRHq7DA2gAhepWESCiY6bY7Kj2NtAQiEYXNzvryq",
  "key27": "61CiiNQvaCPeUCsocMpuoNqpiRftLzvuu2TDr5yY7gqAB78kiEDsVSFnXSnRKTegCDi5wS2A6F72nheY5kA565Zs",
  "key28": "GzCj4E2L7CLn7ZPjWho7cxNeWr1RJuKT3QnbxmyLUS2daQV6xYVUyBMaRFcGL2LEydjNtMEu5MpLAk5Ufmec8Rn",
  "key29": "2tWdaHrGNvStZ1XjATofn44BkwJBmryvV9Y2f2kQ4K8VuAutgNWpmXXWYrJ3QkcoJo7Ra4a7yH9R5fhvDKnSHr7e",
  "key30": "4yFhxszCuLWfANMs3fkPqRJmks7RkTn12UbGmRZ8ngsNkQfDmSApXsMK2VEFevDWnppgxmoemVZmPaYa5d7CmVcF",
  "key31": "3VTSBDvmFAMiS1H8cmSkJF8LYq2coYD4g5pjdPYsMDPvAdPj5fDQbmsapV6DBGdmW1UyDHfe4v4jya12MCYWy6WS",
  "key32": "4h1Sg6NnhSdUBkvgv4kQdBoaZXYVZb84CokA3WRH7UZaXWYQQPbtSM7DGiULUYNqDX5a8j9o8TvyKFzzrRx8jsQC",
  "key33": "2JoupL4AdAjeYw8NG4KNJPRzfCHTVetGCtGHehSdwBvRK4wx3EgniP5DrAnuGyRR5V1s4YtFmcNQkqUzVbuxVMfC",
  "key34": "4iScCqR5rif86Vb1AEKYUNqurkNFVSB94nUf2MKMjTcjG17GtxCSZhdz7CDmcQDtk5aaCk1LNjUgXEPZC6hZ4JiT"
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
