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
    "2wgAQ5LnpM3cFHHVMHgXc9CvNuddrEBDYXQeTPhGuP73uTrGcKDyepDbXx3Jc8nMkXXuEuu53XKJ3Cpafu2YJ2a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABJGEnH47mRr5LaBY28UcZFSwSjMdLahxBBJhPUAZbN1in2nXjXu2woQXcowi9AG2b7k5GQnNLJiQbS9CP2sBix",
  "key1": "5AxkEPMzBpMHQn9Jjocyau3qUdsU9bSctNXtRrGUc3tE7gz2nTTncQz4PKkJsHGsF5RUPyffxyqBLtUowh4jadVj",
  "key2": "hfkoSi9KKjNirLvL5PpLchys4yTZwYJooV4koQUUuLhW9TSLk7nmShahbWRfXjzWkgNyFGaiPjZBqY6Gu6u5iFx",
  "key3": "5nDxQArfriyCghJutjEUy15isAcGCfmpTguTi9y9LrxWcndv4g4GphKktuawL8TEhqGqwkXs4K3yGvCP1oxryUEM",
  "key4": "wk8rurXcQdW1fbQKELwMnYZjhpSktbGER9HuSz4HWgYDePdDBHQacmGS7dk2FshkPvhp1hhDYSKr8Euz24GGSzw",
  "key5": "5dxviWtcFhnp7DYgjVmGpEnR37TE39Ez6xh91bM9aSaCzfFaf2gTabiZpXmJjyxxJu7VonB1146JygPT61VrKRus",
  "key6": "4NJpaHBF7PQCNKj7sH6pMqGAnxM39QdGY5vmonAtwAcPt6MrmJ2UEztq3EYdHyKQFn1utSLXkVdnW3PiJ8omfotm",
  "key7": "2iUsukejXJAEyosXcDMNrgbMxJfgVYLffBhz9u1wMCG2eMYUKpsv7SDsm7XscHovo388ZsVxiu6Wvu9KWddGVbBM",
  "key8": "49KKBHXiUPLy5ni7TAgVoMkDGUacNTBQybKrM8DMoLGurUCndq9TgCny8cVMdq8nxSAYXMfonevLoCBQzWbTcT7f",
  "key9": "3n9KnXutUXep65dq2BR4oZ271AgQPGKt3gQorgfS7MmcA7gKTcCRuhGJUVDjwPrKgEQFwCJZVagBMaUAWmYy5weW",
  "key10": "3JMX8BKJiAc5DBPeZdEWkcKrYG7FicTyDQoqmG5c3aXWd6ygiG68sPG2oKhwNqYhcwBXkPHZRfqsix7bF9EpUwpb",
  "key11": "66CMdcz8DwQqDKtyuNJc27P266uEaneztsLBovGaGwC2c3kJuWn5CV7fFJhyS8o89CbQJzxESrgKzKntTeZe9V2L",
  "key12": "4kmNzuVk1LaFW54EPKAz3c7vYT4oYMhkHqfvDBsf6GFwGhzvupDmQzuXQLLkG432CVy7azHTTf3AZsKi6krA378d",
  "key13": "3Piynrp9eo3L1V3agjmytrgCh1U32vf9Qkkh9gDfBqk88AD7yTcJEgPMkJ1EAHVETr4hjHSneJvbWpgqeUGouwqv",
  "key14": "4VxtMTqiYtVPX8WrxJ8zzS7AxhR25hYxSqyTUJCxMzYjFxUUQ3KWGRTLXQY4Tt3UkN7kcpH4Eb4M6rzDyEkSXc75",
  "key15": "5YPpbJ4kKXJGjPCG7M9Mp7vCCZExnriSTGrLpzXLts9v1AgUz8hFtYEjarF1DmG24jHH1qUoUhbb8SY5c7ZpRhv5",
  "key16": "1tndgyXfFdDt6mgJ6iqwnNTLA1U3gJT7o3RxrGnEMt7mjvQtAXi1BUDWskfuAPZnzvLRcMcyt69QKDWPbRPpPSR",
  "key17": "2jPpqNauvwLHKD55uEiUM74BQTT87GJKHFTn3WrXbDPocDn1Q96DmV8ycA98AKbLv4SSEuZK6a3BdabNkYR8F8ss",
  "key18": "2Lgx3GSvQoM4EUSsKYKVR2ALYd5vdemorgtY3ysAPAtepeR9M2RFJdTM6wJ9qh3Y4h6AGQaAE2KPanjnrUp67Qa3",
  "key19": "2ghUWVDkFbBswG9KjovmPviP8jVdr3JN5aM1eDA4xpNH8kn7ZLHg4Nrr6wWa9wPJ5FpawnxuFK4Fvd5YdJSs7aGD",
  "key20": "31cKtLL7fAiAckw7eMydKLCh4C4YCtyizCgxpf9krp9j4QaWwJvfYEYsLHBDLLBtyVuotzXTmZ9yYQcM3BDpFDrH",
  "key21": "4UpwC2Bv8prL6H9PRC2hV3YH5Kyup16L41jeYb9NoBQcU1dHRUEeVF9dWprGXj7YXR4XERDPViR6vZ1tVBd5ga6R",
  "key22": "5EtJ2inTY1CxZvV52ERTVXXrHc1sqF4ttEAFEz1DqL26sqh4VwVwXhQk3H3t89K3qGfBUWbSdC2VhHSMcVcEYdCT",
  "key23": "4y4bGoyetWFQ4KTfq3MHavqBfNGKFBiqfKKiuhbWf3gmmxgqU3mkXiME4x9WyBotVArYsmADeY73uzQ6hSbHrwkY",
  "key24": "34f5weMPZY3GbnjFsmXp6omW78e224SjVyvoVPXMHjYw6cbnv24LYeZHebnxS4Uv9Y3cy45koLRBowU8cfXGp1Wo",
  "key25": "2TgFwpgq48fBR1pwoBMw4HxZsuVLQ6ipP3jdP2Dr9rQ4ii6cmnyszQxzDzp4coPrYvqZppRv9tHrR6Y1WrtxYTjk",
  "key26": "ER6833ui4wq8SBmum5jd7EbvpKtf5grrxGbhc9fds392RPxdGXjmw4KAf3W8VGsLVnJSLwiUwgVaKVMKWxNnTRv",
  "key27": "43PCWbdAY1heDYHUXN8PJWpCwzbd5aYgahCqQKetCPF5uBgMTEK6VKVdiSrAmb1R1kz6u9AxdAGVgYpsGALe2mZ1",
  "key28": "216Q3A4PHNiL6bQH3j8FJfpqnDmdEDH34ABNCRnpXSfpwbPjEyPVjFzv2wsDRoWNeMKtZxsVfK4vinkLvJqPaWbS",
  "key29": "aEcjM31Ja2uHsAse1oqW6dZYFo1aKM417U6goYXatJ7497oRsA3QUwpEtGyHhjv5LXv4owwHkpFSHm1okA1rKZ2",
  "key30": "xbpn3UQ8bHNEaMLt9PNtMFAj2WjnZDVLjTKsgNAqbKxHLLhaPV7mCLGVon8i3qvcS6PRaTdHYLYNdA9wa2J44RB"
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
