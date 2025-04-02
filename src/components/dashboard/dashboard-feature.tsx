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
    "5eJ7anU5GQsZNPYMWMzAvLtHkRxXBYjd62zykZEuUWgdPjUUkaoi6QUxv3qCAKM3yfohHVRcA2XD5RoAEoSMMARy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s3MhNLgvMLmarCZSmsVDgqAXcU1mFvJrEtbAoB3v8S5hTDyvk8Ma96CaXfDKSvAdQNj7GW5uJXr5k6yHhNd8VUF",
  "key1": "3MbgCiLArecjST6DbZNraPbvVmfy5m7kegGkNbqB75wm2vCqBkojvrMnKyiAgffjtb1xfpmjHQzEb28PF8vsFHa1",
  "key2": "2Li4YVz1sPuZqykN2QG8dPauugGvJkJveQTcHBQaEUNpBesMeqW3xQk9s8oVZcJjqNa63Dd5UxPTh4K55yckEasQ",
  "key3": "3nytJKKVKAHXdE1TAJLc9fp2fNDmBUAjzBXLBYkZv1xpytvgChUqQiBupDt76eZ8UVnBZxdku4L8UauS1YVtW5Y3",
  "key4": "ES3msKWbBmjn9x4expQibtr21wc82StyQwfD28DzSABTGrn2xZ6roYHMPGwHFcj3vmZVHwBXZ4rE21FgWGKwbzh",
  "key5": "25VHNstKjdhvaVzz96mDTPtQgze1bs2YhroRzBjLg9GQkar6PBB5Hj5gq1efj6mVmzHTZFRQanTYjwHzjHzrR1QS",
  "key6": "59xJoNRuhy5LgQewKL9eJPBjtdLXWoHdmTUNiQBTRAucDexiqbHNh77paCtfnQ7Ly7tyQZaJrZDoo9XqgoMhRZLa",
  "key7": "4G7rfDY8FThJLs4Ei9sdwQiCALEQ9DgJChoEyc7kjF5gqdnddkeneqLmgzuYbaiLR4aubowFsrtaBCPGcPKixMEd",
  "key8": "2sGoZCnqJrMpW9zV1g5gFBSAgDFG3yyhyx6zrHVXSYNLGJmTLY6KZJNbvRsptKu4sWynpLsvyRaXFkKsveNMG4J6",
  "key9": "EwX9o8JNDzPiJJvWHHjRo2etPQaJcHFmcwwgj3iqaUr5YDYGRcoxMtQ7xMQbb6nKUsQ9oQUhXJMnmqqaRPZVrGA",
  "key10": "5FmqZGEY8c2LyQr67cRT1Ez5Mq9y4QBwregmeM3A2bXYVaDNRBDKmRFmjv1M9s6MZLTX5poCRL3u1m6s6D4PNq4Z",
  "key11": "4Ua1sk8c9Kaq4ATaYbW4J98ZHLy73s5RjdSTdSGibePxJf1JxmGQUktHqUgy8KhTFptetLbYVaFEw8Xnz5hYQzCq",
  "key12": "qCjui4ZAb4vJumbYigV2SrQQ1uG99aEPhKDKo8Mq49nopMR8Eq4oe2yP1Mt8dY7tLEf91YDHBtX8t8CK9haoqmE",
  "key13": "4r685hdcmtRvpunAsfbai9u7aDBgMZ8bueGJJexa1JB2DSWKXrXWp23RfTktas8fxjUpuX2rtiz8Fw5FNGavQW8X",
  "key14": "5GPrLd9moqCvd7idJBw5MqMb1TCZcXPpuxTEuQXbyApzhW1JqJptnz9FnD9Ly41JZh9oFTfNPfUWTUQdvgVP5LbW",
  "key15": "4FDC1bLu1JNZJQynSw1VwNwEx6bcXFnujsFt63yjyu7gpG9eLDy64wwB8KikdBNe9zLRUoXsUVV21iJaEiGzjLxJ",
  "key16": "woigpoW6rchxMgTWWPVpmCPV2azUNQx3dcCAtydFCQUhyAtG9EdYB5zvpKN4j1jvVs2zAVWprxRvcdyUB9fVhwC",
  "key17": "25juiT5TieNVkt5i6vAXogMvu43wCGj415bxC9oFqnAAgeABkTHtmgQHe5F1BdceyN3RbLTXRCNySuBMTUTtPeHa",
  "key18": "vwZGbP9oyb9qpvXuzAX3pknUY7tN4851wkBBDiApQHYaxFq92aYjXNzwrBaRXPs6gU7QzK1ABxfUB6L3pb6wHpH",
  "key19": "uAA8f2EDk2EEvTx6Qb6iykVGsNbMTjzkZVxgbZArtsKw4P9Xc7hm8Fe5u7N7S43HanpS5Hp26tXeXU8AFwpJ3km",
  "key20": "6713kpzp6Wzx63nxk2timwm85LtYmfvqn3nVzFRcsMYZ3fCuBuP1zeFaUKgbKbUwaLG6gfwKfK6qDixEcKfMYfH8",
  "key21": "5LxeLkTGKbfdt27TveSEBu9eWNsrNR3aN1CwZ2r5bYWcYSyfQdpneEjkknzVoCdGeNtwepoX6YZEPDi8HRomdEhX",
  "key22": "3esymQJR2RwTRWQaddgtuR156cpYaBfEqqHAgHM19hV9R5CSpVhfphcd5hgisGSmcd3nB33G4fvvrLDmxFfjEAd4",
  "key23": "4LQs4oqiiF5BsTsKyWucMv2grcXNCh5Yj98sHcnKp11nMvvLXYPaUGp9fsMU3L8r6GPaAeiC4HGuRdUyj33rUXAw",
  "key24": "5j5gFwPkRexmFz8tWmGH3gJZymjKP5E9HoKBtASmnQYuZTTgdKZUC5y7aLKfqyAdpjJbo3vuxba9Dptp8mEc551q",
  "key25": "sks7yZN22mi65zz9xwkXHwyaxow61sXvQ3bnLz1tbB3PEhHe3WvYCYRNK4Z9kGvXqTthPMHfaS2eiwDAFFfTX6G",
  "key26": "4urKbBdAx1pFDej2cbs2pgJEXBFa2sNprAHhif47pHUF2QAZYXzyUDx9tRYgPGwXjN7RNmDmr7juhWknsTNj7KDt",
  "key27": "4JYD6bmYEDQbXK1zWST7eUSrLCrAiNhqYYAagYTyCqCUYU3cGZPKA5H4VGtu4SLA1RKQikSmV7AHhkJ76qgWYKjp",
  "key28": "3AcmJicBarUyfYaWHJqzDR6ou8jmG2KefVmkATTEVkfzp2r2nTVMyVEYEso1svsm6ubfLX8bfqGt4sP5CY18hYL3",
  "key29": "3U5kDBL6ud2kwf5KcuMCztXPYexYY89dAShreY4xCBUpGiscDCyAKrus3rRsuHtyLfJxrSi9cJLuGzdbg2CHFBZr",
  "key30": "316Z9QZNfsENw54zeC9nLKF6L9YpMtRv4SxuVXNjhB7CXGM1TNg2MDJSTKu7GWnPrhbzq5TqUVLJWNFtY7MrxfaD",
  "key31": "4iZeUTqVmFEqQVhDwtjh1SofYV99yXeduSPJAyJBPKUzonuDhorENtXPNuqtDvetZHtup7d2NaCrq5dJdLurWPQ4",
  "key32": "2zWUDy932MHXX2pRrndF9J6zFKedc71mgpL4grmHMxT6BvsJwm8dYB7AjQ9qLgsoEzgGChvhw3Yh5bMRWQ9b3jxA",
  "key33": "3qUvXjJpfSDybtwYvDrxP73YbZCXRhPsppFgqqRUeSK2k3L4oXbm999yokyauSVCijLdTF9wc98zGidoJqebf9T8",
  "key34": "5sMKg94huAQEoBtsR6EXph6Db3AtuT5gZhfbcYBQZTvNxk7G7XV4YdgYngDTs8pZ53wdcgv4HppqEE45ZcSzuk9B"
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
