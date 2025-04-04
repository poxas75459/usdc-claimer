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
    "2m3RUWJcJGHdkxusHeNGwQq2sZiF3NZfSW8TS8CjSNsgkrME9uqq4KaAbmyr9rhEK2u4nRMFi1EQ8yfftAMQBYSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzYzmrkxSSnj8vdiLFM5TZv1DuWxBqx1cLg3tMjefNjKGVMA6pUDJ8gaJizceJS7URJznq3ZzfG4FuXp6u7KAyf",
  "key1": "4eJ2D4Gytc25U9rBBJRfS9e2J4H5hoR5KD2tuPU53gU7gqGyFiA85cNymMDdkKYSng3JfscvXEqeVfWF1Jy3AvGg",
  "key2": "47ZfXuuQQkFU17z5ipynVXNi6LbYJNJbo1JxhcYjnjaAtqtk6VVuj1gbQSYdxMjZqm4j1rcqoe8GzTHSj7VBwZ7N",
  "key3": "3vvYMqNYgrdqq5HinSVV63zrSvxZoRhLnvSvbKhi1ZGww8N5Mwm1HfiEcutGrGgFydpNNji6k7tXcLA785jgEbiN",
  "key4": "4FjFSBEYjphw3NtVSJUoFri2KKrTdEj8Kx8z5hXk6qMECqEHrbVLLr4pBr4e6wiV398yKqQYEdsUbvLQVdcEYAYz",
  "key5": "2MxjWLSCNMNrQtVJ6MLvkQGnnsguopz1iRSBrBiiUSWk9rJdHsAGDiHktafrq1Joc57gDVKWMs7KqUdpQEC6qrcU",
  "key6": "5MbzpSrzxxrPRNk8k7U34ZmZpVJViTREffQQKuhxTE2pvBxNszhhjfR3GKqoSg2Gkt6HC18sfCWVqDAVyH1pKRjP",
  "key7": "2Kv74WBtS8uKhKby5hhfqqfPuyKsrKkLpdyrYRMHYwmaZgPTgjFcfTh3cCXGobaemGkFTkBEKikVgFNcKEZBnAXK",
  "key8": "4Q3XqPvuK5Mz5xwgWkjLPx5tJhwh3NRLoX1Mp2ab7BPWmL8bPTZft7BfF5cKNzByNNasmtXvBduJqcLNGQ61G2js",
  "key9": "Vx8cqx7NznQQtvyaqjr91gb1gd8e36PiUAUrtHgGUutwwpATgzEcCa6To8iUekeiFNT5C6MwVNKf4Ex93WZuqdK",
  "key10": "3S2C9YQ7fkQZSyKETiNS1YdzW5oAFQYz85fyVW9FQgrK1XYSaDgczbnuwktmeGf6DufLH4TvP5nhvVuBBX4GiguH",
  "key11": "qSpU5aJSAu46YfK3JEe8Wm6HMAFesYrsM44WXxbEm8Jb74B7PT91jPHwPJn4BUaU42qKdX4mDxWyvoDMAjVhmQT",
  "key12": "4yhAz2vcmKasTgAMpAXNLiSo2HypXoHpZbgw2nWfxx1KqmDyUQeAKQmBZ1BRT77LYHtF6KTLV5AtUMBv1gWKy51F",
  "key13": "4ojavvs1RQH3ixc2KSCzHsNZkbWikCkZ92xFL4FnR4paHeZ4Z9EkWt76GcWwBMwQur1VTyjVkxo5YsKiqQ9LRXmg",
  "key14": "2v1HEGw3jH41rH2kcDGxYoyfhNDmzYmrxuKemKK5d27BZLeS9Ue1r1MFfS4FjceGfzc68sSVBNhTwczBot8jhQ4V",
  "key15": "2qaR47WLgp8VpDYdMPr3wQsUJuEmCxptzkfZ3qiQsLfc7JX9hT8EFsMSrFqDd1xwQ6bps3Q9rzU8oUcLrm4zwm7f",
  "key16": "5pPe6KiXrQT74whg3ogFe5dL7kaoTmyLH1LVCFFinFXFoMjZ7YR4KnR9NUDqXpYSSKSLrr4DyYsm2Brj5bYBSEJf",
  "key17": "4oWqkJizr9qffYRpPBJJND1pomNaXaBomMiyp8cbfiDKVisuFECaneVdpRWgm1hifCyZsULr7YWCNVd4kBZotZ6U",
  "key18": "44EqFpXbPYkv7VhKvtmk572xuG9KkoDDyoiCeXtRGacDRn5suMVRuuApoVmqp6Sd6YasVGE4BJcoJ8AMjnpWJx1X",
  "key19": "SNzeLei9ighwuoC6jyg9PrYBpwoUwv4Twhc6mDChra5uT2BhFZajUH1uR3NeQ93LyE4ixwcigDRPRRmswredfU8",
  "key20": "3gV6N77YSsY84SdJr3VJDTLdsFdRwERXRmk7cFischnoPAm7MoNZmpBDGmR7HfLiuNK6USnJUhuc9o1Tuwk3rULM",
  "key21": "5wPN5GX27coZzYvPQj3gwbzHtWdN2LFPx7eacBFk1jx3cvWDWcV4yZMY31gTdHtEaRzL9Jhw9gsVec6eATbB4wqz",
  "key22": "2cSmrvMwxL1pa2XVjGn4SnuA2HtNc6hfbU8ogh7F7nH47u7wBp1oBxbNPBKxw2e1P2YJoadxiKdekqNhnFrbvGgT",
  "key23": "5XHNmhcDfHCGUKMVcvGPrtPwwQncAkQ9fQGxwsEMEhfdbaD8fsjkJSRyLmJDnA8WU1UJVyVb7itK55ThcvyvUAQ6",
  "key24": "3MrXDhzEdWQLjW4Gy7dXCGCwivEcBevv3dPEGjBjdUxnTex9DP8idsAy3EyG142QnzrKaojHmNtcFtfiHc5mBHV"
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
