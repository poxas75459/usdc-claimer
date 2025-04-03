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
    "AS6DnWnqkR7NgzDPvRrYs3UR4zDMgRAfKu1JWqSWNNmNBn9eaDteAGkVGru6rcp8KTiHh2mzKidLj9eoCTeqoY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sS4JnfuE3ezxCEEf6j9BxrwUGTRJ2eJ2igx7thrECdgNuaUj1A5k4wdFHcC8ZuUWQ5gnPpasHbXEjeSu9ATHJYa",
  "key1": "3rvJcDTXNGvBR5zU2tgaYDnPVBLxtY6oY4vH26Gm3oheKQmKL8eWZEAwDBiJJLonhK59pFsuZGuTjjCUboWHnAsP",
  "key2": "3wXHW6eJNJFyB2ixPiceagipx8NjZsLfAgz7XS3Vk2XCWm13cS9fDKQYLriDnUYE67ZrgGUqFxPYdk41TLCEsM3S",
  "key3": "55qh6NdjMvLHK8aamhzfZ9YWCyrrAiW4hcvWJsKrhwYvDtzHbsx9Jk7GtqkcdoBFmNE2PCFGnUqENnNY3KGgZQdG",
  "key4": "2n5N1VvEhwzrUvxSiLcGXgiu6PrksMfSetSppvJuYKqUpHLP1oQ6wStKQER1Uon9waEgAtuJ7BEnwVZB7qW7HBJo",
  "key5": "5BLfyHVZpNTUp1zVWmPVagfUu5L2fzvLHxJRg5Y5EzFudiViXGzYGLQ4REHXtaEssXw8XW5XCdA1sBA4JEEUfdnj",
  "key6": "4CqjSvMJekScbCeBRqLL5UhgAsBEpUhzpJMncNMWaqVSMPPUctb6qqXwVR99U8XmxGs57xcmsco1vE7tVjnUJK9o",
  "key7": "33Mw6LMWLEc5gqp4TesVj9bfqRckY7FDsuEbZppTAnRzknprB73Zpi23kUpiHwDhiiMPaAsEgUXi4GA3EE4Gix2R",
  "key8": "5JSVV7oamNsQ6oAsTDVYfKghtBFm8zw8tLUiHk8wMyT1NXkReB3o5thGeraTN8GD4dRLnWYNwAaEejymJdB1A3X",
  "key9": "5bgn1wVHAJk7c7J1Yf8iWbKP98eFtNQKSvNRz4QziKE8uQYsiaDTJcWAEGshXucvC8W7W5u1nYatmDasAoYMTAGg",
  "key10": "5gxW35SijiorE7B7k2PxXWZbpjoiQJ5SALNA9qhN84H1gyKdXxjF53wn9YTrxpfDnMKKGWHyoVEi61yYMD363YJW",
  "key11": "2CpaLb3USSoQKyJjEDHZrRMqdE7DaBprJuZJtqqvLod3uttxh7vLUVraPAJRiFJqE7ndWsFwuZykZrJGR63sHBTN",
  "key12": "2kgx1xAyoS2U8ouFbsN1iKVhDUsJYXJeT4gFa2fixB8Q9LTMw2Pua8wcNr6P9swhqnkFV5QxjDSJzLurntdQ1hoV",
  "key13": "3qxXMjrcag4zhqngWKNeMbnRN4rxkcnAJctrUdD9mJqJsF9u8QQVmEsnZC94fbYy21g44xTv9RhFaBeFpaS4QyYL",
  "key14": "sJQ5ZaysBEGpU2pY47v6ZkB4Nj9zyYK4gGxY1YcSjEF6v3nbMM86x5W5vdrR4P5hfvhKvvYFEZtdeyK1E7EgKtA",
  "key15": "5tVAkwjptpxUTy7snxJ8GHAusKgCqfYTpM9cWLKmRMCWrfwMCXNMqmPyFhDJeZ7kDsW7QtPaUgsqqc2wmpYTEnwm",
  "key16": "uV7u9X78xthGAHsJT6tMpUkyV2yfSfnZKeTTKAuDoARPVJWJumCpBXzzbwi6831njFhVHRLTJyL7LMfepBT4Nz6",
  "key17": "2Xi4HrNRXMM915EvcTXZUQozfGGEFRZdBys8xUAGaPFDbWJNU15be2dJvSRza2qGMBv2dCfR8dDtkYbL1jCMw6du",
  "key18": "27965zQmG5GAwXe5gpVeZqkEjvX3KDcbBYCoyruukVUkCZKpuNq4Kmzo4ftaDhe1AFL8G5RMwjaoHr8DYTEBEAfb",
  "key19": "45AshZNLPHxmZGjPCkmz14bBFRdzk63jVGJG3uLP4QYbSdLiRf2ZS3HxhWGv2tLbTrAJHv1pgFoAwe1uXmKuwmdN",
  "key20": "3SjTJ1Gotqc9FuMX8av5TZDEZJQWxT1F2ta3oUymQUEPczGByh5MSvovbhpFGbTqA7MD9LKubo6DxK8zAQARooiu",
  "key21": "FS8PGE5phCtBGUKxn7EPEskXdnxurXDn13DpEx1RGos4PNb1ox3HUR63Xf1mUtaPcTJzzao4wKfGgsE7wSRowqh",
  "key22": "4XXBxxApocfzL7arPQW5Y4RGdb2WFDNHHAA7LvkVEpiRSEqGhVpg81e5T4bpMN8xhRxSeuCBGvZ2hahBvwpY3y1R",
  "key23": "3LZUE9F1oGwVZJqBn4qgpqdP81BXJZaiVi4XYDvZQWaxkHV348nKAZaqcrKvNMXh44V8UaANjA5NxoWvLzmrzXeC",
  "key24": "4dQ2jLkbFcRoc8DWwoGx3RPfF5uhzLm3JcY6goDGk2f1uKjDH6XA7EzfM9cgKJ7fZNeCpAA2Eu9W6xiu2BoSMWgt",
  "key25": "5LLq6a96LbtTpZYv1LiZNyV6EJ9ZQQuRU9uwbRwetNTmciTiK3Wstfs5qXuqYcBkLYLjHgeMKWpAe7PSVRHbczDS",
  "key26": "5JLMjK5TtJfLCzL6JW2cK4zxUaHwvseA6vGyNodiB92e2bUs6K4LSLMZiGHAkbjFzvC7aXa838Kix64PCujUrSN9",
  "key27": "4tc6K97R2S9Jyq7j9oyNBURKJAoZWrhC7uS6WgVc9fNTHqFxbBtML1dU1HxcZV2DLfAfB3NoWRXiTNSJviMy8Z5c"
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
