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
    "3idrhX5GfD8tANyKFE2tGmNsrGS1UYcCFPbfxFh7rDJ5XfhNtg3dcXTnfcfgjo3pppiE55HBwiuB8CJY1xMBtzhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtaprWEqARTQTYQsu3BuZ3stsmS1o8GvMyNqKcyqtYdipPKZg9tiQ8eQp5DSwi7SHiKt86wkaNQQo7WPadksDz6",
  "key1": "26yw28q3nPPrGcPjUuxkdiVJ8zUxEywhG83W297L9cnyPLhZ7nW2J9SmSYw65jgSXEi5Vyh67QiWcgHQ2vj52R1L",
  "key2": "4GFy7RjHn445nzDck17NTjzmCYGJdYWLgB2XZpXi3Z3YnAFw364no1pjXZBqKY5fZq1UB3PEBt2GJREeS4AVmS5V",
  "key3": "67W2ZmqXche1fjXBj8GasdYEj3wVBJE79QbwKSxTHKrKBsJEo5H6QabZyTVWHiz2TGeujWVayLj2p24PK22TPqJq",
  "key4": "3u9xm6P5MfTMDs25hWQGUWW51BtBdkP5MiayRTKcvfDWgFnQ4oh1fodwuZEibX3HKBUtg2aNSVjk66rei5DX9bi8",
  "key5": "sXeNqBUULrvEntyJnsuQUBq9CP1D7xdXjuETmvmjFaNVBSykNXv8U2G8b72PzpUctEZfwCHWtSyqX7TbHKreBUu",
  "key6": "43vtehbRQjxBHJB21araW18MGT11hhizuMiuxdXqSaCsvTKc6tdep9F6ais3VeiSjtL1sQBfdfe3yxTVsK1EjvAh",
  "key7": "4RoQ6oWuVMy1nYdD9MntdHSUG1h9upXQSJdBG3rcpXyrhqp7jreY71CHqv3M9eXyrjR4f3YAK6GpdbcLcAv4xwsw",
  "key8": "2QXcUgTH1T4JG2spbqqWbLtrnDsCv6koNU1pKfH8JUBctaEG4jt7jxyctAKdvt4A45LmfGhFERwrWgsY5YmHYEb4",
  "key9": "3BmapUfLYEojovH7y1Jpi4LpgJn6qDx9ArhKUZvivWotWuAehAtssr5r6d4Y5yigMGHNZ8SS2FyGkrocNvQJMBYj",
  "key10": "aieDgoDXg3PwmVgGsvDwvoQL4mCueyikVCvf7jiRSJ9aitmnQGXpNWa3YPrWywRaZgwAvdPGRxeAGcy9zytXuRd",
  "key11": "32Tc3MGxB2WmF1hCxmVHdRbkcVWgNu7rTAjcpi2iYZJwwdZpFnzVeyGcBm8yWS83HNjGzvc4jCYmoQWKdBEDKrpi",
  "key12": "3heRKgyQgjyo2Z5njX1Hiyz3Y7f3tLGxDHvjXX1xPmTmKnqa2WfrVehazntGTv5c9amqdKj6YKmvrS6m1pyPFywt",
  "key13": "5kYPsoXG5kY9Jz4bbnWU8EzWAB5kF8FXg7maYDir94aCQGCdPHvdK3DQzXiYWzogPhsumaYxNod2GWDDK3HC3mf5",
  "key14": "3rPPK5EVd5bA2WVM7oNMfNyxMDAD3PAQHUxJU6yKKF17pQuR6JhFL3W48TVZnc7e7oGz8b2KVU7apr4UHLSmaycb",
  "key15": "3hgm1i7wBnbsNjDbEJ9Yyb2ZkTDRfnaE4biw4WBCiJ7uExHFC1eYSn3Bp2Qqnhizf7hQENbrzHbK9qGeZCJhrfnH",
  "key16": "2phaPfekiHteK3n1H9jzEKxAhSB5YYJFuo1kRC1qgCnCUYo7TUcwK6oAm3kRiEq4GBkDgGhK8g19Y6uxqYFT7ZqY",
  "key17": "35NaNpanBrTM3syVxwTuEjc46QyV1PWoKxQNhubFdKSxACDYy1ijjGS3hPSDg2st5xQfNzXMSP4E9U7sagYSJxLR",
  "key18": "2k6kq22B35sQokdiSu9PgXjawLsAnqPfV8yqVcucrNZgeay6Xd89Dp1EBJxiXwp2W3gngX1gnAwtS4NeFqpsUfdt",
  "key19": "kjWZZq5YeAPBXxd4Q7BkY9iYQYFY2moENGYwHtTwCPhNqk6C4tUaBUHJ2245zNzCyPLDurxXa8PKAr6p5jPnQFE",
  "key20": "AyWUisGTy5dE4yywNDass5LpYGQqvRof2iaiw1UVFiAovbShXTJhTwtMEHsz3fL4np66cLJr3bSFU9QsiW5CvGU",
  "key21": "nVQKxUc9KHogCVZD335ug6hSLNnBksKMBTUmZ4faB85HzRNJpX3xyAXDKQkGZpumCTyytu4fHSGGhfzyUL8zyxw",
  "key22": "4gZyyENqhVE5aKLfXcni24jNPToa2QNVVNJPJ6vwnkTKC25cNcS2c9N8atRZnoVYRAPrjLGWQVdPrFZTXBS9h3YS",
  "key23": "5oefXjvGFeGu524C9neAQYifYLRL3zdmGGf7M95sWtX28qgJPpJ3ouhTbLjsTtw7BwrD3Ya1F2yW6HvFhS1rBJLH",
  "key24": "2NPLGGNv4c7U6H8hBd91QNZYVhTSHTsUGu35xCHiQHfbVPux6E4y1vMrR4ibidjw1xLVjPEkkL8g6pGyZJ1xN3u1",
  "key25": "37kh1dpBf6a17gESM2HFfM1bkjTzqFhPuBRqbShSSuV8Qb75PW2sPfJSKQPLYBq3mCF5RVtBWdQ36xmrzRx8Uqxd",
  "key26": "3JBJfzVof6LcQN9yCmyEbYHuKoAD5P3dbwjjurVUTDfFf92Lare2GHdBbNonCGtq7H433tf56fevmXNTtG7cnAVn",
  "key27": "2F8tJ4DFQFbef6XktRVkkpHBWEXivA6pqyHJHeDxUWV1HYdH35aAe3ENkm7mYVsuvNZ9wPZ6AhGbtwCPomapo6Ct",
  "key28": "2GGPVqJpu77FwgsEoSF37Kqm4PPSqDpMFPbbVmNbXg2cXGCV7YYipi1NCekRTzShBowBdMUALPquLMypCZa7fTiV",
  "key29": "5GfhRGusgh3CLGUJG7nSFT7BhHiz8aG63GZK7qtQqV7MGpG53bE1gu2WCRp7gEWF2rS7Ub51fcNjLcyzxz5qQGKB",
  "key30": "HEumNoATSr28jsqj6bXiw8bzoVj1g4om7kNGgHW3bLDLUxGVX4AS1qXmvqMKtH7GaPMumjz86dFC1HVAEdXufyB",
  "key31": "5GkMALKEjnzQz5dY9bj1xYeGMXrzMNYQFii1fhyGEU44VLVeVm2nnvReh42Fwjn3skmJgp1kHpe3715NgLghZ1Tk",
  "key32": "2CcUykt5BaYq8JpzbJyuQ5caeLrvkb6Yiko8SZtyCRTa2kRckPwT9PG8QXLjwrv5HMHdmr66DiinxgaJg9Gtm8MU",
  "key33": "jGWLKK4zefy8A27XyuSf4WALBP7rc5nuggpy7MnXJXXQihfykqMKZPK4Rb3FM4DnjXAroYD7vGRZ4bcN6KHWXV7",
  "key34": "2jVq58q9c8iyCRc8QCA4L84s8H2P46kme23sYNooPFrrknur2RwGzDKYKtESaQaAnWrQpdUnw3CNVmDzwGX3MG5Q"
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
