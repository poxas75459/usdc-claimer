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
    "27Kn7KM5aK5Rq1AePQzW72cy8NcGNo1wMv7nLGwxu5E4gPNfQ94yeaQPZsivJwLhShbC4BLmytT3SRSdBxg3NUvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xzrtbtQJ4HxumcjnSKrCgbZZK643Dm1WqJE5WDwmGDQs3xNoQyZjzVTby1wjfJZe3LdotTTzb2ekKDDoNAjxyY",
  "key1": "3FJR8p6bYAwk1TM6qeUq7NWmUXvQTpSjqjg5AWmPNPjvBcxHy6ZZVQEVpZwuHUahyhKGwG89H3B6Wwi8xWxiGZLj",
  "key2": "2CA1SHGddCUfSEYh897WbdRb5BGVgPNhCbEVixSMwdWMT94FsaXKxeRPrWSh4u6pM7XBRn35425M95tFPqHxWAQr",
  "key3": "4SzB7D8bjjFxb69wZQKPh9M8YkVrLynhBwnFqhTr8C7qor1jS363ejcfWJXd98db4CVDuC4vdVwQYrQ7WhzHeTbQ",
  "key4": "2QnckWm84K52MKyNzGi4Y8U92DThPZe5nRDVsFWXx5fg996unHm6VgMG2xbdPxyjQ8oNm3akuUeP7FjPRE8eb1F",
  "key5": "5bqGU9gGwDfGeL1CzjBNuuZouJkfLnLqw3Z6N7XpLqK1GMphqytFz6AvotZ1vqdHrPCKE3DYgJMyVRHy7kQXWi6M",
  "key6": "2hJJLBfbqtFrZDhUSZ7vqSsgJksbBQebRKmZDf6nZxrSWiyKbztmTQYHMQfQPuuVqefEBwSw1vzYN15LhCMB36xU",
  "key7": "2XyMtrQqW34vzovyPGEZybvacQKag4qUDWAerEKGvrzyycZZVBGE2L71ywkeCZ82GvuMtTLLhDM44fV8KCwVopuf",
  "key8": "3NMp8zVGw46a9i3GjJegDXiEWyn1N876C8NWJejeMVB36bTCiVe1KPx7TPTWjQCjZd99LAMre1fV7rrNQwxfEnj6",
  "key9": "3iKozVUnbjHLUGBcGyzuWxZKxLsK6V2V7oGVyAKVfuuEMvzJSHxrd8CXzR15SY5i7JU86kJWENatA3B3n7anUM3C",
  "key10": "3qa6VzLKoSx9KAmcuVupCsDtufCr58bCV1W23ubdQo2WBHiB8bf9HfvKMND8qjFyfupRgsSXuCSVM5kGiEQenXb5",
  "key11": "7JA7YNh5Jss6G7jiFCB9e6nJFFSw1YcWREH5ptqq9X9D9gPuELKrtmaTGQ17PKxvsnEHDjKW4CHukCRT59ojAdi",
  "key12": "3Sx61rsSpTtapyhCY8ieufBeNQtrbpr6gruMhFm4pnQfGvXJZqBcHAHZdHiHY5SiaBB4ytxt5cHdDKbN33TaoWT8",
  "key13": "5TombNqMMmPaRBmZuAEMZXf6jeMBzGN5cHxAfRCfTiqUQeKmK9YW3h2KjhCGt1hu24iWbbSgFDxep1cWaAd6y6SD",
  "key14": "oM6x3MGZx9BbA1L49hL4W6d1TjLn8NmJgsyELJCGdzLsSUJnuZjvoudy82tvtMVfg4ERKdy5ztfLPLjbXfvkvqQ",
  "key15": "taBfaA8G42ssPTxQNpysrPZhxMP19vMjouKfuqLU66jZqdCNvb9ipsHMksaVkcu6zJfDwDTLyhdqyGSbUnjjjmZ",
  "key16": "3pTXCk5pELUJvZYQXBfCcNwoGqxQ4Ugnk2ZiDAnNJrCGwKSz5VbBDioJbhXivPa2ZgZn1qndUzmVExj5ne9rPjok",
  "key17": "32CQubz6ePQJVECpF43N5wJfkkM8botpAhpsuHFK88xxDLq2M6mLj1ybHGq8iiFVSFJ7Hsxc9XhA5C7uH8MsZgCR",
  "key18": "2ZQovPnhYMUg8nwmQUgJbmYwu62RVK4LQrmz6Nvsc3UK3x4wTevUU1ReQhvXwroFmJTzNGgs9ZgvApYsxs9vzCRT",
  "key19": "5kPZfcXWW1bf4zGRsoy7HXx7r3J4vN9aLZAAWqRNJHPrPp2NR4eGFEhxAQFKdEv8Uz4Q4v1vUbZXJYAuurfjND8U",
  "key20": "5G7ThZfmTS2oH25z9qVL9Zhxs62bmJtigWGGQb566MkggYzC9A3NZPLpvPALr8RepDY3gBzEsLjJ69nedtJYvG81",
  "key21": "3k4pcnQ4NmieNJ4HFXhzkwhRpV6vhgWXzmnr1dU5T5hHWr4DV1kEji7pNDHmwPiuvUWmTuwfhR4c28ntF3rvA5jt",
  "key22": "6i4K8mBHsky3xR33raJ7iFbUcxifAyd37ZJHYeYhvfMLnQJ3hbotGTtyoj79B2hvBHzSdQpykMoed6DB9vMDUUS",
  "key23": "3GNjSKn1R8haygNpZWiagVgusKN7h4hEbPYDYKK6muDbAjksH5e66vmGzbprTFCtLpSn2N7ftQfHRRyxDcsyhBB1",
  "key24": "4s7Nasoz1GFWaWkLybrEfF6q8TpW7YhhukzsZEXKQW3X5LsEkkyXn4DhEpemtG9vbeM3E25JGspfkcA3jJRubKvP",
  "key25": "4e8Z12efvVLRhcwq3Zgm1uzwRfyHRD8oiZ7EaZ9aYtPKCG3XzU8wnAeKRVWTSPEzRJFvxbc1ZqoFrA8GteTqXJ6P",
  "key26": "4zNzY1Dyx1aMfk625Da9esmn7jKWzdzSqL8ZwpHzJ1Bf54Vbucqmiven3iEo6kGANbLkxy2adD46tzMU5LEvsXC4",
  "key27": "218aDeoSDUKDq6dzaLs7fbAZThnQzngLkUD2v2DarmqT6NFzjqcgKyFyWWW6oDXsuX96b8sT4ZyGYQrE5Yimz8U9",
  "key28": "5YiMpWKwomX4rJYkufE2A9US4Kprw1bpqmBsteyAb3E1jQ9pajAFGixgxARx1DARULm1HssY6eHCzN1Z9WU6bMSh",
  "key29": "5WrRNbJvw9wcqX2J86oAiF8Qpxac9L7db4f8YKCbAgEXugd7rqw9byETJk6jvVRC9D94WtBpuxmsDg6BUETScknC",
  "key30": "3tBcCKS6TYf4mfuXzz3KvEdMicuNNarb1znbQ1ahuBkj7VH68PXoQohBnG3vi3F1pz9af3urmBzMkZsQzJzDyjSh",
  "key31": "369FRyAD32tBRhmFaQZxGy7ZGQaByi8KH3D7LFQnB9TmcdQkjd3YGBw9qB24z9omVWbybvBUn2FH9R9FyGRHmSp6",
  "key32": "4UC5iT3ntA6bYtkmGoE9u6JJGNJEpxmuzDmnceopLsnqhhcALENUTKt5pctLNUHvorZWPp6qpprDuBiWxiw5FEf7",
  "key33": "2ct3y1hZyDsc7HY845WDqAiQMA1CQ43ji7fGAeUNtYRpsiFk42zT2qB3i81sp8tfbTxUV7ev1xMVERqUdbQdTvPT",
  "key34": "3xh9PEqaUAgsMoGkXpmukLfPYn4u7TBMponD79F3wH8z1PZkgbvavmoPvxBDuudx2R6ACULsxPcCj6MAHn3sM1hj",
  "key35": "24bkPgFitDQCGWXrbCYqUhHf3gvi7wPFSZ4S9TuaDnCM33BhgLXwxMf7v7KuGAGEt6RkpVhJyNWHXQ5DqeQzQard",
  "key36": "St98PWB8F4fZXcHhriDeMEiqD2xqmK2aet958zP7QrWPN5FpHN3L6fodUBWcaupeXeimBDyagX8NPfbK6EkgxGZ"
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
