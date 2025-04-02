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
    "22vqUjHT3ZKxqEnznn6wQJTarFfcUonsXcAwYoyW8P3fRnSbaLwTTA4hSRpttHT7mFZf9G18NYAABr7SRoSKo5ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhrngxBTHFfp6a647kLBoeTLt1hB3mgr7UyWAMR4QPvCXotmXqbT7RfoY25cnkUKAN5uYjp7J5aVyXX7So4qS6G",
  "key1": "5FwuTWgzMXpnuhHoBqEW69fxXGJXtxZFdfuTinQk448RHukKiAn7YxqVVnZX75WZFkyGyNMYitQqPS4iJr3FDmx4",
  "key2": "2HMnxZn8P2Wus87bK4Nyjk5P8DWVdvnZ9982qkEQj2qS3xmJxx4LeW1LkmiMRSKq6BpGkGbtom1RmZ8KWopCqzpB",
  "key3": "4mZ7vn3rAD3ZC7zoYvkZkmUYwM5QEHk7oCR7BoxVDHn6DbbmJszb9o19EpXMFk63TcXnFBYgdc4ab4pggVr7VoAR",
  "key4": "2zbjxccmj7cR4q4hpwiHoPcKia2rPAiogzXBZpHL7A6NQ3Zr54xvDnx15WpZ5CbnqwgBbQirbMMPPMpWM6hXg8uB",
  "key5": "hdb3Q9VUqAQLJq5vdf7evVhKX1JsYPiPfYZqzLDRvJaf4tMSUXepyEaq7BC762mBnacdh2V8b7BRPFbdbGdurxB",
  "key6": "4uico1QDpZnmK8bsBFenzFTZrphmgty57tEQJZ1wt8zSdAqmBVnWDmuzRuPSZWW8s1YcxAqmK7PMbNmqyt3LBUJg",
  "key7": "2LE8E2aNpRqEKauUvzFwfN8L6eHYTkBAjWuF2h7PNqhvpYkThSaxLPofGJQr4VY3GHX9WYLU89c3rNHb5qgLNnW4",
  "key8": "3P5LCVkTxVSBCh2u9DTjhPD6eYaoiCcVEg3C6GUxPgvnmibE7qzkwuLarD8EpkmQmoEFiC7x9RH3SVaYJ39Gm95B",
  "key9": "2demuUM7AFfJpMtKjhAxdDdCD6nqfEDaGdhThzc3Byq4BVVhWvGTiVf3BFuFLvRegf32Sz2Ed7Z6NEEpKoGqG3S",
  "key10": "3B5pUJJYBpWjHh1XJup8GmjtKGM8aDESLMjTG62kmYRYUjUZJ3qNVYJn6oRqTbedvV3gP9GToR6e9xetAKr1wohR",
  "key11": "35vQVdYk9X4LY5cFVKKd8GL8gvXE7D4Vzi5odA9853jUqXqn91nEbMygEfY5RSr8G6twZ3QdFo35oRiLCiPCQzHS",
  "key12": "2CRhXJJU2G6S8sALozJZNJdfFYYzTt51aVRQZAtM2VRJJoiSWqAruwq3WJoqVHRVp5NbbLaMCY8cX1KsXrBPDxkD",
  "key13": "5y31udo2KczwWNMBMPkz1JWz7vqVNaDmoJtUgoJxDNEeTSgEWNkdtEcW2EjQc6VxLJiJBwRUsLmbUPLZMBFkjH1m",
  "key14": "5P6tpBEZFbLSTo9p4qB5SQK6DLLDdK2xtBZGbfo16SuqUteg1t6NTXe7GsikE7BdXcYEdFKe74BUKjVf8xatNCjb",
  "key15": "3pA7U1MAH8F71S8PCTFq4vidSY3d59CBFazrTuKvYHbbVJxrny6sQR5PWkESPpVs17pNFXpjDDFbg6PvFA21Dbsg",
  "key16": "3eS4pdJpLwXKXqr8V7cv25N2KfeAT6Dma6eBhxcAMsPeHgcwhicD6DuJFqAooA5rqRb153zZisfuQofiiYLyddzK",
  "key17": "5zhvwCz1emCZPTCju26uAb4WKSo9372Jtav8VrC5ADLphhyDZBN674FtmdxxUpzPQCCfVNn3V6FQtm2uZCz5jt2T",
  "key18": "4WM8EQKDiHvKg3Cd7UWRaiHiQeLnZyrujcnkN8S7dTiwhjFsx6rfaVRNVfcirzjCyXzS62VdAc5NcLM95wmDSAhC",
  "key19": "5f6pMYL39mykwN4YPZQsFkZSmoW5jduJNWfthtsVn8H4r9zpVpfuFqxazGCSYyBrDgYzXbrP2k3roMNdkZd196PV",
  "key20": "dnGNREYEV1TVoxmeiDL9GNsZ6DjUcbaFdoJLnGaJ6ATVvjwxqaaLWkr3fp4v6xo4zVH2msFaK9fignnJ4km7R1w",
  "key21": "e95Shw4ZfTBC9Q8R9C4eHWQ5gCA651X319jVFhCZG1pw3enwegXoQ4v8vRbCbaYSMJLoa87vEU2kigg2RJoRsru",
  "key22": "2aeWZSqtXVbw3ApWBHHuERGPX7xnxLeEYepZSPxxEB9DTyd8nMQmrKobEtByL2ZFqcG11kxiifDesn1yFh3cqVwW",
  "key23": "KD2nBywApG39TjhfC8tzEWXhBMbUNeR5wyLy9W222znvRYHNZPJJLuxfNeGW9mukRFZrzFvYPxRMdC8jUt7V3j1",
  "key24": "QMdf9hWDq6kHX7XHMKxrYBWRm15jjLGvKy1HLfG7CnLwvnWADQgSWEVaGn6CtqXzUd3ck6En3GYgKJWVoykgdm7",
  "key25": "s1i2p2VQakbiG2ThFyB1nWuP7S4RYzzxvETiNqvyLAwiobX9Lz4jz1RjCvXN68qEeZXnZLoJ29HU6YNfnXgpkmS",
  "key26": "5tj2k6Rbz2vah1WfA3URtUFBG8amMcsmG8792iF5tv26TovfBkw4NvBEPdDGRzcqcQ5qrH1yuJuB98Lz87ndZ2Kc",
  "key27": "5nrDnjvVjmxiEYPRFfVBa3qnBAKv2sfSic2tTojW29HZGL3ygKPCqBJFqbTVmzdoMBAfFGAK4yWkRY8VRnK13xKr",
  "key28": "2EXveZ3Viw4UxXrewzLbF1XYUoRM8CbSV8kopCQr8Gh3Y1zaQTh3mGQpu2CmygaGFYmspSHC51KJUoVTKErAMPC4",
  "key29": "swHi4EoxkLp4qq72Y2uMaBFs9UUqJYh4QCh8pbqzEKatTA4nwp6jDa4Qoq9pLNvsuSckXoFxC4a51pb4zzzZgyx",
  "key30": "25JJkGqEKwnEozGWZXxPPfJKtY2kba5xMhUJEYEXUsNDRZjpT3xL3N2dvqpZ2cDCF8q6yCSfiBmPFGYVyoQbGwyw",
  "key31": "3LJbfBX7orUScDzb7AGvi9zPTJfiEcu19MUMerV1e4PNqg8sTNif6QCAR5ZUCCJ2Bfz9bs15s1kWYegSfTG1smch",
  "key32": "iWQvbDJYDWfW6c9kydmMTrUdZ19dMrmfm9fTzB5nEJRjrWcCbfxXoFJoLEw6mpj3nVL5CDXJ7DiaVToBQcphCgv",
  "key33": "4gr66ieV1zggtcU63t9CXhRWM1GdzjNSm6fYZAsVqkChfSrSEQF6TkEccFCuA5U3VoownN5QmoQYivJiYAvMhwtg",
  "key34": "24gv8taJjuiR4muCFYLZkLmGy42vQUQLDcPh25SLBS7xQAPCAcivQD3BAb1Yn2D4kyTcEVV6mem2wWzWFBKhhGw4",
  "key35": "2jZVcpwk2QPHZDGU2ALNR1myQrKZRNuq2sechk2gbNXLF2bD7Kksrr8miWiusvdTGcqXAVD26KLRV4ogWMkGYLyG",
  "key36": "3JizW9hUDdMjBeHHTpP6aKndch9xjjJbGgaiReqbTbYpWgXtMnGD6jRBPnqHVEHckd7bxdKbYTZ5RBSSEQsD4PAi",
  "key37": "5cqD78BwjpN9arNdaxYj6AzH5AY4nX5SyLosNKktjmKNJVRPXHsdUbzY3Uun4Pd6RvcRvUYEK2hXEW7okJJfLg4Q",
  "key38": "3eCtbwShMMxofLmKwNB5gBnhwWNfTH7AFeDKawg8cdphfvCHTHEkahwuGVhBpYxqvF9C5AciSzsCqHVfoKsGEDiN",
  "key39": "V98JLp34Ls7bmo6Ajhj4zhjJHESp6fW6xS6WmhwagyQiEuxHr7gJF84UhfxYR13h61Lzx5GQPDnb9N2va6F2zcR",
  "key40": "2HukKqcqDd8TeRC98ipr2w7KEiFCounz1fnMxYHL6evdja8YwKD8wGKesCJB6w4Lv934MNkcVAdu2BBT9b1a2VRB",
  "key41": "3ABYDmAF7772oTVy11Vu6HJeJyqng7tQYeaD2DgKD6ymdKeZMdjSLYtqDgfHmCkWKHpT74ueh8pJ2wY2YgsRwcUT",
  "key42": "268p2fbveenk7n8wWJogjFXovXbgS59afJuzoyt3NB1xwMhZxBWMvJZkCsDU6cz8WT1wWdSaSLhaBDJqpNG7iEQR"
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
