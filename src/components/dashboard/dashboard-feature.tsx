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
    "ykTAwuGzanvYwFvvV55f8MDpdrBLUA9vX6LcfT71E2gmyyGHdCRPHVHRfrrtXyQSj1ni6rbJN2qrrfCttrXAqHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yRc9kYKtNR33eb1wYGjxFUEyg3VhD9J5bS1QyTgA5tNmtrbbEFGAoe7DEUDcY8xd7753Y5BtkLMutZq5bUC5B22",
  "key1": "4Xx5rz8UjynMWS2GQ9xfVFNXT5UygwGNhYMdugkvNpgvCxNMY5HNY5Y8UovGyCmzwwytwq4vjk4Du11rAwmtdT1t",
  "key2": "63Q6YKqfNsmMSxukPGenEaCTPVCfWxRqNvmXkBAiJmVtHxJqCxvqNnxFwcSKLjBrRwVPFqttZt5GLp76sFFJPvia",
  "key3": "4CTuy233meqWBthTi8pn5bMyv1wXzEiAcdcJAXHdNAawfFpcoTUnuzQkSYPHa925jcJ9QGRedU4ARuKRV4cNj7FX",
  "key4": "5J33WHV3E2UrRc9N1iPvqSq8bujoPcgGgeMcxhQocgXwMp4yYTe2ucxbEfKDu6iorjaBigYhfjnusXgjGN12Vm85",
  "key5": "DQnB37sGxstoeDQyMNyeAb5q3cFUi4hCyqnwshoNvdPkyVvTKAxsK2XrxDWQe4ADdEJtDJ1EzfVdDdupkQFwwa1",
  "key6": "5hs1u5GsYw5rPuuYcPq3yCbmnaJTnrXutpP1W86hhNcZNkyPwVmyjQmcoGnsThLT5MqSaaRavqa9oNWFLPdS6wmy",
  "key7": "3VCPFWKUmXL4MM2sCQUXSEkAqJgTQD5dzDVAg8mfah6cds7m8cMwg7PPFBsM1QbptfUYs4LAgXk2exFQnZQdgYhb",
  "key8": "2CHMSy2VLxgcDXfN2rKRM1LDi3kTHJby84gMHpRznsPxmXH4wfufmdUMmh8pecMuaQqqB869y7kYL7rQgCJb9NN5",
  "key9": "2Ue5DSiKPW24CrHvhJREadnCAAqnNHeGCpcJsziDi4ZVa2p96xHkYFtDk9wwYGbyLAE4ERN5LjC2RjXAtkoSJFGC",
  "key10": "2DQKJJsuzn9o9DmEoGZhaX2sjKhY3qBbZFodZtAPBMz5HUD5AAfAhQoEC8Vahk99iM8Wr2FME54QzEdmTw6hq7tA",
  "key11": "4dSb8CRXza8hZtv6mTZWPyrpcxkwBzoY6JNeeUKQ6zMg73cLpZFyA6Xv59FeUwff8RiADz2jjabykJqNUN2DWYxh",
  "key12": "5abjejuqTXbWZHUzRoohvMf3NH2UKmYATHRG7mGfJfKoX6hmn46wTbJDHLoTg7bDnKc3iVoaTjfEdEu4GrQsUn4D",
  "key13": "3kMunH2btKXX3XombX7zgTX3K48tbBB48mxb1Yxp8vZnHZx18V7Z2cZD4eE4FzLS2gFBNKWKJPUE91eWTYEkEqoR",
  "key14": "4imHmyU1bdTZwVq6rJ5D12Jo27JZRTc3zmcnbq6XFoPiDeszAacshfbZRQKyvyraCKBWpKx974g5qmy5pKgUGhHQ",
  "key15": "4E6GvmGscyDL2J8CqkYgYvAXRQLXQcsdUND6XMAhmGtohNtQQuFbBVKTGbDbBgXH5DLKEKr6i7ojva8o7iwMU1kP",
  "key16": "4DzZ3e2RwB3HDUnFSwHZs5Bt7LPwzdFBwaWZZgmrab3SmpchTdWrkvADYBbSNiDaa9cikmkfRUPbjgVA2TNSVh9m",
  "key17": "tuHLv1ooBR52NYcf2qK2NiKg4CnYFh4eYgsf36D7ogcQgLnsTKUDrTqzXSHCtZEbNLeXrKEJi2JfPHiSUmZeVEm",
  "key18": "45oVfPLL811n6tazYJHBBVFeXJceDFYSpMFkrq99X1VUvznEvYGZweF5thim1craLL6fjNa5Vwfsad9xQQrdWqPF",
  "key19": "2TKY1WeehCDfpwGnrpfzfEyMyo4uxm6TRo8knJhx91pJQCzFPT4iNVdh26piNWGEHVg2NVmXT5iFfCTwBm6jQ5yy",
  "key20": "2wbQA1MF4vMGVMVDDW4gptRvfmQ4hGWhbcQnTNK2Zxse79QGfmyrfeazoJYygfq3oEHgSUsCkYwrtB6Bk1Rk94wV",
  "key21": "4ArFNDvMAns23cnTwcHd9DWqGoS9pFk6t3tPw47DThv9nNVK9b7VeGWa2uTtwhzS4sHrb67XWsbWzpkCqF6LX3WW",
  "key22": "5RfFagPcXueS3kab8gjBH7ZnmtwNKLDmioMoaTnWpVyHFSvLs9fHSnvdbekh1DYN9cTK5UrxyUu5qgF5U5rcu1nA",
  "key23": "543JX5VqCAuGUQtwnEsdizRTw2LuPjAg34JRLi4JDjBgMKvS3nTCBEoaEbyeokJThd9wdJYrc9qjNTji46Q73qQ2",
  "key24": "3rqQGMnrZUus5drpYUfmLr7SLqkC6vyDQBGCnnXVz7cvq6VncZHbNLWu5Sk7sHkqsAyf2oQWrH52DJ5VLhH7qrMD",
  "key25": "3MQBnSa85CyG5ixkyj92MTvWNc9bPrHGYU4wyUqcpnGGJMziVTGKsjHNqBkBA5C9p3UoHZwG8QehPBLT4yL9T7D8",
  "key26": "5uMJhxCf1rtj6y1x5yBqHRdLqDNqw1NpuieWfZHtnaXpfn2MbnLEfcKhgLfQGaF6Stwvug8jPwSkHLmAage6HwuE",
  "key27": "5jogcb2VZnHs9ZKbnYHs7XwLF9ALyQqbzWcKLiDC7Zk11EbXnXEmYqe6bBbec7mBr2m1mxcU8aZUG6sf9kNQ5hu4",
  "key28": "4pCRdWnuy5QgkZb3mCyCbBBpREV55tu92Lckmom5fvJacHRaCeAoDNPZXdzW22jjxuxkAX19Noq1suW33c4rBbDL",
  "key29": "5GyGmE9btNrddFXjsirvJoeQ5cVQ2z1fn1WQugeRpfdq2mNvwdTv86JiFTNZ8CgFCzwV9kiNkwKceHUhw3K54frH"
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
