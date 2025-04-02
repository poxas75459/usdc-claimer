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
    "4uiocmeCiK3SZLs2nBvwqyW39PFowmT8BkhRP1YX3CAFsE9eUJQma8HHjjYbUUZrMx25X8VGXojTwy6bax2deKrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAxzo1o4aG3J24T1QfewAVnAtXVxJ73VzS6vvZ62KYt1GwDvyFe4PLJQHP7C3XYBH9jZw8jfoyvqy7bnJy8JEoK",
  "key1": "33NbH8MEQHEuEqb1GU2XEihn5eQsAdDh4j7BENX1FCvxiQt26v9jiHovmUZjittj2gzUy9VW5dhpnpd4c7eskB2y",
  "key2": "34NGLTNexFkZBrzRtu9egcN4o9XksiT7cfxpTxU1xQdJJTWaQmpZ9GWWxJE5LfUNHn8vkpBaQHDuYKKwYc1525WC",
  "key3": "3kbMSC6p9fkf4bndMizdRWyc7daA6WohCvwVWVEBhjR4keFe4vmvF1nkxWEjmoVPbDESUyzDioP5aeymPFoJ3U9c",
  "key4": "23eBE8mkSr529K8UEMF3gEFC7a3wAw5ufDNZ1Z8BG13ug8qHfrEPfUNyqCmGwybMzxie9HTZmNZKrgNuKaG1RakX",
  "key5": "5BHuBq9PZaKL6esui1UphmSxrrbJQuf7x9oFfUHvwyFqLaPe3LN1KTorxEQeHWW9w5nAUC4VGvCDBpQR9QDNXAvX",
  "key6": "3mNornrjgNhf9wKc76wZjYcxDK6L6P62RSzQ7pyAawfvgLwj2UNNzn2snaWq5NzsocX3cYb61CKFP1cbtdxHyuEU",
  "key7": "4W84h7TrLncRVAeEebpySdHb7MgYUVoLWSQ3k4EtpqQPyotLQ9EkDE8T8GnFj2KNrG6L62U4wAvYCHtWkb2iNisA",
  "key8": "47pmaqqeQBZgGY7tR8YRsEvHGKiJYKh3axBdqyfie9RbdUAbwQiqct1uNZR8JwenAuAmvZNPsz342gdGn9SwKwRF",
  "key9": "2AbJjBXAaRsMnM3KHRWUK3zV4Sn3pWCvV2jpssEr7aWz1KE1ZSBKEpB9pWKJutdjj8T4VJzxNActXhdopYx7KdFF",
  "key10": "8CZ5Hwpq7sc7DPT4UxCMJ5QbYvy6HkbrFbUebbbaSrh1hNGPC4qNZsgscBHWZKTJaaqSByRHZv8kEGx1GcFG2qf",
  "key11": "5NVztbf8iCMksGWiUvP5R1w3JHMz7cJ7go5YSokK11MGafhJjMjocrYF1CZx1NHS2Kw6G1wT6wJe163YQJqFkN9b",
  "key12": "2BJrpZWK91aNKYCCUaCFpP75ZmPJCUQZsC8PQRmnRVEjqEFVDyPrBtTVCNehXGKyPaiqMkSzcpRkteazfUzE9ERL",
  "key13": "4Gv7djETVm8zSqArfi3UV15BXz9KfjDgGz4YcReVhmaRLs2i7aztB9fZYJCM1irqRndjPAru1vrrb8CUpyP4oAq9",
  "key14": "GwE1Bs6XjemUKdZXBzfqtttBhaBQUeDHKQQ826b8VCJCFxHkSR5esYxGaWJrft7sS5zvNzWpNs7dgHvUGWKCUMD",
  "key15": "fNvhoEK4x3gaFrwF5cRujeUryWYGN7Nxcng9keMqaGLuLyXojXt6qEdxAgYKmVhxRKrxUwbAcoqjkKWXyXitmiD",
  "key16": "2ZFK1FWwRyuxiS68uhghvc64Y6Ef7R4cWJvmCRn3uJQGCVdATNRNDEcTGLfQQjaFcSEFBSCgmmmdTTzijwtzJfyU",
  "key17": "5UCbTdnPpxXDLMVbWH8Yf8mWpTj9GYDPtzbSUGk4auPnhbzWHSTz2ger9ZDCpf3dJ1wpdVo3j6gjsrDHGSRrHBAx",
  "key18": "3PvsMmCjDgMQMayEe59Z7WbLpjEL4dBDC4KwTNxzmENLyPoW1uYYVNxvr2hGrG2LztVNxHCuWNL7qRjZprVA3Yc6",
  "key19": "5uuNwmmCc8pSMwZmuBMomPVov4YtRpmdDmNqn8eChbWYkbgWAGNPvjxxmcrvVMUiSDF5JKMbzb5mj6rV13gePREr",
  "key20": "5DqJ1zC8nD7rvNSr7YwFtYXzNe1eKz3fmr6x2ojh4aam6QoXshg4uCGdbsc5UtQNTFTEqmSahrQcrSeu8JG74hqc",
  "key21": "4kvbWr6Uorv46dPodAmBNRnTDtfUrG4iVNUHFQcmhYxLR99fthomckbgLEn37PVC4kqrtK5pSGscvnM2pYPSdd9y",
  "key22": "2DwodxLSCvCgYd6sNqfEoCspCdsNSs9kyYojEBdoceQwiswEYUkkoKLGJefLgUN81xYwZrWZKqFioL9XQXD7z8dW",
  "key23": "2Z6RRVXqJUoSFFD8pw44e49Xw2N7fZ7haMqwtnVMsCFkdGQeacJANoR2jETzeEpxq2T6uHwo9e9HRy4cxUsVZA1w",
  "key24": "62DFUZgmo4UkXfrd9UAPUVtnHcXRUZ5TrRurcrAeBiYdappjaimxQcjpMDiaMSGmZ7DBRmT66QcbWUCH1HrztoCe",
  "key25": "6N7eRZFvw7HMGQdX2yRkS7f5AtstBoirQWFh9BpTKxKygCxsjJKVAye9iPWvaiQZD51vej4xBbynfbhJeTT1dJK",
  "key26": "2UJSQFKhHWQSBzTfbbFzKkzYd74UXtUrCLaP78sRkEwJEZoF8CM5Fo4dj18cg5vQ7pqAqsGCFU7hMF2KeRwAHebg",
  "key27": "LZ3A1CqJ7RRvfHWqf3u7wke4R34NuWEcHPnAENGg2CbNb8qSCzEYSya1MmymtZJefZUDyjJhE1EKkxSYnf5YtxM",
  "key28": "4RD9JsHjCj9r29FKUratBPTjomuoExmnkHKyaiafLkf1yzuridW7b6otxCBvaCc7e5vnuFbjVVSbjhxMCPgC3SS6",
  "key29": "4kAnL2Wx9N11R1CzSMKMGFMF3v1B5eTiNdVjW2LgrsGjBHtKiW45ya5kmxar3EQrsDqVqmyr9y3J8yjBXQJwG1fk"
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
