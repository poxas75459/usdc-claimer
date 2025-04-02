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
    "5vZrrqDfMoZbQvypQbnApoAHoqzwfpABaK9kBCmHFcM67XPvh5s9B9vhiEDT7UrHCHkVXSB4LPwN8D28nh1TDYq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhBKw1F8MmkAc8nQEZiPJauGXuowazE4wELv7oyg87Q9kNxmh8RfVMkpmSYvi4jACtvNV2xWP92uUtDp187GrBg",
  "key1": "2jivk4QoCbMUrc1jmsv8oUdxQJSqhQk3gys4mMDt7qWzt63sy5Etv2wGKN8Te1TBEWiXpJgbB4nydhywP9i4krf9",
  "key2": "2q8sYmqz7h6MNWMyLCgUhi23FyFgfNCYgoyQpkjv45mS3KJUeyoSZekED49c3UM29HyDVfd3YMW5WZv49uTyQrmf",
  "key3": "4Nr9N1WRZfh6JwHvfb42bxWXPzoNdBBPxztntNyRipnXfpWdu8bMrY7wJM8qsV7d99Wab2GTueiPrtCGFjAXAsi1",
  "key4": "29RBcC49VB16TBMAHst38urpMxpwWiqSnD7P2kw8J5JXYSKtRts2hPRbjHjjtWuFy5syvfbWZmRgDTxqyh4W5znR",
  "key5": "4nto2jSUcdsQBV454CM44SZ7haHRS7pVdAzMgqHLs3R8QU71vuoTQuMEaNE8nHpYJwrdTN49V4YesNAWrLs3zqLy",
  "key6": "3t6qpqekhHhsyLVHZTf1PiARjkJVdzGSLRxHEwJT8wzVjKkDXhatQGiEyKDvr8q2EiDbZZQGc4PrVoiPF48iXGvp",
  "key7": "2xtuuGTwWf6Fzjz1xBjXfY7CwFkHbXyMwAhV9p4M6vUkVB817KjB3P8RjGQKFQv7mdrVtvKEqRGczEZL4r3wDwwG",
  "key8": "2ZzEPWy9cF8nnYRZ31FgXqEiPN4Gycoh2tgxn8QQcaCpk84hmW4wWTymCUhZzAZydc3AHzCquBTUkVACbgL3HWQU",
  "key9": "FDezAwNXhVm8ZZdZBj1TgB1NLkkjGpc6cKQ6yfmYnxpBShj6ztGTtQ1mMhUHCkNCqKeStk52BtbnZwMoyDU4wSX",
  "key10": "4F23nZ2zEtoNevA6n374G9pVoKwvxmKUVDxqacCRxh3NynNgWqbqF62ZMnjGYGNrgyZUYPnErdykpdgeJwPpuYKB",
  "key11": "2BHAHoYHTDcG6VN6i84GzCNyJoBc2rbv14zvPa1h2a3cRZAgX15nRrpdaF8d7wRkrUx7uBTFohf5iMHMspXzbkn3",
  "key12": "yTF5ruqfEvZHRT5YDwYbxeMEUWxYtwz1uaW6KVLMq6NvubxiEczkgW7UCG9U9KhtY9fvQyJ8wJgaWzu4688e8NE",
  "key13": "4FhPBbtheCSYNEip6H8UKnP9wCHyU6U4XSPoEAEehwzU9GbRJF9H6txx2godsGrPRkQSR67tRo9AYk2S8c4wKpvk",
  "key14": "4bHewomcmaWPgQrdQXhSKKRss9jxwmnwwEQznZmC6y7848TMMVeKYUYimqjwqQZTAQ8fnVNjvZ7ZRW8YvLC5Bjao",
  "key15": "2wNhNNnfR4yD6uNSN3tk4fGWKLkQoTD2o1VWSXjzajvS7rojDM5LT3SzjbsUYkB252VosbX6v6zXHKjvoRU7YBG1",
  "key16": "3NGhRJqeMXhp9e2Nepk8FeS1PSri2UrFufnB527XyYfn79i82U1s3keYi6nZAavdJ4D514inFkTRgUvnDL1RAqZZ",
  "key17": "4tTkpCQEeM7wUoBmCSYzqCUeZ21jRXchuGDWcki7ixqcPQDAuLpjKc6htgvyYM8XA2hg4oqrtnyNmVVicw8QQuYs",
  "key18": "373BftwMgMX7D2nDSvaS4rk9bRGbjwGWisx7tAmGNQLvfbY5s9bXGx6wUJnt3WmgGTXmz1b8NLUrJhHSb444DHFN",
  "key19": "2UZANnbWR7JZxBA3gikCgNLk5FPhPgg7isUjsFVDQmeY78kDGg289ijH6ZBne5So3fDycJvgNdbeLBWwccYn6DBS",
  "key20": "4rN14n3L2p5LehP5axRCrhQJ3GPJmpXXMMbA9LRvcY3PthMVGvq1UFz2UYvouQAtvvnbPnQX2bK7vxUHskKodxh9",
  "key21": "U5uVSVCGTpbKNuwbY4cT2dQpUjU3wVsYXeUFXpWYGThsHnfbUwWVLUmmEz4aBCWCtbLHUyYcZgUM8g3qVpzotsf",
  "key22": "4BQLa8f5Ch7KgCAow62WfUWzUVidnRQgMiewkAo4spT6rGuQKZaDsSiwVoxfPqEwJJUvCoZ9eWGfhP1pvYu9RDG7",
  "key23": "JYdDAvLYpficqLiFF74WnJmPKtKu1L6CHamereVm4Vv1mZvSjb4JsQ46pAjAZMcecbDQZ82ArBf3TbKhVU8Nudk",
  "key24": "3n9wGEt7XZen5jEiJnvxRkEwZQ43akNFvJ16S61kcYqVV1P5P7c96ZwsMc6K9r84uRmk8wVBoefyRa7yujNNDMcu",
  "key25": "59hk4iDpMUYV5V63sNrejSoBoSh5u3y7tax2979XBJTAXUHDguLM8PmZcKFQffymfY27c3fBF8Yw3B3YkrM3VR5E",
  "key26": "4fxQMfiuHBG1H9yUXGYwsgy7bjDAo5EdzuVgnTfZTEZRqVSN6mVP4uMmCDfXCMjKzXduB8PXyHtvWvBnhktY7qfv",
  "key27": "3Czy6dAy8amTCL2ic3NPwsjFwSTeUzs4NznNXcb4r4iW9pywyRsuXTB9dkpCMd8EzBWqsoPECCn4MLEkWGPVFFKA",
  "key28": "5biy6xTxZS6WWx3orTnhuGCwMp5jcNAKKrK1ws8wnCj3JZ4XiW7nSDSeR4fGDTKrR1uw3wkMrMLyj8TPk3ZBLtcV"
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
