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
    "3n4DEyqCVQCeWj7guodryKwUmc9Q6qRYLUCzeMM4ngjtYMAuQdAjcjDkPidDNVDLDGxaNshe4ixouEc9F8wVyyQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TXWQBmHYAgbNSd6gUaFc4auuaXPAoVB44hPLHioBXYqw4UyNQ1hmfUPXdAuPWqw2seAZZNa6viAqfWxa5ePNoL3",
  "key1": "28n8JmhwLNckrZzaqTMLorZ6fT1sJTjUkPf1FC11kUujhKRSR7zS87BfBPgP49mjvN2vgjJypF5ujXvcjy7eK97p",
  "key2": "2Mn7Q4AoqPN6fqp2K3LhRDiDo1TLNf7zFaF8DMJdfhHKZ6TuKLhvL2ZqdHsRYaB54zdXhstaQ7pCSrZdPwNHAB8a",
  "key3": "Pfam8J9j5hMqymry4pqHmKvaPy5baPHAEkZACbgW3RFcdXhQbE2GH3qarufzocqrMVhrcq7nxUCPjJxNSKWXLAB",
  "key4": "2yjSYn318q9Zx6vUHKYzGoXxsNF9mHkGiSgDcZ3Y4yRnwJqqbazU3mzp9DD5Ej83phGc51DCJQhzuBNRrGLtg5tY",
  "key5": "4bfTKXhU2WXqxvPaqVq8xiDkjnHgyxnGPySQ695aBu2yBRMj1Rb1vAZrGvRdVQL2ifK8iEq94QYbcHK7f2xNJGNJ",
  "key6": "2o7nGhPS4cGvV7JiKpev28vp4F1PjEQfRK3ajEX7vTUm5yrkCVDTixqgRcynH9sksdSPQ94BfQuEQYKfwtYqwWxx",
  "key7": "4am7Nt377DB1g6RDe4oDHHcGHaJ8xhq3xtP4nNhbHyNZEzbbJDkjGMiXzdu7PFia25ZxHvoNnietfQK5UxhACBUu",
  "key8": "4YWFf4i4u1GUg2ALHKTNDzCkKoz5GPfyvKh7NmqfQmSZ69W1W7rh1uhSTZQ7jKufJyjzURJRkfjPux8YvSubg4KX",
  "key9": "4ekWA6hmoi6iXVP5qMdv1tTJVGRwWn53dHyyRJu6hNjMUpPFW5nqchDMm8KCaBdbQMfykJk2z1q3885dD26WAwmR",
  "key10": "33wFsDWFvFpoSdHZfkCWhUCa1kMC9Jv1yy6Kg8AGsbztpPvJoc4Sc6UJy3p7XQvoSsXXMr7QTKDc7oLH2FPri61E",
  "key11": "3ZsqV6UWL1rzaR2vKqpV2drkrshZF2oGX7ap6fT3khX6xftgXrBFjme8ZuxxD4Ki7NjWFKdqMoieQMSJ3Pk91tvj",
  "key12": "2QbEVwyBXpuUdHa1xQ13nrAY9rm4ooMpwDiPS59bCNZoFS5hpwSxUe1nZyrnf9VvUT2Q4UVFWDYP2GBWV82CfuP2",
  "key13": "FToro8HRiqVnmo3K3S9CtECXWGdW6YeiBg5Kes5zSP52dnTZR7ByvtwS5Y532wEw1P6s2FsaXBGanuBo3U756VN",
  "key14": "3VQXigd7K5yhjZioJxWEJHC5MmZALUE7oxsS2uLbfmw7xKF4Jww8HXjSMdbrbzK9dZnymRzGwkatyk4v52xfet8F",
  "key15": "CyaFPa1oPHWrD7xGxiCtKBHGBZrd6ZgEsYXwqhqtt8EFsANW3hbRPQEp66GxB9EH4yj2S1iwpbjVpXAtBDCnHsv",
  "key16": "mP8WUXZ2hXx9M2faCXUmMPEmHNzXPRkYnWH5WjGfE16SqfgrwjW6X4PVqWxuPwn7UaBtvtuk6Mv7NDJp4KP1mKK",
  "key17": "4kuRXc9neBvJSE1NzRLM5dTDL5jw7MoQJq8F2hRXqKFRjrHCeThVyW5mykfSCZGLhKjqcm7RXPfJ5259sc3iSBEr",
  "key18": "4ct1mYaggPbou9xchJJv6WjpvvBD1LGG2uT3PZNqSeT7hJE7jFjmsWvvspJ69ixfqbC66pE3ydSzm6Gqsr2J1T9t",
  "key19": "5e2XTWHqsMRuSPFibo711WFFiP5Db7suiAUSA7c3ioJiVrszguzsgd1EbRhoYUCFLHD971pJYtwhFUgBwwbQ5CZt",
  "key20": "4EhGwNPNenTKwmhsS3WNJJukAnLBnPLYQhEXjdSc9FJwPHp3EgoK42AF9xq9cxJr6uaHJA45FUxqqqokQ5V8hsg",
  "key21": "4JS5C17Ch3zCy4tz6fFHjpoXd2PNDzrw8XNoCAgSvsE6p7kq8WKMkQjqZsqEjEAws21JS3CNGoAZ1RH9W1r3HtZr",
  "key22": "3VXwnHKmeqB8XHAAAnv4M8acP8h9kmnPwujTgRPpRihzmxKi42GjDrCSR8ULdq2YsUSumdX9qDCXsT8Qh6jXm1Bo",
  "key23": "jtXG21HCHoDEYcNyV82DHcquHBHWRBo9FscX49S524rBrLAgmxzJ62cdrqzDT9SSHFQqANm574tTnjA7CPG892T",
  "key24": "bQGY3j2QMrQcsbgHACnWsnz56EhShX3EWcvhanAem97zTndtgcfqAjciwJnTmJNHzk7YnwSC9HhLNeYau5NFfob",
  "key25": "5Fp2gGKZznYYjgSkkcuD6SUZgoHaWJDxgxy35U1V5hrWTymugv3Tpk2Dv7LZ8mmZ5oWDxVVLsBzRmsnDZt3b2dXm",
  "key26": "RHr2p684Eoi43XehkKAwkesrtBvcKbjLZMt3DnSqxLQWaoacAfhtnzjDb8bxAEUgg5qk96Wiq5AfkjUaqfEyXv1",
  "key27": "4DderggaxBmDo4NUskzW59nQexYo3Kc1RLR6hBHeahEuHg2HTecipvmFswtEw2JeurcYTrkteFcYeNUBJoaK9ugz",
  "key28": "3v64qfuCNbNhvgrWBzNT4HYrNPn7pj2wffuRq2CxKjbU7T92aj43mDfjpFGBcsqxpMJ5Bd8Kizv4LRV4YyKbG31g",
  "key29": "Rgt3RxB9hagWuePwyEYBTigV2sb9ngRVg6QxjiS1JDhodKsbwZ9P8yFJ8W5oZyvX3TxW4mp1C98wYVDTX9osx2z",
  "key30": "3kpwQLGkoPRfD6p22s8urYX4AzMwySfQuM48mRsRpWY9ujZDgzsHqkbjConNAvZbX7AkVzwscJ8geH9b3v8Ln6mJ"
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
