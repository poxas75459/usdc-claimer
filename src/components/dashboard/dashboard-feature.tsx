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
    "54M1AqSUQqv6BuevCyfu1mfKqmwzPz8Uw8LLswmomiLir2xB4Xz3bJPbbtfP2APr86FWukHT9HcJwykGyT8U9Btp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGRFpR7mL3nLrgHckvL26rExj9reaiesxZsNzetivTdFRqNMzJykCk8A9jaGGSxD8iV4gzWnqBBQuGG4C4KBZpr",
  "key1": "2qA1Af3xcUxkWYwnGGRXfd85d6oWYgzAmkQxSQWTBXmyDraG4MsSq8XXjPy5TSwsm4xMTvFhhT4eSPwwbYEod4HT",
  "key2": "55MovG6XJpgDqV6CqxHwj8gBkWuR1JfTAXzLdKEHeXXA4afUGn2yLm4VjgbogNxnibTXxTFkJRQUaJkPHhWpuk7M",
  "key3": "Uz2YQmporuqdUFJrcKswUZFYDK89sJM22M4p8UJKDp9yHWBbBCiV9G8kUwFewatEQ6zoYdj2yvYAgFZ4rHCcTvZ",
  "key4": "zdr3PPUDr6NGbu8WHNiVKesETaScfiNbx3ZMbfwtsoeqSkfPwsZ9FyAGiesoGbT57cYts9aaVRWVcUmDQNUA6dS",
  "key5": "2Av8yWbCs7kxw5AbuFonJd9YYnQVxdfKvaUAsba3FJJQWSWpHQmEE2UMDMtaT2EETPcyhMrtDVku95eZySoWJTBm",
  "key6": "dFCpX8CUiK1ERVty95TPnAcZr6Sk89y1ADtuzUx2D1CEpfnh5B5FEjBYsZgeanTaXWMaofiD3cFcCiRMwRrkxnz",
  "key7": "3Rzpdi6DNem4tzR2smMfQziB26Nwk2Us9gQcfLX3iio4HJH4QW97bXZAa9mhKveey7zXy7i5zuEdCTxLCbVAKNJD",
  "key8": "tvNhMkpYvXC3zwLEirMpjYdjjHLzSEZLrPPTBbwjFaVaUTcyhCR1mBxZyUjZRo8uvjMEGm4u2454KXQAXhHJhHn",
  "key9": "3zsDSo87TL2YgNLd5s8JrW17jaiSi8fUPyeQa56xNf8eeR4QAc7fnqo9UunWXxD3LCDE9Sh9dkRPGzPpYbU964o3",
  "key10": "41s1XGKKLpp1uAwYCSumk7dGhzXERVSnshY37SnmnUB9EuLiFJ2VFMBqjcD1UjA9vEuW9WM3fquEZPgQUfVguw3Y",
  "key11": "37gUcP4tVReXKbQ7RmNkSnX85b9P8An6J9KoM12hcHK7WGHAjehaGH36p9NEmaBSvVDvixSGzHr2EsmwKgi7ASeg",
  "key12": "5nV68ukEip9LGDxrm8o4kHEXLCvcstukDTce7p7n9XQGVs1xZed9Wmz78igTGmhBYeVsCuWB13koSW8WTf2fToJD",
  "key13": "5mC8s1Yf6TtbTyUheJVtWxogUEczMZBUDZWLYvWwpHjLiSr8XczkQubPiGztKv43rquzZSE7AU8RDZHPg9NN5eS5",
  "key14": "DAXjcNTANoUBUak7KxWXoGXkSEwDn9VcMWBmmzLdLSh2Puo23rxdJtp3g4JdHSP6TM2kn9ifi3cbZkfKsmE4vDj",
  "key15": "4PUfhb9C6JtyaVqerDH5zqHFLh1wUMCkiTCE7K3BSoMrUfupjrThxkiqNXQN6nmSqbySLBT9D61yTpVq3zSPt92Z",
  "key16": "5RatgkNkVaA2QNLeSZrix8RGUAZ9T44QfMnjNCCVy78iCZ6RsDHYsLxCL3n2TDC3fJM256uyRwH5wrFH392JBeZL",
  "key17": "59BX3VRZcCbfbNesvcSMqapPjpRkr5DD2pmbWB6bng5xuhJcvewdTp3a2PZkHURmHwofhVg4dMt4CRy4dAZKMYND",
  "key18": "w8b3TLej2htZQE5oxJaSYUSz2xNwLfa3GL3neiygAC7zE6sUxCrBeVzBBpDot7z2ZaNNZt8gf8YVLjDvgh5ypVv",
  "key19": "2BakKiuv3F3MMU4V7kWnLhCwPSUqZ9PzWQx73hy8UVUUrfuwv9Ggg95H8nRH6Ds1weRW26RNwHqfWpf3zmGeHxAY",
  "key20": "2Sa4as88iSXAqQq4r7ykoRskNA38ucn7XoXrNzF5PyQtGvkuMWmDeLdu6JvL6RkHa2ka2EeUv32d16PqtXFc9cvv",
  "key21": "5E3S2Y9E3irQPH64AovQ1wPqcZnpbsbXU5H7KcitZ9ZZx14v3F8hGSSpQpma2xGY3Us5WCnonubwyjgfJ4yu3zer",
  "key22": "489zUvkouPxq4cvcaXz9tAScCwJLBY6aGgp5avA7moJdiXkrEh4Bt3A8TuLY9Pm9dJZM9CnDzkkYTvXwrZu371KW",
  "key23": "2hDUqbwojg2kfHWUKZfkEBCyGwt2o8bMxXMYALHdf6F8gBAUc6C1NziwVm2AYgaP2r4ehdzuCPVgj1RCxP8CFHfV",
  "key24": "4j62msv7wRwroZExjFEc2Th8PswNzhQ9usNETGHx2617WqGvh9vFpGoXxqPUiffECkQcomp4zYbye16zEmUQvoWk",
  "key25": "5QUmkN1kEb8z2tV64w5ikbvFrjb8nKJLcSyo8r75yTN4BLJ15bo59tp4f7wqkThptCqKSQA6nou9RfQQntbf1VoF",
  "key26": "2u5wYRp5QjViaZxY9pBzfgft4ay7MLv8HUMEzwEMLHaDNyfDHJfRAkqYRjWqFB4ra8syi3vQqPEh4rnvKYmt1Ysr",
  "key27": "2Dah8N1MfUhzRPm8o4ogkFopGTfAQf71mgAuy6KYFUcBdQDM7aj8XYETcFA9v6uyk1X4D8bSopzRWKVWP2yjL6tt",
  "key28": "5ytUmMsaGucAowaRbag5P1H8mXj5ZKFicc82ppY7mXyKEQDjtWpaeTNDR2KGbDotaqsGhvundowJiJmnjqbVRtr5",
  "key29": "5DtfGnDGWj9fMePdsMbg5p9wMqrBijxGwGjJTpZvKXGJza9TCp1yNSq4PCNmjNtxFuWfDZmsY7NzBdAakYVQU1ou",
  "key30": "2RMmAGiFRfLCY81bmyVuqpCKYd1i7TEcwVeXcwbvgYMrJpRWHwXvNp33LtHFqhcsoCkU6PNyqjAACcB1bBoFveKk",
  "key31": "4krJr8o51nMixxBszApCDSSRp9L9JgNAEZWbJS9Bj2sWY4w8Z2KBxdxukLAg7A3pV6vQEz6zDs5ozfPcTdyZTvNw",
  "key32": "29AtwAfCdyiW8MMXAJkUU2wM7WT6F2eYnVJcfwsorMdnaiz5q2d6Y6z58xPjvjV1aREEhT87odWp4c3Zb61Q8ZKo",
  "key33": "62SXzYoPEhvQWNH3zoUf5voNj4W2dWBiXjF2Y1eThzNH88ABcZLVRxPABgvKWbSfBb5SPf6VKUyYLq7Lq6Qmi5BB",
  "key34": "5mCLZMHKQEn7vaAYuiY3TnhamtsRyDAsWFBNCgyQWw8ny3x1PtnX6DCcZrhbFzCHgCyE2aSQG4U8WPDSaZGWygKV",
  "key35": "3ZF8jwHNMobdSg9o8UfANuJHpYBB1T7Vi481dCS1zy6g5B64P6WdZLyrntgBVYtWLBLLnwp5hU9E6HxxX2hTndBp"
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
