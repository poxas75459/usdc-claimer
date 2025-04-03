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
    "53YFPxTXSWE5vmTUxNjeRNTY5ZETo7ZwJYgXBbuu5ZYkTRfivH2bN8m7ntFjKn4bKBZHJsNqH5FSZ72beJ25Kxea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNashazHeyyYCsPV71cuHm3YeLsYewksNN5YpKgaMooZuZBJqfynpZBqPNNKektRZqgQe1HwooUdMeR6CtpsDWV",
  "key1": "FCr62x6RM462sHAQVoAVqL9RtK1QbfhChj9MTxMvssFcBDg22hoTqYPFsH8xZubPPNZmHqnxPyYx8gUdkW4CXdN",
  "key2": "2ks5VaFhbK6t35Tcpmsohs9LAJqxYNFJWwzHkeV921SnuW3qorUwumEMmMuMGVxiegfhzR1g7rEhoeApd68EYEhC",
  "key3": "25Gi2vi1hSyU43wN7Us76u7fJvoxFkZYWVNXfu1ztLXVehTGozmY3uWewkuKhmkLGQ4PH5jpnkKan6uCZAWHH2Qc",
  "key4": "iCZW3KibeZgEd8C8m4dYtbR3Wx77nv4FFN2dK3WRhF8Q1BCSLFodshfvb6tqwVpKw8mRQkDTjyucpy3cKKctDXu",
  "key5": "4xNAWctwkePWFxmcwxyMb121ca8aVyGHSGdjT8LKzfCZmfvTervM4YL6bLQMStiXiRN3wA2kadMc3XJwJ41A5gon",
  "key6": "Q7YAFeF4B97qqDfomVQUYdTR2mfmY9zPb4W746mwQ9ZmK7YH82M2jiKjMd4SqiptFGMeFro4khzU8uv4uf5CxEb",
  "key7": "2u7rwhLcXQxbXCuUnWCtJP1pynMaKh9XHooaz5JUx2UE42fdByCQp8zBCPgL99DMBhJAFDfQhccsc5ww8UyhSQdR",
  "key8": "5LcRgy7c8DHr1H2GUJ6uYRbizdhKDJWcuCY19kaLZ9dugN9PwzemRuzUgY35fT1w6AL5uChnAtkmDSvNXsYz8Df8",
  "key9": "4ynEhSVWs61QEviqK9ys6XSzaDnEJbgMLUBpefnKN7cmGRvmvHRsQTUmL9oMeV3SFgsdrTw7tHgZYv7ddzTzgy5r",
  "key10": "6Lsoau5hALC8ksBBQVnne17NaJihhLU3u9N57fGnRjHhoByhUAZ9SGHCyxVZXhxGdRB4rundcTZ3vWpYaPQioBs",
  "key11": "4YXgqY1xVJwb45PHtTECWACjpt4PDz9CUV18Cumwe4ygRQXdrjLrQ56ewUwywGGGhotR81cNxWW8NttyPZB6F2Us",
  "key12": "45tUQmYVSNF6n4UPP62gBNGN8kcu8zYMVRxwbnD3Arb3pLJsHFr9pKbF475MzdFVPZuV2jJ4aYBzrcayTzK77xHV",
  "key13": "gyHtFkwiyHWB8q2Tf9idvMrN9gucVvwyKHtp9cmaXCqyiXgfiexnkY6f4rRstJ6EbvrarNhDz8Zwkb1jcEarEHi",
  "key14": "4a6MyUZBSSvkisJqbbj1rG2fTq7YGvATPHqYVPg8kGgqjd9tLsxfEkA86wsCSaffSfKrvRnGprXPy5rXFzD4LBUU",
  "key15": "J5fErAN3LkQsTfF6z6rqaKg8LD9w3abwjeugbBHKmXniUbbMyaU154RT46o8dkQCUZHffgEupxd4uuyzDnogNg6",
  "key16": "2DNEes8v9aZt9o2ZEJGaK1imfsNXXewJyjjEw6QyB2wy9bkdmxMmXdjCQ6oyLLYHuZKTLYVJbfA5CCyk6wEPYYCK",
  "key17": "3oge1B9PARgF2mapaYACAG4WMaoZ8eXYADM5ihborDKPM5u3MBF3XBFJXkJ87fN8RCgF8FoeXiDYanaLo3wJ2Q4p",
  "key18": "49h2Rnw1ohNLqx4wdPtBLSLFRp9SozYpRePM7qqgjhtgTPBqL8AuLqQeif58NfSiyrg277D5uWD4wx9Yuo9Qc8Q5",
  "key19": "4HAbDcDLzfNMrNtNNfaQGNvTq2iBTU6krZx2x2zbPXW2zWFhxG3h2rqLpPC6YGLbC37inN1pt62XwqYzetGhZzEH",
  "key20": "5unGTU2yAF4nppHZMZjThwrBJAdACeRgpBLxVtD1ucPUeavKHtpuc4pQedHjDwEWoTKqjhxE7D4U8M71hYwEkhSL",
  "key21": "2WXLb15kFy92oqcAj7DcaPJQaD7MNnHzrFjjZjSazFiQDkuQGdQDM838brLZBPtnXpAnaMin873mevkCbxRVNxwx",
  "key22": "2g5uKeNxBtQ7m4MDLuc8G6DY2uENtJqCaDndJ9XGydybfbkFcFKviYKh4twh5K4qyJLB4GrjKA3nbbzVJ5Bht4iV",
  "key23": "5ef9C3uCRogdBXiNC8WW7rq7gDg4v8CgWHtzMxe5jq71LKFMA18xJMu1SZveVNWhAEoFLHUYxth9DHeorcXffQce",
  "key24": "3cm7PKY1aUSFADzzcRyL4kC2QxX3A1eBtcNjvTH7XpYSpUQeKU6fFPUfNRr1vxCmnkNrHWona8XxQg4yexVUy5eC",
  "key25": "3x6ePDKm5cAYGntEyRTTjVhatmXDxdbEM81D37dBmUezYvdkXGKPmPtwWewvEmHVKW8RmZKEQMxW9TKPWxkRaQjQ",
  "key26": "3FZHcJdzWqfRtbpHs6G4qvRbehVhr7cEJQaCH5iu7cLKTGSw9eGt9YJEGChc93qRZWL8Ee3hTgJ5WzrdWunMiRsb",
  "key27": "5zg3LurFW5XU5351wNExtaEauXP6CqV7RLQHMB2rkxxTuT4gaFzEn9ta7gQuU8uEbPkNaxdWwLsQ9a4tacG7mczK",
  "key28": "4UKd2TsxZcoGyXktD3ZxT4RsNAhZXCaC8uGz3nBmtvt9QmnY1JbudrSVjUDU28NpGT7c1mwpa5GPaD5r4MY66urc",
  "key29": "2pBLyY9Bppn8k4Lntar8nD9Rwu75dDhjY9bpZvh5pbzQHdqbmAch4HFYhFBBwZr9iwGCYUgCkPmkhyA24Lqu2WrB",
  "key30": "4VnYwAv86U2RTSrgGmBNwpnW3bEoXF2fsBpBZfULSntcfGi3JD5tRZ8JZFoqT8dH5vhiybFtG37M8Cto89umWNAK",
  "key31": "4LxSKDRBHfF4aPFBQy8Sb61hGsGxq8aafU2z9Cz9po25riA3CeRBwSb5tawqPqQoNdhf1jGhmsBiUYWap1SKMFHs",
  "key32": "gkKtYMz736J8f3azzhGWmR8QjxfiUdD7kdg3XvjjQHc6cDar9UiDo2UaQC4DFjrKzj4P9ECyysozg8NfzzjEjwW",
  "key33": "yseF2mfv5qgZE4cB199kPrwBwxADRxApUAJBUMmaDcFJxVT5T8riorFP9rzXgRyKxmroSmAgdNTV2VQv1L22Zfo",
  "key34": "jmidYxe62uttEeSuyEdV9rateGmvLW8xP2HAKaAQqyHa17pMY1KtsM636aJRAan5sxAWvUtv7J5DuR17vLMuY6A",
  "key35": "2ZEfz8uznpSa1vXTjRbmAAj3DKGEYkfuKbT5d3dwiAk8yuv4iQDEvwm9LY6bAuvWpGZdnMWQGPowHDw7p8dS17wR",
  "key36": "5qfW4tzgaF9jFyZkDgPQqdFy22Xh4pTTq2diUMxwZHgRRC3fRCfABRe8KpjuarkNkgBqhMjQZXx9cWvEHex9Ha2y",
  "key37": "5tGQCoeaYpUbJS9bPdn9vct5wbLzZi8oXMcohz9q24wXUCiVGifdT5yX16dXKNfsQwysFKy39t7qKiboZ4WmWN1W",
  "key38": "4M2qfCk4fQ6sZUUaMznQhVCZq8DWoFeGSPWGBrKuYxPs7mADVtWGutkZRveUMoLuGCTrfWLe8kDpRxNpTEcK3zUn",
  "key39": "meaM5o5FV1VcXR6Du6DNHgsiNHSUEHfrraXmiZXDQjwMz2H8sHYcts8jEEUssChWWBErScJYoNW6qAMiX8hB7u4",
  "key40": "fDHtEFM7zRTGJPXuNGUMu8Hz8cPphSpoDmp1LGYjGELS2QpVz2ohotFrDgSPekKm9W1hXjJATMkkack3zpHheS5",
  "key41": "2YT3ye9ijU1aNt7DaotMDECdfSUbKTTEm1DTFkozvDePNd4iSXJKymuDnyZi64yGNz8cdkttpAFNm1jd26ws2Hgf"
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
