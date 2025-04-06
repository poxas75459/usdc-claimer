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
    "59DvkApW7TycnZpP35DG5wHAbg4oQ7ySTeBQuUWD1MXNZiu7aVPrMH27zLUYfWcPU9EgxtRL2E5UVJVgpUtBKtJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8BV6thzNRAomAymCT4NhWRkLyWTLhHQYQxcqa2i7kGuR52VL3PP7i6rbaZKDbqMa3petduiYpifEG2x5mLSCjWJ",
  "key1": "5U9izwBkrKwTgMzt9YGmWa92y4KLWwdhTBUJUL2ogdkBctQi19t1JEBdnBnbL6fcNFgofrwKBPVbCjakm1gYnUvb",
  "key2": "5mr6oqYcUZ3UquEcuj4BDHxbYRw7WyNjumVzp3en6fwz6ip5jE6FdLh5AXL1jTMLBtfnaqgK7cqRxuZmSsd83Ti5",
  "key3": "2GXnnmk323zapwGNzNJfobWqUrhUc4xY3DDRvMnaphFzM72fjTxt2yiJr3eEaXh2dW9qQhCCXjANMV2rei1igN7U",
  "key4": "4Yropg8tVwjbvfQZcVvrAfw1JmXzX1ch27hhGGXpKHTNMogGvgS9VNVLXQmJjZw2U1owZq18tjXqNQ59zC1gWb1F",
  "key5": "2adtXac1XR2fm3hUjHhcuP1MD2RcBjTBKoWJVMR24SWrCzWpyBvuk4siXbmqYsSn2XfpEdffAmXhDJDiADzN78YJ",
  "key6": "5sTYNnNtd3kBag5ymiTZzMvGgJQNnX4JhkwkSXhSXDe5vQCQDtchPFsGSZo2FvcAjD1RB9d3HJg3h7QtLng6bSSq",
  "key7": "67V5Go9uen4uhrPJesUh7KynaeRGYfgFuysqWfcmgynR631FRqmQYjFcakVgrW3vLPpcDXKnS9m9VEpXBrCeWhvB",
  "key8": "5kHQuiy4UNua7xatqEnDJXQqVwvG2X5sQv5vnsDAXrzLocRBzfgZtZBh3T9LMcivVSPHyNexXQwwbTq2BgFM9imq",
  "key9": "62JJASDQaaUC1pd6XedFiagjUUhxrdNDGn6zJK73aahcgyFoTjDZ9SosF8XdswukcHsUmqTUdNcnTFSmosCdKxNs",
  "key10": "9e8tiMJwULFeXkY7dXP9fK8eLQigV7zEscicd4n2fXQFJeuPrFFEeyr3tJqi5QdNn98DLaHW1eQdmo5w9wcnrZv",
  "key11": "3hML1TAHyZpxASFdHiURcibB4EN27zrFLkjN6k6p7wDSeoKBCcyWcku4dPZ4HzXPMRLzo9dqSpHM2UbQyUSuPhCC",
  "key12": "55BLCRjzKk9QzMt5F15qNAbWTrrcjcxLxUM7rPTTbB21tTUoXBTc8K22sJrBqjwtSRbcG2XPVCAKdftaZecXV7AQ",
  "key13": "TiT6TbCZV3ynytZwFGaCf837ZUSeaX1zJA96grB2KQQC1dpg96WBn33B3dAZHe2j3MSFtqrE3RhwnDb593iMgF8",
  "key14": "CSGW4sJVgok2P1pw18kqRxTbczLG8qvBoBxNNhSBkBmbh8eaAHz1H3bFoPUkUq2ysZxYBpiUpPoXAritsm6sB5B",
  "key15": "yjK8xJXsSe9yd6a4LeLpZCx9oDDToWfejsB19bqz1W4k25Q54K1miGor3Msj2s8mkFsPe65rKvcNkpRTMkEgGvK",
  "key16": "43ftSqFYxPte433nLmpiag5EdAg2tv8NeXjcjTZkvLFcYv5wLxA9JAY7Eg2FHEUeuSRGziFCgg2b15rm8nd67qmv",
  "key17": "29B4LKCJ2hdV7eSAH9TfaZNGU7AWc4D8Md5oMghyXtvyTB1aTsaHatr4tLZ5YKQoscGq3YkpqtNpY3r3pV5AeFgx",
  "key18": "22dXZ5UrNkuxNVqqPCEd1kKdQB8FX8dpKBR6Bj2jQr2EV5eZyLiA9yrh4B5xCu3GWWUhMZYsRcqUGzfBWEREk7bt",
  "key19": "4MJUASFzstQ8rXUR9beS9SLhCvoxWiLATrguuSFq6958ZRtrDQpvi1FibMSjQoDrJEhjetijhcZd21o3zC9JJgom",
  "key20": "5Q6Ua1m7J7KFsSjhYjuUXGWcfLqxNoMSYJpV1wuMjm4dtjJ6Ps9FbgsVvgteairKiBpSLZgs3q7tEGkBBAQDhahK",
  "key21": "47idb3KQBX7C8bRKzCTNBrNPPRDgWnRiiKiePs7s9x8gpSngEwVEouguFGVfhmmgbficxxbDJY7uyt4dKR5wrXrS",
  "key22": "3vZNCycfuAYHRfSWcqJPZ9BCjTbkJi3aLiGWeXTforX6wXnE3X6wacuFjtmP4pgBcuV834A9dQ7BpdxGhAE4Kwk",
  "key23": "2PG84YaLWkJ51RgYZYCJbcssZdJT1X7uvaN3zwKbJYC9FoAxa1W1WREVzpjygEAGCS3GKLyXpwSo9aTqz8W9REt4",
  "key24": "4jFATJmv7Gn6wLcJGgBmqXYZEqphZQTYVdzzDrsnUuMkMHQXmtJwEBeJTNE38c1SFzXHS7GUeRpZqAsxSJRWiCFx",
  "key25": "5g5TJxjTSyzzn46EBqgCa2KNtR4ikfckqPNiCNaRED8o9N6ToDUarXPerYsCbUDu3TEFBJSSsKdCakKx5Jbmbg9o"
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
