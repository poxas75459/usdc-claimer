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
    "2puEYNKs2LGvqscDnHyaqyfNrX3MP4bjChgpNky8G4tQ8Pd24k6j45xu2gbxcpTLiuJ5SzA43AbLZFoqvkEhP1Ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XGU4YxJJyMDbSa499dQhbAFfJQFUd8R3jfcQh7LpDMU2RARwKE7RmtGAVbJN8FtfAP1Qhgjx6GynCo4494Mfmu",
  "key1": "4x4RJe1Bb52Hvvp5W8hs8w24FNRDVspqcxEyZQ4Wv4DYCevsTJNRLhzo5t7hoVh3wjrJednrNrfzLnfojQ8YZfwm",
  "key2": "3KgMizDSGd4DykS4rW3DW3AZfDpioy3R8HU8vQ7YZv7DLQeLwHBczACSxPTTraQPsCksYvzEr5fHJaZspvXxwLWa",
  "key3": "2QL1KB2JogmXhYXZRUr4BWpGpQhWCDLUWciuTqGjAQ43SVkopHfEceu1M4uoB25ybNjQujV1uZ6jKd8zmcJAuemk",
  "key4": "3Vtt4dERcRv4SbqRhD1z5b4SSWzbqUtxF8rSyGDXevPi2L2K973unqw3zyApvvJ69FJLDWfMjXfr5DNAd4LxiRkM",
  "key5": "3uXorHtPNvY5zmJj22QxGVdC75W8kYWfDBK2ZXrBNizpthUPPZAmfnFmwQzhKb4fTSJibsxonQ7z9GSk8s1hxvia",
  "key6": "5wazF7F9H3ZT4n2C8qJ6afepQNS5Sr6ZFtwWKD2NWQ67UVXZjae1rSDatGwx8YVsNd7dQJTKXwPLNAWU8nEjbVHL",
  "key7": "2W2kecpYgg6Hk5AH9rhkaiBCgHrwymgDsshRCPmBMRZyW8fJwQKz3aqQY9LxzfsVYZfjkT9AKt7YBnMQ5yqpcuJJ",
  "key8": "3EULYkum32xdT2apLgAXGW6RJDJrQqvZJ5rQPB37CajSSi7JUMoDCJfDmAGBKX249wzFJYwc6vPbhqwzGPqvUzfg",
  "key9": "3YBkLpVWeGQVVhPapL9tiUWVzu4ZFVw3k54hWJnbbCefs2eJ2Ch5Vf5E4pUNodeDu1sGZFQTqn7jpTLA8X4LfoD1",
  "key10": "3zCiEcqGjKayxhV9A13uoMQUt8T9zpgFbNRWPXkwWrLsXkQvMvh8pLvbiyM2WGAYQgGBS3bJGj7kJwGkSqA2HYid",
  "key11": "5zn5bGrkMzc6QzksYd33UeZLLq2sg5pVDFvLfPjDmUzELiqggQKGMALTZksdSKhSpFfid1YTJ8pxXTDw1PVbdj5V",
  "key12": "3eX3UZHVNTD9R86cMZdwiXaszL1XNkhPjL15hL6bqzSk5VzfhzqtaoyzVWrZM373jw5511No3g4LVWFkvqgH4toH",
  "key13": "56uvbpxbEpbC7UtRB6JSPL8jLzkzY8nk3dLmJZkSYtFJxYjjidQ1Z2u3fgXBM2hE9A8RBWK1rEABEh7a288Rz58b",
  "key14": "4FFXAS93RS5NYcZc8EpjM1mWHDUAE63mgCGi8QY7x87JeHDbw9SqZrwxfUmLFojRzrWAiwVSegGX7tn2MGK9CobH",
  "key15": "4Wx4MFNZxVvLuF5tMAPVBMUqj3J2WdwLUTX3JG1E7JzeVXCwVFWNWeE1FjW6UffwjGXP7zn6MfWDogKecMEUGQWn",
  "key16": "2nbtgg67dvL8JgBcWAQy1KTMvph2U8zGPti7nkp57HeZHwamdUJATCZdwSeG1w46dFghgJVJjindxHpm22Vy6z5N",
  "key17": "qriYtcbwz5ifP65phGfkbATXwNsq9zK3muGwzJhtcEC1XAY5oiaaEpRR3T7aYeq66TD9X2LvMtYQpRzPosLwt7U",
  "key18": "5QBuW7k4ZVc54dPyHLvspFBp9gmbpEGq9ghsBXQMMTP6eyhFDjs7MuVJ1EMGnnAFHXzdLueMcrtZztmQJ3gudiwm",
  "key19": "4XdjtCXgWomEU6Vj64KzCRoW3v72a9UyRitZc9Gzp1nof9LyjGWNM4ZdueSzaaY8HzJUP76WD88NZc6DyxsGqYAB",
  "key20": "4Ap9WALS2S8y9g1axsiRRrCZ1HF29vF6ZhKB2MAZhDyDxcug5dXDLhhZ444dHsFSe1Nt3dBrR36QtAt9c5E7wTS6",
  "key21": "byyzYGreBjZUEHT6n33Gs65KNEKckxreq5y8B3gTKM6SXFGS6zrVYHcuJHhRW3RCATpEC7RfYYzdfTzbYroiGhU",
  "key22": "5jYji3ToEjjfL3U6CErLsHP8Eh23t7EA6VxwbtBjmG4ziLsHWFV5co5ztYs4eyiXiZtYxXK66N7X2owNjHz1gki6",
  "key23": "5cbNhJkeJLKorxn7aRMPCdztkyxaFUVwfsiecw1Gop5EuYYthxPS7Tpy28ehync7qdapamyQjxvRPfMXaUE4idGt",
  "key24": "64EPikbavnxyzfi1n5Merrj599sk5AGjYfyH5dUYenhkyKWLHA4cBX1QAiBE4W6E6g6qe1SMPTmXyoUtaZcK1Rk7",
  "key25": "4zwWQKN1efLxHpWx3Voso1BGEPUntg6eNj3Ph1knFeuspXxBSSBjHN1GsDGwrnHHfRBYyZZfDLQrFYUAmMmCErHy",
  "key26": "3p6AZQcijHaudh3de6VubqASsXz6Fy4uNvnFNH5RkL1wCCAK5tMccfbwAH9wW713P9xvGjQqEigJ5LiyqxSJJQbk",
  "key27": "3QmemUnYbKwwkQtnwVuPQV2HsJHfSp6AwPQSrAyg6HurQ8UGtg83DtkJfmhAdFejLvKPZNrf5ojnPrkvedaH2sxp",
  "key28": "4LWeZEV8TJriX7viD2wKuQA9Z1DtE2vvRC8Fmw9JYVXw1x3rvcxvtv7mvUscur3fEHCGK4wVaa8s659ECmpN6hYt",
  "key29": "4dsagxKmTEAf86ZCPvA4RMunxm1WVaQknLtiKWQuXabmH36nRXvRMbeEodNi3noJU194c5q5hvZ6BeBhSzGy37y5",
  "key30": "4AVJK9a75KpcL1Y9HP6WuEJyKujpxUqhcUrA71LYTLLAyp2UrYFP35k3dte5is3hH4VG9Nto78GWxxeyHoWFkpUf",
  "key31": "4behEFUWcpSimBA6M6eW6fbgbCvKSwvQp4FdLSfWimtMebpxmZM4RWkpfFqySXuwxwY3kJqgbp9QGZDBWrydRr8a",
  "key32": "4xHFu19vDAFtwctM7D7SqoDgtifJje1dc7XNQ5Gz1LL6Biyx7dw6e1oYo1HWzVDGRy9NnNUzJdW8UBTppgxAAF1W",
  "key33": "2Uy3oBhEapFfaiVZwVwHZGepd7LfWSo8g4a4tpQ3UkZtZYcGKr6J3EAeL3aQjmZe6wJgic3wNyFeHFcxj3eoNAH9",
  "key34": "4nHroSSvcHvu2L6NL1Kk1yTVMQShfDUQWW7g1uHsuhHYBHBj7U4eybUvPunaGic735uc6Tk1zM1VGiQW17GFLDTZ",
  "key35": "5tFw9XZJCAZKDjbjY9bDduj8rgBi42tECfoCuVD1eNmDsgFMumzRSyqPRycQordAiA6PRCDRp4ue8ZeMTWCKFeNx",
  "key36": "4o7dNnWfuGb9FBG5GZDmKWZDiaATXE2SNPkLeSWrXudiVXLCWgAsq6wCZKpS5dm2HKDagVnL4YfVeRmEyYryHm4i",
  "key37": "5Nz4bmFLoce6nnDKdg7SGFwfyameoYvkZ9SLPzAJx8qFrUB3BYhc3oD4TNfqpx1TrViLte7GFVbVCQGqsEwVwyzU",
  "key38": "4c8PSpSKHbsf2CU5QPPFMGYha7wScFmjWLFHS6wxh8zD2kCs9DXat4P16s9zh4cXWopQhup6PskB3xqcFysmRe9P",
  "key39": "KZqLjzRYLKv7MKJF3by73TnnHYddub3FADaybg7DzpkigjwusTHkLAM62zMKunDLWFJfPUuHN8mc136My1TphqC",
  "key40": "5hF5vcgVyvJ5Xi8t6czbbM158r8GaVKb1RzueiGg1d3xNfsFuUyh7VtX3DXftNYikFUgin1227CATq7mk8jy8PNh",
  "key41": "3twYmHTejdQqn14FGqQDs8dFkDJPDEpU2EEGRRfvYDLnhVNX6JN5GySL4XSDnvZuz2ef19bdazsaBY16tBo2FJ5W"
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
