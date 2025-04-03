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
    "2CMbZZaH27UwEhuGB5ng9GDhqYXNmeyNQNnEpjjRYJX8W11hcBN42gVaj2haqcTXE4Qr4f5ngWNx1juWnUGUz54w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ny2JGCFK4b5vrXR2nLZ98gQ2xdN1vapj6W8Egejy3FV1XraLqNJKHvdn67g4r3vpXREvZcQx6bDLzE5FjkY66VP",
  "key1": "3oEGSoHySRwcYFfcm71rhKENoGBPx7PfdkLACzWGocstsrKDzQWVzZmbMiP4e2ac9ZtLJXzq9MrG82MSkjhKAcBT",
  "key2": "51iVfMcHes1RSEsAAMF5BygoKyrkNHsY7bpmsJ5Yfnt3Q5Q97jwNTd5MuT7RZDaJnCXgWf1tnMWq24d6N1bDBBjg",
  "key3": "4DrHvXPSFsQNQ57U1NG2dbtg7eU8BT3gkpEt7U6Yxm3UvwvAfSwV9wkQ31gHP6bV73h5XqFzYHtJF9XdLcTzf48h",
  "key4": "56jey6wNWWmUazbk28VUoJnU6yHJNgN7K5EbDTHqvvpejAFuj456twBhJEkToLhC6i8acfQzbUDjuXEud4Mq3iiC",
  "key5": "y7gguYkAeniNJzjbRvPifjBfAG9D8K9PkBWX5xET77VFomtX4QeS4NBjN1dPg9nFPtQg3jc4t6ErpESSGPLtCHz",
  "key6": "2V1Vd4Ha1gMqq9Tz1MkCjaekhSgZAfoj1Ay6az216epGvDHPSx41RxFxt4vUnKAYUYBd2ioAyewT5eAKtHboTt46",
  "key7": "5SeWs1dDGbVjJpUykFuBVoTUXmBk2AnSotGShoXxzD2kABH3nvEcmJvc6wkv2wBwx2PwzqH7AD6mTvUmyLbiW5o4",
  "key8": "61t5so3m1C1xaUtRtgKrckzqbDhEavnLcyTP9vwKdVVcaKGsPGTNMLmZyj27MhHEFJPGyLMqw9qs4z8Hyw7wC9JJ",
  "key9": "42GGw9vVtH12k3VAYeXaDK7FQHrY71pYyruECmaN12du6q93Wsi5JhCWCVvgiQryrkr3uhqNWUdECsyTfxqGAc87",
  "key10": "3n4EaBZ3jPU3Dmagz77GLBjEGgdwiZTzbcoHPnNpYcB6Ycs6YhyYvxumpCZ4vpVAPZVQSbb58eEu8tNuYJgV2cq1",
  "key11": "3iQyKqMgxXanLZmYNS6oZsAMkkZB2Zyqsf33rDQ2rdNoxhw4EAFHKiwnPFpqo8SMobKQn8BddGhUdmeDeR8NtZZR",
  "key12": "4Ppg8T7NtCp3E2nqm9udxmmBqvnj6Y6vxTDjZyFerx1hYWdequb5Msef25qAgAyqwuTRUhLC2oJp9B1rxtaUZjbo",
  "key13": "4WeoNRj2SWYAVDuNRZNrhdxaUYL1fguStT6tQWKsQ38oWcAXJmnxZegyb9qBVFDLeNz1A3rMt5FMPrufoMbgweVf",
  "key14": "3DykmFNQQrMX1AQhJkYVfhhfb8SnS2yC8sfKzhuEKA49epivj74Grg16i8HzPxeWMwfCsPCFkRhAPHB2tFiFDBD4",
  "key15": "5CswLLKtjQbUs24X1GgLx8iwXVKkWAbFbJPz4hESY1LTVhp64TWPCHv84wF5uqGq1NgH7mec3id38WHSNiU6fxRu",
  "key16": "2HH2Ys4ixq6rk94Rh2Ayn8Ux9DGVS4gpaXVX2EVWNSoPT4PMRihcpZzv6KeaPm6K6MiggyWvjLsrqg3YApjGk5pS",
  "key17": "2iuLYU6Rh9NCra7LpxctzSZ1LaRr2DhUjBV9j6ig4mZanbyAL8ovJuMfHNwXUZpv6qRuDHtKGe51JWYhv2tNBGHY",
  "key18": "3EJgrboK98XCo3DhPNcvUhktQCM1CS6qNK92zSkJ8HbMKjXKHLDBMHFX2zKBZcSV5bbxbeVHhfYfoWkq6GhowfUF",
  "key19": "5A4sTJ4Z7ftoTA7fUzGwQ8By3XGBWyv6d9vdC6SYbzB5Hqk8ZSkLow3rqtArxzjKZT45zxFihuxcg3uJQMSCpjBv",
  "key20": "27dELDrNyB74NRMSrbLyh6WdftU3rLR18YyziXn2Ay6RKvX4ErdtPN4RHsVBSv7QpUNSHuQn8eKeUYXdndUNY9N2",
  "key21": "3AnrPpAQTvezXft8ZTy2mos35ViRYKcP56erqPKno8CiPdLRtp6i3gE6RGZU8xLxgVwDUpvVkuaBMaq5vUqsaNz9",
  "key22": "32NL55WWS6CBrJkQ7y14U2A5K4v3MkMmjnNxE26Lrm3XsTkMzz8AV8XhChW7XYr6r3ivVE6zRqkiJphRg8DuBbRo",
  "key23": "3x3xHQLacowCP5DALeURe1hdrYrj3VUqpLi7DtRWQQQr5Sx65mi4bfMSBK3pzt11XwobqpAHTZZd45ApPF4PBKEP",
  "key24": "64AXCc4gAUESbSLBeUCwyrc1X9tCDBpzJ4zFiLNtNvgPMc2Ejkv9iVeThqDY4HSuoZMhQEh6NWg6CzGtZATq7LoT",
  "key25": "66TZ4tUyqxRKWig8esvWnTP4ZrimYB4zgs5t2uGKMrz662pY4CeEVHpRvXxyqo8D9ZD3X1h1wzxHRaTHbAYMhYGq",
  "key26": "4mZmy6dtu5QotsZ17k6mEhe2dgaMPpeuaMa6AVqUDQdcEDsmE6yXP5wkKuYm8B8wJUhQeKTDx2iu9L7DmURM33g3",
  "key27": "2wD9cuDEBECC5HU4dpgApNwtzuZDtBY7pizhq1zeXc6nYMCje7XdR81JeMNJ7vTvTYzVkWu4UGCXGUqDYNG6TcfD",
  "key28": "32YU5yR8sXsieV9z5rom5aULL7MyNdxHhqFjNKytdQu4ZjHSe4Vu79bviLamUSdLrATjFwNgggKyQvu6aHuL8Xqb"
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
