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
    "2mRE9nBzxjfUB1t3j7bRq4id6bheggErUUi4ur9u5eDS3uWyzz74twnyiZKdMz2yHTici9PcnRo7dkpmZgPqjR3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mC7bJxLPFHt3Q4MDf5WeLmqifMiZE5eYcSVW34RNeasrnL32qZgYe5DVbDSuBqWJV8oLyZxPSK3QK512DQDPmrJ",
  "key1": "54owjEQr3iAAKUKHGoN8y3f8L99a38bJ9Rb8mtusBn7NS3Njjy2niKEPdk9CM6vjGrjoD9JVxeKwjLiUPTNYi7Jk",
  "key2": "3qkfA1PYdYaxb8eVQ7uGXqYQvzNbbmMKKeVNzoqZgBuXyuQSgSfkhz1z45ZPUrZ57sXMjkjU5fj1TyTUUoEi1Z6F",
  "key3": "5zsXboLRuJ9TKrCfCaJUeVNJf281Q9aj3doJUBW2RFaZPDJGNDYqwThDeJNrKAQgJC6YfNMCH21euM8mFCMmgDyn",
  "key4": "2meXnpitBF7ZdziKwS2AY19MWa3aMa2zxnSEvX3NQBYoZZkg5fPui8wsYcXPVeULQb77FKzHTg1UrDup88uqrW6D",
  "key5": "2J2Yj86nhs2hcYp3BuTuVcNT8jgZBXbSCTKnWUq7c2e1C8AdGsBy8yjAmFiRa3a3jHfHJ6C2g3MvZzwtxs7mJycr",
  "key6": "2ZQHSSnDmRkYnwTFuwcYyv1PSXpr4ta45uehPfvJTWo4sVJxuL2LTnFRqqCqvGaZNbS2Wt8cZaijSoAhtbi2MioM",
  "key7": "38YR4K5VVrUQdDHX52Nv8e6MAW9nhi7qeW2QQyTUbxLS21ZS2HLbaBUwRwpgQEBtEJnay6P37zjJnPc7Jpx936Uy",
  "key8": "xvsep6J6PDFXtkQzLcc39nKk2i1CD38LYm6NEfzNNtgjYuSJQFu8ojqcKXZ8qvZdxXGHWFVC7qqZGmgjuESeJJt",
  "key9": "23UeKH44dbEiwLasueeLArX5szrJ3ptfaqsMLcLgfv29RXb88WognUPxfYxdKKC834NKUpjsUcRwLxUi56Fxb2WH",
  "key10": "3oDJNnyBxyysxrcSiUjvyznfKLvijm54HMWWiE5iRb4mYqBKukJbc4JkrPxEGxiuJNR7jMEkhRj7nBq89KH1Bdt7",
  "key11": "4xjXm6rDJh4nY29NT92UApfR8MN8nj8LESQWRNJqvSNyzcZxeLHbpUUTNicZimtfoQgeg4gS3dBKmoqF8sKgNUq1",
  "key12": "4shhPvvcCS2rnsu6wDUZ7RXhvGcARZw2zooXn2vqhVrpJ8yqKnBzV1LJnfvhsZ9tVqSQgMKyjvJmnN3QxJYKMDer",
  "key13": "2FWWBAXUJAGaNiJdDpYQzn4C7KFkqcbTY9HRGbMxxCZ8rLT7qDjLDt5cTr9HB2AK6TQcJmrxtimC9hvhtYkK5J5E",
  "key14": "2mddHqKHof1KBKbsYupSBCgANgxRj2aBukPowWmdsaFQgQQHF2AvU1Y5EcpoYYmKQhEP8TrP4Xkmmif7jLEzptup",
  "key15": "4aZAEFmR8JoWo1B6TqhTidcf2iGwRpsZnB6UXbYvneXJsGUEZxF2YvfeADMm4j5NSv2Bg6BnkbuBmYhtdXoRnvjN",
  "key16": "HRkRUkuW7MTKwPSMw2WLqamhgARKwPtCoedEJFrtgGhKMmWeoLhw2Z5mcG9Vze4RyuCfnqzAQJA49AhG5EQw3KW",
  "key17": "5V1WF6xJgNrWgjRxy6StKDfRsJvjwha9TF5ao2x2KuUxVJiHKBfjLGT9yZGUvSK6BstShhYmRxzru1X3p4JWerue",
  "key18": "38BikfhCwpCi218iBix9mroa2boiPTd7oeLbsXFu99vXHNz9NqdQiz5X1aEn4NjqbcuYwMwTv3jtJnaWBQ9Byr3e",
  "key19": "5Va8YDNbmyzwf1dH7VopJ8cF1RQz8itC7rCfMSZg5YKU94yUE7u1YiX1X1k6cMWtKxsiWefaohWNgW1UqnaPhx5a",
  "key20": "XJswVdyJQcGq14nLf6k23eA52iE5rPaEm3RSVeeTcd7TRwwxmU1835ZoQyum6WSan34ADXd5XASG3aauVpEJp25",
  "key21": "55nWoagX4DGxGVr68Qk3TfH6WCY4Q6SCbsCrATSxjuibqXVzyDvMn9PUHAx9RBJaiyS67qYrgYcX9H4Jj2GcFBtj",
  "key22": "4fbmDNMY3nBCMVPyhmNrQZHxNfB4DNi43X2ZNttzoPFBgfL86syKtaoSqZREm1MWrUGgoXDedMEu46xyz1NNZn2w",
  "key23": "5cbAoV9ZSozp5govrzN2kaVSmdvM6u5C49S6hM6Li6yjG27eD6vv4i7E2NJeJnW3f8r9AV1VBUCqvFN5WrqYquu9",
  "key24": "4oi42JT6QBPm6E5dL1HPnvS7GR2ABMEZPeNhqTzf5U1ZkzyLPN4df3uVQ5Jc3z3V7DQZ64dkMS9DVWNHxafa5Fyz",
  "key25": "5pZvPaZXP5qfy2s74AsF4H6zExqJt9van3pADE8H38mad26LqPv8rqw11eGUgAJqgUXmwWcS9EZsUq6j83g9vrwQ",
  "key26": "fN83QdwXkjp4z148Xau39dHVYtePnjzHFF9bVtzgAiijc9KS1jSEZRpDyNsT7tCkZhs5j5HCvbxDrEFrVmfqbXF",
  "key27": "5n97iBz6q1dLYuakV9PGKyW3Gfrf59VkDRCZSvBCSz1vDLpVTH1DAXm8vvrzahaHgyV8xF4rYGz7VFXGsAPbqXe6",
  "key28": "He4S8rDjY9xLsfdfy4PDf3LVa9T5Wif6y2AaH8zc2zWnJ6JvqXTxd5v3L1T4XwvxptZspcYn5xzB2coBUqrF8NJ",
  "key29": "2K1SRjfUgQV4vwaKeNBx5ijtLjWkKZXbRhnJ92wDJDeBLrms1SittK44NkPkMdgHsY3HpUoxas9eSGTcr16rNe8h",
  "key30": "Hkc9R2R6FLsUMsa8tbZzmfJpYEH5MYwBWxtRZZ9Sf9UYTDZ7RF8qpw5zKp5xVQjJpZKxuLpxgwmiwBxFBkNPLg2",
  "key31": "29HGXNQ3MHMRgxVhnNZT4r2qBgYJmPcxkw12sorGKiUD2ewHQqMGgHS2V7LazXLqGirP5AkSKsroDQRJeVdT5kXU",
  "key32": "3c1PaQrVK8V4Zvxiqxkwq3QjYDVoMRsqxWJEDBecajUBUzmvRqpwTwYLGhJBp3zWKTCerrQej6ksJkHxYj7Pway9",
  "key33": "2Exzw9Mq34d4TZWcv2AahoWF6m2PJk38bgGizFZScUWKTxyAm4hEGn3gJp1rnK5sYfnc2mmBBzQ8RSEi66Qixtv3",
  "key34": "25jsUxb1zkbVeAXqfkqvAyQcc2juLgyqKZzBH9EpGbPaCsK4R6xWhnyp1cWdiZmzwmeAYRcAE1SxiDsGPQzvhYcn",
  "key35": "5r6cPPni3kUfdagoQa2VyrhBW9YsTgU8EaQXsFPQg7n7XBfje12EmkFSDhZm71VNyq8mH8N3vdiMWpWwfLgDx6Kh",
  "key36": "2py4EyemiaBYTdxLDahLmZU3cZAcco3qnT7dKu342Si9dDNjK7QGmHt88kXNXEQUisPGmW5zZerZqNzRqRxzwGBj",
  "key37": "4Mge9AVJwjQ3r5LJhjYzqL8Th4xyT8ygvKLPfwyBQh92XUJWRrjq6JWoQoRYhNy9jotgdG9tpPPs5oLMACp35jLT"
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
