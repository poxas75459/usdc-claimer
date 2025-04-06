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
    "4YEw2rwWi2D76TtdTzyqcoVsvp7bkuns31zcgDMQEJ6NatPgrSXPdEvFPadcfy3WgBvK91qi3PH3iD6WLNUKNnqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d5EhHXpvyrGqvsTEBcgGLmhZrX3uGD1kswPq7guhMVRg79RVFxSuGaXaLcvEFVj3hgepRcM9YG3XMcxgwhZpAZv",
  "key1": "2Mt9NaL93KyqTKVonV5iyFeoc8ymdL1hHLDTeJVvsdTRKs4s7NotdBkeRrvEjy9TpYXZVzKf1sPvSQK2MPJsWi5W",
  "key2": "SgaTu9m4g3QUUA2CPe9saN7cccN5tAV1L9wFT48HZa9ZekueDMXvRWMv6TybDnFzoTHTACx7htYhMoei5ner2HT",
  "key3": "5gMKeUfpNeN2wePBHa5kHDMPkCCPBxLgBTX68JRo5H6SnCDXrWk14imsSdpXZVk8rjQ2vrT4VLePkB3ZH4ueZqMd",
  "key4": "3Z2TZKzo4eqpN3QGRQYBQagxQ7cDpuxH2zBRdDXPP2KXFR7zDTqruEyZ9r9wvq3XSFGudDrwMf4J1s9nHAQ8SkEs",
  "key5": "2daWeMdC2xw2YMc16SzhL2Y51ZGt7R1yX3R4WhmufAdWdLCJi3grVQbvsGpiV1RQqjwV8UGnSApemx8dsYFh946G",
  "key6": "4ro7K5MA8oBsk9Uy7YsBqsbQ5JcdE3a9aV6bdcecwZGrVZUwsNSeJHiCm3gEpwh37RDhn2SNd6u6taT9GvRcf41R",
  "key7": "56WLMPQXdeKBrhL6M2Pbs6tkLwFUJxro79yDKKB6bmAgwARy76n2Z4vn6vHMAe7H8LZZ8yTwVYN8x65RUPZggJJZ",
  "key8": "1g5QXr22BwHZ6ZkEWyQiDVrfGtoVKqqffPneckjkWjxMbVByP2fMqmPzHLEFb9D9WkgzdrqX4cxautUCLFoNpHA",
  "key9": "HCN7enDaGG8oh6YtoJ9HNsrbdmwzxvV5PTWCMJ79UyfFPDbozjrU9XkLfnTr3RJ1Fb9eNpH6wACzT74kughqwGK",
  "key10": "2ftYH8vYCmH34WZQRxxkgaFP5ExNxWLitTQQRRdxRHXCNQVhYonkow9vLRQAyJ55rA9TgXmGqNYhiRUgKH3RWTmF",
  "key11": "4CG45Negmm6CjLGzTZ7kLvDBELavPkf3UWf64yH1949498JWMUst2uCsU4ZvhwdvWEW1qsSHbm1zj5Xdkikn4jHc",
  "key12": "5b2Af7KZS59VepsdJ4aNGyzBzHEABSiQ3vXhHn1WpRzTGcnqCQB4KKsA7PtQ7JeGG2HyCMbogSinbqKLTHAuHhDa",
  "key13": "vngyMUYJLcAm1hWQiuG5rcW7YbEzWGTEEfZZBmSpxUkYch3dQcdJ7u57iyR8BcccVrXVYJ1JYLMtVtvjGbEsV8Q",
  "key14": "5vBqt2S2r5wYkGHnmcB6nCcxEHHh5sMxuuRvJnYUSExuJSqQnQAvLsBWMAndimkUfMu8CSUvCUkxgVQ2t28hBoUU",
  "key15": "46HNuaTdx6SUJCjbaLSAxaGo1rRKFV49PGeXTKnyXvp3jcayK1nJmeDQ42G9gVFMDoe1xeBfi2gPnk4vAFnmCaa5",
  "key16": "53zkbiN37QDjjs53UCirDENVsydvpfrq46atdff9j8fyPT32sdMi3rRQcjFDNqGYUXNy5J76gzc6wjXJFaoYf39s",
  "key17": "rv5FZECmL5izbdpXFeYkV2Xt15vhAKr5J84CpXiYjgq774tNryTEhYRUu5LqHx2QfyqW5uZr46dioQ5mFmVtMPt",
  "key18": "5MjSYnyEfsaiKossMQS4bPb1Cu2NsdbNk8ryJzMAh1iZSLNbTQ31Vxsm33mDEeQoVUkcYn8Fsc3ugHGERACCnhG7",
  "key19": "2bm36TKEK6YcmcZdWKbX4Z9hvzNhm1jh3j7RUcopwtUFyJ9JxPJokytKmu2JJcnWK4TSDu4KUNpV1kU5V7ZwA4qw",
  "key20": "3Qc7sJzmZgG7LToDWpcoNAnwRyx2GavBMmGutJSrh4Te1EJpK831eYKc9KLCm1RCJhNSBEPYVMqtRjjafDYJo8VY",
  "key21": "HzHJZi1K5bMKQanjqM1SgvYEUjnAE335FZsHmhwXG1etW3FnRSPVcAK75qXYbdwT3mBuzCB3W4V3UbAtneFpR9T",
  "key22": "4hJbFR8qNKZcphfYLGKqGcoLf4mNZeRtThwu8bo1JeZFSJhKQbcLevyWpRSXnDSQukZySvzqUdz37GLPtSzQG5Dw",
  "key23": "55U4dgYGcRQ1L5CxgTrc2CTE4QCs5XBiMHjvWwvJZjr9b9HaTUqgFRVrbBxQzemt6a3oNgmWpw8MZAU9YHfp18Mr",
  "key24": "39rDDkW89cqap4HtDnNf3QaHv2JXfEobGqaWt8BmY9hQ27ZZfK9VfhxURXXEFcNkTVVnjAEs8U7mqnvfnRXcBUfk",
  "key25": "VLPg9FmTqPKSUfbquEDLNYa4xq736pFpgX6VwXXtf82eKz5jCJK7MBn24yGx1SZMywec6yaSa1j2TWdu2DvKVeq",
  "key26": "3GpzeJZxPchb9bBwrU343k5kTJ574DBvCvSgFa3PZTUJ5Zg3oPmZ5MBRscNB1pojpEXRTRiHXKr8BE8S8CT6wpFj",
  "key27": "4UieK2HGy7XLzr1NpVoJy9J9SRhg1rJysGdjBLuT1tcH8gytC5iqPKgzV4ymzqxnnuUTUXavLgX7qACoNmJV5vT6",
  "key28": "ZHG225WL7i4Yoi78gKpmYNkoszZ7e4AAhrxqcRitKJrUNkBEd5CuZ3vtAv5BRoEvkGoMCdbgeYLDrnhA9Rx2s46",
  "key29": "4gE7tdyFR1EzD1qujrF6bMvCETh67TU7EzqXdFnZ7wiu5MCC7xZhzgbgpfDYeT4zCsNfL8REgDv4shxNKkY6w4YX",
  "key30": "3Mds5F6ehzQBCkfhQ1wD8mwoovP2WqLtVX9xmnqKDJuUBiRJXBdHSnpPv68gLxkKAeemYnfWP8XHyp8U3ryWA3H8",
  "key31": "4fdKE9ycJMkC32jPUtpbyJLAx5eSEbMquEmtJcrn4RR6Z2Dftt2kWtTezWA24QcN6AwKbAZpvXwvdQsRiKrvP3Mm",
  "key32": "4eBsSHqkE1BqNcmup8RwZsm4bSMQ4LTgBuY8K6PFsBBQCc7pUKan9iq73hgEXTC388rpbjnkprt7ag1yfbCSoWmD",
  "key33": "27UXh8YyWNQWvxH88N3oy75pTiHVVPzoyvYP7VWonStFps9onz7t8v6xUq1tQXgnZHyeP7WE3Z87DrgNTgGBytDk"
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
