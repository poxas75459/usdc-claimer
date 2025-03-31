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
    "2GKpU8Cett62VFaRoxVrtmNkbTxUNEnybgUoz77sHkGLcfgb5fWUWsyWu4vwMWTbuSd4sXKNbUp1immRrQSWih4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37F1UeNCs9rHe4p7CXocjojVJiV4vmpqxxSWNGS6zjHVYGPmwQrMmUuVa76MVpWiuHB8QgZGUiWBxuagM5Dkj454",
  "key1": "3Wq14cvkXpi1LyrE5ayezqQDTM2ZcAfTQBj8fDnCmui8sWGgDc9Wrt9uSR6tMmdZhuogixS4Eo5p538Ds7bMMXso",
  "key2": "A3Aw4AN2JLZy52KdiFdLV6wWxNfCG6X2EBjYG26yXArkRJ2GoaUk7RKS8evDg86gujwkSQSBRnfYrxLkPhvJJVH",
  "key3": "4Nis8KNVJfGXhb5TQS1v8Gc9jSBd4h85X8gWYdVyZih8ZG5hgrLFoXfND1L2Nrkfj6PvJDaXf8ibV5y2Xy4QRe3d",
  "key4": "P7Nj6sJrmcXAJufwuKBKzKjc4DVKgKwZcLq6X3GsRDLFyzwG1iwwB8vJ3ozKt97FjZDUkLe1yufUA2LfPguQfDF",
  "key5": "3zJC2N1Wf9Js6K6BPpXVkRf66B7HeA2PcYWDLvyF3LMA1THjtK6H6ktFfXK4PJARkdmsCUQUwEdpTWNcbfVcuZfB",
  "key6": "2ayk1nZ1Sygv51d1MJ3cVNpnSUA5HTTHDuwfNGE58b4JumfDUzKvLg9Y9rrk9zRTmwkcaKFYUW5u154pTCzPdVUx",
  "key7": "2UbiwMA3xFgBMekEo9EGqXRcdfzXwiWUJfxyYyx6ygFuom7bRVoSXTT5ixFh83oGZdXihu1oJ2bh2tEn1NET474J",
  "key8": "2aupjCUCLK44vGCFUG2KKMVmnyUP4oC78gPDW9YVB2NDYCYj7qH8LSpTLE2ibfdS9H2YUGBS4WRXZEzCpMkxu3L3",
  "key9": "2BjyBokYYiJuVmJ3qPsU6De1BZHY5iuj1VwCucMFqLoQMpiG8CAkbg7agfp9AmAvKS5rYhMzXaG6mK1wLYGEzEv5",
  "key10": "5pgKjLc4wonWwDHxWB9qDUyCyAk9qjWYVDRvcto6J8BgCi4kqC4D2crHTHURq4vgTxqFqddZkG6UB2G5tsfD4uMT",
  "key11": "5wYXzUMQaM6vsbM1VM2kDn8Hvz46RjUkPBf9QMedgSJHqTYzAvNY9qZQHfT6MBEbAbv6FMLGh9HUB2ovVZbzBVQP",
  "key12": "32RV2Bek5XYqqDxF133jZuJbLeaxebB5QWsw8orViZCgendw4tBnf1yn66CTJuf5ApVfHkVgyJG2QiyD2gSMccBt",
  "key13": "5rq4eVdfdVsQxKGvF6n9TkhR4Q4YhmZGnpyrojCueghibYpxQHmKBzphNc6HbvuRWzZqMujNUfpEJMBWH1xYrUhn",
  "key14": "26WqmCFEBVyGHPsGJzVBu8RDpAkzH8c1dpkEjFuci4F2vtkZXBsY4FmpRQCbW7V6u4zBPuxQn7E6KxmGyZK25odR",
  "key15": "5VjBT7JcdyhHmTkHAurDnGkaffjgrvxSNANtT8Ky1zpzLTATCNdYkFP9mwmUk7QkfvnjyJCsM7WvwEzTExDDDXv3",
  "key16": "3eeQ9wb3V3cSsDpTqyzSoNsYR941R3DJ6fC1aUovgYqgr8LkQzgCbwdyHRU3dW9PTGLjJpJPwEr56fQKnAvfPQ3t",
  "key17": "3LpFS5TgkLXGbnnLcJEb29i3QtxKa7C9CnWKGvGBS5eaEQGtnjn83SYRh8bPfwMkDXwiHqSGErJWNQ7vKmB8raXo",
  "key18": "bQcMEHetar37G8J53GqVxaJghfgc882vFWovxThvhW2oXiYeph55nH6km5fjbainKgVRYK6xQzxd4tajFm7Sgt3",
  "key19": "27zGwKcL5RKYGzJTRZNNFby3g12LZT62LgwV7gxbYdZ4YfiGzmuzQCF4PhpccPewvop3nKCUejcbfXC3Fv6kiXt3",
  "key20": "4ZgiVNiLEXvbno7FdLX9fTuLjnL2aTEJYG6RnPgnh3MT3wP1nM5EecmwLTKXUc4vLS7CcJVnD1khduTdAQUFN9FV",
  "key21": "3qC2a8EySgRegV8LdSpKBtcMVnHRqvHKNpX6gXm7866Ps85sbQbcPo6AXQ2myUk8JioTVeKHTVjByAG5qVTAwUTj",
  "key22": "48u9XGSSz9YSA9GZk6uBETbgExGbNR4zhvhSdbssYjBV6M7zi23yUKq9BdFyi6ejSKxrXvVJkRKQEpAXA2PocaR2",
  "key23": "4128ahLnBD3rdvSG4VwfpJhC2dwu5xxfXY8pPfYeSsneZFPFjomDyipJ6vV47DMkp4YHwLUPuaMSj3YWZhcE4c4G",
  "key24": "3HZ2TpMcWyyRVu7WuuX3ov37AmYyCAnGcqvNssMXLLSKMtm1MZ8JNkDRLjbXaQsUSF8Mm95QRyahDUCXmiafPqMV",
  "key25": "2FSHMHy8GCDjrskxx5fSKKC5J3Mr24HYgZCgeiu4t6214g6FFKqsFSaJnugc3tcQ7YxUrgnf5NGGVxozcscQFWTW",
  "key26": "5bpwfMKsE8YmAKHetsnADEkgJ6KHyacUvNCqJuqzVAXJGdtgxy1Dqr8DQowi7e4kHcJHcHE7QkDy1GYmMJiXWnZg",
  "key27": "2vhAh15XtxzTc6bTqWpeQUKtSzPh5RjKMmio4Ki6ioJqJwFN2hsvxidjksC7kj5Ym9feW13EsjJWYLEfVd3FBoBs",
  "key28": "48UrsuiAQH3YMiecTNhDTe4Ve1YWnHbtXtrkm3dKTzyLwSpVTAPFXpN3vpTXQWgHvfznUzFCMpj2s4NwwQn7JZEX",
  "key29": "5XUszxm3hw3i8o5bPZrUvopX5YVmEXycgQ52rdVEBS8CoitCtqpxmQR5utHM3FZVwcDemfnXjuY29HXdFbNmAHT"
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
