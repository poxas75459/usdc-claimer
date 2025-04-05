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
    "2VVvbzUc1Pkj3XPJd7vc66C2uF41uU425s6aLtWTQ7xLFMJKhC9fozNmqg5Ss4Zhn31oHS6z8hyujKDgtgBA2CKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXKoTPXj3T7LARSLqWHZRe2mebCSHdbkCnjv4CSF3yQE9QL98oMAMkpZQbP8eWpLKvYn1RdNWyvADdBpwkayqDB",
  "key1": "3osxwjr3e2FwcTBFTNPU5QqaUWyBY9uYBxMnzTv2GXupgSQhjCCYWKAQ8qNASPpoFUg4Rkfx8ZJHS2HAbmnrVNQm",
  "key2": "5uzbq7JUqBaWJcnUoKhfZ81qFdfcCJ5RTcHEttXjav9JS5jUUpVxEYTEhzk2A3XVruHd1Aphg4bKtsr9wdrxRU4o",
  "key3": "2HkQcqQdrVwAK74CGQSiyxBfrVW8QmKGF4xnn8pZiWPXuUawQVmrtnYFWjoBfmFuHhTkbFt7Rc6b3UiVF36sjZe2",
  "key4": "2GxgGnBuz4UTb2DcmwZHr3ofak4p5cVxEWhtYbMPsTRn8zbsjibmQYEVUu8R23BeqvAQKPCPJbbyAwfBFEQRMiA1",
  "key5": "5dYJjDBmk3xeR1CEPw3vicRae7BuevVedKJBgsW2bCLvWbzWhWEGkdoeYXgEULKvLy6rxbMzAkXWWAaeuS7wW2yC",
  "key6": "4v7qcW7BKDgrLxWHDDFu8pTv3bqQUTA9JTTUD3puEq16AA2rt13KEWZRZT32kF9vMLjEUAS5ciKqSpdk8CHdPQLq",
  "key7": "NhJ73HUxS7nxiw3LgE6PZo18CKR8crtaXAzPhpSLEWxVqqKacwjjn8Me8Xd9CcQd2evXgyACDDBiKgDXJKNWJWj",
  "key8": "2Fc8LLm7aoPfNcvHLyfLqzC5BLZPXFzPHgqwFU7ZNtskG8kSSPhZSg7t3cFm3dTa96gBFcpD11CZb1ALjAGuvbMD",
  "key9": "4zmcLpiXExgpw1EL6NGJ4PfvF3D8dV4aiVrEzwd8Vgek6qZA2GVRd7NnHgAw7k8cai6zH8Z8944zZqNbSWM5B6nf",
  "key10": "2akrTQnZMzkHVmzZVYb5gjLZTeaoscQQUxVkENfSSMcgxE6tqamn11XcDFi5KLAoJxSc5rQiiwBvUX5BnFHNodT1",
  "key11": "5YHbXfqMsN3AckexXGtwFtV6ex8RrHGMpYoKSjSZQR6pxFEcd6Wu38ZYqBfR23c8jxi5fRrNBHdzQqcjRTsW4nyT",
  "key12": "2d2YsboynqVLNfvxgEzL9BmktbKkZUwrAjtUS4GMTZFFFZ2QJeqH7L4MLiXn1U95aevmeWRQmNKmxWYhz9VX5ZHM",
  "key13": "3N6XyiRzqt6zMpYy5Qeyrasc48tJdx9eNg5rtgZmMkQjaMJgbEhhZTohM2djjRXituPZX2yiWyTjRxr5e9EpsStX",
  "key14": "uqTF56yE2KiWJ4Eqt8rsz3KJKBuFQNFzXKDrn4kkSuoZTswuVYswqagFCQj5x6HsDSnXb1rLt2hrkj1kxcuyq3H",
  "key15": "3AzvDVtZdbUTzLjD9aX3mFTjvdwp4JN3pR6W6Z8umw86EZWuweixKMPoznaKg2SqUR5q7ia5Px8dyrb3ZsXDNcD4",
  "key16": "4uvGtm8rzX5oyUKgxMhr9CrMdNjkU2CFXT8EAKJBau21dFfJvByN7rRxyXpfvHZraCkBBozdhDxQmda7iFQMBQR9",
  "key17": "4Yndv6cpKgrn4oxV9rRCJtxvNADSrmnL4dfYm7jzHZy8q7aRAAmRPf7woN3sFEu5hyGY46tfdKGFmKetGRzqWCtu",
  "key18": "ockqMzoQs5TPAvtvTofrGGCkEzmYJdKv5xSXtReJTdVRjMeSnDw7vigQBFZyacpyKqL84VyucJe5wp8Wj6Ry3e3",
  "key19": "3BoGoJuj6NJdyqF6KQaRXKnGRBMaJVxjc84eCBTV5LJfQt3vNogXBwqLKWerWyWmbLd2wpDhQr3GiZ5DPPwFUdqp",
  "key20": "4Tz7Z4kpfe1cRRW1Cik1tVGxJjkk7ZR9oB4EYu6Wm7skP3CeyUnV2HG81BQZpwYbLgFoGXuT2gL5E6FkJS2pY9U2",
  "key21": "4eUZ4DAb4VBWi62Sc7ynzoXkhJqGKjPzbzvYSiYTsVcNrFVDg2B1aEZ7ycEBbSjipRcZyfzRCikKNxijb4jcWbp4",
  "key22": "YFKS1woqDabEt4uRjeb4DY5XsfbR7WgNHDYgWF5TBWjfYkKzgdvB6BR6Zg38yiS3qp85TXVwgUPFaRz16gjRFqS",
  "key23": "3724XqsVTRa5pPaLYEEE3m3jdYbVYG5YdnhKPAL9bdgk6BMSWT6uv8EoYa8hxDf51ABnNuuRkG6pFcKfuYNp9wbr",
  "key24": "5x9J5Jkzhp8F6oaF4hPHs5X9RU1mTturfpP4evJqaiYi9vSZ2X4R8vAuahECo7a866kn5bcZ4TH6cn94oQNfrPay",
  "key25": "mfUv96MfJEmWcqLf9ysFsAvkT1VeWrXCtVLUnhkgPLxjAJrg4nTmBW1ALVK1aUrjCcoLdKZidRy3FzpPJUtH8y3",
  "key26": "4PL5exANZCtTCyWZ5q24t45vCFrkKHpmqmkZmJaqvjvuCYbGfmfpyvjgvDg1XRAjPstTQG9y8eZ7kK1n6U5s3UVi",
  "key27": "544eG6V5A7eWRCnGVDFvGXpXXszwAFYHNEsviSmmfWfc79RHpgxVEn6VK3NQuMbGHcFoSV95bov1gg28pqLwUF4t",
  "key28": "4xAGMVJwrVPGRMTS1cfcN9TTCtmbegD8g2R4t8qWRv9bb6GWkzWnvKq6T8kMwxx1TLLp1GdUgHpDMFXGWp1cFNDg",
  "key29": "2erDSikWESks1Y69BDnjHQRngUhijPQ2seLWBwaU8Q3LP1vXXZkeDeBuvmMUJ6UQNWcnpN21ygq7KffuV9Yj9NxT",
  "key30": "26cmsQbR5uo4y5y8nietMhc3owS8ucNYbMBub6uNkNo3odEDCu25V9mtbgFTJLuLZALmLTyoUqVA9tauJEphNNJw",
  "key31": "5WBvbr5X38aod5PAmvCWTmMesXwsBb3wJJbVd7fBPRmTkwYW6N7cvALTbS7vZF42SGzTyuwTMAFSB9fJTJ1aL2cm",
  "key32": "JqYPkViaBtTVMfz3ZcvfNjoBFCk7g3QQTEFXMg5A9omXhp4GJwavPuB7m7zEtE6nZQhAcnvYBBLpVE3eGvZffEV",
  "key33": "5kLiFh99X95n4f5rorrH2nYmJaMKbwCuyg8GzG2BWY3KmpaHHic4btUK68mr3xNAx53ka1iUFLTjjr9hjuFYbhtM",
  "key34": "2ziRrnyGxpUjwdGv6dXon93gSbvT6raiJXLbwr6BgRsPwwJxDJbbiGfL3bf8oKxZUPhWZe8BcqNismUispZbkboK",
  "key35": "2Majatx6j54pPfnPAV8wEHng6VPBELAEuqFdwqEuXKwNqL8zVESDnM7Ka2TV8m79eTJQktpwtC4Mozo7N37aUyRx",
  "key36": "3M2gNa5iSgWcxf8sJZz71F5cqguas4CkLYDqSb713rwqYJDC5rGWvmApKQQiy7wzVERz1DhFyH4ukNX5yeyh892P",
  "key37": "duWNBWeVkD7zAoYMewHqxScnkSfbYXsZQjAviLcH9BrBTLzEVe6wZFVhzJoCkUr41g398PuP5yyKbT8gbp9y5eR",
  "key38": "AV4WNGbjHLSdAbVWhofCKcbJdA1xpMXE3qFrvTHt4AXMBS4vruEqdCPkrk6RnZgAPJMjy186iUxAQd9cUuewiYk",
  "key39": "2jp66Ed6Ebhb3UFZU2uE7RwSazymgP3zi1gKfn6QAgPANWEvJKHZLAT9dmSALkVDSAcGewiKofzt7haGDt7ZNiQ3",
  "key40": "5sGd1WGFAHxikjsYVRTpYhfsHCwnFivn7ysGVzKqiQbBQ4ACLNSQwXorMGTg92nEzCYvuhmvuEg6Ze6vikEszcJ1",
  "key41": "HpQ6dmrP1TVh5MxDeDPUgbBpp1Wy7cYotXeAHBE7DHjpUZqRxffEuVS2nM3X9SUymWuq8uUkFvHSmQdpmkxGLoL",
  "key42": "3DTjkFRjv6JFRu15st1etkgnCK77VewcehrFhKVx4qkenPVw59xqEnNsNuQtp3eK3LzZ18wtNxzTvvcnwaKYnvFr",
  "key43": "3sE15iGEBoQa6vypBzxMj7w2gDydXAdspiFhG7oV1RLL4vdZSsPumwPFDzKgX9dFbFKaa6V5GgiNPB2r1953ENZD",
  "key44": "35YKQCMYrFk7Le1iCpN2Vcp8Y9w69wfjA9KwcvAwZVf6RUFZe6go9kp1bVt9fyJqaAKZFbHeJ9w48R3SfSZ12FBY"
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
