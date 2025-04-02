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
    "3q48PTY7cXrzh6VjXsKwoaRcq9VEhaMy95XmmY8Y6mXipgeX1Xh2DLAbCadMpRceN65vqRpjdYW5jXEuh75hoMSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTFFy3MZ1X1VscY8xKj2VZe3M7f2NUr9AbHNTMX1gcmFgzsWWPEP29au9fEyMNJscFWgWBD6tbkWH4N7TWwmKhn",
  "key1": "55hk9pdZH43ok8mKGU9PtN97Bm8L7n7TkXeUALpPxMQLBWKxuRDC39h46C5JWXPNnu4fDm2BUtX8DUQb2QqW2J2c",
  "key2": "39dXULfAhne5kdQBXy81u1SimtVzQhZdJ2Mu5rXUk2agktH9kiF3rPav2LK56XZTTTseTVTssWTfgcHApQr2EhrF",
  "key3": "QBHVt6GzqvjCkL19CbBpyHN2Lh4LXzzquZwHQdtD3cCFHppgVYsz6bQjz5fwnJgbyAGBQhFkPzfiZWrrVA4Nrqt",
  "key4": "2aAAdT8VdesvSXyrqkbKC7ELjLaRKaK7QEDouacRASAK8kR9iL88AenHSfrDe5eEdiVfqqsvMvFrgGQxvg5tkqbQ",
  "key5": "24PA1tNsnfpa8Cz6YxwkDzi2WBrkibskV2ivLngAeWoDNaSe69uLunNuEvGFd6K7USgpyR7WFGB6WjMzgVxzQoA8",
  "key6": "4rEzgUskuYVzD391PHRqTdV82sxnJeqdLyp3fr7BrAvjoLe1GArPDJTF8cbXcQq9uT6qfkograyZvayJhh567D6j",
  "key7": "hnNEMXjgMdCB4Fowt77kFZ8XrH1tfEAFpAFSDhaLc5LksvqsfrUu7FzUyVtziM4AZZ9e4LXzgtMeiCMGk6Sh2AN",
  "key8": "3PkdYvMSzvxYZfmC8sx8TPoTu7MaJuBXXy7kooNGdYrZXxxc3wVugFm9zRBPMmipD5TCrjUJxURkGjQAT8SkEgSd",
  "key9": "336F4MwjLKyPYgQ7BAZgadq1jkuMQGSMHEEmejtEenTSuF1Mo7CDirRtXaGBo34rXqLAywNDXPPqUruGJAcuCYgs",
  "key10": "5BkxSqjUUiDxZHqhVUwHBmaVXrckHvcof4fA9VUSN7FmgJKskwxFr5tH99X5pqQ58u7v8n1briWPgUFnNTryDHjT",
  "key11": "526Yf2UGX6SJJAdbLMVrYHix2fDRRDNHdknv5LdyD9Eu89NAKCMWnnLJACE9cWUQZxVQyQt2JvrBRztPb4UJNTt7",
  "key12": "5BBnNoBJ4iGfFGXgUVLNg1hC88RJi13pZjg6DubDZgsQFBBJVL4FedwRtWovN39vekFKRdWSSbZAwrJRGnKGu7sm",
  "key13": "2net9rgcj6ziaYeUcw5r7JZJnz8cwzWevYJixLKwDzWzkFd8EnmLTQ4tuesGopbqWKi4s6QKW9d61LvFZhBD8pWM",
  "key14": "3GV67SfJNZyDWjsNU8U5ND6CwCiNaCYBLZofM6FBu5ELFqPdvKLc4NsWGm2gPJ9oCSBifDgxcch1DTA2o6qDJT4E",
  "key15": "3fdbcTVNjvGdrLu4NvhCR6tQChEXRkjzfEVSQ3QU7Z2jKoqsjujEnEUaeWwqFxij9oT7fXXPpY3DyuiiAyqdjBUF",
  "key16": "2ErPUsYQikeiopLjjqDwy733kEQk3xxVpw1oJgsSHKcTX7bRaaGShkHMMoviwYqyAuYuvSZ9wD7X58GUF5tAytiP",
  "key17": "2c8vbVkd2C2Kb4xRuvb1kGiJtqDo1AnFmUib8RCBJwDmrzhjWz4Z2XsPRURTzHw4LDh71BugPXPJF8BKZWjdU8VW",
  "key18": "3QGJZr2i8A4iqTKXsQKN5UvWsufKvfQz9iw8PaMXH4Cif7WBKr33Eue3cckS9Q6LN4oFwrqvhxSXvK79FCz5Debg",
  "key19": "4m72vzoYTDsGZvE4We3svSB3wycu5DmXgt7toeYHrsaTELGCMMenyjZ8Ky5LrsAD937BvGhjuFmHGgaS1v7kcW6A",
  "key20": "258ra7Gxuowgx9tDzSmDuu7CrHH68sRDggbsDm2xzxVrHNjbmgFysx2BwKDS6eHh7tNXtFS7w1e9xWtHQiQw2uDR",
  "key21": "57DQYXgsGyZS6QTGqSWge5hLfbwa79U9bUoytJMGBP218VNAT8o3wN4ah8Rp8XJWPk8mv2vfgBucUs2UbXcrBCEx",
  "key22": "NoMdoxVTy4jW9BqbhNgbYDQHFapLAH4zEkipXR2uHZpiNKLJCfh3CHQTsBMrVfEyZHZ14yUXqoBRpFN1HFoT9g1",
  "key23": "3CPsooe5pHgaLFAa9GmqBEMRNPu1Q5SxQcpi5fYLz9ZJ1kCHRpzx5rWupxX8agjGd2SY3zmuqKLY2FuxHA1eVZcW",
  "key24": "5LsC5Udp7xZMCwTjXzh7mq6WQEPG23JRoqcuAgXMqnbXMYP2RUHJCJaqt7zBpBx53yDNKEugiKTjCPqZ5NZ1rEte",
  "key25": "5HcUBwj21jhjDsyFoGoViorxxVHgC6pvqjVji4qZ9PbS2JMbU6F46jEXFLvrFJqMyJaWBZ94et6i7HSeeHhvZJwm",
  "key26": "3U8XU8JSjzvQpBHPkdvJYsvyvrGuzvLhqQSyeby9LUT2xY6NKys27aXukaTBMF4pREkziuiftT9iHtuXTz11wxgu"
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
