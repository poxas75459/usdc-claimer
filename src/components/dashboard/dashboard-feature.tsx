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
    "4TD3dkpT1KUWYoLQPUjVT34ei98NH4mmjqyt4NeaKXNdZDEUiRHaAFiwWVJCDHVYv9Lr5YoBS4V6AqDiFjxypSvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KorDQHJ79yZtD4MN5ne4gFCPEvjyjQrJdf6WxN3PMPDsgpubvSZqmJnzGnT8VhqwhjsHPwj3tB4J4W8Gg8fakw2",
  "key1": "56MT2EPmHB4HLrbAAWevUbDurXaUJVQBbBnE3r4E5Sa3zp6c8NiWQ8yxxiSkk57nDq9dRJCaj8V78oqBQLJ8TdRC",
  "key2": "34RssvmQRgW3Wv1jwKPooQ5ggAUvY2Nw9vJJjADF9X7nYcz1F8pvyzo8nAZ4x6T2vtMgt5nrZKhtsddgGJyy9k16",
  "key3": "3ucZecAzcjK9ZcvPFhJr5hL8kNwpUFkGA3Mvae2Xu5xmjjaA6LFjoyqiHR8SEzWj2o7tMZfJ7jeZh3dQgfU2m72H",
  "key4": "3LAna1V7HZ4RmJ8aVWHrbH3hGLuYehbK8mqfJKUQimqpLQ4m4df9PCUf3wPis1TrwT1tcgY29YGcpZyMG9rbRYaC",
  "key5": "2ypqLp89GVcApavWa3sRwmYUXW8y2yMaG3kv4nRq6HyWKtGsai6RH3ThddUmwjk1vzsiYRuDgMwEd3iTLEKMKYXu",
  "key6": "55dJdHmC5hFKLWVd5irRPYw6Vg3NwWM7LWyEEUGzk75UEoFRkEP6Mn87WcM1j4zfU1AhGjKwN9JPaxDL4Prc6RrS",
  "key7": "tKauEFfLBZGVApUdf3mfk2d88RhTHThgzhhKF46kxEZeJpenJdbncYRhSE51ZE9cR6Z6ZZmTc6XSACqnjPszupT",
  "key8": "43HJT9QQg41VGVkYYU9pdGa5hiVPHUEaW21Zz1eZjpSfi2MzDFSpdkPzyUR8hE4xNWdmjNCRdXQaKn33oJszUJPV",
  "key9": "MEhRkgRnCbtHVX6H5Mnt2AeE9Nt45w3nDCQ4Wu8DtvmNrphcSPjUXVSZsDZCCSoo9MWJB6WCDRbZfXDKqxJ2L9M",
  "key10": "5GA3gDaeMw4p2ooqtkDgTbzk37q1hQLUyj78RrCNLCRnRmFnucycjfnKgA6Su419K1FPFQ74sBmeYpzx9cjjyPRQ",
  "key11": "4DuEheQ3c4Y6gwphascAnkaC2BMox2WMTBKfV8LubxcWUfwEitzjGfaRiU57aKEfNNKtWWENLgjz16BEwRfEL7AV",
  "key12": "41Q5KRKf3deCc7QKhSj2sBuTpXptLTDiephwQeiDbgaFEL93CVFbhWvaVkpTvsV6DeaX2ygNZzt3U3Sg2ifKZmJF",
  "key13": "2sdESP8az43uCgrzTZktXmVz1oiGFjKqvAqaX3QZVWcQrPftuEiAE4xWDvbmnjnDh9myeKa4eEL77rPSGMCh8oZC",
  "key14": "xF7G59KRNyUFFFMnYQsPp3tS2B2cgngoz8JjXr9ioMyZkVNmzd85kQUgg34Qr4LpJJ6SwrSqNX2KTShoszD8iGw",
  "key15": "2ai4oCBdujSjFKXw4cn5mT9QHufeAiV919DBd8FjmrUCET5gxakCvfazxsUGZpH529TkJADUQxvYwV2QHxj2axCv",
  "key16": "3vMg7QvVz8YKyXLguAzUrshnmQ4TnuwZjV7wAeFkhdfyLtDQxQ8qafHgZduPe5oxwBPodmxiVw3kLxr5VfJZwGEV",
  "key17": "4By3kk9deSzZR7K7k1zCeMgVkfRXV7arPx5pUscMpcKWncFAdqdWDCFPecSz66JGu1ZjcxKzSESCWyUrThZW9S7n",
  "key18": "LpBtEbhhR6Xkt6bpYcieVGfSKtyeU19WJGjqVVZoy5LjnKPt2u2EsrcnGdC25F13aKDbkxFxFyKBYoHjUX4PHAh",
  "key19": "26gqvhghC7QN4LHUNX4ZipBmokNasV4XZKaxqKq8R3Da4SXmMaD6c4DQw9b7YY4xrtuahd1dseoq7bEgunyq12eM",
  "key20": "3m1iBdyYVKDeZMS2bvkxt5KYsNgnSLFYwBMSoyvmN45PmHEhQK6WJKHU9NWnDKyKzDD7kVLsEiPkq6x3XqGsdr1B",
  "key21": "2kaDHGbjnFa9LyAE9nuJeo7YSEWBEGiFUX8gk43ex57hFZaQ85rbuFSS8n1gSqanCYsFGFEHX1Mk8bzS1JXZjmc9",
  "key22": "3QrEa8MS5Yn6MeFbip3XQRLu7Bnk6Mg6U6coCzdMMDs35kM8MwctvFGjxCMMSVp6nvZ2ryLJtfPpuQLpMLijKib6",
  "key23": "2BbF8ym3ToWrFafTp8fjeRafh2GmSjo9em9BJLpS8C1iWyvxAAvCQUJgWvsEhjSDNepPC9edkQsrKRjq4QY7ExRc",
  "key24": "66J5MPhJLemnftBDVeXaXjnrxNqpadKbNpurCbjkskmUhmkpWbR8NLXKVgpNhhSkgi3dSomNwRuncT38SZsdW2sM",
  "key25": "5PmxLamLaKXKreTnqgRNPHmVzAsgsDKiqvCqrTEcE5V2e86ZsBeP42acck71RG1GXCQKKxuTQMJb5SJHkMuGPwmC",
  "key26": "3RW6F4tDMdycWxDVar376MpqnuDGTwQAQKLedkEkw9yuYJpGQffHCcUvYwWZfHKmsnoWWPy2cfyKSiJcC2vEZyZ5",
  "key27": "4s9nP2pBBkfgtBz2AbRAvSR25wbJQmrhBFkUL7Xd9kqPVh87kC3hYpUgprAD1Ci1bp59tqDZTGJGHL1Wnc7C4887",
  "key28": "3DbmMktFg6f3oVxHuE2MqWSMP11eEKhQnitJoCAQYH4mm9RqDDiS9SfL55mZjVa3ewiHgqy7n3FvjSWZfBQeSCAL",
  "key29": "2G1cMMThmru3oadBXSZB4K7rmps6xQFYS1WKTkcx8Aowxm42CxrAiciXLN2iZA4L89vuDmvbYWoFkrzsGzep1ESr",
  "key30": "5TS789uoisAGLHyKwcFK47F5aAS3wT921r1d9iTX7uo4XMF4revTXiVNVuQ9tAmyfq6HXXFfqyAdhcrNXVK6Tr4x",
  "key31": "3JfowtB8YudAAyCCY3mNWnU58G64iGa2DLdwxxfZNpKrV2Q8y56bSDddzSLWhtPmxL1EjMaiX1uvZn54cgb1KBZi",
  "key32": "2rhwEvb618s3rBZEeYtHFRm8zvAwb6fjqxAksQFpZMKo8xetnMY5qqymHP3e8Cx4SVe5Nh8R9T29HvLYakpa7qRb",
  "key33": "44Y2KXcgrpqNQYKqPrB9J7hTkkLpqAFUPv83d7h1scjFVgkjJ8KkGrUr1GwGdPtE83ySxcyow9kzUNAruEVMGbRz"
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
