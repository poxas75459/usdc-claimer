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
    "66GgSCArcYu3NDmVpuDGTKvoDA9J69EFoAeCqHEip8CSNvvQPHsA3EW8K8R5PcNbkVRe8NjhKVzGrSNFouv6jAgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECmrQNxNLHmtpSRwhQmGC8FE1vfFHr7sMNRB3UpExvzHmJNeNBLhtHxJYHrvLwkkMy9eNzcdzhWuYocbDWtax2i",
  "key1": "5swoBbU9pWBit1y6NdHXTMdgqXX2yVpq1ZkaYFZorxa8qWn9A2ka4BcUehN4xKJuew4YAZLdzTKGTzHkxMJXsNcj",
  "key2": "5vXuFWkcemhrK251bByUVehadj2DwXzWKNT8BZcBdxnGy7bznSTX1G6wfC1DmUqMspYUWFeJ8XC7MLsY3c7jeiAm",
  "key3": "2FCyEeGCSwGTvcPnHTaHkpSv5t8XD1eqvio4GP82H9B1dCUK4D2nPfadxFVozZ1cwyNE8zji3NTGQvzkgHkR9ehR",
  "key4": "knwzsGo1MN4dtoeCGbQCeVCRuYqbe4gujereiudEhreqeuhq3SQHuw8pWcNgPVdyYbB4QFNTkV6LT3a7TrWPHcQ",
  "key5": "2BqPgdEut3a85FjHVyhSWyNqPwjxvpiTS8wupgPxne2Li4CK8EuW2AAegwzAsq5KqJQYzXKCmgzd7PvjL3KfhiKs",
  "key6": "49iwRXGkyVNi8QAz9HgxqJRW1joVnbUhvAYh1ZRGFTcreE6iJiT7JqMpLwbiWnfyeWqskgsh4EtDjti9R9hyBkbJ",
  "key7": "aTWApjp8boLaQbLtFmg7RjPiopHToGvr3j93CBUDv2qZKgKTBz5pbKJMBvkXTfBegEN8nUuoYEJYjTUEy6ayr3K",
  "key8": "3RW1LG7hxEqHmLoJsgzYzDD88g4RxP3wCede7zmBmYe1DzLqnKqRMgESwqoAn9xXVWfzyq9ePb2PoNMg2KCDRmQU",
  "key9": "3QUvWcJsVr7ap9minPqgYWJojzvYFmMCAzWJmFycV9UMU3tE1QY4aD6d9GuDxeib8e2cnVmqZVQ58uPrWPTJSBSc",
  "key10": "4vMmcT8bVxGe9T7W1LzEVKRQE1TgbymkAy28ZX6fudhRJbH6FR2jKRd5JPz6kF4hQEXHhRNbh2G9ph696bgJgpRZ",
  "key11": "28MbfGtfP6npjbbsztafBJeetc8h419kqfsyLKemR7Gcq27nRPpEgLpX1Mbeuj4chhR9dTfXPSv7ga29fveoVuQs",
  "key12": "AYC55nH6ZoqpBYFgJDKzi3ckAMg4eCAERBLL3f2oc1exrGpvZfcskEp6Fm2JTsQvCcBNCQfrA2zjAvc8zrLjQnb",
  "key13": "22TquGLT4eebBHYZ5EahQndL947yShBfgScUAGN5iU69DV3SV2XCFJakgimsbpW93EYPLJjevfLQL5Ujg6H2kxbq",
  "key14": "44ciTbSGPLK2HNX4AwPi97t92uTB1QvxTouVtnKat1eGcEUWHpkoLLcYCncSoQK7YHtXbZaYEAXTW7odKXBrhgnZ",
  "key15": "2WN27etr5dRcVwXBT7DKYKnM8N1zGdFNL1phrZVtPp59h1ryPUGRpAo4qZdAE6TEs83KSSuy7rfuamis7n2CsT4e",
  "key16": "AhXQEsY1kn15G6WBHHLX9CfeC3sffHmxmaRxPP1RYoazD5UnS5jMEhbXr9q9y73JUpGmv5QT8CYAKKsFwAR3dsq",
  "key17": "3F1L4T95Arm1zD7XHhamMrvxZfNu5j6JsEVe42gFTqm6A43hrXGFQE1N73hvdYLXhQx5pL8kmvN9kohZ5H1Ae1Pp",
  "key18": "3jHYtSuA18hwxM7aApua1zAoNAde9tTJmxAX18pbTPLXRz28zayT8QSL2WjjuQCuYViqt63Q64u6vmpsHjX47pm1",
  "key19": "UsYE2htvJVyw3fBbX7VDJVQ8wQa6cgt6gcGQV8RphtGZZxYAueYTvcgaSdYNLLJcWWgXhK7Pmtj9fcpf6LecaRG",
  "key20": "3JDos229BNZhf1UZsZKdvS8r37LnE44JcWr1KWts1bFPvK4W291Q2H7u575Eftbujvbif2p6MxumPT7jNmo8QozU",
  "key21": "3cC737KHketnyCUqd3a4LhNSF7Q1V4u5cqUhQgfQosgbRaqAV21yn6239RHyhAyA3YfwvzpGHYfYyJkfBDB6ok8o",
  "key22": "2ZrL1WkELNtBJid91AQzEUCpmd5JTZpBRrniMCaxW9jHbyENGANdoiM6aP3P6rgFXvwt5zKBpZK4hfXpLQ5YugZQ",
  "key23": "PzJfasDsCSEcz7qmibh2HMvre3y8kmkC5BTNb8qmewyBB5xmB1wxJHUPYKzsL5iCFrLmoBF2vjrng2XesThtnx5",
  "key24": "2D6CVgtJ8h65Y6cBV5yEdetGoEL9SB47ctQSczAjFa6NA2aeKfFu3HrDeFfTYtf4s9YgYvgnN8Lh2TRKhYx8Va7Z",
  "key25": "4otBiok5bhmn5FzZvRmXniLtpEyWZxFLuYh9KkXfJTwqYmVefTQDADuAUND69QKi6HTBz9g5n5xKePL8ytaBkZo3",
  "key26": "2N1tD1EGGAVqEADtWbUA7L72gaAiLtNghqXgiLR6MTz3gk35h3bsQhQ6GRPc9Ht4FoyUDkiBoLHBN2TN3nRRrkYa",
  "key27": "4Y7hgWVV86yjXoaruxRjuGr5Pbw1tvRNyejxYZRarzC6r9vfmnXxwsVmX5BPKAeN6yheEC3mRAqCdtA3ozPXfzU6",
  "key28": "5H1JRoyeF4Jc23N411dV8nKmccVrcC5bK8Ws5EWPaF5p4TMM5NkSuBa9vzaYoQ36YLA8kPEBGUaMaZYokXugS4qC"
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
