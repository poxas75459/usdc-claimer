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
    "4js8AVkjYBT2S1UBvqAso4kwhsrMMnVbgrWBcWnYdutARcPyX4empM7hESuFUKfBL8wa8Hh7ekQYpeE3tUzHUKx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XSG4PayQvEHie2J9z3aTFKuj9aFb72w2heA3wiLm3JwjCRHdHAdWF7Pk8EMbu8Hbcvy3CxvHA5ZjC5VKXzLb1Jb",
  "key1": "3kEuVZ9kDTTopPXxEKVXehwRPMwZ6szyiHtNoRLFB3EEcCogqgHJPXrV7qDC8McXkHWmdMEaMj7AJ9pemmtWWzxh",
  "key2": "624WRhaNrZW5Rw2q2EidA3zkeV2jLqiypXXoTZiB2kn2cZLvXCQvKWGcwiqHQypA5wbe3pHfEA2dP8Wn8pynpTBA",
  "key3": "3wnehqm3Z2FkafaavnDdyCaV8GjzbgeFQVBAnA3cBJPrQ5Vw9zsisWMYinJYuZdE4U4fa8kJBz6gCeBgB5fRUjmG",
  "key4": "S1wipoJ3k7z9seuY9z2eZ3fjg3xUjvFm7JHRYNC6bd3Kekdvc4TT6pBVv8GFBCdwGM5zjdi9Q4UXC9kJQ88tjuJ",
  "key5": "4dzrkwbtryqYPvfS82dVEFUPNRRExyVVoFEjdgUFxx1PDKoVrjPYAC7vpaeGvg6gJi3tEH3fHhkeKZkiSmB4yoyC",
  "key6": "3AxJY4rZASFGnwPWH97H6zffV7E22LSAN271fWdSuKWUthGpTKAFvBfUdPapXQVwvn7kPMM21cr3zH14jZ5Tp3kR",
  "key7": "2wiQsrZ7nzNnH83bpHs7DUnhMSHBDsPnHVaYmRtZFFXP7CgyGU6QM8hq2EhUd5suAQPyCmaxYsK7kTUaFHWNR8aB",
  "key8": "Jxptug9U9Jog4aA9aF6N4xivAVtrpSbc85WRppzynDxiKwTD31pVbYo5cV6QNG92dnxfMxeupiBfNvV8BLxTMUe",
  "key9": "3PHEbpB7s8PxQY9kAMkfqDyvpmwZWMkp25Ctmww2ishtWAxvATbgsgtAbXjmJU9SWzST6PMrr4ULmUArVB3i2KvX",
  "key10": "pTPQvDbtqMcJ71cW8mrSLx3GUtTEFtvsEyPrij9riEVygysj6UK6adLvpj1nmNrvFg9nYCJnanSKCyWnFRdfwfq",
  "key11": "3eFnqX2FCVkhA39cSv1AnsWwQfFkqsA6o3uuGm3BzTWyUnBPqQms7YyXVhCFCC6pm3SzBHLsGFoU51dzjqCWeWTF",
  "key12": "2P3zkQarwR2tW2FXV7LhyNBTPiwLC3B4VoFW2HNqKAsMNW8SaJUE5mP5uiGtq8drdxxUE8xF8cfryX3JVrZ8Z9fB",
  "key13": "3AbTVi9WVcByHVH5KZKqnc7mwna16jLciidkwCWYWXhedQwLpATsBrqqzKwAGQCmwsdNPCbqe17Ga2RCvD1Db9yB",
  "key14": "2MoXPC96xXbSfxRx1UqJpBPmtueuFRPHWwWRgwvLNcWZh9tCeSJKa1tML3wtubMoEk115TTRHhXxSvC8yefeoq8X",
  "key15": "3nHNJTJYRELvDdRm6VVapWd1PoFH1vMdBPFf2bTtR7sa3be5SY66EpnHhQx8aVHf24eYhg6gJU5upUsxEwu1xR7q",
  "key16": "3QFWSm2a2Fcro2kSbKA1jKGxPbUjMFsRKcNEoPDxcyTRE9BwoLrNbi3z5fSQRUdMeyTV3uCEWiBWxvwpz7t7P5iy",
  "key17": "2A9rSTaUzFXRgzsbKyrxVayG8zHprN1eLE1fFQyKNBsLt6pRWnnQF51PWnUXpw1EkxJsoCN8dXJVJFR5Nnc8J6ji",
  "key18": "sJ3CEHH9eAB58Hvt3LeS4Vwqw1vXczR5NnVFEUEgVcW4exzNYPCFhBRzNyLEdhLbVnUewaveobTd6eqttbggnsa",
  "key19": "4kUrPcrgbtqkBtt7zbFm26VzMSE9oYBNbWbNqgfsrwsYjuNHyRGmPi6Q1Y2ic4YvEh6dA1BUwDLD4y47PSqxbCE3",
  "key20": "5chhacpDzWpdbXSeTrBr6yraUTEZqqC2xXv2q8VD9bQhyXv9YWf4vLXCj8rprX46Z4JJMqnukta4TcRjdoQfstyv",
  "key21": "21jQBQXysjTQtpFE9sobBQyvTd1g7F4CfdrxKoDnaaSsFFxQHbdyxxPuD26LRpN69BXEotXoqS3yi4Jp2bSedST8",
  "key22": "LhHdQm55YCEpZrqqqgBvJhhiRi5cCUhZt8nbPEoL5YWhoZGk1LCH44Y7F3uHu8F3uDTt1rhp6a5cQJsXeG13Wgv",
  "key23": "5kAni4Tjkg4XL9DpWsv4y5KJjq8RXXNBrEBYWpg25Pb4MzHj6A1AdLJ3XfpZ7haYwnQ49nsHLeWHGxjQ2GUx8zCV",
  "key24": "UCtYoD5243wDNGq2BtvCo9W42Ny7fYJ73PQYGHeHNRjiVzqn6uXKq8STB188HA6QCMVz45gruYS6ExrocJHv62m",
  "key25": "Ri7hKooYtpUCiKS8P3X7UVDKDoxj9pUeMZoGmMgx8QsEcRiMaQETZBe8oGH8PPXbpJHG2NXDm8sTB7jd3mcVW62",
  "key26": "dWnhrVrmNzqB167m4W1V8rDgeXuNnTVk6zS3Eg7QBMJwyedpi5xNMwMcRkLSsp1QCBBfQjeEnRcPhSmMuKuYxzF",
  "key27": "35xeHU3FSa6oYyNfCWJVmYdbEdPu6oc2pa8AV2pf8pyshVHJxeVzV3L5mSxVixNkgmz1VhrNqzB6UeatRpcsBvyd",
  "key28": "5hy87X4h5NmTuLSDAhpB4eUdpwTpEFmZMsYi2qaoTnwGoaQPDWaMrhHZ5cgAkgu8YF7J1GsjGaqNxiERseefYQRY",
  "key29": "2c7t4YCw42LVMZEpxRrg9WGo2mAJvDtWVNQc3kbbTpUFBJjYnneGhVFcRuHvFALAuSs8h3kizYHtGJfibXyYsEnT",
  "key30": "4MSfz2T5NqD6jMezHZVBdgZeWAFQY6eXfxpzhwyCHvnAUMoyoynb1oKa8aV93FtGqY3vERRMphsLzUPpofN4rsR4",
  "key31": "2nSMGK1mF9JT2vXZwSZXJoKLAAyUnaAUKVpoQLaj52NTMPZ11PdobK2hy2HNiEYU71WGptNgJS4uwr9j8xuePG1f",
  "key32": "22t2ovdNLxa5gJxP3V9qtU3qRvWxaKpGLCY1wBrRbXyn1Xx8eV4JgCQYt4DD9okR8LZAhk1G6pnCwjAYNUcTZmx7",
  "key33": "41e24fk9yqCEXAHU4FgAusjCUnvEF2QF5Vgx277WZQ5v718BDTE9CZ7pegagqF3wvMjujMn56nuozN4NTueXau4J",
  "key34": "2n5t1fhmavM4NAJGsm6cDkrDyEFXD8RUzqhE41QVZU3wjhZ2kx5HAGL2i5Ek6qZxoFp2R3vxpuUGcsLdHYv9YWuJ",
  "key35": "595XxBrnTnUFyvbjk447fpNULCqmDVzus7jkxTniMxtcGSMPBHU8Us31kHnrNGZfFVAmpXsJ31shVASoz1tGyfZ4",
  "key36": "5fdGqcsbZGPWmoNUWx8rNNc1cJaJdiKjh2NXHKtBxr3ecvhE5deXyiUQkwabZfHiQFKY3ES57cwxsyJJAk2nnEq1",
  "key37": "2jTpyoeHhEhubQg8ABQSXZTSdWcu5bUHG4CQQiQs84C7MEsFzv5LKKgSS3nbW3sPN661npbroc5UMJU95fFjd3Bh",
  "key38": "PUdEaiXRFakGXfV696NrBYpQVMzMUAp3JHkhBGYMrGmVcSBJtCFCMbdtv9ftB9bt3C7cMBQWyJLi4VVhqhpZbGW",
  "key39": "4Xw6pBsXxxcL4XkHWQtBLgDZEeApmQTKXGZ4ndPtryeDuSY3JVJy5ushQkXXqZHAi5LZK8o63owQpvg1oXypjoFs",
  "key40": "2aZQ253ptP2u3BKi4XC3E2Uy9buPAvo3CLKcRuQ8pAdj4WtKkR9fwvQYXGDtRpqCVondggsAq61AqrGPwrF8arGb",
  "key41": "382dc2NMUauRyT9frjHbUSWH4jqyksDnQvPNprsdmevA54Z17EhNZtU4TReSmD3vsy4RJ7rzKUniDknNvbiBwitZ"
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
