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
    "24mNbauCMEdqbU2aQBmFWR9qQKKA2LJ9eHxkS9PuTZFGWnKbYyZxvAjUvfG8pyJJZeQtjrVb8JC3DN2jgST5o1W6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MTrkMTmxUWW7ErHyk1a6TdPVc8zHEjwxYLJR5heQFUuxdNP2KYzqARf6Xw1Gt4G53LAfLpPBDCun6xSbCbT2hTg",
  "key1": "2CBeUsbGUJaPN9EH7PoeiUyPyeAgj5pGQiwCXaWV6YC4UEcSn4RYWp3PfhByGNqx8yAsvYdmaAHWHS8S74copNZV",
  "key2": "4kiZUGQZn8xjCJSQmsrEsXHCqFj4YeVqZXEVSnz6MZruZEHoFsGSA7bRMQ7Df7V4g1UvNaVWtRLZB2dS5fJJk3hg",
  "key3": "2VPA8XyZCykyohs8jaN3kiYWuSHPyTfkaVa5u4yjqvJq3k3P5REDVuGc8cGUqQmtodzmN4Nb1YBNGHefPgZ9j5YV",
  "key4": "59ZHtCo4jq3dsLDhTizaL32SWeFVDTi477BkxjbYj5xBbS7nkLwTCzwrW9qbVyA77FtwMyJNFKr9uWsZMtjk3Mcy",
  "key5": "2Tp3jEnxA7oEf7v78FTF1hPFKxNuKwZszaquo8s9UieNwhsBRisFtXqxviNHmags6rczERuKU2p3R7X44UEjCEH3",
  "key6": "27wdXq66945vfb3KHcYvpAx1hoi91fR2Vcwz91Eys3DQPaoUdvnfsp1eWwGva9diWTdiweXs7uR7xfxoWC1mhWsY",
  "key7": "5nYio43kjPmJFoMYcdTZdcMFeKxEGonW9zo3QjvEGMfUQ4LsoqhAAAQa6ysmjGDkPAoCLn8ZHrUhe36s5BrB8W4E",
  "key8": "2zX6fGh73zCJytgY1fr9sA3hW9SKiVm6TPyfb7z9y8V6CJK2ga5VWmiTJfChebm3WhHkWwFU1MfPRZTm7ABnJC5H",
  "key9": "2wMKSbkWRXudamVE3ufFhZu9zzpjWyDkLXE5ww6YA3bzk9FwnzNJDqCAcsAxb4ijw4zEAmGaw14y7NibStJMHFXT",
  "key10": "3JC717YhLQAa7v51MCM14CckmV87nEx3RCSPvpWYP1kNLYtoJ9SJqoxqJx2ZkYfJNt4DwSfzbkYChj91eDG2kGh1",
  "key11": "4DLeTPQtu36SrQH5xycmRTTDArPGGHPQJnKtLQSHWe6jQNHixzKT66bc6mRapER5EFHxXdELMbvw6gKgVSGLAC4a",
  "key12": "3n3JmW35NV8YMjzhdSbU8VhahFsKJ3jj636AuxrX2Cy6CyjDeRAfeJctJugLZqJaonToQWhVu99quyW3oDASWD1R",
  "key13": "36ApL4NkYUo8fVMdKJfdhN88PeqrcpgWdb9pNJ5zYjjPfM9nGkabMpoo1avz2WM8Q36H21a6HUaKCEnXX8wr5Mg5",
  "key14": "2ZZuSBGMbFmKy8NK3UyykyvZnonSn9xFv71nGbDgJgsvJHWLmFavytCEcnda3Srsxzm8uRn5xUpAb7CvDk6Yg4oy",
  "key15": "3MAEg9153vYJa9FcAF4JNuR6hkSo6MKo4Xj6Y2ydGev5winGFwWrj4GNnLngVLA1iZQg4rXCTjcQ8JMpWSMyGdJ9",
  "key16": "3mSwNGeNwCfaKChHwL2XmDXJ3g2eXBzxFERN1wjf7JzzvL7veQiMDQmEbbpRGGTvDt8BV72VtVQpQ9GMnHD48nox",
  "key17": "4xNCG2crGA5BubdtNSNG6Edis6T1us18C9cQ55HZQfzxMTPiS5U5v77nX3cyRYCoRZ21pKfS6oS14Ldgu6NNpXbV",
  "key18": "2yQ2Xip4zemwzShxDnsfMD5G3VvugCPzUS12woAu7oFNTd9Q1h8VvPpqceKZtV3HJ2zG455u9z8fYTMqmuPjY3Nq",
  "key19": "5ijPquznjGsokCPNyDrPxQjFhPvXKCHts8BcHWm6qVwg7e4DEwiuNzjn2bisUbWTUHnEBrqZdRqabm1NqVGgQo22",
  "key20": "5R8z3CyQ4T6NjKCRh1Y4PdgpFxDSsKWKi6GYj9WyqeX9R5q5X8oVDVqzqozomWkb3F7s9Gdx2n4eQWPBykGmTYYf",
  "key21": "4YSX4REp71WkpTm2MH8VRWbpT7R3Scv8JHu2n3aztSjYp7EVotKzEqXnT3LWkEJYbiBSGsF3pdfsNgUJFXTG88p6",
  "key22": "62yc6SKCB5hMgZQGaQqfkA7bF61oqqvSTFSCkEjPZ7dDYDrMAykweksYzFekqBXkhFmu5d9K5Ggu9wHJkS6eSpXG",
  "key23": "4TpNNxSC1YUGMUZJYkW6EbSWfmLwVf3j1xpTUmmd8MT71DuTasFsQDMR7rpSpT2mdH1nWHrWdiiY26g1KNotw4MA",
  "key24": "3zfUhKsVZZyRGVJfXL9iJ1Wy5DKQGQmPw4bCHehSfqh8ffvUNjEyoHPReMh1ogyKmvdzFMuX8qyY5kHepFXZ8EeF",
  "key25": "3Xbcv5XNu5Uo3d1u24Lny3aLEFeRKgoiu4ma6WH546r5hKarYDZJ1c5dbjMdhLUsbXQsvwbmzPRvfLevLbZ4o4YA",
  "key26": "2N6hi8Febg3TCzWkhiqyZhJMxwkzL6dZj3QWd6f8shcYjNyHHix6srHc8EgDtu7nfr3ADm7WXfxqS2MH9QcX9Wt8",
  "key27": "gzCK6Gp3YUWVjk9vSkzK4N9mgWxsRGmfM1FndmFU6jvMiWvyJvZ4wzLEfnEZ3aVgZMjXGH8E24S7fa7qV7RtTPS",
  "key28": "571i5Dzwt35tbLhxouDiSFadR2CNmqUydr34bPSRE4LMchDUPqh9DGodVdsYeTwKN3jnEiWT2FaVnqruWYH4nEJu"
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
