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
    "pS3SYZDMARBZYpe9YdpeZmRou3vTbSnjVhPb4p2Af1aR4k1FuR2RQ3J2tvfGFAcxJoVLCpqM1xJ6TAJpsdSVWBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dmZUtQ93sxXrkhgNpEkPVnocxctE3gD7QbU5VkBYdCHVQHniKCuz6Mu1qeQvSfwxKoi75qTZ9v1bnt9EfZz5JoD",
  "key1": "2whW9GqutiR8cLhH2o9qTJyJz4K2FvaoZA87CADmt76zTL1VMY8LJBUiTq2pekApr688mPcNEE681zjMzQ4xhFdj",
  "key2": "58KEHht3UfFcwW3eJuzg7f8Pz4LWX88LMDahRMjxfmoj18TKavrrtTcDryMf8CXCNj1gFUR2Zf6fHgS8HVYGg3iL",
  "key3": "5TPcKskdbyHTGZoNBUyLuwysQu3Ht5NZYaZRhwikZJYUABzZwPgTNnzdbWu7xHv9Rbof9zcRiogzvQwrkqfj85BM",
  "key4": "3Zsfsjzf2EmUyUmwKJbbZJ2inma6dCGd51SdoovboEcD51QxeuNsTBKmYPLL8xo4YXYXawnntjSXMdAvaxaovVp",
  "key5": "5Qwiyux8G6Ns88K51m7BtDmbxRya2k56sSXsaSds6zriFAmEEAPvDYKFg3rMW7TsMKayQpHy6kFYq3YtB1DSPyQT",
  "key6": "2MtMe88iyGJ2VWMDvnTe4K4EHf4Vdknmbm2fQoafgvV8wKHyqLpVq6KqE6wD4b5LMGnAAGEoAVGPsTPsFQmKkNML",
  "key7": "4RheVFyUNG3PkUMg8JaF5d7Ea2GaGd3EuLNm8CWwWJpYYUG1idDCn56gyW85jDZ1y3ceYGhsMVo6iVT6ZLK4sQ6K",
  "key8": "2VCY13J2hu86abDZo9xRg27rBEJtKG2cxZWBap5KgRBWPUuMfD42cPcUfoCsqby9xK7qtCAmQJDortbY4gMzcYpS",
  "key9": "3mrnoSCqDV5V7yCZ1JFuQN33yShwuyKi14dj6KwQ7US2kPE6gYbmtV76TQfSH5gmoT8XVJMNBBNzd418hP7qKoVH",
  "key10": "5BuxUfzvDYkp5iy1Hm4FetMYzUF7UcGCcTtJeDhWNpH49MN4xoLV3GSyFSTG3daNc7yqfrtF9jpJRcfbouGnpSUf",
  "key11": "5rkk1w5zrDyzZEu2ErkepMEuu7kxdzA9Ka8USqAokcU88cw1V5P9J8gE2pwyg9mtvrcQpmUKJch5TqSC7t9RHzhU",
  "key12": "2ySFCJamYYtU5gbN34xw4WCA6R6w1TDMseYjU9jiaYBt6Vw7RWr8RVWpA6EgyGFWNNr9vsq9jCEdPYMcTzZzYAj1",
  "key13": "4VMofw4dTd9u1HNzPAqnoxJNa9iotRN5pV759Q5hfGJWSvvPaBhjmpNgqWAQ9Tb8K4dPeqU8MzgcxuK6cVPf8zcq",
  "key14": "5EEhGjryRCdXg5Cxog2QJwnzYGUZpauvFewA6yhdr4dGC3Y4FyaXF7inqv33CwZim4WdduBVzDQts8pCEeno1GSt",
  "key15": "2YUqAixUqKmoYuQfSxzc94ecVkEk5cGBn8PPbmgBccBqY2eHYWWkJZJRMHokfjfPpsHmVHuCxhUvyBfncJe11ArF",
  "key16": "2vEa3FpZCrJMym1NTN4JSAzFhyhyutW1DLctYaaweBovKwMsREMsNMWfcpriyUfDH6iJJohJD1gAj9LT8j8EJvaP",
  "key17": "CivYjofDeDARuQGs9oypAKPKxKsUEXu8PLw9vZ2WxdBnMQKdnDhkVDetwJSpEumH76VmJ9J95zrMvnkzNiEgCVP",
  "key18": "2xp2CnoREu8WswUGWpX63CVsq58oJApexDef85YuTP6wQDVNvpkFwQTBHpbigj1tzgeiBMtCsbB179X3o77BDuwb",
  "key19": "4GrHknvKGm2pejXQb1SZ6erZxcDtFKy3xjTMLY28YodC4oxpSW6Ber8NvwBMUepjFG4gFJnuBYuvaKTyc6vogfnn",
  "key20": "273BQVuKzbK26SVtmptLaQdceEZQcPsGZNRQwTrhQbGrUSoopJdiGd5ZMnqcz3x9ehFrVgWK6kBxkT1HoQcLgjQT",
  "key21": "4R8P7FeTqXqUAg5NevWWpHzBsQNZKSBhvaAQP7k2bkTaaQtK6TWe4uJg7KdzQ2FTMTtWfiiv5Fjz6Edb5PD5abjq",
  "key22": "2nYJa53DXwB98146ULwcfzf3xK3dVsZvJyWPNVKZxaagdbkAbkj336FodxHmZ8ziUYNrwAxH6P5bKsMZdZ8A5cwp",
  "key23": "3cd2YHLPuJUyhmxSU96zGoZ6hrD86kCxmQPNMCy8tDm9vHo5a81znWMBYVmp2Wqv9yR587ZV75xdCHfH9YRVCYqQ",
  "key24": "5WRen1KbG28hoqC5TzKusVnPJ8YkE7eTcV8KvRbDgMJexGLPiPAjpACDsNtE5QdP9cY38ij2YDMimAm2Qdjt4PAc",
  "key25": "3HZen2jrvPnkychtKfyFT2jV6gRjSuzB8vbFKoPyb7aRjMQGAyTVxFA5eGVdmWnjG5KPnnGrbzsfVENGNrRVZywr",
  "key26": "25BdUbY9TzXcCfaxHYt2aPf4dMCHqiyUAcGgdDc5J5iGJnwK7mHuVX6PsocFf3Z9KqxDspyZYyvBLrobN2yXELEQ",
  "key27": "AaS1hGdj5D3Md8BpXnwwHdqpk6cXURTDXnDPQMoAf1UG1C2RhBQQEoB8AcXiKpuBq4PBSJVzwgVRUNcTq6tsEfe"
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
