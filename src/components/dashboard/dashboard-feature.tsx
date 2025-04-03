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
    "43fmAx9ybHk4GRXuGSR7ZLaAe3z7V4nfjzSZtbtqDH6YikKAn4dw4GXQZMd5AoeigwZUR67JmUUECTUpDdzNnrV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbWM9B8MZiAnaUAJM7PGkt8UxamSSMxmJWDHKbLZ2RNpaUhBCHuVBodAmrDShC9NThKdMcR7CqaFgSRJ9PPmLBa",
  "key1": "3DeiTKaDuSZPKnYd9bGg8LoLkeRzBNBFh3ogesD4tUd2UJqgS7NX8XJXakt6oCUBCykVVTfPM5kNTn6Wy1pq9YfF",
  "key2": "4GLz5mm7BwbEc4NsgLV6EQqYodZjYfTBnssRXHiCGuKhVAVDLqEt5E7ogrqSoUH7byjSfRUyGhczieFwKHmfz3VT",
  "key3": "ii9iZGf5k6sDv98mRF6YbwzD4xZe8kQaQJKpgnLKs759KxVg5FcHWxRwJHWm4dNv2rriTYB3i1jW2dqc4vVrB2M",
  "key4": "57UsGkNz252EhV58mWqjBDfoi79AdcoTd8eBywE8qizKjXcnzMEeEdojwbnsRXoUjp9u4eQSFGGV9g4n7iLZALhc",
  "key5": "4dd1QR513uSsW75Qc854CJgg48HRpb96zfYp3wbRcE2LrWETqcxQyM1rh9khXa7uTvXPjVt62XJhrgo6NEx7yxVX",
  "key6": "67WEhVmEizevB3HMGenbQUodk1dtuSag8MqovnJqiYt1PTNFt2NP9RVxSR8h22rpk5AdxuqWb9hE723spwLsLhgx",
  "key7": "67aFQhJmzUgrH3JQahDCMNfazsS6Fsexd9r767F3oLmdH3rvCFvMLVA4WpWJedf7je46bpRu3Xfb1hJB4SyhSLiW",
  "key8": "4otYLajkAoHiiR5UuXSW7HwDZjPZDKoi5BPQtpjtXaSkEwCsnXtKGYGUJ5eBymnSVCzvdLVT26N7SBK5WVQF3C7f",
  "key9": "3veVwoNLnkqtneQnwPnu7fDJXbqPsiGkQQXPkJ9W38iZKGA6istExGTVf7ahpw376omJ2t4Fr35PXvMZVxnGCvnW",
  "key10": "3TxFphUwNpHB6SY3i5DAt4xksJLJoS3PpWosnfTwEh56p4X6JJuNzWmsMtXB4EJKZizY8YuhZ5pwaX1KGSsc3UPG",
  "key11": "5Lfhj9NnNVkUkAaNXo7TjLZSWEJrZish8F8GmfsvKnu9F4WvA2pXCq8QVaZc9sEvBDB6xZhb4QSwrSkvjAji5TTc",
  "key12": "yx91BPrwZLoo9vVzvfohv1JTbo1uLDiZ6QiT5f1QBSNnE4HDgHgLr7GckMkgED9zXZdZwUMkjWj6ehGNT71bucP",
  "key13": "3xpyurPdnN77fNfwR6AK7qTJdsyiz9cCDv3QRrubWfCb6GZ1Y78pqZvXNdu76y5mN67RfkNuQZeKoBkbkdC9oWnr",
  "key14": "3ZZEkj1Th5nY2ZiRXv6V27y11gTUZwGo7i5URLqVT9zd8BDX37huZg4WkjtrZggQ5cdPC8j6RfPTv1AsW7ZL147N",
  "key15": "4HUwfv8p5DyEpqXzb6Ao1xoiqKYJDYiZ5wazXNrS5frhFgoWpRS63GGTSDJ7bQehSQRt56Lhv9nLL5kf4wYdkSqz",
  "key16": "4tMs9X3ZbkXu8LZmiNQf8XRUNp3qxEmer5DNAHxvS92ppovuxREqEn8Wf3eVTyuK1kSGwKa8ENoSeCjmBwKScyPs",
  "key17": "3mYvFmbP6A3nKjPScUygBF4ktH58ovq1hmTj4B3ywjs8XbtKqc3jZrx6TqHd21LChtbYCteJAW2QdMC2nx2jc5pn",
  "key18": "3kxTRDmR4QQVEZNrKfjf5e99xb875HULV9cyMjaBtpS1qWVZTywTESpSYoy3JpoGmhRdXoAxk2Ei6zTpjoc3Qqt3",
  "key19": "5aRHbM4XnrcP15zV1Xfigb5xFdmoHpxMQZpL9oqDBRfRBaVAcXUTFn2K5pCMBib769pe3fd6so6rDZsgtix73vtC",
  "key20": "2ifSbyF3XuiHucBQwgGBY5qYmdLWZmAHZB2JqHFpSEWdGxHeZK9ZskdVWye32HywJ5NrRxR2iHRzY1S86y4wX7Yh",
  "key21": "3QnuzYaN5wRKrdSLP4djzDHux5KCRzzwyhN8uLypJcepuSzRpDbBGmemqGSw7CJUC4akT4GNbvX1TY3Gknmo1YAp",
  "key22": "4Bu6B6ajpX18GQk3hP5Lksr7VMGuXxzwkUtC5tK4AqGGhXGrvzeV7NMsZLkBKM8t2wxxPsFPXD3yUPU7nR2mNM3m",
  "key23": "ps1c8gjBdyYSCFCVrGL2Qm3aU6MFqitMpCdTuFHRHv8pEoZ2tXnjtkXFUABbEGtryj2MaoqUHJ8vEaJQNiRXahR",
  "key24": "q65SnuAUVsBnZN9Sf8RVkGwEEocSDxUHkKvR1eyWtLo2jQTFhHgprsETUcQhhZ63hoT8oSjyuTqke1M1f5BFUHU",
  "key25": "4P6fFK7vKys1Q4UcnxWnuHmouGHotxSNgfHejmEfmmFnpYFJX9RGuFkQH4c2ng5CN56VsXjX8rEV5pqdarkeoRcq",
  "key26": "64UeGy56f6UubiDfXULGBVhwB3mFZoYhaZRsxTCReuHSikCZC2mxFt15a9kCWBn5f62YSukz9wFNfDqxxjNHCbdY",
  "key27": "2KNC6MKRcg7Uv8jhb1tqzXkJSDPYAXnRTorpYsmprBCbFWDc659s9kqa9Zx4w3miwG9VFhhSeLC89r6U5HwTrsYp",
  "key28": "21aDbu4YXxzMCsPfGndh2U1p4YPZJQ9KJnTRVwUg4P7mXcHg8RKGyj1mRCr3fGB4dayRzHJqXcUijzkcACdi1WaX",
  "key29": "4kTAFm72jYghnN1rMgVV4xnwskw6PVjUdo4K4K5HzoFKGKTSy53veZ4BMKn9LVpTYXoxggCGXjmMH1YGvTdeLgSH",
  "key30": "4K1R4dk1pz6hSUNNC8tJQ75i6izboUDrPmtFnuvg4oF6G2q7pKNq7qtj6zUGz7CMjmKtxmzntW2smYdsUD29ukEL",
  "key31": "h33wR3SBFgqPRc8ANT7ziiygP83puqEWM9v2yVAh7BruW66TbraKaLYXH2CQMSwXMWmyyM2mGdGAddhRYWUgnUi",
  "key32": "5599v1sAqfTNuyXW4tPTyprxrQ7ZodQ6aCyw5HAAYJA6XhsJADhWU6y8khH8JVvaaUJLMiP1EcpjeUY6bu1bGFkh",
  "key33": "3TYpawys8TihymygAMr4i3K1KRwpiSikSypVepCriCuyoAWyxTXpjkfyAsfCs4YYYY48AG8kTX1SfEm2k1wHzUFr",
  "key34": "5k13mLMgsgyRmhv2QEdfGNJTnweULcSSzjBuTQXEnk5rX1gwc53Jr3WQGEnrhkGkijo368vqW4Rwo5Mn27CmviFo"
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
