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
    "59VWdz9KYq7uSuaM9meRCD1XoQEffasYUvdVVFbJ3RnrcFACegSficW3shJTztAJbB5ebKByp8RgQ8dar9CuUqqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tZBZpjJUdBpcieF5ybxx2Yp5NweFDZ2mTdRvez9gK2hxNJCDFKfVVnYkw2eiiXgjtZyaxqQHj1sW8n8dVjt1P58",
  "key1": "5oG6RE93bs5ALVwtEcFXrVsJ2RJFAtH7sMNZ2hgfLg1WBGUouVQYhzDQd4FsKrfpJ1htMwtws7Wv4fpbtnPwWshb",
  "key2": "3Dh4FJtJyvsoA3sL8coMDtmZSCkBnNC6UbUkrEpTiyPRehCGfDYfsSU866UbpwYuDLhHgj2tBehriD4gACJGDjr1",
  "key3": "35x6mLGHBYS58c7KuA3x4sQTNJnqMSjRDNvRvLCJS7uFnEUn8ETV1hB6W6p2X3oM5beP1YLZHjYDb2NztbWHa9KE",
  "key4": "i4PM2MdDVnpHSmKfDriJT4vqbrQEsKc4VVtg9aJWg6c4Nts77qvjFQrw5jcJ7FRp86qQHaLQp1ED2w2fH6u3nJU",
  "key5": "26WGofFC7dESWqqm5SLeZX2xxFGBqHHwQHVQkA2hL6uMbBmN5s51UVKfo7w2YTyooVevv5P52P5Eex5DTEsaqXat",
  "key6": "4SZaqiN2LCAnwkCcG5ji2nWZyaLgRctuwcbgJMPLMVghZdXJzAKmqx75dn1sir3vSEKxP3iRErJMKDSDcVaUvn4V",
  "key7": "4Cjc6kSoASGkEkmi8DWuBtJ9Vtf4VNVYHPudNznRKdHTHczqxWRXpUkgJrg43gTL5AJfEhk7eMrBSaxiW6P2H2oZ",
  "key8": "558VqWxGYiYJSpTUmnxm38yHp7vDQsJHXVtFATQHXRNHeCmxXbPGeJFV833yAYvkWgx4kimTJnoQWKBgJ5MAXSwx",
  "key9": "8jSLXhvdy6HrHUaGF23cfSMV6secvcpQUrVXobD4TLzMHzTuFZffXUg389qsSrUk6U7AhscRPmBgqatadGTQN51",
  "key10": "5JhtSU2qB48pyKsD2LRbNVmy8M8cTp414Um89s295ZiGLFQc5JT4h1QFvjf468t9KomPEHPJ8r9VvwUYu3eC2DAE",
  "key11": "8DqpBrbgQC1QQrcZS5DY4gBRVx8Bf3132PHNdRpsAZQ9qi2LHPKmSsnQH72jU2ERT6CMp6NvKBfbfaCSpvuNvTN",
  "key12": "5WRU9QdVsePMchNppFom6FHmgLLhhwqubdynTtwz8nhV61xyWfBqE9ihTuwpVitvj3uJ6JvYn9XXeUdtD5vNuYyi",
  "key13": "5ZL3wkNt5f6NHFpu4hkAjWU7YMUzHJ7UZMdkSxNhQ3xBVjp89DttdkXCX7gefuB2kdWzTGsEfmUMcwX6s1AjjYgd",
  "key14": "2YmUUGHNDgn9nEP1tXXPhTpi6qUNtKHvVBJfDpCcwZFVap8Fa3bWCRThRZX166d38kX8ZqbS7AyTMqqDokJk6tNp",
  "key15": "61kwSsvsHAyXVXWaDmMzY5uXFBQExrE1o8ERwGB8Lq7TTrQxFwpXPfTAwv1pVnpLqt6vMskSa4ZrfHKR2hMJoJUa",
  "key16": "3zAzo41NbtsQbh8zUMeLeN3MhKbkbuFktjXGhdZQVPoW1hjcX74YcNGbCi52cnMcKwRTZsRnm5bZrQ9k2rkxrwuB",
  "key17": "3tdVSaNUMRJYdmq3po9WSPzGVMrR2Axjqw21obzokuMBLMCMK9PcCTwudVPDrzWRDHZUPdC1jpJC86aMStEH72df",
  "key18": "4iVFerDP8a69yvdfcx5tW2bGy3q5pZ3oXHPdX9HtedMGVWCk3KD2RtdtdLp8h1npAYd3YH4b7xxd416T89u8RVUA",
  "key19": "62QMbXTmE4Dj4STeV7RwJFKiGQTjhkcs8bKaFwS9wSVSqJqjqGK82cF1WvopPiGWvMsVtUkAW1WgwtaEKuEi64J7",
  "key20": "2MNRE4NbbEbr6sLvnM7yLVH8e8NzvZX5cDwPfdR3PdoYuocnpbPgZ2vrgT67xkkWEJb4uU2J2u9BCQNHgP8hhwci",
  "key21": "3G9Rkb8CAvKkitrP6YQkxb5S8ihfMiPThTrvZ87iFTzeP7rjQ9zVaiCjRZQzBLmvedUuDyaCpcCsrhDw7MrpgvVz",
  "key22": "4dwFMR1T4ev2ekgTTuUHk5gRgYwrueDxozKsXuEDRTLG31ije9vaXd4nYovMZ7HiFniGbtJDcB6hNfLfdbqCWBHU",
  "key23": "4KAjkCjVVtBA5MUCf5vo4bpu2N4KU8LD7dT7QVy6pTAjWxZ4V4NVjLB9hFsF5toKHLTiceAk2KWxDgf69PRjDoK5",
  "key24": "3ixAiCkbt7wABrfwknMnTbwmVjpTbGDwbUcDbu1b7hfH1iPjwUhMHc1KwQiDEPUW1GUH8qhZkMtEovqGYNBiRjdz",
  "key25": "4yFh1u1oNqiJ8NJRcaHbixx59Bj61SEpQcR8JZPuTjBt5kd8UD8aQ5CMycjwXsmw9B1XJup6QBCEvZsbCFMnmt42",
  "key26": "3MERNAqS5AWxGAUiCrtRFDJstmQx2Zfrwfx2UhBnXkkGniV6frk2qNnP3pN2VNxGCRzWgiP58E8cKXJSDTmGihxm",
  "key27": "5fjG2PivBfHyLmymzFp8tvusSm2oLeTKG2U5tgD3w1n8hhqPJ3tKbvWfTiFWvwZT3Nu54x7jygAvPq2yjoBQPUET",
  "key28": "2caEDMHP8CL3xeW1oPHSVXxmSwji5i4uEgJwwaVLNXRvUj63i1b4kFqsxCL1gHsgzq98eLXEkDnNVgJBKiD24E8v",
  "key29": "3yFMzZUvYSRCGyvm2F3HDYnbfByrzEqrnUjhGiZgYDzVwS9BveLfPhHnLecQt2tVN7WhsbqsGRYP3d2bq2si6qjW",
  "key30": "5gSWPskeS1DLroGDwzzf8g4F45ZAmAdjBjEHdRUT9rLQZy3WSqHrJcK6uJeBavHpwnDxMgs5LvZPDH4ydqnnws8K",
  "key31": "24JSLyDdc8jySuajRJPwpGAD8SQngoQjsq9pZaKgxFUofaQHSPFFHB9YcdPiEcQYUtZe9pm1RCxJDxF7nerY72CK",
  "key32": "iYxTZui8vdyzp4hrztvcac95qrmcu3MZUoMnKkvegRRh1sPn7jUgxbHjy1oiLjPKgQGw1aXj1t7Vx5MMS4nbnCu",
  "key33": "2fWxvyFn7JtFEg385JeoMz2ysuGWQWZnuBCpeNXzE7ZGSJBjLJUXcbpYr2T2aTeq4rQiyXLRMXXN1PzWhLEbX3Jv"
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
