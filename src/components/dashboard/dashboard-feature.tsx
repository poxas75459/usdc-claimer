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
    "3Be4AXpv67v4tpJdsUgPGtemAVNtofrNSpymszkN662PWYJ1i2nbUBHKyikzmBXHWLGnB551bvxtep7hJSU55Zmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4op6Z4jmvnQZiHMmceMVc14viAaENraCfEJnrmAozDUwUdBCqNewyWK9SdUZUtKuMLDZkn7TrDCxC8HzNgMjVH5U",
  "key1": "i6TXUxekjWGALp14szCkrBD1YsbvJKKQSPka2jpL8vHQyJmHvrjS3H8htPywGb33KWCj9f1oFBCRAw6Y1GjKS8b",
  "key2": "4QGFkN9dLJBejFJhrsbQVx9Lg3Sstybk4oV45A1uu7LjBWYYiQwpTJewsWRKhw7rdK3qHQa5fjgcuR1xBtafCW2B",
  "key3": "2zv7mE4SdvYHT6TjgxEoiMWDejn8fVz8JpfT9zsr9PTpfEY12Toe7D7Pmm7QUqchXDHC9GUhcQx6Da2iVq5vPkqp",
  "key4": "5rFni2xonCXgvmSqWNSspE6k4YXddtfAQnMqFJCKykCoD86w42fJqF1hd8MAFBJZoDiGx6gCFAhofsx3T79muzqi",
  "key5": "35kWuomAHXJ8e7uWEzU2ZimnRPTTtSJeaLmRjR3gbvFWKM4hoRHFpex56uhQsSZPeW61F3FifoekYXa5TpXg6Aq3",
  "key6": "LWqdYBrMtqDQMFdF9382C5Q4tsFSnDTDKVAKi8JYFfPFyxRYpmgt1Gwza4btGJfHwQixQpiEv48LtjqP2NjWawo",
  "key7": "DV9GbfnrdE5EarfQKc4ee3P2vB2iGRcsWLkRyFFnNERCnZ4hrvaH6kLjnSKxyfAHZ7gEhyDP4SDWGL6PoTHmdGL",
  "key8": "2WeEkWoxFJSSJLCLcAChZQH8wMbNEhS8Dbtg1tU3urRyVzE61HzRfVARzZF7AxQ9NvCTpCgSJwJYhxNme5JYwfdE",
  "key9": "j4aTGMEe26TFbYR3ZjS83V7pNnB1E6RZdAAXpx7vKiZytNVxcH8nPjf8rMgRK8ZXMwh1vep7jpBfGcJX18gig6s",
  "key10": "2iVZ4SrAQMyKhKFx9ppHPSsFHgPgVxkcmWHxvPjCaoRzKtYRvS1CV3nMDZEeLLbMjQKeLmbWKvr8CyrzfFNuP2Cu",
  "key11": "3JVJSQe8PrKM7axcgFQCEhqB6ypHD4bdpL4hJcTn5mE3zkiqbMgFDNzNgRwLHU9aGZGP6sSNoM3wLGMhhmwg7kX3",
  "key12": "2ys7wGnSTQJY6d996icoCxVCnNHG66pLQJ2yznDD3B7FFPzjGqBYnTyPoNeazgP7EGqhJCY4g87u4KR4ZYAEWd8o",
  "key13": "4bs2YGn515JbVbqQcTtFVcMUkjQjCUhoMnkFAAU5Z1XDUnc9Un4TZeHvh7Su3x2qT4frK5dmajBkoK3tSNW1JjW2",
  "key14": "5yrkWDQdRyF7nyM91RrYcD486ztYmU1gseu6ygXar6kkHxzfd8U3c5yfbChaFMRruNTfULcVc7butKWWrwoci1eh",
  "key15": "3KvuC3HDWNBZUGdVTjeAKeegwRKVC3hvREcdV8W9wVQuxyxcVbjxHX3xXuB7i1c9Gm3atdWJGFjstr4bt5zA1oGM",
  "key16": "5bFpFMeVV6YUNn1wNPAWcX2bzYjQRsJJzChtAudD36dWBPoGVVgz77vL4GwnMwdT6WoQRM5RoG1HxESi6rcvUcxf",
  "key17": "TrzUmN5kqKZFdYqf1e4vG7MoEk4jQ3165cbUcKegJ51FZmbLbXV3pymD7AUY8SUJgxTHPqTunXhBBwYCK16bziT",
  "key18": "2mbc9zhh3GtURbRXTRvqgeShQsWjxUPCRpgWiW7knQMif7WFvqbg3WRDrBqLn8exUNxNWkpTF1z3HFUL4J4uQeHZ",
  "key19": "5a5AWEeXhkStiNEAvxay63kdAbfgQHocvHBmozrhLo6NyM2xwq3CmU11oQn5bfuBZqusfcoBppf2mCCJfbZjy1uK",
  "key20": "2T5mQaPbwYyDZcMR8qhgefkLdLrH4yGxT2r99S9y1zEeSBnkuVwPBv5wQb94aUGoWd7tHRh8fvxB3HRwJE51Yohk",
  "key21": "URATvopx3vUT3rKWKUcGPrqiJk1uLAcsYxAbVeY9CS6MtVBcMhcyi6Bqtwk55biwYa3posVo84Futc4q8uZHi9B",
  "key22": "BuRbqYCQJGerGhMexDxoEGYiAd4kYoyJEa3v5XKQuGnYphrYVXYu7VpS6s9LGf2a7vKJjyhqSZLM2qCTYsbU8bE",
  "key23": "2PfVFGnnf4n9MxG1EN5dxrAhsvrPNt2ZFPzGydV7HSRmQRgGFV1yQRBbG5xhf5ZSJBdcCLzkd9J8fMSD12QsoMv1",
  "key24": "5Dq334DHNVHNwnrPGSS8bgH88dMUCJkdzTffF1VfC6pDGg1JitKxcikKX5aWpJAqE52QtsamkjHxe8Jp4sNKzR4h",
  "key25": "A9tb7PB9w1bgpLNSfKSR7bPXhGf1GbfFXSbPxrSk35hMCx3Us1wBcBo7KXDueYghK9rwBKgXbW3gtDKJZ4c6wiE",
  "key26": "5GMc813zLuGsQdPCKdW8ZMNTwWfJkQNvJhnCHoByhw7yebcrzswJ1sTpLYgQYA2WekpQn8qJ4GJ81ToqQ7szbHNG",
  "key27": "62b1TzBz12U49TbfdPEUxkULgs2AkRYqUN9c33kEf5jQffF2r3tcysHctnAqMutcaSYto1nfzYN9TjjDrA9h9n7T",
  "key28": "yVSeMh1s22qt6D6NTBZ5UVcCw9fenP8fGnwULgz3hMEbdUHhvvpMqYYiC8NgvpWMR8gnngcL83wsJSuDT15DPRX",
  "key29": "2GJfs7xXnhFCBMWjqPbLetVU11znpcbDGFL346nkL8c4shiXKe9k9KpY8pjxQej8ANDsEYupTV5eusrHtNikmx6i",
  "key30": "34EzwbPmo95oFZtexU94PY7NQhkTWAnYGCs4bgaQqAFwnfzxVodQk8dBNKnUDcZHuXHBxbQbG9ZQz95jED39DzmR"
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
