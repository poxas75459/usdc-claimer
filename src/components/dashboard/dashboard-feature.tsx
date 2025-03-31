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
    "3jvpBviXk3hCGkaizVFKBfzeVxhq8iCAHpVMZ5oZehciYEHa1xbW6dW67T7nrrKtKrMVNvWuuVecN5npb1Zsehrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGrFFnCRMcPqA16cTWYKvHUBRjMiYWxW6JFwc9mirnnGJirgrojdcWsihgNy5omJEAsXVGdMNDrW4vM223GbAuN",
  "key1": "3zj6TgVGxgPvT7dJMy3HYRfjNtYcqAXU58pMbabDtuzyviWTVYdJK6QBdqmLC1u4w9mpAr9G7weYBZvuwazLMux1",
  "key2": "3vdLAM5fFt2noEZA1tPPhdXJYsQnX4mA8qzbvPfvqL5q2g6GxKtGu8zhK4ZC2anA6eF4UiSfPZYXmZkUDNdZvwgP",
  "key3": "5RQudd8U74LgSeT35XEkk45pFj8ToDiV8L1CAkygcqVURuFobXc4edDbnE6dTUEBihftGDVsJhce21ooz4hrQ2wY",
  "key4": "3M2GnRksD2WATWiqSHnGWNhQ1zhVydhwQGMXGmKgJ26Ff4vjrfo6CFnwQ8s4MThmxYFqkkY9RudphPh57mMYq7Nv",
  "key5": "3xrLZ6c3z3q9vzvb7aJDyw5djZU8w7CszgFnGgpqzFdCouS8dZUre1jx4WPih2ZcuiJUf8M7oSGj3ZHKd1dafV5h",
  "key6": "3joY16bCgjo7BJixgzNFcP5SwVjDBqmwaeZG6HegjRRXSD8ifmj8TDZcAF2SyruiHeW3yaCh3bMSZVn3t9XVpPzL",
  "key7": "5pqvPbwChnnRTJJTFSMfzaw66tt2jZK6rhPF9X8fNr7ibzEEmtaoemZmXnW23xunS9NXvLTaNsP87LaJwqSro4ZN",
  "key8": "2eyzEGxZ5ckdyAciSC8QQ4LSyyh1vpvuyzYYmfnJoEfuz1wfjR8eWhR44MXE421jT4CmToGc8ZiHGpBhrXH5PWZR",
  "key9": "2T8TehbLTU2cYmhQVs6WQrbwjdvdBJ7tERhbrpnZuos9Htq4DdYbVp9mtS9NpzRa8WEtsVozvBB2pqd8ZveGFbZq",
  "key10": "4JZ88eVJBqJZDjnvAJexaftRYJ1FXrWF1v5jhrsUBkYe5VytMgphRzya8i2XkHqJeKRovWrpHzSpBqDPmsxEHLxu",
  "key11": "3N1Z4i3V91H98G9nceymK32rzqTB6gyG4AeYutbcULV1WBjwahxMGV8yHwWh8GgFyRvsY7LW1pw4dukytiKrusNF",
  "key12": "2WPMkuZkWVkTJyoBESryARTfc5ikZbmN4f95MTjocnMCEBMZ5kJwu4i3P7S3SMmrtDSsPeG2Mv4zk8Dh1Ejoodbi",
  "key13": "3xMk5eTYJ4QcZNKaxXw9eFfe7VV4ahq4wC24SYyyjQZzqE9gGvtDAFLZuqgRimBCCUjYd5yUyRvbkZ7B42tswJKZ",
  "key14": "5MJnWqQGLiBMBvPMcZFXhBqmHZP9FPdYB2AML3qnz89XkLMd6wkgknaDUpPUGxtJ9NhCKab2hsjKsTYWzqiJ7xky",
  "key15": "5dbbGJoRZ7XPhFgKruXzAH4fcjDUCEnMfcaWmUXA3AwwpvmS5FikPzkeKfBeBHXZhULwb4scffuRcubGDdgu3H1r",
  "key16": "2am5uEYXDcD9xqDSGaA23S1yG7LhJpUv6aSRhnuwJxdYWXsBMEto7Rn5y5S41hCdcYVQnFfinpfC3iYTQUE7ANhq",
  "key17": "4U2YqMYF2xTLJ58WMYqRsBaxDnTAuXpXohyujYksb1Yu1sAy1nWG9LehUpfwWPSHjXdDzn4uRP21So2TGoi57hrv",
  "key18": "4iZb5Eyed7oNniuTtXE4y1CzSzEyjid3pmYnnjiRLww3pyJTtmUmWm9MqYoqxe6yorBVjJ9jkvqKuU5NPavbLmoH",
  "key19": "5ViHYk6j1e8LRNZPFmqNwdUPTCVW9hnUEM9hbGBgHiL5JjNLQH2Cv5maxTWrA8YGrgCorpPEeTQvj1SeaqSxFEwL",
  "key20": "4oNAmF3gLHY4AJzEBd5Z46P27G3EFRHLc67pbxN5qjJ9JYwHNoMui2LTT6nKnxnYrFTBmVV1ZkwH83TfjtjCaKgk",
  "key21": "4HHvHPuLD3HTKZRByWQE7ZJ4ZDWzVfccCk1TQ237qjdvesDA1e6GnTbUs35V9kQ7urYstLm26srvYGc5f4MCTzCy",
  "key22": "4HP98bhrFb6wenjBiNtZ18Fd8FZ9DLhTW9kugWKafgLjF2kJnQ5R25CEYYsA2HwqjUi6nEMmrSaBU3mNf3L6duuj",
  "key23": "nTuurNbAX2F5b6nZiZpGxFUCesPtEeA4puhsZ2Gq8qSEk6oskPdfeouGsnpfZRs1YNTQKoL5Sw5t7FNb452CaCp",
  "key24": "65zYNUbyVzJg1eKZUHGVSnUh3vHjoSvEQKa6PLQtnh37ZkN8V8LHE2FhnQbp6qUX6aqHQ5NP23zsJc6CyMkUg8gk",
  "key25": "4ZBDPqx319VkMMu3NCJphaMqFJYcTvbKx9NAjGV1mAEmZbVBFfTFb3e3tzAkg7V7TdknbHij6U72My6VAPHk38sh",
  "key26": "fx9YJv5BdyeDYTjWkLaPZfuqhyHrtEUqNyKg4paSRUMjF3PogX3dDuzfTycgza8QiPiYcjBHUWjGn8yWM4c4jfh",
  "key27": "8CgGd29VSwgJpJrQhkXrS6rXxE7W9X3sc6g2rda8ymMjDqWHvL3yMUmqFr4CWz48qL2yrDyDwMn9SKkmJ9XFjkF",
  "key28": "2Qhi58oQ93yDnizFVASMXvHC6DBHuadskewTFhfPifemZJSE7i1bbofuS19hiXtCQ7K6HZoeb9ytdyrZsqUUn5zS"
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
