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
    "5LsTLw15Beok5tBoNAz8xPJ7sXN7nBXZaaiHJaisomCUqsBBaQrDbvDEcswrydACNJ5WXD12RSBF8z4GF1MWwRN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcyZbSHH4nh7xKZ2GVZw9Rmj1hDvniS4cEFnHL5yyqL7mWWH47qSUa6PJYHQubkoB7TaUYGiTfpyMz7byDz7ijH",
  "key1": "2RXEXZFrQaqYNNw91dKuTPhN3GmPJCDmktVbtqsFYG39dYYk8XPuKgQvCRKFgs42AHRzg8isYdrQR78UUCxftqkT",
  "key2": "4wtu2v7GDC3RomNMT3gW2RWSwU7afenWwovsnVKnYFDPSewvU7XTMGyiVdCzvQjtwKszbBUowezhWPtWfRtMPJ35",
  "key3": "5iuCutrnGg3WJaH3ZPtV9U1JRU9qhuyVEZibNtbAxPCurjNinMF5r4ved8jAts8HQsWWvQNJsU15aabhujCGpjiy",
  "key4": "2NzJCEjqH34tXnQSYkwCQrSjwrtsTVK56aa6V3bdJPGgyjqsHTUrK96dKFAWziRAh63HWhYiZgsuSbQ6v1CodCzx",
  "key5": "5tKUHWgGF7E7mFFATYmcJoTmyyA7nkv2iW2WwPTxueA6o7ewFYPj8fh8mDBarz2uQV46hMDyjiGuWFoKNV8HwvVr",
  "key6": "3KTnXBd48m5ezhqkda1tQm1BPaRy3jrZNrZYsqcPmFePknNjx9XB76W2ifSaKTypVFfUvHXgtjoiWVCQSCZEXmjj",
  "key7": "JPwhV5vjh7AZLwa73HSSJSYepFMqN86zPa6FxHfpwY9mVnRR77RczyaYV5siDdy7PWq4UfH3ieNrSsRtVYDTr9r",
  "key8": "49Z1L7WQXG17EFHHENbTRxSUEXKGrhC7FKM9SVVBDADyKJC49PBKPcsWhtMVqV4wJutRdKa1FZqUKu83pcw5VNFE",
  "key9": "4bR9n6G8Le3brbaib3oLZmMAnNmjjdb7DAjMdpoxDd2zp5gcsFjWH3nyAr2eWps2EGKw4MPCzvDr9vuxa5fuTuBZ",
  "key10": "BzRqn3U2ALaKKtpwhJZEb6k33gC5p6e9auuP6P8pPjgq6u8tQsTLedASgS7hNPsPW2JpXPtC83wkH8cBUW92e5x",
  "key11": "54JjHJcRDhCFsEa5qgoJj5gUDC2Y8eK4sxcMs22BqYhravQgfgTsWzNPmEQkmtEnm63Rp2pHNLbrZJyucD6gw4L3",
  "key12": "2u3LJ5Fai1Z9GVi3Lr7d3bxUxUKVkZ1UXGDtYjHyanJb7ioPKiZeiVc54dunwBJspp7BeQcdSFKH9kh48RiCFezK",
  "key13": "364fD4RYK5TCwgteWQNLibhBCPiNKQzSE3KuWRwTFes28deGvUSdsjy6NmuPXjqAtK6vFQdypgDyPNQWjg4ia6Gz",
  "key14": "2ZKDfXCaSLbXwHgHnYkVecRHyK4r8UcYTfUrpKDVWQhQjvKSJwRVxM7Wkx5qMBULvC1EzSqBWNiFV4BWpR23Tx9Y",
  "key15": "1xvVdQqyv2eAsrFWV1TfucBiQirZhLbWFgK1WBrQPEAypaSb5ymbzEoHP7qiBS59MBdFL3FDf2xx2PFeHzDqngj",
  "key16": "5AVsnmUH2ohbfTKePCXGx8FTwBCoXTUFMXie6hQc41Tj6XXfTiPGdC1Kw2rT7CyRe2EhZ1dRGzScLYW74yxkdyPg",
  "key17": "3qrDuVvQHzSERPQVG4CbzhEJndG23Tq2dABiFjLF2jZeDe4FTQDeMjW4Wyep5KouRdcC9gBh1AA1MZpSKvAg7u6x",
  "key18": "3B7hVGA7iu5NnHEQEzjDsS8kBFmJynmjmpFToAyavJCwK3WocZL7EQLs2ES7FRFmmGzTmUWZxsa5nYKMFcLL8EDq",
  "key19": "3i2smWy5reHkH3AgsYxHKNKCisu7rqE9Ub7woNwy2rhp6ne6aUZVQ3JqrrxNrBKnVjCtEocX9W8ZftyrorUZ5pyz",
  "key20": "4YkihGXY9tYvVndeRdtj64s8wQ1VAAUtYCKkYzjaeY1duLNKd5H2vP4im9axiJ2Hn71QuBRtccFwEDVsjeRZEmvF",
  "key21": "46oP45aqsSN1gG4KuR111PvLjEwAbivukpU2JXvUo3pELTk35N1RAHayxEKJHkVFyE4wwwK1vB7VpAWG8FcZzJaE",
  "key22": "4y5MuaykGrxr3BFo4h1kCMH2QmoUGcuFWkZ2QSSXKrFWGY9M18NqF3XbdBYwmGcquSEid6ptb9AgmF6XqnFr31fZ",
  "key23": "5Csu9TS76FTpSCwWURubuo8YzizSyM9KeHVn9MFbcnW1Hn3eSXd4mfbG3HfUDAY9RmJHaAG4c6dviTKU9naTzzjT",
  "key24": "SS4Jzo6yXuGjJcBpH5WfMFL6WQ8ehUV5aQBymVCYc9GanKz5n9vZJv35T5WrrvzCR4euY6cN7jcUKzi4m1hzDXH",
  "key25": "5kjGsK2NK9LoBbdWPnct8UQLPcou2KamTtkUHnqnNdfUm8g9eHtwBKtHJF8SZvb4k5tvhHUu9cJr7SM2o4fRRsYr",
  "key26": "2NctXjaGx5cx9PRY1USus5fdtaiftVJvnrmuqKY5x5qfXAeJrdLr56U3L9gdnbULbRZ43FQkf54zbSo87tWowYEF",
  "key27": "2kYtZGgqGmW6F3UFZTPkp2gsQjmR4trEyYvX32y6oF8QeyGMdmxqB93sRih1V2RZgFv4V3bmLHeUtbmSfkUE3iKh",
  "key28": "3RPojaw6NP2HwrLmxQX1NTqZ7CXM61ufmNfqXJtANghsM4kuuD8n5nhyRKA5hmE5o1QhMJWSCH3dKiLQWCiD8zWm",
  "key29": "3etcwoiGtPVDPvSqb6zjrKPBcz8nzCiZBDnwYvxw2w8FUUhNDYB6gHC4jx783antzGnDasyCdNKTofVvELoutvXc",
  "key30": "nF5hqxTww3SWJxfDrwsaz3m8DvzrTS2teBrstG6kqoaqWzpwAbFCyuBFBivZaqUGvWoSyyWN75vZARUnoocFzJ3",
  "key31": "2MnZJnBHoupkpaDCofo8z5hbVunK6km8HeFChEBqWFd75wwWGN4VntY1jwV73uJioj3VbW97QHvx3iMhf5YkYPb7",
  "key32": "5jnNxdwZbpW2MAHLGpbYuaWFx1Bgkij2JQP7mRoT6oPsdiYDANU9Vckr5Sv8fXqKReFZGdi2PujxRCCPiekGZXAS",
  "key33": "41toPYm4k5tP1ywuzLCnjcgQUqpmUUNc5GMoo58rSTeDh3KdG6tq2dgk5XP2JyzxfcRhwUAJsT8GQjuvcWFT99te",
  "key34": "3vZhjrh5eLafnTKS4qwcyLzTGj268khsU3joc5i2Ggu6Dzxk5q9KnJ4LBYN5TVAqpwoHCiuHZhjRGsjVkfW2XNi4",
  "key35": "3mB5TX9etRoSQkbhjPqfJ2S8MXC6J6zoPnhbPzMAfYAjoUcKqcpXUQWYvHa45seKphmuQ7mMMuyCfmV7nTnmKnus",
  "key36": "3XeaJPA96C5MANmfZPMtf3YuLq4HTS5TQALbkEyPjVhaciqcWwRtKA5FqeraHEYe5CZZC4YtCLkuo51gArkkSkvU"
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
