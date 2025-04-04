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
    "3mnUCKjY3VotvPRKxn5Xht8CEjaP1W7BEimPtajtQiEno9MS7XUK22BPaEHU45iExbNCQGvXRWoYtqB7aVmZYgDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iA9XXYaDwitiFLGGbZ1b1J1oiMK4wdKuVw3ndm6zLK5JrT7qYauPorRkiRRp7jK1wfWcv3xaxpFQfAESVzJXjF3",
  "key1": "QpA5e1NLXkpXMbVGJtVM879Ajd7ETY49amq8ifYBDhUQNEHVuTZXRqWWhSPpMB3cYscDgiSTtMDaudLZ5butvdu",
  "key2": "5nnWk3koLNUK2kpaSY7AWwDDDYGZAUJM7mU7sL6LLSCjcYg4Mo7buUHpmzpGktYdsWiPQSyyWGLwJ1MjeMM4RbPj",
  "key3": "LrsPJ5qctGsRWdx7XcGUrtQcpfUyAmGGxo48Yfge1pbKRuCqZucyVueE88DSpmTTyq2SVqK6oWjXxUM5MShMrLR",
  "key4": "49AoMmaC5w61x2YyTLWj4AM7M8tL5aybB3KE9fFQm16B9QxmQwxF1xWkYGotXkdvWZte3XNVUhCuwdvvJhbJEEi8",
  "key5": "4Se1cEG5NT7xsJzjj75DLz4hFUXf2BQtfmbiiF67DYNFTbE5yRYNqxsQhKjxiy3zj3gp2XqAx7dJzbC6dDwAjBnQ",
  "key6": "3NrVpj3BZaxMqXNfsaGEjKiHPXYN9EGSZtwpe3D3SKe5ccp9P9sXW4nHHC7hcyA1Y6kHyvB2qHDStU8xX5crjJDw",
  "key7": "2tjexz13kccfXqkp3VXLSX7wAWg76Rb7ZDy3nsqN31oZh7DNcFDMS5c4kGXwfj633YtLtWVVt23TcBKuv9WU2Axa",
  "key8": "5dBJ7YdsZ49M4p9chHMABLmhSY3RHm6y1CYU79H6eaYcVSeV3wyx6Du8kH326yYnqtujH8Nsfr46j5m7zJWbvfBG",
  "key9": "uU2BZA2ebBmrL9uLsSfYKYMSvDdG3wmDFrQbW5VvruQ1tyxDdLt6zBheMPE8z1fERdhVzJapu2teeepaXa77oGB",
  "key10": "JeBWjSp4TdGBtZV7sEW9VXar2kgrT9Nyd32yzzfjEJzArTjLxmrqyr6pPrpa23ysQB2hNh7c5dvm9mbbCy9NcwY",
  "key11": "qKz7PAYsR7gwMZcccRum8ZhaMxiWPXGdB83569zSZd14GzqWJHG8b58eJrWDqZC7TTSEdNGJBX3h6CqnzegvnUs",
  "key12": "zbFXF7Y1tLS6KA1BGVA2KAKbv2JS9nMBgReZaiuEPkv2r6smDk3Xgnv3b1WELLLta2JidC2xkPysQpyNUed5XUQ",
  "key13": "2vo4gAqT5ckFYVazgDnD1QWRZFmRjLsQJ9MSDwHpLpraSnD9jbJCuqXAmteKRYttjsq2uYGai46MjWSJJwC9Kbqc",
  "key14": "463Y4jedNEE4Drzh2LPbtMmnAGMNWauRkSCLAKqvw8vExU7NDKzN6Z1JCYeGbynCFbtSR9KNywmuTkaqyN6j7e6y",
  "key15": "2q5MogiGczenuPYoKCQdjk7irPM3oEzjNraU6wsniVJWa7SDNfGjUrHKUibCoP9iuMygtDL9vwGqSpZ1emmHNAja",
  "key16": "24Q4YDP5U6iomKKDCRThD2KqQw3BRbqB6U7NH3WxxQLBjhvd6j65GHRZYrnVgJ5KgFN79B6WbTBtxBUnqXoD9RG1",
  "key17": "3NqiudNXhiccVer1q8K9jyAUBHvuDokXPk4ehCQLB3VPCptMtEdjX3c3K4uourvG4Bxhvm5gAiheNTb5jc9rN7i1",
  "key18": "26dQ3gh5mQVnQKane2o8EDk9waxAM6soSLuLVcqECdLS2LLTamkGAbrt5WuYpZmi5iNUAi41R1VJWTjSVYXvMdTa",
  "key19": "4cU4VoJs5Ny8Uvqt3y6dk6aSr8HFScVNKnfZ4ADZTD3jeSzZ8YYA8SQFFgtpmJbHH5hH96SRYSPs5fp7BEu2PRC",
  "key20": "49Z8U7tmat7w8bifSVtDUbz6vUbAA2PLKLa5YNKR6YzwvgLDkfwPazko1YmnVdpuuPLFMpkZsY36rt5J6kNTbpop",
  "key21": "523hVgvfCmEfiDzSukwywhq2eSs9Vuw1aR91J7TGb7YEmLgkjQSydojFZQRaE6sZZVuatW2hqepFmLm9qw7ZnXRd",
  "key22": "5XSLdocM5N5tsEhc2jLbrzoto5kG5kVLFRy5enZi4ULdsRETAFo2YEMtgCXEGW7K2pq8gNLuTvQ74kes4jttAycg",
  "key23": "28U9jzKLSNRX75JvjYzLV7RsTnUV3uuAMML7itcCEAofoGcrt86f9atj1qT2SWUUFGKFgLek15nM9yEvs1uGLTuZ",
  "key24": "4N2W1XUHjswDwxNyzFjXC4wjwatVKYoKHTufDg5Be5pyiKrhdnTST71UTaGfvWjD434bhcRuLRrs35gcGyFPaW9",
  "key25": "rhc1ZfYq3vaz9LcCKqBtbJHh6oGue29ek89ZZwRfnrkk8tUGsdCvMqBAbDRf8s96LhrmCrT7x5LHQZCMKRyEp4q",
  "key26": "ryxhv3mEHgNYLTTMFEovSsLSs1ux5orEMLJipPHYPmhRHZGzRjgkq6JDPQ5YZWymBcyGGR3wjZosnf7nMwEboRs",
  "key27": "3ESTddgtLJ8GNZJCxotHU9kQvTwhv3mcUSePrhEAp6RCP5ZPKtis8r6AS1qKy6yztfqSBM5TWjWjoCZP9k2WAFnh",
  "key28": "5tnDUhFRYzzm2v37RZngt6bpwEGe1HDLRZAcoZXv8trAZTEHgGcqbUbYHx3e9ofQ8ii56z7Tksv6YrWRkK8K63r7",
  "key29": "5XutYznwXNV3LuMvidjvq6YQhpQJN2rth32aPgkHU8GEyGNRFcEgXpnwXV11AteCiqyzPHiypPdwRSKv13gJZzKS",
  "key30": "3pF9Gkh1m31nBfR6N1FWZwQHKQdcpzHCoxE41H6XTiL5KoQRnsdkyT5F7QXGzZ2hXYvw1BL2uyER6JoFWw5mWhD9",
  "key31": "544vpTDQiUEEBKwcvBnqdvPToFnNpjuGDQ744JwRy6iZVq7o3Mv3DrHiJJ9HyhJ6NPgQE4UGDruCDhDUeJDkxyjV",
  "key32": "4evVr4F53yg3kCS85JptWx2YVJzKeCKnsE78Z3ryFzwfRWtYBqjLL2oVS9J4zF6FHhYDn3ZoqNYmAWr4USDex1jE",
  "key33": "4vgrES1TSbWgZrBqYCaGvji7n1zdzztpBUjvoWc3tajLj3KWnc4EQFh6zquRaUhXJT2BVjBtrtMmEPbr78PZxKDu",
  "key34": "3AdE2W6edKK9ApjMh7ve3Rw6nxmVHXV3tsxJAUvbGS4nKnjZ2qEJfDr8JGZ8WZz62vye5dFVMkZpyHcUZRqckEwD",
  "key35": "5gdFcedgG8heJfv3sRLV6wBqmt5XmXejdsHzP2NaBsxg3xixbHT86Hc1Y5htzMUGcfwTJFe6BUtEAFt3q5rACuZA"
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
