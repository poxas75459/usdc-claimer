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
    "3dFm7UXXst4U71YYzoRtGgmv9MqdQFcuPdMJNyFuNBYYtyucYf45g7he9px9j2VEHfrpwXiUZnwD6BeG7aHCxK7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mArT44MX5JkZhuLSorVsn6Y9CNGQiWqMiPUfxjVraf1jTbPk29gqY99zmQSjrnsW6hxtGPda4HeJGhddnkeFZSt",
  "key1": "3Nr3uuih9zs2wT4uYCR5EncokG8ZiiTLpShcWC79K1RjRMzn3p8zf7oU1UtTLqPzLfH4RarEJ2AfBh4QS9dU5TrW",
  "key2": "24xWUSfGHYTqJqk1BWjiieas86GGMHBH9Keh5cuyd5zXBM35GAuSjkABW6C5PufN6JzhiVdZvZaX7jzB9hYZsYWf",
  "key3": "4jgKJjxiLpbum5kkGfcjEbkibRY6G9Lzbd6AoKihGjpYgCUDKiHFetrbF9WpXp5wPiJL7raGA2oUdMD8USg8QYkZ",
  "key4": "epFCyXuKkzqqXBWHBaViREtZGh8xb3s34jf2F8vRT8CJWdHcwH1Vsd8ffqpuFr57mawDz4G4ngGFvzxxQYd1mX9",
  "key5": "LyB6EXkq7gXfi4pAJr4gRWh4N6BZqT9LnRqn1HdzcpquYrzEzovwcgEsH9VFUSYTmoB1f5g8HSoAovNSQLVX7ZE",
  "key6": "3y7MEQXYfT4YW65heFNZUKyZQBHfoSn26s6ozkkdZXjC5Za59NqV8vEXfNjw8vZesLQmhAYnefHrQXobQEec5zfk",
  "key7": "63VdegfFA3eBSDbdX6eLVgim8UA9KZXrWeu2mArUDGsP5mHjYVUbH6t78PhyCReLGtngobsMZ9TcP1pH5P3zRjHx",
  "key8": "4BeLnnumetC9DTFb1zvsiXvdZ6X58PU8CvooaC18TrztPTTVnUhNydjsXA1PfmwbKFNsEYvGBqcqvmshbw47HxvV",
  "key9": "2xWDoFjmHGMbyFYLwJ7ZsQgt59HF9kH97s7KExfhc8raFVr7Yv2pHg6u8yXpaCkzNJ1URjA3RJESRXh15jhicLNr",
  "key10": "63nLvzWsS9SLDubt6PEERRdi4dZZLRpTrdgRjM2tHuUvQfnMKXdBXPJiTQfSrrewkyCmmVyujDweJHHEeuzukbPm",
  "key11": "64khoCVGs5S2QveZGrj652NzukiSfFe9Y2Ayho7i1Qnwj9a1WHepFdE9rYAtteuodGQPPbbZgQmUbydP2vaL5Czp",
  "key12": "4jJzBNNcy39LLnRtLUzvRMT2imkXHtHJUJ65vbVN9kp4tW7cXYKFjmEdnBpijk4efQRgjrSxq2R3sgHo7QKA5d6h",
  "key13": "u72ozoaTjT1iRVk7jP5bwgyw2H4L9QEmymWSYwkFVZEktSHuKi5AYBvG5fVJrcMendM1xuiAXARePohYp6TPeKG",
  "key14": "3mki7WV4RLFWMbzGinrU7E6h5TyMU1XmzbPDJHKiXWMawcGRJFTexPqD584tsSVSX2ePJVPLFnLZhL9vsNYk8xei",
  "key15": "4krfrPRiBKSjwcofWnC1pDJSvwnHQR5nHKwb6rheNsbzZi3qhjM3yUYdBnQABAqx9GfeFcdK8zaE7E5D4ayndr4A",
  "key16": "4cXp5WT6vaEWQpN59tPgwUkjqMGj5YTbCmT65yXs9tGkcstWxRqBSKM7ut1R946oMRq58CPztsnYCD3yEnik8nBN",
  "key17": "2uuLEgEZjYT2x3tGvH5KiikiPuZkn9CPLNCSDm3RZhQ42c3h3jQQScjtYqHQuMuEfDUpu7vT8wHJWYvrdVG1HbgH",
  "key18": "4WEiUocgsKFnY6bJ3w5ucmSSM9eYSF4MMGTHDZ7QKAym7ojayxYhBmcbX3QZv6bDSMb4L6FjgbEY27diMLe9Veem",
  "key19": "tCByi1mhKbnA2mnMsWd8k4ne5HD9cyFrXKZ9z4fxiUK6SrmWUp5fYm553Uv7BuPVwf5EpTs527LTR13szH9BdYC",
  "key20": "2WL4FQKz8Sw2ued2mYtFCU9of1ERKp8gCufxgWq46ruHCK4QjpNEUxNvkBHFyppHSKJiUVnMatb2LMq14qagDJCg",
  "key21": "2kL9aW4tdRRgao6Xtya6qkUUX7K3r9jas3NSXfYSuZi5xnNr4ybQo4UqwrZfbXoN4fFb1RwjajzDV45z4V6aGH9f",
  "key22": "QAWGkMyDEmUy6UUkBuKDqESy8vBRFKvbmTSvM42NVhcHbC67RonjbDam3qLXrcwejoRkkpQPmDaRt24uP1XPqm9",
  "key23": "2UcRGSo8fcF7FQyiKJoJBEJoRw5suv7cYG4EhHZcJAX5A4hZUG4jrVjFKhiYED3skDKDMxQmP9zcP28eVWTs4GeP",
  "key24": "31jQ2UXnkda1LkS1zZX8UK3buYDB4sLmxFbb46o5VLV5AHkeJsNYWFHjXDFeCyba1WqygbyhR4N2LTbi3W9fdnCY",
  "key25": "XYvwTgwkdCT3oS7mXM1ydGygEsxeQnyPbhPcip8aHUGGTZZ42jUsh7aVve9oCd1kkhH2MJEpMYoowybjTdmrDWK",
  "key26": "4oRJoCnN6HtBQCNVFVD2Anojbq2vy3fHb519C5s86P1FuGscRDYNfVShq9r57HXiayEAZHzkAnXxWPDdy8BCicJv",
  "key27": "4nyyysAusfKNwFqjfBxfvmvN2QgszAjjMVQDXEjCqF7LK2AmpdnjkU67yACvcdGzWQmAScxX4e2L3CVe1E2zqVzc",
  "key28": "4NST4yKKFHRfKwM7EjYauHbbdiyi6NJGHnWQWCGF2b8Mx9KHPgyt8THxodf5hH4U1V5bRYR4tUXw3zpDSC4QnhsK",
  "key29": "1vXYYJtP3JhxH8Nsao7gb9SkKEqjiFuyNxKNJ4afKhTdho12rgsy75qpDhrKzbePN9q5kU1H6CRQCMguFmKLrne",
  "key30": "3Bc5m6fhr2wY9uyoDsiSvb6XynwFAPTfHk4jVUG2EBds2hgiantTqL1ArbPyHxGa3mMG1V6dq8VNAyrwSNVexp9c",
  "key31": "5YZuf2SXmtEZVErnXCdMAK2UuXCsr9ADq62WaHeGQwWBoT3KeoSxETMXHXPgge55zcx7dG1vNT2A13GMAUPu65wa",
  "key32": "2WmGhVV4sbB8v4fbJqXxQcjs1MBNWC2ejLB64kHmLiP2uW46bjApD3YvXt1zrnjxbJ9nz6rHBudA3thnsSN9HivV",
  "key33": "64J1RMBL3oSupTFtn9wyzbnNmfuB4GHcgBNLpemzaYfHwWxDDWqoaB9ppVXyxfA5sg8SMFnL2ja4Nez76kco33Si",
  "key34": "MTS35sPKt4QKtnYYNDdPZnyaKzxTvo9jX64U9NabMTgn5HG2uJiNWsSVDVVwNpMT9k4ZhcxSp4M6wPitmWfEeJg",
  "key35": "2YNyqkqzyKCGZ5GArMPBTHMYqzhnDokaJHh8wNCt4aT53o4FnntsBq3gJyeUdCbr8iNwstBvxPASnPAAdrHkW2zG",
  "key36": "4XhWSbHgjvszasS2YGskrPqFVZGUs9Z3CqEQFfrkNRQt4Bb9p7Vs5XS2Rc5bDu13dCg1gVDfj6xr42FVqXkUGtJy",
  "key37": "3eZNqkiKhPbQ8JXnQB12R9CsUMeqyTjYrehhpVNEtStvjqZT7GLviFpeZvdYXkFrULC31jMRtSnAAnLx6UcZSHEf"
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
