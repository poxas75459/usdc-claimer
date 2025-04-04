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
    "5j8R3oPj5TUai77xCdMxWbB38oBVK6aCTMesGdkZX7iJjeKedsXLVnDR77Luy7fvexern4rncXY1itp9jLHoUVMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQ7yqNm7Zgk9j8pgbWoajE8xgDnTovfYEucWtcECQoGdYWX8w4v4kTudDw5Ueo8aSPCjFBa1Ste9iEkB5Mbbbxc",
  "key1": "5VQUjgDZmYYf5VibiwnxhR5sGfHYP1fq8FrWDFjdcywd2SwxjGYsHRxxc4DkssAvzAcMBGVMmQSpxZD5Ue1TnpPK",
  "key2": "2Q2rxEiLz1SjQV6dXPWgunaL8vHBd9LhqSXhzfNHRnwtMWcgE83W6UthhVjgbsy37qHAMaztS9pQBQko6Vob2Faa",
  "key3": "5VuFCm3XvSs9ZvjvUMC8HbH8pE5gBN9BJX77ZhzKo3mUQXrc4tUj7ZHy3cgW7KQ78NiEv9AuurKBXKF1VntK9HRY",
  "key4": "mEUdmA1VGouF9qSiufMuDvwhJwNFm34zEdiXmkCJ1HWm1NHdJM3kWDuGXQkEyVeoZzHBu64pP27q28EL9kHYh4e",
  "key5": "4nL9U8QzuTX4oVSwbjy4iZV11bDZFPAmtepsyLm85Cw8YpmgxSFHQpuKzYA3uB6AMKTBaUBBT6MyZDXTdQxUHdTq",
  "key6": "5c8uuvejqX6xiZGxACBGSNmSZZupMzPqnpxna1o4fVgdSXyMLT3uxfFGTsGdbJBy7r2wdpvpMhy2xYK4KWbAgs65",
  "key7": "LKqtuRrCs4ge5mG7kWfyGPTec9LgnW8gsGN6GK7ABmTtRhFeFeXpXLgM4vY7caTAp6t7zuMAPCdX6mktVgnXtWL",
  "key8": "5amDVZoEGaAnMW4THrjWwECdZuowp3zyuQMLFeCNjEAUorP7fwQtanhrbwC13uxxQgMBWYs2U8aXuG5r27KK2hnB",
  "key9": "3fYiATYwwoMX1DggerLLk1LY4yRsEKyKwYaoz3MP6dneoMrz6dnwKCu3TftohiXH6EfjFJi4xGjZmBngE2HCphN8",
  "key10": "2HEoZXb2YgQhL6mKMLQyXjkwJF6ryPTi9vQn4cocRGrn9TnbYkzp7Va83yKcepjACLAvXZobuu2HzMRbrVuhqMNu",
  "key11": "3ZU5VuG1mMiFUoSuGSxE95tr6bvrU3zkeCgviMiHE9bisVeJEEPWhQwaHqV5dHUUcodA8LPGTUPztnRZvnFaNo8L",
  "key12": "5uDsoBNXEDovvM4EX9ddfoN9ZfyDGoTWJiXLUZbJrZbQXouzE53MapR2kmLJrTTYFoYpu26VRV8APC4oxKkaehX7",
  "key13": "39Uq8HtjBHM9LzvuGhGgrgFrPQHSKX99fH3pDtAMPxYJ9h4gvEmik4dm5XiH4UDjDj5fCsWJHxtqQ2UWz2xeST2G",
  "key14": "41nrpmeeZNUYZXKPDzYYVrSUefkJskXC11hLb9ZBgNnfPuDzeLhEjvrCRki1do6EBZxdW8VJQnQjmzUg8HLCb1H8",
  "key15": "2ktqTMzw5HwoUmhX98bnwrNdjp839trK1UujsoyrxrytXE8KGqrwLJ18wr4s159vVJ6ktPfFSyiJLrJKXsJeptKv",
  "key16": "srCX7Wb5dpYeMKhnzVLVZ1dmdyVGUmHHCPtNTtK3TjPmZ8yXQ27wZuarfSjmgMy5ojUi8njHXLoCChto5aS17qV",
  "key17": "Ew99x8Mf4cBHKrAJAEY1TSjvSPRwNU68e3DMXCqep8cPsaHXksqhxqTgbgsaEGeQQ3Nx47r1icCzPnyq2uP6uCJ",
  "key18": "jTBnuRmbnQ6GJPbKap6Hv6HWiEamarRd1gWAbcz7Ym3AMif1Z2XDEmdnYFqQmx6nLo8ALoaDgFdKqiqr7LF7Xma",
  "key19": "2fsDPcYc7ZLz4ZirJzipAaQCMfdvwahm72FTMLVh8nGTD39RM3di7rGYxiNtr2W8CPqw9GNn9DuwwZicF8PyqwpL",
  "key20": "PYJYWmh8RpbMgwJTbcjgZa3epknWXMKGmkjoTKHb7xg7RjjYm3WfAcM2ch68E2m7WRAMXKwhC6GuQpQUTzC69Hp",
  "key21": "4pjndHyRwBcweKKb5xqJrzkYCncGuBwWNJdxNPNiE9xwGb5hTA2QfCEoxD78QJnXF7xtR8ZE8ppzSU4xMUj59GzD",
  "key22": "4sPDgD3oRCMaXVKKVxRxxa6CnwjKWZysFVqREM4Yh2yNxsTAeihNcq9Sx6yzc8Z3uChRioDtVjd4QzEeqYiSf43w",
  "key23": "51LMbMfchc9LxJX7e5cKoirHsATfScu1thLjVXcaRMUTKtgpZfsKzFZWiuitAyu2tBtaWVHrrNqZGZm5vzJUQjCy",
  "key24": "47kzP38vYdYEXcUyZTuLzthVgp9LjyZLMPmBwaAcbEQ7Dfhjv4iRTPncDuFERvAn2ZjfAkrWooUQjg4QMenNpnbS"
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
