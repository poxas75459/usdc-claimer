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
    "38GD2rqoW2SzWZMkXjpM3BBvTz4oUtrUsSuUoMDQABjSUoHSaRRMZdBxRS4S5xcaPcghxGYiEYeQPryuSwwuNk78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NFGzYSxVHa7CJZpt6G7usvz74rmgXG3droyLuFZSCAJWMU9u4ZdB44CRJzjUxbGFde2dms7rJ5eXTEjUJ6NsVTd",
  "key1": "4xsRRXSMFRt7sXb5Yt242z96ztZz16RZ3VYDPj1Grj5128qbcWjgab7xujcU6hWPno8aDjsGG7eJ7KRkjL7HqmoS",
  "key2": "4NijP2yXDNyrgXmQNi4YaeNzLkjkR3QmmwzNnA6aaJLw4fdceH6oyFiWDrRPg9id7XwgL2AvSaL86r9PfpjrWjwX",
  "key3": "3o7ANg3KGqaA3rHK3YqyVvzucUff4zkmU2gW33jbqm8j29HbV9z5DTuHWkJrr8hq4GFp3Fvqc3EhdUjBZ7wfizVw",
  "key4": "3wedbp64tpHvy5cgE6rmuG5MGsBrmhTzowXgyEunx2QML7K9s8KSurPNnxWZmCFxp9Gyn9S2GGhs4nojSHJ5u4Lp",
  "key5": "3GK7Zhk7NckeE1PywSrFdVW1BZnXuHJ6E75avMFwx55bpy4xCsPofGpttWWyKqHYXjydMyaRfbg6WHx5QrPCxH8i",
  "key6": "4kpKufvEMbH2nESPwXncyr2mUYWAFJyv4D4fgvTKbQ4sJyHw9w3heRsAWNj27Avr8uLhQM11mCBEUs8kDQvZiSkB",
  "key7": "2AVXPE3qX2Xy2JfQjAHYC6GYYTrBE3mnG22gyFD7SLEJSQXXzPZsmYzWTvGx5Pa4mJxknDjYQuNZbZULxpgLvyQv",
  "key8": "2CofDEZZ8s6NznwPmQzA18WXS2hfQ7HD8tDwXdAf4GMV29zJULCf2YJbtuPk3HLqTWATMHAtQd3z3QU96wzMTLHy",
  "key9": "3xMrLEo32RVT8PcHCPTERrKPdGDvwWkWMgb5oDTeVvK4vhdsHcK2uNLf9YoLKg4cVmDtSd4cv4d2KDt8KqLR6nVN",
  "key10": "4TvvK7JLxJepNm5SVMTrq7G8SXiuAFM4obCur5ZSKgnczNXWbLQuGYtMHizwCKSKB4AmnKzpL6M5VQZVjbS5s6Ap",
  "key11": "2vizyKCBHbm1uDHmH1fkrooS7h2mMKLW85JNbQD2HSF6yNgiiQrcX3VEasWZuQ1gHfVZtEiy2jETRqtSyzU9WXai",
  "key12": "61MUx9shx9BtZeNeR4NLH24CWd7eePiUAMwRbmvF5Adhbo1n5gW9NEjvwzUnZ29yX1fa3KGb2xWgbGZEdrkGtsDw",
  "key13": "4AqMSn7BDDLeNb5XzK2ievU5uZqPniBWwe5jSP615SJw6htf43yE5eBZdCHNSTwpibD1LKPZf4q4j3VXSawiU6pb",
  "key14": "YHedYM1NHvZRNYUdtrVV4zsco4EBGDpz5JZg2r3pihCsP5SrceewetdcmRiG8k73sNkmq3pgE5urrdyXAhSPqW1",
  "key15": "5jzsaxiQUu7TQczQmM6ebrF4iRWTi2ankciVfT3PLQVkmG94qKNW8jNpSnJkZHJWmES5KHEgm9GonYQuugL96mYC",
  "key16": "K1DaUMagnhsAMjXHHgjqtuUdKoiLJjDJ7451Ap9TF4CVECxFxvb1WF7ebWZfbik3v6V5EKYaTWLDwjWERVdvfwm",
  "key17": "4JbWT42fXWpvdqRmoKPuikLW9Y1cZeWBUSVuaPwVsDqnuU4zM5KecyjHip4cWDg93MFpJa2g9tz9vdXLU3f3W75Z",
  "key18": "3G7nNhyPLXwZjkHK2pX8Beiq9uX4oarQQvYSau4fidX6kLhSkndm4SU77AkvDKsz5swaXy1kCnUT71huWESy7Q1E",
  "key19": "4b4SJE1mnPz34TUP2Se1AUkXNDqLkWNHafZpY3c6vrG7zRTPkpGjWAbb12PFN8nFS1tAtC5SoWExJVJhRzmZECMD",
  "key20": "2fu4bRp5B4QTdCH9fDG1qn1PuBUtaRQgo3iXBKDWCrDmq5cvNJJMFTNVLJNAty9enUet19pd1UCXym1FTKFP3vxz",
  "key21": "32wo2Ehux32AngcWU6wJ7ZdLGQ4varSykdD3RvcWN4wWw3SqfezUV7cJREPjpxn6HtaG1iDZYB1oe1XxvJpuhvex",
  "key22": "5C37qsCXyHfwggDMdtRuuHzgu2dB6r3FzQebSN1iivRytE5WnCBcfBpBMwqGwA9x4L5Rokh3uVLkF5BKxQW9zWay",
  "key23": "3gifKVK9SymVfmvwsq8PAE6wtTt5msAr3biuKtQB1FGd9sdRwMWCoVWvcdcRJG6QMLByVk9dmfSJA9MDrjw4zqQy",
  "key24": "44REtx6LSbLwQ7QjyYmu3Jz85u7yB8fHYe4Fz29E6hE6TeL5PhL33RZzsWjsDy4tGi8TYvhY9u56j2eQUCMqCTra",
  "key25": "5kqGFUFctFwWT2Z4QGo87KZiKwnnwEk1jdGe5iab4EdB1YrGVFXWuGYPCuHsLc1JDKKANWTD1igWeNejxDk9Tg9D",
  "key26": "4vx9pyZLXN9XfGEKXGWdgAaca4hULUkxTcyDtSXvKaDtXz4h3u557eL7XRoEApVLr434PXeDZaYWtz5oUF4Pjkmp",
  "key27": "28S5sS97Y9DyTNKUtnVKMb2ksY932iF1JFwMTQpvXvaqK6gpH9ALwjgfsGesh6JWJ7U5v4ePFUYCRLyy3xPckNLW",
  "key28": "2rh467a966ThTiWPmRg6uf4k8UBTNvjVhzRX3tFGmvF3Ewj37nRVhDY77hudBhCoe3GhKk2nSJUwnTm9H5Xwu2n7",
  "key29": "37Fu51LifLXAvKnpAd69Wgg5ia5sos6F3w4CBxvA8KQr1JL72xRNsPK9bxLanJQiWCGt2rUPHNVpaYxuFJuSzvjG",
  "key30": "ENpfEjrMbnrt7BUnHGokwXWrBWuQqLdpcLbPm6KYYe7C1kX3YBnwJm7vVudeESYhA9ZBqvnb8LC65DmifZrQt8g",
  "key31": "2NscRSpmECPqyV1m6aWJmMJE9oG6uhkXG6mLeeXMDfoELwtrTEX2Zuisr2qQCxBoTQfERazggJdPKiAtrskau7Mm",
  "key32": "5ZSgEgUre9Av26iu8WGsQgadU1tFQyGz7BqcQGqmkVHQuDKw44i4UpfUg2YyjjQSQGfvZo98WW6QJPmLon8yQVz1",
  "key33": "pJ9aHsGyjZcNbvkx2LBQd12CvtJznRnAgg5uXYUCxrNZmvMYbt1QSoy3ru8FmtBZ8MMaF8i3BGBTpgHz3RBDKb6"
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
