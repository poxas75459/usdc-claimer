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
    "36b5muGFoCWdTbV48kMrFXDud2V1Rau8zPZkjqonSFu28qqt6jPW5Pzp4zKyjayBtVJ8XkNF63prV2Xuqw3HifsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xPe8i19UD9hWYrALuKMVK6rtoVfTS7hxk9Nd5H5Y4RxvjmpBkJbdXLKSqvN55gEntk4mgeBEbsmVntCiJjtU5re",
  "key1": "5bdBAyHNGh3hk8N1ewSYiExM5DHrwdYf9C4HXoUxUHQ5P6mrAMJ3UuSwjeD37B4k93qwuWxuG8Pv3x6oWiGrFCs7",
  "key2": "3BrCXDyzdv5WeCHuRkjBLm1crw736xTdgaxHnrPNVdy2tJnU56qVNbdYPnefA8tW1NsXcs6tupDcdF3f6TLeHU4Y",
  "key3": "5pELpXLtF98YEeE8pa6rrbTH2zLET9Z2gfzGfxPig1qerbk2M1rXu7cxKtxQX2vYFViFa9hNE3LVoH5AvaXdQgfM",
  "key4": "65SejPth9Z1XKPtW6vRwVJ3wH9kXrrYnnyHSPLm23UnAX5mH1FK7BMLZKjors2huyg6BYL1smF61AdpTozKeFjsm",
  "key5": "3xCeT4QK8hTx3VH8UZaeQvnPA3NRjJn9Zd5FCxr8zYp5u63R8zaaTkuguAzkj5XmmXFZfKHK4y7sgoZbioHambJN",
  "key6": "LJ5kTwGQDp8M62EA2JtrWw2Frn9rGK2XbRZBZaYS95jKzwjEy1SkSJx3u6T9YzDobyUaeay5HLr794cpUFfApJL",
  "key7": "469DcFfYHTVPxRxnT6ihx7aJw64y3FEaGbpLFQJmp2w4y8zd2C97aVA4JHcnaQwxiEG3XQqWagDRkQAugHECJqih",
  "key8": "2q4b2ScnkL2KPRzhuJctt81c2jzWYLN1j1EX9EH4RpRE6EzQ3q6mZhCo1Anjpy41yS3gTuRqGx6JEciyRvavU3vD",
  "key9": "4mYiBruRbn8yicaPrDA5HVYj4LVp8yLpF1fQz3FfE4HsQ4w7H4FMudbjDa3xk9aLrRPdYK7vRf7rW45Rc3PMjhYU",
  "key10": "buvzsCc7uyj9UUPREjdpXisqQ3dzNYp2B6Wp5tonuRJvgWbdzu23qoY8iQtyZjD6REeDNN26Vv1Bsn8SVB37sdz",
  "key11": "akU3HSixUdxTq23Xrx6XVtZ28fhLuEGUPRSYLvkuMEZA4yF32XJ2hn7Kpb74BQrvSwJAHavoBVg3s4Wya9CZWw4",
  "key12": "24vh9Vd4g4Yrm9i7GNqoYAZVfP68cEbMVXpSyYb6f2X3mWPmSbGM6JiNsa99JcA1JBXszWqmDNDu5foa7LPtFMXB",
  "key13": "2KutSNL3Wxp88zVZLUvzHz9zg8q61S9T7dmuzZur116hDggS9o7RKETGd9finD8Eq1GH4cMLYZMexRR2pGf9UBqM",
  "key14": "22ZMA8vdNPeRmLyYC2Gy7EgSjuAc4bMxVk6rsiw6Wf5wtF69BxkJ8MLLVunHwWxhCDShsTEQzSAn89Tt1FMXH6rt",
  "key15": "MuBpkJUXxRUoi3Zs93ZBsSRW6x18jwDwXpt44cTeKdENtLdcU6J8jqvWipM13wqLUYueq2a5H3REyTsqbJRE8Zm",
  "key16": "4Ji5y3TPihhuDZZxvkwX1Q3ENYjT9o4KkbkkLh3mGDDSwTkaWCU357NhoDMPgcFHSsXsMgQkfrswNDC24yCYsYKy",
  "key17": "5mhzKVeUFWhWZRYePTzviFg8ht8vHtBKxgNryKFXdDHsoBRcF7tHesAhbJcQ2CGefRgphJzqf7ZfFoR9Sws1y4N5",
  "key18": "4Ft8cSynrk9UaRdqn8TUWQEUA3arn6ruvct6edBBvC122wm53T2F7zn6hBvmTcmwy53kVcDXV31Lq3pQRdoqxUee",
  "key19": "4bBraGpK1mZdduoEpiV3U4jeWykuHbLCKcsiWE3idsRSVLwkrhE9NheCcJDrP1CuQHiKhrcLT1UoowzD3CkG6GYy",
  "key20": "216bikbapeo6x2C15ZDK9ZXVDeYf4udAxt78hjYcwFLFHAW2S9W6mmjWdFTYrMzr4iuAwAxNyHMxmAqUmcvypx5y",
  "key21": "2PxdY41wn6jXBEqhbhAkuMQmxn37sftqkkc7kotCALLNcmDk6kQkhd21G5p4Y8UZUxW5WzjyZvsKexDLzQxN9io9",
  "key22": "4vFSdy9qCawcunh2drndMmy8z6ShWnk3vE1TXQ4duq2tbr8GKdjz5wfWcNkp5c7SyanfPVXsMNHcxo7beTqPRkMV",
  "key23": "48fDPhuRW5aqMu5aDDKYst96Ep8T1xPqzz2UUzAeZvFNngSCMHnJacxPW65PZtDV6pUMnwuLsyYz6eMXWsv7qBg5",
  "key24": "2wqhrjAy17jP9doCQDtXQeUU3TWTCkqR3h5d1nCu29kp8pyvQ6FfNjVYUXmGjFpLeLQmJKQnaQLyAtwZkxzxWzk",
  "key25": "5AUGXtUYtBKNJ4cm9B1yC8D4jaAHTF6LQX8GDkzrhNUVrtVtyrz3hcvnB8dsUE9hhRYcpNvqCVnfdyvJFSmteSe4",
  "key26": "59Tpr26K1nKTJMgpTFM878eosFGa91W6vq2B2BYKjVr9FeHYVUZubP8bmm5d7rEXfbV6GXGUevtcq1399UXiQuHB",
  "key27": "2LWCVy46Gxy83KMYBfzN5N7tL5GTYSdiLyDeFma8K13zVX2aEg8QX32gPa3FyndzFUC25qymLJPQVLTq6JPQcmwd",
  "key28": "3f4CAAFeyCUzwfBZuLsv2kD2nGt1QbZHWWJQJvAxSk56iKdp1f1yxKuMybJwfQNjwRcuVn954gMW3ZN5dPxeSei",
  "key29": "2xucnAFkdgMDuRrANg5LCX1sBQ1s6fZiP9BEqcGKPZ1RPJ5urgeqzFHM2jUd98Mz9Diz6D36e9XhMhJdVhaudN1s",
  "key30": "awQVafmWk6EjXhikRGNJiuq752ibMZu79mXw6qFynBppXbsXcuBesEHX7F9zUifab2LQESZZ65fgyZsNP7BQX5B",
  "key31": "2g6NL39xHwTuJ59i6NR3WK2GYM8YLvByQVwcFs2T5SbYSgHXU9FWL7o745DqAkTP9r6dDD8utKjHPTqUuNHbrMT2",
  "key32": "3tXXp2K5BbTiESbdAtfk1Lb6RsvaXCSXZa7q3xf762px2ey9NvTzSAuVyUVohA8dMzCea3x7vWdNGHX6TS4U47cD",
  "key33": "dsnH4pEA7uE5JSiesbX1qE53NvQUpfGN8nUkDZJtyMuZFLFqpeLoQiS6Rbynxq1bU5RdZLiNaX66YqUF35i1aUe",
  "key34": "3CiMnRe8A3FnLmkEpDT6us219KEZ3Pi6iBTD7fJuyY3gFZPgHfYgMtREsojXQieMkuaK2b1LtJbeXEwWVgnLK5k9",
  "key35": "NPJsdyeEt1iGkRLaqFaiAgjs828ZZQ8imx5G4tAEcuHJehPDkDAobUEnS1dpJbjA1YuXAyTVsY8dycugDYfX32a",
  "key36": "3kQrmvuSWPZmbjiqRsU62UVQkJara38CqiZSMWRY65B9fMGRT25JgmZte6HQoPpmQPzuXbG1WXW1ZqgHj2dp1Fqp",
  "key37": "3vuzgLV6vMzYdKUhF63FNdsXdWh5Eyh2WpQn1eFtjArc1GkEBnEwZQ7WtyRDFbE6wq8r2CJQ154D2xyoRM7oMW4x",
  "key38": "4ZXFwX6272eouY64MvBV4q3og126bMKJe4vJQ3iRahgSGp4Wy3HAuAzP8yWXaWS1zYnXadmkcbFuZWjk2twDq2Jp",
  "key39": "3CJt3S7wTXSyxiW6DgZGK9ru32i6Brt3vJjTaSNBAsvEnZxp81NUgKSPmLWZGdu6J4TsNVAUvHCAxUpdQhCKvkn",
  "key40": "zD7DMmpHAn71Gtnz11x7HVwSbZAKu7Stu8RwSZtGGYGASjxZTmmsZcj7NGLShY2nj7VWZV1nNFGJukmYBASTyv2",
  "key41": "4Jf6tyUxbe42znksKQLeJ2eQZq5wGiW6mDbn1Q8fMHMQgE6NDfAyNmg2xRNEjS9rJd6nDXiyP7V17p63sj6e1hdo",
  "key42": "37ixB4nMrb9uXw8mpGFfn1AGK93QpfHFb7z3p8cq5eXi5LwErxv2AvvbTtLdm1N54CYxXd8sEv88tL4cMZccmiHt",
  "key43": "5o8vD52a2tpo4xyat99w56sxSQUgEEmVAkq65x89575mPrpZaiaCKxGu8saTHHeaWKQkhBYZXD91CdiKWKAGj8BS"
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
