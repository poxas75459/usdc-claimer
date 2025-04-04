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
    "2o8usS8B6Kzsu5wa5gZafhQYQLHKd9EcFBZwsniytSiaVPoByn6zz4o472eK1tkmQTZQSTSggopLYwYiPcy6P8e7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314zxZpTybUnDVFHx8aCCgzfruNq8oBs8bEiQCEhqZAaX7jDYBXd81DrtH2WNpZG45mCrxjWew2Ze49v9gSsJaEU",
  "key1": "3fSrV9ZcmA7F9u5bfF9BdjkP6ttAt5onHjEFPLpGXDHKey8Q4bDoYDJLvybyxuCsRNieHdTCHGXZWXtbEShEupjh",
  "key2": "5jCcjy8jMe8mvUVXJdBTJaWfgrUxe9oFoxL7MNNnoz2BVq3deLzqrb4DQeha11t8BCWbm3y2zz3LycshvmXTtQ9v",
  "key3": "2Cnkau2aRUFgGDLDNRFQHYTHvEWFsi5ukTea1jCpRaQyQAjaU8Bn9QVRoehw86HxxJAnXVa3PsTt7NhaMzpBABua",
  "key4": "3ACrUaSTvVw7jhjffq8y5vh2SQwC6eYsVbF7HwWdmTaBrUTLWQM9a1CjF8GbFCFFb2doeAZxDdfneAaJhtwdDNf7",
  "key5": "3wo3sche9XGyEcWtJyhoVoCQiftNZEPwmiwh3rTLLQjCtLxQs9LroayywsdmEeRoFrJoBFyVNjWwqXRrjTMGoPfo",
  "key6": "47mWUR8TMtAveTBtVsVqj1y2DZXyMEWYH6YVJDEyvqy8uQCNzC2SSWZBd7T7ECeTanwTjsMe6DzCGDDyv2CEFVq5",
  "key7": "4EkFk1gwBG1hLEapH23rTuEPiKfs8mg3M5BfBxpixbD9Ya3oimF72VzUmZ4Pr2idHwWBvKR8pJMFdtmpMqejhv5G",
  "key8": "dRhKsDVMfhNR8uEo4nfHuoSBDTaVx6dN7GU74cEte9Jjgz5HQ4bcCuHk5zmJbFJzkFgNniC3jW1vjtuXXmKXySD",
  "key9": "2ZadxLSaKsotADCz32WbbiTiyZsREEhWnBHoA4igLcHW6V9VLkReoZBXmB3JLWYh37tNeBb3qqwpEdm6xW7YffbZ",
  "key10": "25wRXfuhQfvz3vN8unJTqhkKDZatV1BiwHqLUbS38muzJEMDAXMnEaEFcxbFyqBSdEibB57zEHjQjsGwixqFfDjY",
  "key11": "z1YCLVLkA1NFFLGo2yL4LWo6KYFhXiPVPABa51QomADRvd4p4FC7XmRLYwCAPAfrmB5ap4XyfZMkoB8TgT2MZXg",
  "key12": "3Aiz1QW6yvFJ6PgibABDsE9YV79KYXk5MZSU9voAW1XYqnYAfc1dqHgr9ZBk3wASsajCuBf5k5ECNERyaQuzA2dr",
  "key13": "5azcn4RERKmZHXgpXzyfDqtJXPYgRfZf5uhVXna2Vh6sLw5ppqMEsHwHJRELbBDKgk3LuMYEwig9ZVkFqgNKEsrW",
  "key14": "tVo22DSpmLDiLwk86dLXMnJXUb2dVwfDbhZVcszoyo38wUHaDNBSfpi35V1JFcfCkE3b6SCzMpCzJDSCPbfB17x",
  "key15": "5Cn1k9UNYxxJ2vQJqbrphT7Vzy9GV93Tmk6BxmrZwMpxmTBdaJXVvvsDXfP8zgZrif8CdR4jU1dVTSDPFTdZzqzg",
  "key16": "4m6hewsP6J4L3fxLvoLhB3zR7343VTpcnfyYsnnWeCsFbvZ8T9n1GSMiqqFXHMMUJ6qLjo4qa8ipEEaAcw8mGZH9",
  "key17": "KBQNu5KGJMqiCyDezbJJkubhsztGxczTAh9NRJpuSTkteYR4wpVy4hJqANtWovE5xdyt1uMZRZYLPKWPYNSFsZG",
  "key18": "55t6YJ3wc8nJdb3C6B9sYEnEBMXTTmNTvSaMiRE7fbcwQFijEKkW3sWrgHXuoP2dsRQNCCJFtnLtZ2gcx1LMJGvM",
  "key19": "5ELASC6HH7UaReP5zSN35izB9j1KHXEwaYKHxgxxe6xNiW19m1cwkeHdknMEXeLbJfN8FnNqbRVFnDpQmcsyzNT4",
  "key20": "4Q5JhYiFkq2j2B6zGTVCdjvVWscSgU4VVCTuKgu1fFaENvriuL1BHZi6NfowgZKy1HAMUQe6yKiSrf2wd6B1tcro",
  "key21": "Nvy8JsdAPEyHjzojHwS1aAncN2ojgmvo8x2T61jKDXwGC4aiRYpPha7ZU6tvXTZnyzbQHqozTVPuBG9kVFzsgGR",
  "key22": "3wgqXfZXfjPdY8VniaiPPp1vk7ERPwcAcQzT5ozUFQPdyNLmwfjyKR6Pn1yzQvFZkmT7ZtBcGTCoMRJW81WUkk4A",
  "key23": "2iN2vZ4evvtsRgroNojvxNEzvynTPgDSEn6erMZ9bjCSPUgwANYVSkk6a5p9Yfuk59q4QQWhVAQueRUNBFy2cV9N",
  "key24": "5jiEm5qrZk4qaaw94JZM45Uv3Cy7kLC4tixzdP8ciPRe8hG5qUcwqVfxDhRxAU32FK5xje3v3hkSAzzUTZ2qRJWX",
  "key25": "2PwUUxKN8AFTvrT2ChHDS839ro6xCZzmY7f6UWpDFTq3tEqZZPT4QhxWeoRTz27qsgmfvVahygpJZRb3kRW2AgFj",
  "key26": "4dVurnihqKsHrmWR6wCcgsaDc8id9mAMzD8WcAPYjMBkUW2SKoBFFkrNycmv19c43HnXbb8KxEaxU4cBzLXDkYjA",
  "key27": "5w6qSfjahbLYWDdGTD7H1W9pj1QdJgL7HFdm8NxtgMwNLqC5h3V7gJTBXxDFAEFUg7KtXrJu9UDVCrQ83rvA3xS",
  "key28": "rBZxgkLhqCdAgAV6CSCQVK1tdrq8NVsK5CFGE7fedGmsWehMMWqPqycWaLUrs4TzVjHKMET8yNhpgiXzX6R9VBK",
  "key29": "pK68ff9djJTnd3tqHQmyqyPMYGU1rQQSpgCgkmvF2MTFFF8NHZHNhB38CDwebcGQkZCepjZ9vfCkKfmSjK8oeXz",
  "key30": "4gdQaKrGqW2pc3sdhvC7JXNGrDw39dYw3ymvTXM4fpsBPMD8Xy6pKUCt7YXwf5jurcdu6vKLGHoeq4sHKXatq1vx",
  "key31": "3Mu4wDk3J1zxPaDZaafYLne61z4rTE5V6rJA9fi8TUjjdmh4kBiuWKS2yMgRQGZNPUvKgKpzLAR9fRCmqC2BWuph",
  "key32": "3jn5Lh5DBUGQqS6yDBDPuKUSVSmz1vpwMuQZMnUTLRqsyg4Mfbf3YS3uB4QBryUYNH3bioDhG76KskWN6ZB6UVYY"
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
