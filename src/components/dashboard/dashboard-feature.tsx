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
    "5q1cUehVWnfJRgqn51NW55nFvJCSGSG81FPP7a2k8HvbYLBxXc7eXyM9nQd1yYQAAAJTnmU3RnYiuv9bUGmDNru7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AhAFmtN5iqRv4SgYdkAaSVf3ZHe2xdEYZ4Bhw1Si3eDu6tBtWCzvQ3gyu3q2iAeGEiBzbnet3xqWvQ7wkdF1zxW",
  "key1": "48PsG4UF93rumPbCDFCptyje3VJcWmYGLnTTUxa6UBwCY9mQtToc6hcGa7pvKdg6ue5wCEy2RyK64AkcjeHWPjGV",
  "key2": "3Kj89B3k58ACVu8YXqWY7F1Summ69zsFVdgFJTj8ZpLkHKQuYBSgkbndQfdLVmiA2ZbG7NqdJCJVbEcx2344Etc",
  "key3": "AmduAJGoxMdQGtMdZjJ5qMfbP2a5N4c9gUFLXGY74kf8jJWHczxs41nk8fhHSHbE46w1JhN4XXfrHznqHHqoq1e",
  "key4": "3QeG4K3k2Gaz1E1iMRn1qfiX5iw8TbuPg9hNAiYe3mWRUJBTJ8RLhViiuX3a8t9RV6WgDcvPzbB86VWDfXt7ZpUC",
  "key5": "5ZTTDa918ebNNqRRQ2kobDZaf4cG2XNQ6csTFyTnX4pzE85zUmNuGMQ3RKKFqMTaDcRpNoQbkGf5iMRaJcNmZL3S",
  "key6": "2L7mGEFjTPHeRGVo3ryn4xfMtAT7xBDY86Hmj2dPjYLFm1ZHb2rPb8js1aKfPSd9sQUaDgQEvPfvcz9gKeAXGFZD",
  "key7": "4HPw7iJmPsGTAHzKwCQFhpsMEr3HpboqNEXWiN4oP7hSy9qXZzwjC7DCPvmL4TLsH51LhXGNX4X2rWo76CWJ4Y2d",
  "key8": "24byfMDPjTdDzjxXorv95jW7QD7pqYTGffN1PTVyQvNx7F5y99ghzsMZj7dQKmAvGGWR9pcPH3sQZEvPrizTWmPa",
  "key9": "2boEExsYXEfmDgcF7CUk2SVimqKmrxDmqL6cjSALxcUFqnwoXPY33RvrVXquhUPYpHKVivae6oYRU3RXkG1BisdF",
  "key10": "3GauaMAATzSQZRwiX6JWrawnmRrMfaBAU9xdhsjqqxGKcvoVXFfkAqQyhT2y7Xkxyih4YnbeS33nR17qJ7iavk4",
  "key11": "2ymcTeuifpqGFur9RMQ2Pagp3MvvkKhujbbEqvg5Z95qoJ9inKTMBroQ3GmWNFydotVYf6MKmb2jYrB3amHU3Zi9",
  "key12": "4hREeuDmEXhyh16KKWJDzTjnvoZKGwczpgGKMQ1MmhRgmYELfGHbbhfhAPsCPFtJy5ZswQdZS4etb7az6RUtT2iD",
  "key13": "4XcSKph2zBUhSgc67Tt8s6Kn25XDBuKuufo13eLSzLDCqa3qtMKrR2QeFhdSkzidbLQqhTh95vrKCyNxzpZKJs7H",
  "key14": "4ofiZEL2ne2bTtnLdKtoECADgL8WU4qVKDVy3qHgDCdbvzAniNy9EjAMLx8RJ1sJ5shfZiJ8fft9ZpwVnFNamymF",
  "key15": "5n33qMC63sfLMfNMm6VtnjZCohTkCm3Fe77rhAN1dRvom9tJpV6sqsVHyfqaE7xxbLkwwYjFQf12QBDry5RK2Fk4",
  "key16": "3EcD1JAjDrazNPcGLaCFHqZrJA4y1UD37qUneEefBdhBNPS5jREdqZnve3GmVcjtN2FqoidWRCbF7tLdLzxTk7h4",
  "key17": "5UQGjfNfWTp3V6Rs6ambtZzFgXtAYudvQjTVE5oCZxunQJfrshDk6VPemybEvt9cnswbEoYsrh3KPC42QtSpAq3X",
  "key18": "3Ses5yvqDUenMLwQBQx4jend5tsA2n5tiqwLkLparVHCNJsUL6M3AYq9LY9eTRNV94UiKbMFfzjPCo4pVn6vpic2",
  "key19": "39xcmT5EX2wCNvGkWeXAczVACnsVwpStGqfrPAgd3vwC1yLuMyTgS4JeW64T7Smup49buW2mWBt2MPRNYkTNSgW9",
  "key20": "4oHLP4DUtMzgWqFhN7KG5TtrB2W1bB47RyaffqqGYvhFE7YdKCigNHZWbqZvZcjo4hqkUGStqaGh6cWZn7n246JZ",
  "key21": "4N4q1eLpQBR9KhMTvRV2JBiMpZGHwFY2erjmLhUmpSoLQQo9ZnuDFfb3pXxZfpBBrJZRbmuTueDntwDX2XvJY8Uz",
  "key22": "4uay8PNCFJn42AYvMLd78n9HJfJRrF7YDD3FmTGEaLrYpUpoWoyKeWhHRZ1kA27zuXdg9jUFovgMaKpHyirGWqT8",
  "key23": "3d12yHCjv5p7VZpk5TNgVyzqcroGixsK46zoKcKedFZmgKCMEnoTYcJdy4RS6UJFAujL3grk6cRXc1CHjUCd41To",
  "key24": "5euwiqiePCAwFGQrUpLKrKLazZkwFsTgxjxvp4vqTTr1e6874QiBcGy3rrP6Tggja8ifFC8gtG7RYtmaEgnFvLyq",
  "key25": "2ydVZ75qwrC53VF1RQYnQAs4NYW2ShkqVixtXdSWHJGCer9ykfXFerqwfxmVo2TnxVFXiMKG3dmuEws6t74o6et6",
  "key26": "3ripsUd2TFqA3zjv5vcYHANhSbCH2YiLHKZ4CAixA41XyEriBgfrGN6GVMZHUiJMFBimoFvQAqCsZoUWAyMAjPzh",
  "key27": "5v1uoBn78JWe5XrqDkF31orufP2iEgF3dASWRPuBj6TsHFK9dGEi6bgLS43VLfekt6dMUHbxo9dV4ZrunWmZpoYA",
  "key28": "35fmky5YKLuvsQpktavB4nzr7uG1DAd8fP5ue9LPDXPg4KJMqFWhvpqNvYv8biA6T4a8zGzmNXFNTmDXzYHeD5Jg",
  "key29": "RjfW78ET7xoApebLjG1VwXMXhNnGzNSkeN28wk1CUmg8kJKmiEWYpKNEpLa2bAhgiaDy2BZsB7dthBPTFZHQ4DW",
  "key30": "2vphJFcm8TGQL4EAubNfM57TKBk19MUsWp9QcaCsE6rqwdbkjjT9FYMsZfsxWpzrgeJXY9FyWAWqR1XQdfnKJFcG",
  "key31": "5LJH6uC8XaqNsgAxfFyVujte2rzECrPtXaUbsVm2F6KL7zb7GJ8hUo2XTvBAZDuciAhv5Fr2u7yC6zEwAZT32PSu",
  "key32": "JcKwpVfF4MJycrjjP8gsVEDzMYviw8LGK6u4ZoLRQyHDm5437ZPGCva6SKgwptEui7siquV3gyMS8xVxte1nD44",
  "key33": "4aW4q7JuQDdrpKRf88gGzTJm9CWhS7WAJFrySeQxUacpAiDgx4PJF7RLWrsJ5WiZoJo5zLVUN6tRbUvvtZZGhw9F",
  "key34": "w3vjnMBugXTQ59LxhykzumE4L25oWueWdxTZSfiuFfHEanTU1nHobN2zrVmLqx5Vtvrox2oMnrYetxD1MbyK2z5",
  "key35": "5wZaBj8Rr1SrDLSL7A7rh9KjFZcEFbNFsLur5ZxqUViTTXtxq4vxxuTDXjPmmK9vfaHbN9MgK25tcpGHHYeWkJTw",
  "key36": "2dwUPC1yTJvdXe1pF7ptL2ZYmgdTLEtjT7nLnb9kAUWKvHZsmhKnGkh2E4nLKTAyjPTqtqVKBZyzEjzkwF5Danhp",
  "key37": "3VM9yNGwsUEbCVT5XqsYwYVzE5LAWVopJMnWcSm2dFkEGBqXG9uNtSvcicFEuviUirYEiUbM9jMd3A3Cj6ke4uEV"
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
