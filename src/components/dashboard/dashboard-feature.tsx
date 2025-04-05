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
    "4mDnnNVDpfNTDR32e7srH9cohsXFdPMmKiLPvPRH5EVG3qdzTTYMhN6qhrm3WPQh8tgqo8ubfdeSciY5Lx4n2rTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ha2bbXyWBoBkYmjfU5ifADhJsiTowMkwhXzNp4Ls9XdtBAfwKq7DwEBuzaBQMmatuFGdMqf7MZhfwqukADa6Aw6",
  "key1": "5pWatfXEbaXokHVEVFgv9QRos7uUYuRZLffLiRLsesMwaHgCFNUg8aKTs33mQHateuwUuUzDJdzfBmrReLNqgNip",
  "key2": "v1mqns3nbSpfmqPqgefUjV6qoeUBRc6SxYQ3AmSt9qq98n5JZMsKB4BLdFRdvvrgyw6GPUVL7L8NUSWYbHSJFA7",
  "key3": "4EQFHRzUCo4RvVwDPW9ff9FPhVsu82cuB9DNMZT9qkQCBPoytRWPLJk2ZbSNEGJk3e7tFAg1296BLqZVCKUX2BF6",
  "key4": "3UiHMtRZ58GvZir1Lt3RN4jpcKstv5Ur7g7RgnFPQHStECQM1H4qgYdG9u2o9S2HyY1wfUs8x14hKJWLgSoBYV92",
  "key5": "4zHrwx2GvW9vPnpUExGDbj6M6s4tUDhz5oA2VBnd7DZGmzkhvbRtQL7LLfMML37x6q2G344zUKd3fRsWWBhBWwnD",
  "key6": "3NM6KuV1hkR93RsXRani4BLqhQdrf2XfaCUSBvoiB15YNXyzFsaYNB1vRPJJM7x2DBaXTMz8kWDrMNrxN3t6QU4y",
  "key7": "4vVyFfZ3NbFWV7KSs6g4QBWAeL4JhA2SaaqQDwdaXzeesjuKoS1TeA3i7yX9jivmGLPaoj6eqxJNcghZmm7kgMfN",
  "key8": "5ZehiMKMhFWoB1f1kyVMcAEB4NBnRiU64YtxJBqUknZxEhpAxLNuEtrwv3eNy5DAavBE5QZPmxiU5xrFy7GaLzeQ",
  "key9": "5Wd1AoMHRDD28wbiTNTancZmzsGB1wsKZZP3ZEKAfqNHMbh4H1Di2fMma4M59yPVNFtDWRgRBJzGrbBJFFKNc1e1",
  "key10": "332N8cFN1ieAudhw5LEtMyvRzYE77Qiz8uXCBndEYAoPi8h93423MGi3q4fRetREDqGxRFHp9TXvdshfC9DeHrn3",
  "key11": "4kwTYFYzkg3XzYLm9nrjHnGXLX4mgF21RR1NsPUUiLvrTmFtA79do1uA8ysXHBqucz45Rk55LwwdpCuaCdezmkpg",
  "key12": "2My36CnVAPn267KsmUfHq9128wUqeCEXqJdnmWK77aw61FNV3osUwNJ9GLzQ8SJHgH9kyXSMiz1gP8EahsNk452a",
  "key13": "vPswa8ddHQQ1mQ78FmgDm3w2nWKif47epJCWJQu42jPn6uALvdcjps512vRXyz1zzR68pYmAE4ymeZrLYaCN83x",
  "key14": "5UyMdf9xMpcSkkJWtMWiwTAVsq8xDc5bdB7CEp5xrkJrjW11crx1bz3sY8jEacciXNuLXkEcsXDZ52FcLEtPGCJE",
  "key15": "2wfNz6fxTgC4X4wZqm2emLyjuKFWf6wC5KCVmX5h9zk9DpBvvdhJfyVpsRVVJ5Gyj4kr44ajaQN2qtgwMm9tAmXm",
  "key16": "PdJT4R894axABGsUxZ4Cpy5AwsiPi2zLA5smD1E25dkSrhD1SfUFpH8arCzhouH4UdnqGwPwcZYHh2yMouJ97Dt",
  "key17": "2NN7eGN1HhmW11x4bBEBnFQ1jUsHRag4ME57C4QAFi1krFyVYUTo3egyW8jGBKnWxsmYcmBv86rF97KJ5s8iSjF3",
  "key18": "4EyRdMwykeJiWF6amiEiqh6gvPBUFUkZm4yDkBqwGe2FnsaPJxPGRWZdKvBsngwbCNuykAo1D5iTYz5Gt4pMhEZx",
  "key19": "2QEceKMEWzbhVhnduFmYWT9zgPd8dtabyKv5Ran6XCx3u2q1yqjsTYzrkHesSTQSsb36bkpiW4u6UKiHnw45cguj",
  "key20": "t9fs7apFmFxKgX2uzikDrgshxqts4ZMnjn4Xc7fL9SqmcVTHsfgT4rzXBvwMKH1TMKzQ1K5HwWvqDbpCLZdLQtu",
  "key21": "63tEy4WwRkVJ1daKGJof31k4uKMa4TGDP5nyJ5SxvX4nR1uxoAdqQ1Uprr58i8L6hEkEjPDpY9M5CgfviAFjkZWa",
  "key22": "8Q3XM52eTgA3PHknD6En6QFufD7DWke7h44tRUZvStbCbMftVySE8CfVBmSMHD3sDHKdQZAsdtZQTycRhiYRUdS",
  "key23": "3yfcWdaKeKTTxwxy1YaDVS9VUfHpMBMoxnuKYJCUsexr5xQQxFZGoXMkQLJVpLoc1AGhffzzvJ7326oGLkFcBW4y",
  "key24": "3atft762k2xadAqAiy4RvBWVe2Zzn8Ut6boyLyKmgVpCGtGGyWogLPVQGQPPgwpkK1PCJGZCvcYv1d7QUwtWmaf4",
  "key25": "2KNfCh2UZhfiXoT1xEKZdLZugzuZRt5bBSBMXVEswiZF5atDTMoVHfzqQWExJWiEmNJyMKtF6Gw9rABxX8hRdWcW",
  "key26": "5ivbLN4Mv4RskRUUQMKtTF7zNJbAZauK6E8oqoHvud4VuHStSbvvbeWrYenkDtchoV9uPR8wDaeMqiF9Rz8q6B6n",
  "key27": "4RCzCkguB8Juky5dK6pLiLTTm2q9q7ejkP9zN2FXLRyvGRX2HQHNJydCCAFwD9zmmpnfDActanRhjZirWcKn4cSf",
  "key28": "4WmFfwqEqcjAyt3zo5oWcNB8C5Am8Co6iarwBFNLn7gpwS41isNKsDuJKHV7zCwTR6UmykRXYJZt2fmorpkvC5YK",
  "key29": "GoPadDGVFz5X8E9D3VCMxjU65R9RHeYVwhswMEBLMWe6SFKG8WBonigWYbWVkc3h1VwHSaQRjAv8cdsHcZVg5oB",
  "key30": "5b24jgq8hiaDqUxUX9UfJtSvXDzWYfFacob6yNoYPt54giQxMDTAcAAuo129z9m4HKTrUjub7j4t4d1BJo8D4uHG",
  "key31": "43kfZz89TkC8jSSHqkPh7tJgK5HBd55oTm1CbgdufQksuBwV5UCHXRaw8HeGixH2p1Aai3omRTcttPiegezHGKPA",
  "key32": "Cdg6u98cuDn3JXespVyhg4pUAm5QjxtrBhhtBhSaJvddb7UeZpZ1xFAxjG4MbHnoTBRYc4tf1JB8CkgavTpbVy6",
  "key33": "MazLE6TZW8ZPQWDK3pB7U5u16tyaipyskE1M14rn5pFs3m1yWe8xi3hqszLubiemykTHi58Pog3BmHF6zgH8X3v",
  "key34": "6tmzpcGuLV3CXpjtXr1ASHeHBgb2JaMZ3ywACPVVdXsX1sxXBtx7f8xqifTzYx1JfCxKY8FF9rkQhYdBe2zxzLn",
  "key35": "4TZrFd1dQCxRy6snnLqiaD2umKoShP8RrayEvb6W7gYGUXrB5wrR7ChSxejKB5eBSmsoXsYsEo1aL3H7jvoVyNhV",
  "key36": "3K6GT57pXn9R1DFj3NxT9WSTD4b9JXTXWgwPerU1AwgCeVLLwAXzYSv2cvEUvjJj8REknwrmwjVfG9nbdnqEAXYi",
  "key37": "2G9u2UKDtr7aoDfobKjAVDDxyEHFGrW2MdpyGoefWgQPJHRktkPghu277aEjejuaSNqJawKMhQ6GdhkMNgX9X9fs",
  "key38": "3obontx6VpcnqyFWRrwHRQyRUwqMki9U9PSX5NGxYePZhNivrZ5v1Z9S7rgAS7K5o44cQuWmQGADdyMKkX4B18uy",
  "key39": "4WjtAZtYYa3u1suZd3o5SN5KS3Ke2KsC6xdZsJrayYcV8Wn6as9Xx5jDxckHsSUjPsYN7vpxHLxcK6KwAtBrPaZP",
  "key40": "69SoTLtDrt8G32wAfBUK6uvnHSQHaXqXgPUdukT3WguYKwsHiXAvHAagmjrbSKGmBd9EdnPMH9J7dNvTCF7TE93",
  "key41": "4326TWPXmTuYbgapKPRwSQPeWXVwy8GETyURPdmnfoKu3XxTRhz81zoLhUb1JRcwqRHtkDev1LM5JLBkyKEqMcHf",
  "key42": "3G4G3vKd6XGpUTcYLFnquasc8rE3rjHzSZexLWWrYV6AHrN9p7ZqVRKqL8XAWeBTjhBvyQ9shqPYQyEANkrKuzLu",
  "key43": "8uxyK4Bce4RSVMYqZyZekhrs9ZyjxpS7gCS88MW7eENqtTKPkcxs2pFhQcuNYNfiEmYX4W7SDr3uYMXFEmimfh1",
  "key44": "5Dc4WQJAdShbn7eXnnYJ9pKbtwx8SNm7hPuYKHLV8nJ2iAcQdZG7b2fVfUjMCvtvoKLdATvengqemMhWoKdUSmbe",
  "key45": "5kLqSAwjwZfsWJHD7WXwKxWc6iX1czajuyaDcWjpL8wTNDeTUftkixkxkvmUjuBKL4kJscrQ87HoCkiT9RwnPHnS"
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
