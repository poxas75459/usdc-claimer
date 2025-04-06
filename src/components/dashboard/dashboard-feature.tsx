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
    "5HjtGnzDem7ShbLju1orQrUNKVYnsEXAXMt9ZxjgG6SoLMEvzGgfxpRFXNtUQVB6Efn4KXvC6CCbSQvUQcRk7idp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35WZiot7HCHcLK2QmPZMSNT9t3byPhHXoWkTC4pS4KDNjaAcwmRMYz7qmj76ment3CeKuy2svDQBuDFhvGsGmeE8",
  "key1": "2YPTZgDaWUKXXks6NDtwgtrUE69zpGZizifsaxG7f6reQi7zunCfpjbfEpd9NtqB5wBXfJTtbJhsMmVcocVAE8fT",
  "key2": "5s5kuV1XuJuxFq3wcw1v9jQ4SUiRb1v1z9A93vjkbyhCAUZxgqSo44LmEyxpnqei92nBtPSpnZAG58y7EUVcjTX1",
  "key3": "3E2LHhwL1hpXGVcB9QStjrUiFy7yY3LnfeJH2k1ikyKqZ5uWVsof1M2LqaZWYR4YUJxSdxfEiijetkG5CKsxz9Ku",
  "key4": "NLMojdhqHhvjMdKCLHmNKckd8vi6jzMMSLe5ZwunWs4B1EAgbTBjf5WShodSbGJ9yZKfjA4mfKLrS9qtw9HhuYy",
  "key5": "3uwJhbHa1YH1LoUSAeTd14j1Qc9MEo5gBL9wotjRAtRrLJiWVzrXAN6iuy2xN3vy7HxDdk7jRhd7uR6RAbmGQDjR",
  "key6": "4oRa97jSSPr5Dyj8zTmT4sgYwNei2YbSF31hz2JjLx2YESeaKALXwnvqf3m7FfuEifLznj8JNXpR25CTwiwgo11F",
  "key7": "3NtB1XZwaBeU8LW9d3PCcwspCNQvRRwa5hPBf5gjQ8ao2X2uKvs8jXh3pLXHZbeFWu4SG3CAU4x8RJgQBjqdFbRn",
  "key8": "crx6dEoHyWjbt8C1qs27UVwHmkpwDfTQcG87TGVHtZB5XDMCySZ9E2j7oRSFwfHcLixkd6BegUEJwbV32wdKZnD",
  "key9": "FYgwDC3XBnKfDwqWXhETUysVAJWFfKm5q16m9e1MpogvVruJKkoxsxhcgidzegW1p8R1E3FwfzWW6EZUqy2eZ7Y",
  "key10": "5NJFC1qnZnCoGqvKoQhUVca34DEqY9zEtibvUU1YZn1GErQRJDKU4toJ64w8K3eXcLTiuoc4jwVfvzc8AVhxBs8f",
  "key11": "2zXe2x8dZ5tg4HGu1Quj1fdzcsQ6tANoULR2Cdo5KKUDwsBU11q9YSQ9nCRJt8VZHh8iHwp88W9m143Yo21LWrA4",
  "key12": "2hmV3q76XjQRe8QmdrjRfjrhmddswFppHpgwT9ikMJUePmnLfGZ67pM87dNZBD8dqxn7ZJgjGyAUXu5s3aYR6NeM",
  "key13": "3xBkmvoqnzMQd2LEUeRY3JfnPLeDJaugjVTLvdyRLHGWaQKM6UYB6JWqx59EZh5PaXmsTF7GR7EJbVfGAhvRuSyc",
  "key14": "3dEFGVoC3GMooqAjqUxeRcU41EyuJTkjxb1nfuK94yEpEnksRuVWBFtCAKKFT8Upf1GQbFgSk9EFszeC7fE92Gdv",
  "key15": "2vnKSmNWR27hXuwtmxQUxMZz7GCtG6CKeES1AhQZ2Gq6P3EFcwCp18edhgbUoxthBBgxjvqkAPPSsW39BH9SLimw",
  "key16": "33yecLiFke2anz5192GDiJMUU56Umap25UE1ZSwjS2wiQGBzxavPFerbZEupnyF9r3RBsdcMLdVByPVh755Dae8",
  "key17": "5u1f4dQeGwdVHtCET7dTdEgpyhWi9X3GsZYruAZK5mUJJHqX9szqNcZsqMDmrWJ244BBCywamDNdtVD1gArL4MAa",
  "key18": "5QJBXp4gP2YbUg2R6hcQ8REan6g6Vz689ur55MBL6GinmEvrUJPZT4c6NwpyigzyhnGvh3burMysMYTiNxNE1Qn",
  "key19": "HHtt8qPvrUt1WYmjZNe4jgVtVGF4XDGufq7XfE6RDvm4osFEyoGdSz9THjWMJ3pSG3xEMgfycBrrNnskYT6rvet",
  "key20": "F5nf9oajDeEeNWhjEdHELbGcsTwtnwUFnyMdLj64RAQqSLHKK5wLZUfFU2KRuCnreqh72xJvzqcjvqQuZg5PZhX",
  "key21": "22H1AfW5uZsBzDehFKTBzsjeKvEXyzqNSkZHGqcDF1183fMdBGoEDT5L3R8e5bAw8sfmbkTKWnDvzNLmJweBtSQh",
  "key22": "4Eyew2gBChM2bByNTKNroFbvSJHegXP3HxhHaxF57rzxeH6syGDgPCXSCn9PK2ub9P3eceMyjgVMf9whutSJPwmn",
  "key23": "3aMuQ4UL7sVEewFwhwZ8jKWKXhKpmxKFYUEwFJ6F7MaRr8edYE3pbRBNh9h7i13fUJzbg2sT5n5Q4VPDYxB5BUiJ",
  "key24": "EZD2U29KjGXCkvMo8FWQwhWue6uBB4ovLSVQqBbdtMePxjQCpmDUjuUW9WMT2gP4WnHQNc7Ued6uQUrKJ6RnAJ1",
  "key25": "2LGtX4pjvwibDpsBv7E99jsDwEXRncnagidjZfQw1F7Zfo6mgJdDz9jcUeWPg4PuQYT46QspUH5vDwRMg35YuA9D",
  "key26": "2FXpCEpPd17xuTeSfYBkARtXVtG9ruRpNPQ8qwQGMxAc2bDArHt8ewXZH3c63vEztPFi4NAs6g8vYj7PmxDZtSFE",
  "key27": "3N6t5Aka637ENTWCy82DpWR6DU4e1yT3eoMcBzQJ3BGV8WMEqzash6EHeMDHCig3jtZqKAfZH8mswAjNbkVmsdyp",
  "key28": "4gYg41cwRbXCMJVLUpXuwKYQciqqEvLsDTJyBhHru5rAiVPagwWUFAjhtbLK8RnxSpeeYMwMt9mMGi6ezQdQPuhF",
  "key29": "5cebxykDS4VDZpXb8ZngCiAhALe4LYBEkxjVwM9vFpgZBwBCQTc7wXVF9qJhb9BQyzfZPGjPJgWtj8PFNLucRErq",
  "key30": "UMo2nqHmFE9G1QSjJfPJ6t5wZCAU3vn5cidhh8r6Gs3MGgqCkHMRyUud7XWsykaDyXepoToqphNCUVK7X4QbuPu",
  "key31": "3eyWWQWQCDfEvx9Sbh3GB1ZuCLoKKYjgbo782pkci3jNr6cdt6ua3k13DVWomg21ATrfbodBkb11vjWiT7gwPMrd",
  "key32": "cT5kdvgM7az3NtMqz17oGxoGuVAAWW4wcmX3qn4LyRKKheddnqE7rmzoaTX1QhHcsVW1tafze23w3LNtk8opBvF",
  "key33": "3FiE33gpjsC2fCPwkc2SZa7Ni3k5CYzAWceWjCyjwvBcXG9VH9zqiHPScYm7VWAzANW9hCYkjrtjtRLMaCdfz2wX",
  "key34": "67KUybMuuU8zCVGwV1nbPEebijCYdXgyoUynpWLxQz4waDBrZ3c8wvgXeukL6S5dgidDXa2QZ2EFifbitwjzEbTZ"
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
