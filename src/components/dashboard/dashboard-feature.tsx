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
    "5VX7Bb8UUBLuFu7VjhvNKKj5bGRDWqw6i395ZTDETbudaMBK67kcZaPVykG1dVjg3ss2dDW4rg5gpQPqCdE8LBkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDEZHn2dXTF5g4pjwxas3gEJFDrrPNAJQKJ7icjk6jaYHxhcM13Hz2XD3nPguNcsDA2nn2XDZemBG5xMFHp9Jwx",
  "key1": "2QbgFn1dxxJfBZjn9bFRZur3o7JGgApeFJWipDm4MJz71iUor3qqhaQk9TNaMCqvtT3Ak3VAqYuizppdr1EhFzLM",
  "key2": "MR2ZpbW1PFgLPedcesZXwNaJLJZyBHckhgFq7g83iZMmYQJxJCHBFjW7ADxGGr34e3fvX7j8vs1z1oAJ4d5Q99t",
  "key3": "4JA7737gT4wqq37rxLyoaiuqdeyvJXGhfetjEUyvC8wSorVXs5Vrrg8HSEkServsZmxtjdjJKjKFqWX9MqbwKZmn",
  "key4": "pT3xs1FKpBbBKvK6BgiJo8gdA4gyeWM81T3XoMf6M8bx7Y7zwhoQUtuvwCaDS1AwJpn6mCXrKLidbmYX4Fxahkc",
  "key5": "4coi3pNbufzMncmvfvPVBhFY4JijsaWrR38GELEkEeyA8CRPyW6AGoDxZ9iMCReHSGHo2XXZaFzxqiwyEH8jJonH",
  "key6": "49p3UdkApYN6dWb5ryHLfANxgNjF9mWjjwHLD22yzU6JQHSarvvapSdrwKhzZUaTiRfDSDNLyAvKAgpZH2Vo9nYs",
  "key7": "35sPpSeyggf2pMSa961UayZdas1MLUozJSYeutJpeJ8FERfJpRBjetYcCfsuc1HCbgi1GZbh1GE4EgAEe5v3EVW8",
  "key8": "3ffkEnS1kTi2HAcFxeDuYw8ZNG99UD8pX3vNXPy5QnJhDUrJZtDUciM8xuo6eHWekZ54KxswsUVfeBNmJm6ALUZT",
  "key9": "5DaUMznfrtJQuVbuz8UpApYnLG9LY94z8WbxWZRubY7Wj3vDbtXXs8wLtAkU9Jwpuuit3p1Wkc5RMPmTY3uDEipy",
  "key10": "5NQNEFDtHexQjZNBddcTTAg26Ycbxv8MSxJGoncqZ7tE7TV4FY54oU6rRZLeJF59WHy3JxFyquCXkCseRK6PHehk",
  "key11": "MHFBzSh4LXEfHGbw7gHyv3bY9ip5B8MxHZveNYHUp8Eg3mTPVLbT4ZMuTVCgf1ZjPfAmJvnEPCrzjHyKm4DjjUD",
  "key12": "5qT8NTGMk24dMaLP8FeQzgcyBaed8jGc6tpKzzdQpqyvqkYs8Yd3yMWCWc8WSiERcTZzVyGkXe6R1BxzYmWGKucj",
  "key13": "2ETbyq1K5LUGrgCYTLdAgKhMV8QMT31fYKsJKv5x6z2XwsAMjuVgpTPi1jQBbtWqFQdvqJwEQ9kTRGcQLtmHoPry",
  "key14": "7yiNxvAFijWcBsLJnrePVEmHJgdan5ur6iXB2khf49ZHrpc3TetS5x6KRDPm7Pt6iSvVxK1JMEZdeiK1bErZDis",
  "key15": "2FVbzHL4wotbh4G7h2FVSixJd8G7BdPjkozvtehgV7xnCeTnRwLS5vaaejVXwy8q9SBWwkew9Bkcj6t3iyYYknKL",
  "key16": "SmvGL6Fw1xLvUHRdUk8hKX9qQi3xjgahCLzUV3Urf8R6dS7G4aBcvs5bvqkLMdiAG8Fa8VLkBPrXAM9wJ9R49AT",
  "key17": "58KZnuSaez3Z4byuS3QvsGnGnnrSHHmwwMhmxR15nvY92camJpY3ECatqzG2jNnz7yQJeKWq5NPrL2wRmNSUJz2Y",
  "key18": "3DDoEZpwysN3oetzz7dbZe4wakx9znjLqdB5LgsZ9rCKTiXyPqzpEgfZeuJEspApU2e9EKuuXohwCiDxKYwDUGaQ",
  "key19": "3Uzn1eU1eguueyLuGxxVryPFnzsABydSzGWaNV4MMecShJVk8PuSaieKwJqzkT8gGNecBZFR1biBZw5ioMqPjEKP",
  "key20": "2YdaVCu8vjqPgBqxp1ASbJJUEDK1hJD5EpbRpEyo3U3iMFwGDuLWq7hrqNZ7qFcCHqcLFCPYyn3wedPuSdEbQbvY",
  "key21": "4kFuHFqS6ZRiZRuhN8BMNRTQ9YE2LHMLDwf9vaQh5ch2bVJPsT3NFZmNDfTZKntkZTac3LUx2w1WA78DzuteoRkX",
  "key22": "5QdrPA8QJfHUJTZeL4ucHaUtggAdZRQfPBCEEbWt6rQWcXig7ocQ1JNoDFG4JxCuS5YcjUESnnaDFXwnhFe7sv7L",
  "key23": "2yA3sRre1KHBkab5yagVcGnPtMUZ1KJUUo7tuE1uAVUVH55RUr3uqWi4akqmtRBFMbMWHTnfbPqeEvPkARuK4fdK",
  "key24": "5Y7TicVaZsaxHKivPpdXZju7UtRNgcjZjBPPHovhW1NnknTUFtN56vDQyrmzYBoypoBLUNGuS4YMGYSKnVdSTekC",
  "key25": "3YEAVq2AeABeVPGAFJyjyYEoL8UFVYsa4EjbmR71rKj2YWNSzMCp7A49vJtWHz9L3AwQYpxce3P3J3i3hPueWcse",
  "key26": "2dH8MRpoYUAgKEf5gCrwxzWBGzFWuaBwPEEVZzphDjWQJxKRCmmzJKq8Zaew8xL5o6dMmFJ3c6jPfj8phFDTNsgF",
  "key27": "4vC4DrF9H2xdCoVjKYQGhnRbhYLj8obULUvKLnBbV3svB7CB3X6mxqX8p5sYgkyx6AK3zCANxMcC21TuBWSVNgw1",
  "key28": "hstC4vbC2LJiqxf8MDsDvZPgFwih4FzurwZv3HAbmu51cmv1a4DRoiWKEeEHxYeqZZyzGznKG3vFFD53D5zTwNv",
  "key29": "63KY9y4G9WF4xiJbi697W8Cea5ThiapvqE83wsqpEU94mExHXGFPF7sD8xfBq1W7812JXpVfpAKqDs1PGbzKasmu",
  "key30": "5VDP2R1KmvesJtRtc4v3x5sJHNdJHxpj5yeXGMPBWWssp7WWWXSmtXjS6A53MjkibqwGwH1qw6Eb236Y4fz6xoxG"
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
