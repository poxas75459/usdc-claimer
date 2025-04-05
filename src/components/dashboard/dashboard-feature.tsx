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
    "3ZfsfXMqJKE2DXvX59rid18BhcAUXD46Q5yE5HWQRHfGcXAYt3JKNpUc6F1m71CRiQWUxc7nUQxcruobHQuSUNpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X2b3hrcijk7zaerhnA9MAKAZTdfnXENRAJtR6EYh7NDR19zZwRNT7tVqpPeFKDPZASAJJ3RQZBf29CuVnQ2qPnc",
  "key1": "5Yz7QtRMXbPzzuv4JqYXqRAQ3Fpsda9uncr2Nj2o81utKJxcWBLpFti1NATUxNPXr6TbD8FJU6Ybqy2MDS5pASWY",
  "key2": "53dyiP1afRu59wEf7Mzh3dE4qgLAVS1mEb77NaXEJd9SYtPjG5TRtG6Zjz4pi64T1t2ozo9au6YGEtATcoBJRtLo",
  "key3": "3AWG4Cq6Tp7qnUjAhUJUFSiD3aiSFUhBCwaPTzjESB3U55NWaJknXjND2uigZ2VGyxcydcRdR2thfd6wDTRMNbM5",
  "key4": "5xob7C52x3B1Cbv55iwfzzouWEkhjZRKA2SWWLkoNxrZxwt3M6z2nf9u7EcREoZ9SAqxEWvEREsQ1fe78yKkRZyY",
  "key5": "5E7ZbMzvM8Lf4xJZTTkWBAnPRTfh9defS6TkGP7ka87EhhVdsyAA6T3iKbzkVX6gYXkMM71UJyj3wRoFNACfhh4X",
  "key6": "3gbMkhUs1JxDETk6URcXosfMvC7oirYQTYpEwmRQAKaeUM7kNKtYkgjrWkXfn9SHjt1NZ16DV189J9cbZWCK5F5X",
  "key7": "5CDNtBrk7aNTCbKkNPKBazeybFtT3xkzqj2d3BVynKjuVTrZRDYiBugj6rKDzf354sLKmxazzXRVLMKuVM7AzsRD",
  "key8": "3UbwnxU7LUMKHmW4ATpvFW9u5kBhoGnqwzZt8ywstsFtBufEGr5LMqYXYhZ5HGG66ErNqipavA1YVXVgj6avZpUT",
  "key9": "5p9AJgveXQVu4QNuZzf4ojeHd4Eav76VNSz4RHsLri4azC9dBsQCXxWNRU7ohE4XDnfSxRns7LHwfVhosuVmzybm",
  "key10": "H2BUKHmdA4Hv9aca2gZ3vHqyai4hfPgPPCVS2JLcJuGBX81QQQcBNNMYTctope8dJ9nkyeTwFSedNyHXvRZpYq3",
  "key11": "2A93ak8s8uHcRSCHHdtJjyWnkKPa8fhQeJbU5pi9zPmwhgDxUwxfBHLwhxHawmGLP9ENTtQHacD2kDtwXtDqg1Vk",
  "key12": "2L7hfzTMjLQk2RQomD6Gzo5mvNeY52nXcgdhJGfMbxBkRrtbpWFLAj546HPgeLDCt7Q18qQKs5V5ZUJGzf6cLPKq",
  "key13": "22xuDSkdk5xhgD4DDPR8M2WaZTtep4xFy8ih18Sri8wT5LVfZ7Y8fn1MpRYCpb7cwK3YVnFFAUQ4WbqL7bhHuTKM",
  "key14": "4QXB7dYryWwJKWemUTgX6DYdVFCYiBAo2sqf7xNG8dXBBNnCdW3EjmKLhb8kExDUQ8tsoV78nz4sdm8BrmNe1fPS",
  "key15": "493czi2guc5HJs1TQnjErfJ2eUmLU3PM2PgsmGfqHR4b8M4z3axUnsM269eN4raNL1YiHUPeyJQJi3LZP4B6yuct",
  "key16": "4qyjkCMWuJkAk3PwRPuALZ2jccYQF5cSBppVpnh4rkd5wMfxTkXDMfGPUNnfQgYYQAiQHkeCXfLPrYPiRL8zU7FP",
  "key17": "bkh2htBJ8P1cvCSMJxgZhcGjBekYbXtemmj14b2pP23asxeXzHC68vfbiTTdVQecDqunJKGWqVZuPZYXnVX8C6s",
  "key18": "2b1kUb1fiyUSAsaUN2hNwsRhet6YZS6Mrppkz6UZbi3rcU6ho7y5gyqVQviv9WBawt7sKgZtnbm9Hnb25MHNFVSo",
  "key19": "47U2NYCnXMBmuqLNuQqitoR3EEZsXByvz4vgtN4mnHQXKER87ruagXvGJYcmGpR9pR9NJkK9opzW5HtEn86UvArG",
  "key20": "v4SBj2HkgaBuLhA93TATaSj7YbKQ4q5jdts8tEPuxP4abTE4RBRH7zTNkdTBzp7gDs3hE7eGYzrraKpQifY4XTh",
  "key21": "4qHPKfPuoCzCGVxjyvaVYdP795TpYuU8iekhi3phR5KG67pcGivmPS7gUVr3iBu6Jkjy91Qrq7Jdp5KU7mDH34yy",
  "key22": "45PU5cE6UkNUCGd5iY5NhkB41YJVpc3rdnDVJqGjhuaKRGqx3oj7WWJt42m2PSn16f3zDhM8syC1W8H9hQMESCdo",
  "key23": "fAJ7DsfuVMbvUAqpH2WkZaAPqoiTJ1MeRgr2zpj6QKRGubqDVf3udVJFBfDx8qv9u39YffqUxbsvinPGZnwDxrJ",
  "key24": "f6xed4BigeFvg6nGLJz2hSdfQq8manQjkujQkzePt1HtXNi9vRWvPBkLZziRTQnh63FuicpJNKSuHfqfXi8LFrd",
  "key25": "4HWAcXF6cPFZDNhdkenVjbsCRAXkR287gb23AKYUeKwyGXDxYgKsQ3ZuAqHPE83LorW7ukiuC3pXN7ypgQXe1qf5",
  "key26": "2xTAGhckMaeyF7mpkoEyWWvwpSsWSyWif4CGhB79K6XQA9yf6e2YF7LEooYavEe9VRAsEmjnF5VoiaKG9yJwQe9A",
  "key27": "3x41qbLKAMJf6urCufK13SM8fPUYJZSwAgYb79EZoD1KvjTKMcPeciq2NSD2C7mroNNwcwTyT1vxUe522mfr8RPG",
  "key28": "34opqa7BdoYhSVtFid7tgBAWJeAobdYZPkn5ZZakFt1gxnfoJHVFboL8QxkvKSMF3v9FDZ1Qqz98UncsCqBdSvc7",
  "key29": "pz9RvSJcbA1hSYxcbgE7ymuTGaAy5rKf13K15UGVGceQvTQNxGG9keNfUVkE8VMGXcpAzcJeYiwgTDWCp6tsW4w",
  "key30": "48kLJeQXKRAUenK9gWFGrxDchJA5UkXhbAXvfMv2qY2Z8FSQ5DrseiDWZ7JgJ3fZ5gJaozQ6HfmZMHWRifGUDEFy",
  "key31": "mcdbMHMpvATKt8ZF2XpSPSpWqP8XRZfWhdpjWdnxTb7i6CZpbJnDoX2nY6gcDwMuXg2xsDfg56Wq8iMfGT4joEq",
  "key32": "283gqv7HfGYpdX4KE7SyRTb1LGZc4kozR6mig53MQXMxcJ46gacZPibGpMY8cKwyctJFsGF9Waf4yiWtydxpX2Vw",
  "key33": "27KxxoVJseAsJTcS7h3skq1QsfDn4MDeL7WvDGQsN96xtQvuGa28Bxhnb9w7vFhWZ1My3Tiy8cHhguzY67Ca5Skc",
  "key34": "2PTaMmv51XNEDdVCgbNYpMQV9Mbt8JTQMsDkvnVncKCZSMsUZz5RgAQHLY5zd4vJVubgEAuKrojNutWXyUnBqCfw",
  "key35": "34EQQJyh8vtNKRnjZJrdfnfoRtNA1uwDYt3tRaft5MRUBJbs7nR4cJpztpksHa9V8kth4VnbzBF3qrDdXPcrSNWe",
  "key36": "Cb9fCN3uRrt1GHQELfUMtPj7SE3GmrXqqoeWvqsyo5VVwM65WcrYLiDkZyUrBnYFdYAka1GUjw8ovgrEpBzcxX8"
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
