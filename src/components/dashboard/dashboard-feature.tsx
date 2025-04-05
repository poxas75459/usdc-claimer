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
    "3uB3hnt355FNZPW3qxbsWp4qGjPkzyMH9xxoe8weehRpBgSB7rmSQhpwg3yz3kV4DgAxxknthwFyD86kPRSpwjXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nbkUGQiJFJn4tNsPRHPZmNnWaNuYbMqXaq7BK3EkWyNg7usRuHUURpAWcbfsbmJanva8LAzLSh4pYAR9hx4NV9",
  "key1": "3QnazbF8oW3FZ1ULNFNYDCoje97wFEPHtBt7xVNNQUbpiUBn3k5wSYy9qqkMuB1VknQ99Bo7ntnZ3L2BtJ2mR4v2",
  "key2": "3DhEB7xsm5Km16ywZi2Tdnr1s3JrcPDcbHjmCiTkg8o6LKXM5VmwVPEUsVLvQfm66gueFX2zTBgTueBgZevBG6Cj",
  "key3": "39rfAWL9wMfyvgJnMNMQQDCaESaERKgGN7TApfxvXsJDVJu1bmrAhR8J4QbVf5jhmZxfZWkELf1hVvUQ4Lhd2Bzp",
  "key4": "3zMNrXTFtBN5ZbFr99YgmLGhoNKtbZ7zzrMBecfiuBW1X4KmezE4HXBZad9LcKnEnLY3wuKoo8L8FE87CC6FUMT3",
  "key5": "4oroL5LDoj68M97kcYGgUJiz1yZgSumDH4JUYhbdWMcx8C5haEucfRQAa1QTSYLRLzCQupFAdZYbiHATjMu3PTWQ",
  "key6": "3Pc1EwdThkVzahJ36akWYaT5tmaFCABbhA1dr9BeJb22ey974huN4XoKxy2wFhvbD4kMWfseP7rWHA2guvwprgdB",
  "key7": "5Gajxtaz58pziekXt9prX74p4n3cf8SXiWuzBsssttNQ7cZs2htqPT9veZ6e21SdGTtrb5CyK64Cw2wmRAyKa6DK",
  "key8": "3wTy5Ljm5zTbX3QpyAGuJZBNduMYWJxjb5JBTYAsVSioD21osjbPuyqKLXEnG4doxJQHezRoc4k5Nx2HEPK1s8G9",
  "key9": "5uGmG78CztNyKJKEUmfmZSrxco6WeX5DgJGJTbi2d8fYTbH2D5xEH8mmFQvgHAod9rXpi3w5sWBFKuA2EYeX1okV",
  "key10": "KC56w99NzVKbY2cP8AfEbJJvcaDYaULkj17vKQX9pAXsy4hnCK6Cc4XbnpesoA9DVMFqqtK5kroTDRAwMiw9K59",
  "key11": "2RsBGycy2LfyAqSimQPb1JDoeT6G8umcT5r9igFQ5yEV44dUayW9v9DNnnHS7KwNn3c7sZ3xMyZXGv5KcV78ZQ9c",
  "key12": "ozd8FPDrcHCCUFUnqYYCanTgBxuYNDV9UJWYqvxU6FQSb1Yvy6HSYgKvYWf24vG5CUGzHRM2tRdZPewtwoCh8z4",
  "key13": "2j7siu65fMExRBwvHtkimByi5rVC2hjGmdhJkTbTAPe9QvP28XCBsrmbVcx7w1wC2NU7mzTvYaZoorfPBivZMhwq",
  "key14": "5qrDjmJh8qdpMCXYLp9GMrUuFtjGoi2fwo7FmjRWQkTdsC8CTCkpp69WeCgVYNLqV7cj7HqrZSryEwVbqqz9r47i",
  "key15": "5SroBuXsfRVdULXyPxDwWSsGjRqEq2mJye6bpPmcpiHrMZbJamrrxCPnEPMt4o4qUPqTTAwF8RBqyWzbiUHNw82k",
  "key16": "zw9XMf8Aijuw9YSU4MhrGqfo2At2g1945xmuxvyaMR3kLgcqNQY4zAL4siHWkBnZKKJaT7Y5o713cPEVjnHuEDr",
  "key17": "2gRPdbpN5ifjQkDdLYoC8RBLGA6R9YDYUqT9CTjE6Hzvdcy1Rka1GTef64qaFcFBq63PYh78Qz9Yk5Egj3Nf8Vp1",
  "key18": "2SsABwUiqfYSyuZFZ6y8ghUZquLYBnJorqYdpoma65NmMrCZpQ2PnWMW8Eps7HqdR1J7pX6WkfE9wV8jvXU4JJmW",
  "key19": "3iRhsn2JiQ4ra2mKZxKt5J1HPWHeiHaQGy9vtxvX4YTfazGeKhEhdMG3cko9VFJjUaotCbzMHrhWGfSLu7WjT7PS",
  "key20": "4o4nvQNgKYt2BkNoCYtmpw6pYGb58aGLK6WoxLRu1gWhHYTAKVsLCpfTXDe7oNmv6BdsCwmv2os75KkCf5Wcffmf",
  "key21": "5EyTd543GVrxbFP516Zv9Svv6zVXH5fYmctHCcrvstjqBJnSYWQrK2xUG1WEXPZKC4byVpR3Gs9Bh2tgwwYeWYM",
  "key22": "2dYFRm474vekuTF2ZEWY86e4aZMqtYiJunFsR48bbxtmLhKGW8d3ntgJBt78nctoUdvzc2vzn4svvUms6QhdF7uk",
  "key23": "5RDGz27ARC8dQKLLSyTKDa2T6knSZKhJJAaKUn2oJVmwKAb7LvXe2MG9MCXmhMZVLC5c14NRrQPmvZfyg5AaBD4c",
  "key24": "jM1aGx4uCnf2hHY4ZSqMGwZjWuddwXQSSthVFuahp7418L558MMisYURQr8UySjoEqhbm9jiU39zrG7spYDDwo4",
  "key25": "3uhYCg6RPRsrBRxkLMibVX8wHn1KJsVtUzzrP8duYn7Kcz4ZikJvhkPwj6943XmEBMRhq7q1Mes4L4vf7cTTTGz8",
  "key26": "22gBTqEZE5K9ij1w3NNzT2LfxDDxs7YMVGZZWPe2zsZwruqB2eroK1ZmViBVtfAoU3BiGWjhvpTRvSVsE3NZpaQm",
  "key27": "52WN9YDy3zrsk6YK21FZDamqmSwd3Cstg4pdFVHkex93XgSp9wMLZu1Am1WMZFsx1EeVNrZqX72UiRdWezfSknyM",
  "key28": "uNypG7KKKpbrNuKxvzghpTR8gHA9PepvBqyLdMMofXjo8CjaCZ5RFUK5JbyQEgPMnAjDGAAh1KVwZADgPXhQAgB",
  "key29": "4rZ8RHLGau6uuBnf1m72fVegT1wNgVfTk543BBFSh8PSNQm7NyqQqwKtWm4QnKN9ZL2h1jYo8hzh5WUid6bioMQ",
  "key30": "Ngv13wRc7aSvJxeb2oW2pitNTUVaUcGegrfcnsKhSLiqFcXUhzNnAmJr2dwm9ELKJ1f8ZKftQoGw7TsqjVwaG5J",
  "key31": "59JYCDMPqZ7aATL1qK2ifprRRDmRd7DAzfkzJpC91GE5nZ7pNKPYJkZqZDfxaLWAWfxm25JrVNy5PhzFFsUj3WAh",
  "key32": "4P9Gnbo7et6N1idu6yz75Es7jJS2FkoXEVbiJQdGPFw163XdkNzEiiR1MgPpYQj8eJNY7MHHiACJj6his5GYrU2i"
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
