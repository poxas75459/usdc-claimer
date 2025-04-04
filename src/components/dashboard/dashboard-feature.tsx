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
    "2NNVx2N7yiNE6cXLz3A4hp96VZvmtmrz8A9jdNtu62tELm3SXq5De8Cs76k8LRY73QrEJopUDuoTaFuEGZHBP6Bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32VRGQXFRvEpc8E4CHsHvGZZdSBr3iU6AB8fMTEruC9LnBZJwUajCRRunMtesNfUSaSMYt4aGVFbb5VoAYdsdV6",
  "key1": "3ZyHUuV4GRiJLXVxuz97NCFi82mWPLbc6896vQUAGuxaMpDm29MtinNLg7MVupZaxWZHRFQDLyXzAVLqC2KjwEuq",
  "key2": "4kHYQCYRaViGubsL54sztzH2zzpx4APcgngjmYpa9g4gxE9BSjWUQe5ez9hpH7pTuQcDDRBEC52C1jM5VhmFmAvz",
  "key3": "2tYodBJkQTQxGidGc3uk5gkJaQPBMYvUBQY65oXNDu82ehevhq92RycDi1Q6LrmXf6XPqN4Kq85cXy3paK8QVNpu",
  "key4": "5XorQBxhHh7mksNwnjfGG9jzFv6M1BkNfGsB8p7ArQgqJsExBviC1whtFBg9gvLS2vD23Zaoa28Q4fXxY4weHonf",
  "key5": "4RkhsitQ6iHNvvEavtN8Mz6N8EV9G8UEWm88SNcDDu8QDVt6j3dQbvusEYwTT1Ge87QJxb7THTN68QgvJVK1ncJq",
  "key6": "2rauEHa97REUmETaA1cb5szzzW5RbJL2TmpPzDVM6MFp4wd81GW9731skqkqbSS3cDbXiwZvqp2VJEHk5mAXsrmb",
  "key7": "5GygVn797bzhxJpgqjAwQx2sMZeQQS8KLwYo4dT158VpXRCeuN72hjn9uugQxEij6kPrDVNFJZ1GUHVj6caiEZi9",
  "key8": "5krUt2xWpfj76ayeRC4bQnbvfgaTPVqbrfXjNcbTBp5sXBerp5tmMy18LScu7CnczJ6A2nNN18ewZ7NZgqroEb6A",
  "key9": "44EHWnSnuBrsFf8EVsvdjzq2yE1pfNvyPsWS7cTUM3sszqHcgfj1nLg9mcrd7i9XVPNDJ5aGnU5YKh6zekhPAeBd",
  "key10": "2DZ7T1aomWJk7todejgmvVgufr6CoFpVN7UE1kEbaAMreT84KbgZWwHXnLoWuvhcKRX5dSMM9YnBvLXXvHhyL8M1",
  "key11": "UgK7PnTeiaicQsGGnfrwseVUQamArt9Uf6xMMCMxdh5C55ngnHnMhTzqeXPa85nCUtuEQ73jznKXdxKWU6qjksq",
  "key12": "3dE5o7rckUumG81oJBMS7Ffkso9jovkYuJH2Fix4YvXEXmZXymvEqVzKDQikcDixyb8R3XDNH1Wc2E9c7Lvayyyg",
  "key13": "34WwheHj5VUZhsipuGpYx6WkHQxyx1Rt4Xb52LSB81SdREa13a1pWMhaeen5KKZEyCkBQtJZ8FhVtpWgiEmgzmeX",
  "key14": "47GFQreZ1WLTaVe4Jwdj1hi5Xo3iVAx8J4n5oWXpCoTAHFEkjTsvDw2dkRRGoxF4S6kK241ADABEGK98ycG7KXYZ",
  "key15": "29eMZLa2XticSXG2B4gBDRzHX9cfAAUenhdLjh8zWjf8vXqMJzDiPPcvJvf7sTL7FqJ8mdE8WGB2PDxVJZaw7Svf",
  "key16": "56Eyym9Nt28ViJqM5SGwfEBvqdPzJFx26ChxXbVWrZHSUdmNcHQXXPtwjCxJgL9QTgJ2uWTpMrkrw2Ri8uxv1FrA",
  "key17": "i6Mkky54MXx1Pvbe3canLKhVwJv1ouojG6trZrsL8t3UfQbmeziwvJQEATsG16Wv8xPqSjzPRDMBeeppdXrdR4A",
  "key18": "ho4dc4uoCxXgQznqXD1oMZVBQLVWVfAoamhyZuTzLQUb2WvRPxF139UDwt5TkJNjpbxifVVC8Ruyqh369K7k4Cg",
  "key19": "5NKz6i5xVCk6dgnLKg9GgmB62cgjUQeeyH7gRGnDx1pEpMFCXf6jPQX9wLLc1hUD6FdZN9XDYcPkKPzY4hQ3isj3",
  "key20": "3Z6eU2dLp69N9vrQC6oiWgxRywC9Tcs17NvYxP6NLLPJ2sn4ZtaQ8aqyELnv6X4UgAjb7DA2UrWJm6CscVMm8bG3",
  "key21": "Dy3jw8dJE4smfe5JZAVmEvN689LXHePr5feSdzasnsxGFQfbfCnxcYWfVAKgNqfGgdtjijdG6AT7peapy7JswSg",
  "key22": "5xsLyuGapKakbmJKJzv4Hz8pAZBthpqKSWcyWfvhit57ZfpB3mF5NmJSnX3fbwVymE5D84AxGEf7RfQDrvX1V5Nf",
  "key23": "33V48cSJXEYBC67WtocKgRVh9AhUNtc6aenoN5DHas5WJu5Ldvfy82nWeKh9UUU2rEaWR3AF1Dg8mSYVrkuxqKN1",
  "key24": "2hRfBzmdLzWkuxwjtKCN7hiQASJcU5wr9XzSJ8vEzjbZC7fWLRcKbZWZRzgfUJwmKR9i8TyzWddb1HspFLwQKJWd",
  "key25": "4ie3iax7VS2t5wxKezWLpWxYGUhFhEYh3DkjZm5NhX7naSxkp7pwyVCiFg7wPELTnQ989qBKkcAR25Hdn9Hsia4M",
  "key26": "3CuPS7gf3ZKEyuD2EqUaNLjVFDbb27n1hjrdn3oSzVLbpWhDRB7RewD8QgTWKdLaEzEfgQQustAigbnUEwTFFpgM",
  "key27": "2xFL45GMeLsgAbvs7kzUzifcpK2UR3fxviR2JmRB2f6rrCGA1rAYPT61JzS8A15ojLc7F2vNKH4BHK3HhgRwUNKK",
  "key28": "3e43JDTNV1VQCQ1bgiGDY4V6zqspBsnHKfRf39gbHcDDD598Bk56sXF5RV7XTWK3Y3J3378ZapF4ZszLvQ3X6WFn",
  "key29": "4JrLrmMpsZRrfcARkTFabwL4MYRaoYrxdM7wiuHeqLsUhBuugEXUoXw2SzpeQiPtm2tHDnbUQm347Bd3fxMHY7P",
  "key30": "2V4kFxPK1r2ta3CkDbRXwbJ8soJtVy3fPw2ynbfG8ZT9HVCWWSQxBjTxi8fxm1J3xpVzSjKR8tStzKaU1btGH2nR",
  "key31": "2AdHJYfqaicvH47TrkmJQL9PPbySmWhMUceBcHZdobZoUqisdaAAZCEyyFrK7pBkDHXg9JhocvnsWcwD9SSDWbcU",
  "key32": "4QR2h7H38r5TWBPk4nVXLEkhDsR9S2T26oNZaVBENuLTqra7zEbS1Qjtkuk54faXp4vQKzayKUjeBwgRcCLi7vQT",
  "key33": "297e4bD46FpH58A74Z72BkVWQZemZTt4w5oTcVrvfvA4dmaWCLM9B9msNSUFE5EzQRX6NnNyhwiV2gcPGzED1JKN",
  "key34": "3x5YvozcBNy8dj9PV2YpcCCnEe859xvuNDozv8RqWHkYGDApJwH7UZfGE6QyFxWC2bK2bg3kY5P6S2kryYGpZHsD",
  "key35": "9qskhpHwdx4tqsv8acrUw7nTQGTuu4HXUJQgjgaaNzstdJYwnk5Ucy52TnE6UrELJUdjSvAgDKTUwoDgYquvBLA",
  "key36": "5nM8moJjMVyMmztmBzrH8JGjtmhNJa6JLpcetRvhf5USrz4SqMFZ85NeQEgCKxFvPckQBq9JnYexUbsZ4MfvvwWD",
  "key37": "2ZHrrGdTMKfbh9cYxbHXm9b3Fd1HtSF2qDnmh5si7KKp2NLd6MZciA4KdgaoiiUBcs7s7oUrw2RQ9u6ZK2qZiTiF",
  "key38": "37vrP7zWqBSdEdSuU6yqEkhiTgckqNFsF7CarcqNt6hpyD3HHumxFok6kYQJNTdjbLqfxnvQ1S1zto3ToKqyeMH2",
  "key39": "3CXGdHrbpjaEsXadCWeHzcmG8UgbTFChbcrBrepPXH7v8dDLfgUk6DDFDEJyFnDRsGj4Rews4qUfW5euV3qb5mvi",
  "key40": "4JE1PUdggfPZZ2bPzzPakupkRkNWm6FN2qwUt2CiiwRTfHv5LSqAnP3XKvGvfqK73fa5ab7pBX4izCQYk6qSLxCx",
  "key41": "4i5oJBowSTsnMuJvv79vn6cNHy5UWgJo6ddhVydJwsSqtExjC3dVDuRG1jo1TWirRwATmHUng5ZVi6JGF2v4zszU",
  "key42": "4quMS5yGxpWND9uNoXiEdx4HnCLj4ZzrZQJ7krCiM7MfHBmGUpX4QRJkVcyNoKkxonCoz6pLMkAzN4mxusTPDdKd",
  "key43": "df5dUQMay4otvKDxwEMbjPEnMLo8MFPeF14zyqXwxpsJQCqnqM9aQa3UQQE97gknV5EAyDm28TQtCGkJqV2EGV8",
  "key44": "5edZzEbnUg6NcTybZbNssnFYuA69A6JFhCtg1YnmZivUF4Ri436RV8ipM8fVhZPRvmbuaspNo1qNnaeaBCusY8aa",
  "key45": "46RrRTBU4qFiMiDQqjwyqnTMaHDLbjJRQw6kLxHvdDd9KrW2nfqNS3pt734jHT4omVDE6koMsrPJP5B3FiZbDRns",
  "key46": "4Fb2d4A5j1LAqkNW58bQo84EyUbszJiiWxUnonCwUhuddFUk1GPfqUvn6DF1pxi4zofiuxs31EvvJVeivBmEjqWQ",
  "key47": "3Cg1FWhedV97n4rmpGgf7DLGAWNLFXerySaxyaQvXcJJHH4TAJh8VLa12bNqCS5HnCe4LtqhUzvSWxiapo19FuMG"
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
