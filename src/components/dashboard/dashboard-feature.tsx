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
    "2Ec8HYYaqt1g3cPNdLdPGQ9S7xShg8nV3y4YrZhzdFGWD8oQBAr1qRYrkGHXvUyL5pu9r9XSqDCxk3VAXuQbDpj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M1KHo4Z4ix6aHdchaw7DYXK5oAxwA9iWt9jTH3QfyT9bTKsa9weS8yohZZh5uxd15Fgj2ZnCd3mEHcqmxwQ5r54",
  "key1": "62iUp3ECAi3NQb6sDiLSZ4EXSmAFa2eds8nkMgEynGSeBKg7ZEuG5B1cFTJoMH1oEAgAxa3hWVhsHBmGykSkpgYt",
  "key2": "2FBF8AiskyFsw2qyqy82RD6neR4A4gP94tDyv6c2xY2pGawyMFAyzjtyR4sUMwtToGabc97HG3g4jNChNxb3YV1v",
  "key3": "2ri8GGCqtHY9YmXdoW9ENxaXEAfHzLCa84E4WbGetxC5yZXjc3ifNemApn5Y8vHTPBr5Sbed41QUsAwdKCyPm8X6",
  "key4": "4MquTxgNSh8HCxyDHVzMb4stF7UQtHgt56UZHJBjfEjxPqhnLQuHWzfwkZoECpwwZTwLeiiyuVjWSyT593JdwuNG",
  "key5": "37f8RK9WqHSLkhvYspTmxZ2jXkTuvKc3QY27hMQAxB879VUbea6Pgbain8y9VcBPiv6hceNS9KtLAJ6T6oaL97Eo",
  "key6": "5dkpUZMS2eZBG9wfQibHRhrnFcsx1tiVwBwK7F5rHiQHKcJh3sYgMdK2RG74AKMVqkSymEDvc8Eru7Z5inE7z6Vo",
  "key7": "2p7KujHsL2trsGQFQLwEGxETy8fym4g92UukhrnvECFv4WCAVUPYcQVRNBk8pxYMsZfgwYaKHxtg5v36TqNyqAB5",
  "key8": "4Kp6ic9TaZdg1BtpsRWXoPeAZ9pq2AkfoAmHhmnUqc7Jv5wANmmw62EfxdAsaRt29FkyR19UN6tnK57W4tGkgLq8",
  "key9": "4JuZBz3NuGp1FBLY1WYKUrrGQkrUUqEiBBLbL7jkR2YvX7n5db7b4yzabEGWiX1eNfQ942pHHMku1Ditm87d4BCR",
  "key10": "3Gg1RGF2AH29CA6JZeCAixLfHU9tTv646Qchhv62qMZj718DYtTE1qY2Us662beeUh7EKabGeq2F3XVbRLBmJXsW",
  "key11": "5b2YxJbCVVrarSZ9BPvYwag7DJ1YMyTNqJx1XBcEXQMyPHp8y8UxQQUAWqAybEeXHGU1D3rDbacPfd6yNWnDwW64",
  "key12": "3RDbse5HWt79Hpb281ucFjfXsg5G9WchpdwXn26FE2u2FaAXpSLwozqLd9wS7NQ3JPTcVxCZv1c6ANb8S2CxBB9Y",
  "key13": "3rH9mzibewjJifV9UxkQkUb8ZYXnVP5ZXezXqG7ZMpQQKFUtfErQW1YNmCpcorwjKw7cxHskLepJkM3CsiwpGEYa",
  "key14": "3Hf3nDSVABNnn7CsWJA4sMifcx8MQWcbCkFwggiDgmgJJLqVbQgHvoTfJknoNy1pcmgDrHysWd9ZPeNweL36nuQN",
  "key15": "5TtsZ7A8yGJeeFPba4rvfQ1EizEXmwDcRgFxfrdxG2qnGUdKgxdaDLNf7vdvjWMFz7qUADMmXGeDaJg3iN2wRFGC",
  "key16": "5mLqajZjcyKX49twpb68GdbMuRbAtZWijJZCWbu9q9mLPNAqV2GekfN8g3CdCXybKPLjHvHrXvwN89kREbYbyA5u",
  "key17": "2eWfUeemNS5JjkyHuAi3ARZ8Ukt4D962qAgWX2eBEhhvtyB7GDTuhbr5QkAoZsoD1diZ8pcK1289PpGsNmWwgrMZ",
  "key18": "4RqtmLnfYhgMfE4oZZsaMhVWFNCLUc99DBtcG4ySLkCba2FpAsFPKMLxsnspw6nJ8tQd3CXs35fWDVL1GnbvZC6P",
  "key19": "4BUpUzZWMwg8myVJBYRJK18Esr5YmDg9KhkKgkRf1DHb8oJKZxntMTHvTX7k1pNVujZEsX4d2DMWstt6opmYmUYi",
  "key20": "36YnAU1xRQo3xPUehgTAbjhwoNsePtkSuSkvMUcUZHxWLeaD3zYz8RxskHKm6VazmT56YeYmTwVWQe9gfL559nYn",
  "key21": "43nGzhLyfYNLdzBr7g9RqNfvGxTmPSXJZSDW233pq7CSCnQUWAAkd2CAT5znutGC9n688mU7CroA3XY3mygosX72",
  "key22": "3HkF8eSw3ewzS7hx3BAywuJe4NhWHUXNCDHUzTRS8ZyeMy3FsTvCE6dZnHriU4CexEMbqTDcGKCHYwUwF3fAPzoz",
  "key23": "2d4BRmysa87TqriGUX5sGYFLPCqAfotXeWFYEestKdoTtMdkaAuNP54XqcjScFoR6rj8aVFmxvWEgMDEWE7EvEmS",
  "key24": "4Wr22pKgCsmwHdqQjgDwpmmLncnKbNLoVp7zCBKbXa9rxLq5HUK3w3gbtxQ3R8otam6FRqtrPfviTGySoqq262FZ",
  "key25": "4wpVLCUqgAFUxzY2dkpYofE5535vDYqrdRD4L3pdu6jZYvNfRtmQnL7aJpmybyD3RdnvoTBWS4rCpeqSTT916Mah",
  "key26": "Mh1ddgr8C1HS6Fxq11sSjgvvZBPnxZN8SeCDBLJaxpp1qgwQeyiGG1txXEu4B8D1kZKXYpdJdTQ1CwJ2WtVTaKi",
  "key27": "2gCFdWWYA7HF9SQRemEUeQuwLFtRQDpxwSsazd4BiyEsBi2SziSej4CJGUyAa8ws2xGmjwaWUX2XDiXapyKSdUH4",
  "key28": "5t2tyMkt5koVMCmYhwbF3ucov57Q93YxV6Q9dwmomaAi7TuUPMwM628G7uLWbWagVSRHvvpgbJaT313TPmMG3hDY",
  "key29": "4Bo3dyKLVFdHFnouAMrGXUvzqTP8uYWgzjNDnLnPGXCumapybdwnpzV7FQHnnX1LTJyirFVjXkA37DFWucmgNByu",
  "key30": "17GFnyfdwRfd4E59aihcCnDxbd5RJ3sGYpozSRzBvDGj7AJnVvzJsUWZ7efvTt6nAtAg6Reo2R3HH8XWgf7EFWV"
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
