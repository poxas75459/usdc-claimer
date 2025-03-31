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
    "4jTmPzcQEKbshc2mSjpq8rGhQxFifVjsiLM1qurj274dEL9k13Y5XyAjpJCg59XZW2yFkDQ72ug7MJQ66fRNq6Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y47Tv4hpKmR9tTf4RGBniT17GqFPhniUqqSbgkCbjdVmXCjKQBf4L8zNeQEoTgdeHtcbm4eCBK5zgNt4fpFSMW4",
  "key1": "3syASd51ZJLAi1AfTaHRqBCgmrtq1X9gnkK9fFaUCMom3ejCSHZDaZZwAEjpqCGdakCpE6TMA91HqiA7CqDn9RkG",
  "key2": "2USnVWTAhn9WiBUNUF99EmodabCmDFok5wxT7hSX2LXWsbnq75qfF6Q7BQAopG54LA6eET3GHEnhTaiwEmbBSCog",
  "key3": "2j47jsFALUR9SP7BnhmBN6QzHuGxAZDebNy93LxkRKoNQpqKtrJhcE8UzBHEAgqWez6uFjrfELyj9GhjSDzGDYzr",
  "key4": "3TqGPHVBjA1HbhZPXcHzVJDNmtMAvKd5TsXZgmxtwJHLv7u2AwxqzHpuQWbLqu2dPKs9jSFyWa8UWNGkcKYgtyce",
  "key5": "D9LHxqZwBdiYfrUPzxVZDtEwpe6mFnRESDVd9n4p5SczmhtocEBhebiCVrn8v1Tr6ZQRH147CncUjnEoypqQPBx",
  "key6": "2M5YkJ5N68UiFSrVsZBUJ8fufAXa9bCxr3XsQeAPpA6iUW2aX3QnGcmU6mctg1q9CFxFHzRks1bvcyhZMAyeNimx",
  "key7": "2kSmsveo3cHbJz9zeR3xdfAaughrqxVzZexUenJqHFFjfZtcwHkSFkc5dQgWbQjGwiPgeC37RH4ntaB5LMemtsPf",
  "key8": "3usZJGYrYtKT9yT44bsTri7SogwBtcysmjZBUWdp1v11f7DZ6T5tkeSu3ZzndwTLDs6k4EdkGwTSVTLQXLBoLiPb",
  "key9": "5nxfAPUVR1f2DZAf61Q9MxwgDBZH7KJKNk1yoVPK3PoTWKTonXs9nWHMqAsVLzxYDJHyZuuxhWZvdBL9v4NGFZeY",
  "key10": "N5A3CKHS36RyYey5xDHqZUVmx7Ku2mgqsH8haSxmSgXTXEpppV7jD62wZWHaG9KQQ6zszJ6hqhRQN8TKdPeY2q4",
  "key11": "AQMEoPWc36uCYBPrUWvjbnLngneNyBdW5Y8xVyQ3Hc5ysNzcZARFHWPqkksKVcG8dcp2dvhQm3x58aDYwGPVLm5",
  "key12": "4sntP7pHAheYcNyrrNDxpbo1d4Cy9kndQZv1z9uLMUXeGU7A3PWMq7KPmiHSXpNnj7qd5v6TpCUfnUnb8kEGG1dE",
  "key13": "4qu4jjZ7ETMjYidPhdUhVA4r6wzfJKs2GzusMNL7R6j48XEcVoiM9EebkBji6AAGDH5UyA4ai38jiF1B6Sg2xQGs",
  "key14": "3BM2ZawLamvcnDSjsSMrA9Kd4XS78byGCXEtwFZ9VZRV2cwcPKQ4MeC7LmmhWtszQG4MXeE8Y8jpkz3JLdKCq71u",
  "key15": "2RMunxKTS25FxQjC7VFs1GKRT4xUbvd2PdbY6Cho6jHFgPE55fBdPNPPHTYebz6P1CEmdqnpoR6aknb8Zg81H5eh",
  "key16": "wMWLFJ4zkikhXXa5aVxeTYkbPAynvEu24jpeUy7Bf8SsXopBSHYjStCe8GyGCSKE4F4xtjdp3jCFUNLDQAVvYkq",
  "key17": "bVtHM2topY18wPabrPzBaSc76EXTwebXKai2LcBY41FDft2KiU9EyiQpC7qd28FJ9XyzjbeWZgPmENBiQV71Xw5",
  "key18": "3XYe7qwCY8dHqmph17FDVgfU7UPygUaUMg3hmPmoJbkqxC6GpowsrnTdp8v8QZcpzqP1MP5257nubFaP8Agt5KdL",
  "key19": "5khooHjmZFgUidPfjSmcNVPU8LYqAkYzapX6CXmw3W7Fu2v9TBDPnvxywmenz9FcPJ4F8h4TuLFwF6MhWfJfLy2n",
  "key20": "27cj7cBwo6MVSZMKoCD84fS5D7fbynpfEMxbDjb59EYuYtjtvKfVMHZ3vvZWfDJSjHuiCZTcBULq56WRyMny1sS2",
  "key21": "2B14J3jftcWTvJfJa5uri1vrZe9CT8jzaDkQfjmqsLMP3M7D8ukinVgXUuqgHMz8wBSf5W4Bexfs1dqEMwpBWXZk",
  "key22": "6674kwKnwAxQgr28Cek5rrpTGH4DfRbVLuEDEJ1Wger7XNkBLPyENfU7W2MviQJNBbNEUZekywdaV3vqsfWhprXa",
  "key23": "Ax9dyJapkboWpw55JBtSXKMaUpPeWP7KcrCj9ZnxwaLUPVuHGsuBAqU6TXdYNundqfiUoyA3FkB7vDHLdY9f9MU",
  "key24": "3f2QphkV4WDHCPsGkz2nuDAteadcH8zTCfzYT8zXUoWDefSoGgbHBuFgjwjiMSiPGexygAJdzmR3w8FtiLZkw2ku",
  "key25": "2PFqdx3TaYM6BFP8QwpZRefzCKhoUgavsGrfyr7zZvhGvnSXf6KneN8tet3VjWJLdZgyhFauoBPmHrr76WMR39AV",
  "key26": "49pxxx8DHcRda3goNhHPKXt4qQx4YrQBf8H4xN9PAyL1qr4mTWYaPZhymjGQnUgKJ7yUtuM2v8f5pv6K4tS7riLA",
  "key27": "Y3gTLdYcd5EPNJkD9jQb3Wm6TPb2zAzNNXv8kbaHAzUSXLNb39MiYLfEoYHhWRnWmuzxyFzkD6XRrzcK3YCsvMS",
  "key28": "2xBUqBNdAhVc4KP2RKjd1Anjkni5tGzadYjX9AMVeN1XquR7s25MqqvkzGXUVi9qnXDXyKppau4dHznpwduGjrPX",
  "key29": "5fEdKSVaLjMFfdHEipctyR1m6puXSYVgEjUXj4TvVrmiuWy41mGqyUXLFsed7vgdp1JsfZ1mx7z13jnaQYSX2Mhz",
  "key30": "X5omAfhY1iXz4fxkQxnTut1RdzitDcdTzycqQLLF7Ny9AkmTYsV2P4XAW2yYywppoxySAwi9sutSe7FekK2QK1t",
  "key31": "3idDSaPYKHNzgEvWA5p7EQPe7i2HyTMNgjteQ7tAuB4PrgdzvjKm2j7Bd8xne7NZ9tqNPZV3WFXU8o3YNw5JqS8W",
  "key32": "2GCYFf49hdW3Ecno3RJSZ8s5dhD6uhSAfaEq6CnfzKQCKnBpQph268xUP76ZmfbPM4bVsTcPVzACKEHgAb9oUFmT",
  "key33": "5gFaz6gCTuaeAnHvGpgAQkE9qYbT2VpSw89v97eivHTzMipgRbKZG3i1Gpg691n6QzK6t5rffnqbbz74HM9r1WQu",
  "key34": "2SCWs9rzGKwBc7pkGN9o5Hgz56k1de485i9DWXmJS957Tua6wKLsyj7mr39QYMH81zEP7GLV7hyWHWqVptyJwJ54",
  "key35": "CEgEvxDEnnv5YBJdMpSMVmyrx1z93KqzNxTdxtjebe3rnZhaCn7qkgg2rqZkTvjR7vMS2zzo9aKBVrhAndnQoVZ"
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
