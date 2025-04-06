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
    "25Qken1whF8NxQovPxDSnq9vNLE5zh6EUkpXCnCUyJhV21kbY3wNe6E7XNyLRurBcoRRuA94r4TW4CfWd43JRqhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RFk7hkeFqwMm98tFxUxi2FRuqyXohZ85HLJLnuKVwyVuNPjA8fv8Pi3N4rctd1ieLBzp9KzpCHsnAucvUVUaQ6U",
  "key1": "NYMAM4D2DZoC2KMSfim7vk2kDU9mrXr1W4eC496XBxc9ua2i4HnUMdBJdkzbY85zTDNmss8CiUowVX9WdF195B3",
  "key2": "a2gLkNhftqqZh7WSnextBJBz63hGy2kWwhnLtD1jdVDHMaheU8cy4cNKAGmUJCqsDhz7rCiBkHjjjHLDnLxd2Ub",
  "key3": "3hMd93xRtVo7eCLh4SqT4zpnYs2pxsZVrnNxXJdVLrFT5U3Nq4oTNytLXxoSqk5Tox1hBu8S8MfuL1w8s52Gie6t",
  "key4": "3rM2qWJxKGRiefriiDdVHS8JW1wXmNzg99WcQk2VRpCmhCEoqMgyEsCqwzwXtxZcf1uWDrBerzrUmjLB9xhZC2DK",
  "key5": "4N53WppdV3NLER6SnD3CVZWp3Z6FvjaKLQxNfjnuWom7UgGzNPVoVroQNhRLa4e55H3mykKLALgkrtyWcNM1PSBG",
  "key6": "8BFUouBag29z4E4MYBG6nGqzNN1TvCngyuQWZLJzsXTDFxSmHmJWdYQ6S6rAyqsPifDeYtZGB1MeDCvMUraYGu2",
  "key7": "2C4ESbdSwxg9GNA2ZMnP5J33gXBWFsyS2MrgH1ErNYAZCMKbistX3YxHm2sc1HBzwvjJawLPk4DrZSzkyioEivXL",
  "key8": "3BWe12sbeEYtRTFPDfqDJAFoXjnTQNEjKTmdMaT2U5FEcFuezWFonuLzNZwqUX8K49X57FkuJtp93bqpFCHwk3FA",
  "key9": "3bAABNR55h9SNMYFjRD5Ksk7ZmBmwC5LHpybVMCjrsro2onn7tJ2YxBxbYWS1umxQQqy3bsjqEXBJSb487A8v4P9",
  "key10": "4qZCtiPk5gi5oURg1S27fg2R7mjEKQQR2kPendN2K9JKugbP6rpv1iVucozf9KU1aHEMqJW426tnrmw3Y7Mjan48",
  "key11": "4hsPo4MJso3mtszaK4VUr3MyA4HyLgzcuNc26dXqtDAgmVJTsa9HWnHv9HDAgEK6EtA7iJ1qm78u6canrq8YEt5X",
  "key12": "35U8nhLHUKwaPJrrc1y8w4bLCho41RSzL5oMor7AdNi1yVaMrrVi7V3euSxsFwRf7wVCybEByMaBYD1RRCHvUKDt",
  "key13": "268zRk1J6vbbkMpPe7VF5hnfrfycPF2v5zQxHc5XP9ZUyPs6hMcmjeFo3QUmFGNtd7oLym9yhannjyyDcd8vPKJH",
  "key14": "5yMbMCjPWXkZKqmh9RoQHUWzmxRLExLMGbMkPfnM3ivPAXzR4jpBkDTA3C5aXhKs7qDcJrbVA5MNJa2n9d5qvQFp",
  "key15": "4Pnz4d1m7ZoCLoFqAmCdZYCBqAjBYqvE5TwwjoCkbcQaac2uQixAr9qqGU1uo2D9ooGJYodT3jJXiQP5A7BYSEi4",
  "key16": "23Kv3qyKctgYcjPiKcPbSqFRWgixBKE4c5U92cn2ZJdYRK6CAgbqoj92MS3BpEcL9bYrELUY7fpDqFAo3UPjLEBb",
  "key17": "4jJJSq4aAHZ3NB6PhsUmN5TT4ivpGTYHscXhFSAS3Fb7Y7HTy3hkWYo1qR5kSSzxmr1aYe5wytQPvLn2aipAAHYT",
  "key18": "2Est9bAMtdJE6pzDbVVrjFgQXhnLDaifqyeK75UvhYpastaiSt2hM62VHDb3a3ZyZiA2XU6URvwWbBDiaA2kPvg",
  "key19": "3YwgKR2jK3dHMKkDX8AYo9SbjvDkBnsdiYZy7Bt69xASF33E7t9LNSNWby9DCvZuGHU3WgaGotL3Z5rYQYf5R7E3",
  "key20": "3XRodm9hWkzd66QQo8QBGtNCyu33dsHsSzPg4ZUXLEETn6SokfRVC2Yg4TTwPQdYESXg9aVRR3jbVNfjNsYLdmr2",
  "key21": "42jJ5vUngZXKEG2GYvv1gNJ8Q7kCzxY4L6ayNqYX2tyqcmiXGnhFuvaABemJxvnZiaJrLJWrUp4XAxWe3T8zYvow",
  "key22": "98LJ4M4Ho5w3hSNQdFKCn3YqTp9BZwQu2fDjK9oat3pqK4tgTbEQnntXG8S6sarQeHE9yMM5panqBVBGdRJeevy",
  "key23": "G36HjyEQwy6C3FB8DTcfkw6bmuAJpBv2YvcZ4qNS3FtDDKRAJWgK1sy6obBTmLYwLEGYbxSsuweBZpWFXwMQce4",
  "key24": "XuNFScU66AasCCrzdAMKj66NhFNZVnhbN68MKxGgVD5uqBarUZm4hvFiM1A6egkEdh1uWr7ysLNUPbHsUGw6sx1",
  "key25": "ytzYnavfasDsvg34VD5DumpPa6hEs4SYxXT3iVnkPGkNkgVzcVJLc7y5sUSP3f4kuY596A1tYL3Ygz35qT5scVo",
  "key26": "4r6nxw6pxURzJ2SetBZHaPEqjUMMtKr6ejGyMdZEoHgN3BQuUrkhQuUWPA7ms8cwH9T1QfHrwr37RBQhH7W73Uvc",
  "key27": "5bgC2mnCt2D3pq6jAo22wM8V1ovxUiktLewdHxFUXrGWHW2om8i5KJuMiYMyDXswZet2FakDD5cs2WLFHBi8pnne",
  "key28": "3WYU9EhnYWPrzPsN2nFxo1J2eeTUH7mtxgRBgQzesV5S46TBHB8idRp6vvdX2ECLpxeDcseMgkxiyCFUrCca4VFp",
  "key29": "a1xCN2ywQFVW3NRxZDz2ortftjdraWRStySdMg9zm5y29YQEZAeGR19mJTZ2V2ExJfeALsRi9f3zEF5qK2LuM79"
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
