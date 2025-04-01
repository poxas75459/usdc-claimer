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
    "5sT7ZNKssPgEApL1zX6Yko7Qs96L9jdKPNs1jMBxsZRBBCq5pGxhybUU8J59wLFubaAm68LqaTP2tGGCZooB3Cye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWJuo4xiWpV8BoHzzJtUA5DxHjYaU8aaB8uQwb5f8YV9gN9ZjC76mzBUg7NbopkhMLxdsj1dirYbooZnhChhoTS",
  "key1": "qdZ6ndkqCrAYfTpQF6RvUDoUE6R8qQtd6bxoKvqJeJyL2BmJ9AaAtcpBiVRQcySHPn8aag5hgd93dt93QU7AVuR",
  "key2": "2P7MWAGy1WedYBCqLm8bCcyBduCXK52PW5jFKsAMfe6mosr3qCcAter1xzYFyhMtMmcSNK4k1DUpi3nEeBkQ1UCR",
  "key3": "43qxCGYYHLf8cwDQinu4zs9JfaPhmuikq1hCeAPEqCe65qj6hCGQESC16Dymj51fTYbk7enq32EFqGdSHSC6uybH",
  "key4": "K2P6p1xK78fn6JWiHteoEsQZtgPcofySUYSJ8PUo6gV7VPxWCFKKAcpGZL9VaTs1fy82BbXDTTvsBBzWZTZ5vPA",
  "key5": "3oL4ryb4qCdbm1UFJ16KzowVN7GUHVfRNRujuPZntcovkvdVTtcUKqmdyVnRo47Gvozik8zVX2hnLu5TywYtzFdZ",
  "key6": "3y9ATyoiEJpb3ChYAu6ozqz2iqotdCdastnHphyFTsjo9c8hpu6mzeqTKouXm8hG6YvaLAgPN6r4XmLrTTXF1bMZ",
  "key7": "25rX9CkM346YbuSzyuuUea5Av57rAVsfZnqR6VX4tx8Sho5Jq62KojtT8xUXRkTyiy6WUt3J9eT2iSWrrFk7uafm",
  "key8": "2FZmKkQCLun8kajZhvpqimLkUzcZZi6PL6Fs9enNYC6TZUG5e4VHVcTFAYBYGnXGoUkAT7Min2emaVabkXRWwh5W",
  "key9": "cHu5ieZo4f8LVreWQXBWx3VysuvpSvEJtM4z8SUwYNRpVL85mWhbbKGTaaNZUc1DmdtmVWbmUdEAFwJZDf7XCdM",
  "key10": "3q5CdhajhYQ3o21GB1t4sAXV45HuReUHf9btmTLb4fuDUKJfqBpGEGT7R2aS7skhheBqTQ5QZ7aHPeUeepSK7ugt",
  "key11": "m6534jbGGDQ19bHVwFCaDRzQNEnGkJp2nmsNvwTQkiNcUdfJF9kDn2hWfT3HTs98aafw3GryFmyTZGZc7G5AJ7e",
  "key12": "3ba1rQhhW64zkRPe8ou6QtnqFujyxxPZRgZzZooozvKfDuMAheTHJBsLUZVsHFtgZqFGoDvrJL6FYpB7dV7LcFy9",
  "key13": "5pUG6mYGRK6CwrYZheSSxm5YVP7HdwZscXrhtnmcDx2wyPitcqZUkcyRVkHPHApcp7tXKB6JjKf1SJNrLjAVPskn",
  "key14": "2RnaQncfP5d9rmYCvEMjNaomEJvGzkCVTwN6eMS7QHsnRL1Cyav1m1e6pywwpVSVoJwBgTc9vuWthbfNrFV9tWCt",
  "key15": "5r1E5XFekoq8qRhxCbE2NsvXawoe42KH1S8x5mv3QgT1mXLz75pJrS212At266GcLjbFfXHCfU8rPMzHisuy4vAe",
  "key16": "2uP8gcyNDLqkqho75NBgjDw7cegkf6dFXHJSPk5avD1FsoPcmEhcnh1pJzU1frECxWguoyywKdPkfvt2XYf9CTrC",
  "key17": "63nvTmcJVvDDE1K7eq46Z8Rqu3KoTwwiCFG2S7cq9E1boVgX2gzoc1mYG6iRKgdpkgvo3UT94DZR1aSWtSM6i2Vv",
  "key18": "3cqTJZRHM8srHNBpRhUmfmQxVUkPobHJ3DGQXriq7upRdJxd4kL7JQ45KXgLcvYbR1waWWiQBm2mYgRBdrtigPCa",
  "key19": "2fcqGt7x5RJksyugFCvKf2Am3QAiZs1KuLfZB19nuoZrenbpjBQMeF3oFgMSFksixG7fapunaTE2ar6YX3hmwzR1",
  "key20": "AN5VBJ5WAiQn8hHyhTMQkDFzKRB5kTRREccN9bTyN99C1DekdAqszsS9qpksKxYHnpEF7jnSaramnBhLt6Jyk6h",
  "key21": "3gjxuCa9hHdUc1Q6kfE3zJMackBYWLL7z4qZiQGY41egusDU8U642KY8ZAjJVdkCMepmAPrmyr9ktSxD2V4ccB8F",
  "key22": "2tizDY16Nfm7CbS3yb3NX9J1frBZvmKpuyYv8PRKychLoNMwmYpT9dGfszj93mAgL3fWiMCSnkexZHwntcFSEuHU",
  "key23": "4qxNiCXMAfHwb61UfhCH1NEaTSP8uHAXWStqAW23rnEjRaD1YKbr8XZC4jMySdjm9h5GfphnqoNFKkccFQX161zt",
  "key24": "5JCi8j6iqHsXUZSrKAL1b7nLazUWxMw1qvC2b6t2yu8CA7KHg97RhD1UYG1kPn2ptjUprcqt6eLgpR1KGceQQX5j",
  "key25": "2ii7xuzEdfBAgy1cjJG6M1MQbsaF9jdy4M1jDfitZB1yjGAxCZSb86cfyNaw2NZonCgNzFHGxR9YWPwMZE2Q2npt",
  "key26": "5nuLxd3oYWN635uhLFPQS6NYnUFUHoU1oBbXWXyLNcHADvB5Ka9RNEomQyrpG5UmwtuckpEAdTNuf8KCfXmNJ7K3",
  "key27": "5AuoJYCwx2TuuEGSuLZvmKWeW3DuxcueGCyXQ3XuSjDCaEkERfwGoTcCcNnayRf1VimndgpeaAV3kCgaqux5UCJC",
  "key28": "CUMkAJ6DLS9vH9uVbHfiieLEA4jsWaoszdpmuw7K1gYawwjm1SKV4zC6MkN4aReZQ4QTJ5vuWjy2vkSGX85sG65",
  "key29": "5oXmMzvt8UeyqiTdva9YYHK5LGgzFwLVQ7xUwuHMHPcH8WSivc1ng8WZmZnkeAE9XHDkQGKeUgK2kqDnxzyGTnFP",
  "key30": "4z3fWNcnbSny4v7YBTMKBvkpVGG6zsAaycUMFjc29vjbzozyVgZH99pQzjBrpWYtbcE87GFyyBzpgDSpaU9jghJG",
  "key31": "4ockUWD4CBdYcjFspf1c8BKb2VFSw1Q9LTCK56ABYaMSyjtZSGrzDCTX2D2MmtPhCaCgDWdepPAKEkb3ViiPRpYS",
  "key32": "2om8yNa4Cs3UefpZ374fAu4utRivPZpwKVJzQtjDcatbV8pMZS1koabNhmpkW9Fop4EU3rYdhJPfWdJakxEtQ7k7",
  "key33": "47VbzydjoZNuZSxSzrY52ohfMD96vs7zur1z962jd2c5N8JnsDhcckPmrC9CsVPz6q9BZNdyyCXKVsCcziWqx1jx",
  "key34": "6cRoiHSBdbxGRpz4eSd9NEzqNyRdjp5p4ALGfkE1R5UeEFL3vRann13LrrAjg6AYK4njhWm6su2QCzUfJnp3oKP",
  "key35": "2VKviNojZMCbumPGb8T2aFnLL6SVHPXDXH2V5PTJvgXFgVAZhNBevNx3hqsJ49LsSXNh8QkVNDrRJMmT99eJzc9K",
  "key36": "2GoDsCWkpNheuzpBV9tckoiBVQqPhoFwCSyCnyw7XkjZ8Gdd1qc3rWs7BtRdKfxBBTCgK3a8QcWX4VJiNHD7kbt8",
  "key37": "4G5QaEWronpJUJmzkKPM4VxQMK7rZiaQpECyAoJzj3GqN5ZHQjWRnhWbzCjUEYh6xBwAeYLnMZeTRQ97KJc4wNav",
  "key38": "4zuFdEEoeUz9L4SrJP7hGyVEvUtMWdqCkUatgG8kbAcC36WYDTqMGRduEwhD1fH3FLMRRvE9AKxxyJ1M9J8cYARc",
  "key39": "3xShEUkEUH2YUyaCeetgnmdyUqCsJShHrnWMP6T7u8J1CYofszWRRr6A13Ty6c4ALykqMNMb6JGcTCh2j5Mj8tbh",
  "key40": "5Mou7WXVL5n8N61X1zfXxvrc9dydmguFwTtg5N1GRygFjcc89PkL3jy1dekUedSdbCxSziFnopTywuQGF7yWiWVn",
  "key41": "5W6RVbMDqCwNwmGvXQ4xFEqzroHU5KAGUWz7MwvWYap35asiYU2rCAB71QpboxsfsYVTEqxWAMwgEkHowNJv2d3p",
  "key42": "4JuCDrJnDGf2B1HAoHRYvpxR7ZhuNsLNUHaLenRQuS35BhBX2wzmFfzmVgVJzXDE1sUk1t2Dyyex9UT3TDif8tAK",
  "key43": "52Nn6T29pz7BwPdhwjqj2LLViMVQaVD9nvX5xfaZVDhECUxK6NbbvBT8ZxouLZySJj8w5hjyDSGKGTi1rqWNFC2r",
  "key44": "4asFXJYE6QDJASjPK73dhgSjzMeAwmjjhP2gyQ34rRYbGAxxtqfYGE7rRqKzmgJYrAdmjXibQqok29FB27kjWAr3",
  "key45": "23uVwpwKhxX937BnxALcmxqPyRvut2qwkRuyzQsH4q6VoWfSLhQHwb67a2MNR4nMESZRMLxpwnSx9oaMWjrarbAs",
  "key46": "5g2h3q37s1MkZGxG5ipgBQrui49LhJjZU98YgQXRggM1MqYUFKZSF6p3CSYdUSAeX7SQdjNGPQVKZzxNPeuW7mLK",
  "key47": "dbCfmGSFg7qQiqfmi5nyPKLcvf1Ry1jCrWxjjHNmD15rKVF4KT3aUMiKLgGkYymf5E3u4dwzATwmykztr1dMKNb"
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
