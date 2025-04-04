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
    "63jD4aLcALVwUweAfsYkzjw2KHu4EWfQKtozVkFoq8zHSZCkq98TNCAN8PnJ7tr1uyFKUh23v4tDPkni6X3gEgzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oG9VpAkeLArviWLVmqCSBApyKCHhyobyEz7dmtAw8EfJEuZ64Ex5C7J4XWLZdVtn5SKSTw9E9i7Cq7HvpvBUs68",
  "key1": "4gkKuYGh3pBteehA1KBRzMykapoSpc8VT1aC3RjdBBv1UoLBote9N9V3yv5KcyPDXjTDdFf2ihEo2Qogcu9o2vXJ",
  "key2": "5VeDmzovnBA2RGU5udBXEbqU6AYZfr2GhBUsWHxrt19tC2EwbhSwBX9gsjcDd3Fo8983HLGj84ksjkDA9bacfzVb",
  "key3": "4Evp2Wxncm1niKYJMpoW5vsKhEFii9xVVaX648ZHX3BY1hcX5oju8aMFBkAViydjnvT6GmTu79RkC4zviHzJKfkt",
  "key4": "4ScYYWxt8sdEomxGZ5hmGgP66N7TEr3Ki1fmevzx1ZW92Es76bsqNnZwkUQWPH4qRpAyREsMn8Nk14metNkmFXvY",
  "key5": "59xmWXADt5mQJ325P5CrsfcHtN8NJjTW9WTcDZmNnVv9mNScu56t5hVK3PkmmgBRMwtEcBpGcyz92S8rTLNdVJyG",
  "key6": "5kFe6ZAGRhKYKn7Sk2NqhR754rDj3CNMroSq8ErmiWdRp6GeZjoPeHzEFzYzH9TJvFugWtuLJ9vZPUiquiC1x75k",
  "key7": "4dPDgPyZd7pvbVwfNmvVdzE8D2PAWftvCh6JSXbv2b68sno3Hg4FwKH3GPWdHbXfHRcbEE5CzoXzQ1MdbBhbpXaQ",
  "key8": "2yhiPHfjbiqppCWNzwDVy7zRq3qhKkzgGEohTzpBwLoEKmDKXbNPyoWeb3P4C3zvtUda7hwqVdqc9WvLsaSj6M2K",
  "key9": "2sJ33Rn2nMXH47P6kDGbevRqwA7YtU5Kh1x1MJtxKfxchiHUMMQF84uwhL14v4dyxhBYbf6aQHp6H1tvDbXpQ2dP",
  "key10": "4YTYt2U5KwMv9SM7Q3mt13XQGWPGs7bV7RVdSFjhTv7cmK8tkSQucgMr3CV1QPGFibBUPv69orhgXGQqDtXrbC22",
  "key11": "2J3oD3JEtW9xZEbR3K5WcUhxaKYT7AEH3E6p2AuMV9zREDGvSydXfHgMCbeqCG5PggpZBAprXNuLgTFViSXjURom",
  "key12": "5YBDQiBJEzQxG6LsExahVva6XUYWfkxbGspiarHvq9PHemL511tob6Hpy3K5LjCPf6UZLXiKyY6zjCQ2u3k28se8",
  "key13": "2aqZH3VY4c6aoZzo2tqAijm4xDFeYEBvbT8XqzUQjYJw8nz6bCyt24Fu3vNnDCGwbnMsGVAAiQ5Uvp5Thq8C4mfq",
  "key14": "4A9QGwfNvA5NBSGP81MdCPxJH3kr9pTpn3ZrgWqEbRBHib1x3mTMVYDZmJvhsEmXTCTDxgPuMk8MdqcuP8JT3Gpy",
  "key15": "4sUTcYL3PJj6Q48XBTvoUTxvRjcLTpZctDTKkgkWonYHrFgYYxQFF4BCziq42jFudooHHfphRwyCcuDV7kdMSYCC",
  "key16": "66EggQPUUr6hpSNhqFNzEJ25MARXX2xLMSNNFFPjdknYn2NYC4F7Q8Sg79vpt21Y6NdrTbKssew6XTNsUTPqDsDk",
  "key17": "CoMVXFMzr5hUbuLbX9BAoh9GzutM3whoeQ9zSxqcBPXrPomzjuG73yU94rM6Hf5mXhPDC4VJzynjM5J3JCXZ563",
  "key18": "fccoJJa6PmZBMbn374TiEgV84jQ5pAqYUqVGwJScU6u4EFahD3jXBWCJe7553gYpDf4ctHUZodp4nKD5ysDUNzB",
  "key19": "2HPVdSexyitYSd6D39NFdADZok2yFJE16ENiBaGxAmrkwTJo9UCuEJedeH77RaVHBbtrYhag8yXAJ8KEn2LNDSD1",
  "key20": "5Q5LJa7SmLeB2ojxYnzE8h36P9JMRiKYdexcir4ZXftiz8fnpMMHnAo5q1usecD54SSDnmT2xPZJgh8Hk9G8WfCx",
  "key21": "4AayDaBGk7JfXU1pmad3FkBZouVM9tZMUKLVbtSp8zjX6ypeMEuUiGEnmmQr3HB5T6yCA1gj1ZdDT5Wuvevqv6Do",
  "key22": "65vYC5z5rt2ZLK8uSCAqVbQY7uAa4geo46fk7sWMMsVqZ5cyBpzRnoE3qbBeM3WG1VQvDz95DvbVKviZooKsWGYz",
  "key23": "54S6pJGHUgseDENx4JkUH3mWkurDxinQDE8r2TgpdD7CyC29rYrcWEt495SuTK2ghTEArcREUrYqnq5CLDxf9faL",
  "key24": "3NRDeYr9ciXbh3AgvsNJxFxmmVQ188UwpZELiEkutTLFDiSoAveDRpcRGZV2UAHVGiNZzra6tWmWCGo8K8z1rAX6",
  "key25": "8JN79UEVVHuQMrK2FyoN7GCfQ9dZzim2Q9nS9z82fzr1VFhqgqbKCMjVTE2qH9AiLR2YuqXYKd8udpgV8mYfYTX",
  "key26": "4jYKeDDjKhChU5TuTRaRbEMYigsz9MdXCbeq79wxtmXiSy1yv6HyhMEvDsne4wXMrWZMf7jhzNu4mM5tFjtEZS6R",
  "key27": "35oKWfQTLkzXtxm4uCwEAq1rbqs7jGHaJLX1q6z6qnx2XN6imNut4s6iQ16bjGavTQHjYMJwQ149vz3QkqYYK4uH",
  "key28": "2zBQQ6wbeik6eJNGfnSYzELVdw1JjhK6Nj6LWspPAceK3cgVwZnb7wdDYo9MXarSZ82MxKRcYW9GEqM6h4zZ8jaW",
  "key29": "2uEUEtrM1qwkQixJuWzQ1jaNwUjjZzGin4JSZHTb1hsSYRqJ3B5KmVFtmwPjLnGPnhPNtAz8aHaasHtLTS1iWSW2",
  "key30": "5bPGC6AQcMQYShV8tDY3kBs7MBkYeCNRyKizruutyR3P7maoWfK8gEYE6mW5YqThzrghVk7nii33NJ4Py1XYDVij",
  "key31": "5x5EbP8HBbuhrwGKJ1ZZAU7obbMDLwo7Gn3HXbgk9QjirJBGQgXL43AHvrVhc5AwFABLsBnLdgwu13ceuPnAu8XU",
  "key32": "23trj4q6X1XhjV737vpSXfDaBb9Z7rR1ynHwEPRUzxbGTxE53eLhvK2cKW7RqkSDS4hWUPoSGkc79Bc5fpAiRcqo",
  "key33": "4RP1ALVcNRyKWrNmwLi8GNP73iytxDMcPcbRpW4sGYkQfd3eNWH9TXxaoBiiVopydDofwVRVnwBmkywt6Lvqq3yU",
  "key34": "2bAPDxxiD3h5nRVoyEPwsMVvbH7rwpB9XM8VgAbVSqfV1pfvuc882dHErz8ezMoNfBzYbg7mk8EGtrkbijscirKB",
  "key35": "JuubcW1u1e9gwr6b8sqbCMaR7VgvzpHkES2Z6sh53aSbQGjrSj4XzLFPvF3WX3EZoAmtNJ7g585TwHY7DvRMQ3q",
  "key36": "xZdjdbaYL9eThka6ATrpy8daT75obkK9zHU9Dptc8RR7jJm2mkJfZ8btQYrjx3J17XCLZaBEK6vpAxmYbNQfCPj",
  "key37": "3mrYh1Lw2Y1gFk7trV2gtLpuzAthG9hhAFhNnhaCcEAcNMSwVcfThG4Sb4nPSN7rAcAyRjWhjAknKdt1BcrmUYs6",
  "key38": "6fA11b3j5VrAAtgA4XN95rcqGgyZTAN7Bww1CSkjmdht4q3aU1SM29YCLFAF97S1PSkFn6BhUSvuPd3kb96dNWB",
  "key39": "2i8HRrkHLLJAUv7Wr53MamUtu9rYPs8UGLKqycdBGgyHtXwUzLjcbiN348GryGZpiwwJfjZYrdLiTvDU5Yu5o1PN",
  "key40": "5xdiU51nWacrjjJrjvYu7zmy4kkvnwZgyMsEzPrgDUiFo75oTYDZQSGw3aCbsY5fuh964rZfGhUkm5PKa2w51cFJ"
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
