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
    "e9ZxrFGMYf7EYangwN3Hzpx4zmbUoMpAmdFnBGNyB3api5jzHWExhGfJjzKv3829fdSfzjJv3mruJHyuAJcpmCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23RPwfKqq2Tjm95Mz43YpPJF9Wi1DXcNxsx1z9yEVyAFLeknWMYjqTqoKMbeZL82v6d963B3xrud3ej7DA4utLLc",
  "key1": "3MFJNhWiJVCnvvYuWmcra2hrhhpXDkFxMVA1HB8s9UTWLebSBmLB3sNghasRKCvM4kbvoZivH7mBJxe2j5mcTtoN",
  "key2": "3W9aT17JG483ZQ9vDPAwT1uHcTMSjaWAR4sgSNtxuDzSwvZYUcZay4hsWqXdiaFiRwGVAHeCKA5W7jAdReAJERqu",
  "key3": "3nxaaKzHnPzXKfMYFzxwosLcq8CphioebZegeN9JR1WCi8S194Qu5xX3F6CW7pn84QVz1d8mpN6gDHnZzEsKWChH",
  "key4": "z9b7YjseJgGidd5D7k5SbZHBAXBy8uSTjxrwqMwusM39owqzrBs5FKGibQwWLRb4zMH888trwYba2DA97VFaJ5h",
  "key5": "cHJaTsw9g2zkWf27BXeUSGgVDcpmJfubo4VfYKuSNYb3AiY8B1bmyW82ukYC8KcyMfiZLbFnnEqiEXeKQ2DYyG7",
  "key6": "3W4mwGdthKzcLuZBUwutkianTqQmq58orto9LT5TLSWvZ5SyNRvvp2wY7Dqu4TuHtBfrdJjh8JkBatz3nr9b1YDh",
  "key7": "3okdbpLcHnwuLeCnwMYKdq3XEPwm1n1jQwuAuiD29hX6Ey4v3pFBj36sRY29kD9Kieg2t7cAxYzxGG13gMnvmDde",
  "key8": "3dRbYfqXwLZBTTud8m3NNQ7o6c3HsU4pnKvwFM4q1htXXcZEwS1XuamQj3sRzDgCVBXbsiR9rduWiUb7icpYypdy",
  "key9": "5tyyquDpqdLr7PpTh9iAYjYMVqdrCmdcphjzXgN2zTCANztLkrKdCe6Jj9AMN36ShCuuT4d6gGwh9PYufNuLT9Aw",
  "key10": "26mRWEugL5KikbwwVXAtvjAtorRsF2eer64TEnVevL1WWNYUnzTtfDj6XiwJvsgT9HvPmT9XJ3RBk1nmwYiJvAKv",
  "key11": "47Lo67Nj8RyzG8gz93JMNP937NQZSWCnRxbwB2RW81SWhT9LFnFEqyok8k7GVhTyMNiEPUbUXLBR8LZUsPUv6twg",
  "key12": "2HycMWNj3uzG1ifLLbamzsbT3MY6ZXU91LpV7wRqyYPLoyobGyrAgeVsp1A6SkcxHvq3KVCqDYMNgrjtPmXQ3FuV",
  "key13": "3HqRbGSPP8a9291H9E2ja9JViPKuzyCc6x1uHyLLLkdACnqZzjuxCha1Nni22DR6HXE6haCVz66xGNFH9oVpFJjd",
  "key14": "5fx87h9wjpuMKkTsLuybCUmMDEAtEgR2GvaaPf8LVTtzESoH8HYtjFsZe3RmVovY7owL1BRXCULH7RXu7Pv3yJWw",
  "key15": "3vdBtu5sSSptPdFHDwWyKXH8zRyBGxFG4bXpiWUU2DK8vNHadeNYoAH8tiayTgcW7onAmovmjHfrMRJLUoCk7X2",
  "key16": "648dCD1YZfy5gVhYmYuZwToP9zJEsTe9DhoCbWHiVaZcU6wKnKjruQBGNZ7dJmpnrXYr3W81h53LEo2aN78Knm47",
  "key17": "5huzL1EKs3ffxuCZPRD7bggEiGKMBC9FJmpJkiDGxkZUoEc3eYPZQTL3w9sTaRUVtZd5m7EdVsUs3XZJxsDhydRh",
  "key18": "28e5M5upSyN6hzn6V8apA24QWoKrjDPktYhe2EGSEatFAo33h2jALkRiWiK7YTsFn4diMEikkYb9LrAUKU2ticKm",
  "key19": "3eTciYQeo5bLhQdMzrn7j5ueikLw48V67n35QEvqiLEzLohQjXwgKW1GMctuDQe1PfVkx5ze58XY2fGCyq1snRrQ",
  "key20": "2bjnTWh65PzczUm3uZbzff6dMM5SGZ6Zr9rem6GW5V8sZYo5pSRuSZn9jiX1NGW8er3pLoEuqK3aVTqLkGzeVUDF",
  "key21": "4nPCtC2jNadp35EtLpGvQDEAs1jgPfFDu8r1pPrrxPuZMYE2HKiAi8cYvVpJki92ASJi1g5h8c2KA1su1x9jPbwA",
  "key22": "3HKKTCA3WZxMb3nzC2fm4m8AfjXdQrDnCj3ADkWYeGsnuLSNN9LXXQxyBWyjLESvEGavoVB95d8xWYcm67TqKUdF",
  "key23": "EucdUBhjrKwkkG15yn6JHDdoFHRSTxwYUJWLqgYH4FBUCseNu87XR1PHpWtKH5Va4e6Pk4TcXYY7NzeZbJhg6B9",
  "key24": "52MpRawiM6MLxk5gjkfxaFQDjemRXjBb2tRL6e1yDko6VJtsjixea3dfznQR349XWozcCdLYibm2LSpE7iA3Ncjb",
  "key25": "54b3HTocLREPS4rPFnCZTfTLQTCausHVgx7jEh9Ro559Zt9TqbpNP1CnKi54E7JN1oSTZKnXPWktRCcWGDnV1Ebp",
  "key26": "4SfENWXmx9LvxGmuziW9NYyeMpvS25xR7uGeJv1zSHMnrPikucGq8x8vCi6YEfje8VvpTAMgsXWwyviNcS21hRqX",
  "key27": "61ufeXBCDZNzUcgTdVbf2cZkByvuBtjzLJovEEKJCa219oGmfYeBod2vnd7n5fjquLAxpgyHoUSy9V4P5pinj8yb"
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
