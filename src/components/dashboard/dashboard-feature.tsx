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
    "2o9RAt2T17CJyCRx6QPR88nadidq9We9uEa9rusvYS8VbumzpqFjWUJ4bsdgnmXYj2d5HHdgN5wgncnU1iScHvLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RyQauPx356ngcY28jrWgPGoRBAoieGKunJDX1xjJmu2R185NMi5R4eU5JvJKCSJ6z7uCpMWhDqFMH8nvGyVD3iJ",
  "key1": "3YSD5FeAsF1SQjm6VC26UsebAGWCsXkA5N8NZTHN1qHFPSWLLoQxnJmoeUY7nd4jPt1iqi7b4fezdJfqJxmVL9HQ",
  "key2": "4aXmm1AkfG1CHkEJTq8KZYcnAWmXQB3LNv6y6C8523tMmRqx1ZSeTw34zjmorPuQobk8XeuTneRqougoiVGxgRpH",
  "key3": "4NveDwnGknSTgqRoE6q5PLn96BBo1ac8HWDUQTARSCeChjGfZkKpaBoC4amNHnVnJ5sP4injdu5QRpm4S79s7jLp",
  "key4": "4dWdianoD3pZDQdub6tfBPfqDXe2cVqCsTm8xdrZoe8CiP8fykou17fhB3M6PDbZTJrT8GZfi6SWVLgE7EX7P4V5",
  "key5": "3opMA849AfaTNSj9xWAVQUKE3msKQL2ZoqCAk2heiod7M41jd4KvZAEZcCnq4Vhb113Du66ZVwKnKcZwR1YTJdWp",
  "key6": "7VYHneX8qmDAQJNgrwMSUaCqQjugd7aCK1mnQdijQq1u3Dvc5cbkyMwrDuuT3ZboBPkZCEt75q24RjYitjdMDwc",
  "key7": "2vqWSKcWMfnfNin7YpwFTBZvTjxYmEufjaXjtDhD3Kc3oY68edATanxv13pXDFfeDqGoxcz6mveTEmQJ3dkooNJ",
  "key8": "3RcwqorHo8jTV95BvyGfZtytU9QMT9mP8xLmUj1AS9cE3zX4g8JTwsa4BbMLgkQ1ZSU7S8BYtHepAaGcYtWM3Wan",
  "key9": "vPNaonxKC9Zefv3zCKqfeiWP5YJshAgjxgWVkpgxvHckJcnkU9Aop5j8KHCf829CXmogB56ZvQczskysfvsnNEN",
  "key10": "3rZNTy1bhy93JdaSRdfF5aQsoBvGtffTRaApNSRedLxoHKT88FvPcUcTKySLFXuy7rcWbSTi1rLEjNo1gwT7S23v",
  "key11": "5VpJTY3GBMCfcMBfvj7tcxQ4L7QQXBWSh55eZb7hJgoT22BiHyWB2ubZDw7J4smeMrh6mWUPyu1AfwN747v9EXVm",
  "key12": "JeBgSwNHGbVoPFVQk9gcJX4sJEy6R5uXQ4PmTEDp9BkuaCJCgRjqLR7i1Qp3xiVNZ7ofkx7oVUQzmZAtxGYtMsN",
  "key13": "2eFc2r5DYmHD5hTegfRxEV9kbdsJKGCAdNHb7N8PnppBekMwx9nhWcR8a9Rhs47EBiqCGVQgwebKATTtaVXxjTCh",
  "key14": "2ErWGUSDAoZ1ttFpZdmtUxX8TTK9NvcmQW3aP5w5ocj6dpzMe2wg7HS2NWkwH67RnB1PtnfotKVHLVwBtBAXkuMG",
  "key15": "5JJXbBccpjtZH3CN8BzwZtSDhpVaiaZWYTvmgrVT2tApQU1Ju4jeWstEM1tYqyaombeJB6CYUGUVqhv7u618Ct3f",
  "key16": "MTU2pRBVEuqsng2XCNoLdnhCG58B6MAcUVKTjcsTgzgi5s497JNdiGRq4w7weSBSypuBeJJ8CpHmcrcG7Mpg96n",
  "key17": "eyN9tgHjaj8TWHh8L9KXBS7ZBxkGD4Revb6U1Fy4rLtBbJDdzaRRbkvt7UQfmRZPBYqS5mioUzZpqQ949eHGtyw",
  "key18": "4uTenguWvcggyGAAMnF4XTPxPhXtpj2NGJMi1gNPqxmX6Py844b4aLaz794Ki7P6YzYc3CaY4NPaxbdGMBDZ4T46",
  "key19": "MpwyqVe7tf1oFp7Rnk6MjuUUXzDvbEHQCyxDFzxRXjfREbh4xxs5FoAkV7DA4hM4cogzrz1mMMxriXLd5944pWE",
  "key20": "25ZzsKr5pG2R6bW7npBbaYm4mMhKrMmBRCL9UtahpnHzLxAiVxYEVBC4jbffk9vrFGe7r7PCkJchADHSAzPsEoFZ",
  "key21": "5wVWQRRwgBChK8AVQnPDHHqKu2rFwiNUxiDieRiVEBUwqVLVDnDL19QGwWG68kMT3qA26EadFybr6Y1kyiYkgCAb",
  "key22": "5c3D9bc7unK3DF2awxYYUfniAt5UwAeAikun622Khc79QdBgAn7uWM6kcJK5bpXKNUuddq39HzAqsPvqMR15J6su",
  "key23": "4rF9fQzFNGE7LPd1s4tHYL5TfDXEbdHsXKqHvbubMcWWuFfHs3bVPsmpbLrop3q21rAYmHumfTwV6WfvJTk4Yuok",
  "key24": "4odBKfHJ7WBm1PqC5SGNPTsCK2Xz5e23Kve9XYjR1s95w79k7g7e8wF87uikS37jdqGj3NaetAKmk6iyytFKvz7E",
  "key25": "5ENtMGCMkzMuZUDj62PHgrBq9GYQYYEMGLmzDXiEgcDf9nufCPtN28jVMDdjV35EmVeq4Z3oRJmUowmiD3jw1FeX",
  "key26": "krReU6XMdqBmXiroD2NsWKv8KwTDa5DzwrFSXooCjnPi46odtNxQKCTqxFB2xd8e5jZTj45MajYiQSmmET4f3FZ",
  "key27": "5Gwq5ZePuBKtfYjJCxrknrrWSipSi7XqKXdcCzNV6jipWYHLNZ7edzyW6R5hwD2ho6th8CZ1aHtdJn8aYT53TK5V",
  "key28": "56yYe1mQSwkdeMUWizMrPfeDZVaqcEVWmoVjbBZfUXCmGCAANH7eXFD4uUN3T4XWqtU227XhLLczieVLcianZg4K",
  "key29": "2vAQJPFLdTqcN41Rj6Bau22MJLL7qZiC9GXpN17UjaybS6hCQfDSeZD4X8NeFQPEnX6RMCL8DeE5b9wHviqEWhyZ",
  "key30": "4qpmE2w3XSkofN5QkjovMA7nP5Q3PVB39MT35wHeEm5KkY3uo4mPeQav7CsaqRD6XbuZXck3APnmtNDqtct3hVsQ",
  "key31": "2G4MJMbywjtESfZrPb2UE51D1M7uDaKiNe9eXQoWuAfCE8FrWq2iTeWUqeV6U1P1qT6t2qAHFtLvGGTBtev1CTeN",
  "key32": "4kNoGAs2vzYegYckV38xzbHSfSNN1K53z3pA8mZuXRUUSi1uzY8HKuJoFoWQw1d76K6sG2ufNeQBHCYL6Nm6m5CP",
  "key33": "5vnoLxaPCeWsntHjvpqbuP6Dq7GHVpE8tPhjPcfNirBazYMj3z71QxT2My5TKRmSdF5j5LDjfVdRBhAPqZjXpwKv",
  "key34": "3yAAsJBLDr9vz84fjVfgXQD5cBazUX2mUKFLKS3H6vUxqDA7jonMZkhEtyneg23G8DsoN26gvG4LcQRgVmGSXjaV"
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
