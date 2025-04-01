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
    "4sD8ypYxY9o8J9CmjFCjAbS4Y3Ata6k5MUD55rFuJenkUrG9uAFM5SpzHXKtRF45JgyKtr9YX5LvAYFaQM23MnHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmGAY2RBJT23ZUmVzPoLkcRaWppCm3bmpiTQCUEC33ucXZsMP3c46nnzB3DVWpqDMEyDdovuzCuufZJPzoo7P3L",
  "key1": "5o5VxfR1bVwTQHUixqT6goZTZ6P6yhwUAxGQriaPcmgBQFWPCJfPPAJH7ABdWrLegjjnwHeoh1yZiHQoK5mPEN7y",
  "key2": "3husjAmx9pKfhQkfyXHhSoKFKz3Eu4QoWGznuJWHcUo8vWRy6auX1hNQhQuVTTwRzL9esweBFZLgAUpzEPgKinem",
  "key3": "5h1zGMdCQjStSt75AjFTv6CJrDAZKH6xb79ZQXjAt4T3CSZ3o8jP5tJE8K5GY1DR8fxF2Lf6cXTai9Z5YS23pmR",
  "key4": "5T9mabYtyJFQzjJgPYLJEzFx3ydp9di47PzdVyCJuHk2YwL78pK62wTzU1LTpaRMn2wB6jfApNrE14u3b9Qj96j1",
  "key5": "KGpSTRHJEZFWeQLmBcqEM9DX4Li5PaA3VewFn5kWxemdt6f2SJ1Ryyd15fhF1j5mC558iokNha7t31YEg3F73vY",
  "key6": "k4Pg4Qjx2ra6UrnZny2Zga3qVhm5hQNqFPoqsYVm81CJ25DAUPBrGr128tEbihRPNFro1yCNbEemx9TboszRGYu",
  "key7": "JFtZxsMtKqEVa4EzGVybYk8Hy6Npk2KGUGuTkAtW6PbAyS6PhAYvJqndbtKBk9q2aS711KU8pQyNarDzq7HxRBb",
  "key8": "3GMzrNJXJLHwAwRrs1g5EeQQvtThdohQrGMa1kJyigHnoX6tSDpxU4wciCdWghjjutdSRUEjUpRXLv4764ix3R42",
  "key9": "3hQanLZRp9hxryzCok7ghiGvuN2mXfUpatDYCkv6ejRW9scJHtEmdNTH4HnvSP6KN38SG9BanLd4nXFy8gARvkLu",
  "key10": "1297b4dMMGvJVy3R4CVo8JxKcfJ9tMs7RfKtXRZh1mBV4UBTkxZELLRLVYdVXAKXFUW3hmf4igzARy7qCEb2BB1a",
  "key11": "4BcPnS4LGZ3U5b63M4WBY4wsn18TQNFJ4WTE394wQHh6AxfFPMYcErarsfFVxoKCgxiqNPFtcoYkT6e6R1G9K82D",
  "key12": "3LWr7mXpojsUu4aVxnbaeSKxV3N3gDgqmUV9YkdU27So5YttxERKn5SUnBbho7EJwn16CS7aZEcwmbfvN3mXR3PH",
  "key13": "Qf2Arw86yZYzZmEYqs7YC7uZXQ6KwcpfmA123Q7WqYR5qA5149vY2DvKtw4SznFKcJgk8PCdvrVuBJd9BGQ4w53",
  "key14": "2h1RtBmxZDPiHTA24ujqsaXjTrfcm1NjBoDEa7CUF5fSpJdsCHjTZS53BdioNVbYYFWfuMqhRb6Uk6Ew25vRb7Bp",
  "key15": "2izWw5Hu3oT8yBSz2qE96n6aRPs9BeHpYe56cGck8rfYKjPXJWZ6ZeEM3zDtYXDrGknmxBijX8kTTJRN1Mv1sxbv",
  "key16": "3VeFWsNcjrmXUhW3Xbcx41YNJLmNe3TTE8zDjxUQRQX4cjus2PCtgfjUPQho8j7W8npYKM4T1U79FXXcoNYALjkJ",
  "key17": "5EnLpEpsuLLp8qFs9QE7Rrb1Kdo7QuNVazPyDu6pSczWBaTAt6rPjmrFQp4sS4mASASpaRdY9xaHJ1pjc53Am66f",
  "key18": "2Yi7b4e3JTKAQoCRnpVLGR9fN2Uyrb94nT6YDCX88tiiiSBnqq8QxPP3TP5cFpc3PfxrNmFgpRJgzqseTSDyfanD",
  "key19": "3iT5rZNY7DDDo75PtBVmn9dZf2Uyimxc9Dyed2dQ8CnTuhayB2D8AeP7wQxzQQjtTRvzVPtfxsoXUKgUkHNXU9Lz",
  "key20": "542WUtPPKmoRmSgX8kT7bCHknq5DN1CCMGN6oaQFsDFXfvvBCe2T9qJMzeHkVc5iJ6XkCfmDfaoneFnX6uh6CDvb",
  "key21": "5tSgC96xmiUGKCrZ6q5KtdbXqdgMhBA4JgK3JbgmCR61nwtjihKD6mBniNtdSjtf3s6bAroKWtTH5qTNso7y6nqq",
  "key22": "5Gjt5WUwb8fiUHiJsFYuFysZHMspxe6peeNF8RQQYQ2bpzHE6cZ9LzNQAwH6gG8zBSduJdP9bUZuGnjJHazkQUvB",
  "key23": "2A3344XV4whjXScpbz6H1CCb25xpbmj2bYrXoPviPydWnLuNBYNwRNq8GXENj97Xm5HvWTFPkfBmRU2PUdo5EtfZ",
  "key24": "4AXMrRB9UBm6etDGJ6KehpT1JhNGFMTCZLTKhV5fGVsD32T2D39FBfBwWLDgYk53UBh3xXdqpfDMnbWdBZSZYhZP",
  "key25": "3Z5iFWVUKLbU9mjefqwBFQvfqD8EgpdN1BZ4RmnCcyTAL8Gj1gmzuuco3knnEmZCU1bsr8BTmqxCgpJKYYeqfz4N",
  "key26": "37tZRHvcnzdrKtdsKLQtCuMuYXJdRiqR3HxGQCyAAYPqQRHvLK9HKGC9MqANqAktdijUN8P21atvJZej56mW7Vt9",
  "key27": "4UujsMrZXCjz2EN6PCpgNscjz1yFv27dLFkeYYua2CfY2bD6vT6ghcgHfnjd1wa3EvnizECJKCKHbB7aHkcwYnPX",
  "key28": "38Mm9z4WpVQWTtmzQYxxKAdjpdcoBps71B5L4Cjww3UJfVKDQixkHPSbJwUBcVQkTKniExz99FbMRmG22CoqwMQf",
  "key29": "4CcdryFFkt942gqSyGQHt4oGTVFgAHTJeGBZdUSVZ8KYDWsvAJGsGSx5fAoQqHUL5QxkmoRMFhzj1pbAjQMGKHFY",
  "key30": "4FPpuDBHoZ1ahdYQvjk9CYVr5PTMpV9dcNNqzHtdf6evW5nvwXMWigJ8eFky5pVRoApkDDJw9VuwjgtW5rQFRTvJ",
  "key31": "3WvWy7tsQQ9nw5MkBP4HWR8MPKZL3xSmpqaftByXCisZ93HDG2Vw5CQschwcvWEsXzvtTUdBSFBvVkSrYrLFWNfh",
  "key32": "2SuEwKJom3FqvhU65JzNcwbvBmf1N8dq7UvBfojEkULcrxcDaQMqdBpt2zQyCW19EMRiqtzaXMQmgZHzKS2ip3ej"
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
