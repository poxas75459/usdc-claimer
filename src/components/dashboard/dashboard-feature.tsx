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
    "2pBRsPUqYZXgxcMVRtaRYqgVRZRqcLps6Tmu2EzqSd1CHSgHqufP3p2sAfc9b7vtwbtXzTLiVULPfSEcexAYYN6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eKaqHTCrD4CjJuuKAGywSVV7uPG4Fe4btaBcqGDXN2qKnFEcq8bpAGqZsFc3no6FLG2HMKhUDp57KvfjyLDFbAP",
  "key1": "2jdYRZJ42muKXhk45KA1Yvn7iCs99EC1gmhuwjHbYzontGMmxGkjvgALnf6BeDd34Px9MQRQQbikjunEmfkczvH9",
  "key2": "5wjmzGdmQHmuAMCXociW4UUoRB3o8zE1jCnM5kAdM8Z8xpcDWpi89ykZ4zRLWYTV7ST9NDv1t4WfsZCbK2dxknF6",
  "key3": "3scxRmdzwjyszcFdLipBHqiYmefg3tW1ts4B8ZH99s1weQJaaGDBfr4DVQF8HgM4GDNnC9HGxKa1ztv3zY2UcVpG",
  "key4": "XjdDhBaCgVWJcuZQqMStH4ssvGi2XyrHTopCACJ8HUDxF2Tc8WM3bMxJNmo25gWmYPU2sM9Lv7zHbsFiTrPqZPH",
  "key5": "hrfeHtV36eyG2amMBFzuH7cRMUrdkW27yYbbmUoEJU5EKjBStjf9Z2Sa1a2FDVjT559Jcc8KpEBX33A1odTeNAE",
  "key6": "2CRQZ9SxiRq1MvCknZtoXXkJ5phaEeuUAThK1GfmFNzaLN7qvHxGhHwq6Fa3CpMMzmastKx519mM6X6AxHtki1Fz",
  "key7": "4VGugh1zrFSfgYLahVS9nWaU2hkhL6U7TbppZZuACtzrspnCaUwZDCkK3qWWWfrjt3fDbTtr4SnQhs3d66FRGS4S",
  "key8": "5cJQjFTw2R7GfB9u4Mb8eZsENsdd9VtwYUgsG4FUSvPmJJAHt35n1kv17S3CtBUcqiK6UJTbpixWFLXJEsZ14zrA",
  "key9": "45jWMyMYKQoQVZZmoBs8Q1LMB1s3P9jKGqkBJhejEq13W3U66Ujw8Gx7sF59ppYkWvjQ5jW8UPHUvE1o9e3aLoYT",
  "key10": "5cJ1gRjVdCRQ2bvYECFLdk2AvoTeUkSbY8nYqd6LakBCYqhfz3jRNpsEbXvRmo6pRnHo3KtK2ng1pqjUU7ZMUp3C",
  "key11": "4qhVTfbZsbGAY8rZaHujQ9pzn3FkyxaZzemGBXZRKANVejLY1YwmoiNd3hYfFwhpPzuKytWFtyPhV8W9kX5G6K5s",
  "key12": "2e7zoAxVHdokKf1KoYQBTJh8AQP6QagLmncDALrHCNvjuAGZrLQ3TXvkkAjWb7KTXozpNLMFZYhZcuPnEJDjdvQC",
  "key13": "2b2XWPe68ihoyvr6NGnPsCiqSyG9dCJbWmkxY89YnLVjYM7iH5Hq94UmhRy4gRYWYpnZocJTTG9BackPdyBjvkc4",
  "key14": "4Y6DFGD3fxa2QWe2hqWwoc5BXLjpHDwhPZADdWMxcmpyjeab1Qzj1pc1YBWotqZZn8aXPvr4PqzFA7qa3XHTG2g1",
  "key15": "4fW5Jw8wqwRD6vYFQgjmY76cPxAcDg5XDCdce6vQadDWF4MRGe8f2cPtrR4e2Wkievv9QXcZWW3i5jEHi6R6sC5U",
  "key16": "uEifKPN6qn5sXy4CMfWeEBncbArVJYajfb3B1DPfwKtC5bJEpJNFgveE983UxJp4a4j7MMo6Vn3KiviTEBHHMQM",
  "key17": "58JMQ5J1HhfybhUk4Gyaomch3WyxwENGG3jRYQrMxVLfXuTKdkNzihzz3A6FoAc27zWrZPjMU4Pnbazmw9fLTCtg",
  "key18": "4PrNZdx9GX33JBJSPbJjW9fRvJ8XEJtKaWTuC6YqwPwYw6MGqJdvM9KsE3BHtK6SgCyxTMBbRDoHvsbn5bRzkw9V",
  "key19": "2kdNmJqsgTiFKJU1ev3DuFrQco2guyP5SZkhaoKadEBqqH75nFK6Brh5xfVeeNN9s1Tbcfadf1mqjEzVoHtbQmTR",
  "key20": "4vbSfpPJ488EHmX5cLBj1BPmszsY3PzUwY7gZRM5x2N8KK3Q3iGbReRVVWQ6iuB7vQVH63Wr4Vk6DiPyGTBX6wyF",
  "key21": "3kse3XHcaVgLeYhQ6bDiP9vqnRiXFHxymadc6gs45Bw5Sg4iQoW7g6j2ktN22QN4owH8PBFTxCdxeL5BDkbzDeXh",
  "key22": "5wo7hY2xj7M5VPrrMTi7VvHNCF3DM4U3TCqEnJA6yPw7ZksK5AahyaiD6oRQ4EHHspAhh72uTwuF5VhyRkBV5H9B",
  "key23": "5HGDQxhxGKJHwA3fW7BMar1mhe1UuM7Yn7k4u91gxZNcR3HVFakDn5AWDyEBZMpzR5n7R4jA2jpeXZL55WCp7Df4",
  "key24": "5j7UFk9fu58QxesBLV7qM2GA2XTCnfAt9s33aVFazPG6Nev79zyhrYuBz8tFXLCgfvsxoh9EiHqDSTqHeviLgUoM",
  "key25": "4ZkXTfWqS8hkJaBSaEEwgzBBPzB7oZNX7iAhh77uQQcpv9XfyUUFacLGmpJ4GoWeoQY7kdMCujEcb1cFMVp65sv8",
  "key26": "9BBp9o6EG1pF4GSATLMvuhP5pQcjqXJFXJ9QjoCjJYrTM2c24KtQ6caTgWopjEUcXYC57kVntfrxytmcRTxUgy7",
  "key27": "3VyM1HchQG1t7jsZ76RbQsobZoxWQu4q1a3bAi5hr4rtyANqkwu1zeKc2jaRB5pqC5bMZhwrgDdQoEwotJgihaNu",
  "key28": "3T7ij7w2nidPVNM8R75qtFXRG8reYvanJ9snXLGkFNBuiY8RNipgGnWjY9pxSN6V7iXm5ooucmLCVUd5MVVDhvaL",
  "key29": "2R3989JJasCgW3Z3BEs6A1JbbR9QYrVuqvGsbbYFGzQwcoVfR9Am7d1EkghNpzL9UUgHWAoM2GaBDcbWUsPu9QCE",
  "key30": "5DQA8dg6ksnVMKRoiASc7c9nwh9VizWvT2oayydTU7DxQG8WzrBPSgtrdpCV1gFvD9XrxjJjgNeBW142pkyaL9bU",
  "key31": "5oyS5TLACGQtyhravXdhtrwk52WeRJmPYRTxERLpHzkKiCsaJm8R6q8AmTyhJGszZhvThREfCQBm8zGUCfGhqzVv",
  "key32": "5iBowk3JUmHWmxXZnd8jtF7HF2uPqkc3Q5nPKyPAzk2i4Gpa5TUAkuehaxZbQayaFpTGh3mzMEBAhkYnDoFDJP5q",
  "key33": "4QHcwGHczySKkhjM9cfUktM98xfefBf5JtNSSFQNqYUR6QHASVM2dSCRTjEX9bczeWjBJcycHtHhi6G6MusPYZsC",
  "key34": "DWkFd7vHZEs5W5cQSd6SGRJTaktT4m3UevAb47VDfKP8B4fzYzezmvXpgmk6c2phtL5rzZyu2ojkY6wCFFqfEnv",
  "key35": "2Q2TaZPiNxLK1DTkz2Rj9UznYczcFH434FroBPyuh8qKjQndPnoXR2vq93CUdAu5H3ijN5AgiYRzgf7LnxZMzd85",
  "key36": "5NtG4vdB9SbQg3GbrK1eKh2phxjZCupeC1kE3RYE97xrvVBRPsoEaRvsknEVhr4HGgSWfwJyykNh6Z4CYk4vJb7d",
  "key37": "5JovCaVJTHHUcjprkS5awpxbYBsdJBzFMVkaFhQPHPHandJvbUAWsV1Y5vPMDvxfp6rYw3yBTn9spbv15cMPTp9g",
  "key38": "5oEyTbpX9C6BHU9WupZ1Mk52fHRRTsPEH7wattYoTwdgfJaq5Ctc71TwLqe57qkBrPC8fHEzsEcTuTAbWAKeFWng",
  "key39": "4oVPARDFbaykcsCgi1q1jqP5mmUzry6cpEmsqmsfznUcfMHVLpjmCu9MwvgF3CEYRHL8aJK44NyEtE5toiuCQgkb",
  "key40": "gPAq6BxWngoNTa9idu5fi23YP21REoQ5vGqrw931he7XFkBeJ4EjxGKaPBkjrjg5d6ZgyvajUx3AS9TmAtaE1sQ",
  "key41": "9soxN5m2LuE8qemb2fDaMooNbBtSVKV6wt5ibP8jLgYSFVLGsrK9ufutqrHKPZVLhGKHxTkyfRHNyELrodqHXhb",
  "key42": "3Z1Z7uVdFTJmPRDrQPmgXRBTKWJqtiyLyVbuYKDYqcCkVf7N3YH7aVF7EH1J1Xg2Nr6d7pFJvmVjJ8oRmEd2Hok6",
  "key43": "oRcwuFuDv2sarfDTznzNY9zWpg3gd9YeNPyeXRzwAypdG6Dxhv5eSPFJBLZ2Tu2m9dwzdTpqBmZS9fvAbB5vY4S",
  "key44": "55TenAPKLfHkjXrcMiSspXfZKcQ2tP1MCRs6o9zpNuyC5m1qUrfydTxGioVm99hZiBfvEVeciw66RNh7W5oF3JRY",
  "key45": "5m1DoadGo3XkzYXFL5g8vtMnoRwnpD8T1asFVjMfGtK4HDHYg36iD8Z78Wa2ZWtHZChmLy5HAsaH1WydgUrPscTz",
  "key46": "443uha4Z4FKsZw5W527HaE8hNSp8cEn8CjhZXCkPKzgE4oCnYPWVUybpPUmebDxS2rGZGyrsPwfjhutNwgT35JuM",
  "key47": "24Nc76krVpfUGTjjuMHGkrLoFZyyyfYHwhCus7jt6NKKLJ5ARGF94teUYKtR6dYgswXgpdyMyWE3tcx8u74TC6vE",
  "key48": "4bJG7ZV5wuLy2hZo2QokqTfEeeJisVXSHYGkUM7H5HkdL5s9AdhLmxzwKWcZePFmo2eBHCSm6U8bE64pTnYv2PjP",
  "key49": "3FcACQTsMpTz3jn7tChHg7DMEv91stjgKrwoVcJqXNLsWZVVRpoRo3c7mmr4FuXL27Hsm2z9ZGAAxywv5xZ3YGrS"
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
