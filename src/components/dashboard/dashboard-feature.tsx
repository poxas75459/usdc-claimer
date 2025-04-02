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
    "3uD7f9UXqHy9B4TH8edhxsdXwBCwbonu66VDs1NXKEsJ9eoBs5a5wH2xSRtLNsSmSMMfsczR2HQs4xQkJAVq8SqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XE7mivZiEMAx4WpeNtCtqDEx4vTDDZ1RLeCZAKDm67F9EBWHTi2neGGfubj7u8tgYjisr3hYxpuX95tngQu3qsi",
  "key1": "4DThThKtGfFuMaE6M4ZNmoDiNG8uBCUGEGfMK1QsKpoRMm9fB516foyzu2N11C6tW2aR32JqxzXuVhb9CEZbVk2",
  "key2": "3e4ywbFDeGD3jQN6FkioqC8wUbckVFayazwnhhJxYCxovm3hvjHL1BgZxUxPXSP7nzFZfgTUUJptnvdDVeBYqGB4",
  "key3": "4RqiYgppnf6ygoL6pZfiUvjqKbt7v3UHM8MHeipkCUpve9jikzMPYp9TJ33vHQBqWU2Cfa6farQrnUTzzEY3gvfu",
  "key4": "57E9QbUYtc37X2Px1HC9x9jrWxs64qGPgmGxU9cXaJZ48VsvmcDPSnESzHK4U2r87v9Z44AWJ3ZQfNJWz724Pd7F",
  "key5": "5SQQYeUxCM1gX7iYsittef8Phv8FFEcEEHJLT9uum7tyckgk7JfaKDWdrKmXiD3bi5gBQS9r8BQnQEURrhgy2BdR",
  "key6": "2dsvJtNQfXWhgZzy6htcEzkzFYhXtXauZjsEjXoYYbYx3N8vMLGRvPnzSpkqpL5cksRrPy45meDRWXgHVSmsmD2K",
  "key7": "3ALZCWvLd7MMXnLqVBWzbnivc2TJnR8WDpbCWgaxoaup8f2H4RhqKWNMjTNPw9a5FmJoHtWPwNEarBAcMSpWjSwz",
  "key8": "65hnyoLaY1XT2PfZPr3qNQtCUuGMA6NiiqnGqBnFoe27Kx2xTpiEN6kMWwMY1NTuH3k87hiHrEiZJNCqLq2Upz2e",
  "key9": "5a69qgxHaHNJhfsT4rxG2SZurst1bvaUjuGmeLnoiD9pXMioP6gZB9NCoC9ZTfnDK5UyH1eMMQQVj328tKnsZj1R",
  "key10": "2HD7okzynjhqomtgzMWsgFRwYyR3B7x8B9sfF21sWeavgJS5CpNMfd529Avyc6kB8FRiBhqn49Uqiz51fXcfjVhu",
  "key11": "23mLG2hV1hYsM3vWFn9uKcmS8KJLgMNudT1uH6SMP8Pvd5VcVq4Jc3RtfhJMr81AKmAKA1rY97FofDQFd9ik6zSw",
  "key12": "2MLfuQuzMDssoqLpEkW5ViifXTxcbWon8cYAcEk3z7hyCpsWpmKLZCPVXUeki1EbKpcncrV8DESUeBw9CvBST3Jk",
  "key13": "4Bb2Xgj2nesKGUjZzZYY7Zk3TT6ZBoDgF2NPyw1GMn7AMg3YXmCDnpiYMUKHW8y1wAN3jYRPGQBrA5gN6okp1ef1",
  "key14": "5GWDpkRpmTEBqf2gRFF3UDrmUmzrUtpCsNwjxrJACD27psRQiHtjvK2hKHv3yPpnnWFJUJGftpHDvasZauD3sQoN",
  "key15": "67oGYhomVBzwshyts7JXJZkXpPM2BqLbaz19Exqq8fCT4yLwDJnsnrbSVMRh6n3XHp4d6D8xxD8rreiKAHAJjqD6",
  "key16": "is4xk5cD2ZVu153LaQLUhcK6295JNvJfLubSg6idANYEgDZJnq1ZJsN5KPbCJtJtM5NLWtTFbpVaD6NuuLq2q2m",
  "key17": "4mnzDGDaMQmn5Y4BXqnunbP5fKy8ACBUZrvTAmsRbN7zfDLSYk75bnGBCmErFayseHHjywKPVfuGkads52vYfZo4",
  "key18": "5ZXpsGTNGhd3hMVgbVNBakFHmmC4wbvGDj1NGuy8r2YBNAmF52nJMwbZfi8vNYoVcQWxncJZSFpRYxMwihXsMDSa",
  "key19": "5nb9QFzHMx4DbvVQsc3G2opPj4rux2AxaUZZPbqJqCSKkfKvFULnbVnL6gxoxTijMg1k1jBWh1djMUExdUcpT4Sg",
  "key20": "2Db7XEe1bvEYYVyjRsmLp38485vcdkRY9xxcdyRLbTAt5epGuzbvy7sfu15a5c8Rc2Cd7nqgn5pie9aJ8KngUaEJ",
  "key21": "2xMx7jv8rxjogvjvRj5qVVGd9V8XW7YQFctbR8k4NVVs48k7vN6KB8UtJcNjsc8wiWbhoz41DxHYpt5gX9CtXNiw",
  "key22": "3QS75Ke82fH8KtZHpTvxfjztXt97GYZ1LvfpaM36UJqcfzyyYZgHv3jATNzuqJMpYgYBmGDf5VGJCFdGsJesqUDB",
  "key23": "4xq8aYENJaEYfSdVPdsWKF6YUcudPCmiRq5ETsjGsdrw9a94nPgaFQSvQ4gioZh3sdjqLAtcSBnYdgC71TgqyXm6",
  "key24": "3PvHKaAaFcGRquk4kL2jq181HGJbXC7EBZP8X53zoKDq6wdWut7wpSCboHYjrUQCshjyYrKoVCxAVb4YPKTYgAW5",
  "key25": "2LermH11mdXiuctdx9Q1SpEv4XjEYeMhgiH8NkELFkQ7Ybj9r4EPMq6HqBZbJezqoyDgk2zL1TrPJRwZGsFhYs96",
  "key26": "2KZ2tRXug7DknXz6yaemYKmKtFKcQ1YKTvEiHrZY9SVf51a1PHsKcjZNxdtiF5LxssC9ugAXx3XqDqd2ikW3wVqa",
  "key27": "3Dg6RKBtaTgSeRXiwy5pSA8Cgm2WuTyPDhKV23nHNYVKpceoWtYMNR275pL432VUki6t9ECYovrwKRvPb2ddTouQ",
  "key28": "24qFGeFug7Hr9CA1xpa4FfDxR6feh7A8H2xkBDzUv6EErXDvVUZtSEQUyb8TU6Zjs7Bs9rNrovqiqjVt3Gua3NeM"
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
