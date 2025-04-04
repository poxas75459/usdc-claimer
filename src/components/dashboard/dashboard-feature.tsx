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
    "5sTA4yxU5hYFHYwCa3DXzZmSFXSNYLuR7esuR9u4YuYCBkqP3YzyckM1338pCWhAJnztAY7P1ZhWGBK9GxyTsFCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kM8atsB46oasVfVhV6N5sJwiNWbzXNpAMSHPrKBJVwNsSkMvUX1Wp42w8ko5NtBdvfjPJ1vhCEjFXBxbs3NAANs",
  "key1": "4KqAYYYUxjHncTy7FmvZawCkaUSjaTeqQ9QsB8Zc31W9EGYof58E1e9caNXkytoHhvJV2i5peTZbrfDjE1WHg65i",
  "key2": "5XFVEkfuVsNWs1DeafAQFMGoqUkoLiVaV2iTuSnUeDphs4Z2oKWUYqgvG1RQgQkkCpE48Gx7P8zZsADWoiQqkXV7",
  "key3": "4P1fQpFAqCCr12kmiNcaew3k9GqoENeCZEv5wBrYFYu183fB2VPqejFM6uiJZp1iJ2jFpzSZKb9b55HLCxJcjLef",
  "key4": "3tPD33ugkRtkjMLcLNXWn7a8Ghovvnq7cNiZG3GjT7J18h2msW7Qa5bXzDZrPUNowiBGDGffvjA4Mgi6GuqGeuHh",
  "key5": "5MZTYsftWxgTegpw6nPcJdtRMMxtDuiaqYn8yLKdMpUCMbm3jthHw4SwMWyij2VF2GtkKdF4m4TWBk3p56sKH4xu",
  "key6": "4eYwtcGbLGi28hVwKswxaw7cg7NQJX9RVvH3B5gAB4whDZub3QJRj4JVsB9283uTtLjf4p6hAJTHsTiD8oWoixzm",
  "key7": "4ziD8jCmHnyb3WkoqhDhRQ1GCkqwpzXFHKfVUA2PgcicWkyGf9bAiX4DoY64gXp553dZsL5WZwvPCW2wMtwmxzCN",
  "key8": "3CR3c2HV43h3QtH9utAKSJtH5K9m3XoDqJZ3wVQqZNV6Cw5R2y6rp9UNnbgir8LXc5be4AqUt99gFngVPCF1k23b",
  "key9": "5RDToef6hzEKKe4WbgVQ4raW4upzE8cM8ADrmfcaYTuZefyCSeFePHdGqkQWdcYgikuLi9LDwSGe5EytNTnkPRto",
  "key10": "2V1WKjrYNJtaog3jtj3UxrWmjziVczVyU3TmnMKGYtFh2jvPmo5n8J1YMAVxERk19VCxb2Lw3musuZrjs7SLJp1N",
  "key11": "fKS1JuKFkomZungT2d5avo8aKCPLvpHpq2wFQ1jdk6m85vSj9Eokg6ANg79ZTN4NuqfSXME5zD8t1XEwfFkPPLd",
  "key12": "4QVbAX6hV4esJkmLrKayzTKqtYHy1SLZW2BW8iPKvadpkvDvk7FrAEgpnH4vQ1QhGy3ewH8vYNiFXa4MAiv6ijkw",
  "key13": "5uE4KQd38uqZ4rr9GDdGfUtEnfJWbquW5JDgST28oahZkdYHvNiAoNkYVeEM3YZt1Tv3UJTXUCCoS8mWSVyW1ktM",
  "key14": "3b2WmratQFc25yALQq91q2zHdzzjW9bDngwZkkFFv9KaP8C1J73wBy1raQhvM1QRQDnR34dxKez7VkuH8rCzQAak",
  "key15": "3qXT6VojBjjQpqXEftLFZcPSfb8ussXmbK11muEPxZXYh25Hx6oYqbjLRtULiAEo1EaDCmjFqFH5Tk1zrUSyxjTA",
  "key16": "5JhwvdenJAuh5VpeQ98zYWo9CuKe3EU77U5dVRcie4e7RhDo1PGQnLbVS3iSc4qhvtwfjonQhGYYyQaADUeDXRX7",
  "key17": "38NB5JjmnEWrpnG4TZns7S72JEKbrG9tWuQaC25KNZeF1in9ArQ7tLtj6xiAZALkdQvJ2a9eAWMpU1M2nphWBmt9",
  "key18": "5aE5Bf8xBt9FJDYzModNVAjdHib9PuYSm8ktVhwZqRrGXdWKHhQVw2BpQpqDUeQGqEZpn38Sb5T7xKWhWdndKXmG",
  "key19": "2VGDnRCNHrMpownZLY2HySp81rUh9cdzbe1fJWxwJ3rfhHvKaPffhtdAdHzyfQ4E5LBn7jiNUKhNRN2sQ6d5Dncv",
  "key20": "3eC6GizMYJfqHD4ZQX8XbLpgaoGNi27xcn1is3yDw4kniWx4iCCGiST4vpMwggCXxC6iYT13fgddWCNt4uyhy3LS",
  "key21": "MJNK9ua6ogsHdbXxJheeKFHC5Q17vWpo9gBJLk1tf4Y9TExTWcyuZ8jaKi3kT2Vfzv6BXYh5FYgU82Zi7fyBbfy",
  "key22": "54BMSnhF5BcAemSVyjqtxPpdoxhPtkgDbDxiwfMiaSnQ4qGMmHwWBmGzaMFMotuaJGLZJNS8d1HyzbbdXfEP12AQ",
  "key23": "47qeSmMvMZ6T9vpW24UqUMYGp997975sTzMcbbZvTboNf9NRcQ9f6Ca5BfLLbjiWRULx9iJ9ncyMnB1SHS6RVeMD",
  "key24": "3e1Nz8wbALGmez3RwW2JoTxrtpL9kevhdFBaiin1d5msXQXFkxzqzV7tndrUVe59yjm191YLsEWWoPTCmAbUeS9S",
  "key25": "3QUgM32goB3XpmaULVJGgQ68jGFKTzqvSNGK3tEYbW5LMtZrRY8TdtGNZzwDFf5emAb3NSMk8GWX2QHJPZwXrKqu",
  "key26": "5RAic3AWUzRSrisRY5fWpptLvME17TWqpSjdmxT1TJTpCFxjuFnd3xu7KvQx5a1vfpuGqf4eoio7LyAKcbAQEpB",
  "key27": "2Ji3aFDhYKpqN3wMF3DhL1zSYV9fqZ9YP341EwvVzxSV1cXn9nsyDvz7AExjkPQvqG9iZBPEo6ErNW2N9ULmDP6f",
  "key28": "2LmaJqJ1CGZL3WqFzfBjaSRn4yDgjLdUApecf4p7T3gh8dRSjUqGPj4zghb7nNTzwE7TPm45avmPjDawGwzduMET",
  "key29": "2oMLuMGyxiQLgiQrJhAoExoaP7rRYRvmzZuiUz4HHhesfxpUDJKhKueHm2SKXPL6LFntJ42hvZ4X5GZYP473HUB2",
  "key30": "56HtrPet3Mmqcsnz2scLBXLZeymX2HEUpBpFSQpnFBMomCWEC9JjnjYpbewz5mF9JetU6m7ZAA1Q1jBiHeZaMKyz",
  "key31": "3FwCRCotQ37HujVXBZRMryLGuWYkAbAhVYN8abLKymRRy1vi28ZvDP6LXvqUatijnQzTH8UFuYXSdDcPTNKwXd6K",
  "key32": "5terETjR6xBpJkpJHVq6mEmfo7qz7Ub6STd4iKfWZiA7S372ujLx7f9k288ovSLXJJxafSqZbggihvun6u5hwsrQ",
  "key33": "4stnZrui2KkoYXXEikXNM9yYSFrx4iQJeAgYusYvdkD32PVPUzTaWBPRfbqpSu51B2bS3ho3tBf3LCFkHmRJWaTy"
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
