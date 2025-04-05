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
    "36bQLFr52K3Y1q7BWxZJJBsGLUWPmSM5JkYCZVemB9MxDDEP9ieKNNqxQ2nLSzoVCfgbnUkXjiJJWQtkU5a2AVDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDDdg4Y3JCASMKK8wy1hWhezbn4iXqdbXZR8BdUWmkRJhA8jZ39Eeu1f3s6YjKiZbWVBEVhJth6i2yN8rn8sZjV",
  "key1": "59d4v3mR5Vj7tEWKMf3CuKyRrAfYQ2jf1RiHhDVVQYMc2cz57HmZVDTNJ1r2hPV5C1wgXxSBTLHywV3zRevsP9Tb",
  "key2": "4WL4Wm9TV9Xqm1pTCc2iLWCenHvA7nmnHD3Cc3Sx3unLDrnWAquc45V1C46S3kukeZkQ2CTve28s7W72q6EqnQs7",
  "key3": "4mQvmVtLSzejtsQ98L1JrfHm4RgZDbf4nW61mWuVqQUz7UahoivqdeB5fxdJ8rW4hxCe1w8RBUvzq3GbA8Mej9oq",
  "key4": "76dd84XbqJsbX6S3QYkinUR7msjU2CYJHeiq8qaY11svfBomYDH1dysPgivtTbUjb2Rx51TB3zP8yxyGCSi5B4n",
  "key5": "mujKLAzorksV2qLLNGbZ7dV5y8S4PYWbco1SeEp371VzxH4YzwfB651yd4aHgHDspiWF74MvD1WAGc4JUEFu1PA",
  "key6": "62pmESPep6Wrhgf3WKdoyaW3918REixcHaz5CjYs6HAoBnQ1Euj7CBMjTy7mE93sYjcMiQqMXfxxoZLz2qKmjbkp",
  "key7": "4ZhkjvAEfbrz911so4pf5ADnxnsbinMzFGhChEk7R1i1kaKhF5krbYkvsK9aFAfbYpJLZpwQpV2AfSyojinoN1eK",
  "key8": "4E6kxFfE1osdrRUfRxy3HZ4Q8pJFShfY92wP2nEoPN7m6aruESsKcGsZfoRVyuCyjKKZzK5tg8WuQqjLbJmfyKLT",
  "key9": "64WVwFpfabYpGyS41pgcUwKFttyCDPecJpXwp9zgWDkq1UkWicTbm6qGiycT6cskc2YUnMvGVxacBRXAYuSmvgk5",
  "key10": "29SRgRJrwHTPvc2vZhhDdybZUyY3NwdTeNtyawtivgfsZ5VR5XQcpwoLKWUEuT7CeoPWRBF5wrbWPfEgNZUq9RA3",
  "key11": "5iiHdoZgyVnK9nwAiuurA4fHg3hALGYcA5ASRy5kkXGNqoseV81qmdzeHGfz4Sh964xj3vxjA125rg8Wmon8VutG",
  "key12": "4tqFvMKUK8UQ4V8c3Q8baR5CFxAdQLAu1CFJRi5K31yaAWJ6u9F1oz1gYLCJh1eX14u6vCdQRZZ9ZbUrneGLj9xC",
  "key13": "2zhewFgk9totWaPLcww1KQskdTnLk1CmhTXg8ZWwKhnXnPG7pt5MemaeMaNdK1ZkvkBwKacetV4xEt1BB1nsykwa",
  "key14": "4ugeBQuZGxaF9qXn1AMMQ34Mgq273t8fbLu7Hp7HbsS17doHRGoVwiatTVAkBYxcK6o4r4e2mm4FBEMK4gbvriVG",
  "key15": "2dn2dbyA3H4f2eFotQ8a37haFH1LKjksvSfEW6rtBVzv3hEEgPuEGWhPBZXpoJqf6V9LEZxGHofF7CBMM16JrYRD",
  "key16": "2B5zG3UC9DC6ij2ptQgk6fvHM8pFP7ni6FhornerTh7WtYJpwXJLF2NuRGx9UUwyhd7fGu2ZHVbJfXVj8MGAdkG",
  "key17": "29AYA4LRtquj7eN6AhYnXYoGiUsoApTBHtvjyVLtvMWftgRnCcPrYDtRcEAXo8pKpHnPvUCCbVuAerSdEXfDKCZi",
  "key18": "4WvjJk1GmPmTAqyxKu8EEqWPicdAuuPN77id47P2aNwVAwT7PJfW9NPcgYiws9gRHdxdujGxj5iPJE2wRfjyzebs",
  "key19": "3ogwaUUre3p8T9UozQUPznz61DLN88CTEoKrw11ba3ZKRMeh5Fsnn2Vn9Lvq6xbNBjh35D247EcqSxKyU1MyhFfX",
  "key20": "5ozQfxa19ndjRPMb9TB3679phuDf5MHXpCQTTphpi8WpFohiWt62kB9p7cRyQUWzyLLadKHrCNBC5mBzy8nDga2c",
  "key21": "5qLz8bKSZn4fcE1r4maxVWYA5Abz6ZzQN54cPg32pFFAwqV1isPsL7rJfWuPnwwc2sAghiCyV6QhSMZRzzXQxdL5",
  "key22": "4dAhKjFzh2vnA5LW5ocU9RM2uHgZ3eahS1fhtokuGSWzWoqj2q29B6cdXtzJpY15m1AnTa5e3rsTTytncvPmnmMA",
  "key23": "2SuLEBC9MhkbpLkeBR3fdpEStqegM4mUQAC3XFhVnFo49vnWsqZwfdiv9FYZQ9nHK4qNYgqYBsb7tqHy6tiyb7h",
  "key24": "2pDiYB5DEKtLUEvcWeAy9SEwfX7kzHo8YnMrxC3cV9B8dpKw63xBQZC8rYTzqo8ePGCVSuWFMa36x4rAPw3htpBg",
  "key25": "b4Y3iMqKEBQ8QqhKwB2jM2WJC1Xf6gbUHhJG9PPkJuKGky5hm2WBNYZvjCNxKCQnwzFUG5owZqFa7dF8yFv7AKR",
  "key26": "3vkdJeV9xi67WF3MG9b41KbEuAm8vrcJb69k8cHzEZAVyjqnjBRunxHDaYhWcPaQS5cHhqK1eWMLiHh2C6Y5ejMU",
  "key27": "u6tgSZNwMuBapEEeDgA6r8ekapxXVMbrmVyk9gvT7TViA2ZWa47MFpDBiirL6zvLeYSS4He55BzBUu3P4FF4mWs",
  "key28": "52ThHjgu74YEgaysqTqjxWKzDWuFSgCgTE6YcVLEpp4yFkBGYaCDTWLeHQcmhgJ1a3zuLzU4m6Yg8MTFe7bV8EH8",
  "key29": "PJDrHXhgNBHMeAUS8ZnvXpG37uJwxKvnJwdZVbjQGrzCYUwpZfSkGfGrxTmmoDMKow8cxsbK8PJFvxvA1pStbp7",
  "key30": "2tYjxadqTo1EMtH9SrAQ5JCywdNpoQMe2JWj2NCeDMecDzwSN8eK2uHSFujagYNhVBXdDwxbfbrg2sDNyjBjnDLA",
  "key31": "2NCCQBwSEubwQ76ncznCzyJddUaQPijD85Z2i6zUGGm7gFVNJHQbeBA4WhD5Qf67HkgktrsXkLX6C87qRTK6JTFE",
  "key32": "5WkQ6kck9KBhEEDgPFvfE57uvzFS72NejNLUgWkx1iARyMQB1PwqfrWqUAhZbhwXNjBmcUTpPWtFsncWhhQECoBe",
  "key33": "2XuJgGqioKh1vXLjKrFhDFuHeB3GzH7PWYwZeFoKUEiLQDJdrCJNRfLQrAHrPp72MAdD1VAAQAet3CTyxvp2NhCV",
  "key34": "5RBX2b4wAxLa2cLrTwbJqjPpBo2iraNe8CdtDsa3w9hrZmF8pGQ7SwPZRodC515nUPiwF2KLJo1MyVLQoB3pFGNV",
  "key35": "2XjPbRyUxcKdBVfqRbGkX478L65A4vXqGXhnXNQT1JsHfWJrKzXFfcAWhQYuCEb671h2h3pRGGgVACYmFWw1CSo8",
  "key36": "22bNvXrFkVFCX63hz3w3VL9pidEWLCc2pE7uxsuNNK6QtQYnQsXYMuf3UfoU64gTRUEsPUPAZfgu55Btwi1Eb6dd",
  "key37": "3BPNgUvKm9f3e5BFGPccHjqxHsuufdYUR31QvK3ojDPSCJujfLLt6edczJA34XkZFY35AQG9AvhyFeccSoL3dHwa",
  "key38": "5C7Cy75EVV2VaPiwFvmWxsMijQgqLoqSvXpQcHSUxzTEFipfw7n5twaQLFfxw32ijuRsSDtfxKcDQcmsFtajpZjk",
  "key39": "671yyinLjWNMrzx1qtMbHohMCXX9wAoKRMedfmYWTLtdywCD6Bac3XsWKhA1j6xozHURJUiZf9m2SzWcQRd3P4Nn",
  "key40": "1Cm2xvuQhZSuPDaJT9qCLf9MsReWVzhPxdHj9rmYyjS6JJY79gnZCtqoNLeWUv349LkC7nxpo9R9NJ9y7D4k9C5",
  "key41": "3xnu7pS6KHrQjZRaSekoj9MsZQPGEkdPVDX22A2Ji4qu7Sniea5DeesHaCUGfKsAWyCsNvpb6kmbYjgXSc7NNaw2",
  "key42": "5svNaHoJ3mSQZw5UM7sp19QJrVMbjayTqgoCeEDs5eFNBeT7KGXv3L8NEFrnMMgCncqHVVPbELWNWp6Y1qYXKjNS",
  "key43": "5a2daGZ1WyivKinUMSi47C8YfSCxSsqU4s7mPiddicLF97Jp22tcC8ieeF6C2e3FXguCRw1AbyMKcU3AntGvmoji",
  "key44": "5pEbLHkQd1hUM35H9Mqyvh6j6npza695y6WCbRBxo9sVuMsgoKQaP2sxNZ92axP5bGWdo2Z4dH8hhkwTMt8Qhgsv"
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
