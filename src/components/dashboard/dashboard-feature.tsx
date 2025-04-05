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
    "5G8aBFFGmrd7AwjyUk3S1BERfpTnAUAo98Yd1yCsbdesdvYxZoKSJL2Et5tGN3RJNr1SEb2RdE5pLP6essfJvfwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d1gcJAv2StUgWVkCa6SjwVvEFjoX1PxyvDouM3d9i2krJ6MHTYBTRKxFf3MLEpCQQCPRvvqbjtJMGRs7tt3gcXG",
  "key1": "iE3KZey9mxVbc33UJgcN8GB1Ah7VAzJJ9gafnrzLVMWjZzkXFg3vqkxgV1Z4kj1PZ8fEZWkwe14AAb2y6SjESwc",
  "key2": "36rPqvX2ScuhVK73Xb7ShT9eoXZqT69tvNtJfm1m3Sc1rjr6T4ML6HDtfKX7YizR6HguDh9TpmUxAXtJACEK8HMi",
  "key3": "5XVCw5MUpirzhwj6fcQXCSpWvfAiYy6VBNx7mieCh3ha5uEGKy7stJgKQ5YbJgiMBYviQ85TisgZ134x5Z5TL5XT",
  "key4": "3zQwpuWWjuzpabht384SY7cumnAbsg8X5LJ8KLvEcqwWH693bT36AhzdWeRRtaJsLU3DmcHdET6p3LgnPUWbKELX",
  "key5": "2bUsgCZ3imrzsnS8RBHb7qii2sp3MrgfBpVKbzd1BRPawTbxaeXSJsPLrcWwhDPCQ3FDJC4pZguUu3DmJFMqGUz5",
  "key6": "2mr2gH7b6oz2yJ8uzfz7Xm8jQiaDq8JEXGy531zF5rrQiM257R6kow7YfRihCffcVawodetSqioqGfjWLafK8b9M",
  "key7": "5prYxBjawNa3XBowuBLFQiTejfx36aHS3FHZGHcKnYt9XdqCqxAAMDcFEasQ7nqJotmzV9PVZfg9nr3kJEhX9DWJ",
  "key8": "5xh7KauenK97MxeCzgVi8Gb2w973gHAec9SNb1QnYh2ByuhaqiD8mbP3PxZd4A13MBTe7ssHyEsAPmiQCEDtS8KQ",
  "key9": "42t6yofbFFhSjw3zdMu9z3bSqz966pLZr674aYUCWzwHqbJsrAifkiCvKGqLeJ5DMrZ3uTvZCNnr9x3FhMzgCkjA",
  "key10": "8qsd41LLoJTyZ452xMCWt9R6Y3PDot5fpy9txqQJ3stoMPX2inNJtq6cfdLgSM3LdiT5acHeXg4Wj4oj6YMvJaB",
  "key11": "3Yr1LXa9KRAkKD26PHz5t5ub9tCZBpQ6THNfx3Rr64xhXuuk7iUJiDxg7XTV58iqFwXKE9kmR3MYYfXSaqHoFxCm",
  "key12": "41m5J9MjSLiA4gYkCXgdPvUny8T36SAMkqv1rUJT7Kdg7BB699ixHKAubDyvEcn64R6DxiESYidu8tqHQbCqEU5S",
  "key13": "3oZxksRca3fwx6qssgJYhAxcXcw42Nrv3KedFMnYEsNHWx6Hc5KMKTNpAU9cKrB8CqDnsLosc4vNHpiG4kCtJZkJ",
  "key14": "32wGAme3TofWJWPiAAZy75e7xKCRuyHuqUXuVBGKMFYTzt7SyYDcvgFKLZ55CWjQK2MmrL28z81ZmXNXQkvHt1Xj",
  "key15": "5RfB5Dw2doSGd67EUjNrbePKmkBNKHhW2tieAiF7eZ48dJK7wWdYc3YasbAwhDLP4npizecrE2W9wkirP8KhH3sz",
  "key16": "4RwWF9jFKyEkAXAt72nguejd4pn9WHZxVGKdddqSUbZ4ueZ8Bd2uNPmzwUZ99q8McjnReUM47fRYDEypEJnm6LCj",
  "key17": "61wan4fcjGrkjtJvxwVpz8mS46EeGsKj2JFymLzmqXJ8u8LTc4CLnbKdSc6qkacfJg5o8p1zxpMCA22NLKx2Cof6",
  "key18": "5HG3x4csBEF3JbNp8Yr72umtP1LHn6jxf4GAuMfRv5pqRGHmiiNPcPtpJK8tXrUSC7UcqzvNakXXz91GwcGPaMg3",
  "key19": "24gDyGRUnuPAuo7ZKuYbpy7sqAbDFmKZEVgxYoa1iTdMwhEvNTBmcX4kCzZ9hkVKp6qGAtNeZS2pNgBt4BRwNwiJ",
  "key20": "45dSbebTYpuDM9qDTpMgJ6A85NhjMCfm1CnkL8tSTEpm53pVsADWTGVuirP3riHP1ep9q4zo8MzSgAVi1RAxUGaz",
  "key21": "5maAgNvM6wxJJHRVZ8pxrUobJpAReTdR5XDah36crRhBfvxHTED1ta8jt6U1nxghpf2D4jKjDxrXCUzosMqwbFZm",
  "key22": "34n2K6NXVZGRXda5Y7dNGyU3qEQSr5tpMvkRziAyRqSV8Km2gFzkkxGWAFuSNu3LTfjizL8UkLa6QeAF8DC8ZLoS",
  "key23": "m7cQexKSwpB4fzmKFELrsENhy3UUfsujy2cejJTBz7WqoN1YbQXE5YHsr4dE6VCuPCsUJkrQpJkyLZg1HNHE943",
  "key24": "udbWQyqZGHxXvSXB6bhVZQotfWQ5BH9jzmcYMLoxgDi429v9RikESvydNqD4qSzzcpHtBV6oXvwXu7cQzyfMJzd",
  "key25": "EgDe3o5dvtn6cSNboQBvgxRV9zhj4hCasmqho2UKnjvN34zGZCYUgWeKzYRf7YEBBngwbzJaF45yjUW95Sefaxm",
  "key26": "4hdMsxZu7dvj4oChuHoRfurYyWdNb1hhkfkh41XFEeinwU4uGBZScDcfPyc5nh35Epz1KnfLCG3hEUDkAp28QYHH",
  "key27": "56HTyXDyBYQo2a8j1ACP4253AYkX1pScTJ4E1LHn1gDaSirMgmKzLvHEn9fXVGTT9TV7qJJQRUz9JpLSRHPpdrHS",
  "key28": "3WDRCGt1xVTxMPN8UM4i7YvEQRMx81ACsU7VrpNRhCk8YCACsaGeVs8aZ5Ljj8p2UgPdSwSrx81F2BxcNkoJmnzx",
  "key29": "2qsbtDJDYAvDSPyWE9g3aEDkc2ifjwjDpNz3k3NBVgnr32P7r5DCHMUQ5eWjbhkXvSo5NByBYZYLdL2AR9QP5joV",
  "key30": "EUtdB5f4VBF6DpNw4JgvCfQbLKVMQKL1MxTf4E6g8znbZE5BCgtwmZAe5GoPoLxPvzxBKYZDrE1GQFFn1BPXa74",
  "key31": "2gqbi48QUirtFHyWYacDNBsr564TEv2SiPr7MbzmUrGZQE6grJ6B3mTMCbMQMgzxtMNcM7yAEuqcYbXVYCPkKP4s",
  "key32": "2JDiEuUTuUssXo5SudpF3q1HNCdWG5oYRyBTY1nvx9MZSubBRvQTDtjs3B9L9c8HRohfZ7nStoaE7JzhkhrhQ7Er"
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
