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
    "91cji2jAsHJgC2KTQ813iGmQUtNSfxwbGGriVtiDQ1ds6mY2jeDa3E3XZvr1JBZiWkNBCS9y4pSD2eK5Ku22S7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obhnyQXV9nGzFwQFtToRxuEGwUaEML8PtZjZ4y6jGErEvZ5SoRUCt4tfPBRFwJ5f4V9APpQp1TXshFeRutgsGR5",
  "key1": "3SZrNSHGXiFrQUbbUHm5zz3hHNTESjSMnLrLMqh6z2QMue89pKJe9kg3vk3J567dUxcth8WCTARy5XFvYwafEBBB",
  "key2": "41dTPktwXK7BdL8RYF7vPk8fKKXoLdYpExTAk6UfqMkT9pNeFtUdNeDCM2pqpub4C7Uc65e8Z5fLs2qVNwoPM32S",
  "key3": "2aHpB7ncjGdM9cds3pA3BmpZ75FFxpYxLyvDHT5aer5VkMs8Bxuc8hBN1mLgPYdGmTpciGMrFFNVNTKnRCT1wrST",
  "key4": "2M5b4CK1qEh2cuqnawFwWp6T4KL2yzrt96VPcqHjh1PxCzBvY5xRLJDCFEkcNQFyV8ChCbYLs9pYAXNbyCUBtLWi",
  "key5": "3sAKm3wJcnfycjngnbjveqtcraNL1zCD82e9zz2kMjtRoFVeMJZNnsAhGQ1Q3pMBwEuBQ4cytgodWYFXTd4AzudK",
  "key6": "27FtbdpTYdSQ9Jm7LmtgTReXXeCJ4GBD4qLKWhizzLQTjueBZnmcqUE2NJUF14vbGMeaSKwXVgUdU9efPpwTXDju",
  "key7": "3gkMhbEGiRAVjUEMG49XGejLKUgrhJGgbSe7AfYkiLZTdRFmbyvFFH21HV7eCTa4FcusLX7mEjmRFMNCgxTRXphd",
  "key8": "2pXG4suz4DBPKnHJ8ChBZjGHH3oakPo2eqXEWCEr7TLuwKMnn4vSq4i9b6W6ZrVP5wWkSYmVTFTeoZGqyaoweEKY",
  "key9": "3AUfqTa5M8Q8yw5aia61VTwrmE3ZfBGWSYQiAESbpVKAnmwMHtjeC626otbqAjUUpJnSkreKjct1waUZGqyh49wA",
  "key10": "3peMU4weWcnSJMirWQGWNRez3iqtRcRnZVLDzCUcDzJLKVASzUHoEnDhNpN2rdvGJudiH91hzLDsjQGkTRcuAmsj",
  "key11": "dPnhfGhQcvj3ZB8ka8jCNLeBuK8VsWy8rZVFWxvZQTQtMnN86C3zwQFiSG9HSRiRCJ2XrhJnvMugxgVsdk3FX5s",
  "key12": "2S4zcE4HFaJZqWw2EKKhVq1iL7g5iWyXu2bVRDHYjWCTaHwv56uoBXRJkCT7cWMXv6uFNgF4ejv3pUoY7AyuN3s3",
  "key13": "67dst5Wtd2SwZVVxKAJYiKv99Tw8zuHxgnqRhxb5cVzcKo5LZZsJuMbTB4fQgGYQYRpxK9aqX33gRywiuuxxZegN",
  "key14": "3PgVA3noQCTtbRqUTDVLufWGBrCcSQSUZv4a2jHBfS7NTxHLsnLQLySAjgNrsSQWqJANoVdVJkGDawdzGogCuygG",
  "key15": "3L3youFv3cvAdijGak1RWiWmu9FKDHciikhnzE7sWowUmwNryfQb54S7BYSqezQZ5PiAsU1c7Q7wpMftajs9HuWA",
  "key16": "hXDbptpNK1SCZTcPEXsdrwgpB8dZHpMV5h7DczDgHkC9roZZzErXaeJ82yj5xH8Q1htAg8t1eQXakQKBDG6f9UR",
  "key17": "BkcBCMPUKgXY8P5L6LfgdjxrthKwMSwLSViXkHGGzRb23CPnSdQt2dnZrznVM1o7jh8oWvdomsKYw5fx4H3p1MQ",
  "key18": "1k8NfPMHgwVDiNiXGL1fR1AxsBDZwDL7atL12q7GWuZU3WXTEjYYR6dXSUaquN27zNhu2D2taf7YPexAr4CUYSo",
  "key19": "3a3iZQkpw9pYDGnSBWZpnHNH2JbHT7B6xHnPeG48AMQgXRuzP32CRqUtd8xLb4r3YRSiowduLvpiei22poe4QJdw",
  "key20": "39M1DqCYiFb5iXovJeJgFVJgVSLoErb8hBMpgyUuzc4jMrLSdgAJU4iJppncpYwk6Co9svmPTBZ8Rs7N3zwVXjcg",
  "key21": "2XhJ43CSSEBq7gdCQYRWuh4nAixGoXA4ju85TDHi7dNUpqUmg6XVWTgJAdhGnFn5EHfo4Aw6VNWoJ6duwiw3KD21",
  "key22": "2AptNNcbC96xNaKTFS887SsD9vwjoN2FQCseAUbHzAyEj3t92LAy9Vfp8SScRGbKv4BBgUNFBhsi349RNva1ie6M",
  "key23": "PusQHEgQRwwzRWZfkd4G1jsi8NCvZmVNzXKmQsJhNbe9LhYSCUP7nsb81nfxH9Epxh8ffrVt9JSGqBYxQqjr7EK",
  "key24": "q1zWHtjkeRFwXkFcXg5Fuqbw8bGqxWKzQhVJGkykDp7XaTcyV8cwJXcXVwDEWKvitBCJS1ZfLYQgXMjGn7BoFQj",
  "key25": "4FAVvvDQwFzivD9gEkhRa6FpN9i4VCgKEJJEK2SN91YCyTmrCVJeiookLUjdohyaKz2sncoxDNvVN1qm1gQUs5Gf",
  "key26": "5Tut8wJpFYqDgf1cwGgCSeGmoj8D9oftZMCR48efWSkYy8pAkxWQHbTPn654uPMWrqoLaP7YUH5UnX1PdxyLK1oS",
  "key27": "3ohA1R9KJFWTz6hj7B2mWgSPSBKEJhivXBLR3ESe6CxeZkmsoW2DRhDpkrPvh9RBEWmvYhkDo5nw8CrvUaZvbrAv",
  "key28": "2CvJM3sAoqSrPevzh5mTtoxzpPzYggWmAMQKpgtAH83z7bWHdiMXJv2i9tE4f4HmdM1tobBMkSwJDyzrvHge4BKL"
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
