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
    "Vv42Bh3p7kjgiHuAYuKJ8XYJJoY4mAxmnLuXkQkVpnw8pnxFfDsuQrkq7kYfFcUz34bmcitteyv4uHWC4B5eRXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UjwYawS9aa2TjqmEvkAsjuQpqMuyqbweoEYcT27CpM4mVfKiz7QLJqbPVqQsyL8bJmZLVReWCRE2KNjpSm9ifD",
  "key1": "3PyNkbDUs6Ya7585AVbNAZnbUcwmeWzS9ZjtVDQjcuECbv3iSQx6g9PTtAS7qHYECfFbrXQn7HbTJ5GHWPRzySLJ",
  "key2": "BDorL8LmT7GYqLiSLJL82bbcv27Vyk5oNvUr6PYSL6uv3ck4PHew2djyT14RmsXQNmrHmAiieFJT8ULfp4ko2nv",
  "key3": "4MAoQoBd5JB6Ach9RBtbPmb8iRVPuGh3rLtE4BEUToEicZbr5CbRPTyGAWSVb5z8eqjMnREPBoGLrrW7T3JuXYSk",
  "key4": "42LVxBy4V75ukQ4h6WQ4VavGrPBLFwgMszNtuv4dNb2uNrhtZ19F7H1F2n21P33jxR4kqNCQZchjSaA8EGHf5SE5",
  "key5": "4bawjua8SVcqoANFbmFVJLmpXEkDprUYPC9Zxbu4oA8BKRV6SwmPxA4Gdwa9wURBxJpTkSsVRT6k1o6geVaW2DDL",
  "key6": "5PV2Ai7arofQsEqFfhBNMKh3nGxQR8pavWdwXnVu6myPqCxnFoqBZs1NqSZ6RqTkiwjunsdrCb59Mr5PLEJ1GQFU",
  "key7": "2Sw9DWyBkbwZ6FfxwdmoK28McFupcoJUJQMmw17vApvsze13D3eK2RohEDkkGfQuybSEhErZ5PT4t6yBtPoPWmHi",
  "key8": "5dRLDHgAtiqk4nQsmHECaFZaM9p9rjSYnQmdnMJqdUCZ1FENaBhs7tkiVzR3WK3MjRAf1oANC3AgvL7bNWuuTmYC",
  "key9": "3zDeezqGJ5XKziSjWw7zLdVVG13rtF7xZyurJUnHbNJWtJwskF46uKxMeUpkDrnj8pHVbMYL3WWrHwpRUjtwxAaV",
  "key10": "2DkG6rQ6Ag5AxdAJJSNpoVaRXzB3imqJbBfge5dCRbM3rr8aVefALnXuZkNL1r6P5nr7LNKfS2WttPGnxNVM4NY",
  "key11": "31ihv9VJE2JzZ1P4XXqdL2DeqTUCToYdpnB85WbVhC3KhP6Bn3zhV47txBpKaxMdwDeNSxQQ99k3KURxEUiSsWWB",
  "key12": "5RzTEsoF9NkzHYMaksrFmwtz7KgSA4RULZyQRYdYzdpfSkkouXHQz5mwDMUYVAsFJg6pfbU8t6tfbNsDGBbCJt9t",
  "key13": "4JqqawGQPXcQ6e5DRi8V31BxNE9SdMjmCgnXcT5SWXVQ8y7sVYkC8keNT8XmfRbKgTdk1yY4goAKBFNuBK2daCAa",
  "key14": "2KQcBPy8JrZsq5PuN7MVFGVaECuB9nVDki8RiEwc8KCdRhZFTDxtWnSdUBFqrheD3nZk3wpib176gPaiRZymUQm1",
  "key15": "4pjJqgyEJX4K3k4wJ11caTsc2KB2mdBkknKGBu5hhwrx4oquodB2bV1kZg5D8z5SHaXKdPy6DpPi7NoELaD4Xcm6",
  "key16": "5UgpfZyiRAQ2kCYsfJeGYXcPKNsB7BDUvRd8d8snDCgMVSCmTfMQpKbSbkrbViqW3RYWm6jxWjjKoZ2txAzxHuQp",
  "key17": "3Wv7UB2xL9tKcnkssBcypcie2CFQ3DvXWunJzTSvTvDpDuQxZhuxWksZ9aYx1Djimf4EkBu2sWnZnB6q5nH3hc5u",
  "key18": "59dVyFpAAKZnA23aMzaUd2FJhJbWxR3zCzoBqYCDyf1DRqSqQW8d3ZAZGQw5zvqCisyJS4aCVdLaBXxqNCxJsVtA",
  "key19": "2h84x4guD9X5W5A4Bq9JsTVJoNFuJQSkNPfuJyi7VDu2awN7iZdPxqs2QMMgX5oA8ru6mFcwQ7CNRv9dCrhPeLi3",
  "key20": "3HrHwes2cQc8cjhtgCmAEiaUCRs341qSz4wwi4YumsxTqSGqxG7Q19toHQrGV3oKdkcQ4ws6pTCkB5KfsxQb42Hp",
  "key21": "3u8SpiJWQUGAvCbfcq5y3VraiUBkwwKdwi5H5GSEV9Yv1Ef7bg8ZvwLgstNvvcSHnwx6jgPRGzdkRQjnyjRefDpz",
  "key22": "tDaxXFzncBh7qbts4dUszUFJhHsPc4iw6dYsM3qweJ2uqNx9f6nEFhQXN56Qjze9jmNAZp3yT9WxUyvQa7HLdSr",
  "key23": "x6n8vrm6cAq94V1bSENDcJ2GLEpE2XTSbxkS2gALqoMcuektuUaZF5wJHdkHaZrRrb7BKEek3crJwHDef2ofJRA",
  "key24": "5evLngi79vyKPYe7ro9JjzkotZ7bvWE9NhdVE7mU9adZY2mshVFwm7oAa6B9HmcvfkbMLveM3AUt9Y4yDyNYaGK",
  "key25": "2RCHpgDgeSKM5k1rkGboowHexynoX3hpWkHZAVskWZ8E5ft1ktn3zYv1xzeYR6ZDHMgh3AGW4431brs2EhknnBfi"
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
