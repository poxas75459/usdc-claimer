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
    "5USzq4D9PVnCGiNXF3tApbMBuihkuMZnKHEUR76jMf2eSVp6UBjZSVWZbjCUWYCyj8wTLaNsQBA9hwcbmuFoSVRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z8S824ZJ5cRMhQfqAqJdPB1un6VTpsADk35vHKsCZYMsxJQMWvPFbqdRpqEVm8yuZiVMMQeXfTadFK18jWUiUc1",
  "key1": "4FUymzpNiDmvYfmGuB6LZzqnnWaGk9x71xCGmoTdrEH4wGDdXzHuZvrhJ8PnRdVUQAyUJ5tpRqAnqe2e48XRLTg4",
  "key2": "bj5Z5e2115Nvo4RRGK2MndRrh6dZQdpurq7eB3f5MsSdEnkfa5iFjohVNsHhf3aWUZSoMNSXGVphdrEfTwNBApp",
  "key3": "n9ad7LsJfvZsUdWa1jxm9uFWCksh5WtEXXzUuc7QRVFkqbQgZfVAvepMc8kY7kaxWpYdDKQfo6yzCadvcKXwHRD",
  "key4": "5Lqgh5FGxgFVCJwArRCNYyUsujsFUpGPdyuQJv7gSYuZfs1m7rDyHV9D5tgeN2AYvHkB5vgEHFNvt3GxKHBXGzEn",
  "key5": "4CQT3k8Mk27JLand7MtbMFEPgiMBvJxbVKfYJGfp184mSqn3XfgQjQP3SEc6iQzEh9ekxoSeomDei8c2av1gdEpN",
  "key6": "4dtUosnbMqFmuzyzUEatHFoHPF5VP3DCX7XdpiQML5pRPrSaCPeiL3Ra9xZSN7aRm85mHJMsZre8NQbKiKQUpauL",
  "key7": "3jPKmzq4HB3SAQNUitNcRFGSR14Bi9NrtLnfkKf8pvZ5mSjR5V4LS112nkoqjbrwc8M2tGEQ8ZcDNgZTJ1QtdzXE",
  "key8": "4PVq5uTfsdyvux3kytRvfURw1VL8f1C86kTPN12nhEqNEKVvo4q8EFATSVtiDvk6h2nmcH75fNqr5VK5K5uDyvUr",
  "key9": "4GRqSSyJHJLLoN5QQhQmJmwsnTk4AMkNPXDtzyTMgRqzw7BFedZ92WkvP5Nnp6p1NMuXVDzx1RevVVkMbq1JQQy",
  "key10": "3iHcE2YT8cEpKD8DJ1hmwDQsuUFQXPbNBG8p9DKvqnscfrwCofZm96pwhZBfgPtbBzRFKpbrgChyJ2zQWc4wKHfx",
  "key11": "2vKM7zCSiqLMH38C1DyC57DDFJXzdn6A32KPcqGreWCXZuZjsrGoeTixYJ2YzvGqh1awPy8tugyqPhpqfu95HNDj",
  "key12": "5YTBk2t4Xti3k2umWm6jr3ttVzfpcirQwZMKbkXMv87DovdzwFFr6VXCH7fcFRUzQzwAxbTxgkevy77Mie56dztG",
  "key13": "5vPqh4wVhf1AvGUoXrQfibxhGngsYygHNmvJRaQiUvMGnrazBzcGViiNbfJ8u2afsBRshwptJG7DQKSP5eLJiw3S",
  "key14": "3b8WNtwsE7T1bFAxGgbJ42Fa9h5AAe2VoPZVw4vpcpVzanwi3mkkoL1NH2cPSHxV1TQyPeMCZGatCmnhyWGKDqUk",
  "key15": "5tMkibYYE7EhGytqUeYMf7iQDNyQdFkW2NoCt3AuadpzyqgQWZmaceGX1wxuTDdbggf13F2XbRuxoAqK68BAox2Z",
  "key16": "2EwSaXkURvaifE4rtQjsXps9knoQqPaiPz8Pydr87jCqgv814eyTckZgV4x6EijYvaDQKGYD9tENzePXx1GU48Hf",
  "key17": "5Fn9RmfnxE3oiB1oXyYEFeozDK7eMSBqkc6xbi8pcFbjyDLSeKLBYXVPRbyAVKbpaug3Eh7PthxAanyZRUWSyjwM",
  "key18": "4pkjxWmm97Jh8X29K21pSLT4Y1CiXk1s8W768X2tu7odvADfpzgNZqHybHDnubJhngA3kT5RtTW7Gy9CYboKfjg5",
  "key19": "4CghV8e9ER7FXvV9pLumD7BiuDzaDAFFrS9QXuWkbXKEn83VjfbYTeAyHaGjUXsn8GN6eXDvduvrWximNaRsPEpT",
  "key20": "2NFW77Xz4ttZBaNpEcUydpRxvZYpgbkmdfCiYGjYgeBjkrFtANpzEh1C2oTjQfHEf8sLFMmWp2h1Z3k2tXs1Uipk",
  "key21": "4kFGUR7Ehm5KS13L9HHT9JfxF4y4aGkEWX3uGV1PTuPBX6YvpsS5YoBHo7QdGLFaEX85ELN41PJJdzVsh5nd9zNn",
  "key22": "4XdfdnxD9TBwDAeMU2v3pQPmSPnyowUUuSG3W641DLXPAcQr6fcwUrGp34kJTkR4KfpcqarSEkGjMgzE3GcLjFwy",
  "key23": "QMpo1NvQqg3HmMWNG8aWnDfreWPTC492Abz2bWzf43h2BREsjyuY1e4y65bQZgvMwdTS7t1CDdBKHCaU3N8bngM",
  "key24": "LvZrHJH52onfLV24Hs11Di5e3ZhPEXdnvNjioi8rhujNWi6LA3cYkMF8vKb9NgiSNCeJcYjxRowtp2pWqrVrc2Z",
  "key25": "vxfjjJ6xiCEtDTgyMkXn85XNbNCX6uXVRsh9mGYVLQeQto9dpo5S6FbJ9gFs4o5zbe3CvGWS6YNYM8tYg3R6Zyh",
  "key26": "5DHCf7ji69MdFCvRDBCiGWPQTp28RCh6KPRaghan8KSqGvk3ZPa1odFuRZHAgzDUtkcBBjbbR6t5gfeN9ytiKNJq",
  "key27": "3jDX5qfKdtHRCpJu7kzaCtCxgwyR4Vax58XfYzMWsm2tzxxwnf95dNbH9zFoam9kRHVn5Y43fwtRArvHZnm3z8KC",
  "key28": "56pT523o9mi6DJWmT4VaN1tTmwT4TeJGhkFSuUZEU8Vup6pPNZChkwi2hUXeeTezSN5XyNaJK6ja6BLDDuM5h22c",
  "key29": "4ZsmvYNT8wEKgF1G63zyVq4V8SJX1VYJu4m5oPnM1q6hcGgaPv12Qkn4Q1AddJJVJMpupDiEh1GgaVskiz78Z13t"
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
