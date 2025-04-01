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
    "gxELes7x7BEFD9oiiD7tEwCEDZApF4fmW5brpPYmR8qLX26nS6HaXEUQwgswKRBqWDbKZ6W2U8zYMoJ6UxocUor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcrpycs8VMFEYmGwobJyUxGXVE5BZieTFovBBaBtZMtt52BUAL7s2mSCGCWsyxcy2UnAaFwRQjsxfdmBDxz665z",
  "key1": "X79W7sHn7iB5xevyqfmzoWesUpuoqQnCHnHnYBDgPb8KtK6VsrsuhueqCNApD3b3oNRc1rHKUnRwGDGu5QPfmn5",
  "key2": "4HmDCvZxvRKw7KqQnu35A2u9oX1ZoZAcWeNhPNrQ2mSgMDqHfjgp5vbvuWzz81hKkda5AhCQqFwLpX44N1N8xpdY",
  "key3": "4DXck1zWCULqna1KJSqZSycQj4HwMBKC35Nqgt6d3wSfLoVXFnkpL8FVtpuYqXvgSPsQeBSrKAmArYvuLj1kMc33",
  "key4": "5mGXe9QBPEiHhgcDDL5HF4JopqkjofRxHnywG51o1dfH1cu83A4By88YsnLGg7Kc5rBiUFJjGEBgsRDSQq6ueGtE",
  "key5": "5C7LV9us1ufhKKsbomR9acaceKzkUBvaqgaLGUHik4SdJBrUJuTgKhHVHxoHfX2PGJiNf6SCnHBoi5pC9NFNarU3",
  "key6": "5bhUerxhRTYbGHVhoJCLAaeN4ZvnpP33W3ofqSmvMWiyrLMAocDkLuCX3NmtXfnydqMJawvSE2hpeAei1qUns5vV",
  "key7": "iFty24Brp4ZqGp8yBCBYkY9kL9karPP5rrXi4wsHBmRvvT5HPhNKu8hmLwUhMzuLyXpio7GfX7AL3L7VNjRZJyR",
  "key8": "2aYnFHiVHssDSQAkdMxgBacEuJyeeq5kygJRugMwTF9q3EDW3ZSJ94ip971JLEd94et7bsTBN5DLmnnJgW2vD9WT",
  "key9": "4p8RRBPga32uYuWWgu4JQx458fBDgxGRKeQWtRPkXeQPXS7p1R581XRafGsQB35DEoVASrn1WcguooyVFEjPgnFL",
  "key10": "52powS2L4fk9Uu78x4tLMVwz2jNEzD8eoHn7Jjm3prHikgT9ipkhsoEJYe8gV7QJxw7Juq3h57NqYECRmGcbfC1a",
  "key11": "2FGAZ3itznYBTGUiLsK69zYFYNugNVbLbHyPcif3kjcMix9Ry9PphkvKso5feMX4aAVfNyLbgBrTVpRBoZ5t4i1k",
  "key12": "3PY7Lugf5vcYkHZzMz4ygiMNNZoT6cYqrJcbSmMWg32BjuAsFDgHBgqczYz4aohfADK1sVho6ZhFVtat8xkqiAFu",
  "key13": "4Mj7sf67hDoTqC5aDGyh18B7UQz873juc2iTtzwCqL3kHn8bkcNqFQF8oehvoQUkd6Pn9xXLFxZtAu1AKhYafyHj",
  "key14": "5jWY1oxtdLkFfxvRLErHgfNEYQavpGyPutarroXrkuiW5X9GjVGRNjsJwuqPt2oeXW4R9WtkL4P9boRu6vuAyriJ",
  "key15": "3rCSMXRZ96G3j517LQimcKUcTyatQ6bCXxrTwuTQecHzd47yKVYvgFuP52RrkK5K1WVZ8ANq2SgGryurzAAZep4V",
  "key16": "8dTv1Mjbnkn1oPEGgeRiqVLYcQhteZp746fMmBH18GFYza3w73Z5UenWmXQb8MEHeT9y24EJ9E2jXmCNLdoEbdS",
  "key17": "59qbxz6sPe3hNijSHRvjE5Jo6nsJmPAa3QjKHj5vq5xo8esXuASvMQRAjm3oz6NLvWVyLt865NTE1gko5UaZwnqm",
  "key18": "2rxw6hbpT7Ymn6JFfCq7a3272mfqjvkpS5vFzKbFaWNJaCDy5ReRshtPD73xYxitubVtEuPTuDiMpcZKpkmkK9aX",
  "key19": "3ab6t87kNzoPLvQhTR7ErFbyTuzDX44n9F95N6bPvJxonbtAWFxFTEnWwHGSU2jM2D8EvTC7Km2njKoHWqBjXRR6",
  "key20": "4ci2dzKiF4xsXfZga1K5264JUQ8Jhs9J7C9QHEqZyWzRkqc6ByKVVmve2w55ydPLAfKD1ePhb9LCBVBpRV12wTxy",
  "key21": "2PE6Yxrx4UVBtQfDbbFW43VyRvtXh7yrkJMaPG9oLugwwYUEzPAiuDXvnwXaHYepVsUD3HRTWpxuJev62pBFLVu8",
  "key22": "562BqDjkULXKaoKGqbLCCz3VV4fBwpAwT3zNL8fnRzA9fzJAYwaEqSGnvcRKCuyudY1GoELkXZz6LXhZTVvz2C3v",
  "key23": "29KSvApteTLn33ktX2foiuR3kFWdNPU6pX4HYeZ2hGmUsULY3uKUvSXysw4AmWk86qAHUsWckr7ZPoTNGP2p3d1K",
  "key24": "3vwmzQmVRaefEvYuhLZqph8ZsJJo7CAnMVP9LKsff5yThwxVXd11TT3u3242wmV3Q1YDGEmetwHBisQvgEyUBBMV",
  "key25": "3EceUXSnCK4tfHxVFh1vbmiY6WhyrQsrvdMi7epCisK8Cwyza2J4ACucPHYwwxXnzBViTGhvHBYcAH6VkdziaBGc",
  "key26": "2hyM7vAcMBrxQUuV6j7ESejurQTBiSxWCREge8Bb53Q11ToKnSxDJfVchMmFosFSaf9XWWCCZx6qosENAfj7eN5g",
  "key27": "4CcSCZBKZatqbvWDKXRnCwoSnperJZu9RDccdntMtc6mHaCUKSDWshGdBGxhm8ZRYzXM8sLNXqZwdeXyngkjnwD3",
  "key28": "3zcPWa1XzvQh7Zhatu3PaDVFJUECtVjB6xBLUHkjjqvL99pi5XYxjj4uiYAv6H93egoz63GB5s9cRy6cSnfAuTKD",
  "key29": "42Fobk1fKnKkr8LbhwMAp75Sk3sqckDuHWsEkwnEmmmPuhohS3XXbpT3G4sM44farig5pHWTuCoxzVqv19xb8hTj",
  "key30": "5T8pQUGyZWMcN6QngUxbRuMJ66Jy4XHpd3FLi6GWuD1sq3JD93uYacZ2inoXNEp6RQrUuhPskvDosCe3MSpp34Tn"
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
