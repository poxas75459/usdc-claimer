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
    "3rj2smhqtfTQ8KMkzTTx4jSfZaKGuCZejDSWMxoyp3sep7bpt4D4BjZcyrBZZbnDq9MQFF18BmgBh3TckHBAho7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zehq5pwjAnhcxLT4yPnus7w3WK79A2jXV5NmjU2HzgydwcFiJ4rcnqZRUjBt6U9kZX4Kkmvm7pNYw9FXmFdxCh4",
  "key1": "2TdzSqHUYtBhz2FMCWHLRBRGEdN3zDxsBeH9zJwqh8rEepM96rV3prXNzQY7usEgG3huzhEiQAzGdKsL4UtdCyNW",
  "key2": "2a21o3zJCxzjbRzQjyFcjMbz6LeAc5AoPNuhjK1eG4699m2g4fGk7ET8Ri8rvECFeByth5fJHkXhxrVdGw9kXQKZ",
  "key3": "2SyXzBUUkKz9SoZr17XB7DraoFDmhDM1T6A9Y1thBCWY5RY5uv8BuGowPZcXqFUsXJFM7R3fxQbXSwtHGvBfXxam",
  "key4": "4YN5wZABsBdmE2njGNtBW7JprWN5K1WodAxLnyHNDSouwftzPYe5KFhCiXrdkPKftzjQFa9fCfDDvU3UQDE28sY8",
  "key5": "3NwX3xAPHqTj8a1fbS8zU9vkKJppGV6Cdjeocvb5Lyah11jAb3uTmnNBKfTQGZktNN5CHqisYHZRbzxwEux5bWjM",
  "key6": "3H7jDyUrZo3NJQfSdgjoXNQM6NWinqEwrM84v3mQqNWsiJjuLvN8LuNFn5uE3GZcX5vbbw56944BipcbvBYkENAJ",
  "key7": "4hYsepWek3VSnH7HLoMcqCLYboY6shcWHn581d1fjD3n1DtSW1kp7RLppG4upYsjmSBaqKZSSYwGmwEV7w1LaSGT",
  "key8": "3o6ykr1s3mU6d7Y9yJ5b1KUAm7fbNoW6BdJjnVFjhWVvpENrDA2gxjmzJfui7CS3tPYxBRTV9tXTLEB6Gzfzvph7",
  "key9": "ZenBchGoE5PQQsWnEVDPpVLjWbcWGpeQUTfavG9GbbkDTpGBbzxJ1GV1JDwu6Pb2SpWvcGRSyAVpjXpnkue9e2H",
  "key10": "2CzjS2pXA1ih7bAXXhcmB3ypmVGs4YF6MzvX7L7Qvzs3kDWM8jppH6E6bMKfpyddC9SqU8dNuwGq8gQfJ6vaKvcT",
  "key11": "AKE22NGn4DiE7RNF8pTbK7LFvCWV1RKK3QzNQBVZk3wWFjbjij6Lrjj36n9E4vwUBx3etzFpigaGxyx1EqgGhvU",
  "key12": "2u8tmPsFZ65EHYMa3D58NYFyK9xTdmT5dpnRSXa7Gg3tR1pLcaVagUPbhLJD1AHVW643KUgbqSt7pLaBbCudHkWG",
  "key13": "33h682MEf6bHc23MNMWWjE6Tf1eFjHaWpXBFdkdbENHr1sDgXqwL4LZZ8fSYgZeozLMnAu5Kf3QxSpEBPvF2pDdE",
  "key14": "5V6W9PDpY1aMu7bAQR6ADNY5YSNUFMRC3bQxHFN2ish2vbtNNLj6fcE9Va8hPrCnFSJbhtLKvsTHtgLLH4Uvvpr4",
  "key15": "4KBxDfRSnfyZzYYwKFdoqdgDEyZYraS3edEeHNbLMXBzMrrKHorxRZaCUhsNEFtM7qyj7tjCuz32LYMoz2hKEBZn",
  "key16": "5Z6Cc2TQ5SvUbAMy8gEsEpm5tqfgfgbnCHLNS8uTj2QCPDrGE3BW8RZuBtftb5mNryczRJXHvJW6FCWsGUXoHT7X",
  "key17": "NZ3kbmFXa4TSi2pe51whb1G4QfUMQQ9rVwYceZZUU9yz1QVuW89Xq4jBFxPZJWBKuXagkxq4EH1yS15kTXeTFja",
  "key18": "58Azn9EFjVu3jxmmbgRjxgY4gg3NsoUrCBgErcQ9FmJBgicAagNKdJZVTFFuRpr4TrEbijHv5jCyA8Js7BcwRhdY",
  "key19": "2C9EuAw3NvXkCrZG6cxM9SPJKo9Arb7vocZ22wzkTAoeQVfAFgDHNgTV4kt85GHzSFBV8kajp5ko97ciVbm2eAma",
  "key20": "sn4EG8BNtU5ChdNqo5adRcP6h5gejh3UcM2XBRbBUSX8CvMBKQRwPujBPFcNxB5AcG3Rs2Q9fM8ytjL1wQT1vMr",
  "key21": "4GdTN6MSANgqUREfyLTDeizphYGvWqNS4dpUYapCa1HTG4nuN5H4tA5qNZ8NnBYVE43pZaqQtWWfnNsp69JJu6PC",
  "key22": "2QyTjs9m6PSYLiKjGP6n1z9Z1bkKhqyzBtBH6fPF2i67SKuv7tUJQahatBGg2WTM6SmzCCr2ZKUkn29tzTmw4hU2",
  "key23": "mYPLaUTNAKxjKJY67Swt8whPoUBSuEqb4a42EqdHPYBN1n5sNaiSXzPbRo4RD8Lg9a8SukDv2aT56WVtiPVFy34",
  "key24": "46udK4h3nzGd7wH46sjjjHtcYc5hTR5eJU7F5xowHjt3ASCBRCPNTFcoYSWyr1pkZD4AduG3ojbZTh34NUhARqaF",
  "key25": "5cb5jmMJRWUvydPqHFTrboSrZNtDfNLnXsCFiFS7tw4cejPMkUTCfxtD9HkWCS5PjiLsdGQLLM6PuURq24AqHaCP",
  "key26": "4H3UDgjM3u23voud1Y26rRf8EGLkNCr7Nvc9wbdZ3kWgoV9RmJfAwiow1T6ppLei51bMMrWXp9NEXeLBj5fWNp3E",
  "key27": "4NNcqTaHJRCWyL9pMELTvRGAFx16xpqJwYYwLYCX5jigpSmKvUUNkTxgMSkGhHSSQtcHUsfn7Gxqe89xcNxQiG5J",
  "key28": "2oi772AsHoJnHvbBiuGBu7q5yZGd85ZxN7gqycW3cwJukqp48ZYnzoXQoQWdMXTvEkHxa3tZ66goVPkfAyzt1gz2",
  "key29": "2MdYzeP12EzVmpGhJi5qzgW6PviyK9ULGqeYxLPmfjUqQ4hykk7toTWg3tQQxxsTLPtiQBm5tVYCqMb927yjdkY5",
  "key30": "5ozdsN9nzqCrqEZyHZn7vGqS5htiRdCARQJR9xuWo5yfe4kjctDb49nvwREv12eUShrmFVAvfFmA49KL4MY2ke31",
  "key31": "62LNFUxpL1SGEHQpsEwhVQLr7FG19hPgYUzmXfi6c7MMLd96PYdd5s4xbWDH8G5DaXNdEbK5UymBuE2UsZd1mhTq",
  "key32": "5Fd998VwURtVPzS2A4EEkAozinAiVzSzUR1boPEvPFKbN6bHv6V95EUJ6vYfpye15ikBumAN8f6AvmPiSi8mhzub",
  "key33": "JUJmhz6AwRyxGfY21TwnmxbitYhY9KPdy8XagVPEVV34GkXhbSzuNBR7y7KsUAicSoBCieh7AYRMb94mo1N7uxa",
  "key34": "2W7wbUKZQMeSvpaHAW6xkFmVF8BrUetaDVC8eX8QFzhk7vzcF1CFGSCQt4DVFMW5u6aoHgN1SvaGwfSsasEmiKSp",
  "key35": "2qQnAcTZrfRs2cXS1BCctZV3ctqimv66nBwnsuetJaSaCQSAt3J47pFdTRy5GJbYQ6ARH6kDkmPi35tbXjU5nhSY",
  "key36": "2J6sfmwahx7Q1SfRQQoo5rjCRcbpVdbSr37Bs62VkE8FKZUAe2iYpCMe89GjKiAs6dSyiCkNiN7uLCFvDtHLBj2j"
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
