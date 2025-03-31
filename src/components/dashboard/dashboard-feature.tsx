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
    "3CwA1fMeEjc9HYtLzExry189zujJm6HagjNam7ZKyPmr9mpvdLhkzUhzUjwymjSyrCpubEHaUP6vw6CqNZL5AG6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8XZUXoLEp9nm17x1zYAXVJ1rqzSotRfBzfdtmLtX8fUbHpdKxvg6f4DY4eLafqDHypXQDp9aebnfwytR1Q5SKr",
  "key1": "5AW4c1z7qKqjHBagz6dPABGM4ynofiJQ9Gqq77R3pgQ1HjseSEyzrTSwsAXsLibucXDFsP3THsX3jRZxURJbFdXF",
  "key2": "2326Asnwa37QUadVN5cppu6pRoCbz6xEY284gy6saqUZA9qCGxQCeBVPQ4WJd2TifvPg5wxkpyrypHNREcdtJNVm",
  "key3": "38dTPh8fb6Cu4MGWDvRyygvEQ9Gi1v54joqMgebJUkNUk7gSz76vNRZw1s5TkeWjHEbJa2M2r5uSYE7AoxZs7uFt",
  "key4": "3983vS39GuEhMHeANBAQGm3Lc3awjrLX6pGwTWkDTqGpyWxffik9GMzfEJbYGiAoYNCupFMESKjvfJ8RhyR9UFpp",
  "key5": "38KsaF62bvmNQsPc9SVVi6K5hPrXbU3tmwNUm1xoWGmVdt5ihWPXxcZyjuaqQMPyLbTN8fWrYgk9nBSXnFVdFHSB",
  "key6": "45dUPRSznZEAk8ZH5PdytD7q2JaMe5kqKg785GNe6SE1tHuww3zwBn9PuVFtmBh2BqXNFyGbDYTfXPMEfeUcFHVj",
  "key7": "3msp2NNwoJTRUhdbfgLeAfJ3KGYZ9Rotug1k1W1PzMXmjfVESF7wgZzDAJ1fRVd5eTXSantPH5a2eq139qQJ4P55",
  "key8": "4bfxm4cRQu3B1sj1jqLWB1v87bjp8ziJU9QnfeUsrAjU6nAXh5b2UbhSjY6HpuHDBtZJXqNHduKcRwpc7yiqpdc6",
  "key9": "5oHHMWncqHSkGH4Doy4oK93ZaQ8N8xBGPixvm2GLHS5ufyec1pDYSn8mN8yHJdZEAuQ545ERK8cdEZJDczi3QKEe",
  "key10": "5vVXRtdkfpsEVa1HV9zeaEaFcfiuKW1Nqer6rGCNwoJNf3sCdYscRswzd6jwCfUfuygrur2fF3gErDKqJByVMngj",
  "key11": "2Gb78ooEuESvUitvCRgaB8idNyfoc3UzLdKafEeujES3k5GK26v19LtSdL4wJryBmapA4rojDrkC4sSjSuVwFANZ",
  "key12": "Gh3NAUoZsocCDTcF6pkTHrvUmkzUWTxMPUdVZ8oVBGgYk5uwQ7U5bRTHQhQCjba15aKYCskCibwfAdgmh6k1jMN",
  "key13": "zrhgNTu8CDk5B1VDKqQQBfVHehD3sgFMBNiCuMooNQNqPrFZBSGVyX4oPFmNNcxDTNu1eaSTiGjM4y6n2ED8ioT",
  "key14": "45KR5KZZ3L7TqaGhqmohmz33a7cB5tr6XgbTxxATyKCFNVAgJYHn4DhaAmC7GfRPZcmXzrHEtxCJ7mtjLg6brbrf",
  "key15": "5bSE9Xf6QvJjnD8G2Ms86x3DQzSWTps1TuEpvJizyqqbPSSN8XKveWGeQJaoB1b8UnBcDxefy2k4cqtbZY2SMvHL",
  "key16": "t4MRegN6EMj4Kf2TdbyV7f21zTR4tzK7X864dtWatTWT9BsWuH8ina1r9NNPKCAFWDYmn2G2Rdj9uHZ3EcC9TKF",
  "key17": "3YKLEGgQS2jeP5JdeUHv9x8iagMfZYZaFXZu8JAvnYrK2J9Wpo9oeErY1EiBoSjufjxh27xoDJdF9yNg8giA6a7J",
  "key18": "8eSVzs5Gds4Ch2UJ6jSA6VEnNEKiAqiVDZLomtQvZ1MeSKsER2CeKmpGehauhrERAvdRfsJX3hDXyiPHpknE7fL",
  "key19": "s5ghYARU5Z5uHrS6N9A8d1A1JM4j1kdCg2kWqMMkAnHzePdzZkVQy5VoQRaHCfAYosTGd9WyyHZqKL5o4qKWAkQ",
  "key20": "2k5Se6Segrdo66fTdWx7Nogd9T9YiNXxcrKoxSqfnPKaKpd5WbYVGym8tWJKwDDCQWoLQVMtEpQv2HGcPN2mma4V",
  "key21": "3UAi4xdLDqTw5eiJMKLW2Hf4M5HcNLw74Z26S9XZ1RuieFX9RCG8YNzen42KYfom3gpgGtLDHABhr6VHuwUYZc1b",
  "key22": "5AoXPDcpchnJtaoC5q8ZAx1HrerbHQeWDEtSumBgzkMiYENVXKreSDZFHhmVjgqygK7b3khHsFSypgKFSJndkLon",
  "key23": "3YquB8Pa2ePWhPfb4EKGFxX1HbfXfB39g7FVhADj9V5ZnzzQFkfkNivLRm4SJ2qYVCGUsctEvypa85t61UnKR8Fu",
  "key24": "3yHb5MZ1qQnWQaTioVK343L6Z9vvGv4AibnNfPPdD1XiWSeZLhQS2iP3PgoPe56i9YyqFJRJtNR82HR4p9WadwHr",
  "key25": "3YbgCgwrxvazmoANLVLndRJrCK6TQ87KSAeBifScTvawcAcyS4MNqLyJqr4bc9ffmZ5SB4bGSdZKaF6ZHLXzXxsJ",
  "key26": "3M8Kd4bY3NZZmVvrgDmJgLg6EsB8FwBRZ5PoiYS9GZFKMB8njMHARbXaKnDaGrcCMbR2LZvEMk3YR1Lu85efgQ7M",
  "key27": "3fERnoCq6pkP62khRaoY9Y6tnpLFDGXig9RNPC1mNcxqJsgnyV6Dt4w6YqwvvbQ46TfksgEWQWQ3WjhjrjTJbzVs",
  "key28": "54tsKFjpZfuykS8kvTgEeH5cQ2bsRzrK35iuQXZkRDvYEznictJNRBz7NmRHaGgfCEzPYwFDeDEWPt81As1Zbpbp",
  "key29": "3jE7aKyoYN6cCn4f78F1uNAEgEvrr85NTpanQZ75CTjGATDRKtxY8iyByMcr27vScctpUhsbcc1F2Na2fNYZypT2",
  "key30": "4kBH2VYpdVtpuLTFvfk5yuTnHov33G3B94Sf7auzAzeCV3aSuuzxwcCA6QaRT2wakgy8NWKisAEf75SL4jgegapA",
  "key31": "46JfqyrMwALLaqYbrm73J6Wh3a4ajB4yDJFF7EjHTcfxQo5WHQueHz6w66LizkEVGUnhF2bfuH8huS63oHxz4k4B",
  "key32": "35G9Vppt8kHsGQ6Fgk2LApCfS3oLZERzXcjsfjL4efsv54fQVT3ZZ9mcW6igU9BjPsFNf55B314uPb8PsmhZbgHJ",
  "key33": "pdcJXhVMPUiSK78atSQKCWRab59xuYkGMbQ5h2N937RKhEgMFDhEnsf1fR5ivfwpcBqQ9QxnTFLk5y9z8h5J8rM",
  "key34": "5dvv3wdxaiUEY36UtZzJdCU5AzD5hfzPEwYFXnWGsWHUEC8g1w9dmTj4Tk8mRhtFpuURm9eKsTC9JPhFQDvjRGgG",
  "key35": "rMdSpBJKspGnFeay9DRRtuBZ93aq9gwcwMC6F23GWtiynRcPY4GqeWbxuYrMJdPWfECGshefWpTbhreoisAAB1Q",
  "key36": "2CxBdsp3gmjh822rt31mEW7JsadhhifXYR6BbbS1omY43dtYxc7e7tUY5t4tP7X5StPFoCgs38CeY1sEVVLNtbpY",
  "key37": "2znbN2a1jepXXZYpHywAyYVAefEiNSfgpC19JbwBVsSHNgrYSuWTzKKEj3hPeagcL7avtdXr7hn4Q3NMHuTwqhqv",
  "key38": "jr4onrD73K49M34uBkLdd6LqMpjdwSBsFuBYDkUF9JmzqM7vgRsA19mGg5AqfzdP94pkAtLGFa1JzmeqBXyyA9b",
  "key39": "gdkbGHssEoDwuYUM5izcBwxiWR8q9P4RxSajHVm4oHQ4eRCsDsSekbp84ZEsagSdzred5Bhp8cjkb2KGvrvbti7",
  "key40": "2aKGDfr6BDNXUULofSR3kKuFzrBAVeUct1aHHqwiicSkLPZtqNQncwktYy7QcQ9KEYqgSWc67SSA71DiXR9vpM7u",
  "key41": "5hDMziwEc4Uzuv3h3wWcLnEUKWaSszwPnHxSxWKZwBtfk9isBzEdAo2WYwCeYvXEukLseyfgDEsCsvBkb74Gufjw",
  "key42": "3UQ1ytUttmQZHViPqRof3XnUKewZoowQQperNkDy71sT9X1SjrbrMxxysXfpWBDP4MuLuMbJNuVsXvQtkj7jpWcN",
  "key43": "4vv6aqa7dXTKLzPbAL88aDmSobavoDyPHn3tgtMxccvznWjSkFBEgAm9McHwjv75q7K945TP6EFWYLV54q4K3LF5",
  "key44": "5KxkuggSJDzQ16Ym1JmrUhHmAabSL739Qi34RcgVCdJoPhspMDiGvAxdyNvUpR1GPQPZBSqyJuA2sVx5v3qCCu9R",
  "key45": "5AEXfSNsvYm7ncbd6xftwsX8bjVsynfKyPF6cfmZAogqmQNk38tiyFXL1n6PcPnLhRF8PLSUqyxsvmUpFvDdtZKz"
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
