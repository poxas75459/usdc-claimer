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
    "4DqSuGBy6vrD32SXk3m8JY3mypspGURDvgya1eUbvLHrWYuxdeARvwWVkfcjhWBupirWkEW68rfo8zZJ1jeuke8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKKPeTwbdaBxEsrMofvbVBqxkDRYJ9r7ijs3ugazw6wy7jZbw2u8iLhVQsYFPiezVfz2mttJY2wioVpHTX4AByk",
  "key1": "uaG27qCkZtTfhtRNfQWKKur5FEn2NvyR7EyUkEN3zU7cVktmBsi83V4p6Uj23eiLMXp6YhpEpfeaJ8g3akjSmQ6",
  "key2": "5XnL1ffSE96pv282yNe1xxDXqBQdvcauZUKNbF16Vqq2JF9eyyK8u22tmaYSMNDynYKMxdfaXh57PEnU1RyDTi14",
  "key3": "5A38gwDPHbFi2WnEz974ghDvMLSxXLak92PVHuEdrFkbuFxXSX78jfGrjnAfc3rndg9N3cHBnCcAZntC15Ep1x3s",
  "key4": "4xi5khcRcN25GWagbbfvipLX6PfiqvDRVxaa732Tyz2S1DXB4P4Fy5BF5Y5vWLNw4P82JAPVJ93sm9SbBs3PScxs",
  "key5": "2VuFhBiiaAVwuam4b5XsQns2Z3kNexaweMXomKztz4nYLR9y3MEGdZDZm1YSfsnM82XsZBHmHcsKQJmUDK3Q1Lu2",
  "key6": "481YG2VvNEJc7x9BQ6HSLenADtMDP8E4EnCqUtHbYNRvo9PTH8PbHqpTDTWndmS8DUD2faKooVCJBxf17VFGY58F",
  "key7": "H2AHWmZarBjZYs63PD5NzjVHNH2iHBzWYn8VWE69ZyQm9Qo1UwTWjCxM1B9J7xuEexon1aTgg2XWxF3GKXyBKyC",
  "key8": "3cq6pQrnGCvrbGjuPeeavRxGyw1QSkh2iGFsdAbxvEAUFdffZfNyeFdFrAjAK8L5RG7K2xb3yH5U6tyy9hfR6xj9",
  "key9": "5cwzGMhsnMU1MfVBQCrFAnnKV3JXL6HRz7dsNr9L8NjpxR1aejtd4958Roech8X9SWfGYo1UASPit7ZVDinGUHto",
  "key10": "2pnYJquKFyPxRGXXbcjANtRTxQgmHVNx6jRx34bBg5BNo6NiNNmqH1JTSduB9i8Dj8pAxwSApWPxLGph59b8aKic",
  "key11": "5uqGHTZvR2DouS4jWHnQDhKBouKg2JSDwA6aUU2WERtkfQrKihcNGhK5uhHNhuh9NaqSCQU5nJr2mAvhCk4CrCgM",
  "key12": "iAyraR3tdGK7Z5aJhJvdWt5jg9BZQ7PqtwHeGZnwfQkEyWy5ugT7TmNeidB2rLEaGorxVNZtw9R9i2ZHfFt3DNd",
  "key13": "3FLmaPR1Gp5ojSuVLwAZZTt86xKDqqaqWM4UZ2da58kZA233mZpfEuU6HiPE1NnQgju9DqQDMeqB7wLomrY2DmBw",
  "key14": "3Pbbs2vh46e37zBoD3VMc6sCcT9PphFLWnzWF7qFh1HkixMLv8LySp897VHMe5nTeQSqrCZsyN43q7kn8hPRtxVF",
  "key15": "5DhbdFUVoY2edynkWzcuArvjBx3obEUbaCJT89DtbUmXqXqYX4bYEBuh4Y8qfyxxM5cR7k6UAJFNNTRsnzyrfJEZ",
  "key16": "5YVNA6T5Kh4Laxa9JuGgRBC6H7YrNffonJvs3fhNqWvZsjKx6ArZ8QnTrsNsnnRd5fGjRi3bJAvGusVrQmprN8QM",
  "key17": "5qqn6rJctySeDri8dZbto6zcmYN4LMJNmoAyvRHVAGeDW1n69aTueHUVZHJ4FC6DrpFaaJUP2573rx8psTLuPNj1",
  "key18": "2rDWBnaDEta7cuRNij6sK8EzKo9Hi4qwXkkT7hnvrifqEJ4Ga2fUq1yp5GVwkgwYRiX7t7fMpSD42oUKxtxUU8ng",
  "key19": "4Xxjw73Eyav4mKv5F9Yw5EuCFwN1qG6kVmeM7Fr7PUYYxpMLA7warESPV6o4vQPhU7Fuq3bVmFyrMQfouKUq5anD",
  "key20": "3ttJqTqauuDtAhNWSahXjzeUR1Tyv1fc5UNibujoSDqCPug2yME7fsnWonqzWkJ339rjF4H4DDnyUiR3PhpQuSmr",
  "key21": "43pmdYfecRWSeSwVBcw4hBwEKbGaVHvF3CSipoWKN737d4kATVdJaTZwARhM2ZjDxJKxFNQg3zuqtWB1EqwQ8nnZ",
  "key22": "3UfdGBE73m3PDryXQF4Y1dHqD44RCeE5Gy6L7o1uj6UNXxHTpHjrerpWZ7CtVYnJ2zd4eS3kuC5Wh6V7YYayM62z",
  "key23": "VJsTAXbhBUgUaf9iH9evya8oXHpopr1Ly4htqGeBri2J1fMyWZgdyoWaByyXQKAApWb6Dt2biTgEVynNVf5DJmx",
  "key24": "3a2LA19pDmrSNbXKjS7g8Kag2ixCFZ4s6VXRssFSEaUCdPtPSYduBSDda7j4HxCpDEVhKDdHPAZhdWuxZ6SpJRx8",
  "key25": "jU5ULUPuRAeMgGswGoSxyAtLHTuFuFepzQahMTnVxEcw49EaKRT5XeiLQDKqaw87Cb5yc4uvoBgt6omoU7cFUNM",
  "key26": "5nuHyGU2fcVAYe2QJd15PoCwr9UvcHShXndjySnZNygJLHdYY5cBesMKV3Ak6cvJYZvgvWQVfFUySTSidetLyojY",
  "key27": "5ynPTHzy5EDmdirzM7h2Pz6nEvVjLPQkGFEN413sUDjtm5DmhkrE2AXRck1yb3uUbpwvKFkVk9BHhLycZarVrT6v",
  "key28": "nLg7wjnAHHSeydStYZFTFBD9Nvtofq8CCgY9vR6sFkkXH3a4QUrwaFEnz9rFmgix8UTYjfUw3qNBfUZZeqRqAzD",
  "key29": "2iXkdx72LKuHkiw2bM43qt6xvctAUSx83auvqgHYAox8gQkvuaZioGhkCUAwXFkQNDe7khQcfSCykVb2LCp8C7vT"
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
