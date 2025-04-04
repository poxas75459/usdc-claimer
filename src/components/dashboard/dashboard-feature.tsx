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
    "LydU7stdCjLnt7EKfkmAXXjpdnPEj1GUaQJJFzoatTrJwxXceCsVnKRJ3pk4GofjcU3BUbdYiy3gMB1mnj2rnY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTPqxD4QGfBpEk4NX9AiXQozuyAFQtvP5f68eKmJYpmpe7VRGTQVX1XbrRZgDJL6gqFAnGWXv5bngzjicL4knoc",
  "key1": "645PPgRPLR4Sx7DfHwJQQUJB8LcKbYoh5zQX1NFsjAJHvSC9L4huHrR4UwNo3PigsjbvgscY35X783gB9sg3Rt2P",
  "key2": "4xy7qcbErXuqLc355312XjvaN5HTiggrzXVko2URt25M5maA7yo6rT9LbwpTD7nDQZtV5sarwMyzmkrz4gKWp2tL",
  "key3": "5h8CWmDCmJbgESC4xdusbUFvVWaDvyKmte6gmP4mbXc7JYFNzutapDwQNiNtaChrw7h9qFoj78tG31qDotu8nK5Y",
  "key4": "5pMLNe1oct1U6kTci9NRPDsovWb79nUphqNnC3dmw53jQD6SFqia9277D1BL2MGfKHHZmkNgXCWSu6hqmekqyEoS",
  "key5": "76ZCNo1qqKsW29eQ1QtisXGKr5NZnES5GxuWecZRqPdipQJyG8M3hB9H9HDP64h4bbcfUN91X2JeHTM1aLzZCBX",
  "key6": "5Ve56nhWLgqkcxXNnNiGrepdVW8vSDFSgbJ4sCmq15X11aajDmsBB1ULtwAGBqcXFW3og2qSLbgWzc7eTv1DmYbt",
  "key7": "4GrywAmKENR3TnmrprUApM6A9zmUJ3UCrF62nRjH5KHJDGa35hGBurUtKUsLaoHn7zXNpvXFBa1U1tM9xkyv8LfM",
  "key8": "5nUMH9WM4xLSoMJxc9ZGxAAhzbepo6bJoZa4F2gnMubnGWGXXvRCyQa1pffuGKwEDprnD7P4cZbxKV2P175APQhP",
  "key9": "2bsSdaaeh5P5if12UKu1YjKuXMGCNNP6jemWNwQYc8uzpsDPkW1zsnmPRWCLqTWoA4UCurJj3tw96xYDur4jL6xk",
  "key10": "2zuBTeLdh8PwPBa1D1SycLK9cWoHEvSwE4JzbMF9wHDuNgtPvQT8LQKcRHSNvPtWjZLFbT3qYYLyE2gjiKRPcmWP",
  "key11": "YRZUsiBPeZgVV3PxJUAQovuCuH6a6XLUgMQAxbwfdvRUe4swY5nK2yZYzfc3QBD2Z6ndew3kT2K4m6o8aXUiCNk",
  "key12": "4szf78PTYKFhvmbbvs1JCKC8Qz8VNpWBaSGYicbBhzaUeMeb9G6LziRxUVMKJvdfKD8JA5QZwqCinSDWdGGYtp3K",
  "key13": "icgCdeagp6UZoyaSiPwgGQG3A4PX3of6YVCAoYp75wrRjuRviG4pf9XgBa861m66xqySmjZFx4H9u9oBdy7RbBb",
  "key14": "5ghUZ2v7aKvXsUDsrqxPJmZJQAcHjgN7jCeE9HFbQnojada4pvYER5BgRPgwzW26Aoyhz8oqR7Dj4jiAATiMpsMM",
  "key15": "546uJd2CdBsbi1R6Zm6bKKy1bnJR6DD2vUKyRjLi7X6Jm7AZkYzmPKze8pxMRxMaT66oJFK2ZU1qktBPGwSfXWVV",
  "key16": "45P5cCPTG4n9SeCNq2Q4w3ADy8X5JPUDS1L65kJtjoRpK25RgYbp3KpCVgARnfjJubNG7xmwRntn14iqi1cLV1ri",
  "key17": "46DnHDD2ha9jbiD4iLffhwh2eYfDoAAmGKxivcfEnkXbs4E1o9FZ5DdTQjvun3THfD5CQqz8AYZhzjhZQkptAiPD",
  "key18": "2BdQqdMDX2KievQQiZJRECmvEVcq6LvBAHfZjjhZFprWW3XFWTfZDq5updMxcXiNrgxJbdpJN9q5sdbJ3zQWsVVk",
  "key19": "6zQ4kmo1XEq9Az8CM8KmT9c9fMmvq2a8JzNhZChixA4QgNjPsAUTvQRso9Xzeb6yBoAoRWNqTB5q3yM9WK2tDmN",
  "key20": "2hqB4PeaGBhMu92VgBuax1kT25zGXg4MFZouEoiggeQFqQ7KYPJfD91nKqZcioqZqt6pV9NpBBKdNWuDMCFWKcC7",
  "key21": "4gUvVwSWLGEK8AeYvbWKVeFKFZ9vJnuFwmyYqS1sZLMx4YcDhotLcxEsSfjn3bF6i7dvd5VLvyYd5Wkdbm5dSuxD",
  "key22": "5Veo77FQVFe3MgAxYhGjGHAn9r4bWSM3ZoeXowWvAiRJ2DvY5Pghpq76Z9XdWD1gcfTzxcoBJ5x9MJ452o4AAJd7",
  "key23": "4F6ouKU4FKc1EpudKiz3JLMdatVGWMq73ze8VZ5Rw5xjS3PDJgC45iVNSkz9bSqy1v1t8GRHAocGknvukShLMy14",
  "key24": "4GaNEqDxDYzecnRHAm5uCaEZFqNa6ixoneQmCt4KiERC6qbARY7BrdqffLqm796xBrAts7TUJeU87vJtN4dyCWaL",
  "key25": "Z8BnwihXneebwXjGMrKCmH7DNyGWyDtDTgXo338iHU5dFUUcLDZfWCSjxzVvwxcn2D5efX38KVvkLahnhaK5msL",
  "key26": "5vtf1oTV4VVFrAceeEkHKbNEzxhs2ELFAg1DUH4vaSrEanQAa7wsDAVNS8RMg7b7AvPmQQ4uca1nqHK1iCnKkuaE",
  "key27": "4ACrUp8JHms9jBYZG5jpNjtuk7wDk7R37uQrRgPaNcXM6HCf67c2PbNrvJWY81nvdRn54vF98ewGp57jydfHgiTb",
  "key28": "5SNu6oj3SqfPjmuLgAg5qkQK4u6AZbgn1z8CnzLG382a78syFuoyxJ1oYaMPd4EvTw2e2AFfFa9MsR1v5ApuLqhQ",
  "key29": "38a5coy1gJRxaoUQP7YZZNfcE8fsKT5EkKJNpig6cN1aE4SuNYhRbZxNU1PzE6P2XFEeF1JeTBj37FrdP1w4cZFW",
  "key30": "2pbqj7mo8UA7QgCXt3aESJqGrokvYT42UewFT4Pecbewm3it3VpcyNFN828aC1TDHyYfUtMSPRCUnuX6N4bMUqM9",
  "key31": "5z6guRbsdZr5WZ6LjioUmvcRKYraA5Sp66uxnDkFLvsn4VCQ94V7CsjpNLHyHFmsu8Xb2YG8CG8NQ9BHdgYG7gG1",
  "key32": "5PMxSLJLg8okYcr2qWp3G8i45CTGVwuQiAr99EQvXWvfQdmAAUr1CGjgUGou8ChUGbNf9uxWkioKjxc6cxjo35yN",
  "key33": "5kGd8QzLu1WPPdZMiauipfV4XSHW4zMZJu7m4HyuZtm6HHUNVnXuTvsmdduJH8pbui6FotRdsfQkvT7Akrch6Esf"
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
