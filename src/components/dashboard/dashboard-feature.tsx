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
    "5wKs2mvDWUMvrvroFQcz8mJyfTvQwNJG9GHfUBfsr8YzhNbunPqb5yVpbAGFaHy9n9Y8eCU167eacDvfwcrjWB4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TZvWC55eRfbBsifXTv7RqiCHoscxcbkX1vLRemtGYr4n7c3CmJ2UKk3LGDF6Evco6d3bGdFXu8yv9Zm9ByDg4N",
  "key1": "d9x33g18paRdoUw7uR6wcJELMMmqjs92vG8AvGJRLKaxooS7cAD9nzLwd1ozQKBQQb1M9gPJ5SnXz7UyhQKLZSW",
  "key2": "d4XVqQXvxydtqXemHm3BZHaCXLehqCBbLRRG6LYhX14xc6zLwaK4vB48nocZR86EDXgJMoFdpjCGF6F7BxiLehH",
  "key3": "67AZYUcFNcULmwANnXCLDnxbhWncFhHA4BsthNUzKBpNm9BpNSdSnYGe5AKgqhT9MoRjf2KcauoSUZc7EeYVXPZS",
  "key4": "5jVT3wvh4MRVjTKxhU9juHZnmqTQg8jSPwpXnrZaDL4oa7kdMJcwFbXNNdAWbtiK13SQvwp6WjKwuPddx1mugwn7",
  "key5": "bXCxJdcZJaW6T8pCuvGaXA3rJ7YuVNC9haVvCBJGj26Hb7UsXTt1YiHtsNyRwj8mNjXY87b5MzWiEzyGXBC6rtp",
  "key6": "TSQtJN4jqDuTjKnd6HzMLpmkEVCkPgEi2RCtSUX89wvoV18uXZ3gNsv3oHjbmsDwmfkLjr7j4Nbefi37BVcdph8",
  "key7": "2w6b47pTtVEx8Gn8CwZJkcZmus77tUzrk55omXr6XRmQxVCV8ScNJLJVwQhc66HsUBACtMFSrR35xknt99ezo7hH",
  "key8": "5ZL7quUnbhzyLQwSmdg2dv2R5RJuUFksjn5wc1iv7HGjf1MtHk6ry6Tq9ykfx8NP9Een2Tur8DNAGB5riRtbTUo6",
  "key9": "4m4N4T5GkQbF35ovgnwznNDTfdDnRu4jdiU1c4RZJ4JpD6jDYnpxEDfvUWTtGGM46iBFzRy6BC6Et4wububmBaLP",
  "key10": "5ZMAmqHohvmrHcmCnTcm1Ywe1CeYaY2x9oK8gHt68N9NYimZufTMK3uCgoQgghBPKh2SHuWrqrjAnQxhiEsTEeDG",
  "key11": "4zYsbnQan4e4PicfCRQsrdLWi6p5UZPrYvgFNp9EWJN9igr8DYx4hpDsEBcqwkxncakXs6eC3JgeVG44PaNz7EH1",
  "key12": "5KArxHgQgEXBinvjWyjnF6g5cJwP9UR2ooQ9MQ1eofP9G7tPV2aqL3fMv5r8QBSszDFN1bTsWPZQjFj99kvH68qx",
  "key13": "4qp2WmymoPAZn72TrKsAkUhHaHenaeSDFkDGniCt8VC5b1pCkUuyhWgUe5pqBT4krFWfVnpx98gGpRubCfoQFc6K",
  "key14": "2x5Ps3iHMU9knVNrodLA1yrJ22P9xdw7vBocB155cwuvpGxDpEkRBom1rK146SvUEUXwuXg6EGeSGCoPi6qxzzmQ",
  "key15": "238HL1VW3GdC2dB7yfNoSvSQV8sqQ8BHYAJpbhHSHuCD2YLjbs9n8VkAWm3p16aq4TsL488wbBRRmv5K5AR1LkYo",
  "key16": "t44McY3Bc5votXpmPwbjsJFyAZo1WmkXRrPdTswMukCHtcrn7sVdF7F5wd5M289fh6K2aNY2igNmBXrgPhq5mVo",
  "key17": "3rQp299wJpqM7XKRy5cpajPnrddEAYhRjQYhUTjKwieaNcrhPPGW7HUS7zCzCbRgNJcN8apqv54UAeQGpAccx6bX",
  "key18": "3SXQCKP6Q4nx6MGC6Ae55PM8AkWs83bWiz8JP9gFteM1tJQhUrVkUjX7mzssy8qmkZsiW8Vf3n1BdCEnbwEnGgrt",
  "key19": "5sdYDGB7tzkMAtuWVfoZikyNrAb6WRsjc1umiixr1EZHfrisspNiczvgo9usCwsG1eTvjyVYX17hKDFY25u8yZHK",
  "key20": "5XRAnVetQsHcAbt5BJJfEUsBGY8GAwGFMfvApBWw4P4auJMze9wyszD8qn7dWnzwnzm6BpwDeZPujYEMhGQhgC26",
  "key21": "4XLhLKBszKw8P5G7sXmikUjVF6uCJBVE7bEVZXy47CLMjZVe6CZboob5WmBn75ESyKTyWU9jSqeUg3ZaJaGJiuCJ",
  "key22": "3VYfRqSPWKr8UXX1xMz9TuNMdd74TyH4YERUSbszGiymKqn9r8ndyeRof6qKTnoGVMM4wcqi6WkSN7TEgjxGNDTs",
  "key23": "3bAqVqRC3yoUxWUEGSDUT6W9dyQQcV9UXPkPLWHDTxyzgdQv2s1uyna37v3nfDHoBaMzzWFkeoz4BoAFLrAVWmF5",
  "key24": "3Sug9mR2cGY9onjKZxZ9joa7FC7E1gg1XMxX9rmmybxvVSL4SUyNYbNbhpn3sYw6fMazrKJo8i6K9vj71wnHLwXU"
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
