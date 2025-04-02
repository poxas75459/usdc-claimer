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
    "NJ4f42KhSPQesZAMQ9vBfA7TG7eaaBP3DCAtMjdQFbdXx94yLvd8Dor2hXaVuaDznj1EveB11Rzdojs2n5gUuPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrpb16QHXMefQhWm9h267k4UJZCDNzivREq2e4WkLNpYnhdcTz3nYMEUNKEt9QBaJrnPBqB8hxpnFGcvxNvA2Ku",
  "key1": "2ZfAts8VKX3GWJei2dPKXAKVWUAnTKfDBGeENB5JBhwz7tr7bpbc5szuetRqnDaS8g5eiBwPYVwAvW1gG6RbjNnP",
  "key2": "2PXENXh2viAFKMirPQ6u3u71JGG38iWLXK4mhYR8pyhPYE1rp9f8xbseYU7aghXDQud3XRgSxBjqNG3mcHKd22Ys",
  "key3": "3EnYttn81xYVo8SgRMgsMiGxRHhpfBR6oT5NQfMhQN9gBwEdmLdR82Frjo7NUvdM5NraYDitHFkG6AMakHuLGGWv",
  "key4": "pM3WGFSnQAdBwvSaz7mMc1Lrnwa6WVLDDRmpduQLg4B2Vn52n1qq1GxbcdxnwYmHTyzYmoo51AXcbVGF7JeaHws",
  "key5": "2eRo3tdsPwLrAcdooM9kNqSeReqmzZbguzkjYjy9gJ7StHgyK6B6qYyK23MysirhEFcw5Jg8f8TFHELpKUQojBsN",
  "key6": "3MdSnPjj8nFmsNU35HxcgRJfSBzqMDSYL1mNL9mJsc94oodU6dPdmRooHnkM96TSXwA7kDeTxZMwfNJ4d4Pc9gWc",
  "key7": "4CBhqXY5kP7fHEJrKMykecaFUNdQNwndPe9mDqqcqFUrGsYBGVFz8pTVLq3MZmahACrKA8vEBCNNHyfNPzKN4iF4",
  "key8": "4jJQASc3A36SJWFXZ4HCFbGdHQTZ2rZYduJiHT9xJL1qX8oDQTTdDLAd2CKjLrKXfAPU9t5ZhQqLq4kyPCVYK9Ed",
  "key9": "3uGzBpYVWSaLrbE67QduSygXdTfRA4nVGc27Lbj2JKFfwPToAppwBMAWQsgRTvtTAbtTbt2HwmNjtvMi6ycg9vx5",
  "key10": "61qXSiJvbzcaQxZL3gNbHn5GbFqfB5c7ucxewurPWu9ctZfoVxhfPqLf11wPykAEGUMcaQWfoRKQBfnTjVU32VqL",
  "key11": "2Ja2AZeNu8GqtWo3fNkFScBhgq8mnf1TVdcaxVYJfd4mrQMxK6Gruf27WD7w4iA2qsRWcG6mX44PaypsxRLWQJJY",
  "key12": "4jzNjALQndWPU5PTiMZJiMfuYADgpzCoa7GGfLoG7Koj6jawyhjGphyUNWKRWZKwp8xSzB3kW1DV1zYrKA8PfXAk",
  "key13": "4VuD9oKXyXkqXrVgNV9pYnqatymSXFvPaj72zCU72bLvACrUCJrcxiVaLpZMjJPACyT3FeDk3tNnkBA6RNiPvS3e",
  "key14": "4GmJ1yMfu5ebVrTjUoMzjZtHq1g5CXRLLzndcNHZL5dJhJ2Zk4WipxNWRKuCisDD6ZDfiw18SQ6ggjqcMfXZ2Zwm",
  "key15": "3vb8yJGUuE8vUkTQ2CTyrH8Y7jrSQE4XeMqNVZZmpp1dkZSHfiBjSwqPGLpo9Z3LLXnnnWkkCsCG7yM2TaEmz4Jv",
  "key16": "53AQ9eSwCx6kxsvPPcRopvBrCifwbaduey37YJvqhCmW7cAx4CLdGir2AFuhuh3ZY3vXLQ2GhbkM4vFWUBLTJrPd",
  "key17": "4svtPx5hkdppwsPrpatm3Vi9pb51bvHTH6esaZXj1dNr6sduGmFQHLUZdpWiWcW81CTgUNf1w6oPyeYz4SmKjz2e",
  "key18": "2ekw9HfZUfEVYdbPP5wRtHsBF5XdKfQDUYz4Peaw1TQ59nnJ8eUcY2EQThkGxZivqT5MfhEnRuePrVCMpcHNj53x",
  "key19": "dd23ygF6wokyUaLv5ocMFC4S19AZEo1W34FpYdtYQn42Fa2RaMvqMRz3U6jmko9sJt2RF6ga7bxvPXpzhfKYmZ5",
  "key20": "oaSM6Y13pbxj17qtZBwGYnyoMAHS5Tjfx5mJreb3ZFj4fcFE8PVKcHCh5qbWug7nUjfzkzWycg7K4xt9nH57ne7",
  "key21": "5zrHiCHSA68T3My6b1vdXvssh8GLsi2E13RfHxsvkQYezgfDBNKRb3qTE8ffeHJqew7bNHcAknZUbFesmSopCztt",
  "key22": "4gonKxWmRQZSmfAJHK4TAanLcL2dHBJEFUm9fedoQhz7QG6W4jyMgq2B567dFxkW4KkLFSpqYDPDQhgh1z9PrhdN",
  "key23": "4LuYmMHSE2rstXXuTbqybYEDd47mhvUE2jnJ8ktX5so9rNgLaLH7UjwxzgXKjSj9EySAAetevUch9gumd3fvLYgG",
  "key24": "3RuPbW1gZn2AZwN6oVLNzriTbwwLwQ3rAawWp92152ZooYXD6Eb7aJrRdrJSgKP7ZmKTTQbC7aUTXDDgrWeNeTW8",
  "key25": "W6V3JUAb8TiyfXHqiTXnwkePwLZQt5JYbXfPzCLNuEDcAa6nAgVfyRNtoVsTkLNQ21qXcDpMH8AoEYPQeTQd2om",
  "key26": "64eddZVB5kQ1bZS9YXQ2kJKyEPJYrS8TyMHiL7MggLEpMnCq8sHQfrYbinCTC3TuLy4NTbWrfMhbbxFcsamweKRa"
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
