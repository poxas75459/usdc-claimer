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
    "2GzxoixEznoTz9Gqa4oWANBn2gAnopZNFYqgjhxzK4iQLZjpWyQnC3ZNts1DUBzGS3iy9pq76NTEMAEWwgWcVUPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPqgeRFV71JHbCh9bUFomRApqQX9fnM36PNQV2fYwx1f8up9tYamNQA5RZBLTCz4N3ZZ8ygMoj78cVDtGwv8Knw",
  "key1": "nYB6PM4kjvMtRnqSiAXnA9dmGGL4cA4qNdz1r8ursRDJnrVxmzH59cqyTJCR91Ery5gYB7WSQXuHoqcUhopVzoh",
  "key2": "4qCLv4LJGEgpbgeLyQdmdzydhiPnHNJHLTsCyZ4h4CEwrkeziS29rh6tsAECtq22JBnRy5rxNb1XtnTtjctNNBvU",
  "key3": "3YK537CPAnx86LoK2AoVVbHuo1Hafk7pBnWYRkfjo5SeMhJaUCa4xYSw1zHftt9W1PyhU3x5xEoaNYvmX7KK4pxf",
  "key4": "3zwfPNDKELLBdrPo74JA7sjfE3qVyp5bo3ohmBmNrdXrVQoEr6YnSvaHiJEyMk495qPajhzwvVER41hHKKJ4J6py",
  "key5": "2NCmKzrbm9pE7qCcghdMnNEuCWHCaCi1MWCzTCKpqku65VZJyVwWaxYFFiCkzKNsQeRv5jweFCxDS8nbTa2qwr1V",
  "key6": "4xTWK71aVTeBdB559AdkE2kz6ucJKhYsEAVoYVDHNDFBaLZkHL2N5sUywMh4y1xA1bokzPhx4v4yUdSgy1eUvjYe",
  "key7": "3vAqsPUPbNQ4mAz8wtV9pxGWBGJ6kbX3jmfdbCdPfi5bXYPRygqFUkzuYt4iLTdXRGiUS3FYzYJQTA6RX9Wc8kgY",
  "key8": "9Kv6GxEAKVtWNqvCogZHEPRe5iQmCQDMFWcghU31ahnKiPJro6o35P2f52KV6PWb2uyzStCXpTR6RsuDwYWd3B1",
  "key9": "5jcxTAmet4WJNxwGWG9cESJeJuPFFtV3n98GXcjgN1eGvw43gbBF62nHgMZ581UVW8km7ZtRmT6BasrGFQJkxkho",
  "key10": "Hbnu4Gmjuz9pVWAvmDsZvZecqPQpqFrXm4B4K5TvrdMJR6qNvSkhB8kqRVoreqR4rR247gvkxXpvjrQE4VvgKSP",
  "key11": "3MJfL4aWCQg9Yc6ZQje4vhCjB8X7nNFCWJdxtKpiB2dmvYZHKq7S7jaPpUXzBe3AagBSGF7AqYTQSwY9SNN9uqFX",
  "key12": "5aH6BZG7XERWub7d6FDR2Hbm1MGkfqUcNhsnttQFRYnD8vbys89v3MEFQQfxwykNjtQXR4dk7p1fhdcayzSCQtCt",
  "key13": "3hR42dBFijVMSJJAaYdJXEGUUGpx9BFjzMFaZPLZny5vLLcvbA8ZwqSguJtJZuhiA3tQ84VdzW2U6cf5fFL9ky2q",
  "key14": "5d3p7v2mETH2ixhSjMdyPwytrdbPJNDsFvJX3ip2r7JWfExbn8fY8fzb8K5RcDzKx6HzbeGxM1AYABAf9LVHFHGn",
  "key15": "3WjpHdNEnkaqEKTyRRayGnLBtT1goqonGVQQWNpTQZPYkZNoC3BMHsEHph4TFZjiTtFLgkmP7codHJqQkB31ip1g",
  "key16": "2jJfu21tYyYmUHAG7Syp5Zc5Q1MXu4K9wn23tUgjM3m8it2dLrYW2KK7cBPmV9mLnRK6thBiAMpa2cH9afszhZ48",
  "key17": "2a51AP3rY2PZmTjV3uaybsjKZTJ1VR1f3bHXvtUw2HFYMsxhb4txZ7Db2BGe6Jc9cVsdNwSCfpAoGrMakDFNiRsS",
  "key18": "63SWLsKXcZKd9dTTcEVDUD1FpvpkD5pX1F6AUSYX3rWTFhwzY8MAaxBYftLztwvQnHFdrS3uKZGiurqwiKpCuLVA",
  "key19": "Brode6vRXzGpsFCxcFSr38z2crV4kCho9UBLHV4YMQL8FQM8Vohky963GPhLF6nALdTEsPkKxxnfbRjvJ2FSo7m",
  "key20": "61QjcNs6ex5CiHcWZEJCm6n5zgssMtefyE2S7F1WqrxnFRsmHvKkMPrFfBHLYWtdNzEh8zp8UAFW4trvBjjHtjeg",
  "key21": "3nv33k5iARQGbjVvTViWcNuECViNam8Fo9Bp3xasqLjeT9mP7uRUpi5Jj5d1ERiZnsD9XHky9xLqrp9mByXzoRjg",
  "key22": "4GG9xt4PJwFHni7QJwoU46V1CFvQyDyhuPMRVwSNbxYduUGXNGcYBMY95EmuDpFtrT95bhKSaoSMPRPHFegzCUzV",
  "key23": "3a892fFZkK9cbsqxfdJ8wxRuaN21toZo6PSqrE94v7mJ9RHfYNhq71GcpND7jcpCQa6ZyrJfquYYKEnS8dxENzS3",
  "key24": "4xLqxrwg1G9QhhcugQ5B4LcfjVSK4S9agAGR1KZKAftqXsqvVBv9dff27igwgtZ8oNUXZWxHmxSEgPBnt2Tt9g9L",
  "key25": "4HKrDpTRrPwp7ix2jGuaapejSMSYx8Kd32ya4VBexkA3veyqXaZNe6iFPjVErwmJgRkN9HarMd9Ys21q1YYgrBbj",
  "key26": "46YmQDLTxteQ9nK35BP5jXSYRoit3v7juCKUjjVyzHaJM82e5M3EVHyNocY2JVeTGF3G9uQhBGCaTrcjSguLWpL"
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
