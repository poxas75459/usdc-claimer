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
    "3TGTSnHxkYYhjXv94dLSdC6pXP97ku1GypXZvCCsetwPvXs13ZgcvWFsMPZ9dG4DRWUmQMzuUg2mm8ewmVr3Qme6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSJJ6kogS19ZSHJ5qCp6LPomZFSe5FP5Y7vmDt27KosxqG7eYDfH9SMYfVEteFciEC21dSWvtZGRQk8GKwDngHr",
  "key1": "3jLbXw1HoHXCi6h33Uv7bwJGUoonLymQaUCYpaSjYzWUL2XhEiwuH6jXm7s9MnPBokPs3GkU8EfDKxC8wVrMZAs7",
  "key2": "3stAwqKkXcsmZv1pjR1TfuLwVmhJ2UXkHwsd2QZMSZZhrwkLKzALowsuwac3fHc97t4iWDmF3FwatDbXj8XZ5LyA",
  "key3": "qLxRjQUkNBFFNmVnydUE5i95gZP9eVPA6rDtxf7MXzqMNYKsxYCXYu7sb2HnQFQKkDjTuWiKjQri3EZSP7u39m8",
  "key4": "3DzQjUdSrurGoadtiv7XRJDMfuN95zEGKzemUsuKvgMNdngc8om5SLMC5NQt51fgMKcQbUvtLt8vXR9YzE2Y88Li",
  "key5": "3SRakQJcHYJDtu9kB8y2TD3q2nhniD71TWAKnLtkXarR9u3c4JtLVyYpuX2TcsM7yV7N46Yj9T2UhvGPcQN7rXDa",
  "key6": "2FaW85Njpufz2iCc8tTTCWZcxZnzKoBg7FMzFsuiWh2AipNB9rh411CDJh1NoDH5KKp2VLAuSf4YWDrV73HJtWPp",
  "key7": "3iVtBzaTR7vJddQ45qGWwCphpknv7k6n778RsTPcZkSXyRYbbwkMGTbKwg7tPzv1N3zyPYz6ftizDCuzwxRWeE5W",
  "key8": "2E34MmUA4bYK5kWAcWczmQBiLMKQf3cXNkX1h6mQSHCoYS4Egesng4f5dYBCACRehjz6VTBN241Yn7RS96WjBkpi",
  "key9": "uo7rXSSaDFKMAaHifP47gdKsKJQPY3X6ruEoEfAK2EXbLjStuxxtvvKh4aGekcxe2gkJtdjBszQ9eeb3SywBd2k",
  "key10": "2uG7gJ6sw8DRBcgq1MbppiVnwQutPS9Y9oUKFZcjP9jKKgGkQghYvHVT8UNprxpjxrsHsDfdtjdgPoWXUd8HLw8c",
  "key11": "2GGyBrsb21QxquXqaEKxSH9tz2BMRyboXryyZc2Y7JkCVbRhbYYyHxtQrjCKHrwuUmwxjT1LaMqLixhpJpg4P3nm",
  "key12": "5tLkKW72Yu6ZkTTkkydDaDnqnnJm55GZyW1ZtKo26dDppuDoY7xDLeyaDBDrNQQMGwKfVkXUMuHhodFHq7oaBY7Z",
  "key13": "3nM5H5hmsGZkRP6JD8aYqy22o5fFLP2gHCSDNUEirfPKJf6eHqEvsfcTQvBUCr4EZvj5KUd5KWdmiziHfR4eiYEg",
  "key14": "34uVbKHvdKXyqFesh55UUjrfKxAKaSEXmgY9gg8Ca6pNTKyoymxoVpx9Bs8aYYBUhXH2wzBBifYyn8qEo7J8663D",
  "key15": "2ktX77LXsReUrE8qa9Zj5aR5W8Y53koz3xyJMjewDQx7Lk4r816CTc3SBbnabybhMDoCvUWvoPmUAeau95fAuhoP",
  "key16": "4NmxkZD4b3X8mUbKDE2hchGMLQzdvEyzoC7Zec414sz1782hvdNy79Dxp9UXymL2vYCRmvu2LDYeuKnLj2DVgRzD",
  "key17": "4xxeDy3AW8qFKw82CEwxS71ZdQS271QFDYgzqz8ZM68mLhqVeF6QYXY9rEnaTiyKjXBZu9fvuQMCvDirHJ4fdpmM",
  "key18": "35kJsCyHLBoq6A5YAG47p78Rnu1kydhZZxXwvT3aSFXNCr7C471aS4Bny34Cu5J43wbJQgKCeN4WmCoctsKGA4Yf",
  "key19": "ZjD4vayGZJTRJRbrSRTXTqAsfNF59vSBgqgWG2kKxSJ4dExzRX7RUoUHtxwEHYDCnASsF3LeVdW7AFgg65gPjar",
  "key20": "ktwMAuo17nAKBLz1fYUKZHt5jyDD4jC7Vkmz3sLuoCCcBopxmbnZcVJmr7BBayQkoafNyvNRAvzecDNWX88XQtf",
  "key21": "5KY8ctgt6DHyt1qDmXvD3aBys8ZBCmqp2Gy7K8VP6f2DEcR2tL9JZiUsi3uurMWAfwRwaNMs31jwTEL9Bw6GkUN3",
  "key22": "4e4mFowxhWc8uhitVHCKcbs6v631F3kU9jFaRfuus7hWerJsVt5wiJMZ4PQTZxSU5YzJYvkkhuyUxfNnxwwHvNuQ",
  "key23": "2xaNxhn89iw4oP3NezGbwbd7qJmdmXVRX8F8aYbWG4aiybaKxG52M3ypoXNF6jD8Z1i3FPXERi8eSMXGhWtRzCcM",
  "key24": "4X6QjVEMUhqBsqdikNEh4pWJ9TdgHQXKDL3rJyqoPbzcS9Sfx8EVfxHLbNLxJ5WtjQzEYyZXNaRmk7bXKmyKt2d6",
  "key25": "4JSY5wB3oTUPpzAjquroVtuHGAAb6Tki2om1DgoN18Lwgo8CNoTdbwXdw8L6wJRZL4tre59dVUkErqLaU2LEuYaT",
  "key26": "34n5AdtdDRanMGTLzTxw3vLrc4rELfAYn6X3cAHmfJEEjRVhGoPZtGrqs5jKCnBmBq7LAxXMXyq8Siz9FJVxV6Tz",
  "key27": "SEh6mG7nNBAYD1cczfD7t3AWUk4usztkSvAhptEutpiuiSUzso8wxEcTxEKrdA5kpXu8gN46v7BgZWQDdEraCbJ",
  "key28": "2uGPWjaEsZUJgAcfhmLv5wXH4k1yXLnLJt2fDwTgjufwGznPfFE9NcH3Q6EPkt83n13QPudJNsHCWy7m6ejTm82i",
  "key29": "3HeHm4HsVi2fD6AorATjfcadfKTyT5EUZddgsjuBzuRkE6GPsvcSE931dDUBxqPdPinoM69m9jMKZS1FSx3pJvWR",
  "key30": "2AartHDCeK5FrM7cxhEgLxLL7xy1dq4jMU5pMqCnND97aQvXUGDM5vG1taNf3SjafdNovMhZLaf6rKHrbCK4a6Ce",
  "key31": "3gTjaYWKaU9KwottqQTDLTf8yD9rwNDej5396e7VhZXunsoVZUL8rrk9eqAjWVFCkL1drR2V5mwnj2MHdVJEYMwg",
  "key32": "5sfzb7YCs1YXXUTGxTgz96uuXHH4L1GCSYrXprNWZfiooENBHs6XSZ6KxS1ZSjMpsbTWZv1upNhuYwYg2WBsg2QP",
  "key33": "34B3Pn7Nm86vw8qHXYQDNwMpLQrCAPVCu8UZfVHLhHvvhwXT2M2rBsDqQxLCfAFYFY61N7WcoZiMvfg8SqJFQ9Gn",
  "key34": "2QQPmxYZUgastfEaXBhCPHrvDew74WavmyC9bWxj9CQJGx17KuHhESdvA4P77hTAsJ8yxruDKifj8hs2rSra5FeF"
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
