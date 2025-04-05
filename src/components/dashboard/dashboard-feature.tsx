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
    "23GA3U5E62xjVhfJ4TL2uvhuNYL55G2qnCqUetftym48ukwvo2vczViP4hS6xWHHD68HVywZjS6UeNHnUFUSyqaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g8gAGhXMHo1Yx1jXFZR329X6L5rTHZLoag2JVDDhAZiT52d6vZWSDEs6KsDDnePTDCCCRKUY27ZMW317wHoffud",
  "key1": "4i3XyJqCAJQ7EpQXsv1rZ1nyPMH88MR2bZH5HfQWtYRYHxezezpwC318iuQXzybwWhtWV6pFTZChc92VAtjiC3C3",
  "key2": "hYSGvoPfAKEbMzSe7SXUDedUgvTMESYwxPw8oNCDbwyypVXRnP5HZ5xB3Rns5TAbsCKGvcqTzrHnaaj1e5sUuyX",
  "key3": "3AWamca9WTsV2CM2fzE8tUzhQCzJT9Vx4RHQuXHyodB9jVis9gxqNLZ543de4oT1AW91J8cvLkAyd95o1kAASJWq",
  "key4": "4HyGbq9v1GdGZMQkEouGEr3Jcpg7QFAjM3VgNs8Vmgv83uGVRat5R1AvRzqy57PGYS81WwKYZw4N6pNsj5PKzzAL",
  "key5": "29Kw3RqPwE5WQgN5rUoYVDtst6EcuxMJPJGnz79vuKBj5i34C18VMKBNFZNhNd2RY2M7fyP6ZaRHEvkwUi9EFegF",
  "key6": "56iRzHRu1z26YiQoT8qfWf55FJF7kHtFJqjBkCvGZGgtbgti5dmGjniHcWp4B81ov6tkdTJGdFm4eq4d3VHAGJ9j",
  "key7": "435hAejw5KWFkv4efjA4cG2FVzLFCLNHfzPW2dcrfDghVtU3Zq3gnzqEwMDf9B2LB2Yx63Z2nesh1u2qBq96JX7k",
  "key8": "4phquQ21xLTRrbC4ocRKHeqDgJiDtCH9GFHo4VWL18Qcpf4bAkk7PpkFLXihu2iP9X7jU4qWyG77NrkSEtGMTtG6",
  "key9": "2LjBRYanr9jBAcfcJwfKCuhy7NEFcTjnr4ugkG4VpEJu6cZreiENY65D2nhWtCqJbRDZCZmyxsiEp5UPeEod6Fmp",
  "key10": "4rRZ7a17WcndPzio5gQQbTUZB3Gb3cymbr58tedHo5RXeyzJNjDNvW2mxmG8jKLAmHUqpmUw73EcNE6j7fQ6Vjjs",
  "key11": "2DMHAfwzQ4m3ZvXFiMkwWobehqNNfm1NSqnFJDWfhAMKK5T4ncvCGUgc72WdeAEryve8hg2T2NJQyjem654ARL4F",
  "key12": "627PHPSvmKynrk9bXb35zaRtSoXT6p7aozaGqZoKnZQMuf9p4x51VLVsgeSWq1w71zjxZj5RxxpYKvTvWvAMnCjb",
  "key13": "2aBmyz7dwgvRAa1CxntHWk1wo68WX8Shjj7Uqh16roMLVKSzWd6n7mVoqegKEC8NoUjYGoKeGZaXQrQ5jHPuT5bw",
  "key14": "2iC9rRiKzy6BB4Aa7XwyQo9rYJ4xeHT3XHRyMGr7kXVcseeXru9tbbDqBhnjd9kthLEvpmDCipeuSCZvnKPg4RZh",
  "key15": "4tuU6UYqSqzoWF3xdL4DqCHmoGJwPa6ZKDHTxpm1Kbesws1DfStdDdoS6GJCmpaJnNEacfuce5QB8s1zTMBoArV3",
  "key16": "59bSWAWNhF18Z4u84dRXexmqPZMjVLZtrstRqTvh5cCXoXUaLA54aCKhwSiFimT8MdB6MqevVjPeUWC6CXrNJEcv",
  "key17": "34bG81xpLhyKBGL5vb4SpXwVAQ7TPWsnYZ8WMBZoxva8ic9iYmMrv4bPeK2miEff2Etb1CaKr7y11gBuYvNUypDX",
  "key18": "4UsWhFVxSBCMMhgjAGPAAsvttVyb6tdyVaMuyaLS7A2tehbtck9kfSt6MPET5GEwd69UpHnkthc2ivQBiRHfQ6qr",
  "key19": "4akPyXWcffuVgBRDu7deJkw5R4MwRBCMh8oLXWH2DKEDr8tJw6YJdmgt7KsG3UBfCe1ZR9jb9kDwn8PpCMP7taBx",
  "key20": "442wg11eUPc1K99KGbmxKtV9daHZNEwWuKCTe4GWsRKZdNiqyd4sqdoNTheZW2hMZ297L6Toven2jEnvi8fjbWpe",
  "key21": "isT2YvqSLWS4kgLUZTPpVD84BPW3NFetUu7ssxtYYEFcKGogbRDaejMtsgkZNeN1pLm41rw4oPcEWQErP2NZr5T",
  "key22": "ZpN2Yv7sWgjXVEQKRLWJg5vw7xgyzpshbYVtQLWNc4qjoXLTaVWF3DCzzZxLa8TBQnBRvE5fzv3BP8z5zWAoxtK",
  "key23": "3jJcjDro4EL3yD2HEKZSHgEHxxqt1oPbxTHioWWCmK1vpapEz6J4K7NqdsRvNfcpn4EL7qa5b9yCA4jjF7TgFXxV",
  "key24": "3hz3FJTjQ1VpGm93NqCm4KEsuJoFvLHFLtnVC9KvtVUwgnybqhryNCGyrWR21PKDJ5FUVTkRficzCWqRmZ4besiB",
  "key25": "2T3vfHUru6bERqoV2cZ74abQq5jeWW3L1q4CM6WzYq45h7yaGjEwZgvgwrb6EfvbwHcbTxyzfghtTanXWkx6XH7U",
  "key26": "3XVX3FyU1PdxwgvZYXQj94kCku7qQdGeKKiggsH62wfjuuMb9ePMhMU4B8SnUSRMKcTPe1jrayVrUvJmF1V6jJes",
  "key27": "2EskBKhwNTQfo67pBVtD1fbe747eN3Bsd7pdVQnFqvLDtH1eN3rxpHteGsersCzUnHzN7mVkFxnYrrj4c9fJeTWo",
  "key28": "316BcJao1xwUQUoHuPQSzDcwN7DPvPFLDjFMHehSgj7XzN5JotLq4hKWMnZ1LDRQQSDRA3tyGBQWgrXnYdVmZ9vp",
  "key29": "wdPKVuj7cBJGpot586ZSR98YizkByuuBNf4G5JXkkVRcj5PQdUZKAwDSiVauW78LxSCmXEDo8JrzjWyY2eEaZWW",
  "key30": "22RZxzpxEhEe8aqxiemAbpYWYH6TZSAz3LhnWm8PgATDVGjhcfVhB3LHfFcgZWV6XcW7mE1FfRMvHs2rjeRBCNJa",
  "key31": "5jP3xrjZocaQM34ZhVn9oJrgEjxzF6Hmgcf1J754W7Pk3TFFSn3euq6v1VfYX1Ka2uahiJR3uDGM7qxdcoybsc7w",
  "key32": "5VjLevDeRmsi5BbeELqcvXzArcdfeMCFbbso4RwpqU8qtg1obh3s5RNWax1TXLAxGEW2g1jq5G2waQDDnugYfsmU",
  "key33": "3Zc8eHcbxHjY7hG4u5n2QzhfshYtvE3FXwq5sAGD4repkzir87UxAgZtB9K3tvi7i1KadQtfecXaE9juf15x1jZg",
  "key34": "cqiiTsooEVdsoEpPcp4RL66A74qfSucMQVjx7Pp3Xa4m4ueqE7VmqcA7UPPgErn7dojuPXcsm5AoYp754zMxkzA",
  "key35": "4EuntedmLjhos2yXrkXMgxM2f1NfFJE3qGVKhtEyqxH6rmW1xMyXJxYaEFLKcPYJoUbpyxdQXTqKS1ciNhN73Kiw",
  "key36": "2YEs8UuQ89vtkQYBhtQXnB9jx7FssG8VT9nJSVPhk7NamUYJtcSdmG43tU8MZfwuL6WNTQDSu8yM1dQKFhYhdjGf",
  "key37": "LmxQ1wXRi4zM4gABuCbXFXQ4ju9ErXnY9qTkcP3Jc6RrMxAH9WbJcMAuZe3kp6737a11hfaoBhP32u4Pu7XVJef"
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
