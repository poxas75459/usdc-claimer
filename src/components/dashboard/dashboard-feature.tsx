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
    "2ZbhMv7EPPNiBnbKsqRzhjW2GrYbeq4o4kZ9h4CPi212cXSjH4PKWt62Yq1tLC5UoqworXCAUN7nnizwHwySUGfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bZ6L5bfh4bzmXZo5Z4PUcPD8HsoQg5x3aUiXyXp7p6SeRY6rvgQ8bbCtNGnieLYZJxiyLD5HSAcUgsZpf55HSwD",
  "key1": "4gjqKE16cSsCsKT8MRKg5y4xGFRZ53YybmPSwBDbDMJbT54YAsAFNmNmpLPtrbcFZLAW8yHbMGaqvp6cP1LUzp3e",
  "key2": "ZTKSyU5aoyf81iQwz3idopfcXGpA8CwRSWBd58fzEnmvmipTcNLfArgaiRASuEc9o5Kk4dLatpvtq4sVdQoQnRS",
  "key3": "3ugkYbmVeq9vuoH66JzJybnhLpPfn77yFcnvvsyJVTd2q8zSnMjp111DrSTDrxr28Exq7b595cdxRHqYYBHMSuqY",
  "key4": "5ugrmgxpkVa4MLBA1N33yghk4vJmtyzcQS9bh1QuzC8nV76dRiLbDKSHpSHPBVQfzwXT6kLwxWrDXE1HTeGRkikP",
  "key5": "5mconVXzLMnk3Cp7RybhTQWtffLKF3vSj3zCn7r9etvnARyfmNX5cjSbutB1m6XMuzP1gJ2rHDhCjP2B4WXMz19G",
  "key6": "44V8wNSFNFi5wk3sBJkxjHb1GZ3D7j2WExS1CLdkWx7ZQWWWvqxNbfsm616Q9PHLeCNkJyRKVdVLBviJsvVFrFsU",
  "key7": "59sKugx2gXxLJ5GAK2wiG5AnFnTCadWVYSnKUsPqVaUngTy38z5AotWpRFci5qY5izjrxaS6RvfnUxwJkpZwk7Z3",
  "key8": "3yAwmZ8GZg6WxuQsACsLWBu7n6fCuow7e3FYgqBGRPr93CasBA93ZcLF2Dcv4kZcAYEWx7eRPQZT3ejHE3Aunw8y",
  "key9": "4u3oqnzKbDJXWedMt1aRmQ2iSVQ9nKRV3mUCrLSSe7zy5LYE6ddqbkoMK7SgAoqNezMdR8jnsj3aYw5NwDLBS4fr",
  "key10": "5UEqdMxAocX3KhLfW1uCYmxZ71TFNV9PZq5jLP9PY3GqU1UpDJQjBzUqksknLpjQHE2JCN8CX6aWwcFXBXmRYKhq",
  "key11": "2CmGx5aQzVvnmi8tCYcXo12jgjLJMUcKDfTeEQAQccUTpP78G1pAnHKqkQ2bwuyJbvchSGn8u3thDCMxxHKGH83g",
  "key12": "64qvLU5sfGEPf1GMCwaV3qAbC3qSxT6uRcKb9peLZatiwywQXSTsPqYHeP186XQPg9mJzXWsmN4nyUXdBBPmSdVz",
  "key13": "63h1gcpHAUm1qF4LAa9zUiHsGXPZpk3rem8c1f1Hy7egHwGtdYVbhxLVaKPB6RgeeBxpphN8sJyoMokf4tvvsMYB",
  "key14": "3zQSYVyHVaKeddTcWT8h6wDhAozwyuuimZRtpa1MaM3t5bfVhCcRJr2pg3wr5Ny2buW8M6B9sNbaxn3hAjFGRX5X",
  "key15": "5PXAZqSEQ4EprVVX79Ba5PCqkssxzSKqNNpAuW3tUQkK8Z2bGKV6riG5FiBFQ4Snfcd1wNu726LvJkv1a8jAad54",
  "key16": "34GQ2RjaWudvUnYexk9es1f9YaQuQ6444wtjvnieopXZCXAHTrBD5TeYckhMvDi6WJUKMHQFUbf5CssGgJpSXpxZ",
  "key17": "3iAz4sn6EjtivAkir37Dka6nmmrGs87ySG4f8g6cUZYMo5QVy7xSQRhXeE2ikT8gESuLktE4zPUMXmmWzJCaeXrV",
  "key18": "4FoyCn7GNgBpXBURWv8N5gV6BFuuxYtgnDow2sBPzVsv2eygjDGUJsS6UHpgAj4rtWFNasmG1wafMYvyApBzT6Ma",
  "key19": "3a1Uha8RXkYtun7u9gjfm8HpXYfnQH7tyxNyBM5QWgYrNECG7JjLAUEP3fbXXZAxXCiJEtvTNWNgW3ZvTJJvy6Ma",
  "key20": "4szjPihHVXTbhkqKUpNPJkopR5g44XVzzett68K4AfbipfTxKGNdBa3P9QissL2JqfpvCS4ueVVNCvBmqYPtuchk",
  "key21": "2fgui6Ub9B4EdkeB9wkjtQnsf2ocsDDBHkta44cMSQQRuKd62Z4obXGNT9ZW7wXR9tjiT5Yo9KyeKNNiKRa1AHTA",
  "key22": "GhA5TWG3Tswnc6jXUfnDVHfhuGGW2XJFUXjsVCDiU5i8uPTUWpnivQmkLXaozpJMd8uoYZkAYwyBABKduED4s3m",
  "key23": "2SgFSij9b2fhMkeNS8otEvF3BWyVc3KPb6EvyL4naZSP5YjvhC6NEsrHaj12hLxxZECqD4gKh32WViNsXiQU3wCA",
  "key24": "29WZGvJWfctJW8jXZ8S3inNkPaXS2sA2RTB4UBJt3uYKtKJmrZf53wedv2ea6jE4H26gazRDp722qZeTi43b7RS1",
  "key25": "384tN6ULvFwD89pTmBVqTJjn2CRe8pn6SYwtW9xVz3yrRNR7PaUJF81WVN2a7aCf8k6eZqeuD4Syx8Aeh6ZPTAT1",
  "key26": "4Saq7An4v4H4fTgfy1a8qwWNFcvksAaDrMMf3QzX5vRks8f2ZGCWKn28HVqnVyJsPBbVmZmK9SFEynhRq6piJQgF",
  "key27": "24bU3rUvQC2ofQ3p3X96zWqmu99ZQ6mZeynDzxGrxpgRN3CYwYgCUvhBosmoJu3kikEhmJR4T2tH3k5dNy5G3KRY",
  "key28": "4KMyBRTcAFnjDcBqoJCy8gJNnC584oZQpxRcMLzUCaE89qo1mRGiJyYtJsi2zLiwvsxT4i19hgvAuJZw2KbazW8m",
  "key29": "3uY4qk9TqRvNo9pA4XG9rTQiD5huQBwWFaxABNEr2zphRbrC6PRVx6KShn6tEWLPuzpQHgiZPKGtBbBHsEE3fyoJ",
  "key30": "2RAWVxjAeYRG9CXaLZ7ToDwCApzhW2Ex3CTGr3NdjwgF3b3J1dg8kn5iTcudh5ixbCTi6ksc46G2c9oUWvjkMVaE"
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
