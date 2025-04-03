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
    "4Httht27fFVcE7dFtEuwPt5b8p4bbBWbswrqU23QEaGefQFv9J6RkFcqEN1AXCb8eEfAaB3k5ijQL1YnKUaFJtEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bhM7mHXNu4BKP5Vty48HHgF2i1SvYVpXK4peyZiMH4Xu1gmhZXGjds5dPrqd7UTDFL7rfJyEJfsKR7KEh3mQftf",
  "key1": "3QyDdrRzy8Ma3B51BjP1QkVFbWuCyKb68JmLAY2mQwB27trjFXFv6eR571cshXVuTRkx7Hyp4YkcckYSFGw57VRL",
  "key2": "3opQGvpCMwqXZjfb6bNth3WhEfrV1NiNvENb9sreLuzFULhKDLrPpDv9U3SvezSqexd1N2ZpuXT9BsamsV9Hy9F8",
  "key3": "2u6BPvU3AD79jjGjYptVi9GhLHKfsxggsWEAaxcSrLr4M15TyKmXBKxvQJiiQoAwTcj7BaAPD9PgQJwzDEUNi17G",
  "key4": "3EcQJM3XxAT6JthncFUc3gK1SPtRjKgzHdjxVpp3yYgFJsrBf9iZtaLgcE87Txx3h3VDkVLmJcV9v6nLMTTuGpvy",
  "key5": "64hCMPvuFp2q9X9iKeA8BnVPTPPzcfCw2GAvnLAdyKDTdxpDDd9QkMsmmMjZd9vbwubvfZCTdhgXVc4LnQmhG4fn",
  "key6": "4PPiw98cRJbWLsQynHQQhvtGpoFHqJtsnbKCgsCMXZULV6atCxctA7EZxFyrSG2Pzr1USh69uJv1AR1ikETffYhG",
  "key7": "4TDo731x8Ej8ushb48JHNzaCvUJiN6zZyvDHJPY2hDJhKWK3H7RCJLTDjfGdu3u3kXGwuHVZN4GJLBVUUyC8wwMb",
  "key8": "Jp4XnRTGfgAco1DntLFjPtmbqFkN7j6qPoafmVH5v9WSxybmy75jPcD9jn5ZMJRWcCfSHzuAu7qnqFmSXB7SEBK",
  "key9": "3F3SZ17HqwXLvQs46LYx2kk6JDbMRwZ9pmjyB6h1R19jAS75n3PQHJVqRdXGy5HLpVNTjUhyqePJSzpLn4JN2tuA",
  "key10": "5qhZqLzj7Z9hmxFh6HuY3PkMMF3paHEPfz14j3vCRZGYZ1smbJQo5rPA6Psa4ZtCtS4ZknGpirMCTQsSqprcsQ9G",
  "key11": "UAzxoYPN55YRXrSeCewLZJreJCQfVdCdFaeK4ncxkupXrtdyyzs2b9Ta7xE5yjRf5nTm6aY9EwbohDtweAfk1k9",
  "key12": "4CpsKcWXPCLfKYbevntCx1pKBtsPmbYsQSixZnkpysPyDqwovQMGsxaNuhMfKQAwvbT18sLAuthrwoRcvmZNJidf",
  "key13": "2G25wryjhzCQYutpPAASVdSGwA81FEXpkSh36ckWB4WvVzhiErJSYnBYuUhowa812Y4VsknTkX4BBHiG298JQkp",
  "key14": "3zeGB9R9xaKDsA4aThi5HZfuvd78KNzvwcbXWxodCMTgaztJy8DVJZTg5P85qtiXss7wPB8A6pHVyhprhZHJZGaj",
  "key15": "uU6NBLhX6gbLrJb8zntJ8BstLPa8BzJWPXeRHKyu84mywDhG1Ng2L8aLxUqbK4sNiY5vJkpUS7SZcK18nsNsfiP",
  "key16": "36bVmK6FUPZ63ZGAb3bJ3mkbwGNATrQ2HkBjhe6SafTjd6x1f9k9wGqNbb2ZWvdkfSHWHUXaFdH4FFhRkFsf3tfi",
  "key17": "Nx9CM9qxvmp5Wf8aFAz1aNXgX9tHoP2vJuA9gTgL92fngVJyW8Wv7YkKWbmbuWpJ7K96uPoPsq3Kq8gX5q1DtYW",
  "key18": "4c2aKGN7GkEGE3Zbjfdb8AAJpHgjXn1PJqyMjPNwvC7zN8iWT8UfW1mcMm7DE1MJmTdCguerTVKhvkggveEsigEc",
  "key19": "5nsCvXz4wGT5mq3K9jRVwQoW255VZTUygfisXqvS3HBkmrQ4o3Z3k5dhUW13RtU9WZEjff5rJvxALGbgPpS98ewB",
  "key20": "5g43JkmikNLLbKWs9UVNA3sRAMwuXyHq9ZWRgkGpqF5KqVeSnh344Th3zEWMfr19NFUutVZFqkAvNWSrLuV1S9yX",
  "key21": "5P5MhVL6JThyTbqm3qmHk6yG5gYD85xcVouYBbUspguGwSXEgmXXH7Yv514oyRckYUzcjQYJWKcM9BGqP5Cious6",
  "key22": "2mYRq2t8dvNcKHzgpZTCWLhVEWamEFjdJjSjJG98jLUCHizuoJkmdEnErxQu9DrvHr7rbo4NQNf42EdANJ1Xw2VZ",
  "key23": "3WxJud67ER2ud92m4qnC2JkNThvSoAT13E7SctU7qLByVk5Jvpg4NK4ksiNCDCupgVea9zeBAx34kRp3nn1acgFN",
  "key24": "zSHRpJZpNTz4CRL3C7vBFMJWfPL3XABYtQNwbuXWeR4zwBXjCJVjqnG4jPhCyZ5TFUd7JrLtjPumk88QnXo7s4r",
  "key25": "3eMZCZtERhbiGjxaaDyF3gi6wfyB1osEeU9eScpaQfjaDjK9QgFswgvgCL3RkyaB6jLtihxmvNPDhpFAkjo7c5GM",
  "key26": "4ZCiPYtuqKuWzQfTy8vDCJLhbLoSTUTg8RPmsSye7wXtRaWJNGZHncTpAZoCdDtpxf2v1t7speB7EKZ31Zv9o66j"
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
