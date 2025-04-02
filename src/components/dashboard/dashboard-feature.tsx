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
    "gXKCme2YSHbLkm6QSGFLSDBbFDcUqDkm3s9v1uLCGepGhyzgwMhfH6SXhC3KeZitY9zGmjk93FaHVhamiTwD3TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXcWfjTisvFmak1BNS9J5rkNgkzsf4d8PeyffTwFcd1hund91pBB1nTvfPRmkVnMBQAeP8fVnBySNFULW2dYiVH",
  "key1": "61xWhWpsy1ZiPuQWeEBCSet3LVVqc8x6UsjzPQ1QYbZWFB3ykSEq5jTpmFDZDiKr7PBVdSNvAmCE5ojGFsXahgth",
  "key2": "24H4gG3TJHGmxpGNJzeGZnHgdSMCptpM5M1gQ543nzrboWHNj4v9jnRJegmVHTK5pz7L5nHaxhYmbQCejHjxUSGH",
  "key3": "YAxCKLZ73z7fNytuRjB2hVFpi7jSQznG6dW5mAew8cW5j62sXToSund8iDDo4c6mJz9F7WY6eipxYExwVWNuaU6",
  "key4": "2WyNYg42hdD7itHBTDvveeELL6vZxJsc75sc5w3Zi2U4JimA9MrDWs2K95bDKpbdGiwGGz9jkhTyU2KoKpzm8Aee",
  "key5": "2vut5HGNogr3HHUTkmQDNHbsmjWnmc2rAgveFhPmHpLeHu6xHEbBEUS7LZ8GUq3AscDDcT8ZYzwdYFRhRwLSiqwZ",
  "key6": "2kXoKrWP4SZc1Eqhj84U7VkNsj4GwzNBuvwbc6d9Pf4urWWTk7Xr9wpCHE1qYbJLPzAsW8TT7sjTZBrqiBvNqBxq",
  "key7": "aiaZCkbH5uxNHMrAE1AUTasHQKJT79Sh7mU1VAqtmHpz4ZVtVrczYmR3RtowmLkAf1BV7bwa2hQCcuRQfohcVfJ",
  "key8": "2Bj4RS6a9gvyoquwcNdji3WL1gxznQH178wj7mYgMV8Ezhmfpz7apVxs6z4zujabSwBH4FqfxAikE6zrXuBwntZX",
  "key9": "wh7p2JanokNwKwJLDTR1dUgjYLbtuFMGHSQCk7ia6APBFnw2oRBjHMFWkZvDBPFkwo4RwjJExi7gNqzF5Putx9x",
  "key10": "5K3Wfsgn2DjE3MrWVom7b8pDH8KQA7nfQK8qR9bpmSFtf1KuHjQ3wFq2U8kGJdnMZkeabggMoaxGD2vcGJQDokQN",
  "key11": "5sbvuo2EE4fTLM1XLGGXZw6YAi6ynPtXS9dzNu1iKuqDxL9hcVRg3dEg77HTMbcWFrZsEtFevveHFUqQQ38kckyi",
  "key12": "4Vzroz1SvW5yHnf6Sg8DKkVgD2eNy9nvvnMUF4Zj4kkuLkZhZfKwhaKN1VdLWk9RAD7NV5hTwEGkRiSSKW3QsP72",
  "key13": "444rzQwUt76DiyG9N1ME3vx7cMZ8hrJPA7s5VxoEDVArLWQCiQcH8dCV6RomwfNfWzwVA1tTxGmx3U7RU2pbaT2J",
  "key14": "AnUJZjcAXdNXKJB8MzcCLQWoT1rMUqdwJR3Lhx4Dfx9AuLmoawXWYSKgzt3VQkRYz3ULKn3QDBNSikHeNhox43M",
  "key15": "4m9z8cqMJPEh9waepyWrhQa91GUm9XKUMoPruvKWoC2Mn2JSY85asgowyLVBp5n4QqqWcHrTLGFdMUp4Zcrv95e4",
  "key16": "TaoYfxroYwYr9yN5nZWpUjB3WvEvVEYeda5cYTLPngwurtBpzSkDyLfyK8NV8J6wDuepjp3LxkmTbrQ9Qci1GL7",
  "key17": "CUW1noepyowgcn3UXeDnHbu4dRXeph5zdm32o5Acv2fk1VwxiN6gwfsw6i7vBRxJKX8gpqptKE63H9iYYLnDMgZ",
  "key18": "2QCU1TZynnzdEQxK63sTAD8J4b6sSnNEmboU12aRPkzZuYqSmihCPnQnzB4H33DNxXzJTegj52DaPobMzgyjCPky",
  "key19": "4pdRQvxTPjbBhPFUyYb3QFdgvrtiNiFqcAptujURegoUPyNwycxi6dN924e6yh5cHxiUE7GzJLjmbEzwUTccV8T5",
  "key20": "8VvWH96oES28yJfKjPhmVxR7NyQ1B27j2rvtHFofoMXvnjceCXHjaR4scKt68jWBrgfc1UMuY5KoHFCeWedtVTj",
  "key21": "KctLesovM9yJtqAoRGfHAqtHKX81mEvc49GLaB6bFQR3KK5nkGREp9DEYcdXrgaQW7CvNFFmrTMvXcciXCh9jid",
  "key22": "vtJMKNNr4CmPBryvuptjSjgzhZBJBWgNUBW2r1kQ1W9QK5zt7x2NCB8j55o5Wmaj83LB5rc4xXpipeUHyVd4cVK",
  "key23": "4wMVzvg9FbFCetLbh8xCRP4D8WR76UEBn1wPBiYUkSM4jJPnmQC8uK9mv4MeeqEEi5sWisafSAzKtCkjMXmaxmiS",
  "key24": "1idbYQRXR1mWKHVwvnFUjP7BXWseTqgEhdoMU9Upqh7vVfTT1adnVEL6RCUJH5jSr4jWDEFS6Mz4aigcaLect76",
  "key25": "5n4dqJpVc5Wmp7jHNY8J7hasbUXmA8JPuN7i3Mz94jZAVSNwnyjtS9cN7wFdXj8GLbgLWLGLz2gNpz1w5FAJdJin",
  "key26": "4upLuEQxi1cuN5wXAd2Wip5iwYQJLG4cmV4neD5cX3jgCytgZSoUs88rxNnWrJgaYwUuh91VMq4edp3hKK8v3NVc",
  "key27": "5E9QbPyTnFM74NK4xMmr3JjugdjNX82WCNUmX5PC8ucMe2aSiTBgqVqLNvTvNyPWku7kiZjT16vKfQDGvN55Wsoh",
  "key28": "WfojbjxjU3oYUhCCgEDX9XXVAdzUz6QCgDAJwYkK4kj5RbUCckdd4Dq2VZBtkxHYvTpdg8MiVygEowst1JGNcqq",
  "key29": "4kJTkNBHVvXaP69pxZo58jP272qT4CUrCyFH5AiUtqnTsVRH2EvQdUn7qSTAs2qYMVkpHdpGc4sYw8CMhWA1g4CQ",
  "key30": "2hnFkyyHC92bxZi1qjB2xdJJYa1wWBb82TprP2nHESjCnFwmVTYSaLzs2PwNSYb96PmFcoM1U3LCXUteXXPvz9ak",
  "key31": "4f68oLAEpKHnrpLKeozgZEsQ4YvoXRrSPRYCy9rD6MZimQiGegTBjBxejUywuSoWfah9n2xtCyc99KKBkBws35TJ",
  "key32": "462oRXvywSfY2bnDzuRbrXTQsL5ftHH7BXFuZkiCJtzH57QzByPyVHwrVsSh8zBiiatsSxpBXDe5Z1WmDe37SmZj",
  "key33": "3ynUT47SAGV462hJVpEEbMtKEBPjHMfUMgfyKpRjfCezkSGPSrJuyigQRWGCb5hzkoPo7Q759aUqDio48ZWKFjff",
  "key34": "87jYSS8a5qWW8fb3XFd4eD8GPzdt2RVAwHYdXqde5FSvYPqp9rcjGyr63qCJZrsVZJRvrBdqhUvUoLQqiYxZKFT"
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
