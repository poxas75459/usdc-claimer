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
    "2tSHGGkjYMQcnmf2cGtLFEPUB6Thp1ZkVSuFWmGzX36B7hv43tkxmpsML94tUGUkBFZb295UNgdwfxdyQL38bcdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKt6gfzqRYPsTRJUScC3bFrXJtSAeDZfTSBZRYwL9cKG7K5jhKUKYB649C1hMQiKRSa857YpbDBZSeYmW7Em3Mw",
  "key1": "G2F32FX6jskzw2YifZYkrHTUnEp36wFJBXXqZqsZ1Cgisr6HU2VKSBoYAAcSJsoZKx6xySUGWhmF8VEG4G26kb8",
  "key2": "3YTyei6f4osw8VuJtHJoGpKUZ68if7S9d5qDsU4zdA6sPZ1fZRhim52h1nNMjZr2YSaXkK9EtTY7mqjBezByFUYU",
  "key3": "mj5i9jd8fGR6h3mGYQrTHhHRFfFuFYrVWwGVYU6PM25rq2YxjLjTAx1GGpaZMBn5TLqNXxe8mr6pPv7fvzEXaCS",
  "key4": "2naxJtEj2ArAN2WYnwnCJigmt68CZmhwquWx1HRR1qDXSfsexB3GYpbyFrRnjLpLJSVCVQocYiDnyEZRgBA2dKt8",
  "key5": "2g7kbCz547HZnsSerZkddTMTvATBEy4NQmamWuRsTTBPYWiY7mswWeeKSbgnbw7Ty3StQ1khn3MvnsVZpjmy6j2p",
  "key6": "2dod9QDHkSFhRQBFBJjQE71E2yf7ESHFQ82K8yGw17i3F8VDRWS75wSt6TU5x6FaLqj1yDadMX7U43DeuMQQK19T",
  "key7": "3CgQHruqyAdawsZCfv2Rpy4S4BLQwaUXVGxNz9VkDd6Vwy6NWQ6ASyt6ZP13C2AxNdzvUc6ckHp54Wef42jBkNWr",
  "key8": "5GARRSu5nw47ztaS7ccEqmuGhb7uvTjK9TwP761dNkGJrrRwvGuZcbDg4dULwsp6K7tBbauoAHAEbRbwBFDdW1nT",
  "key9": "5oiU22ChFetVkavUeEJ5ga2EHGhioHCmsve3LFAqR6XE5YZF5t3qn1SmdLTRdFHi6VfayWpPqqAcx4J5uGmYMrqg",
  "key10": "3jnxXGr3oD287azU5Z9eWrgpXQ3EXeYMQBrJLK3b1DwG4higY7tWRv5cGpCPQMmQ9MAg7vc4oKphwVb5t54vUTEX",
  "key11": "4KZAQ4NJjVxxU6AXnXxXJMnqzgh7c1sPaeGMMgPsgNyXEWhz6iz8fqRNQhJLBVDhGqPq5Qn6cstiRK5KdYDsJwfv",
  "key12": "2VCzNvCNck4kNy9XW9aX8qmvnnmvazB1iB2xtmq4LzmP2U6kdQZ2UWFMJDgVL7PgTDLZ8rBkvXLcdvWx2wiQFbno",
  "key13": "3hBMQ9R87foATgHVQ128m9tR6tytcgkGdFrr8PhRaH6Pa7Ru5sZF67ynrC8XbE8DJzNNHPpfq3u5aLcHVXyPP85t",
  "key14": "4DScNyDvupCCRfqkqnBcJ6RTzG6T5mdaAaF1L1fALbJ2NS82jsmea9bY4bGUWu2VT7zpjqQQp6GspP5xTxb4z6R8",
  "key15": "2tVzggWguxNH6bCWQA6h39ZwYDw21Q666LAfyW6hfYYgbuKMwXRHmzt7XH8vUfvPVvbcR2BFqfudvVm5E64rTXMt",
  "key16": "5fY58NZ3YxdZpBt3eQwdH3HPcJzC9YrisLdXFMGViDVWfkCstsHL4EkmExqZ82VV8HiEujbhcdP17R28xKM7C1DS",
  "key17": "kgGpfVcS6Hdk8T9Sz99ARa19AhP6uK25Fo3RD4TBzZnna6UCrq9KBRjwXLX3rJ2VegQpJzCXtxrxNtmVX73RBwf",
  "key18": "2g7CEn8zi9pLmkSNHwH3E6ZQpcP4YoxP9CSYUfm6xd9X9EZMQu4tmhnLgmdzoXBmGarb6wob14ZDUF4U42bMme3E",
  "key19": "2wndUNGkp8NuTxeHgcKU9ubQHrQjZMn43TmwX6B3DZhwEVRyayRkZEpJpMsfmvh8bJyGBY7Q5g2qwZScVspdxzC3",
  "key20": "2stt3oCChEp6vyuJgEBWnTz7k11bC5DG5LghJzVqrkRchDiudWdXVEpZpzS86Qu7Z9Q2T5igqjCEvTM9jZxNMSb5",
  "key21": "53DLkCwUh6LiMqP5ie3XvSHXsss3LavZNSKnwVt4tqURpK6M8oacgBsddieVsMMzWhz6gVcyMPrVoMXxa121sYLm",
  "key22": "3W59WuCqB5LsyVcas1F55ujm4FywawcsyAxfhvyKyjUZ9daso61ELd6X1d2ZUFSUKTgTTXdkafiHB31coqMiR1pu",
  "key23": "5efJesuh4NbqSNcJTGYbVWHRb3Sg2EFM1qJ7PcNiiBu4y71oEZhmaRUaAJrh6hoCEheUticZKBuWHjjU7UBxGAtu",
  "key24": "4odxYwn1L8NE1nvrMg27SAy1rze3r9a99ENhedKAVEBKGyrMMG2yXxksqN21ZmdDM5RweQvxUFr4nS9aNzvMkcZe",
  "key25": "2GQKqBgjqNYt4rxp9ZdvwDfxJmYS8sVJEBeqmyN8arPTq4QQcqDbEKBog3Hstq34C278BLPxXawAjFM4Wo2KYvbr",
  "key26": "4J8zcYDQ3Xy2rMfPqYMq4uD3wKQoqoNi5PoEwdhQc58CjZJYm2e9qHA8LeEeE8RTnnVaNfP3y3LRNQ9uRsnJRt8d",
  "key27": "z6t5FWKfopjrQPLSDSbh2wMxhU6CbmfA5C4HQpGYzvMp7j4kFyBTB94nb2hxdKXb8GbTJvxPTqNBS9jzmba9cg2",
  "key28": "RX1ThHVzgyX7wqtwbQFtUy1mgtFMKLSvyrLZZarJax1xyMjY7JKCW1jfbXoxSD6JTk877uYzLvFqEay7hNQvTSw",
  "key29": "2w6dqErGdtH9KNevNzQC5Lok2whivLsNUwGrwQPWyXwTrPdT7gAJKQKGh1sZg97MHme4pYLdouogs9XWtLzSLLM5",
  "key30": "q4QFgcHLjcQDAugmNHTF2MS2xxmoabdBcGzVZA541VENHnEANosqCYqeSfGNoUisAuxN7MTSigbqcts513U6kWL",
  "key31": "2EAvQEKSj42nsFv7fW2xdBzDKDDCvLMDRgrxTC1YPjqkp2dXdVjC1AQ1e8cT6WpRRagAppwcpedErXfu5RPhQjvb",
  "key32": "RauMJZhBDUJk94RBJvsfWVMQPUG5QxEVM8PrFnMkjQPQA9jJ6C8daUH51GxdNbW336SSahemFh5GrhMk3fESW8w",
  "key33": "4UHXhJXchNuXfhS3YQAwVwYQ97kD8FWwa48VFSoph9KHyXqj23vC8eQsnsyvhCjovs69JY8Bu85UNRkub693gqzG"
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
