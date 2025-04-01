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
    "2yLGw2gmY6LeGoahHXofE7Uz48zQ8BCsgVq85wbyawJveq7XZs6GCwLAS978wvkN2jcc4sw41tyP2e89Hi4SrrPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BXsQutvhxbvwvw5p2Xyc4W9rW6GVvb3sH9mFvZ2XaGJ6ftBm8GHy2YKwDpzEVNR1Yd2zF9CVwWerXuXRCkyDqKb",
  "key1": "6Wkg2bx7ToxfbE4tH3xuewU24HoidoCN2vQHRVPxz3nY86f1qjG6Kxbk39w3R7bFmmj5ocfJCCzQnCBbjyyDc2f",
  "key2": "5m8zaRQtbBYDi4LjfU8X2zZukEg99P3xCL9fCx63yJF6Xrdd3zWyV3CpbXk9hmQnJGYLoiuEvtdeoAHA1rC2NsbP",
  "key3": "5SinxzPRjA5oixw2mtjoFKPmVs7zdY1wdNrifjTd1bjXM3ZeLdv4odwqaFxJegARkyFGcLVaAy4ZoKAK3AFHmZKn",
  "key4": "5bBBTpH9qzpFQFHMtZeZ36S6YF8uAcUwwz81BjeUaqgtL9uT1fnTHYdzUuMQbJg7dcmu1sMGdm6VrP5dHVFTGutv",
  "key5": "4QoSiwPnRWAaQUWNjnySa8bwdK5mLHrBanX4nTbe2tpcJ4sAq97ekWaCLvUfTDszinj2HwPPH5zWtzo2FcCHAPMU",
  "key6": "22yV2qyYt9mPzgTxTDhFJs6AbAfQNrUtnzygKspsV5qEMjWBDNzbTaSATh3o2w1QVJajf5gPW9AGonmtcJG6ybFq",
  "key7": "2vjJZt33MDAnJVtcFkwpYP2h6pB3dvundgEz6UH1euskrkSeNHokWTMVvTryFEAcfQBfNTcPskwEm6X3aGoRWovn",
  "key8": "3T8oDVywxS3DLSiLJVpU6HLkjgAhszzx8FZcxSkEerKdjFrJVTnxJ32ogtfHV7YVpVvXtT6wUnSSVXScTgHtg8Lh",
  "key9": "4vdnPwU1qvu1SaSeUJYUaAceHNW47tnnMf7ocSfqqc1CtgS7pMC4viY9pPKAw1dptaS6UkHJj3kvHbhVH7FTPu2X",
  "key10": "21t76YkBsS5myeeG2gUBz36bBHU3WPKe1e8XsxQ9CyUmkyhTCvyCij6qx4MT6jifJSpSvyEqNGvvaf1gQU2BmUMv",
  "key11": "4SGkstMJcGsWYvf6AHMXdpXbGy8F3QVvvYxzH34596VNgmUq6R3MjXev7RxbohB7DdEzKEszxV3kxGPUcB2j6yjm",
  "key12": "2y3eC16VMyek7GhwpzeyZCcUoK6EjZLgUfjAa6NAaonWbAkRvr5CynRwCy79deMmKXvJSf5vvykH3qbnEz8YaqTr",
  "key13": "Zm6v86GUDHTe6pFKN7hD7RVGcBnrjkQW1wDuMYP9ZwXicPvwCwdfKAW5MkQvz7DKtCwLrcswdWbfyD4VUCVM8Yt",
  "key14": "422eNCaGC3cnxuatUfMUS1tzwot5rmkR4KejnfECLu4PrYHNVnt8FDJ9EsrnuaRbQayy93Fxdwy7KNdvcUhBQmM1",
  "key15": "2UNhcM9YhjyH6EaCP4PktBg49mfJHm3yPgrfJb2S5G8LvsVoP5Tp6KK8P8UDKXpk4a9Lyk7pgLxMeyzARk99D2VD",
  "key16": "2mi9deXy3yHUkQwMAQNWAsxj5aNQsXPi4N9Ltjuyj8LoqLJUuXyQtxPtWgJxvQW9dVvEsMUUjapEEcs5JjNoeZWK",
  "key17": "2pHYvH7NMkHGqSEdNuMNF19BAgkR1TL5JnWMYbNZGaSXdRamoEMVXzFmjC14LBmN9vW9S2rJkN658Hv6vqxyQyZR",
  "key18": "3N7yiHKVAJy1VFKd2Xi9dgHSPeE6YhmTrWM9Ky8jwKECv7fFb9aGP7j5ULUPkDcu2CB7kNoEwXkFtBN82Zbr8xJD",
  "key19": "4ojYh7jff17aAbUcr3Lgj1Svd6Y6HXAJvwb88K2gQoFQo3GmwSKxnJDSho1TcGBrAiAZWm1kQh3cYzQSj6c3VCdZ",
  "key20": "5zLKZNcTsgCsNQfu6rdKxDpXSBmHXGBnijzjh76X5PAFFu5oqfZoW1ot2nXj2E8nEJ8KDzNWBZix5NU1E5tEEn1v",
  "key21": "3MZ57dQFnfmP5ppAGYDbP4AVtkVu4rE1f5S23hHQkL7dzPGDmB1YSo9og2f2RmuZ5r8Hm9Qn6qTW9Roomm3Ehkny",
  "key22": "bLzHH63EoFCCsrbwFZf1TKGzFym18fewxuVDH68qnDFgcTixqk48rqGFA1YeugjTgXGpRx6ngFSucKz3wL1ZMC7",
  "key23": "2S7VobK5LtnMgfYPRmQAegxXQyjVj96x1JrTrUsH7B4WpKdS5ubdAF1uKEbHtxRoPTNHy7MmyW9Hc8t51adMXuQN",
  "key24": "2zj9oyaZcVqNHKP9kWktDoWtBf7i5JQwzSrNgapFpo9R7JC1jK8Kr4JndZe77P8HZe7fL13qmp6BmeUSTHu1Pzyj",
  "key25": "4TkXmJcZ3R9Vvw6XovzujAFcPhS81TwF7kChfjWppKd8ZwsRBi6REDy3PtDxieTrYDrDD2P2krgg4idoct75AS3P",
  "key26": "4UuajCq2rwm193R21MA4J86TqGY2jpkd8k5CPmjXKpLD95kpK9JAAvgUdmkFa1kB2YJKHBDVXGWaZerq5KYH4pXx",
  "key27": "2BFXQ8ErB5TYdfpgoauQMjrSxkyETkC816X9rp6dtZ77r7ZHuS1Dqpx4B6FLcAGhbNEDasQVn4Awjt1wdWH5RdxF",
  "key28": "56o4huL8i8ZvVZ4Chz6ypiuZs5JEp6Qn8sCYwNmxnH9BdWcPGMGG5rrFB7ShFve3aPC6DbZxwKWRyEUszNhbBGjK",
  "key29": "4GUkccUDTEeAf2hS6v6fQtCP5EZaw6CaZTt4cEu7xYpQZSYuEu4y7Z7ivejUP4iZgwz9pjMfeJkpaxdVgSUdEJAj",
  "key30": "67apz7v7geyNTbtaAihpuUNZqSUr2G8gFqxkqtUCXjmPoKXudpmzngQbnKoUxr9Zui1C1FDLeg1XsbibDRoCaqB5",
  "key31": "2DouNe981xHXiWLfWindzJVpjAifBniVYwFeR5pVuqahNci4oAH7x5RHNVQxnurBWv9XcfFhKeyC1KqdvpNEasFf",
  "key32": "CQjUx4i88FpyEBBaeDaVzwGMY2LXvPkLUQR5YH1GdVNwLHFMA3YD4PMwGbFsnFvYYCGsyfmgAq3d1vS8U38djQD",
  "key33": "3jTvwAYFW6Ke57aNxuDYsoiHCoPJYPjXhDn5rM5Jsu3YQ1JRf4536CWBYTmnN8HC2TUUri3exsCeZcJhCha5MJkc",
  "key34": "2jWjbzVwQWVc21ptqhPAqgcBmtcXdx4Eu5BpF9SVjEF2w7Z4m9QNVTdfK8rWGZGpu4LUUNLHcr4JA48P3nQJBaoX",
  "key35": "4HdcrrgnDvVTVRRh8DebNELQmM4xTfNyA8kUxqhQWvcmunSmR8yarA6gocWyF8xjS45j48SPqNYo5jyA8666efqb",
  "key36": "3RDLK2Kqr9LoLaGNatJ8b2vFj4XYZj4oVYf4W5mJsQ7iyEueaicQGjqi5wMATnEbNWoEqmp2qa9hSemdsFTLuRWd",
  "key37": "4A9ZwgBqLQHpTZ6FihnQv6GtNF9Egccydg8B76iMPDohvsr86mMHzVNhJWyvWva9XAw9SUzBsm2vNNrt7cHEehuY",
  "key38": "3p7KPDiBc1DDxCYNxpwm6Um3i3T4euetHSHY8r8ckfUuCXWQ9TuoD2cGz7Pw8sVXipVJafRDhd45KGtMzmx1TtYs",
  "key39": "4bmehw8SYpgLiHJu1R39FAArg3X8Dbv5vKdvWCo9ZqbPnYyPLxyqs62UANNm3HNDhZgCoAux2beQWN1T9agYpeiY",
  "key40": "tyZtMKRjUMXw9rxdQQjm8GDwVYc9APxvQsCg3KL8LVCnh7sTPgepUdsfK1r7bRqTiGEgZsX3RBUemxj5vgbYYu6",
  "key41": "28sPYtKoNN9TSV14E1PeszYGPsW4zVwdzh2Bg2f4m4f5mLt6bLoaccxhkE5Y6a2dCR2oTmCUjTW4UFfGSvUKqQqo",
  "key42": "61bWYWoDp4dAJifEpJXUGQW4k5mLLvATM1LDUCiH7ewdjXMhH4a7ZJTHPYnXE6ohCapg6ZzEWwcFzYUDeCdfddGt"
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
