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
    "441pqtKmyi3qf6d3N2sTvyje4Um9hjKYPkJUCre5XLLWoff1opn3X1b2czHwUQpadJNMiLH2HKh7UyxioMKKqe8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7C2eHsh78MnTJX4tQJpdiTY77VVUeaJDvoZtVkFNXt6wcC77ANULg62gAfFxQULmCNRwEqiAoaJnCLrpYTThne",
  "key1": "5gCLAmJ8g7DnTXo3PZnsnAwQzhS6yQtBZazVM7LKp8aWwawsuPTAAC8LzwiAgEG4qJrhD4ZQvfKMgsPGnBUoFjxT",
  "key2": "3gyMXJxhmJXCek62PFPjcoecmvwGA9sviLZJJSkk3wovNjPRZtGjR51b3cmh1HMLjJ49waFc136w9Pk6Q1QAAEWx",
  "key3": "sfzpY3yvw8f3Xz8CdSU44H1sHTBef8n5HvZeFb5aR6AybNVwZKcvViHqbCcz4JB1cR1555qvGhZHurPfWo9orfs",
  "key4": "5EjqdgP3Zwhu2SYM8srtgPsXXkMRKPbMnX81YtMenvdfuVWVdMkVmyZBqo5fhXmN4mfjstfUFzfLwkGBrimqmdwV",
  "key5": "Vk2bkEr86ieAGu1faugP6CSNqXwsL5pwFTmXnbSVB8bZRMJmuD3aXGZzm24uRqodhqSJsPnwup7x3gdhiMT8XTL",
  "key6": "XJCnSXX4kP5cLedVDeH7AfM6trW1uZVVULzFgFH8CsTA5Z7apEsCzG8dvC1gPVgRH4ywKLRnt2MKx1dsT32Wxu6",
  "key7": "2UVZSjKjhNoJXrLjdS6arPspD3govLzCQZ6TFNYt43DAWmuSUVZ7LeP3TYZM9dJNj5PaUL4kgtAeDwGuih2ce8CS",
  "key8": "4tWSMrKRnDZsDQrKcE7A2wVcyMnD4BunNAbNKDFe4zcxUdvchpgpSt7Lh1GofDFxtK6YuBa36NxqwosAAeR2ZHaQ",
  "key9": "635xrd5y7xvH3wnxxhKFYnc813DrAE1HQJFD5bVXuQgENFAvA4Zd49HZ64TzhAnCdxcbcGH3XADh15837jDy55Wv",
  "key10": "49WsC5SupP3rLD43nDM8LjtmQqt9kAU6eUszQkiAb3jDXv13UjrJYmD2sY8GE7nPvrrP5cJBynoMjY5KW2m3f7hu",
  "key11": "2DYA5bFFw2DiLfrvhDXuHJMxz6LzoRPRqBA1EWBbGrvn5CKkhr8G6uPqkAjB1FGdsh3ffHZz4JTran3buJwy61Hg",
  "key12": "dwhUFuDnPK865AUS6LPhAM5Z5wSZPXahDq1LyQxCmEGVTNhMJDmpj3t9TH2gDzPAiV8qgDbozGKLdG8WkpPy8GQ",
  "key13": "3WFHZCeybBqxtE1isSfbW1RrioPDLJcAikWBFvfP1iAtHgBjDSwm3MUZ5qsBq9fvpovsjKA6Mb98hBo4iRyBv1B2",
  "key14": "4ZTGn5GT524GGkJqtuvkYcGbiUnSGYjmW8UpdKDaQgihRJVc9nH46P35QeYF2JbofFC4PTKTJVKwrPxyoAjh9XBi",
  "key15": "2nSqKDBvQ582R2io22TB33mRmuVJaMQ4ivt6aASVXx6ik96ZZmQeTvRY1LJnS3pgTR14CKs4uMcCnfgiSJmQWJUs",
  "key16": "7GK2A9x2nHmJXfysbyo7PCxgFSGaZ4N2an1szn5MZtRH8e3idRuomXzqh9pDPSzgvkhFk14pujiSN7ZxcQtMqcd",
  "key17": "4rGrB26fw4hcpKyZ35ivYCmZBUYXwhx1HHoHgXMdZ7jTc7eTq2NSEmViPv6Fkbxq5vd2GaUget8wxJPkxZzt71NA",
  "key18": "xg7euxWxWuguT1PKmvtCmmWLaLKQSnaJQGaUPW9LWTSLirNyUhoKKhyqxj72zYRRpdG7pGCd3yv2WuDzGqwZFYJ",
  "key19": "5ZtbCSLzxR71XsmMqkxsoArVu9L27Prsg1CB1kcXWeG1dTFGa54btmS4PejRGMbYSf9m1Q9nJ4kDsXu3tP44vf9E",
  "key20": "63KCzGUjzjZbhuSd3VvAcXwPoHq19GMCCjY4FpPr8yhc1Vwmn2pPYh3zmsA3yxWF3aTUq9cauu1jfL9F1BJBvFxF",
  "key21": "2cUSsAmY4hxPMsgQTdp9Aafr7PW5LpXotarYvQAiG5SH58xi93gd5NzUm1DuBECXJsSgWLBZ4ia3dWp8yY4JUFDk",
  "key22": "4uk2dWYcDr3HgPKZEztSYRN721mGVEpsLXJsT42fkHm9KVWGtXiB9bTtFNVHchA6MU3f1pmfpZiHKqBmvVQDC77R",
  "key23": "3tApHGK9Awi2rCxBXoVtX8VUURrEfrppMop8M3gnmZHEAECF8fCmkZBss8NmGCuJNHNSc6GSTrKU9pAbAKCvsLM",
  "key24": "3iDxq6Zmwc9Rnhx71F86priRVooqDF2KFwdAkknRTNWddhTdUs5J6CKuaH5LcT9vLQEkmwAJ5YRZYwyD6fT8q872",
  "key25": "21KMzdBb84jxF64bsQxqwQnttySKyiVWjiDgYp3c8LwS2A3tc1JNQbpB5vTb5iLd3ZvMcyDCEBBTbrxyYFdoDjXe",
  "key26": "3de2T3H2yTbLVTg4xbxvuidFJqh7vXgKEhsDrmaYNfEP2EnmCWtq6ERhBB98KXa1USA9fZzzpCYM1NgpPgo5B8iW",
  "key27": "4fyPua7whnaHwxWPMPvYFLWJ9mJQVqsZtcPWM6TeucQwzojoJs9Q3ieEeAnPeLERHQcs7tXdnsHX7aiGPx45zgxp",
  "key28": "UWmfFnkqEgVh7fuZ7eNszmQYSNhKPkw9bXjHuDDJWuUtJRCstrNainrXQ5WS8JLygwJhU7kJJNevo5C2K9GasmE",
  "key29": "EauFG7k6BMeJ6LsJHug4cDXqWJkUqcQH6duAGx8zFUbEMcFVzbwDQEALtsdgziC5wqAKgXnT3xVmwf3XPi6iEAF"
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
