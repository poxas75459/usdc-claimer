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
    "2LH8wvPnqKyd5XKjWQtXdSpmvCS7Q72GzvffigmKKu2SMdmQBLyx5nqcLJxMrsXvKdbUJKCRydbFLHXJJvtCTRRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qsevEy2y6KGBthpycLu7uPeuDDZgsJepxKEoAabW9L1bCgGUY8uJjzQspa4VHrdRJYrSq2BQxx4PcNuowSCza7J",
  "key1": "2Tzi27mSL7hR3btuzLDBxFyL384SyHKFtYDWVqUM8s4LDkCL1EX3CUNfqcYWThNnQMSd9UDiSJfo56ouaxQvhnvK",
  "key2": "4FuRoKRyRuJp9LWiAnfbMrCuS3rXCSBNSD3z5hQchZwN8f2Gf4WGi5rAatM264ZD3D17Vw5H3oSeYQzqZjkLCkTD",
  "key3": "4rqqBYs6sTArEEZdXxJauJghHy7qhgXmNxYKa6eXnRwitFDcwV8w2EHnZTe84MHHttjkd78gZkwGv58bxycRoGs7",
  "key4": "2vj56EhD6m27W3UnBMVLeTiFD5YbHyZcXN1q47kqMWJtNsip892xELSko3JFSRCWPBotuu6ScodZ1QXvnMjBQMbh",
  "key5": "4v39E4n8Y6uYXXjb3bMmkCUSjVBpCWSbT75JZU6xVL4dfmREkGs4GSRJEzC8yZfjdYQSE61Y1S9NRV5uAMT7xJuQ",
  "key6": "4MF1PxnbwEnSADDvMCnqRjtVEgZMsQPdCC7tYqAN3v7B4oip48hBRWUwEYc34XmPUVab1CaShFYLR4GfoBNbnA3g",
  "key7": "33f8MVGqmg2kUEfJVtyRPqqDy6Q1t1kCzj3SBZxC3TFaMNDAeE6degk9Jsrsj2iHNTfw2NMVWh4qZNX2EfJt6Yxx",
  "key8": "2eueEczcq6kgyZHXWNWHXSWq1RcMXuZnWkLujrg6CkVefUTrppakiMBKYrckYrfvsJPepFK8WXP7fzqyd9FvGdqB",
  "key9": "5LWjfT1Kaqg58zUsYJUBEYGHmUZDFECMCZLRXXDSHUGYqNehz6R85W2Jnvf5qrpF2SkTa6dgbLC1yfBKzk4NhzTR",
  "key10": "547sCCyBHYNFutWbb48vPnX1LrR7TtggSDVr9nXPK4sLBs36TU8QsEsb1ZJiHdfoaxpu6P9AfmB7r67r9JXKff9y",
  "key11": "2ET1ou5mvSdy2JBhkZDFNzxq9AabsXdo1HypjkfcYTgMsJRBrJiqUexX7acEWuM1kGUyUpdiSwiCLSr9yF9bg9xc",
  "key12": "Fi1suxrJiLWvjdaAownBoxejD982C7awBBNcbjyroqSXKwVJueyjR1LyEPx2V1gRwdhGo17kcYj5Mqnw8LjDnrs",
  "key13": "q7UvFghQgwDUcYjyZ8JuourtcB95NE4ni3ME6H43cfMYWvH1SHhAX761RANQR8tVyUmgaTbxDML7dKX8H4kHk6f",
  "key14": "22Jd4hQWyEbpSKWfhysKcayeU7ctdMu3RLWd4sCcB81c899K97od9pfm9yyrbc7ivf5QdYYXEuUTf6hhkGvErrnh",
  "key15": "eE4DNTNRz2S6BJfs5eHMzrtgm6EgtfUBtvvdjube5WkCuUS89XewL7WgZ5Agrwfnv1WbDx46MzgriwVLBer5iyW",
  "key16": "5u7s9RYAhgCeeZCn1rmTihvkU6dBpq2VgQVk3yQRobHR37qepy9jZCvfsZFYfkioEx8zxWgvUSDbqTUrJVtARgTL",
  "key17": "4FUYWyko43nmjyFxDYEaEAj2RxJHL5CYQ3Aa6Z7QkdSZ7A8j4A9hPYq1sxYNAiBdDSmhUBzhWS7tNMoNdStYYuPn",
  "key18": "d5CDj8QSbhQe5ZS3omMQKewYwQ6zwrhYZkVbtzDv3iimGWp7bdf9W5EF9AzXtYEyuFeDyB6tA9Wcf1XTaxnNk1s",
  "key19": "4aaasNUQ71KiUvPi5TJ1hv1K11u3AetfF6mW1Fj8wYEJu47Me3dH7ktofY49kpkGc5dv561YGYZNxTxtJaomYBk5",
  "key20": "5o9axRQ4X4DySj8tvvrtvr4tQRFqK4zWXuAgmJabAUZYQQ8EG7KtLSA2VfdLiGRnW2bZVyj4iD9pc29w16Na4jE1",
  "key21": "GMHsQaLDDywLaZFpDoPToVe711MNM5Z1owxAuge98cLYQPW3MtvXqyqhYQHU7U9HemGoWcgTUczbNADNBg47Mjb",
  "key22": "55Qpdp4HeJEq1nUSPYzDAjV22VRdYsSzCbV33tQCr7gN2Us9zKSKkJen3jJjVr4r2mkoEVBHRyScYwgP5MSjMBX7",
  "key23": "3pDiru5YNxWFfBrm8a2cZRMNvw5LwHPse6RAyaQMhooZfJZD7ZzbWmdgZgvg5L97Kh3K9cciyAwDa2kTKnATvMyH",
  "key24": "66sbj3YjY1Rv8bmiAPcXGV7zJJimepLG2KtYm4NxdcDy3MXEBJr2Q2dxZZTrNYem7Re1uMKHiqSU8NZpjjaXmvGg",
  "key25": "3rCarj3tsnmU1Wx2bwqrymda8QwFEANgxBR1PgwCipBukdHGYbUqcZ8vvNp1yNme9oMboDkaurj5rsgu6jW6whhf",
  "key26": "4HgK3eWHa2CcXpZtJVbkmTqj3144JSjF4A5NXuawStjyvz5oPxx7NRyiR8FgEehrrKvzd3PLNpVZUhhR6hadcUav",
  "key27": "3xeEzNLUVibrTq3XDjZCnNGBmzTmq6AarjfQ5NZFND6qLg5TgSD3BB3fNkZcjQPX6Hx1QQLSmAL6Jys1YjfVExcU",
  "key28": "55sqKidq3hkMC3JxV1d8QciXMwA5YUhevhwcnB5NJ1m58iUWosakS3SAtyeJsJqE5v8BaaPFctC9rx1gQ9JiHLFJ",
  "key29": "33yQRSz3HtgzH3uyjFGnKDNfEWYchxVkhv45w7pY57A3bxTui4faCHZg1hnHZMxkCoFxdycmzWiQtc2VryFjfFJQ",
  "key30": "5Ubf1qfZbgWRRnUr4tJ2d9tGSbA87A3qNmftKAZWg8E6CHAokGya9fuircDB3dLYAmUdyYcL2XG3V4GYDL9xWck7",
  "key31": "WidET9g292ssGgKBxZgpo5uaw42P7qXLnrtD2NrQeb3iBjVq37oA7xakrfF3sCyKB9DWPgiMuz257NP5USBhqQg",
  "key32": "33vD9KNPVYNH3KxcfmNxbsvVeXf6GhicH7B7MZRjGEgAKpxZvtZxxskxG1UDiVtQeGfDRVkGREhS7c3jBx7f9hHM",
  "key33": "46mopc9eyUBcWVD4FpPNPdKB4vuiLeovNDWjkSex3ZV9qRQrvypN43SSjm3tN7xXG9rE6m5ZydJXn8GkdcMxM25o",
  "key34": "5vmt6UAWyiWEVkKu7hYBiVK4sWg9WEf4My9ng8uN1Hm22sLRU6Z9UWJLWWsGgDf4TkFU15eevf7b51YAiBoqHwze",
  "key35": "EAY6ARAtHzd7epK7sZrDsiyUfGw8DWPjhvtX5R6pduMyEjCB8ZK7aYBh2PHtbD9AWF2ViBSmphcaHzhTyRjYc6n",
  "key36": "3hVArbXNaHmve59j5hR2E8HZML3YzbqgQssSXtUhURQiaqXbMECUNzjLcRXgsWi9fQL5pj6ChTh2xmNMgGTRth8h",
  "key37": "5XbSz5CuZGy95FmKHBmxVz7NKoaDw3fEejkS7Mo5mCkJeyMR2NnGMMspPFmRUdsWuETWUqvEjexvhN1URfs6gJp8",
  "key38": "3zCRXb9iV1JQHQkfCEFuvTqfdigFcqCE1Fybq8yNAp1gVjAKtaHigPeo7DYLEFWMeEtapQqcMQYk1WV6pSSF5uMr",
  "key39": "2UQR8nP9U9TseBfvqmQV9rzmeYtMnN9KEQ27rtD1tX8sJjJyxz9iNVRGBjokXMdbbDrxrNwi8opPQaxQgSuoHEdg",
  "key40": "5wGbVSNUgEiBvtkqSwqFa2hr3NbEEfW8JHvGrvAYUtgBtmNGzjQszUYBL9McdUXFdVpNnU5cJbFTHux8ou52YDLR",
  "key41": "5X2MDVPhs1fBUQdTxhBqFocMbFVJHK7f91Q3HEWT4LMFhjDvg6dAB4h4feNRqf19a9nHYhDL9ioNqmcsf3kHEE72",
  "key42": "3V68EumdGhQk6QiqPn98FC1j5rUkxqdc6sJ37siDdtQXd4tGw8F2H82LMf1ig1wG1wCLyTRoubMHkai1DRRvW7TT",
  "key43": "qHaHKNDDCEHeBNMjRqsnuvyzzog5A7bjm21457GcPgsgRj8rhWBcEQerNMpQCa4ycfxWPQQL6wZaCeRaDQyFvy2",
  "key44": "45WvHuq72pp5BZb6M522i4S98Xfk5zvCs91hjWBV7aetXbHBj85zJgLJLcMpL4794p59vEraFEQVwnjpJJs4T3iB",
  "key45": "4zb1J25TbLsvkgrscXajr2YbV1LAG8G3dg85twDhZcqxKPWh6wWRVM538d1yXG4YYkXfheyBYtnKPzh1dCvqau9k"
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
