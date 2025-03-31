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
    "2A8w1hLuLsVTt3eJvWknJy6eHCyVHbWfkSYkvnyZnYZdF1FSYerw7t1rCK7LXy8HWEo4pq2N1NKKK8UhUn1icdoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TXFfTrB6Auzbkp1m7Hr926BoaYDSoA5axs7c8USbwrL5jUcjXPWTRRyPwDQGmEQJaycxNJTnmsgeUuZZihoMfF9",
  "key1": "61Q8oBTMzP98djY46gwArtwozQFnfRwBwTJsDApBQAaWoe8bRmLvaVsoX2QVegxAdALitUQk7aCZxz9G2KtwLNQH",
  "key2": "3f1stN944MyTYNMhuAhVxM98B7hoQH8vSXddudpCuTn6bFC6FXm6AJuCLZXPgJeXBhD4bJSqXGDdfu4gMtrMSM2h",
  "key3": "5FezpJsyRWoMjFBoaWqvNC2qnTW9cgv6hFXbTaK2DRf9kHdLhPsRDBAPb9jcNxbJ6QiM6cQUgz3y2pmKn1YMuo6v",
  "key4": "2PQR8JKw671n1qSkZhSo1L1kCGBQze9LYVDGXxQEjZAGx8mMHWqkFafMtjLLPULLEgWLSfNLTTXB2X9vREvGAEBb",
  "key5": "5S9w1RnmfePQxx3ahwwP7gK2Q472brsjQtC6EC1dBGEEFsrxCkb9Gug3A1svxQvx2C4LiSUXdxDJWxEkxs1nQb57",
  "key6": "4dR9bUyP2gC3Z7Y6hXtQTuw7fuccxMrCgJyJqh2havZWe4MnpaGE1BEuyuhewe1iBkGBR5SEg35Bui3D728oycLi",
  "key7": "2HDiVsEcJuxG76DvZAUkcecBThuqeMRg8xhFM9PAgKpXkmE7WLLw13fGjMTorzPdxUq3Sr4ALgoQL8XmWrcYyctQ",
  "key8": "2AyBLtgSgGZ5LSaG9v8pcbnUwxdQ1syvHFwCy3WPzN9hhitQMA35JVwMe9ChHnGuhoewMkYDHo79J443NLJrKJxB",
  "key9": "23SmDWFAVQ8QDm1Thd6XBkW9Q7NzsWZ3xTAXavwMT3XdN4NU7aizGqEd7AWcm8L1rK5MshFCfRKjUoGo3tKoxwoc",
  "key10": "2zxiVxdK6RP39TpXFPWMQ6MCJVXt1Mj8h5qHLaWBzTutARFQMVcJcjvnMRriDRQZu4dJDAfUhxErp3nnNhcXanr8",
  "key11": "iGm1caQ7bGb2t7TmPL5zZmTfcEFj7fPkf7pDqVyT3AyvrGRhwJtWzW6Y7S3Gbg6ZtmWsQBPJ6d8BbTY4UkrgyDP",
  "key12": "3WdV16BLvmQ4aGC8KoqD3cLPVjbqK61zVJiWJDm2B5SsHz2nZCxg3fJKQyucBH7Sg5runHLGW5uQTE5v6DAPNHHA",
  "key13": "5FTNcedmeb5KnHocAu98A7z6pXANCKTR6u8aCGcXUtSAxmCHLw8ob2yWyLxKvhuFhd8Cwz8vMu1GK9AbDKr81TCf",
  "key14": "3ib5ke2hYmBvgRCoXwMJHkLYdwY6Ap6SR12foXwA3LcNXiJx8HuRo8PG4iuQgNTUemfK8ifnm1actNXL6DVGwkJp",
  "key15": "3b3B4iFygbWCdQfBHLJCKugXUaUY5A6kTngkwoDhfmvJryDpof4XrTyPHAVhCHnrJWVFsQjnmbJoX2eUNLTesera",
  "key16": "3GToDYRcy3cBXJoK9W1XqSkR7bsXEdZYftx1m9Eo8S2AfM966MU9Ua1x5KVcx9kF6WqSW3EwoUDYJgUVsYmckd1Q",
  "key17": "26ZvA9dUk78LA7ovqJSayCZG7ajGn5PmqZYYKKr2gHEZq3yy6qqPz6yN34P5argiLK4M5org7ZubCRxFTfZdvLPw",
  "key18": "6GvxLUrCVeHATB1fqubSwmYmcutmsv6a2Gh9oQSMyDFo88QRGSLET5bW8jPQpzk8s7h9C4EXMRNDShRmBNiT4RT",
  "key19": "omwWjEt8nbfJXAmkh8CUxTQgQf7SAPnCq6sHy4QzWsQ3VFGSVnLDeRPV46Dv9ExSwG2M54RFtVSeHnXfDddAcDK",
  "key20": "5QjDLVvxZgHttBVD6Br74xA59DTzKhDtXNHFetWhHzfzBUafVrDYFidA164P8gea2uHnYaSC69ebAdfNd7ryhi9E",
  "key21": "2o26K49L3e9KWi4RTz6pXKZgEF4EmkxBpFyRFnRcF7D7uMg1nUGVQxBjXg3uKk4HbWbAyXJg4ALMmd2jfipiVULV",
  "key22": "6JQzFW3tX6nkcHjd3YE4Qnm61RXHh8cbqHGTSx8KK6FxHc8TP39gJYwMxvGvod7CVo9Z4bLT7dQWupacHEyMTBc",
  "key23": "2zB1KRdHFoy7SvvUDmFPCorgtQ153XzDdrza5brnHuUmcEidrNMobB4o6Fswp3QvgvP7rpQqJfpaV9GnR423Ue1x",
  "key24": "4tygYxVZsepaVjxhu298PLpcECGFLvfTM8fywACjydPUybUD9MMaoMWogJqNMAK4hyhFs89b6mJoq229Sc1fbEi3",
  "key25": "5kij17cBFUnQnFUbntDb4xRZEpeauwJ2VJ9KeqUvRUPwrKgJrQowK3geSBd5SwCiJpcczrN7YPwRebzYHj3dqP7U",
  "key26": "yLunEQuctA7DDeHyfP6rZzJv3MxuLqBXUkJKpMtSvwHxdczDeZsgFBXtxEofgh2YGpQb3egZZjeomjjx9V6S6Pd",
  "key27": "21D1GFhKKb5qM8VBCGxTSGEoPu2A7yCfdDmvi5Dkb1xDT4GNQGboo8gn5QcpjbL5BqpWtGWvFGmPW95XwTc4QrfN",
  "key28": "cC12XvR2HGDcFWQfbU2W9acz6mYnvFaPURpo9HA7YWWMvn3SHepz3CrcdPsAJxqT9LgkLLjeMf86YLq1AXGjVxS",
  "key29": "3sFfyEHLKKWJMLCRnB4NyMrHwXfC3H5HXTEJBrzsiGaKoeLsJdCwVtNdozFtDb34V7AWVvR1tV2TW1kj6iSDFSJ3",
  "key30": "YpKZVWp9zSn6KxiojSQZ6sAZEXu8CWNmXtbKjpraS5G8xhuVZwrHxLfT6TKEhZmsU1H28ZyW8uFKZxx1RNGYEQR",
  "key31": "DiGg3iDF5YpBHJ75GVYbLCyMe9kAZEy5yCTUhSNuiZiSFKHhAyZd2YMpULMXNT2YjB9Ym35pa6gryxqMrxdzFUs",
  "key32": "6XRLnDpwRUr6y9DvrdUnhn1Xr5DmXCmX1FyawAcEMjEXPgxJphTFBxqhJk5u2EH1FJni7iJZBtCUHUsMiMo9Aia",
  "key33": "2H9XyFJjdkw72BZtwVkRqzm9BcnJLQaNSx4nHacs93XXAWZRjAux2gAqf7NW1q1cBWiGfVoZH7er2YPRk9P1q2ZS"
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
