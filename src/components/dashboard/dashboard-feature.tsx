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
    "2ZTvUQh9Y9YsthSZF36tUPsHJnQZVeRsHLnnFQZVTzw1ZVixjKkX9hCfS5DoL84bdf7SjNtXHoEYprPshTkocPwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZySGYm1t6nALPa87Nop6x9LbHFxVo7G5GexvwYztt93pggEmpSttce5k7uEFcELnKT7GR6od2xGiQXuBc1ScTR",
  "key1": "5yNCxYEDma3XMpMuYQTKQuSAuwWbaxhX5PxSWgwTcYKAf9YkkTF3aGyGKStKzUB6y8qxWMxgvBJ8PYUp7NFA6cBN",
  "key2": "2vWDK9aL9T6QFw9iDrGJjGWbRZjXAqAATR5u836BMsZF4ZPC6qXFQp9TVUWgE6DGttkHVJCkc1Wy8YxDjcoHoV7E",
  "key3": "2XW9iYex3xCg3UKbYEBmtt5tsD8PSn4RYHKsWcdsw1JNGhy1YkypEDdfuEjQMwUCc4KMNw29vLdNfw26aC6CcS2W",
  "key4": "nGjy9rkbUSLTxKjPPhmiBbfCCGibi48SsfNnwmg7whNWfbH7yZM3aEg2LxD5fgSTwEmi5pU6ty9Fv7siuHVjcCy",
  "key5": "123X7xPx9uDQzKJAcNJZNhu1E2YiZZi14pueg3bSXZGurbNdo9Yk8F8JS3TsQ4usrC4UMBqRa8yzPHEJj25BdaZB",
  "key6": "oN33pA6i1NXQ7Tj99x5mv7KcC8C6s987UcYxVgjGXKJJLxzp8KmqBMHYMm9bazfCQL9fGqpQK2wV7SLpxVnDbLY",
  "key7": "uwgbM5UW4X75N1AeT6uyYTSV8xDsN2odj2sqt2jFEENeBC3e6d3VZFnM4QMNnnWdp4jHyVBQNVwFq3JiXNqYPML",
  "key8": "5DB6mb4JCrypYm2yEacTeTwowVT6E5B5euBW2sDXK1jzQSEnN9oeZykj99XJnrzn9wsKCdsw6jpf2MP5GBHAUYC2",
  "key9": "65Gm913DZmxRztjfRtTZkzus7beN5iJBdHN7M8YiAG75aFruvMUWqb9qHFiuKGxzgowCHEkHKV3immJ8FGADKpaU",
  "key10": "GAARSPnvPxWQPNbEo1UTwDjDfQLjdQ7Y6TDQkHfPak3x7n9uPhkLgmRTyEirZJH9CAssqtU9jqCKf65TcEUEZn6",
  "key11": "4UvsfKrXUGoVeJhXzx4gwAqV13xJvZdDNjXNor8GYgq3XbPq3vTLZA9QP2Gw7f3WTku3z72SWVXCR5etD6CYgyPq",
  "key12": "5sUAH18rC3HYyt4BAqii7a6BUqkgucdR4tbCt3B8qUz947dYGvkwREqfThuvthKb7AkaoPxbMiJHw62WpacVrMvH",
  "key13": "2Ffz9aVo5EYrd8YNWX2KjbNjNwSzgfTuLrgoEFNw3DLWNx3AZLw13RzT8ZrypN7CWZmStyE2ZgJ3HN17pVGcdsiY",
  "key14": "2PNvMxko1Qdwj9Q8tJ28xNtKUYFcd85qdYyeP3egZqEBJ2p26f6etQxfanxy2SgrPbrkMpUSuGMZ1gF32PJxUBrR",
  "key15": "4twzz6S3gPTtWSz3YUFsGuvK6T3MkiPhk7prQmKgFAPk71fBro5Vk7x44WzgH2PFneiDSXXJTb6NZzjiruMAGLRn",
  "key16": "2xrh98xwNdrRpZFQrwZvhuGktkvTox3JNgHVuuiohmsk3YxhHsujZzyTZRkkWZeumLmddRHg1Nq2YUQLb3BeR93T",
  "key17": "5BD43sHuzb7oQ54ZuCX4K2gZSNWWx4SAYo9FdkT7n69fTuoYdYfmjB42zy9EMnDzL9tcm6HR3VUVnaqLGa79dJwz",
  "key18": "5msYnm73tBmi6yGJNGipRre88CSFmJCtPyzvRt61atUQwY6bJAkpgp2nBugs9XXT323FkcppNL4mQcLykA94NjdR",
  "key19": "3YoqWYodMRCBp8CsPwM8agPz1BJ9F89Jr9445cm6CmSmV5xhYVsqW3XvSpwhnM3KJ8y2bU5vg1mrNnCrymxmmQin",
  "key20": "5Mo1pYFSKJKGPQYiP8oHNUFeCvsHVvi6nfaFThynQPV11UnDQAXxh7nkixB5sSYz6rS42ny4fvY4kPdKqQLLXCWy",
  "key21": "3Gi9hupsFWeWFXPzGzefKM6yg27ZNgAoCVAnfvQz5Dno4UW4uYXy87mtTmBtWs8NrGk5X3Q4jgJ7gtmd4ocjiPy",
  "key22": "2czR1mFddU1Qo9Gn48g6H4SH6mvcoxZ8ZpTaaXCdKAMf1SND76iYMj4z8rnXsjAzfUY5MYCueBv6USysJwevYw9D",
  "key23": "57Gv6Q2RgdJ16yCHevhg36r9Yu174ZYho9LSRRdXqCRhFNZ8qEpcZ84DRaVuhH6nsSN2qSxFRux1ucr6uX7GCb8s",
  "key24": "56acV8M8LQw6oy6JqDS4JqedhfwSUW81yEzC9CW9X7BRtZh8S3Y2myoUfuBKrp1xwz5Z84Go7P1qrVUhDGK4ABaJ",
  "key25": "3tWXJ1u3PTJYyNrTLLdwCjki9BWpG61gpZpP1PsdhY17jvcn4xN3fVbzqKC8JpoN3PsRFRM5aNHbcbaJZjGrkTEj",
  "key26": "62J4pY2bLiXJg9gyE5HBuJDDXoJVv7GUfidXo7StVCYqYwzgXqXfpr7xey7NP3jsUiM2q5oJfrFBTPe2xFtKdBnu",
  "key27": "44NMXnUnwyYVdaGwHGB3DtWEN2WPfmu76BpYsFdw6kcKvSj5YsQX4EShVpUem1DamQu128dZzkjv3BfRjPCF2EuV",
  "key28": "53hW7oHJmNahCL9swtS73EP6x9EbMfPpV7WNGQXVSVrSAmWETXSBjJDZadNczRySpqi95jzFZiQGkT36N7rGWkKd",
  "key29": "2etfTEEf2de7kCPYYCm7VsLjXzEkcUSWGQFvt5gvYYx13VK8is92MDA7Q4JUcyry6dxSRWi3BtGgHjYhmTwtiT8H",
  "key30": "4K1cYiywrvgSeECa7ZGPHtKuCdDkxkaDaRrLhVKDvLk6bYukUv9fqQVbBuBn8cjuhKFcGfMQBdVcxtAtJPJBsaDY",
  "key31": "4yPMsTzYydRgCXRxXC3LicmzC1XSju75NkF2Zjz8fwiLJyaTx5gszDSr2asJz69RWQuAvdxwLo1r2AoaZYYsJZFr"
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
