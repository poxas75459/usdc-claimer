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
    "3YwDvTdAjpacm2y5MhkPBU9zcSVFPU8YE8Ddb8PqpvnW8Emq4vmpTBEvsehTncDyBDETQNx6RbRwneMyz716JwLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qxie2kB5QSD5F8ggHgS93taqed3C9iJZwcxGsHck2Lrvg4fAFt3eNfuU8kPNX5uFFHZ9LCCpAjSCCvyJwvqHQbn",
  "key1": "3CinK7E4Ma6fmzsWEGtLqtLYwNYdMb2VNwDZBg1emd5VQ6xz8JMnBt8wuevMJY8TrL6ibLLq8HJhMZoGyWK6hA4D",
  "key2": "61Z6Tr5b14icqUGLh3JanoC1pDpTkuAaRC82ZP1s8rkyJi3x8P13bQr6yQ9Mzu6uDiEWMEW9dDbP2pG7AUAPi7af",
  "key3": "3DedRWixreHwybipNLPVsT8xSZVWp5ZJHdbc1UFJo4jeLC7YRgA17aSwT9QHG2ZvCgna3Lvpp6KoLqu669mqQ1ux",
  "key4": "65a3JreejR1JZ6hyWxFKzas6tevQonzZqoaVkXs7oubaevFiArMJRqWMppvJibYWgJUaNup5kxhqeGPCpHPVpUqj",
  "key5": "4NQVPbmryFj2zv5BRNBCowZpctw5PesFft15gs3HZhZf49G5CMrBihWZ6biwZqFcQZKC69h2kx17aPgiNResJrSu",
  "key6": "n1i6n9cFamQGbsYZFqt6CY9v4UxsCmBeND7LYPPa2KsUxrjGnyc27z9Pqai33thQaG49b6aCT3WusDdUJVzQ5x2",
  "key7": "354CQPeJZNTNz5o5cwv9udJgFdfL3Lcz7hrWmQ69uhKD6Cj4CbqtULKcqY6BNKXChVu8GqngmTk7fpjndEAkmvZe",
  "key8": "5gcfHfn1T7tnvxsSSKioQF5M3W1Ki8Upt6fxpCd7JDP3QYLPexGu8yDrfj1Q237r1hrfXdvnZCVrUx7KkSKgcFgh",
  "key9": "62ecLtAwk8GAiwi6RhWJ9y4meN8vLndfruamFmSMpsRQSENyLGtsFcBBVud49YLTQqCm7TuPtt8dKiFikKANrSJ2",
  "key10": "4aqsGak1px6HX88DbWU1hpbqSeCjU7WszEcSiwZBMV42X6U8cMEbTpmjGahLDUkMkyZRJYoFTXDLFJuzgkBPveUZ",
  "key11": "4mLXXDZq8E8ubuLVfueDLqLBSjH87W417VBP5eGzbZbu5YHg5o23tnxG9wftoiTpZGNBmhDvM12AngtS9BBzJQFs",
  "key12": "4ZXL9AfVdXqpjFYTJj3yG5Xw3frtTKJqjP5HAibP1V9gMyGNbM9a9zjyrs7g8dE64q8xaYK2aW35rLS9xBusGGVi",
  "key13": "2fqLGzRkgrbJyy4J7XhCdK1x4t83ECAegjPyovPtDTiQHdivtJv6asRHj5MkXnEcCFkdZv6JP6f3ZtWXvZWtNtvj",
  "key14": "4V5LxSodzBY5XB4rBdBos8Khk3VmMXVCxvw1gv4CSDqBNpDhgCsK2UcqhYL6L4S6pbM1bJ335MFkUyXHfU8BTRq2",
  "key15": "39qTiNH46x3kHFCGU3nBW8v9TuisiPgY5S9rY6WXytvhhXHNv3qJRAtCkxJXibLLajYhCAu4PZXzLESXFhJsqSjQ",
  "key16": "84M1dTVjYQZitSfC1VuYWP6aAhikcAe7SL19tgyb53C8kYcWRi1tARrrEzptT5ejxrZRSCB5icWCtWKkhqwLQyG",
  "key17": "34eJm8C56JKWcoHttL6jSavqD1mTwZvVYCPxJ5wN2WSk8Sq1S4ZTjGpCXvUbSy2uaKhVwLZZddBAdCbL8ubdCjRQ",
  "key18": "4kKZ94UNKCuFtYhZdgjauNjrCLWSsRQtdGfKEWUCkUCSVAeDibwy3Uhk7UUezv9rdaKAyxMgTZbT5oWU2NjHaxiG",
  "key19": "4ZH4EyqaNebtQiqoEbvqC9PaHWH8wiChNPyCq3tRWvc8PzSG8bW8t3p6nEm3ScJMEPVZXQK1Enoq5L9CM4Hne7se",
  "key20": "2fZ6CGogUgH6AMFUu2tVKrdGdLeuGzyZeq1kLr7fAiBByzfssVSZsJWBshFBhZitEn1xx7cwe953JSDztTGUHV4k",
  "key21": "2yFD3zR6ybVGwxCpWWN2uLNSaYM2AJdQQwBhJypXTiVp4KqzeL1peurwN1MTaJiTFZ3jvCVehxtwSpgsqeSSMSKJ",
  "key22": "2c2Cfjz7SrCePdh7M4hbcqPmVhgKQTCTST2yv5H2D6f4ae9NzkGfFY3Hwf9Q3e1vEaYRi2bkj3wwfrKDjDARtFY2",
  "key23": "4UAfb3fgkSE7xDDJZ6RbWhY6ECWvQSadDyeUdxgC6ufs5DGz8faPTLyqJaRKMUhNFEQLFinKqNwC29UTvY1poSfy",
  "key24": "63zaTfvbzUcayFfKNL9C6i29wJHruobyrHgvq1ZkX7kntnA8nUBcvzoYVPSKDwtnpd4EKdhV6ehMJKqe9CrDnwhh",
  "key25": "Tx29Uc1u9XfVjNhbaP9tN1i3rYFtm6B5P1TAUfuKytkRWDMdPB5RYthHnkLgrxXd3PYyeVjUzVR5nfJNZXAPjwR",
  "key26": "F71GK57jueApsfZc9DezNMJsxsNZns3uYqMGRHNmyHVHN1xQn9yB998ssQYHDu37yCM2T1VvMB9Y15vqq3Ej7ze",
  "key27": "5bY1ZrH6XEvYdhbzVFgnoCcXZFVZN48gmRsSrzVmmKERbLK1EMDwynQUF8ysv8aKHYFVLBuSoEVRicp3NJrGv46T",
  "key28": "48TzrVeLPmNvk285EKiYTqqjPQNX1JcDDaYy5BFGH8p7MKV5b5AjwLLUqMq8KMDSZvq6ejKRMEv3ZuCK15iUZeSa",
  "key29": "3KQpDVjETQZrbfQEagJADoSubBB9oUisPDHGPsWfV93wVbCRrRzYZ8uUNZpqLRRKwgoAmXsiKUBaWd8Bj7paiy2H",
  "key30": "Czymc2s4rLycFR5fajXdK3n9bvFsnptsP9DseZVQhDfnWxLVvqMKwfRY6ujNGXGjgdQTnk2yzQEZ6V1cKf5n8dk",
  "key31": "1mBjHizZsb2vqWrca5TZhsbb1e2bN2LD81a6ho34erZUkG43GuUkXc4kxQC3w6DmFbBZ4j6cx7itrC19ZWPnijw",
  "key32": "27CDrR96dMTiAZJc9XBPZhbN6pVHFDwTZ1SeaNAr695CQfF2wFQKZuqJgs8Kbnu6AyeM4w7mswf2oUGLpeyaNG1n",
  "key33": "4Utx1VstnDf7BFbnHA9SRejiSVVjf65ZmvwitEnmfsPVnHQAASp3LTze477oMDxsQo5gfrGHrMDWmGEkZB4KbAbB",
  "key34": "2oqydjDv7Q5eWVZ98e8bMpXbaqh6yFuj97WLhAzXM92KsCqSudVQ5a3bLwKGeqYT2mb24VYKouuv9fdV5WdR8rcQ",
  "key35": "41SeKmURHA6FYznyRL1Yv3YP3576KnfCSJduZoFzBq1BVtkQPkESSNvSoEmsEqDfWRJzTyh7PqRKnqrGpREg7r7e",
  "key36": "3q24D9RaHz6HSrr3H7SeZKvkjnYSqb7sa8xVRfAR24EqswZqY4kSco2iFBbWCcg5nmuLRsrCT649wEd772cBdDLj",
  "key37": "wAsTbbAPQZrR2f2JvcFmVmvSiG4Y1jSSbd8vbrupgHJgmDZznyjNGabVH1pkLvaK1kL4aK4JZaKGKCPjUNhKNzW",
  "key38": "5nfQcBesctKEN5aSpQpHboZSCBGuf8EoXQG1Gor7kHbGvV3skuQULwEznSMUoPEMBzbCFRQpDtSX6idfDXuZPvYV",
  "key39": "38FZ99YTkYvYBgeoggRF8CipS1nZCnkFVyRNyGDKsB24cUZa6aKRHnh89qPyaZts1vjL24yuWvN9pz2F7z67KMti",
  "key40": "5W3MCtCexcxTzxC8W1EnjbPsZvdV7jRHvinYR5XkYYVTyriT1DgZQcxGQ9dCcvdE3h6XsGfVL7TVpiU3zQdDJ5jo"
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
