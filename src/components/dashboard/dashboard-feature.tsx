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
    "2zrtFetdnm4p7hkmX1b3Z8ktVkwGLR8oznpJLvpaqqCWuhcsoXnzcUfKk8zaKmuD1pcLCDLDHsoCVjEDiVBUtt7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zB2MVUQDCDWWq8S8BxLz9CxQG6DvpjjXWK6is1i6tqZ7NcAohm5zBkmyBHAvw67w2ECrRZsWQvk3THrpNrQc7eK",
  "key1": "CgFdUsSvB3VHiaTnfX87xAZ9DhXCVbf8YWVxkhckb5EfkCzQrA2kgrN9cyw8X7bhxjhaqsvP2rJVM9uQPuZoeXa",
  "key2": "5vcTJRFvEzc7dyu77e9STybZXhDNNu6CT5khPB7TH23N7GojZP8HNzzLbf57Jhx291HivqEqMyASmhmkSM2V4KJK",
  "key3": "4s2gcy38wVbvBWn1d5oC5hSak2qrgivYrH7uC3cY2qEKNBvaKrZYGJpqv1hxh1PNvF1jrzYEyAaQc1empfeuE7Gg",
  "key4": "amQVfScLQs9fghc32BRnhfiJm323MjDvdM7NyNY8AoeFdL2BN9uySNGhdAzqbDn9zVEdbjhj3QTbfVjYmxuomjU",
  "key5": "2F7x79J8Z6pfua6HRQzQcXFxsvfXmy42qZou9ypdvHkTw8HYcPCdx2WTPSP4KJhBfKRUF2hn1mnCoUfN8wz8AADs",
  "key6": "5VDcjQemQM8sWgZywXVcv1DJicaUeyDdUaeiMmtA69bL4WGsqGvJQpFGULm1ELPFuCDzDP9s9fYSuhj83eiujVqh",
  "key7": "4PYQJvKQMTcT4WC59HvJ8cXBpJrZ5tya1ntRgPDdLpEQVKS2ALHdrQbNMcCZ6wTcxfncHy9FcMkumGXDKRWG6qfJ",
  "key8": "DdJZQyvJ9HkvXKgCovgaZpkGdxoBRuBVe1fCK3oTYiX7BUYhmSwsEihr1aBygjUtU8XbKwgR36g5WZPaBUzQLRV",
  "key9": "2E9fxfPiTKHze7Bzm4HFFBFfNvHXNsQUVsvaSLXNg3EfX9CQ3sUbYSDLA2r23bsQSQ3y2RUiqS1rZZ46dV9Hxp7i",
  "key10": "33P9Rkftxg9FfQdfmrBLnqbpcsL4moRuLThNVnL1Qm8NUnRAq9tMVXdwibkwpEVgCYJp1nYthLxJMDRkQjp5KSLk",
  "key11": "35N5BwCZPV8MKPRWySC7BaoFzThYXSuACYBEPHfKU4KxsTo7pfzbpCuG6oHPYec2AMRp6DPeeC8kjyrKjLuigEzD",
  "key12": "2dsfDKce3qw2HGQejqKPfN6VgXqhcM4ZuoXRjfABCKXqwJudZTEFEdYDd3TrDxaxx48kjUpjgHMGqQWK4jZUKFms",
  "key13": "4cxFSWkfV9GRbKUykuneWhs5hDLEi5y6Rkrn16hvcNqXo3FojFWLawR1rz87qU3CKoQAwxB7SYiWkBQd2ivfQW83",
  "key14": "3szCV4x8JNZAz9eHDYcmatTomzY6wELRvkAzZVfS6HqjeCYCwrivAG477tuwTXPnniMS43sc8rMdN1giDfwFJCcy",
  "key15": "5LnchdJte1qeGLaGqZm2yyBEMYf9qgaws8cutSPNsYrZDq1NtEAJDvUfZ2YuNXyi2VAXkNcdrWF2mBwVMfMjbk4Q",
  "key16": "5fDhVk4R6aUDQwScSPpTHWdsgjZtPqa4hjaYVx2twdAC6LWoGsYXw4bcYkZzV2sqDYv7fSeDDw3F91pZLVTRwTMA",
  "key17": "4PLHkrMTnearXCKmaHWscxDTtq9tFmwhSqcAJz19y4PHzx6jH3orYVUdHm94oi9VWgtBEkJi3mBVDwap6eo7cJC3",
  "key18": "3iA2aMSJt5EFbzbxX6g5UB9VVNKhDutvRLxKnhZ3iLAiXNadQwzvmU1p2C51ZGFEdQGL3H41fbhKMXRaATfoRbzH",
  "key19": "yUy3o5LxLX7PBT19tGB8Tc5iYdrbrk3LNV8rBdUZjdqoi5b9q3JZRdKwNreDbPi1gfssk8CBoGYZ87gu63RZsn6",
  "key20": "2NDiNHRypaYK7hHNGVzXEEr9u6MGgh8Q5c8fHuikGdm1VUdV5pMCwYAFFwno14YaPvjDV9McNjU4TNJpJMcqxj7B",
  "key21": "2wPqAgLQMkYUtqvozeZSUquim86472YTc3wqn3Q8F7inKK5uaJNEbsQbdxbrPS22PpUNyimjCSMuvqLrJsyP4FTU",
  "key22": "2QNBi6fXyZQfyxJjE1BzHyZWbM2RXgjZUBEZfPzG8Yon9kiM4yPdjHASBerTcCtJew5r9PZvcqUPGsi5woq8RgdT",
  "key23": "4gogfXt5iY5u8oWsHtcyDfNy5Hu9Z5V5UNxtaMMDE55MdFfwZCQifByi8jgmFGqzD1buKu6niBJuPPKUTdcQXbGU",
  "key24": "3thQi634mswWUFmMEMZgnAmFj7dcfDrQBow8rqpUAqGYCrsEDqJTnC8KkisdeZxTxRrbjUsAH9aXYDoKhgd9utYk",
  "key25": "34eSHajF4Hny3Kprwibca5CeCtgxvG2Z6xYxDofmYg73ugyLWqaYtgDTBMZYCpwK9DVCA8stsRHkJRKyiYfcGYM",
  "key26": "2eE8ncebC6oazXoEg4V4nNkbLYjZLp4DHEVf8eYjAiB3yuvEdhHBZKngSP4RWgsLYFexLiKNJpn3YgfKsZTkUBik",
  "key27": "318X59uDXUZse2RwEU1ef1w5xW7FZTsxvAqEi5ALbkPDiZcuujxJcX9RE3vkxw5tZLKh4HxxJA2WsQkWvPCixi18"
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
