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
    "2E3NjjiZN5ksaEyy2yS27LiSGnWxVEaq625m39rKp4XwZntwdx8AkhBCy1fZcDoHtWn146dQo89JtiASaJ2oeEUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnfY3RXtL9j6YoziaNAjg96f7qpF93xeF5sPhfLuu43iEcAPWXqhs66SGk1o3b3NG8SyCu2hJhJkj4z7xS74QTy",
  "key1": "5sgfBrsroE8LsdGKyezDzYwnnYAWjGk2rQRvzdjMoKJpwVTZ8kcBpUhmdTCPdJhYBoY74ty8SSHgQKiMGLHLY9M5",
  "key2": "3zEBZvzoyRymFUMtfA86BYX12Y9UMiRHtWP9m2K58PwR6BfqAjTZfLfFxNfgbV4RaKShYdbh1BfTYvjhgHw65pHs",
  "key3": "kmT7xzNNHrbHXwF333zigK1TwkpfVzEBdSVao9vJEEXeu8WuoYT14NtDW1yDfCRaACV9zK4LkVEZxcPfUss3E5H",
  "key4": "2c4uT7wzw6fMYAcNBgchkytUowMsnwx2QNnyLEbypWQFPmLNEZfJE8VhJLMUFESAWYuUkSjYHYWCSLe8vR2ooc7F",
  "key5": "37wsvTrR9UcCwGwjjbEaoCL6MZXAaepunxxhoFJFFsY7uCG3GKdc9xEydFSgobQTXrqgMbxtjxzdGPPEs2MA2LXH",
  "key6": "1nMxzYr8yZv51RjispdsJRdYryCmNB7SSci3KaihLQPJf1E3hohdqBbGh6bRydjjmQfcSSjUvdz5MKCwaToceiG",
  "key7": "2288FosUjJkqMft18V4zhjjm6N7ZNsukSASJ3YtU7YRpehY5YqupUkfYGUn9WWdDMuDk4q36k2ZnqfpFR1qRKig7",
  "key8": "42FKrj37EHH9aQrdVzvJf3u7Qz9LU6yXYhJHSvrgW7rHGgkAMUATuHstXvki46uJuTr3rAEmmiv2jVxs6UnSr2xp",
  "key9": "3Xn8xN5qDT2fE4Dp2YfBWLkRVkYyzmYKgEweWnZYvqJ6ACqwKALU7v5PZBqaF8dMYP8t7VNenNWR5isZqGfFF58L",
  "key10": "4ApG9KHDf5gahpYYyiUxF6svjC9Ss7BHj9VR12YWTkRzJ9TQdNuPeRLH1uY8NL4FPh8g5xZ1EUJZrDUeNUxGxZ5E",
  "key11": "3ztJK4DZJSnuYRyRiukhG6wxxtAjbBgAAxGKdAjVbRtvwrZNDRAtQ1sWFBRqME7SFs1qyY9gfTpeUyeQmpyJXTZp",
  "key12": "5DvjN1VpJGjb1gCHqNFYXYXuDuU9Kyn4cMRokAK3r65eZKb8KQL3LjiNQ9R2nwZuzWmEdZ6Cef4SUFcAwK4Sy11x",
  "key13": "2xcQGaDAKuUX9nDWE3NS5k62LVEvaL8fKwCiBA3bj2HjrECGYpKd4NuwdCnKD4mu9bqUta2Ma96J4QhKpDxCRbPy",
  "key14": "iNXQk4yQEfguYDj7omAFBWegy8iaSCZw24imuvmFiRCTx7wrcRKcneJaxfmTXk4HQp6VHbe4ibK39amaj9Aaf3Y",
  "key15": "5uiUYmqfhQTDq1pexDAM1z3JCSPA8qARyTPxav1ntNMxq2W9XyXH5EFdiV5JCUHvGJEBMzionHrcuNE4QiD4XNYw",
  "key16": "khMMJn5BVA2fZC28TfD1fRZzWZLzC4ABbTd7KTmSk7cpPYxSKrtNXecBGdF8wTZZtq7rafp18Uhvzm3Jy4Ry7Rn",
  "key17": "4pYPH4khbjG4sWqMQj1o4yyHUaXLyZMsSUNN1kicy793kaMVTe4oh7PwSum2qYicVCgdhcQnVSx2Gxp3tKrpujDi",
  "key18": "4Lgrd7Ejddh8DG1WWmprkJs66CfYEJ8oX18DjanGxUQ2WxpyNtCYmytuv4mWK2gmkQ8iwJBH4F8ZcY93uLBKGtMg",
  "key19": "2zkky1yWMkJPaNBJfcsqR3NnnEusE6poL3cSuE9aK6C49sc2VjoaFkNNfRSiirR6KLhKgcbAZBF4ZtDbkwWGy9Si",
  "key20": "61JsKcgdunuKMfQxQyPMwg4N1aDK1FVRTfhbQCJLSZuCfTDKY6151Droe6vmeNw7Wnbt7wX5Qe1GYbkRxzp2jFbX",
  "key21": "67doPJCWau61bs3wrxuKTUx1J52GH9joY1m7sdtoFN58EXvVJP2RkWoDgq1gTbnhkgDtGwNsNgPLWSpJxcADmkZ8",
  "key22": "3dhcA3N427nqcgnc477Jjw7y9jaesUVritJ88yoUbfvGZWMyzRz8zr8Y1e1TAoqFXQ6vGX82ZgmkuwFXn22wcpWw",
  "key23": "3ZJNGaawV96ZfW7iVADSaVowwMPJTcJsWXR98mXmHYTpj4MabMzPi64HyrgRqEoRDRPoxCua7oseu22bvCNKHCSu",
  "key24": "5QszhtpkTmQijhgUQduF17a3tdXcLYovanGtVGJrRJvCBspD5qW2MpRb3n1x3TqyFFzw9giKsudX6XdsN3af9ikW",
  "key25": "2TVYoKXH2S5bs2qf3zqCVVZmY3YEiUQGDpCKhT9ZvnpG2QWWAbRrk9nXsYpQkM51ueGZTygmKGLAoVrRHRACcD4m",
  "key26": "2AmGdjurdQU24BjPkUCzZjRp5w4SsMvGDMwANfM2Ao7DLEuxZ4nHe1uG73TwsZucyHbMecVftzgEzbEuUxqi5uJb",
  "key27": "sva9yaU7iYWjcRUciUfZAcCJh78hS6p1mhWc4yZnNqGPS4bdbSFAiE5spVsBw8UYYKnWSpt7C935gvupD55mnXg",
  "key28": "2sCzh3fQL2TEpH9UzEXUUuXjmfs4UNCCBQ1mcJLnNmUvsyjLVthjvamHVFoShha9trcuCNz9YXyTo5pqP1wdhKBR",
  "key29": "3YCwbPbvNW3s1nQLNt46PyZAVKYjpEWBJFbuU8awSMAGxRPiJ9mzHpoj9MY2t7ovwgPW3VHdxCjvMo5x62A2rkgR",
  "key30": "2vsfXk7s1t4oiSirPsVVxyfDt5V1SVqTdR2EsAcREb2LLYfJF8eDPXj64cTNDvgHNvN1hYdW1ZG2ioFSdZNkiJ87",
  "key31": "4DZPrZgSzgC2BkyBTHKMsY3B5JyanK5JGknKpFWiEhD81nTCKehR6H25DwPHuLrrH6tT9WqKZbRT6cPspEfqvFJJ",
  "key32": "2Bd7QjniwEpKeQSEQnBi1uj2MVbFHeYZRYt17JhVGnguzDPhMSCaNdtvGJsfhkNyHmxmhfDVX6iqop1DRK88bio9",
  "key33": "5gH4QMx5rRTDc44XCqi77iZaBjtbVbwLT65Kw5VCWiKUHgdtKXGiamNXyxNhCRNy8VbY5iZHjwHuSUWrLtDBxhQT",
  "key34": "51UYT8hsDLaSr7DuSxs1E7Ai66aDbH6PQjSbPh2QWf1GibZexbzcgGS5QL454rC67SatE9vfzmn9AdThPa8Vsn6e",
  "key35": "4J3UnqqoRtT3cWJHu6bS7mTxWHbkUWn4KCmC4hXit3Ha9pHW5teFoWxtU7SctwxsrfFmqi53oqc4AGkMe4XXbwxW"
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
