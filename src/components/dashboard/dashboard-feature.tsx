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
    "5HaLaVoo2GJBk21CjAdBVNKmLD5XLoqfKjEqngezMiSXbvmSkV2Y5361CAbh8xkufHMA1k9St8nuZ3YadXiarxgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DndzKotQnmqwTHgshWnt8GHzrmgfvVymU9xSmuUDKfWTiDzUX4tHeSQSYizRUmmCqeMmVCeuu9axah3GDQ7wkU9",
  "key1": "2QPXeATwZ7ZwVQ9pBzyN9cuJ4D2XJJpc3VKQ5pNUpjr9MCZP5XxZZK9Pmv7wYKdvBZdZ3FP7Q7ysuTBbH869d4X9",
  "key2": "3Wx8hJv2hKS98kcM8uXB6xuM93JQ6CJn7ypVfq5ktiY3xk52wKx2oNTx37m4vJprcSpoGTdPx3yMmjHZtcJvgPfF",
  "key3": "44spxZVDjbRQKkgu5e8gL3K4g48kzvD4dKx1WmL877JA13Q459mf6mpk7Qcc62ssBx6Q4PxRMiXmBAgRY48Ww9Yk",
  "key4": "sHXK6rhpQ5dyCDRA52f24kDR8EhLiHmZDHzaY21Qo5v4d3opDSVZmjnc9a3JtxBcVTBb5zktt1AjUe7WQcYvrNL",
  "key5": "3we6SgkZ7GCtnhrihf3Dqf6trigjd1sUBCmTUVADppaanAWstmRTFZw7d5XHQye9r4FArYT6ATf2JazgFqMskzzn",
  "key6": "25vhXuVYKTztNDAmRPGMtRwuvLGJ34oZfZCS5M5EXp8K3xCb6TaqDdFazsW9ip2LxoMKkrRqVS1bKLjxFBqo1vk6",
  "key7": "2ZMCKkssPdbMaA1LhikGicqyx9ioD5SQAG76WqFApJgBtViwFtRjjEqXJKQ5tKYKam4HF4ywGenM3RSaBjR1eaQb",
  "key8": "4FgEHenq48JKwhekpQHHkVLaPeTFZ7d7Ai6iguNbBGEEz2jxX42rkstfMeQYKWCmKvdVQJzECTskxLH1rv59Cyhj",
  "key9": "QRcJ31BCNu4xHAwknuL48GPRTi1fpBU6EQ5XEFduC23fAeSKxMfWXRrep5sjEZqWz8EyevkLsXwxevoN7CUQW9J",
  "key10": "bdVhmET85GaTm4KXMExAwnciYCtM7PGBuAHbTnNUmGjnFbfY6dFExvc1DQ3YuLfQrQ4SJuEvaLKL816uQnKBq7p",
  "key11": "5MTQTVYFzFhC4ecbNmfXBTtWvkcrHZ6wJB19sQ4hPqyHGGzTGsazowXePTaSP8hF7KM4tidqqQ5UUKpUJLV1H9uU",
  "key12": "2abggbwpeSeM8CfGbfv6KhpShYZFTg8QGuFJ82vCbViCcwtpSiDgopruTbfoXtc75iJxR9B3FDJJCYCucrNoo1cd",
  "key13": "3bV44icEUMH9MGsegRXPpkS3WC1LRV3exfci9VHZv4rF4dgSRqQLHXt3JSHfgazNVH5GhELpAHwKuD1JAuSsHH2F",
  "key14": "2hk5QnBskjdfGyjSvjeJAkKDikk8QcrFXUHqxDaddaeNKqsetybvhacpgzFVmTqWdTk2SwA56V4T41NLUUJUWDPC",
  "key15": "3DJNCxkFdyMMfVcH8RzVEngegXLV6CGgap8GjTFYXAoaRD79cW7PPduZSR9uGvN4d8zXy33ubpysNM1NcDSerZgs",
  "key16": "5uWegPSEBxU9Wr9t9r7pXrU3ZhofDxdJNm8NGPP8AiAqX8MyFJJtJb1JJPztRzZnxDCfzfSKbG2odVnUn9ui8kc8",
  "key17": "2foY7eF9HQcKmrW1XA2oWHaFyNtbRzXwP7guP2LQQQngzTuQozwWHMVw3qCPjLdihkkXwAqPZ1v8cFbLehcPDKv5",
  "key18": "4SLoRwQ2amWvWyTn9Jutmq8TJYdvuCWycq5Fg4zACf1mmNa9BmoSbNqJZ4Y5LzXQRggg6Na2UWWmF8oeAuwrHAKZ",
  "key19": "5iYcQDpQcXC1MWyeLgqcHJyR5VnBsrY9WxqMTRaDZ4wLuV6X11uPjNTtVGa1Xxq9QyrJQZrn3BW4f2nS9jZZvdC8",
  "key20": "3H1KvXiswqM35h57FSgSHYgDGHio2UM4Moeq9QLf15aTTUiqooaSV4sAYVQZBvBLbTdQADriM69QJcP8jAySaJcw",
  "key21": "426wMQKiKHyZtDk1GwKJdhUnhQPjdYgSxTng5ffox9yvNPG428LH9ULX9TLNBEzP5RELd8xQ6Fxa4Hrbujincbcm",
  "key22": "4fGYryf3RTEp55iPYP7AhiqL9vjFctn8sHQpLe5dyQKCuXPmwMCfESmh3dyDW6js3bpVFvKnSvfvKLn5S92mELGE",
  "key23": "3PUiDJ273PEPrNWfwM3bzfuLVcPQcVCqBiTSWrzDTgFXQW8VHqbAeuRim434rc1WhD94sDUHu87tU4cH4W1yuJBc",
  "key24": "2zEKddGMKkiZv7Bv7oSFyydQPyJN72QdKoYZiivTpe64ZaatbRn8WbKSqNykyGDb5ythjyuwtKwUN7M1woj7p58w",
  "key25": "46oKmg44spYvb7gLgFn9z4qeLjVARSmjYmMKHguP1grWVmfLZ9k33zHXdCVQkLiMHcwDVN2BajUTuwZLWqiC7pC9",
  "key26": "W7GBnxpriHdec98CJwD1P9pyZnLqKGiHP4nuKiysFpxbJa1EeFtwu3YX1hez4tFNdq5wb3ukAiVgCx9N23YNxCV",
  "key27": "4AqZroQ1oxePbsaiu9PUtMuH9ZdbncNmJZQytv4nZaK1w9ZKQFcAvHBdy6SrzBPuVtWdzcDbNWAa4gAr6oC39CV9",
  "key28": "NNUjQvvs3wANrFH369FQjsD7pWynKFG1rgViBDTAapzG8VaPPHYWMjUyDZsmL3kNdpnEcQn6DgFVyk27PyhqEyq",
  "key29": "2e7zzyQwwH9JYLWWub7MZc7erGfEsaRLi4BZhnU4vbaLbnMJAvmPyemhXVhRjdwV5opuZ5WQESFdRuvWaD3KgRkq",
  "key30": "4cnGyUTeJo7FRPcb85vMgTdt5MLTqY2TRsurMPrZqyqPDnuBCgrSgyEDUP9BUL6kMiQgzFQ79n9VK4WCg2qB11Bx",
  "key31": "4eAPYAmZacxobRTanscYYEkgmrRdDdWaj89zbMHKEZLjBdjLUKNqh7AUZ472tUBzfWpRj5pzTMzUoTTtih6LripB",
  "key32": "4TvFP69BT1f6bjhdN5MQYJqPJmj8iF1KhpG3Wz24ZUmrhNYT8bH6Nz8EFNmc4HxD3tn8pSsNQGDmn47kDSbdZTNK",
  "key33": "ZTQNoTANKWmJb2THtBFiHh3TbSKaudNdFyj95VbkpJxQskjQa3zuaYKY9abJsuB6WVnE7TwzTY3hs8LkfoA2LXA",
  "key34": "8VLTcLonvX8FwwHWqf91V7TJJ4mPDHXtbaAXBvMEQAPfY4TDjBRGS2nnD7hoFmzwB3c8gTEu5e8G6H2YJQdVKX2",
  "key35": "52bPFkcCRjWaJiDcDTGeRNaHzAUQtAmjLC7gk287nEoAiXp518LrVDT63MKjNVfMYKBp8gpELi9R8yk39xUmLRCE",
  "key36": "44fvREAJaaDU7uYUDwbau1U1wxDJQVnFnePLpKzLJLoKxRWTTzDgUmwoqKhA6vhN62mUyTdXzb249MA3qnPtosMA",
  "key37": "3aThyH964wPkipfLYRpf1WP7ggzQG6Rr6hzQP7w9q8XnmsF2myQtSECQc9XbBymxmF5pTx7GafqVnxZBk7jHxm1f"
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
