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
    "2Tidm3YLhvDWrueqjag9EffgXbv239a9WNmPGDKJiLEMsRyCQevUTiDcGFTbpcyMstqwcuVkmJoJNmyCJLLQB3Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G7uX7b2th9tUnCeYEuJoviFqGTKJytCvk14H6cya4NZjg6Afyy5tQ7dEDC4KrQkGTJXYJ1RaEKcgvF9hwZT22DK",
  "key1": "4zWZsJsQUXHBqVAyyWPJxhMekPPxVDDWHjcaJLUVW8BvefJScxfuaNhfnXgmsVcSsRb3e7deNjJgDSnuJmBcEwU8",
  "key2": "agY3pwzzeCNm9z4PVP9ghZLLFc1Z11o1BwUZx1pH4sVfVReNbmVKyjk2yQ3Bx727RtPXgp9wXVrnji3xvkFHSiW",
  "key3": "2dGuVouDccrnnhwNMYYnWgwcmy3zV9YtGEF2YcoDKnstmw1XxdzHVVzJ7AJMg9uMjboSHnzEGn1MJTHFDvuYUvZJ",
  "key4": "3W8wfAhHsBfJVLgmPUcPk376tqyGG2uTgp5Q9JuS6mMiLXbhuRaQR3XTT3ydzSce21sKmkCSRhvhzMJL5ocpq6pH",
  "key5": "3A81BXNghSyrXhZWhZY7j15QcusAJmzoJqGnvJJ1DaX8gs82tz8UVCjiucKmevhmCQPGWnmzJJ3QEgwosSfKghXj",
  "key6": "3KbeCvWAuDyHVKSDF88u8SoTSwr6DXzuXD7RHkU6UeYEvujvCzJAQbzxQCPnbd5i75rYAzUcoNWrzbWYWmE41TQE",
  "key7": "2PayNAyUPXm9B36ncFnXJd7JgGmbQKHtcz5wggwwvb5rXfMmSMQCHZZxKTE7JGvZh7xWtSwTk6ZHiWptw72tTEXn",
  "key8": "4LHLH1FdRbMNFJChzSR2xoAtFJ2Z9ArxW1rbtD9F5KiRPChMKNH1qUX2R3W5tP6rKRKeg85gZryy7rbXZvw7zZHb",
  "key9": "4jxzKFhUmT4NwFt6mAfebktpQkBrAqeZ5hMt8LfvCaMX2uhBBWW4JRNhzkbnMfSMzZJtU3wqNRNqDp4rzmmsXKmY",
  "key10": "3PYm5dSz8Xau8uqDXvXGSpXNCpZH5KTA2xAF9jjrbxYqL9vUFpZXXCNdiLNim9TGyNM9WTP83nG6DnsGAWKnDFij",
  "key11": "2qs16nzEuwRVinE3X4jJDwkEvon94qZJXBcposa3KjkqfkydNFCam1ZZKUkNEy8CQyBn4qpsqnUeVgTCFFrXRkWo",
  "key12": "2ymp7TUbqppQF9Nra98Y5zyf8xgsB1NvZ3HTjrYM1VQJQduDK9zeuMVRsMcwEZhzahjoiNXanN9Y1PQw8h68nXae",
  "key13": "5h1cKkCmt9NdUt1Z2LXUxvJX4tcjUspe42iBcRy8mtSxncW3xPxAsjZsc9dBdAZDWTGwczvXtvqbZdGTKRFoWGE1",
  "key14": "6667dBbQsGM97gj5G8sbxv9C2maKEDRX9hgNiMwFk9xLmrH6JFpqecWNmqUf997UzPDD3Vjz6ftYiyxZ6RrAFL54",
  "key15": "3mdUo8Q6UPTaejHryRwCXc41NY2c2h1mCb2tCuPoST9ZpcxDqFKYhuvF6iHvydibhfo7JehfY7prFRGhhuYwZZ9J",
  "key16": "8x5fDBfVva7VZFQVWv1UfAmZChvRx6v3yfH72MBLfGEYbL9ssnVtHSABgqewTqjSk7Xwn7wAvsQFeqTjiDVH6vV",
  "key17": "5PWmcKKDqjVBDCDwnWLudK3StLBgzYRRZZPKrc4h9NqkjGzxfyE6831s6dNA2S9WBgTh4RGax5aEDxsTNYNjsbko",
  "key18": "4ddGfiryHxosPPCNPedwy2kuL6Ai1gn6AF1Bz4Vy4vPU5AaU6gJHezPAJ97hdTATcrSJ8KvgK2GasCDhuYLLqBzV",
  "key19": "2wSY1S4aF74J4o1DuzyDc4mS1vvRZUqHxB9j1PGK2h3JsHJuNXA5B4sWkrJSizw2RoYoyTMoYPSnQpx5KRA1sKCm",
  "key20": "ZrELqfpmNCEeQn8EJtG4Dv5dbUyrj4yXza4ZXxBq5s7KfQUHL6kssJKrcwEZJCUhBYAceanqiKiNoMBkqh8Giji",
  "key21": "26mjcdtq4BkdGQEjswRbkE9bR5FgEpUbpFCaGmUN8mAo7pCPUCJ8bRbZKUWygGgFbAYPeyNeR7N5YuRiMzMG4niz",
  "key22": "4p3tyavDzYgdTcxRFXQRuoKTBaxFgbc8C9E28gSPZHcbTtcVxpZ3DxhiXq7pjgZpFq84evoPNfJexNG5CTGJn9gW",
  "key23": "2hxZARDny3QzWCYHi4YhGPJYkDmg82kNtQnxsvyfXGsDaXVAnpJYrPU4gtvi1Szbo92obxCSGweFYLMmPdJMhgd1",
  "key24": "4Za1exs6eaGyRT9aGutW5TceM3MhgSdaZYRHxQDgdSYJTj9xoaZUhKERfPvc5d4Kx1nN1DYsgdMKxbdCRVP7Th7b",
  "key25": "2VrWJgFP53MPxe7Jy2E6GhbD1Sy59VqMbvFSkDchYoQgF2rWgF2LtrAQjkztMAxBSPScwh1Hx17yX61zZC8fvoi1"
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
