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
    "D99UBwpHp12jQrasa8QTkLiXe3W1WGsoHhS9WpanDtviz47vRx9eF5PNGCd25tedsnNoTHeL5Buc1MU5E7GBLoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VoCFfazdKgLpfbLRp9NAaccNKYjyrqG8xSRW1m8Aj3RubTtsX2Hw5SPSCrMfPQrgd6C785zJM8EhorvsuNy1bzb",
  "key1": "5EPrSSY4VdyCLdjKwsb9UcVSQHLqJhqfHjVQh2D3ZDFquKg5JohTqrLDGEWwcgVe1vgo3nV7H6fzAt7cABwEYdvE",
  "key2": "2ZBSwxrLgqUdj9Q7sMisMoKHFzg4Sco5kVjJUqya3DqgqWecnYRfPKSFujWXuKYTsdEBM7QTSEL5Yb2zwMSg4vtv",
  "key3": "uUv6engMf7nwb9JBWtWuJ7RoF5zuqCjxxnVYCdcZ8mbENYiTGPZJyPwjEEXHCRifEqmf56u9eYH1cwX78BaAZzg",
  "key4": "3oXCDZs5QH2wrEkgYagXgbyqRFyqgGryjt8UJvHXKnparb6LY8ckACjD9BKcpK8iTjX52fCPDDHdwyPmQq4cya2r",
  "key5": "4CAZE7ZHBrviGqrx59HaCB2wdZpcHXKd1sntoKbDKLvGj9c5WCXWgvVrRXdHTH8qusGEe35WFk1X6dMJyHX1EQMk",
  "key6": "oFjvtY7amDHatjBwmRCjUtBwmAuXGbt4bwHW119B9GZLTtCbhMxJ9ip4Y1mmSwmjsiCgxKfmXYqjGGsQVSfmmqu",
  "key7": "5Bfydd5B6rnz5wK2Yy6aEcF1oY2fSGbzaujzSDYYZEacBiXb3fe326fpCYAANKYBtuepqynLNUjWSGuonr8NLzmS",
  "key8": "2zdf6o4fArzeqVNXHsYKX11JJumuZiZEU6mXm2NdAJbUYGbCDUSxp7R2gJmL5j1itoeLZnB4cmGfwaw224k9dS3z",
  "key9": "433bCJH4QckgtoTe8jzxbFk9bwCWs8LdwU6PBumuXCh3D1i7hMX6xkkVDJHFA85m62ZubUQeBCQKA9AzbFX2Hc2X",
  "key10": "2R3mULhhT1fb3j5xMHFyv9qNscdfVqpih6yNoVMRb4JAjMsLgsbcNe1VxZrX51f8P91GuaCAsabdw7VuwyyqJB2K",
  "key11": "35nC8shcNxzGT3QRghSfKBHYAvxJhpTLSktTt8mbWx8Tzp9R7b6xFqm2fZbwBd5hrLS9e4yoMpKBaryfmgfxGBt1",
  "key12": "4Zqz1iHT1r9HT8W4ZoBH6eP1VXdY5KXLB1tSMZc2y4ujVNbszARWf2uLEMyyHEPbeezMUHWSvFi9DpvHZTXEX7nv",
  "key13": "5SqanoRLE7xWR5woWstHjxHuGgmDo2mrAgpKit5ot7zEDKY5KFbgyddJE1Jts9X1TfVh8S8N4Q8xd5h4atr7nFsS",
  "key14": "2f3XSM7DLc5i3ceNZwJDqgdh47P14651AQNmTzkCG5x87UmBbxe5s6JzsN6W3SdVzrrZpZhg6cZoq2CqJ9gSHDsu",
  "key15": "HRYBNZEokZ3eUD1d3aY3MDp8fb9eMpTNzWSTCm13mZsBUE51yyFDuvPFtFHrpBma4JZRkWdcMr2BA9PARUb5azh",
  "key16": "QrEKmCHk1WN6TeKUJoPYFiVfYfEFCQvUorzRXsyzRGeUd9PvzEx6jo7kqF3oyc8vW8q9ZcsR489heK5NJTpiSEr",
  "key17": "4WvJV8pHFYiTRVSjWSJVtssCtBef3q3WqisY6sLiTDnZqxKJPZhXSwCufrjtbJQMYVVf7rCVovKJy2GzGjCp7Egp",
  "key18": "3PdUUgkunWgsgQsK9HncaoNJLDyfBvJUdywEGeSoygAYN1LeTcVUrpeD1eWRAK9xEQrGTtUDAV6z9RBFUKMi5rQV",
  "key19": "4CRXhAVXqHyBVfgvme4kXDiQRYDLcmJnC11Z93VMHWU96NApWdpTxVUWWT88ANyTtbUQtrb8V8Kr4u2pLT9tduPo",
  "key20": "53gsiZmpEZGmH8C3q3v9qpsN5PkYA16a3durbcFdxtxyDU3QafTBXi3r9k79XWnA58x3ktARRaUh1UbgBio9BrjQ",
  "key21": "25PZZdwCzJQzUZgwVrJrWpKQWk738kbErnM5rAYC2drKbibxe3PX8gnPqSG7uGP4wgE4ftdRf1n8DSCDnG1ZwPtt",
  "key22": "5HrMqXuj5aQL9UoRwBDA55kbh2DqzPp7g4GPQTKg2yVPtVxtbmQBdbZHXGVef7dhgssyM2fF4bdKqUfcguBjdGew",
  "key23": "5GsrGoqA76bD1HppqFCPtyiSD5cxEbKMDy5BBuN7XXqX82gbTAY8AFRTj7H2LRdRq8pnZHMxocC5oyMPm2mYvgtg",
  "key24": "Mx7FSYdjBTgvj1pfcErNuM4LcnLtDmzZSi7qJCwJeb19Vyb6svbFvqUtvEN8n6frZD7kM2qMcaF8naNC6isjJyq",
  "key25": "JVkYHW8ex3it8kHX6iZa45D1paW4qWPgeuAiEhEeF96tDG7JGVVX3Vr2wSep5q5Zy5Mja5mwGkNf3SAfvA7QjLr",
  "key26": "5yffhauRGJAhXTLTfqSEBTNRCFQ9KpxGLDa8gvH6x5Bq2S9Z59NuDnzbEQJ4GBcDhVkm8ciFWcSVBc1XTRqPwFVt",
  "key27": "uNHhWXsP5bEpzvXR52oVsN77cxrLgaNx5vDzWxiSvfYghEWbB1gmYhVjHAt4Z392vZWrBbsd4n8vcB6MzheFU2z",
  "key28": "2VdyJkCPwwkUXiF12vw6evsF7LVwEG6MkRi5MZa4ogTAEm7zft1TmobGgyjU5uNhA6ZMyo5EcAFGuos9sGmwrt9x",
  "key29": "3JCNZKWoCM8zHrxuxCP8WFR5CT9xDFVUgnvYvPnfDPXxob7EPeZinzTgmhQdcAgipF58rduCVxYo8vJr4h1T8tUV",
  "key30": "2dLDisRYgWhAhK1PhgfZXRQXErkgejsio91ejrmQyWwyZPEqKwWQvxBUoVW46Zenf3NVZifTf8PMTd5xXk143b7S",
  "key31": "373sZbAhutDTLi5avrHdWdZ4hMHSjmip34v9o1FRdMNGQmnSQsjEgEGnKjR46Kyandkeum2698pNoGLE84cxTpLz",
  "key32": "UsLjGoQkN5ErDypQ2tAro3zFUnu35BNN5RfoncgskeJh7Y347ANHd3MBdNtXFBwEAXbvKzqiuTxCma5uGmbfNXT",
  "key33": "3icCCCSuqokYhnWie1FVs8TK53Y4gVPCphdV4rt16qoCc6q6CyXP4UmWChowGxdBoRHtoZB9LaHxtJbvyZ6FGqn8",
  "key34": "5umLJwjrvrf2uU32pdreop3rcF54uDphMWZnqtoBdVFA99vCUL5bEnBhqAPoDSwaggZUUJeR4yeni9fvwtejXc94",
  "key35": "4p6qBwTe7wdE2eYJcHNofha5bNR32Y6WHnYdZhczAV9vjp1MHBAuf2VUjF4YbbAYmtLSyKnR1587uhQjhVCq8isv",
  "key36": "3geogjS7c1tHamoq859i9fDAJVx4yXb6ng6qtBuVa7oLJFoi5w5NRRrL7VnZ4CDFM1YQABNBQhTbkvPLeDmUzowU",
  "key37": "56utoiSRUNLvP1QrzeZndRNQH2fmh7BmrSm64ZBnYEcjCxmTtbxK5s73uvEECBM8HAyN6XJPycdd3wfaCWpigVKW",
  "key38": "5ueRXhqHKKY9pXGjZ2EK93Ak7rNfgu5kdDthNUs6co2DNf4NoAT539Frp8njYvA3UQYvCRwfk5omNJ6pZ8mFhJfz",
  "key39": "43m3abTZjbrtgCgCsaVpXDwjkv5SjQtCB8TXbM13omXTrfVd92F1VHRwJVKJNTEdoNG6rRabYLFhM6RUfxDWPYhV",
  "key40": "5tGDuZZKZTf5ffCUK6w6L4nH6KFX1Kuvdh8ciYkgHHgxyCqVjJW5e8wk4ZQTUJP8tTbjUQE2SSZQ7itQj2fKmdFA",
  "key41": "3uuML1BnwwyWmQDb4rbGQ2qFfdifghxBGFUiC56SJHNdv7icr6hwvsNs8PFEZn1pENBQc76MPh7jgaHq2qPSkYW6",
  "key42": "3NAk5QJkUqcCze2t6Fq1tFU4MKHmXJTr86KY6gMQp9ivYe494JG5QCSR8J8fSUSiozJb7L16T9ZetRvYbPLpR1sP",
  "key43": "6znCSqhA2HDCCNytjcNRWtikXr8W4fcUGEvWVQSr457uiskHRVGjyXeYcA82dvSopmKK22x3Q5pi89XDiP8acm3",
  "key44": "4W73CtCejRYiDs9HRuBkHVtg3PqrLwdLeZniKgGHgn9cviNymkVaxL7yyFErtNPZ6PvzBDErteoxfexPqtuHKapi",
  "key45": "5CAa46Eh9J2Ezhu6hZrJpvbaZiMYhP72i4Mdbj88GZa5eb7ihLkz9GvyGK8iKZtAYFoNtFeWcfYNFkPFyzPhjPNz",
  "key46": "3J66atA2KihuFEvmGxjLjcLR23zPxtadLCktuMBWGrtn2fDyRoe16KqxYu2gTUzgzEvEcsX63QWwsW6pLMYYRkcZ",
  "key47": "2dRos2pDk8q4R2nSuiWMUMoLxbnHD5TSP3K7q7B74pkiJmvXpz8MXMoMRtZXopUfc8xYutAmBK3mMGyt4UqqnhTh",
  "key48": "4woXBBUs7tnzqCsYHfcnTx3ZUt31hLxABe8YxyZi6FXa2SagouSP9prJZ1CvQ3eGjrdFQfkmjFmDinGvTPWZQiqt",
  "key49": "2Si1emBqy5n1xJRvegd9Hgd3gc5UBucFLgdEsLtVA4L9JuEDNazNAtTkT39Krf9PMd9fPLoEUbThCLh3w9d22g2q"
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
