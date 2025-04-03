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
    "zqBnUda4nT6XVMW93P5Djj6FAmsKLRek7wfHGZwJocFvfYsQRTc6YVEivnQ126mK7J8Y6KjhdqKeZ7AKsLkzcsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c6YgujWzpMCvZAi49qySZcWV3aDEv3J4vypLuNoiagN9XGPBztEKMEcvpJhv4MxVV6nUJ5Xnnuqm6bJW461u9rj",
  "key1": "ND7Pb9o2ijXLMcUMBCJBBhhPLvwXZoKUyE1dHfoboABetYhpjZ9dX6roNjTFyq4aXFyY3VzHKAQVABGo8QJpuFh",
  "key2": "4PeUqcBbxASmRJ8481WdHfVAU6Ua6XcFKGLEcYfQoPVZDQKd96eyDKnXT9cwoqjrg4Y6q6LMNTeS7dWvLdFvfVib",
  "key3": "57jtz2THZTKHjXMiKXJ5RK17acV4hQCkPJp6udgUfRh6fhUzFAxE32vgdgKieAYijDjGD1M8JSSyWnw1GqAMWiFX",
  "key4": "3VZUhF98HA8dWNr6wWdk824TXf3gPp7RJjQpfFBq2qoY4FMQG3TPtaF8Kdqpmd5KwXAjJihPAQ4wYzGF39FSutGH",
  "key5": "2Rm2vy8o1DoR6PVhPjS5L6ajFaE85yk8f8ZurCpxhiNu5Gax9pvDUDiBTkWcuh2gxBcS9NN6dJtwNZhEZrNRckNr",
  "key6": "BCWnkxa4pHedhSEHayNFozrkBYweivpzYu1PMFG62cpdUYJD5XYcJe34cUZbk6FMXLVU82jkQDDPQZirfaRynuz",
  "key7": "4t4VDXAHpaJ38mxhLLVyrT8X2DWTMXbxf4XgXU9gsPCxvEXgr2v9AQAsgcZ6RYg3pu5yZy8zfHtVo6XkRVEFTu31",
  "key8": "2YgWn9YYBMurBv1BWnmHDPpmZxGU7ezxkPWs4L33wAU2WtXY4igT8dntnCALQQnkNQwUNvCmCcACV6dYg3zPHD9h",
  "key9": "4PFAs9EBVHFxH9pNGaVjZbrjSwqSKGS6xGiUyivKAGd4V9ibEfJHSxr4FctdokGboFR3qHNfG2fkeV6cmEcFUrbb",
  "key10": "3mD5h7HBnSxxDUZH6ypLYBEqVgjANSQaJY75RBsLqwJy4dv2qwgGai5m54oeucDUwyHHYB3oTJ1VgzjAD8Rw1uVE",
  "key11": "31kD9HvFWp2jpAZ9wn7iGWeHuV6KLEYgS4saP3KQsy9vx2VNQDqgeZ65MPGXbuxhwVKGvt3Lsb1HjsA8ou8JNMV3",
  "key12": "m9kwvHTTZSHHRtfm6PCJ6PNLnQoivh9rbwuh6Hefop346VWmVp9gfC1ot8BFES2t1mmsyMgwgskvbDExkJ98con",
  "key13": "qzaT5qceoXxEjzBeEizasfrSN55bZPugewFbASKcVmz3Sqq65PRBaCxdZ3kz1jnq67c7gA8uE95F4Remsbmb44m",
  "key14": "48TWTyq8nKUMZttob1aSibJ4v3VwnyVpsvTbVT4gV88p87zXZ8xJa9A5SPvEdXMR6erVhk51sNyj3kyaXNUhoVkc",
  "key15": "oTcWD1ype2J8TancTyFjEEriPTHxHS5KCukj86qukcBARYKwR9GmZnyr9RvhSMuSGbBckroiYwvConpFYmFxnJA",
  "key16": "4B5uMQmXSNKW3x4Cb5pgfEhudYupSbQ3LPwnzZf53nLDyxNqxNXXUpusNMbpq1N5e91uZcwUGx59mK67qE8MsE8p",
  "key17": "3XBX51yYFDujTa9q5TU7rV9Vruvwmj4AUCtM1nMPSUiswY1mhng9H46cRJRWm4hoSJhNRGLDBfAmaT8Rb3YMDYDi",
  "key18": "2bZdDXYRegUfrtdZYN2X9WdFAUvdZzs7Tr7fF1syKq1d2JzAneyc3EXLyCDJUa4xcNPGSqZLu3f62qJNDjjnS8op",
  "key19": "4qqXKt5iTKsiwfygrFTP2GmJRkEZaEGCRpUVzs1T2ueXKDoHgXKWtejgVKmJRjvXbBdrA26EBNXBuo6Zw7iL4p23",
  "key20": "2iR8Y93dgPWCJknUiqSqssmcqJfgkbdhzo9jXVWWBdH67v1H6fZF7i41jB3iPiJ3WNVnUhvkYDpx9Axv8qvBy9ha",
  "key21": "5jVYdmeNtyK8xt2AtyVTFTNRKHnaUJQzJA67KtQtxvcFmiAQikWuUykU8z6HA5LYGAHdMi8A9WVYHru7WadG6N2K",
  "key22": "54rdpdQAS624pwtN3yUkN1jGYUtNik55m6g55Tcb1QYuaD7M98Q5TVRmsanxiAW5xjM8DQRrndTgs7pa7gA9njhE",
  "key23": "5AJrmTNCGEAse4CKE55jH8PvpzW8Q4BV6gEQ6awD4crgTYkrBqcvzEePozKugjRR291vtLfvNphrknpXuBa8FrKi",
  "key24": "2Wv6TvcMRDyf3PN1TfL1VCebA4Aw8iYZ577a4i1EEsgVq5RScKJ7DguA4g5LPUz8Ab9oFkpw3dLQuGCwJkbxF4kc",
  "key25": "3R5F3kzPhvkKY34tpXpKLc9iUGXX6hT7uHf38mRWhAGoihaAtiLp9MjZzkH8ps6HzNtXgLKCeEMZiifu3UvRDZgc",
  "key26": "2tF5TUTFgyLhYHP2CKVV1fnLpxZa8pA5K7z9CpvRFYAxRMPirD8NiBBzkn6HZhsmPCC8sFJ9bCK6V6XXqmyJwbB",
  "key27": "5zybasUvNh1TgXL3DErN341K7pfE1s4Jp7syfnMmYSNbkupYiBwQWsN78iNThZKRjfmGvdAHX1LFFordpeYDa4Zf",
  "key28": "2UxwDv2V1siR4h61MmNJYjnGZBWaSrqUQMHQ6P5F2evMxdC5YCRBvnwPqQKGQUTFmV2Pv6GsWL9NJZrq42n16ULj",
  "key29": "5dgS9fYLpjvnEN47os9AvqXz41pedULLaXNvB9wcaypYxgUZ2JCgDkhA3NF6pk8GZX7n2aRBj4zqzTCEcWD8LkJJ",
  "key30": "51SNU8w3j3MhKoKmWF8go9uCg1xcY2oHRqCWaoQnZGEaztsbJRTBXs5KaQsUp6BYR7wbjgNed6shEy2piXTLJvdk",
  "key31": "4zaGDzZRyqeQeRT6CFg7erMeXzwcRAVM2ZJJr2usBA9AhZ26s1w8ed9rCKUkjw26kDLsmkzk8SFy8TyPAjSwNivM",
  "key32": "4ywJGrL8X2o7n53qExgvMjSGyEoj1NuQM166AtmNurVvecHxdvCcE6avC4rwD1kB2T3Rh6VbEnQrgkmaMuoEBrwx"
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
